/**
 * Pure editorial rules shared by the content validator and its tests (BLOG-T2).
 *
 * Only fs-free, cross-field rules live here so they are trivially unit-testable.
 * Filesystem-dependent checks (image existence, content-root containment) stay in
 * scripts/validate-content.mjs, which owns the file handles.
 */
import { sectionOrder } from '../../src/site.config.ts';

export const SECTIONS = new Set(sectionOrder);
export const KEBAB = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
export const TAG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
export const ALLOWED_FORMATS = new Set(['news', 'analysis', 'guide', 'digest']);
export const ALLOWED_IMPACTS = new Set(['critical', 'high', 'medium', 'low', 'info']);
export const ALLOWED_ACTIONS = new Set(['none', 'review', 'patch-now']);
export const ALLOWED_STATUS = new Set(['current', 'evolving', 'superseded']);

/**
 * Word-count bands per format, counting prose only (BLOG-M11). `news` is a hard
 * band (fail outside it); `analysis` has a floor that warns so a short analysis is
 * flagged without blocking the build. Guides and digests are unbounded — their
 * shape is a checklist and a round-up, not a target length.
 */
export const WORD_LIMITS = {
  news: { min: 150, max: 400, severity: 'error' },
  analysis: { min: 1000, max: undefined, severity: 'warning' },
};

/** Strip code fences, inline code, HTML, images and table rows, then count words. */
export function countProseWords(body) {
  if (!body) return 0;
  const prose = String(body)
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^\s*\|.*\|\s*$/gm, ' ')
    .replace(/^[#>\-*+\s]+/gm, ' ')
    .replace(/[*_~|]/g, ' ');
  return prose.trim().split(/\s+/).filter(Boolean).length;
}

export function isExternal(url) {
  return /^https?:\/\//i.test(url);
}

export function formatIso(date) {
  return date.toISOString().slice(0, 10);
}

function isInvalidDate(value) {
  return !(value instanceof Date) || Number.isNaN(value.getTime());
}

/**
 * Validate a post against every editorial rule that needs neither the filesystem
 * nor knowledge of other posts.
 *
 * @param {object} post  A post as produced by scripts/lib/content.mjs readPosts().
 * @param {object} [options]
 * @param {Date}   [options.now]  Reference time for scheduled/future checks.
 * @param {Map}    [options.ids]  Optional id map for duplicate detection.
 * @param {Map}    [options.slugs] Optional slug map for duplicate detection.
 * @returns {{ errors: string[], warnings: string[] }} Messages prefixed with the post id.
 */
export function validatePostRules(post, options = {}) {
  const { now = new Date(), ids, slugs } = options;
  const errors = [];
  const warnings = [];
  const fail = (message) => errors.push(`${post.id}: ${message}`);
  const warn = (message) => warnings.push(`${post.id}: ${message}`);
  const { data } = post;

  if (!SECTIONS.has(post.section)) {
    fail(`unknown section "${post.section}" (expected ${[...SECTIONS].join(', ')})`);
  }

  if (post.slug.includes('/')) {
    fail('slug contains a slash; nested folders must end in index.md');
  }
  if (!KEBAB.test(post.slug)) fail(`slug "${post.slug}" must be lowercase kebab-case`);
  if (post.slug.length > 60) fail(`slug is ${post.slug.length} characters; keep it under 60`);

  if (ids) {
    if (ids.has(post.id)) fail(`duplicate content id (also ${ids.get(post.id)})`);
    else ids.set(post.id, post.relative ?? post.id);
  }
  if (slugs) {
    if (slugs.has(post.slug)) fail(`duplicate slug site-wide (also ${slugs.get(post.slug)})`);
    else slugs.set(post.slug, post.relative ?? post.id);
  }

  if (!data.title || typeof data.title !== 'string') fail('title is required');
  if (!data.summary || typeof data.summary !== 'string') fail('summary is required');
  if (typeof data.summary === 'string') {
    if (data.summary.length < 40) fail('summary is shorter than 40 characters');
    if (data.summary.length > 320) fail('summary is longer than 320 characters');
    if (!data.description && data.summary.length > 160) {
      warn('summary is over 160 chars; add a `description` (<=160) for the meta tag');
    }
  }

  if (isInvalidDate(data.date)) fail('date is required and must be a valid date (YYYY-MM-DD)');
  if (data.updated != null && isInvalidDate(data.updated)) {
    fail('updated must be a valid date (YYYY-MM-DD)');
  }
  if (data.date instanceof Date && data.updated instanceof Date && data.updated < data.date) {
    fail('updated cannot be earlier than date');
  }

  if (!ALLOWED_FORMATS.has(data.format)) {
    fail(`format must be one of ${[...ALLOWED_FORMATS].join(', ')}`);
  }
  if (data.format === 'digest' && post.section !== 'digest') {
    fail('format "digest" is only allowed in the digest section');
  }
  if (post.section === 'digest' && data.format !== 'digest') {
    fail('posts in the digest section must use format "digest"');
  }

  for (const tag of data.tags) {
    if (!TAG.test(tag)) fail(`tag "${tag}" must be lowercase kebab-case`);
  }
  if (new Set(data.tags).size !== data.tags.length) fail('tags contain duplicates');

  if (data.impact != null && !ALLOWED_IMPACTS.has(data.impact)) {
    fail(`impact must be one of ${[...ALLOWED_IMPACTS].join(', ')}`);
  }
  if (data.impact && data.format === 'guide') {
    fail('guides cannot carry an impact; use status/updated instead');
  }
  if (data.action != null && !ALLOWED_ACTIONS.has(data.action)) {
    fail(`action must be one of ${[...ALLOWED_ACTIONS].join(', ')}`);
  }
  if (data.status != null && !ALLOWED_STATUS.has(data.status)) {
    fail(`status must be one of ${[...ALLOWED_STATUS].join(', ')}`);
  }

  if (data.format === 'news' && (!data.sources || data.sources.length === 0)) {
    fail('news posts must cite at least one source');
  }
  for (const [index, source] of (data.sources ?? []).entries()) {
    if (!source || typeof source !== 'object') {
      fail(`sources[${index}] must be an object with title and url`);
      continue;
    }
    if (!source.title) fail(`sources[${index}].title is required`);
    if (!isExternal(source.url)) fail(`sources[${index}].url must be an absolute http(s) URL`);
  }

  if (data.status === 'superseded' && !data.supersededBy) {
    fail('status is "superseded" but supersededBy is missing');
  }
  if (data.supersededBy) {
    if (!data.supersededBy.startsWith('/') || !data.supersededBy.endsWith('/')) {
      fail('supersededBy must be an internal path such as /security/new-post/');
    }
    if (data.supersededBy.replace(/^\//, '').replace(/\/$/, '') === post.id) {
      fail('supersededBy cannot point at the post itself');
    }
  }

  if (data.briefing) {
    if (data.format === 'digest') fail('digests do not use a briefing box');
    for (const key of ['changed', 'why', 'action']) {
      if (!data.briefing[key]) fail(`briefing.${key} is required`);
    }
  } else if (data.format === 'news' || data.format === 'analysis') {
    warn('news and analysis posts should include a briefing box');
  }
  if (data.format === 'guide' && !data.updated) {
    warn('guide has no updated date; living guides should show a review date');
  }

  if ('section' in data) fail('do not set section in frontmatter; the folder decides it');
  if ('cover' in data) fail('cover images are not used; cards are text-only');

  for (const update of data.updates ?? []) {
    if (isInvalidDate(update.date)) fail('updates[].date must be a valid date');
    if (!update.note) fail('updates[].note is required');
    if (update.date instanceof Date && data.date instanceof Date && update.date < data.date) {
      fail('updates[] cannot predate the post');
    }
  }

  if (data.draft === true) warn('draft: true — excluded from production builds');
  if (data.date instanceof Date && data.date > now) {
    warn(`scheduled for ${formatIso(data.date)} — excluded until the daily rebuild`);
  }

  // Format word counts, prose only (BLOG-M11).
  const limits = WORD_LIMITS[data.format];
  if (limits) {
    const words = countProseWords(post.body);
    if (limits.min != null && words < limits.min) {
      const message = `${data.format} is ${words} words (minimum ${limits.min})`;
      if (limits.severity === 'error') fail(message);
      else warn(message);
    }
    if (limits.max != null && words > limits.max) {
      fail(`${data.format} is ${words} words (maximum ${limits.max})`);
    }
  }

  return { errors, warnings };
}
