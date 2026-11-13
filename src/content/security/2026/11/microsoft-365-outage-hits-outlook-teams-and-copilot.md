---
title: Microsoft 365 outage hits Outlook, Teams and Copilot
date: 2026-11-12T20:41:09.472Z
format: news
summary: A worldwide Microsoft 365 outage affected Outlook, Teams and Copilot,
  and Microsoft traced the elevated load to servers becoming unexpectedly
  unavailable rather than to a traffic increase.
description: Microsoft paused deployments and restarted servers after a
  widespread outage affected Outlook, Teams and Copilot.
tags:
  - incident-response
  - inference
impact: high
action: review
status: evolving
affects:
  - Outlook
  - Microsoft Teams
  - Microsoft 365 Copilot
briefing:
  changed: Microsoft investigated a widespread Microsoft 365 outage affecting
    Outlook, Teams and Copilot, and the incident began Thursday at 1:26 PM ET.
  why: Microsoft determined that servers becoming unexpectedly unavailable, not a
    traffic increase, strained the remaining infrastructure, and users in any
    region could be affected.
  action: Track advisory MO1550821 while Microsoft paused deployments,
    redistributed connection traffic and restarted affected servers to restore
    capacity.
sources:
  - title: "BleepingComputer: Massive Microsoft 365 outage disrupts Outlook, Teams,
      Copilot worldwide"
    url: https://www.bleepingcomputer.com/news/microsoft/massive-microsoft-365-outage-disrupts-outlook-teams-copilot-worldwide/
---

According to BleepingComputer, Microsoft investigated a widespread outage affecting multiple Microsoft 365 services, including Outlook, Microsoft Teams and Microsoft 365 Copilot. The report said the incident began Thursday at 1:26 PM ET (Eastern Time). Microsoft tracked the disruption in a Microsoft 365 admin center advisory, MO1550821, and confirmed that customers may be unable to connect to multiple services.

## Scope and cause

The report said Microsoft initially reported Exchange Online connectivity problems in the Americas but later confirmed that users in any region could be affected. Microsoft determined the elevated load was not driven by an increase in traffic but by a number of servers being unexpectedly unavailable, which strained the remaining infrastructure.

## Why it matters in production

A single disruption that reaches Outlook, Teams and Copilot at once is a continuity problem, not a feature-level bug. A separate, earlier Microsoft Teams incident tracked as TM1550488 lasted from 9:45 AM to 10:53 AM ET and caused delays or failures when sending messages. Microsoft said the earlier Teams incident has been fully resolved, but it has not indicated whether the two incidents are related, and the ongoing Microsoft 365 outage had not yet been resolved.

## What to do

Microsoft paused all deployments, redistributed connection traffic across its worldwide infrastructure and moved additional traffic away from affected systems to reduce load. It also restarted affected servers to restore capacity and return services to normal operation. Administrators should track advisory MO1550821 for status, because the cited reports describe no customer-side patch or configuration change that resolves the outage.
