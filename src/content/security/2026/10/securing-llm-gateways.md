---
title: "Securing LLM gateways: a production checklist"
date: 2026-10-22
updated: 2026-10-26
format: guide
summary: "A gateway centralizes model access, but it also centralizes credentials, data and failure. Use this checklist before it becomes the single point of compromise."
tags: [llm-security, gateway, kubernetes]
status: current
action: review
updates:
  - { date: 2026-10-26, note: "Added egress and token-scope checks; clarified streaming failure behavior." }
  - { date: 2026-10-22, note: "First published." }
sources:
  - { title: "OWASP: Top 10 for LLM applications", url: "https://genai.owasp.org/llm-top-10/" }
  - { title: "Envoy AI Gateway documentation", url: "https://aigateway.envoyproxy.io/" }
  - { title: "Kubernetes: good practices for Secrets", url: "https://kubernetes.io/docs/concepts/security/secrets-good-practices/" }
  - { title: "OpenTelemetry: GenAI semantic conventions", url: "https://opentelemetry.io/docs/specs/semconv/gen-ai/" }
  - { title: "NIST: AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" }
---

An LLM gateway sits between your applications and one or more model providers. It usually owns
provider keys, prompt routing, rate limits, retries, and sometimes logging. That makes it a
high-value target and a high-blast-radius failure. The goal of this checklist is not to make the
gateway clever. It is to make it boring, observable, and easy to revoke.

Use it as a review, not a score. Every unchecked item should have an owner and a date.

## 1. Identity and access

- [ ] Applications authenticate to the gateway with a workload identity or a scoped token, never
      with a shared static key copied into every service.
- [ ] Each calling application has its own credential and quota. Revoking one does not require a
      deploy of the others.
- [ ] Human access to the gateway admin API is behind SSO and a separate role from runtime access.
- [ ] The gateway cannot be reached from the public internet unless a documented use case requires
      it; if it can, there is an explicit auth layer and rate limit at the edge.
- [ ] Provider keys are held in a secret manager or an external secret operator, not in a
      ConfigMap, an image, or a CI variable that every workflow can read.

## 2. Request policy

- [ ] A request is rejected if its model, tenant, or feature is not in an allowlist.
- [ ] Maximum input and output tokens are enforced per route, not only per provider.
- [ ] Timeouts and retries are bounded; retries do not multiply cost or duplicate side effects.
- [ ] Streaming responses have a maximum duration and a cancellation path.
- [ ] Tool or function definitions are validated against a schema and cannot be supplied by an
      untrusted client if the gateway is multi-tenant.
- [ ] Prompt templates live in a reviewed store, not in a request parameter controlled by the
      caller, when the gateway is used for privileged workflows.

<aside class="callout callout-note">
  <p class="callout-title">Policy belongs at the edge, not in the prompt</p>
  <p>A system prompt is not an authorization layer. If a route is allowed to call a tool or read a
  dataset, enforce that in code before the provider request. The model may still be persuaded to
  misbehave inside the allowed scope.</p>
</aside>

## 3. Data handling

- [ ] The gateway knows which routes may send data to which providers, and rejects a provider that
      is not approved for the tenant.
- [ ] Prompt and completion logging is off by default, or redacted and retention-limited.
- [ ] Secrets, tokens, and personal data are scrubbed before logs leave the process.
- [ ] Request bodies are not written to a queue or object store without the same retention rules
      as the logs.
- [ ] Cache keys include tenant and model; a cache hit cannot cross a tenant boundary.
- [ ] Embeddings and retrieved documents follow the same classification as the prompt they came
      from.

## 4. Egress and provider trust

- [ ] The gateway has a documented egress path. If it can reach arbitrary hosts, there is a proxy
      allowlist and the reason is written down.
- [ ] Provider endpoints are pinned by hostname; a model name cannot redirect traffic to an
      arbitrary URL.
- [ ] TLS verification is on. No “temporary” insecure-skip-verify flags in production.
- [ ] Provider fallback does not silently move data to a region or vendor that the tenant has not
      approved.
- [ ] If self-hosted models are in the fallback chain, their network path and data retention are
      documented too.

## 5. Observability

- [ ] Every request has a trace or request ID that connects the application, the gateway, and the
      provider attempt.
- [ ] Metrics cover request rate, latency, token usage, provider errors, throttles, and cost per
      tenant.
- [ ] Denied requests are counted by reason. A spike in denials is a signal, not just noise.
- [ ] Logs record model, route, tenant, status, token counts, and latency. They do not record raw
      prompts by default.
- [ ] Alerts exist for provider error spikes, cost anomalies, and a sudden change in request size.
- [ ] There is a dashboard that answers “which application is spending the most this hour?” without
      a database query.

## 6. Failure behavior

- [ ] Provider timeout returns a bounded error; it does not hang a user request indefinitely.
- [ ] Retry and fallback behavior is tested, including the case where the fallback is also down.
- [ ] A model deprecation can be handled by config change, not a code deploy.
- [ ] The gateway can be drained without losing in-flight requests.
- [ ] Rate limits fail closed for privileged routes and may fail open for low-risk read-only routes;
      the choice is documented.
- [ ] There is a kill switch that disables a route or a provider without redeploying the gateway.

## 7. Supply chain and deployment

- [ ] The gateway image is pinned by digest and scanned in CI.
- [ ] Chart or manifest changes are reviewed like code; no `latest` tags.
- [ ] The gateway's own dependencies and plugins are in the SBOM.
- [ ] Network policies restrict which namespaces can reach the gateway and which egress it can use.
- [ ] The service account has no more permission than reading its own secrets and writing its own
      telemetry.
- [ ] Upgrade and rollback have been rehearsed, including schema or config migrations.

## 8. Incident readiness

- [ ] You can revoke a provider key and rotate it without a gateway outage.
- [ ] You can identify every tenant and application affected by a bad provider response or a
      leaked prompt.
- [ ] There is a documented way to disable a model, a route, or a tenant in under five minutes.
- [ ] The on-call runbook names the gateway owner and the provider escalation path.
- [ ] A tabletop exercise has been run for “provider key leaked” and “prompt data appeared in
      logs”.

## A minimal configuration sketch

The exact product does not matter. The shape does: one place for identity, one place for policy,
one place for telemetry, and no place where a caller can quietly bypass them.

```yaml
# Illustrative policy — adapt to your gateway.
routes:
  - name: support-summarize
    model: approved-small-model
    max_input_tokens: 12000
    max_output_tokens: 800
    allowed_tenants: [support]
    log_prompts: false
    tools: []
  - name: incident-assistant
    model: approved-reasoning-model
    max_input_tokens: 32000
    max_output_tokens: 2000
    allowed_tenants: [security]
    log_prompts: false
    tools: [search_runbooks, open_ticket]
    require_approval: [open_ticket]
```

## What “done” looks like

A new application can get a scoped credential, a route, and a quota without a gateway redeploy. A
leaked key can be revoked without finding every service that copied it. A cost spike has a
tenant and a route attached. A prompt-injection attempt produces a denied tool call and an alert,
not a data exfiltration.

That is a gateway doing its job: not adding intelligence, but making the dumb security boundaries
hard to bypass.
