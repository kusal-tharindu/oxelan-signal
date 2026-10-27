#!/usr/bin/env node
/**
 * Unit tests for the pure helpers that drive content IDs, dates and summaries.
 * These are deliberately dependency-free so `npm test` stays fast.
 */
import { describe, expect, it } from 'vitest';

import {
  generatePostId,
  hrefFromId,
  ogImagePath,
  sectionFromId,
  slugFromId,
} from '../src/lib/content-id.mjs';

describe('generatePostId', () => {
  it('removes year and month folders', () => {
    expect(generatePostId('ai/2026/10/new-model-release.md')).toBe('ai/new-model-release');
  });

  it('strips a trailing index file', () => {
    expect(generatePostId('security/2026/10/npm-attack/index.md')).toBe('security/npm-attack');
    expect(generatePostId('security/2026/10/npm-attack/index.mdx')).toBe('security/npm-attack');
  });

  it('keeps weekly digest names', () => {
    expect(generatePostId('digest/2026-w43.md')).toBe('digest/2026-w43');
  });

  it('normalises Windows separators', () => {
    expect(generatePostId('engineering/2026/09/build\\post.md')).toBe('engineering/build/post');
  });

  it('rejects entries outside a section', () => {
    expect(() => generatePostId('post.md')).toThrow(/section folder/);
  });
});

describe('id helpers', () => {
  const id = 'security/npm-attack';

  it('extracts section and slug', () => {
    expect(sectionFromId(id)).toBe('security');
    expect(slugFromId(id)).toBe('npm-attack');
  });

  it('builds canonical URLs', () => {
    expect(hrefFromId(id)).toBe('/security/npm-attack/');
    expect(ogImagePath(id)).toBe('/og/security/npm-attack.png');
  });
});
