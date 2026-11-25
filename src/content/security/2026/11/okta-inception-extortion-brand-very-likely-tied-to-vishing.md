---
title: "Okta: Inception extortion brand very likely tied to vishing cluster O-UNC-053"
date: 2026-11-25T09:42:43.241Z
format: news
summary: Okta assesses that threat cluster O-UNC-053 very likely rebranded as
  Inception, whose voice phishing campaign steals SSO credentials and MFA codes.
description: Okta links Inception to O-UNC-053; the vishing kit steals SSO
  credentials but cannot bypass phishing-resistant authentication.
tags:
  - phishing
  - authentication
  - incident-response
impact: high
action: review
status: current
briefing:
  changed: Okta observed a new INCEPTION data leak site on November 16, 2026, and
    assesses that O-UNC-053 very likely changed its brand affiliation to
    Inception.
  why: The cluster's voice phishing campaign impersonates support staff, harvests
    credentials, and prompts for MFA factors to steal SSO credentials, but it
    cannot bypass phishing-resistant authentication.
  action: Enforce phishing-resistant authenticators such as Okta FastPass,
    passkeys, or smart cards, and review DNS, proxy, and identity provider logs
    dating back to October 21, 2026.
sources:
  - title: Former ShinyHunters-affiliated cluster O-UNC-053 moves to new INCEPTION
      leak site | Threat Intelligence
    url: https://www.okta.com/blog/threat-intelligence/former_shinyhunters_cluster_moves_to_new_inception_site/
  - title: "BleepingComputer: New Inception extortion gang launches large-scale
      vishing campaign"
    url: https://www.bleepingcomputer.com/news/security/new-inception-extortion-gang-launches-large-scale-vishing-campaign/
---

Okta has tracked the operators behind a voice phishing (vishing) campaign as threat cluster O-UNC-053, which has been active since March 2026. Okta observed a new data leak site (DLS) branded INCEPTION on November 16, 2026, and assesses that O-UNC-053 very likely changed its brand affiliation to Inception. O-UNC-053 targets appeared on the ShinyHunters DLS between March and September 2026.

The campaign uses callers who impersonate support personnel and pressure users to perform urgent password resets. Its phishing kit first harvests the username and password, then prompts for various multifactor authentication (MFA) factors to steal single sign-on (SSO) credentials. The kit cannot bypass phishing-resistant authentication such as Okta FastPass and FIDO2/WebAuthn passkeys.

The legal-themed campaign started in late October 2026, and its domains are predominantly registered through NICENIC, with phishing sites fronted by Cloudflare (AS13335). The operators change phishing domain themes approximately every 4-6 weeks.

Okta cannot make a high-confidence assessment whether O-UNC-053 operates the Inception DLS itself or partners with another extortion actor, and it could not validate whether published data is authentic. Pepijn van der Stap, allegedly affiliated with ShinyHunters, was arrested on September 15, 2026, and Saif al-Din Khader ("Rey") was arrested on September 29, 2026. The ShinyHunters DLS went down after the arrests.

According to BleepingComputer, ReversingLabs confirmed 21 domains used for SSO phishing and identified 41 domains believed to be used in campaign infrastructure. The report says Inception claimed seven victims on its extortion site, including AMD, PepsiCo, Cigna Healthcare, AutoZone, and Lucid Motors, none of which have publicly confirmed a data breach. The report, citing ReversingLabs, says Inception has been operating since late October and uses legal-themed websites imitating corporate authentication services, primarily Okta but also NetIQ/OpenText Access Manager. The report said Inception disputed the alleged links to other threat actors, claiming to operate independently.

## What to do

Okta recommends enrolling users in phishing-resistant authenticators such as Okta FastPass, passkeys, or smart cards and enforcing phishing resistance in policy. The report says ReversingLabs recommends reviewing Domain Name System (DNS), proxy, and identity provider logs dating back to October 21, 2026, for signs of suspicious activity.

<!-- cspell:words rebranded NICENIC Pepijn Stap Khader -->
