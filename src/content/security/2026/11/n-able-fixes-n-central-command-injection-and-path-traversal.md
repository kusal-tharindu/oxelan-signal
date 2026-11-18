---
title: N-able fixes N-central command injection and path traversal flaws
date: 2026-11-18T01:50:24.608Z
format: news
summary: N-able N-central before 2026.4.1 HF3 is affected by CVE-2026-129273 and
  CVE-2026-129286; 2026.4.1 HF3 fixes both.
description: N-able fixed CVE-2026-129273 and CVE-2026-129286 in N-central
  2026.4.1 HF3. CVE-2026-129286 is rated CVSS 9.2 critical.
tags:
  - cve
  - security-updates
impact: critical
action: review
status: current
affects:
  - N-able N-central before 2026.4.1 HF3
briefing:
  changed: N-able fixed CVE-2026-129273 and CVE-2026-129286 in N-central 2026.4.1
    HF3; N-central before 2026.4.1 HF3 is affected.
  why: CVE-2026-129286 is a path traversal flaw rated CVSS 9.2 critical that can
    execute code as the N-central service account; CVE-2026-129273 is a command
    injection flaw that can run commands as root.
  action: Upgrade to N-central 2026.4.1 HF3.
sources:
  - title: "NVD: CVE-2026-129273"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-129273
  - title: "NVD: CVE-2026-129286"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-129286
---

N-able has fixed the N-central flaws tracked as CVE-2026-129273 and CVE-2026-129286 (Common Vulnerabilities and Exposures) in release 2026.4.1 HF3. N-central before 2026.4.1 HF3 is affected by both flaws.

## What is affected

CVE-2026-129273 is a command injection flaw classified as CWE-74, an injection weakness in the Common Weakness Enumeration. An authenticated product administrator can inject configuration and execute commands as root on the N-central server. The flaw has a CVSS (Common Vulnerability Scoring System) 4.0 base score of 8.6, rated high.

CVE-2026-129286 is a path traversal flaw classified as CWE-22. An attacker able to supply or modify the update metadata received by the server can write files outside the download directory and execute code as the N-central service account. It has a CVSS 4.0 base score of 9.2, rated critical.

## Why it matters

The practical impact is code execution on the N-central server: as root through CVE-2026-129273 and as the service account through CVE-2026-129286. The CVSS ratings place CVE-2026-129286 at critical and CVE-2026-129273 at high.

## What to do

Upgrade N-central to 2026.4.1 HF3. That release fixes CVE-2026-129273 and CVE-2026-129286.
