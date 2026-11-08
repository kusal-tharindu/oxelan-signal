---
title: BioBasicsBench measures AI agents on routine wet-lab data
date: 2026-11-08T13:13:31.755Z
format: news
summary: OpenAI and Ligo introduced BioBasicsBench, a 100-task benchmark for how
  well AI agents read raw wet-lab data; GPT-6 Astra posted the highest mean
  reward at 66.7%.
description: BioBasicsBench measures AI agents on 100 routine wet-lab tasks;
  GPT-6 Astra earned 66.7% of available credit at the xhigh setting.
tags:
  - ai-agents
  - ai-governance
impact: info
action: review
status: current
briefing:
  changed: OpenAI and Ligo introduced BioBasicsBench, a benchmark of 100 routine
    wet-lab tasks that measures how well AI agents interpret raw experimental
    data.
  why: "The benchmark gives a concrete read on bench-level interpretation: at the
    xhigh setting, GPT-6 Astra earned an average of 66.7% of the available
    credit, compared with 43.8% for GPT-5.6 Sol."
  action: Check the review record behind the task set and the model and
    reasoning-effort setting behind any quoted score; each task went through an
    internal review, an external PhD-level wet-lab review and a final internal
    review.
sources:
  - title: Measuring how AI agents handle everyday wet-lab science
    url: https://openai.com/index/measuring-how-ai-agents-handle-wet-lab-science/
  - title: Measuring how AI agents handle everyday wet-lab science | TLDR
    url: https://tldr.tech/story/7287b02e-3f00-4b1e-9979-224de4087d68
---

OpenAI and Ligo introduced BioBasicsBench, a benchmark that measures how well AI agents interpret raw experimental data from routine wet-lab work, meaning bench experiments run on physical samples rather than in software. The benchmark contains 100 tasks across five areas of routine wet-lab work.

Seven models were evaluated: GPT-5.2, GPT-5.4, GPT-5.5, GPT-5.6 Sol, GPT-6.1 Sol, GPT-6 Luna and GPT-6 Astra. The evaluation covers 37 model and reasoning-effort settings, with five attempts on each of the 100 tasks per setting, for a total of 18,500 results.

## Why it matters

At the xhigh setting, which allows more reasoning per task, GPT-6 Astra earned an average of 66.7% of the available credit, compared with 43.8% for GPT-5.6 Sol. On one DNA-cloning control plate, GPT-6 Astra caught a wrong antibiotic label that GPT-5.6 Sol missed. The label "LB Kan50" identifies kanamycin, a different antibiotic from the ampicillin used in the experiment. GPT-6 Astra also correctly recognized a z-stack, a series of images taken at different depths.

## What to do

Each task underwent an internal review by a Ligo scientist who had not written it, an external review by a PhD-level scientist working in a wet lab, and a final internal review. Before quoting a score, check both the review record behind the task set and the model and reasoning-effort setting the number came from.

<!-- cspell:words Ligo xhigh kanamycin -->
