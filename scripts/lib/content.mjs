import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';

import { generatePostId } from '../../src/lib/content-id.mjs';
import { imagePolicy } from '../../src/site.config.ts';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
export const CONTENT_DIR = path.join(ROOT, 'src/content');
export const DIST_DIR = path.join(ROOT, 'dist');

const MARKDOWN_EXTENSIONS = new Set(['.md', '.mdx']);
const IMAGE_EXTENSIONS = new Set(imagePolicy.allowedExtensions);

export async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

export function parseFrontmatter(source, file = '<unknown>') {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) throw new Error(`${file}: missing YAML frontmatter delimited by ---`);
  let data;
  try {
    data = parse(match[1]) ?? {};
  } catch (error) {
    throw new Error(`${file}: invalid YAML frontmatter — ${error.message}`);
  }
  const body = source.slice(match[0].length).replace(/^\r?\n/, '');
  return { data, body };
}

function asDate(value) {
  if (value instanceof Date) return value;
  if (typeof value === 'string' || typeof value === 'number') {
    const date = new Date(value);
    if (!Number.isNaN(date.getTime())) return date;
  }
  return null;
}

function normaliseTags(tags) {
  if (!Array.isArray(tags)) return [];
  return tags.map((tag) => String(tag));
}

export async function readPosts() {
  const files = (await walk(CONTENT_DIR)).filter((file) =>
    MARKDOWN_EXTENSIONS.has(path.extname(file).toLowerCase()),
  );

  const posts = [];
  for (const file of files.sort()) {
    const relative = path.relative(CONTENT_DIR, file).split(path.sep).join('/');
    const source = await readFile(file, 'utf8');
    const { data, body } = parseFrontmatter(source, relative);
    const id = generatePostId(relative);
    const [section, ...slugParts] = id.split('/');
    posts.push({
      file,
      relative,
      id,
      section,
      slug: slugParts.join('/'),
      data: {
        ...data,
        tags: normaliseTags(data.tags),
        date: asDate(data.date),
        updated: asDate(data.updated),
        sources: Array.isArray(data.sources) ? data.sources : [],
        updates: Array.isArray(data.updates)
          ? data.updates.map((update) => ({ ...update, date: asDate(update.date) }))
          : [],
      },
      body,
    });
  }
  return posts;
}

export async function contentImages() {
  const files = await walk(CONTENT_DIR);
  const images = [];
  for (const file of files) {
    if (IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase())) {
      const info = await stat(file);
      images.push({ file, bytes: info.size });
    }
  }
  return images;
}

export function normaliseInternalPath(href) {
  let value = href.split('#')[0].split('?')[0];
  try {
    value = decodeURIComponent(value);
  } catch {
    /* leave malformed encodings alone; the link checker will fail on them */
  }
  return value;
}

export function formatIso(date) {
  return date.toISOString().slice(0, 10);
}

export function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}
