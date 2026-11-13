---
title: Attacker used 4,837 hijacked GitHub accounts to plant a workflow secret stealer
date: 2026-11-12T07:54:30.366Z
format: news
summary: An attacker used stolen credentials for 4,837 GitHub accounts to plant
  a secret stealer in repositories those accounts could write to, with the
  stealer running in at least 1,806 repositories.
description: Stolen credentials for 4,837 GitHub accounts were used to plant a
  secret stealer in repositories, with at least 1,806 repositories affected.
tags:
  - supply-chain
  - ci-cd
  - github-actions
  - incident-response
impact: critical
action: review
status: current
briefing:
  changed: An attacker used stolen credentials for 4,837 GitHub accounts to plant
    a secret stealer in repositories those accounts could write to; the stealer
    ran in at least 1,806 repositories.
  why: The stealer collects GitHub Actions secrets, tokens, cloud credentials and
    AI service keys, and can exchange OIDC tokens for cloud sessions.
  action: "Block digitalelvis/neuronai-studio v3.14.3 and pin v3.14.2 or earlier,
    and review repositories for pull requests titled 'docs: dependency audit
    notes' from branch wfx-docs."
sources:
  - title: "GhostAction Returns: Fake 'Security Audit' Workflows Steal CI Secrets"
    url: https://safeguard.sh/resources/blog/ghostaction-returns-security-audit-workflow-github
  - title: "The Hacker News: Attacker Used 4,837 Hijacked GitHub Accounts to Run a
      CI Secret Stealer in 1,806+ Repositories"
    url: https://thehackernews.com/2026/11/4837-hijacked-github-accounts-ran-ci.html
---

According to The Hacker News, an attacker used stolen credentials for 4,837 GitHub accounts to plant a secret stealer in repositories those accounts could write to. The stealer ran in at least 1,806 repositories, the report says. Each attack started with a pull request titled "docs: dependency audit notes" opened from a branch named wfx-docs.

## What is affected

The report says the test pull requests were opened in 61,764 repositories, and the stealer followed in some of them. SafeDep counted 8,093 repositories that received malicious commits between 12:46 UTC on Tuesday and 04:36 UTC today, according to the report. In 7,309 of those repositories the stealer was added to an existing workflow, and in 771 it came as an npm postinstall hook, which also runs on a developer's machine during npm install.

## Why it matters

The stealer collects GitHub Actions secrets and variables, the workflow's GITHUB_TOKEN, OIDC (OpenID Connect) and Actions runtime tokens, and keys for AI services. It reads credential files for AWS, Azure, Google Cloud (GCP), Kubernetes, npm, PyPI, SSH and other tools. It exchanges GitHub OIDC tokens for AWS, Google Cloud and Azure sessions, and on AWS it can create long-lived access keys for IAM (identity and access management) users. It can also rewrite an AWS role's trust policy to open the role to any AWS account, and add federated identity credentials with the prefix wfx-ci- to Azure AD applications.

Version 3.14.3 of the Packagist package digitalelvis/neuronai-studio is malicious.

On October 8, 2026, two hijacked GitHub maintainer accounts pushed a workflow called a "security audit" to more than 340 repositories in a single day. GitGuardian links the campaign to GhostAction, first documented in September 2025. The likely entry point is a leaked token from infostealer logs. GitHub began preventing the malicious workflow from running on October 9.

## What to do

Users should block digitalelvis/neuronai-studio v3.14.3 and pin v3.14.2 or earlier. Review repositories for pull requests titled "docs: dependency audit notes" from the branch wfx-docs.

<!-- cspell:words digitalelvis neuronai Packagist -->
