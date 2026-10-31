---
title: GitHub package firewall preview blocks malicious npm packages
date: 2026-10-31T15:06:11.549Z
format: news
summary: GitHub launched a package firewall in public preview for GitHub
  Enterprise Cloud that blocks malicious npm packages before installation.
description: GitHub package firewall preview blocks malicious npm packages at install time.
tags:
  - supply-chain
  - npm
impact: info
action: review
status: current
briefing:
  changed: GitHub introduced a package firewall in public preview for GitHub
    Enterprise Cloud customers.
  why: The firewall inspects metadata requests and package downloads for signs of
    malicious activity, acting as an install-time policy gate before packages
    reach your build environment.
  action: Enterprise administrators should evaluate the preview, starting with the
    default On controls such as block known malware.
sources:
  - title: Protecting endpoints with GitHub package firewall - GitHub Enterprise
      Cloud Docs
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/protecting-endpoints-with-package-firewall
  - title: GitHub package firewall in public preview - GitHub Changelog
    url: https://github.blog/changelog/2026-10-20-github-package-firewall-in-public-preview/
---

## What changed

GitHub introduced a package firewall in public preview for GitHub Enterprise Cloud customers, including data-resident deployments. The firewall sits between endpoints or internal registries and upstream package repositories and currently supports only npm packages. During the preview the service is free; at general availability it will be charged based on metered usage similar to Actions billing.

## How the controls work

The firewall inspects metadata requests and package downloads for signs of malicious activity, acting as an install-time policy gate before packages reach your build environment. The block known malware control checks the GitHub Advisory Database for active malware advisories and defaults to On. Block vulnerability advisories defaults to Critical only and can be set to High or higher, Medium or higher, or Any severity. Minimum package age defaults to 1 day and accepts values from 0 to 365 days; the firewall blocks versions newer than that age. Block attestation downgrades blocks a download when a package previously had Supply-chain Levels for Software Artifacts (SLSA) attestations but the requested version does not. Block newly-introduced install scripts checks for recently added preinstall or postinstall scripts and defaults to On.

## What to do

Enterprise administrators and enterprise security managers can modify the firewall policy by default; to grant access to others, add the "Edit enterprise-level package firewall policy" fine-grained permission to a custom role. Configure npm to use the firewall registry URL for your enterprise and include an authentication token from an enterprise member with read-only access to public repositories. When the firewall blocks a package, the npm output or continuous integration/continuous delivery (CI/CD) log includes a URL for requesting an exception. JFrog Artifactory support is experimental, so test that integration before relying on it.
