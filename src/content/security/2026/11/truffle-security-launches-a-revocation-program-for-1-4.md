---
title: Truffle Security launches a revocation program for 1.4 million exposed secrets
date: 2026-11-06T17:46:55.370Z
format: news
summary: Truffle Security launched the Secrets Revocation Program, a free
  initiative to help issuers revoke 1.4 million publicly exposed secrets, with
  16 issuers already participating.
description: Truffle Security's Secrets Revocation Program aims to revoke 1.4
  million exposed secrets; 16 issuers have joined.
tags:
  - supply-chain
  - authentication
  - ci-cd
impact: info
action: review
status: current
briefing:
  changed: Truffle Security launched the Secrets Revocation Program, a free
    initiative to help revoke 1.4 million publicly exposed secrets.
  why: Truffle Security said 81% of the keys it reported last year still worked
    six months later.
  action: The program is for API key issuers, and Truffle Security can revoke
    verified keys within 14 days through a webhook or a revocation endpoint
    provided by issuers.
sources:
  - title: "BleepingComputer: Nearly 1.5 million exposed secrets targeted in new
      revocation program"
    url: https://www.bleepingcomputer.com/news/security/truffle-security-launches-program-to-revoke-14-million-live-secrets/
---

According to BleepingComputer, Truffle Security launched the Secrets Revocation Program, a free initiative to help API (application programming interface) key issuers revoke 1.4 million publicly exposed secrets that remain valid. The report says Truffle Security found 543,000 valid credentials leaked in public GitHub repositories earlier this year.

## What is exposed

Truffle Security also identified more than 431,000 Amazon Web Services (AWS) secrets across code repositories, Git histories, datasets, Docker images, registries, and continuous integration (CI) logs. Since January 2025, it found 2,655 working keys in artificial intelligence (AI) coding tools' configuration files.

## Why it matters

Truffle Security said 81% of the keys it reported last year still worked six months later. Google began disabling exposed Google Cloud service-account keys by default on June 16, 2024. Automatic disabling reduced the share of exposed secrets still active to 11%, compared with 72% when Google relied only on notifying key owners.

## What to do

The program is for API key issuers, and Truffle Security can revoke verified keys within 14 days through a webhook or a revocation endpoint provided by issuers. The report lists 16 participants, including Hugging Face, Notion, Vercel, Resend, RubyGems, and Twilio.
