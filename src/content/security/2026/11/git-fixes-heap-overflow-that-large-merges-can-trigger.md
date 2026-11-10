---
title: Git fixes heap overflow that large merges can trigger
date: 2026-11-10T19:43:17.497Z
format: news
summary: Git has fixed CVE-2026-105437, a heap-based buffer overflow that a
  large merge can trigger, with fixed releases for every affected branch.
description: CVE-2026-105437 is a high-severity Git heap overflow. Fixed
  releases exist for each affected branch.
tags:
  - cve
  - supply-chain
impact: high
action: review
status: current
affects:
  - Git before 2.49.1
  - Git 2.50.x before 2.50.2
  - Git 2.51.x before 2.51.3
  - Git 2.52.x before 2.52.1
  - Git 2.53.x before 2.53.1
  - Git 2.54.x before 2.54.1
  - Git 2.55.x before 2.55.1
  - Git 2.56.x before 2.56.1
briefing:
  changed: Git has fixed CVE-2026-105437, a heap-based buffer overflow that a
    large merge can trigger.
  why: The flaw is rated CVSS 7.5 HIGH and can corrupt heap memory when a merge
    has many conflicts and a large conflict-marker-size attribute.
  action: "Install a fixed release for your branch: 2.49.1, 2.50.2, 2.51.3,
    2.52.1, 2.53.1, 2.54.1, 2.55.1 or 2.56.1. Servers that cannot upgrade can
    use the reported conflict-marker-size=7 workaround."
sources:
  - title: "NVD: CVE-2026-105437"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-105437
  - title: "The Hacker News: Git Patches Flaw That Lets Malicious Repositories
      Execute Code During Recursive Clones"
    url: https://thehackernews.com/2026/11/git-patches-flaw-that-lets-malicious.html
---

Git has fixed CVE-2026-105437, a heap-based buffer overflow that a large merge can trigger, with fixed releases for each affected branch. Git versions before 2.49.1 are affected, as are 2.50.x before 2.50.2, 2.51.x before 2.51.3, 2.52.x before 2.52.1, 2.53.x before 2.53.1, 2.54.x before 2.54.1, 2.55.x before 2.55.1 and 2.56.x before 2.56.1.

## Why it matters

CVE-2026-105437 is classified as CWE-122, a heap-based buffer overflow. Its CVSS 3.1 base score is 7.5, HIGH. According to The Hacker News, a very large merge with many conflicts and a large conflict-marker-size attribute can make Git write past the end of a buffer that is too small, corrupting heap memory. The report says GitLab, which assigned CVE-2026-105437, said code-hosting servers are most likely to be targeted through git merge-tree.

## What to do

Install a fixed version for your branch: 2.49.1, 2.50.2, 2.51.3, 2.52.1, 2.53.1, 2.54.1, 2.55.1 or 2.56.1. The report says GitHub advises installing a fixed version from your operating system or Git distributor and updating any app that ships its own copy of Git. The report says servers that cannot upgrade can add conflict-marker-size=7 to each repository's info/attributes file, or turn off those merge checks for untrusted repositories.
