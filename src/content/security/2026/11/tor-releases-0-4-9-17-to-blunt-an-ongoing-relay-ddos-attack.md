---
title: Tor releases 0.4.9.17 to blunt an ongoing relay DDoS attack
date: 2026-11-16T09:45:20.355Z
format: news
summary: Tor 0.4.9.17, released on November 13, 2026, carries security fixes
  including IPv6 relay DoS defenses as an ongoing DDoS attack affects most relay
  operators.
description: Tor 0.4.9.17 fixes security issues, including IPv6 relay DoS
  defenses, while an ongoing DDoS attack affects most relay operators.
tags:
  - incident-response
  - security-updates
impact: high
action: review
status: current
affects:
  - Tor relays
briefing:
  changed: The Tor Project released Tor 0.4.9.17 on November 13, 2026, with a
    series of security fixes, in rapid response to an ongoing DDoS attack that
    has affected most relay operators.
  why: One fix concerns how relay DoS defenses handle IPv6, and the project says
    it is still evaluating additional defenses, with further releases expected.
  action: Relay operators should upgrade to Tor 0.4.9.17 as soon as possible; the
    report says no action item is required after upgrading.
sources:
  - title: "SecurityWeek: Tor Updates DoS Defenses Again as Relay Attacks Continue"
    url: https://www.securityweek.com/tor-updates-dos-defenses-again-as-relay-attacks-continue/
  - title: Security Release 0.4.9.17
    url: https://forum.torproject.org/t/security-release-0-4-9-17/22454
---

According to SecurityWeek, the Tor Project released Tor 0.4.9.17 on November 13, 2026, and the release includes a series of security fixes. The report says the version arrived in rapid response to an ongoing distributed denial-of-service (DDoS) attack on the Tor network, which has affected most relay operators.

## What changed

The report notes that the release shipped less than three weeks after Tor 0.4.9.15, a version that introduced three DoS protections. Within 0.4.9.17, one fix is especially important for relay DoS defenses related to IPv6 (Internet Protocol version 6) handling, according to the report.

## Why it matters

The project said it is actively evaluating additional defenses against the attack. It also said it expects further releases in the near future, so operators should expect more mitigation work to come.

## What to do

The advice is aimed at relay operators: anyone running a relay has been urged to update without delay, according to the report. The target is Tor 0.4.9.17, and the report says no action item is required after upgrading.
