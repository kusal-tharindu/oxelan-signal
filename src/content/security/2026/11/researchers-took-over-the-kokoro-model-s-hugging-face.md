---
title: Researchers took over the Kokoro model's Hugging Face account
date: 2026-11-18T02:39:53.897Z
format: news
summary: According to BleepingComputer, researchers registered a domain listed
  in Kokoro's public DONATE.md file, reset the publisher's password, and then
  poisoned the model's weights in a local test.
description: Researchers took over the Hugging Face account that publishes
  Kokoro by registering a domain listed in its DONATE.md file and resetting the
  password.
tags:
  - supply-chain
  - open-weights
  - authentication
impact: high
action: review
status: current
affects:
  - Kokoro text-to-speech model on Hugging Face
briefing:
  changed: According to BleepingComputer, researchers took control of the Hugging
    Face account that publishes the Kokoro text-to-speech model by registering
    the hexgrad.com domain listed in its public DONATE.md file and resetting the
    login password.
  why: The report says modified weights carry no malicious code or signature for
    scanners to detect, and that Hugging Face does not vet publishers or check
    whether an account is still held by its original owner.
  action: The cited sources name no fixed version or mitigation step; the report
    says the issue was reported to Hugging Face without a response and that the
    modified weights were never uploaded.
sources:
  - title: "BleepingComputer: Researchers hijack Hugging Face account for popular
      Kokoro AI model"
    url: https://www.bleepingcomputer.com/news/security/researchers-hijack-hugging-face-account-for-popular-kokoro-ai-model/
---

## What happened

According to BleepingComputer, researchers took control of the Hugging Face account that publishes the Kokoro text-to-speech model by registering the hexgrad.com domain listed in the project's public DONATE.md file and using it to reset the account's login password.

## What is affected

Kokoro is an open-weight text-to-speech model with more than 50 voice presets, and it records nearly 13 million monthly downloads on Hugging Face. Hexgrad, the model's developer, has not pushed an update since April 2025. The report says developer tools from Google, NVIDIA and Intel support the model, and that AMD and Amazon Web Services (AWS) have published guides showing its use in AI-agent workflows.

## Why it matters in production

In a controlled test, the researchers modified Kokoro's model weights in 87 seconds on a gaming graphics processing unit (GPU), causing the model to produce poisoned output. Because only the weights change, the report says there is no malicious code or signature for malware scanners to detect. Alon Hertz, whose team ran the test, says Hugging Face does not vet publishers, does not verify whether an account is still held by its original owner, and does not vet the models or datasets those accounts upload.

## What to do

According to the report, Hertz reported the issue to Hugging Face and received no response, and the cited sources name no fixed version or mitigation step. The team tested the modified model locally and never uploaded the modified weights to Hugging Face.

<!-- cspell:words Kokoro Kokoro's hexgrad Hexgrad Alon -->
