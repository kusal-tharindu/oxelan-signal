---
title: Google's Gemini Decisions API targets fast closed-set decisions
date: 2026-11-13T03:43:16.765Z
format: news
summary: Google introduced the Gemini Decisions API and the Gemini Decision 1
  model for closed-set decisions, returning a confidence score with every
  answer.
description: Google launched the Gemini Decisions API and Gemini Decision 1 for
  closed-set decisions at 150-250 ms latency, priced at $0.10 per 1M input
  tokens.
tags:
  - inference
  - gateway
impact: info
action: review
status: current
briefing:
  changed: Google introduced the Gemini Decisions API, powered by the Gemini
    Decision 1 model, available through the Gemini API in Google AI Studio.
  why: One multimodal input of up to 256K tokens can carry up to 1,000 independent
    questions per request, and the endpoint returns probabilities and confidence
    scores in 150-250 ms.
  action: Prototype in Google AI Studio, where a no-cost API tier is available,
    and check whether your routing code can use the confidence score from 0 to 1
    to send ambiguous cases to a fallback or a human reviewer.
sources:
  - title: "Gemini Decisions API: Fast, calibrated multimodal decisions"
    url: https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/
---

Google introduced the Gemini Decisions API (application programming interface), a new endpoint for fast, closed-set decisions powered by the Gemini Decision 1 model (gemini-decision-1), available through the Gemini API in Google AI Studio. One multimodal input can carry text, images, audio, video, and PDFs up to 256K tokens, alongside up to 1,000 independent questions in the same request.

The endpoint returns probabilities and confidence scores in 150-250 ms end-to-end latency. Every answer includes a confidence score from 0 to 1, so calling code can send ambiguous cases to a fallback or a human reviewer.

## Three question types

The API evaluates closed-set questions: a yes/no check (noul), multiple choice (choice), and ordered rubric scoring (score). The choice type selects from 2 to 255 choices and returns the winner plus normalized probabilities for every candidate.

## Why it matters in production

The intended pattern is routing: Gemini Notebook uses the Decisions API to classify intent in milliseconds and serve everyday queries with up to 40% lower latency, while reserving deep reasoning models for complex tasks. Gemini Decision 1 is priced at $0.10 per 1M input tokens and bills nothing for output tokens. Google states that Gemini Decision 1 with the Decisions API is nearly 5x cheaper across the shared benchmark suite than Gemini 3.5 Flash-Lite with the Interactions API.

## Availability

Ecosystem integrations are rolling out across OpenRouter, LangChain, Vercel, LiteLLM, Pydantic AI, Pipecat, LiveKit, and OpenCode, alongside the google-genai software development kits (SDKs), with support coming soon to Gemini in Google Cloud. A no-cost API tier in Google AI Studio is available for prototyping.

<!-- cspell:words multimodal noul Pydantic Pipecat genai -->
