import { readFile } from 'node:fs/promises';
import path from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

import { formatDate, type Post } from './posts';
import type { OgCacheInput } from './og-key';
import { sections } from '../site.config';

const FONT_DIR = path.join(process.cwd(), 'node_modules');

const fontsPromise = Promise.all([
  readFile(
    path.join(
      FONT_DIR,
      '@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2',
    ),
  ),
  readFile(path.join(FONT_DIR, '@fontsource/inter/files/inter-latin-400-normal.woff2')),
  readFile(path.join(FONT_DIR, '@fontsource/inter/files/inter-latin-600-normal.woff2')),
  readFile(
    path.join(FONT_DIR, '@fontsource/space-grotesk/files/space-grotesk-latin-600-normal.woff2'),
  ),
  readFile(
    path.join(FONT_DIR, '@fontsource/space-grotesk/files/space-grotesk-latin-700-normal.woff2'),
  ),
]).then(([serif, interRegular, interSemiBold, groteskSemiBold, groteskBold]) => [
  { name: 'Instrument Serif', data: serif, weight: 400 as const, style: 'normal' as const },
  { name: 'Inter', data: interRegular, weight: 400 as const, style: 'normal' as const },
  { name: 'Inter', data: interSemiBold, weight: 600 as const, style: 'normal' as const },
  { name: 'Space Grotesk', data: groteskSemiBold, weight: 600 as const, style: 'normal' as const },
  { name: 'Space Grotesk', data: groteskBold, weight: 700 as const, style: 'normal' as const },
]);

const SECTION_COLORS = {
  ai: '#A99BFF',
  security: '#FF7A6E',
  engineering: '#4ADBC6',
  digest: '#E0A619',
} as const;

type OgInput = OgCacheInput;

function textStyle(extra: Record<string, string | number>) {
  return { display: 'flex', ...extra };
}

function buildMarkup({ title, sectionLabel, sectionColor, format, date, domain }: OgInput) {
  const titleSize = title.length > 92 ? 50 : title.length > 64 ? 57 : 66;

  return {
    type: 'div',
    props: {
      style: {
        display: 'flex',
        flexDirection: 'column',
        width: '1200px',
        height: '630px',
        boxSizing: 'border-box',
        padding: '58px 68px 50px',
        backgroundColor: '#0A0E17',
        backgroundImage: 'linear-gradient(132deg, #101827 0%, #0A0E17 54%, #0A0E17 100%)',
        color: '#E8EDF6',
        fontFamily: 'Inter',
        position: 'relative',
        overflow: 'hidden',
      },
      children: [
        // Decorative geometry
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              width: '420px',
              height: '420px',
              border: '1px solid rgba(224,166,25,0.14)',
              transform: 'rotate(45deg)',
              top: '-120px',
              right: '-40px',
              display: 'flex',
            },
          },
        },
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              width: '300px',
              height: '300px',
              border: '1px solid rgba(224,166,25,0.08)',
              transform: 'rotate(45deg)',
              top: '-40px',
              right: '-100px',
              display: 'flex',
            },
          },
        },
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              left: '0',
              top: '0',
              width: '7px',
              height: '630px',
              backgroundColor: sectionColor,
              opacity: 0.85,
              display: 'flex',
            },
          },
        },
        // Top row
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              zIndex: 2,
            },
            children: [
              {
                type: 'div',
                props: {
                  style: { display: 'flex', alignItems: 'center', gap: '16px' },
                  children: [
                    {
                      type: 'div',
                      props: {
                        style: {
                          width: '25px',
                          height: '25px',
                          border: '2px solid #E0A619',
                          transform: 'rotate(45deg)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        },
                        children: [
                          {
                            type: 'div',
                            props: {
                              style: {
                                width: '7px',
                                height: '7px',
                                backgroundColor: '#E0A619',
                                display: 'flex',
                              },
                            },
                          },
                        ],
                      },
                    },
                    {
                      type: 'div',
                      props: {
                        style: {
                          display: 'flex',
                          fontSize: '25px',
                          fontWeight: 600,
                          letterSpacing: '-0.02em',
                        },
                        children: [
                          {
                            type: 'span',
                            props: {
                              style: { color: '#F5F7FB', marginRight: '8px' },
                              children: 'Oxelan',
                            },
                          },
                          {
                            type: 'span',
                            props: { style: { color: '#E0A619' }, children: 'Signal' },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                type: 'div',
                props: {
                  style: textStyle({
                    fontFamily: 'Space Grotesk',
                    fontWeight: 600,
                    fontSize: '18px',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: sectionColor,
                  }),
                  children: sectionLabel,
                },
              },
            ],
          },
        },
        // Title block
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              flexGrow: 1,
              gap: '22px',
              paddingTop: '30px',
              zIndex: 2,
            },
            children: [
              {
                type: 'div',
                props: {
                  style: textStyle({
                    fontFamily: 'Space Grotesk',
                    fontWeight: 600,
                    fontSize: '15px',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#8C99AE',
                  }),
                  children: 'What changed · Why it matters · What to do',
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    // Matches the site's display type: bold Space Grotesk, tight tracking.
                    fontFamily: 'Space Grotesk',
                    fontWeight: 700,
                    fontSize: `${Math.round(titleSize * 0.88)}px`,
                    lineHeight: 1.08,
                    letterSpacing: '-0.04em',
                    color: '#F5F7FB',
                    maxWidth: '1010px',
                    maxHeight: '248px',
                    overflow: 'hidden',
                  },
                  children: title,
                },
              },
            ],
          },
        },
        // Bottom row
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: '1px solid #263041',
              paddingTop: '22px',
              zIndex: 2,
            },
            children: [
              {
                type: 'div',
                props: {
                  style: { display: 'flex', alignItems: 'center', gap: '18px' },
                  children: [
                    {
                      type: 'div',
                      props: {
                        style: textStyle({
                          fontFamily: 'Space Grotesk',
                          fontWeight: 600,
                          fontSize: '16px',
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          color: sectionColor,
                        }),
                        children: format,
                      },
                    },
                    {
                      type: 'div',
                      props: {
                        style: {
                          width: '1px',
                          height: '16px',
                          backgroundColor: '#354258',
                          display: 'flex',
                        },
                      },
                    },
                    {
                      type: 'div',
                      props: {
                        style: textStyle({ fontSize: '17px', color: '#9AA7BD' }),
                        children: formatDate(date),
                      },
                    },
                  ],
                },
              },
              {
                type: 'div',
                props: {
                  style: textStyle({
                    fontFamily: 'Space Grotesk',
                    fontWeight: 600,
                    fontSize: '16px',
                    letterSpacing: '0.04em',
                    color: '#8C99AE',
                  }),
                  children: domain,
                },
              },
            ],
          },
        },
      ],
    },
  };
}

export async function renderOgImage(input: OgInput): Promise<Buffer> {
  const fonts = await fontsPromise;
  const svg = await satori(buildMarkup(input) as Parameters<typeof satori>[0], {
    width: 1200,
    height: 630,
    fonts: fonts as Parameters<typeof satori>[1]['fonts'],
  });

  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1200 },
    background: '#0A0E17',
  });
  return resvg.render().asPng();
}

export function ogInputForPost(post: Post): OgInput {
  const section = post.id.split('/')[0] as keyof typeof sections;
  return {
    title: post.data.title,
    sectionLabel: sections[section].label,
    sectionColor: SECTION_COLORS[section],
    format: post.data.format.toUpperCase(),
    date: post.data.date,
    domain: 'blog.oxelan.com',
  };
}
