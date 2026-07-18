# Chapter 2: The 30-Day Sprint

## Learning Objectives

After this chapter you will be able to:
- Structure any learning goal into a 3-phase 30-day sprint
- Identify the critical 20% of any topic that delivers 80% of results
- Set a non-negotiable daily minimum to maintain momentum
- Execute weekly reviews to stay on track and adjust before it's too late
- Avoid the most common sprint-killing mistakes

## Theory

### The 3-Phase Sprint Framework

A 30-day sprint is the perfect timebox for mastering a new topic. It's long enough to build real skill but short enough to maintain intensity. Every sprint has three phases:

```mermaid
gantt
    title 30-Day Sprint: System Design Example
    dateFormat  D
    axisFormat  %d
    section Foundation (Days 1-10)
    CAP theorem            :a1, 0, 3d
    Consistent hashing     :a2, 2d, 3d
    Caching strategies     :a3, 4d, 3d
    Load balancing         :a4, 6d, 3d
    Database scaling       :a5, 8d, 3d
    section Core (Days 11-20)
    URL shortener design   :b1, 10d, 4d
    Chat system design     :b2, 14d, 4d
    News feed design       :b3, 18d, 3d
    section Mastery (Days 21-30)
    Mock design session    :c1, 21d, 3d
    Review & compare       :c2, 24d, 3d
    Repeat weak areas      :c3, 27d, 3d
```

**Phase 1: Foundation (Days 1-10)**

Goal: Build enough knowledge to have a coherent conversation about the topic.

- Days 1-3: Core vocabulary and key concepts. Learn the definitions, the "why," and the basic taxonomy
- Days 4-6: First working example. For code: get Hello World running. For theory: explain the concept in one paragraph
- Days 7-10: Connect concepts. How do they relate to each other? What's the dependency graph?

For DSA: Learn the pattern definition, see 2-3 examples, categorize 5 problems by pattern.
For System Design: Learn one building block per day (CAP, hashing, caching, etc.).
For ML: Understand one algorithm per day (linear regression, logistic regression, decision trees, etc.).

**Phase 2: Core (Days 11-20)**

Goal: Apply the fundamentals to real problems.

- Days 11-14: Guided practice. Follow tutorials, implement reference solutions, understand standard approaches
- Days 15-17: Unguided practice. Close the tutorials. Solve problems from memory. Design systems from scratch
- Days 18-20: Variation. Change the constraints. What happens when traffic is 100x? What happens when data is unstructured?

This phase is where most people quit because they hit the "competence cliff" — the gap between understanding a concept and being able to apply it. Push through.

**Phase 3: Mastery (Days 21-30)**

Goal: Perform under pressure and teach others.

- Days 21-24: Timed practice. Set a timer. Solve under interview conditions
- Days 25-27: Teaching. Write a blog post. Record a video. Explain it to a peer. The gaps you find while teaching are your final weak spots
- Days 28-30: Spaced review + retrospective. Revisit concepts from Phase 1. Run the 10-minute blank page test for each major topic

### The Pareto Principle for Learning

80% of interview problems test 20% of concepts. Identify that 20% first.

For DSA: Arrays, strings, hash maps, trees, and DP cover 80% of coding interview problems.
For System Design: CAP theorem, consistent hashing, caching, and database scaling cover the core.
For ML: Loss functions, gradient descent, overfitting/underfitting, and evaluation metrics are the foundation.

Identify your topic's critical 20% in the first 2 days and master it before touching anything else.

### The Daily Minimum

Your daily minimum is the smallest amount of work you can do that still counts as progress. It should take 30 minutes max. It must be non-negotiable — no zero days.

**Examples by topic:**
- DSA: Solve 1 problem (or re-solve 1 problem from your review queue)
- System Design: Learn 1 building block and implement a minimal version
- ML: Train 1 model on a small dataset. Doesn't matter if it's good
- Papers: Read abstract + figures of 1 paper
- General: 30 minutes of focused study, no distractions

On days when you have energy, you'll do more. On days when you're exhausted, you still do your minimum. Momentum beats intensity.

### Weekly Review Cadence

| Day | Review Type | Focus |
|-----|-------------|-------|
| 7 | Checkpoint | Am I on track? Are my daily estimates realistic? |
| 14 | Mid-sprint | What's not working? Should I change my approach? |
| 21 | Pre-mastery | What are my weakest areas? How do I address them in the final week? |
| 30 | Retrospective | What worked? What didn't? What's my next sprint topic? |

### Sprint Killers and How to Avoid Them
### Sprint Planning Template

Use this template to plan your sprint in 15 minutes:

```
Topic: __________________________
Start Date: ____________________  End Date: ____________________

Critical 20% (master in first 2 days):
1. ______________________________
2. ______________________________
3. ______________________________

Phase 1: Foundation (Days 1-10)
- Days 1-3: Vocabulary + core concepts
- Days 4-6: First working example
- Days 7-10: Connect concepts

Phase 2: Core (Days 11-20)
- Days 11-14: Guided practice
- Days 15-17: Unguided practice (no tutorials)
- Days 18-20: Variation — change constraints

Phase 3: Mastery (Days 21-30)
- Days 21-24: Timed practice
- Days 25-27: Teach someone
- Days 28-30: Spaced review + retrospective

Daily minimum (non-negotiable): 30 minutes
Rest days (pick 1 per week): _______
```

Print this template or copy it to your notes. Fill it out before every sprint.

### Three Sprint Examples

**Example 1: Master Binary Search (DSA)**
- Foundation: Understand the algorithm, time complexity, preconditions (sorted array). Implement basic binary search
- Core: Solve 15 problems: basic search, rotated array, first/last position, search in 2D matrix
- Mastery: Timed: solve 3 problems in 30 min. Teach the pattern to a peer

**Example 2: Learn PyTorch (ML Framework)**
- Foundation: Install PyTorch, understand tensors, autograd. Train a linear model on synthetic data
- Core: Build a 2-layer neural network, add training loop with validation, implement early stopping
- Mastery: Reproduce a simple paper architecture (ResNet-18 on CIFAR-10). Write a tutorial

**Example 3: System Design Basics**
- Foundation: Learn CAP theorem, consistent hashing, caching strategies, database scaling
- Core: Design URL shortener, chat system, news feed. Compare your design to references
- Mastery: Timed mock design session (45 min). Record and review. Repeat the same prompt 1 week later


| Killer | Symptom | Prevention |
|--------|---------|-----------|
| Scope creep | Adding topics mid-sprint | Write the sprint plan on day 1. No additions. |
| Perfectionism | Spending 3 hours on one concept | Timebox every task. Move on when the timer rings. |
| Comparison | Discouraged by others' progress | Your only comparison is you yesterday. |
| Absence of review | Forgetting Phase 1 by Phase 3 | Schedule 15 min daily for review of previous content. |
| Burnout | Skipping days, losing motivation | Take one full rest day per week. Non-negotiable. |

## Examples

### Example 1: Sprint Planner

```typescript
interface DailyTask {
    day: number
    phase: 'foundation' | 'core' | 'mastery'
    topic: string
    duration: number  // minutes
    type: 'learn' | 'practice' | 'review' | 'teach'
    completed: boolean
}

interface SprintPlan {
    topic: string
    startDate: Date
    dailyMinimum: number  // minutes
    tasks: DailyTask[]
}

class SprintPlanner {
    plan(topic: string, startDate: Date): SprintPlan {
        const tasks: DailyTask[] = []

        // Phase 1: Foundation (days 1-10)
        for (let d = 1; d <= 10; d++) {
            tasks.push({
                day: d,
                phase: 'foundation',
                topic: `${topic} fundamentals (day ${d})`,
                duration: d <= 3 ? 60 : 90,
                type: 'learn',
                completed: false
            })
        }

        // Phase 2: Core (days 11-20)
        for (let d = 11; d <= 20; d++) {
            tasks.push({
                day: d,
                phase: 'core',
                topic: `${topic} practice (day ${d})`,
                duration: 90,
                type: d <= 15 ? 'practice' : 'review',
                completed: false
            })
        }

        // Phase 3: Mastery (days 21-30)
        for (let d = 21; d <= 30; d++) {
            tasks.push({
                day: d,
                phase: 'mastery',
                topic: `${topic} mastery (day ${d})`,
                duration: 120,
                type: d <= 24 ? 'practice' : d <= 27 ? 'teach' : 'review',
                completed: false
            })
        }

        return {
            topic,
            startDate,
            dailyMinimum: 30,
            tasks
        }
    }
}
```

### Example 2: Daily Minimum Tracker

```typescript
class DailyMinimumTracker {
    private streaks: Map<string, number> = new Map()
    private logs: Map<string, boolean> = new Map()

    logDay(date: string, completed: boolean): void {
        this.logs.set(date, completed)

        if (!completed) {
            this.streaks.set('current', 0)
            return
        }

        const currentStreak = this.streaks.get('current') ?? 0
        this.streaks.set('current', currentStreak + 1)

        const bestStreak = this.streaks.get('best') ?? 0
        if (currentStreak + 1 > bestStreak) {
            this.streaks.set('best', currentStreak + 1)
        }
    }

    getStreak(): { current: number; best: number } {
        return {
            current: this.streaks.get('current') ?? 0,
            best: this.streaks.get('best') ?? 0
        }
    }

    getCompletionRate(days: number): number {
        const recent = Array.from(this.logs.entries()).slice(-days)
        if (recent.length === 0) return 0
        return recent.filter(([, v]) => v).length / recent.length
    }
}
```

### Example 3: Sprint Retrospective

```typescript
interface Retrospective {
    topic: string
    wins: string[]
    challenges: string[]
    metrics: {
        daysCompleted: number
        totalHours: number
        conceptsMastered: string[]
        conceptsWeak: string[]
    }
    nextSprint: string
}

class SprintRetrospective {
    analyze(logs: DailyLog[], plan: SprintPlan): Retrospective {
        const completed = logs.filter(l => l.hoursSpent >= plan.dailyMinimum)
        const weakAreas = logs
            .filter(l => l.confusion)
            .map(l => l.confusion)

        return {
            topic: plan.topic,
            wins: this.identifyWins(logs),
            challenges: this.identifyChallenges(logs),
            metrics: {
                daysCompleted: completed.length,
                totalHours: logs.reduce((s, l) => s + l.hoursSpent, 0),
                conceptsMastered: [],
                conceptsWeak: [...new Set(weakAreas)]
            },
            nextSprint: this.suggestNextSprint(weakAreas)
        }
    }

    private identifyWins(logs: DailyLog[]): string[] { return [] }
    private identifyChallenges(logs: DailyLog[]): string[] { return [] }
    private suggestNextSprint(weakAreas: string[]): string {
        return weakAreas.length > 0
            ? `Reinforce: ${weakAreas.join(", ")}`
            : "Advance to next topic"
    }
}

interface DailyLog {
    hoursSpent: number
    confusion: string
}
```

## Summary

- A 30-day sprint has 3 phases: Foundation (days 1-10), Core (days 11-20), Mastery (days 21-30)
- Identify the critical 20% of your topic in the first 2 days and master it first
- Set a 30-minute daily minimum that's non-negotiable — momentum beats intensity
- Run a weekly review on days 7, 14, 21, and 30 to stay on track
- Sprint killers: scope creep, perfectionism, comparison, absence of review, burnout — have a plan for each

## Practical Takeaways

1. Pick one topic and create a 30-day sprint plan before your next study session
2. Write down the critical 20% of concepts for your topic (research this for 30 minutes)
3. Set a daily minimum of 30 minutes — mark every day you hit it on a calendar
4. Schedule your day 7 checkpoint review right now
5. Identify which sprint killer you're most vulnerable to and write a one-sentence prevention plan

### Applying Sprints to Your Interview Prep

For your FAANG/MNC interview goal, here is how to use sprints:

**Sprint 1 (Month 1):** DSA Foundations. Master the 8 core patterns at Easy difficulty. Solve 80 problems (10 per pattern). End of sprint: you can solve any Easy in under 15 min.

**Sprint 2 (Month 2):** System Design Fundamentals. Learn 1 building block per day. Design 8 systems from scratch. End of sprint: you can design any standard system with a 45-min mock.

**Sprint 3 (Month 3):** ML/AI Basics. Build 3 models (regression, classification, neural net). Read 4 papers. Implement 2 paper contributions. End of sprint: you can discuss ML at interview level.

**Sprint 4 (Month 4):** Company-Specific + Mocks. Research your target company. Do 8 mocks total. Write 10 STAR stories. End of sprint: you are interview-ready.

Each sprint builds on the previous one. Don't start Sprint 2 until Sprint 1 is complete.

### The 7-Day Jumpstart

Not ready for a full 30-day sprint? Start with 7 days:

| Day | Task | Duration |
|-----|------|----------|
| 1 | Define your topic. Write what you want to achieve in 7 days | 15 min |
| 2 | Learn the core vocabulary. Write a glossary of 10 key terms | 30 min |
| 3 | Get a first example running (Hello World, first model, first design) | 45 min |
| 4 | Modify the example. Change one parameter and observe the effect | 30 min |
| 5 | Solve/design something from scratch without reference | 45 min |
| 6 | Teach what you learned to someone (write a summary or record a video) | 30 min |
| 7 | Review everything. Identify what you still don't understand. Plan next week | 30 min |

After 7 days, you'll have a baseline. Decide if you want to continue into a full 30-day sprint.



## Chapter Quiz

<details>
<summary>1. What are the three phases of a 30-day sprint?</summary>
<p>Foundation (days 1-10): build vocabulary and first working examples. Core (days 11-20): apply fundamentals to real problems. Mastery (days 21-30): timed practice, teaching, and spaced review.</p>
</details>

<details>
<summary>2. What's the recommended daily minimum to maintain momentum?</summary>
<p>30 minutes. It's intentionally small — you can do it even on your worst day. No zero days. On good days you'll do 2-3 hours; on bad days you still do your 30 minutes.</p>
</details>

<details>
<summary>3. How often should you run a formal progress review during a sprint?</summary>
<p>Every 7 days (days 7, 14, 21, 30). The day 14 review is the most important — it's when you have enough data to know if your approach is working, and enough time left to change course.</p>
</details>

<details>
<summary>4. What's the Pareto principle applied to learning?</summary>
<p>80% of interview problems test 20% of concepts. Identify that 20% in the first 2 days of your sprint and master it before touching anything else. For DSA: arrays, strings, hash maps, trees, DP.</p>
</details>

<details>
<summary>5. What's the first thing to cut when you're falling behind in a sprint?</summary>
<p>Scope. Don't cut time — cut topics. Focus on the critical 20% only. Everything else can wait for the next sprint. One topic mastered is worth more than five topics half-learned.</p>
</details>

## Exercises

1. **Create a sprint plan:** Pick a topic you need to learn (System Design, DSA pattern, ML algorithm). Use the SprintPlanner class to generate a full 30-day plan with daily tasks
2. **Identify the critical 20%:** Spend 30 minutes researching your topic. What are the core concepts that appear most often? Write them down. Focus on these for days 1-3
3. **Start the streak:** Set your daily minimum (30 min). Track it with the DailyMinimumTracker. Aim for 7 consecutive days
4. **Day 7 review:** After 7 days, run a checkpoint. Are your daily estimates realistic? Is your topic scope right? Adjust for the remaining 23 days
5. **Sprint retrospective:** On day 30, run a full SprintRetrospective. What worked? What didn't? What's your next sprint? Write it down before starting the next one
