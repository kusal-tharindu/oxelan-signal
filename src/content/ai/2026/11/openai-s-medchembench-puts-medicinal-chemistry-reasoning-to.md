---
title: OpenAI's MedChemBench puts medicinal chemistry reasoning to the test
date: 2026-11-20T19:39:43.943Z
format: news
summary: OpenAI introduced MedChemBench, a benchmark of 99 problems drawn from
  published medicinal chemistry research, and published scores for several GPT
  models at the xhigh reasoning setting.
description: MedChemBench scores models on molecular structures, scientific
  reasoning, ranking and selection, and property predictions from published
  research.
tags:
  - inference
  - ai-governance
impact: info
action: none
status: current
briefing:
  changed: OpenAI released MedChemBench, a 99-problem benchmark built from
    published medicinal chemistry research and scored across four components.
  why: The published scores let teams compare how different models handle domain
    reasoning tasks, with GPT-6.2 Astra at 84.5% of the available credit at the
    xhigh setting.
  action: Treat the scores as performance on curated problems; OpenAI states the
    results do not establish whether models can discover new drugs or improve
    laboratory decisions.
sources:
  - title: Can AI help scientists identify promising drug candidates?
    url: https://openai.com/index/introducing-medchembench
---

OpenAI has introduced MedChemBench, a benchmark that evaluates AI models on reasoning tasks drawn from medicinal chemistry research. The set contains 99 problems drawn from published research, and it draws on 117 papers and patents covering 761 distinct molecular structures.

## What the benchmark measures

The benchmark scores four components: molecular structures, scientific reasoning, ranking and selection, and property predictions. On the structure component, it checks correct atom connections and specified stereochemistry in the molecules a model assembles from the drawings and chemical groups provided.

## How the models scored

At the xhigh reasoning setting, GPT-6.2 Astra earned 84.5% of the available credit, followed by GPT-6 Astra at 83.3%, GPT-6.1 Sol at 82.0% and GPT-5.6 Sol at 58.2%. On the structure component at that setting, Astra earned 95.4% of the available credit. At max effort, GPT-6 Astra reached 83.8%.

## Why it matters

For teams weighing a model for chemistry work, the benchmark reports how several models handled tasks drawn from published research. OpenAI states the limit of those numbers directly: the results do not establish whether models can discover new drugs or improve laboratory decisions. That makes the scores useful for comparing reasoning on curated problems, and not a substitute for evidence from a laboratory or a discovery program.

<!-- cspell:words xhigh -->
