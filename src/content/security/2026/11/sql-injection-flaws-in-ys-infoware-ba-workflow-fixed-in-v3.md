---
title: SQL injection flaws in YS-infoware BA-Workflow fixed in v3.6.2.7
date: 2026-11-12T07:51:27.796Z
format: news
summary: SQL injection flaws in YS-infoware BA-Workflow are tracked as
  CVE-2026-113405, CVE-2026-113406 and CVE-2026-113407, and the advisory names
  v3.6.2.7 or later as the fix.
description: "SQL injection flaws in YS-infoware BA-Workflow: CVE-2026-113405,
  CVE-2026-113406 and CVE-2026-113407, fixed in v3.6.2.7 or later."
tags:
  - cve
  - security-updates
impact: high
action: review
status: current
affects:
  - BA-Workflow versions prior to v3.6 (CVE-2026-113405)
  - BA-Workflow versions prior to 3.6 (CVE-2026-113406)
  - BA-Workflow versions prior to 3.6.2.7 (CVE-2026-113407)
briefing:
  changed: SQL injection flaws in YS-infoware BA-Workflow are tracked as
    CVE-2026-113405, CVE-2026-113406 and CVE-2026-113407, all published on
    2026-10-20.
  why: The records rate the flaws High, with a CVSS 4.0 base score of 8.7 and a
    CVSS 3.1 base score of 8.8, and the affected ranges stop at different
    version ceilings.
  action: Update BA-Workflow to version v3.6.2.7 or later, the release the
    advisory gives as the fix for all of the listed identifiers.
sources:
  - title: "NVD: CVE-2026-113405"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-113405
  - title: "NVD: CVE-2026-113406"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-113406
  - title: "NVD: CVE-2026-113407"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-113407
  - title: YS-infoware｜BA-Workflow - 3 Vulnerabilities
    url: https://www.twcert.org.tw/en/cp-139-11299-0cbfd-2.html
---

## What changed

SQL injection vulnerabilities in YS-infoware BA-Workflow are tracked as CVE-2026-113405, CVE-2026-113406 and CVE-2026-113407. The records were published on 2026-10-20 and each is classified as CWE-89, the Common Weakness Enumeration entry for SQL injection. Under CVSS (Common Vulnerability Scoring System) 3.1, CVE-2026-113405 and CVE-2026-113406 score 8.8, and under CVSS 4.0 they score 8.7, both rated High. CVE-2026-113407 carries the same pair of scores, 8.8 and 8.7, with the same High rating.

## What is affected

The affected ceilings are given separately for each identifier. CVE-2026-113405 affects BA-Workflow versions prior to v3.6. CVE-2026-113406 affects versions prior to 3.6. CVE-2026-113407 affects versions prior to 3.6.2.7.

## Why it matters

Every record names the same product and the same weakness class. The affected ceilings differ, while the fix named by the advisory is a single later release.

## What to do

Update to version v3.6.2.7 or later, which the advisory gives as the fix for CVE-2026-113405, CVE-2026-113406 and CVE-2026-113407. The advisory was publicly released on 2026-10-20, the same date carried by the CVE records.

<!-- cspell:words infoware -->
