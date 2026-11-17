---
title: N-able fixes N-central user enumeration flaw in 2026.4 Hotfix 3
date: 2026-11-17T11:49:38.756Z
format: news
summary: CVE-2026-129279 is a password reset response discrepancy in N-able
  N-central that lets a remote, unauthenticated attacker enumerate valid account
  email addresses; 2026.4 Hotfix 3 fixes it.
description: N-central before 2026.4.1 HF3 returns distinguishable password
  reset responses, allowing account enumeration. Hotfix 3, build 2026.4.1.39,
  fixes it.
tags:
  - cve
  - authentication
  - security-updates
impact: medium
action: review
status: current
affects:
  - N-central before 2026.4.1 HF3
  - N-central Agents and Probes not upgraded to the latest version
briefing:
  changed: N-able shipped N-central 2026.4 Hotfix 3, build 2026.4.1.39, fixing
    CVE-2026-129279, a password reset response discrepancy that lets a remote,
    unauthenticated attacker enumerate valid account email addresses. The
    advisory page was last updated on November 16, 2026.
  why: Enumeration hands an unauthenticated attacker a list of valid account email
    addresses. The same advisory says N-central Agents and Probes that are not
    upgraded are susceptible to impersonation.
  action: On-premise customers should upgrade their servers to N-central 2026.4
    Hotfix 3 as soon as possible. All customers, hosted and on-premise, must
    upgrade every Agent and Probe to the latest version.
sources:
  - title: "NVD: CVE-2026-129279"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-129279
  - title: N-central 2026.4 HF3 Release Notes
    url: https://status.n-able.com/2026/11/16/n-central-2026-4-hf3-release-notes/?amp
---

N-able's N-central 2026.4 Hotfix 3 fixes CVE-2026-129279, a password reset flaw the vendor describes as part of a critical security update. The advisory page was last updated on November 16, 2026. The bug is a response discrepancy in the password reset function: N-central before 2026.4.1 HF3 returns distinguishable responses for valid and invalid accounts, which lets a remote, unauthenticated attacker enumerate the email addresses of valid user accounts.

## What is affected

N-central versions before 2026.4.1 HF3 are affected. The fixed release is N-central 2026.4 Hotfix 3, build 2026.4.1.39. The CVE record gives a CVSS (Common Vulnerability Scoring System) 4.0 base score of 6.9, medium, classifies the flaw as CWE-204 (Common Weakness Enumeration: observable response discrepancy), and was published on November 17, 2026.

## Why it matters

N-able calls the release a critical security update. The advisory also warns that N-central Agents and Probes that are not upgraded are susceptible to impersonation, and that all customers, hosted and on-premise, must upgrade every Agent and Probe to the latest version to be fully protected. Hosted N-central servers are upgraded by N-able itself.

## What to do

On-premise customers should upgrade their servers as soon as possible. The target release is N-central 2026.4 Hotfix 3, build 2026.4.1.39. All customers, hosted and on-premise, must upgrade all Agents and Probes to the latest version. Hosted customers do not patch the N-central server, because N-able upgrades hosted servers, but they still need current Agents and Probes. The hotfix removed the configuration option for legacy APIs, which are now permanently blocked.
