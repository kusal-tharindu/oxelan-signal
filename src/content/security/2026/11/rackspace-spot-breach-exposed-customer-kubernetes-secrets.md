---
title: Rackspace Spot breach exposed customer Kubernetes secrets
date: 2026-11-21T23:40:03.938Z
format: news
summary: Attackers used leaked credentials to breach Rackspace Spot, deploying
  unauthorized workloads and reading Kubernetes secrets in customer clusters.
description: Leaked credentials let attackers create pods and read Kubernetes
  secrets in customer clusters on Rackspace Spot.
tags:
  - incident-response
  - kubernetes
  - data-breach
impact: high
action: review
status: current
affects:
  - Rackspace Spot
  - Rackspace Spot customer Kubernetes clusters
briefing:
  changed: Attackers used leaked credentials to access Rackspace Spot on November
    17, 2026, deploying unauthorized workloads and reading Kubernetes secrets in
    customer clusters.
  why: Anyone whose clusters ran on the affected platform could have had Secrets,
    Spot API tokens, or refresh tokens read, so downstream systems that trust
    those credentials are exposed.
  action: Reissue Spot API tokens, replace refresh tokens used in automation,
    download fresh Kubernetes configuration files, rotate credentials stored in
    cluster Secrets, and review logs back to November 17.
sources:
  - title: "BleepingComputer: Rackspace Spot breach let hackers access customer
      Kubernetes secrets"
    url: https://www.bleepingcomputer.com/news/security/rackspace-spot-breach-let-hackers-access-customer-kubernetes-secrets/
---

## What happened

According to BleepingComputer, attackers breached Rackspace Spot, a cloud platform for deploying and managing containerized applications using Kubernetes, by using leaked credentials. The report says they deployed unauthorized workloads and accessed Kubernetes secrets in customer clusters. The unauthorized access took place on November 17, 2026, between approximately 00:20 and 22:00 UTC. Rackspace learned of the intrusion on November 18, 2026, after a customer report.

## What the credentials allowed

According to the report, the attackers could create pods in Kubernetes clusters, read Kubernetes Secrets, and list nodes and volumes. The report adds that they could have read any Secret stored in an affected user's clusters, as well as any Spot API tokens or refresh tokens held by that user. The breach also caused an extended outage of the Rackspace Spot administration console. Rackspace announced that service had been fully restored on November 21, 2026.

## What to do

Rackspace has since revoked affected tokens and sessions, removed unauthorized pods, rotated keys, and strengthened access controls and monitoring. Affected customers were instructed to reissue Spot API tokens, replace refresh tokens used in automation tools, download fresh Kubernetes configuration files, and rotate credentials stored in their cluster Secrets. According to the report, Rackspace also advised customers to analyze logs associated with databases, container registries, Git repositories, cloud storage, and third-party services dating back to November 17. Indicators published with the report include the IP address 23.224.79.106, the IP range 23.224.0.0/15, and the Kubernetes pod and object prefixes i1, glm-, and probe.
