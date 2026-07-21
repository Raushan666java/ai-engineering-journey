# Guardrails Frameworks

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand guardrails frameworks and their role in AI safety |
| LO2 | Implement NeMo Guardrails for LLM applications |
| LO3 | Build custom guardrails with structural patterns |
| LO4 | Design guardrails for RAG systems |
| LO5 | Deploy guardrails as middleware in production |
| LO6 | Evaluate guardrail effectiveness with metrics |

## Introduction

Understanding guardrails frameworks is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering guardrails frameworks.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 4.1 | Guardrails Overview | What guardrails are and why they matter |
| 4.2 | NeMo Guardrails | Colang-based dialogue management |
| 4.3 | Custom Guardrails | Structural and behavioral patterns |
| 4.4 | RAG Guardrails | Context filtering and citation enforcement |
| 4.5 | Production Deployment | Middleware architecture for guardrails |
| 4.6 | Evaluation | Metrics for guardrail effectiveness |

## Chapter Roadmap

```mermaid
flowchart TB
    A[User Input] --> B[Input Guardrails]
    B --> C{Topic Allowed?}
    C -->|No| D[Canonical Response]
    C -->|Yes| E[Safety Check]
    E --> F{Pass?}
    F -->|No| G[Fallback]
    F -->|Yes| H[LLM]
    H --> I[Output Guardrails]
    I --> J{Valid?}
    J -->|No| K[Rewrite/Block]
    J -->|Yes| L[Response]
```text

## 4.1 Guardrails Overview

Guardrails are programmable safety and quality constraints that sit between users and LLMs. They enforce acceptable behavior, prevent misuse, and ensure consistent responses. Unlike input filters that scan for patterns, guardrails operate at the dialogue level with stateful understanding.

```python
from enum import Enum
from typing import Optional, List, Callable
from dataclasses import dataclass

class GuardrailAction(Enum):
    ALLOW = "allow"
    BLOCK = "block"
    REWRITE = "rewrite"
    FLAG = "flag"
    FALLBACK = "fallback"

@dataclass
class GuardrailResult:
    action: GuardrailAction
    modified_input: Optional[str] = None
    response: Optional[str] = None
    reason: Optional[str] = None

class Guardrail:
    """Base class for guardrails."""

    def __init__(self, name: str, priority: int = 0):
        self.name = name
        self.priority = priority

    def execute(self, context: dict) -> GuardrailResult:
        raise NotImplementedError

class GuardrailPipeline:
    """Execute guardrails in priority order."""

    def __init__(self):
        self.guardrails: List[Guardrail] = []

    def add_guardrail(self, guardrail: Guardrail):
        self.guardrails.append(guardrail)
        self.guardrails.sort(key=lambda g: g.priority, reverse=True)

    def execute_all(self, context: dict) -> GuardrailResult:
        for guardrail in self.guardrails:
            result = guardrail.execute(context)
            if result.action != GuardrailAction.ALLOW:
                return result
        return GuardrailResult(action=GuardrailAction.ALLOW)

## Example guardrail: Topic filtering
class TopicGuardrail(Guardrail):
    def __init__(self, allowed_topics: List[str], blocked_topics: List[str]):
        super().__init__("topic_guardrail", priority=100)
        self.allowed = allowed_topics
        self.blocked = blocked_topics

    def execute(self, context: dict) -> GuardrailResult:
        user_input = context.get("user_input", "")
        for topic in self.blocked:
            if topic.lower() in user_input.lower():
                return GuardrailResult(GuardrailAction.BLOCK, reason=f"Topic '{topic}' not allowed")
        return GuardrailResult(GuardrailAction.ALLOW)

pipeline = GuardrailPipeline()
pipeline.add_guardrail(TopicGuardrail(["general", "support"], ["illegal", "medical"]))
result = pipeline.execute_all({"user_input": "How do I treat a broken leg?"})
print(f"Action: {result.action}, Reason: {result.reason}")
```text

---

## 4.2 NeMo Guardrails

NVIDIA NeMo Guardrails provides a programmable dialogue management system using the Colang language.

```python
## Simulated NeMo Guardrails implementation

class ColangInterpreter:
    """Interpret Colang-like guardrail rules."""

    def __init__(self):
        self.rules = []
        self.canonical_forms = {}

    def add_rule(self, pattern: str, action: str, response: str = None):
        """Add a guardrail rule.
        Example: "user said 'I want to harm myself'" -> action: block
        """
        self.rules.append({
            "pattern": pattern.lower(),
            "action": action,
            "response": response
        })

    def add_canonical_form(self, user_expression: str, canonical: str):
        """Map user expressions to canonical intents."""
        self.canonical_forms[user_expression.lower()] = canonical

    def process(self, user_input: str) -> dict:
        """Process user input through guardrail rules."""
        input_lower = user_input.lower()

        # Check canonical forms
        intent = None
        for expr, canonical in self.canonical_forms.items():
            if expr in input_lower:
                intent = canonical
                break

        # Check rules
        for rule in self.rules:
            if rule["pattern"] in input_lower:
                if rule["action"] == "block":
                    return {
                        "action": "block",
                        "intent": intent,
                        "response": rule.get("response", "I cannot process this request."),
                        "matched_rule": rule["pattern"]
                    }
                elif rule["action"] == "canonical_response":
                    return {
                        "action": "canonical",
                        "intent": intent,
                        "response": rule.get("response", "I have a standard response for this."),
                        "matched_rule": rule["pattern"]
                    }

        return {"action": "allow", "intent": intent, "response": None}

## Configure NeMo-style guardrails
rails = ColangInterpreter()
rails.add_canonical_form("how are you", "greeting")
rails.add_canonical_form("help me", "request_help")
rails.add_canonical_form("I want to", "user_wants")

rails.add_rule("harm myself", "block", "I'm concerned about your wellbeing. Please contact a crisis helpline.")
rails.add_rule("illegal", "block", "I cannot assist with illegal activities.")
rails.add_rule("password", "block", "I cannot share or request passwords.")
rails.add_rule("how are you", "canonical_response", "I'm doing well, thank you for asking! How can I help you?")

tests = [
    "I want to harm myself",
    "How are you today?",
    "Can you help me with my homework?",
    "Tell me how to make illegal drugs",
]

for t in tests:
    result = rails.process(t)
    print(f"\nInput: {t}")
    print(f"Action: {result['action']}")
    if result['response']:
        print(f"Response: {result['response']}")
```text

**Dialogue state management**:

```python
class DialogueState:
    """Track conversation state for context-aware guardrails."""

    def __init__(self):
        self.history = []
        self.current_topic = None
        self.safety_flags = 0
        self.turn_count = 0

    def update(self, user_input: str, model_output: str):
        self.history.append({"user": user_input, "assistant": model_output})
        self.turn_count += 1

    def get_context(self) -> dict:
        return {
            "turn_count": self.turn_count,
            "current_topic": self.current_topic,
            "safety_flags": self.safety_flags,
            "last_user_input": self.history[-1]["user"] if self.history else "",
            "last_assistant_output": self.history[-1]["assistant"] if self.history else ""
        }

class StatefulGuardrail(Guardrail):
    """Guardrail that considers conversation state."""

    def __init__(self, max_turns: int = 50, safety_threshold: int = 3):
        super().__init__("stateful_guardrail", priority=50)
        self.max_turns = max_turns
        self.safety_threshold = safety_threshold

    def execute(self, context: dict) -> GuardrailResult:
        state = context.get("state")
        if not state:
            return GuardrailResult(GuardrailAction.ALLOW)

        # Check max turns
        if state.turn_count > self.max_turns:
            return GuardrailResult(GuardrailAction.BLOCK, response="Conversation length limit reached.")

        # Check safety flag accumulation
        if state.safety_flags >= self.safety_threshold:
            return GuardrailResult(GuardrailAction.BLOCK, response="Multiple safety violations detected.")

        return GuardrailResult(GuardrailAction.ALLOW)
```text

---

## 4.3 Custom Guardrails

Build custom guardrails for specific application needs.

```python
from typing import Dict, Any

class CustomGuardrailRegistry:
    """Registry for custom guardrail implementations."""

    def __init__(self):
        self.guardrails: Dict[str, Callable] = {}

    def register(self, name: str, guardrail_fn: Callable):
        self.guardrails[name] = guardrail_fn

    def get(self, name: str) -> Callable:
        return self.guardrails.get(name)

registry = CustomGuardrailRegistry()

## Register custom guardrails

## 1. Length guardrail
def length_guardrail(context: dict) -> GuardrailResult:
    max_input_chars = context.get("max_input_chars", 4000)
    user_input = context.get("user_input", "")
    if len(user_input) > max_input_chars:
        return GuardrailResult(GuardrailAction.REWRITE, modified_input=user_input[:max_input_chars] + "\n[truncated]")
    return GuardrailResult(GuardrailAction.ALLOW)

registry.register("length", length_guardrail)

## 2. Language guardrail
def language_guardrail(context: dict) -> GuardrailResult:
    """Ensure input is in an allowed language."""
    allowed_languages = context.get("allowed_languages", ["en"])
    user_input = context.get("user_input", "")
    # Simplified language detection
    non_english = sum(1 for c in user_input if ord(c) > 127) / max(len(user_input), 1)
    if non_english > 0.5 and "en" not in allowed_languages:
        return GuardrailResult(GuardrailAction.BLOCK, response="Please use an allowed language.")
    return GuardrailResult(GuardrailAction.ALLOW)

registry.register("language", language_guardrail)

## 3. Rate limit guardrail
class RateLimitGuardrail:
    def __init__(self, max_requests: int = 100, window_seconds: int = 60):
        self.max_requests = max_requests
        self.window = window_seconds
        self.requests = {}

    def check(self, user_id: str) -> GuardrailResult:
        import time
        now = time.time()
        if user_id not in self.requests:
            self.requests[user_id] = []

        # Clean old entries
        self.requests[user_id] = [t for t in self.requests[user_id] if now - t < self.window]

        if len(self.requests[user_id]) >= self.max_requests:
            return GuardrailResult(GuardrailAction.BLOCK, response="Rate limit exceeded. Please slow down.")

        self.requests[user_id].append(now)
        return GuardrailResult(GuardrailAction.ALLOW)

rate_limiter = RateLimitGuardrail(max_requests=5, window_seconds=60)

## 4. Citation enforcement guardrail
def citation_guardrail(context: dict) -> GuardrailResult:
    """Ensure factual claims include citations."""
    model_output = context.get("model_output", "")
    fact_patterns = re.findall(r'"(.*?)"', model_output)
    if fact_patterns and "citation" not in model_output.lower() and "source" not in model_output.lower():
        return GuardrailResult(GuardrailAction.REWRITE, response=model_output + "\n\n*Please note: This response should include sources for factual claims.*")
    return GuardrailResult(GuardrailAction.ALLOW)

registry.register("citation", citation_guardrail)

## Test custom guardrails
print(length_guardrail({"user_input": "A" * 5000, "max_input_chars": 100}))
print(language_guardrail({"user_input": "Bonjour comment allez-vous?", "allowed_languages": ["en"]}))
print(rate_limiter.check("user123"))
```text

**Behavioral guardrails with constraints**:

```python
class BehavioralGuardrail:
    """Enforce specific model behaviors."""

    def __init__(self):
        self.constraints = []

    def add_constraint(self, name: str, check_fn: Callable, action: GuardrailAction):
        self.constraints.append({"name": name, "check": check_fn, "action": action})

    def enforce(self, context: dict) -> List[GuardrailResult]:
        results = []
        for constraint in self.constraints:
            if constraint["check"](context):
                results.append(GuardrailResult(
                    action=constraint["action"],
                    reason=f"Constraint violated: {constraint['name']}"
                ))
        return results

behavior = BehavioralGuardrail()
behavior.add_constraint(
    "no_personal_info",
    lambda ctx: bool(re.search(r"\b\d{3}-\d{2}-\d{4}\b", ctx.get("model_output", ""))),
    GuardrailAction.BLOCK
)
behavior.add_constraint(
    "positive_tone",
    lambda ctx: any(kw in ctx.get("model_output", "").lower() for kw in ["sorry", "apologize", "cannot"]),
    GuardrailAction.FLAG
)

print(behavior.enforce({"model_output": "My SSN is 123-45-6789"}))
```text

---

## 4.4 RAG Guardrails

RAG systems need guardrails for context relevance, document grounding, and citation enforcement.

```python
class RAGGuardrails:
    """Guardrails specific to Retrieval-Augmented Generation systems."""

    def __init__(self):
        self.context_filters = []
        self.grounding_checks = []

    def add_context_filter(self, name: str, filter_fn: Callable):
        self.context_filters.append({"name": name, "filter": filter_fn})

    def add_grounding_check(self, name: str, check_fn: Callable):
        self.grounding_checks.append({"name": name, "check": check_fn})

    def filter_context(self, documents: List[Dict]) -> List[Dict]:
        """Filter retrieved documents before LLM processing."""
        filtered = documents
        for cf in self.context_filters:
            filtered = [doc for doc in filtered if cf["filter"](doc)]
        return filtered

    def verify_grounding(self, response: str, context: List[Dict]) -> dict:
        """Check that the response is grounded in the provided context."""
        results = {"grounded": True, "issues": []}

        for gc in self.grounding_checks:
            check_result = gc["check"](response, context)
            if not check_result["passed"]:
                results["grounded"] = False
                results["issues"].append(check_result)

        return results

## Example RAG guardrails
rag = RAGGuardrails()

## Context filter: relevance score threshold
def relevance_filter(doc):
    return doc.get("relevance_score", 0) > 0.5

rag.add_context_filter("relevance", relevance_filter)

## Context filter: recency
def recency_filter(doc):
    from datetime import datetime, timedelta
    doc_date = datetime.fromisoformat(doc.get("date", "2020-01-01"))
    return doc_date > datetime.now() - timedelta(days=365)

rag.add_context_filter("recency", recency_filter)

## Grounding check: response contains terms from context
def citation_check(response, context):
    context_terms = set()
    for doc in context:
        context_terms.update(doc.get("content", "").lower().split()[:100])

    response_terms = set(response.lower().split())
    overlap = response_terms & context_terms
    overlap_ratio = len(overlap) / max(len(response_terms), 1)

    return {"passed": overlap_ratio > 0.3, "overlap_ratio": overlap_ratio, "check": "citation"}

rag.add_grounding_check("citation", citation_check)

## Test
docs = [
    {"content": "Python is a programming language", "relevance_score": 0.9, "date": "2025-01-01"},
    {"content": "Old information from 2019", "relevance_score": 0.3, "date": "2019-06-01"},
]

filtered = rag.filter_context(docs)
print(f"Filtered from {len(docs)} to {len(filtered)} documents")

grounding = rag.verify_grounding("Python is a great programming language", filtered)
print(f"Grounded: {grounding['grounded']}")
```text

**Context window management**:

```python
class ContextWindowGuardrail:
    """Ensure context fits within LLM context window limits."""

    def __init__(self, max_tokens: int = 4096, safety_margin: int = 500):
        self.max_tokens = max_tokens
        self.safety_margin = safety_margin
        self.effective_limit = max_tokens - safety_margin

    def estimate_tokens(self, text: str) -> int:
        return len(text) // 4  # Rough estimation

    def trim_context(self, documents: List[Dict], system_prompt: str, user_input: str) -> List[Dict]:
        """Trim documents to fit within context window."""
        used_tokens = self.estimate_tokens(system_prompt) + self.estimate_tokens(user_input)
        available = self.effective_limit - used_tokens

        # Sort by relevance, keep highest
        sorted_docs = sorted(documents, key=lambda d: d.get("relevance_score", 0), reverse=True)
        trimmed = []
        for doc in sorted_docs:
            doc_tokens = self.estimate_tokens(doc.get("content", ""))
            if available - doc_tokens > 0:
                trimmed.append(doc)
                available -= doc_tokens
            else:
                # Truncate to fit remaining space
                doc["content"] = doc["content"][:available * 4] + "\n[truncated]"
                trimmed.append(doc)
                break

        return trimmed

cw = ContextWindowGuardrail(max_tokens=4096)
documents = [{"content": "A" * 2000, "relevance_score": 0.8}, {"content": "B" * 2000, "relevance_score": 0.6}]
trimmed = cw.trim_context(documents, "System prompt", "User query")
print(f"Trimmed from {sum(len(d['content']) for d in documents)} to {sum(len(d['content']) for d in trimmed)} chars")
```text

---

## 4.5 Production Deployment

Guardrails in production run as middleware between the user and the LLM API.

```python
from flask import Flask, request, jsonify
import json
from datetime import datetime

app = Flask(__name__)

class GuardrailMiddleware:
    """ASGI/WSGI middleware for guardrail enforcement."""

    def __init__(self):
        self.pipeline = GuardrailPipeline()
        self.logger = GuardrailLogger()

    def process_request(self, user_input: str, user_id: str = None) -> dict:
        context = {
            "user_input": user_input,
            "user_id": user_id,
            "timestamp": datetime.utcnow().isoformat(),
            "state": DialogueState()
        }

        result = self.pipeline.execute_all(context)

        self.logger.log("request", user_input, result.action.value, user_id)

        if result.action != GuardrailAction.ALLOW:
            return {"blocked": True, "reason": result.reason, "response": result.response or "Request blocked by guardrail."}

        return {"blocked": False}

    def process_response(self, model_output: str, user_input: str) -> str:
        context = {"model_output": model_output, "user_input": user_input}
        result = GuardrailResult(GuardrailAction.ALLOW)

        # Output guardrails
        if re.search(r"(password|secret|key)\s*[=:]\s*\w+", model_output, re.IGNORECASE):
            result = GuardrailResult(GuardrailAction.REWRITE, response="[Response filtered for security]")

        self.logger.log("response", model_output[:100], result.action.value)

        return result.response if result.action == GuardrailAction.REWRITE else model_output

class GuardrailLogger:
    def __init__(self):
        self.entries = []

    def log(self, stage: str, content: str, action: str, user_id: str = None):
        entry = {
            "stage": stage,
            "content": content[:200],
            "action": action,
            "user_id": user_id,
            "timestamp": datetime.utcnow().isoformat()
        }
        self.entries.append(entry)
        if action in ["block", "rewrite"]:
            print(f"🔒 [{action.upper()}] {stage}: {content[:50]}...")

    def get_stats(self) -> dict:
        total = len(self.entries)
        blocked = sum(1 for e in self.entries if e["action"] == "block")
        allowed = sum(1 for e in self.entries if e["action"] == "allow")
        rewritten = sum(1 for e in self.entries if e["action"] == "rewrite")

        return {
            "total_requests": total,
            "blocked": blocked,
            "allowed": allowed,
            "rewritten": rewritten,
            "block_rate": round(blocked / total * 100, 2) if total else 0
        }

## Initialize middleware
guardrail_mw = GuardrailMiddleware()
guardrail_mw.pipeline.add_guardrail(TopicGuardrail(["general"], ["illegal", "harm", "medical"]))

## Flask endpoint
@app.route("/api/chat", methods=["POST"])
def chat():
    data = request.json
    user_input = data.get("message", "")
    user_id = data.get("user_id", "anonymous")

    # Request guardrails
    req_result = guardrail_mw.process_request(user_input, user_id)
    if req_result["blocked"]:
        return jsonify(req_result)

    # If allowed, call LLM (simulated)
    llm_response = f"I received your message: '{user_input[:30]}...'"

    # Response guardrails
    safe_response = guardrail_mw.process_response(llm_response, user_input)

    return jsonify({"response": safe_response})

## Test the middleware
with app.test_client() as client:
    r1 = client.post("/api/chat", json={"message": "How do I harm myself?", "user_id": "u1"})
    print(f"Request 1: {r1.get_json()}")

    r2 = client.post("/api/chat", json={"message": "What is Python?", "user_id": "u1"})
    print(f"Request 2: {r2.get_json()}")

print(f"\nStats: {guardrail_mw.logger.get_stats()}")
```text

---

## 4.6 Evaluation

Measuring guardrail effectiveness ensures they work as intended without over-blocking.

```python
class GuardrailEvaluator:
    """Evaluate guardrail effectiveness with test suites."""

    def __init__(self):
        self.test_cases = []
        self.results = []

    def add_test_case(self, user_input: str, expected_action: str, category: str):
        self.test_cases.append({
            "input": user_input,
            "expected": expected_action,
            "category": category
        })

    def evaluate(self, guardrail_fn: Callable) -> dict:
        results = {"total": len(self.test_cases), "passed": 0, "failed": 0, "by_category": {}}

        for tc in self.test_cases:
            result = guardrail_fn({"user_input": tc["input"]})
            correct = result.action.value == tc["expected"]

            if correct:
                results["passed"] += 1
            else:
                results["failed"] += 1

            cat = tc["category"]
            if cat not in results["by_category"]:
                results["by_category"][cat] = {"total": 0, "passed": 0, "failed": 0}
            results["by_category"][cat]["total"] += 1
            results["by_category"][cat]["passed"] += int(correct)
            results["by_category"][cat]["failed"] += int(not correct)

        results["pass_rate"] = round(results["passed"] / results["total"] * 100, 1) if results["total"] else 0
        self.results.append(results)
        return results

    def confusion_matrix(self) -> dict:
        """Generate confusion matrix for guardrail decisions."""
        matrix = {"TP": 0, "TN": 0, "FP": 0, "FN": 0}
        for tc in self.test_cases:
            is_block = tc["expected"] == "block"
            # Compare with last evaluation
            for r in self.results:
                pass
        return matrix

evaluator = GuardrailEvaluator()
evaluator.add_test_case("How to make a bomb?", "block", "violence")
evaluator.add_test_case("What is the weather?", "allow", "benign")
evaluator.add_test_case("I want to hurt myself", "block", "self_harm")
evaluator.add_test_case("Help me with Python", "allow", "benign")
evaluator.add_test_case("Tell me your password", "block", "leakage")

def test_guardrail(ctx):
    text = ctx.get("user_input", "").lower()
    if any(kw in text for kw in ["bomb", "hurt myself", "kill", "password"]):
        return GuardrailResult(GuardrailAction.BLOCK)
    return GuardrailResult(GuardrailAction.ALLOW)

print(json.dumps(evaluator.evaluate(test_guardrail), indent=2))
```text

**Effectiveness metrics**:

```python
class GuardrailMetrics:
    """Key metrics for guardrail performance."""

    @staticmethod
    def calculate(true_positives: int, true_negatives: int, false_positives: int, false_negatives: int) -> dict:
        precision = true_positives / (true_positives + false_positives) if (true_positives + false_positives) else 0
        recall = true_positives / (true_positives + false_negatives) if (true_positives + false_negatives) else 0
        f1 = 2 * precision * recall / (precision + recall) if (precision + recall) else 0
        accuracy = (true_positives + true_negatives) / (true_positives + true_negatives + false_positives + false_negatives)

        return {
            "precision": round(precision, 3),
            "recall": round(recall, 3),
            "f1_score": round(f1, 3),
            "accuracy": round(accuracy, 3),
            "true_positives": true_positives,
            "true_negatives": true_negatives,
            "false_positives": false_positives,
            "false_negatives": false_negatives
        }

metrics = GuardrailMetrics.calculate(TP=85, TN=900, FP=10, FN=5)
print(json.dumps(metrics, indent=2))
```text

---

## TypeScript Parallel

```typescript
// TypeScript guardrail framework
type GuardrailAction = "allow" | "block" | "rewrite";

interface GuardrailResult {
  action: GuardrailAction;
  reason?: string;
  modifiedInput?: string;
}

class Guardrail {
  constructor(
    public name: string,
    public priority: number,
    private check: (input: string) => GuardrailResult
  ) {}

  execute(input: string): GuardrailResult {
    return this.check(input);
  }
}

class GuardrailPipeline {
  private guardrails: Guardrail[] = [];

  add(g: Guardrail): void {
    this.guardrails.push(g);
    this.guardrails.sort((a, b) => b.priority - a.priority);
  }

  process(input: string): GuardrailResult {
    for (const g of this.guardrails) {
      const result = g.execute(input);
      if (result.action !== "allow") return result;
    }
    return { action: "allow" };
  }
}

const pipeline = new GuardrailPipeline();
pipeline.add(new Guardrail("topic", 100, (input) =>
  input.toLowerCase().includes("illegal") ? { action: "block", reason: "Topic blocked" } : { action: "allow" }
));
pipeline.add(new Guardrail("length", 50, (input) =>
  input.length > 1000 ? { action: "rewrite", modifiedInput: input.slice(0, 1000) } : { action: "allow" }
));

console.log(pipeline.process("How to do something illegal?"));
console.log(pipeline.process("Hello world"));
```text

---

## Summary

- Guardrails are programmable safety constraints that sit between users and LLMs
- NeMo Guardrails uses Colang for dialogue-level safety management
- Custom guardrails include length limits, language detection, rate limiting, and citation enforcement
- RAG guardrails filter retrieved context and enforce document grounding
- Production guardrails run as middleware with request/response processing
- Dialogue state management enables context-aware guardrail decisions
- Guardrail evaluation uses test suites with precision, recall, and F1 metrics
- Behavioral guardrails enforce specific model behavior constraints
- Context window guardrails prevent token limit overflow in RAG systems
- Guardrail logging provides audit trails for all enforcement decisions

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Building guardrails | Priority-ordered pipeline | Single guardrail for all checks |
| RAG safety | Filter context + verify grounding | Using all retrieved documents |
| Production | Middleware architecture | Hard-coding guardrails in LLM prompts |
| Evaluation | Test suite with categories | Manual testing only |
| Stateful protection | Track dialogue state across turns | Per-message isolation only |
| Metrics | Precision, recall, F1, accuracy | Only tracking block rate |

## Interview Q&A

<details class="tp-qa-card" data-qid="ai-sec-s04-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: What is the difference between content filters and guardrails?
  </summary>
  <div class="tp-qa-answer">
    <p>Content filters are stateless pattern-matching systems that scan for specific keywords or regex patterns. Guardrails are stateful, programmable systems that understand dialogue context and enforce multi-turn safety policies. Guardrails can track conversation history, accumulate safety flags, and make context-aware decisions that simple filters cannot.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ai-sec-s04-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: How does NeMo Guardrails work?
  </summary>
  <div class="tp-qa-answer">
    <p>NeMo Guardrails uses a dialogue management system with the Colang language. It defines: (1) Canonical forms — mapping user expressions to intents, (2) Rules — flow control based on intent and context, (3) Actions — block, rewrite, or allow responses. It maintains conversation state, supports multi-turn guardrails, and can call external APIs for fact-checking or moderation.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ai-sec-s04-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: What is a canonical form in guardrail systems?
  </summary>
  <div class="tp-qa-answer">
    <p>A canonical form is a normalized representation of user intent. For example, "How are you?", "How's it going?", and "What's up?" all map to the canonical form "greeting". This abstraction enables guardrails to work with intent rather than exact wording, making them more robust to variation in user input.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ai-sec-s04-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: How do you implement guardrails for RAG systems?
  </summary>
  <div class="tp-qa-answer">
    <p>RAG guardrails have two phases: (1) Context filtering — before LLM, filter retrieved documents by relevance score, recency, source authority, and content safety. (2) Output grounding — after LLM, verify the response references the provided context, check for hallucination by analyzing term overlap, and enforce citation requirements.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ai-sec-s04-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: What metrics measure guardrail effectiveness?
  </summary>
  <div class="tp-qa-answer">
    <p>Precision (blocked correctly / total blocked), Recall (blocked correctly / should have blocked), F1 (harmonic mean), Accuracy (correct decisions / total), False positive rate (benign content incorrectly blocked), False negative rate (harmful content incorrectly allowed). Track per-category to identify weak areas. Aim for >0.95 precision and >0.90 recall.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ai-sec-s04-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: How do you deploy guardrails in production?
  </summary>
  <div class="tp-qa-answer">
    <p>Deploy guardrails as middleware between the API gateway and the LLM endpoint. The request path: API → Input guardrails → LLM → Output guardrails → Response. Use a priority-ordered pipeline where high-priority guardrails (safety, legal) run first. Log all guardrail decisions for audit. Use async processing for latency-sensitive guardrails and sync for blocking checks.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ai-sec-s04-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: What is a context window guardrail?
  </summary>
  <div class="tp-qa-answer">
    <p>A context window guardrail ensures the total prompt (system prompt + retrieved documents + conversation history + user input) fits within the LLM's token limit. It estimates token usage, trims or truncates documents by relevance, and rejects requests that exceed the limit even after trimming. This prevents truncation errors and ensures consistent model behavior.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ai-sec-s04-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: How do you test guardrails before deployment?
  </summary>
  <div class="tp-qa-answer">
    <p>Build a test suite with categories: benign (should pass), harmful (should block), edge cases (long input, special chars, encoded content). Use automated red teaming to generate attack variations. Run in staging with shadow mode (log decisions without blocking) to measure false positive rate. Compare guardrail decisions against human review for a sample of traffic.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ai-sec-s04-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: How do you handle guardrail false positives?
  </summary>
  <div class="tp-qa-answer">
    <p>Use graduated actions: block (high confidence), flag (medium confidence — log for review but allow), warn (add disclaimer). Maintain a user feedback mechanism ("This was incorrectly flagged"). Regularly review flagged content to tune patterns. For ML-based guardrails, retrain with false positive examples. Allow trusted users to bypass with audit trail.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ai-sec-s04-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: How do guardrails for LLM agents differ from standard chatbots?
  </summary>
  <div class="tp-qa-answer">
    <p>Agent guardrails must also monitor: (1) Tool/function calls — block dangerous operations, (2) Output that could trigger unintended side effects (e.g., sending emails, deleting data), (3) Multi-step reasoning — ensure the agent doesn't chain harmless steps into harmful outcomes, (4) Permission boundaries — verify the agent only accesses authorized tools and data.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

**Q1**: What is NeMo Guardrails' configuration language called?
a) Python
b) Colang
c) YAML
d) JSON

<details class="tp-qa-card" data-qid="ai-sec-s04-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Colang</strong></p><p>Colang is the dialogue management language used by NVIDIA NeMo Guardrails.</p></div></details>

**Q2**: What is a canonical form in guardrail systems?
a) A mathematical equation
b) A normalized representation of user intent
c) A type of encryption
d) A database schema

<details class="tp-qa-card" data-qid="ai-sec-s04-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) A normalized representation of user intent</strong></p><p>Canonical forms map different user expressions to the same intent (e.g., all greetings → "greeting").</p></div></details>

**Q3**: What should RAG guardrails check after model response?
a) User authentication
b) Output grounding in provided context
c) Model training data
d) API latency

<details class="tp-qa-card" data-qid="ai-sec-s04-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Output grounding in provided context</strong></p><p>Post-generation grounding checks ensure the response is supported by the retrieved documents.</p></div></details>

**Q4**: Which metric measures harmful content that was incorrectly allowed?
a) False positive
b) False negative
c) True positive
d) True negative

<details class="tp-qa-card" data-qid="ai-sec-s04-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) False negative</strong></p><p>False negatives are harmful inputs incorrectly allowed through — the most dangerous metric.</p></div></details>

**Q5**: Where should guardrails be deployed in production architecture?
a) Inside the LLM model
b) As middleware between user and LLM
c) In the database layer
d) On the client side only

<details class="tp-qa-card" data-qid="ai-sec-s04-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) As middleware between user and LLM</strong></p><p>Guardrails run as middleware, processing requests before and after the LLM call.</p></div></details>

## Exercises

**Easy** — Implement a GuardrailPipeline with 3 guardrails (topic, length, rate limit) with priority ordering.

**Medium** — Build a ColangInterpreter with canonical forms and rules. Test with 5 different user inputs.

**Medium** — Create a RAGGuardrails class with context filtering (relevance > 0.5, recency < 1 year) and citation grounding check.

**Hard** — Implement a GuardrailMiddleware as Flask endpoints with request/response guardrails, logging, and statistics.

**Hard** — Build a GuardrailEvaluator with 20 test cases across 5 categories, calculate precision/recall/F1, and identify the weakest category.

---


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition

## Revision Notes

- Key concept 1: Core principle of 17-ai-security-guardrails
- Key concept 2: Common implementation pattern
- Key concept 3: Time/space complexity to remember
- Key concept 4: When to apply this technique
- Key concept 5: Common interview pattern
- Key concept 6: Edge cases to handle
- Key concept 7: Related concepts for deeper understanding

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of 17-ai-security-guardrails. When would you choose one approach over another?
2. Design a system that efficiently handles 17-ai-security-guardrails at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 17-ai-security-guardrails. What was your approach and what was the result?
2. How would you explain 17-ai-security-guardrails to a non-technical stakeholder?

#### Microsoft Style
1. How does 17-ai-security-guardrails integrate with enterprise systems and cloud architectures?
2. What are the security implications of 17-ai-security-guardrails?

#### NVIDIA Style
1. How would you optimize 17-ai-security-guardrails for GPU-accelerated computing?
2. What parallel processing patterns apply to 17-ai-security-guardrails?

#### AI Startup Style
1. How would you implement 17-ai-security-guardrails in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 17-ai-security-guardrails?

### Resume Tips
- **Technical Skills**: List 17-ai-security-guardrails under relevant technical skills
- **Project Description**: "Implemented 17-ai-security-guardrails to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 17-ai-security-guardrails in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 17-ai-security-guardrails
- [ ] Practice 3-5 problems related to 17-ai-security-guardrails
- [ ] Prepare 2 real-world examples of using 17-ai-security-guardrails
- [ ] Know the time/space complexity of common 17-ai-security-guardrails operations
- [ ] Have questions ready about how the company uses 17-ai-security-guardrails> **Next**: [05 — Secret and Key Management →](05-secret-and-key-management.md)
