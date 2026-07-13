# Chapter 3: Human-in-the-Loop

> **Previous:** [Agent Loop Architecture](./ch02-agent-loop-architecture.md) | **Next:** [Feedback Loops](./ch04-feedback-loops.md)

## Learning Objectives

By the end of this chapter, you will be able to:

- Design a propose-then-commit architecture where agents propose actions and humans approve
- Implement approval gates keyed to confidence thresholds, cost thresholds, and destructive-op detection
- Build escalation policies including timeout escalation and delegation chains
- Compare batch versus real-time review workflows and choose the right one per use case
- Construct a trust calibration framework that dynamically adjusts autonomy level over time
- Integrate human-in-the-loop (HITL) into any agent loop without blocking throughput
- Diagnose failure modes: approval fatigue, stale context, and inappropriate escalation

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|--------------------|
| Propose-then-Commit | Agent suggests; human confirms | Decouple suggestion from execution |
| Approval Gates | Gate on confidence, cost, destructiveness | Prevent bad actions before they happen |
| Escalation Policies | Timeouts, chains, fallback humans | No proposal hangs forever |
| Batch vs Real-Time | Sync approval for fast ops, batch for cheap ops | Match latency to risk |
| Trust Calibration | Autonomy grows with demonstrated reliability | Start conservative, expand with proof |

---

## Theory

### 1. Propose-then-Commit Architecture

<a href="../../../assets/images/diagrams/loop-engineering/ch03-human-in-the-loop/1-propose-then-commit-architecture-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/loop-engineering/ch03-human-in-the-loop/1-propose-then-commit-architecture-handwritten.svg" alt="Handwritten: 1. Propose-then-Commit Architecture" width="30%">
</a>
<a href="../../../assets/images/diagrams/loop-engineering/ch03-human-in-the-loop/1-propose-then-commit-architecture-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/loop-engineering/ch03-human-in-the-loop/1-propose-then-commit-architecture-diagram.svg" alt="Diagram: 1. Propose-then-Commit Architecture" width="30%">
</a>
<a href="../../../assets/images/diagrams/loop-engineering/ch03-human-in-the-loop/1-propose-then-commit-architecture-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/loop-engineering/ch03-human-in-the-loop/1-propose-then-commit-architecture-sticky.svg" alt="Sticky Note: 1. Propose-then-Commit Architecture" width="30%">
</a>


The propose-then-commit pattern is the foundational HITL building block. Instead of allowing an agent to execute actions autonomously, the agent first **proposes** an action (along with justification and confidence), waits for a **human approval signal**, and only then **commits** the action.

```
 ┌─────────┐     propose     ┌──────────┐    approve    ┌─────────┐
 │  Agent   │ ──────────────>│  Human   │ ────────────> │  Action │
 │          │   (action +    │  Review  │   (or reject) │  Exec.  │
 │          │   rationale)   │  Portal  │               │         │
 └─────────┘                 └──────────┘               └─────────┘
      │                           │
      │      escalate             │ timeout
      └──────────────────────────>┘
                              (escalation chain)
```

**Key invariants:**

- The agent must never execute a proposed action before approval.
- The proposal must include enough context for a human to make an informed decision.
- A rejected proposal must produce a useful signal (why it was rejected) so the agent can adjust.
- A timed-out proposal must escalate, not silently approve.

### 2. Approval Gates

<a href="../../../assets/images/diagrams/loop-engineering/ch03-human-in-the-loop/2-approval-gates-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/loop-engineering/ch03-human-in-the-loop/2-approval-gates-handwritten.svg" alt="Handwritten: 2. Approval Gates" width="30%">
</a>
<a href="../../../assets/images/diagrams/loop-engineering/ch03-human-in-the-loop/2-approval-gates-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/loop-engineering/ch03-human-in-the-loop/2-approval-gates-diagram.svg" alt="Diagram: 2. Approval Gates" width="30%">
</a>
<a href="../../../assets/images/diagrams/loop-engineering/ch03-human-in-the-loop/2-approval-gates-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/loop-engineering/ch03-human-in-the-loop/2-approval-gates-sticky.svg" alt="Sticky Note: 2. Approval Gates" width="30%">
</a>


Approval gates are programmable conditions that determine whether an action needs human review or can proceed autonomously. Common gate types:

**Confidence threshold gate.** The agent attaches a confidence score `c ∈ [0, 1]` to every proposal. If `c ≥ τ_high`, the action auto-approves. If `c ≤ τ_low`, the action is rejected outright. Otherwise, it enters human review.

```
auto-approve zone:       c ≥ 0.85
human review zone:       0.30 < c < 0.85
auto-reject zone:        c ≤ 0.30
```

**Cost threshold gate.** Every action carries an estimated cost — monetary (API calls, compute) or impact (deleting a record, sending an email). Actions above a cost ceiling require human sign-off regardless of confidence.

**Destructive-op detection.** Certain operations are intrinsically high-risk: file deletion, database writes, user notifications, payment execution. A static or learned classifier tags operations and gates them unconditionally.

### 3. Escalation Policies

<a href="../../../assets/images/diagrams/loop-engineering/ch03-human-in-the-loop/3-escalation-policies-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/loop-engineering/ch03-human-in-the-loop/3-escalation-policies-handwritten.svg" alt="Handwritten: 3. Escalation Policies" width="30%">
</a>
<a href="../../../assets/images/diagrams/loop-engineering/ch03-human-in-the-loop/3-escalation-policies-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/loop-engineering/ch03-human-in-the-loop/3-escalation-policies-diagram.svg" alt="Diagram: 3. Escalation Policies" width="30%">
</a>
<a href="../../../assets/images/diagrams/loop-engineering/ch03-human-in-the-loop/3-escalation-policies-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/loop-engineering/ch03-human-in-the-loop/3-escalation-policies-sticky.svg" alt="Sticky Note: 3. Escalation Policies" width="30%">
</a>


Escalation policies define what happens when a proposal is not reviewed in time or is rejected:

| Policy | Behavior | When to Use |
|--------|----------|-------------|
| Timeout escalation | After `T` seconds, escalate to next reviewer | Reviewer is unreachable |
| Delegation chain | Primary → secondary → tertiary reviewer | Multi-tier approval workflow |
| Fallback approval | After all tiers exhausted, auto-approve | Low-risk, time-sensitive ops |
| Fallback reject | After all tiers exhausted, auto-reject | High-risk ops |

Escalation chains should be expressed as a simple ordered list of reviewer identifiers. The agent tries each in sequence with its own timeout.

### 4. Batch vs Real-Time Review

<a href="../../../assets/images/diagrams/loop-engineering/ch03-human-in-the-loop/4-batch-vs-real-time-review-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/loop-engineering/ch03-human-in-the-loop/4-batch-vs-real-time-review-handwritten.svg" alt="Handwritten: 4. Batch vs Real-Time Review" width="30%">
</a>
<a href="../../../assets/images/diagrams/loop-engineering/ch03-human-in-the-loop/4-batch-vs-real-time-review-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/loop-engineering/ch03-human-in-the-loop/4-batch-vs-real-time-review-diagram.svg" alt="Diagram: 4. Batch vs Real-Time Review" width="30%">
</a>
<a href="../../../assets/images/diagrams/loop-engineering/ch03-human-in-the-loop/4-batch-vs-real-time-review-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/loop-engineering/ch03-human-in-the-loop/4-batch-vs-real-time-review-sticky.svg" alt="Sticky Note: 4. Batch vs Real-Time Review" width="30%">
</a>


**Real-time (synchronous) review.** The agent pauses and waits. Latency is human-scale (seconds to minutes). Suitable for: destructive ops, expensive ops, or any action where waiting is acceptable.

**Batch (asynchronous) review.** Proposals collect in a queue; a human reviews at their convenience. The agent may continue with other work, but committed actions are deferred until the batch clears. Suitable for: content generation, bulk edits, low-risk proposals.

Hybrid patterns are common: classify proposals at ingestion time, route urgent ones to real-time and routine ones to batch.

### 5. Trust Calibration Framework

<a href="../../../assets/images/diagrams/loop-engineering/ch03-human-in-the-loop/5-trust-calibration-framework-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/loop-engineering/ch03-human-in-the-loop/5-trust-calibration-framework-handwritten.svg" alt="Handwritten: 5. Trust Calibration Framework" width="30%">
</a>
<a href="../../../assets/images/diagrams/loop-engineering/ch03-human-in-the-loop/5-trust-calibration-framework-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/loop-engineering/ch03-human-in-the-loop/5-trust-calibration-framework-diagram.svg" alt="Diagram: 5. Trust Calibration Framework" width="30%">
</a>
<a href="../../../assets/images/diagrams/loop-engineering/ch03-human-in-the-loop/5-trust-calibration-framework-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/loop-engineering/ch03-human-in-the-loop/5-trust-calibration-framework-sticky.svg" alt="Sticky Note: 5. Trust Calibration Framework" width="30%">
</a>


Trust calibration is the system by which the agent's autonomy level adjusts based on demonstrated reliability. It is a **feedback loop over the HITL loop** — a meta-loop.

```
Session n:  propose → review → execute → outcome (success/failure)
Session n+1: trust_score ← update(trust_score, outcome)
             autonomy_level ← map(trust_score)
```

The trust score is a floating-point value updated after each reviewed action:

```
trust' = trust + α · (outcome - trust)
```

Where `α` is the learning rate and `outcome ∈ {0, 1}` (0 = failure, 1 = success). The autonomy level maps the trust score to a confidence threshold:

| Trust Range | Autonomy Level | Effective τ |
|-------------|---------------|-------------|
| `[0.00, 0.40)` | Novice | `τ = 0.00` (everything reviewed) |
| `[0.40, 0.70)` | Apprentice | `τ = 0.50` |
| `[0.70, 0.90)` | Practitioner | `τ = 0.75` |
| `[0.90, 1.00]` | Expert | `τ = 0.90` |

As trust grows, the auto-approve threshold rises, meaning the agent needs *less* confidence to act autonomously. Counterintuitive but deliberate: a trusted agent has a proven track record so its lower-confidence predictions are still reliable.

---

## Examples

### Example 1: HITLAgent — Propose, Wait, Execute or Escalate

```typescript
// ch03-example1-hitl-agent.ts
// Bun: bun run ch03-example1-hitl-agent.ts

interface Proposal {
  id: string;
  action: string;
  params: Record<string, unknown>;
  confidence: number;
  estimatedCost: number;
  isDestructive: boolean;
  rationale: string;
  createdAt: Date;
}

type ReviewDecision = "approved" | "rejected" | "timeout" | "escalated";

interface ReviewResult {
  proposalId: string;
  decision: ReviewDecision;
  feedback: string;
  reviewedBy: string;
  reviewedAt: Date;
}

interface EscalationPolicy {
  tiers: string[];
  timeoutMs: number;
  fallbackAction: "approve" | "reject";
}

type ApprovalGate = (
  proposal: Proposal,
  context: { trustScore: number }
) => "auto-approve" | "auto-reject" | "review";

function confidenceGate(threshold: number): ApprovalGate {
  return (proposal, { trustScore }) => {
    const effectiveThreshold = threshold * (1 - trustScore * 0.5);
    if (proposal.confidence >= effectiveThreshold) return "auto-approve";
    if (proposal.confidence < 0.2) return "auto-reject";
    return "review";
  };
}

function costGate(maxCost: number): ApprovalGate {
  return (proposal, _ctx) => {
    if (proposal.estimatedCost > maxCost) return "review";
    return "auto-approve";
  };
}

function destructiveOpGate(): ApprovalGate {
  return (proposal, _ctx) => {
    if (proposal.isDestructive) return "review";
    return "auto-approve";
  };
}

class HITLAgent {
  private gates: ApprovalGate[] = [];
  private escalationPolicy: EscalationPolicy;
  private trustScore = 0.5;
  private proposalCount = 0;
  private readonly alpha = 0.1;

  constructor(policy: EscalationPolicy) {
    this.escalationPolicy = policy;
  }

  addGate(gate: ApprovalGate): void {
    this.gates.push(gate);
  }

  private runGates(proposal: Proposal): "auto-approve" | "auto-reject" | "review" {
    for (const gate of this.gates) {
      const result = gate(proposal, { trustScore: this.trustScore });
      if (result !== "auto-approve") return result;
    }
    return "auto-approve";
  }

  private simulateHumanReview(proposal: Proposal): Promise<ReviewResult> {
    return new Promise((resolve) => {
      const delay = 50 + Math.random() * 200;
      setTimeout(() => {
        const autoApprove = proposal.confidence > 0.8 && !proposal.isDestructive;
        resolve({
          proposalId: proposal.id,
          decision: autoApprove ? "approved" : "rejected",
          feedback: autoApprove
            ? "Looks good."
            : `Rejected: confidence too low or destructive op requires manual review.`,
          reviewedBy: "human-simulated",
          reviewedAt: new Date(),
        });
      }, delay);
    });
  }

  private async escalate(proposal: Proposal, reason: string): Promise<ReviewResult> {
    console.log(`  [ESCALATE] ${reason}. Trying tiers: ${this.escalationPolicy.tiers.join(" -> ")}`);
    for (const tier of this.escalationPolicy.tiers) {
      console.log(`  [ESCALATE] Escalated to ${tier}...`);
      await new Promise((r) => setTimeout(r, 30));
      const approved = Math.random() > 0.3;
      if (approved) {
        return {
          proposalId: proposal.id,
          decision: "approved",
          feedback: `Approved by ${tier} after escalation.`,
          reviewedBy: tier,
          reviewedAt: new Date(),
        };
      }
    }
    const fallback = this.escalationPolicy.fallbackAction === "approve";
    return {
      proposalId: proposal.id,
      decision: fallback ? "approved" : "rejected",
      feedback: `All tiers exhausted. Fallback: ${this.escalationPolicy.fallbackAction}.`,
      reviewedBy: "escalation-fallback",
      reviewedAt: new Date(),
    };
  }

  async propose(partial: Omit<Proposal, "id" | "createdAt">): Promise<ReviewResult> {
    const proposal: Proposal = {
      id: `prop-${++this.proposalCount}`,
      createdAt: new Date(),
      ...partial,
    };

    console.log(`\n--- Proposal ${proposal.id} ---`);
    console.log(`  Action: ${proposal.action}`);
    console.log(`  Confidence: ${(proposal.confidence * 100).toFixed(0)}%`);
    console.log(`  Cost: $${proposal.estimatedCost.toFixed(2)}`);
    console.log(`  Destructive: ${proposal.isDestructive}`);

    const gateResult = this.runGates(proposal);
    console.log(`  Gate result: ${gateResult}`);

    if (gateResult === "auto-approve") {
      const result: ReviewResult = {
        proposalId: proposal.id,
        decision: "approved",
        feedback: "Auto-approved by gates.",
        reviewedBy: "system",
        reviewedAt: new Date(),
      };
      this.updateTrust(true);
      return result;
    }

    if (gateResult === "auto-reject") {
      const result: ReviewResult = {
        proposalId: proposal.id,
        decision: "rejected",
        feedback: "Auto-rejected: confidence below minimum threshold.",
        reviewedBy: "system",
        reviewedAt: new Date(),
      };
      this.updateTrust(false);
      return result;
    }

    const reviewPromise = this.simulateHumanReview(proposal);
    const timeout = new Promise<null>((resolve) =>
      setTimeout(() => resolve(null), this.escalationPolicy.timeoutMs)
    );

    const result = await Promise.race([reviewPromise, timeout]);

    if (result === null) {
      const escalated = await this.escalate(proposal, "Human reviewer timed out");
      this.updateTrust(escalated.decision === "approved");
      return escalated;
    }

    this.updateTrust(result.decision === "approved");
    return result;
  }

  private updateTrust(success: boolean): void {
    this.trustScore += this.alpha * (success ? 1 - this.trustScore : 0 - this.trustScore);
    console.log(`  [TRUST] Score: ${(this.trustScore * 100).toFixed(0)}%`);
  }

  getTrustScore(): number {
    return this.trustScore;
  }
}

async function main() {
  const agent = new HITLAgent({
    tiers: ["senior-engineer", "tech-lead", "cto"],
    timeoutMs: 150,
    fallbackAction: "reject",
  });

  agent.addGate(confidenceGate(0.85));
  agent.addGate(costGate(50));
  agent.addGate(destructiveOpGate());

  const actions: Array<Omit<Proposal, "id" | "createdAt">> = [
    {
      action: "deploy-to-production",
      params: { version: "v2.1.0", region: "us-east-1" },
      confidence: 0.92,
      estimatedCost: 0.50,
      isDestructive: false,
      rationale: "Rolling out patch for CVE-2024-1234. All tests green.",
    },
    {
      action: "delete-user-account",
      params: { userId: "u-4512" },
      confidence: 0.65,
      estimatedCost: 0.01,
      isDestructive: true,
      rationale: "User requested account deletion via support ticket #8823.",
    },
    {
      action: "bulk-email-campaign",
      params: { listId: "lst-77", template: "promo-june" },
      confidence: 0.35,
      estimatedCost: 120.00,
      isDestructive: false,
      rationale: "Send promotional email to 50k subscribers.",
    },
  ];

  for (const action of actions) {
    const result = await agent.propose(action);
    if (result.decision === "approved") {
      console.log(`  [EXECUTE] Action committed. Feedback: ${result.feedback}`);
    } else {
      console.log(`  [SKIP] Action not taken. Feedback: ${result.feedback}`);
    }
  }

  console.log(`\nFinal trust score: ${(agent.getTrustScore() * 100).toFixed(0)}%`);
}

await main();
```

### Example 2: BatchReviewQueue — Collect and Process Pending Approvals

```typescript
// ch03-example2-batch-review-queue.ts
// Bun: bun run ch03-example2-batch-review-queue.ts

interface PendingProposal {
  id: string;
  action: string;
  params: Record<string, unknown>;
  confidence: number;
  estimatedCost: number;
  submittedAt: Date;
  rationale: string;
}

interface BatchDecision {
  proposalId: string;
  approved: boolean;
  feedback: string;
}

type BatchReviewer = (proposals: PendingProposal[]) => Promise<BatchDecision[]>;

class BatchReviewQueue {
  private queue: PendingProposal[] = [];
  private isProcessing = false;
  private flushIntervalMs: number;
  private maxBatchSize: number;
  private reviewer: BatchReviewer;
  private timer: ReturnType<typeof setInterval> | null = null;

  constructor(
    reviewer: BatchReviewer,
    options: { flushIntervalMs: number; maxBatchSize: number }
  ) {
    this.reviewer = reviewer;
    this.flushIntervalMs = options.flushIntervalMs;
    this.maxBatchSize = options.maxBatchSize;
  }

  enqueue(proposal: Omit<PendingProposal, "id" | "submittedAt">): string {
    const id = `batch-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
    this.queue.push({ id, submittedAt: new Date(), ...proposal });
    console.log(`[QUEUE] Enqueued ${id}: "${proposal.action}" (queue: ${this.queue.length})`);
    if (this.queue.length >= this.maxBatchSize && !this.isProcessing) {
      setImmediate(() => this.flush());
    }
    return id;
  }

  start(): void {
    if (this.timer) return;
    this.timer = setInterval(() => this.flush(), this.flushIntervalMs);
    console.log(`[QUEUE] Started. Flushing every ${this.flushIntervalMs}ms or at ${this.maxBatchSize} items.`);
  }

  stop(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  async flush(): Promise<BatchDecision[]> {
    if (this.isProcessing || this.queue.length === 0) return [];
    this.isProcessing = true;

    const batch = this.queue.splice(0, this.maxBatchSize);
    console.log(`[BATCH] Flushing ${batch.length} proposals...`);

    const decisions = await this.reviewer(batch);

    for (const decision of decisions) {
      const proposal = batch.find((p) => p.id === decision.proposalId);
      if (proposal) {
        console.log(
          `  ${decision.approved ? "APPROVED" : "REJECTED"} ${proposal.action}: ${decision.feedback}`
        );
      }
    }

    this.isProcessing = false;
    return decisions;
  }

  getQueueLength(): number {
    return this.queue.length;
  }
}

// Simulated batch reviewer — auto-approves high-confidence proposals, flags others
const batchReviewer: BatchReviewer = async (proposals) => {
  await new Promise((r) => setTimeout(r, 100));
  return proposals.map((p) => ({
    proposalId: p.id,
    approved: p.confidence >= 0.7 && p.estimatedCost < 10,
    feedback:
      p.confidence >= 0.7 && p.estimatedCost < 10
        ? "Auto-approved in batch."
        : "Flagged for individual review.",
  }));
};

async function main() {
  const queue = new BatchReviewQueue(batchReviewer, {
    flushIntervalMs: 500,
    maxBatchSize: 3,
  });

  queue.start();

  for (let i = 0; i < 7; i++) {
    queue.enqueue({
      action: `update-config-${i}`,
      params: { key: `feature_${i}`, value: `v${i}` },
      confidence: 0.5 + Math.random() * 0.5,
      estimatedCost: Math.random() * 5,
      rationale: `Rolling out feature flag ${i}.`,
    });
  }

  await new Promise((r) => setTimeout(r, 1200));
  queue.stop();

  console.log(`\nFinal queue length: ${queue.getQueueLength()}`);
}

await main();
```

### Example 3: TrustScalingGate — Learn When to Auto-Approve

```typescript
// ch03-example3-trust-scaling-gate.ts
// Bun: bun run ch03-example3-trust-scaling-gate.ts

interface ActionOutcome {
  actionType: string;
  confidence: number;
  approved: boolean;
  succeeded: boolean;
}

class TrustScalingGate {
  private trustByAction: Map<string, { score: number; count: number }> = new Map();
  private readonly alpha = 0.15;
  private readonly minSamples = 5;

  private getEntry(actionType: string): { score: number; count: number } {
    if (!this.trustByAction.has(actionType)) {
      this.trustByAction.set(actionType, { score: 0.5, count: 0 });
    }
    return this.trustByAction.get(actionType)!;
  }

  recordOutcome(outcome: ActionOutcome): void {
    const entry = this.getEntry(outcome.actionType);
    if (!outcome.approved) return;
    const reward = outcome.succeeded ? 1 : 0;
    entry.score += this.alpha * (reward - entry.score);
    entry.count++;
    console.log(
      `[TRUST] ${outcome.actionType}: score=${(entry.score * 100).toFixed(0)}% (n=${entry.count})`
    );
  }

  getThreshold(actionType: string): number {
    const entry = this.getEntry(actionType);
    if (entry.count < this.minSamples) return 0.0;
    const mapped = 1 - entry.score;
    return Math.max(0.1, Math.min(0.95, mapped));
  }

  needsReview(actionType: string, confidence: number): boolean {
    const threshold = this.getThreshold(actionType);
    const needs = confidence < threshold;
    console.log(
      `  Gate(${actionType}): conf=${(confidence * 100).toFixed(0)}% ` +
        `>= threshold=${(threshold * 100).toFixed(0)}% ? ${!needs}`
    );
    return needs;
  }

  getStats(): Record<string, { score: number; count: number; threshold: number }> {
    const stats: Record<string, { score: number; count: number; threshold: number }> = {};
    for (const [actionType, entry] of this.trustByAction) {
      stats[actionType] = {
        score: entry.score,
        count: entry.count,
        threshold: this.getThreshold(actionType),
      };
    }
    return stats;
  }
}

async function main() {
  const gate = new TrustScalingGate();

  const actions: ActionOutcome[] = [
    { actionType: "format-code", confidence: 0.70, approved: true, succeeded: true },
    { actionType: "format-code", confidence: 0.65, approved: true, succeeded: true },
    { actionType: "format-code", confidence: 0.80, approved: true, succeeded: true },
    { actionType: "format-code", confidence: 0.55, approved: true, succeeded: true },
    { actionType: "format-code", confidence: 0.90, approved: true, succeeded: true },
    { actionType: "format-code", confidence: 0.75, approved: true, succeeded: false },
    { actionType: "format-code", confidence: 0.85, approved: true, succeeded: true },

    { actionType: "delete-file", confidence: 0.95, approved: true, succeeded: true },
    { actionType: "delete-file", confidence: 0.90, approved: true, succeeded: false },
    { actionType: "delete-file", confidence: 0.88, approved: true, succeeded: true },
    { actionType: "delete-file", confidence: 0.92, approved: true, succeeded: false },
    { actionType: "delete-file", confidence: 0.85, approved: true, succeeded: true },

    { actionType: "refactor", confidence: 0.60, approved: true, succeeded: true },
    { actionType: "refactor", confidence: 0.55, approved: true, succeeded: true },
    { actionType: "refactor", confidence: 0.70, approved: true, succeeded: false },
    { actionType: "refactor", confidence: 0.65, approved: true, succeeded: true },
    { actionType: "refactor", confidence: 0.75, approved: true, succeeded: true },
  ];

  for (const action of actions) {
    gate.recordOutcome(action);
  }

  console.log("\n--- Trust Calibration Results ---");
  const testCases = [
    { actionType: "format-code", confidence: 0.72 },
    { actionType: "delete-file", confidence: 0.91 },
    { actionType: "delete-file", confidence: 0.80 },
    { actionType: "refactor", confidence: 0.62 },
    { actionType: "format-code", confidence: 0.45 },
  ];

  for (const tc of testCases) {
    const needs = gate.needsReview(tc.actionType, tc.confidence);
    console.log(`  => ${needs ? "NEEDS REVIEW" : "AUTO-APPROVED"}\n`);
  }

  console.log("\n--- Trust Stats ---");
  console.table(gate.getStats());
}

await main();
```

---

### Extended Implementation: Escalation Chains, Approval Gates, Priority Queue, and Audit Logging

This section builds production HITL infrastructure: an `EscalationChain` with timeout, delegation, and fallback handlers; a `MultiStageApprovalGate` requiring N independent approvals; a `ConfidenceDecayTracker` with time-based decay; a `PriorityQueueHITL` with starvation prevention; an `AuditTrailLogger` for HITL decisions; and a human feedback aggregator with consensus scoring.

```typescript
// ch03-advanced-hitl.ts
// bun run ch03-advanced-hitl.ts

// ─── EscalationChain ───────────────────────────────────────────────────

interface EscalationTier {
  name: string;
  timeoutMs: number;
  canHandle: (proposal: ProposalData) => boolean;
}

interface ProposalData {
  id: string;
  action: string;
  riskScore: number;
  cost: number;
  submittedAt: Date;
}

interface EscalationResult {
  proposalId: string;
  finalDecision: "approved" | "rejected";
  handledBy: string;
  chain: string[];
  totalTimeMs: number;
}

class EscalationChain {
  private tiers: EscalationTier[] = [];
  private fallbackDecision: "approved" | "rejected" = "rejected";
  private delegateMap = new Map<string, string[]>();

  addTier(tier: EscalationTier): void {
    this.tiers.push(tier);
  }

  addDelegate(from: string, to: string[]): void {
    this.delegateMap.set(from, to);
  }

  setFallback(decision: "approved" | "rejected"): void {
    this.fallbackDecision = decision;
  }

  async escalate(proposal: ProposalData): Promise<EscalationResult> {
    const startTime = Date.now();
    const chain: string[] = [];

    for (const tier of this.tiers) {
      chain.push(tier.name);
      console.log(`  [ESCALATION] Trying tier: ${tier.name}`);

      if (!tier.canHandle(proposal)) {
        console.log(`  [ESCALATION] ${tier.name} cannot handle, skipping`);
        continue;
      }

      const handled = await this.tryHandle(tier, proposal);
      if (handled !== null) {
        return {
          proposalId: proposal.id,
          finalDecision: handled,
          handledBy: tier.name,
          chain,
          totalTimeMs: Date.now() - startTime,
        };
      }
    }

    console.log(`  [ESCALATION] All tiers exhausted, fallback=${this.fallbackDecision}`);
    return {
      proposalId: proposal.id,
      finalDecision: this.fallbackDecision,
      handledBy: "fallback",
      chain,
      totalTimeMs: Date.now() - startTime,
    };
  }

  private async tryHandle(tier: EscalationTier, proposal: ProposalData): Promise<"approved" | "rejected" | null> {
    const delegates = this.delegateMap.get(tier.name);
    const candidates = delegates ?? [tier.name];

    for (const delegate of candidates) {
      try {
        const result = await Promise.race([
          this.simulateReview(delegate, proposal),
          new Promise<null>((_, reject) =>
            setTimeout(() => reject(new Error("timeout")), tier.timeoutMs)
          ),
        ]);
        return result;
      } catch {
        console.log(`  [ESCALATION] ${delegate} timed out or unavailable`);
      }
    }

    return null;
  }

  private async simulateReview(reviewer: string, proposal: ProposalData): Promise<"approved" | "rejected"> {
    await new Promise((r) => setTimeout(r, 10 + Math.random() * 30));
    return proposal.riskScore < 0.7 && Math.random() > 0.2 ? "approved" : "rejected";
  }
}

// ─── MultiStageApprovalGate ────────────────────────────────────────────

interface ApprovalRequest {
  id: string;
  description: string;
  riskLevel: "low" | "medium" | "high" | "critical";
  requiredApprovals: number;
  approverPool: string[];
  approvedBy: string[];
  rejectedBy: string[];
  status: "pending" | "approved" | "rejected";
}

class MultiStageApprovalGate {
  private requests = new Map<string, ApprovalRequest>();

  createRequest(description: string, riskLevel: ApprovalRequest["riskLevel"], pool: string[]): ApprovalRequest {
    const requiredApprovals = riskLevel === "critical" ? 3 : riskLevel === "high" ? 2 : 1;
    const request: ApprovalRequest = {
      id: `approval-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      description,
      riskLevel,
      requiredApprovals,
      approverPool: pool,
      approvedBy: [],
      rejectedBy: [],
      status: "pending",
    };
    this.requests.set(request.id, request);
    return request;
  }

  submitApproval(requestId: string, approver: string, decision: "approve" | "reject"): string | null {
    const req = this.requests.get(requestId);
    if (!req || req.status !== "pending") return null;

    if (decision === "approve") {
      if (!req.approvedBy.includes(approver)) req.approvedBy.push(approver);
      if (req.approvedBy.length >= req.requiredApprovals) {
        req.status = "approved";
        return "approved";
      }
    } else {
      if (!req.rejectedBy.includes(approver)) req.rejectedBy.push(approver);
      if (req.rejectedBy.length >= req.requiredApprovals) {
        req.status = "rejected";
        return "rejected";
      }
    }

    return null;
  }

  getStatus(requestId: string): ApprovalRequest | undefined {
    return this.requests.get(requestId);
  }

  requestApprovals(request: ApprovalRequest): { needed: number; remaining: number } {
    const remaining = request.requiredApprovals - request.approvedBy.length;
    return { needed: request.requiredApprovals, remaining: Math.max(0, remaining) };
  }
}

// ─── ConfidenceDecayTracker ────────────────────────────────────────────

class ConfidenceDecayTracker {
  private scores = new Map<string, { score: number; lastActive: Date; count: number }>();
  private readonly decayRatePerDay: number;

  constructor(decayRatePerDay: number = 0.05) {
    this.decayRatePerDay = decayRatePerDay;
  }

  record(actionType: string, succeeded: boolean, alpha: number = 0.15): void {
    const entry = this.scores.get(actionType) ?? { score: 0.5, lastActive: new Date(), count: 0 };
    this.applyDecay(entry);
    const reward = succeeded ? 1 : 0;
    entry.score += alpha * (reward - entry.score);
    entry.lastActive = new Date();
    entry.count++;
    this.scores.set(actionType, entry);
  }

  getConfidence(actionType: string): number {
    const entry = this.scores.get(actionType);
    if (!entry) return 0.5;
    this.applyDecay(entry);
    return entry.score;
  }

  needsReview(actionType: string, proposedConfidence: number, threshold: number = 0.7): boolean {
    const trustScore = this.getConfidence(actionType);
    const effectiveThreshold = threshold * (1 - trustScore * 0.5);
    return proposedConfidence < effectiveThreshold;
  }

  private applyDecay(entry: { score: number; lastActive: Date; count: number }): void {
    const now = new Date();
    const msSinceActive = now.getTime() - entry.lastActive.getTime();
    const daysSinceActive = msSinceActive / (1000 * 60 * 60 * 24);
    if (daysSinceActive > 0) {
      const decay = Math.pow(1 - this.decayRatePerDay, daysSinceActive);
      entry.score *= decay;
    }
  }

  getStats(): Record<string, { score: number; count: number }> {
    const stats: Record<string, { score: number; count: number }> = {};
    for (const [actionType, entry] of this.scores) {
      stats[actionType] = { score: entry.score, count: entry.count };
    }
    return stats;
  }
}

// ─── PriorityQueueHITL with Starvation Prevention ──────────────────────

type PriorityLevel = "critical" | "high" | "medium" | "low";

interface PrioritizedProposal {
  id: string;
  action: string;
  priority: PriorityLevel;
  submittedAt: Date;
  lastAttemptAt: Date | null;
  attemptCount: number;
  riskScore: number;
}

class PriorityQueueHITL {
  private queues: Record<PriorityLevel, PrioritizedProposal[]> = {
    critical: [],
    high: [],
    medium: [],
    low: [],
  };
  private ageBoostMs: number;
  private maxAttempts: number;
  private processedCount = 0;

  constructor(ageBoostMs: number = 30000, maxAttempts: number = 3) {
    this.ageBoostMs = ageBoostMs;
    this.maxAttempts = maxAttempts;
  }

  enqueue(proposal: Omit<PrioritizedProposal, "id" | "submittedAt" | "lastAttemptAt" | "attemptCount">): string {
    const id = `hitl-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
    const entry: PrioritizedProposal = {
      id,
      ...proposal,
      submittedAt: new Date(),
      lastAttemptAt: null,
      attemptCount: 0,
    };
    this.queues[proposal.priority].push(entry);
    console.log(`[PRIORITY] Enqueued ${id} (${proposal.priority}): ${proposal.action} (queue depth: ${this.queues[proposal.priority].length})`);
    return id;
  }

  dequeue(): PrioritizedProposal | null {
    const effectivePriority = this.computeEffectivePriority();
    const queue = this.queues[effectivePriority];
    while (queue.length > 0) {
      const proposal = queue.shift()!;
      if (proposal.attemptCount >= this.maxAttempts) {
        console.log(`  [PRIORITY] ${proposal.id} exceeded max attempts, escalating`);
        this.escalate(proposal);
        continue;
      }
      proposal.lastAttemptAt = new Date();
      proposal.attemptCount++;
      return proposal;
    }
    return null;
  }

  private computeEffectivePriority(): PriorityLevel {
    const now = Date.now();
    const priorities: PriorityLevel[] = ["critical", "high", "medium", "low"];

    for (const level of priorities) {
      for (const item of this.queues[level]) {
        const age = now - item.submittedAt.getTime();
        if (age >= this.ageBoostMs) {
          return level === "critical" ? "critical" : priorities[priorities.indexOf(level) - 1] ?? "critical";
        }
      }
    }

    for (const level of priorities) {
      if (this.queues[level].length > 0) return level;
    }

    return "low";
  }

  private escalate(proposal: PrioritizedProposal): void {
    console.log(`  [PRIORITY] Escalating ${proposal.id} (${proposal.action}) to critical`);
    this.queues.critical.push({ ...proposal, priority: "critical" });
  }

  getDepth(): Record<PriorityLevel, number> {
    return {
      critical: this.queues.critical.length,
      high: this.queues.high.length,
      medium: this.queues.medium.length,
      low: this.queues.low.length,
    };
  }

  isEmpty(): boolean {
    return Object.values(this.queues).every((q) => q.length === 0);
  }
}

// ─── AuditTrailLogger ─────────────────────────────────────────────────

interface AuditEntry {
  timestamp: Date;
  proposalId: string;
  action: string;
  decision: string;
  reviewer: string;
  riskScore: number;
  previousState?: string;
  metadata: Record<string, unknown>;
}

class AuditTrailLogger {
  private entries: AuditEntry[] = [];
  private readonly maxEntries: number;

  constructor(maxEntries: number = 10000) {
    this.maxEntries = maxEntries;
  }

  log(entry: Omit<AuditEntry, "timestamp">): void {
    this.entries.push({ timestamp: new Date(), ...entry });
    if (this.entries.length > this.maxEntries) this.entries.shift();
  }

  query(filters: Partial<AuditEntry>): AuditEntry[] {
    return this.entries.filter((e) => {
      for (const [key, value] of Object.entries(filters)) {
        if ((e as Record<string, unknown>)[key] !== value) return false;
      }
      return true;
    });
  }

  getStats(): { total: number; approved: number; rejected: number; avgRisk: number } {
    const approved = this.entries.filter((e) => e.decision === "approved").length;
    const rejected = this.entries.filter((e) => e.decision === "rejected").length;
    const avgRisk = this.entries.reduce((s, e) => s + e.riskScore, 0) / (this.entries.length || 1);
    return { total: this.entries.length, approved, rejected, avgRisk };
  }

  export(): string {
    return JSON.stringify(this.entries, null, 2);
  }
}

// ─── Human Feedback Aggregator ─────────────────────────────────────────

interface FeedbackVote {
  reviewerId: string;
  score: number;
  comment: string;
}

interface AggregatedFeedback {
  meanScore: number;
  medianScore: number;
  stdDev: number;
  consensusLevel: "strong" | "moderate" | "weak" | "none";
  voteCount: number;
  comments: string[];
}

class FeedbackAggregator {
  aggregate(votes: FeedbackVote[]): AggregatedFeedback {
    const scores = votes.map((v) => v.score);
    const n = scores.length;
    if (n === 0) return { meanScore: 0, medianScore: 0, stdDev: 0, consensusLevel: "none", voteCount: 0, comments: [] };

    const meanScore = scores.reduce((a, b) => a + b, 0) / n;
    const sorted = [...scores].sort((a, b) => a - b);
    const medianScore = n % 2 === 0 ? (sorted[n / 2 - 1] + sorted[n / 2]) / 2 : sorted[Math.floor(n / 2)];
    const variance = scores.reduce((sum, s) => sum + (s - meanScore) ** 2, 0) / n;
    const stdDev = Math.sqrt(variance);

    let consensusLevel: AggregatedFeedback["consensusLevel"] = "none";
    if (n >= 3 && stdDev < 0.3) consensusLevel = "strong";
    else if (n >= 2 && stdDev < 0.6) consensusLevel = "moderate";
    else if (n >= 1) consensusLevel = "weak";

    return {
      meanScore,
      medianScore,
      stdDev,
      consensusLevel,
      voteCount: n,
      comments: votes.map((v) => v.comment),
    };
  }

  static weightedScore(votes: FeedbackVote[], weights: Record<string, number>): number {
    let totalWeight = 0;
    let weightedSum = 0;
    for (const vote of votes) {
      const w = weights[vote.reviewerId] ?? 1;
      weightedSum += vote.score * w;
      totalWeight += w;
    }
    return totalWeight > 0 ? weightedSum / totalWeight : 0;
  }
}

// ─── Demo ──────────────────────────────────────────────────────────────

async function main() {
  console.log("=== Extended HITL Demo ===\n");

  // 1. Escalation Chain
  const chain = new EscalationChain();
  chain.addTier({ name: "junior-reviewer", timeoutMs: 20, canHandle: (p) => p.riskScore < 0.5 });
  chain.addTier({ name: "senior-reviewer", timeoutMs: 30, canHandle: () => true });
  chain.addTier({ name: "manager", timeoutMs: 50, canHandle: () => true });
  chain.addDelegate("junior-reviewer", ["junior-a", "junior-b"]);
  chain.addDelegate("senior-reviewer", ["senior-a"]);
  chain.setFallback("rejected");

  const escResult = await chain.escalate({
    id: "p1", action: "delete-database", riskScore: 0.9, cost: 1000, submittedAt: new Date(),
  });
  console.log(`Escalation: ${escResult.finalDecision} by ${escResult.handledBy} via [${escResult.chain.join(" -> ")}]`);

  // 2. MultiStageApprovalGate
  const gate = new MultiStageApprovalGate();
  const req = gate.createRequest("Deploy to production", "critical", ["alice", "bob", "carol", "dave"]);
  console.log(`\nMultiStage: ${req.id} needs ${req.requiredApprovals} approvals`);
  gate.submitApproval(req.id, "alice", "approve");
  gate.submitApproval(req.id, "bob", "approve");
  console.log(`  After 2 approvals: ${gate.submitApproval(req.id, "carol", "approve")}`);

  // 3. Confidence Decay
  const decay = new ConfidenceDecayTracker(0.05);
  for (let i = 0; i < 10; i++) {
    decay.record("code-gen", true);
  }
  console.log(`\nConfidence Decay: code-gen score=${decay.getConfidence("code-gen").toFixed(3)}`);

  // 4. Priority Queue
  const pq = new PriorityQueueHITL(500, 2);
  pq.enqueue({ action: "fix-typo", priority: "low", riskScore: 0.1 });
  pq.enqueue({ action: "patch-security", priority: "critical", riskScore: 0.9 });
  pq.enqueue({ action: "refactor-module", priority: "medium", riskScore: 0.3 });
  console.log(`\nPriority Queue depths:`, pq.getDepth());
  const item = pq.dequeue();
  console.log(`  Dequeued: ${item?.id} (${item?.priority}): ${item?.action}`);

  // 5. Audit Trail
  const audit = new AuditTrailLogger();
  audit.log({ proposalId: "p1", action: "deploy", decision: "approved", reviewer: "alice", riskScore: 0.3, metadata: {} });
  audit.log({ proposalId: "p2", action: "delete", decision: "rejected", reviewer: "bob", riskScore: 0.9, metadata: {} });
  console.log(`\nAudit Trail:`, audit.getStats());

  // 6. Feedback Aggregator
  const aggregator = new FeedbackAggregator();
  const votes: FeedbackVote[] = [
    { reviewerId: "alice", score: 0.85, comment: "Looks good" },
    { reviewerId: "bob", score: 0.90, comment: "Minor nits" },
    { reviewerId: "carol", score: 0.70, comment: "Check edge cases" },
  ];
  const agg = aggregator.aggregate(votes);
  console.log(`\nFeedback Aggregator: mean=${agg.meanScore.toFixed(2)} median=${agg.medianScore.toFixed(2)} consensus=${agg.consensusLevel}`);
}

await main();
```

**Key concepts demonstrated:**
- **EscalationChain** models multi-tier human escalation with per-tier timeouts, delegation pools, and a configurable fallback decision
- **MultiStageApprovalGate** requires N independent approvals before an action commits, with separate approve/reject counters
- **ConfidenceDecayTracker** applies time-based decay to trust scores — inactivity reduces autonomy over time
- **PriorityQueueHITL** implements starvation prevention via age-boosting: old proposals get promoted to higher-priority queues
- **AuditTrailLogger** provides immutable, queryable HITL decision records with summary statistics
- **FeedbackAggregator** computes mean, median, standard deviation, and consensus level from multiple reviewer votes

---

### HITL Production Tooling: Workload Balancing, Stale Proposals, Performance Tracking, and Simulated Reviewers

This section adds production-grade HITL infrastructure: a `ReviewerWorkloadBalancer` that distributes proposals across available humans, a `StaleProposalCleaner` that expires unassigned proposals after TTL, a `HumanPerformanceTracker` measuring reviewer accuracy/speed/fatigue, a `SimulatedReviewerPool` for testing, and a `ProposalLifecycleLogger` for full lifecycle audit.

```typescript
// ch03-hitl-tooling.ts
// bun run ch03-hitl-tooling.ts

/*
```mermaid
graph TD
    subgraph "HITL Escalation Flow with Timeouts & Fallbacks"
        A[Proposal Submitted] --> B{Run Gates}
        B -->|Auto-Approve| C[Execute]
        B -->|Review Needed| D[Primary Reviewer]
        D -->|Timeout| E[Secondary Reviewer]
        D -->|Reject| F[Rejected]
        D -->|Approve| C
        E -->|Timeout| F
        E -->|Reject| F
        E -->|Approve| C
        F --> G{Reviewer Available?}
        G -->|Yes| H[Delegate Chain]
        H --> D
        G -->|No| I[Fallback Action]
        I --> J{Policy}
        J -->|Approve| C
        J -->|Reject| K[Escalation Log]
        C --> L[Outcome Recorded]
    end
    
    style A fill:#3498db,color:#fff
    style C fill:#2ecc71,color:#fff
    style F fill:#f39c12,color:#fff
    style K fill:#e74c3c,color:#fff
*/
*/

// ─── ReviewerWorkloadBalancer ──────────────────────────────────────────

interface Reviewer {
  id: string;
  name: string;
  maxWorkload: number;
  currentLoad: number;
  specialties: string[];
  averageReviewTimeMs: number;
  isAvailable: boolean;
}

interface WorkloadAssignment {
  proposalId: string;
  reviewerId: string;
  estimatedDurationMs: number;
  assignedAt: Date;
}

class ReviewerWorkloadBalancer {
  private reviewers: Reviewer[] = [];
  private assignments: WorkloadAssignment[] = [];

  registerReviewer(reviewer: Omit&lt;Reviewer, "currentLoad" | "isAvailable"&gt;): void {
    this.reviewers.push({ ...reviewer, currentLoad: 0, isAvailable: true });
  }

  assign(proposalId: string, category: string, estimatedComplexity: number): Reviewer | null {
    const available = this.reviewers.filter(
      (r) => r.isAvailable && r.currentLoad &lt; r.maxWorkload
    );

    if (available.length === 0) return null;

    const scored = available.map((r) => {
      const specialtyBonus = r.specialties.includes(category) ? 0.2 : 0;
      const loadFactor = 1 - r.currentLoad / r.maxWorkload;
      const speedFactor = Math.max(0.3, 1 - r.averageReviewTimeMs / 10000);
      const score = specialtyBonus + loadFactor * 0.5 + speedFactor * 0.3;
      return { reviewer: r, score };
    });

    scored.sort((a, b) => b.score - a.score);
    const best = scored[0].reviewer;
    best.currentLoad++;
    if (best.currentLoad >= best.maxWorkload) best.isAvailable = false;

    this.assignments.push({
      proposalId,
      reviewerId: best.id,
      estimatedDurationMs: best.averageReviewTimeMs * estimatedComplexity,
      assignedAt: new Date(),
    });

    return best;
  }

  completeReview(reviewerId: string): void {
    const reviewer = this.reviewers.find((r) => r.id === reviewerId);
    if (reviewer) {
      reviewer.currentLoad = Math.max(0, reviewer.currentLoad - 1);
      reviewer.isAvailable = reviewer.currentLoad &lt; reviewer.maxWorkload;
    }
  }

  getWorkloadSnapshot(): Array&lt;{ id: string; load: number; maxLoad: number; available: boolean }&gt; {
    return this.reviewers.map((r) => ({
      id: r.id,
      load: r.currentLoad,
      maxLoad: r.maxWorkload,
      available: r.isAvailable,
    }));
  }

  getAverageUtilization(): number {
    if (this.reviewers.length === 0) return 0;
    const totalLoad = this.reviewers.reduce((s, r) => s + r.currentLoad, 0);
    const totalCapacity = this.reviewers.reduce((s, r) => s + r.maxWorkload, 0);
    return totalCapacity > 0 ? totalLoad / totalCapacity : 0;
  }
}

// ─── StaleProposalCleaner ──────────────────────────────────────────────

interface StaleProposal {
  id: string;
  action: string;
  status: "pending" | "assigned" | "in-review";
  submittedAt: Date;
  assignedAt: Date | null;
  ttlMs: number;
}

class StaleProposalCleaner {
  private proposals: Map&lt;string, StaleProposal&gt; = new Map();
  private expiredCount = 0;
  private cleanInterval: ReturnType&lt;typeof setInterval&gt; | null = null;

  track(proposal: StaleProposal): void {
    this.proposals.set(proposal.id, proposal);
  }

  updateStatus(id: string, status: StaleProposal["status"]): void {
    const p = this.proposals.get(id);
    if (p) {
      p.status = status;
      if (status === "assigned" && !p.assignedAt) p.assignedAt = new Date();
    }
  }

  private computeRemainingMs(proposal: StaleProposal): number {
    const start = proposal.assignedAt ?? proposal.submittedAt;
    return proposal.ttlMs - (Date.now() - start.getTime());
  }

  getExpired(): StaleProposal[] {
    const expired: StaleProposal[] = [];
    for (const [id, proposal] of this.proposals) {
      if (proposal.status === "in-review") continue;
      if (this.computeRemainingMs(proposal) &lt;= 0) {
        expired.push(proposal);
        this.proposals.delete(id);
        this.expiredCount++;
      }
    }
    return expired;
  }

  getExpiringSoon(thresholdMs: number): StaleProposal[] {
    return [...this.proposals.values()].filter((p) => {
      const remaining = this.computeRemainingMs(p);
      return remaining > 0 && remaining &lt;= thresholdMs;
    });
  }

  startAutoClean(intervalMs: number = 5000, onExpired?: (proposals: StaleProposal[]) => void): void {
    if (this.cleanInterval) return;
    this.cleanInterval = setInterval(() => {
      const expired = this.getExpired();
      if (expired.length > 0) {
        console.log(`[CLEANER] Expired ${expired.length} stale proposals`);
        onExpired?.(expired);
      }
    }, intervalMs);
  }

  stopAutoClean(): void {
    if (this.cleanInterval) {
      clearInterval(this.cleanInterval);
      this.cleanInterval = null;
    }
  }

  getStats(): { tracked: number; expired: number } {
    return { tracked: this.proposals.size, expired: this.expiredCount };
  }
}

// ─── HumanPerformanceTracker ──────────────────────────────────────────

interface ReviewEvent {
  proposalId: string;
  reviewerId: string;
  decision: "approved" | "rejected" | "escalated";
  timeToDecisionMs: number;
  outcomeCorrect: boolean;
  fatigueLevel: number;
  timestamp: Date;
}

interface ReviewerStats {
  reviewerId: string;
  totalReviews: number;
  accuracy: number;
  averageTimeMs: number;
  rejectionRate: number;
  fatigueLevel: number;
  streak: number;
  efficiencyScore: number;
}

class HumanPerformanceTracker {
  private events: ReviewEvent[] = [];
  private readonly fatigueDecayPerReview = 0.05;
  private readonly fatigueRecoveryPerMinute = 0.02;

  recordReview(event: Omit&lt;ReviewEvent, "timestamp" | "fatigueLevel"&gt;): void {
    const recentEvents = this.events.filter((e) => e.reviewerId === event.reviewerId).slice(-10);
    const fatigueLevel = Math.min(1, recentEvents.reduce((s, e) => s + this.fatigueDecayPerReview, 0));

    this.events.push({ ...event, fatigueLevel, timestamp: new Date() });
  }

  getStats(reviewerId: string): ReviewerStats | null {
    const reviewerEvents = this.events.filter((e) => e.reviewerId === reviewerId);
    if (reviewerEvents.length === 0) return null;

    const totalReviews = reviewerEvents.length;
    const correctOutcomes = reviewerEvents.filter((e) => e.outcomeCorrect).length;
    const rejected = reviewerEvents.filter((e) => e.decision === "rejected").length;
    const avgTime = reviewerEvents.reduce((s, e) => s + e.timeToDecisionMs, 0) / totalReviews;

    let streak = 0;
    for (let i = reviewerEvents.length - 1; i >= 0; i--) {
      if (reviewerEvents[i].outcomeCorrect) streak++;
      else break;
    }

    const accuracy = totalReviews > 0 ? correctOutcomes / totalReviews : 0;
    const latest = reviewerEvents[reviewerEvents.length - 1];

    const efficiencyScore = accuracy * (1 / Math.max(1, avgTime / 1000)) * (1 - latest.fatigueLevel);

    return {
      reviewerId,
      totalReviews,
      accuracy,
      averageTimeMs: avgTime,
      rejectionRate: totalReviews > 0 ? rejected / totalReviews : 0,
      fatigueLevel: latest.fatigueLevel,
      streak,
      efficiencyScore,
    };
  }

  getRankedReviewers(): ReviewerStats[] {
    const ids = [...new Set(this.events.map((e) => e.reviewerId))];
    return ids
      .map((id) => this.getStats(id)!)
      .filter((s) => s !== null)
      .sort((a, b) => b.efficiencyScore - a.efficiencyScore);
  }

  applyTimeDecay(minutesPassed: number): void {
    for (const event of this.events) {
      event.fatigueLevel = Math.max(0, event.fatigueLevel - this.fatigueRecoveryPerMinute * minutesPassed);
    }
  }

  exportCsv(): string {
    const header = "reviewerId,proposalId,decision,timeMs,correct,fatigue,timestamp";
    const rows = this.events.map((e) =>
      `${e.reviewerId},${e.proposalId},${e.decision},${e.timeToDecisionMs.toFixed(0)},${e.outcomeCorrect},${e.fatigueLevel.toFixed(2)},${e.timestamp.toISOString()}`
    );
    return [header, ...rows].join("\n");
  }
}

// ─── SimulatedReviewerPool ─────────────────────────────────────────────

type SimulatedDecision = "approve" | "reject" | "escalate";

interface SimulatedReviewerConfig {
  id: string;
  name: string;
  accuracy: number;
  speedMs: [number, number];
  fatigueThreshold: number;
}

class SimulatedReviewerPool {
  private reviewers: SimulatedReviewerConfig[] = [];
  private reviewCount: Map&lt;string, number&gt; = new Map();
  private fatigue: Map&lt;string, number&gt; = new Map();

  addReviewer(config: SimulatedReviewerConfig): void {
    this.reviewers.push(config);
    this.reviewCount.set(config.id, 0);
    this.fatigue.set(config.id, 0);
  }

  getRandomReviewer(): SimulatedReviewerConfig {
    return this.reviewers[Math.floor(Math.random() * this.reviewers.length)];
  }

  async simulateReview(
    reviewerId: string,
    proposalRisk: number
  ): Promise&lt;{ decision: SimulatedDecision; timeMs: number; feedback: string }&gt; {
    const reviewer = this.reviewers.find((r) => r.id === reviewerId);
    if (!reviewer) throw new Error(`Unknown reviewer: ${reviewerId}`);

    const [minSpeed, maxSpeed] = reviewer.speedMs;
    const timeMs = minSpeed + Math.random() * (maxSpeed - minSpeed);
    const currentFatigue = this.fatigue.get(reviewerId) ?? 0;
    const count = this.reviewCount.get(reviewerId) ?? 0;

    await new Promise((r) => setTimeout(r, Math.min(timeMs, 50)));

    const effectiveAccuracy = reviewer.accuracy * (1 - currentFatigue * 0.5);
    const rand = Math.random();

    let decision: SimulatedDecision;
    let feedback: string;

    if (rand &lt; effectiveAccuracy) {
      if (proposalRisk > 0.7) {
        decision = "escalate";
        feedback = `Risk too high (${(proposalRisk * 100).toFixed(0)}%). Escalating.`;
      } else {
        decision = "approve";
        feedback = "Looks good. Approved.";
      }
    } else if (rand &lt; effectiveAccuracy + (1 - effectiveAccuracy) * 0.6) {
      decision = "reject";
      feedback = proposalRisk > 0.5
        ? "Rejected: concerns about implementation approach."
        : "Rejected: needs more detail.";
    } else {
      decision = currentFatigue > reviewer.fatigueThreshold ? "escalate" : "approve";
      feedback = currentFatigue > reviewer.fatigueThreshold
        ? "Fatigue threshold exceeded. Escalating."
        : "Approved with minor suggestions.";
    }

    this.reviewCount.set(reviewerId, count + 1);
    this.fatigue.set(reviewerId, currentFatigue + 0.05);

    return { decision, timeMs, feedback };
  }

  resetFatigue(): void {
    for (const key of this.fatigue.keys()) {
      this.fatigue.set(key, 0);
    }
  }

  getFatigueLevels(): Record&lt;string, number&gt; {
    const levels: Record&lt;string, number&gt; = {};
    for (const [id, level] of this.fatigue) {
      levels[id] = level;
    }
    return levels;
  }

  getReviewerCount(): number {
    return this.reviewers.length;
  }
}

// ─── ProposalLifecycleLogger ───────────────────────────────────────────

interface LifecycleEvent {
  timestamp: Date;
  proposalId: string;
  eventType: "created" | "gated" | "assigned" | "reviewed" | "escalated" | "approved" | "rejected" | "executed" | "expired";
  actor: string;
  detail: string;
  durationMs?: number;
}

class ProposalLifecycleLogger {
  private events: LifecycleEvent[] = [];

  log(event: Omit&lt;LifecycleEvent, "timestamp"&gt;): void {
    this.events.push({ ...event, timestamp: new Date() });
  }

  getTimeline(proposalId: string): LifecycleEvent[] {
    return this.events
      .filter((e) => e.proposalId === proposalId)
      .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
  }

  getTimeInStage(proposalId: string): Array&lt;{ stage: string; durationMs: number }&gt; {
    const timeline = this.getTimeline(proposalId);
    const stages: Array&lt;{ stage: string; durationMs: number }&gt; = [];
    for (let i = 1; i &lt; timeline.length; i++) {
      const duration = timeline[i].timestamp.getTime() - timeline[i - 1].timestamp.getTime();
      stages.push({ stage: `${timeline[i - 1].eventType} → ${timeline[i].eventType}`, durationMs: duration });
    }
    return stages;
  }

  getStats(): { totalProposals: number; avgTimeToDecision: number; approvalRate: number } {
    const proposalIds = [...new Set(this.events.map((e) => e.proposalId))];
    const approved = this.events.filter((e) => e.eventType === "approved").length;
    const rejected = this.events.filter((e) => e.eventType === "rejected").length;

    let totalDecisionTime = 0;
    let decisionCount = 0;
    for (const id of proposalIds) {
      const timeline = this.getTimeline(id);
      const created = timeline.find((e) => e.eventType === "created");
      const decided = timeline.find((e) => e.eventType === "approved" || e.eventType === "rejected" || e.eventType === "expired");
      if (created && decided) {
        totalDecisionTime += decided.timestamp.getTime() - created.timestamp.getTime();
        decisionCount++;
      }
    }

    const totalDecisions = approved + rejected;
    return {
      totalProposals: proposalIds.length,
      avgTimeToDecision: decisionCount > 0 ? totalDecisionTime / decisionCount : 0,
      approvalRate: totalDecisions > 0 ? approved / totalDecisions : 0,
    };
  }

  exportJson(): string {
    return JSON.stringify(this.events, null, 2);
  }
}

// ─── Demo ──────────────────────────────────────────────────────────────

async function main() {
  console.log("=== HITL Production Tooling Demo ===\n");

  // 1. Reviewer Workload Balancer
  const balancer = new ReviewerWorkloadBalancer();
  balancer.registerReviewer({ id: "alice", name: "Alice", maxWorkload: 3, specialties: ["security", "backend"], averageReviewTimeMs: 2000 });
  balancer.registerReviewer({ id: "bob", name: "Bob", maxWorkload: 5, specialties: ["frontend", "ux"], averageReviewTimeMs: 3000 });
  balancer.registerReviewer({ id: "carol", name: "Carol", maxWorkload: 2, specialties: ["infrastructure", "security"], averageReviewTimeMs: 1500 });

  for (let i = 0; i &lt; 6; i++) {
    const assigned = balancer.assign(`prop-${i}`, i % 2 === 0 ? "security" : "frontend", 1);
    console.log(`Workload: prop-${i} → ${assigned ? assigned.name : "NO AVAILABLE REVIEWER"}`);
  }
  balancer.completeReview("alice");
  const assigned2 = balancer.assign("prop-6", "security", 1);
  console.log(`  prop-6 (after Alice freed) → ${assigned2 ? assigned2.name : "NONE"}`);
  console.log(`  Avg utilization: ${(balancer.getAverageUtilization() * 100).toFixed(0)}%`);

  // 2. Stale Proposal Cleaner
  const cleaner = new StaleProposalCleaner();
  cleaner.track({ id: "sp-1", action: "deploy", status: "pending", submittedAt: new Date(Date.now() - 5000), assignedAt: null, ttlMs: 2000 });
  cleaner.track({ id: "sp-2", action: "rollback", status: "assigned", submittedAt: new Date(Date.now() - 3000), assignedAt: new Date(Date.now() - 2000), ttlMs: 4000 });
  const expired = cleaner.getExpired();
  console.log(`\nStale Cleaner: ${expired.length} expired proposals`);
  cleaner.getExpiringSoon(1000).forEach((p) => console.log(`  Expiring soon: ${p.id} (${p.action})`));

  // 3. Human Performance Tracker
  const perfTracker = new HumanPerformanceTracker();
  for (let i = 0; i &lt; 8; i++) {
    perfTracker.recordReview({
      proposalId: `perf-${i}`,
      reviewerId: "alice",
      decision: i &lt; 6 ? "approved" : "rejected",
      timeToDecisionMs: 1500 + Math.random() * 2000,
      outcomeCorrect: i !== 5,
    });
  }
  const aliceStats = perfTracker.getStats("alice");
  console.log(`\nPerformance Tracker (Alice):`);
  console.log(`  Accuracy: ${(aliceStats!.accuracy * 100).toFixed(0)}%`);
  console.log(`  Avg time: ${aliceStats!.averageTimeMs.toFixed(0)}ms`);
  console.log(`  Fatigue: ${(aliceStats!.fatigueLevel * 100).toFixed(0)}%`);
  console.log(`  Streak: ${aliceStats!.streak}`);
  console.log(`  Efficiency score: ${aliceStats!.efficiencyScore.toFixed(3)}`);

  // 4. Simulated Reviewer Pool
  const pool = new SimulatedReviewerPool();
  pool.addReviewer({ id: "r1", name: "Fast Alice", accuracy: 0.85, speedMs: [100, 300], fatigueThreshold: 0.6 });
  pool.addReviewer({ id: "r2", name: "Careful Bob", accuracy: 0.95, speedMs: [400, 800], fatigueThreshold: 0.4 });
  pool.addReviewer({ id: "r3", name: "Quick Carol", accuracy: 0.70, speedMs: [50, 150], fatigueThreshold: 0.8 });

  console.log(`\nSimulated Reviewer Pool (${pool.getReviewerCount()} reviewers):`);
  for (let i = 0; i &lt; 5; i++) {
    const reviewer = pool.getRandomReviewer();
    const { decision, timeMs } = await pool.simulateReview(reviewer.id, 0.3 + Math.random() * 0.6);
    console.log(`  ${reviewer.name}: ${decision} (${timeMs.toFixed(0)}ms)`);
  }
  console.log(`  Fatigue levels:`, pool.getFatigueLevels());

  // 5. Proposal Lifecycle Logger
  const logger = new ProposalLifecycleLogger();
  logger.log({ proposalId: "pl-1", eventType: "created", actor: "agent", detail: "Proposal created" });
  logger.log({ proposalId: "pl-1", eventType: "gated", actor: "system", detail: "Confidence=0.72 → review needed" });
  logger.log({ proposalId: "pl-1", eventType: "assigned", actor: "alice", detail: "Assigned to Alice" });
  logger.log({ proposalId: "pl-1", eventType: "reviewed", actor: "alice", detail: "Reviewed and approved" });
  logger.log({ proposalId: "pl-1", eventType: "executed", actor: "system", detail: "Action committed" });

  const timeline = logger.getTimeline("pl-1");
  console.log(`\nLifecycle Logger: ${timeline.length} events for pl-1`);
  timeline.forEach((e) => console.log(`  ${e.eventType}: ${e.detail} (${e.actor})`));
  const stats = logger.getStats();
  console.log(`  Total proposals: ${stats.totalProposals}`);
  console.log(`  Approval rate: ${(stats.approvalRate * 100).toFixed(0)}%`);
}

await main();
```

**Key concepts demonstrated:**
- **ReviewerWorkloadBalancer** scores reviewers by specialty match, current load, and speed to make optimal assignment decisions; tracks utilization across the pool
- **StaleProposalCleaner** tracks proposal TTLs, detects expired items, and supports automatic periodic cleanup with a configurable callback; also surfaces items expiring soon
- **HumanPerformanceTracker** measures accuracy, average decision time, fatigue level (cumulative per-session), streak length, and computes a composite efficiency score for reviewer ranking
- **SimulatedReviewerPool** generates configurable reviewers with distinct accuracy, speed distributions, and fatigue thresholds; useful for testing HITL systems without real humans
- **ProposalLifecycleLogger** records every state transition with timestamps, computes time-in-stage breakdowns per proposal, and aggregates approval rate and average time-to-decision statistics

---

## Summary

- **Propose-then-commit** is the atomic HITL pattern: separate suggestion from execution with a human gate between them.
- **Approval gates** (confidence, cost, destructive-op detection) automate the triage decisions so humans only see what matters.
- **Escalation policies** prevent deadlock: timeouts, delegation chains, and fallback actions ensure every proposal terminates.
- **Batch review** trades latency for throughput; real-time review trades throughput for responsiveness. Choose based on risk and urgency.
- **Trust calibration** closes the meta-loop: the agent's autonomy expands as its demonstrated reliability increases. Start conservative; expand with proof.
- All three patterns compose naturally — a batch queue can feed into a trust-scaling gate, which feeds into a HITL agent.

---

## Exercises

### Review Questions

1. What is the fundamental invariant of the propose-then-commit pattern? Why is it important?

2. Compare confidence-based gates and cost-based gates. In what scenarios would you use one over the other? How would you combine them?

3. Describe the difference between timeout escalation and delegation chain escalation. Can they be combined? If so, how?

4. What is approval fatigue and how does trust calibration help mitigate it?

5. In the batch review pattern, what happens to proposals that are enqueued while a batch is currently being processed?

### Application Problems

1. **Multi-stage approval.** Extend Example 1 so that certain high-cost proposals require *two* independent human approvals before execution. Modify the `ReviewResult` type and the escalation policy accordingly.

2. **Confidence decay.** Modify the trust calibration in Example 3 so that the trust score decays by 5% per day of inactivity. Add a `lastActive` timestamp to each action type entry and apply decay before every read.

3. **Priority queue.** Modify Example 2 to support priority levels (low, medium, high, critical). High-priority proposals are flushed immediately (bypassing the batch window) while low-priority proposals wait for the normal flush interval.

4. **Cost-aware batching.** Enhance the batch reviewer in Example 2 so that if the cumulative estimated cost of a batch exceeds $100, the batch is split and only the first $100 worth of proposals is submitted, with the remainder held for the next flush.

### Challenge

**Build a production HITL orchestrator.** Design a system that combines all three examples into a single orchestrator with these requirements:

- Proposals enter via an `enqueue()` method
- Each proposal is tagged with an action type, confidence, estimated cost, and priority
- A pipeline of gates runs synchronously: confidence gate → cost gate → destructive-op gate → trust-scaling gate
- If all gates pass, the proposal is executed immediately
- If any gate flags it, the proposal enters the batch review queue
- The batch queue flushes based on either max batch size (5) or max wait time (30s simulated)
- A reviewed proposal feeds its outcome back into the trust-scaling gate
- Escalation fires if no reviewer picks up a proposal within 60s (simulated)

Implement as a single class `HITLOrchestrator`. The output should be a complete run that demonstrates all paths: auto-approve, batch-reviewed-and-approved, batch-reviewed-and-rejected, and escalation.
