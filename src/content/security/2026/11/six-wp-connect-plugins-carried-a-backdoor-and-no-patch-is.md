---
title: Six WP Connect plugins carried a backdoor, and no patch is available
date: 2026-11-25T09:50:34.296Z
format: news
summary: CVE-2026-135202 covers backdoored versions of several WP Connect
  WordPress plugins; it has a CVSS score of 9.8 and no patched versions are
  available.
description: CVE-2026-135202 affects WP Connect WordPress plugins with embedded
  backdoor code. WordPress closed them and no patch is available.
tags:
  - cve
  - supply-chain
  - malware
impact: critical
action: review
status: current
affects:
  - Orders Sync to Airtable for WooCommerce 1.0.2
  - Add-On for Contact Form 7 to Notion 1.6.4
  - WP Sync for Notion – Notion to WordPress 1.7.4
  - Add-On for Contact Form 7 to Airtable 2.5.4
  - Add-on Brevo for Gravity Forms 2.6.3
  - Air WP Sync – Airtable to WordPress 2.9.1 through 2.9.4
briefing:
  changed: CVE-2026-135202 was published on November 24, 2026, and describes
    embedded backdoor code in listed WP Connect plugin versions.
  why: The backdoor sends site information to a command-and-control server at
    tascredit-pay.com with TLS certificate verification disabled, and it can run
    shell commands, read, write and delete files, dump the users table including
    password hashes, and drop a webshell into the uploads directory.
  action: Uninstall the affected plugins and run a complete malware scan; no
    patched versions are available.
sources:
  - title: "NVD: CVE-2026-135202"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-135202
  - title: "The Hacker News: WordPress Blocks Six Backdoored WP Connect Plugins
      Before Malicious Releases Go Live"
    url: https://thehackernews.com/2026/11/wordpress-blocks-six-backdoored-wp.html
---

CVE-2026-135202, a Common Vulnerabilities and Exposures (CVE) identifier, is a critical vulnerability in several WP Connect WordPress plugins that contain embedded malicious backdoor code. The CVE record gives it a CVSS (Common Vulnerability Scoring System) base score of 9.8 and classifies it as CWE-506 (Common Weakness Enumeration), embedded malicious code. It was published on November 24, 2026.

The CVE record lists affected versions for Orders Sync to Airtable for WooCommerce 1.0.2, Add-On for Contact Form 7 to Notion 1.6.4, WP Sync for Notion – Notion to WordPress 1.7.4, Add-On for Contact Form 7 to Airtable 2.5.4, Add-on Brevo for Gravity Forms 2.6.3, and Air WP Sync – Airtable to WordPress 2.9.1 through 2.9.4. According to The Hacker News, WordPress removed six WP Connect plugins after they were backdoored on November 22, 2026.

According to The Hacker News, the affected plugins have been collectively installed on more than 3,600 WordPress sites. The report says the supply chain compromise is tracked as CVE-2026-135202 and remains unpatched. It also says the malicious versions were never released and were blocked due to WordPress's cooldown protections under its Protect The Shire initiative. The same report says the compromise suggests the developer's WordPress.org account was compromised and used to push the malicious releases.

## Why it matters

The backdoor sends site information to a command-and-control server at tascredit-pay.com with TLS (Transport Layer Security) certificate verification disabled and executes returned PHP code via eval(). It can also run shell commands, read, write and delete arbitrary files, dump the users table including password hashes, and drop a webshell into the uploads directory.

## What to do

All affected plugins have been closed on WordPress.org and no patched versions are available. Uninstall them and run a complete malware scan.

<!-- cspell:words backdoored Airtable Brevo tascredit webshell Backdoored -->
