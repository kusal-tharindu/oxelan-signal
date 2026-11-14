---
title: Skyfall's SMM leak in EDK II firmware has no listed patched version
date: 2026-11-13T16:43:36.228Z
format: news
summary: The EDK II project assigned CVE-2026-18448 to Skyfall's SMM leak and
  rates it 5.6, and the report says the project's advisory lists no patched
  version.
description: CVE-2026-18448 covers Skyfall's SMM leak in TianoCore EDK2 from 0
  through edk2-stable202608; the report says no patched version is listed.
tags:
  - cve
  - security-updates
impact: medium
action: review
status: current
affects:
  - TianoCore EDK2 0 through edk2-stable202608
  - AMD EPYC and Ryzen chips, including embedded models
briefing:
  changed: The EDK II project assigned CVE-2026-18448 to Skyfall's SMM leak and
    rates it 5.6, and AMD's EDK II bulletin traces it to missing TSA mitigations
    in EDK II firmware code.
  why: TianoCore EDK2 versions from 0 through edk2-stable202608 are affected, and
    the report says the project's advisory lists no patched version, leaving the
    bulletin's mitigations as the near-term option.
  action: Apply AMD's earlier TSA mitigations and install the EDK II patch when
    one is available.
sources:
  - title: "NVD: CVE-2026-18448"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-18448
  - title: "The Hacker News: New Mior and Skyfall Attacks Let Rogue Cloud Hosts
      Steal Secrets From AMD SEV-SNP VMs"
    url: https://thehackernews.com/2026/11/new-mior-and-skyfall-attacks-let-rogue.html
---

According to The Hacker News, the EDK II project assigned CVE-2026-18448 to Skyfall's System Management Mode (SMM) leak and rates it 5.6. The report says AMD's EDK II bulletin traces the flaw to missing TSA mitigations in EDK II firmware code.

## What is affected

TianoCore EDK2 versions from 0 through edk2-stable202608 are affected by CVE-2026-18448. The CVE record, published on 2026-11-10, gives the flaw a Common Vulnerability Scoring System (CVSS) 4.0 base score of 5.6, rated medium.

## What the bulletin says

The bulletin lists EPYC and Ryzen chips, including embedded models, and recommends AMD's earlier TSA mitigations plus an EDK II patch when one is available, the report says. For the five EPYC server lines, the report says the bulletin lists only that patch, due in November.

## Why it matters

The Skyfall team recovered register values stored in SMM memory, which even the operating system kernel normally cannot read, according to the report. The project's own advisory lists no patched version as of that report, so the mitigations above are the near-term option.

## What to do

Apply AMD's earlier TSA mitigations to the EPYC and Ryzen systems named in the bulletin. Install the EDK II patch when one is available for those systems.

<!-- cspell:words Skyfall's Tiano Ryzen Mior Skyfall -->
