---
title: DigiCert breach exposed archived customer data and identity documents
date: 2026-11-06T17:52:28.745Z
format: news
summary: DigiCert says a February 2025 server migration exposed an internal
  system, and an unauthorized account read archived customer data between June
  27 and July 2, 2026.
description: DigiCert is notifying customers after an unauthorized account read
  archived contact data; for some people, identity documents were exposed.
tags:
  - authentication
impact: high
action: review
status: current
affects:
  - DigiCert archived customer records
  - DigiCert customer records containing identification documents
briefing:
  changed: According to BleepingComputer, DigiCert suffered a data breach after a
    February 2025 server migration exposed an internal business system, and an
    investigation on October 19, 2026 confirmed an unauthorized account accessed
    customer information between June 27 and July 2, 2026.
  why: The archived records include names, business contact details and, for some
    people, identification documents such as driver's licenses and passports,
    although DigiCert says the access was read-only.
  action: DigiCert has begun sending breach notifications and says issued
    certificates and customer login credentials remain secure; confirm whether
    your organization received a notice and which records it covered.
sources:
  - title: "BleepingComputer: DigiCert data breach exposes customer information,
      identity documents"
    url: https://www.bleepingcomputer.com/news/security/digicert-data-breach-exposes-customer-information-identity-documents/
---

## What happened

According to BleepingComputer, DigiCert warned that it suffered a data breach after a February 2025 server migration mistakenly exposed an internal business system to the internet, a system that had previously been reachable only over a VPN (virtual private network). DigiCert first discovered unauthorized accounts on that system in June 2026, and on October 19, 2026 a further investigation confirmed that an unauthorized account had accessed customer information between June 27 and July 2, 2026.

## What is affected

The report says the exposed data was a small portion of DigiCert's archived customer records, including names, business email addresses, phone numbers and business addresses. For some people those records also contained personal identification documents such as driver's licenses, passports and utility bills. The system carried a self-registration feature intended for other applications, which let external users create accounts, and an authorization flaw let the unassigned accounts read archived customer information in read-only mode.

## Why it matters

DigiCert says the unauthorized account had read-only access and could not modify records, approve certificate validations or issue certificates. The company also says its certificate authority services (the systems that issue the TLS, or Transport Layer Security, certificates websites present to prove their identity), CertCentral and DigiCert ONE platforms were not compromised, and that customer login credentials and issued certificates remain secure. The damage is therefore to archived personal data rather than to issued certificates, and the report notes the incident was first handled as an account-creation issue rather than a data-access event.

## What to do

DigiCert has begun sending data breach notifications to affected customers. The company says it is still reviewing identification documents to determine who was affected and will notify those people once that review is complete. It also says it has restricted access to the affected system, disabled self-registration and added additional access controls. Those remediation steps sit on DigiCert's own systems, and the cited sources describe no fixed version or customer-side patch for readers to apply, so the practical step is to use the notification to confirm which records of yours were involved.
