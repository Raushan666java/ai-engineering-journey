"""Shared data types. Small, explicit, serialisable."""

from dataclasses import dataclass, field


@dataclass
class ToolCall:
    id: str
    name: str
    arguments: str  # raw JSON string, exactly as the model emitted it


@dataclass
class AssistantTurn:
    content: str | None = None
    tool_calls: list[ToolCall] = field(default_factory=list)
    prompt_tokens: int = 0
    completion_tokens: int = 0


@dataclass
class Step:
    n: int
    tool: str
    args: dict
    result: str
    allowed: bool
    reason: str
    ms: float


@dataclass
class AgentResult:
    answer: str
    steps: list[Step]
    blocked: bool
    reason: str
    prompt_tokens: int
    completion_tokens: int
    cost_usd: float
    latency_ms: float
    model: str
