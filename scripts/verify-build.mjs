#!/usr/bin/env node
/**
 * Verifies the deployed artifact, not just that Astro exited zero.
 * Run after `npm run build` (which includes Pagefind).
 */
import path from 'node:path';
import { readFile, stat } from 'node:fs/promises';

import { DIST_DIR, formatIso, readPosts, walk } from './lib/content.mjs';

const errors = [];
const notes = [];

const posts = await readPosts();
const now = new Date();
const published = posts.filter(
  (post) => !post.data.draft && post.data.date && post.data.date <= now,
);

async function fileExists(file) {
  try {
    const info = await stat(file);
    return info.isFile();
  } catch {
    return false;
  }
}

async function requireFile(relative, label = relative) {
  if (!(await fileExists(path.join(DIST_DIR, relative)))) {
    errors.push(`missing ${label} (dist/${relative})`);
  }
}

async function read(relative) {
  return readFile(path.join(DIST_DIR, relative), 'utf8');
}

await requireFile('index.html');
await requireFile('404.html');
await requireFile('sitemap.xml');
await requireFile('rss.xml');
await requireFile('search-index.json');
await requireFile('robots.txt');
await requireFile('CNAME');
await requireFile('favicon.svg');
await requireFile('apple-touch-icon.png');
await requireFile('site.webmanifest');
await requireFile('.well-known/security.txt');
await requireFile('pagefind/pagefind.js');
await requireFile('og/default.png');

const cname = (await read('CNAME')).trim();
if (cname !== 'blog.oxelan.com') errors.push(`CNAME contains "${cname}", expected blog.oxelan.com`);

const htmlFiles = (await walk(DIST_DIR)).filter((file) => file.endsWith('.html'));
if (htmlFiles.length < 20)
  errors.push(`only ${htmlFiles.length} HTML files were built; expected the full site`);

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const relative = path.relative(DIST_DIR, file);
  if (!/<title>[^<]+<\/title>/.test(html)) errors.push(`${relative}: missing <title>`);
  if (!/<link rel="canonical" href="[^"]+"/.test(html))
    errors.push(`${relative}: missing canonical URL`);
  if (/localhost|127\.0\.0\.1/.test(html)) errors.push(`${relative}: contains a local URL`);
  if (/>undefined</.test(html) || />NaN</.test(html))
    errors.push(`${relative}: contains undefined/NaN text`);
}

const sitemap = await read('sitemap.xml');
const rss = await read('rss.xml');

for (const post of published) {
  const url = `/${post.id}/`;
  const page = path.join(DIST_DIR, post.id, 'index.html');
  if (!(await fileExists(page))) errors.push(`published post missing from output: ${url}`);
  if (!sitemap.includes(url)) errors.push(`sitemap missing ${url}`);
  if (!rss.includes(url)) errors.push(`RSS missing ${url}`);
  // Production search is Pagefind; the post must carry the body marker Pagefind indexes.
  // (/search-index.json is a dev-only fallback and is empty in production — BLOG-L10.)
  const pageHtml = await readFile(page, 'utf8');
  if (!pageHtml.includes('data-pagefind-body')) {
    errors.push(`search index missing ${url} (no data-pagefind-body marker)`);
  }
  if (!(await fileExists(path.join(DIST_DIR, 'og', `${post.id}.png`)))) {
    errors.push(`OG image missing: /og/${post.id}.png`);
  }
}

for (const post of posts.filter((post) => post.data.draft)) {
  if (await fileExists(path.join(DIST_DIR, post.id, 'index.html'))) {
    errors.push(`draft was built to production: /${post.id}/`);
  }
}

for (const post of posts.filter((post) => post.data.date > now)) {
  if (await fileExists(path.join(DIST_DIR, post.id, 'index.html'))) {
    errors.push(
      `future-dated post was built before its date: /${post.id}/ (${formatIso(post.data.date)})`,
    );
  }
}

const ogFiles = (await walk(path.join(DIST_DIR, 'og'))).filter((file) => file.endsWith('.png'));
for (const file of ogFiles) {
  const info = await stat(file);
  if (info.size < 5000)
    errors.push(`${path.relative(DIST_DIR, file)} is suspiciously small (${info.size} bytes)`);
  const buffer = await readFile(file);
  if (!(buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4e && buffer[3] === 0x47)) {
    errors.push(`${path.relative(DIST_DIR, file)} is not a PNG`);
  }
}
notes.push(`OG images: ${ogFiles.length}`);

const pagefindFiles = (await walk(path.join(DIST_DIR, 'pagefind'))).length;
notes.push(`Pagefind files: ${pagefindFiles}`);
notes.push(`HTML pages: ${htmlFiles.length}`);
notes.push(`Published posts: ${published.length}`);
notes.push(`Sitemap URLs: ${(sitemap.match(/<loc>/g) ?? []).length}`);

// Ensure the built HTML does not leak source Markdown or future content.
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  if (/<script[^>]+src="[^"]*\.md["']/i.test(html))
    errors.push(`${path.relative(DIST_DIR, file)} loads a Markdown file as JS`);
}

console.log(notes.map((note) => `  ${note}`).join('\n'));

if (errors.length > 0) {
  console.error(`\n${errors.length} build verification error${errors.length === 1 ? '' : 's'}:`);
  for (const error of errors) console.error(`  ✗ ${error}`);
  process.exit(1);
}

console.log('\n✓ Build artifact verified.');
