---
title: F5 fixes critical BIG-IP buffer overflows with engineering hotfixes
date: 2026-11-18T19:45:18.396Z
format: news
summary: F5 disclosed six critical BIG-IP vulnerabilities, including
  CVE-2026-120285 and CVE-2026-121805, and the only fixes are engineering
  hotfixes with no workaround listed.
description: Six critical BIG-IP flaws, including CVE-2026-120285 and
  CVE-2026-121805, are fixed only in engineering hotfix builds.
tags:
  - cve
  - security-updates
impact: critical
action: review
status: current
affects:
  - BIG-IP 21.1.0, 17.5.0, 17.1.0
  - BIG-IP Next for Kubernetes 2.4.0, 2.3.0, 2.2.0
  - BIG-IP Next CNF 2.4.0, 2.3.0, 2.2.0
briefing:
  changed: F5 disclosed six critical BIG-IP vulnerabilities, including
    CVE-2026-120285 and CVE-2026-121805, which are stack-based buffer overflows
    in the data plane.
  why: The report says an unauthenticated attacker can crash the Traffic
    Management Microkernel and disrupt traffic until it restarts.
  action: Apply the engineering hotfix builds F5 lists for BIG-IP 21.1.0, 17.5.0
    and 17.1.0, and the BNK builds for BIG-IP Next for Kubernetes; no workaround
    is listed.
sources:
  - title: "NVD: CVE-2026-120285"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-120285
  - title: "NVD: CVE-2026-121805"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-121805
  - title: "The Hacker News: F5 Warns 6 Critical BIG-IP Flaws Can Crash Traffic in
      Specific Setups, May Allow RCE"
    url: https://thehackernews.com/2026/11/f5-warns-6-critical-big-ip-flaws-can.html
---

F5 has published advisories for critical BIG-IP vulnerabilities, including CVE-2026-120285 and CVE-2026-121805, both stack-based buffer overflows in the Common Weakness Enumeration class CWE-121. According to The Hacker News, the company disclosed six critical BIG-IP flaws on November 18, 2026 and rates all six 9.8 under CVSS v3.1 (Common Vulnerability Scoring System) and 9.3 under CVSS v4.0. The report adds that none of the advisories says the flaws have been exploited.

CVE-2026-120285 affects BIG-IP 21.1.0, 17.5.0 and 17.1.0, and BIG-IP Next for Kubernetes and BIG-IP Next CNF 2.4.0, 2.3.0 and 2.2.0. CVE-2026-121805 affects the same listed versions and products. Exposure depends on configuration: the report says CVE-2026-120285 requires an HTTP profile and an iRule that uses PSC::ip_address, and CVE-2026-121805 requires an iRule that uses PEM::subscriber on client traffic.

## Why it matters

The flaws sit in the data plane, which the report describes as the part that processes almost all of BIG-IP's network traffic; the management side is not exposed, according to the report. The report says an unauthenticated attacker can crash the Traffic Management Microkernel (TMM), disrupting traffic until it restarts.

## What to do

F5 fixes CVE-2026-120285 and CVE-2026-121805 in BIGIP-21.1.0.4.0.19.3-ENG for 21.1.0, BIGIP-17.5.1.11.0.61.12-ENG and BIGIP-17.5.1.10.0.80.35-ENG for 17.5.0, and BIGIP-17.1.3.7.0.21.4-ENG and BIGIP-17.1.3.6.0.14.20-ENG for 17.1.0. BIG-IP Next for Kubernetes is fixed in BNK-2.4.2-EHF1, BNK-2.3.4-EHF1 and BNK-2.2.5-EHF1. The report says BIG-IP CNF is fixed in CNF-2.4.2-EHF1, CNF-2.3.4-EHF1 and CNF-2.2.5-EHF1. The report also notes that the only fixes for the six critical flaws are engineering hotfixes, builds issued between normal software releases, and that no workaround is listed. It quotes F5's warning that engineering hotfixes do not undergo the extensive QA assessment of scheduled software releases.

<!-- cspell:words hotfixes Microkernel -->
