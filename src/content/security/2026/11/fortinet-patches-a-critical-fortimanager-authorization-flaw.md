---
title: Fortinet patches a critical FortiManager authorization flaw (CVE-2026-126261)
date: 2026-11-12T06:57:00.895Z
format: news
summary: FortiManager 8.0.0, 7.6.0 through 7.6.7, 7.4.0 through 7.4.5 and 7.2.0
  through 7.2.8 need an upgrade after Fortinet fixed a 9.8-rated authorization
  flaw reachable over the FGFM port.
description: Fortinet advisory FG-IR-26-275 fixes CVE-2026-126261, a 9.8-rated
  improper authorization flaw in FortiManager reachable over the FGFM port.
tags:
  - cve
  - security-updates
impact: critical
action: review
status: current
affects:
  - FortiManager 8.0.0
  - FortiManager 7.6.0 through 7.6.7
  - FortiManager 7.4.0 through 7.4.5
  - FortiManager 7.2.0 through 7.2.8
briefing:
  changed: Fortinet published advisory FG-IR-26-275 for CVE-2026-126261, an
    improper authorization flaw in FortiManager rated CVSS 9.8, with fixes in
    8.0.1, 7.6.8, 7.4.6 and 7.2.9.
  why: An unauthenticated attacker who can reach the FGFM port may execute code or
    commands with crafted FGFM packets.
  action: "Match the fixed release to your branch: 8.0.1, 7.6.8, 7.4.6 or 7.2.9,
    or above."
sources:
  - title: "NVD: CVE-2026-126261"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-126261
  - title: PSIRT | FortiGuard Labs
    url: https://www.fortiguard.com/psirt/FG-IR-26-275
---

## What changed

Fortinet published advisory FG-IR-26-275 on November 10, 2026, covering CVE-2026-126261, an improper authorization vulnerability in FortiManager. The CVE record lists CWE-285, the Common Weakness Enumeration entry for improper authorization, and a CVSS (Common Vulnerability Scoring System) v3.1 base score of 9.8, critical.

## What is affected

The advisory lists FortiManager 8.0.0, 7.6.0 through 7.6.7, 7.4.0 through 7.4.5, and 7.2.0 through 7.2.8 as affected. An unauthenticated attacker who can reach the FGFM port may execute code or commands via crafted FGFM packets. FGFM is the management protocol FortiManager uses to communicate with FortiGate devices.

## Why it matters

The flaw needs no credentials; reachability to the FGFM port is the precondition the description names. The advisory's CVSS v3.1 base score of 9.8, critical, places it in the highest severity band. Fortinet says the issue was internally discovered and reported by Theo Leleu of its Product Security team.

## What to do

For the 8.0 branch, Fortinet fixed CVE-2026-126261 in 8.0.1 or above. Upgrades for the other branches are 7.6.8 or above, 7.4.6 or above, and 7.2.9 or above. Match the fixed release to the branch the installation runs.

<!-- cspell:words Forti FGFM PSIRT Theo Leleu -->
