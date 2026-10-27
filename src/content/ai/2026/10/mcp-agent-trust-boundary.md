---
title: "MCP is turning agents into a network. Treat it like one."
date: 2026-10-27
format: analysis
summary: "Agents now call agents over MCP. Each hop forwards instructions the origin never saw, and tool registries keyed by name are a spoofing surface. The boundary has to move from the model to the protocol."
description: "Agents now call agents over MCP, making prompt injection transitive. Move the trust boundary from the model to the protocol."
tags: [ai-agents, mcp, llm-security, prompt-injection, architecture]
status: current
briefing:
  changed: "Over the past five months, Google and four other organizations acknowledged vulnerabilities in how agents pass instructions to each other over MCP. This month's advisories make the same point from the implementation side: a malicious remote MCP server hijacking tool execution through a name collision (CVE-2026-30856), and untrusted prompt input reaching a file parser and the OS shell (CVE-2026-0755)."
  why: "Agent-to-agent calls make prompt injection transitive. Instructions that were contained at the edge travel through internal agents that forward context without a trust model, and tool identity resolved by naming convention lets one server impersonate another."
  action: "Give every agent-to-agent edge an explicit trust decision: authenticated tool identity, per-agent server allowlists, structured channels that cannot carry instructions, and per-action authorization so a forwarded instruction can never exceed the scope of the request that caused it."
sources:
  - { title: "Ars Technica: vulnerability in agents from Google and others exposes structural flaw in MCP", url: "https://arstechnica.com/security/2026/10/vulnerability-in-agents-from-google-and-others-exposes-structural-flaw-in-mcp/" }
  - { title: "NVD: CVE-2026-30856: WeKnora tool name collision and indirect prompt injection", url: "https://nvd.nist.gov/vuln/detail/CVE-2026-30856" }
  - { title: "GitLab Advisory Database: CVE-2026-0755: gemini-mcp-tool OS command injection", url: "https://advisories.gitlab.com/npm/gemini-mcp-tool/CVE-2026-0755/" }
  - { title: "Model Context Protocol: security best practices", url: "https://modelcontextprotocol.io/specification/2025-06-18/basic/security_best_practices" }
---

Until recently the MCP conversation was about connecting one model to your tools. The newer
conversation is about connecting your agents to each other: a planner that calls a researcher, a
researcher that calls a translator, a translator that calls whatever the researcher put in its
context. Same protocol, different threat model. When the endpoints of a protocol are programs that
forward text to each other on behalf of users, the protocol has become a network, and networks
need identity, authorization and an audit trail, not just a message format.

## What changed

Reporting in early October described a technique that is a form of prompt injection aimed not at
the model's values but at one agent inside a targeted network: corrupt a single agent, then use it
to spread instructions to other internal agents. Google and four other organizations have
acknowledged related vulnerabilities over the past five months. The public write-ups differ in
detail; what is consistent is the shape: instructions traveled through channels nobody designed
as input channels.

Two advisories this month show the same shape at the implementation level:

- **CVE-2026-30856 (WeKnora, patched in 0.3.0).** The client built tool names from a convention of
  the form `mcp_{service}_{tool}`. A malicious remote MCP server registered a tool whose name
  collided with a legitimate one (the example in the advisory is `tavily_extract`) and hijacked
  tool execution. The attacker could redirect the execution flow, exfiltrate system prompts and
  context, and run other tools with the user's privileges.
- **CVE-2026-0755 (gemini-mcp-tool 1.1.2–1.1.5, fixed in 1.1.6).** Untrusted prompt input reached
  the CLI's `@file` parser, allowing arbitrary local file read and exfiltration; on Windows,
  unquoted `cmd.exe` metacharacters turned it into OS command injection.

Neither is exotic. Both are ordinary confused-deputy and injection bugs, in a layer that did not
exist in most stacks two years ago.

## Why it matters in production

**Injection becomes transitive.** A prompt injection that stops at your edge application is a
contained problem. The same injection inside an agent that calls three other agents is a fan-out.
Each hop re-serializes "context" and forwards it, and the guardrails at hop one were tuned for
hop one's data, not for what hop three will do with it.

**Identity by name is spoofable.** If tool identity is a string the client constructs from a
convention, then any server that can register a name can claim it. The MCP security guidance
already recommends authenticated transport and explicit server registration; CVE-2026-30856 is
what happens when a client invents its own naming scheme on top.

**The blast radius is the union of everyone's tools.** As in the broader
[agentic threat model](/ai/agentic-threat-model/), an agent holding one identity for all of its
tools is a confused deputy. In an agent-to-agent graph, the effective identity of a request is the
weakest agent on the path that forwards it.

**You cannot answer "who asked for this."** Forwarded instructions have no provenance. When an
action lands in an audit log, the log shows agent B calling a tool. It does not show that agent B
was following text that arrived inside a retrieved document two hops earlier.

## The design rules

1. **Authenticate tool servers; do not resolve them by name.** Tool identity must come from a
   registry you control, keyed by verified server identity, not from a naming convention a remote
   server can participate in. Ambiguous names are impersonation.
2. **Give each agent its own server allowlist.** A translator agent has no business seeing the
   deployment agent's servers. Allowlists per agent turn "one compromised agent" from total
   compromise into a bounded one.
3. **Keep untrusted content in a channel that cannot carry instructions.** Retrieved documents,
   tool results and forwarded context should arrive as structured data with an explicit
   untrusted marker, not concatenated into the instruction text the next model reads.
4. **Authorize per action, at the tool.** The permission check for a tool call should derive from
   the end user's request and the specific action, never from the agent's accumulated context. A
   forwarded instruction cannot then exceed the scope of what the original requester was allowed.
   The gateway review in [the LLM gateway checklist](/security/securing-llm-gateways/) applies
   unchanged to agent-to-agent traffic.
5. **Scope egress and file access per agent.** The `@file` class of bug in CVE-2026-0755 is
   prevented at the parser, but the parser should not have had a working directory worth reading.
   Constrain file references to a workspace and deny outbound network by default.
6. **Require human approval for irreversible operations that cross a hop.** If an action cannot be
   undone (a payment, a deletion, an external send), the approval prompt must show which request
   originated it, not which agent proposed it.

## What to instrument

- Log every tool call with the originating request id, the agent chain, the verified identity of
  the tool server, the action, and the authorization decision.
- Alert on a tool name that appears for the first time at runtime, on tool calls whose arguments
  contain content originating from retrieved sources, and on any cross-agent call that widens
  scope relative to the original request.
- Review checklist: every agent-to-agent edge has a documented trust decision; every tool server
  is on an explicit allowlist for each agent that uses it; no agent forwards raw context to
  another; irreversible actions all carry an approval gate.

## What not to do

- Do not rely on the model refusing. The refusal is a courtesy, not a control.
- Do not flatten every server into every agent's toolset "for flexibility." That is how one
  compromised agent becomes the whole graph.
- Do not add agents faster than you add edges to the inventory. An unmanaged agent-to-agent call is
  an unreviewed network path.

## Drawing the graph

The concrete next step is unglamorous: draw the graph. List every agent, every tool server, and
every edge where one agent's output becomes another agent's input. For each edge, write down the
trust decision: authenticated how, scoped to what, approved by whom when it matters. Most teams
will find edges they did not know existed, which is the whole point of drawing it. Treat the
result as a security artifact: version it, review changes to it, and alert when a new edge appears
without a matching entry.
