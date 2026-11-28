---
title: SAP confirms urgent action after suspicious activity in its IT environment
date: 2026-11-27T10:47:17.817Z
format: news
summary: According to BleepingComputer, SAP confirmed it took urgent action
  after detecting suspicious activity in its IT environment, and said its
  evidence so far does not show downstream compromise of customer systems or
  data.
description: SAP says it acted after suspicious activity in its IT environment,
  and reports no evidence so far of unauthorized access to customer business
  data.
tags:
  - incident-response
  - authentication
impact: high
action: review
status: current
briefing:
  changed: According to BleepingComputer, SAP confirmed it took urgent action
    after detecting suspicious activity in its IT environment, and the report
    says its evidence so far does not show downstream compromise of customer
    systems or data.
  why: The report cites insider sources saying stolen employee authentication
    tokens were used to copy and modify SAP source code on GitHub, and it says
    SAP did not specify which environments the suspicious activity was observed
    in.
  action: The cited sources publish no fixed versions and no customer remediation
    steps; follow SAP's published statements for any further guidance.
sources:
  - title: "BleepingComputer: SAP confirms security incident after suspicious GitHub
      activity"
    url: https://www.bleepingcomputer.com/news/security/sap-confirms-security-incident-after-suspicious-github-activity/
---

According to BleepingComputer, SAP confirmed it took urgent action after detecting suspicious activity in its IT environment. The company said it "identified suspicious activity and promptly implemented the necessary measures to protect its customers and preserve the security of its services". The report said SAP's evidence so far does not show downstream compromise of customer systems or data, while the statement itself says the company found no evidence of unauthorized access to customer business data.

## What is known

According to the same report, Der Spiegel reported earlier, based on an internal SAP memo, that the company was hit by a cyberattack tracked internally as "Project Granite". Insider sources cited by the report said attackers stole authentication tokens from SAP employees and used them to copy and modify SAP source code on GitHub.

## Why it matters

SAP is one of the world's largest enterprise software vendors: the report describes it as based in Walldorf, Germany, with 110,000 employees in 157 countries. For a vendor of that size, the unanswered question is scope: the report does not say which environments the suspicious activity was observed in.

## What to do

SAP did not say whether customers downloading code from its GitHub repositories, or performing updates that are directly fetched or indirectly fed by those repositories, should take any action. The cited sources publish no fixed versions and no customer remediation steps, so follow SAP's published statements for any further guidance.

<!-- cspell:words Walldorf -->
