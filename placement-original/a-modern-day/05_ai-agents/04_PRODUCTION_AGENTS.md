# 🏗 STAGE 5D — Building Production AI Agents

> **Level:** Advanced | **Duration:** 1 Week

---

## 1. Production Agent Architecture

```
FastAPI Endpoint
       ↓
Agent Router (decides which agent)
       ↓
┌──────────┬──────────┬──────────┐
│ Scraper  │ Research │ Code     │
│ Agent    │ Agent    │ Agent    │
└────┬─────┴────┬─────┴────┬─────┘
     │          │          │
  Playwright  Search   LLM + Tools
     │          │          │
     └──────────┴──────────┘
              ↓
         Vector DB (store results)
              ↓
         Response to Client
```

---

## 2. AI Scraper Agent (Complete)

```python
# agent_scraper/main.py
from fastapi import FastAPI, BackgroundTasks
from pydantic import BaseModel
from langgraph.graph import StateGraph, START, END
from langchain_openai import ChatOpenAI
from typing import TypedDict
import uuid

app = FastAPI(title="AI Scraper Agent")

class ScrapeRequest(BaseModel):
    url: str
    extract: list[str] = ["summary", "contacts", "products"]

class ScraperState(TypedDict):
    url: str
    html: str
    text: str
    results: dict
    errors: list

def scrape_node(state: ScraperState):
    from playwright.sync_api import sync_playwright
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()
            page.goto(state["url"], timeout=30000)
            page.wait_for_load_state("networkidle")
            html = page.content()
            browser.close()
        return {"html": html}
    except Exception as e:
        return {"errors": [str(e)]}

def clean_node(state: ScraperState):
    from bs4 import BeautifulSoup
    soup = BeautifulSoup(state["html"], "html.parser")
    for tag in soup(["script", "style", "nav", "footer", "header"]):
        tag.decompose()
    return {"text": " ".join(soup.get_text().split())[:5000]}

def ai_extract_node(state: ScraperState):
    llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)
    prompt = f"""Extract from this text:
1. Summary (2-3 sentences)
2. Contact info (emails, phones)
3. Key data points

Text: {state['text']}

Respond in JSON."""
    
    response = llm.invoke(prompt)
    import json
    try:
        results = json.loads(response.content)
    except:
        results = {"raw": response.content}
    return {"results": results}

# Build agent graph
graph = StateGraph(ScraperState)
graph.add_node("scrape", scrape_node)
graph.add_node("clean", clean_node)
graph.add_node("extract", ai_extract_node)
graph.add_edge(START, "scrape")
graph.add_edge("scrape", "clean")
graph.add_edge("clean", "extract")
graph.add_edge("extract", END)
agent = graph.compile()

@app.post("/scrape")
async def scrape(request: ScrapeRequest):
    result = agent.invoke({
        "url": request.url,
        "html": "", "text": "",
        "results": {}, "errors": []
    })
    return {"url": request.url, "data": result["results"]}

@app.get("/health")
def health():
    return {"status": "healthy"}
```

---

## 3. Error Handling & Retry

```python
import tenacity

@tenacity.retry(
    stop=tenacity.stop_after_attempt(3),
    wait=tenacity.wait_exponential(multiplier=1, min=2, max=10),
    retry=tenacity.retry_if_exception_type(Exception),
)
def reliable_scrape(url: str) -> str:
    """Scrape with automatic retry on failure."""
    # scraping logic
    pass
```

---

## 4. Rate Limiting & Queue

```python
from fastapi import HTTPException
import asyncio
from collections import defaultdict
import time

# Simple rate limiter
request_counts = defaultdict(list)

def check_rate_limit(client_id: str, max_requests: int = 10, window: int = 60):
    now = time.time()
    request_counts[client_id] = [
        t for t in request_counts[client_id] if now - t < window
    ]
    if len(request_counts[client_id]) >= max_requests:
        raise HTTPException(429, "Rate limit exceeded")
    request_counts[client_id].append(now)
```

---

## 5. Deploying AI Agent

### Docker Compose
```yaml
services:
  ai-agent:
    build: ./agent_scraper
    ports: ["8000:8000"]
    environment:
      OPENAI_API_KEY: ${OPENAI_API_KEY}
    deploy:
      resources:
        limits:
          memory: 2G
          cpus: '1.0'
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8000/health"]
      interval: 30s
```

---

## 6. Monitoring Agent Performance

```python
import time
import logging

logger = logging.getLogger("agent")

def timed_node(func):
    def wrapper(state):
        start = time.time()
        result = func(state)
        duration = time.time() - start
        logger.info(f"Node {func.__name__}: {duration:.2f}s")
        return result
    return wrapper

@timed_node
def scrape_node(state):
    # ... scraping logic
    pass
```

---

## 🎯 Practice Tasks
- [ ] Build complete AI scraper agent with FastAPI
- [ ] Add error handling and retry logic
- [ ] Implement rate limiting
- [ ] Deploy with Docker
- [ ] Set up monitoring and logging

---

*Next: [Laravel + AI Architecture →](../06_ai-saas-integration/01_LARAVEL_AI_ARCHITECTURE.md)*
