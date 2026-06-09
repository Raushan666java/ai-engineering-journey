# Roadmap / Prerequisites

[Home](index.md) · [About](about.md) · [Catalog](catalog.md) · [Glossary](glossary.md) · [Contact](contact.md)

---

Twenty phases stack on top of each other. Math is the floor. Agents and production are the roof. Skip ahead if you already know the lower layers, but don't skip and then wonder why something at the top is breaking.

For the interactive clickable graph, visit [aiengineeringfromscratch.com/prereqs.html](https://aiengineeringfromscratch.com/prereqs.html).

---

## Phase Dependency Graph

```mermaid
flowchart TB
  P0["Phase 0 — Setup & Tooling"] --> P1["Phase 1 — Math Foundations"]
  P1 --> P2["Phase 2 — ML Fundamentals"]
  P2 --> P3["Phase 3 — Deep Learning Core"]
  P3 --> P4["Phase 4 — Vision"]
  P3 --> P5["Phase 5 — NLP"]
  P3 --> P6["Phase 6 — Speech & Audio"]
  P3 --> P9["Phase 9 — RL"]
  P5 --> P7["Phase 7 — Transformers"]
  P7 --> P8["Phase 8 — GenAI"]
  P7 --> P10["Phase 10 — LLMs from Scratch"]
  P10 --> P11["Phase 11 — LLM Engineering"]
  P10 --> P12["Phase 12 — Multimodal"]
  P11 --> P13["Phase 13 — Tools & Protocols"]
  P13 --> P14["Phase 14 — Agent Engineering"]
  P14 --> P15["Phase 15 — Autonomous Systems"]
  P15 --> P16["Phase 16 — Multi-Agent & Swarms"]
  P14 --> P17["Phase 17 — Infrastructure & Production"]
  P15 --> P18["Phase 18 — Ethics & Alignment"]
  P16 --> P19["Phase 19 — Capstone Projects"]
  P17 --> P19
  P18 --> P19
```

---

## Prerequisites by Phase

| Phase | Requires | Unlocks |
|-------|----------|---------|
| P0 — Setup | Nothing | Everything |
| P1 — Math | P0 | Everything |
| P2 — ML Fundamentals | P1 | P3+ |
| P3 — Deep Learning | P2 | P4–P9 |
| P4 — Vision | P3 | P12 (Multimodal) |
| P5 — NLP | P3 | P7 (Transformers) |
| P6 — Speech & Audio | P3 | P12 (Multimodal) |
| P7 — Transformers | P5 | P8, P10 |
| P8 — Generative AI | P7 | P12 |
| P9 — Reinforcement Learning | P3 | P10 (RLHF) |
| P10 — LLMs from Scratch | P7 | P11, P12 |
| P11 — LLM Engineering | P10 | P13 |
| P12 — Multimodal AI | P4, P6, P8, P10 | P14+ |
| P13 — Tools & Protocols | P11 | P14 |
| P14 — Agent Engineering | P13 | P15, P17 |
| P15 — Autonomous Systems | P14 | P16, P18 |
| P16 — Multi-Agent & Swarms | P15 | P19 |
| P17 — Infrastructure & Production | P14 | P19 |
| P18 — Ethics & Alignment | P15 | P19 |
| P19 — Capstone Projects | P16, P17, P18 | — |

---

## Built-in Agent Skills

The curriculum ships with two agent skills to help you navigate:

| Skill | What It Does |
|---|---|
| `/find-your-level` | Ten-question placement quiz. Maps your knowledge to a starting phase and produces a personalized path with hour estimates. |
| `/check-understanding <phase>` | Per-phase quiz, eight questions, with feedback and specific lessons to review. |

## Prerequisites for Learners

- You can write code (any language; Python helps).
- You want to understand how AI **actually works**, not just call APIs.
