import { describe, expect, it } from 'vitest';

import {
  ageInDays,
  isFreshAlert,
  isFreshPatch,
  isRecent,
  ALERT_MAX_AGE_DAYS,
  PATCH_MAX_AGE_DAYS,
  type RecencyInput,
} from '../src/lib/recency';

// Fixed reference point so every age-window assertion is deterministic.
const NOW = new Date('2026-10-27T12:00:00Z');

function daysAgo(days: number): Date {
  return new Date(NOW.getTime() - days * 24 * 60 * 60 * 1000);
}

function post(dateDaysAgo: number, updatedDaysAgo?: number): RecencyInput {
  return {
    data: {
      date: daysAgo(dateDaysAgo),
      ...(updatedDaysAgo === undefined ? {} : { updated: daysAgo(updatedDaysAgo) }),
    },
  };
}

describe('ageInDays', () => {
  it('measures from date when there is no updated date', () => {
    expect(ageInDays(post(10), NOW)).toBeCloseTo(10);
  });

  it('measures from updated when present, not the original date', () => {
    expect(ageInDays(post(400, 2), NOW)).toBeCloseTo(2);
  });
});

describe('isRecent', () => {
  it('is fresh inside the window', () => {
    expect(isRecent(post(ALERT_MAX_AGE_DAYS - 1), ALERT_MAX_AGE_DAYS, NOW)).toBe(true);
  });

  it('is stale just outside the window', () => {
    expect(isRecent(post(ALERT_MAX_AGE_DAYS + 1), ALERT_MAX_AGE_DAYS, NOW)).toBe(false);
  });

  it('treats a future-dated post as fresh (negative age)', () => {
    expect(isRecent(post(-5), ALERT_MAX_AGE_DAYS, NOW)).toBe(true);
  });
});

describe('advisory rail windows (BLOG-M1)', () => {
  it('a critical post 400 days old is no longer fresh for the Advisories rail', () => {
    // Before the fix, a 19-month-old critical advisory drove the home strip forever.
    expect(isFreshAlert(post(400), NOW)).toBe(false);
  });

  it('a critical post this week stays in the Advisories rail', () => {
    expect(isFreshAlert(post(3), NOW)).toBe(true);
  });

  it('an updated post re-enters the rail even if the original date is old', () => {
    expect(isFreshAlert(post(400, 1), NOW)).toBe(true);
  });
});

describe('patch-now rail windows (BLOG-M1)', () => {
  it('a patch item just inside 90 days is fresh', () => {
    expect(isFreshPatch(post(PATCH_MAX_AGE_DAYS - 1), NOW)).toBe(true);
  });

  it('a patch item just outside 90 days is stale', () => {
    expect(isFreshPatch(post(PATCH_MAX_AGE_DAYS + 1), NOW)).toBe(false);
  });

  it('the patch window is longer than the advisory window', () => {
    expect(PATCH_MAX_AGE_DAYS).toBeGreaterThan(ALERT_MAX_AGE_DAYS);
    // A 60-day-old item is stale for alerts but still fresh for patches.
    expect(isFreshAlert(post(60), NOW)).toBe(false);
    expect(isFreshPatch(post(60), NOW)).toBe(true);
  });
});
