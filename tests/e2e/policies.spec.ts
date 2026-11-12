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
    // Compare whole tag names: a substring check such as '#security' also
    // matched the approved tag `security-updates` and failed the content PR.
    const retiredTags = ['build', 'security'];
    for (const tag of retiredTags) {
      expect((await request.get(`/tags/${tag}/`)).status()).toBe(404);
    }
    const body = await (await request.get('/tags/')).text();
    const listed = new Set(
      [...body.matchAll(/href="\/tags\/([a-z0-9-]+)\/"/g)].map((match) => match[1]),
    );
    for (const tag of retiredTags) expect(listed.has(tag)).toBe(false);
    expect(listed.has('supply-chain')).toBe(true);
  });
});
