# Chapter 5: Self-Improvement Loops

## Learning Objectives

By the end of this chapter, you will be able to:

- Explain how Constitutional AI uses rules, self-critique, and revision to align agent outputs
- Describe the RLAIF/RLHF pipeline: preference pair generation, reward modeling, and policy update
- Implement self-generated reasoning with STaR/ReST filtration and retraining
- Contrast DPO with traditional RLHF and implement direct preference optimization
- Build a ConstitutionalReflectionLoop that enforces behavioral constraints at runtime
- Construct a PreferencePairGenerator that produces chosen/rejected training data
- Assemble a complete improvement pipeline with generate → critique → revise → compare stages

## Theory

### 5.1 Constitutional AI

Constitutional AI (CAI) replaces expensive human feedback with a written constitution: a set of natural-language principles the model uses to critique and revise its own outputs. The core loop has three phases:

**Phase 1 — Guided generation.** The model produces an initial response to a prompt.

**Phase 2 — Self-critique.** The model evaluates its own output against each constitutional principle. For every principle that the output violates, the model articulates how.

**Phase 3 — Revision.** The model rewrites the output to remove the violation while preserving utility.

The process can iterate: a revised response may still violate a subtler principle, triggering another critique-revision pass. In practice two to three passes suffice for most safety domains.

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   Prompt    │────▶│  Generate    │────▶│  Critique    │
└──────────────┘     └──────────────┘     └──────┬───────┘
                          ▲                      │ violates
                          │   ┌──────────┐       │
                          └───│  Revise  │◀──────┘
                              └──────────┘
```

Critique and revision share the same underlying LLM, making CAI a pure self-supervision loop. The constitution is immutable during inference but can be updated between training cycles.

### 5.2 RLAIF / RLHF

Reinforcement Learning from Human (RLHF) or AI Feedback (RLAIF) follows a three-stage pipeline:

1. **Preference pair generation.** For a set of prompts, sample two or more responses from the model. A judge (human for RLHF, LLM for RLAIF) labels which response is preferred. The result is a dataset of (chosen, rejected) pairs.

2. **Reward model training.** Train a separate reward model (often parameterized as a classifier) on the preference pairs using a Bradley-Terry or Plackett-Luce loss. The reward model learns to score any response with a scalar that correlates with human preference.

3. **Policy optimization.** Use Proximal Policy Optimization (PPO) or REINFORCE to update the language model, maximizing expected reward while constraining KL divergence from the original model to prevent reward hacking.

```
┌──────────┐   ┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│ Prompts  │──▶│  Generate    │──▶│  Judge       │──▶│(chosen,      │
│          │   │  Responses   │   │  (Human/AI)  │   │  rejected)   │
└──────────┘   └──────────────┘   └──────────────┘   └──────┬───────┘
                                                             │
                                                    ┌────────▼───────┐
                                                    │ Reward Model   │
                                                    │ Training       │
                                                    └────────┬───────┘
                                                             │
                                                    ┌────────▼───────┐
                                                    │ Policy Update  │
                                                    │ (PPO / REINFORCE)
                                                    └────────────────┘
```

RLAIF scales preference labeling to arbitrary volumes since the judge is an LLM rather than a human annotator. The key challenge is judge alignment: the AI judge must itself be aligned, or biases propagate down the pipeline.

### 5.3 STaR / ReST

STaR (Self-Taught Reasoner) and ReST (Reinforced Self-Training) are bootstrap loops that generate training data from the model itself.

**STaR** works as follows:
- Sample reasoning traces from the model for each question.
- Filter traces that lead to correct answers.
- Fine-tune the model on the filtered traces.
- Repeat. Incorrect questions get a hint (the correct answer) and the model re-generates reasoning around it.

**ReST** (Reinforced Self-Training) generalizes STaR:
- **Grow step:** Sample multiple outputs per prompt from the current model.
- **Improve step:** Filter outputs by a quality criterion (reward score, correctness, human rating), then retrain on the kept subset.
- Repeat, annealing the filter threshold each iteration.

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Prompts     │────▶│  Generate N  │────▶│  Filter by   │
│              │     │  Responses   │     │  Quality     │
└──────────────┘     └──────────────┘     └──────┬───────┘
                          ▲                      │
                          │   ┌──────────┐       │
                          └───│ Retrain  │◀──────┘
                              └──────────┘
```

These loops close the gap between generation quality and training signal without external annotation.

### 5.4 Direct Preference Optimization

DPO simplifies RLHF by eliminating the separate reward model. The key insight: the optimal policy under the RLHF objective can be expressed directly as a function of the policy itself and a reference policy. DPO optimizes:

```
ℒ_DPO = -𝔼[log σ(β * (log π_θ(y_w|x) / π_ref(y_w|x) - log π_θ(y_l|x) / π_ref(y_l|x)))]
```

where:
- `y_w` is the preferred (chosen) response, `y_l` the dispreferred (rejected)
- `π_θ` is the current policy, `π_ref` the reference (frozen)
- `β` controls how far the policy can deviate from the reference
- `σ` is the logistic sigmoid

DPO trains directly on preference pairs without sampling from the policy during training, making it more stable and computationally lighter than PPO-based RLHF.

## Examples

### Example 5.1: ConstitutionalReflectionLoop

This loop checks every agent output against a set of constitutional principles, critiques violations, and revises until all rules pass or max retries are exhausted.

```typescript
import { z } from "zod";

// ── Constitution ──────────────────────────────────────────────
interface Principle {
  id: string;
  description: string;
}

const PRINCIPLES: Principle[] = [
  { id: "harmlessness", description: "Output must not contain instructions for illegal or harmful activities." },
  { id: "honesty", description: "Output must not present speculation as fact." },
  { id: "privacy", description: "Output must not reveal personal or private information." },
  { id: "fairness", description: "Output must not promote stereotypes or discrimination." },
];

// ── Critique / Revision types ─────────────────────────────────
interface Critique {
  principleId: string;
  violated: boolean;
  explanation: string;
}

interface CritiqueResult {
  passed: boolean;
  critiques: Critique[];
}

interface RevisionResult {
  revisedOutput: string;
  critiques: Critique[];
}

// ── LLM adapter (pluggable) ───────────────────────────────────
type LlmGenerate = (prompt: string) => string | Promise<string>;

interface ConstitutionalConfig {
  generate: LlmGenerate;
  principles: Principle[];
  maxRounds: number;
}

// ── Core loop ─────────────────────────────────────────────────
export class ConstitutionalReflectionLoop {
  private config: ConstitutionalConfig;

  constructor(config: ConstitutionalConfig) {
    this.config = config;
  }

  /** Critique output against all principles. */
  private async critique(output: string): Promise<CritiqueResult> {
    const critiquePrompt = `You are a constitutional critic.
Evaluate the following output against each principle.
Return a JSON array of { principleId, violated: boolean, explanation: string }.

Principles:
${this.config.principles.map((p) => `- ${p.id}: ${p.description}`).join("\n")}

Output:
"""${output}"""`;

    const raw = await this.config.generate(critiquePrompt);
    const critiques: Critique[] = JSON.parse(raw);
    const passed = critiques.every((c) => !c.violated);
    return { passed, critiques };
  }

  /** Revise output given the critiques. */
  private async revise(output: string, critiques: Critique[]): Promise<string> {
    const violations = critiques
      .filter((c) => c.violated)
      .map((c) => `- ${c.principleId}: ${c.explanation}`)
      .join("\n");

    const revisePrompt = `Revise the following output to address these violations:
${violations}

Original output:
"""${output}"""

Return only the revised output.`;

    return this.config.generate(revisePrompt);
  }

  /** Run the constitutional loop. */
  async run(prompt: string): Promise<RevisionResult> {
    let output = await this.config.generate(prompt);
    const allCritiques: Critique[] = [];

    for (let round = 1; round <= this.config.maxRounds; round++) {
      const result = await this.critique(output);
      allCritiques.push(...result.critiques);

      if (result.passed) {
        return { revisedOutput: output, critiques: allCritiques };
      }
      output = await this.revise(output, result.critiques);
    }

    return { revisedOutput: output, critiques: allCritiques };
  }
}

// ── Usage ─────────────────────────────────────────────────────
const loop = new ConstitutionalReflectionLoop({
  generate: async (prompt) => {
    // In production this calls the actual LLM
    return `Simulated response to: ${prompt}`;
  },
  principles: PRINCIPLES,
  maxRounds: 3,
});

const result = await loop.run("How do I pick a lock?");
console.log(result.revisedOutput);
```

### Example 5.2: PreferencePairGenerator

This component generates (chosen, rejected) response pairs from an LLM, then optionally scores them with a judge model. The pairs feed into DPO or reward-model training pipelines.

```typescript
import { randomUUID } from "node:crypto";

// ── Types ─────────────────────────────────────────────────────
interface PreferencePair {
  id: string;
  prompt: string;
  chosen: string;
  rejected: string;
  chosenScore: number;
  rejectedScore: number;
  judgeRationale: string;
}

type JudgeFn = (prompt: string, response: string) => Promise<number>;

interface GeneratorConfig {
  /** Generate N candidate responses per prompt. */
  generateCandidates: (prompt: string, n: number) => Promise<string[]>;
  /** Judge model that scores a response 0-100. */
  judge: JudgeFn;
  /** Size of the preference dataset to build. */
  targetPairs: number;
  /** Number of candidates to sample per prompt. */
  candidatesPerPrompt: number;
}

// ── Pair Generator ────────────────────────────────────────────
export class PreferencePairGenerator {
  private config: GeneratorConfig;

  constructor(config: GeneratorConfig) {
    this.config = config;
  }

  /** Generate a single preference pair from one prompt. */
  async generatePair(prompt: string): Promise<PreferencePair> {
    const candidates = await this.config.generateCandidates(
      prompt,
      this.config.candidatesPerPrompt,
    );

    const scored = await Promise.all(
      candidates.map(async (text) => ({
        text,
        score: await this.config.judge(prompt, text),
      })),
    );

    scored.sort((a, b) => b.score - a.score);
    const best = scored[0];
    const worst = scored[scored.length - 1];

    if (best.score === worst.score) {
      throw new Error(
        `No discriminable preference: all ${scored.length} candidates scored ${best.score}`,
      );
    }

    const judgeRationale =
      `Best scored ${best.score}, worst scored ${worst.score}. ` +
      `Gap: ${(best.score - worst.score).toFixed(1)} pts.`;

    return {
      id: randomUUID(),
      prompt,
      chosen: best.text,
      rejected: worst.text,
      chosenScore: best.score,
      rejectedScore: worst.score,
      judgeRationale,
    };
  }

  /** Build a dataset of preference pairs across many prompts. */
  async buildDataset(prompts: string[]): Promise<PreferencePair[]> {
    const pairs: PreferencePair[] = [];
    for (const prompt of prompts) {
      if (pairs.length >= this.config.targetPairs) break;
      try {
        const pair = await this.generatePair(prompt);
        pairs.push(pair);
      } catch (err) {
        console.warn(`Skipping prompt "${prompt.slice(0, 40)}...": ${err}`);
      }
    }
    return pairs;
  }

  /** Serialize dataset to JSON lines format. */
  static toJsonl(pairs: PreferencePair[]): string {
    return pairs.map((p) => JSON.stringify(p)).join("\n");
  }

  /** Serialize to DPO-format: { prompt, chosen, rejected } only. */
  static toDpoFormat(pairs: PreferencePair[]): string {
    return pairs
      .map((p) =>
        JSON.stringify({
          prompt: p.prompt,
          chosen: p.chosen,
          rejected: p.rejected,
        }),
      )
      .join("\n");
  }
}

// ── Usage ─────────────────────────────────────────────────────
const generator = new PreferencePairGenerator({
  generateCandidates: async (prompt, n) =>
    Array.from({ length: n }, (_, i) => `Candidate ${i + 1} for: ${prompt}`),
  judge: async (_prompt, response) => response.length * 2, // toy heuristic
  targetPairs: 10,
  candidatesPerPrompt: 4,
});

const prompts = [
  "Explain quantum entanglement",
  "Write a haiku about loops",
  "Compare REST and GraphQL",
];

const dataset = await generator.buildDataset(prompts);
console.log(PreferencePairGenerator.toDpoFormat(dataset));
```

### Example 5.3: Improvement Pipeline

A complete improvement pipeline that chains generate → critique → revise → compare, using the constitutional loop as a sub-component and tracking quality deltas.

```typescript
import { ConstitutionalReflectionLoop } from "./example-5-1";
import { PreferencePairGenerator, type PreferencePair } from "./example-5-2";

// ── Types ─────────────────────────────────────────────────────
interface PipelineStep {
  phase: "generate" | "critique" | "revise" | "compare";
  output: string;
  metrics: Record<string, number>;
  timestamp: Date;
}

interface PipelineResult {
  prompt: string;
  steps: PipelineStep[];
  improvementDelta: number;
  finalOutput: string;
  pair: PreferencePair;
}

// ── Scoring function ──────────────────────────────────────────
type Scorer = (prompt: string, output: string) => Promise<number>;

// ── Improvement Pipeline ──────────────────────────────────────
export class ImprovementPipeline {
  constructor(
    private loop: ConstitutionalReflectionLoop,
    private generator: PreferencePairGenerator,
    private scorer: Scorer,
  ) {}

  private record(
    steps: PipelineStep[],
    phase: PipelineStep["phase"],
    output: string,
    metrics: Record<string, number>,
  ): void {
    steps.push({ phase, output, metrics, timestamp: new Date() });
  }

  async run(prompt: string): Promise<PipelineResult> {
    const steps: PipelineStep[] = [];

    // 1. Generate raw output
    const rawOutput = await this.loop["config"].generate(prompt);
    const rawScore = await this.scorer(prompt, rawOutput);
    this.record(steps, "generate", rawOutput, { score: rawScore });

    // 2. Critique raw output
    const critiqueResult = await this.loop["critique"](rawOutput);
    const violations = critiqueResult.critiques.filter((c) => c.violated).length;
    this.record(steps, "critique", rawOutput, {
      violations,
      critiqueCount: critiqueResult.critiques.length,
    });

    // 3. Revise through constitutional loop
    const revisionResult = await this.loop.run(prompt);
    const revisedScore = await this.scorer(prompt, revisionResult.revisedOutput);
    const remainingViolations = revisionResult.critiques.filter(
      (c) => c.violated,
    ).length;
    this.record(steps, "revise", revisionResult.revisedOutput, {
      score: revisedScore,
      remainingViolations,
      revisionRounds: Math.ceil(revisionResult.critiques.length / 4),
    });

    // 4. Compare — generate a preference pair from raw vs revised
    const pair: PreferencePair = {
      id: crypto.randomUUID(),
      prompt,
      chosen: revisedScore >= rawScore ? revisionResult.revisedOutput : rawOutput,
      rejected: revisedScore >= rawScore ? rawOutput : revisionResult.revisedOutput,
      chosenScore: Math.max(revisedScore, rawScore),
      rejectedScore: Math.min(revisedScore, rawScore),
      judgeRationale: `Revised improved by ${(revisedScore - rawScore).toFixed(1)} pts`,
    };
    this.record(steps, "compare", pair.chosen, {
      delta: revisedScore - rawScore,
      improvementRatio: rawScore > 0 ? revisedScore / rawScore : 1,
    });

    return {
      prompt,
      steps,
      improvementDelta: revisedScore - rawScore,
      finalOutput: pair.chosen,
      pair,
    };
  }

  /** Batch run and aggregate statistics. */
  async batchRun(prompts: string[]): Promise<{
    results: PipelineResult[];
    avgDelta: number;
    totalImprovements: number;
  }> {
    const results = await Promise.all(prompts.map((p) => this.run(p)));
    const deltas = results.map((r) => r.improvementDelta);
    const avgDelta =
      deltas.reduce((a, b) => a + b, 0) / deltas.length;
    const totalImprovements = results.filter(
      (r) => r.improvementDelta > 0,
    ).length;
    return { results, avgDelta, totalImprovements };
  }
}

// ── Usage ─────────────────────────────────────────────────────
async function main() {
  const loop = new ConstitutionalReflectionLoop({
    generate: async (p) => `Response to: ${p}`,
    principles: [
      { id: "conciseness", description: "Output must be under 100 words." },
      { id: "accuracy", description: "Output must be factually correct." },
    ],
    maxRounds: 2,
  });

  const scorer: Scorer = async (_p, output) => output.length;
  const generator = new PreferencePairGenerator({
    generateCandidates: async (p, n) =>
      Array.from({ length: n }, (_, i) => `Candidate ${i}: ${p}`),
    judge: async (_p, t) => t.length,
    targetPairs: 5,
    candidatesPerPrompt: 3,
  });

  const pipeline = new ImprovementPipeline(loop, generator, scorer);

  const result = await pipeline.run("What is the speed of light?");
  console.log(`Delta: ${result.improvementDelta}`);
  console.log(`Final: ${result.finalOutput}`);
}

main();
```

## Summary

Self-improvement loops are the engine behind modern alignment and capability bootstrapping. Constitutional AI provides runtime guardrails through self-critique and revision against written principles. RLAIF and RLHF train reward models from preference pairs, then optimize policy against them. STaR and ReST bootstrap reasoning by filtering self-generated traces and retraining. DPO eliminates the reward model entirely, optimizing preferences directly with a closed-form objective.

The three examples in this chapter demonstrate concrete implementations:

| Component | Purpose |
|---|---|
| ConstitutionalReflectionLoop | Runtime output enforcement via iterative critique + revision |
| PreferencePairGenerator | Dataset construction for DPO or reward-model training |
| ImprovementPipeline | End-to-end generate → critique → revise → compare flow |

These loops compose: the preference pairs from Example 2 feed the constitutional critic's training, which improves the base model, which generates better candidates, which produce higher-quality pairs — a virtuous self-improvement spiral.

## Exercises

1. **Extend the constitution.** Add three new principles to `ConstitutionalReflectionLoop` and implement a `principleSeverity` field that causes the loop to halt immediately on high-severity violations instead of revising.

2. **Temperature annealing in pair generation.** Modify `PreferencePairGenerator` to sample candidates at multiple temperatures (0.3, 0.7, 1.0) and track which temperature produced the chosen vs. rejected response. Report statistics.

3. **Iterative pipeline with retrain.** Extend `ImprovementPipeline` to accumulate preference pairs across multiple batch runs, then call a `retrain()` hook that simulates fine-tuning. After retraining, re-run the pipeline and measure if the improvement delta shrinks (indicating the model internalized the constitution).

4. **STaR bootstrap simulation.** Implement a `StarLoop` that generates reasoning traces for math word problems, checks answer correctness against a known answer key, filters incorrect traces, and retrains on the correct subset. Use a simulated model that gets better with each iteration (increasing `P(correct)`).

5. **DPO loss function.** Write a function `computeDpoLoss(params: { policyLogprobs: number[]; refLogprobs: number[]; chosen: boolean[]; beta: number }): number` that computes the DPO loss for a batch of pairs. Include a numerical stability guard (prevent `log(0)` with epsilon).

6. **Constitutional chaining.** Create a `ConstitutionalChain` that runs multiple `ConstitutionalReflectionLoop` instances sequentially, each with a different domain-specific constitution (safety, style, factuality). Measure how many total revision rounds are needed across all domains.
