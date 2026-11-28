---
title: "04 — Mock Blueprint and Score Tracker"
sidebar_label: "04 · Mock Blueprint"
description: How to build realistic full-length mocks from the official weights, and the tracker that turns mock scores into next week's study plan.
---

# 04 — Mock Blueprint and Score Tracker

## Why a blueprint

Most candidates take "mocks" that are really topic tests: 30 questions on one chapter, taken when that chapter is fresh. That measures recognition, not exam readiness.

A usable mock must match the paper's **composition** and its **hostility**: 200 questions across all seven blocks plus aptitude, 180 minutes, no pause, marked the same day.

## 1. The composition blueprint

Build every full mock to this table. It mirrors the official weights.

| Block | Official weight | Questions in a 200-Q mock |
|---|---|---|
| Part I — Aptitude | 20% | **40** |
| IP / Data Networks | 15% | **24** |
| Emerging Technologies | 15% | **24** |
| Wireline Technologies | 15% | **24** |
| Transmission Infrastructure | 15% | **24** |
| Basic Telecommunications | 15% | **24** |
| Wireless Technologies | 15% | **24** |
| Project Management | 10% | **16** |
| **Total** | **100%** | **200** |

### 1.1 Difficulty mix per block

| Level | Share | Where to source it |
|---|---|---|
| L1 recall | 35% (≈8 per 24-Q block) | Chapter quizzes and terminology sections |
| L2 understanding | 30% (≈7) | Chapter "Theory" review questions |
| L3 application | 25% (≈6) | Comparison tables turned into "which of these" items |
| L4 numerical | 10% (≈3) | Chapter worked examples with changed numbers |

If your mock has no L4 numericals, it is easier than the real paper and will flatter you by 10–15 marks.

### 1.2 Sectional mocks (for gates G1 and G2)

| Mock | Composition | Duration | Pass |
|---|---|---|---|
| G1 set | 24 IP + 24 Emerging + 16 PM = 64 | 60 min | 45/64 |
| G2 set | 24 Wireline + 24 Transmission + 24 Basic + 24 Wireless = 96 | 90 min | 60/96 |
| Aptitude set | 40 | 24 min | 30/40 |

## 2. The score tracker

One row per mock. Keep it in a spreadsheet; the point is the trend, not the number.

| Date | Mock | Attempts (a) | Correct (c) | Net | Part I /40 | Part II /160 | Pass-1 end | Blanks | Worst block | Top error cause |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-12-05 | Diagnostic | | | | | | | | | |
| 2027-01-09 | Sectional G1 | | | | | | | | | |
| 2027-02-20 | Sectional G2 | | | | | | | | | |
| 2027-04-10 | Full #1 | | | | | | | | | |

Compute net as:

```
net = c - 0.25 x (a - c)
```

### 2.1 Decision rules from the tracker

| Observation | Action |
|---|---|
| Net rising, Part I falling | Stop; aptitude to 40 min/day for two weeks |
| Net flat, attempts > 180, accuracy < 65% | Enforce pass-1 skipping; 15-second rule |
| Net flat, attempts < 140 | Force pass-3 guessing; drill L4 speed |
| Blanks > 10 at the end | Add a 5-minute "no blanks" sweep to the pass-3 protocol |
| One block below 60% twice | Weekend deep-dive on that block, nothing else |
| Same error cause > 25% of errors | Change the *method*, not the material |

## 3. The five mocks that matter

You do not need 40 mocks. You need five well-diagnosed ones plus volume practice.

| # | When | Purpose | Success criterion |
|---|---|---|---|
| 1 | Week 1 | Honest baseline | Score recorded, error log started |
| 2 | Week 21 | First full paper after all blocks taught | 95+ |
| 3 | Week 26 | Gate G3 | 110+ |
| 4 | Week 30 | Gate G4 | 125+ |
| 5 | Week 32 | Rhythm check, exam-morning timing | 120+, calm |

Between mocks, volume comes from **sectional** sets of 20–40 questions, not full papers. Full papers are diagnostics; sectionals are training.

## 4. Marking discipline

1. Mark immediately, before you look at any explanation.
2. Mark **honestly** — a question you "would have got right if you had read it properly" is wrong. It counts as wrong, and its cause is "misread", not "knowledge".
3. For every wrong answer, write the cause **before** reading the solution. Your first instinct about why you got it wrong is usually the true one.
4. Re-solve wrong questions 48 hours later, closed book. If still wrong, it becomes a flashcard (L1) or a formula-sheet line (L4).
5. Never re-take a mock you have already seen. It measures memory of the mock, not the syllabus.

## 5. Simulating exam-day conditions

| Factor | Do this |
|---|---|
| Time | Start at the same clock time as the real exam (morning shift) |
| Duration | 180 minutes continuous, no pause, no phone |
| Screen | If your mocks are on paper, do at least two on a screen — the real exam is a CBT |
| Calculator | Match the exam's on-screen calculator only |
| Environment | Sit upright at a desk; no music; no snacks |
| Fatigue | Do not "warm up" with 20 easy questions first — start cold, like the real thing |

## Summary

A mock is a measurement instrument, not a study session. Match the official composition, include L4 numericals, mark honestly and immediately, and let the tracker's decision rules choose next week's study. Five well-diagnosed full mocks plus steady sectional volume beat forty casual ones.

## Practical Takeaways

- Build every full mock to the 40/24/24/24/24/24/24/16 blueprint.
- Include ~10% L4 numericals or the mock lies to you.
- `net = c - 0.25(a - c)` after every attempt.
- Five mocks that matter: weeks 1, 21, 26, 30, 32.
- Re-solve errors at +48 hours; promote survivors to flashcards or the formula sheet.
