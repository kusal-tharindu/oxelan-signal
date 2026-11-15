---
title: Cursor confirms breach after malicious Claude Code extension served from
  marketplace
date: 2026-11-14T17:42:28.201Z
format: news
summary: Cursor confirmed a breach after a malicious Claude Code extension was
  served from its marketplace, with Cursor estimating up to 5,000 users may have
  received the build.
description: Cursor confirmed a breach after a malicious Claude Code extension
  was served from its marketplace. Affected versions were 2.1.312 and 2.1.313.
tags:
  - incident-response
  - supply-chain
  - data-breach
impact: critical
action: review
status: current
affects:
  - Anthropic.claude-code 2.1.312 and 2.1.313 for Windows and macOS
briefing:
  changed: A maliciously modified Anthropic Claude Code extension was served from
    the Cursor VS Code Extension Marketplace on October 29, 2026, in versions
    2.1.312 and 2.1.313 for Windows and macOS.
  why: The extension attempted to install a persistent SSH backdoor and collected
    host and user information. Cursor confirmed a breach after credentials were
    stolen from Fireworks AI.
  action: Cursor removed the malicious version and blocked distribution, then
    revoked and rotated exposed credentials. Review installs of
    Anthropic.claude-code 2.1.312 and 2.1.313 and the listed SSH key fingerprint
    and attacker endpoint.
sources:
  - title: Security notice — malicious version of Anthropic.claude-code (2.1.312 and
      2.1.313) identified in the Cursor VS Code Extension Marketplace · Cursor
    url: https://cursor.com/blog/claude-code-extension-security-notice
  - title: An update on our recent security incident · Cursor
    url: https://cursor.com/blog/security-incident-update
  - title: "BleepingComputer: Cursor confirms security breach led to malicious
      Claude Code extension"
    url: https://www.bleepingcomputer.com/news/security/cursor-confirms-security-breach-led-to-malicious-claude-code-extension/
---

A maliciously modified version of Anthropic's Claude Code extension was made available in the Cursor VS Code Extension Marketplace. The affected versions were Anthropic.claude-code 2.1.312 and 2.1.313 for Windows and macOS. The malicious builds were not developed by Anthropic, and they were available between about 2:27am Pacific Time and 1:35pm Pacific Time on October 29, 2026.

According to BleepingComputer, Cursor confirmed it suffered a security breach that let hackers distribute the malicious Claude Code extension after stealing credentials from Fireworks AI. The report said the attack began when hackers obtained an access key stored on Fireworks AI, a third-party provider used for AI model training and inference. Cursor's own account says the attacker used a stolen credential from exposed internal data to place malicious copies on the cache used to serve the marketplace.

The extension runs code that attempts to install a persistent SSH (Secure Shell) backdoor. It attempts to add an attacker-controlled SSH key to authorized_keys, enable the local SSH service and open a reverse SSH tunnel. It also attempts persistence through a LaunchAgent on macOS or a scheduled task on Windows. The extension collects host and user information including hostname, username, operating system, architecture, home directory path, environment variable names, working directories, configured Git email and public IP (Internet Protocol) address.

Cursor says at most 5,000 users who requested specific cached versions on October 29 potentially received the malicious build. The malicious build was available for approximately 11 hours.

Cursor removed the malicious version from the marketplace immediately upon detection and blocked further distribution. The company says it moved all inference traffic away from Fireworks, revoked and rotated exposed credentials, rebuilt its extension marketplace and redeployed production infrastructure as a precaution. It audited access and confirmed no other extensions were tampered with. The report also said the attack did not compromise Anthropic's legitimate extension or Open VSX, the extension marketplace Cursor uses; Cursor says Open VSX never had the malware.

## What to check

The malicious extension appends a public key labeled svc-telemetry to SSH authorized keys; the unauthorized key fingerprint is SHA256:0Z6R+DF64Do2nwQic8a7kkfDLNNk4IiK+2U2Rci4htk. The attacker endpoint is 134.209.82.225. The modified VSIX (VS Code extension package) files for 2.1.312 on darwin-arm64 and 2.1.313 on win32-x64 have SHA-256 (Secure Hash Algorithm 256-bit) hashes fcbb327e38e61c4fec795e0d0591f52cd1014b813d20a5912104953c3a17c364 and 6786ec90cbd45949695bd7805c9fbb26cfc91bc5fc897de0183d9bcb9cb21731.
