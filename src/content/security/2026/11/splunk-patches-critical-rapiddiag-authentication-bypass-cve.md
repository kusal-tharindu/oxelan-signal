---
title: Splunk patches critical RapidDiag authentication bypass, CVE-2026-76535
date: 2026-11-19T19:44:23.406Z
format: news
summary: Splunk Enterprise has a critical authentication bypass, CVE-2026-76535,
  that can let unauthenticated users issue searches as authenticated users;
  fixed versions are available.
description: Critical RapidDiag authentication bypass in Splunk Enterprise;
  upgrade to fixed releases or set a non-empty pass4SymmKey.
tags:
  - cve
  - authentication
impact: critical
action: review
status: current
affects:
  - Splunk Enterprise 10.6.0.5
  - Splunk Enterprise 10.4.0 through 10.4.4
  - Splunk Enterprise 10.2.0 through 10.2.8
  - Splunk Enterprise 10.0.0 through 10.0.11
  - Splunk Enterprise 9.4.0 through 9.4.16
briefing:
  changed: Splunk Enterprise has an authentication bypass through the RapidDiag
    REST API, CVE-2026-76535, with a CVSSv3.1 score of 9.1 Critical.
  why: An unauthenticated user could run arbitrary SPL searches through RapidDiag
    task collection as an authenticated user in affected releases.
  action: Upgrade to 10.6.1, 10.4.5, 10.2.9, 10.0.12, or 9.4.17 or higher, or set
    a non-empty pass4SymmKey where an empty shared secret is not used.
sources:
  - title: Security Vulnerabilities in Splunk Enterprise - November 2026
    url: https://advisory.splunk.com/advisories/SVD-2026-1103
---

## What changed

Splunk Enterprise has an authentication bypass in the RapidDiag REST (representational state transfer) API, tracked as CVE-2026-76535, a Common Vulnerabilities and Exposures (CVE) ID. The flaw is classified under CWE (Common Weakness Enumeration) as CWE-287, Improper Authentication, and carries a CVSS (Common Vulnerability Scoring System) v3.1 score of 9.1, Critical. Splunk says the issue exists because Enterprise accepts an empty shared secret when it authenticates RapidDiag task-collection requests.

## What is affected

In affected releases, an unauthenticated user could run arbitrary Search Processing Language (SPL) searches through RapidDiag task collection as an authenticated user. Splunk lists Splunk Enterprise 10.6.0.5 as affected and fixed in 10.6.1. It also lists 10.4.0 through 10.4.4 fixed in 10.4.5, 10.2.0 through 10.2.8 fixed in 10.2.9, 10.0.0 through 10.0.11 fixed in 10.0.12, and 9.4.0 through 9.4.16 fixed in 9.4.17.

## Why it matters in production

The advisory's wording matters because the flaw gives an unauthenticated path into authenticated search execution. A CVSS score of 9.1 places it in the Critical range.

## What to do

Splunk advises upgrading Splunk Enterprise to 10.6.1, 10.4.5, 10.2.9, 10.0.12, and 9.4.17 or higher. If an empty shared secret is not used, Splunk's workaround is to set a non-empty pass4SymmKey in server.conf and restart Splunk Enterprise. The same value must be used on each node.

<!-- cspell:words Symm -->
