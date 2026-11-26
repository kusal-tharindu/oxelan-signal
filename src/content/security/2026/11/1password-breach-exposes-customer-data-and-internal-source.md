---
title: 1Password breach exposes customer data and internal source code
date: 2026-11-26T08:39:41.578Z
format: news
summary: 1Password says an attacker accessed an employee's corporate GitHub
  account, downloaded account records for a subset of users, and copied source
  code; customer vault contents were not accessed.
description: 1Password says an attacker accessed a corporate GitHub account,
  downloaded account records for a subset of users, and copied source code.
tags:
  - data-breach
  - incident-response
  - ci-cd
impact: high
action: review
status: current
affects:
  - 1Password customer accounts (subset of users)
briefing:
  changed: 1Password began investigating on November 19, 2026, after indications
    that an attacker gained access to an employee's corporate GitHub account.
    The attacker used the account to access source code and push malicious code
    to backend services, which downloaded administrative data pertaining to
    customers.
  why: The attacker downloaded account records for a subset of users and copied
    source code from private repositories; 1Password says customer vault
    contents were not accessed by or available to the attacker.
  action: 1Password triggered a rotation of all credentials which may have been
    exposed and disabled the affected GitHub account, revoked the stolen token,
    and removed the access the attacker created. It brought in independent
    cybersecurity experts to validate containment and remediation efforts.
sources:
  - title: Update on a security incident involving 1Password’s backend systems. |
      1Password
    url: https://1password.com/blog/update-on-nov-2026-security-incident
  - title: "SecurityWeek: 1Password Breach Exposes Customer Data, Internal Source
      Code"
    url: https://www.securityweek.com/1password-breach-exposes-customer-data-internal-source-code/
---

1Password began investigating on November 19, 2026, after indications that an attacker gained access to an employee's corporate GitHub account. The attacker used the account to access source code and push malicious code to backend services, which downloaded administrative data pertaining to customers.

## What is affected

The attacker downloaded account records for a subset of 1Password users, including names and email addresses. According to SecurityWeek, customer vaults and the cryptographic keys protecting them were not compromised, and 1Password says customer vault contents were not accessed by or available to the attacker. The report also says the stolen authentication data included Secure Remote Password verifiers derived from user account passwords and Secret Keys. The report says the breach does not impact client applications, browser extensions, and account recovery keys. It is unclear how many users are affected and how the hacker gained initial access to the corporate GitHub account, according to the report.

## Why it matters

The attacker copied source code from private repositories and gained access to 1Password's CI/CD (continuous integration and continuous delivery) system. 1Password validated no internal evidence of user account takeovers or compromise using any exposed account provisioning tokens. The report says a small number of individuals undergoing provisioning or recovery during the intrusion have been notified.

## What 1Password did

1Password triggered a rotation of all credentials which may have been exposed. It disabled the affected GitHub account, revoked the stolen token, and removed the access the attacker created. It lengthened the codes used in invitation and recovery emails from six digits to ten alphanumeric characters. It brought in independent cybersecurity experts to validate containment and remediation efforts.
