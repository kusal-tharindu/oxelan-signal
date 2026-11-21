---
title: F5 BIG-IP APM flaw allows unauthenticated remote code execution
date: 2026-11-20T14:51:49.190Z
format: news
summary: An unauthenticated attacker can reach remote code execution through a
  heap-based buffer overflow in F5 BIG-IP APM when it is configured as an OAuth
  Authorization Server, and CISA's assessment lists exploitation as active.
description: CVE-2026-94127 in F5 BIG-IP APM allows unauthenticated RCE when APM
  runs as an OAuth Authorization Server. Hotfixes are available.
tags:
  - cve
  - incident-response
impact: critical
action: patch-now
status: current
affects:
  - BIG-IP APM 21.1.0 before Hotfix-BIGIP-21.1.0.2.0.30.22-ENG
  - BIG-IP APM 17.5.0 through 17.5.1 before Hotfix-BIGIP-17.5.1.9.0.160.12-ENG
  - BIG-IP APM 17.1.0 through 17.1.3 before Hotfix-BIGIP-17.1.3.5.0.41.14-ENG
briefing:
  changed: F5 published CVE-2026-94127, a heap-based buffer overflow in BIG-IP APM
    that is present when APM is configured as an OAuth Authorization Server, and
    shipped hotfixes for the affected branches.
  why: An unauthenticated attacker can reach remote code execution. CISA's
    assessment lists exploitation as active and automatable as yes, with a
    remediation due date of 2026-09-25.
  action: "Upgrade to the hotfix for your branch:
    Hotfix-BIGIP-21.1.0.2.0.30.22-ENG, Hotfix-BIGIP-17.5.1.9.0.160.12-ENG or
    Hotfix-BIGIP-17.1.3.5.0.41.14-ENG."
sources:
  - title: "NVD: CVE-2026-94127"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-94127
  - title: "CISA: Known Exploited Vulnerabilities catalog"
    url: https://www.cisa.gov/known-exploited-vulnerabilities-catalog
---

F5 BIG-IP APM (Access Policy Manager) contains a heap-based buffer overflow tracked as CVE-2026-94127 in the Common Vulnerabilities and Exposures system. The flaw is only present when BIG-IP APM is configured as an OAuth Authorization Server. An unauthenticated attacker can use it to perform remote code execution (RCE). F5 published the CVE record on 2026-09-22.

## What is affected

The affected ranges are BIG-IP APM 21.1.0 before Hotfix-BIGIP-21.1.0.2.0.30.22-ENG, BIG-IP APM 17.5.0 through 17.5.1 before Hotfix-BIGIP-17.5.1.9.0.160.12-ENG, and BIG-IP APM 17.1.0 through 17.1.3 before Hotfix-BIGIP-17.1.3.5.0.41.14-ENG. CISA's Known Exploited Vulnerabilities (KEV) catalog lists the issue as "F5 BIG-IP APM Heap-based Buffer Overflow Vulnerability".

## Why it matters

The CVSS (Common Vulnerability Scoring System) v3.1 base score is 9.8, and the CVSS v4.0 base score is 9.3. CISA's SSVC (Stakeholder-Specific Vulnerability Categorization) assessment lists exploitation as active and automatable as yes. This is a data plane issue with no control plane exposure, and the BIG-IP system in Appliance mode is also vulnerable.

## What to do

CISA added CVE-2026-94127 to the KEV catalog on 2026-09-22 and set a remediation due date of 2026-09-25. F5 fixed the flaw in BIG-IP 21.1.x with Hotfix-BIGIP-21.1.0.2.0.30.22-ENG, in 17.5.x with Hotfix-BIGIP-17.5.1.9.0.160.12-ENG, and in 17.1.x with Hotfix-BIGIP-17.1.3.5.0.41.14-ENG. For temporary mitigation to allow for proactive forensic triage, CISA points to the vendor-provided iRule.

<!-- cspell:words Hotfixes hotfixes automatable -->
