---
title: Gemini API adds Tool Retrieval preview for on-demand tool schemas
date: 2026-11-19T18:44:28.935Z
format: news
summary: Tool Retrieval is now in preview in the Gemini Interactions API,
  letting agents load tool parameter schemas on demand instead of sending the
  full tool library in every prompt.
description: Tool Retrieval is in preview in the Gemini Interactions API and
  loads tool parameter schemas on demand instead of sending the full library.
tags:
  - ai-agents
  - mcp
impact: info
action: review
status: current
briefing:
  changed: Tool Retrieval is now in preview in the Gemini Interactions API.
  why: It lets agents load tool parameter schemas on demand instead of sending the
    full tool library in every prompt, a design intended to reduce input tokens
    and keep tool selection accurate as an agent scales.
  action: "Add a tool_search tool to the request and set defer_loading: true on
    the tools to hold back."
sources:
  - title: Introducing Tool Retrieval in the Gemini API
    url: https://blog.google/innovation-and-ai/technology/developers-tools/gemini-api-tool-retrieval/
---

Tool Retrieval is now in preview in the Gemini Interactions API (application programming interface). It lets an agent load tool parameter schemas on demand instead of sending the full tool library in every prompt. The model still sees the name and description of every deferred tool, so it knows what is available, but the parameter schemas stay out of context.

## Why it matters

The feature is designed to reduce input tokens and keep tool selection accurate as an agent scales. There is no index to build or host because Gemini runs the search on the server. Tool Retrieval also works with remote MCP (Model Context Protocol) servers in the Gemini API.

## What to do

To turn on Tool Retrieval, add a tool_search tool to the request and set defer_loading: true on the tools to hold back. Setting defer_loading: true on an mcp_server tool loads every tool that server exposes on demand. Client-side retrieval is enabled by declaring tool_search with execution set to client. That path adds one round trip per search because the app runs the lookup.

## Availability and cost

Tool Retrieval works with Gemini 3.6 and later models, including all Gemini 4 models, in the Interactions API. It has no separate charge; input and output tokens are billed at standard rates for the model called.
