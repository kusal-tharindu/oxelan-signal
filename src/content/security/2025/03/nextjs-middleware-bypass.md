---
title: "Next.js middleware bypass: patch 15.2.3 now"
date: 2025-03-24
format: news
summary: "CVE-2025-29927 lets a crafted request skip Next.js middleware, including auth checks implemented there. Fixed versions are available."
tags: [nextjs, cve, authentication]
impact: critical
action: review
affects: ["next >= 11.1.4 < 12.3.5", "next >= 13.0.0 < 13.5.9", "next >= 14.0.0 < 14.2.25", "next >= 15.0.0 < 15.2.3"]
status: current
briefing:
  changed: "A request header can make Next.js skip middleware execution. Any authorization or redirect logic implemented only in middleware can be bypassed."
  why: "Middleware is commonly used for auth gates and tenant routing. A bypass is a direct path to protected routes, not just a missing redirect."
  action: "Upgrade to 12.3.5, 13.5.9, 14.2.25 or 15.2.3 (or later). If you cannot upgrade immediately, strip the x-middleware-subrequest header at the edge and verify that authorization is enforced in the route or API, not only in middleware."
sources:
  - { title: "GitHub Advisory: GHSA-f82v-jwr5-mffw", url: "https://github.com/advisories/GHSA-f82v-jwr5-mffw" }
  - { title: "Next.js: CVE-2025-29927", url: "https://nextjs.org/blog/cve-2025-29927" }
  - { title: "NVD: CVE-2025-29927", url: "https://nvd.nist.gov/vuln/detail/CVE-2025-29927" }
updates:
  - { date: 2026-10-27, note: "Set action to review: fixed versions shipped in March 2025, so this is now historical reference rather than an active patch advisory." }
  - { date: 2025-03-24, note: "Published after the coordinated advisory." }
---

Next.js middleware runs before a request reaches a route. Applications use it for authentication
gates, tenant routing, redirects, and header manipulation. CVE-2025-29927 is a bypass of that
layer: a crafted `x-middleware-subrequest` header can cause the middleware to be skipped.

The practical impact depends on what you put in middleware. If it was only adding a header, the
bug is a curiosity. If it was the only thing checking a session before rendering an admin page or
proxying an API route, it is an authentication bypass.

## Affected and fixed versions

| Branch | Affected | Fixed |
|---|---|---|
| 15.x | `>= 15.0.0 < 15.2.3` | `15.2.3` |
| 14.x | `>= 14.0.0 < 14.2.25` | `14.2.25` |
| 13.x | `>= 13.0.0 < 13.5.9` | `13.5.9` |
| 12.x | `>= 11.1.4 < 12.3.5` | `12.3.5` |

Check the advisory for the exact range and for any later revisions. If you are on an unsupported
major, the durable fix is to upgrade; a header filter is a mitigation, not a patch.

## If you cannot upgrade today

Block the header at the edge or in your reverse proxy. The value is attacker-controlled, so do not
try to match a specific payload; remove the header entirely from external requests. Then verify
that sensitive routes enforce authorization themselves. Middleware should be defense in depth,
never the only gate.

## What to check after patching

- Search the codebase for authorization decisions in `middleware.ts` and confirm the route or API
  handler repeats the check.
- Review access logs for requests containing `x-middleware-subrequest` from unexpected sources.
- Rotate any credentials that could be reached through a bypassed route if you see evidence of
  exploitation.
- Add a regression test that sends the header to a protected route and expects a denial.

The advisory is public and the exploit is trivial. Treat this as an inventory problem: find every
deployment, including preview environments and internal tools, then patch or block.
