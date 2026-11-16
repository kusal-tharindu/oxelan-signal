---
title: SANSAR cryptominer falsifies GPU telemetry on compromised Ray hosts
date: 2026-11-16T11:39:39.304Z
format: news
summary: Elastic Security Labs is tracking a Linux cryptomining intrusion that
  reached root through an exposed Ray job agent and used a falsified NVIDIA
  library to hide GPU work.
description: A tracked Linux cryptomining intrusion used a Ray job agent without
  authentication, a kernel rootkit and a falsified NVIDIA library to hide GPU
  mining.
tags:
  - malware
  - incident-response
  - inference
impact: high
action: review
status: current
affects:
  - Ray job agents reachable from the internet that accept job submissions
    without authentication
briefing:
  changed: Elastic Security Labs is tracking a Linux cryptomining intrusion it
    calls REF3364, which reached root through an exposed Ray job agent and
    deployed a kernel rootkit, a falsified NVIDIA Management Library wrapper and
    a backdoor named netns.
  why: The wrapper reports GPU utilization as 0% and replaces temperature and
    power readings with random values, so the numbers operators use to check GPU
    health are false.
  action: Confirm whether any Ray job agent you run is reachable from the internet
    and accepts job submissions without authentication, then check hosts for the
    staged toolkit path and the kernel module.
sources:
  - title: "Linux cryptomining malware: Inside the SANSAR toolkit"
    url: https://www.elastic.co/security-labs/threat-command/sansar-linux-cryptomining-malware
  - title: "The Hacker News: SANSAR Linux Cryptomining Malware Uses Modified NVIDIA
      Library to Hide GPU Activity"
    url: https://thehackernews.com/2026/11/sansar-linux-cryptomining-malware-uses.html
---

Elastic Security Labs is tracking a Linux cryptomining intrusion it calls REF3364, which combines custom malware with publicly available miners. The toolkit includes SANSAR, a Rust orchestrator that receives commands over Tor (The Onion Router) to manage CPU and GPU miners. According to The Hacker News, the activity was observed in late October 2026.

The actor abused an exposed Ray job agent, obtaining root and deploying the toolkit across three Linux GPU hosts. The job agent remained reachable from the internet and accepted job submissions without authentication. External probes first appeared in the Ray logs on October 22, 2026. On October 24, 2026, a submitted job ran nvidia-smi, the NVIDIA System Management Interface, and sent the GPU inventory to an external server. On October 25, 2026, the actor submitted a Python reverse-shell job that connected to an external listener.

The threat actor also deployed a kernel rootkit to hide selected processes and files, an NVML (NVIDIA Management Library) wrapper to falsify GPU readings, and a separate backdoor named netns. The wrapper reports GPU utilization as 0% and replaces temperature and power readings with random values of 36 to 46 degrees Celsius and 100 to 200 watts. The acpi_thermal_mgr.ko rootkit uses ftrace to conceal processes, directories and socket-list entries. The CPU branch selects XMRig version 6.25.0, and the GPU branch selects SRBMiner-MULTI version 3.6.9, whose collected binary matched the official release hash.

## Why it matters in production

The gap between the reported readings and the card's real state is the practical risk here. Compromise did not rest on the miner: the actor added an SSH key to the compromised account's authorized_keys file, and the netns backdoor fetches its command-and-control (C2) address from an Ethereum smart contract before connecting to the server directly.

## What to do

The entry point was a Ray job agent reachable from the internet that accepted job submissions without authentication, so confirm whether any Ray deployment you run is exposed that way. Search hosts for the toolkit staged under /opt/vadi_ and an acpi_thermal_mgr kernel module built through Dynamic Kernel Module Support (DKMS) with an initramfs loader. Review authorized_keys and systemd units for the persistence described above. The cited sources do not publish fixed versions or a configuration-only mitigation.

<!-- cspell:words SANSAR cryptominer cryptomining netns Cryptomining NVML acpi vadi DKMS -->
