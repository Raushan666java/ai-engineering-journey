# Lesson 07 — Statistics & Storytelling

**Goal:** turn correct numbers into a decision someone can approve. This is the step that separates an analyst from someone who can write a query.
**Time:** weeks 10–11 (or 3 days in the job sprint).

**Rule:** a number without a comparison is trivia. Every finding needs a baseline, a driver, and an action.

This lesson uses the 20 completed orders from `practice.db`. All figures below are verified — recompute them yourself before trusting anyone, including me.

---

## 1. The distribution

Order value, 20 completed orders, sorted:

```
390  420  555  720  1,120  1,270  1,520  1,700  1,860  2,900
4,500  4,620  4,800  5,350  5,530  5,650  5,700  6,020  7,100  8,600
```

| Statistic | Value |
|---|---:|
| count | 20 |
| mean | 3,516.25 |
| median | 3,700.00 |
| standard deviation | 2,540.96 |
| minimum | 390.00 |
| Q1 | 1,232.50 |
| Q3 | 5,560.00 |
| maximum | 8,600.00 |

Mean and median are close here, which tells you the data is roughly balanced. That is unusual for order values — most real order data is right-skewed, with a few huge orders dragging the mean above the median.

**When they disagree, report both and lead with the median.**

- Mean 3,516 vs median 3,700: "a typical order is about 3,700, average 3,516."
- If one 50,000 order existed, the mean might read 5,800 while the median stayed near 3,700. Quoting the mean would overstate what a normal customer spends.

Compute it in pandas:

```python
s = order_totals["total"]
s.mean(), s.median(), s.std(), s.quantile([0.25, 0.5, 0.75])
```

Use `s.std()` (sample, `ddof=1`). Population standard deviation divides by `n` instead of `n-1` and gives a slightly smaller number. For a sample of orders, sample stdev is correct. Excel's `STDEV.S` matches pandas; `STDEV.P` does not.

---

## 2. Spread matters as much as centre

Standard deviation of 2,540.96 on a mean of 3,516.25 means typical orders sit roughly 2,500 away from the average — a spread of about 72% of the mean. This business has no "typical order." It has small stationery baskets and five-figure laptop baskets.

Practical consequences:

- **Forecasting is unreliable.** One laptop order moves monthly revenue by 4,500.
- **Averages hide a bimodal business.** Segment by category before quoting an AOV.
- **Outlier checks matter.** Is an 8,600 order a data error or a real customer?

IQR rule for outliers:

```
IQR = Q3 - Q1 = 5,560 - 1,232.50 = 4,327.50
upper fence = Q3 + 1.5 * IQR = 5,560 + 6,491.25 = 12,051.25
```

The maximum is 8,600, below the fence. **No statistical outliers.** Every order is a legitimate order. Do not delete the big ones — they are the business.

```python
q1, q3 = s.quantile([0.25, 0.75])
fence = q3 + 1.5 * (q3 - q1)
s[s > fence]
```

The 1.5 × IQR rule is a convention, not a law. It flags "unusual," not "wrong." A flagged row still needs a human decision.

---

## 3. Percent change and the right denominator

Monthly revenue:

| Month | Revenue | Change | % change |
|---|---:|---:|---:|
| 2024-08 | 39,445.00 | — | — |
| 2024-09 | 30,880.00 | -8,565.00 | -21.71% |

Two mistakes are common here:

1. **Percent of the wrong base.** `-8,565 / 30,880 = -27.7%` is wrong. Change is always against the earlier period.
2. **Percentage points vs percent.** Going from 20% to 25% is **+5 percentage points**, or **+25%**. Say which one you mean. Interviewers listen for this.

Decompose the change before explaining it. Revenue fell 8,565 — but by category:

| Category | Aug | Sep | Change |
|---|---:|---:|---:|
| Electronics | 34,200.00 | 23,640.00 | -10,560.00 |
| Furniture | 4,210.00 | 5,260.00 | +1,050.00 |
| Kitchen | 900.00 | 1,800.00 | +900.00 |
| Stationery | 135.00 | 180.00 | +45.00 |
| **Total** | **39,445.00** | **30,880.00** | **-8,565.00** |

The entire decline is Electronics (-10,560), partly offset by +1,995 elsewhere. By country:

| Country | Aug | Sep | Change |
|---|---:|---:|---:|
| UAE | 13,240.00 | 4,800.00 | -8,440.00 |
| India | 20,135.00 | 14,090.00 | -6,045.00 |
| UK | 420.00 | 5,350.00 | +4,930.00 |
| Germany | 5,650.00 | 5,530.00 | -120.00 |
| Qatar | 0.00 | 1,110.00 | +1,110.00 |

UAE alone explains 8,440 of the 8,565 decline (98.6%). That is the finding. "Revenue fell 21.7%" is the symptom; "UAE electronics collapsed and India softened while the UK grew" is the analysis.

Note what you cannot conclude: with 20 orders, you cannot say whether this is a trend or noise. Two data points are not a trend. Say "two months of data, so this needs another month before we call it a trend." That sentence makes you look more senior, not less.

---

## 4. Concentration — the Pareto check

Revenue by customer, ranked:

| Customer | Revenue | Share | Cumulative |
|---|---:|---:|---:|
| Vikram Singh | 11,500.00 | 16.35% | 16.35% |
| Lena Fischer | 11,180.00 | 15.90% | 32.25% |
| Fatima Al Mansoori | 10,500.00 | 14.93% | 47.18% |
| Rohan Mehta | 9,515.00 | 13.53% | 60.71% |
| Aarav Sharma | 7,010.00 | 9.97% | 70.68% |
| Sara Khan | 6,370.00 | 9.06% | 79.74% |
| John Smith | 5,770.00 | 8.20% | 87.94% |
| Priya Nair | 4,470.00 | 6.36% | 94.29% |
| Omar Hassan | 2,900.00 | 4.12% | 98.42% |
| Aisha Rahman | 1,110.00 | 1.58% | 100.00% |

Verified concentration facts:

- Top 1 customer = **16.35%** of revenue
- Top 3 = **47.18%**
- Top 5 = **70.68%**
- **7 of 10** customers get you to 80% of revenue

Note the sixth row: **Sara Khan at 6,370 outsells John Smith**. If you build a "top customers" table in pandas without `sort_values`, the row order comes out alphabetical or by ID and this is easy to miss. Sort explicitly, then check the top row by hand.

Translation: losing the top two customers removes about a third of the business. That is a risk statement a manager can act on, and it is the kind of insight that gets remembered in an interview.

```python
ranked = done.groupby("customer_name")["line_total"].sum().sort_values(ascending=False)
cum = ranked.cumsum() / ranked.sum() * 100
```

---

## 5. Correlation is not causation — and the business reason why

Revenue correlates with laptop sales almost perfectly. Laptop Pro 15 alone is **45,000 of 70,325**, or 64% of revenue. Remove laptops and the business looks completely different.

But laptops do not *cause* revenue. They *are* most of revenue. That is a definitional relationship, not a causal one. The actionable question is different: "is the business too dependent on one product?"

When you see a correlation, ask three questions:

1. **Could the arrow point the other way?** Marketing spend rises with revenue — but revenue also funds marketing.
2. **Is there a common cause?** Both laptop sales and monitor sales rise in September because of a corporate buying cycle, not because monitors drive laptops.
3. **Is it definitional?** If A is a component of B, correlating them measures nothing.

Never write "X drives Y" from a correlation. Write "X and Y move together; we do not yet know why."

---

## 6. Small samples produce confident nonsense

AOV by country:

| Country | Revenue | Orders | AOV |
|---|---:|---:|---:|
| India | 34,225.00 | 10 | 3,422.50 |
| UAE | 18,040.00 | 4 | 4,510.00 |
| Germany | 11,180.00 | 2 | 5,590.00 |
| UK | 5,770.00 | 2 | 2,885.00 |
| Qatar | 1,110.00 | 2 | 555.00 |

The table invites two wrong conclusions:

- "Germany has the highest-value customers." Two orders. One laptop order sets the average.
- "Qatar is a low-value market." Two orders totalling 1,110. That is a rounding error with a flag on it.

Rule of thumb: **under 30 observations, quote the count next to the average, every time.** `AOV 5,590 (n=2)` tells the reader what to think. `AOV 5,590` does not.

India, with 10 orders, is the only country where the AOV is worth discussing — and even then it is thin.

---

## 7. How sure are you? Confidence intervals in one page

You report AOV = 3,516.25. If the next 20 orders looked different, how much would that number move?

Standard error of the mean:

```
SE = stdev / sqrt(n) = 2,540.96 / sqrt(20) = 568.2
95% CI ≈ mean ± 1.96 * SE = 3,516.25 ± 1,113.7
       = 2,402.55 to 4,629.95
```

Read it as: "our best estimate is 3,516, and with 20 orders the true average is plausibly anywhere between about 2,400 and 4,630."

That is a **±32%** range. It is honest, and it is useless for planning. The fix is more data:

```
n needed for ±10% at 95% confidence
n = (1.96 * stdev / (0.10 * mean))^2
  = (1.96 * 2,540.96 / 351.63)^2
  ≈ 201 orders
```

So: quote the AOV with a caveat, or collect 200 orders. Do not present a two-month sample as a settled fact.

You will rarely compute a CI in an interview. You will be asked "can we trust this number?" — and "with 20 orders, the margin of error is about a third of the estimate" is a complete answer.

---

## 8. A/B tests, in the form you will actually be asked

The question: "we changed the checkout button, conversion went from 3.0% to 3.4%. Ship it?"

```
control:   3.0%  (300 / 10,000)
variant:   3.4%  (340 / 10,000)
lift      = (3.4 - 3.0) / 3.0 = +13.3%  relative
absolute  = +0.4 percentage points
```

What to check before answering:

| Check | Why |
|---|---|
| Sample size per arm | 10,000 each is decent for a 13% lift; 200 each is noise |
| Randomisation | were users assigned randomly, or by weekday/region? |
| Duration | at least one full week, to cover weekday effects |
| One change | two changes at once and you cannot attribute the lift |
| Guardrail metrics | did refunds or support tickets rise? |
| Peeking | checking daily and stopping when it looks good inflates false positives |

For a 0.4-point absolute lift you need roughly **10,000–20,000 users per arm** to be confident. Below that, the observed difference is consistent with random variation.

The safe answer: "the direction is promising, but at 10k per arm with a 13% relative lift it is borderline. Let it run another week and check refunds before shipping."

Practice sizes (rough, for proportions near a few percent): to detect a **10% relative** change you need thousands per arm; a **50% relative** change needs hundreds. Bigger effects are easier to prove. Most "wins" in small tests are noise.

---

## 9. Three traps that ruin analyses

**Simpson's paradox.** A trend in every subgroup reverses when you combine them. Honest example: UAE has a higher AOV than India (4,510 vs 3,422), yet India contributes more total revenue. Both statements are true. If you optimise for AOV you target the UAE; if you optimise for revenue you protect India. Decide which question you are answering *before* you look at the table.

Strict Simpson's paradox needs a confounding mix shift. With this dataset, the real version is: **average order value is a mix of product types, not a measure of customer quality.** A market that buys laptops has a high AOV and may still be less profitable than one that buys many small items.

**Survivorship bias.** You only see orders that completed. Cancelled (2,250) and pending (2,640) orders are invisible in the completed-only number. If cancellations cluster in one country or product, every "best market" conclusion is wrong. Always check what is missing.

**Regression to the mean.** Your best month follows an unusually good month, so the next one "declines" even with no real change. September being 21.7% below August is partly this. One month is not a signal.

---

## 10. Storytelling: the four questions

Every analysis answers these, in this order:

1. **What happened?** The number, with a baseline.
2. **Why?** The driver, decomposed.
3. **So what?** The money or risk at stake.
4. **Now what?** One recommendation someone can approve.

One-page structure:

```
HEADLINE   Revenue fell 21.7% in September, driven almost entirely by UAE electronics.
CONTEXT    20 completed orders, Aug–Sep 2024. Cancelled and pending excluded.
FINDINGS   1. Revenue 39,445 -> 30,880 (-8,565).
           2. UAE electronics -8,440, which is 98.6% of the decline.
           3. UK grew 420 -> 5,350, offsetting 58% of the UAE loss.
DRIVERS    Electronics is 82.2% of revenue, so any dip in that category moves the total.
ACTION     Confirm with the UAE sales lead whether a key account paused. Do not change
           pricing on two months of data.
```

Rules that make the difference:

- **Lead with the conclusion.** Not "I analysed the sales data and found several insights."
- **One number per sentence.** Three numbers in a sentence means the reader remembers none.
- **Every claim gets a comparison.** 30,880 against 39,445, not 30,880 alone.
- **State the limit.** "Two months of data" protects you and builds trust.
- **One recommendation.** Two recommendations means the manager decides, which is your job.

What not to write:

- "Revenue decreased significantly." How much? Against what?
- "Further analysis is needed." Then do it, or say exactly what you would need.
- "As per the dashboard." Name the number.

---

## 11. Practice (do all five)

1. Recompute mean, median and standard deviation of the 20 order totals. Confirm 3,516.25 / 3,700 / 2,540.96.
2. Run the IQR outlier check. Confirm no outliers, and state the upper fence (12,051.25).
3. Decompose the September decline by category and by country. Confirm Electronics -10,560 and UAE -8,440.
4. Compute customer concentration. Confirm top 5 = 70.68% and 7 of 10 = 80%.
5. Rewrite this as an executive summary: *"Revenue went down in September. Electronics is our biggest category. UAE sales dropped."*

Question 5 is the real test. If your rewrite still contains "went down" instead of a number, you have not finished.

---

## 12. Artifact

`projects/06_exec_summary.md` — one page:

- [ ] Headline under 20 words, containing a number
- [ ] Context: period, row count, what is excluded
- [ ] Three findings, each with a number and a comparison
- [ ] Driver decomposed by one dimension (category or country)
- [ ] One limitation stated honestly
- [ ] One recommendation with an owner and a next step
- [ ] No jargon, no tool names, no "further analysis is needed"

Give it to someone who was not in the room. If they cannot repeat the headline back to you, rewrite it.

---

## 13. Common mistakes

| Mistake | Result | Fix |
|---|---|---|
| Percent change against the later period | -27.7% instead of -21.71% | divide by the earlier value |
| Percent vs percentage points | claims 5% when it is 5 points | name the unit explicitly |
| Mean with a skewed distribution | overstates the typical customer | report median, or both |
| `STDEV.P` on a sample | slightly wrong spread | `STDEV.S` / `s.std()` |
| Deleting "outliers" without checking | deleting your best customers | investigate first; the IQR rule flags, it does not judge |
| Average with n=2 | confident nonsense | always show the count |
| One month vs one month | calls noise a trend | say "two data points" out loud |
| Correlating a component with its total | meaningless "insight" | ask if the relationship is definitional |
| Filling cancelled orders as zero | hides lost demand | report status buckets separately |
| Recommending a price change on 20 orders | damages the business | recommend a measurement step instead |

---

## 14. What "done" looks like

- [ ] You can explain mean vs median with this dataset, in one sentence
- [ ] You can state the IQR fence and why 8,600 is not an outlier
- [ ] You can decompose the September decline by category and by country
- [ ] You can quote customer concentration and what it implies
- [ ] You can explain why the Qatar AOV is untrustworthy
- [ ] You can compute a 95% CI for a mean and say what it means
- [ ] `projects/06_exec_summary.md` passes the read-it-back test

**Next:** portfolio, CV, and applications. See section 8 of `README.md` for the 4-week sprint.
