---
title: TeamViewer Flaw Lets Remote Computers Attack Users Who Connect to Control Them
date: 2026-10-31T14:21:11.723Z
format: news
summary: TeamViewer released version 15.83 to fix CVE-2026-111585, a
  high-severity integer overflow that lets a remote computer attack the user who
  connects to it.
description: TeamViewer 15.83 fixes CVE-2026-111585, a high-severity remote
  attack flaw in its clients.
tags:
  - cve
  - incident-response
impact: high
action: patch-now
status: current
affects:
  - TeamViewer Full Client < 15.83 (Windows, Linux, macOS)
  - TeamViewer Portable < 15.83 (Windows)
  - TeamViewer Remote Control < 15.83 (Android)
  - TeamViewer Full Client 15.64 legacy < 15.64.10 (Windows 7 & 8)
  - TeamViewer Full Client 14.7 < 14.7.48868 (Windows)
  - TeamViewer Full Client 13.2 < 13.2.36231 (Windows), < 13.2.154008 (Linux), <
    13.2.154007 (macOS)
briefing:
  changed: TeamViewer released version 15.83 and advisory TV-2026-1011 to fix
    CVE-2026-111585.
  why: A remote computer that a user connects to can trigger the integer overflow
    and compromise the user's machine.
  action: Upgrade to version 15.83 or the latest version available.
sources:
  - title: "NVD: CVE-2026-111585"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-111585
  - title: TV-2026-1011
    url: https://www.teamviewer.com/apac/resources/trust-center/security-bulletins/tv-2026-1011/
---

TeamViewer released security updates for CVE-2026-111585, published on October 27, 2026. The vendor's advisory TV-2026-1011 covers several client vulnerabilities. CVE-2026-111585 is an integer overflow (CWE-190) with a CVSS 3.1 base score of 8.8 (High). No active exploitation in the wild was known at the time of publication.

## What is affected

The flaw affects TeamViewer Full Client on Windows, Linux, and macOS prior to version 15.83. TeamViewer Portable for Windows prior to 15.83 is affected, as is the Remote Control app for Android prior to 15.83. Legacy versions require branch-specific updates: Full Client 15.64 before 15.64.10 for Windows 7 and 8, Full Client 14.7 before 14.7.48868, and Full Client 13.2 before 13.2.36231 on Windows, 13.2.154008 on Linux, and 13.2.154007 on macOS.

## Why it matters

A remote computer that a user connects to can trigger the integer overflow and compromise the user's machine. The high CVSS score indicates that an exploit could have serious consequences for confidentiality, integrity, and availability.

## What to do

Update to version 15.83 or the latest version available. Inventory TeamViewer installations and patch all affected platforms. For legacy installations, apply the branch-specific fixes. Do not connect to untrusted remote computers until you have updated.
