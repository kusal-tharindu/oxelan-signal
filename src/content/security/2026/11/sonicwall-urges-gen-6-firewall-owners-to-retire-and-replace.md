---
title: SonicWall urges Gen 6 firewall owners to retire and replace the devices
date: 2026-11-20T12:57:54.139Z
format: news
summary: SonicWall is urging customers still running Gen 6 firewalls to retire
  and replace them immediately, warning that internet-facing devices should be
  expected to be actively targeted.
description: SonicWall urged customers to retire Gen 6 firewalls and replace
  them with Gen 8 hardware running SonicOS 8.
tags:
  - security-updates
  - authentication
action: review
status: current
affects:
  - SonicWall Gen 6 firewalls running SonicOS 6.x
briefing:
  changed: SonicWall urged customers still running Gen 6 firewalls to retire and
    replace them immediately and stop exposing the devices on the internet edge.
  why: According to The Hacker News, SonicWall expects internet-facing Gen 6
    firewalls to be actively targeted and says the risk to an unsupported
    firewall grows every day it stays online.
  action: Replace Gen 6 firewalls with a Gen 8 firewall running SonicOS 8, and
    contact an authorized SonicWall partner to plan the migration. Until then,
    disable wide area network (WAN) management and SSL VPN (Secure Sockets Layer
    virtual private network) or restrict it, enforce MFA (multi-factor
    authentication), reset local passwords, and monitor logs.
sources:
  - title: "The Hacker News: SonicWall Warns Gen 6 Firewalls Won't Get Security
      Patches, Even for Critical Flaws"
    url: https://thehackernews.com/2026/11/sonicwall-warns-gen-6-firewalls-wont.html
---

According to The Hacker News, SonicWall has urged customers still running Gen 6 firewalls to retire and replace them immediately and to stop exposing the devices on the internet edge. The report says SonicWall expects internet-facing Gen 6 firewalls to be actively targeted.

## What is affected

The affected products running SonicOS 6.x include TZ350, TZ350W, TZ500, TZ500W, SOHO 250, SOHO 250W, NSA 4600, NSA 5600, NSA 6600, NSa 4650, NSa 5650, NSa 6650, TZ400, TZ400W, TZ600, TZ600P, NSA 3600, NSa 3650, NSa 2650, SOHO, SOHO W, TZ300P, NSa 9250, NSa 9450, NSa 9650, NSv 10 to NSv 1600 (Gen 6 virtual), SuperMassive 9200, 9400, 9600, 9800, NSsp 12800, NSsp 12400, TZ300, TZ300W and NSA 2600. The report quotes SonicWall saying the risk to an unsupported firewall grows every day it stays online.

## What to do

The report says SonicWall advised replacing Gen 6 firewalls with a Gen 8 firewall running SonicOS 8. It says to contact an authorized SonicWall partner to plan the migration. Until replacement, the report says to disable WAN (wide area network) management for HTTPS (Hypertext Transfer Protocol Secure), SSH (Secure Shell), and SNMP (Simple Network Management Protocol) on WAN interfaces.

It says to disable SSL VPN (Secure Sockets Layer virtual private network) or restrict it to known source addresses. It also says to enforce MFA (multi-factor authentication) on every remaining remote-access and admin account and reset local passwords. Finally, the report says to monitor logs closely for unusual logins, configuration changes and traffic.

<!-- cspell:words SNMP -->
