---
title: Control Web Panel's cwpsrv backdoor hides commands from access logs
date: 2026-11-08T06:44:33.058Z
format: news
summary: Researchers found a backdoor in cwpsrv, the web server that runs
  Control Web Panel, that executes commands without leaving access-log entries.
description: XLab found a backdoor in cwpsrv, the Control Web Panel web server;
  it executes commands and suppresses access logs.
tags:
  - malware
impact: high
action: review
status: current
affects:
  - cwpsrv 1.15.10
  - cwpsrv 1.24.0
briefing:
  changed: According to The Hacker News, researchers at QiAnXin's XLab found a
    backdoor hidden in the web server that runs Control Web Panel.
  why: The backdoored server executes commands sent via web requests and leaves no
    entry in access logs, so ordinary log review may miss the interaction.
  action: XLab recommends rotating all control panel credentials because the
    backdoor can execute arbitrary commands.
sources:
  - title: "CWPdoor: The Invisible Backdoor Living Inside Control Web Panel"
    url: https://blog.xlab.qianxin.com/cwpdoor-the-invisible-backdoor-living-inside-control-web-panel/
  - title: "The Hacker News: Hackers Hide Linux Backdoor in Control Web Panel Server
      to Execute Commands Without Logs"
    url: https://thehackernews.com/2026/11/hackers-hide-linux-backdoor-in-control.html
---

According to The Hacker News, a backdoor has been found hiding in the web server that runs Control Web Panel (CWP), a free panel for managing Linux hosting servers, researchers at QiAnXin's XLab said. XLab captured a suspicious installer script named cwpsrv_update.sh on June 29, 2026. The script is a cwpsrv replacement and deployment tool that supports only versions 1.15.10 and 1.24.0, and it must run with root privileges.

More than 340,000 CWP instances were exposed to the internet over the past month, according to XLab. cwpdoor is embedded in cwpsrv by inserting malicious code into the cwpsrv source code and recompiling it. Installing the backdoor takes root access, so the attackers must already control the server, according to the report. The researchers do not yet know how attackers get the root access the installer needs, according to the report.

The backdoored web server executes commands that attackers send via web requests, and those requests never appear in its access logs, according to the report. cwpdoor is triggered by HTTP (Hypertext Transfer Protocol) request headers X-Ngx-Integrity-Time, X-Ngx-Integrity-Data, and X-Ngx-Integrity-Sig. It validates the timestamp against a time window of plus or minus 300 seconds. The installer restores the replaced binary's access and modification times and its parent directory timestamp to their original values, and it runs`history -d` to delete the current session's command history. It reports the update result back to 136.0.141.71. The installer script has MD5 (Message Digest 5) hash e505d4ffa21cf494a5dc2d7c8f4f1236, and cwpdoor uses the Unix domain socket ngx_http_integrity_helper for inter-process communication.

When the researchers checked, the backdoor file had zero detections out of 63 on VirusTotal, according to The Hacker News. XLab does not yet know which vulnerability cwpdoor uses to spread.

## What to do

XLab recommends rotating all control panel credentials because the backdoor can execute arbitrary commands.

<!-- cspell:words cwpsrv Xin's backdoored Pdoor cwpdoor -->
