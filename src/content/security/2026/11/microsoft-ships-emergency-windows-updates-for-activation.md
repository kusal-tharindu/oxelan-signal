---
title: Microsoft ships emergency Windows updates for activation failures
date: 2026-11-16T08:44:40.880Z
format: news
summary: Microsoft released out-of-band updates to fix Windows activation and
  licensing failures caused by this month's security updates, while
  CVE-2026-118737 in Windows RPC Runtime is fixed by the November 10, 2026
  security updates.
description: Out-of-band Windows updates repair activation and licensing
  failures; CVE-2026-118737 is fixed by the November 10, 2026 security updates.
tags:
  - cve
  - security-updates
impact: high
action: review
status: current
affects:
  - Windows 10 Version 1607 < 10.0.14393.9688
  - Windows Server 2016 < 10.0.14393.9688
  - Windows 10 Version 1809 < 10.0.17763.9487
  - Windows Server 2019 < 10.0.17763.9487
  - Windows 10 Version 21H2 < 10.0.19044.7846
  - Windows 10 Version 22H2 < 10.0.19045.7846
  - Windows 11 Version 23H2 < 10.0.22631.7711
  - Windows 11 Version 24H2 < 10.0.26100.9974
  - Windows 11 Version 25H2 < 10.0.26200.9974
  - Windows 11 Version 26H1 < 10.0.28000.3501
  - Windows 11 Version 26H2 < 10.0.26300.9974
  - Windows Server 2022 < 10.0.20348.5870
  - Windows Server 2025 < 10.0.26100.33822
briefing:
  changed: According to BleepingComputer, Microsoft released emergency out-of-band
    updates to fix Windows activation and licensing failures caused by this
    month's security updates.
  why: CVE-2026-118737 in Windows Remote Procedure Call Runtime, rated 8.1 high,
    allows an unauthorized attacker to execute code over a network. The November
    10, 2026 security updates address it and enable clients to offer NTLM
    message signing by default for non-anonymous connections.
  action: Apply the Windows security update released on November 10, 2026 or later
    for CVE-2026-118737, and install the matching out-of-band update where
    activation or licensing through SLMGR is failing.
sources:
  - title: "NVD: CVE-2026-118737"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-118737
  - title: Windows message center
    url: https://learn.microsoft.com/en-us/windows/release-health/windows-message-center
  - title: "BleepingComputer: Microsoft pushes Windows emergency updates to fix
      activation failures"
    url: https://www.bleepingcomputer.com/news/microsoft/microsoft-new-windows-emergency-updates-fix-activation-licensing-failures/
---

## What changed

According to BleepingComputer, Microsoft released emergency out-of-band (OOB) updates to fix Windows activation and licensing failures caused by this month's security updates. The report says the known issue affects organizations that automate Windows activation and licensing with the Software Licensing Management Tool (SLMGR) command-line tool.

Windows security updates released on November 10, 2026 and later address CVE-2026-118737, an improper verification of cryptographic signature vulnerability in Windows Remote Procedure Call (RPC) Runtime that allows an unauthorized attacker to execute code over a network. The CVE was published on November 10, 2026 and carries a Common Vulnerability Scoring System (CVSS) v3.1 base score of 8.1, rated high. It is classified as CWE-347 (Improper Verification of Cryptographic Signature).

## Why it matters

Those updates enable clients to offer NTLM (NT LAN Manager) message signing by default for non-anonymous connections. That change helps reduce exposure to NTLM relay attacks and provides auditing to identify connections that aren't using signing.

## Affected products

Windows 10 Version 1607 and Windows Server 2016 are affected before version 10.0.14393.9688. Windows 10 Version 1809 and Windows Server 2019 before version 10.0.17763.9487. Windows 10 Version 21H2 is affected before version 10.0.19044.7846, and Windows 10 Version 22H2 before version 10.0.19045.7846.

Windows 11 Version 23H2 is affected before version 10.0.22631.7711, Windows 11 Version 24H2 before version 10.0.26100.9974, and Windows 11 Version 25H2 before version 10.0.26200.9974. Windows 11 Version 26H1 is affected before version 10.0.28000.3501, and Windows 11 Version 26H2 before version 10.0.26300.9974. Windows Server 2022 is affected before version 10.0.20348.5870, and Windows Server 2025 before version 10.0.26100.33822.

## What to do

Install a Windows security update released on November 10, 2026 or later to address CVE-2026-118737. According to the report, the out-of-band updates are Windows Server 2025 KB5136489, Windows Server 2022 KB5136487, Windows Server 2019 and Windows 10 Enterprise LTSC 2019 KB5136490, Windows 11, version 23H2 KB5136483, and Windows 10, version 22H2 ESU (Extended Security Updates) and Windows 10 Enterprise LTSC 2021 KB5136493.

For Windows Server 2025, Windows Server 2022, Windows Server 2019, and Windows 10, those out-of-band updates are available only through the Microsoft Update Catalog. The Windows 11, version 23H2 optional out-of-band update is available through Windows Update and the Microsoft Update Catalog.

<!-- cspell:words NTLM SLMGR LTSC -->
