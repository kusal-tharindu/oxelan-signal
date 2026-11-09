---
title: U.S. agencies warn refrigeration controller attacks could cause fires
date: 2026-11-09T07:41:24.751Z
format: news
summary: The Cybersecurity and Infrastructure Security Agency, the FBI, and the
  departments of Health and Human Services, Agriculture, and Transportation
  warned that attackers are targeting industrial refrigeration and cold chain
  systems, with risks including fire, inventory loss, and loss of temperature
  visibility.
description: Federal agencies warn that attacks on exposed refrigeration
  controllers could cause fires, inventory loss, and loss of temperature
  visibility.
tags:
  - incident-response
  - authentication
impact: critical
action: review
status: current
affects:
  - industrial refrigeration and cold chain monitoring systems
  - internet-accessible refrigeration controllers
briefing:
  changed: Federal agencies warned that malicious actors are targeting industrial
    refrigeration and cold chain monitoring systems globally.
  why: The agencies warn that exposed controllers can be remotely altered to force
    continuous heating and defrost cycles.
  action: Eliminate public internet exposure of controller panels and keep tested
    backups offsite and offline.
sources:
  - title: US Government Partners Urge Hardening Industrial Refrigeration and Cold
      Chain Monitoring Systems | CISA
    url: https://www.cisa.gov/resources-tools/resources/us-government-partners-urge-hardening-industrial-refrigeration-and-cold-chain-monitoring-systems
  - title: "Cyber Security News: U.S. Agencies Warn of Hackers Targeting Industrial
      Refrigeration to Disrupt Food and Medicine Storage"
    url: https://cybersecuritynews.com/hackers-targeting-industrial-refrigeration-systems/
  - title: "The Hacker News: U.S. Agencies Warn Refrigeration Controller Attacks
      Could Cause Fires and Inventory Losses"
    url: https://thehackernews.com/2026/11/us-agencies-warn-refrigeration.html
---

The Cybersecurity and Infrastructure Security Agency (CISA), the Federal Bureau of Investigation (FBI), and the departments of Health and Human Services (HHS), Agriculture (USDA), and Transportation (DoT) warned that malicious cyber actors are targeting industrial refrigeration and cold chain monitoring systems globally. According to Cyber Security News, the warning was issued on November 5, 2026, and urges operators to secure exposed controllers. The same report says the warning does not name specific attackers, affected vendors, or individual Common Vulnerabilities and Exposures (CVE) identifiers.

## What is affected

The concern is unpatched or internet-accessible controllers. Actors may exploit vulnerabilities or weaknesses in those systems to remotely alter settings and force units into continuous heating and defrost cycles. The report describes possible entry points including authentication bypass, arbitrary code injection, and weak configurations.

## Why it matters

According to The Hacker News, successful exploitation could change temperatures in ways that create a fire hazard, cause inventory loss, or harm consumers who buy products after unsafe storage. The report also says attackers could cause a denial-of-view condition, leaving operators unable to see current temperatures. The Hacker News reports that threat actors have targeted hundreds of supermarkets across Europe by exploiting weaknesses in internet-accessible refrigeration controllers. The report also cites Censys data showing Danfoss StoreView instances exposed globally dropped from 3,004 to 708 between October 9 and November 5, 2026, while Copeland/Dixell XWEB exposure declined from 3,708 to 2,420.

## What to do

The authoring organizations urge eliminating public internet exposure of control system devices and systems, particularly controller panels. According to Cyber Security News, operators should create a dedicated operational technology (OT) virtual local area network (VLAN) to separate OT devices from business networks. The report also says to change default passwords and implement phishing-resistant multifactor authentication (MFA) wherever feasible. It advises keeping device firmware up to date and retiring and replacing legacy end-of-life devices. Operators should maintain current backups offsite and offline and test them.

<!-- cspell:words Censys Danfoss Dixell XWEB -->
