---
title: GPGME double-free flaw can corrupt memory via crafted OpenPGP keys
date: 2026-11-23T18:40:10.714Z
format: news
summary: CVE-2026-129975 is a double-free flaw in GPGME triggered by a malicious
  OpenPGP key; fixed releases include GPGME 2.3.1 and Gpg4win 5.1.2.
description: CVE-2026-129975 is a double-free in GPGME; a crafted OpenPGP key
  can corrupt memory. Fixed versions include GPGME 2.3.1 and Gpg4win 5.1.2.
tags:
  - cve
  - security-updates
impact: high
action: review
status: current
affects:
  - software that uses GPGME before version 2.3.0
briefing:
  changed: CVE-2026-129975 is a double-free flaw in GPGME, the library programs
    use to work with GnuPG; a malicious OpenPGP key with an unusually long user
    ID can trigger it.
  why: The flaw can corrupt process memory, potentially leading to arbitrary code
    execution or a denial-of-service crash, and Red Hat classified it as
    Important severity.
  action: Upgrade to GPGME 2.3.1; on Windows, Gpg4win 5.1.2 bundles the fixed
    library, and the legacy branch has a fixed release, 1.24.4.
sources:
  - title: "NVD: CVE-2026-129975"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-129975
  - title: 2026-129975 - Red Hat Customer Portal
    url: https://access.redhat.com/security/cve/CVE-2026-129975
  - title: "The Hacker News: GnuPG Warns Critical GPGME Flaw Could Expose App Data
      via Malicious OpenPGP Keys"
    url: https://thehackernews.com/2026/11/gnupg-warns-critical-gpgme-flaw-could.html
---

CVE-2026-129975 is a double-free flaw in GPGME. According to The Hacker News, GPGME is the library programs use to work with GnuPG, and the flaw sits in `read_status()` and `read_colon_line()`, routines that read status lines and key listings coming back from GnuPG.

## What is affected

The report says a malicious OpenPGP key with an unusually long user ID can trigger the bug. It also says the flaw affects all software that uses GPGME before version 2.3.0, whether the library is loaded as a shared library, a Windows DLL, or statically linked into the program.

## Why it matters

The flaw can corrupt process memory, potentially leading to arbitrary code execution or a denial-of-service (DoS) crash. The CVE record gives a base score of 8.1 (High) under version 3.1 of the Common Vulnerability Scoring System (CVSS), and Red Hat classified the vulnerability as Important severity. The report says the project has not reported any attacks exploiting the flaw.

## What to do

The report says the fixed library version is GPGME 2.3.1; upgrade to that release. On Windows, Gpg4win 5.1.2 bundles the fixed library. On the legacy branch, use the fixed release 1.24.4.

<!-- cspell:words GPGME -->
