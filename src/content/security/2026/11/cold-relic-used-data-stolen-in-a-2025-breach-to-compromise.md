---
title: Cold Relic used data stolen in a 2025 breach to compromise a second
  organization
date: 2026-11-18T06:39:55.812Z
format: news
summary: According to The Hacker News, Mandiant and GTIG linked a 2026 breach at
  a U.S.-based organization to directory data and identities harvested in a
  late-2025 compromise at another U.S. entity.
description: Cold Relic turned harvested Google Workspace data and identities
  into phishing that reached a second organization's Entra ID single sign-on.
tags:
  - incident-response
  - phishing
  - data-breach
impact: high
action: review
status: current
affects:
  - Cloud productivity environment of an unspecified U.S.-based organization,
    compromised in late 2025
  - Microsoft Entra ID user account at a second U.S.-based organization using
    Entra ID as federated single sign-on for Google Workspace
briefing:
  changed: According to The Hacker News, Mandiant and GTIG traced a 2026
    compromise at a U.S.-based organization to data, the corporate staff
    directory, and identities harvested in a late-2025 compromise at a separate
    U.S.-based entity.
  why: The harvested identities and directory data fed phishing that reached an
    Entra ID user account federated with Google Workspace, and a newly
    registered MFA device kept that account accessible during the intrusion.
  action: Enrich authentication logs with residential proxy and VPN IP reputation
    feeds and apply conditional access policies to block or detect logons from
    known proxy networks, as GTIG recommends.
sources:
  - title: "COLD RELIC: A Case Study in Impersonation and Compromise | Google Cloud
      Blog"
    url: https://cloud.google.com/blog/topics/threat-intelligence/cold-relic-a-case-study-in-impersonation-and-compromise
  - title: "The Hacker News: Russian COLD RELIC Hackers Use Stolen Google Workspace
      Data to Breach Second U.S. Organization"
    url: https://thehackernews.com/2026/11/russian-cold-relic-hackers-use-stolen.html
---

According to The Hacker News, Mandiant and Google Threat Intelligence Group (GTIG) investigated a 2026 compromise at a U.S.-based organization in which the adversary used data, the corporate staff directory, and identities harvested during a late-2025 compromise at a separate U.S.-based entity. The earlier intrusion compromised the cloud productivity environment of an unspecified U.S.-based organization in late 2025.

The group is tracked as Cold Relic, Callisto, Gossamer Bear, and Star Blizzard, and the U.S. Department of Justice assessed it as a Russian state-sponsored threat group operating within Russia's Federal Security Service (FSB). GTIG has observed evidence of new Cold Relic phishing operations as recently as November 2026.

In the first organization, initial access came through a residential proxy network located in close geographical proximity to the victim. Stolen credentials of a Super Admin account were combined with a multi-factor authentication (MFA) push notification fatigue attack, and the actor gained access after the victim accepted an MFA request. The report says Cold Relic registered rogue MFA devices, passkeys, and MFA backup codes to establish long-term persistence, then used Super Admin privileges to download the organization's cloud storage drive contents and export full employee lists and domain-wide data.

The second organization used Microsoft Entra ID as its federated single sign-on (SSO) identity provider for Google Workspace, and Cold Relic compromised an Entra ID user account there. According to the report, the actor impersonated an employee of the first organization over a secure messaging app and shared phishing links designed to harvest Entra ID credentials and authentication tokens; after authentication it registered and used a new MFA device in the SSO solution to retain access, then performed a bulk download of files in the compromised user's cloud drive.

## Why it matters

Cold Relic viewed, modified, and deleted Alert Center notifications to remove forensic evidence of the initial intrusion, according to the report. After the mass data theft, the attackers continued to maintain access over several months.

## What to do

GTIG recommends enriching authentication logs with residential proxy and virtual private network (VPN) IP reputation feeds, alerting on sudden autonomous system number (ASN) shifts for privileged accounts, and applying conditional access policies to block or detect logons from known proxy networks. The report notes that unrevoked attacker-enrolled passkeys persisted across password and session resets and bypassed device registration controls.

<!-- cspell:words Mandiant GTIG -->
