# Chapter 11 — AI Testing, Evaluation & Quality

**Duration:** 1.5 weeks, ~18 hours
**Goal:** Build a systematic testing and evaluation framework for AI agents and RAG pipelines. Move from "it works on my machine" to quantitative quality gates.

---


<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/ai-agent-engineer/11-ai-testing-evaluation/handwritten-notes.svg" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/ai-agent-engineer/11-ai-testing-evaluation/handwritten-notes.svg" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/ai-agent-engineer/11-ai-testing-evaluation/sticky-notes.svg" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/ai-agent-engineer/11-ai-testing-evaluation/sticky-notes.svg" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/ai-agent-engineer/11-ai-testing-evaluation/visual-explanation.svg" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/ai-agent-engineer/11-ai-testing-evaluation/visual-explanation.svg" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->

## Topic Table

| # | Subtopic | Hours | Done checkpoint |
|---|----------|-------|-----------------|
| 1 | Unit testing for agent logic | 1.5 | Write unit tests for tool selection, state transitions, edge cases |
| 2 | Integration testing for RAG pipelines | 2 | Write integration tests that verify chunking, retrieval, and generation end-to-end |
| 3 | LLM-as-judge evaluation | 2 | Build a judge agent that scores outputs on correctness, faithfulness, relevance |
| 4 | Trajectory evaluation for agents | 2 | Evaluate an agent's reasoning path, not just its final answer |
| 5 | Hallucination detection & measurement | 2 | Implement factual consistency checking with a dedicated hallucination detector |
| 6 | Regression testing for prompts | 1.5 | Build a prompt regression suite that catches degradations before deployment |
| 7 | Evaluation datasets | 1.5 | Create and curate ground-truth datasets for your RAG system |
| 8 | A/B testing for model selection | 2 | Design an A/B test comparing 2 models on the same task |
| 9 | Automated eval in CI/CD | 1.5 | Integrate evaluation into GitHub Actions so every PR gets scored |
| 10 | Quality metrics & dashboards | 2 | Track faithfulness, answer relevance, context precision over time |

---

## 11.1 Unit Testing for Agent Logic

### Testing Tool Selection


```python
import pytest
from unittest.mock import AsyncMock, patch
from pydantic import BaseModel

# Agent under test
class SimpleAgent:
    def __init__(self, tools: dict):
        self.tools = tools

    def select_tool(self, user_intent: str) -> str | None:
        """Select the best tool based on user intent."""
        intent_lower = user_intent.lower()

        if "search" in intent_lower or "find" in intent_lower or "look up" in intent_lower:
            return "search_web"
        elif "calculate" in intent_lower or "compute" in intent_lower:
            return "calculator"
        elif "summarize" in intent_lower or "summarise" in intent_lower:
            return "summarizer"
        elif "translate" in intent_lower:
            return "translator"
        elif "email" in intent_lower or "send" in intent_lower:
            return "send_email"
        return None

# Unit tests
class TestAgentToolSelection:
    def setup_method(self):
        self.agent = SimpleAgent(tools={})

    def test_select_search_tool(self):
        assert self.agent.select_tool("search for python tutorials") == "search_web"
        assert self.agent.select_tool("find the latest research papers") == "search_web"
        assert self.agent.select_tool("look up company address") == "search_web"

    def test_select_calculator_tool(self):
        assert self.agent.select_tool("calculate 15% tip on 45 dollars") == "calculator"
        assert self.agent.select_tool("compute the average of these numbers") == "calculator"

    def test_select_summarizer_tool(self):
        assert self.agent.select_tool("summarize this article") == "summarizer"

    def test_select_translator_tool(self):
        assert self.agent.select_tool("translate hello to spanish") == "translator"

    def test_select_email_tool(self):
        assert self.agent.select_tool("send email to john") == "send_email"
        assert self.agent.select_tool("compose an email about the meeting") == "send_email"

    def test_no_tool_match(self):
        assert self.agent.select_tool("hello, how are you?") is None

    def test_edge_cases(self):
        assert self.agent.select_tool("") is None
        assert self.agent.select_tool("   ") is None
        assert self.agent.select_tool("SEND EMAIL NOW") == "send_email"
```

### Testing State Transitions (LangGraph)


```python
import pytest
from typing import TypedDict, Annotated, Literal
from langgraph.graph import StateGraph, END

# State definition
class AgentState(TypedDict):
    input: str
    intent: str | None
    tool_result: str | None
    response: str | None
    errors: list[str]

# Graph nodes
def classify_intent(state: AgentState) -> dict:
    """Determine user intent."""
    text = state["input"].lower()
    if "search" in text or "find" in text:
        return {"intent": "search"}
    elif "calculate" in text:
        return {"intent": "calculate"}
    elif "summarize" in text:
        return {"intent": "summarize"}
    return {"intent": "unknown"}

def execute_tool(state: AgentState) -> dict:
    """Execute the selected tool."""
    if state["intent"] == "search":
        return {"tool_result": f"Search results for: {state['input']}"}
    elif state["intent"] == "calculate":
        return {"tool_result": "42"}
    return {"tool_result": "I don't know how to do that yet."}

def generate_response(state: AgentState) -> dict:
    """Generate final response."""
    return {"response": f"Based on my analysis: {state.get('tool_result', 'No result')}"}

def error_handler(state: AgentState) -> dict:
    """Handle errors gracefully."""
    return {"response": "I encountered an error processing your request.", "errors": ["Unknown intent"]}

# Conditional edge
def route_after_intent(state: AgentState) -> Literal["execute_tool", "error_handler", END]:
    if state["intent"] == "unknown":
        return "error_handler"
    return "execute_tool"

# Build graph
def build_agent_graph() -> StateGraph:
    builder = StateGraph(AgentState)
    builder.add_node("classify_intent", classify_intent)
    builder.add_node("execute_tool", execute_tool)
    builder.add_node("generate_response", generate_response)
    builder.add_node("error_handler", error_handler)
    builder.set_entry_point("classify_intent")
    builder.add_conditional_edges("classify_intent", route_after_intent)
    builder.add_edge("execute_tool", "generate_response")
    builder.add_edge("generate_response", END)
    builder.add_edge("error_handler", END)
    return builder.compile()

# Tests
class TestLangGraphAgent:
    def setup_method(self):
        self.agent = build_agent_graph()

    def test_search_intent(self):
        result = self.agent.invoke({"input": "search for quantum computing"})
        assert result["intent"] == "search"
        assert "Search results" in result["tool_result"]
        assert "Based on my analysis" in result["response"]

    def test_calculate_intent(self):
        result = self.agent.invoke({"input": "calculate 2+2"})
        assert result["intent"] == "calculate"
        assert "42" in result["tool_result"]

    def test_unknown_intent(self):
        result = self.agent.invoke({"input": "hello there"})
        assert "encountered an error" in result["response"]
        assert "Unknown intent" in result["errors"]

    def test_empty_input(self):
        result = self.agent.invoke({"input": ""})
        assert result["intent"] == "unknown"
```

---

## 11.2 Integration Testing for RAG Pipelines

```python
import pytest
from typing import Generator

class RAGPipeline:
    """RAG pipeline under test."""

    def chunk_document(self, text: str, chunk_size: int = 500) -> list[str]:
        chunks = []
        start = 0
        while start < len(text):
            end = min(start + chunk_size, len(text))
            chunks.append(text[start:end])
            start = end
        return chunks

    def retrieve(self, query: str, top_k: int = 3) -> list[str]:
        q_vec = client.embeddings.create(input=query, model="text-embedding-3-small").data[0].embedding
        results = chroma_collection.query(query_embeddings=[q_vec], n_results=top_k)
        return results["documents"][0]

    def generate(self, query: str, context: str) -> str:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "Answer using only the context. If unsure, say so."},
                {"role": "user", "content": f"Context:\n{context}\n\nQuery: {query}"}
            ]
        )
        return response.choices[0].message.content

# Integration tests
@pytest.mark.integration
class TestRAGIntegration:
    """Tests that hit real API endpoints and vector DB."""

    def setup_method(self):
        self.pipeline = RAGPipeline()
        # Seed test data
        self.test_docs = [
            "Lease terms in Dubai Marina typically range from 12 to 36 months.",
            "Annual rent is paid in 1 to 6 cheques depending on the landlord.",
            "Security deposit is usually 5% of annual rent for furnished units.",
            "Agency fee is 5% of annual rent, split equally between tenant and landlord.",
            "Ejari registration is mandatory for all tenancy contracts in Dubai.",
        ]
        for doc in self.test_docs:
            embedding = client.embeddings.create(input=doc, model="text-embedding-3-small").data[0].embedding
            chroma_collection.add(documents=[doc], embeddings=[embedding])

    def test_chunking_basic(self):
        text = "A" * 1200
        chunks = self.pipeline.chunk_document(text, chunk_size=500)
        assert len(chunks) == 3
        assert all(len(c) <= 500 for c in chunks)

    def test_chunking_exact_boundary(self):
        text = "Hello. " * 200
        chunks = self.pipeline.chunk_document(text, chunk_size=500)
        assert len(chunks) >= 1
        assert sum(len(c) for c in chunks) == len(text)

    def test_retrieval_relevant_results(self):
        results = self.pipeline.retrieve("How long are lease terms in Dubai?")
        assert len(results) == 3
        assert any("12 to 36 months" in r for r in results)

    def test_retrieval_no_query_match(self):
        results = self.pipeline.retrieve("quantum physics theory")
        assert len(results) == 3

    def test_generation_with_context(self):
        context = "Dubai lease terms are typically 12 months."
        response = self.pipeline.generate("What is the standard lease term?", context)
        assert "12" in response
        assert len(response) > 10

    def test_generation_without_context(self):
        response = self.pipeline.generate("What is the meaning of life?", "No relevant context found.")
        assert "I cannot" in response.lower() or "unsure" in response.lower() or "no information" in response.lower()

    def test_end_to_end(self):
        response = self.pipeline.generate("What is the agency fee in Dubai?", 
            "Agency fee is 5% of annual rent. Agency fee is 5% of annual rent.")
        assert "5%" in response
```

---

## 11.3 LLM-as-Judge Evaluation

```python
from pydantic import BaseModel, Field
from enum import Enum

class ScoreDimension(str, Enum):
    CORRECTNESS = "correctness"
    FAITHFULNESS = "faithfulness"
    RELEVANCE = "relevance"
    COMPLETENESS = "completeness"
    CONCISENESS = "conciseness"

class JudgeScore(BaseModel):
    dimension: ScoreDimension
    score: int = Field(ge=1, le=5, description="Score 1-5")
    reasoning: str
    improvement_suggestion: str | None = None

class JudgeVerdict(BaseModel):
    scores: list[JudgeScore]
    overall_score: float = Field(ge=1, le=5)
    verdict: Literal["pass", "conditional_pass", "fail"]
    critical_issues: list[str] = Field(default_factory=list)

class LLMJudge:
    """Judge agent that evaluates LLM outputs across multiple dimensions."""

    RUBRICS = {
        ScoreDimension.CORRECTNESS: "Does the output contain factual errors? Score 1 (many errors) to 5 (completely correct).",
        ScoreDimension.FAITHFULNESS: "Does the output only use information from the provided context? Score 1 (hallucinates freely) to 5 (strictly grounded in context).",
        ScoreDimension.RELEVANCE: "Does the output directly address the user's query? Score 1 (completely off-topic) to 5 (perfectly targeted).",
        ScoreDimension.COMPLETENESS: "Does the output cover all aspects of the query? Score 1 (misses major points) to 5 (comprehensive).",
        ScoreDimension.CONCISENESS: "Is the output appropriately concise? Score 1 (verbose/rambling) to 5 (perfect length).",
    }

    def evaluate(
        self,
        query: str,
        output: str,
        context: str | None = None,
        expected: str | None = None,
        dimensions: list[ScoreDimension] | None = None,
    ) -> JudgeVerdict:
        """Evaluate an LLM output against specified dimensions."""
        if dimensions is None:
            dimensions = list(ScoreDimension)

        scores = []
        for dim in dimensions:
            judge_prompt = self._build_judge_prompt(dim, query, output, context, expected)
            completion = client.beta.chat.completions.parse(
                model="gpt-4o-mini",
                messages=[
                    {"role": "system", "content": "You are a strict but fair evaluator of AI outputs. Score precisely and provide specific reasoning."},
                    {"role": "user", "content": judge_prompt}
                ],
                response_format=JudgeScore
            )
            scores.append(completion.choices[0].message.parsed)

        overall = sum(s.score for s in scores) / len(scores)
        critical = [s.reasoning for s in scores if s.score <= 2]

        if overall >= 4.0:
            verdict = "pass"
        elif overall >= 3.0:
            verdict = "conditional_pass"
        else:
            verdict = "fail"

        return JudgeVerdict(
            scores=scores,
            overall_score=round(overall, 2),
            verdict=verdict,
            critical_issues=critical
        )

    def _build_judge_prompt(
        self,
        dimension: ScoreDimension,
        query: str,
        output: str,
        context: str | None,
        expected: str | None,
    ) -> str:
        rubric = self.RUBRICS[dimension]
        parts = [f"Dimension: {dimension.value}", f"Rubric: {rubric}", f"Query: {query}", f"Output: {output}"]
        if context:
            parts.append(f"Context: {context}")
        if expected:
            parts.append(f"Expected output: {expected}")
        return "\n\n".join(parts)

# Usage
judge = LLMJudge()
result = judge.evaluate(
    query="What is the standard lease term in Dubai?",
    output="The standard lease term in Dubai is 12 months, typically paid in 1-4 cheques.",
    context="Lease terms in Dubai typically range from 12 to 36 months. Rent payment can be made in 1 to 6 cheques.",
    expected="12 months, 1-6 cheques"
)
print(f"Verdict: {result.verdict}")
print(f"Overall: {result.overall_score}")
for s in result.scores:
    print(f"  {s.dimension.value}: {s.score}/5 — {s.reasoning}")
```

---

## 11.4 Trajectory Evaluation for Agents

```python
from pydantic import BaseModel

class AgentStep(BaseModel):
    thought: str
    action: str | None
    action_input: dict | None
    observation: str | None
    step_number: int

class AgentTrajectory(BaseModel):
    steps: list[AgentStep]
    final_answer: str
    total_steps: int
    tools_used: list[str]

class TrajectoryEvaluation(BaseModel):
    correctness: dict  # Did the agent arrive at the right answer?
    efficiency: dict   # Did it use too many steps or unnecessary tools?
    tool_usage: dict   # Did it use tools correctly and appropriately?
    reasoning: dict    # Was the reasoning path logical?
    overall: dict

class TrajectoryEvaluator:
    """Evaluate an agent's reasoning trajectory, not just its final answer."""

    def evaluate(self, trajectory: AgentTrajectory, ground_truth: str | None = None) -> TrajectoryEvaluation:
        evaluation = TrajectoryEvaluation(
            correctness={"score": 0, "reasoning": ""},
            efficiency={"score": 0, "reasoning": "", "unnecessary_steps": []},
            tool_usage={"score": 0, "reasoning": "", "misused_tools": []},
            reasoning={"score": 0, "reasoning": "", "logic_gaps": []},
            overall={"score": 0, "recommendation": ""}
        )

        # Evaluate correctness
        if ground_truth:
            eval_resp = client.beta.chat.completions.parse(
                model="gpt-4o-mini",
                messages=[
                    {"role": "system", "content": "Compare the agent's final answer to the ground truth. Score 1-10."},
                    {"role": "user", "content": f"Agent answer: {trajectory.final_answer}\nGround truth: {ground_truth}"}
                ],
                response_format=type("Correctness", (BaseModel,), {"score": int, "reasoning": str})
            )
            evaluation.correctness = eval_resp.choices[0].message.parsed.model_dump()

        # Evaluate efficiency
        unnecessary = []
        for i, step in enumerate(trajectory.steps):
            if step.action and "error" in (step.observation or "").lower():
                unnecessary.append(f"Step {i+1}: {step.action} failed — could have been avoided")
        evaluation.efficiency = {
            "score": max(1, 10 - len(unnecessary) * 2),
            "reasoning": f"{len(trajectory.steps)} total steps, {len(unnecessary)} unnecessary",
            "unnecessary_steps": unnecessary
        }

        # Evaluate tool usage
        tool_counts = {}
        for step in trajectory.steps:
            if step.action:
                tool_counts[step.action] = tool_counts.get(step.action, 0) + 1

        evaluation.tool_usage = {
            "score": 8 if len(trajectory.tools_used) <= 5 else 5,
            "reasoning": f"Used {len(trajectory.tools_used)} different tools: {', '.join(trajectory.tools_used)}",
            "misused_tools": []
        }

        # Overall
        scores = [evaluation.correctness.get("score", 5), evaluation.efficiency["score"],
                  evaluation.tool_usage["score"], evaluation.reasoning["score"]]
        avg = sum(scores) / len(scores)
        evaluation.overall = {
            "score": round(avg, 1),
            "recommendation": "pass" if avg >= 7 else "review" if avg >= 5 else "fail"
        }

        return evaluation
```

---

## 11.5 Hallucination Detection

```python
from pydantic import BaseModel, Field

class ClaimVerification(BaseModel):
    claim: str
    supported: bool
    evidence: str | None
    confidence: float = Field(ge=0, le=1)

class HallucinationReport(BaseModel):
    total_claims: int
    supported_claims: int
    hallucinated_claims: int
    hallucination_rate: float
    details: list[ClaimVerification]

class HallucinationDetector:
    """Detect unsupported claims in LLM output against a given context."""

    def extract_claims(self, text: str) -> list[str]:
        """Split text into atomic claims."""
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "Break the following text into atomic factual claims. Each claim must be a single verifiable fact. Return one claim per line, numbered."},
                {"role": "user", "content": text}
            ],
            max_tokens=500
        )
        lines = response.choices[0].message.content.strip().split("\n")
        claims = []
        for line in lines:
            line = line.strip()
            if line and (line[0].isdigit() or line.startswith("-")):
                claim = line.split(". ", 1)[-1] if ". " in line else line.lstrip("- ")
                claims.append(claim)
        return claims

    def verify_claim(self, claim: str, context: str) -> ClaimVerification:
        """Check if a claim is supported by the context."""
        response = client.beta.chat.completions.parse(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "Determine if the claim is supported by the context. Return supported=true only if the context explicitly contains the information."},
                {"role": "user", "content": f"Claim: {claim}\n\nContext: {context}"}
            ],
            response_format=ClaimVerification
        )
        return response.choices[0].message.parsed

    def analyze(self, output: str, context: str) -> HallucinationReport:
        """Full hallucination analysis of an LLM output."""
        claims = self.extract_claims(output)
        if not claims:
            return HallucinationReport(
                total_claims=0, supported_claims=0, hallucinated_claims=0,
                hallucination_rate=0.0, details=[]
            )

        results = [self.verify_claim(c, context) for c in claims]
        supported = sum(1 for r in results if r.supported)
        hallucinated = len(results) - supported

        return HallucinationReport(
            total_claims=len(results),
            supported_claims=supported,
            hallucinated_claims=hallucinated,
            hallucination_rate=round(hallucinated / len(results), 3),
            details=results
        )

# Usage
detector = HallucinationDetector()
report = detector.analyze(
    output="The standard lease term in Dubai is 12 months. Most tenants pay in 4 cheques. The agency fee is 5% of annual rent. Ejari registration costs 500 AED.",
    context="Lease terms in Dubai typically range from 12 to 36 months. Agency fee is 5% of annual rent. Ejari registration is mandatory."
)
print(f"Hallucination rate: {report.hallucination_rate:.1%}")
print(f"Hallucinated claims: {report.hallucinated_claims}/{report.total_claims}")
for detail in report.details:
    if not detail.supported:
        print(f"  UNSUPPORTED: {detail.claim[:60]}...")
```

---

## 11.6 Evaluation Datasets

### Creating Ground-Truth Data


```python
from dataclasses import dataclass, field
import json
import random

@dataclass
class EvalExample:
    query: str
    expected_response: str
    context: str
    difficulty: str  # easy, medium, hard
    category: str    # factual, reasoning, multi-hop, comparative
    id: str = ""

class EvalDataset:
    """Curated evaluation dataset for RAG systems."""

    def __init__(self, name: str):
        self.name = name
        self.examples: list[EvalExample] = []

    def add(self, example: EvalExample):
        example.id = f"{self.name}_{len(self.examples)}"
        self.examples.append(example)

    def filter(self, difficulty: str | None = None, category: str | None = None, n: int | None = None) -> list[EvalExample]:
        results = self.examples
        if difficulty:
            results = [e for e in results if e.difficulty == difficulty]
        if category:
            results = [e for e in results if e.category == category]
        if n:
            results = random.sample(results, min(n, len(results)))
        return results

    def save(self, path: str):
        data = [{"id": e.id, "query": e.query, "expected_response": e.expected_response,
                 "context": e.context, "difficulty": e.difficulty, "category": e.category}
                for e in self.examples]
        with open(path, "w") as f:
            json.dump({"name": self.name, "examples": data}, f, indent=2)

    @classmethod
    def load(cls, path: str) -> "EvalDataset":
        with open(path) as f:
            data = json.load(f)
        ds = cls(data["name"])
        for ex in data["examples"]:
            ds.add(EvalExample(**ex))
        return ds

# Build a sample dataset
dataset = EvalDataset("dubai_rental_rag")

dataset.add(EvalExample(
    query="What is the standard lease term in Dubai?",
    expected_response="12 months",
    context="Lease terms in Dubai typically range from 12 to 36 months.",
    difficulty="easy", category="factual"
))
dataset.add(EvalExample(
    query="Compare payment options between furnished and unfurnished units.",
    expected_response="Furnished units typically require 1-4 cheques, unfurnished 1-6 cheques. Furnished units have higher rent but lower upfront cost.",
    context="Furnished units: rent is 10-20% higher. Payment: 1-4 cheques for furnished, 1-6 cheques for unfurnished.",
    difficulty="hard", category="comparative"
))
dataset.add(EvalExample(
    query="Total cost breakdown for renting a 2BR apartment in Dubai Marina.",
    expected_response="Total estimated upfront: annual rent + 5% security deposit + 5% agency fee + Ejari fee + DEWA deposit.",
    context="Security deposit: 5% of annual rent. Agency fee: 5%. Ejari: 220 AED. DEWA deposit: 2000 AED.",
    difficulty="medium", category="reasoning"
))
```

---

## 11.7 Automated Eval in CI/CD

```yaml
# .github/workflows/eval.yml
name: AI Agent Evaluation
on:
  pull_request:
    paths:
      - 'prompts/**'
      - 'agents/**'
      - 'rag/**'

jobs:
  evaluate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.12'

      - name: Install dependencies
        run: pip install -r requirements.txt

      - name: Run prompt regression suite
        run: python -m pytest tests/prompt_regression/ -v --junitxml=report.xml
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}

      - name: Run RAG integration tests
        run: python -m pytest tests/integration/ -v --run-integration
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
          CHROMA_HOST: ${{ secrets.CHROMA_HOST }}

      - name: Run LLM-as-judge evaluation
        run: python -m eval_suite.run --dataset eval_data.json --min-score 7.0

      - name: Check quality gate
        run: |
          SCORE=$(python -m eval_suite.get_score report.xml)
          if (( $(echo "$SCORE < 7.0" | bc -l) )); then
            echo "Quality gate FAILED: score $SCORE < 7.0"
            exit 1
          fi
          echo "Quality gate PASSED: score $SCORE"
```

### Python CI Eval Runner


```python
import sys
import json
from pathlib import Path

class QualityGate:
    """Enforce quality thresholds in CI."""

    def __init__(self, min_overall_score: float = 7.0, max_hallucination_rate: float = 0.15):
        self.min_score = min_overall_score
        self.max_hallucination_rate = max_hallucination_rate

    def run_and_report(self, eval_dataset: EvalDataset, pipeline: "RAGPipeline") -> dict:
        judge = LLMJudge()
        detector = HallucinationDetector()

        results = []
        for example in eval_dataset.examples:
            response = pipeline.generate(example.query, example.context)
            judge_result = judge.evaluate(example.query, response, example.context, example.expected_response)
            hallu_report = detector.analyze(response, example.context)

            results.append({
                "id": example.id,
                "query": example.query,
                "judge_score": judge_result.overall_score,
                "hallucination_rate": hallu_report.hallucination_rate,
                "verdict": judge_result.verdict,
                "hallu_claims": hallu_report.hallucinated_claims,
            })

        avg_score = sum(r["judge_score"] for r in results) / len(results)
        avg_hallu = sum(r["hallucination_rate"] for r in results) / len(results)

        passed = avg_score >= self.min_score and avg_hallu <= self.max_hallucination_rate

        report = {
            "passed": passed,
            "avg_judge_score": round(avg_score, 2),
            "avg_hallucination_rate": round(avg_hallu, 3),
            "thresholds": {"min_score": self.min_score, "max_hallucination": self.max_hallucination_rate},
            "results": results,
        }

        print(json.dumps(report, indent=2))

        if not passed:
            print(f"FAILED: avg score {avg_score:.1f} (need {self.min_score}) or hallucination {avg_hallu:.1%} (max {self.max_hallucination_rate:.1%})")
            sys.exit(1)

        return report
```

---

## 11.8 Quality Metrics & Dashboards

```python
from collections import defaultdict
from datetime import datetime, timedelta
import statistics

class QualityTracker:
    """Track quality metrics over time with time-series storage."""

    def __init__(self):
        self.metrics: defaultdict[str, list[dict]] = defaultdict(list)

    def record(self, metric_name: str, value: float, metadata: dict | None = None):
        self.metrics[metric_name].append({
            "value": value,
            "timestamp": datetime.now().isoformat(),
            "metadata": metadata or {}
        })

    def get_trend(self, metric_name: str, hours: int = 24) -> dict:
        """Get metric values over a time window."""
        cutoff = datetime.now() - timedelta(hours=hours)
        entries = [e for e in self.metrics[metric_name]
                   if datetime.fromisoformat(e["timestamp"]) > cutoff]
        values = [e["value"] for e in entries]

        if not values:
            return {"metric": metric_name, "count": 0, "status": "no_data"}

        return {
            "metric": metric_name,
            "count": len(values),
            "current": values[-1],
            "mean": round(statistics.mean(values), 3),
            "min": min(values),
            "max": max(values),
            "stdev": round(statistics.stdev(values), 3) if len(values) > 1 else 0,
            "trend": "up" if len(values) > 1 and values[-1] > values[0] else "down",
            "status": "healthy" if values[-1] >= 0.8 else "degraded" if values[-1] >= 0.5 else "critical"
        }

    def dashboard(self) -> dict:
        """Generate a summary dashboard of all metrics."""
        return {
            name: self.get_trend(name) for name in self.metrics
        }

# Define key quality metrics
METRICS = {
    "faithfulness": "What fraction of claims are supported by context",
    "answer_relevance": "How relevant is the answer to the query (LLM-as-judge 1-10)",
    "context_precision": "What fraction of retrieved chunks are actually used",
    "context_recall": "What fraction of relevant chunks are retrieved",
    "latency_p50": "Median end-to-end latency in ms",
    "latency_p95": "95th percentile latency in ms",
    "cost_per_query": "Average cost per query in USD",
    "cache_hit_rate": "Fraction of queries served from cache",
    "user_satisfaction": "User feedback score (thumbs up/down ratio)",
}

# Usage
tracker = QualityTracker()
tracker.record("faithfulness", 0.92, {"model": "gpt-4o-mini", "dataset": "eval_v2"})
tracker.record("answer_relevance", 8.5, {"query_length": 45})
tracker.record("latency_p50", 1200, {"query": "complex_rag"})
tracker.record("cost_per_query", 0.0032, {"model": "gpt-4o-mini"})
tracker.record("cache_hit_rate", 1.0, {"model": "gpt-4o-mini", "cache_type": "semantic"})

print(json.dumps(tracker.dashboard(), indent=2))
```

---

## 11.9 A/B Testing for Model Selection

```python
import uuid
from datetime import datetime

class ModelABTest:
    """Compare two models on the same task with statistical rigor."""

    def __init__(self, model_a: str, model_b: str, task: str):
        self.model_a = model_a
        self.model_b = model_b
        self.task = task
        self.test_id = str(uuid.uuid4())[:8]
        self.results: list[dict] = []
        self.start_time = datetime.now()

    def run_test(self, test_queries: list[str], eval_criteria: list[str], n_repeats: int = 1) -> dict:
        """Run A/B test comparing both models on the same queries."""
        judge = LLMJudge()

        for query in test_queries:
            for repeat in range(n_repeats):
                # Model A
                response_a = client.chat.completions.create(
                    model=self.model_a,
                    messages=[{"role": "user", "content": query}]
                ).choices[0].message.content

                score_a = judge.evaluate(query, response_a, dimensions=[
                    ScoreDimension.CORRECTNESS, ScoreDimension.RELEVANCE
                ])

                # Model B
                response_b = client.chat.completions.create(
                    model=self.model_b,
                    messages=[{"role": "user", "content": query}]
                ).choices[0].message.content

                score_b = judge.evaluate(query, response_b, dimensions=[
                    ScoreDimension.CORRECTNESS, ScoreDimension.RELEVANCE
                ])

                self.results.append({
                    "query": query[:50],
                    "repeat": repeat,
                    "model_a_score": score_a.overall_score,
                    "model_b_score": score_b.overall_score,
                    "model_a_wins": score_a.overall_score > score_b.overall_score,
                    "model_b_wins": score_b.overall_score > score_a.overall_score,
                    "tie": score_a.overall_score == score_b.overall_score,
                })

        return self.analyze()

    def analyze(self) -> dict:
        """Statistical analysis of results."""
        a_wins = sum(1 for r in self.results if r["model_a_wins"])
        b_wins = sum(1 for r in self.results if r["model_b_wins"])
        ties = sum(1 for r in self.results if r["tie"])

        a_scores = [r["model_a_score"] for r in self.results]
        b_scores = [r["model_b_score"] for r in self.results]

        return {
            "test_id": self.test_id,
            "task": self.task,
            "model_a": self.model_a,
            "model_b": self.model_b,
            "samples": len(self.results),
            "model_a_avg": round(statistics.mean(a_scores), 2),
            "model_b_avg": round(statistics.mean(b_scores), 2),
            "model_a_wins": a_wins,
            "model_b_wins": b_wins,
            "ties": ties,
            "win_rate_a": round(a_wins / len(self.results) * 100, 1),
            "win_rate_b": round(b_wins / len(self.results) * 100, 1),
            "recommendation": self.model_a if a_wins > b_wins else self.model_b,
        }

# Usage
ab_test = ModelABTest("gpt-4o-mini", "gpt-4o", "RAG answer generation")
queries = [
    "What are the lease terms for commercial properties in Dubai Marina?",
    "Compare cost of living between Abu Dhabi and Dubai for a family of 4.",
    "What documents are required for a UAE residence visa?",
]
report = ab_test.run_test(queries, ["correctness", "relevance"], n_repeats=2)
print(f"Model A ({report['model_a']}): {report['model_a_avg']} avg score")
print(f"Model B ({report['model_b']}): {report['model_b_avg']} avg score")
print(f"Winner: {report['recommendation']}")
```

---


interface ProjectScaffold { name: string; files: Array&lt;{path:string;content:string}&gt; }
class ProjectGenerator {
  generateAIDemo(name: string): ProjectScaffold {
    return {name,files:[
      {path:"src/index.ts",content:`import {Agent} from "./agent"\nconst agent = new Agent({model:"gpt-4",maxTokens:1024,temperature:0.7})\nagent.run()`},
      {path:"src/agent.ts",content:`export class Agent { constructor(private config: {model:string;maxTokens:number;temperature:number}) {}\n  async run(): Promise<void> { console.log("Agent running with",this.config) } }`},
      {path:"tsconfig.json",content:JSON.stringify({compilerOptions:{target:"ES2022",module:"NodeNext",strict:true},include:["src"]},null,2)},
      {path:"package.json",content:JSON.stringify({name,dependencies:{openai:"^4.0"}},null,2)},
      {path:".env.example",content:"OPENAI_API_KEY=sk-..."}
    ]}
  }
  generateRAGDemo(name: string): ProjectScaffold {
    return {name,files:[
      {path:"src/index.ts",content:`import {RAGPipeline} from "./rag"\nconst rag = new RAGPipeline()\nrag.query("What is AI?")`},
      {path:"src/rag.ts",content:`export class RAGPipeline { async query(q:string): Promise<string> { return "Result" } }`}
    ]}
  }
}
export { ProjectGenerator, ProjectScaffold }
## Exercises

1. **Unit test suite:** Write unit tests for your LangGraph agent covering: correct tool selection, state transitions, error states, and edge cases (empty input, missing state keys).

2. **Integration test:** Write 3 integration tests for your RAG pipeline: chunking boundary test, retrieval relevance test, generation faithfulness test.

3. **LLM-as-judge:** Build a judge agent and evaluate 5 RAG outputs on correctness, faithfulness, and relevance. Report scores and improvement suggestions.

4. **Hallucination audit:** Run the HallucinationDetector on 10 RAG outputs from your pipeline. Calculate the hallucination rate and identify patterns.

5. **CI/CD eval:** Create a GitHub Actions workflow that runs your eval suite on every PR. Set a quality gate of 7.0/10 minimum score.
