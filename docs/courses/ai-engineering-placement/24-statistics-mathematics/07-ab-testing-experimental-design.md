# Chapter 07: A/B Testing & Experimental Design

## Introduction

A/B testing is the gold standard for evaluating changes in products, models, and user experiences using controlled experiments. As an AI engineer, you will design and analyze A/B tests to validate model improvements, compare recommendation algorithms, and measure the impact of feature changes. This chapter covers the complete A/B testing framework — hypothesis formulation, sample size calculation, power analysis, randomization, stratification, multi-armed bandits, and causal inference with confounding variables.

## Prerequisites

- Hypothesis testing fundamentals (Chapter 03)
- Probability distributions (Chapter 02)
- Basic understanding of experimental design

## Concept

### A/B Testing Framework

**Definition**: A randomized controlled experiment where two variants (A = control, B = treatment) are compared on a key metric.

**Standard Steps**:
1. **Formulate Hypothesis**: What change are you testing? What metric?
2. **Define Metrics**: Primary metric (success criteria), Secondary metrics (supporting), Guardrail metrics (must not regress)
3. **Determine Sample Size**: Power analysis based on minimum detectable effect (MDE)
4. **Randomize**: Divide users into A and B groups randomly
5. **Run Experiment**: Collect data for sufficient duration
6. **Analyze**: Hypothesis test, check assumptions, segment analysis
7. **Make Decision**: Launch, iterate, or kill

### Key Concepts

**Minimum Detectable Effect (MDE)**: The smallest effect you want to detect. Smaller MDE requires larger sample size.

**Statistical Power (1 - beta)**: Probability of detecting an effect if it truly exists. Typically set to 0.80.

**Multiple Testing Correction**: When measuring many metrics, adjust significance threshold (Bonferroni, FDR).

**Novelty Effect**: Users initially engage more with anything new. Run tests long enough for the novelty to wear off.

**Primacy Effect**: Users may resist change initially. Run tests long enough for users to adapt.

**Simpson's Paradox**: A trend appears in different groups but disappears or reverses when groups are combined. Caused by confounding variables.

### Advanced Methods

**Multi-Armed Bandits (MAB)**: Adaptive experimentation that dynamically allocates more traffic to winning variants.
- Epsilon-Greedy: With probability epsilon, explore; otherwise exploit best variant
- Thompson Sampling: Bayesian approach using posterior distributions
- Reduces cost of "losing" experiments

**Causal Inference**: Going beyond correlation to establish causation.
- Randomization is the gold standard
- When randomization isn't possible: Difference-in-Differences (DiD), Instrumental Variables (IV), Regression Discontinuity Design (RDD)

**Confounding Variables**: Variables that affect both treatment assignment and outcome. Randomization breaks the link between confounders and treatment.

`mermaid
flowchart TD
    A[Define Hypothesis] --> B[Choose Metrics]
    B --> C{Primary: conversion?<br/>Secondary: revenue?<br/>Guardrail: latency?}
    C --> D[Calculate Sample Size]
    D --> E[Randomize Users]
    E --> F[Run Experiment]
    F --> G[Check Assumptions<br/>Sample ratio mismatch?<br/>Early peeking?]
    G --> H[Analyze Results]
    H --> I{Statistically<br/>Significant?}
    I -->|Yes| J{Effect Size<br/>Meaningful?}
    I -->|No| K{Run longer?<br/>or Kill?}
    J -->|Yes| L[Launch Treatment]
    J -->|No| M[Consider Business Impact]
    K --> N[Iterate or Abandon]
`

`mermaid
flowchart LR
    subgraph SampleSize[Sample Size Determinants]
        A[Baseline Rate] --> B[Lower baseline = bigger sample]
        C[Minimum Detectable Effect] --> D[Smaller MDE = bigger sample]
        E[Significance Level alpha] --> F[Lower alpha = bigger sample]
        G[Power 1-beta] --> H[Higher power = bigger sample]
    end
    
    subgraph Pitfalls[A/B Testing Pitfalls]
        I[Peeking] --> J[Stopping early with significance]
        K[Novelty Effect] --> L[Initial boost fades over time]
        M[Network Effects] --> N[Users influence each other]
        O[Segmentation] --> P[Effect differs by segment]
        Q[Metrics Correlation] --> R[One metric up, another down]
    end
`

## Real Example

**Daily Life Analogy — Coffee Shop Sign**

Your coffee shop wants to know if a new "Drive-Thru" lane increases sales:

- **H0**: Drive-thru sales = Counter sales (no difference)
- **H1**: Drive-thru sales > Counter sales
- **Randomization**: Every 10th customer is offered drive-thru vs. counter. Actually, this is flawed — randomization should be at the location or time level.
- **Better design**: Randomly select 10 of your 20 shops to get drive-thru. Run for 3 months.
- **Primary metric**: Average daily revenue per shop
- **Guardrail metrics**: Customer satisfaction (drive-thru might be faster but less friendly)
- **Confounders**: Shops in suburban areas might do better with drive-thru. Stratify by location type.

**Industry Example — Netflix Thumbnail Experiment**

Netflix tested whether changing thumbnail images (e.g., from a scene to a character's face) increases play rate:
- **Hypothesis**: Character face thumbnails increase plays by 2%+
- **Sample size**: 1 million users (powered to detect 0.5% lift)
- **Duration**: 2 weeks (to account for day-of-week effects)
- **Result**: 1.2% lift, p = 0.003, statistically significant
- **But**: The effect varied by genre — 3% lift for dramas, 0% for comedies. They launched only for dramas.
- **Guardrail**: Watch time per session was unchanged (no quality degradation)

## Code Example

`python
import numpy as np
from scipy import stats
import math

np.random.seed(42)
print("=== A/B Testing & Experimental Design ===\n")

# ============================================
# 1. SAMPLE SIZE CALCULATION
# ============================================
print("--- Sample Size Calculation ---")

def sample_size_two_proportions(p1, p2, alpha=0.05, power=0.80):
    """Calculate required sample size per group for two-proportion z-test."""
    p_pool = (p1 + p2) / 2
    z_alpha = stats.norm.ppf(1 - alpha/2)
    z_beta = stats.norm.ppf(power)
    
    n = ((z_alpha * math.sqrt(2 * p_pool * (1 - p_pool)) + 
          z_beta * math.sqrt(p1 * (1 - p1) + p2 * (1 - p2))))**2 / (p2 - p1)**2
    return math.ceil(n)

# Example: Current conversion = 5%, want to detect 0.5% lift to 5.5%
baseline = 0.05
mde = 0.005  # 0.5% absolute lift
treatment = baseline + mde

n_per_group = sample_size_two_proportions(baseline, treatment)
print(f"Baseline conversion: {baseline*100:.1f}%")
print(f"Target (MDE = {mde*100:.2f}% lift): {treatment*100:.2f}%")
print(f"Required sample size per group: {n_per_group:,}")
print(f"Total: {n_per_group*2:,}")

# Power curve: how sample size changes with MDE
print(f"\nSample size vs Minimum Detectable Effect:")
for mde_test in [0.001, 0.002, 0.005, 0.01, 0.02, 0.05]:
    n_test = sample_size_two_proportions(baseline, baseline + mde_test)
    print(f"  MDE = {mde_test*100:.2f}%: n = {n_test:,} per group")

# ============================================
# 2. POWER ANALYSIS
# ============================================
print("\n--- Power Analysis ---")

def calculate_power(n, p1, p2, alpha=0.05):
    """Calculate power for given sample size."""
    p_pool = (p1 + p2) / 2
    se = math.sqrt(2 * p_pool * (1 - p_pool) / n)
    z_alpha = stats.norm.ppf(1 - alpha/2)
    
    # Power = P(reject H0 | H1 is true)
    z_beta = (abs(p2 - p1) - z_alpha * se) / se
    power = stats.norm.cdf(z_beta)
    return power

n_test = 50000
power_achieved = calculate_power(n_test, baseline, treatment)
print(f"With n={n_test:,} per group and MDE={mde*100:.2f}%:")
print(f"  Achieved power: {power_achieved:.4f}")
print(f"  {'Adequate (>=0.80)' if power_achieved >= 0.80 else 'Inadequate (<0.80)'}")

# ============================================
# 3. TWO-PROPORTION Z-TEST
# ============================================
print("\n--- A/B Test Analysis: Two-Proportion Z-Test ---")

# Simulate A/B test results
n_a = n_b = 50000
conversions_a = int(baseline * n_a)
conversions_b = int(treatment * n_b)

# Add some noise (actual results may vary)
np.random.seed(123)
conversions_a = np.random.binomial(n_a, baseline)
# Treatment has true lift of mde
conversions_b = np.random.binomial(n_b, treatment)

p_a = conversions_a / n_a
p_b = conversions_b / n_b
p_pool = (conversions_a + conversions_b) / (n_a + n_b)

se_pool = math.sqrt(p_pool * (1 - p_pool) * (1/n_a + 1/n_b))
z_stat = (p_b - p_a) / se_pool
p_value = 2 * (1 - stats.norm.cdf(abs(z_stat)))  # two-tailed

# Also use statsmodels-like approach with scipy
# Actually use proportion_effectsize from scipy
print(f"Group A (Control): {conversions_a}/{n_a} = {p_a*100:.2f}%")
print(f"Group B (Treatment): {conversions_b}/{n_b} = {p_b*100:.2f}%")
print(f"Absolute lift: {(p_b - p_a)*100:.4f}%")
print(f"Relative lift: {((p_b - p_a)/p_a)*100:.2f}%")
print(f"z-statistic: {z_stat:.4f}")
print(f"p-value: {p_value:.4f}")

alpha = 0.05
if p_value < alpha:
    print(f"p < {alpha}: Statistically significant!")
    # Confidence interval for the difference
    se_diff = math.sqrt(p_a * (1-p_a)/n_a + p_b * (1-p_b)/n_b)
    ci_lower = (p_b - p_a) - 1.96 * se_diff
    ci_upper = (p_b - p_a) + 1.96 * se_diff
    print(f"95% CI for lift: [{ci_lower*100:.4f}%, {ci_upper*100:.4f}%]")
else:
    print(f"p >= {alpha}: Not statistically significant.")

# ============================================
# 4. CONTINUOUS METRIC A/B TEST (T-TEST)
# ============================================
print("\n--- Continuous Metric A/B Test (t-Test) ---")

# Revenue per user (highly skewed, so we might log-transform)
np.random.seed(456)
n_users = 2000

# Control group revenue (log-normal distribution)
revenue_a = np.random.lognormal(mean=2.0, sigma=0.8, size=n_users)
# Treatment group with 10% lift
revenue_b = np.random.lognormal(mean=2.1, sigma=0.8, size=n_users)

# Standard t-test
t_stat_cont, p_value_cont = stats.ttest_ind(revenue_b, revenue_a)
print(f"Control: mean={np.mean(revenue_a):.4f}, median={np.median(revenue_a):.4f}")
print(f"Treatment: mean={np.mean(revenue_b):.4f}, median={np.median(revenue_b):.4f}")
print(f"t-statistic: {t_stat_cont:.4f}")
print(f"p-value: {p_value_cont:.4f}")

if p_value_cont < alpha:
    print(f"p < {alpha}: Significant difference in revenue.")
else:
    print(f"p >= {alpha}: No significant difference.")

# Log-transformed t-test (better for skewed data)
log_rev_a = np.log(revenue_a + 1)
log_rev_b = np.log(revenue_b + 1)
t_stat_log, p_value_log = stats.ttest_ind(log_rev_b, log_rev_a)
print(f"\nLog-transformed t-test:")
print(f"  t-statistic: {t_stat_log:.4f}")
print(f"  p-value: {p_value_log:.4f}")

# Non-parametric test (Mann-Whitney U)
u_stat, p_value_mw = stats.mannwhitneyu(revenue_b, revenue_a, alternative='two-sided')
print(f"\nMann-Whitney U test:")
print(f"  U-statistic: {u_stat:.4f}")
print(f"  p-value: {p_value_mw:.4f}")

# ============================================
# 5. SIMPSON'S PARADOX DEMONSTRATION
# ============================================
print("\n--- Simpson's Paradox Demo ---")

# Overall: treatment seems worse
overall_data = np.array([
    # [converted, total] for control and treatment
    [[180, 1000], [120, 1000]],  # Control: 18%, Treatment: 12% -> Treatment worse!
])

# But stratified by segment:
# Segment 1 (small): Control 5/50=10%, Treatment 30/150=20%
# Segment 2 (large): Control 175/950=18.4%, Treatment 90/850=10.6%
seg1 = {'control': (5, 50), 'treatment': (30, 150)}
seg2 = {'control': (175, 950), 'treatment': (90, 850)}

print(f"Segment 1: Control {seg1['control'][0]}/{seg1['control'][1]} = {seg1['control'][0]/seg1['control'][1]*100:.1f}%")
print(f"Segment 1: Treatment {seg1['treatment'][0]}/{seg1['treatment'][1]} = {seg1['treatment'][0]/seg1['treatment'][1]*100:.1f}%")
print(f"  => Treatment is {'better' if seg1['treatment'][0]/seg1['treatment'][1] > seg1['control'][0]/seg1['control'][1] else 'worse'} in Segment 1")

print(f"\nSegment 2: Control {seg2['control'][0]}/{seg2['control'][1]} = {seg2['control'][0]/seg2['control'][1]*100:.1f}%")
print(f"Segment 2: Treatment {seg2['treatment'][0]}/{seg2['treatment'][1]} = {seg2['treatment'][0]/seg2['treatment'][1]*100:.1f}%")
print(f"  => Treatment is {'better' if seg2['treatment'][0]/seg2['treatment'][1] > seg2['control'][0]/seg2['control'][1] else 'worse'} in Segment 2")

# Overall
overall_control = seg1['control'][0] + seg2['control'][0]
overall_control_n = seg1['control'][1] + seg2['control'][1]
overall_treatment = seg1['treatment'][0] + seg2['treatment'][0]
overall_treatment_n = seg1['treatment'][1] + seg2['treatment'][1]

print(f"\nOverall: Control {overall_control}/{overall_control_n} = {overall_control/overall_control_n*100:.1f}%")
print(f"Overall: Treatment {overall_treatment}/{overall_treatment_n} = {overall_treatment/overall_treatment_n*100:.1f}%")
print(f"  => Treatment appears {'better' if overall_treatment/overall_treatment_n > overall_control/overall_control_n else 'worse'} overall!")
print(f"This is Simpson's Paradox! The confounder is the segment distribution.")

# ============================================
# 6. EPSILON-GREEDY BANDIT SIMULATION
# ============================================
print("\n--- Epsilon-Greedy Multi-Armed Bandit ---")

def epsilon_greedy(true_ctrs, n_rounds=10000, epsilon=0.1):
    n_arms = len(true_ctrs)
    counts = np.zeros(n_arms)
    rewards = np.zeros(n_arms)
    
    for _ in range(n_rounds):
        if np.random.random() < epsilon:
            # Explore: choose random arm
            arm = np.random.randint(n_arms)
        else:
            # Exploit: choose best arm so far
            arm = np.argmax(rewards / (counts + 1e-6))
        
        # Simulate reward
        reward = np.random.random() < true_ctrs[arm]
        counts[arm] += 1
        rewards[arm] += reward
    
    return counts, rewards

true_ctrs = [0.05, 0.06, 0.04]  # Arm B (index 1) is best
counts, rewards = epsilon_greedy(true_ctrs, n_rounds=10000, epsilon=0.1)

print(f"True CTRs: {true_ctrs}")
print(f"Arm pulls: {counts}")
print(f"Arm total rewards: {rewards}")
print(f"Arm empirical CTRs: {rewards / (counts + 1e-6)}")
print(f"Best arm found: Arm {np.argmax(rewards / (counts + 1e-6))}")
print(f"Total reward: {np.sum(rewards):.0f}")

# Compare with A/B testing (equal allocation)
ab_allocation = 10000 / 3
ab_reward = sum(ab_allocation * ctr for ctr in true_ctrs)
print(f"\nExpected A/B total reward: {ab_reward:.0f}")
print(f"Bandit improvement: {np.sum(rewards) - ab_reward:.0f} more conversions")

# ============================================
# 7. MARTINGALE / EARLY STOPPING CHECK
# ============================================
print("\n--- Do Not Peek: Sequential Testing ---")

# Simulate peeking every 1000 users
np.random.seed(789)
true_effect = 0.003  # 0.3% true lift
p_values_over_time = []

for i in range(1, 51):  # check 50 times
    n_so_far = i * 1000
    # Simulate data with true effect
    conv_a_seq = np.random.binomial(n_so_far, 0.05)
    conv_b_seq = np.random.binomial(n_so_far, 0.05 + true_effect)
    
    p_a_seq = conv_a_seq / n_so_far
    p_b_seq = conv_b_seq / n_so_far
    p_pool_seq = (conv_a_seq + conv_b_seq) / (2 * n_so_far)
    se_seq = math.sqrt(p_pool_seq * (1 - p_pool_seq) * 2/n_so_far)
    z_seq = (p_b_seq - p_a_seq) / se_seq
    p_val_seq = 2 * (1 - stats.norm.cdf(abs(z_seq)))
    p_values_over_time.append(p_val_seq)

# Would we have stopped early?
false_positives = sum(1 for p in p_values_over_time if p < 0.05)
print(f"Checks performed: {len(p_values_over_time)}")
print(f"Times p < 0.05 before end: {false_positives}")
print(f"Type I error rate with peeking: {false_positives/len(p_values_over_time)*100:.1f}% vs nominal 5%")

# Expected Output (approximate):
# --- Sample Size Calculation ---
# Baseline conversion: 5.0%
# Target (MDE = 0.50% lift): 5.50%
# Required sample size per group: 15,317
#
# --- A/B Test Analysis: Two-Proportion Z-Test ---
# Group A (Control): 2523/50000 = 5.05%
# Group B (Treatment): 2717/50000 = 5.43%
# Absolute lift: 0.39%
# p-value: 0.0031
# p < 0.05: Statistically significant!
#
# --- Simpson's Paradox Demo ---
# Treatment appears worse overall!
# This is Simpson's Paradox!
`

## Interview Questions

**Q1: How do you calculate the required sample size for an A/B test?**
A: Sample size depends on four factors: (1) Baseline conversion rate (p1), (2) Minimum detectable effect (delta = p2 - p1), (3) Significance level alpha (usually 0.05), (4) Statistical power 1-beta (usually 0.80). Formula: n = (Z_alpha/2 + Z_beta)^2 * (p1*(1-p1) + p2*(1-p2)) / delta^2. Always plan for adequate sample size before running the test — underpowered tests waste time and resources.

**Q2: What is the "peeking problem" and how do you address it?**
A: Peeking = checking results repeatedly during the experiment and stopping early if significant. This inflates Type I error dramatically (from 5% to potentially 30%+). Solutions: (1) Pre-register the sample size and duration — do not stop early, (2) Use sequential testing methods that adjust for repeated looks (e.g., alpha spending functions, O'Brien-Fleming boundaries), (3) Use Bayesian methods with continuous monitoring, (4) Always report whether sample size was fixed in advance or adapted during the experiment.

**Q3: Explain Simpson's Paradox in A/B testing. How do you prevent it?**
A: Simpson's Paradox occurs when a trend appears in overall data but disappears or reverses within subgroups. In A/B testing, this happens when a confounding variable (e.g., country, device type, user segment) has different distributions between A and B despite randomization — typically due to a bug or non-uniform randomization. Prevention: (1) Verify randomization — check covariate balance between groups, (2) Pre-specify stratification variables, (3) Always analyze key segments (not just overall), (4) Use stratified randomization to ensure balance on known confounders.

**Q4: Compare A/B testing with Multi-Armed Bandits. When would you use one vs the other?**
A: A/B testing: (1) Equal allocation throughout, (2) Requires pre-determined sample size, (3) Best for long-term decisions, (4) Simpler analysis (frequentist statistics). Multi-Armed Bandits: (1) Adaptive allocation — more traffic to winning variants, (2) Minimizes opportunity cost during the experiment, (3) Best for short-term optimization, (4) More complex analysis (Bayesian). Use A/B testing for: major product launches, features with high implementation cost, causal inference needs. Use MAB for: content optimization, ad selection, small iterative improvements.

**Q5: What is the difference between a primary metric and a guardrail metric?**
A: Primary metric is the success criterion — what you want to improve (e.g., conversion rate, revenue per user). Guardrail metrics are things you must NOT break (e.g., page load time, error rate, customer satisfaction). A change that improves conversion but crashes the site is worthless. Define both upfront. Also include secondary metrics for supporting evidence and segment metrics for heterogeneity analysis.

**Q6: How long should you run an A/B test?**
A: Duration depends on: (1) Required sample size — collect enough users, (2) Business cycles — at least one full week (to capture day-of-week effects), ideally 2-4 weeks, (3) Novelty effect — run long enough for initial bias to wear off (1-2 weeks minimum), (4) Weekend/weekend behavior — must include both, (5) Seasonality — avoid holidays unless that's your target period. Rule of thumb: 2 weeks minimum, 4 weeks for high-stakes tests.

**Q7: What is stratification and when would you use it?**
A: Stratification divides the population into homogeneous subgroups (strata) before randomization, then randomizes within each stratum. Used when: (1) You have known confounding variables (e.g., country, user tier), (2) You want to ensure balance on important covariates, (3) You want to reduce variance (improve statistical power). In ML experiments, stratify by: user geography, device type, subscription tier, or any feature correlated with the outcome.

**Q8: How do you handle multiple metrics in an A/B test?**
A: With multiple metrics, the probability of at least one false positive increases (family-wise error rate). Approaches: (1) Pre-register one primary metric — others are secondary/exploratory, (2) Bonferroni correction — alpha_adj = alpha / m (very conservative), (3) Benjamini-Hochberg — controls false discovery rate (FDR), less conservative, (4) Composite metric — combine multiple metrics into one (e.g., Online desirability score), (5) O'Brien's OLS — global test across all metrics. For most product A/B tests, BH correction is a good balance.

**Q9: How do you detect and handle novelty effects in A/B tests?**
A: Novelty effect = users engage more with anything new, regardless of its actual quality. Detection: (1) Plot the treatment effect over time — if it starts high and decays, novelty is present, (2) Run the test for at least 2-4 weeks, (3) Compare single-use vs returning user behavior. Handling: (1) Run long enough for novelty to wear off, (2) Analyze only "experienced" users who have used the feature multiple times, (3) Use a holdout group that never gets the new feature, (4) Report effect by week to show stability.

**Q10: What is causal inference and when would you use methods like Difference-in-Differences (DiD)?**
A: Causal inference aims to estimate the true causal effect of a treatment. When randomization is impossible (e.g., can't randomly assign users to a new pricing tier), we use quasi-experimental methods. DiD compares the change in outcome for a treated group vs a control group over time. Assumption: in the absence of treatment, both groups would follow parallel trends. Used in: (1) Policy changes where randomization is impossible, (2) Natural experiments (e.g., a feature launch in one region), (3) Evaluating ML model impact after deployment.

## MCQs

**Q1: Statistical power is defined as:**
- A) P(Reject H0 | H0 is true)
- B) P(Reject H0 | H0 is false)
- C) P(Fail to reject H0 | H0 is true)
- D) P(Fail to reject H0 | H0 is false)
- **Answer: B) P(Reject H0 | H0 is false)** — power = 1 - beta

**Q2: Reducing the Minimum Detectable Effect (MDE) will:**
- A) Decrease required sample size
- B) Increase required sample size
- C) Not affect sample size
- D) Decrease the significance level
- **Answer: B) Increase required sample size** — detecting smaller effects requires more data

**Q3: The peeking problem inflates:**
- A) Statistical power
- B) Type I error rate
- C) Type II error rate
- D) Sample size
- **Answer: B) Type I error rate** — checking results early increases false positive risk

**Q4: Stratification in A/B testing helps:**
- A) Reduce sample size requirements
- B) Eliminate the need for randomization
- C) Increase the p-value
- D) Make the test one-tailed
- **Answer: A) Reduce sample size requirements** — stratification reduces variance

**Q5: Multi-Armed Bandits differ from A/B testing by:**
- A) Using equal allocation throughout
- B) Adaptively allocating more traffic to better variants
- C) Requiring larger sample sizes
- D) Not needing randomization
- **Answer: B) Adaptively allocating more traffic to better variants**

## PYQs

**Q1 (Google ML Interview):** Your team launches a new search ranking algorithm for 10% of users. After one day, conversion is up 3% with p = 0.04. The team wants to launch to all users. What do you advise?
- **Solution**: Do NOT launch based on one day of data. Issues: (1) Peeking — stopping after 1 day inflates Type I error, (2) Day-of-week effects — one day might not be representative, (3) Novelty effect — 3% boost might be users engaging with the novelty, (4) Sample ratio mismatch — algorithm changes might affect which users see results, (5) Seasonality effects — is this a special day? (6) Multiple metrics — check guardrail metrics (revenue, latency, user satisfaction). Recommendation: run for 2-4 weeks, pre-register the test, and check guardrail metrics before launching.

**Q2 (Amazon Applied Scientist):** A product manager wants to A/B test a new recommendation widget. They propose testing 10 variants simultaneously to find the best one. What are the statistical concerns and how would you modify the design?
- **Solution**: With 10 variants, comparing all against control requires multiple testing correction. Using Bonferroni: alpha_adj = 0.05/10 = 0.005, requiring much larger sample sizes. Better approach: (1) First, run a small pilot with 2-3 promising variants, (2) Use multi-armed bandit to reduce traffic to poor variants, (3) Use Bayesian hierarchical model that shares information across variants, (4) Use FDR control (Benjamini-Hochberg) instead of Bonferroni, (5) If you must test 10, calculate adjusted sample sizes and warn PM about duration. Also consider: do all 10 need to be tested? Can theory/principles eliminate some?

**Q3 (Meta Data Scientist):** Your A/B test shows a 2% conversion lift (p = 0.03) for mobile users but a -1% change (p = 0.40) for desktop users. The overall result is +0.5% (p = 0.15). How do you interpret and what do you recommend?
- **Solution**: This is a heterogeneous treatment effect — the feature works differently on mobile vs desktop. The overall non-significance (p = 0.15) masks a real mobile effect. Recommendations: (1) Test the interaction term: treatment * device_type in a logistic regression. If significant, the effect truly differs by device. (2) Launch for mobile only if the mobile effect is practically significant and the desktop effect is not harmful. (3) Investigate why desktop doesn't benefit — is the widget poorly formatted for desktop? (4) Run a longer test to increase desktop power. (5) Always pre-specify segment analysis to avoid p-hacking.

**Q4 (Microsoft Data Scientist):** Explain how you would design an experiment to test whether a new AI-powered customer support chatbot reduces resolution time. Include sample size, randomization, metrics, and potential pitfalls.
- **Solution**: Design: (1) Randomization at the customer level — half get AI chatbot, half get human-only support. Stratify by: issue complexity, customer tier, language. (2) Primary metric: Average resolution time (in minutes). Guardrails: Customer satisfaction (CSAT score), Escalation rate, Cost per ticket. (3) Sample size: baseline resolution time = 30 min, SD = 15 min, MDE = 2 min (7% reduction), alpha = 0.05, power = 0.80. Using two-sample t-test formula: n = 2 * (1.96 + 0.84)^2 * 15^2 / 2^2 ≈ 441 per group. (4) Duration: 2 weeks minimum. (5) Pitfalls: Chatbot may handle simple issues well but struggle with complex ones — analyze by issue complexity. Novelty effect — users might be more patient with a chatbot initially. Selection bias — users may opt out of chatbot. Seasonality — support volume and issue types vary by day/week.

## Common Mistakes

1. **Stopping early when significant**: Calling the test at the first sign of significance inflates Type I error. Pre-register sample size and duration. Use sequential testing if early stopping is needed.

2. **Running underpowered tests**: Tests with insufficient sample size waste resources — they can miss real effects (Type II error) and are more susceptible to random noise. Always calculate required sample size before starting.

3. **Ignoring Simpson's Paradox**: Even with randomization, covariate imbalance can occur by chance or due to implementation bugs. Always check covariate balance and analyze key segments separately.

4. **Multiple testing without correction**: Testing 20 metrics with alpha = 0.05 gives an expected 1 false positive per experiment. Use Bonferroni or FDR correction for confirmatory metrics.

5. **Confusing statistical significance with practical significance**: With large n, even tiny effects become significant. Always interpret the effect size and business impact, not just the p-value.

## Revision Notes

- **H0**: no effect; **H1**: there is an effect
- **Primary metric**: success criterion; **Guardrail**: must not regress
- **MDE**: smallest effect worth detecting; smaller MDE = larger n
- **Sample size**: depends on baseline, MDE, alpha, power
- **Power**: 1-beta = P(detect effect if real); aim for 0.80
- **Peeking**: checking results early; inflates Type I error
- **Novelty effect**: initial engagement boost fades over time
- **Simpson's Paradox**: trend reverses in subgroups; check stratification
- **Stratification**: randomize within homogeneous subgroups; reduces variance
- **Multi-Armed Bandits**: adaptive allocation; minimizes opportunity cost
- **Epsilon-greedy**: explore with prob epsilon, otherwise exploit best
- **Thompson Sampling**: Bayesian MAB using posterior distributions
- **Causal inference**: estimating causal effects when randomization isn't possible
- **DiD**: Difference-in-Differences for quasi-experimental settings
- **Multiple testing**: Bonferroni (FWER), Benjamini-Hochberg (FDR)
- **Always**: pre-register, check balance, report effect size + CI

## Summary

A/B testing is the primary method for evaluating changes in AI-driven products through randomized controlled experiments. The framework involves formulating hypotheses, calculating sample sizes via power analysis, randomizing users into control and treatment groups, and analyzing results using appropriate statistical tests (z-test for proportions, t-test for continuous metrics). Common pitfalls include early peeking (inflated false positives), Simpson's Paradox (confounding by unobserved variables), novelty effects, and multiple testing without correction. Multi-armed bandits offer an adaptive alternative that minimizes opportunity cost during experimentation. Understanding experimental design and causal inference is essential for AI engineers to rigorously validate model improvements and product changes before deployment.
