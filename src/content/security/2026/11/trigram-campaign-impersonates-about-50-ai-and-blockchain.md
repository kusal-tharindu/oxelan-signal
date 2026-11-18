---
title: Trigram campaign impersonates about 50 AI and blockchain brands to target
  developers
date: 2026-11-18T02:47:27.908Z
format: news
summary: According to The Hacker News, the Trigram campaign impersonates about
  50 brands in the blockchain and AI sectors and funnels several delivery paths
  into a single infostealer payload.
description: Stormshield's technical report on Trigram describes recruitment,
  conference and package-tracking lures that end in an infostealer.
tags:
  - supply-chain
  - malware
  - phishing
impact: high
action: review
status: current
affects:
  - antd-img-crop GitHub repository
  - Microsoft Visual Studio Code
  - Cursor
briefing:
  changed: According to The Hacker News, the Trigram campaign impersonates about
    50 brands in the blockchain and AI sectors and converges on one payload;
    Stormshield published a deep-dive technical report on it.
  why: The attack chains end in an infostealer that takes browser passwords,
    cookies, keychains, cryptocurrency wallets, SSH keys and .env files on
    macOS, Linux and Windows.
  action: The cited sources publish no fixed version or patch; the technical
    report maps approximately 200 IOCs that teams can use to check their own
    infrastructure.
sources:
  - title: Discover of the Trigram Campaign, IA, Blockchain & Logistic
    url: https://www.stormshield.com/news/cti-trigram-campaign/
  - title: "The Hacker News: Trigram Campaign Impersonates About 50 AI and
      Blockchain Brands to Target Devs with Infostealers"
    url: https://thehackernews.com/2026/11/trigram-campaign-impersonates-about-50.html
---

According to The Hacker News, Trigram is a large-scale campaign that impersonates about 50 brands in the blockchain and artificial intelligence (AI) sectors to trick developers into executing an infostealer themselves. The outlet reports that Stormshield published a deep-dive technical report on the campaign.

## What is affected

The Hacker News reports that three social engineering scenarios (recruitment, conference, and package tracking), a software supply-chain compromise, and trojanized code repositories converge on the same infrastructure and the same payload. Entry points include a fake careers portal impersonating Amber Group, a legitimate cryptocurrency firm, and a sideloaded Microsoft Visual Studio Code (VS Code) or Cursor extension named google-dev-tools.google-update-support. The initial access uses a fake recruitment campaign targeting developers and the ClickFix technique.

On Linux and macOS systems, the attack chains lead to deployment of the Overlord open-source remote access trojan (RAT) framework. Overlord was also distributed in late October 2026 via a forged commit in the antd-img-crop GitHub repository that installs the malware through a prebuild hook. A malicious commit pushed on October 31, 2026 added a script executed at build time that downloaded verify_m or verify_w.

## Why it matters

According to The Hacker News, the malware steals browser passwords, cookies, keychains, cryptocurrency wallets, Secure Shell (SSH) keys and .env files on macOS, Linux and Windows, then installs a remote-access agent disguised as Google software. The reporting also says the activity is assessed to share similarities with intrusion sets linked to North Korea, particularly Kimsuky and UNK_DeadDrop. On macOS and Linux, the malware displays a fake dialog asking users to enter their system password to apply system updates and verify drivers and security settings.

## What to do

The cited sources publish no fixed version or patch for this campaign; the technical report maps the infrastructure instead. That map covers approximately 200 indicators of compromise (IOCs), including URLs, IP addresses, domain names, certificates, and email addresses. On Windows, the chain launches PowerShell to download and run a file named v.cmd; on Linux it launches bash to download and run a file named u, and on macOS bash to download and run a file named verify_m.

<!-- cspell:words Stormshield's Stormshield trojanized sideloaded prebuild Kimsuky -->
