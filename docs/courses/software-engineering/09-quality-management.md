# Software Quality Management

## Learning Objectives

After completing this chapter, the student will be able to:
- Explain the three components of software quality management
- Apply quality standards (ISO 9001, CMMI, ISO 25010) to software projects
- Differentiate between software quality assurance (QA) and quality control (QC)
- Use quality review techniques including inspections and walkthroughs
- Implement static analysis metrics and tools in TypeScript
- Apply statistical process control to software quality
- Measure quality using ISO 25010 characteristics

## Theory

### What is Software Quality?

Software quality is the degree to which a software product satisfies stated and implied needs. Quality is not merely the absence of defects — it encompasses the entire user experience, maintainability, performance, and security.

```mermaid
graph TD
    subgraph "Quality Management System"
        QP[Quality Planning] --> QA[Quality Assurance]
        QA --> QC[Quality Control]
        QC --> QM[Quality Management]
    end
    
    QP --> |Define| STANDARDS[Standards & Procedures]
    QA --> |Process Compliance| AUDITS[Process Audits]
    QC --> |Product Verification| TEST[Testing & Reviews]
    QM --> |Continuous Improvement| FEEDBACK[Feedback Loops]
```

### The Three Components of Quality Management

| Component | Focus | Activities | Verifies |
|-----------|-------|------------|----------|
| **Quality Planning** | Future quality activities | Define standards, set quality goals, identify processes | Plans |
| **Quality Assurance (QA)** | Process compliance | Audits, process checks, training | Processes |
| **Quality Control (QC)** | Product quality | Reviews, testing, static analysis | Products |

### Quality Standards and Models

#### ISO 9001

ISO 9001 is a general quality management standard applicable to any organisation. Key principles relevant to software:

- **Customer focus:** Understanding customer needs
- **Leadership:** Establishing quality vision
- **Engagement of people:** Involving all team members
- **Process approach:** Managing activities as processes
- **Improvement:** Continuous improvement focus
- **Evidence-based decision making:** Data-driven quality
- **Relationship management:** Managing supplier relationships

#### CMMI (Capability Maturity Model Integration)

```mermaid
graph LR
    L1[Level 1: Initial] --> L2[Level 2: Managed]
    L2 --> L3[Level 3: Defined]
    L3 --> L4[Level 4: Quantitatively Managed]
    L4 --> L5[Level 5: Optimising]
    
    style L1 fill:#ff6b6b,color:#fff
    style L2 fill:#ffa726,color:#fff
    style L3 fill:#ffd54f,color:#000
    style L4 fill:#66bb6a,color:#fff
    style L5 fill:#2196f3,color:#fff
```

| Level | Name | Characteristics |
|-------|------|-----------------|
| 1 | Initial | Processes unpredictable, ad hoc, reactive |
| 2 | Managed | Project-level processes, basic project management |
| 3 | Defined | Organisation-wide standard processes |
| 4 | Quantitatively Managed | Process measured and controlled statistically |
| 5 | Optimising | Continuous process improvement |

#### ISO/IEC 25010 Quality Model

ISO 25010 (replacing ISO 9126) defines eight quality characteristics:

```mermaid
graph TD
    SW[Software Product Quality] --> FSU[Functional Suitability]
    SW --> REL[Reliability]
    SW --> PER[Performance Efficiency]
    SW --> OPE[Operability]
    SW --> SEC[Security]
    SW --> COM[Compatibility]
    SW --> MAI[Maintainability]
    SW --> POR[Portability]
    
    FSU --> FS1[Functional Completeness]
    FSU --> FS2[Functional Correctness]
    FSU --> FS3[Functional Appropriateness]
    
    REL --> RE1[Maturity]
    REL --> RE2[Availability]
    REL --> RE3[Fault Tolerance]
    REL --> RE4[Recoverability]
    
    MAI --> MA1[Modularity]
    MAI --> MA2[Reusability]
    MAI --> MA3[Analysability]
    MAI --> MA4[Modifiability]
    MAI --> MA5[Testability]
```

### Quality Assurance vs Quality Control

| Aspect | Quality Assurance | Quality Control |
|--------|-------------------|-----------------|
| **Orientation** | Process-oriented | Product-oriented |
| **Timing** | Prevention (before) | Detection (during/after) |
| **Focus** | How work is done | What is produced |
| **Activities** | Audits, training, process definition | Testing, inspections, reviews |
| **Goal** | Prevent defects | Find defects |

### Quality Reviews: Inspections and Walkthroughs

#### Fagan Inspections

A structured, formal review process developed by Michael Fagan at IBM:

| Phase | Activities | Participants |
|-------|------------|--------------|
| **Planning** | Select material, schedule, assign roles | Moderator |
| **Overview** | Author introduces the material | All reviewers |
| **Preparation** | Individual review of material | All reviewers |
| **Inspection Meeting** | Systematic defect detection | All participants |
| **Rework** | Fix defects | Author |
| **Follow-up** | Verify fixes are correct | Moderator |

**Inspection Roles:**
- **Moderator:** Leads the inspection, ensures process compliance
- **Author:** Creator of the work product
- **Reviewers:** Domain experts who examine the product
- **Recorder:** Documents defects and decisions

#### Walkthroughs vs Inspections

| Aspect | Walkthrough | Inspection |
|--------|-------------|------------|
| Formality | Informal | Formal |
| Preparation time | Minimal | Significant |
| Data collection | None | Detailed defect data |
| Meeting length | Longer (presentation) | Shorter (focused) |
| Best for | Education, consensus | Defect detection |
| Defect detection rate | Low (~20%) | High (~70%) |

### Static Analysis

Static analysis examines source code without executing it. Modern tools detect bug patterns, security vulnerabilities, style violations, and maintainability issues.

**Types of static analysis:**

| Type | Checks | Example Tools |
|------|--------|---------------|
| Style | Code formatting, naming conventions | ESLint, Prettier |
| Bug patterns | Null pointers, type mismatches, dead code | TypeScript compiler, SonarQube |
| Security | Injection, XSS, hardcoded secrets | CodeQL, Semgrep |
| Complexity | Cyclomatic complexity, depth of inheritance | SonarQube, Plato |
| Duplication | Copy-paste detection | PMD-CPD, jscpd |

**Cyclomatic Complexity:** `M = E - N + 2P`

Where E = number of edges, N = number of nodes, P = number of connected components in the control flow graph.

| Cyclomatic Complexity | Risk Assessment |
|----------------------|-----------------|
| 1-10 | Simple, low risk |
| 11-20 | Moderate complexity |
| 21-50 | High risk, difficult to test |
| 50+ | Untestable, must refactor |

### Statistical Process Control (SPC)

SPC uses statistical methods to monitor and control process quality. In software, it is applied to defect rates, test pass rates, and cycle times.

**Key SPC concepts:**
- **Control limits:** Upper (UCL) and lower (LCL) boundaries for acceptable variation
- **Common cause variation:** Natural process variation (expected)
- **Special cause variation:** Unusual events requiring investigation
- **Defect density:** `Defects per KLOC` or `Defects per FP`

```mermaid
graph LR
    subgraph "Control Chart"
        UCL[Upper Control Limit] ---
        MEAN[Mean] ---
        LCL[Lower Control Limit]
    end
    DATA[Data Points] --> PLOT[Plot on Chart]
    PLOT --> CHECK{Within Limits?}
    CHECK -->|Yes| COMMON[Common Cause - Process Stable]
    CHECK -->|No| SPECIAL[Special Cause - Investigate]
```

## Practical Takeaways

1. **Quality must be planned, not inspected in** — allocate dedicated time for quality activities
2. **Process quality drives product quality** — fix the process, and product defects decrease
3. **Inspections catch defects cheaper than testing** — the cost of fixing a bug increases exponentially through the lifecycle
4. **Static analysis is cheap insurance** — run linters and vulnerability scanning as part of CI
5. **Track quality metrics over time** — trends reveal process degradation before it becomes critical
6. **Automate quality checks** — manual quality control does not scale

## Examples

### Example 1: Quality Metric Collector

```typescript
interface QualityMetrics {
  cyclomaticComplexity: number;
  linesOfCode: number;
  commentDensity: number; // as decimal
  testCoverage: number;   // as decimal
  duplicateCodeRate: number; // as decimal
}

interface QualityGates {
  maxComplexity: number;
  minCoverage: number;
  maxDuplication: number;
}

class QualityAggregator {
  private readonly gates: QualityGates;

  constructor(gates: QualityGates) {
    this.gates = gates;
  }

  public evaluate(metrics: QualityMetrics): {
    passed: boolean;
    violations: string[];
    score: number;
  } {
    const violations: string[] = [];

    if (metrics.cyclomaticComplexity > this.gates.maxComplexity) {
      violations.push(
        `Complexity ${metrics.cyclomaticComplexity} exceeds ${this.gates.maxComplexity}`
      );
    }
    if (metrics.testCoverage < this.gates.minCoverage) {
      violations.push(
        `Coverage ${(metrics.testCoverage * 100).toFixed(1)}% below ${(this.gates.minCoverage * 100).toFixed(0)}%`
      );
    }
    if (metrics.duplicateCodeRate > this.gates.maxDuplication) {
      violations.push(
        `Duplication ${(metrics.duplicateCodeRate * 100).toFixed(1)}% exceeds ${(this.gates.maxDuplication * 100).toFixed(0)}%`
      );
    }

    // Composite score (0-100)
    const complexityScore = Math.max(
      0,
      100 - (metrics.cyclomaticComplexity / this.gates.maxComplexity) * 100
    );
    const coverageScore = metrics.testCoverage / this.gates.minCoverage * 100;
    const duplicationScore = Math.max(
      0,
      100 - (metrics.duplicateCodeRate / this.gates.maxDuplication) * 100
    );
    const score = Math.round(
      (complexityScore * 0.3 + coverageScore * 0.4 + duplicationScore * 0.3)
    );

    return {
      passed: violations.length === 0,
      violations,
      score,
    };
  }
}
```

### Example 2: Cyclomatic Complexity Calculator

```typescript
enum NodeType {
  SEQUENCE,
  DECISION,   // if, ternary, switch
  LOOP,       // for, while, do-while
  LOGICAL,    // &&, ||
  CATCH,      // exception handler
}

interface ControlFlowNode {
  id: number;
  type: NodeType;
  children: number[];
}

class ComplexityAnalyzer {
  public calculate(nodes: ControlFlowNode[]): number {
    // M = E - N + 2P
    const edges = nodes.reduce((sum, n) => sum + n.children.length, 0);
    const vertexCount = nodes.length;

    // Count decision predicates for additional precision
    const predicateCount = nodes.filter(
      (n) =>
        n.type === NodeType.DECISION ||
        n.type === NodeType.LOOP ||
        n.type === NodeType.CATCH
    ).length;

    // For a single connected component (P=1):
    const cyclomatic = edges - vertexCount + 2;
    // Alternative: 1 + predicateCount
    const alternativeFormula = 1 + predicateCount;

    return Math.max(cyclomatic, alternativeFormula);
  }

  public static async analyzeFile(
    sourceCode: string
  ): Promise<{ function: string; complexity: number; risk: string }[]> {
    // Simplified parser: counts control flow keywords
    const lines = sourceCode.split('\n');
    const functions: { function: string; complexity: number; risk: string }[] = [];
    let currentFunction = '';
    let predicates = 0;
    let inFunction = false;

    for (const line of lines) {
      const trimmed = line.trim();

      if (trimmed.startsWith('function ') || trimmed.match(/^\w+\s*\(.*\)\s*{/)) {
        if (inFunction) {
          functions.push({
            function: currentFunction,
            complexity: predicates + 1,
            risk: this.riskLevel(predicates + 1),
          });
        }
        currentFunction = trimmed.split('{')[0].trim();
        predicates = 0;
        inFunction = true;
      }

      if (inFunction) {
        if (trimmed.startsWith('if ') || trimmed.startsWith('else if ')) predicates++;
        if (trimmed.startsWith('for ') || trimmed.startsWith('while ')) predicates++;
        if (trimmed.startsWith('case ')) predicates++;
        if (trimmed.match(/\|\||&&/)) predicates++;
        if (trimmed.startsWith('catch ')) predicates++;
      }

      if (trimmed === '}' && inFunction) {
        functions.push({
          function: currentFunction,
          complexity: predicates + 1,
          risk: this.riskLevel(predicates + 1),
        });
        inFunction = false;
      }
    }

    return functions;
  }

  private static riskLevel(complexity: number): string {
    if (complexity <= 10) return 'Low';
    if (complexity <= 20) return 'Moderate';
    if (complexity <= 50) return 'High';
    return 'Untestable';
  }
}
```

### Example 3: Inspection Defect Logger

```typescript
type DefectSeverity = 'major' | 'minor' | 'cosmetic';
type DefectType =
  | 'logic_error'
  | 'interface_error'
  | 'data_error'
  | 'documentation_error'
  | 'standards_violation'
  | 'performance_issue';

interface Defect {
  id: string;
  inspectionId: string;
  location: string;
  description: string;
  severity: DefectSeverity;
  defectType: DefectType;
  finder: string;
  status: 'open' | 'rework_done' | 'verified' | 'rejected';
}

class InspectionManager {
  private defects: Defect[] = [];

  public logDefect(
    inspectionId: string,
    location: string,
    description: string,
    severity: DefectSeverity,
    defectType: DefectType,
    finder: string
  ): Defect {
    const defect: Defect = {
      id: `DEF-${this.defects.length + 1}`,
      inspectionId,
      location,
      description,
      severity,
      defectType,
      finder,
      status: 'open',
    };
    this.defects.push(defect);
    return defect;
  }

  public getInspectionStats(inspectionId: string): {
    total: number;
    bySeverity: Record<DefectSeverity, number>;
    byType: Record<DefectType, number>;
  } {
    const relevant = this.defects.filter((d) => d.inspectionId === inspectionId);

    const bySeverity = { major: 0, minor: 0, cosmetic: 0 };
    const byType = {
      logic_error: 0, interface_error: 0, data_error: 0,
      documentation_error: 0, standards_violation: 0, performance_issue: 0,
    };

    for (const d of relevant) {
      bySeverity[d.severity]++;
      byType[d.defectType]++;
    }

    return { total: relevant.length, bySeverity, byType };
  }

  public defectDensity(inspectionId: string, ksloc: number): number {
    const relevant = this.defects.filter((d) => d.inspectionId === inspectionId);
    return relevant.length / ksloc;
  }

  public generateReport(): string {
    const total = this.defects.length;
    const open = this.defects.filter((d) => d.status !== 'verified').length;
    const majorCount = this.defects.filter((d) => d.severity === 'major').length;

    return [
      '=== Inspection Report ===',
      `Total Defects Found: ${total}`,
      `Open Defects: ${open}`,
      `Critical/Major Defects: ${majorCount}`,
      `Defect Closure Rate: ${(((total - open) / total) * 100).toFixed(1)}%`,
      '---',
      this.defects.map((d) =>
        `  ${d.id} | ${d.severity.toUpperCase()} | ${d.location} | ${d.description} | ${d.status}`
      ).join('\n'),
    ].join('\n');
  }
}
```

### Example 4: Quality Dashboard Data Generator

```typescript
interface QualitySnapshot {
  timestamp: Date;
  codeCoverage: number;
  cyclomaticComplexity: number;
  technicalDebtRatio: number;
  blockerIssues: number;
  criticalIssues: number;
  testCount: number;
  testFailures: number;
}

class QualityTrendAnalyzer {
  private snapshots: QualitySnapshot[] = [];

  public recordSnapshot(data: Omit<QualitySnapshot, 'timestamp'>): void {
    this.snapshots.push({ ...data, timestamp: new Date() });
  }

  public getCoverageTrend(): { direction: 'improving' | 'declining' | 'stable'; rate: number } {
    const recent = this.snapshots.slice(-10);
    if (recent.length < 3) return { direction: 'stable', rate: 0 };

    const first = recent[0].codeCoverage;
    const last = recent[recent.length - 1].codeCoverage;
    const change = last - first;
    const rate = change / recent.length;

    return {
      direction: rate > 0.01 ? 'improving' : rate < -0.01 ? 'declining' : 'stable',
      rate,
    };
  }

  public getQualityGateStatus(thresholds: {
    minCoverage: number;
    maxComplexity: number;
    maxBlockerIssues: number;
  }): { passed: boolean; summary: string } {
    if (this.snapshots.length === 0) {
      return { passed: false, summary: 'No quality data available' };
    }

    const latest = this.snapshots[this.snapshots.length - 1];
    const failures: string[] = [];

    if (latest.codeCoverage < thresholds.minCoverage) {
      failures.push(
        `Coverage ${(latest.codeCoverage * 100).toFixed(1)}% < ${(thresholds.minCoverage * 100).toFixed(0)}%`
      );
    }
    if (latest.cyclomaticComplexity > thresholds.maxComplexity) {
      failures.push(
        `Complexity ${latest.cyclomaticComplexity} > ${thresholds.maxComplexity}`
      );
    }
    if (latest.blockerIssues > thresholds.maxBlockerIssues) {
      failures.push(
        `Blocker issues ${latest.blockerIssues} > ${thresholds.maxBlockerIssues}`
      );
    }

    return {
      passed: failures.length === 0,
      summary: failures.length > 0
        ? `Quality gate failed: ${failures.join('; ')}`
        : 'Quality gate passed',
    };
  }
}
```

## Chapter Quiz

**Q1: What is the primary difference between quality assurance and quality control?**
- A) QA is cheaper than QC
- B) QA focuses on process, QC focuses on product
- C) QA is done by testers, QC by developers
- D) QA uses automated tools, QC uses manual review

**Answer: B** — QA ensures processes are followed; QC verifies product quality.

**Q2: The CMMI level that requires organisation-wide standard processes is:**
- A) Level 2 (Managed)
- B) Level 3 (Defined)
- C) Level 4 (Quantitatively Managed)
- D) Level 5 (Optimising)

**Answer: B** — Level 3 establishes standard processes across the organisation.

**Q3: In Fagan inspections, the participant who leads the process is called the:**
- A) Author
- B) Reviewer
- C) Moderator
- D) Recorder

**Answer: C** — The moderator leads the inspection and ensures process compliance.

**Q4: What cyclomatic complexity value is considered high risk and difficult to test?**
- A) 1-10
- B) 11-20
- C) 21-50
- D) 50+

**Answer: C** — Cyclomatic complexity 21-50 is high risk.

**Q5: ISO 25010 defines how many quality characteristics?**
- A) 5
- B) 6
- C) 8
- D) 10

**Answer: C** — ISO 25010 defines eight characteristics: functional suitability, reliability, performance efficiency, operability, security, compatibility, maintainability, portability.

## Summary

Software quality management encompasses three interrelated components: quality planning defines the approach, quality assurance ensures processes are followed, and quality control verifies product quality. Standards like ISO 9001 provide general quality frameworks, while CMMI offers staged maturity levels from ad hoc (Level 1) to continuously improving (Level 5). ISO 25010 defines eight quality characteristics for software products. Formal inspections such as Fagan inspections detect up to 70% of defects before testing. Static analysis tools measure code metrics like cyclomatic complexity, which predicts testability. Statistical process control distinguishes common cause variation from special cause events. Automated quality gates integrated into CI/CD pipelines prevent quality degradation.

## Exercises

### Review Questions

1. What are the three components of software quality management?
2. Explain the five levels of the CMMI maturity model.
3. List the eight quality characteristics defined by ISO 25010.
4. Describe the six phases of a Fagan inspection.
5. What is the difference between a walkthrough and an inspection?
6. Write the formula for cyclomatic complexity and explain each term.
7. What is the difference between common cause and special cause variation?
8. What is defect density and how is it calculated?

### Application Problems

1. Design a quality plan for a team developing a medical device software system (IEC 62304 regulated). Include quality standards, review frequency, metrics to collect, and acceptance criteria.

2. Calculate cyclomatic complexity for a function with the following control flow: sequential entry, one if-else, two nested for loops, one switch with four cases, and one catch block. Provide the control flow graph.

3. Using the quality metric collector, evaluate a project with complexity 14, coverage 72%, and duplication 8% against gates of max complexity 12, min coverage 80%, and max duplication 5%. Report violations and overall score.

### Challenge Problem

Your organisation is at CMMI Level 1 and aims to reach CMMI Level 3 within 18 months. The 200-person engineering department is distributed across three continents with different quality cultures. Develop a staged quality improvement plan covering process area implementation (requirements management, project planning, quality assurance, configuration management, measurement and analysis). For each month, specify the process areas to implement, training required, tools to deploy, metrics to collect, and expected outcomes. Include how you will handle resistance to process adoption. Implement a TypeScript program that models the maturity progression and tracks whether milestone criteria are met each month.
