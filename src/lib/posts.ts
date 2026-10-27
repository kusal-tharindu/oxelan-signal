import { getCollection, type CollectionEntry } from 'astro:content';

import { hrefFromId, sectionFromId, slugFromId } from './content-id.mjs';
import {
  displayFormat,
  formatDate,
  initials,
  isoDate,
  isoDateTime,
  metaDescription,
  readingTime,
  truncate,
} from './format';
import { ALERT_MAX_AGE_DAYS, isRecent, PATCH_MAX_AGE_DAYS } from './recency';
import { impactOrder, sectionOrder, type ImpactKey, type SectionKey } from '../site.config';

export type Post = CollectionEntry<'posts'>;

// Re-export the recency helpers so pages and components can reason about the rails.
export { ALERT_MAX_AGE_DAYS, isRecent, PATCH_MAX_AGE_DAYS };

const isProduction = import.meta.env.PROD;

export function isPublished(post: Post, now = new Date()): boolean {
  if (isProduction) {
    if (post.data.draft) return false;
    if (post.data.date > now) return false;
  }
  return true;
}

export async function getAllPosts(): Promise<Post[]> {
  const posts = await getCollection('posts');
  return posts.filter((post) => isPublished(post)).sort(sortByDateDesc);
}

export async function getPostsBySection(section: SectionKey): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => sectionOf(post) === section);
}

export async function getRegularPosts(): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.data.format !== 'digest');
}

export function sortByDateDesc(a: Post, b: Post): number {
  return b.data.date.getTime() - a.data.date.getTime();
}

export function sortByUpdateDesc(a: Post, b: Post): number {
  const aDate = a.data.updated ?? a.data.date;
  const bDate = b.data.updated ?? b.data.date;
  return bDate.getTime() - aDate.getTime();
}

export function sectionOf(post: Post): SectionKey {
  return sectionFromId(post.id) as SectionKey;
}

export function slugOf(post: Post): string {
  return slugFromId(post.id);
}

export function hrefOf(post: Post): string {
  return hrefFromId(post.id);
}

export function isDigest(post: Post): boolean {
  return post.data.format === 'digest';
}

export function getLeadPost(posts: Post[]): Post | undefined {
  const regular = posts.filter((post) => !isDigest(post));
  return (
    regular.find((post) => post.data.featured) ??
    regular.find((post) => post.data.format === 'analysis') ??
    regular[0]
  );
}

export function getAlerts(posts: Post[], limit = 3, now = new Date()): Post[] {
  return posts
    .filter(
      (post) =>
        !isDigest(post) &&
        post.data.status !== 'superseded' &&
        (post.data.impact === 'critical' || post.data.impact === 'high') &&
        isRecent(post, ALERT_MAX_AGE_DAYS, now),
    )
    .sort((a, b) => {
      const impactDelta = impactRank(a) - impactRank(b);
      return impactDelta !== 0 ? impactDelta : sortByDateDesc(a, b);
    })
    .slice(0, limit);
}

export function getPatchNow(posts: Post[], limit = 5, now = new Date()): Post[] {
  return posts
    .filter(
      (post) =>
        post.data.action === 'patch-now' &&
        post.data.status !== 'superseded' &&
        isRecent(post, PATCH_MAX_AGE_DAYS, now),
    )
    .sort(sortByDateDesc)
    .slice(0, limit);
}

export function getGuides(posts: Post[], limit = 3): Post[] {
  return posts
    .filter((post) => post.data.format === 'guide')
    .sort(sortByUpdateDesc)
    .slice(0, limit);
}

export function getLatestDigest(posts: Post[]): Post | undefined {
  return posts.filter(isDigest).sort(sortByDateDesc)[0];
}

export function trendingTags(posts: Post[], limit = 8): { tag: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const post of posts) {
    if (isDigest(post)) continue;
    for (const tag of post.data.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag))
    .slice(0, limit);
}

export function relatedPosts(post: Post, posts: Post[], limit = 3): Post[] {
  const tags = new Set(post.data.tags);
  const section = sectionOf(post);

  return posts
    .filter((candidate) => candidate.id !== post.id && !isDigest(candidate))
    .map((candidate) => {
      let score = 0;
      for (const tag of candidate.data.tags) if (tags.has(tag)) score += 3;
      if (sectionOf(candidate) === section) score += 1;
      if (candidate.data.format === post.data.format) score += 1;
      return { candidate, score };
    })
    .filter(({ score }) => score > 0)
    .sort(
      (a, b) =>
        b.score - a.score || b.candidate.data.date.getTime() - a.candidate.data.date.getTime(),
    )
    .slice(0, limit)
    .map(({ candidate }) => candidate);
}

export function adjacentPosts(
  post: Post,
  posts: Post[],
): { newer?: Post | undefined; older?: Post | undefined } {
  const index = posts.findIndex((candidate) => candidate.id === post.id);
  // posts are newest-first; the next item is older, the previous item is newer.
  const older = posts
    .slice(index + 1)
    .find((candidate) => sectionOf(candidate) === sectionOf(post));
  const newer = posts
    .slice(0, Math.max(index, 0))
    .reverse()
    .find((candidate) => sectionOf(candidate) === sectionOf(post));
  return { newer, older };
}

export function impactRank(post: Post): number {
  if (!post.data.impact) return impactOrder.length;
  const index = impactOrder.indexOf(post.data.impact as ImpactKey);
  return index === -1 ? impactOrder.length : index;
}

export function allTags(posts: Post[]): { tag: string; count: number }[] {
  return trendingTags(posts, Number.MAX_SAFE_INTEGER);
}

export function postsForTag(posts: Post[], tag: string): Post[] {
  return posts.filter((post) => post.data.tags.includes(tag));
}

export function sectionPath(section: SectionKey): string {
  return `/${section}/`;
}

export function tagPath(tag: string): string {
  return `/tags/${tag}/`;
}

export function sectionRank(section: SectionKey): number {
  const index = sectionOrder.indexOf(section);
  return index === -1 ? sectionOrder.length : index;
}

export {
  displayFormat,
  formatDate,
  initials,
  isoDate,
  isoDateTime,
  metaDescription,
  readingTime,
  truncate,
};
