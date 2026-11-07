---
title: Microsoft links fake game downloads to SYSTEM-level monetization payloads
date: 2026-11-06T18:44:16.602Z
format: news
summary: Microsoft Threat Intelligence detailed a fake-download campaign that
  uses trojanized installers for cracked software and free games to deploy three
  monetization branches on Windows PCs.
description: Microsoft described trojanized installers that push proxy,
  distributed-computing and adware payloads onto Windows PCs.
tags:
  - malware
impact: medium
action: review
status: current
affects:
  - Windows PCs where users run installers downloaded from untrusted sources
  - WorldProxyPool scheduled tasks WorldProxyPoolAgent, WorldProxyPoolWatchdog,
    WorldProxyPoolUpdater
  - CharityEngine/BOINC components under C:\Program Files\BOINC\ and
    C:\ProgramData\BOINC\
briefing:
  changed: Microsoft Threat Intelligence identified a fake-download campaign that
    ships trojanized Inno Setup-style installers for cracked software, free
    games and utilities, and installs monetized payloads the delivery system
    calls offers.
  why: The installers register SYSTEM-level scheduled tasks and add proxy,
    distributed-computing and adware components, turning the affected device
    into a monetized asset.
  action: Block untrusted software sources and enable potentially unwanted
    application protection, then review hosts for the WorldProxyPool scheduled
    tasks.
sources:
  - title: Fake-download campaign uses trojanized installers to deliver monetization
      payloads | Microsoft Security Blog
    url: https://www.microsoft.com/en-us/security/blog/2026/11/03/fake-download-campaign-uses-trojanized-installers-deliver-monetization-payloads/
  - title: "Cyber Security News: Microsoft Warns Fake Game Downloads Are Secretly
      Monetizing Windows PCs"
    url: https://cybersecuritynews.com/microsoft-warns-fake-game-downloads/
---

## What changed

Microsoft Threat Intelligence identified a fake-download campaign aimed at people searching for cracked commercial software, free games, activators, plugins and unofficial utilities. The downloads are trojanized Inno Setup-style installers that push several monetized payloads, which the delivery system calls "offers", during one installation session. According to Cyber Security News, Microsoft detailed the campaign in a November 3 technical report.

## What is affected

Windows PCs that run these installers can end up hosting one of three monetization branches: WorldProxyPool for proxy and network-resource monetization, CharityEngine and Berkeley Open Infrastructure for Network Computing (BOINC) for compute-resource monetization, and Advanced Windows (AW) Manager and Windows Manager for adware-style utility monetization. On the proxy branch, WorldProxyPool registers three SYSTEM-level scheduled tasks named WorldProxyPoolAgent, WorldProxyPoolWatchdog and WorldProxyPoolUpdater. The watchdog runs a hidden, noninteractive PowerShell script every five minutes, and the updater runs sdk-agent.updater.exe hourly. The BOINC branch installs components under C:\Program Files\BOINC\ and C:\ProgramData\BOINC\, including VirtualBox-7.2.8-r173730.msi. Observed lures include cracked audio plugins, PC games, Roblox executors, auto-clickers, driver tools and fake utility installers.

## Why it matters

The installer starts an Inno Setup-style temporary runner under %TEMP%\is-*.tmp\ that launches recurring eld*.exe or set_*.exe stages. That runner contacts rotating infrastructure with a repeatable d=inno and r=offer_execution callback pattern, and downstream components install with unattended switches such as /qn, /S, /quiet and /norestart. According to Cyber Security News, a single installer can attempt several installations, giving operators multiple opportunities to profit from one download; the report adds that the findings do not establish cryptocurrency mining, because distributed computing and cryptomining are different activities.

## What to do

Microsoft recommends preventing the use of untrusted software sources and enabling potentially unwanted application protection. Review hosts for the WorldProxyPoolAgent, WorldProxyPoolWatchdog and WorldProxyPoolUpdater scheduled tasks. The report lists offer callback infrastructure including beliefdesk[.]xyz, companyharbor[.]xyz, signalpane[.]cfd, inkact[.]xyz and wishgrove[.]cfd.

<!-- cspell:words trojanized BOINC Inno noninteractive inno norestart cryptomining beliefdesk companyharbor signalpane inkact wishgrove -->
