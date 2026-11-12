---
title: "Fortinet FortiAnalyzer and FortiManager SQL injection: CVE-2026-126262"
date: 2026-11-12T06:58:57.596Z
format: news
summary: CVE-2026-126262 is a Critical SQL injection in FortiAnalyzer and
  FortiManager with FortiAnalyzer features, and Fortinet has published fixed
  releases.
description: Fortinet advisory FG-IR-26-276 covers CVE-2026-126262, a Critical
  SQL injection in FortiAnalyzer and FortiManager with FortiAnalyzer features.
tags:
  - cve
  - security-updates
impact: critical
action: review
status: current
affects:
  - FortiAnalyzer 8.0.0 through 8.0.1
  - FortiAnalyzer 7.6.0 through 7.6.7
  - FortiAnalyzer 7.4.0 through 7.4.11
  - FortiAnalyzer 7.2.0 through 7.2.12
  - FortiManager 8.0.0
  - FortiManager 7.6.0 through 7.6.7
  - FortiManager 7.4.0 through 7.4.11
  - FortiManager 7.2.0 through 7.2.12
briefing:
  changed: Fortinet published advisory FG-IR-26-276 on November 10, 2026 for
    CVE-2026-126262, a Critical SQL injection in FortiAnalyzer and FortiManager
    with FortiAnalyzer features.
  why: The advisory says the flaw may allow an unauthenticated attacker with
    access to the oftp port to execute code or command on the system via crafted
    OFTP packets.
  action: "Upgrade to the fixed release for your branch: 8.0.2, 7.6.8, 7.4.12 or
    7.2.13 on FortiAnalyzer, and 8.0.1, 7.6.8, 7.4.12 or 7.2.13 on
    FortiManager."
sources:
  - title: "NVD: CVE-2026-126262"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-126262
  - title: PSIRT | FortiGuard Labs
    url: https://fortiguard.fortinet.com/psirt/FG-IR-26-276
---

Fortinet has published advisory FG-IR-26-276 for CVE-2026-126262, an SQL injection flaw in FortiAnalyzer and FortiManager with FortiAnalyzer features. SQL is structured query language, the command language a database understands; CWE-89 is the Common Weakness Enumeration entry for improper neutralization of special elements used in an SQL command. The advisory was published on November 10, 2026, and the CVE carries a CVSS v3.1 (Common Vulnerability Scoring System) base score of 9.8, rated Critical.

## What is affected

FortiAnalyzer is affected at 8.0.0 through 8.0.1, and in the 7.6.0 through 7.6.7, 7.4.0 through 7.4.11 and 7.2.0 through 7.2.12 ranges. FortiManager is affected at 8.0.0, and in the 7.6.0 through 7.6.7, 7.4.0 through 7.4.11 and 7.2.0 through 7.2.12 ranges.

## Why it matters

The advisory says the flaw may allow an unauthenticated attacker with access to the oftp port to execute code or command on the system via crafted OFTP packets. SQL injection is usually a database-level flaw, and here the vendor describes the impact in terms of code or command execution on the system.

## What to do

Fortinet's fix for FortiAnalyzer 8.0 is to upgrade to 8.0.2 or above, for 7.6 to 7.6.8 or above, for 7.4 to 7.4.12 or above, and for 7.2 to 7.2.13 or above. For FortiManager, the vendor lists 8.0.1 or above for 8.0, 7.6.8 or above for 7.6, 7.4.12 or above for 7.4, and 7.2.13 or above for 7.2. Follow advisory FG-IR-26-276 for the upgrade order and any branch-specific notes.

<!-- cspell:words Forti oftp OFTP PSIRT -->
