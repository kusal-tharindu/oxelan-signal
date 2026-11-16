---
title: Microsoft traces a global outage to a July software bug
date: 2026-11-16T17:46:54.435Z
format: news
summary: According to BleepingComputer, a bug introduced in July caused the
  worldwide Microsoft 365 outage, which lasted nearly 24 hours on November 12
  and disrupted Outlook, Exchange Online, Teams, and Copilot.
description: The report links the November 12 outage to a July bug in Microsoft
  365 networking gateway servers.
tags:
  - security-updates
  - incident-response
impact: high
action: none
status: current
affects:
  - Outlook
  - Exchange Online
  - Teams
  - Copilot
briefing:
  changed: A software bug introduced in July caused the worldwide Microsoft 365
    outage, which lasted nearly 24 hours on November 12 and disrupted Outlook,
    Exchange Online, Teams, and Copilot.
  why: The defect sat in Microsoft 365 networking gateway servers, and the report
    says more than 80% of servers were unresponsive at the lowest point.
  action: Microsoft developed and deployed a fix and says it has since increased
    capacity, improved monitoring, and added safeguards; a final post-incident
    report was expected later that week.
sources:
  - title: "BleepingComputer: Microsoft says months-old bug caused global Microsoft
      365 outage"
    url: https://www.bleepingcomputer.com/news/microsoft/microsoft-says-months-old-bug-caused-global-microsoft-365-outage/
---

According to BleepingComputer, a software bug introduced in July caused the worldwide Microsoft 365 outage, and the disruption lasted nearly 24 hours on November 12. The report says the incident began at 11:20 AM ET on Thursday, November 12, and that services were fully restored at 11:10 AM ET the following day.

## What failed

Outlook, Exchange Online, Teams, and Copilot were disrupted, leaving users unable to access their email. The bug arrived through an update developed for Microsoft 365 networking gateway servers, the report says. Microsoft's normal load testing did not detect the latent issue because of the traffic mix and SKUs used in its labs, and the contention issue is worsened on machines with more cores and newer hardware.

Teams had switched automatically to the networking infrastructure used by Exchange Online about 15 hours before the outage. Nearly 14% of the gateway's server capacity was already offline because of an unrelated issue, and at its lowest more than 80% of servers were unresponsive. The previously unknown defect was encountered across the fleet in less than two hours and rendered servers unresponsive. Exchange Online could not make the same switch, so users could not reach their mailboxes.

## Why it matters

Capacity was already reduced before the defect spread across the fleet, which is the sequence the report describes. Exchange Online users could not access their mailboxes while the incident continued.

## Recovery

Microsoft engineers developed a fix and deployed it across affected servers. Microsoft says it has since increased capacity, improved monitoring, and added safeguards to prevent traffic redirection from triggering similar cascading failures.

A final post-incident report was expected later that week. Charles Lamanna, Microsoft's executive vice president of Copilot, Agents, and Platform, apologized for the disruption.

<!-- cspell:words Lamanna -->
