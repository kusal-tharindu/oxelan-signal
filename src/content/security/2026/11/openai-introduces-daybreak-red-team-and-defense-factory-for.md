---
title: OpenAI introduces Daybreak Red Team and Defense Factory for security work
date: 2026-11-13T09:44:05.097Z
format: news
summary: OpenAI has introduced two Daybreak cybersecurity products that use AI
  agents to test web applications for vulnerabilities and help security teams
  develop fixes, according to SecurityWeek.
description: OpenAI's Daybreak Red Team tests web apps with AI agents; Daybreak
  Defense Factory investigates findings and prepares patches for engineer
  review.
tags:
  - ai-agents
  - llm-security
impact: info
action: review
status: current
briefing:
  changed: OpenAI introduced Daybreak Red Team, which focuses on penetration
    testing and vulnerability validation, and Daybreak Defense Factory, which
    investigates security findings and prepares patches.
  why: Red Team can examine findings from code scanners, bug bounty submissions
    and vulnerability disclosure reports, while Defense Factory patches are
    reviewed and tested by engineers and are not deployed automatically.
  action: OpenAI is accepting requests for early access to Daybreak Red Team, and
    Defense Factory is offered through a preview plugin in ChatGPT for
    workspaces with Daybreak access.
sources:
  - title: "SecurityWeek: OpenAI Unveils Daybreak Red Team, Defense Factory Security
      Tools"
    url: https://www.securityweek.com/openai-unveils-daybreak-red-team-defense-factory-security-tools/
---

According to SecurityWeek, OpenAI has introduced two Daybreak cybersecurity products that use AI agents to test web applications for vulnerabilities and help security teams develop fixes. The report says the pair, Daybreak Red Team and Daybreak Defense Factory, were announced at the company's Cyber at the Frontier event on November 12.

## What each product does

Daybreak Red Team focuses on penetration testing and vulnerability validation, and Daybreak Defense Factory investigates security findings and prepares patches. Red Team uses multiple AI agents to identify and investigate potential security weaknesses in web applications, and OpenAI says the agents use source code and application context to investigate attack paths and confirm vulnerabilities.

On the remediation side, Defense Factory agents trace vulnerabilities through code and develop patches, which engineers review and test before merge. It supports importing vulnerability information from Wiz, Snyk and Endor Labs, and can scan connected GitHub repositories, monitor new commits and perform scheduled security assessments.

## Why it matters

Red Team can examine findings from code scanners, bug bounty submissions and vulnerability disclosure reports, so the agents start from findings a team already has. OpenAI says the agents operate in isolated environments, with Guardian review enforcing testing boundaries and controlling which applications and endpoints they can access. Patches are not deployed automatically, so the merge decision stays with your engineers.

## What to do

OpenAI is accepting requests for early access to Daybreak Red Team. Defense Factory is offered through a preview plugin in ChatGPT for workspaces with Daybreak access, so availability depends on the workspace already having that access.

<!-- cspell:words Endor -->
