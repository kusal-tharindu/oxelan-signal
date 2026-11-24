---
title: Anthropic opens a public beta of Enterprise Frontier Safeguards
date: 2026-11-24T13:45:03.317Z
format: news
summary: Anthropic opened a public beta of Enterprise Frontier Safeguards, a
  monitoring layer for Claude deployments, and published guidance for securing
  enterprise coding agents.
description: Anthropic's Enterprise Frontier Safeguards beta adds cross-request
  misuse monitoring for Claude under zero data retention agreements.
tags:
  - llm-security
  - prompt-injection
impact: info
action: review
status: current
briefing:
  changed: Anthropic announced the public beta of Enterprise Frontier Safeguards
    (EFS), a monitoring layer that detects suspicious patterns across multiple
    requests that may appear benign on their own.
  why: EFS targets organizations that use Claude under zero data retention
    agreements; they keep conversation data in their own cloud with their own
    encryption keys and access policies, and Anthropic receives monitoring
    metadata but not conversation content.
  action: "Review the controls Anthropic recommends for agent deployments: human
    approval for high-risk actions, sandboxing and network access restrictions."
sources:
  - title: "SecurityWeek: Anthropic Expands Enterprise Safeguards for Detecting AI
      Misuse"
    url: https://www.securityweek.com/anthropic-expands-enterprise-safeguards-for-detecting-ai-misuse/
---

According to SecurityWeek, Anthropic announced the public beta of Enterprise Frontier Safeguards (EFS), a system designed to help organizations detect malicious use of AI. The company developed EFS with input from over 100 Anthropic customers, and Stripe and Salesforce evaluated it in private beta.

## What changed

EFS adds a monitoring layer that can detect suspicious patterns across multiple requests that may appear benign when analyzed individually. It targets organizations that use Claude under zero data retention agreements.

With EFS, those organizations store conversation data in their own cloud and protect it with their own encryption keys and access policies, while Anthropic receives monitoring metadata but not the content of conversations. EFS is currently available via the Claude Platform, Amazon Web Services (AWS), and Google Cloud, with Microsoft Foundry integration in the works.

## What Anthropic reported

Anthropic also published a guide to securing enterprise coding agents. According to the report, mechanisms designed to detect prompt injection, where an attacker hides instructions in content that a model reads, reduced attack success rates from 90% to 28% on Fable 5.2 and from 55% to 11% on Opus 5.5. The report adds that auto mode, now enabled by default for interactive Claude Code sessions, blocked 89% of dangerous commands, compared to 14% for human reviewers.

## What to do

Anthropic recommends requiring human approval for high-risk actions and enforcing additional controls, such as sandboxing and network access restrictions. Teams already running Claude under zero data retention agreements can reach EFS through the Claude Platform, AWS, or Google Cloud.
