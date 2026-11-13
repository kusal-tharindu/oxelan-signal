---
title: PTC patches critical Windchill and FlexPLM remote code execution flaw
date: 2026-11-12T12:43:28.670Z
format: news
summary: CVE-2026-126325 is a critical remote code execution flaw in PTC
  Windchill and PTC FlexPLM, and PTC's support article for it is CS483249.
description: CVE-2026-126325 is a critical RCE flaw in PTC Windchill and PTC
  FlexPLM; patches are described in PTC support article CS483249.
tags:
  - cve
  - security-updates
impact: critical
action: review
status: current
affects:
  - PTC Windchill 11.0 M030, 11.1 M020, 11.2.1.0, 12.0.2.0, 12.1.2.0, 13.0.2.0,
    13.1.0.0, 13.1.1.0, 13.1.2.0, 13.1.3.0, 13.1.4.0
  - PTC FlexPLM 11.0 M030, 11.1 M020, 11.2.1.0, 12.0.2.0, 12.1.2.0, 13.0.2.0,
    13.1.0.0, 13.1.1.0, 13.1.2.0, 13.1.3.0
briefing:
  changed: PTC Windchill and PTC FlexPLM are affected by CVE-2026-126325, a
    critical remote code execution vulnerability that may be exploited through
    deserialization of untrusted data.
  why: The CVE record gives it a CVSS v4 base score of 9.2 and a CVSS v3.1 base
    score of 9.0, and the advisory lists many Windchill and FlexPLM versions as
    affected.
  action: Apply the patch described in PTC support article CS483249; environments
    hosted by PTC are reported to have been patched already.
sources:
  - title: "NVD: CVE-2026-126325"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-126325
  - title: "The Hacker News: PTC Patches Critical Windchill and FlexPLM Flaw That
      Could Enable Remote Code Execution"
    url: https://thehackernews.com/2026/11/ptc-patches-critical-windchill-and.html
---

A critical remote code execution (RCE) vulnerability in PTC Windchill and PTC FlexPLM is tracked as CVE-2026-126325. According to The Hacker News, PTC has released patches for the flaw. PTC's support article for the CVE is CS483249.

The CVE record, published on November 11, 2026, gives the flaw a CVSS (Common Vulnerability Scoring System) v4 base score of 9.2 and a CVSS v3.1 base score of 9.0, both rated critical. The record says the vulnerability may be exploited through deserialization of untrusted data, the conversion of stored data back into program objects.

## What is affected

PTC Windchill 11.0 M030, 11.1 M020, 11.2.1.0, 12.0.2.0, 12.1.2.0, 13.0.2.0, 13.1.0.0, 13.1.1.0, 13.1.2.0, 13.1.3.0 and 13.1.4.0 are listed as affected. The same advisory lists PTC FlexPLM 11.0 M030, 11.1 M020, 11.2.1.0, 12.0.2.0, 12.1.2.0, 13.0.2.0, 13.1.0.0, 13.1.1.0, 13.1.2.0 and 13.1.3.0 as affected.

## Why it matters

Teams running the listed versions on their own infrastructure have to apply the patch, while the report says PTC has already applied it for environments it hosts. The record's critical rating on both scoring versions reflects a flaw that may be reached through data deserialization rather than requiring prior access.

## What to do

Apply the patch described in PTC support article CS483249. The report says PTC urged customers whose Windchill or FlexPLM environment is not hosted by PTC to apply the patch as soon as possible. For environments hosted by PTC, the report states that the patches have been applied on the customer's behalf and that no action is required.
