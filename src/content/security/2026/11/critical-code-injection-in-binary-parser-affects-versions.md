---
title: Critical code injection in binary-parser affects versions before 2.3.1
date: 2026-11-23T14:52:10.116Z
format: news
summary: CVE-2026-134814 lets an attacker who controls parser definitions inject
  JavaScript through unvalidated string options, and versions before 2.3.1 are
  affected.
description: Code injection in the binary-parser npm package records a CVSS 4.0
  score of 9.2; versions before 2.3.1 are listed as affected.
tags:
  - cve
  - npm
impact: critical
action: review
status: current
affects:
  - binary-parser < 2.3.1
briefing:
  changed: CVE-2026-134814 is a code injection vulnerability in binary-parser,
    disclosed in a binary-parser security advisory on November 22, 2026.
  why: An attacker who controls parser definitions can inject JavaScript through
    string-typed options that Context.generateOption() passes without
    validation.
  action: According to The Hacker News, users are advised to update to the latest
    version of the library; the cited sources do not name the release that fixes
    the flaw.
sources:
  - title: "NVD: CVE-2026-134814"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-134814
  - title: "The Hacker News: Critical binary-parser Flaw Enables JavaScript
      Injection via Malicious Parser Definitions"
    url: https://thehackernews.com/2026/11/critical-binary-parser-flaw-enables.html
---

`binary-parser`, an npm package, contains a code injection vulnerability tracked as CVE-2026-134814. The flaw was disclosed in a binary-parser security advisory on November 22, 2026.

## What is affected

The advisory lists versions of the package before 2.3.1 as affected. The record carries a CVSS (Common Vulnerability Scoring System) 4.0 base score of 9.2, rated critical, and a CVSS 3.1 base score of 8.1, rated high.

## How the injection works

The advisory describes an attacker who controls parser definitions injecting JavaScript through string-typed options that `Context.generateOption()` passes without validation. The weakness is recorded as CWE-94 (Common Weakness Enumeration: code injection).

## Why it matters

The condition that matters is control of the parser definition, which the advisory names as the route to the injection. According to The Hacker News, CVE-2026-134814 can also be viewed as an incomplete fix for CVE-2026-1245, another code injection vulnerability that was fixed in January 2026 and carries a CVSS score of 6.5.

## What to do

According to The Hacker News, users are advised to update to the latest version of the library for optimal protection. That advice carries no version number: the cited sources list versions before 2.3.1 as affected but do not name the release that fixes the flaw.

<!-- cspell:words unvalidated -->
