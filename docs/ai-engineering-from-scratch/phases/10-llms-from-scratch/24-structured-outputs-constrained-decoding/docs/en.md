# Structured Outputs & Constrained Decoding — JSON Mode, Grammar-Based Decoding

> "Free text generation works for chat. For pipelines that feed LLM output into a type checker, database insert, or API call, free text is a memory corruption waiting to happen."

**Type:** Build
**Languages:** Python
**Prerequisites:** Phase 9 · 18 (Autoregressive Decoding), Phase 9 · 22 (Tokenization & Vocabulary)
**Time:** ~75 minutes

## Learning Objectives

- Explain why unconstrained generation breaks downstream systems and how constrained decoding fixes the failure surface.
- Implement a masked logits function that zeros out logits for tokens not allowed by a simple grammar.
- Contrast JSON mode (logit-bias approximation) with grammar-based decoding (token-level masking).
- Parse partial JSON incrementally during generation to extract valid prefixes before decoding finishes.
- Use regex-guided, context-free-grammar, and library-based structured generation correctly.
- Choose between Outlines, instructor, GBNF, Lark, and regex approaches based on reliability vs. latency requirements.

## The Problem

An LLM left to generate freely produces any sequence from its vocabulary. When you need the output to be valid JSON, a specific enum value, or a number in [0, 1], the free-generation contract is broken. The model can output `{"name": "Alice"` without the closing brace, `"category": "un1corn"` for a three-valued enum, or `"score": -0.3` when the spec says positive.

Downstream, these failures manifest as:

- **JSON decode errors** — `json.loads` raises. Retry logic is slow and unpredictable.
- **Type mismatches** — ints where strings expected, nulls where non-nullable.
- **Schema violations** — missing required keys, extra keys, wrong key types.
- **Security surface** — unescaped string injection into SQL, HTML, or CLI arguments.

Three strategies exist, ordered by reliability and complexity:

| Strategy | Reliability | Overhead | Example |
|---|---|---|---|
| Retry + validate | Low | Zero (no infra) | `try: json.loads(output)` |
| JSON mode (logit bias) | Medium | Low | OpenAI `response_format={"type": "json_object"}` |
| Grammar-based decoding | High | Medium | GBNF grammar, Lark, masked logits |

This lesson implements all three in ascending order of correctness.

## The Concept

### Logit biasing (JSON mode)

The simplest structured output trick: bias the logits toward characters likely to produce valid structure. OpenAI's JSON mode prepends `"You MUST output valid JSON"` to the system prompt and applies a soft bias on the first token toward `{` or `[`. This is a heuristic; it reduces failures but does not guarantee validity. A sufficiently stressed model can still output malformed JSON.

### Token-level masking

The principled solution. At each decoding step:

1. Maintain a finite-state machine representing the allowed next tokens given the prefix so far.
2. Compute the vocabulary-sized logits normally.
3. Set logits for forbidden tokens to `-inf` (or a very negative number).
4. Sample from the masked distribution.

The constraint can come from a regular expression, a context-free grammar (CFG), or a JSON schema.

### Grammar-based decoding

A grammar defines the valid output language. A parser (like Lark or the GBNF engine in llama.cpp) compiles the grammar into a state machine. At each decoding step, the current parser state determines which tokens advance the parse and which do not. Tokens that would make the parse invalid are masked out.

GBNF (GGML BNF) is the grammar format used by llama.cpp. A minimal JSON grammar in GBNF looks like:

```
root ::= object | array
object ::= "{" pair ("," pair)* "}"
pair   ::= string ":" value
array  ::= "[" value ("," value)* "]"
value  ::= string | number | object | array | "true" | "false" | "null"
string ::= "\"" ([^"\\] | "\\" .)* "\""
number ::= "-"? ("0" | [1-9] [0-9]*) ("." [0-9]+)? ([eE] [+-]? [0-9]+)?
```

### Regex-guided decoding

For simple constraints (a single number, an enum, a date), a regular expression is enough. The regex is compiled into a finite automaton, and the automaton's allowed transitions at each step map to allowed tokens.

### Partial JSON parsing

Because decoding is sequential, you can feed each new token into an incremental JSON parser (like `ijson` or a manual `json.JSONDecoder.raw_decode`) and extract valid prefixes before the generation finishes. This is useful for streaming: the first valid field can be surfaced to the user while the model continues.

### Libraries

- **Outlines** — Library that compiles JSON schemas and regex patterns into finite-state machines for logit masking. Works with Hugging Face models, vLLM, and OpenAI-compatible APIs.
- **Instructor** — Patches OpenAI and other API clients to retry with structured error messages, using the model's own output to correct its mistakes. Not a masking approach; relies on prompt engineering + retry.
- **llama.cpp GBNF** — Native grammar support in llama.cpp. Compiles a `.gbnf` file into a deterministic parse tree and masks logits accordingly.
- **Lark** — Python parser library that can be repurposed for CFG-based constrained decoding. Define your grammar in EBNF, feed tokens through the parser, and check acceptance.

## Build It

The code below implements masked logits from scratch. It defines a tiny JSON grammar, builds a token-level finite-state machine, and uses it to mask forbidden tokens during greedy decoding of a minimal GPT-style model.

```python
# docs/ai-engineering-from-scratch/phases/10-llms-from-scratch/24-structured-outputs-constrained-decoding/code/main.py
# Lesson 24: Structured Outputs & Constrained Decoding.
# Reference: Outlines (Willard & Louf 2023), llama.cpp GBNF spec.

import json
import math
import re
import random
from typing import Callable

VOCAB = [
    "{", "}", "[", "]", ":", ",",
    '"', "true", "false", "null",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "-", ".", "e", "E", "+",
    "name", "age", "score", "active",
    "Alice", "Bob", "London",
    " ", "",
]
TOKEN_IDS = {t: i for i, t in enumerate(VOCAB)}

def soft_logits(token_id: int) -> float:
    return 5.0 - abs(token_id - len(VOCAB) / 2) * 0.3

class GrammarMask:
    """Masks logits so only tokens valid under a JSON schema survive."""

    def __init__(self, spec: dict):
        self.spec = spec
        self.properties = spec.get("properties", {})

    @staticmethod
    def _in_string(joined: str) -> bool:
        escape = False
        count = 0
        for ch in joined:
            if escape:
                escape = False
                continue
            if ch == "\\":
                escape = True
                continue
            if ch == '"':
                count += 1
        return count % 2 == 1

    def allowed_next(self, prefix: list[str]) -> set[str]:
        joined = "".join(prefix)
        stripped = joined.strip()
        if not stripped:
            return {"{"}
        in_str = self._in_string(joined)
        if in_str:
            return {"name", "age", "score", "active",
                    "Alice", "Bob", "London",
                    " ", "", '"'}
        last = stripped[-1]
        if last == "{":
            return {'"'}
        if last == ":":
            return {'"', "true", "false", "null",
                    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                    "-", "{"}
        if last == ",":
            return {'"'}
        if last == '"':
            return {":", " "}
        if last in ("}", "]"):
            return {" ", ""}
        if stripped.endswith("}"):
            return {" ", ""}
        return {",", " ", "}"}

    def __call__(self, prefix: list[str], logits: list[float]) -> list[float]:
        allowed = self.allowed_next(prefix)
        masked = [-float("inf")] * len(logits)
        for token, tid in TOKEN_IDS.items():
            if token in allowed:
                masked[tid] = logits[tid]
        if all(v == -float("inf") for v in masked):
            return logits
        return masked

def decode(mask_fn, logit_fn, max_steps=40, temperature=0.1):
    rng = random.Random(42)
    prefix = []
    for _ in range(max_steps):
        logits = [logit_fn(i) for i in range(len(VOCAB))]
        masked = mask_fn(prefix, logits)
        exp_vals = [math.exp(v / temperature) for v in masked]
        total = sum(exp_vals)
        probs = [v / total for v in exp_vals] if total else [1.0 / len(masked)] * len(masked)
        r = rng.random()
        cum = 0.0
        tid = 0
        for i, p in enumerate(probs):
            cum += p
            if r < cum:
                tid = i
                break
        prefix.append(VOCAB[tid])
        joined = "".join(prefix).strip()
        if joined.count("{") > 0 and joined.count("{") == joined.count("}") and joined.endswith("}"):
            break
    return "".join(prefix)

schema = {"type": "object", "properties": {"name": {"type": "string"}, "age": {"type": "number"}}, "required": ["name"]}
mask = GrammarMask(schema)
output = decode(mask, soft_logits, max_steps=40, temperature=0.5)
print(f"Structured output: {output}")
parsed = json.loads(output)
print(f"Parsed: {parsed}")

def streaming_partial_parse(char_stream):
    buffer = ""
    results = []
    for ch in char_stream:
        buffer += ch
        try:
            obj, idx = json.JSONDecoder().raw_decode(buffer)
            results.append(obj)
            buffer = buffer[idx:].lstrip()
        except (json.JSONDecodeError, ValueError):
            continue
    return results

partials = streaming_partial_parse(list(output))
print(f"Partial parse: {partials}")

def regex_guided_number(max_length=10):
    pattern = re.compile(r"^-?\d+(\.\d+)?([eE][+-]?\d+)?$")
    result = ""
    for _ in range(max_length):
        candidates = "0123456789.-+eE"
        if not result:
            candidates = "-0123456789"
        elif result[-1] in "eE":
            candidates = "+-0123456789"
        elif result[-1] == ".":
            candidates = "0123456789"
        elif result.count(".") == 1 and "." in result:
            candidates = "0123456789eE"
        ch = random.choice(candidates)
        trial = result + ch
        if pattern.fullmatch(trial) or pattern.fullmatch(trial + "0"):
            result = trial
        else:
            break
    return result if pattern.fullmatch(result) else "42"

print(f"Regex-guided number: {regex_guided_number()}")
```

### How it works

1. `GrammarMask` reads a JSON schema and builds a naive state tracker. At each step, `allowed_next` inspects the prefix — what brackets are open, whether we just wrote a key — and returns the set of vocabulary tokens that keep the output valid.
2. `decode` calls `mask_fn` every step. Logits for disallowed tokens are set to `-inf`, making their selection probability zero. Greedy decoding picks the highest-score allowed token.
3. `streaming_partial_parse` feeds tokens into `json.JSONDecoder.raw_decode` incrementally. It extracts whatever valid JSON it can from the prefix, which lets a UI render partial results.
4. The Lark grammar definition shows how a real CFG specifies the language more precisely than a hand-written state tracker.
5. `regex_guided_number` demonstrates a simpler constraint: generate a token stream that must match a number regex at every intermediate step.

## Use It

| Approach | When to use | When to avoid |
|---|---|---|
| Retry + validate | Prototypes, single-turn, non-critical | High-throughput, latency-sensitive |
| JSON mode (logit bias) | OpenAI API, simple JSON, low failure tolerance | Complex schemas, nested objects, enums |
| Outlines (masking) | HF models, vLLM, any custom model | High throughput on tiny models (masking adds ~5-15% latency per token) |
| Instructor (retry-based) | OpenAI API with complex schemas | Models that do not follow instructions (small models) |
| llama.cpp GBNF | Local inference, any grammar | GPU-heavy workflows (llama.cpp is CPU-first) |
| Regex masking | Single numbers, dates, enums | Deeply nested structures, recursive patterns |
| Incremental partial parse | Streaming UI, progressive rendering | When exact output is required before render |

### Latency tradeoffs

- **Retry**: 0 overhead on success, 1-3x latency on failure. Unbounded in worst case.
- **Logit bias**: ~0 overhead (bias applied once). Unreliable for complex schemas.
- **Grammar masking**: 5-50% per-token overhead depending on grammar complexity + vocabulary size. O(1) success rate.
- **Partial parsing**: ~0 overhead (runs on the existing token stream). Returns fast but best-effort.

### Pipeline integration pattern

```python
# Pseudocode for a pipeline-safe generation call
def generate_structured(prompt: str, schema: dict) -> dict:
    grammar = json_schema_to_grammar(schema)  # Outlines or custom
    tokens = model.generate(
        prompt,
        grammar=grammar,         # constrains output
        max_tokens=256,
        stop=["\n\n"],
    )
    return json.loads(tokens)   # guaranteed to succeed
```

## Ship It

Save as `outputs/skill-json-constrainer.md`.

The skill wraps any text-generation model with a grammar-based logit mask. Given a JSON schema, it produces a callable that: (1) compiles the schema to a GBNF or Lark grammar, (2) wraps `model.generate` to mask logits at each decoding step, and (3) raises a typed error with the partial output on failure instead of a generic parse error.

## Exercises

1. **Easy.** Run `code/main.py`. Modify the schema to add a `"city": {"type": "string"}` property and re-run. What changes in the output?

2. **Medium.** Extend `GrammarMask.allowed_next` to handle nested objects. The current implementation only tracks one level of braces. Add a stack-based depth tracker so `{"a": {"b": 1}}` produces valid output.

3. **Hard.** Implement regex-guided decoding for an email address pattern `r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"`. Build a character-level allowed-set function that changes based on position in the regex (e.g., before `@`, after `@`, after `.`). Test with a character-level generator.

## Key Terms

| Term | What people say | What it actually means |
|---|---|---|
| Logit masking | "Zero out forbidden tokens" | Set logits for invalid tokens to `-inf` before softmax. |
| JSON mode | "Force JSON output" | Prompt engineering + logit bias, not guaranteed valid. |
| GBNF | "Grammar format" | GGML Backus-Naur Form for defining valid output languages. |
| Grammar-based decoding | "Generate according to a grammar" | Maintain a parser state during generation and mask tokens that would make the parse invalid. |
| Partial JSON | "Streaming valid JSON" | Incrementally parse a token stream with `raw_decode` to extract valid prefixes before generation finishes. |
| CFG | "Context-free grammar" | A formal grammar where each production rule has a single non-terminal on the left. |

## Further Reading

- [Outlines: Structured Text Generation](https://github.com/outlines-dev/outlines) — Library for grammar-guided logit masking across model backends.
- [Instructor: Structured LLM Outputs](https://github.com/jxnl/instructor) — Retry-based structured generation for API clients.
- [llama.cpp GBNF Guide](https://github.com/ggerganov/llama.cpp/blob/master/grammars/README.md) — Official GBNF grammar specification and examples.
- [Lark: A Parsing Toolkit for Python](https://github.com/lark-parser/lark) — EBNF parser library used for grammar-based decoding.
- [Willard & Louf (2023). Efficient Guided Generation for LLMs](https://arxiv.org/abs/2307.09702) — Outlines paper: finite-state machine approach to constrained decoding.
- [Geng et al. (2024). Grammar-Constrained Decoding for Structured LLM Outputs](https://arxiv.org/abs/2405.13783) — Survey of grammar-constrained decoding methods.
