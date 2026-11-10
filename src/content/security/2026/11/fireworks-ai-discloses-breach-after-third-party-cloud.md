---
title: Fireworks AI discloses breach after third-party cloud provider compromise
date: 2026-11-10T08:43:55.744Z
format: news
summary: Fireworks says attackers reached its development machines through a
  compromised third-party cloud provider, exposing billing data and, for some
  customers, incomplete model weights.
description: Fireworks disclosed a breach that exposed resource metadata and
  billing information, plus some customers' incomplete model weights and
  datasets.
tags:
  - incident-response
  - llm-security
impact: high
action: review
status: current
affects:
  - Fireworks development machines
briefing:
  changed: Fireworks disclosed a breach in which attackers reached its development
    machines after breaching a third-party cloud provider that hosted its
    research and development machines.
  why: The affected internal application exposed resource metadata and billing
    information, and a subset of incomplete model weights and datasets belonging
    to certain customers.
  action: Fireworks revoked and replaced credentials and service accounts,
    restricted unauthorized network pathways and disabled self-serve dataset
    uploads and downloads while it investigates.
sources:
  - title: Update on October 2026 security incident
    url: https://fireworks.ai/security/bulletins/october-2026-security-incident-update
  - title: "BleepingComputer: Fireworks AI discloses new breach after cloud provider
      hack"
    url: https://www.bleepingcomputer.com/news/security/fireworks-ai-discloses-new-breach-after-cloud-provider-hack/
---

According to BleepingComputer, Fireworks has disclosed a new security breach in which attackers accessed its development machines after breaching a third-party cloud provider. Fireworks said the provider hosted its research and development (R&D) machines and experienced a security incident on October 23. On October 24, the unauthorized third party used that breach to reach Fireworks development machines and run an unauthorized workload that led to additional customer data impact. Fireworks said it detected the activity the same day and closed known critical vulnerabilities.

## What was exposed

The affected internal application exposed resource metadata such as Fireworks resource identifiers, display names, descriptions and creation time, along with billing information including billing and shipping addresses, invoice and payment history, account balance and credit usage. Fireworks said payment card numbers are not stored and were not impacted. For certain customers, a subset of incomplete model weights and datasets was accessed.

Fireworks said it has not detected any impact to Inference, Training SDK and Nexus, which are zero data retention (ZDR) by default. As of October 25, it had not detected further evidence of successful unauthorized access on the platform customers use.

## Why it matters

Fireworks said the evidence indicates links to a financially motivated cybercriminal group that sells tokens from unauthorized access to large language models (LLMs) to illicit routing gateways, a practice known as LLMJacking. Google Threat Intelligence Group and Mandiant published a blog post about it on November 2.

According to BleepingComputer, Fireworks also notified law enforcement and customers of another incident in early October, after attackers accessed environment variables holding application programming interface (API) keys and tokens stored as secrets for a limited number of accounts. BleepingComputer reported that Google's Threat Intelligence Group and Mandiant said LLMJacking attacks are driving record costs for compromised organizations, with cloud AI charges reaching as high as $1 million from fraudulent calls using stolen API keys.

## What to do

Fireworks revoked and replaced credentials and service accounts, removed unnecessary elevated privileges, and restricted unauthorized network pathways while isolating affected systems. It also tightened access to data storage and analytics systems and disabled self-serve dataset uploads and downloads used by Batch Inference and dataset-based training while it investigates. The company said it notified law enforcement and engaged Palo Alto Networks Unit 42 for forensic analysis.

<!-- cspell:words cybercriminal Mandiant Palo -->
