---
title: Notion says Fireworks AI breach exposed AI chat transcripts
date: 2026-11-12T05:54:42.853Z
format: news
summary: A breach at inference provider Fireworks AI exposed Notion AI chat
  transcripts in fewer than 1% of Notion workspaces, and Notion has disabled the
  Insights feature while it investigates.
description: Notion says a Fireworks AI breach exposed AI chat transcripts in
  fewer than 1% of workspaces; it disabled Insights and cut the provider off.
tags:
  - data-breach
  - incident-response
impact: high
action: review
status: current
affects:
  - Notion workspaces using Notion AI (fewer than 1% of Notion workspaces)
briefing:
  changed: Fireworks AI notified Notion on November 2 that malicious actors had
    accessed a small set of data, and confirmed the final impacted dataset on
    November 8; it included Notion AI chat transcripts used for the Insights
    feature.
  why: Notion had a contractual commitment from Fireworks to zero data retention,
    yet data was retained from the endpoints Notion used, and Notion recommends
    that affected customers treat the data as if it were exposed.
  action: Affected workspace owners can review the data under Security incident
    review, and should rotate any passwords, API keys or other credentials
    pasted into Notion AI during the incident window.
sources:
  - title: Fireworks AI incident
    url: https://www.notion.com/en-us/security/advisories/security-incident-involving-a-third-party-ai-vendor
  - title: Notice about the Fireworks AI incident that may impact some Notion
      workspaces – Notion Help Center
    url: https://www.notion.com/help/security-incident-involving-a-third-party-ai-vendor
  - title: "BleepingComputer: Notion says Fireworks breach exposed customer AI chat
      transcripts"
    url: https://www.bleepingcomputer.com/news/security/notion-says-fireworks-breach-exposed-customer-ai-chat-transcripts/
---

Notion has disclosed that a breach at its AI infrastructure provider, Fireworks AI, exposed Notion AI chat transcripts in a small number of workspaces: fewer than 1% of Notion workspaces. The exposed data was chat transcripts used for the Insights feature.

## What is affected

Notion used Fireworks for the classification jobs behind Insights and as a general inference provider serving open-weight models inside its product. For the vast majority of impacted workspaces, the chat transcripts were unattributable, lacking labels tying them to a user or workspace. Data from AI Meeting Notes, including audio, transcripts, or summaries, was not affected unless it was used as an input in a chat transcript with Notion AI.

Fireworks notified Notion on the evening of November 2 that a small set of data had been accessed by malicious actors. By the morning of November 3, Notion disconnected its systems from Fireworks, deleted all data in the Fireworks system, and stopped communication between its systems and Fireworks. Fireworks notified Notion on November 6 that malicious actors may have accessed potential customer data, and confirmed the final impacted dataset on November 8. Notion reached out to impacted customers on November 9.

## Why it matters

Notion states the incident was not a breach of its own systems. Fireworks had provided Notion with a contractual commitment to zero data retention, but during the investigation Notion learned that data was retained from the Fireworks endpoints it used. According to BleepingComputer, Fireworks AI disclosed a breach in which an attacker accessed its development environment via a third-party cloud provider on October 23, compromising resource metadata, billing information, model weights, and datasets for some customers. The report also said Fireworks experienced an earlier breach in early October, when hackers accessed environment variables containing API keys and tokens stored as secrets for a limited number of accounts.

## What to do

The Insights feature has been disabled and Notion is no longer serving open-weight models through Fireworks. Affected workspace owners can view the affected data by opening the workspace sidebar and choosing Security incident review in Notion's desktop web interface. Notion recommends that affected customers treat the data as if it were exposed and rotate sensitive information, passwords, API keys, or other credentials pasted into Notion AI during the time frame of the incident.
