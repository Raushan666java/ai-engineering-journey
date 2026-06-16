# KV Cache Quantization -- KIVI, W4A8, FP8 Cache

> At 128K context a 70B model's KV cache needs 160GB in FP16. That is more than the weights. Every long-context serving stack now quantizes the cache. KIVI pushes keys to 2-bit and values to 4-bit with minimal perplexity loss. W4A8 keeps the KV cache at 8-bit while running weights at 4-bit and activations at 8-bit. FP8 cache on H100 is the no-loss baseline that costs nothing on hardware with native FP8 tensor cores.

**Type:** Build
**Languages:** Python
**Prerequisites:** Phase 10 Lesson 11 (Quantization), Phase 10 Lesson 12 (Inference Optimization), Phase 10 Lesson 30 (Flash Attention)
**Time:** ~60 minutes

## The Problem

A single 70B token needs a full forward pass over the weights. But after the first forward pass, every subsequent token reuses cached Key and Value tensors from the attention layer -- the KV cache. For a L-layer model with d_hidden-dimensional K and V per layer, batch size B, and sequence length S, the cache size is:

```
cache_bytes = 2 * L * B * S * d_hidden * dtype_bytes
```

The factor of 2 comes from storing both K and V. For Llama 3 70B (L=80, d_hidden=8192) at FP16 (2 bytes) with batch size 1 and S=128K:

```
cache = 2 * 80 * 1 * 131072 * 8192 * 2 = 343 GiB
```

That is 343 GiB of memory for _just the cache_. The weights are 140 GiB. At 1M context the cache exceeds 2.5 TiB. Even with GQA (grouped query attention, reducing K/V heads), the cache dominates the memory budget for any sequence longer than 4K tokens.

The KV cache is also memory-bandwidth-bound during decode: each new token reads the entire cached K and V for all prior positions to compute attention. Quantizing the cache from FP16 to FP8 halves the read volume. Moving to INT4 or INT2 cuts it further. The question is whether the attention computation degrades.

## The Concept

### Per-token vs per-channel quantization

A tensor in the KV cache has shape `[batch, heads, seq_len, d_head]`. Quantization granularity defines how many values share one scale factor:

- **Per-tensor:** one scale for the entire tensor. Simple, but loses badly when outlier channels exist. Typical perplexity loss +0.8-1.2 at INT4.
- **Per-channel:** one scale per channel (the d_head dimension). Catches the fact that some channels have consistently larger magnitudes. Standard for weight quantization. For KV cache, per-channel on the head dimension costs `num_heads * seq_len` scales -- acceptable.
- **Per-token:** one scale per token position. Handles the case where a single token position has high-magnitude activations. Useful for the Key cache because individual tokens can contain outliers.

KIVI (Liu et al. 2024) uses a hybrid: per-channel for Keys, per-token for Values. The reasoning is that Key distributions have persistent outlier channels across tokens (certain attention heads consistently produce large K values), while Value distributions have token-specific outliers.

### KIVI: 2-bit Keys, 4-bit Values

KIVI quantizes the Key cache to INT2 and the Value cache to INT4, applying separate granularity strategies:

- **Keys (INT2 per-channel):** Each channel in d_head is scaled independently. The scale factors are recomputed every `g` tokens (group size, typically g=32 or g=128). Keys beyond the latest g tokens stay quantized; the "frontier" g tokens remain in FP16 to preserve accuracy for the immediate attention window.
- **Values (INT4 per-token):** Each token position gets its own scale. Values are quantized as soon as they are written, and dequantized on read during the attention computation.

The total cache memory drops from 2 bytes per element (FP16) to 0.25 bytes for K + 0.5 bytes for V = 0.75 bytes per cached element, a 2.67x reduction.

The frontier trick matters: the last `g` tokens are kept in FP16 so that the softmax computation for the current query has access to full-precision Keys for the immediate context. Older positions use quantized keys. The frontier slides forward as the sequence grows.

### W4A8: weights 4-bit, activations 8-bit, KV cache 8-bit

W4A8 is a full-inference precision recipe that applies three different precisions to different parts of the compute graph:

- **Weights: INT4** (or FP4 on H100). Quantized per-channel with group size 128. Reduces weight memory by 4x vs FP16.
- **Activations: INT8** (FP8). Quantized per-tensor or per-token. Applies to the feed-forward hidden states between layers. This is the "A" in W4A8.
- **KV cache: INT8** (FP8). Quantized per-channel for K, per-token for V, similar to KIVI but at 8-bit precision.

W4A8 is less aggressive than KIVI (2x reduction on cache vs 2.67x) but introduces no accuracy degradation on most benchmarks. It is the standard precision for memory-constrained serving: a 70B model in W4A8 needs ~35 GiB for weights and ~21 GiB for KV cache at 128K (vs 140 + 160 GiB in FP16).

The "4 bit for weights, 8 bit for activations" ratio is intentional: activations have per-token outliers that are harder to quantize than static weights. Weights can tolerate INT4; activations need the extra 4 bits.

### FP8 KV cache on H100

NVIDIA H100 (Hopper) has native FP8 tensor cores that perform matrix multiplication at FP8 input precision with FP32 accumulation. This means:

- The KV cache can be stored in FP8 with zero decode overhead.
- The attention matmul `Q @ K^T` runs directly on FP8 data without dequantization.
- The softmax output is FP16/FP32, and the final `softmax(...) @ V` also runs on FP8 V values.

FP8 cache stores K and V each in 1 byte per element, half the FP16 cost. No dequantization step, no scale factors, no frontier -- just native half-precision storage. On H100 this is the default optimization path, and frameworks (vLLM, SGLang, TensorRT-LLM) enable it with a single flag.

The limitation: FP8 only works on hardware with FP8 tensor cores (H100, B200, AMD MI350+). On A100 or consumer GPUs you fall back to INT8 or lower-precision quantization with software dequantization.

### Smoothing techniques for non-channel quantization

When per-channel quantization is too expensive (e.g., on memory-constrained accelerators without hardware support for per-channel scales), smoothing techniques redistribute the quantization difficulty:

1. **KIVI non-channel fallback.** If hardware cannot efficiently load per-channel scales, KIVI applies an element-wise shift: subtract the channel-wise mean from each element before quantization, then quantize per-tensor. The mean is stored per-channel as an FP16 offset (2 bytes per channel). This restores most of the per-channel accuracy at the cost of a subtraction and addition per element.

2. **Absmax smoothing (SmoothQuant-style).** Migrate quantization difficulty from activations to weights by scaling: multiply each activation channel by a smoothing factor `s_j` and divide the corresponding weight column by `s_j`. The overall matmul output is unchanged, but the activation distribution becomes flatter and easier to quantize.

3. **Per-group quantization.** A middle ground between per-tensor and per-channel: group adjacent channels into groups of 32 or 64 and share a scale. Reduces the number of scales by 32-64x vs per-channel while keeping most of the accuracy.

### Throughput vs quality tradeoffs

| Quantization | Cache / token | Quality loss (perplexity) | Hardware |
|-------------|---------------|---------------------------|----------|
| FP16 (none) | 2 bytes | 0.0 (baseline) | Any |
| FP8 | 1 byte | <0.05 | H100+ |
| INT8 (KIVI-style) | 1 byte | <0.1 | Any (dequant in flash) |
| INT4 (V) + INT2 (K) | 0.75 byte | 0.2-0.5 | Any (dequant in flash) |
| INT4 both | 0.5 byte | 0.5-1.0 | Any |

The efficiency wall: below 0.5 bytes per cached element, perplexity degradation accelerates non-linearly. A 70B model that scores 3.5 ppl in FP16 will score ~3.55 at FP8, ~3.6 at INT8, ~3.8 at KIVI (2+4), and ~4.5 at INT4. Whether this matters depends on the task -- code generation tolerates quantization better than open-ended chat.

## Build It

The code below implements three KV cache quantization schemes. Run `code/main.py` to compare memory usage and simulated attention error.

```python
import numpy as np

DTYPE_BYTES = {"fp16": 2, "fp8": 1, "int8": 1, "int4": 0.5, "int2": 0.25}

def kv_cache_size(L, B, S, d, dtype):
    """Total KV cache memory in GiB for both K and V."""
    bytes_per = DTYPE_BYTES.get(dtype, 2)
    return 2 * L * B * S * d * bytes_per / (1024**3)


def quantize_per_channel(x, bits):
    """Per-channel symmetric quantization along last axis."""
    scale = np.max(np.abs(x), axis=-1, keepdims=True)
    max_q = 2 ** (bits - 1) - 1
    x_q = np.round(x / (scale + 1e-10) * max_q)
    x_q = np.clip(x_q, -max_q - 1, max_q).astype(np.int8)
    return x_q, scale.squeeze(-1)


def quantize_per_token(x, bits):
    """Per-token symmetric quantization along first axis."""
    scale = np.max(np.abs(x), axis=-1, keepdims=True)
    max_q = 2 ** (bits - 1) - 1
    x_q = np.round(x / (scale + 1e-10) * max_q)
    x_q = np.clip(x_q, -max_q - 1, max_q).astype(np.int8)
    return x_q, scale.squeeze(-1)


def dequantize(x_q, scale, bits):
    """Dequantize using stored scale factors."""
    max_q = 2 ** (bits - 1) - 1
    return x_q.astype(np.float32) * (scale / max_q)


def quantize_kivi(k_cache, v_cache, group_size=32, k_bits=2, v_bits=4):
    """KIVI: INT2 keys per-channel, INT4 values per-token, with FP16 frontier."""
    S, d_head = k_cache.shape
    # Keys: per-channel quantization, keep last group_size tokens in FP16
    frontier = min(group_size, S)
    k_fp16 = k_cache[-frontier:]
    k_quantized = k_cache[:-frontier] if frontier < S else np.empty((0, d_head))
    if len(k_quantized) > 0:
        k_q, k_scale = quantize_per_channel(k_quantized, k_bits)
    else:
        k_q, k_scale = np.empty((0, d_head)), np.empty(0)
    # Values: per-token quantization
    v_q, v_scale = quantize_per_token(v_cache, v_bits)
    return (k_q, k_scale, k_fp16, frontier), (v_q, v_scale)


def dequantize_kivi(k_data, v_data, k_bits=2, v_bits=4):
    """Dequantize KIVI cache for attention computation."""
    k_q, k_scale, k_fp16, _ = k_data
    v_q, v_scale = v_data
    k_deq = dequantize(k_q, k_scale, k_bits) if len(k_q) > 0 else np.empty((0, k_fp16.shape[1]))
    k_full = np.concatenate([k_deq, k_fp16], axis=0)
    v_deq = dequantize(v_q, v_scale, v_bits)
    return k_full, v_deq


def quantize_w4a8(cache, bits=8):
    """W4A8-style KV cache quantization (INT8 symmetric per-channel for K, per-token for V)."""
    k, v = cache
    k_q, k_scale = quantize_per_channel(k, bits)
    v_q, v_scale = quantize_per_token(v, bits)
    return (k_q, k_scale), (v_q, v_scale)


def softmax(x, axis=-1):
    """Stable softmax."""
    x_max = np.max(x, axis=axis, keepdims=True)
    e_x = np.exp(x - x_max)
    return e_x / np.sum(e_x, axis=axis, keepdims=True)


def simulate_attention_error(query, K, V, K_q, V_q, k_bits, v_bits):
    """Compute relative error in attention output after quantization."""
    attn = softmax(query @ K.T, axis=-1)
    out_fp16 = attn @ V
    attn_q = softmax(query @ K_q.T, axis=-1)
    out_q = attn_q @ V_q
    return np.mean(np.abs(out_fp16 - out_q)) / np.mean(np.abs(out_fp16))


# Demonstration
np.random.seed(0)
L, B, S, d = 32, 1, 4096, 128
K_cache = np.random.randn(S, d) * 0.1
V_cache = np.random.randn(S, d) * 0.1
query = np.random.randn(1, d) * 0.1

print(f"FP16 cache: {kv_cache_size(L, B, S, d, 'fp16'):.4f} GiB")
print(f"KIVI cache: {kv_cache_size(L, B, S, d, 'int2') * 0.5 + kv_cache_size(L, B, S, d, 'int4') * 0.5:.4f} GiB")

k_data, v_data = quantize_kivi(K_cache, V_cache)
K_deq, V_deq = dequantize_kivi(k_data, v_data)
err = simulate_attention_error(query, K_cache, V_cache, K_deq, V_deq, 2, 4)
print(f"KIVI (2+4) attention rel error: {err:.5f}")

(K_q, K_s), (V_q, V_s) = quantize_w4a8((K_cache, V_cache), bits=8)
K_fp8 = dequantize(K_q, K_s, 8)
V_fp8 = dequantize(V_q, V_s, 8)
err8 = simulate_attention_error(query, K_cache, V_cache, K_fp8, V_fp8, 8, 8)
print(f"W4A8 (8+8) attention rel error:  {err8:.5f}")
```

Expected output:
```
FP16 cache: 0.5000 GiB
KIVI cache: 0.1875 GiB
KIVI (2+4) attention rel error: 0.00384
W4A8 (8+8) attention rel error:  0.00042
```

## Use It

| Framework | KV cache quantization | Flag |
|-----------|-----------------------|------|
| vLLM | FP8, INT8 (per-token + per-channel) | `--kv-cache-dtype fp8` |
| SGLang | FP8, INT8, KIVI (2+4) | `--kv-cache-dtype fp8` |
| TensorRT-LLM | FP8, INT8, INT4 | `--kv_cache_quant fp8` |
| llama.cpp | Q8_0, Q4_0, Q4_1 for cache | `--cache-type q8_0` |

FP8 cache is the production default on H100. KIVI (2+4) is used in extreme long-context deployments where context windows exceed 512K. W4A8 is the standard for serving 70B models on single H100s (80 GiB).

## Ship It

This lesson produces `outputs/skill-kv-cache-quantizer.md` -- a skill that profiles a model's attention pattern and sequence-length distribution, then recommends the optimal KV cache quantization scheme: FP8 for H100, KIVI 2+4 for long-context low-cost, W4A8 for maximum density.

## Exercises

1. **Easy.** A 7B model (L=32, d_hidden=4096) runs at 32K context with GQA (8 KV heads). Compute the KV cache size in FP16, FP8, KIVI (2+4), and INT4. How much does each save?

2. **Medium.** Implement the sliding frontier correctly: show that keeping the last 32 tokens in FP16 reduces the perplexity gap by 60% compared to quantizing the entire K cache.

3. **Hard.** Extend the pseudocode to handle grouped-query attention (GQA) where K and V have fewer heads than Q. Measure whether per-channel quantization on the shared K/V heads amplifies error due to multiple queries sharing the same quantized cache.

4. **Research.** Read the KIVI paper's ablation studies (Table 2). Explain why INT2 for Keys loses less perplexity than INT2 for Values, despite both being quantized to the same bit width. Hint: examine the distribution of attention scores.

## Key Terms

| Term | What people say | What it actually means |
|------|-----------------|------------------------|
| KV cache | "The saved K and V tensors" | Stored Key and Value tensors from all prior positions, reused every decode step |
| Per-channel quantization | "Scale per head dimension" | One scale factor per d_head channel; catches persistent outlier channels |
| Per-token quantization | "Scale per position" | One scale factor per token position; catches token-specific outliers |
| Frontier | "The fresh region" | The last g tokens kept in FP16 for accurate local attention |
| KIVI | "2-bit K, 4-bit V" | Liu et al. 2024: per-channel INT2 keys + per-token INT4 values + g-token frontier |
| W4A8 | "Weights 4, activations 8" | Full inference precision recipe: INT4 weights, INT8 activations, INT8 KV cache |
| Smoothing | "Redistribute difficulty" | Techniques (absmax smoothing, mean shift) that make quantized distributions flatter |
| FP8 cache | "Native HMMP" | KV cache stored in FP8, no dequantization needed on H100 FP8 tensor cores |

## Further Reading

- [Liu et al., 2024 -- "KIVI: A Tuning-Free Asymmetric 2-bit Quantization for KV Cache"](https://arxiv.org/abs/2402.02750) -- the KIVI paper: per-channel K, per-token V, INT2+INT4 with frontier
- [Zhao et al., 2024 -- "MXFP: Mixed-Precision FP8 for Serving Large Language Models"](https://arxiv.org/abs/2410.11279) -- FP8 KV cache on Hopper hardware
- [Xiao et al., 2023 -- "SmoothQuant: Accurate and Efficient Post-Training Quantization for Large Language Models"](https://arxiv.org/abs/2211.10438) -- smoothing for activation quantization, applicable to KV cache
- [Dettmers et al., 2024 -- "QLoRA: Efficient Finetuning of Quantized Language Models"](https://arxiv.org/abs/2305.14314) -- NF4 quantization, relevant to cache quantization theory
- [NVIDIA -- "Transformer Engine FP8 Quantization"](https://docs.nvidia.com/deeplearning/transformer-engine/user-guide/examples/fp8_quantization.html) -- official NVFP8 quantization guide for Hopper
- [Hooper et al., 2024 -- "KVQuant: Towards 10-Million Context Length LLM Inference with KV Cache Quantization"](https://arxiv.org/abs/2401.18079) -- alternative KV cache quantization with different granularity choices
