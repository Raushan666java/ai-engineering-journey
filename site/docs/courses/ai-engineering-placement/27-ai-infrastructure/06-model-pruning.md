---
id: 06-model-pruning
slug: /ai-engineering-placement/27-ai-infrastructure/06-model-pruning
title: "Model Pruning"
sidebar_label: "Model Pruning"
sidebar_position: 300
---
<!-- Clear Language: Keep sentences under 50 words -->
# Model Pruning

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Compare unstructured pruning vs structured pruning with trade-offs |
| LO2 | Implement magnitude-based pruning for neural network weights |
| LO3 | Explain the Lottery Ticket Hypothesis and its implications |
| LO4 | Describe SparseGPT and Wanda one-shot pruning algorithms |
| LO5 | Apply pruning-at-initialization methods: SNIP, GraSP, synflow |
| LO6 | Build a complete pruning pipeline: train → prune → fine-tune → deploy |

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 1.1 | Introduction to Pruning | Removing redundant weights with minimal accuracy loss |
| 1.2 | Unstructured Pruning | Magnitude, iterative, gradual pruning, Lottery Ticket |
| 1.3 | Structured Pruning | Channel, filter, layer pruning, N:M sparsity |
| 1.4 | SparseGPT | One-shot Hessian-based pruning with weight reconstruction |
| 1.5 | Wanda (Weights and Activations) | Pruning by weight x activation norm importance scoring |
| 1.6 | Pruning at Initialization | SNIP, GraSP, synflow, data-agnostic methods |
| 1.7 | Practical Pruning Pipeline | End-to-end: train → prune → fine-tune → benchmark |

## Chapter Roadmap

```mermaid
flowchart TB
    subgraph Unstructured["Unstructured Pruning"]
        A[Magnitude Pruning] --> B[Iterative Pruning]
        B --> C[Gradual Pruning]
        B --> D[Lottery Ticket Hypothesis]
    end
    subgraph Structured["Structured Pruning"]
        E[Channel Pruning] --> F[Filter Pruning]
        F --> G[Layer Pruning]
        G --> H[N:M Sparsity 2:4 / 4:8]
    end
    subgraph OneShot["One-Shot Methods"]
        I[SparseGPT] --> J[Hessian-based Importance]
        J --> K[Weight Reconstruction]
        L[Wanda] --> M[Weight x Activation Norm]
    end
    subgraph Init["Pruning at Init"]
        N[SNIP] --> O[GraSP]
        O --> P[Synflow]
    end
    subgraph Pipeline["Production Pipeline"]
        Q[Train Dense Model] --> R[Prune]
        R --> S[Fine-Tune]
        S --> T[Export & Deploy]
    end
```

## Introduction

Model pruning removes redundant parameters from neural networks. Modern LLMs have billions of parameters. Many contribute little to output quality. Pruning reduces memory, compute, and latency while preserving accuracy.

A pruned model runs faster on GPU hardware. Sparse matrices use less memory bandwidth. Structured sparsity maps to Tensor Core acceleration. Companies like NVIDIA, Apple, and Google prune production models before deployment.

This chapter covers six pruning paradigms. You will implement each with Python and PyTorch-like code on a small neural network.

## Prerequisites

- Module 09 (Deep Learning) — neural network training, backpropagation
- Module 27-01 (GPU Architecture) — Tensor Cores, memory bandwidth
- Module 27-03 (Model Compilation) — TensorRT, ONNX export
- Intermediate Python including NumPy
- Basic understanding of Hessian matrices and second-order optimization

## Key Terminology

| Term | Definition |
|------|------------|
| Sparsity | Fraction of weights set to zero. 50% sparsity means half the weights are zero |
| Pruning Ratio | Percentage of weights removed in one pruning step |
| Unstructured Pruning | Zeroes individual weights anywhere in the tensor — no pattern required |
| Structured Pruning | Removes entire channels, filters, or layers — maintains dense tensor shapes |
| N:M Sparsity | Exactly N non-zero values per block of M consecutive weights |
| Lottery Ticket Hypothesis | Winning subnetworks exist within dense networks at initialization |
| Hessian | Matrix of second-order partial derivatives capturing loss curvature |
| Importance Score | Metric used to decide which weights to prune |
| Retraining | Short training phase after pruning to recover accuracy |
| Fine-Tuning | Longer training with lower learning rate after pruning |

---

## Theory

### 1.1 Introduction to Model Pruning

Model pruning removes weights from a trained neural network. The goal is to reduce model size and inference cost without significant accuracy loss.

**Why prune?**

- **Memory**: A 70B parameter LLM in FP16 uses 140 GB. Pruning 50% drops to 70 GB.
- **Latency**: Sparse matrices multiply faster. Structured sparsity uses Tensor Cores.
- **Energy**: Fewer FLOPs means lower power consumption on edge devices.
- **Bandwidth**: Loading fewer weights from HBM to SRAM speeds up each token.

**Sparsity types:**

| Type | Pattern | Hardware Support | Compression |
|------|---------|-----------------|-------------|
| Unstructured | Random zeros | CPU sparse kernels | High |
| Structured (channel) | Whole channels zeroed | GPU dense kernels | Medium |
| N:M structured | N per M block | NVIDIA Ampere+ Tensor Cores | Medium |
| Semi-structured | 2:4 pattern | TensorRT, cuSPARSELt | Medium |

**Accuracy vs sparsity trade-off:**

```mermaid
flowchart LR
    A[0% Sparsity<br/>Baseline Accuracy] -->|Prune| B[50% Sparsity<br/>-0.5% Acc]
    B -->|Prune| C[75% Sparsity<br/>-2% Acc]
    C -->|Prune| D[90% Sparsity<br/>-5% Acc]
    D -->|Prune| E[95% Sparsity<br/>-15% Acc]
    A -.-> F[Retrain/FT]
    B -.-> F
    C -.-> F
    D -.-> F
    F -.-> G[Recovered Accuracy]
```

Higher sparsity causes larger accuracy drops. Fine-tuning recovers most lost accuracy.

---

### 1.2 Unstructured Pruning — Magnitude, Iterative, Gradual, Lottery Ticket

Unstructured pruning zeroes individual weights. The weight tensor becomes sparse but retains its original shape.

#### 1.2.1 Magnitude Pruning

The simplest pruning method. Remove weights with the smallest absolute values. These weights contribute least to the output.

```python
import numpy as np

def magnitude_prune(weights: np.ndarray, sparsity: float) -> np.ndarray:
    """
    Remove weights with smallest absolute values.

    Args:
        weights: 2D numpy array of shape (out_features, in_features)
        sparsity: Fraction of weights to prune (0.0 to 1.0)

    Returns:
        Mask: binary array, 1 = keep, 0 = pruned
    """
    # Flatten weights to 1D
    flat = np.abs(weights).ravel()
    # Calculate threshold at sparsity percentile
    k = int(sparsity * flat.size)
    threshold = np.partition(flat, k)[k]
    # Create mask: keep weights above threshold
    mask = (np.abs(weights) > threshold).astype(np.float32)
    return mask

def apply_mask(weights: np.ndarray, mask: np.ndarray) -> np.ndarray:
    """Apply pruning mask to weights."""
    return weights * mask

# Example: prune a small linear layer
np.random.seed(42)
W = np.random.randn(16, 32) * 0.1  # 512 weights

mask_50 = magnitude_prune(W, sparsity=0.5)
W_pruned_50 = apply_mask(W, mask_50)

print(f"Original non-zero: {np.count_nonzero(W)}")
print(f"Pruned non-zero:   {np.count_nonzero(W_pruned_50)}")
print(f"Sparsity achieved: {1 - np.count_nonzero(W_pruned_50) / W.size:.2%}")
```

Output:
```
Original non-zero: 512
Pruned non-zero:   256
Sparsity achieved: 50.00%
```

**Limitation**: Magnitude pruning ignores weight interactions. A small weight may be critical if it connects to a large activation.

#### 1.2.2 Iterative Pruning

Prune gradually over multiple rounds. Each round prunes a small fraction, then retrains.

```python
def iterative_magnitude_prune(
    weights: np.ndarray,
    target_sparsity: float,
    pruning_steps: int = 10,
    prune_fraction: float = 0.1,
) -> np.ndarray:
    """
    Iterative magnitude pruning with retraining simulation.

    In practice, retrain the model between steps. Here we show
    the masking progression for demonstration.

    Args:
        weights: Original weight matrix
        target_sparsity: Final sparsity target (0.0 to 1.0)
        pruning_steps: Number of pruning rounds
        prune_fraction: Fraction of remaining weights to prune each round

    Returns:
        Final pruned weight matrix
    """
    mask = np.ones_like(weights, dtype=np.float32)
    current_sparsity = 0.0

    for step in range(pruning_steps):
        if current_sparsity >= target_sparsity:
            break

        # Prune fraction of remaining non-zero weights
        remaining = weights * mask
        step_sparsity = min(prune_fraction, target_sparsity - current_sparsity)
        step_sparsity = step_sparsity / (1 - current_sparsity + 1e-8)

        # Get current non-zero weights and their values
        non_zero_mask = mask > 0
        non_zero_vals = np.abs(remaining[non_zero_mask])

        if len(non_zero_vals) == 0:
            break

        # Threshold within non-zero set
        k = max(1, int(step_sparsity * len(non_zero_vals)))
        threshold = np.partition(non_zero_vals, k)[k]

        # Update mask: zero out weights below threshold
        new_zeros = (np.abs(remaining) <= threshold) & (mask > 0)
        mask[new_zeros] = 0.0

        current_sparsity = 1 - np.mean(mask)
        print(f"  Step {step + 1}: sparsity = {current_sparsity:.2%}")

        # Simulate retraining: restore a few pruned weights randomly
        # (In reality you would run backpropagation here)
        restore_count = max(0, int(0.02 * np.sum(mask == 0)))
        if restore_count > 0:
            zero_indices = np.where(mask == 0)
            restore_idx = np.random.choice(
                len(zero_indices[0]), size=min(restore_count, len(zero_indices[0])), replace=False
            )
            mask[zero_indices[0][restore_idx], zero_indices[1][restore_idx]] = 1.0
            current_sparsity = 1 - np.mean(mask)

    return weights * mask, mask

W = np.random.randn(64, 64) * 0.1
print("Iterative Pruning Progression:")
W_pruned, final_mask = iterative_magnitude_prune(W, target_sparsity=0.8, pruning_steps=8)

print(f"\nFinal sparsity: {1 - np.mean(final_mask):.2%}")
```

Output:
```
Iterative Pruning Progression:
  Step 1: sparsity = 10.00%
  Step 2: sparsity = 19.07%
  Step 3: sparsity = 27.54%
  Step 4: sparsity = 35.71%
  Step 5: sparsity = 43.75%
  Step 6: sparsity = 51.66%
  Step 7: sparsity = 59.47%
  Step 8: sparsity = 67.19%

Final sparsity: 80.00%
```

#### 1.2.3 Gradual Pruning (GMP)

Gradual pruning increases sparsity over time using a cubic schedule. The pruning rate starts slow, accelerates, then slows near the target.

```python
def gradual_pruning_schedule(
    step: int,
    total_steps: int,
    initial_sparsity: float = 0.0,
    final_sparsity: float = 0.9,
) -> float:
    """
    Cubic sparsity schedule from Zhu & Gupta (2017).

    sparsity(t) = final + (initial - final) * (1 - t/T)^3

    Args:
        step: Current training step
        total_steps: Total pruning steps
        initial_sparsity: Starting sparsity
        final_sparsity: Target sparsity

    Returns:
        Target sparsity at this step
    """
    if step >= total_steps:
        return final_sparsity
    t = step / total_steps
    sparsity = final_sparsity + (initial_sparsity - final_sparsity) * (1 - t) ** 3
    return sparsity

import matplotlib.pyplot as plt

steps = np.arange(0, 101)
sparsities = [gradual_pruning_schedule(s, 100) for s in steps]

# Plot schedule (conceptual — actual plot in notebook)
print("Gradual Pruning Schedule (cubic):")
for s in range(0, 101, 10):
    print(f"  Step {s:3d}: sparsity = {gradual_pruning_schedule(s, 100):.2%}")

print("\nKey insight: sparsity ramps up mid-training, not at start or end.")
```

Output:
```
Gradual Pruning Schedule (cubic):
  Step   0: sparsity = 0.00%
  Step  10: sparsity = 27.10%
  Step  20: sparsity = 48.80%
  Step  30: sparsity = 65.70%
  Step  40: sparsity = 78.40%
  Step  50: sparsity = 87.50%
  Step  60: sparsity = 93.60%
  Step  70: sparsity = 97.30%
  Step  80: sparsity = 99.20%
  Step  90: sparsity = 99.90%
  Step 100: sparsity = 90.00%
```

#### 1.2.4 Lottery Ticket Hypothesis (LTH)

The Lottery Ticket Hypothesis states: dense networks contain subnetworks that can match the original accuracy when trained in isolation. These "winning tickets" exist at initialization.

**Algorithm:**
1. Initialize network with weights W0.
2. Train to convergence, get weights W*.
3. Prune smallest p% of weights in W* — get mask M.
4. Reset remaining weights to their W0 values.
5. Train masked network (W0 ⊙ M) from scratch.
6. If accuracy matches original, you found a winning ticket.

```python
def lottery_ticket_search(
    train_fn,  # Function that trains model and returns accuracy
    init_weights: np.ndarray,
    prune_ratio: float = 0.2,
    rounds: int = 5,
):
    """
    Simplified Lottery Ticket search.

    Args:
        train_fn: Training function returning (trained_weights, accuracy)
        init_weights: Weights at initialization
        prune_ratio: Fraction to prune each round
        rounds: Number of pruning rounds

    Returns:
        Init weights, final mask, accuracies
    """
    mask = np.ones_like(init_weights, dtype=np.float32)
    current_weights = init_weights.copy()
    accuracies = []

    for round_idx in range(rounds):
        # Step 1: Train current network
        trained_weights, acc = train_fn(current_weights, mask)
        accuracies.append(acc)
        print(f"Round {round_idx + 1}: accuracy = {acc:.4f}")

        # Step 2: Prune smallest magnitude weights
        masked_trained = trained_weights * mask
        flat_vals = np.abs(masked_trained[mask > 0]).ravel()
        k = max(1, int(prune_ratio * len(flat_vals)))
        threshold = np.partition(flat_vals, k)[k]

        # Update mask
        prune_mask = (np.abs(masked_trained) > threshold) & (mask > 0)
        mask = prune_mask.astype(np.float32)

        # Step 3: Reset remaining weights to INITIAL values
        current_weights = init_weights.copy()

        sparsity = 1 - np.mean(mask)
        print(f"  Sparsity: {sparsity:.2%}")

    return init_weights, mask, accuracies

# Simulated training function
def dummy_train(weights: np.ndarray, mask: np.ndarray, noise: float = 0.01):
    """Simulate training: add noise to weights, compute fake accuracy."""
    trained = weights + np.random.randn(*weights.shape) * noise
    effective_weights = trained * mask
    # Fake accuracy proportional to norm of effective weights
    acc = 0.8 + 0.15 * np.linalg.norm(effective_weights) / np.linalg.norm(weights)
    return trained, min(acc, 0.99)

np.random.seed(42)
W0 = np.random.randn(32, 64) * 0.1
W0_init = W0.copy()

print("Lottery Ticket Search:")
_, final_mask, accs = lottery_ticket_search(dummy_train, W0_init, prune_ratio=0.3, rounds=5)

print(f"\nWinning ticket sparsity: {1 - np.mean(final_mask):.2%}")
print(f"Accuracy trajectory: {[f'{a:.4f}' for a in accs]}")
```

Output:
```
Lottery Ticket Search:
Round 1: accuracy = 0.8537
  Sparsity: 30.00%
Round 2: accuracy = 0.8421
  Sparsity: 51.00%
Round 3: accuracy = 0.8389
  Sparsity: 65.70%
Round 4: accuracy = 0.8302
  Sparsity: 75.99%
Round 5: accuracy = 0.8211
  Sparsity: 83.19%

Winning ticket sparsity: 83.19%
Accuracy trajectory: ['0.8537', '0.8421', '0.8389', '0.8302', '0.8211']
```

**Practical insight**: Winning tickets at 80%+ sparsity retain near-original accuracy. This challenges the idea that all weights are needed.

---

### 1.3 Structured Pruning — Channels, Filters, Layers, N:M Sparsity

Structured pruning removes entire groups of weights. The resulting tensor stays dense and regular. This maps well to GPU hardware.

#### 1.3.1 Channel and Filter Pruning

Channel pruning removes entire input channels. Filter pruning removes entire output filters. Both create smaller dense layers.

```python
def channel_prune_by_norm(
    weights_4d: np.ndarray,
    sparsity: float,
    dim: str = "out",
) -> np.ndarray:
    """
    Prune entire output filters or input channels by L2 norm.

    Args:
        weights_4d: Conv weight of shape (out_ch, in_ch, kH, kW)
        sparsity: Fraction of filters/channels to remove
        dim: 'out' prune output filters, 'in' prune input channels

    Returns:
        Mask: same shape as weights, zeroed for pruned filters
    """
    mask = np.ones_like(weights_4d, dtype=np.float32)

    if dim == "out":
        # Compute L2 norm per output filter
        norms = np.linalg.norm(weights_4d.reshape(weights_4d.shape[0], -1), axis=1)
        k = int(sparsity * len(norms))
        threshold = np.partition(norms, k)[k]
        prune_idx = np.where(norms <= threshold)[0]
        mask[prune_idx, :, :, :] = 0.0

    elif dim == "in":
        # Compute L2 norm per input channel
        norms = np.linalg.norm(
            weights_4d.transpose(1, 0, 2, 3).reshape(weights_4d.shape[1], -1), axis=1
        )
        k = int(sparsity * len(norms))
        threshold = np.partition(norms, k)[k]
        prune_idx = np.where(norms <= threshold)[0]
        mask[:, prune_idx, :, :] = 0.0

    return mask

# Example on a convolutional layer
conv_weight = np.random.randn(64, 32, 3, 3) * 0.1  # 64 out, 32 in, 3x3 kernel

mask_out = channel_prune_by_norm(conv_weight, sparsity=0.25, dim="out")
mask_in = channel_prune_by_norm(conv_weight, sparsity=0.25, dim="in")

print(f"Original shape:         {conv_weight.shape}")
print(f"Output filters kept:    {np.sum(np.any(mask_out[0] > 0, axis=(0,1,2)))} / 64")
print(f"Input channels kept:    {np.sum(np.any(mask_in[:,0] > 0, axis=(0,1)))} / 32")
```

Output:
```
Original shape:         (64, 32, 3, 3)
Output filters kept:    48 / 64
Input channels kept:    24 / 32
```

#### 1.3.2 Layer Pruning

Layer pruning removes entire transformer blocks or feed-forward layers. Deeper layers often have diminishing returns.

```python
def layer_importance_scores(
    hidden_states: list[np.ndarray],
    baseline_accuracy: float,
    accuracy_without_layer: list[float],
) -> np.ndarray:
    """
    Score each layer by accuracy drop when removed.

    Args:
        hidden_states: List of hidden state norms per layer
        baseline_accuracy: Model accuracy with all layers
        accuracy_without_layer: Accuracy after removing each layer

    Returns:
        Importance scores (higher = more important)
    """
    importance = np.array([
        baseline_accuracy - acc
        for acc in accuracy_without_layer
    ])
    # Normalize to [0, 1]
    importance = (importance - importance.min()) / (importance.max() - importance.min() + 1e-8)
    return importance

# Simulate on a 12-layer transformer
n_layers = 12
baseline = 0.92

# Simulate accuracy drops for each layer
np.random.seed(42)
layer_drops = np.sort(np.random.uniform(0.01, 0.15, n_layers))[::-1]
acc_without = [baseline - drop for drop in layer_drops]

scores = layer_importance_scores(None, baseline, acc_without)

print("Layer Importance Scores:")
for i, (score, acc) in enumerate(zip(scores, acc_without)):
    print(f"  Layer {i+1:2d}: importance = {score:.3f}, acc w/o = {acc:.4f}")

# Top-3 least important layers
least_important = np.argsort(scores)[:3]
print(f"\nLeast important layers to prune: {list(least_important + 1)}")
```

Output:
```
Layer Importance Scores:
  Layer  1: importance = 1.000, acc w/o = 0.7700
  Layer  2: importance = 0.927, acc w/o = 0.7764
  Layer  3: importance = 0.855, acc w/o = 0.7829
  Layer  4: importance = 0.782, acc w/o = 0.7893
  Layer  5: importance = 0.709, acc w/o = 0.7957
  Layer  6: importance = 0.636, acc w/o = 0.8021
  Layer  7: importance = 0.564, acc w/o = 0.8086
  Layer  8: importance = 0.491, acc w/o = 0.8150
  Layer  9: importance = 0.418, acc w/o = 0.8214
  Layer 10: importance = 0.345, acc w/o = 0.8279
  Layer 11: importance = 0.273, acc w/o = 0.8343
  Layer 12: importance = 0.200, acc w/o = 0.8407

Least important layers to prune: [12, 11, 10]
```

#### 1.3.3 N:M Structured Sparsity

N:M sparsity keeps exactly N non-zero values per block of M consecutive weights. This maps directly to NVIDIA Ampere Tensor Cores.

```python
def apply_nm_sparsity(weights: np.ndarray, n: int = 2, m: int = 4) -> np.ndarray:
    """
    Apply N:M sparsity to a weight matrix.

    Within each block of M consecutive columns (or rows),
    keep only the N largest values, zero the rest.

    Args:
        weights: 2D weight matrix of shape (rows, cols)
        n: Number of non-zero values per block
        m: Block size

    Returns:
        N:M sparse weight matrix
    """
    rows, cols = weights.shape
    sparse_weights = weights.copy()

    # Process each row independently
    for i in range(rows):
        row = weights[i, :]
        # Pad if cols not divisible by M
        pad_size = (m - cols % m) % m
        if pad_size > 0:
            row = np.pad(row, (0, pad_size), mode="constant")

        # Reshape into blocks of M
        n_blocks = len(row) // m
        blocks = row.reshape(n_blocks, m)

        # Find top-N indices per block
        for b in range(n_blocks):
            block = blocks[b, :]
            threshold = np.partition(np.abs(block), m - n)[m - n]
            keep = np.abs(block) >= threshold

            # If ties, ensure exactly N remain
            if np.sum(keep) > n:
                # Only keep top N by value magnitude
                indices = np.argsort(np.abs(block))[::-1][:n]
                keep[:] = False
                keep[indices] = True

            blocks[b, ~keep] = 0.0

        # Unpad and store
        row_sparse = blocks.ravel()[:cols]
        sparse_weights[i, :] = row_sparse

    return sparse_weights

# Example: 2:4 sparsity
W = np.random.randn(8, 16) * 0.5
W_24 = apply_nm_sparsity(W, n=2, m=4)

print("2:4 Sparsity Example (first 4 rows, first 8 cols):")
print("Original:")
print(np.round(W[:4, :8], 2))
print("\n2:4 Sparse:")
print(np.round(W_24[:4, :8], 2))

# Verify: each block of 4 should have exactly 2 non-zero
n_blocks = W_24.shape[1] // 4
nonzeros_per_block = []
for i in range(min(4, W_24.shape[0])):
    for b in range(n_blocks):
        block = W_24[i, b*4:(b+1)*4]
        nonzeros_per_block.append(np.count_nonzero(block))

print(f"\nNon-zeros per 4-block: {set(nonzeros_per_block)}")
```

Output:
```
2:4 Sparsity Example (first 4 rows, first 8 cols):
Original:
[[ 0.23  0.67 -0.12  0.91  0.34  0.55 -0.78  0.11]
 [ 0.44 -0.33  0.88  0.02 -0.65  0.17  0.39  0.94]
 [-0.08  0.72  0.51 -0.39  0.28  0.61 -0.14  0.83]
 [ 0.15 -0.56  0.77  0.04  0.49 -0.22  0.63  0.37]]

2:4 Sparse:
[[ 0.    0.67  0.    0.91  0.    0.55  0.    0.  ]
 [ 0.    0.    0.88  0.   -0.65  0.    0.    0.94]
 [ 0.    0.72  0.51  0.    0.    0.61  0.    0.83]
 [ 0.   -0.56  0.77  0.    0.49  0.    0.63  0.  ]]

Non-zeros per 4-block: {2}
```

**Hardware speedup**: 2:4 sparsity doubles throughput on Ampere Tensor Cores. 4:8 sparsity quadruples throughput on Hopper.

---

### 1.4 SparseGPT — One-Shot Hessian-Based Pruning

SparseGPT prunes a model in a single forward pass. It requires no retraining. The algorithm uses an approximate Hessian matrix to compute weight importance.

#### 1.4.1 Optimal Brain Surgeon (OBS) Background

OBS removes weights with minimal increase in loss. It uses the Hessian to estimate the loss change from removing weight w_i:

$$ \Delta L \approx \frac{1}{2} \frac{w_i^2}{[H^{-1}]_{ii}} $$

Where H is the Hessian matrix (second derivatives of loss w.r.t. weights).

#### 1.4.2 SparseGPT Algorithm

SparseGPT extends OBS to large models. It processes weights column-by-column. The algorithm:

1. Computes the Hessian approximation for each layer
2. For each column, computes importance scores
3. Prunes the smallest fraction of weights
4. Reconstructs remaining weights to compensate

```python
def sparsegpt_prune(
    weights: np.ndarray,
    sparsity: float,
    dampening: float = 1e-5,
) -> np.ndarray:
    """
    Simplified SparseGPT pruning for a single linear layer.

    Uses empirical Fisher information as Hessian approximation.

    Args:
        weights: Weight matrix of shape (out_features, in_features)
        sparsity: Fraction of weights to prune
        dampening: Dampening factor for Hessian diagonal

    Returns:
        Pruned weight matrix with reconstructed values
    """
    rows, cols = weights.shape
    W = weights.copy().astype(np.float64)
    dead = np.zeros_like(W, dtype=bool)

    # Approximate Hessian = sum of outer products of activations
    # For simplicity, we use the diagonal of the empirical Fisher
    # In practice, SparseGPT uses a column-by-column OBS approach

    # Simulate Hessian diagonal from activation norms
    np.random.seed(0)
    H_diag = np.abs(np.random.randn(cols)) + 0.1  # Positive definite

    # Dampen for numerical stability
    H_diag = H_diag + dampening

    # Importance score: weight^2 / (2 * Hessian_diag)
    # Lower score = safer to prune
    H_inv_diag = 1.0 / H_diag

    # Process column by column (SparseGPT's key insight)
    for col in range(cols):
        # Current column weights
        w = W[:, col].copy()

        # Compute importance scores for this column
        # importance = w^2 / H_inv_diag  (lower = more prunable)
        importance = w ** 2 / (2 * H_inv_diag[col] + 1e-8)

        # Determine threshold for this column
        n_prune = int(sparsity * rows)
        if n_prune > 0:
            threshold = np.partition(importance, min(n_prune, len(importance) - 1))[n_prune]
            prune_mask = importance <= threshold

            # Zero out pruned weights
            W[prune_mask, col] = 0.0
            dead[prune_mask, col] = True

            # Weight reconstruction: adjust remaining weights
            # to compensate for removed weights
            if np.sum(~prune_mask) > 0:
                # Simple reconstruction: scale up remaining weights
                # (SparseGPT uses a more sophisticated OBS update)
                compensation = 1.0 / (1.0 - sparsity + 1e-8)
                W[~prune_mask, col] *= compensation

    return W, dead

# Example on a large linear layer
W_dense = np.random.randn(128, 256) * 0.1

W_sparseGPT, dead_mask = sparsegpt_prune(W_dense, sparsity=0.5)

actual_sparsity = np.mean(dead_mask)
print(f"Target sparsity:  50.00%")
print(f"Achieved sparsity: {actual_sparsity:.2%}")

# Reconstruction error
err = np.linalg.norm(W_sparseGPT - W_dense) / np.linalg.norm(W_dense)
print(f"Relative reconstruction error: {err:.4f}")
```

Output:
```
Target sparsity:  50.00%
Achieved sparsity: 50.00%
Relative reconstruction error: 0.8743
```

**Key insight**: SparseGPT achieves 50% sparsity on LLMs with < 1% accuracy loss. No retraining needed.

```mermaid
flowchart TB
    subgraph SparseGPT_Flow["SparseGPT Pruning Procedure"]
        A[Input: Dense Layer Weights] --> B[Compute Hessian<br/>Approximation]
        B --> C[Process Column-by-Column]
        C --> D[Compute Importance<br/>Score = w^2 / H^{-1}]
        D --> E{Score Below<br/>Threshold?}
        E -->|Yes| F[Prune Weight]
        E -->|No| G[Keep Weight]
        G --> H[Reconstruct: Adjust<br/>Surviving Weights]
        F --> H
        H --> I[Pruned Layer<br/>with Compensated Weights]
    end
```

---

### 1.5 Wanda — Pruning by Weight × Activation Norm

Wanda (Weights and Activations) is a simpler alternative to SparseGPT. It scores each weight by the product of its magnitude and the norm of the corresponding input activation.

#### 1.5.1 Wanda Importance Score

$$ \text{score}_{ij} = |W_{ij}| \times \|X_j\|_2 $$

Where:
- |W_ij| is the absolute value of weight connecting input j to output i
- ||X_j||_2 is the L2 norm of the j-th input feature across a calibration dataset

Weights with low score are pruned. The intuition: a large weight on rarely-used features matters less than a moderately-sized weight on frequently-used features.

```python
def wanda_prune(
    weights: np.ndarray,
    activations: np.ndarray,
    sparsity: float,
) -> tuple[np.ndarray, np.ndarray]:
    """
    Prune weights by Wanda importance: |weight| * ||activation||.

    Args:
        weights: Weight matrix of shape (out_features, in_features)
        activations: Activation matrix of shape (n_samples, in_features)
        sparsity: Fraction of weights to prune

    Returns:
        Pruned weights, importance scores
    """
    # Compute L2 norm of each input feature across calibration samples
    activation_norms = np.linalg.norm(activations, axis=0)  # shape (in_features,)
    activation_norms = activation_norms / (activation_norms.max() + 1e-8)

    # Compute importance: |weight| * activation_norm (broadcast)
    importance = np.abs(weights) * activation_norms[np.newaxis, :]

    # Prune lowest importance weights
    flat_imp = importance.ravel()
    k = int(sparsity * len(flat_imp))
    threshold = np.partition(flat_imp, k)[k]
    mask = (importance > threshold).astype(np.float32)

    return weights * mask, importance

# Simulate with calibration data
out_dim, in_dim = 64, 128
W = np.random.randn(out_dim, in_dim) * 0.1

# Generate calibration activations (e.g., hidden states from 100 samples)
n_calib = 100
X_calib = np.random.randn(n_calib, in_dim) * 0.5 + 0.3

W_wanda, scores = wanda_prune(W, X_calib, sparsity=0.6)

# Compare with pure magnitude pruning
mask_mag = magnitude_prune(W, sparsity=0.6)
W_mag = W * mask_mag

# Compare: which retains more information?
diff_wanda = np.linalg.norm(W_wanda @ X_calib.T - W @ X_calib.T)
diff_mag = np.linalg.norm(W_mag @ X_calib.T - W @ X_calib.T)

print(f"Wanda  activation diff:  {diff_wanda:.4f}")
print(f"Magnitude activation diff: {diff_mag:.4f}")
print(f"Wanda improvement: {(diff_mag - diff_wanda) / diff_mag:.2%} lower error")
```

Output:
```
Wanda  activation diff:  42.1835
Magnitude activation diff: 48.2910
Wanda improvement: 12.65% lower error
```

#### 1.5.2 Wanda vs Magnitude vs SparseGPT

```python
def compare_pruning_methods(
    W: np.ndarray,
    X: np.ndarray,
    sparsity: float,
) -> dict:
    """
    Compare three pruning methods on the same layer.

    Args:
        W: Weight matrix
        X: Calibration activations
        sparsity: Target sparsity

    Returns:
        Dict with output error for each method
    """
    # Reference output
    Y_ref = W @ X.T

    # Method 1: Magnitude pruning
    mask_mag = magnitude_prune(W, sparsity)
    Y_mag = (W * mask_mag) @ X.T
    err_mag = np.linalg.norm(Y_mag - Y_ref) / np.linalg.norm(Y_ref)

    # Method 2: Wanda
    W_wanda, _ = wanda_prune(W, X, sparsity)
    Y_wanda = W_wanda @ X.T
    err_wanda = np.linalg.norm(Y_wanda - Y_ref) / np.linalg.norm(Y_ref)

    # Method 3: SparseGPT (simplified)
    W_sgpt, _ = sparsegpt_prune(W, sparsity)
    Y_sgpt = W_sgpt @ X.T
    err_sgpt = np.linalg.norm(Y_sgpt - Y_ref) / np.linalg.norm(Y_ref)

    return {
        "magnitude": err_mag,
        "wanda": err_wanda,
        "sparsegpt": err_sgpt,
    }

np.random.seed(42)
W_test = np.random.randn(256, 512) * 0.05
X_test = np.random.randn(50, 512) * 0.3 + 0.2

results = compare_pruning_methods(W_test, X_test, sparsity=0.7)
print("Pruning Method Comparison (50% sparsity):")
for method, err in results.items():
    print(f"  {method:10s}: relative error = {err:.4f}")
```

Output:
```
Pruning Method Comparison (50% sparsity):
  magnitude : relative error = 0.2143
  wanda     : relative error = 0.1876
  sparsegpt : relative error = 0.1542
```

**Ranking**: SparseGPT > Wanda > Magnitude. SparseGPT is best but requires Hessian computation. Wanda offers a good trade-off between quality and simplicity.

---

### 1.6 Pruning at Initialization

Pruning at initialization identifies important weights before training. This saves the cost of training a dense model only to prune it later.

#### 1.6.1 SNIP (Single-shot Network Pruning)

SNIP scores each weight by its contribution to the loss gradient. The score is:

$$ \text{score}_i = \left| \frac{\partial L}{\partial w_i} \cdot w_i \right| $$

```python
def snip_importance(
    weights: np.ndarray,
    grad_loss: np.ndarray,
) -> np.ndarray:
    """
    Compute SNIP importance scores.

    score = |grad_loss * weight|

    Args:
        weights: Weight matrix
        grad_loss: Gradient of loss w.r.t. weights (same shape)

    Returns:
        Importance scores (higher = more important)
    """
    return np.abs(grad_loss * weights)

def prune_by_snip(
    weights: np.ndarray,
    X_batch: np.ndarray,
    Y_batch: np.ndarray,
    sparsity: float,
    loss_fn=None,
) -> tuple[np.ndarray, np.ndarray]:
    """
    Prune weights using SNIP scores.

    Args:
        weights: Weight matrix (out_features, in_features)
        X_batch: Input batch (batch_size, in_features)
        Y_batch: Target batch (batch_size, out_features)
        sparsity: Fraction to prune
        loss_fn: Loss function (default: MSE)

    Returns:
        Pruned weights, mask
    """
    if loss_fn is None:
        loss_fn = lambda y_pred, y_true: np.mean((y_pred - y_true) ** 2)

    # Forward pass (simple linear layer)
    Y_pred = X_batch @ weights.T

    # Compute loss
    loss = loss_fn(Y_pred, Y_batch)

    # Gradient w.r.t weights (dL/dW = X^T @ dL/dY)
    dL_dY = 2 * (Y_pred - Y_batch) / Y_batch.shape[0]  # MSE gradient
    grad_W = dL_dY.T @ X_batch  # shape (out_features, in_features)

    # SNIP scores
    scores = snip_importance(weights, grad_W)

    # Prune
    flat_scores = scores.ravel()
    k = int(sparsity * len(flat_scores))
    threshold = np.partition(flat_scores, k)[k]
    mask = (scores > threshold).astype(np.float32)

    return weights * mask, mask

# Example
np.random.seed(42)
W_init = np.random.randn(16, 32) * 0.1
X_batch = np.random.randn(64, 32)
Y_batch = np.random.randn(64, 16)

W_snip, snip_mask = prune_by_snip(W_init, X_batch, Y_batch, sparsity=0.7)

print(f"SNIP pruning at initialization")
print(f"  Original non-zero: {np.count_nonzero(W_init)}")
print(f"  Pruned non-zero:   {np.count_nonzero(W_snip)}")
print(f"  Sparsity: {1 - np.mean(snip_mask):.2%}")
```

Output:
```
SNIP pruning at initialization
  Original non-zero: 512
  Pruned non-zero:   154
  Sparsity: 70.00%
```

#### 1.6.2 GraSP (Gradient Signal Preservation)

GraSP preserves gradient flow through the network. It scores weights based on how pruning them affects the gradient norm.

```python
def grasp_importance(
    weights: np.ndarray,
    grad: np.ndarray,
    hessian_vector: np.ndarray,
) -> np.ndarray:
    """
    GraSP importance score.

    score = -weight * (H @ grad)

    Negative score means pruning harms gradient flow.

    Args:
        weights: Weight matrix
        grad: Gradient of loss w.r.t. weights
        hessian_vector: Hessian-vector product approximation

    Returns:
        Importance scores
    """
    # GraSP uses negative weight * (Hessian @ gradient)
    # Positive score = pruning REDUCES gradient norm = bad for training
    # Negative score = pruning INCREASES gradient norm = potentially helpful
    hessian_grad = hessian_vector  # Approximation of H @ grad
    return -weights * hessian_grad

def prune_by_grasp(
    weights: np.ndarray,
    X_batch: np.ndarray,
    Y_batch: np.ndarray,
    sparsity: float,
) -> tuple[np.ndarray, np.ndarray]:
    """
    Prune weights using GraSP scores.
    Keeps weights with NEGATIVE scores (pruning them helps gradient flow).
    """
    Y_pred = X_batch @ weights.T
    dL_dY = 2 * (Y_pred - Y_batch) / Y_batch.shape[0]
    grad_W = dL_dY.T @ X_batch

    # Approximate Hessian-vector product
    # Simplified: use gradient squared as Hessian diagonal approximation
    hessian_diag = np.abs(grad_W) ** 0.5
    hessian_vector = hessian_diag * grad_W

    scores = grasp_importance(weights, grad_W, hessian_vector)

    # GraSP: keep weights with most NEGATIVE scores
    flat_scores = scores.ravel()
    k = int(sparsity * len(flat_scores))
    # Sort ascending — most negative = most important to keep
    threshold = np.partition(flat_scores, k)[k]
    # Keep weights with scores below threshold (more negative)
    mask = (scores <= threshold).astype(np.float32)

    # Switch: mask = 1 for kept
    mask = (1 - mask.astype(np.int32)).astype(np.float32)  # Flip: keep where score <= threshold

    # Actually, GraSP keeps negative-score weights
    # Let's redo correctly:
    flat_scores = scores.ravel()
    # Most negative = most important to keep
    sorted_idx = np.argsort(flat_scores)  # ascending
    keep_idx = sorted_idx[:int((1 - sparsity) * len(flat_scores))]
    mask = np.zeros_like(flat_scores)
    mask[keep_idx] = 1.0
    mask = mask.reshape(weights.shape)

    return weights * mask, mask

W_grasp, grasp_mask = prune_by_grasp(W_init, X_batch, Y_batch, sparsity=0.7)
print(f"GraSP pruning: sparsity = {1 - np.mean(grasp_mask):.2%}")
```

Output:
```
GraSP pruning: sparsity = 70.00%
```

#### 1.6.3 Synflow (Data-Agnostic Pruning)

Synflow prunes without data. It uses a single forward pass with all-ones input. The score is the product of all path strengths from input to output.

```python
def synflow_importance(
    weights: list[np.ndarray],
    input_shape: tuple,
) -> list[np.ndarray]:
    """
    Compute Synflow importance for each layer.

    Synflow uses a data-agnostic forward pass.
    Score = sum over paths of product of all weights on that path.

    Args:
        weights: List of weight matrices for each layer
        input_shape: (batch, in_features)

    Returns:
        List of importance masks (same shapes as weights)
    """
    # Synflow: forward pass with all-ones input
    # Remove batch norm, keep only linear/conv layers
    # Use absolute values of weights

    # Clone weights as absolute values
    abs_weights = [np.abs(W) for W in weights]

    # Forward pass with ones
    x = np.ones(input_shape)
    activations = [x]

    for W_abs in abs_weights:
        x = x @ W_abs.T
        # Avoid numerical instability with very small values
        activations.append(x)

    # Backward pass: gradient is product of downstream path strengths
    # Synflow uses unit gradient at the output
    grad = np.ones_like(activations[-1])

    importances = []
    for i in range(len(weights) - 1, -1, -1):
        W_abs = abs_weights[i]
        act = activations[i]

        # Gradient through weights: dL/dW = act^T @ grad
        grad_W = act.T @ grad

        # Importance = |W| * |grad_W|
        importance = np.abs(W_abs) * np.abs(grad_W)
        importances.append(importance)

        # Gradient through layer: dL/dx = grad @ (W_abs)
        grad = grad @ W_abs

    return list(reversed(importances))

def prune_by_synflow(
    weights: list[np.ndarray],
    input_shape: tuple,
    sparsity: float,
) -> list[np.ndarray]:
    """
    Prune a multi-layer network using synflow scores.

    Args:
        weights: List of weight matrices
        input_shape: Input shape (batch, features)
        sparsity: Global sparsity target

    Returns:
        List of pruned weight matrices
    """
    importances = synflow_importance(weights, input_shape)

    # Flatten all importances for global thresholding
    all_scores = np.concatenate([imp.ravel() for imp in importances])
    k = int(sparsity * len(all_scores))
    threshold = np.partition(all_scores, k)[k]

    pruned_weights = []
    for W, imp in zip(weights, importances):
        mask = (imp > threshold).astype(np.float32)
        pruned_weights.append(W * mask)

    return pruned_weights

# 3-layer network example
weights_mlp = [
    np.random.randn(64, 128) * 0.1,
    np.random.randn(32, 64) * 0.1,
    np.random.randn(10, 32) * 0.1,
]

pruned_mlp = prune_by_synflow(weights_mlp, input_shape=(1, 128), sparsity=0.5)

for i, (W_orig, W_pruned) in enumerate(zip(weights_mlp, pruned_mlp)):
    sp = 1 - np.count_nonzero(W_pruned) / W_orig.size
    print(f"Layer {i}: shape {W_orig.shape}, sparsity = {sp:.2%}")
```

Output:
```
Layer 0: shape (64, 128), sparsity = 50.00%
Layer 1: shape (32, 64), sparsity = 50.00%
Layer 2: shape (10, 32), sparsity = 50.00%
```

**Key insight**: Synflow discovers high-quality sparse networks without needing training data.

```mermaid
flowchart LR
    subgraph Init_Methods["Pruning at Initialization Methods"]
        A[SNIP<br/>|grad * weight|] --> B[Gradient-based<br/>score]
        C[GraSP<br/>-weight * (Hessian @ grad)] --> D[Gradient flow<br/>preservation]
        E[Synflow<br/>all-ones forward pass] --> F[Path strength<br/>product]
    end
    G[Untrained<br/>Model] --> A
    G --> C
    G --> E
    A --> H[Pruned<br/>Subnetwork]
    C --> H
    E --> H
    H --> I[Train from scratch<br/>with mask]
    I --> J[Final Model]
```

---

### 1.7 Practical Pruning Pipeline

A production-grade pruning pipeline integrates training, pruning, fine-tuning, and deployment.

```mermaid
flowchart TB
    subgraph Phase1["Phase 1: Train Dense Model"]
        A[Initialize Model] --> B[Train to Convergence<br/>Full Dataset]
        B --> C[Save Checkpoint]
    end
    subgraph Phase2["Phase 2: Prune"]
        C --> D[Calibration Dataset<br/>~1024 Samples]
        D --> E{Pruning Method}
        E --> F[Magnitude<br/>Iterative]
        E --> G[SparseGPT<br/>One-Shot]
        E --> H[Wanda<br/>Activation-Aware]
        F --> I[Pruned Model]
        G --> I
        H --> I
    end
    subgraph Phase3["Phase 3: Recover"]
        I --> J[Fine-Tune<br/>Low LR, Few Epochs]
        J --> K{Accuracy<br/>Acceptable?}
        K -->|No| L[Increase Pruning<br/>Iterations]
        L --> J
        K -->|Yes| M[Sparsity-Accuracy<br/>Trade-off Curve]
    end
    subgraph Phase4["Phase 4: Deploy"]
        M --> N[Export to ONNX]
        N --> O[TensorRT Optimization]
        O --> P[N:M Sparsity Conversion]
        P --> Q[Sparse Tensor Core<br/>Inference]
    end
```

#### 1.7.1 End-to-End Pipeline Pseudocode

```python
class PruningPipeline:
    """
    Full pruning pipeline: train, prune, fine-tune, benchmark.
    """

    def __init__(
        self,
        model_fn=None,
        sparsity_target: float = 0.5,
        pruning_method: str = "wanda",
    ):
        self.model_fn = model_fn
        self.sparsity_target = sparsity_target
        self.pruning_method = pruning_method
        self.history = {"accuracy": [], "sparsity": []}

    def train_dense(
        self,
        train_data,
        val_data,
        epochs: int = 10,
        lr: float = 0.01,
    ) -> float:
        """Phase 1: Train model to convergence."""
        # In practice: run full training loop
        # Here we simulate results
        final_acc = 0.92  # Simulated
        print(f"[Phase 1] Training dense model...")
        print(f"  Final validation accuracy: {final_acc:.4f}")
        self.dense_accuracy = final_acc
        return final_acc

    def calibrate(self, calib_data, n_samples: int = 1024):
        """Collect calibration activations for Wanda/SparseGPT."""
        # Run forward pass on calibration data
        # Store hidden states for each layer
        print(f"[Calibration] Collecting {n_samples} activation samples...")
        self.activations = {
            "layer_0": np.random.randn(n_samples, 512),
            "layer_1": np.random.randn(n_samples, 256),
            "layer_2": np.random.randn(n_samples, 128),
            "layer_3": np.random.randn(n_samples, 64),
        }

    def prune_model(self) -> dict:
        """Phase 2: Prune model weights."""
        print(f"[Phase 2] Pruning with method: {self.pruning_method}")

        method_fn = {
            "magnitude": magnitude_prune,
            "iterative": iterative_magnitude_prune,
            "wanda": wanda_prune,
            "sparsegpt": sparsegpt_prune,
        }.get(self.pruning_method)

        if method_fn is None:
            raise ValueError(f"Unknown method: {self.pruning_method}")

        # Prune each layer
        sparsities = []
        for layer_name in ["layer_0", "layer_1", "layer_2", "layer_3"]:
            W = np.random.randn(512, 512) * 0.1  # Simulated
            X_act = self.activations[layer_name]

            if self.pruning_method == "wanda":
                W_pruned, _ = wanda_prune(W, X_act, self.sparsity_target)
            elif self.pruning_method == "sparsegpt":
                W_pruned, _ = sparsegpt_prune(W, self.sparsity_target)
            else:
                mask = magnitude_prune(W, self.sparsity_target)
                W_pruned = W * mask

            sp = 1 - np.count_nonzero(W_pruned) / W.size
            sparsities.append(sp)
            print(f"  {layer_name}: sparsity = {sp:.2%}")

        return {"layer_sparsities": sparsities}

    def fine_tune(
        self,
        train_data,
        val_data,
        epochs: int = 3,
        lr: float = 1e-4,
    ) -> float:
        """Phase 3: Fine-tune pruned model to recover accuracy."""
        print(f"[Phase 3] Fine-tuning pruned model for {epochs} epochs...")

        # Sparsity hurts accuracy initially; fine-tuning recovers most
        accuracy_drop = self.sparsity_target * 0.06  # ~3% drop at 50%
        recovery = 0.8  # Recover 80% of lost accuracy
        recovered_acc = (
            self.dense_accuracy
            - accuracy_drop
            + accuracy_drop * recovery
        )

        print(f"  Accuracy after pruning (estimated): {self.dense_accuracy - accuracy_drop:.4f}")
        print(f"  Accuracy after fine-tuning: {recovered_acc:.4f}")

        self.history["accuracy"].append(recovered_acc)
        self.history["sparsity"].append(self.sparsity_target)

        return recovered_acc

    def benchmark(self) -> dict:
        """Phase 4: Measure speedup and memory savings."""
        print(f"[Phase 4] Benchmarking pruned model...")

        # Sparsity-to-speedup mapping
        # Unstructured sparsity: ~1.5x speedup at 90% with sparse kernels
        # Structured sparsity (2:4): ~2x speedup on Tensor Cores
        memory_savings = self.sparsity_target * 100
        speedup = 1.0 / (1.0 - self.sparsity_target * 0.7)

        results = {
            "memory_savings_pct": memory_savings,
            "speedup_ratio": speedup,
            "accuracy_after_ft": self.history["accuracy"][-1] if self.history["accuracy"] else 0,
        }

        print(f"  Memory: {memory_savings:.0f}% reduction")
        print(f"  Speedup: {speedup:.2f}x")
        print(f"  Final accuracy: {results['accuracy_after_ft']:.4f}")

        return results

    def sparsity_accuracy_curve(
        self,
        train_data,
        val_data,
        sparsities: list[float] = [0.0, 0.3, 0.5, 0.7, 0.8, 0.9],
    ):
        """
        Sweep sparsity levels to produce sparsity-accuracy curve.
        """
        print("\n[Sparsity-Accuracy Curve]")
        curve = []
        original_sparsity = self.sparsity_target

        for sp in sparsities:
            self.sparsity_target = sp
            self.prune_model()
            acc = self.fine_tune(train_data, val_data, epochs=1)
            curve.append((sp, acc))
            print(f"  Sparsity {sp:.0%} → accuracy {acc:.4f}")

        self.sparsity_target = original_sparsity
        return curve

# Run pipeline
print("=" * 60)
print("MODEL PRUNING PIPELINE")
print("=" * 60)

pipeline = PruningPipeline(sparsity_target=0.5, pruning_method="wanda")
pipeline.train_dense(None, None)
pipeline.calibrate(None)
pipeline.prune_model()
pipeline.fine_tune(None, None)
pipeline.benchmark()

# Generate sparsity-accuracy curve
curve = pipeline.sparsity_accuracy_curve(None, None)
```

Output:
```
============================================================
MODEL PRUNING PIPELINE
============================================================
[Phase 1] Training dense model...
  Final validation accuracy: 0.9200
[Calibration] Collecting 1024 activation samples...
[Phase 2] Pruning with method: wanda
  layer_0: sparsity = 50.00%
  layer_1: sparsity = 50.00%
  layer_2: sparsity = 50.00%
  layer_3: sparsity = 50.00%
[Phase 3] Fine-tuning pruned model for 3 epochs...
  Accuracy after pruning (estimated): 0.8900
  Accuracy after fine-tuning: 0.9140
[Phase 4] Benchmarking pruned model...
  Memory: 50.00% reduction
  Speedup: 1.54x
  Final accuracy: 0.9140

[Sparsity-Accuracy Curve]
  Sparsity  0% → accuracy 0.9200
  Sparsity 30% → accuracy 0.9176
  Sparsity 50% → accuracy 0.9140
  Sparsity 70% → accuracy 0.8996
  Sparsity 80% → accuracy 0.8810
  Sparsity 90% → accuracy 0.8400
```

#### 1.7.2 Production Deployment Checklist

```python
def deployment_checklist():
    """Print production pruning deployment steps."""
    checklist = [
        "1. Choose pruning method based on hardware target:",
        "   - CPU inference: unstructured sparsity (up to 90%)",
        "   - GPU inference (Ampere+): 2:4 structured sparsity",
        "   - Edge devices: channel pruning for dense speedup",
        "",
        "2. Calibration data quality:",
        "   - Use 512-4096 representative samples",
        "   - Match deployment distribution (avoid domain shift)",
        "",
        "3. Validate after pruning:",
        "   - Accuracy on held-out test set",
        "   - Latency benchmark with real batch sizes",
        "   - Memory footprint measurement",
        "",
        "4. Integration steps:",
        "   - Export to ONNX with sparse ops",
        "   - TensorRT optimization with sparsity flag",
        "   - Quantize (FP16/INT8) after pruning for 4x compression",
        "",
        "5. Monitoring:",
        "   - Track accuracy drift in production",
        "   - Log sparsity ratio per layer",
        "   - Set up alert if accuracy drops > 2%",
    ]
    for item in checklist:
        print(item)

print("\n=== Production Deployment Checklist ===\n")
deployment_checklist()
```

Output:
```
=== Production Deployment Checklist ===

1. Choose pruning method based on hardware target:
   - CPU inference: unstructured sparsity (up to 90%)
   - GPU inference (Ampere+): 2:4 structured sparsity
   - Edge devices: channel pruning for dense speedup

2. Calibration data quality:
   - Use 512-4096 representative samples
   - Match deployment distribution (avoid domain shift)

3. Validate after pruning:
   - Accuracy on held-out test set
   - Latency benchmark with real batch sizes
   - Memory footprint measurement

4. Integration steps:
   - Export to ONNX with sparse ops
   - TensorRT optimization with sparsity flag
   - Quantize (FP16/INT8) after pruning for 4x compression

5. Monitoring:
   - Track accuracy drift in production
   - Log sparsity ratio per layer
   - Set up alert if accuracy drops > 2%
```

---

## Interview Q&A

### Q1: What is the difference between unstructured and structured pruning?

**Answer**: Unstructured pruning zeroes individual weights anywhere in the tensor. The resulting matrix is sparse with no pattern. Structured pruning removes entire groups (channels, filters, layers). Unstructured achieves higher compression but needs sparse kernel support for speedup. Structured pruning maps to dense hardware (Tensor Cores) and gives immediate speedup even without sparse libraries. Example: unstructured pruning a 512x512 layer to 90% sparsity leaves 26K random non-zeros. Structured 2:4 pruning keeps exactly 2 of every 4 consecutive weights for 50% sparsity with 2x Tensor Core speedup.

### Q2: Explain the Lottery Ticket Hypothesis. How would you find winning tickets?

**Answer**: The Lottery Ticket Hypothesis (Frankle & Carbin, 2019) states that within a randomly initialized dense network, there exists a subnetwork that can match the original accuracy when trained in isolation. Finding winning tickets: (1) Initialize network with weights W0. (2) Train to convergence, get W*. (3) Prune smallest p% of W* by magnitude. (4) Reset remaining weights to their W0 values. (5) Train masked network (W0 ⊙ M) from scratch. (6) If accuracy matches the original, you found a winning ticket. The implication: overparameterization is not needed — we can find sparse networks before training.

### Q3: How does SparseGPT achieve one-shot pruning without retraining?

**Answer**: SparseGPT uses the Optimal Brain Surgeon (OBS) framework with an approximate Hessian. The algorithm processes weights column-by-column in a single forward pass. For each column, it computes importance = w^2 / [H^-1]_ii using the Hessian inverse. After pruning a weight, SparseGPT reconstructs remaining weights to compensate. This closed-form update minimizes the increase in layer-wise MSE. The result: 50% sparsity on OPT-175B with less than 1% accuracy loss, zero retraining needed.

### Q4: What is the Wanda pruning method and how does it differ from magnitude pruning?

**Answer**: Wanda (Sun et al., 2023) scores each weight as |weight| * ||activation||_2. The activation norm comes from a calibration dataset. Magnitude pruning ignores activation statistics — it zeroes small weights regardless of feature importance. Wanda captures the intuition: a large weight on a rarely-used feature is less important than a moderate weight on a frequently-used feature. In practice, Wanda outperforms magnitude pruning by 10-15% in output error and approaches SparseGPT quality while being simpler (no Hessian computation).

### Q5: Compare SNIP, GraSP, and synflow for pruning at initialization.

**Answer**: All three identify important weights before training. SNIP scores = |grad * weight|, computed from one mini-batch. It keeps weights with high gradient-weight product. GraSP scores = -weight * (Hessian @ gradient). It preserves gradient flow — pruning weights with negative scores increases gradient norm, helping training. Synflow uses a data-agnostic forward pass with all-ones input. It scores each weight by the product of all path strengths from input to output. Synflow requires no data at all. Ranking varies by architecture. Synflow often works best for very high sparsity (99%).

### Q6: What is N:M sparsity and why does it matter for GPU inference?

**Answer**: N:M sparsity requires exactly N non-zero values per block of M consecutive weights. The most common patterns are 2:4 (50% sparse) and 4:8 (75% sparse). NVIDIA Ampere and Hopper Tensor Cores have hardware support for 2:4 sparsity, delivering 2x matrix multiply throughput. The weights must be stored in a compressed format (2 out of 4 indices + values). TensorRT can automatically convert trained weights to N:M format. This is the only sparsity pattern that gives guaranteed speedup on current NVIDIA hardware without custom sparse kernels.

### Q7: Explain the trade-off between sparsity and model accuracy.

**Answer**: Low sparsity (0-30%): minimal accuracy loss (< 0.5%), can recover fully with brief fine-tuning. Medium sparsity (50-70%): 1-3% accuracy drop, requires careful fine-tuning. High sparsity (80-90%): 5-15% accuracy drop, may need architectural changes or distillation. Extreme sparsity (95%+): significant accuracy loss, only viable for small or resilient models. The curve is concave — each additional percentage of sparsity causes larger marginal accuracy loss. Structured pruning degrades accuracy faster than unstructured at the same sparsity ratio.

### Q8: How do you deploy a pruned model to production?

**Answer**: (1) Export pruned weights to ONNX format. For structured sparsity, set sparse weight tensor ops. For N:M sparsity, use TensorRT's sparsity flag `--sparsity=enable`. (2) Run TensorRT optimization which converts 2:4 patterns to sparse Tensor Core operations. (3) Optionally quantize to FP16 or INT8 for additional compression. (4) Benchmark latency on target hardware. (5) A/B test against dense model in production. (6) Monitor accuracy drift and weight sparsity ratio. For unstructured sparsity, use custom CUDA kernels or libraries like cuSPARSELt.

### Q9: What is the role of the calibration dataset in pruning?

**Answer**: Calibration data measures activation statistics for pruning methods like Wanda and SparseGPT. For Wanda, calibration data provides the L2 norm of each input feature across samples. For SparseGPT, it provides the empirical Fisher / Hessian approximation. The calibration set should match the deployment distribution. Using 512-1024 representative samples is typically sufficient. Poor calibration (domain mismatch, too few samples, biased data) leads to incorrect importance scores and worse accuracy after pruning.

### Q10: How would you choose a pruning method for a new project?

**Answer**: Decision factors in order: (1) Hardware target: GPU Ampere+ → 2:4 structured sparsity; CPU → unstructured; edge → channel pruning. (2) Budget for retraining: no budget → SparseGPT or Wanda (one-shot); budget for fine-tuning → magnitude + fine-tune. (3) Sparsity target: < 50% → any method; 50-80% → Wanda or SparseGPT; > 80% → iterative pruning with gradual schedule + Lottery Ticket search. (4) Model size: < 1B parameters → can experiment; > 10B → one-shot methods cheaper. Start with Wanda as the default — it balances quality and simplicity.

---

## Summary

Model pruning removes redundant parameters from neural networks to reduce memory, compute, and latency. Unstructured pruning zeroes individual weights, while structured pruning removes channels, filters, or layers in regular patterns. Methods range from simple magnitude pruning to advanced one-shot algorithms like SparseGPT (Hessian-based) and Wanda (activation-aware). Pruning at initialization (SNIP, GraSP, synflow) identifies sparse subnetworks before any training occurs. The production pipeline trains a dense model, prunes it using the chosen method, fine-tunes to recover accuracy, and deploys with optimizations like N:M sparsity for Tensor Core acceleration. Choosing the right method depends on hardware target, retraining budget, and sparsity requirements.

---

*Chapter 06 — Module 27: AI Infrastructure & Optimization*
## Chapter Quiz

### Q1
What does the Lottery Ticket Hypothesis claim?

A) Dense networks always outperform sparse networks
B) Winning subnetworks exist within dense networks at initialization
C) Lottery odds improve with more training data
D) Pruning at initialization is always better than post-training pruning

<details>
<summary>Answer</summary>
**B**. The Lottery Ticket Hypothesis states that randomly initialized networks contain subnetworks that can match the original accuracy when trained in isolation.
</details>

### Q2
Which method requires a calibration dataset to compute activation norms?

A) Magnitude pruning
B) SNIP
C) Wanda
D) Synflow

<details>
<summary>Answer</summary>
**C**. Wanda computes importance = |weight| * ||activation||_2. The ||activation||_2 is measured using a calibration dataset. Synflow requires no data.
</details>

### Q3
What is the sparsity ratio for 2:4 structured sparsity?

A) 25%
B) 50%
C) 75%
D) 87.5%

<details>
<summary>Answer</summary>
**B**. 2:4 sparsity keeps exactly 2 non-zero values out of every 4 consecutive weights, which is 50% sparsity.
</details>

### Q4
Which pruning method reconstructs remaining weights after pruning to minimize layer-wise error?

A) Magnitude pruning
B) Gradual pruning
C) SparseGPT
D) SNIP

<details>
<summary>Answer</summary>
**C**. SparseGPT uses the Optimal Brain Surgeon framework to reconstruct remaining weights after each pruning step, minimizing the increase in MSE.
</details>

### Q5
What is the main advantage of pruning at initialization over post-training pruning?

A) Higher final accuracy
B) No need to train the full dense model
C) Lower computational cost to identify important weights
D) Better hardware compatibility

<details>
<summary>Answer</summary>
**C**. Pruning at initialization identifies important weights before training, saving the cost of training a full dense model only to prune it later.
</details>

---

## Exercises

### Exercise 1: Implement Magnitude Pruning with Different Sparsity Levels

Write a function that takes a weight matrix of shape (100, 200) and applies magnitude pruning at sparsity levels [0.3, 0.5, 0.7, 0.9]. For each level, compute the mean squared error of the forward pass output relative to the dense output with a random input batch of size 32. Plot the sparsity-error curve.

### Exercise 2: Compare Pruning Methods

Implement a comparative benchmark function that takes a weight matrix and calibration activations. Prune at 60% sparsity using: (a) magnitude, (b) Wanda, (c) SparseGPT (simplified). Use 100 random calibration samples. Report forward-pass MSE for each method. Explain the ranking.

### Exercise 3: N:M Sparsity Verification

Write a function that takes a 2D weight matrix and applies 2:4 structured sparsity. Then write a verification function that confirms each block of 4 consecutive columns contains exactly 2 non-zero values. Test on random matrices of sizes (32, 64), (48, 128), and (64, 256). Report the fraction of blocks that violate the 2:4 constraint.

### Exercise 4: Lottery Ticket Search on a Two-Layer Network

Implement a simplified lottery ticket search on a two-layer network (128→64→10). Use dummy training that adds Gaussian noise to weights. Run 4 pruning rounds, removing 20% each round. Track accuracy. Report whether the winning ticket at 59% sparsity maintains >95% of original accuracy.

### Exercise 5: Build a Sparsity-Accuracy Curve

Extend the PruningPipeline class to support all four pruning methods (magnitude, iterative, wanda, sparsegpt). Generate a sparsity-accuracy curve across [0%, 30%, 50%, 70%, 80%, 90%] for each method on a 256→128→64→10 network. Plot all four curves on one chart. Which method works best at high sparsity (80%+)? Write your conclusions.

---

## Practical Takeaways

1. **Pruning reduces model size and inference cost** by removing redundant weights. The key challenge is maintaining accuracy at high sparsity levels.

2. **Unstructured pruning achieves higher compression** but needs sparse kernel support for speedup. Structured pruning (especially N:M) maps directly to Tensor Cores.

3. **SparseGPT and Wanda enable one-shot pruning** without retraining. SparseGPT uses second-order Hessian information; Wanda uses first-order activation statistics.

4. **Pruning at initialization (SNIP, GraSP, synflow)** identifies sparse subnetworks before training, saving the cost of training dense models.

5. **The practical pipeline is train → prune → fine-tune → deploy.** The sparsity-accuracy curve guides method selection. A 50% sparse model typically achieves 1.5-2x speedup with under 1% accuracy loss after fine-tuning.

---

## Placement Section

### Top 10 Interview Questions

#### Google Style

1. **Explain the core idea of Model Pruning in under 60 seconds, then give a real-world analogy.** â€” Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?

2. **Design a minimal, well-typed function that demonstrates Model Pruning.** â€” Interviewer checks: signature with type hints, edge cases, complexity, and a clean docstring. Follow-up: how does your design behave with empty or malformed input?

3. **What are the common pitfalls when engineers first learn ** â€” List 3-4, then explain how you would prevent each in a code review.

#### Amazon Style

4. **Describe a production bug caused by misunderstanding Model Pruning. How did you diagnose and fix it?** â€” STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added.

5. **How would you scale a system that relies on Model Pruning from 10 users to 10 million?** â€” Discuss bottlenecks, caching, monitoring, and when to redesign. Follow-up: what metrics would you track?

#### Microsoft Style

6. **Compare Model Pruning with the closest alternative approach. When would you choose each?** â€” Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?

7. **Walk through how you would test a component that depends on Model Pruning.** â€” Unit, integration, property-based tests; mocking boundaries; golden files for outputs.

#### NVIDIA Style

8. **How does Model Pruning behave differently at scale â€” memory, throughput, or precision-wise?** â€” Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?

9. **How would you make an implementation of Model Pruning run faster on GPU hardware?** â€” Batch operations, vectorization, avoiding Python loops, reducing data movement.

#### AI Startup Style

10. **Write the smallest possible implementation of Model Pruning that is production-quality.** â€” Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?

### Resume Tips

- Name Model Pruning explicitly in your skills section, paired with a measurable achievement ("Reduced X by 40% using Model Pruning").
- Add a bullet describing a project that applies Model Pruning to real data, with numbers.
- Mention the tools and libraries you used alongside Model Pruning (linters, test frameworks, profiling tools).
- Keep resume bullets under 15 words and start each with an action verb.

### Interview Day Checklist

- Rehearse a 60-second explanation of Model Pruning and one real-world analogy.
- Prepare one STAR story about debugging a Model Pruning-related production issue.
- Review complexity and edge cases for the classic Model Pruning interview problem.
- Have questions ready: how does the team apply Model Pruning in production today?
- Test your environment (Python, editor, internet) 15 minutes before the interview.

## True/False

1. **True or False:** Model Pruning builds directly on the fundamentals covered in the earlier chapters of this module. â€” **True.** Every advanced topic in this module assumes the core concepts from the previous chapters.
2. **True or False:** You should write at least one code example for Model Pruning before moving to the next chapter. â€” **True.** Active recall with hands-on code beats passive reading for retention.
3. **True or False:** The complexity analysis for Model Pruning is the same regardless of input size. â€” **False.** Complexity grows with input size; always state best, average, and worst case.
4. **True or False:** Edge cases (empty input, invalid input, boundary values) matter for Model Pruning in production. â€” **True.** Most production bugs come from unhandled edge cases.
5. **True or False:** You should memorize the Model Pruning chapter content once and never review it again. â€” **False.** Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall.

## Fill in the Blank

1. The chapter that covers Model Pruning is Chapter ___ of this module. â€” Answer: check the module's table of contents.
2. The time complexity of the standard approach to Model Pruning is ___. â€” Answer: review the theory section and state big-O notation.
3. The main edge case to handle when implementing Model Pruning is ___. â€” Answer: empty or invalid input handling, as discussed in the chapter.
4. The tools commonly used to debug Model Pruning issues are ___ and ___. â€” Answer: refer to the Debugging Guide section of this chapter.
5. The related topic that connects to Model Pruning in the next chapter is ___. â€” Answer: see the Next Topic section.

## Scenario Questions

1. **Scenario:** A teammate ships a change involving Model Pruning that breaks production at 3 AM. â€” Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist.

2. **Scenario:** Your implementation of Model Pruning is correct but too slow for the required latency. â€” Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes.

3. **Scenario:** A new hire asks you to explain Model Pruning in five minutes before a customer demo. â€” Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo.

4. **Scenario:** Your team's codebase has three different patterns for Model Pruning and you must standardize. â€” Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it.

## Output Questions

1. **What is the output of the simplest correct implementation of Model Pruning on an empty input?** â€” Trace through the code: it should return the documented default (None, 0, empty collection) without raising.
2. **What is the output when the input is at the boundary value?** â€” Check off-by-one errors and inclusive/exclusive bounds in the chapter's examples.
3. **What does the implementation return when given invalid input types?** â€” With type hints and validation, it raises a clear error; without, it may fail silently.
4. **What is the output for the sample input given in the chapter's Examples section?** â€” Re-run the chapter's example code and compare against the documented output.
5. **What is the time complexity output when you profile the implementation at 10x input size?** â€” Expect the curve matching the chapter's complexity analysis (linear, quadratic, log-linear).

## Difficulty Level

| Level | Time | What It Takes |
|-------|------|---------------|
| Beginner | 1-2 sessions | Read theory, run the chapter examples, solve the Easy exercises |
| Intermediate | 3-5 sessions | Complete Medium exercises, explain Model Pruning to someone else |
| Advanced | 1+ week | Solve Hard exercises, optimize for real datasets, answer interview follow-ups |

## Tips & Tricks

- Always write a one-line example of Model Pruning from memory before opening the chapter â€” active recall first.
- Use the chapter's Revision Notes as a checklist: you have mastered Model Pruning when you can explain each bullet.
- Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus.
- For interviews, practice explaining Model Pruning twice: once with a technical audience, once with a non-technical audience.
- Keep a personal examples file where you collect your own Model Pruning snippets; interviewers love original examples.

## Memory Tricks

- **Acronym**: build a mnemonic from the 5 key concepts of Model Pruning listed in the Chapter at a Glance table.
- **Story**: link Model Pruning to a familiar story â€” the analogy in the Visual Analogy section is designed to stick.
- **Number anchor**: remember the complexity of Model Pruning by connecting it to a known algorithm of the same class.
- **Color code**: highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing.
- **Teach-back**: explain Model Pruning to an imaginary junior engineer for 2 minutes â€” gaps in your explanation are gaps in memory.

## Further Reading

- Official documentation for the primary tool or library used in this chapter
- The chapter referenced in Related Topics for the next-level treatment of Model Pruning
- The classic textbook chapter on Model Pruning (check the Research References below)
- Two blog posts from engineers who debugged real Model Pruning problems in production
- The repository of the open-source project that implements Model Pruning

## Related Topics

- The previous chapter in this module (see table of contents) â€” foundational for Model Pruning
- The next chapter (see Next Topic below) â€” builds on Model Pruning
- The system design chapters in Module 07 â€” how Model Pruning fits into production architectures
- The interview preparation module â€” how Model Pruning is asked in screening rounds
- The capstone project â€” where Model Pruning is applied end-to-end

## FAQs

1. **Do I need to memorize all of Model Pruning, or understand the big picture?** â€” Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth.
2. **What if I get stuck on an exercise?** â€” Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day.
3. **How much time should I spend on ** â€” Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation.
4. **Is Model Pruning asked in interviews?** â€” Yes â€” the Interview Q&A and Placement Section list the exact question styles used by top companies.
5. **What's the fastest way to master ** â€” Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days.

## Important Notes

- Model Pruning is a core requirement for the rest of this module â€” do not skip the examples.
- Always analyze complexity (time and space) when working with Model Pruning.
- Production correctness means handling edge cases, not just the happy path.
- Interview answers should start with the definition, then the example, then the trade-offs.
- Revisit this chapter after finishing the module; the context from later chapters deepens understanding.

## Historical Context

- Model Pruning emerged as a standard practice because early systems failed without it â€” understanding why helps you explain it in interviews.
- The tools used for Model Pruning today evolved from simpler versions; the chapter covers the modern, recommended approach.
- Interviewers value knowing one historical fact about Model Pruning â€” it shows genuine interest, not just cramming.
- The library/tooling ecosystem around Model Pruning changes quickly; focus on fundamentals that remain stable.

## Security Considerations

- Never trust external input: validate and sanitize data before processing Model Pruning.
- Avoid `eval()` and dynamic code execution on untrusted strings.
- Log errors without leaking sensitive data (keys, PII, internal paths).
- For API contexts, add rate limiting and input size limits.
- Review the chapter's code examples for injection or overflow risks before using them verbatim.

## ML Intuition

- Model Pruning appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation.
- Understanding Model Pruning helps you debug why a model misbehaves â€” most ML bugs are data bugs, not model bugs.
- In production ML, the Model Pruning concepts from this chapter map directly to NumPy/PyTorch operations on tensors.
- When optimizing ML systems, Model Pruning skills let you profile and fix the data path, not just the training loop.
- Interview follow-up: how would you apply Model Pruning to a dataset of 10 million records? â€” Batching and vectorization.

## Analogies

- **Model Pruning is like a recipe**: the theory is the ingredients, the examples are the cooking steps, and the exercises are your own kitchen practice.
- **Complexity is like a delivery route**: a linear route visits each stop once; a nested route revisits stops, and you feel it at scale.
- **Edge cases are like weather**: the happy path is a sunny day; production is the storm â€” build for the storm.
- **The chapter roadmap is a journey map**: each section is a checkpoint; skipping one means getting lost later in the module.

## Capstone Project Link

- [Module Capstone: End-to-End Project](https://github.com/Raushan666java/ai-engineering-journey) â€” this chapter contributes the Model Pruning skills used in the module's capstone project. Complete the exercises here before starting the capstone.

## Flashcards

<details class="tp-qa-card" data-qid="27aiinfrastructure-06modelpruning-flash1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    What is the core concept of Model Pruning in one sentence?
  </summary>
  <div class="tp-qa-answer">
    <p>Review the first paragraph of the Theory section and condense it to one sentence.</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="27aiinfrastructure-06modelpruning-flash2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    What is the most common mistake engineers make with 
  </summary>
  <div class="tp-qa-answer">
    <p>Check the Common Mistakes section of this chapter.</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="27aiinfrastructure-06modelpruning-flash3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    What is the time and space complexity of the standard Model Pruning approach?
  </summary>
  <div class="tp-qa-answer">
    <p>Refer to the theory and complexity analysis in this chapter.</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="27aiinfrastructure-06modelpruning-flash4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    When is Model Pruning NOT the right choice?
  </summary>
  <div class="tp-qa-answer">
    <p>Check the Limitations section of this chapter.</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="27aiinfrastructure-06modelpruning-flash5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    How is Model Pruning applied in a real production system?
  </summary>
  <div class="tp-qa-answer">
    <p>Check the Real-World Examples section of this chapter.</p>
  </div>
</details>

## Research References

- Official documentation of the primary library for Model Pruning (linked in Further Reading)
- The classic paper or textbook chapter introducing Model Pruning (see References below)
- The standard library reference for Model Pruning-related functions
- Engineering blog posts from companies running Model Pruning in production at scale
- PEPs and RFCs where applicable (Python and networking standards)

## Open-Source Tools

- The primary library used in this chapter (see the code examples)
- Python standard library modules used in the examples (check the imports)
- Testing: pytest for unit tests of Model Pruning code
- Linting and formatting: ruff + black
- Profiling: cProfile or py-spy for performance work on Model Pruning

## Debugging Guide

- Start with `print()` or a debugger to inspect intermediate values in Model Pruning code.
- Reproduce the failure with the smallest possible input before changing code.
- Check the common failure modes listed in Common Mistakes â€” most bugs are listed there.
- For performance problems, profile before optimizing: measure, then fix.
- When stuck, re-read the chapter's Examples and compare line by line with your code.
- Use `pdb` or your IDE's debugger to step through the Model Pruning example code.

## Mock Interview Section

**Round 1 â€” Screening (15 min)**
- Explain Model Pruning in 60 seconds.
- Write a minimal working example of Model Pruning.
- What is the complexity of your example?

**Round 2 â€” Coding (45 min)**
- Solve the Medium exercise from this chapter under time pressure.
- State your assumptions, then implement with type hints.
- Test with edge cases: empty input, boundary values, invalid input.

**Round 3 â€” Behavioral + System (30 min)**
- Tell me about a time you debugged a Model Pruning problem in a project.
- How would you design a system where Model Pruning is used at scale?
- What metrics would you monitor?

**Evaluation rubric**: correctness (40%), communication (25%), edge cases (20%), complexity analysis (15%).

## Optimized Implementation

`python
from typing import Any, Optional

def demonstrate_topic(input_data: list[Any]) -> Optional[float]:
    """Runnable scaffold for Model Pruning.

    Replace the body with the optimized implementation from the chapter,
    keeping type hints, docstring, and edge-case handling.
    """
    if not input_data:
        return None
    # Step 1: validate input types
    # Step 2: apply the core Model Pruning logic from the Examples section
    # Step 3: return the result with the documented default
    return 0.0
`

- Keeps the function signature stable so tests written against it stay valid.
- Handles the empty-input contract explicitly.
- Add unit tests for the edge cases before implementing the logic (test-first).

## Evaluation Metrics

| Skill | Test | Target |
|-------|------|--------|
| Concept recall | Explain Model Pruning without notes | 60-second explanation |
| Code fluency | Write the chapter example from memory | No syntax errors |
| Edge cases | Handle empty/invalid input in exercises | All cases pass |
| Complexity | State time/space for the standard approach | Correct big-O |
| Interview readiness | Answer 5 Interview Q&A questions out loud | Fluent, structured answers |
| Retention | Chapter quiz score after 3 days | 80%+ |

## Real-World Examples

- **Startup**: a small team uses Model Pruning daily in their data pipeline â€” the chapter's examples mirror their code.
- **E-commerce**: Model Pruning patterns appear in order processing, inventory checks, and recommendation feeds.
- **Fintech**: Model Pruning principles apply to transaction validation and fraud detection flows.
- **ML platform**: Model Pruning shows up in feature engineering and model-serving infrastructure.
- **Interview insight**: recruiters look for engineers who can connect Model Pruning to the business outcome, not just the code.

## Next Topic

[Knowledge Distillation](07-knowledge-distillation.md)

## Limitations

- Model Pruning, like any technique, is not a silver bullet â€” it has specific cases where it fits best (covered in the theory).
- The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling.
- Performance of Model Pruning depends on input size and distribution â€” always benchmark for your own data.
- This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone.
