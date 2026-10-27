#!/usr/bin/env node
/**
 * Build a weekly digest draft from posts in an ISO week.
 *
 * Usage:
 *   npm run digest                       # previous ISO week, writes a draft
 *   npm run digest -- --week 2026-W43    # a specific week
 *   npm run digest -- --dry-run          # print, do not write
 *   npm run digest -- --publish          # write without draft: true
 */
import path from 'node:path';
import { access, mkdir, writeFile } from 'node:fs/promises';

import { ROOT, readPosts, formatIso } from './lib/content.mjs';

const args = process.argv.slice(2);
const options = { week: null, dryRun: false, publish: false, force: false };

for (let index = 0; index < args.length; index += 1) {
  const arg = args[index];
  if (arg === '--week') options.week = args[++index];
  else if (arg === '--dry-run') options.dryRun = true;
  else if (arg === '--publish') options.publish = true;
  else if (arg === '--force') options.force = true;
  else {
    console.error(`Unknown option: ${arg}`);
    process.exit(1);
  }
}

function startOfIsoWeek(year, week) {
  const jan4 = new Date(Date.UTC(year, 0, 4, 12));
  const day = jan4.getUTCDay() || 7;
  const week1Monday = new Date(jan4);
  week1Monday.setUTCDate(jan4.getUTCDate() - day + 1);
  const start = new Date(week1Monday);
  start.setUTCDate(week1Monday.getUTCDate() + (week - 1) * 7);
  return start;
}

function isoWeekOf(date) {
  const value = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const day = value.getUTCDay() || 7;
  value.setUTCDate(value.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(value.getUTCFullYear(), 0, 1));
  return {
    year: value.getUTCFullYear(),
    week: Math.ceil(((value - yearStart) / 86400000 + 1) / 7),
  };
}

let year;
let week;

if (options.week) {
  const match = options.week.match(/^(\d{4})-?[wW](\d{1,2})$/);
  if (!match) {
    console.error('Invalid --week. Use YYYY-Www, for example 2026-W43.');
    process.exit(1);
  }
  year = Number(match[1]);
  week = Number(match[2]);
} else {
  const previous = new Date();
  previous.setUTCDate(previous.getUTCDate() - 7);
  ({ year, week } = isoWeekOf(previous));
}

if (week < 1 || week > 53) {
  console.error('Week must be between 1 and 53.');
  process.exit(1);
}

const start = startOfIsoWeek(year, week);
const end = new Date(start);
end.setUTCDate(start.getUTCDate() + 6);
const publishDate = new Date(end);
publishDate.setUTCDate(end.getUTCDate() + 1);

const posts = (await readPosts())
  .filter((post) => !post.data.draft)
  .filter((post) => post.data.format !== 'digest')
  .filter(
    (post) =>
      post.data.date &&
      post.data.date >= start &&
      post.data.date <= new Date(end.getTime() + 86399999),
  )
  .sort((a, b) => {
    const impactRank = { critical: 0, high: 1, medium: 2, low: 3, info: 4 };
    const aRank = impactRank[a.data.impact] ?? 5;
    const bRank = impactRank[b.data.impact] ?? 5;
    if (aRank !== bRank) return aRank - bRank;
    return b.data.date - a.data.date;
  });

if (posts.length === 0) {
  console.error(
    `No non-draft posts found for ISO week ${year}-W${String(week).padStart(2, '0')} (${formatIso(start)} to ${formatIso(end)}).`,
  );
  process.exit(1);
}

const weekLabel = `${year}-W${String(week).padStart(2, '0')}`;
const slug = `${year}-w${String(week).padStart(2, '0')}`;
const relativeFile = `src/content/digest/${slug}.md`;
const absoluteFile = path.join(ROOT, relativeFile);

let existing = false;
try {
  await access(absoluteFile);
  existing = true;
} catch {
  /* expected */
}

if (existing && !options.force && !options.dryRun) {
  console.error(
    `${relativeFile} already exists. Use --force to regenerate, or --dry-run to preview.`,
  );
  process.exit(1);
}
if (existing && !options.force && options.dryRun) {
  console.log(`${relativeFile} already exists; previewing a regenerated draft without writing.`);
}

const bySection = {
  ai: posts.filter((post) => post.section === 'ai'),
  security: posts.filter((post) => post.section === 'security'),
  engineering: posts.filter((post) => post.section === 'engineering'),
};
const attention = posts.filter(
  (post) => post.data.impact === 'critical' || post.data.impact === 'high',
);
const attentionIds = new Set(attention.map((post) => post.id));

const line = (post) =>
  `- **[${post.data.title}](/${post.id}/)** — ${post.data.summary.replace(/\s+/g, ' ')}`;

const body = `The week in ${posts.length} post${posts.length === 1 ? '' : 's'}: what changed, why it matters, and what to do next.

${attention.length > 0 ? `## Needs attention\n\n${attention.map(line).join('\n')}\n` : ''}
${
  bySection.ai.length > 0
    ? `## AI\n\n${
        bySection.ai
          .filter((post) => !attentionIds.has(post.id))
          .map(line)
          .join('\n') || '_Covered in Needs attention above._'
      }\n`
    : ''
}
${
  bySection.security.length > 0
    ? `## Security\n\n${
        bySection.security
          .filter((post) => !attentionIds.has(post.id))
          .map(line)
          .join('\n') || '_Covered in Needs attention above._'
      }\n`
    : ''
}
${
  bySection.engineering.length > 0
    ? `## Engineering\n\n${
        bySection.engineering
          .filter((post) => !attentionIds.has(post.id))
          .map(line)
          .join('\n') || '_Covered in Needs attention above._'
      }\n`
    : ''
}
## What I am watching

TODO: add one or two items that did not deserve a full post.

---

Corrections? Send them to [hello@oxelan.com](mailto:hello@oxelan.com).
`;

const summary = `This week: ${posts.length} post${posts.length === 1 ? '' : 's'} across AI, security and engineering, with the action that matters and the context behind it.`;
const title = `Week ${week}: ${posts.length} thing${posts.length === 1 ? '' : 's'} that changed`;
const tags = `[weekly, digest, "${year}"]`;

const frontmatter = `---
title: ${JSON.stringify(title)}
date: ${formatIso(publishDate)}
format: digest
summary: ${JSON.stringify(summary)}
tags: ${tags}
status: current
draft: ${options.publish ? 'false' : 'true'}
---

${body}`;

if (options.dryRun) {
  console.log(`# ${relativeFile}\n\n${frontmatter}`);
  process.exit(0);
}

await mkdir(path.dirname(absoluteFile), { recursive: true });
await writeFile(absoluteFile, frontmatter, 'utf8');

console.log(`Created ${relativeFile}`);
console.log(`Posts included: ${posts.length} (${formatIso(start)} to ${formatIso(end)}).`);
console.log(
  options.publish
    ? 'Published immediately. Review before pushing.'
    : 'Saved as draft: true. Review it, remove draft: true, then open a pull request.',
);
