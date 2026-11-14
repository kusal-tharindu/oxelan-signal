---
title: Citrix patches critical NetScaler memory overflow flaw
date: 2026-11-13T10:40:46.516Z
format: news
summary: Citrix has fixed a critical memory overflow in NetScaler ADC and
  NetScaler Gateway, tracked as CVE-2026-120868, with patches available for the
  affected release trains.
description: Citrix fixed CVE-2026-120868, a critical memory overflow in
  NetScaler ADC and Gateway Packet Processing. Patches are available.
tags:
  - cve
  - security-updates
impact: critical
action: review
status: current
affects:
  - NetScaler ADC < 14.1-73.57
  - NetScaler ADC < 13.1-64.39
  - NetScaler ADC < 14.1-73.58 FIPS
  - NetScaler ADC < 13.1-37.293 FIPS and NDcPP
  - NetScaler Gateway < 14.1-73.57
  - NetScaler Gateway < 13.1-64.39
briefing:
  changed: CVE-2026-120868 is a critical memory overflow in Packet Processing in
    NetScaler ADC and NetScaler Gateway.
  why: The flaw has a CVSS v4.0 base score of 9.3, and a memory overflow can cause
    unpredictable behavior or denial of service.
  action: "Upgrade to the fixed release for your branch: 14.1-73.57 or later for
    NetScaler ADC and NetScaler Gateway, 13.1-64.39 or later for 13.1,
    14.1-73.58 FIPS or later for 14.1-FIPS ADC, and 13.1-37.293 or later for
    13.1-FIPS and 13.1-NDcPP ADC."
sources:
  - title: "NVD: CVE-2026-120868"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-120868
  - title: "The Hacker News: Citrix Patches 12 NetScaler and Secure Access Client
      Flaws, Including Authentication Bypass"
    url: https://thehackernews.com/2026/11/citrix-patches-12-netscaler-and-secure.html
---

The Common Vulnerabilities and Exposures (CVE) ID CVE-2026-120868 covers a memory overflow in Packet Processing in NetScaler ADC and NetScaler Gateway. It has a CVSS (Common Vulnerability Scoring System) v4.0 base score of 9.3.

According to The Hacker News, Citrix has released patches for multiple critical security flaws in NetScaler ADC, NetScaler Gateway, and NetScaler Console. The report says CVE-2026-120868 is fixed in NetScaler ADC and NetScaler Gateway 14.1-73.57 and later releases. It also lists 13.1-64.39 and later releases of 13.1 as fixed.

## What is affected

Affected NetScaler ADC versions include those before 14.1-73.57, before 13.1-64.39, before 14.1-73.58 FIPS, and before 13.1-37.293 FIPS and NDcPP. Affected NetScaler Gateway versions include those before 14.1-73.57 and before 13.1-64.39.

## Why it matters

The overflow can lead to unpredictable or erroneous behavior or denial of service. The report says Citrix is not aware of any exploits for any of the announced vulnerabilities. The report also says the updates follow a deeper codebase review using artificial intelligence (AI)-assisted code analysis.

## What to do

Upgrade NetScaler ADC and NetScaler Gateway to 14.1-73.57 or later. On 13.1, upgrade to 13.1-64.39 or later releases of 13.1. For NetScaler ADC 14.1-FIPS, upgrade to 14.1-73.58 FIPS or later releases of 14.1-FIPS. For NetScaler ADC 13.1-FIPS and 13.1-NDcPP, upgrade to 13.1-37.293 or later.

<!-- cspell:words FIPS -->
