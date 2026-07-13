# Chapter 4: Feedback Loops

> **Previous:** [Human-in-the-Loop](./ch03-human-in-the-loop.md) | **Next:** [Self-Improvement Loops](./ch05-self-improvement-loops.md)

## Learning Objectives

By the end of this chapter, you will be able to:

<!-- Image Gallery -->
<div style="display:flex;flex-wrap:wrap;gap:4px;margin:16px 0;padding:12px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
<a href="../../../assets/images/lessons/loop-engineering/ch04-feedback-loops/hero.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/loop-engineering/ch04-feedback-loops/hero.svg" alt="Chapter Banner: Chapter 4: Feedback Loops" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/loop-engineering/ch04-feedback-loops/handwritten-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/loop-engineering/ch04-feedback-loops/handwritten-notes.svg" alt="Handwritten Notes: Chapter 4: Feedback Loops" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/loop-engineering/ch04-feedback-loops/sticky-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/loop-engineering/ch04-feedback-loops/sticky-notes.svg" alt="Sticky Notes: Chapter 4: Feedback Loops" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/loop-engineering/ch04-feedback-loops/visual-explanation.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/loop-engineering/ch04-feedback-loops/visual-explanation.svg" alt="Visual Explanation: Chapter 4: Feedback Loops" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/loop-engineering/ch04-feedback-loops/architecture.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/loop-engineering/ch04-feedback-loops/architecture.svg" alt="Architecture: Chapter 4: Feedback Loops" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/loop-engineering/ch04-feedback-loops/workflow.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/loop-engineering/ch04-feedback-loops/workflow.svg" alt="Workflow: Chapter 4: Feedback Loops" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/loop-engineering/ch04-feedback-loops/mindmap.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/loop-engineering/ch04-feedback-loops/mindmap.svg" alt="Mind Map: Chapter 4: Feedback Loops" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/loop-engineering/ch04-feedback-loops/comparison.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/loop-engineering/ch04-feedback-loops/comparison.svg" alt="Comparison: Chapter 4: Feedback Loops" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/loop-engineering/ch04-feedback-loops/cheatsheet.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/loop-engineering/ch04-feedback-loops/cheatsheet.svg" alt="Cheat Sheet: Chapter 4: Feedback Loops" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/loop-engineering/ch04-feedback-loops/interview-quiz.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/loop-engineering/ch04-feedback-loops/interview-quiz.svg" alt="Quiz Card: Chapter 4: Feedback Loops" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/loop-engineering/ch04-feedback-loops/social-card.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/loop-engineering/ch04-feedback-loops/social-card.svg" alt="Social Card: Chapter 4: Feedback Loops" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
</div>
<!-- End Image Gallery -->


- Design eval-driven loops where agents generate output, score it against criteria, and retry
- Build code review loops with AI authoring and human reviewing rounds
- Implement test-driven agent loops where tests are written first and the agent implements to satisfy them
- Convert failed task attempts into concrete subtasks for retry
- Construct sweep loops that automatically detect and fix failures across a task set
- Distinguish open-loop from closed-loop feedback and choose the right one per context
- Reason about loop termination: when to stop retrying and when to escalate

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|--------------------|
| Eval-Driven Loops | Generate → score → adjust → repeat | Converge on quality through iterative scoring |
| Code Review Loops | AI writes → human reviews → AI fixes | Pair AI breadth with human judgment |
| Test-Driven Loops | Write test first → implement → verify | Tests are executable specifications |
| Failure-to-Task | Failed attempt → structured subtask | Never throw away partial progress |
| Sweep Loops | Scan → detect → fix → verify | Automated maintenance at scale |

---

## Theory

### 1. Eval-Driven Loops


An eval-driven loop is the most general form of agentic feedback. The agent produces an output, evaluates it against a set of criteria, adjusts its approach based on the evaluation, and repeats.

```
 ┌──────────┐   generate   ┌─────────┐   score    ┌────────┐
 │  Agent   │ ────────────>│ Output  │ ──────────> │  Eval  │
 │          │<──────────── │         │<────────── │  (LLM  │
 │  (LLM)   │   adjust     │         │   scores   │  or fx)│
 └──────────┘              └─────────┘            └────────┘
```

**Key parameters:**

| Parameter | What It Controls | Typical Values |
|-----------|-----------------|----------------|
| `max_iterations` | Hard cap on retries | 3-10 |
| `min_score` | Bar to clear for acceptance | 0.7-0.9 |
| `decay_factor` | How much to penalize repeated failures | 0.5-0.95 |
| `early_stop` | Stop if score stops improving | Δ &lt; 0.05 |

**Termination conditions.** The loop must always have a stopping rule:

1. **Score threshold met** — normal success, exit.
2. **Max iterations reached** — escalate or return best effort.
3. **Score plateau** — no improvement over last N rounds, exit.
4. **Score regression** — latest round scored worse than previous, roll back.

### 2. Code Review Loops


In a code review loop, the AI authors code and a human plays the role of reviewer. This mirrors real engineering workflows and is one of the most practical agent patterns.

```
Round 1:  AI writes code ──> Human reviews ──> Feedback
Round 2:  AI applies feedback ──> Human re-reviews ──> Approve or iterate
Round N:  (repeat until approval or max rounds)
```

**Feedback granularity.** Review comments should be specific, actionable, and scoped:

| Quality | Example |
|---------|---------|
| Vague | "This doesn't look right." |
| Actionable | "Line 34: the null check is redundant because `getUser()` already returns `never null`. Remove the if-block." |
| Scoped | Each comment references a specific file, line, and concern. |

The agent should restate its understanding of each comment before making changes, to catch misinterpretation early.

### 3. Test-Driven Loops


Test-driven agent loops invert the normal flow: a human (or automated test generator) writes a failing test first, then the agent implements code to make it pass.

```
Step 1:  Write test (fails) ──> Agent implements ──> Run test
Step 2:  Test passes? ──> Done.  Test fails? ──> Agent debugs and retries.
```

This pattern is especially powerful because:

- Tests provide an unambiguous pass/fail signal — no LLM-as-judge needed.
- The test suite becomes the specification. If the agent passes all tests, the task is done.
- Regression is automatic: the test suite catches regressions on subsequent iterations.

**Caveat:** The agent must be able to read test failures (stack traces, assertion messages) and translate them into debugging actions. A test that says "expected 5 but got 3" is only useful if the agent can trace which code produced the 3.

### 4. Failure-to-Task Conversion


When an agent fails at a step, the failure should not be discarded — it should be converted into a new subtask. This is the agentic equivalent of "fail fast, fail forward."

```
Task: "Implement user authentication"
  ├─ Step 1: Add password hashing ──> FAIL (bcrypt import error)
  │      └─ New subtask: "Install bcrypt package and verify import"
  ├─ Step 2: Add login endpoint ──> FAIL (missing JWT secret)
  │      └─ New subtask: "Add JWT secret to config and wire into login flow"
  └─ Step 3: Add session middleware ──> SUCCESS
```

**Design rules:**

- The subtask must be smaller and more specific than the parent task.
- The subtask must include the error message from the failure.
- The subtask should inherit the parent's context (files, imports, types).
- If a subtask also fails, escalate to a human — do not create subtasks of subtasks indefinitely.

### 5. Sweep Loops


A sweep loop processes a collection of items (bugs, tasks, PRs) and automatically creates fix tasks for any that fail. It is the batch-processing counterpart to the eval-driven loop.

```
 ┌──────────┐   for each    ┌───────────┐   pass     ┌────────┐
 │  Input   │ ────────────> │  Process  │ ──────────>│  Done  │
 │  Queue   │               │  Agent    │            │        │
 └──────────┘               └───────────┘            └────────┘
                                  │ fail
                                  v
                            ┌──────────┐
                            │  Create   │
                            │  Fix Task │
                            └──────────┘
```

Sweep loops are common in:

- **Dependency updates:** Run tests against new dependency version; create fix PRs for breakages.
- **Linting at scale:** Run a new linter rule across the codebase; create tasks for each violation.
- **Flaky test remediation:** Detect flaky tests, create tasks with reproduction evidence.
- **Accessibility audits:** Run axe-core across all pages; create issues for each violation found.

---

## Examples

### Example 1: EvalLoopAgent — Generate, Score, Adjust, Repeat

```typescript
// ch04-example1-eval-loop.ts
// Bun: bun run ch04-example1-eval-loop.ts

interface EvalCriterion {
  name: string;
  weight: number;
  score: (output: string) => number;
}

interface EvalResult {
  overallScore: number;
  dimensionScores: Record<string, number>;
  feedback: string;
}

interface EvalLoopConfig {
  maxIterations: number;
  minScore: number;
  plateauWindow: number;
  improvementThreshold: number;
}

interface GeneratorInput {
  prompt: string;
  context: Record<string, unknown>;
}

class EvalLoopAgent {
  private config: EvalLoopConfig;
  private criteria: EvalCriterion[] = [];
  private iterationHistory: Array<{ iteration: number; score: number; output: string }> = [];
  private currentParameters: Record<string, number> = {
    temperature: 0.8,
    topP: 0.9,
    repetitionPenalty: 1.0,
  };

  constructor(config: Partial<EvalLoopConfig> = {}) {
    this.config = {
      maxIterations: 5,
      minScore: 0.8,
      plateauWindow: 2,
      improvementThreshold: 0.05,
      ...config,
    };
  }

  addCriterion(criterion: EvalCriterion): void {
    this.criteria.push(criterion);
  }

  private simulateGenerate(input: GeneratorInput, params: Record<string, number>): string {
    const quality = Math.min(1, params.temperature * 0.5 + Math.random() * 0.5);
    let output = `Generated response for: "${input.prompt}"\n`;
    output += `Parameters: temp=${params.temperature.toFixed(2)}, `;
    output += `topP=${params.topP.toFixed(2)}\n---\n`;
    if (quality > 0.7) {
      output += "This is a high-quality response that addresses the prompt thoroughly.";
    } else if (quality > 0.4) {
      output += "This response covers the topic but lacks depth in some areas.";
    } else {
      output += "Brief response that partially addresses the prompt.";
    }
    return output;
  }

  private evaluate(output: string): EvalResult {
    let totalWeight = 0;
    let weightedSum = 0;
    const dimensionScores: Record<string, number> = {};

    for (const criterion of this.criteria) {
      const score = criterion.score(output);
      dimensionScores[criterion.name] = score;
      weightedSum += score * criterion.weight;
      totalWeight += criterion.weight;
    }

    const overallScore = totalWeight > 0 ? weightedSum / totalWeight : 0;
    const worstDimension = Object.entries(dimensionScores).sort((a, b) => a[1] - b[1])[0];
    const feedback = overallScore < this.config.minScore
      ? `Lowest dimension: ${worstDimension[0]} (${(worstDimension[1] * 100).toFixed(0)}%). Improve ${worstDimension[0]}.`
      : "All criteria met or exceeded.";

    return { overallScore, dimensionScores, feedback };
  }

  private adjustParameters(iteration: number, lastScore: number, prevScore: number | null): void {
    if (prevScore === null) {
      this.currentParameters.temperature = 0.8 - iteration * 0.1;
    } else if (lastScore < prevScore) {
      this.currentParameters.temperature = Math.max(0.1, this.currentParameters.temperature - 0.1);
      this.currentParameters.repetitionPenalty += 0.1;
    } else {
      this.currentParameters.temperature = Math.min(1.5, this.currentParameters.temperature + 0.05);
    }
    this.currentParameters.temperature = Math.max(0.1, Math.min(1.5, this.currentParameters.temperature));
  }

  async run(input: GeneratorInput): Promise<{ output: string; history: typeof this.iterationHistory }> {
    let prevScore: number | null = null;
    let plateauCount = 0;

    for (let i = 0; i < this.config.maxIterations; i++) {
      console.log(`\n=== Iteration ${i + 1}/${this.config.maxIterations} ===`);

      const output = this.simulateGenerate(input, this.currentParameters);
      const evalResult = this.evaluate(output);

      this.iterationHistory.push({
        iteration: i + 1,
        score: evalResult.overallScore,
        output,
      });

      console.log(`  Score: ${(evalResult.overallScore * 100).toFixed(0)}%`);
      console.log(`  Dimensions: ${JSON.stringify(evalResult.dimensionScores)}`);
      console.log(`  Parameters: temp=${this.currentParameters.temperature.toFixed(2)}`);
      console.log(`  Feedback: ${evalResult.feedback}`);

      if (evalResult.overallScore >= this.config.minScore) {
        console.log(`  => Score threshold met. Stopping.`);
        return { output, history: this.iterationHistory };
      }

      if (prevScore !== null) {
        const improvement = evalResult.overallScore - prevScore;
        if (improvement < 0) {
          console.log(`  => Score regressed. Rolling back and adjusting.`);
        } else if (improvement < this.config.improvementThreshold) {
          plateauCount++;
          console.log(`  => Plateau detected (${plateauCount}/${this.config.plateauWindow})`);
          if (plateauCount >= this.config.plateauWindow) {
            console.log(`  => Max plateau reached. Stopping.`);
            return { output, history: this.iterationHistory };
          }
        } else {
          plateauCount = 0;
        }
      }

      this.adjustParameters(i + 1, evalResult.overallScore, prevScore);
      prevScore = evalResult.overallScore;
    }

    console.log(`\n=> Max iterations (${this.config.maxIterations}) reached. Returning best result.`);
    const best = this.iterationHistory.reduce((a, b) => (a.score > b.score ? a : b));
    return { output: best.output, history: this.iterationHistory };
  }
}

async function main() {
  const agent = new EvalLoopAgent({ maxIterations: 4, minScore: 0.75 });

  agent.addCriterion({
    name: "relevance",
    weight: 0.4,
    score: (output) => {
      if (output.includes("addresses the prompt")) return 0.9;
      if (output.includes("covers the topic")) return 0.6;
      return 0.3;
    },
  });

  agent.addCriterion({
    name: "detail",
    weight: 0.35,
    score: (output) => {
      if (output.includes("high-quality")) return 0.85;
      if (output.includes("lacks depth")) return 0.5;
      return 0.2;
    },
  });

  agent.addCriterion({
    name: "clarity",
    weight: 0.25,
    score: (_output) => 0.7 + Math.random() * 0.2,
  });

  const result = await agent.run({
    prompt: "Explain the CAP theorem in distributed systems.",
    context: { audience: "senior engineers", maxTokens: 500 },
  });

  console.log("\n=== Result ===");
  console.log(result.output);
  console.log(`\nIterations: ${result.history.length}`);
  console.log(`Best score: ${(Math.max(...result.history.map((h) => h.score)) * 100).toFixed(0)}%`);
}

await main();
```

### Example 2: ReviewLoopAgent — AI Writes, Human Reviews, AI Fixes

```typescript
// ch04-example2-review-loop.ts
// Bun: bun run ch04-example2-review-loop.ts

interface ReviewComment {
  file: string;
  line: number;
  severity: "error" | "warning" | "nit";
  message: string;
  suggestion: string;
}

interface ReviewRound {
  round: number;
  code: string;
  comments: ReviewComment[];
  approved: boolean;
}

class ReviewLoopAgent {
  private currentRound = 0;
  private readonly maxRounds: number;
  private history: ReviewRound[] = [];

  constructor(maxRounds = 3) {
    this.maxRounds = maxRounds;
  }

  private simulateWriteCode(task: string): string {
    const templates: Record<string, string> = {
      "add-user-endpoint": `import { Router } from "express";
import { hash } from "bcrypt";
import { prisma } from "../db";

const router = Router();

router.post("/users", async (req, res) => {
  const { email, password, name } = req.body;
  const hashed = await hash(password, 10);
  const user = await prisma.user.create({
    data: { email, password: hashed, name },
  });
  res.status(201).json(user);
});

export default router;`,

      "add-login-endpoint": `import { Router } from "express";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../db";

const router = Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(401).json({ error: "Invalid credentials" });
  const valid = await compare(password, user.password);
  if (!valid) return res.status(401).json({ error: "Invalid credentials" });
  const token = sign({ userId: user.id }, process.env.JWT_SECRET!);
  res.json({ token });
});

export default router;`,
    };

    return templates[task] ?? `// Implement ${task}\nexport function solve() {\n  // TODO\n}`;
  }

  private simulateHumanReview(code: string): ReviewComment[] {
    const comments: ReviewComment[] = [];
    const lines = code.split("\n");

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineNum = i + 1;

      if (line.includes("any")) {
        comments.push({
          file: "impl.ts",
          line: lineNum,
          severity: "error",
          message: "Avoid `any` type. Use a proper interface or type alias.",
          suggestion: line.replace("any", "unknown"),
        });
      }

      if (line.includes("process.env") && !line.includes("!")) {
        comments.push({
          file: "impl.ts",
          line: lineNum,
          severity: "warning",
          message: "Environment variable access without non-null assertion. Consider validating at startup.",
          suggestion: line.replace("process.env.", "process.env.").replace(";", "!;"),
        });
      }

      if (line.includes("TODO")) {
        comments.push({
          file: "impl.ts",
          line: lineNum,
          severity: "warning",
          message: "TODO left in code. Complete the implementation or add a tracking issue.",
          suggestion: "Implement the function body or add a @todo comment with an issue link.",
        });
      }
    }

    comments.push({
      file: "impl.ts",
      line: 1,
      severity: "nit",
      message: "Consider adding JSDoc comments to exported functions.",
      suggestion: "/** Creates a new user. */",
    });

    return comments;
  }

  private applyFeedback(code: string, comments: ReviewComment[]): string {
    let result = code;
    for (const comment of comments) {
      if (comment.severity === "error") {
        result = result.replace(/any/g, "unknown");
      }
      if (comment.message.includes("TODOs")) {
        result = result.replace("// TODO", "// Implemented");
      }
    }
    return result;
  }

  async run(task: string): Promise<ReviewRound> {
    let code = this.simulateWriteCode(task);

    while (this.currentRound < this.maxRounds) {
      this.currentRound++;
      console.log(`\n=== Review Round ${this.currentRound} ===`);

      const comments = this.simulateHumanReview(code);
      const errors = comments.filter((c) => c.severity === "error").length;
      const warnings = comments.filter((c) => c.severity === "warning").length;
      const nits = comments.filter((c) => c.severity === "nit").length;

      console.log(`  Errors: ${errors}, Warnings: ${warnings}, Nits: ${nits}`);

      for (const comment of comments) {
        console.log(`  [${comment.severity}] L${comment.line}: ${comment.message}`);
      }

      const approved = errors === 0;

      this.history.push({ round: this.currentRound, code, comments, approved });

      if (approved) {
        console.log("  => Approved! No errors remaining.");
        return this.history[this.history.length - 1];
      }

      if (this.currentRound < this.maxRounds) {
        code = this.applyFeedback(code, comments);
        console.log("  => Applied fixes. Re-submitting for review...");
      }
    }

    console.log(`\n=> Max review rounds (${this.maxRounds}) reached.`);
    return this.history[this.history.length - 1];
  }

  getHistory(): ReviewRound[] {
    return this.history;
  }
}

async function main() {
  const agent = new ReviewLoopAgent(3);

  const result = await agent.run("add-user-endpoint");

  console.log("\n=== Review History ===");
  for (const round of agent.getHistory()) {
    console.log(`\nRound ${round.round}: ${round.approved ? "APPROVED" : "NEEDS WORK"}`);
    console.log(`  ${round.comments.length} comments`);
  }

  console.log(`\nFinal approved: ${result.approved}`);
  console.log("Final code:");
  console.log(result.code);
}

await main();
```

### Example 3: SweepLoop — Process, Detect Failures, Create Fix Tasks

```typescript
// ch04-example3-sweep-loop.ts
// Bun: bun run ch04-example3-sweep-loop.ts

interface Task {
  id: string;
  description: string;
  category: string;
  priority: "low" | "medium" | "high" | "critical";
}

interface TaskResult {
  taskId: string;
  succeeded: boolean;
  error?: string;
  output?: string;
}

interface FixTask {
  id: string;
  parentTaskId: string;
  description: string;
  error: string;
  category: string;
  priority: "low" | "medium" | "high" | "critical";
}

class SweepLoop {
  private fixTasks: FixTask[] = [];
  private processedCount = 0;
  private fixRound = 0;
  private readonly maxFixRounds: number;

  constructor(maxFixRounds = 2) {
    this.maxFixRounds = maxFixRounds;
  }

  private async executeTask(task: Task): Promise<TaskResult> {
    await new Promise((r) => setTimeout(r, 10 + Math.random() * 20));
    const willFail = Math.random() < 0.4;
    if (willFail) {
      const errors = [
        "ModuleNotFoundError: No module named 'requests'",
        "TypeError: Cannot read properties of undefined (reading 'map')",
        "SyntaxError: Unexpected token ) in JSON at position 42",
        "TimeoutError: Connection to database timed out",
        "AssertionError: expected 5 to equal 3",
      ];
      return {
        taskId: task.id,
        succeeded: false,
        error: errors[Math.floor(Math.random() * errors.length)],
      };
    }
    return {
      taskId: task.id,
      succeeded: true,
      output: `Successfully completed: ${task.description}`,
    };
  }

  private severityToPriority(severity: number): Task["priority"] {
    if (severity > 0.8) return "critical";
    if (severity > 0.5) return "high";
    if (severity > 0.2) return "medium";
    return "low";
  }

  private parseErrorForFixTask(error: string, parent: Task): string {
    if (error.includes("ModuleNotFoundError")) {
      return `Install missing dependency for ${parent.description}. Error: ${error}`;
    }
    if (error.includes("TypeError")) {
      return `Fix null/undefined check in ${parent.description}. Error: ${error}`;
    }
    if (error.includes("SyntaxError")) {
      return `Fix JSON parsing in ${parent.description}. Error: ${error}`;
    }
    if (error.includes("TimeoutError")) {
      return `Add connection retry logic or increase timeout for ${parent.description}. Error: ${error}`;
    }
    if (error.includes("AssertionError")) {
      return `Fix incorrect return value in ${parent.description}. Error: ${error}`;
    }
    return `General fix for ${parent.description}: ${error}`;
  }

  private createFixTask(task: Task, result: TaskResult): FixTask {
    return {
      id: `fix-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      parentTaskId: task.id,
      description: this.parseErrorForFixTask(result.error!, task),
      error: result.error!,
      category: task.category,
      priority: task.priority === "critical" ? "critical" : "medium",
    };
  }

  async sweep(tasks: Task[]): Promise<{
    successes: TaskResult[];
    failures: TaskResult[];
    fixTasks: FixTask[];
    resolvedByFixes: TaskResult[];
  }> {
    const successes: TaskResult[] = [];
    const failures: TaskResult[] = [];
    const resolvedByFixes: TaskResult[] = [];

    console.log(`=== SWEEP: Processing ${tasks.length} tasks ===\n`);

    for (const task of tasks) {
      this.processedCount++;
      console.log(`[${this.processedCount}/${tasks.length}] ${task.description} (${task.priority})`);
      const result = await this.executeTask(task);
      if (result.succeeded) {
        successes.push(result);
        console.log(`  => OK`);
      } else {
        failures.push(result);
        const fixTask = this.createFixTask(task, result);
        this.fixTasks.push(fixTask);
        console.log(`  => FAIL: ${result.error}`);
        console.log(`  => Created fix task: ${fixTask.description.slice(0, 60)}...`);
      }
    }

    if (this.fixTasks.length > 0 && this.maxFixRounds > 0) {
      console.log(`\n=== FIX ROUND ${++this.fixRound}: Processing ${this.fixTasks.length} fix tasks ===\n`);
      const pendingFixes = [...this.fixTasks];
      this.fixTasks = [];

      for (const fix of pendingFixes) {
        console.log(`[FIX] ${fix.description.slice(0, 60)}...`);
        const result = await this.executeTask({
          id: fix.id,
          description: fix.description,
          category: fix.category,
          priority: fix.priority,
        });
        if (result.succeeded) {
          resolvedByFixes.push(result);
          console.log(`  => FIX SUCCEEDED`);
        } else {
          console.log(`  => FIX FAILED: ${result.error}`);
          if (this.fixRound < this.maxFixRounds) {
            const subFix = this.createFixTask(
              { id: fix.parentTaskId, description: fix.description, category: fix.category, priority: fix.priority },
              result
            );
            this.fixTasks.push(subFix);
            console.log(`  => Re-queued for next fix round`);
          } else {
            console.log(`  => Max fix rounds reached. Escalating.`);
          }
        }
      }

      if (this.fixTasks.length > 0 && this.fixRound < this.maxFixRounds) {
        const remaining = await this.sweep(
          this.fixTasks.map((f) => ({
            id: f.id,
            description: f.description,
            category: f.category,
            priority: f.priority,
          }))
        );
        return {
          successes: [...successes, ...remaining.successes],
          failures: [...failures, ...remaining.failures],
          fixTasks: remaining.fixTasks,
          resolvedByFixes: [...resolvedByFixes, ...remaining.resolvedByFixes],
        };
      }
    }

    return { successes, failures, fixTasks: this.fixTasks, resolvedByFixes };
  }
}

async function main() {
  const sweeper = new SweepLoop(2);

  const tasks: Task[] = [
    { id: "t1", description: "Update axios to v1.7.0", category: "deps", priority: "high" },
    { id: "t2", description: "Add input validation to signup form", category: "feature", priority: "high" },
    { id: "t3", description: "Fix pagination off-by-one", category: "bug", priority: "medium" },
    { id: "t4", description: "Add rate limiting to login endpoint", category: "security", priority: "critical" },
    { id: "t5", description: "Refactor user service to use repository pattern", category: "refactor", priority: "low" },
    { id: "t6", description: "Upgrade ESLint config to flat config", category: "tooling", priority: "medium" },
    { id: "t7", description: "Add integration test for payment flow", category: "testing", priority: "high" },
    { id: "t8", description: "Replace moment.js with date-fns", category: "deps", priority: "low" },
  ];

  const result = await sweeper.sweep(tasks);

  console.log("\n=== SWEEP RESULTS ===");
  console.log(`Total tasks: ${tasks.length}`);
  console.log(`Immediate successes: ${result.successes.length}`);
  console.log(`Immediate failures: ${result.failures.length}`);
  console.log(`Resolved by auto-fix: ${result.resolvedByFixes.length}`);
  console.log(`Unresolved (escalated): ${result.fixTasks.length}`);
  console.log(`Final pass rate: ${((result.successes.length + result.resolvedByFixes.length) / tasks.length * 100).toFixed(0)}%`);

  if (result.fixTasks.length > 0) {
    console.log("\n=== ESCALATED FIX TASKS ===");
    for (const fix of result.fixTasks) {
      console.log(`  ${fix.id}: ${fix.description}`);
      console.log(`    Priority: ${fix.priority} | Original error: ${fix.error}`);
    }
  }
}

await main();
```

---

### Extended Implementation: Feedback Controller, Q-Learning Loop, Adaptive Threshold, and Multi-Signal Fusion

This section builds advanced feedback infrastructure: a generic `FeedbackController` with pluggable sensor/actuator/controller components, a `ReinforcementFeedbackLoop` using Q-learning update rules, an `AdaptiveThresholdDetector` with moving window statistics, a `MultiSignalFusion` engine combining multiple feedback signals, a Smith predictor for delay compensation, and saturation/anti-windup protection.

```typescript
// ch04-advanced-feedback.ts
// bun run ch04-advanced-feedback.ts

// ─── Generic Feedback Controller ───────────────────────────────────────

interface Sensor {
  read(): number;
}

interface Actuator {
  apply(control: number): void;
}

interface Controller {
  compute(setpoint: number, measurement: number): number;
  reset(): void;
}

class FeedbackController {
  private sensor: Sensor;
  private actuator: Actuator;
  private controller: Controller;
  private setpoint: number;
  private trace: Array<{ cycle: number; measurement: number; control: number; error: number }> = [];
  private cycle = 0;

  constructor(sensor: Sensor, actuator: Actuator, controller: Controller, setpoint: number) {
    this.sensor = sensor;
    this.actuator = actuator;
    this.controller = controller;
    this.setpoint = setpoint;
  }

  async run(cycles: number): Promise<typeof this.trace> {
    for (let i = 0; i < cycles; i++) {
      this.cycle++;
      const measurement = this.sensor.read();
      const error = this.setpoint - measurement;
      const control = this.controller.compute(this.setpoint, measurement);
      this.actuator.apply(control);
      this.trace.push({ cycle: this.cycle, measurement, control, error });
    }
    return this.trace;
  }

  changeSetpoint(newSetpoint: number): void {
    this.setpoint = newSetpoint;
  }

  reset(): void {
    this.controller.reset();
    this.trace = [];
    this.cycle = 0;
  }

  getTrace(): typeof this.trace {
    return [...this.trace];
  }
}

// ─── PID Controller (imported pattern, re-implemented for feedback context) ───

class PIDFeedbackController implements Controller {
  private integral = 0;
  private prevError = 0;
  private outputMin: number;
  private outputMax: number;

  constructor(
    private kp: number,
    private ki: number,
    private kd: number,
    private dt: number,
    limits?: { min: number; max: number }
  ) {
    this.outputMin = limits?.min ?? -Infinity;
    this.outputMax = limits?.max ?? Infinity;
  }

  compute(setpoint: number, measurement: number): number {
    const error = setpoint - measurement;
    const proportional = this.kp * error;
    this.integral += this.ki * error * this.dt;
    this.integral = Math.max(this.outputMin, Math.min(this.outputMax, this.integral));
    const derivative = this.kd * ((error - this.prevError) / (this.dt || 1e-6));
    let output = proportional + this.integral + derivative;
    output = Math.max(this.outputMin, Math.min(this.outputMax, output));
    this.prevError = error;
    return output;
  }

  reset(): void {
    this.integral = 0;
    this.prevError = 0;
  }
}

// ─── Reinforcement Feedback Loop (Q-Learning Update) ───────────────────

interface QLearningConfig {
  learningRate: number;
  discountFactor: number;
  explorationRate: number;
  stateCount: number;
  actionCount: number;
}

class ReinforcementFeedbackLoop {
  private qTable: number[][];
  private config: QLearningConfig;
  private episodeRewards: number[] = [];
  private currentEpisode = 0;

  constructor(config: QLearningConfig) {
    this.config = config;
    this.qTable = Array.from({ length: config.stateCount }, () =>
      Array.from({ length: config.actionCount }, () => Math.random() * 0.1)
    );
  }

  selectAction(state: number): number {
    if (Math.random() < this.config.explorationRate) {
      return Math.floor(Math.random() * this.config.actionCount);
    }
    return this.qTable[state].indexOf(Math.max(...this.qTable[state]));
  }

  update(state: number, action: number, reward: number, nextState: number): void {
    const { learningRate: alpha, discountFactor: gamma } = this.config;
    const currentQ = this.qTable[state][action];
    const maxNextQ = Math.max(...this.qTable[nextState]);
    this.qTable[state][action] = currentQ + alpha * (reward + gamma * maxNextQ - currentQ);
  }

  runEpisode(
    env: (state: number, action: number) => { nextState: number; reward: number; done: boolean },
    maxSteps: number
  ): { totalReward: number; steps: number } {
    this.currentEpisode++;
    let state = 0;
    let totalReward = 0;
    let steps = 0;

    for (let i = 0; i < maxSteps; i++) {
      const action = this.selectAction(state);
      const { nextState, reward, done } = env(state, action);
      this.update(state, action, reward, nextState);
      totalReward += reward;
      state = nextState;
      steps++;
      if (done) break;
    }

    this.episodeRewards.push(totalReward);

    if (this.currentEpisode % 100 === 0) {
      this.config.explorationRate = Math.max(0.01, this.config.explorationRate * 0.95);
    }

    return { totalReward, steps };
  }

  getQTable(): number[][] {
    return this.qTable.map((row) => [...row]);
  }

  getAverageReward(lastN: number = 10): number {
    const recent = this.episodeRewards.slice(-lastN);
    return recent.reduce((a, b) => a + b, 0) / (recent.length || 1);
  }
}

// ─── Adaptive Threshold Detector ────────────────────────────────────────

class AdaptiveThresholdDetector {
  private window: number[] = [];
  private readonly windowSize: number;
  private readonly multiplier: number;
  private threshold: number;

  constructor(windowSize: number = 20, multiplier: number = 2.0) {
    this.windowSize = windowSize;
    this.multiplier = multiplier;
    this.threshold = 0;
  }

  update(value: number): void {
    this.window.push(value);
    if (this.window.length > this.windowSize) {
      this.window.shift();
    }
    if (this.window.length >= 5) {
      const mean = this.window.reduce((a, b) => a + b, 0) / this.window.length;
      const variance = this.window.reduce((sum, v) => sum + (v - mean) ** 2, 0) / this.window.length;
      const stdDev = Math.sqrt(variance);
      this.threshold = mean + this.multiplier * stdDev;
    }
  }

  isAnomalous(value: number): boolean {
    return this.window.length >= 5 && Math.abs(value) > this.threshold;
  }

  getThreshold(): number {
    return this.threshold;
  }

  getStats(): { mean: number; stdDev: number; count: number } {
    if (this.window.length === 0) return { mean: 0, stdDev: 0, count: 0 };
    const mean = this.window.reduce((a, b) => a + b, 0) / this.window.length;
    const variance = this.window.reduce((sum, v) => sum + (v - mean) ** 2, 0) / this.window.length;
    return { mean, stdDev: Math.sqrt(variance), count: this.window.length };
  }
}

// ─── Multi-Signal Fusion ───────────────────────────────────────────────

type FusionMethod = "weighted" | "median" | "min" | "max" | "product";

interface SignalSource {
  name: string;
  weight: number;
  read: () => number;
}

class MultiSignalFusion {
  private sources: SignalSource[] = [];

  addSource(source: SignalSource): void {
    this.sources.push(source);
  }

  fuse(method: FusionMethod = "weighted"): { value: number; contributions: Record<string, number> } {
    const readings = this.sources.map((s) => ({ name: s.name, value: s.read(), weight: s.weight }));
    const contributions: Record<string, number> = {};
    readings.forEach((r) => { contributions[r.name] = r.value; });

    let value: number;
    switch (method) {
      case "weighted": {
        const totalWeight = readings.reduce((s, r) => s + r.weight, 0);
        value = readings.reduce((s, r) => s + r.value * r.weight, 0) / (totalWeight || 1);
        break;
      }
      case "median": {
        const sorted = [...readings].sort((a, b) => a.value - b.value);
        value = sorted[Math.floor(sorted.length / 2)].value;
        break;
      }
      case "min":
        value = Math.min(...readings.map((r) => r.value));
        break;
      case "max":
        value = Math.max(...readings.map((r) => r.value));
        break;
      case "product":
        value = readings.reduce((p, r) => p * Math.max(r.value, 0.01), 1);
        break;
      default:
        value = readings.reduce((s, r) => s + r.value, 0) / readings.length;
    }

    return { value, contributions };
  }

  listSources(): string[] {
    return this.sources.map((s) => s.name);
  }

  adjustWeight(name: string, newWeight: number): void {
    const source = this.sources.find((s) => s.name === name);
    if (source) source.weight = Math.max(0, newWeight);
  }
}

// ─── Feedback Delay Compensator (Smith Predictor) ──────────────────────

class SmithPredictor {
  private delayBuffer: number[] = [];
  private modelOutput: number = 0;
  private readonly delay: number;
  private readonly modelGain: number;
  private readonly modelTimeConstant: number;
  private readonly dt: number;

  constructor(delay: number, modelGain: number, modelTimeConstant: number, dt: number) {
    this.delay = delay;
    this.modelGain = modelGain;
    this.modelTimeConstant = modelTimeConstant;
    this.dt = dt;
    this.delayBuffer = new Array(Math.max(1, Math.round(delay / dt))).fill(0);
  }

  predict(controlSignal: number, measuredOutput: number): number {
    const alpha = this.dt / (this.modelTimeConstant + this.dt);
    this.modelOutput = (1 - alpha) * this.modelOutput + alpha * this.modelGain * controlSignal;
    this.delayBuffer.push(this.modelOutput);
    const delayedOutput = this.delayBuffer.shift() ?? 0;
    const predictedError = measuredOutput - delayedOutput;
    return this.modelOutput + predictedError;
  }

  reset(): void {
    this.delayBuffer = new Array(this.delayBuffer.length).fill(0);
    this.modelOutput = 0;
  }
}

// ─── Saturation / Anti-Windup Protection ───────────────────────────────

class AntiWindupProtector {
  private accumulatedError = 0;
  private readonly limit: number;
  private readonly decayRate: number;

  constructor(integralLimit: number = 10, decayRate: number = 0.1) {
    this.limit = integralLimit;
    this.decayRate = decayRate;
  }

  update(error: number, controlOutput: number, isSaturated: boolean): number {
    if (isSaturated) {
      this.accumulatedError = (1 - this.decayRate) * this.accumulatedError;
    } else {
      this.accumulatedError += error * this.decayRate;
    }
    this.accumulatedError = Math.max(-this.limit, Math.min(this.limit, this.accumulatedError));
    return controlOutput + this.accumulatedError;
  }

  clamp(value: number, min: number, max: number): { value: number; saturated: boolean } {
    const saturated = value < min || value > max;
    return { value: Math.max(min, Math.min(max, value)), saturated };
  }

  reset(): void {
    this.accumulatedError = 0;
  }
}

// ─── Demo ──────────────────────────────────────────────────────────────

async function main() {
  console.log("=== Extended Feedback Demo ===\n");

  // 1. Feedback Controller with PID
  let plantOutput = 0;
  const sensor: Sensor = { read: () => plantOutput + (Math.random() - 0.5) * 0.1 };
  const actuator: Actuator = { apply: (control) => { plantOutput += control * 0.1 - plantOutput * 0.05; } };
  const pid = new PIDFeedbackController(2.0, 0.3, 0.05, 0.1, { min: -50, max: 50 });
  const fc = new FeedbackController(sensor, actuator, pid, 100);
  const trace = await fc.run(30);
  const last = trace[trace.length - 1];
  console.log(`Feedback Controller: ${trace.length} cycles, final error=${last.error.toFixed(3)}`);

  // 2. Reinforcement Feedback Loop
  const rl = new ReinforcementFeedbackLoop({
    learningRate: 0.1, discountFactor: 0.9, explorationRate: 0.5,
    stateCount: 5, actionCount: 3,
  });
  for (let ep = 0; ep < 200; ep++) {
    rl.runEpisode((state, action) => {
      const reward = action === 1 ? 1 : -0.1;
      const nextState = Math.min(4, state + (action === 1 ? 1 : -1));
      return { nextState: Math.max(0, nextState), reward, done: nextState >= 4 };
    }, 20);
  }
  console.log(`\nQ-Learning: avg reward (last 10) = ${rl.getAverageReward(10).toFixed(3)}`);
  const qTable = rl.getQTable();
  console.log(`Q-table max value: ${Math.max(...qTable.flat()).toFixed(3)}`);

  // 3. Adaptive Threshold Detector
  const detector = new AdaptiveThresholdDetector(15, 2.5);
  const values = [1, 1.2, 0.8, 1.1, 0.9, 1.3, 1.0, 0.7, 1.1, 1.2, 5.0, 1.0, 0.9];
  console.log("\nAdaptive Threshold:");
  for (const v of values) {
    detector.update(v);
    const anomalous = detector.isAnomalous(v) ? " ⚠ ANOMALOUS" : "";
    if (anomalous) console.log(`  value=${v.toFixed(1)} threshold=${detector.getThreshold().toFixed(2)}${anomalous}`);
  }

  // 4. Multi-Signal Fusion
  const fusion = new MultiSignalFusion();
  fusion.addSource({ name: "accuracy", weight: 0.5, read: () => 0.85 + Math.random() * 0.1 });
  fusion.addSource({ name: "latency", weight: 0.3, read: () => 0.7 + Math.random() * 0.2 });
  fusion.addSource({ name: "coverage", weight: 0.2, read: () => 0.9 + Math.random() * 0.05 });
  const fused = fusion.fuse("weighted");
  console.log(`\nMulti-Signal Fusion (weighted): ${fused.value.toFixed(3)}`);
  console.log(`  Contributions: ${JSON.stringify(fused.contributions)}`);

  // 5. Smith Predictor
  const smith = new SmithPredictor(5, 1.0, 2.0, 0.5);
  const predicted = smith.predict(10, 2.5);
  console.log(`\nSmith Predictor: predicted_output=${predicted.toFixed(3)}`);

  // 6. Anti-Windup Protection
  const aw = new AntiWindupProtector(5, 0.2);
  let ctrlOutput = 0;
  for (let i = 0; i < 10; i++) {
    const { value, saturated } = aw.clamp(ctrlOutput, -10, 10);
    ctrlOutput = aw.update(2.0, value, saturated);
  }
  console.log(`\nAnti-Windup: output=${ctrlOutput.toFixed(3)}`);
}

await main();
```

**Key concepts demonstrated:**
- **FeedbackController** separates sensor, actuator, and controller concerns — any component can be swapped independently
- **PIDFeedbackController** implements proportional-integral-derivative control with integral clamping for anti-windup
- **ReinforcementFeedbackLoop** uses Q-learning update rules (Bellman equation) to learn optimal actions from delayed rewards
- **AdaptiveThresholdDetector** computes a moving-window mean and standard deviation, flagging values beyond `mean + k·σ`
- **MultiSignalFusion** combines signals via weighted, median, min, max, or product fusion strategies
- **SmithPredictor** compensates for known feedback delays by modeling the plant and subtracting the delayed component
- **AntiWindupProtector** prevents integral windup by decaying the accumulated error when the actuator is saturated

---

### Advanced Feedback Tools: Oscillation Detection, Cascade Control, Feed-Forward, System ID, and Deadband Filtering

This section adds specialized feedback analysis and control components: an `OscillationDetector` that flags growing amplitude in the error signal, a `CascadeController` chaining multiple controllers in series, a `FeedForwardController` that anticipates disturbances before feedback can react, a `BumpTestAnalyzer` for system identification from step response data, and a `DeadbandFilter` that ignores error changes below a configurable threshold to reduce dithering.

```typescript
// ch04-advanced-feedback-tools.ts
// bun run ch04-advanced-feedback-tools.ts

/*
```mermaid
graph TD
    subgraph "Multi-Signal Fusion with Weighted Averaging"
        A[Signal 1: Accuracy] -->|w1=0.4| F[Weighted Average]
        B[Signal 2: Latency] -->|w2=0.3| F
        C[Signal 3: Coverage] -->|w3=0.2| F
        D[Signal 4: Cost] -->|w4=0.1| F
        E[Median Filter] --> F
        F --> G{Fused Score}
        G -->|Above Threshold| H[Execute]
        G -->|Below Threshold| I[Adjust Parameters]
        G -->|Oscillating| J[Reduce Gain]
        I --> K[Re-evaluate]
        J --> K
        K --> A
    end
    
    style H fill:#2ecc71,color:#fff
    style G fill:#3498db,color:#fff
*/
*/

// ─── OscillationDetector ───────────────────────────────────────────────

interface OscillationResult {
  oscillating: boolean;
  amplitude: number;
  period: number | null;
  growingAmplitude: boolean;
  zeroCrossingCount: number;
  recommendation: string;
}

class OscillationDetector {
  private errorHistory: number[] = [];
  private readonly minSamples: number;
  private readonly amplitudeGrowthThreshold: number;

  constructor(minSamples: number = 6, amplitudeGrowthThreshold: number = 1.1) {
    this.minSamples = minSamples;
    this.amplitudeGrowthThreshold = amplitudeGrowthThreshold;
  }

  feed(error: number): void {
    this.errorHistory.push(error);
  }

  analyze(): OscillationResult {
    const n = this.errorHistory.length;
    if (n &lt; this.minSamples) {
      return { oscillating: false, amplitude: 0, period: null, growingAmplitude: false, zeroCrossingCount: 0, recommendation: "Need more samples" };
    }

    const recent = this.errorHistory.slice(-this.minSamples);
    let zeroCrossings = 0;
    for (let i = 1; i &lt; recent.length; i++) {
      if (recent[i] * recent[i - 1] &lt; 0) zeroCrossings++;
    }

    const periods: number[] = [];
    let lastZeroIdx: number | null = null;
    for (let i = 0; i &lt; this.errorHistory.length; i++) {
      if (Math.abs(this.errorHistory[i]) &lt; 0.001 || (i &gt; 0 && this.errorHistory[i] * this.errorHistory[i - 1] &lt; 0)) {
        if (lastZeroIdx !== null) {
          periods.push(i - lastZeroIdx);
        }
        lastZeroIdx = i;
      }
    }

    const avgPeriod = periods.length > 0
      ? periods.reduce((s, p) => s + p, 0) / periods.length
      : null;

    const halfN = Math.floor(n / 2);
    const firstHalf = this.errorHistory.slice(0, halfN).map(Math.abs);
    const secondHalf = this.errorHistory.slice(halfN).map(Math.abs);
    const firstMean = firstHalf.reduce((s, v) => s + v, 0) / firstHalf.length;
    const secondMean = secondHalf.reduce((s, v) => s + v, 0) / secondHalf.length;
    const growingAmplitude = secondMean > firstMean * this.amplitudeGrowthThreshold;

    const amplitude = recent.reduce((max, v) => Math.max(max, Math.abs(v)), 0);
    const oscillating = zeroCrossings >= 3 && this.errorHistory.length >= 6;

    let recommendation: string;
    if (!oscillating) {
      recommendation = "No oscillation detected.";
    } else if (growingAmplitude) {
      recommendation = "CRITICAL: Oscillation with growing amplitude. Reduce gain immediately or apply damping.";
    } else if (amplitude > 10) {
      recommendation = "WARNING: Sustained large-amplitude oscillation. Consider reducing gain by 30-50%.";
    } else {
      recommendation = "Minor oscillation detected. Monitor trend. Consider slight gain reduction or deadband filter.";
    }

    return { oscillating, amplitude, period: avgPeriod, growingAmplitude, zeroCrossingCount: zeroCrossings, recommendation };
  }

  reset(): void {
    this.errorHistory = [];
  }
}

// ─── CascadeController ────────────────────────────────────────────────

interface CascadeStage {
  controller: {
    compute: (error: number) => number;
    reset: () => void;
  };
  name: string;
  minOutput: number;
  maxOutput: number;
  proportional: number;
  integral: number;
}

class CascadeController {
  private stages: CascadeStage[] = [];
  private outputs: number[] = [];

  addStage(name: string, kp: number, ki: number, minOutput: number, maxOutput: number): void {
    let integral = 0;
    let prevError = 0;
    const dt = 0.01;

    const controller = {
      compute: (error: number): number => {
        const p = kp * error;
        integral += ki * error * dt;
        integral = Math.max(minOutput, Math.min(maxOutput, integral));
        const d = (error - prevError) / dt;
        let output = p + integral + d;
        output = Math.max(minOutput, Math.min(maxOutput, output));
        prevError = error;
        return output;
      },
      reset: () => { integral = 0; prevError = 0; },
    };

    this.stages.push({ controller, name, minOutput, maxOutput, proportional: kp, integral: ki });
  }

  compute(setpoint: number, measurement: number): number {
    this.outputs = [];
    let error = setpoint - measurement;

    for (const stage of this.stages) {
      const stageOutput = stage.controller.compute(error);
      this.outputs.push(stageOutput);
      error = stageOutput;
    }

    return this.outputs[this.outputs.length - 1];
  }

  simulate(
    setpoint: number,
    initialValue: number,
    plantFn: (control: number) => number,
    steps: number
  ): Array&lt;{ step: number; measurement: number; control: number; stageOutputs: number[] }&gt; {
    const trace: Array&lt;{ step: number; measurement: number; control: number; stageOutputs: number[] }&gt; = [];
    let measurement = initialValue;

    for (let i = 0; i &lt; steps; i++) {
      const control = this.compute(setpoint, measurement);
      measurement = plantFn(control);
      trace.push({ step: i, measurement, control, stageOutputs: [...this.outputs] });
    }

    return trace;
  }

  reset(): void {
    for (const stage of this.stages) {
      stage.controller.reset();
    }
    this.outputs = [];
  }

  getStageNames(): string[] {
    return this.stages.map((s) => s.name);
  }
}

// ─── FeedForwardController ─────────────────────────────────────────────

interface FeedForwardConfig {
  disturbanceGain: number;
  modelInverseGain: number;
  lookaheadSteps: number;
}

class FeedForwardController {
  private config: FeedForwardConfig;
  private disturbanceHistory: number[] = [];
  private feedbackOutput = 0;

  constructor(config: FeedForwardConfig) {
    this.config = config;
  }

  compute(setpoint: number, measurement: number, predictedDisturbance: number | null): number {
    const feedbackError = setpoint - measurement;

    // Feedback component (simple P)
    const feedbackTerm = 0.5 * feedbackError;

    // Feed-forward component: anticipate known disturbances
    let ffTerm = 0;
    if (predictedDisturbance !== null) {
      ffTerm = -this.config.disturbanceGain * predictedDisturbance * this.config.modelInverseGain;
    }

    this.feedbackOutput = feedbackTerm + ffTerm;
    return this.feedbackOutput;
  }

  recordDisturbance(disturbance: number): void {
    this.disturbanceHistory.push(disturbance);
    if (this.disturbanceHistory.length > this.config.lookaheadSteps) {
      this.disturbanceHistory.shift();
    }
  }

  predictNextDisturbance(): number | null {
    if (this.disturbanceHistory.length &lt; 2) return null;
    const last = this.disturbanceHistory[this.disturbanceHistory.length - 1];
    const prev = this.disturbanceHistory[this.disturbanceHistory.length - 2];
    const trend = last - prev;
    return last + trend;
  }

  simulate(
    setpoint: number,
    initialValue: number,
    steps: number,
    disturbanceFn: (step: number) => number
  ): Array&lt;{ step: number; measurement: number; disturbance: number; control: number; ffTerm: number }&gt; {
    const trace: Array&lt;{ step: number; measurement: number; disturbance: number; control: number; ffTerm: number }&gt; = [];
    let measurement = initialValue;

    for (let i = 0; i &lt; steps; i++) {
      const disturbance = disturbanceFn(i);
      this.recordDisturbance(disturbance);
      const predicted = this.predictNextDisturbance();
      const control = this.compute(setpoint, measurement, predicted);
      measurement = measurement + 0.1 * control + 0.05 * disturbance + (Math.random() - 0.5) * 0.1;
      measurement = Math.max(0, measurement);

      const ffOnly = predicted !== null ? -this.config.disturbanceGain * predicted * this.config.modelInverseGain : 0;
      trace.push({ step: i, measurement, disturbance, control, ffTerm: ffOnly });
    }

    return trace;
  }

  reset(): void {
    this.disturbanceHistory = [];
    this.feedbackOutput = 0;
  }
}

// ─── BumpTestAnalyzer (System Identification) ─────────────────────────

interface ProcessModel {
  gain: number;
  timeConstant: number;
  deadTime: number;
  fitPercent: number;
}

class BumpTestAnalyzer {
  identify(stepResponse: number[], stepTime: number, finalValue: number): ProcessModel {
    const n = stepResponse.length;
    const steadyState = stepResponse[n - 1];
    const gain = finalValue > 0 ? steadyState / finalValue : 0;

    const y63 = steadyState * 0.632;
    const y28 = steadyState * 0.283;

    let t63 = -1;
    let t28 = -1;

    for (let i = 0; i &lt; n; i++) {
      if (t28 &lt; 0 && stepResponse[i] &gt;= y28) t28 = i;
      if (t63 &lt; 0 && stepResponse[i] &gt;= y63) t63 = i;
    }

    const timeConstant = t63 > 0 && t28 > 0 ? 1.5 * (t63 - t28) : n / 3;
    const deadTime = t28 > 0 ? Math.max(0, t28 - 0.4 * timeConstant) : 0;

    const modelOutput = this.simulateModel(gain, timeConstant, deadTime, stepResponse.length, finalValue);
    const ssRes = stepResponse.reduce((s, y, i) => s + (y - modelOutput[i]) ** 2, 0);
    const ssTotal = stepResponse.reduce((s, y) => s + (y - stepResponse.reduce((a, b) => a + b, 0) / n) ** 2, 0);
    const fitPercent = ssTotal > 0 ? Math.max(0, 100 * (1 - ssRes / ssTotal)) : 0;

    return { gain, timeConstant: Math.max(0.1, timeConstant), deadTime: Math.max(0, deadTime), fitPercent };
  }

  private simulateModel(
    gain: number, timeConstant: number, deadTime: number, steps: number, stepSize: number
  ): number[] {
    const output: number[] = [];
    let value = 0;
    const alpha = 1 / Math.max(1, timeConstant);
    const deadSamples = Math.round(deadTime);

    for (let i = 0; i &lt; steps; i++) {
      const input = i >= deadSamples ? stepSize : 0;
      value += alpha * (gain * input - value);
      output.push(value);
    }
    return output;
  }

  recommendTuning(model: ProcessModel): { kp: number; ki: number; kd: number } {
    const { gain, timeConstant, deadTime } = model;
    if (gain &lt;= 0) return { kp: 0.5, ki: 0.1, kd: 0 };

    const ratio = deadTime / Math.max(0.01, timeConstant);
    let kp: number, ki: number, kd: number;

    if (ratio &lt; 0.1) {
      kp = 0.6 / gain;
      ki = 0.5 / timeConstant;
      kd = 0;
    } else if (ratio &lt; 0.5) {
      kp = 0.8 / gain;
      ki = 0.3 / timeConstant;
      kd = 0.1 * timeConstant;
    } else {
      kp = 0.4 / gain;
      ki = 0.2 / timeConstant;
      kd = 0;
    }

    return { kp, ki, kd };
  }
}

// ─── DeadbandFilter ────────────────────────────────────────────────────

class DeadbandFilter {
  private readonly threshold: number;
  private lastOutput = 0;
  private lastValidError = 0;
  private suppressedCount = 0;

  constructor(threshold: number) {
    this.threshold = threshold;
  }

  apply(error: number): number {
    const change = Math.abs(error - this.lastValidError);

    if (change &lt; this.threshold) {
      this.suppressedCount++;
      return this.lastOutput;
    }

    this.lastOutput = error;
    this.lastValidError = error;
    this.suppressedCount = 0;
    return error;
  }

  applyWithHysteresis(error: number, hysteresisFactor: number = 1.5): number {
    const effectiveThreshold = this.suppressedCount > 3
      ? this.threshold * hysteresisFactor
      : this.threshold;

    const change = Math.abs(error - this.lastValidError);
    if (change &lt; effectiveThreshold) {
      this.suppressedCount++;
      return this.lastOutput;
    }

    this.lastOutput = error;
    this.lastValidError = error;
    this.suppressedCount = 0;
    return error;
  }

  getSuppressedCount(): number {
    return this.suppressedCount;
  }

  reset(): void {
    this.lastOutput = 0;
    this.lastValidError = 0;
    this.suppressedCount = 0;
  }

  static applyToTrace(
    trace: number[],
    threshold: number,
    hysteresis: boolean = false
  ): { filtered: number[]; suppressed: number } {
    const filter = new DeadbandFilter(threshold);
    const filtered = trace.map((v) => hysteresis ? filter.applyWithHysteresis(v) : filter.apply(v));
    return { filtered, suppressed: filter.getSuppressedCount() };
  }
}

// ─── Demo ──────────────────────────────────────────────────────────────

async function main() {
  console.log("=== Advanced Feedback Tools Demo ===\n");

  // 1. Oscillation Detector
  const detector = new OscillationDetector(8, 1.15);
  const oscillatingErrors = [10, 8, -12, -6, 14, 9, -15, -8, 18, 10, -20, -11];
  oscillatingErrors.forEach((e) => detector.feed(e));
  const result = detector.analyze();
  console.log("Oscillation Detector:");
  console.log(`  Oscillating: ${result.oscillating}`);
  console.log(`  Amplitude: ${result.amplitude.toFixed(1)}`);
  console.log(`  Period: ${result.period?.toFixed(1) ?? "N/A"} samples`);
  console.log(`  Growing amplitude: ${result.growingAmplitude}`);
  console.log(`  Zero crossings: ${result.zeroCrossingCount}`);
  console.log(`  Recommendation: ${result.recommendation}`);

  // 2. Cascade Controller
  const cascade = new CascadeController();
  cascade.addStage("inner-velocity", 2.0, 0.1, -50, 50);
  cascade.addStage("outer-position", 0.8, 0.05, -100, 100);
  const plant = (u: number) => u * 0.05 + (Math.random() - 0.5) * 0.2;
  const cascadeTrace = cascade.simulate(100, 0, plant, 30);
  const lastC = cascadeTrace[cascadeTrace.length - 1];
  console.log(`\nCascade Controller (${cascade.getStageNames().join(" → ")}):`);
  console.log(`  Stages: ${cascade.getStageNames().length}`);
  console.log(`  Final measurement: ${lastC.measurement.toFixed(2)}`);
  console.log(`  Final control: ${lastC.control.toFixed(2)}`);
  console.log(`  Final error: ${(100 - lastC.measurement).toFixed(2)}`);

  // 3. Feed-Forward Controller
  const ff = new FeedForwardController({ disturbanceGain: 0.6, modelInverseGain: 0.8, lookaheadSteps: 3 });
  const ffTrace = ff.simulate(100, 0, 20, (step) => step >= 10 && step &lt; 14 ? 40 : Math.random() * 2);
  const lastFf = ffTrace[ffTrace.length - 1];
  console.log(`\nFeed-Forward Controller (with disturbance at step 10-13):`);
  console.log(`  Final measurement: ${lastFf.measurement.toFixed(2)}`);
  const maxDeviation = Math.max(...ffTrace.map((t) => Math.abs(100 - t.measurement)));
  console.log(`  Max deviation from setpoint: ${maxDeviation.toFixed(2)}`);
  console.log(`  FF term at peak disturbance: ${ffTrace.filter((t) => t.disturbance > 10).map((t) => t.ffTerm.toFixed(2)).join(", ")}`);

  // 4. Bump Test Analyzer
  const bumpAnalyer = new BumpTestAnalyzer();
  const stepResp: number[] = [];
  let v = 0;
  for (let i = 0; i &lt; 40; i++) {
    v += (1.5 * 100 - v) / 8;
    stepResp.push(v + (Math.random() - 0.5) * 2);
  }
  const model = bumpAnalyer.identify(stepResp, 0, 100);
  console.log(`\nBump Test Analyzer (System ID):`);
  console.log(`  Process gain: ${model.gain.toFixed(3)}`);
  console.log(`  Time constant: ${model.timeConstant.toFixed(1)} samples`);
  console.log(`  Dead time: ${model.deadTime.toFixed(1)} samples`);
  console.log(`  Fit: ${model.fitPercent.toFixed(0)}%`);

  const tuning = bumpAnalyer.recommendTuning(model);
  console.log(`  Recommended PID: Kp=${tuning.kp.toFixed(2)} Ki=${tuning.ki.toFixed(3)} Kd=${tuning.kd.toFixed(3)}`);

  // 5. Deadband Filter
  const noisyTrace: number[] = [];
  for (let i = 0; i &lt; 30; i++) {
    const trueVal = 50 * Math.exp(-i * 0.08);
    noisyTrace.push(trueVal + (Math.random() - 0.5) * 3);
  }
  const { filtered, suppressed } = DeadbandFilter.applyToTrace(noisyTrace, 0.5, true);
  console.log(`\nDeadband Filter:`);
  console.log(`  Raw range: [${Math.min(...noisyTrace).toFixed(1)}, ${Math.max(...noisyTrace).toFixed(1)}]`);
  console.log(`  Values suppressed (cumulative): ${suppressed}`);
  const changeCount = noisyTrace.reduce((s, val, i, arr) => s + (i > 0 && val !== arr[i - 1] ? 1 : 0), 0);
  const filteredChangeCount = filtered.reduce((s, val, i, arr) => s + (i > 0 && val !== arr[i - 1] ? 1 : 0), 0);
  console.log(`  Raw value changes: ${changeCount}, Filtered value changes: ${filteredChangeCount}`);
  console.log(`  Dithering reduction: ${changeCount > 0 ? ((1 - filteredChangeCount / changeCount) * 100).toFixed(0) : 0}%`);
}

await main();
```

**Key concepts demonstrated:**
- **OscillationDetector** analyzes error signal zero crossings and amplitude trends to detect sustained or growing oscillations; provides concrete recommendations (reduce gain, apply damping, monitor)
- **CascadeController** chains multiple control stages in series (e.g., inner velocity loop feeding outer position loop), enabling tighter control of complex dynamics than a single controller
- **FeedForwardController** anticipates known disturbances using a model-inverse approach, compensating before the feedback loop can react; includes disturbance prediction via trend extrapolation
- **BumpTestAnalyzer** performs system identification from step response data — estimates process gain, time constant, dead time, and model fit quality; recommends PID tuning parameters based on dead-time-to-time-constant ratio
- **DeadbandFilter** ignores error changes below a configurable threshold, reducing actuator dithering and controller chatter; includes hysteresis mode that widens the band after repeated suppression

---

## Summary

- **Eval-driven loops** are the general-purpose feedback mechanism: generate, score against explicit criteria, adjust parameters, and retry until quality converges.
- **Code review loops** mirror real engineering workflows: AI authors, humans review with actionable line-level comments, AI applies fixes, and the cycle repeats until approval.
- **Test-driven loops** use tests as executable specifications — a passing test suite is the most objective success signal available to an agent.
- **Failure-to-task conversion** ensures that failures produce concrete next steps instead of dead ends. Each failed attempt shrinks the problem space.
- **Sweep loops** scale feedback to entire collections — process items, detect failures, generate fix tasks, and iterate the fixes until resolution or escalation.
- All feedback loops must have explicit termination conditions: score thresholds, max iterations, plateau detection, and escalation paths.

---

## Exercises

### Review Questions

1. What are the four termination conditions for an eval-driven loop? When would you use each one?

2. Why is "actionable" feedback important in a code review loop? Give an example of a non-actionable comment and rewrite it to be actionable.

3. How does a test-driven loop differ from an eval-driven loop in terms of the evaluation signal? What advantage does this provide?

4. What is the failure-to-task conversion rule regarding subtask depth? Why is this rule important?

5. In the sweep loop, what distinguishes a fix task that is re-queued from one that is escalated?

### Application Problems

1. **Weight-aware eval loop.** Modify Example 1 so that when a dimension scores below 0.5, its weight is temporarily doubled for the next iteration. This forces the agent to focus on its weakest area.

2. **Multi-file review.** Extend Example 2 so that the review loop handles multiple files in a single review round. The `ReviewComment` type already has a `file` field — modify `ReviewLoopAgent` to track changes round by round across a `Map<string, string>` of file paths to code contents.

3. **Sweep with dependency ordering.** Modify Example 3 so that tasks can declare dependencies (`dependsOn: string[]`). If task B depends on task A and A fails, B is deferred until A's fix task succeeds. If A's fix also fails, B is escalated without attempting execution.

4. **Adaptive max iterations.** Change the eval loop in Example 1 so that `maxIterations` is not a fixed number. Instead, the agent computes a budget based on the importance score of the input prompt (higher importance = more iterations). Importance is derived from keyword matching (e.g., "production", "security", "critical" each add 2 extra iterations).

### Challenge

**Build a multi-stage feedback pipeline.** Create a class `FeedbackPipeline` that chains all three feedback loop patterns into a single pipeline:

1. **Eval phase:** Run the prompt through an eval-driven loop (Example 1) to produce a first draft.
2. **Code review phase:** Pass the output through a code review loop (Example 2) for human-style review.
3. **Test phase:** Run the reviewed code against a test suite. If tests fail, generate subtasks.
4. **Sweep phase:** Collect all failures from the test phase and run a sweep loop (Example 3) to produce fix tasks.
5. **Escalation:** Any fix task that survives two sweep rounds is escalated.

Implement with simulated versions of each phase (no real LLM calls). The pipeline should accept a `PromptTask` and return a structured `PipelineReport` showing which phase each item passed or failed. Demonstrate with at least 5 prompt tasks covering different failure modes.
