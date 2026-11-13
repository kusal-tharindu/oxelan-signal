---
title: Red Hat Quay's critical SQL injection and signing-key takeover flaws
date: 2026-11-12T09:49:15.774Z
format: news
summary: "Red Hat Quay has two new CVEs: CVE-2026-110697, a critical SQL
  injection rated 9.9, and CVE-2026-123710, which lets an unauthenticated client
  install its own signing key."
description: Quay has CVE-2026-110697, a critical SQL injection rated 9.9, and
  CVE-2026-123710, a signing-key takeover. Fixed releases and a /keys mitigation
  exist.
tags:
  - cve
  - authentication
impact: critical
action: review
status: current
affects:
  - Red Hat Quay 3
  - Red Hat Quay 5
briefing:
  changed: Red Hat published CVE-2026-110697, a SQL injection in Quay's robot
    account listing with a CVSS v3.1 score of 9.9, and CVE-2026-123710, a
    signing-key takeover in the service key rotation endpoint.
  why: Both CVEs affect Red Hat Quay 3 and Red Hat Quay 5, and CVE-2026-123710 is
    listed as affecting deployments where the /keys endpoint is reachable by
    untrusted clients.
  action: "For CVE-2026-110697, upgrade to the fixed release for your branch:
    3.9.28, 3.10.28, 3.12.24, 3.14.10, 3.15.9, 3.16.7, 3.17.7 or 3.18.3. For
    CVE-2026-123710, restrict the /keys endpoint at the proxy or load balancer."
sources:
  - title: "NVD: CVE-2026-110697"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-110697
  - title: "NVD: CVE-2026-123710"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-123710
  - title: 2026-110697 - Red Hat Customer Portal
    url: https://access.redhat.com/security/cve/CVE-2026-110697
  - title: 2026-123710 - Red Hat Customer Portal
    url: https://access.redhat.com/security/cve/CVE-2026-123710
  - title: "SecurityWeek: Critical Red Hat Quay Vulnerability Could Expose Private
      Container Images"
    url: https://www.securityweek.com/critical-red-hat-quay-vulnerability-could-expose-private-container-images/
---

## What changed

Two vulnerabilities in Red Hat Quay were published on November 11, 2026. CVE-2026-110697 is a SQL LIKE wildcard injection in the robot account listing function: it builds a SQL LIKE pattern from user-controlled namespace names without escaping wildcard metacharacters, and Red Hat classifies it under CWE-89 (Common Weakness Enumeration), the SQL injection category. CVE-2026-123710 is a signing-key takeover in the service key rotation endpoint. CVE-2026-110697 was discovered by Dave O'Connor of Red Hat.

## Who is affected

Both CVEs affect Red Hat Quay 3 and Red Hat Quay 5. CVE-2026-123710 affects deployments where the /keys endpoint is reachable by untrusted clients.

## Why it matters

CVE-2026-110697 carries a CVSS (Common Vulnerability Scoring System) v3.1 base score of 9.9, rated Critical. For CVE-2026-123710, an unauthenticated client can obtain an anonymous registry token with an audience it controls, present that token to the service key rotation endpoint, and install its own approved signing key with no expiry. According to SecurityWeek, fixes for both vulnerabilities were merged into Quay's GitHub repository on November 11, the day both CVEs were published.

## What to do

Red Hat fixed CVE-2026-110697 in these releases: 3.9.28, 3.10.28, 3.12.24, 3.14.10, 3.15.9, 3.16.7, 3.17.7, and 3.18.3. That flaw is already fixed on Quay.io. For CVE-2026-123710, the cited sources give a mitigation rather than a fixed release: restrict access to the /keys endpoint at the proxy or load balancer so only trusted internal components can reach it.
