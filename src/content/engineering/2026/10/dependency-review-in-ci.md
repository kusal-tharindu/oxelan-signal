---
title: "Dependency review in CI: lockfiles, provenance and install scripts"
date: 2026-10-27
updated: 2026-10-27
format: guide
summary: "A practical pipeline for catching malicious dependencies before they run: pin with a lockfile, block install scripts, verify provenance where it exists, and diff dependencies on every pull request."
tags: [supply-chain, ci-cd, npm, devops, security]
status: current
action: review
sources:
  - { title: "OpenSSF — GitHub expands malware advisories across eight ecosystems", url: "https://openssf.org/blog/2026/10/16/case-study-github-expands-malware-advisories-across-eight-ecosystems-with-openssf" }
  - { title: "npm — generating provenance statements", url: "https://docs.npmjs.com/generating-provenance-statements" }
  - { title: "OpenSSF — malicious-packages repository", url: "https://github.com/ossf/malicious-packages" }
  - { title: "npm — scripts documentation (ignoring scripts)", url: "https://docs.npmjs.com/cli/using-npm/scripts" }
---

Malicious packages arrive through the same door as legitimate ones: your installer. This guide is
the pipeline that catches them before they run and the review you run when something slips
through. It is written for npm, but every step has a direct equivalent in PyPI, Go, Rust or Maven
workflows. It assumes nothing beyond your existing CI.

**Last reviewed: 27 October 2026.** Re-review monthly, or after any install-time incident,
whichever comes first. The update path is listed at the end.

## The goal

Six controls, ordered by cost. None requires a vendor. Together they change the failure mode from
"a malicious package ran on our build hosts" to "a PR wanted a new package and a human said no."

## 1. Commit the lockfile and install from it

CI installs with `npm ci`, never `npm install`. The lockfile is committed, and lockfile diffs are
reviewed as code, because a lockfile diff is where a supply-chain attack becomes visible: a
dependency that should not have moved, a new transitive package from a namespace you have never
seen.

```bash
npm ci --ignore-scripts
```

If a pull request changes `package-lock.json`, the diff deserves the same scrutiny as the code
change that caused it. New transitive dependencies on an unrelated PR are the signal, not the
noise.

## 2. Block lifecycle scripts by default

`npm install` runs `preinstall`, `install`, and `postinstall` scripts from your dependencies. This
is the window every install-time malware campaign uses — the loader in the recent MALFEX campaign
was triggered from a compiled native addon at install time, which is exactly the code path
`ignore-scripts` closes.

```bash
# .npmrc, committed to the repository
ignore-scripts=true
```

When a legitimate package needs a build step, allowlist it explicitly after review. The list is
short, it is visible in the repository, and it is the difference between "we block install scripts"
and "we block install scripts except the forty packages that opted out silently."

## 3. Verify provenance where it exists

Publishers can attach provenance: a signed statement, verifiable against Sigstore, that the package
was built by a named CI workflow from a named repository. On the consuming side, verification
happens at install time where the ecosystem supports it.

What provenance does **not** tell you: that the publisher is trustworthy. A compromised maintainer
whose CI is the thing being abused publishes perfectly provenance-attested malware. Provenance
answers "did this come from where it claims," which eliminates the typosquat and the registry-side
tamper. It does not eliminate the compromised maintainer. Use it as one control, not the control.

## 4. Diff dependencies on every pull request

Dependency-review tooling compares the base and head lockfiles of a pull request and flags new or
changed packages against an advisory database. As of October 2026, the GitHub Advisory Database
includes OpenSSF's malicious-packages data across eight ecosystems — npm, PyPI, Maven, RubyGems,
NuGet, Go, crates.io and Composer — which matters because malware advisories and vulnerability
advisories are different records. A package with no CVEs can still be malware, and until this
coverage expanded, those two records lived in different places.

Configure the review to fail the build on new advisories and to warn on everything else. A hard
block on any new dependency is usually too much friction to survive; a hard block on new
*malicious* advisories survives fine.

## 5. Scan what you already have

Pull-request coverage protects new decisions. Your existing dependency tree and your CI caches
need their own pass:

- Run a lockfile-based scan (OSV or equivalent) on a schedule, not only at PR time.
- Search CI caches and container layers for specific package names when an incident publishes an
  indicator list; caches outlive the lockfile that first pulled the package in.
- For high-risk ecosystems, an internal mirror or allowlist is the strongest form of this control:
  nothing installs that a human has not seen once.

## 6. Know what happens when one gets through

Every control above eventually fails on something. The difference between a bad afternoon and a
bad week is whether the response has an owner and a rehearsed sequence. That is the subject of
[the first 60 minutes of a supply-chain incident](/security/supply-chain-first-60-minutes/), and
this pipeline's job is to make that clock rarer and shorter. The current campaign worth reading
for the failure modes is [MALFEX](/security/malfex-npm-campaign/).

## The review checklist

- [ ] Lockfile committed; CI uses `npm ci`, not `npm install`.
- [ ] Lockfile diffs reviewed as part of PR review.
- [ ] `ignore-scripts=true` in `.npmrc`; exceptions allowlisted and justified.
- [ ] Provenance verified on install where the ecosystem supports it.
- [ ] Dependency review runs on every PR and blocks on new malware advisories.
- [ ] Scheduled lockfile scan against OSV or equivalent.
- [ ] CI caches are in scope for incident indicator searches.
- [ ] Incident response has a named owner for credential rotation.

## What this does not do

This pipeline is about what happens at install time. It does not constrain what a package does at
runtime — a dependency that behaves normally until a trigger date passes every check above. Runtime
egress control and secret scoping are the complementary controls, and they live in the deployment,
not the pipeline.

## Updating this guide

Re-review monthly or after any install-time incident. When the ecosystem changes a control —
provenance verification defaults, advisory database coverage, lifecycle-script policy — update the
relevant step and bump the review date at the top. The sources below are the primary references
this revision is built on.
