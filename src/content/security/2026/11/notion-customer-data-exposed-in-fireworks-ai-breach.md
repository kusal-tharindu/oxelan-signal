---
title: Notion customer data exposed in Fireworks AI breach
date: 2026-11-12T16:42:37.667Z
format: news
summary: According to SecurityWeek, a cyberattack at Fireworks AI exposed some
  customer data, and Notion is notifying a small set of customers whose Notion
  AI chat transcripts were involved.
description: An attack at Fireworks AI exposed Notion AI chat transcripts for
  fewer than 1% of workspaces, and Notion has disabled the Insights feature.
tags:
  - data-breach
  - incident-response
  - inference
impact: high
action: review
status: current
affects:
  - Notion AI chat transcripts used for the Insights feature
  - Notion workspaces
briefing:
  changed: A cyberattack at Fireworks AI exposed some of its customers' data;
    Notion says a small set of data was accessed on November 2 and that the
    impacted dataset included Notion AI chat transcripts used for the Insights
    feature.
  why: Notion used Fireworks as a general inference provider for open-weight
    models, so a breach at the provider reached its own customers' AI
    transcripts.
  action: Notion recommends treating the data as exposed and rotating any
    credentials pasted into Notion AI during the incident, and has contacted
    affected customers with instructions to retrieve and review their data.
sources:
  - title: Fireworks AI incident
    url: https://www.notion.com/en-us/security/advisories/security-incident-involving-a-third-party-ai-vendor
  - title: "SecurityWeek: Notion Customer Data Compromised in Fireworks AI Hack"
    url: https://www.securityweek.com/notion-customer-data-compromised-in-fireworks-ai-hack/
---

According to SecurityWeek, a cyberattack at Fireworks AI exposed some of its customers' data, and Notion is notifying a small set of customers whose information was compromised in the breach. The report says Fireworks AI was hacked twice in October: once through compromised internal credentials and once through a third-party cloud provider that was hosting Fireworks R&D machines. The second incident, which the report ties to a recent rise in LLMJacking activity, occurred on October 24, when attackers executed an unauthorized workload that led to the compromise of customer data.

## Notion's account

Before the incident, Notion used Fireworks as a general inference provider for delivering open-weight models. Notion says that on the evening of November 2, Fireworks notified it that a small set of data had been accessed by malicious actors. By the morning of November 3, Notion had disconnected its systems from Fireworks, deleted all data in the Fireworks system, and stopped all communication between its systems and Fireworks.

The report says Fireworks contained the incident the same day. Fireworks notified Notion again on November 6 that malicious actors may have accessed potential customer data. On November 8, Fireworks confirmed the final impacted dataset, and on November 9, Notion reached out to impacted customers.

## What was accessed

The impacted dataset included Notion AI chat transcripts used for the Insights feature, which helps customers understand their AI usage. The report says fewer than 1% of Notion workspaces were affected. The Insights feature has been disabled while Notion investigates the incident, and Notion says it is no longer serving open-weight models through Fireworks.

## Why it matters

An attack on a third-party inference provider became a customer-facing data event for Notion. Notion says that beyond what is in the chat transcript itself, there is no information tying the chat back to workspaces, users or companies.

## What to do

Notion has contacted the affected customers with instructions on how to securely retrieve and review the data in their workspaces, but it did not disclose how many customers were affected. Notion recommends treating the data as exposed: if you pasted sensitive information, passwords, API keys, or other credentials into Notion AI during the incident, rotate any exposed credentials.
