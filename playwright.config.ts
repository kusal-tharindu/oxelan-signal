import { defineConfig, devices } from '@playwright/test';

/**
 * End-to-end checks for the built site (BLOG-T3, BLOG-T5).
 *
 * These run against `astro preview` on the production build, so they exercise the
 * real HTML/CSS/JS a reader gets — including the mobile readability, tap-target,
 * focus and touch fixes that Lighthouse does not cover.
 *
 * Uses the system Chrome channel so no browser download is required locally or on
 * GitHub's ubuntu-latest runners (both ship Chrome).
 */
export default defineConfig({
  testDir: './tests/e2e',
  timeout: 60_000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['list'], ['html', { open: 'never' }]] : [['list']],
  use: {
    baseURL: 'http://localhost:4321',
    trace: 'on-first-retry',
    // Mobile-first: 390x844 with touch, matching the review's reference device.
    ...devices['Pixel 5'],
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
  },
  projects: [
    {
      name: 'mobile-chrome',
      use: {
        ...devices['Pixel 5'],
        channel: 'chrome',
        viewport: { width: 390, height: 844 },
        isMobile: true,
        hasTouch: true,
      },
    },
  ],
  webServer: {
    command: 'npm run build && npm run serve:dist -- --port 4321',
    url: 'http://localhost:4321',
    // Always test the production build. Reusing a stray `astro dev` server would
    // hide build-only behaviour (Pagefind, CSP, hashed assets).
    reuseExistingServer: false,
    timeout: 240_000,
  },
});
