---
title: FBI seizes FaceStealer infrastructure tied to North Korean crypto theft
date: 2026-11-13T15:43:44.873Z
format: news
summary: The FBI seized cloud infrastructure used in the FaceStealer social
  engineering scheme, which the Justice Department says has stolen more than
  $400 million in cryptocurrency.
description: The FBI seized FaceStealer infrastructure and published a report on
  the social engineering scheme tied to North Korean crypto theft.
tags:
  - incident-response
  - phishing
impact: high
action: review
status: current
briefing:
  changed: The FBI seized cloud-based infrastructure used in the FaceStealer
    social engineering scheme and published a report on its mechanics.
  why: The Justice Department says the scheme has stolen more than $400 million in
    cryptocurrency in the last 18 months, and the FBI seized over 900 webcam
    videos used to impersonate victims.
  action: Review the FBI report and FaceStealer resource page, and if you operate
    a virtual asset service provider, block transactions tied to TraderTraitor
    addresses.
sources:
  - title: Justice Department Announces Actions to Disrupt North Korea’s Massive
      Theft of Cryptocurrency
    url: https://www.justice.gov/opa/pr/justice-department-announces-actions-disrupt-north-koreas-massive-theft-cryptocurrency
  - title: "The Hacker News: FBI Says North Korean Hackers Stole Over $400 Million
      in Crypto Using Deepfake Video Calls"
    url: https://thehackernews.com/2026/11/fbi-says-north-korean-hackers-stole.html
---

The U.S. Department of Justice (DOJ) announced coordinated actions against North Korea's schemes to fund its regime through cryptocurrency theft, including a seizure by the Federal Bureau of Investigation (FBI) of cloud-based infrastructure used in the FaceStealer social engineering scheme. The FBI also published a report on the mechanics of FaceStealer and created a resource website at www.fbi.gov/facestealer. According to the DOJ, the scheme has resulted in the theft of more than $400 million worth of cryptocurrency in the last 18 months. Pursuant to a federal warrant, the FBI seized over 900 webcam videos of FaceStealer victims.

According to The Hacker News, the activity is linked to a prolific North Korea-linked financially motivated threat cluster tracked as BlueNoroff, also known as Advanced Persistent Threat 38 (APT38), CryptoCore, Sapphire Sleet, Stardust Chollima, and UNC1069. The campaign lures targets with invitations to video meetings delivered from stolen accounts belonging to prior victims. The Hacker News reports that the FaceStealer scheme was used to target the maintainer of the Axios npm package to push a trojanized version that delivered a cross-platform remote access trojan (RAT).

## Why it matters

The DOJ obtained court-authorized seizure and restraint of more than $1.2 billion worth of cryptocurrency recently stolen from Binance. The FBI attributed the Binance theft to North Korean military actors it calls TraderTraitor, who stole more than $6 billion worth of virtual assets from the exchange on or about Oct. 29. Collective U.S. government and private sector efforts have frozen more than $2.7 billion of the stolen Binance assets.

## What to do

Review the FBI report and the FaceStealer resource page for the scheme's mechanics. The FBI, the U.S. Secret Service, and Internal Revenue Service Criminal Investigation issued a Cyber Alert attributing the theft and urging virtual asset service providers (VASPs) to block transactions tied to TraderTraitor addresses.

<!-- cspell:words facestealer Noroff Chollima trojanized -->
