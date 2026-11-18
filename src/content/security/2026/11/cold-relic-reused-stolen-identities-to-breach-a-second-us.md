---
title: Cold Relic reused stolen identities to breach a second US organization
date: 2026-11-18T13:42:14.736Z
format: news
summary: Mandiant says Cold Relic reused data and identities stolen in one
  breach to phish a second US organization, then registered a new multi-factor
  authentication device to keep access.
description: Mandiant traced a 2026 breach to Cold Relic, which reused stolen
  identities and a messaging-app phishing lure against a second US organization.
tags:
  - data-breach
  - phishing
  - authentication
  - incident-response
impact: high
action: review
status: current
affects:
  - US-based organizations using Microsoft Entra ID as federated single sign-on
    for Google Workspace
  - Google Workspace
briefing:
  changed: Mandiant investigated a 2026 compromise at a US-based organization
    where Cold Relic reused data, a corporate staff directory, and identities
    stolen in a late-2025 breach at a separate US-based organization.
  why: The second intrusion used an impersonated employee, phishing links for
    Microsoft Entra ID, and a new multi-factor authentication (MFA) device
    registered in the single sign-on (SSO) solution.
  action: The report recommends enriching authentication logs with residential
    proxy and virtual private network (VPN) Internet Protocol (IP) reputation
    feeds and applying conditional access policies to block or detect logons
    from known proxy networks.
sources:
  - title: "COLD RELIC: A Case Study in Impersonation and Compromise | Google Cloud
      Blog"
    url: https://cloud.google.com/blog/topics/threat-intelligence/cold-relic-a-case-study-in-impersonation-and-compromise
---

Cold Relic, a Russia-linked cyber espionage group formerly tracked as COLDRIVER and UNC4057, reused data, a staff directory, and identities stolen in a late-2025 breach to compromise a second US organization in 2026. Mandiant investigated that compromise and reported the reuse. The US Department of Justice has assessed that Cold Relic operates within Russia's Federal Security Service (FSB).

## The first intrusion

For initial access, Cold Relic used a residential proxy network in the US located near the victim. It authenticated with stolen Super Admin credentials and an MFA push notification fatigue attack, then used passkeys, MFA backup codes, and rogue MFA devices to retain access.

The group downloaded the organization's entire cloud storage drive by mass sharing files to a Cold Relic-operated email account and downloading files directly. It accessed the Admin Console, queried security investigation and email audit logs, and deleted Alert Center notifications to remove forensic evidence. It also exported full employee lists and initiated a domain-wide export through Google Workspace Customer Takeout. Cold Relic maintained access for several months after the mass data theft and antiforensics activity.

## The second intrusion

After removal from the first victim, Cold Relic used email accounts impersonating employees of that organization to target internal employees and associates with renewed social engineering. In the second intrusion, it compromised a Microsoft Entra ID user account of a US-based organization that used Entra ID as its federated single sign-on for Google Workspace. Cold Relic impersonated an employee of the first victim to establish a pretext over a secure messaging app and shared phishing links designed to steal credentials and authentication tokens for Entra ID.

After authentication with stolen credentials, it registered and used a new MFA device in the SSO solution. It obtained credentials to the second organization and performed a bulk download of files accessible in the compromised user's cloud drive. The actor changed its messaging profile name to a new persona, likely to target other organizations in the same professional circles.

## Why it matters

Cold Relic's campaigns demonstrate the convergence of human-centric social engineering and cloud identity abuse. The group remained active, with new phishing operations observed as recently as November 2026.

## What to do

The report recommends enriching authentication logs with residential proxy and VPN and IP reputation feeds. It also recommends applying conditional access policies to block or detect logons from known proxy networks.

<!-- cspell:words Mandiant COLDRIVER antiforensics -->
