---
title: Beget rebuilds its cloud from scratch after a data wiper attack
date: 2026-11-12T01:59:59.430Z
format: news
summary: A data-wiping attack erased data across Beget's cloud infrastructure,
  including VPS, S3, and Kubernetes, and the provider says it cannot recover all
  VPS data.
description: A data wiper attack forced Beget to rebuild its cloud
  infrastructure; all VPS, S3, and Kubernetes data was lost and some VPS data is
  unrecoverable.
tags:
  - incident-response
  - malware
impact: critical
action: review
status: current
affects:
  - Beget cloud infrastructure, including VPS, S3, and Kubernetes
  - Beget shared hosting and dedicated servers
briefing:
  changed: Beget suffered a cyberattack on its infrastructure in the night of
    November 1-2, 2026, and a data-wiping attack forced it to rebuild its cloud
    infrastructure from scratch.
  why: All data in Beget's cloud infrastructure, including VPS, S3, and
    Kubernetes, was lost, and Beget said it is impossible to recover all VPS
    data.
  action: Beget is working to restore the damaged infrastructure and published a
    recovery status update on November 11, 2026.
sources:
  - title: Beget —  Хостинг и облачные сервисы | Аренда IT-инфраструктуры
    url: https://beget.com/ru
  - title: "BleepingComputer: Russian cloud firm Beget rebuilds from scratch after
      data wiper attack"
    url: https://www.bleepingcomputer.com/news/security/russian-cloud-firm-beget-rebuilds-from-scratch-after-data-wiper-attack/
---

Beget, a Russian web-hosting, cloud, and domain-registration provider, suffered a cyberattack on its infrastructure in the night of November 1-2, 2026. The company says it is working to restore the infrastructure damaged in the attack. According to BleepingComputer, a data-wiping malware attack forced Beget to rebuild its cloud infrastructure from scratch, and the attacker gained access to the management systems of the company's entire architecture and deployed malware that erased server data.

## What was lost

The report says all data in Beget's cloud infrastructure, including VPS (virtual private servers), S3 (object storage), Kubernetes (a container orchestration platform), was lost, along with CDN (content delivery network) settings and IP configurations. Backups did not escape either: VPS binary backups were completely lost, while VPS file backups partially survived. Beget said it is impossible to recover all VPS data.

## Why it matters

Beget serves more than 200,000 customers, including online stores, media, and educational services. The report describes destruction rather than theft: Beget's investigation found no evidence that the attacker tried to download or modify data on the compromised servers, and the attack appears to have been focused solely on destruction. More than a week after the attack, 60% of shared hosting and 40% of dedicated servers had been restored. Roughly 1,000 servers still required manual checks for vulnerabilities and hidden scripts before they could be brought back online.

## Response and what to do

Beget detected the attack shortly after the malware activated and disconnected all servers from the network to stop the malicious activity from spreading. The company notified the police and government agencies and is working with cybersecurity firms to remediate the incident. The cited sources give no patch or configuration fix; Beget's recovery work is the remediation path they document. The recovery status was last updated on November 11, 2026 at 20:00 MSK (Moscow time). VPS file backups partially survived, and a November 6 assessment said they would be available for roughly half of VPS users. Customers should plan for partial recovery, not a full restore.

<!-- cspell:words Хостинг облачные сервисы Аренда инфраструктуры -->
