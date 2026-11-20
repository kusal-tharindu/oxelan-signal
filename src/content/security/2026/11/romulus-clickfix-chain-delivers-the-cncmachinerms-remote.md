---
title: ROMULUS ClickFix chain delivers the CNCMachineRMS remote access trojan
date: 2026-11-20T12:55:13.666Z
format: news
summary: Blackpoint assesses with high confidence that the RAT delivered through
  the ROMULUS Stardock chain is CNCMachineRMS, an implant capable of remote
  desktop control, screen streaming, and camera capture.
description: Blackpoint links the ROMULUS ClickFix Stardock chain to
  CNCMachineRMS, a RAT with remote desktop, screen streaming and camera capture.
tags:
  - malware
  - phishing
  - llm-security
impact: high
action: review
status: current
briefing:
  changed: Blackpoint assesses with high confidence that the unnamed RAT delivered
    through the ROMULUS Stardock chain is CNCMachineRMS, which arrives through a
    ClickFix lure and a DLL sideloading chain.
  why: The implant enables remote desktop control, screen streaming, microphone
    and camera capture, file management, and system reconnaissance, and it can
    resolve command and control over DNS over HTTPS.
  action: Review the Blackpoint analysis for the installer name, install path and
    persistence artifacts it documents, and follow the cited reporting for
    changes.
sources:
  - title: "CNCMachineRMS: The Missing Piece in the ROMULUS Campaign"
    url: https://blackpointcyber.com/blog/romulus-cncmachinerms/
  - title: "The Hacker News: ROMULUS ClickFix Attacks Deliver RAT That Can Spy on
      Users and Control PCs"
    url: https://thehackernews.com/2026/11/romulus-clickfix-attacks-deliver-rat.html
---

Blackpoint assesses with high confidence that the unnamed remote access trojan (RAT) delivered through the ROMULUS Stardock chain is CNCMachineRMS. According to The Hacker News, ROMULUS likely operates as a delivery service, distributing CNCMachineRMS and Legion Loader through separate chains while retaining ClickFix and signed binary sideloading techniques.

## How the chain runs

The report describes one payload delivered through the ClickFix activity associated with ROMULUS: a malicious MSI installer named IconEdit2Turb.msi, executed with msiexec.exe through a PowerShell command. The installer masqueraded as Stardock Smart DeElevation Tool and installed its components under `%LOCALAPPDATA%\Programs\Stardock Smart DeElevation Tool\`. Rather than modifying the signed executable, the attacker altered its companion library, DeElevator64.dll, to introduce an additional dependency on a malicious DLL (dynamic-link library), I++u.dll, included in the installation directory. That DLL decodes and runs embedded shellcode responsible for launching CNCMachineRMS.

The implant runs as approximately 1.58 MB of native x64 shellcode stored in resource class 16100, and separate tasks check and recreate a Registry Run entry and a scheduled task at intervals of 150 and 875 seconds. It is also equipped to run additional payloads on demand.

## Why it matters

CNCMachineRMS enables remote desktop control, screen streaming, microphone and camera capture, file management, and system reconnaissance. For command and control it supports DNS over HTTPS (DoH), resolving its active Gate through public DNS resolvers rather than relying solely on the system's configured DNS servers.

The report adds that attacks involving ROMULUS have also leveraged ChatGPT Custom GPTs to direct unsuspecting victims to malicious sites that use ClickFix lures to deliver a RAT payload through DLL sideloading. Huntress documented abuse of ChatGPT Custom GPTs to distribute malicious installers in an investigation published September 28, 2026, and Forescout's Vedere Labs connected infrastructure associated with the Stardock delivery chain to ROMULUS on October 15, 2026.

## What to do

The cited reports do not publish a fixed version or a patch for this chain; the payloads arrive through ClickFix lures and signed-binary sideloading rather than a vulnerable product. Read the Blackpoint analysis for the installer name, install path and persistence artifacts it documents, and follow the reporting for changes.

<!-- cspell:words Blackpoint Stardock sideloading Turb msiexec Forescout's Vedere -->
