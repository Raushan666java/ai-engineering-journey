# FlashAttention Deep Dive -- FA1, FA2, FA3, Memory & Speed

> Standard attention materializes an NxN matrix in HBM before it computes a single softmax. At 128k tokens that matrix alone is 32 GiB per head. FlashAttention (Dao et al., NeurIPS 2022) rearranged the computation so the NxN matrix never leaves the chip. FA2 cut non-matmul overhead by 2x. FA3 uses H100 warp specialization to overlap IO and compute. The three papers together are the single most impactful memory-system optimization in the Transformer toolkit.

**Type:** Build
**Languages:** Python (stdlib)
**Prerequisites:** Phase 7 . 02 (self-attention equations), Phase 7 . 12 (GPU memory hierarchy, KV cache)
**Time:** ~75 minutes

## Learning Objectives

- Compute the HBM traffic of standard attention and explain why it is quadratic in sequence length.
- Derive the tiled forward pass with online-softmax rescaling and prove correctness.
- Contrast FA2's warp-level softmax with FA1's shared-memory softmax.
- Explain FA3's Hopper-specific innovations: TMA units, warp specialization, FP8 tiles.
- Given an SRAM budget and block size, compute peak HBM savings relative to standard attention.

## The Problem

Standard self-attention for one head:

```
S = Q * K^T                  # shape (N, N) -- written to HBM
P = softmax(S / sqrt(d))      # shape (N, N) -- read S, write P to HBM
O = P * V                     # shape (N, d) -- read P, V, write O to HBM
```

Step 1 materializes an NxN matrix in HBM. At N = 128k, d=128, fp16: `S` alone is `128k * 128k * 2 bytes = 32 GiB`, plus another 32 GiB for `P`. Multiply by 32 heads and 80 layers and the bandwidth budget collapses.

The root cause is I/O boundedness: attention at large N spends almost no time computing (matmul is compute-bound) and almost all time waiting for HBM traffic. The problem is the `softmax` denominator needs all N scores, so standard implementation forced writing the full `S` to HBM as intermediate storage. FlashAttention's insight: softmax can be recomputed in blocks if you batch normalization with the following matmul -- the algorithmic trick that makes tiling possible.

## The Concept

### Tiling: never materialize the full NxN matrix

Split Q into row tiles of size B_r and K, V into column tiles of size B_c. For each pair:

1. Load Qi, Kj from HBM to SRAM.
2. Compute `S_ij = Qi * Kj^T` in SRAM.
3. Compute local softmax of S_ij, keep in SRAM.
4. Accumulate `O_i += softmax_local(S_ij) * Vj` in SRAM.

At the end, `O_i` is wrong because each block's softmax was computed over only B_c keys. The correction is the online-softmax rescaling formula.

### Online softmax rescaling (the key insight)

Standard softmax over a row `s` of length N:

```
m = max(s); p_i = exp(s_i - m); sum_p = sum(p_i); o_i = (1/sum_p) * p_i
```

Process in two blocks. Block 1 (first 2 elements):

```
m1 = max(s1, s2);  p1 = [exp(s1-m1), exp(s2-m1)];  sum1 = sum(p1)
```

Block 2 (next 2 elements):

```
m2 = max(s3, s4);  p2 = [exp(s3-m2), exp(s4-m2)];  sum2 = sum(p2)
```

The true max over all 4 is `m = max(m1, m2)`. Each exponential from Block 1 was `exp(s_i - m1)` but should be `exp(s_i - m) = exp(s_i - m1) * exp(m1 - m)`. The rescaling factor for Block 1 is `exp(m1 - m)`. For Block 2 it is `exp(m2 - m)`. True denominator: `sum_all = sum1 * exp(m1 - m) + sum2 * exp(m2 - m)`.

Incrementally for each block j:

```
m_new = max(m_old, m_local)
local_rescale = exp(m_old - m_new)
new_rescale = exp(m_local - m_new)
O_i = O_i * local_rescale + (softmax_local(S_ij) / new_rescale) * Vj
```

Each block corrects the running output using only the new block's statistics. No full NxN matrix is ever written.

### FA1: the original (NeurIPS 2022)

FlashAttention-1 (Dao et al., arXiv:2205.14135) introduced tiled attention with online softmax. Key design:

- **Block sizes** B_r, B_c chosen to fit Q-block + K-block + V-block + O-block in SRAM (typically ~32-64 for d=128 on A100's 192 KiB shared memory).
- **SRAM occupancy**: d=128, a tile of 32 tokens uses 32 * 128 * 2 bytes = 8 KiB per matrix. Q + K + V + O + scratch totals ~50-60 KiB, fitting A100's 192 KiB.
- **Backward pass**: recomputes local attention weights during backprop from Q, K, V blocks in SRAM rather than reading full P from HBM. Doubles backprop compute but cuts HBM traffic 10-20x.
- **Measured speedup**: 2-4x forward, 3-5x backward over standard PyTorch attention at sequences above 2k. At 64k, FA1 is 7x faster on A100.

The weakness: many non-matmul operations (softmax rescaling, row statistics) run on the same CUDA cores as matmuls, causing a pipeline bubble between matmul and softmax.

### FA2: warp-level parallelism (2023)

FlashAttention-2 (Dao et al., arXiv:2307.08691) replaced FA1's inner-loop structure:

| Aspect | FA1 | FA2 |
|--------|-----|-----|
| Outer loop | Q tiles (rows) | Q tiles (rows) |
| Inner loop | K, V tiles | K, V tiles |
| Softmax | per-warp on copied data in SRAM | per-warp directly on matmul output |
| Non-matmul ops | separate kernel launches | fused into matmul kernel |
| Warp org | one Q tile per threadblock | one Q row per warp |

FA2 assigns one row of Q to each warp. Warps load their own Q row into registers, iterate over K, V tiles, compute matmul, run row-level softmax, and accumulate. No shared-memory copy of Q between warps. Non-matmul ops drop from ~40% of total time to ~15%. Overall speedup over FA1 is 1.7-2x on A100.

### FA3: H100 Hopper, warp specialization (2024)

FlashAttention-3 (Shah et al., arXiv:2407.08608) targets H100 hardware innovations:

1. **TMA units**. H100's Tensor Memory Accelerator copies data from HBM to shared memory asynchronously without using a warp. FA3 issues TMA copies for the next K, V tile while computing the current tile. Copy overhead becomes free (overlapped with compute).

2. **Warp specialization**. Each threadblock splits into two warp groups: producers load K, V tiles via TMA into a ping-pong buffer; consumers run matmul and softmax. Matmul warps never stall on memory.

3. **FP8 tiles**. Hopper matmul supports FP8 natively. FA3 uses FP8 for K, V tiles and BF16 for Q, O accumulators, halving tile memory. With FP8, blocks can be 2x larger, halving outer iterations.

4. **WGMMA**. The Warp Group Matrix Multiply-Accumulate instruction lets one warp group issue an async matmul while doing address calculation for the next -- overlapping softmax rescaling with the concurrent matmul.

Speedup: FA3 on H100 is 1.5-2x faster than FA2 on H100. Versus standard attention on H100, the gap is 15-20x at 64k.

### Memory savings

Standard attention HBM traffic per layer (one head, fp16):

```
S: N * N * 2 bytes     ~ 2 * N^2
P: N * N * 2 bytes     ~ 2 * N^2
O: N * d * 2 bytes     ~ 2 * N * d
Total: O(N^2)
```

FlashAttention traffic per layer:

```
Q: N * d * 2 bytes     (loaded once)
K: N * d * 2 bytes     (loaded once, iterated)
V: N * d * 2 bytes     (loaded once, iterated)
O: N * d * 2 bytes     (written once)
Total: O(N * d)
```

The N^2 term vanishes. For N=128k, d=128, fp16: standard attention moves ~32 GiB per head. FlashAttention moves ~128 MiB. A ~250x reduction.

### Block sizes and SRAM

Let M be per-SM shared memory (A100: 192 KiB, H100: 228 KiB). For head dim d and precision p:

```
B_r * d * p + 2 * B_c * d * p + B_r * d * p + scratch <= M
```

A100 d=128 fp16: B_r=64 (~32 KiB Q, ~32 KiB O), B_c=64 (~32 KiB K, ~32 KiB V), total ~128 KiB, leaving ~64 KiB for scratch. H100 FP8: each tile is 2x smaller for same tokens, so blocks can be 2x larger (B_r = B_c = 128), halving outer iterations.

## Build It

`code/main.py` implements tiled attention with online-softmax rescaling in pure Python on a single head (N=1024, d=64) and compares against standard full attention.

```python
import math, random

def standard_attention(Q, K, V):
    N, d = len(Q), len(Q[0])
    scale = math.sqrt(d)
    O = [[0.0] * d for _ in range(N)]
    for i in range(N):
        scores = [sum(Q[i][k] * K[j][k] for k in range(d)) / scale for j in range(N)]
        m = max(scores)
        exps = [math.exp(s - m) for s in scores]
        sum_exps = sum(exps)
        for j in range(N):
            w = exps[j] / sum_exps
            for k in range(d):
                O[i][k] += w * V[j][k]
    return O

def tiled_attention(Q, K, V, Br=32, Bc=32):
    N, d = len(Q), len(Q[0])
    scale = math.sqrt(d)
    O = [[0.0] * d for _ in range(N)]

    for i_start in range(0, N, Br):
        i_end = min(i_start + Br, N)
        Qi = Q[i_start:i_end]
        Nr = i_end - i_start
        m = [-float("inf")] * Nr
        s = [0.0] * Nr

        for j_start in range(0, N, Bc):
            j_end = min(j_start + Bc, N)
            Kj = K[j_start:j_end]
            Vj = V[j_start:j_end]
            Nc = j_end - j_start

            Sij = [[0.0] * Nc for _ in range(Nr)]
            for r in range(Nr):
                for c in range(Nc):
                    Sij[r][c] = sum(Qi[r][k] * Kj[c][k] for k in range(d)) / scale

            for r in range(Nr):
                m_local = max(Sij[r])
                exps = [math.exp(Sij[r][c] - m_local) for c in range(Nc)]
                s_local = sum(exps)
                m_new = max(m[r], m_local)
                local_rescale = math.exp(m[r] - m_new)
                new_rescale = math.exp(m_local - m_new)

                for k in range(d):
                    O[i_start + r][k] *= local_rescale

                for c in range(Nc):
                    w = (exps[c] / s_local) / new_rescale
                    for k in range(d):
                        O[i_start + r][k] += w * Vj[c][k]

                m[r] = m_new
                s[r] = s[r] * local_rescale + s_local * new_rescale

    return O

def verify(N=128, d=32):
    Q = [[random.gauss(0, 1) for _ in range(d)] for _ in range(N)]
    K = [[random.gauss(0, 1) for _ in range(d)] for _ in range(N)]
    V = [[random.gauss(0, 1) for _ in range(d)] for _ in range(N)]
    O_ref = standard_attention(Q, K, V)
    O_tiled = tiled_attention(Q, K, V, Br=32, Bc=32)
    max_diff = max(abs(O_tiled[i][k] - O_ref[i][k])
                   for i in range(N) for k in range(d))
    return max_diff

if __name__ == "__main__":
    diff = verify(128, 32)
    print(f"Max difference: {diff:.2e}")
    assert diff < 1e-12, "Tiled attention does not match standard attention"
    print("PASSED")
```

The critical inner loop:

```
m_new = max(m[r], m_local)
local_rescale = exp(m[r] - m_new)
new_rescale = exp(m_local - m_new)
O[r] *= local_rescale
O[r] += (exps[c] / s_local) / new_rescale * Vj[c]
m[r] = m_new
s[r] = s[r] * local_rescale + s_local * new_rescale
```

Run the script. The max difference between tiled and standard output should be below ~1e-12 (double-precision Python float). Rescale to N=4096, d=128: standard attention computes a 4096x4096 matrix (67M elements, ~536 MiB in fp64) while tiled never exceeds 32x32 tiles (~8 KiB).

## Use It

FlashAttention is the default attention backend in every major framework as of 2026:

| Framework | Backend |
|-----------|---------|
| PyTorch (torch.nn.functional.scaled_dot_product_attention) | FA2 (A100), FA3 (H100) |
| vLLM | FA2/FA3 (PagedAttention extends FA tiling for KV cache) |
| TensorRT-LLM | FA2/FA3 (Hopper code paths) |
| SGLang | FA2/FA3 (default kernel) |
| Hugging Face Transformers | FA2 via xformers (`--attn flash_attention_2`) |
| Apple MLX | Tiled attention on Metal (same algorithm) |

Use it for every Transformer forward or backward pass. FlashAttention is a strict improvement -- there is no tradeoff. The only exception is CPU-only inference without shared memory, where standard fused kernels (MKL) can beat a naive tiled implementation.

## Ship It

This lesson produces `outputs/skill-flash-attention-advisor.md`. Given a model architecture, target sequence length, GPU type (A100, H100, H200), and batch size, it outputs the recommended FlashAttention version, block size configuration, expected HBM traffic ratio versus standard attention, expected speedup, and KV cache tiling layout.

## Exercises

1. Run `code/main.py` with N=1024, d=64, Br=16, Bc=16. Artificially remove the online-softmax correction (skip `local_rescale` and `new_rescale`) and measure the error between the uncorrected tiled output and standard attention.

2. Extend the tiled implementation to multi-head attention (H=8, d=64). Measure runtime for N=2048 with head-level tiling versus per-head full-attention. Compute the runtime ratio.

3. Compute the minimum HBM traffic for a single head at N=65536, d=128, fp16 using FA2. Then compute traffic using FA3 with FP8 K, V (fp16 Q, O). Report both in MiB and the reduction factor.

4. Derive SRAM occupancy for B_r=128, B_c=128, d=128, fp16. Verify it fits A100's 192 KiB. Then compute the max B_r for H100's 228 KiB at B_c=128, d=128, fp16. Report the larger H100 block size.

5. Read Section 3 of the FA2 paper (arXiv:2307.08691). Explain in 2-3 sentences why FA2 assigns one Q row per warp rather than sharing a Q tile. Tie to shared-memory bank conflicts.

## Key Terms

| Term | What people say | What it actually means |
|------|----------------|------------------------|
| HBM | "GPU main memory" | High-Bandwidth Memory, ~1.5-3.35 TB/s, ~100x slower per byte than SRAM |
| SRAM | "GPU on-chip cache" | Shared memory per SM, 128-228 KiB, ~40 TB/s aggregate across SMs |
| Tiling | "Break matrix into blocks" | Process Q, K, V in tiles that fit SRAM so NxN matrix is never materialized in HBM |
| Online softmax | "Block-by-block normalization" | Incremental softmax tracking running max and sum; rescale previous blocks when new max appears |
| Rescaling factor | "Old max to new max correction" | `exp(m_old - m_new)` adjusts previous accumulator for a larger global max |
| Arithmetic intensity | "FLOPS per byte moved" | Ratio of compute to memory traffic; FlashAttention raises this above the roofline ridge point |
| Warp specialization | "Producers vs consumers" | Some warps handle async TMA loads while others run matmul |
| TMA | "Hopper's async copy engine" | H100 hardware unit for HBM-to-SRAM copy without warp involvement |
| WGMMA | "Warp-group matmul accumulate" | Hopper instruction issuing async matmul while same warp group does other work |
| Ping-pong buffer | "Double-buffer streaming" | Two SRAM buffers: one fills from HBM while the other is consumed by matmul |

## Further Reading

- [Dao et al. -- FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness (NeurIPS 2022, arXiv:2205.14135)](https://arxiv.org/abs/2205.14135) -- original paper, tiling and online softmax
- [Dao et al. -- FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning (arXiv:2307.08691)](https://arxiv.org/abs/2307.08691) -- warp-level Q rows, non-matmul fusion
- [Shah et al. -- FlashAttention-3: Fast and Accurate Attention with Asynchronous Computation (arXiv:2407.08608)](https://arxiv.org/abs/2407.08608) -- Hopper warp specialization, TMA, FP8
- [Milakov et al. -- Online Normalizer Calculation for Softmax (arXiv:1805.02867)](https://arxiv.org/abs/1805.02867) -- precursor idea FlashAttention builds on
- [Rabe et al. -- Self-Attention Does Not Need O(n^2) Memory (arXiv:2112.05682)](https://arxiv.org/abs/2112.05682) -- concurrent work showing same tiling idea
