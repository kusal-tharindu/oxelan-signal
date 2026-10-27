/**
 * Feed pagination policy.
 *
 * Static pages render at most FEED_PAGE_SIZE cards so the home and section HTML stay a
 * fixed size no matter how many posts exist. Overflow moves to static archive pages
 * (/page/2/, /security/page/2/) that crawlers can reach through a stable link, while
 * client-side filtering and "load older" still operate over the rendered window.
 * See review BLOG-M12.
 */

/** Maximum cards rendered server-side on a listing page. */
export const FEED_PAGE_SIZE = 30;

/** Total number of pages needed for `total` items at FEED_PAGE_SIZE per page. */
export function pageCount(total: number, pageSize = FEED_PAGE_SIZE): number {
  return Math.max(1, Math.ceil(total / pageSize));
}

/** The slice of `items` for a given 1-based page, clamped to a valid range. */
export function pageSlice<T>(items: T[], page: number, pageSize = FEED_PAGE_SIZE): T[] {
  const pages = pageCount(items.length, pageSize);
  const target = Math.min(Math.max(1, page), pages);
  const start = (target - 1) * pageSize;
  return items.slice(start, start + pageSize);
}

/** The archive href for a listing's next page, or undefined when on the last page. */
export function nextArchiveHref(
  page: number,
  total: number,
  basePath = '/',
  pageSize = FEED_PAGE_SIZE,
): string | undefined {
  const pages = pageCount(total, pageSize);
  if (page >= pages) return undefined;
  return `${basePath === '/' ? '' : basePath.replace(/\/$/, '')}/page/${page + 1}/`;
}
