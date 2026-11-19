---
title: Critical vCenter authentication bypass fixed in Broadcom advisory
date: 2026-11-19T20:40:02.821Z
format: news
summary: Broadcom's VMSA-2026-0009 fixes CVE-2026-123890, a critical vCenter
  authentication bypass, along with SDDC Manager and VMware Tools flaws.
description: VMSA-2026-0009 fixes CVE-2026-123890 and related SDDC Manager and
  VMware Tools flaws; fixed versions are available.
tags:
  - cve
  - security-updates
impact: critical
action: review
status: current
affects:
  - VMware vCenter
  - SDDC Manager
  - SDDC Manager / VCF Installer
  - Cloud Foundation 5.x vCenter
  - VMware Tools for Windows
  - Telco Cloud Platform and Telco Cloud Infrastructure vCenter
briefing:
  changed: Broadcom published VMSA-2026-0009 on 2026-11-19, fixing
    CVE-2026-123890, an authentication bypass in the VMware Directory Service in
    vCenter, and flaws in SDDC Manager and VMware Tools.
  why: CVE-2026-123890 has a CVSSv3 base score of 9.8 and lets an attacker with
    network access to vCenter bypass authentication and gain unauthorized
    access.
  action: Upgrade vCenter and SDDC Manager to 9.1.1.0200 and VMware Tools to
    13.1.5.0; Broadcom says 9.1.1.0200 contains the fixes for the SDDC Manager
    CVEs.
sources:
  - title: "NVD: CVE-2026-123890"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-123890
  - title: "NVD: CVE-2026-123891"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-123891
  - title: "NVD: CVE-2026-123892"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-123892
  - title: "NVD: CVE-2026-123893"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-123893
  - title: "NVD: CVE-2026-123894"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-123894
  - title: Support Content Notification - Support Portal - Broadcom support portal
    url: https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/39495
  - title: "The Hacker News: Critical VMware vCenter Flaw (CVSS 9.8) Lets Network
      Attackers Bypass Authentication"
    url: https://thehackernews.com/2026/11/critical-vmware-vcenter-flaw-cvss-98.html
---

## What changed

Broadcom published advisory VMSA-2026-0009 on November 19, 2026, addressing CVE-2026-123890 (Common Vulnerabilities and Exposures) and related flaws. CVE-2026-123890 is an authentication bypass in the VMware Directory Service in VMware vCenter. Broadcom rates it Critical with a CVSSv3 (Common Vulnerability Scoring System version 3) base score of 9.8.

## Who is affected

A malicious actor with network access to vCenter may exploit CVE-2026-123890 to bypass authentication and gain unauthorized access to the system. The advisory also covers CVE-2026-123891, an SQL (Structured Query Language) injection flaw in SDDC (Software-Defined Data Center) Manager, CVE-2026-123892, an authenticated command-injection flaw in SDDC Manager, and CVE-2026-123893, a local privilege-escalation flaw in SDDC Manager. CVE-2026-123894 is a SAML (Security Assertion Markup Language) token signature bypass in VMware Tools for Windows. Broadcom rates the SDDC Manager flaws Important and Moderate, with CVSSv3 base scores of 8.1, 7.2, and 6.7, and rates the VMware Tools flaw Moderate at 6.7.

## Fixed versions

| Product | Fixed versions | |---|---| | VMware vCenter | 9.1.1.0200, 9.0.2.0200, 8.0 U3m | | SDDC Manager | 9.1.1.0200, 9.0.2.0100, 5.2.5 | | SDDC Manager / VCF (VMware Cloud Foundation) Installer | 9.1.1.0200, 9.0.2.0100 | | Cloud Foundation 5.x vCenter | 5.2.5 | | VMware Tools | 13.1.5.0, 12.5.5 | | Telco Cloud Platform and Telco Cloud Infrastructure vCenter | KB (Knowledge Base) 463116 |

## Why it matters

The production consequence is that a network-reachable vCenter can be accessed without authentication. According to The Hacker News, Broadcom has not reported any attacks exploiting the flaw, or any public exploit code. The report also says credit for reporting the bug goes to Mandiant. The report says fixed versions are out for all supported branches and that the company lists no workaround.

## What to do

Upgrade vCenter to 9.1.1.0200. Upgrade SDDC Manager and VCF Installer to 9.1.1.0200; Broadcom says this is the latest available version and contains the fixes for CVE-2026-123891, CVE-2026-123892, and CVE-2026-123893. Upgrade VMware Tools to 13.1.5.0. For Telco Cloud Platform and Telco Cloud Infrastructure vCenter, apply the fixes covered by KB463116.

<!-- cspell:words VMSA SDDC Telco Mandiant -->
