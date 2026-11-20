---
title: FastUnlock bypasses the Windows lock screen with physical access
date: 2026-11-20T05:58:04.902Z
format: news
summary: A researcher published FastUnlock, an unpatched Windows lock-screen
  bypass that needs physical access and a Microsoft account reachable from
  recovery options.
description: FastUnlock is an unpatched Windows lock-screen bypass requiring
  physical access. No fix or affected-version list has been published.
tags:
  - authentication
  - security-updates
impact: high
action: review
status: current
affects:
  - Windows
briefing:
  changed: A researcher published FastUnlock, an unpatched Windows lock-screen
    bypass that uses Narrator and recovery options to start programs without
    signing in.
  why: Someone with physical access to a locked Windows computer and a Microsoft
    account reachable from the lock screen can reach a limited account that is
    not an administrator.
  action: There is no Microsoft fix yet; Microsoft's countermeasures guidance
    recommends a startup PIN and shutting down or hibernating machines against
    hands-on attackers.
sources:
  - title: "The Hacker News: New Unpatched Windows 0-Day FastUnlock Lets Someone
      Holding a Locked PC Run Programs on It"
    url: https://thehackernews.com/2026/11/new-unpatched-windows-0-day-fastunlock.html
---

According to The Hacker News, a researcher published an unpatched Windows lock-screen bypass technique called FastUnlock that lets someone with physical access to a locked computer start programs without signing in. The report says FastUnlock requires physical access and a Microsoft account accessible through the lock screen's recovery options. It uses Windows' built-in screen reader, Narrator, to navigate the locked screen. The researcher's GitHub disclosure is a short post with a video and little written detail.

## What is affected

No official list of affected Windows versions has been published. The report says ThreatLocker tested FastUnlock the same day it was posted and found it works. In that test, the technique reached a limited account identified as WSIAccount that is not an administrator account.

## Why it matters

FastUnlock does not break BitLocker encryption or recover the key; it runs on a machine whose drive has already unlocked normally. Nothing shows the method has been used in a real attack.

## What to do

There is no fix from Microsoft yet. Microsoft's countermeasures guidance recommends using a startup PIN and shutting down or hibernating machines against hands-on attackers.
