---
title: OpenRouter removes three providers after prompt-theft research
date: 2026-11-22T06:41:00.499Z
format: news
summary: OpenRouter off-boarded three providers and removed 125 endpoints from
  Zero Data Retention eligibility after researchers traced exposed prompt data
  at AI inference providers.
description: OpenRouter removed three providers and 125 endpoints from ZDR
  eligibility after prompt-theft research at AI inference providers.
tags:
  - data-breach
  - llm-security
  - incident-response
impact: high
action: review
status: current
affects:
  - AI inference providers (three unnamed providers)
  - Phala inference service
  - Together AI inference platform
  - DeepSeek V4 Flash 0731 requests routed through Phala
briefing:
  changed: Dragos seeded about two million prompts with unique links and
    credentials between July and November 2026 and found data from at least
    three AI inference providers exposed; OpenRouter off-boarded three
    providers.
  why: Prompts can carry live credentials, and some stolen requests were flagged
    as Zero Data Retention. The largest breach involved a couple hundred AWS
    keys.
  action: Check for an OpenRouter notification and review whether endpoints still
    qualify for Zero Data Retention; OpenRouter removed 125 endpoints from
    eligibility and requires assurances before restoring it.
sources:
  - title: Data Processing Incidents on Inference Providers
    url: https://openrouter.ai/blog/announcements/data-processing-incidents-on-inference-providers/
  - title: "Three breaches, endless leaks: Your AI supply chain needs canaries"
    url: https://www.dragos.com/blog/ai-supply-chain-security-canary-tokens
  - title: "The Hacker News: OpenRouter Drops 3 Providers After Researchers Catch
      Months of Prompt Theft at AI Hosting Firms"
    url: https://thehackernews.com/2026/11/openrouter-drops-3-providers-after.html
---

OpenRouter off-boarded three providers after research found data from at least three artificial intelligence (AI) inference providers exposed. Dragos seeded about two million prompts with unique links and credentials between July and November 2026. None knew about the breach until Dragos notified them.

The earliest breach began in mid-July. Some stolen requests were flagged as Zero Data Retention (ZDR). The largest breach involved a couple hundred planted Amazon Web Services (AWS) keys, each sent in exactly one request during short windows in late October. Some stolen keys came from requests the provider rejected before a model ran.

The bait keys drove tens of thousands of AWS application programming interface (API) calls. One attacker appears to have compromised two providers at once from a single rented server. OpenRouter removed 125 endpoints from ZDR eligibility. It notified all potentially affected customers. The findings showed no breach of OpenRouter itself. OpenRouter requires assurances and validation before restoring ZDR eligibility to any removed endpoint.

According to The Hacker News, an attacker took control of an inference server at Phala and could view request data while it was processed. The report said Phala contained the incident on November 8. Requests to DeepSeek V4 Flash 0731 routed through the gateway between October 21 at 00:00 UTC (Coordinated Universal Time) and November 8 at 05:35 UTC should be treated as exposed.

The report said Together AI's stored customer prompt samples were downloaded after a credential was committed to a public GitHub repository. Together AI made zero data retention the default for new accounts.

Why it matters: prompts can carry live credentials. The report also said a Chinese AI lab fetched secret links from more than half of the seeded prompts sent to its models between July and October. About two-thirds of the requests marked no data collection or ZDR were fetched by the lab's scraper.

What to do: check for an OpenRouter notification and review whether your endpoints still qualify for ZDR. The cited sources do not list fixed versions for the affected providers.

<!-- cspell:words Phala Dragos -->
