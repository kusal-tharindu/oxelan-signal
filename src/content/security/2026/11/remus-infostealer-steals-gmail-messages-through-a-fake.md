---
title: Remus infostealer steals Gmail messages through a fake Google Sheets extension
date: 2026-11-26T15:47:33.192Z
format: news
summary: According to BleepingComputer, the Remus infostealer steals Gmail
  messages through a malicious Chrome extension disguised as Google Sheets;
  researchers found no evidence it exploits a Gmail zero-day.
description: According to BleepingComputer, Remus steals Gmail messages via a
  fake Google Sheets Chrome extension; check chrome://extensions for rogue
  installs.
tags:
  - malware
  - incident-response
impact: high
action: review
status: current
affects:
  - Google Chrome
briefing:
  changed: According to BleepingComputer, the Remus infostealer steals Gmail
    messages through a malicious Chrome extension disguised as Google Sheets.
  why: The extension remains installed in Chrome, so it can survive password
    changes and session revocations, and its Gmail access resumes when the
    victim signs back in.
  action: The report advises checking chrome://extensions for rogue installations
    or unexpected Developer Mode, and downloading software only from trusted
    sources.
sources:
  - title: Remus Stealer Uses a Fake Google Sheets Extension to Steal Gmail Messages
    url: https://www.infostealers.com/article/remus-stealer-uses-a-fake-google-sheets-extension-to-steal-gmail-messages/
  - title: "BleepingComputer: Remus malware steals Gmail messages via fake Google
      Sheets extension"
    url: https://www.bleepingcomputer.com/news/security/remus-malware-steals-gmail-messages-via-fake-google-sheets-extension/
---

According to BleepingComputer, the Remus infostealer steals Gmail messages through a malicious Chrome extension disguised as Google Sheets. Starting November 8, the Remus developer advertised an alleged Gmail zero-day, the report says. The report says researchers found no evidence that the feature exploits a Gmail zero-day; it relies on the victim already being signed in.

## What is affected

The report says the extension targets only Google Chrome. It calls itself Google Sheets and carries version 0.5.4. According to the report, it copies the description of the legitimate Google Docs Offline extension and requests access to all websites. The extension is bundled inside a native DLL as an unencrypted ZIP archive in its .rdata section, the report says.

## Why it matters

Once active in the browser, the extension checks for unread emails every minute across up to 10 account slots and retrieves them in full, in raw format, according to the report. The report says it sends the email subject, message body, sender, and victim's email address to its command-and-control server. It parses attachment filenames but does not send them to operators, the report says. The report says the extension can survive password changes and session revocations because it remains installed in the victim's Chrome browser. Its access to Gmail stops when the active session ends and resumes when the victim signs back in, the report says.

## How it installs

Chrome versions 137 and later removed a command-line option that allowed malware to load extensions, the report says. Remus edits the victim's Chrome profile to register the extension and enables Developer Mode to run unpacked extensions, the report says. The extension ID is cfmepkojgnkahbmgablgdahdomjdppgf. It posts collected message contents to hxxps://prem1um[.]onl/m, and the same domain appears in the native Remus command-and-control configuration.

## What to do

The report advises users to check chrome://extensions for rogue installations or unexpected activation of Developer Mode. It also advises downloading software only from trusted sources.

<!-- cspell:words rdata cfmepkojgnkahbmgablgdahdomjdppgf hxxps -->
