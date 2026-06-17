# Chapter 13: Discrete Probability

## Learning Objectives

![Discrete Probability Overview](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/discrete-mathematics/13-probability.png)

After completing this chapter, you will be able to:

- Define probability spaces and compute probabilities of events
- Apply conditional probability and Bayes' theorem
- Determine independence of events
- Compute expected value and variance of discrete random variables
- Solve problems using binomial, geometric, and other discrete distributions

## Theory

### 13.1 Probability Spaces

A **finite probability space** consists of a finite **sample space** $S$ and a **probability function** $P: S \rightarrow [0,1]$ such that $\sum_{s \in S} P(s) = 1$.

An **event** $E \subseteq S$ has probability $P(E) = \sum_{s \in E} P(s)$.

**Uniform distribution:** if all outcomes are equally likely, then $P(E) = |E| / |S|$.

### 13.2 Axioms of Probability

Let $P$ be a probability function on sample space $S$:
1. $P(E) \geq 0$ for any event $E$.
2. $P(S) = 1$.
3. If $E \cap F = \emptyset$, then $P(E \cup F) = P(E) + P(F)$ (additivity for disjoint events).

**Theorem 13.1 (Properties).**
- $P(\emptyset) = 0$.
- $P(\overline{E}) = 1 - P(E)$.
- $P(E \cup F) = P(E) + P(F) - P(E \cap F)$ (inclusion-exclusion).
- If $E \subseteq F$, then $P(E) \leq P(F)$.

### 13.3 Conditional Probability

The **conditional probability** of $E$ given $F$ is:
$$P(E \mid F) = \frac{P(E \cap F)}{P(F)}$$
provided $P(F) > 0$.

**Theorem 13.2 (Multiplication rule).** $P(E \cap F) = P(F) \cdot P(E \mid F) = P(E) \cdot P(F \mid E)$.

### 13.4 Independence

Events $E$ and $F$ are **independent** iff $P(E \cap F) = P(E) P(F)$. Equivalently, $P(E \mid F) = P(E)$ and $P(F \mid E) = P(F)$ (assuming nonzero probability).

$n$ events are **mutually independent** if for every subset, the probability of the intersection equals the product of the individual probabilities.

### 13.5 Bayes' Theorem

**Theorem 13.3 (Law of Total Probability).** If $F_1, F_2, \ldots, F_n$ partition $S$ and each $P(F_i) > 0$, then:
$$P(E) = \sum_{i=1}^{n} P(E \mid F_i) P(F_i)$$

**Theorem 13.4 (Bayes' Theorem).**
$$P(F_k \mid E) = \frac{P(E \mid F_k) P(F_k)}{\sum_{i=1}^{n} P(E \mid F_i) P(F_i)}$$

### 13.6 Random Variables

A **random variable** $X$ is a function $X: S \rightarrow \mathbb{R}$.

The **probability mass function** (PMF) is $p(a) = P(X = a)$.

**Theorem 13.5 (Expected value).** $E[X] = \sum_{a} a \cdot P(X = a)$.

**Linearity of expectation:** $E[aX + bY + c] = aE[X] + bE[Y] + c$ for any random variables $X, Y$ and constants $a, b, c$.

**Theorem 13.6 (Variance).** $\text{Var}(X) = E[(X - \mu)^2] = E[X^2] - (E[X])^2$, where $\mu = E[X]$.

**Standard deviation:** $\sigma_X = \sqrt{\text{Var}(X)}$.

### 13.7 Important Discrete Distributions

**Bernoulli($p$):** $P(X=1) = p$, $P(X=0) = 1-p$. $E[X] = p$, $\text{Var}(X) = p(1-p)$.

**Binomial($n, p$):** number of successes in $n$ independent Bernoulli($p$) trials.
$$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$$
$E[X] = np$, $\text{Var}(X) = np(1-p)$.

**Geometric($p$):** number of trials until first success.
$$P(X = k) = (1-p)^{k-1} p$$
$E[X] = 1/p$, $\text{Var}(X) = (1-p)/p^2$.

**Poisson($\lambda$):** approximates binomial when $n$ large, $p$ small.
$$P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!}$$
$E[X] = \lambda$, $\text{Var}(X) = \lambda$.

### 13.8 Probabilistic Method

The **probabilistic method** proves existence of objects by showing that a random construction succeeds with positive probability. Classic example: lower bounds on Ramsey numbers.

## Examples

**Example 13.1** (Simple probability). Roll two fair dice. Probability that sum is 7?

*Solution.* $|S| = 36$. Favorable outcomes: $\{(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)\}$ — 6 outcomes. $P = 6/36 = 1/6$.

**Example 13.2** (Conditional probability). In a population, 1% have a disease. A test detects it with 99% accuracy (true positive), but has 2% false positive rate. If a person tests positive, what is the probability they have the disease?

*Solution.* Let $D$ = has disease, $T$ = tests positive.
$P(D) = 0.01$, $P(T \mid D) = 0.99$, $P(T \mid \overline{D}) = 0.02$.
$$P(D \mid T) = \frac{P(T \mid D) P(D)}{P(T \mid D) P(D) + P(T \mid \overline{D}) P(\overline{D})} = \frac{0.99 \cdot 0.01}{0.99 \cdot 0.01 + 0.02 \cdot 0.99} \approx 0.333$$

Only about 33% — illustrating the base rate fallacy.

**Example 13.3** (Expectation). A fair die is rolled. Expected value?

$E[X] = 1\cdot\frac{1}{6} + 2\cdot\frac{1}{6} + \cdots + 6\cdot\frac{1}{6} = 3.5$.

**Example 13.4** (Linearity of expectation). What is the expected number of heads in 10 fair coin flips?

*Solution.* Let $X_i$ be indicator for heads on flip $i$ ($X_i = 1$ with prob $1/2$). $E[X_i] = 1/2$. Total heads $H = \sum X_i$. By linearity: $E[H] = \sum E[X_i] = 10 \cdot 1/2 = 5$.

**Example 13.5** (Binomial distribution). What is the probability of exactly 3 heads in 5 flips of a fair coin?

*Solution.* $P(X = 3) = \binom{5}{3} (0.5)^3 (0.5)^2 = 10 \cdot 0.125 \cdot 0.25 = 0.3125$.

**Example 13.6** (Probabilistic method). Show that any graph with $n$ vertices and $m$ edges has an independent set of size at least $n^2/(4m)$.

*Sketch.* Randomly order vertices and take the set of vertices that appear before all their neighbors. The expected size of this set is the sum over vertices of $1/(\deg(v)+1)$, which is at least $n^2/(4m)$ by convexity.

## Summary

- Probability measures likelihood on a $[0,1]$ scale; axioms govern its behavior.
- Conditional probability updates beliefs given evidence.
- Bayes' theorem reverses conditionals.
- Expected value is the weighted average; variance measures spread.
- Binomial, geometric, and Poisson distributions model common discrete scenarios.

## Exercises

### Review Questions

1. State the law of total probability.
2. What does $P(E \mid F) = P(E)$ imply?
3. Compute the variance of a Bernoulli($p$) random variable.
4. What is $\text{Var}(aX + b)$ for constant $a, b$?
5. When does the Poisson distribution approximate the binomial?

### Application Problems

6. A fair coin is tossed 4 times. What is the probability of at least 2 heads?

7. Two cards are drawn without replacement from a standard deck. What is the probability both are aces?

8. A test for a rare disease is 95% accurate (true positive and true negative). The disease occurs in 0.5% of the population. If a person tests positive, what is the probability they have the disease?

9. Let $X$ have PMF $P(X = k) = \frac{1}{8}$ for $k = 1, 2, \ldots, 8$. Compute $E[X]$, $\text{Var}(X)$, and $E[X^2]$.

10. A random variable $X$ follows Binomial($100, 0.2$). Compute $P(X \leq 1)$.

### Challenge Problem

11. The **birthday problem**: In a group of $n$ people, what is the probability that at least two share a birthday? (Assume 365 days, equally likely.)
    (a) Derive the formula $P(\text{collision}) = 1 - \frac{365!}{(365-n)! \cdot 365^n}$.
    (b) Compute the minimum $n$ such that $P(\text{collision}) > 1/2$ (approximately 23 — verify).
    (c) Generalize: how many people needed for a 99% probability?
