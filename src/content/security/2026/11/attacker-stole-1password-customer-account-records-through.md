---
title: Attacker stole 1Password customer account records through an employee's
  GitHub account
date: 2026-11-25T21:43:49.240Z
format: news
summary: 1Password began investigating on November 19, 2026, after an attacker
  gained access to an employee's corporate GitHub account and used it to push
  malicious code that downloaded customer account records. The company says
  vault contents were not accessed.
description: 1Password investigated from November 19, 2026, after an attacker
  used an employee's GitHub account to reach customer account records for a
  subset of users.
tags:
  - data-breach
  - incident-response
  - ci-cd
impact: high
action: review
status: current
affects:
  - 1Password customer account records (a subset of users)
briefing:
  changed: On November 19, 2026, 1Password began investigating an attacker's
    access to an employee's corporate GitHub account; malicious code pushed to
    backend services downloaded customer administrative data.
  why: Records for a subset of users were taken, including identifiers, sign-in
    times and tokens from invitation, provisioning and recovery emails, while
    vault contents stayed out of reach.
  action: 1Password is not requiring customers to change their account passwords
    or Secret Keys; it rotated exposed credentials, disabled the GitHub account
    and revoked the stolen token.
sources:
  - title: Update on a security incident involving 1Password’s backend systems. |
      1Password
    url: https://1password.com/blog/update-on-nov-2026-security-incident
  - title: "BleepingComputer: 1Password customer data stolen after employee GitHub
      account breach"
    url: https://www.bleepingcomputer.com/news/security/1password-customer-data-stolen-after-employee-github-account-breach/
---

1Password began investigating a security incident on November 19, 2026, after indications that an attacker gained access to an employee's corporate GitHub account. The company says the attacker used that account to access source code and push malicious code to backend services, which then downloaded administrative data about its customers.

## What was taken

The downloaded records cover a subset of users and include names and email addresses. 1Password also lists account and user identifiers, and account creation and last sign-in times, among the stolen data. Tokens present in certain emailed links for invitations, provisioning and account recovery were taken as well. The company states that customer vault contents were not accessed by, or available to, the attacker at any time. According to BleepingComputer, 1Password says its customers' password vaults and the encryption keys protecting them were not compromised, and only a small number of users were affected and have been individually notified.

## Why it matters

The employee's GitHub account was a route into the systems 1Password uses to build and ship its product. 1Password says the attacker also copied source code from private repositories and gained access to its CI/CD (continuous integration and continuous delivery) system. The company validated no internal evidence of user account takeovers or compromise using any exposed account provisioning tokens.

## What to do

1Password disabled the affected GitHub account, revoked the stolen token, and removed the access the attacker created. It triggered a rotation of all credentials that may have been exposed and brought in independent cybersecurity experts to validate its containment and remediation efforts. The company also expanded invitation and recovery email codes from six numeric digits to ten alphanumeric digits. BleepingComputer reports that 1Password is not requiring customers to change their account passwords or Secret Keys.
