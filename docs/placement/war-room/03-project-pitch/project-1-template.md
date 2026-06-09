---
title: Project 1 — Lead Project Template
---

# Project 1 — Lead Project Template

> **Status:** ○ Planned · Edit this line to ◐ Practicing · ● Drilled

This is the **fill-in-the-blank workbook** for your lead project. Once you fill it out, you have every pitch variant — 30s, 90s, 5min — plus the bug story, the tradeoffs, the scaling answer, and the metrics card.

You will customize this **once**, then drill the result. The drills (in the other files of this phase) teach you the structure; this file is where you load your real data into the structure.

---

## Inhale.

Pick your lead project right now. The one you'd put first on the resume. The one you've shipped, debugged, and want to talk about.

If you have two candidates, pick the one with:

1. **A real metric** (users, requests, time-saved)
2. **A real bug story** you can tell
3. **A real tradeoff** you can defend

If none of your projects clear those three bars, **that's the project to ship next** — not the one to pitch.

---

## Section 1 — Project identity

Fill these once. Re-use them in every pitch variant.

```text
[Project name]:
[One-line description — what it does, for whom]:
[GitHub URL]:
[Live URL (if deployed)]:
[Demo video URL (record one)]:
[Status — shipped / in production / archived]:
[Months you worked on it]:
[Team size and your role]:
```

---

## Section 2 — The 30-second pitch

Use the template from [The 30-Second Pitch](30-second-pitch.md). Fill in:

```text
Line 1 — Problem (8s):
"At [where — college / company / personal], [target users] were
using [old tool / process], which caused [specific pain]."

Line 2 — Role + stack (8s):
"I was the [role] and built the [thing] end-to-end in [tech 1],
[tech 2], and [tech 3]."

Line 3 — Hardest part (7s):
"The hard part was [specific technical challenge], which I solved
by [the technique]."

Line 4 — Outcome (7s):
"[Metric 1] and [metric 2 — efficiency or quality]."
```

**Your filled-in version:**

```text
Line 1: ________________________________________________________
Line 2: ________________________________________________________
Line 3: ________________________________________________________
Line 4: ________________________________________________________
```

---

## Section 3 — The 90-second pitch

Use the template from [The 90-Second Pitch](90-second-pitch.md). Fill in:

```text
Beat 1 — Problem context (15s):
[2-sentence context: who, what, the pain]
________________________________________________________
________________________________________________________

Beat 2 — Solution approach (20s):
[3-sentence architecture summary: backend, frontend, key flow]
________________________________________________________
________________________________________________________
________________________________________________________

Beat 3 — Tech decisions (20s):
[Backend choice + reason]: ________________________________
[Database choice + reason]: ________________________________
[Frontend choice + reason]: ________________________________
[One more choice + reason]: ________________________________

Beat 4 — Hardest challenge (15s):
[Symptom]: ____________________________________________
[Fix]: _________________________________________________

Beat 5 — Outcome (20s):
[Metric 1]: ____________________________________________
[Metric 2]: ____________________________________________
[Bonus signal — postmortem, doc, OSS contribution]: ______
```

---

## Section 4 — Bug story (STAR)

Use the template from [Hardest Bug Story](hardest-bug.md). Fill in:

```text
Bug name (5 words): _____________________________________

Beat 1 — Symptom (user-visible + system-visible):
___________________________________________________________

Beat 2 — First wrong hypothesis + how you ruled it out:
___________________________________________________________

Beat 3 — Second wrong hypothesis + how you ruled it out:
___________________________________________________________

Beat 4 — The systematic step (reproduction / instrumentation):
___________________________________________________________

Beat 5 — Root cause (technical depth, name the pattern):
___________________________________________________________

Beat 6 — Fix + verification + prevention:
Fix: ______________________________________________________
Verification: ______________________________________________
Prevention added: __________________________________________
```

---

## Section 5 — Tech decisions card

Use the template from [Tech Decisions](tech-decisions.md). Fill one card per tech:

```text
Tech 1: ____________________________
  Reason 1 (constraint): __________________
  Reason 2 (feature): _____________________
  Alternative considered: __________________
  Why rejected: ___________________________

Tech 2: ____________________________
  Reason 1 (constraint): __________________
  Reason 2 (feature): _____________________
  Alternative considered: __________________
  Why rejected: ___________________________

Tech 3: ____________________________
  Reason 1 (constraint): __________________
  Reason 2 (feature): _____________________
  Alternative considered: __________________
  Why rejected: ___________________________

Tech 4: ____________________________
  Reason 1 (constraint): __________________
  Reason 2 (feature): _____________________
  Alternative considered: __________________
  Why rejected: ___________________________
```

---

## Section 6 — Scaling plan

Use the template from [Scaling Decisions](scaling-decisions.md). Fill in:

```text
Current load:
  Requests/hour at peak: _______________________________
  Average response time: _______________________________
  p95 response time: ___________________________________
  DB CPU at peak: ______________________________________
  App memory at peak: __________________________________

10x bottleneck — what breaks first:
  Component: ___________________________________________
  Why it breaks: _______________________________________
  At what specific load: _______________________________

Intervention 1:
  Mechanism: ___________________________________________
  Expected impact: _____________________________________
  Cost / complexity: ___________________________________
  Metric to watch: _____________________________________

Intervention 2:
  Mechanism: ___________________________________________
  Expected impact: _____________________________________
  Cost / complexity: ___________________________________
  Metric to watch: _____________________________________

Three monitoring metrics + thresholds:
  1. ___________________________________________________
  2. ___________________________________________________
  3. ___________________________________________________
```

---

## Section 7 — Tradeoffs narrative

Use the template from [Tradeoffs Narrative](tradeoffs-narrative.md). Pick 3 — two wins, one regret:

```text
Tradeoff 1 (a win):
  Decision: ____________________________________________
  Cost (what you gave up): _____________________________
  Win (what you got): __________________________________
  Driver (why win > cost): _____________________________

Tradeoff 2 (a win):
  Decision: ____________________________________________
  Cost: ________________________________________________
  Win: _________________________________________________
  Driver: ______________________________________________

Tradeoff 3 (the regret):
  Decision: ____________________________________________
  Cost: ________________________________________________
  Win: _________________________________________________
  In hindsight, would do: _____________________________
```

---

## Section 8 — Metrics card

Single source of truth for every number you'll claim in interviews:

```text
User numbers:
  Total users: _______________ (as of [date])
  Active users: ______________ (definition: ____________)
  Peak concurrent: ___________

Performance:
  Average response time: _____________________________
  p95 response time: _________________________________
  p99 response time: _________________________________
  Throughput at peak: ________________________________

Business / outcome:
  Time saved per user: _______________________________
  Cost saved / revenue impact: _______________________
  Support tickets reduced: ___________________________

Quality:
  Test coverage: _____________________________________
  Bug count post-launch: _____________________________
  Uptime since launch: _______________________________

LLM / AI specific (if applicable):
  Requests per day: __________________________________
  Average tokens per request: ________________________
  Cost per request: __________________________________
  Hallucination rate / quality metric: _______________
```

**Rule**: every number on this card should be verifiable in your dashboard, logs, or `git log`. Never invent. If you don't know, write *"to measure"* and go measure it.

---

## Section 9 — The whiteboard architecture

When the interviewer says *"draw your architecture on the whiteboard"*, you draw this from memory. Practice the drawing.

```text
Components to label (left to right):
  [User device] → [CDN if any] → [Load balancer if any]
  → [App tier — N instances]
  → [Cache — Redis] / [Queue — Redis or SQS]
  → [Database — primary + replicas if any]
  → [External services — Razorpay / OpenAI / Twilio]

Annotations to add:
  - Request flow arrows
  - Synchronous (solid) vs async (dashed) edges
  - Data store boundaries
  - Auth boundary (where auth check happens)
  - One sentence per component: tech + what it does
```

Practice drawing this in under 90 seconds, narrating as you draw.

---

## Section 10 — Drill checklist

When all sections are filled, drill in this order:

- [ ] **Week 1 Day 1** — Section 2 cold (30s pitch). Record. Time to 30s ± 3.
- [ ] **Week 1 Day 2** — Section 3 cold (90s pitch). Record. Time to 90s ± 5.
- [ ] **Week 1 Day 3** — Section 4 cold (bug story). Record. Time to 90s ± 10.
- [ ] **Week 1 Day 4** — Section 5 (tech decisions, 4 cards, friend rotates).
- [ ] **Week 1 Day 5** — Section 6 cold (scaling). Record. Time to 90s ± 10.
- [ ] **Week 2 Day 1** — Section 7 cold (tradeoffs). Time to 2:00 ± 15.
- [ ] **Week 2 Day 2** — Section 9 (whiteboard architecture, drawn live, under 90s).
- [ ] **Week 2 Day 3** — Full deep dive (5 min). Combines Sections 3, 4, 7, with whiteboard.
- [ ] **Week 2 Day 4** — Mock interview, full project round (15 min).
- [ ] **Week 2 Day 5** — Cold delivery on camera. Two clean takes = ● Drilled.

---

## Common traps when filling this in

| Trap | Why it kills | Fix |
|---|---|---|
| Leaves metrics as round numbers (*"about 1000 users"*) | Sounds estimated, not measured | Real number from your dashboard, even if it's 247 |
| All three tradeoffs are wins | Misses the self-awareness signal | One must be a real regret |
| Bug story is *"a typo I fixed"* | Trivial, doesn't demonstrate debugging | Mine your git log for a real production fix |
| Tech decisions all say *"because it's popular"* | No constraint-based thinking | Every tech: one project-specific constraint |
| Whiteboard has 15 boxes | Too much to draw in 90s | 5–7 components, max |
| Scaling answer is *"add servers"* | Senior interviewer dismisses you | Name the bottleneck, propose mechanism |

---

## After you fill this in

When every blank in this file is filled and every checkbox is ticked, your lead project is **● Drilled**. You can carry a 30-minute interview round on this project alone.

Now do the same for your second project:

→ **[Project 2 Template](project-2-template.md)**

And keep both filled-in versions in a separate, private file (not in this repo) — they contain real numbers you'll want to update as the project evolves.

---

*This file is the workbook. Drill the result, not the blanks.*
