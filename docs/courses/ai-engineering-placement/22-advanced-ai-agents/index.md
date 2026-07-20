# 22 — Advanced AI Agents

## Overview

The complete engineering stack for building production-grade AI agents. Based on the core formula **Agent = LLM + Context + Tools + Harness** — where Harness is the competitive moat (context management, tool integration, evaluation, safety, observability). Covers context engineering, MCP protocol, coding agents, evaluation frameworks, model post-training, self-evolution, multimodal agents, and multi-agent collaboration.

## Sub-Chapters

| # | Sub-Chapter | Topics | Q&A |
|---|-------------|--------|-----|
| 01 | [Agent Fundamentals & Harness](01-agent-fundamentals-harness.md) | agent formula, ReAct, harness engineering, ablation studies | 10 |
| 02 | [Context Engineering](02-context-engineering.md) | KV Cache, prompt optimization, compression, injection defense | 10 |
| 03 | [User Memory & Knowledge Bases](03-user-memory-knowledge-bases.md) | memory systems, Agentic RAG, GraphRAG, hybrid retrieval | 10 |
| 04 | [MCP Protocol & Tools](04-mcp-protocol-tools.md) | MCP server/client, tool design, event-driven agents | 10 |
| 05 | [Coding Agents](05-coding-agents.md) | code generation, code-as-tool, self-healing, proposer-reviewer | 10 |
| 06 | [Agent Evaluation](06-agent-evaluation.md) | SWE-bench, GAIA, ELO, cost analysis, observability | 10 |
| 07 | [Model Post-Training](07-model-post-training.md) | SFT vs RL, DAPO, RLHF, tool-augmented reasoning | 10 |
| 08 | [Agent Self-Evolution](08-agent-self-evolution.md) | learning from experience, tool discovery, tool creation | 10 |
| 09 | [Multimodal & Real-Time Agents](09-multimodal-real-time-agents.md) | voice agents, Computer Use, streaming, vision-language-action | 10 |
| 10 | [Advanced Multi-Agent Collaboration](10-advanced-multi-agent-collaboration.md) | topologies, shared context, agent society, failure modes | 10 |

## Learning Path

1. Start with Lesson 01 (Harness philosophy is the foundation)
2. Lessons 02-04 build the core harness components (context, memory, tools)
3. Lessons 05-06 cover advanced capabilities (coding, evaluation)
4. Lessons 07-08 cover training and evolution
5. Lessons 09-10 cover multimodal and multi-agent
6. Each lesson: read theory → run code → review Q&A → take quiz → do exercises

## Prerequisites

[AI Agents & LangGraph](../13-ai-agents-langgraph/index.md). Solid understanding of LLM APIs, prompt patterns, and basic agent architectures is required.

> **Start**: [01 — Agent Fundamentals & Harness →](01-agent-fundamentals-harness.md)
