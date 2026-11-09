---
title: Attacker used Qubole's AWS account credentials to reach customer accounts
date: 2026-11-09T18:46:32.649Z
format: news
summary: According to The Hacker News, an attacker used credentials for an AWS
  account that Qubole's platform uses to reach its customers.
description: The Hacker News reports an attacker used credentials for an AWS
  account Qubole's platform uses to reach customers.
tags:
  - supply-chain
  - authentication
impact: high
action: review
status: current
affects:
  - Qubole customers reached through the platform's AWS account
briefing:
  changed: According to The Hacker News, an attacker used credentials for an AWS
    account that Qubole's platform uses to reach its customers.
  why: The account in the claim sits on the platform's side of the relationship,
    so customers who rely on that access depend on how the vendor protects it.
  action: The cited report gives no fixed version and no mitigation step; ask the
    vendor which AWS account the report refers to before changing access.
sources:
  - title: "The Hacker News: Hackers Exploit Qubole's Trusted AWS Access to Breach
      Customer Accounts and Steal Data"
    url: https://thehackernews.com/2026/11/hackers-exploit-quboles-trusted-aws.html
---

According to The Hacker News, an attacker used credentials for an AWS (Amazon Web Services) account that Qubole's platform uses to reach its customers. The claim covers the credential and the account it belongs to; it does not cover how those credentials were obtained.

## What is affected

No version number, configuration detail or list of affected customers accompanies the claim. Scope therefore has to come from the vendor rather than from the cited report, and the claim alone cannot tell a reader whether their own account was in scope.

## Why it matters in production

For a customer, the trust boundary in the claim runs through the vendor. The AWS account belongs to the platform, so protecting it is a vendor-side responsibility that customers inherit when they connect their environments.

## What to do

The cited report gives no fixed version and no mitigation step. Customers who grant Qubole's platform access to their AWS accounts should ask the vendor which account the report refers to before they change or revoke access. Keep the vendor's answer with the record of that access, so the next review starts from what was confirmed rather than from the report.

<!-- cspell:words Qubole's Qubole -->
