---
id: 07-paid-ads-and-unit-economics
slug: /digital-marketing/07-paid-ads-and-unit-economics
title: "Chapter 7 — Paid Ads and Unit Economics"
sidebar_label: "Chapter 7 — Paid Ads and Unit Economics"
sidebar_position: 7
---

# Chapter 7 — Paid Ads and Unit Economics

## Learning Objectives

After this chapter you will be able to:

- State the three preconditions for advertising profitably and check whether you meet them
- Compute CAC, LTV, LTV:CAC ratio, payback period and ROAS from real inputs
- Distinguish ROAS from ROI and explain why the first flatters a business
- Design a creative test that changes one variable and reaches a decision
- Choose between search ads and social ads based on intent rather than preference
- Set a daily budget from a target CAC instead of from what feels affordable

---

## Theory

### 7.1 Advertising is a multiplier, not a starting point

Paid acquisition multiplies an offer that already converts. It does not create
conversion. Three preconditions must hold before the first rupee is spent:

| precondition | how to check | if it fails |
|---|---|---|
| **the offer converts organically** | at least a few sales from referrals, outbound or content | advertising buys traffic for a page that does not work |
| **CAC is knowable** | you can trace one sale back to its source | you cannot tell whether a campaign worked |
| **LTV exceeds CAC with margin** | a customer is worth at least 3x what they cost | every sale loses money, faster at scale |

The failure mode is predictable and common: spending ₹50,000 to discover that a
landing page converts at 0.2%, when ten manual conversations would have revealed
the same thing for free.

The correct sequence: **prove the offer with a slow channel, then multiply it
with a paid one.**

### 7.2 The unit economics vocabulary

| term | definition | formula |
|---|---|---|
| **CAC** | cost to acquire one customer | total acquisition spend / customers acquired |
| **LTV** | gross profit from one customer over their lifetime | average revenue per period x gross margin x periods retained |
| **LTV:CAC** | efficiency of acquisition | LTV / CAC |
| **payback** | months to recover CAC | CAC / monthly gross profit per customer |
| **ROAS** | revenue per unit of ad spend | revenue / ad spend |
| **ROI** | profit per unit of spend | (revenue − cost) / cost |

Two errors are worth naming because they are everywhere:

**ROAS is not profit.** A ROAS of 3 with a 30% gross margin means revenue is
three times spend and profit is 0.9 times spend minus overheads. Businesses
routinely celebrate a ROAS that is losing money.

**LTV is not revenue.** If a customer pays ₹2,000 a month but delivery costs
₹1,200, the LTV is built on ₹800, not ₹2,000. Using revenue inflates LTV by
whatever your margin is, and makes unprofitable acquisition look healthy.

A planning rule of thumb, **judgement rather than a law**: LTV:CAC of at least
3:1 and payback under 12 months for a business with recurring revenue, under 3
months for a one-off service. Below those, the constraint is retention or
delivery cost, not advertising.

### 7.3 Search and social are different instruments

| dimension | search ads | social ads |
|---|---|---|
| intent | existing, explicit | none, created by the ad |
| cost per click | higher | lower |
| conversion rate | higher | lower |
| creative burden | low (match the query) | high (stop the scroll) |
| best for | commercial and transactional intent | awareness, retargeting, impulse |

For a technical seller, search is almost always the better first test, because
the intent is already present. Someone typing "hire fastapi developer" has
declared the need. Someone scrolling a feed has not.

Social becomes useful later for two specific jobs: retargeting people who already
visited, and distributing content that builds familiarity over months. Using it
as a cold acquisition channel requires creative skill that takes longer to learn
than the offer takes to sell directly.

### 7.4 Message match

The single largest cause of wasted ad spend is a mismatch between the ad and the
page it opens. If the ad says "WhatsApp bot for gyms" and the page says "Digital
solutions for growing businesses", the visitor concludes they clicked the wrong
thing and leaves.

The rule: the landing page headline must contain the ad's promise, nearly
verbatim, in the first screen. Not a paraphrase, the same words. This is boring
and it works.

### 7.5 Testing without fooling yourself

An ad test is an experiment with three requirements:

1. **One variable changes.** Two headlines, same image, same audience, same page.
2. **The sample is large enough.** Deciding after 12 clicks is reading noise.
3. **The decision is written before the test.** "If A beats B by 20% on
   conversion rate, A wins."

Minimum detectable effect matters as much as significance. With small budgets you
can only detect large differences, so test big swings: a completely different
promise, not a different shade of button.

| monthly visitors per variant | reliably detectable difference |
|---|---|
| 200 | only very large, 50%+ |
| 1,000 | large, 25–30% |
| 5,000 | moderate, 10–15% |
| 20,000 | small, 5% |

These are **approximations** for a conversion rate near 5%; the exact number
depends on the baseline rate. The practical message: at low volume, stop
optimising and change the offer.

### 7.6 Setting a budget from a target CAC

Work backwards. If a customer is worth ₹36,000 of gross profit and the target
payback is three months, the maximum CAC is ₹36,000 divided by the number of
customers per payback window, which for a one-off service is simply ₹36,000.
Spend no more than a third of that per experiment until the funnel is measured.

```
Monthly budget  = target CAC x expected customers
                = 12,000 x 3 = 36,000
Daily budget    = monthly / 30 = 1,200
Test duration   = enough days to accumulate 100+ clicks per variant
```

Starting at ₹500–1,000 a day in India is enough to learn from a narrow search
campaign. Below that, data accumulates too slowly to distinguish signal from
noise.

### 7.7 What advertising cannot fix

| symptom | advertising cannot fix it because |
|---|---|
| low conversion on the page | more traffic produces proportionally more non-buyers |
| high refunds | the promise and the delivery disagree |
| no repeat purchase | retention is a product problem |
| negative margin | scale multiplies the loss |

The diagnostic sentence: **if you would not spend your own money to buy your own
offer at full price, advertising will not find someone who will.**

---

## Examples

### Example 1: Unit economics for a service business

```python
"""Compute acquisition economics and state plainly whether they work.

Every input is explicit. The output is a judgement, not a scoreboard.
"""
from dataclasses import dataclass


@dataclass
class Unit:
    price: int                 # what the customer pays, one engagement
    delivery_cost: int         # your time and tools, in rupees
    months_retained: float     # for recurring elements
    monthly_fee: int = 0
    ad_spend: int = 0
    customers: int = 1

    @property
    def gross_profit(self) -> float:
        one_off = self.price - self.delivery_cost
        recurring = (self.monthly_fee * 0.6) * self.months_retained  # 40% delivery cost
        return one_off + recurring

    @property
    def cac(self) -> float:
        return self.ad_spend / self.customers if self.customers else float("inf")

    def report(self) -> dict:
        gp, cac = self.gross_profit, self.cac
        return {
            "gross_profit": round(gp),
            "cac": round(cac),
            "ltv_cac": round(gp / cac, 2) if cac else None,
            "payback_months": round(cac / (self.monthly_fee * 0.6), 1) if self.monthly_fee else 0,
            "roas": round((self.price + self.monthly_fee * self.months_retained) / self.ad_spend, 2),
            "verdict": "healthy" if cac and gp / cac >= 3 else "not viable at this CAC",
        }


gym_bot = Unit(price=25_000, delivery_cost=9_000, monthly_fee=2_000,
               months_retained=12, ad_spend=36_000, customers=3)
print(gym_bot.report())
```

Expected output:

```
{'gross_profit': 30400, 'cac': 12000, 'ltv_cac': 2.53, 'payback_months': 10.0,
 'roas': 1.36, 'verdict': 'not viable at this CAC'}
```

Note the ROAS: 1.36 looks acceptable to someone who does not know the delivery
cost, and the verdict contradicts it. That contradiction is the reason this
chapter exists. **The business is not viable at a CAC of 12,000 with these
margins**, and no creative optimisation fixes a 2.53 ratio by much.

The legitimate responses, in order of leverage:

- raise `months_retained`, by fixing retention
- raise `monthly_fee`, by adding a service the client already wants
- lower `delivery_cost`, by templating the build
- lower CAC, by improving the funnel — the smallest lever of the four

### Example 2: How many visitors a test needs

```python
"""Minimum sample size for a two-variant conversion test.

Uses the standard normal approximation. Good enough for planning; it assumes
independent visitors and a stable conversion rate, which real traffic only
approximately satisfies.
"""
import math


def z_for(confidence: float) -> float:
    # two-sided critical values, the three that matter in practice
    return {0.90: 1.645, 0.95: 1.96, 0.99: 2.576}[confidence]


def sample_per_variant(baseline: float, relative_lift: float,
                       confidence: float = 0.95, power: float = 0.80) -> int:
    z_alpha = z_for(confidence)
    z_beta = {0.80: 0.84, 0.90: 1.28}[power]
    p1 = baseline
    p2 = baseline * (1 + relative_lift)
    p_bar = (p1 + p2) / 2
    numerator = (z_alpha * math.sqrt(2 * p_bar * (1 - p_bar))
                 + z_beta * math.sqrt(p1 * (1 - p1) + p2 * (1 - p2))) ** 2
    return math.ceil(numerator / (p2 - p1) ** 2)


for lift in (0.50, 0.25, 0.10, 0.05):
    n = sample_per_variant(0.05, lift)
    print(f"detect a {lift:>4.0%} relative lift -> {n:>6,} visitors per variant")
```

Expected output:

```
detect a  50% relative lift ->   1,469 visitors per variant
detect a  25% relative lift ->   5,327 visitors per variant
detect a  10% relative lift ->  31,199 visitors per variant
detect a   5% relative lift -> 121,986 visitors per variant
```

The numbers are the lesson. At 500 visitors a month, a 5% improvement is
invisible forever. The only tests available to a small site are large ones:
a different promise, a different audience, a different price. Optimising button
colours at this volume is a hobby dressed as rigour.

---

## Summary

- Advertising multiplies a working offer and cannot create one; three preconditions must hold first.
- ROAS measures revenue per rupee of spend and says nothing about profit; ROI does.
- LTV must be built from gross profit, not revenue, or acquisition looks healthier than it is.
- LTV:CAC of 3:1 and payback under 3 months for one-off services are planning judgements, not laws.
- Search captures existing intent and is the better first test; social creates intent and needs creative skill.
- Message match between ad and landing page prevents the largest single waste of spend.
- At low traffic volume only large changes are detectable, so test offers, not colours.

---

## Exercises

### Review Questions

1. State the three preconditions for profitable advertising and what happens when each fails.
2. Why can a business with a ROAS of 3 still lose money on every sale?
3. What is the difference between LTV and gross profit per customer, and which should CAC be compared to?
4. Why is search usually a better first paid test than social for a technical service?
5. At 1,000 monthly visitors, what size of improvement can you reliably detect?

### Application Problems

1. Compute CAC, gross profit, LTV:CAC, payback and ROAS for a plausible offer of yours. State the verdict honestly.
2. If the verdict is "not viable", rank the four levers by expected impact for your case and justify the ranking.
3. Run the sample-size function for your real traffic level. State the smallest lift you could ever detect and what that means for your testing plan.

### Challenge Problem

A client wants to spend ₹1,00,000 on ads in 30 days for a ₹15,000 service with a 40% gross margin and no organic sales yet. Write the exact response you would give, including what you would do with the budget instead, and the evidence you would need before accepting the spend.
