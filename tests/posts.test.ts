import { describe, expect, it } from 'vitest';

import { formatDate, isoDate, readingTime } from '../src/lib/format';

describe('formatDate', () => {
  it('formats in UTC so builds are deterministic', () => {
    const date = new Date('2026-10-26T23:30:00-05:00');
    expect(formatDate(date)).toBe('Oct 27, 2026');
  });

  it('supports compact options for sidebars', () => {
    expect(formatDate(new Date('2026-10-26T12:00:00Z'), { month: 'short', day: 'numeric' })).toBe(
      'Oct 26',
    );
  });
});

describe('isoDate', () => {
  it('returns the UTC calendar date', () => {
    expect(isoDate(new Date('2026-01-02T23:00:00-05:00'))).toBe('2026-01-03');
  });
});

describe('readingTime', () => {
  it('returns at least one minute', () => {
    expect(readingTime('')).toBe(1);
    expect(readingTime(undefined)).toBe(1);
  });

  it('does not count code blocks', () => {
    const body = 'word '.repeat(220) + '\n```bash\necho this is not prose\n```\n';
    expect(readingTime(body)).toBe(1);
  });

  it('rounds up', () => {
    expect(readingTime('word '.repeat(221))).toBe(2);
  });
});
