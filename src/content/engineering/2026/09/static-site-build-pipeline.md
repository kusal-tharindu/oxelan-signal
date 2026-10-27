---
title: "A static site is a build pipeline, not a folder"
date: 2026-09-18
updated: 2026-10-27
format: guide
summary: "Static output hides the complexity in the build. The sites that age well treat the pipeline as a product: pinned, cached, observable and reproducible."
tags: [astro, github-actions]
status: current
sources:
  - { title: "Astro: content collections", url: "https://docs.astro.build/en/guides/content-collections/" }
  - { title: "Astro: images", url: "https://docs.astro.build/en/guides/images/" }
  - { title: "GitHub Actions: dependency caching", url: "https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/caching-dependencies-to-speed-up-workflows" }
  - { title: "Pagefind", url: "https://pagefind.app/" }
---

A static site has no application server, so it is easy to assume it has no operational surface.
That is backwards. The build is the application server. It runs on every publish, it has
dependencies, it consumes secrets, and it produces the artifact users see.

The failure modes are predictable:

- A build that takes 12 minutes makes small copy fixes feel expensive.
- An unpinned action or package changes behavior without a code change.
- A content schema that accepts bad frontmatter moves the error from CI to production.
- A search index or share image generated at build silently drifts from the page it describes.
- A cache that stores the wrong thing makes the build fast and wrong.

## Treat the build as a product

### Pin the toolchain

Use an exact Node version, an exact package manager version, and a lockfile. Pin CI actions to
commit SHAs. A tag such as `v4` is a mutable pointer; the workflow you reviewed is not necessarily
the workflow that runs next month.

This is not paranoia about a specific incident. It is the same reason you pin a container image
by digest: the artifact should be the thing you tested.

### Make the content fail the build

A schema is a contract. If a post is missing sources, has an invalid tag, or points at a
superseded post that does not exist, the build should stop. It is much cheaper to fix at the pull
request than to discover it in a feed reader.

The schema should also encode editorial rules that are cheap to check: required summary length,
allowed formats, impact values, and fields that only make sense for one format. Keep the rules in
code, not in a wiki.

### Cache inputs, not outputs

Cache the package manager's download cache and the framework's build cache. Do not cache `dist`
across unrelated commits unless you understand the invalidation. A stale output cache can ship an
old page with a new asset hash, which is a confusing failure at the CDN.

If the build fetches remote data, cache it with an explicit TTL and a way to bypass the cache.
“The build is slow because the API is slow” is a design choice, not a law.

### Measure the build

Track at least:

- Total build time and time per phase.
- Output size and the largest files.
- Number of pages and generated images.
- Cache hit rate.
- Failures by stage.

Put the numbers in the pull request or a job summary. A build that grows from 40 seconds to four
minutes over six months is easier to fix when you see the trend.

## The content pipeline

A modern static blog usually has four generated artifacts:

1. **HTML pages** from Markdown and layouts.
2. **Optimized images** from source assets.
3. **A search index** built after the HTML exists.
4. **Share images** generated from post metadata.

The order matters. Search indexing needs the final HTML. Share images need the final URLs and
titles. If you generate them in the wrong order, you get an index that points at 404s or an OG
image with last week's title.

Keep generated artifacts out of git. Commit the sources, not the output. The build should be able
to recreate every artifact from a clean checkout.

<aside class="callout callout-tip">
  <p class="callout-title">A useful CI split</p>
  <p>Run content validation, type checks and unit tests before the full build. They fail in
  seconds. A broken frontmatter field should not wait for a 10-minute image pipeline to surface.</p>
</aside>

## A checklist for a static pipeline

- [ ] Node, package manager and CI actions are pinned.
- [ ] `npm ci` is used in CI; the lockfile is committed.
- [ ] Content schema validation runs before the build.
- [ ] Internal links are checked against the built output.
- [ ] Image sources have a size limit and alt text is required.
- [ ] Search indexing runs after HTML generation.
- [ ] OG images are generated at build and not committed.
- [ ] The build fails on a broken sitemap, feed or canonical URL.
- [ ] The deploy artifact is immutable and traceable to a commit.
- [ ] Build time and output size are visible per pull request.

## Why this matters for a small site

A personal blog does not need a platform team. It does need a build that is boring enough to
ignore. The difference between a site that publishes for five years and one that gets abandoned
is usually not design. It is whether a one-line fix still takes one line and two minutes.

The static output is the easy part. The pipeline is the product.
