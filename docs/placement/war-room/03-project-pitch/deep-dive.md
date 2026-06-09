---
title: The 5-Minute Project Deep Dive
---

# The 5-Minute Project Deep Dive

> **Status:** ○ Planned · Edit this line to ◐ Practicing · ● Drilled

This is the **panel version**. Senior screen, system-design-adjacent round, or *"we have 30 minutes, walk me through your most complex project."* You will own the room for 5 minutes, then invite questions.

The structure: problem → constraints → 3 alternatives considered → chosen architecture → 1 hard bug → what you'd do differently.

---

## Inhale.

Five minutes feels short until you're standing in front of three engineers and you've used up four of them on the problem statement.

Read the script. Time each beat. Get the rhythm into your body before you get the words into your head.

---

## The Script — 5 minutes, 6 beats

### Beat 1 — Problem (45s)

> *"The project is the fest registration portal for my college's 2,000-student annual event. Before my team took it over, the registration was a Google Form, payments were tracked in a Whatsapp group, and seat allocation happened in Excel the night before the event."*
>
> *"Three concrete problems: duplicate registrations because students would refill the form on payment failures, no source-of-truth for who had paid, and seat allocation that often oversold the popular workshops by 5–10 students because nobody knew the live count."*

### Beat 2 — Constraints (30s)

> *"Four constraints shaped the architecture. One: 4-week build window — fest dates were locked. Two: PHP-first team — three of us knew Laravel, one knew Node. Three: budget was ₹0 — student club, no cloud spend. Four: peak load was predictable — 500+ concurrent users in the first 10 minutes of registration opening, then a long tail."*

### Beat 3 — Alternatives considered (45s)

> *"I considered three architectures."*
>
> *"Option A — a no-code stack with Google Forms plus Razorpay Payment Links and a Zapier glue. Cheapest, fastest, but no real seat-limit enforcement and no admin dashboard. Rejected because the seat oversell problem would survive."*
>
> *"Option B — Node.js backend with a SQLite database on a free Render instance. Modern, lightweight, but the team didn't know Node well and I'd lose 1 of my 4 weeks to onboarding."*
>
> *"Option C — Laravel monolith on a shared host the college already paid for, with React for the admin dashboard. Familiar to the team, free hosting, slower to scale but our peak was 500 concurrent which a single Laravel instance handles."*
>
> *"I went with Option C. The decision driver was team familiarity plus the existing hosting — both reduced delivery risk in a 4-week window."*

### Beat 4 — Chosen architecture (60s)

> *"The system is three layers. Public-facing registration: Blade templates with Alpine.js for interactivity, hitting a Laravel controller that creates a pending registration record and redirects to Razorpay's hosted checkout."*
>
> *"Payment flow: Razorpay webhook hits a Laravel endpoint that verifies the signature, marks the registration paid, and triggers a queued job to send a confirmation email and SMS. The webhook handler is idempotent — if Razorpay retries, we don't duplicate."*
>
> *"Seat allocation: a separate table tracks live count per event with a unique constraint on (event_id, seat_number). The allocation endpoint wraps a row lock around the seat-counter check and the insert. If the count is at limit, we return a 'sold out' response and refund via Razorpay's API."*
>
> *"Admin dashboard: separate subdomain, React SPA, hits a JSON API guarded by Laravel Sanctum. Shows live registration counts, lets admins export attendee CSVs, and flags failed payments for manual reconciliation."*

### Beat 5 — One hard bug (60s)

> *"The hardest bug was in the first 10 minutes of registration opening. We oversold the headline workshop by 14 seats."*
>
> *"My initial hypothesis was a Razorpay webhook race — multiple webhooks for the same payment arriving in parallel. I checked the logs. The webhook handler was firing once per payment, correctly."*
>
> *"Second hypothesis: cache staleness on the seat-count display. Wrong again — the display was eventually consistent, but the allocation logic was reading the database directly."*
>
> *"The real cause: the allocation endpoint did a `SELECT count` then an `INSERT` inside a transaction, but the transaction isolation level was `READ COMMITTED`, not `SERIALIZABLE`. Two requests could both pass the count check before either committed the insert. Classic phantom-read."*
>
> *"Fix: switched to a row lock on the event's seat-counter row with `SELECT ... FOR UPDATE` inside the transaction. The second request blocks until the first commits, sees the new count, and gets rejected cleanly. Re-tested with a load script — 1,000 concurrent requests, exactly N successes for N seats, no oversells."*
>
> *"I wrote a postmortem with the SQL, the wrong hypotheses, and the fix. That document is now in our CS club's project handbook."*

### Beat 6 — What you'd do differently (30s)

> *"Three things, in order of priority."*
>
> *"One: I would have run a load test before launch day, not after the bug. A simple `wrk` or `k6` script with 500 concurrent virtual users would have surfaced the oversell in dev, not in prod."*
>
> *"Two: the React admin dashboard was probably overkill — Blade with HTMX would have shipped in half the time and the admin team is non-technical anyway, they didn't care about SPA speed."*
>
> *"Three: I'd extract the payment flow into its own service from day one. We doubled it for the second-year fest with different events and the tangled controller code cost us a week of refactoring."*

---

## The Anatomy — why this wins

Beat 1 sets up *why* with concrete pain points. *"Oversold by 5–10 students"* is the foreshadow — the interviewer remembers this number when you hit Beat 5.

Beat 2 lists **four constraints**. This is the senior-engineer move. Junior engineers describe what they built; senior engineers describe what they were *allowed* to build. Constraints justify decisions.

Beat 3 — **three alternatives, real reasons for rejection**. This is the killer beat. Most students cannot name a single rejected alternative because they never considered one. You name three, with constraint-based rejections. The interviewer thinks: *this person makes engineering decisions, not just engineering implementations*.

Beat 4 is the architecture, structured by **system boundary**, not by file. *"Public-facing, payment flow, seat allocation, admin"* — they can draw this on a whiteboard from your description. That's the test.

Beat 5 is the **debugging narrative with wrong hypotheses**. The first hypothesis was wrong. The second was wrong. The third was right. *Senior engineers debug like this*. Junior engineers find the bug immediately in their stories (and the interviewer knows they're embellishing).

Beat 6 is **humility with prioritization**. Three things, ranked. *"I would have run a load test"* is bigger than *"the dashboard was overkill"* and you say it in that order. Self-awareness about your past code is a *very* strong signal.

---

## Fill in your blanks

```text
[Project name]:
[Problem context — 2 sentences]:
[Specific pains — 3 of them]:
[Constraints — 4 of them, ranked]:
[Alternative A + rejection reason]:
[Alternative B + rejection reason]:
[Alternative C — your choice + driving reason]:
[Architecture layer 1 — name, tech, behavior]:
[Architecture layer 2 — name, tech, behavior]:
[Architecture layer 3 — name, tech, behavior]:
[Architecture layer 4 — name, tech, behavior]:
[Hard bug — symptom]:
[Wrong hypothesis 1]:
[Wrong hypothesis 2]:
[Root cause]:
[Fix + verification]:
[Regret 1 — biggest]:
[Regret 2]:
[Regret 3]:
```

---

## The 5-day practice drill

- [ ] **Day 1 — Read each beat aloud separately.** Time each beat. Beat 1 = 45s, Beat 2 = 30s, etc. If a beat blows past its budget, trim.
- [ ] **Day 2 — Stitch all 6 beats together.** Total should be 4:30–5:00. Record and listen back. Mark transitions where you fumble.
- [ ] **Day 3 — Whiteboard practice.** As you say Beat 4, draw the architecture. Don't memorize the drawing — let it emerge from the narrative. Practice until the drawing happens *while* you talk, not after.
- [ ] **Day 4 — Hostile interviewer mock.** Friend asks the deep dive, then interrupts twice with *"why didn't you just use X?"* You handle interruptions without losing the spine.
- [ ] **Day 5 — Camera + whiteboard.** Phone propped, marker in hand. Deliver, draw, hit 5:00 ± 30s. Watch back. Iterate.

---

## Recovery — when you blank

If you blank in Beat 3 (alternatives), **drop to two**:

> *"The two real options were [chosen one] and [next best]. I went with [chosen] because [constraint]."*

Two-option framing is still better than the candidate who can't name any alternatives.

If you blank in Beat 4 (architecture), **drop to the user journey**:

> *"Let me walk through what a registering student actually goes through. They land on the page, they pick an event, they hit pay, they get redirected to Razorpay, the webhook fires, and they get an SMS within 30 seconds."*

User-journey grounding is harder to forget than layer-by-layer diagrams.

If you blank in Beat 5 (the bug), **swap to a smaller real bug**:

> *"I'll be honest — the seat oversell was the public-facing one. The bug I personally lost the most sleep over was [smaller bug] — same debugging pattern, different scale."*

Honesty about a smaller bug beats faking the headline one.

---

## Variants

=== "5min — Senior screen / panel (default)"

    See main script above.

=== "10min — Hiring manager round"

    Deliver the 5-min spine. Add an opening *"…and the reason I'm proud of this one"* (30s personal context) and a closing *"…and here's what I learned about myself from the postmortem"* (60s reflection). Use when: they have time, they're evaluating culture-fit as much as tech.

=== "3min — Compressed deep dive"

    Cut Beat 2 (constraints) and Beat 6 (regrets). Use when: panel is running short on time but wants more than the 90s pitch. Lead with *"I'll give you the compressed version and you can pull on any thread"*.

---

## Common traps

| Trap | Why it kills | Fix |
|---|---|---|
| Cannot name a rejected alternative | Sounds like you didn't make a decision | Always have 2–3 alternatives ranked |
| Architecture is a file list, not a system | Interviewer can't draw it | Describe by boundary: public, internal, payment, admin |
| Bug story has no wrong hypothesis | Sounds fabricated or trivial | At least one wrong guess. Honesty is a signal. |
| Regret list = *"nothing major"* | Tells them you don't reflect | Three concrete regrets, ranked by impact |
| Speaks for 7+ minutes | Panel will cut you off before the regret beat | Practice with a stopwatch until 5:00 is muscle |
| Uses jargon without grounding | Senior engineer suspects buzzword cosplay | Every term gets one concrete tie-back to the project |

---

## After you drill this

When this drill is **● Drilled**, you can carry a 30-minute interview round entirely on the strength of one project. That's the bar for senior roles, and you're hitting it as a final-year student.

Next drills:

→ **[Tech Decisions](tech-decisions.md)** — handle each *"why X?"* with a 2-sentence answer
→ **[Hardest Bug](hardest-bug.md)** — extract Beat 5 into its own standalone story
→ **[Scaling Decisions](scaling-decisions.md)** — handle *"how would this scale 10×?"*

---

*Update your status badge once you can deliver the full 5-minute deep dive cold, with the architecture drawn live on a whiteboard, hitting 5:00 ± 30 seconds, while handling 2 interruptions.*
