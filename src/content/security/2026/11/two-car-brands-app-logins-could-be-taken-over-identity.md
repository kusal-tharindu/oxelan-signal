---
title: Two car brands' app logins could be taken over; identity console kept
  admin default
date: 2026-11-11T05:39:41.730Z
format: news
summary: According to The Hacker News, the login systems behind two car brands'
  mobile apps could be taken over completely, and a ForgeRock administrator
  console still used the default admin password.
description: According to The Hacker News, researchers could take over two car
  brands' app logins while a ForgeRock console kept the default admin password.
tags:
  - authentication
  - platform-engineering
impact: critical
action: review
status: current
affects:
  - ForgeRock identity platform (now sold as PingIDM)
  - ForgeRock administrator console using the default admin credentials
briefing:
  changed: "According to The Hacker News, the login systems behind two car brands'
    mobile apps could be taken over completely, and a ForgeRock administrator
    console still used the documented default: the word admin for both the
    username and the password."
  why: A session could be opened for any customer account on the affected servers,
    and for an owner with a connected car that meant unlocking the doors and
    starting the engine.
  action: Teams running the same identity software, now sold as PingIDM, should
    look for the Apache Felix console at /system/console and remove it or change
    its default password.
sources:
  - title: "The Hacker News: Default 'admin:admin' Server Password Helps Researchers
      Hack Two Automakers, Unlock and Start Cars"
    url: https://thehackernews.com/2026/11/default-adminadmin-server-password.html
---

According to The Hacker News, the login systems behind two car brands' mobile apps could be taken over completely, allowing access to any customer's account and, for an owner with a connected car, unlocking the doors and starting the engine. Both apps signed customers in through ForgeRock, an identity platform now part of Ping Identity, and its administrator console still used the documented default: the word admin for both the username and the password.

## What the researchers reported

The researchers said they could open a session for any customer account on the affected servers. In the Australian systems, admin credentials for the identity server had been left in the app's code, intended for a test setup, according to the report. With both attacks together, they said they could send unlock and engine-start commands to the brands' cars in Australia, the United States, and Canada. They said they tested the complete chain only with US accounts and vehicles, and the report states the full attack was tested only on their own and consenting owners' cars in the United States in February 2026.

## Why it matters in production

The brands' mistake was in how they ran ForgeRock, not a new bug in the product, so there is no CVE, the public identifier for a tracked flaw, and no vendor advisory to follow. Both systems were fixed about two hours after the researchers reported the problem. According to the report, the same kind of weakness has appeared elsewhere: the researchers have shown remote access to vehicles from Honda, Kia, and Subaru, among others, and a broader 16-brand study in 2023 found that weakness across much of the industry.

## What to do

Teams running the same identity software, now sold as PingIDM, can check their own deployment. According to the report, look for the Apache Felix console at /system/console and remove it or change its default password.
