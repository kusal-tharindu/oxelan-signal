---
title: Windows SignDrop zero-day gives attackers SYSTEM privileges
date: 2026-11-12T16:49:12.779Z
format: news
summary: According to BleepingComputer, a researcher released SignDrop, a
  Windows zero-day that can grant SYSTEM privileges and has no fix other than
  waiting for a Microsoft patch.
description: SignDrop is a Windows zero-day that can grant SYSTEM privileges.
  The report says there is no fix other than waiting for a Microsoft patch.
tags:
  - incident-response
  - authentication
action: review
status: current
affects:
  - Windows devices with the CLFS Authentication Mode registry value set to 0 or
    1
briefing:
  changed: According to BleepingComputer, security researcher Abdelhamid Naceri
    released SignDrop, a Windows zero-day exploit that can let attackers gain
    SYSTEM privileges.
  why: Windows devices whose CLFS Authentication Mode registry value is 0 or 1 are
    vulnerable, and the report says there is no solution other than waiting for
    a Microsoft patch.
  action: Check Windows hosts against the CLFS Authentication Mode registry value,
    and wait for a Microsoft patch rather than disabling the CLFS mitigation.
updated: 2026-11-14
updates:
  - { date: 2026-11-14, note: "Corrected the guidance: besides waiting for a patch, the report gives two ways to check exposure (the proof-of-concept or the CLFS registry value). Removed an unsupported description of the SYSTEM account." }
sources:
  - title: "BleepingComputer: New Windows SignDrop zero-day gives hackers SYSTEM
      privileges"
    url: https://www.bleepingcomputer.com/news/security/new-windows-signdrop-zero-day-gives-hackers-system-privileges/
---

According to BleepingComputer, security researcher Abdelhamid Naceri, also known as Nightmare Eclipse, has released a new Windows zero-day exploit called SignDrop that can let attackers gain SYSTEM privileges. A zero-day in this sense means no vendor fix is available, and the report says there is currently no solution except waiting for a patch from Microsoft.

According to the report, SignDrop exploits mitigations Microsoft introduced in October 2025 to defend against authentication attacks targeting vulnerabilities in the Common Log File System (CLFS) driver. Naceri says the flaw is in how CLFS handles creating the authentication file (".cnpf") when it creates a new log file.

## What is affected

Naceri tested the exploit on Windows 11 26H2, Windows 11 26H2 Experimental, and Windows Server 2025 Experimental, and he estimates that 80% of Windows installations are vulnerable, according to the report. The report adds that a computer is vulnerable when the CLFS Authentication Mode registry value is 0 or 1, which it describes as learning mode or enforcement mode.

## Why it matters

There is no configuration change that closes the flaw: the report says that disabling the CLFS mitigation would expose devices to attacks exploiting memory corruption vulnerabilities, which leaves waiting for a Microsoft patch as the only option it gives. Those mitigations exist to defend against authentication attacks targeting the CLFS driver, so turning them off is not a neutral trade.

## What to do

The report says there is no fix until Microsoft ships a patch. To find vulnerable devices, Naceri recommends running the proof-of-concept exploit, which spawns a SYSTEM shell on a vulnerable machine, or checking the CLFS Authentication Mode registry value at `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\CLFS\Authentication\Mode`; a value of 0 or 1 means the device is vulnerable.

<!-- cspell:words CLFS Abdelhamid Naceri cnpf -->
