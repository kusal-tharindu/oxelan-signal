---
title: Fake paid interview invites impersonate brands to steal Google and Okta logins
date: 2026-11-26T17:41:37.987Z
format: news
summary: According to BleepingComputer, a campaign called GoodGuys impersonates
  eight companies and uses fake paid interview invitations to capture corporate
  Google and Okta credentials.
description: A phishing campaign impersonates eight brands and uses fake
  interview and webinar invitations to capture corporate Google and Okta
  credentials.
tags:
  - phishing
  - authentication
impact: high
action: review
status: current
affects:
  - Corporate Google accounts
  - Corporate Okta accounts
briefing:
  changed: According to BleepingComputer, an ongoing campaign dubbed GoodGuys
    impersonates major brands and uses fake paid interview and webinar
    invitations to steal corporate Google and Okta credentials.
  why: The phishing sites prompt visitors to sign in with their Google accounts to
    validate invitations, and the kit can present multifactor authentication
    challenges and fake Okta forms.
  action: Review the report's description of the interview lure and the sign-in
    step used to validate an invitation.
sources:
  - title: "BleepingComputer: Fake paid expert interviews impersonate brands to
      steal Google logins"
    url: https://www.bleepingcomputer.com/news/apple/fake-paid-expert-interviews-impersonate-brands-to-steal-google-logins/
---

According to BleepingComputer, an ongoing phishing campaign dubbed "GoodGuys" impersonates major brands to steal corporate Google and Okta credentials with fake invitations to paid expert interviews and webinars. The campaign was discovered by Push Security, which has tracked it since October 13. According to the report, the campaign impersonates eight companies: Accenture, American Express, Coca-Cola, Culver's, Google Cloud, Nvidia, SpaceX, and Spotify.

## What is affected

The attacks offer recipients up to $600 for a 45-minute interview and ask them to sign in with their work accounts to participate. The phishing sites prompt visitors to sign in with their Google accounts to validate their invitations, which lets the attackers steal the credentials. The kit targets corporate accounts and rejects email addresses associated with Gmail, Yahoo, and Outlook.

## Why it matters

GoodGuys uses fake authentication forms on an attacker-controlled server instead of the reverse-proxy approach used by adversary-in-the-middle (AiTM) phishing kits. After a victim enters Google credentials, the page can display multifactor authentication (MFA) challenges for short message service (SMS) codes, authenticator codes, and Google sign-in prompts. The kit also includes fake Okta authentication forms and support for Okta Verify push notifications.

Push Security believes the threat actors manually attempt to log in with the stolen credentials, instructing the phishing page to show whatever MFA or security challenge Google or Okta presents. The researchers believe the kit may have been developed with an artificial intelligence (AI) coding assistant, based on hidden accessibility labels in every analyzed version. The sign-in card in every build carries two hidden labels: "Sign-in simulation" and "GoodGuys sign-in simulation".

## What to do

The cited report does not list a fixed version or a configuration workaround for the campaign. Review the report's description of the interview lure and the sign-in step used to validate an invitation. The report lists HireVue, SendGrid, Mandrill, and Cvent as legitimate email and event platforms abused to distribute the links.

<!-- cspell:words Cvent -->
