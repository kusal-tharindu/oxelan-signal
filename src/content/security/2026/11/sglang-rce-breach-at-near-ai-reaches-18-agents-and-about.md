---
title: SGLang RCE breach at NEAR AI reaches 18 agents and about 100 users
date: 2026-11-10T19:45:51.110Z
format: news
summary: NEAR AI says an attacker exploited a remote code execution flaw in
  SGLang, reached 18 AI agents, and downloaded account details for about 100
  users.
description: NEAR AI says an SGLang RCE exposed 18 AI agents and data for about
  100 users; access to NEAR AI Cloud is restored.
tags:
  - inference
  - llm-security
  - incident-response
impact: critical
action: review
status: current
affects:
  - NEAR AI inference servers running SGLang
  - NEAR AI Agents on an older deployment outside the TEE
  - NEAR AI Private Chat (deprecated)
briefing:
  changed: NEAR AI says an attacker exploited a remote code execution flaw in
    SGLang and ran code on one of its inference servers, reaching 18 AI agents
    and account details for about 100 users.
  why: The accessed server could have exposed requests processed in confidential
    mode, and a TEE does not protect against a vulnerability in the software
    running inside it.
  action: NEAR AI deployed a fix across its inference servers and restored NEAR AI
    Cloud; the cited sources do not name a fixed SGLang release.
sources:
  - title: "NEAR AI Security Incident Report: SGLang Vulnerability"
    url: https://near.ai/blog/security-incident-report-sglang-vulnerability
  - title: "The Hacker News: SGLang RCE Exploit Breaches NEAR AI, Steals Data From
      18 Agents and About 100 Users"
    url: https://thehackernews.com/2026/11/sglang-rce-exploit-breaches-near-ai.html
---

NEAR AI says an attacker exploited a remote code execution (RCE) flaw in SGLang, an open-source inference engine, and ran code on one of its inference servers. On November 8, the attacker could have observed requests being processed on that server, including requests sent in confidential mode.

## What is affected

The attacker reached 18 AI agents on an older deployment of NEAR AI Agents that did not run inside the company's trusted execution environment (TEE), taking chat history, settings and logs. The attacker also downloaded account details for approximately 100 users from an internal system behind the deprecated Private Chat product; the data included email addresses, names, and for some accounts plan and balance information. Two customers' NEAR AI Cloud application programming interface (API) keys were exposed in logs, and NEAR AI revoked both.

## Why it matters

NEAR AI says a TEE does not protect against a vulnerability in the software running inside the environment. The accessed server could have exposed confidential-mode requests, and the 18 agents ran on a deployment outside the TEE.

## Response and action

NEAR AI deployed a fix for the SGLang flaw on all inference servers and restored access to NEAR AI Cloud. It revoked all active sessions and administrator credentials, replaced all agent tokens, and took Private Chat offline. It also reported the SGLang flaw to the SGLang project. According to The Hacker News, NEAR AI has not identified the flaw by CVE (Common Vulnerabilities and Exposures) number or named the affected SGLang versions.

No fixed SGLang release is named in the cited sources. NEAR AI's response included a fix across its inference servers and a report to the SGLang project.
