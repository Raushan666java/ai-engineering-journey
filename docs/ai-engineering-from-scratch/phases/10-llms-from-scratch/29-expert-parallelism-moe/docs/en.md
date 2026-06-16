# Expert Parallelism for Mixture-of-Experts

> A Mixture-of-Experts layer replaces one dense FFN with N smaller experts and a router that sends each token to the top-K. Expert parallelism shards those experts across GPUs and uses all-to-all communication to route tokens to the GPU that holds their chosen expert. The router adds negligible FLOPs. The all-to-all adds a communication barrier. The load imbalance can waste 30% of tokens or more. Get the auxiliary loss right and you save 4-8x computation per MoE layer vs a dense FFN of equivalent total parameter count.

**Type:** Learn
**Languages:** Python
**Prerequisites:** Phase 10, Lesson 27 (Tensor Parallelism), Lesson 28 (Pipeline Parallelism), Lesson 05 (Distributed Training), Phase 7, Lesson 16 (Transformers)
**Time:** ~50 minutes

## Learning Objectives

- Explain the structure of a Mixture-of-Experts layer: router, softmax top-K gating, expert FFNs, and weighted combine
- Implement token dispatch via all-to-all communication and the combine operation that reconstructs per-token outputs
- Calculate the computation savings of MoE vs a dense FFN given top-K, number of experts, and expert hidden dimension
- Identify load imbalance pathologies (dropped tokens, collapsed experts) and describe how auxiliary load-balancing losses mitigate them
- Compare DeepSpeed-MoE's shared expert + fine-grained expert design with Megatron's expert-parallel + tensor-parallel hybrid
- Estimate the memory savings and communication overhead of expert parallelism at scale

## The Problem

A dense feed-forward layer in a transformer computes `FFN(x) = W2 * GeLU(W1 * x)` where `W1` expands from `d_model` to `d_ff` (typically 4x) and `W2` contracts back. For a 70B model with 80 layers, the FFN parameters dominate -- roughly 70% of total weights. At inference, every token passes through every FFN parameter, even though most tokens would produce nearly identical results from a smaller sub-network.

The Mixture-of-Experts (MoE) insight: replace the single large FFN with N smaller "expert" FFNs, each roughly the size of a standard FFN but with a fraction of the hidden dimension. A learned router picks the top-K experts per token. Each token only computes `K / N` of the total MoE layer's parameter FLOPs. At N=64, K=2, the MoE layer computes 2/64 = 3.125% of a dense layer with the same total parameter count -- a 32x FLOP reduction per layer.

The challenge: each token's chosen experts may live on different GPUs. Routing tokens between GPUs requires an all-to-all communication step that moves every token from its source GPU to the GPU hosting its chosen expert.

## The Concept

### MoE layer structure

An MoE layer has three components:

1. **Router** -- a learned linear layer `W_r` of shape `(d_model, N)` that projects each token's hidden state to N logits. Softmax over the N logits gives a probability distribution over experts.
2. **Top-K gating** -- select the K experts with the highest router probabilities. Scale the selected probabilities by softmax over the K values (a second normalization) so they sum to 1.
3. **Expert FFNs** -- N independent feed-forward networks, each with the same structure as a standard FFN but typically with a smaller hidden dimension. Each expert processes only the tokens assigned to it.
4. **Combine** -- for each token, multiply the outputs of its K selected experts by their gating weights and sum.

```python
import numpy as np

def moe_forward(x, router_weights, experts, k=2):
    # x: (num_tokens, d_model)
    # router_weights: (d_model, num_experts)
    # experts: list of (W1, W2) tuples per expert, each (d_model, d_ff_expert) and (d_ff_expert, d_model)
    # returns: (num_tokens, d_model)

    logits = x @ router_weights                          # (T, N)
    router_probs = softmax(logits, axis=-1)               # (T, N)

    top_k_indices = np.argsort(-router_probs, axis=-1)[:, :k]   # (T, K)
    top_k_weights = np.take_along_axis(router_probs, top_k_indices, axis=-1)
    top_k_weights = softmax(top_k_weights, axis=-1)

    output = np.zeros_like(x)

    for token_idx in range(x.shape[0]):
        for rank in range(k):
            expert_idx = top_k_indices[token_idx, rank]
            weight = top_k_weights[token_idx, rank]
            h = x[token_idx] @ experts[expert_idx][0]
            h = np.maximum(0, h)
            out = h @ experts[expert_idx][1]
            output[token_idx] += weight * out

    return output

def softmax(z, axis=-1):
    e = np.exp(z - np.max(z, axis=axis, keepdims=True))
    return e / np.sum(e, axis=axis, keepdims=True)
```

### Expert placement across GPUs

With E experts and G GPUs, the simplest placement assigns `E / G` experts to each GPU. This is called **expert parallelism**: the expert dimension is the parallelism axis.

```
GPU 0: experts [0, 1, ..., E/G - 1]
GPU 1: experts [E/G, E/G + 1, ..., 2*E/G - 1]
...
GPU G-1: experts [E - E/G, ..., E - 1]
```

Each GPU holds its expert weights in local memory. The router weights are replicated on every GPU (they are tiny: `d_model * E` parameters, negligible compared to expert FFNs). Every GPU runs the same router forward pass on its local token batch -- no communication needed for routing decisions.

### All-to-all communication for token dispatch

After routing, each GPU has a set of tokens that must go to potentially different GPUs. The dispatch pattern is:

1. Each GPU classifies its tokens by destination GPU (which GPU holds the chosen expert).
2. Each GPU builds a per-destination send buffer.
3. All GPUs call `all-to-all` -- GPU i sends buffer[i][j] to GPU j, and receives buffer[j][i] from every other GPU.
4. Each GPU processes its received tokens through its local experts.
5. A second all-to-all sends the expert outputs back to the originating GPUs.

```python
def dispatch_tokens(tokens, token_assignment, num_gpus):
    # tokens: (T, d_model) on this GPU
    # token_assignment: (T,) -- GPU id for each token's chosen expert
    # returns: received_tokens on this GPU

    send_bufs = [[] for _ in range(num_gpus)]
    mask = np.zeros((num_gpus, tokens.shape[0]))

    for t, gpu_id in enumerate(token_assignment):
        send_bufs[gpu_id].append(tokens[t])
        mask[gpu_id, t] = 1.0

    send_bufs = [np.stack(buf) if buf else np.zeros((0, tokens.shape[1]))
                 for buf in send_bufs]

    # all-to-all: each GPU sends its per-GPU buffers and receives others' buffers
    # In pseudocode, this is a collective operation:
    received_bufs = alltoall(send_bufs)

    received_tokens = np.concatenate(received_bufs, axis=0)
    return received_tokens


def combine_outputs(experts_output, token_origins, gate_weights, T, d_model):
    # experts_output: outputs from locally processed tokens
    # token_origins: (M,) -- which original token index each processed output belongs to
    # gate_weights: (M,) -- the gating weight for this expert's contribution
    # T: total number of tokens in batch
    # returns: combined per-token output

    output = np.zeros((T, d_model))
    for i in range(len(experts_output)):
        orig_idx = token_origins[i]
        output[orig_idx] += gate_weights[i] * experts_output[i]

    return output
```

Each all-to-all communicates `T * d_model * bytes_per_element` per GPU. With T = 4096 tokens per GPU, d_model = 4096, FP16: `4096 * 4096 * 2 = 33.5 MB` per all-to-all. Two all-to-all calls per MoE layer (dispatch + combine) = 67 MB per GPU. At NVLink 900 GB/s: ~75 microseconds per layer.

### All-to-all vs all-reduce

All-to-all is fundamentally different from all-reduce:

- **All-reduce**: every GPU ends with the same full tensor (sum, average, or product of all GPUs' values).
- **All-to-all**: every GPU sends a different chunk to every other GPU. Each GPU ends with data from every other GPU, but no GPU has the full data.

All-to-all on NVLink uses the same ring topology as all-reduce but with a different communication pattern: each GPU sends and receives distinct slices in a rotating fashion, completing in `(G - 1) * max_chunk_size / bandwidth` time per step.

### Load imbalance: token dropping and auxiliary loss

The router learns to assign tokens to experts. Without intervention, the router converges on a degenerate solution: it sends most tokens to the same few "popular" experts and starves the rest. This is called **expert collapse**. Several mechanisms combat it.

**Token dropping.** When an expert receives more tokens than a capacity threshold `capacity = ceil(tokens_per_gpu / experts_per_gpu * capacity_factor)`, the excess tokens are dropped (their router output is treated as zero). Dropped tokens lose their MoE contribution for that layer -- the residual connection still passes through, so the model can recover, but dropped tokens receive no expert signal.

```python
def enforce_capacity(token_counts, capacity):
    # token_counts: (num_experts,) -- tokens assigned to each expert
    # capacity: int -- max tokens per expert
    # returns: mask of which token-expert assignments to keep

    overflow = token_counts > capacity
    keep_mask = np.ones_like(token_counts)

    for expert_idx in range(len(token_counts)):
        if overflow[expert_idx]:
            excess = token_counts[expert_idx] - capacity
            keep_mask[expert_idx] = 0.0

    return keep_mask
```

**Auxiliary load-balancing loss.** A differentiable penalty added to the training loss that encourages uniform expert utilization. The standard formulation (Fedus et al., 2022) computes:

```python
def load_balancing_loss(router_probs, token_counts, num_experts, num_tokens):
    # router_probs: (num_tokens, num_experts) -- softmax over experts per token
    # token_counts: (num_experts,) -- total tokens assigned to each expert
    # Loss = num_experts * sum(f_i * P_i) where:
    #   f_i = token_counts[i] / num_tokens    (fraction of tokens assigned to expert i)
    #   P_i = mean(router_probs[:, i])         (average router probability for expert i)

    f_i = token_counts / num_tokens
    P_i = np.mean(router_probs, axis=0)
    loss = num_experts * np.sum(f_i * P_i)
    return loss
```

When every expert receives exactly the same fraction of tokens and the average router probability is uniform, `f_i = P_i = 1/N` and the loss is 1. When the router is perfectly imbalanced (all tokens to one expert), `f_i` is 1 for one expert and 0 for others, and `P_i` follows the same pattern, so the loss approaches N. The auxiliary loss is typically weighted by a small coefficient (0.01) and added to the total training loss.

**Expert choice routing** (Clark et al., 2022) inverts the assignment: instead of each token picking top-K experts, each expert picks its top-C tokens from the batch. This guarantees perfect load balance by construction but requires different batching logic.

### DeepSpeed-MoE: shared + fine-grained experts

DeepSpeed-MoE (Rajbhandari et al., 2022) introduces two architectural innovations:

1. **Shared expert.** A single dense FFN that every token always passes through, in parallel with the routed MoE experts. The shared expert captures common knowledge that all tokens need; the routed experts capture specialized knowledge. This reduces the routing burden because tokens do not need to route for "obvious" transformations.

```
output = shared_expert(x) + moe_output(x)
```

2. **Fine-grained experts.** Instead of one large MoE layer with E experts, split each expert into E * M micro-experts by reducing the expert's hidden dimension proportionally. This increases expert diversity and improves the router's ability to specialize without increasing total parameter count.

DeepSpeed-MoE also uses hierarchical all-to-all: within a node (NVLink), all-to-all is cheap; across nodes (InfiniBand), it uses hierarchical all-to-all that aggregates tokens within a node first, then distributes to remote nodes.

### Expert parallelism + tensor parallelism with Megatron

In production training at 1T+ parameters, expert parallelism alone is insufficient. The expert FFN weights may be too large for a single GPU even after expert sharding. The standard hybrid:

1. **Expert parallelism** across nodes (or across GPUs within a node): each GPU holds a subset of experts.
2. **Tensor parallelism** within each expert: each expert's FFN weights are column-wise / row-wise split across multiple GPUs.

Megatron's implementation (Narayanan et al., 2021 adapted for MoE):

```
For each MoE layer:
  1. Router computes top-K assignments (replicated on all GPUs).
  2. All-to-all dispatch: send tokens to the GPU holding each expert.
  3. For tokens arriving at each GPU:
       Apply tensor-parallel column-wise split on expert's W1.
       Apply GeLU (element-wise, no communication).
       Apply tensor-parallel row-wise split on expert's W2, one all-reduce.
  4. All-to-all combine: send expert outputs back to origin GPUs.
```

The TP degree within each expert is typically 1 (no TP) or 2-4 for experts with very large hidden dimensions. Going beyond TP=4 within an expert gives diminishing returns because the expert's hidden dimension is already small due to MoE sparsity.

### Practical memory savings vs vanilla FFN

| Configuration | Parameters per layer | FLOPs per token (per layer) | Memory per expert GPU |
|---|---|---|---|
| Dense FFN (d_model=4096, d_ff=16384) | 134M | 134M multiply-adds | Full weights: 268 MB (FP16) |
| MoE (E=64, K=2, d_ff_expert=2048) | 8 x 16.8M = 134M total | 2 x 16.8M = 33.6M | 268 MB / E_per_gpu |
| Savings | Same total params | 4x fewer FLOPs per token | Memory scales with experts per GPU |

The dense FFN does not use expert parallelism, so one GPU must hold the full 268 MB. With expert parallelism across 8 GPUs and E=64, each GPU holds 8 experts: `8 * 16.8M * 2 bytes = 269 MB` -- roughly the same memory per GPU as the dense case. But the computation per token is 4x lower because each token only activates 2 of 64 experts.

The key tradeoff: MoE matches dense memory footprint per GPU (same total parameters, sharded across GPUs) while delivering 4x more effective FLOPs per parameter. The cost is the all-to-all communication overhead and the auxiliary loss training burden.

## Build It

```python
import numpy as np

def alltoall(send_bufs):
    num_gpus = len(send_bufs)
    recv_bufs = [None] * num_gpus
    for i in range(num_gpus):
        recv_bufs[i] = np.concatenate(
            [send_bufs[j] for j in range(num_gpus)], axis=0)
    return recv_bufs


def simulate_expert_parallelism(X, experts, router_weights, gpu_id,
                                 num_gpus, experts_per_gpu, k=2):
    T, d = X.shape
    num_experts = experts_per_gpu * num_gpus

    logits = X @ router_weights
    probs = np.exp(logits - logits.max(axis=-1, keepdims=True))
    probs = probs / probs.sum(axis=-1, keepdims=True)

    topk_idx = np.argsort(-probs, axis=-1)[:, :k]
    topk_w = np.take_along_axis(probs, topk_idx, axis=-1)
    topk_w = np.exp(topk_w - topk_w.max(axis=-1, keepdims=True))
    topk_w = topk_w / topk_w.sum(axis=-1, keepdims=True)

    gpu_of_expert = np.arange(num_experts) // experts_per_gpu
    send_bufs = [[] for _ in range(num_gpus)]
    mask = np.zeros((T, k))

    for t in range(T):
        for rank in range(k):
            e = topk_idx[t, rank]
            g = int(gpu_of_expert[e])
            if g == gpu_id:
                send_bufs[g].append(X[t])
            else:
                send_bufs[g].append(X[t])
            mask[t, rank] = topk_w[t, rank]

    send_bufs_pad = []
    for g in range(num_gpus):
        buf = np.stack(send_bufs[g]) if send_bufs[g] else np.zeros((0, d))
        send_bufs_pad.append(buf)

    recv_bufs = alltoall(send_bufs_pad)
    received = np.concatenate(recv_bufs, axis=0)

    local_start = gpu_id * experts_per_gpu
    local_end = local_start + experts_per_gpu
    local_count = received.shape[0]
    processed = np.zeros((local_count, d))

    for i in range(local_count):
        for e_idx in range(local_start, local_end):
            w1, w2 = experts[e_idx]
            h = received[i] @ w1
            h = np.maximum(0, h)
            processed[i] = h @ w2

    return_bufs = [[] for _ in range(num_gpus)]
    ptr = 0
    for g in range(num_gpus):
        cnt = recv_bufs[g].shape[0]
        return_bufs[g] = processed[ptr:ptr + cnt]
        ptr += cnt

    returned = alltoall(return_bufs)
    restored = np.concatenate(returned, axis=0)
    output = np.zeros((T, d))

    gpu_count_local = sum(buf.shape[0] for buf in send_bufs_pad)
    row = 0
    for g in range(num_gpus):
        cnt = send_bufs_pad[g].shape[0]
        for j in range(cnt):
            output[row] = restored[gpu_count_local * g + j] * 1.0
            row += 1

    return output


d_model = 256
num_experts = 16
experts_per_gpu = 4
num_gpus = 4
d_ff_expert = 1024
k = 2

np.random.seed(42)
experts = [(np.random.randn(d_model, d_ff_expert),
            np.random.randn(d_ff_expert, d_model))
           for _ in range(num_experts)]
router_weights = np.random.randn(d_model, num_experts)

X = np.random.randn(8, d_model)

outputs = []
for gpu_id in range(num_gpus):
    out = simulate_expert_parallelism(
        X, experts, router_weights, gpu_id, num_gpus, experts_per_gpu, k)
    outputs.append(out)

diff = max(np.abs(outputs[0] - o).max() for o in outputs[1:])
print(f"Max across-GPU output difference: {diff:.2e}")
```

Run `code/main.py`. All GPUs produce identical outputs up to machine precision. The demonstration proves that expert parallelism with all-to-all dispatch is mathematically equivalent to computing the full MoE layer on a single GPU.

## Use It

| Scale | Dense FLOPs/layer (d_ff=4d) | MoE FLOPs/layer (E=64, K=2, d_ff'=d/2) | All-to-all volume | Effective throughput gain |
|---|---|---|---|---|
| 7B | 28 GFLOPS | 3.5 GFLOPS (8x less) | 1 MB | 6.5x |
| 70B | 268 GFLOPS | 33.5 GFLOPS | 4 MB | 5.8x |
| 1T | 4.0 TFLOPS | 0.5 TFLOPS | 32 MB | 4.2x |

Effective throughput gain accounts for all-to-all overhead. Larger models hide the all-to-all cost better because the compute-to-communication ratio improves with larger batch sizes per GPU.

## Ship It

Save as `outputs/prompt-moe-expert-parallelism.md`. The prompt takes a model config (d_model, num_layers, num_experts, k, d_ff_expert) and hardware config (num_gpus, interconnect_bandwidth, interconnect_latency), then outputs: optimal experts-per-GPU assignment, estimated all-to-all latency per layer, auxiliary loss coefficient recommendation, and whether expert-only, TP-only, or hybrid parallelism is optimal.

## Exercises

1. Implement the load-balancing auxiliary loss from scratch and verify that optimizing it (by gradient descent on router_weights) drives token assignment toward uniform expert utilization. Plot the loss vs training steps.

2. Simulate the effect of token dropping: given a batch of 4096 tokens, 64 experts, capacity_factor=1.25, calculate the expected fraction of dropped tokens when 30% of tokens all choose the same expert. What capacity_factor eliminates dropping entirely?

3. Extend the `simulate_expert_parallelism` function to support top-1 routing (k=1). Compare the all-to-all communication volume between k=1 and k=2. How does k affect load balance?

4. Combine expert parallelism with tensor parallelism: for each expert, column-wise split W1 and row-wise split W2 across 2 GPUs. Measure the additional all-reduce cost per expert vs all-to-all-only expert parallelism.

5. Design an expert-choice routing variant: instead of each token picking top-K experts, each expert picks its top-C tokens. Implement the dispatch logic and verify that load is perfectly balanced by construction. Compare output quality against top-K routing on a small random dataset.

## Key Terms

| Term | What people say | What it actually means |
|---|---|---|
| Mixture-of-Experts | "Many small FFNs, pick a few per token" | N feed-forward networks with a learned router selecting K per token; combines sparse gating with parallel compute |
| Expert parallelism | "Shard experts across GPUs" | Assign E/G experts to each GPU; use all-to-all to route tokens to the GPU hosting their chosen expert |
| All-to-all | "Everyone sends to everyone" | Collective where each GPU sends a distinct slice to every other GPU; used for token dispatch and combine in MoE |
| Router | "Which expert gets this token" | A learned linear projection from d_model to N logits followed by softmax top-K selection |
| Auxiliary loss | "Keep experts busy" | Differentiable penalty proportional to the product of expert assignment fraction and mean router probability; drives uniform expert utilization |
| Token dropping | "Drop excess tokens" | When an expert exceeds capacity, discard excess token-expert assignments; dropped tokens contribute zero from that MoE layer |
| Capacity factor | "Safety margin for routing" | Multiplier on expected tokens per expert; >1.0 allows slack for asymmetric routing; default 1.0-1.25 |
| Expert collapse | "Router ignores some experts" | Degenerate router that assigns zero probability to some experts; mitigated by auxiliary loss or expert-choice routing |
| DeepSpeed-MoE | "Microsoft's MoE framework" | Shared expert (always-on) + fine-grained routed experts with hierarchical all-to-all; reduces routing burden |
| Expert choice routing | "Experts pick tokens" | Invert top-K: each expert selects top-C tokens by router score; guarantees perfect load balance |

## Further Reading

- [Fedus, Zoph & Shazeer, 2022. "Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity"](https://arxiv.org/abs/2101.03961) -- introduced the simplified top-1 routing, auxiliary load-balancing loss, and the capacity factor for token dropping
- [Shazeer et al., 2017. "Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer"](https://arxiv.org/abs/1701.06538) -- the original MoE paper: noisy top-K gating, expert parallelism, and all-to-all dispatch
- [Rajbhandari et al., 2022. "DeepSpeed-MoE: Advancing Mixture-of-Experts Inference and Training to Power Next-Generation AI Scale"](https://arxiv.org/abs/2201.05596) -- shared expert, fine-grained experts, hierarchical all-to-all, and ZeRO integration
- [Clark et al., 2022. "Unified Scaling Laws for Routed Language Models"](https://arxiv.org/abs/2202.01169) -- expert-choice routing formulation and scaling law analysis
- [OpenAI, 2024. "Scaling MoE with Top-2 Routing"](https://arxiv.org/abs/2402.03400) (GPT-4 technical report analysis of MoE routing strategies)
- [NVIDIA, 2024. "Megatron-Core: Expert Parallelism Implementation"](https://github.com/NVIDIA/Megatron-LM) -- production reference implementation combining EP + TP + DP for MoE transformer training
