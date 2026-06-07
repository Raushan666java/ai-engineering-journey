# Resources

> **Organized reference for your AI Engineering journey**
> Curated from Phase 1 through Phase 10 — sab ek jagah

---

## YouTube Channels

### Python & Web

| Channel | Why |
|---------|-----|
| **TechWithTim** | Best Python tutorials, project-based |
| **Corey Schafer** | Python basics, OOP, Django |
| **ArjanCodes** | Python design patterns, code quality |
| **mCoding** | Python performance, best practices |

### AI Engineering

| Channel | Why |
|---------|-----|
| **Sam Witteveen** | LangChain, LangGraph tutorials (best in class) |
| **AI Makerspace** | Production AI patterns |
| **LLM Bootcamp (full course)** | Stanford CS224N variant, amazing |
| **sentdex** | Practical ML/AI projects |
| **Machine Learning Street Talk** | Deep AI discussions |

### System Design & DevOps

| Channel | Why |
|---------|-----|
| **ByteByteGo** | System design visual explanations |
| **Hussein Nasser** | Backend, database, networking |
| **NetworkChuck** | Docker, Linux, networking |
| **Techno Tim** | Homelab, Docker, DevOps |

### Full Courses

| Course | Link |
|--------|------|
| **CS50's Intro to AI** | edx.org |
| **Stanford CS224N (NLP)** | youtube.com |
| **Fast.ai Practical DL** | course.fast.ai |
| **LLM Bootcamp** | fullstackdeeplearning.com/llm-bootcamp |

---

## Courses (Paid/Free)

```
DeepLearning.AI
  - LangChain for LLM App Development (free)
  - Building Systems with ChatGPT
  - LangGraph courses
  - Very practical, short courses

HuggingFace Course
  - NLP with transformers
  - Free, comprehensive
  - hf.co/learn/nlp-course

Fast.ai
  - Practical Deep Learning (free)
  - From foundations to modern DL
  - course.fast.ai

Full Stack Deep Learning
  - MLOps, deployment, monitoring
  - fullstackdeeplearning.com

Andrej Karpathy's "Neural Networks: Zero to Hero"
  - Build neural nets from scratch
  - Best fundamentals course
```

---

## Books

### Must Read

| Book | Why |
|------|-----|
| **Designing Data-Intensive Applications** | System design bible. Read before interviews |
| **Machine Learning Engineering** (Andriy Burkov) | MLOps, deployment, production ML |
| **System Design Interview** (Alex Xu) Vol 1+2 | Interview-focused, practical |
| **Python Crash Course** (Eric Matthes) | Python refresher if needed |

### Reference

| Book | Why |
|------|-----|
| **Fluent Python** | Deep Python knowledge |
| **Building LLM Apps** (O'Reilly) | RAG, agents, production patterns |
| **Hands-On Machine Learning** (Geron) | ML fundamentals |
| **Designing Machine Learning Systems** (Chip Huyen) | MLOps deep dive |

---

## Tools

### Development

```
IDE:  VS Code + Cursor (for AI-assisted coding)
Terminal: Warp (macOS), Windows Terminal
Python: Python 3.12, pip, uv (faster pip alternative)
API Testing: Bruno (open source Postman alternative)
```

### AI Engineering Tools

| Tool | Use |
|------|-----|
| **LangSmith** | LLM app tracing, debugging, evaluation |
| **LangFuse** | Open source LLM observability |
| **MLflow** | Experiment tracking, model registry |
| **Ollama** | Run local models (Llama, Mistral) |
| **llama.cpp** | Efficient local inference (CPU) |
| **HuggingFace Spaces** | Host demos for free |
| **Gradio** | Quick UI for ML models |
| **n8n** | Workflow automation (self-hosted) |

### Vector DBs

| DB | Best For | Cost |
|----|----------|------|
| **Qdrant** | Self-hosted production | Free (self), $25 (cloud) |
| **ChromaDB** | Development, small projects | Free |
| **Pinecone** | Managed, easy start | $70/month |
| **Weaviate** | Full-text + vector hybrid | $25 (cloud) |
| **pgvector** | PostgreSQL extension | Free (with Postgres) |

---

## Communities

### Online

| Community | Platform | Why Join |
|-----------|----------|----------|
| **r/LocalLLaMA** | Reddit | Latest open-source LLM news |
| **AI Engineer Discord** | Discord | Daily discussions, help |
| **LangChain Discord** | Discord | LangChain specific help |
| **HuggingFace Discord** | Discord | Model discussions |
| **r/MachineLearning** | Reddit | Research papers, discussions |
| **Patna Tech Meetups** | Meetup.com | Local networking |
| **Bihar Developer Community** | WhatsApp/Telegram | Connect with local devs |

### X/Twitter Accounts to Follow

```
@karpathy          → AI fundamentals, education
@simonw            → LLM tooling, practical AI
@lilianweng       → AI research, system design
@cognition_ai     → Devin AI, agent systems
@LangChainAI      → LangChain updates
@hf_tutorials     → HuggingFace tutorials
@intuitiveML      → ML concepts explained
@abacaj           → Open source LLM experiments
@AIEngineering    → AI Engineering clips
@raushankumar     → That's you! Start posting
```

---

## Practice Platforms

| Platform | Use |
|----------|-----|
| **LeetCode** | DSA practice (Neetcode 150 is enough) |
| **Kaggle** | Datasets, notebooks, competitions |
| **HuggingFace Spaces** | Deploy demos, share projects |
| **Google Colab** | Free GPU, notebook experiments |
| **Replit** | Quick prototyping, pair coding |
| **GitHub Codespaces** | Cloud dev environment |

---

## Newsletters

| Newsletter | Why |
|------------|-----|
| **The Batch** (Andrew Ng) | Weekly AI news summary |
| **Last Week in AI** | Curated AI news |
| **AI Breakfast** | Deep dives into AI topics |
| **MLOps.community** | MLOps newsletter |
| **The AI Engineer** | AI engineering specific |
| **Import AI** (Jack Clark) | AI policy + research |

---

## Blogs

### Must Follow

| Blog | Why |
|------|-----|
| **Lilian Weng** (OpenAI) | Best AI system design posts |
| **Simon Willison** | Practical LLM tooling, patterns |
| **Andrej Karpathy** | AI education, intuition |
| **Jay Alammar** | Visual AI explanations |
| **Eugene Yan** | Production ML, RAG patterns |
| **Chip Huyen** | MLOps, real-world ML |

### Company Blogs

| Blog | Focus |
|------|-------|
| **OpenAI Blog** | Latest models, research |
| **Anthropic Blog** | Claude, safety research |
| **Google AI Blog** | Gemini, research |
| **LangChain Blog** | Agent patterns, RAG |
| **Pinecone Blog** | Vector search, RAG patterns |

---

## Templates

### FastAPI Templates

```bash
# FastAPI + SQLAlchemy + Redis
https://github.com/raushan666java/fastapi-template

# FastAPI + LangChain + Qdrant
https://github.com/raushan666java/ai-api-template
```

### Docker Compose Templates

```yaml
# Minimal AI Stack
services:
  api:       # FastAPI app
  redis:     # Caching + queue
  qdrant:    # Vector DB
  worker:    # Background tasks

# Full AI Stack
services:
  api:       # FastAPI
  redis:     # Cache
  qdrant:    # Vectors
  postgres:  # Chat history
  n8n:       # Workflows
  grafana:   # Monitoring
  prometheus:# Metrics
  loki:      # Logging
```

### LangChain Templates

```python
# Basic RAG Chain
retriever = vector_store.as_retriever(search_kwargs={"k": 5})
chain = (
    {"context": retriever, "question": RunnablePassthrough()}
    | prompt_template
    | llm
    | StrOutputParser()
)

# Agent with tools
agent = create_react_agent(llm, tools, prompt)
agent_executor = AgentExecutor(agent=agent, tools=tools,
                                handle_parsing_errors=True)

# LangGraph Agent
graph = StateGraph(AgentState)
graph.add_node("agent", call_model)
graph.add_node("tools", tool_node)
graph.add_conditional_edges("agent", should_continue, ...)
```

---

## Cheatsheets

- [Quick Reference Guides](cheatsheets.md) — Python, FastAPI, Docker, Git, LangChain, n8n, Linux, Bash, Regex
- [PHP to Python Migration](php-to-python.md) — Side-by-side comparison for Laravel devs

---

## Final Advice

```
Resources ka overload mat lo.
Ek resource lo, complete karo, next pe jao.

For Raushan's journey:
  Week 1-2: Python docs + Corey Schafer
  Week 3-4: FastAPI docs + TechWithTim
  Week 5-8: LangChain docs + Sam Witteveen
  Week 9-10: n8n docs + your own projects
  Week 11-13: System Design + Interview prep

Theory se zyada, build karo.
Dono haath code mein, tab seekhna fast hota hai.
```
