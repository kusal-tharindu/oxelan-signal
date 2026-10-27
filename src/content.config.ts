import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

import { generatePostId } from './lib/content-id.mjs';
import { formats, impacts } from './site.config';

const tagPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const sourceSchema = z.object({
  title: z.string().min(1),
  url: z.url(),
});

const updateSchema = z.object({
  date: z.coerce.date(),
  note: z.string().min(1),
});

const briefingSchema = z.object({
  changed: z.string().min(1),
  why: z.string().min(1),
  action: z.string().min(1),
});

/**
 * Structural validation lives here. Cross-field editorial rules (news must have
 * sources, superseded posts must link forward, guides cannot carry an impact)
 * live in scripts/validate-content.mjs and run before every build. Keeping the
 * Zod schema structural preserves precise TypeScript inference for content.
 */
const posts = defineCollection({
  loader: glob({
    base: './src/content',
    pattern: '**/*.{md,mdx}',
    generateId: ({ entry }) => generatePostId(entry),
  }),
  schema: z.object({
    title: z.string().min(8).max(120),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    format: z.enum(Object.keys(formats) as [string, ...string[]]),
    summary: z.string().min(40).max(320),
    tags: z.array(z.string().regex(tagPattern)).min(1).max(8),
    impact: z.enum(Object.keys(impacts) as [string, ...string[]]).optional(),
    action: z.enum(['none', 'review', 'patch-now']).optional(),
    affects: z.array(z.string().min(1)).optional(),
    sources: z.array(sourceSchema).default([]),
    status: z.enum(['current', 'evolving', 'superseded']).default('current'),
    supersededBy: z.string().optional(),
    featured: z.boolean().default(false),
    briefing: briefingSchema.optional(),
    updates: z.array(updateSchema).default([]),
    draft: z.boolean().default(false),
  }),
});

const radar = defineCollection({
  loader: file('./src/data/radar.yaml'),
  schema: z.object({
    id: z.string().min(1),
    name: z.string().min(1),
    ring: z.enum(['adopt', 'trial', 'assess', 'hold']),
    quadrant: z.enum(['ai', 'security', 'engineering']),
    moved: z.enum(['up', 'down', 'new', 'same']).default('same'),
    summary: z.string().min(1),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
        }),
      )
      .default([]),
    since: z.coerce.string().optional(),
  }),
});

export const collections = { posts, radar };
