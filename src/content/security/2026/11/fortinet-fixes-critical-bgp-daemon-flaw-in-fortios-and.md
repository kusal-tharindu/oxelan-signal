---
title: Fortinet fixes critical BGP daemon flaw in FortiOS and FortiSASE
date: 2026-11-12T07:45:23.356Z
format: news
summary: Fortinet fixed CVE-2026-126254, a critical numeric truncation flaw in
  the FortiOS and FortiSASE BGP daemon, with upgraded FortiOS releases and a
  remediated FortiSASE build.
description: Fortinet fixed a critical BGP daemon flaw, CVE-2026-126254, in
  FortiOS and FortiSASE; upgraded FortiOS releases carry the fix.
tags:
  - cve
  - security-updates
impact: critical
action: patch-now
status: current
affects:
  - FortiOS 8.0.0 through 8.0.1
  - FortiOS 7.6.0 through 7.6.7
  - FortiOS 7.4.0 through 7.4.12
  - FortiOS 7.2.0 through 7.2.13
  - FortiSASE 25.1 through 26.3.1_a
briefing:
  changed: Fortinet published advisory FG-IR-26-268 for CVE-2026-126254, a numeric
    truncation error in the BGP daemon used by FortiOS and FortiSASE, scored at
    9.6 Critical.
  why: The flaw sits in the routing daemon of both products, and the affected
    FortiOS releases and FortiSASE versions are listed in the advisory.
  action: Upgrade FortiOS to 8.0.2, 7.6.8, 7.4.13 or 7.2.14 or above, matching the
    installed branch. FortiSASE 26.3.1 and 26.3.1_a were remediated in 26.3.2
    with no customer action; FortiSASE 25.1 through 26.2 must migrate to a fixed
    release.
updated: 2026-11-14
updates:
  - { date: 2026-11-14, note: "Corrected the FortiSASE guidance: no action is needed only on 26.3.1 and 26.3.1_a; FortiSASE 25.1 through 26.2 must migrate to a fixed release, per FG-IR-26-268." }
sources:
  - title: "NVD: CVE-2026-126254"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-126254
  - title: PSIRT | FortiGuard Labs
    url: https://fortiguard.fortinet.com/psirt/FG-IR-26-268
  - title: "CVE-2026-126254: FortiOS · Denial of Service | Threat Radar"
    url: https://radar.offseq.com/threat/cve-2026-126254-denial-of-service-in-fortinet-fortios-f3fb697b3f025e68
  - title: "CVE-2026-126254: numeric truncation error vulnerability in Fortinet"
    url: https://vulnipulse.com/advisories/fortinet-cve-2026-126254
---

Fortinet published advisory FG-IR-26-268 for CVE-2026-126254, a numeric truncation error in the BGP (Border Gateway Protocol) daemon used by FortiOS and FortiSASE. The flaw is classified as CWE-197, the weakness category for numeric truncation errors, and Fortinet scores it at CVSS (Common Vulnerability Scoring System) 3.1 base 9.6, Critical. The CVE record was published on 2026-11-11.

## What is affected

FortiOS 8.0.0 through 8.0.1, 7.6.0 through 7.6.7, 7.4.0 through 7.4.12 and 7.2.0 through 7.2.13 are affected. FortiSASE 25.1 through 26.3.1_a is affected as well.

## Why it matters

No source reports exploitation of CVE-2026-126254 in the wild, and it is not listed in the CISA KEV (Known Exploited Vulnerabilities) catalog. A public proof-of-concept exploit does exist. The flaw sits in the routing daemon of both products, so the upgrade path depends on which FortiOS branch a device runs or which FortiSASE version a tenant is on.

## What to do

Fortinet fixed CVE-2026-126254 in FortiOS and directs users to upgrade to 8.0.2 or above, 7.6.8 or above, 7.4.13 or above, or 7.2.14 or above, matching their branch. For FortiSASE 26.3.1 and 26.3.1_a, Fortinet remediated the issue in 26.3.2 and states that customers do not need to perform any action. FortiSASE 25.1 through 26.2 are affected in all versions, and the advisory tells those customers to migrate to a fixed release. Where the installed branch or product is unclear, work from advisory FG-IR-26-268.

<!-- cspell:words Forti PSIRT -->
