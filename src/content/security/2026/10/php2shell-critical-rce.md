---
title: "PHP2Shell: two 9.2 RCE flaws, exploit attempts before disclosure"
date: 2026-10-27
format: news
summary: "CISA urges immediate patching of CVE-2026-109618 and CVE-2026-109619, two critical unauthenticated RCE bugs in PHP. Amazon saw an exploitation attempt four days before disclosure; both are now in CISA's KEV catalog."
description: "PHP2Shell (CVE-2026-109618/109619) is unauthenticated RCE in PHP. Patch to 8.5.12, 8.4.27, 8.3.36 or 8.2.35 now; already exploited."
tags: [cve, incident-response]
impact: critical
action: patch-now
status: current
affects: ["PHP 8.5.x before 8.5.12", "PHP 8.4.x before 8.4.27", "PHP 8.3.x before 8.3.36", "PHP 8.2.x before 8.2.35", "PHP 8.1 and earlier (unsupported, unpatched)"]
briefing:
  changed: "On October 21, 2026, PHP shipped 8.5.12, 8.4.27, 8.3.36 and 8.2.35 to fix two critical bugs, CVE-2026-109618 and CVE-2026-109619, jointly called PHP2Shell (CVSS 9.2). They allow unauthenticated remote code execution on any PHP install that serves web requests. CISA added both to its Known Exploited Vulnerabilities catalog on October 26."
  why: "RCE (remote code execution — running attacker-chosen code on your server) with no login means any internet-facing PHP endpoint is a direct path to a shell. Amazon Threat Intelligence observed an exploitation attempt on October 17, four days before the flaws were public, and multiple actors by release day. There is no configuration change that fully fixes both bugs."
  action: "Inventory every PHP install, including PHP bundled inside other software, and upgrade internet-facing systems first to 8.5.12, 8.4.27, 8.3.36 or 8.2.35. If you cannot patch now, take the system offline or front it with a WAF, and hunt for exploitation starting October 17."
sources:
  - { title: "CISA: Critical Vulnerabilities in PHP Require Immediate Patching", url: "https://www.cisa.gov/news-events/alerts/2026/10/21/critical-vulnerabilities-php-require-immediate-patching" }
  - { title: "AWS Security Blog: Amazon Threat Intelligence identifies PHP2Shell exploitation prior to public disclosure in MadPot", url: "https://aws.amazon.com/blogs/security/amazon-threat-intelligence-identifies-php2shell-exploitation-prior-to-public-disclosure-in-madpot/" }
  - { title: "The Hacker News: CISA confirms active exploitation of two PHP2Shell flaws", url: "https://thehackernews.com/2026/10/cisa-confirms-active-exploitation-of.html" }
  - { title: "CISA: Known Exploited Vulnerabilities catalog", url: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog" }
  - { title: "CrowdStrike: PHP2Shell, what to know", url: "https://www.crowdstrike.com/en-us/resources/crowdcasts/php2shell-what-to-know/" }
---

PHP shipped four releases on October 21, 2026, closing two critical vulnerabilities known as "PHP2Shell": CVE-2026-109618 and CVE-2026-109619, both rated 9.2 on CVSS (the Common Vulnerability Scoring System, a 0–10 severity scale). They allow unauthenticated remote code execution, meaning an attacker can run code on your server without logging in. On October 26, the US Cybersecurity and Infrastructure Security Agency (CISA) added both to its Known Exploited Vulnerabilities (KEV) catalog. US federal civilian agencies have until October 29 under the KEV directive; everyone else should act now.

## What is affected

The flaws affect every PHP installation that serves web requests. CISA names Apache with mod_php, PHP-FPM, php-cgi, FrankenPHP and LiteSpeed. Because PHP is often bundled inside other software, a server can be exposed without anyone installing it directly.

The fix is in PHP 8.5.12, 8.4.27, 8.3.36 and 8.2.35. PHP 8.1 and earlier are out of support and will not be patched; those systems stay vulnerable until upgraded or taken offline.

## Why it matters in production

Unauthenticated RCE on an internet-facing service is close to the worst case: no credentials, no user interaction, a direct path from a web request to a shell. From there an attacker can read secrets, pivot internally, or drop a web shell.

The timeline is worse than the disclosure date suggests. Amazon Threat Intelligence reported an exploitation attempt against MadPot, its honeypot network, on October 17, four days before the flaws were public, from a commercial anonymization network. By release day it saw exploitation attempts from infrastructure suggesting multiple actors. Do not assume disclosure is the first compromise date; investigate from October 17.

## What to do

1. Inventory every system running PHP, including PHP embedded in other products. CISA notes prevalence is often not directly visible.
2. Patch internet-facing systems first: upgrade to 8.5.12, 8.4.27, 8.3.36 or 8.2.35.
3. If you cannot patch now, take the system offline or front it with a web application firewall. A WAF is partial mitigation; upgrading is the only complete fix.
4. Hunt from October 17 onward: POST requests carrying `PHP_SESSION_UPLOAD_PROGRESS` in form uploads, PHP workers spawning shells, and unexpected process or file changes.
5. Where you cannot patch right away, consider blocking multipart file uploads after testing the impact.

There is no configuration-only workaround for both bugs. The version bump is the fix; the log review can tell you whether you were already hit.

