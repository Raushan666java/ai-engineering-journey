# Chapter 6 — Content Engine and SEO

## Learning Objectives

After this chapter you will be able to:

- Classify any query into one of four search intents and predict what the searcher will do next
- Build a keyword list without a paid tool, using autocomplete and question mining
- Structure a topic cluster with one pillar page and supporting posts
- Apply the one-post-one-question rule so every piece has a single job
- Produce a 12-week content calendar with publishable titles and a repurposing plan
- Measure content honestly, including the months where nothing appears to happen

---

## Theory

### 6.1 Four intents, four different pages

Search intent is what the person wants to do next. Getting it wrong is the most
common reason good content ranks and never converts.

| intent | example query | searcher wants | the page that serves it |
|---|---|---|---|
| **informational** | "what is retrieval augmented generation" | to understand | a guide, no offer |
| **navigational** | "chroma docs" | a specific site | not for you |
| **commercial** | "best vector database for small teams" | comparison before deciding | a comparison with a recommendation |
| **transactional** | "hire fastapi developer india" | to contact someone | a service page with price and proof |

The trap: a technical writer produces excellent informational content and then
wonders why nobody hires them. Informational readers are not buyers yet. The
conversion path is informational → commercial → transactional, and it requires
pages at each stage. Most developer sites have only the first.

A practical ratio for a solo seller with limited time: **one informational post
for every three commercial or transactional pages**, because the commercial pages
are what actually produce enquiries and they are much faster to write.

### 6.2 Keyword research without a paid tool

Five free sources, in order of usefulness:

**1. Google autocomplete.** Type your problem phrase and record what completes.
It reflects real query volume, because it is generated from queries.

**2. People Also Ask.** The question boxes in results are literal questions with
demand behind them, and each one is a publishable section heading.

**3. Your own Search Console.** After thirty days, this shows the queries you
already appear for. It finds accidental wins, which are the cheapest content to
double down on.

**4. Community titles.** Sort a forum or subreddit by top posts of the year. Every
title that repeats is a validated question. This is often more useful than
keyword tools for niche technical audiences, because it captures the exact
phrasing buyers use.

**5. Competitor sitemaps.** A competitor's blog index is a list of topics that
already work for them. Do not copy; find what they missed.

What to record for each candidate: the query, its intent, whether you can answer
it better than what currently ranks, and whether the answer naturally leads to
your offer.

The last criterion filters hardest. A query you can rank for that has no path to
your offer is a hobby.

### 6.3 Topic clusters

A cluster is one pillar page covering a broad problem, plus supporting pages
covering each sub-problem, each linking back to the pillar.

```
Pillar:  "WhatsApp automation for gyms: the complete setup"
   |
   +-- "How to answer gym enquiries after closing time"
   +-- "WhatsApp Business API vs personal WhatsApp for a gym"
   +-- "How much does a gym management system cost in India"
   +-- "How to reduce missed appointments at a clinic"
```

The cluster works for three reasons: it signals topical depth to search engines,
it creates internal links that pass authority, and it gives you one coherent
thing to write about for three months instead of inventing a topic each week.

### 6.4 One post, one question

Every piece answers exactly one question, stated as its title. If a draft
answers three questions, split it into three.

Benefits: the title becomes obvious, the structure becomes the answer, the
internal links point at siblings rather than rambling, and the reader can decide
in two seconds whether to stay.

The test: **can you say what the reader will be able to do after reading, in one
sentence?** If not, the piece has no job.

### 6.5 Cadence and repurposing

For a working developer, one substantial post per week is realistic and
sufficient. Frequency matters less than consistency and depth. Nine good posts in
nine weeks beats twenty thin posts in one week followed by silence.

Repurposing is where the leverage is, because the research is already paid for:

| output | derived from | time |
|---|---|---|
| long post (1,500–2,500 words) | research + a real example | 4–6 hours |
| LinkedIn post (200 words) | the strongest paragraph | 10 minutes |
| thread (8 posts) | the section headings | 20 minutes |
| short video (3–5 min) | walk through the example | 30 minutes |
| email to list | the summary plus one link | 5 minutes |

One week of work produces five assets. This is the only way a solo seller
publishes consistently while also doing client work.

### 6.6 Measuring content without lying to yourself

| metric | what it tells you | what it does not |
|---|---|---|
| impressions | the title is being shown | whether anyone cares |
| click-through rate | the title and snippet work | whether the page delivers |
| engaged time | the page delivers | whether they buy |
| assisted conversions | content contributes | which piece *caused* the sale |
| direct enquiries | someone read and contacted | nothing, this is the real one |

The honest baseline: **SEO takes three to six months to produce meaningful
traffic**, and the first ninety days look like failure. Content is a bet on
compounding, and it should be run alongside a fast channel rather than instead of
one. A seller with no clients who spends month one on SEO has chosen the slowest
available path and will run out of money before it pays.

The correct sequencing: **fast channel for cash, content for the asset.** Four
hours a week on content while the other channels run.

### 6.7 Technical basics that are actually required

None of these are optional, and all are quick:

| element | rule |
|---|---|
| title tag | 50–60 characters, contains the query, no clickbait |
| meta description | 140–160 characters, states the answer, not a teaser |
| H1 | one per page, matches the title tag closely |
| internal links | every post links to the pillar and to one sibling |
| URL | short, lowercase, hyphens, no dates |
| page speed | under 2.5s largest contentful paint, check with PageSpeed Insights |
| mobile | assume the majority of readers are on a phone |
| schema | Article or FAQ markup where genuine |

Google's quality guidance, summarised as E-E-A-T (experience, expertise,
authoritativeness, trust), is worth reading once. For a technical author the
cheapest way to demonstrate experience is to include something only someone who
did the work could write: the error you hit, the number you measured, the version
that broke. Generic explanation is abundant; specific experience is not.

---

## Examples

### Example 1: Turning raw queries into a content plan

```python
"""Classify queries by intent and decide what to publish for each.

The rule applied here: informational queries get one post each, and every three
informational posts must be paired with one commercial page, because commercial
pages are what produce enquiries.
"""
import re
from dataclasses import dataclass

TRANSACTIONAL = re.compile(r"\b(hire|cost|price|pricing|agency|company|services|near me|consultant)\b")
COMMERCIAL = re.compile(r"\b(best|vs|versus|compare|alternatives|review|which)\b")
INFORMATIONAL = re.compile(r"^(what|how|why|when|does|can|is|should)\b")


def intent(q: str) -> str:
    q = q.lower().strip()
    if TRANSACTIONAL.search(q):
        return "transactional"
    if COMMERCIAL.search(q):
        return "commercial"
    if INFORMATIONAL.search(q):
        return "informational"
    return "unclear"


queries = [
    "whatsapp automation for gyms",
    "how to answer gym enquiries after closing",
    "best whatsapp api for small business india",
    "how much does a gym management system cost",
    "hire laravel developer patna",
    "whatsapp business api vs personal whatsapp",
    "gym software price india",
]

plan = []
for q in queries:
    i = intent(q)
    action = {
        "transactional": "service page with price and proof",
        "commercial": "comparison page with a recommendation",
        "informational": "post answering exactly this question",
        "unclear": "skip until intent is clear",
    }[i]
    plan.append((i, q, action))
    print(f"{i:<14} {q:<48} -> {action}")

counts = {}
for i, _, _ in plan:
    counts[i] = counts.get(i, 0) + 1
print("\nmix:", counts)
```

Expected output:

```
informational  whatsapp automation for gyms                       -> post answering exactly this question
informational  how to answer gym enquiries after closing          -> post answering exactly this question
commercial     best whatsapp api for small business india         -> comparison page with a recommendation
transactional  how much does a gym management system cost         -> service page with price and proof
transactional  hire laravel developer patna                       -> service page with price and proof
commercial     whatsapp business api vs personal whatsapp         -> comparison page with a recommendation
transactional  gym software price india                           -> service page with price and proof
```

Now the mix is visible: **two informational, two commercial, three transactional.**
The chapter's ratio asks for one informational per three commercial pages, so this
list is heavier on information than it should be, and the plan should convert the
two informational queries into one post and add two more commercial pages instead.

That is the entire value of classifying: it makes an imbalance visible before you
spend a month writing the wrong things.

### Example 2: A twelve-week calendar from one cluster

| week | publish | type | internal link to |
|---|---|---|---|
| 1 | Pillar: WhatsApp automation for gyms, complete setup | pillar | all below |
| 2 | How to answer gym enquiries after closing time | informational | pillar |
| 3 | WhatsApp Business API vs personal WhatsApp for a gym | commercial | pillar |
| 4 | Gym management software price in India (with real ranges) | transactional | pillar |
| 5 | Missed appointments at clinics: a 7-day fix | informational | pillar |
| 6 | Do you need a receptionist if you have a WhatsApp bot | commercial | pillar |
| 7 | Case: 25 enquiries a month recovered in six weeks | proof | pillar |
| 8 | What a gym bot cannot do | objection | pillar |
| 9 | Cost of missed enquiries calculator | tool | pillar |
| 10 | How to migrate from a generic chatbot that failed | commercial | pillar |
| 11 | WhatsApp automation for coaching centres | segment | pillar |
| 12 | Everything we learned from 10 gym installs | pillar update | all |

Two properties make this a plan rather than a wish list: every row has a single
question, and every row links to the pillar, which is what turns twelve
disconnected posts into one cluster that ranks.

---

## Summary

- Intent determines everything: informational readers are not buyers, and a site with only informational pages produces no enquiries.
- Free research sources (autocomplete, People Also Ask, Search Console, community titles, competitor sitemaps) are sufficient to start.
- A topic cluster of one pillar plus supporting posts signals depth and creates internal linking.
- Every post answers exactly one question, stated in its title.
- One deep post per week, repurposed into five assets, is the realistic cadence for a working developer.
- SEO takes three to six months, so it must run alongside a fast channel rather than instead of one.
- Technical basics (title, description, H1, internal links, speed, mobile) are quick and non-optional.

---

## Exercises

### Review Questions

1. Why does ranking for an informational query usually fail to produce clients?
2. What is the difference between a pillar page and a commercial page, in terms of what the reader does next?
3. Why is community post titles often better research than a keyword tool for technical niches?
4. State the one-post-one-question rule and the test that verifies a draft obeys it.
5. Why must content run alongside a fast channel rather than replace it?

### Application Problems

1. Collect twenty real queries from autocomplete and People Also Ask for your problem area. Classify each by intent and compute your mix.
2. Design one topic cluster: a pillar title, six supporting titles, and the internal links between them.
3. Write the twelve-week calendar for your cluster, marking which rows are informational, commercial, transactional and proof.

### Challenge Problem

You have four hours a week and a working job. Design a content plan that produces three commercial pages within six weeks without writing three long posts, by repurposing the same underlying research into a comparison, a pricing page and an objections page. Explain what each page must contain to be genuinely useful rather than thin.
