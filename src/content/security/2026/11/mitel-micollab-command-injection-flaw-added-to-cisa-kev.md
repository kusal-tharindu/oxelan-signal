---
title: Mitel MiCollab command injection flaw added to CISA KEV catalog
date: 2026-11-26T00:51:23.252Z
format: news
summary: CVE-2026-133323 in the AWV component of Mitel MiCollab allows
  unauthenticated command injection, and CISA lists active exploitation with a
  November 28, 2026 remediation due date.
description: CVE-2026-133323 lets an unauthenticated attacker inject commands in
  Mitel MiCollab. Mitel patched 10.3 (10.3.0.18); CISA set a November 28 due
  date.
tags:
  - cve
  - incident-response
impact: critical
action: patch-now
status: current
affects:
  - Mitel MiCollab 10.3 (10.3.0.18) and earlier
briefing:
  changed: CVE-2026-133323, an unauthenticated command injection flaw in the AWV
    component of Mitel MiCollab, was added to CISA's KEV catalog on November 25,
    2026.
  why: Mitel rates the flaw critical at CVSS 10.0, and CISA's SSVC assessment
    lists exploitation as active.
  action: Upgrade to release 10.3 (10.3.0.18) and apply the vendor patch, or move
    to a later release; restrict external access to the AWV component where
    patching is delayed.
sources:
  - title: Mitel Product Security Advisory MISA-2026-0012
    url: https://www.mitel.com/support/security-advisories/mitel-product-security-advisory-misa-2026-0012
  - title: "NVD: CVE-2026-133323"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-133323
  - title: "CISA: Known Exploited Vulnerabilities catalog"
    url: https://www.cisa.gov/known-exploited-vulnerabilities-catalog
---

Mitel MiCollab contains an unauthenticated command injection flaw in its Audio, Web, and Video Conferencing (AWV) component, and CISA has added it to the Known Exploited Vulnerabilities (KEV) catalog. The flaw is CVE-2026-133323, which Mitel tracks as MTLVULN-1864 and classifies as a CWE-78 OS command injection weakness. The vendor advisory MISA-2026-0012 was first issued on November 16, 2026 and last updated on November 24, 2026 as revision 2.0.

## What is affected

Mitel MiCollab versions 10.3 (10.3.0.18) and earlier are affected. Mitel rates the issue critical with a CVSS (Common Vulnerability Scoring System) 3.1 base score of 10.0. NVD (National Vulnerability Database) records a CVSS 3.1 base score of 9.8, also rated critical.

## Why it matters

An unauthenticated attacker could conduct a blind command injection attack because parameters are not sufficiently sanitized. A successful exploit could allow an attacker to execute arbitrary commands within the context of the system. CISA's SSVC (Stakeholder-Specific Vulnerability Categorization) assessment lists exploitation as active and automatable as yes. Known ransomware campaign use is listed as unknown.

## What to do

Mitel provided a patch for release 10.3 (10.3.0.18) that addresses CVE-2026-133323, and customers should upgrade to that release and apply the patch or upgrade to a later release. Instructions for applying the patch are in Mitel Knowledge Base article KB000129195. Where the patch cannot be applied promptly, Mitel recommends restricting external access to the AWV component as a mitigation. CISA added the flaw to the KEV catalog on November 25, 2026 and set a remediation due date of November 28, 2026, and the entry requires forensic triage under Binding Operational Directive (BOD) 26-04.

<!-- cspell:words Mitel Collab MISA MTLVULN automatable -->
