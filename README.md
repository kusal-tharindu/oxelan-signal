# Oxelan Signal

Production-focused news and analysis for people who ship AI and secure it. Every post answers
three questions: **what changed, why it matters in production, and what to do next.**

|                 |                                                                           |
| --------------- | ------------------------------------------------------------------------- |
| Site            | [blog.oxelan.com](https://blog.oxelan.com) (configured, not yet deployed) |
| Stack           | Astro 7, Markdown content collections, Tailwind CSS 4, Pagefind           |
| Hosting         | GitHub Pages, built by GitHub Actions                                     |
| Content         | Git, validated with Zod + editorial checks                                |
| Code licence    | MIT                                                                       |
| Content licence | CC BY 4.0                                                                 |

## Quick start

Requirements: Node 24 (see `.nvmrc`) and npm 11.

```bash
npm ci
npm run dev
```

The dev server runs at `http://localhost:4321`. Drafts and future-dated posts are visible in dev
and excluded from production builds.

## Commands

| Command                              | What it does                                                |
| ------------------------------------ | ----------------------------------------------------------- |
| `npm run dev`                        | Astro dev server with drafts                                |
| `npm run build`                      | Validate content, build the site, build the Pagefind index  |
| `npm run preview`                    | Serve the production build locally                          |
| `npm run check`                      | Astro + TypeScript diagnostics                              |
| `npm run test`                       | Unit tests for pure helpers                                 |
| `npm run validate`                   | Cross-field content and editorial rules                     |
| `npm run check:images`               | Image size, alt text and reference checks                   |
| `npm run check:links`                | Internal links, fragments, sitemap and RSS                  |
| `npm run verify`                     | Verify the built artifact (pages, feeds, OG images, search) |
| `npm run ci`                         | Everything above, in the same order as CI                   |
| `npm run new -- <section> "<title>"` | Create a post with valid frontmatter                        |
| `npm run digest`                     | Build a weekly digest draft                                 |
| `npm run format` / `format:check`    | Prettier                                                    |

## Project layout

```
src/
├── content/<section>/<YYYY>/<MM>/<slug>.md   posts (folder = section)
├── content/digest/<YYYY-wWW>.md              weekly digests
├── content.config.ts                         Zod schemas + loaders
├── data/radar.yaml                           radar entries
├── components/                               Nav, PostCard, SearchOverlay, BriefingBox, …
├── layouts/                                  BaseLayout, ArticleLayout
├── pages/                                    routes, feeds, sitemap, OG endpoints
├── lib/                                      pure helpers, post queries, OG renderer
├── scripts/site.js                           progressive enhancement (no framework)
├── styles/global.css                         tokens, components, article typography
└── site.config.ts                            identity, nav, sections, feature flags
scripts/                                      validation, checks, post/digest generators
tests/                                        Vitest unit tests
public/                                       CNAME, robots, favicon, manifest, security.txt
.github/workflows/                            deploy, PR checks, weekly digest draft
```

## Documentation

Project documentation lives outside the code repository in this workspace:

```
/home/project/AI-project/all-docs/blog-github/
```

Start with `README.md`, then `implementation.md`, `architecture.md`, `content-guide.md`,
`testing.md` and `operations.md`. The original product plan and wireframes are kept as
`plan.md` and `wireframes.md`.

## Deployment

The repository is ready for GitHub Pages. The first deploy requires repository, DNS and Pages
settings that cannot be performed from this workspace; see `operations.md` in the documentation
folder. `public/CNAME` already contains `blog.oxelan.com`.

## Licence

Code is MIT (`LICENSE`). Editorial content is CC BY 4.0 (`LICENSE-CONTENT`). The Oxelan name and
marks are not covered by either licence.
