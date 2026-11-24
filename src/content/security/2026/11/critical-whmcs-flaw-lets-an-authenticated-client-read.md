---
title: Critical WHMCS flaw lets an authenticated client read database credentials
date: 2026-11-24T11:39:28.141Z
format: news
summary: WHMCS released 8.13.8, 9.0.10 and 9.1.2 for CVE-2026-93700, which lets
  an authenticated client read configuration files, including database
  credentials, and execute code on the server.
description: CVE-2026-93700 lets an authenticated WHMCS client read database
  credentials and run code. Fixed in 8.13.8, 9.0.10 and 9.1.2.
tags:
  - cve
  - security-updates
impact: critical
action: review
status: current
affects:
  - WHMCS 8.0.0 through 8.13.7
  - WHMCS 9.0.0 through 9.0.9
  - WHMCS 9.1.0 through 9.1.1
briefing:
  changed: WHMCS released 8.13.8, 9.0.10 and 9.1.2 to fix CVE-2026-93700, a
    vulnerability in the processing of client-supplied data in email campaigns.
  why: An authenticated client could potentially read sensitive configuration
    files on the WHMCS host, including database credentials, and execute code on
    the server; the CVSS 3.1 base score is 9.0.
  action: Upgrade to 8.13.8, 9.0.10 or 9.1.2, and remove any planned or ongoing
    email campaigns and clear the template cache as the vendor advises.
sources:
  - title: "NVD: CVE-2026-93700"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-93700
  - title: CVE-2026-93700 - WHMCS Security Update 2026-11-23 | Other
    url: https://help.whmcs.com/m/125386/l/2151351-cve-2026-93700-whmcs-security-update-2026-11-23
---

WHMCS, a billing and support platform for hosting providers, has a critical vulnerability in how it processes client-supplied data in email campaigns. The CVE record assigns it a CVSS (Common Vulnerability Scoring System) 3.1 base score of 9.0.

## What an authenticated client can reach

An authenticated WHMCS client could potentially leverage this flaw to read sensitive configuration files on the WHMCS host, including database credentials, and to execute code on the server. The record classifies the weakness as CWE-1336 (Common Weakness Enumeration). The entry was published on November 23, 2026.

## Affected versions

The affected ranges are WHMCS 8.0.0 through 8.13.7, WHMCS 9.0.0 through 9.0.9 and WHMCS 9.1.0 through 9.1.1.

## Why it matters in production

A configuration file on a billing host holds the credentials that reach its database, and the same flaw also carries code execution on the server. It is reachable by an authenticated client rather than an anonymous visitor. Fixed releases exist for each affected range, so the exposure ends with an upgrade.

## What to do

Upgrade to WHMCS 8.13.8, WHMCS 9.0.10 or WHMCS 9.1.2, matching the release line you run. WHMCS also advises removing any planned or ongoing email campaigns as a mitigation. Clearing the template cache is part of the same guidance.

<!-- cspell:words WHMCS -->
