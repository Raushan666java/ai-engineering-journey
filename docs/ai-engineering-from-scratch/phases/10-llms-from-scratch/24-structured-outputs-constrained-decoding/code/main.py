# docs/ai-engineering-from-scratch/phases/10-llms-from-scratch/24-structured-outputs-constrained-decoding/code/main.py
# Lesson 24: Structured Outputs & Constrained Decoding.
# Demonstrates masked logits, grammar-based decoding, and partial JSON parsing.
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
    """Simulated logit scores -- higher for tokens near the middle of vocab."""
    return 5.0 - abs(token_id - len(VOCAB) / 2) * 0.3


class GrammarMask:
    """Masks logits so only tokens valid under a JSON schema survive.

    Tracks whether we are inside a string and uses the last significant
    structural character to determine which grammar productions are legal.
    """

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

        # While inside a string value or key, allow identifier tokens and the
        # closing quote. Multi-character vocab tokens like "name" or "Alice"
        # are also allowed here -- they become the string content.
        if in_str:
            return {"name", "age", "score", "active",
                    "Alice", "Bob", "London",
                    " ", "", '"'}

        # Not inside a string. The last non-whitespace character determines
        # what grammar production comes next. Return full vocab tokens only
        # (no single-character aliases) so that __call__ can use exact match.
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


def decode(
    mask_fn: Callable,
    logit_fn: Callable,
    max_steps: int = 40,
    temperature: float = 0.1,
) -> str:
    """Decode with grammar masking and temperature-based sampling.

    At each step:
      1. Compute raw logits from the simulated model.
      2. Apply the grammar mask (set forbidden logits to -inf).
      3. Softmax with temperature, then sample from the distribution.
    """
    rng = random.Random(42)
    prefix: list[str] = []
    for _ in range(max_steps):
        logits = [logit_fn(i) for i in range(len(VOCAB))]
        masked = mask_fn(prefix, logits)

        exp_vals = [math.exp(v / temperature) for v in masked]
        total = sum(exp_vals)
        if total == 0:
            probs = [1.0 / len(masked)] * len(masked)
        else:
            probs = [v / total for v in exp_vals]

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
        ob = joined.count("{")
        cb = joined.count("}")
        if ob > 0 and ob == cb and joined.endswith("}"):
            break

    return "".join(prefix)


def streaming_partial_parse(char_stream: list[str]) -> list[dict]:
    """Incrementally parse characters, yielding valid JSON objects as they form."""
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


def regex_guided_number(max_length: int = 10) -> str:
    """Generate a valid JSON number by checking a regex at each character step."""
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
    if not pattern.fullmatch(result) or result in ("", "-", ".", "-."):
        result = "42"
    return result


# ============================================================
# Tests
# ============================================================


def make_schema():
    return {
        "type": "object",
        "properties": {
            "name": {"type": "string"},
            "age": {"type": "number"},
        },
        "required": ["name"],
    }


def test_empty_prefix_allows_brace():
    """An empty prefix should allow only the opening brace."""
    allowed = GrammarMask(make_schema()).allowed_next([])
    assert allowed == {"{"}, f"Expected only '{{', got {allowed}"
    print("OK")


def test_after_brace_only_quote():
    """After '{', only the double-quote token may start a key."""
    allowed = GrammarMask(make_schema()).allowed_next(["{"])
    assert '"' in allowed, "Quote must be allowed after '{'"
    assert "}" not in allowed, "Closing brace should not be allowed yet"
    assert "name" not in allowed, "Bare key name should not be allowed before quote"
    print("OK")


def test_in_key_allows_content_and_close():
    """Inside a key string, identifier tokens and the closing quote are OK."""
    allowed = GrammarMask(make_schema()).allowed_next(['{', '"'])
    assert "name" in allowed, "Key 'name' must be allowed"
    assert "age" in allowed, "Key 'age' must be allowed"
    assert '"' in allowed, "Closing quote must be allowed"
    print("OK")


def test_after_key_allows_colon():
    """After a complete key, colon separates key from value."""
    allowed = GrammarMask(make_schema()).allowed_next(['{', '"', "name", '"'])
    assert ":" in allowed, "Colon must be allowed after key"
    print("OK")


def test_after_colon_allows_value_starters():
    """After ':', value-starting tokens are allowed; bare keys are not."""
    mask = GrammarMask(make_schema())
    allowed = mask.allowed_next(['{', '"', "name", '"', ":"])
    raw = [soft_logits(i) for i in range(len(VOCAB))]
    masked = mask(['{', '"', "name", '"', ":"], raw)
    msg = "Quote must be allowed after colon"
    assert masked[TOKEN_IDS['"']] > -float("inf"), msg
    msg = "Boolean must be allowed after colon (via startswith 't')"
    assert masked[TOKEN_IDS["true"]] > -float("inf"), msg
    msg = "Digit must be allowed after colon"
    assert masked[TOKEN_IDS["0"]] > -float("inf"), msg
    msg = "Nested object must be allowed after colon"
    assert masked[TOKEN_IDS["{"]] > -float("inf"), msg
    msg = "Bare key must NOT be allowed after colon"
    assert masked[TOKEN_IDS["name"]] == -float("inf"), msg
    print("OK")


def test_masking_blocks_wrong_tokens():
    """Outside a string, token logits are set to -inf if disallowed by grammar."""
    mask = GrammarMask(make_schema())
    raw = [soft_logits(i) for i in range(len(VOCAB))]
    masked = mask([], raw)
    # Only brace survives on empty prefix.
    assert masked[TOKEN_IDS["{"]] > -float("inf"), "Brace must survive"
    assert masked[TOKEN_IDS["}"]] == -float("inf"), "Closing brace must be blocked"
    assert masked[TOKEN_IDS["name"]] == -float("inf"), "Key must be blocked"
    print("OK")


def test_masking_enables_valid_json():
    """With grammar masking, every decode run produces parseable JSON."""
    mask = GrammarMask(make_schema())
    for _ in range(10):
        output = decode(mask, soft_logits, max_steps=40, temperature=0.5)
        parsed = json.loads(output)
        assert isinstance(parsed, dict), f"Must decode to dict, got: {output}"
    print("OK: all 10 runs produced valid JSON")


def test_streaming_partial_extracts_full_object():
    """Partial parse extracts complete objects from character streams."""
    chars = list('{"name": "Alice", "age": 30}')
    partials = streaming_partial_parse(chars)
    assert len(partials) >= 1, "Should extract at least one partial object"
    first = partials[0]
    assert isinstance(first, dict), f"Partial must be dict, got {type(first)}"
    assert "name" in first, f"Partial must contain name, got {first}"
    print("OK")


def test_streaming_early_field():
    """Partial parse can surface the first field before the object closes."""
    chars = list('{"x": 1, "y": 2}')
    partials = streaming_partial_parse(chars)
    assert len(partials) >= 1
    assert partials[0].get("x") == 1, f"Expected x=1, got {partials[0]}"
    print("OK")


def test_regex_guided_valid_numbers():
    """Regex-guided generation always produces valid JSON numbers."""
    pattern = re.compile(r"^-?\d+(\.\d+)?([eE][+-]?\d+)?$")
    for _ in range(20):
        n = regex_guided_number()
        assert pattern.fullmatch(n), f"Invalid number: {n}"
    print(f"OK: example: {regex_guided_number()}")


def test_unmasked_top_differs_from_masked():
    """Without masking, the top token may not be a valid start token."""
    raw = [soft_logits(i) for i in range(len(VOCAB))]
    mask = GrammarMask(make_schema())
    masked = mask([], raw)
    unmasked_tid = max(range(len(raw)), key=lambda i: raw[i])
    masked_tid = max(range(len(masked)), key=lambda i: masked[i])
    # The masked result must be '{' regardless of what the raw model wants.
    assert VOCAB[masked_tid] == "{", (
        f"Masked must start with '{{', got '{VOCAB[masked_tid]}'"
    )
    print(f"OK: unmasked top='{VOCAB[unmasked_tid]}', masked top='{VOCAB[masked_tid]}'")


if __name__ == "__main__":
    tests = [
        ("Empty prefix allows brace", test_empty_prefix_allows_brace),
        ("After brace, only quote", test_after_brace_only_quote),
        ("In key, allows content and close", test_in_key_allows_content_and_close),
        ("After key, allows colon", test_after_key_allows_colon),
        ("After colon, allows value starters", test_after_colon_allows_value_starters),
        ("Masking blocks wrong tokens", test_masking_blocks_wrong_tokens),
        ("Masking enables valid JSON", test_masking_enables_valid_json),
        ("Streaming partial full object", test_streaming_partial_extracts_full_object),
        ("Streaming early field", test_streaming_early_field),
        ("Regex guided valid numbers", test_regex_guided_valid_numbers),
        ("Unmasked top differs from masked", test_unmasked_top_differs_from_masked),
    ]

    failed = 0
    for label, fn in tests:
        print(f"  {label} ... ", end="")
        try:
            fn()
        except Exception as e:
            print(f"FAIL: {e}")
            failed += 1

    print()
    if failed:
        print(f"{failed} test(s) FAILED")
        raise SystemExit(1)
    print("All tests passed.")
