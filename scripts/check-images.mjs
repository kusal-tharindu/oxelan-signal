#!/usr/bin/env node
/**
 * Image policy check:
 *  - every referenced local image exists and has alt text
 *  - post images are under 200 KB
 *  - images are inside src/content or public
 *  - very large pixel dimensions are reported
 */
import path from 'node:path';
import { stat } from 'node:fs/promises';
import sharp from 'sharp';

import { contentImages, readPosts, CONTENT_DIR } from './lib/content.mjs';
import { imagePolicy } from '../src/site.config.ts';

const MAX_BYTES = imagePolicy.maxBytes;
const MAX_WIDTH = 2400;
const errors = [];
const warnings = [];

const images = await contentImages();
for (const image of images) {
  const relative = path.relative(process.cwd(), image.file);
  if (image.bytes > MAX_BYTES) {
    errors.push(
      `${relative}: ${(image.bytes / 1024).toFixed(0)} KB exceeds the ${MAX_BYTES / 1024} KB limit`,
    );
  }
  if (image.file.toLowerCase().endsWith('.svg')) continue;
  try {
    const meta = await sharp(image.file).metadata();
    if (meta.width && meta.width > MAX_WIDTH) {
      warnings.push(`${relative}: ${meta.width}px wide; consider resizing below ${MAX_WIDTH}px`);
    }
  } catch {
    errors.push(`${relative}: sharp could not read the image`);
  }
}

const posts = await readPosts();
let references = 0;

for (const post of posts) {
  const matches = post.body.matchAll(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g);
  for (const match of matches) {
    references += 1;
    const alt = match[1].trim();
    const target = match[2];

    if (!alt) errors.push(`${post.relative}: image ${target} has empty alt text`);

    if (/^https?:\/\//i.test(target)) {
      warnings.push(`${post.relative}: remote image ${target} bypasses the build image pipeline`);
      continue;
    }

    const clean = target.split('#')[0].split('?')[0].replace(/^\.\//, '');
    const resolved = path.resolve(path.dirname(post.file), clean);
    if (!resolved.startsWith(CONTENT_DIR + path.sep)) {
      errors.push(`${post.relative}: image ${target} resolves outside src/content/`);
      continue;
    }
    try {
      const info = await stat(resolved);
      if (info.size > MAX_BYTES) {
        errors.push(
          `${post.relative}: ${target} is ${(info.size / 1024).toFixed(0)} KB (limit ${MAX_BYTES / 1024} KB)`,
        );
      }
    } catch {
      errors.push(`${post.relative}: referenced image ${target} does not exist`);
    }
  }

  // Raw HTML images are not rewritten by Astro's image pipeline; check them and
  // warn so authors prefer Markdown syntax when possible.
  const htmlMatches = post.body.matchAll(/<img\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi);
  for (const match of htmlMatches) {
    references += 1;
    const target = match[1];
    if (/^https?:\/\//i.test(target)) {
      warnings.push(`${post.relative}: raw remote image ${target} bypasses the asset pipeline`);
      continue;
    }
    const resolved = path.resolve(path.dirname(post.file), target.split('#')[0].split('?')[0]);
    if (!resolved.startsWith(CONTENT_DIR + path.sep)) {
      errors.push(`${post.relative}: raw image ${target} resolves outside src/content/`);
      continue;
    }
    warnings.push(
      `${post.relative}: raw <img src="${target}"> bypasses Astro image optimisation; prefer Markdown image syntax`,
    );
    try {
      const info = await stat(resolved);
      if (info.size > MAX_BYTES) {
        errors.push(
          `${post.relative}: ${target} is ${(info.size / 1024).toFixed(0)} KB (limit ${MAX_BYTES / 1024} KB)`,
        );
      }
    } catch {
      errors.push(`${post.relative}: raw image ${target} does not exist`);
    }
  }
}

console.log(
  `Images: ${images.length} file${images.length === 1 ? '' : 's'}, ${references} Markdown reference${references === 1 ? '' : 's'}.`,
);

if (warnings.length > 0) {
  console.log(`\n${warnings.length} warning${warnings.length === 1 ? '' : 's'}:`);
  for (const warning of warnings) console.log(`  ~ ${warning}`);
}

if (errors.length > 0) {
  console.error(`\n${errors.length} error${errors.length === 1 ? '' : 's'}:`);
  for (const error of errors) console.error(`  ✗ ${error}`);
  process.exit(1);
}

console.log('\n✓ Image policy passed.');
