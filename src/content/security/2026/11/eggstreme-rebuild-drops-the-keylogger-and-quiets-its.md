---
title: EggStreme rebuild drops the keylogger and quiets its network calls
date: 2026-11-20T05:05:02.958Z
format: news
summary: According to The Hacker News, the EggStreme framework has been rebuilt
  with new loader encryption, campaign-specific certificates and agent builds
  that wait for the operator instead of calling out.
description: "The EggStreme framework was retooled: the keylogger is gone from
  observed agent builds and some agents now wait for the operator instead of
  calling out."
tags:
  - malware
  - incident-response
impact: high
action: review
status: current
affects:
  - Government organizations in the Philippines
  - Government organizations in Taiwan (low to medium confidence)
briefing:
  changed: According to The Hacker News, EggStremeLoader's cryptography and
    payload format moved from RC4 to RC5 and to a custom cipher by the end of
    October 2025, operators moved to campaign-specific certificate authorities,
    and some newer builds run in passive mode.
  why: Some newer builds open a listening port and wait for the operator instead
    of contacting an external command-and-control server, while newer agent
    builds add Active Directory reconnaissance, WMI querying and payload
    execution.
  action: How the operators gain initial access is still unclear and the cited
    reporting gives no fixed version, so treat this as a review item and check
    detections against the documented staging path.
sources:
  - title: "The Hacker News: New EggStreme Malware Variant Goes Silent to Evade
      Security Tools in Government Attacks"
    url: https://thehackernews.com/2026/11/eggstreme-hackers-rebuild-malware-with.html
---

According to The Hacker News, the group behind EggStreme has rebuilt the malware framework while continuing to target government organizations in the Philippines. The report attributes the operation to a suspected Chinese APT (advanced persistent threat) group, and says EggStreme was first exposed in September 2025.

EggStreme's defining characteristic is DLL sideloading, in which a malicious library is placed where a trusted Windows program will load it, to execute payloads. EggStremeFuel, also known as RawCookie, profiles the system and deploys EggStremeLoader, which sets up persistence and decrypts and executes EggStremeReflectiveLoader. That loader in turn executes EggStremeAgent.

The agent, also known as Gorem RAT, was originally documented as a full-featured backdoor for reconnaissance, lateral movement and data theft through an injected keylogger. The report says the keylogger was removed from every agent build observed since the first report. Newer builds added commands for Active Directory reconnaissance, WMI (Windows Management Instrumentation) querying, TCP traffic forwarding, and execution of PowerShell, Portable Executable and .NET assembly payloads.

According to the report, EggStremeLoader's cryptography and payload format moved from RC4 to RC5 and to a custom cipher by the end of October 2025, and the operators moved from a single certificate authority to campaign-specific certificate authorities. Some newer builds run in passive mode, opening a listening port and waiting for the operator to connect instead of contacting an external command-and-control (C2) server. Newer incidents stage payloads on an unmanaged system outside endpoint management that other workstations can still reach, then launch them via DLL sideloading from a VBScript run over SMB (Server Message Block).

How the operators gain initial access is still unclear. There is some evidence they also targeted Taiwan, treated with low to medium confidence. Some components, including EggStremeFuel and EggStremeLoader, were used by another cluster Palo Alto Networks tracks as CL-STA-1048 between March and September 2025.

## What to do

The reporting summarized here gives no fixed version or vendor advisory, so the action is review rather than a patch deadline. The documented tradecraft, DLL sideloading via a VBScript over SMB from a system outside endpoint management and passive builds that listen on a port instead of calling an external C2 server, is what existing detections should be checked against.

<!-- cspell:words Streme Streme's sideloading Gorem Palo tradecraft -->
