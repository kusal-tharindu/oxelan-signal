---
title: OpenAI and Cisco launch Shirudo, an open-source Linux runtime
date: 2026-11-23T22:41:46.388Z
format: news
summary: OpenAI and Cisco are launching Shirudo, an open-source runtime that
  protects Linux systems while teams roll out patches, using eBPF shields that
  load without a restart.
description: Shirudo is an open-source eBPF runtime from OpenAI and Cisco that
  blocks vulnerable code paths while teams roll out patches.
tags:
  - llm-security
  - platform-engineering
impact: info
action: review
status: current
briefing:
  changed: OpenAI and Cisco are launching Shirudo, an open-source runtime that
    helps teams protect Linux systems while they roll out patches.
  why: Its shields run on eBPF, can block vulnerable code paths without a restart,
    and are signed and verified before loading.
  action: There is no patch to apply for this launch; the source points to a
    technical deep dive webinar on December 15 for teams assessing Shirudo.
sources:
  - title: OpenAI and Cisco introduce Shirudo
    url: https://openai.com/index/introducing-shirudo
---

OpenAI and Cisco are launching Shirudo, an open-source runtime that helps teams protect Linux systems while they roll out patches. Shirudo uses eBPF, a Linux technology that allows small programs to run at specific points inside the operating system. Its shields can block vulnerable code paths without restarting the system.

Shields are cryptographically signed and verified before loading. The runtime uses a Trusted Platform Module (TPM) to support a verifiable record of protections being loaded or removed. In a controlled test, a Codex-generated shield blocked a Java4Shell exploit attempt against a running Elasticsearch service without requiring a restart.

## Why it matters

The operational gap is the interval between a vulnerability being known and a patched package running everywhere. Shirudo is aimed at that interval: its shields block the vulnerable code path without a restart. The evidence offered for it is a controlled test against Elasticsearch.

## What to do

There is no vulnerable version to upgrade in this announcement; Shirudo is an open-source runtime that teams adopt themselves. Shirudo is licensed under BSD 2-Clause, with its BPF programs dual-licensed under BSD and GPL. Cisco and OpenAI have scheduled a technical deep dive webinar for December 15.

<!-- cspell:words Shirudo -->
