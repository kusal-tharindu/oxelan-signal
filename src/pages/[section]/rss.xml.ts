import type { APIRoute, GetStaticPaths } from 'astro';
import { getAllPosts } from '../../lib/posts';
import { rssResponse } from '../../lib/feed';
import { sections, type SectionKey } from '../../site.config';

export const getStaticPaths = (() =>
  Object.keys(sections).map((section) => ({
    params: { section },
    props: { section },
  }))) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const section = props.section as SectionKey;
  const posts = (await getAllPosts()).filter((post) => post.id.startsWith(`${section}/`));
  return rssResponse(posts, {
    title: `Oxelan Signal — ${sections[section].label}`,
    description: sections[section].description,
    path: `/${section}/rss.xml`,
  });
};
