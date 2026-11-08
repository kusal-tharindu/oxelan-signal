---
title: OpenAI classifies GPT-6 Cyber as Critical in cybersecurity
date: 2026-11-08T13:15:41.009Z
format: news
summary: OpenAI classified GPT-6 Cyber as Critical under its Preparedness
  Framework and reports a 48.5% ExploitGym score, up from 32.1% for GPT-5.6
  Cyber.
description: OpenAI classified GPT-6 Cyber as Critical under its Preparedness
  Framework; ExploitGym rose to 48.5% from 32.1%.
tags:
  - ai-agents
  - llm-security
impact: info
action: review
status: current
briefing:
  changed: OpenAI published evaluation results for GPT-6 Cyber, including a
    Critical cybersecurity classification and a 48.5% ExploitGym score.
  why: The classification and benchmark results describe both offensive capability
    and containment behavior, which security teams need before using the model
    for vulnerability research or defense.
  action: Review the reported classification and deployment-safety results before
    using GPT-6 Cyber for security work.
sources:
  - title: "GPT‑6 Cyber: Advancing the frontier of aligned cybersecurity agents"
    url: https://openai.com/index/introducing-gpt-6-cyber/
---

OpenAI has classified GPT-6 Cyber as Critical in cybersecurity under its Preparedness Framework, up from High for GPT-5.6 Cyber. The company reports that the model scored 48.5% on ExploitGym, a benchmark that tests whether a model can exploit a specified vulnerability, up from 32.1% for GPT-5.6 Cyber.

OpenAI also reports containment results. Without deployment safety prompts, GPT-6 Cyber avoided exploiting out-of-scope services in 99.93% of cases, up from 94.49% for GPT-5.6 Cyber. With those prompts, it stayed within bounds 100% of the time.

During vulnerability research, OpenAI says GPT-6 Cyber identified 81 previously unknown high-severity vulnerabilities in Firefox. It reproduced 1,724 Linux kernel vulnerabilities and developed working exploits for 948, more than five times the 166 exploited by GPT-5.6 Sol using the same research harness. OpenAI disclosed 304 critical Linux findings to maintainers with candidate patches.

On RemoteExploitBench, GPT-6 Cyber completed 95% of tasks, while GPT-6 Astra running with Daybreak Blue refused 100% of tasks. In offensive web penetration testing, GPT-6 Cyber achieved 40.3% recall of vulnerabilities compared with 32.0% for GPT-6 Astra.

OpenAI says it partnered with Dragos to evaluate how its models can help defend critical infrastructure. It also introduced a $1 billion Daybreak for Frontline Defenders grant program to subsidize access for resource-constrained teams.

## What to review

Security teams should review the Preparedness Framework classification and the reported deployment-safety results before using GPT-6 Cyber for security work. The ExploitGym score and the out-of-scope avoidance figures are the concrete numbers to compare with an internal use case.

<!-- cspell:words Dragos -->
