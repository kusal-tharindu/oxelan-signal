---
title: Barracuda Flaws Can Be Chained to Bypass Authorization and Gain Root Access
date: 2026-11-06T04:49:19.792Z
format: news
summary: CVE-2026-111560 is a command injection flaw with CVSS 8.6 that affects
  multiple Barracuda appliances; chained with CVE-2026-116606 it can bypass
  authorization and gain root access.
description: Barracuda command injection CVE-2026-111560 (CVSS 8.6) can chain
  with CVE-2026-116606 to bypass authorization and gain root access.
tags:
  - cve
  - authentication
impact: high
action: review
status: current
affects:
  - Barracuda Email Security Gateway (ESG) <= 9.4.0.27
  - Barracuda Load Balancer ADC <= 6.4.0
  - Barracuda Web Application Firewall (WAF) <= 11.0.1
  - Barracuda Web Security Gateway (WSG) <= 16.1.100.100
  - Barracuda Message Archiver (BMA) <= 5.5.4.0
  - Barracuda WAF Control Center (WCC) <= 2.2.1
briefing:
  changed: Barracuda disclosed CVE-2026-111560 and CVE-2026-116606 on November 2,
    2026; CVE-2026-111560 is a command injection flaw with CVSS 8.6.
  why: An authenticated administrator can inject OS commands through the timezone
    configuration field, which execute with root privileges. When chained with
    CVE-2026-116606, an attacker can bypass authorization controls and obtain
    root access.
  action: Restrict access to administrative interfaces to trusted internal
    networks. Verify systems are running the latest firmware and have received
    all security patches.
sources:
  - title: "NVD: CVE-2026-111560"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-111560
  - title: Pre-Authentication Authorization Bypass and Command Injection
      Vulnerabilities in Certain Barracuda Products
    url: https://trust.barracuda.com/security/pre-authentication-authorization-bypass-command-injection
---

Barracuda disclosed CVE-2026-111560 and CVE-2026-116606 on November 2, 2026. CVE-2026-111560 is a command injection vulnerability with a CVSS score of 8.6, classified as CWE-78. If exploited in combination with CVE-2026-116606, an attacker could bypass authorization controls and obtain root access to the device.

## Affected products

CVE-2026-111560 affects Barracuda Email Security Gateway (ESG) versions up to and including 9.4.0.27, Barracuda Load Balancer ADC up to and including 6.4.0, Barracuda Web Application Firewall (WAF) up to and including 11.0.1, Barracuda Web Security Gateway (WSG) up to and including 16.1.100.100, Barracuda Message Archiver (BMA) up to and including 5.5.4.0, and Barracuda WAF Control Center (WCC) up to and including 2.2.1.

## Why it matters

An authenticated administrator can inject OS commands through the timezone configuration field, and those commands execute with root privileges. When chained with CVE-2026-116606, the flaws can allow an attacker to bypass authorization controls and obtain root access.

## What to do

Barracuda recommends restricting access to administrative interfaces to trusted internal networks. Customers should verify that their systems are running the latest firmware versions and have received all security patches.
