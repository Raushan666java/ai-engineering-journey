# Reference Shelf

External repos and docs you consult **when stuck**, not when bored.

**Rule:** every project here is *adapted*, never cloned. If you can't explain a line you copied, you didn't learn it.

## Primary shelf — `patchy631/ai-engineering-hub`

https://github.com/patchy631/ai-engineering-hub — 93+ standalone projects, MIT. A recipe library, not a curriculum.

| Your artifact | Reference project | What to borrow | What to change |
|---|---|---|---|
| L3: LLM mechanics | `local-chatgpt` | Streaming UI pattern | Use a hosted API; add token/cost logging |
| L4: Agent loop | `agentic_rag` | Routing idea only | Rebuild the loop yourself (l01) |
| L4: MCP server | `mcp-agentic-rag`, `llamaindex-mcp` | Server/client shape | Write your own server with 2 tools |
| L4/L5: RAG with citations | `notebook-lm-clone` | Citation pattern | Drop the podcast feature |
| L5: Eval + observability | `eval-and-observability` | Rubric design | Build your own eval set; tracing tool optional |
| L5: Fine-tuning | `DeepSeek-finetuning`, `Build-reasoning-model` | Training loop | Only after the capstone ships |

**Skip for now:** model-comparison projects (benchmarks, not skills), voice/audio (dependency weight), anything needing paid vendor keys before artifact #1.

## Secondary shelf

| Source | Use for |
|---|---|
| OpenAI Cookbook | API patterns, structured outputs |
| Anthropic Cookbook | Tool use, RAG, eval patterns |
| LangGraph docs | Only after your raw loop works (l01) |
| MCP spec (modelcontextprotocol.io) | Protocol details when building your server |
| LlamaIndex / LangChain docs | Retrieval plumbing — read the source when docs lie |

## Rules of the shelf

1. **Timebox to 10 minutes.** If the answer isn't found, build the simplest version yourself.
2. **Never run more than one reference project per week.** Demo-hopping feels like progress and isn't.
3. **Write down what you borrowed** in `PROGRESS.md` — attribution and honesty in one place.
4. **No new dependency without a reason you can say out loud.**
