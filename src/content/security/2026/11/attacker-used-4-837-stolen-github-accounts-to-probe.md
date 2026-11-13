---
title: Attacker used 4,837 stolen GitHub accounts to probe repositories for
  write access
date: 2026-11-12T22:41:59.456Z
format: news
summary: An attacker used stolen credentials for 4,837 GitHub accounts to probe
  61,764 repositories for write access and steal cloud credentials, according to
  BleepingComputer.
description: The campaign probed 61,764 repositories with disguised pull
  requests and stole secrets from at least 1,835 targets.
tags:
  - incident-response
  - supply-chain
  - github-actions
impact: critical
action: review
status: current
affects:
  - GitHub accounts at Fortune 100 organizations, the US General Services
    Administration, the French government, Nextcloud and WebdriverIO
briefing:
  changed: An attacker used stolen credentials for 4,837 GitHub accounts to probe
    61,764 repositories with pull requests titled as dependency audit notes.
  why: The delivered script collected GitHub Actions secrets, OIDC tokens and
    cloud credentials, and could exchange GitHub OIDC tokens for temporary AWS,
    Azure and GCP sessions.
  action: Repository owners should look for the wfx-docs branch, the probe pull
    request and gaps in workflow run numbers.
sources:
  - title: "BleepingComputer: Hackers compromise 4,800 GitHub accounts to steal
      cloud credentials"
    url: https://www.bleepingcomputer.com/news/security/hackers-compromise-4-800-github-accounts-to-steal-cloud-credentials/
---

An attacker used stolen credentials for 4,837 GitHub accounts to probe 61,764 repositories for write access, according to BleepingComputer. The report says the campaign, which it calls wfx-loot, began around 12:45 UTC on November 10. The probes arrived as pull requests titled "docs: dependency audit notes," and 92% of them remained open.

The attacker then delivered a 1,500-line credential-stealing shell script, the report says. It collected GitHub Actions secrets, the workflow's GITHUB_TOKEN, OpenID Connect (OIDC) tokens and Actions runtime tokens. It also collected cloud credentials for Amazon Web Services (AWS), Azure and Google Cloud, including credentials exposed through instance metadata on self-hosted runners.

## Why it matters

The script could exchange GitHub OIDC tokens for temporary AWS, Azure and Google Cloud Platform (GCP) sessions. In AWS it could create long-lived credentials for identity and access management (IAM) users. Stolen data was compressed into tarballs and exfiltrated over HTTP POST to one of two attacker-controlled endpoints. In the final stage the attacker reverted changes and deleted workflow runs and logs, which the report says took under a minute.

## Who was affected

Secrets were stolen from at least 1,835 targets, according to the report. Some of the compromised accounts belonged to Fortune 100 organizations, the US General Services Administration, the French government, Nextcloud and WebdriverIO. About 50 of them appear to have publishing rights on npm, PyPI (the Python Package Index), Go, crates or Packagist. Automated publishing carried the payload into Packagist package digitalelvis/neuronai-studio 3.14.3 and into versions v1.0.278 and v1.0.280 of the Go module github.com/onuragtas/docker-env.

## What to do

Repository owners should look for the wfx-docs branch and the probe pull request. Gaps in workflow run numbers are a third indicator the report names.

<!-- cspell:words Nextcloud exfiltrated Packagist digitalelvis neuronai onuragtas -->
