---
title: BADBOX 3.0 sets ad-fraud record with 40 billion daily bid requests
date: 2026-11-21T15:41:37.102Z
format: news
summary: According to BleepingComputer, BADBOX 3.0 peaked at roughly 40 billion
  bid requests a day by infecting cheap phones, tablets, and streaming TV boxes
  that run AOSP.
description: BADBOX 3.0 became the largest documented ad-fraud operation,
  BleepingComputer reports, with 40 billion daily bid requests from infected
  Android devices.
tags:
  - malware
  - incident-response
impact: high
action: review
status: current
affects:
  - cheap phones, tablets, and streaming TV boxes running the Android Open
    Source Project (AOSP)
briefing:
  changed: According to BleepingComputer, BADBOX 3.0 became the largest documented
    ad-fraud operation by daily bid request volume, with roughly 40 billion bid
    requests a day at its height.
  why: The botnet infects cheap devices running the Android Open Source Project
    and enrolls them in residential proxy networks, so ad fraud traffic appears
    legitimate and evades anti-abuse filters.
  action: Buy only certified Android devices from reputable manufacturers and keep
    Play Protect available and active.
sources:
  - title: "BleepingComputer: BADBOX 3.0 botnet returns with record-breaking 40
      billion daily ad requests"
    url: https://www.bleepingcomputer.com/news/security/badbox-30-botnet-returns-with-record-breaking-40-billion-daily-ad-requests/
---

According to BleepingComputer, BADBOX 3.0 grew into the largest documented ad-fraud operation by daily bid request volume, generating roughly 40 billion bid requests a day at its height. At peak it accounted for more than 4% of all connected TV (CTV) traffic observed by the Human Defense Platform, more than three times the volume of the previous record holder, VASTFLUX.

## What is affected

BADBOX 3.0 infects cheap phones, tablets, and streaming TV boxes running the Android Open Source Project (AOSP). The malware performs ad fraud by playing video ads in hidden windows while impersonating legitimate streaming apps, and HUMAN also observed fraudulent server-side ad insertion (SSAI) requests that tricked advertisers into believing ads were played on streaming devices.

A proxying module enrolled infected devices in one of 11 residential proxy networks without the owners' knowledge or consent, and some ad fraud traffic was routed through those proxies to appear legitimate and evade anti-abuse filters. PXYEDGE, the rebranded successor to IpMoYu, advertised approximately 200,000 proxy nodes while monitoring showed unique connections peaking at around 340,000.

## Why it matters

BADBOX was first discovered in early 2023 on a T95 Android TV box bought on Amazon. In December 2024, Germany's cybersecurity agencies warned that the botnet had infected tens of thousands of devices. In March 2025, HUMAN and Shadowserver cut off more than 500,000 BADBOX 2.0 devices from their control servers, and Google removed 24 apps that spread the malware from Google Play. Google later said BADBOX 2.0 had infected over 10 million Android-based devices by April 2025.

Researchers linked the malware to a specific Chinese electronics manufacturer through its domains, device-specific checks in the code, a factory-installed TV launcher, and a repository maintainer. Infected devices fetch malware modules from public code repositories, with payloads mirrored across hosting platforms for redundancy and to resist takedowns.

## What to do

HUMAN participated in Google's disruption of the related XCPE malware operation, which included taking down multiple command-and-control (C2) domains used by BADBOX 3.0. One malware repository was taken down, and HUMAN's systems now filter fraudulent advertising traffic associated with BADBOX 3.0. HUMAN warns that the operators are likely to adapt to the latest disruption, as they have in the past. Users should only buy certified Android devices from reputable manufacturers and ensure that Play Protect is available and active.

<!-- cspell:words BADBOX AOSP VASTFLUX SSAI PXYEDGE rebranded Shadowserver XCPE -->
