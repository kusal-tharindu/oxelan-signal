---
title: CTM360 links more than 1,000 incidents to a fake gift-card campaign
date: 2026-11-07T14:45:02.421Z
format: news
summary: According to BleepingComputer, CTM360 identified more than 1,000
  incidents linked to a gift-card scam campaign that impersonates PlayStation,
  Sephora, SHEIN, Walmart and Amazon.
description: CTM360 linked more than 1,000 incidents to gift-card scams
  impersonating major brands; no reward was delivered in the flows it tested.
tags:
  - malware
impact: medium
action: review
status: current
briefing:
  changed: According to BleepingComputer, CTM360 identified more than 1,000
    incidents linked to a recurring gift-card scam campaign that impersonates
    major retailers and consumer platforms such as PlayStation, Sephora, SHEIN,
    Walmart and Amazon.
  why: Victims are redirected to fraudulent reward portals and pushed into
    surveys, unwanted app installs and paid mobile subscriptions, and the actor
    is paid a commission on the subscription step.
  action: Treat a reward portal reached from an ad as suspect and check for a paid
    mobile subscription afterwards, since no reward was delivered in the flows
    tested.
sources:
  - title: "BleepingComputer: CTM360 Exposes Fake Gift Card Scams Exploiting Trusted
      Brands"
    url: https://www.bleepingcomputer.com/news/security/ctm360-exposes-fake-gift-card-scams-exploiting-trusted-brands/
---

According to BleepingComputer, CTM360 identified more than 1,000 incidents linked to a recurring gift-card scam campaign. The campaign impersonates major retailers and consumer platforms such as PlayStation, Sephora, SHEIN, Walmart and Amazon.

## How the flows work

The campaigns use fabricated endorsements from celebrities and influencers such as MrBeast or Alix Earle. A click on a malicious ad redirects the visitor to a fraudulent reward portal. The portal's human verification step then pushes victims into surveys, unwanted app installs and paid mobile subscriptions.

Lure pages route victims through affiliate tracking URLs that carry parameters such as offer_id and aff_id. The report says the threat actor earns a commission when a victim completes mobile number submission and a PIN (personal identification number) with OTP (one-time password) verification for a subscription.

## Why it matters

The chain rests on ordinary web steps a visitor opts into, from the ad to the reward portal to the verification screen. In all the flows CTM360 tested, no reward was ever delivered, while the actor is paid a commission on the subscription.

## What to do

The chain runs on lure pages and affiliate redirects rather than on software a reader installs, so there is no fixed version to apply. A person who completed the mobile signup and verification step should treat the resulting subscription as the item to check.

<!-- cspell:words Sephora SHEIN influencers Alix -->
