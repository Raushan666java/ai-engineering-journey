---
title: The 30-Second Project Pitch
---

# The 30-Second Project Pitch

> **Status:** ○ Planned · Edit this line to ◐ Practicing · ● Drilled

The interviewer says *"tell me about a project."* You have 30 seconds before their attention drifts. Most students waste it on backstory. You won't.

This drill gives you a **four-line template** — problem, role, stack, outcome — and the timing to deliver it without rushing.

---

## Inhale.

Picture a coffee chat. A recruiter at a meetup. A senior engineer in the elevator. They ask the question. You have *thirty seconds*.

Don't open with *"so basically…"*. Open with the problem.

---

## The Script — 4 lines

> **Line 1 — Problem (8s)** — *"At my college, our 2,000-student fest was using a Google Form for registration — duplicate entries, no payment tracking, manual seat allocation."*
>
> **Line 2 — Your role + tech (8s)** — *"I was the lead developer. I built the portal end-to-end in Laravel 12, MySQL, and Razorpay, with a React admin dashboard."*
>
> **Line 3 — Hardest part (7s)** — *"The challenge was handling 500 concurrent registrations in the first 10 minutes without overselling seats — solved with database row locks on the seat table."*
>
> **Line 4 — Outcome with metric (7s)** — *"We processed 2,100 paid registrations in three days with zero double-bookings and a 40% drop in admin support tickets."*

Four lines. Thirty seconds. Problem → role → tech → outcome. **That's the entire pitch.**

---

## The Anatomy — why this wins

Line 1 — **the problem, not the project**. Most students open with *"I built a Laravel app that…"*. That tells the interviewer nothing about why it mattered. You open with the pain — *"duplicate entries, no payment tracking"* — and they immediately see the why.

Line 2 — **your role + stack in one breath**. *"Lead developer"* tells them you owned it. *"Laravel 12, MySQL, Razorpay, React"* gives them four concrete techs to ask about next. You're handing them the menu of follow-up questions.

Line 3 — **one concrete challenge**. Not three. One. *"500 concurrent registrations, row locks on the seat table"* — that's the technical depth signal. They mentally upgrade your level here.

Line 4 — **outcome with two numbers**. *"2,100 registrations, 40% drop in tickets"*. Numbers prove it shipped and it mattered. No numbers = no proof = sounds like a tutorial.

---

## Fill in your blanks

Open this file, edit each `[BRACKET]` with your real data, then read it aloud.

```text
[Problem context — 1 line, who suffered]:
[Your role — lead / contributor / solo]:
[Stack — 3-5 techs with versions]:
[Hardest technical challenge — 1 line]:
[Outcome metric 1 — users / requests / time]:
[Outcome metric 2 — efficiency / cost / quality]:
```

If you don't have user numbers, use **work numbers**: *"reduced manual data entry by 6 hours per week"*, *"replaced a 200-line spreadsheet workflow"*, *"cut deployment time from 30 minutes to 2"*. Internal-impact numbers are real numbers.

---

## The 5-day practice drill

- [ ] **Day 1 — Read aloud, 10×.** Time each pass. Aim for 28–32 seconds. Over 35 = trim Line 1. Under 25 = add a detail to Line 3.
- [ ] **Day 2 — Record on phone, listen back.** Mark every filler word (*so, basically, like, ya*). Decide which one to kill first.
- [ ] **Day 3 — Three projects, four lines each.** If you have 3 projects, build a 30s pitch for each. Practice switching between them based on the question.
- [ ] **Day 4 — Cold delivery, no script.** Wake up. Glass of water. Deliver all three pitches before reading anything. If you can do it cold, you own it.
- [ ] **Day 5 — Mock with friend.** They ask *"tell me about a project"* in a casual tone. You hit 30 seconds. They ask *"and another one?"*. You switch project. Pass = no overlap, no filler.

---

## Recovery — when you blank

If you blank on the metric, **don't invent**:

> *"The last number I checked was around [round number] — I'll send you the exact figure after."*

If you blank on the technical challenge, **swap to the obvious one**:

> *"The honest hardest part was just getting the schema right — I had three migrations before I settled on the final shape of the [main table]."*

Schema design is always a defensible "hardest part" for a CRUD project. It's not glamorous but it's true.

---

## Variants

=== "30s — Elevator (default)"

    See main script above.

    Use when: coffee chat, recruiter call, meetup intro, networking, the awkward 60 seconds before the panel walks in.

=== "20s — Hyper-compressed"

    > *"I built my college fest registration portal in Laravel — handled 2,000+ paid signups in 3 days, zero double-bookings using DB row locks on the seat table."*

    One sentence. Use when: someone asks while walking somewhere, or when you've already given the 90s pitch and they ask about a second project.

=== "45s — Pitch with hook"

    Add a teaser at the end:

    > *"…and if you want the war story, the most interesting bug was a Razorpay webhook race condition that cost us ₹400 before I caught it. Happy to walk through that."*

    Use when: you sense the interviewer wants more but is being polite about time. The teaser invites them to dig deeper into the bug story (see [Hardest Bug](hardest-bug.md)).

---

## Common traps

| Trap | Why it kills | Fix |
|---|---|---|
| Opens with *"So basically I built…"* | Burns 3 seconds on filler, no hook | Open with the problem someone had |
| Lists every tech in the stack | Sounds like a checklist, no depth signal | 3–5 named techs with versions |
| No metric in the outcome | Sounds aspirational, not shipped | One concrete number minimum |
| *"It was a CRUD app"* | Self-deprecation kills your hook | Every app is CRUD. Name the hard part. |
| Mentions team size but not your role | Interviewer can't tell what YOU did | *"I was lead developer on a team of 4 — owned the backend and DB"* |
| Talks about *what you'd add next* | Pitches the wrong version of the project | Save roadmap for when they ask |

---

## After you drill this

When this drill is **● Drilled**, you have the world's most useful conversational tool — the ability to communicate a project in 30 seconds without losing the thread.

Next drills in this phase:

→ **[The 90-Second Pitch](90-second-pitch.md)** — the default interview version
→ **[Tech Decisions](tech-decisions.md)** — *"why this stack?"*
→ **[Hardest Bug Story](hardest-bug.md)** — the follow-up they always ask

---

*Update your status badge at the top of this page once you can deliver all three of your projects' 30-second pitches cold, on camera, without filler.*
