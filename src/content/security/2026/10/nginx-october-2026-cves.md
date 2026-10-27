---
title: "NGINX fixes five flaws, three scored 9.2"
date: 2026-10-27
format: news
summary: "NGINX 1.30.6 and 1.31.7 close three 9.2 memory bugs, a TLS client-certificate bypass and an HTTP/3 injection path. None is known exploited, and each needs a specific configuration to reach."
description: "NGINX 1.30.6 and 1.31.7 fix three 9.2 memory bugs, a TLS bypass and an HTTP/3 injection path. Each needs a specific config."
tags: [nginx, ingress-nginx, kubernetes, cve, web-security]
impact: high
action: review
status: current
affects: ["nginx stable < 1.30.6", "nginx mainline < 1.31.7"]
briefing:
  changed: "NGINX released 1.30.6 and 1.31.7 on October 14, 2026, fixing five vulnerabilities. nginx rates all five medium; F5, as the CVE numbering authority, scores three of them 9.2 (critical), the TLS flaw 8.3 and the HTTP/3 flaw 6.9. None was in CISA's Known Exploited Vulnerabilities catalog as of October 15."
  why: "Three of the bugs corrupt worker memory and are reachable with configuration that is common in the wild: alias plus rewrite, regex map captures, or asynchronous file I/O with SSI. Each is gated by a specific directive, so exposure depends on your configuration, not your version alone."
  action: "Inventory the NGINX builds you run, upgrade to 1.30.6 or 1.31.7 or later, and audit the triggering configurations: alias with rewrite, regex map with root or log format, aio with SSI, shared TLS session cache, and any HTTP/3 listener."
sources:
  - { title: "The Hacker News: NGINX fixes 5 flaws, including possible RCE", url: "https://thehackernews.com/2026/10/nginx-fixes-5-flaws-including-possible.html" }
  - { title: "NGINX: security advisories", url: "https://nginx.org/en/security_advisories.html" }
  - { title: "F5: K000163408: out-of-band security notification (October 14, 2026)", url: "https://my.f5.com/manage/s/article/K000163408" }
  - { title: "HeroDevs: the October 2026 NGINX CVEs and Ingress NGINX", url: "https://www.herodevs.com/blog-posts/ingress-nginx-cves-nginx-1-31-7-1-30-6" }
updates:
  - { date: 2026-10-27, note: "Corrected severity attribution (nginx medium, F5 higher), raised impact to high, and added the per-CVE trigger conditions after a source review." }
---

NGINX shipped two releases on October 14, 2026: 1.30.6 on the stable branch and 1.31.7 on
mainline, closing five vulnerabilities. The rating depends on who you ask: nginx calls all five
medium, while F5, as the CVE numbering authority, scores three of them 9.2 (critical on CVSS 4.0).
Nothing is known exploited, so this is not an emergency. Every one of these is configuration-gated,
so "are we exposed" is a question about your directives, not just your version.

## The five, with what triggers each

| CVE | Issue | F5 | Reachable when |
|---|---|---|---|
| CVE-2026-15176 | Overflow, `alias` + `rewrite` | 9.2 | `alias` with a `rewrite` mapped to `$request_filename` |
| CVE-2026-93479 | Overflow, script evaluation | 9.2 | Regex `map` whose `root` or log format references its captures first |
| CVE-2026-97205 | Use-after-free, async I/O | 9.2 | `aio` with an SSI `include virtual` |
| CVE-2026-97629 | TLS session forgery | 8.3 | `ssl_session_cache shared` without `ssl_session_ticket_key` |
| CVE-2026-95101 | HTTP/3 body injection | 6.9 | HTTP/3 listener with `proxy_request_buffering on` |

The three memory bugs can restart a worker; where ASLR is disabled or bypassed, F5 notes code
execution is possible. CVE-2026-97629 lets a forged session skip client-certificate checks, though
F5 calls the forgery non-deterministic. CVE-2026-95101 lets an HTTP/3 client inject bytes into a
proxied request.

## Does this reach ingress-nginx?

For stock `kubernetes/ingress-nginx` (itself end-of-life), no: each CVE depends on a directive that
ingress-nginx removes or does not emit by default. CVE-2026-15176 is not reachable, and the
regex-map and TLS/HTTP/3 paths are off by default. Custom ConfigMap keys such as `block-user-agents`
do render regex map blocks, so re-check that reasoning against your own configuration. Note that the
F5 NGINX Ingress Controller is a different product that fixed separate issues; "ingress-nginx is
not affected" does not cover it.

## What to do

1. Find every NGINX build you run, including inside ingress or service-mesh images.
2. Upgrade stable to 1.30.6+ and mainline to 1.31.7+.
3. Audit the triggering configurations from the table.
4. If you rely on client-certificate verification, review the TLS forgery case.

Nothing is known exploited. The version number is easy to fix; the configuration review is the
actual work.
