# Salary Negotiation

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Conduct market research to determine fair compensation for your role and location |
| LO2 | Understand compensation structures including base salary, bonus, RSUs, and equity |
| LO3 | Evaluate and compare competing offers using total compensation analysis |
| LO4 | Apply negotiation tactics such as BATNA, anchoring, and bracketing effectively |
| LO5 | Negotiate benefits, relocation packages, and handle counteroffers professionally |
| LO6 | Navigate acceptance and decline etiquette while maintaining positive relationships |

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../assets/images/lessons/ai-engineering-placement/21-interview-preparation/11-salary-negotiation/handwritten-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/ai-engineering-placement/21-interview-preparation/11-salary-negotiation/handwritten-notes.png" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/ai-engineering-placement/21-interview-preparation/11-salary-negotiation/sticky-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/ai-engineering-placement/21-interview-preparation/11-salary-negotiation/sticky-notes.png" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/ai-engineering-placement/21-interview-preparation/11-salary-negotiation/visual-explanation.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/ai-engineering-placement/21-interview-preparation/11-salary-negotiation/visual-explanation.png" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 11.1 | Market Research | Levels.fyi, Glassdoor, Blind, LC compensator, cost-of-living calculators |
| 11.2 | Compensation Structures | Base salary, annual bonus, RSUs, stock options, sign-on, performance bonuses |
| 11.3 | Offer Evaluation | Total compensation calculation, multi-year vesting schedules, refinancing risk |
| 11.4 | Negotiation Tactics | BATNA, anchoring, bracketing, silence tactic, picking your walk-away number |
| 11.5 | Competing Offers | Leveraging multiple offers, timing, exploding offers, negotiation windows |
| 11.6 | Benefits & Relocation | Remote work stipends, relocation packages, insurance, 401k matching, wellness |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Market Research] --> B[Compensation Structures]
    B --> C[Offer Evaluation]
    C --> D[Negotiation Tactics]
    D --> E[Competing Offers]
    E --> F[Benefits & Relocation]
```

## 11.1 Market Research

Before you enter any negotiation, know the market. Companies pay different amounts for the same role based on location, company size, industry, and funding stage.

**Primary research tools**: Levels.fyi (best for tech compensation — base, bonus, RSUs broken out by level), Glassdoor (base salary ranges, company reviews), Blind (anonymous compensation threads, real-time data), LinkedIn Salary (self-reported ranges), H1B Database (actual visa salaries by company). Use all sources and average them for a reliable range.

**Cost of living adjustments**: A $180K salary in San Francisco is not the same as $180K in Austin. Use cost-of-living calculators (NerdWallet, Bankrate) to normalize offers across locations. For remote roles, ask if compensation is location-adjusted or standardized.

```python
import requests
from dataclasses import dataclass

@dataclass
class CompensationDataPoint:
    source: str
    base: float
    bonus: float
    rsu_yearly: float
    level: str

def estimate_market_range(role: str, yoe: int, location: str) -> dict:
    fake_data = {
        "Senior Backend Engineer": {
            4: {"low": 140000, "median": 175000, "high": 220000},
            6: {"low": 165000, "median": 200000, "high": 260000},
            8: {"low": 185000, "median": 230000, "high": 300000},
        },
        "ML Engineer": {
            4: {"low": 150000, "median": 190000, "high": 250000},
            6: {"low": 175000, "median": 215000, "high": 285000},
            8: {"low": 200000, "median": 250000, "high": 330000},
        },
    }
    data = fake_data.get(role, fake_data["Senior Backend Engineer"])
    years = min(yoe // 2 * 2, 8)
    if years < 4:
        years = 4
    range_data = data[years]

    loc_multiplier = {
        "San Francisco": 1.0,
        "New York": 0.95,
        "Seattle": 0.92,
        "Austin": 0.80,
        "Denver": 0.78,
        "Remote (US)": 0.85,
        "London": 0.70,
        "Bangalore": 0.35,
    }
    mult = loc_multiplier.get(location, 0.85)
    adjusted = {k: round(v * mult, -3) for k, v in range_data.items()}
    return {"role": role, "yoe": yoe, "location": location, **adjusted}

# Example
result = estimate_market_range("Senior Backend Engineer", 6, "Seattle")
print(f"{result['role']} ({result['yoe']} yrs, {result['location']})")
print(f"Base salary range: ${result['low']:,} - ${result['high']:,}")
print(f"Median: ${result['median']:,}")
```

**Company stage matters**: Early-stage startups (<50 employees) pay lower base but offer significant equity upside (4-year vest with 1-year cliff). Mid-stage ($10M-$100M funding) balance base and equity. Public companies (FAANG, Microsoft) have the highest total comp with liquid RSUs. Late-stage pre-IPO (Stripe, Databricks, OpenAI) offer the highest risk/reward — equity at $0.01/share could 10x at IPO.

---

## 11.2 Compensation Structures

Understanding how compensation is structured allows you to compare offers that look very different on the surface.

**Base salary**: Fixed annual cash paid bi-weekly or semi-monthly. This is your guaranteed income. Everything else is variable.

**Annual performance bonus**: Typically 5-25% of base for IC engineers, 15-40% for managers. Paid annually or semi-annually. Tied to individual and company performance. Some companies (Netflix) choose to pay higher base with no bonus instead.

**RSUs (Restricted Stock Units)**: Shares granted as part of compensation. Typical grant: $100K-$400K over 4 years. Standard vesting: 25% per year (1-year cliff, then monthly/quarterly). Once vested, shares are yours (subject to tax). For public companies, RSUs are liquid and can be sold immediately. For private companies, they're illiquid until IPO or acquisition.

**Stock options (ISO/NSO)**: Right to purchase shares at a fixed strike price. Common at startups. If the company's value grows, you profit from the difference. Options are worthless if the company fails. Strike price is typically set at the 409A valuation.

```python
def calculate_total_comp(base: float, bonus_pct: float, rsu_grant: float,
                        vest_years: int = 4, sign_on: float = 0) -> dict:
    yearly_bonus = base * bonus_pct
    yearly_rsu = rsu_grant / vest_years

    first_year = base + yearly_bonus + yearly_rsu + sign_on
    ongoing = base + yearly_bonus + yearly_rsu

    return {
        "First Year TC": round(first_year),
        "Ongoing Yearly TC": round(ongoing),
        "Monthly Net (est)": round((base + yearly_bonus) / 12 * 0.7),
        "Breakdown": {
            "Base": base,
            "Bonus": yearly_bonus,
            "RSU/year": yearly_rsu,
            "Sign-on": sign_on,
        }
    }

# Compare two offers
offer_a = calculate_total_comp(base=180000, bonus_pct=0.10, rsu_grant=200000, sign_on=30000)
offer_b = calculate_total_comp(base=210000, bonus_pct=0.05, rsu_grant=80000, sign_on=10000)

print("Offer A (Startup):", offer_a)
print("\nOffer B (Public Co):", offer_b)
```

**Sign-on bonus**: One-time cash payment to accept the offer. Typical range: $10K-$50K for IC roles, $50K-$200K+ for senior/staff. Often repayable if you leave within 1 year (prorated clawback). Negotiate for this even if they say "no budget" — signing bonuses are often separate from comp bands.

**Refresh grants**: Annual RSU grants that start vesting after your initial grant. Good refreshers mean your comp grows over time. Ask about refresh policies: typical amounts, frequency (annual vs bi-annual), and performance-based vs guaranteed.

---

## 11.3 Offer Evaluation

Comparing offers requires looking beyond the headline number. A $220K offer at one company may be worse than a $190K offer at another.

**Total compensation formula**:
```
Year 1 TC = Base + Sign-on Bonus + Year 1 Bonus (prorated if applicable) + Year 1 RSUs (vested portion)
Year 2 TC = Base + Bonus + Year 2 RSUs (vested portion)
```

Always model out 4 years to account for RSU vesting schedules. A front-loaded offer (large sign-on, big initial RSU cliff) vs a back-loaded one (big refreshers later) changes your effective comp.

```python
def model_comp_timeline(base: float, bonus_pct: float, rsu_grant: float,
                        refresh_grant: float, sign_on: float,
                        years: int = 4) -> list[dict]:
    timeline = []
    cumulative = 0
    for y in range(1, years + 1):
        yr_bonus = base * bonus_pct * (1.0 if y > 1 else 0.5)
        yr_rsu = rsu_grant / 4
        if y >= 2:
            yr_rsu += (y - 1) * (refresh_grant / 4)
        yr_sign = sign_on if y == 1 else 0
        yr_total = base + yr_bonus + yr_rsu + yr_sign
        cumulative += yr_total
        timeline.append({
            "Year": y,
            "Base": base,
            "Bonus": round(yr_bonus),
            "RSU": round(yr_rsu),
            "Sign-on": yr_sign,
            "Total": round(yr_total),
            "Cumulative": round(cumulative),
        })
        base *= 1.03  # assume 3% annual base increase
    return timeline

timeline = model_comp_timeline(
    base=190000, bonus_pct=0.15, rsu_grant=300000,
    refresh_grant=60000, sign_on=25000
)
for entry in timeline:
    print(f"Year {entry['Year']}: ${entry['Total']:,} (cum: ${entry['Cumulative']:,})")
```

**Refinancing risk**: If you leave before your RSUs fully cliff, you forfeit unvested shares. This is a real cost. A $400K grant over 4 years means you lose $100K/year of unvested compensation if you leave early. Model what happens if you stay 1 year, 2 years, 3 years.

**Non-cash considerations**: Title progression (Senior → Staff → Principal), mentorship availability, learning opportunities, brand value for future roles, WLB (40 hours vs 60 hours fully loaded), commute time, and career trajectory. A 20% lower TC at a company that will accelerate your career is often the better bet.

---

## 11.4 Negotiation Tactics

Negotiation is expected. Never accept the first offer — companies almost always have room. The typical first offer is at the 40th-50th percentile of their budget; with negotiation you can reach the 60th-80th percentile.

**BATNA (Best Alternative to a Negotiated Agreement)**: Your walk-away option. If you have another offer, that's your BATNA. If you don't, your BATNA is "continue interviewing" or "stay at current job." A strong BATNA gives you leverage. Always know your BATNA before entering a negotiation.

**Anchoring**: The first number mentioned sets the range. If they say "$150K-$170K," most negotiations will end somewhere in that range. If you say "I'm looking for $190K+," you reset the anchor upward. Provide a range where your minimum is their maximum — "Based on my research, I'm targeting roles in the $190K-$210K range."

**Bracketing**: If they offer $160K, ask for $185K-$195K (your target of $177K is in the middle). The psychology: by bracketing high, you make your actual target seem reasonable.

```python
def bracketing_strategy(offer: float, target: float) -> dict:
    """
    Given an offer and target, compute a bracketed ask.
    Strategy: ask above your target so that when they counter,
    you settle at or above target.
    """
    ask = target + (target - offer) * 0.5
    ask = max(ask, target)
    ask = min(ask, target * 1.15)
    max_ask = ask * 1.08
    min_acceptable = target * 0.97
    likely_settlement = (ask + offer) / 2

    return {
        "offer": offer,
        "target": target,
        "initial_ask": round(ask),
        "max_ask": round(max_ask),
        "min_acceptable": round(min_acceptable),
        "likely_settlement": round(likely_settlement),
        "delta": round(likely_settlement - offer),
    }

negotiation = bracketing_strategy(offer=160000, target=177000)
print(f"Offer: ${negotiation['offer']:,}")
print(f"Target: ${negotiation['target']:,}")
print(f"Ask range: ${negotiation['initial_ask']:,} - ${negotiation['max_ask']:,}")
print(f"Likely settlement: ${negotiation['likely_settlement']:,}")
print(f"Gain vs initial offer: +${negotiation['delta']:,}/yr")
```

**The silence tactic**: After stating your number, stop talking. Don't fill the silence with justification. The next person to speak loses. Recruiters are trained to wait you out. Count to 10 in your head. If they still don't respond, say "I'd love to make this work. Is there flexibility in the budget?"

**Pacing**: Negotiate all offers simultaneously. Don't accept or reject before you have all offers in hand. Most companies will give you 1-2 weeks to decide. If you need more time, ask: "I have a few more interviews this week. Can we talk on [date]?" Most will accommodate.

**The email template approach**:
```
Subject: Offer Follow-up — [Role], [Company]

Hi [Recruiter],

Thank you for the offer. I'm excited about the role and team.

Based on my market research (Levels.fyi, competing offers) and my experience in [area], I was hoping for a total package closer to $[target TC].

Could we explore adjustments to the base salary, sign-on bonus, or equity to bridge the gap?

I'm very interested in joining [Company] and believe we can find a number that works for both of us.

Best,
[Name]
```

---

## 11.5 Competing Offers

Multiple offers give you maximum leverage. Even the perception of a competing offer strengthens your position.

**Using competing offers**: If Company A offers $180K and Company B offers $200K, tell Company A: "I have an offer that's $20K higher. I'd prefer to join A because of [role/team/culture]. Can you match or improve your offer?" Don't lie — if caught, you'll lose both offers.

**Timing strategy**: Schedule interviews at companies with similar timelines. Ask recruiters for their decision timeline upfront. Try to have all offers land within the same 1-2 week window.

```python
def evaluate_competing_offers(offers: list[dict]) -> dict:
    import statistics
    tc_values = []
    for o in offers:
        tc = o["base"]
        tc += o["base"] * o.get("bonus_pct", 0)
        tc += o.get("rsu_grant", 0) / 4
        tc += o.get("sign_on", 0) / 4
        o["tc"] = round(tc)
        tc_values.append(tc)

    median_tc = statistics.median(tc_values)
    max_tc = max(tc_values)

    for o in offers:
        o["vs_median"] = round(o["tc"] - median_tc)
        o["vs_max"] = round(o["tc"] - max_tc)

    return {
        "offers": sorted(offers, key=lambda x: x["tc"], reverse=True),
        "median_tc": round(median_tc),
        "max_tc": round(max_tc),
        "recommendation": (
            "Take the highest TC offer if all else equal."
            if offers[0]["tc"] == max_tc
            else "Consider negotiating lower offers up to the max."
        ),
    }

competing = evaluate_competing_offers([
    {"name": "Company A", "base": 180000, "bonus_pct": 0.10, "rsu_grant": 200000, "sign_on": 25000},
    {"name": "Company B", "base": 200000, "bonus_pct": 0.15, "rsu_grant": 150000, "sign_on": 10000},
    {"name": "Company C", "base": 165000, "bonus_pct": 0.08, "rsu_grant": 300000, "sign_on": 50000},
])
for o in competing["offers"]:
    print(f"{o['name']}: ${o['tc']:,} (vs median: ${o['vs_median']:+}, vs max: ${o['vs_max']:+})")
```

**Exploding offers**: Some companies pressure you with short deadlines (48-72 hours). Don't panic. Say: "I need the full week to make this important decision. Can we extend the deadline?" If they refuse, consider whether you want to work at a company that applies high-pressure tactics.

**Negotiation ethics**: Always be professional and honest. Don't share exact numbers from Company A with Company B unless you have permission. Say "I have a competitive offer" rather than "Company A is offering me $X." Don't negotiate in bad faith — if you already know you won't accept, decline graciously.

---

## 11.6 Benefits & Relocation

Benefits often get overlooked in the excitement of a base salary number, but they can add $20K-$50K+/year in value.

**Health insurance**: Premiums, deductibles, out-of-pocket max, and coverage quality vary significantly. A high-deductible plan at one company may cost you $5K/year more than a PPO at another. Ask for the benefits guide PDF before accepting.

**401(k) matching**: The most valuable benefit after salary. Typical match: 50% of contributions up to 6% of salary (max $9K/year at $150K). Best match: dollar-for-dollar up to 6% ($9K free money). Worst: no match at all.

**Remote work stipend**: $500-$5,000/year for home office equipment, internet, co-working space. If fully remote, this is a real cost. Negotiate for it.

**Relocation package**: For in-office roles, typical packages: $5K-$15K (moving expenses only), $15K-$40K+ (full relocation including moving, temporary housing, realtor fees, and a lump sum). Always ask for a relocation lump sum (taxed) in addition to direct moving expenses.

```python
def calculate_benefits_value(base: float, benefits: dict) -> dict:
    total_value = 0
    breakdown = {}

    # 401k match
    if benefits.get("match_pct") and benefits.get("match_limit"):
        max_match = min(base * benefits["match_limit"] / 100, 33000)
        match = max_match * benefits["match_pct"] / 100
        total_value += match
        breakdown["401k Match"] = round(match)

    # Health insurance
    company_premium = benefits.get("health_premium_covered", 0)
    total_value += company_premium
    breakdown["Health Premium Covered"] = company_premium

    # Remote stipend
    stipend = benefits.get("remote_stipend", 0)
    total_value += stipend
    breakdown["Remote Stipend"] = stipend

    # Education budget
    edu = benefits.get("education_budget", 0)
    total_value += edu
    breakdown["Education Budget"] = edu

    # PTO value (assuming 260 working days)
    pto_days = benefits.get("pto_days", 15)
    daily_rate = base / 260
    pto_value = pto_days * daily_rate
    breakdown["PTO Value"] = round(pto_value)

    total_value += pto_value
    breakdown["Total Benefits Value"] = round(total_value)
    breakdown["Adjusted TC"] = round(base + total_value)
    return breakdown

benefits = {
    "match_pct": 50, "match_limit": 6,
    "health_premium_covered": 7200,
    "remote_stipend": 3000,
    "education_budget": 5000,
    "pto_days": 20,
}
result = calculate_benefits_value(180000, benefits)
for k, v in result.items():
    print(f"{k}: ${v:,}")
```

**Other benefits to ask about**: Stock purchase plans (ESPP) at 15% discount (typical max 10-15% of salary), parental leave (12-20 weeks vs minimal), sabbatical (every 4-5 years), professional development budget ($2K-$10K/year), gym/wellness stipend, commuter benefits, meal subsidies, and cell phone/internet reimbursement.

**Counteroffers from current employer**: If you receive a counteroffer, evaluate it objectively. 70% of people who accept counteroffers leave within 12 months anyway. The issues that made you look (compensation, growth, culture) often remain unaddressed. If you accept, the relationship changes — you're now "the person who threatened to leave." Take the counteroffer only if you genuinely want to stay and the root issues are fixed.

---

## Summary

- Market research: combine Levels.fyi, Glassdoor, Blind, and H1B data for reliable ranges
- Compensation: base + bonus + RSU refresh + sign-on = total compensation
- Model 4-year projections to account for vesting schedules and refreshers
- Always negotiate: first offer is never the best offer
- BATNA is your strongest leverage — build competing offers
- Use bracketing to anchor negotiations in your favor
- Benefits add $20K-$50K+/year in value, don't ignore them
- Relocation packages are highly negotiable (ask for lump sum + moving expenses)
- Counteroffers rarely work out long-term; be honest with yourself about why you're leaving
- Always be professional and gracious — the tech world is small

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| First offer received | Thank them, say you need time to evaluate | Accepting immediately or reacting with disappointment |
| Asked for salary expectations | Provide a range where your minimum is their max | Giving a single number first |
| Comparing two offers | Model 4-year TC with vesting projections | Comparing only base salary |
| No competing offers | Research market data to build your BATNA | Negotiating without data |
| Exploding offer deadline | Ask for extension, evaluate your tradeoffs | Panic-accepting under pressure |
| Relocation needed | Negotiate lump sum + direct moving expenses | Accepting the first relocation offer |
| Counteroffer from current employer | Objectively evaluate root causes | Accepting just for the money |
| Finalizing negotiation | Get everything in writing | Verbal agreements without offer letter updates |

## Interview Q&A

<details class="tp-qa-card" data-qid="ip-s11-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: How do I determine my market value before negotiating?
  </summary>
  <div class="tp-qa-answer">
    <p>Use these sources triangulated:</p>
    <ul>
      <li><strong>Levels.fyi</strong>: Best for tech. Breaks down base, bonus, RSUs by company and level. Filter by location and years of experience.</li>
      <li><strong>Glassdoor</strong>: Good for base salary ranges. Less reliable for total compensation.</li>
      <li><strong>Blind</strong>: Real-time anonymous compensation threads. Search your target company + level + "TC."</li>
      <li><strong>H1B Salary Database</strong>: Actual visa salaries filed by companies (h1bdata.info). These are offered salaries, not negotiated ones, but they're factual.</li>
      <li><strong>Rora / Levels.fyi negotiator</strong>: Paid services that provide market reports based on thousands of data points.</li>
    </ul>
    <p>Once you have 10-15 data points, your market range is the 25th-75th percentile. Your negotiation target is the 60th-75th percentile for your level and location.</p>
    <pre><code># Market value calculator
def market_value(data_points: list[float]) -> dict:
    import statistics
    data = sorted(data_points)
    n = len(data)
    return {
        "p25": data[n // 4],
        "p50": statistics.median(data),
        "p75": data[3 * n // 4],
        "mean": round(statistics.mean(data)),
        "range": f"${data[n // 4]:,} - ${data[3 * n // 4]:,}",
    }

sample = [165000, 170000, 180000, 185000, 190000, 195000, 210000, 220000]
print(market_value(sample))</code></pre>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s11-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: What's the difference between RSUs and stock options?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>RSUs (Restricted Stock Units)</strong>:</p>
    <ul>
      <li>Granted as actual shares. Once vested, they're yours (you own the shares).</li>
      <li>At public companies, you can sell immediately for cash.</li>
      <li>At private companies, they remain illiquid until IPO/acquisition.</li>
      <li>Taxed as ordinary income at vesting (based on FMV of shares).</li>
      <li>Example: 1,000 RSUs vesting over 4 years at $100/share = $25K/year additional comp.</li>
    </ul>
    <p><strong>Stock Options (ISOs/NSOs)</strong>:</p>
    <ul>
      <li>Right to buy shares at a fixed strike price (usually 409A valuation).</li>
      <li>You profit only if the company's value increases above the strike price.</li>
      <li>Risk: if company fails, options are worthless.</li>
      <li>Upside: if company 10x, options can be worth 10x the grant value.</li>
      <li>ISOs have favorable tax treatment (long-term capital gains) vs NSOs (ordinary income).</li>
    </ul>
    <p><strong>Key comparison</strong>: RSUs have guaranteed value (if the company doesn't go bankrupt), options have leveraged upside with higher risk. For public companies, RSUs are clearly better. For pre-IPO companies, options can be life-changing if you believe in the company.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s11-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: How do I respond to "What are your salary expectations?"
  </summary>
  <div class="tp-qa-answer">
    <p>This is the most feared question in negotiations. The key: <strong>don't give a number first</strong>. If possible, deflect:</p>
    <p>"I'm focusing on finding the right fit. I'm sure you'll extend a fair offer based on the market and my experience."</p>
    <p>If pressed (and most recruiters will press), give a range where your minimum is their upper bound:</p>
    <p>"For roles at this level in [location], I see total compensation ranging from $190K to $220K. I'm targeting the higher end of that range given my experience with [specific skill]."</p>
    <p><strong>Why this works</strong>: You're anchoring high but giving a range (which seems flexible). Their offer will likely land at or above your minimum. If their budget is $170K max and you say $190K minimum, you know immediately it's not a fit — saving everyone time.</p>
    <p><strong>Never do this</strong>: "I'm looking for $180K." You just set your ceiling. They'll offer $170K and you have nowhere to negotiate up.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s11-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: What is BATNA and how do I use it in salary negotiation?
  </summary>
  <div class="tp-qa-answer">
    <p>BATNA = Best Alternative to a Negotiated Agreement. It's your walk-away option if negotiations fail.</p>
    <p><strong>Examples of BATNAs</strong>:</p>
    <ul>
      <li>Another offer: "Company B offered $200K. If Company A can't match that, I'll take B's offer."</li>
      <li>Stay at current job: "My current TC is $175K. I'd only move for meaningful progression."</li>
      <li>Keep interviewing: "I have 3 more final rounds this week. I'm confident one will yield a strong offer."</li>
    </ul>
    <p><strong>How to use BATNA</strong>:</p>
    <ul>
      <li>Know your BATNA before entering any negotiation. Write it down.</li>
      <li>Your reservation price (walk-away number) = BATNA value + a premium for switching costs.</li>
      <li>The stronger your BATNA, the more aggressive you can negotiate.</li>
      <li>If you have NO BATNA (no other offers, unhappy current job), your leverage is low. Still negotiate — most companies have room — but be polite and reasonable.</li>
    </ul>
    <p><strong>Improving your BATNA</strong>: Always be interviewing. Even if you love your current offer, continuing to interview creates leverage. You can say "I'm in late stages with another company" without lying.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s11-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: How do I negotiate a sign-on bonus?
  </summary>
  <div class="tp-qa-answer">
    <p>Sign-on bonuses are often easier to negotiate than base salary because they come from a different budget (one-time vs recurring).</p>
    <p><strong>When to ask</strong>: After you've settled on base salary and equity. If they say "we can't increase base further," that's the moment to say "Could you increase the sign-on bonus instead?"</p>
    <p><strong>Reasons that work</strong>:</p>
    <ul>
      <li>Compensation gap: "I'd be leaving a $15K unvested RSU balance at my current company."</li>
      <li>Relocation costs: "Moving to [city] has upfront costs for deposits, travel, temporary housing."</li>
      <li>Dual income timing: "My partner needs time to find a job; a sign-on would help bridge that gap."</li>
    </ul>
    <p><strong>Typical amounts</strong>: $10K-$50K for IC roles, $50K-$100K+ for senior/staff. Some companies (Netflix, Meta) routinely give $100K+ sign-on bonuses for senior roles.</p>
    <p><strong>Clawback clause</strong>: Most sign-on bonuses have a 12-month clawback. If you leave before 12 months, you repay the prorated amount. Factor this into your decision if you're unsure about staying long-term.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s11-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: How should I handle an exploding offer?
  </summary>
  <div class="tp-qa-answer">
    <p>An exploding offer gives you a very short decision window (24-72 hours). Here's how to handle it:</p>
    <p><strong>Step 1 — Don't panic</strong>. The company is testing your urgency. Most recruiters can extend deadlines if asked professionally.</p>
    <p><strong>Step 2 — Ask for more time</strong>: "Thank you for the offer. This is an important decision and I want to give it the consideration it deserves. Could we extend the deadline to [date — typically 5-7 days from today]?"</p>
    <p><strong>Step 3 — If they say no</strong>, you have a decision to make. Is the role good enough on its own terms to accept now? If yes, accept. If no, it was probably a bad fit anyway.</p>
    <p><strong>Step 4 — Expedite other processes</strong>: Contact other companies: "I have an offer with a short deadline. Can we expedite my interview or decision timeline?" Most will accommodate if they're interested.</p>
    <p><strong>A note on culture</strong>: Exploding offers are a red flag for company culture. Companies that respect candidates give reasonable decision timelines (1-2 weeks). If they use pressure tactics during recruitment, they'll use them as an employer too.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s11-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: How do I negotiate relocation benefits?
  </summary>
  <div class="tp-qa-answer">
    <p>Relocation packages are highly negotiable because they're seen as one-time costs, not recurring comp.</p>
    <p><strong>Typical relocation package components</strong>:</p>
    <ul>
      <li>Lump sum cash payment ($5K-$15K, taxed)</li>
      <li>Direct moving expenses (movers, shipping, storage)</li>
      <li>Temporary housing (2-4 weeks in corporate housing or AirBnb)</li>
      <li>Travel expenses (flights, rental car) for you and family</li>
      <li>Realtor fees / home-buying assistance (for homeowners)</li>
      <li>Immigration support (visa fees, lawyers) for international moves</li>
    </ul>
    <p><strong>Negotiation strategy</strong>:</p>
    <ul>
      <li>Get a detailed relocation policy in writing before accepting.</li>
      <li>Ask for a lump sum instead of direct reimbursement — you control the budget.</li>
      <li>If they cap relocation at $10K, ask for $15K. The worst they say is no.</li>
      <li>If you're moving from a low-COL area to high-COL, mention that explicitly.</li>
      <li>Some companies offer "gross-up" (pay the taxes on your relocation) — ask for this.</li>
    </ul>
    <p><strong>Repayment clause</strong>: Relocation often has a 12-24 month repayment period. If you leave before that, you repay prorated amount. Negotiate for a shorter repayment window or full forgiveness.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s11-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: Should I accept a counteroffer from my current employer?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Statistics show</strong>: 70-80% of people who accept counteroffers leave within 12 months. Here's why:</p>
    <ul>
      <li><strong>Root causes remain</strong>: If you're leaving because of bad management, lack of growth, or toxic culture, a raise doesn't fix that.</li>
      <li><strong>Relationship changes</strong>: Your manager now knows you're a flight risk. You may be excluded from critical projects, promotions, or strategy discussions.</li>
      <li><strong>Trust erosion</strong>: The company now knows you were interviewing. Some managers take this personally.</li>
      <li><strong>Timing trap</strong>: They may counter with a promotion or raise they could have given you at review time — meaning they were underpaying you willingly.</li>
    </ul>
    <p><strong>When a counteroffer makes sense</strong>:</p>
    <ul>
      <li>Your only reason for leaving was compensation (and the counter fixes it).</li>
      <li>You love your team, manager, and work — it was purely about money.</li>
      <li>The counter includes a genuine promotion or role change (not just money).</li>
      <li>The new offer is from a company you're not very excited about (it was a leverage play).</li>
    </ul>
    <p><strong>How to handle</strong>: Say "I appreciate the offer, but I've already made my decision. Thank you for understanding." If you truly want to stay, be honest: "I wasn't looking, but this offer made me evaluate my situation. Here's what would make me stay — matching comp AND addressing [growth/culture/role]."</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s11-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: What's the best way to negotiate equity at a startup?
  </summary>
  <div class="tp-qa-answer">
    <p>Startup equity is complex because it's illiquid and speculative. Here's how to approach it:</p>
    <p><strong>Understand the grant</strong>: Ask for: total number of options/RSUs, strike price (for options), vesting schedule (standard: 4 years with 1-year cliff), exercise window (post-termination: standard is 90 days, best is 10 years), and refresh policy (annual grants?).</p>
    <p><strong>Ownership percentage</strong>: % of company matters more than number of options. Ask: "What percentage of the fully diluted company does this grant represent?" Typical IC grants: 0.05-0.15% for early engineers at Series A, 0.01-0.05% at Series B.</p>
    <p><strong>Valuation context</strong>: Ask about the 409A valuation (current FMV), last round valuation, and preferred vs common stock. Preferred has liquidation preference; common gets nothing if the company sells for less than the preference.</p>
    <p><strong>Negotiation angles</strong>:</p>
    <ul>
      <li>"Could we increase the equity grant by 25-50%?" (easier than base at startups)</li>
      <li>"Can we make the exercise window longer than 90 days?" (critical if you leave before IPO)</li>
      <li>"Is there an accelerated vesting clause for acquisition?" (single trigger = full vest on acquisition)</li>
    </ul>
    <p><strong>Rule of thumb</strong>: Value startup equity at 0-30% of face value depending on stage. Series A: assume 10-20% of nominal value. Series B: 20-30%. Pre-IPO: 50-70%. Public company RSUs: 100%.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s11-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: How do I negotiate when I have no competing offers?
  </summary>
  <div class="tp-qa-answer">
    <p>Negotiating without competing offers is harder but still possible. Your leverage comes from market data and your willingness to walk away.</p>
    <p><strong>Strategy 1 — Market-based negotiation</strong>: "For a Senior Backend Engineer in Seattle with 6 years of experience, Levels.fyi shows the median total compensation is $210K. Your offer of $180K is below market. Can we work towards $200K?"</p>
    <p><strong>Strategy 2 — Value-based negotiation</strong>: "I bring specific experience with [high-value skill] that directly impacts [business outcome]. Based on the impact I'll deliver, I believe $195K is appropriate."</p>
    <p><strong>Strategy 3 — Timing-based</strong>: "I have final rounds with [2 companies] next week. I'm very interested in your role, but I'd like to complete my process before making a decision. Could we discuss adjustments then?"</p>
    <p><strong>Strategy 4 — What can be improved?</strong>: "If base salary has limited flexibility, could we increase the sign-on bonus, equity, or remote stipend instead?"</p>
    <p>Without competing offers, be polite and collaborative. You want them to WANT to give you more, not feel forced. Say "help me understand how we can bridge this gap" rather than "increase this or I walk."</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s11-q11">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q11: How do I evaluate total compensation for a remote role?
  </summary>
  <div class="tp-qa-answer">
    <p>Remote compensation varies widely. Some companies pay location-adjusted, some pay the same regardless of location.</p>
    <p><strong>Location-adjusted companies</strong> (Stripe, GitLab, many startups): They set a "San Francisco baseline" and apply a discount based on your location. Example: SF base $200K, Denver gets 85% = $170K.</p>
    <p><strong>Location-agnostic companies</strong> (Automattic, Basecamp, some remote-first): Everyone gets the same regardless of where they live. This is great if you're in a low-COL area, less great if you're in SF.</p>
    <p><strong>Hybrid approach</strong>: Some companies pay different bands (US Tier 1, US Tier 2, International) rather than city-specific adjustments.</p>
    <p><strong>What to factor for remote</strong>:</p>
    <ul>
      <li>Saved commute costs ($2K-$5K/year)</li>
      <li>Saved food/coffee costs ($1K-$3K/year)</li>
      <li>Home office expenses ($1K-$3K/year)</li>
      <li>Utilities/internet increase ($500-$1K/year)</li>
      <li>Time saved commuting (10-15 hours/week = huge quality of life value)</li>
    </ul>
    <p><strong>Ask about</strong>: Remote work stipend, home office budget, co-working space allowance, and whether they provide equipment (laptop, monitor, chair, desk). These add $2K-$10K in effective value.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s11-q12">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q12: What's the etiquette for declining an offer?
  </summary>
  <div class="tp-qa-answer">
    <p>Decline offers professionally — the tech world is small and you may cross paths again.</p>
    <p><strong>Timing</strong>: Decline as soon as you know you won't accept. Don't string them along while you wait for another offer. It burns bridges.</p>
    <p><strong>Template</strong>:</p>
    <pre><code>Subject: Offer Decision — [Role], [Company]

Hi [Recruiter],

Thank you so much for the offer and your time throughout this process. After careful consideration, I've decided to accept another opportunity that better aligns with my current career goals.

I greatly enjoyed meeting the team and learning about [Company]'s mission. I hope our paths cross again in the future.

Best regards,

[Your Name]</code></pre>
    <p><strong>Do NOT</strong>:</p>
    <ul>
      <li>Ghost them after accepting another offer</li>
      <li>Negotiate in bad faith (accepting then reneging)</li>
      <li>Share exact details of the competing offer's terms</li>
      <li>Burn bridges with negative feedback unless they ask</li>
    </ul>
    <p><strong>If you've already accepted and get a better offer</strong>: This is called "reneging." It damages your reputation and the recruiter's standing. Avoid if at all possible. If you must, call the recruiter immediately, apologize, and be honest. Expect to be banned from that company for 6-12 months.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s11-q13">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q13: How do I negotiate a higher level/band, not just more money?
  </summary>
  <div class="tp-qa-answer">
    <p>Sometimes the most valuable negotiation is about level, not just compensation. An L5 offer at $200K is worth less than an L6 offer at $185K because future comp growth is higher at L6.</p>
    <p><strong>Why level matters</strong>:</p>
    <ul>
      <li>Higher level = higher comp bands for your entire tenure</li>
      <li>Higher level = larger refresher grants (compounded over years)</li>
      <li>Higher level = better title for future roles</li>
      <li>Higher level = different scope of work (more impact, more responsibility)</li>
    </ul>
    <p><strong>How to negotiate level</strong>:</p>
    <ul>
      <li>"Based on my experience leading [project] and my YOE, I believe I'm performing at the Senior level. Could we review the leveling for this role?"</li>
      <li>Provide evidence: scope, impact, leadership examples, years of experience</li>
      <li>If they can't change level, ask for "band adjustment" (top of current level's band)</li>
      <li>Some companies have "title flexibility" — adjust title without changing level</li>
    </ul>
    <p><strong>When to prioritize level over money</strong>: Early in your career (IC3→IC4), when switching to a new domain, or when the level progression is well-defined (FAANG-level ladders). At startups, titles matter less because there's less standardization.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s11-q14">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q14: How do I negotiate benefits that are "standard" and non-negotiable?
  </summary>
  <div class="tp-qa-answer">
    <p>Many companies claim benefits are "standard and non-negotiable," but there's often flexibility if you ask the right way.</p>
    <p><strong>Health insurance</strong>: Usually truly standard — the company offers the same plans to everyone. You can't negotiate this. But ask about: dependent coverage costs, HSA contributions, and if there's a wellness stipend instead.</p>
    <p><strong>PTO</strong>: Some companies have fixed PTO banks and won't budge. Others have "discretionary PTO" (not always better — people take less). Ask: "Can I buy additional PTO days through salary sacrifice?" — some companies offer this.</p>
    <p><strong>Remote flexibility</strong>: Even if the role is "in-office," you can negotiate: "Could I work remotely 2 days/week?" or "Could I start remote and move in 3 months?"</p>
    <p><strong>Professional development</strong>: The stated budget may be $2K. Ask for $5K-$10K with a justification: "I'd like to attend [conference] and take [course], which total $5K. Could we increase the PD budget?"</p>
    <p><strong>Creative alternatives</strong>: If they truly can't increase the benefit, negotiate for something else: extra equity, a one-time equipment stipend, guaranteed first-year performance bonus, or deferred start date (paid sabbatical before joining).</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ip-s11-q15">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q15: What's the best way to handle email negotiations?
  </summary>
  <div class="tp-qa-answer">
    <p>Email is the primary medium for salary negotiation. Treat it with the same care as a professional business letter.</p>
    <p><strong>Email negotiation rules</strong>:</p>
    <ol>
      <li><strong>Be concise</strong>: 3-4 paragraphs max. Recruiters read dozens of emails daily.</li>
      <li><strong>Be appreciative</strong>: Always start by thanking them for the offer and expressing enthusiasm.</li>
      <li><strong>Use data</strong>: "Based on my market research and experience..." not "I want more money."</li>
      <li><strong>Be specific</strong>: State exactly what you're asking for (base, bonus, equity, sign-on).</li>
      <li><strong>One ask per email</strong>: Negotiate one thing at a time. Settle base, then equity, then sign-on.</li>
      <li><strong>Read it aloud</strong>: Before hitting send, read your email aloud. Does it sound entitled? Appreciative? Professional?</li>
    </ol>
    <p><strong>Sample email (base salary ask)</strong>:</p>
    <pre><code>Subject: Offer Discussion — Senior Backend Engineer, [Company]

Hi [Recruiter],

Thank you again for the offer. I'm very excited about the role and the team's work on [specific project].

I'd love to join, but I'm hoping we can adjust the base salary. My market research and current competing offer suggest a range of $195K-$210K for this level. The offered $180K base is below that range.

Could we explore a base salary of $200K? I'm confident I'll deliver significant value in this role and would love to make this work.

Thank you for your consideration.

Best,
[Name]</code></pre>
    <p><strong>Response timing</strong>: Give them 1-2 business days to respond. If no response after 2 days, send a brief follow-up. Don't send multiple follow-ups in the same day — it signals desperation.</p>
    <p><strong>Phone follow-ups</strong>: After email negotiation, ask for a phone call to discuss. Voice conversations build rapport and allow real-time back-and-forth that email can't provide.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

**Q1**: What does BATNA stand for in negotiation?

a) Best Alternative To a Negotiated Agreement
b) Basic Agreement for Total Negotiated Amount
c) Better Anchor Through Negotiation Approach
d) Base And Total Negotiable Assessment

<details class="tp-qa-card" data-qid="ip-s11-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a) Best Alternative To a Negotiated Agreement</strong></p><p>BATNA is your best walk-away option. It defines your reservation price — the minimum you'll accept before choosing your alternative. A strong BATNA (another offer, staying employed) gives you leverage.</p></div></details>

**Q2**: What is the standard vesting schedule for RSUs at most tech companies?

a) 2 years with no cliff
b) 4 years with a 1-year cliff
c) 5 years with a 6-month cliff
d) Immediate vesting

<details class="tp-qa-card" data-qid="ip-s11-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) 4 years with a 1-year cliff</strong></p><p>25% vests at the 1-year mark (cliff), then the remaining 75% vests monthly or quarterly over the next 3 years. This is the industry standard for both RSUs and stock options.</p></div></details>

**Q3**: Which is typically the MOST negotiable component of a job offer?

a) Health insurance benefits
b) Sign-on bonus
c) 401(k) matching formula
d) PTO policy

<details class="tp-qa-card" data-qid="ip-s11-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Sign-on bonus</strong></p><p>Sign-on bonuses come from a one-time budget that is separate from base salary bands. They're highly negotiable because they don't affect recurring compensation costs. Base salary is moderately negotiable, while benefits like insurance and 401(k) are usually fixed.</p></div></details>

**Q4**: What percentage of people who accept counteroffers leave within 12 months?

a) 10-20%
b) 40-50%
c) 70-80%
d) 95%+

<details class="tp-qa-card" data-qid="ip-s11-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) 70-80%</strong></p><p>Studies consistently show that most people who accept counteroffers leave within a year because the root causes (culture, growth, management) remain unaddressed, and the relationship with the employer changes.</p></div></details>

**Q5**: What is the bracketing technique in negotiation?

a) Offering multiple options for the employer to choose from
b) Asking for more than your target so your actual target seems reasonable
c) Breaking negotiations into multiple email threads
d) Only negotiating with companies that bracket their offers

<details class="tp-qa-card" data-qid="ip-s11-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Asking for more than your target so your actual target seems reasonable</strong></p><p>Bracketing means asking above your actual target so the counteroffer lands at or above what you really want. If they offer $160K and you want $177K, you ask $190K-$195K. The likely settlement falls in the middle, reaching your target.</p></div></details>

## Exercises

**Easy** — Research your market value: collect 10+ compensation data points for your target role, level, and location using Levels.fyi, Glassdoor, and Blind. Calculate the 25th, 50th, and 75th percentiles. Write down your BATNA and reservation price.

**Easy** — Write a draft negotiation email for a hypothetical offer that is $15K below market. Include: appreciation, market data reference, specific ask, and collaborative tone. Read it aloud and refine.

**Medium** — Build a total compensation calculator in Python that takes base salary, bonus percentage, RSU grant, vesting schedule, and sign-on bonus as inputs. Output 4-year projected compensation with and without refreshers. Run it on two competing offers and compare.

**Medium** — Role-play a negotiation scenario with a peer. One person plays the recruiter (with a $160K-$190K budget), the other plays the candidate (targeting $185K). Practice anchoring, bracketing, and silence. Debrief what worked.

**Hard** — Analyze a real total compensation offer (or create a detailed hypothetical one from Levels.fyi). Write a full negotiation strategy document: market data analysis, BATNA assessment, bracketing targets, email negotiation scripts, fallback positions for base/bonus/equity/sign-on, and a decision framework for when to accept vs walk away.

---

> **Previous**: [10 — Resume & Portfolio Review →](10-resume-and-portfolio-review.md)
> **Next**: [12 — Mock Interview Simulations →](12-mock-interview-simulations.md)
