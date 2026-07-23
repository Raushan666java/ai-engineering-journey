<!-- Clear Language: Keep sentences under 50 words -->
# Evaluating Fine-Tuned Models

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand evaluation benchmarks for fine-tuned LLMs |
| LO2 | Implement perplexity, accuracy, and human evaluation |
| LO3 | Build task-specific evaluation pipelines |
| LO4 | Compare models before and after fine-tuning |

## Introduction

Fine-tuning adapts foundation models to your specific domain. LoRA, QLoRA, and DPO make this affordable. This module covers when to fine-tune, how to do it, and how to evaluate the results.




## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

## Theory

Understanding evaluating fine tuned models is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how evaluating fine tuned models works in practice.



## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 8.1 | Evaluation Framework | Metrics taxonomy, benchmark suites |
| 8.2 | Perplexity | Token-level probability, intrinsic evaluation |
| 8.3 | Task Accuracy | Classification, generation, extraction tasks |
| 8.4 | Human Evaluation | Rating scales, pairwise comparison, rubric |
| 8.5 | Benchmark Suites | MMLU, HellaSwag, HumanEval, GSM8K |
| 8.6 | Model Comparison | Before/after FT analysis, regression testing |

## Chapter Roadmap

```mermaid
flowchart TD
    subgraph Metrics
        P[Perplexity]
        A[Accuracy]
        H[Human Eval]
        B[Benchmark]
    end
    subgraph Pipeline
        M[Fine-tuned Model]
        T[Test Dataset]
        S[Scoring]
        R[Report]
    end
    subgraph Comparison
        B1[Base Model]
        B2[Fine-tuned]
        D[Delta Analysis]
    end
    M --> T --> S --> R
    B1 --> D
    B2 --> D
    B --> S
    P --> S
    A --> S
    H --> S
```text

## 8.1 Evaluation Framework

### 8.1.1 Metric Taxonomy

```python
from enum import Enum
from dataclasses import dataclass
from typing import List, Dict, Callable, Any


class MetricCategory(Enum):
    INTRINSIC = "intrinsic"
    EXTRINSIC = "extrinsic"
    AUTOMATIC = "automatic"
    HUMAN = "human"
    GENERATION = "generation"
    CLASSIFICATION = "classification"


@dataclass
class MetricDefinition:
    name: str
    category: MetricCategory
    description: str
    range: str
    higher_is_better: bool


class MetricRegistry:
    def __init__(self):
        self.metrics: Dict[str, MetricDefinition] = {}

    def register(self, metric: MetricDefinition):
        self.metrics[metric.name] = metric

    def get_task_metrics(self, task_type: str) -> List[MetricDefinition]:
        task_metrics = {
            "generation": ["perplexity", "rouge-l", "bleu", "bert_score"],
            "classification": ["accuracy", "f1", "precision", "recall"],
            "qa": ["exact_match", "f1_score", "has_answer"],
            "summarization": ["rouge-1", "rouge-2", "rouge-l", "bertscore"],
            "code": ["pass@1", "pass@10", "functional_correctness"],
        }

        metric_names = task_metrics.get(task_type, ["accuracy"])
        return [self.metrics.get(name) for name in metric_names if name in self.metrics]


registry = MetricRegistry()
for m in ["accuracy", "f1", "perplexity", "rouge-l", "exact_match"]:
    registry.register(MetricDefinition(m, MetricCategory.AUTOMATIC, f"{m} metric", "0-1 or 0-inf", True))
print(f"Task metrics for QA: {registry.get_task_metrics('qa')}")
```text

### 8.1.2 Evaluation Pipeline

```python
class EvaluationPipeline:
    def __init__(self):
        self.evaluators: Dict[str, Callable] = {}
        self.results: Dict[str, Any] = {}

    def register_evaluator(self, name: str, fn: Callable):
        self.evaluators[name] = fn

    def evaluate(self, model: Any, dataset: List[Dict]) -> Dict:
        for name, evaluator in self.evaluators.items():
            try:
                self.results[name] = evaluator(model, dataset)
            except Exception as e:
                self.results[name] = {"error": str(e)}
        return self.results

    def summary(self) -> Dict:
        return {
            name: result
            for name, result in self.results.items()
            if "error" not in result
        }


pipeline = EvaluationPipeline()
pipeline.register_evaluator("accuracy", lambda m, d: {"value": 0.85, "count": len(d)})
pipeline.register_evaluator("perplexity", lambda m, d: {"value": 8.3, "tokens": 5000})
results = pipeline.evaluate(None, [{"text": "test"} for _ in range(100)])
print(f"Summary: {pipeline.summary()}")
```text

## 8.2 Perplexity

### 8.2.1 Perplexity Calculator

```python
class PerplexityCalculator:
    def __init__(self, base: float = np.e):
        self.base = base

    def compute(self, logprobs: np.ndarray) -> float:
        avg_neg_log_likelihood = -np.mean(logprobs)
        return np.exp(avg_neg_log_likelihood)

    def token_level(self, logits: np.ndarray, labels: np.ndarray,
                    ignore_index: int = -100) -> float:
        losses = []
        for i in range(len(labels)):
            if labels[i] != ignore_index:
                logprob = logits[i, labels[i]] - np.log(np.sum(np.exp(logits[i])))
                losses.append(-logprob)

        if not losses:
            return float("inf")

        return np.exp(np.mean(losses))

    def batch_perplexity(self, sequences: List[Tuple[np.ndarray, np.ndarray]]) -> Dict:
        ppls = [self.token_level(logits, labels) for logits, labels in sequences]
        return {
            "mean_ppl": round(np.mean(ppls), 2),
            "median_ppl": round(np.median(ppls), 2),
            "min_ppl": round(np.min(ppls), 2),
            "max_ppl": round(np.max(ppls), 2),
            "std_ppl": round(np.std(ppls), 2),
        }


ppl_calc = PerplexityCalculator()
logprobs = np.array([-3.0, -2.5, -4.0, -3.2, -2.8])
print(f"Perplexity: {ppl_calc.compute(logprobs):.2f}")
```text

### 8.2.2 Validation Loss vs Perplexity

```python
class LossPPLAnalyzer:
    def analyze(self, losses: List[float]) -> Dict:
        ppls = [np.exp(l) for l in losses]

        return {
            "epochs": len(losses),
            "final_loss": round(losses[-1], 4),
            "final_ppl": round(ppls[-1], 2),
            "loss_delta": round(losses[0] - losses[-1], 4),
            "ppl_delta": round(ppls[0] - ppls[-1], 2),
            "improvement_pct": round((1 - ppls[-1] / ppls[0]) * 100, 1),
        }

    def estimate_data_quality(self, ppl: float) -> str:
        if ppl < 5:
            return "Excellent — model is very confident"
        elif ppl < 10:
            return "Good — reasonable confidence"
        elif ppl < 20:
            return "Moderate — room for improvement"
        else:
            return "Poor — model is uncertain"


analyzer = LossPPLAnalyzer()
losses = [2.5, 2.1, 1.8, 1.6, 1.5, 1.4, 1.35]
results = analyzer.analyze(losses)
print(f"Analysis: {results}")
```text

## 8.3 Task Accuracy

### 8.3.1 Classification Accuracy

```python
class ClassificationEvaluator:
    def accuracy(self, predictions: List[Any], targets: List[Any]) -> Dict:
        correct = sum(1 for p, t in zip(predictions, targets) if p == t)
        total = len(targets)

        return {
            "accuracy": correct / total if total > 0 else 0,
            "correct": correct,
            "total": total,
        }

    def f1_score(self, predictions: List[str], targets: List[str],
                 average: str = "macro") -> Dict:
        labels = set(targets)
        scores = {}

        for label in labels:
            tp = sum(1 for p, t in zip(predictions, targets) if p == label and t == label)
            fp = sum(1 for p, t in zip(predictions, targets) if p == label and t != label)
            fn = sum(1 for p, t in zip(predictions, targets) if p != label and t == label)

            precision = tp / (tp + fp) if (tp + fp) > 0 else 0
            recall = tp / (tp + fn) if (tp + fn) > 0 else 0
            f1 = 2 * precision * recall / (precision + recall) if (precision + recall) > 0 else 0

            scores[label] = {
                "precision": round(precision, 3),
                "recall": round(recall, 3),
                "f1": round(f1, 3),
            }

        avg_f1 = np.mean([s["f1"] for s in scores.values()])
        return {
            "per_label": scores,
            f"f1_{average}": round(avg_f1, 3),
        }

    def confusion_matrix(self, predictions: List[str],
                          targets: List[str]) -> Dict:
        labels = sorted(set(targets))
        matrix = {l: {l2: 0 for l2 in labels} for l in labels}

        for p, t in zip(predictions, targets):
            matrix[t][p] = matrix[t].get(p, 0) + 1

        return matrix


ce = ClassificationEvaluator()
preds = ["A", "B", "A", "B", "A"]
targets = ["A", "B", "A", "A", "A"]
print(f"Accuracy: {ce.accuracy(preds, targets)}")
print(f"F1: {ce.f1_score(preds, targets)}")
```text

### 8.3.2 Generation Task Evaluation

```python
class GenerationEvaluator:
    def exact_match(self, predictions: List[str], targets: List[str]) -> Dict:
        matches = sum(1 for p, t in zip(predictions, targets) if p.strip() == t.strip())
        return {
            "exact_match": matches / len(targets) if targets else 0,
            "matches": matches,
            "total": len(targets),
        }

    def contains_target(self, predictions: List[str], targets: List[str]) -> Dict:
        contains = sum(1 for p, t in zip(predictions, targets) if t.lower() in p.lower())
        return {
            "has_answer": contains / len(targets) if targets else 0,
            "contains": contains,
            "total": len(targets),
        }

    def rouge_l(self, prediction: str, target: str) -> float:
        pred_words = prediction.split()
        target_words = target.split()

        lcs = self._longest_common_subsequence(pred_words, target_words)
        if len(pred_words) == 0 or len(target_words) == 0:
            return 0.0

        precision = lcs / len(pred_words)
        recall = lcs / len(target_words)
        f1 = 2 * precision * recall / (precision + recall) if (precision + recall) > 0 else 0
        return f1

    def _longest_common_subsequence(self, a: List[str], b: List[str]) -> int:
        m, n = len(a), len(b)
        dp = [[0] * (n + 1) for _ in range(m + 1)]

        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if a[i - 1] == b[j - 1]:
                    dp[i][j] = dp[i - 1][j - 1] + 1
                else:
                    dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])

        return dp[m][n]


ge = GenerationEvaluator()
preds = ["The sky is blue.", "Python is a language."]
targets = ["sky is blue", "Python programming language"]
print(f"Exact match: {ge.exact_match(preds, targets)}")
print(f"ROUGE-L: {round(ge.rouge_l(preds[0], targets[0]), 3)}")
```text

## 8.4 Human Evaluation

### 8.4.1 Rating Scale

```python
class HumanEvaluationScale:
    def __init__(self, criteria: List[str] = None):
        self.criteria = criteria or ["relevance", "accuracy", "fluency", "completeness"]

    def score(self, response: str, rubric: Dict[str, str] = None) -> Dict:
        scores = {}
        for criterion in self.criteria:
            score = self._auto_score(criterion, response)
            scores[criterion] = {
                "score": score,
                "max": 5,
                "description": rubric.get(criterion, "") if rubric else "",
            }

        scores["average"] = round(np.mean([s["score"] for s in scores.values()]), 1)
        return scores

    def _auto_score(self, criterion: str, response: str) -> float:
        if criterion == "fluency":
            words = len(response.split())
            return min(words / 10, 5.0)
        elif criterion == "relevance":
            return 4.0 if len(response) > 20 else 3.0
        elif criterion == "accuracy":
            return 4.5 if response.endswith((".", "!")) else 3.5
        elif criterion == "completeness":
            return 4.0 if len(response.split(".")) > 1 else 2.0
        return 3.0

    def aggregate(self, all_scores: List[Dict]) -> Dict:
        agg = {}
        for criterion in self.criteria:
            scores = [s[criterion]["score"] for s in all_scores]
            agg[criterion] = {
                "mean": round(np.mean(scores), 2),
                "std": round(np.std(scores), 2),
                "min": min(scores),
                "max": max(scores),
            }
        return agg


hes = HumanEvaluationScale()
response = "This is a clear and accurate response about fine-tuning."
print(f"Human eval scores: {hes.score(response)}")
```text

### 8.4.2 Pairwise Comparison

```python
class PairwiseHumanEval:
    def __init__(self):
        self.comparisons: List[Dict] = []

    def compare(self, response_a: str, response_b: str,
                criteria: str = "overall") -> int:
        score_a = self._score(response_a)
        score_b = self._score(response_b)

        if score_a > score_b:
            result = 1  # A wins
        elif score_b > score_a:
            result = -1  # B wins
        else:
            result = 0  # tie

        self.comparisons.append({
            "criteria": criteria,
            "response_a": score_a,
            "response_b": score_b,
            "winner": result,
        })

        return result

    def _score(self, response: str) -> float:
        return len(response.split()) * 0.5 + (1.0 if response.endswith(".") else 0.0)

    def win_rate(self, model_a_name: str = "A") -> Dict:
        total = len(self.comparisons)
        if total == 0:
            return {"win_rate": 0, "total": 0}

        wins = sum(1 for c in self.comparisons if c["winner"] == 1)
        losses = sum(1 for c in self.comparisons if c["winner"] == -1)
        ties = sum(1 for c in self.comparisons if c["winner"] == 0)

        return {
            f"{model_a_name}_wins": wins,
            "losses": losses,
            "ties": ties,
            "win_rate": round(wins / total * 100, 1),
        }


phe = PairwiseHumanEval()
phe.compare("A short response", "A much longer and more detailed answer here.")
phe.compare("Good", "Excellent and comprehensive response.")
print(f"Win rate: {phe.win_rate('Model')}")
```text

## 8.5 Benchmark Suites

### 8.5.1 Benchmark Registry

```python
class BenchmarkRegistry:
    def __init__(self):
        self.benchmarks = {
            "MMLU": {
                "task": "multiple_choice_qa",
                "categories": ["STEM", "humanities", "social_sciences"],
                "num_questions": 14000,
                "metric": "accuracy",
            },
            "HellaSwag": {
                "task": "sentence_completion",
                "categories": ["commonsense"],
                "num_questions": 10000,
                "metric": "accuracy",
            },
            "HumanEval": {
                "task": "code_generation",
                "categories": ["coding"],
                "num_questions": 164,
                "metric": "pass@1",
            },
            "GSM8K": {
                "task": "math_word_problems",
                "categories": ["math", "reasoning"],
                "num_questions": 8500,
                "metric": "accuracy",
            },
            "TruthfulQA": {
                "task": "qa",
                "categories": ["truthfulness"],
                "num_questions": 817,
                "metric": "truthfulness_score",
            },
        }

    def list_benchmarks(self) -> List[str]:
        return list(self.benchmarks.keys())

    def describe(self, name: str) -> Dict:
        return self.benchmarks.get(name, {})

    def recommend(self, task_type: str) -> List[str]:
        recommendations = {
            "reasoning": ["MMLU", "GSM8K"],
            "coding": ["HumanEval"],
            "commonsense": ["HellaSwag"],
            "truthfulness": ["TruthfulQA"],
            "general": ["MMLU", "HellaSwag", "TruthfulQA"],
        }
        return recommendations.get(task_type, ["MMLU"])


bm_registry = BenchmarkRegistry()
print(f"Recommended for reasoning: {bm_registry.recommend('reasoning')}")
```text

### 8.5.2 Benchmark Runner

```python
class BenchmarkRunner:
    def __init__(self):
        self.results: Dict[str, Dict] = {}

    def run(self, model: Any, benchmark_name: str,
            questions: List[Dict]) -> Dict:
        correct = 0
        total = len(questions)

        for q in questions:
            answer = self._query_model(model, q["question"])
            if self._check_answer(answer, q["answer"]):
                correct += 1

        accuracy = correct / total if total > 0 else 0
        self.results[benchmark_name] = {
            "accuracy": round(accuracy, 3),
            "correct": correct,
            "total": total,
        }
        return self.results[benchmark_name]

    def _query_model(self, model: Any, question: str) -> str:
        return "A"

    def _check_answer(self, predicted: str, expected: str) -> bool:
        return predicted.strip().upper() == expected.strip().upper()

    def summary(self) -> Dict:
        return {
            "benchmarks": self.results,
            "average_accuracy": round(
                np.mean([r["accuracy"] for r in self.results.values()]), 3
            ) if self.results else 0,
        }


runner = BenchmarkRunner()
questions = [{"question": f"Q{i}", "answer": "A"} for i in range(100)]
runner.run(None, "MMLU", questions)
print(f"Benchmark summary: {runner.summary()}")
```text

## 8.6 Model Comparison

### 8.6.1 Before/After Analysis

```python
class ModelComparison:
    def __init__(self):
        self.metrics: Dict[str, Dict[str, float]] = {}

    def add_metric(self, name: str, before: float, after: float):
        self.metrics[name] = {
            "before": before,
            "after": after,
            "delta": round(after - before, 3),
            "delta_pct": round((after - before) / abs(before) * 100, 1) if before != 0 else 0,
            "improved": after > before,
        }

    def summary(self) -> Dict:
        total = len(self.metrics)
        improved = sum(1 for m in self.metrics.values() if m["improved"])
        regressed = sum(1 for m in self.metrics.values() if not m["improved"] and m["delta"] != 0)

        return {
            "metrics_evaluated": total,
            "improved": improved,
            "regressed": regressed,
            "unchanged": total - improved - regressed,
            "details": self.metrics,
        }

    def regression_check(self, tolerance: float = 0.01) -> List[str]:
        regressions = []
        for name, data in self.metrics.items():
            if data["delta"] < -tolerance:
                regressions.append(f"{name}: {data['before']} -> {data['after']} ({data['delta_pct']}%)")
        return regressions


comparison = ModelComparison()
comparison.add_metric("MMLU", 0.723, 0.745)
comparison.add_metric("HellaSwag", 0.812, 0.835)
comparison.add_metric("GSM8K", 0.523, 0.491)  # regression in math
print(f"Summary: {comparison.summary()}")
print(f"Regressions: {comparison.regression_check(tolerance=0.01)}")
```text

### 8.6.2 Evaluation Report

```python
class EvaluationReport:
    def __init__(self, model_name: str, base_model: str):
        self.model_name = model_name
        self.base_model = base_model
        self.sections: Dict[str, Any] = {}

    def add_section(self, name: str, data: Any):
        self.sections[name] = data

    def generate(self) -> Dict:
        return {
            "model": self.model_name,
            "base_model": self.base_model,
            "sections": self.sections,
            "verdict": self._verdict(),
        }

    def _verdict(self) -> str:
        improvements = []
        regressions = []

        for section, data in self.sections.items():
            if isinstance(data, dict):
                for metric, values in data.items():
                    if isinstance(values, dict) and "improved" in values:
                        if values["improved"]:
                            improvements.append(metric)
                        else:
                            regressions.append(metric)

        if regressions:
            return f"PASS with caveats. Regressions in: {', '.join(regressions[:3])}"
        elif improvements:
            return "PASS. Improvements across all metrics."
        return "INCONCLUSIVE. No clear improvement pattern."

    def save(self, path: str):
        import json
        with open(path, "w") as f:
            json.dump(self.generate(), f, indent=2)


report = EvaluationReport("fine-tuned-v1", "base-7b")
report.add_section("benchmarks", {
    "mmlu": {"before": 0.72, "after": 0.74, "improved": True},
    "gsm8k": {"before": 0.52, "after": 0.49, "improved": False},
})
print(f"Verdict: {report.generate()['verdict']}")
```text

## Summary

Evaluating fine-tuned models requires a multi-faceted approach combining intrinsic metrics (perplexity), task-specific metrics (accuracy, F1, exact match, ROUGE-L), and human evaluation (rating scales,.
pairwise comparison). Perplexity measures how well the model predicts tokens — lower is better, with good models achieving <10 on validation data. Task accuracy varies by domain: classification tasks use accuracy/F1,.
generation tasks use exact match/ROUGE-L, and math tasks use exact match on final answers. Standardized benchmarks (MMLU, HellaSwag, HumanEval, GSM8K, TruthfulQA) enable comparison across models and.
fine-tuning runs. The most critical analysis is before/after comparison: verify that fine-tuning improves target metrics while not regressing on unrelated capabilities. A regression test with tolerance (typically 1-2%) should be part of every evaluation pipeline.

## Practical Takeaways

| Takeaway | Description |
|----------|-------------|
| Measure perplexity during training | Early indicator of overfitting if val perplexity increases |
| Use multiple benchmarks | Single benchmark can be misleading |
| Always compare against base model | Ensures fine-tuning adds value |
| Check for regressions | Fine-tuning can degrade unrelated capabilities |
| Automate evaluation | Manual evaluation doesn't scale — build pipeline |
| Report confidence intervals | Metrics on small test sets have high variance |

## Interview Q&A

<details class="tp-qa-card" data-qid="ft08-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: What evaluation benchmarks are used for fine-tuned LLMs?
  </summary>
  <div class="tp-qa-answer">
<p>Common evaluation benchmarks for fine-tuned LLMs: (1) Knowledge and reasoning — MMLU (57 subjects, multiple choice), ARC (science questions), HellaSwag (commonsense reasoning),.
GSM8K (math word problems), BIG-Bench (200+ diverse tasks). These measure general capability regression after fine-tuning; (2) Instruction following — MT-Bench (multi-turn,.
GPT-4 judged), AlpacaEval (single-turn, win rate vs reference), Chatbot Arena (human preference rankings); (3) Task-specific — for a custom fine-tuned model,.
create a domain-specific test set with ground truth labels. Metrics depend on task type: accuracy/ F1 for classification, ROUGE/BLEU for summarization,.
exact match for extraction, pass@k for code generation; (4) Safety — TruthfulQA (truthfulness), ToxicChat (toxicity detection), adversarial robustness tests; (5) Language quality — perplexity on a held-out corpus,.
grammaticality scores, repetition rates. For production evaluation, select 3-5 benchmarks most relevant to the target use case plus 1-2 general benchmarks to catch regression. Run evaluations before and.
after fine-tuning to measure improvement and detect degradation. Standardized evaluation libraries (lm-evaluation-harness, DeepEval, LangSmith) provide consistent benchmarking across models.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft08-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: How do you implement perplexity evaluation?
  </summary>
  <div class="tp-qa-answer">
<p>Perplexity measures how well a model predicts a text sequence — lower perplexity means better prediction. Implementation: (1) load the model in evaluation mode (<code>model.eval()</code>) and.
tokenize the evaluation text with <code>return_tensors="pt"</code>; (2) run forward pass with <code>torch.no_grad()</code> — the model returns logits of shape (batch, seq_len,.
vocab_size); (3) compute cross-entropy loss per token using <code>CrossEntropyLoss()</code> — shift logits and labels so logits[i] predicts labels[i+1]; (4) exclude padding tokens from the loss calculation (set label = -100 for.
padding); (5) perplexity = <code>exp(loss)</code>. For fine-tuning evaluation: compare perplexity on a domain-specific test set before and after fine-tuning. A perplexity decrease of 10-30% is typical for.
successful fine-tuning. Caveats: perplexity doesn't always correlate with task performance — a model can have low perplexity but produce incorrect or.
repetitive outputs. Use perplexity as a diagnostic tool (detect overfitting: perplexity divergence between train and test) combined with task-specific metrics. For.
large evaluation corpora, process in chunks (sliding window approach) to handle sequences longer than the model's context length, then average the per-token loss across all chunks.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft08-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: How do you implement task-specific accuracy evaluation?
  </summary>
  <div class="tp-qa-answer">
<p>Task-specific accuracy evaluation measures how well a fine-tuned model performs on the target task. Implementation: (1) create a test set of (input,.
expected_output) pairs that was never used during training or validation; (2) for each test example, generate the model's output using the same inference parameters as production (temperature,.
top_p, max_tokens); (3) compare model output against expected output using the appropriate metric — for classification: exact match accuracy, precision/recall/F1; for.
extraction: exact match of extracted entities; for summarization: ROUGE-L (longest common subsequence), ROUGE-1/2 (unigram/bigram overlap), BERTScore (semantic similarity using embeddings); for.
code generation: pass@k (compile + pass unit tests); for QA: exact match, F1 of token overlap; (4) aggregate metrics across the test set. Important: use a held-out test set that was never used during training or.
hyperparameter tuning. If the test set accuracy is much higher than validation accuracy, the test set may have leaked into training. Track accuracy trends across training runs to guide improvements. For.
production-grade evaluation, use statistical significance testing (bootstrap or permutation test) to determine if accuracy improvements are real or due to chance.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft08-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: How do you implement human evaluation for fine-tuned models?
  </summary>
  <div class="tp-qa-answer">
<p>Human evaluation for fine-tuned models involves human raters assessing output quality across multiple dimensions. Implementation: (1) Sampling — select 100-500 representative test cases covering all major.
use case categories and difficulty levels; (2) Response generation — for each test case, generate responses from both the previous model (baseline) and.
the new fine-tuned model, shuffled to avoid position bias; (3) Rating dimensions — helpfulness (1-5 Likert), accuracy (1-5), format compliance (binary),.
safety (binary); (4) Rater selection — use trained raters who understand the task domain. For each test case, have 3 raters evaluate independently and.
use majority vote or average score; (5) Analysis — calculate win rate (percentage of cases where the new model is preferred),.
average scores per dimension, inter-rater agreement (Krippendorff's alpha, target > 0.7); (6) Statistical significance — use bootstrap resampling to compute confidence intervals for.
win rate. Human evaluation is expensive ($500-2000 per evaluation round for 200 examples) but catches quality issues that automated metrics miss. For.
cheaper alternatives: use LLM-as-judge (GPT-4 evaluating responses) which correlates reasonably well with human judgments for most dimensions, or use the Chatbot Arena methodology for.
crowdsourced preferences.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft08-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: How do you build a task-specific evaluation pipeline?
  </summary>
  <div class="tp-qa-answer">
<p>A task-specific evaluation pipeline automates model evaluation on the target task. Components: (1) Test dataset — collection of (input, expected_output) pairs representing the production distribution. Organize by difficulty (easy,.
medium, hard) and category; (2) Model runner — loads the fine-tuned model, generates responses with consistent inference parameters. Support batch processing for.
efficiency. Log all outputs with timing and token counts; (3) Metric calculator — implements task-specific metrics (accuracy, F1, ROUGE, BERTScore, exact match,.
pass@k). For open-ended generation, include LLM-as-judge evaluator that scores responses on helpfulness and correctness; (4) Comparison engine — runs the same test set on the baseline model (pre-fine-tuning) and.
the new model, producing side-by-side comparison tables; (5) Report generator — produces a structured evaluation report with: metric tables (model A vs model B per category),.
win/lose/tie breakdown, statistical significance, examples of wins and losses, and trend line compared to previous evaluations. The pipeline is automated as a CI step after each training run. A quality gate compares metrics against minimum thresholds — if the new model doesn't improve or.
regresses, the pipeline fails and alerts the team.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft08-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: How do you compare models before and after fine-tuning?
  </summary>
  <div class="tp-qa-answer">
<p>Comparing models before and after fine-tuning requires testing on the same benchmarks. Comparison framework: (1) Baseline metrics — evaluate the base model (before fine-tuning) on task-specific test sets and.
general benchmarks (MMLU, HellaSwag). Use consistent prompting (zero-shot or few-shot) as specified by the benchmark; (2) Post-fine-tuning metrics — evaluate the fine-tuned model on the same test sets and.
benchmarks. Use the same evaluation settings (temperature=0 for deterministic evaluation); (3) Comparison analysis — create a delta table showing improvement per metric. Task-specific metrics should improve significantly (10-50% relative),.
while general benchmarks should not degrade more than 2-3%; (4) Visualization — radar chart comparing pre/post scores across dimensions (accuracy, speed,.
cost, safety, format compliance). Bar chart of win/tie/loss per test category; (5) Qualitative analysis — sample 20-50 examples where the fine-tuned model improved or.
regressed significantly. Analyze patterns — is the model better at certain types of queries but worse at others? The goal of comparison is not just to confirm the fine-tuned model is better,.
but to understand how and where it changed. This guides next steps: if the model improved on the target task but.
regressed on general knowledge, incorporate more diverse training data. Document all comparison results in the model card.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft08-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: How do you implement LLM-as-judge evaluation?
  </summary>
  <div class="tp-qa-answer">
<p>LLM-as-judge uses a strong model (GPT-4, Claude) to evaluate responses from the fine-tuned model. Implementation: (1) Define evaluation criteria — create a scoring rubric with 3-5 dimensions (correctness,.
helpfulness, conciseness, format compliance) and clear score anchors (1=poor, 5=excellent with examples per score); (2) Create the judge prompt — include the user query,.
the model's response, and the scoring rubric. Ask the judge to provide scores with justification in a structured JSON format: <code>{"scores": {"correctness": 4,.
"helpfulness": 5}, "justification": "...", "overall": 4.5}</code>; (3) Batch evaluation — send all test examples to the judge model. Use concurrent API calls with rate limiting;.
(4) Aggregate scores — compute average scores per dimension and overall; (5) Side-by-side comparison — present two responses (baseline vs fine-tuned) to the judge and.
ask which is better (win/tie/loss). This provides a stronger signal than absolute scoring. LLM-as-judge correlates well with human judgments (0.7-0.9 Spearman correlation) for.
most dimensions. Biases to be aware of: position bias (prefers first response), verbosity bias (prefers longer responses), self-enhancement bias (GPT-4 prefers GPT-4 style). Mitigate by: swapping response order and.
averaging, controlling for response length, and using a different judge model than the one being evaluated.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft08-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: How do you evaluate safety and alignment after fine-tuning?
  </summary>
  <div class="tp-qa-answer">
<p>Safety evaluation after fine-tuning checks that the model hasn't lost its safety guardrails. Evaluation methods: (1) Adversarial testing — use a curated set of harmful prompts (hate speech,.
illegal activities, self-harm, explicit content). The model should refuse all such requests. Measure refusal rate — target 100% for critical categories;.
(2) Jailbreak testing — test with common jailbreak patterns (role-playing, hypothetical scenarios, encoding tricks). The model should not be tricked into generating harmful content;.
(3) Bias evaluation — test for demographic bias using tools like WinoBias or BBQ. Compare bias scores before and after fine-tuning;.
(4) Truthfulness — use TruthfulQA benchmark to measure the model's tendency to produce false statements. Fine-tuning on domain-specific data may increase hallucination risk if the model over-asserts;.
(5) Prompt injection — test if the model follows instructions embedded in user-provided text (indirect injection). The model should prioritize system-level safety instructions. If fine-tuning reduces safety metrics,.
mitigation strategies include: mixing safety data into the fine-tuning dataset, applying DPO on safety preference pairs after fine-tuning, or using a safety filter as a post-processing step. Regular safety evaluation (weekly or.
per training run) is essential for production models.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft08-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: How do you integrate evaluation into the training pipeline?
  </summary>
  <div class="tp-qa-answer">
<p>Integrating evaluation into the training pipeline creates an automated feedback loop. Implementation: (1) Pre-training validation — before training starts, run evaluation on the base model to establish baseline scores. Store in a metric database;.
(2) During training — use the HuggingFace Trainer's <code>evaluation_strategy="steps"</code> or <code>"epoch"</code> to run validation set evaluation at regular intervals. Log loss curves and.
task-specific validation metrics to WandB or TensorBoard; (3) Post-training evaluation — after training completes, run the full evaluation suite (task-specific, general benchmarks,.
safety, human eval if available). Compare against baseline; (4) Quality gate — define minimum improvement thresholds. For example: task accuracy must improve by >5%,.
general benchmark regression must be <3%, safety refusal rate must remain at 100%. If thresholds are not met, the pipeline fails;.
(5) Model registry — for passing models, save evaluation results to the model registry (MLflow, HuggingFace Hub) alongside model weights. Include model card with all metrics;.
(6) CI integration — trigger evaluation automatically on each training run. Send results to Slack/email. Use the evaluation results to decide whether to deploy,.
rollback, or refine training. This pipeline ensures every model version is validated before reaching users and provides a clear audit trail of model quality over time.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft08-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: How do you handle evaluation when the model outputs are subjective?
  </summary>
  <div class="tp-qa-answer">
<p>Subjective evaluation (for open-ended generation, creative writing, brainstorming) requires methods beyond exact match metrics: (1) Rubric-based scoring — define a detailed scoring rubric with specific criteria (relevance,.
creativity, structure, engagement) and score levels (1-4 with behavioral anchors). Each criterion is scored independently. Multiple raters (3-5 per example) provide reliability;.
(2) Pairwise comparison — present two model outputs (A and B) to judges and ask which is better. This avoids absolute scoring issues. Use Bradley-Terry models to compute a quality score from many pairwise comparisons;.
(3) LLM-as-judge with chain-of-thought — the judge model provides step-by-step reasoning before giving a score, improving evaluation quality for subjective dimensions. Use multi-dimensional scoring (separate scores for.
different aspects); (4) User satisfaction metrics — track real-world user signals: thumbs up/down rates, response copy rate, follow-up question rate, session duration. These are ultimately the most meaningful metrics for.
subjective quality; (5) A/B testing — deploy the fine-tuned model to 10% of users and compare against the baseline for the remaining 90%. Measure user engagement and.
satisfaction metrics over 1-2 weeks. For subjective evaluation, combine automated metrics (for consistency and speed) with human evaluation (for validity). Run automated evaluation daily and.
human evaluation weekly, using automated results as a leading indicator for human-evaluated quality.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

<details data-qid="ft-s8-quiz1">
<summary><strong>1.</strong> What does perplexity measure?</summary>
A. Model size
B. How well the model predicts tokens (lower is better)
C. Response length
D. Training speed
Answer: B
</details>

<details data-qid="ft-s8-quiz2">
<summary><strong>2.</strong> What metric is commonly used for summarization evaluation?</summary>
A. ROUGE-L
B. MAE
C. RMSE
D. Pass@1
Answer: A
</details>

<details data-qid="ft-s8-quiz3">
<summary><strong>3.</strong> Why compare fine-tuned model against base model?</summary>
A. To check training speed
B. To verify fine-tuning added value and didn't regress capabilities
C. To measure GPU usage
D. To format output
Answer: B
</details>

<details data-qid="ft-s8-quiz4">
<summary><strong>4.</strong> What should you do when fine-tuning causes regression on a benchmark?</summary>
A. Ignore it
B. Investigate and consider adjusting training data or hyperparameters
C. Delete the model
D. Report only the improved metrics
Answer: B
</details>

<details data-qid="ft-s8-quiz5">
<summary><strong>5.</strong> How many questions does MMLU contain?</summary>
A. 1,000
B. 14,000
C. 100,000
D. 500
Answer: B
</details>

## Exercises


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition1. Implement a perplexity calculator. Generate 3 sequences of token logprobs and compute perplexity for each. Identify which sequence the model is most confident about.

2. Build a classification evaluator with accuracy, precision, recall, and F1 for each class. Test with 5 classes and 100 predictions.

3. Create a ROUGE-L calculator from scratch using LCS. Test with 3 pairs of prediction/target and report ROUGE-L F1 scores.

4. Implement a before/after model comparison. Given 5 metrics with before and after values, identify improvements, regressions, and generate a verdict.

5. Build a benchmark runner that evaluates a model on MMLU (multiple choice) and GSM8K (math). Report accuracy for each and overall

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
1. Explain the time and space trade-offs of 14-fine-tuning-peft. When would you choose one approach over another?
2. Design a system that efficiently handles 14-fine-tuning-peft at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 14-fine-tuning-peft. What was your approach and what was the result?
2. How would you explain 14-fine-tuning-peft to a non-technical stakeholder?

#### Microsoft Style
1. How does 14-fine-tuning-peft integrate with enterprise systems and cloud architectures?
2. What are the security implications of 14-fine-tuning-peft?

#### NVIDIA Style
1. How would you optimize 14-fine-tuning-peft for GPU-accelerated computing?
2. What parallel processing patterns apply to 14-fine-tuning-peft?

#### AI Startup Style
1. How would you implement 14-fine-tuning-peft in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 14-fine-tuning-peft?

### Resume Tips
- **Technical Skills**: List 14-fine-tuning-peft under relevant technical skills
- **Project Description**: "Implemented 14-fine-tuning-peft to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 14-fine-tuning-peft in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 14-fine-tuning-peft
- [ ] Practice 3-5 problems related to 14-fine-tuning-peft
- [ ] Prepare 2 real-world examples of using 14-fine-tuning-peft
- [ ] Know the time/space complexity of common 14-fine-tuning-peft operations
- [ ] Have questions ready about how the company uses 14-fine-tuning-peft average.


## Difficulty Level

**Level**: Intermediate
**Estimated Study Time**: 30-45 minutes
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

- How this connects to Fine-Tuning with PEFT fundamentals
- Prerequisites for advanced topics in this module
- Real-world applications in AI engineering systems
- Interview questions that test deep understanding

## FAQs

**Q: How long does it take to master evaluating fine tuned models?
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

Understanding the evolution of evaluating fine tuned models helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

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

For AI engineering, understanding evaluating fine tuned models at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of evaluating fine tuned models like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply evaluating fine tuned models concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of evaluating fine tuned models?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply evaluating fine tuned models in real systems?
**Answer**: When building production AI systems that require reliability, scalability, and maintainability.

**Card 3**: What are the common pitfalls to avoid?
**Answer**: Over-engineering, ignoring edge cases, and not considering production requirements.

## Study Plan

**Day 1**: Read theory and review examples (12 minutes)
**Day 2**: Complete exercises and practice (12 minutes)
**Day 3**: Review flashcards and take quiz (6 minutes)

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
1. What is the core concept of Fine-Tuning with PEFT?
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

After mastering Fine-Tuning with PEFT, continue to the next module in the curriculum to build upon these foundations and deepen your AI engineering expertise.

## Training Workflow

1. **Data Preparation**: Collect, clean, and preprocess data
2. **Model Selection**: Choose architecture based on task requirements
3. **Training Loop**: Forward pass, loss computation, backpropagation
4. **Validation**: Evaluate on held-out data to prevent overfitting
5. **Hyperparameter Tuning**: Optimize learning rate, batch size, etc.
6. **Model Export**: Save trained model for deployment

## Limitations

Every approach has trade-offs. Understanding limitations helps you make better architectural decisions and answer interview questions about when NOT to use a particular technique.
