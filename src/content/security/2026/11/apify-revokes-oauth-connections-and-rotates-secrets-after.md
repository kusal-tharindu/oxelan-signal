---
title: Apify revokes OAuth connections and rotates secrets after unauthorized access
date: 2026-11-12T19:41:05.284Z
format: news
summary: Apify says an unauthorized third party accessed parts of its internal
  systems on November 9 and 10, 2026, and it revoked some OAuth connections and
  rotated critical internal secrets.
description: Apify revoked some OAuth connections and rotated critical internal
  secrets after unauthorized access on November 9 and 10, 2026.
tags:
  - data-breach
  - incident-response
  - authentication
impact: high
action: review
status: current
affects:
  - Apify customer accounts
briefing:
  changed: Apify detected unauthorized access to its internal systems on November
    11, 2026 at 12:13 UTC, after an unauthorized third party accessed parts of
    them on November 9 and 10 using a compromised credential.
  why: The access reached related Apify accounts, and Apify has since revoked some
    OAuth connections and rotated critical internal secrets.
  action: According to BleepingComputer, affected customers were advised to reset
    two-factor authentication through the Apify Console. Apify also revoked some
    OAuth connections and rotated critical internal secrets.
sources:
  - title: Security incident
    url: https://status.apify.com/incidents/sxd1dj5j6749
  - title: "BleepingComputer: Apify rotates API tokens, prompts 2FA resets after
      breach"
    url: https://www.bleepingcomputer.com/news/security/apify-rotates-api-tokens-prompts-2fa-resets-after-breach/
---

According to BleepingComputer, Apify is a Czech web scraping and browser automation platform that reports having 80,000 customers. Apify said an unauthorized third party used a compromised credential to obtain account credentials and access related Apify accounts on November 9 and 10, 2026. Apify detected the unauthorized access on November 11, 2026 at 12:13 UTC, and it said it has detected no further attacker activity since November 11.

## What Apify changed

Apify revoked some OAuth (open authorization) connections to external integrations, including GitHub, as a precaution, and rotated critical internal secrets. According to BleepingComputer, impacted customers' Apify API (application programming interface) tokens and Apify Proxy passwords have been rotated. The report said affected customers were advised to reset two-factor authentication (2FA) through the Apify Console because their 2FA codes may have been exposed. Apify also notified the relevant authorities and customers whose personal information or stored data was accessed.

## Why it matters

A compromised credential gave an outside party access to internal systems and related Apify accounts, which is why Apify rotated secrets and revoked OAuth links. The incident involved both related Apify accounts and customer personal information or stored data.

## What to do

Affected customers should reset 2FA through the Apify Console, according to BleepingComputer. Apify said it notified customers whose personal information or stored data was accessed; check for that notice.

<!-- cspell:words Apify -->
