---
title: Microsoft confirms Windows updates cause SQL Server performance issues
date: 2026-11-12T12:45:05.319Z
format: news
summary: Microsoft has confirmed that Windows updates released since the October
  2026 Patch Tuesday leave linked-server connections open, degrading SQL Server
  performance; a fix is due in an out-of-band update.
description: Windows updates since October 2026 leave SQL Server linked-server
  connections open. Microsoft plans an out-of-band fix.
tags:
  - security-updates
  - incident-response
impact: medium
action: review
status: current
affects:
  - SQL Server linked server queries using OLE DB providers
  - Windows 10
  - Windows 11
  - Windows Server 2012 and later
briefing:
  changed: Microsoft has confirmed that Windows updates released since the October
    2026 Patch Tuesday cause SQL Server performance and stability issues, per
    BleepingComputer.
  why: Server queries that leave connections open do not close them, so
    connections accumulate instead of closing.
  action: Contact Microsoft Support for Business for a mitigation until the
    out-of-band Windows update arrives, and treat a manual connection cleanup or
    SQL service restart as temporary, since it can kill active queries.
sources:
  - title: "BleepingComputer: Microsoft: Recent Windows updates cause SQL Server
      performance issues"
    url: https://www.bleepingcomputer.com/news/microsoft/microsoft-recent-windows-updates-cause-sql-server-performance-issues/
---

According to BleepingComputer, Microsoft has confirmed that Windows updates released since the October 2026 Patch Tuesday are causing SQL Server performance and stability issues. The report attributes the problem to server queries that leave connections open after the queries complete, so the connections accumulate instead of closing.

## What is affected

The report says the fault affects SQL Server linked server queries that use OLE DB (Object Linking and Embedding, Database) providers to connect to external databases, with Oracle and PostgreSQL connections among those known to be affected. The Windows builds carrying the updates cover both client and server: Windows 10 and Windows 11, and Windows Server 2012 and later.

## Why it matters

The failure mode is accumulation rather than a crash: the queries finish, and the connections do not. Administrators may observe an increasing number of open connections to external databases even when the associated linked server queries are no longer running.

## A separate update failure

The report also says Microsoft confirmed that the November 2026 security updates are failing to deploy on Windows 11 systems where the October preview update has been installed. Affected users see 0x80070306, 0x800f0989, or 0x800f0993 error codes.

## What to do

Microsoft will fix the SQL Server issue with an out-of-band Windows update to be released over the next few days, according to the report. Until then, IT administrators can reach out to Microsoft Support for Business for a mitigation that addresses the issue until a fix is available. Administrators may also manually close the connections left open or restart the SQL service to address stability and performance problems temporarily, but the report warns that this can kill active queries and may not fully address the issue. The cited sources do not name a fixed build, so plan around the out-of-band release rather than a patch you can apply today.
