---
title: Italy and Switzerland warn of attacks run with autonomous AI agents
date: 2026-11-25T20:40:30.324Z
format: news
summary: BleepingComputer reports that CSIRT Italia detected mass AI-agent
  campaigns and that Switzerland's NCSC received its first reports of
  AI-agent-assisted attacks.
description: BleepingComputer reports CSIRT Italia detected mass AI-agent
  campaigns and Switzerland's NCSC saw its first AI-agent-assisted attacks.
tags:
  - ai-agents
  - llm-security
impact: high
action: review
status: current
briefing:
  changed: BleepingComputer reports that CSIRT Italia detected mass compromise
    campaigns in Italy using autonomous AI agents, and that Switzerland's NCSC
    received its first reports of AI-agent-assisted attacks.
  why: The report describes agents working in parallel, chaining vulnerabilities
    and credentials, and successful compromise in all attacks known to the NCSC.
  action: Prioritize patching internet-facing systems, focus on flaws actively
    exploited in the wild, and disable remote management interfaces that are not
    needed.
sources:
  - title: "BleepingComputer: Italy and Switzerland warn of autonomous AI-driven
      cyberattacks"
    url: https://www.bleepingcomputer.com/news/security/italy-and-switzerland-warn-of-autonomous-ai-driven-cyberattacks/
---

According to BleepingComputer, CSIRT Italia (Italy's computer security incident response team) detected mass compromise campaigns in Italy carried out through autonomous agents orchestrated by artificial intelligence (AI). The same report says Switzerland's NCSC (National Cyber Security Centre) received its first reports of cyberattacks in Switzerland carried out with the assistance of an AI agent.

## What was reported

BleepingComputer listed four AI frameworks involved in recent breaches and hacking incidents: ARTEX AI, CyberStrikeAI, DeepSeek Harness - Red Team, and PentAGI. In one DeepSeek Harness setup, the report says, a coordinator assigned tasks to five AI agents covering stages from information gathering to exploitation and persistence.

## Why it matters

In some cases, the report says, multiple AI agents worked in parallel to compromise a large number of systems within a few hours. The agents chained vulnerabilities, misconfigurations and compromised credentials, using exposed systems as a foothold to reach internal networks. CSIRT Italia said the agents wrote malicious code in real time to evade endpoint defenses. In Switzerland, various organizations and operators of critical infrastructure across at least two sectors were affected. In all cyberattacks known to the NCSC, the use of AI agents led to successful compromise of the victim's IT systems.

## What to do

CSIRT Italia advised administrators to prioritize patching internet-facing systems. The agency also said to focus on flaws actively exploited in the wild and to disable remote management interfaces if they are not needed.

<!-- cspell:words CSIRT NCSC ARTEX -->
