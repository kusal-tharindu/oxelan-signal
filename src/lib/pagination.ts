/**
 * Static archive pagination.
 *
 * Every listing renders at most FEED_PAGE_SIZE cards and exposes real URLs for the
 * previous/next page. This is what keeps the site correct at thousands of posts:
 * filters are links to canonical archives, not JavaScript over a small window.
 */

/** Maximum cards rendered on a listing page. Ten keeps mobile pages short. */
export const FEED_PAGE_SIZE = 10;

/** Total pages needed for `total` items. Always at least 1. */
export function pageCount(total: number, pageSize = FEED_PAGE_SIZE): number {
  return Math.max(1, Math.ceil(total / pageSize));
}

/** The slice of `items` for a 1-based page, clamped to a valid range. */
export function pageSlice<T>(items: T[], page: number, pageSize = FEED_PAGE_SIZE): T[] {
  const pages = pageCount(items.length, pageSize);
  const target = Math.min(Math.max(1, page), pages);
  const start = (target - 1) * pageSize;
  return items.slice(start, start + pageSize);
}

/** Canonical URL for a 1-based archive page. Page 1 is the listing root. */
export function archiveHref(basePath = '/', page = 1): string {
  const base = basePath === '/' ? '/' : `${basePath.replace(/\/+$/, '')}/`;
  if (page <= 1) return base;
  return `${base === '/' ? '' : base.slice(0, -1)}/page/${page}/`;
}

/** URL of the next page, or undefined on the last page. */
export function nextArchiveHref(
  page: number,
  total: number,
  basePath = '/',
  pageSize = FEED_PAGE_SIZE,
): string | undefined {
  if (page >= pageCount(total, pageSize)) return undefined;
  return archiveHref(basePath, page + 1);
}

/** URL of the previous page, or undefined on page 1. */
export function prevArchiveHref(page: number, basePath = '/'): string | undefined {
  if (page <= 1) return undefined;
  return archiveHref(basePath, page - 1);
}
