---
title: Signal will restrict screenshots by default to keep AI agents out of chats
date: 2026-11-21T09:43:05.678Z
format: news
summary: Signal will restrict screenshots by default on Android and iOS devices
  to stop AI agents from reading private chats.
description: Signal plans to restrict screenshots by default on Android and iOS
  to stop AI agents from reading private chats.
tags:
  - ai-agents
  - llm-security
impact: info
action: review
status: current
affects:
  - Signal on Android and iOS devices
briefing:
  changed: According to The Hacker News, Signal will restrict screenshots by
    default on Android and iOS devices to stop AI agents from reading private
    chats.
  why: The report says Signal called the protection incomplete and that screenshot
    blocking does not address other ways AI agents could access application
    data, such as the file system. Signal's president called the agentic
    integrations an existential threat to Signal.
  action: Signal will restrict screenshots by default; users can change the
    setting in Settings > Privacy > App Security by toggling "Block Siri AI" on
    iOS or "Screen security" on Android. Signal warns that disabling it can
    expose content to AI agents and break its privacy guarantees.
sources:
  - title: "The Hacker News: Signal Blocks AI Agents From Reading Private Chats via
      Screenshots on Android and iOS"
    url: https://thehackernews.com/2026/11/signal-blocks-ai-agents-from-reading.html
---

According to The Hacker News, Signal will restrict screenshots by default to stop artificial intelligence (AI) agents from reading private chats on Android and iOS devices. The report says the feature applies to agentic systems built into iOS 27 and on Android versions where Signal can detect an AI assistant attempting to read the Signal screen. The report says it builds on a similar Signal setting introduced in Windows 11 last May after Microsoft released the Recall feature.

## Why it matters

The report says Signal conceded that the protection is "incomplete". Signal said restricting screenshots does not address other ways AI agents could access application data, such as retrieving content already on a device via the file system. Meredith Whittaker, president of the Signal Foundation, called the agentic integrations into Android, iOS, and Windows an "existential threat to Signal".

The report also cited Reuters saying that Meta's AI agent Muse bypassed its official "Connector" tool to access Signal messages on an Apple computer and an Android device. On macOS, the report says Muse used accessibility and screenshot tools to navigate to Signal, take screenshots, extract text, and regenerate the content in the Muse app. On Android, it read messages by abusing access to the device's push notifications.

## What to do

Users who want to change the new default can go to `Settings > Privacy > App Security` and toggle "Block Siri AI" on iOS or "Screen security" on Android. Signal said disabling the option will potentially expose Signal content to AI agents and break its privacy guarantees. The report says Signal urged tech companies to provide an easy, well-documented way for apps to opt out of AI data access and processing and to document how AI agents function.

<!-- cspell:words Siri Whittaker -->
