---
title: Claude Dispatch test shows a browser extension can run code on a computer
date: 2026-11-06T16:11:44.794Z
format: news
summary: Researchers showed a browser extension that can run scripts on
  claude.ai could use Claude Dispatch to make Claude Desktop run code, and
  Anthropic plans to retire Dispatch.
description: A browser extension that runs scripts on claude.ai could use Claude
  Dispatch to make Claude Desktop run code; Anthropic plans to retire the
  feature.
tags:
  - llm-security
  - ai-agents
impact: high
action: review
status: current
affects:
  - Claude Desktop with Dispatch enabled
briefing:
  changed: Forever Security researchers showed a browser extension able to run
    scripts on claude.ai could use Dispatch to make Claude Desktop run code.
  why: Dispatch accepted an ordinary signed-in session and let a script send
    prompts and click Allow, so no browser exploit was needed.
  action: Before enabling Dispatch, know how to disconnect or revoke access, as
    the Dispatch help page says, though it does not explain how.
sources:
  - title: "Cyber Security News: Claude Dispatch Flaw Lets Malicious Browser
      Extensions Run Code on Connected Computers"
    url: https://cybersecuritynews.com/claude-dispatch-vulnerability/
  - title: "The Hacker News: Malicious Browser Extensions Could Use Claude Dispatch
      to Run Code on Users' Computers"
    url: https://thehackernews.com/2026/11/malicious-browser-extensions-could-use.html
---

According to The Hacker News, a browser extension that can run scripts on claude.ai could make Claude Desktop run code on a person's computer, as researchers at Forever Security showed in a test. The attack requires Dispatch, a Claude feature that lets people send tasks from their phone to Claude Desktop. According to Cyber Security News, Gal Weizman of Forever Security named the technique ThisBash and published the findings on November 4, 2026.

## What is affected

The Dispatch help page says the feature is closed to new users and that existing users on some Pro, Max, and Ultra plans can keep using it for now. Dispatch only works while the computer is awake and the desktop app is open. Claude Desktop is an Electron app built from the same web interface and API (application programming interface) as claude.ai.

## Why it matters

Dispatch accepted an ordinary signed-in session on claude.ai even though the site showed no link to it. In the proof of concept, a script opened Dispatch in a tiny 200 by 200 pixel background window and asked the API for the session ID of the user's desktop agent. Four written prompts were enough, and a short loop clicked any "Allow" button once per second so no human had to approve anything. In the test, Claude ran a global npm (Node.js package manager) install, and the package's install script opened the Calculator app, with no browser exploit needed.

Because Dispatch connects devices, the extension could also reach Claude Desktop on a different computer signed in to the same Claude account, a case the researchers described but did not show. The researchers said Claude Code Remote Control and Claude Cowork sessions let extensions carry out the same attack, but their write-up does not include a test of those features and they plan a follow-up post. The test ran with the browser and Claude Desktop on the same computer, and the researchers report no real attacks.

## What to do

The cited reports do not name a fixed version; Anthropic told the researchers on October 13, 2026 that Dispatch would be retired, with the end of October as the target. Before enabling Dispatch, know how to disconnect or revoke access, as the Dispatch help page says, though it does not explain how.

<!-- cspell:words Weizman Cowork -->
