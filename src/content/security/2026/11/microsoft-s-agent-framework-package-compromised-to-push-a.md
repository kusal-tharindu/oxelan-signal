---
title: Microsoft's agent-framework package compromised to push a credential stealer
date: 2026-11-18T11:42:54.833Z
format: news
summary: Attackers published malicious versions 1.26.1 and 1.26.2 of Microsoft's
  agent-framework package on the Python Package Index (PyPI) to install a
  credential stealer; both releases have been quarantined.
description: Malicious versions 1.26.1 and 1.26.2 of Microsoft's agent-framework
  package installed a credential stealer; both releases are quarantined.
tags:
  - supply-chain
  - malware
  - ci-cd
impact: high
action: review
status: current
affects:
  - Microsoft agent-framework 1.26.1
  - Microsoft agent-framework 1.26.2
briefing:
  changed: According to The Hacker News, attackers compromised Microsoft's
    agent-framework package and published malicious versions 1.26.1 and 1.26.2
    on November 17, 2026; both have been quarantined on the Python Package Index
    (PyPI).
  why: The package drops a .pth file that runs the credential stealer on every
    Python interpreter start, and version 1.26.2 also collects GitHub Actions
    OpenID Connect (OIDC) tokens. The report says the package attracts about
    190,000 downloads a month.
  action: Pin agent-framework to the most recent safe version, 1.26.0, and restore
    from a clean environment.
sources:
  - title: "The Hacker News: Attackers Compromise Microsoft's Agent Framework PyPI
      Package to Steal Cloud Credentials"
    url: https://thehackernews.com/2026/11/attackers-compromise-microsofts-agent.html
---

According to The Hacker News, threat actors compromised Microsoft's agent-framework package to push a credential stealer. The malicious versions were 1.26.1 and 1.26.2, published 33 minutes apart on November 17, 2026. Both release versions have been quarantined on the Python Package Index (PyPI), the report says.

## What is affected

The malicious releases are Microsoft agent-framework 1.26.1 and 1.26.2. The package drops a .pth file in the site-packages root directory, which then runs automatically on every Python interpreter start. Version 1.26.1 uses agent_framework_meta.pth, while version 1.26.2 uses af_runtime_diag.pth.

## Why it matters

The stealer sends collected data to a hard-coded webhook.site endpoint. Version 1.26.2 also collects GitHub Actions OpenID Connect (OIDC) tokens and expands the search patterns used for harvesting credential-related environment variables. The report says the package attracts about 190,000 downloads a month. The report says it is unclear how the attacker obtained publishing access.

## What to do

Pin the package to the most recent safe version, 1.26.0, and restore from a clean environment. Check for exposure to the malicious versions between 8:35 and roughly 9:20 p.m. UTC on November 17, 2026.
