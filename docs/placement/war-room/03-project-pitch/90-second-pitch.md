---
title: The 90-Second Project Pitch
---

# The 90-Second Project Pitch

> **Status:** ○ Planned · Edit this line to ◐ Practicing · ● Drilled

This is the **default** project answer. When they say *"walk me through your project"* in a 1:1 interview, you deliver this — not 30 seconds (too thin), not 5 minutes (they'll cut you off).

Ninety seconds, five beats: problem context → solution approach → tech decisions → hardest challenge → outcome.

---

## Inhale.

Open the script below. Read it once, silently. Now read it aloud. Now do it again.

Don't analyze. Just speak. The structure goes into your body first, your head second.

---

## The Script — 90 seconds, 5 beats

> **Beat 1 — Problem context (15s)** — *"At my college, the annual fest had 2,000 students registering across 12 events. The old system was a single Google Form with paid events tracked in a Whatsapp group. Three problems: duplicate registrations, no real payment status, and the admin team manually allocated seats in Excel the night before."*
>
> **Beat 2 — Solution approach (20s)** — *"I built a Laravel 12 monolith with a React admin dashboard. Students register through a public flow that handles payment via Razorpay, with each event configured as a separate product with a seat limit. Admins log in to a dashboard that shows live registration counts, payment status, and lets them export attendee lists per event."*
>
> **Beat 3 — Tech decisions (20s)** — *"I chose Laravel because the team was PHP-first and I needed to ship in 4 weeks — Laravel's auth, queues, and Eloquent saved me from writing boilerplate. MySQL because the data was relational — students, events, payments, seat allocations. Razorpay because they're standard in India and have a clean webhook flow. React for the admin dashboard because the registration counts needed to update live."*
>
> **Beat 4 — Hardest challenge (15s)** — *"The hard part was handling the first 10 minutes of registration day — 500+ concurrent students hitting the seat-allocation endpoint. The first version oversold seats by 14 because two requests could pass the count check before either had written. Fixed it with a database row lock on the seat counter, wrapped in a transaction."*
>
> **Beat 5 — Outcome (20s)** — *"We processed 2,100 paid registrations in three days, zero double-bookings, and the admin team cut their manual work from 8 hours per event to about 20 minutes. Razorpay's success rate logged at 98%. Code's on my GitHub, and I wrote a postmortem on the race condition that's now part of our college's CS club handbook."*

Five beats. Ninety seconds. **The interviewer now knows what you built, why those choices, what you struggled with, and what shipped.** Their next question writes itself.

---

## The Anatomy — why this wins

Beat 1 — **the world before you arrived**. You're not pitching code, you're pitching a *change*. *"Whatsapp group, Excel night-before"* is the before-photo. *"Three problems"* tells them you analyzed before you coded — that's senior thinking on a junior resume.

Beat 2 — **architecture in plain English**. You named the monolith. You named the dashboard. You named the user flow. No buzzwords. The interviewer mentally diagrams this in 20 seconds.

Beat 3 — **decisions with reasons**. *"PHP-first team + 4-week timeline → Laravel"* is a real constraint-driven choice. Compare to *"I chose Laravel because it's popular"* — that loses you the role. Every tech named here gets *one* reason — that's the rule.

Beat 4 — **a real engineering problem with a real fix**. *"Oversold by 14"* is a war wound. *"Row lock + transaction"* is the textbook fix, delivered by someone who actually hit it. Interviewer ticks the database-concurrency box.

Beat 5 — **multiple metrics, including unexpected ones**. The Razorpay 98% number is a *bonus signal*: it shows you watched the numbers after launch. The postmortem mention says *"I document things"* — that's an instant +1 for any senior interviewer.

---

## The template for your Laravel + AI project

Most students will deploy a Laravel backend with an OpenAI integration. Here's the scaffold:

```text
[Beat 1 — Problem context, 15s]
"[Target user] was doing [manual process] using [old tool]. The pain
was [specific friction — time / errors / cost]. I wanted to use [LLM]
to [automate / augment] one piece of that."

[Beat 2 — Solution approach, 20s]
"I built a Laravel 12 backend with a [Vue / React / Blade] frontend.
Users submit [input], a queued job calls [OpenAI / Claude / Gemini]
with [prompt strategy — few-shot / RAG / function calling], and the
result is [stored / streamed / sent back]. [Optional: I added [feature
— history, regenerate, edit, export]]."

[Beat 3 — Tech decisions, 20s]
"Laravel for the speed of shipping — queues, auth, Eloquent out of the
box. MySQL because [N] relational tables. [LLM choice] because
[latency / cost / quality reason]. [Vector DB if RAG] because
[chosen for X]. [Frontend choice] because [reactivity / SEO / team]."

[Beat 4 — Hardest challenge, 15s]
"The hard part was [hallucination handling / latency / cost
control / prompt drift / rate limits]. I solved it with [specific
technique — validators, caching, retry-with-backoff, streaming]."

[Beat 5 — Outcome, 20s]
"[N] users, [N] generations per day, average response time [X
seconds]. Cost per request settled at [Rs.X]. The thing I'm proudest
of is [specific quality / safety / UX detail]."
```

---

## Fill in your blanks

```text
[Project name]:
[Problem 1-liner]:
[Target user]:
[Old tool / process]:
[Architecture summary]:
[Stack — backend, frontend, DB, infra]:
[Tech choice 1 + reason]:
[Tech choice 2 + reason]:
[Tech choice 3 + reason]:
[Hardest technical challenge]:
[Fix you applied]:
[Outcome metric 1]:
[Outcome metric 2]:
[Bonus signal — postmortem, doc, OSS contribution]:
```

---

## The 5-day practice drill

- [ ] **Day 1 — Read aloud, 5×.** Time it. Mark beats where you rush or stall. Should land at 85–95 seconds.
- [ ] **Day 2 — Record and listen back.** You will hear your own filler. Pick one word to kill (*basically, actually, like, so*). Stop saying it.
- [ ] **Day 3 — Practice with a timer visible.** Hit 90 ± 5 seconds. Over 100s = cut Beat 1 by half. Under 80s = add a sentence to Beat 4 — *not* to the outcome.
- [ ] **Day 4 — Mock with friend, no notes.** They ask *"walk me through your project"* in a casual tone. You deliver cold. They ask one follow-up. You handle it without scrambling.
- [ ] **Day 5 — Cold delivery, on camera.** Phone propped up. No prep. Deliver, watch back, deliver again. If you can do two clean takes in a row, you own it.

---

## Recovery — when you blank

If you blank on the architecture (Beat 2), **ground in the user flow**:

> *"Let me walk through what the user actually does — they land on the page, they [action], the system [response], and they see [result]. Behind that, the stack is…"*

The user-flow narrative is harder to forget than the architecture diagram.

If you blank on the metric, **never invent**:

> *"The exact number escapes me — it was in the [round number] range, I'll send the dashboard screenshot after."*

If you blank on the hardest challenge, **swap to a smaller-but-real one**:

> *"The honest answer is the hardest part was just getting the prompt to be consistent — I went through 6 iterations of the system prompt before the output was reliable enough to ship."*

Prompt iteration is always a defensible "hard part" for an LLM project. Senior interviewers respect it.

---

## Variants

=== "60s — Compressed"

    Drop Beat 3 (tech decisions) and shorten Beat 4. Use when: they ask *"give me the short version"*, or they've already asked about your stack separately.

=== "90s — Default"

    See main script above.

=== "3min — Senior screen"

    Deliver the 90s script. Pause. If they don't jump in:

    > *"Want me to go deeper on the [race condition / prompt strategy / scaling decision]? That's where the actual engineering happened."*

    Then pivot to the [Deep Dive](deep-dive.md) version.

=== "5min — Panel"

    See [The 5-Minute Deep Dive](deep-dive.md).

---

## Common traps

| Trap | Why it kills | Fix |
|---|---|---|
| Skips the problem context | Sounds like a tutorial project | 15 seconds on the world before your code |
| All architecture, no metrics | Sounds like you built it for class | One number per outcome, minimum |
| Vague tech rationale (*"Laravel is popular"*) | Misses the senior-thinking signal | Each tech gets ONE constraint-based reason |
| The "challenge" is *"learning the framework"* | Tells them you didn't ship hard problems | A real bug, a real concurrency issue, a real perf problem |
| Talks for 2+ minutes | They cut you off before the metric lands | Practice with a timer until 90s is a body memory |
| Ends with *"…and that's basically it"* | Weak landing, signals uncertainty | End with the metric. Land it. Stop. |

---

## After you drill this

When this drill is **● Drilled**, you have a project pitch that any 1:1 interviewer will respect. This is the one you'll deliver 50+ times across your placement season.

Next drills:

→ **[The 5-Minute Deep Dive](deep-dive.md)** — the panel version
→ **[Tech Decisions](tech-decisions.md)** — handle *"why did you choose X?"*
→ **[Hardest Bug Story](hardest-bug.md)** — the natural follow-up

---

*Update your status badge once you can deliver the 90s script cold, on camera, twice in a row, hitting 90 ± 5 seconds, without filler.*
