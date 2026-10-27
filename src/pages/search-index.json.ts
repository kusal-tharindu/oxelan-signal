import type { APIRoute } from 'astro';
import { getAllPosts, sectionOf } from '../lib/posts';
import { sections } from '../site.config';

function plainText(markdown: string | undefined, limit = 5000): string {
  if (!markdown) return '';
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`~|]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, limit);
}

export const GET: APIRoute = async () => {
  const posts = await getAllPosts();
  const index = posts.map((post) => ({
    url: `/${post.id}/`,
    title: post.data.title,
    summary: post.data.summary,
    section: sections[sectionOf(post)].label,
    sectionKey: sectionOf(post),
    format: post.data.format,
    tags: post.data.tags,
    date: post.data.date.toISOString().slice(0, 10),
    body: plainText(post.body),
  }));

  return new Response(JSON.stringify(index), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
