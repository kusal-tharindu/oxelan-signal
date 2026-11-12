---
title: Apache HTTP Server 2.4.71 fixes critical mod_http2 flaw CVE-2026-119618
date: 2026-11-12T06:55:00.282Z
format: news
summary: Apache HTTP Server 2.4.71 fixes CVE-2026-119618, a critical mod_http2
  bug that needs no authentication and has a demonstrated exploit; Debian and
  standalone mod_h2 have no fix.
description: Apache HTTP Server 2.4.71 fixes the critical mod_http2 flaw
  CVE-2026-119618; Debian and standalone mod_h2 have no fix published.
tags:
  - cve
  - security-updates
impact: critical
action: review
status: current
affects:
  - Apache HTTP Server 2.4.55 through 2.4.70
  - mod_h2 2.0.8 through 2.0.42
briefing:
  changed: Apache HTTP Server 2.4.71 was released on 2026-11-11 and, according to
    The Hacker News, fixes CVE-2026-119618, a critical concurrent-execution flaw
    in mod_http2.
  why: The bug needs no authentication to exploit, only reachability and HTTP/2
    enabled, and public research has demonstrated a reliable exploit against a
    default-configuration server with mod_http2 enabled.
  action: Upgrade to Apache HTTP Server 2.4.71; the advisory offers no workaround,
    and admins who cannot update can remove h2 and h2c from the Protocols
    directive.
sources:
  - title: "NVD: CVE-2026-119618"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-119618
  - title: Apache HTTP Server 2.4 vulnerabilities
    url: https://httpd.apache.org/security/vulnerabilities_24.html
  - title: "The Hacker News: Critical Apache HTTP/2 Flaw Could Let Unauthenticated
      Attackers Execute Code Remotely"
    url: https://thehackernews.com/2026/11/critical-apache-http2-flaw-could-let.html
---

Apache HTTP Server 2.4.71 was released on 2026-11-11. According to The Hacker News, the release fixes CVE-2026-119618, a critical flaw in mod_http2, the module that handles HTTP/2 connections. The Apache HTTP Server project describes the bug as a concurrent-execution problem in assign_headers() that can lead to remote code execution (RCE).

## What is affected

Apache HTTP Server 2.4.55 through 2.4.70 is affected, as are standalone mod_h2 releases 2.0.8 through 2.0.42 published on GitHub. Debian bookworm, trixie and forky are listed as vulnerable with no fix, and the standalone mod_h2 project has published no fixed release.

According to the report, only servers with HTTP/2 enabled are affected, and an attacker who can reach the server needs no authentication. Red Hat says public research has demonstrated a reliable exploit against a default-configuration server with mod_http2 enabled, the report adds.

## Why it matters

Anyone who can reach an affected server can attempt the flaw without credentials. Public research has demonstrated a reliable exploit against a default-configuration server with mod_http2 enabled. Servers that do not enable HTTP/2 are outside the affected configuration.

## What to do

Upgrade to Apache HTTP Server 2.4.71. The advisory offers no workaround. Admins who cannot update yet can remove h2 and h2c from the Protocols directive and leave Protocols http/1.1, as Wiz advises, according to the report.

On Red Hat Enterprise Linux 9, the fix ships as mod_http2-2.0.26-7.el9_9.1 under RHSA-2026:98981. On Red Hat Enterprise Linux 10 it is mod_http2-2.0.29-5.el10_3.1 under RHSA-2026:98978. Red Hat Enterprise Linux 6, 7 and 8 are not affected.

<!-- cspell:words trixie RHSA -->
