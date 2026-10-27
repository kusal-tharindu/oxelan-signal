import type { APIRoute } from 'astro';
import { getAllPosts } from '../lib/posts';
import { rssResponse } from '../lib/feed';
import { site } from '../site.config';

export const GET: APIRoute = async () => {
  const posts = await getAllPosts();
  return rssResponse(posts, {
    title: site.name,
    description: site.description,
    path: '/rss.xml',
  });
};
