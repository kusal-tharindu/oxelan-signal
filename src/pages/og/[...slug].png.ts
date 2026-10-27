import type { APIRoute, GetStaticPaths } from 'astro';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

import { ogCacheKey } from '../../lib/og-key';
import { getAllPosts } from '../../lib/posts';
import { ogInputForPost, renderOgImage } from '../../lib/og';

const CACHE_DIR = path.join(process.cwd(), '.cache/og');

export const getStaticPaths = (async () => {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    params: { slug: post.id },
    props: { post },
  }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const input = ogInputForPost(props.post);
  const file = path.join(CACHE_DIR, `${ogCacheKey(input)}.png`);

  let png: Buffer;
  try {
    // Reuse an unchanged card across builds. At 2,000 posts this is the difference
    // between a few seconds and several minutes of Satori work per deploy.
    png = await readFile(file);
  } catch {
    png = await renderOgImage(input);
    await mkdir(CACHE_DIR, { recursive: true });
    await writeFile(file, png);
  }

  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
