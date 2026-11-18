---
title: Tor releases 0.4.9.17 during an ongoing relay DDoS attack
date: 2026-11-18T02:41:47.895Z
format: news
summary: The Tor Project released Tor 0.4.9.17 as a security update in rapid
  response to a DDoS attack that has affected most relay operators, and
  operators are urged to upgrade.
description: Tor 0.4.9.17 ships security fixes, including IPv6 relay DoS
  defenses, as a circuit flood overwhelms relays.
tags:
  - incident-response
  - security-updates
impact: high
action: review
status: current
affects:
  - Tor relay operators
briefing:
  changed: According to BleepingComputer, the Tor Project released Tor version
    0.4.9.17 as a security update in rapid response to an ongoing DDoS attack on
    the network.
  why: The report says a massive flood of client circuits has overwhelmed relays
    across the network and affected most relay operators, and the release
    includes a fix the project calls especially important for relay DoS defenses
    involving IPv6 handling.
  action: Relay operators are urged to upgrade to version 0.4.9.17 as soon as
    possible, and the project said no additional action is required after
    installing the update.
sources:
  - title: "BleepingComputer: Tor releases emergency update amid ongoing DDoS attack"
    url: https://www.bleepingcomputer.com/news/security/tor-releases-emergency-update-amid-ongoing-ddos-attack/
---

According to BleepingComputer, the Tor Project released Tor version 0.4.9.17 as a security update. The release includes a series of security fixes.

## What is affected

According to the report, the update was a rapid response to an ongoing distributed denial-of-service (DDoS) attack on the network, and the attack has affected most relay operators. The project described a massive ongoing flood of client circuits that has overwhelmed relays across the Tor network, a problem it said has been difficult to address.

## Why it matters

One fix matters especially for relay denial-of-service (DoS) defenses related to IPv6 handling, according to the report. The project is working on additional defenses and expects to issue further releases in the near future, so the response is not finished.

## What to do

Relay operators are urged to upgrade to version 0.4.9.17 as soon as possible. The project said no additional action is required after installing the update, so the upgrade is the single step it asks for. Because the release is a rapid response to an ongoing attack, it is meant to be applied now rather than held for a scheduled maintenance window.
