import { expect, test } from '@playwright/test';

/**
 * T5 — client-side interaction tests against the production build.
 *
 * Covers the paths that unit tests cannot reach:
 *   - browse chips are canonical, shareable archive URLs
 *   - the tag index filters without a reload
 *   - the search overlay renders the last query (race guard) and navigates by keyboard
 *   - theme choice persists across reloads
 *   - the mobile menu and TOC work by keyboard/touch
 */

test.describe('browse archives', () => {
  test('section and format chips are real, shareable URLs', async ({ page }) => {
    await page.goto('/');
    const browse = page.locator('nav[data-browse]');

    await browse.getByRole('link', { name: 'Security', exact: true }).click();
    await expect(page).toHaveURL(/\/security\/$/);
    await expect(page.getByRole('heading', { level: 1, name: 'Security' })).toBeVisible();
    const securityCards = page.locator('[data-post-card]');
    expect(await securityCards.count()).toBeGreaterThan(0);
    for (const card of await securityCards.all()) {
      await expect(card).toHaveAttribute('data-section', 'security');
    }

    // On a section page the section group is hidden; format links still work.
    await page.locator('nav[data-browse]').getByRole('link', { name: 'News', exact: true }).click();
    await expect(page).toHaveURL(/\/format\/news\/$/);
    await expect(page.getByRole('heading', { level: 1, name: 'News' })).toBeVisible();
    for (const card of await page.locator('[data-post-card]').all()) {
      await expect(card).toHaveAttribute('data-format', 'news');
    }
    await expect(
      page.locator('nav[data-browse]').getByRole('link', { name: 'News', exact: true }),
    ).toHaveAttribute('aria-current', 'page');
  });

  test('the impact chip opens the generated advisories page', async ({ page }) => {
    await page.goto('/');
    await page.locator('nav[data-browse]').getByRole('link', { name: 'Critical + high' }).click();
    await expect(page).toHaveURL(/\/advisories\/$/);
  });

  test('omits the pager when a listing fits on one page', async ({ page }) => {
    await page.goto('/format/analysis/');
    await expect(page.getByRole('heading', { level: 1, name: 'Analysis' })).toBeVisible();
    await expect(page.locator('.feed-pagination')).toHaveCount(0);
  });
});

test.describe('tag index', () => {
  test('filters tags without a page reload', async ({ page }) => {
    await page.goto('/tags/');
    const input = page.locator('[data-tag-filter]');
    await input.fill('nginx');
    const visible = page.locator('[data-tag-item]:visible');
    expect(await visible.count()).toBeGreaterThan(0);
    await expect(page.locator('[data-tag-item="nginx"]')).toBeVisible();
    await expect(page.locator('[data-tag-count]')).toContainText('of');

    await input.fill('zzz-no-tag');
    await expect(page.locator('[data-tag-empty]')).toBeVisible();
    await expect(page.locator('[data-tag-item]:visible')).toHaveCount(0);

    await input.fill('');
    await expect(page.locator('[data-tag-empty]')).toBeHidden();
    expect(await page.locator('[data-tag-item]:visible').count()).toBeGreaterThan(10);
  });

  test('tag pages are crawlable URLs', async ({ page }) => {
    await page.goto('/tags/nginx/');
    await expect(page.getByRole('heading', { level: 1, name: '#nginx' })).toBeVisible();
    await expect(page.locator('[data-post-card]').first()).toBeVisible();
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

test.describe('home hero', () => {
  test('renders a data-driven 3D signal sphere', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Something changed');
    await expect(page.getByRole('link', { name: /Read the lead story/ })).toBeVisible();
    await expect(page.getByRole('link', { name: /See what needs patching/ })).toHaveAttribute(
      'href',
      '/advisories/',
    );

    const canvas = page.locator('[data-signal-field] canvas');
    await expect(canvas).toBeVisible();
    await expect(page.locator('.signal-field-foot')).toContainText('posts in the graph');

    const painted = await canvas.evaluate((element) => {
      const canvas = element as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');
      if (!ctx) return 0;
      const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let opaque = 0;
      for (let i = 3; i < data.length; i += 4) if ((data[i] ?? 0) > 0) opaque += 1;
      return opaque;
    });
    expect(painted, 'signal canvas did not paint').toBeGreaterThan(500);
  });

  test('still paints one static frame under reduced motion', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    const canvas = page.locator('[data-signal-field] canvas');
    await expect(canvas).toBeVisible();
    const painted = await canvas.evaluate((element) => {
      const canvas = element as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');
      if (!ctx) return 0;
      const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let opaque = 0;
      for (let i = 3; i < data.length; i += 4) if ((data[i] ?? 0) > 0) opaque += 1;
      return opaque;
    });
    expect(painted, 'reduced-motion canvas is blank').toBeGreaterThan(500);
  });
});

test.describe('article reading aids', () => {
  test('copy link gives explicit success feedback', async ({ page }) => {
    await page.goto('/security/malfex-npm-campaign/');
    const button = page.locator('[data-copy-link]').first();
    await button.click();
    await expect(button.locator('[data-copy-label]')).toHaveText('Copied');
    await expect(button).toHaveClass(/is-copied/);
    await expect(button.locator('[data-copy-icon="check"]')).toBeVisible();
  });

  test('omits the article title from the mobile breadcrumb', async ({ page }) => {
    await page.goto('/security/malfex-npm-campaign/');
    const crumb = page.locator('nav[aria-label="Breadcrumb"]');
    await expect(crumb).toContainText('Latest');
    await expect(crumb).toContainText('Security');
    const current = crumb.locator('[aria-current="page"]');
    await expect(current).toBeHidden();
    // The full title returns on a desktop-width viewport.
    await page.setViewportSize({ width: 1280, height: 800 });
    await expect(current).toBeVisible();
    await expect(current).toContainText('MALFEX hides its npm loader');
  });
});

test.describe('advisories', () => {
  test('the home rail links to the generated advisories page', async ({ page }) => {
    await page.goto('/');
    const strip = page.locator('.alert-strip');
    await expect(strip).toBeVisible();
    await expect(strip).toContainText('Advisories');
    await expect(strip).toContainText('2');

    await strip.locator('a[href="/advisories/"]').first().click();
    await expect(page).toHaveURL(/\/advisories\/$/);
    await expect(page.getByRole('heading', { level: 1, name: 'Advisories' })).toBeVisible();
    await expect(page.getByRole('heading', { level: 2, name: 'Needs attention' })).toBeVisible();
    await expect(page.getByRole('heading', { level: 2, name: 'Patch now' })).toBeVisible();
    await expect(page.locator('body')).toContainText('Critical and high');
    await expect(page.locator('body')).toContainText('Nothing needs an emergency patch');
  });

  test('the home page shows a freshness summary', async ({ page }) => {
    await page.goto('/');
    const summary = page.locator('body');
    await expect(summary).toContainText('Updated');
    await expect(summary).toContainText('13 posts');
    await expect(summary).toContainText('2 advisories');
  });
});

test.describe('mobile menu', () => {
  test('moves focus on open and returns it on Escape (L6)', async ({ page }) => {
    await page.goto('/');
    const toggle = page.locator('[data-menu-toggle]');
    const menu = page.locator('[data-mobile-menu]');
    await expect(toggle).toBeVisible();
    await expect(menu).toBeHidden();

    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(menu).toBeVisible();
    // Opening moves focus to the first link.
    const firstName = await page.evaluate(() => document.activeElement?.textContent?.trim() ?? '');
    expect(firstName).toContain('Latest');

    await page.keyboard.press('Escape');
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(menu).toBeHidden();
    // Focus returns to the toggle, not the top of the document.
    expect(
      await page.evaluate(() =>
        (document.activeElement as HTMLElement)?.hasAttribute('data-menu-toggle'),
      ),
    ).toBe(true);
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
