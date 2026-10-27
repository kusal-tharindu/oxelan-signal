#!/usr/bin/env node
/**
 * Editorial and cross-field validation. Runs before every build.
 *
 * The Zod schema in src/content.config.ts enforces structure. This script
 * enforces rules that depend on the folder, other entries, or the editorial
 * policy — and it gives authors a readable list instead of one build error.
 */
import path from 'node:path';
import { readFile } from 'node:fs/promises';

import { formatIso, readPosts, CONTENT_DIR } from './lib/content.mjs';
import { sectionOrder, sections } from '../src/site.config.ts';

const SECTIONS = new Set(sectionOrder);
const KEBAB = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const TAG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ALLOWED_FORMATS = new Set(['news', 'analysis', 'guide', 'digest']);
const ALLOWED_IMPACTS = new Set(['critical', 'high', 'medium', 'low', 'info']);
const ALLOWED_ACTIONS = new Set(['none', 'review', 'patch-now']);
const ALLOWED_STATUS = new Set(['current', 'evolving', 'superseded']);

const errors = [];
const warnings = [];

const fail = (post, message) => errors.push(`${post.relative}: ${message}`);
const warn = (post, message) => warnings.push(`${post.relative}: ${message}`);

function isExternal(url) {
  return /^https?:\/\//i.test(url);
}

function checkDate(post, field, value, { required = false } = {}) {
  if (value == null) {
    if (required) fail(post, `${field} is required`);
    return;
  }
  if (!(value instanceof Date) || Number.isNaN(value.getTime())) {
    fail(post, `${field} must be a valid date (YYYY-MM-DD)`);
  }
}

const posts = await readPosts();

if (posts.length === 0) {
  errors.push('No content found. Add a post under src/content/<section>/YYYY/MM/.');
}

const ids = new Map();
const slugs = new Map();

for (const post of posts) {
  const { data } = post;

  if (!SECTIONS.has(post.section)) {
    fail(post, `unknown section "${post.section}" (expected ${[...SECTIONS].join(', ')})`);
  }

  if (post.slug.includes('/')) {
    fail(
      post,
      `slug "${post.slug}" contains a slash; use one URL segment (nested folders must end in index.md)`,
    );
  }

  if (!KEBAB.test(post.slug)) {
    fail(post, `slug "${post.slug}" must be lowercase kebab-case`);
  }

  if (post.slug.length > 60) {
    fail(post, `slug is ${post.slug.length} characters; keep it under 60`);
  }

  if (ids.has(post.id)) {
    fail(post, `duplicate content id "${post.id}" (also ${ids.get(post.id)})`);
  } else {
    ids.set(post.id, post.relative);
  }

  if (slugs.has(post.slug)) {
    fail(post, `duplicate slug "${post.slug}" site-wide (also ${slugs.get(post.slug)})`);
  } else {
    slugs.set(post.slug, post.relative);
  }

  if (!data.title || typeof data.title !== 'string') fail(post, 'title is required');
  if (!data.summary || typeof data.summary !== 'string') fail(post, 'summary is required');
  if (typeof data.summary === 'string') {
    if (data.summary.length < 40) fail(post, 'summary is shorter than 40 characters');
    if (data.summary.length > 320) fail(post, 'summary is longer than 320 characters');
  }

  // Meta description: an explicit description (<=160) is used for SEO; otherwise the
  // summary is truncated to 160 for the meta tag. Warn when the summary alone is long
  // enough that search engines will cut it off (BLOG-L8).
  if (!data.description && typeof data.summary === 'string' && data.summary.length > 160) {
    warn(post, 'summary is over 160 chars; add a `description` (<=160) for the meta tag');
  }

  checkDate(post, 'date', data.date, { required: true });
  checkDate(post, 'updated', data.updated);
  if (data.date && data.updated && data.updated < data.date) {
    fail(post, 'updated cannot be earlier than date');
  }

  if (!ALLOWED_FORMATS.has(data.format)) {
    fail(post, `format must be one of ${[...ALLOWED_FORMATS].join(', ')}`);
  }

  if (data.format === 'digest' && post.section !== 'digest') {
    fail(post, 'format "digest" is only allowed in the digest section');
  }

  if (post.section === 'digest' && data.format !== 'digest') {
    fail(post, 'posts in the digest section must use format "digest"');
  }

  for (const tag of data.tags) {
    if (!TAG.test(tag)) fail(post, `tag "${tag}" must be lowercase kebab-case`);
  }
  if (new Set(data.tags).size !== data.tags.length) fail(post, 'tags contain duplicates');

  if (data.impact != null && !ALLOWED_IMPACTS.has(data.impact)) {
    fail(post, `impact must be one of ${[...ALLOWED_IMPACTS].join(', ')}`);
  }
  if (data.impact && data.format === 'guide') {
    fail(post, 'guides cannot carry an impact; use status/updated instead');
  }
  if (data.action != null && !ALLOWED_ACTIONS.has(data.action)) {
    fail(post, `action must be one of ${[...ALLOWED_ACTIONS].join(', ')}`);
  }
  if (data.status != null && !ALLOWED_STATUS.has(data.status)) {
    fail(post, `status must be one of ${[...ALLOWED_STATUS].join(', ')}`);
  }

  if (data.format === 'news' && data.sources.length === 0) {
    fail(post, 'news posts must cite at least one source');
  }

  for (const [index, source] of data.sources.entries()) {
    if (!source || typeof source !== 'object') {
      fail(post, `sources[${index}] must be an object with title and url`);
      continue;
    }
    if (!source.title) fail(post, `sources[${index}].title is required`);
    if (!isExternal(source.url))
      fail(post, `sources[${index}].url must be an absolute http(s) URL`);
  }

  if (data.status === 'superseded' && !data.supersededBy) {
    fail(post, 'status is "superseded" but supersededBy is missing');
  }
  if (data.supersededBy) {
    if (!data.supersededBy.startsWith('/') || !data.supersededBy.endsWith('/')) {
      fail(post, 'supersededBy must be an internal path such as /security/new-post/');
    }
    const targetId = data.supersededBy.replace(/^\//, '').replace(/\/$/, '');
    if (targetId === post.id) fail(post, 'supersededBy cannot point at the post itself');
    else if (!ids.has(targetId)) {
      // Forward references are checked after all posts are indexed.
      post._supersededTarget = targetId;
    }
  }

  if (data.briefing) {
    if (data.format === 'digest') fail(post, 'digests do not use a briefing box');
    for (const key of ['changed', 'why', 'action']) {
      if (!data.briefing[key]) fail(post, `briefing.${key} is required`);
    }
  }
  if ((data.format === 'news' || data.format === 'analysis') && !data.briefing) {
    warn(post, 'news and analysis posts should include a briefing box');
  }

  if (data.format === 'guide' && !data.updated) {
    warn(post, 'guide has no updated date; living guides should show a review date');
  }

  if ('section' in data) fail(post, 'do not set section in frontmatter; the folder decides it');
  if ('cover' in data) fail(post, 'cover images are not used; cards are text-only');

  for (const update of data.updates) {
    if (!(update.date instanceof Date) || Number.isNaN(update.date.getTime())) {
      fail(post, 'updates[].date must be a valid date');
    }
    if (!update.note) fail(post, 'updates[].note is required');
    if (update.date && data.date && update.date < data.date) {
      fail(post, 'updates[] cannot predate the post');
    }
  }

  if (data.draft === true) {
    warn(post, 'draft: true — excluded from production builds');
  }
  if (data.date && data.date > new Date()) {
    warn(post, `scheduled for ${formatIso(data.date)} — excluded until the daily rebuild`);
  }

  // Require alt text on Markdown and raw HTML images.
  const markdownImages = post.body.matchAll(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g);
  for (const match of markdownImages) {
    const alt = match[1].trim();
    const target = match[2];
    if (!alt) fail(post, `image ${target} is missing alt text`);
    if (isExternal(target)) warn(post, `external image ${target} will not be optimised`);
    else {
      const imagePath = path.resolve(path.dirname(post.file), target.split('#')[0].split('?')[0]);
      if (!imagePath.startsWith(CONTENT_DIR + path.sep)) {
        fail(post, `image ${target} must live inside src/content/`);
      } else {
        try {
          await readFile(imagePath);
        } catch {
          fail(post, `image ${target} does not exist`);
        }
      }
    }
  }

  const htmlImages = post.body.matchAll(/<img\b[^>]*>/gi);
  for (const match of htmlImages) {
    const tag = match[0];
    if (!/\balt\s*=\s*("([^"]*)"|'([^']*)')/i.test(tag)) {
      fail(post, 'raw <img> tags must include an alt attribute');
    }
  }
}

for (const post of posts) {
  if (!post._supersededTarget) continue;
  if (!ids.has(post._supersededTarget)) {
    fail(post, `supersededBy target "${post._supersededTarget}" does not exist`);
  }
}

for (const post of posts) {
  if (post.data.format === 'digest') {
    const known = new Set(posts.map((entry) => entry.id));
    for (const match of post.body.matchAll(/\]\((\/[a-z0-9-]+\/[a-z0-9-]+\/)\)/g)) {
      const target = match[1].replace(/^\//, '').replace(/\/$/, '');
      if (!known.has(target)) warn(post, `digest links to "${target}", which is not a local post`);
    }
  }
}

const summary = [
  `Content: ${posts.length} post${posts.length === 1 ? '' : 's'} across ${new Set(posts.map((p) => p.section)).size} section${new Set(posts.map((p) => p.section)).size === 1 ? '' : 's'}.`,
  `Sections: ${[...SECTIONS].map((key) => `${sections[key].label} ${posts.filter((p) => p.section === key).length}`).join(' · ')}`,
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
