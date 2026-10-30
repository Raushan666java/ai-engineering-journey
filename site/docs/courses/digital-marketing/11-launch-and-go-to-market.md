---
id: 11-launch-and-go-to-market
slug: /digital-marketing/11-launch-and-go-to-market
title: "Chapter 11 — Launch and Go-to-Market"
sidebar_label: "Chapter 11 — Launch and Go-to-Market"
sidebar_position: 11
---

# Chapter 11 — Launch and Go-to-Market

## Learning Objectives

After this chapter you will be able to:

- Decide whether your offer needs a launch at all, and say why most services do not
- Run a pre-sale that tests demand before you build the thing
- Sequence a fourteen-day launch with dated actions and numeric targets
- Price a founding cohort without devaluing the offer permanently
- Compute how many buyers a revenue target actually requires
- Diagnose the three ways launches fail and which one you are at risk of

---

## Theory

### 11.1 Most offers should not launch

A launch is a coordinated window in which attention is concentrated on one offer.
It works when there is a list or an audience to concentrate.

For a service business — contract work, consulting, a productised retainer —
there is no launch. There is a steady pipeline, and the work is the channel
programme from chapters 5 to 8. Announcing "I am now available" to nobody is not
a launch; it is a post.

| offer type | launch? | because |
|---|---|---|
| contract / consulting | **no** | revenue is continuous, and demand is not synchronised |
| productised service | sometimes | a founding-client offer can create urgency |
| course or cohort | **yes** | start dates create real deadlines |
| software product | maybe | only if you already have an audience |
| anything with no list | **no** | a launch to an empty room is a diary entry |

The rule: **a launch requires an audience and a deadline.** Without both, spend
the effort on the channel programme instead.

### 11.2 Pre-sale: the only honest launch test

A pre-sale is selling the thing before it exists. It is uncomfortable and it is
the cheapest possible validation, because the alternative is building first and
discovering the answer later at full cost.

The mechanics:

```
1  Describe the offer precisely: outcome, contents, dates, price.
2  Set a real deadline and a real capacity limit.
3  Ask for money, not for interest. A deposit or full payment.
4  If the threshold is not met, refund and do not build.
```

The threshold should be decided in advance: "if ten people pay, I build it; if
three do, I refund and ask them what they actually wanted."

**Refusing to take money until it is built** is the most common form of
self-deception in course creation. Interest costs the buyer nothing and predicts
almost nothing. Payment is the only signal with weight, which is exactly why it
belongs in the evidence hierarchy from chapter 2 at the top.

### 11.3 The fourteen-day launch sequence

For an offer with an existing list or a reachable community. Each row has an
owner-action and a number.

| day | action | target |
|---|---|---|
| −14 | announce the problem you are solving, no offer | engagement baseline |
| −12 | publish the free diagnostic or checklist | 50 downloads |
| −10 | share one proof: a result, a teardown, a case | 20 replies or comments |
| −7 | open a waitlist with the price shown | 30 waitlist signups |
| −5 | answer the top three objections publicly | reduce replies asking "how much" |
| −3 | announce the deadline and the capacity | 10 pre-orders |
| −1 | last call, with the exact closing time | 15 pre-orders |
| 0 | close, publish the result honestly | revenue target met or refunded |
| +1 | deliver, or begin delivery | first session within 7 days |
| +7 | collect one testimonial and one case study | 1 of each |

Notice that only two of the ten rows sell. The other eight exist to make the two
selling rows credible, which is why a launch that begins on day −1 usually fails.

### 11.4 Pricing a founding cohort

A founding price is a real discount in exchange for something real: feedback,
a testimonial, and tolerance for rough edges. That trade must be stated, or the
discount permanently anchors the price.

| element | rule |
|---|---|
| the discount | 30–50% off the intended price, time-boxed to the cohort |
| what the buyer gives | feedback sessions, a testimonial, permission to use results |
| when it ends | a named date, and then the price rises for everyone |
| the next price | published at the same time, so the discount has a reference |

The failure mode: a permanent "launch price" that never rises. Buyers learn the
price is fictional, and the discount teaches them to wait for the next one.

### 11.5 How many buyers a target needs

Revenue targets are usually stated as money and rarely converted into a count.
The conversion makes the plan testable.

```
revenue target       = 2,00,000
price                = 4,999
buyers required      = 41
list conversion      = 2-5% for a warm list at this price, warmer end if the
                       offer is specific
list size required   = 41 / 0.03 = about 1,370 warm subscribers
```

If the list is 200 people, the target requires a 20% conversion, which is not a
plan; it is a hope. The honest responses, in order: raise the price and lower the
count, extend the timeline to build the list, or change the offer to something
that does not need a list.

That single calculation has prevented more failed course launches than any
amount of copywriting advice.

### 11.6 The three ways launches fail

| failure | symptom | cause |
|---|---|---|
| **launching to silence** | 40 impressions, no replies | no audience, or an audience built on the wrong topic |
| **launching to interest** | many "sounds great", zero payments | asked for opinions instead of money |
| **launching too late** | the thing is finished before anyone is asked | building felt safer than selling |

The third is the most common among technical builders, and the most expensive,
because it converts months of work into a sunk cost before the first signal
arrives.

### 11.7 After the launch

A launch is a spike; a business is the line underneath it. Three things decide
whether the spike becomes a line:

- **retention:** did buyers get the promised outcome, and can you prove it
- **proof:** one testimonial and one case study, collected within a week
- **repeatability:** a channel that produces the next cohort without a launch

If the next cohort can only be sold by launching again to the same list, the
business is a series of spikes with decay between them.

---

## Examples

### Example 1: Pre-sale arithmetic before writing a single lesson

```python
"""Decide whether to build a course, using the pre-sale threshold.

The point is not the model. The point is that the threshold is chosen before
anyone is emotionally invested in the answer.
"""
from dataclasses import dataclass


@dataclass
class PreSale:
    price: int
    threshold_buyers: int
    reachable_list: int
    expected_conversion: float   # judgement, 2-5% for a warm specific offer
    build_hours: int

    def expected_buyers(self) -> float:
        return self.reachable_list * self.expected_conversion

    def verdict(self) -> str:
        buyers = self.expected_buyers()
        if buyers >= self.threshold_buyers:
            return "build: threshold reached on paper, confirm with real payments"
        shortfall = self.threshold_buyers - buyers
        return (f"do not build yet: short by {shortfall:.0f} buyers; "
                f"need about {self.threshold_buyers / self.expected_conversion:,.0f} "
                f"list subscribers at this conversion")

    def hourly_value_if_sold(self) -> float:
        return (self.threshold_buyers * self.price) / self.build_hours


small = PreSale(price=4_999, threshold_buyers=10, reachable_list=200,
                expected_conversion=0.03, build_hours=120)
print(round(small.expected_buyers(), 1), "expected buyers")
print(small.verdict())
print(f"rs{small.hourly_value_if_sold():,.0f} per build hour if the threshold is just met")

larger = PreSale(price=4_999, threshold_buyers=10, reachable_list=1_500,
                 expected_conversion=0.03, build_hours=120)
print("\n", round(larger.expected_buyers(), 1), "expected buyers")
print(larger.verdict())
print(f"rs{larger.hourly_value_if_sold():,.0f} per build hour if the threshold is just met")
```

Expected output:

```
6.0 expected buyers
do not build yet: short by 4 buyers; need about 333 list subscribers at this conversion
rs417 per build hour if the threshold is just met

 45.0 expected buyers
build: threshold reached on paper, confirm with real payments
rs417 per build hour if the threshold is just met
```

Two lessons, both uncomfortable. With 200 subscribers the course does not clear
its own threshold, so the correct action is to build the list rather than the
course. And even in the healthy case, **the threshold scenario pays ₹417 per build
hour**, which is less than a single hour of contract work at a normal rate.

That is not an argument against courses. It is the argument for treating the
first course as marketing spend that happens to be paid, and for pricing later
cohorts higher once proof exists.

### Example 2: A launch scorecard

```markdown
# Launch scorecard — cohort 1

Offer      "Laravel to AI engineer", 6 weeks, 12 lessons, 1 project
Price      rs4,999 founding, rs7,999 from cohort 2
Capacity   20
Deadline   day 0, 21:00 IST

Metric              Target    Actual    Notes
--------------------  -------  --------  ----------------------------
waitlist signups         30
pre-orders               10
revenue            rs49,990
refund requests            0
completion rate         70%
testimonials               3
next-cohort waitlist      15

Decision rule
  >= 10 paid             run cohort 1, publish the case study
  5-9 paid               run a reduced cohort, interview every buyer
  < 5 paid               refund, do not build, ask buyers what they wanted
```

The scorecard is written before the launch, including the decision rule. That
ordering is the whole point: a rule invented after seeing the numbers is not a
rule, it is a rationalisation.

---

## Summary

- A launch needs both an audience and a deadline; services have neither and should run a pipeline instead.
- Pre-selling is the only honest test of demand, and payment is the only signal with weight.
- Only two of the ten days in a launch sequence sell; the rest exist to make those two credible.
- A founding discount must buy something real and must end on a named date with a published next price.
- Converting a revenue target into a required list size is what makes a launch plan testable.
- Launches fail by silence, by interest without payment, or by building before asking.
- A launch is a spike; retention, proof and a repeatable channel are what make a business.

---

## Exercises

### Review Questions

1. Why does a consulting business not need a launch?
2. What makes a pre-sale a test rather than a survey?
3. Why must the decision rule be written before the launch?
4. What does a founding discount buy, and what happens if it never ends?
5. A target requires a 20% conversion from a 200-person list. What are the three honest responses?

### Application Problems

1. Decide whether your offer needs a launch, and justify it against the table in 11.1.
2. Design a pre-sale with a threshold, a deadline, a capacity and a refund rule. State what you would do if you got exactly half the threshold.
3. Compute the list size your revenue target requires, then compare it with your actual reachable audience.

### Challenge Problem

You have 120 subscribers, no product yet, and a ₹1,00,000 revenue target in 60 days. Build a plan that reaches the target without launching to an audience you do not have, using at most two channels and no paid advertising. State the arithmetic at every step and the point at which you would abandon the target rather than the offer.
