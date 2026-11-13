---
title: Operation CloudFire steals live Google sessions through calendar invites
date: 2026-11-12T17:41:13.052Z
format: news
summary: Since mid-August 2026, a phishing operation has used Google Calendar
  invites and a live reverse proxy to steal Google sessions from corporate
  users.
description: A reported campaign relays Google sign-in through a live proxy, so
  each second factor reaches Google as the victim enters it.
tags:
  - phishing
  - authentication
impact: high
action: review
status: current
affects:
  - Google sessions of corporate users
briefing:
  changed: Since mid-August 2026, a phishing operation has been stealing live
    Google sessions from corporate users, and the research team that spotted it
    named the campaign Operation CloudFire.
  why: A live Google session reaches mail, Drive, and the ability to grant OAuth
    access in the victim's name.
  action: Watch for the reported shift from calendar invites to Google Drive file
    and document share invites, and report gateway and backend URLs through
    Cloudflare's abuse reporting system.
sources:
  - title: "Reputation Says It's Fine: How Calendar Invites and a Live MFA Proxy
      Steal Google Sessions | Material Security"
    url: https://material.security/resources/reputation-says-its-fine-how-calendar-invites-and-a-live-mfa-proxy-steal-google-sessions
  - title: "The Hacker News: Calendar Invites and Live Proxies: Inside a Google
      Session Hijacking Campaign"
    url: https://thehackernews.com/2026/11/calendar-invites-and-live-proxies.html
---

Since mid-August 2026, a phishing operation has been stealing live Google sessions from corporate users. According to The Hacker News, the threat research team at Material Security spotted the campaign and named it Operation CloudFire.

The lure arrives as a Google Calendar invite, sometimes delivered by blind carbon copy (BCC) and often from an organization the recipient has corresponded with before. The attacker then runs a live reverse proxy (a server that relays requests to the genuine site) in front of the real Google sign-in page, relaying each second factor to Google as it arrives. A second layer is a Cloudflare Turnstile challenge (a bot-detection widget), in some builds the genuine widget served from Cloudflare itself.

## How the pages stay hidden

The password capture page is built in memory by script after the visitor clears the challenge, which leaves nothing for a crawler to fetch. The framework behind the campaign has been documented publicly since February under the name Nyasher, and one wildcard certificate was issued 46 minutes before the domain it covers was registered. An unfinished Microsoft 365 branch shipped alongside the live Google code, including a title string that decodes to a Microsoft sign-in prompt.

## Why it matters

A live Google session reaches mail, Drive, and the ability to grant OAuth (open authorization, the delegated-access protocol) access in the victim's name. The report counts 68,676 campaign messages blocked and 2,112 unique malicious URLs analyzed over one month of Operation CloudFire. Material Security says it has taken down 897 domains that are part of this campaign and that it catches over 99% of the malicious messages in a campaign, with a reclassification rate of 0.01%.

## What to do

According to the report, the phishing themes have moved from calendar invites to Google Drive file and document share invites. Analysts reported the gateway and backend URLs through Cloudflare's abuse reporting system, and Cloudflare put its own phishing warning in front of those destinations.

<!-- cspell:words Nyasher -->
