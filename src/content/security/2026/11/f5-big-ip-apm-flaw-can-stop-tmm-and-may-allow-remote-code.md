---
title: F5 BIG-IP APM flaw can stop TMM and may allow remote code execution
date: 2026-11-20T14:47:56.963Z
format: news
summary: CVE-2026-123637 affects F5 BIG-IP APM, can terminate the Traffic
  Management Microkernel and may allow remote code execution. F5 lists fixed
  builds for the affected branches.
description: CVE-2026-123637 in F5 BIG-IP APM can terminate TMM and may allow
  remote code execution. Advisory K000163937 lists the fixed builds.
tags:
  - cve
  - security-updates
impact: critical
action: review
status: current
affects:
  - BIG-IP APM
  - BIG-IP 21.1.0
  - BIG-IP 17.5.0
  - BIG-IP 17.1.0
briefing:
  changed: CVE-2026-123637 affects F5 BIG-IP APM, can cause the Traffic Management
    Microkernel to terminate and may lead to remote code execution. F5 lists
    fixed builds for the affected branches.
  why: The record describes a remote, unauthenticated attacker who can cause a
    denial-of-service on the BIG-IP system and may be able to perform remote
    code execution.
  action: Upgrade to the fixed build for your branch, as listed in F5 advisory
    K000163937.
sources:
  - title: "NVD: CVE-2026-123637"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-123637
---

CVE-2026-123637 affects F5 BIG-IP APM and can cause the Traffic Management Microkernel (TMM) to terminate, with a possible path to remote code execution (RCE). The record carries a CVSS (Common Vulnerability Scoring System) v3.1 base score of 9.8 and a CVSS v4.0 base score of 9.3, both rated critical. It was published on November 18, 2026.

F5 classifies the weakness as CWE-121. There is no control plane exposure; this is a data plane issue only.

## What triggers it

The issue applies when BIG-IP APM is provisioned and a per-request policy that includes the Client Information agent and Endpoint Security agents is applied to a virtual server. In that configuration, the record states that a remote, unauthenticated attacker can cause a denial-of-service (DoS) on the BIG-IP system and may be able to perform RCE.

## Fixed builds

Fixed builds are listed per affected branch. For BIG-IP 21.1.0, the fixed build is BIGIP-21.1.0.4.0.19.3-ENG. For BIG-IP 17.5.0, the fixed builds are BIGIP-17.5.1.11.0.61.12-ENG and BIGIP-17.5.1.10.0.80.35-ENG. For BIG-IP 17.1.0, the fixed builds are BIGIP-17.1.3.7.0.21.4-ENG and BIGIP-17.1.3.6.0.14.20-ENG.

## What to do

Upgrade BIG-IP 21.1.0 to BIGIP-21.1.0.4.0.19.3-ENG. Upgrade BIG-IP 17.5.0 to BIGIP-17.5.1.11.0.61.12-ENG or BIGIP-17.5.1.10.0.80.35-ENG. Upgrade BIG-IP 17.1.0 to BIGIP-17.1.3.7.0.21.4-ENG or BIGIP-17.1.3.6.0.14.20-ENG. Track the vendor advisory K000163937 for updates.

If you run one of these virtual servers, treat the exposed policy as the priority: a terminating TMM is a data plane event, and the record does not rule out RCE.

<!-- cspell:words Microkernel -->
