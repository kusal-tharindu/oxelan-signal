---
title: "Platform engineering learning path: what to learn, in what order"
date: 2026-10-21
updated: 2026-10-25
format: guide
summary: "A six-month path from Linux and networking to a platform you can operate. Ordered by dependency, not by hype."
tags: [platform-engineering, career, kubernetes, devops, learning-path]
status: current
updates:
  - { date: 2026-10-25, note: "Added the “build one thing” milestones and a review checklist." }
  - { date: 2026-10-21, note: "First published." }
sources:
  - { title: "CNCF: Platforms white paper", url: "https://tag-app-delivery.cncf.io/whitepapers/platforms/" }
  - { title: "Google: Site Reliability Engineering book", url: "https://sre.google/sre-book/table-of-contents/" }
  - { title: "Team Topologies", url: "https://teamtopologies.com/" }
  - { title: "Kubernetes documentation", url: "https://kubernetes.io/docs/home/" }
  - { title: "OpenTelemetry documentation", url: "https://opentelemetry.io/docs/" }
---

Platform engineering is not “Kubernetes with a nicer dashboard.” It is the practice of building a
product — internal tooling, golden paths, and self-service — that helps delivery teams ship
reliably. The learning path is therefore bottom-up: you cannot design a good platform abstraction
until you have operated the thing it abstracts.

This path assumes you already write code and can use a terminal. It is ordered by dependency.
Each phase ends with something you build, not just something you read.

## The six-month map

| Phase | Weeks | Focus | Artifact you build |
|---|---|---|---|
| 1. Foundations | 1–4 | Linux, networking, Git, one cloud | A reproducible VM or container running a small service |
| 2. Delivery | 5–8 | CI, containers, registries, IaC | A pipeline that tests, builds and deploys a service |
| 3. Orchestration | 9–12 | Kubernetes, networking, storage, policy | A small cluster with ingress, TLS, and a real workload |
| 4. Observability | 13–16 | Logs, metrics, traces, SLOs | A dashboard and an alert that fires for a real reason |
| 5. Platform product | 17–20 | Golden paths, self-service, docs | A template that another team can use without you |
| 6. Operations | 21–24 | Incidents, capacity, cost, upgrades | A runbook, an upgrade, and a postmortem |

The weeks are a guide. If you already operate production systems, compress phases 1–2 and spend
the time on phase 5, which is where most platform teams actually fail.

## Phase 1: the substrate

Learn enough Linux to explain what happens when a process starts, listens on a port, writes a file,
and dies. Learn enough networking to explain DNS, TCP, TLS, and a reverse proxy without hand-waving.

Build:

- A container image with a non-root user and a health endpoint.
- A VM or local cluster that runs it behind a proxy with TLS.
- A shell script or Makefile that recreates the environment from scratch.

Read: the Linux man pages for the tools you use, the cloud provider's networking primer, and the
TLS chapter of any good HTTP book. Avoid collecting certifications before you can debug a DNS
failure.

## Phase 2: delivery

The core skill is not writing YAML. It is making a change flow from a pull request to a running
system with evidence at each step. Learn a CI system deeply enough to know where secrets live, how
caching works, and what happens when a job is retried.

Build:

- A pipeline that runs tests, builds an image, scans it, and publishes an SBOM.
- Infrastructure as code for the environment, with a plan step reviewed before apply.
- A rollback that you have actually performed.

<aside class="callout callout-tip">
  <p class="callout-title">Pin the supply chain early</p>
  <p>Pin CI actions to commit SHAs, use least-privilege tokens, and separate the publish identity
  from the test identity. Retrofitting this after an incident is much more expensive.</p>
</aside>

## Phase 3: orchestration

Kubernetes is a distributed system with an API. Learn the control loop, not just `kubectl apply`.
Understand requests and limits, probes, service discovery, ingress, persistent storage, and
network policy.

Build:

- A cluster with a real workload, TLS, and a deployment strategy you can explain.
- Resource requests and limits based on measured usage, not guesses.
- A policy that blocks the obvious mistakes: latest tags, root containers, missing probes.

You do not need to build a platform on day one. You need to be able to explain why a pod is
pending, why a request is timing out, and what happens when a node disappears.

## Phase 4: observability

Observability is a design property, not a vendor. Learn the three signals, then learn how to make
them useful. A dashboard nobody reads is cost, not observability.

Build:

- Structured logs with a request ID that crosses service boundaries.
- Metrics for latency, errors, saturation, and the business action that matters.
- A trace for one request through at least two services.
- One SLO with an error budget and an alert tied to user impact.

Read the Google SRE book for the vocabulary, then throw away the parts that do not fit your
scale. A five-person team does not need a multi-window burn-rate policy for every endpoint.

## Phase 5: the platform product

This is where platform engineering becomes a product discipline. Your users are developers. Your
job is to reduce the time from “I have an idea” to “it is running safely,” without hiding the
knobs they need.

Build:

- One golden path: a template or CLI that creates a service with CI, deployment, logging, and
  alerts already wired.
- Documentation written as a task, not a feature list.
- A feedback loop: office hours, a support channel, and a way to measure adoption.
- A deprecation policy for the template, because version one will be wrong.

The CNCF platforms white paper is useful here, but the harder reading is Team Topologies. Most
platform failures are organizational: the platform team builds what it finds interesting, not
what delivery teams are blocked on.

## Phase 6: operations

You are not done when it deploys. You are done when it can be upgraded, observed, and restored.

Build:

- A runbook for the top three failure modes, tested by someone who did not write it.
- A capacity and cost review with a concrete change.
- An upgrade of the cluster or a major dependency, with a rollback.
- A blameless postmortem for a real incident, including the action items that actually shipped.

## What not to learn first

- **Service mesh before you have services.** A mesh solves traffic problems you do not have yet.
- **A platform portal before a golden path.** A UI over an undefined process is a nicer way to be
  confused.
- **Every CNCF project.** The landscape is a menu, not a checklist. Pick the smallest tool that
  solves the current constraint.
- **Certifications as a substitute for operating.** They are useful vocabulary. They are not
  evidence that you can run an upgrade on a Friday.

## A review checklist for your own progress

- [ ] I can explain a request from DNS to application code.
- [ ] I have built and rolled back a deployment without copying commands I do not understand.
- [ ] I have debugged a failing pod using events, logs, and resource metrics.
- [ ] I have written an alert that fired for a real user-impacting condition.
- [ ] Another team has used something I built without me in the room.
- [ ] I have upgraded a production dependency and written down what broke.
- [ ] I can explain the cost of the platform per month and the largest driver.
- [ ] I have a runbook that a new teammate could follow at 2 a.m.

The path is not linear, and the titles are noise. The useful question is always the same: can you
make a safe change easier for someone else? That is the job.
