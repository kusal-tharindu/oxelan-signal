---
title: Claude Fable 5.2 solves two open problems in black hole physics
date: 2026-11-18T23:41:30.937Z
format: news
summary: Claude has solved two open problems in theoretical physics about black
  holes and quantum gravity, work that ran through parallel agents for about six
  weeks and was formally verified in Lean.
description: Claude solved two open problems in black hole and quantum gravity
  physics; the results were formally verified in Lean.
tags:
  - ai-agents
  - ai-governance
impact: info
action: none
status: current
briefing:
  changed: Claude solved two open problems in theoretical physics concerning black
    holes and quantum gravity, and the results were formally verified in a
    computerized proof checker.
  why: Neither result describes our own universe directly, but both contribute to
    the long-running effort to reconcile quantum mechanics and relativity.
  action: "There is nothing to patch: neither result describes our own universe
    directly, and neither has practical applications."
sources:
  - title: Claude Fable 5.2 solves two open problems in the physics of black holes
    url: https://www.anthropic.com/research/claude-black-hole-physics
---

Claude has solved two open problems in theoretical physics concerning black holes and quantum gravity. The work started when Anthropic researcher Hongbin Chen asked Claude in August for a list of interesting open problems in theoretical physics, focusing on black holes and the bootstrap method. Claude returned 22 candidate problems, and separate agents worked on each one, able to read each other's progress posts and collaborate. The agents ran in the background, with no special setup, for about six weeks.

## The first problem

The first problem concerns what happens when one of these theoretical universes is heated: at low temperatures it fills with a gas of particles, and above a certain temperature a black hole forms. In 1983, Stephen Hawking and Don Page showed the switch is abrupt, a phase transition like water boiling. In 1999, physicists found a phase transition in the quantum regime as well, but did not know whether it was abrupt or smooth.

In 2003, a group of physicists set out the calculation that would settle the question, but it was extremely complex and was never completed. Claude completed that calculation and showed the phase transition is abrupt, with the same sudden switch appearing at both extremes.

## The second problem

The second problem concerns a simplified theoretical universe with two dimensions of space instead of three. Since 2009, physicists have used a version of the bootstrap method, which rules out wrong theories of quantum gravity by showing they are internally inconsistent, to set a ceiling on how heavy the lightest black hole could be. Claude Fable 5.2 noticed a pattern in the numerical results that physicists had missed and calculated the precise ceiling for the simplest version of the technique, proving it could not be lowered. An earlier Claude agent had tried and failed to solve that bootstrap problem in 61 parallel attempts.

## Verification

In September, the results were formally verified in Lean, a computerized proof checker. Claude wrote the paper with minimal guidance, and a physicist checked every main result.

## Why it matters

Both results contribute to a long-running theoretical effort to understand how quantum mechanics and relativity fit together.

## What to do

There is nothing to patch here: neither result describes our own universe directly, and neither has practical applications. The preprints for both findings are available.

<!-- cspell:words Hongbin -->
