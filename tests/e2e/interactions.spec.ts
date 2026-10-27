import { expect, test } from '@playwright/test';

/**
 * T5 — client-side interaction tests against the production build.
 *
 * Covers the progressive-enhancement paths that unit tests cannot reach:
 *   - filter state round-trips through the URL and survives a reload
 *   - "load older posts" extends the rendered window
 *   - the search overlay renders the last query (race guard) and navigates by keyboard
 *   - theme choice persists across reloads
 *   - the mobile TOC expands
 */

test.describe('filters', () => {
  test('writes filter state to the URL, survives reload, and clears', async ({ page }) => {
    await page.goto('/');
    const cards = page.locator('[data-post-card]:visible');
    await expect(cards.first()).toBeVisible();

    await page.locator('[data-filter-group="section"][data-filter-value="security"]').click();
    await expect(page).toHaveURL(/[?&]section=security/);

    const count = await cards.count();
    expect(count).toBeGreaterThan(0);
    for (const card of await cards.all()) {
      await expect(card).toHaveAttribute('data-section', 'security');
    }
    await expect(
      page.locator('[data-filter-group="section"][data-filter-value="security"]'),
    ).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('[data-filter-count]')).toContainText('of');

    // Reload: the URL is the source of truth, so the filter must re-apply.
    await page.reload();
    await expect(
      page.locator('[data-filter-group="section"][data-filter-value="security"]'),
    ).toHaveAttribute('aria-pressed', 'true');
    for (const card of await page.locator('[data-post-card]:visible').all()) {
      await expect(card).toHaveAttribute('data-section', 'security');
    }

    await page.locator('[data-filter-clear]').click();
    await expect(page).not.toHaveURL(/section=/);
    await expect(
      page.locator('[data-filter-group="section"][data-filter-value="all"]'),
    ).toHaveAttribute('aria-pressed', 'true');
  });

  test('combines format and impact filters', async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-filter-group="format"][data-filter-value="news"]').click();
    await expect(page).toHaveURL(/[?&]format=news/);
    const visible = page.locator('[data-post-card]:visible');
    expect(await visible.count()).toBeGreaterThan(0);
    for (const card of await visible.all()) {
      await expect(card).toHaveAttribute('data-format', 'news');
    }

    await page.locator('[data-filter-group="impact"][data-filter-value="urgent"]').click();
    await expect(page).toHaveURL(/impact=urgent/);
    const impacts = await page
      .locator('[data-post-card]:visible')
      .evaluateAll((nodes) => nodes.map((node) => (node as HTMLElement).dataset.impact));
    for (const impact of impacts) expect(['critical', 'high']).toContain(impact);
  });

  test('shows the empty state when nothing matches', async ({ page }) => {
    await page.goto('/');
    // Combine a section and format that have no posts in common on the home feed.
    await page.locator('[data-filter-group="section"][data-filter-value="engineering"]').click();
    await page.locator('[data-filter-group="format"][data-filter-value="news"]').click();
    const empty = page.locator('[data-filter-empty]');
    await expect(empty).toBeVisible();
    await expect(empty).toContainText('Nothing matches those filters.');
  });
});

test.describe('load older posts', () => {
  test('extends the rendered window in pages', async ({ page }) => {
    await page.goto('/');
    const visible = page.locator('[data-post-card]:visible');
    const firstPage = await visible.count();
    expect(firstPage).toBe(10);

    const more = page.locator('[data-load-more]');
    await expect(more).toBeVisible();
    await more.click();

    await expect(visible).toHaveCount(12);
    await expect(more).toBeHidden();
  });
});

test.describe('search overlay', () => {
  test('renders results for the last query only (race guard)', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('/');
    const dialog = page.locator('#search-dialog');
    await expect(dialog).toBeVisible();

    const input = page.locator('[data-search-input]');
    await input.fill('nginx');
    await expect(page.locator('.search-result').first()).toBeVisible({ timeout: 20_000 });
    await expect(page.locator('.search-result-title').first()).toContainText(/nginx/i);

    // A second, unmatched query must replace the first result set, not append to it.
    await input.fill('zzzz-no-such-post');
    await expect(page.locator('[data-search-results]')).toContainText('No results for', {
      timeout: 20_000,
    });
    await expect(page.locator('.search-result')).toHaveCount(0);
  });

  test('opens with Ctrl+K, navigates results by keyboard, and opens a post', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Control+k');
    await expect(page.locator('#search-dialog')).toBeVisible();

    await page.locator('[data-search-input]').fill('supply chain');
    await expect(page.locator('.search-result').first()).toBeVisible({ timeout: 20_000 });

    await page.keyboard.press('ArrowDown');
    await expect(page.locator('.search-result.is-selected')).toHaveCount(1);

    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/\/[a-z-]+\/[a-z0-9-]+\/$/, { timeout: 15_000 });
    await expect(page.locator('#search-dialog')).not.toBeVisible();
  });

  test('closes on Escape', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('/');
    await expect(page.locator('#search-dialog')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.locator('#search-dialog')).not.toBeVisible();
  });
});

test.describe('theme', () => {
  test('persists the choice across reloads', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');

    await page.locator('[data-theme-toggle]').first().click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
    expect(await page.evaluate(() => localStorage.getItem('theme'))).toBe('light');

    await page.reload();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
    await expect(page.locator('meta[name="theme-color"]')).toHaveAttribute('content', '#f6f2e8');
  });
});

test.describe('mobile table of contents', () => {
  test('expands on tap', async ({ page }) => {
    await page.goto('/ai/agentic-threat-model/');
    const toc = page.locator('.toc-mobile');
    await expect(toc).toBeVisible();
    await expect(toc).not.toHaveAttribute('open', '');

    await toc.locator('summary').click();
    await expect(toc).toHaveAttribute('open', '');

    const link = toc.locator('a[data-toc-link]').first();
    await expect(link).toBeVisible();
    await link.click();
    await expect(page).toHaveURL(/#.+/);
  });
});
