---
title: Vietnam-sponsored WeaveLotus campaign targeted Southeast Asian institutions
date: 2026-11-27T17:40:50.754Z
format: news
summary: According to The Hacker News, a Vietnam-sponsored group codenamed
  WeaveLotus ran an espionage campaign against Southeast Asian military,
  government, and legislative organizations between August and September 2026.
description: The report ties WeaveLotus, tracked as RedOps, to intrusions in
  Thailand and the Philippines and reconnaissance in Indonesia.
tags:
  - incident-response
  - authentication
impact: high
action: review
status: current
affects:
  - GeoServer, JasperReports, osTicket, and Laravel installations reached
    through default credentials, web application vulnerabilities, or exposed
    debug mode
  - Keycloak 3.4 server compromised in the Thai government intrusion
briefing:
  changed: The Hacker News reports that a Vietnam-sponsored hacking group,
    codenamed WeaveLotus by SOCRadar, ran an espionage campaign against
    Southeast Asian military, government, and legislative organizations between
    August and September 2026.
  why: The report describes initial access through web application vulnerabilities
    and default credentials in GeoServer, JasperReports, osTicket, and exposed
    Laravel debug mode configurations, followed by reverse SSH tunnels and
    lateral movement into downstream networks.
  action: The cited report gives no fixed version or mitigation step. Compare the
    entry paths it describes against internet-facing systems and follow each
    product's own vendor advisory.
sources:
  - title: "The Hacker News: Suspected Vietnam-Linked Hackers Target Southeast Asia
      in South China Sea Espionage Campaign"
    url: https://thehackernews.com/2026/11/suspected-vietnam-linked-hackers-target.html
---

## What happened

According to The Hacker News, a Vietnam-sponsored hacking group that SOCRadar codenamed WeaveLotus targeted military, government, and legislative organizations in Southeast Asia to gather intelligence on South China Sea defense and military agreements. The outlet reports that the campaign, tracked as RedOps, was observed between August and September 2026. The activity is assessed to have comprised five intrusions in Thailand and the Philippines, plus reconnaissance against Indonesian government organizations.

## Who was targeted

The report says the campaign singled out such institutions in the Philippines, Thailand, and Indonesia, with no evidence that private-sector entities were targeted. The operators began with passive reconnaissance, harvesting Certificate Transparency logs via CertSpotter and crt.sh, before progressing to Nmap port scans and VPN service fingerprinting across more than 30 organizations.

## How the attackers got in

Initial access came primarily from exploiting web application vulnerabilities and default credentials in GeoServer, JasperReports, osTicket, and exposed Laravel debug mode configurations. In the Thai legislative organization intrusion, the attacker used an exposed JasperReports server with the default administrative credentials jasperadmin:jasperadmin. The Thai government organization intrusion involved root SSH (Secure Shell) access to a server running Keycloak 3.4 and dumping its credential database. The actor then established persistent internal network access using reverse SSH tunnels and moved laterally into downstream networks and applications.

## Why it matters

The reported entry paths are default administrative logins, an exposed debug mode, and web application vulnerabilities in named open-source products. The actor did not stop at the first host: the report describes reverse SSH tunnels for persistent access and lateral movement into downstream networks and applications.

## What to do

The cited report gives no fixed version or mitigation step for this campaign. The entry points it describes, web application vulnerabilities and default credentials in GeoServer, JasperReports, osTicket, and exposed Laravel debug mode configurations, are what an exposed estate should be checked against.

<!-- cspell:words Laravel Nmap jasperadmin -->
