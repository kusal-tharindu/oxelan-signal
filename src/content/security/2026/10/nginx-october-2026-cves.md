---
title: "NGINX fixes five flaws, one reachable in every release since 2005"
date: 2026-10-27
format: news
summary: "NGINX 1.30.6 and 1.31.7 close a regex-map heap overflow, a TLS client-certificate bypass and an HTTP/3 request-splitting path. None is known exploited, and each needs a specific configuration to reach."
tags: [nginx, ingress-nginx, kubernetes, cve, web-security]
impact: medium
action: review
status: current
affects: ["nginx stable < 1.30.6", "nginx mainline < 1.31.7"]
briefing:
  changed: "NGINX released 1.30.6 and 1.31.7 on 14 October 2026, fixing five vulnerabilities: three memory-safety bugs, a TLS session-forgery issue that can skip client-certificate checks, and an HTTP/3 issue that lets a client append extra bytes to a request forwarded to a backend."
  why: "One of the overflows, in regex map captures, F5 scored 9.2; it was made reachable by a change in the July release. Stock kubernetes/ingress-nginx cannot emit the offending directives, but custom ConfigMaps and non-default directives decide real exposure — and one of the five has existed since May 2005."
  action: "Inventory the NGINX builds you run, upgrade to 1.30.6 or 1.31.7 or later, and audit map, root and log-format configuration plus TLS client-certificate setups before deciding this can wait for the next maintenance window."
sources:
  - { title: "The Hacker News — NGINX fixes 5 flaws, including possible RCE", url: "https://thehackernews.com/2026/10/nginx-fixes-5-flaws-including-possible.html" }
  - { title: "NGINX — security advisories", url: "https://nginx.org/en/security_advisories.html" }
  - { title: "F5 — K000162607: NGINX map directive and regex matching vulnerability (CVE-2026-93479)", url: "https://my.f5.com/manage/s/article/K000162607" }
  - { title: "HeroDevs — Are the October 2026 nginx CVEs exploitable on Ingress NGINX?", url: "https://www.herodevs.com/blog-posts/ingress-nginx-cves-nginx-1-31-7-1-30-6" }
---

NGINX shipped two releases on 14 October 2026 — 1.30.6 on the stable branch and 1.31.7 on
mainline — closing five vulnerabilities. None was in CISA's Known Exploited Vulnerabilities
catalog as of 15 October, and neither NGINX nor F5 reports attacks. F5 rates all five medium.
The reason to read on is that each one is configuration-gated, which makes "are we exposed" a
question about your configuration, not about your version alone.

## The headline: a regex-map heap overflow

CVE-2026-93479 is a heap buffer overflow in how NGINX handles regex captures in `map` blocks. It
is reachable when a `map` uses regex matching and either the `root` directive or the access-log
format references the map's capture variables before the captured variable itself is referenced.
An unauthenticated attacker sending crafted HTTP requests can restart the worker process; on
systems with ASLR disabled, F5's advisory notes code execution is possible. F5 scored this one
9.2. NGINX rates it medium.

The other four, briefly:

- Two further memory-safety bugs that can crash a worker or, in specific configurations, allow
  code execution.
- A TLS issue in which a forged session can skip client-certificate checks. F5 calls the forgery
  non-deterministic and beyond the attacker's control.
- An HTTP/3 issue that lets a client slip extra bytes into a request that NGINX forwards to a
  backend — request-smuggling adjacent.

One of the five has been present in every NGINX release since May 2005, according to the
researchers' timeline.

## Does this reach ingress-nginx?

Short answer for a stock deployment: no. The separate analysis of kubernetes/ingress-nginx (itself
an end-of-life Kubernetes project) found that each of the five October CVEs depends on a directive
that ingress-nginx either removes or does not emit by default — the `alias` case in
CVE-2026-15176 is not reachable, and the regex-map path is not emitted by stock ConfigMaps. If you
run ingress-nginx with custom ConfigMap keys such as `block-user-agents` or `block-referers`,
which do render regex map blocks, re-check that reasoning against your own configuration.

One clarification worth making: the F5 NGINX Ingress Controller is a different product from
kubernetes/ingress-nginx, and it recently fixed issues of its own — an annotation-to-config
injection (CVE-2026-55723) and an external-authentication bypass (CVE-2026-104939). Do not read
"ingress-nginx is not affected" as covering both.

## What to do

1. Find every NGINX build you run, including the one inside your ingress or service-mesh images.
2. Upgrade stable branches to 1.30.6+ and mainline to 1.31.7+.
3. Audit `map` blocks that use regex, and any `root` or log-format lines that reference capture
   variables out of order.
4. Review TLS deployments that rely on client-certificate verification as an access control.
5. If you use ingress-nginx with custom ConfigMap values, verify the directives they render.

None of this is urgent in the "drop everything" sense — nothing is known exploited. It is the
usual NGINX pattern: the version number is easy to fix, the configuration review is the actual
work.
