---
title: ASUS fixes three critical flaws in Control Center Express
date: 2026-11-19T21:40:48.814Z
format: news
summary: ASUS has fixed three critical vulnerabilities in Control Center
  Express, including hard-coded keys that allow forged authentication tokens and
  an authorization flaw that lets a low-privileged user create an administrator.
description: ASUS Control Center Express v1.7.29 fixes three critical flaws that
  allow forged authentication tokens and rogue administrator accounts.
tags:
  - cve
  - authentication
impact: critical
action: review
status: current
affects:
  - ASUS Control Center Express through v1.7.27
briefing:
  changed: ASUS released Control Center Express v1.7.29 to fix three critical
    vulnerabilities, two of them hard-coded cryptographic keys that let remote
    users forge authentication or session tokens.
  why: A forged token or a newly created administrator account gives an attacker
    administrative control of the management console and the clients it manages.
  action: Install v1.7.29, then update the agents on managed devices through
    Select Function → Client Agent Updater and verify their versions.
sources:
  - title: "NVD: CVE-2026-114202"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-114202
  - title: "NVD: CVE-2026-114204"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-114204
  - title: "NVD: CVE-2026-114205"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-114205
  - title: "BleepingComputer: ASUS warns of critical hard-coded key flaw in Control
      Center Express"
    url: https://www.bleepingcomputer.com/news/security/asus-warns-of-critical-hard-coded-key-flaw-in-control-center-express/
---

CVE-2026-114202 is a hard-coded cryptographic key flaw in ASUS Control Center Express that lets a remote user gain administrative privileges through a forged authentication token. The CVE record classifies it as CWE-321, use of a hard-coded cryptographic key, and gives it a CVSS (Common Vulnerability Scoring System) 4.0 base score of 10.0, rated critical.

A second flaw, CVE-2026-114204, is the same class of weakness: a remote user can bypass authentication by forging a session token for an account with a recent valid login, resulting in administrative control. It carries a CVSS 4.0 base score of 9.0. The third, CVE-2026-114205, is an incorrect authorization flaw (CWE-863) that lets a remote authenticated low-privileged user create an administrator account, again resulting in administrative control. Its CVSS 4.0 base score is 9.4.

## What is affected

Control Center Express versions through v1.7.27 are listed as affected for CVE-2026-114202, CVE-2026-114204 and CVE-2026-114205. According to BleepingComputer, ASUS released Control Center Express v1.7.29 to fix three critical vulnerabilities that could let remote attackers gain administrative control of the management console and the devices it manages. The report adds that ASUS's security bulletin lists versions earlier than v1.7.29 as affected.

## Why it matters

Control Center Express is a central dashboard that IT administrators use to monitor and remotely manage fleets of PCs, the report notes. The report says CVE-2026-114202 lets an unauthenticated remote attacker forge an authentication token and gain administrator privileges without requiring any privileges or user interaction. The other two need a low-privileged account first.

## What to do

The report's guidance is to install v1.7.29, which fixes the three vulnerabilities. After that, update the agents on managed devices through Select Function → Client Agent Updater and verify their versions.

<!-- cspell:words ASUS -->
