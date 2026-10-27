#!/usr/bin/env node
/**
 * Create a new post with valid frontmatter.
 *
 * Usage:
 *   npm run new -- security "Supply-chain attack hits npm"
 *   npm run new -- engineering "A guide to upgrades" --format guide --tags kubernetes,upgrades
 *   npm run new -- digest "Week 44" --date 2026-11-02
 */
import path from 'node:path';
import { access, mkdir, writeFile } from 'node:fs/promises';
import { ROOT } from './lib/content.mjs';
import { sectionOrder } from '../src/site.config.ts';

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error(
    'Usage: npm run new -- <ai|security|engineering|digest> "<title>" [--format news|analysis|guide|digest] [--tags a,b] [--date YYYY-MM-DD] [--featured]',
  );
  process.exit(1);
}

const section = args[0];
const titleParts = [];
const options = { format: undefined, tags: [], date: undefined, featured: false, dryRun: false };

for (let index = 1; index < args.length; index += 1) {
  const arg = args[index];
  if (arg === '--format') options.format = args[++index];
  else if (arg === '--tags')
    options.tags = (args[++index] ?? '')
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean);
  else if (arg === '--date') options.date = args[++index];
  else if (arg === '--featured') options.featured = true;
  else if (arg === '--dry-run') options.dryRun = true;
  else if (arg.startsWith('--')) {
    console.error(`Unknown option: ${arg}`);
    process.exit(1);
  } else titleParts.push(arg);
}

if (!sectionOrder.includes(section)) {
  console.error(`Unknown section "${section}". Use one of: ${sectionOrder.join(', ')}`);
  process.exit(1);
}

const title = titleParts.join(' ').trim();
if (!title) {
  console.error('Title is required.');
  process.exit(1);
}

function slugify(value) {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60)
    .replace(/-+$/g, '');
}

function isoWeek(date) {
  const value = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const day = value.getUTCDay() || 7;
  value.setUTCDate(value.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(value.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((value - yearStart) / 86400000 + 1) / 7);
  return { year: value.getUTCFullYear(), week };
}

const date = options.date ? new Date(`${options.date}T12:00:00Z`) : new Date();
if (Number.isNaN(date.getTime())) {
  console.error('Invalid --date. Use YYYY-MM-DD.');
  process.exit(1);
}
const iso = date.toISOString().slice(0, 10);
const slug =
  section === 'digest'
    ? `${isoWeek(date).year}-w${String(isoWeek(date).week).padStart(2, '0')}`
    : slugify(title);
if (!slug) {
  console.error('Could not derive a slug from the title.');
  process.exit(1);
}

const format =
  options.format ??
  (section === 'digest' ? 'digest' : section === 'engineering' ? 'analysis' : 'news');
if (!['news', 'analysis', 'guide', 'digest'].includes(format)) {
  console.error('Invalid --format. Use news, analysis, guide or digest.');
  process.exit(1);
}
if (section === 'digest' && format !== 'digest') {
  console.error('Digest section posts must use format "digest".');
  process.exit(1);
}
if (section !== 'digest' && format === 'digest') {
  console.error('format "digest" is only allowed in the digest section.');
  process.exit(1);
}

const year = iso.slice(0, 4);
const month = iso.slice(5, 7);
const relativeFile =
  section === 'digest'
    ? `src/content/digest/${slug}.md`
    : `src/content/${section}/${year}/${month}/${slug}.md`;
const absoluteFile = path.join(ROOT, relativeFile);

try {
  await access(absoluteFile);
  console.error(`File already exists: ${relativeFile}`);
  process.exit(1);
} catch {
  /* expected */
}

const tags = options.tags.length > 0 ? options.tags : ['todo'];
const tagYaml = `[${tags.map((tag) => `"${tag}"`).join(', ')}]`;
const isNews = format === 'news';

const frontmatter = `---
title: "${title.replaceAll('"', '\\"')}"
date: ${iso}
format: ${format}
summary: "TODO: one or two lines that explain why this matters. At least 40 characters."
tags: ${tagYaml}
status: current
featured: ${options.featured ? 'true' : 'false'}
${isNews ? 'sources:\n  - { title: "TODO: primary source", url: "https://example.com/replace-me" }\n' : 'sources: []\n'}draft: true
---

TODO: write the post. Every post should answer:

- **What changed** — the release, incident, or decision.
- **Why it matters** — the production consequence, not the marketing claim.
- **What to do** — the concrete next action.

Remove \`draft: true\` before opening the pull request.
`;

if (options.dryRun) {
  console.log(`Would create ${relativeFile}\n\n${frontmatter}`);
  process.exit(0);
}

await mkdir(path.dirname(absoluteFile), { recursive: true });
await writeFile(absoluteFile, frontmatter, 'utf8');

console.log(`Created ${relativeFile}`);
console.log(`Next: edit the file, add real sources, then run npm run validate.`);
