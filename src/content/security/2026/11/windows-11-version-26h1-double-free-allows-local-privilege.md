---
title: Windows 11 version 26H1 double free allows local privilege escalation
date: 2026-11-16T09:43:06.342Z
format: news
summary: CVE-2026-85921 is a double free in Windows Secure Kernel Mode that lets
  an authorized attacker elevate privileges locally; Microsoft fixed it in build
  10.0.28000.2956.
description: "CVE-2026-85921: a double free in Windows Secure Kernel Mode, CVSS
  8.2, affecting Windows 11 version 26H1 before build 10.0.28000.2956."
tags:
  - cve
  - security-updates
impact: high
action: review
status: current
affects:
  - Windows 11 version 26H1 (ARM64 and x64) before 10.0.28000.2956
briefing:
  changed: Microsoft published CVE-2026-85921, a double free in Windows Secure
    Kernel Mode that allows an authorized attacker to elevate privileges
    locally.
  why: The record scores the flaw at CVSS 8.2 (HIGH) and lists Windows 11 version
    26H1 on ARM64 and x64, before build 10.0.28000.2956, as affected.
  action: Update Windows 11 version 26H1 devices to build 10.0.28000.2956.
sources:
  - title: "NVD: CVE-2026-85921"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-85921
---

Microsoft has published CVE-2026-85921, a double free in Windows Secure Kernel Mode that allows an authorized attacker to elevate privileges locally. The record was published on September 14, 2026.

## What is affected

The entry labels the flaw as CWE-415, from the Common Weakness Enumeration, the identifier for a double free: the same allocation is released more than once. The affected product is Windows 11 version 26H1 on ARM64 and x64, for builds before 10.0.28000.2956.

## Why it matters

The CVE record gives a CVSS (Common Vulnerability Scoring System) 3.1 base score of 8.2, rated HIGH. The description requires an authorized attacker and frames the impact as local privilege elevation.

## What to do

Microsoft's fix for CVE-2026-85921 is Windows 11 version 26H1 build 10.0.28000.2956. Apply the update that brings a device to that build, then read back the reported build number, because anything below it remains in the affected range. Teams that track builds centrally can compare fleet reports against 10.0.28000.2956 to find devices that still need the update. No configuration-only workaround appears in the cited sources, so the fixed build is the remediation path.
