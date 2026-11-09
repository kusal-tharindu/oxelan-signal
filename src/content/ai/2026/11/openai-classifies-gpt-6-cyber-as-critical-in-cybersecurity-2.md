---
title: OpenAI classifies GPT-6 Cyber as Critical in cybersecurity
date: 2026-11-09T10:44:19.625Z
format: news
summary: OpenAI introduced GPT-6 Cyber, a security model it classifies as
  Critical in cybersecurity under its Preparedness Framework.
description: OpenAI's GPT-6 Cyber is rated Critical for cybersecurity and scored
  48.5% on ExploitGym, up from 32.1% for GPT-5.6 Cyber.
tags:
  - llm-security
  - ai-governance
impact: info
action: review
status: current
briefing:
  changed: OpenAI introduced GPT-6 Cyber, a security model it rates Critical in
    cybersecurity under its Preparedness Framework, up from High for GPT-5.6
    Cyber.
  why: OpenAI's own rating moves from High to Critical, and its tests show 1,724
    reproduced Linux kernel vulnerabilities and working exploits for 948.
  action: Teams using Daybreak Red API access should plan for OpenAI's default IP
    allowlisting and cyber-specific misalignment monitoring.
sources:
  - title: "GPT‑6 Cyber: Advancing the frontier of aligned cybersecurity agents"
    url: https://openai.com/index/introducing-gpt-6-cyber/
  - title: "SecurityWeek: OpenAI Says New GPT-6 Cyber Model Hunts Flaws Without
      Crossing the Line"
    url: https://www.securityweek.com/openai-says-new-gpt-6-cyber-model-hunts-flaws-without-crossing-the-line/
---

OpenAI introduced GPT-6 Cyber, a security model it says is more capable than its predecessor and more reliable at staying within researcher-set boundaries. On ExploitGym, GPT-6 Cyber scored 48.5%, up from 32.1% for GPT-5.6 Cyber.

OpenAI classified the model as Critical in cybersecurity under its Preparedness Framework, up from High for GPT-5.6 Cyber. Without deployment safety prompts, GPT-6 Cyber avoided exploiting out-of-scope services in 99.93% of cases, up from 94.49% for GPT-5.6 Cyber. With those prompts, it stayed within bounds 100% of the time.

## What the model found

OpenAI says GPT-6 Cyber reproduced 1,724 Linux kernel vulnerabilities and developed working exploits for 948. According to SecurityWeek, GPT-5.6 Sol exploited 166 Linux kernel vulnerabilities using the same research harness.

OpenAI disclosed 304 critical Linux findings to maintainers with candidate patches. It also reported 81 previously unknown high-severity Firefox vulnerabilities classified by Mozilla, and Mozilla began landing fixes.

In offensive web penetration testing, GPT-6 Cyber achieved 40.3% recall of vulnerabilities, compared with 32.0% for GPT-6 Astra. On RemoteExploitBench, GPT-6 Cyber completed 95% of tasks while GPT-6 Astra running with Daybreak Blue refused 100% of tasks.

## Access and controls

According to SecurityWeek, access to GPT-6 Cyber is currently limited to select approved customers of Daybreak Red. OpenAI says it added cyber-specific misalignment monitoring that checks whether model actions match the user's authorization, and it requires IP allowlisting for Daybreak Red API access by default.

OpenAI also partnered with Dragos to evaluate how its models can help defend critical infrastructure in a controlled lab environment. It introduced Daybreak Red for Critical Infrastructure for approved critical infrastructure defenders.

## What to do

Teams seeking access should confirm eligibility through Daybreak Red, which SecurityWeek reports is limited to select approved customers. Plan for OpenAI's default IP allowlisting on Daybreak Red API access, and review the cyber-specific misalignment monitoring that checks whether model actions match the user's authorization.

<!-- cspell:words Dragos -->
