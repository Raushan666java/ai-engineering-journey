---
title: Tech Decisions — Why You Chose Each Tool
---

# Tech Decisions

> **Status:** ○ Planned · Edit this line to ◐ Practicing · ● Drilled

The interviewer points at your stack and asks *"why Laravel? Why MySQL? Why React?"*. Every line on your resume is an invitation to this question. Most students fumble it because they chose tech for the wrong reasons (popular, tutorial-friendly) and don't have a real defense.

This drill arms you with a **2-sentence defense for every tech choice**: one constraint-based reason for picking it, one alternative you considered with one tradeoff.

---

## Inhale.

For each tech on your resume, finish this sentence in your head right now:

> *"I chose [tech] because [constraint], over [alternative], accepting that [tradeoff]."*

If you stall, this drill is for you. Most students stall here. That's the gap.

---

## The Script — the universal template

> *"I chose [tech] for two reasons. [Reason 1 — constraint-based — time / team / scale / cost]. [Reason 2 — tech-specific feature that mattered]."*
>
> *"The alternative I seriously considered was [other tech]. I rejected it because [specific tradeoff in the context of THIS project, not a generic criticism]."*

Two sentences. **Constraint + alternative + tradeoff**. Repeat for each tech.

---

## The Anatomy — why this wins

Most students answer *"why Laravel?"* with *"because it has good documentation"* or *"because PHP is widely used"*. Both are generic, both are forgettable, and worst — both tell the interviewer you didn't really decide.

You answer with **a constraint your project actually had**. *"I had 4 weeks and a team of 3 PHP devs"* is a real constraint. *"Good docs"* is a brochure quote.

The alternative-considered move is the senior-engineer move. It tells the interviewer: *I knew there were other options. I had reasons for not picking them. I can justify my pick under cross-examination.* That's worth 10 buzzwords.

The tradeoff sentence is the killer. *"I accepted that Laravel would be slower than Node for I/O-bound work, but my workload was DB-bound so it didn't matter"* — that's the answer of someone who *actually thought about it*.

---

## The decisions you must rehearse

### Backend — Laravel vs alternatives

> **"Why Laravel and not Node.js / Express?"**
>
> *"Two reasons. One: my team was three PHP-first developers and we had a 4-week build window — switching to Node would cost a week of onboarding for a one-developer productivity gain. Two: Laravel's queues, auth, and Eloquent gave me production-grade boilerplate out of the box — request validation, password hashing, job retry policies are all configured by default."*
>
> *"I considered Node with Express. I rejected it because the event-loop concurrency model didn't matter for my workload — the bottleneck was database writes, not connection count. Node's strengths would have been wasted on a CRUD-heavy app."*

> **"Why Laravel and not Django?"**
>
> *"PHP was the team's strongest language and the shared hosting we already paid for ran PHP natively. Django would have meant a Python WSGI setup on a server the college doesn't manage."*
>
> *"Django has a stronger ORM and admin out of the box. The tradeoff was real. I traded admin polish for deploy simplicity, and built the admin myself."*

> **"Why Laravel and not Spring Boot / .NET?"**
>
> *"Both are enterprise-grade and would have been overkill for a 4-week student project with no DevOps team. Spring Boot's startup time and memory footprint don't fit on shared hosting."*
>
> *"In a different context — a 6-month enterprise build with a JVM ops team — Spring Boot would be the right call. Constraint-driven decision."*

---

### Database — MySQL vs alternatives

> **"Why MySQL and not PostgreSQL?"**
>
> *"My hosting provided MySQL natively, and the data model was straightforward relational — users, events, payments, seats. MySQL's feature set covered everything I needed."*
>
> *"PostgreSQL has stronger JSONB, better full-text search, and stricter typing — all of which I would have used if the project had unstructured event metadata or text search. It didn't, so I didn't switch."*

> **"Why not MongoDB / NoSQL?"**
>
> *"The data was fundamentally relational — every registration referenced a student and an event, every payment referenced a registration. Modelling that in MongoDB means either denormalizing (consistency pain) or doing joins-in-app (the worst of both worlds)."*
>
> *"MongoDB makes sense when your access pattern is document-shaped — like a chat app with messages embedded under conversations. Mine wasn't."*

> **"Why MySQL and not SQLite?"**
>
> *"Concurrency. SQLite locks the whole database on writes, and I expected 500 concurrent registrations in the first 10 minutes. SQLite would have queued them sequentially."*
>
> *"SQLite was perfect for the early prototype — zero setup, file-based. I switched to MySQL when load testing showed write contention."*

---

### Frontend — React vs alternatives

> **"Why React and not Vue?"**
>
> *"Team familiarity. Two of us had shipped React projects before; nobody had production Vue experience. Default to the tech the team can debug at 11pm."*
>
> *"Vue's single-file components and reactivity are arguably nicer for this kind of admin dashboard. I'd consider Vue 3 next time. Today, the team-knowledge constraint won."*

> **"Why React and not Next.js?"**
>
> *"The admin dashboard didn't need SEO, server-side rendering, or file-based routing — it's behind an auth wall, served to ~5 admin users. Next.js's value would have been wasted, and the deploy story was more complex on our shared hosting."*
>
> *"For a public-facing site with SEO needs and a content-heavy page set, Next.js wins. Different problem."*

> **"Why React and not Blade + HTMX?"**
>
> *"Honest answer: in hindsight, HTMX would have been faster to ship. I picked React because I wanted a real SPA on my GitHub. The dashboard didn't need SPA reactivity — most updates were on page-reload anyway."*
>
> *"This is one of my regret-driven lessons — picking tech for resume signal instead of user need. I'd use HTMX next time."*

---

### LLM provider — OpenAI vs alternatives

> **"Why OpenAI and not Claude / Gemini / Llama?"**
>
> *"OpenAI had the lowest latency on my test prompts during the build phase, and their Indian-rupee billing through Razorpay made expense tracking trivial. Function calling support was production-stable when I started."*
>
> *"Claude often produces better long-form output and has stronger safety defaults — I'd pick Claude for a content-generation product where output quality matters more than latency. For my chat-style use case, OpenAI's speed won."*

> **"Why not self-host Llama / Mistral?"**
>
> *"Cost and complexity. Hosting a 70B model needs a GPU instance at ₹40k+/month. My usage was 200 generations a day — at OpenAI's per-token pricing that's ₹150/month. Self-hosting only wins at 100× my volume."*
>
> *"Self-hosting also means MLOps — model versioning, monitoring drift, scaling. I'm one developer. Not the right tradeoff."*

---

### Vector DB — Pinecone vs pgvector vs Chroma

> **"Why pgvector and not Pinecone?"**
>
> *"My data already lived in PostgreSQL. Adding pgvector meant one extension and one migration — no new service to operate, no new credentials, no network hop per query."*
>
> *"Pinecone wins at scale — millions of vectors, low-latency ANN search, managed hosting. My corpus was 50k embeddings. pgvector handles that in 10ms. I'd switch to Pinecone when query latency on pgvector crossed 100ms."*

---

### Queues — Redis vs database queue vs SQS

> **"Why a Redis queue and not the database queue?"**
>
> *"Throughput. Database queues hit the same MySQL instance that's serving user requests — under load they contend. Redis is dedicated, in-memory, and Laravel's queue worker handles thousands of jobs per second on it."*
>
> *"Database queues are fine for very low volume — one or two background jobs per minute. Mine had bursts of 500+ in 10 minutes during registration open."*

---

## Fill in your blanks

For each tech on your resume, write out:

```text
Tech: [name + version]
Reason 1 (constraint): [time / team / scale / cost / existing infra]
Reason 2 (feature): [specific capability that mattered]
Alternative considered: [other tech]
Why rejected: [specific tradeoff in YOUR project's context]
```

Print this. Stick it next to your monitor. Update it as your projects evolve.

---

## The 5-day practice drill

- [ ] **Day 1 — List every tech on your resume.** Versions included. Should be 8–12 items.
- [ ] **Day 2 — Write the 5-field card** (above) for each one. 8 cards = 8 defenses ready.
- [ ] **Day 3 — Pair drill.** Friend points at one tech, you deliver the 2-sentence defense. They rotate. You handle all 8 in under 4 minutes.
- [ ] **Day 4 — Add hostile follow-up.** Friend asks *"but I would have used X instead — why didn't you?"*. You handle without defensiveness, naming a constraint.
- [ ] **Day 5 — Cold delivery on camera.** Phone propped. Random tech from your resume. Deliver. Repeat 8 times. Watch back — find defensive body language, fix it.

---

## Recovery — when you blank

If you blank on the alternative, **default to the team-knowledge constraint**:

> *"The honest reason was team familiarity — we had shipped [tech] before and the 4-week timeline didn't leave room to learn something new. In a longer timeline I'd evaluate [generic alternative — Node, Postgres, Vue]."*

Team familiarity is always a real constraint. Never apologize for picking based on it.

If you blank on the tradeoff, **acknowledge the cost honestly**:

> *"The tradeoff I accepted was [generic weakness — Laravel slower than Node for raw I/O, MySQL weaker than Postgres on JSON]. For my workload it didn't matter because [reason]."*

Naming the weakness yourself is more persuasive than pretending there isn't one.

---

## Variants

=== "30s — Single tech defense (default)"

    See the 2-sentence template at the top.

=== "2min — Full stack defense"

    Lead with: *"There were three big decisions — backend framework, database, and frontend approach."* Then deliver the 2-sentence defense for each, transitioning with *"For the database, I picked…"* and *"On the frontend…"*. Use when: panel asks *"talk through your stack choices"*.

=== "5min — Comparison deep dive"

    Pick ONE decision (usually the backend framework). Lay out 3 alternatives, the matrix you scored them on, and the deciding factor. See [Deep Dive](deep-dive.md) Beat 3 for the format.

---

## Common traps

| Trap | Why it kills | Fix |
|---|---|---|
| *"It has good documentation"* | Generic, applies to every popular tech | Constraint your project had — time, team, scale, cost |
| *"It's what I knew"* alone | Sounds passive, no decision-making | Reframe as a constraint: *"team-knowledge in a 4-week window"* |
| Cannot name an alternative | Tells them you didn't compare | At least one named alternative per tech, with a tradeoff |
| Trashes the alternative generically | Sounds like a fanboy | Reject in CONTEXT, not absolutely. *"Right for X, wrong for my Y"* |
| Defensive body language on follow-up | Reads as insecure about the choice | Pause, acknowledge their point, restate your constraint |
| Claims a tech is *"the best"* | No tech is the best for everything | Every tech has a sweet spot. Name yours. |

---

## After you drill this

When this drill is **● Drilled**, no *"why did you choose X?"* question can rattle you. You become the candidate who *makes* decisions, not the candidate who *consumes* tutorials.

Next drills:

→ **[Hardest Bug](hardest-bug.md)** — the natural follow-up after tech decisions
→ **[Scaling Decisions](scaling-decisions.md)** — *"how would this scale 10×?"*
→ **[Tradeoffs Narrative](tradeoffs-narrative.md)** — the broader version of this drill

---

*Update your status badge once you can defend every tech on your resume in 2 sentences, with one named alternative and one real tradeoff, cold and without notes.*
