import { expect, test } from '@playwright/test';

test.describe('policies', () => {
  test('About exposes licensing, privacy, trademarks and corrections', async ({ page }) => {
    await page.goto('/about/');
    for (const id of ['licensing', 'privacy', 'disclaimer', 'trademarks', 'corrections']) {
      await expect(page.locator(`#${id}`)).toHaveCount(1);
    }
    const prose = page.locator('.prose-signal');
    await expect(prose).toContainText('All rights reserved');
    await expect(prose).toContainText('no analytics');
    await expect(prose).toContainText('Microsoft');
    await expect(page.locator('footer')).toContainText('All rights reserved');
    await expect(page.locator('footer a[href="/about/#licensing"]')).toBeVisible();
  });

  test('retired tags are no longer generated or listed', async ({ request }) => {
    const retired = await request.get('/tags/build/');
    expect(retired.status()).toBe(404);
    const index = await request.get('/tags/');
    const body = await index.text();
    expect(body).not.toContain('#build');
    expect(body).not.toContain('#security');
    expect(body).toContain('#supply-chain');
  });
});
