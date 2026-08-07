---
id: 10-model-context-protocol
slug: /ai-agent-engineer/agentic-ai-book/10-model-context-protocol
title: "10-model-context-protocol"
sidebar_label: "10-model-context-protocol"
sidebar_position: 11
---
## Chapter 10: Model Context Protocol (MCP)

### 10.1 The Problem MCP Solves

Before MCP: every agent framework had its own bespoke way of defining and wiring up tools. If you built a tool for LangChain, it didn't work with AutoGen without rewriting. Every new AI client that wanted to talk to, say, your ApexERP database needed custom integration code written specifically for that client.

**MCP standardizes this.** You build one MCP *server* that exposes your tools/data ("resources") once, using a standard protocol — and any MCP-compatible *client* (Claude Desktop, this chat interface, your own LangGraph agent, another company's agent) can discover and use those tools without you writing custom glue code for each one.

### 10.2 Client vs. Server

- **MCP Server** — exposes capabilities: tools (functions the agent can call), resources (data the agent can read), and prompts (reusable prompt templates). You build this once per system you want to make agent-accessible.
- **MCP Client** — the agent-side piece that discovers what a server offers and calls it. Claude Desktop is a client. This very chat interface uses MCP-style tools under the hood. Your own LangGraph agent can also act as a client via an MCP client library.

### 10.3 Building a Minimal MCP Server

```python
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("ApexERP Tools")

@mcp.tool()
def get_order_status(order_id: str) -> dict:
    """Look up order status and expected delivery date by order ID."""
    return query_laravel_api(f"/api/orders/{order_id}")

@mcp.tool()
def search_product_docs(query: str) -> list:
    """Semantic search over ApexERP product documentation."""
    return chroma_collection.query(query_texts=[query], n_results=5)["documents"][0]

if __name__ == "__main__":
    mcp.run(transport="stdio")  # or "sse" for network-accessible
```

That's your entire ApexERP order-lookup and docs-search capability now exposed as a standard MCP server — connectable from Claude Desktop, your own LangGraph agent, or any future MCP client, with zero per-client integration code.

### 10.4 Connecting a Client

From your own LangGraph agent, you'd use an MCP client library to discover the server's tools at runtime and fold them directly into your `tools` list, rather than hardcoding each tool definition by hand — meaning if you add a new tool to the MCP server later, your agent picks it up automatically without a code change on the agent side.

### 10.5 Why This Matters for Your Career Positioning

"I built an MCP server exposing our production ERP to AI agents" is a directly resume-relevant, non-generic claim — it demonstrates exactly the skill AI Automation Engineer job listings describe (making internal systems agent-accessible), and it's still novel enough that most candidates won't have hands-on MCP experience yet.

### 10.6 Milestone Project for This Chapter

Build an MCP server exposing 2-3 real tools from one of your Laravel systems (order lookup, ticket search, etc.), connect it to Claude Desktop, and verify you can ask Claude Desktop a question that requires it to discover and call your tool with zero custom integration code beyond the server itself.

---

*(Continued in Part IV — Production)*

