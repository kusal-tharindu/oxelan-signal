---
title: Microsoft will remove the WSUS server role in Windows Server 2028
date: 2026-11-27T11:44:42.581Z
format: news
summary: According to BleepingComputer, Microsoft will remove the WSUS server
  role in Windows Server 2028 and also drop VBScript and WMIC; WINS support is
  removed in the next Windows Server version.
description: According to BleepingComputer, Microsoft will remove the WSUS
  server role in Windows Server 2028 and also drop VBScript and WMIC.
tags:
  - security-updates
  - platform-engineering
impact: info
action: review
status: current
briefing:
  changed: According to BleepingComputer, Microsoft will remove the WSUS server
    role from Windows Server 2028; the report says Microsoft deprecated WSUS in
    September 2024 and announced the release at Ignite 2026.
  why: The removal puts the WSUS server role on the Windows Server 2028 release
    cycle, while the report says WSUS remains available and supported in earlier
    Windows Server releases, including Windows Server 2025, for the duration of
    each release's support lifecycle.
  action: Plan for Windows Server 2028 without the WSUS server role, and use the
    report's supported earlier releases, including Windows Server 2025, for the
    duration of their support lifecycle.
sources:
  - title: "BleepingComputer: Microsoft removes WSUS server role in Windows Server
      2028"
    url: https://www.bleepingcomputer.com/news/microsoft/microsoft-removes-wsus-server-role-in-windows-server-2028/
---

According to BleepingComputer, Microsoft will remove the WSUS server role from Windows Server 2028. The report says Microsoft officially deprecated WSUS in September 2024. It also says Microsoft announced Windows Server 2028 at the Ignite 2026 conference.

## What is affected

The removal covers the WSUS server role in Windows Server 2028. Windows Server 2028 also removes VBScript. It also removes the legacy WMIC utility. The report says WINS support is also being removed in the next Windows Server version.

## Why it matters

The report ties a September 2024 deprecation to a removal in Windows Server 2028. It also says WSUS remains available and supported in earlier Windows Server releases, including Windows Server 2025, for the duration of each release's support lifecycle.

## What to do

Plan for Windows Server 2028 without the WSUS server role. The report describes the change as a removal, not a patch to apply. The cited claims give no migration deadline beyond the Windows Server 2028 release.
