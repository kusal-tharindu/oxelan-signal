/**
 * Shared content-path rules.
 *
 * The folder decides the section. Date folders are organisational only and are
 * removed from the public id. Every id is `section/slug`, which makes routes,
 * feeds and share images deterministic.
 *
 * Examples:
 *   ai/2026/10/new-model-release.md          -> ai/new-model-release
 *   security/2026/10/npm-attack/index.md     -> security/npm-attack
 *   digest/2026-w43.md                       -> digest/2026-w43
 */

const DATE_FOLDER = /^\d{4}$/;
const MONTH_FOLDER = /^\d{2}$/;

/**
 * @param {string} entryPath Path relative to the content base, e.g. `ai/2026/10/post.md`.
 * @returns {string} Stable content id in the form `section/slug`.
 */
export function generatePostId(entryPath) {
  const normalised = entryPath.replaceAll('\\', '/').replace(/\.(md|mdx)$/i, '');
  const parts = normalised.split('/').filter(Boolean);

  if (parts.length < 2) {
    throw new Error(`Content entry "${entryPath}" must live inside a section folder.`);
  }

  const section = parts.shift();
  const rest = parts.filter((part) => !DATE_FOLDER.test(part) && !MONTH_FOLDER.test(part));

  if (rest.at(-1) === 'index') rest.pop();

  if (!section || rest.length === 0) {
    throw new Error(`Cannot derive a post id from "${entryPath}".`);
  }

  return `${section}/${rest.join('/')}`;
}

/** @param {string} id */
export function sectionFromId(id) {
  return id.split('/')[0];
}

/** @param {string} id */
export function slugFromId(id) {
  return id.split('/').slice(1).join('/');
}

/** @param {string} id */
export function hrefFromId(id) {
  return `/${id}/`;
}

/** @param {string} id */
export function ogImagePath(id) {
  return `/og/${id}.png`;
}
