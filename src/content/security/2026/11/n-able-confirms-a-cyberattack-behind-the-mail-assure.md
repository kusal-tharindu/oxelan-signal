---
title: N-able confirms a cyberattack behind the Mail Assure disruption
date: 2026-11-20T09:43:25.973Z
format: news
summary: N-able confirmed that a cyberattack caused a days-long disruption to
  Mail Assure and SpamExperts Hosted Cloud, and says credentials on one web
  server may have been accessible.
description: N-able says a cyberattack caused a days-long Mail Assure and
  SpamExperts Hosted Cloud disruption; one web server may have exposed
  credentials.
tags:
  - incident-response
  - authentication
impact: high
action: review
status: current
affects:
  - N-able Mail Assure Hosted Cloud
  - N-able SpamExperts Hosted Cloud
briefing:
  changed: N-able confirmed that a cyberattack, not platform configuration, caused
    a days-long disruption to Mail Assure and SpamExperts Hosted Cloud across
    all regions.
  why: The incident was isolated to a single web server where credentials stored
    on the platform may have been accessible, and N-able responded by revoking
    customer API tokens, invalidating OAuth tokens and resetting passwords for
    local users.
  action: Treat automation that authenticated with customer API or OAuth tokens as
    affected, and check the vendor advisory before reconnecting integrations to
    the portal or API.
sources:
  - title: "SecurityWeek: N-able Blames Service Disruption on Cyberattack"
    url: https://www.securityweek.com/n-able-blames-service-disruption-on-cyberattack/
---

## What happened

According to SecurityWeek, N-able Mail Assure and SpamExperts Hosted Cloud services experienced a days-long disruption across all regions after hackers compromised one of the company's servers. The disruption began on November 16, and N-able initially blamed it on a combination of platform configuration and service dependencies. On November 18, the company confirmed that a cyberattack was behind the disruption.

## What is affected

Mail flow and filtering were not affected, but logging, mailbox synchronization, the management portal, and quarantine were taken offline. Inbound and outbound filtering are operating, but access to the portal and API remains disabled.

N-able said the incident was isolated to a single web server where an unauthorized party may have been able to access certain credentials stored on the platform. The company found no evidence that customer data was compromised.

## Why it matters

N-able's account of the incident centers on credentials held on the platform rather than on message content. That is why the containment work it describes covers tokens and passwords across the service, not just the compromised host.

## What to do

N-able says it took the affected server offline, rotated internal platform credentials, revoked existing customer API tokens, invalidated OAuth tokens, and reset passwords for local users. Because existing customer API tokens were revoked and OAuth tokens invalidated, automation that authenticated with them is affected. The cited sources list no fixed version; recovery depends on N-able restoring portal and API access. The company says the cyberattack is unrelated to the recent N-central incident.
