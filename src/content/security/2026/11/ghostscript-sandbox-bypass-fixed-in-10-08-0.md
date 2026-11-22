---
title: Ghostscript sandbox bypass fixed in 10.08.0
date: 2026-11-22T06:42:50.928Z
format: news
summary: CVE-2026-125396 is a -dSAFER bypass in Ghostscript before 10.08.0,
  fixed in that release; the report says there are no known attacks.
description: CVE-2026-125396 is a Ghostscript -dSAFER bypass before 10.08.0. The
  fix is in 10.08.0; no attacks are reported.
tags:
  - cve
  - supply-chain
impact: high
action: review
status: current
affects:
  - ArtifexSoftware ghostpdl before 10.08.0
  - Debian 12 (Bookworm)
  - Amazon Linux 2, 2023, and 2027 Preview (fix pending)
  - SUSE Linux Enterprise 12 SP5 and parts of 15 (fix in progress)
  - SUSE Linux Enterprise Server 16.0 and 16.1 (fix in progress)
  - openSUSE Leap 16.0 and 16.1
briefing:
  changed: CVE-2026-125396 is a -dSAFER bypass in Ghostscript before 10.08.0,
    fixed in 10.08.0.
  why: The flaw can execute arbitrary code through crafted PostScript or PDF
    files, and tests reached Ghostscript through print jobs, email, and web
    uploads.
  action: Upgrade to Ghostscript 10.08.0 and check container images and
    application bundles for their own copies.
sources:
  - title: "NVD: CVE-2026-125396"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-125396
  - title: "The Hacker News: Researchers Demonstrate Ghostscript Sandbox-Escape RCE
      via Crafted File Uploads in Popular Apps"
    url: https://thehackernews.com/2026/11/researchers-demonstrate-ghostscript.html
---

Ghostscript before 10.08.0 contains a -dSAFER bypass tracked as CVE-2026-125396 (Common Vulnerabilities and Exposures). The flaw sits in the .putgstringcopy procedure in gs_fonts.ps, which calls the privileged .forceput operator without checking operand types. A crafted PostScript or PDF (Portable Document Format) document can trigger a type error, recover .forceput through a custom error handler, and use a use-after-free to execute arbitrary code. The CVE was published on November 10, 2026. It has a CVSS (Common Vulnerability Scoring System) 4.0 base score of 8.5 and a CVSS 3.1 base score of 7.8, both high.

According to The Hacker News, Artifex fixed the flaw in Ghostscript 10.08.0 on September 8, 2026. The report says there have been no reports of it being used in attacks. Security firm pwn.ai demonstrated that upload, preview, and print features in about ten common applications could be tricked into feeding a crafted file to Ghostscript. Although the CVE is classified as a local flaw, the firm's tests reached Ghostscript from the network through print jobs, email, and web uploads.

Ghostscript loads fonts in the code path where the use-after-free occurs. A crafted document uses the bug to switch off the checks in -dSAFER, the sandbox that is supposed to stop a document from running commands or reaching files. The report notes that updating the host operating system does not update a separate copy bundled inside a container image or an application. As of the report, several Linux distributions still shipped a vulnerable Ghostscript or had a fix pending.

Debian 12 (Bookworm) was listed as vulnerable. Amazon Linux 2, 2023, and 2027 Preview had a fix pending. SUSE Linux Enterprise 12 SP5 and parts of 15, and SUSE Linux Enterprise Server 16.0 and 16.1, had a fix in progress. openSUSE Leap 16.0 and 16.1 were affected.

## What to do

Upgrade to Ghostscript 10.08.0, the version the report says contains the fix. Check container images and application bundles for their own Ghostscript copies. Until the renderer is updated, require authentication on print queues and limit which file types an image processor accepts. In one test, an AppArmor profile stopped the compromised interpreter from starting a shell.

<!-- cspell:words Ghostscript Artifex ghostpdl putgstringcopy forceput -->
