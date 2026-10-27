import type { APIRoute, GetStaticPaths } from 'astro';
import { getAllPosts, postsForTag } from '../../../lib/posts';
import { rssResponse } from '../../../lib/feed';

export const getStaticPaths = (async () => {
  const posts = await getAllPosts();
  const tags = [...new Set(posts.flatMap((post) => post.data.tags))].sort();
  return tags.map((tag) => ({ params: { tag }, props: { tag } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const tag = props.tag as string;
  const posts = postsForTag(await getAllPosts(), tag);
  return rssResponse(posts, {
    title: `Oxelan Signal — #${tag}`,
    description: `Posts tagged ${tag} on AI, security and engineering.`,
    path: `/tags/${tag}/rss.xml`,
  });
};
