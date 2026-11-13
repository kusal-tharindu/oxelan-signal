---
title: Windows activation fails after November 2026 Patch Tuesday updates
date: 2026-11-13T09:41:54.523Z
format: news
summary: According to BleepingComputer, Microsoft confirmed that November 2026
  Patch Tuesday security updates cause activation and licensing failures with
  error 0x80041008; a fix will be available over the coming days.
description: November 2026 Windows updates cause activation failures with
  0x80041008 on affected client and server devices; Microsoft advised contacting
  support.
tags:
  - security-updates
  - authentication
impact: medium
action: review
status: current
affects:
  - Windows 10 21H2/22H2
  - Windows 11 23H2
  - Windows Server 2019/2022/2025
briefing:
  changed: According to BleepingComputer, Microsoft confirmed that November 2026
    Patch Tuesday security updates cause Windows activation and licensing
    failures with 0x80041008 error codes.
  why: Organizations that automate activation or use SLMGR can hit the error, and
    the affected devices include Windows 10 21H2/22H2, Windows 11 23H2, and
    Windows Server 2019/2022/2025.
  action: Microsoft advised affected organizations that need immediate mitigation
    to contact Microsoft Support for business, and the report says a fix will be
    available over the coming days.
sources:
  - title: November 10, 2026—KB5131096 (OS Builds 19045.7846 and 19044.7846)
    url: https://support.microsoft.com/en-us/servicing/os/windows-10/2026/11/kb5131096-windows-10-21h2-22h2-security-update
  - title: November 10, 2026—KB5131087 (OS Build 22631.7711)
    url: https://support.microsoft.com/en-us/servicing/os/windows-11/2026/11/kb5131087-windows-11-23h2-security-update
  - title: "BleepingComputer: Microsoft confirms Windows activation failures after
      November updates"
    url: https://www.bleepingcomputer.com/news/microsoft/microsoft-confirms-windows-activation-failures-after-november-updates/
---

According to BleepingComputer, Microsoft confirmed that November 2026 Patch Tuesday security updates cause Windows activation and licensing failures with 0x80041008 error codes. The error can appear as 0x80041008, Invalid parameter (SWbemObjectEx), when administrators activate Windows, configure Key Management Service (KMS), or manage product keys.

The report says the activation failures occur after executing the 'slmgr.vbs /skms-domain <domain>' and 'slmgr.vbs /ipk <key>' commands. It also says the issue affects organizations that automate Windows activation and licensing processes or use the Software Licensing Management Tool (SLMGR) command-line tool.

## Affected devices

The report lists client devices running Windows 10 21H2/22H2 and Windows 11 23H2, plus server devices running Windows Server 2019/2022/2025. The November 2026 update for Windows 11 version 23H2 is KB5131087, and the update for Windows 10 21H2/22H2 is KB5131096.

## Why it matters

The issue matters for organizations that automate activation or use SLMGR, because the failures occur in commands used to activate Windows, configure KMS, or manage product keys. The report says devices that are already activated remain activated, while customers with the KMS client key installed in their image who do not use SLMGR for licensing management are unaffected.

## What to do

The report says Microsoft advised affected organizations that need immediate mitigation to reach out to Microsoft Support for business. The report says a fix will be available over the coming days.

<!-- cspell:words SLMGR Wbem slmgr skms -->
