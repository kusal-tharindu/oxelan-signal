---
title: 186 lookalike AI domains route visitors to ClickFix lures and browser hijackers
date: 2026-11-12T16:47:34.053Z
format: news
summary: According to The Hacker News, 186 lookalike domains across 27 AI brands
  route visitors to ClickFix lures, browser-hijacking malware and a
  search-hijack extension family.
description: Island found 186 lookalike AI domains across 27 brands that lead to
  ClickFix lures, browser-hijacking malware and search-hijack extensions.
tags:
  - phishing
  - malware
impact: high
action: review
status: current
briefing:
  changed: According to The Hacker News, Island found 186 lookalike domains
    masquerading as AI tools across 27 AI brands, a pattern it codenamed
    TypoPrompting, with routes leading to a ClickFix lure, browser-hijacking
    malware named Net Guard and a search-hijack extension family.
  why: The extension route still had 16 live Chrome Web Store listings and 972,000
    declared users as of November 3, 2026, while the ClickFix fingerprint gate
    script spans 211 entry domains beyond the AI lookalikes.
  action: Review the documented extension and search-provider behavior in your
    browser fleet; the cited report lists no fixed versions or patch for Net
    Guard or the extension family.
sources:
  - title: "The Hacker News: 186 Fake AI Domains Redirect Users to ClickFix Lures,
      Browser Malware, and Search Hijackers"
    url: https://thehackernews.com/2026/11/186-fake-ai-domains-redirect-users-to.html
---

According to The Hacker News, Island found 186 lookalike domains masquerading as AI tools across 27 AI brands, a delivery pattern the company codenamed TypoPrompting. The spoofed brands named in the report include Anthropic Claude, OpenAI ChatGPT, Google Gemini, Microsoft Copilot, DeepSeek, Mistral, Perplexity, Midjourney, ElevenLabs, Lovable and Cursor. Some of the domains are not new: the report says lookalikes such as cloude[.]ai and cluade[.]ai were registered as early as July 13, 2023.

## The delivery routes

One route is a ClickFix lure that serves a PowerShell command via a fake Cloudflare verification page, with a fingerprint gate script that spans 211 entry domains, including lookalikes of banks, insurers and enterprise software. A second route takes visitors to fake Security Check pages that deliver browser-hijacking malware called Net Guard, through eight typosquat domains for Claude, DeepSeek, Copilot, ElevenLabs and Voice AI. The third sends users to a search-hijack extension family with 16 live Chrome Web Store listings and 972,000 declared users.

Net Guard presents itself as a Wi-Fi and DNS (domain name system) safety scanner and matches the MSIX (a Windows app package format) hash of a legitimate app of the same name, while carrying capabilities to run attacker-controlled JavaScript, change the default search engine while the user is idle, edit browser profiles and install arbitrary Chrome extensions. On the extension route, the lookalike preplexity[.]ai redirects the browser to a Chrome Web Store extension called Quick Search, whose manifest overrides the default search provider with find.flashysearches[.]com.

## Why it matters

Each domain is a lookalike of an AI product name, so a click from a search result or a typed address can land where the user did not intend. The extension route ends in the Chrome Web Store rather than a downloaded file, and the report attributes the search change to the extension's manifest.

## What to do

The cited report lists no fixed versions or patch for Net Guard or the extension family, so the action is review. It documents behavior that is checkable in a browser: a default search provider set to find.flashysearches[.]com, and Net Guard's ability to edit browser profiles and install arbitrary Chrome extensions.

<!-- cspell:words cloude cluade MSIX preplexity flashysearches -->
