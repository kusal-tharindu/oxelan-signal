---
title: N-able patches N-central argument injection flaw
date: 2026-11-20T05:01:05.833Z
format: news
summary: N-able N-central before 2026.4.1 HF3 is affected by CVE-2026-129282, a
  high-severity argument injection flaw that is fixed in 2026.4.1 HF3.
description: CVE-2026-129282 affects N-able N-central before 2026.4.1 HF3 and
  lets an authenticated attacker inject arguments into the mail command.
tags:
  - cve
  - security-updates
impact: high
action: review
status: current
affects:
  - N-able N-central before 2026.4.1 HF3
briefing:
  changed: N-able N-central before 2026.4.1 HF3 is affected by CVE-2026-129282, a
    high-severity argument injection flaw in the test email delivery function.
  why: An authenticated attacker can inject arguments into the mail command
    executed on the server.
  action: Upgrade to N-central 2026.4.1 HF3, the fixed release.
sources:
  - title: "NVD: CVE-2026-129282"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-129282
---

N-able has fixed CVE-2026-129282, a Common Vulnerabilities and Exposures (CVE) entry for a high-severity argument injection flaw in N-central’s test email delivery function. The affected range is N-central before 2026.4.1 HF3, and the fixed release is 2026.4.1 HF3.

## What is affected

The flaw sits in the test email delivery function, which does not check permissions, lacks CSRF (cross-site request forgery) protection, and passes sender and recipient values to the mail program without neutralizing option characters. An authenticated attacker can inject arguments into the mail command executed on the server. The CVE record gives the flaw a CVSS (Common Vulnerability Scoring System) 4.0 base score of 8.7, rated HIGH.

## Why it matters

The flaw is an argument injection issue in a server-side mail command, not just a missing permission check. An authenticated attacker can use the test email delivery function to inject arguments into the mail command executed on the server.

## What to do

Upgrade N-central to 2026.4.1 HF3. That release is the fixed version for CVE-2026-129282. N-central before 2026.4.1 HF3 remains in the affected range.
