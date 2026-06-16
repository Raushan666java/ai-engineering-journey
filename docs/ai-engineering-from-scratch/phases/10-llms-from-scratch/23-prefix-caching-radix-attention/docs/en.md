# Prefix Caching and RadixAttention

> Two requests with the same system prompt recompute every KV entry for those shared tokens. A chat session sends the same conversation prefix over and over. Production inference servers spend 30-60% of prefill compute on KV entries they already computed moments ago. Prefix caching eliminates this waste by storing KV cache entries indexed by the token sequence that produced them. A radix tree (PATRICIA trie) is the data structure that makes lookups fast, splits cheap, and eviction precise. SGLang calls it RadixAttention; vLLM calls it automatic prefix caching. Both solve the same problem: don't compute what you already have.

**Type:** Build
**Languages:** Python (stdlib)
**Prerequisites:** Phase 10 · 4 (pre-training), Phase 10 · 12 (inference optimization), Phase 10 · 22 (async inference)
**Time:** ~60 minutes

## Learning Objectives

- Explain why redundant prefix computation occurs in multi-turn chat and batched inference.
- Compute the prompt cache hit ratio for a given workload.
- Implement a radix tree for prefix-based KV cache matching.
- Describe how SGLang RadixAttention differs from vLLM automatic prefix caching.
- Design an LRU eviction policy for a tree-structured KV cache.

## The Problem

Autoregressive decoding is sequential. Every new token attends to all prior tokens. The KV cache stores the Key and Value matrices for each attended layer so that the next token can reuse them instead of recomputing the entire prefix.

The waste is in the prefill phase. Every request computes full KV tensors for every prompt token. When the second request shares a prefix with the first — same system prompt, same few-shot examples, same conversation history — every one of those KV entries is recomputed from scratch.

Typical numbers for a production serving system:

- System prompt: 1024 tokens. Chat session: 10 turns. Each turn resends the full system prompt plus prior history. After 10 turns, the same 1024-token system prompt has been recomputed 10 times.
- Shared prefix across users: a corporate chatbot with an identical 512-token system prompt for all employees. N users each waste 512 tokens of prefill on the same content.
- Batching within one request: beam search or speculative decoding explores multiple continuations from the same prefix. Each branch recomputes the shared prefix separately.

KV cache size for a 70B model with 80 layers and 128k context: roughly 128k x 80 x 128 x 2 bytes = 2.6 GB per request at fp16. Recomputing a shared 1k-token prefix for 1000 requests adds 2.6 GB-hours of redundant attention compute.

The solution: remember KV entries by their token prefix. When a new request begins, walk a prefix tree to find how many tokens are already cached. Compute only the unseen suffix.

## The Concept

### Prefix caching

Prefix caching stores KV tensors keyed by the token ids that produced them. On a cache hit, the stored KV entries are loaded directly into the attention computation. The model computes attention only for the new (non-cached) tokens.

The simplest cache is a hash map from token-sequence -> list of KV tensors. This works when entire sequences are reused verbatim. But most reuse is partial: two requests diverge after the shared prefix. A hash map cannot share partial prefixes efficiently without storing every suffix variation.

### Prompt cache hit ratio

Let `t_prefix` be the number of tokens in requests that are shared across multiple queries (system prompt, conversation history, few-shot examples). Let `t_total` be the total prompt tokens across all requests in a batch.

```
hit_ratio = (total_shared_prefix_tokens) / (total_prompt_tokens)
```

A corporate chatbot serving 5 million requests with a 1024-token system prompt and an average of 256 user tokens per request:

- Total prompt tokens: 5M x (1024 + 256) = 6.4B
- Shared prefix tokens: 5M x 1024 = 5.12B
- Hit ratio: 5.12 / 6.4 = 0.80

An 80% cache hit ratio means the server does 5x less prefill work. The effective throughput multiplies correspondingly.

### The radix tree (PATRICIA trie)

A radix tree stores strings (here, token sequences) as paths. Each edge is labeled with a sequence of tokens. The concatenation of labels from root to a node is the full prefix represented by that node. Two sequences that share a common prefix share the path.

The tree has three operations:

1. **Insert:** Walk the tree following existing prefixes. When the new sequence diverges from an existing node's label, split the node at the divergence point. Attach a new leaf for the suffix.
2. **Longest prefix match:** Walk the tree, consuming as many tokens as possible. Return the matched length.
3. **Eviction:** Remove leaf nodes (and merge single-child ancestors) to free memory. LRU: nodes track access time; evict oldest leaves first.

Node splitting is the key detail. If the tree has a node labeled `[10, 20, 30, 40]` and we insert `[10, 20, 31, 41]`, the walker consumes `[10, 20]` (shared prefix), then diverges at `30 vs 31`. The original node splits: `[10, 20]` becomes the new shared parent, `[30, 40]` becomes one child, `[31, 41]` becomes the other.

### SGLang RadixAttention

SGLang (Zheng et al., 2024) introduced RadixAttention as part of its structured generation language runtime. The radix tree is global across all requests served by one engine process.

Algorithm per request:

```
function process(prompt_tokens):
    node, match_len = radix_tree.longest_prefix_match(prompt_tokens)
    if match_len > 0:
        load KV cache from node.ancestors() + node
        compute KV for tokens[match_len:]
        radix_tree.insert(prompt_tokens, new_kv)
    else:
        compute KV for all prompt tokens
        radix_tree.insert(prompt_tokens, new_kv)
```

Eviction runs when memory reaches a threshold. The LRU policy traverses leaves ordered by access time; nodes with the oldest access timestamp are removed first. After evicting a leaf, if the parent has only one remaining child, the parent merges with that child to keep the tree compact.

RadixAttention stores KV at the granularity of individual token positions. Lookups are exact prefix matches at the token level. This is the fine-grained approach.

### vLLM automatic prefix caching

vLLM (Kwon et al., 2023) takes a coarser approach. The KV cache is divided into fixed-size blocks (typically 16 tokens each). Each block is identified by a hash of its token content:

```
block_hash = md5(tokens[i : i + block_size])
```

When a request arrives, vLLM walks the prompt block by block. If a block's hash exists in the global hash table, the cached block is reused. Only new blocks (where the suffix diverges) are computed.

Block-level caching is simpler to implement than a radix tree: the hash table is a flat dictionary, not a tree. The tradeoff is granularity. A radix tree can reuse arbitrary-length prefixes down to a single token. Block caching wastes tokens at the boundary: if the shared prefix is 20 tokens and block size is 16, the first block hits but the second block (tokens 16-31) includes 4 shared tokens plus 12 divergent tokens — the whole block is a miss.

In practice, large system prompts (512+ tokens) mean most blocks are fully shared, and the block-boundary waste is a small fraction of the total.

### Comparison

| Dimension | RadixAttention (SGLang) | Automatic prefix caching (vLLM) |
|-----------|------------------------|--------------------------------|
| Index structure | Radix tree | Hash table over blocks |
| Granularity | Token-level | Block-level (16 tokens) |
| Matching | Longest prefix walk | Block-hash lookup |
| Node splitting | Yes, on partial match | No (blocks are fixed) |
| Eviction | LRU on leaf nodes | LRU on blocks |
| Memory overhead | Tree pointers | Hash table |
| Best for | High-variance prefixes | Fixed large prefixes |

Both techniques produce identical results for the common case (shared system prompt, divergent user input). The radix tree is more memory-efficient for fringe cases where many prefixes partially overlap.

## Build It

`code/main.py` implements a radix tree for prefix caching and a vLLM-style block hash cache, then exercises both on synthetic request traces.

```
=== Radix Cache (SGLang-style prefix matching) ===
  cache hit: 0/6 tokens for 'What is the capital of France?'
  cache hit: 4/6 tokens for 'What is the capital of Germany?'
  cache hit: 6/8 tokens for 'What is the capital of France? Paris'
  cache hit: 0/4 tokens for 'How does gradient descent work?'
  overall hit ratio: 41.67%

=== vLLM-style Automatic Prefix Caching (hash blocks) ===
  Request A: 0/2 blocks cached (0%)
  Request B: 1/2 blocks cached (50%)
  Request C: 1/2 blocks cached (50%)
```

### Step 1: the radix node

Each `RadixNode` stores a `prefix` (tuple of token ids), pointers to `children` and `parent`, a reference to the cached `kv_cache` data (simulated as a list of strings), an `access_time` for LRU ordering, and an `evictable` flag (root is never evicted).

### Step 2: longest prefix matching

Starting from the root, for each child, compute the Jaccard-style overlap between the child's prefix and the remaining query tokens. When a full match is found, descend. When a partial match is found, the caller stops (the matching length is `i + j`). When no child matches, the walk stops.

### Step 3: inserting with node splitting

Insertion calls the same walker but has three cases:

1. **Full match through an entire child prefix:** descend and continue.
2. **Partial match (split):** the new sequence shares part of a child's label but diverges mid-node. Split the node: create a new parent with the shared prefix, trim the old child to its suffix, attach a new leaf for the remaining new tokens.
3. **No match:** attach a new leaf directly under the current node.

### Step 4: LRU eviction

When memory is full, traverse all leaf nodes, sort by access time (oldest first), and delete until the target number of tokens is freed. After deleting a leaf, if its parent has only one remaining child, merge the parent with that child to prevent degenerate chains.

### Step 5: vLLM-style block caching

Divide each request into fixed-size blocks. Hash each block with MD5. Store cached blocks in a global dictionary. On lookup, test block presence by hash. This demonstrates the simpler alternative: no tree, no splitting, but coarser granularity.

## Use It

Choose your prefix caching strategy by workload profile:

| Workload | Recommended strategy | Why |
|----------|---------------------|-----|
| Large system prompt (512+ tokens), low variation | vLLM automatic prefix caching | Block hash is simpler; boundary waste is negligible |
| High prefix variation, many short overlapping sequences | RadixAttention | Token-level granularity; tree captures short shared prefixes efficiently |
| Multi-turn chat with long conversation history | RadixAttention | Each turn shares most prior tokens; tree splits at turn boundaries |
| Speculative decoding (draft model) | RadixAttention | Draft model and target model share prefix; fine-grained reuse saves meaningful decode cycles |
| Beam search with branching | RadixAttention | Branches share common prefix; token-level split avoids recomputing shared suffix across beams |

Deployment considerations:

- Store the tree globally within one inference engine process. Do not share across processes (would require distributed cache coherence).
- Set a memory budget for the KV cache (typically 80% of available VRAM minus model weights). Evict when crossing the threshold.
- Profile your prompt distribution before implementing. If 80%+ of requests share an identical prefix, even a flat hash map works. The tree matters when prefixes overlap partially.
- Warmup: send a synthetic request with the system prompt before any real traffic. This pre-populates the cache and the first real request hits.

## Ship It

This lesson produces `outputs/skill-prefix-cache-tuner.md`. Given a prompt trace (distribution of prompt lengths, prefix overlap statistics, model architecture, deployment VRAM), it recommends the caching strategy (radix tree, block hash, or none) and estimates the throughput improvement from the cache hit ratio.

## Exercises

1. Run `code/main.py`. Confirm the radix cache achieves a 41.67% hit ratio on the four synthetic requests. Why does request C score 0% in the block cache but 0% in the radix cache for request C as well? (Hint: look at the token sequences.)

2. Modify the insertion order in `code/main.py`: insert the divergent request before the shared-prefix request. Does the hit ratio change? Explain why node splitting makes insertion-order-independent caching possible.

3. Extend the radix tree implementation with node merging. After an eviction removes a leaf, check whether the parent has exactly one child. If so, merge the parent's prefix with the child's prefix and delete the child node. Verify with a unit test.

4. Compute the prompt cache hit ratio for a multi-turn chatbot: system prompt = 1500 tokens, each user message = 200 tokens, each assistant reply = 300 tokens, 20 turns per session, 5000 sessions. Assume all conversations share the same system prompt and each session accumulates its prior conversation as prefix.

5. Implement a hybrid: use a hash-based block cache for the first N blocks and fall back to the radix tree for the remaining tokens. Compare the memory overhead. What workload would benefit from this hybrid?

## Key Terms

| Term | What people say | What it actually means |
|------|----------------|------------------------|
| Prefix caching | "Reuse KV from earlier requests" | Store KV tensors indexed by the token prefix that produced them; skip recomputation on cache hit |
| Radix tree | "Compact prefix tree" | Space-optimized trie where nodes store sequences of tokens rather than single tokens; enables efficient prefix matching and node splitting |
| RadixAttention | "SGLang's tree cache" | Radix-tree-based KV cache management in SGLang; token-level granularity, LRU eviction, node splitting on partial prefix match |
| Automatic prefix caching | "vLLM's block cache" | Hash-based KV block caching in vLLM; fixed-size blocks (16 tokens), flat hash table lookup, no tree structure |
| Prompt cache hit ratio | "What fraction of prompts is cached" | The ratio of prompt tokens that hit the KV cache to total prompt tokens across a workload |
| Node splitting | "Cutting a node at the divergence point" | When a new sequence partially matches a radix node's prefix, the node splits into a shared parent and two children |
| LRU eviction | "Kick out oldest cache entries" | Remove leaf nodes with the oldest access timestamp when the cache reaches its memory budget |
| KV block | "vLLM's cache unit" | A fixed-size chunk of the KV cache (16 tokens); vLLM identifies blocks by content hash for automatic prefix caching |
| Prefill | "The first forward pass" | The initial prompt-processing phase of LLM inference; computes KV cache for all prompt tokens |
| Decode | "The token-by-token phase" | The autoregressive generation phase; one token per forward pass, reuses the KV cache from prefill |

## Further Reading

- [Zheng et al. — SGLang: Efficient Execution of Structured Language Model Programs (arXiv:2312.07104)](https://arxiv.org/abs/2312.07104) — the SGLang paper introducing RadixAttention; describes the radix tree design, LRU eviction, and prefix matching algorithm
- [Kwon et al. — vLLM: Easy, Fast, and Cheap LLM Serving with PagedAttention (arXiv:2309.06180)](https://arxiv.org/abs/2309.06180) — the vLLM paper; Section 5.2 describes automatic prefix caching with block-level hash-based reuse
- [SGLang RadixAttention documentation](https://sgl-project.github.io/) — official docs covering the radix tree implementation and configuration options
- [vLLM automatic prefix caching documentation](https://docs.vllm.ai/en/latest/features/automatic_prefix_caching.html) — official docs covering enablement, block size tuning, and known limitations
- [Morrison — PATRICIA — Practical Algorithm To Retrieve Information Coded In Alphanumeric (1968)](https://dl.acm.org/doi/10.1145/321479.321481) — the original PATRICIA trie paper; the radix tree is a direct adaptation to token sequences
- [Pope et al. — Efficiently Scaling Transformer Inference (arXiv:2211.05102)](https://arxiv.org/abs/2211.05102) — background on KV cache sizing, memory-efficient attention, and the throughput-memory tradeoff that prefix caching targets
