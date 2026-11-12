---
title: Ethersphere's release automation pushed wallet-stealing malware through
  bee-js and Swarm Desktop
date: 2026-11-12T01:49:43.974Z
format: news
summary: Attackers used Ethersphere's release automation to publish malicious
  bee-js and Swarm Desktop releases that steal wallet keys and install
  backdoors.
description: Malicious bee-js 13.3.0 and Swarm Desktop 0.56.2 releases stole
  wallet keys and installed backdoors; clean versions are available.
tags:
  - supply-chain
  - npm
  - malware
  - incident-response
impact: critical
action: review
status: current
affects:
  - "@ethersphere/bee-js 13.3.0"
  - Swarm Desktop 0.56.2
briefing:
  changed: Attackers used Ethersphere's release automation to publish bee-js
    13.3.0 and Swarm Desktop 0.56.2, which downloaded wallet-stealing code and
    backdoors.
  why: The bee-js package was built by the project's real workflow and carried
    valid provenance, so the release looked like a normal project build.
  action: Move Swarm Desktop installs to 0.56.3, pin bee-js to 13.2.0, remove the
    listed backdoor artifacts, and treat any node key used with 0.56.2 as
    stolen.
sources:
  - title: "The Hacker News: Hackers Compromise Ethersphere's bee-js and Swarm
      Desktop to Deliver Wallet-Stealing Malware"
    url: https://thehackernews.com/2026/11/hackers-compromise-etherspheres-bee-js.html
---

## What happened

According to The Hacker News, attackers used Ethersphere's own release automation to publish malicious versions of bee-js 13.3.0 and Swarm Desktop 0.56.2. The bee-js release was the latest version on npm for about 75 minutes, from 00:09 to 01:25 UTC (Coordinated Universal Time) on November 9, 2026. Swarm Desktop 0.56.2 appeared on GitHub at about 00:36 UTC that day and was withdrawn about 8.5 hours later.

Both releases downloaded and ran code built to steal the Swarm node wallet key and its stored password and to install a backdoor on Windows, macOS and Linux. The bee-js 13.3.0 loader ran as a postinstall script that npm executes automatically during installation unless install scripts are disabled. Both releases came from bee-worker, Ethersphere's release automation account, and neither change was signed or submitted as a pull request.

The npm publishing workflow needed no approval and published the package in 73 seconds. Because the project's real workflow built it, the package carried valid provenance. The macOS app was signed with the project's Developer ID and notarized by Apple.

How the attackers gained access remained unclear; the maintainer's incident note blamed the theft of continuous integration (CI) credentials and secrets. The loader downloaded further code from api.frameworkmetrics[.]xyz and ran it with the user's permissions.

## Why it matters

The downloaded code looked for config.yaml and data-dir/keys/swarm.key in Swarm Desktop's data folder and sent them to the attackers' server. On Linux and macOS the backdoor was a Go remote shell called evjawbreaker saved in a hidden ~/.solidity folder. On Windows it installed a genuine ScreenConnect remote-access client signed by ConnectWise. The GitHub advisory for bee-js 13.3.0 said any computer with the package installed or running should be considered fully compromised.

## What to do

Ethersphere maintainers withdrew Swarm Desktop 0.56.2 and replaced it with 0.56.3. The auto-updater will move installs of 0.56.2 to 0.56.3, but Linux packages must be replaced by hand. Pin bee-js to 13.2.0 and clear cached copies of 13.3.0, including npm mirrors.

Updating, reinstalling or removing the app or package does not remove the installed backdoor artifacts. Remove the ~/.solidity/ folder, the solidity-langsupport-runner.service user service on Linux, the com.solidity.langsupport.runner LaunchAgent on macOS, and the ScreenConnect Client (5cbe79c9c25524df) service on Windows. If Swarm Desktop 0.56.2 ever ran, treat the node's key and password as stolen and, from a clean computer, move the node's funds, chequebook and stake to a new key.

<!-- cspell:words Ethersphere's ethersphere frameworkmetrics evjawbreaker Ethersphere langsupport chequebook -->
