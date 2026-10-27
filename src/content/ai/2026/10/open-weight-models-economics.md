---
title: "Open-weight models: the bill arrives after the benchmark"
date: 2026-10-23
format: analysis
summary: "Open weights remove a licence fee, not the operating cost. The decision hinges on utilisation, latency, privacy and the team you can staff."
tags: [open-weights, inference, cost, llmops]
status: current
briefing:
  changed: "Open-weight models are good enough for a growing set of production tasks, and the tooling to serve them is mature enough to run without a research team."
  why: "Teams compare a per-token API price with a GPU hourly rate and conclude they will save money. That comparison omits utilisation, operations, evaluation, and the cost of being wrong."
  action: "Model total cost at your real utilisation: GPU hours, idle capacity, staff time, evaluation, security and failover. Run a shadow workload before moving a customer-facing path."
sources:
  - { title: "vLLM documentation", url: "https://docs.vllm.ai/" }
  - { title: "Hugging Face — text generation inference", url: "https://huggingface.co/docs/text-generation-inference" }
  - { title: "Mistral — models overview", url: "https://docs.mistral.ai/getting-started/models/" }
  - { title: "Llama — model and licence information", url: "https://www.llama.com/" }
  - { title: "NIST — AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" }
---

The pitch for open weights is simple: you already own the hardware, you control the data, and
nobody can change the price or deprecate the model on a Tuesday. The first two are real
advantages. The third is only true if you can operate the thing.

The financial case is where most evaluations go wrong. A hosted model bills per token, so the
marginal cost is visible and the fixed cost is zero. A self-hosted model has the opposite shape:
a large fixed cost, a marginal cost that looks tiny, and a utilisation problem that decides
whether the maths works.

## The utilisation trap

A GPU that is 15% busy costs the same as one that is 85% busy. If your workload is bursty, you
either over-provision for the peak or accept queueing at the peak. Hosted APIs pool that
variability across customers; you are now the pool.

A useful first calculation:

```text
monthly GPU cost = (GPUs × hourly rate × 730) × (1 + redundancy factor)
effective cost per 1M output tokens = monthly GPU cost / monthly output tokens
```

If the result is close to the API price, the self-hosted option is not cheaper. It is a different
risk profile with more control. If it is dramatically cheaper, check the assumptions: are you
counting the idle replica, the canary, the evaluation environment, and the engineer who owns the
upgrade?

## What the benchmark does not measure

Public benchmarks are useful for eliminating models, not for choosing one. They rarely tell you:

- How the model behaves on your domain vocabulary and your formatting rules.
- What happens to latency at the 95th percentile when the context is long.
- Whether quality degrades after quantisation in a way your users notice.
- How much prompt engineering the smaller model needs to match the larger one.
- What the failure mode looks like when the model is overloaded.

Run your own evaluation set. Keep it small, versioned, and focused on decisions your product
actually makes. A 200-example eval with human review beats a leaderboard screenshot.

## The operational surface

Serving a model is not a single binary. You are adopting a stack:

| Layer | What you now own | Common failure |
|---|---|---|
| Runtime | Batching, scheduling, KV cache | Throughput collapses under long contexts |
| Hardware | GPU capacity, drivers, firmware | Version drift after a node replacement |
| Model | Weights, tokenizer, chat template | Template mismatch changes output silently |
| Gateway | Auth, quotas, routing, retries | One tenant consumes the whole pool |
| Evaluation | Regression suite, human review | Upgrades ship on vibes |
| Observability | Latency, tokens, errors, cost | You cannot attribute spend to a team |
| Security | Model supply chain, prompt logging | Weights or prompts leak through telemetry |

Each row is a service you did not have before. The team that runs it needs to be on call for it.

## The costs that survive a successful migration

Most of the analysis above assumes the first deployment is the hard part. In practice the first
cut is the cheapest month you will have. Three recurring costs are easy to miss because nothing
breakes when you skip them.

**Upgrades are a project, not a patch.** A new model version is not a security update you apply
and forget. Weights change output, so every upgrade reopens the evaluation workload: run the
frozen set, review the diffs, and decide whether the regression is acceptable. Budget a fixed
fraction of someone's month for this, in perpetuity. A platform with no upgrade budget is a
platform that quietly freezes on a version from two years ago.

**Failover is a second deployment.** If the model is load-bearing, you need a plan for the node,
the driver, or the weights failing. The cheap version is a warm fallback to the hosted API for the
same task; the expensive version is a second self-hosted pool. Whichever you choose, it costs
capacity you pay for and rarely use. Leaving the hosted path cold to save money is a bet that your
hardware never fails at a bad time.

**The exit path is a design constraint.** If every prompt, tool schema and output parser is
entangled with one model's quirks, moving later is a rewrite. Keep the model behind a narrow
interface: a typed task contract, a pinned prompt template, and an evaluation that runs against
any implementation. The point is not to leave. The point is that a credible exit keeps both the
hosted provider and your own platform honest on price and reliability.

These three costs are why the decision is a platform investment rather than a line item. They are
also why the correct first move is a bounded workload: it lets you measure the recurring cost on
something small before you commit a customer-facing path to it.

## When self-hosting wins

The case is strongest when at least two of these are true:

- **Data cannot leave your environment.** Regulatory, contractual, or threat-model constraints
  make a hosted endpoint a non-starter.
- **Utilisation is high and predictable.** A batch pipeline that runs all day, or a product with
  steady traffic, can keep the pool busy.
- **Latency is a product requirement.** Co-locating the model with the application removes a
  network hop and a provider's queue.
- **You need a model you can modify.** Fine-tuning, distillation, or a domain-specific model that
  no provider offers.
- **You can staff the platform.** At least one engineer owns upgrades, capacity, and evaluation,
  and has time to do it properly.

The case is weakest when the workload is spiky, the team is small, and the task is generic. In
that case, the API is not a compromise. It is the correct build-versus-buy decision.

## A shadow-run playbook

Before moving a customer-facing path:

1. **Pick one bounded task.** Summarisation with a fixed template, classification with a known
   label set, or extraction with a schema. Avoid open-ended chat for the first migration.
2. **Freeze the evaluation set.** Include the ugly cases: long inputs, ambiguous labels, missing
   fields, adversarial text.
3. **Run both paths in parallel.** Send production traffic to the hosted model, mirror a sample
   to the self-hosted one, and compare outputs offline. Do not let the new model take actions.
4. **Measure the tail.** P50 latency is marketing. P95 and P99 decide whether users wait.
5. **Model the cost at three utilisation levels.** Current, 2× growth, and a bad week. If the
   answer only works at perfect utilisation, it does not work.
6. **Write the rollback.** Keep the hosted path warm until the new path has survived a full
   traffic cycle, including a model upgrade.

<aside class="callout callout-warning">
  <p class="callout-title">Do not forget the licence</p>
  <p>“Open weights” is not the same as “no conditions.” Check the licence for commercial use,
  attribution, acceptable-use terms, and redistribution. Have someone who reads licences confirm
  the interpretation for your deployment model.</p>
</aside>

## The decision, in one page

Self-hosting is a platform investment. It buys control, privacy, and potentially lower marginal
cost at scale. It costs utilisation risk, operational headcount, and a permanent evaluation
workload.

If you cannot name the engineer who will own the upgrade next quarter, you are not ready to move
the customer-facing path. Start with a batch workload or an internal tool. Prove the operating
model before you prove the benchmark.

The benchmark tells you whether the model can do the task. The bill and the on-call rota tell you
whether you can afford to run it.
