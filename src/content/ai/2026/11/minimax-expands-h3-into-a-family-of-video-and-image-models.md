---
title: MiniMax expands H3 into a family of video and image models
date: 2026-11-26T12:45:20.761Z
format: news
summary: MiniMax introduced the H3 Family, including the H3 and H3-Image series
  and extended models, 100 days after open-sourcing H3.
description: MiniMax's H3 Family adds H3, H3-Image and extended models, with
  published pricing and resolution options for video and image generation.
tags:
  - open-weights
  - inference
impact: info
action: review
status: current
briefing:
  changed: MiniMax introduced the H3 Family, including the flagship H3, H3-Image
    series and extended models, 100 days after open-sourcing H3.
  why: The H3 release has produced 1,472 derivative models and more than 148
    million downloads, and the family adds several serving options.
  action: Review the H3 Family lineup against resolution, latency and price; the
    flagship H3 and some extended models are available through the MiniMax Open
    Platform and MiniMax Code.
sources:
  - title: "The H3 Family: Models, Community, and What's Next - MiniMax Research"
    url: https://www.minimax.io/blog/minimax-h3-family
---

MiniMax introduced the H3 Family, which includes the flagship H3 and H3-Image series and a range of extended models. The company open-sourced MiniMax H3 100 days before the H3 Family announcement. In that time, developers created 1,472 derivative models from H3, and those models have been downloaded more than 148 million times.

The H3 Family includes several serving options. MiniMax H3 supports up to 2K output and starts at $0.08 per second. H3-Highspeed supports 768P or 480P output and starts at $0.04 per second; it generates a five-second clip in about 11 seconds on average and supports clips up to 30 seconds.

H3-Lite supports 768P or 480P output and starts at $0.025 per second, and on some hardware it generates a five-second 768P clip in about eight seconds. H3-Image output costs $3.80 per million tokens and supports up to 16 reference images. H3-Image Highspeed output costs $7.60 per million tokens, and at its fastest it can generate a 4K image in under 10 seconds.

fal's H3 Max generates a five-second 768P clip in under three seconds, and H3-Max Turbo generates video twice as fast as H3 Max. Nunchux AI's MiniMax-H3-Fast generates a 15-second 768P clip in about 6.5 seconds. HeyGen's Video 1 can generate a complete video up to 30 seconds long in one pass, while Pika's H3 Flex generates video in six steps.

LightX2V / ModelTC's MiniMax-H3 Turbo reduces generation to four or eight steps and can run locally. NVIDIA, Tencent and Alibaba have trained their own versions of H3, and more than ten leading companies worldwide have licensing partnerships with MiniMax.

## Why it matters

For teams comparing video models, the H3 Family turns a single open release into a set of options with different resolution, latency and price points. The flagship H3 and some extended models are available through the MiniMax Open Platform and MiniMax Code.

<!-- cspell:words Highspeed Nunchux -->
