#!/usr/bin/env node
/**
 * Minimal static file server for the built site.
 *
 * `astro preview` daemonises in Astro 7 when stdout is not a TTY, which means
 * Playwright's webServer sees the process exit immediately. This stays in the
 * foreground and serves dist/ the way a static host does: directory index,
 * clean 404, correct content types (including .wasm for Pagefind).
 *
 * Usage: node scripts/serve-dist.mjs [--port 4321] [--host 127.0.0.1]
 */
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');

const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};

const port = Number(flag('--port', process.env.PORT ?? 4321));
const host = flag('--host', '127.0.0.1');

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.wasm': 'application/wasm',
  '.webmanifest': 'application/manifest+json',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

async function resolveFile(urlPath) {
  const decoded = decodeURIComponent(urlPath.split('?')[0]);
  const relative = decoded.replace(/^\/+/, '');
  let target = path.join(DIST, relative);
  // Never escape dist/.
  if (!target.startsWith(DIST)) return null;

  try {
    const info = await stat(target);
    if (info.isDirectory()) target = path.join(target, 'index.html');
    else return target;
  } catch {
    // Fall through: try the .html form for extensionless URLs.
  }

  try {
    const info = await stat(target);
    if (!info.isFile()) return null;
    return target;
  } catch {
    return null;
  }
}

const server = createServer(async (request, response) => {
  const url = request.url ?? '/';
  const file = await resolveFile(url);

  if (!file) {
    response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end('<!doctype html><title>404</title><h1>404 — Not found</h1>');
    return;
  }

  const type = TYPES[path.extname(file).toLowerCase()] ?? 'application/octet-stream';
  response.writeHead(200, {
    'Content-Type': type,
    'Cache-Control': 'no-store',
  });
  createReadStream(file).pipe(response);
});

server.listen(port, host, () => {
  console.log(`Serving ${DIST} at http://${host}:${port}`);
});

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => server.close(() => process.exit(0)));
}
