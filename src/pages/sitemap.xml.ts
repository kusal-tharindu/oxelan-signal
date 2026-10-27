import type { APIRoute } from 'astro';
import { getAllPosts, isoDate } from '../lib/posts';
import { sectionOrder, sections } from '../site.config';

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export const GET: APIRoute = async () => {
  const posts = await getAllPosts();
  const tags = [...new Set(posts.flatMap((post) => post.data.tags))].sort();
  const lastmod = posts[0]?.data.updated ?? posts[0]?.data.date ?? new Date();

  const entries = [
    { loc: '/', lastmod, priority: '1.0' },
    ...sectionOrder.map((section) => ({
      loc: sections[section].path,
      lastmod,
      priority: section === 'digest' ? '0.7' : '0.8',
    })),
    { loc: '/about/', lastmod, priority: '0.4' },
    { loc: '/radar/', lastmod, priority: '0.5' },
    { loc: '/tags/', lastmod, priority: '0.5' },
    ...tags.map((tag) => ({ loc: `/tags/${tag}/`, lastmod, priority: '0.3' })),
    ...posts.map((post) => ({
      loc: `/${post.id}/`,
      lastmod: post.data.updated ?? post.data.date,
      priority: '0.9',
    })),
  ];

  const body = entries
    .map(
      (entry) => `  <url>
    <loc>${escapeXml(new URL(entry.loc, 'https://blog.oxelan.com').toString())}</loc>
    <lastmod>${isoDate(entry.lastmod)}</lastmod>
    <priority>${entry.priority}</priority>
  </url>`,
    )
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`,
    {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    },
  );
};
