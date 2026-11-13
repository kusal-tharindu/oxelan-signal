---
title: MongoDB patches a critical pre-auth use-after-free in replica set members
date: 2026-11-12T10:43:10.303Z
format: news
summary: MongoDB fixed CVE-2026-118383, a use-after-free that unauthenticated
  requests can trigger in replica set members, with releases for every supported
  branch.
description: MongoDB fixed CVE-2026-118383, a critical use-after-free reachable
  without authentication in replica set members, on each supported branch.
tags:
  - cve
  - security-updates
impact: critical
action: review
status: current
affects:
  - MongoDB Server 9.0.0 through versions before 9.0.7
  - MongoDB Server 8.3.0 through versions before 8.3.16
  - MongoDB Server 8.0.0 through versions before 8.0.37
  - MongoDB Server 7.0.0 through versions before 7.0.48
  - MongoDB Server 6.0.0 through versions before 6.0.30
  - MongoDB Server 5.0.0 through versions before 5.0.35
  - MongoDB Server 4.4.0 through versions before 4.4.32
briefing:
  changed: MongoDB published CVE-2026-118383, a use-after-free in the replication
    component of MongoDB Server, and released fixed versions for each supported
    branch.
  why: Requests that do not require authentication can trigger the flaw, and the
    server may terminate unexpectedly, which can leave a replica set without a
    primary.
  action: "Upgrade every replica set member to a fixed release: 9.0.7, 8.3.16,
    8.0.37, 7.0.48, 6.0.30, 5.0.35 or 4.4.32."
sources:
  - title: "NVD: CVE-2026-118383"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-118383
  - title: "The Hacker News: Critical Pre-Auth MongoDB Flaw (CVE-2026-118383) Can
      Crash Lagging Servers on Failover"
    url: https://thehackernews.com/2026/11/critical-pre-auth-mongodb-flaw-cve-2026.html
---

MongoDB published CVE-2026-118383 on November 10, 2026: a use-after-free (a memory bug where freed data is still used) in the replication component of MongoDB Server, classified as CWE-416. Replica set members are affected, including the shard and config server replica set members of sharded clusters; standalone mongod instances are not. The record lists the affected ranges by branch: 9.0.0 through versions before 9.0.7, 8.3.0 through versions before 8.3.16, 8.0.0 through versions before 8.0.37, 7.0.0 through versions before 7.0.48, 6.0.0 through versions before 6.0.30, 5.0.0 through versions before 5.0.35, and 4.4.0 through versions before 4.4.32.

## Why it matters

The flaw can be triggered by requests that do not require authentication, and it may cause the server to terminate unexpectedly or, under certain conditions, allow arbitrary code execution in the server process context. The record gives a CVSS 4.0 base score of 9.5 and a CVSS 3.1 base score of 9.0, both critical.

According to The Hacker News, MongoDB said it found the flaw itself and was not aware of any attempts to exploit it. The same report says researchers at Datadog Security Labs reproduced the crash in a lab; on version 8.0.34 the member crashed with a segmentation fault, leaving the lab cluster without a primary. In the fixed version 8.0.37, the server rejected both requests as unauthorized and the member kept running, and the researchers did not achieve code execution.

## What to do

MongoDB fixed CVE-2026-118383 in 9.0.7, 8.3.16, 8.0.37, 7.0.48, 6.0.30, 5.0.35 and 4.4.32. According to The Hacker News, self-managed deployments need the fixed release on every replica set member, while MongoDB Atlas clusters automatically receive fixed versions during maintenance. The report also notes that the 8.2 branch reached end of life on July 31 and no longer receives fixes, including security fixes. Until a member can be upgraded, the researchers advise restricting network access to the database to only the systems that need it. One part of the fix lets only system users use readConcern.afterOpTime.
