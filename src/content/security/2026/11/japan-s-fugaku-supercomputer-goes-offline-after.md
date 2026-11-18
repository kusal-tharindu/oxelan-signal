---
title: Japan's Fugaku supercomputer goes offline after unauthorized access
date: 2026-11-18T03:43:43.739Z
format: news
summary: RIKEN confirmed unauthorized access to a system operating the Fugaku
  supercomputer on November 12 and suspended operations on November 14.
description: RIKEN suspended Fugaku after an external party reached its
  operational network; up to 4,222 users may be affected.
tags:
  - incident-response
  - data-breach
  - authentication
impact: high
action: review
status: current
affects:
  - Fugaku supercomputer
  - RIKYU supercomputer
briefing:
  changed: RIKEN confirmed on November 13 that a system involved in operating
    Fugaku was subject to unauthorized access by an external third party on
    November 12, and suspended Fugaku operations at 4:30 AM on November 14.
  why: The intruder reached Fugaku's internal operational network through a public
    dashboard, and RIKEN says compromised data included names, email addresses,
    user IDs, and authentication credentials such as SSH private keys and access
    keys.
  action: Fugaku users should revoke stored authentication credentials; RIKEN says
    it invalidated login public keys and will resume operations only after
    remediation.
sources:
  - title: Notice regarding a possible personal information leak affecting Fugaku
      and RIKYU users following unauthorized access to the supercomputer Fugaku
    url: https://www.riken.jp/en/news_pubs/news/2026/20261116_2/index.html
  - title: "BleepingComputer: Japan takes Fugaku supercomputer offlline after
      cyberattack"
    url: https://www.bleepingcomputer.com/news/security/japan-takes-fugaku-supercomputer-offlline-after-cyberattack/
---

RIKEN confirmed on November 13 that a system involved in operating the Fugaku supercomputer was subject to unauthorized access by an external third party on November 12. The intrusion occurred between November 10 and 13, 2026, and the unauthorized party gained access to Fugaku's internal operational network through a publicly accessible web page displaying Fugaku's operational status, the dashboard.

## What is affected

Up to 4,222 Fugaku users and up to 375 RIKYU users may have been affected. Compromised data included users' names, email addresses, user IDs, and authentication credentials such as SSH (Secure Shell) private keys and access keys. RIKEN stated there is currently no evidence that research data or files were exfiltrated. According to BleepingComputer, Fugaku is a 537 petaflops supercomputer that entered shared use in March 2021, and RIKYU is a 64 petaflops supercomputer used in AI (artificial intelligence) scientific research.

## Why it matters

RIKEN suspended Fugaku operations at 4:30 AM on November 14 and blocked external access. RIKEN also confirmed that some compromised servers were tampered with, including through the installation of malicious programs. The unauthorized party attempted to connect to other systems using some of the obtained credentials. RIKEN reported the incident to Japan's Personal Information Protection Commission on November 16 at 5:55 PM.

## What to do

RIKEN invalidated the public keys used by all users for login and asked users to revoke stored authentication credentials. RIKEN will resume Fugaku operations only after addressing vulnerabilities in the exploited software, rebuilding compromised servers, reviewing the network configuration, and implementing AI-based security measures.

<!-- cspell:words Fugaku RIKEN RIKYU Fugaku's offlline exfiltrated petaflops -->
