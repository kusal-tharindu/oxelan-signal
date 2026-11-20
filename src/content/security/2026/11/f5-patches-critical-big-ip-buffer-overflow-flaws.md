---
title: F5 patches critical BIG-IP buffer overflow flaws
date: 2026-11-20T13:01:17.318Z
format: news
summary: F5 has fixed critical BIG-IP buffer overflow flaws tracked as
  CVE-2026-116953 and CVE-2026-120292, with fixed builds for BIG-IP and BIG-IP
  Next for Kubernetes.
description: F5 fixed CVE-2026-116953 and CVE-2026-120292 in BIG-IP and BIG-IP
  Next for Kubernetes builds.
tags:
  - cve
  - security-updates
impact: critical
action: review
status: current
affects:
  - F5 BIG-IP (CVE-2026-116953) with an iRule using the GENERICMESSAGE::route
    command configured on a virtual server
  - F5 BIG-IP (CVE-2026-120292)
  - F5 BIG-IP Next for Kubernetes (CVE-2026-116953, CVE-2026-120292)
briefing:
  changed: F5 has fixed critical BIG-IP stack-based buffer overflow flaws tracked
    as CVE-2026-116953 and CVE-2026-120292.
  why: A remote, unauthenticated attacker can cause a denial-of-service and may
    achieve remote code execution on BIG-IP.
  action: Upgrade to BIG-IP 21.1.0.4.0.19.3-ENG, 17.5.1.11.0.61.12-ENG, or
    17.1.3.7.0.21.4-ENG, or to BIG-IP Next for Kubernetes BNK-2.4.2-EHF1,
    BNK-2.3.4-EHF1, or BNK-2.2.5-EHF1.
sources:
  - title: "NVD: CVE-2026-116953"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-116953
  - title: "NVD: CVE-2026-120292"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-120292
  - title: "BleepingComputer: F5 releases emergency patches for critical BIG-IP RCE
      flaws"
    url: https://www.bleepingcomputer.com/news/security/f5-releases-emergency-patches-for-critical-big-ip-rce-flaws/
---

According to BleepingComputer, CVE-2026-116953 and CVE-2026-120292 are stack-based buffer overflow vulnerabilities in F5 BIG-IP. F5 has fixed the critical flaws in BIG-IP and BIG-IP Next for Kubernetes builds. The vendor records were published on November 18, 2026.

## What is affected

CVE-2026-116953 affects BIG-IP when an iRule that processes client traffic using the GENERICMESSAGE::route command is configured on a virtual server. Undisclosed requests can cause the Traffic Management Microkernel (TMM) to terminate and may lead to remote code execution (RCE). CVE-2026-120292 can also terminate TMM and may allow RCE. CVE-2026-116953 and CVE-2026-120292 carry a CVSS (Common Vulnerability Scoring System) 3.1 base score of 9.8 and a CVSS 4.0 base score of 9.3, rated critical.

## Why it matters

The report said Shadowserver tracks more than 177,000 BIG-IP instances exposed online and noted F5 has not flagged any of these issues as exploited in attacks. The flaws allow a remote, unauthenticated attacker to cause a denial-of-service (DoS) on the BIG-IP system and may allow the attacker to perform RCE.

## What to do

Upgrade BIG-IP to 21.1.0.4.0.19.3-ENG, 17.5.1.11.0.61.12-ENG, or 17.1.3.7.0.21.4-ENG; these builds fix CVE-2026-116953 and CVE-2026-120292. For BIG-IP Next for Kubernetes, apply BNK-2.4.2-EHF1, BNK-2.3.4-EHF1, or BNK-2.2.5-EHF1. The report said F5 released out-of-band hotfixes on Wednesday to address the flaws; it also said F5 has no mitigation measures for them. Apply the fixed build for each branch you run.

<!-- cspell:words GENERICMESSAGE Microkernel Shadowserver hotfixes -->
