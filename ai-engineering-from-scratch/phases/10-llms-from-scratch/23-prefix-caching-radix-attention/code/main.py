"""
Phase 10 - 23: Prefix Caching and RadixAttention
=================================================

A minimal radix tree for prefix-based KV cache matching, plus
a vLLM-style block-hash cache for comparison.

References:
- SGLang RadixAttention (Zheng et al. 2024, arXiv:2312.07104)
- vLLM automatic prefix caching (Kwon et al. 2023, arXiv:2309.06180)

Usage:
    python main.py
"""

import hashlib
import time
from dataclasses import dataclass, field
from typing import Optional


# ---------------------------------------------------------------------------
# Radix tree node
# ---------------------------------------------------------------------------

@dataclass
class RadixNode:
    prefix: tuple  # sequence of token ids forming this node's label
    children: dict = field(default_factory=dict)
    parent: Optional['RadixNode'] = None
    kv_cache: Optional[list] = None  # simulated KV entries per token position
    access_time: float = field(default_factory=time.monotonic)
    evictable: bool = True

    def is_leaf(self) -> bool:
        return len(self.children) == 0

    def is_root(self) -> bool:
        return self.parent is None


# ---------------------------------------------------------------------------
# Radix tree cache
# ---------------------------------------------------------------------------

class RadixCache:
    """Prefix-matching KV cache using a radix (PATRICIA) tree.

    Each node stores a *sequence* of token ids as its label.
    The concatenation of labels from root to any node equals the
    full token prefix represented by that path.
    """

    def __init__(self):
        self.root = RadixNode(prefix=(), evictable=False)
        self._total_tokens = 0  # total tokens stored in the tree

    # ---- insertion -------------------------------------------------------

    def insert(self, tokens: tuple, kv_entries: list):
        """Insert a complete token sequence and its KV cache entries."""
        node = self.root
        pos = 0  # position within tokens
        while pos < len(tokens):
            matched = False
            for child in list(node.children.values()):
                overlap = self._match_prefix(child.prefix, tokens, pos)
                if overlap > 0:
                    if overlap == len(child.prefix):
                        node = child
                        pos += overlap
                        matched = True
                        break
                    else:
                        # partial match => split the child node
                        self._split_node(node, child, overlap, tokens, pos, kv_entries)
                        return
            if not matched:
                # no further match: attach a new leaf
                remaining = tokens[pos:]
                slice_ = kv_entries[pos:] if kv_entries else []
                leaf = RadixNode(
                    prefix=remaining, parent=node, kv_cache=slice_
                )
                node.children[remaining[0]] = leaf
                self._total_tokens += len(remaining)
                return
        # exact match: entire sequence already in tree
        node.kv_cache = kv_entries if kv_entries else None

    def _split_node(self, parent: RadixNode, child: RadixNode,
                    overlap: int, tokens: tuple, pos: int,
                    kv_entries: list):
        shared = child.prefix[:overlap]
        child_suffix = child.prefix[overlap:]
        new_suffix = tokens[pos + overlap:]

        # build the shared parent
        split = RadixNode(
            prefix=shared, parent=parent, evictable=True,
            access_time=time.monotonic()
        )
        # adopt the old child (trimmed to its suffix)
        child.prefix = child_suffix
        child.parent = split
        split.children[child_suffix[0]] = child
        del parent.children[shared[0]]
        parent.children[shared[0]] = split

        # attach a leaf for the new suffix
        # overlap tokens already counted from the original insert
        if new_suffix:
            leaf = RadixNode(
                prefix=new_suffix, parent=split, evictable=True,
                kv_cache=kv_entries[pos + overlap:] if kv_entries else None
            )
            split.children[new_suffix[0]] = leaf
            self._total_tokens += len(new_suffix)
        # no else: if the new sequence ends exactly at the split,
        # the split node itself already has these tokens counted

    # ---- lookup ----------------------------------------------------------

    def longest_prefix_match(self, tokens: tuple) -> tuple:
        """Return (end_node, matched_length)."""
        node = self.root
        pos = 0
        while pos < len(tokens):
            found = False
            for child in node.children.values():
                overlap = self._match_prefix(child.prefix, tokens, pos)
                if overlap > 0:
                    node = child
                    pos += overlap
                    found = True
                    break
            if not found:
                break
        return node, pos

    def cached_tokens(self, tokens: tuple) -> int:
        """Number of prefix tokens that exist in the cache."""
        _, n = self.longest_prefix_match(tokens)
        return n

    # ---- eviction --------------------------------------------------------

    def evict_lru(self, target_tokens: int):
        """Remove the oldest leaf nodes until target_tokens are freed.

        Re-collects the leaf list after each eviction because
        node merging can change which nodes are leaves.
        """
        freed = 0
        while freed < target_tokens:
            leaves = self._collect_evictable_leaves(self.root)
            if not leaves:
                break
            oldest = min(leaves, key=lambda n: n.access_time)
            p = oldest.parent
            if p is None:
                break
            key = oldest.prefix[0]
            del p.children[key]
            self._total_tokens -= len(oldest.prefix)
            freed += len(oldest.prefix)
            self._merge_single_child(p)

    def _collect_evictable_leaves(self, node) -> list:
        result = []
        if node.evictable and node.is_leaf():
            result.append(node)
        for child in node.children.values():
            result.extend(self._collect_evictable_leaves(child))
        return result

    def _merge_single_child(self, node: RadixNode):
        """If *node* has exactly one child, merge node + child into one node."""
        while not node.is_root() and len(node.children) == 1 and node.evictable:
            only_child = next(iter(node.children.values()))
            node.prefix = node.prefix + only_child.prefix
            node.kv_cache = only_child.kv_cache
            node.children = only_child.children
            # attach grandchildren to the merged node
            for gc in node.children.values():
                gc.parent = node
            # if the merged child had its own cache, keep it

    # ---- helpers ---------------------------------------------------------

    @staticmethod
    def _match_prefix(label: tuple, tokens: tuple, start: int) -> int:
        """Return how many tokens of *label* match starting at tokens[start]."""
        j = 0
        while (j < len(label) and
               start + j < len(tokens) and
               label[j] == tokens[start + j]):
            j += 1
        return j

    # ---- introspection ---------------------------------------------------

    def stats(self) -> dict:
        return {
            "total_tokens": self._total_tokens,
            "node_count": self._count_nodes(self.root),
        }

    def _count_nodes(self, node: RadixNode) -> int:
        return 1 + sum(self._count_nodes(c) for c in node.children.values())


# ---------------------------------------------------------------------------
# vLLM-style automatic prefix caching via block hashes
# ---------------------------------------------------------------------------

class BlockHashCache:
    """Simulate vLLM automatic prefix caching with fixed-size blocks."""

    def __init__(self, block_size: int = 4):
        self.block_size = block_size
        self._store: dict = {}  # block_hash -> kv_data

    def _block_hash(self, tokens: tuple, start: int) -> str:
        block = tokens[start:start + self.block_size]
        return hashlib.md5(str(block).encode()).hexdigest()[:12]

    def process(self, tokens: tuple, kv_entries: list) -> tuple:
        """Process a request. Returns (hit_blocks, total_blocks)."""
        total_blocks = (len(tokens) + self.block_size - 1) // self.block_size
        hit_blocks = 0
        for start in range(0, len(tokens), self.block_size):
            h = self._block_hash(tokens, start)
            if h in self._store:
                hit_blocks += 1
            else:
                end = min(start + self.block_size, len(tokens))
                self._store[h] = kv_entries[start:end]
        return hit_blocks, total_blocks


# ---------------------------------------------------------------------------
# Simulation
# ---------------------------------------------------------------------------

def simulate_radix():
    print("=== Radix Cache (SGLang-style prefix matching) ===")
    cache = RadixCache()

    requests = [
        ("What is the capital of France?",
         (10, 20, 30, 40, 50, 60)),
        ("What is the capital of Germany?",
         (10, 20, 30, 40, 70, 80)),
        ("What is the capital of France? Paris",
         (10, 20, 30, 40, 50, 60, 90, 100)),
        ("How does gradient descent work?",
         (110, 120, 130, 140)),
    ]

    total_hit = 0
    total_prompt = 0

    for prompt_text, tokens in requests:
        total_prompt += len(tokens)
        hit = cache.cached_tokens(tokens)
        total_hit += hit
        kv = [f"kv_{i}" for i in range(len(tokens))]
        cache.insert(tokens, kv)
        short = prompt_text[:42] + "..." if len(prompt_text) > 42 else prompt_text
        print(f"  cache hit: {hit}/{len(tokens)} tokens  '{short}'")

    ratio = total_hit / total_prompt * 100 if total_prompt else 0
    print(f"  overall hit ratio: {ratio:.2f}%")
    print(f"  cache stats: {cache.stats()}")
    print()


def simulate_blocks():
    print("=== vLLM-style Automatic Prefix Caching (hash blocks) ===")
    bh = BlockHashCache(block_size=4)

    requests = [
        ("Request A", (10, 20, 30, 40, 50, 60)),
        ("Request B", (10, 20, 30, 40, 70, 80)),
        ("Request C", (10, 20, 31, 41, 50, 60)),
    ]

    for name, tokens in requests:
        kv = [f"kv_{i}" for i in range(len(tokens))]
        hits, total = bh.process(tokens, kv)
        print(f"  {name}: {hits}/{total} blocks cached ({100 * hits // total}%)")
    print()


def simulate_warm_start():
    """Demonstrate that pre-populating the cache with a system prompt
    yields a high hit ratio for subsequent requests."""
    print("=== Warm start: pre-populate system prompt ===")
    cache = RadixCache()
    system_prompt = tuple(range(100, 150))  # 50 system tokens
    cache.insert(system_prompt, [f"kv_{i}" for i in range(50)])

    user_requests = [
        ("user A says hi", tuple(range(100, 150)) + (200, 201, 202)),
        ("user B asks help", tuple(range(100, 150)) + (210, 211, 212, 213)),
        ("user C says bye", tuple(range(100, 150)) + (220, 221)),
    ]

    total_hit = 0
    total_prompt = 0
    for name, tokens in user_requests:
        total_prompt += len(tokens)
        hit = cache.cached_tokens(tokens)
        total_hit += hit
        kv = [f"kv_{i}" for i in range(len(tokens))]
        cache.insert(tokens, kv)
        print(f"  {name}: {hit}/{len(tokens)} tokens cached ({100 * hit // len(tokens)}%)")

    ratio = total_hit / total_prompt * 100 if total_prompt else 0
    print(f"  overall hit ratio: {ratio:.2f}%")
    print()


def simulate_lru_eviction():
    """Show LRU eviction frees space when memory budget is tight."""
    print("=== LRU eviction ===")
    cache = RadixCache()

    # Insert several sequences
    cache.insert((1, 2, 3, 4), None)
    time.sleep(0.01)
    cache.insert((1, 2, 5, 6), None)
    time.sleep(0.01)
    cache.insert((7, 8, 9), None)

    print(f"  before eviction: {cache.stats()}")

    # evict the oldest leaf
    cache.evict_lru(4)
    print(f"  after evicting 4 tokens: {cache.stats()}")

    # the evicted sequence no longer matches
    matched = cache.cached_tokens((1, 2, 3, 4))
    print(f"  '1,2,3,4' match after eviction: {matched} tokens (evicted leaf is gone)")
    print()


def simulate_edge_cases():
    """Test empty sequences, exact duplicates, and single-token prefixes."""
    print("=== Edge cases ===")
    cache = RadixCache()

    # empty sequence
    assert cache.cached_tokens(()) == 0

    # duplicate insert
    t = (5, 6, 7)
    cache.insert(t, ["a", "b", "c"])
    cache.insert(t, ["x", "y", "z"])  # same prefix, different KV
    assert cache.cached_tokens(t) == 3

    # single token
    cache.insert((42,), ["kv_42"])
    assert cache.cached_tokens((42,)) == 1
    assert cache.cached_tokens((99,)) == 0

    # prefix of an existing sequence
    assert cache.cached_tokens((5, 6)) == 2

    print("  all edge cases passed")
    print()


if __name__ == "__main__":
    simulate_radix()
    simulate_blocks()
    simulate_warm_start()
    simulate_lru_eviction()
    simulate_edge_cases()
