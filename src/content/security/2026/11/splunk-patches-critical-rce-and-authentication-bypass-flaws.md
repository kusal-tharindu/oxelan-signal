---
title: Splunk patches critical RCE and authentication bypass flaws in Enterprise
  Security and Splunk Enterprise
date: 2026-11-19T23:43:24.389Z
format: news
summary: Splunk has released fixes for a critical remote code execution flaw in
  Enterprise Security and authentication bypasses in Splunk Enterprise, all
  rated critical.
description: Splunk fixed a critical RCE in Enterprise Security 8.7.0 and
  authentication bypasses in Splunk Enterprise; both products need an upgrade.
tags:
  - cve
  - security-updates
impact: critical
action: review
status: current
affects:
  - Splunk Enterprise Security below 8.7.0
  - Splunk Enterprise below 10.6.1, 10.4.5, 10.2.9, 10.0.12, and 9.4.17
  - Splunk Enterprise below 10.4.5, 10.2.9, 10.0.12, and 9.4.17
briefing:
  changed: Splunk published fixes for a remote code execution vulnerability in
    Splunk Enterprise Security and for authentication bypasses in Splunk
    Enterprise, each rated critical.
  why: Both Splunk Enterprise issues are authentication bypasses reached through
    REST API endpoints, and the Enterprise Security flaw allows remote code
    execution. According to SecurityWeek, that flaw can be exploited by an
    attacker with the ess_admin role by combining lookup file upload and
    Configuration Checker functionality.
  action: Upgrade Splunk Enterprise Security to 8.7.0 or higher, and move Splunk
    Enterprise to 10.4.5, 10.2.9, 10.0.12, or 9.4.17, which fix both
    CVE-2026-76535 and CVE-2026-76536.
sources:
  - title: Security Vulnerabilities in Splunk Enterprise - November 2026
    url: https://advisory.splunk.com/advisories/SVD-2026-1103
  - title: Security Vulnerabilities in Splunk Enterprise Security - November 2026
    url: https://advisory.splunk.com/advisories/SVD-2026-1106
  - title: "SecurityWeek: Splunk Patches Nearly 140 Flaws Across Three Core Products"
    url: https://www.securityweek.com/splunk-patches-nearly-140-flaws-across-three-core-products/
---

Splunk has published fixes for critical vulnerabilities in Splunk Enterprise and Splunk Enterprise Security. CVE-2026-131202 is a remote code execution (RCE) flaw, meaning an attacker can run their own code on the server, and it stems from a path traversal weakness (CWE-22) in the Splunk Enterprise Security REST API (the HTTP interface the product exposes for automation). Splunk Enterprise also carries authentication bypasses: CVE-2026-76535 through the RapidDiag REST API and CVE-2026-76536 through the Cluster Configuration REST API. CVE-2026-131202 and CVE-2026-76535 have a CVSS (Common Vulnerability Scoring System) v3.1 base score of 9.1, and CVE-2026-76536 scores 9.4.

## What is affected

CVE-2026-131202 affects Splunk Enterprise Security versions below 8.7.0. CVE-2026-76535 affects Splunk Enterprise versions below 10.6.1, 10.4.5, 10.2.9, 10.0.12, and 9.4.17, while CVE-2026-76536 affects versions below 10.4.5, 10.2.9, 10.0.12, and 9.4.17.

## Why it matters

According to SecurityWeek, CVE-2026-131202 can be exploited by an attacker with the ess_admin role by combining lookup file upload and Configuration Checker functionality. The same report says Splunk announced patches for nearly 140 vulnerabilities in its Enterprise, Enterprise Security, and SOAR (security orchestration, automation, and response) products, and that Enterprise received fixes for 38 security defects, including two critical and 13 high-severity flaws. It adds that Enterprise Security and the Splunk App for PCI Compliance version 8.7.0 patches 42 vulnerabilities, and that Splunk makes no mention of any of these defects being exploited in the wild.

## What to do

Upgrade Splunk Enterprise Security to 8.7.0 or higher. Splunk lists 10.6.1 as a fixed release for CVE-2026-76535 and 10.4.5, 10.2.9, 10.0.12, and 9.4.17 as fixed releases for both CVE-2026-76535 and CVE-2026-76536. Choose the release that matches the branch you run and follow the vendor advisory.
