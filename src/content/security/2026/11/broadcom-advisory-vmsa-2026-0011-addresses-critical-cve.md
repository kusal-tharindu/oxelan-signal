---
title: Broadcom advisory VMSA-2026-0011 addresses critical CVE-2026-123911 in ESX
date: 2026-11-24T17:40:22.043Z
format: news
summary: Broadcom's VMSA-2026-0011 addresses CVE-2026-123911, a critical
  use-after-free in the ESX I/O filter service that can allow code execution on
  the host.
description: Broadcom advisory VMSA-2026-0011 addresses CVE-2026-123911, a
  critical use-after-free in the ESX I/O filter service.
tags:
  - cve
  - security-updates
impact: critical
action: review
status: current
affects:
  - VMware ESX
  - VMware ESXi 8.x
briefing:
  changed: Broadcom's VMSA-2026-0011, issued November 24, 2026, addresses
    CVE-2026-123911, a use-after-free in the ESX I/O filter service rated
    Critical with a maximum CVSSv3 base score of 9.8.
  why: A malicious actor with network access to ESX may exploit the flaw to
    execute code on the host.
  action: Use VMSA-2026-0011 to address CVE-2026-123911; if that is not possible,
    restrict port 9080 access to the vCenter Server IP via the ESXi firewall.
sources:
  - title: Manual interim workaround for CVE-2026-123910 and CVE-2026-123911 on ESXi
    url: https://knowledge.broadcom.com/external/article/463535
  - title: Support Content Notification - Support Portal - Broadcom support portal
    url: https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/39626
---

Broadcom published advisory VMSA-2026-0011 on November 24, 2026. The advisory addresses CVE-2026-123911 and other VMware vulnerabilities. CVE-2026-123911, a Common Vulnerabilities and Exposures (CVE) identifier, is a use-after-free in the ESX I/O filter service.

VMware ESXi 8.x runs an IOFilterVP service on port 9080 that is vulnerable to CVE-2026-123911. The vulnerability is a critical code-execution issue impacting ESX.

## Why it matters in production

A malicious actor with network access to ESX may exploit CVE-2026-123911 to execute code on the host. Broadcom rates the issue Critical, with a maximum CVSSv3 (Common Vulnerability Scoring System version 3) base score of 9.8.

## What to do

Check the full VMSA-2026-0011 advisory for CVE-2026-123911 and other VMware vulnerabilities. If an update cannot be applied immediately, use Broadcom's interim workaround for ESXi 8.x. The workaround restricts port 9080 access to the vCenter Server IP via the ESXi firewall. Treat the workaround as interim and apply the advisory's updates when possible.

<!-- cspell:words VMSA -->
