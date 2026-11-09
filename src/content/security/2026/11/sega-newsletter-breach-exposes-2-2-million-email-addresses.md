---
title: SEGA newsletter breach exposes 2.2 million email addresses
date: 2026-11-09T22:45:58.643Z
format: news
summary: According to BleepingComputer, a breach at third-party newsletter
  provider ARARA exposed 2.2 million SEGA newsletter email addresses, and SEGA
  says it has no confirmed evidence of misuse.
description: SEGA said a breach at newsletter provider ARARA exposed 2.2 million
  subscriber email addresses but no passwords or card details.
tags:
  - supply-chain
  - incident-response
impact: medium
action: review
status: current
affects:
  - ARARA email distribution service
  - SEGA email newsletters
briefing:
  changed: SEGA disclosed that a breach at third-party newsletter provider ARARA
    exposed the email addresses of 2.2 million newsletter subscribers.
  why: The leaked data did not include names, passwords, or card details, but the
    same ARARA service was abused to send over 7 million emails impersonating
    credit card companies.
  action: SEGA paused newsletter distribution through ARARA and told customers not
    to open links or attachments in unrecognized email; it says it never asks
    for passwords or card details by email.
sources:
  - title: 株式会社セガ
    url: https://www.sega.co.jp/release/261109_1.html
  - title: "BleepingComputer: SEGA newsletter data breach exposes 2.2 million email
      addresses"
    url: https://www.bleepingcomputer.com/news/security/sega-newsletter-data-breach-exposes-22-million-email-addresses/
---

According to BleepingComputer, SEGA disclosed that a data breach at third-party newsletter provider ARARA exposed the email addresses of 2.2 million newsletter subscribers. SEGA reported that 2,196,044 email addresses were leaked, of which 92,273 also included information associated with newsletter distribution.

## What is affected

The report said the leaked data did not include customer names, dates of birth, gender, addresses, phone numbers, credit card details, or account passwords. It also said email addresses registered with a SEGA Account are handled by a separate distribution system and were not affected. ARARA disclosed on November 2 that a breach of its email distribution service compromised 77 million email addresses from nearly 380 corporate clients, BleepingComputer reported.

## Why it matters

The report said ARARA attributed the incident to a web server vulnerability and problems in its system environment, but the exact intrusion method and timing remain under investigation. The report said ARARA notified SEGA on November 3 that data had been exposed, after having assured SEGA on October 29 that no data compromise had occurred. The report said attackers abused their access to ARARA's service to send over 7 million emails impersonating credit card companies in late October. The report said SEGA has no confirmed evidence of misuse of the leaked data.

## What to do

SEGA said it will postpone distribution of email newsletters using ARARA's email distribution system until the investigation is complete and safety is confirmed. SEGA warned customers not to open or reply to URLs or attachments in unrecognized emails, and said it will never ask for passwords or credit card information by email.

<!-- cspell:words ARARA -->
