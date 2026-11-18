---
title: Malicious agent-framework releases on PyPI targeted credentials
date: 2026-11-18T11:46:28.747Z
format: news
summary: Malicious versions of Microsoft's agent-framework Python package were
  published to PyPI and targeted credentials in developer environments and CI
  pipelines.
description: Two malicious agent-framework versions on PyPI targeted
  credentials; check environments and rotate secrets.
tags:
  - supply-chain
  - malware
  - ci-cd
  - incident-response
impact: critical
action: review
status: current
affects:
  - agent-framework 1.26.1 and 1.26.2
briefing:
  changed: Two malicious versions of Microsoft's agent-framework Python package
    were published to PyPI on November 17, 2026, and were later quarantined.
  why: The malware starts with the Python interpreter, targets environment and
    configuration secrets plus Azure managed identity and Azure DevOps tokens,
    and the second release extended theft to GitHub Actions.
  action: Check developer environments, CI/CD pipelines and container images for
    the compromised versions; replace them with verified packages, rotate
    potentially exposed credentials, investigate suspicious cloud activity, and
    rebuild affected environments.
sources:
  - title: "SecurityWeek: Microsoft Agent Framework Releases Poisoned With
      Credential Stealer"
    url: https://www.securityweek.com/microsoft-agent-framework-releases-poisoned-with-credential-stealer/
---

According to SecurityWeek, two malicious versions of Microsoft's Agent Framework Python package were distributed through PyPI (the Python Package Index) on November 17, 2026. The report identified them as versions 1.26.1 and 1.26.2 of the agent-framework package. Both have since been quarantined on PyPI.

## What is affected

The package is agent-framework, which the report says has approximately 190,000 downloads per month. The malicious releases contained only built packages, unlike legitimate releases that included both built and source distributions. The method used to publish them remains unknown. The report said SafeDep identified a PyPI maintainer account named vibiret, created on the day of the attack, with publishing permissions for the affected package and five related projects.

## Why it matters

The malware runs whenever the Python interpreter starts, even if the application does not explicitly import the compromised package. Its targets include secrets in environment variables and configuration files, credentials of other running processes, and Azure managed identity and Azure DevOps authentication tokens. The second malicious release expanded credential-stealing functionality to GitHub Actions. Microsoft acknowledged the incident, and an Agent Framework maintainer confirmed the compromised releases were removed from PyPI and that an investigation was underway.

## What to do

The report says version 1.26.0 remains the latest clean release. Check developer environments, CI/CD (continuous integration and continuous delivery) pipelines and container images for the compromised versions, then replace affected installations with verified packages. Rotate potentially exposed credentials, investigate suspicious cloud activity, and rebuild affected environments.

<!-- cspell:words vibiret -->
