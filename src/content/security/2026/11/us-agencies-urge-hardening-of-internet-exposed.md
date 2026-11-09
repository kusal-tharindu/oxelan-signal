---
title: US agencies urge hardening of internet-exposed refrigeration controllers
date: 2026-11-09T10:47:23.031Z
format: news
summary: A joint US fact sheet warns that attackers are targeting industrial
  refrigeration and cold chain controllers and urges operators to reduce
  internet exposure.
description: A joint US fact sheet warns of attacks on refrigeration and cold
  chain controllers and lists steps to reduce exposure.
tags:
  - incident-response
  - authentication
impact: high
action: review
status: current
affects:
  - industrial refrigeration and cold chain monitoring systems
  - internet-accessible electronic temperature controllers
  - commercial refrigeration controllers in retail grocery and cold storage
    facilities
briefing:
  changed: The US Cybersecurity and Infrastructure Security Agency (CISA), the
    Federal Bureau of Investigation (FBI), the Department of Health and Human
    Services (HHS), the US Department of Agriculture (USDA), and the Department
    of Transportation (DoT) published a joint fact sheet warning of ongoing
    cyber threat activity targeting industrial refrigeration and cold chain
    monitoring systems.
  why: Attackers are targeting unpatched or internet-accessible temperature and
    refrigeration controllers; successful exploitation could change
    temperatures, cause fire hazards, spoil inventory, and shorten system
    service life.
  action: Eliminate public internet exposure of control system devices,
    particularly controller panels; change default passwords; apply patches;
    replace unsupported legacy devices; and isolate operational technology (OT)
    devices on a dedicated virtual local area network (VLAN).
sources:
  - title: CISA, FBI, HHS, USDA, and DOT Urge Critical Infrastructure To Strengthen
      Industrial Refrigeration and Cold Chain Monitoring Systems Cybersecurity |
      CISA
    url: https://www.cisa.gov/news-events/news/cisa-fbi-hhs-usda-and-dot-urge-critical-infrastructure-strengthen-industrial-refrigeration-and-cold
  - title: US Government Partners Urge Hardening Industrial Refrigeration and Cold
      Chain Monitoring Systems | CISA
    url: https://www.cisa.gov/resources-tools/resources/us-government-partners-urge-hardening-industrial-refrigeration-and-cold-chain-monitoring-systems
  - title: US Agencies Urge Hardening of Industrial Refrigeration and Cold Chain
      Systems
    url: https://www.redtigersecurity.com/advisory/us-refrigeration-cold-chain-csa
  - title: "SecurityWeek: US Agencies Urge Organizations to Harden Refrigeration
      Controllers"
    url: https://www.securityweek.com/us-agencies-urge-organizations-to-harden-refrigeration-controllers/
---

## What changed

A joint fact sheet from CISA, the FBI, HHS, USDA, and DoT warns of ongoing cyber threat activity targeting industrial refrigeration and cold chain monitoring systems. Malicious cyber actors are targeting vulnerabilities and weaknesses in unpatched or internet-accessible electronic temperature controllers and commercial refrigeration controllers in retail grocery and cold storage facilities.

## What is affected

These systems are used widely in critical infrastructure sectors including Healthcare and Public Health, Chemical, Food and Agriculture, and Transportation Systems. The actors may exploit authentication bypass, arbitrary code injection, and weak configurations. Successful exploitation could change temperature and cause physical impacts such as fire hazards, loss of inventory, and changes to the service life of the system.

## Why it matters

The fact sheet does not name vendors, does not list a CVE (Common Vulnerabilities and Exposures) identifier, and does not attribute the activity to a country or group. According to SecurityWeek, hundreds of supermarkets were hit on October 11, when attackers turned fridge temperatures to 50 degrees Celsius (122 degrees Fahrenheit) and set freezers to defrost, spoiling food and in some cases causing fires.

The report said a second wave hit more than 100 supermarkets and a blood bank this week, but only supermarkets suffered losses. According to the report, the French Blood Establishment (EFS) said quick action from staff prevented the compromise of blood products and samples. The report noted that Russian hacktivist groups such as Noname057(16) and Z-Pentest Alliance reportedly claimed hacking Danfoss, but nothing has been confirmed.

## What to do

The authoring organizations urge owners and operators to eliminate public internet exposure of control system devices, particularly controller panels. The fact sheet recommends changing default passwords and strengthening passwords, applying patches and keeping devices and systems updated, and identifying, retiring, and replacing legacy devices that the vendor no longer supports. The authoring organizations also recommend creating a dedicated operational technology (OT) virtual local area network (VLAN) to separate OT devices from business networks, implementing phishing-resistant multifactor authentication wherever feasible, and defining and maintaining device and Internet Protocol (IP) address allowlisting. They recommend maintaining current backups offsite and offline and testing them.

<!-- cspell:words Noname Pentest Danfoss -->
