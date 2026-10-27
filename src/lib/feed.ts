import { site } from '../site.config';
import { formatDate, hrefOf, isoDate, type Post } from './posts';

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export function rssResponse(
  posts: Post[],
  {
    title,
    description,
    path,
  }: {
    title: string;
    description: string;
    path: string;
  },
): Response {
  const self = new URL(path, site.url).toString();
  const home = site.url;
  const lastBuild = posts[0]?.data.updated ?? posts[0]?.data.date ?? new Date();

  const items = posts
    .slice(0, 30)
    .map((post) => {
      const url = new URL(hrefOf(post), site.url).toString();
      const categories = post.data.tags
        .map((tag) => `      <category>${escapeXml(tag)}</category>`)
        .join('\n');
      return `    <item>
      <title>${escapeXml(post.data.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${post.data.date.toUTCString()}</pubDate>
      <description>${escapeXml(post.data.summary)}</description>
${categories}
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(title)}</title>
    <link>${escapeXml(home)}</link>
    <description>${escapeXml(description)}</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuild.toUTCString()}</lastBuildDate>
    <managingEditor>${escapeXml(`${site.author.email} (${site.author.name})`)}</managingEditor>
    <copyright>${escapeXml(`© ${new Date().getUTCFullYear()} Oxelan`)}</copyright>
    <atom:link href="${escapeXml(self)}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  // GitHub Pages discards headers from static endpoints, so caching is owned by the
  // Cloudflare layer in front of the site. We set only the content type here.
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}

export { escapeXml, formatDate, isoDate };
