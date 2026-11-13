---
title: Node.js patches HTTP/2 crash and HTTPS memory-disclosure flaws
date: 2026-11-12T09:43:19.940Z
format: news
summary: Node.js released security updates for its 26.x, 24.x and 22.x lines,
  fixing an HTTP/2 assertion that aborts the server and an HTTPS flaw that
  exposes other connections' memory.
description: Node.js 26.x, 24.x and 22.x updates fix an HTTP/2 assertion that
  aborts the server and an HTTPS flaw that exposes other connections' memory.
tags:
  - cve
  - security-updates
impact: high
action: review
status: current
affects:
  - Node.js 24.x before 24.22.3 (CVE-2026-123863)
  - Node.js 25.x/26.x before 26.13.1 (CVE-2026-123863)
  - Node.js 22.x before 22.23.5 (CVE-2026-123864)
  - Node.js 23.x/24.x before 24.22.3 (CVE-2026-123864)
  - Node.js 25.x/26.x before 26.13.1 (CVE-2026-123864)
briefing:
  changed: Node.js published security updates for the 26.x, 24.x and 22.x release
    lines, including CVE-2026-123863 and CVE-2026-123864.
  why: CVE-2026-123863 lets an unauthenticated client abort the server over TLS
    and cleartext, and CVE-2026-123864 lets an unauthenticated client read
    memory belonging to other connections, including TLS private keys and other
    users' requests.
  action: Upgrade to Node.js 24.22.3 or 26.13.1, which fix both flaws; the
    advisory lists no workaround.
sources:
  - title: "NVD: CVE-2026-123863"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-123863
  - title: "NVD: CVE-2026-123864"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-123864
  - title: Node.js — Wednesday, November 11, 2026 Security Releases
    url: https://nodejs.org/en/blog/vulnerability/november-2026-security-releases
  - title: "The Hacker News: Node.js Fixes 16 Flaws, Including HTTP/2 Bugs That
      Crash Servers and Leak Other Connections' Data"
    url: https://thehackernews.com/2026/11/nodejs-fixes-16-flaws-including-http2.html
---

Node.js released security updates for the 26.x, 24.x and 22.x release lines. The release includes CVE-2026-123863, a reachable assertion in HTTP/2 session teardown, and CVE-2026-123864, a re-entrancy flaw in Node.js HTTPS; both records were published on 2026-11-11.

## What is affected

CVE-2026-123863 affects Node.js 24.x before 24.22.3 and 25.x/26.x before 26.13.1. It is a variant of CVE-2024-27983 that the earlier fix did not cover. The record is classified as CWE (Common Weakness Enumeration) 617, Reachable Assertion, with a CVSS (Common Vulnerability Scoring System) 3.0 base score of 8.2, rated high.

CVE-2026-123864 affects Node.js 22.x before 22.23.5, 23.x/24.x before 24.22.3, and 25.x/26.x before 26.13.1. Cleartext node:http is not affected. It is classified as CWE-416, Use After Free, with a CVSS 3.0 base score of 8.1, rated high.

## Why it matters

An unauthenticated client can abort the server through CVE-2026-123863, over both TLS (Transport Layer Security) and cleartext. Through CVE-2026-123864, an unauthenticated client can read memory belonging to other connections, including TLS private keys and other users' requests. According to The Hacker News, the advisory does not report any attacks using the flaws.

## What to do

According to The Hacker News, CVE-2026-123863 is fixed in Node.js 24.22.3 and 26.13.1, and CVE-2026-123864 is fixed in 22.23.5, 24.22.3 and 26.13.1. The 24.22.3 and 26.13.1 releases cover both flaws; the report gives 22.23.5 as the fix for CVE-2026-123864 on the 22.x line. The report says the project's security advisory lists no workaround and that updating to the fixed version for each line is the only fix.

The report says the release fixes 16 vulnerabilities in Node.js itself, seven of them rated high. It adds that end-of-life lines including 20.x and 25.x get no fix in this release, and that the project says such versions are always affected. CVE-2026-123863 and CVE-2026-123864 were reported by Chris Rohlf in collaboration with Claude and Anthropic Research, the report says.

<!-- cspell:words entrancy Rohlf -->
