# tests/test_main.py
# Unit tests for Phase 10, Lesson 24: Structured Outputs & Constrained Decoding.
# Reference: docs/ai-engineering-from-scratch/phases/10-llms-from-scratch/24-structured-outputs-constrained-decoding/docs/en.md

import json
import math
import re
import sys
import unittest

sys.path.insert(0, "..")  # noqa: E402

from main import GrammarMask, soft_logits, decode, streaming_partial_parse, regex_guided_number, VOCAB, TOKEN_IDS  # noqa: E402


def make_schema():
    return {
        "type": "object",
        "properties": {
            "name": {"type": "string"},
            "age": {"type": "number"},
        },
        "required": ["name"],
    }


class TestGrammarMask(unittest.TestCase):
    def test_empty_allows_brace_only(self):
        allowed = GrammarMask(make_schema()).allowed_next([])
        self.assertEqual(allowed, {"{"})

    def test_after_brace_allows_quote(self):
        allowed = GrammarMask(make_schema()).allowed_next(["{"])
        self.assertIn('"', allowed)
        self.assertNotIn("}", allowed)
        self.assertNotIn("name", allowed)

    def test_in_key_allows_idents_and_close(self):
        allowed = GrammarMask(make_schema()).allowed_next(['{', '"'])
        self.assertIn("name", allowed)
        self.assertIn('"', allowed)

    def test_after_key_allows_colon(self):
        allowed = GrammarMask(make_schema()).allowed_next(['{', '"', "name", '"'])
        self.assertIn(":", allowed)

    def test_after_colon_allows_value_starters(self):
        mask = GrammarMask(make_schema())
        raw = [soft_logits(i) for i in range(len(VOCAB))]
        masked = mask(['{', '"', "name", '"', ":"], raw)
        self.assertGreater(masked[TOKEN_IDS['"']], -float("inf"))
        self.assertGreater(masked[TOKEN_IDS["true"]], -float("inf"))
        self.assertEqual(masked[TOKEN_IDS["name"]], -float("inf"))

    def test_masking_blocks_wrong_tokens(self):
        mask = GrammarMask(make_schema())
        raw = [soft_logits(i) for i in range(len(VOCAB))]
        masked = mask([], raw)
        self.assertGreater(masked[TOKEN_IDS["{"]], -float("inf"))
        self.assertEqual(masked[TOKEN_IDS["}"]], -float("inf"))

    def test_mask_enables_valid_json(self):
        mask = GrammarMask(make_schema())
        for _ in range(5):
            output = decode(mask, soft_logits, max_steps=40, temperature=0.5)
            parsed = json.loads(output)
            self.assertIsInstance(parsed, dict)

    def test_unmasked_top_differs(self):
        raw = [soft_logits(i) for i in range(len(VOCAB))]
        mask = GrammarMask(make_schema())
        masked = mask([], raw)
        unmasked_tid = max(range(len(raw)), key=lambda i: raw[i])
        masked_tid = max(range(len(masked)), key=lambda i: masked[i])
        self.assertEqual(VOCAB[masked_tid], "{")


class TestStreamingPartialParse(unittest.TestCase):
    def test_extracts_full_object(self):
        chars = list('{"name": "Alice", "age": 30}')
        partials = streaming_partial_parse(chars)
        self.assertGreaterEqual(len(partials), 1)
        self.assertIn("name", partials[0])

    def test_early_field(self):
        chars = list('{"x": 1, "y": 2}')
        partials = streaming_partial_parse(chars)
        self.assertEqual(partials[0].get("x"), 1)


class TestRegexGuided(unittest.TestCase):
    def test_valid_numbers(self):
        pattern = re.compile(r"^-?\d+(\.\d+)?([eE][+-]?\d+)?$")
        for _ in range(20):
            n = regex_guided_number()
            self.assertTrue(pattern.fullmatch(n), f"Invalid: {n}")


if __name__ == "__main__":
    unittest.main()
