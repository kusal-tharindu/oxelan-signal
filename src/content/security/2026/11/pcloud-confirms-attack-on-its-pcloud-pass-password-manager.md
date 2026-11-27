---
title: pCloud confirms attack on its pCloud Pass password manager
date: 2026-11-27T19:41:06.276Z
format: news
summary: pCloud confirmed a cyberattack on its pCloud Pass password manager that
  it says was promptly contained; a small number of user email addresses were
  exposed and login attempts were made.
description: pCloud says stored passwords and notes were not compromised and
  cloud storage was unaffected, though a small number of email addresses were
  exposed.
tags:
  - data-breach
  - incident-response
  - authentication
impact: high
action: review
status: current
affects:
  - pCloud Pass
briefing:
  changed: pCloud confirmed that a cyberattack targeting its password manager,
    pCloud Pass, occurred and was promptly contained by the pCloud team.
  why: pCloud says a small number of pCloud Pass user email addresses were exposed
    and login attempts were made, while customers reported an unfamiliar device
    connection and alerts arriving on accounts with two-factor authentication
    enabled.
  action: pCloud warns customers to watch for phishing attacks and says it will
    never ask for master passwords or recovery words over email, phone, or chat.
sources:
  - title: "BleepingComputer: pCloud confirms password manager hack after suspicious
      login alerts"
    url: https://www.bleepingcomputer.com/news/security/pcloud-confirms-password-manager-hack-after-suspicious-login-alerts/
---

According to BleepingComputer, pCloud has confirmed that a cyberattack targeting its password manager, pCloud Pass, occurred and was promptly contained by the pCloud team.

## What is affected

pCloud says the attack was isolated to the password manager and that its cloud storage services were not affected. The company says passwords, notes and other information stored in pCloud Pass were not compromised. It also says a small number of pCloud Pass user email addresses were exposed and that login attempts were made.

## Why it matters

Users reported an unfamiliar device named "pd" connecting from the IP address 45.131.244.7 in Luxembourg, and several customers said they received the alerts despite having two-factor authentication (2FA) enabled, according to the report. The "Open settings" link in the notification emails pointed to passqa1.pcloud.com, which appears to be a quality assurance (QA) environment rather than the password manager's production website.

## What to do

pCloud warns customers to watch for phishing attacks, saying it will never ask for master passwords or recovery words over email, phone, or chat. Earlier in November, mSeven Software warned mSecure customers to change stored passwords, reset two-factor authentication and remove passkeys after a hacker reportedly stole an encrypted customer database, according to the report.

Separately, 1Password disclosed a data breach after a threat actor compromised an employee's GitHub account and deployed malicious code to backend services to steal customer data. The company said customers' password vaults and the encryption keys protecting them were not compromised.

<!-- cspell:words passqa pcloud -->
