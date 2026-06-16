# Pipeline Parallelism -- GPipe, PipeDream, 1F1B Scheduling

> A 96-layer transformer does not fit on one GPU. Even with tensor parallelism, scaling beyond 8 GPUs per node forces cross-node communication that kills throughput. Pipeline parallelism splits layers across devices: rank 0 holds layers 0-23, rank 1 holds layers 24-47, and so on. The question is how to schedule forward and backward passes across those devices so that (a) GPUs stay busy, (b) gradients are correct, and (c) memory stays flat. GPipe, PipeDream, and 1F1B are the three canonical answers, each trading bubble overhead for memory and throughput in a different way.

**Type:** Learn
**Languages:** Python
**Prerequisites:** Phase 10, Lesson 05 (Distributed Training, FSDP, DeepSpeed), Lesson 27 (Tensor Parallelism)
**Time:** ~50 minutes

## Learning Objectives

- Explain why data and tensor parallelism alone cannot scale beyond a single node, motivating pipeline parallelism for multi-node training
- Derive the bubble ratio for GPipe and compute the number of microbatches needed to reach a target efficiency
- Contrast synchronous (GPipe) and asynchronous (PipeDream) gradient handling and explain why weight stales happen in PipeDream
- Trace the 1F1B schedule for P stages and M microbatches, identifying the warmup and steady-state phases
- Calculate the memory saved by interleaved 1F1B vs naive 1F1B in terms of activation memory per device

## The Problem

A 96-layer 70B transformer has roughly 140GB of weights in FP16. Tensor parallelism (TP) splits individual matmuls across GPUs within a node (typically 8 on NVLink), but TP across nodes is impractical because small all-reduce messages on InfiniBand are dominated by message-startup latency (1-2 microseconds per message). For a 70B model with hidden dim 8192, sequence length 4096, and batch size 8, the activation memory alone is 40GB per GPU. Beyond 70B, even with TP-8, a single H100 with 80GB cannot hold weights, activations, and optimizer states.

Pipeline parallelism (PP) solves the weight-memory problem by partitioning layers across devices. Rank 0 owns layers 0-23, rank 1 owns layers 24-47, and so on. Each rank only stores and computes on its shard of layers. The activation memory problem is reduced proportionally. The difficulty is that a sequential forward pass (rank 0 -> rank 1 -> ... -> rank P-1) leaves most ranks idle most of the time. The idle fraction is the pipeline bubble, and different scheduling strategies attack it differently.

## The Concept

### Device partitioning

Given a model with L transformer layers and P pipeline stages, assign L/P consecutive layers to each device. The first device (rank 0) holds the embedding layer, the first L/P layers, and the final device (rank P-1) holds the final L/P layers and the output projection head. Each device also holds its own slice of the embedding gradient, optimizer state, and activations.

The communication between stages is a point-to-point send/recv of the entire activation tensor (or gradient tensor on the backward pass). This is much cheaper than TP's all-reduce across the same number of devices -- a point-to-point send costs 1x the message size, while a ring all-reduce across P devices costs 2 x (P-1)/P x message size per device. For cross-node links (InfiniBand at 400 Gb/s), point-to-point is practical while all-reduce is not.

### GPipe: synchronous microbatches

GPipe (Huang et al., 2019) divides a global batch of size B into M microbatches of size B/M. For each microbatch, the forward pass flows sequentially through all P stages, then the backward pass flows back through all P stages. After all M microbatches complete forward and backward, gradients are accumulated across microbatches and a single optimizer step updates the weights.

```
Time ->
rank 0: f1 f2 f3 f4 | b4 b3 b2 b1 |
rank 1:    f1 f2 f3 f4 |    b4 b3 b2 b1 |
rank 2:       f1 f2 f3 f4 |       b4 b3 b2 b1 |
```

The idle time at the start of each forward pass and before each backward pass is the pipeline bubble. For P stages and M microbatches, the bubble ratio is:

```
Bubble ratio = (P - 1) / (M + P - 1)  (assuming fwd time = bwd time)
```

The ratio approaches zero as M grows. With M = 4 x P, the bubble ratio is (P-1) / (4P + P - 1) ~= (P-1) / (5P) ~= 20% for large P. With M = 16 x P, it drops to (P-1) / (16P + P - 1) ~= 6%.

The cost of large M is memory: each device must store activations for M microbatches before backward can start. For a single device, activation memory scales as O(M x L/P x batch_micro). Choosing M is a direct memory-vs-throughput tradeoff. GPipe's synchronous design guarantees correct gradients (same as single-device training) but wastes memory on activation buffering.

### PipeDream: asynchronous with 1F1B

PipeDream (Narayanan et al., 2018) interleaves forward and backward passes to reduce the bubble without increasing M. In the 1F1B (one-forward-one-backward) schedule, each device alternates between one forward pass and one backward pass as soon as its input dependencies are satisfied.

```
rank 0: f1 f2 f3 f4 b4 b3 b2 b1 ...
rank 1:    f1 f2 f3 b3 f4 b4 b2 b1 ...
rank 2:       f1 f2 b2 f3 b3 f4 b4 b1 ...
```

The 1F1B schedule has three phases:

1. **Warmup.** Rank 0 issues F forward passes while downstream ranks are idle. Each rank enters the warmup when it receives its first forward input. The warmup ends when every rank has executed at least one forward.
2. **Steady state.** Every rank alternates forward and backward. The total number of in-flight microbatches is bounded by P. No rank is idle in steady state -- the bubble is zero during this phase.
3. **Cooldown.** The final forward passes finish and the remaining backward passes drain the pipeline.

The bubble ratio for 1F1B is:

```
Bubble ratio = (P - 1) / M
```

For P = 8, M = 32: (7) / (32 + 7 - 1) = 7/38 = 18% for GPipe vs 7/32 = 22% for 1F1B. The gap narrows as M grows, but the real advantage of 1F1B is the bounded activation memory: at most P microbatches are in flight, so activation memory per device is O(L/P x batch_micro x P) instead of O(L/P x batch_micro x M).

The caveat is weight stales. PipeDream originally used asynchronous weight updates: each device applied gradients immediately instead of waiting for all microbatches. This meant device 0's parameters at time t were out of sync with device P-1's parameters at the same logical step. PipeDream mitigated this with weight-tying via a global parameter server and 1F1B with gradient accumulation (which makes it synchronous again). The modern convention is 1F1B with gradient accumulation, preserving correctness.

### Interleaved 1F1B

Narayanan et al. (2021) extended 1F1B to interleave multiple stages per device. Instead of each device owning one contiguous block of L/P layers, each device owns several disjoint blocks spread across the model. With interleave factor k, device i owns layers [i, i+P, i+2P, ..., i+(k-1)P].

The schedule runs k forward passes (one per owned block) per microbatch before moving to the next device. This increases the number of in-flight microbatches from P to k x P, smoothing the pipeline further. The bubble ratio becomes:

```
Bubble ratio = (P - 1) / (k x M)
```

The tradeoff is higher communication volume: each device sends and receives activations k times per microbatch instead of once. For k=2 with P=8, the bubble ratio halves at the cost of 2x the inter-stage communication.

### Memory vs throughput tradeoff

```
| Strategy      | Bubble ratio | Activation memory per device | Gradient semantics |
|---------------|-------------|------------------------------|-------------------|
| GPipe (M=16)  | (P-1)/(M+P-1) | O(M x L/P x b_micro)        | Exact             |
| 1F1B (M=32)   | (P-1)/M       | O(P x L/P x b_micro)        | Exact (with GA)   |
| Interleaved k=2| (P-1)/(k x M)| O(kP x L/P x b_micro)       | Exact             |
```

GPipe uses more activation memory for the same bubble ratio. 1F1B with gradient accumulation matches GPipe's gradient semantics at lower memory cost. Interleaved 1F1B reduces the bubble further at the cost of communication.

### Practical considerations

**Load balancing.** Pipeline parallelism assumes every stage takes equal time. A single slow stage (straggler) stalls the entire pipeline. Load imbalance is common when:
- The embedding and output projection heads differ from transformer layers in FLOPs and memory
- Early layers have different sequence lengths than late layers in certain architectures (e.g., pooling)
- Microbatching creates uneven CPU-bound preprocessing on rank 0

The fix is to profile per-layer FLOPs and partition layers to equalize compute per stage, not layer count. In practice, transformer layers are nearly identical, so equal layer counts work well above 12 layers.

**Gradient accumulation.** With 1F1B + gradient accumulation, each device sums microbatch gradients locally and applies the optimizer step after M microbatches complete. This makes the schedule synchronous (correct gradients) but preserves the memory advantage: only P microbatches are in flight simultaneously.

**Combining with TP and DP.** Modern LLM training uses 3D parallelism: data parallelism across data-parallel groups, tensor parallelism within each node (8 GPUs on NVLink), and pipeline parallelism across nodes. Each "pipeline stage" is a TP group of 8 GPUs. The total number of pipeline stages P is typically 4-16, and the data parallel degree D is the remaining GPU count divided by (P x TP_degree). DeepSeek-V3 used P=16 PP stages across its 2,048-GPU cluster.

## Build It

```python
import numpy as np

def simulate_pipeline(P, M, k=1):
    fwd_cost = 1.0
    bwd_cost = 2.0 * fwd_cost
    sched = []
    n_fwd_per_stage = k * M
    in_flight = []
    for t in range(1000):
        for stage in range(P):
            if stage == 0:
                if len(in_flight) < k * P:
                    in_flight.append(0)
            assigned = [m for m in in_flight if m % P == stage]
            for m in assigned[:k]:
                if (t * P + stage) not in sched:
                    sched.append((t, stage, 'f', m))
        active = [m for m in in_flight if m < n_fwd_per_stage]
        in_flight = active
        if len(sched) >= k * P * (M + P - 1):
            break

def gpipe_bubble(P, M):
    return (P - 1) / (M + P - 1)

def onef1b_bubble(P, M):
    return (P - 1) / M

def interleaved_bubble(P, M, k):
    return (P - 1) / (k * M)

P = 8
print(f"P={P} pipeline bubble ratios:")
for M in [8, 16, 32, 64, 128]:
    g = gpipe_bubble(P, M)
    o = onef1b_bubble(P, M)
    i = interleaved_bubble(P, M, 2)
    print(f"M={M:4d}  GPipe={g:.3f}  1F1B={o:.3f}  Interleaved(2)={i:.3f}")
```

Run `code/main.py`. The output shows bubble ratio converging toward zero as M grows. At M=128 and P=8, GPipe reaches 5% bubble, 1F1B reaches 5.5%, and interleaved-2 reaches 2.7%. Below M=16, all three schedules have bubble ratios above 20%.

## Use It

| PP depth | Microbatches | GPipe bubble | 1F1B bubble | Interleaved-2 bubble | Activation mem per GPU |
|----------|-------------|-------------|-------------|----------------------|----------------------|
| 4 | 8 | 0.27 | 0.38 | 0.16 | High (GPipe) / Low (1F1B) |
| 4 | 32 | 0.09 | 0.09 | 0.04 | High / Low |
| 8 | 32 | 0.18 | 0.22 | 0.10 | High / Low |
| 8 | 128 | 0.05 | 0.05 | 0.03 | High / Low |
| 16 | 128 | 0.10 | 0.12 | 0.06 | High / Low |

## Ship It

Save as `outputs/skill-pp-strategy.md`. Given a model (L layers, hidden dim, batch size), GPU count, interconnect topology, and memory per GPU, the skill outputs the optimal pipeline depth P, schedule type (GPipe / 1F1B / interleaved), microbatch count M, and expected bubble ratio.

## Exercises

1. Derive the bubble ratio formula for GPipe from first principles. Define T_f as the forward time per microbatch, T_b as the backward time, P as the number of stages, and M as the number of microbatches. Account for the fact that T_b is approximately 2 x T_f.

2. Simulate the 1F1B schedule for P=4, M=6 by hand. Write out the timeline of events for each rank (f1 = forward microbatch 1, b1 = backward microbatch 1). Identify the warmup, steady-state, and cooldown phases.

3. Compute the activation memory saved by 1F1B vs GPipe for a 70B model with L=80, d_model=8192, batch=8, P=8, and M=32. Assume each activation element consumes 2 bytes (FP16) and each layer caches 12 x batch x seq x d_model bytes (self-attention + FFN intermediates).

4. Implement a microbatch scheduler that respects the 1F1B constraint: a rank can only start a forward pass if its previous forward microbatch's backward is complete. Run it for P=8, M=32 and verify the bubble ratio matches the formula.

5. Research how Megatron-LM and DeepSpeed combine PP with TP. Explain why each PP stage is a TP group of 8 GPUs and compute the total number of GPUs needed for a system with PP=8, TP=8, DP=4.

## Key Terms

| Term | What people say | What it actually means |
|------|----------------|-----------------------|
| Pipeline parallelism | "Split layers across GPUs" | Partition transformer layers across devices; each device only stores and computes on its layer shard |
| Microbatch | "A tiny batch that flows through the pipeline" | A fraction of the global batch; each microbatch flows forward then backward through all PP stages |
| Bubble ratio | "Fraction of idle GPU time" | (P-1)/(M+P-1) for GPipe; the fraction of time a pipeline stage spends waiting for input or gradient |
| GPipe | "Synchronous pipeline" | All microbatches forward, then all backward; high activation memory, exact gradients |
| 1F1B | "Interleaved schedule" | Alternate forward and backward passes; lower activation memory, exact gradients with gradient accumulation |
| Interleaved 1F1B | "Multiple blocks per device" | Each device holds k disjoint layer blocks; reduces bubble at the cost of more inter-stage communication |
| Weight stales | "Stale parameters" | Parameters used for forward on one device are out of sync with parameters used for backward on another; mitigated by gradient accumulation |
| Warmup phase | "Filling the pipeline" | The initial period when downstream ranks are idle waiting for their first forward input |
| Steady state | "Full utilization" | The middle phase where all ranks alternate forward and backward with no idle time |
| Cooldown phase | "Draining the pipeline" | The final period when forward passes finish and backward passes drain |

## Further Reading

- [Huang et al., 2019. "GPipe: Efficient Training of Giant Neural Networks using Pipeline Parallelism"](https://arxiv.org/abs/1811.06965) — the GPipe paper with microbatching and bubble analysis
- [Narayanan et al., 2018. "PipeDream: Generalized Pipeline Parallelism for DNN Training"](https://arxiv.org/abs/1806.03377) — the original PipeDream paper with 1F1B schedule and weight stales analysis
- [Narayanan et al., 2021. "Efficient Large-Scale Language Model Training on GPU Clusters Using Megatron-LM"](https://arxiv.org/abs/2104.04473) — 3D parallelism with interleaved 1F1B and combined TP/PP/DP
- [Lepikhin et al., 2020. "GShard: Scaling Giant Models with Conditional Computation and Automatic Sharding"](https://arxiv.org/abs/2006.16668) — pipeline parallelism applied to MoE models
- [Korthikanti et al., 2023. "Reducing Activation Recomputation in Large Transformer Models"](https://arxiv.org/abs/2205.05198) — activation memory analysis relevant to PP memory budgeting
- [DeepSeek-AI, 2024. "DeepSeek-V3 Technical Report"](https://arxiv.org/abs/2412.19437) — production PP with DualPipe at 2,048-GPU scale
