# Agile Methodologies

## Learning Objectives

After completing this chapter, the student will be able to:
- Explain the Agile Manifesto values and twelve principles
- Compare Scrum, Extreme Programming, and Kanban
- Execute Scrum ceremonies: sprint planning, daily scrum, review, retrospective
- Write user stories with INVEST criteria
- Apply estimation techniques: story points, planning poker, t-shirt sizing
- Design test-driven development (TDD) cycles in TypeScript
- Implement a burndown chart generator
- Apply XP practices: pair programming, continuous integration, refactoring

## Theory

### The Agile Manifesto

In 2001, seventeen software practitioners published the Manifesto for Agile Software Development:

> **We are uncovering better ways of developing software by doing it and helping others do it. Through this work we have come to value:**
>
> **Individuals and interactions** over processes and tools
> **Working software** over comprehensive documentation
> **Customer collaboration** over contract negotiation
> **Responding to change** over following a plan
>
> *That is, while there is value in the items on the right, we value the items on the left more.*

```mermaid
graph TD
    AM[Agile Manifesto] --> V1["Individuals & Interactions"]
    AM --> V2["Working Software"]
    AM --> V3["Customer Collaboration"]
    AM --> V4["Responding to Change"]
    
    V1 -->|over| T1["Processes & Tools"]
    V2 -->|over| T2["Comprehensive Documentation"]
    V3 -->|over| T3["Contract Negotiation"]
    V4 -->|over| T4["Following a Plan"]
```

### The Twelve Principles

1. Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.
2. Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage.
3. Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.
4. Business people and developers must work together daily throughout the project.
5. Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.
6. The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.
7. Working software is the primary measure of progress.
8. Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.
9. Continuous attention to technical excellence and good design enhances agility.
10. Simplicity — the art of maximizing the amount of work not done — is essential.
11. The best architectures, requirements, and designs emerge from self-organizing teams.
12. At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.

### Scrum

Scrum is the most widely adopted Agile framework. It is founded on empirical process control: transparency, inspection, and adaptation.

```mermaid
graph TD
    PO[Product Owner] -->|Defines| PB[Product Backlog]
    SM[Scrum Master] -->|Facilitates| TEAM[Development Team]
    TEAM -->|Selects| SB[Sprint Backlog]
    SB -->|Work| INCR[Increment]
    INCR -->|Review| PO
    
    subgraph "Sprint (2-4 weeks)"
        SP[Sprint Planning] --> DS[Daily Scrum]
        DS --> DEV[Development]
        DEV --> DS
        DEV --> SR[Sprint Review]
        SR --> RETRO[Sprint Retrospective]
    end
```

**Scrum Roles:**

| Role | Responsibility |
|------|----------------|
| **Product Owner** | Manages Product Backlog, maximises value, represents stakeholders |
| **Scrum Master** | Facilitates Scrum process, removes impediments, coaches the team |
| **Development Team** | Self-organising, cross-functional, 3-9 members, owns delivery |

**Scrum Artifacts:**

| Artifact | Description | Who Owns |
|----------|-------------|----------|
| **Product Backlog** | Ordered list of everything needed in the product | Product Owner |
| **Sprint Backlog** | Selected backlog items + plan for the sprint | Development Team |
| **Increment** | Sum of all completed backlog items, potentially releasable | Development Team |

**Scrum Events:**

```mermaid
timeline
    title Sprint Timeline (4 weeks)
    Sprint Planning : Team selects backlog : 4-hour maximum
    Daily Scrum : 15-minute sync : Every day
    Sprint Review : Demo to stakeholders : 2-hour maximum
    Sprint Retrospective : Team reflection : 1.5-hour maximum
```

### Extreme Programming (XP)

XP takes Agile practices to an engineering extreme:

| Practice | Description | Benefit |
|----------|-------------|---------|
| **TDD** | Write tests before code | Defect prevention, design clarity |
| **Pair Programming** | Two developers at one workstation | Code quality, knowledge sharing |
| **Continuous Integration** | Integrate and test multiple times daily | Early defect detection |
| **Refactoring** | Improve design without changing behaviour | Maintainability |
| **Simple Design** | Simplest solution that works | Reduced complexity |
| **Collective Ownership** | Anyone can change any code | Team velocity |
| **Coding Standards** | Consistent code conventions | Readability |
| **Metaphor** | Shared system vocabulary | Communication |
| **Sustainable Pace** | 40-hour work week | Team health |
| **On-Site Customer** | Real user available to the team | Correct priorities |

### Kanban

Kanban is a visual workflow management method originated at Toyota.

**Core Kanban principles:**
1. **Visualise the work:** Use a board with columns (To Do, In Progress, Done)
2. **Limit Work in Progress (WIP):** Cap the number of items in each column
3. **Manage flow:** Measure cycle time and lead time
4. **Make policies explicit:** Define done criteria for each column
5. **Improve collaboratively:** Evolve the process using data

```mermaid
graph LR
    subgraph "Kanban Board"
        TODO[To Do] -->|WIP Limit: 3| IP[In Progress]
        IP -->|WIP Limit: 2| REVIEW[Review]
        REVIEW -->|WIP Limit: 1| DONE[Done]
    end
```

| Metric | Definition | Significance |
|--------|------------|--------------|
| **Lead time** | Request to delivery | Customer experience |
| **Cycle time** | Work started to delivery | Team efficiency |
| **Throughput** | Items completed per time period | Team capacity |
| **WIP** | Items in progress | Flow bottleneck indicator |
| **CFD (Cumulative Flow Diagram)** | Items per status over time | Queue health |

### User Stories

A **user story** is a concise description of functionality from the user's perspective.

**Standard format:**
```
As a <role>, I want <goal> so that <benefit>.
```

**INVEST criteria:**

| Letter | Criterion | Meaning |
|--------|-----------|---------|
| **I** | Independent | Can be delivered separately |
| **N** | Negotiable | Details can be refined through conversation |
| **V** | Valuable | Delivers value to stakeholders |
| **E** | Estimable | Can be sized appropriately |
| **S** | Small | Fits within a sprint |
| **T** | Testable | Acceptance criteria are clear |

**Acceptance Criteria (Given-When-Then):**

```gherkin
Feature: User Login
  Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user enters valid username and password
    And clicks the login button
    Then the user is redirected to the dashboard
    And a success message is displayed
```

### Estimation in Agile

| Technique | Description | Best For |
|-----------|-------------|----------|
| **Planning Poker** | Team simultaneously estimates with cards | Consensus building |
| **T-Shirt Sizing** | XS, S, M, L, XL categories | Quick sizing |
| **Affinity Mapping** | Group stories by size on a wall | Large backlogs |
| **Dot Voting** | Team votes on relative effort | Visual comparison |

**Story points** are relative units of effort that combine:
- Volume of work
- Complexity
- Uncertainty
- Risk

| Points | T-Shirt | Typical Scope |
|--------|---------|---------------|
| 1 | XS | Tiny fix, trivial change |
| 2 | S | Known change, simple logic |
| 3 | M | Moderate feature |
| 5 | L | Complex feature |
| 8 | XL | Large feature, some unknowns |
| 13 | XXL | Epic, needs splitting |

**Velocity:** The total story points a team completes per sprint. Used for forecasting.

### Test-Driven Development (TDD)

TDD follows the Red-Green-Refactor cycle:

```mermaid
graph LR
    RED[Red: Write failing test] --> GREEN[Green: Make test pass]
    GREEN --> REF[Refactor: Improve code]
    REF --> RED
```

**TDD Rules:**
1. Write production code only to make a failing test pass
2. Write only enough test to fail
3. Write only enough code to pass the test

### Burndown Charts

A burndown chart shows remaining work over time:

```mermaid
graph TD
    subgraph "Sprint Burndown"
        Y_AXIS[Remaining Effort] --> LINE1[Ideal Line]
        Y_AXIS --> LINE2[Actual Line]
        X_AXIS[Days in Sprint]
    end
```

## Practical Takeaways

1. **Agile is not a methodology, it is a mindset** — values and principles matter more than ceremony
2. **Short feedback loops** — the shorter the cycle, the faster you learn and adapt
3. **Self-organising teams outperform directed teams** — trust the team to find the best way
4. **Velocity is unique to each team** — never compare velocities across teams
5. **TDD reduces defect density by 40-80%** — the investment in tests pays for itself
6. **Done means "potentially shippable"** — if it is not tested and documented, it is not done

## Examples

### Example 1: Sprint Burndown Chart Generator

```typescript
interface SprintDay {
  day: number;
  date: string;
  remainingPoints: number;
}

class BurndownCalculator {
  public generate(
    totalPoints: number,
    sprintDays: number,
    actualDailyCompletion: number[]
  ): SprintDay[] {
    const ideal = this.idealBurn(totalPoints, sprintDays);

    let actualRemaining = totalPoints;
    const actual: SprintDay[] = [];

    for (let i = 0; i < sprintDays; i++) {
      if (i < actualDailyCompletion.length) {
        actualRemaining = Math.max(0, actualRemaining - actualDailyCompletion[i]);
      }
      actual.push({
        day: i + 1,
        date: new Date(Date.now() + i * 86400000).toISOString().split('T')[0],
        remainingPoints: actualRemaining,
      });
    }

    return actual;
  }

  public idealBurn(totalPoints: number, sprintDays: number): SprintDay[] {
    const dailyBurnRate = totalPoints / sprintDays;
    const burn: SprintDay[] = [];

    for (let i = 0; i < sprintDays; i++) {
      const remaining = totalPoints - (i + 1) * dailyBurnRate;
      burn.push({
        day: i + 1,
        date: new Date(Date.now() + i * 86400000).toISOString().split('T')[0],
        remainingPoints: Math.round(remaining * 100) / 100,
      });
    }

    return burn;
  }

  public isOnTrack(
    currentRemaining: number,
    initialTotal: number,
    sprintDays: number,
    currentDay: number
  ): boolean {
    const idealRemaining = initialTotal * (1 - currentDay / sprintDays);
    return currentRemaining <= idealRemaining;
  }

  public forecastCompletion(
    initialTotal: number,
    actualBurnRate: number
  ): number {
    const remaining = initialTotal - actualBurnRate;
    const currentVelocity = actualBurnRate;
    if (currentVelocity <= 0) return Infinity;
    return Math.ceil(remaining / currentVelocity);
  }
}
```

### Example 2: TDD in TypeScript

**Step 1 — Write the failing test (Red):**

```typescript
// StringCalculator.test.ts
import { describe, it, expect } from 'vitest';

function add(numbers: string): number {
  return 0; // placeholder
}

describe('StringCalculator', () => {
  it('returns 0 for empty string', () => {
    expect(add('')).toBe(0);
  });

  it('returns the number for single input', () => {
    expect(add('1')).toBe(1);
    expect(add('5')).toBe(5);
  });

  it('sums two comma-separated numbers', () => {
    expect(add('1,2')).toBe(3);
  });

  it('sums multiple numbers', () => {
    expect(add('1,2,3,4')).toBe(10);
  });

  it('handles newline delimiters', () => {
    expect(add('1\n2,3')).toBe(6);
  });

  it('supports custom delimiters', () => {
    expect(add('//;\n1;2')).toBe(3);
  });

  it('throws for negative numbers', () => {
    expect(() => add('1,-2,3')).toThrow('negatives not allowed: -2');
  });

  it('ignores numbers > 1000', () => {
    expect(add('2,1001')).toBe(2);
  });
});
```

**Step 2 — Implement to pass (Green):**

```typescript
function add(numbers: string): number {
  if (numbers === '') return 0;

  let delimiter = /,|\n/;
  let nums = numbers;

  // Custom delimiter
  if (nums.startsWith('//')) {
    const match = nums.match(/^\/\/(.+)\n/);
    if (match) {
      delimiter = new RegExp(match[1]);
      nums = nums.slice(match[0].length);
    }
  }

  const parts = nums.split(delimiter).map(Number);
  const negatives = parts.filter((n) => n < 0);

  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(',')}`);
  }

  return parts.filter((n) => n <= 1000).reduce((a, b) => a + b, 0);
}
```

**Step 3 — Refactor:**

```typescript
class StringCalculator {
  private static readonly DEFAULT_DELIMITER = /,|\n/;
  private static readonly MAX_NUMBER = 1000;

  public add(numbers: string): number {
    if (numbers === '') return 0;

    const { delimiter, rest } = this.parseDelimiter(numbers);
    const tokens = rest.split(delimiter);
    const parsed = tokens.map(Number);
    this.validateNoNegatives(parsed);

    return parsed
      .filter((n) => n <= StringCalculator.MAX_NUMBER)
      .reduce((a, b) => a + b, 0);
  }

  private parseDelimiter(input: string): { delimiter: RegExp; rest: string } {
    if (input.startsWith('//')) {
      const match = input.match(/^\/\/(.+)\n/);
      if (match) {
        return {
          delimiter: new RegExp(match[1]),
          rest: input.slice(match[0].length),
        };
      }
    }
    return { delimiter: StringCalculator.DEFAULT_DELIMITER, rest: input };
  }

  private validateNoNegatives(numbers: number[]): void {
    const negatives = numbers.filter((n) => n < 0);
    if (negatives.length > 0) {
      throw new Error(`negatives not allowed: ${negatives.join(',')}`);
    }
  }
}
```

### Example 3: User Story Manager with INVEST Validation

```typescript
interface UserStory {
  id: string;
  role: string;
  goal: string;
  benefit: string;
  acceptanceCriteria: string[];
  storyPoints?: number;
  priority: number;
  status: 'backlog' | 'selected' | 'in_progress' | 'done' | 'accepted';
}

interface InvestScore {
  independent: number;   // 0-2
  negotiable: number;    // 0-2
  valuable: number;      // 0-2
  estimable: number;     // 0-2
  small: number;         // 0-2
  testable: number;      // 0-2
  total: number;         // 0-12
  pass: boolean;
}

class StoryManager {
  private stories: UserStory[] = [];
  private counter = 0;

  public createStory(
    role: string,
    goal: string,
    benefit: string,
    acceptanceCriteria: string[],
    priority: number
  ): UserStory {
    const story: UserStory = {
      id: `US-${++this.counter}`,
      role,
      goal,
      benefit,
      acceptanceCriteria,
      priority,
      status: 'backlog',
    };
    this.stories.push(story);
    return story;
  }

  public formatStory(story: UserStory): string {
    return [
      `Story ${story.id}:`,
      `As a ${story.role},`,
      `I want ${story.goal}`,
      `so that ${story.benefit}.`,
      '',
      'Acceptance Criteria:',
      ...story.acceptanceCriteria.map((c, i) => `  ${i + 1}. ${c}`),
    ].join('\n');
  }

  public validateINVEST(story: UserStory): InvestScore {
    const score: InvestScore = {
      independent: this.scoreIndependence(story),
      negotiable: story.status === 'selected' ? 2 : 1,
      valuable: this.scoreValue(story),
      estimable: story.storyPoints !== undefined ? 2 : 0,
      small: (story.storyPoints ?? 13) <= 8 ? 2 : story.storyPoints !== undefined ? 1 : 0,
      testable: story.acceptanceCriteria.length >= 2 ? 2 : story.acceptanceCriteria.length === 1 ? 1 : 0,
      total: 0,
      pass: false,
    };
    score.total = score.independent + score.negotiable + score.valuable
      + score.estimable + score.small + score.testable;
    score.pass = score.total >= 8;
    return score;
  }

  private scoreIndependence(story: UserStory): number {
    // Simple heuristic: check for dependency keywords
    const dependencies = ['dependent', 'depends', 'blocked by', 'requires'];
    const hasDependencies = dependencies.some(
      (d) => story.goal.toLowerCase().includes(d)
    );
    return hasDependencies ? 0 : 2;
  }

  private scoreValue(story: UserStory): number {
    if (!story.benefit || story.benefit.trim().length < 10) return 0;
    const strongValue = ['revenue', 'cost', 'time', 'user satisfaction',
      'competitive', 'compliance', 'security', 'performance'];
    const hasValueSignal = strongValue.some(
      (v) => story.benefit.toLowerCase().includes(v)
    );
    return hasValueSignal ? 2 : 1;
  }

  public getSprintCapacity(teamHours: number, avgHoursPerPoint: number): number {
    return Math.floor(teamHours / avgHoursPerPoint);
  }

  public selectStoriesForSprint(capacity: number): UserStory[] {
    const sorted = [...this.stories]
      .filter((s) => s.status === 'backlog')
      .sort((a, b) => a.priority - b.priority);

    let total = 0;
    const selected: UserStory[] = [];

    for (const story of sorted) {
      const points = story.storyPoints ?? 0;
      if (total + points <= capacity) {
        story.status = 'selected';
        total += points;
        selected.push(story);
      }
    }

    return selected;
  }
}
```

### Example 4: Sprint Retrospective Analyzer

```typescript
type RetroAction = {
  description: string;
  owner: string;
  dueDate: Date;
  status: 'open' | 'in_progress' | 'done';
};

type RetroCategory = 'start' | 'stop' | 'continue';

interface SprintRetrospective {
  sprintNumber: number;
  startDate: Date;
  endDate: Date;
  items: { category: RetroCategory; description: string }[];
  actions: RetroAction[];
  happinessLevel: number; // 1-5
  velocity: number;
  completedPoints: number;
}

class RetroManager {
  private retros: SprintRetrospective[] = [];

  public createRetro(
    sprintNumber: number,
    startDate: Date,
    endDate: Date,
    velocity: number,
    completedPoints: number
  ): SprintRetrospective {
    const retro: SprintRetrospective = {
      sprintNumber,
      startDate,
      endDate,
      items: [],
      actions: [],
      happinessLevel: 3,
      velocity,
      completedPoints,
    };
    this.retros.push(retro);
    return retro;
  }

  public addItem(
    retro: SprintRetrospective,
    category: RetroCategory,
    description: string
  ): void {
    retro.items.push({ category, description });
  }

  public addAction(
    retro: SprintRetrospective,
    description: string,
    owner: string,
    dueDate: Date
  ): void {
    retro.actions.push({
      description,
      owner,
      dueDate,
      status: 'open',
    });
  }

  public getActionCompletionRate(): number {
    const allActions = this.retros.flatMap((r) => r.actions);
    if (allActions.length === 0) return 0;
    const done = allActions.filter((a) => a.status === 'done').length;
    return done / allActions.length;
  }

  public generateRetroReport(sprintNumber: number): string {
    const retro = this.retros.find((r) => r.sprintNumber === sprintNumber);
    if (!retro) return `No retro for sprint ${sprintNumber}`;

    const startItems = retro.items.filter((i) => i.category === 'start');
    const stopItems = retro.items.filter((i) => i.category === 'stop');
    const continueItems = retro.items.filter((i) => i.category === 'continue');
    const openActions = retro.actions.filter((a) => a.status !== 'done');

    return [
      `=== Sprint ${sprintNumber} Retrospective ===`,
      `Velocity: ${retro.velocity} (completed ${retro.completedPoints} points)`,
      `Happiness: ${'😀'.repeat(retro.happinessLevel)}${'😐'.repeat(5 - retro.happinessLevel)}`,
      '',
      '🔴 Start Doing:',
      ...startItems.map((i) => `  - ${i.description}`),
      '',
      '🔴 Stop Doing:',
      ...stopItems.map((i) => `  - ${i.description}`),
      '',
      '🟢 Continue Doing:',
      ...continueItems.map((i) => `  - ${i.description}`),
      '',
      '📋 Open Action Items:',
      ...openActions.map((a) =>
        `  - ${a.description} (owner: ${a.owner}, due: ${a.dueDate.toISOString().split('T')[0]})`
      ),
    ].join('\n');
  }

  public getVelocityTrend(): { direction: 'improving' | 'declining' | 'stable'; avg: number } {
    const recent = this.retros.slice(-5);
    if (recent.length < 3) return { direction: 'stable', avg: 0 };
    const avg = recent.reduce((s, r) => s + r.velocity, 0) / recent.length;
    const firstHalf = recent.slice(0, Math.floor(recent.length / 2));
    const secondHalf = recent.slice(Math.floor(recent.length / 2));
    const firstAvg = firstHalf.reduce((s, r) => s + r.velocity, 0) / firstHalf.length;
    const secondAvg = secondHalf.reduce((s, r) => s + r.velocity, 0) / secondHalf.length;
    return {
      direction: secondAvg > firstAvg * 1.1 ? 'improving' : secondAvg < firstAvg * 0.9 ? 'declining' : 'stable',
      avg,
    };
  }
}
```

### Example 5: Kanban Board

```typescript
type ColumnName = 'backlog' | 'in_progress' | 'review' | 'done';

interface Card {
  id: string;
  title: string;
  assignee: string;
  column: ColumnName;
  cycleTimeStarted?: Date;
  cycleTimeCompleted?: Date;
}

class KanbanBoard {
  private wipLimits: Record<ColumnName, number> = {
    backlog: Infinity,
    in_progress: 3,
    review: 2,
    done: Infinity,
  };

  private cards: Card[] = [];

  public addCard(title: string, assignee: string): Card {
    const card: Card = { id: `CARD-${this.cards.length + 1}`, title, assignee, column: 'backlog' };
    this.cards.push(card);
    return card;
  }

  public moveCard(cardId: string, toColumn: ColumnName): boolean {
    const card = this.cards.find((c) => c.id === cardId);
    if (!card) return false;

    // Check WIP limit
    const columnCount = this.cards.filter((c) => c.column === toColumn).length;
    if (columnCount >= this.wipLimits[toColumn]) {
      return false;
    }

    if (toColumn === 'in_progress' && card.column !== 'in_progress') {
      card.cycleTimeStarted = new Date();
    }
    if (toColumn === 'done') {
      card.cycleTimeCompleted = new Date();
    }

    card.column = toColumn;
    return true;
  }

  public getCycleTime(cardId: string): number | null {
    const card = this.cards.find((c) => c.id === cardId);
    if (!card || !card.cycleTimeStarted || !card.cycleTimeCompleted) return null;
    const diff = card.cycleTimeCompleted.getTime() - card.cycleTimeStarted.getTime();
    return Math.round(diff / 3600000); // hours
  }

  public getAverageCycleTime(): number {
    const completed = this.cards.filter((c) => c.cycleTimeCompleted);
    if (completed.length === 0) return 0;
    const total = completed.reduce((s, c) => s + (c.cycleTimeCompleted!.getTime() - c.cycleTimeStarted!.getTime()), 0);
    return Math.round(total / completed.length / 3600000);
  }

  public getThroughput(days: number): number {
    const cutoff = new Date(Date.now() - days * 86400000);
    return this.cards.filter(
      (c) => c.cycleTimeCompleted && c.cycleTimeCompleted >= cutoff
    ).length;
  }

  public getLeadTime(cardId: string): number | null {
    const card = this.cards.find((c) => c.id === cardId);
    if (!card || !card.cycleTimeCompleted) return null;
    // Lead time from creation to completion (simplified)
    const created = new Date(); // would use actual created date in practice
    return Math.round((card.cycleTimeCompleted.getTime() - created.getTime()) / 3600000);
  }
}
```

## Chapter Quiz

**Q1: Which of the following is NOT one of the four values of the Agile Manifesto?**
- A) Individuals and interactions over processes and tools
- B) Working software over comprehensive documentation
- C) Strict adherence to plans over responding to change
- D) Customer collaboration over contract negotiation

**Answer: C** — The Manifesto values responding to change over following a plan, not the reverse.

**Q2: In Scrum, who is responsible for maximising the value of the Product Backlog?**
- A) Scrum Master
- B) Development Team
- C) Product Owner
- D) Stakeholders

**Answer: C** — The Product Owner owns the Product Backlog.

**Q3: What does the 'S' in INVEST stand for?**
- A) Specific
- B) Secure
- C) Small
- D) Scalable

**Answer: C** — INVEST criteria: Independent, Negotiable, Valuable, Estimable, Small, Testable.

**Q4: The Red-Green-Refactor cycle is associated with:**
- A) Scrum
- B) Test-Driven Development
- C) Kanban
- D) User Story mapping

**Answer: B** — TDD follows Red (failing test), Green (passing test), Refactor (improve code).

**Q5: What is the recommended WIP limit in Kanban designed to do?**
- A) Increase multitasking
- B) Identify bottlenecks and reduce context switching
- C) Maximise developer utilisation
- D) Ensure thorough documentation

**Answer: B** — WIP limits expose bottlenecks and reduce context switching overhead.

## Summary

Agile methodologies emphasize iterative development, customer collaboration, and responsiveness to change over rigid planning. The Agile Manifesto provides four values and twelve principles. Scrum implements agile through defined roles (Product Owner, Scrum Master, Development Team), artifacts (Product Backlog, Sprint Backlog, Increment), and events (Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective). Extreme Programming adds engineering practices like TDD, pair programming, and continuous integration. Kanban visualises workflow and limits work in progress. User stories capture requirements in an INVEST-compliant format. Estimation uses story points and velocity for forecasting. Burndown charts track sprint progress. Agile adoption requires cultural shift, not just process change.

## Exercises

### Review Questions

1. What are the four values of the Agile Manifesto?
2. Describe the roles and responsibilities in a Scrum team.
3. What is the purpose of the Sprint Retrospective?
4. Explain the INVEST criteria for user stories.
5. How does Kanban differ from Scrum?
6. What are the five core Kanban principles?
7. Describe the three phases of Test-Driven Development.
8. What is velocity and how is it used in planning?

### Application Problems

1. Write five user stories for an online banking application following the standard format. Each must include at least three acceptance criteria.

2. Given a team velocity of 30 points per sprint and a backlog of stories valued at 3, 5, 8, 3, 13, 5, 2, 8, 3, 5 points (priority order), determine which stories fit in the next sprint.

3. Convert the StringCalculator TDD example to accept a variable number of arguments: `add(...args: string[]): number`. Write the tests first.

### Challenge Problem

A team of 6 developers is transitioning from waterfall to Scrum. They currently do not write automated tests, have no CI pipeline, and the product owner is unavailable after sprint planning. Their first sprint produced zero working software — the team tried to implement all features at once. Diagnose the root causes. Develop a transformation roadmap covering: team training, engineering practices (TDD, CI, pair programming), Scrum adoption (correct ceremony execution, PO commitment), and cultural changes. Implement a TypeScript team maturity model that assesses the team across 10 dimensions (TDD adoption, CI maturity, backlog management, estimation accuracy, etc.) and generates an improvement plan.
