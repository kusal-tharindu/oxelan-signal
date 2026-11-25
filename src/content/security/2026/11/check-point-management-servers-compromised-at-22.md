---
title: Check Point management servers compromised at 22 organizations
date: 2026-11-24T16:50:28.910Z
format: news
summary: According to BleepingComputer, threat actors compromised Check Point
  Security management servers at 22 organizations across 17 countries in a
  campaign tracked as GT13.
description: BleepingComputer reports Check Point management servers compromised
  at 22 organizations in 17 countries; campaign tracked as GT13.
tags:
  - incident-response
  - authentication
action: review
status: current
affects:
  - Check Point Security management servers
briefing:
  changed: According to BleepingComputer, threat actors compromised Check Point
    Security management servers at 22 organizations across 17 countries in a
    campaign tracked as GT13, ongoing between October 17 and November 2.
  why: Compromised management servers are a serious foothold in an organization's
    security infrastructure. The campaign included a bulk certificate management
    operation across all 24 compromised servers on October 26, and attacks came
    from 99 IP addresses that appear to come from compromised Check Point
    devices and ExpressVPN exit nodes.
  action: The cited sources do not list fixed versions or a complete mitigation.
    Follow the vendor advisory.
sources:
  - title: "BleepingComputer: Hackers compromise Check Point Servers in 22
      organizations"
    url: https://www.bleepingcomputer.com/news/security/hackers-compromise-check-point-servers-in-22-organizations/
---

According to a report from BleepingComputer, threat actors compromised Check Point Security management servers at 22 organizations. The outlet reports that the security firm GreyNoise tracked the activity as GT13. GreyNoise confirmed that the campaign was ongoing between October 17 and November 2, when its visibility ended. The 22 victim organizations are spread across 17 countries, and the report says there is no clear evidence of specific targeting.

## What is affected

The report names Check Point Security management servers as the compromised systems. The report counts 24 compromised Check Point servers across the 22 organizations. The attacks were launched from 99 IP addresses that appear to come from compromised Check Point devices and ExpressVPN exit nodes.

## Why it matters

On October 26, the attacker performed a bulk certificate management operation across all 24 compromised servers, which failed but still helped GreyNoise identify victims. Compromised management servers are a serious foothold in an organization's security infrastructure.

## What to do

The cited sources do not list fixed versions or a complete mitigation. Follow the vendor advisory.
