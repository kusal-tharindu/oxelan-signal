---
title: Okta links vishing cluster O-UNC-053 to new INCEPTION data leak site
date: 2026-11-24T14:43:27.066Z
format: news
summary: Okta's Threat Intelligence team says threat cluster O-UNC-053 may have
  rebranded as INCEPTION and continued vishing attacks that steal MFA factors
  and lead to extortion.
description: Okta tracks O-UNC-053, a vishing group linked to a new INCEPTION
  data leak site; phishing-resistant authentication blocks its kit.
tags:
  - phishing
  - data-breach
  - authentication
impact: high
action: review
status: current
briefing:
  changed: Okta's Threat Intelligence team is tracking threat cluster O-UNC-053,
    which it assesses very likely changed its brand affiliation; a new data leak
    site branded INCEPTION appeared on November 16, 2026.
  why: The group uses vishing to steal credentials and MFA factors, then accesses
    SaaS applications and exfiltrates data for extortion. Its phishing kit
    cannot bypass phishing-resistant authentication such as Okta FastPass and
    FIDO2/WebAuthn passkeys.
  action: Enroll users in strong authenticators such as Okta FastPass, passkeys,
    or smart cards and enforce phishing resistance in policy.
sources:
  - title: Former ShinyHunters-affiliated cluster O-UNC-053 moves to new INCEPTION
      leak site | Threat Intelligence
    url: https://www.okta.com/blog/threat-intelligence/former_shinyhunters_cluster_moves_to_new_inception_site/
  - title: "The Hacker News: Okta Links ShinyHunters-Associated Vishing Group to New
      INCEPTION Data Leak Site"
    url: https://thehackernews.com/2026/11/okta-links-shinyhunters-associated.html
---

Okta's Threat Intelligence team is tracking threat cluster O-UNC-053, which it assesses very likely changed its brand affiliation and continued operations under the name INCEPTION. The cluster has been active since March 2026 and uses voice phishing (vishing) to steal credentials and multi-factor authentication (MFA) factors.

## What is affected

The campaign targets sectors including technology, healthcare, biotechnology, financial services, insurance, entertainment, gaming, retail, transportation, hospitality, and legal. The phishing kit used by O-UNC-053 cannot bypass phishing-resistant authentication such as Okta FastPass and FIDO2/WebAuthn passkeys. Operators socially engineer targeted users into sharing one-time passcodes and approving push notifications; if successful, they gain access to SaaS (software as a service) applications and exfiltrate sensitive data used to extort targets.

## Why it matters

The operators change phishing-domain themes approximately every 4-6 weeks. As of November 2026, domain names use patterns such as legal-<target>[.]com, legaldept-<target>[.]com, <target>[.]legal, and <target>-legal[.]com. The "legal" themed campaign started in late October 2026. According to The Hacker News, more than 70 legal-themed vishing domains have been observed since October 2026.

Researchers observed a new data leak site (DLS) branded INCEPTION on November 16, 2026. Between March and September 2026, names of entities targeted by O-UNC-053 appeared on the ShinyHunters DLS between 1 and 28 days after the phishing infrastructure was registered. O-UNC-053 infrastructure was registered between 6 and 19 days prior to targets being named on the INCEPTION DLS. Okta cannot currently make a high-confidence assessment as to whether O-UNC-053 operates the INCEPTION DLS itself or is partnering with another extortion actor.

## What to do

Okta recommends enrolling users in strong authenticators such as Okta FastPass, passkeys, or smart cards and enforcing phishing resistance in policy. That means making phishing-resistant authentication a policy requirement.

<!-- cspell:words rebranded exfiltrates legaldept -->
