---
title: ARTEX AI agents recovered over 190,000 gaming credentials and obtained
  over 300 Apple certificates
date: 2026-11-06T18:49:09.802Z
format: news
summary: Check Point Research found 2,557 systems that hosted ARTEX panels,
  including 1,608 live instances, while agents recovered gaming credentials and
  obtained Apple code-signing certificates.
description: Check Point Research counted 2,557 ARTEX hosts, 1,608 live. Agents
  recovered gaming credentials and obtained Apple code-signing certificates.
tags:
  - ai-agents
  - llm-security
  - authentication
impact: high
action: review
status: current
affects:
  - ARTEX panels and exposed instances
briefing:
  changed: Check Point Research identified 2,557 systems that hosted ARTEX panels,
    including 1,608 live and publicly accessible instances. According to
    Cyber Security News, agents recovered more than 190,000 gaming credential
    sets.
  why: ARTEX is an open-source, AI-powered penetration testing platform, and the
    research shows agents producing findings at volume with low model costs.
  action: The cited sources do not publish fixed ARTEX versions; follow the
    developer's advisory and note the original project was made closed-source
    after attacks against South Korean banks.
sources:
  - title: "Inside ARTEX: How Autonomous AI Agents Are Being Used in Real-World
      Cyberattacks - Check Point Blog"
    url: https://blog.checkpoint.com/research/inside-artex-how-autonomous-ai-agents-are-being-used-in-real-world-cyberattacks/
  - title: "Cyber Security News: ARTEX AI Agents Steal 190,000 Gaming Credentials
      and Hundreds of Apple Code-Signing Certificates"
    url: https://cybersecuritynews.com/artex-ai-agents/
---

Check Point Research identified 2,557 systems that hosted ARTEX panels, including 1,608 live and publicly accessible instances. ARTEX is an open-source, AI (artificial intelligence)-powered penetration testing platform originally designed for authorized testing. The developer made the original project closed-source after the tool was observed in attacks against South Korean banks.

According to Cyber Security News, the agents recovered more than 190,000 credential sets for Honor of Kings from 13 backend credential servers. Testing showed about 3.3 percent of the stolen gaming credentials still worked, roughly 6,000 live accounts, according to the report. The report said the gaming credential campaign lasted about five days on DeepSeek V4.1 Flash and cost an estimated $180 to $360.

In a separate Apple campaign, the agents obtained more than 300 code-signing certificates and their passwords, with three certificates passing full validation. The operation processed approximately 36 billion tokens, with estimated AI model costs of $700 to $1,500.

Ten misconfigured ARTEX instances exposed their full databases. Chinese AI models dominated those 10 instances, with the DeepSeek Flash family appearing most frequently. American models were configured on three instances, and researchers observed guardrails triggering only while Anthropic's Opus 5.5 was used, after which the operator switched to more permissive Chinese models. Among live ARTEX servers, 882 (54%) were hosted in the United States and 295 (18%) in Hong Kong.

In one cryptocurrency campaign, 292 objectives produced 230 findings and 400,791 agent messages without additional operator prompting. The attacker's wallet showed a $0 balance and no transactions.

## Why it matters

An agent discovered an unauthenticated API (application programming interface) exposing AWS (Amazon Web Services) S3 (Simple Storage Service) credentials that provided write access to a bucket containing iOS (Apple's mobile operating system) applications and landing pages. The gaming and Apple results put real credentials and signing material in scope, not just scanner output.

## What to do

The cited sources do not publish fixed ARTEX versions or a configuration-only mitigation. Follow the developer's advisory for any ARTEX deployment; the original project was made closed-source after the tool was observed in attacks against South Korean banks.

<!-- cspell:words ARTEX Cyberattacks -->
