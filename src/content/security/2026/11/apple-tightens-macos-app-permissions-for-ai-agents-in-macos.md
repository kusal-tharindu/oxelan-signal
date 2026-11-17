---
title: Apple tightens macOS app permissions for AI agents in macOS 27.3 beta 2
date: 2026-11-17T12:59:38.904Z
format: news
summary: Apple introduced more granular app data access controls in macOS 27.3
  beta 2, splitting Device Control and Data Access and adding an ask-every-time
  option.
description: Apple previewed macOS 27.3 beta 2 controls that split Device
  Control and Data Access and let users require apps to ask every time.
tags:
  - ai-agents
  - llm-security
impact: info
action: review
status: current
briefing:
  changed: According to The Hacker News, Apple introduced new controls in macOS
    27.3 beta 2 that give users more granular access to data they give to apps,
    including AI agents.
  why: The changes affect Device Control and Data Access and Full Disk Access, and
    split Device Control and Data Access into System & App Protection Override
    and Accessibility.
  action: Review the split settings and the ask-every-time option when the changes
    are available.
sources:
  - title: "The Hacker News: Apple Tightens macOS App Permissions to Limit Data
      Access Amid AI Agent Security Risks"
    url: https://thehackernews.com/2026/11/apple-tightens-macos-app-permissions-to.html
---

According to The Hacker News, Apple introduced new controls that allow Mac users to give more granular access to data they give to apps, including those that use AI agents. The changes are previewed in macOS 27.3 beta 2 and relate to the Device Control and Data Access API and the Full Disk Access API. The report says Device Control and Data Access is being split into two settings: System & App Protection Override and Accessibility. Users will also have an option to configure apps to ask every time they require access.

Apple stated that app permissions previously granted by users will remain intact. The report notes that Apple began tightening controls around Full Disk Access a little over a month before this announcement.

## Why it matters

The split changes how users grant access through Device Control and Data Access. The ask-every-time option adds a per-request choice for apps.

## What to do

Review the split settings and the ask-every-time option when the changes are available. Previously granted permissions will remain intact.
