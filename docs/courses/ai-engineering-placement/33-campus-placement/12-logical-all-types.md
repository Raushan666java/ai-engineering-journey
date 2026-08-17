# Logical Reasoning — All Types Master Reference

> Complete theory for every reasoning type asked in ANY company aptitude round.
> Each type: method → key insight → 3-5 worked examples → common trap.
> Then drill in `practice/logical-100.md`.

---

## Type 1 — Number & Letter Series

### Method

1. Compute differences between consecutive terms.
2. If differences pattern (constant, increasing, alternating), extend.
3. If not, try multiply/add combinations (×2+1, ×3−2, etc.).
4. For letters: convert to positions (A=1 ... Z=26), then treat like a number series.
5. If no pattern, check for two interleaved series (odd positions / even positions).

### Key Insight

80% of series problems are solved by difference-taking. For letters, position numbers remove the "alphabet illusion" — letters are just numbers mod 26.

### Worked Examples

1. 3, 8, 18, 38, 78 → ×2+2 each step → **158**.
2. J, L, O, S, X → +2, +3, +4, +5 → X(24)+6 = 30 → wraps to **D**.
3. 2, 5, 11, 23, 47 → ×2+1 → 47×2+1 = **95**.
4. 1, 4, 9, 16, 25 → squares → **36**.
5. 7, 14, 21, 28 → +7 → **35**.

### Common Trap

Letter series that wrap (Z → A) are missed. Always test mod 26. Alternating series are missed — check odd and even positions separately.

---

## Type 2 — Analogies

### Method

1. Find the relationship in the given pair (synonym, antonym, part-whole, cause-effect, category-member, degree).
2. Apply the SAME relationship to the second pair.
3. Eliminate options that match a different relationship.

### Key Insight

Name the relationship in one phrase ("X is a smaller unit of Y", "X is the tool for Y"). A named relationship eliminates options instantly.

### Worked Examples

1. PEN : WRITE :: knife : ? → cut (tool : action).
2. DOCTOR : HOSPITAL :: teacher : ? → school (person : workplace).
3. WOOL : SHEEP :: silk : ? → silkworm (product : source).
4. EYE : SEE :: ear : ? → hear (organ : function).
5. FISH : SCHOOL :: sheep : ? → flock (animal : group).

### Common Trap

Reverse relationships ("HOSPITAL : DOCTOR" vs "DOCTOR : HOSPITAL") — check direction before picking.

---

## Type 3 — Odd One Out

### Method

1. Identify the common property of most items.
2. Find the one that violates it.
3. Common categories: number properties (prime/composite, square/cube), living/non-living, real/imaginary, odd/even, unit vs group.

### Key Insight

There is usually one clean distinguishing property. If two answers seem odd, find the stronger, more "test-designer" property (e.g., 49 = 7² is the only prime-base square).

### Worked Examples

1. 16, 36, 49, 64, 81 → **49** (only square with a prime base).
2. Elephant, Whale, Giraffe, Camel → **Whale** (marine; the rest land).
3. 2, 3, 5, 7, 9 → **9** (only composite).
4. Lion, Tiger, Fox, Wolf → **Fox**? No — all are canines except Lion/Tiger... proper set: Dog, Fox, Wolf, Lion → **Lion** (only non-canine).
5. 121, 144, 169, 181, 196 → **181** (only non-square).

### Common Trap

Choosing based on a trivial difference (like color) when a structural one exists. Prefer mathematical/logical categories.

---

## Type 4 — Syllogisms

### Method

1. Draw Venn diagrams mentally or on paper.
2. "All A are B" → A circle inside B circle.
3. "Some A are B" → overlapping circles.
4. "No A are B" → disjoint circles.
5. A conclusion is valid ONLY if true in every possible Venn diagram.
6. Classic valid conversions: "All A are B" → "Some B are A"; "Some A are B" → "Some B are A".

### Key Insight

The killer rule: a conclusion must hold in ALL diagrams, not just one. If you can draw one diagram where the conclusion fails, it does NOT follow.

### Worked Examples

1. All flowers are roses. No rose is a lily.
   → I. No flower is a lily ✓ (valid). II. Some roses are flowers ✓ (conversion).
   → **Both follow**.
2. Some pens are pencils. All pencils are books.
   → I. Some books are pens ✓. II. All pens are books ✗ (only "some").
   → **Only I**.
3. All cats are animals. Some animals are dogs.
   → I. Some cats are dogs ✗ (no link). II. All cats are animals ✓ (premise restatement).
   → **Only II**.
4. No apple is a mango. All mangoes are fruits.
   → I. Some fruits are mangoes ✓. II. No apple is a fruit ✗ (apples could still be fruits).
   → **Only I**.
5. Some A are B. Some B are C.
   → I. Some A are C ✗ (no guarantee). → **Nothing follows** (the classic trap).

### Common Trap

"Some A are B, some B are C → some A are C" is INVALID. There is no chain rule for "some". Only "All" chains.

---

## Type 5 — Coding-Decoding

### Method

1. Find the transformation: +1/+k on letters (forward/backward), reversed order, opposite letter (A↔Z), shifted positions, letter → number.
2. Apply it consistently to the target word.
3. If the code is a rearrangement, sort or reverse as shown.

### Key Insight

Opposite letters (A=Z, B=Y ...) is a frequent trick: position pairs sum to 27. Detect +/− shifts first.

### Worked Examples

1. PLAN → QMBO: +1 each letter → TRAIN → **USBJO**.
2. CODE → DPEB (+1): then LOVE → **MPWF**.
3. CAT → DBU (+1): DOG → **EPH**.
4. If A=1, B=2... CAT = 3+1+20 = 24: DOG = 4+15+7 = **26**.
5. REVERSE code: "PALM" → "MLAP": then "RING" → **GNIR**.

### Common Trap

Shifts can be per-letter asymmetric (+1, +2, +3). Check the direction: forward vs backward. Some codes move each letter to the NEXT and previous alternately.

---

## Type 6 — Blood Relations

### Method

1. Build a family tree with symbols: M = male, F = female, = married, / sibling, ↑ parent.
2. Work from the statement outward, drawing one relation at a time.
3. Answer the question from the completed tree.
4. Watch gender words: brother/sister, father/mother, son/daughter, uncle/aunt.

### Key Insight

Draw the tree. Verbal tracking fails beyond 3 relations. Neutral words like "parent", "child", "sibling" keep gender unknown — never assume.

### Worked Examples

1. A is son of B. B is sister of C. C is daughter of D. A → D: B's mother is D (C's mother), so A is D's **grandson**.
2. Pointing to a photo, "She is the daughter of my grandfather's only son" → grandfather's only son = father → daughter of father = **sister**.
3. A is B's mother. C is B's brother. D is C's father → D is B's **father** (and A's husband).
4. X is Y's son. Y is Z's father. Then Z is X's **brother or sister** (sibling).
5. P is Q's sister. Q is R's mother. R is S's son → P is S's **sister-in-law**? No: Q is S's wife... P is S's **sister-in-law** ✓ if Q married S.

### Common Trap

"The only son of my father" is YOU if male, but your BROTHER if you are female. Gender of the speaker matters.

---

## Type 7 — Direction Sense

### Method

1. Draw a mini-map (North up).
2. Walk the path step by step, tracking position.
3. Final answer = straight-line distance (Pythagoras) + net direction from start.

### Key Insight

Cancel opposite moves: 3 km North then 3 km South is a net 0. The remaining displacement is the answer. Diagonal answers use 3-4-5 or 5-12-13 triangles.

### Worked Examples

1. 3 North, 4 East, 3 South → net 4 km **East**.
2. 5 North, 12 East → distance √(25+144) = **13 km**, North-East.
3. 2 East, 5 North, 3 West → net: 1 West? No: 2−3 = 1 West... wait, 2E−3W = 1W, 5N → distance √(1+25) ≈ **5.1 km**, North-West.
4. Walking 8 km North, 6 km West → √(64+36) = **10 km** North-West.
5. Facing East, turn 90° clockwise → **South**.

### Common Trap

Clockwise/anticlockwise from a rotated facing. Redraw the compass each step; never keep the original North in your head.

---

## Type 8 — Seating Arrangement

### Method

1. Linear: fix the most constrained person (extreme ends first).
2. Circular: fix any person, arrange relative positions.
3. Use "immediate right/left" and "second to the left" carefully: they are relative to the person's FACING.
4. Fill in what's definite, leave unknowns, iterate.

### Key Insight

"To the left" depends on facing direction. In linear arrangements facing North: left = your left hand. In circular arrangements facing center: left = anticlockwise.

### Worked Examples

1. P at an extreme end; Q second to the left of R; S exactly between P and R; T immediate right of P → order P, T, Q, S, R → middle is **Q**.
2. Six floors, A 4th, B below A, C top, D above E, F 2nd → top-to-bottom: C(6), D(5), A(4), B(3), F(2), E(1) → 3rd floor = **B**.
3. A, B, C, D in a row: A is to the left of B, C is to the right of B, D at an end → possible: A B C D → middle two B, C.
4. Five people around a circle, X next to Y, Z opposite W → draw and derive.
5. In a row of 40 students, Aman 14th from left, Bhavna 18th from right (i.e., 23rd from left) → between = 23 − 14 − 1 = **8**.

### Common Trap

Counting between positions: subtract 1 (they are not between themselves). "Second to the left" includes the immediate left position, not the second leftmost person overall.

---

## Type 9 — Puzzles & Input-Output

### Method

1. Read the input-output sequence and describe the transformation in ONE sentence (e.g., "smallest number moves one step left per step").
2. Apply the sentence to the new input, step by step.
3. For logic puzzles (who lives where, who owns what): build a table, fill definite cells, eliminate.

### Key Insight

Input-output problems are machine-simulations: the rule is usually monotonic (smallest/largest moves one position per step). Puzzles are constraint-satisfaction: every clue eliminates cells.

### Worked Examples

1. Input: 45 12 78 33 60 → Step 1: 12 45 78 33 60 → Step 2: 12 33 45 78 60 → Step 3: **12 33 45 60 78** (ascending one swap per step).
2. Input: 9 4 7 2 8 → Step 1: 4 9 7 2 8 → Step 2: 2 4 9 7 8 → Step 3: **2 4 7 9 8**.
3. Three friends — A likes tea, B likes coffee, C likes neither → table fill.
4. Five houses with colors, pets, drinks → grid deduction (Einstein-lite).
5. If "Step 3" of 5 3 8 1 4 is 1 3 5 8 4, the rule is smallest-moves-left; find Step 2 → **1 3 5 8 4** wait, that IS step 3; step 2 = 1 3 8 5 4? — solved by tracking.

### Common Trap

Assuming steps do multiple swaps when they do one. Always verify the rule on TWO consecutive steps before extrapolating.

---

## Type 10 — Data Sufficiency

### Method

1. Test statement (I) alone: can we answer?
2. Test statement (II) alone: can we answer?
3. If neither alone: test both together.
4. Answer choices are standard: (A) I alone, (B) II alone, (C) both together, (D) either alone, (E) even both insufficient.

### Key Insight

You do NOT need to solve — only decide solvability. Count equations vs unknowns: n independent linear equations solve n unknowns. One equation, two unknowns = insufficient.

### Worked Examples

1. x from 2x + y = 14 and x − y = 1 → two equations, two unknowns → **both together (C)**.
2. Heaviest of A, B, C, D: I. C > A > B. II. A > D. → C > A > B and A > D → C heaviest → **both together (C)**.
3. Value of x: I. x² = 9. II. x > 0. → I gives ±3; II picks +3 → **both together (C)**.
4. Age of son: I. Father is 30. II. Father is 3× son → **both together (C)**.
5. Profit %: I. CP = 200. II. SP = 260. → either alone? No, both needed → **both together (C)**.

### Common Trap

(x² = 9 → x = ±3) shows why ONE equation may not suffice even when it looks like it does. Watch for sign ambiguity.

---

## Type 11 — Statement & Conclusion / Assumption

### Method

1. Read the statement — it is FACT, accept it.
2. Conclusions must follow NECESSARILY (like syllogisms).
3. Assumptions must be IMPLIED, not stated — remove the assumption and the statement breaks down.
4. Words like "everyone", "always", "must" usually make a conclusion too strong.

### Key Insight

Extreme quantifiers (all, always, every, never) are almost always wrong in conclusion questions. The safe conclusion restates the statement or follows directly.

### Worked Examples

1. "Drink at least 2 litres of water daily." → I. Water is essential for health ✓ (implied). II. Everyone follows the advice ✗. → **Only I**.
2. "The government has banned plastic bags." → Conclusion: The ban aims to reduce pollution ✓ (reasonable). "All shops obey" ✗.
3. "Company X launched a cheaper model." → Assumption: There are customers who will switch ✓ (implied reason).
4. "Students who sleep 8 hours score better." → Conclusion: Sleep improves scores ✓ (correlation direction intended).
5. "The train was late because of fog." → Conclusion: Fog delays trains ✓. "The train is always late" ✗.

### Common Trap

Distinguishing assumption from conclusion: assumption = hidden premise needed; conclusion = what follows. "Everyone/always" traps — avoid extremes.

---

## Type 12 — Figure Series & Non-Verbal

### Method

1. Number the figures; compare consecutive pairs.
2. Identify the transform: rotation (90°/180°), reflection, addition/removal of parts, movement of one element, shading change.
3. Apply the SAME transform to the last figure for the next one.

### Key Insight

Most figure series rotate one element and/or move another. Describe the change in words ("the dot moves one corner clockwise, the arrow flips"). Sequence = repeat of the same operation.

### Worked Examples

1. Arrow rotates 90° clockwise each step → next = rotated 90° from last.
2. Circle gains 1 line each step → next has 5 lines.
3. Shaded triangle alternates top/bottom → next = bottom.
4. Two elements: dot moves clockwise, square grows → both rules continue.
5. Reflection series: figure flips horizontally each step → next = flipped.

### Common Trap

Combining two simultaneous rules (rotation + shading change) — solve each element separately, then recombine.

---

## Speed Memory Card

```
Series: differences first, then multiply-add
Letters: A=1..Z=26, opposite pairs sum to 27
Syllogisms: must hold in ALL diagrams; "some" never chains
Blood: draw the tree, gender from words only
Direction: cancel opposite moves, Pythagoras the rest
Seating: facing matters; between = positions - 1
Input-output: one monotonic swap per step
Data sufficiency: equations vs unknowns
Conclusions: extreme words (all/always) = usually wrong
Figures: one transform per element, continue both
```