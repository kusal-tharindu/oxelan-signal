---
title: Iran-aligned Volant Manticore uses IPFS-based KuboShell backdoor in
  espionage campaigns
date: 2026-11-24T18:41:17.366Z
format: news
summary: According to The Hacker News, a previously undocumented Iran-aligned
  group called Volant Manticore uses a backdoor named KuboShell that relies on
  IPFS for command-and-control.
description: Volant Manticore, an Iran-aligned group, uses the IPFS-based
  KuboShell backdoor and Homa framework in espionage campaigns.
tags:
  - malware
  - incident-response
  - phishing
impact: high
action: review
status: current
briefing:
  changed: According to The Hacker News, a previously undocumented Iran-aligned
    group called Volant Manticore is using a backdoor named KuboShell that
    relies on IPFS for command-and-control.
  why: KuboShell is primarily used for reconnaissance before a more capable
    backdoor is downloaded, so a detection should be treated as an early
    foothold.
  action: Review hosts for the reported behaviors, including the UAC prompt, files
    under C:\Users\Public named with the MAC address, and hidden-window
    PowerShell, and treat a detection as an early foothold.
sources:
  - title: "The Hacker News: Iran-Aligned Volant Manticore Uses IPFS-Based KuboShell
      Backdoor in Espionage Campaigns"
    url: https://thehackernews.com/2026/11/iran-aligned-volant-manticore-uses-ipfs.html
---

According to The Hacker News, a previously undocumented Iran-aligned cyber espionage group called Volant Manticore is using a backdoor named KuboShell that relies on IPFS (InterPlanetary File System) for command-and-control. The report says the group has targeted telecommunications companies, airlines, and critical infrastructure in Cyprus. It has been operational since late August 2025, according to the report. Both Volant Manticore and MuddyWater are assessed to be affiliated with Iran's Ministry of Intelligence and Security (MOIS).

In September 2026, the report says, Volant Manticore launched a phishing campaign against Saudi targets using healthcare-themed ZIP archives. Some emails came from a compromised account belonging to a private hospital in Saudi Arabia. The group has also conducted credential harvesting campaigns.

KuboShell deploys Homa, a post-compromise framework that the report describes as a reimplementation of MuddyWater's MuddyC2Go. The Homa Framework infection chain includes a PowerShell stager that contacts the hard-coded IP address `185.205.187[.]109:8000` to fetch a PowerShell loader and execute it in memory.

On startup, KuboShell checks for administrator privileges and tries to relaunch with higher privileges if absent, which triggers a User Account Control (UAC) prompt. It uses the first network adapter's MAC (Media Access Control) address as a victim identifier, registers by uploading a file to `C:\Users\Public\<MAC>.log` using a hard-coded Pinata access token, and checks Pinata for a command file named `<MAC>.txt`. Downloaded commands run via PowerShell in a hidden window, with output saved to `C:\Users\Public\<MAC>re.txt`, and the backdoor checks for a new command every 60 seconds.

The report says attack chains use artificial intelligence (AI)-generated personas in bogus CVs to trick targets into clicking a link to download the complete resume, resulting in KuboShell deployment. The activity was aimed at a Cyprus-based airline that operates flights between Cyprus and Israel. The Homa Framework was also distributed via a macro-enabled Word document named `MilitaryHeritageProposal.doc` that is believed to have targeted a Cypriot defense-related government entity. Enabling the document's content triggers a VBA (Visual Basic for Applications) backdoor that runs follow-up payloads or commands using `cmd.exe`.

## What to do

Review hosts for the reported behaviors: a UAC prompt when an unexpected process tries to relaunch, files under `C:\Users\Public` named with the MAC address, and PowerShell running in a hidden window. Treat a KuboShell detection as an early foothold because the backdoor is primarily used for reconnaissance before a more capable backdoor is downloaded. The supported claims do not list fixed versions or a configuration-only mitigation.

<!-- cspell:words Manticore IPFS Kubo Homa MOIS reimplementation -->
