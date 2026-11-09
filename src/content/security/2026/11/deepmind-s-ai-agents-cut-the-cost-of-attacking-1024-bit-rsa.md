---
title: DeepMind's AI agents cut the cost of attacking 1024-bit RSA
date: 2026-11-09T10:39:51.050Z
format: news
summary: According to SecurityWeek, Google DeepMind said AI agents found two
  ways to reduce the cost of attacking 1024-bit RSA, while 2048-bit and larger
  keys remain secure.
description: DeepMind reports AI agents lowered the cost of attacking 1024-bit
  RSA; 2048-bit and larger keys remain secure, per SecurityWeek.
tags:
  - ai-agents
  - authentication
impact: medium
action: review
status: current
affects:
  - 1024-bit RSA systems
  - PKCS#1 v1.5 signatures through the PKCS#11 signing interface of
    cryptographic devices such as hardware security modules (HSMs)
briefing:
  changed: Google DeepMind announced that AI agents working under human
    supervision found two ways to reduce the cost of attacking 1024-bit RSA
    cryptosystems.
  why: In a sandboxed test the agents cut CPU time 3.5-fold on an existing forgery
    attack, and a separate algorithm makes factoring each additional 1024-bit
    key roughly 30 times cheaper on average in a theoretical estimate.
  action: The cited sources give no fixed version. Review whether devices still
    sign with PKCS#1 v1.5 through PKCS#11 using 1024-bit keys, and follow the
    vendor advisory; 2048-bit and larger keys remain secure.
sources:
  - title: "SecurityWeek: Google DeepMind’s AI Agents Make 1024-Bit RSA Keys Cheaper
      to Attack"
    url: https://www.securityweek.com/google-deepminds-ai-agents-make-1024-bit-rsa-keys-cheaper-to-attack/
---

## What changed

According to SecurityWeek, Google DeepMind announced on November 6, 2026 that AI agents working under human supervision found two ways to reduce the cost of attacking 1024-bit RSA cryptosystems. The report says the results only affect obsolete 1024-bit RSA systems, and that modern encryption protocols, which almost universally use 2048-bit or larger keys, remain secure.

## What is affected

The signature finding applies to the PKCS#1 v1.5 format used by the PKCS#11 signing interface of cryptographic devices such as hardware security modules (HSMs). According to the report, once an attacker controls roughly half of the signed block or more, padding adds no protection at all. The attack does not recover the private key, requires roughly 4 billion signing queries made in advance, and does not work against devices that hash messages internally.

## What the agents did

Two AI agents designed, ran and debugged the forgery computation in under four days, with approximately 20 messages from the human researcher, mostly approvals. In a sandboxed test, the agents re-ran an earlier academic forgery attack on the same 1024-bit key, cutting CPU time 3.5-fold. The first forgery took 391 CPU core-years, versus 1,380 in the original study. The key was not factored; the report estimates that factoring it would take 500,000 to 1 million core-years.

DeepMind's agents also came up with an algorithm that makes factoring each additional 1024-bit key roughly 30 times cheaper on average than the best previous approach. The report cautions that this theoretical estimate assumes an initial computation as costly as factoring one key, and that the method has not been implemented. Separately, DeepMind found an algorithm that by its theoretical estimates is roughly 1,600 times better than the previous best method against 1024-bit keys when the attacker controls a 32-byte hash.

## What to do

The cited sources do not give a fixed version, because the affected deployments are described as obsolete 1024-bit RSA systems. Teams should review any device that signs with PKCS#1 v1.5 through the PKCS#11 interface of an HSM and follow that vendor's advisory. The report's stated position is that encryption using 2048-bit or larger keys remains secure. Devices that hash messages internally are not reached by the signature attack as described.

<!-- cspell:words cryptosystems sandboxed -->
