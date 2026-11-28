---
title: "03 — Revision, Mocks and the Error Log"
sidebar_label: "03 · Revision & Mocks"
description: The spaced-repetition schedule, the mock protocol that actually predicts your exam score, and the error-log system that moves a 95-scorer to 125.
---

# 03 — Revision, Mocks and the Error Log

## Learning Objectives

After this chapter you will be able to run a spaced-repetition schedule over 99 sub-topics without a planner app, execute a mock under exam conditions and extract a usable diagnosis from it, and maintain an error log that converts repeated mistakes into permanent marks.

## 1. Why revision is a system, not a phase

Memory decays predictably. If you study a topic once and never revisit it, by the exam you retain roughly the fraction the curve predicts — for most candidates that is 30–40% of month one's material.

The schedule below is deliberately simple because complicated systems get abandoned.

### 1.1 The five-touch rule

Every sub-topic gets **five touches**, spaced:

| Touch | When | Form | Time |
|---|---|---|---|
| T1 | Day 0 | Read + diagram + explain aloud | as scheduled |
| T2 | Day 1 | 5 closed-book questions | 8 min |
| T3 | Day 7 | 5 questions + redraw the diagram | 10 min |
| T4 | Day 21 | 5 questions, mixed with another block | 10 min |
| T5 | Day 60 | 3 questions, or a line in the formula sheet | 5 min |

Total revision cost per topic: **~35 minutes**. Over 99 sub-topics that is ~58 hours — about 8% of your total study time, and it is the difference between recognising and knowing.

### 1.2 Where the five touches live in the weekly plan

| Slot | Covers |
|---|---|
| Weekday slot 1 (10 min) | T2 — yesterday |
| Weekend slot 5 (60 min) | T3 — last week |
| Every third week | T4 — three weeks back |
| Weeks 27–32 | T5 — everything, via formula sheet + flashcards |

### 1.3 Flashcards: L1 only

Make cards only for `L1` facts: standards numbers, element names, port numbers, protocol layers, orbit altitudes, PON rates. **Never** put an `L4` formula on a card — formulas need paper and a pen, not recall.

Target deck size: **250–300 cards**. If your deck passes 400, you are carding things that belong in the formula sheet.

## 2. The formula sheet

One A4 sheet per block, written **by hand**, rebuilt from memory at weeks 10, 20, 26 and 30.

| Block | Must contain |
|---|---|
| IP | Subnet maths, prefix→hosts table, IPv6 prefix lengths |
| Emerging | Cloud model matrix, SDN/NFV definitions |
| Wireline | E1 frame structure, SS7 layers, SIP methods, IMS elements |
| Transmission | SDH rates, dB budget, DWDM channel count, GPON rates |
| Basic | Sampling, 6.02n+1.76, Carson's rule, Shannon, symbol rate |
| Wireless | Reuse formula, FSPL, LTE/5G element roles, orbit table |
| PM | `(O+4M+P)/6`, variance, float, NPV/IRR |

If you cannot rebuild a sheet in 20 minutes, that block is not revised — it is merely read.

## 3. The mock protocol

A mock is only useful if it is **hostile**. Rules:

1. **Same time of day** as the real exam (morning).
2. **180 minutes, one sitting, no pause.** Phone in another room.
3. **No notes, no tabs, no calculator beyond what the exam allows.**
4. **Apply the three-pass method** and record your pass timings.
5. **Mark it the same day**, and log every wrong answer before you sleep.

### 3.1 What to record after every mock

| Field | Why |
|---|---|
| Attempts `a`, correct `c` | Feeds `net = a(1.25p − 0.25)` |
| Part I score /40 | The disqualification risk |
| Part II score /160 | The merit driver |
| Pass-1 end time | Time-management health |
| Blanks left | Should trend to 0 |
| Wrong by block (7 columns) | Tells you what to study next week |
| Wrong by cause (see §4) | Tells you *how* to study it |

### 3.2 Mock schedule

| Phase | Frequency | Purpose |
|---|---|---|
| P0 | 1 diagnostic | Baseline |
| P1–P2 | 1 per fortnight (sectional) | Gate checks |
| P3 | 1 per week (full) | Integration |
| P4 | 3 per week | Speed and stamina |
| P5 | 2 light mocks | Rhythm, not learning |

### 3.3 Reading your own trend

| Pattern | Diagnosis | Fix |
|---|---|---|
| Score flat, attempts rising | Accuracy problem | Slow pass 1, skip more |
| Score flat, attempts falling | Confidence/time problem | Force pass 3 guesses; drill L4 |
| Part II strong, Part I < 20 | The classic disqualification | Double aptitude to 40 min/day |
| High variance between mocks | Topic coverage gaps, not skill | Mixed sets, not blocked |
| Score rises then plateaus at ~110 | L4 ceiling | Numerical drills, 60 s each |

## 4. The error log

This is the highest-return artefact in the whole course. Format: one line per error, in a spreadsheet or a notebook.

| Column | Example |
|---|---|
| Date | 2027-03-14 |
| Mock / chapter | Mock #5 |
| Block | Transmission |
| Topic | GPON split ratio |
| Question (short) | "Max reach at 1:64 split" |
| My answer | 20 km |
| Correct | 20 km, but power budget failed at 1:128 |
| **Cause** | **Misread the question** |
| Fix | Underline the constraint word before computing |
| Re-test date | 2027-03-21 |

### 4.1 The five causes — and they need different fixes

| Cause | Share of typical errors | Fix |
|---|---|---|
| **Knowledge gap** | ~35% | Go back to the chapter; add to flashcards or formula sheet |
| **Misread question** | ~25% | Underline constraint words; read the last line first |
| **Calculation slip** | ~20% | Unit discipline; estimate before computing |
| **Two-option confusion** | ~15% | Build a comparison table for that exact pair |
| **Time pressure** | ~5% | Attempt strategy, not knowledge |

Most candidates treat every error as a knowledge gap and re-read chapters. That fixes 35% of the problem and leaves the other 65% intact. **Classify before you repair.**

### 4.2 The weekly error audit (30 minutes)

1. Count errors by cause. If "misread" exceeds 20%, your next mock gets a reading protocol, not more study.
2. Re-solve every wrong question **from scratch**, closed book. If it is still wrong, it becomes a flashcard.
3. Delete errors you have now got right twice. A log that only grows becomes noise.
4. Pick the single block with the most errors and give it next week's weekend deep-dive.

## 5. The two-week taper

| Day | Do |
|---|---|
| −14 to −8 | Formula sheets from memory; 2 mocks; error log only |
| −7 to −3 | 1 light mock; flashcards; sleep 7–8 h; fix sleep timing to exam morning |
| −2 | Logistics: admit card, photo ID, centre route, reporting time, what to carry |
| −1 | Formula sheet, 45 minutes maximum. No mock. Early sleep |
| Day 0 | Light breakfast; arrive early; run the three-pass method exactly as rehearsed |

**Taper rule:** nothing new after day −14. New material this late creates interference and anxiety, and contributes approximately zero marks.

## Summary

Retention is engineered, not hoped for: five spaced touches per sub-topic cost 8% of study time and protect the other 92%. Mocks are only diagnostic if they are timed, hostile and marked the same day. The error log works because it separates *what* you got wrong from *why* — and the five causes need five different fixes. The taper exists to make exam morning a repeat of something you have already done thirty times.

## Practical Takeaways

- Five touches per topic: day 0, 1, 7, 21, 60.
- Flashcards for L1 only; formulas go on paper, not cards.
- Rebuild all seven formula sheets from memory at weeks 10, 20, 26, 30.
- Every mock: record `a`, `c`, Part I, Part II, pass-1 time, blanks, wrong-by-block, wrong-by-cause.
- Classify every error into one of five causes before repairing it.
- Nothing new in the last 14 days.
