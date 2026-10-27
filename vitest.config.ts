import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Unit tests only. The Playwright end-to-end suite lives in tests/e2e and is
    // run separately by `npm run test:e2e` (it needs a built site and a browser).
    include: ['tests/**/*.test.ts', 'tests/**/*.test.mjs'],
    exclude: ['tests/e2e/**', 'node_modules/**', 'dist/**'],
  },
});
