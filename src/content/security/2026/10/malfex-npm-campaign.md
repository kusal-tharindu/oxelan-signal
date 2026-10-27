---
title: "MALFEX hides its npm payload in a compiled addon"
date: 2026-10-27
format: news
summary: "Eight malicious npm packages delivered three RAT payloads, loading them from a compiled native addon instead of JavaScript. Two had no malware advisory, and three were still installable days after disclosure."
tags: [supply-chain, npm, malware, ci-cd, package-security]
impact: high
action: review
status: current
affects: ["imgdecode 1.0.x", "tlxbnhd (all versions)", "tldriver (all versions)", "mxdriver (all versions)", "img-to-native (all versions)"]
briefing:
  changed: "Checkmarx and SafeDep detailed the MALFEX campaign: eight malicious npm packages, published from late September 2026, that load Remote Access Trojans through a compiled Node.js native addon rather than in JavaScript. Six carried OSV malware advisories issued between 22 and 30 September; two had none, and three packages were still installable as of 29 September."
  why: "The payload runs at install time, where code review rarely looks, and the operator signs their work — an adaptation to reputation controls that makes signature-based trust less useful. Advisory coverage lagged publication by days, a window in which allowlists and lockfiles pinned nothing."
  action: "Search lockfiles and CI caches for the named packages, treat any build host that installed them as needing credential rotation, and close the gap this exposes: block install scripts and verify provenance rather than trusting signatures alone."
sources:
  - { title: "Checkmarx — MALFEX npm malware campaign: three payloads and an adversary that signs their work", url: "https://checkmarx.com/zero-post/malfex-npm-malware-campaign-three-payloads-and-an-adversary-that-signs-their-work/" }
  - { title: "The Hacker News — MALFEX npm package 'imgdecode' hides shellcode loader in Windows native addon", url: "https://thehackernews.com/2026/10/malfex-npm-package-imgdecode-hides.html" }
  - { title: "npm — imgdecode package page", url: "https://www.npmjs.com/package/imgdecode" }
---

A long-running npm campaign called MALFEX has been documented by Checkmarx and SafeDep. Eight
packages with malicious code were published to npm from late September 2026. They deliver three
Remote Access Trojan payloads, and the technique is the interesting part: instead of obfuscated
JavaScript — the thing most scanning now catches — the loader hides inside a compiled native
Node.js addon, triggered when the package is installed.

The package that drew public attention, `imgdecode`, was uploaded on 30 September 2026 by a user
named `malfexteste8`; the latest version is 1.0.3, and it had been downloaded fewer than a
thousand times when it was reported on 17 October. Low download counts do not make this
irrelevant: campaigns start small, and build machines do not check popularity before installing.

## Two gaps worth naming

**Advisory lag.** Six of the eight packages carried OSV malware advisories issued between 22 and
30 September. Two had none. Three packages — `tlxbnhd`, `tldriver` and `mxdriver` — were still
installable as of 29 September; npm later seized `img-to-native`. If your control is "we only
install packages with clean advisory records," this is the failure mode: the record arrives after
the package.

**Signature theatre.** Checkmarx reports the operator signs their own work. Code signing answers
"who published this," not "should you run it." Teams that recently added signature verification as
a supply-chain control should note that a motivated attacker simply signs the malicious build too.

## What to do

1. Search your lockfiles, `node_modules` caches and CI images for the five named packages. The
   Checkmarx advisory carries the full list of eight with malware IDs.
2. If a build host installed any of them, treat developer and CI credentials on that host as
   compromised and rotate them. The payload is a RAT; theft, not sabotage, is the expected
   outcome.
3. Block lifecycle scripts by default (`ignore-scripts`) so a future package cannot execute at
   install time without an explicit, reviewed exception.
4. Do not weaken signature-based checks — add to them. Signing tells you the publisher is who they
   claim to be; provenance and install-script policy tell you whether running the package is a
   decision a human made.

For the response side — what the first hour of an incident like this looks like — see
[the first 60 minutes of a supply-chain incident](/security/supply-chain-first-60-minutes/).
