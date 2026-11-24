---
title: OpenAI and Cisco unveil Shirudo, an open source AI defense for Linux systems
date: 2026-11-24T13:42:38.632Z
format: news
summary: OpenAI and Cisco unveiled Shirudo, an open source platform that uses AI
  agents to prevent exploitation of Linux vulnerabilities, and it is in
  pre-release development.
description: Shirudo uses eBPF to change Linux kernel behavior without an OS
  restart, and it is in pre-release development, not ready for production use.
tags:
  - ai-agents
  - security-updates
impact: info
action: review
status: current
briefing:
  changed: OpenAI and Cisco unveiled Shirudo, an open source security platform
    that uses AI agents to prevent exploitation of vulnerabilities in Linux
    systems and applications.
  why: In a controlled test, a shield generated with OpenAI's Codex blocked a
    Java4Shell exploitation attempt against an Elasticsearch instance without a
    restart, but the tool requires specific Linux kernel capabilities,
    additional kernel patches and TPM 2.0, and it is not ready for production
    use.
  action: Treat Shirudo as pre-release and not ready for production use; the cited
    reports name no fixed version or mitigation step to apply.
sources:
  - title: "BleepingComputer: New Shirudo tool uses AI to shield unpatched Linux
      systems from exploits"
    url: https://www.bleepingcomputer.com/news/security/new-shirudo-tool-uses-ai-to-shield-unpatched-linux-systems-from-exploits/
  - title: "SecurityWeek: OpenAI, Cisco Unveil Open Source Tool to Shield Unpatched
      Linux Systems"
    url: https://www.securityweek.com/openai-cisco-unveil-open-source-tool-to-shield-unpatched-linux-systems/
---

According to SecurityWeek, OpenAI and Cisco unveiled Shirudo, an open source security platform that uses AI agents to prevent exploitation of vulnerabilities in Linux systems and applications. The report describes the project as an AI-focused rewrite of Cisco-owned Isovalent's Tetragon runtime security platform, which was open-sourced in 2022.

Shirudo uses eBPF (extended Berkeley Packet Filter) to modify Linux kernel behavior without restarting the operating system. According to BleepingComputer, Shirudo is open source under BSD and GPL licenses, and shields will be distributed as cryptographically signed “.bee” packages through an OCI (Open Container Initiative) registry.

## Why it matters

In a controlled test described by SecurityWeek, a shield generated with OpenAI's Codex blocked a Java4Shell exploitation attempt against an Elasticsearch instance without requiring a restart. The practical constraint is the host: the tool requires specific Linux kernel capabilities, additional kernel patches, and TPM 2.0 (Trusted Platform Module).

## What to do

Shirudo is currently in pre-release development and not ready for production use. The reports describe no fixed version or mitigation step for a specific vulnerability, because the announcement covers a new platform rather than a patched flaw. OpenAI will hold a deep-dive webinar on December 15 on how the tool combines eBPF and artificial intelligence to detect and counter new attacks, according to BleepingComputer.

<!-- cspell:words Shirudo -->
