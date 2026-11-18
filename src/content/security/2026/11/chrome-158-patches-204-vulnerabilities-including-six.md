---
title: Chrome 158 patches 204 vulnerabilities, including six critical bugs
date: 2026-11-18T12:43:57.326Z
format: news
summary: According to SecurityWeek, Chrome 158 patches 204 vulnerabilities, six
  of them critical, and rolls out as 158.0.8127.36/.37 on Windows and macOS and
  158.0.8127.36 on Linux.
description: Chrome 158 fixes 204 vulnerabilities, six of them critical, per
  SecurityWeek. Builds are 158.0.8127.36/.37 on Windows and macOS and
  158.0.8127.36 on Linux.
tags:
  - cve
  - security-updates
impact: critical
action: review
status: current
affects:
  - Google Chrome on Android prior to 158.0.8127.36
  - Google Chrome prior to 158.0.8127.36 (WebAudio, GarbageCollection, GPU,
    ANGLE, Media)
briefing:
  changed: Google announced the release of Chrome 158 to the stable channel on
    November 17, 2026, with patches for 204 vulnerabilities, including six
    critical-severity bugs.
  why: The update fixes memory-safety flaws in components including WebView,
    WebAudio, GPU and ANGLE, and CVE-2026-131031 and CVE-2026-131054 are rated
    9.6 CRITICAL.
  action: Move Chrome to 158.0.8127.36, which fixes every CVE named in this post,
    then verify the installed build against the rollout version reported for
    each platform.
sources:
  - title: "NVD: CVE-2026-130963"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-130963
  - title: "NVD: CVE-2026-130975"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-130975
  - title: "NVD: CVE-2026-131008"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-131008
  - title: "NVD: CVE-2026-131031"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-131031
  - title: "NVD: CVE-2026-131054"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-131054
  - title: "NVD: CVE-2026-131060"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-131060
  - title: "SecurityWeek: Chrome 158 Patches 204 Vulnerabilities"
    url: https://www.securityweek.com/chrome-158-patches-204-vulnerabilities/
---

According to SecurityWeek, Google announced the release of Chrome 158 to the stable channel on November 17, 2026, with patches for 204 vulnerabilities, including six critical-severity bugs. The report says the release is rolling out as versions 158.0.8127.36/.37 for Windows and macOS, and as version 158.0.8127.36 for Linux.

## What is affected

CVE-2026-130963 is a use-after-free in WebView in Google Chrome on Android prior to 158.0.8127.36; a use-after-free is a memory-safety flaw in which code keeps using memory after it has been released. CVE-2026-130975 is a use-after-free in WebAudio in Google Chrome prior to 158.0.8127.36, with a CVSS (Common Vulnerability Scoring System) v3.1 base score of 8.8, rated HIGH. CVE-2026-131008 is a use-after-free in GarbageCollection in Google Chrome prior to 158.0.8127.36, at the same 8.8 HIGH score.

CVE-2026-131031 is an out-of-bounds write in GPU in Google Chrome prior to 158.0.8127.36, with a CVSS v3.1 base score of 9.6, rated CRITICAL. CVE-2026-131054 is an out-of-bounds write in ANGLE in Google Chrome prior to 158.0.8127.36, also at 9.6 CRITICAL. CVE-2026-131060 is a buffer overflow in Media in Google Chrome prior to 158.0.8127.36, at 8.8 HIGH.

## Why it matters

According to SecurityWeek, Google makes no mention of any of these vulnerabilities being exploited in the wild. Even so, CVE-2026-131031 and CVE-2026-131054 each carry a CRITICAL rating of 9.6.

## What to do

Chrome 158.0.8127.36 fixes each CVE named in this post: CVE-2026-130963, CVE-2026-130975, CVE-2026-131008, CVE-2026-131031, CVE-2026-131054 and CVE-2026-131060. After the update applies, confirm that the installed build matches the rollout version reported for each platform.
