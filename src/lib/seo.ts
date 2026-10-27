/**
 * Shared SEO policy constants and helpers.
 *
 * Tag pages with fewer than MIN_INDEXED_TAG_POSTS posts are thin: they duplicate the
 * article listing and dilute crawl budget. They are kept for navigation but kept out
 * of the search index (noindex) and the sitemap. See review BLOG-M7.
 */

/** Minimum posts before a tag page is included in the index and sitemap. */
export const MIN_INDEXED_TAG_POSTS = 3;

/** Whether a tag has enough posts to be worth indexing. */
export function isIndexableTag(count: number): boolean {
  return count >= MIN_INDEXED_TAG_POSTS;
}
