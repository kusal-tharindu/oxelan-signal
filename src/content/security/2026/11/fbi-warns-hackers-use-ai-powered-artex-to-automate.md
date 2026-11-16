---
title: FBI warns hackers use AI-powered ARTEX to automate cyberattacks worldwide
date: 2026-11-15T18:38:57.076Z
format: news
summary: An FBI advisory warns that hackers are using the AI-powered ARTEX
  framework to automate cyberattacks, and the tool remains available through
  community forks and a commercial edition.
description: "FBI advisory: hackers use the AI-powered ARTEX framework to
  automate cyberattacks; the tool remains available via forks and a commercial
  edition."
tags:
  - llm-security
  - incident-response
  - ai-agents
impact: high
action: review
status: current
affects:
  - Microsoft 365 customer environments
briefing:
  changed: The FBI's FLASH advisory names ARTEX, an AI-powered penetration testing
    framework, as a tool hackers use to automate cyberattacks worldwide.
  why: Some ARTEX intrusions progressed from initial targeting to privileged
    access in under three hours, and the FBI advisory includes indicators of
    compromise for known campaigns.
  action: Secure internet-facing applications, restrict access to cloud
    administration interfaces, review application permissions and authentication
    logs, and rate-limit sensitive APIs.
sources:
  - title: "BleepingComputer: FBI warns ARTEX AI hacking tool is powering global
      cyberattacks"
    url: https://www.bleepingcomputer.com/news/security/fbi-warns-artex-ai-hacking-tool-is-powering-global-cyberattacks/
---

According to BleepingComputer, the FBI (Federal Bureau of Investigation) released a FLASH advisory warning that hackers are using the AI (artificial intelligence)-powered ARTEX penetration testing framework to automate cyberattacks worldwide. ARTEX is an autonomous penetration testing framework written in Go that uses AI agents, and it integrates with external large language models (LLMs) including Anthropic Claude, OpenAI GPT, DeepSeek, GLM, Grok, and Kimi.

## What happened

The report says multiple threat actors have weaponized ARTEX since at least August 2026. ARTEX was originally released on GitHub in July 2026 by a developer known as Autumn-27, and the repository was removed on October 8, 2026. The report says the framework remains available through community forks, archived copies, localized versions, and a commercial edition called ARTEX PRO.

## Why it matters

The report says some ARTEX intrusions progressed from initial targeting to privileged access in under three hours. As of early November, researchers identified more than 1,600 publicly exposed ARTEX consoles. The report also describes the October ConnectWise Cloud Backup supply-chain attack, which allowed hackers to gain unauthorized access to Microsoft 365 customer environments.

The report says Microsoft attributed that campaign to a China-state-aligned threat actor tracked as Storm-0940. It also says attackers used ARTEX to attempt authentication against more than 2,250 downstream Microsoft 365 tenants. Attacks against South Korean financial institutions exposed personal information of approximately 67,000 people, and South Korean police arrested seven suspects linked to attacks against more than 90 organizations.

The report says CrowdStrike reported that a Chinese cyberespionage group tracked as Vapor Panda used ARTEX in automated attacks targeting more than 200 organizations across 14 countries. The FBI advisory is 13 pages and includes indicators of compromise (IOCs) such as IP addresses and command-and-control infrastructure.

## What to do

The FBI urges organizations to secure internet-facing applications, restrict access to cloud administration interfaces, review application permissions and authentication logs, and implement rate limits on sensitive APIs. The FBI cautions that IP addresses listed in the IOCs may have changed since the attacks occurred.

<!-- cspell:words ARTEX Kimi cyberespionage -->
