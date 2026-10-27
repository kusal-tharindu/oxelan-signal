---
title: "MALFEX hides its npm loader in a native Windows addon"
date: 2026-10-27
format: news
summary: "The MALFEX campaign moved its npm loader into a compiled Windows addon that runs on require, not on install. It targets developer machines, and ignore-scripts does not stop it."
tags: [supply-chain, npm, malware, ci-cd, package-security]
impact: high
action: review
status: current
affects: ["imgdecode 1.0.0–1.0.3", "tlxbnhd (all versions)", "tldriver (all versions)", "mxdriver (all versions)", "img-to-native (all versions)"]
briefing:
  changed: "Checkmarx, CloudSEK and SafeDep documented MALFEX, a long-running npm campaign run by a single operator since at least August 2023. Its latest loader, in the package imgdecode, hides in a compiled Windows native addon that executes on require() through the N-API module initializer — no install script is involved."
  why: "The payload runs when a developer or application loads the package, not when npm installs it, so ignore-scripts does not help. It targets interactive Windows machines and steals browser and Discord credentials. Advisory coverage lagged publication by days, and two packages carried no advisory at all."
  action: "Search lockfiles and node_modules for the named packages, treat any Windows host that required them as needing credential rotation, and remove the packages. Block install scripts as defence in depth, not as the primary control here."
sources:
  - { title: "SafeDep — MALFEX moves its npm loader into a native Windows DLL", url: "https://safedep.io/malfex-imgdecode-npm-native-addon-loader/" }
  - { title: "Checkmarx — MALFEX npm malware campaign: three payloads and an adversary that signs their work", url: "https://checkmarx.com/zero-post/malfex-npm-malware-campaign-three-payloads-and-an-adversary-that-signs-their-work/" }
  - { title: "CloudSEK — MALFEX, a malicious npm postinstall supply-chain campaign", url: "https://www.cloudsek.com/blog/malfex-malicious-npm-postinstall-supply-chain-campaign" }
  - { title: "The Hacker News — MALFEX npm package 'imgdecode' hides shellcode loader in Windows native addon", url: "https://thehackernews.com/2026/10/malfex-npm-package-imgdecode-hides.html" }
updates:
  - { date: 2026-10-27, note: "Corrected the trigger (load-time require, not install-time), the remediation, and the operator timeline after a source review; see SafeDep and CloudSEK." }
---

MALFEX is a long-running npm supply-chain campaign that Checkmarx, CloudSEK and SafeDep have all
documented. It is run by a single operator active since at least August 2023. Its current trick is
worth understanding because it defeats a control a lot of teams now rely on.

The package that drew attention, `imgdecode`, was uploaded on 30 September 2026. From version 1.0.1
its loader lives inside a compiled Windows native addon (`prebuilds/win32-x64/imgdecode.node`).
Requiring the package runs the loader in the N-API module initializer. There is no `preinstall`,
`install` or `postinstall` script to block.

## Why this changes the calculus

Most supply-chain guidance for npm leans on `ignore-scripts`, because most install-time malware
announces itself through lifecycle scripts. MALFEX's current loader does not. It fires on
`require()`, when a developer or an application loads the package — which `ignore-scripts` does not
touch. It targets interactive Windows machines, not CI workers, and the payload is an information
stealer focused on browser and Discord credentials.

## The advisory gap

Six of the eight known packages carried OSV malware advisories issued between 22 and 30 September.
Two had none, and three were still installable as of 29 September before npm moved to seize them.
If your control is "we only install packages with clean advisory records," this is the failure mode:
the record arrives after the package.

One clarification on a line you may have read elsewhere: Checkmarx's "an adversary that signs their
work" refers to operator branding — account names, git identity, a consistent key — not code
signing. No certificate is involved, so this is not a story about defeating signature verification.

## What to do

1. Search your lockfiles, `node_modules` and Windows build hosts for the named packages. The
   Checkmarx and CloudSEK write-ups carry the full list with malware IDs.
2. If a Windows host loaded any of them, rotate browser and Discord credentials from that host and
   treat the machine as compromised. The payload is a stealer; credential theft is the expected
   outcome.
3. Remove the packages. `ignore-scripts` is still worth having — as defence in depth for the next
   campaign, not as the fix for this one.
4. Watch for the operator's next loader. The pattern is to move the payload to a code path the
   current control ignores.

For the response timeline, see
[the first 60 minutes of a supply-chain incident](/security/supply-chain-first-60-minutes/).
