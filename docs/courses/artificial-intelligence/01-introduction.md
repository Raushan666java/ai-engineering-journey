# Chapter 1: Introduction to Artificial Intelligence

---

## Learning Objectives

- Define Artificial Intelligence from four different perspectives: thinking humanly, thinking rationally, acting humanly, and acting rationally.
- Trace the historical development of AI from its philosophical roots to modern computational systems.
- Identify the core subfields of AI and their primary research goals.
- Evaluate the Turing Test and its implications for machine intelligence.
- Discuss the ethical considerations and potential societal impacts of advanced AI systems.

---

## Theory

### Defining Artificial Intelligence
Artificial Intelligence (AI) is a multidisciplinary field aimed at creating systems capable of performing tasks that typically require human intelligence. Definitions often fall into four categories:
1. **Acting Humanly**: The Turing Test approach, where a machine is intelligent if a human cannot distinguish it from another human during conversation.
2. **Thinking Humanly**: The cognitive modeling approach, focusing on machines that mimic human thought processes and decision-making.
3. **Thinking Rationally**: The "laws of thought" approach, using logic to represent and solve problems correctly.
4. **Acting Rationally**: The rational agent approach, where an agent acts to achieve the best outcome or best expected outcome.

### Foundations of AI
The field of AI is built upon several foundational disciplines:
- **Philosophy**: Addressing questions of mind, matter, and the nature of knowledge.
- **Mathematics**: Providing the tools for formal logic, probability, and computation theory.
- **Economics**: Introducing concepts of utility and decision theory for rational choice.
- **Neuroscience**: Offering insights into the biological hardware of intelligence.
- **Computer Engineering**: Creating the physical platforms required to run AI algorithms.

### A Brief History of AI
AI has progressed through several distinct phases:
- **The Gestation Period (1943-1955)**: Early work by McCulloch, Pitts, and Turing on neural networks and computation.
- **The Birth of AI (1956)**: The Dartmouth workshop, where the term "Artificial Intelligence" was coined.
- **Early Enthusiasm and Expectations (1952-1969)**: Successes in symbolic AI and simple problem solvers.
- **A Dose of Reality (1966-1973)**: Recognition of the difficulty of natural language processing and combinatorial explosions.
- **Expert Systems (1969-1988)**: The rise of knowledge-based systems in specific domains.
- **The Modern Era (1987-Present)**: Shift toward scientific rigor, big data, and statistical machine learning.

---

## Examples

### Example 1: The Turing Test
The Turing Test is a classic measure of machine intelligence.
- **Step-by-step**: A human interrogator communicates with a human and a machine via text. If the interrogator cannot reliably identify the machine, it is said to have passed.
- **Implication**: This test focuses on behavioral intelligence rather than internal consciousness.
- **What it demonstrates**: The "Acting Humanly" perspective of AI.

### Example 2: Symbolic Problem Solving
Consider a system designed to solve basic logic puzzles.
- **Step-by-step**: The system is given facts (e.g., "All humans are mortal") and a premise (e.g., "Socrates is a human"). It uses deduction rules to reach a conclusion.
- **Code snippet (Conceptual Python-like logic)**:
```python
def deduce(fact, premise):
    if premise in fact['subject']:
        return f"{premise} {fact['attribute']}"

fact = {'subject': 'human', 'attribute': 'is mortal'}
premise = 'Socrates'
print(deduce(fact, premise))
```
- **Expected output**: `Socrates is mortal`
- **What it demonstrates**: The "Thinking Rationally" perspective using symbolic logic.

---

## Summary

- Artificial Intelligence can be defined through the lenses of thinking or acting, and doing so humanly or rationally.
- The field is deeply rooted in philosophy, mathematics, and computer science.
- AI has shifted from early symbolic "Good Old Fashioned AI" (GOFAI) to modern statistical approaches.
- The rational agent approach is the dominant paradigm in modern AI research.
- Ethics and safety are increasingly central to the development of autonomous systems.
- Success in AI often involves bridging the gap between formal logic and probabilistic uncertainty.

---

## Exercises

### Review Questions
1. Explain the difference between "strong AI" and "weak AI."
2. Why is the Turing Test considered a controversial metric for intelligence?
3. List three foundational disciplines of AI and describe their contributions.
4. What was the significance of the 1956 Dartmouth workshop?

### Application Problems
1. Categorize a modern self-driving car system into one of the four definitions of AI.
2. Identify a task that was once considered AI but is now considered standard computation (the "AI Effect").
3. Compare symbolic AI with connectionist AI (neural networks) in terms of transparency.

### Challenge Problem
1. Propose an alternative to the Turing Test that accounts for multi-modal intelligence (vision, sound, and physical interaction) and explain why it provides a better measure of a "rational agent."
