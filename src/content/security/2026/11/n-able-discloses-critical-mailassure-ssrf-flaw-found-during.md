---
title: N-able discloses critical MailAssure SSRF flaw found during breach
  investigation
date: 2026-11-23T13:40:59.130Z
format: news
summary: N-able has fixed a critical server-side request forgery flaw in
  MailAssure that it found while investigating the breach of its hosted email
  filtering service.
description: N-able fixed CVE-2026-134624, a critical server-side request
  forgery flaw in MailAssure before build 20261121.1943.
tags:
  - cve
  - incident-response
impact: critical
action: review
status: current
affects:
  - N-able MailAssure (SpamExperts) before 20261121.1943
briefing:
  changed: N-able disclosed CVE-2026-134624, a critical server-side request
    forgery flaw in MailAssure (SpamExperts) that it found while investigating a
    breach of its Mail Assure and SpamExperts Hosted Cloud.
  why: An authenticated API user can cause the server to connect to arbitrary
    internal hosts and ports, determine which are reachable, and send crafted
    data to internal services.
  action: Hosted Cloud users have nothing to install; SpamExperts Local Cloud
    operators should confirm their servers are on build 20261121.1943.
sources:
  - title: "NVD: CVE-2026-134624"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-134624
  - title: "The Hacker News: N-able Discloses Critical Mail Assure Vulnerability
      Found During Breach Investigation"
    url: https://thehackernews.com/2026/11/n-able-discloses-critical-mail-assure.html
---

## What changed

N-able disclosed CVE-2026-134624, a server-side request forgery (SSRF) flaw in MailAssure (SpamExperts). The vendor published the CVE record on 2026-11-22. The record classifies the flaw as CWE-918 and gives it a CVSS (Common Vulnerability Scoring System) 4.0 base score of 9.3, marked critical.

According to The Hacker News, N-able disclosed the critical flaw while investigating the breach of its Mail Assure and SpamExperts Hosted Cloud, an email filtering service it runs for managed service providers.

## Who is affected

MailAssure (SpamExperts) before 20261121.1943 does not restrict the destination of the LDAP (Lightweight Directory Access Protocol) synchronization connection check performed when a relay is configured. An authenticated API (application programming interface) user can cause the server to connect to arbitrary internal hosts and ports, determine which are reachable, and send crafted data to internal services.

## The breach behind the disclosure

The report says an unauthorized party accessed one of the Hosted Cloud servers, and the dashboard and APIs were kept offline as a precaution. N-able fixed the flaw and restored access to the dashboard and APIs late on Saturday, closing an outage that began last Monday. It responded by rotating internal platform credentials, revoking customers' existing API tokens, invalidating OAuth tokens, and resetting local users' passwords. N-able says it has found no evidence that customer data was compromised, including tenants' mailboxes, and no sign of exploitation beyond that one server since the fix was implemented. The investigation is still open, and the breach is unrelated to the N-central incident, according to the company.

## What to do

The hosted platform is already patched, so there is nothing for Hosted Cloud users to install. SpamExperts Local Cloud runs on customer hardware, so Local Cloud operators should confirm their servers are on build 20261121.1943. The report lists that build as the fix.
