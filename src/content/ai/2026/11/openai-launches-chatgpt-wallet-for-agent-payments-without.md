---
title: OpenAI launches ChatGPT Wallet for agent payments without card details
date: 2026-11-13T21:41:35.705Z
format: news
summary: OpenAI introduced ChatGPT Wallet, which lets agents pay through a
  payment token instead of the user's card details, starting with ChatGPT Pro
  subscribers in the US.
description: ChatGPT Wallet lets agents pay with a payment token instead of card
  details, starting with ChatGPT Pro subscribers in the US.
tags:
  - ai-agents
  - authentication
impact: info
action: review
status: current
briefing:
  changed: OpenAI introduced ChatGPT Wallet, a wallet that lets agents pay without
    access to users' actual card details, with a security check for every
    purchase.
  why: After approval, the payment network provides a payment token that
    substitutes for the user's actual card details, so an agent completes a
    purchase without holding the card number.
  action: Businesses that sell through agents can configure their CDN or firewall
    to recognize signed requests using Web Bot Auth, and read OpenAI's Commerce
    Partner Playbook.
sources:
  - title: Introducing ChatGPT Wallet
    url: https://openai.com/index/introducing-chatgpt-wallet
---

OpenAI introduced ChatGPT Wallet, a wallet that lets agents pay without access to users' actual card details. The company says it requires a security check for every purchase. OpenAI built it in partnership with American Express, Mastercard, and Visa.

OpenAI said ChatGPT Wallet begins rolling out today in dots, where it will initially be available for ChatGPT Pro subscribers in the US. Eligibility covers subscribers aged 18 and older in the US with eligible US-issued cards.

## How the payment flow works

Users add a card once, then approve each purchase without re-entering their payment details. Each approval goes through a security check such as Face ID or a fingerprint scan. After approval, the payment network provides a payment token, a substitute for the user's actual card details, with a card number, security code, and expiration date. Users keep their card's existing rewards and protections for eligible disputes with businesses, for example when an item is defective.

## Why it matters in production

1.2 billion people use ChatGPT each week, and many of them turn to it to research products. OpenAI said it is working with fraud prevention partners including Forter, Riskified, Sardine and Signifyd. It is also working with payment service providers including Adyen, Checkout.com, and Stripe to help their systems recognize legitimate purchases made by agents.

## What to do

OpenAI is publishing a Commerce Partner Playbook with tools and practical guidance to help businesses support customers using agents through their existing websites and systems. Businesses can configure their CDN (content delivery network, the edge layer that serves and filters traffic for a site) or firewall to recognize signed requests using Web Bot Auth so ChatGPT agents can access their website. OpenAI also asks businesses to confirm that general site security measures are not inadvertently blocking ChatGPT agents.

<!-- cspell:words Forter Riskified Signifyd Adyen -->
