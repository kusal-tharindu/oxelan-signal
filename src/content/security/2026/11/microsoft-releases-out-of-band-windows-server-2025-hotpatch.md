---
title: Microsoft releases out-of-band Windows Server 2025 hotpatch
date: 2026-11-27T09:40:18.879Z
format: news
summary: Microsoft released KB5138318, an out-of-band non-security hotpatch for
  Windows Server 2025 that fixes crashes after the November 2026 security
  Hotpatch update KB5131077.
description: KB5138318 is an out-of-band non-security hotpatch for Windows
  Server 2025 that fixes stop error 0x139 after KB5131077.
tags:
  - security-updates
  - platform-engineering
impact: high
action: review
status: current
affects:
  - Windows Server 2025 devices with Router Advertisement (RA) enabled receiving
    time-bound IPv6 routes after the November 2026 security Hotpatch update
    KB5131077
briefing:
  changed: Microsoft released an out-of-band hotpatch update, KB5138318, for
    Windows Server 2025; it is a non-security cumulative update.
  why: Some Windows Server 2025 devices with Router Advertisement (RA) enabled and
    receiving time-bound IPv6 routes can stop with stop error 0x139
    (KERNEL_SECURITY_CHECK_FAILURE) when a route timer expires after KB5131077.
  action: Install baseline update KB5126646 and servicing stack update version
    26100.33634 or later before KB5138318; the hotpatch then installs
    automatically from Windows Update without requiring a restart.
sources:
  - title: November 25, 2026—Hotpatch KB5138318 (OS Build 26100.33732) Out-of-band
    url: https://support.microsoft.com/en-us/servicing/os/hotpatch/windows-server-2025/2026/kb5138318-windows-server-2025-security-update
  - title: "BleepingComputer: Microsoft pushes emergency hotpatch to fix Windows
      Server crashes"
    url: https://www.bleepingcomputer.com/news/microsoft/new-out-of-band-oob-emergency-hotpatch-fixes-windows-server-2025-crashes/
---

Microsoft released an out-of-band hotpatch update, KB5138318, for Windows Server 2025. The update is a non-security cumulative update. It installs and takes effect without requiring a restart.

The crash affects some Windows Server 2025 devices that have Router Advertisement (RA) enabled and receive time-bound IPv6 (Internet Protocol version 6) routes; those devices might stop with stop error 0x139 (KERNEL_SECURITY_CHECK_FAILURE) when a route timer expires. The issue occurs after installing the November 2026 Windows security Hotpatch update KB5131077.

According to BleepingComputer, Microsoft released the out-of-band update on November 25, 2026. The report says the emergency non-security update is rolling out to affected Windows Server 2025 devices enrolled in hotpatch updates through Windows Update. Microsoft is not currently aware of any issues with this update.

Install baseline update KB5126646 before installing KB5138318. Ensure servicing stack update version 26100.33634 or later is installed before this update. KB5138318 downloads and installs automatically from Windows Update. The update includes servicing stack update KB5131079 version 26100.33822.

<!-- cspell:words hotpatch Hotpatch -->
