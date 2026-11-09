---
title: Gemini 4 Carbon takes first on an intelligence index, with access
  starting among cyber defenders
date: 2026-11-08T14:09:22.068Z
format: news
summary: Google's Gemini 4 Carbon ranks first on v5.0 of the Artificial Analysis
  Intelligence Index at 59 and reports 88.2% on SEC-bench Pro, with access
  starting among cyber defenders.
description: Gemini 4 Carbon scores 88.2% on SEC-bench Pro and 54.8% on
  ExploitGym, with early access limited to a subset of cyber defenders.
tags:
  - llm-security
  - ai-governance
  - inference
impact: info
action: review
status: current
briefing:
  changed: Google announced Gemini 4 Carbon, which it calls its strongest model,
    and says it ranks first on v5.0 of the Artificial Analysis Intelligence
    Index with a score of 59.
  why: The release pairs frontier benchmark scores with security results,
    including 88.2% on SEC-bench Pro for vulnerability discovery and 71.0% on
    CWE-bench for patching.
  action: "Track availability: access starts with a subset of cyber defenders and
    expands through the Fairwind Program, while Google participates in the U.S.
    government's voluntary pre-release model testing process."
sources:
  - title: "Gemini 4 Carbon: our next frontier model"
    url: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/
---

## What changed

Google has announced Gemini 4 Carbon, which it calls its strongest model, with what it describes as state-of-the-art cybersecurity and long-horizon capabilities. Google says Carbon ranks first on v5.0 of the Artificial Analysis Intelligence Index with a score of 59. It builds on Gemini 4 Argon, which launched two weeks earlier.

## The published benchmarks

Google reports 88.2% on SEC-bench Pro, a benchmark for autonomously finding complex flaws in real-world software. It also reports 54.8% on ExploitGym for exploitation and 71.0% on Collinear's CWE-bench for patching. On Gray Swan's Indirect Prompt Injection Benchmark, Google reports a 0.0% attack success rate. Carbon reduced successful cheating on Terminal-Bench 4.0 to 0.0%, with attempts to cheat dropping to 0.4%.

## Why it matters

Google's claim of state-of-the-art cybersecurity rests on the security benchmarks it published for Carbon. On internal benchmarks, Google says Carbon achieves more than 2x uplift in success rate for generating secure code over Argon. The Chrome team reported that Carbon performed more than 10X better than another lab's large frontier model when generating high quality patches. Google also reports that high-severity misalignment alerts in live coding environments with internal teams dropped by almost 80%.

## Pricing and availability

Carbon launches at $2 per million input tokens and $10 per million output tokens, with cached input tokens priced at 95% off the input token price. Access starts this week for a subset of cyber defenders, and Google says it will gradually phase access to additional trusted partners through the Fairwind Program.

## What to do

Google is participating in the U.S. government's voluntary pre-release model testing process for Carbon. Teams outside the initial defender group should treat broad availability as pending phased expansion through the Fairwind Program. Teams budgeting for security automation can price cached input at the stated discount against the published input and output rates.

<!-- cspell:words Fairwind -->
