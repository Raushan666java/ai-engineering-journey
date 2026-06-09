# Chapter 9: Reasoning Under Uncertainty

## Learning Objectives

By the conclusion of this chapter, the student will be able to: (1) apply probability theory to represent uncertain knowledge; (2) construct and query Bayesian networks; (3) analyze conditional independence using d-separation; (4) implement exact and approximate inference in Bayesian networks; (5) model temporal processes using dynamic Bayesian networks and hidden Markov models.

## 9.1 Foundations of Probability

Probability theory provides the mathematical framework for reasoning under uncertainty. A **probability space** consists of a sample space $\Omega$, a set of events $\mathcal{E}$, and a probability measure $P: \mathcal{E} \to [0, 1]$ satisfying the Kolmogorov axioms:

1. $P(\omega) \geq 0$ for all $\omega \in \Omega$.
2. $P(\Omega) = 1$.
3. For countable disjoint events $E_1, E_2, \ldots$: $P(\bigcup_i E_i) = \sum_i P(E_i)$.

### 9.1.1 Conditional Probability and Bayes' Rule

The conditional probability of $A$ given $B$ is:

$$P(A \mid B) = \frac{P(A \land B)}{P(B)}, \quad P(B) > 0$$

**Bayes' rule** inverts conditional probabilities:

$$P(A \mid B) = \frac{P(B \mid A) \, P(A)}{P(B)}$$

For inference tasks, we compute the **posterior** probability of hypothesis $H$ given evidence $E$:

$$P(H \mid E) = \frac{P(E \mid H) \, P(H)}{P(E)}$$

The denominator normalizes: $P(E) = \sum_h P(E \mid h) P(h)$.

### 9.1.2 Independence

Two events $A$ and $B$ are independent if $P(A \land B) = P(A) P(B)$. Conditional independence, a weaker and more common condition, holds when:

$$P(A \land B \mid C) = P(A \mid C) P(B \mid C)$$

Conditional independence assumptions dramatically reduce the complexity of probabilistic models.

## 9.2 Bayesian Networks

A **Bayesian network** (BN) is a directed acyclic graph (DAG) representing a joint probability distribution. Nodes represent random variables; directed edges represent direct probabilistic dependencies.

A BN encodes the joint distribution via the chain rule:

$$P(X_1, X_2, \ldots, X_n) = \prod_{i=1}^n P(X_i \mid \text{Parents}(X_i))$$

Each node has an associated **conditional probability table (CPT)** specifying $P(X_i \mid \text{Parents}(X_i))$.

**Example: Alarm Network (Pearl, 1988):**
Burglary and Earthquake cause Alarm, which triggers calls from John and Mary. The joint distribution factors as:

$$P(B, E, A, J, M) = P(B) P(E) P(A \mid B, E) P(J \mid A) P(M \mid A)$$

A BN with $n \) nodes, each with at most $k$ parents and $d$ values, requires at most $n d^{k+1}$ parameters -- a dramatic reduction from the full $d^n$ joint table.

## 9.3 Inference in Bayesian Networks

### 9.3.1 Exact Inference

**Variable elimination (VE)** computes posterior probabilities by summing out irrelevant variables. The algorithm processes variables in an elimination order, multiplying factors and summing out variables not needed for the query.

```
function VARIABLE-ELIMINATION(BN, query, evidence) returns distribution
    factors ← all CPTs from BN
    for each variable not in query ∪ evidence do
        eliminate variable by summing over its factors
    multiply remaining factors and normalize
    return resulting distribution
```

Complexity is exponential in the treewidth of the network (the size of the largest factor created during elimination).

### 9.3.2 Approximate Inference via Sampling

**Direct sampling:** Generate samples from the prior distribution. Weight by evidence likelihood.

**Rejection sampling:** Generate samples from the prior, reject those inconsistent with evidence. Inefficient when evidence is rare.

**Likelihood weighting:** Fix evidence variables to observed values, sample remaining variables weighted by the probability of evidence given sampled ancestors.

```
function LIKELIHOOD-WEIGHTING(BN, query, evidence, N) returns estimate
    weights ← array of size N
    for j = 1 to N do
        w ← 1.0
        for each variable X_i in topological order do
            if X_i is evidence variable then
                w ← w × P(X_i = e_i | parents(X_i))
            else
                x_i ← sample from P(X_i | parents(X_i))
        weights[j] ← w
    return NORMALIZED-WEIGHTED-ESTIMATE(query, weights)
```

**Gibbs sampling (MCMC):** Resample each non-evidence variable conditioned on its Markov blanket (parents, children, co-parents). Converges to the true posterior as sample size increases.

## 9.4 d-Separation

**d-separation** determines conditional independence relations in a BN. A path between nodes $X$ and $Y$ is **blocked** by evidence set $\mathcal{Z}$ if:

- On a chain ($X \to Z \to Y$ or $X \leftarrow Z \leftarrow Y$): $Z \in \mathcal{Z}$.
- On a fork ($X \leftarrow Z \to Y$): $Z \in \mathcal{Z}$.
- On a collider ($X \to Z \leftarrow Y$): $Z \notin \mathcal{Z}$ and no descendant of $Z$ is in $\mathcal{Z}$.

$X$ and $Y$ are d-separated by $\mathcal{Z}$ if every path between them is blocked.

## 9.5 Dynamic Bayesian Networks

A **Dynamic Bayesian Network (DBN)** models temporal processes by replicating a BN template across time slices. The transition model $P(X_t \mid X_{t-1})$ and sensor model $P(E_t \mid X_t)$ define the dynamics. The **Markov assumption** states that $X_t$ depends only on $X_{t-1}$ (first-order Markov).

## 9.6 Hidden Markov Models

A **Hidden Markov Model (HMM)** is a DBN with a single discrete state variable and a single discrete observation variable. The HMM is defined by:

- **Initial distribution:** $\pi_i = P(X_1 = i)$
- **Transition matrix:** $T_{ij} = P(X_{t+1} = j \mid X_t = i)$
- **Emission matrix:** $E_{ik} = P(E_t = k \mid X_t = i)$

The HMM representation requires $O(n^2)$ parameters and supports $O(n^2)$ inference per time step, where $n$ is the number of states.

## 9.7 Summary

Bayesian networks provide a compact graphical representation of joint probability distributions. Exact inference via variable elimination is efficient for low-treewidth networks; approximate methods scale to larger networks. Temporal models extend static BNs to sequential domains.

## Exercises

### Review Questions

1. Prove Bayes' rule from the definition of conditional probability.
2. Explain d-separation. Why are colliders different from chains and forks?
3. Compare rejection sampling and likelihood weighting. When does each perform well?

### Application Problems

4. Construct a Bayesian network for a medical diagnosis domain with 5 diseases and 8 symptoms. Define CPTs and compute the posterior probability of each disease given a symptom set using variable elimination.
5. Implement a Hidden Markov Model for part-of-speech tagging with 10 tags. Use the Viterbi algorithm to find the most likely tag sequence for a 5-word sentence.

### Challenge Problem

6. Implement Gibbs sampling for the Alarm Bayesian network. Compare convergence speed and accuracy against exact inference. How many samples are required to achieve within 1% error on posterior probabilities?
