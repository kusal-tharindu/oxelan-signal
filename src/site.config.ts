/**
 * Single source of truth for site identity, navigation and feature flags.
 * Change values here, not in components.
 */

export const site = {
  name: 'Oxelan Signal',
  shortName: 'Signal',
  domain: 'blog.oxelan.com',
  url: 'https://blog.oxelan.com',
  tagline: 'What changed in AI, security and engineering. Why it matters. What to do.',
  description:
    'Production-focused news and analysis for people who ship AI and secure it. Every post says what changed, why it matters, and what to do next.',
  author: {
    name: 'Kusal Tharindu',
    url: 'https://oxelan.com',
    email: 'hello@oxelan.com',
  },
  publisher: {
    name: 'Oxelan',
    url: 'https://oxelan.com',
    logo: '/favicon.svg',
  },
  locale: 'en_US',
  language: 'en',
  socials: {
    github: 'https://github.com/kusal-tharindu',
    linkedin: 'https://www.linkedin.com/in/kusal-tharindu',
    x: 'https://x.com/kusal_tharindu',
    oxelan: 'https://oxelan.com',
  },
  nav: [
    { label: 'Latest', href: '/' },
    { label: 'AI', href: '/ai/' },
    { label: 'Security', href: '/security/' },
    { label: 'Engineering', href: '/engineering/' },
    { label: 'Radar', href: '/radar/' },
    { label: 'About', href: '/about/' },
  ],
  features: {
    comments: false,
    analytics: false,
    newsletter: false,
  },
  analytics: {
    /** Cloudflare Web Analytics token. Leave empty to disable the beacon. */
    cloudflareToken: '',
  },
  comments: {
    /** Giscus (GitHub Discussions). Fill these in and set features.comments to true. */
    repo: '',
    repoId: '',
    category: '',
    categoryId: '',
  },
} as const;

export type SectionKey = 'ai' | 'security' | 'engineering' | 'digest';

export interface Section {
  key: SectionKey;
  label: string;
  short: string;
  path: string;
  description: string;
  color: string;
  cssVar: string;
}

export const sections: Record<SectionKey, Section> = {
  ai: {
    key: 'ai',
    label: 'AI',
    short: 'AI',
    path: '/ai/',
    description:
      'New models and releases, agent frameworks, LLMOps, evaluation, and AI in production. What actually changes when you deploy it.',
    color: 'violet',
    cssVar: '--color-ai',
  },
  security: {
    key: 'security',
    label: 'Security',
    short: 'SEC',
    path: '/security/',
    description:
      'Attacks and incidents, CVEs, AI security, cloud and Kubernetes security, and software supply chain. Facts first, then the fix.',
    color: 'coral',
    cssVar: '--color-sec',
  },
  engineering: {
    key: 'engineering',
    label: 'Engineering',
    short: 'ENG',
    path: '/engineering/',
    description:
      'Architecture, platform and DevOps practice, reliability, learning paths, and the trade-offs behind systems that stay up.',
    color: 'teal',
    cssVar: '--color-eng',
  },
  digest: {
    key: 'digest',
    label: 'Digest',
    short: 'DIG',
    path: '/digest/',
    description: 'The week in AI and security, grouped by what needs attention first.',
    color: 'amber',
    cssVar: '--color-brand',
  },
};

export const sectionOrder: SectionKey[] = ['ai', 'security', 'engineering', 'digest'];

export type FormatKey = 'news' | 'analysis' | 'guide' | 'digest';

export const formats: Record<FormatKey, { label: string; description: string }> = {
  news: {
    label: 'News',
    description: 'What changed, with sources. 150–400 words.',
  },
  analysis: {
    label: 'Analysis',
    description: 'How something works and what it means in production.',
  },
  guide: {
    label: 'Guide',
    description: 'A checklist or procedure, kept up to date.',
  },
  digest: {
    label: 'Digest',
    description: 'A weekly round-up assembled from that week’s posts.',
  },
};

export type ImpactKey = 'critical' | 'high' | 'medium' | 'low' | 'info';

export const impacts: Record<ImpactKey, { label: string; description: string }> = {
  critical: { label: 'Critical', description: 'Act now. Active exploitation or total loss.' },
  high: { label: 'High', description: 'Patch or mitigate this week.' },
  medium: { label: 'Medium', description: 'Plan the work; exploitability is limited.' },
  low: { label: 'Low', description: 'Worth knowing. No urgent action.' },
  info: { label: 'Info', description: 'Context only.' },
};

export const impactOrder: ImpactKey[] = ['critical', 'high', 'medium', 'low', 'info'];

export const actions = {
  'patch-now': 'Patch now',
  review: 'Review',
  none: 'No action',
} as const;

export const imagePolicy = {
  maxBytes: 200 * 1024,
  allowedExtensions: ['.png', '.jpg', '.jpeg', '.webp', '.avif', '.gif', '.svg'],
} as const;
