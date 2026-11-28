---
title: Microsoft Store app delivered Vinci RAT through a fake snipping tool site
date: 2026-11-27T13:44:09.162Z
format: news
summary: A Microsoft-signed installer from a fake snipping tool site installs
  Setup Assistant, a Microsoft Store app that eSentire found delivering the
  PowerShell-based Vinci RAT.
description: A fake snipping tool site served a Microsoft-signed installer that
  installs a Store app eSentire linked to the Vinci RAT.
tags:
  - malware
  - supply-chain
impact: high
action: review
status: current
briefing:
  changed: eSentire investigated an intrusion that began with a redirection to a
    fake snipping tool site, which served a Microsoft-signed installer that
    installs Setup Assistant, an Electron app published in the Microsoft Store
    by ETPS Ltd.
  why: The app was heavily obfuscated, talked to command-and-control
    infrastructure and ran C2-supplied PowerShell; the chain ended in the
    previously undocumented Vinci RAT, whose capabilities include remote and
    reverse shell access and code execution.
  action: Setup Assistant is no longer accessible on the Microsoft Store; review
    endpoints for installs of the package and for the scheduled task and C2
    domains described in the report.
sources:
  - title: Vinci RAT Delivered Through a Malicious Microsoft Store App
    url: https://www.esentire.com/blog/vinci-rat-lives-in-the-microsoft-store
  - title: "The Hacker News: Microsoft Store App Found Delivering Vinci RAT Capable
      of Remote System Control"
    url: https://thehackernews.com/2026/11/microsoft-store-app-found-delivering.html
---

According to The Hacker News, eSentire investigated an intrusion that began with a redirection to a fake snipping tool site, snipp.codes-team[.]com, from which a Microsoft-signed installer named Snipping-Tool.exe was downloaded. Running that installer installs Setup Assistant, an application built with Electron, a framework for desktop apps, published in the Microsoft Store by ETPS Ltd; the report says the package was first released on June 1, 2026.

## How the chain runs

The report describes Setup Assistant as heavily obfuscated, communicating with command-and-control (C2) infrastructure, monitoring the victim's Downloads folder, and supporting execution of C2-supplied PowerShell and JavaScript. Its main.js entry-point script was obfuscated with Obfuscator.io, a free JavaScript obfuscation service.

That access was used to launch a malicious PowerShell stager, establish persistence through a scheduled task, and retrieve a previously undocumented PowerShell-based remote access trojan (RAT). The RAT is tracked as Vinci RAT, named for the recurring "vinci" string found across the attack chain. Vinci RAT's capabilities include host fingerprinting, security tool discovery, remote and reverse shell access, file delivery, and execution of EXE, DLL, shellcode and PowerShell.

According to the report, the stager disables the Windows Antimalware Scan Interface (AMSI) and sets up persistence through a scheduled task that runs every 10 minutes. Setup Assistant contacted setup-assistant[.]com, and the stager communicates with monkeysholder[.]info/api.php. The malware configuration watches the Downloads folder for file names MSTeamsSetup.exe and Reader_install.exe.

## Why it matters

The report says eSentire reported the app through Microsoft's abuse form on November 10, 2026, and that Microsoft responded it was not a violation of its terms. The same root domain, codes-team[.]com, has subdomains impersonating Microsoft Teams and Roblox download pages, such as teams.codes-team[.]com, and the report says it was registered in late March 2026.

## What to do

Setup Assistant is no longer accessible on the Microsoft Store, so the remaining work is on the endpoint: identify installs of the package and check for the scheduled task and C2 domains the report describes.

<!-- cspell:words Sentire ETPS snipp AMSI monkeysholder -->
