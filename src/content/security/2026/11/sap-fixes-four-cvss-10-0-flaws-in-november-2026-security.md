---
title: SAP fixes four CVSS 10.0 flaws in November 2026 Security Patch Day
date: 2026-11-10T10:42:12.242Z
format: news
summary: SAP fixed four flaws that attackers could exploit without logging in,
  all rated CVSS 10.0; one is an authentication bypass in SAP NetWeaver AS ABAP
  tracked as CVE-2026-120017.
description: SAP fixed four flaws that attackers could exploit without logging
  in, all rated CVSS 10.0, including a SAML authentication bypass in NetWeaver
  AS ABAP.
tags:
  - cve
  - authentication
impact: critical
action: review
status: current
affects:
  - SAP NetWeaver AS ABAP and ABAP Platform (SAML2 Service Provider)
  - SAP_BASIS 702, 731, 740, 750, 751, 752, 753, 754, 755, 756, 757, 758, 816,
    920, 921, 922
briefing:
  changed: SAP fixed four flaws that attackers could exploit without logging in,
    all rated CVSS 10.0, in its November 2026 Security Patch Day;
    CVE-2026-120017 is an authentication bypass in SAP NetWeaver AS ABAP and
    ABAP Platform (SAML2 Service Provider).
  why: According to The Hacker News, on affected SAML setups an attacker could use
    CVE-2026-120017 to log in as privileged users, with a full compromise
    possibly reaching connected systems.
  action: Apply SAP Note 3849308 for CVE-2026-120017; The Hacker News reports
    there is no workaround, so the correction instructions or listed support
    package are the only fix.
sources:
  - title: "NVD: CVE-2026-120017"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-120017
  - title: "The Hacker News: SAP Patches Four CVSS 10.0 Flaws, Including Two
      Enabling Remote Code Execution"
    url: https://thehackernews.com/2026/11/sap-patches-four-cvss-100-flaws.html
---

According to The Hacker News, SAP fixed four flaws that attackers could exploit without logging in, all rated CVSS (Common Vulnerability Scoring System) 10.0, in its November 2026 Security Patch Day. One of them is tracked as CVE-2026-120017 in the Common Vulnerabilities and Exposures (CVE) system and affects SAP NetWeaver AS ABAP and ABAP Platform (SAML2, Security Assertion Markup Language 2, Service Provider).

## What is affected

The flaw comes from insufficient verification of incoming authentication assertions, which allows authentication bypass and impersonation of arbitrary users. SAP_BASIS versions 702, 731, 740, 750, 751, 752, 753, 754, 755, 756, 757, 758, 816, 920, 921, and 922 are listed as affected. The record classifies it as CWE-347 (Common Weakness Enumeration).

## Why it matters

The report says that on affected SAML setups, an attacker could use CVE-2026-120017 to log in as privileged users, with a full compromise possibly reaching connected systems. CVE-2026-120017 itself has a CVSS 3.1 base score of 10.0, CRITICAL.

## What to do

The report lists SAP Note 3849308 as the fix for CVE-2026-120017. It says there is no workaround, so the correction instructions or the listed support package are the only fix.

<!-- cspell:words ABAP -->
