import { expect, test } from '@playwright/test';

test.describe('radar', () => {
  test('renders every entry and the four rings', async ({ page }) => {
    const response = await page.goto('/radar/');
    expect(response?.status()).toBe(200);

    await expect(page.getByRole('heading', { level: 1, name: 'What is moving.' })).toBeVisible();
    for (const ring of ['Adopt', 'Trial', 'Assess', 'Hold']) {
      await expect(page.getByRole('heading', { level: 2, name: ring, exact: true })).toBeVisible();
    }
    await expect(page.locator('.radar-blip')).toHaveCount(10);

    for (const name of [
      'Astro content collections',
      'MCP gateways',
      'Agent sandboxes',
      'Prompt-only guardrails',
    ]) {
      await expect(page.locator('.radar-blip', { hasText: name })).toHaveCount(1);
    }
  });

  test('external radar links are safe and the page does not overflow', async ({ page }) => {
    await page.goto('/radar/');
    const links = page.locator('.radar-blip a');
    expect(await links.count()).toBeGreaterThan(0);
    for (const link of await links.all()) {
      await expect(link).toHaveAttribute('href', /^https?:\/\//);
      await expect(link).toHaveAttribute('target', '_blank');
      await expect(link).toHaveAttribute('rel', /noopener/);
      await expect(link).toHaveAttribute('rel', /noreferrer/);
    }

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - window.innerWidth,
    );
    expect(overflow).toBeLessThanOrEqual(1);
  });
});
