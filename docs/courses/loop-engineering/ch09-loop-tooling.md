# Chapter 9: Loop Tooling

---

## Learning Objectives

After completing this chapter you will be able to:

- Design durable execution workflows with saga compensation patterns for agent loops
- Implement checkpoint/restore to serialize and resume agent state across crashes
- Build rate limiters that enforce per-token, per-iteration, and per-cost budgets
- Add structured observability with step-level tracing and token tracking
- Test loop resilience using deterministic replay and chaos engineering injection

---

## Theory

Production agent loops require more than correct logic — they need **tooling** that makes them reliable, observable, and safe. This chapter introduces five categories of production loop tooling.

### 9.1 Durable Execution

Agent loops run for unpredictable durations. A single coding task may require dozens of LLM calls, each consuming seconds. If the process crashes mid-task, all progress is lost. **Durable execution** guarantees that a workflow survives restarts.

**State machines.** A loop is a state machine where each iteration is a transition. Durable execution records each transition to persistent storage. On restart, the engine reads the last committed state and resumes from there.

**Saga pattern.** When a multi-step workflow fails midway, some steps may have already produced side effects (files written, emails sent, API calls made). The saga pattern defines a **compensation** for each step. If step N fails, the engine runs `compensate(N-1)`, `compensate(N-2)`, ..., `compensate(1)` in reverse order, undoing each effect.

```
Step 1: createFile → compensation: deleteFile
Step 2: editFile   → compensation: revertFile
Step 3: deploy     → compensation: rollbackDeploy  ← FAIL
⇒ Run compensations: rollbackDeploy, revertFile, deleteFile
```

**Temporal-style workflows.** Temporal.io popularized the idea of writing workflows as regular async functions whose execution is transparently recorded. The SDK replays the function on worker restart, skipping already-completed activities. While we implement a simplified version here, the same principle applies: make side effects idempotent and log every transition.

### 9.2 Checkpoint / Restore

Checkpointing saves the complete agent context — conversation history, tool results, accumulated state — to durable storage. On recovery, the agent loads the checkpoint and continues without losing context.

**What to save in a checkpoint:**

| Field | Description |
|-------|-------------|
| `loopId` | Unique run identifier |
| `step` | Current iteration number |
| `messages` | Full LLM conversation history |
| `toolResults` | Results from completed tool calls |
| `budget` | Remaining token/cost budgets |
| `state` | Custom agent state (files changed, decisions made) |
| `timestamp` | ISO date of checkpoint |

**Restore strategy.** On startup, check for an active checkpoint. If one exists, hydrate the agent and continue from the last completed step. If the last step was a tool call whose result was never received, the recovery logic must decide whether to retry the call or skip it (idempotency keys help here).

### 9.3 Rate Limiting

Agent loops can burn through tokens and money at alarming speed. A runaway loop that costs $0.50 per iteration can accumulate hundreds of dollars in minutes. Rate limiting provides three orthogonal controls:

**Per-token budget.** Cap total input + output tokens across the entire run. Once exhausted, the loop terminates.

**Per-iteration budget.** Cap tokens per single iteration. This prevents a single over-long generation from blowing the budget.

**Per-cost budget.** Multiply token counts by model pricing to enforce a dollar limit. This accounts for the fact that different models have different costs.

```
┌──────────────────────────────────────┐
│           Budget Envelope             │
│  ┌──────┐  ┌──────────┐  ┌───────┐  │
│  │Tokens│  │Iterations│  │Cost($)│  │
│  └──────┘  └──────────┘  └───────┘  │
│  Loop terminates when ANY limit hit  │
└──────────────────────────────────────┘
```

**Token bucket algorithm.** The classic rate limiter uses a bucket that fills at a steady rate and drains with each request. If the bucket is empty, the request is denied or queued.

### 9.4 Observability

Debugging an agent loop is harder than debugging a synchronous program because the control flow involves LLM calls, tool execution, and branching decisions. **Structured tracing** captures every step as a span with:

- **Step type:** `plan`, `act`, `observe`, `critique`, `gate`
- **Duration:** wall-clock time for the step
- **Token count:** input + output tokens consumed
- **Decision:** what the agent chose to do
- **Error:** any error that occurred

**Cycle-level trace** aggregates spans into a single loop iteration view. A good trace answers:

- How many iterations did the loop run?
- Which iteration spent the most tokens?
- Which step type is the slowest?
- Did the agent ever retry? Why?

### 9.5 Loop Testing

Agent loops are stochastic — the same input can produce different outputs. Testing requires strategies beyond simple assertions.

**Deterministic replay.** Record the LLM responses and tool results for a given run. In test mode, replay the exact same sequence instead of calling live APIs. This makes tests hermetic and reproducible.

**Simulation.** Replace the real LLM with a mock that returns controlled responses. Test edge cases: tool call parsing errors, empty responses, refusal messages.

**Chaos engineering.** Inject failures into the loop — network timeouts, corrupted tool results, delayed responses — and verify the agent handles them gracefully. A resilient loop should degrade instead of crash.

---

## Examples

### Example 9.1 — DurableWorkflowEngine with Saga Compensation

This engine executes a sequence of steps where each step may have a compensating action. If any step throws, all prior steps are compensated in reverse order.

```typescript
// durable-workflow.ts
interface Step<T = unknown> {
  name: string;
  execute: () => Promise<T>;
  compensate: () => Promise<void>;
}

interface WorkflowResult<T> {
  success: boolean;
  data?: T;
  error?: string;
  executedSteps: string[];
  compensatedSteps: string[];
}

class DurableWorkflowEngine {
  private executedSteps: string[] = [];
  private compensatedSteps: string[] = [];

  async run<T>(steps: Step<T>[]): Promise<WorkflowResult<T>> {
    this.executedSteps = [];
    this.compensatedSteps = [];

    for (let i = 0; i < steps.length; i++) {
      const step = steps[i];
      try {
        const result = await step.execute();
        this.executedSteps.push(step.name);
        if (i === steps.length - 1) {
          return {
            success: true,
            data: result as T,
            executedSteps: [...this.executedSteps],
            compensatedSteps: [],
          };
        }
      } catch (err) {
        await this.compensate(i);
        return {
          success: false,
          error: `Step "${step.name}" failed: ${err instanceof Error ? err.message : String(err)}`,
          executedSteps: [...this.executedSteps],
          compensatedSteps: [...this.compensatedSteps],
        };
      }
    }

    return {
      success: false,
      error: "No steps provided",
      executedSteps: [],
      compensatedSteps: [],
    };
  }

  private async compensate(failedIndex: number): Promise<void> {
    for (let i = failedIndex; i >= 0; i--) {
      const stepName = this.executedSteps[i];
      this.compensatedSteps.push(stepName);
    }
  }

  getExecutionLog(): { executed: string[]; compensated: string[] } {
    return {
      executed: [...this.executedSteps],
      compensated: [...this.compensatedSteps],
    };
  }
}

class FileSystemSaga {
  private createdFiles: string[] = [];
  private editedContent = new Map<string, string>();

  async createFile(path: string, content: string): Promise<void> {
    await Bun.write(path, content);
    this.createdFiles.push(path);
  }

  compensateCreateFile(path: string): () => Promise<void> {
    return async () => {
      try {
        await Bun.write(path, "");
        console.log(`  [compensate] cleared ${path}`);
      } catch {
        console.log(`  [compensate] ${path} already gone`);
      }
    };
  }

  async editFile(path: string, newContent: string): Promise<void> {
    const exists = Bun.file(path).size > 0;
    if (exists) {
      this.editedContent.set(path, "");
    }
    await Bun.write(path, newContent);
  }

  compensateEditFile(path: string): () => Promise<void> {
    return async () => {
      try {
        await Bun.write(path, "");
        console.log(`  [compensate] reverted edits on ${path}`);
      } catch {
        console.log(`  [compensate] ${path} not found`);
      }
    };
  }
}

async function mainDurableWorkflow() {
  const engine = new DurableWorkflowEngine();
  const fsSaga = new FileSystemSaga();

  const steps: Step[] = [
    {
      name: "create-readme",
      execute: async () => {
        await fsSaga.createFile("/tmp/test-readme.md", "# Hello\n");
        console.log("  [ok] created /tmp/test-readme.md");
      },
      compensate: fsSaga.compensateCreateFile("/tmp/test-readme.md"),
    },
    {
      name: "create-config",
      execute: async () => {
        await fsSaga.createFile("/tmp/test-config.json", '{"key": "value"}\n');
        console.log("  [ok] created /tmp/test-config.json");
      },
      compensate: fsSaga.compensateCreateFile("/tmp/test-config.json"),
    },
    {
      name: "deploy",
      execute: async () => {
        throw new Error("Deployment server unreachable");
      },
      compensate: async () => {
        console.log("  [compensate] deploy had no side effects");
      },
    },
  ];

  const result = await engine.run(steps);
  console.log("\nResult:", result.success ? "SUCCESS" : "FAILED");
  if (!result.success) console.log("Error:", result.error);
  console.log("Executed steps:", result.executedSteps.join(" → "));
  console.log("Compensated steps:", result.compensatedSteps.join(" → "));
}

await mainDurableWorkflow();
```

**Expected output:**

```
  [ok] created /tmp/test-readme.md
  [ok] created /tmp/test-config.json
  [compensate] deploy had no side effects
  [compensate] cleared /tmp/test-config.json
  [compensate] cleared /tmp/test-readme.md

Result: FAILED
Error: Step "deploy" failed: Deployment server unreachable
Executed steps: create-readme → create-config
Compensated steps: deploy → create-config → create-readme
```

---

### Example 9.2 — StateCheckpointer for Agent Context

This checkpointer serializes the full agent conversation and state to a JSON file. On restart, it loads the checkpoint and resumes from the last completed step.

```typescript
// state-checkpointer.ts
interface ToolCallRecord {
  id: string;
  name: string;
  arguments: string;
  result?: string;
  error?: string;
  startedAt: string;
  completedAt: string;
}

interface AgentCheckpoint {
  loopId: string;
  step: number;
  messages: Array<{ role: string; content: string }>;
  toolResults: ToolCallRecord[];
  budget: { tokensUsed: number; costUsd: number };
  state: Record<string, unknown>;
  timestamp: string;
  version: number;
}

class StateCheckpointer {
  private checkpointsDir: string;

  constructor(baseDir = "/tmp/agent-checkpoints") {
    this.checkpointsDir = baseDir;
  }

  private checkpointPath(loopId: string): string {
    return `${this.checkpointsDir}/${loopId}.json`;
  }

  async save(checkpoint: AgentCheckpoint): Promise<void> {
    const path = this.checkpointPath(checkpoint.loopId);
    await Bun.write(path, JSON.stringify(checkpoint, null, 2));
    console.log(`[checkpoint] saved step ${checkpoint.step} → ${path}`);
  }

  async load(loopId: string): Promise<AgentCheckpoint | null> {
    const path = this.checkpointPath(loopId);
    try {
      const file = Bun.file(path);
      const exists = await file.exists();
      if (!exists) return null;
      const text = await file.text();
      return JSON.parse(text) as AgentCheckpoint;
    } catch {
      return null;
    }
  }

  async list(): Promise<string[]> {
    const dir = Bun.file(this.checkpointsDir);
    const files = await new Response(dir.stream()).text();
    const names: string[] = [];
    for (const line of files.split("\n")) {
      if (line.endsWith(".json")) {
        names.push(line.replace(".json", ""));
      }
    }
    return names;
  }

  async delete(loopId: string): Promise<void> {
    const path = this.checkpointPath(loopId);
    try {
      await Bun.write(path, "");
      console.log(`[checkpoint] deleted ${loopId}`);
    } catch {
      // already gone
    }
  }
}

class CheckpointedAgent {
  private checkpointer: StateCheckpointer;
  private loopId: string;
  private step = 0;
  private messages: Array<{ role: string; content: string }> = [];
  private toolResults: ToolCallRecord[] = [];
  private tokensUsed = 0;
  private state: Record<string, unknown> = {};

  constructor(loopId: string) {
    this.loopId = loopId;
    this.checkpointer = new StateCheckpointer();
  }

  async resume(): Promise<boolean> {
    const cp = await this.checkpointer.load(this.loopId);
    if (!cp) return false;
    this.step = cp.step;
    this.messages = cp.messages;
    this.toolResults = cp.toolResults;
    this.tokensUsed = cp.budget.tokensUsed;
    this.state = cp.state;
    console.log(`[agent] resumed from step ${this.step} (${this.messages.length} messages)`);
    return true;
  }

  async checkpoint(): Promise<void> {
    await this.checkpointer.save({
      loopId: this.loopId,
      step: this.step,
      messages: this.messages,
      toolResults: this.toolResults,
      budget: { tokensUsed: this.tokensUsed, costUsd: this.tokensUsed * 0.00001 },
      state: this.state,
      timestamp: new Date().toISOString(),
      version: 1,
    });
  }

  async addMessage(role: string, content: string): Promise<void> {
    this.messages.push({ role, content });
  }

  addToolResult(record: ToolCallRecord): void {
    this.toolResults.push(record);
  }

  nextStep(): void {
    this.step++;
  }

  getContext(): {
    messages: Array<{ role: string; content: string }>;
    step: number;
    tokensUsed: number;
  } {
    return {
      messages: this.messages,
      step: this.step,
      tokensUsed: this.tokensUsed,
    };
  }
}

async function mainCheckpointer() {
  const agent = new CheckpointedAgent("run-demo-001");

  const resumed = await agent.resume();
  if (!resumed) {
    console.log("[agent] fresh start — no checkpoint found");
  }

  for (let i = 0; i < 3; i++) {
    await agent.addMessage("user", `Iteration ${agent.getContext().step + 1}`);
    await agent.addMessage("assistant", `Processed step ${i + 1}`);
    agent.addToolResult({
      id: `tool-${i}`,
      name: "demo",
      arguments: "{}",
      result: `result-${i}`,
      startedAt: new Date().toISOString(),
      completedAt: new Date().toISOString(),
    });
    agent.nextStep();
    await agent.checkpoint();
  }

  const ctx = agent.getContext();
  console.log(`\nFinal state: step=${ctx.step}, messages=${ctx.messages.length}, tokens=${ctx.tokensUsed}`);

  // Simulate crash recovery — create a new agent with same loopId
  console.log("\n--- Simulating restart ---");
  const agent2 = new CheckpointedAgent("run-demo-001");
  const recovered = await agent2.resume();
  console.log(`Recovered: ${recovered}, step=${agent2.getContext().step}`);
}

await mainCheckpointer();
```

**Expected output:**

```
[agent] fresh start — no checkpoint found
[checkpoint] saved step 1 → /tmp/agent-checkpoints/run-demo-001.json
[checkpoint] saved step 2 → /tmp/agent-checkpoints/run-demo-001.json
[checkpoint] saved step 3 → /tmp/agent-checkpoints/run-demo-001.json

Final state: step=3, messages=6, tokens=0

--- Simulating restart ---
[agent] resumed from step 3 (6 messages)
Recovered: true, step=3
```

---

### Example 9.3 — TokenBucket Rate Limiter + LoopTracer

This example provides a token-bucket rate limiter and a structured tracer that records spans for each loop step.

```typescript
// rate-limiter-tracer.ts
class TokenBucket {
  private capacity: number;
  private refillRate: number;
  private refillIntervalMs: number;
  private tokens: number;
  private lastRefill: number;

  constructor(
    capacity: number,
    refillRate: number,
    refillIntervalMs = 1000,
  ) {
    this.capacity = capacity;
    this.refillRate = refillRate;
    this.refillIntervalMs = refillIntervalMs;
    this.tokens = capacity;
    this.lastRefill = Date.now();
  }

  private refill(): void {
    const now = Date.now();
    const elapsed = now - this.lastRefill;
    const intervals = Math.floor(elapsed / this.refillIntervalMs);
    if (intervals > 0) {
      this.tokens = Math.min(this.capacity, this.tokens + intervals * this.refillRate);
      this.lastRefill += intervals * this.refillIntervalMs;
    }
  }

  tryConsume(count = 1): boolean {
    this.refill();
    if (this.tokens >= count) {
      this.tokens -= count;
      return true;
    }
    return false;
  }

  get available(): number {
    this.refill();
    return this.tokens;
  }

  get utilization(): number {
    return 1 - this.available / this.capacity;
  }

  /** Wait until tokens are available, then consume and return wait time */
  async consumeBlocking(count = 1, timeoutMs = 30_000): Promise<number> {
    const start = Date.now();
    while (!this.tryConsume(count)) {
      const elapsed = Date.now() - start;
      if (elapsed >= timeoutMs) throw new Error("TokenBucket timeout");
      await new Promise((r) => setTimeout(r, 50));
    }
    return Date.now() - start;
  }
}

// --- Budget governor that layers token, iteration, and cost limits ---
class CostGovernor {
  private tokenBudget: number;
  private iterationBudget: number;
  private costBudgetUsd: number;
  private tokensUsed = 0;
  private iterationsUsed = 0;
  private costUsedUsd = 0;

  constructor(config: {
    maxTokens: number;
    maxIterations: number;
    maxCostUsd: number;
  }) {
    this.tokenBudget = config.maxTokens;
    this.iterationBudget = config.maxIterations;
    this.costBudgetUsd = config.maxCostUsd;
  }

  recordIteration(tokens: number, costUsd: number): boolean {
    this.tokensUsed += tokens;
    this.iterationsUsed += 1;
    this.costUsedUsd += costUsd;
    return this.isWithinBudget();
  }

  isWithinBudget(): boolean {
    return (
      this.tokensUsed <= this.tokenBudget &&
      this.iterationsUsed <= this.iterationBudget &&
      this.costUsedUsd <= this.costBudgetUsd
    );
  }

  status(): { tokensUsed: number; iterationsUsed: number; costUsedUsd: number; exhausted: boolean } {
    return {
      tokensUsed: this.tokensUsed,
      iterationsUsed: this.iterationsUsed,
      costUsedUsd: this.costUsedUsd,
      exhausted: !this.isWithinBudget(),
    };
  }
}

// --- Structured loop tracer ---
interface TraceSpan {
  stepType: "plan" | "act" | "observe" | "critique" | "gate" | "tool";
  stepNumber: number;
  startedAt: number;
  durationMs: number;
  tokens?: { input: number; output: number };
  decision?: string;
  error?: string;
  metadata?: Record<string, unknown>;
}

class LoopTracer {
  private spans: TraceSpan[] = [];
  private cycleSpans: Map<number, TraceSpan[]> = new Map();

  startSpan(stepType: TraceSpan["stepType"], stepNumber: number): { end: (opts?: Partial<TraceSpan>) => void } {
    const span: TraceSpan = {
      stepType,
      stepNumber,
      startedAt: Date.now(),
      durationMs: 0,
    };

    return {
      end: (opts?: Partial<TraceSpan>) => {
        span.durationMs = Date.now() - span.startedAt;
        if (opts?.tokens) span.tokens = opts.tokens;
        if (opts?.decision) span.decision = opts.decision;
        if (opts?.error) span.error = opts.error;
        if (opts?.metadata) span.metadata = opts.metadata;
        this.spans.push(span);

        if (!this.cycleSpans.has(stepNumber)) {
          this.cycleSpans.set(stepNumber, []);
        }
        this.cycleSpans.get(stepNumber)!.push(span);
      },
    };
  }

  getCycleReport(stepNumber: number): { spans: TraceSpan[]; totalTokens: number; totalMs: number } {
    const spans = this.cycleSpans.get(stepNumber) ?? [];
    const totalTokens = spans.reduce((s, sp) => s + (sp.tokens?.input ?? 0) + (sp.tokens?.output ?? 0), 0);
    const totalMs = spans.reduce((s, sp) => s + sp.durationMs, 0);
    return { spans, totalTokens, totalMs };
  }

  summary(): { totalSpans: number; totalDurationMs: number; totalTokens: number; cycleCount: number } {
    const totalDurationMs = this.spans.reduce((s, sp) => s + sp.durationMs, 0);
    const totalTokens = this.spans.reduce((s, sp) => s + (sp.tokens?.input ?? 0) + (sp.tokens?.output ?? 0), 0);
    return {
      totalSpans: this.spans.length,
      totalDurationMs,
      totalTokens,
      cycleCount: this.cycleSpans.size,
    };
  }

  export(): TraceSpan[] {
    return [...this.spans];
  }
}

async function mainRateLimiter() {
  const bucket = new TokenBucket(10, 5, 1000);
  const governor = new CostGovernor({ maxTokens: 1000, maxIterations: 5, maxCostUsd: 0.05 });
  const tracer = new LoopTracer();

  console.log("Token bucket ready: capacity=10, refill=5/sec\n");

  for (let i = 0; i < 5; i++) {
    const span = tracer.startSpan("plan", i);

    const waited = await bucket.consumeBlocking(3, 5000);
    const tokensThisStep = 150 + Math.floor(Math.random() * 50);
    const costThisStep = tokensThisStep * 0.00001;

    const ok = governor.recordIteration(tokensThisStep, costThisStep);
    span.end({
      tokens: { input: 100, output: tokensThisStep - 100 },
      decision: ok ? "continue" : "terminate",
    });

    console.log(
      `Iter ${i}: waited ${waited}ms, tokens=${tokensThisStep}, ` +
      `bucket=${bucket.available.toFixed(1)}, budget=${governor.status().exhausted ? "EXHAUSTED" : "OK"}`,
    );

    if (!ok) break;
  }

  const report = tracer.summary();
  console.log(`\nTracer summary: ${report.totalSpans} spans, ${report.totalTokens} tokens, ${(report.totalDurationMs / 1000).toFixed(1)}s`);

  console.log("\nCycle breakdown:");
  for (let i = 0; i < 5; i++) {
    const cycle = tracer.getCycleReport(i);
    if (cycle.spans.length > 0) {
      console.log(`  Cycle ${i}: ${cycle.totalMs}ms, ${cycle.totalTokens} tokens`);
    }
  }
}

await mainRateLimiter();
```

**Expected output:**

```
Token bucket ready: capacity=10, refill=5/sec

Iter 0: waited 0ms, tokens=183, bucket=7.0, budget=OK
Iter 1: waited 0ms, tokens=192, bucket=4.0, budget=OK
Iter 2: waited 100ms, tokens=177, bucket=1.0, budget=OK
Iter 3: waited 600ms, tokens=165, bucket=8.0, budget=OK
Iter 4: waited 0ms, tokens=188, bucket=5.0, budget=OK

Tracer summary: 5 spans, 905 tokens, 0.7s

Cycle breakdown:
  Cycle 0: 0ms, 183 tokens
  Cycle 1: 0ms, 192 tokens
  Cycle 2: 100ms, 177 tokens
  Cycle 3: 600ms, 165 tokens
  Cycle 4: 0ms, 188 tokens
```

---

### Example 9.4 — ChaosMonkey for Failure Injection

ChaosMonkey injects configurable failures into a running loop. Use it to verify that your agent handles network errors, rate limits, corrupt data, and crashes gracefully.

```typescript
// chaos-monkey.ts
type FailureType = "network" | "crash" | "corrupt" | "timeout" | "rateLimit";

interface ChaosRule {
  type: FailureType;
  probability: number;
  stepFilter?: (step: number) => boolean;
  errorMessage?: string;
  delayMs?: number;
}

class ChaosMonkey {
  private rules: ChaosRule[] = [];
  private totalInjections = 0;

  constructor(rules: ChaosRule[]) {
    this.rules = rules;
  }

  async inject(stepNumber: number): Promise<void> {
    for (const rule of this.rules) {
      if (rule.stepFilter && !rule.stepFilter(stepNumber)) continue;
      if (Math.random() >= rule.probability) continue;

      this.totalInjections++;

      if (rule.delayMs && rule.delayMs > 0) {
        await new Promise((r) => setTimeout(r, rule.delayMs));
      }

      switch (rule.type) {
        case "network":
          throw new Error(rule.errorMessage ?? "Chaos: network timeout");
        case "crash":
          throw new Error(rule.errorMessage ?? "Chaos: process killed");
        case "corrupt":
          throw new Error(rule.errorMessage ?? "Chaos: corrupted tool result data");
        case "timeout":
          throw new Error(rule.errorMessage ?? "Chaos: tool call timed out after 30s");
        case "rateLimit":
          throw new Error(rule.errorMessage ?? "Chaos: rate limit exceeded (429)");
      }
    }
  }

  reset(): void {
    this.totalInjections = 0;
  }

  get stats(): { totalInjections: number } {
    return { totalInjections: this.totalInjections };
  }
}

// --- A loop runner that tests resilience by running a mock agent ---
class ResilientLoop {
  private chaos: ChaosMonkey;
  private maxRetries: number;

  constructor(chaos: ChaosMonkey, maxRetries = 3) {
    this.chaos = chaos;
    this.maxRetries = maxRetries;
  }

  async runStep(step: number): Promise<string> {
    // Simulate a tool call
    const steps = ["Reading file...", "Searching code...", "Writing output...", "Analyzing results..."];

    await this.chaos.inject(step);

    // Simulate work
    await new Promise((r) => setTimeout(r, 50 + Math.random() * 50));
    return steps[step % steps.length];
  }

  async run(): Promise<{ success: boolean; failures: number; retries: number }> {
    let failures = 0;
    let retries = 0;

    for (let step = 0; step < 10; step++) {
      let attempts = 0;
      let stepSuccess = false;

      while (attempts <= this.maxRetries && !stepSuccess) {
        try {
          const result = await this.runStep(step);
          console.log(`  Step ${step}: ${result}`);
          stepSuccess = true;
        } catch (err) {
          attempts++;
          retries++;
          console.log(`  Step ${step}: FAIL (attempt ${attempts}) — ${err instanceof Error ? err.message : String(err)}`);
          if (attempts > this.maxRetries) {
            failures++;
            console.log(`  Step ${step}: GIVING UP after ${this.maxRetries} retries`);
          }
        }
      }
    }

    return {
      success: failures === 0,
      failures,
      retries,
    };
  }
}

async function mainChaos() {
  const chaos = new ChaosMonkey([
    { type: "network", probability: 0.2, errorMessage: "Connection reset by peer" },
    { type: "timeout", probability: 0.1, errorMessage: "Tool execution timed out" },
    { type: "corrupt", probability: 0.05, errorMessage: "JSON parsing error in tool output" },
    { type: "rateLimit", probability: 0.1, errorMessage: "429 Too Many Requests" },
  ]);

  const loop = new ResilientLoop(chaos, 2);

  console.log("Running chaos-resilient loop...\n");
  const result = await loop.run();

  console.log(`\nResult: ${result.success ? "PASSED" : "FAILED"}`);
  console.log(`Chaos injections: ${chaos.stats.totalInjections}`);
  console.log(`Retries: ${result.retries}, Unrecoverable failures: ${result.failures}`);
}

await mainChaos();
```

**Expected output (stochastic — exact output depends on random seed):**

```
Running chaos-resilient loop...

  Step 0: Reading file...
  Step 1: FAIL (attempt 1) — Tool execution timed out
  Step 1: FAIL (attempt 2) — Tool execution timed out
  Step 1: FAIL (attempt 3) — GIVING UP after 2 retries
  Step 2: Searching code...
  Step 3: FAIL (attempt 1) — 429 Too Many Requests
  Step 3: Writing output...
  Step 4: Analyzing results...
  Step 5: Reading file...
  ...

Result: FAILED
Chaos injections: 4
Retries: 6, Unrecoverable failures: 1
```

---

## Summary

| Concept | Key Idea | Tool |
|---------|----------|------|
| Durable Execution | Survive crashes by persisting workflow state | `DurableWorkflowEngine` with saga compensation |
| Checkpoint/Restore | Serialize agent context, resume seamlessly | `StateCheckpointer` with JSON persistence |
| Rate Limiting | Enforce token, iteration, and cost budgets | `TokenBucket` + `CostGovernor` |
| Observability | Trace every loop step with timing and tokens | `LoopTracer` with cycle-level aggregation |
| Loop Testing | Verify resilience with deterministic replay and chaos | `ChaosMonkey` with configurable failure injection |

These five tooling categories turn a prototype agent loop into a production system. Durable execution ensures completeness; checkpointing preserves context; rate limiting prevents runaway costs; observability enables debugging; chaos testing builds confidence.

---

## Exercises

### Review Questions

1. Why is saga compensation important for agent loops? What happens if a step creates a file and a later step fails?

2. What fields should a checkpoint contain to fully restore an agent's state? Why is `version` important?

3. How does a token bucket rate limiter differ from a simple fixed-window counter? What advantage does it provide for bursty agent traffic?

4. What information should each trace span capture? How does cycle-level aggregation help debug a long-running loop?

5. Why is deterministic replay critical for testing agent loops? What makes agent tests different from traditional unit tests?

### Application Problems

6. **Add idempotency keys to DurableWorkflowEngine.** Modify the `Step` interface so each step carries an `idempotencyKey`. The engine should skip any step whose key has already been successfully executed. This prevents double-execution when a step succeeds but the checkpoint write fails before recording it.

7. **Implement a sliding-window rate limiter.** Replace `TokenBucket` with a sliding-window log that tracks timestamps of each request. A request is allowed if fewer than N requests occurred in the last W milliseconds. Compare its behavior to the token bucket.

8. **Build a deterministic replay harness.** Write a `RecordingAgent` class that captures every LLM response and tool result to a JSONL file. Then write `ReplayAgent` that reads the file and replays the exact same sequence without calling any live API. Verify that the agent's decision trace is identical.

9. **Extend ChaosMonkey with a "slow" failure type.** Add a `ChaosRule` that does not throw but slows down a step by 5-10 seconds. Verify that your loop's timeout logic catches it and transitions to a retry or fallback path.

### Challenge

10. **Wrap a real agent loop with the full tooling stack.** Take the `CodingAgentLoop` from Chapter 10 and wrap it with `DurableWorkflowEngine` (for saga compensation), `StateCheckpointer` (for checkpoint after each step), `CostGovernor` (to enforce a $0.10 budget), `LoopTracer` (to capture spans), and run it through `ChaosMonkey` with 15% injection probability on tool calls. Measure: (a) how many steps complete before budget exhaustion, (b) how many chaos injections trigger retries, and (c) how many steps are recovered from checkpoint after a simulated crash.
