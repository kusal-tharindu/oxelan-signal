---
title: Malicious NuGet packages target .NET developers through a fake job assessment
date: 2026-11-26T04:44:02.415Z
format: news
summary: According to The Hacker News, researchers found 13 malicious NuGet
  packages that pose as UI controls inside a fake take-home assessment and
  deliver malware to Windows .NET developers.
description: 13 malicious NuGet packages pose as WinUI 3 and WPF controls in a
  fake job assessment that downloads and runs malware on Windows .NET developer
  machines.
tags:
  - supply-chain
  - malware
impact: high
action: review
status: current
affects:
  - VS_Builder.MSBuildAnalyzer 1.2.7
  - VS_Builder.WinUI3Controls 1.0.7
briefing:
  changed: Socket researchers identified 13 malicious NuGet packages used in a
    fake job assessment aimed at Windows .NET developers, and all the identified
    packages have been deleted from the gallery.
  why: Building or running a project that uses the packages downloads files from
    GitHub, stages a DLL side-loading pair around the Windows on-screen
    keyboard, or downloads and runs an executable.
  action: Check whether any project referenced VS_Builder.MSBuildAnalyzer 1.2.7 or
    VS_Builder.WinUI3Controls 1.0.7; the cited sources give no fixed version to
    upgrade to.
sources:
  - title: "The Hacker News: 13 Malicious NuGet Packages Turn Fake .NET Job
      Assessments Into Malware Delivery Traps"
    url: https://thehackernews.com/2026/11/13-malicious-nuget-packages-turn-fake.html
---

## What changed

According to The Hacker News, Socket researchers identified 13 malicious NuGet packages used in a fake job assessment operation targeting Windows .NET developers. The lure starts from a GitHub repository named stevenleedig-ux/WinUI3_Home_Assessment, created on November 3, 2026. Most of the packages pose as WinUI 3 and WPF (Windows Presentation Foundation) button controls.

## What is affected

The assessment repository's project file references VS_Builder.MSBuildAnalyzer version 1.2.7 and VS_Builder.WinUI3Controls version 1.0.7. Per the report, the first package, WinUI3IconButton, was uploaded on July 23, 2026, and the last two uploads, HappyOne.MSBuildAnalyzer and HappyOne.WinUI3Controls, occurred on November 4, 2026.

## Why it matters in production

Building or running a project that uses the packages downloads files from GitHub, stages a DLL side-loading pair around osk.exe (the Microsoft On-Screen Keyboard), or downloads and runs an executable. VS_Builder.MSBuildAnalyzer ships an MSBuild targets file that runs a bundled DLL after every build; that DLL downloads a file from GitHub to `%LOCALAPPDATA%\osk\OskSupport.dll` and copies `C:\Windows\System32\osk.exe` next to it. VS_Builder.WinUI3Controls then launches the copied binary via the FileButton control, triggering DLL sideloading.

Creating a WUIButton control from the WinUI.Button package downloads avast.exe through the GitHub API using an embedded access token, saves it as `%TEMP%\Launcher.exe` and runs it. Socket also reported two bogus repositories impersonating the axios JavaScript library. Their loader uses a GitHub repository as two-way command and control (C2), a PyInstaller program steals Google Chrome profiles and uploads them to GitHub, and a WeapF payload reports the computer name, user name, time zone and CPU model to an attacker-controlled Telegram bot.

The report says the lure was advertised on the LaborX freelance marketplace on November 7, 2026, with an $8,500-10,000 listing for a C# WPF developer. The campaign has not been attributed to any named threat actor, and Socket found no indicator or code shared with any published Contagious Interview or other North Korean campaign.

## What to do

According to the report, NuGet removed VS_Builder.MSBuildAnalyzer and VS_Builder.WinUI3Controls on November 2, 2026, and all the identified packages have been deleted from the gallery. The cited sources give no fixed version or vendor remediation advisory to upgrade to. Review any build that restored the listed package names, and follow the gallery listing and the report for further changes.

<!-- cspell:words stevenleedig sideloading Weap -->
