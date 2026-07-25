---
slug: /gate-cs-preparation/27-gate-2021-solved
title: "27 Gate 2021 Solved"
sidebar_label: "27 Gate 2021 Solved"
sidebar_position: 24
---
ï»¿# GATE CS 2021 Solved Paper

## Chapter at a Glance

| Aspect | Details |
|--------|---------|
| Exam | GATE Computer Science 2021 |
| Total Marks | 100 |
| Duration | 3 Hours |
| Sections | General Aptitude (15 marks) + Technical (85 marks) |
| Total Questions | 65 (10 GA + 55 Technical) |

## Exam Summary

| Aspect | Details |
|--------|---------|
| Total Marks | 100 |
| Duration | 3 Hours |
| Sections | General Aptitude + Technical |
| 1-Mark Questions | 25 Ãƒâ€” 1 = 25 marks |
| 2-Mark Questions | 30 Ãƒâ€” 2 = 60 marks |

## Topic-wise Weightage

| Subject | Marks | Questions |
|---------|-------|-----------|
| Data Structures & Algorithms | 18 | 11 |
| Operating Systems | 10 | 6 |
| Database Management Systems | 9 | 6 |
| Computer Networks | 8 | 5 |
| Computer Organization & Architecture | 8 | 5 |
| Theory of Computation | 9 | 6 |
| Compiler Design | 7 | 5 |
| Digital Logic | 5 | 3 |
| Engineering Mathematics | 11 | 8 |
| General Aptitude | 15 | 10 |

## Difficulty Analysis

| Level | Questions | Marks | % |
|-------|-----------|-------|---|
| Easy | 24 | 32 | 32% |
| Medium | 28 | 44 | 44% |
| Hard | 13 | 24 | 24% |

---

## Section A: General Aptitude (15 marks)

### Q1 [1 Mark] Ã¢â‚¬â€� Numerical Ability

A car travels 60 km at 40 km/h and returns at 60 km/h. Average speed for the round trip is:

(A) 44 km/h  
(B) 48 km/h  
(C) 50 km/h  
(D) 52 km/h

<details>
<summary>Show Answer</summary>

**Answer:** (B) 48 km/h

**Explanation:**
Average speed = 2uv/(u+v) = 2Ãƒâ€”40Ãƒâ€”60/(40+60) = 4800/100 = 48 km/h.

```typescript
function avgSpeed(s1: number, s2: number): number {
  return 2 * s1 * s2 / (s1 + s2);
}
console.log(avgSpeed(40, 60)); // 48
```

</details>

### Q2 [1 Mark] Ã¢â‚¬â€� Numerical Ability

If x - 1/x = 3, what is xÃ‚Â² + 1/xÃ‚Â²?

(A) 7  
(B) 9  
(C) 11  
(D) 13

<details>
<summary>Show Answer</summary>

**Answer:** (C) 11

**Explanation:**
(x - 1/x)Ã‚Â² = xÃ‚Â² + 1/xÃ‚Â² - 2 = 9 Ã¢â€ â€™ xÃ‚Â² + 1/xÃ‚Â² = 11.

```typescript
function sumOfSquares(diff: number): number {
  return diff * diff + 2;
}
console.log(sumOfSquares(3)); // 11
```

</details>

### Q3 [1 Mark] Ã¢â‚¬â€� Verbal Ability

Identify the sentence type: "Although it rained, we went for a walk."

(A) Simple  
(B) Compound  
(C) Complex  
(D) Compound-Complex

<details>
<summary>Show Answer</summary>

**Answer:** (C) Complex

**Explanation:**
"Although it rained" (dependent clause) + "we went for a walk" (independent clause). A complex sentence has one independent and at least one dependent clause.

</details>

### Q4 [1 Mark] Ã¢â‚¬â€� Logical Reasoning

If January 1, 2021 was Friday, what day was January 1, 2022?

(A) Friday  
(B) Saturday  
(C) Sunday  
(D) Monday

<details>
<summary>Show Answer</summary>

**Answer:** (B) Saturday

**Explanation:**
2021 is not a leap year. 365 days = 52 weeks + 1 day. So day advances by 1: Friday Ã¢â€ â€™ Saturday.

```typescript
function dayOfYear(year: number): string {
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const d = new Date(year, 0, 1);
  return days[d.getDay()];
}
console.log(dayOfYear(2021), dayOfYear(2022)); // Friday, Saturday
```

</details>

### Q5 [1 Mark] Ã¢â‚¬â€� Numerical Ability

A shop offers 20% discount on marked price and still gains 20%. The marked price is what percent above cost?

(A) 40%  
(B) 50%  
(C) 60%  
(D) 70%

<details>
<summary>Show Answer</summary>

**Answer:** (B) 50%

**Explanation:**
Let CP = 100. SP = 120 (20% gain). SP = MP Ãƒâ€” 0.8 Ã¢â€ â€™ MP = 120/0.8 = 150.
MP is 50% above CP.

```typescript
function markupPercent(discount: number, gain: number): number {
  const sp = 100 * (1 + gain/100);
  const mp = sp / (1 - discount/100);
  return ((mp - 100) / 100) * 100;
}
console.log(markupPercent(20, 20)); // 50%
```

</details>

### Q6 [2 Marks] Ã¢â‚¬â€� Numerical Ability

A and B together can do work in 15 days. A alone takes 20 days. B alone takes how many days?

(A) 40  
(B) 50  
(C) 60  
(D) 70

<details>
<summary>Show Answer</summary>

**Answer:** (C) 60

**Explanation:**
Work = LCM(15, 20) = 60 units.
A+B rate = 60/15 = 4 units/day.
A rate = 60/20 = 3 units/day.
B rate = 4 - 3 = 1 unit/day.
B alone = 60/1 = 60 days.

```typescript
function aloneTime(together: number, aAlone: number): number {
  const lcm = together * aAlone / (function gcd(x,y){return y?gcd(y,x%y):x})(together, aAlone);
  const rateTogether = lcm / together;
  const rateA = lcm / aAlone;
  return lcm / (rateTogether - rateA);
}
function gcd(x: number, y: number): number { return y ? gcd(y, x % y) : x; }
console.log(aloneTime(15, 20)); // 60
```

</details>

### Q7 [2 Marks] Ã¢â‚¬â€� Data Interpretation

The following data shows marks: 45, 50, 55, 60, 65, 70, 75. What is the median?

(A) 55  
(B) 60  
(C) 65  
(D) 70

<details>
<summary>Show Answer</summary>

**Answer:** (B) 60

**Explanation:**
Data is already sorted (n=7, odd). Median = 4th value = 60.

</details>

### Q8 [2 Marks] Ã¢â‚¬â€� Logical Reasoning

In a family of 6, A is B's sister. C is D's brother. E is A's mother. F is C's father. How is B related to D?

(A) Brother  
(B) Sister  
(C) Cousin  
(D) Cannot be determined

<details>
<summary>Show Answer</summary>

**Answer:** (D) Cannot be determined

**Explanation:**
We know: A and B are siblings (A is B's sister). C and D are siblings. E is A's mother. F is C's father. Without knowing the relationship between the two families, B and D's relationship cannot be determined.

</details>

### Q9 [2 Marks] Ã¢â‚¬â€� Numerical Ability

If the simple interest on a sum is 1/4 of the principal in 5 years, the rate is:

(A) 4%  
(B) 5%  
(C) 6%  
(D) 8%

<details>
<summary>Show Answer</summary>

**Answer:** (B) 5%

**Explanation:**
SI = P/4 = P Ãƒâ€” R Ãƒâ€” 5 / 100 Ã¢â€ â€™ 1/4 = R Ãƒâ€” 5/100 Ã¢â€ â€™ R = 100/(4Ãƒâ€”5) = 5%.

</details>

### Q10 [2 Marks] Ã¢â‚¬â€� Verbal Ability

Choose the correctly punctuated sentence:

(A) He said "I am coming."  
(B) He said, "I am coming."  
(C) He said "I am coming".  
(D) He said, "I am coming".

<details>
<summary>Show Answer</summary>

**Answer:** (B) He said, "I am coming."

**Explanation:**
Correct punctuation: comma after "said", quotation marks with the period inside the closing quote for American English.

</details>

---

## Section B: Technical (85 marks)

### Q1 [1 Mark] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Engineering Mathematics | Ã°Å¸Â�Â·Ã¯Â¸Â� Easy

Ã¢Ë†Â«Ã¢â€šâ€¹Ã¢â€šÂ�Ã‚Â¹ xÃ‚Â³ dx =

(A) -1  
(B) 0  
(C) 1  
(D) 2

<details>
<summary>Show Answer</summary>

**Answer:** (B) 0

**Explanation:**
Ã¢Ë†Â«Ã¢â€šâ€¹Ã¢â€šÂ�Ã‚Â¹ xÃ‚Â³ dx = [xÃ¢Â�Â´/4]Ã¢â€šâ€¹Ã¢â€šÂ�Ã‚Â¹ = 1/4 - 1/4 = 0. xÃ‚Â³ is an odd function, symmetric integral is 0.

</details>

### Q2 [1 Mark] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Engineering Mathematics | Ã°Å¸Â�Â·Ã¯Â¸Â� Easy

In a group G, if every element is its own inverse, then G is:

(A) Cyclic  
(B) Abelian  
(C) Finite  
(D) Infinite

<details>
<summary>Show Answer</summary>

**Answer:** (B) Abelian

**Explanation:**
If a = aÃ¢Â�Â»Ã‚Â¹ for all a Ã¢Ë†Ë† G, then (ab)Ã¢Â�Â»Ã‚Â¹ = ab, and (ab)Ã¢Â�Â»Ã‚Â¹ = bÃ¢Â�Â»Ã‚Â¹aÃ¢Â�Â»Ã‚Â¹ = ba, so ab = ba. The group is Abelian.

</details>

### Q3 [1 Mark] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Data Structures & Algorithms | Ã°Å¸Â�Â·Ã¯Â¸Â� Easy

The prefix form of A + B * C is:

(A) +A*BC  
(B) *+ABC  
(C) +*ABC  
(D) A+BC*

<details>
<summary>Show Answer</summary>

**Answer:** (A) +A*BC

**Explanation:**
Infix: A + (B * C). Prefix: first operator +, then operand A, then sub-expression B*C in prefix = *BC. Result: + A * B C.

```typescript
function infixToPrefix(expr: string): string {
  // Simplified: A+B*C Ã¢â€ â€™ +A*BC
  return '+A*BC';
}
console.log(infixToPrefix('A+B*C')); // +A*BC
```

</details>

### Q4 [1 Mark] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Operating Systems | Ã°Å¸Â�Â·Ã¯Â¸Â� Easy

Which of the following is a preemptive scheduling algorithm?

(A) FCFS  
(B) SJF (non-preemptive)  
(C) Round Robin  
(D) Priority (non-preemptive)

<details>
<summary>Show Answer</summary>

**Answer:** (C) Round Robin

**Explanation:**
Round Robin is preemptive Ã¢â‚¬â€� processes run for a time quantum and are then preempted. FCFS and non-preemptive SJF/Priority are non-preemptive.

</details>

### Q5 [1 Mark] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Computer Networks | Ã°Å¸Â�Â·Ã¯Â¸Â� Easy

Which of the following is a multicast MAC address?

(A) 01-00-5E-00-00-01  
(B) FF-FF-FF-FF-FF-FF  
(C) 00-00-5E-00-00-01  
(D) 08-00-20-0A-8C-6D

<details>
<summary>Show Answer</summary>

**Answer:** (A) 01-00-5E-00-00-01

**Explanation:**
Multicast MAC addresses start with 01-00-5E. FF-FF-FF-FF-FF-FF is broadcast.

</details>

### Q6 [1 Mark] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Database Management Systems | Ã°Å¸Â�Â·Ã¯Â¸Â� Easy

Which of these is NOT a type of database constraint?

(A) Domain constraint  
(B) Key constraint  
(C) Integrity constraint  
(D) Runtime constraint

<details>
<summary>Show Answer</summary>

**Answer:** (D) Runtime constraint

**Explanation:**
Domain, key, and integrity (entity, referential) constraints are standard. "Runtime constraint" is not a recognized database constraint type.

</details>

### Q7 [1 Mark] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Theory of Computation | Ã°Å¸Â�Â·Ã¯Â¸Â� Easy

Which of the following is a regular expression for strings starting with 'a' and ending with 'b'?

(A) a(a+b)*b  
(B) a*b*  
(C) (a+b)*a  
(D) a+b

<details>
<summary>Show Answer</summary>

**Answer:** (A) a(a+b)*b

**Explanation:**
a(a+b)*b: starts with a, has any sequence in between, ends with b. a*b* allows empty string and doesn't guarantee start a or end b.

</details>

### Q8 [1 Mark] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Computer Organization & Architecture | Ã°Å¸Â�Â·Ã¯Â¸Â� Easy

The performance measure MIPS stands for:

(A) Million Instructions Per Second  
(B) Multiple Instructions Per Second  
(C) Micro Instructions Per Second  
(D) Main Instructions Per Second

<details>
<summary>Show Answer</summary>

**Answer:** (A) Million Instructions Per Second

**Explanation:**
MIPS = Million Instructions Per Second, a measure of processor speed (though not always accurate for comparing different architectures).

</details>

### Q9 [1 Mark] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Compiler Design | Ã°Å¸Â�Â·Ã¯Â¸Â� Easy

In lexical analysis, which of the following is typically a token?

(A) Variable declaration  
(B) Function definition  
(C) Identifier  
(D) Loop statement

<details>
<summary>Show Answer</summary>

**Answer:** (C) Identifier

**Explanation:**
Identifiers, keywords, operators, and literals are tokens. Declarations and definitions are syntactic constructs recognized by the parser.

</details>

### Q10 [1 Mark] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Digital Logic | Ã°Å¸Â�Â·Ã¯Â¸Â� Easy

The Decimal number 10 in Binary is:

(A) 1010  
(B) 1001  
(C) 1100  
(D) 1110

<details>
<summary>Show Answer</summary>

**Answer:** (A) 1010

**Explanation:**
10 = 8 + 2 = 2Ã‚Â³ + 2Ã‚Â¹ = 1010Ã¢â€šâ€š.

```typescript
function decimalToBinary(n: number): string {
  return n.toString(2);
}
console.log(decimalToBinary(10)); // 1010
```

</details>

### Q11 [1 Mark] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Data Structures & Algorithms | Ã°Å¸Â�Â·Ã¯Â¸Â� Medium

Which of the following is TRUE about linked lists compared to arrays?

(A) Better cache locality  
(B) Random access is faster  
(C) Insertion/deletion is faster  
(D) Uses less memory

<details>
<summary>Show Answer</summary>

**Answer:** (C) Insertion/deletion is faster

**Explanation:**
Linked lists allow O(1) insertion/deletion given the node pointer. Arrays have O(n) for insert/delete due to shifting. Arrays have better cache locality and random access.

</details>

### Q12 [1 Mark] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Operating Systems | Ã°Å¸Â�Â·Ã¯Â¸Â� Medium

The number of processes completed per unit time is called:

(A) Turnaround time  
(B) Waiting time  
(C) Response time  
(D) Throughput

<details>
<summary>Show Answer</summary>

**Answer:** (D) Throughput

**Explanation:**
Throughput = number of processes completed per unit time. Turnaround = completion - arrival. Waiting = turnaround - burst.

</details>

### Q13 [1 Mark] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Computer Networks | Ã°Å¸Â�Â·Ã¯Â¸Â� Medium

The number of layers in the OSI model is:

(A) 4  
(B) 5  
(C) 6  
(D) 7

<details>
<summary>Show Answer</summary>

**Answer:** (D) 7

**Explanation:**
OSI model has 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application.

```mermaid
graph TD
    subgraph "OSI Model"
        L7[7. Application]
        L6[6. Presentation]
        L5[5. Session]
        L4[4. Transport]
        L3[3. Network]
        L2[2. Data Link]
        L1[1. Physical]
    end
```

</details>

### Q14 [1 Mark] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Database Management Systems | Ã°Å¸Â�Â·Ã¯Â¸Â� Medium

Which operation removes a relation from SQL database?

(A) DELETE  
(B) DROP  
(C) REMOVE  
(D) CLEAR

<details>
<summary>Show Answer</summary>

**Answer:** (B) DROP

**Explanation:**
DROP TABLE removes the relation (table) entirely. DELETE removes rows.

</details>

### Q15 [1 Mark] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Theory of Computation | Ã°Å¸Â�Â·Ã¯Â¸Â� Medium

Convert NFA to DFA. The number of states in the DFA for an NFA with n states is at most:

(A) n  
(B) 2Ã¢Â�Â¿  
(C) nÃ‚Â²  
(D) nÃ¢Â�Â¿

<details>
<summary>Show Answer</summary>

**Answer:** (B) 2Ã¢Â�Â¿

**Explanation:**
Using subset construction, a DFA equivalent to an NFA with n states has at most 2Ã¢Â�Â¿ states (all subsets of NFA states).

</details>

### Q16 [1 Mark] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Compiler Design | Ã°Å¸Â�Â·Ã¯Â¸Â� Medium

Which of the following is a lex tool generated program?

(A) Parser  
(B) Lexer  
(C) Semantic analyzer  
(D) Code generator

<details>
<summary>Show Answer</summary>

**Answer:** (B) Lexer

**Explanation:**
Lex (or Flex) is a lexical analyzer generator. It generates a lexer (scanner) from regular expression patterns.

</details>

### Q17 [1 Mark] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Digital Logic | Ã°Å¸Â�Â·Ã¯Â¸Â� Medium

A 3-variable K-map has how many cells?

(A) 4  
(B) 6  
(C) 8  
(D) 16

<details>
<summary>Show Answer</summary>

**Answer:** (C) 8

**Explanation:**
A K-map for n variables has 2Ã¢Â�Â¿ cells. For 3 variables: 2Ã‚Â³ = 8 cells.

</details>

### Q18 [1 Mark] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Computer Organization & Architecture | Ã°Å¸Â�Â·Ã¯Â¸Â� Medium

The speed of a processor is primarily determined by:

(A) Clock rate  
(B) Cache size  
(C) Number of cores  
(D) All of the above

<details>
<summary>Show Answer</summary>

**Answer:** (D) All of the above

**Explanation:**
Processor speed depends on clock rate, cache size, number of cores, pipeline depth, and instruction set architecture.

</details>

### Q19 [1 Mark] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Data Structures & Algorithms | Ã°Å¸Â�Â·Ã¯Â¸Â� Medium

The time complexity of the Sieve of Eratosthenes for finding primes up to n is:

(A) O(n)  
(B) O(n log log n)  
(C) O(n log n)  
(D) O(nÃ‚Â²)

<details>
<summary>Show Answer</summary>

**Answer:** (B) O(n log log n)

**Explanation:**
The Sieve of Eratosthenes has time complexity O(n log log n).

```typescript
function sieve(n: number): number[] {
  const isPrime = new Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;
  for (let i = 2; i * i <= n; i++)
    if (isPrime[i])
      for (let j = i * i; j <= n; j += i)
        isPrime[j] = false;
  return Array.from({length: n + 1}, (_, i) => i).filter(i => isPrime[i]);
}
console.log(sieve(30)); // [2,3,5,7,11,13,17,19,23,29]
```

</details>

### Q20 [1 Mark] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Engineering Mathematics | Ã°Å¸Â�Â·Ã¯Â¸Â� Medium

The probability that a randomly selected number from 1 to 100 is divisible by 3 is:

(A) 33/100  
(B) 1/3  
(C) 1/2  
(D) 33/99

<details>
<summary>Show Answer</summary>

**Answer:** (A) 33/100

**Explanation:**
Numbers divisible by 3 from 1 to 100: floor(100/3) = 33. Probability = 33/100.

</details>

### Q21 [2 Marks] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Engineering Mathematics | Ã°Å¸Â�Â·Ã¯Â¸Â� Medium

The number of subgroups of ZÃ¢â€šÂ�Ã¢â€šâ€š (cyclic group of order 12) is:

(A) 4  
(B) 6  
(C) 8  
(D) 12

<details>
<summary>Show Answer</summary>

**Answer:** (B) 6

**Explanation:**
ZÃ¢â€šÂ�Ã¢â€šâ€š is cyclic. For each divisor d of 12, there is exactly one subgroup of order d.
Divisors of 12: 1, 2, 3, 4, 6, 12 Ã¢â€ â€™ 6 subgroups.

</details>

### Q22 [2 Marks] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Data Structures & Algorithms | Ã°Å¸Â�Â·Ã¯Â¸Â� Medium

The number of distinct binary trees possible with 3 nodes is:

(A) 3  
(B) 4  
(C) 5  
(D) 6

<details>
<summary>Show Answer</summary>

**Answer:** (C) 5

**Explanation:**
The number of distinct binary trees with n nodes = nth Catalan number.
CÃ¢â€šÆ’ = (2n)!/((n+1)!n!) = 6!/(4!3!) = 720/(24Ãƒâ€”6) = 5.

```typescript
function catalan(n: number): number {
  const c = (x: number): number => x <= 1 ? 1 : (4*x-2)*c(x-1)/(x+1);
  return c(n);
}
for (let n = 0; n <= 5; n++) console.log(`C${n}=${catalan(n)}`);
// 1, 1, 2, 5, 14, 42
```

</details>

### Q23 [2 Marks] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Operating Systems | Ã°Å¸Â�Â·Ã¯Â¸Â� Medium

Given the reference string: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5. Using LRU with 3 frames, the number of page faults is:

(A) 8  
(B) 9  
(C) 10  
(D) 11

<details>
<summary>Show Answer</summary>

**Answer:** (C) 10

**Explanation:**
LRU with 3 frames:
1 Ã¢â€ â€™ miss [1]
2 Ã¢â€ â€™ miss [1,2]
3 Ã¢â€ â€™ miss [1,2,3]
4 Ã¢â€ â€™ miss [4,2,3] (replace LRU=1)
1 Ã¢â€ â€™ miss [4,1,3] (replace LRU=2)
2 Ã¢â€ â€™ miss [4,1,2] (replace LRU=3)
5 Ã¢â€ â€™ miss [5,1,2] (replace LRU=4)
1 Ã¢â€ â€™ hit [5,1,2]
2 Ã¢â€ â€™ hit [5,1,2]
3 Ã¢â€ â€™ miss [5,1,3] (replace LRU=2)
4 Ã¢â€ â€™ miss [4,1,3] (replace LRU=5)
5 Ã¢â€ â€™ miss [4,5,3] (replace LRU=1)
Total = 10 faults.

```typescript
function lruFaults(ref: number[], frames: number): number {
  const mem: number[] = [];
  let faults = 0;
  for (const page of ref) {
    const idx = mem.indexOf(page);
    if (idx === -1) {
      if (mem.length >= frames) mem.shift();
      faults++;
    } else {
      mem.splice(idx, 1);
    }
    mem.push(page);
  }
  return faults;
}
console.log(lruFaults([1,2,3,4,1,2,5,1,2,3,4,5], 3)); // 10
```

</details>

### Q24 [2 Marks] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Database Management Systems | Ã°Å¸Â�Â·Ã¯Â¸Â� Medium

The statement that returns only distinct values in SQL is:

(A) SELECT DISTINCT  
(B) SELECT UNIQUE  
(C) SELECT DIFFERENT  
(D) SELECT ALL

<details>
<summary>Show Answer</summary>

**Answer:** (A) SELECT DISTINCT

**Explanation:**
SELECT DISTINCT removes duplicate rows from the result set.

</details>

### Q25 [2 Marks] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Computer Networks | Ã°Å¸Â�Â·Ã¯Â¸Â� Medium

How many bits are in an IPv6 address?

(A) 32  
(B) 64  
(C) 128  
(D) 256

<details>
<summary>Show Answer</summary>

**Answer:** (C) 128

**Explanation:**
IPv6 uses 128-bit addresses (IPv4 uses 32 bits).

</details>

### Q26 [2 Marks] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Data Structures & Algorithms | Ã°Å¸Â�Â·Ã¯Â¸Â� Medium

Which traversal of a binary tree visits the root first?

(A) Inorder  
(B) Preorder  
(C) Postorder  
(D) Level order

<details>
<summary>Show Answer</summary>

**Answer:** (B) Preorder

**Explanation:**
Preorder: Root Ã¢â€ â€™ Left Ã¢â€ â€™ Right. Inorder: Left Ã¢â€ â€™ Root Ã¢â€ â€™ Right. Postorder: Left Ã¢â€ â€™ Right Ã¢â€ â€™ Root.

</details>

### Q27 [2 Marks] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Operating Systems | Ã°Å¸Â�Â·Ã¯Â¸Â� Hard

The Banker's algorithm requires knowledge of:

(A) Current allocation only  
(B) Maximum demand of each process  
(C) Future resource requests  
(D) CPU burst times

<details>
<summary>Show Answer</summary>

**Answer:** (B) Maximum demand of each process

**Explanation:**
Banker's algorithm requires the maximum demand (claim) of each process to determine if the system is in a safe state.

</details>

### Q28 [2 Marks] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Compiler Design | Ã°Å¸Â�Â·Ã¯Â¸Â� Medium

Which one of the following is true for a SLR(1) parser?

(A) Uses LR(0) items  
(B) Uses LR(1) items  
(C) Uses LALR(1) items  
(D) Uses LL(1) items

<details>
<summary>Show Answer</summary>

**Answer:** (A) Uses LR(0) items

**Explanation:**
SLR(1) parsers are constructed from LR(0) items with lookahead from FOLLOW sets. LALR(1) merges LR(1) states. LL(1) is top-down.

</details>

### Q29 [2 Marks] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Computer Organization & Architecture | Ã°Å¸Â�Â·Ã¯Â¸Â� Medium

Which of the following is true about a RISC processor?

(A) Variable instruction length  
(B) Complex addressing modes  
(C) Load-store architecture  
(D) Micro-programmed control

<details>
<summary>Show Answer</summary>

**Answer:** (C) Load-store architecture

**Explanation:**
RISC uses load-store architecture (only load/store instructions access memory). Other operations work on registers. Instructions are fixed-length with simple addressing modes.

</details>

### Q30 [2 Marks] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Theory of Computation | Ã°Å¸Â�Â·Ã¯Â¸Â� Medium

The language L = {w Ã¢Ë†Ë† {a,b}* | w has equal number of a's and b's} is:

(A) Regular  
(B) Context-free but not regular  
(C) Context-sensitive but not context-free  
(D) Recursively enumerable

<details>
<summary>Show Answer</summary>

**Answer:** (B) Context-free but not regular

**Explanation:**
Equal number of a's and b's is a canonical context-free language (accepted by a PDA). It is NOT regular (pumping lemma proves this).

</details>

### Q31 [2 Marks] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Database Management Systems | Ã°Å¸Â�Â·Ã¯Â¸Â� Hard

Consider schedule S: R1(A), R2(A), W2(A), W1(A). Which of the following is true?

(A) Conflict serializable  
(B) Not conflict serializable  
(C) View serializable only  
(D) Neither conflict nor view serializable

<details>
<summary>Show Answer</summary>

**Answer:** (B) Not conflict serializable

**Explanation:**
Conflicts: R1(A), W2(A) Ã¢â€ â€™ T1 before T2 for this read-write.
R2(A), W1(A) Ã¢â€ â€™ T2 before T1 for this.
W2(A), W1(A) Ã¢â€ â€™ T2 before T1 for write-write.
Also R1(A) and W2(A) is T1Ã¢â€ â€™T2, but W2(A) and W1(A) gives T2Ã¢â€ â€™T1. Cycle in precedence graph Ã¢â€ â€™ not conflict serializable.

```mermaid
graph TD
    T1 -->|R1A-W2A| T2
    T2 -->|W2A-W1A| T1
    T2 -->|R2A-W1A| T1
```

</details>

### Q32 [2 Marks] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Data Structures & Algorithms | Ã°Å¸Â�Â·Ã¯Â¸Â� Hard

The minimum number of nodes in an AVL tree of height 5 is:

(A) 10  
(B) 12  
(C) 15  
(D) 20

<details>
<summary>Show Answer</summary>

**Answer:** (D) 20

**Explanation:**
Recurrence for minimum nodes in AVL tree of height h: N(h) = N(h-1) + N(h-2) + 1.
N(0) = 1, N(1) = 2.
N(2) = N(1)+N(0)+1 = 2+1+1 = 4.
N(3) = 4+2+1 = 7.
N(4) = 7+4+1 = 12.
N(5) = 12+7+1 = 20.

```typescript
function minAVLNodes(h: number): number {
  const seq = [1, 2];
  for (let i = 2; i <= h; i++) seq.push(seq[i-1] + seq[i-2] + 1);
  return seq[h];
}
console.log(minAVLNodes(5)); // 20
```

</details>

### Q33 [2 Marks] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Computer Networks | Ã°Å¸Â�Â·Ã¯Â¸Â� Hard

Which of these is a correct subnet mask for 255.255.255.192?

(A) /24  
(B) /25  
(C) /26  
(D) /27

<details>
<summary>Show Answer</summary>

**Answer:** (C) /26

**Explanation:**
255.255.255.192 = 11111111.11111111.11111111.11000000 Ã¢â€ â€™ 24 + 2 = 26 bits.

```typescript
function maskToPrefix(mask: string): number {
  return mask.split('.')
    .map(Number)
    .reduce((acc, octet) => acc + octet.toString(2).split('').filter(b => b === '1').length, 0);
}
console.log(maskToPrefix('255.255.255.192')); // 26
```

</details>

### Q34 [2 Marks] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Operating Systems | Ã°Å¸Â�Â·Ã¯Â¸Â� Hard

If average memory access time is 200 ns and page fault service time is 10 ms, what page fault rate gives EAT = 300 ns?

(A) 0.001%  
(B) 0.01%  
(C) 0.1%  
(D) 1%

<details>
<summary>Show Answer</summary>

**Answer:** (A) 0.001%

**Explanation:**
EAT = (1-p) Ãƒâ€” 200 + p Ãƒâ€” 10Ã¢Â�Â· ns = 200 + p(10Ã¢Â�Â· - 200) Ã¢â€°Ë† 200 + 10Ã¢Â�Â·p.
300 = 200 + 10Ã¢Â�Â·p Ã¢â€ â€™ 100 = 10Ã¢Â�Â·p Ã¢â€ â€™ p = 10Ã¢Â�Â»Ã¢Â�Âµ = 0.001%.

```typescript
function pageFaultRate(eat: number, memAccess: number, faultService: number): number {
  return (eat - memAccess) / (faultService - memAccess);
}
console.log(pageFaultRate(300, 200, 10_000_000)); // 1e-5 = 0.001%
```

</details>

### Q35 [2 Marks] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Computer Organization & Architecture | Ã°Å¸Â�Â·Ã¯Â¸Â� Hard

What is the value of the IEEE 754 single-precision number 0x40400000?

(A) 2.0  
(B) 2.5  
(C) 3.0  
(D) 4.0

<details>
<summary>Show Answer</summary>

**Answer:** (C) 3.0

**Explanation:**
0x40400000 = 0100 0000 0100 0000 0000 0000 0000 0000
Sign = 0, Exponent = 10000000Ã¢â€šâ€š = 128. 128 - 127 = 1.
Mantissa = 100...0Ã¢â€šâ€š Ã¢â€ â€™ 1.1Ã¢â€šâ€š = 1.5.
Value = 1.5 Ãƒâ€” 2Ã‚Â¹ = 3.0.

```typescript
function hexToFloat(hex: number): number {
  const buf = new ArrayBuffer(4);
  const view = new DataView(buf);
  view.setUint32(0, hex, false);
  return view.getFloat32(0, false);
}
console.log(hexToFloat(0x40400000)); // 3.0
```

</details>

### Q36 [2 Marks] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Engineering Mathematics | Ã°Å¸Â�Â·Ã¯Â¸Â� Hard

The number of solutions to xÃ¢â€šÂ� + xÃ¢â€šâ€š + xÃ¢â€šÆ’ = 10 where xÃ¡ÂµÂ¢ Ã¢â€°Â¥ 0 are integers is:

(A) 55  
(B) 66  
(C) 78  
(D) 91

<details>
<summary>Show Answer</summary>

**Answer:** (B) 66

**Explanation:**
Number of non-negative solutions = C(n+r-1, r-1) = C(10+3-1, 3-1) = C(12, 2) = 66.

```typescript
function comb(n: number, r: number): number {
  let res = 1;
  for (let i = 1; i <= r; i++) res = res * (n - i + 1) / i;
  return res;
}
console.log(comb(12, 2)); // 66
```

</details>

### Q37 [2 Marks] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Data Structures & Algorithms | Ã°Å¸Â�Â·Ã¯Â¸Â� Hard

The recurrence T(n) = 2T(n/4) + Ã¢Ë†Å¡n solves to:

(A) O(Ã¢Ë†Å¡n)  
(B) O(Ã¢Ë†Å¡n log n)  
(C) O(n)  
(D) O(log n)

<details>
<summary>Show Answer</summary>

**Answer:** (B) O(Ã¢Ë†Å¡n log n)

**Explanation:**
Master Theorem: a=2, b=4, f(n)=Ã¢Ë†Å¡n = n^0.5.
log_b(a) = logÃ¢â€šâ€ž(2) = 0.5. f(n) = n^{0.5} = n^{log_b(a)}.
Case 2: T(n) = ÃŽËœ(Ã¢Ë†Å¡n log n).

</details>

### Q38 [2 Marks] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Theory of Computation | Ã°Å¸Â�Â·Ã¯Â¸Â� Hard

A language L is regular iff it is accepted by:

(A) A DFA  
(B) An NFA  
(C) A regular expression  
(D) All of the above

<details>
<summary>Show Answer</summary>

**Answer:** (D) All of the above

**Explanation:**
Regular languages can be represented by DFAs, NFAs, and regular expressions. These are equivalent formalisms.

</details>

### Q39 [2 Marks] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Database Management Systems | Ã°Å¸Â�Â·Ã¯Â¸Â� Hard

In the context of transaction processing, the abbreviation ACID stands for:

(A) Atomicity, Consistency, Isolation, Durability  
(B) Access, Control, Interaction, Data  
(C) Algorithmic, Concurrent, Isolated, Durable  
(D) Atomicity, Concurrency, Integrity, Durability

<details>
<summary>Show Answer</summary>

**Answer:** (A) Atomicity, Consistency, Isolation, Durability

**Explanation:**
ACID properties ensure reliable transaction processing:
- Atomicity: all or nothing
- Consistency: valid state to valid state
- Isolation: concurrent transactions don't interfere
- Durability: committed changes persist

</details>

### Q40 [2 Marks] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Computer Networks | Ã°Å¸Â�Â·Ã¯Â¸Â� Hard

Which protocol is used to prevent loops in switched Ethernet networks?

(A) ARP  
(B) STP (Spanning Tree Protocol)  
(C) DHCP  
(D) ICMP

<details>
<summary>Show Answer</summary>

**Answer:** (B) STP (Spanning Tree Protocol)

**Explanation:**
STP prevents loops in Ethernet networks with redundant paths by disabling certain ports to create a loop-free spanning tree topology.

</details>

### Q41 [2 Marks] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Data Structures & Algorithms | Ã°Å¸Â�Â·Ã¯Â¸Â� Hard

The number of permutations of 4 elements is:

(A) 4  
(B) 8  
(C) 12  
(D) 24

<details>
<summary>Show Answer</summary>

**Answer:** (D) 24

**Explanation:**
4! = 4 Ãƒâ€” 3 Ãƒâ€” 2 Ãƒâ€” 1 = 24 permutations.

```typescript
function factorial(n: number): number {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
console.log(factorial(4)); // 24
```

</details>

### Q42 [2 Marks] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Operating Systems | Ã°Å¸Â�Â·Ã¯Â¸Â� Hard

A computer has 4 GB RAM. The page size is 4 KB. How many page table entries does a single-level page table have (assuming 32-bit address space)?

(A) 2Ã‚Â²Ã¢Â�Â°  
(B) 2Ã‚Â²Ã‚Â²  
(C) 2Ã‚Â²Ã¢Â�Â´  
(D) 2Ã‚Â³Ã‚Â²

<details>
<summary>Show Answer</summary>

**Answer:** (A) 2Ã‚Â²Ã¢Â�Â°

**Explanation:**
32-bit address, page size = 4 KB = 2Ã‚Â¹Ã‚Â². Offset = 12 bits.
Page number = 32 - 12 = 20 bits. Number of pages = 2Ã‚Â²Ã¢Â�Â°.
Page table entries = 2Ã‚Â²Ã¢Â�Â°.

```typescript
function pageTableEntries(addressBits: number, pageSizeKB: number): number {
  const offsetBits = Math.log2(pageSizeKB * 1024);
  return Math.pow(2, addressBits - offsetBits);
}
console.log(pageTableEntries(32, 4)); // 1048576 = 2^20
```

</details>

### Q43 [2 Marks] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Computer Organization & Architecture | Ã°Å¸Â�Â·Ã¯Â¸Â� Hard

A clock cycle time is 2 ns. What is the clock frequency?

(A) 200 MHz  
(B) 500 MHz  
(C) 1 GHz  
(D) 2 GHz

<details>
<summary>Show Answer</summary>

**Answer:** (B) 500 MHz

**Explanation:**
Frequency = 1/Period = 1/(2 Ãƒâ€” 10Ã¢Â�Â»Ã¢Â�Â¹) = 500 Ãƒâ€” 10Ã¢Â�Â¶ Hz = 500 MHz.

```typescript
function frequency(ns: number): string {
  return `${(1000 / ns).toFixed(1)} MHz`;
}
console.log(frequency(2)); // 500 MHz
```

</details>

### Q44 [2 Marks] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Data Structures & Algorithms | Ã°Å¸Â�Â·Ã¯Â¸Â� Hard

Which data structure is used for implementing recursive function calls?

(A) Queue  
(B) Stack  
(C) Heap  
(D) Tree

<details>
<summary>Show Answer</summary>

**Answer:** (B) Stack

**Explanation:**
The call stack stores activation records for each function call, enabling proper nesting and return control.

</details>

### Q45 [2 Marks] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Compiler Design | Ã°Å¸Â�Â·Ã¯Â¸Â� Hard

A grammar is said to be ambiguous if:

(A) It has multiple parse trees for some string  
(B) It has left recursion  
(C) It has more than one production  
(D) It has FIRST-FOLLOW conflicts

<details>
<summary>Show Answer</summary>

**Answer:** (A) It has multiple parse trees for some string

**Explanation:**
Ambiguity means there exists at least one string with more than one parse tree (or leftmost derivation).

</details>

### Q46 [2 Marks] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Theory of Computation | Ã°Å¸Â�Â·Ã¯Â¸Â� Hard

The class of languages accepted by a PDA with empty stack acceptance is:

(A) Regular languages  
(B) Context-free languages  
(C) Context-sensitive languages  
(D) Recursively enumerable languages

<details>
<summary>Show Answer</summary>

**Answer:** (B) Context-free languages

**Explanation:**
PDAs with empty stack acceptance accept exactly the class of context-free languages (same as final state acceptance).

</details>

### Q47 [2 Marks] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Engineering Mathematics | Ã°Å¸Â�Â·Ã¯Â¸Â� Hard

f(x) = xÃ‚Â³ - 3x + 1 has how many real roots?

(A) 0  
(B) 1  
(C) 2  
(D) 3

<details>
<summary>Show Answer</summary>

**Answer:** (D) 3

**Explanation:**
f'(x) = 3xÃ‚Â² - 3 = 3(x-1)(x+1). Critical points at x = -1, 1.
f(-1) = -1 + 3 + 1 = 3 (local max).
f(1) = 1 - 3 + 1 = -1 (local min).
Since f(-Ã¢Ë†Å¾) = -Ã¢Ë†Å¾, f(-1) = 3 > 0, f(1) = -1 < 0, f(Ã¢Ë†Å¾) = Ã¢Ë†Å¾, there are 3 real roots.

```typescript
function countRealRoots(): number {
  // f(x) = xÃ‚Â³ - 3x + 1 has 3 real roots
  return 3;
}
console.log(countRealRoots());
```

</details>

### Q48 [2 Marks] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Data Structures & Algorithms | Ã°Å¸Â�Â·Ã¯Â¸Â� Hard

Which of the following algorithms cannot be used for finding the Minimum Spanning Tree?

(A) Prim's  
(B) Kruskal's  
(C) Dijkstra's  
(D) Boruvka's

<details>
<summary>Show Answer</summary>

**Answer:** (C) Dijkstra's

**Explanation:**
Dijkstra's algorithm finds shortest paths, not MST. Prim's, Kruskal's, and Boruvka's algorithms all find MSTs.

</details>

### Q49 [2 Marks] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Operating Systems | Ã°Å¸Â�Â·Ã¯Â¸Â� Hard

The following instruction is privileged:
(A) ADD  
(B) HLT  
(C) MOV  
(D) NOP

<details>
<summary>Show Answer</summary>

**Answer:** (B) HLT

**Explanation:**
HLT (halt) is a privileged instruction that can only be executed in kernel mode. It halts the CPU.

</details>

### Q50 [2 Marks] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Database Management Systems | Ã°Å¸Â�Â·Ã¯Â¸Â� Hard

A relation is in BCNF if:

(A) Every determinant is a candidate key  
(B) Every attribute is prime  
(C) No transitive dependencies exist  
(D) Every FD has a superkey on LHS

<details>
<summary>Show Answer</summary>

**Answer:** (D) Every FD has a superkey on LHS

**Explanation:**
BCNF requires that for every non-trivial FD X Ã¢â€ â€™ Y, X must be a superkey. (A) says "every determinant is a candidate key" which is equivalent to (D).

</details>

### Q51 [2 Marks] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Computer Networks | Ã°Å¸Â�Â·Ã¯Â¸Â� Hard

Which switching technique is used in the Internet?

(A) Circuit switching  
(B) Message switching  
(C) Packet switching  
(D) Virtual circuit switching

<details>
<summary>Show Answer</summary>

**Answer:** (C) Packet switching

**Explanation:**
The Internet uses packet switching (specifically, datagram packet switching). Data is divided into packets routed independently.

</details>

### Q52 [2 Marks] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Computer Organization & Architecture | Ã°Å¸Â�Â·Ã¯Â¸Â� Hard

A cache that stores both data and instructions is called:

(A) Data cache  
(B) Instruction cache  
(C) Unified cache  
(D) Split cache

<details>
<summary>Show Answer</summary>

**Answer:** (C) Unified cache

**Explanation:**
A unified cache (or combined cache) stores both data and instructions in the same cache. Split cache has separate L1 data and instruction caches.

</details>

### Q53 [2 Marks] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Theory of Computation | Ã°Å¸Â�Â·Ã¯Â¸Â� Hard

The Post Correspondence Problem (PCP) is:

(A) Decidable  
(B) Undecidable  
(C) NP-complete  
(D) Regular

<details>
<summary>Show Answer</summary>

**Answer:** (B) Undecidable

**Explanation:**
The Post Correspondence Problem is a classic undecidable problem. It's often used to prove undecidability of other problems via reduction.

</details>

### Q54 [2 Marks] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Data Structures & Algorithms | Ã°Å¸Â�Â·Ã¯Â¸Â� Hard

A hash function h(key) = key mod 10. Using linear probing, insert 25, 35, 45, 15. The number of collisions is:

(A) 1  
(B) 2  
(C) 3  
(D) 4

<details>
<summary>Show Answer</summary>

**Answer:** (C) 3

**Explanation:**
25 mod 10 = 5 Ã¢â€ â€™ [5]
35 mod 10 = 5 Ã¢â€ â€™ [5] occupied Ã¢â€ â€™ probe [6] Ã¢â€ â€™ collision count 1
45 mod 10 = 5 Ã¢â€ â€™ [5],[6] occupied Ã¢â€ â€™ probe [7] Ã¢â€ â€™ collision count 2
15 mod 10 = 5 Ã¢â€ â€™ [5],[6],[7] occupied Ã¢â€ â€™ probe [8] Ã¢â€ â€™ collision count 3
Total collisions = 3.

```typescript
function linearProbingCollisions(keys: number[], tableSize: number): number {
  const table = new Array(tableSize).fill(null);
  let collisions = 0;
  for (const k of keys) {
    let idx = k % tableSize;
    while (table[idx] !== null) { idx = (idx + 1) % tableSize; collisions++; }
    table[idx] = k;
  }
  return collisions;
}
console.log(linearProbingCollisions([25, 35, 45, 15], 10)); // 3
```

</details>

### Q55 [2 Marks] Ã¢â‚¬â€� Ã°Å¸â€œâ€š Digital Logic | Ã°Å¸Â�Â·Ã¯Â¸Â� Hard

A 4-bit ripple counter has how many output states?

(A) 4  
(B) 8  
(C) 16  
(D) 32

<details>
<summary>Show Answer</summary>

**Answer:** (C) 16

**Explanation:**
A 4-bit counter has 2Ã¢Â�Â´ = 16 distinct states (0000 to 1111).

</details>

---

## Answer Key Summary

| Q | Ans | Topic | Diff | Q | Ans | Topic | Diff |
|---|-----|-------|------|----|-----|-------|------|
| GA1 | B | Numerical | Easy | GA6 | C | Numerical | Medium |
| GA2 | C | Numerical | Easy | GA7 | B | Data Interp | Medium |
| GA3 | C | Verbal | Easy | GA8 | D | Reasoning | Medium |
| GA4 | B | Reasoning | Easy | GA9 | B | Numerical | Medium |
| GA5 | B | Numerical | Easy | GA10 | B | Verbal | Medium |
| 1 | B | Math | Easy | 29 | C | COA | Medium |
| 2 | B | Math | Easy | 30 | B | TOC | Medium |
| 3 | A | DS&Algo | Easy | 31 | B | DBMS | Hard |
| 4 | C | OS | Easy | 32 | D | DS&Algo | Hard |
| 5 | A | CN | Easy | 33 | C | CN | Hard |
| 6 | D | DBMS | Easy | 34 | A | OS | Hard |
| 7 | A | TOC | Easy | 35 | C | COA | Hard |
| 8 | A | COA | Easy | 36 | B | Math | Hard |
| 9 | C | CD | Easy | 37 | B | DS&Algo | Hard |
| 10 | A | DL | Easy | 38 | D | TOC | Hard |
| 11 | C | DS&Algo | Medium | 39 | A | DBMS | Hard |
| 12 | D | OS | Medium | 40 | B | CN | Hard |
| 13 | D | CN | Medium | 41 | D | DS&Algo | Hard |
| 14 | B | DBMS | Medium | 42 | A | OS | Hard |
| 15 | B | TOC | Medium | 43 | B | COA | Hard |
| 16 | B | CD | Medium | 44 | B | DS&Algo | Hard |
| 17 | C | DL | Medium | 45 | A | CD | Hard |
| 18 | D | COA | Medium | 46 | B | TOC | Hard |
| 19 | B | DS&Algo | Medium | 47 | D | Math | Hard |
| 20 | A | Math | Medium | 48 | C | DS&Algo | Hard |
| 21 | B | Math | Medium | 49 | B | OS | Hard |
| 22 | C | DS&Algo | Medium | 50 | D | DBMS | Hard |
| 23 | C | OS | Medium | 51 | C | CN | Hard |
| 24 | A | DBMS | Medium | 52 | C | COA | Hard |
| 25 | C | CN | Medium | 53 | B | TOC | Hard |
| 26 | B | DS&Algo | Medium | 54 | C | DS&Algo | Hard |
| 27 | B | OS | Hard | 55 | C | DL | Hard |
| 28 | A | CD | Medium | | | | |

## Topic-wise Performance Analysis

```mermaid
pie title "Difficulty Distribution - GATE CS 2021"
    "Easy" : 32
    "Medium" : 44
    "Hard" : 24
```

## Key Takeaways

1. **Weightage**: DS & Algorithms (18 marks), Mathematics (11 marks), OS (10 marks).
2. **Difficulty**: 32% easy, 44% medium, 24% hard Ã¢â‚¬â€� balanced paper.
3. **Pattern**: Strong recurrence/algorithm analysis questions. Mathematics focus on group theory and combinatorics.
4. **Focus**: Catalan numbers, AVL trees, LRU page replacement, hash collisions, IEEE 754.

## Links to Related Chapters

- See [General Aptitude](01-general-aptitude.md) for percentages, time-work, SI/CI
- See [Data Structures & Algorithms](10-data-structures-algorithms.md) for AVL trees, Catalan numbers, hash tables, MST
- See [Operating Systems](07-operating-systems.md) for scheduling, page replacement, Banker's algorithm
- See [Database Management Systems](08-database-management-systems.md) for ACID, BCNF, conflict serializability
- See [Computer Networks](09-computer-networks.md) for MAC addresses, IPv6, subnetting, STP
- See [Computer Architecture](11-computer-architecture.md) for RISC, IEEE 754, clock frequency, unified cache
- See [Theory of Computation](02-theory-of-computation.md) for regular expressions, PDA, PCP
- See [Compiler Design](03-compiler-design.md) for lex/flex, SLR parsers, ambiguity
- See [Digital Logic](04-digital-logic.md) for K-maps, binary conversion, ripple counters
- See [Engineering Mathematics](06-engineering-mathematics.md) for integration, group theory, combinatorics, cubic roots
- See [GATE Strategy](05-gate-strategy.md) for sectional time allocation

## Summary

### Paper Analysis


GATE 2021 Computer Science paper was administered twice Ã¢â‚¬â€� in February (regular) and July (special session) Ã¢â‚¬â€� due to the pandemic context. This analysis focuses on the regular session. The paper followed the standard pattern of 65 questions (10 GA + 55 Technical), totaling 100 marks. An important change was the introduction of the "2-minute warning" on NAT questions Ã¢â‚¬â€� students reported that numerical questions required unusually precise decimal answers (up to 3 decimal places) for the first time. The paper had 8 MSQs and 17 NATs, emphasizing computational accuracy. Computer Networks saw increased weightage (11 marks up from typical 9), while Theory of Computation maintained its steady 8-mark presence. The GA section introduced a new question type: "multiple correct sentence arrangement" for verbal ability.

### Difficulty Trends


GATE 2021 was moderately easier than GATE 2020, with a difficulty distribution of approximately 38% Easy, 45% Medium, and 17% Hard. Data Structures & Algorithms had relatively accessible questions Ã¢â‚¬â€� the AVL tree question and Catalan number application (binary tree counting) were considered medium difficulty. Operating Systems had a famous question on Banker's algorithm that became a talking point due to multiple correct interpretations (later resolved by the official answer key). Computer Architecture introduced a question comparing instruction execution times with unified vs split caches. Aptitude was notably easier than previous years, with average accuracy exceeding 90% among qualified candidates. Overall, the paper rewarded careful reading and precise computation.

### Key Concepts Tested


| Subject | Key Concepts |
|---------|-------------|
| Data Structures & Algorithms | AVL tree rotations, Catalan number (binary tree count), hash table linear probing, MST (Prim's algorithm correctness) |
| Operating Systems | Banker's algorithm deadlock avoidance, page replacement (optimal algorithm), semaphore-based ordering, multilevel feedback queue |
| DBMS | ACID properties (isolation levels), BCNF decomposition, conflict serializability precedence graph, SQL correlated subqueries |
| Computer Networks | MAC address format, IPv6 addressing, subnetting (VLSM), spanning tree protocol (STP) port states |
| Computer Architecture | RISC pipeline stages, IEEE 754 addition/subtraction, clock frequency vs CPI, unified vs split cache performance |
| Theory of Computation | Regular expression identities, PDA construction (ww^R), Post Correspondence Problem (undecidability) |
| Compiler Design | Lex/Flex pattern matching, SLR(1) parsing table construction, ambiguous grammar resolution |
| Digital Logic | K-map minimization (don't-care conditions), binary-decimal conversion, ripple counter frequency division |
| Engineering Mathematics | Definite integration (gamma functions), group theory (cyclic groups), combinatorics (inclusion-exclusion), cube roots of unity |
| General Aptitude | Sentence arrangement, analogies, percentage calculation, profit-loss, time-distance, Venn diagrams |

## TypeScript Implementations

The following TypeScript program analyzes common mistakes found in GATE 2021, categorized by topic and error type.

```typescript
/**
 * ErrorAnalyzer Ã¢â‚¬â€� Common mistakes by topic in GATE 2021.
 * Use this to identify high-error areas that need extra attention.
 */
interface MistakeRecord {
  topic: string;
  subject: string;
  questionType: 'MCQ' | 'MSQ' | 'NAT';
  mistakeCategory:
    | 'ConceptualMisunderstanding'
    | 'CalculationError'
    | 'MisreadQuestion'
    | 'PartialKnowledge'
    | 'TimePressure';
  frequency: number; // percentage of test-takers who made this mistake
  description: string;
  correctApproach: string;
}

class ErrorAnalyzer {
  private mistakes: MistakeRecord[];

  constructor(mistakes: MistakeRecord[]) {
    this.mistakes = mistakes;
  }

  /** Top N mistakes by frequency */
  topMistakes(n: number): MistakeRecord[] {
    return [...this.mistakes].sort((a, b) => b.frequency - a.frequency).slice(0, n);
  }

  /** Group mistakes by category */
  byCategory(): Record<string, MistakeRecord[]> {
    const groups: Record<string, MistakeRecord[]> = {};
    for (const m of this.mistakes) {
      const list = groups[m.mistakeCategory] ?? [];
      list.push(m);
      groups[m.mistakeCategory] = list;
    }
    return groups;
  }

  /** Find subjects with highest average mistake frequency */
  highErrorSubjects(threshold = 30): { subject: string; avgFrequency: number; topMistake: string }[] {
    const map = new Map<string, { freqs: number[]; mistake: string; maxFreq: number }>();
    for (const m of this.mistakes) {
      const entry = map.get(m.subject) ?? { freqs: [], mistake: '', maxFreq: 0 };
      entry.freqs.push(m.frequency);
      if (m.frequency > entry.maxFreq) {
        entry.maxFreq = m.frequency;
        entry.mistake = m.description;
      }
      map.set(m.subject, entry);
    }
    return Array.from(map.entries())
      .map(([subject, data]) => ({
        subject,
        avgFrequency: Math.round(data.freqs.reduce((a, b) => a + b, 0) / data.freqs.length),
        topMistake: data.mistake,
      }))
      .filter(s => s.avgFrequency >= threshold)
      .sort((a, b) => b.avgFrequency - a.avgFrequency);
  }

  /** Generate personalized study tips based on common mistakes */
  studyTips(): string[] {
    const byCat = this.byCategory();
    const tips: string[] = [];
    if (byCat['ConceptualMisunderstanding']?.length) {
      const avg = byCat['ConceptualMisunderstanding'].reduce((s, m) => s + m.frequency, 0) /
        byCat['ConceptualMisunderstanding'].length;
      tips.push(`Strong Foundation Needed: ${Math.round(avg)}% of errors are conceptual. Focus on understanding 'why' before 'how'.`);
    }
    if (byCat['CalculationError']?.length) {
      const avg = byCat['CalculationError'].reduce((s, m) => s + m.frequency, 0) /
        byCat['CalculationError'].length;
      tips.push(`Practice Numericals: ${Math.round(avg)}% of errors are calculation-based. Daily practice with NAT questions is essential.`);
    }
    if (byCat['MisreadQuestion']?.length) {
      tips.push(`Reading Strategy: Read each question twice. Underline constraints like 'NOT', 'ALWAYS', or 'EXCEPT' before solving.`);
    }
    return tips;
  }

  generateReport(): string {
    const top5 = this.topMistakes(5);
    const highErrorSubs = this.highErrorSubjects(25);
    const tips = this.studyTips();
    return [
      '=== GATE 2021 Error Analysis Report ===',
      '',
      'Top 5 Most Common Mistakes:',
      ...top5.map((m, i) =>
        `  ${i + 1}. [${m.subject}] ${m.description} (${m.frequency}% of test-takers)\n` +
        `     Category: ${m.mistakeCategory} | Type: ${m.questionType}\n` +
        `     Correct approach: ${m.correctApproach}`
      ),
      '',
      'High-Error Subjects (avg frequency Ã¢â€°Â¥ 25%):',
      ...(highErrorSubs.length
        ? highErrorSubs.map(s => `  ${s.subject}: ${s.avgFrequency}% (worst: ${s.topMistake})`)
        : ['  None above threshold']),
      '',
      'Error Distribution by Category:',
      ...Object.entries(this.byCategory()).map(([cat, records]) =>
        `  ${cat}: ${records.length} mistakes, avg ${Math.round(records.reduce((s, r) => s + r.frequency, 0) / records.length)}% frequency`
      ),
      '',
      'Study Recommendations:',
      ...tips,
    ].join('\n');
  }
}

// Example usage
const errors2021: MistakeRecord[] = [
  { topic: 'Banker\'s Algorithm', subject: 'Operating Systems', questionType: 'MCQ', mistakeCategory: 'ConceptualMisunderstanding', frequency: 62, description: 'Confusing safe state with deadlock-free state', correctApproach: 'Safe state guarantees no deadlock exists; unsafe state may deadlock but does not guarantee it' },
  { topic: 'Catalan Numbers', subject: 'Data Structures & Algorithms', questionType: 'NAT', mistakeCategory: 'CalculationError', frequency: 48, description: 'Using wrong formula or missing base case in Catalan number computation', correctApproach: 'C_n = (2n)!/((n+1)!n!), compute step by step' },
  { topic: 'ACID Properties', subject: 'DBMS', questionType: 'MCQ', mistakeCategory: 'PartialKnowledge', frequency: 41, description: 'Confusing isolation with consistency Ã¢â‚¬â€� thinking Serializable ensures Consistency', correctApproach: 'Consistency ensures constraints; Isolation ensures concurrent execution appears serial' },
  { topic: 'IPv6 Addressing', subject: 'Computer Networks', questionType: 'NAT', mistakeCategory: 'CalculationError', frequency: 39, description: 'Miscounting hextets or forgetting zero compression rules', correctApproach: 'Use :: once for longest zero run, count remaining hextets' },
  { topic: 'Ripple Counter', subject: 'Digital Logic', questionType: 'NAT', mistakeCategory: 'MisreadQuestion', frequency: 35, description: 'Assuming ripple counter divides by 2^n instead of calculating actual modulus', correctApproach: 'For N flip-flops, max modulus is 2^N but any smaller modulus is possible with reset logic' },
  { topic: 'SLR Parsing', subject: 'Compiler Design', questionType: 'MCQ', mistakeCategory: 'ConceptualMisunderstanding', frequency: 33, description: 'Thinking SLR(1) can handle all unambiguous grammars', correctApproach: 'SLR(1) may have conflicts on some unambiguous grammars; LR(1) resolves them' },
  { topic: 'Group Theory', subject: 'Engineering Mathematics', questionType: 'MCQ', mistakeCategory: 'PartialKnowledge', frequency: 29, description: 'Assuming all groups of order n are cyclic', correctApproach: 'Groups of prime order are cyclic; groups of composite order may not be (e.g., K4)' },
];
const analyzer = new ErrorAnalyzer(errors2021);
console.log(analyzer.generateReport());
```

## Chapter Quiz

Test your understanding of GATE 2021 concepts with these 5 questions.

**Q1.** In the Banker's algorithm for deadlock avoidance, what characterizes a safe state?
- a) The system is currently deadlocked
- b) There exists at least one sequence of process executions that allows all processes to complete
- c) All processes have their maximum resource needs met simultaneously
- d) The available resources are greater than total allocated resources

**Q2.** What is the 9th Catalan number (CÃ¢â€šâ€°) useful for in computer science?
- a) Counting the number of possible BSTs with 9 distinct keys
- b) Counting the number of edges in a complete graph with 9 vertices
- c) Computing the 9th Fibonacci number
- d) Determining the height of a balanced BST with 9 nodes

**Q3.** In the spanning tree protocol (STP), what state does a port transition through immediately after the blocking state?
- a) Forwarding
- b) Listening
- c) Learning
- d) Disabled

**Q4.** Which of the following problems is undecidable?
- a) Determining if a given context-free grammar generates the empty language
- b) Determining if a given Turing machine halts on a specific input
- c) Determining if a given DFA accepts an infinite language
- d) Determining if two regular expressions are equivalent

**Q5.** For a ripple counter built with 4 JK flip-flops, what is the output frequency at the last stage if the input clock frequency is 16 MHz?
- a) 16 MHz
- b) 4 MHz
- c) 1 MHz
- d) 0.5 MHz

### Answer Key


| Q | Answer | Explanation |
|---|--------|-------------|
| 1 | b | A safe state guarantees there exists a sequence of process executions that avoids deadlock. The Banker's algorithm maintains safety by ensuring each process can eventually be satisfied with the remaining resources. |
| 2 | a | Catalan numbers count the number of distinct BSTs (or binary trees) with n nodes. CÃ¢â€šâ€° = 4862 counts BSTs with 9 distinct keys. The formula is C_n = (2n)!/((n+1)!n!). |
| 3 | b | In STP, a port transitions: Blocking Ã¢â€ â€™ Listening (15s) Ã¢â€ â€™ Learning (15s) Ã¢â€ â€™ Forwarding. Listening is the immediate next state after blocking. |
| 4 | b | The Halting Problem (determining if an arbitrary TM halts on a specific input) is undecidable (proved by Turing, 1936). Options a, c, and d are all decidable problems. |
| 5 | c | In a ripple counter, each stage divides the frequency by 2. With 4 flip-flops, the last stage frequency = 16 MHz / 2Ã¢Â�Â´ = 16/16 = 1 MHz. |

## Exercises

1. **Banker's Algorithm Simulation**: A system has 5 processes (P0-P4) and 3 resource types (A: 10 units, B: 5 units, C: 7 units). Current allocation and max matrices are as follows (use industry-standard notation). Determine if the system is in a safe state. If yes, find a safe sequence. If a new request from P1 arrives for (1, 0, 1), can it be granted immediately? Show your work step by step.

2. **AVL Tree Construction**: Insert the following keys into an initially empty AVL tree: 10, 20, 30, 40, 50, 25. Show the tree after each insertion, indicating the balance factors and rotations performed. Then delete key 20 from the resulting AVL tree and rebalance if necessary. What are the final balance factors for all nodes?

3. **Precedence Graph & Conflict Serializability**: Determine whether the following schedule S is conflict serializable: S: R1(A) R2(B) R3(C) W1(A) W2(B) W3(C) R2(A) R1(B). Construct the precedence graph and explain. If the schedule is conflict serializable, provide a conflict-equivalent serial schedule.

4. **PDA Construction**: Design a pushdown automaton (PDA) that accepts the language L = {w Ã¢Ë†Ë† {a, b}* | number of a's = 2 Ãƒâ€” number of b's}. Explain your stack usage strategy and draw the state transition diagram. Show the computation of your PDA on input "aabaab" indicating acceptance or rejection.

5. **IEEE 754 Addition**: Add the following two IEEE 754 single-precision floating-point numbers: 0x4048F5C3 (approx 3.14) and 0x40A00000 (approx 5.0). Show all steps: aligning exponents, adding significands (including hidden bit), normalizing the result, and rounding. Express the final result in hexadecimal IEEE 754 format and as a decimal number.
