import { describe, expect, it } from 'vitest';

import { countProseWords, validatePostRules, WORD_LIMITS } from '../scripts/lib/rules.mjs';

interface PostOverrides {
  section?: string;
  slug?: string;
  id?: string;
  body?: string;
  data?: Record<string, unknown>;
}

/** A minimal valid post; override fields per test. */
function makePost(overrides: PostOverrides = {}) {
  const section = overrides.section ?? 'security';
  const slug = overrides.slug ?? 'example-post';
  return {
    file: `/repo/src/content/${section}/2026/10/${slug}.md`,
    relative: `${section}/2026/10/${slug}.md`,
    id: overrides.id ?? `${section}/${slug}`,
    section,
    slug,
    body: overrides.body ?? 'word '.repeat(200),
    data: {
      title: 'A valid post title for testing',
      date: new Date('2026-10-20'),
      format: 'news',
      summary: 'A summary that is comfortably longer than forty characters for the test.',
      tags: ['security'],
      sources: [{ title: 'Primary source', url: 'https://example.com/a' }],
      updates: [],
      ...overrides.data,
    },
  };
}

const NOW = new Date('2026-10-27T12:00:00Z');

function run(post: ReturnType<typeof makePost>, options: Record<string, unknown> = {}) {
  return validatePostRules(post, { now: NOW, ...options });
}

describe('countProseWords', () => {
  it('ignores code fences', () => {
    const body = 'word '.repeat(50) + '\n```bash\n' + 'fence '.repeat(300) + '\n```\n';
    expect(countProseWords(body)).toBe(50);
  });

  it('ignores table rows', () => {
    const body = 'word '.repeat(40) + '\n| a | b |\n|---|---|\n| c | d |\n';
    expect(countProseWords(body)).toBe(40);
  });

  it('strips markdown syntax and links but keeps link text', () => {
    expect(countProseWords('**bold** and [link text](https://x.com) here')).toBe(5);
  });
});

describe('validatePostRules — structure', () => {
  it('accepts a fully valid post', () => {
    const { errors } = run(makePost());
    expect(errors).toEqual([]);
  });

  it('fails on a non-kebab slug', () => {
    const { errors } = run(makePost({ slug: 'Bad_Slug' }));
    expect(errors.some((e) => e.includes('kebab-case'))).toBe(true);
  });

  it('fails on an unknown section', () => {
    const { errors } = run(makePost({ section: 'crypto', id: 'crypto/x', slug: 'x' }));
    expect(errors.some((e) => e.includes('unknown section'))).toBe(true);
  });

  it('fails when summary is too short', () => {
    const { errors } = run(makePost({ data: { summary: 'too short' } }));
    expect(errors.some((e) => e.includes('shorter than 40'))).toBe(true);
  });

  it('fails on duplicate ids when an id map is shared', () => {
    const ids = new Map();
    run(makePost(), { ids });
    const { errors } = run(makePost(), { ids });
    expect(errors.some((e) => e.includes('duplicate content id'))).toBe(true);
  });

  it('fails on duplicate slugs across different sections', () => {
    const slugs = new Map();
    run(makePost(), { slugs });
    const other = makePost({ section: 'ai', id: 'ai/example-post' });
    const { errors } = run(other, { slugs });
    expect(errors.some((e) => e.includes('duplicate slug'))).toBe(true);
  });
});

describe('validatePostRules — format rules', () => {
  it('requires sources on news posts', () => {
    const { errors } = run(makePost({ data: { format: 'news', sources: [] } }));
    expect(errors.some((e) => e.includes('must cite at least one source'))).toBe(true);
  });

  it('allows analysis without sources', () => {
    const { errors } = run(
      makePost({
        data: {
          format: 'analysis',
          sources: [],
          briefing: { changed: 'c', why: 'w', action: 'a' },
        },
      }),
    );
    expect(errors).toEqual([]);
  });

  it('rejects a non-http source url', () => {
    const { errors } = run(
      makePost({ data: { sources: [{ title: 'x', url: 'javascript:alert(1)' }] } }),
    );
    expect(errors.some((e) => e.includes('absolute http(s) URL'))).toBe(true);
  });

  it('rejects an impact on a guide', () => {
    const { errors } = run(makePost({ data: { format: 'guide', impact: 'high' } }));
    expect(errors.some((e) => e.includes('guides cannot carry an impact'))).toBe(true);
  });

  it('rejects format digest outside the digest section', () => {
    const { errors } = run(makePost({ data: { format: 'digest' } }));
    expect(errors.some((e) => e.includes('only allowed in the digest section'))).toBe(true);
  });

  it('rejects a section field in frontmatter', () => {
    const { errors } = run(makePost({ data: { section: 'security' } }));
    expect(errors.some((e) => e.includes('do not set section'))).toBe(true);
  });
});

describe('validatePostRules — superseded', () => {
  it('requires supersededBy when superseded', () => {
    const { errors } = run(makePost({ data: { status: 'superseded' } }));
    expect(errors.some((e) => e.includes('supersededBy is missing'))).toBe(true);
  });

  it('requires an internal path with slashes for supersededBy', () => {
    const { errors } = run(
      makePost({ data: { status: 'superseded', supersededBy: 'security/x' } }),
    );
    expect(errors.some((e) => e.includes('internal path'))).toBe(true);
  });

  it('rejects supersededBy pointing at itself', () => {
    const post = makePost({
      data: { status: 'superseded', supersededBy: '/security/example-post/' },
    });
    const { errors } = run(post);
    expect(errors.some((e) => e.includes('cannot point at the post itself'))).toBe(true);
  });
});

describe('validatePostRules — word counts (BLOG-M11)', () => {
  it('fails news outside the 150-400 band', () => {
    const tooShort = run(makePost({ data: { format: 'news' }, body: 'word '.repeat(100) }));
    expect(tooShort.errors.some((e) => e.includes('news is 100 words'))).toBe(true);

    const tooLong = run(makePost({ data: { format: 'news' }, body: 'word '.repeat(500) }));
    expect(tooLong.errors.some((e) => e.includes('maximum 400'))).toBe(true);
  });

  it('accepts news inside the band', () => {
    const { errors } = run(makePost({ data: { format: 'news' }, body: 'word '.repeat(300) }));
    expect(errors).toEqual([]);
  });

  it('warns (not fails) on analysis under the floor', () => {
    const { errors, warnings } = run(
      makePost({
        data: { format: 'analysis', briefing: { changed: 'c', why: 'w', action: 'a' } },
        body: 'word '.repeat(500),
      }),
    );
    expect(errors).toEqual([]);
    expect(warnings.some((w) => w.includes('analysis is 500 words'))).toBe(true);
  });

  it('applies no word limit to guides or digests', () => {
    // Guides and digests are deliberately absent from WORD_LIMITS.
    expect('guide' in WORD_LIMITS).toBe(false);
    expect('digest' in WORD_LIMITS).toBe(false);
    const { errors, warnings } = run(
      makePost({ data: { format: 'guide' }, body: 'word '.repeat(50) }),
    );
    expect(errors).toEqual([]);
    expect(warnings.filter((w) => w.includes('words'))).toEqual([]);
  });
});

describe('validatePostRules — dates and scheduling', () => {
  it('fails when updated predates date', () => {
    const { errors } = run(
      makePost({ data: { date: new Date('2026-10-10'), updated: new Date('2026-10-01') } }),
    );
    expect(errors.some((e) => e.includes('updated cannot be earlier'))).toBe(true);
  });

  it('warns on a future-dated post', () => {
    const { warnings } = run(makePost({ data: { date: new Date('2026-11-05') } }));
    expect(warnings.some((w) => w.includes('scheduled for'))).toBe(true);
  });

  it('warns on draft: true', () => {
    const { warnings } = run(makePost({ data: { draft: true } }));
    expect(warnings.some((w) => w.includes('draft: true'))).toBe(true);
  });
});

describe('validatePostRules — briefing', () => {
  it('requires all three briefing keys', () => {
    const { errors } = run(
      makePost({ data: { format: 'analysis', briefing: { changed: 'c', why: '', action: 'a' } } }),
    );
    expect(errors.some((e) => e.includes('briefing.why is required'))).toBe(true);
  });

  it('warns when news or analysis has no briefing', () => {
    const { warnings } = run(makePost({ data: { format: 'news', briefing: undefined } }));
    expect(warnings.some((w) => w.includes('briefing box'))).toBe(true);
  });
});
