---
title: Critical Langflow Flaws Could Let Unauthenticated Attackers Run Code on Servers
date: 2026-11-03T15:01:35.474Z
format: news
summary: IBM Langflow OSS 1.0.0 through 1.12.8 is affected by critical
  vulnerabilities that can allow remote code execution or authentication bypass;
  upgrade to 1.13.0.
description: IBM Langflow OSS 1.0.0 through 1.12.8 has critical remote code
  execution and authentication bypass flaws. Upgrade to 1.13.0.
tags:
  - cve
  - authentication
  - llm-security
impact: critical
action: review
status: current
affects:
  - Langflow OSS 1.0.0 through 1.12.3
  - Langflow OSS 1.0.0 through 1.12.8
briefing:
  changed: IBM disclosed multiple vulnerabilities in Langflow OSS, including
    critical OS command injection and code injection that can allow remote code
    execution, plus an improper authentication bypass.
  why: Remote attackers can exploit these command injection, code injection, or
    authentication bypass flaws to execute arbitrary code or bypass security
    restrictions on affected Langflow OSS servers.
  action: Upgrade Langflow OSS installations running versions 1.0.0 through 1.12.8
    to version 1.13.0.
sources:
  - title: "Security Bulletin: Langflow OSS is affected by multiple vulnerabilities"
    url: https://www.ibm.com/support/pages/node/7293015
  - title: "Security Bulletin: Langflow OSS is affected by multiple vulnerabilities"
    url: https://www.ibm.com/support/pages/node/7294467
  - title: "NVD: CVE-2026-104339"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-104339
  - title: "NVD: CVE-2026-110186"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-110186
  - title: "NVD: CVE-2026-110192"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-110192
  - title: "NVD: CVE-2026-110193"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-110193
  - title: "NVD: CVE-2026-93680"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-93680
---

## What changed

IBM has disclosed multiple vulnerabilities in Langflow OSS, including critical OS command injection and code injection flaws that can allow remote code execution, and an improper authentication bypass. CVE-2026-104339 is a critical OS command injection vulnerability affecting Langflow OSS 1.0.0 through 1.12.3, fixed in 1.12.4. CVE-2026-110186 is a critical code injection vulnerability affecting Langflow OSS 1.0.0 through 1.12.8, fixed in 1.13.0.

CVE-2026-93680 is a critical improper authentication vulnerability affecting Langflow OSS 1.0.0 through 1.12.8, fixed in 1.13.0. CVE-2026-110193 is a high-severity code injection vulnerability that requires a low-privileged authenticated account, affecting Langflow OSS 1.0.0 through 1.12.8, fixed in 1.13.0. CVE-2026-110192 is a medium-severity insufficiently protected credentials vulnerability affecting Langflow OSS 1.0.0 through 1.12.8, fixed in 1.13.0.

## Why it matters

The three critical vulnerabilities have CVSS base scores of 9.8. The high-severity vulnerability has a CVSS base score of 8.8. Remote attackers can use these flaws to execute arbitrary code or bypass security restrictions.

## What to do

IBM recommends upgrading Langflow OSS installations running versions 1.0.0 through 1.12.8 to Langflow OSS 1.13.0. Upgrading to 1.13.0 remediates all five vulnerabilities.

<!-- cspell:words Langflow -->
