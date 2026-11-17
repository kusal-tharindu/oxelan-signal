---
title: Operation ShadowCloud backdoors hide command-and-control traffic in
  GitHub and SharePoint
date: 2026-11-17T12:58:33.095Z
format: news
summary: According to The Hacker News, Kaspersky's Operation ShadowCloud
  campaign delivers the GitDoor and GraphDoor backdoors, which hide
  command-and-control traffic behind Microsoft SharePoint, GitHub, and Ably.
description: Kaspersky's Operation ShadowCloud delivers the GitDoor and
  GraphDoor backdoors, which hide command traffic in Microsoft SharePoint,
  GitHub, and Ably.
tags:
  - malware
  - threat-model
impact: high
action: review
status: current
affects:
  - Government organizations in Asia and Africa
briefing:
  changed: According to The Hacker News, Kaspersky identified a campaign it calls
    Operation ShadowCloud in early 2026 and linked it to two previously
    undocumented backdoors, GitDoor and GraphDoor.
  why: The two implants run their command-and-control traffic over Microsoft
    SharePoint, GitHub, and Ably, and GitDoor supports 26 commands.
  action: The reporting cited here names no fixed version, patch, or mitigation;
    the details a defender can act on are the services the implants abuse and
    the sectors the campaign targets.
sources:
  - title: "The Hacker News: New GitDoor and GraphDoor Backdoors Turn GitHub and
      SharePoint Into Covert C2 Channels"
    url: https://thehackernews.com/2026/11/new-gitdoor-and-graphdoor-backdoors.html
---

According to The Hacker News, Kaspersky codenamed the campaign Operation ShadowCloud and identified it in early 2026. The campaign targets government sectors in Asia and Africa and delivers two previously undocumented backdoors, remote-access implants called GitDoor and GraphDoor.

## How the backdoors work

The implants hide command-and-control (C2, the channel used to task a compromised host) traffic behind Microsoft SharePoint, GitHub, and Ably. The threat actor abuses the legitimate MeshAgent utility to drop the two backdoors. According to the report, the attack targeted an unspecified Taiwanese organization.

## Two backdoors, two channels

GitDoor uses GitHub for C2 and supports 26 commands. GraphDoor uses the Microsoft Graph API and stages data on a SharePoint drive.

## Why it matters

Kaspersky says the activity shares some degree of overlap with a China-nexus activity that Sophos tracks as Bronze Sandcastle, and the identity of the threat actor behind the campaign is unknown. The report describes the C2 channel as Microsoft SharePoint, GitHub, and Ably rather than a dedicated endpoint.

## What to do

The reporting cited here names no fixed version, patch, or configuration change for GitDoor and GraphDoor. The details a defender can act on are the services the implants abuse and the sectors the campaign targets.

<!-- cspell:words Kaspersky's Kaspersky Sophos -->
