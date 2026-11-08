---
title: Dark Project offers ransomware partners 80% of attack proceeds
date: 2026-11-08T06:55:14.431Z
format: news
summary: A ransomware group called Dark Project is recruiting partners with an
  offer of 80% of proceeds, and its published victim records cover 38
  organizations across eight countries.
description: Dark Project offers affiliates 80% of attack proceeds, and its
  published victim records span manufacturing, healthcare, and construction.
tags:
  - malware
impact: high
action: review
status: current
affects:
  - Windows environments
briefing:
  changed: According to Cyber Security News, a ransomware group called Dark
    Project is recruiting criminal partners with an offer of 80% of proceeds
    from successful attacks.
  why: The report's victim records cover organizations in eight countries, and it
    describes initial access through phishing, exposed Remote Desktop Protocol
    services, and compromised credentials.
  action: "Review the hardening steps the report cites: patching, stronger access
    controls, monitoring for suspicious activity, and secure backups."
sources:
  - title: "Cyber Security News: New Dark Project Ransomware Group Offers Hackers
      80% Commission to Expand Cyberattacks"
    url: https://cybersecuritynews.com/new-dark-project-ransomware-group/
---

According to Cyber Security News, a ransomware group called Dark Project is recruiting criminal partners with an offer of 80% of proceeds from successful attacks. The report says the group was first observed in June 2026.

## How the partner program works

The report describes a partner program in which affiliates receive 80% of proceeds while the operators retain 20% for platform services and reporting. Recruitment follows four stages: application, vetting and onboarding, deployment, and commission settlement, and applicants contact the group through Tox. The advertised infrastructure includes a Tor-hosted operations dashboard, agents supplied in EXE and BIN formats, and a social-engineering simulation suite.

## The victims listed so far

The group's published victim records cover 38 organizations across eight countries, with the United States accounting for 30 listings. Manufacturing accounts for 12 reported victims, healthcare for seven, and construction for four. Victim disclosures peaked in August 2026, when 20 organizations were listed, following four in June and none in July.

## Why it matters in production

According to the report, Gurucul describes initial access through phishing, exposed Remote Desktop Protocol (RDP) services, compromised credentials, and VPN (virtual private network) access sourced from infostealer logs or initial access brokers. The report says the operation targets Windows environments and follows double extortion, stealing sensitive information before encryption and threatening publication if negotiations fail. Dark Project's Tor leak site serves as its public pressure channel, publishing alleged victim details when the operators seek additional leverage.

## What to do

Gurucul recommends patching, stronger access controls, suspicious-activity monitoring, and secure backups against Dark Project, according to the report. The report does not name fixed versions or a configuration-only fix for the group's activity.

<!-- cspell:words Gurucul -->
