# Chapter 6: Production Loops

## Learning Objectives

By the end of this chapter, you will be able to:

- Design and implement a deploy → monitor → drift-detect → retrain → redeploy pipeline
- Deploy shadow and canary deployments that compare production vs. candidate models
- Build a cost governor loop that tracks token usage, per-iteration accounting, and auto-halting
- Construct observability loops with structured traces, derived metrics, and alert thresholds
- Define SLIs and SLOs for agent quality and map them to runbook actions
- Implement a ProductionLoopManager with timestamped lifecycle steps
- Implement an AgentCostGovernor with budget-aware execution and max-retry halting
- Implement a ShadowDeployer that scores production and candidate responses in parallel

## Theory

### 6.1 Production Deployment Pipeline

The standard production loop for AI agents follows a continuous lifecycle:

```
┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐
│  Deploy  │──▶│ Monitor  │──▶│  Detect  │──▶│ Retrain  │──▶│ Redeploy │
│          │   │          │   │  Drift   │   │          │   │          │
└──────────┘   └──────────┘   └──────────┘   └──────────┘   └──────────┘
                                                                    │
                                                                    └──────▶ loop
```

Each phase has specific responsibilities:

**Deploy.** Push a new model version or agent configuration to a serving infrastructure. Tag the deployment with a version, timestamp, and rollback metadata. The deployment must be idempotent: deploying the same version twice yields identical behaviour.

**Monitor.** Collect structured logs from every agent invocation: input, output, latency, token count, error code. Aggregate these into time-series metrics (5th, 50th, 95th percentiles) and expose them through a metrics endpoint.

**Detect drift.** Compare current metrics against a baseline window. Common drift signals: rising latency, falling task-completion rate, increasing retry counts, shift in output-token distribution, spike in refusal or guardrail-hit rates. Use statistical tests (Kolmogorov–Smirnov, Z-score) to trigger alerts.

**Retrain.** When drift exceeds a threshold, enqueue a retraining job. The retraining dataset includes recent production data (with PII scrubbed) plus any newly collected preference pairs or human corrections. The new model version is validated on a held-out test set before entering the deploy phase.

**Redeploy.** Swap the production model with the validated candidate. Strategies: blue-green (instant swap with pre-warmed infrastructure) or canary (gradual traffic shift with automatic rollback).

### 6.2 Shadow and Canary Deployment

**Shadow deployment.** Route production traffic to both the current model and a candidate model simultaneously, but only serve the current model's response to the user. The candidate's response is recorded and scored offline. Shadow deployment has zero user-facing risk because the candidate never affects the user.

```
                    ┌────────────────┐
 User ──request───▶│  Traffic Split │
                    └────┬────┬──────┘
                         │    │
                         │    └──▶ Candidate Model (scored, discarded)
                         │
                         └──▶ Production Model (served to user)
```

**Canary deployment.** Route a small percentage of real traffic (e.g. 5%) to the candidate model and serve its response to those users. Monitor error rates and quality metrics. If metrics stay within SLO for a window (e.g. 30 minutes), gradually increase the canary percentage to 25%, 50%, 100%. Roll back immediately if any metric breaches the threshold.

```
Traffic: [████████████████░░░░] 80% production / 20% canary
         ─── monitor for N minutes ───
         [████████████░░░░░░░░] 60% production / 40% canary
         ─── monitor ───
         [░░░░░░░░░░░░░░░░░░░░] 100% canary (promoted)
```

### 6.3 Cost Governor Loops

Agent loops can execute hundreds of LLM calls per task. Without a cost governor, a runaway agent can burn through budget in minutes. The cost governor implements three controls:

**Budget tracking.** Each request context carries a budget (e.g. $0.50 per task, 10,000 tokens per request). Every LLM call deducts from the budget. The governor maintains running totals at the request, session, and account level.

**Per-iteration accounting.** Each loop iteration records the cost incurred: model used, input tokens, output tokens, compute time. These records feed into real-time cost dashboards and post-hoc billing.

**Auto-halt.** When the budget is exhausted, the governor stops the agent mid-flight, persists its state, and raises an alert. Optionally it can switch to a cheaper fallback model (e.g. GPT-4o-mini) for the remaining steps.

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Loop Step   │────▶│  Record Cost │────▶│  Budget OK?  │──yes──▶ continue
└──────────────┘     └──────────────┘     └──────┬───────┘
                                                  │ no
                                                  ▼
                                          ┌──────────────┐
                                          │  Halt /      │
                                          │  Fallback    │
                                          └──────────────┘
```

### 6.4 Observability Loops

Observability for AI systems goes beyond traditional application monitoring. The three pillars apply, but with agent-specific extensions:

**Traces.** A trace represents one end-user request through the entire agent loop. Each span within the trace captures a single LLM call, tool invocation, or decision step. Spans carry metadata: model name, token counts, latency, retry count, the exact prompt and response.

**Metrics.** Derived from traces at aggregation time. Key metrics:
- `agent.latency.p50`, `agent.latency.p95` — response time distribution
- `agent.tokens.prompt.avg`, `agent.tokens.completion.avg` — token consumption
- `agent.steps.per_request` — loop iteration count
- `agent.error_rate` — fraction of requests with errors
- `agent.drift.score` — distribution shift relative to baseline

**Alerts.** Threshold-based and trend-based. Examples:
- P95 latency > 5s for 5 consecutive minutes → page
- Error rate > 2% in 1-minute window → warn
- Drift score > 0.15 relative to 24h baseline → investigate

### 6.5 SRE for AI Systems

Service-Level Objectives for agent loops require careful definition because quality is multi-dimensional:

| SLI | Definition | Target SLO |
|---|---|---|
| Task completion rate | Fraction of requests where the agent completes its stated goal | ≥ 99.0% |
| Valid response rate | Fraction of responses that parse, pass validation, and contain no hallucinated facts | ≥ 99.5% |
| Latency P95 | 95th percentile of end-to-end response time | ≤ 8 seconds |
| Cost per request | Average LLM API cost per request | ≤ $0.03 |
| Safety violation rate | Fraction of responses flagged by the constitutional critic | ≤ 0.1% |

An error budget of 100% − SLO defines how much unreliability is acceptable per month. When the budget is depleted, all non-critical deployments freeze until reliability recovers.

## Examples

### Example 6.1: ProductionLoopManager

A lifecycle manager that orchestrates deploy → monitor → drift-detect → retrain → redeploy with full timestamped logging.

```typescript
import { randomUUID } from "node:crypto";

// ── Types ─────────────────────────────────────────────────────
interface Deployment {
  id: string;
  modelVersion: string;
  deployedAt: Date;
  status: "active" | "draining" | "rolled-back";
}

interface MetricSnapshot {
  timestamp: Date;
  latencyP50: number;
  latencyP95: number;
  errorRate: number;
  avgTokensPerRequest: number;
  taskCompletionRate: number;
}

interface DriftReport {
  detected: boolean;
  score: number;
  threshold: number;
  signals: string[];
  generatedAt: Date;
}

type LifecycleStep =
  | "deploy"
  | "monitor"
  | "drift-detect"
  | "retrain"
  | "rollback";

interface LifecycleEvent {
  step: LifecycleStep;
  deploymentId: string;
  timestamp: Date;
  detail: string;
}

// ── Configuration ─────────────────────────────────────────────
interface ProductionLoopConfig {
  modelVersion: string;
  driftThreshold: number;
  monitorWindowMinutes: number;
  retrainHook: () => Promise<string>; // returns new model version
}

// ── Loop Manager ──────────────────────────────────────────────
export class ProductionLoopManager {
  private config: ProductionLoopConfig;
  private events: LifecycleEvent[] = [];
  private deployment: Deployment;
  private metricsBuffer: MetricSnapshot[] = [];
  private baseline: MetricSnapshot | null = null;

  constructor(config: ProductionLoopConfig) {
    this.config = config;
    this.deployment = {
      id: randomUUID(),
      modelVersion: config.modelVersion,
      deployedAt: new Date(),
      status: "active",
    };
  }

  // ── Logging ─────────────────────────────────────────────────
  private log(
    step: LifecycleStep,
    detail: string,
  ): void {
    this.events.push({
      step,
      deploymentId: this.deployment.id,
      timestamp: new Date(),
      detail,
    });
  }

  get history(): readonly LifecycleEvent[] {
    return this.events;
  }

  // ── Deploy ──────────────────────────────────────────────────
  async deploy(version?: string): Promise<void> {
    if (version) {
      this.deployment = {
        id: randomUUID(),
        modelVersion: version,
        deployedAt: new Date(),
        status: "active",
      };
    }
    this.log("deploy", `Deployed ${this.deployment.modelVersion}`);
  }

  // ── Monitor ─────────────────────────────────────────────────
  ingestMetric(snapshot: MetricSnapshot): void {
    this.metricsBuffer.push(snapshot);

    // Keep only the configured window
    const cutoff = Date.now() - this.config.monitorWindowMinutes * 60_000;
    this.metricsBuffer = this.metricsBuffer.filter(
      (m) => m.timestamp.getTime() > cutoff,
    );

    this.log("monitor", `Ingested snapshot at ${snapshot.timestamp.toISOString()}`);
  }

  private currentMetrics(): MetricSnapshot | null {
    if (this.metricsBuffer.length === 0) return null;
    const recent = this.metricsBuffer[this.metricsBuffer.length - 1];
    return recent;
  }

  // ── Drift Detect ────────────────────────────────────────────
  async detectDrift(): Promise<DriftReport> {
    const current = this.currentMetrics();
    if (!current) {
      return { detected: false, score: 0, threshold: this.config.driftThreshold, signals: [], generatedAt: new Date() };
    }

    // First call establishes baseline
    if (!this.baseline) {
      this.baseline = current;
      this.log("drift-detect", "Baseline established");
      return { detected: false, score: 0, threshold: this.config.driftThreshold, signals: [], generatedAt: new Date() };
    }

    const signals: string[] = [];
    let score = 0;

    // Compare current against baseline
    const latencyDelta = Math.abs(current.latencyP95 - this.baseline.latencyP95);
    if (latencyDelta > 1.0) {
      signals.push(`Latency P95 shifted by ${latencyDelta.toFixed(2)}s`);
      score += 0.3;
    }

    const errDelta = current.errorRate - this.baseline.errorRate;
    if (errDelta > 0.01) {
      signals.push(`Error rate increased ${(errDelta * 100).toFixed(1)}%`);
      score += 0.4;
    }

    const completionDelta = this.baseline.taskCompletionRate - current.taskCompletionRate;
    if (completionDelta > 0.02) {
      signals.push(`Task completion dropped ${(completionDelta * 100).toFixed(1)}%`);
      score += 0.3;
    }

    const detected = score >= this.config.driftThreshold;
    if (detected) {
      this.log("drift-detect", `Drift detected: score=${score.toFixed(2)} signals=${signals.join("; ")}`);
    }

    return { detected, score, threshold: this.config.driftThreshold, signals, generatedAt: new Date() };
  }

  // ── Retrain ─────────────────────────────────────────────────
  async retrain(): Promise<void> {
    this.log("retrain", "Retraining triggered");
    const newVersion = await this.config.retrainHook();
    this.log("retrain", `New model version: ${newVersion}`);
    this.deployment.modelVersion = newVersion;
    this.baseline = null; // reset baseline for new model
  }

  // ── Full cycle ──────────────────────────────────────────────
  async runCycle(): Promise<DriftReport> {
    this.log("deploy", `Cycle start, version ${this.deployment.modelVersion}`);
    const drift = await this.detectDrift();
    if (drift.detected) {
      await this.retrain();
    }
    return drift;
  }
}

// ── Usage ─────────────────────────────────────────────────────
const manager = new ProductionLoopManager({
  modelVersion: "gpt-4o-2025-08-01",
  driftThreshold: 0.5,
  monitorWindowMinutes: 10,
  retrainHook: async () => "gpt-4o-2025-09-01-fine-tuned-v2",
});

await manager.deploy();

manager.ingestMetric({
  timestamp: new Date(),
  latencyP50: 1.2,
  latencyP95: 3.8,
  errorRate: 0.005,
  avgTokensPerRequest: 420,
  taskCompletionRate: 0.995,
});

const report = await manager.runCycle();
console.log(report);
```

### Example 6.2: AgentCostGovernor

A budget-aware execution wrapper that tracks token usage, computes per-iteration cost, enforces per-request and per-session budgets, and automatically halts the agent with a persisted checkpoint.

```typescript
import { randomUUID } from "node:crypto";

// ── Cost model ────────────────────────────────────────────────
interface ModelPricing {
  inputPricePer1kTokens: number;  // USD
  outputPricePer1kTokens: number;
}

const PRICING: Record<string, ModelPricing> = {
  "gpt-4o":       { inputPricePer1kTokens: 0.005,  outputPricePer1kTokens: 0.015 },
  "gpt-4o-mini":  { inputPricePer1kTokens: 0.00015, outputPricePer1kTokens: 0.0006 },
  "claude-3.5-sonnet": { inputPricePer1kTokens: 0.003, outputPricePer1kTokens: 0.015 },
};

// ── Per-iteration record ──────────────────────────────────────
interface CostRecord {
  iteration: number;
  model: string;
  inputTokens: number;
  outputTokens: number;
  cost: number;
  timestamp: Date;
}

interface BudgetConfig {
  /** Maximum total cost per single request. */
  maxCostPerRequest: number;
  /** Maximum total cost across a session. */
  sessionBudget: number;
  /** Hard limit on loop iterations. */
  maxIterations: number;
  /** Fallback model cheaper than the primary. */
  fallbackModel?: string;
}

// ── Checkpoint ────────────────────────────────────────────────
interface Checkpoint {
  sessionId: string;
  step: number;
  state: unknown;
  accumulatedCost: number;
}

// ── Cost Governor ─────────────────────────────────────────────
export class AgentCostGovernor {
  private config: BudgetConfig;
  private records: CostRecord[] = [];
  private sessionId: string;
  private halted = false;

  constructor(config: BudgetConfig) {
    this.config = config;
    this.sessionId = randomUUID();
  }

  get sessionBudgetUsed(): number {
    return this.records.reduce((sum, r) => sum + r.cost, 0);
  }

  get requestBudgetUsed(): number {
    const last = this.records.slice(-this.config.maxIterations);
    return last.reduce((sum, r) => sum + r.cost, 0);
  }

  get isHalted(): boolean {
    return this.halted;
  }

  /** Compute cost for a single call. */
  private computeCost(
    model: string,
    inputTokens: number,
    outputTokens: number,
  ): number {
    const pricing = PRICING[model];
    if (!pricing) throw new Error(`Unknown model: ${model}`);
    const inputCost = (inputTokens / 1000) * pricing.inputPricePer1kTokens;
    const outputCost = (outputTokens / 1000) * pricing.outputPricePer1kTokens;
    return inputCost + outputCost;
  }

  /** Record a cost entry and check budgets. Returns the model to use (may switch to fallback). */
  recordAndCheck(
    model: string,
    inputTokens: number,
    outputTokens: number,
  ): { approved: boolean; model: string; reason?: string } {
    if (this.halted) {
      return { approved: false, model, reason: "Session already halted" };
    }

    const cost = this.computeCost(model, inputTokens, outputTokens);
    const iteration = this.records.length + 1;

    this.records.push({ iteration, model, inputTokens, outputTokens, cost, timestamp: new Date() });

    // Check max iterations
    if (iteration > this.config.maxIterations) {
      this.halt(`Max iterations (${this.config.maxIterations}) reached`);
      return { approved: false, model, reason: `Max iterations reached` };
    }

    // Check request budget
    if (this.requestBudgetUsed > this.config.maxCostPerRequest) {
      if (this.config.fallbackModel && model !== this.config.fallbackModel) {
        // Switch to fallback instead of halting
        return { approved: true, model: this.config.fallbackModel, reason: "Switched to fallback" };
      }
      this.halt(`Request budget ($${this.config.maxCostPerRequest}) exceeded`);
      return { approved: false, model, reason: "Request budget exceeded" };
    }

    // Check session budget
    if (this.sessionBudgetUsed > this.config.sessionBudget) {
      this.halt(`Session budget ($${this.config.sessionBudget}) exceeded`);
      return { approved: false, model, reason: "Session budget exceeded" };
    }

    return { approved: true, model };
  }

  /** Persist state to checkpoint. */
  checkpoint(state: unknown): Checkpoint {
    return {
      sessionId: this.sessionId,
      step: this.records.length,
      state,
      accumulatedCost: this.sessionBudgetUsed,
    };
  }

  private halt(reason: string): void {
    this.halted = true;
    console.error(`[CostGovernor] HALT: ${reason}`);
  }

  /** Export cost records for dashboards. */
  exportRecords(): CostRecord[] {
    return [...this.records];
  }

  /** Summary stats. */
  summary(): { totalCost: number; totalTokens: number; iterations: number; halted: boolean } {
    return {
      totalCost: this.sessionBudgetUsed,
      totalTokens: this.records.reduce((s, r) => s + r.inputTokens + r.outputTokens, 0),
      iterations: this.records.length,
      halted: this.halted,
    };
  }
}

// ── Usage ─────────────────────────────────────────────────────
const governor = new AgentCostGovernor({
  maxCostPerRequest: 0.10,
  sessionBudget: 1.0,
  maxIterations: 50,
  fallbackModel: "gpt-4o-mini",
});

for (let i = 0; i < 60; i++) {
  const { approved, model, reason } = governor.recordAndCheck("gpt-4o", 500, 200);
  if (!approved) {
    console.log(`Stopped at iteration ${i + 1}: ${reason}`);
    break;
  }
  if (model !== "gpt-4o") {
    console.log(`Iteration ${i + 1}: switched to ${model}`);
  }
}

console.log(governor.summary());
```

### Example 6.3: ShadowDeployer

A shadow deployer that routes requests to both production and candidate models, collects latency and quality scores, and decides whether to promote the candidate.

```typescript
import { randomUUID } from "node:crypto";
import { z } from "zod";

// ── Types ─────────────────────────────────────────────────────
interface ShadowResult {
  requestId: string;
  prompt: string;
  production: { output: string; latencyMs: number };
  candidate: { output: string; latencyMs: number };
  qualityScore: { production: number; candidate: number };
  promoted: boolean;
  timestamp: Date;
}

type ModelFn = (prompt: string) => Promise<{ output: string; latencyMs: number }>;
type QualityScorer = (prompt: string, output: string) => Promise<number>;

// ── Promotion Config ──────────────────────────────────────────
interface PromotionThresholds {
  /** Candidate must score at least this much higher than production. */
  minScoreDelta: number;
  /** Candidate latency P95 must be no worse than this multiple of production. */
  maxLatencyRatio: number;
  /** Minimum number of shadow samples before promotion. */
  minSamples: number;
}

// ── Shadow Deployer ───────────────────────────────────────────
export class ShadowDeployer {
  private results: ShadowResult[] = [];
  private promoted = false;

  constructor(
    private productionModel: ModelFn,
    private candidateModel: ModelFn,
    private scorer: QualityScorer,
    private thresholds: PromotionThresholds,
    private onPromote?: (deployer: ShadowDeployer) => Promise<void>,
  ) {}

  get isPromoted(): boolean {
    return this.promoted;
  }

  get totalRuns(): number {
    return this.results.length;
  }

  /** Run a single shadow request. */
  async runRequest(prompt: string): Promise<ShadowResult> {
    const requestId = randomUUID();

    // Run both models in parallel
    const [prodResult, candResult] = await Promise.all([
      this.productionModel(prompt),
      this.candidateModel(prompt),
    ]);

    // Score both outputs
    const [prodScore, candScore] = await Promise.all([
      this.scorer(prompt, prodResult.output),
      this.scorer(prompt, candResult.output),
    ]);

    const result: ShadowResult = {
      requestId,
      prompt,
      production: { output: prodResult.output, latencyMs: prodResult.latencyMs },
      candidate: { output: candResult.output, latencyMs: candResult.latencyMs },
      qualityScore: { production: prodScore, candidate: candScore },
      promoted: false,
      timestamp: new Date(),
    };

    this.results.push(result);

    // Check promotion conditions
    if (
      !this.promoted &&
      this.results.length >= this.thresholds.minSamples &&
      this.shouldPromote()
    ) {
      await this.promote();
    }

    return result;
  }

  /** Aggregate scores across all runs. */
  private aggregates(): {
    avgProdScore: number;
    avgCandScore: number;
    avgProdLatency: number;
    avgCandLatency: number;
  } {
    const n = this.results.length;
    if (n === 0) return { avgProdScore: 0, avgCandScore: 0, avgProdLatency: 0, avgCandLatency: 0 };

    const sum = (key: (r: ShadowResult) => number) =>
      this.results.reduce((a, r) => a + key(r), 0);

    return {
      avgProdScore: sum((r) => r.qualityScore.production) / n,
      avgCandScore: sum((r) => r.qualityScore.candidate) / n,
      avgProdLatency: sum((r) => r.production.latencyMs) / n,
      avgCandLatency: sum((r) => r.candidate.latencyMs) / n,
    };
  }

  /** Decision logic for promotion. */
  private shouldPromote(): boolean {
    const agg = this.aggregates();
    const scoreDelta = agg.avgCandScore - agg.avgProdScore;
    const latencyRatio = agg.avgCandLatency / Math.max(agg.avgProdLatency, 0.01);

    return (
      scoreDelta >= this.thresholds.minScoreDelta &&
      latencyRatio <= this.thresholds.maxLatencyRatio
    );
  }

  /** Execute promotion callback. */
  private async promote(): Promise<void> {
    this.promoted = true;
    this.results.forEach((r) => (r.promoted = true));
    await this.onPromote?.(this);
  }

  /** Export full shadow results for observability. */
  exportResults(): ShadowResult[] {
    return [...this.results];
  }

  /** Generate a comparison report. */
  report(): string {
    const agg = this.aggregates();
    return [
      `ShadowDeployer Report`,
      `Samples: ${this.results.length}`,
      `Promoted: ${this.promoted}`,
      `Production avg score: ${agg.avgProdScore.toFixed(2)}`,
      `Candidate avg score: ${agg.avgCandScore.toFixed(2)}`,
      `Score delta: ${(agg.avgCandScore - agg.avgProdScore).toFixed(2)}`,
      `Production avg latency: ${agg.avgProdLatency.toFixed(0)}ms`,
      `Candidate avg latency: ${agg.avgCandLatency.toFixed(0)}ms`,
    ].join("\n");
  }
}

// ── Usage ─────────────────────────────────────────────────────
async function main() {
  const productionModel: ModelFn = async (prompt) => ({
    output: `Production answer: ${prompt}`,
    latencyMs: 800 + Math.random() * 400,
  });

  const candidateModel: ModelFn = async (prompt) => ({
    output: `Candidate answer: ${prompt} (improved)`,
    latencyMs: 600 + Math.random() * 300,
  });

  const scorer: QualityScorer = async (_prompt, output) =>
    output.includes("improved") ? 92 : 75;

  const deployer = new ShadowDeployer(
    productionModel,
    candidateModel,
    scorer,
    {
      minScoreDelta: 10,
      maxLatencyRatio: 1.5,
      minSamples: 5,
    },
    async (dep) => {
      console.log("CANDIDATE PROMOTED!");
      console.log(dep.report());
    },
  );

  for (let i = 0; i < 8; i++) {
    const result = await deployer.runRequest(`Request ${i + 1}`);
    console.log(
      `Run ${i + 1}: prod=${result.qualityScore.production} cand=${result.qualityScore.candidate}`,
    );
  }
}

main();
```

## Summary

Production loops close the gap between a model that works in a notebook and one that stays reliable under real traffic. The deploy → monitor → drift-detect → retrain → redeploy pipeline provides a continuous lifecycle that automatically detects and corrects degradation. Shadow and canary deployments let you validate model changes with zero or bounded user impact.

Cost governor loops are essential for production AI because API costs scale with loop depth, not just request count. A governor that tracks per-iteration cost and enforces budgets prevents runaway spending and gives operators hard limits for capacity planning.

Observability loops extend standard telemetry with agent-specific dimensions: trace spans per loop iteration, prompt and completion token distributions, completion quality scores, and drift metrics. These feed both real-time dashboards and the drift-detection component, closing the observability-to-action loop.

The three examples cover the critical production patterns:

| Component | Purpose |
|---|---|
| ProductionLoopManager | Lifecycle orchestration with timestamped deploy/monitor/drift/retrain |
| AgentCostGovernor | Budget enforcement, per-iteration accounting, auto-halt |
| ShadowDeployer | Parallel production/candidate scoring with promotion logic |

## Exercises

1. **Canary deployer.** Implement a `CanaryDeployer` that gradually shifts traffic from production to candidate in 5% increments, waits for a configurable observation window at each step, and rolls back on any SLO breach. Use `ProductionLoopManager.ingestMetric` for monitoring.

2. **Multi-model cost governor.** Extend `AgentCostGovernor` to support a prioritized model list (`["claude-3.5-sonnet", "gpt-4o-mini", "claude-3-haiku"]`). It should start with the most capable model and downgrade through the list as budget depletes, never halting unless all models are exhausted.

3. **SLO monitor.** Build an `SloMonitor` class that accepts SLI definitions (name, measurement function, target threshold, compliance window). It tracks SLI compliance over rolling windows and emits events when the error budget is 50% depleted and 100% depleted.

4. **Observability trace exporter.** Implement a `TraceExporter` that wraps any agent loop and emits OpenTelemetry-compatible spans for each iteration. Each span should carry attributes: `model_name`, `input_tokens`, `output_tokens`, `iteration_number`, and a `loop_id` attribute linking all spans for one request.

5. **Drift detector with KS test.** Replace the heuristic drift scoring in `ProductionLoopManager.detectDrift` with a two-sample Kolmogorov–Smirnov test comparing the current window's latency distribution against the baseline. Use a significance threshold of p < 0.05.

6. **Alert router.** Implement an `AlertRouter` that accepts `DriftReport` and `CostRecord` events and routes them to configurable channels: Slack webhook, PagerDuty, email, or a silent log. Include a deduplication window so the same alert type fires at most once per 15 minutes.
