---
title: SAP Gateway flaw lets an unauthenticated attacker be treated as an
  internal application server
date: 2026-11-11T00:13:58.253Z
format: news
summary: CVE-2026-89103 in SAP Gateway carries a CVSS v3.1 base score of 10.0
  and lets an unauthenticated network attacker be treated as an internal
  application server.
description: "CVE-2026-89103: a critical SAP Gateway ACL flaw lets
  unauthenticated network attackers be treated as internal application servers."
tags:
  - cve
  - security-updates
impact: critical
action: review
status: current
affects:
  - KRNL64NUC 7.22
  - 7.22EXT
  - KRNL64UC 7.22
  - "7.53"
  - "8.04"
  - KERNEL 7.22
  - "7.54"
  - "7.77"
  - "7.93"
  - "9.16"
  - "9.20"
  - "9.21"
briefing:
  changed: CVE-2026-89103 is a vulnerability in SAP Gateway, where the default
    Access Control List is activated with high privileges and an external
    attacker can be categorized as an internal application server.
  why: An unauthenticated attacker with network access could perform unauthorized
    actions with high impact on confidentiality, integrity, and availability.
  action: Apply SAP Security Note 3798345, which SAP released as the fix for
    CVE-2026-89103.
sources:
  - title: "NVD: CVE-2026-89103"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-89103
---

CVE-2026-89103 is a vulnerability in SAP Gateway. The CVE record classifies the flaw as CWE-863 (Incorrect Authorization). The publication date is 2026-11-10.

SAP Gateway activates the default Access Control List with high privileges, and that configuration allows an external attacker to be categorized as an internal application server. An unauthenticated attacker who can reach SAP Gateway over the network could perform unauthorized actions, with high impact on confidentiality, integrity, and availability. The CVSS (Common Vulnerability Scoring System) v3.1 base score is 10.0, which the record labels Critical.

The affected SAP Gateway versions are KRNL64NUC 7.22, 7.22EXT, KRNL64UC 7.22, 7.53, 8.04, KERNEL 7.22, 7.54, 7.77, 7.93, 9.16, 9.20, and 9.21. SAP released the fix for CVE-2026-89103 in SAP Security Note 3798345.

## What to do

Apply SAP Security Note 3798345, which SAP released as the fix for CVE-2026-89103. Installations running the affected versions listed above should use that note as the remediation reference.

<!-- cspell:words KRNL -->
