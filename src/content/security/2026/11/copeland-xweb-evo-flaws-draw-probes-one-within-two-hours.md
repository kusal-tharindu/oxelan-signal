---
title: Copeland XWEB EVO flaws draw probes, one within two hours
date: 2026-11-16T16:40:58.695Z
format: news
summary: Exploitation attempts against CVE-2026-124014 began less than two hours
  after publication; a second IP probed CVE-2026-124010 the next day.
description: CVE-2026-124014 drew probes within two hours of publication;
  CVE-2026-124010 was probed the next day. XWEB EVO is end-of-support.
tags:
  - cve
  - incident-response
impact: critical
action: patch-now
status: current
affects:
  - Copeland XWEB EVO < 5.6.2
  - Copeland XWEB EVO 4.3.0 through 5.8.8
briefing:
  changed: Copeland XWEB EVO flaws were published on November 12, 2026;
    exploitation attempts against CVE-2026-124014 began less than two hours
    later, and a second IP probed CVE-2026-124010 on November 13.
  why: CVE-2026-124010 allows unauthenticated root command execution,
    CVE-2026-124014 allows unauthenticated configuration writes, and the report
    says XWEB EVO is end-of-support.
  action: CVE-2026-124010 is fixed in XWEB EVO 5.6.2; the report says Copeland
    advised customers to move to XWEB Pro models. The cited sources list no
    fixed release for CVE-2026-124014.
sources:
  - title: "NVD: CVE-2026-124010"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-124010
  - title: "NVD: CVE-2026-124014"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-124014
  - title: "SecurityWeek: Hackers Probe Newly Disclosed Flaws in Copeland
      Refrigeration Controllers"
    url: https://www.securityweek.com/hackers-probe-newly-disclosed-flaws-in-copeland-refrigeration-controllers/
---

Copeland XWEB EVO controllers are exposed to critical command injection and configuration flaws. According to SecurityWeek, exploitation attempts against CVE-2026-124014 began less than two hours after the issue was made public.

## What is affected

CVE-2026-124014 is an unauthenticated arbitrary file write vulnerability in XWEB EVO 4.3.0 through 5.8.8 that lets remote attackers modify /etc/xwebconfig.json through a crafted POST request to config.lua with action=set. It has a CVSS (Common Vulnerability Scoring System) 3.1 base score of 9.1. CVE-2026-124010 is a command injection flaw in XWEB EVO before 5.6.2 that allows unauthenticated remote attackers to execute arbitrary commands as root through the setuid-root CGI (Common Gateway Interface) xwconsole.cgi. Its CVSS 3.1 base score is 9.8.

## Why it matters

The report says the first attempts targeted CVE-2026-124014. On November 13, a second IP sent four probes aimed at CVE-2026-124010. Both targeted flaws only affect the older firmware, according to the report. The report says Copeland ended software support for the XWEB EVO family on March 16, 2026, and advised customers to move to XWEB Pro models. Onyphe data cited by VulnCheck shows nearly 2,000 internet-exposed XWEB EVO hosts, compared with 108 for XWEB Pro, according to the report.

## What to do

CVE-2026-124010 is fixed in XWEB EVO 5.6.2. The cited sources list no fixed release for CVE-2026-124014. The report says Copeland advised customers to move to XWEB Pro models.

<!-- cspell:words XWEB xwebconfig setuid xwconsole Onyphe -->
