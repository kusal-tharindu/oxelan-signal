---
title: Agentic AI framework scans public GitHub for secrets and reaches Azure
  Key Vault
date: 2026-11-08T06:50:57.157Z
format: news
summary: Microsoft observed threat actors using an agentic artificial
  intelligence (AI) framework to scan public GitHub repositories for exposed
  secrets, then use compromised credentials against Azure Key Vault, Storage,
  and Microsoft 365 resources.
description: Microsoft says an agentic AI framework scanned public GitHub for
  secrets and used compromised credentials against Azure Key Vault and Storage
  Accounts.
tags:
  - ai-agents
  - authentication
impact: critical
action: review
status: current
affects:
  - Azure Key Vaults and Storage Accounts
  - Microsoft Entra ID tenants and connected Azure and Microsoft 365 resources
  - AI workloads on Azure AI services
briefing:
  changed: Microsoft Threat Intelligence observed threat actors using an agentic
    AI offensive framework to search public GitHub repositories for exposed
    secrets starting in August 2026.
  why: Compromised credentials were used for cloud resource discovery and
    credential and data exfiltration, including from Azure Key Vaults and
    Storage Accounts.
  action: Rotate exposed keys or credentials immediately, migrate OAuth
    applications away from secret-based authentication, and block
    199.19.77.84/32 as a named location in a Conditional Access policy targeting
    workload identities.
sources:
  - title: Threat actors use agentic AI tooling to find and abuse exposed secrets |
      Microsoft Security Blog
    url: https://www.microsoft.com/en-us/security/blog/2026/11/05/threat-actors-use-agentic-ai-tooling-to-find-and-abuse-exposed-secrets/
  - title: "Cyber Security News: Hackers Use ARTEX AI to Find GitHub Secrets and
      Steal Azure Key Vault Data in Just 5 Minutes"
    url: https://cybersecuritynews.com/hackers-use-artex-ai/
---

## What changed

Microsoft Threat Intelligence observed threat actors using an agentic artificial intelligence (AI) offensive framework to search public GitHub repositories for exposed secrets. Starting in August 2026, Microsoft observed the framework submit large volumes of queries to GitHub for secrets. In at least one case, an AI agent advanced from scanning GitHub for secrets to exfiltrating data from Azure Key Vault in just five minutes.

As early as October 28, 2026, Microsoft began observing successful service principal sign-ins from Internet Protocol (IP) address 199.19.77.84 involving multiple application IDs across some impacted customers. The sign-ins primarily came from two IP addresses: 199.19.77.84 and 199.19.77.18, the latter a Tor exit node. According to Cyber Security News, after failed requests mixed Key Vault data-plane application programming interface (API) versions with Azure Resource Manager (ARM) control-plane endpoints, the agent retried approximately 28 seconds later using ARM version 2023-07-01 and received successful responses.

## What is affected

The threat actor used the compromised credentials for cloud resource discovery and credential and data exfiltration, including from Azure Key Vaults and Storage Accounts. Cyber Security News reported that in follow-on activity attackers used valid application credentials to access Microsoft Entra ID tenants and connected Azure and Microsoft 365 resources. The agent successfully conducted service principal sign-ins on dozens of associated applications across multiple tenants. According to Cyber Security News, compromised applications also accessed SharePoint and OneDrive, with observed file downloads and mailbox-item access.

Microsoft observed reconnaissance operations from 157.22.126.128 targeting AI workloads deployed by victims on Azure AI services. Microsoft identified malicious operations from 65.87.223.26, including indications of vulnerability exploitation by embedded shell commands in a user agent and attempts to obtain App Service authentication tokens.

## What to do

Microsoft recommends that affected organizations immediately rotate any exposed keys or credentials. Developers should migrate OAuth applications away from secret-based authentication. Microsoft recommends blocking 199.19.77.84/32 as a named location in a Conditional Access policy targeting workload identities. Cyber Security News also reported Microsoft's recommendation to treat publicly exposed credentials as compromised even after developers delete the original code.

<!-- cspell:words ARTEX exfiltrating -->
