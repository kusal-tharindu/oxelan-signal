---
title: Qubole-linked IAM roles exposed customer AWS data in supply chain attack
date: 2026-11-10T13:46:16.943Z
format: news
summary: According to SecurityWeek, a threat actor used compromised IAM
  credentials tied to Qubole to steal data from over a dozen organizations
  through roles they had created for Qubole's AWS account.
description: Attackers used compromised Qubole-linked IAM credentials to read
  data from customer AWS environments, with no write actions observed.
tags:
  - supply-chain
  - authentication
impact: high
action: review
status: current
affects:
  - AWS IAM roles organizations created for Qubole's AWS account
  - Qubole customer AWS environments
  - Amazon S3 buckets accessed by those roles
briefing:
  changed: A threat actor used compromised IAM credentials for an AWS account
    associated with Qubole to steal data from over a dozen organizations,
    according to SecurityWeek.
  why: The attackers assumed IAM roles that organizations had created for Qubole's
    AWS account, and the report says some roles remained in place long after
    companies stopped using Qubole.
  action: Review AWS IAM role activity for the reported quiam- session prefix and
    check whether Qubole roles remain present.
sources:
  - title: "Inside the Qubole Supply Chain Attack: How Sentra Found It"
    url: https://sentra.io/blog/breaches/inside-the-qubole-supply-chain-attack
  - title: "SecurityWeek: Over a Dozen Organizations Hit in Qubole Supply Chain
      Attack"
    url: https://www.securityweek.com/over-a-dozen-organizations-hit-in-qubole-supply-chain-attack/
---

According to SecurityWeek, a threat actor used compromised IAM (identity and access management) credentials for an AWS (Amazon Web Services) account associated with Qubole to steal data from over a dozen organizations. The report says the attackers assumed IAM roles that organizations had set up for Qubole's AWS account and used them to reach customer AWS environments. The roles stayed dormant until the campaign started on October 14 and were used until October 26, according to the report.

Sentra spotted the campaign and reported it to Wiz, which investigated it together with Sentra and Mandiant. The report says the attacks came from a rented OVH server and the Mullvad VPN (virtual private network), and that none of the observed activity originated from Qubole's network. It also says the threat actor used role session names with the quiam- prefix, such as quiam-enum and quiam-scope-full.

The report says that after enumeration the attackers harvested secrets from common AWS storage locations, used TruffleHog to test credentials, and exfiltrated data from victims' S3 (Simple Storage Service) buckets. It describes the actor as opportunistic, reading from whatever buckets each role could reach and in some cases downloading entire buckets in a single session. Qubole roles remained in place long after companies stopped using Qubole, and those roles could read nearly all of the data the attacker went after, according to the report.

The report also describes a separate campaign involving Qubole integrations that was active between October 8 and October 11, testing customer-owned AWS access keys and in some cases compromising environments. Wiz identified an ISO file designed to be remotely booted on victim machines to harvest data but has no evidence of its deployment, according to the report.

## What to do

Review role session logs for names using the quiam- prefix and for the examples quiam-enum and quiam-scope-full. The report says Qubole roles remained in place long after companies stopped using Qubole, so check whether those roles are still present. Do not treat ExternalId as sufficient protection on its own: the report says every Qubole role had an ExternalId and the attacker presented the right code every time. The cited reports do not publish fixed versions or a configuration-only workaround.

<!-- cspell:words Qubole Qubole's quiam Sentra Mandiant Mullvad exfiltrated -->
