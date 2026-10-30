# Chapter 8 — Email, Lifecycle and CRM

## Learning Objectives

After this chapter you will be able to:

- Explain why email remains the only channel you own outright, and what that changes
- Design a lead magnet that attracts buyers rather than freebie collectors
- Set up authentication and sending practices that keep mail out of spam
- Write a four-email welcome sequence that produces a conversation, not a newsletter
- Define lifecycle stages and the specific offer appropriate to each
- Run a CRM pipeline with a next-action date on every record

---

## Theory

### 8.1 Why email, when everyone says email is dead

Email is the only channel where you own the relationship. A social following is
rented: the platform decides who sees your post. A search ranking is rented: an
algorithm update can remove it. A mailbox is yours, and a message arrives unless
the recipient blocks you.

Three properties matter for a seller:

| property | consequence |
|---|---|
| permissioned | the recipient asked to hear from you, so the message is wanted |
| durable | an address outlives a job change, unlike a company |
| measurable | you can see who opened, clicked and replied |

For contract work, email is not a marketing channel so much as a follow-up
machine. Most deals close on the third or fourth contact, and email is the only
channel where the fourth contact is welcome.

### 8.2 Lead magnets that attract buyers

A lead magnet is something valuable given away in exchange for an address. The
common mistake is making it broadly appealing, which attracts people who want
free things rather than people who buy.

| magnet type | attracts | buyer quality |
|---|---|---|
| "Ultimate guide to AI" | students and hobbyists | very low |
| checklist for a task they must do this week | practitioners | medium |
| **a working template or script** | people with the problem now | **high** |
| **a calculator that quantifies their loss** | decision makers | **high** |
| a recorded teardown of a real system | evaluators | high |

The rule: **the magnet should solve the first 10% of the problem you sell.** If
it solves 100%, there is nothing left to buy. If it solves 0%, it attracts nobody
relevant.

For a technical seller, a runnable template is the strongest magnet available,
because it demonstrates competence at the same time as it delivers value. A
repository that answers "can this person actually build?" is doing two jobs.

### 8.3 Consent, law and the difference between them

Three regimes are worth knowing, and none of this is legal advice:

| regime | jurisdiction | the practical constraint |
|---|---|---|
| **DPDP Act, 2023** | India | personal data needs consent or a listed legitimate use; people can ask what you hold and have it erased |
| **CAN-SPAM** | United States | commercial email needs a real physical address and a working opt-out |
| **GDPR** | European Union | consent must be explicit and recorded; legitimate interest is possible for B2B but must be documented |

Practical rules that satisfy all three for a solo seller:

1. Only email people who gave an address for this purpose, or whose business
   address is genuinely relevant to their role.
2. Every bulk email has a one-click unsubscribe that works immediately.
3. Keep a record of how each address was obtained.
4. Honour a deletion request within the statutory window, and say so.

B2B cold outreach occupies a grey area that varies by country. The safe pattern
is a short, relevant, individually written message with an immediate opt-out,
sent at low volume. The unsafe pattern is a scraped list plus a bulk sender.

### 8.4 Deliverability is technical, and it is not optional

Gmail and Outlook decide whether your mail is seen. Four things determine it:

| control | what it does | how to check |
|---|---|---|
| **SPF** | authorises your sending server | a DNS TXT record listing it |
| **DKIM** | cryptographically signs the message | a public key in DNS, signature verified |
| **DMARC** | tells receivers what to do when SPF/DKIM fail | a policy record, start with `p=none` |
| **reputation** | history of complaints and engagement | Google Postmaster Tools |

Three behaviours damage reputation faster than anything else:

- **sending to a purchased list**, which produces spam complaints immediately
- **sudden volume spikes**, which look like a compromised account
- **no unsubscribe link**, which produces complaints instead of opt-outs

Google's bulk-sender guidance asks for a spam complaint rate below **0.3%**, and
below 0.1% is a healthier target. Above that, mail starts landing in spam even
when the content is fine.

For a solo seller sending twenty emails a day, deliverability is mostly a matter
of not doing anything stupid: no bought lists, no attachments on a first email,
no image-only messages, no link shorteners, and a plain signature.

### 8.5 The welcome sequence

A welcome sequence is the highest-return email you will ever write, because it
runs automatically to everyone who raises their hand.

Four emails, sent over eight days:

| # | timing | job | subject example |
|---|---|---|---|
| 1 | immediately | deliver what was promised, in one click | "Here's the template" |
| 2 | day 2 | prove competence with something specific | "The bug that broke my first deploy" |
| 3 | day 4 | name the problem you solve, and its cost | "What 25 missed enquiries cost a month" |
| 4 | day 7 | make one small, easy ask | "Worth a 15-minute look?" |

Properties that make it work: each email has one job, each is under 200 words,
each ends with a single link, and none of them is a newsletter. The sequence is a
conversation with a purpose, and the purpose is stated in email 4 rather than
hinted at for six weeks.

### 8.6 Lifecycle stages and the right offer for each

| stage | definition | the offer that fits | wrong offer |
|---|---|---|---|
| **subscriber** | gave an address, no interaction | the promised asset | a sales call |
| **engaged** | opened or clicked twice | a specific resource or teardown | a discount |
| **lead** | replied, or asked a question | a scoped conversation | a full proposal |
| **opportunity** | a call happened | a written proposal with a price | more content |
| **customer** | paid once | delivery excellence and a referral ask | an upsell |
| **advocate** | referred someone | early access, a case study | nothing |

The most common lifecycle error is offering a proposal to a subscriber. It
converts at nearly zero and costs the relationship, because the recipient never
agreed to be sold to yet.

### 8.7 A CRM is a discipline, not software

A spreadsheet is a perfectly good CRM for a solo seller, provided it has three
columns that are never empty:

| column | rule |
|---|---|
| **stage** | one of the six above, no custom stages |
| **next action** | a specific verb, not "follow up" |
| **next action date** | a date in the past means overdue, and overdue is visible |

The value is not reporting. It is that no conversation dies from being forgotten,
which is the actual reason most freelance pipelines stall.

---

## Examples

### Example 1: The four-email sequence, written out

**Email 1 — immediately**

```
Subject: Here's the WhatsApp bot checklist

Hi {{name}},

The checklist is here: {{link}}

It takes about ten minutes and it tells you whether a bot would actually help
your gym, or whether the problem is somewhere else. Two of the ten checks are
about staffing, not software.

Reply if you get stuck on any of them.

Raushan
```

**Email 2 — day 2**

```
Subject: The bug that broke my first deploy

Hi {{name}},

I shipped a billing job that ran twice in one night and charged fourteen members
twice. The fix was an idempotency key, which is a fancy name for "check whether
you already did this".

I wrote it up here: {{link}}. It is the same mistake I see in almost every
automation that touches money.

Raushan
```

**Email 3 — day 4**

```
Subject: What 25 missed enquiries cost a month

Hi {{name}},

A 400-member gym loses roughly 25 enquiries a month to unanswered messages.
At a 30% close rate that is 7 extra members, or about 9,000 rupees of monthly
fees.

The reason it happens is almost never the staff. It is that the message arrives
at 9pm and nobody is at the desk.

If that matches your situation, the checklist's section 4 has the numbers you
would need.

Raushan
```

**Email 4 — day 7**

```
Subject: Worth a 15-minute look?

Hi {{name}},

If the numbers in the last email sounded familiar, I can show you what a setup
looks like for a single-location gym — about 15 minutes, no pitch deck.

If the timing is wrong, reply "later" and I will check back in three months.

Raushan
```

What makes this sequence work is that emails 1–3 are useful whether or not the
reader ever buys, and email 4 asks for something small and easy to refuse. That
combination produces replies rather than unsubscribes.

### Example 2: Finding the worst lifecycle drop

```python
"""Compute stage-to-stage conversion and find which transition loses the most
people relative to the next stage's potential.

The worst drop is not always the smallest percentage; it is the one where a
plausible improvement produces the most customers.
"""
stages = [
    ("subscriber", 1000),
    ("engaged", 380),
    ("lead", 42),
    ("opportunity", 11),
    ("customer", 4),
]

print(f"{'transition':<28}{'from':>6}{'to':>6}{'rate':>8}{'lost':>7}")
transitions = []
for (s1, n1), (s2, n2) in zip(stages, stages[1:]):
    rate = n2 / n1
    transitions.append((f"{s1} -> {s2}", n1, n2, rate, n1 - n2))
    print(f"{s1 + ' -> ' + s2:<28}{n1:>6}{n2:>6}{rate:>7.1%}{n1 - n2:>7}")

print("\nimpact of a 25% relative improvement at each transition:")
for name, n1, n2, rate, lost in transitions:
    improved = n2 * 1.25
    # propagate the gain downstream using the remaining observed rates
    idx = [t[0] for t in transitions].index(name)
    value = improved
    for _, a, b, r, _ in transitions[idx + 1:]:
        value *= r
    print(f"  {name:<28}{n2:>4} -> {improved:>5.1f}   customers {value:>5.2f}")
```

Expected output:

```
transition                    from    to    rate   lost
subscriber -> engaged         1000   380  38.0%    620
engaged -> lead                380    42  11.1%    338
lead -> opportunity             42    11  26.2%     31
opportunity -> customer         11     4  36.4%      7

impact of a 25% relative improvement at each transition:
  subscriber -> engaged        380 -> 475.0   customers  5.00
  engaged -> lead               42 ->  52.5   customers  5.00
  lead -> opportunity           11 ->  13.8   customers  5.00
  opportunity -> customer        4 ->   5.0   customers  5.00
```

The result is counter-intuitive and important: **every stage produces exactly the
same gain**, because a 25% relative lift anywhere multiplies the final number by
1.25. The stage with the largest absolute loss (620 people) and the one with the
smallest (7 people) are arithmetically identical.

So the funnel numbers cannot choose for you. The choice has to be made on cost
and confidence:

- `subscriber -> engaged` means better subject lines and content: cheap, slow,
  and uncertain, because you do not control the inbox.
- `opportunity -> customer` means better proposals and a faster response: cheap,
  fast, and much more certain, because you control the entire conversation.

That is why the advice in 9.2 is to fix the sales conversation first. It is not
because the drop is bigger. It is because it is the only stage where effort
reliably converts.

---

## Summary

- Email is the only channel you own; a following is rented and a ranking is rented.
- A lead magnet should solve the first 10% of the problem you sell, attracting buyers rather than collectors.
- Consent, unsubscribe and record-keeping are legal requirements, and the safe pattern is low-volume and individually written.
- SPF, DKIM and DMARC determine whether mail is seen; complaint rate above 0.3% damages reputation.
- A four-email welcome sequence delivers, proves competence, names the cost, and makes one small ask.
- Offer the right thing to each lifecycle stage; a proposal to a subscriber converts at nearly zero.
- A CRM's value is the next-action date, not the reporting.

---

## Exercises

### Review Questions

1. Why does a broadly appealing lead magnet produce worse buyers than a narrow one?
2. What does each of SPF, DKIM and DMARC actually verify?
3. Why is a proposal the wrong offer for someone who has only subscribed?
4. Which lifecycle transition deserves attention when two transitions lose very different numbers of people?
5. What three columns must never be empty in a CRM, and why?

### Application Problems

1. Design a lead magnet that solves the first 10% of your problem. State what it proves and what it deliberately withholds.
2. Write your four-email welcome sequence in full, under 200 words each, with a single link and a single job per email.
3. Build a lifecycle table with your real numbers and compute the worst transition by propagated impact, not by percentage.

### Challenge Problem

You have a list of 400 addresses collected over a year with no consistent consent record, and you want to email them. Write the plan: what you can safely send, what you must not, what you would do to re-permission the list, and what you would lose if half of them never re-consent. Justify each decision against the constraints in 8.3 without claiming legal certainty.
