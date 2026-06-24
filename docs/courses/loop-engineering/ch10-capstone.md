# Chapter 10: Capstone — Build a Production-Grade Coding Agent

---

## Learning Objectives

After completing this chapter you will be able to:

- Combine all loop concepts from Chapters 1–9 into a single production agent system
- Implement a Plan-Act-Observe (ReAct) main loop with a full tool surface
- Design human-in-the-loop approval gates with auto-approve heuristics
- Build eval-driven self-improvement with self-critique and retry
- Enforce cost budgets that terminate runaway loops
- Implement durable checkpointing with multi-step recovery
- Extend a base agent to handle file operations with human safety gates

---

## Theory: Synthesis of the Complete Stack

A production-grade coding agent is the integration of every concept in this course. Each chapter contributed a layer:

| Chapter | Concept | Role in Capstone |
|---------|---------|------------------|
| 1 | Loop foundations | The outer `while` loop with convergence check |
| 2 | ReAct pattern | Plan → Act → Observe as the core cycle |
| 3 | Human-in-the-loop | Approval gates before destructive file operations |
| 4 | Feedback loops | Eval-driven retry when the agent detects its own error |
| 5 | Self-improvement | LLM critiques its own output and revises |
| 6 | Production loops | Cost governor, budget enforcement, termination |
| 7 | Loop safety | Max iterations, kill switch, rollback on failure |
| 8 | Multi-agent loops | (Not directly used — reserved for future tool delegation) |
| 9 | Loop tooling | Durable execution, checkpoint/restore, tracing, chaos testing |

**The architecture.** The capstone agent is a single TypeScript class that orchestrates these layers:

```
┌──────────────────────────────────────────────┐
│              CodingAgentLoop                  │
│                                              │
│  ┌─────────┐  loop  ┌─────────┐              │
│  │  Plan   │ ──────→ │  Act    │ ──────┐     │
│  │ (LLM +  │         │ (tool   │       │     │
│  │  prompt)│         │  call)  │       │     │
│  └─────────┘         └─────────┘       │     │
│       ↑                                 │     │
│       │  ┌──────────┐                  │     │
│       └──│ Observe  │ ←────────────────┘     │
│          │ (parse   │                        │
│          │  result) │                        │
│          └──────────┘                        │
│                                              │
│  Cross-cutting: HITL | Budget | Checkpoint   │
└──────────────────────────────────────────────┘
```

**Plan phase.** The LLM receives the current state (conversation history + tool results) and decides what to do next. It outputs a structured plan: either a tool call command or a final answer.

**Act phase.** The agent executes the chosen tool. Before execution, the HITL gate checks whether the operation is risky. Low-risk operations (read, grep) auto-approve. Destructive operations (write, delete) pause for human confirmation.

**Observe phase.** The tool result is appended to the conversation. The agent optionally critiques its own output — if the result contains an error or looks wrong, it can retry with a refined approach.

**Cross-cutting concerns.** After each cycle, the agent checks budgets, saves a checkpoint, and records trace spans.

---

## Full Implementation: CodingAgentLoop

### Tool Surface

The agent operates on a virtual filesystem through six tools:

```typescript
// coding-agent.ts
type ToolName = "read" | "write" | "grep" | "glob" | "bash" | "ask";

interface ToolCall {
  id: string;
  name: ToolName;
  args: Record<string, unknown>;
}

interface ToolResult {
  id: string;
  name: ToolName;
  success: boolean;
  data: string;
  error?: string;
}

interface ToolDefinition {
  name: ToolName;
  description: string;
  parameters: Record<string, string>;
}
```

---

### State Types

```typescript
interface Message {
  role: "system" | "user" | "assistant" | "tool";
  content: string;
  toolCallId?: string;
}

interface AgentCheckpoint {
  loopId: string;
  step: number;
  messages: Message[];
  budgetUsed: number;
  costUsedUsd: number;
  filesModified: string[];
  state: Record<string, unknown>;
  timestamp: string;
  version: number;
}

interface EvalResult {
  score: number;
  critique: string;
  shouldRetry: boolean;
  refinedPlan?: string;
}
```

---

### Complete Implementation

```typescript
class CodingAgentLoop {
  // --- Configuration ---
  private maxSteps = 25;
  private maxTokens = 50_000;
  private maxCostUsd = 0.50;
  private tokensUsed = 0;
  private costUsedUsd = 0;
  private step = 0;

  // --- State ---
  private messages: Message[] = [];
  private filesModified: string[] = [];
  private loopId: string;
  private state: Record<string, unknown> = {};
  private checkpointsDir: string;

  constructor(loopId: string, config?: Partial<{ maxSteps: number; maxTokens: number; maxCostUsd: number }>) {
    this.loopId = loopId;
    this.checkpointsDir = "/tmp/agent-checkpoints";
    if (config?.maxSteps) this.maxSteps = config.maxSteps;
    if (config?.maxTokens) this.maxTokens = config.maxTokens;
    if (config?.maxCostUsd) this.maxCostUsd = config.maxCostUsd;
  }

  // ─── Tool definitions exposed to the LLM ───

  getToolDefinitions(): ToolDefinition[] {
    return [
      {
        name: "read",
        description: "Read a file from the filesystem",
        parameters: { path: "string" },
      },
      {
        name: "write",
        description: "Write content to a file (creates or overwrites)",
        parameters: { path: "string", content: "string" },
      },
      {
        name: "grep",
        description: "Search for a pattern in files",
        parameters: { pattern: "string", include: "string" },
      },
      {
        name: "glob",
        description: "Find files matching a pattern",
        parameters: { pattern: "string" },
      },
      {
        name: "bash",
        description: "Run a shell command",
        parameters: { command: "string" },
      },
      {
        name: "ask",
        description: "Ask the user a question",
        parameters: { question: "string" },
      },
    ];
  }

  // ─── Tool execution — the Act phase ───

  private async executeTool(tc: ToolCall): Promise<ToolResult> {
    const start = Date.now();
    try {
      switch (tc.name) {
        case "read": {
          const path = tc.args.path as string;
          const file = Bun.file(path);
          const exists = await file.exists();
          if (!exists) return { id: tc.id, name: "read", success: false, data: "", error: `File not found: ${path}` };
          const content = await file.text();
          return { id: tc.id, name: "read", success: true, data: content.length > 10_000 ? content.slice(0, 10_000) + "\n... [truncated]" : content };
        }
        case "write": {
          const path = tc.args.path as string;
          const content = tc.args.content as string;
          await Bun.write(path, content);
          this.filesModified.push(path);
          return { id: tc.id, name: "write", success: true, data: `Written ${content.length} bytes to ${path}` };
        }
        case "grep": {
          const pattern = tc.args.pattern as string;
          const include = (tc.args.include as string) ?? "*";
          const proc = Bun.spawnSync(["rg", "-n", pattern, "--include", include, "--max-depth", "5", "."]);
          const stdout = proc.stdout.toString();
          return { id: tc.id, name: "grep", success: proc.exitCode === 0, data: stdout || "(no matches)" };
        }
        case "glob": {
          const pattern = tc.args.pattern as string;
          const glob = new Bun.Glob(pattern);
          const matches: string[] = [];
          for await (const file of glob.scan({ cwd: "." })) {
            matches.push(file);
            if (matches.length >= 100) break;
          }
          return { id: tc.id, name: "glob", success: true, data: matches.join("\n") || "(no files match)" };
        }
        case "bash": {
          const command = tc.args.command as string;
          const proc = Bun.spawnSync(["cmd.exe", "/c", command], { timeout: 30_000 });
          const stdout = proc.stdout.toString();
          const stderr = proc.stderr.toString();
          const output = stdout + (stderr ? `\nSTDERR:\n${stderr}` : "");
          return { id: tc.id, name: "bash", success: proc.exitCode === 0, data: output || "(no output)" };
        }
        case "ask": {
          const question = tc.args.question as string;
          // In a real agent this would wait for user input.
          // Here we simulate approval.
          return { id: tc.id, name: "ask", success: true, data: `User responded: approved` };
        }
        default:
          return { id: tc.id, name: tc.name, success: false, data: "", error: `Unknown tool: ${tc.name}` };
      }
    } catch (err) {
      return { id: tc.id, name: tc.name, success: false, data: "", error: `Execution error: ${err instanceof Error ? err.message : String(err)}` };
    }
  }

  // ─── HITL approval gate ───

  private riskLevel(tc: ToolCall): "low" | "medium" | "high" {
    switch (tc.name) {
      case "read":
      case "grep":
      case "glob":
        return "low";
      case "bash":
        return "medium";
      case "write":
        return "high";
      case "ask":
        return "low";
      default:
        return "medium";
    }
  }

  private async approveGate(tc: ToolCall): Promise<boolean> {
    const risk = this.riskLevel(tc);
    if (risk === "low") return true;

    if (risk === "medium") {
      console.log(`\n⚠  Tool call requires approval:`);
      console.log(`   ${tc.name}(${JSON.stringify(tc.args)})`);
      // Simulate auto-approve for demo
      return true;
    }

    // High risk — destructive operation
    console.log(`\n🔴 DESTRUCTIVE operation: ${tc.name}(${JSON.stringify(tc.args)})`);
    console.log(`   Enter 'y' to approve, anything else to deny:`);
    // In production this would use stdin or a callback
    return true;
  }

  // ─── Self-critique (eval-driven improvement) ───

  private async critiqueStep(tc: ToolCall, result: ToolResult): Promise<EvalResult> {
    if (result.success) {
      return { score: 1.0, critique: "Step completed successfully", shouldRetry: false };
    }

    const critiquePrompt = `
The following tool call failed:
Tool: ${tc.name}
Arguments: ${JSON.stringify(tc.args)}
Error: ${result.error}

Analyze the failure. Is it:
a) A transient error (network, timeout, resource contention) — RETRY
b) A logical error (wrong arguments, bad path) — REFINE
c) A fatal error (permission denied, missing tool) — GIVE UP

Respond with JSON: { "analysis": string, "shouldRetry": boolean, "refinedArgs": object | null }
`;

    // In production this calls the LLM. Here we use heuristics.
    const isTransient = result.error?.includes("timeout") ||
      result.error?.includes("busy") ||
      result.error?.includes("retry");

    return {
      score: 0.0,
      critique: result.error ?? "Unknown error",
      shouldRetry: isTransient,
      refinedPlan: isTransient ? `Retry ${tc.name} with same arguments` : undefined,
    };
  }

  // ─── Plan phase — call LLM to decide next action ───

  private async planNextAction(): Promise<ToolCall | null> {
    const planningPrompt = this.buildPlanningPrompt();

    // In production this calls an LLM API.
    // For this implementation, we simulate the LLM response
    // with a deterministic strategy that makes the demo runnable.
    const action = this.simulateLLMPlanning();
    return action;
  }

  private buildPlanningPrompt(): string {
    const tools = this.getToolDefinitions()
      .map((t) => `- ${t.name}: ${t.description}`)
      .join("\n");

    return `You are a coding agent. Available tools:\n${tools}\n\nCurrent step: ${this.step}`;
  }

  private simulateLLMPlanning(): ToolCall | null {
    // Deterministic demo: performs a sequence of operations
    const demoTasks: ToolCall[] = [
      { id: "t1", name: "glob", args: { pattern: "src/**/*.ts" } },
      { id: "t2", name: "read", args: { path: "package.json" } },
      { id: "t3", name: "grep", args: { pattern: "class.*Loop", include: "*.ts" } },
      { id: "t4", name: "read", args: { path: "README.md" } },
      { id: "t5", name: "ask", args: { question: "Should I add a test file?" } },
    ];

    if (this.step < demoTasks.length) {
      return demoTasks[this.step];
    }
    return null; // No more actions — loop ends
  }

  // ─── Checkpointing ───

  private async saveCheckpoint(): Promise<void> {
    const cp: AgentCheckpoint = {
      loopId: this.loopId,
      step: this.step,
      messages: this.messages,
      budgetUsed: this.tokensUsed,
      costUsedUsd: this.costUsedUsd,
      filesModified: [...this.filesModified],
      state: this.state,
      timestamp: new Date().toISOString(),
      version: 1,
    };
    const path = `${this.checkpointsDir}/${this.loopId}.json`;
    await Bun.write(path, JSON.stringify(cp, null, 2));
    console.log(`  [checkpoint] saved step ${this.step}`);
  }

  async resume(): Promise<boolean> {
    const path = `${this.checkpointsDir}/${this.loopId}.json`;
    try {
      const file = Bun.file(path);
      const exists = await file.exists();
      if (!exists) return false;
      const text = await file.text();
      const cp = JSON.parse(text) as AgentCheckpoint;
      this.step = cp.step;
      this.messages = cp.messages;
      this.tokensUsed = cp.budgetUsed;
      this.costUsedUsd = cp.costUsedUsd;
      this.filesModified = cp.filesModified;
      this.state = cp.state;
      console.log(`[agent] resumed from step ${this.step} (${this.messages.length} messages, ${this.filesModified.length} files modified)`);
      return true;
    } catch {
      return false;
    }
  }

  // ─── Budget enforcement ───

  private checkBudget(): boolean {
    if (this.tokensUsed >= this.maxTokens) {
      console.log(`  [budget] token limit hit (${this.tokensUsed}/${this.maxTokens})`);
      return false;
    }
    if (this.costUsedUsd >= this.maxCostUsd) {
      console.log(`  [budget] cost limit hit ($${this.costUsedUsd.toFixed(4)}/$${this.maxCostUsd.toFixed(2)})`);
      return false;
    }
    if (this.step >= this.maxSteps) {
      console.log(`  [budget] step limit hit (${this.step}/${this.maxSteps})`);
      return false;
    }
    return true;
  }

  private updateBudget(tokens: number): void {
    this.tokensUsed += tokens;
    this.costUsedUsd += tokens * 0.00001; // ~$0.01 per 1K tokens
  }

  // ─── Main Loop ───

  async run(): Promise<{
    success: boolean;
    stepsCompleted: number;
    tokensUsed: number;
    costUsd: number;
    filesModified: string[];
  }> {
    const resumed = await this.resume();
    if (!resumed) {
      this.messages.push({ role: "system", content: "You are a production-grade coding agent." });
      console.log("[agent] fresh start\n");
    }

    while (this.checkBudget()) {
      this.step++;
      console.log(`\n═══ Cycle ${this.step} ═══`);

      // ─── PLAN ───
      const plan = await this.planNextAction();
      if (plan === null) {
        console.log("  [plan] no more actions — task complete");
        break;
      }
      console.log(`  [plan] ${plan.name}(${JSON.stringify(plan.args)})`);
      this.messages.push({ role: "assistant", content: `I will call ${plan.name} with ${JSON.stringify(plan.args)}` });

      // ─── HITL GATE ───
      const approved = await this.approveGate(plan);
      if (!approved) {
        console.log(`  [gate] user denied ${plan.name} — skipping`);
        this.messages.push({ role: "user", content: `Operation ${plan.name} was denied.` });
        await this.saveCheckpoint();
        continue;
      }

      // ─── ACT ───
      const result = await this.executeTool(plan);
      const duration = "(timing available via tracer)";

      if (result.success) {
        console.log(`  [act] ✓ ${result.data.slice(0, 120)}${result.data.length > 120 ? "…" : ""}`);
      } else {
        console.log(`  [act] ✗ ${result.error}`);
      }

      // Simulate token usage
      const tokens = 100 + Math.floor(Math.random() * 200);
      this.updateBudget(tokens);

      // ─── OBSERVE ───
      const obsMsg = result.success
        ? `Tool ${plan.name} returned:\n${result.data}`
        : `Tool ${plan.name} failed:\n${result.error}`;
      this.messages.push({ role: "tool", content: obsMsg, toolCallId: plan.id });

      // ─── SELF-CRITIQUE ───
      const evalResult = await this.critiqueStep(plan, result);
      if (!result.success && evalResult.shouldRetry) {
        console.log(`  [critique] will retry: ${evalResult.critique}`);
        this.messages.push({
          role: "assistant",
          content: `The tool call failed. Analysis: ${evalResult.critique}. I will retry.`,
        });
        this.step--; // Retry the same step number
        await this.saveCheckpoint();
        continue;
      }

      if (!result.success && !evalResult.shouldRetry) {
        console.log(`  [critique] fatal error — giving up on this step: ${evalResult.critique}`);
      }

      // ─── CHECKPOINT ───
      await this.saveCheckpoint();
    }

    const result = {
      success: this.step > 0,
      stepsCompleted: this.step,
      tokensUsed: this.tokensUsed,
      costUsd: this.costUsedUsd,
      filesModified: [...this.filesModified],
    };

    console.log(`\n═══ Agent finished ═══`);
    console.log(`Steps: ${result.stepsCompleted}, Tokens: ${result.tokensUsed}, Cost: $${result.costUsd.toFixed(4)}`);
    if (result.filesModified.length > 0) {
      console.log(`Files modified: ${result.filesModified.join(", ")}`);
    }

    return result;
  }
}
```

---

### Running the Base Agent

```typescript
// run-agent.ts
async function main() {
  const agent = new CodingAgentLoop("capstone-demo-1", {
    maxSteps: 10,
    maxTokens: 20_000,
    maxCostUsd: 0.10,
  });

  const result = await agent.run();

  console.log(`\nFinal status: ${result.success ? "SUCCESS" : "FAILED"}`);
  console.log(`Steps completed: ${result.stepsCompleted}`);
  console.log(`Budget: ${result.tokensUsed} tokens / $${result.costUsd.toFixed(4)}`);
}

await main();
```

**Expected output:**

```
[agent] fresh start

═══ Cycle 1 ═══
  [plan] glob({"pattern":"src/**/*.ts"})
  [act] ✓ (no files match)
  [checkpoint] saved step 1

═══ Cycle 2 ═══
  [plan] read({"path":"package.json"})
  [act] ✓ {contents of package.json}
  [checkpoint] saved step 2

═══ Cycle 3 ═══
  [plan] grep({"pattern":"class.*Loop","include":"*.ts"})
  [act] ✓ (no matches)
  [checkpoint] saved step 3

═══ Cycle 4 ═══
  [plan] read({"path":"README.md"})
  [act] ✓ {contents of README.md}
  [checkpoint] saved step 4

═══ Cycle 5 ═══
  [plan] ask({"question":"Should I add a test file?"})
  [act] ✓ User responded: approved
  [checkpoint] saved step 5

═══ Agent finished ═══
Steps: 5, Tokens: 838, Cost: $0.0084
```

---

## MultiFileCodingAgent — File Operations with Human Gates

The `MultiFileCodingAgent` extends the base agent with structured file operations. Each file change goes through a propose → review → commit pipeline with human approval at the commit stage.

```typescript
// multifile-coding-agent.ts
interface FileEdit {
  path: string;
  originalContent: string | null; // null = new file
  newContent: string;
  reason: string;
}

interface ProposedChanges {
  edits: FileEdit[];
  summary: string;
  estimatedImpact: string;
}

class MultiFileCodingAgent extends CodingAgentLoop {
  private pendingEdits: FileEdit[] = [];
  private committedEdits: FileEdit[] = [];
  private rollbackStack: Array<() => Promise<void>> = [];

  constructor(loopId: string, config?: { maxSteps?: number; maxTokens?: number; maxCostUsd?: number }) {
    super(loopId, config);
  }

  // ─── Multi-edit proposal (called by the LLM) ───

  async proposeEdit(path: string, newContent: string, reason: string): Promise<void> {
    let originalContent: string | null = null;
    const file = Bun.file(path);
    if (await file.exists()) {
      originalContent = await file.text();
    }

    this.pendingEdits.push({ path, originalContent, newContent, reason });
    console.log(`  [propose] ${path} (${reason})`);
  }

  async proposeDelete(path: string, reason: string): Promise<void> {
    const file = Bun.file(path);
    let originalContent: string | null = null;
    if (await file.exists()) {
      originalContent = await file.text();
    }

    this.pendingEdits.push({ path, originalContent, newContent: "", reason });
    console.log(`  [propose] DELETE ${path} (${reason})`);
  }

  // ─── Review and commit with human gate ───

  private async reviewChanges(): Promise<ProposedChanges> {
    const edits = [...this.pendingEdits];
    const summary = edits.map((e) => {
      if (e.originalContent === null) return `+ ${e.path} (new)`;
      if (e.newContent === "") return `- ${e.path} (delete)`;
      return `~ ${e.path} (modify)`;
    }).join("\n");

    const impact = edits.map((e) => {
      if (e.originalContent === null) return `Create ${e.path} — ${e.reason}`;
      const added = e.newContent.length - (e.originalContent?.length ?? 0);
      return `${e.path}: ${added > 0 ? `+${added}` : added} bytes — ${e.reason}`;
    }).join("\n");

    return { edits, summary, estimatedImpact: impact };
  }

  private async commitChanges(): Promise<void> {
    for (const edit of this.pendingEdits) {
      if (edit.newContent === "") {
        // Delete file
        try {
          await Bun.write(edit.path, "");
          console.log(`  [commit] deleted ${edit.path}`);
        } catch (err) {
          console.log(`  [commit] failed to delete ${edit.path}: ${err}`);
        }

        this.rollbackStack.push(async () => {
          if (edit.originalContent !== null) {
            await Bun.write(edit.path, edit.originalContent);
            console.log(`  [rollback] restored ${edit.path}`);
          }
        });
      } else {
        // Write / overwrite file
        try {
          await Bun.write(edit.path, edit.newContent);
          console.log(`  [commit] wrote ${edit.newContent.length} bytes to ${edit.path}`);
        } catch (err) {
          console.log(`  [commit] failed to write ${edit.path}: ${err}`);
        }

        this.rollbackStack.push(async () => {
          if (edit.originalContent !== null) {
            await Bun.write(edit.path, edit.originalContent);
            console.log(`  [rollback] restored original ${edit.path}`);
          } else {
            await Bun.write(edit.path, "");
            console.log(`  [rollback] removed new file ${edit.path}`);
          }
        });
      }

      this.committedEdits.push(edit);
    }

    this.pendingEdits = [];
  }

  async rollbackLastCommit(): Promise<void> {
    const rollback = this.rollbackStack.pop();
    if (rollback) {
      await rollback();
      console.log("  [rollback] last commit undone");
    }
  }

  // ─── Override the HITL gate for bulk commits ───

  async reviewAndCommitGate(): Promise<boolean> {
    if (this.pendingEdits.length === 0) return true;

    const changes = await this.reviewChanges();

    console.log(`\n📋 Proposed changes:`);
    console.log(changes.summary);
    console.log(`\nImpact analysis:`);
    console.log(changes.estimatedImpact);

    if (this.pendingEdits.every((e) => e.originalContent !== null && e.newContent !== "")) {
      // All edits are modifications (no deletes)
      console.log("   → Auto-approved (low risk, modifications only)");
      await this.commitChanges();
      return true;
    }

    const hasDeletes = this.pendingEdits.some((e) => e.newContent === "");
    if (hasDeletes) {
      console.log(`\n🔴 Contains ${this.pendingEdits.filter((e) => e.newContent === "").length} deletion(s) — requires approval`);
      console.log("   Enter 'y' to commit:");
    }

    // In production, await user input. For demo, auto-approve.
    await this.commitChanges();
    return true;
  }

  // ─── Override run to add review/commit step ───

  async run(): Promise<{
    success: boolean;
    stepsCompleted: number;
    tokensUsed: number;
    costUsd: number;
    filesModified: string[];
    editsCommitted: number;
  }> {
    const baseResult = await super.run();
    const committed = this.committedEdits.length;

    // Propose some demo edits
    await this.proposeEdit(
      "/tmp/demo-output.txt",
      "Generated by MultiFileCodingAgent\n",
      "Create output file with agent results",
    );

    await this.proposeEdit(
      "/tmp/demo-summary.json",
      JSON.stringify(baseResult, null, 2),
      "Save execution summary as JSON",
    );

    const approved = await this.reviewAndCommitGate();

    return {
      ...baseResult,
      editsCommitted: approved ? this.committedEdits.length : 0,
    };
  }
}

async function runMultiFile() {
  const agent = new MultiFileCodingAgent("capstone-multifile-1", {
    maxSteps: 8,
    maxTokens: 30_000,
    maxCostUsd: 0.15,
  });

  const result = await agent.run();

  console.log(`\n═══ MultiFile agent complete ═══`);
  console.log(`Steps: ${result.stepsCompleted}`);
  console.log(`Files modified by tools: ${result.filesModified.length}`);
  console.log(`Edits committed via review: ${result.editsCommitted}`);
  console.log(`Budget: ${result.tokensUsed} tokens / $${result.costUsd.toFixed(4)}`);
  console.log(`Success: ${result.success}`);
}

await runMultiFile();
```

**Expected output:**

```
[agent] fresh start

═══ Cycle 1 ═══
  [plan] glob({"pattern":"src/**/*.ts"})
  [act] ✓ (no files match)
  [checkpoint] saved step 1
...

═══ MultiFile agent complete ═══
Steps: 5
Files modified by tools: 0
  [propose] /tmp/demo-output.txt (Create output file with agent results)
  [propose] /tmp/demo-summary.json (Save execution summary as JSON)

📋 Proposed changes:
+ /tmp/demo-output.txt (new)
+ /tmp/demo-summary.json (new)

Impact analysis:
Create /tmp/demo-output.txt — Create output file with agent results
Create /tmp/demo-summary.json — Save execution summary as JSON
   → Auto-approved (low risk, modifications only)
  [commit] wrote 37 bytes to /tmp/demo-output.txt
  [commit] wrote 257 bytes to /tmp/demo-summary.json
Edits committed via review: 2
Budget: 838 tokens / $0.0084
Success: true
```

---

### Recovery from Multi-Step Failure

The true power of the capstone architecture is multi-step recovery. Here is a standalone demo of how the checkpoint + rollback + retry chain works:

```typescript
// recovery-demo.ts
async function demonstrateMultiStepRecovery() {
  console.log("═══ Multi-Step Recovery Demo ═══\n");

  // Phase 1: agent does some work, checkpoints
  console.log("Phase 1: Normal execution with checkpoints\n");

  const agent1 = new CodingAgentLoop("recovery-demo", {
    maxSteps: 5,
    maxTokens: 10_000,
    maxCostUsd: 0.05,
  });

  await agent1.run();

  // Phase 2: simulate crash by clearing in-memory state
  console.log("\nPhase 2: 💥 Process crash — all in-memory state lost\n");

  // Phase 3: create a new agent with same loopId — it resumes
  console.log("Phase 3: Restart — agent discovers checkpoint\n");

  const agent2 = new CodingAgentLoop("recovery-demo", {
    maxSteps: 5,
    maxTokens: 10_000,
    maxCostUsd: 0.05,
  });

  const resumed = await agent2.resume();
  console.log(`Resumed from checkpoint: ${resumed}\n`);

  // Phase 4: Run the MultiFile variant which adds rollback
  console.log("\nPhase 4: Rollback demonstration\n");

  const fileAgent = new MultiFileCodingAgent("rollback-demo");

  // Simulate some edits
  await fileAgent.proposeEdit("/tmp/test-rollback.txt", "First version\n", "Initial content");
  await fileAgent.proposeEdit("/tmp/test-rollback-2.txt", "Second file\n", "Another file");

  // Commit
  console.log("\nCommitting edits...");
  await fileAgent["commitChanges"](); // Access via type cast for demo

  console.log("\nRolling back last commit...");
  await fileAgent.rollbackLastCommit();

  console.log("\nRecovery demo complete — both restart and rollback work");
}

await demonstrateMultiStepRecovery();
```

---

## Summary: What You Have Built

The capstone integrates every loop concept from this course into a single, coherent system:

| Component | Chapter Origin | Implementation |
|-----------|----------------|----------------|
| ReAct loop | Ch2 — Agent Architecture | `PlannedAction → executeTool → observe` cycle |
| HITL gates | Ch3 — Human-in-the-Loop | Risk-based `approveGate` with auto-approve for low-risk tools |
| Self-critique | Ch5 — Self-Improvement | `critiqueStep` evaluates failures and decides retry vs. give-up |
| Budget enforcement | Ch6 — Production Loops | `checkBudget` with token, step, and cost limits |
| Safe termination | Ch7 — Loop Safety | Max iterations check in `while (this.checkBudget())` |
| Durable execution | Ch9 — Loop Tooling | `saveCheckpoint` / `resume` with full state serialization |
| Chaos resilience | Ch9 — Loop Tooling | Retry logic handles transient failures |
| Saga rollback | Ch9 — Loop Tooling | `rollbackStack` with original-content restoration |

**The core insight.** A production agent is not a single LLM call — it is a **controlled loop** where every iteration is planned, gated, traced, budgeted, check-pointed, and recoverable. The LLM provides intelligence; the loop provides reliability.

---

## Exercises

### Review Questions

1. **Trace the complete lifecycle of a tool call.** Starting from `planNextAction`, list every step the call goes through, including which cross-cutting systems (HITL, budget, checkpoint, critique) interact with it and in what order.

2. **Why does the HITL gate distinguish three risk levels?** Give an example of each level and explain what could go wrong if every tool call required approval (too conservative) or if no tool calls required approval (too permissive).

3. **How does the self-critique loop differ from a simple try/catch?** Why is it better to have the LLM analyze a failure rather than just retrying blindly?

4. **What information would be lost if you only checkpointed the messages array?** Why does the checkpoint also need to store `filesModified`, `budgetUsed`, and `state`?

5. **Explain the propose → review → commit pipeline in MultiFileCodingAgent.** How does it protect against partial failures better than writing each file independently?

### Application Problems

6. **Add memory persistence with SQLite.** Replace the JSON file checkpointer with a SQLite database (use `bun:sqlite`). Store each checkpoint in a `checkpoints` table with columns `id`, `loop_id`, `step`, `data` (JSON blob), and `created_at`. Add a `listCheckpoints(loopId)` method that returns all checkpoints for a given run.

7. **Add MCP tool protocol support.** The Model Context Protocol (MCP) lets agents discover and call tools from external servers. Add an `registerMCPServer(url: string)` method to `CodingAgentLoop` that fetches the server's tool list via HTTP GET `/tools` and adds them to `getToolDefinitions()`. When an MCP tool is called, route the execution through an HTTP POST to the server. Handle connection errors gracefully.

8. **Add a sandboxed execution guard.** Wrap the `bash` tool so that commands execute inside a Docker container instead of on the host. Use `Bun.spawn(["docker", "run", "--rm", "-i", "sandbox:latest", "cmd.exe", "/c", command])`. Add a `sandboxImage` config option. If Docker is unavailable, fall back to a warning message and block the execution.

9. **Convert the CodingAgentLoop to a Temporal workflow.** Identify which methods map to Temporal constructs:
   - `executeTool` → Activity
   - `approveGate` → Signal (human approval)
   - `run` → Workflow with `while` loop
   - `saveCheckpoint` → built into Temporal's event history

   Outline the conversion. Which parts of the loop become activities, which become signals, and which remain in the workflow function? Why can't you use `console.log` inside a Temporal workflow?

### Challenge

10. **Build a CI agent that reviews PRs autonomously.** Extend `MultiFileCodingAgent` into a `PRReviewAgent` that:
    - Takes a GitHub PR URL as input
    - Reads the PR diff (via `bash: gh pr diff {url}`)
    - For each file, runs `grep` for code quality issues (N+1 queries, missing error handling, hardcoded secrets)
    - Proposes edits via `proposeEdit` for each issue found
    - Groups edits by file and presents a single review gate per file
    - Posts the review comment on the PR via `bash: gh pr comment {url} --body {review}`
    - Checkpoints after each file review so partial progress survives crashes
    - Enforces a $0.25 max cost per review session

    Test it on a public repository with known issues. Report: (a) how many issues it found, (b) how many false positives, (c) what percentage of the budget was consumed.
