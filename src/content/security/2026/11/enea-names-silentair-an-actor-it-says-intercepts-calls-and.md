---
title: Enea names SilentAir, an actor it says intercepts calls and texts via
  operator signaling
date: 2026-11-13T12:40:27.488Z
format: news
summary: Enea named a newly identified actor SilentAir and says it intercepts
  calls and text messages through compromised mobile operator infrastructure,
  mainly targeting Taiwan.
description: Enea names SilentAir, an actor it says intercepts calls and text
  messages through compromised mobile operator infrastructure.
tags:
  - incident-response
  - authentication
  - malware
impact: high
action: review
status: current
briefing:
  changed: Enea named a newly identified actor SilentAir and says it intercepts
    calls and text messages through compromised mobile operator infrastructure.
  why: Enea says the group uses SS7 and sometimes Diameter signaling from hijacked
    nodes at mobile operators, with Taiwan as its main target.
  action: Operators should deploy GTP-C and GTP-U firewalls, share information
    with their SS7 and Diameter firewalls, and treat the whole IPX as untrusted.
sources:
  - title: The Enemy Within. Tracking LIMINAL PANDA and SilentAir through Mobile
      Networks
    url: https://www.enea.com/insights/the-enemy-within-tracking-liminal-panda-and-silentair-through-mobile-networks/
  - title: "The Hacker News: SilentAir Hijacks Asian Telecom Networks to Intercept
      SMS 2FA Codes and Spy on Taiwanese Users"
    url: https://thehackernews.com/2026/11/silentair-hijacks-asian-telecom.html
  - title: "SecurityWeek: SilentAir Hackers Intercept Calls, SMS From Inside Mobile
      Networks"
    url: https://www.securityweek.com/silentair-hackers-intercept-calls-sms-from-inside-mobile-networks/
---

## What happened

According to The Hacker News, Enea found SilentAir's attack sources in at least six Asian countries and named the newly identified actor. The report says Enea linked the activity to China only with low confidence. According to SecurityWeek, Enea assesses with high confidence that SilentAir is a state-level actor, and the report says Taiwan was the group's primary target and that it targeted a dozen additional countries and territories.

## Why it matters

According to SecurityWeek, SilentAir intercepts phone calls and text messages through compromised mobile operator infrastructure, and Enea has monitored the attacks since early 2025. The group launches signaling attacks mostly over SS7 (Signaling System No. 7) and sometimes over Diameter from network nodes it has hijacked at mobile operators. The Hacker News reports that interception made up 18.3% of the attacks Enea saw from SilentAir, that SilentAir sent silent SMS (short message service) messages on a very large scale mainly to subscribers in Taiwan, and that some targets were political and government VIPs (very important persons).

## What else Enea reported

According to SecurityWeek, Enea said SilentAir and Liminal Panda could be connected, although the evidence is not strong enough to link them. Enea detected Liminal Panda GTPDoor activity at customer operators from Q1 (first quarter) 2026, along with several hundred attempted covert command-and-control communications. GTPDoor is a Unix-based remote-access implant that uses GTP-C (GPRS Tunneling Protocol control plane) for covert command-and-control, and Enea says Liminal Panda uses a new version that uses GTP-U (GPRS Tunneling Protocol user plane).

## What to do

The Hacker News report says Enea told operators to deploy GTP-C and GTP-U firewalls and configure them to share information with their SS7 and Diameter firewalls. It also recommended treating the whole IPX (the interconnect network between mobile operators) as untrusted.

<!-- cspell:words Enea GPRS -->
