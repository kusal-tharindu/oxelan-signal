---
title: ScreenConnect extension flaw used to deploy backdoor malware at MSPs
date: 2026-11-12T10:50:08.348Z
format: news
summary: According to SecurityWeek, attackers compromised hundreds of endpoints
  across dozens of ConnectWise ScreenConnect customers after exploiting a flaw
  in the RMM+ extension.
description: Attackers abused a bug in the RMM+ extension for ConnectWise
  ScreenConnect to deploy rogue clients and the SCKit backdoor toolkit.
tags:
  - malware
  - incident-response
impact: high
action: review
status: current
affects:
  - ConnectWise ScreenConnect deployments with the RMM+ extension
  - RMM+ 1.0.31
  - RMM+ 1.0.32
briefing:
  changed: According to SecurityWeek, a campaign compromised hundreds of endpoints
    across dozens of ConnectWise ScreenConnect customers, with attackers
    deploying rogue ScreenConnect clients and a malware toolkit called SCKit.
  why: The reported entry point is a shared access key in the RMM+ extension that
    can default to blank, letting an attacker reach managed endpoints through
    ScreenConnect's authentication check.
  action: Disable the RMM+ family extensions in on-premises ScreenConnect
    deployments and review the indicators of compromise Huntress and ConnectWise
    released.
sources:
  - title: "SecurityWeek: Hackers Deploy Malware in Fresh ScreenConnect Campaign"
    url: https://www.securityweek.com/hackers-deploy-malware-in-fresh-screenconnect-campaign/
---

According to SecurityWeek, a campaign has compromised hundreds of endpoints across dozens of ConnectWise ScreenConnect customers. The attacks were observed on November 11, when, the report says, the attackers abused unauthorized access to cloud-hosted ScreenConnect panels to run commands on managed endpoints.

According to SecurityWeek, the campaign compromised at least 6 MSPs (managed service providers) and 288 hosts across 48 organizations. The attackers hit all 288 compromised hosts within 90 minutes.

## How it worked

According to SecurityWeek, the entry point was RMM+, a third-party extension for managing ScreenConnect sessions that uses a shared access key to bypass ScreenConnect's authentication mechanism. The report says the attackers likely exploited a bug in versions 1.0.31 and 1.0.32, where the access key defaults to blank if it is not configured, allowing an attacker to bypass authentication with an empty value. From there, the commands deployed rogue ScreenConnect clients and a malware toolkit called SCKit that provides persistent backdoor access, intercepts session cookies, and can self-replicate.

According to SecurityWeek, ConnectWise disabled five extensions from the RMM+ family across approximately 400 ScreenConnect environments: Labtech Plus, RMM Plus, RMM+, RMM Plus Password Link, and RMM+ Password Link. ConnectWise stated that the presence of the extensions alone does not establish compromise.

## What to do

Huntress and ConnectWise recommend that organizations disable the extensions in their on-premises ScreenConnect deployments. Both have released indicators of compromise (IoCs, such as file names or network addresses that suggest an intrusion) associated with the campaign.

<!-- cspell:words Labtech -->
