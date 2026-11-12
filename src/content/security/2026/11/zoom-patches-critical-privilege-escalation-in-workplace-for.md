---
title: Zoom patches critical privilege escalation in Workplace for Windows
date: 2026-11-12T05:43:09.921Z
format: news
summary: Zoom Workplace for Windows 7.1 before 7.1.8 carries a critical input
  validation flaw, CVE-2026-108186, that may let an unauthenticated user
  escalate privileges over the network.
description: CVE-2026-108186 rates CVSS 9.6 critical in Zoom Workplace for
  Windows 7.1 before 7.1.8; the report says patches arrive in 7.1.8 and later.
tags:
  - cve
  - security-updates
impact: critical
action: review
status: current
affects:
  - Zoom Workplace for Windows 7.1 before 7.1.8
briefing:
  changed: Zoom Workplace for Windows 7.1 before 7.1.8 is affected by
    CVE-2026-108186, an improper input validation flaw that may allow an
    unauthenticated user to escalate privileges through network access.
  why: The CVE record rates the flaw a CVSS 3.1 base score of 9.6, critical, and
    SecurityWeek describes it as a critical-severity unauthenticated privilege
    escalation bug.
  action: Upgrade Zoom Workplace for Windows to 7.1.8 or later, which the report
    says contains the patches.
sources:
  - title: "NVD: CVE-2026-108186"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-108186
  - title: "SecurityWeek: Asus, Zoom Release Security Patches"
    url: https://www.securityweek.com/asus-zoom-release-security-patches/
---

## What changed

Zoom Workplace for Windows contains CVE-2026-108186, an improper input validation flaw that may allow an unauthenticated user to escalate privileges through network access. According to SecurityWeek, it is a critical-severity unauthenticated privilege escalation bug. The CVE record gives it a CVSS (Common Vulnerability Scoring System) 3.1 base score of 9.6, rated critical, and classifies the weakness as CWE-20 (Common Weakness Enumeration entry 20), improper input validation. The record was published on November 10, 2026.

## What is affected

Zoom Workplace for Windows versions 7.1 before 7.1.8 are affected. The report states that versions 7.1.8 and later contain patches for the bug.

## Why it matters

The record describes an unauthenticated attacker reaching the client over the network and escalating privileges, so every desktop still inside the affected range keeps that path open. The report notes that Zoom makes no mention of the flaw being exploited in the wild.

## What to do

Upgrade Zoom Workplace for Windows to 7.1.8 or later, the release the report says contains the patches. Installations on 7.1 before 7.1.8 are the ones that need the update. Confirm that managed clients report 7.1.8 or later before closing the change.

<!-- cspell:words Asus -->
