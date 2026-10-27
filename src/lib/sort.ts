/**
 * Deterministic post ordering.
 *
 * Date is the primary key. A date-only post is midnight UTC, so multiple posts can
 * share the same timestamp. Without a tie-break the feed would fall back to file
 * order, which is not "newest first" and changes silently when a file is renamed.
 * For same-time posts: impact (critical → none), then format (news → digest), then
 * id. Add a UTC time to `date` when exact chronology matters.
 */
import { impactOrder } from '../site.config';
import { formatOrder } from './formats';

export interface SortablePost {
  id: string;
  data: {
    date: Date;
    updated?: Date | undefined;
    impact?: string | undefined;
    format?: string | undefined;
  };
}

export function impactRank(post: SortablePost): number {
  if (!post.data.impact) return impactOrder.length;
  const index = impactOrder.indexOf(post.data.impact as (typeof impactOrder)[number]);
  return index === -1 ? impactOrder.length : index;
}

export function formatRank(post: SortablePost): number {
  if (!post.data.format) return formatOrder.length + 1;
  const index = formatOrder.indexOf(post.data.format as (typeof formatOrder)[number]);
  return index === -1 ? formatOrder.length : index;
}

/** Impact → format → id. Used when timestamps tie. */
function compareTieBreak(a: SortablePost, b: SortablePost): number {
  const impactDelta = impactRank(a) - impactRank(b);
  if (impactDelta !== 0) return impactDelta;

  const formatDelta = formatRank(a) - formatRank(b);
  if (formatDelta !== 0) return formatDelta;

  return a.id.localeCompare(b.id);
}

/** Newest first; same timestamp: critical/high first, then news/analysis/guide, then id. */
export function comparePosts(a: SortablePost, b: SortablePost): number {
  const dateDelta = b.data.date.getTime() - a.data.date.getTime();
  return dateDelta !== 0 ? dateDelta : compareTieBreak(a, b);
}

/** Newest `updated ?? date` first, with the same deterministic tie-break. */
export function compareUpdatedPosts(a: SortablePost, b: SortablePost): number {
  const aDate = a.data.updated ?? a.data.date;
  const bDate = b.data.updated ?? b.data.date;
  const delta = bDate.getTime() - aDate.getTime();
  return delta !== 0 ? delta : compareTieBreak(a, b);
}
