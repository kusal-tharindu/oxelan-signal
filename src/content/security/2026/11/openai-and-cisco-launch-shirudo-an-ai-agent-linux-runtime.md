---
title: OpenAI and Cisco launch Shirudo, an AI-agent Linux runtime for exploit shields
date: 2026-11-24T06:43:43.736Z
format: news
summary: According to The Hacker News, OpenAI and Cisco launched Shirudo, an
  open-source Linux runtime that lets AI agents write eBPF controls to shield
  systems from exploits.
description: OpenAI and Cisco launched Shirudo, an open-source Linux runtime for
  AI agents to write eBPF exploit shields.
tags:
  - ai-agents
  - platform-engineering
impact: info
action: review
status: current
briefing:
  changed: According to The Hacker News, OpenAI and Cisco launched Shirudo, an
    open-source Linux runtime that lets AI agents write dynamic eBPF controls to
    shield systems from exploits.
  why: The report says the shields give defenders more time to test and roll out
    patches.
  action: The cited report does not list fixed versions or a patch step; this is a
    product announcement.
sources:
  - title: "The Hacker News: OpenAI and Cisco Unveil AI-Assisted Linux Security Tool
      to Block Exploits Before Patching"
    url: https://thehackernews.com/2026/11/openai-and-cisco-unveil-ai-assisted.html
---

According to The Hacker News, OpenAI and Cisco launched Shirudo, an open-source Linux runtime that lets artificial intelligence (AI) agents defend systems without downtime. The report says the runtime lets agents write dynamic eBPF (extended Berkeley Packet Filter) controls to shield systems from exploits and give defenders more time to test and roll out patches.

## How Shirudo is built

The report says Shirudo is built atop the foundations of Tetragon, an eBPF-based security platform that Isovalent developed and open-sourced in May 2022. eBPF runs lightweight sandboxed programs inside the kernel without modifying system code or restarting the system. A guardian agent uses eBPF shields to block vulnerable code paths without restarting the system. The shields are cryptographically signed and verified before they are loaded, and they are delivered as signed .bee packages through an OCI-compliant (Open Container Initiative) registry.

## What the experiment showed

The report says that in a controlled experiment, a Codex-generated shield blocked a Java4Shell exploit attempt against a running Elasticsearch service without requiring a restart. It describes an exploit attempt, not a confirmed compromise.

## Why it matters in production

The operational difference is the no-restart path: the report says the runtime blocks vulnerable code paths without restarting the system. The controlled experiment illustrates that path with a running Elasticsearch service that did not require a restart.

## What to do

The cited report describes a product launch, not a fixed-version patch, and it does not list fixed versions or a patch step.

<!-- cspell:words Shirudo sandboxed -->
