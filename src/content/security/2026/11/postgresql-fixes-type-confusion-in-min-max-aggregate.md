---
title: PostgreSQL fixes type confusion in min/max aggregate optimization
date: 2026-11-19T19:39:59.981Z
format: news
summary: CVE-2026-116331 is a type confusion in PostgreSQL's min/max aggregate
  optimization that allows an object creator to execute code as the database's
  operating system user.
description: Type confusion in PostgreSQL min/max aggregate optimization lets an
  object creator execute code as the operating system user running the database.
tags:
  - cve
  - security-updates
impact: high
action: review
status: current
affects:
  - PostgreSQL before 18.7
  - PostgreSQL before 17.12
  - PostgreSQL before 16.16
  - PostgreSQL before 15.20
  - PostgreSQL before 14.25
briefing:
  changed: CVE-2026-116331 is a type confusion in PostgreSQL's min/max aggregate
    optimization; the record was published on November 12, 2026.
  why: The flaw gives an object creator code execution as the operating system
    user running the database, and it carries a CVSS base score of 8.8 (HIGH).
  action: "Upgrade to the fixed release for your branch: the affected ranges end
    at 18.7, 17.12, 16.16, 15.20, and 14.25, and PostgreSQL 14.25 is listed as
    fixing CVE-2026-116331."
sources:
  - title: "NVD: CVE-2026-116331"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-116331
  - title: "PostgreSQL: Release Notes"
    url: https://www.postgresql.org/docs/release/14.25/
  - title: PostgreSQL min/max aggregate type confusion executes arbitrary code
    url: https://www.postgresql.org/support/security/CVE-2026-116331/
---

PostgreSQL has published a fix for CVE-2026-116331, a type confusion in the min/max aggregate optimization that allows an object creator to execute arbitrary code as the operating system user running the database. The CVSS base score is 8.8 (HIGH), and the weakness is classified as CWE-843, type confusion. The record was published on November 12, 2026.

## What is affected

Versions before PostgreSQL 18.7, 17.12, 16.16, 15.20, and 14.25 are affected. The affected component is the min/max aggregate optimization, and the flaw is reachable by an object creator.

## Why it matters

Exploitation runs code as the operating system user that runs the database. The fix disallows these aggregate declarations in the master branch and adds a plan-time check in released branches, so a plan is not generated when the types do not match. The CISA Stakeholder-Specific Vulnerability Categorization (SSVC) assessment lists exploitation as none and automatable as no.

## What to do

Upgrade to the fixed release for your branch: the affected ranges end at 18.7, 17.12, 16.16, 15.20, and 14.25. PostgreSQL 14.25 is listed as fixing CVE-2026-116331. Administrators on any of the affected branches need the release that ends their branch's range.

<!-- cspell:words automatable -->
