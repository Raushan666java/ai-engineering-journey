# DPO & Preference Tuning

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand Direct Preference Optimization (DPO) |
| LO2 | Implement DPO loss and training loop |
| LO3 | Create and curate preference datasets |
| LO4 | Compare DPO with RLHF and other alignment methods |

## Introduction

Understanding dpo and preference tuning is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering dpo and preference tuning.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures


## Theory

Understanding dpo and preference tuning is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how dpo and preference tuning works in practice.

### Key Concepts

- **Core Principle**: The foundational idea behind dpo and preference tuning
- **How It Works**: The mechanism and process involved
- **Why It Matters**: Relevance to AI engineering and real-world applications
- **Trade-offs**: Advantages and limitations to consider

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 7.1 | Preference Tuning | Alignment, human preferences, RLHF |
| 7.2 | DPO Theory | Direct optimization, closed-form policy |
| 7.3 | DPO Loss | Loss function, gradient analysis |
| 7.4 | Preference Data | Creating, curating, and formatting preference pairs |
| 7.5 | Training | DPO training loop, hyperparameters |
| 7.6 | Evaluation | Reward model, win rate, alignment metrics |

## Chapter Roadmap

```mermaid
flowchart LR
    subgraph Data
        P[Prompt]
        W[Winning Response]
        L[Losing Response]
    end
    subgraph Model
        M[Policy Model]
        R[Reference Model]
    end
    subgraph Loss
        D[DPO Loss]
        G[Update Policy]
    end
    P --> M
    W --> M
    L --> M
    P --> R
    W --> R
    L --> R
    M --> D
    R --> D
    D --> G -->|Increase prob| W
    D --> G -->|Decrease prob| L
```text

## 7.1 Preference Tuning

### 7.1.1 Preference Tuning Overview

Preference tuning aligns language models with human values by learning from comparisons rather than absolute labels.

```python
from dataclasses import dataclass, field
from typing import List, Tuple, Optional, Dict, Callable
import numpy as np


@dataclass
class PreferencePair:
    prompt: str
    chosen: str  # preferred response
    rejected: str  # dispreferred response
    metadata: Dict = field(default_factory=dict)


class AlignmentMethod(Enum):
    RLHF = "rlhf"
    DPO = "dpo"
    PPO = "ppo"
    KTO = "kto"
    ORPO = "orpo"


class PreferenceTuner:
    def __init__(self, method: AlignmentMethod = AlignmentMethod.DPO):
        self.method = method

    def compare_methods(self) -> Dict[str, str]:
        return {
            "RLHF": "Train reward model, then optimize policy with PPO. Complex, unstable.",
            "DPO": "Directly optimize from preferences. Simple, stable, no reward model.",
            "PPO": "Proximal Policy Optimization. Requires reward model. Sample-efficient.",
            "KTO": "Kahneman-Tversky Optimization. Uses binary feedback (good/bad).",
            "ORPO": "Odds Ratio PPO. Combines SFT and preference in one stage.",
        }

    def recommend(self, data_size: int, compute_budget: str) -> AlignmentMethod:
        if data_size < 1000:
            return AlignmentMethod.DPO
        elif compute_budget == "low":
            return AlignmentMethod.DPO
        elif compute_budget == "high":
            return AlignmentMethod.RLHF
        return AlignmentMethod.DPO


tuner = PreferenceTuner()
print(f"Recommended method for 500 examples, low compute: {tuner.recommend(500, 'low').value}")
```text

### 7.1.2 Why Direct Optimization

```python
class DirectOptimizationAdvantage:
    def __init__(self):
        self.comparison = {
            "DPO": {
                "reward_model": False,
                "online_sampling": False,
                "stability": "high",
                "complexity": "low",
                "memory": "2x model (policy + reference)",
            },
            "RLHF": {
                "reward_model": True,
                "online_sampling": True,
                "stability": "low",
                "complexity": "high",
                "memory": "4x model (policy, ref, reward, critic)",
            },
        }

    def memory_savings(self, model_size_b: float) -> Dict:
        dpo_mem = model_size_b * 2 * 2  # 2 models * FP16
        rlhf_mem = model_size_b * 4 * 2  # 4 models * FP16
        return {
            "dpo_gb": dpo_mem,
            "rlhf_gb": rlhf_mem,
            "savings_gb": rlhf_mem - dpo_mem,
            "savings_pct": round((1 - dpo_mem / rlhf_mem) * 100, 1),
        }


doa = DirectOptimizationAdvantage()
print(f"DPO memory savings vs RLHF: {doa.memory_savings(7.0)}")
```text

## 7.2 DPO Theory

### 7.2.1 DPO Mathematical Foundation

```python
class DPOMathematics:
    def policy_ratio(self, logprob_chosen_policy: float,
                     logprob_chosen_ref: float,
                     logprob_rejected_policy: float,
                     logprob_rejected_ref: float,
                     beta: float = 0.1) -> float:
        chosen_ratio = logprob_chosen_policy - logprob_chosen_ref
        rejected_ratio = logprob_rejected_policy - logprob_rejected_ref
        return chosen_ratio - rejected_ratio

    def dpo_loss(self, chosen_logprobs: np.ndarray,
                 rejected_logprobs: np.ndarray,
                 ref_chosen_logprobs: np.ndarray,
                 ref_rejected_logprobs: np.ndarray,
                 beta: float = 0.1) -> float:
        pi_ratio = chosen_logprobs - rejected_logprobs - ref_chosen_logprobs + ref_rejected_logprobs
        loss = -np.log(self.sigmoid(beta * pi_ratio))
        return np.mean(loss)

    def sigmoid(self, x: np.ndarray) -> np.ndarray:
        return 1 / (1 + np.exp(-np.clip(x, -100, 100)))

    def gradient_insight(self, beta: float = 0.1) -> str:
        return (
            f"Gradient increases prob(chosen) when β·ratio is large negative, "
            f"decreases prob(rejected) when β·ratio is large positive."
        )


dpo_math = DPOMathematics()
chosen = np.array([-0.5, -0.3, -0.8])
rejected = np.array([-2.0, -1.5, -3.0])
ref_chosen = np.array([-0.6, -0.4, -0.9])
ref_rejected = np.array([-0.7, -0.5, -0.8])

loss = dpo_math.dpo_loss(chosen, rejected, ref_chosen, ref_rejected, beta=0.1)
print(f"DPO loss: {loss:.4f}")
```text

### 7.2.2 Beta Parameter Analysis

```python
class BetaAnalyzer:
    def analyze(self, beta_values: List[float]) -> Dict:
        results = {}
        for beta in beta_values:
            results[beta] = {
                "description": self._describe_beta(beta),
                "strength": "strong" if beta > 0.5 else ("moderate" if beta > 0.1 else "weak"),
                "risk": "overfitting" if beta > 0.5 else "safe",
            }
        return results

    def _describe_beta(self, beta: float) -> str:
        if beta < 0.05:
            return "Very weak alignment signal — barely changes policy"
        elif beta < 0.1:
            return "Weak alignment — subtle preference shaping"
        elif beta < 0.3:
            return "Moderate alignment — good default range"
        elif beta < 0.5:
            return "Strong alignment — significant preference pressure"
        else:
            return "Very strong alignment — risk of overfitting to preferences"

    def recommend(self, dataset_size: int) -> float:
        if dataset_size < 1000:
            return 0.05
        elif dataset_size < 10000:
            return 0.1
        else:
            return 0.3


analyzer = BetaAnalyzer()
print(analyzer.analyze([0.01, 0.1, 0.5]))
print(f"Recommended beta for 5K examples: {analyzer.recommend(5000)}")
```text

## 7.3 DPO Loss

### 7.3.1 DPO Loss Implementation

```python
class DPOLoss:
    def __init__(self, beta: float = 0.1, label_smoothing: float = 0.0):
        self.beta = beta
        self.label_smoothing = label_smoothing

    def compute(self, policy_chosen_logps: np.ndarray,
                policy_rejected_logps: np.ndarray,
                ref_chosen_logps: np.ndarray,
                ref_rejected_logps: np.ndarray) -> Dict:
        pi_logratios = policy_chosen_logps - policy_rejected_logps
        ref_logratios = ref_chosen_logps - ref_rejected_logps
        logits = pi_logratios - ref_logratios

        loss = -np.mean(np.log(self.sigmoid(self.beta * logits)))

        chosen_rewards = self.beta * (policy_chosen_logps - ref_chosen_logps)
        rejected_rewards = self.beta * (policy_rejected_logps - ref_rejected_logps)
        accuracy = np.mean(chosen_rewards > rejected_rewards)

        return {
            "loss": loss,
            "chosen_rewards": np.mean(chosen_rewards),
            "rejected_rewards": np.mean(rejected_rewards),
            "reward_margin": np.mean(chosen_rewards - rejected_rewards),
            "accuracy": accuracy,
        }

    def sigmoid(self, x: np.ndarray) -> np.ndarray:
        return 1 / (1 + np.exp(-np.clip(x, -100, 100)))


loss_fn = DPOLoss(beta=0.1)
pc = np.array([-0.4, -0.5, -0.3])
pr = np.array([-2.0, -1.8, -2.5])
rc = np.array([-0.5, -0.6, -0.4])
rr = np.array([-0.6, -0.5, -0.7])
result = loss_fn.compute(pc, pr, rc, rr)
print(f"DPO loss: {result['loss']:.4f}, margin: {result['reward_margin']:.4f}, acc: {result['accuracy']:.2f}")
```text

### 7.3.2 Log Probability Extraction

```python
class LogProbabilityExtractor:
    def get_logprobs(self, logits: np.ndarray, labels: np.ndarray) -> np.ndarray:
        log_probs = np.zeros(len(labels))
        for i in range(len(labels)):
            log_probs[i] = logits[i, labels[i]] - np.log(np.sum(np.exp(logits[i])))
        return log_probs

    def sequence_logprob(self, token_logprobs: np.ndarray) -> float:
        return np.sum(token_logprobs)

    def average_logprob(self, token_logprobs: np.ndarray) -> float:
        return np.mean(token_logprobs)

    def per_token_reward(self, logprobs: np.ndarray, ref_logprobs: np.ndarray,
                         beta: float) -> np.ndarray:
        return beta * (logprobs - ref_logprobs)


extractor = LogProbabilityExtractor()
logits = np.random.randn(10, 100)  # 10 tokens, vocab=100
labels = np.random.randint(0, 100, 10)
logprobs = extractor.get_logprobs(logits, labels)
print(f"Sequence logprob: {extractor.sequence_logprob(logprobs):.4f}")
```text

## 7.4 Preference Data

### 7.4.1 Preference Dataset Builder

```python
class PreferenceDataset:
    def __init__(self):
        self.pairs: List[PreferencePair] = []

    def add(self, pair: PreferencePair):
        self.pairs.append(pair)

    def add_from_comparisons(self, prompt: str,
                              responses: List[Tuple[str, float]]) -> List[PreferencePair]:
        new_pairs = []
        sorted_responses = sorted(responses, key=lambda x: x[1], reverse=True)

        for i in range(len(sorted_responses)):
            for j in range(i + 1, len(sorted_responses)):
                pair = PreferencePair(
                    prompt=prompt,
                    chosen=sorted_responses[i][0],
                    rejected=sorted_responses[j][0],
                    metadata={"chosen_score": sorted_responses[i][1],
                              "rejected_score": sorted_responses[j][1]},
                )
                new_pairs.append(pair)

        self.pairs.extend(new_pairs)
        return new_pairs

    def filter_by_margin(self, min_margin: float = 0.5) -> List[PreferencePair]:
        filtered = []
        for pair in self.pairs:
            chosen_score = pair.metadata.get("chosen_score", 0)
            rejected_score = pair.metadata.get("rejected_score", 0)
            if chosen_score - rejected_score >= min_margin:
                filtered.append(pair)
        return filtered

    def statistics(self) -> Dict:
        if not self.pairs:
            return {"count": 0}

        margins = [
            p.metadata.get("chosen_score", 0) - p.metadata.get("rejected_score", 0)
            for p in self.pairs if p.metadata
        ]

        return {
            "count": len(self.pairs),
            "avg_margin": round(np.mean(margins), 3) if margins else 0,
            "min_margin": round(np.min(margins), 3) if margins else 0,
            "max_margin": round(np.max(margins), 3) if margins else 0,
        }


pd = PreferenceDataset()
responses = [("Great answer", 0.9), ("Okay answer", 0.5), ("Bad answer", 0.1)]
pd.add_from_comparisons("Explain AI", responses)
print(f"Generated {len(pd.pairs)} preference pairs")
print(f"Stats: {pd.statistics()}")
```text

### 7.4.2 Synthetic Preference Data

```python
class SyntheticPreferenceGenerator:
    def __init__(self, llm_call: Callable):
        self.llm = llm_call

    def generate_pair(self, prompt: str) -> PreferencePair:
        good_response = self.llm(f"Write a good response to: {prompt}")
        bad_response = self.llm(f"Write a poor response to: {prompt}")

        return PreferencePair(
            prompt=prompt,
            chosen=good_response,
            rejected=bad_response,
            metadata={"source": "synthetic"},
        )

    def generate_batch(self, prompts: List[str]) -> List[PreferencePair]:
        return [self.generate_pair(p) for p in prompts]

    def augment_with_perturbations(self, pair: PreferencePair) -> List[PreferencePair]:
        augmented = [pair]
        rejected = pair.rejected

        for perturbation in ["shortened", "repetitive", "off_topic"]:
            if perturbation == "shortened":
                variant = " ".join(rejected.split()[:3])
            elif perturbation == "repetitive":
                variant = (rejected + " ") * 3
            else:
                variant = "This is not relevant."

            augmented.append(PreferencePair(
                prompt=pair.prompt,
                chosen=pair.chosen,
                rejected=variant,
                metadata={"source": f"augmented_{perturbation}"},
            ))

        return augmented


def mock_llm(prompt: str) -> str:
    return f"Response to: {prompt}"


gen = SyntheticPreferenceGenerator(mock_llm)
pair = gen.generate_pair("What is DPO?")
augmented = gen.augment_with_perturbations(pair)
print(f"Generated {len(augmented)} preference pairs (1 original + {len(augmented)-1} augmented)")
```text

## 7.5 Training

### 7.5.1 DPO Training Loop

```python
class DPOTrainer:
    def __init__(self, policy_model: Any, ref_model: Any,
                 loss_fn: DPOLoss, lr: float = 1e-5):
        self.policy = policy_model
        self.reference = ref_model
        self.loss_fn = loss_fn
        self.lr = lr
        self.loss_history: List[float] = []
        self.reward_history: List[float] = []

    def train_step(self, batch: List[PreferencePair]) -> Dict:
        chosen_logps = np.array([self._get_logprob(b.prompt, b.chosen) for b in batch])
        rejected_logps = np.array([self._get_logprob(b.prompt, b.rejected) for b in batch])
        ref_chosen = np.array([self._get_ref_logprob(b.prompt, b.chosen) for b in batch])
        ref_rejected = np.array([self._get_ref_logprob(b.prompt, b.rejected) for b in batch])

        metrics = self.loss_fn.compute(chosen_logps, rejected_logps, ref_chosen, ref_rejected)
        self.loss_history.append(metrics["loss"])
        self.reward_history.append(metrics["reward_margin"])

        self._update_policy(metrics["loss"])

        return metrics

    def _get_logprob(self, prompt: str, response: str) -> float:
        return float(np.random.normal(-1.0, 0.5))

    def _get_ref_logprob(self, prompt: str, response: str) -> float:
        return float(np.random.normal(-1.2, 0.5))

    def _update_policy(self, loss: float):
        pass

    def train(self, dataset: List[PreferencePair],
              epochs: int, batch_size: int) -> Dict:
        for epoch in range(epochs):
            epoch_metrics = {"loss": 0.0, "accuracy": 0.0, "margin": 0.0}
            num_batches = max(len(dataset) // batch_size, 1)

            for i in range(0, len(dataset), batch_size):
                batch = dataset[i:i + batch_size]
                metrics = self.train_step(batch)
                epoch_metrics["loss"] += metrics["loss"]
                epoch_metrics["accuracy"] += metrics["accuracy"]
                epoch_metrics["margin"] += metrics["reward_margin"]

            print(f"Epoch {epoch+1}: loss={epoch_metrics['loss']/num_batches:.4f}, "
                  f"acc={epoch_metrics['accuracy']/num_batches:.3f}")

        return {
            "final_loss": self.loss_history[-1] if self.loss_history else 0,
            "avg_margin": np.mean(self.reward_history) if self.reward_history else 0,
        }


trainer = DPOTrainer(None, None, DPOLoss(beta=0.1))
dataset = [PreferencePair(prompt=f"Prompt {i}", chosen=f"Good {i}", rejected=f"Bad {i}")
           for i in range(50)]
results = trainer.train(dataset, epochs=3, batch_size=8)
print(f"Training results: {results}")
```text

### 7.5.2 DPO with LoRA

```python
class DPOLoRAConfig:
    def __init__(self):
        self.dpo_config = {
            "beta": 0.1,
            "label_smoothing": 0.0,
            "loss_type": "sigmoid",  # sigmoid, hinge, ipo
        }
        self.lora_config = LoraConfig(
            r=16,
            lora_alpha=32,
            target_modules=["q_proj", "v_proj"],
            lora_dropout=0.05,
        )
        self.training = {
            "per_device_train_batch_size": 4,
            "gradient_accumulation_steps": 8,
            "learning_rate": 1e-5,
            "num_train_epochs": 3,
            "warmup_ratio": 0.1,
            "logging_steps": 10,
            "save_steps": 500,
        }

    def validate(self) -> List[str]:
        warnings = []
        if self.dpo_config["beta"] <= 0:
            warnings.append("Beta must be positive")
        if self.dpo_config["loss_type"] not in ("sigmoid", "hinge", "ipo"):
            warnings.append("Unknown loss type")
        return warnings


dpo_lora = DPOLoRAConfig()
print(f"DPO+LoRA config validated: {dpo_lora.validate()}")
```text

## 7.6 Evaluation

### 7.6.1 Win Rate Calculator

```python
class WinRateCalculator:
    def calculate(self, model_outputs: List[str],
                  baseline_outputs: List[str],
                  preferences: Optional[List[int]] = None) -> Dict:
        if preferences:
            wins = sum(1 for p in preferences if p == 1)
            total = len(preferences)
        else:
            wins = 0
            total = len(model_outputs)
            for m, b in zip(model_outputs, baseline_outputs):
                wins += 1 if len(m) > len(b) else 0  # simplistic proxy

        return {
            "wins": wins,
            "losses": total - wins,
            "win_rate": round(wins / total * 100, 1),
            "total": total,
        }

    def pairwise_comparison(self, outputs_a: List[str],
                             outputs_b: List[str]) -> Dict:
        a_wins = 0
        b_wins = 0
        ties = 0

        for a, b in zip(outputs_a, outputs_b):
            score_a = self._quality_proxy(a)
            score_b = self._quality_proxy(b)
            if score_a > score_b:
                a_wins += 1
            elif score_b > score_a:
                b_wins += 1
            else:
                ties += 1

        return {
            "a_wins": a_wins,
            "b_wins": b_wins,
            "ties": ties,
            "a_win_rate": round(a_wins / len(outputs_a) * 100, 1),
        }

    def _quality_proxy(self, text: str) -> float:
        return len(text.split()) + (0.1 if text.endswith((".", "!", "?")) else 0)


wrc = WinRateCalculator()
model_out = ["Good answer here." for _ in range(10)]
baseline_out = ["Bad" for _ in range(10)]
print(f"Win rate: {wrc.calculate(model_out, baseline_out)}")
```text

### 7.6.2 Alignment Evaluation

```python
class AlignmentEvaluator:
    def __init__(self):
        self.criteria = ["helpfulness", "harmlessness", "honesty"]

    def evaluate(self, responses: List[str], prompt_type: str = "general") -> Dict:
        scores = {}
        for criterion in self.criteria:
            if criterion == "helpfulness":
                scores[criterion] = self._score_helpfulness(responses)
            elif criterion == "harmlessness":
                scores[criterion] = self._score_harmlessness(responses)
            elif criterion == "honesty":
                scores[criterion] = self._score_honesty(responses)

        scores["overall"] = round(np.mean(list(scores.values())), 3)
        return scores

    def _score_helpfulness(self, responses: List[str]) -> float:
        lengths = [len(r.split()) for r in responses]
        avg_length = np.mean(lengths) if lengths else 0
        return min(avg_length / 20, 1.0)

    def _score_harmlessness(self, responses: List[str]) -> float:
        harmful_words = ["hate", "violence", "illegal", "dangerous"]
        clean = 0
        for r in responses:
            if not any(w in r.lower() for w in harmful_words):
                clean += 1
        return clean / len(responses) if responses else 0

    def _score_honesty(self, responses: List[str]) -> float:
        uncertainty = sum(1 for r in responses if "I don't know" in r or "unsure" in r)
        return 1.0 - (uncertainty / len(responses) * 0.5)


evaluator = AlignmentEvaluator()
responses = ["I'll help you with that.", "I cannot help with that request."]
print(f"Alignment scores: {evaluator.evaluate(responses)}")
```text

## Summary

Direct Preference Optimization (DPO) aligns language models with human preferences without training a separate reward model. The DPO loss is: L = -E[log(σ(β(logπ_w/π_ref_w - logπ_l/π_ref_l)))], where β controls alignment strength (typical values: 0.05-0.3). DPO requires only a policy model and a frozen reference model, compared to RLHF which needs 4 models (policy, reference, reward, critic). Preference pairs consist of prompt + chosen response + rejected response. The beta parameter governs how aggressively the policy diverges from the reference — lower β (<0.1) for small datasets, higher β (>0.3) for large datasets. Training with LoRA adapters is common, keeping base models frozen while updating low-rank adapters. Win rate against the base model is the primary evaluation metric, typically measured through pairwise comparisons or LLM-as-judge evaluations.

## Practical Takeaways

| Takeaway | Description |
|----------|-------------|
| Start with β=0.1 | Balanced alignment strength for most datasets |
| Use preference margins | Filter pairs where the quality difference is small |
| Freeze reference model | Reference logprobs computed once for efficiency |
| DPO + LoRA is efficient | Train adapters, keep base model frozen |
| Measure win rate | Primary metric — compare DPO model vs base model |
| Watch for over-optimization | High β + many epochs can degrade response diversity |

## Interview Q&A

<details class="tp-qa-card" data-qid="ft07-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: What is Direct Preference Optimization (DPO)?
  </summary>
  <div class="tp-qa-answer">
    <p>Direct Preference Optimization (DPO) is a training method that aligns language models with human preferences without using reinforcement learning. Unlike RLHF (Reinforcement Learning from Human Feedback), which trains a separate reward model and then uses PPO to optimize the policy, DPO directly optimizes the policy using a closed-form mapping between the reward function and the optimal policy. The DPO loss function compares the log-probabilities of chosen vs. rejected responses: <code>L_DPO = -E[log σ(β(log π_θ(y_w|x) - π_ref(y_w|x) - log π_θ(y_l|x) + π_ref(y_l|x)))]</code> where y_w is the preferred response, y_l is the dispreferred response, π_θ is the trained policy, π_ref is the reference policy, β controls how much the policy can deviate from the reference, and σ is the sigmoid function. The loss increases when the model assigns higher probability to rejected responses relative to chosen ones. DPO is simpler, more stable, and faster than RLHF because it avoids training a separate reward model and the complex PPO optimization loop. It achieves comparable or better alignment results with significantly less engineering complexity.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft07-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: How do you implement the DPO loss function?
  </summary>
  <div class="tp-qa-answer">
    <p>The DPO loss function is implemented by: (1) for each pair of (chosen, rejected) responses, compute the log-probabilities of each response under the current policy (π_θ) and the reference policy (π_ref, which is frozen at initialization); (2) for each response, the log-probability is the sum of per-token log-probabilities (the model's predicted probability of each target token). Use the model's forward pass with labels to get the per-token log-probs efficiently; (3) compute the implicit reward: <code>reward = β — (log π_θ(y|x) - log π_ref(y|x))</code> for both chosen and rejected responses; (4) the DPO loss per pair is: <code>loss = -log(sigmoid(reward_chosen - reward_rejected))</code>; (5) average the loss over all pairs in the batch. Implementation in PyTorch: <code>def dpo_loss(chosen_logps, rejected_logps, ref_chosen_logps, ref_rejected_logps, beta): chosen_rewards = beta * (chosen_logps - ref_chosen_logps); rejected_rewards = beta * (rejected_logps - ref_rejected_logps); loss = -F.logsigmoid(chosen_rewards - rejected_rewards).mean(); return loss</code>. The beta parameter (typically 0.1-0.5) controls how much the policy can deviate from the reference — higher beta = stronger constraint. The loss gradient pushes the policy to increase probability of chosen responses and decrease probability of rejected responses, balanced by the KL constraint from the reference.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft07-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: How do you create and curate preference datasets?
  </summary>
  <div class="tp-qa-answer">
    <p>Preference datasets contain triples of (prompt, chosen_response, rejected_response) where chosen is preferred over rejected. Creation methods: (1) Human annotation — human raters compare two or more responses to the same prompt and select the better one. Use platforms like Scale AI, Surge, or internal raters. Each pair is rated by 3-5 raters for reliability, with inter-rater agreement tracked; (2) AI feedback — use a stronger model (GPT-4, Claude) to compare responses from a weaker model. This is cheaper but may not capture human preferences accurately; (3) Implicit feedback — use production logs: responses that users upvote/thumbs-up become chosen, downvoted/thumbs-down become rejected. This provides real-world preference data but may be noisy; (4) Public datasets — Anthropic's HH-RLHF (helpful/harmless), OpenAI's WebGPT comparisons, Stanford's SHP (social media preferences). Curation: filter pairs where the chosen response is not clearly better (low annotator agreement), balance for diversity (topic, difficulty, response style), and ensure the rejected response is plausible (not obviously wrong or nonsensical). A good preference dataset has 10K-100K pairs covering diverse scenarios. Data quality is critical — noise in preference labels directly degrades alignment quality.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft07-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: How does DPO compare with RLHF?
  </summary>
  <div class="tp-qa-answer">
    <p>DPO and RLHF both align language models with human preferences but differ in approach. RLHF: (1) trains a separate reward model on preference data (a classifier that scores response quality); (2) uses PPO (Proximal Policy Optimization) to optimize the policy against the reward model; (3) requires maintaining four models: policy, reference, reward, value — requiring significant engineering and compute; (4) more complex training loop with advantage estimation, clipping, and KL penalty. DPO: (1) directly optimizes policy from preference pairs — no reward model needed; (2) simpler training loop — just standard loss minimization on (chosen, rejected) pairs; (3) more stable training — no reward hacking (where the policy exploits reward model weaknesses); (4) faster training — 2-3x faster than PPO because no reward model evaluation and no value function. Empirical results: DPO matches or exceeds PPO on most alignment benchmarks (MT-Bench, Chatbot Arena) while being significantly simpler. DPO's main limitation: it needs on-policy preference data (responses from the current policy) for optimal results, though off-policy data (from a different model) still works well. For most practical alignment tasks, DPO is the recommended approach.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft07-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: What is the beta parameter in DPO and how do you tune it?
  </summary>
  <div class="tp-qa-answer">
    <p>The beta (β) parameter in DPO controls the KL divergence constraint — how much the trained policy can deviate from the reference policy. Higher β = stronger constraint = smaller deviation = less alignment but less risk of degeneration. Lower β = weaker constraint = more alignment but risk of overfitting to preference data. Typical values: (1) β=0.1 — aggressive alignment, used when the preference dataset is very high quality and diverse; (2) β=0.3 — recommended default, balances alignment and KL constraint; (3) β=0.5 — conservative alignment, minimizes degeneration risk. Tuning β: (1) train with different β values (0.1, 0.3, 0.5) and evaluate on held-out preference pairs — measure how often the trained model prefers chosen vs rejected responses; (2) measure KL divergence between trained and reference policy — target KL of 5-10 nats for typical alignment; evaluate general capability regression (MMLU, HellaSwag) — high β preserves general capabilities better. The optimal β depends on dataset quality — noisy data needs higher β (more constraint), clean data can use lower β (more alignment). The reference policy for KL computation is the initial policy before DPO training (typically the SFT model). The log-probability ratio β — (log π_θ - log π_ref) is interpreted as the implicit reward.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft07-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: How do you implement DPO training with the TRL library?
  </summary>
  <div class="tp-qa-answer">
    <p>DPO training with the TRL (Transformer Reinforcement Learning) library: (1) Install — <code>pip install trl peft transformers datasets accelerate bitsandbytes</code>; (2) Load the base model (SFT model) and reference model — typically the same model initially: <code>AutoModelForCausalLM.from_pretrained(model_id, torch_dtype=torch.bfloat16, device_map="auto")</code>. The reference model is loaded separately or <code>DPOTrainer</code> creates it automatically; (3) Prepare preference dataset — HuggingFace dataset with "prompt", "chosen", "rejected" columns. Tokenize each column with the same tokenizer; (4) Configure DPO arguments — <code>DPOConfig(output_dir="./dpo-out", beta=0.1, learning_rate=5e-6 (lower than SFT because alignment is more delicate), per_device_train_batch_size=4, gradient_accumulation_steps=8, num_train_epochs=1, warmup_ratio=0.1, logging_steps=10, save_strategy="epoch", fp16=True, max_length=1024, max_prompt_length=512)</code>; (5) Initialize DPOTrainer — <code>DPOTrainer(model, ref_model, args, train_dataset, tokenizer=tokenizer)</code> — the trainer handles per-token log-probability computation, loss calculation, and gradient updates; (6) Train — <code>trainer.train()</code>. The DPOTrainer handles the complexity of computing log-probabilities for both chosen and rejected responses under both current and reference policies. Training typically takes 1-2 hours for 10K pairs on a single A100.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft07-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: How do you evaluate DPO-aligned models?
  </summary>
  <div class="tp-qa-answer">
    <p>Evaluating DPO-aligned models requires alignment-specific benchmarks: (1) Preference accuracy — on held-out preference pairs, measure how often the model assigns higher probability to the chosen response vs. the rejected response. A well-aligned model should prefer chosen responses >80% of the time; (2) MT-Bench — multi-turn conversation quality judged by GPT-4. DPO typically improves MT-Bench scores by 0.2-0.5 points over the SFT base; (3) AlpacaEval 2.0 — single-turn instruction following with length-controlled win rate against GPT-4. Measures how well the model follows instructions aligned with human preferences; (4) Reward model score — if available, use an independent reward model to score the model's outputs. DPO should increase the reward score vs. the SFT base; (5) Human evaluation — side-by-side comparison of DPO model vs. SFT base by human raters. Measure win rate; (6) Safety evaluation — test with harmful prompts to ensure alignment didn't reduce safety guardrails. Monitor: KL divergence from reference policy (should not exceed 10-15 nats for stable training), reward accuracy on validation set, and general capability metrics (MMLU) to detect regression. DPO should improve alignment without significantly degrading general capabilities.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft07-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: What are the failure modes of DPO training?
  </summary>
  <div class="tp-qa-answer">
    <p>Common DPO failure modes: (1) Reward hacking — the model learns to increase probability of chosen responses but degenerates (repeats phrases, produces generic output). Prevention: monitor KL divergence and set higher β; (2) Mode collapse — the model converges to a narrow distribution, producing similar responses for different prompts. Prevention: ensure diverse preference data and monitor response diversity metrics (distinct n-grams); (3) Overfitting to preference noise — if the preference dataset has inconsistent labels (chosen is not actually better), the model learns wrong preferences. Prevention: filter low-agreement pairs, use higher β, train for fewer epochs; (4) Catastrophic forgetting — DPO training degrades general capabilities. Prevention: mix in 10-20% SFT data during DPO training (DPO + SFT combined loss), evaluate MMLU before and after; (5) Training instability — loss spikes or NaN values. Prevention: reduce learning rate (5e-7 to 5e-6 for DPO, lower than SFT), enable gradient clipping, use bf16 instead of fp16; (6) Reference model mismatch — if the reference model differs significantly from the policy (e.g., different architecture), the KL penalty may be mis-specified. Prevention: always load the SFT model as both policy and reference initializations. Monitor training curves — loss should decrease steadily. If loss oscillates or increases, reduce learning rate or increase β.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft07-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: How do you combine DPO with SFT training?
  </summary>
  <div class="tp-qa-answer">
    <p>Combining DPO with SFT training is the standard two-stage alignment pipeline: Stage 1 — SFT (Supervised Fine-Tuning): (1) train the base model on high-quality (instruction, response) pairs to teach it to follow instructions; (2) use standard cross-entropy loss on chosen responses only; (3) this produces the SFT model that can follow instructions but may not align with nuanced human preferences. Stage 2 — DPO: (1) load the SFT model as both the policy and reference model; (2) train on (prompt, chosen, rejected) triples using DPO loss; (3) this shifts the policy toward preferred responses and away from dispreferred ones. Benefits: the SFT stage ensures the model can generate coherent responses in the target format, and the DPO stage aligns response quality with human preferences. Without SFT first, DPO may struggle because the model can't generate good enough responses to compare. Combined training: some implementations mix SFT loss and DPO loss in a single stage: <code>L = L_DPO + λ * L_SFT</code> where λ controls the SFT strength (typically 0.1-0.5). The SFT component provides a grounding signal that prevents the model from drifting too far. This combined approach is simpler (one training run) but may not be as effective as the two-stage approach for complex alignment tasks.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft07-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: What are variants of DPO?
  </summary>
  <div class="tp-qa-answer">
    <p>DPO has several variants addressing different limitations: (1) KTO (Kahneman-Tversky Optimization) — uses only one response per prompt (chosen or rejected) instead of pairs. More realistic for production data where you might only have positive or negative feedback, not both. Loss function uses a reference point based on the average reward; (2) IPO (Identity Preference Optimization) — reformulates DPO as a regression problem, removing the dependency on the sigmoid function. More stable when preference pairs are similar in quality; (3) ORPO (Odds Ratio Preference Optimization) — combines SFT and preference optimization into a single training stage without a reference model. Uses a ratio of odds (probability of chosen vs. rejected) as the training signal. Simpler than DPO because no reference model is needed; (4) SimPO (Simple Preference Optimization) — uses average log-probability as the implicit reward instead of reward margin. Simplifies DPO by removing the reference model; (5) CPO (Contrastive Preference Optimization) — adds a negative log-likelihood term to DPO loss to maintain generation quality. These variants typically improve on DPO in specific aspects (data efficiency, stability, simplicity) while maintaining the core insight: direct optimization from preference pairs without a reward model. For most production use cases, standard DPO with β=0.1-0.3 works well as a starting point.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

<details data-qid="ft-s7-quiz1">
<summary><strong>1.</strong> What does DPO directly optimize?</summary>
A. A reward model
B. The policy from preferences
C. The value function
D. The discriminator
Answer: B
</details>

<details data-qid="ft-s7-quiz2">
<summary><strong>2.</strong> How many models does DPO require during training?</summary>
A. 1 (policy)
B. 2 (policy + reference)
C. 3 (policy + reward + value)
D. 4 (policy + reference + reward + critic)
Answer: B
</details>

<details data-qid="ft-s7-quiz3">
<summary><strong>3.</strong> What does the β parameter control?</summary>
A. Learning rate
B. Alignment strength — how much policy can diverge from reference
C. Batch size
D. Weight decay
Answer: B
</details>

<details data-qid="ft-s7-quiz4">
<summary><strong>4.</strong> What is a preference pair?</summary>
A. A prompt and a response
B. A prompt with a chosen and rejected response
C. Two models to compare
D. Two loss functions
Answer: B
</details>

<details data-qid="ft-s7-quiz5">
<summary><strong>5.</strong> What is the primary evaluation metric for DPO?</summary>
A. Perplexity
B. Win rate against base model
C. Training loss
D. Model size
Answer: B
</details>

## Exercises


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition1. Implement the DPO loss function from scratch. Test with synthetic logprobs where chosen has higher probability than rejected, and verify the loss is lower when the margin is larger.

2. Build a preference dataset from pairwise comparisons. Given a prompt and 4 responses with scores [0.9, 0.7, 0.4, 0.1], generate all valid preference pairs and filter by margin >= 0.3.

3. Implement a DPO training loop with β=0.15, batch_size=8, 3 epochs. Track loss, reward margin, and accuracy. Show learning curves.

4. Create a win rate calculator that compares DPO-tuned vs base model outputs. Use simple quality proxies (length, completeness, formatting) to determine winners.

5. Compare DPO (β=0.1) vs DPO (β=0.5) on a small synthetic dataset. Report the reward margin, win rate, and response diversity for each setting. Discuss the tr

## Revision Notes

- Key concept 1: Core principle of 14-fine-tuning-peft
- Key concept 2: Common implementation pattern
- Key concept 3: Time/space complexity to remember
- Key concept 4: When to apply this technique
- Key concept 5: Common interview pattern
- Key concept 6: Edge cases to handle
- Key concept 7: Related concepts for deeper understanding

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
- [ ] Have questions ready about how the company uses 14-fine-tuning-peftade-offs.
