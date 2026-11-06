---
title: Researchers bypassed ChatGPT Lockdown Mode to exfiltrate chats
date: 2026-11-06T16:40:36.612Z
format: news
summary: Check Point Research found a bypass of ChatGPT Lockdown Mode that could
  enable silent chat data theft and zero-click exfiltration in the desktop app;
  OpenAI deployed a fix on September 18, 2026.
description: Check Point Research bypassed ChatGPT Lockdown Mode, enabling
  silent chat theft and zero-click exfiltration; OpenAI fixed it on September
  18, 2026.
tags:
  - llm-security
  - prompt-injection
  - authentication
impact: high
action: review
status: current
affects:
  - ChatGPT Lockdown Mode
  - ChatGPT Classic desktop app
briefing:
  changed: Check Point Research found a way around ChatGPT Lockdown Mode that
    could enable silent chat data theft and zero-click exfiltration in the
    ChatGPT desktop application; OpenAI deployed a fix on September 18, 2026.
  why: The bypass ran through HTML page previews in code blocks, so a weakness in
    the surrounding application, not the model, defeated a control meant to
    limit exfiltration from prompt injection.
  action: OpenAI deployed a fix on September 18, 2026 and Check Point Research
    confirmed the method no longer works, so no customer patch is needed. Review
    which Lockdown Mode restrictions your accounts depend on.
sources:
  - title: "ChatGPT Lockdown Mode Bypass: AI Security Risks | Check Point"
    url: https://blog.checkpoint.com/security/chatgpt-lockdown-mode-bypass-reveals-a-wider-challenge-in-ai-security/
  - title: "Cyber Security News: Hackers Could Bypass ChatGPT Lockdown Mode to Steal
      Conversations Without Users Knowing"
    url: https://cybersecuritynews.com/chatgpt-lockdown-mode-bypass/
  - title: "The Hacker News: Researchers Bypass ChatGPT Lockdown Mode to Exfiltrate
      Chats Without User Interaction"
    url: https://thehackernews.com/2026/11/researchers-bypass-chatgpt-lockdown.html
---

Check Point Research found a way to bypass ChatGPT Lockdown Mode, and the flaw could enable silent chat data theft, phishing and malware delivery, including zero-click data exfiltration in the ChatGPT desktop application. According to The Hacker News, Lockdown Mode is an optional setting intended to minimize data exfiltration risks arising from prompt injections. According to Cyber Security News, OpenAI launched it on February 13, 2026, first for business plans, and it reached personal accounts on June 4.

## How the bypass worked

The vulnerability involved HTML (Hypertext Markup Language) page previews inside ChatGPT code blocks. The preview used nested sandboxed frames, and while ChatGPT intercepted direct attempts to open new windows, the underlying sandbox permissions still allowed popups and permitted them to escape the sandbox. Creating another nested frame within the rendered page gave access to an unmodified popup function and bypassed the restrictions on the original HTML preview. An attack could originate from a malicious prompt, a malicious GPT (a customized ChatGPT assistant) or a shared chat.

According to Cyber Security News, in the ChatGPT Classic desktop app, window.open worked without any user click, and the popup kept the ChatGPT icon while the attacker chose the title. That report says the team also reloaded the main ChatGPT window and signed the user out, after which a fake login page could capture the password.

## Why it matters

The vulnerability originated in the wider application environment, showing how weaknesses outside the AI model can undermine dedicated AI security controls.

## What to do

OpenAI informed researchers on September 18, 2026 that it had deployed a fix removing the sandbox permissions that enabled the technique. According to Cyber Security News, OpenAI said it removed both popup permissions from the outer preview iframe on September 18, 2026. Check Point Research retested the issue and confirmed the exploitation method no longer works. According to Cyber Security News, Lockdown Mode limits web browsing to cached pages and turns off live web access, image support in replies, Deep Research, Agent Mode, Canvas networking, live connectors and file downloads.

<!-- cspell:words Lockdown sandboxed -->
