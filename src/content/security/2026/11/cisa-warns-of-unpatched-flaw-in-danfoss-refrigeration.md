---
title: CISA warns of unpatched flaw in Danfoss refrigeration controllers
date: 2026-11-25T16:43:54.819Z
format: news
summary: CVE-2026-129713 is a critical stack-based buffer overflow in Danfoss
  AK-SM8xxA controllers up to 5.4.0, and no patch is available; Danfoss says a
  fix is due in 5.5.x.
description: CVE-2026-129713 is a critical buffer overflow in Danfoss AK-SM8xxA
  controllers up to 5.4.0. No patch is available yet.
tags:
  - cve
  - security-updates
impact: critical
action: review
status: current
affects:
  - Danfoss AK-SM8xxA versions 0 through 5.4.0
briefing:
  changed: CVE-2026-129713 is a CWE-121 stack-based buffer overflow in Danfoss
    AK-SM8xxA controllers running versions from 0 through 5.4.0, and no patch is
    available.
  why: Authentication is not required to exploit the flaw, and per
    BleepingComputer, CISA says an attacker can cause the server to restart and
    potentially achieve remote code execution with the web server's privileges.
  action: There is no patch yet; Danfoss says the flaw will be addressed in the
    upcoming 5.5.x software version for the AK-SM 8xxA Series. Administrators of
    potentially impacted systems are advised to take action in the meantime.
sources:
  - title: "NVD: CVE-2026-129713"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-129713
  - title: "BleepingComputer: CISA warns of critical unpatched flaw in Danfoss
      refrigeration controllers"
    url: https://www.bleepingcomputer.com/news/security/cisa-warns-of-critical-unpatched-flaw-in-danfoss-refrigeration-controllers/
---

According to BleepingComputer, CISA (the U.S. Cybersecurity and Infrastructure Security Agency) is warning about a critical vulnerability in Danfoss AK-SM 8xxA Series controllers, used by food retailers to manage commercial refrigeration, heating, ventilation and air conditioning (HVAC), and lighting systems. The flaw is CVE-2026-129713, a CWE-121 stack-based buffer overflow, meaning a write past the end of a fixed-size memory buffer on the stack. The CVE record states that authentication is not required to exploit it.

## What is affected

Danfoss AK-SM8xxA versions from 0 through 5.4.0 are listed as affected. The report says Danfoss calls the product line the AK-SM 800A Series, which includes the 820A, 850A, and 880A models. The CVE was published on November 20, 2026, with a CVSS (Common Vulnerability Scoring System) 4.0 base score of 9.3, rated critical.

## Why it matters

According to BleepingComputer, CISA says an attacker can trigger the flaw without authentication, cause the server to restart, and potentially achieve remote code execution (running attacker-chosen code on the device) with the web server's privileges. The report adds that Danfoss controllers have recently been compromised in attacks at supermarkets and food retailers across Europe, where attackers remotely shut down cooling systems or raised their temperatures.

## What to do

Currently, there is no patch available for CVE-2026-129713. According to the report, Danfoss published a security advisory on November 20 saying the vulnerability would be addressed in the upcoming software version 5.5.x for the Danfoss AK-SM 8xxA Series. The report states that administrators of potentially impacted systems are advised to take action while that release is pending.

<!-- cspell:words Danfoss HVAC -->
