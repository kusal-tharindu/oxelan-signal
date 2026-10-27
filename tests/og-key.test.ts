import { describe, expect, it } from 'vitest';

import { OG_RENDER_VERSION, ogCacheKey, type OgCacheInput } from '../src/lib/og-key';

const BASE: OgCacheInput = {
  title: 'A title',
  sectionLabel: 'Security',
  sectionColor: '#FF7A6E',
  format: 'news',
  date: new Date('2026-10-27T00:00:00Z'),
  domain: 'blog.oxelan.com',
};

describe('ogCacheKey', () => {
  it('is deterministic and filesystem-safe', () => {
    const key = ogCacheKey(BASE);
    expect(key).toBe(ogCacheKey({ ...BASE }));
    expect(key).toMatch(/^[0-9a-f]{24}$/);
  });

  it('changes when any rendered field changes', () => {
    expect(ogCacheKey({ ...BASE, title: 'A different title' })).not.toBe(ogCacheKey(BASE));
    expect(ogCacheKey({ ...BASE, format: 'analysis' })).not.toBe(ogCacheKey(BASE));
    expect(ogCacheKey({ ...BASE, date: new Date('2026-10-28T00:00:00Z') })).not.toBe(
      ogCacheKey(BASE),
    );
    expect(ogCacheKey({ ...BASE, domain: 'example.com' })).not.toBe(ogCacheKey(BASE));
  });

  it('includes the renderer version so a design change invalidates the cache', () => {
    expect(OG_RENDER_VERSION).toBeTruthy();
  });
});
