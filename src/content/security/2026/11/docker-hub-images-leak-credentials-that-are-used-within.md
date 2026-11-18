---
title: Docker Hub images leak credentials that are used within seconds
date: 2026-11-18T03:42:19.934Z
format: news
summary: According to BleepingComputer, credentials exposed in public Docker Hub
  images are extracted and exploited within as little as eight seconds.
description: A study found credentials in public Docker Hub images are extracted
  within seconds, and Docker did not follow up beyond an acknowledgment.
tags:
  - supply-chain
  - authentication
impact: high
action: review
status: current
briefing:
  changed: According to BleepingComputer, credentials and access secrets exposed
    in public Docker Hub images are extracted and exploited by attackers within
    as little as eight seconds of publication.
  why: Scanners extract credentials through static analysis, unpacking image
    layers or querying the registry API without instantiating the container.
  action: The researchers recommend that Docker Hub scan images for secrets before
    pushing them live and warn publishers, and restrict or rate-limit access to
    its public feed. The cited report gives no fixed version for publishers to
    apply.
sources:
  - title: "BleepingComputer: Cloud keys leaked in Docker Hub images are stolen
      within seconds"
    url: https://www.bleepingcomputer.com/news/security/cloud-keys-leaked-in-docker-hub-images-are-stolen-within-seconds/
---

According to BleepingComputer, credentials and access secrets exposed in public Docker Hub images are extracted and exploited by attackers within as little as eight seconds of publication. The report says two Stony Brook University researchers, Billy Tsouvalas and Nick Nikiforakis, published 300 honeypot images across eight public container registries to measure how quickly the secrets were taken. Over four months, the researchers exposed Amazon Web Services (AWS), OpenAI, and Anthropic application programming interface (API) keys along with decoy Secure Shell (SSH) and database credentials.

The honeypot images were pulled more than 75,000 times, and the planted AWS keys received over 140,000 API calls from 5,000 unique Internet Protocol (IP) addresses. The fastest observed use of a planted AWS key came 7.86 seconds after the image was published on Docker Hub. The median time for the first API call was 51.19 seconds, and all 100 AWS keys were used within 15 minutes.

## Why it matters

According to the report, the scanners extracted credentials through static analysis, unpacking image layers or querying the registry API without instantiating the container. The researchers dubbed the automated scanners that interacted with their test images "ContainerBots". That means the secret can be extracted from the stored image itself, without the container ever running.

## What to do

The report says the researchers reported their findings to Docker in May but received no follow-up replies beyond an acknowledgment. The cited sources give no fixed version or vendor patch for publishers to apply. The researchers recommend that Docker Hub scan images for secrets before pushing them live and warn publishers. They also suggest restricting or rate-limiting access to Docker Hub's public feed of recently published or updated images.

<!-- cspell:words Tsouvalas Nikiforakis -->
