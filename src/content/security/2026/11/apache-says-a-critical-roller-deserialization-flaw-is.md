---
title: Apache says a critical Roller deserialization flaw is actively exploited
date: 2026-11-18T11:44:35.096Z
format: news
summary: Apache Roller 4.0.0 through 6.1.4 is affected by CVE-2026-129448, a
  deserialization flaw rated 9.8 that Apache says is being actively exploited.
description: CVE-2026-129448 allows unauthenticated code execution in Apache
  Roller 4.0.0 through 6.1.4. Upgrade to 6.1.6 or later.
tags:
  - cve
  - incident-response
impact: critical
action: patch-now
status: current
affects:
  - Apache Roller 4.0.0 through 6.1.4
briefing:
  changed: CVE-2026-129448 is a deserialization of untrusted data flaw in Apache
    Roller 4.0.0 through 6.1.4, and Apache says the issue is being actively
    exploited.
  why: The flaw carries a CVSS 3.1 base score of 9.8 and is rated critical.
  action: Upgrade to Apache Roller 6.1.6 or later. Disabling XML-RPC in the
    administration UI is not enough.
sources:
  - title: "NVD: CVE-2026-129448"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-129448
  - title: "BleepingComputer: Apache warns of Roller RCE vulnerability exploited in
      attacks"
    url: https://www.bleepingcomputer.com/news/security/apache-warns-of-roller-rce-vulnerability-exploited-in-attacks/
---

Apache has disclosed CVE-2026-129448, a deserialization of untrusted data vulnerability in Apache Roller, and says the issue is being actively exploited. According to BleepingComputer, Apache Roller is an open-source, Java-based group-blogging server with a much smaller market share than modern content management systems and blogging platforms. The flaw is a CWE-502 (deserialization of untrusted data) weakness with a CVSS (Common Vulnerability Scoring System) 3.1 base score of 9.8, rated critical.

## What is affected

Apache Roller versions 4.0.0 through 6.1.4 are affected. Apache records the flaw as the same vulnerability as CVE-2026-82384, which named only Apache Roller 6.1.5 as affected.

## Why it matters

The advisory says the flaw allows an unauthenticated remote attacker to execute arbitrary code, so no valid account is needed on the server. Apache states that the issue is being actively exploited, and the report says Apache has not provided details about the ongoing attacks, including who is responsible and how many servers have been compromised.

## What to do

Upgrade to Apache Roller 6.1.6 or later, which disables the extension types and rejects XML-RPC (remote procedure calls encoded in XML) requests when the XML-RPC feature is disabled. Disabling XML-RPC in the administration UI is not enough, because older versions deserialize the request before checking that setting. The report notes that Apache has released security updates to address the critical Roller flaw.
