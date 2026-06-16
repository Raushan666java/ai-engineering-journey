# Skill: Prefix Cache Tuner

Given a prompt trace and deployment constraints, recommend the optimal prefix caching strategy and estimate throughput improvement.

## Input

```yaml
prompt_trace:
  total_requests: <int>
  system_prompt_tokens: <int>             # tokens in shared system prompt (0 if none)
  avg_user_prompt_tokens: <int>           # average user input tokens per request
  prefix_overlap_distribution: <str>      # "identical" | "partial_high" | "partial_low" | "none"
  conversation_turns_per_session: <int>   # average chat turns per session (1 for single-turn)
deployment:
  model_name: <str>
  num_layers: <int>
  num_kv_heads: <int>
  head_dim: <int>
  dtype_bytes: <int>                     # 2 for fp16, 1 for fp8, 4 for fp32
  available_vram_gb: <float>             # VRAM available after loading weights
  serving_framework: <str>               # "sglang" | "vllm" | "tgi" | "custom"
```

## Output

1. **Recommended strategy:** `radix_tree` | `block_hash` | `none`
2. **Estimated prompt cache hit ratio:** `<percent>`
3. **Throughput improvement multiplier:** `<factor>` (relative to no caching)
4. **KV cache memory budget:** `<gb>` GB
5. **Eviction policy:** `LRU` | `LFU` | `FIFO`
6. **Warmup recommended:** `yes` / `no`

## Decision rules

- If prefix_overlap_distribution is `identical` or `partial_high` and system_prompt_tokens > 256: enable caching. Block hash is sufficient.
- If prefix_overlap_distribution is `partial_low` and conversation_turns_per_session > 3: use radix tree. Token-level granularity captures short overlapping prefixes from conversation history.
- If total_requests < 1000 or system_prompt_tokens < 64: caching provides negligible benefit. Skip.
- Memory budget: 80% of available_vram_gb minus 10% headroom for cache fragmentation.

## Hit ratio estimation

```
hit_ratio = (system_prompt_tokens * total_requests) /
            ((system_prompt_tokens + avg_user_prompt_tokens) * total_requests)
```

For multi-turn sessions, multiply system_prompt_tokens by turns and include accumulated prior conversation in the prefix.

## Throughput multiplier

```
multiplier = 1 / (1 - hit_ratio)
```

A 75% hit ratio gives 4x effective throughput on prefill.
