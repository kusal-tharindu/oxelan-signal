---
title: Fake OpenAI and SpaceX events used to steal Microsoft and Google accounts
date: 2026-11-06T17:44:25.194Z
format: news
summary: A phishing campaign impersonating OpenAI, SpaceX, and Anthropic events
  used device code phishing and an adversary-in-the-middle proxy to steal
  Microsoft and Google accounts, according to BleepingComputer.
description: Fake event pages impersonating OpenAI, SpaceX, and Anthropic
  targeted Microsoft and Google accounts with phishing kits.
tags:
  - authentication
impact: high
action: review
status: current
affects:
  - Microsoft Entra accounts targeted by device code phishing
  - Google accounts targeted by an adversary-in-the-middle proxy
briefing:
  changed: According to BleepingComputer, Push Security detected and blocked
    visits to fake event registration pages on customer browsers in late October
    2026.
  why: The campaign impersonates OpenAI, SpaceX, and Anthropic events and uses
    phishing-as-a-service platforms that bypass multifactor authentication (MFA)
    to steal Microsoft and Google accounts.
  action: Restrict device code authentication where it is not needed and use
    phishing-resistant MFA such as FIDO2 security keys.
sources:
  - title: "BleepingComputer: Fake OpenAI, SpaceX events used to steal Microsoft,
      Google accounts"
    url: https://www.bleepingcomputer.com/news/security/fake-openai-spacex-events-used-to-steal-microsoft-google-accounts/
  - title: Fake event invites combine Kali365 and VoidProxy payloads
    url: https://pushsecurity.com/blog/ai-themed-fake-event-campaign-analysis
---

According to BleepingComputer, Push Security detected and blocked visits to fake event registration pages on customer browsers in late October 2026. The pages impersonate OpenAI, SpaceX, and Anthropic events. Push Security tracks the kits used to build the fake pages as ZoomMock and MSDRoot.

One OpenAI page advertises "ChatGPT for Social & Digital Marketing Teams" and promises three months of ChatGPT Pro. A SpaceX page promotes a private event on November 12 with three months of Grok Heavy or a "SpaceX share". The Anthropic page at AWS re:Invent was no longer live when Push investigated. The fake registration pages tell visitors they must sign in with their work accounts to register and claim the advertised rewards.

## Why it matters

The campaign uses two phishing-as-a-service platforms, Kali365 and VoidProxy. Kali365 conducts Microsoft device code phishing attacks, while VoidProxy acts as an adversary-in-the-middle (AiTM) reverse proxy to intercept Google sign-ins and steal authentication session cookies. Device code phishing abuses the legitimate OAuth 2.0 device authorization grant flow to obtain authentication tokens for the victim's Microsoft Entra account. Both platforms let attackers bypass multifactor authentication (MFA) by capturing an already authenticated session or, in the case of device code authentication, bypassing MFA entirely. The phishing pages show a Cloudflare CAPTCHA, a bot check, to prevent automated security platforms from scanning the site.

## What to do

Restrict device code authentication where it is not needed. Use phishing-resistant MFA such as FIDO2 security keys to help prevent session hijacking.

<!-- cspell:words multifactor -->
