---
title: "The EU AI Act’s GPAI rules are now a procurement question"
date: 2025-08-02
format: news
summary: "General-purpose AI obligations began applying in August 2025. If you buy or deploy a model, the documentation you can obtain is now part of your risk assessment."
tags: [ai-governance, eu-ai-act, compliance, procurement]
impact: medium
action: review
status: current
briefing:
  changed: "The EU AI Act’s general-purpose AI (GPAI) obligations started applying on 2 August 2025, with a longer runway for models already on the market."
  why: "Providers must publish or supply technical documentation, training-content summaries and copyright policies. Deployers need that material to assess downstream obligations and vendor risk."
  action: "Ask every model vendor for its GPAI documentation, model card, training-data summary and acceptable-use terms. Record the version you assessed and revisit it when the model changes."
sources:
  - { title: "European Commission — AI Act regulatory framework", url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" }
  - { title: "EUR-Lex — Regulation (EU) 2024/1689", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" }
  - { title: "European Parliament — AI Act overview", url: "https://www.europarl.europa.eu/topics/en/article/20230601STO93804/eu-ai-act-first-regulation-on-ai" }
---

The EU AI Act is not only a rule for companies building high-risk AI systems. It also creates a
documentation layer around general-purpose models, and that layer reaches anyone who deploys one.

From 2 August 2025, providers of general-purpose AI models placed on the EU market are subject to
obligations including technical documentation, a summary of training content, a copyright policy,
and information for downstream providers. Models with systemic risk have additional evaluation and
incident-reporting duties. The Act gave models already on the market a transition period, so the
exact date depends on the model and the provider.

## Why a deployer should care

You may not be the provider. You are still the party that chose the model, integrated it, and put
it in front of users. When a regulator, customer, or insurer asks how you assessed the model, “the
vendor’s website looked fine” is not an answer.

The useful artefacts to request:

- The model card and intended-use statement.
- A summary of training content, at the level the provider is required to publish.
- Evaluation results relevant to your use case, including known limitations.
- The provider’s acceptable-use policy and any use restrictions.
- Versioning and change-notification commitments.
- Security documentation: data retention, logging, subprocessors, and incident contact.

## A procurement checklist

- [ ] Model provider and model version are recorded, not just the product name.
- [ ] The provider’s GPAI documentation is saved with the assessment date.
- [ ] The intended use matches your use; prohibited or high-risk uses are flagged for legal review.
- [ ] Data residency and retention are documented and match the contract.
- [ ] A model change triggers a review, not a silent upgrade.
- [ ] The vendor can explain how it handles training-data rights and opt-outs.
- [ ] There is an escalation path for a security or safety incident.
- [ ] The assessment is repeated when the model, provider, or use changes.

<aside class="callout callout-note">
  <p class="callout-title">Not legal advice</p>
  <p>This is an engineering and procurement summary. The AI Act’s obligations depend on your role,
  jurisdiction, and use case. Get counsel for a binding interpretation.</p>
</aside>

The practical shift is small but real: model selection is now a documented decision. Keep the
documentation with the model version, and treat a provider’s silence as a risk, not a clean bill
of health.
