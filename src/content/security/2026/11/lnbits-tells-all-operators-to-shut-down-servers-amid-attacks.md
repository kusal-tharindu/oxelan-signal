---
title: LNbits tells all operators to shut down servers amid attacks
date: 2026-11-09T11:44:08.519Z
format: news
summary: A wave of attacks led LNbits to urge all server operators to shut down
  immediately, and no fixed version was available as of 09:00 UTC on Nov 9,
  2026.
description: LNbits operators were told to shut down servers after attacks. No
  fixed version was available as of 09:00 UTC on Nov 9, 2026.
tags:
  - incident-response
  - malware
impact: critical
action: review
status: current
affects:
  - LNbits servers
briefing:
  changed: LNbits urged all server operators to shut down immediately after a wave
    of attacks, and the project had not released a fixed version as of 09:00 UTC
    on Nov 9, 2026.
  why: One operator reported losing 2,285,545 satoshis, about 0.023 bitcoin, to
    new accounts that used an exploit, and the project switched off the
    instances it runs on its own cloud service.
  action: Shut down LNbits servers now, and disable the Paywall extension, as the
    first warning asked; patches were estimated to be merged and available
    within 24-48 hours.
sources:
  - title: "The Hacker News: LNbits Urges All Operators to Shut Down Their Bitcoin
      Lightning Wallet Servers Amid Attacks"
    url: https://thehackernews.com/2026/11/lnbits-urges-all-operators-to-shut-down.html
---

According to The Hacker News, a wave of attacks hit LNbits, an open-source Bitcoin Lightning wallet system, and the project urged every server operator to shut down immediately. The report said the shutdown notice came about 80 minutes after a narrower warning that asked operators to disable Paywall, an add-on that makes people pay to view content, while the project looked into a possible bug. As of 09:00 UTC on Nov 9, 2026, the project had not released a fixed version, the report said. LNbits developer Ben Arc said in a patch estimate that patches "should be merged and available within 24-48hrs," according to the report.

## What is affected

The shutdown instruction addressed every LNbits server operator. The project also switched off all the instances it runs for users on its cloud service, my.lnbits.com.

## Why it matters in production

One operator said new accounts used an exploit to withdraw 2,285,545 satoshis, about 0.023 bitcoin, from his server before he could stop it. The attack on Kevin Ravensberg's server ran from 09:22 to 14:00 UTC, starting more than three hours before the project's first warning at 12:33 UTC. Ravensberg later said that Arc and a team of security testers had confirmed which exact extension exploit was used on his server. The shutdown notice did not say how many servers were attacked or how much was taken.

## What to do

Disable the Paywall extension as the first warning asked, and take any remaining servers offline under the shutdown notice. Watch for a fixed release; Arc's estimate put merged patches within 24-48 hours. As of the cited report, no fixed version existed to upgrade to.

<!-- cspell:words satoshis lnbits Ravensberg -->
