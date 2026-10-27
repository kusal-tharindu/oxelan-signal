#!/usr/bin/env node
/**
 * Editorial and cross-field validation. Runs before every build.
 *
 * The Zod schema in src/content.config.ts enforces structure. The pure editorial
 * rules live in scripts/lib/rules.mjs (unit-tested). This runner adds the two things
 * that need the filesystem or other posts:
 *   1. image existence + content-root containment
 *   2. cross-post checks (duplicate ids/slugs already in rules; superseded forward refs)
 */
import path from 'node:path';
import { readFile } from 'node:fs/promises';

import { formatIso, readPosts, CONTENT_DIR } from './lib/content.mjs';
import { validatePostRules } from './lib/rules.mjs';
import { sections } from '../src/site.config.ts';

const errors = [];
const warnings = [];

function isExternal(url) {
  return /^https?:\/\//i.test(url);
}

const posts = await readPosts();

if (posts.length === 0) {
  errors.push('No content found. Add a post under src/content/<section>/YYYY/MM/.');
}

const ids = new Map();
const slugs = new Map();

for (const post of posts) {
  const { errors: ruleErrors, warnings: ruleWarnings } = validatePostRules(post, {
    now: new Date(),
    ids,
    slugs,
  });
  errors.push(...ruleErrors);
  warnings.push(...ruleWarnings);

  // --- Filesystem-dependent image checks -------------------------------------
  const markdownImages = post.body.matchAll(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g);
  for (const match of markdownImages) {
    const alt = match[1].trim();
    const target = match[2];
    if (!alt) errors.push(`${post.relative}: image ${target} is missing alt text`);
    if (isExternal(target)) {
      warnings.push(`${post.relative}: external image ${target} will not be optimised`);
    } else {
      const imagePath = path.resolve(path.dirname(post.file), target.split('#')[0].split('?')[0]);
      if (!imagePath.startsWith(CONTENT_DIR + path.sep)) {
        errors.push(`${post.relative}: image ${target} must live inside src/content/`);
      } else {
        try {
          await readFile(imagePath);
        } catch {
          errors.push(`${post.relative}: image ${target} does not exist`);
        }
      }
    }
  }

  const htmlImages = post.body.matchAll(/<img\b[^>]*>/gi);
  for (const match of htmlImages) {
    if (!/\balt\s*=\s*("([^"]*)"|'([^']*)')/i.test(match[0])) {
      errors.push(`${post.relative}: raw <img> tags must include an alt attribute`);
    }
  }
}

// --- Cross-post checks ------------------------------------------------------
for (const post of posts) {
  if (!post._supersededTarget) continue;
  if (!ids.has(post._supersededTarget)) {
    errors.push(`${post.relative}: supersededBy target "${post._supersededTarget}" does not exist`);
  }
}

for (const post of posts) {
  if (post.data.format === 'digest') {
    const known = new Set(posts.map((entry) => entry.id));
    for (const match of post.body.matchAll(/\]\((\/[a-z0-9-]+\/[a-z0-9-]+\/)\)/g)) {
      const target = match[1].replace(/^\//, '').replace(/\/$/, '');
      if (!known.has(target)) {
        warnings.push(`${post.relative}: digest links to "${target}", which is not a local post`);
      }
    }
  }
}

// The rules module sets _supersededTarget on the post object; make sure it survives
// so the forward-reference pass above can see it. (It mutates post directly.)
const summary = [
  `Content: ${posts.length} post${posts.length === 1 ? '' : 's'} across ${new Set(posts.map((p) => p.section)).size} section${new Set(posts.map((p) => p.section)).size === 1 ? '' : 's'}.`,
  `Sections: ${[...new Set(posts.map((p) => p.section))].map((key) => `${sections[key].label} ${posts.filter((p) => p.section === key).length}`).join(' · ')}`,
].join('\n');

console.log(summary);

if (warnings.length > 0) {
  console.log(`\n${warnings.length} warning${warnings.length === 1 ? '' : 's'}:`);
  for (const warning of warnings) console.log(`  ~ ${warning}`);
}

if (errors.length > 0) {
  console.error(`\n${errors.length} error${errors.length === 1 ? '' : 's'}:`);
  for (const error of errors) console.error(`  ✗ ${error}`);
  process.exit(1);
}

console.log('\n✓ Content validation passed.');
