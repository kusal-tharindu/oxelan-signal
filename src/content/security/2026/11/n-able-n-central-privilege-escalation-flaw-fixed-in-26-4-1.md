---
title: N-able N-central privilege escalation flaw fixed in 26.4.1
date: 2026-11-12T06:39:54.680Z
format: news
summary: CVE-2026-125879 is an incorrect privilege assignment flaw in N-able
  N-central before 26.4.1, rated 8.6 High, and N-able's fix is 26.4.1.
description: CVE-2026-125879 is CWE-266 in N-able N-central before 26.4.1,
  scoring 8.6 High on CVSS v4.0.
tags:
  - cve
  - incident-response
impact: high
action: patch-now
status: current
affects:
  - N-central before 26.4.1
briefing:
  changed: CVE-2026-125879 is an incorrect privilege assignment vulnerability in
    N-able N-central that allows privilege escalation, and affected versions are
    before 26.4.1.
  why: The record rates the flaw 8.6 High and classifies it as incorrect privilege
    assignment, so any N-central installation left on an affected version
    carries a published privilege escalation issue.
  action: Upgrade to N-central 26.4.1, the vendor fix, and follow N-able's
    recommendation that unpatched N-central servers stay offline.
sources:
  - title: "NVD: CVE-2026-125879"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-125879
  - title: CVE-2026-125879 - Vulnerability Details - OpenCVE
    url: https://app.opencve.io/cve/CVE-2026-125879
  - title: N-able takes cloud service offline, says customers should follow suit,
      following mass vulnerability disclosure
    url: https://www.cyberdaily.au/security/14432-n-able-takes-cloud-service-offline-says-customers-should-follow-suit-following-mass-vulnerability-disclosure
---

N-able N-central contains an incorrect privilege assignment vulnerability that allows privilege escalation, tracked as CVE-2026-125879 (Common Vulnerabilities and Exposures). The affected releases are N-central versions before 26.4.1. N-able's fix is N-central 26.4.1.

The flaw is classified as CWE-266 (Common Weakness Enumeration: incorrect privilege assignment). It carries a CVSS (Common Vulnerability Scoring System) v4.0 base score of 8.6, rated High. The record was published on November 10, 2026, and the vulnerability is not listed in CISA's Known Exploited Vulnerabilities (KEV) catalog.

## Why it matters

An incorrect privilege assignment means the software grants rights it did not intend to grant, which here allows privilege escalation. The disclosure arrived alongside a wider response: N-able took its hosted N-central environment offline on November 9 after an independent researcher published details of 33 critical vulnerabilities, and reporting on the disclosure describes N-central as a remote monitoring and management platform. The researcher is Sean Bales, who dubbed the pool of vulnerabilities Able2Shell. N-able said it was observing scanning activity associated with the published proof-of-concept code.

## What to do

Upgrade to N-central 26.4.1, the vendor fix for this CVE. Compare each installation against the affected range, versions before 26.4.1. Until an instance is on that release, follow N-able's recommendation that N-central servers remain offline.
