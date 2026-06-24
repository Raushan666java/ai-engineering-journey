# Software Evolution

## Learning Objectives

After completing this chapter, the student will be able to:
- Distinguish between the four categories of software maintenance
- Explain Lehman's laws of software evolution
- Describe reverse engineering and reengineering
- Apply refactoring techniques with before/after TypeScript code
- Identify the characteristics of legacy systems and strategies for their management
- Quantify technical debt and analyse its quadrant
- Perform impact analysis for proposed changes

## Theory

### The Nature of Software Evolution

Software evolution is the continuous process of adapting a software system after its initial deployment. Unlike hardware, software does not wear out, but it must evolve to remain useful. Changes in the operational environment, the emergence of new user needs, and the correction of latent defects all drive software evolution.

Studies show that maintenance costs typically represent **60-80% of total lifecycle costs**. This economic reality makes software evolution a central concern of software engineering.

```mermaid
graph TD
    subgraph "Software Lifecycle Costs"
        DEV[Initial Development: 20-40%]
        MAINT[Maintenance & Evolution: 60-80%]
    end
    MAINT --> COR[Corrective: 17%]
    MAINT --> ADP[Adaptive: 18%]
    MAINT --> PER[Perfective: 55%]
    MAINT --> PRE[Preventive: 10%]
```

### Categories of Maintenance

| Category | Description | Example | Proportion |
|----------|-------------|---------|------------|
| **Corrective** | Fixing defects discovered after deployment | Logic errors, implementation deviations | ~17% |
| **Adaptive** | Modifying the system for environmental changes | New OS version, hardware upgrade, regulatory changes | ~18% |
| **Perfective** | Enhancing the system to improve performance or usability | Adding features, improving UI | ~55% |
| **Preventive** | Making changes to prevent future problems | Refactoring, updating dependencies, adding defensive checks | ~10% |

### Lehman's Laws of Software Evolution

Lehman formulated eight laws based on empirical studies of large systems:

| Law | Statement | Implication |
|-----|-----------|-------------|
| **I. Continuing Change** | A system must be continually adapted or it becomes progressively less satisfactory | Software that isn't changed becomes irrelevant |
| **II. Increasing Complexity** | As a system evolves, its complexity increases unless work is performed to reduce it | Without deliberate refactoring, entropy increases |
| **III. Self-Regulation** | The evolution process is self-regulating with statistically regular distributions | Process metrics follow predictable patterns |
| **IV. Conservation of Organisational Stability** | The average effective global activity rate is invariant over the product lifetime | Team productivity tends to stabilise |
| **V. Conservation of Familiarity** | The incremental growth of each release is statistically invariant | Release sizes tend to remain consistent |
| **VI. Continuing Growth** | Functional content must be continually increased to maintain user satisfaction | Features must grow to keep users engaged |
| **VII. Declining Quality** | Quality declines unless rigorously maintained | Without active maintenance, perceived quality drops |
| **VIII. Feedback System** | Evolution processes constitute multi-loop, multi-level feedback systems | Changes at one level affect all others |

### Reverse Engineering

Reverse engineering is the process of analysing a software system to extract design information and create representations at a higher level of abstraction.

```mermaid
graph LR
    subgraph "Forward Engineering"
        REQ[Requirements] --> DES[Design]
        DES --> CODE[Code]
    end
    subgraph "Reverse Engineering"
        CODE2[Code] --> DES2[Design Recovery]
        DES2 --> REQ2[Requirements Discovery]
    end
    subgraph "Reengineering"
        CODE3[Legacy Code] --> REV[Reverse Engineering]
        REV --> REDES[Redesign]
        REDES --> FWD[Forward Engineering]
        FWD --> NEW[New System]
    end
```

**Reverse engineering tools:**
- **Static analysers:** Extract structure from source code
- **Dependency analysers:** Generate dependency graphs
- **Database reverse engineering:** Derive data models from schemas
- **Decompilers:** Reconstruct source from binaries

### Technical Debt Quadrant

The technical debt quadrant, proposed by Fowler, classifies debt by intent and prudence:

```mermaid
graph TD
    subgraph "Technical Debt Quadrant"
        RQ1[Reckless & Deliberate] -->|"We don't have time for design"| EX1["Quick hack without refactoring"]
        RQ2[Reckless & Inadvertent] -->|"What is a design pattern?"| EX2["Inexperienced team creates poor design"]
        RQ3[Prudent & Deliberate] -->|"We must ship now, we'll fix later"| EX3["Deliberate shortcut with TODO item"]
        RQ4[Prudent & Inadvertent] -->|"Now we know what we should have done"| EX4["Refactoring after learning better approach"]
    end
```

| Quadrant | Description | Example | Action |
|----------|-------------|---------|--------|
| Reckless & Deliberate | Team knows better but chooses not to | Skipping tests to meet deadline | Prioritise fixing |
| Reckless & Inadvertent | Team doesn't know what good design is | No design patterns applied | Training + refactoring |
| Prudent & Deliberate | Intentional short-term decision | Ship now, refactor next sprint | Track and schedule |
| Prudent & Inadvertent | Discovered better approach after implementing | Improve design on second iteration | Refactor when encountered |

### Refactoring Catalog

Refactoring is the process of restructuring existing code without changing its external behaviour.

#### Extract Method

**Before:**
```typescript
function processOrder(order: Order): void {
  // Validate order
  if (!order.customerId) throw new Error('Missing customer');
  if (!order.items || order.items.length === 0) throw new Error('No items');
  for (const item of order.items) {
    if (item.quantity <= 0) throw new Error('Invalid quantity');
  }
  // Calculate total
  let total = 0;
  for (const item of order.items) {
    total += item.price * item.quantity;
  }
  // Apply discounts
  if (order.customerType === 'premium') total *= 0.9;
  if (order.customerType === 'vip') total *= 0.85;
  // Save order
  saveOrder({ ...order, total });
}
```

**After:**
```typescript
function processOrder(order: Order): void {
  validateOrder(order);
  const total = calculateTotal(order);
  const discountedTotal = applyDiscounts(total, order.customerType);
  saveOrder({ ...order, total: discountedTotal });
}

function validateOrder(order: Order): void {
  if (!order.customerId) throw new Error('Missing customer');
  if (!order.items || order.items.length === 0) throw new Error('No items');
  for (const item of order.items) {
    if (item.quantity <= 0) throw new Error('Invalid quantity');
  }
}

function calculateTotal(order: Order): number {
  return order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function applyDiscounts(total: number, customerType: string): number {
  if (customerType === 'vip') return total * 0.85;
  if (customerType === 'premium') return total * 0.9;
  return total;
}
```

#### Replace Conditional with Polymorphism

**Before:**
```typescript
class Bird {
  constructor(private type: string, private name: string) {}
  
  getSpeed(): number {
    if (this.type === 'european') return 10;
    if (this.type === 'african') return 20;
    if (this.type === 'norwegian') return 30;
    return 0;
  }
}
```

**After:**
```typescript
interface Bird {
  getSpeed(): number;
}

class EuropeanBird implements Bird {
  constructor(private name: string) {}
  getSpeed(): number { return 10; }
}

class AfricanBird implements Bird {
  constructor(private name: string) {}
  getSpeed(): number { return 20; }
}

class NorwegianBird implements Bird {
  constructor(private name: string) {}
  getSpeed(): number { return 30; }
}

class BirdFactory {
  static create(type: string, name: string): Bird {
    switch (type) {
      case 'european': return new EuropeanBird(name);
      case 'african': return new AfricanBird(name);
      case 'norwegian': return new NorwegianBird(name);
      default: throw new Error('Unknown bird type');
    }
  }
}
```

#### Extract Class

**Before:**
```typescript
class Employee {
  constructor(
    public name: string,
    public email: string,
    public salary: number,
    public bankAccount: string,
    public taxId: string,
    public department: string,
    public officePhone: string,
    public mobilePhone: string,
    public street: string,
    public city: string,
    public postalCode: string
  ) {}
}
```

**After:**
```typescript
class Employee {
  constructor(
    public name: string,
    public contact: ContactInfo,
    public compensation: CompensationInfo,
    public department: string
  ) {}
}

class ContactInfo {
  constructor(
    public email: string,
    public officePhone: string,
    public mobilePhone: string,
    public address: Address
  ) {}
}

class Address {
  constructor(
    public street: string,
    public city: string,
    public postalCode: string
  ) {}
}

class CompensationInfo {
  constructor(
    public salary: number,
    public bankAccount: string,
    public taxId: string
  ) {}
}
```

#### Rename Variable/Method

**Before:** `const d = new Date(); const r = calculate(a, b);`

**After:** `const currentDate = new Date(); const revenue = calculateRevenue(startDate, endDate);`

### Legacy Systems

**Characteristics of legacy systems:**
- Outdated technology platforms (no longer supported)
- Poor or outdated documentation
- Degraded structure from ad hoc changes
- Obsolete hardware or OS dependencies
- Shortage of developers with relevant skills

**Legacy system management strategies:**

| Strategy | Description | When to Use |
|----------|-------------|-------------|
| **Scrap & rebuild** | Replace entirely | Low business value, low technical quality |
| **Freeze** | Minimise changes to essential corrections | Low business value, high technical quality |
| **Maintain** | Continue evolution with current practices | High business value, high technical quality |
| **Transform** | Reengineer to modern platform | High business value, low technical quality |
| **Wrap** | Encapsulate with modern interface | High business value, risk of replacement too high |

```mermaid
graph TD
    subgraph "Legacy System Portfolio"
        direction LR
        A[High Business Value<br>Low Technical Quality<br>TRANSFORM] --> B[High Business Value<br>High Technical Quality<br>MAINTAIN]
        C[Low Business Value<br>Low Technical Quality<br>SCRAP] --> D[Low Business Value<br>High Technical Quality<br>FREEZE]
    end
```

### Impact Analysis

Impact analysis identifies the consequences of a proposed change. It answers: what will be affected, what is the ripple effect, and what is the estimated effort?

```typescript
interface Dependency {
  sourceFile: string;
  targetFile: string;
  dependencyType: 'import' | 'extends' | 'implements' | 'calls' | 'uses';
}

class ImpactAnalyzer {
  private dependencies: Dependency[] = [];

  public addDependency(dep: Dependency): void {
    this.dependencies.push(dep);
  }

  public analyzeImpact(changedFile: string): {
    directlyAffected: string[];
    transitivelyAffected: string[];
    estimatedEffort: number;
  } {
    const directlyAffected = this.dependencies
      .filter((d) => d.targetFile === changedFile)
      .map((d) => d.sourceFile);

    const transitivelyAffected = new Set<string>();
    const queue = [...directlyAffected];
    while (queue.length > 0) {
      const file = queue.shift()!;
      const affected = this.dependencies
        .filter((d) => d.targetFile === file)
        .map((d) => d.sourceFile);
      for (const a of affected) {
        if (!transitivelyAffected.has(a)) {
          transitivelyAffected.add(a);
          queue.push(a);
        }
      }
    }

    return {
      directlyAffected,
      transitivelyAffected: Array.from(transitivelyAffected),
      estimatedEffort: (directlyAffected.length + transitivelyAffected.size) * 4, // hours
    };
  }
}
```

### Modernization Strategies

| Strategy | Risk | Effort | Time | Result |
|----------|------|--------|------|--------|
| **Strangler Fig** | Low | High | Long | Incremental replacement |
| **Big Bang Rewrite** | High | Very high | Medium | Brand new system |
| **Incremental Migration** | Medium | Medium | Medium | Gradual transition |
| **Database First** | Medium | Medium | Medium | Modernise data layer first |
| **API Encapsulation** | Low | Low | Short | Legacy wrapped behind APIs |

## Practical Takeaways

1. **Refactoring is not optional** — without it, Lehman's Law of Increasing Complexity guarantees degradation
2. **Track technical debt explicitly** — quantify it, prioritise it, schedule it alongside features
3. **The strangler fig pattern is safer than big-bang rewrites** — incremental replacement preserves business continuity
4. **Automated tests are essential for evolution** — without them, refactoring is just "changing code and hoping"
5. **Document decisions, not just code** — future maintainers need to know why, not just what
6. **Legacy systems are valuable** — they represent years of business logic; treat them with respect

## Chapter Quiz

**Q1: What proportion of total lifecycle costs does maintenance typically represent?**
- A) 20-30%
- B) 40-50%
- C) 60-80%
- D) 80-90%

**Answer: C** — Maintenance typically consumes 60-80% of total software lifecycle costs.

**Q2: Lehman's Law of Increasing Complexity states that:**
- A) Systems must be continually adapted or become unsatisfactory
- B) Complexity increases unless deliberate work is performed to reduce it
- C) The growth of each release is statistically invariant
- D) Quality declines unless rigorously maintained

**Answer: B** — Without deliberate refactoring, system complexity inevitably increases.

**Q3: Which is NOT a characteristic of legacy systems?**
- A) Outdated technology platforms
- B) Modern architecture patterns
- C) Poor documentation
- D) Shortage of developers with relevant skills

**Answer: B** — Legacy systems are characterised by outdated technology and architecture, not modern patterns.

**Q4: The strangler fig pattern is:**
- A) Rewriting the entire system at once
- B) Incrementally replacing legacy functionality with new implementations
- C) Wrapping legacy systems with APIs
- D) Freezing all changes to the system

**Answer: B** — The strangler fig pattern incrementally replaces legacy components.

**Q5: In the technical debt quadrant, "we must ship now, we'll fix later" represents:**
- A) Reckless & Deliberate
- B) Prudent & Deliberate
- C) Reckless & Inadvertent
- D) Prudent & Inadvertent

**Answer: B** — Prudent & Deliberate debt is an intentional short-term decision with a plan to fix later.

## Summary

Software evolution consumes the majority of lifecycle costs. Maintenance is classified as corrective, adaptive, perfective, and preventive. Lehman's eight laws describe the empirical dynamics of evolution, including the inevitable increase in complexity (Law II) and the necessity of continuing change (Law I). Reverse engineering recovers design information from existing code. Refactoring catalogues provide behaviour-preserving transformations (Extract Method, Replace Conditional with Polymorphism, Extract Class). The technical debt quadrant helps prioritise improvement work. Legacy systems require strategies from scrapping to wrapping. Impact analysis quantifies change consequences. Regression testing is essential throughout evolution.

## Exercises

### Review Questions

1. What proportion of total lifecycle costs is typically consumed by maintenance?
2. Distinguish between corrective and adaptive maintenance with examples.
3. List and explain Lehman's eight laws of software evolution.
4. What distinguishes reverse engineering from reengineering?
5. What is the principal constraint on refactoring — what must be preserved?
6. Describe the strangler fig pattern for legacy system replacement.
7. What are the two dimensions used in legacy system portfolio analysis?
8. What are the four quadrants of the technical debt model?

### Application Problems

1. A 500,000-LOC system has an annual change rate of 15%. The maintenance team costs $1.2M/year. If a $300K refactoring programme reduces the annual change rate to 10%, calculate the break-even period.

2. Propose a refactoring plan for a 2,000-line class handling persistence, business logic, and presentation with duplicated code in five locations. Show the before/after TypeScript code.

3. Implement a `CodeSmellDetector` TypeScript class that detects long methods, large classes, duplicate code, and excessive parameter lists.

4. Analyse a legacy system using Lehman's laws. For each law, provide an example of how it applies to the system.

### Challenge Problem

A government social security agency operates a thirty-year-old system written in an obsolete language. Documentation is incomplete, original developers have retired, and the system cannot be replaced because business rules are not fully understood. Recent legislation requires significant changes to eligibility rules, and the system must integrate with a modern citizen portal. Develop a comprehensive evolution strategy. Address knowledge recovery, legislative changes, testing approach, and transition planning. Implement a TypeScript modernization planner that tracks the migration of legacy modules through the strangler fig pattern.
