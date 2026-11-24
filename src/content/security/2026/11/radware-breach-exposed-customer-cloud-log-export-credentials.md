---
title: Radware breach exposed customer cloud log-export credentials
date: 2026-11-24T18:43:42.612Z
format: news
summary: According to BleepingComputer, an unauthorized party reached an
  unauthenticated internal Radware API and may have taken customer log-export
  credentials.
description: Radware customers who export WAF logs to their own S3, Azure Blob
  Storage, or SFTP storage were advised to rotate those credentials.
tags:
  - data-breach
  - incident-response
impact: high
action: review
status: current
affects:
  - Radware Cloud WAF (AppSec) customers
briefing:
  changed: An unauthorized party accessed an internal-only Cloud WAF management
    API at Radware on November 19, 2026; customer contact details and, for a
    subset of customers, log-export credentials were potentially accessed.
  why: Customers had already reported AWS alerts for an unfamiliar IP address
    attempting to access their log-export buckets, and Radware is still
    investigating whether exposed keys were used.
  action: If you are an affected AppSec (WAF, BOT) customer, rotate Cloud WAF log
    export credentials for Azure Blob Storage, AWS S3 and SFTP, then review
    access logs on those storage accounts since at least November 19.
sources:
  - title: "BleepingComputer: Radware discloses breach exposing customer cloud
      access keys"
    url: https://www.bleepingcomputer.com/news/security/radware-discloses-breach-exposing-customer-cloud-access-keys/
---

According to BleepingComputer, an unauthorized party accessed an internal-only Cloud WAF (web application firewall) management API at Radware on November 19, 2026, and the interface was reachable from the public internet without authentication. The report says Radware detected the breach ten hours after the initial unauthorized API access. Radware provides application delivery and distributed denial-of-service (DDoS) protection to more than 12,500 enterprise and telecom carrier customers worldwide.

## What was exposed

Potentially accessed information includes customer contact details and, for a subset of customers, the credentials configured for log export into self-managed storage: AWS S3, Azure Blob Storage, or SFTP (SSH File Transfer Protocol). BleepingComputer reported that Radware said the breach did not expose WAF traffic inspection, certificates, end users' data, customer application traffic, or cloud DDoS services and data. Radware said WAF traffic inspection and protection had continued without interruption.

## Why it matters

BleepingComputer reported that Radware had already received reports from customers about AWS alerts for an unfamiliar IP address attempting to access their log-export buckets. Radware said it had found no evidence to date of changes to customer security policies or of access to customer application traffic, and the report says the company is still investigating whether any exposed API keys or customer information were used without authorization. BleepingComputer noted that Radware had yet to issue a public statement on the incident or file a breach report with the US Securities and Exchange Commission.

## What to do

Radware blocked the originating IP address and access to the internal management API, and revoked and replaced all internal account credentials. It advised affected AppSec (WAF, BOT) customers to rotate Cloud WAF log export credentials, including Azure Blob Storage keys or SAS (shared access signature) tokens, AWS S3 access keys, or SFTP credentials. The company also advised customers to review access logs on their cloud storage accounts for unexpected access since at least November 19.

<!-- cspell:words Radware -->
