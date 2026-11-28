---
title: Q-Dir and DesktopOK installers were trojanized to deliver a Python RAT
date: 2026-11-28T15:41:40.111Z
format: news
summary: According to BleepingComputer, some Q-Dir and DesktopOK installers on
  the official SoftwareOK website were tampered with to deliver a Python remote
  access trojan that persists through a scheduled task.
description: Tampered Q-Dir and DesktopOK installers delivered a Python RAT.
  Verify download hashes and check for suspicious Python environments and
  scheduled tasks.
tags:
  - supply-chain
  - malware
  - incident-response
impact: high
action: review
status: current
affects:
  - Q-Dir 12.83.0.0, 12.84.0.0, 12.85.0.0
  - DesktopOK 12.82.0.0, 12.85.0.0
briefing:
  changed: Some Q-Dir and DesktopOK installation files distributed on the official
    SoftwareOK website were tampered with to contain malicious files, according
    to BleepingComputer.
  why: The trojanized installers run the legitimate program while installing a
    Python RAT that persists through a scheduled task and supports shell and
    Python code execution, file transfer and screenshots.
  action: Verify downloads against the published SHA-256 hash, and check affected
    machines for suspicious Python environments and scheduled tasks.
sources:
  - title: "Software Supply Chain Attack via the Official SoftwareOK Website:
      Tampering with Q-Dir and DesktopOK Installation Files - ASEC"
    url: https://asec.ahnlab.com/en/96827/
  - title: "BleepingComputer: Q-Dir and DesktopOK Windows utilities compromised to
      push Python RAT"
    url: https://www.bleepingcomputer.com/news/security/q-dir-and-desktopok-windows-utilities-compromised-to-push-python-rat/
---

Official distribution channels for the Q-Dir and DesktopOK Windows utilities were compromised to deliver trojanized installers containing Python-based remote access malware, according to BleepingComputer. Some installation files distributed on the official SoftwareOK website had been tampered with to contain malicious files. The report lists the affected Q-Dir versions as 12.83.0.0, 12.84.0.0, and 12.85.0.0, and the affected DesktopOK versions as 12.82.0.0 and 12.85.0.0.

## What the installers do

Malicious files were generated both when users downloaded programs from the official download page and during the update process of previously installed legitimate programs. The malicious installer runs the legitimate Q-Dir or DesktopOK while downloading and installing a Python RAT (remote access trojan) package from an external server. The report says the trojanized installers are digitally signed with a certificate issued to the legitimate developer. BleepingComputer notes that the researchers could not determine how the installers were replaced or the timeframe over which the malicious versions were distributed.

## Why it matters

The report says the Python RAT registers a scheduled task to persist on infected devices. It supports shell command execution, Python code execution, file upload and download, screenshots, and system information collection. The malware contains a list of 1,206 processes matching antivirus and endpoint detection and response (EDR) tools, per the report. The RAT communicates with a command-and-control (C2) server at 8.210.69.51:9876.

## What to do

According to BleepingComputer, users should verify downloaded files against the SHA-256 hash published on the official download page. The report adds that removing a trojanized version of Q-Dir or DesktopOK does not ensure elimination of the Python RAT, and that users should check for suspicious Python environments and scheduled tasks.

<!-- cspell:words trojanized ASEC -->
