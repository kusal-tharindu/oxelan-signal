---
title: Binance warns of iOS sandbox escape that can expose wallet keys
date: 2026-11-10T13:43:33.061Z
format: news
summary: Binance warned that a published iOS sandbox escape, worse_query, can
  expose seed phrases, private keys, and login credentials, and Apple's listed
  updates do not name a fix.
description: Binance warned that the worse_query iOS sandbox escape can expose
  wallet seed phrases and keys; Apple's listed updates do not name a fix.
tags:
  - authentication
  - malware
impact: high
action: review
status: current
affects:
  - iPhones running iOS 26 and iOS 27
  - iOS 26.7.1, iOS 27.0.1, and iOS 27.2 (versions listed as tested)
briefing:
  changed: A publicly released iOS sandbox escape, worse_query, lets an app read
    other apps' files on iPhones running iOS 26 and 27.
  why: Binance warned the escape puts seed phrases, private keys, and login
    credentials at risk of exposure to malicious apps.
  action: Binance told users to delete apps installed from untrusted sources and
    update iOS and all apps, and to move funds to a new wallet on a clean device
    and reset login sessions if a breach is suspected.
sources:
  - title: "The Hacker News: Binance Warns of iOS Sandbox Escape That Could Expose
      Crypto Wallet Keys, No Fix Confirmed"
    url: https://thehackernews.com/2026/11/binance-warns-of-ios-sandbox-escape.html
---

According to The Hacker News, an iOS sandbox escape published on GitHub lets an app read other apps' files on iPhones running iOS 26 and 27. The report says the escape is called worse_query. Binance warned that it puts seed phrases, private keys, and login credentials at risk of exposure to malicious apps. Neither the exchange nor the researcher reported any attacks or thefts involving worse_query.

## What is affected

The researcher's proof-of-concept code can reach every app's data container on an iPhone, and some system folders on iOS 27. The versions listed as tested in the WQ Files release notes are iOS 26.7.1, iOS 27.0.1, and iOS 27.2. The exchange did not name any wallet app as exposed, and neither did the researcher nor the developers of the apps built on worse_query.

Apple's updates for iOS 26 and 27 do not list a fix for worse_query. The security notes for iOS 27.2.1 do not mention worse_query or any sandbox issues, nor do the iOS 26.7.3 notes. Those updates, iOS 27.2.1 and iOS 26.7.3, fixed two iMessage flaws and several Bluetooth bugs.

## Why it matters

The warning is about exposure of wallet secrets, not a confirmed theft campaign. A sandbox escape matters because it crosses the boundary that normally keeps one app from reading another app's data. For anyone holding keys on an iPhone, the risk is that a malicious app could read the data the escape reaches.

## What to do

Binance told users to delete apps installed from untrusted sources, such as sideloaded or manually signed apps, and to update iOS and all their apps. For anyone who suspects a breach, the exchange's security warning advises moving funds to a new wallet created on a clean device and resetting all active login sessions.

<!-- cspell:words sideloaded -->
