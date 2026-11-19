---
title: NGINX fixes critical use-after-free flaws in mail proxy and HTTP/2
date: 2026-11-19T00:41:53.384Z
format: news
summary: NGINX Open Source and NGINX Plus fix critical use-after-free flaws in
  nginx worker processes, with fixed releases for the mail proxy and HTTP/2
  issues.
description: CVE-2026-113425 and CVE-2026-123633 are critical use-after-free
  flaws in nginx worker processes; fixed releases exist for both branches.
tags:
  - cve
  - nginx
impact: critical
action: review
status: current
affects:
  - NGINX Open Source 1.31.0 before 1.31.9
  - NGINX Open Source 1.30.0 before 1.30.7
  - NGINX Plus 37.1.0 before 37.3.0.1
  - NGINX Plus 37.0.0 before 37.0.8.1
  - NGINX Plus 37.1.0.1 before 37.2.0.1
  - NGINX Plus 37.0.0.1 before 37.0.7.1
briefing:
  changed: CVE-2026-113425 is a use-after-free in an nginx worker process when
    NGINX is configured as a mail proxy, and CVE-2026-123633 is a use-after-free
    that appears with HTTP/2 client connections when the worker is low on
    worker_connections.
  why: Each flaw carries a CVSS 4.0 base score of 9.2, rated critical, and
    exploitation of CVE-2026-123633 can lead to arbitrary code execution or a
    denial of service by crashing worker processes.
  action: Upgrade NGINX Open Source to 1.31.9 or 1.30.7, and apply the NGINX Plus
    fixed release for your branch, 37.3.0.1 or 37.0.8.1 for CVE-2026-113425 and
    37.2.0.1 or 37.0.7.1 for CVE-2026-123633.
sources:
  - title: "NVD: CVE-2026-113425"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-113425
  - title: "NVD: CVE-2026-123633"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-123633
  - title: 2026-123633 - Red Hat Customer Portal
    url: https://access.redhat.com/security/cve/cve-2026-123633
---

## What changed

Two use-after-free flaws in the nginx worker process affect NGINX Open Source and NGINX Plus in specific configurations. CVE-2026-113425 is reachable when the server is configured as a mail proxy, where undisclosed traffic can cause the memory error. CVE-2026-123633 applies when NGINX uses HTTP/2 for client connections and proxies requests to a backend while the worker process is running low on worker_connections. CWE-416 is a use-after-free weakness, a class of memory-safety bug in which code keeps using memory after it has been freed.

## Who is affected

NGINX Open Source 1.31.0 before 1.31.9 and 1.30.0 before 1.30.7 are affected by CVE-2026-113425. CVE-2026-123633 affects the same Open Source ranges. On NGINX Plus the ranges differ per CVE: CVE-2026-113425 covers NGINX Plus 37.1.0 before 37.3.0.1 and 37.0.0 before 37.0.8.1, while CVE-2026-123633 covers NGINX Plus 37.1.0.1 before 37.2.0.1 and 37.0.0.1 before 37.0.7.1.

## Why it matters

Each flaw carries a CVSS 4.0 base score of 9.2, rated critical, where CVSS (Common Vulnerability Scoring System) is the standard severity scale. Red Hat lists a CVSS v3 base score of 8.1 for CVE-2026-123633. Successful exploitation of CVE-2026-123633 can lead to arbitrary code execution or a denial of service by crashing worker processes.

## What to do

Upgrade NGINX Open Source to 1.31.9 or 1.30.7, which fix CVE-2026-113425 and CVE-2026-123633. NGINX Plus administrators should apply the fixed release for their branch: 37.3.0.1 or 37.0.8.1 for CVE-2026-113425, and 37.2.0.1 or 37.0.7.1 for CVE-2026-123633. For CVE-2026-123633, the issue can be mitigated by disabling HTTP/2 support in the nginx configuration, removing the http2 parameter from the listen directives and setting http2 off in versions 1.25 and later.
