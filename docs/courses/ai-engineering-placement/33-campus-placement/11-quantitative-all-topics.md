# Quantitative Aptitude — All Topics Master Reference

> Complete theory for every quant topic asked in ANY company aptitude round.
> Each topic: formula box → key insight → 3-5 worked examples → common trap.
> Memorize the formula box, understand the insight, then drill in `practice/quant-100.md`.

---

## Topic 1 — Percentages

### Formula Box

```
Percentage change = (change / original) x 100
Net change for a% then b% = a + b + (ab/100)   [with signs]
x% of y = y% of x
Increase by r%  =>  multiply by (100 + r)/100
Decrease by r%  =>  multiply by (100 - r)/100
Value after n successive changes of r% = P x (1 ± r/100)^n
```

### Key Insight

Percentages are just fractions with denominator 100. Always convert to multiplication factors:
+20% = ×1.2, −20% = ×0.8, +12.5% = ×1.125. Successive percentage changes multiply the factors — never add them.

### Worked Examples

1. A number increased by 20% then decreased by 20%. Net change?
   → Factor = 1.2 × 0.8 = 0.96 → **−4%**.
2. If 40% of a number is 112, the number is 112 × 100/40 = 280. 65% of 280 = 182.
3. Population grows 10%/yr; now 1,21,000. Two years ago: 1,21,000 / 1.1² = 1,21,000 / 1.21 = **1,00,000**.
4. A's income is 25% more than B's. B is less by 25/125 × 100 = **20%**, not 25%.
5. 30% failed English, 25% failed Maths, 12% both. Passed both = 100 − (30 + 25 − 12) = **57%**.

### Common Trap

"Percent more" vs "percent less" asymmetry: if A is r% more than B, B is (r/(100+r))×100% less than A.

---

## Topic 2 — Profit, Loss & Discount

### Formula Box

```
Profit % = (SP - CP)/CP x 100      Loss % = (CP - SP)/CP x 100
SP = CP x (1 ± p/100)
Discount is always on Marked Price (MP): SP = MP x (1 - d/100)
Successive discounts d1, d2 => single discount = d1 + d2 - (d1 d2)/100
Profit with discount: 100 -> 100+r (markup) -> (100+r)(100-d)/100
```

### Key Insight

Chain everything through 100: set CP = 100, apply markup, apply discount, read off profit %. No variables needed.

### Worked Examples

1. CP 800, SP 960 → profit 160 → **20%**.
2. Loss 15%, SP 1,530 → CP = 1530/0.85 = **1,800**.
3. 12% profit after 20% discount; CP 550 → SP = 616, MP = 616/0.8 = **770**.
4. Cost 30 & 45 per kg mixed 2:1 → 3 kg cost 105, sells at 40/kg = 120 → profit 15/105 = **14.28%**.
5. Markup 30%, discount 10% → 100 → 130 → 117 → **17%**.

### Common Trap

Discount is on MP, never on CP. "Profit on cost" vs "profit on selling price" differ; aptitude usually means on cost.

---

## Topic 3 — Simple & Compound Interest

### Formula Box

```
SI = P R T / 100        Amount = P + SI
CI = P x (1 + R/100)^T - P
CI - SI (2 years) = P x (R/100)^2
CI - SI (3 years) = P x (R/100)^2 x (3 + R/100)
Doubling time (SI) = 100/R years
```

### Key Insight

SI grows linearly, CI grows exponentially. For 2 years, the difference is exactly the interest-on-interest: P(R/100)². At 10%, CI ≈ SI + 1% of principal over 2 years.

### Worked Examples

1. 6,000 → 8,400 in 4 yr → SI = 2,400, per year 600 → rate = 600/6000 = **10%**.
2. CI − SI for 10,000 at 5% for 2 yr = 10,000 × (0.05)² = **25**.
3. Doubles in 8 yr → R = 12.5%. To quadruple, interest = 3P → t = 300/12.5 = **24 yr**.
4. Amount 9,261 at 10% for 3 yr → P = 9261/1.331 = **7,000**.
5. SI on 9,000 at 12% earning 4,320 → t = 4320/(9000×0.12) = **4 yr**.

### Common Trap

CI−SI formulas only apply when compounding yearly. Read "compounded half-yearly" → halve rate, double periods.

---

## Topic 4 — Time, Speed & Distance

### Formula Box

```
Speed = Distance / Time        km/hr -> m/s: x 5/18
Average speed (equal distances a, b) = 2ab/(a+b)   [harmonic mean]
Relative speed (same direction) = difference
Relative speed (opposite direction) = sum
Train crossing: (train + platform) length / speed
Boats: downstream = b + s, upstream = b - s
```

### Key Insight

Always convert to consistent units first (m/s or km/hr). For trains, the "distance" is always the total length that must pass a point — train only, or train + platform.

### Worked Examples

1. Train 180 m + platform 320 m = 500 m in 25 s → 20 m/s → **72 km/hr**.
2. 60 km at 12, 60 km at 20 → 2×12×20/32 = **15 km/hr**.
3. 150 + 170 = 320 m; relative speed 90 km/hr = 25 m/s → 320/25 = **12.8 s**.
4. 36 km in 3 h → 12 km/hr; +3 = 15 → 36/15 = **2.4 h**.
5. Average of 30 and 20 over same road → 2×30×20/50 = **24 km/hr**.

### Common Trap

Average speed is NOT the arithmetic mean unless times are equal. Equal distances → harmonic mean.

---

## Topic 5 — Time & Work

### Formula Box

```
Rate = 1/days. Combined rate = sum of rates.
Together: ab/(a+b) days for A=a, B=b
A + B in t days, A alone a => B alone = at/(a - t)
Men x days: M1 D1 = M2 D2 (same work)
Work done = rate x time; remaining fraction x alone-time
```

### Key Insight

Always convert to per-day fractions (1/10, 1/15). The fraction of work done = rate × days. Leftover work divided by the remaining worker's rate gives the extra days.

### Worked Examples

1. A 10, B 15 → 10×15/25 = **6 days**.
2. A+B 12, A 18 → 1/12 − 1/18 = 1/36 → **36 days**.
3. 20 men × 12 days = 240 man-days; 240/8 = **30 men**.
4. 4 days together = 4×(1/20+1/30) = 1/3; remaining 2/3 by A → 2/3 × 20 = **13.33 days**.
5. 15 workers × 24 = 360; 360/18 = **20 workers**.

### Common Trap

Forgetting to subtract completed work. Always compute the fraction remaining, then divide by the remaining worker's rate.

---

## Topic 6 — Pipes & Cisterns

### Formula Box

```
Fill rate = 1/t (t = fill time), Empty rate = 1/t (t = empty time)
Both open: net = fill - empty; time = 1/net
Leak slower fill: fill time with leak = 1/(1/t1 - 1/t2)
```

### Key Insight

Same math as time & work, but emptying pipes have NEGATIVE rates. If net rate is negative, the tank empties — the answer should alarm you.

### Worked Examples

1. Fill 12 h, empty 18 h → net = 1/12 − 1/18 = 1/36 → **36 h**.
2. A 20 min, B 30 min → 20×30/50 = **12 min**.
3. Fill 10 h, with leak 15 h → leak = 1/10 − 1/15 = 1/30 → leak alone empties in **30 h**.
4. Fill 16 h, leak 24 h → net 1/16 − 1/24 = 1/48 → **48 h**.
5. A 30 min, B 45 min; A closed after 10 min: filled = 10×(1/30+1/45) = 5/9; remaining 4/9 by B → 4/9 × 45 = **20 min**.

### Common Trap

A pipe that empties in 24 h has rate 1/24 but subtracts. Getting a fill answer longer than either pipe alone usually signals a leak present.

---

## Topic 7 — Ratio & Proportion

### Formula Box

```
a:b, b:c  =>  a:b:c by unifying b:  a:b = am:bm, b:c = bn:cn => a:b:c = am:bn:cn (lcm of b parts)
a/b = c/d  =>  ad = bc
Division in ratio a:b => parts a/(a+b) and b/(a+b) of total
```

### Key Insight

Unify by scaling to the common term's LCM. Age-ratio problems: add the same number to both sides of the ratio, cross-multiply, solve for k.

### Worked Examples

1. a:b = 4:5, b:c = 3:7 → a:b = 12:15, b:c = 15:35 → **a:c = 12:35**.
2. A:B = 2:3, B:C = 4:5 → A:B:C = 8:12:15, total 35 → C = 4900 × 15/35 = **2,100**.
3. Ages 4:7, after 6 yr 5:8 → (4k+6)/(7k+6) = 5/8 → 32k+48 = 35k+30 → k=6 → ages **24, 42**.
4. Ratio 5:7, subtract 9 → 4:6 → (5k−9)/(7k−9) = 4/6 → 30k−54 = 28k−36 → k=9 → smaller = **45**.
5. Two numbers ratio 5:7, difference 12 → 2k = 12 → k = 6 → **30 and 42**.

### Common Trap

Scaling ratios: you may multiply both sides by the same factor but never add/subtract within the ratio itself.

---

## Topic 8 — Partnership

### Formula Box

```
Profit share ∝ Capital x Time
A:B = (C1 x T1) : (C2 x T2)
```

### Key Insight

"Capital × time" is the whole game. If a partner withdraws capital mid-year, use the months actually invested.

### Worked Examples

1. 60,000 for 8 months vs 90,000 for 12 → 480,000 : 1,080,000 = 4:9 → A = 26,000 × 4/13 = **8,000**.
2. 24,000 × 8 : 30,000 × 6 = 192,000 : 180,000 = 16:15 → B = 15,500 × 15/31 = **7,500**.
3. A double after 3 months vs B same whole year: A × 12 : B × 12 → equal only if same capital.
4. A 20,000 for 12, B 30,000 for 8 → 240,000:240,000 = 1:1 → profit split **50:50**.
5. Ratio of capitals 3:5 for equal time → profit ratio 3:5.

### Common Trap

Forgetting time when capitals are equal but durations differ. Always write capital × time.

---

## Topic 9 — Averages

### Formula Box

```
Average = sum / count
If each item changes by c, average changes by c
Replace value: new avg = old avg + (new - old)/n
Combined average of groups a (n1 items) and b (n2 items) = (n1 a + n2 b)/(n1 + n2)
```

### Key Insight

Track the TOTAL, not the average. Adding/removing one item: adjust the total and divide by the new count.

### Worked Examples

1. 15 numbers avg 40; each +4 → new avg **44**.
2. 5 boys avg 16; +24-year-old → (80+24)/6 = **17.33**.
3. 20 numbers avg 45; remove 81 → (900−81)/19 = **43.1**.
4. Avg of 10 = 50; replace one 40 with 70 → new total +30 → new avg **53**.
5. Group A: 10 students avg 60; group B: 20 students avg 45 → total avg = (600+900)/30 = **50**.

### Common Trap

Removing the number above average drops the average — check direction of the answer before doing math.

---

## Topic 10 — Mixtures & Alligation

### Formula Box

```
Alligation: cheaper : dearer = (mean - dearer) : (cheaper - mean)
   (C : D) = (M - D) : (C - M)   where C < M < D
Adding water to milk: water : milk = (cost - mean) : (mean - 0)
```

### Key Insight

Draw the alligation cross: cost prices on the left, mean in the middle, differences on the right. The ratio of differences is the MIX ratio.

### Worked Examples

1. Milk ₹36, sell at ₹30 → water:milk = (36−30):(30−0) = 6:30 = **1:5**.
2. ₹28 and ₹40 sugar → mix at 34 → (40−34):(34−28) = 1:1 → 20 kg of ₹28 sugar needed for 20 kg of ₹40.
3. Milk ₹40 with water 4:1 → cost = 40 × 4/5 = **₹32/L**.
4. Rice ₹30/kg & ₹45/kg at 2:1 → mean cost = (60+45)/3 = 35 → check: (45−35):(35−30) = 10:5 = 2:1 ✓.
5. Mix 10 L at 20/L and 30 L at 40/L → mean = (200+1200)/40 = **₹35/L**.

### Common Trap

Alligation gives the RATIO of quantities, not absolute quantities. Multiply by the total to get actual volumes.

---

## Topic 11 — Ages

### Formula Box

```
Ratio ages: 4k, 7k (same k)
After n years: (4k + n)/(7k + n)
Sum & difference: solve two linear equations
n years ago: subtract n from both
```

### Key Insight

Ratio-of-ages problems are always "ratio now, ratio later → solve for k". Sum problems are two linear equations.

### Worked Examples

1. Father 3× son; 5 yrs ago 4× → 3s = f; f−5 = 4(s−5) → 3s−5 = 4s−20 → s = 15, f = **45**.
2. Sum 70; after 10 yr father 2× son → f+s = 70; f+10 = 2(s+10) → 80−s = 2s+20 → s = **20**.
3. 5:2 now, 7:4 after 12 → (5k+12)/(2k+12) = 7/4 → 20k+48 = 14k+84 → k=6 → son **12**, father 30.
4. Son's age = x, father = 4x; 5 yrs ago father 7× son → 4x−5 = 7(x−5) → 4x−5 = 7x−35 → x = **10**.
5. Avg age of 5 = 40; one of 60 leaves → total 200−60 = 140 → avg **35**.

### Common Trap

Applying "after 6 years" to only one person. Both ages increase by the same number.

---

## Topic 12 — Permutations & Combinations

### Formula Box

```
nPr = n!/(n-r)!        (ordered arrangements)
nCr = n!/(r!(n-r)!)     (unordered selections)
With repetition: n^r arrangements
Identical objects: n!/(p! q! ...)
Girls together: treat as one block => (n - g + 1)! x g!
```

### Key Insight

Ask ONE question: does ORDER matter? Yes → permutation. No → combination. Blocks (must sit together) reduce the count by treating the group as one unit, then multiply by the group's internal arrangements.

### Worked Examples

1. "MASTER" → 6! = **720**.
2. Committee of 3 from 12 → C(12,3) = **220**.
3. 3-digit from 5 digits, no repetition → 5×4×3 = **60**.
4. 4 boys + 3 girls, girls together → block: 5! × 3! = 120 × 6 = **720**.
5. "MISSISSIPPI" → 11!/(4! 4! 2!) = **34,650**.

### Common Trap

C(n,0) = 1 and C(n,n) = 1 are easy marks people throw away. Also, "at least one" → total − none.

---

## Topic 13 — Probability

### Formula Box

```
P = favorable / total
P(A or B) = P(A) + P(B) - P(A and B)
Two dice: total 36 outcomes
Cards: 52 = 26 red (13 hearts + 13 diamonds) + 26 black (13 spades + 13 clubs), 4 kings, 4 aces
P(at least one) = 1 - P(none)
```

### Key Insight

Count favorable outcomes systematically (list small cases). For cards/dice, memorize the totals. "At least one" is almost always 1 − P(none).

### Worked Examples

1. 5 red, 6 green, 4 blue; two red → C(5,2)/C(15,2) = 10/105 = **2/21**.
2. King or red → (4 + 26 − 2)/52 = 28/52 = **7/13**.
3. Two dice sum 9 → (3,6)(4,5)(5,4)(6,3) = 4/36 = **1/9**.
4. Two dice sum ≥ 10 → (4,6)(5,5)(5,6)(6,4)(6,5)(6,6) = 6/36 = **1/6**.
5. Bag 60 balls, 24 red, 18 blue → green 18 → P = 18/60 = **3/10**.

### Common Trap

Overlapping events (king AND red) must be subtracted once. "Sum ≥ 10" includes 10, 11, 12 — count carefully.

---

## Topic 14 — Number Series

### Formula Box

```
Common patterns:
  Arithmetic: add constant
  Geometric: multiply constant
  Squares/cubes: n^2, n^3
  Differences of differences (second-level arithmetic)
  Hybrid: x2+1, x2+2 ... (multiply + increasing addend)
  Alternating: two interleaved series
```

### Key Insight

Compute differences first. If differences form a pattern (constant, increasing, squares), extend the differences. If not, try multiply-add patterns. Always check the most common first: ±constant, ±increasing, ×constant, ×2±k.

### Worked Examples

1. 3, 12, 27, 48, 75 → 3×1², 3×2², ... → 3×6² = **108**.
2. 5, 11, 24, 51, 106 → ×2+1, ×2+2, ×2+3, ×2+4 → 106×2+5 = **217**.
3. 2, 6, 14, 30 → ×2+2 → 30×2+2 = **62** (then 62×2+2 = 126 ✓).
4. 4, 10, 28, 82, 244 → ×3−2 → 244×3−2 = **730**.
5. 1, 8, 27, 64, 125 → cubes → **216**.

### Common Trap

Second-level differences: if the first differences don't pattern, subtract again. Don't invent exotic rules when a simple one exists.

---

## Topic 15 — Number System

### Formula Box

```
LCM x HCF = product of two numbers
HCF of (a - r, b - r) for numbers leaving remainder r
Cyclicity: last-digit cycles
   2: 2,4,8,6  3: 3,9,7,1  4: 4,6  7: 7,9,3,1  8: 8,4,2,6  9: 9,1
Divisibility: 2 (even), 3 (digit sum /3), 5 (0/5), 9 (digit sum /9), 11 (alternating sum /11)
```

### Key Insight

Remainder problems are cyclicity problems: reduce the exponent mod the cycle length. Divisibility is digit-sum work for 3 and 9.

### Worked Examples

1. 3^91 mod 5: cycle 3,4,2,1 (length 4); 91 = 4×22+3 → 3rd = **2**.
2. Product 1,080, HCF 12 → LCM = 1080/12 = **90**.
3. Largest divisor of 245 and 1,029 leaving 5 → HCF(240, 1024) = **16**.
4. HCF 12, LCM 240, one number 60 → other = 12×240/60 = **48**.
5. 7^345 last digit: cycle 7,9,3,1; 345 = 4×86+1 → **7**.

### Common Trap

Cyclicity starts at exponent 1, not 0: 2^1 ends in 2. For exponent divisible by 4, the last digit is the 4th element of the cycle.

---

## Topic 16 — Geometry, Mensuration, DI, Clocks & Calendars

### Formula Box

```
Triangle: area = (1/2) b h = (1/2) ab sin C; Pythagoras a² + b² = c²
Circle: area = πr², circumference = 2πr
Rectangle: area = l b, perimeter = 2(l + b); Square: a², 4a
Cube: V = a³, SA = 6a²; Cylinder: V = πr²h, SA = 2πrh + 2πr²
Cone: V = (1/3)πr²h; Sphere: V = (4/3)πr³, SA = 4πr²
Clocks: minute hand 6°/min, hour hand 0.5°/min; relative 5.5°/min
   Overlap every 65 5/11 minutes; right angle 22 times/day
Calendar: odd days; leap year = 366 days = 2 odd days
   Normal year = 1 odd day; century rule for leap years
Data interpretation: read totals from tables/charts, percentages of totals
```

### Key Insight

Clocks: the relative speed of hands is 5.5°/min — that single number solves nearly every clock question. Calendars: reduce the date range to odd days, then step forward from a known weekday.

### Worked Examples

1. Right angle between hands at 3:00; next at 3:32 8/11 → (90 + 180)/5.5 min ≈ 32.7 min after.
2. Square of side 14 → area 196; inscribed circle → π×7² = 49π.
3. Rectangle 12 × 5 → diagonal = √(144+25) = **13**.
4. What day is 15 Aug 2026 if 15 Aug 2025 is Friday? 2025 normal year → 1 odd day → **Saturday**.
5. DI: total sales 1,20,000 across 4 quarters; Q1 = 25% → **30,000**.

### Common Trap

Clock: hands overlap 11 times in 12 hours, not 12. Calendar: 1900 was NOT a leap year (century rule), 2000 was.

---

## Speed Cheat — Which Topic Appears Where

| Company flavor | Heavy topics |
|---|---|
| TCS NQT | All 16, balanced; number series and DI guaranteed |
| Infosys | Quant 40%+, puzzles + logic |
| Wipro | Arithmetic-heavy, percentages + TSD |
| Accenture | Verbal-heavy cognitive; quant moderate |
| Cognizant | Fast arithmetic, DI tables |
| Capgemini | Profit/loss, SI/CI, mixtures |
| Zoho | Advanced quant, probability + P&C deep |
| Deloitte | Reasoning + verbal dominate, quant moderate |

## Final Memory Card (recite daily)

```
Net % change: a + b + ab/100          |  Discount on MP, profit on CP
CI - SI (2y) = P(R/100)²              |  km/h -> m/s: x5/18
Avg speed equal dist = 2ab/(a+b)      |  Train: add lengths
Work: rates add, invert for days      |  Pipes: empty = negative rate
Alligation: (M-D):(C-M)               |  Order matters -> P else C
P(A or B) = P(A)+P(B)-P(both)         |  At least one = 1 - P(none)
LCM x HCF = product                   |  Cyclicity for remainders
Clock relative speed 5.5°/min         |  Odd days for calendars
```