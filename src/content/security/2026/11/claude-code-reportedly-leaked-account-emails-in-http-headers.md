---
title: Claude Code reportedly leaked account emails in HTTP headers
date: 2026-11-08T06:54:04.921Z
format: news
summary: According to Cyber Security News, a GitHub issue reports that Claude
  Code sent a user's email address to third-party websites through HTTP
  User-Agent headers, and the issue remained open.
description: A GitHub issue reports Claude Code sent a user's email address to
  third-party websites via HTTP User-Agent headers, and the report says it
  stayed open.
tags:
  - llm-security
  - ai-agents
impact: medium
action: review
status: current
affects:
  - Claude Code 2.1.318 on macOS
briefing:
  changed: "According to Cyber Security News, GitHub user taylor-edwards filed
    issue #107757 on November 5, 2026, reporting that Claude Code sent their
    email address to third-party websites through HTTP User-Agent headers."
  why: The report says the reporter was on Claude Code 2.1.318 on macOS, while
    versions 2.1.317 and later include a cc-plugin-privacy module designed to
    block the behavior and enabled by default.
  action: Check whether Claude Code installations include the cc-plugin-privacy
    module described in versions 2.1.317 and later, and watch for the upcoming
    release that Anthropic planned to remove account emails from model context.
sources:
  - title: "Cyber Security News: Anthropic's Claude Code Reportedly Leaks User Email
      Addresses Through HTTP User-Agent Headers"
    url: https://cybersecuritynews.com/claude-code-leaks-user-email/
---

According to Cyber Security News, GitHub user taylor-edwards filed issue #107757 on November 5, 2026, reporting that Claude Code sent their email address to third-party websites through HTTP (Hypertext Transfer Protocol) User-Agent headers. The report says the issue remained open when reviewed.

## What is affected

The report identifies the reporter's setup as Claude Code version 2.1.318 on macOS. It also says versions 2.1.317 and later include a built-in module called cc-plugin-privacy, designed to block the behavior and enabled by default.

## Why it matters

The reported path is specific: an account email address was sent to third-party websites in an HTTP User-Agent header. For a team, that means a coding tool can send an account identifier to sites outside the tool's control.

## What to do

The cited report does not identify a fixed release; it describes the cc-plugin-privacy module in versions 2.1.317 and later and an upcoming change to remove account emails from model context. Check whether the Claude Code installation in use includes the cc-plugin-privacy module described in the report. Watch for the release in which Anthropic planned to remove account emails from model context, as a separate comment quoted in the report says.
