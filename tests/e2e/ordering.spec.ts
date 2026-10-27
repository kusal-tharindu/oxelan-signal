import { expect, test, type Page } from '@playwright/test';

interface Card {
  title: string;
  date: string;
  impact: string;
}

const IMPACT_RANK: Record<string, number> = {
  critical: 0,
  high: 1,
  medium: 2,
  low: 3,
  info: 4,
  none: 5,
};

async function cards(page: Page): Promise<Card[]> {
  return page.locator('[data-post-card]').evaluateAll((nodes) =>
    nodes.map((node) => {
      const card = node as HTMLElement;
      return {
        title: card.querySelector('.post-card-title')?.textContent?.trim() ?? '',
        date: card.dataset.date ?? '',
        impact: card.dataset.impact ?? 'none',
      };
    }),
  );
}

async function expectLatestDayOrdered(page: Page) {
  const rows = await cards(page);
  expect(rows.length).toBeGreaterThan(0);

  const dates = rows.map((row) => row.date);
  expect([...dates].sort().reverse(), 'listing is not newest-first').toEqual(dates);

  const latestDate = rows[0]!.date;
  const sameDay = rows.filter((row) => row.date === latestDate);
  const ranks = sameDay.map((row) => IMPACT_RANK[row.impact] ?? 5);
  expect(ranks, `same-day order is not impact-first: ${JSON.stringify(sameDay)}`).toEqual(
    [...ranks].sort((a, b) => a - b),
  );
}

test.describe('deterministic ordering', () => {
  for (const path of ['/', '/security/', '/format/news/', '/tags/cve/']) {
    test(`${path} is newest-first, then impact-first`, async ({ page }) => {
      await page.goto(path);
      await expectLatestDayOrdered(page);
    });
  }

  test('RSS starts with the same post as the home feed', async ({ page, request }) => {
    await page.goto('/');
    const first = (await cards(page))[0]!;
    const response = await request.get('/rss.xml');
    expect(response.status()).toBe(200);
    const xml = await response.text();
    const rssFirst = xml.match(/<item>[\s\S]*?<title>([^<]+)<\/title>/)?.[1] ?? '';
    expect(rssFirst.trim()).toBe(first.title);
  });

  test('the second archive page is older than the first', async ({ page }) => {
    await page.goto('/');
    const firstPage = await cards(page);
    await page.goto('/page/2/');
    const secondPage = await cards(page);
    expect(secondPage.length).toBeGreaterThan(0);
    expect(secondPage[0]!.date <= firstPage[firstPage.length - 1]!.date).toBe(true);
  });
});
