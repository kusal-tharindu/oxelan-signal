---
title: mSecure tells customers to change passwords after suspicious activity
date: 2026-11-06T17:59:36.902Z
format: news
summary: mSeven Software notified mSecure customers on November 3 of suspicious
  activity and recommended changing passwords, resetting two-factor
  authentication, or removing passkeys.
description: mSeven Software told mSecure users on November 3 to change
  passwords, reset two-factor authentication, or remove passkeys.
tags:
  - authentication
impact: high
action: patch-now
status: current
affects:
  - mSecure Cloud sync users
briefing:
  changed: mSeven Software notified mSecure customers on November 3 that it had
    learned of suspicious activity and had mitigated the issue with outside
    security experts.
  why: "The notification covers users who sync with mSecure Cloud, and the
    vendor's response is credential rotation: changing passwords, resetting
    two-factor authentication, and removing passkeys."
  action: Change the passwords stored in mSecure, reset or re-enroll two-factor
    authentication, and remove existing passkeys.
sources:
  - title: "BleepingComputer: mSecure password manager hack prompts password reset
      warnings"
    url: https://www.bleepingcomputer.com/news/security/msecure-password-manager-hack-prompts-password-reset-warnings/
  - title: Important Security Notice Nov 3, 2026
    url: https://support.msecure.com/en/support/discussions/topics/36000038999
  - title: mSecure tells users to change passwords but won’t say why [updated]
    url: https://www.malwarebytes.com/blog/data-breaches/2026/11/msecure-tells-users-to-change-passwords-but-wont-say-why
---

## What happened

According to BleepingComputer, mSeven Software sent a security notification to mSecure customers on November 3, saying it had recently learned of suspicious activity associated with the mSecure password management application. The notification says the company launched an investigation, took steps to mitigate the issue, and engaged external cybersecurity experts to assist. The notification was shared with BleepingComputer.

## Why it matters

The report describes mSecure as using AES-256 encryption and a zero-knowledge architecture that encrypts data locally on users' devices. It also points to the 2022 LastPass breach, when attackers stole backups containing encrypted password vaults. Per the report, the mSecure issue only pertains to users who were syncing with mSecure Cloud, and the notification does not describe other configurations as affected.

## What to do

mSeven recommended that customers change passwords, reset or re-enroll two-factor authentication, or remove existing passkeys. The cited sources describe credential rotation rather than a software update, and no fixed version is listed.
