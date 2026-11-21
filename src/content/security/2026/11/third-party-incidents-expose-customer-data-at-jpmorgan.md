---
title: Third-party incidents expose customer data at JPMorgan Chase, Visa and
  Mastercard
date: 2026-11-20T16:42:23.928Z
format: news
summary: JPMorgan Chase, Visa and Mastercard acknowledged third-party incidents;
  the n0n group claimed an attack on Qubole and leaked claimed bank data.
description: JPMorgan Chase, Visa and Mastercard acknowledged third-party
  incidents; n0n claimed the Qubole attack and leaked claimed data.
tags:
  - data-breach
  - ransomware
  - incident-response
impact: high
action: review
status: current
affects:
  - JPMorgan Chase customer marketing data
  - Visa third-party service provider in Asia Pacific
  - Mastercard cardholder email addresses
  - Qubole customer AWS environments
briefing:
  changed: JPMorgan Chase, Visa and Mastercard acknowledged third-party incidents;
    the n0n group claimed an attack on Qubole and leaked claimed bank data.
  why: The incidents involved customer contact data at JPMorgan Chase, Visa and
    Mastercard, while the banks say payment data and card use were not affected.
  action: Mastercard said the exposure has been contained and it is working with
    the provider to support impacted cardholders.
sources:
  - title: "BleepingComputer: Vendor data breach exposes Chase, Visa, Mastercard
      customer info"
    url: https://www.bleepingcomputer.com/news/security/vendor-data-breach-exposes-chase-visa-mastercard-customer-info/
---

According to BleepingComputer, JPMorgan Chase, Visa and Mastercard acknowledged cyber incidents involving third-party service providers. The report says the n0n ransomware group claimed responsibility for an attack on Qubole, suspected to be the third-party provider, on November 11, 2026. It says n0n leaked the claimed Chase, Visa and Mastercard data on its extortion site on November 16, 2026.

## What is affected

JPMorgan said attackers accessed certain marketing data held by its vendors, which may include customer names and email addresses. Visa said the incident involved a third-party service provider in Asia Pacific and that its own systems were not impacted; it said no payments data such as card numbers were affected. Mastercard said the incident exposed a limited amount of email addresses from a small subset of cardholders enrolled in a specific benefit program, with no impact to its payment network or the ability for people to use their cards.

## Why it matters

The report says Qubole is a cloud data analytics company owned by Idera. It says hackers used compromised Qubole credentials between October 14 and 26, 2026, to access customers' Amazon Web Services (AWS) environments through identity and access management (IAM) roles the companies had configured to grant Qubole access. The report says the hackers allegedly stole 53.9 GB across 30,743 files directly from Qubole, including customer contracts, pricing records, staff and trial-user information, and production data. The report describes JPMorgan as the largest U.S. bank by assets, with about $4.1 trillion as of June 2026, and says its consumer banking division reports about 78 million active digital customers.

## What to do

Mastercard said the exposure has been contained and it is working with the provider to support impacted cardholders. The cited sources do not include a fixed version or a patch; the companies' statements are the available guidance. JPMorgan said the incident caused no disruption to its services.

<!-- cspell:words Qubole Idera -->
