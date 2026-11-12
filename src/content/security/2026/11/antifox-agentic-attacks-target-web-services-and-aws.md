---
title: AntiFox agentic attacks target web services and AWS environments
date: 2026-11-12T05:47:22.223Z
format: news
summary: According to BleepingComputer, attackers hosted self-managed AntiFox
  instances on Alibaba Cloud to target web services and AWS environments. In
  some cases the AWS API attempts succeeded and obtained production secrets.
description: BleepingComputer reports AntiFox agentic attacks on web services
  and AWS; Arctic Wolf recommends revoking sessions and rotating credentials.
tags:
  - ai-agents
  - incident-response
  - authentication
impact: high
action: review
status: current
affects:
  - AWS environments
briefing:
  changed: BleepingComputer reported that attackers are self-hosting AntiFox on
    Alibaba Cloud to target web services and AWS environments.
  why: Arctic Wolf observed Alibaba Cloud systems hosting AntiFox interfaces
    associated with confirmed malicious actions, and in some cases attackers
    obtained production secrets.
  action: Revoke affected AWS sessions and keys and rotate credentials exposed
    through application files, as Arctic Wolf recommends.
sources:
  - title: "BleepingComputer: Hackers use AntiFox AI agents in AWS credential-theft
      attacks"
    url: https://www.bleepingcomputer.com/news/security/hackers-use-antifox-ai-agents-in-aws-credential-theft-attacks/
---

According to BleepingComputer, attackers used Alibaba Cloud to host self-managed AntiFox instances to target web services and AWS (Amazon Web Services) environments. Arctic Wolf observed Alibaba Cloud systems hosting AntiFox interfaces associated with confirmed malicious actions against internet-facing web services and AWS environments, according to the report. AntiFox is an open-source agentic penetration testing platform available on GitHub.

## What is affected

AntiFox was initially created as a fork of ARTEX 0.1.1 and has a Chinese-language interface. It has been updated to version 2.0, which improves how the tool documents and reports findings. CrowdStrike linked ARTEX to a cyberespionage campaign in which the Chinese hacking group Vapor Panda targeted more than 200 organizations across 14 countries. One case involved deploying an ASPX webshell, a script that lets an attacker run commands on a server, on an internet-exposed IIS (Internet Information Services) server; the attackers executed operating system (OS) commands and accessed application settings and database connection strings.

## Why it matters

In one intrusion, attackers cycled through multiple identities and made hundreds of AWS API (application programming interface) requests in about 30 minutes. Although most AWS API attempts were blocked, the attacker succeeded in some cases and obtained production secrets. In a separate incident, attackers used a valid AWS identity to read, copy, and delete S3 (Amazon Simple Storage Service) objects.

## What to do

AWS said its services were not compromised and operated as designed; credentials were taken from customers' compromised applications, according to the report. Arctic Wolf recommends revoking affected AWS sessions and keys and rotating credentials exposed through application files.

<!-- cspell:words ARTEX cyberespionage webshell -->
