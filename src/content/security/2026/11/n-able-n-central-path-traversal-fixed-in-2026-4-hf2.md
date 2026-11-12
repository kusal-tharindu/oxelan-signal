---
title: N-able N-central path traversal fixed in 2026.4 HF2
date: 2026-11-12T06:44:35.343Z
format: news
summary: N-able has fixed CVE-2026-125882, a relative path traversal in
  N-central that affects versions before 26.4.1, in N-central 2026.4 HF2 (build
  2026.4.1.26).
description: CVE-2026-125882 is a relative path traversal in N-able N-central
  affecting versions before 26.4.1; the fix is in N-central 2026.4 HF2.
tags:
  - cve
  - security-updates
impact: high
action: patch-now
status: current
affects:
  - N-central before 26.4.1
briefing:
  changed: N-able has fixed a relative path traversal in N-central, tracked as
    CVE-2026-125882, in N-central 2026.4 HF2 (build 2026.4.1.26).
  why: The CVE record rates the flaw 8.6 High, and N-able said it was observing
    scanning activity associated with published proof-of-concept code.
  action: Upgrade to N-central 2026.4 HF2 (build 2026.4.1.26) and keep servers
    offline until the upgrade completes.
sources:
  - title: "NVD: CVE-2026-125882"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-125882
  - title: NCSC NL | Security Advisories
    url: https://advisories.ncsc.nl/2026/ncsc-2026-0478.html
  - title: CVE-2026-125882 - Vulnerability Details - OpenCVE
    url: https://app.opencve.io/cve/CVE-2026-125882
  - title: N-able takes cloud service offline, says customers should follow suit,
      following mass vulnerability disclosure
    url: https://www.cyberdaily.au/security/14432-n-able-takes-cloud-service-offline-says-customers-should-follow-suit-following-mass-vulnerability-disclosure
---

## What changed

N-able has published a fix for a relative path traversal vulnerability in N-central, tracked as CVE-2026-125882. The record classifies the flaw as CWE-23, relative path traversal, the class of bug where a file path can be walked out of the directory the application intended.

## What is affected

N-central versions before 26.4.1 are affected. The CVE record assigns a CVSS (Common Vulnerability Scoring System) v4.0 base score of 8.6, rated High, and lists a publication date of November 10, 2026. The flaw is not in the CISA (Cybersecurity and Infrastructure Security Agency) Known Exploited Vulnerabilities catalog.

## Why it matters

N-central is a remote monitoring and management (RMM) platform. N-able shut down its hosted N-central environments across North and South America, Europe, and the Asia-Pacific region after a researcher disclosed 33 vulnerabilities in the platform. That researcher, Sean Bales, named the pool of vulnerabilities Able2Shell. N-able said it was observing scanning activity associated with published proof-of-concept code, and it continued to recommend that N-central servers remain offline until they had been successfully upgraded.

## What to do

Upgrade to N-central 2026.4 HF2 (build 2026.4.1.26), the release that fixes the vulnerabilities including CVE-2026-125882. N-able has released that hotfix and says another hotfix is in the pipeline. Keep N-central servers offline until the upgrade has completed, as N-able recommends.

<!-- cspell:words NCSC -->
