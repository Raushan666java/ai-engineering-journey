---
id: 10-architecture
slug: /cloud-computing/10-architecture
title: "Chapter 10: Cloud Architecture Design Patterns"
sidebar_label: "Chapter 10: Cloud Architecture Design Patterns"
sidebar_position: 10
---
# Chapter 10: Cloud Architecture Design Patterns

> **Previous:** [Chapter 9: Containerization](./09-containerization.md)

## Learning Objectives

After completing this chapter, students will be able to:

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../assets/images/lessons/cloud-computing/10-architecture/handwritten-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/cloud-computing/10-architecture/handwritten-notes.png" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/cloud-computing/10-architecture/sticky-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/cloud-computing/10-architecture/sticky-notes.png" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/cloud-computing/10-architecture/visual-explanation.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/cloud-computing/10-architecture/visual-explanation.png" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->


1. Design cloud architectures using the AWS Well-Architected Framework pillars.
2. Apply the six Rs of migration strategies for moving workloads to the cloud.
3. Implement disaster recovery strategies across multiple regions.
4. Design for fault tolerance and high availability at every layer.
5. Apply microservices decomposition patterns for monolithic applications.
6. Implement cost optimization strategies across compute, storage, and networking.
7. Design for operational excellence through observability and automation.
8. Apply security-by-design principles to cloud architecture decision-making.

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|--------------------|
| Well-Architected Framework | 6 pillars of good cloud design | Use as architecture review checklist |
| Migration Strategies | 6 Rs: Rehost, Replatform, Refactor, etc. | Choose strategy per workload |
| Disaster Recovery | Backup/Restore, Pilot Light, Warm Standby, Multi-Site | RTO/RPO drive the strategy |
| Fault Tolerance | Eliminate single points of failure | Design for failure, not success |
| Microservices | Decompose monoliths into bounded contexts | Start with domain boundaries |
| Cost Optimization | Right-sizing, reserved instances, spot instances | Continuously review and optimize |
| Observability | Metrics, logs, traces | Three pillars of observability |
| Security by Design | Shift left security | Threat model before building |

## Chapter Roadmap

\\\mermaid
flowchart LR
    A[Architecture Design] --> B[Well-Architected Framework]
    A --> C[Migration Strategies]
    A --> D[Disaster Recovery]
    A --> E[Fault Tolerance + HA]
    A --> F[Microservices Design]
    B --> G[Operational Excellence]
    B --> H[Security]
    B --> I[Reliability]
    B --> J[Performance Efficiency]
    B --> K[Cost Optimization]
    B --> L[Sustainability]
\\\

## Theory

### 10.1 AWS Well-Architected Framework


The Well-Architected Framework provides a consistent approach to evaluating and improving cloud architectures.

\\\mermaid
graph TB
    subgraph "AWS Well-Architected Framework"
        OE[Operational Excellence]
        SE[Security]
        RE[Reliability]
        PE[Performance Efficiency]
        CO[Cost Optimization]
        SU[Sustainability]
        
        OE --> OE1["Runbooks, automation, learn from failure"]
        SE --> SE1["IAM, encryption, network security, traceability"]
        RE --> RE1["HA, DR, backup, auto-scaling, change management"]
        PE --> PE1["Right-size, serverless, caching, CDN"]
        CO --> CO1["Pay-for-use, spot, reserved, lifecycle policies"]
        SU --> SU1["Reduce energy, optimize utilization, region selection"]
    end
\\\

| Pillar | Key Question | Design Principles |
|--------|--------------|-------------------|
| Operational Excellence | How do you operate and monitor? | Automate, document, learn from failure |
| Security | How do you protect data and systems? | Least privilege, encrypt everything, trace all actions |
| Reliability | How do you prevent and recover from failures? | Auto-scaling, HA, DR testing, back up data |
| Performance Efficiency | How do you use resources efficiently? | Serverless, caching, right-sizing, CDN |
| Cost Optimization | How do you avoid unnecessary cost? | Spot instances, reserved capacity, lifecycle policies |
| Sustainability | How do you minimize environmental impact? | Efficient hardware, region selection, reduce data transfer |

### 10.2 Migration Strategies (The 6 Rs)


| Strategy | Description | Effort | Benefit | Example |
|----------|-------------|--------|---------|---------|
| Rehost (Lift & Shift) | Move as-is to cloud | Low | Quick migration, minimal risk | Move EC2 from on-prem to cloud |
| Replatform (Lift, Tinker & Shift) | Move with minor cloud optimizations | Medium | Moderate benefit with low effort | RDS instead of self-managed DB |
| Refactor / Re-architect | Redesign for cloud-native | High | Maximum benefit, long-term | Monolith to microservices |
| Repurchase | Replace with SaaS solution | Low | Eliminates custom software | CRM to Salesforce |
| Retire | Decommission unused apps | None | Immediate cost savings | Decommission legacy portal |
| Retain | Keep on-premises | None | No change | Compliance-bound systems |

\\\mermaid
graph TB
    subgraph "Migration Decision Tree"
        START[Workload to Migrate] --> Q1[Business value of cloud native?]
        
        Q1 -- "High" --> Q2[Technical complexity?]
        Q1 -- "Low" --> Q3[Need cloud benefits quickly?]
        
        Q2 -- "Low" --> REFACTOR[Refactor / Re-architect]
        Q2 -- "High" --> REPLATFORM[Replatform]
        
        Q3 -- "Yes" --> REHOST[Rehost / Lift & Shift]
        Q3 -- "No" --> RETAIN[Retain on-premises]
        
        REFACTOR --> RESULT1["Max long-term benefit<br/>Highest effort"]
        REPLATFORM --> RESULT2["Good balance of effort/benefit"]
        REHOST --> RESULT3["Fastest migration<br/>Least cloud-native benefit"]
        RETAIN --> RESULT4["No migration<br/>No cloud benefit"]
    end
\\\

\\\	ypescript
type MigrationStrategy = "rehost" | "replatform" | "refactor" | "repurchase" | "retire" | "retain";

interface WorkloadAssessment {
  name: string;
  cloudNativeValue: number;
  technicalComplexity: number;
  needSpeed: number;
  complianceRequired: boolean;
  hasSaaSAlternative: boolean;
}

function recommendStrategy(assessment: WorkloadAssessment): MigrationStrategy {
  if (assessment.complianceRequired && assessment.cloudNativeValue &lt; 5) {
    return "retain";
  }

  if (assessment.hasSaaSAlternative) {
    return "repurchase";
  }

  if (assessment.cloudNativeValue >= 8 && assessment.technicalComplexity &lt;= 4) {
    return "refactor";
  }

  if (assessment.cloudNativeValue >= 5) {
    return "replatform";
  }

  if (assessment.needSpeed >= 7) {
    return "rehost";
  }

  return "retain";
}

const app = {
  name: "legacy-portal",
  cloudNativeValue: 6,
  technicalComplexity: 7,
  needSpeed: 8,
  complianceRequired: false,
  hasSaaSAlternative: false,
};

console.log("Recommended strategy:", recommendStrategy(app));
\\\

### 10.3 Disaster Recovery Strategies


**RTO and RPO:**

- **Recovery Time Objective (RTO):** Maximum acceptable downtime. How fast must you recover?
- **Recovery Point Objective (RPO):** Maximum acceptable data loss. How much data can you lose?

\\\mermaid
graph TB
    subgraph "DR Strategies (Cost vs Speed)"
        B1[Backup & Restore<br/>RTO: hours, RPO: 24h<br/>Cost: Low]
        B2[Pilot Light<br/>RTO: ~10 min, RPO: few min<br/>Cost: Medium]
        B3[Warm Standby<br/>RTO: ~5 min, RPO: seconds<br/>Cost: High]
        B4[Multi-Site Active/Active<br/>RTO: &lt;1 min, RPO: near-zero<br/&gt;Cost: Very High]
    end
    
    B1 --> B2 --> B3 --> B4
\\\

| Strategy | RTO | RPO | Cost | Description |
|----------|-----|-----|------|-------------|
| Backup & Restore | Hours | 24 hours | Low | Periodic backups to S3/Glacier |
| Pilot Light | ~10 min | Minutes | Medium | Core services running in DR region |
| Warm Standby | ~5 min | Seconds | High | Scaled-down prod running in DR |
| Multi-Site Active/Active | <1 min | Near-zero | Very High | Full prod in two regions |

**DR Architecture (Pilot Light):**

\\\mermaid
graph TB
    subgraph "Primary Region - us-east-1"
        PROD[Full Production]
        DB1[RDS Primary]
    end
    
    subgraph "DR Region - us-west-2"
        CORE[Core Services Running]
        DB2[RDS Replica - Standby]
        ASG[Auto Scaling - Min 0]
    end
    
    PROD --> REP[Replication]
    REP --> CORE
    REP --> ASG
    
    ROUTE53[Route 53 - Failover Routing] --> PROD
    ROUTE53 -.-> CORE
\\\

### 10.4 Fault Tolerance and High Availability


**Design Principles:**

- **Eliminate Single Points of Failure:** Every component should have redundancy.
- **Design for Failure:** Assume every component will fail eventually.
- **Implement Graceful Degradation:** When a component fails, the system should continue reduced functionality rather than crash.
- **Use Loose Coupling:** Asynchronous communication (queues, events) between components.

**Availability Numbers:**

| Uptime % | Downtime/Year | Example |
|----------|---------------|---------|
| 99% (Two 9s) | 3.65 days | Development environments |
| 99.9% (Three 9s) | 8.76 hours | Internal tools |
| 99.99% (Four 9s) | 52.56 minutes | Production apps |
| 99.999% (Five 9s) | 5.26 minutes | Critical financial systems |
| 99.9999% (Six 9s) | 31.5 seconds | Telecom emergency services |

\\\	ypescript
function calculateCompositeAvailability(components: number[], isParallel: boolean): number {
  if (isParallel) {
    return 1 - components.reduce((prod, comp) => prod * (1 - comp), 1);
  }
  return components.reduce((prod, comp) => prod * comp, 1);
}

function availabilityPercent(decimal: number): string {
  return (decimal * 100).toFixed(4) + "%";
}

const serialComponents = [0.9999, 0.9999, 0.999];
const parallelAZs = [0.9999, 0.9999, 0.9999];

console.log("Single AZ (serial):", availabilityPercent(calculateCompositeAvailability(serialComponents, false)));
console.log("Three AZ (parallel):", availabilityPercent(calculateCompositeAvailability(parallelAZs, true)));
\\\

### 10.5 Microservices Architecture


**Monolith vs Microservices:**

| Aspect | Monolith | Microservices |
|--------|----------|---------------|
| Deployment | Single unit | Independent per service |
| Scaling | Scale entire app | Scale per service |
| Team Structure | Full-stack teams | Per-service teams |
| Data | Single database | Database per service |
| Communication | In-process calls | HTTP/gRPC + events |
| Development Speed | Slows as codebase grows | Fast parallel development |
| Complexity | Lower initial | Higher initial (distributed systems) |

**Microservices Decomposition:**

\\\mermaid
graph TB
    subgraph "Monolith"
        MONO[E-Commerce App]
        MONO --> A[User Management]
        MONO --> B[Product Catalog]
        MONO --> C[Order Processing]
        MONO --> D[Payment]
        MONO --> E[Inventory]
        MONO --> F[Shipping]
    end
    
    subgraph "Microservices"
        US[User Service]
        PC[Product Catalog]
        OR[Order Service]
        PY[Payment Service]
        IN[Inventory Service]
        SH[Shipping Service]
        
        US --> DB1[(User DB)]
        PC --> DB2[(Product DB)]
        OR --> DB3[(Order DB)]
        PY --> DB4[(Payment DB)]
    end
    
    OR --> US
    OR --> PY
    OR --> IN
    IN --> SH
\\\

### 10.6 Cost Optimization


**Compute Cost Optimization:**

| Strategy | Savings | Trade-off |
|----------|---------|-----------|
| Reserved Instances | 30-72% vs on-demand | 1-3 year commitment |
| Savings Plans | 30-66% vs on-demand | Flexible across services |
| Spot Instances | 60-90% vs on-demand | Can be interrupted |
| Right-sizing | 20-50% | Requires monitoring and analysis |
| Auto-scaling | Varies | Must set min/max appropriately |
| Serverless | Pay per invocation | Cold starts, 15 min limit |

**Storage Cost Optimization:**

- Lifecycle policies to transition to cheaper tiers.
- Delete unused EBS volumes and old snapshots.
- S3 Intelligent-Tiering for unpredictable access patterns.
- S3 Requester Pays for shared datasets.

\\\	ypescript
interface ComputeOption {
  name: string;
  hourlyRate: number;
  commitment: string;
  savingsVsOnDemand: number;
  interruptionRisk: "none" | "low" | "high";
}

function recommendComputeStrategy(
  workload: string,
  isProduction: boolean,
  predictable: boolean,
  faultTolerant: boolean
): ComputeOption[] {
  const options: ComputeOption[] = [];

  if (predictable && isProduction) {
    options.push({ name: "Reserved Instance", hourlyRate: 0.10, commitment: "1 year", savingsVsOnDemand: 0.40, interruptionRisk: "none" });
    options.push({ name: "Savings Plan", hourlyRate: 0.12, commitment: "1 year", savingsVsOnDemand: 0.30, interruptionRisk: "none" });
  }

  if (faultTolerant && !isProduction) {
    options.push({ name: "Spot Instance", hourlyRate: 0.03, commitment: "none", savingsVsOnDemand: 0.80, interruptionRisk: "high" });
  }

  if (!predictable) {
    options.push({ name: "On-Demand + Auto-Scaling", hourlyRate: 0.17, commitment: "none", savingsVsOnDemand: 0.0, interruptionRisk: "none" });
  }

  return options;
}

const webServer = recommendComputeStrategy("web-server", true, true, false);
console.log("Web server options:", webServer.map((o) => o.name + " @ $" + o.hourlyRate + "/hr").join(", "));
\\\

### 10.7 Observability


The three pillars of observability:

| Pillar | Purpose | AWS Service | Example |
|--------|---------|-------------|---------|
| Metrics | Numerical measurements over time | CloudWatch, Prometheus | CPU, latency, error rate |
| Logs | Textual records of events | CloudWatch Logs, ELK Stack | Application logs, audit trails |
| Traces | End-to-end request flow | X-Ray, OpenTelemetry | Request path through microservices |

\\\mermaid
sequenceDiagram
    participant Client as Client
    participant ALB as ALB
    participant Auth as Auth Service
    participant Order as Order Service
    participant Payment as Payment Service
    participant DB as DynamoDB
    
    Note over ALB,DB: Trace ID: 1-abc123-xyz
    
    Client->>ALB: POST /orders
    ALB->>Auth: Validate token
    Auth-->>ALB: Valid
    ALB->>Order: Create order
    Order->>Payment: Process payment
    Payment->>DB: Write transaction
    DB-->>Payment: Success
    Payment-->>Order: Receipt
    Order-->>ALB: Order created
    ALB-->>Client: 201 Created
    
    Note over ALB,DB: CloudWatch: all spans + logs + metrics
\\\

## Examples

### Example 10.1: Well-Architected Review Scorecard

\\\	ypescript
interface PillarScore {
  pillar: string;
  score: number; // 0-10
  risks: string[];
  recommendations: string[];
}

interface WARReview {
  workloadName: string;
  date: string;
  pillars: PillarScore[];
}

function generateReviewActions(review: WARReview): string[] {
  const actions: string[] = [];
  for (const pillar of review.pillars) {
    if (pillar.score &lt; 5) {
      actions.push("CRITICAL: " + pillar.pillar + " pillar score " + pillar.score);
      actions.push("  Risks: " + pillar.risks.join(", "));
      actions.push("  Fix: " + pillar.recommendations.join("; "));
    }
  }
  return actions;
}

const review: WARReview = {
  workloadName: "ecommerce-prod",
  date: "2025-06-01",
  pillars: [
    { pillar: "Security", score: 4, risks: ["No encryption at rest for RDS"], recommendations: ["Enable RDS encryption"] },
    { pillar: "Reliability", score: 8, risks: [], recommendations: [] },
    { pillar: "Cost", score: 6, risks: ["Unused reserved instances"], recommendations: ["Audit unused reservations"] },
    { pillar: "Performance", score: 9, risks: [], recommendations: [] },
  ],
};

console.log(generateReviewActions(review).join("\n"));
\\\

> **One-Sentence Takeaway:** Cloud architecture design is the art of balancing the six Well-Architected pillars ? operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability ? across every design decision.

> **Pro Tip:** Run a Well-Architected Review quarterly. Fix low-scoring pillars incrementally. The worst architecture pattern is "set and forget" ? cloud architectures need continuous refinement as services and workloads evolve.

> **Warning:** Multi-region active-active architectures are expensive and complex. Most workloads do not need them. Start with Backup & Restore DR, level up to Pilot Light, and only go active-active when your business genuinely cannot tolerate minutes of downtime.

## Concept Comparison Table

| Concept | Definition | Key Distinction | Use Case |
|---------|-----------|-----------------|----------|
| Well-Architected | 6-pillar framework for cloud design | Continuous improvement process | Architecture reviews |
| 6 Rs | Migration strategy spectrum | Speed vs. benefit trade-off | Workload migration |
| DR Strategies | Backup ? Pilot Light ? Warm ? Multi-Site | RTO/RPO drive the choice | Business continuity |
| Fault Tolerance | Design for component failure | Eliminate SPOFs at every layer | All production systems |
| Microservices | Bounded context decomposition | Independent deployment and scaling | Large applications |
| Observability | Metrics + Logs + Traces | Three data types for full visibility | Monitoring and debugging |
| RTO/RPO | Recovery time vs. data loss targets | Business-driven recovery goals | Disaster recovery planning |

## Quick Reference

| Category | Key Concepts | Notes |
|----------|-------------|-------|
| **Well-Architected** | 6 pillars, review every quarter | Framework, not a checklist |
| **Migration** | Rehost, Replatform, Refactor, Repurchase, Retire, Retain | Mix strategies per workload |
| **DR** | Backup/Restore, Pilot Light, Warm Standby, Multi-Site | Match RTO/RPO to business need |
| **HA** | Multi-AZ, Multi-Region, auto-scaling, health checks | Eliminate single points of failure |
| **Microservices** | Bounded contexts, API gateways, event-driven | Start with domain decomposition |
| **Cost** | Reserved, Spot, Savings Plans, right-sizing | Continuous optimization |

## Cross-Application Matrix

| Technique | Cloud Architecture | DevOps | Security | Enterprise |
|-----------|-------------------|--------|----------|------------|
| Well-Architected Reviews | Architecture governance | Pipeline reviews | Security posture | Compliance audits |
| 6 Rs Migration | Workload migration plan | Environment migration | Migration security | Business case analysis |
| DR Testing | Business continuity | Automated failover tests | DR security validation | Compliance (BCP) |
| Observability | System visibility | Incident detection | Anomaly detection | SLA monitoring |
| Cost Optimization | Resource governance | Pipeline cost tracking | Cost anomaly alerts | FinOps programs |

## Chapter Quiz

1. Which Well-Architected pillar focuses on using cloud resources efficiently?
   - A) Operational Excellence
   - B) Security
   - C) Performance Efficiency
   - D) Sustainability

<details>
<summary>Answer&lt;/summary&gt;
**C) Performance Efficiency.** Performance Efficiency focuses on using computing resources efficiently through right-sizing, serverless, caching, and CDN. Sustainability focuses on environmental impact, not resource efficiency.
</details>

2. Which migration strategy involves moving an application to the cloud with minimal changes?
   - A) Refactor
   - B) Rehost (Lift & Shift)
   - C) Replatform
   - D) Repurchase

<details>
<summary>Answer&lt;/summary&gt;
**B) Rehost (Lift & Shift).** Rehost moves applications as-is to the cloud with minimal changes. It's the fastest strategy with the lowest effort but provides the least cloud-native benefit.
</details>

3. What is the difference between RTO and RPO?
   - A) RTO is data loss tolerance; RPO is downtime tolerance
   - B) RTO is downtime tolerance; RPO is data loss tolerance
   - C) RTO and RPO are the same metric
   - D) RTO applies to compute; RPO applies to storage

<details>
<summary>Answer&lt;/summary&gt;
**B) RTO is downtime tolerance; RPO is data loss tolerance.** RTO (Recovery Time Objective) is the maximum acceptable downtime. RPO (Recovery Point Objective) is the maximum acceptable data loss measured in time.
</details>

4. Which DR strategy provides the fastest recovery time?
   - A) Backup & Restore
   - B) Pilot Light
   - C) Warm Standby
   - D) Multi-Site Active/Active

<details>
<summary>Answer&lt;/summary&gt;
**D) Multi-Site Active/Active.** Active/Active runs full production in two regions simultaneously, providing sub-minute RTO and near-zero RPO. It is also the most expensive strategy.
</details>

5. What is a key characteristic of microservices architecture?
   - A) Shared database across all services
   - B) Each service has its own database
   - C) Single deployment unit
   - D) All services must use the same programming language

<details>
<summary>Answer&lt;/summary&gt;
**B) Each service has its own database.** Microservices follow the "database per service" pattern to ensure loose coupling. Sharing a database between services creates tight coupling and defeats the purpose of microservices.
</details>

### TypeScript: TCO Calculator

```typescript
interface CostInputs {
  onPremCost: number;
  rehostCost: number;
  refactorCost: number;
  migrationYear: number;
  years: number;
  annualGrowth: number;
}

class TcoCalculator {
  compute(inputs: CostInputs): { rehost: number[]; refactor: number[]; onPrem: number[] } {
    const onPrem: number[] = [];
    const rehost: number[] = [];
    const refactor: number[] = [];
    let workload = 1;
    for (let y = 0; y < inputs.years; y++) {
      onPrem.push(inputs.onPremCost * workload);
      if (y < inputs.migrationYear) {
        rehost.push(inputs.onPremCost * workload);
        refactor.push(inputs.onPremCost * workload);
      } else {
        rehost.push(inputs.rehostCost * workload);
        refactor.push(inputs.refactorCost * workload);
      }
      workload *= 1 + inputs.annualGrowth;
    }
    return { onPrem, rehost, refactor };
  }

  roi(inputs: CostInputs): { rehostVsOnPrem: number; refactorVsOnPrem: number } {
    const { onPrem, rehost, refactor } = this.compute(inputs);
    const onPremTotal = onPrem.reduce((a, b) => a + b, 0);
    return {
      rehostVsOnPrem: ((onPremTotal - rehost.reduce((a, b) => a + b, 0)) / onPremTotal) * 100,
      refactorVsOnPrem: ((onPremTotal - refactor.reduce((a, b) => a + b, 0)) / onPremTotal) * 100,
    };
  }
}
```

### TypeScript: Well-Architected Framework Scorer

```typescript
interface PillarScore {
  pillar: string;
  score: number;
  maxScore: number;
  findings: { question: string; answer: boolean; weight: number }[];
  riskLevel: "low" | "medium" | "high";
}

class WellArchitectedScorer {
  private pillars: PillarScore[] = [];

  constructor() {
    this.pillars = [
      { pillar: "Operational Excellence", score: 0, maxScore: 0, findings: [], riskLevel: "low" },
      { pillar: "Security", score: 0, maxScore: 0, findings: [], riskLevel: "low" },
      { pillar: "Reliability", score: 0, maxScore: 0, findings: [], riskLevel: "low" },
      { pillar: "Performance Efficiency", score: 0, maxScore: 0, findings: [], riskLevel: "low" },
      { pillar: "Cost Optimization", score: 0, maxScore: 0, findings: [], riskLevel: "low" },
      { pillar: "Sustainability", score: 0, maxScore: 0, findings: [], riskLevel: "low" },
    ];
  }

  addFinding(pillarName: string, question: string, answer: boolean, weight: number): void {
    const pillar = this.pillars.find((p) => p.pillar === pillarName);
    if (!pillar) return;
    pillar.findings.push({ question, answer, weight });
    pillar.maxScore += weight;
    if (answer) pillar.score += weight;
  }

  private calculateRiskLevel(percentage: number): "low" | "medium" | "high" {
    if (percentage >= 80) return "low";
    if (percentage >= 50) return "medium";
    return "high";
  }

  evaluate(): { pillars: PillarScore[]; overallScore: number; overallRisk: "low" | "medium" | "high"; recommendations: string[] } {
    const recommendations: string[] = [];

    for (const pillar of this.pillars) {
      const pct = pillar.maxScore > 0 ? (pillar.score / pillar.maxScore) * 100 : 0;
      pillar.riskLevel = this.calculateRiskLevel(pct);

      if (pct < 80) {
        const gaps = pillar.findings.filter((f) => !f.answer).map((f) => f.question);
        recommendations.push(`${pillar.pillar} (${Math.round(pct)}%): ${gaps.slice(0, 2).join("; ")}`);
      }
    }

    const totalScore = this.pillars.reduce((s, p) => s + p.score, 0);
    const totalMax = this.pillars.reduce((s, p) => s + p.maxScore, 0);
    const overallScore = totalMax > 0 ? Math.round((totalScore / totalMax) * 100) : 0;
    const overallRisk = this.calculateRiskLevel(overallScore);

    return { pillars: this.pillars, overallScore, overallRisk, recommendations };
  }
}

const reviewer = new WellArchitectedScorer();
reviewer.addFinding("Operational Excellence", "Are runbooks documented and tested?", true, 20);
reviewer.addFinding("Operational Excellence", "Is infrastructure deployed via CI/CD?", true, 25);
reviewer.addFinding("Operational Excellence", "Are there automated rollback procedures?", false, 15);
reviewer.addFinding("Security", "Is encryption enabled at rest?", true, 25);
reviewer.addFinding("Security", "Are IAM roles scoped to least privilege?", false, 25);
reviewer.addFinding("Reliability", "Is the application deployed across multiple AZs?", true, 30);
reviewer.addFinding("Reliability", "Are there automated failover procedures?", true, 25);
reviewer.addFinding("Cost Optimization", "Are unused resources identified and removed?", false, 20);
reviewer.addFinding("Cost Optimization", "Are reserved instances used for baseline capacity?", false, 15);

const result = reviewer.evaluate();
console.log("Overall Well-Architected score:", result.overallScore, "/ 100 (risk:", result.overallRisk + ")");
result.recommendations.forEach((r) => console.log("  -", r));
```

### TypeScript: HA/DR Cost Comparator

```typescript
interface DRStrategy {
  name: string;
  setupCost: number;
  monthlyCost: number;
  rto: string;
  rpo: string;
  complexity: "low" | "medium" | "high";
  description: string;
}

class DRCostComparator {
  private strategies: DRStrategy[] = [
    { name: "Backup & Restore", setupCost: 1000, monthlyCost: 500, rto: "24h", rpo: "24h", complexity: "low", description: "Daily backups to S3 Glacier" },
    { name: "Pilot Light", setupCost: 5000, monthlyCost: 2000, rto: "2h", rpo: "1h", complexity: "medium", description: "Core services running in DR region" },
    { name: "Warm Standby", setupCost: 15000, monthlyCost: 8000, rto: "15min", rpo: "5min", complexity: "medium", description: "Scaled-down prod in DR region" },
    { name: "Multi-Site Active/Active", setupCost: 50000, monthlyCost: 25000, rto: "<1min", rpo: "near-zero", complexity: "high", description: "Full prod in two regions" },
  ];

  compare(requirements: { maxRTO: string; maxRPO: string; budget: number }): DRStrategy[] {
    const parseTime = (t: string): number => {
      if (t.endsWith("h")) return parseInt(t) * 60;
      if (t.endsWith("min")) return parseInt(t);
      if (t.includes("<")) return 0;
      return 99999;
    };

    const rtoReq = parseTime(requirements.maxRTO);
    const qualifying = this.strategies
      .filter((s) => parseTime(s.rto) <= rtoReq && s.monthlyCost <= requirements.budget)
      .sort((a, b) => parseTime(a.rto) - parseTime(b.rto));

    return qualifying;
  }

  tcoOverYears(strategyName: string, years: number): { name: string; year1: number; year3: number; year5: number } {
    const s = this.strategies.find((s) => s.name === strategyName)!;
    return {
      name: s.name,
      year1: s.setupCost + s.monthlyCost * 12,
      year3: s.setupCost + s.monthlyCost * 36,
      year5: s.setupCost + s.monthlyCost * 60,
    };
  }
}

const dr = new DRCostComparator();
const viable = dr.compare({ maxRTO: "2h", maxRPO: "1h", budget: 10000 });
console.log("Viable DR strategies:", viable.map((s) => s.name).join(", "));
console.log("5-year TCO:", JSON.stringify(dr.tcoOverYears("Pilot Light", 5), null, 2));
```

### TypeScript: HA Score Calculator & Migration Planner

```typescript
interface ComponentScore { name: string; tier: "web" | "app" | "data"; multiAZ: boolean; autoScaling: boolean; healthChecks: boolean; backupConfigured: boolean; }

class HAScoreCalculator {
  calculate(components: ComponentScore[]): { overall: number; breakdown: { component: string; score: number; }[] } {
    const breakdown = components.map(c => {
      let score = 0;
      if (c.multiAZ) score += 30;
      if (c.autoScaling) score += 25;
      if (c.healthChecks) score += 20;
      if (c.backupConfigured) score += 25;
      if (c.tier === "data") score = Math.min(score, 90); // data tier can't be 100%
      return { component: c.name, score: Math.min(100, score) };
    });
    const overall = Math.round(breakdown.reduce((a, b) => a + b.score, 0) / breakdown.length);
    return { overall, breakdown };
  }

  recommendForRTO(rtoMinutes: number): string {
    if (rtoMinutes <= 1) return "Multi-region Active/Active";
    if (rtoMinutes <= 15) return "Warm Standby / Pilot Light";
    if (rtoMinutes <= 60) return "Backup & Restore with automated recovery";
    return "Backup & Restore";
  }
}

class MigrationPlanner {
  plan(apps: { name: string; complexity: "low" | "medium" | "high"; dependencyCount: number }[]): { phase: string; apps: string[]; estimatedWeeks: number }[] {
    const sorted = [...apps].sort((a, b) => a.complexity === "low" ? -1 : a.complexity === "medium" ? 0 : 1);
    const phases = [
      { phase: "Quick Wins (Rehost)", apps: sorted.filter(a => a.complexity === "low").map(a => a.name), weeks: 2 },
      { phase: "Replatform", apps: sorted.filter(a => a.complexity === "medium").map(a => a.name), weeks: 6 },
      { phase: "Refactor", apps: sorted.filter(a => a.complexity === "high").map(a => a.name), weeks: 12 },
    ];
    return phases.filter(p => p.apps.length > 0);
  }
}

const ha = new HAScoreCalculator();
const haScore = ha.calculate([
  { name: "ALB", tier: "web", multiAZ: true, autoScaling: false, healthChecks: true, backupConfigured: false },
  { name: "ECS Service", tier: "app", multiAZ: true, autoScaling: true, healthChecks: true, backupConfigured: false },
  { name: "RDS", tier: "data", multiAZ: true, autoScaling: false, healthChecks: true, backupConfigured: true },
]);
console.log("HA Score:", haScore.overall, "%", "- RTO recommendation:", ha.recommendForRTO(15));

const mp = new MigrationPlanner();
const plan = mp.plan([
  { name: "web-app", complexity: "low", dependencyCount: 1 },
  { name: "legacy-db", complexity: "high", dependencyCount: 8 },
  { name: "api-gateway", complexity: "medium", dependencyCount: 3 },
]);
console.log("Migration phases:", JSON.stringify(plan, null, 2));
```
```


// architecture
// iaas-paas-saas-cloud-native implementation

interface Task { id: string; name: string; status: string; data: unknown }
class Processor {
  private tasks: Task[] = []
  private maxConcurrency: number
  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }
  async add(task: Omit<Task, "status">): Promise<void> {
    this.tasks.push({ ...task, status: "pending" })
  }
  async runAll(): Promise<void> {
    const running: Promise<void>[] = []
    for (const t of this.tasks) {
      if (running.length >= this.maxConcurrency) { await Promise.race(running) }
      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })
      running.push(p)
    }
    await Promise.all(running)
  }
  private async execute(t: Task): Promise<void> {
    t.status = "running"
    await new Promise(r => setTimeout(r, 10))
    t.status = "done"
  }
  getResults(): Task[] { return this.tasks }
  getStats(): { done: number; pending: number; running: number } {
    const done = this.tasks.filter(t => t.status === "done").length
    const pending = this.tasks.filter(t => t.status === "pending").length
    const running = this.tasks.filter(t => t.status === "running").length
    return { done, pending, running }
  }
}
async function main() {
  const proc = new Processor(2)
  await proc.add({ id: '1', name: 'architecture', data: { topic: 'iaas-paas-saas-cloud-native' } })
  await proc.runAll()
  console.log('Stats:', proc.getStats())
}
main().catch(console.error)
export { Processor, Task }

// architecture - additional TS implementations

interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }
class Cache {
  private store: Map<string, CacheEntry> = new Map()
  constructor(private defaultTTL: number = 60000) {}
  set(key: string, value: unknown, ttl?: number): void {
    this.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })
  }
  get(key: string): unknown | undefined {
    const entry = this.store.get(key)
    if (!entry) return undefined
    if (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }
    return entry.value
  }
  delete(key: string): boolean { return this.store.delete(key) }
  clear(): void { this.store.clear() }
  size(): number { return this.store.size }
  keys(): string[] { return Array.from(this.store.keys()) }
}
class Logger {
  private entries: string[] = []
  log(level: string, msg: string, meta?: Record<string, unknown>): void {
    const entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })
    this.entries.push(entry)
    console.log(entry)
  }
  info(msg: string, meta?: Record<string, unknown>): void { this.log("info", msg, meta) }
  warn(msg: string, meta?: Record<string, unknown>): void { this.log("warn", msg, meta) }
  error(msg: string, meta?: Record<string, unknown>): void { this.log("error", msg, meta) }
  getLogs(): string[] { return [...this.entries] }
  clear(): void { this.entries = [] }
}
function computeHash(input: string): string {
  let hash = 0
  for (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }
  return Math.abs(hash).toString(16)
}
async function demo(): Promise<void> {
  const cache = new Cache(5000)
  cache.set('key1', 'cloud-services demo')
  const log = new Logger()
  log.info('Cache demo started', { course: 'cloud-computing', chapter: 'architecture' })
  const v = cache.get("key1")
  console.log('Cached:', v)
  console.log('Hash:', computeHash('cloud-services'))
}
demo()
export { Cache, Logger, computeHash, CacheEntry }
## Summary

- The Well-Architected Framework has 6 pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability.
- Migration follows the 6 Rs: Rehost, Replatform, Refactor, Repurchase, Retire, and Retain.
- DR strategies range from Backup & Restore (RTO hours) to Multi-Region Active/Active (RTO seconds).
- Fault tolerance requires redundancy at every layer: compute, storage, network, and database.
- Microservices decompose monoliths into independently deployable services.
- Observability combines metrics, logs, and distributed traces for system insight.
- RTO and RPO targets drive all DR and backup architecture decisions.
- The Well-Architected Framework provides six pillars for evaluating cloud architectures.
- Migration strategies range from Rehost (quick) to Refactor (max benefit).
- DR strategies form a spectrum from Backup & Restore (cheap, slow) to Active/Active (expensive, fast).
- Fault tolerance requires eliminating single points of failure at every layer.
- Microservices decompose monoliths into independently deployable bounded contexts.
- Cost optimization combines reserved capacity, spot instances, right-sizing, and lifecycle policies.
- Observability requires metrics, logs, and traces working together.
- RTO and RPO are business-driven targets that inform DR architecture decisions.

## Exercises

### Review Questions

1. Explain the six pillars of the AWS Well-Architected Framework and their key questions.
2. Compare the six Rs of migration and provide a scenario where each would be appropriate.
3. What is the difference between RTO and RPO and how do they influence DR strategy selection?
4. Describe the four DR strategies from cheapest to most expensive.
5. How do you decompose a monolith into microservices?
6. What are the three pillars of observability and how do they work together?

### Application Problems

1. Perform a Well-Architected review of a sample application architecture and identify risks in each pillar.

2. A company has 50 workloads to migrate to the cloud. Categorize each by 6 Rs strategy and create a migration prioritization plan.

3. Design a DR strategy for a financial trading platform with RTO of 30 seconds and RPO of near-zero. What components and configurations are needed?

4. Write a TypeScript function that calculates the total cost of ownership for running a workload on-premises vs Rehost vs Refactor over 3 years.

5. Design an observability strategy for a microservices application with 20 services, including metrics, logging, and distributed tracing.

### Challenge Problem

Design a complete cloud architecture for a global fintech platform processing /day in transactions. Requirements: 1) 99.999% availability for transaction processing, 2) RTO < 1 minute, RPO near-zero, 3) Multi-region active-active deployment, 4) Microservices architecture with event-driven communication, 5) PCI DSS compliance, 6) Cost optimization target under 15% of transaction value, 7) Observability with 5-minute alert-to-detection SLA, 8) Automated CI/CD with canary deployments, 9) Multi-tenant with per-tenant data isolation, 10) Infrastructure as Code for all components. Propose specific services, configurations, and comprehensive architecture diagrams.
