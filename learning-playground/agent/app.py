"""HTTP service. Three endpoints: /health, /chat, /metrics (+ /evals).

    uvicorn agent.app:app --reload --port 8000
"""

from fastapi import FastAPI
from pydantic import BaseModel, Field

from .config import has_llm
from .evals import run_all
from .llm import get_llm
from .loop import run_agent
from .tracing import Metrics

app = FastAPI(title="Ops Agent", version="1.0.0")
LLM = get_llm()
METRICS = Metrics(LLM.name)


class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1, max_length=4000)
    session_id: str | None = None


class ChatResponse(BaseModel):
    answer: str
    blocked: bool
    steps: int
    tools_used: list[str]
    latency_ms: float
    cost_usd: float
    model: str


@app.get("/health")
def health() -> dict:
    return {"status": "ok", "model": LLM.name, "live": has_llm()}


@app.post("/chat", response_model=ChatResponse)
def chat(req: ChatRequest) -> ChatResponse:
    result = run_agent(req.message, llm=LLM, metrics=METRICS)
    return ChatResponse(
        answer=result.answer,
        blocked=result.blocked,
        steps=len(result.steps),
        tools_used=[s.tool for s in result.steps],
        latency_ms=result.latency_ms,
        cost_usd=result.cost_usd,
        model=result.model,
    )


@app.get("/metrics")
def metrics() -> dict:
    return METRICS.snapshot()


@app.get("/evals")
def evals() -> dict:
    """Runs the offline suite. Do not expose a live-LLM eval on a public route."""
    return run_all(verbose=False)
