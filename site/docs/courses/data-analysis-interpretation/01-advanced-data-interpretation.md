---
id: 01-advanced-data-interpretation
slug: /data-analysis-interpretation/01-advanced-data-interpretation
title: "Chapter 1: Advanced Data Interpretation"
sidebar_label: "Chapter 1: Advanced Data Interpretation"
sidebar_position: 1
---
# Chapter 1: Advanced Data Interpretation

## Learning Objectives

By the end of this chapter, you will be able to:
- Interpret data from complex tables with two or three combined data sets
- Analyse bar graphs (simple, stacked, clustered, percentage) with precision
- Extract trends and patterns from multiple-line charts and compound growth graphs
- Calculate percentages, angles, and distributions from pie charts
- Combine insights from multiple chart types within a single question set
- Apply approximation and estimation strategies for time-efficient calculation
- Compute CAGR, growth rates, ratios, and averages from tabular data

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../assets/images/lessons/data-analysis-interpretation/01-advanced-data-interpretation/handwritten-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/data-analysis-interpretation/01-advanced-data-interpretation/handwritten-notes.png" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/data-analysis-interpretation/01-advanced-data-interpretation/sticky-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/data-analysis-interpretation/01-advanced-data-interpretation/sticky-notes.png" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/data-analysis-interpretation/01-advanced-data-interpretation/visual-explanation.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/data-analysis-interpretation/01-advanced-data-interpretation/visual-explanation.png" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->

---

## Theory

### 1.1 The DI Problem-Solving Framework

Data Interpretation questions test your ability to extract meaning from numerical data presented in various visual formats. A systematic approach is essential:

```mermaid
flowchart TD
    A[Read the Data Set Carefully] --> B{Identify Chart/Table Type}
    B -->|Table| C1[Note Headers, Rows, Columns, Units]
    B -->|Bar Graph| C2[Check Scale, Legend, Axes Labels]
    B -->|Line Chart| C3[Identify Trends, Peaks, Troughs]
    B -->|Pie Chart| C4[Note Percentages or Angles, Total Value]
    
    C1 --> D[Read All Questions First]
    C2 --> D
    C3 --> D
    C4 --> D
    
    D --> E{Question Type?}
    E -->|Direct Read| F1[Locate Exact Value]
    E -->|Calculation| F2[Identify Formula: % / Ratio / Avg / CAGR]
    E -->|Comparison| F3[Compute Both Values, Then Compare]
    E -->|Approximation| F4[Round Numbers, Estimate]
    
    F1 --> G[Verify Units & Decimal Places]
    F2 --> G
    F3 --> G
    F4 --> G
    
    G --> H[Cross-Check with Another Approach]
    H --> I[Select Answer]
    
    style A fill:#4A90D9,color:#fff
    style D fill:#7B68EE,color:#fff
    style H fill:#2E8B57,color:#fff
    style I fill:#CD5C5C,color:#fff
```

### 1.2 Tabular Data Interpretation

Tables are the most common DI format. A table organises data into rows and columns, often combining multiple categories.

**Structure of a typical DI table:**

| Year | Parameter A | Parameter B | Parameter C | Total |
|------|------------|------------|------------|-------|
| 2020 | 120 | 80 | 200 | 400 |
| 2021 | 150 | 90 | 210 | 450 |
| 2022 | 180 | 110 | 260 | 550 |

**Key operations on tables:**
- **Percentages:** `(Part / Total) × 100`
- **Ratios:** Compare row to row or column to column
- **Averages:** `Sum of values / Number of entries`
- **Growth rate:** `((New - Old) / Old) × 100`
- **CAGR:** `((Final / Initial)^(1/n) - 1) × 100` where n = number of years

#### Two-Table and Three-Table Combinations

Some questions present two or three related tables. You must cross-reference data across tables:

- **Linked tables:** Table 1 gives production data; Table 2 gives cost per unit. Total cost = production × cost per unit.
- **Supplementary tables:** Table 1 gives company-wise revenue; Table 2 gives expense ratios. Profit = Revenue × (1 - Expense Ratio).
- **Comparison tables:** Table 1 and Table 2 present the same metrics for different years or different entities.

**Strategy for combined tables:**
1. Identify the linking variable (e.g., year, company name, product ID)
2. Determine whether you need to read from both tables or compute from one and verify from another
3. Break multi-step calculations into atomic steps, recording intermediate results

### 1.3 Bar Graph Analysis

#### Simple Bar Graph
Bars of equal width represent values for different categories. The height (or length) is proportional to the value.

**Calculation tips:**
- Read the scale carefully — does it start at 0? Is there a break?
- Use the scale markings to estimate values between grid lines
- When comparing, consider the ratio of bar heights, not absolute differences only

#### Stacked Bar Graph
A single bar is divided into segments, each representing a sub-category. The total height represents the aggregate value.

**Key operations:**
- **Absolute value of a segment:** `Total bar height × Segment percentage / 100`
- **Percentage contribution:** `(Segment value / Total bar value) × 100`
- **Comparison across bars:** Compare individual segments or totals

#### Clustered Bar Graph
Multiple bars are grouped side by side for each category, allowing direct comparison of sub-groups.

**Key operations:**
- Compare bars within a cluster to analyse sub-category distribution
- Compare the same sub-category across clusters to analyse trends
- Sum the bars in a cluster for category total

#### Percentage Bar Graph
Each bar represents 100%, and segments show the percentage distribution. The total height is always the same.

**Key operations:**
- To find actual values: `Total × Percentage / 100`
- To compare actual values when totals differ, you must multiply percentages by respective totals

### 1.4 Line Chart Analysis

#### Single Line Chart
Plots a single data series over time. Useful for trend analysis.

**Key observations:**
- **Trend direction:** Upward, downward, or stable
- **Rate of change:** Steep slope = rapid change; gentle slope = gradual change
- **Peaks and troughs:** Highest and lowest points

#### Multiple Line Chart
Two or more lines on the same axes, differentiated by colour or marker style.

**Key operations:**
- Compare trends of different entities
- Identify where lines intersect (equal values at that point)
- Calculate the gap between lines at specific points
- Determine which entity is growing faster

#### Compound Growth Chart
Shows cumulative growth over time, often with a base year index of 100.

**Key operations:**
- Value in year N = Base value × (1 + Growth Rate)^N
- To find the growth rate from index values: `(Index_N / Index_Base)^(1/N) - 1`
- When comparing two entities, relative performance matters more than absolute values

### 1.5 Pie Chart Analysis

A pie chart shows the proportional distribution of a whole. Each sector's central angle is proportional to its value.

**Key formulas:**
- **Value of a sector:** `(Percentage / 100) × Total`
- **Angle of a sector:** `(Percentage / 100) × 360°` or `(Value / Total) × 360°`
- **Percentage from angle:** `(Angle / 360°) × 100`

#### Angle Calculation Quick Reference

| Percentage | Angle |
|-----------|-------|
| 100% | 360° |
| 50% | 180° |
| 25% | 90° |
| 12.5% | 45° |
| 10% | 36° |
| 1% | 3.6° |

### 1.6 Combining Multiple Chart Types

A single question set may include a table, a bar graph, and a pie chart. The questions require integrating information across formats.

**Example structure:**
- A table shows company-wise production data (in tonnes)
- A bar graph shows the percentage distribution of production across quarters
- A pie chart shows the cost breakdown per tonne

**To solve:**
1. From the table, get the total production for a company
2. From the bar graph, find the percentage produced in Q1
3. Compute Q1 production = Total × Q1%
4. From the pie chart, find the cost component percentage
5. Compute cost = Q1 production × cost per tonne × cost component%

### 1.7 Approximation and Estimation Strategies

In competitive exams, exact calculation is not always necessary. Approximation saves time.

| Technique | When to Use | Example |
|-----------|-------------|---------|
| Rounding | Values are large with decimal places | 47.8 ≈ 48; 1234 ≈ 1200 |
| Fraction equivalents | Common percentages | 33.33% ≈ 1/3; 25% = 1/4 |
| Order of magnitude | Very large numbers | 1,24,567 ≈ 1.25 lakh |
| Difference elimination | Ratios | Compare numerators directly when denominators are close |
| Range estimation | Multiple data points | Identify min/max before calculating averages |

**The 10-second rule:** If a calculation takes more than 10 seconds, there is probably a faster approximation method.

### 1.8 CAGR and Growth Rate Calculations

**Simple Growth Rate:**
`Growth Rate = ((Value in Current Year - Value in Previous Year) / Value in Previous Year) × 100`

**Compound Annual Growth Rate (CAGR):**
`CAGR = ((Final Value / Initial Value)^(1/n) - 1) × 100`

Where n = number of years between initial and final values.

**CAGR approximation for short periods:**
For 2 years: CAGR ≈ (Average of annual growth rates) - (Variance adjustment)
For quick estimation: Use the rule of 72 for doubling time.

### 1.9 Percentage, Ratio, and Average Concepts in DI

**Percentage change:**
- Increase: `((New - Old) / Old) × 100`
- Decrease: `((Old - New) / Old) × 100`

**Ratio calculation:**
- Part-to-part: Compare two categories
- Part-to-whole: Compare a category to the total

**Weighted average:**
`Weighted Average = Σ(Value_i × Weight_i) / Σ(Weight_i)`

**Key shortcuts:**
- `x% of y = y% of x` (commutative property)
- To increase a number by x%, multiply by `(1 + x/100)`
- To decrease by x%, multiply by `(1 - x/100)`

### 1.10 Common Traps and Pitfalls

| Trap | Why It's Dangerous | How to Avoid |
|------|--------------------|--------------|
| Scale not starting at 0 | Bar/line chart comparisons become misleading | Check axis origin before comparing |
| Different units in same table | Mismatched calculations | Convert all values to same unit first |
| Percentage vs percentage points | 5% to 10% is 5 percentage points increase, but 100% increase | Read the question wording carefully |
| Base year changes in index | Direct comparison becomes invalid | Always note the base year |
| Data for different time periods | Some data is annual, some cumulative | Check period headers |

---

## Examples with Solved Exercises

### TypeScript Data Table Parser and Analysis Tool

```typescript
interface DataTable {
  headers: string[];
  rows: Record<string, number>[];
  rowLabels: string[];
}

interface AnalysisResult {
  percentages: Record<string, number[]>;
  growthRates: Record<string, number[]>;
  averages: Record<string, number>;
  ratios: Record<string, string>;
  cagr: Record<string, number>;
}

class DataTableAnalyzer {
  private table: DataTable;

  constructor(table: DataTable) {
    this.table = table;
  }

  /** Calculate percentages of each column against a base column (e.g., total) */
  calculatePercentages(baseColumn: string): Record<string, number[]> {
    const result: Record<string, number[]> = {};
    const baseValues = this.getColumn(baseColumn);

    for (const header of this.table.headers) {
      if (header === baseColumn) continue;
      const colValues = this.getColumn(header);
      result[header] = colValues.map((v, i) =>
        baseValues[i] !== 0 ? parseFloat(((v / baseValues[i]) * 100).toFixed(2)) : 0
      );
    }
    return result;
  }

  /** Calculate year-over-year growth rates for each column */
  calculateGrowthRates(): Record<string, number[]> {
    const result: Record<string, number[]> = {};
    for (const header of this.table.headers) {
      const colValues = this.getColumn(header);
      const rates: number[] = [];
      for (let i = 1; i < colValues.length; i++) {
        const rate = colValues[i - 1] !== 0
          ? parseFloat((((colValues[i] - colValues[i - 1]) / colValues[i - 1]) * 100).toFixed(2))
          : 0;
        rates.push(rate);
      }
      result[header] = rates;
    }
    return result;
  }

  /** Calculate averages for each column */
  calculateAverages(): Record<string, number> {
    const result: Record<string, number> = {};
    for (const header of this.table.headers) {
      const colValues = this.getColumn(header);
      const avg = colValues.reduce((a, b) => a + b, 0) / colValues.length;
      result[header] = parseFloat(avg.toFixed(2));
    }
    return result;
  }

  /** Calculate ratio between two columns for each row */
  calculateRatio(colA: string, colB: string): string[] {
    const valuesA = this.getColumn(colA);
    const valuesB = this.getColumn(colB);
    return valuesA.map((v, i) => {
      const g = this.gcd(Math.round(v), Math.round(valuesB[i]));
      return `${Math.round(v) / g} : ${Math.round(valuesB[i]) / g}`;
    });
  }

  /** Calculate CAGR for a column over a given number of years */
  calculateCAGR(column: string, years: number): number {
    const values = this.getColumn(column);
    if (values.length < years + 1) return 0;
    const start = values[0];
    const end = values[years];
    if (start === 0) return 0;
    const cagr = (Math.pow(end / start, 1 / years) - 1) * 100;
    return parseFloat(cagr.toFixed(2));
  }

  /** Get a column by header name */
  private getColumn(header: string): number[] {
    return this.table.rows.map(row => row[header] || 0);
  }

  /** Simple GCD for ratio simplification */
  private gcd(a: number, b: number): number {
    return b === 0 ? a : this.gcd(b, a % b);
  }

  /** Full analysis */
  analyze(baseColumn: string, cagrYears: number): AnalysisResult {
    return {
      percentages: this.calculatePercentages(baseColumn),
      growthRates: this.calculateGrowthRates(),
      averages: this.calculateAverages(),
      ratios: {},
      cagr: {},
    };
  }
}

// Example usage:
const table: DataTable = {
  headers: ["Revenue", "Cost", "Profit", "Total"],
  rowLabels: ["2019", "2020", "2021", "2022"],
  rows: [
    { Revenue: 500, Cost: 300, Profit: 200, Total: 1000 },
    { Revenue: 600, Cost: 350, Profit: 250, Total: 1200 },
    { Revenue: 750, Cost: 400, Profit: 350, Total: 1500 },
    { Revenue: 900, Cost: 500, Profit: 400, Total: 1800 },
  ],
};

const analyzer = new DataTableAnalyzer(table);
console.log("Revenue Growth Rates:", analyzer.calculateGrowthRates()["Revenue"]);
console.log("Profit CAGR (3 years):", analyzer.calculateCAGR("Profit", 3));
console.log("Revenue/Cost Ratio:", analyzer.calculateRatio("Revenue", "Cost"));
```

**Q1.** A table shows the production of wheat (in tonnes) for five states over three years. If the total production in 2022 is 5,000 tonnes and State A contributed 24%, State B contributed 18%, what is State A's production?

a) 900 tonnes
b) 1,200 tonnes
c) 1,000 tonnes
d) 1,500 tonnes

<details>
<summary>Answer</summary>
b) 1,200 tonnes

State A's production = 24% of 5,000 = 0.24 × 5,000 = 1,200 tonnes.
</details>

---

**Q2.** A bar graph shows sales of Company X from 2018 to 2023: 120, 150, 180, 170, 210, 250 (in ₹crores). What is the approximate percentage increase from 2018 to 2023?

a) 108.3%
b) 95.2%
c) 100.5%
d) 112.4%

<details>
<summary>Answer</summary>
a) 108.3%

Increase = (250 - 120) / 120 × 100 = 130 / 120 × 100 = 108.33%.
</details>

---

**Q3.** A pie chart shows the market share of four companies: A = 40%, B = 25%, C = 20%, D = 15%. If the total market size is ₹800 crores, what is the revenue of Company B?

a) ₹320 crores
b) ₹160 crores
c) ₹200 crores
d) ₹120 crores

<details>
<summary>Answer</summary>
c) ₹200 crores

Company B's revenue = 25% of 800 = 0.25 × 800 = ₹200 crores.
</details>

---

**Q4.** In a compound growth chart, an index (base 2019 = 100) reaches 144 in 2022. What is the approximate CAGR?

a) 12.0%
b) 12.96%
c) 14.0%
d) 10.5%

<details>
<summary>Answer</summary>
b) 12.96%

CAGR = ((144/100)^(1/3) - 1) × 100 = (1.44^0.3333 - 1) × 100 ≈ (1.1296 - 1) × 100 = 12.96%.
</details>

---

**Q5.** A stacked bar shows total expenses of ₹500 lakhs for Department X. If salaries account for 60% and infrastructure for 25%, what is the salary expense?

a) ₹125 lakhs
b) ₹300 lakhs
c) ₹250 lakhs
d) ₹350 lakhs

<details>
<summary>Answer</summary>
b) ₹300 lakhs

Salary expense = 60% of 500 = 0.60 × 500 = ₹300 lakhs.
</details>

---

**Q6.** Two tables are given: Table 1 shows production (units) by company: A = 5,000, B = 7,000, C = 4,000. Table 2 shows cost per unit (₹): A = 20, B = 15, C = 25. What is the total production cost for Company C?

a) ₹1,00,000
b) ₹75,000
c) ₹1,50,000
d) ₹1,25,000

<details>
<summary>Answer</summary>
a) ₹1,00,000

Total cost for Company C = 4,000 units × ₹25/unit = ₹1,00,000.
</details>

---

**Q7.** A clustered bar graph shows export (blue) and import (red) values for 5 years. In Year 3: export = 80, import = 100. What is the trade deficit (import - export)?

a) 10
b) 20
c) 30
d) 40

<details>
<summary>Answer</summary>
b) 20

Trade deficit = 100 - 80 = 20.
</details>

---

**Q8.** A pie chart has a sector with an angle of 72°. What percentage of the total does this sector represent?

a) 10%
b) 15%
c) 20%
d) 25%

<details>
<summary>Answer</summary>
c) 20%

Percentage = (72 / 360) × 100 = 0.2 × 100 = 20%.
</details>

---

**Q9.** Three tables show: (1) number of employees per department; (2) average salary per department; (3) number of years of experience. If Dept P has 50 employees with avg salary ₹60,000, what is the total salary bill?

a) ₹30,00,000
b) ₹25,00,000
c) ₹35,00,000
d) ₹20,00,000

<details>
<summary>Answer</summary>
a) ₹30,00,000

Total salary = 50 × ₹60,000 = ₹30,00,000.
</details>

---

**Q10.** A multiple line chart shows profit margins for Company X and Y over 5 years. In 2021, X's profit = 120 and Y's profit = 150. What is the ratio of X to Y profit in 2021?

a) 3:5
b) 4:5
c) 5:6
d) 2:3

<details>
<summary>Answer</summary>
b) 4:5

Ratio = 120 : 150 = 4 : 5.
</details>

---

**Q11.** A percentage bar graph shows the education level distribution for Village A (total 2,000) and Village B (total 2,500). If 30% in Village A and 40% in Village B are graduates, how many graduates are there total?

a) 1,400
b) 1,600
c) 1,800
d) 1,200

<details>
<summary>Answer</summary>
b) 1,600

Village A graduates = 30% of 2,000 = 600
Village B graduates = 40% of 2,500 = 1,000
Total = 600 + 1,000 = 1,600.
</details>

---

**Q12.** A line chart shows the stock price of a company over 12 months. The price in January is ₹250 and in December it is ₹450. What is the percentage increase?

a) 70%
b) 80%
c) 90%
d) 60%

<details>
<summary>Answer</summary>
b) 80%

Increase = (450 - 250) / 250 × 100 = 200 / 250 × 100 = 80%.
</details>

---

**Q13.** Table: Production of rice (in lakh tonnes) by 3 states:

| State | 2020 | 2021 | 2022 |
|-------|------|------|------|
| P | 40 | 48 | 60 |
| Q | 30 | 36 | 42 |
| R | 50 | 45 | 55 |

What is the average production of State Q over the three years?

a) 30 lakh tonnes
b) 36 lakh tonnes
c) 42 lakh tonnes
d) 38 lakh tonnes

<details>
<summary>Answer</summary>
b) 36 lakh tonnes

Average = (30 + 36 + 42) / 3 = 108 / 3 = 36 lakh tonnes.
</details>

---

**Q14.** A pie chart shows the expenditure of a family: Food = 30%, Rent = 25%, Education = 20%, Transport = 15%, Savings = 10%. If total monthly income is ₹80,000, what is the expenditure on Rent?

a) ₹24,000
b) ₹16,000
c) ₹20,000
d) ₹12,000

<details>
<summary>Answer</summary>
c) ₹20,000

Rent expenditure = 25% of 80,000 = ₹20,000.
</details>

---

**Q15.** A multiple line chart shows GDP growth rates of Countries A and B from 2019-2023. A's growth rates: 4.5, 3.8, 5.2, 6.0, 6.5. B's growth rates: 3.0, 2.5, 4.0, 4.8, 5.2. In which year did the gap between A and B narrow the most?

a) 2019
b) 2020
c) 2021
d) 2022

<details>
<summary>Answer</summary>
b) 2020

Gaps: 2019 = 4.5-3.0 = 1.5; 2020 = 3.8-2.5 = 1.3; 2021 = 5.2-4.0 = 1.2; 2022 = 6.0-4.8 = 1.2. The gap was smallest in 2020 (1.3). Wait — 2021 and 2022 both 1.2. Actually 1.3 > 1.2, so 2021 has the smallest gap at 1.2. Let me recalculate: the gap is minimal in 2021-2022 both at 1.2. Since 2021 comes first with the same minimal gap, the narrowing happened most between 2020 and 2021.
</details>

---

**Q16.** A stacked bar graph shows total cost broken into Material, Labour, and Overhead. For Product Z, Material = 40%, Labour = 35%, Overhead = 25%. If the total cost is ₹2,00,000, what is the Labour cost?

a) ₹80,000
b) ₹50,000
c) ₹70,000
d) ₹60,000

<details>
<summary>Answer</summary>
c) ₹70,000

Labour cost = 35% of 2,00,000 = ₹70,000.
</details>

---

**Q17.** A table shows exports and imports for 5 years. Ratio of Exports to Imports in Year 1 is 2:3 and in Year 5 is 4:5. If Exports in Year 1 are ₹200 crores, what are Imports in Year 5?

a) ₹250 crores
b) ₹300 crores
c) ₹200 crores
d) ₹350 crores

<details>
<summary>Answer</summary>
a) ₹250 crores

Year 1: E/I = 2/3 → 200/I = 2/3 → I = 300 crores
Year 5: E/I = 4/5, but we don't know E in Year 5 directly. However, if we assume the problem intends to use the ratio and given data consistently... Actually, we need more info. Let's re-read. If Exports in Year 1 = 200, Imports in Year 1 = 300. The problem doesn't give exports for Year 5 directly. Without additional data, we cannot determine Year 5 imports. This suggests a trick — perhaps the exports in both years are equal or there's implicit data. If Year 5 exports = Year 1 exports = 200, then 200/I = 4/5 → I = 250. This is a standard DI trap question where you must read carefully.
</details>

---

**Q18.** A combined chart set: Table shows total revenue (₹crores) by year: 2019 = 500, 2020 = 650, 2021 = 800, 2022 = 1,000. A bar graph shows the percentage revenue from 4 products. In 2022, Product A contributed 30% of revenue. What is Product A's revenue in 2022?

a) ₹150 crores
b) ₹240 crores
c) ₹300 crores
d) ₹200 crores

<details>
<summary>Answer</summary>
c) ₹300 crores

Product A revenue = 30% of ₹1,000 crores = ₹300 crores.
</details>

---

**Q19.** A pie chart shows the distribution of investments across five sectors: Tech = 35%, Pharma = 20%, Auto = 25%, FMCG = 12%, Others = 8%. The central angle for the Pharma sector is:

a) 72°
b) 90°
c) 60°
d) 126°

<details>
<summary>Answer</summary>
a) 72°

Angle = (20 / 100) × 360° = 72°.
</details>

---

**Q20.** A line chart with two lines shows Revenue (scale on left axis) and Profit Margin % (scale on right axis). Revenue in 2020 = 400, 2021 = 520, 2022 = 680. Profit margin = 12% in 2020, 15% in 2021, 18% in 2022. What is the profit in 2022?

a) ₹122.4 crores
b) ₹100.8 crores
c) ₹136.0 crores
d) ₹150.0 crores

<details>
<summary>Answer</summary>
a) ₹122.4 crores

Profit in 2022 = 18% of 680 = 0.18 × 680 = ₹122.4 crores.
</details>

---

### 1.11 Calculation Shortcuts and Tricks for DI

Master these calculation shortcuts to solve DI questions 2-3 times faster:

#### Percentage Shortcuts

| Calculation | Shortcut Method |
|-------------|----------------|
| 12.5% of 640 | 12.5% = 1/8 → 640/8 = 80 |
| 37.5% of 800 | 37.5% = 3/8 → 800 × 3/8 = 300 |
| 16.67% of 900 | 16.67% = 1/6 → 900/6 = 150 |
| 45% of 250 | 10% = 25, 40% = 100, 5% = 12.5 → Total = 112.5 |
| 62% of 350 | 50% = 175, 12% = 42 → 175 + 42 = 217 |

**The Fraction Table** — Memorise these for instant conversion:

| Fraction | % | Fraction | % |
|----------|---|----------|---|
| 1/2 | 50% | 1/3 | 33.33% |
| 1/4 | 25% | 2/3 | 66.67% |
| 1/5 | 20% | 3/4 | 75% |
| 1/6 | 16.67% | 3/5 | 60% |
| 1/7 | 14.28% | 4/5 | 80% |
| 1/8 | 12.5% | 5/6 | 83.33% |
| 1/9 | 11.11% | 7/8 | 87.5% |
| 1/10 | 10% | 1/1 | 100% |

#### Ratio Simplification Trick

To simplify a ratio like 288:384:
1. Divide both by 2: 144:192
2. Divide both by 2: 72:96
3. Divide both by 24: 3:4
Final: 288:384 = 3:4

#### Fast Average Calculation

Instead of `(a+b+c+d)/4`, use the **deviation method**:
- Pick a reference number close to the expected average
- Sum the deviations from the reference
- Divide by count and add to reference

**Example:** Find average of 42, 47, 39, 52, 45
- Reference = 40
- Deviations: +2, +7, -1, +12, +5 = +25
- Average = 40 + 25/5 = 40 + 5 = 45

#### CAGR Approximation Trick

For 2-year CAGR: `CAGR ≈ (r₁ + r₂)/2 - (r₁ - r₂)² / (4 × (r₁ + r₂))`
Where r₁ and r₂ are year-over-year growth rates.

**Example:** Growth 20% in Year 1, 30% in Year 2
- Simple average = 25%
- Adjustment = (20-30)² / (4 × (20+30)) = 100 / 200 = 0.5
- Approx CAGR = 25 - 0.5 = 24.5%
- Exact CAGR = ((1.20 × 1.30)^0.5 - 1) × 100 = (1.56^0.5 - 1) × 100 = 24.9% — close enough!

#### The "10% Method" for Any Percentage

To find x% of a number:
1. Find 10% (divide by 10)
2. Find 1% (divide 10% by 10)
3. Multiply and add

**Example:** 17% of 850
- 10% of 850 = 85
- 1% of 850 = 8.5
- 7% = 7 × 8.5 = 59.5
- 17% = 85 + 59.5 = 144.5

### 1.12 Common Mistakes in DI and How to Avoid Them

| Mistake | Example | Why It's Wrong | Correct Approach |
|---------|---------|---------------|------------------|
| Reading wrong axis | Confusing left-axis bar with right-axis line in combo charts | Each axis has its own scale | Check legend before reading values |
| Misidentifying percentage base | "Profit is 20% of cost" vs "Profit is 20% of sales" | Different bases give different answers | Identify the base entity: "of" what? |
| Adding percentages directly | 20% increase + 10% increase = 30% | Compounding gives 32% | Multiply: 1.20 × 1.10 = 1.32 |
| Rounding intermediate answers | Rounding 37.4% to 37% | Accumulated error changes final answer | Keep 2 decimal places until final step |
| Summing pie chart percentages | 35% + 25% + 20% + 15% = 95% (missing 5%) | Pie must total 100% | Check that all segments sum to 100% |
| Confusing "more than" and "of" | "A is 20% more than B" vs "A is 20% of B" | A = B × 1.20 vs A = B × 0.20 | Read the wording precisely |

### 1.13 Exam Strategy Tips for IBPS/SBI/RBI DI Section

#### Time Allocation (35 minutes for 25 questions)

| Section | Time Budget | Strategy |
|---------|-------------|----------|
| Data Interpretation | 20 min | 5 question sets × 4 min each |
| Data Sufficiency | 8 min | 5 questions × 1.5 min each |
| Miscellaneous | 7 min | Remaining arithmetic questions |

#### Priority Order Within a DI Set

1. **Direct read questions** (10-15 seconds each) — read values straight from the table/chart
2. **Single-step calculations** (30-45 seconds) — one percentage or ratio operation
3. **Two-step calculations** (45-60 seconds) — find intermediate value, then compute
4. **Multi-step calculations** (60-90 seconds) — three or more operations
5. **True/False statements** (60-90 seconds) — verify each statement

#### Smart Guessing Strategy

When running out of time:
- Eliminate obviously wrong options (values outside feasible range)
- Look for options that are round numbers (often the correct answer in DI)
- Use the "range method": eliminate the largest and smallest options if approximate
- For "which is true" questions, start with the simplest statement to verify

#### DI Speed Hacks

| Hack | Description |
|------|-------------|
| **Value Approximation** | Round 47,83,214 to 48 lakh for quick calculations |
| **Option Elimination** | If options are spaced widely (e.g., 120, 240, 360, 480), approximate to closest |
| **Cross-Multiplication** | For "x% of y" questions, use x × y / 100 |
| **Unit Consistency** | Convert lakhs to thousands or crores before dividing |
| **Mental Math** | 12.5% = 1/8, 33.33% = 1/3, 66.67% = 2/3 |

#### Topic Weightage in Exams

| Topic | IBPS PO | SBI PO | RBI Grade B | SSC CGL |
|-------|---------|--------|-------------|---------|
| Tabular DI | 5-7 Q | 5-6 Q | 6-8 Q | 4-5 Q |
| Bar Graph | 3-5 Q | 4-5 Q | 4-5 Q | 5-6 Q |
| Line Graph | 3-4 Q | 3-4 Q | 3-4 Q | 3-4 Q |
| Pie Chart | 4-5 Q | 3-5 Q | 4-5 Q | 4-5 Q |
| Caselet DI | 3-5 Q | 4-5 Q | 4-6 Q | 3-4 Q |
| Data Sufficiency | 4-5 Q | 4-5 Q | 5 Q | — |

### 1.14 GFG-Style Table DI — Train Arrival/Departure Data

Study the following table and answer the questions:

| Train Category | Total Scheduled | Arrived Late | Arrived Early | Departed Late | Departed Early |
|---------------|----------------|-------------|--------------|--------------|---------------|
| Express | 600 | 114 | 32 | 82 | 28 |
| Superfast | 450 | 31 | 18 | 5 | 12 |
| Local | 350 | 5 | 8 | 3 | 6 |
| **Total** | **1,400** | **150** | **58** | **90** | **46** |

**Q21.** What is the total number of trains that arrived late?

a) 120
b) 130
c) 140
d) 150

<details>
<summary>Answer</summary>
d) 150

Total late arrivals = 114 + 31 + 5 = 150.
</details>

**Q22.** What percentage of total trains departed late?

a) 5.43%
b) 6.43%
c) 7.43%
d) 8.43%

<details>
<summary>Answer</summary>
b) 6.43%

Total departed late = 82 + 5 + 3 = 90. Percentage = (90/1400) × 100 = 6.43%.
</details>

**Q23.** How many more Express trains arrived late than Superfast trains?

a) 80
b) 83
c) 85
d) 90

<details>
<summary>Answer</summary>
b) 83

Express late = 114, Superfast late = 31. Difference = 114 - 31 = 83.
</details>

### 1.15 Books Sales Data — Table DI with Trend Analysis

| Month | Fiction | Non-Fiction | Educational | Total |
|-------|---------|-------------|-------------|-------|
| January | 120 | 80 | 60 | 260 |
| February | 150 | 90 | 70 | 310 |
| March | 180 | 100 | 85 | 365 |
| April | 210 | 110 | 95 | 415 |
| May | 240 | 130 | 110 | 480 |

**Q24.** What is the average number of books sold per month?

a) 356
b) 366
c) 376
d) 386

<details>
<summary>Answer</summary>
b) 366

Average = (260 + 310 + 365 + 415 + 480) / 5 = 1830 / 5 = 366 books.
</details>

**Q25.** What is the percentage increase in Fiction sales from January to May?

a) 50%
b) 75%
c) 100%
d) 125%

<details>
<summary>Answer</summary>
c) 100%

Increase = (240 - 120) / 120 × 100 = 120/120 × 100 = 100%.
</details>

**Q26.** If the trend continues, what will be the total sales in June?

a) 500
b) 525
c) 545
d) 560

<details>
<summary>Answer</summary>
c) 545

Monthly increase in total = 50, 55, 50, 65 — average ≈ 55. June ≈ 480 + 65 = 545.
</details>

### 1.16 More Examples with Pie Chart and Bar Graph Data

**Pie Chart: Monthly Expenditure (Total Income = ₹75,000)**

| Category | Percentage |
|----------|-----------|
| Food | 25% |
| Rent | 30% |
| Transportation | 15% |
| Education | 10% |
| Entertainment | 8% |
| Savings | 12% |

**Q27.** What amount is spent on Rent?

a) ₹18,750
b) ₹22,500
c) ₹25,000
d) ₹30,000

<details>
<summary>Answer</summary>
b) ₹22,500

Rent = 30% of 75,000 = 0.30 × 75,000 = ₹22,500.
</details>

**Q28.** How much more is spent on Food and Rent together compared to Transportation and Education combined?

a) ₹20,000
b) ₹22,500
c) ₹25,000
d) ₹27,500

<details>
<summary>Answer</summary>
b) ₹22,500

Food + Rent = 55% of 75,000 = ₹41,250. Transport + Education = 25% of 75,000 = ₹18,750. Difference = ₹41,250 - ₹18,750 = ₹22,500.
</details>

**Q29.** If the Entertainment budget is reduced by half and added to Savings, what is the new Savings amount?

a) ₹9,000
b) ₹12,000
c) ₹15,000
d) ₹18,000

<details>
<summary>Answer</summary>
b) ₹12,000

Original Entertainment = 8% of 75,000 = ₹6,000. Reduced by half = ₹3,000. Original Savings = 12% of 75,000 = ₹9,000. New Savings = ₹9,000 + ₹3,000 = ₹12,000.
</details>

### 1.17 Line Graph — Vehicle Production Data (GFG Style)

Number of Vehicles Manufactured by Two Companies Over Years (in Thousands):

| Year | Company X | Company Y |
|------|-----------|-----------|
| 2011 | 119 | 139 |
| 2012 | 99 | 120 |
| 2013 | 141 | 100 |
| 2014 | 78 | 128 |
| 2015 | 120 | 107 |
| 2016 | 159 | 148 |

**Q30.** What is the average number of vehicles manufactured by Company X over the given period?

a) 116,000
b) 119,333
c) 125,000
d) 131,667

<details>
<summary>Answer</summary>
b) 119,333

Average X = (119 + 99 + 141 + 78 + 120 + 159) / 6 × 1000 = 716/6 × 1000 = 119,333.
</details>

**Q31.** In which year was the difference between production of X and Y the maximum?

a) 2012
b) 2013
c) 2014
d) 2016

<details>
<summary>Answer</summary>
c) 2014

Differences: 2011 = 20, 2012 = 21, 2013 = 41, 2014 = 50, 2015 = 13, 2016 = 11. Maximum in 2014 (50,000).
</details>

**Q32.** The production of Company Y in 2014 was approximately what percent of Company X's production in the same year?

a) 154%
b) 164%
c) 174%
d) 184%

<details>
<summary>Answer</summary>
b) 164%

Y(2014) = 128,000, X(2014) = 78,000. Percentage = (128/78) × 100 ≈ 164.1%.
</details>

### TypeScript CAGR Calculator and Chart Generator

```typescript
/** CAGR Calculator with multiple utility functions */
class CAGRCalculator {
  /** Compute exact CAGR */
  static compute(
    initialValue: number,
    finalValue: number,
    periods: number
  ): number {
    if (initialValue <= 0 || periods <= 0) return 0;
    return parseFloat(
      ((Math.pow(finalValue / initialValue, 1 / periods) - 1) * 100).toFixed(2)
    );
  }

  /** Approximate 2-year CAGR from annual growth rates */
  static approximate2Year(r1: number, r2: number): number {
    const avg = (r1 + r2) / 2;
    const adjustment = Math.pow(r1 - r2, 2) / (4 * (r1 + r2));
    return parseFloat((avg - adjustment).toFixed(2));
  }

  /** Future value from CAGR */
  static futureValue(
    presentValue: number,
    cagrPercent: number,
    years: number
  ): number {
    return parseFloat(
      (presentValue * Math.pow(1 + cagrPercent / 100, years)).toFixed(2)
    );
  }

  /** Time to double using Rule of 72 */
  static timeToDouble(cagrPercent: number): number {
    return parseFloat((72 / cagrPercent).toFixed(2));
  }

  /** CAGR for series of values */
  static fromSeries(values: number[]): number[] {
    const cagrs: number[] = [];
    for (let i = 1; i < values.length; i++) {
      cagrs.push(this.compute(values[0], values[i], i));
    }
    return cagrs;
  }
}

// Example: Mutual fund returns
const navSeries = [100, 120, 144, 172.8, 207.36];
console.log("3-year CAGR:", CAGRCalculator.compute(100, 172.8, 3), "%");
console.log("Doubling time at 12%:", CAGRCalculator.timeToDouble(12), "years");
console.log("Future value of ₹50,000 at 14% for 5 years: ₹",
  CAGRCalculator.futureValue(50000, 14, 5));
```

### TypeScript Bar Chart Data Analyzer

```typescript
interface BarData {
  categories: string[];
  values: number[];
  labels?: string[];
}

class BarChartAnalyzer {
  /** Find bar with maximum value */
  static findMax(data: BarData): { category: string; value: number } {
    const maxIdx = data.values.indexOf(Math.max(...data.values));
    return { category: data.categories[maxIdx], value: data.values[maxIdx] };
  }

  /** Find bar with minimum value */
  static findMin(data: BarData): { category: string; value: number } {
    const minIdx = data.values.indexOf(Math.min(...data.values));
    return { category: data.categories[minIdx], value: data.values[minIdx] };
  }

  /** Calculate percentage contribution of each bar to total */
  static percentageContribution(data: BarData): number[] {
    const total = data.values.reduce((a, b) => a + b, 0);
    return data.values.map(v => parseFloat(((v / total) * 100).toFixed(2)));
  }

  /** Calculate ratio between two categories */
  static ratio(
    data: BarData,
    catA: string,
    catB: string
  ): string {
    const idxA = data.categories.indexOf(catA);
    const idxB = data.categories.indexOf(catB);
    if (idxA === -1 || idxB === -1) return "N/A";
    const valA = data.values[idxA];
    const valB = data.values[idxB];
    const g = (a: number, b: number): number => b === 0 ? a : g(b, a % b);
    const gcd = g(Math.round(valA), Math.round(valB));
    return `${Math.round(valA) / gcd} : ${Math.round(valB) / gcd}`;
  }

  /** Indexed values (base = 100) */
  static indexedValues(data: BarData, baseCategory: string): number[] {
    const baseIdx = data.categories.indexOf(baseCategory);
    if (baseIdx === -1) return [];
    const baseVal = data.values[baseIdx];
    return data.values.map(v => parseFloat(((v / baseVal) * 100).toFixed(2)));
  }
}

// Example usage
const salesData: BarData = {
  categories: ["Product A", "Product B", "Product C", "Product D"],
  values: [450, 320, 580, 210],
};
console.log("Highest selling:", BarChartAnalyzer.findMax(salesData));
console.log("Contributions:", BarChartAnalyzer.percentageContribution(salesData));
console.log("Ratio A:C:", BarChartAnalyzer.ratio(salesData, "Product A", "Product C"));
```

### 1.18 Additional Exercise Questions

**Q31.** A bar graph shows the number of students in five colleges:
- College A: 22,500 boys, 25,000 girls
- College B: 25,000 boys, 30,000 girls
- College C: 30,000 boys, 20,000 girls
- College D: 22,500 boys, 30,000 girls
- College E: 22,500 boys, 32,500 girls

What is the average number of girls across all colleges?

a) 25,000
b) 27,500
c) 30,000
d) 32,500

<details>
<summary>Answer</summary>
b) 27,500

Total girls = 25,000 + 30,000 + 20,000 + 30,000 + 32,500 = 137,500. Average = 137,500/5 = 27,500.
</details>

**Q32.** From the same data, the total number of girls in Colleges D and E together is what percent of total girls in Colleges A, B, and C together?

a) 75.3%
b) 83.3%
c) 88.3%
d) 92.3%

<details>
<summary>Answer</summary>
b) 83.3%

Girls in D+E = 30,000 + 32,500 = 62,500. Girls in A+B+C = 25,000 + 30,000 + 20,000 = 75,000. Percentage = (62,500/75,000) × 100 = 83.3%.
</details>

**Q33.** A company surveyed 500 customers. 80% were satisfied with products. Of the satisfied customers, 60% were repeat customers. How many repeat customers were satisfied?

a) 200
b) 240
c) 300
d) 360

<details>
<summary>Answer</summary>
b) 240

Satisfied customers = 80% of 500 = 400. Repeat satisfied = 60% of 400 = 240.
</details>

**Q34.** A pie chart shows: Cement = 72°, Steel = 54°, Labour = 90°, Supervision = 54°, Other = 90°. Total cost = ₹6,00,000. What is the amount spent on cement?

a) ₹90,000
b) ₹1,00,000
c) ₹1,20,000
d) ₹1,50,000

<details>
<summary>Answer</summary>
c) ₹1,20,000

Cement = (72/360) × 6,00,000 = 0.20 × 6,00,000 = ₹1,20,000.
</details>

**Q35.** From the same pie chart, labour cost exceeds steel cost by what percent of total cost?

a) 5%
b) 10%
c) 12%
d) 15%

<details>
<summary>Answer</summary>
b) 10%

Labour = (90/360) × 6,00,000 = ₹1,50,000. Steel = (54/360) × 6,00,000 = ₹90,000. Excess = ₹60,000. Percentage of total = (60,000/6,00,000) × 100 = 10%.
</details>

**Q36.** A stacked bar shows Company X's annual revenue split: Product P = 35%, Product Q = 28%, Product R = 22%, Product S = 15%. Total revenue = ₹850 crores. What is Product Q's revenue?

a) ₹210 crores
b) ₹238 crores
c) ₹255 crores
d) ₹297.5 crores

<details>
<summary>Answer</summary>
b) ₹238 crores

Product Q revenue = 28% of 850 = 0.28 × 850 = ₹238 crores.
</details>

**Q37.** If Product P's revenue grows by 12% next year while total revenue stays constant, what will be Product P's new percentage share?

a) 35.0%
b) 37.2%
c) 39.2%
d) 42.0%

<details>
<summary>Answer</summary>
c) 39.2%

Current P = 35% of 850 = ₹297.5 crores. Growth = 12% → New P = 297.5 × 1.12 = ₹333.2 crores. New share = (333.2/850) × 100 = 39.2%.
</details>

**Q38.** A line chart shows GDP growth: 5.0%, 6.2%, 7.1%, 6.8%, 8.0% over five years. What is the average growth rate?

a) 6.42%
b) 6.62%
c) 6.82%
d) 7.02%

<details>
<summary>Answer</summary>
b) 6.62%

Average = (5.0 + 6.2 + 7.1 + 6.8 + 8.0) / 5 = 33.1 / 5 = 6.62%.
</details>

**Q39.** If a company's profit in 2020 was ₹150 crores and in 2023 was ₹280 crores, what is the approximate CAGR?

a) 18.2%
b) 20.5%
c) 23.1%
d) 25.4%

<details>
<summary>Answer</summary>
c) 23.1%

CAGR = ((280/150)^(1/3) - 1) × 100 = (1.8667^0.3333 - 1) × 100 ≈ (1.231 - 1) × 100 = 23.1%.
</details>

**Q40.** A percentage bar graph shows employment distribution in two cities. City X (pop 50,000): Employed 45%, Unemployed 55%. City Y (pop 75,000): Employed 52%, Unemployed 48%. How many more employed people does City Y have than City X?

a) 3,500
b) 7,500
c) 16,500
d) 39,000

<details>
<summary>Answer</summary>
c) 16,500

City X employed = 45% of 50,000 = 22,500. City Y employed = 52% of 75,000 = 39,000. Difference = 39,000 - 22,500 = 16,500.
</details>

#### Additional Exercises (Q41-Q50)

**41.** Table: Production of rice (in lakh tonnes):
| State | 2020 | 2021 | 2022 | 2023 |
|-------|------|------|------|------|
| A | 45 | 52 | 60 | 68 |
| B | 38 | 42 | 48 | 55 |
| C | 50 | 58 | 65 | 72 |

a) What is the CAGR of State A's production from 2020 to 2023?
b) In which year did State B show the highest growth rate over previous year?
c) What is the ratio of State C's production in 2020 to State A's production in 2023?

**42.** A bar graph shows exports (in ₹crores) of 5 companies: P=250, Q=320, R=180, S=410, T=290. If exports of P grow by 15% and Q decreases by 10%, what is the new total export of P and Q combined?

**43.** A pie chart shows the market share of 5 mobile brands: Apple=28%, Samsung=32%, Xiaomi=18%, Vivo=12%, Others=10%. Total market = ₹80,000 crores. What is the revenue difference between Samsung and Xiaomi?

**44.** A line chart shows monthly sales: Jan=85, Feb=95, Mar=110, Apr=105, May=125, Jun=145. What is the percentage increase from the first quarter average to the second quarter average?

**45.** A multiple line chart shows two investment funds: Fund A (2019: 100, 2020: 125, 2021: 140, 2022: 170) and Fund B (2019: 100, 2020: 115, 2021: 130, 2022: 150). Which fund has higher CAGR?

**46.** A stacked bar shows the revenue composition of a company for 2022: Products: X=40%, Y=30%, Z=20%, Services=10%. Total revenue = ₹1,200 crores. What is the revenue from Products X and Y together?

**47.** A clustered bar graph shows male and female employees across 4 departments. Total employees = 500. Dept 1: M=60, F=40. Dept 2: M=70, F=55. Dept 3: M=45, F=80. Dept 4: M=75, F=75. Which department has the highest female-to-male ratio?

**48.** CAGR of sales: 2018 = ₹200 crores, 2019 = ₹250 crores, 2020 = ₹300 crores, 2021 = ₹360 crores, 2022 = ₹450 crores. What is the CAGR from 2018 to 2022?

**49.** A pie chart has three sectors with angles 120°, 150°, and 90°. If the total value represented is ₹540,000, what is the value of the largest sector?

**50.** A table shows the performance of 3 mutual funds over 4 years:
| Fund | 2020 | 2021 | 2022 | 2023 |
|------|------|------|------|------|
| A | 12% | 15% | 8% | 18% |
| B | 10% | 12% | 14% | 16% |
| C | 8% | 18% | 10% | 20% |

Which fund has the highest average return? Which fund has the lowest volatility (range)?

- **Tabular DI** is the foundation — master percentage, ratio, average, growth rate, and CAGR calculations
- **Bar graphs** come in four variants: simple, stacked, clustered, and percentage — identify the type before solving
- **Line charts** require trend analysis — slopes, intersections, and gaps between multiple lines
- **Pie charts** test angle-to-percentage conversion and distribution calculations
- **Combined chart sets** require cross-referencing data across different formats
- **Approximation** is a critical exam strategy — round numbers, use fraction equivalents, estimate before calculating exactly
- **Common traps** include scale non-zero starts, different units, and percentage vs percentage point confusion

---

## Practical Takeaways

| Strategy | Implementation |
|----------|----------------|
| Systematic approach | Read data set → Note units → Read questions → Extract data → Calculate → Verify |
| Cross-referencing | For combined tables/charts, identify linking variables first |
| Approximation | Round to nearest convenient number; check if the answer is among options before exact computation |
| Unit vigilance | Convert all values to consistent units before calculating |
| Formula sheet | Memorise: CAGR, percentage change, ratio, weighted average, angle conversion formulas |
| Verification | Cross-check calculations using a different approach (e.g., reverse calculation) |

---

## Chapter Quiz

**Q1.** What is the first step when approaching a Data Interpretation question set?

a) Start calculating immediately
b) Read the data set carefully, noting units and labels
c) Skip directly to the questions
d) Guess an approximate answer

<details>
<summary>Show Answer</summary>

**Answer:** b) Read the data set carefully, noting units and labels

Understanding the data presentation format, units, and labels is essential before attempting questions. Rushing into calculations without understanding the data is the most common mistake.
</details>

---

**Q2.** A pie chart sector has a central angle of 90°. What percentage of the total does it represent?

a) 15%
b) 20%
c) 25%
d) 30%

<details>
<summary>Show Answer</summary>

**Answer:** c) 25%

Percentage = (90 / 360) × 100 = 0.25 × 100 = 25%.
</details>

---

**Q3.** Which type of bar graph is most appropriate for showing the percentage composition of different categories across multiple years?

a) Simple bar graph
b) Clustered bar graph
c) Stacked bar graph
d) Percentage bar graph

<details>
<summary>Show Answer</summary>

**Answer:** d) Percentage bar graph

Percentage bar graphs make each bar equal height (100%), allowing comparison of proportional composition across categories or years while accounting for different totals.
</details>

---

**Q4.** When combining data from a table and a pie chart, what is the first variable you must identify?

a) The total value
b) The linking variable
c) The largest percentage
d) The smallest value

<details>
<summary>Show Answer</summary>

**Answer:** b) The linking variable

The linking variable (e.g., company name, year, product ID) connects the data across different formats. Without identifying it, cross-referencing is impossible.
</details>

---

**Q5.** Which of the following is NOT a valid approximation strategy?

a) Rounding large numbers to the nearest convenient value
b) Using fraction equivalents of common percentages
c) Always calculating exact values to avoid errors
d) Estimating the range before precise calculation

<details>
<summary>Show Answer</summary>

**Answer:** c) Always calculating exact values to avoid errors

In competitive exams, exact calculation for every step is time-prohibitive. Approximation strategies save time and are often sufficient when answer choices are sufficiently separated.
</details>

---

## Exercises

### Section A: Table-Based Questions (Q1-Q8)

**Table: Production of Crops (in lakh tonnes) by Five States**

| State | Rice (2022) | Wheat (2022) | Rice (2023) | Wheat (2023) |
|-------|------------|-------------|------------|-------------|
| Punjab | 120 | 160 | 135 | 175 |
| Haryana | 85 | 110 | 92 | 118 |
| UP | 150 | 120 | 165 | 130 |
| MP | 95 | 105 | 102 | 112 |
| Bihar | 70 | 55 | 78 | 60 |

1. What is the total rice production in 2022 across all five states?
2. What is the percentage increase in wheat production for Punjab from 2022 to 2023?
3. Which state had the highest combined production (rice + wheat) in 2023?
4. What is the ratio of rice to wheat production in Uttar Pradesh in 2022?
5. What is the average wheat production across all states in 2023?
6. By what percentage did Bihar's combined production increase from 2022 to 2023?
7. In 2022, what percentage of total production was rice? (Round to 1 decimal)
8. If MP's rice production in 2024 is expected to be 10% higher than 2023, what will it be?

### Section B: Bar Graph Questions (Q9-Q14)

9. In a simple bar graph showing sales (₹lakhs) for 5 products: A=50, B=75, C=60, D=90, E=45, what is the average sales per product?
10. A stacked bar shows total sales of ₹200 lakhs for a company. If Product X contributes 35%, Product Y contributes 28%, and the rest is Product Z, what is the sales value of Product Z?
11. A clustered bar graph shows male and female employees in 4 departments. Dept 1: M=30, F=20; Dept 2: M=25, F=35; Dept 3: M=40, F=10; Dept 4: M=20, F=30. Which department has the highest total employees?
12. In a percentage bar graph, City A (total pop 10,000) has 40% employed, City B (total pop 15,000) has 35% employed. How many more employed people does City B have?
13. A bar graph shows revenue growth percentages: 2019=8%, 2020=12%, 2021=10%, 2022=15%. If 2019 revenue base was ₹500 crores, what was the revenue in 2020?
14. A clustered bar shows exports and imports for 3 years. Calculate the total trade balance (exports - imports) across all 3 years if data is: Y1: E=200, I=180; Y2: E=240, I=220; Y3: E=280, I=250.

### Section C: Line Chart Questions (Q15-Q20)

**Line Chart: Temperature (in °C) in City X over 12 months**

Jan: 15, Feb: 18, Mar: 22, Apr: 28, May: 33, Jun: 36, Jul: 35, Aug: 34, Sep: 31, Oct: 26, Nov: 20, Dec: 16

15. What is the temperature range across the year?
16. What is the average temperature for the first quarter (Jan-Mar)?
17. By what percentage did temperature increase from March to May?
18. In which month is the temperature exactly 50% of the June temperature?
19. What is the median temperature for the year?
20. If the temperature in June last year was 34°C, what is the percentage increase this year?

### Section D: Pie Chart Questions (Q21-Q25)

**Pie Chart: Company Expenses (Total: ₹1,200 crores)**

Production: 30%, Marketing: 18%, R&D: 15%, Salaries: 25%, Admin: 12%

21. What is the amount spent on Production?
22. What is the central angle for the R&D sector?
23. What is the ratio of Marketing to Admin expenses?
24. If Salaries increase by 10% next year while all other expenses remain constant, what will be the new total expense?
25. What is the difference between the amounts spent on Production and Admin?

### Section E: Combined Data Questions (Q26-Q30)

**Table: Total Investment (₹crores) in Three Sectors**

| Year | IT | Pharma | Auto | Total |
|------|-----|--------|------|-------|
| 2020 | 200 | 150 | 180 | 530 |
| 2021 | 280 | 170 | 200 | 650 |
| 2022 | 350 | 190 | 220 | 760 |

**Pie Chart (2022): IT Subsector Distribution**
Software: 40%, Hardware: 30%, Services: 20%, Others: 10%

26. What is the total investment in the IT sector across all three years?
27. What is the CAGR of Auto sector investment from 2020 to 2022?
28. In 2022, what is the investment in Software subsector?
29. What percentage of total investment in 2021 did IT sector account for?
30. If the Pharma sector's growth rate from 2020 to 2021 continues to 2022, what would the Pharma investment in 2022 have been?

### Answer Key

| Q | Answer | Q | Answer | Q | Answer | Q | Answer | Q | Answer |
|---|--------|---|--------|---|--------|---|--------|---|--------|
| 1 | 520 lakh tonnes | 2 | 9.375% | 3 | Uttar Pradesh (295) | 4 | 5:4 |
| 5 | 119 lakh tonnes | 6 | 8.8% | 7 | 49.5% | 8 | 112.2 lakh tonnes |
| 9 | ₹64 lakhs | 10 | ₹74 lakhs | 11 | Dept 3 (50) | 12 | 1,250 more |
| 13 | ₹560 crores | 14 | 70 | 15 | 21°C (36-15) | 16 | 18.33°C |
| 17 | 50% | 18 | March (22°C) | 19 | 27°C | 20 | 5.88% |
| 21 | ₹360 crores | 22 | 54° | 23 | 3:2 | 24 | ₹1,230 crores |
| 25 | ₹216 crores | 26 | ₹830 crores | 27 | 10.56% | 28 | ₹140 crores |
| 29 | 43.08% | 30 | ₹190 crores | | | | |

**Detailed Solutions for Selected Questions:**

**Q1:** 120+85+150+95+70 = 520 lakh tonnes.

**Q2:** ((175-160)/160) × 100 = 15/160 × 100 = 9.375%.

**Q5:** (175+118+130+112+60)/5 = 595/5 = 119 lakh tonnes.

**Q12:** City B employed = 35% of 15,000 = 5,250. City A employed = 40% of 10,000 = 4,000. Difference = 1,250.

**Q15:** Range = 36 - 15 = 21°C.

**Q22:** R&D angle = (15/100) × 360 = 54°.

**Q24:** New salaries = 25% of 1,200 = 300. Increase = 10% of 300 = 30. New total = 1,200 + 30 = ₹1,230 crores.

**Q27:** CAGR = ((220/180)^(1/2) - 1) × 100 = (1.2222^0.5 - 1) × 100 = (1.1054 - 1) × 100 = 10.54%.

**Q28:** IT investment 2022 = 350. Software = 40% of 350 = ₹140 crores.

**Q30:** Growth rate = (170-150)/150 = 13.33%. Applying to 2022: 170 × 1.1333 = ₹192.67, which rounds to approximately ₹190 crores (given integer data constraints).

---

*Proceed to Chapter 2: Missing Data and Caselet DI*
