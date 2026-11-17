---
title: N-able patches N-central policy disclosure flaw in 2026.4 Hotfix 3
date: 2026-11-17T11:45:54.817Z
format: news
summary: CVE-2026-129275 lets an unauthenticated attacker download Automation
  Manager policies from N-central before 2026.4.1 HF3. N-able fixed it in 2026.4
  Hotfix 3.
description: N-able fixed CVE-2026-129275, a missing authentication flaw in
  N-central, in 2026.4 Hotfix 3 (build 2026.4.1.39).
tags:
  - cve
  - security-updates
impact: high
action: review
status: current
affects:
  - N-able N-central before 2026.4.1 HF3
  - N-central Agents and Probes not upgraded to 2026.4.1 HF3
briefing:
  changed: N-able released N-central 2026.4 Hotfix 3, build 2026.4.1.39, which
    fixes CVE-2026-129275, a missing authentication flaw in the
    repositoryItemGet operation.
  why: An unauthenticated attacker who knows a policy identifier can download the
    Automation Manager policy of any customer, including embedded scripts and
    parameter values.
  action: On-premise customers should upgrade servers to 2026.4.1 HF3, and all
    customers must upgrade Agents and Probes to 2026.4.1 HF3.
sources:
  - title: "NVD: CVE-2026-129275"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-129275
  - title: N-central 2026.4 HF3 Release Notes
    url: https://status.n-able.com/2026/11/16/n-central-2026-4-hf3-release-notes/
---

## What changed

N-able has fixed CVE-2026-129275, a missing authentication flaw in N-central, in N-central 2026.4 Hotfix 3 (build 2026.4.1.39). N-able describes the release as a critical security update and last updated it on November 16, 2026. The flaw affects N-central before 2026.4.1 HF3.

An unauthenticated attacker who knows a policy identifier can download the Automation Manager policy of any customer through the repositoryItemGet operation, including embedded scripts and parameter values. The vulnerability carries a CVSS 4.0 base score of 8.2, rated HIGH.

## What else changed

Hotfix 3 permanently blocks legacy APIs and adds missing authentication and permission checks to additional server operations. The release disables remote control functionality other than Take Control and blocks the Intune integration.

## What to do

On-premise customers should upgrade their servers as soon as possible. All customers must upgrade all Agents and Probes to the latest version, 2026.4.1 HF3, to be fully protected. Agents and Probes that are not upgraded are susceptible to impersonation. Hosted N-central servers are upgraded by N-able with no server action required.

<!-- cspell:words Intune -->
