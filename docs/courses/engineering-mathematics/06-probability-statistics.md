# Chapter 6: Probability & Statistics

> **Previous:** [Chapter 5: Complex Analysis](05-complex-analysis.md) | **Next:** [Chapter 7: Numerical Methods](07-numerical-methods.md)

## Learning Objectives

After completing this chapter, you will be able to:

- Apply probability axioms, Bayes' theorem, and counting principles
- Work with discrete and continuous random variables and their distributions
- Compute expectations, variances, covariances, and correlations
- Apply law of large numbers and central limit theorem
- Perform point estimation, confidence intervals, and hypothesis testing
- Understand regression and correlation analysis
- Apply statistical methods to data science and machine learning

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Probability Axioms | $0 \leq P(E) \leq 1$, $P(S) = 1$, $P(\cup E_i) = \sum P(E_i)$ | Foundation for all reasoning under uncertainty |
| Bayes' Theorem | $P(A|B) = P(B|A)P(A)/P(B)$ | Updating beliefs with evidence |
| Random Variables | Functions from sample space to reals | Framework for data modeling |
| CLT | $\bar{X} \sim N(\mu, \sigma^2/n)$ for large $n$ | Why normal distribution is universal |
| Hypothesis Testing | Reject $H_0$ if p-value < $\alpha$ | Evidence-based decision making |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Probability Foundations] --> B[Random Variables]
    B --> C[Distributions]
    C --> D[Expectation & Variance]
    D --> E[Limit Theorems]
    E --> F[Statistical Inference]
    F --> G[Hypothesis Testing]
    G --> H[Regression & Applications]
```

## Theory

### 6.1 Foundations of Probability

**Sample Space:** The set $S$ of all possible outcomes of an experiment.

**Event:** A subset $E \subseteq S$.

**Probability Axioms (Kolmogorov):**
1. $0 \leq P(E) \leq 1$ for any event $E$
2. $P(S) = 1$
3. For mutually exclusive events $E_1, E_2, \ldots$, $P(\bigcup_{i=1}^\infty E_i) = \sum_{i=1}^\infty P(E_i)$

**Properties:**
- $P(\emptyset) = 0$
- $P(E^c) = 1 - P(E)$
- $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
- If $A \subseteq B$, then $P(A) \leq P(B)$

**Conditional Probability:** $P(A|B) = \frac{P(A \cap B)}{P(B)}$, provided $P(B) > 0$.

**Multiplication Rule:** $P(A \cap B) = P(A|B)P(B) = P(B|A)P(A)$

**Independence:** $A$ and $B$ are independent if $P(A \cap B) = P(A)P(B)$.

**Law of Total Probability:** If $B_1, B_2, \ldots, B_n$ partition $S$:
$$P(A) = \sum_{i=1}^n P(A|B_i)P(B_i)$$

**Bayes' Theorem:**
$$P(B_i|A) = \frac{P(A|B_i)P(B_i)}{\sum_{j=1}^n P(A|B_j)P(B_j)}$$

### 6.2 Counting (Combinatorics)

**Permutations (order matters):** $P(n,r) = \frac{n!}{(n-r)!}$

**Combinations (order irrelevant):** $C(n,r) = \binom{n}{r} = \frac{n!}{r!(n-r)!}$

**Permutations with Repetition:** $n^r$

**Combinations with Repetition:** $\binom{n+r-1}{r}$

**Key Principle:** $P(n,r) = r! \cdot C(n,r)$ — choose the set, then order it.

### 6.3 Discrete Random Variables

A **discrete random variable** $X$ takes countably many values with probabilities:

$$P(X = x_k) = p_k, \quad \sum_k p_k = 1$$

**Probability Mass Function (PMF):** $p(x) = P(X = x)$

**Cumulative Distribution Function (CDF):** $F(x) = P(X \leq x) = \sum_{t \leq x} p(t)$

**Expected Value:** $\mu = E[X] = \sum_x x \cdot p(x)$

**Variance:** $\sigma^2 = \text{Var}(X) = E[(X - \mu)^2] = E[X^2] - \mu^2$

**Standard Deviation:** $\sigma = \sqrt{\text{Var}(X)}$

**Properties of Expectation:**
- $E[aX + b] = aE[X] + b$
- $E[X + Y] = E[X] + E[Y]$
- $E[XY] = E[X]E[Y]$ if $X, Y$ independent

**Properties of Variance:**
- $\text{Var}(aX + b) = a^2 \text{Var}(X)$
- $\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y)$ if $X, Y$ independent

### 6.4 Standard Discrete Distributions

**Bernoulli:** $X \sim \text{Bern}(p)$ — single trial, success with prob $p$
- $P(X=1) = p$, $P(X=0) = 1-p$
- $E[X] = p$, $\text{Var}(X) = p(1-p)$

**Binomial:** $X \sim \text{Bin}(n, p)$ — $n$ independent Bernoulli trials
- $P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}$
- $E[X] = np$, $\text{Var}(X) = np(1-p)$

**Poisson:** $X \sim \text{Pois}(\lambda)$ — count of rare events in fixed interval
- $P(X=k) = \frac{e^{-\lambda} \lambda^k}{k!}$, $k = 0, 1, 2, \ldots$
- $E[X] = \lambda$, $\text{Var}(X) = \lambda$
- Approximates $\text{Bin}(n, p)$ when $n$ large, $p$ small, $\lambda = np$

**Geometric:** $X \sim \text{Geom}(p)$ — number of trials until first success
- $P(X=k) = (1-p)^{k-1}p$, $k = 1, 2, 3, \ldots$
- $E[X] = 1/p$, $\text{Var}(X) = (1-p)/p^2$

**Negative Binomial:** $X \sim \text{NB}(r, p)$ — number of trials for $r$ successes
- $P(X=k) = \binom{k-1}{r-1} p^r (1-p)^{k-r}$, $k = r, r+1, \ldots$
- $E[X] = r/p$, $\text{Var}(X) = r(1-p)/p^2$

**Discrete Uniform:** $X \sim \text{Unif}\{1,2,\ldots,n\}$
- $P(X=k) = 1/n$
- $E[X] = (n+1)/2$, $\text{Var}(X) = (n^2-1)/12$

### 6.5 Continuous Random Variables

A **continuous random variable** has a **probability density function (PDF)** $f(x) \geq 0$ with $\int_{-\infty}^\infty f(x)\,dx = 1$.

$$P(a \leq X \leq b) = \int_a^b f(x)\,dx$$

**CDF:** $F(x) = P(X \leq x) = \int_{-\infty}^x f(t)\,dt$

**Expected Value:** $E[X] = \int_{-\infty}^\infty x f(x)\,dx$

**Variance:** $\text{Var}(X) = E[(X - \mu)^2] = \int_{-\infty}^\infty (x - \mu)^2 f(x)\,dx$

### 6.6 Standard Continuous Distributions

**Uniform:** $X \sim \text{Unif}(a,b)$
- $f(x) = \frac{1}{b-a}$, $a \leq x \leq b$
- $E[X] = (a+b)/2$, $\text{Var}(X) = (b-a)^2/12$

**Normal (Gaussian):** $X \sim N(\mu, \sigma^2)$
- $f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}$
- $E[X] = \mu$, $\text{Var}(X) = \sigma^2$
- **Standard Normal:** $Z = \frac{X-\mu}{\sigma} \sim N(0,1)$
- **68-95-99.7 Rule:** 68% within 1$\sigma$, 95% within 2$\sigma$, 99.7% within 3$\sigma$

**Exponential:** $X \sim \text{Exp}(\lambda)$ — time between events
- $f(x) = \lambda e^{-\lambda x}$, $x \geq 0$
- $E[X] = 1/\lambda$, $\text{Var}(X) = 1/\lambda^2$
- **Memoryless Property:** $P(X > s+t | X > s) = P(X > t)$

**Gamma:** $X \sim \text{Gamma}(\alpha, \beta)$ — sum of $\alpha$ independent Exp($\beta$) variables
- $f(x) = \frac{\beta^\alpha}{\Gamma(\alpha)} x^{\alpha-1} e^{-\beta x}$, $x \geq 0$
- $E[X] = \alpha/\beta$, $\text{Var}(X) = \alpha/\beta^2$

**Beta:** $X \sim \text{Beta}(\alpha, \beta)$ — distribution on $[0,1]$, conjugate prior for Bernoulli
- $f(x) = \frac{\Gamma(\alpha+\beta)}{\Gamma(\alpha)\Gamma(\beta)} x^{\alpha-1}(1-x)^{\beta-1}$, $0 \leq x \leq 1$
- $E[X] = \frac{\alpha}{\alpha+\beta}$

### 6.7 Joint Distributions

**Joint PMF/PDF:** $f_{X,Y}(x,y)$

**Marginal:** $f_X(x) = \int f_{X,Y}(x,y)\,dy$ (or sum for discrete)

**Conditional:** $f_{Y|X}(y|x) = \frac{f_{X,Y}(x,y)}{f_X(x)}$

**Independence:** $f_{X,Y}(x,y) = f_X(x) f_Y(y)$

**Covariance:** $\text{Cov}(X,Y) = E[(X - \mu_X)(Y - \mu_Y)] = E[XY] - \mu_X \mu_Y$

**Correlation Coefficient:** $\rho_{XY} = \frac{\text{Cov}(X,Y)}{\sigma_X \sigma_Y}$, where $-1 \leq \rho \leq 1$

**Properties:**
- $\text{Var}(X+Y) = \text{Var}(X) + \text{Var}(Y) + 2\text{Cov}(X,Y)$
- $\text{Cov}(aX+b, cY+d) = ac\,\text{Cov}(X,Y)$
- $\rho = \pm 1$ indicates perfect linear relationship

### 6.8 Functions of Random Variables

**Sum of Independent Variables:**
- $E[X+Y] = E[X] + E[Y]$
- $\text{Var}(X+Y) = \text{Var}(X) + \text{Var}(Y)$ (if independent)

**Moment Generating Function:** $M_X(t) = E[e^{tX}]$
- $E[X^n] = M_X^{(n)}(0)$
- $M_{X+Y}(t) = M_X(t) M_Y(t)$ for independent $X, Y$

**Characteristic Function:** $\phi_X(t) = E[e^{itX}]$ — always exists, generalizes MGF.

**Convolution:** The PDF of $Z = X + Y$ for independent continuous $X, Y$ is:

$$f_Z(z) = \int_{-\infty}^\infty f_X(x) f_Y(z-x)\,dx$$

### 6.9 Limit Theorems

**Law of Large Numbers (LLN):** As $n \to \infty$, the sample mean converges to the population mean:

$$\bar{X}_n = \frac{1}{n}\sum_{i=1}^n X_i \xrightarrow{p} \mu$$

- **Weak LLN:** Convergence in probability
- **Strong LLN:** Almost sure convergence ($P(\lim_{n\to\infty} \bar{X}_n = \mu) = 1$)

**Central Limit Theorem (CLT):** For i.i.d. $X_i$ with mean $\mu$ and variance $\sigma^2$:

$$\frac{\bar{X}_n - \mu}{\sigma/\sqrt{n}} \xrightarrow{d} N(0, 1)$$

This explains why the normal distribution appears everywhere in nature and statistics.

### 6.10 Sampling Distributions

**Chi-Square Distribution:** If $Z_1, \ldots, Z_k \sim N(0,1)$ independent:

$$X = \sum_{i=1}^k Z_i^2 \sim \chi^2(k)$$

Used in goodness-of-fit tests and variance estimation.

**$t$-Distribution:** If $Z \sim N(0,1)$ and $X \sim \chi^2(k)$ independent:

$$T = \frac{Z}{\sqrt{X/k}} \sim t(k)$$

Used for inference about mean when $\sigma$ is unknown. Approaches $N(0,1)$ as $k \to \infty$.

**$F$-Distribution:** If $X_1 \sim \chi^2(k_1)$ and $X_2 \sim \chi^2(k_2)$ independent:

$$F = \frac{X_1/k_1}{X_2/k_2} \sim F(k_1, k_2)$$

Used in ANOVA and comparing variances.

### 6.11 Point Estimation

**Estimator:** A statistic $\hat{\theta}$ used to estimate a population parameter $\theta$.

**Properties:**
- **Unbiased:** $E[\hat{\theta}] = \theta$
- **Consistent:** $\hat{\theta} \xrightarrow{p} \theta$ as $n \to \infty$
- **Efficient:** Minimum variance among unbiased estimators
- **MSE:** $E[(\hat{\theta} - \theta)^2] = \text{Bias}^2 + \text{Variance}$

**Maximum Likelihood Estimation (MLE):** Choose $\theta$ to maximize the likelihood function:

$$L(\theta | \mathbf{x}) = \prod_{i=1}^n f(x_i | \theta)$$

The MLE is consistent, asymptotically efficient, and asymptotically normal.

**Method of Moments:** Match sample moments to population moments and solve for $\theta$.

### 6.12 Confidence Intervals

**For Mean $\mu$ (known $\sigma$):**

$$\bar{x} \pm z_{\alpha/2} \cdot \frac{\sigma}{\sqrt{n}}$$

**For Mean $\mu$ (unknown $\sigma$):**

$$\bar{x} \pm t_{\alpha/2, n-1} \cdot \frac{s}{\sqrt{n}}$$

**For Proportion $p$:**

$$\hat{p} \pm z_{\alpha/2} \sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$$

**For Variance $\sigma^2$:**

$$\left(\frac{(n-1)s^2}{\chi^2_{\alpha/2, n-1}}, \frac{(n-1)s^2}{\chi^2_{1-\alpha/2, n-1}}\right)$$

### 6.13 Hypothesis Testing

**Null Hypothesis $H_0$:** Status quo claim.
**Alternative Hypothesis $H_1$:** The claim we want to support.

**Type I Error:** Reject $H_0$ when it's true (probability = $\alpha$ — significance level).
**Type II Error:** Fail to reject $H_0$ when it's false (probability = $\beta$).
**Power:** $1 - \beta$ — probability of correctly rejecting false $H_0$.

**$p$-value:** Probability of observing data as extreme as what we saw, assuming $H_0$ is true. Reject $H_0$ if $p < \alpha$.

**Test Statistics:**

| Scenario | Test Statistic | Distribution Under $H_0$ |
|----------|---------------|------------------------|
| One sample $z$-test (known $\sigma$) | $z = \frac{\bar{x} - \mu_0}{\sigma/\sqrt{n}}$ | $N(0,1)$ |
| One sample $t$-test (unknown $\sigma$) | $t = \frac{\bar{x} - \mu_0}{s/\sqrt{n}}$ | $t(n-1)$ |
| Two sample $t$-test (equal var) | $t = \frac{\bar{x}_1 - \bar{x}_2}{s_p\sqrt{1/n_1 + 1/n_2}}$ | $t(n_1+n_2-2)$ |
| Paired $t$-test | $t = \frac{\bar{d} - \mu_0}{s_d/\sqrt{n}}$ | $t(n-1)$ |
| One proportion $z$-test | $z = \frac{\hat{p} - p_0}{\sqrt{p_0(1-p_0)/n}}$ | $N(0,1)$ |
| Chi-square goodness-of-fit | $\chi^2 = \sum \frac{(O_i - E_i)^2}{E_i}$ | $\chi^2(k-1)$ |

### 6.14 Linear Regression

**Simple Linear Regression:**

$$Y_i = \beta_0 + \beta_1 X_i + \epsilon_i, \quad \epsilon_i \sim N(0, \sigma^2)$$

**Least Squares Estimates:**

$$\hat{\beta}_1 = \frac{\sum (X_i - \bar{X})(Y_i - \bar{Y})}{\sum (X_i - \bar{X})^2} = \frac{S_{xy}}{S_{xx}}$$
$$\hat{\beta}_0 = \bar{Y} - \hat{\beta}_1 \bar{X}$$

**Coefficient of Determination:** $R^2 = \frac{\text{SSR}}{\text{SST}} = 1 - \frac{\text{SSE}}{\text{SST}}$, ranging from 0 to 1.

$R^2$ measures the proportion of variance in $Y$ explained by $X$.

**Residual Analysis:** $\hat{\epsilon}_i = Y_i - \hat{Y}_i$ — should be approximately normal with constant variance.

**ANOVA for Regression:**

| Source | SS | df | MS | F |
|--------|-----|-----|------|-----|
| Regression | SSR | 1 | MSR | $F = \frac{MSR}{MSE}$ |
| Error (Residual) | SSE | $n-2$ | MSE | |
| Total | SST | $n-1$ | | |

### 6.15 Bayesian Statistics

**Prior Distribution:** $p(\theta)$ — our belief about $\theta$ before seeing data.

**Likelihood:** $p(D|\theta)$ — probability of data given $\theta$.

**Posterior Distribution (Bayes' Theorem):**

$$p(\theta|D) = \frac{p(D|\theta)p(\theta)}{p(D)} \propto p(D|\theta)p(\theta)$$

**Conjugate Priors:**

| Likelihood | Conjugate Prior | Posterior |
|------------|----------------|-----------|
| Bernoulli($p$) | Beta($\alpha,\beta$) | Beta($\alpha+\sum x_i, \beta+n-\sum x_i$) |
| Poisson($\lambda$) | Gamma($\alpha,\beta$) | Gamma($\alpha+\sum x_i, \beta+n$) |
| Normal($\mu,\sigma^2$) | Normal($\mu_0,\sigma_0^2$) | Normal($\mu_n, \sigma_n^2$) |

## Examples

### Example 1: Bayes' Theorem

A test for a disease is 99% accurate (true positive and true negative rates). The disease prevalence is 0.1%. If a person tests positive, what's the probability they actually have the disease?

**Solution:**

Let $D$ = has disease, $T$ = tests positive.

$P(D) = 0.001$, $P(T|D) = 0.99$, $P(T|D^c) = 0.01$

$$P(D|T) = \frac{P(T|D)P(D)}{P(T|D)P(D) + P(T|D^c)P(D^c)} = \frac{0.99 \times 0.001}{0.99 \times 0.001 + 0.01 \times 0.999} = \frac{0.00099}{0.00099 + 0.00999} \approx 0.09$$

Only 9%! This illustrates the **false positive paradox** — when prevalence is low, even accurate tests produce many false positives.

### Example 2: CLT in Action

A factory produces bolts with mean weight 50g and standard deviation 5g. A sample of 100 bolts is taken. What's the probability the sample mean exceeds 51g?

**Solution:**

By CLT, $\bar{X} \approx N(50, 5^2/100) = N(50, 0.25)$

$$P(\bar{X} > 51) = P\left(Z > \frac{51-50}{0.5}\right) = P(Z > 2) \approx 0.0228$$

### Example 3: Hypothesis Testing

A manufacturer claims their light bulbs last 1000 hours on average. A sample of 30 bulbs has mean 980 hours and standard deviation 60 hours. Test at $\alpha = 0.05$.

**Solution:**

$H_0: \mu = 1000$, $H_1: \mu \neq 1000$

Test statistic: $t = \frac{980 - 1000}{60/\sqrt{30}} = \frac{-20}{10.95} \approx -1.826$

Critical values for $t(29)$ at $\alpha = 0.05$ (two-tailed): $\pm 2.045$

Since $|-1.826| < 2.045$, we fail to reject $H_0$. Not enough evidence to dispute the claim.

## Summary

- Probability quantifies uncertainty via Kolmogorov's axioms
- Bayes' theorem provides a formal mechanism for updating beliefs with evidence
- Random variables map outcomes to numbers; distributions describe their behavior
- The CLT is why normal distributions appear throughout statistics
- Hypothesis testing provides a framework for evidence-based decisions
- Linear regression models relationships between variables
- Bayesian statistics incorporates prior knowledge

## Exercises

### Review Questions

1. State and prove Bayes' theorem
2. Explain the difference between a PDF and CDF
3. Why is the normal distribution so common in nature?
4. What assumptions does the CLT require?
5. Distinguish between Type I and Type II errors

### Application Problems

1. **Medical Testing:** A test has 95% sensitivity and 90% specificity. Disease prevalence is 2%. If a patient tests positive, what's the probability they have the disease?

2. **Confidence Interval:** A sample of 25 students has mean height 170cm with standard deviation 10cm. Find a 95% CI for the population mean.

3. **Regression:** Given data $(1,2), (2,3), (3,5), (4,4), (5,6)$, compute $\hat{\beta}_0$ and $\hat{\beta}_1$ and $R^2$.

4. **MLE:** Find the MLE for the parameter $\lambda$ of an exponential distribution given sample $x_1, \ldots, x_n$.

### Challenge Problem

**Benford's Law:** In many real datasets, the leading digit $d$ occurs with probability $P(d) = \log_{10}(1 + 1/d)$. Verify this is a valid probability distribution. Show that if $X \sim \text{Unif}(0,1)$, the leading digit of $10^X$ follows Benford's law.

## Notation Reference

| Symbol | Meaning |
|--------|---------|
| $P(E)$ | probability of event $E$ |
| $P(A|B)$ | conditional probability |
| $E[X]$ | expected value |
| $\text{Var}(X)$ | variance |
| $\text{Cov}(X,Y)$ | covariance |
| $\rho$ | correlation coefficient |
| $\sim$ | "distributed as" |
| $N(\mu,\sigma^2)$ | normal distribution |
| $\bar{X}$ | sample mean |
| $s$ | sample standard deviation |
| $\hat{\theta}$ | estimator |
| $\alpha$ | significance level |
| $p$-value | probability of extreme data under $H_0$ |
| $R^2$ | coefficient of determination |
