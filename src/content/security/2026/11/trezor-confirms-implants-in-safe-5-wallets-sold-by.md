---
title: Trezor confirms implants in Safe 5 wallets sold by CryptoBilis
date: 2026-11-13T19:40:17.551Z
format: news
summary: Trezor confirmed that three Safe 5 devices sold by CryptoBilis
  contained malicious hardware implants that can copy recovery phrases; firmware
  2.13.1 stops the implant on updated devices.
description: Trezor confirmed three Safe 5 devices from CryptoBilis had hardware
  implants that can copy recovery phrases. Firmware 2.13.1 blocks the implant.
tags:
  - supply-chain
  - incident-response
impact: critical
action: review
status: current
affects:
  - Trezor Safe 5 devices sold by CryptoBilis
briefing:
  changed: Trezor confirmed that three Safe 5 devices sold by CryptoBilis
    contained malicious hardware implants.
  why: The implant can copy recovery phrases shown on the device screen and send
    them to an attacker-controlled server, and firmware cannot protect a backup
    captured before the update.
  action: Update affected devices to firmware 2.13.1, move funds to a new wallet
    with a new recovery phrase if bought from CryptoBilis since March 2026, and
    request a replacement device.
sources:
  - title: Implant reported in a Trezor sold by CryptoBilis
    url: https://trezor.io/blog/news/implant-reported-in-a-trezor-sold-by-cryptobilis
  - title: "Our CryptoBilis investigation: what we found and what we’ve changed"
    url: https://trezor.io/blog/news/our-cryptobilis-investigation-what-we-found-and-what-weve-changed
  - title: "The Hacker News: Trezor Confirms Hidden Implants in CryptoBilis-Sold
      Wallets That Can Steal Recovery Phrases"
    url: https://thehackernews.com/2026/11/trezor-confirms-hidden-hardware.html
  - title: "BleepingComputer: Trezor confirms crypto-stealing implants in three
      wallets, releases fix"
    url: https://www.bleepingcomputer.com/news/cryptocurrency/trezor-confirms-crypto-stealing-implants-in-three-wallets-releases-fix/
---

Trezor confirmed that three Safe 5 devices sold by CryptoBilis contained malicious hardware implants, according to BleepingComputer. The implant is an extra circuit board fitted between the Safe 5's main board and its screen. According to The Hacker News, it copies recovery phrases shown on the screen and sends them over the mobile network to an attacker-controlled server.

## What is affected

According to BleepingComputer, the three compromised devices were purchased from CryptoBilis between August 20 and September 23, 2026. Trezor removed CryptoBilis as an authorized reseller on October 9, 2026, and received a responsible disclosure of a single hardware implant in a Safe 5 bought from the reseller in August 2026 on October 28, 2026.

## Why it matters

The Hacker News reported that firmware 2.13.1 cannot protect a wallet backup that was captured before the update. BleepingComputer reported that no affected customers have reported losing funds, and that 48 CryptoBilis customers have contacted Trezor following its October warning. The Hacker News reported that Trezor has cut its reseller network by about 80%. BleepingComputer reported that Trezor inspected devices from other resellers in the region and found no evidence of tampering.

## What to do

Update to firmware 2.13.1, released on November 11, which Trezor says stops the implants from capturing anything on devices that run it. The Hacker News reported that version 2.13.1 was released for the Safe 7, Safe 5, Safe 3 and Model T. Trezor advises customers who bought from CryptoBilis since March 2026 to move funds to a new wallet with a new recovery phrase, according to The Hacker News. BleepingComputer reported that Trezor offers a replacement device to anyone who bought a Trezor from CryptoBilis since March 2026.

<!-- cspell:words Bilis -->
