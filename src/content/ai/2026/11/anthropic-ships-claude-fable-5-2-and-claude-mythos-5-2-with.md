---
title: Anthropic ships Claude Fable 5.2 and Claude Mythos 5.2 with cyber
  benchmark scores
date: 2026-11-10T08:39:37.267Z
format: news
summary: Anthropic released Claude Fable 5.2 and Claude Mythos 5.2 with output
  up to 30% faster than the previous generation and a 76.3% score on Irregular's
  CyScenarioBench.
description: Claude Fable 5.2 and Claude Mythos 5.2 ship with faster output,
  lower token prices, and published cybersecurity benchmark scores.
tags:
  - llm-security
  - ai-agents
  - inference
action: none
status: current
briefing:
  changed: Anthropic released Claude Fable 5.2 and Claude Mythos 5.2, which
    generate outputs up to 30% faster than Claude Fable 5.1 and Claude Mythos
    5.1. Claude Fable 5.2 scored 76.3% on Irregular's CyScenarioBench and 89.6%
    on Anthropic's CVE Rediscovery benchmark.
  why: Anthropic reports that Claude Mythos 5.2 found 10.2% more vulnerabilities
    than Claude Opus 5.5 on the CVE Rediscovery evaluation, and gates its cyber
    capabilities behind the Cyber Verification Program.
  action: Route any request for Claude Mythos 5.2's cyber capabilities through
    Anthropic's Cyber Verification Program, and set expectations for that step
    before building a workflow on the model.
sources:
  - title: Introducing Claude Fable 5.2 and Claude Mythos 5.2
    url: https://www.anthropic.com/claude-fable-and-mythos-5-2
  - title: "The Hacker News: Anthropic's Claude Fable 5.2 Beats GPT-6 Cyber in
      Multi-Stage Cyberattack Benchmark"
    url: https://thehackernews.com/2026/11/anthropics-claude-fable-52-beats-gpt-6.html
---

Anthropic released Claude Fable 5.2 and Claude Mythos 5.2. The models generate outputs up to 30% faster than Claude Fable 5.1 and Claude Mythos 5.1, at $8 per million input tokens and $40 per million output tokens. An optional fast mode speeds up token generation by up to 2.5 times and is priced at $16 per million input tokens and $80 per million output tokens.

Claude Fable 5.2 scored 76.3% on Irregular's CyScenarioBench and 89.6% on Anthropic's CVE Rediscovery benchmark. Anthropic calls Claude Mythos 5.2 its most capable model for cybersecurity engineering, and reports that it found 10.2% more vulnerabilities than Claude Opus 5.5 and 14.4% more than Claude Mythos 5.1 on the CVE Rediscovery evaluation. Access to those cyber capabilities runs through Anthropic's Cyber Verification Program.

## Availability and other results

According to The Hacker News, Claude Fable 5.2 is available on all platforms, including Amazon Web Services, Google Cloud, and Microsoft Azure. Fable 5.2 also scored 69.9% on FrontierSWE v2 and 74.2% on Humanity's Last Exam with tools. Anthropic reports that a team of 1,000 Fable 5.2 agents fully formalized Fermat's Last Theorem in 30 hours with minimal human intervention, and that the model solved two open problems in theoretical physics.

## Why it matters

Anthropic positions Claude Mythos 5.2 specifically on cybersecurity engineering. The company states that high-stakes risks from misalignment remain low. A recent update to Claude Security lets it watch repositories as code is updated, track findings to ensure they are fixed, learn from additional context, and connect to a user's tools through an API and the Model Context Protocol (MCP).

## What to do

Access to Claude Mythos 5.2's cyber capabilities goes through Anthropic's Cyber Verification Program, so line up that approval before a workflow depends on them. The figures to weigh against your own tasks are 76.3% on Irregular's CyScenarioBench and 89.6% on Anthropic's CVE Rediscovery evaluation for Claude Fable 5.2. If code review is the use case, the Claude Security update watches repositories as code changes and tracks findings to ensure they are fixed.
