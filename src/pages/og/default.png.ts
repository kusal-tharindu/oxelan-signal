import type { APIRoute } from 'astro';
import { renderOgImage } from '../../lib/og';

export const GET: APIRoute = async () => {
  const png = await renderOgImage({
    title: 'What changed in AI and security. Why it matters. What to do.',
    sectionLabel: 'Oxelan Signal',
    sectionColor: '#E0A619',
    format: 'Independent briefing',
    date: new Date(),
    domain: 'blog.oxelan.com',
  });

  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
