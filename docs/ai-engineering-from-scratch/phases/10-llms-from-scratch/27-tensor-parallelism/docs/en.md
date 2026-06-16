# Tensor Parallelism -- Megatron-LM, Column-wise & Row-wise Splitting

> A 70B transformer fits on one GPU if you only need to store the weights. But one GPU cannot hold the full activation tensor for a 4096-sequence with batch size 8. And one GPU's matmul on an (8192, 8192) weight takes one step. Eight GPUs each computing an (8192, 1024) shard finish the same matmul in one eighth the wall time. This is tensor parallelism: split individual layers across GPUs, compute in parallel, combine via collective communication.

**Type:** Learn
**Languages:** Python
**Prerequisites:** Phase 10, Lesson 05 (Distributed Training, FSDP, DeepSpeed)
**Time:** ~45 minutes

## Learning Objectives

- Explain why data parallelism cannot reduce per-GPU memory or latency for individual matmuls, motivating tensor parallelism (TP)
- Implement column-wise splitting of a linear layer (split output dim, concatenate results) and row-wise splitting (split input dim, sum results) in Python
- Trace the Megatron-LM forward-backward pattern for a transformer MLP block with one all-reduce eliminated via matched column-row pair
- Compare all-reduce, reduce-scatter, and all-gather in terms of communication volume and latency for TP
- Calculate the communication overhead ratio for a given TP degree, hidden dimension, and interconnect bandwidth

## The Problem

Data parallelism copies the full model to every GPU and splits the batch. This is efficient for scaling throughput on models that fit in single-GPU memory. For a 70B model, each GPU needs 140GB just for weights. Even with FSDP sharding, the per-layer matmul still runs on one GPU -- the all-gather reconstructs the full parameter, then one GPU computes the entire matmul.

The single-GPU matmul is the bottleneck in two ways:

1. **Memory.** The activation tensor for a single FFN expansion in a 70B model with hidden dim 8192 and sequence length 4096 is (4096, 8192) in FP16 = 64MB per layer. With 80 layers and batch size 8, that is 64MB x 80 x 8 = 40GB of activation memory for FFNs alone. Add attention, layer norms, and residual connections and single-GPU activation memory is untenable above 70B.

2. **Compute.** A matmul (M, K) x (K, N) costs 2 x M x K x N FLOPs. For M = 4096 x 8, K = 8192, N = 8192, that is 2 x 32768 x 8192 x 8192 = 4.4 teraFLOPs per FFN layer. On one H100 at 989 teraFLOP/s (FP16 theoretical), that is 4.5ms per layer. With 80 layers, a single forward pass is 360ms, and backward is roughly 2x that. One training step on one GPU is over a second.

Tensor parallelism fixes both: split the weight matrix so each GPU does a smaller matmul, and each GPU only stores its shard.

## The Concept

### Column-wise splitting

Take a weight matrix W of shape (d_in, d_out). With TP degree N, split W into N shards along the output dimension: each shard has shape (d_in, d_out / N). Each GPU holds one shard, computes X @ W_shard, producing output of shape (batch, d_out / N). The N partial outputs are concatenated along the last dimension to produce the full (batch, d_out) result.

```python
import numpy as np

def column_wise_linear(X, W, num_gpus):
    d_in, d_out = W.shape
    assert d_out % num_gpus == 0
    shard_size = d_out // num_gpus
    shards = [W[:, i * shard_size:(i + 1) * shard_size] for i in range(num_gpus)]
    partials = [X @ shard for shard in shards]
    return np.concatenate(partials, axis=-1)
```

No communication is needed after each GPU computes -- the concatenation is logical, not a collective operation, because each partial already lives on a different GPU. The all-gather or all-reduce happens only when the output must be replicated for the next layer.

### Row-wise splitting

Split W along the input dimension: each shard has shape (d_in / N, d_out). Each GPU computes X_shard @ W_shard where X_shard is the corresponding slice of the input. The N partial results sum to the full output.

```python
def row_wise_linear(X, W, num_gpus):
    d_in, d_out = W.shape
    assert d_in % num_gpus == 0
    shard_size = d_in // num_gpus
    x_shards = [X[:, i * shard_size:(i + 1) * shard_size] for i in range(num_gpus)]
    w_shards = [W[i * shard_size:(i + 1) * shard_size, :] for i in range(num_gpus)]
    partials = [x_s @ w_s for x_s, w_s in zip(x_shards, w_shards)]
    return sum(partials)
```

The sum requires an all-reduce: each GPU must broadcast its partial result to all other GPUs so every GPU ends with the full summed output.

### Megatron-LM f-fwd + f-bwd pattern

A transformer MLP block has two linear layers: an expansion (d_model -> 4 x d_model) and a contraction (4 x d_model -> d_model). Megatron-LM (Shoeybi et al., 2020) uses column-wise for the first linear and row-wise for the second:

```
First linear:  column-wise split (d_model, 4*d_model) -- no all-reduce between partials
Activation:    GeLU applied element-wise on each GPU independently
Second linear: row-wise split (4*d_model, d_model)     -- one all-reduce to sum partials
```

The key insight: the first linear's column-wise split produces sharded outputs (each GPU has a different slice). The GeLU acts on each slice independently -- no cross-GPU dependency. The second linear's row-wise split takes those same sharded inputs and produces partial sums that must be combined. The single all-reduce at the end is the only cross-GPU communication in the entire MLP block.

During backward, the pattern reverses. The gradient of the contraction flows backward through the row-wise split (which becomes a column-wise gather during backprop), and the gradient of the expansion flows backward through the column-wise split (which becomes a row-wise reduce during backprop). The same single all-reduce appears again.

### Attention head splitting

Multi-head attention is naturally parallelizable. With H heads, TP degree N gives each GPU H / N heads. Each GPU computes its own Q, K, V projections (column-wise split on the projection weights), computes the scaled dot-product attention on its head subset, then the output projection (row-wise split) collects all head outputs.

The communication pattern is identical to MLP: column-wise QKV projections, independent attention computation, row-wise output projection with one all-reduce.

### Communication overhead

The all-reduce at the end of each transformer sublayer communicates a tensor of size (batch, d_model). The communication volume is 2 x d_model x batch x TP_degree_bytes per all-reduce (using ring all-reduce: 2x the data size in total bytes sent per GPU).

For d_model = 8192, batch = 1 (token level), TP_degree = 8, FP16:
- All-reduce volume per GPU: 2 x 8192 x 1 x 2 bytes = 32,768 bytes = 32KB
- With NVLink at 900 GB/s: 32KB / 900 GB/s = 36 nanoseconds
- With PCIe Gen4 at 32 GB/s: 32KB / 32 GB/s = 1 microsecond

At 80 layers, 2 all-reduces per layer (attention output, MLP output): 160 all-reduces per forward pass, about 5.8 microseconds total on NVLink, negligible.

The compute-to-communication ratio is favorable only at high bandwidth. Across nodes on InfiniBand (50 GB/s), the same 32KB all-reduce takes 640 nanoseconds per layer -- still fast, but small messages on InfiniBand suffer from message-startup overhead. For 400 Gb/s InfiniBand (50 GB/s), the startup latency per message is 1-2 microseconds, which dominates. This is why tensor parallelism is almost always confined to a single NVLink-connected node (typically 8 GPUs).

### TP degree scaling

Higher TP degree means smaller weight shards per GPU but more all-reduce participants. The all-reduce time scales as O(log N) for tree-based collectives and O(N) for ring collectives at small message sizes, while the compute per GPU scales as O(1/N). The crossover point where communication dominates depends on d_model and interconnect bandwidth.

Empirical guidance from Megatron-LM: TP degree 8 on d_model >= 4096 hits the sweet spot. TP degree > 8 within a node gives diminishing returns because the NVLink ring latency for small messages starts to dominate. TP across nodes is almost never worth it -- the message startup overhead on InfiniBand adds more latency than the compute saved.

## Build It

```python
import numpy as np

def simulate_tensor_parallelism_mlp(X, W1, W2, num_gpus):
    d_model = X.shape[-1]
    d_ff = W1.shape[-1]
    shard_size_col = d_ff // num_gpus
    shard_size_row = d_model // num_gpus

    w1_shards = [W1[:, i*shard_size_col:(i+1)*shard_size_col] for i in range(num_gpus)]
    x_shards  = [X[:, i*shard_size_row:(i+1)*shard_size_row] for i in range(num_gpus)]
    w2_shards = [W2[i*shard_size_row:(i+1)*shard_size_row, :] for i in range(num_gpus)]

    for i in range(num_gpus):
        hidden_shard = X @ w1_shards[i]
        activated = np.maximum(0, hidden_shard)
        residual = x_shards[i] @ w2_shards[i]
        if i == 0:
            full_output = activated @ w2_shards[i] + residual
        else:
            full_output = full_output + activated @ w2_shards[i] + residual

    direct_hidden = X @ W1
    direct_act = np.maximum(0, direct_hidden)
    direct_out = direct_act @ W2
    error = np.abs(full_output - direct_out).max()
    return full_output, error

X = np.random.randn(2, 4096)
W1 = np.random.randn(4096, 16384)
W2 = np.random.randn(16384, 4096)

for ng in [1, 2, 4, 8]:
    out, err = simulate_tensor_parallelism_mlp(X, W1, W2, ng)
    print(f"TP degree {ng}: max error = {err:.2e}")
```

Run `code/main.py`. Each TP degree produces the same output up to machine epsilon. The demonstration proves tensor parallelism is mathematically exact: sharding a linear layer across GPUs produces the same result as computing it on one GPU.

## Use It

| TP degree | d_model | d_ff | BF16 weight memory per GPU | All-reduces per forward | Ideal speedup | Realistic speedup (NVLink) |
|-----------|---------|------|---------------------------|------------------------|---------------|---------------------------|
| 1 | 4096 | 16384 | 256 MB | 0 | 1.0x | 1.0x |
| 2 | 4096 | 16384 | 128 MB | 2 per layer | 2.0x | 1.85x |
| 4 | 4096 | 16384 | 64 MB | 2 per layer | 4.0x | 3.4x |
| 8 | 4096 | 16384 | 32 MB | 2 per layer | 8.0x | 5.8x |

## Ship It

Save as `outputs/prompt-tp-strategy.md`. The prompt takes a model config (d_model, num_layers, num_heads), GPU count, and interconnect type (NVLink / PCIe / InfiniBand), then outputs the optimal TP degree, the all-reduce overhead per layer, and the peak memory per GPU with TP.

## Exercises

1. Implement attention splitting: partition num_attention_heads across N GPUs, compute scaled dot-product attention on each GPU independently, then row-wise gather the output projection. Verify correctness against single-GPU attention.

2. Calculate the all-reduce communication volume for a single transformer layer in bytes as a function of batch_size, seq_len, d_model, and TP_degree. Assume FP16. Compare against the FLOPs saved by TP.

3. Simulate the effect of NVLink bandwidth (900 GB/s) vs PCIe Gen4 x16 (32 GB/s) on all-reduce latency for d_model=8192, batch=1, seq_len=4096, TP=8. At what message size does PCIe latency exceed NVLink by 10x?

4. Implement a fused column-row split that skips the intermediate all-reduce between MLP layers, matching Megatron-LM's actual implementation. Measure the saved communication against a naive two-layer column-only split.

5. Compare TP with FSDP: for a given model and GPU count, which strategy uses less communication? Plot the crossover point where FSDP's per-layer all-gather becomes cheaper than TP's per-sublayer all-reduce.

## Key Terms

| Term | What people say | What it actually means |
|------|----------------|----------------------|
| Tensor parallelism | "Split a matmul across GPUs" | Partition a weight matrix along input or output dimension so each GPU owns a shard and computes a partial result |
| Column-wise split | "Split the output dimension" | Each GPU computes on the full input but produces a different column slice; results are concatenated |
| Row-wise split | "Split the input dimension" | Each GPU gets a different input slice and computes a partial sum; results are summed via all-reduce |
| All-reduce | "Average across GPUs" | Every GPU ends with the sum of all GPUs' values; implemented as ring or tree collective |
| Reduce-scatter | "Sum and distribute" | Reduce across all GPUs and scatter disjoint chunks; used when each GPU needs a different part of the result |
| All-gather | "Collect from all GPUs" | Every GPU ends with the concatenation of all GPUs' data |
| Megatron-LM | "NVIDIA's tensor-parallel framework" | Column-wise first linear + row-wise second linear to eliminate one of two all-reduces in MLP |
| TP degree | "How many GPUs share a layer" | Number of GPUs that collectively hold one layer's weights; typically 2-8, rarely more |

## Further Reading

- [Shoeybi et al., 2020. "Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism"](https://arxiv.org/abs/1909.08053) -- original Megatron-LM paper with column-row split details
- [Narayanan et al., 2021. "Efficient Large-Scale Language Model Training on GPU Clusters Using Megatron-LM"](https://arxiv.org/abs/2104.04473) -- 3D parallelism with TP, PP, DP and communication analysis
- [Korthikanti et al., 2023. "Reducing Activation Recomputation in Large Transformer Models"](https://arxiv.org/abs/2205.05198) -- activation memory analysis with selective recomputation for TP
- [Llama 3 Technical Report](https://arxiv.org/abs/2407.21783) -- 8-way tensor parallelism in production at 405B scale
- [NVIDIA NCCL Documentation](https://docs.nvidia.com/deeplearning/nccl/user-guide/docs/usage/collectives.html) -- all-reduce, all-gather, reduce-scatter collective operation details
