# RAG Evaluation

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand RAG-specific evaluation dimensions beyond standard LLM evaluation |
| LO2 | Implement retrieval quality metrics — precision, recall, MRR, NDCG |
| LO3 | Build generation quality metrics — faithfulness, answer relevance, completeness |
| LO4 | Design end-to-end RAG evaluation pipelines |
| LO5 | Apply RAGAS, TruLens, and other evaluation frameworks |
| LO6 | Implement A/B testing for RAG configuration changes |

## Introduction

Understanding rag evaluation is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering rag evaluation.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 8.1 | RAG Evaluation Dimensions | Retrieval quality, generation quality, end-to-end metrics |
| 8.2 | Retrieval Metrics | Precision@k, Recall@k, MRR, NDCG, mAP |
| 8.3 | Generation Metrics | Faithfulness, answer relevance, context recall/precision |
| 8.4 | End-to-End Metrics | RAGAS (Faithfulness, Answer Relevancy, Context Precision, Context Recall) |
| 8.5 | Evaluation Frameworks | RAGAS, TruLens, DeepEval, custom pipelines |
| 8.6 | A/B Testing | Experiment design, statistical significance, rollout strategies |

## Chapter Roadmap

```mermaid
flowchart LR
    A[RAG Pipeline] --> B[Retrieval]
    A --> C[Generation]
    B --> D[Retrieval Metrics]
    C --> E[Generation Metrics]
    D --> F[RAGAS Score]
    E --> F
    F --> G[Regression Check]
    G --> H{Pass?}
    H -->|Yes| I[Deploy]
    H -->|No| J[Rollback]
```text

## 8.1 RAG Evaluation Dimensions

RAG evaluation requires assessing two subsystems — retrieval and generation — separately and together.

### Evaluation Taxonomy

```python
from dataclasses import dataclass
from typing import List, Dict, Optional, Callable
import numpy as np


@dataclass
class RAGEvaluationResult:
    query: str
    response: str
    retrieved_chunks: List[Dict]
    retrieval_scores: Dict[str, float]
    generation_scores: Dict[str, float]
    end_to_end_scores: Dict[str, float]


class RAGEvaluator:
    def __init__(self):
        self.retrieval_metrics: Dict[str, Callable] = {}
        self.generation_metrics: Dict[str, Callable] = {}

    def register_retrieval_metric(self, name: str, fn: Callable):
        self.retrieval_metrics[name] = fn

    def register_generation_metric(self, name: str, fn: Callable):
        self.generation_metrics[name] = fn

    def evaluate_retrieval(self, query: str, retrieved: list, relevant: list) -> Dict:
        scores = {}
        for name, fn in self.retrieval_metrics.items():
            scores[name] = fn(query, retrieved, relevant)
        return scores

    def evaluate_generation(self, query: str, response: str, context: list) -> Dict:
        scores = {}
        for name, fn in self.generation_metrics.items():
            scores[name] = fn(query, response, context)
        return scores


evaluator = RAGEvaluator()
print(f"Registered retrieval metrics: {len(evaluator.retrieval_metrics)}")
print(f"Registered generation metrics: {len(evaluator.generation_metrics)}")
```text

## 8.2 Retrieval Metrics

### 8.2.1 Precision@k and Recall@k

```python
def precision_at_k(retrieved: List[str], relevant: set, k: int) -> float:
    if k <= 0 or not retrieved:
        return 0.0
    top_k = retrieved[:k]
    relevant_retrieved = sum(1 for doc in top_k if doc in relevant)
    return relevant_retrieved / min(k, len(top_k))


def recall_at_k(retrieved: List[str], relevant: set, k: int) -> float:
    if not relevant:
        return 0.0
    top_k = retrieved[:k]
    relevant_retrieved = sum(1 for doc in top_k if doc in relevant)
    return relevant_retrieved / len(relevant)


retrieved_docs = ["doc1", "doc2", "doc3", "doc4", "doc5"]
relevant_docs = {"doc1", "doc3", "doc6", "doc7"}

print(f"Precision@3: {precision_at_k(retrieved_docs, relevant_docs, 3):.3f}")
print(f"Recall@3: {recall_at_k(retrieved_docs, relevant_docs, 3):.3f}")
print(f"Precision@5: {precision_at_k(retrieved_docs, relevant_docs, 5):.3f}")
print(f"Recall@5: {recall_at_k(retrieved_docs, relevant_docs, 5):.3f}")
```text

### 8.2.2 Mean Reciprocal Rank (MRR)

```python
def reciprocal_rank(retrieved: List[str], relevant: set) -> float:
    for rank, doc in enumerate(retrieved, 1):
        if doc in relevant:
            return 1.0 / rank
    return 0.0


def mean_reciprocal_rank(queries_results: List[tuple]) -> float:
    rr_sum = sum(reciprocal_rank(retrieved, relevant) for retrieved, relevant in queries_results)
    return rr_sum / len(queries_results) if queries_results else 0.0


results = [
    (["doc1", "doc2", "doc3"], {"doc1"}),
    (["doc4", "doc5", "doc6"], {"doc6"}),
    (["doc7", "doc8", "doc9"], {"doc10"}),
]
print(f"MRR: {mean_reciprocal_rank(results):.4f}")
```text

### 8.2.3 Normalized Discounted Cumulative Gain (NDCG)

```python
def dcg(relevances: List[float], k: int) -> float:
    return sum(
        (2**rel - 1) / np.log2(idx + 2)
        for idx, rel in enumerate(relevances[:k])
    )


def ndcg_at_k(retrieved: List[str], relevant: Dict[str, float], k: int) -> float:
    relevances = [relevant.get(doc, 0.0) for doc in retrieved[:k]]
    ideal = sorted(relevant.values(), reverse=True)[:k]

    actual_dcg = dcg(relevances, k)
    ideal_dcg = dcg(ideal, k)

    return actual_dcg / ideal_dcg if ideal_dcg > 0 else 0.0


retrieved = ["doc1", "doc2", "doc3", "doc4", "doc5"]
relevance_grades = {"doc1": 3.0, "doc2": 2.0, "doc3": 0.0, "doc4": 1.0, "doc5": 0.0}
print(f"NDCG@3: {ndcg_at_k(retrieved, relevance_grades, 3):.4f}")
print(f"NDCG@5: {ndcg_at_k(retrieved, relevance_grades, 5):.4f}")
```text

### 8.2.4 Mean Average Precision (mAP)

```python
def average_precision(retrieved: List[str], relevant: set) -> float:
    precisions = []
    relevant_count = 0
    for k, doc in enumerate(retrieved, 1):
        if doc in relevant:
            relevant_count += 1
            precisions.append(relevant_count / k)
    return sum(precisions) / len(precisions) if precisions else 0.0


def mean_average_precision(queries_results: List[tuple]) -> float:
    ap_sum = sum(
        average_precision(retrieved, relevant)
        for retrieved, relevant in queries_results
    )
    return ap_sum / len(queries_results) if queries_results else 0.0


results = [
    (["doc1", "doc2", "doc3"], {"doc1", "doc3"}),
    (["doc4", "doc5", "doc6"], {"doc5", "doc6"}),
]
print(f"mAP: {mean_average_precision(results):.4f}")
```text

### 8.2.5 Comprehensive Retrieval Evaluator

```python
class RetrievalEvaluator:
    def __init__(self, queries: List[str], retrieved_docs: List[List[str]], relevant_docs: List[set]):
        self.queries = queries
        self.retrieved = retrieved_docs
        self.relevant = relevant_docs

    def evaluate_at_k(self, k: int = 10) -> Dict:
        precisions = []
        recalls = []
        ndcgs = []

        for retrieved, relevant in zip(self.retrieved, self.relevant):
            precisions.append(precision_at_k(retrieved, relevant, k))
            recalls.append(recall_at_k(retrieved, relevant, k))

            rel_dict = {doc: 1.0 for doc in relevant}
            ndcgs.append(ndcg_at_k(retrieved, rel_dict, k))

        return {
            "k": k,
            "avg_precision": round(np.mean(precisions), 4),
            "avg_recall": round(np.mean(recalls), 4),
            "avg_ndcg": round(np.mean(ndcgs), 4),
        }

    def full_report(self) -> Dict:
        report = {}
        for k in [1, 3, 5, 10, 20]:
            report[f"@{k}"] = self.evaluate_at_k(k)
        report["mrr"] = round(mean_reciprocal_rank(
            list(zip(self.retrieved, [set(r) for r in self.relevant]))
        ), 4)
        report["map"] = round(mean_average_precision(
            list(zip(self.retrieved, [set(r) for r in self.relevant]))
        ), 4)
        return report


retrieval_eval = RetrievalEvaluator(
    queries=["q1", "q2"],
    retrieved_docs=[["doc1", "doc2", "doc3"], ["doc4", "doc5"]],
    relevant_docs=[{"doc1", "doc3"}, {"doc5"}],
)
print(retrieval_eval.full_report())
```text

## 8.3 Generation Metrics

### 8.3.1 Faithfulness (Hallucination Detection)

Faithfulness measures whether the generated response is supported by the retrieved context.

```python
class FaithfulnessScorer:
    def __init__(self, entailment_model=None):
        self.model = entailment_model

    def score(self, response: str, context_chunks: List[str]) -> float:
        response_claims = self._extract_claims(response)
        if not response_claims:
            return 1.0

        supported = 0
        for claim in response_claims:
            if self._is_supported(claim, context_chunks):
                supported += 1

        return supported / len(response_claims)

    def _extract_claims(self, text: str) -> List[str]:
        sentences = text.replace("!", ".").replace("?", ".").split(".")
        return [s.strip() for s in sentences if len(s.strip()) > 10]

    def _is_supported(self, claim: str, context: List[str]) -> bool:
        claim_terms = set(claim.lower().split())
        for chunk in context:
            chunk_terms = set(chunk.lower().split())
            overlap = len(claim_terms & chunk_terms)
            if overlap / len(claim_terms) >= 0.5:
                return True
        return False


faithfulness = FaithfulnessScorer()
response = "RAG combines retrieval with generation. It reduces hallucination."
context = ["RAG is Retrieval-Augmented Generation that combines retrieval with generation."]
print(f"Faithfulness: {faithfulness.score(response, context):.2%}")
```text

### 8.3.2 Answer Relevance

Answer relevance measures how directly the response addresses the query.

```python
class AnswerRelevanceScorer:
    def __init__(self, model_fn=None):
        self.model_fn = model_fn

    def score(self, query: str, response: str) -> float:
        query_terms = set(query.lower().split())
        response_lower = response.lower()

        term_overlap = sum(1 for t in query_terms if t in response_lower)
        term_relevance = term_overlap / len(query_terms) if query_terms else 0

        length_ratio = min(len(response) / (len(query) * 3), 1.0)

        return 0.7 * term_relevance + 0.3 * length_ratio

    def score_with_llm(self, query: str, response: str, model_fn) -> float:
        prompt = f"""Rate how well this response answers the query from 0 to 1.

Query: {query}
Response: {response}

Score (0.0 to 1.0):"""
        result = model_fn(prompt)
        try:
            return float(result.strip())
        except ValueError:
            return 0.5


relevance = AnswerRelevanceScorer()
print(f"Answer relevance: {relevance.score('What is RAG?', 'RAG is a technique for grounding LLMs.'):.2%}")
```text

### 8.3.3 Context Precision and Recall

```python
class ContextPrecisionRecall:
    def evaluate(self, query: str, retrieved_chunks: List[str], relevant_chunks: set) -> Dict:
        query_terms = set(query.lower().split())

        precision_numerator = 0
        for rank, chunk in enumerate(retrieved_chunks, 1):
            if any(term in chunk.lower() for term in query_terms):
                precision_numerator += 1 / rank

        precision_denominator = 0
        for rank in range(1, len(retrieved_chunks) + 1):
            precision_denominator += 1 / rank

        context_precision = precision_numerator / precision_denominator if precision_denominator > 0 else 0

        retrieved_relevant = sum(1 for c in retrieved_chunks if c in relevant_chunks)
        context_recall = retrieved_relevant / len(relevant_chunks) if relevant_chunks else 0

        return {
            "context_precision": round(context_precision, 4),
            "context_recall": round(context_recall, 4),
        }


cpr = ContextPrecisionRecall()
result = cpr.evaluate(
    "What is RAG?",
    ["RAG is retrieval augmented generation.", "Embeddings are vector representations."],
    {"RAG is retrieval augmented generation."},
)
print(f"Context precision: {result['context_precision']:.3f}, recall: {result['context_recall']:.3f}")
```text

## 8.4 End-to-End Metrics (RAGAS)

RAGAS (RAG Assessment) defines four core metrics: Faithfulness, Answer Relevancy, Context Precision, Context Recall.

### 8.4.1 RAGAS Implementation

```python
class RAGAS:
    def __init__(self):
        self.faithfulness_scorer = FaithfulnessScorer()
        self.relevance_scorer = AnswerRelevanceScorer()

    def evaluate(self, query: str, response: str, context: List[str], ground_truth: Optional[str] = None) -> Dict:
        faithfulness = self.faithfulness_scorer.score(response, context)
        answer_relevancy = self.relevance_scorer.score(query, response)

        context_precision = self._context_precision(query, context)
        context_recall = self._context_recall(context, ground_truth) if ground_truth else 0.0

        ragas_score = (
            faithfulness * 0.3 +
            answer_relevancy * 0.3 +
            context_precision * 0.2 +
            context_recall * 0.2
        )

        return {
            "faithfulness": round(faithfulness, 4),
            "answer_relevancy": round(answer_relevancy, 4),
            "context_precision": round(context_precision, 4),
            "context_recall": round(context_recall, 4),
            "ragas_score": round(ragas_score, 4),
        }

    def _context_precision(self, query: str, context: List[str]) -> float:
        if not context:
            return 0.0
        query_terms = set(query.lower().split())
        relevant = sum(1 for c in context if any(t in c.lower() for t in query_terms))
        return relevant / len(context)

    def _context_recall(self, context: List[str], ground_truth: str) -> float:
        gt_terms = set(ground_truth.lower().split())
        if not gt_terms:
            return 1.0
        covered = 0
        for term in gt_terms:
            if any(term in c.lower() for c in context):
                covered += 1
        return covered / len(gt_terms)


ragas = RAGAS()
result = ragas.evaluate(
    query="What is RAG?",
    response="RAG is Retrieval-Augmented Generation.",
    context=["RAG stands for Retrieval-Augmented Generation."],
    ground_truth="RAG is Retrieval-Augmented Generation, a technique for grounding LLMs.",
)
print(f"RAGAS scores: {result}")
```text

### 8.4.2 RAGAS Batch Evaluation

```python
class RAGASBatchEvaluator:
    def __init__(self):
        self.ragas = RAGAS()

    def evaluate_pipeline(self, pipeline, test_set: List[Dict]) -> Dict:
        results = []
        for item in test_set:
            query = item["query"]
            response = pipeline.query(query)
            context = [c.text for c in item.get("retrieved", [])]
            ground_truth = item.get("ground_truth")

            scores = self.ragas.evaluate(query, response, context, ground_truth)
            results.append(scores)

        avg_scores = {}
        for key in results[0].keys():
            avg_scores[f"avg_{key}"] = round(
                sum(r[key] for r in results) / len(results), 4
            )

        return avg_scores


test_set = [
    {"query": "What is RAG?", "ground_truth": "RAG is Retrieval-Augmented Generation.", "retrieved": []},
    {"query": "How does retrieval work?", "ground_truth": "Retrieval finds relevant documents.", "retrieved": []},
]

evaluator = RAGASBatchEvaluator()
print("RAGAS batch evaluator ready")
```text

### 8.4.3 TruLens-Style Feedback Functions

```python
class FeedbackFunction:
    def __init__(self, name: str, fn):
        self.name = name
        self.fn = fn

    def __call__(self, *args, **kwargs):
        return self.fn(*args, **kwargs)


class TruLensStyleEvaluator:
    def __init__(self):
        self.feedbacks = []

    def add_feedback(self, name: str, fn):
        self.feedbacks.append(FeedbackFunction(name, fn))

    def evaluate(self, query: str, response: str, context: List[str]) -> Dict:
        results = {}
        for feedback in self.feedbacks:
            results[feedback.name] = feedback(query, response, context)
        return results


def qa_relevance(query, response, context):
    return 0.85


def groundedness(query, response, context):
    return 0.92


tl = TruLensStyleEvaluator()
tl.add_feedback("qa_relevance", qa_relevance)
tl.add_feedback("groundedness", groundedness)
print(tl.evaluate("What is RAG?", "RAG is a technique.", ["RAG is a technique."]))
```text

## 8.5 Evaluation Frameworks

### 8.5.1 Custom Evaluation Pipeline

```python
class EvaluationPipeline:
    def __init__(self, name: str):
        self.name = name
        self.metrics = {}
        self.test_sets = []

    def add_metric(self, name: str, metric_fn: Callable, requires: List[str] = None):
        self.metrics[name] = {"fn": metric_fn, "requires": requires or []}

    def add_test_set(self, name: str, data: List[Dict]):
        self.test_sets.append({"name": name, "data": data})

    def run(self, rag_pipeline) -> Dict:
        all_results = {}
        for test_set in self.test_sets:
            set_results = {m: [] for m in self.metrics}
            for item in test_set["data"]:
                response = rag_pipeline.query(item["query"])
                for m_name, m_config in self.metrics.items():
                    kwargs = {"query": item["query"], "response": response}
                    if "context" in (m_config["requires"] or []):
                        kwargs["context"] = item.get("context", [])
                    if "ground_truth" in (m_config["requires"] or []):
                        kwargs["ground_truth"] = item.get("ground_truth", "")
                    score = m_config["fn"](**kwargs)
                    set_results[m_name].append(score)

            all_results[test_set["name"]] = {
                m_name: round(sum(scores) / len(scores), 4)
                for m_name, scores in set_results.items()
            }
        return all_results


pipeline = EvaluationPipeline("rag-eval-v1")
pipeline.add_metric("faithfulness", lambda query, response: 0.9, ["query"])
pipeline.add_test_set("test-qa", [{"query": "What is RAG?"}])
print("Custom evaluation pipeline ready")
```text

### 8.5.2 DeepEval Integration (Conceptual)

```python
class DeepEvalAdapter:
    def __init__(self):
        self.test_cases = []

    def add_test_case(self, query: str, expected: str, context: List[str]):
        self.test_cases.append({
            "query": query,
            "expected_output": expected,
            "retrieval_context": context,
        })

    def evaluate(self, rag_pipeline) -> Dict:
        results = {"faithfulness": [], "answer_relevancy": [], "hallucination": []}
        for tc in self.test_cases:
            response = rag_pipeline.query(tc["query"])
            results["faithfulness"].append(self._faithfulness(response, tc["retrieval_context"]))
            results["answer_relevancy"].append(self._answer_relevancy(tc["query"], response))
            results["hallucination"].append(self._hallucination(response, tc["retrieval_context"]))
        return {
            metric: round(sum(scores) / len(scores), 4)
            for metric, scores in results.items()
        }

    def _faithfulness(self, response: str, context: List[str]) -> float:
        return 0.88

    def _answer_relevancy(self, query: str, response: str) -> float:
        return 0.92

    def _hallucination(self, response: str, context: List[str]) -> float:
        return 0.05


deep_eval = DeepEvalAdapter()
deep_eval.add_test_case("What is RAG?", "RAG is a technique.", ["RAG is a technique."])
print("DeepEval-style adapter ready")
```text

### 8.5.3 Regression Tracking

```python
class RegressionTracker:
    def __init__(self):
        self.history = []

    def record_evaluation(self, version: str, scores: Dict):
        entry = {"version": version, "scores": scores, "timestamp": "now"}
        self.history.append(entry)

    def check_regression(self, current_scores: Dict, tolerance: float = 0.05) -> List[str]:
        if len(self.history) < 1:
            return []

        prev = self.history[-1]["scores"]
        regressions = []
        for metric, score in current_scores.items():
            prev_score = prev.get(metric, score)
            if score < prev_score - tolerance:
                regressions.append(f"{metric}: {prev_score:.3f} -> {score:.3f}")
        return regressions

    def report(self) -> Dict:
        if len(self.history) < 2:
            return {"status": "need_more_data"}
        latest = self.history[-1]
        prev = self.history[-2]
        changes = {}
        for metric in latest["scores"]:
            if metric in prev["scores"]:
                changes[metric] = round(latest["scores"][metric] - prev["scores"][metric], 4)
        return {"changes": changes}


tracker = RegressionTracker()
tracker.record_evaluation("v1", {"faithfulness": 0.85, "relevancy": 0.80})
tracker.record_evaluation("v2", {"faithfulness": 0.82, "relevancy": 0.83})
print(f"Regressions: {tracker.check_regression({'faithfulness': 0.82})}")
```text

## 8.6 A/B Testing

### 8.6.1 Experiment Design

```python
class RAGExperiment:
    def __init__(self, name: str, control_pipeline, treatment_pipeline):
        self.name = name
        self.control = control_pipeline
        self.treatment = treatment_pipeline
        self.results = []

    def run(self, queries: List[str], ground_truth: Dict[str, str]):
        control_scores = []
        treatment_scores = []

        for query in queries:
            control_response = self.control.query(query)
            treatment_response = self.treatment.query(query)
            truth = ground_truth.get(query, "")

            control_score = self._score_response(control_response, truth)
            treatment_score = self._score_response(treatment_response, truth)

            control_scores.append(control_score)
            treatment_scores.append(treatment_score)

        return {
            "control_avg": round(np.mean(control_scores), 4),
            "treatment_avg": round(np.mean(treatment_scores), 4),
            "improvement": round((np.mean(treatment_scores) - np.mean(control_scores)) / np.mean(control_scores) * 100, 2),
        }

    def _score_response(self, response: str, truth: str) -> float:
        response_terms = set(response.lower().split())
        truth_terms = set(truth.lower().split())
        if not truth_terms:
            return 0.5
        overlap = len(response_terms & truth_terms)
        return overlap / max(len(response_terms), len(truth_terms))


class MockRAG:
    def query(self, q: str) -> str:
        return f"Answer: {q}"

experiment = RAGExperiment("test-v1", MockRAG(), MockRAG())
print("A/B experiment configured")
```text

### 8.6.2 Statistical Significance

```python
from scipy import stats


def significance_test(control_scores: List[float], treatment_scores: List[float]) -> Dict:
    t_stat, p_value = stats.ttest_ind(control_scores, treatment_scores)

    effect_size = (np.mean(treatment_scores) - np.mean(control_scores)) / np.std(control_scores) if np.std(control_scores) > 0 else 0

    return {
        "t_statistic": round(t_stat, 4),
        "p_value": round(p_value, 4),
        "effect_size": round(effect_size, 4),
        "significant": p_value < 0.05,
        "mean_control": round(np.mean(control_scores), 4),
        "mean_treatment": round(np.mean(treatment_scores), 4),
    }


control = [0.8, 0.85, 0.82, 0.79, 0.83]
treatment = [0.88, 0.91, 0.85, 0.89, 0.87]
print(significance_test(control, treatment))
```text

### 8.6.3 Rollout Strategy

```python
class RAGRolloutManager:
    def __init__(self, control_pipeline, treatment_pipeline):
        self.control = control_pipeline
        self.treatment = treatment_pipeline
        self.traffic_percentage = 0

    def set_traffic_percentage(self, treatment_percent: int):
        self.traffic_percentage = min(100, max(0, treatment_percent))

    def route_query(self, query: str, user_id: str) -> str:
        import hashlib
        user_hash = int(hashlib.md5(user_id.encode()).hexdigest(), 16) % 100
        if user_hash < self.traffic_percentage:
            return self.treatment.query(query)
        return self.control.query(query)

    def gradual_rollout(self, steps: List[int]):
        plan = []
        for step_percent in steps:
            if step_percent <= 100:
                plan.append(f"Set treatment to {step_percent}%")
        return plan


rollout = RAGRolloutManager(MockRAG(), MockRAG())
rollout.set_traffic_percentage(10)
print(f"Treatment at {rollout.traffic_percentage}%")
print(f"Rollout plan: {rollout.gradual_rollout([10, 25, 50, 100])}")
```text

## Summary

RAG evaluation requires measuring retrieval quality (precision@k, recall@k, MRR, NDCG, mAP), generation quality (faithfulness, answer relevance, context precision/recall), and end-to-end metrics. RAGAS defines a standardized framework with four core metrics: faithfulness, answer relevancy, context precision, and context recall. Evaluation frameworks like RAGAS, TruLens, and DeepEval provide automated scoring. A/B testing with statistical significance testing enables data-driven decisions about RAG configuration changes. Regression tracking ensures that pipeline modifications do not degrade quality over time.

## Practical Takeaways

| Takeaway | Description |
|----------|-------------|
| Evaluate retrieval separately | Retrieval quality directly bounds generation quality |
| Use RAGAS as standard metric | Four metrics capture the key RAG quality dimensions |
| Track regression | Always compare against previous evaluation before deploying changes |
| Use statistical tests | A/B test with significance testing before full rollout |
| Build golden test sets | 50-100 curated queries with ground truth for consistent evaluation |
| Monitor in production | Log queries, chunks, responses for ongoing evaluation |

## Interview Q&A

<details class="tp-qa-card" data-qid="rag08-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: What are the four core RAGAS metrics and how do they capture RAG quality?
  </summary>
  <div class="tp-qa-answer">
    <p>The four RAGAS metrics are: Faithfulness (whether the generated response is factually supported by the retrieved context — detects hallucination), Answer Relevancy (whether the response directly addresses the query — detects off-topic responses), Context Precision (whether the retrieved chunks are relevant to the query — detects noisy retrieval), and Context Recall (whether the retrieved chunks cover all information needed for the ground truth answer — detects missing context). Faithfulness and context recall are measured against ground truth or an LLM judge, while answer relevancy and context precision are query-centric. A composite RAGAS score weights these four metrics (typically 0.3, 0.3, 0.2, 0.2) to produce a single quality indicator.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag08-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: How do you compute NDCG and why is it preferred over simple precision for retrieval evaluation?
  </summary>
  <div class="tp-qa-answer">
    <p>NDCG (Normalized Discounted Cumulative Gain) handles graded relevance (not just binary relevant/irrelevant) and discounts the importance of results at lower ranks. It computes: DCG = sum((2^rel_i - 1) / log2(i+1)), then normalizes by Ideal DCG (perfect ranking). NDCG is preferred over precision because: (1) it supports multi-level relevance (e.g., 3=highly relevant, 2=somewhat relevant, 1=barely relevant), (2) it penalizes relevant results appearing at low ranks, and (3) it handles varying numbers of relevant documents. For binary relevance, NDCG@k is equivalent to average precision at k. Most retrieval benchmarks (BEIR, MS MARCO) report NDCG@10 as the primary metric.</p>
    <pre><code>def ndcg_at_k(retrieved, relevance, k):
    dcg = sum((2**rel - 1) / log2(i+2) for i, rel in enumerate(relevance[:k]))
    idcg = sum((2**r - 1) / log2(i+2) for i, r in enumerate(sorted(relevance, reverse=True)[:k]))
    return dcg / idcg if idcg > 0 else 0</code></pre>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag08-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: How do you build a golden test set for RAG evaluation?
  </summary>
  <div class="tp-qa-answer">
    <p>Create 50-100 curated query-answer pairs with these fields: query (from real user logs or domain experts), ground_truth_answer (gold standard), relevant_chunks (list of chunk IDs that contain the answer), and context_relevance (which retrieved chunks are relevant). Use stratified sampling to cover different query types (factual, procedural, comparative) and difficulty levels. Annotate with multiple raters and measure inter-rater agreement (Cohen's Kappa > 0.7). Store in JSONL format. The test set serves as the definitive quality benchmark — always evaluate against this set before deploying RAG changes. Refresh quarterly to cover new content and edge cases encountered in production.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag08-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: How do you implement a faithfulness scorer to detect hallucinations in RAG responses?
  </summary>
  <div class="tp-qa-answer">
    <p>A FaithfulnessScorer extracts claims (sentences or atomic facts) from the generated response and checks each against the retrieved context. For each claim, compute whether it is SUPPORTED (present in or entailed by context), NOT_SUPPORTED (absent), or CONTRADICTED (opposite claims in context). The faithfulness score is the proportion of supported claims. Use an LLM-as-judge for the entailment check with a prompt like:</p>
    <pre><code>def score(self, response, context):
    claims = extract_claims(response)
    supported = 0
    for claim in claims:
        if self.is_supported(claim, context):
            supported += 1
    return supported / len(claims) if claims else 1.0</code></pre>
    <p>This catches both extrinsic hallucination (claims outside context) and intrinsic hallucination (claims contradicting context). State-of-the-art faithfulness scorers achieve 85-95% agreement with human annotations.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag08-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: How do you set up an A/B test for comparing two RAG configurations?
  </summary>
  <div class="tp-qa-answer">
    <p>Define control (current RAG config) and treatment (new chunking strategy, reranker, or model). Run both on the same set of queries (minimum 30 per variant) from a test set or logged production traffic. Measure faithfulness, answer relevance, and latency for each response. Use a t-test or Mann-Whitney U test to check if differences are statistically significant (p < 0.05). Also measure effect size (Cohen's d) to assess practical significance. If the treatment improves faithfulness by >5% with p < 0.05, consider rolling out gradually: start with 5% of traffic, monitor for 24 hours, then increase to 25%, 50%, 100% with regression checks at each step.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag08-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: What is context recall and how does it differ from answer faithfulness?
  </summary>
  <div class="tp-qa-answer">
    <p>Context recall measures whether all information needed to answer the query is present in the retrieved chunks. It is computed against the ground truth answer: for each claim in the ground truth, check if it is covered by any retrieved chunk. Faithfulness measures the reverse — whether claims in the generated response are supported by context. A system can have high faithfulness (response only uses context) but low context recall (context is missing key information), leading to incomplete answers. Both metrics are needed for a complete picture: recall identifies retrieval gaps, faithfulness identifies generation issues. In practice, address low recall first (retrieval optimization) before addressing low faithfulness (prompt engineering).</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag08-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: How do you track evaluation regressions over multiple RAG pipeline versions?
  </summary>
  <div class="tp-qa-answer">
    <p>Implement a RegressionTracker that stores evaluation results for each pipeline version (faithfulness, relevance, context precision, context recall, RAGAS score, and average latency). Each entry includes version name, timestamp, and full metrics. On each new evaluation, compare against the previous version with configurable tolerance (e.g., >5% degradation triggers alert). Store history in a database or file for trend visualization. Key regression rules: faithfulness drops >5% = BLOCK deployment, latency increases >20% = FLAG for review, RAGAS composite drops >3% = INVESTIGATE. Automate this check in CI/CD — a failing regression check blocks the deployment pipeline.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag08-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: How do you evaluate RAG when ground truth answers are not available?
  </summary>
  <div class="tp-qa-answer">
    <p>Without ground truth, use reference-free evaluation methods. For retrieval quality, user behavior signals like click-through rate, dwell time, and query reformulation rate can indicate whether retrieved results were useful. For generation quality, use an LLM-as-judge with a rubric to score faithfulness (does the answer use only context?), relevance (does it address the query?), and helpfulness (would a user find this useful?). Two complementary approaches: (1) sample 20-50 queries weekly for manual review by domain experts, (2) use automated LLM-based scoring with calibrated thresholds (validate against a small annotated set first). RAGAS frameworks support reference-free operation for faithfulness and answer relevancy by using the LLM as the evaluator.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag08-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: What is mean reciprocal rank (MRR) and when would you use it over precision@k?
  </summary>
  <div class="tp-qa-answer">
    <p>MRR computes the average reciprocal rank of the first relevant document across all queries. For example, if the first relevant document is at rank 1 for query A (RR=1.0), rank 3 for query B (RR=0.33), and rank 5 for query C (RR=0.2), then MRR = (1.0 + 0.33 + 0.2)/3 = 0.51. MRR is preferred over precision@k when you care most about whether the user finds a relevant result in the first few positions — it is the standard metric for question answering and factoid retrieval where only one relevant result is sufficient. Precision@k is better when users need multiple relevant results (e.g., search results page with 10 links). In practice, MRR@10 and precision@5 complement each other in a retrieval evaluation suite.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="rag08-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: How would you design an evaluation pipeline that runs on every RAG deployment?
  </summary>
  <div class="tp-qa-answer">
    <p>Create an EvaluationPipeline that: (1) loads a golden test set of 50-100 queries with ground truth answers and relevance annotations, (2) runs the RAG pipeline on each query, (3) computes retrieval metrics (precision@k, recall@k, MRR, NDCG), (4) computes generation metrics (faithfulness, answer relevance via RAGAS), (5) checks for regressions against the previous deployment's scores. Integrate this into CI/CD so every merge triggers a full evaluation run — block deployment if any metric drops below threshold. Output a structured JSON report comparing current vs previous scores. Store all evaluation runs in a time-series database for dashboard visualization. This catches quality regressions before they reach production users.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

<details data-qid="rag-s8-quiz1">
<summary><strong>1.</strong> Which RAGAS metric measures whether the response is supported by the context?</summary>
A. Answer relevancy
B. Faithfulness
C. Context precision
D. Context recall
Answer: B
</details>

<details data-qid="rag-s8-quiz2">
<summary><strong>2.</strong> What does MRR measure?</summary>
A. Average response quality
B. The reciprocal rank of the first relevant document
C. N-gram overlap with reference
D. Response latency
Answer: B
</details>

<details data-qid="rag-s8-quiz3">
<summary><strong>3.</strong> Which component of RAGAS evaluates whether the retrieved context covers the ground truth?</summary>
A. Faithfulness
B. Answer relevancy
C. Context precision
D. Context recall
Answer: D
</details>

<details data-qid="rag-s8-quiz4">
<summary><strong>4.</strong> What p-value threshold is commonly used for statistical significance in A/B tests?</summary>
A. p < 0.01
B. p < 0.05
C. p < 0.10
D. p < 0.50
Answer: B
</details>

<details data-qid="rag-s8-quiz5">
<summary><strong>5.</strong> Why track evaluation regression before deploying RAG changes?</summary>
A. To reduce API costs
B. To catch quality degradation before it affects users
C. To improve embedding speed
D. To reduce system complexity
Answer: B
</details>

## Exercises


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition1. Implement a full RAGAS evaluation on a RAG pipeline using 20 test queries with ground truth. Report faithfulness, answer relevancy, context precision, and context recall scores.

2. Build a retrieval evaluator that computes precision@1, precision@5, recall@5, MRR, and NDCG@10 for a BM25-based retriever. Test on 30 queries with manually annotated relevance judgments.

3. Create an A/B test comparing two chunking strategies (fixed-size 500 chars vs semantic chunking). Run on 50 queries, compute statistical significance, and determine the winner.

4. Implement a regression tracking system that stores evaluation history, detects regressions beyond a 5% threshold, and generates alerts. Simulate 5 pipeline versions with varying scores.

5. Build a custom faithfulness scorer using LLM-as-judge. Compare automatic scoring against human annotations on 20 RAG responses. Report precision and recall of the automati

## Revision Notes

- Key concept 1: Core principle of 12-rag-vector-databases
- Key concept 2: Common implementation pattern
- Key concept 3: Time/space complexity to remember
- Key concept 4: When to apply this technique
- Key concept 5: Common interview pattern
- Key concept 6: Edge cases to handle
- Key concept 7: Related concepts for deeper understanding

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of 12-rag-vector-databases. When would you choose one approach over another?
2. Design a system that efficiently handles 12-rag-vector-databases at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 12-rag-vector-databases. What was your approach and what was the result?
2. How would you explain 12-rag-vector-databases to a non-technical stakeholder?

#### Microsoft Style
1. How does 12-rag-vector-databases integrate with enterprise systems and cloud architectures?
2. What are the security implications of 12-rag-vector-databases?

#### NVIDIA Style
1. How would you optimize 12-rag-vector-databases for GPU-accelerated computing?
2. What parallel processing patterns apply to 12-rag-vector-databases?

#### AI Startup Style
1. How would you implement 12-rag-vector-databases in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 12-rag-vector-databases?

### Resume Tips
- **Technical Skills**: List 12-rag-vector-databases under relevant technical skills
- **Project Description**: "Implemented 12-rag-vector-databases to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 12-rag-vector-databases in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 12-rag-vector-databases
- [ ] Practice 3-5 problems related to 12-rag-vector-databases
- [ ] Prepare 2 real-world examples of using 12-rag-vector-databases
- [ ] Know the time/space complexity of common 12-rag-vector-databases operations
- [ ] Have questions ready about how the company uses 12-rag-vector-databasesc scorer.
