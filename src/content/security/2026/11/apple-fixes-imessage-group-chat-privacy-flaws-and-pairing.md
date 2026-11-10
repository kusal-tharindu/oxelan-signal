---
title: Apple fixes iMessage group chat privacy flaws and pairing bugs
date: 2026-11-10T11:48:16.328Z
format: news
summary: Apple's November 9, 2026 security updates fix iMessage group chat flaws
  that could expose earlier messages or let an attacker join a group, plus
  Bluetooth and AirPlay pairing issues.
description: Apple's November 9, 2026 updates fix iMessage group chat flaws and
  Bluetooth and AirPlay pairing issues.
tags:
  - cve
  - authentication
impact: high
action: review
status: current
affects:
  - iOS and iPadOS
  - macOS Golden Gate, macOS Sequoia, and macOS Tahoe
  - visionOS
  - watchOS
briefing:
  changed: Apple released security updates on November 9, 2026 that address
    iMessage group chat flaws, Bluetooth pairing issues, and an AirPlay pairing
    issue.
  why: One iMessage flaw could let a user added to a group read messages sent
    before they joined, and another could let a remote attacker join a group and
    receive its messages.
  action: Install iOS 26.7.3 and iPadOS 26.7.3, iOS 27.2.1 and iPadOS 27.2.1,
    macOS Golden Gate 27.2.1, macOS Sequoia 15.8.3, macOS Tahoe 26.7.3, visionOS
    27.2.1, and watchOS 27.2.1.
sources:
  - title: "NVD: CVE-2026-113960"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-113960
  - title: "NVD: CVE-2026-113961"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-113961
  - title: About the security content of iOS 27.2.1 and iPadOS 27.2.1 - Apple Support
    url: https://support.apple.com/en-us/149715
  - title: About the security content of iOS 26.7.3 and iPadOS 26.7.3 - Apple Support
    url: https://support.apple.com/en-us/149716
  - title: About the security content of macOS Golden Gate 27.2.1 - Apple Support
    url: https://support.apple.com/en-us/149718
  - title: About the security content of watchOS 27.2.1 - Apple Support
    url: https://support.apple.com/en-us/149722
  - title: "The Hacker News: Apple Patches iMessage Group Chat Privacy Flaws and
      Bluetooth Pairing Vulnerabilities"
    url: https://thehackernews.com/2026/11/apple-patches-imessage-group-chat.html
---

Apple released security updates on November 9, 2026 that address iMessage group chat flaws and pairing issues in Bluetooth and AirPlay.

CVE-2026-113960 is an iMessage flaw where a user added to a group may be able to access messages sent before they joined. Apple says it addressed the issue by removing the vulnerable code. CVE-2026-113961 is an authorization issue that could let a remote attacker join an iMessage group chat and receive its messages; it was addressed with improved validation and carries a CVSS (Common Vulnerability Scoring System) v3.1 base score of 7.5, rated HIGH. CVE-2026-113963 is an authorization issue where an app may be able to access sensitive user data.

## Fixed versions

CVE-2026-113960 is fixed in iOS 26.7.3 and iPadOS 26.7.3, iOS 27.2.1 and iPadOS 27.2.1, macOS Golden Gate 27.2.1, macOS Sequoia 15.8.3, macOS Tahoe 26.7.3, visionOS 27.2.1, and watchOS 27.2.1. CVE-2026-113961 is fixed in the same releases.

## Bluetooth and AirPlay pairing

The pairing entries describe attacks from Bluetooth range or the same network. CVE-2026-113968 is a logic issue where an attacker in Bluetooth range may be able to bypass the rate limit on pairing code attempts, and CVE-2026-113970 is a use-after-free issue, where memory is reused after it is freed, in which an attacker in range may be able to corrupt process memory. CVE-2026-113965 covers a malicious Bluetooth device that may be able to establish a pairing without user interaction, and CVE-2026-113964 is a logic issue where an attacker in Bluetooth range may be able to bypass the rate limit on pairing code attempts and pair with a device without user interaction. CVE-2026-113969 is a logic issue where an attacker on the same network may be able to bypass the rate limit on AirPlay pairing code attempts.

## Why it matters

Both iMessage issues concern who can read a group conversation. According to The Hacker News, Apple's notes do not say whether either flaw has been exploited, what an attacker would need, whether group members would see someone who joined this way, or whether every member must update to be protected.

## What to do

Install the fixed releases listed above. For the Bluetooth and AirPlay entries, follow Apple's advisory; the report notes that Apple's notes do not say whether every group member must update to be protected.
