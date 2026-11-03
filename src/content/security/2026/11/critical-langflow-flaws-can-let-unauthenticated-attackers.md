---
title: Critical Langflow flaws can let unauthenticated attackers run code on servers
date: 2026-11-03T14:45:47.396Z
format: news
summary: IBM recommends upgrading Langflow OSS to 1.13.0 to fix CVE-2026-110186,
  CVE-2026-110192, CVE-2026-110193, and CVE-2026-93680; CVE-2026-104339 has no
  published workaround.
description: Langflow OSS has unauthenticated RCE flaws; upgrade to 1.13.0 for
  fixed vulnerabilities, and monitor CVE-2026-104339.
tags:
  - cve
  - llm-security
  - mcp
impact: critical
action: review
status: current
affects:
  - Langflow OSS 1.0.0 through 1.12.3
  - Langflow OSS 1.0.0 through 1.12.8
briefing:
  changed: "IBM disclosed vulnerabilities in Langflow OSS: CVE-2026-104339,
    CVE-2026-110186, CVE-2026-110192, CVE-2026-110193, and CVE-2026-93680.
    CVE-2026-93680 allows unauthenticated remote code execution through model
    context protocol (MCP) tool enumeration."
  why: A remote attacker could execute arbitrary operating system commands or
    bypass authentication on affected instances, and an authenticated attacker
    could obtain sensitive credentials.
  action: Upgrade Langflow OSS to 1.13.0 to fix CVE-2026-110186, CVE-2026-110192,
    CVE-2026-110193, and CVE-2026-93680. No workaround is available for
    CVE-2026-104339; monitor IBM bulletin 7293015.
sources:
  - title: "Security Bulletin: Langflow OSS is affected by multiple vulnerabilities"
    url: https://www.ibm.com/support/pages/node/7293015
  - title: "Security Bulletin: Langflow OSS is affected by multiple vulnerabilities"
    url: https://www.ibm.com/support/pages/node/7294467
  - title: Critical Langflow Flaws Could Let Unauthenticated Attackers Run Code on
      Servers
    url: https://thehackernews.com/2026/11/critical-langflow-flaws-could-let.html
---

IBM disclosed vulnerabilities in Langflow OSS, including CVE-2026-104339, CVE-2026-110186, CVE-2026-110192, CVE-2026-110193, and CVE-2026-93680. CVE-2026-93680 allows unauthenticated remote code execution through model context protocol (MCP) tool enumeration. CVE-2026-104339 is a critical OS command injection flaw with a CVSS score of 9.8.

CVE-2026-104339 affects Langflow OSS versions 1.0.0 through 1.12.3, while the remaining flaws affect versions 1.0.0 through 1.12.8. CVE-2026-110186 and CVE-2026-93680 each have a CVSS score of 9.8, CVE-2026-110192 has a CVSS score of 6.5, and CVE-2026-110193 has a CVSS score of 8.8. IBM published bulletin 7294467 for the remaining flaws on October 28, 2026, and bulletin 7293015 for CVE-2026-104339 on October 19, 2026.

CVE-2026-104339 and CVE-2026-110186 allow remote code execution due to improper OS command neutralization and code generation, respectively. CVE-2026-110193 allows code injection from a low-privileged authenticated account. CVE-2026-93680 bypasses authentication and leads to remote code execution through MCP tool enumeration. CVE-2026-110192 exposes credentials to an authenticated attacker.

IBM recommends upgrading Langflow OSS to version 1.13.0 to fix CVE-2026-110186, CVE-2026-110192, CVE-2026-110193, and CVE-2026-93680. No workaround is available for CVE-2026-104339, and IBM bulletin 7293015 lists no mitigations. Monitor the IBM bulletin for updates on CVE-2026-104339.

<!-- cspell:words Langflow -->
