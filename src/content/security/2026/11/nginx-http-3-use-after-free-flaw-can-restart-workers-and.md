---
title: NGINX HTTP/3 use-after-free flaw can restart workers and possibly run code
date: 2026-11-20T05:38:28.017Z
format: news
summary: CVE-2026-121810 is a use-after-free in the NGINX worker process on
  HTTP/3 configurations, rated CVSS 4.0 9.2 and fixed in NGINX Open Source
  1.31.9 and 1.30.7.
description: CVE-2026-121810 hits NGINX Plus and NGINX Open Source with HTTP/3
  in use; NGINX Open Source 1.31.9 and 1.30.7 are the cited fixed releases.
tags:
  - cve
  - nginx
impact: critical
action: review
status: current
affects:
  - NGINX Plus 37.1.0 before 37.3.0.1
  - NGINX Plus 37.0.0 before 37.0.8.1
  - NGINX Open Source 1.31.0 before 1.31.9
  - NGINX Open Source 1.30.0 before 1.30.7
briefing:
  changed: CVE-2026-121810 is a use-after-free (CWE-416) that a remote,
    unauthenticated attacker can trigger in the NGINX worker process, and it
    affects NGINX Plus and NGINX Open Source configurations that use HTTP/3.
  why: The flaw leads to a restart of the worker process, and the record says it
    may also allow code execution.
  action: Upgrade NGINX Open Source to 1.31.9 or 1.30.7, and check the NGINX
    advisory for the NGINX Plus fixed builds.
sources:
  - title: "NVD: CVE-2026-121810"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-121810
  - title: "The Hacker News: 10-Year-Old NGINX HTTP/2 Flaw Lets Unauthenticated
      Attackers Execute Code on Servers"
    url: https://thehackernews.com/2026/11/10-year-old-nginx-http2-flaw-lets.html
---

## What changed

CVE-2026-121810 was published on November 18, 2026, and affects NGINX Plus and NGINX Open Source configurations that use HTTP/3. It is a use-after-free (CWE-416, memory freed while something still references it) that a remote, unauthenticated attacker can trigger in the NGINX worker process, leading to a restart. The record carries a CVSS (Common Vulnerability Scoring System) 4.0 base score of 9.2, rated critical, and a CVSS 3.1 base score of 8.1, rated high.

## What is affected

NGINX Plus versions 37.1.0 before 37.3.0.1 and 37.0.0 before 37.0.8.1 are listed as affected. On NGINX Open Source, versions 1.31.0 before 1.31.9 and 1.30.0 before 1.30.7 are listed. HTTP/3 is the condition the record names, so these ranges describe deployments that turn it on.

## Why it matters

The trigger is unauthenticated, so no login or token stands between a remote client and the worker process. The record states that the flaw may allow a denial-of-service or possibly cause code execution. CISA's (Cybersecurity and Infrastructure Security Agency) SSVC (Stakeholder-Specific Vulnerability Categorization) assessment for the CVE lists exploitation as none.

## What to do

According to The Hacker News, CVE-2026-121810 is fixed in NGINX Open Source 1.31.9 and 1.30.7. The report adds that turning off HTTP/3 where it is used removes the setup the flaw needs, which is an option while an upgrade is scheduled. For NGINX Plus, check the NGINX advisory for the fixed builds, and confirm your branch against it before assuming a build outside the ranges above is unaffected.
