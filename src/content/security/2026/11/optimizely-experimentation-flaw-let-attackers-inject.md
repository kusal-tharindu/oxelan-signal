---
title: Optimizely Experimentation flaw let attackers inject malicious JavaScript
  into customer projects
date: 2026-11-17T04:40:40.310Z
format: news
summary: Optimizely says attackers exploited a vulnerability in Experimentation
  to inject malicious JavaScript into customer projects, which BleepingComputer
  reports reached sites including CNN, Fox News and Salesforce.
description: Optimizely fixed a vulnerability in Experimentation that attackers
  used to inject malicious JavaScript into customer projects.
tags:
  - supply-chain
  - malware
  - incident-response
impact: high
action: review
status: current
affects:
  - Optimizely Experimentation customer projects
briefing:
  changed: Optimizely reported that an unauthorized party exploited a
    vulnerability in Experimentation and added malicious JavaScript to some
    customer projects, and that it fixed the flaw and removed the injected code.
  why: According to BleepingComputer, the injected code loaded on sites including
    CNN, Fox News, BBC, Salesforce and GitLab, and it skimmed payment card data
    and replaced cryptocurrency wallet addresses.
  action: Optimizely says it fixed the vulnerability, removed the injected code
    and secured affected accounts; confirm those steps cover your
    Experimentation projects.
sources:
  - title: Optimizely Service Status
    url: https://status.optimizely.com/
  - title: "BleepingComputer: Optimizely hack infected CNN, Fox News, BBC,
      Salesforce sites with malware"
    url: https://www.bleepingcomputer.com/news/security/optimizely-supply-chain-attack-delivers-malware-to-cnn-fox-news-bbc-salesforce-sites/
---

Optimizely has disclosed a security incident in which an unauthorized party exploited a vulnerability in Experimentation and used it to add malicious JavaScript to some customer projects. The company posted the status update on Nov 17, 2026 at 01:02 UTC. According to BleepingComputer, attackers exploited a vulnerability in the Experimentation account signup flow to inject the code.

## What is affected

Optimizely Experimentation customer projects that received the injected code are affected. The report says the supply chain attack led to malicious JavaScript being loaded on numerous popular websites, including Zoom, CNN, Fox News, BBC, Salesforce and GitLab. It also says Scott Helme identified 188 infected Optimizely JavaScript files belonging to 178 organizations after analyzing 1,611 scripts.

## Why it matters

The report says the injected code was designed to load an additional malicious script from https://1688360[.]cc/track.js. It says that script replaced cryptocurrency wallet addresses with attacker-controlled addresses to steal transfers and searched for credit card numbers, expiration dates and security codes, attempting to transmit them to https://1688360[.]cc/card.php. The report also says the attack delivered the Coruna and DarkSword iOS exploit kits targeting different iOS versions.

The report says the earliest observed Optimizely script injection was in the early morning of November 16. As of 21:52 UTC on November 16, only one of the 188 previously compromised files still contained malicious code.

## What to do

Optimizely says it fixed the vulnerability and removed the injected code from affected projects, and that it took steps to secure affected user accounts and added protections to prevent unauthorized code from being delivered. According to BleepingComputer, Optimizely blocked access to the vulnerable path and deployed a fix, ended active sessions, revoked tokens and reset access for affected user accounts, and blocked any code from being delivered in Cloudflare.

According to the report, Salesforce is confirming that Optimizely scripts are disabled across preview and production instances as a precaution. Teams running Optimizely Experimentation should follow the vendor's status update and confirm that the fix and account protections cover their projects.

<!-- cspell:words Optimizely Helme Coruna -->
