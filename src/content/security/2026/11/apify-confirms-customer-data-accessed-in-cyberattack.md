---
title: Apify confirms customer data accessed in cyberattack
date: 2026-11-13T17:42:16.701Z
format: news
summary: According to SecurityWeek, Apify confirmed that customer data was
  accessed in a cyberattack that compromised internal systems and customer
  accounts.
description: Apify says a cyberattack compromised internal systems and customer
  accounts and that customer data was accessed.
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
  changed: According to SecurityWeek, Apify confirmed that customer data was
    accessed in a cyberattack that compromised internal systems and customer
    accounts.
  why: The exposed data included names, email addresses, billing details, account
    activity, IP addresses, salted password hashes, two-factor authentication
    (2FA) recovery codes, phone numbers, and Google and GitHub authentication
    tokens.
  action: Customers who build Apify Actors from private GitHub repositories should
    reconnect their GitHub integrations as instructed, and watch for the
    post-mortem Apify says it will publish within a week.
sources:
  - title: Apify Status
    url: https://status.apify.com/
  - title: "SecurityWeek: Apify Confirms Customer Data Accessed in Cyberattack"
    url: https://www.securityweek.com/apify-confirms-customer-data-accessed-in-cyberattack/
---

## What happened

According to SecurityWeek, Apify confirmed that customer data was accessed in a cyberattack that compromised internal systems and customer accounts. The report describes Apify as a Czech web scraping and automation company with 91,000 customers worldwide. The report says the intrusion took place on November 9 and 10. Apify says it detected the activity at 12:13 UTC (Coordinated Universal Time) on November 11, cut off access, and started an investigation that is still ongoing.

## What was exposed

Apify has not disclosed the number of compromised customer accounts. The exposed information included names, email addresses, billing details, account activity, and IP (Internet Protocol) addresses, according to the report. The breach notification listed salted password hashes, two-factor authentication (2FA) recovery codes and phone numbers, and authentication tokens associated with Google and GitHub sign-ins among the compromised data. Payment card information was limited to cardholder names, expiration dates, and the last four digits of card numbers; full card numbers and security codes were not exposed.

## Why it matters

The report says the attacker used a compromised credential to obtain additional credentials and gain access to related Apify accounts. The report says Apify's investigation had not found that the OAuth connections (delegated third-party authorizations) could have been used as an attack vector. Apify says the access path is closed and that it has detected no further activity from the attacker since November 11.

## Response

The report says Apify implemented additional monitoring, changed critical internal secrets, and revoked some OAuth connections to third-party services, including GitHub. Application programming interface (API) tokens are now stored only as hashes at Apify.

## What to do

The report says customers building Apify Actors from private GitHub repositories have been instructed to reconnect their GitHub integrations. Apify will publish a post-mortem with the root cause and remediation within a week.

<!-- cspell:words Apify -->
