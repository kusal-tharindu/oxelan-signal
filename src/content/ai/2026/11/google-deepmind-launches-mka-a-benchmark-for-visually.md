---
title: Google DeepMind launches MKA, a benchmark for visually complex knowledge work
date: 2026-11-10T16:54:25.513Z
format: news
summary: Google DeepMind and Artificial Analysis released MKA, a benchmark of
  200 tasks that scores agents on visually complex professional work.
description: MKA scores agents on multi-step professional tasks with
  expert-written rubrics weighted 75% toward factual accuracy.
tags:
  - ai-agents
  - inference
action: review
status: current
briefing:
  changed: Google DeepMind and Artificial Analysis launched the MKA benchmark, a
    200-task evaluation set built with domain experts across 10 verticals and 83
    occupations. Early results put Gemini 4 Carbon second in quality at 6x lower
    cost on average than the top scoring model.
  why: Each task reflects a multi-step project that takes a seasoned professional
    three to eight hours, and the rubric puts most of its weight on factual
    accuracy rather than on how the output looks.
  action: Inspect the 10 public MKA tasks on Hugging Face before relying on the
    rankings. Gemini 4 Carbon is available via the Gemini API in Google AI
    Studio.
sources:
  - title: Introducing the Multimodal Knowledge Agent benchmark
    url: https://blog.google/innovation-and-ai/models-and-research/gemini-models/multimodal-knowledge-agent-benchmark/
---

Google DeepMind, in partnership with Artificial Analysis, launched the Multimodal Knowledge Agent (MKA) benchmark, built to evaluate how agents reason across visually complex files to solve real-world knowledge work tasks. MKA was built with domain experts across 10 verticals and 83 occupations where day-to-day work is inherently visual.

Those specialists, from architects and biologists to underwriters and data scientists, created MKA's 200-task evaluation set to assist them in their jobs. Each task reflects a multi-step project that takes a seasoned professional three to eight hours to complete.

## Scoring and the first results

Each output is graded against an expert-written rubric of roughly 70 yes/no checks, weighted 75% on factual accuracy and 25% on visual design. When domain experts graded model outputs themselves, they agreed with the autorater 96% of the time. Among the models tested, Gemini 4 Carbon achieves #2 in quality and completes tasks at 6x lower cost on average compared to the top scoring model.

## What to do

Artificial Analysis released a separate set of 10 public MKA tasks on Hugging Face, so anyone can inspect the format and test their own agents. Gemini 4 Carbon is available today via the Gemini API (application programming interface) in Google AI Studio.

<!-- cspell:words Multimodal autorater -->
