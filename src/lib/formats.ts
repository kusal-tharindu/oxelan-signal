/**
 * Editorial formats and their canonical archive routes.
 *
 * Formats are a fixed editorial vocabulary (unlike tags, which are free-form), so
 * they can safely drive navigation, sitemaps and archive pages.
 */

// Digests already have their own section (/digest/), so they are not a browse archive.
export const formatOrder = ['news', 'analysis', 'guide'] as const;

export type BrowseFormatKey = (typeof formatOrder)[number];
export type FormatKey = BrowseFormatKey | 'digest';

export interface Format {
  key: FormatKey;
  label: string;
  path: string;
  description: string;
  cssVar: string;
}

export const formats: Record<FormatKey, Format> = {
  news: {
    key: 'news',
    label: 'News',
    path: '/format/news/',
    description:
      'What changed, quickly: releases, CVEs and incidents, the affected versions, and the action to take.',
    cssVar: '--brand',
  },
  analysis: {
    key: 'analysis',
    label: 'Analysis',
    path: '/format/analysis/',
    description:
      'The mechanism and the production consequence. Why a change matters, who owns it, and what to do next.',
    cssVar: '--ai',
  },
  guide: {
    key: 'guide',
    label: 'Guides',
    path: '/format/guide/',
    description:
      'Procedures and checklists that stay current, with a review date and an update path.',
    cssVar: '--eng',
  },
  digest: {
    key: 'digest',
    label: 'Digests',
    path: '/format/digest/',
    description: 'The week grouped by what needs attention first, plus what to watch next.',
    cssVar: '--brand',
  },
};

/** Formats offered in browse chips (digests already have their own section). */
export const browseFormats = formatOrder;
