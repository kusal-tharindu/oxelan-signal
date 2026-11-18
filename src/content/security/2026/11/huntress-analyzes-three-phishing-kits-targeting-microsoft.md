---
title: Huntress analyzes three phishing kits targeting Microsoft 365 tokens
date: 2026-11-18T01:55:15.320Z
format: news
summary: According to BleepingComputer, Huntress analyzed three phishing kits
  that target Microsoft 365 tokens, including an adversary-in-the-middle kit and
  one that bundles a Phishing as a Service operation.
description: "Huntress analyzed three phishing kits targeting Microsoft 365
  tokens: EvilTokens, Knight Office and Kali365."
tags:
  - phishing
  - authentication
impact: high
action: review
status: current
affects:
  - Microsoft 365
briefing:
  changed: "According to BleepingComputer, Huntress researchers analyzed three
    phishing kits that target Microsoft 365 tokens: EvilTokens, Knight Office
    and Kali365."
  why: Knight Office steals Microsoft 365 session tokens and feeds them into an
    operator console, and the report says responders should revoke refresh
    tokens and remove unauthorized devices after token theft.
  action: Restrict or block device code authentication where possible, investigate
    mailbox access, forwarding rules and outbound phishing, and after token
    theft revoke refresh tokens and remove unauthorized devices and Windows
    Hello credentials.
sources:
  - title: "BleepingComputer: Inside Modern Phishing Kits Built to Steal Microsoft
      365 Sessions"
    url: https://www.bleepingcomputer.com/news/security/inside-modern-phishing-kits-built-to-steal-microsoft-365-sessions/
---

## What changed

According to BleepingComputer, Huntress researchers analyzed three phishing kits targeting Microsoft 365 tokens: EvilTokens, Knight Office, and Kali365. The report says EvilTokens was discovered in early 2026 as part of a device code phishing campaign that abused the Railway Platform-as-a-Service (PaaS) platform as a token-harvesting and replay engine. The report also says a joint effort between Microsoft's Digital Crimes Unit and the FBI (Federal Bureau of Investigation) led to the arrest of one of EvilTokens' alleged operators.

## How the kits work

The report describes Knight Office as an adversary-in-the-middle (AiTM) phishing kit that steals Microsoft 365 session tokens and feeds them into an operator console. It says Kali365 bundles a full Phishing as a Service (PhaaS) operation into a single control panel with built-in artificial intelligence (AI) features.

## What to do

The report recommends restricting or blocking device code authentication where possible. It also recommends investigating mailbox access, forwarding rules, and outbound phishing. After token theft, the report says to revoke refresh tokens, then remove unauthorized devices and Windows Hello credentials.

<!-- cspell:words Phaa -->
