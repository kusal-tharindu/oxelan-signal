---
title: OpenAI used frontier models to help design its Jalapeño inference chip
date: 2026-11-18T17:45:55.278Z
format: news
summary: OpenAI engineers used frontier models to accelerate development of the
  Jalapeño inference chip, with model-proposed changes cutting cell area in
  several blocks.
description: OpenAI reports that frontier models helped design its Jalapeño
  inference chip, with model-proposed changes reducing cell area in some blocks.
tags:
  - inference
  - ai-agents
impact: info
action: review
status: current
briefing:
  changed: OpenAI engineers used frontier models to accelerate development of
    Jalapeño, the company's first custom inference chip.
  why: Model-proposed changes reduced cell area in the warp engine and matrix
    unit, and AMD has included some of the changes in a design sent for
    manufacturing.
  action: No action required; this is a vendor engineering report.
sources:
  - title: Advancing chip design with OpenAI models
    url: https://openai.com/index/advancing-chip-design-with-our-models
---

OpenAI engineers used frontier models to accelerate the development of Jalapeño, the company's first custom inference chip. The company started using GPT-4o to help design Jalapeño in early 2025.

## What the models changed

A multiplier redesign used about 15% less cell area in synthesis while reducing latency from two clock cycles to one. A separate adder redesign reduced cell area by about 15% while retaining its two-cycle latency. Model-proposed changes also reduced standard-cell area by about 13% in the warp engine and 10% in the matrix unit.

## Results with AMD

OpenAI partnered with AMD on PPA (power, performance, and area) improvements and saw up to 14% improvement relative to heavily optimized baselines on the flagship GPU IP. AMD has already included some of the model-proposed changes in a recent design it sent for manufacturing. AMD also verified single-digit percentage gains in PPA across key blocks of its upcoming next-generation flagship CPU using designs written by OpenAI's model.

## Evaluation on RISC-V cores

OpenAI tested each model generation on two open-source 32-bit RISC-V cores, PicoRV32 and Ibex. OpenTitan uses Ibex as the embedded processor in its security chip. With a comparable budget of about 112,000 tokens per run, GPT-6.2 Astra had the highest average score on both cores.

The full evaluation included 9,881 scored runs across both tasks, both cores, and all token budgets. OpenAI is partnering with Synopsys to train GPT-Synopsys, a new model, to use Synopsys EDA (electronic design automation) tools the way expert chip designers do.

<!-- cspell:words Pico -->
