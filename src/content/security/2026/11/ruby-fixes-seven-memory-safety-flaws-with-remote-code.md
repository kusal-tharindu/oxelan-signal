---
title: Ruby fixes seven memory-safety flaws, with remote code execution
  proof-of-concepts for some
date: 2026-11-19T09:43:03.985Z
format: news
summary: Ruby released 4.0.10, 3.4.13 and 3.3.14 to fix seven memory-safety
  flaws in its regular expression engine and string case-conversion code; some
  flaws have remote code execution proof-of-concepts.
description: Ruby 4.0.10, 3.4.13 and 3.3.14 fix seven memory-safety flaws; some
  have remote code execution proof-of-concepts.
tags:
  - cve
  - security-updates
  - supply-chain
impact: critical
action: review
status: current
affects:
  - Ruby 4.0.0 through 4.0.9
  - Ruby 3.4.0 through 3.4.12
  - Ruby 3.3.13 and earlier
  - Ruby 3.2 and earlier (end of life, no fixes)
briefing:
  changed: Ruby released versions 4.0.10, 3.4.13 and 3.3.14 to fix seven
    memory-safety flaws in its regular expression engine and string
    case-conversion code.
  why: Some flaws have proof-of-concepts that can trigger remote code execution,
    and the advisories rate three critical, three high and one moderate.
  action: Update the Ruby runtime on servers, workers and container images to
    4.0.10, 3.4.13 or 3.3.14 as appropriate; updating gems or a framework does
    not replace the interpreter.
sources:
  - title: "The Hacker News: Ruby Releases Fixes for 7 Regex and String Flaws, Warns
      5 Have Proof-of-Concept RCE"
    url: https://thehackernews.com/2026/11/ruby-releases-fixes-for-7-regex-and.html
---

According to The Hacker News, Ruby released versions 4.0.10, 3.4.13 and 3.3.14 to fix seven memory-safety flaws in its regular expression engine and string case-conversion code. The seven flaws had no CVE (Common Vulnerabilities and Exposures) numbers assigned at publication and are tracked by GitHub Security Advisory (GHSA) IDs. The maintainers said they are aware of proof-of-concepts (PoCs) proving some of the flaws can trigger remote code execution, while the report says the advisories record no attacks so far.

## What is affected

The affected range is Ruby 4.0.0 through 4.0.9, fixed in 4.0.10. The affected range is Ruby 3.4.0 through 3.4.12, fixed in 3.4.13. The report lists Ruby 3.3.13 and earlier as the affected range, fixed in 3.3.14, and Ruby 3.2 and earlier as end of life with no fixes.

## Why it matters

The advisories rate three flaws critical, three high and one moderate. Because the fixes ship inside Ruby, updating an application's gems or framework does not replace a vulnerable interpreter.

## What to do

Update the Ruby runtime on servers, workers and container images to the fixed release for each listed range: 4.0.10 for 4.0.0 through 4.0.9, 3.4.13 for 3.4.0 through 3.4.12, and 3.3.14 for the range given as 3.3.13 and earlier. Ruby 3.2 and earlier are end of life and will not receive fixes.
