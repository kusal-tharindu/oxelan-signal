---
title: Anthropic's Fable 5.2 blocks fewer security tasks as Mythos sharpens bug
  hunting
date: 2026-11-16T11:44:28.345Z
format: news
summary: "Anthropic split its Claude release: Mythos 5.2 to selected partners
  for vulnerability work, Fable 5.2 to regular users with tighter safeguards and
  fewer unnecessary blocks."
description: Mythos 5.2 finds more vulnerabilities than Opus 5.5 and Mythos 5.1,
  while Fable 5.2 blocks fewer cybersecurity requests for regular users.
tags:
  - llm-security
  - ai-governance
impact: info
action: review
status: current
briefing:
  changed: Anthropic rolled out Claude Mythos 5.2 to selected partners and Claude
    Fable 5.2 to regular users, with additional cybersecurity and biology
    safeguards on Fable.
  why: Mythos 5.2 detects more vulnerabilities than the models it is compared
    with, while Fable 5.2 blocks fewer cybersecurity requests and routes
    high-risk activity to Opus 4.8.
  action: Review where your security workflows call Claude and account for Fable
    5.2 blocking penetration testing and exploit generation, plus the automatic
    switch to Opus 4.8.
sources:
  - title: "BleepingComputer: Anthropic’s Claude Fable 5.2 blocks fewer security
      tasks, while Mythos gets better at finding bugs"
    url: https://www.bleepingcomputer.com/news/artificial-intelligence/anthropics-claude-fable-52-blocks-fewer-security-tasks-while-mythos-gets-better-at-finding-bugs/
---

According to BleepingComputer, Anthropic rolled out Claude Mythos 5.2 to selected partners and Claude Fable 5.2 to regular users. The report says Mythos 5.2 beats Fable 5.2 at finding vulnerabilities, reproducing them, and developing fixes.

Anthropic's CVE Rediscovery evaluation found that Mythos 5.2 detects 10.2% more vulnerabilities than Claude Opus 5.5 and 14.4% more than Mythos 5.1. A security company told Anthropic that one in six confirmed bugs identified by Mythos 5.2 had been missed by every other frontier model it tested.

Anthropic applied additional cybersecurity and biology safeguards to Claude Fable 5.2 so it can be made available to regular users. Those safeguards block high-risk activities including penetration testing and exploit generation. If Anthropic detects high-risk activity, it automatically switches to Opus 4.8 for cybersecurity-related responses.

Anthropic says it has reduced unnecessary blocks by approximately 60% for cybersecurity requests compared with Fable 5.1, and the report says it observed about 60% fewer blocks in cybersecurity during early testing across Claude.ai, Claude Code, and Cowork. Anthropic also tested Mythos 5.2 against sandbox escape attempts.

## Why it matters

Teams running Claude for security work now see different behavior depending on the model: Fable 5.2 blocks penetration testing and exploit generation, and a detected high-risk request is routed to Opus 4.8. The report notes that Anthropic admits its evaluations cannot catch every potential failure before release.

## What to do

Review where your security workflows call Claude: Fable 5.2 blocks high-risk activities including penetration testing and exploit generation. When Anthropic detects high-risk activity, it switches to Opus 4.8 for cybersecurity-related responses, so the answer can come from a model other than the one you chose.

<!-- cspell:words Cowork -->
