---
title: Shopify sets IP allowlisting deadlines for public apps' Admin API access
date: 2026-11-06T16:43:52.790Z
format: news
summary: Shopify checks the source IP of Admin API requests, returns HTTP 403
  for unapproved addresses, and will fail requests from existing installations
  on April 1, 2027.
description: Shopify adds source IP checks on Admin API calls for public apps;
  existing installs have until April 1, 2027.
tags:
  - authentication
  - gateway
impact: info
action: review
status: current
affects:
  - Shopify public apps using the GraphQL Admin API and REST Admin API
briefing:
  changed: Shopify checks the source IP of Admin API requests for public apps, and
    existing installations will stop working on April 1, 2027.
  why: Requests from outside approved addresses or networks receive an HTTP 403
    response.
  action: Developers can list up to 10 ASNs and narrow access to up to 10
    countries; public apps must migrate to expiring offline tokens by January 1,
    2027.
sources:
  - title: "Cyber Security News: Shopify Mandates IP Allowlisting for Public Apps to
      Prevent Unauthorized Admin API Access"
    url: https://cybersecuritynews.com/shopify-mandates-ip-allowlisting/
---

According to Cyber Security News, Shopify checks the source IP of GraphQL Admin API and REST Admin API requests made with an app's tokens. The report says requests from outside approved addresses or networks receive an HTTP 403 response.

Existing installations can continue operating until April 1, 2027, when Admin API requests will fail. Merchants will receive admin warnings from January 15, 2027. Public apps must migrate to expiring offline tokens by January 1, 2027.

## Why it matters in production

Because the source IP check uses the app's tokens, an app that calls the Admin API from an unapproved network will receive HTTP 403. The check applies to both the GraphQL Admin API and the REST Admin API.

## What to do

Configure each public app to call the Admin API only from approved addresses or networks; requests from outside those ranges receive HTTP 403. Developers can list up to 10 ASNs (Autonomous System Numbers) and narrow access to up to 10 countries.
