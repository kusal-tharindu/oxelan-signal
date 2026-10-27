import { describe, expect, it } from 'vitest';

import { comparePosts, compareUpdatedPosts, type SortablePost } from '../src/lib/sort';

const NOW = new Date('2026-10-27T15:30:00Z');

function post(id: string, overrides: Partial<SortablePost['data']> = {}): SortablePost {
  return {
    id,
    data: {
      date: NOW,
      format: 'news',
      ...overrides,
    },
  };
}

describe('comparePosts', () => {
  it('orders newer timestamps first, even over severity', () => {
    const criticalOld = post('security/old-critical', {
      date: new Date('2026-10-27T10:00:00Z'),
      impact: 'critical',
    });
    const quietNew = post('ai/new-quiet', {
      date: new Date('2026-10-27T15:00:00Z'),
    });
    expect([criticalOld, quietNew].sort(comparePosts).map((p) => p.id)).toEqual([
      'ai/new-quiet',
      'security/old-critical',
    ]);
  });

  it('orders same-timestamp posts critical, high, then no impact', () => {
    const quiet = post('ai/quiet');
    const high = post('security/high', { impact: 'high' });
    const critical = post('security/critical', { impact: 'critical' });
    expect([quiet, high, critical].sort(comparePosts).map((p) => p.id)).toEqual([
      'security/critical',
      'security/high',
      'ai/quiet',
    ]);
  });

  it('orders same timestamp and impact by format, then id', () => {
    const guide = post('engineering/guide', { impact: 'high', format: 'guide' });
    const analysis = post('ai/analysis', { impact: 'high', format: 'analysis' });
    const newsB = post('security/news-b', { impact: 'high', format: 'news' });
    const newsA = post('security/news-a', { impact: 'high', format: 'news' });
    expect([guide, analysis, newsB, newsA].sort(comparePosts).map((p) => p.id)).toEqual([
      'security/news-a',
      'security/news-b',
      'ai/analysis',
      'engineering/guide',
    ]);
  });

  it('is deterministic when timestamps, impact and format all tie', () => {
    const b = post('security/b');
    const a = post('security/a');
    expect([b, a].sort(comparePosts).map((p) => p.id)).toEqual(['security/a', 'security/b']);
  });
});

describe('compareUpdatedPosts', () => {
  it('uses updated when present, then the deterministic tie-break', () => {
    const old = post('security/old', {
      date: new Date('2026-10-01T00:00:00Z'),
      updated: new Date('2026-10-26T00:00:00Z'),
      impact: 'high',
    });
    const quiet = post('ai/quiet', {
      date: new Date('2026-10-20T00:00:00Z'),
      updated: new Date('2026-10-26T00:00:00Z'),
    });
    expect([quiet, old].sort(compareUpdatedPosts).map((p) => p.id)).toEqual([
      'security/old',
      'ai/quiet',
    ]);
  });
});
