---
title: N-able fixes N-central SSRF flaw in 2026.4 Hotfix 3
date: 2026-11-17T12:52:47.449Z
format: news
summary: N-able's N-central 2026.4 Hotfix 3 fixes CVE-2026-129284, a server-side
  request forgery flaw in the Report Manager and Data Export settings.
description: N-central before 2026.4.1 HF3 is affected by CVE-2026-129284, fixed
  in build 2026.4.1.39.
tags:
  - cve
  - security-updates
impact: critical
action: review
status: current
affects:
  - N-able N-central before 2026.4.1 HF3
briefing:
  changed: N-able released N-central 2026.4 Hotfix 3, build 2026.4.1.39, which
    fixes CVE-2026-129284, a server-side request forgery flaw in the Report
    Manager and Data Export settings.
  why: N-able labels the hotfix a critical security update, while the CVE record
    scores the flaw 5.3 medium and lists exploitation as none.
  action: On-premise customers should upgrade their servers as soon as possible,
    and all customers must move every Agent and Probe to 2026.4.1 HF3.
sources:
  - title: "NVD: CVE-2026-129284"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-129284
  - title: N-central 2026.4 HF3 Release Notes
    url: https://status.n-able.com/2026/11/16/n-central-2026-4-hf3-release-notes/
---

N-able has released N-central 2026.4 Hotfix 3 to fix CVE-2026-129284, a server-side request forgery (SSRF) flaw in the Report Manager and Data Export settings. SSRF means a request can make the server open a connection to a target chosen by the sender instead of one the operator approved, and the vendor says these settings did not validate connection targets.

## What is affected

N-able N-central before 2026.4.1 HF3 is affected. The fix ships as build 2026.4.1.39, and the advisory was last updated on November 16, 2026. The CVE record classifies the flaw under CWE-918, the Common Weakness Enumeration entry for server-side request forgery, assigns a CVSS (Common Vulnerability Scoring System) 4.0 base score of 5.3 rated medium, and was published on November 17, 2026.

## Why it matters

N-able calls 2026.4 Hotfix 3 a critical security update. The record's own severity is lower, and a CISA (Cybersecurity and Infrastructure Security Agency) assessment recorded with the CVE lists exploitation as none.

## What to do

Customers running on-premise N-central should upgrade their servers as soon as possible. All customers, hosted and on-premise, must also upgrade every Agent and Probe to 2026.4.1 HF3 to be fully protected. Customers on a hosted N-central (NCOD) instance do not need to upgrade the server, because N-able performs that upgrade. Servers can go directly to the hotfix from 2025.4, 2026.1, 2026.2, 2026.3, 2026.3.1 (Hotfix 1), 2026.3.1 (Hotfix 2), 2026.3.1 (Hotfix 3), 2026.3.1 (Hotfix 4), 2026.4, 2026.4 Hotfix 1, and 2026.4 Hotfix 2.

<!-- cspell:words NCOD -->
