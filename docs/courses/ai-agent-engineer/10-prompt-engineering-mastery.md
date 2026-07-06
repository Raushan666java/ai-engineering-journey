# Chapter 10 — Prompt Engineering Mastery

**Duration:** 2 weeks, ~20 hours
**Goal:** Master advanced prompt patterns, structured output design, prompt management at scale, and injection defense. Move beyond copying prompts to designing prompt systems.

---

## Topic Table

| # | Subtopic | Hours | Done checkpoint |
|---|----------|-------|-----------------|
| 1 | Advanced prompt patterns (CoT, ToT, self-consistency) | 2.5 | Can choose the right pattern for a given task and explain why |
| 2 | Structured output design (JSON mode, tool calling, constrained decoding) | 2 | Design a structured output schema for a complex multi-step task |
| 3 | Prompt management & versioning | 2 | Set up a prompt versioning system with templates and test suite |
| 4 | Few-shot optimization | 2 | Select examples, order them, and measure quality improvement |
| 5 | System prompt design patterns | 1.5 | Write a system prompt that enforces persona, constraints, and output format |
| 6 | Multi-turn conversation design | 2 | Design a conversation flow that maintains context across 10+ turns |
| 7 | Prompt compression techniques | 1.5 | Compress a 4K-token prompt to 1K tokens without quality loss |
| 8 | Prompt evaluation frameworks | 2 | Build an automated prompt eval suite with LLM-as-judge |
| 9 | A/B testing prompts in production | 2 | Design and run an A/B test comparing 2 prompt variants |
| 10 | Prompt injection defense | 2 | Implement input sanitization, output validation, and injection detection |

---

## 10.1 Advanced Prompt Patterns

### Chain-of-Thought (CoT)

The most impactful prompt pattern. Elicits step-by-step reasoning before the answer.

```python
# Zero-shot CoT — simply add "think step by step"
def zero_shot_cot(question: str) -> str:
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": f"{question}\n\nThink step by step, then provide the final answer."}
        ]
    )
    return response.choices[0].message.content

# Few-shot CoT — provide examples of reasoning chains
def few_shot_cot(question: str) -> str:
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "Solve problems step by step."},
            {"role": "user", "content": """Q: A store has 120 apples. It sells 1/3 of them in the morning and 1/4 of the remaining in the afternoon. How many apples are left?
A: 
1. Start with 120 apples
2. Morning: sold 1/3 ? 120 * 1/3 = 40 sold, 80 remaining
3. Afternoon: sold 1/4 of remaining ? 80 * 1/4 = 20 sold, 60 remaining
4. Final answer: 60 apples left

Q: A class has 40 students. 60% are girls and the rest are boys. If 25% of girls and 50% of boys wear glasses, how many students wear glasses?
A:
1. Start with 40 students
2. Girls: 60% of 40 = 24 girls
3. Boys: 40 - 24 = 16 boys
4. Girls with glasses: 25% of 24 = 6
5. Boys with glasses: 50% of 16 = 8
6. Total with glasses: 6 + 8 = 14
7. Final answer: 14 students wear glasses

Q: A train travels 240 km at 60 km/h, then 120 km at 40 km/h. What is the average speed for the entire journey?
A:
1. Time for first segment: 240/60 = 4 hours
2. Time for second segment: 120/40 = 3 hours
3. Total distance: 240 + 120 = 360 km
4. Total time: 4 + 3 = 7 hours
5. Average speed: 360/7 ˜ 51.4 km/h
6. Final answer: approximately 51.4 km/h

Q: """ + question}
        ]
    )
    return response.choices[0].message.content
```

### CoT with Self-Consistency

Run CoT multiple times and take the majority answer. Improves accuracy on mathematical and logical tasks by 5-15%.

```python
import re
from collections import Counter

def self_consistency_cot(question: str, n_attempts: int = 5) -> tuple[str, str]:
    """Run CoT multiple times and return majority answer."""
    responses = []

    for _ in range(n_attempts):
        resp = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "Solve step by step. End with 'Final answer: X'."},
                {"role": "user", "content": question}
            ],
            temperature=0.7  # Higher temperature for diverse reasoning paths
        )
        responses.append(resp.choices[0].message.content)

    # Extract final answers
    answers = []
    for resp in responses:
        match = re.search(r"Final answer:\s*(.+?)$", resp, re.MULTILINE)
        if match:
            answers.append(match.group(1).strip())

    if not answers:
        return responses[0], "No answers found"

    # Majority vote
    counter = Counter(answers)
    most_common = counter.most_common(1)[0][0]
    return most_common, responses[0]  # Return majority + first attempt for reference
```

### Tree-of-Thoughts (ToT)

Explore multiple reasoning branches simultaneously, then evaluate and select the best path.

```python
from pydantic import BaseModel

class ThoughtBranch(BaseModel):
    reasoning: str
    evaluation: str  # promising / unlikely / needs_exploration
    next_steps: list[str]

class TreeOfThought(BaseModel):
    branches: list[ThoughtBranch]
    best_path: str

def tree_of_thoughts(problem: str, n_branches: int = 3) -> str:
    """Generate multiple reasoning paths, evaluate, and commit to the best."""
    # Step 1: Generate n_branches initial reasoning approaches
    completion = client.beta.chat.completions.parse(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": f"Generate {n_branches} distinct approaches to solve the problem. Evaluate each approach as 'promising', 'unlikely', or 'needs_exploration'."},
            {"role": "user", "content": problem}
        ],
        response_format=TreeOfThought
    )
    tree = completion.choices[0].message.parsed

    # Step 2: Explore the best path in depth
    best_branch = max(tree.branches, key=lambda b: b.evaluation == "promising")

    completion2 = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "Follow the chosen reasoning path and provide a complete solution."},
            {"role": "user", "content": f"Problem: {problem}\n\nChosen approach: {best_branch.reasoning}\n\nNext steps: {', '.join(best_branch.next_steps)}"}
        ]
    )

    return completion2.choices[0].message.content
```

---

## 10.2 Structured Output Design

### JSON Mode (OpenAI)

```python
from pydantic import BaseModel, Field
from typing import Optional
from enum import Enum

class Intent(str, Enum):
    QUESTION = "question"
    COMMAND = "command"
    COMPLAINT = "complaint"
    GREETING = "greeting"
    FAREWELL = "farewell"

class Sentiment(str, Enum):
    POSITIVE = "positive"
    NEUTRAL = "neutral"
    NEGATIVE = "negative"

class CustomerMessageAnalysis(BaseModel):
    intent: Intent
    sentiment: Sentiment
    urgency: int = Field(ge=1, le=10, description="Urgency level from 1 (low) to 10 (critical)")
    requires_human: bool
    suggested_response: str = Field(max_length=200)
    extracted_entities: dict[str, str] = Field(default_factory=dict)
    confidence: float = Field(ge=0.0, le=1.0)

def analyze_message(message: str) -> CustomerMessageAnalysis:
    """Parse any customer message into structured fields."""
    completion = client.beta.chat.completions.parse(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "Analyze the customer message and return structured data."},
            {"role": "user", "content": message}
        ],
        response_format=CustomerMessageAnalysis
    )
    return completion.choices[0].message.parsed
```

### Tool Calling for Structured Output

```python
def extract_invoice_data(text: str) -> dict:
    """Use function calling to extract structured invoice data from unstructured text."""
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "user", "content": f"Extract invoice information from this text:\n\n{text}"}
        ],
        tools=[{
            "type": "function",
            "function": {
                "name": "record_invoice",
                "description": "Extract structured invoice data",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "invoice_number": {"type": "string"},
                        "date": {"type": "string", "format": "date"},
                        "vendor": {"type": "string"},
                        "total_amount": {"type": "number"},
                        "currency": {"type": "string"},
                        "line_items": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "description": {"type": "string"},
                                    "quantity": {"type": "integer"},
                                    "unit_price": {"type": "number"},
                                    "total": {"type": "number"}
                                },
                                "required": ["description", "quantity", "unit_price", "total"]
                            }
                        },
                        "tax_amount": {"type": "number"},
                        "due_date": {"type": "string", "format": "date"}
                    },
                    "required": ["invoice_number", "date", "vendor", "total_amount", "currency"]
                }
            }
        }],
        tool_choice={"type": "function", "function": {"name": "record_invoice"}}
    )

    tool_calls = response.choices[0].message.tool_calls
    if tool_calls:
        return json.loads(tool_calls[0].function.arguments)
    return {}
```

### Constrained Decoding Patterns

```python
from pydantic import BaseModel, Field
from typing import Literal, Optional

class CodeGenerationTask(BaseModel):
    task: str
    language: Literal["python", "typescript", "rust", "go", "java"]
    framework: Optional[str] = None
    constraints: list[str] = Field(default_factory=list)

class GeneratedCode(BaseModel):
    code: str
    explanation: str
    complexity_analysis: str
    test_cases: list[dict] = Field(description="List of test cases with input and expected output")
    potential_issues: list[str] = Field(default_factory=list)

def generate_code_with_validation(task: CodeGenerationTask) -> GeneratedCode:
    """Generate code that must match the exact schema."""
    completion = client.beta.chat.completions.parse(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": f"Generate {task.language} code for the given task. Include tests and complexity analysis."},
            {"role": "user", "content": f"Task: {task.task}\nFramework: {task.framework or 'none'}\nConstraints: {', '.join(task.constraints)}"}
        ],
        response_format=GeneratedCode
    )
    return completion.choices[0].message.parsed
```

---

## 10.3 Prompt Management & Versioning

### Prompt Template System

```python
from string import Template
from datetime import datetime
import hashlib
import yaml

class PromptTemplate:
    """Versioned prompt template with metadata and test suite."""

    def __init__(self, name: str, version: str, template: str, metadata: dict | None = None):
        self.name = name
        self.version = version
        self._template = Template(template)
        self.metadata = metadata or {}
        self.created_at = datetime.now()

    def render(self, **kwargs) -> str:
        return self._template.safe_substitute(**kwargs)

    def fingerprint(self) -> str:
        return hashlib.sha256(self._template.template.encode()).hexdigest()[:12]

class PromptRegistry:
    """Manage prompt templates with versioning."""

    def __init__(self, storage_path: str = "prompts/"):
        self.templates: dict[str, list[PromptTemplate]] = {}
        self.storage_path = storage_path

    def register(self, template: PromptTemplate):
        if template.name not in self.templates:
            self.templates[template.name] = []
        self.templates[template.name].append(template)

    def get(self, name: str, version: str | None = None) -> PromptTemplate | None:
        if name not in self.templates:
            return None
        if version is None:
            return self.templates[name][-1]  # Latest version
        for t in self.templates[name]:
            if t.version == version:
                return t
        return None

    def list_versions(self, name: str) -> list[str]:
        if name not in self.templates:
            return []
        return [t.version for t in self.templates[name]]

# Define prompt templates
rag_system_prompt = PromptTemplate(
    name="rag_system",
    version="1.0.0",
    template=(
        "You are a helpful assistant that answers questions using the provided context.\n\n"
        "Rules:\n"
        "- Answer ONLY using the information in the context below.\n"
        "- If the context does not contain enough information, say \"I cannot find enough information in the provided documents.\"\n"
        "- Cite your sources using brackets [1], [2], etc.\n"
        "- Keep answers concise (under ${max_tokens} tokens).\n"
        "- Do not make up information or speculate.\n\n"
        "Context:\n$context\n\n"
        "User query: $query"
    ),
    metadata={"purpose": "RAG system prompt", "author": "course"}
)

agent_system_prompt = PromptTemplate(
    name="agent_system",
    version="2.1.0",
    template=(
        "You are ${agent_name}, an AI agent specialized in ${specialization}.\n\n"
        "Your capabilities:\n"
        "$capabilities\n\n"
        "Available tools:\n"
        "$tool_descriptions\n\n"
        "Instructions:\n"
        "- Think step by step before using any tool.\n"
        "- If a tool fails, try an alternative approach.\n"
        "- When you have enough information, provide a final answer.\n"
        "- Never make up tool responses."
    ),
    metadata={"purpose": "Agent system prompt", "author": "course"}
)

# Usage
registry = PromptRegistry()
registry.register(rag_system_prompt)
registry.register(agent_system_prompt)

# Render a template
prompt = registry.get("rag_system", "1.0.0")
rendered = prompt.render(
    context="Documents about lease terms...",
    query="What are the lease terms?",
    max_tokens="200"
)
```

---

## 10.4 Few-Shot Optimization

### Example Selection Strategies

```python
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

class FewShotOptimizer:
    """
    Select optimal few-shot examples for a given query using
    semantic similarity and diversity sampling.
    """

    def __init__(self, examples: list[dict], embedding_model: str = "text-embedding-3-small"):
        self.examples = examples
        self.embedding_model = embedding_model
        self._embed_examples()

    def _embed_examples(self):
        """Pre-compute embeddings for all examples."""
        texts = [e["query"] for e in self.examples]
        response = client.embeddings.create(input=texts, model=self.embedding_model)
        self.example_vectors = np.array([d.embedding for d in response.data])

    def select_by_similarity(self, query: str, k: int = 3) -> list[dict]:
        """Select k most similar examples to the query."""
        q_vec = client.embeddings.create(input=query, model=self.embedding_model).data[0].embedding
        q_vec = np.array(q_vec).reshape(1, -1)

        similarities = cosine_similarity(q_vec, self.example_vectors)[0]
        top_k_indices = np.argsort(similarities)[-k:][::-1]
        return [self.examples[i] for i in top_k_indices]

    def select_diverse(self, query: str, k: int = 3) -> list[dict]:
        """Select k examples that are both relevant and diverse."""
        q_vec = client.embeddings.create(input=query, model=self.embedding_model).data[0].embedding
        q_vec = np.array(q_vec).reshape(1, -1)

        similarities = cosine_similarity(q_vec, self.example_vectors)[0]
        candidates = np.argsort(similarities)[-k * 3:][::-1]

        # Greedy diversity selection
        selected = [candidates[0]]
        remaining = list(candidates[1:])

        while len(selected) < k and remaining:
            # Pick example most different from already selected ones
            sel_vectors = self.example_vectors[selected]
            rem_vectors = self.example_vectors[remaining]
            diversity_scores = np.min(
                cosine_similarity(rem_vectors, sel_vectors), axis=1
            )
            best_rem = remaining[np.argmin(diversity_scores)]
            selected.append(best_rem)
            remaining.remove(best_rem)

        return [self.examples[i] for i in selected]

# Example bank
example_bank = [
    {"query": "How do I reset my password?", "response": "Go to Settings > Security > Reset Password. Enter your email and check for the reset link."},
    {"query": "What is the refund policy?", "response": "Full refund within 30 days of purchase. Partial refund after 30 days based on usage."},
    {"query": "How do I cancel my subscription?", "response": "Log into your account, go to Billing > Subscription and click 'Cancel'. Your access continues until the end of the billing period."},
    {"query": "Can I export my data?", "response": "Yes. Go to Settings > Data > Export. You'll receive a CSV download link via email within 24 hours."},
    {"query": "How do I invite team members?", "response": "In the workspace settings, click 'Invite Members'. Enter their email addresses and assign roles."},
]

optimizer = FewShotOptimizer(example_bank)
user_query = "I forgot my login credentials"

# Get best examples
examples = optimizer.select_by_similarity(user_query, k=2)
for ex in examples:
    print(f"Q: {ex['query']}\nA: {ex['response']}\n")
```

### Label Balance in Few-Shot

```python
def balanced_few_shot(
    query: str,
    examples_by_class: dict[str, list[dict]],
    k_per_class: int = 1,
) -> list[dict]:
    """Select k examples from each class for balanced few-shot prompts."""
    selected = []
    for cls, examples in examples_by_class.items():
        optimizer = FewShotOptimizer(examples)
        best = optimizer.select_by_similarity(query, k=k_per_class)
        selected.extend(best)
    return selected

# Usage for sentiment classification
sentiment_examples = {
    "positive": [
        {"query": "Great service, very happy!", "response": "positive"},
        {"query": "Excellent product, highly recommend.", "response": "positive"},
        {"query": "Love the new features!", "response": "positive"},
    ],
    "negative": [
        {"query": "Terrible experience, very disappointed.", "response": "negative"},
        {"query": "This is the worst app ever.", "response": "negative"},
        {"query": "Keeps crashing, unusable.", "response": "negative"},
    ],
    "neutral": [
        {"query": "How do I update my profile?", "response": "neutral"},
        {"query": "What time does support open?", "response": "neutral"},
        {"query": "Can you send me the documentation?", "response": "neutral"},
    ]
}

balanced = balanced_few_shot("This app is amazing!", sentiment_examples)
```

---

## 10.5 System Prompt Design Patterns

### Persona + Constraints + Format

```python
def build_system_prompt(
    persona: str,
    constraints: list[str],
    output_format: str,
    examples: list[tuple[str, str]] | None = None,
) -> str:
    """Build a structured system prompt from components."""
    parts = [f"You are {persona}.\n"]

    if constraints:
        parts.append("Constraints:")
        for c in constraints:
            parts.append(f"- {c}")
        parts.append("")

    if examples:
        parts.append("Examples:")
        for q, a in examples:
            parts.append(f"User: {q}")
            parts.append(f"You: {a}")
        parts.append("")

    parts.append(f"Output format:\n{output_format}")
    return "\n".join(parts)

# Example: Code reviewer persona
code_review_prompt = build_system_prompt(
    persona="an expert Python code reviewer. You review code for correctness, performance, maintainability, and security.",
    constraints=[
        "Focus on logic errors first, then style.",
        "Provide specific fix suggestions, not general advice.",
        "If you find a security vulnerability, mark it CRITICAL.",
        "Be concise — max 5 bullet points per review."
    ],
    output_format="Markdown with sections: Issues Found, Suggestions, Positive Notes.",
    examples=[
        ("def add(a, b): return a + b", "Looks correct. Consider type hints: `def add(a: int, b: int) -> int:`"),
        ("password = request.args.get('pass')", "CRITICAL: Never pass passwords as URL query parameters. Use POST body instead."),
    ]
)
```

### Dynamic Persona Injection

```python
class DynamicPersona:
    """Inject domain-specific persona context at runtime."""

    DOMAINS = {
        "legal": {
            "persona": "a legal document reviewer. Be precise and cite specific clauses.",
            "constraints": ["Quote exact language from documents.", "Flag ambiguous phrasing.", "Never give legal advice — only document analysis."]
        },
        "medical": {
            "persona": "a medical information assistant. Be cautious and evidence-based.",
            "constraints": ["Cite sources for all medical claims.", "Flag uncertainty explicitly.", "Include disclaimer to consult a doctor."]
        },
        "technical": {
            "persona": "a senior software engineer explaining complex concepts clearly.",
            "constraints": ["Start with the simplest explanation.", "Include a code example.", "Note tradeoffs and alternatives."]
        },
        "customer_support": {
            "persona": "a helpful customer support agent. Be empathetic and solution-oriented.",
            "constraints": ["Acknowledge the customer's frustration.", "Provide steps to resolve.", "Offer to escalate if needed."]
        }
    }

    @classmethod
    def get_prompt(cls, domain: str, additional_context: str = "") -> str:
        config = cls.DOMAINS.get(domain, cls.DOMAINS["technical"])
        constraints = "\n".join(f"- {c}" for c in config["constraints"])
        return f"You are {config['persona']}\n\nRules:\n{constraints}\n\n{additional_context}"
```

---

## 10.6 Multi-Turn Conversation Design

### Conversation State Machine

```python
from enum import Enum
from pydantic import BaseModel
from typing import Optional

class ConversationState(str, Enum):
    GREETING = "greeting"
    GATHERING_INFO = "gathering_info"
    PROCESSING = "processing"
    CLARIFYING = "clarifying"
    RESOLVING = "resolving"
    CLOSING = "closing"

class ConversationContext(BaseModel):
    state: ConversationState = ConversationState.GREETING
    customer_name: Optional[str] = None
    issue_type: Optional[str] = None
    collected_info: dict = {}
    turn_count: int = 0
    sentiment: str = "neutral"

class ConversationManager:
    """Manage multi-turn conversation with state tracking."""

    def __init__(self, system_prompt: str):
        self.system_prompt = system_prompt
        self.history: list[dict] = []

    def process_turn(self, user_input: str, context: ConversationContext) -> tuple[str, ConversationContext]:
        """Process one turn and return response + updated context."""
        context.turn_count += 1

        # Build messages with full history
        messages = [{"role": "system", "content": self._build_state_prompt(context)}]
        messages.extend(self.history[-10:])  # Keep last 10 turns
        messages.append({"role": "user", "content": user_input})

        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=messages
        )

        reply = response.choices[0].message.content
        self.history.append({"role": "user", "content": user_input})
        self.history.append({"role": "assistant", "content": reply})

        # Update state based on conversation progress
        context = self._update_state(user_input, reply, context)

        return reply, context

    def _build_state_prompt(self, context: ConversationContext) -> str:
        return f"""{self.system_prompt}

Current state: {context.state.value}
Customer: {context.customer_name or 'Unknown'}
Issue type: {context.issue_type or 'Not yet identified'}
Turns so far: {context.turn_count}

Based on the current state:
- GREETING: Introduce yourself, ask how you can help
- GATHERING_INFO: Ask targeted questions to understand the issue
- CLARIFYING: Ask follow-up questions about unclear details
- PROCESSING: Indicate you're working on the solution
- RESOLVING: Provide the solution step by step
- CLOSING: Confirm resolution, ask if anything else needed"""

    def _update_state(self, user_input: str, reply: str, context: ConversationContext) -> ConversationContext:
        """Determine next state based on conversation progress."""
        if context.state == ConversationState.GREETING:
            context.state = ConversationState.GATHERING_INFO
        elif context.state == ConversationState.GATHERING_INFO and context.turn_count > 3:
            context.state = ConversationState.PROCESSING
        elif context.state == ConversationState.PROCESSING and "unclear" in user_input.lower():
            context.state = ConversationState.CLARIFYING
        elif context.state == ConversationState.CLARIFYING:
            context.state = ConversationState.RESOLVING
        elif "thank" in user_input.lower() or "that's all" in user_input.lower():
            context.state = ConversationState.CLOSING
        return context
```

---

## 10.7 Prompt Compression Techniques

```python
class PromptCompressor:
    """Compress prompts by removing redundancy and condensing context."""

    @staticmethod
    def compress_conversation_history(messages: list[dict], max_tokens: int = 2000) -> list[dict]:
        """Summarize older turns to reduce token usage."""
        if len(messages) < 4:
            return messages

        # Keep first system prompt, summarize middle, keep recent
        system = [m for m in messages if m["role"] == "system"]
        turns = [m for m in messages if m["role"] != "system"]

        if len(turns) <= 6:
            return messages

        # Summarize everything except last 4 turns
        early_turns = turns[:-4]
        recent_turns = turns[-4:]

        early_text = "\n".join(f"{t['role']}: {t['content'][:200]}" for t in early_turns)
        summary = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "Summarize this conversation history concisely, preserving key facts, decisions, and user preferences."},
                {"role": "user", "content": early_text}
            ],
            max_tokens=300
        ).choices[0].message.content

        return system + [{"role": "system", "content": f"Previous conversation summary: {summary}"}] + recent_turns

    @staticmethod
    def compress_context(context: str, max_chunks: int = 5) -> str:
        """Keep only the most relevant chunks from a large context."""
        chunks = context.split("\n\n")
        if len(chunks) <= max_chunks:
            return context

        # Keep first chunk (usually intro/summary) and last max_chunks-1
        # This assumes relevance decreases with distance
        return "\n\n".join([chunks[0]] + chunks[-(max_chunks - 1):])

    @staticmethod
    def extractive_summarize(text: str, max_sentences: int = 10) -> str:
        """Extract the most important sentences from a long text."""
        sentences = text.replace("\n", " ").split(". ")
        if len(sentences) <= max_sentences:
            return text

        # Keep first and last few sentences (intro + conclusion)
        kept = sentences[:3] + sentences[-(max_sentences - 3):]
        return ". ".join(kept)
```

---

## 10.8 Prompt Evaluation Frameworks

### LLM-as-Judge Evaluation

```python
from pydantic import BaseModel, Field

class PromptEvaluation(BaseModel):
    overall_score: float = Field(ge=1, le=10)
    criteria_scores: dict[str, float]
    strengths: list[str]
    weaknesses: list[str]
    suggested_improvements: list[str]

def evaluate_prompt_output(
    prompt_template: str,
    test_cases: list[dict],
    criteria: list[str],
) -> PromptEvaluation:
    """Evaluate a prompt against test cases using LLM-as-judge."""
    scores = {c: [] for c in criteria}

    for test in test_cases:
        # Generate output
        rendered = prompt_template.render(**test["variables"])
        output = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": rendered},
                {"role": "user", "content": test["input"]}
            ]
        ).choices[0].message.content

        # Evaluate against each criterion
        for criterion in criteria:
            eval_resp = client.beta.chat.completions.parse(
                model="gpt-4o-mini",
                messages=[
                    {"role": "system", "content": f"Rate the output on '{criterion}' from 1-10. Consider: {test.get('criterion_definition', '')}"},
                    {"role": "user", "content": f"Expected: {test['expected']}\n\nActual: {output}"}
                ],
                response_format=type("Score", (BaseModel,), {"score": float, "reasoning": str})
            )
            scores[criterion].append(eval_resp.choices[0].message.parsed.score)

    # Aggregate scores
    avg_scores = {c: sum(v)/len(v) for c, v in scores.items()}
    overall = sum(avg_scores.values()) / len(avg_scores)

    return PromptEvaluation(
        overall_score=round(overall, 1),
        criteria_scores={c: round(s, 1) for c, s in avg_scores.items()},
        strengths=[],
        weaknesses=[],
        suggested_improvements=[]
    )

# Usage
test_suite = [
    {"variables": {"context": "Lease terms are 12 months.", "query": "What is the lease term?", "max_tokens": "100"}, "input": "What is the lease term?", "expected": "12 months"},
    {"variables": {"context": "The refund policy allows full refund within 30 days.", "query": "Can I get a refund after 60 days?", "max_tokens": "100"}, "input": "Can I get a refund after 60 days?", "expected": "No, refunds only within 30 days."},
]
```

### Automated Prompt Regression

```python
class PromptRegressionSuite:
    """Track prompt quality over time to catch regressions."""

    def __init__(self):
        self.test_cases: list[dict] = []
        self.results: dict[str, list[float]] = {}  # prompt_version -> scores

    def add_test_case(self, name: str, prompt_vars: dict, input: str, expected: str, eval_criteria: list[str]):
        self.test_cases.append({
            "name": name,
            "prompt_vars": prompt_vars,
            "input": input,
            "expected": expected,
            "eval_criteria": eval_criteria
        })

    def run_suite(self, prompt_template, version: str) -> dict:
        """Run all test cases and return pass/fail results."""
        case_results = []
        passed = 0

        for case in self.test_cases:
            rendered = prompt_template.render(**case["prompt_vars"])
            output = client.chat.completions.create(
                model="gpt-4o-mini",
                messages=[
                    {"role": "system", "content": rendered},
                    {"role": "user", "content": case["input"]}
                ]
            ).choices[0].message.content.lower()

            # Check if expected content is in output
            expected_lower = case["expected"].lower()
            is_pass = expected_lower in output
            if is_pass:
                passed += 1

            case_results.append({
                "name": case["name"],
                "pass": is_pass,
                "expected": case["expected"],
                "actual": output
            })

        score = passed / len(self.test_cases) * 100
        self.results[version] = [score]

        return {
            "version": version,
            "pass_rate": f"{score:.0f}%",
            "passed": passed,
            "total": len(self.test_cases),
            "details": case_results
        }
```

---

## 10.9 A/B Testing Prompts

```python
import random
import statistics

class PromptABTest:
    """Compare two prompt variants in production with statistical analysis."""

    def __init__(self, variant_a: str, variant_b: str, metric: str = "user_satisfaction"):
        self.variant_a = variant_a
        self.variant_b = variant_b
        self.metric = metric
        self.results_a: list[float] = []
        self.results_b: list[float] = []

    def serve(self, user_id: str, query: str) -> tuple[str, str]:
        """Route to variant A or B based on user ID hash."""
        use_a = hash(user_id + "salt") % 2 == 0
        variant = self.variant_a if use_a else self.variant_b

        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": variant},
                {"role": "user", "content": query}
            ]
        ).choices[0].message.content

        return response, "A" if use_a else "B"

    def record_result(self, variant: str, score: float):
        if variant == "A":
            self.results_a.append(score)
        else:
            self.results_b.append(score)

    def analyze(self, min_samples: int = 100) -> dict:
        """Statistical analysis of A/B test results."""
        if len(self.results_a) < min_samples or len(self.results_b) < min_samples:
            return {"status": "insufficient_data", "samples_a": len(self.results_a), "samples_b": len(self.results_b)}

        mean_a = statistics.mean(self.results_a)
        mean_b = statistics.mean(self.results_b)
        stdev_a = statistics.stdev(self.results_a)
        stdev_b = statistics.stdev(self.results_b)

        # Simple z-test approximation
        import math
        z_score = (mean_a - mean_b) / math.sqrt((stdev_a**2/len(self.results_a)) + (stdev_b**2/len(self.results_b)))

        return {
            "status": "complete",
            "samples_a": len(self.results_a),
            "samples_b": len(self.results_b),
            "mean_a": round(mean_a, 3),
            "mean_b": round(mean_b, 3),
            "z_score": round(z_score, 3),
            "winner": "A" if mean_a > mean_b else "B",
            "significant": abs(z_score) > 1.96  # 95% confidence
        }
```

---

## 10.10 Prompt Injection Defense

### Multi-Layer Defense

```python
import re

class PromptInjectionDefense:
    """Multi-layer defense against prompt injection attacks."""

    @staticmethod
    def detect_injection(text: str) -> float:
        """
        Score text for injection likelihood (0.0 = safe, 1.0 = definite injection).
        Uses pattern matching and heuristic scoring.
        """
        score = 0.0

        injection_patterns = [
            (r"(?i)(ignore|disregard|forget|override)\s+(all\s+)?(previous|above|system|instructions)", 0.8),
            (r"(?i)you\s+(are\s+)?(now|must)\s+(act|pretend|behave)", 0.6),
            (r"(?i)new\s+(instructions|prompt|system)", 0.5),
            (r"(?i)say\s+\".*\"\s+and\s+(then|after)", 0.4),
            (r"(?i)your\s+(true|real|secret)\s+(instructions|prompt|objective)", 0.7),
            (r"(?i)rollback|reset|restart|fresh\s+start", 0.5),
            (r"(?i)system\s*(prompt|message|instructions?)\s*:", 0.6),
            (r"(?i)forget\s+(everything|all|context)", 0.7),
            (r"(?i)you\s+are\s+(not|aren't)\s+(bound|limited|constrained)", 0.6),
            (r"(?i)output\s+the\s+(above|following|text|instructions)", 0.4),
            (r"(?i)ignore\s+(the\s+)?(above|previous|system)", 0.8),
            (r"(?i)reveal\s+(your|the|any)\s+(secret|hidden|system)", 0.7),
            (r"(?i)print\s+(everything|the\s+entire|your\s+full)\s+(prompt|instructions|system)", 0.8),
            (r"(?i)separated\s+by\s+\"\|", 0.3),
            (r"(?i)i\s+have\s+(full|complete|unlimited|sudo)\s+permissions", 0.5),
        ]

        for pattern, weight in injection_patterns:
            if re.search(pattern, text):
                score = min(1.0, score + weight)

        # Check for encoded/obfuscated content
        if len(text) > 500 and text.count(" ") < len(text) * 0.1:
            score = min(1.0, score + 0.3)  # Could be base64 or encoded payload

        # Check for excessive newlines/formatting (markdown injection)
        if text.count("\n") > 20 and len(text) < 1000:
            score = min(1.0, score + 0.3)

        return score

    @classmethod
    def sanitize_input(cls, text: str) -> str:
        """Remove or neutralize dangerous patterns."""
        # Strip known injection phrases
        text = re.sub(r"(?i)(ignore|disregard|override)\s+(all\s+)?(previous|above).*", "", text)
        text = re.sub(r"(?i)system\s*(prompt|message).*?[::]\s*", "", text)
        text = re.sub(r"(?i)new\s+(instructions|prompt|system).*[::]\s*", "", text)
        return text.strip()

    @classmethod
    def output_guardrail(cls, output: str) -> str:
        """Check output for leaked system prompts or sensitive content."""
        leak_patterns = [
            r"(?i)(you\s+are|you're)\s+(an?\s+)?(AI|assistant|helpful)",
            r"(?i)(system|user|assistant)\s*(message|prompt|instruction)",
            r"(?i)as\s+(an?\s+)?(AI|language\s+model)",
            r"(?i)I\s+(don't|cannot|am\s+not\s+able\s+to)\s+(have\s+)?(access|opinion|feelings)",
        ]
        for pattern in leak_patterns:
            if re.search(pattern, output[:200]):  # Check only the beginning
                return "[Response blocked by output guardrail]"
        return output

# Full defense pipeline
def safe_completion(user_input: str, system_prompt: str) -> str:
    """End-to-end safe completion with injection defense."""
    # 1. Input detection
    injection_score = PromptInjectionDefense.detect_injection(user_input)
    if injection_score > 0.7:
        return "I cannot process this request. Please rephrase."

    # 2. Input sanitization
    sanitized = PromptInjectionDefense.sanitize_input(user_input)

    # 3. Generate response
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": sanitized}
        ]
    ).choices[0].message.content

    # 4. Output guardrail
    safe_output = PromptInjectionDefense.output_guardrail(response)

    return safe_output
```

---


interface TestResult { name: string; passed: boolean; score: number; details: string }
class AIEvaluator {
  constructor(private llm: (prompt:string)=>Promise&lt;string&gt;) {}
  async evaluate(output: string, criteria: string[]): Promise&lt;TestResult[]&gt; {
    const results: TestResult[] = []
    for(const c of criteria) {
      const prompt = `Rate the following output on "${c}" from 0-1:\n${output}\nScore:`
      const response = await this.llm(prompt); const score = parseFloat(response)||0
      results.push({name:c,passed:score>=0.7,score,details:`Score:${score}`})
    }
    return results
  }
}
class TestSuite {
  private tests: Array&lt;{name:string;fn:()=&gt;Promise&lt;{passed:boolean;details:string}&gt;>} = []
  add(name: string, fn: ()=>Promise&lt;{passed:boolean;details:string}&gt;): void { this.tests.push({name,fn}) }
  async run(): Promise&lt;{total:number;passed:number;failed:number;results:string[]}&gt; {
    let passed=0; const results:string[] = []
    for(const t of this.tests) try { const r = await t.fn()
      if(r.passed){passed++;results.push(`PASS ${t.name}`)} else results.push(`FAIL ${t.name}: ${r.details}`)
    } catch(e) { results.push(`FAIL ${t.name}: ${(e as Error).message}`) }
    return {total:this.tests.length,passed,failed:this.tests.length-passed,results}
  }
}
export { AIEvaluator, TestSuite }
## Exercises

1. **Prompt pattern comparison:** Pick a problem (e.g., "Explain the difference between supervised and unsupervised learning"). Write prompts using zero-shot, few-shot CoT, and self-consistency CoT. Compare output quality.

2. **Structured output schema:** Design a Pydantic model for extracting job posting data (title, company, salary range, required skills, remote policy). Test it on 5 real job postings.

3. **Prompt registry:** Build a PromptTemplate registry for your RAG agent. Version a prompt and run a regression suite comparing v1 and v2.

4. **Injection defense:** Write 10 prompt injection attempts targeting your system prompt. Test your defense pipeline against them and report the detection rate.

5. **A/B test:** Design a prompt A/B test comparing two versions of your RAG system prompt. Define the metric, run for 50 samples per variant, and analyze the results.
