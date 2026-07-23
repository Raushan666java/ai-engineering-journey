<!-- Clear Language: Keep sentences under 50 words -->
# Advanced Agent Patterns

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand advanced agent orchestration patterns |
| LO2 | Implement plan-and-execute and reflection-based agents |
| LO3 | Build tool composition and dynamic routing workflows |
| LO4 | Design agent systems with self-healing and adaptation |
| LO5 | Implement caching, batching, and streaming optimizations |

## Introduction

AI agents autonomously use tools to complete tasks. LangGraph builds stateful, multi-step agent workflows. This module covers agent architectures, tool use, memory, and production deployment.




## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

## Theory

Understanding advanced agent patterns is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how advanced agent patterns works in practice.



## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 10.1 | Plan-and-Execute | Decomposition, sub-task planning, execution |
| 10.2 | Reflection | Self-critique, refinement, iterative improvement |
| 10.3 | Tool Composition | Chaining, routing, dynamic tool selection |
| 10.4 | Self-Healing | Error recovery, dynamic replanning |
| 10.5 | Adaptation | Context adaptation, learning from feedback |
| 10.6 | Optimization | Caching, batching, streaming |

## Chapter Roadmap

```mermaid
flowchart LR
    subgraph Planner
        P[Plan Decomposer]
        S[Sub-task Queue]
    end
    subgraph Executor
        E1[Execute Sub-task]
        E2[Check Result]
        R[Reflect]
    end
    subgraph Adaptation
        FB[Feedback Loop]
        AD[Adapt Strategy]
    end
    Query --> P --> S --> E1 --> E2
    E2 -->|Success| Next[Next Sub-task]
    E2 -->|Failure| R --> P
    E1 --> FB --> AD --> P
```text

## 10.1 Plan-and-Execute

### 10.1.1 Plan Decomposition

```python
from dataclasses import dataclass, field
from typing import List, Dict, Optional, Callable, Any
import json


@dataclass
class SubTask:
    id: str
    description: str
    required_tool: Optional[str] = None
    dependencies: List[str] = field(default_factory=list)
    result: Any = None
    status: str = "pending"


class PlanDecomposer:
    def __init__(self, llm_call: Callable):
        self.llm = llm_call

    def decompose(self, query: str, available_tools: List[str]) -> List[SubTask]:
        tasks = []
        task_list = self.llm(
            f"Break this query into sub-tasks: {query}\n"
            f"Available tools: {', '.join(available_tools)}\n"
            "Return a JSON list of {{'id', 'description', 'required_tool', 'dependencies'}}"
        )
        parsed = json.loads(task_list)
        for i, item in enumerate(parsed):
            tasks.append(SubTask(
                id=item.get("id", f"task-{i}"),
                description=item["description"],
                required_tool=item.get("required_tool"),
                dependencies=item.get("dependencies", []),
            ))
        return tasks


class PlanExecutor:
    def __init__(self, tool_registry: Dict[str, Callable]):
        self.tools = tool_registry

    def execute(self, plan: List[SubTask]) -> List[SubTask]:
        completed = {}
        while not self._all_done(plan):
            for task in plan:
                if task.status == "pending" and all(
                    completed.get(d, {}).get("status") == "completed"
                    for d in task.dependencies
                ):
                    tool = self.tools.get(task.required_tool, self._default_tool)
                    try:
                        result = tool(task.description)
                        task.result = result
                        task.status = "completed"
                        completed[task.id] = task
                    except Exception as e:
                        task.status = "failed"
                        task.result = str(e)
        return plan

    def _default_tool(self, desc: str) -> str:
        return f"Processed: {desc}"

    def _all_done(self, plan: List[SubTask]) -> bool:
        return all(t.status in ("completed", "failed") for t in plan)


def mock_llm(prompt: str) -> str:
    return json.dumps([
        {"id": "task-1", "description": "Search for relevant documents",
         "required_tool": "search", "dependencies": []},
        {"id": "task-2", "description": "Summarize findings",
         "required_tool": "summarize", "dependencies": ["task-1"]},
        {"id": "task-3", "description": "Generate final report",
         "required_tool": "generate", "dependencies": ["task-2"]},
    ])


def mock_search(query: str) -> str:
    return f"Search results for {query}"

def mock_summarize(text: str) -> str:
    return f"Summary: {text[:50]}..."

def mock_generate(text: str) -> str:
    return f"Report: {text}"


decomposer = PlanDecomposer(mock_llm)
executor = PlanExecutor({"search": mock_search, "summarize": mock_summarize, "generate": mock_generate})

plan = decomposer.decompose("Analyze quarterly earnings report", ["search", "summarize", "generate"])
results = executor.execute(plan)
for t in results:
    print(f"{t.id}: {t.status}")
```text

### 10.1.2 Dynamic Replanning

```python
class DynamicReplanner:
    def __init__(self, decomposer: PlanDecomposer, max_replans: int = 3):
        self.decomposer = decomposer
        self.max_replans = max_replans
        self.replan_count = 0

    def execute_with_replan(self, query: str, tools: List[str],
                            executor: PlanExecutor) -> List[SubTask]:
        plan = self.decomposer.decompose(query, tools)

        while self.replan_count < self.max_replans:
            results = executor.execute(plan)
            failed = [t for t in results if t.status == "failed"]

            if not failed:
                return results

            self.replan_count += 1
            failure_context = json.dumps([{
                "failed_task": t.id,
                "error": t.result,
            } for t in failed])

            plan = self.decomposer.decompose(
                f"Replan these failed tasks: {failure_context}\nOriginal query: {query}",
                tools
            )

        return results


replanner = DynamicReplanner(decomposer)
print(f"Replanner ready with {replanner.max_replans} max replans")
```text

## 10.2 Reflection Patterns

### 10.2.1 Self-Critique

```python
class SelfCritiqueAgent:
    def __init__(self, llm_call: Callable):
        self.llm = llm_call

    def generate_and_refine(self, task: str, max_iterations: int = 3) -> List[str]:
        outputs = []
        current = self.llm(f"Complete this task: {task}")
        outputs.append(current)

        for i in range(max_iterations - 1):
            critique = self.llm(
                f"Critique this output for quality, accuracy, and completeness:\n{current}\n"
                f"Task: {task}"
            )
            improved = self.llm(
                f"Original task: {task}\nPrevious output: {current}\n"
                f"Critique: {critique}\nImprove the output based on this critique."
            )
            outputs.append(improved)
            current = improved

        return outputs


def reflection_llm(prompt: str) -> str:
    if "critique" in prompt.lower():
        return "Improve clarity, add more detail, ensure factual accuracy, fix grammar"
    if "improve" in prompt.lower():
        return "This is an improved version of the output with better detail and clarity."
    return "Initial output for the given task."


agent = SelfCritiqueAgent(reflection_llm)
outputs = agent.generate_and_refine("Explain what RAG is")
print(f"Reflection rounds: {len(outputs)}")
for i, o in enumerate(outputs):
    print(f"  Iteration {i+1}: {o[:60]}...")
```text

### 10.2.2 Structured Reflection

```python
@dataclass
class ReflectionFeedback:
    score: float
    issues: List[str]
    suggestions: List[str]
    passed: bool


class StructuredReflector:
    def __init__(self, rubric: Dict[str, float]):
        self.rubric = rubric

    def evaluate(self, output: str, task: str) -> ReflectionFeedback:
        scores = {}
        issues = []
        suggestions = []

        for criterion, max_score in self.rubric.items():
            score = self._score_criterion(criterion, output, task)
            scores[criterion] = score
            if score < max_score * 0.6:
                issues.append(f"Low {criterion}: {score}/{max_score}")
                suggestions.append(f"Improve {criterion}")

        avg = sum(scores.values()) / len(scores)
        return ReflectionFeedback(
            score=avg,
            issues=issues,
            suggestions=suggestions,
            passed=avg >= 0.7,
        )

    def _score_criterion(self, criterion: str, output: str, task: str) -> float:
        if criterion == "clarity":
            return 0.9 if len(output.split()) > 20 else 0.5
        elif criterion == "accuracy":
            return 0.85
        elif criterion == "completeness":
            return 0.75
        return 0.8


reflector = StructuredReflector({"clarity": 1.0, "accuracy": 1.0, "completeness": 1.0})
fb = reflector.evaluate("A clear and complete answer about agents.", "Explain agents")
print(f"Reflection: score={fb.score}, passed={fb.passed}, issues={fb.issues}")
```text

### 10.2.3 Iterative Refinement Loop

```python
class RefinementLoop:
    def __init__(self, generator: Callable, reflector: StructuredReflector, max_steps: int = 5):
        self.generate = generator
        self.reflect = reflector
        self.max_steps = max_steps

    def run(self, task: str) -> Dict[str, Any]:
        history = []
        current = self.generate(task)

        for step in range(self.max_steps):
            feedback = self.reflect(current, task)
            history.append({"step": step, "output": current, "feedback": feedback})

            if feedback.passed:
                return {"success": True, "output": current, "steps": step + 1, "history": history}

            current = self.generate(f"Improve based on these issues: {feedback.issues}\nTask: {task}\nPrevious: {current}")

        return {"success": False, "output": current, "steps": self.max_steps, "history": history}


loop = RefinementLoop(reflection_llm, reflector)
result = loop.run("Write a concise summary")
print(f"Refinement: success={result['success']}, steps={result['steps']}")
```text

## 10.3 Tool Composition

### 10.3.1 Dynamic Tool Router

```python
class ToolRouter:
    def __init__(self, tools: Dict[str, Callable]):
        self.tools = tools

    def route(self, query: str) -> Callable:
        query_lower = query.lower()
        if any(word in query_lower for word in ["search", "find", "lookup"]):
            return self.tools["search"]
        elif any(word in query_lower for word in ["summarize", "summarise", "extract"]):
            return self.tools["summarize"]
        elif any(word in query_lower for word in ["calculate", "compute", "math"]):
            return self.tools["calculate"]
        return self.tools["default"]

    def handle(self, query: str) -> str:
        tool = self.route(query)
        return tool(query)


def search_fn(q: str) -> str:
    return f"Searched: {q}"

def summarize_fn(q: str) -> str:
    return f"Summary: {q}"

def calculate_fn(q: str) -> str:
    return f"Result: {eval(q.split('calculate')[-1].strip())}"

def default_fn(q: str) -> str:
    return f"Processed: {q}"


router = ToolRouter({
    "search": search_fn,
    "summarize": summarize_fn,
    "calculate": calculate_fn,
    "default": default_fn,
})
print(router.handle("search for AI agents"))
print(router.handle("calculate 2 + 2"))
```text

### 10.3.2 Tool Chain

```python
class ToolChain:
    def __init__(self):
        self.steps: List[Dict] = []

    def add_step(self, name: str, tool: Callable, output_key: str):
        self.steps.append({
            "name": name,
            "tool": tool,
            "output_key": output_key,
        })

    def execute(self, initial_input: Any) -> Dict[str, Any]:
        context = {"input": initial_input}

        for step in self.steps:
            input_data = context.get("input", initial_input)
            result = step["tool"](input_data)
            context[step["output_key"]] = result

        return context


chain = ToolChain()
chain.add_step("extract", lambda x: f"extracted: {x}", "extracted")
chain.add_step("transform", lambda x: f"transformed: {x}", "transformed")
chain.add_step("format", lambda x: f"final: {x}", "output")

result = chain.execute("raw_data")
print(f"Chain result: {result['output']}")
```text

### 10.3.3 Parallel Tool Execution

```python
import concurrent.futures


class ParallelToolExecutor:
    def __init__(self, max_workers: int = 4):
        self.max_workers = max_workers
        self.tools: Dict[str, Callable] = {}

    def register(self, name: str, tool: Callable):
        self.tools[name] = tool

    def execute_all(self, input_data: Any) -> Dict[str, Any]:
        results = {}

        with concurrent.futures.ThreadPoolExecutor(max_workers=self.max_workers) as executor:
            futures = {
                executor.submit(tool_fn, input_data): name
                for name, tool_fn in self.tools.items()
            }

            for future in concurrent.futures.as_completed(futures):
                name = futures[future]
                try:
                    results[name] = future.result()
                except Exception as e:
                    results[name] = f"Error: {e}"

        return results


pte = ParallelToolExecutor(max_workers=3)
pte.register("search", lambda x: f"search({x})")
pte.register("summarize", lambda x: f"summary({x})")
pte.register("embed", lambda x: f"embed({x})")

results = pte.execute_all("test query")
print(f"Parallel results: {results}")
```text

## 10.4 Self-Healing

### 10.4.1 Error Recovery

```python
class RecoveryStrategy:
    def __init__(self):
        self.strategies = {
            "timeout": self._retry_with_timeout,
            "rate_limit": self._backoff_retry,
            "invalid_response": self._reformat_request,
            "missing_tool": self._find_alternative_tool,
        }

    def recover(self, error_type: str, fn: Callable, context: Dict) -> Any:
        strategy = self.strategies.get(error_type, self._default_recovery)
        return strategy(fn, context)

    def _retry_with_timeout(self, fn: Callable, context: Dict) -> Any:
        return fn(context)

    def _backoff_retry(self, fn: Callable, context: Dict) -> Any:
        return fn(context)

    def _reformat_request(self, fn: Callable, context: Dict) -> Any:
        context["reformatted"] = True
        return fn(context)

    def _find_alternative_tool(self, fn: Callable, context: Dict) -> Any:
        return {"alternative_used": True, "result": "Fallback processing"}

    def _default_recovery(self, fn: Callable, context: Dict) -> Any:
        return {"error": "unrecoverable", "message": "No recovery strategy available"}


recovery = RecoveryStrategy()
result = recovery.recover("missing_tool", lambda c: c, {})
print(f"Recovery: {result}")
```text

### 10.4.2 Dynamic Replanning

```python
class SelfHealingAgent:
    def __init__(self, tools: Dict[str, Callable], llm_call: Callable):
        self.tools = tools
        self.llm = llm_call
        self.health_history: List[Dict] = []

    def execute_safe(self, task: str) -> Dict[str, Any]:
        attempts = []
        tool_name, tool_fn = self._select_tool(task)

        for attempt in range(3):
            try:
                result = tool_fn(task)
                entry = {"task": task, "tool": tool_name, "attempt": attempt + 1, "success": True}
                self.health_history.append(entry)
                return {"result": result, "attempts": attempt + 1}
            except Exception as e:
                attempts.append(str(e))
                tool_name, tool_fn = self._select_tool(f"{task} (alternative approach)")

        entry = {"task": task, "tool": tool_name, "attempt": len(attempts), "success": False}
        self.health_history.append(entry)
        return {"error": attempts[-1], "attempts": len(attempts)}

    def _select_tool(self, task: str) -> tuple:
        for name, fn in self.tools.items():
            if name in task.lower():
                return name, fn
        return "default", lambda x: f"Default: {x}"


healing = SelfHealingAgent({"search": lambda x: f"search({x})"}, mock_llm)
result = healing.execute_safe("search for AI news")
print(f"Self-healing: {result}")
```text

## 10.5 Adaptation

### 10.5.1 Context Adaptation

```python
class ContextAdaptiveAgent:
    def __init__(self):
        self.user_profiles: Dict[str, Dict] = {}
        self.domain_context: Dict[str, Any] = {}

    def adapt_prompt(self, user_id: str, query: str, domain: str = "general") -> str:
        profile = self.user_profiles.get(user_id, {"style": "default", "expertise": "beginner"})
        context = self.domain_context.get(domain, {})

        adapted = query
        if profile.get("expertise") == "beginner":
            adapted = f"Explain simply: {query}"
        elif profile.get("expertise") == "expert":
            adapted = f"Technical: {query}"

        if context.get("constraints"):
            adapted += f" Constraints: {context['constraints']}"

        return adapted

    def update_profile(self, user_id: str, interaction: Dict):
        if user_id not in self.user_profiles:
            self.user_profiles[user_id] = {"style": "default", "expertise": "beginner", "interactions": []}
        self.user_profiles[user_id]["interactions"].append(interaction)

    def learn_preference(self, user_id: str) -> None:
        interactions = self.user_profiles.get(user_id, {}).get("interactions", [])
        if interactions:
            styles = [i.get("feedback", "default") for i in interactions]
            preferred = max(set(styles), key=styles.count)
            self.user_profiles[user_id]["style"] = preferred


adaptive = ContextAdaptiveAgent()
adapted = adaptive.adapt_prompt("user-1", "What is machine learning?", domain="AI")
print(f"Adapted prompt: {adapted}")
adaptive.update_profile("user-1", {"feedback": "simple"})
adaptive.update_profile("user-1", {"feedback": "simple"})
adaptive.learn_preference("user-1")
print(f"Learned style: {adaptive.user_profiles['user-1']['style']}")
```text

### 10.5.2 Feedback Loop

```python
class FeedbackLoop:
    def __init__(self, agent: Callable, evaluator: Callable):
        self.agent = agent
        self.evaluate = evaluator
        self.feedback_history: List[Dict] = []
        self.performance_scores: List[float] = []

    def process(self, query: str) -> Dict:
        output = self.agent(query)
        feedback = self.evaluate(query, output)
        score = feedback.get("score", 0)

        self.feedback_history.append({"query": query, "output": output, "feedback": feedback})
        self.performance_scores.append(score)

        return {
            "output": output,
            "feedback": feedback,
            "avg_score": sum(self.performance_scores[-10:]) / max(len(self.performance_scores[-10:]), 1),
        }

    def adaptation_needed(self, threshold: float = 0.7) -> bool:
        if not self.performance_scores:
            return False
        recent = self.performance_scores[-5:]
        return sum(recent) / len(recent) < threshold


def simple_agent(q: str) -> str:
    return f"Answer to: {q}"

def simple_evaluator(q: str, a: str) -> Dict:
    return {"score": 0.85, "relevant": True, "concise": len(a.split()) < 20}


loop = FeedbackLoop(simple_agent, simple_evaluator)
result = loop.process("What is an agent?")
print(f"Feedback loop: avg_score={result['avg_score']}, adapt={loop.adaptation_needed()}")
```text

## 10.6 Optimization Patterns

### 10.6.1 Caching

```python
import hashlib
import json
from datetime import datetime, timedelta


class AgentCache:
    def __init__(self, ttl_seconds: int = 3600):
        self.store: Dict[str, Dict] = {}
        self.ttl = ttl_seconds

    def _make_key(self, query: str, config: Dict = None) -> str:
        data = json.dumps({"query": query, "config": config}, sort_keys=True)
        return hashlib.sha256(data.encode()).hexdigest()

    def get(self, query: str, config: Dict = None) -> Optional[Any]:
        key = self._make_key(query, config)
        entry = self.store.get(key)

        if not entry:
            return None

        if datetime.now() > entry["expires_at"]:
            del self.store[key]
            return None

        return entry["result"]

    def set(self, query: str, result: Any, config: Dict = None):
        key = self._make_key(query, config)
        self.store[key] = {
            "result": result,
            "expires_at": datetime.now() + timedelta(seconds=self.ttl),
        }

    def invalidate(self, query: str):
        key = self._make_key(query)
        self.store.pop(key, None)

    def stats(self) -> Dict:
        now = datetime.now()
        valid = sum(1 for e in self.store.values() if e["expires_at"] > now)
        return {"total_entries": len(self.store), "valid_entries": valid}


cache = AgentCache(ttl_seconds=300)
cache.set("What is RAG?", "RAG stands for Retrieval-Augmented Generation")
cached = cache.get("What is RAG?")
print(f"Cached result: {cached}")
print(f"Cache stats: {cache.stats()}")
```text

### 10.6.2 Batching

```python
class RequestBatcher:
    def __init__(self, process_batch: Callable, batch_size: int = 10, flush_interval: float = 0.5):
        self.process = process_batch
        self.batch_size = batch_size
        self.flush_interval = flush_interval
        self.queue: List[Dict] = []
        self.results: Dict[str, Any] = {}

    def add(self, request_id: str, request: Dict):
        self.queue.append({"id": request_id, "request": request})
        if len(self.queue) >= self.batch_size:
            self.flush()

    def flush(self):
        if not self.queue:
            return

        batch = self.queue[:]
        self.queue = []

        batch_results = self.process([item["request"] for item in batch])
        for item, result in zip(batch, batch_results):
            self.results[item["id"]] = result

    def get_result(self, request_id: str, timeout: float = 5.0) -> Optional[Any]:
        import time as ttime
        start = ttime.time()
        while ttime.time() - start < timeout:
            if request_id in self.results:
                return self.results.pop(request_id)
            ttime.sleep(0.05)
        return None


def batch_llm(requests: List[Dict]) -> List[str]:
    return [f"Processed: {r['query']}" for r in requests]


batcher = RequestBatcher(batch_llm, batch_size=3)
batcher.add("req-1", {"query": "Q1"})
batcher.add("req-2", {"query": "Q2"})
batcher.add("req-3", {"query": "Q3"})
import time as ttime
ttime.sleep(0.1)
print(f"Batch results: {batcher.results}")
```text

### 10.6.3 Streaming

```python
class StreamingAgent:
    def __init__(self, generator: Callable):
        self.generator = generator

    def stream(self, prompt: str, chunk_size: int = 10):
        full_output = self.generator(prompt)
        for i in range(0, len(full_output), chunk_size):
            chunk = full_output[i : i + chunk_size]
            yield chunk

    def process_stream(self, prompt: str) -> str:
        collected = []
        for chunk in self.stream(prompt):
            collected.append(chunk)
        return "".join(collected)


def mock_generator(prompt: str) -> str:
    return f"Generated output for: {prompt} with more content here."


streaming = StreamingAgent(mock_generator)
full = streaming.process_stream("Explain agents")
print(f"Streamed output: {full}")
```text

## Summary

Advanced agent patterns enhance system capabilities beyond basic orchestration. Plan-and-execute decomposes tasks into sub-tasks with dependency management and dynamic replanning. Reflection enables self-critique and.
iterative improvement through structured evaluation. Tool composition provides routing, chaining, and parallel execution. Self-healing mechanisms handle errors gracefully through recovery strategies and.
alternative approaches. Context adaptation and feedback loops enable continuous improvement based on user preferences and performance metrics. Optimization through caching (with TTL),.
request batching, and streaming reduces latency and costs.

## Practical Takeaways

| Takeaway | Description |
|----------|-------------|
| Plan-and-execute for complex tasks | Break large problems into manageable sub-tasks |
| Reflection improves quality | Self-critique and iterative refinement enhance outputs |
| Route tools dynamically | Match queries to the best tool based on intent |
| Implement self-healing | Graceful error recovery with alternative strategies |
| Adapt to user context | Personalize prompts based on user history and feedback |
| Cache aggressively | Reduce costs and latency with intelligent caching |

## Interview Q&A

<details class="tp-qa-card" data-qid="ag10-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: What is the plan-and-execute agent pattern?
  </summary>
  <div class="tp-qa-answer">
<p>The plan-and-execute pattern separates an agent's workflow into two phases: planning and execution. In the planning phase, the agent analyzes the user's request and.
creates a structured plan — a sequence of steps with expected outcomes. Each step specifies which tool to use and what input to provide. In the execution phase,.
the agent follows the plan step by step, marking each step as complete or failed. If a step fails, the agent can either retry,.
replan (update the remaining plan based on the current state), or escalate. Benefits: (1) the plan provides a clear roadmap visible to both the agent and.
the user; (2) partial progress is preserved — if interrupted, the agent resumes from the last incomplete step; (3) the plan can be reviewed and.
modified by a human before execution. Implementation uses a planning node that generates a plan object (a list of steps), an execution loop that iterates through steps,.
and a replanning mechanism that updates the plan when execution deviates from expectations.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ag10-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: How do you implement a reflection-based agent?
  </summary>
  <div class="tp-qa-answer">
<p>A reflection-based agent evaluates its own outputs and corrects mistakes before presenting the final answer. The pattern: (1) the agent generates an initial response;.
(2) a reflection step analyzes the response for quality issues (inaccuracies, incomplete reasoning, missing citations, policy violations); (3) if issues are found,.
the agent generates improvements based on the reflection feedback; (4) steps 2-3 repeat until quality thresholds are met or max iterations reached. Implementation uses a <code>ReflectionNode</code> that takes the current output and.
generates a structured critique with specific issues and suggestions. The critique is fed back to the generation node alongside the original query. The reflection can be done by the same LLM (self-reflection) or.
a separate evaluator LLM to reduce bias. This pattern significantly improves output quality but adds latency and cost. It's most useful for.
high-stakes outputs (legal documents, medical advice, code generation) where correctness is critical.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ag10-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: What is tool composition and how do you implement it?
  </summary>
  <div class="tp-qa-answer">
<p>Tool composition combines multiple tools into a higher-level operation that the agent can use as a single step. A composite tool encapsulates a workflow that calls multiple sub-tools in sequence or.
parallel, handling data flow between them. For example, a "research_and_summarize" composite tool might: (1) search the web for query; (2) fetch each result page;.
(3) extract key information; (4) generate a summary. Implementation: a <code>CompositeTool</code> class that takes a list of sub-tools and a workflow descriptor.
(DAG of steps). Each step specifies the tool to call, which previous step outputs to use as inputs, and how to transform the output. The composite tool exposes a single <code>execute(input) → output</code> interface,.
hiding the complexity from the agent. Benefits: reduces the number of decisions the agent must make (one tool call instead of multiple),.
ensures consistent execution of complex workflows, and enables reusable operation libraries. Composite tools can be nested — a composite can contain other composites.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ag10-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: How do you implement self-healing agents?
  </summary>
  <div class="tp-qa-answer">
<p>Self-healing agents detect failures and automatically recover without human intervention. Implementation layers: (1) Error detection — monitor tool execution results, LLM output quality,.
and state consistency for anomalies (failed tool calls, unexpected outputs, missing required data); (2) Failure classification — classify errors by type: transient (retry),.
environmental (switch service), logical (replan), permission (escalate); (3) Recovery strategies — for transient errors, retry with backoff; for environmental, use alternative tools;.
for logical, update the plan; for permission, escalate to human; (4) Health monitoring — track error rates per component; if a component has high error.
rates, automatically route around it (circuit breaker); (5) Learning — record successful recovery strategies and apply them to similar future failures. Implementation uses a <code>SelfHealingExecutor</code> that wraps tool execution with error.
detection, classification, and recovery logic. The executor maintains a registry of recovery strategies by error type and a history of which strategies worked best for.
each error context.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ag10-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: How do you implement response caching for agents?
  </summary>
  <div class="tp-qa-answer">
<p>Response caching stores LLM responses for reuse when the same or similar queries are received, reducing cost and latency. Implementation: (1) exact-match cache — keyed by (system prompt hash + user message hash),.
returns cached response if identical request was made before; (2) semantic cache — embeds the query using a text embedding model,.
stores in a vector database along with the response; on new query, embed it and search for semantically similar cached queries above a similarity threshold (e.g.,.
cosine similarity > 0.95); (3) cache invalidation — set TTL on cached responses (e.g., 1 hour for factual queries, 24 hours for.
slower-changing information); (4) cache-aside pattern — check cache first, if miss then call LLM and store result. Semantic caching is more useful for.
agent systems because users rarely ask the exact same question twice. A cache manager handles: cache hit rate tracking, storage backend (Redis for.
exact, vector DB for semantic), and cache warming (pre-populate with common queries). Cache hit rates of 20-40% are typical in production systems.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ag10-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: How do you implement adaptive agents?
  </summary>
  <div class="tp-qa-answer">
<p>Adaptive agents modify their behavior based on context, feedback, and performance history without code changes. Adaptation mechanisms: (1) Prompt adaptation — dynamically modify system prompts based on user preferences,.
domain, or task complexity (add domain-specific instructions for technical users, simplify for beginners); (2) Tool selection — adjust which tools are available based on the user's permission level and.
current task (enable write tools for authorized users only); (3) Model selection — use cheaper models for simple tasks and powerful models for.
complex ones, learned from historical performance; (4) Threshold adaptation — adjust confidence thresholds for automatic vs. human-approved actions based on the agent's track record with similar tasks;.
(5) Parameter optimization — tune temperature, max tokens, and penalty settings based on the task type (creative tasks use higher temperature). Implementation uses a <code>BehaviorConfig</code> that can be updated at runtime,.
with adaptation triggers defined as rules or learned from feedback. The agent checks the current config before each action, enabling behavior.
changes without restarting.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ag10-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: How do you implement structured output extraction?
  </summary>
  <div class="tp-qa-answer">
<p>Structured output extraction forces the LLM to produce output in a specific format (JSON, XML, YAML) that your code can parse and.
validate. Implementation: (1) define the output schema — fields, types, constraints (e.g., <code>{"name": "string", "age": "integer", "items": ["string"]}</code>); (2) include the schema in the system prompt with format instructions and.
examples; (3) use the LLM's response_format parameter (supported by OpenAI and Gemini) to enforce JSON output; (4) parse the LLM response and.
validate against the schema — check required fields exist, types match, constraints are satisfied; (5) if validation fails, return the error.
to the LLM with the original schema for correction. For complex schemas, provide default values for optional fields and the exact field names the LLM should use. Structured output is essential for.
agent-tool interaction (tool call arguments must be parseable JSON), multi-step workflows (state updates must follow the schema), and data processing tasks. A <code>StructuredOutputExtractor</code> class handles schema generation,.
parsing, validation, and retry logic.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ag10-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: What is dynamic workflow routing?
  </summary>
  <div class="tp-qa-answer">
<p>Dynamic workflow routing allows an agent to choose different execution paths based on runtime conditions, rather than following a fixed flow. The router examines the current state and.
decides which node to execute next. Examples: (1) complexity-based routing — for simple queries, use a fast single-LLM path; for complex queries,.
route through a multi-step research path; (2) user preference routing — if the user prefers detailed responses, route through an elaboration path;.
if concise, route through a summary path; (3) capability-based routing — route to different specialist sub-agents based on the detected domain (tech support vs billing);.
(4) fallback routing — if the primary path fails, route to the recovery path. Implementation uses conditional edges in LangGraph where the router function has access to the full state and.
can make decisions based on any state field. Dynamic routing makes agent systems more flexible and efficient — simple queries get fast answers while complex queries get thorough treatment. The routing logic can be rules-based (simple and.
fast) or LLM-based (flexible but slower).</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ag10-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: How do you implement the ReAct pattern with streaming?
  </summary>
  <div class="tp-qa-answer">
<p>The ReAct pattern (Reasoning + Acting) with streaming provides real-time visibility into the agent's chain-of-thought and actions. The agent alternates between: (1) reasoning — the LLM thinks about the next step,.
producing text tokens that are streamed to the client; (2) acting — the agent calls a tool with specific arguments, the tool name and.
arguments are streamed as events; (3) observing — the tool result is streamed back and fed to the LLM for the next reasoning step. Each "thought → action → observation" cycle is a complete ReAct step. Implementation: the LLM is.
configured to output its reasoning process before tool calls (via system prompt instructions). Each token from the LLM is sent as an SSE event. When the LLM produces a tool call,.
a <code>tool_call</code> event is sent with the tool name and parameters. After the tool executes, a <code>tool_result</code> event is sent. The cycle repeats until the LLM produces a final answer (no tool call). Streaming the full ReAct trace builds user trust by showing the agent's work and.
allows early user intervention if the agent goes off track.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ag10-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: How do you implement batching for agent operations?
  </summary>
  <div class="tp-qa-answer">
<p>Batching for agent operations groups multiple independent operations into a single call, reducing overhead and cost. Types of batching: (1) LLM call batching — some providers support sending multiple prompts in a single API call (OpenAI batch API,.
which processes requests asynchronously at 50% discount); (2) Embedding batching — embed multiple texts in one API call instead of individual calls;.
(3) Tool execution batching — if the agent needs to search for multiple items, batch them into a single bulk search call instead of N individual calls;.
(4) Memory batching — retrieve memories for multiple query aspects in one batch. Implementation: the agent collects pending operations in a batch buffer,.
then flushes the buffer when it reaches a size threshold or timeout. A <code>BatchManager</code> handles: operation collection, batch formation (group compatible operations),.
batch dispatch, and result distribution back to the callers. Batching introduces latency (waiting for the buffer to fill) but improves throughput and.
reduces cost. The batch size and timeout are configurable — trade off between latency and efficiency. Background batch processing is ideal for.
non-urgent operations like memory consolidation.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

<details data-qid="agent-s10-quiz1">
<summary><strong>1.</strong> What is the primary benefit of plan-and-execute pattern?</summary>
A. Faster execution
B. Decomposing complex tasks into manageable sub-tasks
C. Fewer tokens
D. Simpler code
Answer: B
</details>

<details data-qid="agent-s10-quiz2">
<summary><strong>2.</strong> How does reflection improve agent outputs?</summary>
A. By running the agent multiple times
B. By self-critiquing and iteratively refining outputs
C. By using more tools
D. By caching results
Answer: B
</details>

<details data-qid="agent-s10-quiz3">
<summary><strong>3.</strong> What is the role of a tool router?</summary>
A. To run all tools in parallel
B. To select the most appropriate tool based on query intent
C. To cache tool outputs
D. To deploy tools
Answer: B
</details>

<details data-qid="agent-s10-quiz4">
<summary><strong>4.</strong> How does request batching reduce costs?</summary>
A. By caching results
B. By combining multiple requests into a single LLM call
C. By using cheaper models
D. By reducing output length
Answer: B
</details>

<details data-qid="agent-s10-quiz5">
<summary><strong>5.</strong> What should an agent do when a tool fails repeatedly?</summary>
A. Crash and restart
B. Try an alternative tool or approach
C. Return an empty response
D. Log the error and stop
Answer: B
</details>

## Exercises


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition1. Implement a plan-and-execute agent that decomposes "Research and write a report on renewable energy trends" into sub-tasks with dependencies and executes them.

2. Build a reflection loop for code generation. The agent generates code, critiques it for bugs/style/efficiency, and refines it for up to 3 iterations.

3. Create a dynamic tool router that processes user queries by routing to: web search (for lookups), calculator (for math), summarizer (for long texts), and a default fallback.

4. Implement a self-healing agent that attempts recovery strategies in order: retry → backoff → alternative tool → graceful degradation. Test with a failing API call.

5. Build a caching layer for an agent with TTL-based expiration, cache invalidation, and stats reporting. Demonstrate a saved token cos

## Revision Notes

- - Core principle: Understand the fundamental concepts thoroughly
- - Implementation pattern: Practice with real code examples
- - Complexity: Know the time and space complexity
- - Application: Know when to use this in production systems
- - Interview: Frequently asked in technical interviews
- - Edge cases: Consider common failure scenarios
- - Related concepts: Connect to broader system design

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of 13-ai-agents-langgraph. When would you choose one approach over another?
2. Design a system that efficiently handles 13-ai-agents-langgraph at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 13-ai-agents-langgraph. What was your approach and what was the result?
2. How would you explain 13-ai-agents-langgraph to a non-technical stakeholder?

#### Microsoft Style
1. How does 13-ai-agents-langgraph integrate with enterprise systems and cloud architectures?
2. What are the security implications of 13-ai-agents-langgraph?

#### NVIDIA Style
1. How would you optimize 13-ai-agents-langgraph for GPU-accelerated computing?
2. What parallel processing patterns apply to 13-ai-agents-langgraph?

#### AI Startup Style
1. How would you implement 13-ai-agents-langgraph in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 13-ai-agents-langgraph?

### Resume Tips
- **Technical Skills**: List 13-ai-agents-langgraph under relevant technical skills
- **Project Description**: "Implemented 13-ai-agents-langgraph to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 13-ai-agents-langgraph in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 13-ai-agents-langgraph
- [ ] Practice 3-5 problems related to 13-ai-agents-langgraph
- [ ] Prepare 2 real-world examples of using 13-ai-agents-langgraph
- [ ] Know the time/space complexity of common 13-ai-agents-langgraph operations
- [ ] Have questions ready about how the company uses 13-ai-agents-langgrapht report.


## Difficulty Level

**Level**: Advanced
**Estimated Study Time**: 60-90 minutes
**Prerequisites**: Complete understanding of previous modules recommended

## Tips & Tricks

**Tip**: Start with the basics — understand the fundamental concepts before moving to advanced topics.

**Tip**: Practice actively — don't just read, implement the code examples yourself.

**Tip**: Connect to prior knowledge — relate new concepts to what you learned in previous modules.

**Pro Tip**: Focus on understanding, not memorizing — understand why things work, not just how.

**Pro Tip**: Review regularly — revisit key concepts after a few days to reinforce learning.

## Memory Tricks

- **Acronym Method**: Create acronyms for lists of concepts
- **Visualization**: Draw diagrams to visualize abstract concepts
- **Teach someone else**: Explaining concepts to others reinforces your understanding
- **Connect to real-world**: Relate technical concepts to everyday experiences
- **Chunking**: Break complex topics into smaller, manageable pieces

## Further Reading

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers and blog posts from leading AI labs

## Related Topics

- How this connects to AI Agents with LangGraph fundamentals
- Prerequisites for advanced topics in this module
- Real-world applications in AI engineering systems
- Interview questions that test deep understanding

## FAQs

**Q: How long does it take to master advanced agent patterns?
**A**: With consistent practice, 2-4 weeks for basic proficiency, 2-3 months for advanced mastery.

**Q: Do I need to memorize all the details?
**A**: Focus on understanding the core principles. Details can be looked up, but understanding cannot.

**Q: What's the best way to practice?
**A**: Implement the code examples, then modify them to solve different problems. Build small projects.

**Q: How often should I review this material?
**A**: Review after 1 day, 3 days, 1 week, and 1 month for long-term retention.

## Important Notes

> **Note**: Understanding the fundamentals is more important than memorizing syntax.

> **Note**: Don't skip the exercises — they reinforce critical concepts.

> **Note**: This topic frequently appears in technical interviews at top companies.

> **Note**: In real systems, these concepts are used daily by AI engineers.

## Historical Context

The Evolution of this technology reflects decades of research and practical engineering experience.

Understanding the evolution of advanced agent patterns helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

## Coding Standards

- Follow consistent naming conventions (camelCase for variables, PascalCase for types)
- Add clear comments explaining complex logic
- Keep functions focused on a single responsibility
- Write self-documenting code with meaningful names
- Handle errors gracefully and provide informative messages

**Best Practice**: Follow language-specific style guides (PEP 8 for Python, ESLint for TypeScript).

## Security Considerations

- **Input Validation**: Always validate and sanitize inputs
- **Error Handling**: Don't expose internal details in error messages
- **Resource Limits**: Set appropriate limits to prevent denial of service
- **Authentication**: Ensure proper authentication and authorization
- **Data Protection**: Handle sensitive data according to security best practices

## ML Intuition

For AI engineering, understanding advanced agent patterns at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of advanced agent patterns like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply advanced agent patterns concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of advanced agent patterns?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply advanced agent patterns in real systems?
**Answer**: When building production AI systems that require reliability, scalability, and maintainability.

**Card 3**: What are the common pitfalls to avoid?
**Answer**: Over-engineering, ignoring edge cases, and not considering production requirements.

## Study Plan

**Day 1**: Read theory and review examples (24 minutes)
**Day 2**: Complete exercises and practice (24 minutes)
**Day 3**: Review flashcards and take quiz (12 minutes)

## Research References

- Academic papers and conference proceedings (NeurIPS, ICML, ICLR)
- Industry whitepapers from leading AI companies
- Technical blogs from Google, Meta, OpenAI, Anthropic
- Open-source implementations and documentation

## Fine-Tuning Notes

When applying this topic to production, consider:
- Fine-tuning with LoRA or Adapters for domain adaptation
- Adapting general principles to your specific use cases
- Performance optimization for target hardware
- Cost considerations for deployment


## Open-Source Tools

- **LangChain**: Framework for building LLM-powered applications
- **LlamaIndex**: Data framework for connecting LLMs with external data
- **Hugging Face Transformers**: State-of-the-art ML models and datasets
- **Weights & Biases**: Experiment tracking and model evaluation
- **MLflow**: Open-source platform for ML lifecycle management
- **Prometheus + Grafana**: Monitoring and observability stack

## Debugging Guide

**Common Issues**:
- Check input validation and data types
- Verify API keys and authentication
- Monitor resource usage (CPU, memory, GPU)
- Review error logs for stack traces

**Debugging Steps**:
1. Reproduce the issue with minimal input
2. Add logging at key points
3. Check external dependencies
4. Verify configuration settings
5. Test with known-good inputs

## Mock Interview Section

**Quick Fire Questions**:
1. What is the core concept of AI Agents with LangGraph?
2. When would you use this in production?
3. What are the trade-offs?
4. How does this scale?
5. What are common pitfalls?

**Follow-up Questions**:
- How would you optimize this for 10x scale?
- What monitoring would you add?
- How would you test this in production?

## Optimized Implementation

For production systems, consider:
- **Caching**: Cache frequent computations and API responses
- **Batching**: Process multiple items together for efficiency
- **Async/Await**: Use non-blocking I/O for concurrent operations
- **Connection Pooling**: Reuse database and API connections
- **Lazy Loading**: Load resources only when needed

## References

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers from NeurIPS, ICML, ICLR
- Industry blogs from Google, Meta, OpenAI, Anthropic

## Prompt Engineering Notes

- **Be Specific**: Clear, detailed prompts get better results
- **Provide Examples**: Few-shot learning improves consistency
- **Use Structured Output**: JSON, tables, or markdown for parsing
- **Chain of Thought**: Break complex reasoning into steps
- **Temperature Control**: Adjust creativity vs consistency

## Evaluation Metrics

**Model Evaluation**:
- Accuracy, Precision, Recall, F1-Score
- BLEU, ROUGE for text generation
- Latency, Throughput, Cost per inference

**System Evaluation**:
- End-to-end latency (p50, p95, p99)
- Error rate and availability
- Resource utilization (CPU, memory, GPU)

## Real-World Examples

**Industry Applications**:
- Google: Search ranking, translation, autocomplete
- Amazon: Product recommendations, Alexa, fraud detection
- Netflix: Content recommendations, personalization
- Tesla: Autonomous driving, computer vision
- OpenAI: ChatGPT, DALL-E, Codex

## Next Topic

After mastering AI Agents with LangGraph, continue to the next module in the curriculum to build upon these foundations and deepen your AI engineering expertise.

## Limitations

Every approach has trade-offs. Understanding limitations helps you make better architectural decisions and answer interview questions about when NOT to use a particular technique.
