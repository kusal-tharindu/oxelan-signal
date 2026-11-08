---
title: CWPdoor backdoors Linux servers through a trojanized CWP web server
date: 2026-11-08T06:09:08.926Z
format: news
summary: A trojanized cwpsrv binary turns Control Web Panel servers into passive
  backdoors that hide their commands from access logs.
description: CWPdoor replaces cwpsrv 1.15.10 and 1.24.0 and waits for signed,
  encrypted commands sent in an HTTP header.
tags:
  - malware
impact: high
action: review
status: current
affects:
  - cwpsrv 1.15.10
  - cwpsrv 1.24.0
briefing:
  changed: According to BleepingComputer, a Linux malware family called CWPdoor is
    distributed through a trojanized version of cwpsrv, the web server behind
    the Control Web Panel management interface.
  why: The backdoor stays dormant until a request bearing a valid signature and
    timestamp arrives, and it suppresses the triggering entry in the access log,
    so an infected host can keep serving normal traffic.
  action: Check for the ngx_http_integrity_helper Unix socket, suspicious cwpsrv
    helper processes and X-Ngx-Integrity strings in the server binary; if
    compromise is confirmed, replace the binary, upgrade to the latest version,
    rotate control panel credentials and investigate the host.
sources:
  - title: "CWPdoor: The Invisible Backdoor Living Inside Control Web Panel"
    url: https://blog.xlab.qianxin.com/cwpdoor-the-invisible-backdoor-living-inside-control-web-panel/
  - title: "BleepingComputer: Hackers backdoor Linux servers using trojanized CWP
      web server"
    url: https://www.bleepingcomputer.com/news/security/hackers-backdoor-linux-servers-using-trojanized-cwp-web-server/
---

According to BleepingComputer, a Linux malware family called CWPdoor is distributed through a trojanized version of cwpsrv, the web server behind the Control Web Panel (CWP) management interface. XLab captured a script named`cwpsrv_update.sh` on June 29, 2026; it downloads cwpsrv from 136.0.141.71 and must run with root privileges.

## What is affected

The malicious updater script replaces cwpsrv versions 1.15.10 and 1.24.0. BleepingComputer reports that more than 340,000 CWP instances have been exposed on the public web over the past month. XLab says it does not yet know which vulnerability CWPdoor uses to spread.

## Why it matters

The backdoor is passive: it stays dormant until the attacker sends a specially crafted request. Operators activate it with an encrypted HTTP header named X-Ngx-Integrity-Data, sent alongside timestamp and RSA signature headers. The backdoor checks that the timestamp falls within a five-minute window and verifies the RSA signature before decrypting the command. Commands and their output are encrypted with AES-256-CBC (a symmetric block cipher mode), and the backdoor interferes with the server's logging module so the triggering request does not appear in the access log.

BleepingComputer also notes that a malicious cwpsrv file (cwpsrv.suspeito) uploaded to VirusTotal on September 30 had zero detections. Whether CWPdoor is related to Ebury, a Linux backdoor and credential stealer botnet operation active since at least 2009, remains unclear.

## What to do

Administrators should check for the ngx_http_integrity_helper Unix socket, suspicious cwpsrv helper processes, and X-Ngx-Integrity strings in the server binary. XLab lists the downloader URL as`http://136.0.141[.]71/static/cwpsrv_update.sh` and the infection script's MD5 as`e505d4ffa21cf494a5dc2d7c8f4f1236`. If compromise is confirmed, replace the backdoored binary with a legitimate copy, upgrade to the latest version, rotate all control panel credentials, and investigate the host for additional malware.

<!-- cspell:words Pdoor trojanized cwpsrv suspeito Ebury backdoored -->
