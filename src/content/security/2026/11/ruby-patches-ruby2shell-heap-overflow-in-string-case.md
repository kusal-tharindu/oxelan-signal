---
title: Ruby patches Ruby2Shell heap overflow in string case conversion
date: 2026-11-20T13:57:09.777Z
format: news
summary: Ruby released fixes for a heap-based buffer overflow in string case
  conversion that carries a CVSS score of 7.4 and could potentially lead to
  remote code execution.
description: CVE-2026-132825 is a heap-based buffer overflow in Ruby's string
  case conversion, rated 7.4 high. Fixed in Ruby 4.0.10, 3.4.13, and 3.3.14.
tags:
  - cve
  - security-updates
impact: high
action: review
status: current
affects:
  - Ruby before 3.3.14
  - Ruby >= 3.4.0, < 3.4.13
  - Ruby >= 4.0.0, < 4.0.10
  - GitHub Enterprise Server
briefing:
  changed: Ruby has published fixes for CVE-2026-132825, a heap-based buffer
    overflow in case conversion of strings, affecting Ruby before 3.3.14,
    versions from 3.4.0 before 3.4.13, and versions from 4.0.0 before 4.0.10.
  why: The flaw carries a CVSS base score of 7.4 and, according to SecurityWeek,
    could potentially lead to remote code execution in certain scenarios.
  action: Upgrade to Ruby 4.0.10, 3.4.13, or 3.3.14, which carry the patches.
sources:
  - title: "NVD: CVE-2026-132825"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-132825
  - title: "SecurityWeek: Ruby Patches Ruby2Shell Vulnerability That Could Lead to
      RCE"
    url: https://www.securityweek.com/ruby-patches-ruby2shell-vulnerability-that-could-lead-to-rce/
---

Ruby has released fixes for CVE-2026-132825, a heap-based buffer overflow in the language's case conversion of strings. The vulnerability record classifies the flaw as CWE-122, the Common Weakness Enumeration entry for a heap-based buffer overflow, and gives it a CVSS (Common Vulnerability Scoring System) base score of 7.4, rated high.

## What is affected

The affected ranges are Ruby before 3.3.14, Ruby from 3.4.0 before 3.4.13, and Ruby from 4.0.0 before 4.0.10. The record was published on November 19, 2026.

According to SecurityWeek, the flaw is dubbed Ruby2Shell and is described as a heap-based buffer overflow in the case conversion of strings that could potentially lead to RCE (remote code execution) in certain scenarios. The report says that in some single-byte encodings, including ISO-8859-1 and Windows-1252, Ruby may write one byte past the output buffer when changing the case of a string.

## Why it matters

The report states that GitHub Enterprise Server is affected. It also lists Chatwoot, GitLab, Mastodon, OpenProject, and the Discourse base image as projects that have patched the bug.

## What to do

According to SecurityWeek, patches for the seven vulnerabilities were included in Ruby versions 4.0.10, 3.4.13, or 3.3.14. Installations in the affected ranges should move to the fixed release for their line.

<!-- cspell:words Chatwoot -->
