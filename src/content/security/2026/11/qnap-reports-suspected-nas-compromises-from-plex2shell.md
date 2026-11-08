---
title: QNAP reports suspected NAS compromises from Plex2Shell attacks
date: 2026-11-08T06:17:05.768Z
format: news
summary: QNAP says it has received reports of suspected compromises on
  customers' NAS devices, and directs users to Plex Media Server 1.43.3.10861 as
  the fixed release.
description: QNAP reports suspected compromises on NAS devices running Plex
  Media Server; version 1.43.3.10861 fixes the Plex2Shell flaws.
tags:
  - cve
  - incident-response
impact: high
action: patch-now
status: current
affects:
  - Plex Media Server < 1.43.3.10861
briefing:
  changed: Plex2Shell is a chain of four Plex Media Server vulnerabilities tracked
    as CVE-2026-96652, CVE-2026-96654, CVE-2026-96655, and CVE-2026-96656, and
    QNAP says it has received reports of suspected compromises involving
    customers' NAS devices.
  why: Plex Media Server versions before 1.43.3.10861 are affected, and each of
    the flaws sits in CISA's Known Exploited Vulnerabilities catalog with a
    remediation due date.
  action: Update Plex Media Server to 1.43.3.10861 through the QNAP App Center; if
    a vulnerable server was exposed to the public web, treat the device and its
    content as compromised and follow QNAP's reinstall and credential-reset
    steps.
sources:
  - title: "NVD: CVE-2026-96652"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-96652
  - title: "NVD: CVE-2026-96654"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-96654
  - title: "NVD: CVE-2026-96655"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-96655
  - title: "NVD: CVE-2026-96656"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-96656
  - title: "CISA: Known Exploited Vulnerabilities catalog"
    url: https://www.cisa.gov/known-exploited-vulnerabilities-catalog
  - title: "BleepingComputer: QNAP says hackers breaching NAS devices in Plex2Shell
      attacks"
    url: https://www.bleepingcomputer.com/news/security/qnap-says-hackers-breaching-nas-devices-in-plex2shell-attacks/
---

## What changed

According to BleepingComputer, Plex2Shell is a chain of four vulnerabilities in Plex Media Server, tracked as CVE-2026-96652, CVE-2026-96654, CVE-2026-96655, and CVE-2026-96656. The report said QNAP had received multiple reports of suspected compromises involving customers' network-attached storage (NAS) devices. QNAP confirmed the vulnerabilities exist only in Plex Media Server; QTS, QuTS hero, and other QNAP operating systems are not themselves affected.

## The flaws

CVE-2026-96652 and CVE-2026-96655 are both server-side request forgery (SSRF) flaws with a CVSS (Common Vulnerability Scoring System) 3.1 base score of 4.3: the first lets an attacker using any X-Plex-Token value put a full URL in the protocol parameter and force the Plex server to POST to a destination of the attacker's choosing, and the second could let an authenticated user request arbitrary internal or external addresses. CVE-2026-96654, an encoded URI scheme neutralization flaw scored 6.5, could let an attacker call other plugins' functions with their own parameters. CVE-2026-96656, an external control of file name or path flaw scored 7.2, can allow an admin user to write arbitrary files that may be executed on load, and it can be chained with CVE-2026-96652, CVE-2026-96654, and CVE-2026-96655.

Each of the four was added to the Cybersecurity and Infrastructure Security Agency's (CISA) Known Exploited Vulnerabilities (KEV) catalog on October 20, 2026, with due dates of October 23, 2026 for CVE-2026-96654 and CVE-2026-96656 and November 3, 2026 for CVE-2026-96652 and CVE-2026-96655.

## Affected and fixed

Plex Media Server versions before 1.43.3.10861 are affected by CVE-2026-96652, CVE-2026-96654, CVE-2026-96655, and CVE-2026-96656. Version 1.43.3.10861 is listed as unaffected.

## What to do

QNAP advises users to update Plex Media Server to version 1.43.3.10861, currently available through the QNAP App Center. The report said CISA urged federal agencies to upgrade to Plex 1.43.3.10861 or later within three days. Updating will not remove payloads that attackers have already installed on the device. QNAP says users running a vulnerable Plex server exposed on the public web should treat their NAS devices and all personal content as compromised, then check for signs of compromise, reinstall QTS or QuTS hero, and reset Plex and NAS credentials. Users who do not need remote Plex access should disable the related features and stop forwarding port 32400.

<!-- cspell:words QNAP -->
