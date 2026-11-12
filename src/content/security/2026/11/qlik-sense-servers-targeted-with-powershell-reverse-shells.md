---
title: Qlik Sense servers targeted with PowerShell reverse shells
date: 2026-11-12T04:58:11.704Z
format: news
summary: Threat actors targeted Qlik Sense servers in October 2026 with
  PowerShell reverse shell attempts, and an exposed directory on the same IP
  held a custom backdoor and exploit tooling.
description: Qlik Sense servers were targeted in October 2026; the exploited
  vulnerability is not known.
tags:
  - incident-response
  - malware
action: review
status: current
affects:
  - Qlik Sense servers
briefing:
  changed: Threat actors targeted Qlik Sense servers in October 2026 to attempt
    delivery of PowerShell reverse shell commands against multiple environments.
  why: A reverse shell can provide an interactive channel for reconnaissance and
    persistence, and an exposed directory on the same IP held a custom backdoor
    and exploit tooling for ActiveMQ and Veeam.
  action: The exploited vulnerability is not known; follow the vendor advisory for
    remediation.
sources:
  - title: "ZeroQlik Returns: Exploiting N-Days Still Pays Off"
    url: https://www.cynet.com/security-foundations/attack-techniques/exploiting-Qlik-Sense-servers/
  - title: "The Hacker News: Hackers Target Qlik Sense Servers With Reverse Shells,
      Stage ActiveMQ and Veeam Exploits"
    url: https://thehackernews.com/2026/11/hackers-target-qlik-sense-servers-with.html
---

## What happened

According to The Hacker News, threat actors targeted Qlik Sense servers in October 2026 to attempt delivery of PowerShell reverse shell commands against multiple environments. Cynet observed a suspicious parent-child process pattern on Qlik Sense servers across several customers in the European Union (EU), all within a window of just over three minutes. The exact vulnerability exploited to break into the servers is currently not known, the report says.

## What the activity involved

The reverse shell connected to 45.115.26[.]23 on port 4455, according to the report. An exposed directory on 45.115.26[.]23:8012 contained a custom Go backdoor for Windows, SSH (Secure Shell) persistence scripts, an ActiveMQ exploit for CVE-2023-46604 (Common Vulnerabilities and Exposures), and a modified public Veeam toolchain for CVE-2024-40711. The persistence script created a scheduled task named WinUpdCheck that launches a PowerShell reverse shell at five-minute intervals.

## Why it matters

The command was executed under scheduler.exe, resembling the 2023 Cactus Qlik intrusions. Attempts to spawn the reverse shell were blocked, but Cynet's controlled testing showed the interactive channel is used for reconnaissance and to deliver a PowerShell script for persistence, the report said. The October 2026 activity shares overlap with a November 2023 campaign documented by Arctic Wolf linked to the CACTUS ransomware operation exploiting Qlik Sense flaws.

## What to do

The exploited vulnerability is not known. The cited sources do not publish fixed versions, so follow the vendor advisory for remediation.

<!-- cspell:words Qlik Veeam Cynet Cynet's -->
