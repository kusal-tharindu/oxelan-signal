---
title: ARTEX operator servers expose the AI stack behind South Korean financial
  breaches
date: 2026-11-08T12:41:29.140Z
format: news
summary: CrowdStrike linked a campaign against South Korean financial
  organizations to ARTEX, an open-source agentic pentesting tool, and exposed
  operator files show the AI models and skills behind it.
description: CrowdStrike tied a South Korean financial campaign to the ARTEX
  agentic pentesting tool; exposed servers show its AI backend and operator
  files.
tags:
  - incident-response
  - ai-agents
impact: critical
action: review
status: current
briefing:
  changed: CrowdStrike Intelligence identified infrastructure for a campaign
    against South Korean financial organizations that exfiltrated data, and
    exposed ARTEX servers carried operator files and AI configuration.
  why: The exposed files show an agentic pentesting tool run with an LLM backend
    and reusable skills, while Hunt.io says the link between the wider tooling
    and the bank breaches is unconfirmed.
  action: Close public access to admin services, put them behind a VPN or
    allowlist, reset SSH passwords, and rotate API keys, proxy logins and tokens
    that may have sat in exposed files.
sources:
  - title: Unknown Threat Actor Uses AI-Driven ARTEX to Target South Korean Finance
    url: https://www.crowdstrike.com/en-us/blog/unknown-threat-actor-uses-artex-to-target-south-korean-finance/
  - title: "Cyber Security News: ARTEX Hackers Expose Their Own Servers, Revealing
      AI Tools Behind South Korean Bank Breaches"
    url: https://cybersecuritynews.com/artex-hackers/
---

CrowdStrike Intelligence identified infrastructure associated with a targeted campaign against South Korean financial organizations that resulted in exfiltrated data. The campaign was active from late September to early October 2026, and CrowdStrike assesses with moderate confidence that the threat actor is likely a Chinese speaker and financially motivated. The actor used ARTEX, a recently released open-source agentic penetration testing tool developed in China.

## What is affected

According to Cyber Security News, seven South Korean financial institutions had data stolen through internet-facing systems. The report says roughly 66,000 to 67,000 people and about 2,200 companies were affected. Names, jobs, income details and loan information were exposed, according to the report.

## Why it matters

CrowdStrike found that the ARTEX instance used DeepSeek v4.1-flash as the primary large language model (LLM) backend, supplemented with GLM-5.3 and Grok 4.6. The threat actor likely accessed DeepSeek through the LLM application programming interface (API) proxy or reseller xcai.pro. The sessions point to a two-server setup, with a Hong Kong-based IP as primary infrastructure and 38.244.50.120 hosting the ARTEX instance.

The report said Hunt.io found a newer open directory at 23.248.226.250, a Hong Kong jump server holding more of the operator's working files. That server held a state file showing Claude Code version 2.1.221, started 510 times since August 4, 2026. The report also listed 19 custom skills used 147 times in total, covering reconnaissance, code review, web testing, firewall bypass checks, Android app analysis and cloud phone control. Hunt.io says the link between the wider tooling and the bank breaches is unconfirmed. The ARTEX GitHub page and Docker image were taken down on October 11, 2026, though the report said copies remain online.

## What to do

Cyber Security News recommended that defenders close public access to admin services and place them behind a virtual private network (VPN) or allowlist. The report also recommended resetting Secure Shell (SSH) passwords and rotating API keys, proxy logins and tokens that may have sat in exposed files.

<!-- cspell:words ARTEX pentesting exfiltrated xcai -->
