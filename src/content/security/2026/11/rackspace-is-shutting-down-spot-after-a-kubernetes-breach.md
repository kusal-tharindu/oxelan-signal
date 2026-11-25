---
title: Rackspace is shutting down Spot after a Kubernetes breach
date: 2026-11-25T09:47:52.618Z
format: news
summary: Rackspace is retiring its Spot cloud platform after intruders used
  compromised credentials to create pods and read Secrets in customer Kubernetes
  clusters.
description: Rackspace will discontinue Spot on December 8, 2026, after a breach
  in which attackers created pods and read Kubernetes Secrets.
tags:
  - data-breach
  - incident-response
  - kubernetes
impact: critical
action: review
status: current
affects:
  - Rackspace Spot
briefing:
  changed: Rackspace is shutting down Rackspace Spot after a security breach and
    will permanently discontinue the service on December 8, 2026, at 5 PM
    Central Time.
  why: The report says an unauthorized party gained access to parts of the Spot
    platform and may have read cluster Secrets and files on storage volumes,
    while Rackspace says the affected environment is segmented from its core
    infrastructure.
  action: Treat API tokens, refresh tokens, kubeconfigs, and Kubernetes Secrets as
    potentially compromised, and review access logs dating back to November 16.
sources:
  - title: "BleepingComputer: Rackspace shuts down Spot cloud platform after
      security breach"
    url: https://www.bleepingcomputer.com/news/security/rackspace-shuts-down-spot-cloud-platform-after-security-breach/
  - title: Rackspace Spot breach let hackers access customer Kubernetes secrets
    url: https://www.bleepingcomputer.com/news/security/rackspace-spot-breach-let-hackers-access-customer-kubernetes-secrets/
---

According to BleepingComputer, Rackspace is shutting down its Rackspace Spot cloud platform after a security breach. The report says the service will be permanently discontinued on December 8, 2026, at 5 PM Central Time. The report describes Rackspace Spot as a platform that lets organizations deploy and manage containerized applications using Kubernetes.

Hackers breached the platform on November 17 using compromised credentials, and Rackspace discovered the intrusion on November 18 following a customer report. The intruders created unauthorized pods in customer Kubernetes clusters, read Kubernetes Secrets, and listed nodes and volumes. Service was restored on November 21 following an extended outage.

## Why it matters

Rackspace says the affected Spot environment is segmented from its core infrastructure. The company said an unauthorized party gained access to parts of the Spot platform and may have read cluster Secrets and files on storage volumes.

## What to do

Rackspace instructed Spot customers to treat API tokens, refresh tokens, kubeconfigs, and Kubernetes Secrets as potentially compromised. Customers were advised to review access logs dating back to November 16. The report lists IP address 23.224.79.106 and IP range 23.224.0.0/15 as indicators of compromise. It also lists suspicious Kubernetes pod and object prefixes i1, glm-, and probe.

<!-- cspell:words kubeconfigs -->
