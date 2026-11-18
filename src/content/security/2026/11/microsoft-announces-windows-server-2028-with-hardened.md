---
title: Microsoft announces Windows Server 2028 with hardened defaults
date: 2026-11-18T09:42:46.375Z
format: news
summary: According to BleepingComputer, Microsoft announced Windows Server 2028
  at Ignite 2026 with hardened Server Core defaults, post-quantum TLS and
  Trusted Launch for VMs.
description: Windows Server 2028 was announced at Ignite 2026 with hardened
  Server Core defaults, Kerberos over NTLM and post-quantum TLS.
tags:
  - security-updates
  - authentication
impact: info
action: review
status: current
briefing:
  changed: According to BleepingComputer, Microsoft announced Windows Server 2028
    at Ignite 2026, with a hardened Server Core configuration by default and a
    new security baseline.
  why: The baseline covers hundreds of security settings enabled from first boot,
    so teams planning an upgrade have to test workloads against a hardened
    default rather than an opt-in profile.
  action: Test the release through the Windows Insider Program for Windows Server
    or the Windows Server Technology Adoption Program (TAP), and record which
    baseline settings a workload needs relaxed.
sources:
  - title: "BleepingComputer: Microsoft announces Windows Server 2028 with hardened
      security"
    url: https://www.bleepingcomputer.com/news/microsoft/microsoft-announces-windows-server-2028-with-hardened-security/
---

According to BleepingComputer, Microsoft announced Windows Server 2028 at the Ignite 2026 conference on Tuesday. The report says the new version comes with a hardened Server Core configuration by default and a new security baseline that lets administrators relax specific settings.

The hardened settings include Kerberos over NTLM (NT LAN Manager), a protected LSASS (Local Security Authority Subsystem Service) process, and SMB (Server Message Block) signing and encryption. TLS is limited to modern cipher suites with hybrid post-quantum key exchange (ML-KEM), and stored keys are strongly protected. Virtual machines get Trusted Launch, which the announcement describes as guaranteeing boot integrity across a VM fleet, plus Confidential VM support.

Intune management for Windows Servers brings endpoint-management workflows for configuration, compliance, applications, and updates to eligible, persistent servers. On storage, native NVMe storage is enabled by default and the release can boot from ReFS.

## Why it matters

Microsoft says the hardened baseline covers hundreds of security settings enabled from first boot, and that it is still working on NTLM blocking, hardware-backed platform protection, print and RPC hardening, and more. Since the baseline applies by default and administrators can relax only specific settings, an upgrade review has to start from those settings and decide which ones a workload needs changed.

## What to do

Administrators who want to test Windows Server 2028 can register for the Windows Insider Program for Windows Server or apply to enroll in the Windows Server Technology Adoption Program (TAP) for earlier access. Record which baseline settings your workloads need relaxed during that evaluation, so the compatibility review reflects real configuration rather than assumptions.

<!-- cspell:words NTLM LSASS Intune -->
