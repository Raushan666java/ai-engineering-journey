# Chapter 5 — Distribution Channels

## Learning Objectives

After this chapter you will be able to:

- Classify channels as owned, earned or paid and state the cost structure of each
- Score a channel on five criteria instead of guessing which one "feels" right
- Apply the one-channel rule and explain why spreading effort across four channels produces zero
- Compute expected clients per month from a channel's physical capacity, not from optimism
- Design a 30-touch channel test with a written kill criterion
- Ask for a referral at the moment it is most likely to be given

---

## Theory

### 5.1 Three kinds of channel and their real costs

| type | examples | cost | speed | compounds? |
|---|---|---|---|---|
| **owned** | your site, email list, repository, docs | time | slow | yes |
| **earned** | referrals, communities, other people's audiences | trust | medium | yes |
| **paid** | search ads, social ads, sponsorships | money | fast | no |

The important asymmetry: owned and earned compound, paid does not. A paid
channel stops the day the budget stops. This is not an argument against paid
advertising; it is an argument that paid should fund the transition to owned,
not replace it.

For a seller with no budget and no audience, the usable channels are owned and
earned. Paid is not a shortcut, it is a multiplier, and multiplying zero is zero.

### 5.2 Five criteria for choosing a channel

| criterion | the question | how to check before committing |
|---|---|---|
| **concentration** | are the buyers in one place? | can you name the place: a forum, a directory, an event, a search term |
| **cost to reach** | what does one qualified contact cost? | time per touch, or rupees per click |
| **time to signal** | how long before you know if it works? | days for outbound, weeks for content, months for SEO |
| **compounding** | does past work keep producing? | does an old post still bring enquiries |
| **fit with buying mode** | how do they prefer to buy? | ask; do not assume |

**Concentration is the one that decides everything.** A channel where your buyers
are 1% of the audience costs a hundred times more per contact than a channel
where they are 80%, and no amount of good copy fixes a 1% concentration.

**Buying mode** matters because channels are attached to intent. Considered
purchases with a committee (enterprise software) are won through referrals and
sales conversations. Low-price impulse purchases are won through search and
social proof. Using a content channel for a committee purchase produces readers
who never buy; using cold outreach for an impulse purchase produces annoyance.

### 5.3 The one-channel rule

New sellers often run five channels badly. The arithmetic explains why this
fails:

```
Four channels x 2 hours each = 2 hours per channel per week.
A channel needs roughly 8-10 hours a week to produce a signal in under a month.
At 2 hours, no channel produces a signal, so nothing can be diagnosed,
so all four are abandoned at once with the conclusion "marketing does not work".
```

One channel at eight hours produces either clients or a clear negative result in
three to four weeks. A clear negative result is worth more than four ambiguous
ones, because it lets you change exactly one variable.

The rule: **one channel until it either works or is definitively dead.** Then add
a second only if the first is stable enough to run on maintenance time.

### 5.4 Channels ranked for a technical seller with no audience

Honest assessment, specific to selling development services in India. The
"first rupee" column is a judgement based on typical experience, not a measured
statistic.

| channel | concentration | cost | first rupee | compounds |
|---|---|---|---|---|
| **agency subcontracting** | high | low | 1–3 weeks | yes, repeats |
| **past employer / past colleagues** | very high | very low | days | no |
| **local business walk-ins** | high | medium (travel) | 1–2 weeks | no |
| **communities you already belong to** | high | low | 2–4 weeks | yes |
| **marketplaces** (Upwork, Truelancer) | low | low money, high time | 3–8 weeks | no |
| **content / SEO** | medium | high time | 2–6 months | strongly |
| **cold outbound at volume** | medium | medium | 2–4 weeks | no |
| **paid ads** | medium | high money | days, if the offer works | no |

The top four share a property that matters more than any tactic: **the buyer
already trusts the context.** An agency trusts its own need for hands. A former
employer trusts your work. A walk-in trusts that you turned up. A community
trusts its own norms. Trust is the scarce input, and channels that supply it are
worth more than channels that supply reach.

### 5.5 Capacity, not hope

Every channel has a physical throughput limit, and the plan should be built from
it. This is the same discipline as chapter 1's market sizing, applied at the
channel level.

For outbound email:

```
capacity      = emails per day x working days per week
              = 20 x 5 = 100 per week
reply rate    = 10-20% for a personalised message to a relevant role
replies       = 10-20 per week
calls booked  = about 30-40% of replies
calls         = 3-8 per week
close rate    = 1 in 4 calls for a small first engagement
clients       = roughly 1-2 per week at the optimistic end, 1 per fortnight at
                the pessimistic end
```

The value of writing this down is that it fails visibly. If the reply rate turns
out to be 2%, the plan produces one client every five weeks, which is not a
business, and you learn that in week three rather than month six.

### 5.6 Referrals: ask at the moment of delivered value

Referrals are the highest-converting channel and the most under-used, because
people ask at the wrong time and in the wrong way.

**Wrong time:** at the end of a project, when the client is thinking about the
invoice.
**Right time:** immediately after a visible win, when gratitude is fresh.

**Wrong ask:** "Do you know anyone who needs my services?" This requires the
client to do your segmentation for you and to risk their reputation on a vague
description.

**Right ask:** "You mentioned your cousin runs two clinics with the same problem.
Would you be comfortable introducing us?" This names a person, a problem, and a
specific reason the introduction is relevant.

The specific ask converts several times better because it removes the two costs
of referring: thinking of someone, and judging fit.

### 5.7 Partnerships and white-label

A partnership is a channel where someone else owns the relationship and you
supply the delivery. For a solo developer this is often the fastest route to
recurring revenue:

| shape | who sells | who delivers | your visibility |
|---|---|---|---|
| subcontracting | agency | you | none, but recurring |
| white-label | agency | you | none, priced higher |
| referral partnership | another specialist | you | some |
| revenue share | a platform | you | some, variable |

The trade is always the same: visibility for volume. Neither is wrong, but choose
deliberately. A subcontract that pays 60% of market rate and repeats monthly is
often better than a direct client that pays full rate once.

---

## Examples

### Example 1: Scoring channels before spending a month on one

```python
"""Rank channels by expected clients per month rather than by preference.

Every input is explicit so it can be argued with. Change one number and see
whether the ranking survives; if it does not, the decision was never robust.
"""
from dataclasses import dataclass


@dataclass
class Channel:
    name: str
    contacts_per_month: int     # physical capacity, not ambition
    reply_rate: float           # judgement, from comparable experience
    call_rate: float            # share of replies that take a call
    close_rate: float           # share of calls that sign
    hours_per_month: int

    def clients(self) -> float:
        return self.contacts_per_month * self.reply_rate * self.call_rate * self.close_rate

    def hours_per_client(self) -> float:
        c = self.clients()
        return round(self.hours_per_month / c, 1) if c else float("inf")


channels = [
    Channel("agency email",      100, 0.15, 0.35, 0.25, 20),
    Channel("past employer",       2, 0.80, 0.60, 0.50, 2),
    Channel("local walk-ins",     25, 0.60, 0.40, 0.10, 40),
    Channel("Upwork proposals",   60, 0.05, 0.50, 0.20, 40),
    Channel("LinkedIn content",   30, 0.03, 0.50, 0.30, 20),
]

for c in sorted(channels, key=lambda x: -x.clients()):
    print(f"{c.name:<20} {c.clients():>5.2f} clients/mo  {c.hours_per_client():>5} h/client")
```

Expected output:

```
past employer         0.48 clients/mo    4.2 h/client
local walk-ins        0.60 clients/mo   66.7 h/client
agency email          1.31 clients/mo   15.2 h/client
Upwork proposals      0.30 clients/mo  133.3 h/client
LinkedIn content      0.05 clients/mo  400.0 h/client
```

Read it carefully, because the ranking is not the lesson. The lesson is that
**past employer has the best hours-per-client but a ceiling of 0.48 clients a
month**, because there is only one past employer. Capacity and efficiency are
different things, and a channel can be excellent and still insufficient.

The plan that emerges is not "pick the best channel" but "run the high-capacity
channel for volume and the high-trust channel for the first win".

### Example 2: A channel test with a kill criterion

```markdown
# Channel test: agency email subcontracting

Hypothesis  20 personalised emails a week to Indian dev agencies will produce
            at least 2 replies and 1 paid task within 30 days.

Quota       20 emails/week, 80 total. Non-negotiable, because a 12-email "test"
            cannot distinguish a bad channel from a bad month.

Measure     sent, delivered, replied, calls, paid tasks. Logged per send.

Success     2+ replies and 1 paid task by day 30.

Kill        Fewer than 2 replies from 80 sends, and no paid task by day 35.
            On kill: do not "try harder". Change exactly one variable:
            either the message, the segment, or the channel. Not all three.

Cost        80 emails x 4 minutes = 5.3 hours, plus list building 3 hours.
```

The kill criterion is the part people omit, and without it a failing channel runs
for six months because stopping feels like admitting the idea was wrong. A
written kill criterion converts that emotional decision into an arithmetic one.

---

## Summary

- Channels are owned, earned or paid; owned and earned compound, paid stops when the budget stops.
- Concentration decides channel economics, and no copy fixes a channel where buyers are 1% of the audience.
- One channel at full effort produces a diagnosable result; four channels at partial effort produce only confusion.
- Capacity arithmetic turns a channel plan into a forecast that can visibly fail.
- Referrals should be asked for immediately after a visible win, naming a specific person and a specific reason.
- Partnerships trade visibility for volume, and that trade should be chosen deliberately rather than drifted into.
- Every channel test needs a written kill criterion before it starts.

---

## Exercises

### Review Questions

1. Why does a paid channel not compound, and what should paid spend be used to fund instead?
2. Explain why concentration matters more than reach for a seller with no brand.
3. What is wrong with "I will try LinkedIn, Upwork and cold email this month"?
4. Why is a specific referral ask better than "do you know anyone"?
5. A channel produces 0.48 clients per month at 4 hours per client. Is it a good channel? Justify with both numbers.

### Application Problems

1. Score five candidate channels for your offer using the chapter's model. State which input you are least confident about and how you would test it cheaply.
2. Write a channel test document with hypothesis, quota, measures, success threshold, kill criterion and cost, for the channel you ranked first.
3. List every person who already trusts your work: past employers, colleagues, batchmates, communities. Put a number next to each name for how likely they are to refer, and identify the three you would contact first.

### Challenge Problem

You have 8 hours a week and no budget. Design a 30-day plan that runs two channels without violating the one-channel rule, by making one of them a single fixed action completed in week one rather than an ongoing programme. Justify which channel gets the continuing hours and what evidence at day 30 would make you switch.
