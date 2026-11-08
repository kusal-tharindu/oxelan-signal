---
title: Vercel rolls out Device Bound Session Credentials against stolen cookies
date: 2026-11-08T06:11:19.122Z
format: news
summary: Vercel is gradually rolling out Device Bound Session Credentials, which
  bind a login session to a device with a key stored in a trusted platform
  module (TPM), according to BleepingComputer.
description: Vercel's DBSC rollout ties vercel.com logins to a device key in a
  TPM, limiting reuse of stolen session cookies.
tags:
  - authentication
  - malware
impact: info
action: review
status: current
briefing:
  changed: Vercel is gradually rolling out Device Bound Session Credentials (DBSC)
    on its platform as a defense against information stealer malware.
  why: DBSC binds a login session to the user's device with a private key stored
    in a TPM, so a stolen session cookie cannot be reused on another device.
  action: Vercel is rolling out DBSC gradually, so teams should expect limited
    browser coverage while OAuth app edge cases are handled.
sources:
  - title: "BleepingComputer: Vercel rolls out new protection against stolen session
      cookie attacks"
    url: https://www.bleepingcomputer.com/news/security/vercel-rolls-out-new-protection-against-stolen-session-cookie-attacks/
---

## What changed

According to BleepingComputer, Vercel is gradually rolling out Device Bound Session Credentials (DBSC) on its platform as a defense against information stealer malware. DBSC binds a login session to the user's device with a private key stored in a TPM (Trusted Platform Module, a secure key store), so a stolen session cookie cannot be reused on another device. Vercel's rollout concerns logins to its platform at vercel.com, where developers manage projects and deployments. DBSC currently works in Chrome on macOS and Windows, and the rollout is gradual to handle OAuth (Open Authorization) app edge cases.

## Why it matters

In April, Vercel suffered a security breach impacting a subset of customers after an employee's Google Workspace account at Context.ai was compromised. The report said Vercel stated the attacker used that access to reach internal systems and view environment variables that hadn't been marked as sensitive.

## Related Vercel changes

Vercel is also rolling out a similar protective technology called DPoP (Demonstrating Proof of Possession) for the Vercel CLI (command-line interface). Vercel launched Security Review in public beta for Pro and Enterprise teams. Vercel says Security Review scans will be free until November 10, 2026, while agent-generated fixes will be billed separately.

## What to do

There is no fixed version to install for the DBSC rollout; Vercel is rolling it out gradually. Vercel is also rolling out DPoP for the Vercel CLI. Security Review is available in public beta for Pro and Enterprise teams.

<!-- cspell:words DBSC -->
