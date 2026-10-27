/**
 * Pure recency helper for the home-page advisory rails.
 *
 * Framework-free (no `astro:content` import) so it is unit-testable. It only reads
 * two `Date` fields, so any post-like object satisfies the parameter type.
 *
 * The rails ("Advisories" and "Patch now") would otherwise surface years-old items
 * forever. These windows let them age out automatically (review BLOG-M1).
 */

/** A post-like value: only the fields the recency check needs. */
export interface RecencyInput {
  data: {
    date: Date;
    updated?: Date | undefined;
  };
}

/** Advisories are fresh for 30 days from their most recent meaningful date. */
export const ALERT_MAX_AGE_DAYS = 30;

/** Patch items stay in the rail for 90 days from their most recent meaningful date. */
export const PATCH_MAX_AGE_DAYS = 90;

const MS_PER_DAY = 1000 * 60 * 60 * 24;

/** Age in days from `updated ?? date` to `now`. Negative when the post is future-dated. */
export function ageInDays(post: RecencyInput, now: Date): number {
  const stamp = (post.data.updated ?? post.data.date).getTime();
  return (now.getTime() - stamp) / MS_PER_DAY;
}

/** True when the post is within `maxAgeDays` of `now`, measured from `updated ?? date`. */
export function isRecent(post: RecencyInput, maxAgeDays: number, now: Date = new Date()): boolean {
  return ageInDays(post, now) <= maxAgeDays;
}

/** True when a post should appear in the "Advisories" rail. */
export function isFreshAlert(post: RecencyInput, now: Date): boolean {
  return isRecent(post, ALERT_MAX_AGE_DAYS, now);
}

/** True when a post should appear in the "Patch now" rail. */
export function isFreshPatch(post: RecencyInput, now: Date): boolean {
  return isRecent(post, PATCH_MAX_AGE_DAYS, now);
}
