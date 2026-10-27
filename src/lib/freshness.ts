/**
 * Freshness helpers for the home page and advisory rail.
 *
 * Framework-free so they can be unit-tested. They only read the two date fields a
 * post carries, so any post-like object satisfies the parameter type.
 */

export interface DatedPost {
  data: {
    date: Date;
    updated?: Date | undefined;
  };
}

const MS_PER_DAY = 1000 * 60 * 60 * 24;

/** The most recent meaningful date on a post. */
export function contentDate(post: DatedPost): Date {
  return post.data.updated ?? post.data.date;
}

/** The newest content date across a set of posts, or undefined when empty. */
export function latestContentDate(posts: DatedPost[]): Date | undefined {
  let latest: Date | undefined;
  for (const post of posts) {
    const date = contentDate(post);
    if (!latest || date > latest) latest = date;
  }
  return latest;
}

/**
 * Compact relative age for the advisory strip. Built at deploy time, so this is
 * intentionally coarse: exact minutes would be stale by the time a reader sees it.
 */
export function relativeAge(date: Date, now: Date = new Date()): string {
  const days = Math.floor((now.getTime() - date.getTime()) / MS_PER_DAY);
  if (days <= 0) return 'today';
  if (days === 1) return '1d ago';
  if (days < 7) return `${days}d ago`;
  if (days < 30) return `${Math.floor(days / 7)}w ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}
