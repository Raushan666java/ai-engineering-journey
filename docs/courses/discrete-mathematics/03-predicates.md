# Chapter 3: Predicates and Quantifiers

## Learning Objectives

![Predicates and Quantifiers Overview](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/discrete-mathematics/03-predicates.png)

After completing this chapter, you will be able to:

- Define predicates and their truth sets
- Use universal ($\forall$) and existential ($\exists$) quantifiers
- Translate between English statements and quantified logical expressions
- Negate quantified statements correctly
- Handle nested quantifiers
- Determine the truth value of quantified statements over different domains

## Theory

### 3.1 Predicates

A **predicate** $P(x)$ is a statement whose truth depends on the value of the variable $x$. The domain of $x$ is the set of values it may take. Once $x$ is assigned a specific value, $P(x)$ becomes a proposition.

Example: $P(x)$ = "$x$ is prime". When $x = 2$, $P(2)$ is true; when $x = 4$, $P(4)$ is false.

The **truth set** of a predicate $P(x)$ over domain $D$ is:
$$\{x \in D \mid P(x)\}$$

### 3.2 Quantifiers

**Universal quantifier:** $\forall x\; P(x)$ means "$P(x)$ is true for all $x$ in the domain."

**Existential quantifier:** $\exists x\; P(x)$ means "there exists at least one $x$ in the domain such that $P(x)$ is true."

| Statement | True when | False when |
|-----------|-----------|------------|
| $\forall x\; P(x)$ | $P(x)$ true for every element | at least one counterexample |
| $\exists x\; P(x)$ | at least one element makes $P(x)$ true | $P(x)$ false for all elements |

### 3.3 Translation between English and Logic

English often uses implicit quantifiers. Careful translation requires identifying the domain and quantifier type.

- "All cats are mammals": $\forall x\;(\text{Cat}(x) \rightarrow \text{Mammal}(x))$
- "Some cats are black": $\exists x\;(\text{Cat}(x) \land \text{Black}(x))$
- "No cats are fish": $\forall x\;(\text{Cat}(x) \rightarrow \neg\text{Fish}(x))$ or $\neg\exists x\;(\text{Cat}(x) \land \text{Fish}(x))$

Note the pattern: "all" uses $\rightarrow$; "some" uses $\land$.

### 3.4 Negating Quantified Statements

**Theorem 3.1 (Quantifier Negation).**
$$\neg \forall x\; P(x) \equiv \exists x\; \neg P(x)$$
$$\neg \exists x\; P(x) \equiv \forall x\; \neg P(x)$$

In words: the negation of "all are true" is "at least one is false". The negation of "some are true" is "none are true".

### 3.5 Nested Quantifiers

When quantifiers appear within each other, order matters.

| Statement | Meaning |
|-----------|---------|
| $\forall x\; \forall y\; P(x,y)$ | $P(x,y)$ holds for all pairs |
| $\forall x\; \exists y\; P(x,y)$ | For every $x$, there exists some $y$ (may depend on $x$) |
| $\exists x\; \forall y\; P(x,y)$ | There exists an $x$ that works for all $y$ |
| $\exists x\; \exists y\; P(x,y)$ | There exists a pair $(x,y)$ satisfying $P$ |

**Important:** $\forall x\; \exists y\; P(x,y)$ and $\exists y\; \forall x\; P(x,y)$ are **not** equivalent.

### 3.6 Negating Nested Quantifiers

Apply quantifier negation rules sequentially, from left to right:

$$\neg \forall x\; \exists y\; P(x,y) \equiv \exists x\; \neg \exists y\; P(x,y) \equiv \exists x\; \forall y\; \neg P(x,y)$$

### 3.7 Validity of Arguments with Quantifiers

An argument form with quantifiers is **valid** iff whenever all premises are true, the conclusion is also true. Inference rules for quantifiers include:

- **Universal instantiation:** $\forall x\; P(x) \implies P(c)$ for any particular $c$
- **Universal generalization:** $P(c)$ for arbitrary $c \implies \forall x\; P(x)$
- **Existential instantiation:** $\exists x\; P(x) \implies P(c)$ for some new $c$
- **Existential generalization:** $P(c) \implies \exists x\; P(x)$

## Examples

**Example 3.1** (Truth value). Let domain be $\mathbb{Z}$. Determine truth:

- $\forall x\; (x^2 \geq 0)$: True â€” squares of integers are nonnegative.
- $\exists x\; (x^2 = 2)$: False â€” no integer squares to 2.
- $\forall x\; \exists y\; (y = x^2)$: True â€” for each $x$, we can choose $y = x^2$.
- $\exists y\; \forall x\; (y = x^2)$: False â€” no single integer equals all squares.

**Example 3.2** (Translation). Translate "Every student in this class has taken exactly one math course."

Let $S(x)$ = "$x$ is a student in this class", $M(x,y)$ = "$x$ has taken math course $y$". Then:
$$\forall x\; \big(S(x) \rightarrow \exists y\; (M(x,y) \land \forall z\; (M(x,z) \rightarrow z = y))\big)$$

**Example 3.3** (Negation). Negate "All prime numbers are odd."

*Solution.* Let domain be $\mathbb{Z}^+$, $P(x)$ = "$x$ is prime", $O(x)$ = "$x$ is odd". The statement is $\forall x\; (P(x) \rightarrow O(x))$. Negation:
$$\neg \forall x\; (P(x) \rightarrow O(x)) \equiv \exists x\; \neg(P(x) \rightarrow O(x)) \equiv \exists x\; (P(x) \land \neg O(x))$$
So the negation is "There exists a prime number that is even."

**Example 3.4** (Nested negation). Negate $\forall x\; \exists y\; \forall z\; P(x,y,z)$.

*Solution.* Move negation inward step by step:
$$\neg \forall x\; \exists y\; \forall z\; P(x,y,z)$$
$$\equiv \exists x\; \neg \exists y\; \forall z\; P(x,y,z)$$
$$\equiv \exists x\; \forall y\; \neg \forall z\; P(x,y,z)$$
$$\equiv \exists x\; \forall y\; \exists z\; \neg P(x,y,z)$$

**Example 3.5** (Validity). Determine whether the argument is valid:

Premises:
1. $\forall x\; (P(x) \rightarrow Q(x))$
2. $\forall x\; (Q(x) \rightarrow R(x))$

Conclusion: $\forall x\; (P(x) \rightarrow R(x))$

*Solution.* Pick an arbitrary element $c$. From (1), $P(c) \rightarrow Q(c)$. From (2), $Q(c) \rightarrow R(c)$. By hypothetical syllogism (transitivity of implication), $P(c) \rightarrow R(c)$. Since $c$ was arbitrary, $\forall x\; (P(x) \rightarrow R(x))$ holds. Valid.

## Summary

- Predicates are statements that depend on variables. Quantifiers $\forall$ and $\exists$ bind variables.
- $\neg \forall x\; P(x) \equiv \exists x\; \neg P(x)$ and $\neg \exists x\; P(x) \equiv \forall x\; \neg P(x)$.
- Nested quantifier order matters; negate from left to right.
- Translation between English and logic requires careful choice of $\rightarrow$ vs $\land$.

## Exercises

### Review Questions

1. Express "there exists a unique $x$ such that $P(x)$" using quantifiers.
2. Negate $\forall x\; \exists y\; (x + y = 0)$ over $\mathbb{Z}$.
3. Write "Every CS major has taken a math course" in predicate logic.
4. Is $\exists x\; \forall y\; P(x,y)$ equivalent to $\forall y\; \exists x\; P(x,y)$? Explain with a counterexample.
5. What is the domain if $\forall x\; (x > 0)$ is false?

### Application Problems

6. Translate and then negate: "There is a student who has emailed every professor."

7. Let domain be $\mathbb{R}$. Determine truth values:
   (a) $\forall x\; \exists y\; (x + y = 0)$
   (b) $\exists y\; \forall x\; (x + y = 0)$
   (c) $\forall x\; \forall y\; (x^2 + y^2 \geq 0)$

8. Negate: $\forall x\; \forall y\; \big((P(x) \land P(y)) \rightarrow x = y\big)$ (this states "at most one" element satisfies $P$).

9. Show that $\exists x\; \forall y\; P(x,y) \implies \forall y\; \exists x\; P(x,y)$ is logically true, but the converse is not.

10. Express "There exist at least two elements satisfying $P(x)$" and "There exist at most two elements satisfying $P(x)$" using quantifiers.

### Challenge Problem

11. Define the **uniqueness quantifier** $\exists!x\; P(x)$ meaning "there exists exactly one $x$ satisfying $P(x)$." Express $\exists!x\; P(x)$ using only $\forall$, $\exists$, $\land$, $\rightarrow$, $=$ and $P(x)$. Then negate the expression and simplify.
