# Continuous Batch Tuner

Analyzes request distribution (prompt length, decode length, arrival rate) and recommends the optimal scheduling policy, batch size, and chunk size for an LLM inference server.

**Input:** Request trace or workload description (mean/median/P99 prompt and decode lengths, arrival pattern).

**Output:** Scheduler configuration: policy (vLLM iteration-level vs Sarathi chunked prefill vs static), max_batch, sarathi_chunk size, and estimated throughput gain.

## Decision table

| Workload profile | Recommended scheduler | Rationale |
|-----------------|---------------------|-----------|
| Many short prompts (chat, QA) | vLLM iteration-level | Full prefill is cheap; decode density dominates |
| Long prompts + short decode (code analysis) | Sarathi chunked prefill | Chunked prefill eliminates prefill block on decode |
| Mixed prompts, bursty arrival | vLLM with preemption | Preemption handles memory pressure on burst |
| Uniform short prompts + long decode | vLLM iteration-level | Decode-bound; prefill overhead negligible |
| Extreme long context (64K+) | Sarathi with large chunk | Avoids single-step OOM on giant prefill |

## Tuning knobs

- `max_batch`: trade latency for throughput. Increase until P99 TTFT exceeds SLA.
- `sarathi_chunk`: set so `num_decode * decode_cost + chunk <= GPU_sustained_throughput`.
- `block_size`: 16 for most workloads; 32 for long-context to reduce block table overhead.
- `num_physical_blocks`: set to fill available GPU memory after model weights.
