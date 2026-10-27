#!/usr/bin/env node
/**
 * Internal link checker for the built site.
 *
 * - Verifies every same-origin href/src resolves to a file in dist/
 * - Verifies #fragments exist on the target page
 * - Reports links to /pagefind as expected (not an error)
 * - Never makes network requests, so pull-request checks stay fast and stable
 */
import path from 'node:path';
import { readFile, stat } from 'node:fs/promises';

import { DIST_DIR, walk } from './lib/content.mjs';

const errors = [];
const warnings = [];
const htmlFiles = (await walk(DIST_DIR)).filter((file) => file.endsWith('.html'));
const cache = new Map();

async function readTarget(file) {
  if (!cache.has(file)) cache.set(file, await readFile(file, 'utf8'));
  return cache.get(file);
}

async function exists(file) {
  try {
    const info = await stat(file);
    return info.isFile();
  } catch {
    return false;
  }
}

async function candidateFiles(urlPath) {
  const clean = urlPath.replace(/^\/+/, '');
  const candidates = [];
  if (clean === '') candidates.push(path.join(DIST_DIR, 'index.html'));
  else if (path.extname(clean)) candidates.push(path.join(DIST_DIR, clean));
  else {
    candidates.push(path.join(DIST_DIR, clean, 'index.html'));
    candidates.push(path.join(DIST_DIR, `${clean}.html`));
    candidates.push(path.join(DIST_DIR, clean));
  }
  for (const candidate of candidates) {
    if (await exists(candidate)) return candidate;
  }
  return null;
}

function decodeEntities(value) {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'");
}

function isSkipped(value) {
  return (
    value.startsWith('#') ||
    value.startsWith('mailto:') ||
    value.startsWith('tel:') ||
    value.startsWith('javascript:') ||
    value.startsWith('data:') ||
    value.startsWith('//') ||
    /^https?:\/\//i.test(value) ||
    value.startsWith('/pagefind/') ||
    value === ''
  );
}

async function checkFragment(file, fragment, sourceRelative) {
  const html = await readTarget(file);
  let decoded = fragment;
  try {
    decoded = decodeURIComponent(fragment);
  } catch {
    /* keep as-is */
  }
  const escaped = decoded.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`(?:id|name)=["']${escaped}["']`, 'i');
  if (!pattern.test(html)) {
    errors.push(
      `${sourceRelative}: missing fragment #${fragment} in ${path.relative(DIST_DIR, file)}`,
    );
  }
}

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const relative = path.relative(DIST_DIR, file);

  for (const match of html.matchAll(/\b(href|src)=["']([^"']+)["']/gi)) {
    const attribute = match[1].toLowerCase();
    const raw = decodeEntities(match[2].trim());
    if (isSkipped(raw)) continue;

    const [pathPart, fragment] = raw.split('#');
    const cleanPath = pathPart.split('?')[0];
    if (!cleanPath) {
      if (fragment) await checkFragment(file, fragment, relative);
      continue;
    }

    let urlPath = cleanPath;
    if (!urlPath.startsWith('/')) {
      // Relative URL: resolve against the current output directory.
      const base = path.dirname(relative);
      urlPath = `/${path.posix.normalize(path.posix.join(base, urlPath))}`;
    }

    const target = await candidateFiles(urlPath);
    if (!target) {
      errors.push(`${relative}: ${attribute}="${raw}" does not resolve in dist/`);
      continue;
    }

    if (attribute === 'href' && fragment && target.endsWith('.html')) {
      await checkFragment(target, fragment, relative);
    }
  }
}

// Verify sitemap URLs point at real pages.
const sitemap = await readFile(path.join(DIST_DIR, 'sitemap.xml'), 'utf8');
for (const match of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
  const url = new URL(decodeEntities(match[1]));
  const target = await candidateFiles(url.pathname);
  if (!target) errors.push(`sitemap.xml: ${url.pathname} does not resolve in dist/`);
}

// Verify RSS self/links are local pages or expected files.
for (const rssFile of (await walk(DIST_DIR)).filter((file) => file.endsWith('.xml'))) {
  if (path.basename(rssFile) !== 'rss.xml') continue;
  const xml = await readFile(rssFile, 'utf8');
  for (const match of xml.matchAll(/<link>([^<]+)<\/link>/g)) {
    const url = new URL(decodeEntities(match[1]));
    if (url.origin !== 'https://blog.oxelan.com') continue;
    if (url.pathname === '/') continue;
    const target = await candidateFiles(url.pathname);
    if (!target)
      errors.push(`${path.relative(DIST_DIR, rssFile)}: ${url.pathname} does not resolve`);
  }
}

const pagefind = await candidateFiles('/pagefind/pagefind.js');
if (!pagefind) warnings.push('Pagefind index missing; run npm run build (not just astro build).');

console.log(
  `Links: checked ${htmlFiles.length} HTML file${htmlFiles.length === 1 ? '' : 's'}, sitemap and RSS.`,
);

if (warnings.length > 0) {
  console.log(`\n${warnings.length} warning${warnings.length === 1 ? '' : 's'}:`);
  for (const warning of warnings) console.log(`  ~ ${warning}`);
}

if (errors.length > 0) {
  console.error(`\n${errors.length} broken link${errors.length === 1 ? '' : 's'}:`);
  for (const error of errors.slice(0, 40)) console.error(`  ✗ ${error}`);
  if (errors.length > 40) console.error(`  … and ${errors.length - 40} more`);
  process.exit(1);
}

console.log('\n✓ Internal links valid.');
