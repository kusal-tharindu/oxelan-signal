---
title: N-able reports unauthorized access to Mail Assure and Spam Experts Hosted Cloud
date: 2026-11-19T10:41:55.407Z
format: news
summary: According to The Hacker News, unknown threat actors gained unauthorized
  access to a server in N-able's Mail Assure and Spam Experts Hosted Cloud;
  management interfaces and APIs remain offline.
description: N-able is restoring Mail Assure and Spam Experts Hosted Cloud after
  unauthorized access; management interfaces and APIs remain offline.
tags:
  - incident-response
  - data-breach
impact: high
action: review
status: current
affects:
  - Mail Assure and SpamExperts Hosted Cloud (Americas, APAC, Europe)
briefing:
  changed: N-able disclosed that unknown threat actors gained unauthorized access
    to one server in the Mail Assure and Spam Experts Hosted Cloud.
  why: The management portal, APIs, quarantine, and logging remain offline, while
    core mail flow and filtering remain available.
  action: N-able disabled management interfaces and APIs; the cited report does
    not give a fixed version or a customer-side mitigation step.
sources:
  - title: "The Hacker News: Hackers Breach N-able Cloud Server, Disrupting Email
      Security Management Across 3 Regions"
    url: https://thehackernews.com/2026/11/n-able-confirms-hackers-accessed-cloud.html
---

According to The Hacker News, N-able disclosed that unknown threat actors gained unauthorized access to one of the servers in the Mail Assure and Spam Experts Hosted Cloud. N-able began investigating a service disruption affecting Mail Assure and SpamExperts Hosted Cloud on November 16, 2026. The report says it has since been determined that the disruption was caused by a security incident.

## What is affected

Mail Assure and SpamExperts Hosted Cloud remain impacted across the Americas, Asia-Pacific (APAC), and Europe regions. Core mail flow and inbound and outbound mail filtering remain available. N-able disabled management interfaces and APIs in response to the unauthorized access.

## Why it matters

The management portal (UI), APIs, quarantine, and logging remain offline while teams work to restore them securely. Those components are the management side of the service, so administrators cannot use them while core mail flow continues. N-able said it has no evidence at this time that customer data was compromised, including access to tenants' mailboxes. The report says the incident is unrelated to multiple vulnerabilities affecting N-central, referred to as Able2Shell, 4EverAble2Shell, and Agent2Shell.

## What to do

The cited report does not give a fixed version or a customer-side mitigation step. N-able's described response was to disable management interfaces and APIs. Restoration was still underway as of November 19, 2026, at 8 a.m. UTC. Follow N-able's updates for restoration and further guidance.
