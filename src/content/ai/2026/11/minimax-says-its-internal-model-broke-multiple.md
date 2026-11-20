---
title: MiniMax says its internal model broke multiple cryptographic candidates
date: 2026-11-20T15:40:52.829Z
format: news
summary: MiniMax used an internal-only research model, MIM, to run automated
  cryptanalysis that broke multiple academic and competition candidate schemes;
  deployed standards are unaffected.
description: MiniMax's internal research model produced practical breaks against
  academic and past competition candidates, not deployed standards.
tags:
  - llm-security
  - ai-governance
impact: info
action: review
status: current
briefing:
  changed: MiniMax says its internal-only research model, MIM, ran automated
    cryptanalysis that produced practical breaks against multiple candidate
    algorithms and found unreported implementation bugs.
  why: The company reports speedups of hundreds to tens of thousands of times over
    prior state-of-the-art solvers on public cryptographic challenges, which is
    a signal for automated security research.
  action: Review the published reasoning trajectories and proof-of-concept code;
    the work does not affect deployed cryptographic standards, so no patching is
    required.
sources:
  - title: Practical cryptanalysis with MiniMax's latest Internal Model  - MiniMax
      Research
    url: https://www.minimax.io/blog/practical-cryptanalysis-with-minimaxs-latest-internal-model
---

MiniMax used an internal-only research model it calls MiniMax's Internal Model (MIM) to run automated cryptanalysis across modern cryptographic schemes. The company reports that MIM produced the first practical breaks against multiple candidate algorithms that previously had no known practical attacks.

The runs were measured against CryptanalysisBench (NeurIPS 2026), a benchmark from researchers at ETH Zurich, Anthropic and collaborators that collects entries from four NIST (National Institute of Standards and Technology) standardization competitions. Its Tier 2 holds 135 publicly reviewed schemes with no known practical attacks, together with 7 production-strength challenge schemes.

MiniMax says MIM built the first practical collision attack on Waterfall-256, a NIST SHA-3 (Secure Hash Algorithm 3) candidate, finding collisions across all output lengths in 0.045 seconds on a single core. It also found full-round collisions in Blender-256, another SHA-3 candidate, in 0.36 to 2.3 seconds on a single core. On LOCKER, a NIST post-quantum candidate (a scheme designed to resist quantum-computer attacks), it shrank the solver matrix from 42 petabytes to 58 megabytes and recovered the shared secret across all parameter sets in 2 seconds. MIM also found and exploited more than a dozen unreported implementation bugs in Tier 2 reference code.

## Why it matters

The headline is less any single break than the automation: MiniMax says MIM solved dozens of previously unsolved high-order instances in public cryptographic challenges, with measured speedups of hundreds to tens of thousands of times over prior state-of-the-art solvers. It reports that, compared with Anthropic's analysis, MIM lowered bit-security estimates across all HAWK parameter sets by another 9.3 to 23.8 bits and recovered an equivalent secret key in 30 minutes on a single core.

## What to do

The work focuses on academic designs, past competition candidates and public challenge parameters, and does not affect deployed cryptographic standards. MiniMax says it shared the findings with the authors of the respective schemes in advance, and released validated reasoning trajectories as technical reports plus proof-of-concept code at https://github.com/MiniMax-AI/Research. The reports and code are the primary material for anyone checking the claims.

<!-- cspell:words Neur -->
