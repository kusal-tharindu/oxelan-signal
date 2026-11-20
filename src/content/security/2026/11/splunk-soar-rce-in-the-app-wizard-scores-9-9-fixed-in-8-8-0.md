---
title: Splunk SOAR RCE in the App Wizard scores 9.9, fixed in 8.8.0
date: 2026-11-19T19:42:31.683Z
format: news
summary: Splunk SOAR releases below 8.8.0 carry CVE-2026-131253, a Critical
  remote code execution flaw in the App Wizard that scores 9.9; the fix is
  8.8.0.
description: CVE-2026-131253 is a Critical RCE in the Splunk SOAR App Wizard,
  scored 9.9. Versions below 8.8.0 are affected; 8.8.0 is the fix.
tags:
  - cve
  - security-updates
impact: critical
action: review
status: current
affects:
  - Splunk SOAR versions below 8.8.0
briefing:
  changed: CVE-2026-131253 is a remote code execution flaw in the Splunk SOAR App
    Wizard, rated Critical with a CVSS score of 9.9.
  why: Splunk lists Splunk SOAR versions below 8.8.0 as affected, and the flaw is
    one where code runs rather than one where data is only read.
  action: Upgrade Splunk SOAR to 8.8.0 or higher, the fix version given in the
    advisory.
sources:
  - title: Security Vulnerabilities in Splunk SOAR - November 2026
    url: https://advisory.splunk.com/advisories/SVD-2026-1108
---

CVE-2026-131253 is a remote code execution (RCE) flaw in the App Wizard of Splunk SOAR, the security orchestration, automation and response product. Splunk files the weakness under CWE-94, the class for code injection.

## What is affected

Splunk lists Splunk SOAR versions below 8.8.0 as affected by CVE-2026-131253. The fix version given in the same entry is 8.8.0. The App Wizard is the component the advisory names for this flaw.

## Why it matters

Remote code execution is the class of flaw in which an attacker's code runs on the target, rather than one where data is only read or altered. Splunk rates this instance Critical and gives it a CVSS (Common Vulnerability Scoring System) score of 9.9. CVSS scores run on a bounded scale, and 9.9 sits near the top of it.

## What to do

Splunk's remedy is to upgrade Splunk SOAR to version 8.8.0 or higher. An instance that stays below 8.8.0 remains inside the affected range that the advisory lists for this CVE.
