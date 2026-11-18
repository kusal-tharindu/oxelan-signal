---
title: Judge acquits brothers accused in $25 million Ethereum theft
date: 2026-11-17T10:47:24.084Z
format: news
summary: A US judge acquitted two brothers accused of stealing about $25 million
  in cryptocurrency by exploiting the MEV-Boost relay, one year after a
  mistrial.
description: Judge Jessica Clarke acquitted Anton and James Peraire-Bueno,
  finding the government did not prove material misrepresentations.
tags:
  - incident-response
  - data-breach
impact: low
action: review
status: current
affects:
  - MEV-Boost relay code
briefing:
  changed: US District Judge Jessica Clarke acquitted Anton Peraire-Bueno and
    James Peraire-Bueno, who were accused of stealing about $25 million in
    cryptocurrency in roughly 12 seconds.
  why: The acquittal came one year after a mistrial and rests on the government's
    failure to prove material misrepresentations, while the alleged relay-level
    exploit remains an allegation in the court record.
  action: The cited sources describe no fixed version or mitigation step for the
    MEV-Boost relay code named in the charges.
sources:
  - title: Two Brothers Arrested For Attacking The Ethereum Blockchain And Stealing
      $25 Million In Cryptocurrency
    url: https://www.justice.gov/usao-sdny/pr/two-brothers-arrested-attacking-ethereum-blockchain-and-stealing-25-million
  - title: "BleepingComputer: Court clears brothers of $25 million Ethereum crypto
      heist charges"
    url: https://www.bleepingcomputer.com/news/security/court-clears-brothers-of-25-million-ethereum-crypto-heist-charges/
---

According to BleepingComputer, US District Judge Jessica Clarke has acquitted two brothers accused of stealing about $25 million in cryptocurrency in roughly 12 seconds through a scheme that exploited a bug in the Ethereum blockchain. The report identifies them as Anton Peraire-Bueno and James Peraire-Bueno, former Massachusetts Institute of Technology (MIT) students.

Prosecutors charged the brothers with conspiracy to commit wire fraud, wire fraud, and conspiracy to commit money laundering. The alleged scheme fraudulently obtained approximately $25 million worth of cryptocurrency within approximately 12 seconds.

## The alleged scheme

According to BleepingComputer, prosecutors said the brothers exploited a vulnerability in the MEV-Boost relay code, a component that handles proposed Ethereum blocks, causing the relay to release the full content of a proposed block prematurely and then reordering that block to their advantage. The report says they deployed "bait transactions" designed to identify victim traders. The indictment claimed they learned their victims' trading behaviors while preparing the attack starting in December 2022, and that they used shell companies, multiple private cryptocurrency addresses and foreign cryptocurrency exchanges to conceal proceeds.

The brothers were arrested in Boston and New York in May 2024, and each count carried a maximum sentence of 20 years in prison.

## Why it matters

The ruling turns on what the government could prove, not on the trading strategy described in the charges. According to BleepingComputer, the acquittal came one year after a mistrial, when jurors failed to agree on whether to convict. For engineers working on Ethereum infrastructure, the case is a detailed public account of how a relay-level flaw was alleged to have been used, including the claim that a proposed block's contents were released early.

## What to do

The cited sources describe no fixed version, workaround or mitigation step for the MEV-Boost relay code named in the prosecution's account. The judgment of acquittal applies to both defendants and rests on the government's failure to prove they made any material misrepresentations.

<!-- cspell:words Peraire -->
