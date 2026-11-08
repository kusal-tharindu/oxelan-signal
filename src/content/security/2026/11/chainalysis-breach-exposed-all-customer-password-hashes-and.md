---
title: Chainalysis breach exposed all customer password hashes and took key
  services offline
date: 2026-11-08T12:24:18.863Z
format: news
summary: According to BleepingComputer, a Chainalysis incident exposed usernames
  and password hashes for all customers and forced the company to take its login
  portal and several products offline.
description: Chainalysis took its login portal, Reactor, Data Solutions, KYT,
  and address screening offline and asked customers for trusted IP addresses for
  an allowlist.
tags:
  - incident-response
  - authentication
impact: critical
action: review
status: current
affects:
  - Chainalysis customer accounts
briefing:
  changed: Chainalysis said an external actor used offensive agentic techniques to
    gain unauthorized access, and BleepingComputer reported that usernames and
    password hashes for all customers were exposed in an on-path attack.
  why: The exposure affects all customers' credentials and forced the login portal
    and core products offline, so customers cannot use Reactor, Data Solutions,
    KYT, or address screening while the company restores access.
  action: Customers should provide trusted IP addresses for Chainalysis's
    allowlist so they can regain access and reset credentials, then follow the
    company's restoration notices.
sources:
  - title: "The Hacker News: Chainalysis Breach Exposes All Users' Credentials,
      Forces Shutdown of Key Services"
    url: https://thehackernews.com/2026/11/chainalysis-breach-exposes-all-users.html
  - title: "BleepingComputer: Chainalysis says breach exposed credentials for all
      customers"
    url: https://www.bleepingcomputer.com/news/security/chainalysis-says-breach-exposed-credentials-for-all-customers/
---

According to The Hacker News, Chainalysis said it was the target of a cybersecurity incident in which an external actor leveraged offensive agentic techniques to obtain unauthorized access to its systems and internal tools. According to BleepingComputer, the company initially disclosed that attackers using AI (artificial intelligence) tools accessed customers' names, email addresses, user IDs, and organizational role labels.

## What is affected

BleepingComputer reported that Chainalysis took its login portal offline, along with Reactor, Data Solutions, the KYT (Know Your Transaction) user interface and API (application programming interface), and address screening products, after discovering further abnormal activity. The Hacker News report also said Chainalysis locked the impacted accounts as a precaution. The Hacker News report added that Chainalysis said it intends to begin restoring access to KYT and Address Screening.

## Why it matters

BleepingComputer's report said later updates revealed that usernames and password hashes for all customers were exposed in an on-path attack. The same report said Chainalysis stated it has no evidence that investigations data was accessed or attribution data was manipulated. The shutdown leaves customers without those products while the company restores access.

## What to do

BleepingComputer reported that Chainalysis asked customers to provide trusted IP (Internet Protocol) addresses for an allowlist so they can regain access and reset credentials. Customers should follow that allowlist process and reset credentials when access is restored. The report said Chainalysis is working around the clock to harden its systems and bring Reactor and Data Solutions back online.
