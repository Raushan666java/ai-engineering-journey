---
title: "02 — The 32-Week Plan (Dec 2026 → July 2027)"
sidebar_label: "02 · 32-Week Plan"
description: Week-by-week study plan for the BSNL SET (Telecom) 2027 exam, with a daily template, weekly gates, and compressed 12-week and 20-week variants if the notification lands late.
---

# 02 — The 32-Week Plan (Dec 2026 → July 2027)

## Assumptions

- Exam: **~July 2027** (2026 exam was 5 July).
- Notification: **~late Jan / early Feb 2027** (2026 was 29 Jan).
- Available time: **~3 hours on weekdays, ~6 hours on one weekend day** = 21–24 h/week ≈ **700 hours** over 32 weeks. If you have less, use the 20-week variant at the end — do not compress the phases unevenly.

## The governing principle

**Order the blocks by marks-per-hour, not by syllabus order.**

1. First take the 64 marks a CSE graduate can own cheaply (IP, Emerging, PM).
2. Then the 72 telecom marks, hardest last, when your study habit is established and the exam is close enough to retain them.
3. Revision is not a phase at the end; it is a weekly slot from week 3.

## Phase map

| Phase | Weeks | Focus | Outcome |
|---|---|---|---|
| **P0 Setup** | 1–2 | Paperwork, diagnostic, tooling | Baseline score, error log live |
| **P1 CS-native** | 3–10 | IP/Data, Emerging, PM (64 marks) | 45/64 on mixed set |
| **P2 Telecom core** | 11–20 | Wireline, Transmission, Basic, Wireless (96 marks) | 60/96 on mixed set |
| **P3 Integration** | 21–26 | Full mocks, weak-block repair | 110/200 timed |
| **P4 Sharpening** | 27–30 | Speed, L4 drills, second-pass accuracy | 125/200 twice |
| **P5 Taper** | 31–32 | Formula sheet, light mocks, sleep | Peak on exam day |

---

## Week-by-week

### P0 — Setup (Weeks 1–2)

| Week | Technical | Aptitude | Gate |
|---|---|---|---|
| 1 | Read `00-exam-decode.md`; take a **diagnostic full mock** (unprepared, timed, 180 min) | 20 min/day quant | **G0:** diagnostic done, score recorded, error log created |
| 1 | Paperwork: mark-sheet percentage, full-time-mode proof, **Central-format SC certificate** application started | 20 min/day | Documents folder created |
| 2 | `ch01` IP networks — models, addressing | 20 min/day | 80% on ch01 quiz |
| 2 | Subnetting drills (30 questions) | Reasoning 20 min/day | 25/30 subnetting |

**Do not skip the diagnostic.** An honest 60/200 baseline is data; a flattering 90 you guessed at is noise.

### P1 — CS-native 64 marks (Weeks 3–10)

| Week | Technical (90 min/day) | Second block (45 min/day) | Aptitude (20 min/day) | Gate |
|---|---|---|---|---|
| 3 | `ch01` finish: IPv6, NAT/DHCP/DNS, fragmentation | Subnetting: 20 timed questions | Quant | 40/40 subnetting set at 85% |
| 4 | `ch02` routing: static, RIP, OSPF, BGP | 20 mixed IP questions | Quant | Explain OSPF vs BGP aloud in 3 min |
| 5 | `ch02` switching, VLAN, STP, **MPLS** | MPLS label drills | Reasoning | 80% on ch02 quiz |
| 6 | `ch03` firewalls, IDS/IPS, attacks, TLS/IPsec | 20 mixed questions | Reasoning | 80% on ch03 quiz |
| 7 | `ch03` caching, CDN, proxy; **IP block revision** | 30-question IP mock | English | **IP block ≥ 18/24** |
| 8 | `ch04` IoT architecture, M2M, LPWAN, cloud models | 20 questions | English | 80% on ch04 quiz |
| 9 | `ch04` virtualisation, data centres; `ch05` SDN planes, OpenFlow | 20 questions | Quant | 80% on ch05 quiz (SDN part) |
| 10 | `ch05` NFV/MANO, slicing, blockchain, AI-in-telecom; `ch15` PM start (selection methods, NPV/IRR) | PM numericals | Quant | **G1: 45/64** on mixed IP+Emerging+PM |

### P2 — Telecom core 96 marks (Weeks 11–20)

| Week | Chapter | Drill focus | Gate |
|---|---|---|---|
| 11 | `ch15` finish: WBS, Gantt, **PERT, CPM, crashing** | 25 PERT/CPM numericals | PM block ≥ 13/16 |
| 12 | `ch06` PSTN, PCM/E1, NGN architecture | E1 bit-rate and timeslot drills | 80% ch06 quiz (part 1) |
| 13 | `ch06` SS7 stack, SIP, Megaco, call routing | SIP method/response flashcards | 80% ch06 quiz (part 2) |
| 14 | `ch07` IMS elements, registration, VoLTE | Draw IMS call flow from memory | 80% ch07 quiz (part 1) |
| 15 | `ch07` xDSL, cable, broadband, FTTx access | Comparison table from memory | **Wireline block ≥ 18/24** |
| 16 | `ch08` fibre physics, loss, dispersion, SDH rates | SDH rate + dB budget drills | 80% ch08 quiz (part 1) |
| 17 | `ch08` DWDM, OTN, protection, link budget | 20 link-budget numericals | 80% ch08 quiz (part 2) |
| 18 | `ch09` PON, GPON/EPON/XGS-PON, FTTH, OLT/ONT | Split-ratio and power-budget drills | **Transmission ≥ 18/24** |
| 19 | `ch10` signals, sampling, PCM, SNR, Shannon; `ch11` multiplexing | 6.02n+1.76, Carson's rule drills | 80% ch10–11 quiz |
| 20 | `ch11` multiple access, duplexing, spectrum management; **G2 mixed set** | Mixed 96-mark set | **G2: 60/96** |

### P3 — Integration (Weeks 21–26)

| Week | Focus | Mock | Gate |
|---|---|---|---|
| 21 | `ch12` cellular concept, reuse arithmetic, GSM architecture | Mock #2 (full, timed) | Reuse-distance numericals 10/10 |
| 22 | `ch12` GSM channels, GPRS/EDGE, UMTS/WCDMA, HSPA | Mock #3 | 80% ch12 quiz |
| 23 | `ch13` LTE/EPS, EPC elements, VoLTE, OFDMA vs SC-FDMA | Mock #4 | 80% ch13 quiz (part 1) |
| 24 | `ch13` 5G NR, numerology, SBA core, slicing, MEC, SA/NSA | Mock #5 | 80% ch13 quiz (part 2) |
| 25 | `ch14` antennas, MIMO, propagation, FSPL | Mock #6 | FSPL numericals 10/10 |
| 26 | `ch14` satellite, backhaul; **weak-block repair** | Mock #7 | **G3: 110/200** |

### P4 — Sharpening (Weeks 27–30)

| Week | Focus | Volume |
|---|---|---|
| 27 | L4 numerical sweep: subnetting, PCM, modulation, link budget, SDH/DWDM, PERT | 100 numericals, timed at 60 s each |
| 28 | Error-log review: every wrong answer re-solved from scratch | 2 mocks + full log audit |
| 29 | Speed work: Part I in 22 minutes, Part II pass 1 in 60 minutes | 3 mocks |
| 30 | Full-paper accuracy: attempt 160 at 80%+ | 3 mocks — **G4: 125/200 twice** |

### P5 — Taper (Weeks 31–32)

| Week | Do | Do not |
|---|---|---|
| 31 | Formula sheet read daily; 2 light mocks; sleep schedule fixed | Start any new topic |
| 32 | One mock at exam start time (morning); revise error log only; logistics: admit card, ID, centre route | Cram, pull all-nighters, or change strategy |

---

## The daily template

**Weekday (3 h):**

| Slot | Minutes | Activity |
|---|---|---|
| 1 | 10 | Yesterday's recall — 5 questions from yesterday's chapter, closed book |
| 2 | 75 | New concept: read chapter section, draw the diagram, explain aloud |
| 3 | 45 | Practice questions on today's topic, timed |
| 4 | 20 | Aptitude (quant or reasoning, alternating) |
| 5 | 15 | Error log: write today's wrong answers with the reason |
| 6 | 15 | Flashcards: L1 facts from all previous blocks |

**Weekend (6 h):**

| Slot | Minutes | Activity |
|---|---|---|
| 1 | 30 | Weekly recall test on the week's chapters |
| 2 | 120 | Weakest topic deep-dive |
| 3 | 60 | Mixed 40-question set across all studied blocks |
| 4 | 60 | Aptitude full section, timed |
| 5 | 60 | Revision of two older blocks (spaced) |
| 6 | 30 | Error-log audit and plan for next week |

## Weekly rhythm rules

1. **Every week ends with a 40-question mixed set.** Mixed retrieval beats blocked practice; the paper does not ask questions in chapter order.
2. **Every third week, re-test week 1's material.** This is the forgetting curve, enforced.
3. **A gate that fails is a repeat, not a shrug.** If G1 returns 40/64, repeat week 9–10 before starting P2.
4. **Log hours.** If you are below 18 h/week for two consecutive weeks, switch to the 20-week variant and re-plan rather than pretending.

---

## Compressed variants

### 12-week variant (if you start in March 2027)

| Weeks | Content |
|---|---|
| 1–2 | `00`, `ch01`, subnetting drills |
| 3–4 | `ch02`, `ch03` |
| 5 | `ch04`, `ch05` |
| 6 | `ch15` PM (full) |
| 7 | `ch06`, `ch07` |
| 8 | `ch08`, `ch09` |
| 9 | `ch10`, `ch11` |
| 10 | `ch12`, `ch13` |
| 11 | `ch14` + weak repair |
| 12 | 4 mocks + error log + taper |

This variant assumes 5–6 h/day. It drops L4 depth on Transmission and Wireless to L2/L3 — accept ~110 target instead of 125.

### 20-week variant (if you start in February 2027)

Merge P1 into 6 weeks (drop the second IP week, compress Emerging to 1.5 weeks), P2 into 8 weeks, P3 into 4 weeks, P4 into 2 weeks. Keep all gates; drop the P5 taper to 3 days.

---

## What to do if the 2027 notification changes the pattern

The 2026 pattern (200 Q, 180 min, −0.25, two parts) is what this plan assumes. If the 2027 PDF differs:

| Change | Response |
|---|---|
| Duration drops to 150 min | Re-do the time budget in `00-exam-decode.md`; cut per-question time by 17%; increase mock frequency |
| Negative marking becomes −0.33 or −1 | Stop blind guessing; recompute break-even (`p = penalty/(1+penalty)`) |
| A new block appears | Map it to the closest existing chapter, then patch with a targeted week |
| Weights shift | Re-sort the phase order by marks-per-hour before continuing |
| Interview added | Add a 2-week viva prep phase after P4 (rare for BSNL technical posts) |

## Summary

The plan spends its first ten weeks on the 64 marks a CSE graduate can take cheaply, then buys the 72 telecom marks with the habit already built. Gates are pass/fail, not advisory. L4 numericals get 30% of the time because they are where the merit list is decided. Revision is weekly from week 3, and the last two weeks add nothing new.

## Practical Takeaways

- Print the phase map and tick weeks; a visible streak is the cheapest motivation available.
- Never start a new chapter while the previous chapter's quiz is below 80%.
- Keep the diagnostic score visible — it is the only honest measure of progress.
- If you fall more than two weeks behind, switch variants instead of skipping gates.
