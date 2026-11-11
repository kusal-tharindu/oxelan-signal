---
title: Turla uses a new Cereal toolset to collect email from Exchange servers
date: 2026-11-11T05:44:52.469Z
format: news
summary: The Russia-aligned group Turla used a new toolset called Cereal to
  collect email from government Exchange servers in Kazakhstan and Romania,
  according to ESET findings reported by The Hacker News.
description: Turla used the new Cereal toolset against government Exchange
  servers in Kazakhstan and Romania; ESET published indicators of compromise.
tags:
  - malware
  - data-breach
impact: high
action: review
status: current
affects:
  - Microsoft Exchange servers
briefing:
  changed: According to The Hacker News, Turla is using a new toolset called
    Cereal to break into Microsoft Exchange servers and collect email; ESET
    observed it against government entities in Kazakhstan and Romania in late
    2025.
  why: The toolset was built for long-term espionage, and at the Romanian
    organization it was configured to gather email involving NATO and European
    Union addresses.
  action: Review ESET's published indicator list against Exchange servers in
    scope; the cited sources do not describe the initial access vector.
sources:
  - title: "The Hacker News: Russian Turla Hackers Use New Cereal Malware to Steal
      Emails From Government Exchange Servers"
    url: https://thehackernews.com/2026/11/russian-turla-hackers-use-new-cereal.html
  - title: "BleepingComputer: Turla hackers use new Cereal malware to spy on govt
      Exchange servers"
    url: https://www.bleepingcomputer.com/news/security/turla-hackers-use-new-ceral-malware-to-spy-on-govt-exchange-servers/
---

## What changed

According to The Hacker News, the Russia-aligned state-sponsored group Turla, also known as Snake, is using a previously undocumented toolset called Cereal to break into Microsoft Exchange servers and collect email. ESET observed the toolset against two governmental entities in Kazakhstan and Romania in late 2025. According to BleepingComputer, the Romanian government organization was compromised on December 23rd, 2025. BleepingComputer also reports that Turla is linked to Russia's Federal Security Service (FSB).

## How the toolset works

CerealBox is the email harvesting module: it injects into the Exchange transport service, EdgeTransport.exe, to process, filter and collect messages. CerealNeuron is a passive backdoor that runs on a compromised Exchange server and listens for incoming web requests on paths that look like regular Exchange traffic. CerealHermit, a variant of CerealNeuron, reads commands from encrypted files on disk and has no network functionality of its own. The report describes the framework as eight moving parts that work together. It also notes that the toolset uses no external command-and-control infrastructure and instead abuses the compromised Exchange server for that purpose. The initial access vector is unknown.

## Why it matters

The report describes Cereal as "a carefully constructed instrument for long-term, stealthy cyber espionage". CerealBox was configured at the Romanian government organization to gather emails involving NATO and European Union institutional addresses.

## What to do

According to BleepingComputer, ESET has shared an extended list of indicators of compromise (IoCs, artifacts such as file names, hashes or network patterns that suggest a compromise) on its GitHub page. Review that list against the Exchange servers in scope. The cited sources do not describe the initial access vector, so they give no configuration change that would have blocked it.

<!-- cspell:words Turla ESET -->
