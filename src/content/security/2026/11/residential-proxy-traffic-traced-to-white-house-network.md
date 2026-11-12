---
title: Residential proxy traffic traced to White House network
date: 2026-11-11T00:47:04.375Z
format: news
summary: Residential proxy exit activity was observed on the network registered
  to the Executive Office of the President, with 236 exits between October 5 and
  November 3.
description: Residential proxy exits were observed on the White House network,
  with traffic tied to Windows 11 machines running InfaticaSDK.
tags:
  - malware
  - threat-model
impact: high
action: review
status: current
affects:
  - AS2650, the network registered to the Executive Office of the President
briefing:
  changed: Residential proxy exit activity was observed on AS2650, the network
    registered to the Executive Office of the President, with 236 exits between
    October 5 and November 3.
  why: The exits came from 6 addresses on 26 of the 30 days, and 28 separate
    residential proxy services were able to exit through the network.
  action: Review the reported activity and confirm whether the described Windows
    11 and InfaticaSDK condition applies to your environment.
sources:
  - title: Residential Proxies Detected on White House Network
    url: https://layer3intel.com/blog/residential-proxies-white-house-network
  - title: "SecurityWeek: Researchers Find Residential Proxies on White House Network"
    url: https://www.securityweek.com/researchers-find-residential-proxies-on-white-house-network/
---

## What was observed

Residential proxy exit activity was observed on AS2650, the network registered to the Executive Office of the President. A residential proxy enumeration pipeline exited through that network 236 separate times between October 5 and November 3. Those exits came from 6 addresses on 26 of the 30 days, and 28 separate residential proxy services were able to exit through the network.

According to SecurityWeek, the White House network proxy traffic comes from Windows 11 machines running the InfaticaSDK. The report describes Infatica as a Singapore-based web-data intelligence and proxy service provider claiming access to more than 45 million residential, mobile, and datacenter IP addresses worldwide. SecurityWeek also reports that Infatica founder Vladimir Fomenko owns King Servers, which hosted six of the eight internet addresses used by Russian state-sponsored hackers in the 2016 US election attacks.

## What else the pipeline found

The same enumeration recorded 413 addresses and more than 32,000 observations in Saint Helena, Ascension and Tristan da Cunha, split between Starlink and Sure Saint Helena. It also recorded three observations from Antarctica, all from a Cloudflare WARP address pointing to McMurdo Station.

## Why it matters

The pattern points to an infected device on the White House network rather than a public guest Wi-Fi network. Most of the observed activity happens in the evening Eastern time, about half between 5 p.m. and midnight, and almost none in the early morning.

<!-- cspell:words Infatica Fomenko Cunha Starlink Murdo -->
