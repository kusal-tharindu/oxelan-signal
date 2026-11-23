---
title: Suspected Webworm tool rebuilds SoftEther VPN Bridge to evade detection
date: 2026-11-23T18:41:56.358Z
format: news
summary: A modified SoftEther VPN Bridge build is attributed to Webworm with
  moderate confidence and appears rebuilt from source to erase detection
  fingerprints.
description: Rapid7 attributes a modified SoftEther VPN Bridge build to Webworm
  with moderate confidence; the report says it was rebuilt to erase detection
  fingerprints.
tags:
  - malware
  - incident-response
impact: medium
action: review
status: current
briefing:
  changed: According to The Hacker News, Rapid7 attributes a modified SoftEther
    VPN Bridge build to Webworm with moderate confidence. The report describes
    changed web endpoints, a renamed configuration file, and a different
    watermark.
  why: The report says the build is stock SoftEther software rebuilt from source
    to erase much of its detection fingerprint, with stealth as the primary
    focus.
  action: Review the report's described binary and endpoint changes with the
    security team.
sources:
  - title: "The Hacker News: Webworm Suspected of Modifying SoftEther VPN to Evade
      Detection and Hide Remote Access"
    url: https://thehackernews.com/2026/11/webworm-suspected-of-modifying.html
---

According to The Hacker News, Webworm is a China-aligned threat actor that has targeted government entities, IT services, and electric power companies. The report says Rapid7 attributes a modified SoftEther VPN (virtual private network) Bridge tool to Webworm with moderate confidence. Webworm was first publicly detailed by Symantec in September 2022.

The modified tool is a Windows executable named netcapa.exe. It is a modified build of SoftEther VPN Bridge version 4.44, build 9807. According to the report, the build is rebranded as NtMonitor VPN and masquerades as Network Monitor Software from Network Systems Solutions Inc.. The artifact was uploaded to VirusTotal around mid-January 2026.

## Why it matters

The build replaces the HTTP (Hypertext Transfer Protocol) endpoints /vpnsvc/vpn.cgi and /vpnsvc/connect.cgi with /update/alive.cgi and /update/picture.cgi. It swaps the GIF (Graphics Interchange Format)-based protocol watermark used by the stock utility for a PNG (Portable Network Graphics)-based watermark. The hamcore.se2 resource archive was reduced to a bare minimum and embedded into the executable, increasing binary size by about 1.5 MB. The configuration file was renamed from vpn_bridge.config to setting.conf and its contents are encrypted with a custom algorithm starting with the magic bytes RCEN.

## What Rapid7 found

According to the report, Rapid7 describes the tool as stock SoftEther software that is not trojanized but rebuilt from source to erase much of its detection fingerprint. The attackers were not found to introduce any new functionality; the report says the primary focus was stealth.

<!-- cspell:words netcapa rebranded vpnsvc hamcore RCEN trojanized -->
