---
title: Claude Code's local settings file leaks secrets into public repositories
date: 2026-11-08T06:59:45.701Z
format: news
summary: According to The Hacker News, 1,122 public copies of Claude Code's
  .claude/settings.local.json hold at least one secret, and the files remain on
  default branches.
description: Apiiro found 1,122 public copies of Claude Code's settings file
  with secrets; scanners miss some and the files stay on default branches.
tags:
  - llm-security
  - ai-agents
  - authentication
impact: high
action: review
status: current
affects:
  - Claude Code
  - Repositories that track .claude/settings.local.json
briefing:
  changed: According to The Hacker News, 1,122 public copies of
    .claude/settings.local.json hold at least one secret, out of 104,185 copies
    in 103,617 repositories.
  why: The files hold 1,379 secrets, including 379 database passwords, 43 SSH
    logins and 23 AWS keys, and every one was still on its default branch.
  action: Rotate every password, token and key the files have ever held; then
    untrack .claude/settings.local.json with git rm --cached and add it to
    .gitignore.
sources:
  - title: "The Hacker News: Claude Code's “Don't Ask Again” File Exposes Passwords
      and Keys in 1,122 Public Copies on GitHub"
    url: https://thehackernews.com/2026/11/claude-codes-dont-ask-again-file.html
---

According to The Hacker News, 1,122 public copies of the file `.claude/settings.local.json` hold at least one secret, out of 104,185 copies that Apiiro found in 103,617 public GitHub repositories. The 1,122 files together hold 1,379 different secrets. More than a third of those secrets open a database directly, including 379 database passwords, the report says.

The file is Claude Code's project-local settings file. Of 16 coding agents whose documentation the researchers compared, Claude Code is the only one confirmed to save the full approved command in a project file by default, the report says. The exposed material includes 43 SSH logins for public servers, 42 tokens for GitHub, GitLab and npm, and 23 AWS keys. Among the owners of the files are 63 organizations, mostly software companies.

## What is exposed

A bug report filed on August 11, 2025 said approved commands with API keys and tokens were being stored word for word in settings.local.json. An automated bot closed that report as "not planned" on January 3.

In 539 of the 1,105 repositories the researchers traced, a commit listing Claude as a co-author changed the file. Older versions of the file contain 734 more secrets across 509 repositories, none present in any current copy. Forks spread the files further: 211 forks of 74 repositories carry the same secrets as the originals.

## Why it matters

Detection is partial: of the 1,122 files with a secret, gitleaks flagged 564 and TruffleHog 643, and neither flagged 215. Counting shared settings, older versions and saved agent chat logs, the total is 2,539 secrets across 1,994 repositories. As of Monday, every file with a secret was still on its repository's default branch, and in half of those repositories it had been there for at least 217 days.

## What to do

The report's advice is to rotate every password, token and key the files have ever held, before cleaning up. Stop tracking the local file with `git rm --cached .claude/settings.local.json` and add it to the repository's own `.gitignore`. Security teams should treat agent folders such as `.claude/`, `.cursor/`, `.gemini/` and `.specstory/`, and agent memory files, as holding secrets, like `.env` files, on laptops as well as in repositories.

<!-- cspell:words Apiiro -->
