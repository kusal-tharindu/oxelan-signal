---
title: IBM Aspera Faspex authorization flaw is under active exploitation
date: 2026-11-10T00:40:44.894Z
format: news
summary: CISA reports active exploitation of CVE-2026-123218, a critical
  authorization flaw in IBM Aspera Faspex 5.0.0 through 5.0.19, fixed in 5.0.19
  PL1.
description: CISA reports active exploitation of CVE-2026-123218 in IBM Aspera
  Faspex 5.0.0 through 5.0.19; 5.0.19 PL1 fixes it.
tags:
  - cve
  - authentication
impact: critical
action: patch-now
status: current
affects:
  - IBM Aspera Faspex 5.0.0 through 5.0.19
briefing:
  changed: CISA reports active exploitation of CVE-2026-123218, an incorrect
    authorization flaw in IBM Aspera Faspex 5.0.0 through 5.0.19.
  why: An authenticated user can craft a specific message to bypass authorization
    and gain full administrative privileges, and the flaw is rated 9.8 critical.
  action: Upgrade IBM Aspera Faspex to 5.0.19 PL1 and apply mitigations in
    accordance with vendor instructions, as CISA requires.
sources:
  - title: "Security Bulletin: IBM Aspera Faspex has addressed a vulnerability that
      could allow authorization bypass"
    url: https://www.ibm.com/support/pages/node/7295921
  - title: "NVD: CVE-2026-123218"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-123218
  - title: "CISA: Known Exploited Vulnerabilities catalog"
    url: https://www.cisa.gov/known-exploited-vulnerabilities-catalog
---

The U.S. Cybersecurity and Infrastructure Security Agency (CISA) reports active exploitation of an authorization flaw in IBM Aspera Faspex 5.0.0 through 5.0.19. The flaw is tracked as CVE-2026-123218, a Common Vulnerabilities and Exposures (CVE) identifier. CISA added the flaw to its Known Exploited Vulnerabilities (KEV) catalog on November 9, 2026.

## What is affected

The affected product is IBM Aspera Faspex, and the affected versions are 5.0.0 through 5.0.19. The vulnerability is classified as CWE (Common Weakness Enumeration) 863, incorrect authorization. An authenticated user can craft a specific message to bypass authorization and gain full administrative privileges.

## Why it matters

The CVSS (Common Vulnerability Scoring System) base score is 9.8, critical. The fixed release is IBM Aspera Faspex 5.0.19 PL1, which fixes CVE-2026-123218. The KEV entry sets a CISA remediation due date of November 12, 2026.

## What to do

For deployments in the affected range, upgrade to IBM Aspera Faspex 5.0.19 PL1. CISA requires applying mitigations in accordance with vendor instructions.

<!-- cspell:words Aspera Faspex -->
