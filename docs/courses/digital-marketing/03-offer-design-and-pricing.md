# Chapter 3 — Offer Design and Pricing

## Learning Objectives

After this chapter you will be able to:

- Assemble an offer from its six components and identify which one is usually missing
- Choose between cost-plus, competitor-based and value-based pricing, and say when each is inappropriate
- Compute a defensible price from the customer's economic gain rather than from your hours
- Structure three tiers where the middle tier is the one you want sold
- Write a guarantee that transfers risk without transferring blame
- Handle a discount request by reducing scope instead of price

---

## Theory

### 3.1 An offer is six components, and one is usually missing

An offer is not a price list entry. It is a complete proposition, and a buyer
evaluates all six parts whether you specify them or not:

| component | question it answers | failure if missing |
|---|---|---|
| **outcome** | what changes for them? | the buyer cannot justify the spend |
| **mechanism** | how does it work? | they assume it is magic or a scam |
| **scope** | what exactly is included? | unlimited revisions and unpaid work |
| **timeline** | when does it happen? | no urgency, no decision |
| **price and terms** | what and when do they pay? | price negotiation becomes the whole call |
| **guarantee** | what if it fails? | the buyer carries all the risk |

The missing component in most freelance offers is the **guarantee**, followed
closely by **scope**. Both omissions come from the same instinct, which is to
avoid committing to anything in case the client is difficult. The effect is the
opposite: an uncommitted offer attracts the buyers who want to extract the most
for the least, because nothing stops them.

### 3.2 Three pricing methods

| method | how it is set | works when | fails when |
|---|---|---|---|
| **cost-plus** | your cost plus a margin | commodity work with known inputs | your cost is unrelated to their value |
| **competitor-based** | what others charge | buyers actively compare | the comparison is on price alone |
| **value-based** | a share of the value created | outcome is measurable | you cannot quantify the outcome |

Cost-plus is what a developer naturally computes: hours times a rate. It is
accurate about your effort and irrelevant to the buyer, who does not care how
long it took. Two consequences follow, and both are bad:

- you are punished for being fast, which is the one advantage you have
- the conversation becomes a negotiation about your estimate instead of their
  outcome

Value-based pricing starts from the other end. It requires one number: what does
the problem cost them per month, or what does the improvement earn them? If you
cannot get that number, you cannot price on value, and you should say so rather
than invent one.

### 3.3 Computing a value-based price

A defensible structure:

```
annual value created = (monthly gain x 12) + one-off gains
your price           = 10% to 30% of first-year value
payback target       = under 6 months for a small business
```

The 10–30% band is a **judgement**, not a measured constant. The underlying
principle is that the buyer keeps most of the gain, which is what makes the
purchase obvious. The payback target matters more than the percentage: a small
business comparing a 4-month payback against a 14,000-rupee salary will sign,
and one comparing a 14-month payback will not.

Worked example, all figures **estimated**:

```
Gym: 400 members, loses ~25 enquiries a month, closes ~30% of enquiries.
Gain: 7.5 extra members a month x 1,200 average monthly fee = 9,000/month
      (retention assumed 6 months, so a member is worth ~7,200)
One-off gain: staff time saved, 6 hours/week at 150/hour = 3,600/month

Annual value = 9,000 x 12 = 108,000
Price at 25% of first-year value = 27,000
Setup 25,000 + 2,000/month = 49,000 in year one, i.e. 23% of first-year value.
Payback: 25,000 / 9,000 = 2.8 months. Defensible.
```

Change one assumption and the price changes: at 15% close rate instead of 30%,
the monthly gain halves and a 25,000 setup takes 5.6 months to pay back. This is
why the interview in chapter 2 asks for the number. The price is downstream of a
fact you have to go and get.

### 3.4 Tiering and anchoring

Three tiers, not one, because a single price invites a yes-or-no decision while
three prices invite a which-one decision. The structure that works for services:

| tier | purpose | pricing logic |
|---|---|---|
| **essential** | removes the core pain only | priced so it is clearly limited |
| **standard** | core plus the thing they actually need | 1.8–2.5x essential; you want this sold |
| **complete** | adds support, integration, priority | 3–4x essential; makes standard look reasonable |

The top tier exists partly to be declined. That is not manipulation; it is the
same mechanism as a decoy, documented by Ariely's subscription experiment, where
adding a dominated option shifted choices toward the target option. The ethical
constraint is that every tier must be honestly deliverable. A phantom tier that
nobody can buy is a lie with a price tag.

Anchoring also works on the first number spoken. In a proposal, state the
outcome value before the price, so the price is read relative to the value rather
than to zero.

### 3.5 Guarantees that transfer risk without transferring blame

A guarantee is not a promise to succeed. It is a promise about what happens if
the defined outcome does not occur.

| type | example | risk to you |
|---|---|---|
| **delivery guarantee** | delivered by the agreed date or 20% off | low, you control it |
| **outcome guarantee** | if enquiries do not fall, next month free | medium, partly controllable |
| **reversal guarantee** | first milestone refunded if you are not satisfied | low-medium, needs clear milestone |
| **exit guarantee** | cancel any month with 15 days' notice | very low, and it removes a big objection |

The strongest guarantee for a first engagement is usually the **reversal**: a
small, clearly bounded first milestone that is refundable. It costs little,
because the milestone is small, and it converts the buyer's question from "will
this work?" to "what do I lose if it does not?", which is a much easier question
to answer yes to.

Never guarantee a number you do not control. Revenue outcomes depend on the
client's sales team, and promising them converts a marketing problem into a
legal one.

### 3.6 Discounts destroy more than margin

A discount teaches the buyer that your first price was fiction. The second
purchase then starts from the discounted anchor, and the third request arrives
before the first project ends.

The substitution rule: **when asked for a lower price, remove scope, never
reduce the rate.**

```
Buyer: "Can you do it for 15,000?"
You:   "I can do the core bot without payment collection for 15,000.
        Payment collection is the part that takes the extra week.
        Which matters more to you?"
```

This keeps the price-per-unit-of-work stable, gives the buyer a real choice, and
often results in them taking the full scope because the reduction is visible and
unattractive.

### 3.7 Terms are part of the price

Cash timing is a pricing decision. For small engagements:

| structure | when | why |
|---|---|---|
| 100% upfront | under ₹15,000, new client | the amount does not justify chasing |
| 50 / 50 | most fixed-scope work | funds the work, splits risk |
| milestone-based | over ₹1,00,000 | each payment tied to something visible |
| monthly retainer in advance | ongoing support | predictable, and filters non-payers |

A client who refuses any upfront payment on a first engagement is telling you
something about how the relationship will go. Believe them early; it is cheaper
than believing them at invoice time.

---

## Examples

### Example 1: Pricing three tiers from one value calculation

Starting from the ₹9,000/month gain computed in section 3.3:

```
Essential   core auto-reply + booking link, no payments, no reporting
            price 15,000 setup + 1,000/month
            value captured: roughly half the gain (booking only)

Standard    everything in essential + payment collection + weekly report
            price 25,000 setup + 2,000/month
            value captured: most of the gain

Complete    standard + staff training, 4-hour response SLA, second location
            price 45,000 setup + 4,000/month
            value captured: all of the gain, plus operational cover
```

Check the tiers against the buyer's numbers rather than against each other:

| tier | year-one cost | month gain | payback |
|---|---|---|---|
| essential | 15,000 + 12,000 = 27,000 | ~4,500 | 3.3 months |
| standard | 25,000 + 24,000 = 49,000 | ~9,000 | 2.8 months |
| complete | 45,000 + 48,000 = 93,000 | ~9,000 + cover | 5.2 months |

Standard has the best payback and the best value, so it is both the one you want
sold and the one you can honestly recommend. That alignment is the test of a
well-designed tier set. If the tier you want sold has the worst economics for
the buyer, you have designed a trap, and buyers eventually notice traps.

### Example 2: A price floor calculator you can defend

```python
"""Compute the floor, target and ceiling for a fixed-scope engagement.

Floor is arithmetic: below it the work loses money.
Target is value-based: a share of the gain the client receives.
Ceiling is what the buyer's alternative costs.
"""
from dataclasses import dataclass


@dataclass
class Engagement:
    hours: float
    target_hourly: int        # what your time must earn to be worth taking
    monthly_gain_to_client: int
    months_of_value: int = 12
    value_share: float = 0.25
    alternative_cost: int = 0  # what they pay today, e.g. a salary


def price_band(e: Engagement) -> dict:
    floor = round(e.hours * e.target_hourly, -2)
    value = e.monthly_gain_to_client * e.months_of_value
    target = round(value * e.value_share, -3)
    ceiling = e.alternative_cost or value
    return {
        "floor": floor,
        "target": target,
        "ceiling": ceiling,
        "feasible": floor <= target <= ceiling,
        "payback_months": round(target / e.monthly_gain_to_client, 1) if e.monthly_gain_to_client else None,
    }


gym_bot = Engagement(
    hours=60,
    target_hourly=1_200,
    monthly_gain_to_client=9_000,
    alternative_cost=14_000 * 12,   # the receptionist they would otherwise hire
)

print(price_band(gym_bot))
```

Expected output:

```
{'floor': 72000, 'target': 27000, 'ceiling': 168000, 'feasible': False,
 'payback_months': 3.0}
```

`feasible: False` is the useful result, and it is the lesson. At 60 hours and a
1,200-rupee target rate, this work costs you 72,000 of time and the market will
bear 27,000. That is not a pricing problem, it is a delivery problem: either the
delivery must get to about 20 hours, or the offer must be productised so the same
build serves many clients.

Two legitimate responses:

- **Reduce delivery time** by reusing a template: 20 hours at 1,200 is 24,000,
  which sits under the 27,000 target and is feasible.
- **Raise the value** by selling to a larger operator: a 3-location gym with
  three times the missed enquiries supports a proportionally higher target.

The illegitimate response, which is the one most freelancers choose, is to lower
`target_hourly` until the numbers agree.

---

## Summary

- An offer has six parts, and the two most often missing are scope and guarantee.
- Cost-plus pricing punishes speed and turns the conversation into a negotiation about your estimate.
- Value-based pricing needs one measured input, the cost of the problem, and it is not available if you did not ask for it in research.
- A price of 10–30% of first-year value with a payback under six months is defensible for small businesses; the band is judgement, the payback is arithmetic.
- Three tiers convert a yes-or-no decision into a which-one decision, and the middle tier should have the best economics for the buyer.
- Guarantees should promise what you control; the reversal guarantee is the cheapest way to remove first-engagement risk.
- Discount requests are answered with reduced scope, never a reduced rate.

---

## Exercises

### Review Questions

1. Why does cost-plus pricing penalise a fast developer? What does the buyer actually compare?
2. State the six components of an offer and name the two most commonly omitted.
3. What is the difference between an outcome guarantee and a reversal guarantee, in terms of who carries the risk?
4. Why must the tier you want sold also be the best-value tier for the buyer?
5. A client asks for a 40% discount. Give the exact sentence you would reply with.

### Application Problems

1. Compute a value-based price for your offer: monthly gain, annual value, price at 20%, and payback period. Mark every assumption as measured or estimated.
2. Build three tiers and check each against payback. State which tier has the best buyer economics and whether that is the one you want sold.
3. Run the price-band calculator for your own engagement. If `feasible` is False, write the two legitimate responses and the one illegitimate response you are tempted by.

### Challenge Problem

A client wants a fixed price for a project whose scope is genuinely unknown, and refuses to pay for discovery. Design an offer that protects you from unlimited scope without refusing the work, using a bounded first milestone, a written assumption list, and a change-order clause. State the exact price, the boundary, and what happens when the boundary is crossed.
