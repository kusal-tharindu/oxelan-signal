---
title: F5 BIG-IP APM SAML flaw lets unauthenticated requests stop TMM
date: 2026-11-20T14:49:06.532Z
format: news
summary: CVE-2026-126822 lets a remote unauthenticated attacker cause a denial
  of service on BIG-IP systems where a SAML service-provider Access Profile is
  applied to a virtual server. F5 has published fixed builds.
description: "CVE-2026-126822: BIG-IP APM with a SAML service-provider Access
  Profile can lose TMM to unauthenticated requests. F5 has fixed builds."
tags:
  - cve
  - authentication
impact: high
action: review
status: current
affects:
  - BIG-IP 21.1.0
  - BIG-IP 17.5.0
  - BIG-IP 17.1.0
briefing:
  changed: F5 has published CVE-2026-126822, a denial-of-service flaw that can
    terminate the Traffic Management Microkernel (TMM) when BIG-IP APM is
    provisioned with a SAML service-provider Access Profile applied to a virtual
    server.
  why: The record describes a remote unauthenticated attacker, so triggering the
    failure does not require valid credentials.
  action: "Upgrade to the fixed build for your branch: BIGIP-21.1.0.4.0.19.3-ENG,
    BIGIP-17.5.1.11.0.61.12-ENG or BIGIP-17.1.3.7.0.21.4-ENG."
sources:
  - title: "NVD: CVE-2026-126822"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-126822
---

F5 has published CVE-2026-126822, a denial-of-service vulnerability in BIG-IP APM, describing how undisclosed requests can cause the Traffic Management Microkernel (TMM) to terminate when a SAML service-provider Access Profile is in use. The record states that a remote unauthenticated attacker can cause a denial of service on the BIG-IP system. Scoring is 8.7 under CVSS (Common Vulnerability Scoring System) v4.0 and 7.5 under v3.1, each rated high.

## What is affected

The flaw applies when BIG-IP APM is provisioned, an Access Profile is configured as a SAML SP (service provider) and that profile is applied to a virtual server. F5 lists affected versions, each paired with its own fixed build: BIG-IP 21.1.0, fixed in BIGIP-21.1.0.4.0.19.3-ENG; BIG-IP 17.5.0, fixed in BIGIP-17.5.1.11.0.61.12-ENG; and BIG-IP 17.1.0, fixed in BIGIP-17.1.3.7.0.21.4-ENG. The record classifies the weakness as CWE-191, a Common Weakness Enumeration identifier.

## Why it matters

A remote unauthenticated attacker can use the flaw to cause a denial of service, so triggering it does not depend on valid credentials. F5 published the record on November 18, 2026. The CISA SSVC (Stakeholder-Specific Vulnerability Categorization) assessment in that record lists exploitation as none.

## What to do

Upgrade to the fixed build for your branch: BIG-IP 21.1.0 to BIGIP-21.1.0.4.0.19.3-ENG, BIG-IP 17.5.0 to BIGIP-17.5.1.11.0.61.12-ENG, and BIG-IP 17.1.0 to BIGIP-17.1.3.7.0.21.4-ENG. These are the status changes from affected to unaffected that F5 records for this CVE.

<!-- cspell:words Microkernel -->
