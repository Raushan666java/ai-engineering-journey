# Chapter 8: Uncertainty and Probabilistic Reasoning

---

## Learning Objectives

- Explain why agents must handle uncertainty and the role of probability theory in doing so.
- Define the basics of probability: joint distributions, conditional probability, and Bayes' Rule.
- Construct and interpret Bayesian Networks as a representation of probabilistic relationships.
- Perform inference in Bayesian Networks using exact methods like Variable Elimination.
- Understand the concept of independence and conditional independence.

---

## Theory

![Uncertainty and Probabilistic Reasoning](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/artificial-intelligence/ch08-uncertainty.png)

### The Problem of Uncertainty
In real-world environments, agents rarely have access to the complete state of the world. Uncertainty arises from:
- **Partial Observability**: Missing information.
- **Stochasticity**: Randomness in outcomes.
- **Ignorance**: Incomplete models of the world.

### Probability Basics
- **Random Variable**: A variable whose value is subject to variations due to chance (e.g., $Weather \in \{Sunny, Rainy\}$).
- **Joint Probability Distribution**: Specifies the probability of every possible combination of values for a set of random variables.
- **Conditional Probability $P(A|B)$**: The probability of $A$ given that $B$ is known. $P(A|B) = \frac{P(A \wedge B)}{P(B)}$.
- **Bayes' Rule**: $P(A|B) = \frac{P(B|A)P(A)}{P(B)}$. This is essential for diagnostic reasoning (finding the cause given the effect).

### Bayesian Networks
A Bayesian Network is a directed acyclic graph (DAG) where:
- **Nodes** represent random variables.
- **Edges** represent direct influence (parent to child).
- Each node has a **Conditional Probability Table (CPT)** that quantifies the effect of its parents.

The full joint distribution is defined as: $P(x_1, ..., x_n) = \prod_{i=1}^{n} P(x_i | parents(X_i))$.

---

## Examples

### Example 1: Applying Bayes' Rule
A doctor knows that meningitis causes a stiff neck 50% of the time. The prior probability of meningitis is 1/50,000, and the prior probability of a stiff neck is 1/20.
- **Variables**: $M$ (Meningitis), $S$ (Stiff Neck).
- **Given**: $P(S|M) = 0.5$, $P(M) = 0.00002$, $P(S) = 0.05$.
- **Goal**: Find $P(M|S)$.
- **Calculation**: $P(M|S) = \frac{P(S|M)P(M)}{P(S)} = \frac{0.5 \times 0.00002}{0.05} = 0.0002$.
- **What it demonstrates**: Even if a symptom is strongly associated with a disease, the probability of the disease might still be low if the disease itself is rare.

### Example 2: The Burglary Alarm Network
A simple Bayesian Network with nodes: Burglary (B), Earthquake (E), Alarm (A), JohnCalls (J), MaryCalls (M).
- **Structure**: B and E are parents of A. A is the parent of J and M.
- **Inference**: Find the probability of a Burglary given that Mary called ($P(B|m)$).
- **Code snippet (Conceptual Inference)**:
```python
def calculate_joint_prob(b, e, a, j, m, network):
    p_b = network['B'].prob(b)
    p_e = network['E'].prob(e)
    p_a = network['A'].prob(a, parents={'B': b, 'E': e})
    p_j = network['J'].prob(j, parents={'A': a})
    p_m = network['M'].prob(m, parents={'A': a})
    return p_b * p_e * p_a * p_j * p_m
```
- **What it demonstrates**: How the network structure factorizes the joint distribution into smaller, manageable CPTs.

---

## Summary

- Probability theory provides a formal framework for reasoning under uncertainty.
- Bayes' Rule is a fundamental tool for updating beliefs based on new evidence.
- Bayesian Networks capture dependencies and independencies between variables compactly.
- The semantics of a Bayesian Network allow us to calculate any entry in the joint distribution.
- Exact inference (like Variable Elimination) is powerful but can be NP-hard in general networks.
- Conditional independence allows for significant reductions in the number of parameters needed to define a model.

---

## Exercises

### Review Questions
1. Why is a full joint probability distribution usually impractical to store?
2. Explain the difference between prior probability and posterior probability.
3. What does it mean for two variables to be "conditionally independent"?
4. In a Bayesian Network, what information is contained in a node's CPT?

### Application Problems
1. Suppose you have two coins: one fair and one double-headed. You pick one at random and flip it. It comes up heads. What is the probability that you picked the double-headed coin?
2. Draw the Bayesian Network for this scenario: A car's engine won't start if the battery is dead or if the fuel tank is empty. The headlights will only work if the battery is not dead.
3. Calculate the number of independent parameters needed for a joint distribution of 5 boolean variables versus a Bayesian Network where each node has at most 2 parents.

### Challenge Problem
1. **D-Separation**: Explain the rules of d-separation in Bayesian Networks. Given a path between two nodes, how do you determine if the path is "blocked" given a set of observed evidence nodes?
