---
title: BOSSAI agent mesh tied to Taipei emergency dispatch theft
date: 2026-11-09T10:53:58.910Z
format: news
summary: Acronis identified a single operator using a BOSSAI mesh of 12
  artificial intelligence (AI) agents to target hundreds of organizations, with
  confirmed breaches at universities and emergency services.
description: Acronis tied a single operator and a BOSSAI artificial intelligence
  (AI) agent mesh to confirmed breaches and data theft at universities and
  emergency services.
tags:
  - llm-security
  - ai-agents
impact: critical
action: review
status: current
briefing:
  changed: Acronis Threat Research Unit identified a single operator using a
    BOSSAI mesh of 12 AI agents, nine of them active, to run persistent
    campaigns in several countries.
  why: Confirmed breaches at universities and emergency services providers
    resulted in confirmed exfiltration of medical data and personally
    identifiable information (PII).
  action: Review exposure to the BOSSAI activity and follow the vendor advisory
    for affected systems; the cited sources list no fixed version or vendor
    mitigation.
sources:
  - title: "BOSSAI: Inside the AI attack mesh that targeted Taiwan’s emergency
      services"
    url: https://www.acronis.com/en/tru/posts/bossai-inside-the-ai-attack-mesh-that-targeted-taiwans-emergency-services/
  - title: "The Hacker News: Taiwan-Based Hacker Used BOSSAI AI Agents to Steal
      Taipei Emergency Dispatch Records"
    url: https://thehackernews.com/2026/11/taiwan-based-hacker-used-bossai-ai.html
---

Acronis Threat Research Unit identified a single operator using a mesh of artificial intelligence (AI) agents called BOSSAI to run persistent campaigns in several countries. The mesh was composed of 12 AI agents, nine of which were active. According to The Hacker News, researchers are highly confident the attacker is a single person based in Hualien City, Taiwan.

The report says the activity pulled emergency dispatch records covering seven Taipei districts. The operator targeted hundreds of organizations in eleven countries, including government emergency services, banks, universities, and military systems. Confirmed breaches occurred at universities and emergency services providers and resulted in confirmed data exfiltration of medical data and personally identifiable information (PII).

The report says the agents found a Taipei fire department platform exposing patient data from 2018, including electrocardiogram (ECG) readings and ambulance video footage, without a login. The report also says the agents pulled data from an account table at a Taiwanese lending firm through SQL (structured query language) injection. In Thailand, the report says the agents collected data from three universities after selecting 489 potential targets across 45 institutions. In Mexico, the report says they collected about 206,800 home phone records containing names and addresses.

These details matter because the case ties an agent mesh to confirmed data theft at universities and emergency services. The evidence came from the attacker's own server, which contained more than 90,000 files. The report says commercial AI models mostly refused to help the attacker, so the attacking agents ran almost entirely on abliterated models, versions of DeepSeek, GLM, and Qwen; abliterated means run locally with safety training removed.

## What to do

No fixed version or vendor mitigation appears in the cited sources for the BOSSAI campaign. Follow the vendor advisory for any affected system and review exposure to the activity described by Acronis. The report lists nine Internet Protocol (IP) addresses and nine domains from the attacker's setup in the indicator list at the end of the analysis.

<!-- cspell:words BOSSAI Acronis Hualien abliterated Qwen -->
