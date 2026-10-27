import { describe, expect, it } from 'vitest';

import { contentDate, latestContentDate, relativeAge, type DatedPost } from '../src/lib/freshness';

const NOW = new Date('2026-10-27T12:00:00Z');

function daysAgo(days: number): Date {
  return new Date(NOW.getTime() - days * 24 * 60 * 60 * 1000);
}

function post(dateDaysAgo: number, updatedDaysAgo?: number): DatedPost {
  return {
    data: {
      date: daysAgo(dateDaysAgo),
      ...(updatedDaysAgo === undefined ? {} : { updated: daysAgo(updatedDaysAgo) }),
    },
  };
}

describe('contentDate', () => {
  it('prefers updated over date', () => {
    expect(contentDate(post(400, 2))).toEqual(daysAgo(2));
  });

  it('falls back to date', () => {
    expect(contentDate(post(10))).toEqual(daysAgo(10));
  });
});

describe('latestContentDate', () => {
  it('returns the newest updated or date value', () => {
    const posts = [post(30), post(400, 1), post(5)];
    expect(latestContentDate(posts)).toEqual(daysAgo(1));
  });

  it('returns undefined for an empty archive', () => {
    expect(latestContentDate([])).toBeUndefined();
  });
});

describe('relativeAge', () => {
  it('labels today and single days', () => {
    expect(relativeAge(daysAgo(0), NOW)).toBe('today');
    expect(relativeAge(daysAgo(1), NOW)).toBe('1d ago');
  });

  it('uses days, weeks, months and years', () => {
    expect(relativeAge(daysAgo(4), NOW)).toBe('4d ago');
    expect(relativeAge(daysAgo(10), NOW)).toBe('1w ago');
    expect(relativeAge(daysAgo(60), NOW)).toBe('2mo ago');
    expect(relativeAge(daysAgo(800), NOW)).toBe('2y ago');
  });

  it('treats future dates as today rather than negative', () => {
    expect(relativeAge(daysAgo(-3), NOW)).toBe('today');
  });
});
