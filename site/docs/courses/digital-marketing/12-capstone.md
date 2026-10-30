---
id: 12-capstone
slug: /digital-marketing/12-capstone
title: "Chapter 12 — Capstone: A Complete Go-to-Market Plan"
sidebar_label: "Chapter 12 — Capstone: A Complete Go-to-Market Plan"
sidebar_position: 12
---

# Chapter 12 — Capstone: A Complete Go-to-Market Plan

## Learning Objectives

After this chapter you will be able to:

- Assemble the artifacts from chapters 1 to 11 into one plan with internal consistency
- Model capacity, revenue and break-even with arithmetic that exposes impossibility
- Set decision gates with dates so a plan can be abandoned on evidence rather than mood
- Grade your own plan against a rubric that punishes optimism
- State the single assumption that would invalidate the whole plan, and how to test it first

---

## Theory

### 12.1 The capstone is a consistency test

Each chapter produced one artifact. The capstone is not a summary of them; it is
the test of whether they agree with each other.

The inconsistencies that appear most often:

| inconsistency | how it shows up |
|---|---|
| the ICP cannot be reached by the chosen channel | a segment with no list, and a content strategy that needs 12 months |
| the price exceeds the value established in research | a ₹40,000 offer to a business losing ₹5,000 a month |
| the capacity cannot serve the revenue target | 20 clients a month at 60 hours each |
| the launch plan assumes a list that does not exist | a pre-sale to 120 people who are not buyers |
| the channel test has no kill criterion | a programme that can run forever without a verdict |

A plan that survives all five is worth executing. A plan that fails one is worth
fixing on paper, where it is free.

### 12.2 The plan document

Ten sections, in this order, each one page at most:

```
1   Who            the ICP, with a trigger and a way to find them
2   Problem        the cost of the problem, in their numbers
3   Offer          outcome, mechanism, scope, timeline, price, guarantee
4   Proof          what you can show today, and what you will build first
5   Channel        one primary, one fixed first action, and why
6   Capacity       how many clients or buyers you can actually serve
7   Funnel         stage rates and the arithmetic to a revenue number
8   Gates          dates, thresholds, and what happens when each fails
9   Budget         money and hours, with the largest cost named
10  Risk           the one assumption that invalidates everything
```

Section 6 is the one technical sellers skip and it is the one that decides
whether the plan is a business. A plan with no capacity ceiling is a wish.

### 12.3 The capacity model

```
available hours per week        = 40 (or 10, if you have a job)
delivery hours per client       = hours to deliver one engagement
sales and marketing hours       = the rest
maximum clients per month       = delivery capacity / delivery hours per client
revenue at that maximum         = clients x price
```

Then the two numbers that matter:

```
break-even clients   = fixed costs / gross profit per client
capacity headroom    = maximum clients - break-even clients
```

If break-even exceeds capacity, no amount of marketing fixes it: the price is too
low or the delivery is too slow. That is a structural finding, not a motivation
problem, and it is best discovered in a spreadsheet.

### 12.4 Gates, not goals

A goal is a number you hope for. A gate is a date plus a threshold plus a
pre-written consequence.

| gate | date | threshold | if it fails |
|---|---|---|---|
| G1 | day 14 | 20 agencies emailed, 2 replies | change the message, not the channel |
| G2 | day 30 | 1 paid task | change the segment |
| G3 | day 60 | 3 paid tasks or 1 retainer | abandon subcontracting, run walk-ins |
| G4 | day 90 | ₹50,000 collected | re-plan with the evidence from G1–G3 |

The power of a gate is that the consequence is decided in advance, when you are
calm. Plans fail because the decision to stop is made on a bad day, or never.

### 12.5 The rubric

Grade honestly. Each row is pass or fail, no partial credit, because partial
credit is how optimistic plans survive.

| # | check | fail looks like |
|---|---|---|
| 1 | the ICP names a trigger | "SMBs in India" |
| 2 | the problem has a rupee figure from research | a number you invented |
| 3 | the price is under 30% of first-year value | a price set by what feels normal |
| 4 | the guarantee promises only what you control | a revenue promise |
| 5 | the primary channel can name ten prospects today | "SEO" |
| 6 | capacity is stated in clients per month | "as many as come" |
| 7 | the funnel arithmetic is shown end to end | a target with no path |
| 8 | every gate has a date and a consequence | "review in a month" |
| 9 | the largest cost is named in hours or rupees | "some ad spend" |
| 10 | the invalidating assumption is stated | "execution risk" |

Ten passes is a plan worth starting. Seven to nine is a plan worth one more hour.
Below seven, the plan is a mood.

---

## Examples

### Example 1: The model, run end to end

```python
"""A capacity-and-gate model for a solo technical seller.

Every figure is an input so the plan can be re-run when reality disagrees.
"""
from dataclasses import dataclass


@dataclass
class Plan:
    hours_available_week: int = 40
    delivery_hours_per_client: int = 45
    sales_hours_week: int = 10
    price: int = 25_000
    gross_margin: float = 0.64          # price minus direct delivery cost
    fixed_costs_month: int = 15_000
    contacts_per_week: int = 20
    reply_rate: float = 0.15
    call_rate: float = 0.35
    close_rate: float = 0.25

    def capacity(self) -> dict:
        delivery_hours = self.hours_available_week - self.sales_hours_week
        per_month = (delivery_hours * 4.33) / self.delivery_hours_per_client
        return {
            "delivery_hours_week": delivery_hours,
            "max_clients_month": round(per_month, 1),
            "max_revenue_month": round(per_month * self.price),
        }

    def funnel(self) -> dict:
        replies = self.contacts_per_week * self.reply_rate
        calls = replies * self.call_rate
        clients = calls * self.close_rate
        return {
            "replies_week": round(replies, 2),
            "calls_week": round(calls, 2),      # 2dp: 1.05 is not 1.0
            "clients_month": round(clients * 4.33, 2),
        }

    def break_even(self) -> dict:
        gp = self.price * self.gross_margin
        clients = self.fixed_costs_month / gp
        cap = self.capacity()["max_clients_month"]
        return {
            "gross_profit_per_client": round(gp),
            "break_even_clients": round(clients, 2),
            "capacity_clients": cap,
            "headroom": round(cap - clients, 2),
        }


p = Plan()
for name, block in (("capacity", p.capacity()), ("funnel", p.funnel()),
                    ("break-even", p.break_even())):
    print(f"{name:>10}: {block}")
```

Expected output:

```
  capacity: {'delivery_hours_week': 30, 'max_clients_month': 2.9, 'max_revenue_month': 72167}
    funnel: {'replies_week': 3.0, 'calls_week': 1.05, 'clients_month': 1.14}
break-even: {'gross_profit_per_client': 16000, 'break_even_clients': 0.94, 'capacity_clients': 2.9, 'headroom': 1.96}
```

Read the three lines together, because that is the discipline the chapter is
teaching:

- **Capacity** is 2.9 clients a month, not "as many as I can sell". At 45 hours
  each, that is the physical ceiling.
- **The funnel** produces 1.14 clients a month, comfortably inside capacity, so
  the constraint is demand rather than delivery.
- **Break-even** needs 0.94 clients to cover ₹15,000 of fixed costs, so the plan
  is viable but thin: one bad month is a loss.

The actionable conclusion is specific: the bottleneck is the funnel, not the
delivery, so effort belongs in reply rate and close rate. And there is very
little cushion, so the first gate should test whether the reply rate is really
15%.

### Example 2: The invalidating assumption

Every plan has one assumption that, if wrong, makes the rest irrelevant. Naming
it converts a plan into an experiment.

```
Plan:      sell WhatsApp bots to Patna gyms at 25,000 setup
Assumption: gyms lose enough enquiries to justify 25,000

If wrong:  the entire price structure collapses, and no channel work helps
Test:      5 interviews asking what the last lost enquiry cost, before any build
Cost:      3 hours
Deadline:  this week
Result:    if fewer than 3 of 5 name a specific incident with a number, rebuild
           the offer around a cheaper, narrower outcome
```

The test is deliberately cheaper than the plan's first deliverable, and it comes
first. That ordering — cheapest invalidating test before the most expensive work
— is the single most useful habit this course can leave you with.

---

## Summary

- The capstone is a consistency test across chapters, not a summary of them.
- A plan needs ten sections, and capacity is the one that decides whether it is a business.
- If break-even clients exceed capacity, the problem is price or delivery speed, and marketing cannot fix it.
- Gates are dates plus thresholds plus pre-written consequences, decided when calm.
- The rubric uses pass or fail, because partial credit is how optimism survives.
- Every plan has one assumption that invalidates the rest, and testing it should be the cheapest and earliest action.

---

## Exercises

### Capstone Deliverable

Produce one document, ten sections, using the artifacts from chapters 1 to 11.
Then run it through the rubric and report your score without adjusting the
answers.

**Deliverable checklist**

- [ ] ICP with a trigger and a way to find ten prospects today
- [ ] Problem cost in rupees, sourced from research rather than invention
- [ ] Offer with all six components, including a guarantee you control
- [ ] Proof inventory: what exists now, what you will build first
- [ ] One primary channel, one fixed first action
- [ ] Capacity in clients per month, with delivery hours stated
- [ ] Funnel arithmetic from contacts to revenue
- [ ] Four gates with dates, thresholds and consequences
- [ ] Budget in hours, with the largest cost named
- [ ] The invalidating assumption, its test, its cost and its deadline

**Then answer these three questions in one sentence each**

1. What is the single number that would make you abandon this plan?
2. What is the cheapest experiment you can run this week that could produce that number?
3. What will you do in the next 48 hours regardless of how you feel about it?

If any answer takes more than one sentence, the plan is still too vague to
execute, and the next hour belongs to the plan rather than to the work.

### Review Questions

1. Which of the ten rubric checks does your plan fail, and is that failure a gap in evidence or a gap in the offer?
2. Why is capacity stated in clients per month rather than in revenue per month?
3. What is the difference between a gate and a goal, in terms of what you do when you miss it?

### Challenge Problem

Your current income stops tomorrow. Write the two-page plan you would execute
anyway, using only the channels you can start this week and the proof you already
have. Then apply the rubric and identify the single check you cannot pass. Explain
whether that check means the plan is wrong or that the plan is right and your
evidence is missing, and state the cheapest experiment that resolves the
difference within seven days.

---

## Where this goes next

This course ends at the point where most marketing material begins: with a plan
that has numbers, a channel, and a date. The work from here is repetition, not
research.

Three habits carry everything in this course forward:

- **Ask for the number.** Every conversation with a buyer should end with a rupee
  figure attached to the problem.
- **Write the kill criterion first.** Any programme you start without one will
  outlive its usefulness.
- **Ship the proof.** A runnable artifact, a measured result, a named testimonial.
  Everything else is description.
