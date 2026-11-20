---
title: Citrix NetScaler Console authentication bypass scores 9.3 critical
date: 2026-11-20T14:46:36.448Z
format: news
summary: CVE-2026-120869 lets an unauthenticated attacker reach restricted
  resources on Citrix NetScaler Console versions before 14.1-74.34.
description: Unauthenticated authentication bypass in Citrix NetScaler Console,
  CVSS 9.3 critical. Versions before 14.1-74.34 are affected; Citrix published
  CTX697320.
tags:
  - cve
  - authentication
impact: critical
action: review
status: current
affects:
  - Citrix NetScaler Console < 14.1-74.34
briefing:
  changed: CVE-2026-120869 is an authentication bypass in Citrix NetScaler Console
    with a CVSS 4.0 base score of 9.3, affecting versions before 14.1-74.34.
  why: An unauthenticated attacker can reach restricted resources on the
    appliance, and CISA's SSVC assessment lists exploitation as none and
    automatable as yes.
  action: Upgrade Citrix NetScaler Console to 14.1-74.34 and follow Citrix
    knowledge base article CTX697320.
sources:
  - title: "NVD: CVE-2026-120869"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-120869
---

CVE-2026-120869 is an authentication bypass in Citrix NetScaler Console that lets an unauthenticated attacker access restricted resources on the appliance. The CVE record was published on November 12, 2026.

## Severity and affected versions

The record assigns a CVSS (Common Vulnerability Scoring System) 4.0 base score of 9.3, in the critical range. It classifies the flaw as CWE-287 (Common Weakness Enumeration), improper authentication. Citrix NetScaler Console versions before 14.1-74.34 are affected.

## Why it matters

Because the bypass requires no credentials, controls that depend on valid accounts do not cover it. CISA's SSVC (Stakeholder-Specific Vulnerability Categorization) assessment lists exploitation as none and automatable as yes. The exploitation status is a point-in-time assessment, so the record is the place to check whether that changes.

## What to do

Upgrade Citrix NetScaler Console to 14.1-74.34; versions before it are listed as affected. Read Citrix knowledge base article CTX697320, which the record references for this flaw. Track the CVE record for any change to the current exploitation status of none.

<!-- cspell:words automatable -->
