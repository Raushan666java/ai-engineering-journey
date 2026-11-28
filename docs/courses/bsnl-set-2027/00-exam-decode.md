---
title: "00 - Exam Decode: How the SET Paper Is Actually Won"
sidebar_label: "00 - Exam Decode"
description: Scoring mathematics, the three-pass attempt method, negative-marking break-even, and the time budget that turns 200 questions into a winnable game.
---

# 00 - Exam Decode: How the SET Paper Is Actually Won

## Learning Objectives

After this chapter you will be able to compute the net score of any attempt pattern before you sit the exam, choose an attempt strategy that maximises expected marks under -0.25 marking, run a three-pass sweep inside a 180-minute budget, and recognise the four difficulty levels the paper uses so that "tough preparation" means something specific.

## Why this chapter comes first

Most candidates study for eight months and then lose 15-20 marks to bad attempt strategy in the last 40 minutes. The paper is not a knowledge test with a time limit; it is a **resource-allocation problem** where knowledge is only one input.

Three numbers define the game:

- **200 questions, 200 marks, 180 minutes** -> 54 seconds per question on average.
- **-0.25 per wrong answer** -> four wrong answers cost one mark.
- **Two parts with separate floors** -> Part I (40 marks) can disqualify you even if Part II is excellent.

## 1. The arithmetic of net score

Let `a` = questions attempted, `p` = accuracy (fraction correct). Then:

```
correct   c = a x p
wrong     w = a x (1 - p)
net score   = c - 0.25w
            = a x (1.25p - 0.25)
```

That single formula decides your strategy. Read what it says.

### 1.1 What each attempt pattern scores

| Attempts | Accuracy | Correct | Wrong | **Net / 200** |
|---|---|---|---|---|
| 200 (everything) | 60% | 120 | 80 | **100** |
| 200 | 68% | 136 | 64 | **120** |
| 200 | 75% | 150 | 50 | **137.5** |
| 180 | 70% | 126 | 54 | **112.5** |
| 180 | 75% | 135 | 45 | **123.75** |
| 160 | 80% | 128 | 32 | **120** |
| 160 | 85% | 136 | 24 | **130** |
| 140 | 85% | 119 | 21 | **113.75** |
| 140 | 90% | 126 | 14 | **122.5** |
| 120 | 95% | 114 | 6 | **112.5** |

**Two different roads to 120:**

- Attempt **everything** at 68% accuracy.
- Attempt **160** at 80% accuracy.

The second is easier to control. It is also the strategy this course trains: **skip ruthlessly in pass 1, convert in pass 2.**

Notice the trap in the last row: a candidate who answers only what they are sure of, at 95% accuracy, still scores 112. **Timidity is as expensive as guessing.** The optimum is not "attempt less" - it is "attempt more, but only where you have eliminated an option."

### 1.2 The negative-marking break-even (most candidates get this wrong)

A blind guess on a 4-option question:

```
EV = 0.25 x (+1) + 0.75 x (-0.25)
   = 0.25 - 0.1875
   = +0.0625 marks
```

**A blind guess is worth +0.06 marks, not negative.** The break-even accuracy is:

```
p x 1 = (1 - p) x 0.25
p = 0.25 / 1.25 = 0.20
```

So with -0.25 on +1:

| Situation | Accuracy | EV per question | Verdict |
|---|---|---|---|
| No idea, 4 options | 25% | **+0.06** | Guess. It is free money. |
| Eliminated 1 option | 33% | **+0.17** | Definitely guess |
| Eliminated 2 options | 50% | **+0.38** | Always guess |
| Two options look equally right | 50% | +0.38 | Guess |
| **You think you know** but are 20% confident | 20% | 0.00 | Indifferent |

**Consequences:**

1. **Never leave a question blank at the end of the paper.** If you cannot eliminate anything, still mark an option. Over 30 blanks that is ~+2 marks, and over a whole paper it can be the difference between 118 and 120.
2. **Do not spend 90 seconds deciding between two options.** Pick one and move. The information you gain by staring is worth less than the two questions you could have read.
3. **The variance caveat:** if you are sitting at 118 and the cutoff is 120, a blind-guess strategy adds noise as well as expectation. In the last five minutes, guess only where you eliminated something. Everywhere else, take the free +0.06 earlier in the paper when you still have time to recover.

### 1.3 The Part I trap

The SC floor is 14/40 in Part I. That sounds trivial. It is not, because:

- Part I is **only 20% of the marks but 40 separate questions** - the same reading cost as 40 technical questions.
- Candidates who "focus on technical" routinely land at 12-16/40 and get disqualified with a 130/160 technical score.

**Rule: Part I is never sacrificed.** Twenty minutes a day, every day, for eight months. It is the cheapest 30 marks in the paper.

## 2. The time budget

| Segment | Time | Questions | Per question |
|---|---|---|---|
| Part I - aptitude | 0:00 - 0:24 | 40 | 36 s |
| Part II - pass 1 (sure shots) | 0:24 - 1:35 | ~70-90 | ~50 s |
| Part II - pass 2 (one-step) | 1:35 - 2:42 | ~50-60 | ~65 s |
| Pass 3 - flags, guesses, review | 2:42 - 3:00 | remainder | 20 s |

Reserve the final **18 minutes** as a hard block. If you are still solving new questions at minute 160, you have already lost the paper to time management, not to knowledge.

## 3. The three-pass method

### Pass 1 - Harvest (0:24 -> 1:35)

Read each question and make one of three decisions in under 15 seconds:

| Decision | Criteria | Action |
|---|---|---|
| **Answer** | You know it cold, or it is a one-step recall | Answer, move on |
| **Flag-1** | You know the concept but it needs 30-60 s of work | Mark, skip |
| **Flag-2** | You recognise the topic but not the answer | Mark, skip |

Do not solve anything in pass 1 that takes more than 20 seconds. The point of pass 1 is to **bank the easy 90 marks** and to map the paper.

### Pass 2 - Convert (1:35 -> 2:42)

Go back to Flag-1 only. These are the questions where your knowledge converts to marks at the best rate: subnetting, PERT/CPM, modulation index, GPON split ratios, IMS element identification. Work them properly. Flag-2 stays untouched.

### Pass 3 - Harvest the residue (2:42 -> 3:00)

For every Flag-2 and every blank:

1. Eliminate what you can (even one option).
2. Mark an answer - **never leave a blank**.
3. Do not re-read solved questions. Re-reading is the most expensive habit in the exam hall.

## 4. What "tough level" preparation means

The 2026 paper was rated **moderate**: technical moderate, aptitude easy-to-moderate. Preparing to a *moderate* standard leaves you with no margin. Prepare to a harder standard than the paper, using four difficulty levels:

| Level | Question style | Example | Share of paper |
|---|---|---|---|
| **L1 Recall** | One fact, one answer | "GPON downstream rate?" | ~35% |
| **L2 Understanding** | Why/what-happens-if | "Why is OFDMA used in the 5G downlink?" | ~30% |
| **L3 Application** | Apply a rule to a case | "Given a /26, how many usable hosts?" | ~25% |
| **L4 Numerical** | Compute | "Link budget with 3 dB margin, 0.35 dB/km fibre, 40 km" | ~10% |

**Tough preparation = make L1 automatic, L2 conceptual, L3 drilled, L4 practised.** Most candidates over-invest in L1 (reading notes) and never practise L4, which is where the top of the merit list separates.

### 4.1 The L4 topics that appear as numericals

These are the calculation families worth drilling until they are reflex:

| Topic | Typical calculation |
|---|---|
| Subnetting | Network/broadcast/usable hosts for a given prefix |
| Modulation | Modulation index, bandwidth by Carson's rule, bit rate vs symbol rate |
| PCM | Sampling rate, bit rate, quantization SNR (6.02n + 1.76 dB) |
| Link budget | Received power = Tx - losses + gains - margin |
| Fibre | Loss over distance, dispersion limit, DWDM channel count from band and spacing |
| PERT/CPM | Expected time, slack, critical path, crash cost |
| Antenna | Gain in dBi from aperture, free-space path loss |
| Erlang/capacity | Traffic per subscriber, trunk count (awareness level) |

## 5. The strategy in one page

1. **Target 120 net, floor 110.** Not 90 - 90 only qualifies.
2. **Attempt ~160 at 80%**, not 120 at 95%.
3. **Never leave a blank.** Blind guessing is +EV at -0.25.
4. **Part I is untouchable:** 24 minutes, 30+ marks.
5. **Three passes, hard stops at 1:35 and 2:42.**
6. **Prepare to L4** on the eight calculation families above.
7. **Log every error.** The error log, not the syllabus, is what moves you from 95 to 125.

## Summary

The SET paper rewards a specific behaviour: fast reading, ruthless skipping, arithmetic honesty, and a refusal to leave marks on the table. The scoring formula `net = a(1.25p - 0.25)` shows that both timidity and recklessness lose; the optimum is broad attempts with option elimination. Part I carries a disqualification risk out of all proportion to its 40 marks. And "tough preparation" is not more reading - it is converting recall into application and numerical speed.

## Practical Takeaways

- Compute your own net score after every mock with `net = a(1.25p - 0.25)`; track `a` and `p` separately.
- Blind guessing is +0.06 EV; eliminate-one-option guessing is +0.17. Act on that.
- Reserve 18 minutes; stop new solving at 160.
- Drill the eight L4 calculation families until each takes under 60 seconds.
- Keep a daily 20-minute aptitude block from day one.

## Chapter Quiz

**Q1.** You attempt 150 questions and get 120 right. Your net score out of 200 is:
(a) 120 (b) 112.5 (c) 127.5 (d) 105
**Answer: (b).** 120 - 0.25x30 = 112.5.

**Q2.** With +1/-0.25 marking and four options, the minimum accuracy at which a guess is worth attempting is:
(a) 25% (b) 20% (c) 33% (d) 50%
**Answer: (b).** Break-even p = 0.25/1.25 = 0.20.

**Q3.** An SC candidate scores 130/160 in Part II and 12/40 in Part I. The outcome is:
(a) Selected on merit (b) Disqualified - Part I floor not met (c) Waitlisted (d) Re-exam
**Answer: (b).** 35% of 40 = 14 is mandatory in each part.

**Q4.** The three-pass method's first pass should end at approximately:
(a) 60 minutes (b) 95 minutes (c) 120 minutes (d) 150 minutes
**Answer: (b).** 0:24 + ~71 minutes of harvesting.

**Q5.** Which preparation choice most improves a 110-scorer's ceiling?
(a) Re-reading all notes twice (b) Drilling L4 numerical families (c) Memorising more acronyms (d) Attempting fewer questions
**Answer: (b).**

## Exercises

1. Take any 40-question aptitude set. Record `a` and `p` and compute net. Repeat weekly; plot the trend.
2. Build a one-page table of the eight L4 families with the formula for each, from memory, then check it against the chapters.
3. Simulate a paper where you answer 160 questions at 80% and 200 at 68%. Which is more robust to a harder paper, and why?
4. Write your personal attempt rules (maximum 8 lines) and tape them to your desk. You will read them on exam morning.
