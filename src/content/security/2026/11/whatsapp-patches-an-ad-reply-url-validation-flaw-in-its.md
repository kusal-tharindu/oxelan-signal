---
title: WhatsApp patches an ad-reply URL validation flaw in its Android apps
date: 2026-11-20T21:38:51.699Z
format: news
summary: WhatsApp fixed CVE-2026-23871, an incomplete validation of external
  ad-reply URLs in WhatsApp and WhatsApp Business for Android, in version
  2.26.17.4.
description: CVE-2026-23871 is a low-severity server-side request forgery flaw
  in WhatsApp's Android apps, fixed in 2.26.17.4.
tags:
  - cve
  - security-updates
impact: low
action: review
status: current
affects:
  - WhatsApp for Android < 2.26.17.4
  - WhatsApp Business for Android < 2.26.17.4
briefing:
  changed: WhatsApp released version 2.26.17.4, which fixes CVE-2026-23871, an
    incomplete validation of external ad-reply URLs in WhatsApp for Android and
    WhatsApp Business for Android.
  why: The CVE record classifies the flaw as CWE-918 (server-side request forgery)
    with a CVSS v3.1 base score of 3.5, and states that it may have been abused
    in conjunction with specific spam messages.
  action: Update WhatsApp for Android and WhatsApp Business for Android to 2.26.17.4.
sources:
  - title: "NVD: CVE-2026-23871"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-23871
  - title: "The Hacker News: WhatsApp Patches 3 Security Flaws, Including Android
      Bug Suspected of Use in Scams"
    url: https://thehackernews.com/2026/11/whatsapp-patches-3-security-flaws.html
  - title: "SecurityWeek: WhatsApp Fixes Flaw Uncovered While Disrupting Scam
      Campaign"
    url: https://www.securityweek.com/whatsapp-fixes-flaw-uncovered-while-disrupting-scam-campaign/
---

## What changed

WhatsApp released version 2.26.17.4 for WhatsApp for Android and WhatsApp Business for Android, fixing CVE-2026-23871 (a CVE is a public identifier for a specific vulnerability), which involves incomplete validation of external ad-reply URLs. Both apps are affected in versions before 2.26.17.4.

According to SecurityWeek, WhatsApp has patched a low-impact vulnerability in its Android apps that it believes a scammer may have exploited to make scam messages seem more credible. The report ties the issue to Click to WhatsApp ads and says it affects both WhatsApp and WhatsApp Business for Android.

The CVE record classifies CVE-2026-23871 as CWE-918, server-side request forgery, a flaw class in which a server is induced to fetch a URL chosen by someone else, and gives it a CVSS (Common Vulnerability Scoring System) v3.1 base score of 3.5, rated LOW. The record also states that the issue may have been abused in conjunction with specific spam messages.

A WhatsApp spokesperson told SecurityWeek that the team found the issue while disrupting a scam campaign and believes a scammer was using it to make their scam message seem more credible. According to The Hacker News, internal researchers on the WhatsApp Security Team discovered and reported the issue. The same report says WhatsApp did not disclose the scale of the activity, or whether those efforts were successful.

## Why it matters

The score is low, and the useful detail for anyone managing these apps is the version boundary rather than the rating: the fix landed in 2.26.17.4, and earlier builds remain affected. The abuse described in the CVE record concerns spam messages, and the report says the scale of the activity was not disclosed.

## What to do

Update WhatsApp for Android and WhatsApp Business for Android to 2.26.17.4, the version that fixes CVE-2026-23871. According to The Hacker News, WhatsApp advises users to keep their apps and devices up to date to ensure optimal protection.
