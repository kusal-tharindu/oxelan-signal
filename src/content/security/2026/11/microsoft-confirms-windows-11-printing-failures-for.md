---
title: Microsoft confirms Windows 11 printing failures for Forcepoint users on
  KB5132043
date: 2026-11-23T14:48:25.067Z
format: news
summary: Microsoft confirmed that some Forcepoint users may see printing issues
  after the November 2026 Windows 11 hotpatch KB5132043, and published
  CVE-2026-112811 for a separate Print Spooler flaw.
description: Forcepoint DLP users on Windows 11 24H2 and later report printing
  failures after KB5132043; CVE-2026-112811 covers a separate Print Spooler
  flaw.
tags:
  - cve
  - security-updates
impact: high
action: review
status: current
affects:
  - Windows 11 24H2 and later with the Forcepoint DLP Endpoint Agent after
    installing KB5132043
  - Windows 11 Version 24H2 before 10.0.26100.9974
  - Windows 11 Version 25H2 before 10.0.26200.9974
  - Windows 11 Version 26H2 before 10.0.26300.9974
  - Windows 10 Version 22H2 before 10.0.19045.7846
  - Windows Server 2022 before 10.0.20348.5870
  - Windows Server 2025 before 10.0.26100.33822
briefing:
  changed: Microsoft confirmed that some Forcepoint users may experience printing
    issues after installing the November 2026 Windows 11 hotpatch KB5132043.
  why: The Print Spooler service fails to start, so the print option can be greyed
    out or printer selection errors appear. Separately, CVE-2026-112811 allows
    an authorized attacker to elevate privileges locally and carries a CVSS v3.1
    base score of 7.8.
  action: No fix is yet available for the printing issue; Forcepoint customers can
    obtain a temporary workaround from the Forcepoint support portal.
    Installations below the builds listed for CVE-2026-112811 remain affected
    and need the corresponding update.
sources:
  - title: "NVD: CVE-2026-112811"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-112811
  - title: "BleepingComputer: Microsoft confirms Windows printing issues affecting
      Forcepoint users"
    url: https://www.bleepingcomputer.com/news/microsoft/microsoft-confirms-printing-issues-after-kb5132043-windows-hotpatch/
---

Microsoft confirmed that some Forcepoint users may experience printing issues after installing the November 2026 Windows 11 hotpatch KB5132043. According to BleepingComputer, the problems stem from a compatibility issue between that hotpatch and the Forcepoint DLP (data loss prevention) Endpoint Agent, and the printing issue affects only systems running Windows 11 24H2 and later.

Affected users may find the print option greyed out or encounter errors when selecting a printer, because the Print Spooler service fails to start. The report adds that KB5132043 is also causing installation and launch issues for Office and third-party applications on Windows 11 systems.

## Why it matters

According to the report, the known issues affect only systems that installed hotpatch updates pushed through Windows Autopatch, not those with the standard November 2026 Patch Tuesday security updates. Separately, the report notes that the standard November 2026 Patch Tuesday updates may break printing of documents with complex formatting on Windows Server 2016 or later and Windows 10 or later devices.

A separate record, CVE-2026-112811, describes a stack-based buffer overflow in Windows Print Spooler Components that allows an authorized attacker to elevate privileges locally. The record gives a CVSS (Common Vulnerability Scoring System) v3.1 base score of 7.8, rated HIGH, and classifies the flaw as CWE-121 and CWE-822 under the Common Weakness Enumeration. It was published on November 10, 2026.

## Affected builds for CVE-2026-112811

| Product | Affected versions | |---|---| | Windows 11 Version 24H2 | before 10.0.26100.9974 | | Windows 11 Version 25H2 | before 10.0.26200.9974 | | Windows 11 Version 26H2 | before 10.0.26300.9974 | | Windows 10 Version 22H2 | before 10.0.19045.7846 | | Windows Server 2022 | before 10.0.20348.5870 | | Windows Server 2025 | before 10.0.26100.33822 |

## What to do

No fix is yet available for the printing issue; Forcepoint has shared a temporary workaround in a support document that customers can open after signing in to the Forcepoint support portal. For CVE-2026-112811, the record lists each affected range as ending before the build shown in the table, so installations below those builds remain affected and need the update that brings them to the listed build.

<!-- cspell:words Forcepoint hotpatch Autopatch -->
