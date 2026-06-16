# End-to-End RAG Evaluation & Monitoring Platform

> A RAG pipeline without evaluation is a garden without a fence — you have no idea what is getting in or what is getting out. This capstone builds a complete evaluation platform: synthetic test sets, metric computation, batch runners, and a historical dashboard so you know whether your next embedding swap actually helped.

**Type:** Build
**Languages:** Python
**Prerequisites:** Phase 4 (Vector Databases), Phase 15 (RAG), Phase 68 (RAG Eval Precision-Recall), Python stdlib
**Time:** ~120 minutes

## Learning Objectives

- Generate synthetic Q&A test sets from unstructured documents using LLM-as-judge
- Implement a modular RAG pipeline with pluggable retrievers and generators
- Compute the four canonical RAG metrics: context precision, answer recall, faithfulness, and hallucination rate
- Build a batch evaluation runner that scores a pipeline against a test set
- Persist scores to a SQLite-backed dashboard with historical trend visualization

## The Problem

Every production RAG system makes the same mistake: it ships without a test suite. Teams swap an embedding model and _feel_ like answers got better, or swap a generator and _feel_ like hallucination dropped. Without a repeatable evaluation harness you cannot tell whether a change improved or regressed the system. You need:

1. A test dataset of (question, ground-truth answer, relevant document chunk) triples.
2. A pipeline that, given a question, retrieves context and generates an answer.
3. A set of metrics that compare the generated answer to the ground truth and the retrieved context to the relevant chunk.
4. A runner that iterates every test case and aggregates scores.
5. A persistent store and a view that shows how scores move over time.

This capstone builds all five.

## Test Dataset Generation

Start with a corpus of documents. Chunk them (paragraph-level, 256-512 tokens). For each chunk, ask an LLM to generate a question that this chunk answers and a ground-truth answer extracted from the chunk's text. The result is a `TestCase` triple:

```python
import json, uuid, hashlib
from dataclasses import dataclass, asdict
from typing import Optional

@dataclass
class TestCase:
    id: str
    question: str
    ground_truth_answer: str
    relevant_chunk: str
    source_document: str
    chunk_id: str

    @staticmethod
    def from_chunk(chunk: str, doc_name: str, chunk_idx: int,
                   llm_generate) -> Optional["TestCase"]:
        prompt = (
            f"Given this document chunk, generate one question "
            f"that this chunk answers and a concise ground-truth "
            f"answer extracted verbatim or inferred from the text.\n\n"
            f"Chunk:\n{chunk}\n\n"
            f"Format:\nQuestion: <question>\nAnswer: <answer>"
        )
        result = llm_generate(prompt)
        if not result or "Question:" not in result:
            return None
        q_line = result.split("Question:")[1].split("Answer:")[0].strip()
        a_line = result.split("Answer:")[1].strip() if "Answer:" in result else ""
        return TestCase(
            id=hashlib.sha256(chunk.encode()).hexdigest()[:12],
            question=q_line,
            ground_truth_answer=a_line,
            relevant_chunk=chunk,
            source_document=doc_name,
            chunk_id=f"{doc_name}#{chunk_idx}",
        )
```

The `llm_generate` callable is injected so you can swap the generator without changing test creation logic. Use a fast, cheap model (GPT-4o-mini, Claude Haiku) for test generation — quality matters less here than coverage. Aim for 100-500 test cases per corpus.

## RAG Pipeline Under Test

The subject of evaluation is a `RagPipeline` with three stages: embed, retrieve, and generate. Each stage is a callable so you can swap implementations:

```python
from dataclasses import dataclass, field
from typing import Callable, List

EmbedFn = Callable[[str], List[float]]
RetrieveFn = Callable[[str, int], List[str]]
GenerateFn = Callable[[str, str], str]

@dataclass
class RagPipeline:
    embed: EmbedFn
    retrieve: RetrieveFn
    generate: GenerateFn
    top_k: int = 5

    def answer(self, question: str) -> dict:
        retrieved_chunks = self.retrieve(question, self.top_k)
        context = "\n\n".join(retrieved_chunks)
        answer_text = self.generate(question, context)
        return {
            "question": question,
            "context": context,
            "retrieved_chunks": retrieved_chunks,
            "answer": answer_text,
        }
```

This design lets you test any combination: BM25 + Claude, dense retrieval + GPT-4o, hybrid retrieval + local model. The evaluation platform is agnostic to what sits inside.

## Evaluation Metrics

Four metrics capture RAG quality from complementary angles.

### Context Precision

What fraction of retrieved chunks is actually relevant? Each chunk is scored 1 if it contains information that appears in the ground-truth answer, 0 otherwise.

```
ContextPrecision = (1 / k) * sum_{i=1}^{k} (rel_i * precision_at_i)
precision_at_i = sum_{j=1}^{i} rel_j / i
```

where `rel_i` is 1 if chunk `i` is relevant else 0, and chunks are ordered by retrieval rank. This penalises relevant chunks appearing late in the ranking.

```python
def context_precision(retrieved_chunks: List[str],
                      ground_truth_answer: str,
                      relevance_fn: Callable[[str, str], bool]) -> float:
    k = len(retrieved_chunks)
    if k == 0:
        return 0.0
    precision_at = []
    rel = []
    for i, chunk in enumerate(retrieved_chunks):
        is_rel = relevance_fn(chunk, ground_truth_answer)
        rel.append(is_rel)
        cumulative_rel = sum(rel[:i+1])
        precision_at.append(cumulative_rel / (i + 1))
    return (1.0 / k) * sum(
        r * p for r, p in zip(rel, precision_at)
    )
```

### Answer Recall

What fraction of ground-truth facts appears in the generated answer?

```python
def answer_recall(generated_answer: str,
                  ground_truth_answer: str,
                  fact_extractor: Callable[[str], List[str]]) -> float:
    gt_facts = set(fact_extractor(ground_truth_answer))
    gen_facts = set(fact_extractor(generated_answer))
    if len(gt_facts) == 0:
        return 1.0
    overlap = gt_facts & gen_facts
    return len(overlap) / len(gt_facts)
```

Implement `fact_extractor` as an LLM call that returns a list of atomic factual claims. Alternatively, use noun-phrase overlap for a cheap proxy.

### Faithfulness

What fraction of claims in the generated answer is supported by the retrieved context? This is the mirror of recall — it measures whether the model made things up.

```python
def faithfulness(generated_answer: str,
                 retrieved_context: str,
                 fact_extractor: Callable[[str], List[str]],
                 entailment_fn: Callable[[str, str], bool]) -> float:
    gen_facts = fact_extractor(generated_answer)
    if len(gen_facts) == 0:
        return 1.0
    supported = sum(
        1 for fact in gen_facts
        if entailment_fn(fact, retrieved_context)
    )
    return supported / len(gen_facts)
```

`entailment_fn` can be an NLI model (e.g., `TrueTeacher`, `BART-large-MNLI`) or an LLM-as-judge prompt that returns `"yes"` or `"no"`.

### Hallucination Rate

The complement of faithfulness, expressed as a rate.

```
HallucinationRate = 1 - Faithfulness
```

Track this separately because stakeholders intuitively understand "10% of claims are made up" more readily than "faithfulness is 0.9".

### Composite Score

A single number for dashboard trend lines:

```python
@dataclass
class EvalResult:
    context_precision: float
    answer_recall: float
    faithfulness: float
    hallucination_rate: float
    composite: float

    @staticmethod
    def compute(results: dict) -> "EvalResult":
        cp = results["context_precision"]
        ar = results["answer_recall"]
        fa = results["faithfulness"]
        hr = 1.0 - fa
        composite = (cp + ar + fa) / 3.0
        return EvalResult(cp, ar, fa, hr, composite)
```

## Batch Evaluation Runner

The runner loads a test set, iterates every test case through the pipeline, computes all four metrics, and aggregates:

```python
import json, sqlite3, time
from datetime import datetime, timezone
from pathlib import Path
from statistics import mean
from typing import List, Callable

RelevanceFn = Callable[[str, str], bool]
FactExtractFn = Callable[[str], List[str]]
EntailFn = Callable[[str, str], bool]

class BatchEvalRunner:
    def __init__(self, pipeline: RagPipeline, test_cases: List[TestCase],
                 relevance_fn: RelevanceFn, fact_extractor: FactExtractFn,
                 entailment_fn: EntailFn, db_path: str = "rag_eval.db"):
        self.pipeline = pipeline
        self.test_cases = test_cases
        self.relevance_fn = relevance_fn
        self.fact_extractor = fact_extractor
        self.entailment_fn = entailment_fn
        self.db_path = db_path
        self._init_db()

    def _init_db(self):
        with sqlite3.connect(self.db_path) as conn:
            conn.execute("""
                CREATE TABLE IF NOT EXISTS eval_runs (
                    run_id TEXT PRIMARY KEY,
                    timestamp TEXT,
                    pipeline_config TEXT,
                    num_cases INTEGER,
                    context_precision REAL,
                    answer_recall REAL,
                    faithfulness REAL,
                    hallucination_rate REAL,
                    composite REAL
                )
            """)
            conn.execute("""
                CREATE TABLE IF NOT EXISTS eval_results (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    run_id TEXT,
                    test_case_id TEXT,
                    question TEXT,
                    context_precision REAL,
                    answer_recall REAL,
                    faithfulness REAL,
                    hallucination_rate REAL
                )
            """)

    def run(self, pipeline_config: str = "") -> dict:
        run_id = datetime.now(timezone.utc).strftime("%Y%m%d_%H%M%S")
        per_case = []
        agg = {"context_precision": [], "answer_recall": [],
               "faithfulness": []}

        for tc in self.test_cases:
            result = self.pipeline.answer(tc.question)
            cp = context_precision(
                result["retrieved_chunks"], tc.ground_truth_answer,
                self.relevance_fn)
            ar = answer_recall(
                result["answer"], tc.ground_truth_answer,
                self.fact_extractor)
            fa = faithfulness(
                result["answer"], result["context"],
                self.fact_extractor, self.entailment_fn)
            er = EvalResult.compute({
                "context_precision": cp, "answer_recall": ar,
                "faithfulness": fa})
            agg["context_precision"].append(er.context_precision)
            agg["answer_recall"].append(er.answer_recall)
            agg["faithfulness"].append(er.faithfulness)
            per_case.append((run_id, tc.id, tc.question,
                             er.context_precision, er.answer_recall,
                             er.faithfulness, er.hallucination_rate))

        summary = EvalResult.compute({
            "context_precision": mean(agg["context_precision"]),
            "answer_recall": mean(agg["answer_recall"]),
            "faithfulness": mean(agg["faithfulness"])})

        with sqlite3.connect(self.db_path) as conn:
            conn.execute(
                "INSERT INTO eval_runs VALUES (?,?,?,?,?,?,?,?,?)",
                (run_id, datetime.now(timezone.utc).isoformat(),
                 pipeline_config, len(self.test_cases),
                 summary.context_precision, summary.answer_recall,
                 summary.faithfulness, summary.hallucination_rate,
                 summary.composite))
            conn.executemany(
                "INSERT INTO eval_results "
                "(run_id,test_case_id,question,context_precision,"
                "answer_recall,faithfulness,hallucination_rate) "
                "VALUES (?,?,?,?,?,?,?)", per_case)

        return {"run_id": run_id, "summary": asdict(summary),
                "num_cases": len(self.test_cases)}
```

The runner writes two tables: `eval_runs` stores one row per run with aggregate scores; `eval_results` stores per-case detail for drill-down. The `pipeline_config` field records the embedding model, retriever type, generator model, and top_k so you can attribute score changes to specific changes.

## Historical Dashboard

Query the SQLite store to build trend views:

```python
def dashboard(db_path: str = "rag_eval.db") -> dict:
    with sqlite3.connect(db_path) as conn:
        conn.row_factory = sqlite3.Row
        runs = conn.execute(
            "SELECT * FROM eval_runs ORDER BY timestamp DESC LIMIT 50"
        ).fetchall()
        # Regressions: cases where faithfulness dropped by >0.1
        regressed = conn.execute("""
            SELECT er.* FROM eval_results er
            JOIN eval_runs r ON er.run_id = r.run_id
            WHERE er.faithfulness < 0.7
            ORDER BY er.faithfulness ASC
            LIMIT 20
        """).fetchall()
    return {
        "recent_runs": [dict(r) for r in runs],
        "regressed_cases": [dict(r) for r in regressed],
    }
```

The dashboard output feeds a simple web view (Flask, Streamlit, or CLI table). Plot the composite score and each sub-metric over time using any charting library. A moving average window of 3-5 runs smooths noise from test-set sampling variance.

## Build It

The code directory contains a complete implementation. Run it with:

```bash
cd code
pip install -r requirements.txt
python main.py
```

The script generates a synthetic test set from included sample documents, runs the pipeline with configurable backends, computes all metrics, persists to SQLite, and prints a dashboard summary:

```text
Run 20260616_143052 | pipeline=gpt4o-mini+bm25+claude-sonnet
  Cases: 100
  Context Precision: 0.74
  Answer Recall:      0.81
  Faithfulness:       0.89
  Hallucination Rate: 0.11
  Composite:          0.81
```

Run `python main.py --dashboard` to see trend lines across all prior runs.

## Use It

Swap the embedding model and re-run. The dashboard shows whether context precision improved. Swap the generator and watch faithfulness. The whole point is that you no longer guess — you measure.

| What you change | Which metric moves | Expected direction |
|-----------------|-------------------|--------------------|
| Better embedding model | Context precision | Increases |
| Higher top-k | Answer recall | Increases (more context) |
| Higher top-k | Context precision | Decreases (more noise) |
| Larger generator | Faithfulness, answer recall | Increases |
| Better chunking strategy | All metrics | Depends on strategy |
| Add reranker | Context precision | Increases |

## Ship It

Save as `outputs/rag-eval-harness.py`. The harness is a CLI tool that:

1. Accepts `--test-set` (JSONL of `TestCase`), `--pipeline` (JSON config with embed/retrieve/generate functions), and `--db` (SQLite path).
2. Runs evaluation and prints per-case and aggregate results.
3. Supports `--compare A.json B.json` to diff two pipeline configurations on the same test set.

Include a `compare` mode that prints a table showing which metrics improved, regressed, or stayed the same:

```text
Metric              Pipeline A   Pipeline B   Delta
Context Precision   0.74         0.81         +0.07
Answer Recall       0.81         0.79         -0.02
Faithfulness        0.89         0.92         +0.03
```

## Exercises

1. **Easy.** Add a `--export-csv` flag to the eval runner that writes per-case results to a CSV file. Verify the output has columns matching the `EvalResult` fields.

2. **Medium.** Implement the `relevance_fn` and `entailment_fn` as LLM-as-judge calls using the same provider as your generator. Compare agreement against a small hand-labelled set of 20 cases. Report Cohen's kappa.

3. **Hard.** Implement `fact_extractor` using noun-phrase overlap with spaCy (noun chunks) instead of an LLM. Compare the `answer_recall` and `faithfulness` scores produced by LLM-based vs. NLP-based extraction over 200 cases. Where do they disagree most?

4. **Capstone extension.** Add an A/B testing workflow: given two pipeline configs, run both on the same test set, perform a paired bootstrap significance test (1000 resamples), and flag only metrics where the 95% confidence intervals do not overlap. This prevents chasing noise.

## Key Terms

| Term | What people say | What it actually means |
|------|-----------------|------------------------|
| RAG evaluation | "Measuring QA quality" | Systematic comparison of generated answers to ground truth across multiple dimensions. |
| Context precision | "Did we retrieve the right stuff?" | Weighted fraction of retrieved chunks actually relevant to the question. |
| Answer recall | "Did the answer cover everything?" | Fraction of ground-truth facts present in the generated answer. |
| Faithfulness | "Did the model make stuff up?" | Fraction of generated claims supported by retrieved context. |
| Hallucination rate | "How often does it lie?" | Complement of faithfulness; fraction of unsupported claims. |
| NLI model | "Natural language inference" | Model that predicts whether a premise entails a hypothesis; used as entailment_fn. |
| LLM-as-judge | "Using an LLM to grade an LLM" | Using a separate model to evaluate output quality; requires calibration against human labels. |
| Composite score | "The overall number" | Unweighted mean of context precision, answer recall, and faithfulness. |
| Bootstrap significance | "Is this real?" | Resampling with replacement to estimate confidence intervals without parametric assumptions. |

## Further Reading

- [Ragas: Evaluation framework for RAG pipelines](https://docs.ragas.io/) — the production library that inspired this lesson's metrics.
- [TruLens: Evaluating LLM apps](https://www.trulens.org/) — feedback functions for RAG quality.
- [Shahul et al. (2023). RAGAS: Automated Evaluation of RAG Pipelines](https://arxiv.org/abs/2309.15217) — the paper formalising context precision, answer recall, and faithfulness.
- [Es et al. (2023). TrueTeacher: Learning Factual Consistency Evaluation with LLMs](https://arxiv.org/abs/2305.07992) — synthetic-data approach to NLI for faithfulness.
- [Kuhn et al. (2023). Semantic Entropy: Probing LLM Uncertainty](https://arxiv.org/abs/2305.09650) — alternative approach to hallucination detection via prediction entropy.
