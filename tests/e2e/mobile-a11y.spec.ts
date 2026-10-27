import { expect, test, type Page } from '@playwright/test';

/**
 * T3 — mobile readability and accessibility smoke tests at 390x844 touch.
 *
 * These assert the invariants the review's M3/M4/M5/M6/L3 fixes established,
 * in a real browser, against the production build:
 *   - no horizontal page overflow
 *   - no visible text below 12px
 *   - no interactive control below a 24x24 target
 *   - keyboard focus is visible on a post card
 *   - the copy-code control is visible on a touch device
 *   - the mobile table of contents exists and is usable
 *   - exactly one theme-color meta, matching the active theme
 */

const POST_WITH_TABLE = '/security/nginx-october-2026-cves/';
const POST_WITH_CODE = '/engineering/dependency-review-in-ci/';
const POST_WITH_TOC = '/ai/agentic-threat-model/';

async function expectNoHorizontalOverflow(page: Page) {
  const { scrollWidth, innerWidth } = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    innerWidth: window.innerWidth,
  }));
  expect(
    scrollWidth,
    `document scrolls horizontally: ${scrollWidth}px > ${innerWidth}px`,
  ).toBeLessThanOrEqual(innerWidth + 1);
}

test.describe('mobile readability (T3)', () => {
  test('has no horizontal overflow on the home page', async ({ page }) => {
    await page.goto('/');
    await expectNoHorizontalOverflow(page);
  });

  test('has no horizontal overflow on a post with a wide table', async ({ page }) => {
    await page.goto(POST_WITH_TABLE);
    await expectNoHorizontalOverflow(page);
  });

  test('has no visible text below 12px on the home page', async ({ page }) => {
    await page.goto('/');
    const offenders = await page.evaluate(() => {
      const found: { tag: string; size: number; text: string; cls: string }[] = [];
      for (const el of document.querySelectorAll<HTMLElement>('body *')) {
        if (el.closest('svg')) continue;
        if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'TITLE'].includes(el.tagName)) continue;
        const hasOwnText = Array.from(el.childNodes).some(
          (node) => node.nodeType === Node.TEXT_NODE && (node.textContent ?? '').trim().length > 0,
        );
        if (!hasOwnText) continue;
        if (!el.checkVisibility({ checkOpacity: false, checkVisibilityCSS: true })) continue;
        const size = Number.parseFloat(getComputedStyle(el).fontSize);
        if (size < 12) {
          found.push({
            tag: el.tagName,
            size,
            text: (el.textContent ?? '').trim().slice(0, 40),
            cls: el.className.toString().slice(0, 60),
          });
        }
      }
      return found;
    });
    expect(offenders, `text below 12px: ${JSON.stringify(offenders, null, 2)}`).toEqual([]);
  });

  test('has no interactive control below 24x24', async ({ page }) => {
    await page.goto('/');
    const small = await page.evaluate(() => {
      const selectors = [
        'button',
        'summary',
        '[role="button"]',
        '.chip',
        '.btn',
        '.icon-btn',
        '.tag',
        '.badge',
        '.share-row a',
      ];
      const seen = new Set<Element>();
      const found: { tag: string; text: string; w: number; h: number }[] = [];
      for (const selector of selectors) {
        for (const el of document.querySelectorAll(selector)) {
          if (seen.has(el)) continue;
          seen.add(el);
          const html = el as HTMLElement;
          if (html.closest('[hidden]')) continue;
          if (!html.checkVisibility({ checkOpacity: false, checkVisibilityCSS: true })) continue;
          const rect = html.getBoundingClientRect();
          if (rect.width === 0 && rect.height === 0) continue;
          if (rect.width < 24 || rect.height < 24) {
            found.push({
              tag: html.tagName,
              text: (html.textContent ?? '').trim().slice(0, 32),
              w: Math.round(rect.width),
              h: Math.round(rect.height),
            });
          }
        }
      }
      return found;
    });
    expect(small, `controls under 24x24: ${JSON.stringify(small, null, 2)}`).toEqual([]);
  });

  test('shows keyboard focus on a post card', async ({ page }) => {
    await page.goto('/');
    let reachedCard = false;
    for (let i = 0; i < 80; i += 1) {
      await page.keyboard.press('Tab');
      reachedCard = await page.evaluate(() => {
        const active = document.activeElement as HTMLElement | null;
        return Boolean(active?.closest('[data-post-card]') && active.tagName === 'A');
      });
      if (reachedCard) break;
    }
    expect(reachedCard, 'never reached a post-card link with Tab').toBe(true);

    const outline = await page.evaluate(() => {
      const card = (document.activeElement as HTMLElement).closest(
        '[data-post-card]',
      ) as HTMLElement;
      const style = getComputedStyle(card);
      return { style: style.outlineStyle, width: style.outlineWidth };
    });
    expect(outline.style, 'card focus ring is not solid').toBe('solid');
    expect(
      Number.parseFloat(outline.width),
      'card focus ring is thinner than 2px',
    ).toBeGreaterThanOrEqual(2);
  });

  test('keeps the copy-code button visible on touch', async ({ page }) => {
    await page.goto(POST_WITH_CODE);
    const buttons = page.locator('.copy-code');
    await expect(buttons.first()).toBeAttached();
    // Playwright's visibility does not include opacity, and the fix is opacity-based.
    const opacity = await buttons.first().evaluate((el) => getComputedStyle(el).opacity);
    expect(opacity, 'copy-code is hidden on a touch device').toBe('1');
  });

  test('renders the mobile table of contents', async ({ page }) => {
    await page.goto(POST_WITH_TOC);
    const toc = page.locator('.toc-mobile');
    await expect(toc).toHaveCount(1);
    await expect(toc).toBeVisible();
    await expect(toc.locator('summary')).toContainText('On this page');
    // The desktop TOC must not duplicate ids on the same page.
    const desktop = page.locator('nav.toc').first();
    if (await desktop.count()) {
      const ids = await page
        .locator('[id^="toc-title"]')
        .evaluateAll((nodes) => nodes.map((n) => n.id));
      expect(new Set(ids).size, `duplicate TOC ids: ${ids.join(', ')}`).toBe(ids.length);
    }
  });

  test('runs the inline theme script under the CSP hash (M10)', async ({ page }) => {
    const cspErrors: string[] = [];
    page.on('console', (message) => {
      if (
        message.type() === 'error' &&
        /content security policy|refused to execute/i.test(message.text())
      ) {
        cspErrors.push(message.text());
      }
    });

    await page.goto('/');
    // The inline script is what sets data-theme; if CSP blocked it, the attribute is absent.
    await expect(page.locator('html')).toHaveAttribute('data-theme', /^(dark|light)$/);

    const csp = await page
      .locator('meta[http-equiv="Content-Security-Policy"]')
      .getAttribute('content');
    expect(csp).toContain("script-src 'self' 'sha256-");
    expect(csp ?? '').not.toMatch(/script-src[^;]*'unsafe-inline'/);
    expect(cspErrors, cspErrors.join('\n')).toEqual([]);
  });

  test('has exactly one theme-color meta that follows the theme (L3)', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('meta[name="theme-color"]')).toHaveCount(1);
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    await expect(page.locator('meta[name="theme-color"]')).toHaveAttribute('content', '#0a0e17');

    await page.locator('[data-theme-toggle]').first().click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
    await expect(page.locator('meta[name="theme-color"]')).toHaveAttribute('content', '#f6f2e8');
  });
});
