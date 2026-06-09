---
title: Project 2 — Secondary Project Template
---

# Project 2 — Secondary Project Template

> **Status:** ○ Planned · Edit this line to ◐ Practicing · ● Drilled

The interviewer almost always asks for a **second** project. The first is your lead — usually full-stack, often a Laravel + AI app. The second should **showcase a different muscle**: a different domain, a different stack layer, a different kind of problem.

This file mirrors [Project 1 Template](project-1-template.md), but with prompts that push you to pick a project that *complements* rather than duplicates the first.

---

## Inhale.

Look at your three or four candidate projects right now. The lead is set. For Project 2, ask:

> *"What do I show with this one that Project 1 doesn't already show?"*

If the answer is *"another Laravel CRUD app"*, pick a different one. The interviewer will not be impressed by the second instance of the same skill.

---

## Pick Project 2 for one of these signals

Choose deliberately. Each option signals something different.

=== "Different domain"

    Lead project: a college fest portal (web app, payments).

    Project 2: an AI / ML / data project — RAG chatbot, fine-tuned classifier, data analysis pipeline. Shows breadth.

=== "Different stack layer"

    Lead project: full-stack with backend depth.

    Project 2: an infra / DevOps project — Docker setup, CI/CD pipeline, custom monitoring, Kubernetes lab. Shows you understand what runs your code.

=== "Different scale of complexity"

    Lead project: large, multi-feature, team-built.

    Project 2: small, focused, deeply polished — a single algorithm shipped well, an OSS contribution merged, a CLI tool with great UX. Shows you can finish small things to a high bar.

=== "Different role"

    Lead project: you led / architected.

    Project 2: you joined an existing codebase, fixed something, learned conventions. Shows you can contribute to code you didn't write — the actual job after college.

=== "Different timescale"

    Lead project: built in 4 weeks under pressure.

    Project 2: a 3-month iterative project, multiple versions, real feedback loop. Shows you can sustain effort, not just sprint.

---

## Section 1 — Project identity

```text
[Project name]:
[One-line description — what it does, for whom]:
[GitHub URL]:
[Live URL / demo / OSS PR link]:
[Status — shipped / in production / archived / merged]:
[Months you worked on it]:
[Team size and your role]:
[The signal this project sends (different from Project 1)]:
```

The last line is mandatory. If you can't articulate the signal, pick a different second project.

---

## Section 2 — The 30-second pitch

```text
Line 1 — Problem (8s):
________________________________________________________

Line 2 — Role + stack (8s):
________________________________________________________

Line 3 — Hardest part (7s):
________________________________________________________

Line 4 — Outcome (7s):
________________________________________________________
```

**Tip for Project 2**: open Line 1 with the *contrast* to Project 1 if it's a deliberate change of domain. *"My first project was full-stack; this one is the AI piece I'd extract into a standalone service."* Frames the second project as intentional, not redundant.

---

## Section 3 — The 90-second pitch

```text
Beat 1 — Problem context (15s):
________________________________________________________
________________________________________________________

Beat 2 — Solution approach (20s):
________________________________________________________
________________________________________________________
________________________________________________________

Beat 3 — Tech decisions (20s):
[Backend / core choice + reason]:
[Data store + reason]:
[Frontend / interface + reason]:
[One more choice + reason]:

Beat 4 — Hardest challenge (15s):
[Symptom]:
[Fix]:

Beat 5 — Outcome (20s):
[Metric 1]:
[Metric 2]:
[Bonus signal — postmortem, doc, OSS contribution]:
```

---

## Section 4 — Bug story (STAR)

Even a smaller project should have one bug worth telling. Mine the git log.

```text
Bug name (5 words):

Beat 1 — Symptom:
___________________________________________________________

Beat 2 — First wrong hypothesis + ruling out:
___________________________________________________________

Beat 3 — Second wrong hypothesis + ruling out:
___________________________________________________________

Beat 4 — Systematic step:
___________________________________________________________

Beat 5 — Root cause:
___________________________________________________________

Beat 6 — Fix + verification + prevention:
Fix:
Verification:
Prevention added:
```

**Tip**: if Project 2 is an AI/LLM project, the *"bug"* might be a prompt regression, a hallucination pattern, or a token-cost blowup. Those count. Treat them with the same STAR rigor.

---

## Section 5 — Tech decisions card

Two cards minimum for Project 2 (since it's the smaller showcase):

```text
Tech 1: ____________________________
  Reason 1 (constraint):
  Reason 2 (feature):
  Alternative considered:
  Why rejected:

Tech 2: ____________________________
  Reason 1 (constraint):
  Reason 2 (feature):
  Alternative considered:
  Why rejected:

Tech 3 (optional): _________________
  Reason 1 (constraint):
  Reason 2 (feature):
  Alternative considered:
  Why rejected:
```

---

## Section 6 — Scaling plan

For Project 2, you may answer this differently. Two valid framings:

=== "If Project 2 is production-scale"

    Fill the scaling template normally. Identify the bottleneck, propose interventions, name metrics.

=== "If Project 2 is small / personal scale"

    Reframe honestly:

    > *"This project runs at single-digit users — it's a personal tool. If I were taking it to 100 users I'd [intervention 1]. If I were taking it to 10k users the architecture would change — I'd [structural change]."*

    Acknowledging the current scale honestly + naming what *would* change at higher scale is a better answer than pretending you've solved problems you haven't.

```text
Current scale: _______________________________________

If scaled 10x:
  First bottleneck: __________________________________
  Intervention: ______________________________________

If scaled 100x:
  Structural change needed: __________________________
  New architecture sketch: ___________________________
```

---

## Section 7 — Tradeoffs narrative

Two tradeoffs minimum for Project 2 (one win, one regret is fine):

```text
Tradeoff 1 (a win):
  Decision:
  Cost:
  Win:
  Driver:

Tradeoff 2 (the regret):
  Decision:
  Cost:
  Win:
  In hindsight, would do:
```

---

## Section 8 — Metrics card

For Project 2, metrics may be smaller. That's fine. Be specific.

```text
Usage:
  Total users / installs / stars / forks: _______________
  Active usage:  ________________________________________

Quality:
  Test coverage: ________________________________________
  Bug count: ____________________________________________
  PR review feedback received (if OSS): _________________

Outcome-specific:
  [Project-specific metric — e.g., classifier accuracy,
   API response time, model inference cost, pipeline
   throughput, deployment time]:
```

---

## Section 9 — The whiteboard sketch

For Project 2, sketch the **most interesting component**, not the whole system:

```text
What you'll draw (pick one):
  - The RAG pipeline (chunk → embed → retrieve → prompt)
  - The CI/CD flow (commit → test → build → deploy)
  - The ML model training loop (data → train → eval → ship)
  - The data pipeline (extract → transform → load → query)
  - The OSS feature you added (before / after, where it sits)

Components to label (5-7 max):
  1. _______________________________________________
  2. _______________________________________________
  3. _______________________________________________
  4. _______________________________________________
  5. _______________________________________________

The annotation that matters most:
  ________________________________________________
```

---

## Section 10 — Drill checklist

- [ ] **Day 1** — Section 2 cold (30s pitch). Record. 30s ± 3.
- [ ] **Day 2** — Section 3 cold (90s pitch). Record. 90s ± 5.
- [ ] **Day 3** — Section 4 cold (bug story). Record. 90s ± 10.
- [ ] **Day 4** — Section 5 + 7 (tech decisions + tradeoffs, friend rotates).
- [ ] **Day 5** — Mock interview, Project 2 round (10–15 min). Two clean rounds = ● Drilled.

---

## The pivot — connecting Project 1 and Project 2

Practice the *transition* between projects. When the interviewer says *"got another one?"*, you should be able to bridge cleanly:

> *"Sure. The first project was a full-stack Laravel app — backend heavy, real users. The second is the opposite: a [Python ML / OSS / DevOps] project, smaller scale, deeper on [specific skill]. I usually mention it when interviewers want to see I've worked outside the Laravel comfort zone."*

That bridge sentence signals deliberate portfolio construction. It says *I curated my projects*, not *I built whatever was in front of me*. Senior signal.

---

## Common traps for Project 2

| Trap | Why it kills | Fix |
|---|---|---|
| Project 2 is another Laravel CRUD app | Shows narrow range | Pick a project from a different category |
| Project 2 has no metrics | Sounds unfinished | Even small projects have install counts, stars, runtime numbers |
| You don't have a bug story for it | Tells them it wasn't deeply built | Mine the git log, even one real fix counts |
| You apologize for it being small | Sells against your own portfolio | Frame as *"focused, deeply polished"* — small with quality > big with hand-waving |
| Transition between projects is awkward | Sounds like you forgot what you put on the resume | Practice the bridge sentence |

---

## After you fill this in

When this file is filled and the checklist is ticked, you have **two interview-ready projects**. Most students have one. You have curated, differentiated, drilled coverage.

Now drill the cross-cutting questions:

→ **[Hardest Bug Story](hardest-bug.md)** — have 2 bug stories ready (one per project)
→ **[Tradeoffs Narrative](tradeoffs-narrative.md)** — have 3 tradeoffs ready (mix and match across projects)
→ **[Phase 04 — DSA Patterns](../04-dsa-patterns/index.md)** — once projects are drilled, move to the coding round prep

---

*This file is your second-project workbook. Drill the result, not the blanks.*
