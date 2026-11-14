---
title: Quantum Systems reports cyberattack; German military grounds its drones
date: 2026-11-13T17:49:04.161Z
format: news
summary: Quantum Systems detected an active cyberattack, and reports say the
  vector was a malicious QBase update file as the German military grounded the
  company's drones.
description: Reports say a malicious QBase update file was the vector for an
  attack on Quantum Systems, whose drone missions are planned in that software.
tags:
  - incident-response
  - supply-chain
impact: high
action: review
status: current
affects:
  - Quantum Systems QBase ground-control and mission-planning software
  - Quantum Systems drones, including the Vector reconnaissance drone (Falke)
briefing:
  changed: Quantum Systems detected an incident in late October that it described
    as part of an active cyberattack by hostile actors, and the compromise is
    reported to have arrived through a malicious QBase update file.
  why: QBase is the ground-control and mission-planning software for the company's
    drones, and the compromise targeted the vendor's update distribution server.
  action: The cited report gives no patched version or workaround; operators
    should follow the vendor's own guidance, and the reported response was the
    grounding of Quantum Systems drones and involvement of German security
    agencies.
sources:
  - title: "BleepingComputer: German military drone operations disrupted by
      cyberattack"
    url: https://www.bleepingcomputer.com/news/security/german-military-drone-operations-disrupted-by-cyberattack/
---

## What changed

According to BleepingComputer, Quantum Systems detected an incident in late October that was part of an active cyberattack by hostile actors. Quantum Systems is a German defense technology company that builds reconnaissance and interceptor drones, along with other unmanned systems and the software that controls them.

## What is affected

According to the report, citing Der Spiegel and the Financial Times, the compromise occurred via a malicious QBase update file. QBase is Quantum Systems' ground-control and mission-planning software, and the compromise targeted the vendor's update distribution server. The report, citing Der Spiegel, identified the Vector reconnaissance drone, known as Falke in German military service, as one of the aircraft whose missions are planned with QBase.

## Why it matters in production

Reports claim the German armed forces grounded Quantum Systems drones as a precaution, excluding the company's systems from a recent military exercise. The response reportedly involves the military counterintelligence (MAD), the domestic intelligence service (BfV), and the federal cybersecurity agency (BSI).

## What to do

The cited report gives no patched QBase release and no configuration-level workaround for operators. Organizations running QBase should follow the vendor's own guidance on the incident.

<!-- cspell:words Falke -->
