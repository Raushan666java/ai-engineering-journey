# When to Fine-Tune

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand when to fine-tune vs. use prompting or RAG |
| LO2 | Analyze cost-benefit trade-offs of fine-tuning |
| LO3 | Evaluate data requirements for successful fine-tuning |
| LO4 | Identify scenarios where fine-tuning is not appropriate |

## Introduction

Understanding when to fine tune is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering when to fine tune.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures


## Theory

Understanding when to fine tune is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how when to fine tune works in practice.

### Key Concepts

- **Core Principle**: The foundational idea behind when to fine tune
- **How It Works**: The mechanism and process involved
- **Why It Matters**: Relevance to AI engineering and real-world applications
- **Trade-offs**: Advantages and limitations to consider

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 1.1 | Decision Framework | FT vs RAG vs prompting decision tree |
| 1.2 | Cost-Benefit | Training cost, inference cost, quality gains |
| 1.3 | Data Requirements | Dataset size, quality, labeling needs |
| 1.4 | When Not to FT | Overkill scenarios, high cost, data scarcity |

## Chapter Roadmap

```mermaid
flowchart TD
    Q[Need to improve model?]
    P[Prompting enough?]
    R[RAG enough?]
    FT[Fine-Tune]
    D[Decision]
    Q -->|Yes| P
    P -->|Yes| D
    P -->|No| R
    R -->|Yes| D
    R -->|No| FT
    FT -->|Check| C[Cost-Benefit]
    C -->|Worth it| GO[Proceed]
    C -->|Not worth| STOP[Alternative]
```text

## 1.1 Decision Framework

Choosing between prompting, RAG, and fine-tuning depends on the task requirements.

```python
from enum import Enum
from dataclasses import dataclass
from typing import List, Optional


class Approach(Enum):
    PROMPTING = "prompting"
    RAG = "rag"
    FINE_TUNING = "fine-tuning"
    ENSEMBLE = "ensemble"


@dataclass
class TaskProfile:
    task_name: str
    domain_specificity: float  # 0.0 (general) to 1.0 (very specific)
    accuracy_requirement: float  # 0.0 to 1.0
    data_availability: float  # 0.0 (none) to 1.0 (abundant)
    latency_sensitivity: float  # 0.0 (lenient) to 1.0 (critical)
    cost_sensitivity: float  # 0.0 (ignore cost) to 1.0 (very cost-sensitive)
    expected_query_volume: int  # queries per day


class ApproachRecommender:
    def __init__(self):
        self.weights = {
            "domain_specificity": 0.25,
            "accuracy_requirement": 0.25,
            "data_availability": 0.20,
            "latency_sensitivity": 0.15,
            "cost_sensitivity": 0.15,
        }

    def recommend(self, profile: TaskProfile) -> Approach:
        scores = {approach: 0.0 for approach in Approach}

        scores[Approach.PROMPTING] = self._score_prompting(profile)
        scores[Approach.RAG] = self._score_rag(profile)
        scores[Approach.FINE_TUNING] = self._score_fine_tuning(profile)

        best = max(scores, key=scores.get)
        return best

    def _score_prompting(self, profile: TaskProfile) -> float:
        score = 0.0
        if profile.domain_specificity < 0.4:
            score += 0.8
        if profile.accuracy_requirement < 0.6:
            score += 0.7
        if profile.latency_sensitivity > 0.7:
            score += 0.6
        if profile.cost_sensitivity > 0.7:
            score += 0.9
        return score

    def _score_rag(self, profile: TaskProfile) -> float:
        score = 0.0
        if 0.3 <= profile.domain_specificity <= 0.7:
            score += 0.7
        if profile.accuracy_requirement > 0.5:
            score += 0.6
        if profile.data_availability > 0.5:
            score += 0.8
        if profile.latency_sensitivity < 0.6:
            score += 0.5
        return score

    def _score_fine_tuning(self, profile: TaskProfile) -> float:
        score = 0.0
        if profile.domain_specificity > 0.6:
            score += 0.9
        if profile.accuracy_requirement > 0.7:
            score += 0.8
        if profile.data_availability > 0.6:
            score += 0.9
        if profile.latency_sensitivity < 0.5:
            score += 0.4
        if profile.expected_query_volume > 1000:
            score += 0.6
        return score


recommender = ApproachRecommender()
profile = TaskProfile(
    task_name="legal document classification",
    domain_specificity=0.85,
    accuracy_requirement=0.95,
    data_availability=0.7,
    latency_sensitivity=0.3,
    cost_sensitivity=0.4,
    expected_query_volume=5000,
)
print(f"Recommended approach: {recommender.recommend(profile).value}")
```text

### 1.1.1 Decision Tree Implementation

```python
class FineTuneDecisionTree:
    def decide(self, profile: TaskProfile) -> dict:
        reasons = []
        approach = None

        if profile.domain_specificity < 0.3:
            if profile.data_availability < 0.3:
                approach = "prompting"
                reasons.append("General domain, no data — prompting suffices")
            else:
                approach = "rag"
                reasons.append("General domain with data — RAG is cost-effective")
        elif profile.domain_specificity < 0.6:
            if profile.accuracy_requirement > 0.8:
                approach = "fine-tuning"
                reasons.append("Moderate domain specificity with high accuracy needs")
            else:
                approach = "rag"
                reasons.append("Moderate domain, moderate accuracy — RAG optimal")
        else:
            if profile.data_availability > 0.5:
                approach = "fine-tuning"
                reasons.append("High domain specificity with sufficient data")
            else:
                approach = "rag"
                reasons.append("High domain specificity but limited data — use RAG with FT later")

        if profile.expected_query_volume > 10000 and profile.cost_sensitivity < 0.5:
            approach = "fine-tuning"
            reasons.append("High volume justifies FT investment")

        return {
            "recommendation": approach,
            "reasons": reasons,
            "profile": profile,
        }


tree = FineTuneDecisionTree()
decision = tree.decide(profile)
print(f"Decision: {decision['recommendation']}")
```text

## 1.2 Cost-Benefit Analysis

### 1.2.1 Cost Calculator

```python
class FineTuneCostCalculator:
    def __init__(self):
        self.gpu_costs = {
            "A100-80GB": 3.50,
            "A10G-24GB": 1.50,
            "T4-16GB": 0.50,
            "L4-24GB": 0.80,
        }

    def estimate_training(self, model_size_b: float, num_epochs: int,
                          dataset_size: int, gpu_type: str = "A100-80GB") -> dict:
        gpu_rate = self.gpu_costs.get(gpu_type, 1.0)
        tokens_per_epoch = dataset_size * 1000  # rough estimate
        gpu_hours = (model_size_b * tokens_per_epoch * num_epochs) / 1e9 * 0.5

        cost = gpu_hours * gpu_rate
        return {
            "model_size_b": model_size_b,
            "total_tokens_processed": tokens_per_epoch * num_epochs,
            "gpu_hours": round(gpu_hours, 2),
            "gpu_type": gpu_type,
            "training_cost": round(cost, 2),
        }

    def estimate_inference(self, model_size_b: float, queries_per_day: int,
                           days: int = 30) -> dict:
        inference_api_cost = model_size_b * 0.002
        total = inference_api_cost * queries_per_day * days
        return {
            "cost_per_query": round(inference_api_cost, 4),
            "queries_per_day": queries_per_day,
            "monthly_cost": round(total, 2),
            "three_month_cost": round(total * 3, 2),
        }

    def break_even(self, ft_cost: float, cost_saving_per_query: float) -> dict:
        queries_to_break_even = ft_cost / cost_saving_per_query if cost_saving_per_query > 0 else float("inf")
        return {
            "ft_cost": ft_cost,
            "saving_per_query": cost_saving_per_query,
            "break_even_queries": int(queries_to_break_even),
        }


calc = FineTuneCostCalculator()
training = calc.estimate_training(model_size_b=7, num_epochs=3, dataset_size=10000)
inference = calc.estimate_inference(model_size_b=7, queries_per_day=5000)
be = calc.break_even(training["training_cost"], 0.001)

print(f"Training cost: ${training['training_cost']}")
print(f"Monthly inference cost: ${inference['monthly_cost']}")
print(f"Break-even: {be['break_even_queries']} queries")
```text

### 1.2.2 ROI Analysis

```python
@dataclass
class ROIAnalysis:
    approach: str
    training_cost: float
    monthly_inference_cost: float
    quality_score: float  # 0-100
    latency_ms: float
    time_to_deploy_days: int

    def roi_score(self) -> float:
        total_cost = self.training_cost + self.monthly_inference_cost * 6
        return (self.quality_score * 10) / (total_cost * self.latency_ms / 1000)


def compare_approaches() -> list:
    approaches = [
        ROIAnalysis("Prompting", 0, 500, 70, 200, 1),
        ROIAnalysis("RAG", 200, 600, 82, 500, 5),
        ROIAnalysis("Fine-Tuning (LoRA)", 1500, 300, 92, 150, 10),
        ROIAnalysis("Full Fine-Tuning", 8000, 250, 95, 120, 20),
    ]

    for a in approaches:
        print(f"{a.approach:25s} | ROI: {a.roi_score():.2f} | Quality: {a.quality_score} | Cost: ${a.training_cost}")
    return approaches


compare_approaches()
```text

## 1.3 Data Requirements

### 1.3.1 Data Size Estimator

```python
class DataRequirementEstimator:
    def __init__(self):
        self.guidelines = {
            "task_adaptation": {"min_examples": 100, "recommended": 1000, "high_quality": 500},  # LoRA
            "domain_adaptation": {"min_examples": 500, "recommended": 5000, "high_quality": 2000},
            "full_ft_task": {"min_examples": 1000, "recommended": 10000, "high_quality": 5000},
            "instruction_tuning": {"min_examples": 1000, "recommended": 10000, "high_quality": 5000},
            "preference_tuning": {"min_examples": 500, "recommended": 5000, "high_quality": 2000},
        }

    def estimate(self, scenario: str, quality: str = "recommended") -> dict:
        guide = self.guidelines.get(scenario, self.guidelines["task_adaptation"])
        return {
            "scenario": scenario,
            "estimated_examples": guide[quality],
            "estimated_tokens": guide[quality] * 500,
            "quality_level": quality,
        }

    def is_feasible(self, available_examples: int, scenario: str) -> dict:
        guide = self.guidelines.get(scenario, self.guidelines["task_adaptation"])
        min_required = guide["min_examples"]
        feasible = available_examples >= min_required
        return {
            "feasible": feasible,
            "available": available_examples,
            "minimum": min_required,
            "gap": max(0, min_required - available_examples),
            "recommendation": "Proceed" if feasible else f"Collect {max(0, min_required - available_examples)} more examples",
        }


estimator = DataRequirementEstimator()
print(estimator.estimate("task_adaptation", "recommended"))
print(estimator.is_feasible(200, "task_adaptation"))
```text

### 1.3.2 Data Quality Assessment

```python
class DataQualityScorer:
    def __init__(self):
        self.dimensions = ["correctness", "consistency", "coverage", "noise"]

    def score(self, sample: list) -> dict:
        scores = {}
        for dim in self.dimensions:
            if dim == "correctness":
                scores[dim] = self._score_correctness(sample)
            elif dim == "consistency":
                scores[dim] = self._score_consistency(sample)
            elif dim == "coverage":
                scores[dim] = self._score_coverage(sample)
            elif dim == "noise":
                scores[dim] = self._score_noise(sample)

        scores["overall"] = sum(scores.values()) / len(scores)
        scores["ready_for_ft"] = scores["overall"] >= 0.7
        return scores

    def _score_correctness(self, sample: list) -> float:
        return 0.85

    def _score_consistency(self, sample: list) -> float:
        return 0.78

    def _score_coverage(self, sample: list) -> float:
        return 0.72

    def _score_noise(self, sample: list) -> float:
        return 0.88


scorer = DataQualityScorer()
scores = scorer.score([{"input": "test", "output": "result"}])
print(f"Data quality: {scores['overall']:.2f}, Ready: {scores['ready_for_ft']}")
```text

## 1.4 When Not to Fine-Tune

### 1.4.1 Anti-Pattern Detector

```python
class AntiPatternDetector:
    def __init__(self):
        self.patterns = [
            {
                "name": "Small Dataset FT",
                "condition": lambda p: p.data_availability < 0.2 and p.domain_specificity > 0.5,
                "advice": "Use RAG or in-context learning instead. FT requires sufficient examples.",
            },
            {
                "name": "General Task FT",
                "condition": lambda p: p.domain_specificity < 0.2,
                "advice": "Base model already performs well on general tasks. Prompting is cheaper.",
            },
            {
                "name": "Frequent Model Changes",
                "condition": lambda p: p.expected_query_volume < 100 and p.domain_specificity > 0.5,
                "advice": "Low volume doesn't justify FT cost. Use RAG with high-quality prompts.",
            },
            {
                "name": "Rapidly Changing Knowledge",
                "condition": lambda p: p.domain_specificity > 0.5 and p.data_availability > 0.5,
                "advice": "If knowledge becomes stale, RAG is better for dynamic information.",
                "extra_check": "dynamic_data",
            },
        ]

    def analyze(self, profile: TaskProfile) -> list:
        warnings = []
        for pattern in self.patterns:
            if pattern["condition"](profile):
                warnings.append({
                    "pattern": pattern["name"],
                    "advice": pattern["advice"],
                })
        return warnings


detector = AntiPatternDetector()
bad_profile = TaskProfile("vague general query", 0.1, 0.5, 0.1, 0.9, 50)
warnings = detector.analyze(bad_profile)
for w in warnings:
    print(f"Anti-pattern: {w['pattern']} — {w['advice']}")
```text

## Summary

The decision to fine-tune depends on domain specificity, accuracy requirements, data availability, and query volume. Fine-tuning excels when domain specificity is high, accuracy needs exceed 80%, and sufficient data exists. RAG is better for knowledge-intensive tasks with moderate domain specificity. Prompting is sufficient for general tasks or low-volume scenarios. The break-even analysis shows that fine-tuning becomes cost-effective at high query volumes (typically >1,000 queries/day) where per-query cost savings offset training investment. Anti-patterns include fine-tuning with small datasets, for general tasks, or when knowledge changes rapidly.

## Practical Takeaways

| Takeaway | Description |
|----------|-------------|
| Fine-tune only when needed | Start with prompting and RAG, then evaluate if FT is justified |
| Calculate break-even | Determine how many queries are needed to recover training cost |
| Ensure data quality | Poor data leads to poor FT — assess before training |
| Prefer LoRA initially | Full FT is rarely necessary for domain adaptation |
| Watch for anti-patterns | Small datasets, general tasks, and dynamic knowledge are red flags |

## Interview Q&A

<details class="tp-qa-card" data-qid="ft01-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: When should you fine-tune a model instead of using prompting or RAG?
  </summary>
  <div class="tp-qa-answer">
    <p>Fine-tuning is preferable when: (1) you need consistent output format or style that prompting alone can't reliably enforce — like generating JSON in a specific schema or writing in a particular tone; (2) you have a large dataset of domain-specific examples (thousands to millions) and the model needs deep domain knowledge; (3) you need to reduce latency and cost by using a smaller model fine-tuned to match a larger model's performance on your task; (4) you need offline model deployment without relying on API access. Prompting is better for quick prototypes, tasks requiring general knowledge, and when you need to frequently change instructions. RAG is preferred when knowledge changes rapidly (news, documentation), the knowledge source is large and structured, or you need verifiable citations. A common production pattern is RAG + fine-tuning — use RAG for dynamic knowledge retrieval and fine-tuning for consistent output formatting and style.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft01-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: What are the cost-benefit trade-offs of fine-tuning?
  </summary>
  <div class="tp-qa-answer">
    <p>Fine-tuning costs include: (1) compute — GPU hours for training (A100 or H100, potentially hundreds of dollars for full fine-tuning of a 7B model); (2) data preparation — cleaning, formatting, and validating the dataset; (3) evaluation — running benchmarks after training to validate quality; (4) serving — hosting the fine-tuned model (larger memory footprint than API calls). Benefits: (1) lower per-inference cost if using a smaller fine-tuned model vs. a large API model; (2) lower latency since no API calls; (3) consistent output quality for domain-specific tasks; (4) data privacy — data stays on your infrastructure; (5) offline capability. The break-even point depends on inference volume — high-volume use cases favor fine-tuning because the upfront training cost is amortized over many inferences. For low-volume use cases (<100K requests/month), API-based approaches (prompting + RAG) are typically more cost-effective. Use PEFT methods (LoRA, QLoRA) to reduce training costs by 90%+ while maintaining most of the quality gain.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft01-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: What data is required for successful fine-tuning?
  </summary>
  <div class="tp-qa-answer">
    <p>Successful fine-tuning requires high-quality, task-aligned data. Minimum recommendations: (1) quantity — at least 500-1000 examples for simple tasks (classification, extraction), 5000+ for complex tasks (summarization, generation). More data helps but quality matters more than quantity; (2) format — each example must contain the input (instruction/prompt) and expected output. For instruction tuning, use a consistent chat template format (e.g., HuggingFace's apply_chat_template). For preference tuning, pair each input with a chosen and rejected response; (3) quality — data must be accurate, diverse (covering all edge cases), and representative of the target distribution. Remove duplicates, fix errors, and balance labels; (4) splitting — 80% train, 10% validation, 10% test. The validation set monitors overfitting and the test set gives an unbiased final evaluation. Data augmentation (paraphrasing, back-translation) can help when real data is limited. Synthetic data from stronger models can supplement real data but may introduce hallucinations.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft01-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: When is fine-tuning NOT appropriate?
  </summary>
  <div class="tp-qa-answer">
    <p>Fine-tuning is not appropriate when: (1) you need the model to learn new factual knowledge — fine-tuning can inject new facts but is inefficient and may cause catastrophic forgetting. RAG is better for factual knowledge; (2) your task changes frequently — each task change requires retraining, making prompting a better choice for rapidly evolving requirements; (3) you have limited data (<100 examples) — fine-tuning on tiny datasets causes overfitting; use few-shot prompting instead; (4) you need general capability across many unrelated tasks — a general-purpose foundation model with prompting handles this better than a narrow fine-tuned model; (5) you lack evaluation resources — without proper evaluation, fine-tuning can silently degrade capabilities. A fine-tuning readiness checklist: do you have 500+ high-quality examples? Is the task stable? Do you have evaluation data and metrics? Can you measure regression on general capabilities? If most answers are no, explore prompting or RAG first.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft01-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: How do you decide between full fine-tuning and PEFT methods?
  </summary>
  <div class="tp-qa-answer">
    <p>Full fine-tuning updates all model parameters, PEFT (LoRA, Adapters) updates a small subset (usually 0.1-1% of parameters). Choose full fine-tuning when: you have a large, high-quality dataset (>10K examples), maximum quality on a specific task is critical, you have sufficient GPU compute (multiple A100s), and you can store multiple full model copies. Choose PEFT when: you have limited data (500-5000 examples), GPU memory is constrained (<24GB), you need to maintain multiple task-specific models simultaneously (PEFT modules are small, typically 5-50MB vs 10-50GB for full models), you want faster training, or you need to avoid catastrophic forgetting. In practice, LoRA fine-tuning achieves 90-95% of full fine-tuning quality for most tasks while using 1-2% of the trainable parameters. QLoRA (quantized LoRA) reduces memory further by loading the base model in 4-bit precision, enabling fine-tuning of 7B models on a single RTX 3090.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft01-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: What is catastrophic forgetting and how do you prevent it?
  </summary>
  <div class="tp-qa-answer">
    <p>Catastrophic forgetting occurs when fine-tuning on a new task degrades the model's performance on previously learned tasks. The model overfits to the fine-tuning data distribution and loses general capabilities. Prevention strategies: (1) use PEFT methods (LoRA) — only a small parameter subset is updated, preserving most of the base model's capabilities; (2) mix general domain data into the fine-tuning dataset — include 10-20% of general instruction-following examples alongside task-specific data; (3) use elastic weight consolidation (EWC) — add a regularization term that penalizes changing important parameters; (4) multi-task learning — fine-tune on multiple tasks simultaneously to maintain breadth; (5) evaluation — always evaluate on general benchmarks before and after fine-tuning to detect regression. The simplest and most effective approach is data mixing — include diverse examples in the training set so the model doesn't over-specialize on the target task.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft01-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: How do you build a fine-tuning dataset?
  </summary>
  <div class="tp-qa-answer">
    <p>Building a fine-tuning dataset involves: (1) source selection — use real user data (logs, support tickets, transcripts), synthetic data (generated by a stronger model like GPT-4), or public datasets (ShareGPT, OpenAssistant, Dolly); (2) formatting — convert raw data into (instruction, input, output) triplets or conversational format following a consistent template. HuggingFace datasets library uses a standardized format with 'instruction', 'input', and 'output' columns; (3) quality filtering — remove duplicates, filter low-quality entries (too short, gibberish), fix formatting inconsistencies, and balance label distributions; (4) splitting — stratified split ensuring all classes/patterns appear in train/val/test sets; (5) dataset card — document size, source, format, distribution, and known biases. For production, create a data pipeline that automates collection, cleaning, and validation. Track dataset versioning (using DVC or HuggingFace datasets with commit hashes) to enable reproducibility of training runs.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft01-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: How do you compare prompting vs. fine-tuning vs. RAG?
  </summary>
  <div class="tp-qa-answer">
    <p>Comparison across key dimensions: (1) Knowledge incorporation — prompting can include up to ~128K tokens of context (recent models), fine-tuning embeds knowledge in weights (permanent but expensive to update), RAG retrieves from external databases (dynamic and scalable); (2) Output consistency — prompting provides weakest consistency (model may deviate from format), fine-tuning gives strongest consistency (model learns the exact output format), RAG falls between; (3) Latency — prompting is fastest (~1-3s), fine-tuning requires inference on a hosted model (~1-5s including GPU inference), RAG adds retrieval time (~100-500ms for vector search); (4) Cost — prompting has per-token API cost, fine-tuning has upfront training + serving cost, RAG has embedding + vector DB cost; (5) Maintenance — prompting is easiest to update (just change prompt), fine-tuning requires retraining, RAG requires updating the knowledge base. The best approach often combines all three: RAG for dynamic knowledge, fine-tuning for style/format, prompting for task instruction and guardrails.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft01-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: What metrics should you use to decide if fine-tuning is successful?
  </summary>
  <div class="tp-qa-answer">
    <p>Fine-tuning success metrics: (1) Task-specific metrics — accuracy/precision/recall/F1 for classification, BLEU/ROUGE for generation, exact match for extraction. Compare pre-fine-tuning (base model with zero/few-shot prompting) vs. post-fine-tuning on the same test set; (2) Quality improvement — absolute gain in task-specific metric (e.g., accuracy improved from 70% to 92%) and human evaluation scores; (3) Regression check — evaluate on general benchmarks (MMLU, HellaSwag, TruthfulQA) before and after fine-tuning. Acceptable regression is <2-3% on most benchmarks; (4) Cost-benefit — compute cost per % improvement; (5) User satisfaction — online A/B test comparing fine-tuned model against base model with prompt engineering. A fine-tuning run is successful if: task metric improves significantly (>10% relative), general capability regression is within tolerance, and the improvement justifies the training cost vs. prompt engineering alternatives. Document all metrics in a model card for reproducibility.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft01-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: How do you estimate the cost of a fine-tuning run?
  </summary>
  <div class="tp-qa-answer">
    <p>Estimating fine-tuning cost: (1) Compute cost = GPU hours — GPU price. A 7B model full fine-tuning on 8—A100-80GB takes roughly 1-4 hours per 1000 examples depending on sequence length. LoRA on the same model takes 0.5-2 hours per 1000 examples on a single A100. QLoRA can run on a single RTX 3090 ($0.5-2/hr on cloud spot instances); (2) Data preparation cost — hours of human effort for data cleaning, validation, and formatting; (3) Evaluation cost — running benchmarks (MLM evaluations, API calls for LLM-as-judge); (4) Serving cost — hosting the fine-tuned model (GPU instance for inference, typically same size as training GPU). Example: fine-tuning Llama-3-8B with LoRA on 5000 examples costs: 3 hours on 1—A100 — $2/hr = $6 for training, plus ~$1 for evaluation, plus ongoing inference cost ($0.5/hr for serverless hosting). Full fine-tuning the same model: 12 hours on 4—A100 — $2/hr = $96. QLoRA on RTX 3090: 4 hours — $0.5/hr = $2.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

<details data-qid="ft-s1-quiz1">
<summary><strong>1.</strong> When is fine-tuning most appropriate?</summary>
A. For general knowledge tasks
B. When domain specificity and accuracy requirements are high
C. When you have 50 examples
D. When latency doesn't matter
Answer: B
</details>

<details data-qid="ft-s1-quiz2">
<summary><strong>2.</strong> What is the primary advantage of RAG over fine-tuning?</summary>
A. Lower latency
B. No training cost and dynamic knowledge updates
C. Better accuracy
D. Simpler implementation
Answer: B
</details>

<details data-qid="ft-s1-quiz3">
<summary><strong>3.</strong> How many examples are typically needed for LoRA-based task adaptation?</summary>
A. 10-50
B. 100-1,000
C. 10,000-100,000
D. 1 million+
Answer: B
</details>

<details data-qid="ft-s1-quiz4">
<summary><strong>4.</strong> When does fine-tuning become cost-effective?</summary>
A. At low query volumes
B. When per-query cost savings offset training cost at high volumes
C. When using free GPUs
D. Only for text generation
Answer: B
</details>

<details data-qid="ft-s1-quiz5">
<summary><strong>5.</strong> What is the recommended first step before fine-tuning?</summary>
A. Collect 1M examples
B. Try prompting and RAG first
C. Buy expensive GPUs
D. Rewrite the model from scratch
Answer: B
</details>


### True/False

**T/F 1**: This topic is fundamental to AI engineering.
**Answer**: True — Understanding fine tuning peft is essential for building production AI systems.

**T/F 2**: The concepts in this chapter are only used in interviews.
**Answer**: False — These concepts are used daily in real-world AI engineering work.

**T/F 3**: Time/space complexity analysis applies to fine tuning peft.
**Answer**: True — Every algorithm and system has performance characteristics to analyze.

**T/F 4**: fine tuning peft concepts are independent of each other.
**Answer**: False — Most concepts build on each other and are interconnected.

**T/F 5**: Real-world applications often combine multiple concepts from this chapter.
**Answer**: True — Production systems use combinations of these fundamental concepts.

### Fill in the Blank

**FIB 1**: The key concept in this chapter is ________.
**Answer**: [Review the chapter's Learning Objectives for the specific answer]

**FIB 2**: In fine tuning peft, the time complexity of the basic operation is ________.
**Answer**: [Depends on the specific operation — check the Theory section]

### Scenario Questions

**Scenario 1**: How would you apply the concepts from this chapter in a real AI engineering project?

**Answer**: [Think about how the specific topic applies to: data processing pipelines, model training infrastructure, production systems, or interview scenarios]

### Output Questions

**Output 1**: What is the time complexity of the main algorithm discussed in this chapter?
**Answer**: [Check the Theory section for the specific complexity analysis]

## Exercises


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition1. Build a decision tree classifier that takes a task description and recommends prompting, RAG, or fine-tuning with confidence scores.

2. Calculate the break-even point for a 7B model: training costs $1,500 (LoRA), inference costs $0.002/query baseline vs $0.001 after FT. How many queries to break even?

3. Analyze an anti-pattern: a team wants to fine-tune a 70B model on 50 examples for a general summarization task. Explain why this is problematic and recommend alternatives.

4. Build a data quality scorer that evaluates a dataset on correctness, consistency, coverage, and noise. Score 3 sample datasets and recommend which are FT-ready.

5. Compare the total cost (training + 6 months inference) across prompting, RAG, LoRA, and full FT for a scenario with 10K queries/day and 7B model. Show a cost-quality tradeo

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
- [ ] Have questions ready about how the company uses 14-fine-tuning-peftff chart.


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

**Q: How long does it take to master when to fine tune?
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

Understanding the evolution of when to fine tune helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

## Coding Standards

- Follow consistent naming conventions (camelCase for variables, PascalCase for types)
- Add clear comments explaining complex logic
- Keep functions focused on a single responsibility
- Write self-documenting code with meaningful names
- Handle errors gracefully and provide informative messages

## Security Considerations

- **Input Validation**: Always validate and sanitize inputs
- **Error Handling**: Don't expose internal details in error messages
- **Resource Limits**: Set appropriate limits to prevent denial of service
- **Authentication**: Ensure proper authentication and authorization
- **Data Protection**: Handle sensitive data according to security best practices

## ML Intuition

For AI engineering, understanding when to fine tune at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of when to fine tune like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply when to fine tune concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of when to fine tune?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply when to fine tune in real systems?
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

When applying when to fine tune to specific use cases, consider:
- Adapting general principles to your specific domain
- Performance optimization for your target hardware
- Cost considerations for production deployment
- Monitoring and observability in production