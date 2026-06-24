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

Escalation policies define what happens when a proposal is not reviewed in time or is rejected:

| Policy | Behavior | When to Use |
|--------|----------|-------------|
| Timeout escalation | After `T` seconds, escalate to next reviewer | Reviewer is unreachable |
| Delegation chain | Primary → secondary → tertiary reviewer | Multi-tier approval workflow |
| Fallback approval | After all tiers exhausted, auto-approve | Low-risk, time-sensitive ops |
| Fallback reject | After all tiers exhausted, auto-reject | High-risk ops |

Escalation chains should be expressed as a simple ordered list of reviewer identifiers. The agent tries each in sequence with its own timeout.

### 4. Batch vs Real-Time Review

**Real-time (synchronous) review.** The agent pauses and waits. Latency is human-scale (seconds to minutes). Suitable for: destructive ops, expensive ops, or any action where waiting is acceptable.

**Batch (asynchronous) review.** Proposals collect in a queue; a human reviews at their convenience. The agent may continue with other work, but committed actions are deferred until the batch clears. Suitable for: content generation, bulk edits, low-risk proposals.

Hybrid patterns are common: classify proposals at ingestion time, route urgent ones to real-time and routine ones to batch.

### 5. Trust Calibration Framework

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
