---
title: Microsoft Entra Connect Health flaw exposed tenant metadata in a data breach
date: 2026-11-21T18:42:25.680Z
format: news
summary: Microsoft fixed a server-side vulnerability in Entra Connect Health
  that attackers exploited to gain read-only access to tenant-level metadata,
  including administrator email addresses.
description: Attackers exploited an Entra Connect Health API flaw and read
  tenant metadata, Microsoft says. No customer software update is required.
tags:
  - data-breach
  - incident-response
impact: high
action: review
status: current
affects:
  - Microsoft Entra Connect Health
briefing:
  changed: Microsoft found a vulnerability in the Entra Connect Health API on
    November 9, 2026, first introduced on July 23, and deployed a server-side
    fix on November 19.
  why: Attackers had unauthorized read-only access to tenant-level metadata,
    including administrator email addresses and tenant configuration
    information.
  action: No customer software update is required. Microsoft recommends alerting
    security teams to targeted phishing and social-engineering attacks, using
    phishing-resistant multifactor authentication for privileged accounts, and
    running the published PowerShell script to view the types of tenant metadata
    that could have been exposed.
sources:
  - title: "BleepingComputer: Microsoft Entra Connect Health flaw exploited to steal
      tenant data"
    url: https://www.bleepingcomputer.com/news/security/microsoft-entra-connect-health-flaw-exploited-to-steal-tenant-data/
---

According to BleepingComputer, Microsoft suffered a data breach after attackers exploited a vulnerability in its Entra Connect Health service, a cloud-based monitoring service for on-premises identity infrastructure. Microsoft discovered the flaw in the Entra Connect Health API (application programming interface) on November 9, 2026, and the report says it was first introduced on July 23.

Microsoft deployed a server-side fix on November 19 to prevent further exploitation. The company finished its investigation on November 20 and began notifying affected organizations.

## What was exposed

The report states that unauthorized parties could access tenant and service-monitoring metadata and potentially modify Connect Health monitoring configurations. Microsoft determined that unauthorized read-only access to tenant-level metadata had occurred, and it did not identify any unauthorized configuration changes.

Exposed information included email addresses of tenant technical contacts and administrator accounts, tenant IDs, display names, initial domain names, country codes, regional information, Microsoft Entra license tiers, and directory synchronization status. An expired certificate previously used to register Connect Health agents with a decommissioned Microsoft internal service was also exposed. The report says the vulnerability did not expose user passwords, password hashes, authentication tokens, valid cryptographic keys, on-premises server and Active Directory topology details, or Azure subscription information.

## Why it matters

Microsoft has not disclosed how many organizations were impacted. The report says more than a dozen administrators reported receiving the notification in a Reddit post.

## What to do

No software updates or other customer remediation are required to address the vulnerability. Microsoft recommends that organizations alert their security teams to potential targeted phishing and social-engineering attacks, and that privileged accounts use phishing-resistant multifactor authentication. Administrators can run the PowerShell script Microsoft published at https://aka.ms/ConnectHealth/scripts to view the types of tenant metadata that could have been exposed.
