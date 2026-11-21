---
title: A malicious webpage could reach Meta Muse chats and stored memories
date: 2026-11-21T12:39:56.494Z
format: news
summary: According to The Hacker News, a malicious webpage could extract a Meta
  Muse user's private conversations and stored memories without an approval
  prompt.
description: A lab chain in Meta Muse reached private chats, credentials and the
  Sentinel gate, according to The Hacker News.
tags:
  - ai-agents
  - llm-security
  - incident-response
impact: high
action: review
status: current
affects:
  - Meta Muse
briefing:
  changed: A laboratory chain against Meta Muse let a malicious webpage reach
    private conversations and stored memories without an approval prompt.
  why: Full control of the user's cloud machine reached the credential store,
    saved files and Sentinel, according to the report.
  action: NebuSec says Muse's team has fixed every weakness it describes; the
    cited sources do not list fixed versions.
sources:
  - title: "The Hacker News: A Single Malicious Webpage Let Researchers Hijack Meta
      Muse and Access Private Chats"
    url: https://thehackernews.com/2026/11/a-single-malicious-webpage-let.html
---

According to The Hacker News, a malicious webpage could extract a Meta Muse user's private conversations and stored memories without triggering an approval prompt. The same report says the attack could be extended to reach credentials Muse stores for connected accounts. It says the work was a laboratory demonstration, not an attack on real users, and stayed inside the individual user's cloud machine.

The report describes Muse as Meta's personal artificial intelligence (AI) agent, launched on September 8, that works through the online accounts a user connects to it. It says each person's agent runs on its own cloud computer. A monitoring layer called Sentinel is meant to be the single gate for anything the agent sends out.

The researchers chained a flaw in Muse's built-in browser, which the assistant uses for tasks such as creating PDF (portable document format) files, to a Linux kernel flaw, taking full control of the user's cloud machine. That full control reached the credential store, the saved files and Sentinel itself. The compromise did not break out to the shared server beneath the machine or into other users' machines.

## Why it matters

The production concern is the chain: a webpage reached the browser, then the Linux kernel, then full control of the user's cloud machine. An earlier Muse flaw found in September only let malware already on a user's Mac hijack the assistant on the device, the report says. Meta has not publicly confirmed the fixes or commented on the work.

## What to do

NebuSec, the security firm that published the work, says Muse's team has since fixed every weakness it describes. The firm says the exploits were all fixed before publication. The cited sources do not list fixed versions. The vendor's advisory and release notes are the place to confirm the fixed build you use.

<!-- cspell:words Nebu -->
