import { expect, test } from '@playwright/test';

/**
 * Every listing has a real RSS feed. The feeds are generated at build time from
 * frontmatter; these tests catch a missing route or an empty channel.
 */
const feeds: [string, string][] = [
  ['/rss.xml', 'Oxelan Signal'],
  ['/ai/rss.xml', 'AI'],
  ['/tags/nginx/rss.xml', '#nginx'],
  ['/format/news/rss.xml', 'News'],
];

for (const [path, marker] of feeds) {
  test(`${path} is a populated RSS feed`, async ({ request }) => {
    const response = await request.get(path);
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toMatch(/xml/);

    const body = await response.text();
    expect(body).toContain('<rss version="2.0"');
    expect(body).toContain(marker);
    expect(body).toContain('<lastBuildDate>');
    expect((body.match(/<item>/g) ?? []).length).toBeGreaterThan(0);
  });
}
