---
title: N-able fixes N-central authentication bypass and internal API flaw in
  2026.3 Hotfix 3
date: 2026-11-09T22:41:32.486Z
format: news
summary: N-able's N-central 2026.3 Hotfix 3 fixes CVE-2026-86207, an
  authentication bypass reaching internal-only APIs, and CVE-2026-86206;
  on-premises customers should upgrade immediately.
description: N-central 2026.3 Hotfix 3 fixes CVE-2026-86207 and CVE-2026-86206.
  On-premises deployments should upgrade immediately; hosted instances are
  patched.
tags:
  - cve
  - authentication
impact: high
action: review
status: current
affects:
  - N-central < 2026.3.1.13 (CVE-2026-86207)
  - N-central < 2026.3.1.13 (CVE-2026-86206)
briefing:
  changed: N-able shipped N-central 2026.3 Hotfix 3, which includes fixes for
    CVE-2026-86207, an authentication bypass affecting internal-only APIs, and
    CVE-2026-86206, a flaw in the internal API access control filter.
  why: "Both flaws reach internal APIs: one bypasses authentication, and the other
    allows unauthorized access through the internal API access control filter."
  action: On-premises N-central deployments should upgrade to N-central 2026.3 HF3
    immediately; hosted N-central (NCOD) instances have already been patched.
sources:
  - title: "NVD: CVE-2026-86206"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-86206
  - title: "NVD: CVE-2026-86207"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-86207
  - title: 2026.3 HF3 Release Notes
    url: https://documentation.n-able.com/N-central/Release_Notes/GA/Content/N-central_2026.3_HF3_Release_Notes.htm
---

N-able has published N-central 2026.3 Hotfix 3, a release that includes security fixes for two Common Vulnerabilities and Exposures (CVE) records, CVE-2026-86207 and CVE-2026-86206. CVE-2026-86207 is an authentication bypass in N-central versions before 2026.3 HF3 that leads to authentication bypass in internal-only APIs. CVE-2026-86206 is a vulnerability in the N-central internal API access control filter that allows unauthorized access to internal APIs, fixed in N-central 2026.3 HF3 and 2026.4.

The two records carry different severity. CVE-2026-86207 has a CVSS (Common Vulnerability Scoring System) 4.0 base score of 7.7, rated high, while CVE-2026-86206 has a CVSS 4.0 base score of 6.9, rated medium. CVE-2026-86207 is classified as CWE-305 and CVE-2026-86206 as CWE-791, both Common Weakness Enumeration (CWE) identifiers.

## What is affected

The affected range for CVE-2026-86207 starts at version 0 and ends before 2026.3.1.13. The same range, from 0 before 2026.3.1.13, applies to CVE-2026-86206.

## Why it matters

Both flaws reach internal APIs rather than the public interface: one bypasses authentication, and the other defeats the access control filter in front of the same internal surface. N-able states it has no confirmations that CVE-2026-86206 and CVE-2026-86207 have been exploited in production environments.

## What to do

N-able advises customers running on-premises N-central deployments to upgrade to N-central 2026.3 HF3 immediately. N-central 2026.3 Hotfix 3 supersedes N-central 2026.3 Hotfix 2 (build 2026.3.1.10). The hotfix does not require agents to be upgraded to protect against CVE-2026-86206 and CVE-2026-86207. Customers on hosted N-central (NCOD) instances need no action because patches have already been applied to their environment.

<!-- cspell:words NCOD -->
