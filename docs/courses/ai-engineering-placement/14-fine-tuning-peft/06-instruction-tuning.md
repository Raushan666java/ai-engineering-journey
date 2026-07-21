# Instruction Tuning

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand instruction tuning dataset formats |
| LO2 | Implement chat templates and multi-turn conversations |
| LO3 | Design effective system prompts and instruction formats |
| LO4 | Evaluate instruction-tuned model quality |

## Introduction

Understanding instruction tuning is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering instruction tuning.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures


## Theory

Understanding instruction tuning is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how instruction tuning works in practice.

### Key Concepts

- **Core Principle**: The foundational idea behind instruction tuning
- **How It Works**: The mechanism and process involved
- **Why It Matters**: Relevance to AI engineering and real-world applications
- **Trade-offs**: Advantages and limitations to consider

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 6.1 | Dataset Formats | Alpaca, ShareGPT, Dolly formats |
| 6.2 | Chat Templates | System, user, assistant roles |
| 6.3 | Multi-Turn | Conversation history, context retention |
| 6.4 | System Prompts | Behavior control, persona setting |
| 6.5 | Quality | Dataset deduplication, filtering, balancing |

## Chapter Roadmap

```mermaid
flowchart TD
    subgraph Dataset
        R[Raw Instructions]
        F[Format Converter]
    end
    subgraph Template
        S[System Prompt]
        U[User Message]
        A[Assistant Response]
        H[History]
    end
    subgraph Training
        T[Tokenize]
        L[Train with SFT]
        E[Evaluate]
    end
    R --> F --> S & U & A
    H --> U
    S & U & A & H --> T --> L --> E
```text

## 6.1 Dataset Formats

### 6.1.1 Format Registry

```python
from dataclasses import dataclass, field
from typing import List, Dict, Optional, Any
import json


@dataclass
class InstructionExample:
    instruction: str
    input: Optional[str] = None
    output: str = ""
    system: Optional[str] = None
    history: List[Dict[str, str]] = field(default_factory=list)


class FormatConverter:
    def __init__(self):
        self.formats = {
            "alpaca": self._to_alpaca,
            "sharegpt": self._to_sharegpt,
            "dolly": self._to_dolly,
            "oasst": self._to_oasst,
            "custom": self._to_custom,
        }

    def convert(self, example: InstructionExample, target_format: str) -> str:
        converter = self.formats.get(target_format)
        if not converter:
            raise ValueError(f"Unknown format: {target_format}")
        return converter(example)

    def _to_alpaca(self, ex: InstructionExample) -> str:
        if ex.input:
            return f"Below is an instruction that describes a task.\n\n### Instruction:\n{ex.instruction}\n\n### Input:\n{ex.input}\n\n### Response:\n{ex.output}"
        return f"Below is an instruction that describes a task.\n\n### Instruction:\n{ex.instruction}\n\n### Response:\n{ex.output}"

    def _to_sharegpt(self, ex: InstructionExample) -> str:
        turns = []
        if ex.system:
            turns.append({"from": "system", "value": ex.system})

        history = ex.history or []
        for turn in history:
            turns.append({"from": turn.get("role", "user"), "value": turn.get("content", "")})

        turns.append({"from": "human", "value": ex.instruction})
        if ex.input:
            turns[-1]["value"] += f"\n{ex.input}"
        turns.append({"from": "gpt", "value": ex.output})

        return json.dumps({"conversations": turns})

    def _to_dolly(self, ex: InstructionExample) -> str:
        return json.dumps({
            "instruction": ex.instruction,
            "context": ex.input or "",
            "response": ex.output,
            "category": "instruction_following",
        })

    def _to_oasst(self, ex: InstructionExample) -> str:
        messages = []
        messages.append({"role": "user", "content": ex.instruction})
        if ex.input:
            messages[-1]["content"] += f"\n{ex.input}"
        messages.append({"role": "assistant", "content": ex.output})
        return json.dumps(messages)

    def _to_custom(self, ex: InstructionExample) -> str:
        template = ex.system or ""
        template += f"\nUser: {ex.instruction}"
        if ex.input:
            template += f"\nContext: {ex.input}"
        template += f"\nAssistant: {ex.output}"
        return template


converter = FormatConverter()
ex = InstructionExample(
    instruction="Explain what machine learning is",
    input="Keep it simple",
    output="Machine learning is teaching computers to learn from data...",
    system="You are a helpful tutor.",
)
for fmt in ["alpaca", "dolly", "custom"]:
    print(f"\n--- {fmt} ---")
    print(converter.convert(ex, fmt)[:100] + "...")
```text

### 6.1.2 Dataset Loader

```python
class InstructionDataset:
    def __init__(self, format: str = "alpaca"):
        self.format = format
        self.examples: List[InstructionExample] = []

    def add(self, ex: InstructionExample):
        self.examples.append(ex)

    def add_batch(self, examples: List[InstructionExample]):
        self.examples.extend(examples)

    def to_training_format(self, converter: FormatConverter) -> List[str]:
        return [converter.convert(ex, self.format) for ex in self.examples]

    def statistics(self) -> Dict:
        if not self.examples:
            return {"count": 0}

        avg_instr_len = sum(len(e.instruction.split()) for e in self.examples) / len(self.examples)
        avg_output_len = sum(len(e.output.split()) for e in self.examples) / len(self.examples)
        has_input = sum(1 for e in self.examples if e.input)
        has_system = sum(1 for e in self.examples if e.system)
        has_history = sum(1 for e in self.examples if e.history)

        return {
            "count": len(self.examples),
            "avg_instruction_words": round(avg_instr_len, 1),
            "avg_output_words": round(avg_output_len, 1),
            "with_input": has_input,
            "with_system": has_system,
            "with_history": has_history,
        }


ds = InstructionDataset()
ds.add_batch([InstructionExample(instruction=f"Task {i}", output=f"Answer {i}") for i in range(10)])
print(f"Dataset stats: {ds.statistics()}")
```text

## 6.2 Chat Templates

### 6.2.1 Template Engine

```python
class ChatTemplate:
    def __init__(self, template_name: str = "llama"):
        self.templates = {
            "llama": {
                "system": "<s>[INST] <<SYS>>\n{system}\n<</SYS>>\n\n{instruction} [/INST]",
                "user": "<s>[INST] {message} [/INST]",
                "assistant": "{response}</s>",
                "bos": "<s>",
                "eos": "</s>",
            },
            "chatml": {
                "system": "<|im_start|>system\n{system}<|im_end|>\n",
                "user": "<|im_start|>user\n{message}<|im_end|>\n",
                "assistant": "<|im_start|>assistant\n{response}<|im_end|>\n",
                "bos": "",
                "eos": "<|im_end|>",
            },
            "mistral": {
                "system": "[INST] {instruction} [/INST]",
                "user": "[INST] {message} [/INST]",
                "assistant": "{response}",
                "bos": "<s>",
                "eos": "</s>",
            },
            "gemma": {
                "system": "<bos>{instruction}",
                "user": "<start_of_turn>user\n{message}<end_of_turn>\n",
                "assistant": "<start_of_turn>model\n{response}<end_of_turn>\n",
                "bos": "<bos>",
                "eos": "<eos>",
            },
        }

    def format(self, messages: List[Dict[str, str]],
               template_name: str = "llama") -> str:
        template = self.templates.get(template_name)
        if not template:
            raise ValueError(f"Unknown template: {template_name}")

        result = ""
        for msg in messages:
            role = msg.get("role", "user")
            content = msg.get("content", "")

            if role == "system":
                result += template["system"].format(system=content, instruction="")
            elif role == "user":
                result += template["user"].format(message=content)
            elif role == "assistant":
                result += template["assistant"].format(response=content)

        return result

    def list_templates(self) -> List[str]:
        return list(self.templates.keys())


tpl = ChatTemplate()
messages = [
    {"role": "system", "content": "You are a coding assistant."},
    {"role": "user", "content": "Write a Python function"},
    {"role": "assistant", "content": "Here's a function..."},
]
print("ChatML:", tpl.format(messages, "chatml")[:80] + "...")
print("Llama:", tpl.format(messages, "llama")[:80] + "...")
```text

### 6.2.2 Multi-Turn Formatter

```python
class MultiTurnFormatter:
    def __init__(self, template: ChatTemplate, template_name: str = "chatml"):
        self.template = template
        self.name = template_name

    def format_conversation(self, turns: List[Dict]) -> str:
        return self.template.format(turns, self.name)

    def extract_last_turn(self, conversation: str) -> str:
        if self.name == "chatml":
            parts = conversation.split("<|im_start|>assistant\n")
            if len(parts) > 1:
                last = parts[-1].split("<|im_end|>")[0]
                return last
        elif self.name == "llama":
            parts = conversation.split("[/INST]")
            if len(parts) > 1:
                return parts[-1].strip()
        return ""

    def build_training_example(self, turns: List[Dict]) -> str:
        formatted = self.format_conversation(turns[:-1])
        target = turns[-1].get("content", "")
        return formatted + target


formatter = MultiTurnFormatter(tpl, "chatml")
conversation = [
    {"role": "user", "content": "What is Python?"},
    {"role": "assistant", "content": "Python is a programming language."},
    {"role": "user", "content": "Give an example"},
    {"role": "assistant", "content": "print('Hello')"},
]
training_ex = formatter.build_training_example(conversation)
print(f"Training example length: {len(training_ex)} chars")
```text

## 6.3 Multi-Turn Conversations

### 6.3.1 Conversation Manager

```python
class ConversationManager:
    def __init__(self, max_history: int = 10, max_tokens: int = 2048):
        self.max_history = max_history
        self.max_tokens = max_tokens
        self.history: List[Dict] = []

    def add_turn(self, role: str, content: str):
        self.history.append({"role": role, "content": content})
        if len(self.history) > self.max_history * 2:
            self.history = self.history[-(self.max_history * 2):]

    def get_context(self, tokenizer_fn: Callable = None) -> str:
        total_tokens = 0
        context = []

        for turn in reversed(self.history):
            tokens = len(turn["content"].split()) * 1.3
            if total_tokens + tokens > self.max_tokens:
                break
            context.insert(0, turn)
            total_tokens += tokens

        return context

    def clear(self):
        self.history = []

    def export(self) -> List[Dict]:
        return self.history.copy()


cm = ConversationManager(max_history=5)
cm.add_turn("user", "What is RAG?")
cm.add_turn("assistant", "RAG stands for Retrieval-Augmented Generation.")
cm.add_turn("user", "How does it work?")
cm.add_turn("assistant", "It retrieves relevant documents and feeds them to the LLM.")
context = cm.get_context()
print(f"Context length: {len(context)} turns")
```text

### 6.3.2 Context Window Management

```python
class ContextWindowManager:
    def __init__(self, max_tokens: int = 4096, token_buffer: int = 512):
        self.max_tokens = max_tokens
        self.buffer = token_buffer

    def fit_in_window(self, turns: List[Dict],
                      token_estimator: Callable) -> List[Dict]:
        available = self.max_tokens - self.buffer
        fitted = []

        for turn in reversed(turns):
            tokens = token_estimator(turn.get("content", ""))
            if available - tokens < 0:
                break
            fitted.insert(0, turn)
            available -= tokens

        return fitted

    def needs_summarization(self, turns: List[Dict],
                            token_estimator: Callable) -> bool:
        total = sum(token_estimator(t.get("content", "")) for t in turns)
        return total > self.max_tokens * 0.8

    def create_summary_prompt(self, turns: List[Dict]) -> str:
        return f"Summarize the conversation so far:\n{turns[-1].get('content', '')}"


cwm = ContextWindowManager(max_tokens=4096)
turns = [{"role": "user", "content": f"Message {i}" * 50} for i in range(20)]
estimator = lambda s: len(s.split()) * 1.3
print(f"Needs summarization: {cwm.needs_summarization(turns, estimator)}")
```text

## 6.4 System Prompts

### 6.4.1 System Prompt Designer

```python
class SystemPromptDesigner:
    def __init__(self):
        self.patterns = {
            "persona": "You are {persona}. {behavior}",
            "format": "Respond in {format}. {constraints}",
            "constraint": "Rules: {rules}",
            "style": "Use a {tone} tone. {audience}",
        }

    def create(self, persona: str = "", behavior: str = "",
               format: str = "", rules: List[str] = None,
               tone: str = "", audience: str = "") -> str:
        parts = []

        if persona:
            parts.append(self.patterns["persona"].format(persona=persona, behavior=behavior))

        if format:
            parts.append(self.patterns["format"].format(format=format, constraints=""))

        if rules:
            rules_text = "\n".join(f"- {r}" for r in rules)
            parts.append(self.patterns["constraint"].format(rules=rules_text))

        if tone:
            parts.append(self.patterns["style"].format(tone=tone, audience=audience))

        return "\n\n".join(parts)

    def examples(self) -> Dict[str, str]:
        return {
            "coding_assistant": self.create(
                persona="an expert software engineer",
                behavior="help users write clean, efficient code.",
                format="markdown code blocks",
                rules=["Explain your reasoning", "Provide examples", "Handle edge cases"],
                tone="professional",
            ),
            "tutor": self.create(
                persona="a patient teacher",
                behavior="explain concepts clearly and thoroughly.",
                format="simple language with examples",
                rules=["Check for understanding", "Adjust to user's level"],
                tone="encouraging",
            ),
        }


designer = SystemPromptDesigner()
for name, prompt in designer.examples().items():
    print(f"\n=== {name} ===")
    print(prompt[:200] + "...")
```text

### 6.4.2 System Prompt Evaluation

```python
class SystemPromptEvaluator:
    def __init__(self):
        self.criteria = ["clarity", "specificity", "constraints", "persona"]

    def evaluate(self, prompt: str) -> Dict:
        scores = {}
        for criterion in self.criteria:
            if criterion == "clarity":
                words = len(prompt.split())
                scores[criterion] = min(words / 20, 1.0) if words >= 10 else words / 10
            elif criterion == "specificity":
                has_format = any(w in prompt.lower() for w in ["format", "style", "json", "markdown"])
                scores[criterion] = 0.8 if has_format else 0.3
            elif criterion == "constraints":
                has_rules = "rule" in prompt.lower() or "don't" in prompt.lower() or "must" in prompt.lower()
                scores[criterion] = 0.9 if has_rules else 0.2
            elif criterion == "persona":
                has_persona = any(w in prompt.lower() for w in ["you are", "act as", "role"])
                scores[criterion] = 0.9 if has_persona else 0.1

        scores["overall"] = sum(scores.values()) / len(scores)
        scores["needs_improvement"] = scores["overall"] < 0.5
        return scores


evaluator = SystemPromptEvaluator()
prompt = "You are an expert. Answer questions about Python."
print(f"Prompt evaluation: {evaluator.evaluate(prompt)}")
```text

## 6.5 Quality

### 6.5.1 Dataset Quality Filters

```python
class DatasetQualityFilter:
    def __init__(self):
        self.filters = [
            ("short_output", self._filter_short_output),
            ("duplicate_instruction", self._filter_duplicates),
            ("low_quality", self._filter_low_quality),
        ]

    def filter(self, dataset: List[InstructionExample]) -> List[InstructionExample]:
        filtered = dataset[:]
        for name, filter_fn in self.filters:
            before = len(filtered)
            filtered = filter_fn(filtered)
            after = len(filtered)
            print(f"  {name}: removed {before - after} examples")
        return filtered

    def _filter_short_output(self, examples: List[InstructionExample]) -> List[InstructionExample]:
        return [e for e in examples if len(e.output.split()) >= 5]

    def _filter_duplicates(self, examples: List[InstructionExample]) -> List[InstructionExample]:
        seen = set()
        unique = []
        for e in examples:
            key = e.instruction.lower().strip()
            if key not in seen:
                seen.add(key)
                unique.append(e)
        return unique

    def _filter_low_quality(self, examples: List[InstructionExample]) -> List[InstructionExample]:
        filtered = []
        for e in examples:
            score = self._quality_score(e)
            if score >= 0.5:
                filtered.append(e)
        return filtered

    def _quality_score(self, example: InstructionExample) -> float:
        score = 0.0
        if len(example.instruction) > 10:
            score += 0.3
        if len(example.output) > 20:
            score += 0.3
        if example.output.strip().endswith((".", "!", "?")):
            score += 0.2
        if not any(w in example.output.lower() for w in ["error", "undefined", "nan"]):
            score += 0.2
        return score


raw = [
    InstructionExample(instruction="Hi", output="Hello"),
    InstructionExample(instruction="Explain AI", output="AI is artificial intelligence."),
    InstructionExample(instruction="Explain AI", output="Full explanation..."),
    InstructionExample(instruction="Code", output="x"),
]
filter_obj = DatasetQualityFilter()
clean = filter_obj.filter(raw)
print(f"Clean dataset: {len(clean)} examples")
```text

### 6.5.2 Class Balancing

```python
class DatasetBalancer:
    def __init__(self, categories: Dict[str, int] = None):
        self.categories = categories or {}

    def analyze(self, dataset: List[InstructionExample]) -> Dict[str, int]:
        distribution = {}
        for ex in dataset:
            cat = self._categorize(ex)
            distribution[cat] = distribution.get(cat, 0) + 1
        return distribution

    def balance(self, dataset: List[InstructionExample],
                target_per_category: int = 1000) -> List[InstructionExample]:
        balanced = {}
        for ex in dataset:
            cat = self._categorize(ex)
            if cat not in balanced:
                balanced[cat] = []
            if len(balanced[cat]) < target_per_category:
                balanced[cat].append(ex)

        result = []
        for cat, examples in balanced.items():
            result.extend(examples)

        return result

    def _categorize(self, example: InstructionExample) -> str:
        instruction = example.instruction.lower()
        if any(w in instruction for w in ["write", "code", "implement", "function"]):
            return "coding"
        elif any(w in instruction for w in ["explain", "what", "describe", "define"]):
            return "knowledge"
        elif any(w in instruction for w in ["summarize", "summarise", "extract"]):
            return "summarization"
        elif any(w in instruction for w in ["translate", "convert"]):
            return "translation"
        else:
            return "general"


balancer = DatasetBalancer()
examples = [InstructionExample(instruction="Write a function", output="def f(): pass") for _ in range(50)]
examples += [InstructionExample(instruction="Explain gravity", output="Gravity is...") for _ in range(200)]
dist = balancer.analyze(examples)
print(f"Distribution: {dist}")
```text

## Summary

Instruction tuning transforms a base LLM into a chat/assistant model by training on formatted instruction-output pairs. Common dataset formats include Alpaca (instruction/input/output), ShareGPT (conversation turns), Dolly (instruction/context/response), and OASST (role-based messages). Chat templates (Llama, ChatML, Mistral, Gemma) define how system, user, and assistant messages are structured with bos/eos tokens. Multi-turn conversations require context window management — truncating older turns when exceeding token limits. System prompts control model behavior through persona, format instructions, constraints, and tone. Dataset quality is improved through deduplication, filtering short/low-quality examples, and balancing across categories (coding, knowledge, summarization, translation, general).

## Practical Takeaways

| Takeaway | Description |
|----------|-------------|
| Choose a template early | Consistent formatting is critical for training quality |
| Deduplicate instructions | Duplicates bias training toward repeated patterns |
| Balance categories | Prevents the model from over-specializing |
| Design system prompts carefully | They control the model's behavior during training |
| Manage context window | Multi-turn training requires sliding window or summarization |
| Filter low-quality examples | Short or incomplete outputs degrade model quality |

## Interview Q&A

<details class="tp-qa-card" data-qid="ft06-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: What is instruction tuning and why is it important?
  </summary>
  <div class="tp-qa-answer">
    <p>Instruction tuning is a fine-tuning technique where a language model is trained on (instruction, response) pairs to improve its ability to follow diverse instructions. It transforms a base pre-trained LLM (which predicts next tokens but doesn't follow instructions) into a helpful assistant that can understand and execute user requests. Instruction tuning is important because: (1) it aligns the model with human intent — the model learns to produce responses that satisfy the user's explicit request rather than just continuing the text; (2) it improves generalization to unseen instructions — models trained on diverse instructions can generalize to new tasks they weren't explicitly trained on; (3) it enables zero-shot task performance — after instruction tuning, the model can perform tasks from natural language descriptions without examples. The process uses a dataset of (instruction, response) pairs — typically 10K-100K examples covering diverse tasks (writing, coding, analysis, creative, Q&A). FLAN (Finetuned Language Net) demonstrated that instruction tuning on a broad range of tasks improves both task-specific performance and generalization to held-out tasks.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft06-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: What are the common instruction tuning dataset formats?
  </summary>
  <div class="tp-qa-answer">
    <p>Common instruction tuning dataset formats: (1) (instruction, output) — the simplest format: <code>{"instruction": "Write a poem about AI", "output": "Here is a poem..."}</code>. Used by Alpaca, Dolly, and ShareGPT datasets; (2) (instruction, input, output) — includes optional input context: <code>{"instruction": "Summarize this text", "input": "Long article text...", "output": "Summary..."}</code>. The input field provides context while the instruction specifies the task. Used by the FLAN dataset; (3) Multi-turn conversation — list of messages with roles: <code>[{"role": "system", "content": "You are a helpful assistant."}, {"role": "user", "content": "Hello"}, {"role": "assistant", "content": "Hi! How can I help?"}]</code>. Used by OpenAssistant, LMSYS-Chat-1M; (4) ShareGPT format — JSON array of conversation turns from real ChatGPT interactions. Each example has an "id" and "conversations" array with "from" (human/gpt) and "value" fields. The format must match the model's chat template — for Llama-chat models, use the standard huggingface chat template format. Consistency is critical: all examples in the dataset should use the same format. The chosen format is applied via a formatting function during data loading that converts raw examples into tokenized sequences.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft06-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: How do you implement chat templates and multi-turn conversations?
  </summary>
  <div class="tp-qa-answer">
    <p>Chat templates define how conversation turns are formatted into a single tokenizable string. HuggingFace's <code>apply_chat_template()</code> method handles this: (1) each model has a predefined chat template in its tokenizer configuration (<code>tokenizer.chat_template</code>) — for Llama-3, it uses <code>"<|begin_of_text|><|start_header_id|>system<|end_header_id|>\n\n{system_message}<|eot_id|><|start_header_id|>user<|end_header_id|>\n\n{user_message}<|eot_id|><|start_header_id|>assistant<|end_header_id|>\n\n{assistant_message}<|eot_id|>"</code>; (2) for training, format each conversation: <code>tokenizer.apply_chat_template(conversation, tokenize=False, add_generation_prompt=False)</code> produces the full string including all turns; (3) tokenize the full string and create labels where only assistant tokens contribute to loss — user and system tokens have labels = -100 (ignored in loss). Implementation: a formatting function applies the chat template, then the data collator creates proper labels by masking non-assistant tokens. Multi-turn conversations help the model learn to maintain context and consistency across multiple exchanges. The quality of the chat template implementation directly affects training quality — a mismatch between training and inference format degrades performance.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft06-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: How do you design effective system prompts for instruction tuning?
  </summary>
  <div class="tp-qa-answer">
    <p>Designing effective system prompts for instruction tuning: (1) Role definition — clearly define the model's persona: "You are a helpful, harmless, and honest AI assistant." More specific roles improve task performance: "You are an expert Python programmer who writes clean, well-documented code."; (2) Behavior guidelines — specify desired behaviors: response style (concise vs. detailed), formatting preferences (use markdown, bullet points), safety guidelines (refuse harmful requests politely); (3) Capability boundaries — state what the model can and cannot do: "You can use tools to search the web but cannot access real-time data." Good system prompts improve instruction following by providing consistent context across all training examples. During dataset creation, the system prompt is prepended to every training example (as the first message in the conversation). Some datasets use a single system prompt for all examples, while others vary the system prompt per example to improve generalization. Recommended: use a single consistent system prompt aligned with the target deployment persona, with 10-20% of training examples having slightly varied prompts for robustness.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft06-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: How do you create loss masking for instruction tuning?
  </summary>
  <div class="tp-qa-answer">
    <p>Loss masking in instruction tuning ensures the model only learns to predict assistant responses, not the system prompt or user instructions. Implementation: (1) after tokenizing the full conversation (system + user + assistant messages), create a labels tensor identical to input_ids; (2) identify token positions corresponding to the system prompt and user messages — these are typically determined by the chat template structure (e.g., tokens between <|start_header_id|>user<|end_header_id|> and <|start_header_id|>assistant<|end_header_id|> are user tokens); (3) set labels to -100 for all non-assistant token positions — PyTorch's cross-entropy loss ignores positions with label = -100; (4) assistant tokens keep their original labels (the next-token prediction target). A helper function processes each tokenized conversation: iterate through the token IDs, find the assistant turn boundaries (based on the chat template's special tokens), and create the mask. Some datasets pre-tokenize with labels already set. Correct loss masking is critical — without it, the model would learn to predict user messages and system prompts, wasting model capacity and potentially learning to repeat user inputs. Masking ensures the model only learns the desired assistant behavior.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft06-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: How do you evaluate instruction-tuned model quality?
  </summary>
  <div class="tp-qa-answer">
    <p>Evaluating instruction-tuned models requires multiple approaches: (1) Automated benchmarks — MT-Bench (multi-turn conversation quality judged by GPT-4), AlpacaEval (single-turn instruction following), Chatbot Arena (human preference rankings from real conversations), MMLU (knowledge and reasoning), HumanEval (code generation). These provide standardized comparison scores; (2) Task-specific evaluation — create a test set of held-out instructions representative of the target use case. Use LLM-as-judge (GPT-4 evaluating responses) or human evaluation to score responses on helpfulness, correctness, and format compliance; (3) Side-by-side comparison — present the same instruction to the base model and the instruction-tuned model, comparing response quality. A/B testing with real users provides the most reliable quality signal; (4) Safety evaluation — test with adversarial inputs (jailbreak attempts, harmful requests) to ensure the model refuses appropriately; (5) Regression testing — evaluate on general benchmarks before and after instruction tuning to detect catastrophic forgetting of general capabilities. For production, create an automated evaluation pipeline that runs after each training run and compares against the previous version's scores.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft06-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: How do you construct a diverse instruction tuning dataset?
  </summary>
  <div class="tp-qa-answer">
    <p>Constructing a diverse instruction tuning dataset: (1) Task categories — include diverse task types: brainstorming (30%), creative writing (20%), information extraction (15%), reasoning/analysis (15%), coding (10%), Q&A (10%). Each category has subcategories (brainstorming: ideas, solutions, names, strategies); (2) Difficulty levels — mix simple instructions ("What is 2+2?"), medium ("Explain how transformers work"), and hard ("Write a distributed consensus algorithm"). Aim for 40% easy, 40% medium, 20% hard; (3) Instruction styles — vary verb phrasing ("Write", "Create", "Generate", "Explain", "Analyze", "Compare", "Summarize", "List", "Describe", "Draft"), length (short vs. detailed instructions), and specificity (open-ended vs. constrained); (4) Input variations — for tasks with input context, vary input length (short phrase, paragraph, multi-page) and complexity; (5) Sources — use public datasets (Dolly, OpenAssistant, ShareGPT, FLAN), synthetic data from stronger models (GPT-4 generated instructions), and real user data from production logs. A dataset quality checker validates: no duplicates, balanced category distribution, minimum instruction length (10 chars), and consistent formatting. Quality > quantity — 10K carefully curated examples outperform 100K noisy ones.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft06-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: What training hyperparameters work best for instruction tuning?
  </summary>
  <div class="tp-qa-answer">
    <p>Recommended hyperparameters for instruction tuning with LoRA: (1) Learning rate — 2e-4 to 5e-4 for LoRA (higher than full fine-tuning because only 0.1-1% of parameters are trainable). Use cosine scheduler with 10% warmup steps. Larger models (33B+) need lower LR (1e-4); (2) Batch size — effective batch size of 64-128 (micro_batch_size — gradient_accumulation_steps). Larger batch sizes give more stable gradients; (3) Epochs — 1-3 epochs. Instruction tuning datasets don't need many epochs — the model should learn general patterns, not memorize examples. Monitor validation loss to detect overfitting; (4) LoRA rank — r=16 for Q+V projections. Higher rank (r=32-64) may help for complex multi-turn datasets; (5) Max sequence length — 2048-4096 tokens, matching the target deployment context length. Longer sequences capture more context but use more memory; (6) Weight decay — 0.01 (AdamW default); (7) Warmup ratio — 0.1 (10% of total steps for learning rate warmup). For QLoRA (4-bit base): use slightly higher LR (3e-4 to 5e-4) and consider adding 0.1 LoRA dropout for regularization. Monitor loss curves — training loss should decrease steadily and plateau without spiking.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft06-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: How do you handle system prompts in instruction tuning datasets?
  </summary>
  <div class="tp-qa-answer">
    <p>System prompts set the context and behavior guidelines for the model. In instruction tuning, handling system prompts correctly is important for consistency between training and inference. Approaches: (1) Single system prompt — use one fixed system prompt for all training examples (e.g., "You are a helpful AI assistant."). This is simplest and ensures the model learns to follow instructions given that specific system prompt. During inference, use the same system prompt; (2) Variable system prompts — vary the system prompt per example (different roles, different behavior guidelines). This improves robustness — the model learns to adapt to different system prompts. Include 10-20 different system prompts in the dataset; (3) No system prompt — some datasets omit system prompts entirely and only use user/assistant turns. The model learns to infer the task from the user message alone. The chosen system prompt must be applied consistently during the chat template formatting — it becomes the first message in the conversation. During training, the system prompt tokens are part of the prompt (loss-masked), not the target. The system prompt's content influences the model's behavior — include the exact system prompt that will be used in production for the most consistent results.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="ft06-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: How do you prevent overfitting in instruction tuning?
  </summary>
  <div class="tp-qa-answer">
    <p>Preventing overfitting in instruction tuning: (1) Dataset quality — ensure diversity and remove near-duplicates. If 90% of examples ask "write a poem," the model will overfit to poetry generation. Use deduplication (embedding-based similarity to remove examples with >0.85 cosine similarity); (2) Early stopping — monitor validation loss on a held-out set (10% of data). Stop training when validation loss stops improving, typically after 1-3 epochs. Use a patience parameter (stop after 3 epochs of no improvement); (3) Regularization — LoRA dropout (0.05-0.1), weight decay (0.01), and LoRA's inherent low rank (r=8-16) naturally limits memorization capacity; (4) Data augmentation — paraphrase instructions, vary formatting, and add noise to reduce memorization; (5) General capability evaluation — evaluate on unrelated benchmarks (MMLU, GSM8K) before and after training. If MMLU score drops by >3%, overfitting is occurring — reduce epochs or increase regularization. Overfitting symptoms: training loss near 0 but validation loss increases, model generates outputs that copy training examples, model fails on novel instructions of similar types. The most effective prevention is high-quality diverse data + early stopping + LoRA's inherent regularization.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

<details data-qid="ft-s6-quiz1">
<summary><strong>1.</strong> What does the Alpaca format use to separate sections?</summary>
A. XML tags
B. ### headers
C. JSON
D. Markdown
Answer: B
</details>

<details data-qid="ft-s6-quiz2">
<summary><strong>2.</strong> What is the purpose of a chat template?</summary>
A. To make responses look pretty
B. To structure system/user/assistant messages with correct bos/eos tokens
C. To compress conversations
D. To validate JSON output
Answer: B
</details>

<details data-qid="ft-s6-quiz3">
<summary><strong>3.</strong> Why deduplicate instructions in a dataset?</summary>
A. To reduce file size
B. To prevent bias toward repeated patterns
C. To speed up training
D. To improve formatting
Answer: B
</details>

<details data-qid="ft-s6-quiz4">
<summary><strong>4.</strong> What should happen when a conversation exceeds the context window?</summary>
A. Crash
B. Truncate older turns or summarize
C. Ignore the limit
D. Reduce response length
Answer: B
</details>

<details data-qid="ft-s6-quiz5">
<summary><strong>5.</strong> Why balance categories in instruction tuning data?</summary>
A. To reduce storage
B. To prevent the model from over-specializing on one task type
C. To make training faster
D. To improve formatting
Answer: B
</details>

## Exercises


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition1. Implement a format converter that converts between Alpaca, ShareGPT, and ChatML formats. Take 10 examples in Alpaca format, convert to ShareGPT, and verify correctness.

2. Build a chat template engine supporting Llama, ChatML, Mistral, and Gemma formats. Format a 3-turn conversation with each template.

3. Create a multi-turn conversation manager with context window management. Test with conversations that exceed the token limit and implement truncation.

4. Design 5 system prompts for different personas: coding assistant, tutor, translator, creative writer, and therapist. Evaluate each with a scoring rubric.

5. Build a dataset quality pipeline: load 100 instruction examples, deduplicate, filter low-quality (output < 10 words), balance across 5 categories, and report before/after st

## Revision Notes

- Key concept 1: Core principle of 14-fine-tuning-peft
- Key concept 2: Common implementation pattern
- Key concept 3: Time/space complexity to remember
- Key concept 4: When to apply this technique
- Key concept 5: Common interview pattern
- Key concept 6: Edge cases to handle
- Key concept 7: Related concepts for deeper understanding

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of 14-fine-tuning-peft. When would you choose one approach over another?
2. Design a system that efficiently handles 14-fine-tuning-peft at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 14-fine-tuning-peft. What was your approach and what was the result?
2. How would you explain 14-fine-tuning-peft to a non-technical stakeholder?

#### Microsoft Style
1. How does 14-fine-tuning-peft integrate with enterprise systems and cloud architectures?
2. What are the security implications of 14-fine-tuning-peft?

#### NVIDIA Style
1. How would you optimize 14-fine-tuning-peft for GPU-accelerated computing?
2. What parallel processing patterns apply to 14-fine-tuning-peft?

#### AI Startup Style
1. How would you implement 14-fine-tuning-peft in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 14-fine-tuning-peft?

### Resume Tips
- **Technical Skills**: List 14-fine-tuning-peft under relevant technical skills
- **Project Description**: "Implemented 14-fine-tuning-peft to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 14-fine-tuning-peft in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 14-fine-tuning-peft
- [ ] Practice 3-5 problems related to 14-fine-tuning-peft
- [ ] Prepare 2 real-world examples of using 14-fine-tuning-peft
- [ ] Know the time/space complexity of common 14-fine-tuning-peft operations
- [ ] Have questions ready about how the company uses 14-fine-tuning-peftatistics.
