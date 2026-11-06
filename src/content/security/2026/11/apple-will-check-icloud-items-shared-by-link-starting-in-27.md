---
title: Apple will check iCloud items shared by link starting in 27.3
date: 2026-11-06T16:38:37.729Z
format: news
summary: Apple says items shared with Anyone with the Link will be checked for
  harmful content starting in iOS, iPadOS, macOS, and visionOS 27.3, and link
  sharing disables end-to-end encryption.
description: Apple will scan iCloud items shared by link for harmful content
  from version 27.3; link sharing is not end-to-end encrypted.
tags:
  - ai-governance
impact: info
action: review
status: current
affects:
  - iOS 27.3 and later
  - iPadOS 27.3 and later
  - macOS 27.3 and later
  - visionOS 27.3 and later
briefing:
  changed: Apple will check items shared using Anyone with the Link for harmful
    content starting in version 27.3 or later of iOS, iPadOS, macOS, and
    visionOS.
  why: Link-shared items are accessible to anyone with the link, including Apple,
    and are not end-to-end encrypted even with Advanced Data Protection enabled.
  action: Review link-shared items against the loss of end-to-end encryption and
    treat Apple's content-removal and account-action terms as part of the risk
    assessment.
sources:
  - title: Learn more about sharing content that can be accessed by Anyone with the
      Link - Apple Support
    url: https://support.apple.com/en-us/149168
  - title: "The Hacker News: Apple to Start Scanning Publicly Shared iCloud Photos
      and Files for Harmful Content"
    url: https://thehackernews.com/2026/11/apple-to-start-scanning-publicly-shared.html
---

Apple will check items shared using Anyone with the Link for harmful content starting in version 27.3 or later of iOS, iPadOS, macOS, and visionOS. According to The Hacker News, the 27.3 updates are expected to be officially rolled out later this December. Apple's support document describing the change was published on November 3, 2026.

## What is affected

Anyone with the Link makes an item accessible to anyone who has the link, including Apple. Sharing that way also removes end-to-end encryption, even when the owner or participants have enabled Advanced Data Protection.

## Why it matters

Apple reserves the right to move, refuse, modify, remove, or delete harmful content uploaded through shared links at any time. It may also block or disable an Apple Account, block creation of a new Apple Account with the associated email address or phone number, or involve law enforcement. Those terms make the sharing mode an account-risk decision, not only a visibility setting.

## What to do

Review link-shared items against the loss of end-to-end encryption described in the support document. Treat Apple's content-removal and account-action terms as part of the risk assessment for shared items. The cited sources do not describe a fixed version for a vulnerability; they give a start version of 27.3 and a publication date of November 3, 2026.
