import type { APIRoute, GetStaticPaths } from 'astro';
import { getAllPosts } from '../../../lib/posts';
import { rssResponse } from '../../../lib/feed';
import { formatOrder, formats, type FormatKey } from '../../../lib/formats';

export const getStaticPaths = (() =>
  formatOrder.map((format) => ({
    params: { format },
    props: { format },
  }))) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const key = props.format as FormatKey;
  const format = formats[key];
  const posts = (await getAllPosts()).filter((post) => post.data.format === key);
  return rssResponse(posts, {
    title: `Oxelan Signal — ${format.label}`,
    description: format.description,
    path: `${format.path}rss.xml`,
  });
};
