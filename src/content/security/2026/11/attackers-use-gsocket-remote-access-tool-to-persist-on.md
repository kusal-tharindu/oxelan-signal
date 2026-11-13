---
title: Attackers use GSocket remote access tool to persist on Linux servers
date: 2026-11-12T09:45:59.729Z
format: news
summary: Threat actors deployed GSocket, an open source remote access tool, on
  compromised Linux servers to keep access after the vulnerabilities they
  exploited were remediated.
description: Microsoft reports GSocket deployments on Linux servers and
  recommends removing the client, persistence, and staged files.
tags:
  - malware
  - incident-response
action: review
status: current
affects:
  - Linux servers
briefing:
  changed: Threat actors deployed GSocket, an open source remote access tool, on
    compromised Linux servers, and Microsoft observed GSocket-related detections
    on devices increase 356.2% from March through August 2026.
  why: GSocket let attackers keep access even after the vulnerabilities used for
    initial compromise were remediated, and traffic relays through the public
    Global Socket Relay Network.
  action: Investigate and remove the GSocket client, associated persistence, and
    staged files, and prioritize local privilege-escalation patching on
    internet-facing servers.
sources:
  - title: "The global socket: how threat actors are weaponizing GSocket for
      stealthy C2 | Microsoft Security Blog"
    url: https://www.microsoft.com/en-us/security/blog/2026/11/11/global-socket-how-threat-actors-weaponizing-gsocket-stealthy-c2/
  - title: "BleepingComputer: Hackers plant GSocket on Linux servers for persistent
      access"
    url: https://www.bleepingcomputer.com/news/security/hackers-plant-gsocket-on-linux-servers-for-persistent-access/
---

## What changed

Threat actors deployed GSocket, an open source remote access tool, on compromised Linux servers. Threat actors exploited internet-facing web applications and used curl to download and execute a remote script.

## What is affected

Microsoft observed GSocket-related detections on devices increase 356.2% from March through August 2026. Web applications and hosting accounted for 87.1% of attributable Microsoft Defender for Endpoint incidents in the analyzed telemetry. Within that group, PHP (the server-side scripting language) web applications and cPanel hosting represented 63.9% of incidents, and Apache represented 24.3%. Education and research accounted for the largest share of affected organizations at 30.7%, followed by technology and telecommunications at 22.9%.

## Why it matters

Because GSocket let attackers keep access even after the vulnerabilities used for initial compromise were remediated, patching the initial flaw does not remove the access it established. According to BleepingComputer, GSocket allows attackers to reach systems behind firewalls or NAT (network address translation) by routing traffic through the Global Socket Relay Network. Microsoft said traffic passes through that public relay service, so there is no threat actor-owned IP (Internet Protocol) address or domain to block.

## What to do

Microsoft advises remediating the host as well as the vulnerability, and removing the GSocket client, associated persistence, and staged files. The deployment script staged the client in writable or memory-backed paths such as /dev/shm, and persistence included cron, systemd, shell profiles, watchdogs, and redundant copies. Prioritize local privilege-escalation patching on internet-facing servers.
