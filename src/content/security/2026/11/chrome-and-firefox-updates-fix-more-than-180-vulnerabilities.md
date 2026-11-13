---
title: Chrome and Firefox updates fix more than 180 vulnerabilities
date: 2026-11-12T14:46:10.519Z
format: news
summary: SecurityWeek reports Chrome and Firefox security updates resolving more
  than 180 vulnerabilities; the Chrome records cited here include a critical
  use-after-free.
description: Chrome and Firefox security updates resolve more than 180
  vulnerabilities, per SecurityWeek; the cited Chrome CVE records detail
  use-after-free and Skia flaws.
tags:
  - security-updates
  - cve
impact: critical
action: review
status: current
affects:
  - Google Chrome prior to 156.0.8078.73
  - Mozilla Firefox
briefing:
  changed: According to SecurityWeek, Google and Mozilla released Chrome and
    Firefox security updates that resolve more than 180 vulnerabilities.
  why: The cited Chrome records cover use-after-free flaws in FileSystem, FileAPI
    and Layout and an integer overflow in Skia in Chrome prior to 156.0.8078.73,
    scored 9.6 critical for CVE-2026-118306 and 8.8 high for the others.
  action: Update Chrome to 156.0.8078.73, the fixed release listed for the cited
    Chrome flaws, and move Firefox to Firefox 160.
sources:
  - title: "NVD: CVE-2026-118306"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-118306
  - title: "NVD: CVE-2026-118331"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-118331
  - title: "NVD: CVE-2026-118344"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-118344
  - title: "NVD: CVE-2026-118348"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-118348
  - title: "SecurityWeek: Chrome, Firefox Updates Patch Over 180 Vulnerabilities"
    url: https://www.securityweek.com/chrome-firefox-updates-patch-180-vulnerabilities/
---

## What changed

According to SecurityWeek, Google and Mozilla have released Chrome and Firefox security updates that resolve more than 180 vulnerabilities. The report says the Chrome refresh fixes 83 security defects, including five critical-severity use-after-free issues. It adds that Firefox 160 patches 99 vulnerabilities, including 57 high-severity security weaknesses. The latest Chrome update is rolling out as versions 157.0.8103.78/.79 for Windows and macOS, and as version 157.0.8103.78 for Linux, the report says.

## The Chrome records

The Chrome CVE (Common Vulnerabilities and Exposures) records cited here cover use-after-free flaws in FileSystem, FileAPI and Layout and an integer overflow in Skia, each affecting Google Chrome prior to 156.0.8078.73. CVE-2026-118306, the FileSystem use-after-free, carries a CVSS (Common Vulnerability Scoring System) v3.1 base score of 9.6 and a critical rating. CVE-2026-118331, CVE-2026-118344 and CVE-2026-118348 each carry a base score of 8.8.

The records differ on where the code runs: CVE-2026-118306 and CVE-2026-118331 describe a remote attacker executing arbitrary code outside the sandbox, while CVE-2026-118344 describes execution inside the sandbox. CVE-2026-118348 says only that an attacker could potentially execute arbitrary code outside the sandbox.

## Why it matters

All of the cited records describe the attack as arriving through a crafted HTML page. The report adds that Google and Mozilla make no mention of any of these vulnerabilities being exploited in the wild.

## What to do

The CVE records list 156.0.8078.73 as the fixed release for all the cited Chrome flaws. Firefox fixes ship in Firefox 160.

<!-- cspell:words Skia -->
