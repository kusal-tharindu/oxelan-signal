/**
 * Stable cache key for a rendered Open Graph image.
 *
 * Kept free of Satori/Resvg imports so it can be unit-tested without loading fonts
 * or native bindings. Bump OG_RENDER_VERSION when the card design changes, which
 * invalidates every cached image without touching content.
 */

import { createHash } from 'node:crypto';

export const OG_RENDER_VERSION = '1';

export interface OgCacheInput {
  title: string;
  sectionLabel: string;
  sectionColor: string;
  format: string;
  date: Date;
  domain: string;
}

/** Deterministic, filesystem-safe key for one OG card. */
export function ogCacheKey(input: OgCacheInput): string {
  const parts = [
    OG_RENDER_VERSION,
    input.title,
    input.sectionLabel,
    input.sectionColor,
    input.format,
    input.date.toISOString(),
    input.domain,
  ];
  return createHash('sha256').update(parts.join('\u0001')).digest('hex').slice(0, 24);
}
