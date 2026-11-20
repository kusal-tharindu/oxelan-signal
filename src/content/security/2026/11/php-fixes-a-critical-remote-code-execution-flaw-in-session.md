---
title: PHP fixes a critical remote code execution flaw in session handling
date: 2026-11-20T08:44:09.322Z
format: news
summary: PHP has released security updates that fix CVE-2026-115560, a session
  serializer mismatch with a CVSS 4.0 base score of 9.2 that could lead to
  remote code execution.
description: PHP fixed CVE-2026-115560, a session serializer mismatch rated 9.2,
  in 8.2.36, 8.3.37, 8.4.28 and 8.5.13.
tags:
  - cve
  - security-updates
impact: critical
action: review
status: current
affects:
  - PHP before 8.2.36
  - PHP 8.3.* before 8.3.37
  - PHP 8.4.* before 8.4.28
  - PHP 8.5.* before 8.5.13
briefing:
  changed: PHP published security updates that fix CVE-2026-115560, a session
    serializer mismatch that could lead to remote code execution.
  why: The flaw has a CVSS 4.0 base score of 9.2, and affected versions predate
    the fixed releases on each supported branch.
  action: "Upgrade to the fixed release for your branch: PHP 8.2.36, 8.3.37,
    8.4.28 or 8.5.13."
sources:
  - title: "NVD: CVE-2026-115560"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-115560
  - title: "BleepingComputer: PHP security updates fix 18 flaws, including critical
      RCE bugs"
    url: https://www.bleepingcomputer.com/news/security/php-security-updates-fix-18-flaws-including-critical-rce-bugs/
---

PHP has published security updates for a session serializer mismatch that could lead to remote code execution (RCE), tracked as CVE-2026-115560, a Common Vulnerabilities and Exposures (CVE) identifier. According to BleepingComputer, the updates were released Thursday, November 19, for all supported PHP branches, with PHP 8.5.13, 8.4.28, 8.3.37, and 8.2.36 now available. CVE-2026-115560 has a CVSS (Common Vulnerability Scoring System) 4.0 base score of 9.2.

## What is affected

CVE-2026-115560 affects PHP versions before 8.2.36, 8.3.* before 8.3.37, 8.4.* before 8.4.28 and 8.5.* before 8.5.13. The same report says the updates address 18 CVEs affecting PHP's core engine, session handling, PHP-FPM (FastCGI Process Manager), CGI (Common Gateway Interface), and other components.

## Why it matters

The consequence is remote code execution from a session serializer mismatch, which the CVE record rates 9.2. According to BleepingComputer, CVE-2026-115560 was already disclosed in an October 23 informational advisory. The same report counts 18 CVEs in the release, spread across core, session handling, PHP-FPM and other components.

## What to do

Upgrade to the fixed release for the branch you run: PHP 8.2.36, 8.3.37, 8.4.28 or 8.5.13. According to the report, PHP recommended disabling session upload progress as a temporary mitigation, by setting `session.upload_progress.enabled=0` and restarting PHP workers.
