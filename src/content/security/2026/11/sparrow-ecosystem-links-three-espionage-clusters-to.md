---
title: Sparrow ecosystem links three espionage clusters to CopperDragon
date: 2026-11-10T19:47:32.302Z
format: news
summary: According to The Hacker News, Check Point Research tracks
  SilentDelivery, OceanGate and DarkWire, three clusters linked through the
  Sparrow malware ecosystem and a China-nexus toolmaker called CopperDragon.
description: The Hacker News details SilentDelivery, OceanGate, and DarkWire,
  three clusters linked by the Sparrow ecosystem and CopperDragon.
tags:
  - malware
  - authentication
impact: high
action: review
status: current
briefing:
  changed: The Hacker News reports that Check Point Research tracks
    SilentDelivery, OceanGate and DarkWire, three clusters linked through the
    Sparrow malware ecosystem and tied to CopperDragon.
  why: The described tooling includes Windows and Linux backdoors, a DNS-tunneling
    variant, and tools that collect credentials.
  action: Review the named clusters and their described tooling against existing
    threat-intelligence and incident-response coverage.
sources:
  - title: "The Hacker News: Three China-Nexus Espionage Campaigns Linked Through
      Sparrow Malware Ecosystem"
    url: https://thehackernews.com/2026/11/three-china-nexus-espionage-campaigns.html
---

According to The Hacker News, Check Point Research tracks three threat activity clusters named SilentDelivery, OceanGate, and DarkWire. The report links all three through a malware ecosystem called Sparrow and says the entity behind the framework is codenamed CopperDragon. The report says CopperDragon is assessed to be a digital quartermaster developing tools for China-nexus threat actors including FamousSparrow, Earth Estries, Tropic Trooper, UAT-9244, and UAT-8302.

SilentDelivery began in early 2026 and conducts watering hole attacks targeting Europe and Asia, distributing a backdoor called SquadC through trojanized MSI installers. The report says compromised websites were related to government, shipping, IT, and research sectors in the Czech Republic, Germany, France, Taiwan, Nepal, Hong Kong, and Indonesia. OceanGate operated in 2025-2026, focusing on Asian organizations with a SparrowDoor variant after gaining access via internet-facing Linux servers. DarkWire operated from mid 2025, targeting telecommunications providers and government organizations across Latin America with backdoors CopperDoor and CopperDNS.

## Why it matters

SquadC is a Windows backdoor written in C/C++ that establishes persistence through a Windows Registry Run key masquerading as a Windows update assistant. OceanGate's Linux phase involves two new backdoors, AnnobinDoor and SparrowShell. AnnobinDoor is a Go-based backdoor supporting remote access, interactive shell, file management, SOCKS proxying, SSH tunneling, port forwarding, and reverse connections. CopperDNS is a CopperDoor variant that communicates through DNS tunneling using MX queries. CopperLsa collects passwords, hashes, and authentication tokens from NTLM and Kerberos, and CopperLsass dumps the LSASS process for credential harvesting.

## What to do

The report describes the clusters and their tooling but does not list fixed versions or mitigation steps. Review the named clusters and tool descriptions against existing threat-intelligence and incident-response coverage. Organizations in the listed sectors and regions should treat the report as a prompt to check exposure.

<!-- cspell:words Estries trojanized Annobin NTLM Lsass LSASS -->
