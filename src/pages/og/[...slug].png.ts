import type { APIRoute, GetStaticPaths } from 'astro';
import { getAllPosts } from '../../lib/posts';
import { ogInputForPost, renderOgImage } from '../../lib/og';

export const getStaticPaths = (async () => {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    params: { slug: post.id },
    props: { post },
  }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOgImage(ogInputForPost(props.post));
  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
