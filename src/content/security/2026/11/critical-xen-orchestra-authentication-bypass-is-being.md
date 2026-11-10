---
title: Critical Xen Orchestra authentication bypass is being exploited
date: 2026-11-10T16:59:08.543Z
format: news
summary: Vates rates the Xen Orchestra login token flaw VSA-2026-062 as
  Critical, confirms it is being actively exploited, and ships fixes in Xen
  Orchestra 6.9.1 and 6.10.0.
description: "Vates fixes a critical Xen Orchestra authentication bypass tracked
  as VSA-2026-062 and confirms active exploitation. Fixed releases: 6.9.1 and
  6.10.0."
tags:
  - cve
  - authentication
impact: critical
action: patch-now
status: current
affects:
  - Xen Orchestra
  - Xen Orchestra Appliance (XOA)
briefing:
  changed: Advisory VSA-2026-062 describes an empty-object login token flaw rated
    Critical in Xen Orchestra and Xen Orchestra Appliance, and Vates confirmed
    the vulnerability is being actively exploited.
  why: An attacker with network access to the management interface can bypass
    authentication, act with Admin privilege, and reach arbitrary code execution
    on managed pools and full XCP-ng node takeover as root.
  action: Upgrade to Xen Orchestra 6.9.1 or 6.10.0 with the matching xo-server
    packages; if you cannot patch, restrict management access to dedicated
    networks, block known malicious addresses and rotate credentials.
sources:
  - title: Security advisories (VSA) | Vates VMS Documentation
    url: https://docs.vates.tech/security-advisories/advisories/
  - title: "BleepingComputer: Critical Xen Orchestra auth bypass flaw exploited to
      hijack VM servers"
    url: https://www.bleepingcomputer.com/news/security/critical-xen-orchestra-auth-bypass-flaw-exploited-to-hijack-vm-servers/
---

Advisory VSA-2026-062 describes an empty-object login token vulnerability rated Critical in Xen Orchestra and the Xen Orchestra Appliance (XOA), published 2026-11-10. According to BleepingComputer, Vates confirmed that the vulnerability is being actively exploited.

## What is affected

According to BleepingComputer, the flaw tracked as VSA-2026-062 affects Xen Orchestra and XOA, and allows remote attackers with network access to the management interface to bypass authentication using a specially crafted cookie. The report says a CVE identifier and CVSS score have not been assigned yet.

## Why it matters

The reported consequence is not limited to a failed login check: an adversary can bypass authentication and perform actions with Admin privilege, and a Xen Orchestra compromise can lead to arbitrary code execution on managed pools and a full XCP-ng node takeover as root. The same report credits security researchers Filip Magic and Christoffer Olsen of TDC NET Security with discovering the vulnerability.

## Fixed versions

Vates released Xen Orchestra 6.9.1 (stable) and 6.10.0 (latest) to fix the vulnerability, including patched xo-server packages 5.211.2 and 5.213.1, according to the report.

## What to do

Upgrade Xen Orchestra to a fixed release, 6.9.1 on the stable branch or 6.10.0 on the latest branch, together with the matching xo-server package. Administrators who cannot patch should restrict Xen Orchestra access to dedicated management networks and block known malicious IP addresses. Companies that believe they are compromised should rotate passwords and secrets used by their virtualization environments.

## Detection

Vates indicators of compromise include connections to 91.211.251.112:8001 or ustar3rqxgnskzgnwkgpofgtvxevm6cx3lxdbwt4mndtveqyaohid.onion:3333, according to the report. HTTP requests containing authenticationToken=j:%7B%7D or authenticationToken=j:{} are also listed as suspicious authentication cookies.

<!-- cspell:words Vates Filip Christoffer ustar rqxgnskzgnwkgpofgtvxevm lxdbwt mndtveqyaohid -->
