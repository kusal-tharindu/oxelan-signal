---
title: MetaMask says attack did not compromise private keys or Secret Recovery Phrases
date: 2026-11-06T18:39:51.527Z
format: news
summary: According to BleepingComputer, MetaMask said an infrastructure attack
  diverted some execution-layer staking rewards but did not compromise users'
  Secret Recovery Phrases or private keys.
description: MetaMask said an infrastructure attack diverted some
  execution-layer staking rewards but did not compromise users' Secret Recovery
  Phrases or private keys.
tags:
  - authentication
  - incident-response
impact: high
action: review
status: current
affects:
  - MetaMask systems used to store recipient addresses
briefing:
  changed: MetaMask disclosed on September 30 that it was investigating an ongoing
    infrastructure security incident, according to BleepingComputer.
  why: A threat actor gained access to systems used to store recipient addresses
    and diverted some execution-layer staking rewards, while MetaMask said
    Secret Recovery Phrases and private keys were not compromised.
  action: No fixed version or mitigation step is identified in the cited report;
    follow MetaMask's incident updates.
sources:
  - title: "BleepingComputer: MetaMask says recent attack didn't affect wallet
      infrastructure"
    url: https://www.bleepingcomputer.com/news/security/metamask-says-recent-attack-didnt-affect-wallet-infrastructure/
---

MetaMask said on September 30 that it was investigating an ongoing infrastructure security incident, according to BleepingComputer. The report says a threat actor gained access to systems used to store recipient addresses and diverted some execution-layer staking rewards. It also says MetaMask stated that the attack did not compromise users' Secret Recovery Phrases or private keys.

## What is affected

The report identifies systems used to store recipient addresses as the accessed systems. It does not give a product version, a configuration detail, or a count of affected users.

## Why it matters

MetaMask's statement that Secret Recovery Phrases and private keys were not compromised is the key limit on this incident. The report still describes access to recipient-address systems and diverted execution-layer staking rewards, and it does not say how the access happened.

## What to do

The cited sources do not identify a fixed version or a mitigation step. Follow MetaMask's incident updates for remediation details.
