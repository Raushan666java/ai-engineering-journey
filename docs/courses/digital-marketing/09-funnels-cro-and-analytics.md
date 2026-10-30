# Chapter 9 — Funnels, CRO and Analytics

## Learning Objectives

After this chapter you will be able to:

- Draw a funnel with the four stages that matter for a service business and compute its overall conversion
- Identify the stage worth fixing using revenue impact rather than the biggest percentage drop
- Write a testable hypothesis in the standard form and state its success threshold in advance
- Audit a page for the eight frictions that account for most lost conversions
- Build a metrics tree with one north-star number and the inputs that move it
- Explain why last-click attribution overstates some channels and understates others, and correct for it

---

## Theory

### 9.1 The funnel is a multiplication

Conversion rates multiply. That single fact explains most confusing analytics.

```
visitors -> enquiries -> calls -> customers
```

If 1,000 visitors produce 20 enquiries (2%), 20 enquiries produce 6 calls (30%),
and 6 calls produce 2 customers (33%), the overall conversion is
`0.02 x 0.30 x 0.33 = 0.2%`, or 2 customers per thousand visitors.

Two consequences follow:

**Improvements compound.** A 20% improvement at each of three stages is
`1.2 x 1.2 x 1.2 = 1.73`, a 73% increase in customers. This is why funnels reward
patience: three modest fixes beat one dramatic one.

**One broken stage caps everything.** A 90% improvement in enquiries does nothing
if calls convert at 1%, because the arithmetic multiplies.

### 9.2 Fix the stage with the most revenue behind it

The instinct is to fix the smallest percentage. That is usually wrong.

The right calculation: for each stage, apply a plausible relative improvement,
propagate it downstream at the observed rates, and compare resulting customers.
The stage with the highest result per unit of effort is the one to fix.

| stage | current | plausible lift | effort | propagated customers |
|---|---|---|---|---|
| visitors -> enquiries | 2.0% | +25% | copy and proof | +0.5 |
| enquiries -> calls | 30% | +25% | faster reply, clearer ask | +0.5 |
| calls -> customers | 33% | +25% | proposal and pricing | +0.5 |

All three are equal in arithmetic, so the tie breaks on effort and confidence.
In practice, `calls -> customers` is the easiest to improve because you control
the conversation entirely, and `visitors -> enquiries` is the hardest because you
do not control the audience.

**Implication for a solo seller: fix the sales conversation before the landing
page.** It is cheaper, faster, and it raises the value of every future visitor.

### 9.3 The CRO process

Conversion rate optimisation is an experiment loop, not a redesign.

```
1. Observe   find where people leave, using analytics and five real recordings
2. Hypothesise  write the claim and the reason
3. Change    one thing
4. Measure   against a threshold set in advance
5. Decide    keep, revert, or run again with a bigger change
```

The hypothesis has a standard form that prevents vague tests:

```
Because we observed  [evidence],
we believe that     [change]
for                 [audience]
will cause          [effect]
measured by         [metric]
and we will accept it if [threshold] by [date].
```

Filled in:

```
Because we observed that 71% of visitors leave before scrolling past the first
screen, we believe that moving the price and the guarantee above the fold will
cause more visitors to reach the enquiry form, measured by form-start rate, and
we will accept it if form-start rate rises from 4% to 6% within 21 days.
```

That sentence can be argued with, which is the point. "Let us improve the page"
cannot.

### 9.4 The eight frictions

Most lost conversions are caused by a short list of avoidable problems. Audit in
this order, because the earlier items cost the most:

| # | friction | fix |
|---|---|---|
| 1 | the headline does not say who it is for | name the audience and the change |
| 2 | no price, so the visitor assumes the worst | show a number or a range with a reason |
| 3 | no proof of any kind | a repository, a number, a screenshot |
| 4 | the call to action is vague ("get in touch") | one specific verb and one outcome |
| 5 | the form asks for too much | name and email only, on the first step |
| 6 | it is unclear what happens next | say "a 15-minute call, no deck" |
| 7 | the page loads slowly, especially on mobile | under 2.5s LCP |
| 8 | there is no reason to act now | a real constraint, never fake scarcity |

Fake urgency is on this list as a warning, not a technique. A countdown timer
that resets is the fastest way to lose a technical buyer, who will check.

### 9.5 The metrics tree

One north-star number, and the inputs that move it. For a service business:

```
north star:  signed contracts per month
             |
   +---------+----------+-----------+
   |         |          |           |
 enquiries  call rate  close rate  average value
   |         |          |           |
 visitors   reply speed proposal   scope
 x CVR      x follow-up quality    x pricing
```

Every number on the tree is either an input you can change or an output you can
only observe. Confusing the two produces plans that cannot be executed: "increase
close rate" is not an action; "send the proposal within 24 hours instead of five
days" is.

**Leading versus lagging.** Contracts signed is lagging: it tells you what
happened a month ago. Enquiries this week is leading: it tells you what will
happen next month. Manage the leading numbers, report the lagging ones.

### 9.6 Attribution is broken, and knowing why is enough

Last-click attribution credits the final touch. Consequences:

| channel | distortion |
|---|---|
| brand search | over-credited, it captures demand created elsewhere |
| content | under-credited, it is usually the first touch |
| word of mouth | invisible entirely |
| direct traffic | a bucket for everything unmeasured |

For a solo seller, sophisticated attribution is not worth building. Two cheap
corrections capture most of the value:

**Ask.** Add one question to the enquiry form: "How did you hear about me?" It is
self-reported and imperfect, and it is the only method that sees word of mouth.

**Tag consistently.** UTM parameters on every link you control, so at least the
digital path is unambiguous.

The limit worth stating plainly: with fewer than roughly a hundred conversions a
month, attribution data is too noisy to support decisions. At that volume, ask
people.

### 9.7 Five numbers, reviewed weekly

| number | why |
|---|---|
| enquiries this week | leading indicator of revenue next month |
| calls booked | the quality of those enquiries |
| proposals sent | how many conversations reached a decision point |
| contracts signed | lagging, but the only real score |
| cash collected | because signed is not paid |

Everything else is diagnostic. A dashboard with thirty metrics gets looked at
once.

---

## Examples

### Example 1: Which stage to fix, by revenue

```python
"""Compare stage improvements by resulting customers and revenue.

Effort is a 1-5 judgement (5 = hardest). The output ranks by revenue per unit
of effort, which is the only ranking that respects a solo seller's constraints.
"""
from dataclasses import dataclass


@dataclass
class Funnel:
    visitors: int
    enquiries: int
    calls: int
    customers: int
    price: int


def rates(f: Funnel) -> list[float]:
    return [f.enquiries / f.visitors, f.calls / f.enquiries, f.customers / f.calls]


def customers_after(f: Funnel, stage: int, relative_lift: float) -> float:
    r = rates(f)
    r[stage] *= 1 + relative_lift
    return f.visitors * r[0] * r[1] * r[2]


f = Funnel(visitors=1_000, enquiries=20, calls=6, customers=2, price=25_000)
names = ["visitors->enquiries", "enquiries->calls", "calls->customers"]
effort = [3, 2, 1]          # 1 = easiest

base = f.customers
print(f"baseline: {base} customers, rs{base * f.price:,}")
for i, name in enumerate(names):
    new = customers_after(f, i, 0.25)
    gain = (new - base) * f.price
    print(f"{name:<22} {new:>5.2f} customers  +rs{gain:>8,.0f}  "
          f"per effort unit +rs{gain / effort[i]:>8,.0f}")
```

Expected output:

```
baseline: 2 customers, rs50,000
visitors->enquiries      2.50 customers  +rs  12,500  per effort unit +rs   4,167
enquiries->calls         2.50 customers  +rs  12,500  per effort unit +rs   6,250
calls->customers         2.50 customers  +rs  12,500  per effort unit +rs  12,500
```

Every stage produces the same 0.5 extra customers, because a 25% relative lift
propagates identically. The ranking is entirely created by effort, which is why
effort must be estimated honestly rather than optimistically. A seller who
believes rewriting the landing page is easy will fix the wrong thing.

### Example 2: Consistent tagging, so at least one channel is measurable

```python
"""Build UTM-tagged links with a fixed convention.

Inconsistent UTMs are the most common reason analytics is unreadable six months
later: 'LinkedIn', 'linkedin' and 'li' become three channels.
"""
from urllib.parse import parse_qsl, urlencode, urlsplit, urlunsplit

ALLOWED_SOURCES = {"linkedin", "email", "whatsapp", "github", "google", "referral"}


def tag(url: str, source: str, medium: str, campaign: str, content: str = "") -> str:
    source, medium = source.lower(), medium.lower()
    if source not in ALLOWED_SOURCES:
        raise ValueError(f"unexpected source {source!r}; add it deliberately")
    if " " in campaign or campaign.lower() != campaign:
        raise ValueError("campaign must be lowercase-hyphenated")
    parts = urlsplit(url)
    params = dict(parse_qsl(parts.query))          # keep existing parameters
    params.update(utm_source=source, utm_medium=medium, utm_campaign=campaign)
    if content:
        params["utm_content"] = content
    return urlunsplit(parts._replace(query=urlencode(params)))


print(tag("https://example.in/offer", "LinkedIn", "Social", "agency-outreach",
          "patna-batch"))
```

Expected output:

```
https://example.in/offer?utm_source=linkedin&utm_medium=social&utm_campaign=agency-outreach&utm_content=patna-batch
```

The `ValueError` on an unexpected source is the useful part. A whitelist means a
typo fails loudly at the moment the link is created, rather than quietly
polluting a report that nobody can explain three months later.

---

## Summary

- Funnel conversion multiplies, so three modest improvements compound into a large gain and one broken stage caps everything.
- The stage to fix is the one with the most revenue per unit of effort, not the one with the smallest percentage.
- For a solo seller, the sales conversation is usually cheaper to improve than the landing page.
- A CRO hypothesis states the observation, the change, the audience, the metric and the threshold before the test.
- Eight frictions account for most lost conversions, and the top three are missing audience, missing price and missing proof.
- The metrics tree separates leading inputs from lagging outputs, and only inputs are actionable.
- Last-click attribution distorts; asking "how did you hear about me" is the only method that sees word of mouth.
- Five numbers reviewed weekly beat thirty metrics reviewed never.

---

## Exercises

### Review Questions

1. Why does a 20% improvement at three stages produce a 73% improvement overall?
2. Why is the smallest percentage drop usually not the right stage to fix?
3. State the five parts of a testable CRO hypothesis.
4. Why is "increase close rate" not an actionable plan?
5. What does last-click attribution over-credit, and what does it miss entirely?

### Application Problems

1. Draw your funnel with real numbers and compute the overall conversion. State which stage you would fix and why, using revenue per unit of effort.
2. Write one CRO hypothesis in the standard form for a page you own, with a threshold and a date.
3. Audit a page of yours against the eight frictions and record which three cost you the most.

### Challenge Problem

You have 300 visitors a month and a 2% enquiry rate. You want to double customers within 60 days. Using the funnel arithmetic, show why page optimisation alone cannot achieve it at this volume, then design a plan that combines one funnel fix with one change that increases the top of the funnel, and state the risk that the two changes interact and make the result unreadable.
