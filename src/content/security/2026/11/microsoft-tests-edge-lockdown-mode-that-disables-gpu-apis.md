---
title: Microsoft tests Edge Lockdown Mode that disables GPU APIs
date: 2026-11-19T12:41:22.330Z
format: news
summary: Microsoft is developing an Edge Lockdown Mode that disables the WebGL,
  WebGL2, and WebGPU APIs to reduce the browser's attack surface, according to
  BleepingComputer.
description: Edge Lockdown Mode, still in Canary testing, blocks the WebGL,
  WebGL2, and WebGPU graphics APIs to reduce attack surface.
tags:
  - security-updates
  - threat-model
impact: info
action: review
status: current
affects:
  - Microsoft Edge
briefing:
  changed: According to BleepingComputer, Microsoft is developing an Edge Lockdown
    Mode that disables the WebGL, WebGL2, and WebGPU APIs to reduce the
    browser's attack surface.
  why: Microsoft estimates the feature would have blocked around 60% of privilege
    escalation attacks targeting Edge users in the wild, and the initial
    mitigations focus on the GPU process, a more privileged component.
  action: "Teams that want to evaluate it can test Lockdown Mode in the Canary
    channel using the #edge-sdsm-plus flag, Strict mode, and WebGL and WebGPU
    blocking, expecting some graphics-heavy sites to break."
sources:
  - title: "BleepingComputer: Microsoft tests new Edge Lockdown Mode that disables
      GPU APIs"
    url: https://www.bleepingcomputer.com/news/microsoft/microsoft-tests-new-edge-lockdown-mode-that-disables-gpu-apis/
---

## What changed

According to BleepingComputer, Microsoft is developing a new Edge security feature that reduces the attack surface by disabling the WebGL, WebGL2, and WebGPU application programming interfaces (APIs). The report says the feature, Lockdown Mode, is inspired by Apple's Lockdown Mode and builds on Edge Enhanced Security Mode, which disables Just-In-Time Compilation (JIT) from the V8 processing pipeline. It offers optional, extreme protections for users facing highly targeted attacks who are willing to sacrifice website compatibility for stronger defenses.

## Why it matters

The current Edge Canary Lockdown Mode blocks those APIs to stop attacks that try to escalate privileges and escape the sandbox. According to the report, Gareth Evans, a Partner Security Group Manager, said the initial set of mitigations focuses on the GPU (graphics processing unit) process, a more privileged component that handles complex graphics workloads across browser code, third-party libraries, and device drivers. Microsoft estimates the feature would have blocked around 60% of privilege escalation attacks targeting Edge users in the wild.

## The compatibility trade-off

Evans said Lockdown Mode is designed for users who are at particular risk of being targeted, which may include journalists, executives, security researchers, and administrators. The report warns that websites using the disabled APIs, especially those with interactive graphics such as games or maps, may not work as expected when the feature is toggled on. After enabling it, users see a "Lockdown Enabled" indicator in the address bar when WebGL or WebGPU is blocked on a page.

## What to do

Users can test Lockdown Mode by switching to the Canary release channel, enabling the #edge-sdsm-plus flag, restarting the browser, toggling on Strict mode for "Enhance your security on the web", and blocking WebGL and WebGPU graphics. The report describes a feature that Microsoft is still developing, so treat this as a test configuration on Canary rather than a finished, documented release. Record which sites break under the setting before deciding whether the people most exposed to targeted attacks should run it.

<!-- cspell:words Lockdown sdsm -->
