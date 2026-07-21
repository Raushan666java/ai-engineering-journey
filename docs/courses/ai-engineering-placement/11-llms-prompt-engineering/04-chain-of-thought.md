# Chain-of-Thought Prompting

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand the chain-of-thought (CoT) reasoning paradigm and its benefits |
| LO2 | Implement zero-shot CoT using the "Let's think step by step" technique |
| LO3 | Apply few-shot CoT with step-by-step reasoning examples |
| LO4 | Use self-consistency to improve CoT accuracy through multiple sampling |
| LO5 | Explore tree-of-thought (ToT) for complex reasoning tasks |
| LO6 | Evaluate CoT performance across math, logic, and commonsense tasks |

## Introduction

Understanding chain of thought is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering chain of thought.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 4.1 | What is Chain-of-Thought | Step-by-step reasoning, intermediate steps |
| 4.2 | Zero-Shot CoT | The "Let's think step by step" trigger |
| 4.3 | Few-Shot CoT | Demonstrating reasoning with examples |
| 4.4 | Self-Consistency | Multiple paths, majority voting |
| 4.5 | Tree-of-Thought | Branching exploration of reasoning paths |
| 4.6 | CoT Evaluation | Accuracy, faithfulness, efficiency |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Problem] --> B[Zero-Shot CoT]
    A --> C[Few-Shot CoT]
    A --> D[Tree-of-Thought]
    B --> E[Step-by-Step Reasoning]
    C --> E
    D --> F[Branching Paths]
    E --> G[Multiple Samples]
    F --> G
    G --> H[Self-Consistency Voting]
    H --> I[Final Answer]
```text

## 4.1 What is Chain-of-Thought

Chain-of-thought (CoT) prompting elicits step-by-step reasoning from LLMs by instructing them to show intermediate reasoning steps before producing the final answer. Introduced by Wei et al. (2022), CoT significantly improves performance on tasks requiring multi-step reasoning, especially in math, logic, and commonsense domains.

**Why CoT works**:
- Breaks complex problems into manageable intermediate steps
- Allows the model to "show its work" for verification
- Reduces error propagation compared to direct answers
- Leverages the model's ability to generate coherent sequences

```python
from openai import OpenAI
client = OpenAI()

direct = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "user", "content": "If a store sells apples at $2 each and oranges at $3 each, and I buy 5 apples and 3 oranges, how much do I pay in total?"}
    ],
    temperature=0
)
print("Direct:", direct.choices[0].message.content)

cot = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "Think step by step before answering. Show your reasoning."},
        {"role": "user", "content": "If a store sells apples at $2 each and oranges at $3 each, and I buy 5 apples and 3 oranges, how much do I pay in total?"}
    ],
    temperature=0
)
print("CoT:", cot.choices[0].message.content)
```text

**The CoT process** follows a reasoning chain:

```python
def chain_of_thought(question, client):
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "You are a math tutor. Solve step by step, then give the final answer."},
            {"role": "user", "content": question}
        ],
        temperature=0
    )
    return response.choices[0].message.content

questions = [
    "John has 12 apples. He gives 1/3 to Mary and then eats 2. Left?",
    "Train at 60 mph for 2 hours, then 80 mph for 1.5 hours. Distance?",
    "3 workers build a wall in 8 hours. Time for 6 workers?"
]
for q in questions:
    print(f"Q: {q}\nA: {chain_of_thought(q, client)}\n")
```text

```mermaid
flowchart TD
    A[Input Problem] --> B[Step 1: Parse]
    B --> C[Step 2: Identify knowns]
    C --> D[Step 3: First operation]
    D --> E[Step 4: Next operation]
    E --> F[Step N: Compute]
    F --> G[Step N+1: Verify]
    G --> H[Final Answer]
```text

---

## 4.2 Zero-Shot CoT

Zero-shot CoT triggers reasoning by simply adding "Let's think step by step".

```python
def zero_shot_cot(question, client):
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": f"{question}\n\nLet's think step by step."}],
        temperature=0
    )
    return response.choices[0].message.content

questions = [
    "A bat and a ball cost $1.10. The bat costs $1.00 more. How much is the ball?",
    "If 5 machines take 5 min for 5 widgets, time for 100 machines for 100 widgets?"
]
for q in questions:
    print(f"Q: {q}\nA: {zero_shot_cot(q, client)}\n")
```text

**Extracting the final answer**:

```python
import re

def zero_shot_cot_with_answer(question, client):
    text = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": f"{question}\n\nLet's think step by step."}],
        temperature=0
    ).choices[0].message.content

    match = re.search(r"answer is\s*(\S+)", text, re.IGNORECASE)
    return text, match.group(1) if match else "not found"

text, ans = zero_shot_cot_with_answer(
    "Pizza has 8 slices. I eat 3/8. Remaining slices?", client
)
print(f"Answer: {ans}")
```text

**When zero-shot CoT fails**:

```python
def compare_methods(question, client):
    methods = [
        ("Direct", "Answer the question."),
        ("Zero-shot CoT", "Let's think step by step."),
    ]
    for name, instruction in methods:
        r = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "system", "content": instruction},
                      {"role": "user", "content": question}],
            temperature=0
        ).choices[0].message.content
        print(f"=== {name} ===\n{r[:200]}\n")

compare_methods(
    "Alice has 3 brothers and 1 sister. How many sisters does Alice's brother have?",
    client
)
```text

```mermaid
flowchart TD
    A[Question] --> B[Add 'Think step by step']
    B --> C[LLM generates reasoning]
    C --> D[Step 1]
    D --> E[Step 2]
    E --> F[Final Answer]
    F --> G[Extract answer]
```text

---

## 4.3 Few-Shot CoT

Few-shot CoT provides reasoning examples in the prompt.

```python
def few_shot_cot(question, client):
    messages = [
        {"role": "system", "content": "Solve step by step."},
        {"role": "user", "content": "Q: Roger has 5 tennis balls. He buys 2 cans of 3 each. How many?\nA: Start with 5. 2 cans x 3 = 6. 5+6=11. The answer is 11."},
        {"role": "assistant", "content": "11"},
        {"role": "user", "content": "Q: Cafeteria had 23 apples. Used 20, bought 6 more. How many?\nA: 23-20=3. 3+6=9. The answer is 9."},
        {"role": "assistant", "content": "9"},
        {"role": "user", "content": f"Q: {question}\nA:"}
    ]
    resp = client.chat.completions.create(model="gpt-4o-mini", messages=messages, temperature=0)
    return resp.choices[0].message.content

print(few_shot_cot("15 trees. Plant 3 more each day for 5 days. Total?", client))
```text

**Math problem CoT**:

```python
math_examples = [
    ("Q: A farmer has 12 chickens. Each lays 2 eggs/day. Eggs in a week?\nA: 12*2=24/day. 24*7=168. The answer is 168.", "168"),
    ("Q: Rectangle 8cm x 5cm. Area?\nA: Area = 8*5 = 40. The answer is 40.", "40"),
]

def few_shot_math(question, client):
    msgs = [{"role": "system", "content": "Solve math step by step."}]
    for ex_q, ex_a in math_examples:
        msgs.append({"role": "user", "content": ex_q.split("A:")[0]})
        msgs.append({"role": "assistant", "content": ex_a})
    msgs.append({"role": "user", "content": f"Q: {question}\nA:"})
    resp = client.chat.completions.create(model="gpt-4o-mini", messages=msgs, temperature=0)
    return resp.choices[0].message.content

print(few_shot_math("Train at 50 mph for 3 hours. Distance?", client))
```text

**Logical reasoning CoT**:

```python
logic_examples = [
    ("All humans are mortal. Socrates is human. Conclusion: Socrates is mortal.\nValid reasoning.", "Valid"),
    ("All birds can fly. Penguins are birds. Therefore penguins can fly.\nInvalid - penguins can't fly.", "Invalid"),
]

def few_shot_logic(premises, conclusion, client):
    msgs = [{"role": "system", "content": "Determine if conclusion follows. Reason step by step."}]
    for ex, label in logic_examples:
        msgs.append({"role": "user", "content": ex})
        msgs.append({"role": "assistant", "content": label})
    msgs.append({"role": "user", "content": f"Premises: {premises}\nConclusion: {conclusion}"})
    resp = client.chat.completions.create(model="gpt-4o-mini", messages=msgs, temperature=0)
    return resp.choices[0].message.content

print(few_shot_logic(
    "If it rains, ground gets wet. Ground is wet.", "Therefore it rained.", client
))
```text

```mermaid
flowchart LR
    subgraph Examples
        A[Example 1: Q + Steps + Answer]
        B[Example 2: Q + Steps + Answer]
    end
    subgraph Query
        C[Question]
    end
    A --> D[LLM]
    B --> D
    C --> D
    D --> E[Step-by-Step]
    E --> F[Answer]
```text

---

## 4.4 Self-Consistency

Self-consistency samples multiple reasoning paths and picks the most common answer.

```python
import re
from collections import Counter

class SelfConsistency:
    def __init__(self, client, model="gpt-4o-mini"):
        self.client = client
        self.model = model

    def sample(self, question, n=5, temperature=0.7):
        answers = []
        for _ in range(n):
            text = self.client.chat.completions.create(
                model=self.model,
                messages=[{"role": "user", "content": f"{question}\n\nLet's think step by step."}],
                temperature=temperature
            ).choices[0].message.content
            nums = re.findall(r"[-]?\d+\.?\d*", text)
            answers.append(nums[-1] if nums else None)
        return answers

    def solve(self, question, n=5):
        answers = self.sample(question, n)
        valid = [a for a in answers if a]
        final = Counter(valid).most_common(1)[0][0] if valid else None
        print(f"Question: {question}")
        print(f"Samples: {answers}")
        print(f"Final (majority): {final}")
        return final

sc = SelfConsistency(client)
sc.solve("Shirt costs $40 with 25% discount. Final price?")
```text

**Self-consistency for complex math**:

```python
def self_consistency_math(problem, client, n=5):
    responses = []
    for i in range(n):
        r = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "Solve step by step. End with 'The answer is X'."},
                {"role": "user", "content": problem}
            ],
            temperature=0.7
        ).choices[0].message.content
        responses.append(r)

    answers = []
    for text in responses:
        m = re.search(r"answer is\s*\$?(\d+[.,]?\d*)", text, re.IGNORECASE)
        if m:
            answers.append(m.group(1))

    if answers:
        final = Counter(answers).most_common(1)[0][0]
        print(f"Consensus: {final}")
    else:
        print("No consensus")

self_consistency_math(
    "45 apples. Sell 1/5. Receive 30 more. Total now?", client
)
```text

**When to use self-consistency**:

```python
def benchmark(client):
    problems = [
        ("John is twice as old as Mary. Mary is 10. John's age?", "20"),
        ("Car travels 120 miles in 2 hours. Speed?", "60"),
    ]
    for prob, expected in problems:
        single = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": f"{prob}\nLet's think step by step."}],
            temperature=0
        ).choices[0].message.content

        answers = []
        for _ in range(5):
            r = client.chat.completions.create(
                model="gpt-4o-mini",
                messages=[{"role": "user", "content": f"{prob}\nLet's think step by step."}],
                temperature=0.7
            ).choices[0].message.content
            nums = re.findall(r"[-]?\d+\.?\d*", r)
            if nums:
                answers.append(nums[-1])

        consistent = Counter(answers).most_common(1)[0][0] if answers else "N/A"
        print(f"Problem: {prob}")
        print(f"  Expected: {expected}, Consistent: {consistent}")

benchmark(client)
```text

```mermaid
flowchart TD
    A[Question] --> B[Sample 1: CoT]
    A --> C[Sample 2: CoT]
    A --> D[Sample 3: CoT]
    B --> E[Answer 1]
    C --> F[Answer 2]
    D --> G[Answer 3]
    E --> H[Majority Vote]
    F --> H
    G --> H
    H --> I[Consensus Answer]
```text

---

## 4.5 Tree-of-Thought

Tree-of-thought (ToT) explores multiple reasoning branches with evaluation.

```python
class TreeOfThought:
    def __init__(self, client, model="gpt-4o-mini"):
        self.client = client
        self.model = model

    def generate_branches(self, problem, state, n=3):
        prompt = f"Problem: {problem}\nCurrent: {state}\n\nList {n} next steps numbered 1 to {n}:"
        text = self.client.chat.completions.create(
            model=self.model,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.8
        ).choices[0].message.content

        branches = []
        for line in text.split("\n"):
            line = line.strip()
            if line and line[0].isdigit() and ". " in line:
                branches.append(line.split(". ", 1)[1])
        return branches[:n]

    def evaluate(self, problem, branch):
        prompt = f"Problem: {problem}\nStep: {branch}\n\nIs this on track? Answer PROCEED or BACKTRACK."
        r = self.client.chat.completions.create(
            model=self.model,
            messages=[{"role": "user", "content": prompt}],
            temperature=0
        )
        return r.choices[0].message.content.strip()

    def solve(self, problem, depth=2, breadth=3):
        queue = [("Initial state", ["Initial state"])]
        for d in range(depth):
            next_queue = []
            for state, path in queue:
                branches = self.generate_branches(problem, state, breadth)
                for branch in branches:
                    eval_result = self.evaluate(problem, branch)
                    if "PROCEED" in eval_result:
                        next_queue.append((branch, path + [branch]))
                    if len(next_queue) >= breadth:
                        break
            queue = next_queue
            if not queue:
                break

        best_path = queue[0][1] if queue else ["Initial"]
        final_prompt = f"Problem: {problem}\nSteps: {' -> '.join(best_path)}\n\nFinal answer?"
        r = self.client.chat.completions.create(
            model=self.model,
            messages=[{"role": "user", "content": final_prompt}],
            temperature=0
        )
        return r.choices[0].message.content

## tot = TreeOfThought(client)
## print(tot.solve("17 cows. All but 9 die. How many left?"))
```text

**ToT evaluation**:

```python
def tot_evaluate(problem, candidates, client):
    results = []
    for cand in candidates:
        prompt = f"Problem: {problem}\n\nReasoning: {cand}\n\nScore 1-10 for correctness and logical flow. Score:"
        r = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": prompt}],
            temperature=0
        ).choices[0].message.content
        m = re.search(r"(\d+)/?10", r)
        results.append((cand[:80], int(m.group(1)) if m else 5))

    results.sort(key=lambda x: x[1], reverse=True)
    for cand, score in results:
        print(f"Score {score}/10: {cand}...")

candidates = [
    "Count white eggs then brown. White: 5*2=10. Brown: 3*1=3. Total: 13.",
    "Add all hens then multiply: (5+3)*2 = 16 eggs.",
    "Average eggs per hen: (2+1)/2=1.5. Total hens: 8. Total: 12.",
]
tot_evaluate("5 white hens (2 eggs/day), 3 brown hens (1 egg/day). Total eggs?", candidates, client)
```text

```mermaid
flowchart TD
    A[Problem] --> B[Branch 1]
    A --> C[Branch 2]
    A --> D[Branch 3]
    B --> E[Eval: 8/10]
    C --> F[Eval: 3/10]
    D --> G[Eval: 6/10]
    E --> H[Sub-branch 1a]
    E --> I[Sub-branch 1b]
    H --> J[Eval: 9/10]
    J --> K[Final Answer]
```text

---

## 4.6 CoT Evaluation

Evaluating CoT requires measuring both accuracy and reasoning quality.

```python
class CoTEvaluator:
    def __init__(self, client):
        self.client = client

    def accuracy(self, test_cases, cot_fn):
        correct = 0
        for q, expected in test_cases:
            ans = cot_fn(q)
            if expected.strip().lower() in ans.strip().lower():
                correct += 1
        return correct / len(test_cases)

    def faithfulness(self, reasoning, answer):
        prompt = f"Reasoning: {reasoning}\nAnswer: {answer}\n\nDoes the answer follow? YES or NO."
        r = self.client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": prompt}],
            temperature=0
        )
        return r.choices[0].message.content

    def efficiency(self, cot_fn, question, n=3):
        import time
        latencies, lengths = [], []
        for _ in range(n):
            start = time.time()
            r = cot_fn(question)
            lat = (time.time() - start) * 1000
            latencies.append(lat)
            lengths.append(len(r.split()))
        return sum(latencies)/n, sum(lengths)/n

ev = CoTEvaluator(client)

def basic_cot(q):
    return client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": f"{q}\nLet's think step by step."}],
        temperature=0
    ).choices[0].message.content

test_cases = [("What is 15 + 27?", "42"), ("1/4 of 36?", "9")]
## print(f"Accuracy: {ev.accuracy(test_cases, basic_cot):.2%}")
```text

**Detecting flawed reasoning**:

```python
def analyze_errors(reasoning, client):
    prompt = f"Analyze this reasoning for errors:\n\n{reasoning}\n\nCheck for arithmetic, logic leaps, missing steps. List errors:"
    return client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
        temperature=0
    ).choices[0].message.content

flawed = "Items cost $10 each. Bought 2. Tax 15%. Tax = $3. Total = $23."
print(analyze_errors(flawed, client))
```text

```mermaid
flowchart TD
    A[CoT Output] --> B{Quality Check}
    B --> C[Answer Accuracy]
    B --> D[Reasoning Faithfulness]
    B --> E[Step Completeness]
    B --> F[Efficiency]
    C --> G[Correct / Incorrect]
    D --> H[Follows / Doesn't]
    E --> I[Complete / Missing]
    F --> J[Token Count / Latency]
    G --> K[Overall Score]
    H --> K
    I --> K
    J --> K
```text

---

## TypeScript Parallel

TypeScript CoT with self-consistency:

```typescript
async function chainOfThought(question: string, apiKey: string) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Think step by step. End with 'The answer is X'." },
        { role: "user", content: question }
      ],
      temperature: 0
    })
  });
  const data = await res.json();
  const text = data.choices[0].message.content;
  const match = text.match(/answer is\s*(\S+)/i);
  return { reasoning: text, answer: match ? match[1] : "unknown" };
}

async function selfConsistency(question: string, apiKey: string, samples = 5) {
  const answers: string[] = [];
  for (let i = 0; i < samples; i++) {
    const result = await chainOfThought(question, apiKey);
    answers.push(result.answer);
  }
  const freq = new Map<string, number>();
  answers.forEach(a => freq.set(a, (freq.get(a) ?? 0) + 1));
  const [top] = [...freq.entries()].sort((a, b) => b[1] - a[1]);
  return { topAnswer: top[0], samples: answers };
}
```text

---

## Summary

- Chain-of-thought prompting elicits step-by-step reasoning that improves accuracy on multi-step tasks
- Zero-shot CoT uses a simple trigger phrase like "Let's think step by step" without examples
- Few-shot CoT provides examples of step-by-step reasoning in the prompt
- Self-consistency samples multiple reasoning paths and uses majority voting for robust answers
- Tree-of-thought explores multiple reasoning branches with evaluation at each node
- CoT is most effective for math word problems, logical reasoning, and complex QA
- Reasoning faithfulness is critical - the answer must follow logically from the steps
- CoT increases token usage (typically 2-5x more tokens than direct answers)
- Temperature settings should be higher for self-consistency than single CoT
- Evaluation must cover both answer accuracy and reasoning quality

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Math word problems | Use few-shot CoT with worked examples | Expecting direct answers without reasoning |
| Logical reasoning | Add "Let's think step by step" | Relying on single-pass answers |
| Critical accuracy | Use self-consistency with 5+ samples | Using temperature=0 for consensus |
| Complex planning | Try tree-of-thought with evaluation | Linear CoT for branching decisions |
| Token budgets | Use zero-shot CoT (cheaper) | Few-shot CoT for simple problems |
| Quality assurance | Evaluate reasoning faithfulness | Only checking final answer accuracy |

## Interview Q&A

<details class="tp-qa-card" data-qid="llm-s04-q1">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q1: What is chain-of-thought prompting and why does it improve LLM performance?</summary>
  <div class="tp-qa-answer">
    <p>Chain-of-thought prompting instructs the LLM to show intermediate reasoning steps before giving the final answer. It improves performance by breaking complex problems into steps, reducing error propagation, allowing verification of reasoning, and giving the model more "computation time" through generated tokens.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="llm-s04-q2">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q2: How does self-consistency improve upon basic chain-of-thought?</summary>
  <div class="tp-qa-answer">
    <p>Self-consistency generates multiple reasoning paths (5-20 samples) with higher temperature, then selects the most common answer via majority voting. Benefits include reduced variance, handling of multiple valid approaches, and providing confidence estimates. Trade-off: 5-20x more API calls.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="llm-s04-q3">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q3: What is the difference between zero-shot and few-shot CoT?</summary>
  <div class="tp-qa-answer">
    <p><strong>Zero-shot CoT</strong>: Adds a trigger phrase like "Let's think step by step" without examples. Simple, cheap, effective for general reasoning.</p>
    <p><strong>Few-shot CoT</strong>: Provides 2-5 step-by-step reasoning examples. More consistent format, better for domain-specific tasks, uses more tokens.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="llm-s04-q4">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q4: How does tree-of-thought differ from chain-of-thought?</summary>
  <div class="tp-qa-answer">
    <p><strong>CoT</strong>: Single linear path from start to answer.</p>
    <p><strong>ToT</strong>: Tree structure with branching, evaluation at each node, pruning of dead ends. Better for exploration and creative problem-solving, but significantly more expensive.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="llm-s04-q5">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q5: What types of problems benefit most from CoT?</summary>
  <div class="tp-qa-answer">
    <p>CoT is most effective for math word problems, logical reasoning, multi-hop QA, commonsense reasoning, and complex code generation. It provides less benefit for simple factual recall, classification, or tasks where the answer is directly in training data.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="llm-s04-q6">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q6: What are main failure modes of CoT?</summary>
  <div class="tp-qa-answer">
    <p>Common failures: arithmetic errors despite correct logic, missing intermediate steps, circular reasoning, hallucinated facts in reasoning, over-thinking with unnecessary steps, and format non-compliance. Self-consistency helps mitigate most of these.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="llm-s04-q7">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q7: How do you extract final answer from CoT?</summary>
  <div class="tp-qa-answer">
    <p>Strategies: regex pattern matching for "answer is X", format instruction with markers like "[ANSWER]X[/ANSWER]", secondary LLM call to extract, or last number heuristic. Format instruction with regex is most reliable.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="llm-s04-q8">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q8: How does temperature affect CoT?</summary>
  <div class="tp-qa-answer">
    <p>Single CoT: temperature=0 for deterministic output. Self-consistency: 0.5-0.8 for diverse paths. Tree-of-thought: 0.7-0.9 for branch generation. Higher temperatures produce more diverse but potentially less reliable reasoning.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="llm-s04-q9">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q9: What is the token cost of CoT?</summary>
  <div class="tp-qa-answer">
    <p>Direct answer: 20-50 tokens. Zero-shot CoT: 100-500 tokens. Few-shot CoT: 500-2000+ tokens. Self-consistency with 5 samples: 5x zero-shot cost. Use CoT selectively for problems needing multi-step reasoning.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="llm-s04-q10">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q10: How would you evaluate CoT quality?</summary>
  <div class="tp-qa-answer">
    <p>Multiple dimensions: answer accuracy, reasoning faithfulness (does answer follow from steps?), step completeness, logical coherence, factual correctness of intermediate claims. Use automated metrics plus LLM-as-judge for reasoning quality.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

**Q1**: What trigger phrase is used for zero-shot chain-of-thought?

a) "Answer directly"
b) "Let's think step by step"
c) "Provide options"
d) "Be concise"

<details class="tp-qa-card" data-qid="llm-s04-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) "Let's think step by step"</strong></p><p>This simple phrase triggers step-by-step reasoning in most LLMs.</p></div></details>

**Q2**: What is the main advantage of self-consistency?

a) Lower cost
b) Faster responses
c) Higher accuracy via majority voting
d) Shorter outputs

<details class="tp-qa-card" data-qid="llm-s04-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Higher accuracy via majority voting</strong></p><p>Self-consistency samples multiple reasoning paths and selects the most common answer.</p></div></details>

**Q3**: Which technique explores multiple branches with evaluation?

a) Zero-shot CoT
b) Few-shot CoT
c) Self-consistency
d) Tree-of-thought

<details class="tp-qa-card" data-qid="llm-s04-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: d) Tree-of-thought</strong></p><p>Tree-of-thought explores multiple reasoning branches with evaluation at each node.</p></div></details>

**Q4**: Recommended temperature for self-consistency sampling?

a) 0.0
b) 0.5-0.8
c) 1.5-2.0
d) Doesn't matter

<details class="tp-qa-card" data-qid="llm-s04-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) 0.5-0.8</strong></p><p>Medium temperature creates diverse but reasonable reasoning paths.</p></div></details>

**Q5**: What does "reasoning faithfulness" mean?

a) Number of reasoning steps
b) Whether answer follows from reasoning
c) Speed of generation
d) Format compliance

<details class="tp-qa-card" data-qid="llm-s04-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Whether answer follows from reasoning</strong></p><p>Faithfulness checks that the final answer is supported by the intermediate reasoning steps.</p></div></details>

## Exercises

**Easy** — Write a function for zero-shot CoT on math problems. Extract final answer with regex.

**Easy** — Compare direct vs CoT on 5 logic puzzles. Report accuracy for each.

**Medium** — Implement self-consistency with 5 samples. Compare accuracy against single CoT.

**Medium** — Build tree-of-thought solver for planning problems with 3 branches per level.

**Hard** — Create a CoT evaluator scoring reasoning quality on accuracy, faithfulness, and efficiency.

---


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition

## Revision Notes

- Key concept 1: Core principle of 11-llms-prompt-engineering
- Key concept 2: Common implementation pattern
- Key concept 3: Time/space complexity to remember
- Key concept 4: When to apply this technique
- Key concept 5: Common interview pattern
- Key concept 6: Edge cases to handle
- Key concept 7: Related concepts for deeper understanding

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of 11-llms-prompt-engineering. When would you choose one approach over another?
2. Design a system that efficiently handles 11-llms-prompt-engineering at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 11-llms-prompt-engineering. What was your approach and what was the result?
2. How would you explain 11-llms-prompt-engineering to a non-technical stakeholder?

#### Microsoft Style
1. How does 11-llms-prompt-engineering integrate with enterprise systems and cloud architectures?
2. What are the security implications of 11-llms-prompt-engineering?

#### NVIDIA Style
1. How would you optimize 11-llms-prompt-engineering for GPU-accelerated computing?
2. What parallel processing patterns apply to 11-llms-prompt-engineering?

#### AI Startup Style
1. How would you implement 11-llms-prompt-engineering in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 11-llms-prompt-engineering?

### Resume Tips
- **Technical Skills**: List 11-llms-prompt-engineering under relevant technical skills
- **Project Description**: "Implemented 11-llms-prompt-engineering to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 11-llms-prompt-engineering in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 11-llms-prompt-engineering
- [ ] Practice 3-5 problems related to 11-llms-prompt-engineering
- [ ] Prepare 2 real-world examples of using 11-llms-prompt-engineering
- [ ] Know the time/space complexity of common 11-llms-prompt-engineering operations
- [ ] Have questions ready about how the company uses 11-llms-prompt-engineering> **Next**: [05 — Structured Output →](05-structured-output.md)
