"""
Unit tests for Phase 10 · 23: Prefix Caching and RadixAttention.
Tests cover the RadixCache and BlockHashCache implementations.

Usage:
    python -m unittest discover tests -v
"""

import unittest
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from main import RadixCache, BlockHashCache


class TestRadixBasics(unittest.TestCase):
    """Core radix tree operations."""

    def setUp(self):
        self.cache = RadixCache()

    def test_empty_match(self):
        """Empty sequence always matches zero tokens."""
        self.assertEqual(self.cache.cached_tokens(()), 0)

    def test_no_match(self):
        """A fresh cache returns zero for any input."""
        self.assertEqual(self.cache.cached_tokens((1, 2, 3)), 0)

    def test_exact_match(self):
        """After inserting a sequence, it matches fully."""
        t = (10, 20, 30)
        self.cache.insert(t, ["a", "b", "c"])
        self.assertEqual(self.cache.cached_tokens(t), 3)

    def test_prefix_match(self):
        """Insert (1,2,3,4), query (1,2,3) should match 3 tokens."""
        self.cache.insert((1, 2, 3, 4), [None] * 4)
        self.assertEqual(self.cache.cached_tokens((1, 2, 3)), 3)

    def test_partial_prefix_after_split(self):
        """Insert two diverging sequences, then query the shared prefix."""
        self.cache.insert((1, 2, 3, 4), [None] * 4)
        self.cache.insert((1, 2, 5, 6), [None] * 4)
        # shared prefix is (1,2) — insert causes split at token 3
        self.assertEqual(self.cache.cached_tokens((1, 2)), 2)

    def test_suffix_not_matched(self):
        """New sequence that diverges should only match shared prefix."""
        self.cache.insert((1, 2, 3, 4), [None] * 4)
        # (1, 2, 3, 9) shares (1,2,3) — 3 tokens
        self.assertEqual(self.cache.cached_tokens((1, 2, 3, 9)), 3)

    def test_single_token(self):
        """Single-token sequences work."""
        self.cache.insert((42,), ["kv"])
        self.assertEqual(self.cache.cached_tokens((42,)), 1)
        self.assertEqual(self.cache.cached_tokens((99,)), 0)

    def test_duplicate_insert(self):
        """Inserting the same sequence twice does not break matching."""
        t = (7, 8, 9)
        self.cache.insert(t, ["a", "b", "c"])
        self.cache.insert(t, ["x", "y", "z"])
        self.assertEqual(self.cache.cached_tokens(t), 3)

    def test_split_preserves_existing(self):
        """After a split, the original sequence still matches fully."""
        self.cache.insert((1, 2, 3, 4), [None] * 4)
        self.cache.insert((1, 2, 3, 9), [None] * 4)
        self.assertEqual(self.cache.cached_tokens((1, 2, 3, 4)), 4)
        self.assertEqual(self.cache.cached_tokens((1, 2, 3, 9)), 4)

    def test_many_inserts(self):
        """Stress test with 50 sequential inserts of random-like tokens."""
        for i in range(50):
            t = tuple(range(i, i + 10))
            self.cache.insert(t, [None] * 10)
        self.assertGreater(self.cache.cached_tokens(tuple(range(0, 10))), 0)


class TestBlockHashCache(unittest.TestCase):
    """vLLM-style block caching."""

    def setUp(self):
        self.bh = BlockHashCache(block_size=4)

    def test_no_hit_first_request(self):
        """First request hits zero blocks."""
        hits, total = self.bh.process((1, 2, 3, 4, 5, 6), [None] * 6)
        self.assertEqual(hits, 0)

    def test_hit_on_shared_prefix(self):
        """Second request with shared prefix hits first block."""
        self.bh.process((1, 2, 3, 4, 5, 6), [None] * 6)
        hits, total = self.bh.process((1, 2, 3, 4, 7, 8), [None] * 6)
        self.assertEqual(hits, 1)  # first block (tokens 0-3) hits

    def test_complete_miss_different_prefix(self):
        """Completely different prefix misses all blocks."""
        self.bh.process((1, 2, 3, 4), [None] * 4)
        hits, total = self.bh.process((9, 8, 7, 6), [None] * 4)
        self.assertEqual(hits, 0)


class TestLRUEviction(unittest.TestCase):
    """LRU eviction policy."""

    def test_evict_oldest(self):
        """Insert two sequences, evict oldest leaf."""
        cache = RadixCache()
        cache.insert((1, 2, 3), [None] * 3)
        cache.insert((4, 5, 6), [None] * 3)
        cache.evict_lru(3)
        # oldest leaf (1,2,3) should be evicted
        self.assertEqual(cache.cached_tokens((1, 2, 3)), 0)
        self.assertEqual(cache.cached_tokens((4, 5, 6)), 3)

    def test_evict_nothing(self):
        """Evicting zero tokens changes nothing."""
        cache = RadixCache()
        cache.insert((1, 2, 3), [None] * 3)
        cache.evict_lru(0)
        self.assertEqual(cache.cached_tokens((1, 2, 3)), 3)

    def test_evict_more_than_available(self):
        """Evicting more tokens than present clears everything evictable."""
        cache = RadixCache()
        cache.insert((1, 2, 3), [None] * 3)
        cache.insert((4, 5, 6), [None] * 3)
        cache.evict_lru(1000)
        self.assertEqual(cache.cached_tokens((1, 2, 3)), 0)
        self.assertEqual(cache.cached_tokens((4, 5, 6)), 0)


class TestWarmStart(unittest.TestCase):
    """Pre-populated prefix caching."""

    def test_system_prompt_reuse(self):
        """Pre-populated system prompt yields high cache hit for subsequent requests."""
        cache = RadixCache()
        sys_prompt = tuple(range(50, 100))
        cache.insert(sys_prompt, [None] * 50)

        hit = cache.cached_tokens(tuple(range(50, 100)) + (1, 2, 3))
        self.assertEqual(hit, 50)  # all 50 system tokens match


if __name__ == "__main__":
    unittest.main()
