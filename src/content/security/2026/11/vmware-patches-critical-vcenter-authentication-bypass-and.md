---
title: VMware patches critical vCenter authentication bypass and ESXi USB flaw
date: 2026-11-27T10:44:34.224Z
format: news
summary: Broadcom's VMSA-2026-0011 fixes a critical vCenter authentication
  bypass (CVE-2026-123903) and a critical ESXi, Workstation and Fusion
  out-of-bounds write (CVE-2026-123912).
description: VMSA-2026-0011 fixes CVE-2026-123903 in vCenter and CVE-2026-123912
  in ESXi, Workstation and Fusion; fixed builds are listed.
tags:
  - cve
  - security-updates
impact: critical
action: review
status: current
affects:
  - VMware vCenter Server 9.1.x.x, 9.0.x.x and 8.0
  - VMware ESX 9.1.x.x, 9.0.x.x and 8.0
  - VMware Cloud Foundation 5.x
  - VMware Telco Cloud Platform 3.0, 4.x, 5.0.x, 5.1.x and 5.2
  - VMware Telco Cloud Infrastructure 3.0
  - VMware Workstation 25H2
  - VMware Fusion 25H2
briefing:
  changed: Broadcom advisory VMSA-2026-0011 addresses multiple vulnerabilities in
    VMware ESX, vCenter, Workstation, Fusion, Tools, and Avi Load Balancer.
  why: CVE-2026-123903 is a vCenter authentication bypass rated 9.8, and a local
    administrator on a virtual machine may exploit CVE-2026-123912 to execute
    code as the VMX process on the host.
  action: "Apply the fixed builds: vCenter 9.1.2, 9.0.2.0300, or 8.0 U3m; ESX
    ESXi-9.1.2.0-25946735, ESXi-9.0.2.0200-25953133, or ESXi80U3m-25926933;
    Cloud Foundation 5.2.5; Telco Cloud KB463501; Workstation and Fusion
    26H1u1."
sources:
  - title: "NVD: CVE-2026-123903"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-123903
  - title: "NVD: CVE-2026-123912"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-123912
  - title: Support Content Notification - Support Portal - Broadcom support portal
    url: https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/39626
---

Broadcom advisory VMSA-2026-0011 addresses multiple vulnerabilities in VMware ESX, vCenter, Workstation, Fusion, Tools, and Avi Load Balancer. The advisory was issued on 2026-11-24 with an advisory severity of Critical and a CVSSv3 (Common Vulnerability Scoring System version 3) range of 3.4-9.8. The Common Vulnerabilities and Exposures (CVE) records for CVE-2026-123903 and CVE-2026-123912 were published on 2026-11-26.

## What is affected

CVE-2026-123903 is an authentication bypass in the VMware Directory Service in vCenter with a maximum CVSSv3 base score of 9.8. VMware vCenter Server 9.1.x.x is fixed in 9.1.2, 9.0.x.x is fixed in 9.0.2.0300, and 8.0 is fixed in 8.0 U3m. VMware Telco Cloud Platform versions 3.0, 4.x, 5.0.x, 5.1.x and 5.2 are fixed in KB463501 for CVE-2026-123903, and versions 5.0.x and 5.1.x are fixed in KB463501 for CVE-2026-123912.

CVE-2026-123912 is an out-of-bounds write in the XHCI USB controller in ESXi, Workstation, and Fusion with a maximum CVSSv3 base score of 9.3. A malicious actor with local administrative privileges on a virtual machine may exploit CVE-2026-123912 to execute code as the virtual machine's VMX process running on the host. VMware ESX 9.1.x.x is fixed in ESXi-9.1.2.0-25946735, 9.0.x.x is fixed in ESXi-9.0.2.0200-25953133, and 8.0 is fixed in ESXi80U3m-25926933. VMware Workstation 25H2 and Fusion 25H2 are fixed in 26H1u1.

## Why it matters

CVE-2026-123903 bypasses authentication in the VMware Directory Service. CVE-2026-123912 may run code as the VMX process on the host after local administrative access to a virtual machine.

## What to do

For vCenter Server on 9.1.x.x, 9.0.x.x, or 8.0, apply 9.1.2, 9.0.2.0300, or 8.0 U3m respectively. For ESX on 9.1.x.x, 9.0.x.x, or 8.0, apply ESXi-9.1.2.0-25946735, ESXi-9.0.2.0200-25953133, or ESXi80U3m-25926933 respectively. VMware Cloud Foundation 5.x is fixed in 5.2.5 for CVE-2026-123903 and CVE-2026-123912.

VMware Telco Cloud Platform and Telco Cloud Infrastructure are fixed via KB463501 for CVE-2026-123903, and VMware Telco Cloud Platform is fixed via KB463501 for CVE-2026-123912. VMware Workstation 25H2 and Fusion 25H2 are fixed in 26H1u1.

<!-- cspell:words VMSA Telco XHCI -->
