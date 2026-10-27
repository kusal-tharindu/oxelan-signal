import { describe, expect, it } from 'vitest';

import { FEED_PAGE_SIZE, nextArchiveHref, pageCount, pageSlice } from '../src/lib/pagination';

function makePosts(count: number): number[] {
  return Array.from({ length: count }, (_, index) => index);
}

describe('pageCount', () => {
  it('fits everything on one page when at or below the page size', () => {
    expect(pageCount(0)).toBe(1);
    expect(pageCount(1)).toBe(1);
    expect(pageCount(FEED_PAGE_SIZE)).toBe(1);
  });

  it('adds a page for every full or partial overflow', () => {
    expect(pageCount(FEED_PAGE_SIZE + 1)).toBe(2);
    expect(pageCount(FEED_PAGE_SIZE * 2)).toBe(2);
    expect(pageCount(FEED_PAGE_SIZE * 2 + 1)).toBe(3);
  });
});

describe('pageSlice', () => {
  it('never returns more than FEED_PAGE_SIZE items (BLOG-M12)', () => {
    const posts = makePosts(100);
    for (let page = 1; page <= pageCount(posts.length); page += 1) {
      expect(pageSlice(posts, page).length).toBeLessThanOrEqual(FEED_PAGE_SIZE);
    }
  });

  it('covers every item exactly once across pages', () => {
    const posts = makePosts(FEED_PAGE_SIZE * 2 + 7);
    const pages = pageCount(posts.length);
    const seen = new Set<number>();
    for (let page = 1; page <= pages; page += 1) {
      for (const item of pageSlice(posts, page)) {
        expect(seen.has(item)).toBe(false);
        seen.add(item);
      }
    }
    expect(seen.size).toBe(posts.length);
  });

  it('clamps out-of-range pages instead of returning empty', () => {
    const posts = makePosts(5);
    expect(pageSlice(posts, 0)).toEqual(posts);
    expect(pageSlice(posts, 99)).toEqual(posts);
  });
});

describe('nextArchiveHref', () => {
  it('is undefined on the last page', () => {
    expect(nextArchiveHref(1, 5, '/')).toBeUndefined();
    expect(nextArchiveHref(2, FEED_PAGE_SIZE + 3, '/')).toBeUndefined();
  });

  it('links to the next page from the home base path', () => {
    expect(nextArchiveHref(1, FEED_PAGE_SIZE + 1, '/')).toBe('/page/2/');
  });

  it('links to the next section page with the section base path', () => {
    expect(nextArchiveHref(1, FEED_PAGE_SIZE + 1, '/security/')).toBe('/security/page/2/');
    expect(nextArchiveHref(2, FEED_PAGE_SIZE * 2 + 1, '/security/')).toBe('/security/page/3/');
  });
});
