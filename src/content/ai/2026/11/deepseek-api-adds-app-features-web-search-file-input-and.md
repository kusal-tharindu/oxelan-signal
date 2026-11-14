---
title: "DeepSeek API adds app features: web search, file input and safety checks"
date: 2026-11-13T15:47:53.554Z
format: news
summary: DeepSeek has exposed the capabilities behind its app through the API,
  with V4.1-Flash supporting web search, file input, URL reading and safety
  checks.
description: DeepSeek API adds the app's search, file input, URL reading and
  safety checks on V4.1-Flash, with tool usage fees on top of token charges.
tags:
  - inference
  - llm-security
impact: info
action: review
status: current
briefing:
  changed: The capabilities behind the DeepSeek App are now available through the
    DeepSeek API, and V4.1-Flash (deepseek-flash) supports them across Messages,
    Responses, and Chat Completions.
  why: Extended capabilities incur tool usage fees in addition to standard token
    charges, and public-facing apps must enable safety checks.
  action: Enable search and URL reading with the deepseek_web_search and
    deepseek_read_url parameters, and turn on safety checks for public-facing
    apps.
sources:
  - title: The full DeepSeek App experience, now via API | DeepSeek API Docs
    url: https://api-docs.deepseek.com/news/news261113
---

The capabilities behind the DeepSeek App are now available through the DeepSeek API (application programming interface). V4.1-Flash, the model named `deepseek-flash` in the API, supports them across Messages, Responses, and Chat Completions.

## What the API exposes

Web Search searches the web or images and returns citations in non-thinking mode. Deep Thinking Search searches and reads pages throughout multi-step reasoning. File Input parses PDFs, Office files, images, and more into conversation context. URL Reading automatically fetches links in user messages to inform answers. Safety Checks screen inputs and outputs and return refusal indicators when risks are detected. An open-source frontend demo supports importing DeepSeek conversation history.

## Why it matters

Extended capabilities incur tool usage fees in addition to standard token charges. Search, Fetch, OCR (optical character recognition), ASR (automatic speech recognition), and TTS (text-to-speech) are also available as standalone APIs for custom workflows.

## What to do

Enable search with the `deepseek_web_search` parameter and URL reading with the `deepseek_read_url` parameter. Public-facing apps must enable safety checks.

<!-- cspell:words deepseek -->
