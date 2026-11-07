---
title: GhostMap Android flaw can trap a phone in a crash loop without the app
  being opened
date: 2026-11-07T03:27:43.003Z
format: news
summary: According to BleepingComputer, a specially crafted Android app can put
  a phone into a continuous crash loop without being opened or granted
  permissions.
description: A crafted Android app can put a phone into a continuous crash loop
  without being opened or granted permissions, per BleepingComputer.
tags:
  - cve
  - malware
action: review
status: current
affects:
  - Android devices
briefing:
  changed: According to BleepingComputer, a specially crafted Android app can
    force a device into a continuous crash loop, and it needs no permissions and
    does not have to be opened.
  why: A phone stuck in a crash loop is out of use, and according to Cyber
    Security News, Bitdefender has not observed the technique used against real
    users in the wild.
  action: The cited sources give no fixed build or workaround; upgrade when a
    fixed version is published and follow the vendor advisory.
sources:
  - title: "Cyber Security News: GhostMap Android Flaw Can Trap Phones in Endless
      Reboot Loops Without Opening an App"
    url: https://cybersecuritynews.com/ghostmap-android-vulnerability/
  - title: "BleepingComputer: GhostMap Android flaw lets malicious app trigger
      persistent boot loop"
    url: https://www.bleepingcomputer.com/news/security/ghostmap-android-flaw-lets-malicious-app-trigger-persistent-boot-loop/
---

GhostMap is an Android vulnerability that puts a device into a persistent crash loop, and according to BleepingComputer the specially crafted app behind it needs no permissions and does not have to be opened: installing it is enough. According to Cyber Security News, researchers at Bitdefender Labs published the findings on November 5, 2026.

## What is affected

The cited sources describe the affected scope only as Android devices, with no named OS version, patch level, or device model. That leaves the size of the affected population unresolved in the material available here.

## Why it matters

The result described is a device that keeps crashing rather than a single failed app launch. According to Cyber Security News, Bitdefender has not observed the technique used against real users in the wild.

## What to do

The cited sources give no fixed Android build, patch level, or configuration workaround for GhostMap. Upgrade to a fixed version if the vendor publishes one, and follow the vendor advisory for your device in the meantime.

<!-- cspell:words Bitdefender -->
