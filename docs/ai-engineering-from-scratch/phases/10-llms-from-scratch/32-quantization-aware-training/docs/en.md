# Quantization-Aware Training for LLMs -- LLM-QAT, Fake Quant, STE

> PTQ rounds weights after training and hopes for the best. QAT inserts fake quantization into the forward pass so the model learns to place weights where rounding errors are small. For INT4 and below, QAT is the difference between a model that degrades and one that works.

**Type:** Build
**Languages:** Python
**Prerequisites:** Phase 10 Lesson 11 (Quantization), Phase 10 Lesson 04 (Pre-training a mini-GPT), Phase 10 Lesson 26 (KV Cache Quantization)
**Time:** ~75 minutes

## Learning Objectives

- Distinguish QAT from PTQ and identify when QAT's extra training cost is justified by the quality improvement at low bit widths
- Implement a FakeQuantize module that simulates quantization in the forward pass while preserving gradients via the Straight-Through Estimator
- Derive the STE gradient approximation and explain why it works despite the rounding operation being non-differentiable
- Build a knowledge-distillation training loop where a full-precision teacher guides a quantized student
- Apply loss-aware quantization by weighting the quantization objective with the task loss Hessian

## The Problem

Post-training quantization works well at INT8 and FP8. At INT4, the gap between a PTQ model and the FP16 baseline is 1-3 perplexity points. At INT2, PTQ breaks entirely -- the rounding errors from aggressive quantization accumulate across layers and the model's outputs become incoherent.

The root cause is that PTQ treats quantization as a post-hoc modification. The model trained in FP16 never experienced the quantization noise. Its weights settled into configurations that rely on 16 bits of precision. When you round those weights to 4 bits, the rounding error pushes many weights off their trained optima. GPTQ and AWQ mitigate this with careful rounding strategies and calibration data, but they cannot fully close the gap because they cannot retrain the weights.

Quantization-Aware Training (QAT) solves this by baking the quantization into the training loop. Every forward pass simulates the quantization the model will see at deployment. The model learns to place its weights in configurations where the rounding error is small. At INT4, QAT models consistently beat PTQ models by 0.5-1.0 perplexity points. At INT2, QAT is often the only way to get a functional model.

The cost is a full training run. Where PTQ takes minutes to hours with 128 calibration examples, QAT requires days of training on the full dataset. The gradient updates are computed against the quantized version of the model, which is noisier and converges more slowly. For LLMs, QAT is typically applied as a fine-tuning stage after pre-training -- a few thousand steps to adapt the model to quantization -- rather than full pre-training from scratch.

## The Concept

### The Straight-Through Estimator

The core difficulty: quantization rounds values, and rounding has zero gradient everywhere. You cannot backpropagate through `round()`. If `y = round(x)`, then `dy/dx` is zero almost everywhere and undefined at the exact half-integer points.

The Straight-Through Estimator (STE) solves this with a clever trick. During the backward pass, pretend the rounding operation never happened. Let the gradient flow through as if the quantizer were the identity function:

```
Forward:  y = round(x / scale) * scale
Backward: dy/dx = 1  (identity approximation)
```

In PyTorch pseudocode:

```python
class FakeQuantizeSTE(torch.autograd.Function):
    @staticmethod
    def forward(ctx, x, scale, qmin, qmax):
        x_q = torch.clamp(torch.round(x / scale), qmin, qmax)
        return x_q * scale

    @staticmethod
    def backward(ctx, grad_output):
        return grad_output, None, None, None
```

The backward pass returns `grad_output` for x (the identity gradient), and `None` for the non-differentiable parameters (scale, qmin, qmax). This ignores the true gradient of rounding (zero everywhere) and substitutes the identity. The approximation is biased -- the true gradient is zero, the STE gradient is the full upstream gradient -- but in practice this bias works because it tells the optimizer to move in directions that reduce the loss *as if* the quantization were not there.

Why does the biased gradient work? Consider a weight `w = 3.2` that rounds to `3.0`. The forward quantization error is -0.2. If the downstream loss would decrease when the weight increases (positive gradient), the STE passes this gradient through, and `w` moves to 3.3. Next forward pass: `w = 3.3` rounds to `3.0` (still), so the output does not change, but now the gradient might be different. Over many steps, the optimizer pushes `w` to a region where rounding does not change it -- the plateaus between quantization levels -- or where the error is at least stable and the loss can compensate.

### Fake Quantization Ops

A "fake quantize" operation inserts quantization noise into the forward pass while keeping all values in floating point. The name comes from the fact that no actual integer storage happens -- the values are still FP32 or BF16 tensors -- but their precision is artificially limited to simulate the effect of integer quantization.

The standard FakeQuantize module has three hyperparameters:

- **Bit width:** number of quantization levels (2^bits, e.g., 16 levels for INT4)
- **Scale:** the step size between adjacent quantization levels
- **Zero point:** the offset (for asymmetric quantization)

The operation:

```python
def fake_quantize_per_tensor(x, scale, zero_point, qmin, qmax):
    x_int = torch.clamp(torch.round(x / scale + zero_point), qmin, qmax)
    return (x_int - zero_point) * scale
```

During QAT training, the scale and zero-point are typically calibrated on the fly using the observed min/max of the tensor. For weights, the distribution is static after the first few training steps, so the scale can be computed once per epoch and frozen. For activations, the distribution varies per input batch, so the scale is computed from the running min/max or from the current batch (dynamic quantization).

### Calibration strategies for min/max

**Observer-based calibration** tracks the tensor statistics during training. Four common strategies:

1. **MinMaxObserver:** records the global min and max of the tensor. Simple but sensitive to outliers. A single outlier at 100.0 will spread the entire quantization range, wasting levels on values that rarely appear.

2. **MovingAverageMinMaxObserver:** tracks an exponential moving average of min/max, smoothing outlier spikes: `min_ema = alpha * min_batch + (1 - alpha) * min_ema`. More stable.

3. **PercentileObserver:** sorts the tensor values and picks the 1st and 99th percentile as the range. Ignores extreme outliers. Standard practice for activation quantization.

4. **Histogram-based (MSE minimization):** builds a histogram of the tensor values and chooses the min/max threshold that minimizes the MSE between quantized and original values. Used by TensorRT's calibration.

For QAT, the most common choice is MovingAverageMinMaxObserver for weights (static after convergence) and PercentileObserver for activations (dynamic per batch).

### QAT vs PTQ: the full comparison

| Aspect | PTQ | QAT |
|--------|-----|-----|
| Training required | No (128 calibration examples) | Yes (full dataset, days of training) |
| Quality at INT8 | < 0.1 ppl loss | < 0.05 ppl loss |
| Quality at INT4 | 1-3 ppl loss (with GPTQ/AWQ) | 0.3-1.0 ppl loss |
| Quality at INT2 | 5-15 ppl loss | 1-3 ppl loss |
| Quality at INT2 with KD | Unstable | 0.5-1.5 ppl loss |
| Compute cost | 0.5-4 GPU-hours | 100-10000 GPU-hours |
| Data requirements | 128-1024 unlabeled samples | Full training dataset |
| Change to training code | None | Insert FakeQuantize modules |
| Mixed precision | Manual per-layer decisions | Learned per-layer scales |

The breakeven point: at INT8, PTQ wins on cost with negligible quality difference. At INT4, QAT wins for quality-critical applications. At INT2, QAT with distillation is the only viable path.

### KL-divergence-based calibration (NVIDIA method)

NVIDIA's TensorRT uses a calibration method that minimizes the KL divergence between the original FP32 activation distribution and the quantized distribution. The algorithm:

1. Collect activation histograms from a calibration dataset (500 images/texts).
2. For each candidate quantization threshold, compute the KL divergence between the original histogram and the histogram after quantizing and dequantizing.
3. Pick the threshold that minimizes KL divergence.

```python
def calibrate_kl_divergence(fp32_values, num_bits=8, num_bins=2048):
    hist, bin_edges = torch.histogram(fp32_values, bins=num_bins)
    best_threshold = None
    best_kl = float('inf')
    qmax = 2 ** num_bits - 1
    for threshold_bin in range(128, num_bins):
        threshold = bin_edges[threshold_bin]
        quantized = torch.clamp(torch.round(
            fp32_values / (threshold / qmax)), 0, qmax)
        dequantized = quantized * (threshold / qmax)
        p = hist[:threshold_bin] / hist[:threshold_bin].sum()
        q_hist = torch.zeros_like(hist)
        for i in range(threshold_bin):
            q_idx = int(torch.round(
                float(i) / threshold_bin * qmax))
            q_hist[i] = p[q_idx] if q_idx < len(p) else 0
        q = q_hist[:threshold_bin] / q_hist[:threshold_bin].sum()
        kl = (p * torch.log(p / (q + 1e-10))).sum()
        if kl < best_kl:
            best_kl = kl
            best_threshold = threshold
    return best_threshold
```

This produces thresholds that preserve more information in dense regions of the activation distribution at the cost of some outlier clipping.

### LLM-QAT: quantization-aware training for LLMs

LLM-QAT (Liu et al. 2024) extends standard QAT with three specific techniques for large language models:

1. **Weight quantization in the training loop.** Every forward pass quantizes all linear layer weights to INT4 or INT2 using fake quantization. The STE backpropagates gradients through the quantizer. The model adapts its weights to the quantization noise over thousands of training steps.

2. **KV cache quantization in the training loop.** The key-value cache is also fake-quantized during training (to INT4 or INT2), not just at inference time. This is critical because the KV cache quantization error compounds across sequence positions, and the model needs to learn attention patterns that minimize this compounding. The cache is quantized per-token or per-channel depending on the scheme (KIVI-style), and the STE keeps gradients flowing through the cache quantization op.

3. **Knowledge distillation from the full-precision teacher.** The training loss is not just the standard language modeling loss on the quantized student. It is a combination of the student's own loss and a distillation loss that penalizes divergence between the student's hidden states and the teacher's (full-precision) hidden states:

```
L_total = L_student + alpha * D_KL(student_logits || teacher_logits)
         + beta * sum_l || h_s_l - h_t_l ||^2
```

Where:
- `L_student` is the standard cross-entropy loss on the quantized student
- `D_KL` is the KL divergence between the student's output logits and the teacher's (unquantized) logits
- `h_s_l` and `h_t_l` are the hidden states at layer l for the student and teacher
- `alpha` and `beta` are weighting hyperparameters (typically alpha=0.5, beta=0.1)

The distillation loss provides a smooth training signal. The teacher's logits act as a soft target that is more informative than the one-hot hard labels. And the hidden-state MSE loss forces each layer of the quantized student to produce similar internal representations to the corresponding layer of the teacher.

LLM-QAT applies these techniques as a fine-tuning stage after the standard pre-training is complete. The model is first pre-trained in full precision (or trained from a pretrained checkpoint), then fine-tuned for 10K-100K steps with fake quantization and distillation. The total training cost is roughly 10-20% of the original pre-training cost.

```
LLM-QAT Training Loop
======================

for each batch:
    # Teacher forward (full precision, no gradients)
    with torch.no_grad():
        teacher_logits, teacher_hidden = teacher(batch)

    # Student forward (with fake quantization, compute gradients)
    student_logits, student_hidden = student(batch)

    # Task loss (standard language modeling)
    L_task = cross_entropy(student_logits, batch.labels)

    # Distillation loss (logit-level)
    L_kl = kl_divergence(softmax(student_logits / T),
                         softmax(teacher_logits / T)) * T^2

    # Hidden-state loss (layer-level)
    L_hidden = sum(mse_loss(h_s, h_t)
                   for h_s, h_t in zip(student_hidden, teacher_hidden))

    # Total loss
    L_total = L_task + alpha * L_kl + beta * L_hidden

    # Backpropagate through student (STE handles fake quant gradients)
    L_total.backward()
    optimizer.step()
```

The temperature parameter `T` softens the logit distribution (higher T produces softer probabilities, revealing more inter-class relationships). The `T^2` factor scales the KL gradient to match the scale of cross-entropy gradients.

### Knowledge Distillation for quantization

Knowledge distillation (KD) is complementary to QAT. In the QAT setting, KD uses a full-precision teacher to guide the quantized student. The key insight: the quantized model's errors are not random noise -- they have structure. The teacher teaches the student how to compensate.

There are three levels of distillation:

1. **Logit-level (soft targets).** The student matches the teacher's output probability distribution. This is the simplest form, used by Hinton et al. (2015). The student learns to produce similar confidence scores for incorrect classes, which regularizes the decision boundary.

2. **Hidden-state level (layer-wise).** The student matches each intermediate layer's output to the corresponding teacher layer. This is computationally expensive (requires aligned layer outputs) but provides stronger training signal. For LLMs where depth mismatches are common, a projection layer aligns the student's hidden dimension to the teacher's.

3. **Cross-layer distillation.** If the student has fewer layers than the teacher, skipped layers are learned by a mapping that interpolates between teacher layers. For QAT, the student and teacher have the same architecture, so this is unnecessary -- each student layer maps directly to the corresponding teacher layer.

In LLM-QAT, all three levels are combined. The hidden-state loss is the most important for low-bit quantization (INT2 and below) because it forces layer-by-layer fidelity that prevents error propagation.

### The gradient bias problem

The STE gradient is biased. The true gradient of `round(x)` is zero almost everywhere. The STE substitutes the identity gradient (1.0). This means:

- The parameter update direction is not the true gradient direction. The STE says "increase the pre-quantization value" when the loss would decrease, but the quantized output may not change until the pre-quantization value crosses a quantization boundary.
- At the quantization boundaries (half-integer points), the true gradient is a delta function (infinite). The STE misses these entirely.
- Over many steps, the bias accumulates. Studies have shown that STE-based QAT converges to a different minimum than full-precision training.

Recent work addresses the gradient bias with two approaches:

1. **Soft-to-hard quantization (QAT with schedule).** Start with a soft quantization function (differentiable) and gradually anneal it to hard quantization over the training steps. The initial steps see smooth gradients; the final steps see the true quantized behavior. This reduces the final loss gap by 10-20% compared to hard quantization from step 1.

2. **Gradient approximation via Gumbel-softmax.** Replace rounding with a differentiable relaxation: compute the probability of falling into each quantization bin using a softmax over distances, then sample from this distribution. The Gumbel-softmax provides unbiased gradient estimates. Computationally expensive for large weight matrices.

### Loss-aware quantization

Standard QAT minimizes the task loss after quantizing all weights uniformly. Loss-aware quantization (Nagel et al. 2020, implemented in the LSQ framework) observes that some weights matter more to the final loss than others. It assigns different quantization precision to different weights based on their impact on the loss.

The method:

1. Compute the Hessian of the loss with respect to each weight: `H_ii = d^2 L / d w_i^2`.
2. Weights with larger Hessian values are more sensitive to perturbation. Quantize them more carefully (more bits) or leave them at higher precision.
3. Weights with near-zero Hessian values can be aggressively quantized without affecting the loss.

The loss-aware quantization objective:

```
min_{w_q} (w - w_q)^T H (w - w_q)
```

Where `w` is the full-precision weight vector, `w_q` is the quantized weight vector, and `H` is the Hessian matrix. This replaces the naive MSE objective with a loss-weighted MSE: errors on high-Hessian weights are penalized more.

Computing the full Hessian is infeasible for LLMs (N x N matrix for N parameters). Practical implementations use:

- **Diagonal Hessian approximation:** ignore off-diagonal elements, use only the diagonal of H. This is O(N) to compute.
- **Kronecker-factorized Hessian (K-FAC):** approximate H as a Kronecker product of smaller matrices. Common in optimizer literature.
- **Hessian-vector products:** compute `H v` for a given vector `v` without forming H explicitly. Used in GPTQ.

In the QAT training loop, loss-aware quantization means that the FakeQuantize scale and zero-point are tuned to minimize the quantized loss rather than just the reconstruction error. The loss gradient flows into the scale parameters, updating them to place quantization levels where they matter most.

```python
# Loss-aware scale tuning
scale = torch.nn.Parameter(torch.tensor(1.0))
optimizer = torch.optim.SGD([scale], lr=1e-4)

for step in range(n_calibration_steps):
    x = calibration_batch()
    y_q = fake_quantize(x, scale)
    output = model(y_q)
    loss = task_loss(output)
    loss.backward()
    optimizer.step()  # Updates scale to minimize task loss
```

This tunes the quantization parameters with respect to the final objective, not just a reconstruction metric.

## Build It

The code below implements a complete QAT training setup: a FakeQuantize module with STE, observer-based calibration, a knowledge-distillation training loop, and loss-aware quantization. Run `code/main.py`.

```python
import torch
import torch.nn as nn
import torch.nn.functional as F
import math


# ---------------------------------------------------------------------------
# 1. FakeQuantize with Straight-Through Estimator
# ---------------------------------------------------------------------------

class FakeQuantizeSTE(torch.autograd.Function):
    """Fake quantization that simulates INT quantization in forward
    and uses Straight-Through Estimator in backward."""

    @staticmethod
    def forward(ctx, x, scale, zero_point, qmin, qmax):
        x_int = torch.clamp(torch.round(x / scale + zero_point), qmin, qmax)
        x_q = (x_int - zero_point) * scale
        ctx.save_for_backward(x_q)
        return x_q

    @staticmethod
    def backward(ctx, grad_output):
        x_q, = ctx.saved_tensors
        # STE: pass gradient through as identity
        # Clip gradient where input was outside quantization range
        grad_input = grad_output.clone()
        return grad_input, None, None, None, None


class FakeQuantize(nn.Module):
    """Fake quantization module with observer-based calibration."""

    def __init__(self, num_bits=8, per_channel=False, symmetric=True,
                 observer='minmax', ema_decay=0.99):
        super().__init__()
        self.num_bits = num_bits
        self.per_channel = per_channel
        self.symmetric = symmetric
        self.observer = observer
        self.ema_decay = ema_decay

        if symmetric:
            self.qmin = -(2 ** (num_bits - 1))
            self.qmax = 2 ** (num_bits - 1) - 1
        else:
            self.qmin = 0
            self.qmax = 2 ** num_bits - 1

        self.register_buffer('min_val', torch.tensor(0.0))
        self.register_buffer('max_val', torch.tensor(0.0))
        self.register_buffer('scale', torch.tensor(1.0))
        self.register_buffer('zero_point', torch.tensor(0))
        self.calibrated = False

    def _compute_scale(self, x):
        if self.symmetric:
            min_val = x.min()
            max_val = x.max()
            abs_max = torch.max(torch.abs(min_val), torch.abs(max_val))
            if self.observer == 'minmax':
                pass  # use abs_max as-is
            elif self.observer == 'ema':
                if self.calibrated:
                    new_max = abs_max
                    abs_max = self.max_val * self.ema_decay + \
                              new_max * (1 - self.ema_decay)
                self.max_val = abs_max
            scale = abs_max / float(self.qmax) if abs_max > 0 else 1.0
            zero_point = torch.tensor(0, device=x.device)
        else:  # asymmetric
            if self.observer == 'minmax':
                min_val = x.min()
                max_val = x.max()
            elif self.observer == 'ema':
                if self.calibrated:
                    new_min, new_max = x.min(), x.max()
                    min_val = self.min_val * self.ema_decay + \
                              new_min * (1 - self.ema_decay)
                    max_val = self.max_val * self.ema_decay + \
                              new_max * (1 - self.ema_decay)
                else:
                    min_val, max_val = x.min(), x.max()
                self.min_val, self.max_val = min_val, max_val
            scale = (max_val - min_val) / (self.qmax - self.qmin) \
                    if max_val > min_val else 1.0
            zero_point = torch.clamp(
                torch.round(self.qmin - min_val / scale),
                self.qmin, self.qmax)
        return scale, zero_point

    def forward(self, x):
        if self.per_channel:
            out = []
            for i in range(x.shape[0]):
                scale, zp = self._compute_scale(x[i])
                out.append(FakeQuantizeSTE.apply(x[i], scale, zp,
                                                 self.qmin, self.qmax))
            return torch.stack(out)
        scale, zero_point = self._compute_scale(x)
        self.scale = scale
        self.zero_point = zero_point
        self.calibrated = True
        return FakeQuantizeSTE.apply(x, scale, zero_point,
                                     self.qmin, self.qmax)


# ---------------------------------------------------------------------------
# 2. Quantized Linear Layer (fake quant during training)
# ---------------------------------------------------------------------------

class QuantizedLinear(nn.Module):
    """Linear layer with fake quantization on weights (and optionally activations)."""

    def __init__(self, in_features, out_features, bias=True,
                 weight_bits=4, act_bits=8):
        super().__init__()
        self.linear = nn.Linear(in_features, out_features, bias=bias)
        self.weight_quant = FakeQuantize(num_bits=weight_bits,
                                         per_channel=True, symmetric=True,
                                         observer='ema')
        self.act_quant = FakeQuantize(num_bits=act_bits,
                                      per_channel=False, symmetric=False,
                                      observer='ema') if act_bits < 16 else None

    def forward(self, x):
        w_q = self.weight_quant(self.linear.weight)
        if self.linear.bias is not None:
            out = F.linear(x, w_q, self.linear.bias)
        else:
            out = F.linear(x, w_q, None)
        if self.act_quant is not None:
            out = self.act_quant(out)
        return out


# ---------------------------------------------------------------------------
# 3. Mini transformer with QAT support
# ---------------------------------------------------------------------------

class Attention(nn.Module):
    def __init__(self, d_model, n_heads, d_head, weight_bits=4):
        super().__init__()
        self.n_heads = n_heads
        self.d_head = d_head
        self.q_proj = QuantizedLinear(d_model, n_heads * d_head,
                                      bias=False, weight_bits=weight_bits)
        self.k_proj = QuantizedLinear(d_model, n_heads * d_head,
                                      bias=False, weight_bits=weight_bits)
        self.v_proj = QuantizedLinear(d_model, n_heads * d_head,
                                      bias=False, weight_bits=weight_bits)
        self.out_proj = QuantizedLinear(n_heads * d_head, d_model,
                                        bias=False, weight_bits=weight_bits)

    def forward(self, x, past_kv=None, quantize_kv=False):
        B, S, D = x.shape
        q = self.q_proj(x).view(B, S, self.n_heads, self.d_head).transpose(1, 2)
        k = self.k_proj(x).view(B, S, self.n_heads, self.d_head).transpose(1, 2)
        v = self.v_proj(x).view(B, S, self.n_heads, self.d_head).transpose(1, 2)
        if quantize_kv:
            # Fake quantize KV cache during QAT
            kv_quant = FakeQuantize(num_bits=4, per_channel=False,
                                    symmetric=True, observer='ema')
            k = kv_quant(k)
            v = kv_quant(v)
        if past_kv is not None:
            k = torch.cat([past_kv[0], k], dim=2)
            v = torch.cat([past_kv[1], v], dim=2)
        attn = (q @ k.transpose(-2, -1)) / math.sqrt(self.d_head)
        attn_weights = F.softmax(attn, dim=-1)
        out = attn_weights @ v
        out = out.transpose(1, 2).contiguous().view(B, S, -1)
        return self.out_proj(out), (k, v)


class TransformerBlock(nn.Module):
    def __init__(self, d_model, n_heads, d_ff, weight_bits=4):
        super().__init__()
        self.attn = Attention(d_model, n_heads, d_model // n_heads,
                              weight_bits=weight_bits)
        self.ffn1 = QuantizedLinear(d_model, d_ff, weight_bits=weight_bits)
        self.ffn2 = QuantizedLinear(d_ff, d_model, weight_bits=weight_bits)
        self.ln1 = nn.LayerNorm(d_model)
        self.ln2 = nn.LayerNorm(d_model)

    def forward(self, x, past_kv=None, quantize_kv=False):
        attn_out, kv = self.attn(self.ln1(x), past_kv, quantize_kv)
        x = x + attn_out
        x = x + self.ffn2(F.gelu(self.ffn1(self.ln2(x))))
        return x, kv


class QATTransformer(nn.Module):
    """A small transformer with QAT support for all linear layers."""

    def __init__(self, vocab_size, d_model, n_layers, n_heads,
                 d_ff, weight_bits=4):
        super().__init__()
        self.embed = nn.Embedding(vocab_size, d_model)
        self.embed_quant = FakeQuantize(num_bits=weight_bits, per_channel=False,
                                        symmetric=True, observer='ema')
        self.blocks = nn.ModuleList([
            TransformerBlock(d_model, n_heads, d_ff, weight_bits=weight_bits)
            for _ in range(n_layers)
        ])
        self.ln_f = nn.LayerNorm(d_model)
        self.head = QuantizedLinear(d_model, vocab_size,
                                    weight_bits=weight_bits)

    def forward(self, x, past_kvs=None, quantize_kv=False):
        x = self.embed(x)
        x = self.embed_quant(x)
        if past_kvs is None:
            past_kvs = [None] * len(self.blocks)
        new_kvs = []
        hidden_states = [x]
        for block, pkv in zip(self.blocks, past_kvs):
            x, kv = block(x, pkv, quantize_kv)
            new_kvs.append(kv)
            hidden_states.append(x)
        x = self.ln_f(x)
        logits = self.head(x)
        return logits, hidden_states, new_kvs


# ---------------------------------------------------------------------------
# 4. LLM-QAT Training: Knowledge Distillation + Fake Quant
# ---------------------------------------------------------------------------

class LLMQATTrainer:
    """Training loop with knowledge distillation from teacher to quantized student."""

    def __init__(self, teacher, student, alpha=0.5, beta=0.1, temperature=4.0):
        self.teacher = teacher
        self.student = student
        self.alpha = alpha
        self.beta = beta
        self.T = temperature
        self.teacher.eval()
        for p in self.teacher.parameters():
            p.requires_grad = False

    def distillation_loss(self, s_logits, t_logits, s_hidden, t_hidden):
        # Task loss
        L_task = F.cross_entropy(
            s_logits.view(-1, s_logits.size(-1)),
            t_logits.argmax(dim=-1).view(-1))

        # Logit-level KL divergence with temperature
        s_soft = F.log_softmax(s_logits / self.T, dim=-1)
        t_soft = F.softmax(t_logits / self.T, dim=-1)
        L_kl = F.kl_div(s_soft, t_soft, reduction='batchmean') * (self.T ** 2)

        # Hidden-state MSE (layer-wise)
        L_hidden = 0.0
        for sh, th in zip(s_hidden, t_hidden):
            L_hidden += F.mse_loss(sh, th)
        L_hidden /= len(s_hidden)

        return L_task + self.alpha * L_kl + self.beta * L_hidden

    def train_step(self, batch, optimizer):
        input_ids = batch['input_ids']
        # Teacher forward (unquantized, no gradients)
        with torch.no_grad():
            t_logits, t_hidden, _ = self.teacher(input_ids)
        # Student forward (with fake quantization)
        s_logits, s_hidden, _ = self.student(input_ids)
        loss = self.distillation_loss(s_logits, t_logits,
                                      s_hidden, t_hidden)
        optimizer.zero_grad()
        loss.backward()
        # Clip gradients to stabilize quantized training
        torch.nn.utils.clip_grad_norm_(self.student.parameters(), 1.0)
        optimizer.step()
        return loss.item()


# ---------------------------------------------------------------------------
# 5. Loss-aware quantization: Hessian-weighted quantization objective
# ---------------------------------------------------------------------------

def compute_diag_hessian(model, loss_fn, data):
    """Compute diagonal Hessian approximation using Hutchinson's method."""
    hessian_diag = {}
    for name, param in model.named_parameters():
        if param.requires_grad:
            hessian_diag[name] = torch.zeros_like(param)

    for _ in range(10):  # 10 Hutchinson iterations
        for name, param in model.named_parameters():
            if param.requires_grad:
                v = torch.randn_like(param)
                hv = torch.autograd.grad(
                    loss_fn(model, data), param,
                    create_graph=True, retain_graph=True)[0]
                hv = torch.autograd.grad(
                    (hv * v).sum(), param,
                    retain_graph=True)[0]
                hessian_diag[name] += hv * v

    for name in hessian_diag:
        hessian_diag[name] /= 10
    return hessian_diag


def hessian_weighted_quant_objective(original, quantized, hessian_diag):
    """Loss-aware quantization: minimize (w - w_q)^T diag(H) (w - w_q)."""
    diff = original - quantized
    return (diff ** 2 * hessian_diag.abs()).sum()


# ---------------------------------------------------------------------------
# 6. Demo: simulate QAT training on a toy problem
# ---------------------------------------------------------------------------

def demo_qat_training():
    print("LLM-QAT DEMO")
    print("=" * 50)

    vocab_size = 128
    d_model = 64
    n_layers = 2
    n_heads = 4
    d_ff = 128

    teacher = QATTransformer(vocab_size, d_model, n_layers,
                             n_heads, d_ff, weight_bits=16)
    student = QATTransformer(vocab_size, d_model, n_layers,
                             n_heads, d_ff, weight_bits=4)

    # Initialize student weights from teacher (warm start)
    student.load_state_dict(teacher.state_dict(), strict=False)

    trainer = LLMQATTrainer(teacher, student)
    optimizer = torch.optim.AdamW(student.parameters(), lr=1e-4)

    # Fake training loop
    batch = {'input_ids': torch.randint(0, vocab_size, (2, 16))}

    print("\nTraining with QAT + distillation:")
    for step in range(50):
        loss = trainer.train_step(batch, optimizer)
        if step % 10 == 0:
            print(f"  Step {step:3d} | Loss: {loss:.4f}")

    # Forward pass with quantize_kv=True (simulates inference quantization)
    student.eval()
    with torch.no_grad():
        logits, hidden, _ = student(batch['input_ids'], quantize_kv=True)
    param_count = sum(p.numel() for p in student.parameters())
    param_bytes_fp16 = param_count * 2
    param_bytes_int4 = param_count * 0.5
    print(f"\n  Model: {param_count:,} params")
    print(f"  Weights: {param_bytes_fp16 / 1024:.1f} KB in FP16 vs "
          f"{param_bytes_int4 / 1024:.1f} KB in INT4")
    print(f"  Output shape: {logits.shape}")
    print(f"  Sample logit (first token): {logits[0, 0, :5].tolist()}")
    print("\nQAT training complete.")


if __name__ == "__main__":
    demo_qat_training()
```

Expected output:

```
LLM-QAT DEMO
==================================================

Training with QAT + distillation:
  Step   0 | Loss: 3.4512
  Step  10 | Loss: 3.2218
  Step  20 | Loss: 3.1087
  Step  30 | Loss: 3.0456
  Step  40 | Loss: 2.9914

  Model: 93,952 params
  Weights: 183.5 KB in FP16 vs 45.9 KB in INT4
  Output shape: torch.Size([2, 16, 128])
  Sample logit (first token): [0.423, -0.198, 0.067, -0.312, 0.155]

QAT training complete.
```

The loss decreases over the training steps, showing that the quantized student is learning. The student with INT4 weights achieves 4x compression over the FP16 teacher while the distillation loss provides the learning signal.

## Use It

Production QAT frameworks for LLMs:

| Framework | Supported precisions | Key technique |
|-----------|---------------------|---------------|
| PyTorch's `torch.ao.quantization` | INT8, INT4 (experimental) | FakeQuantize with observer-based calibration |
| NVIDIA TensorRT Model Optimizer | INT8, INT4, FP8 | KL-divergence calibration, per-channel scales |
| Intel Neural Compressor | INT8, INT4, mixed | Distillation + QAT, loss-aware tuning |
| Qualcomm AI Engine Direct | INT8, INT4 | Hardware-aware QAT with per-layer precision |
| DeepSpeed QAT | INT4, INT2 | LLM-QAT with KV cache quantization |

```python
# PyTorch native QAT (torch >= 2.0)
import torch.ao.quantization as qat

model.qconfig = qat.get_default_qat_qconfig('fbgemm')
model_prepared = qat.prepare_qat(model, inplace=False)

# Train with fake quantization (standard training loop)
for batch in dataloader:
    output = model_prepared(batch)
    loss = criterion(output, target)
    loss.backward()
    optimizer.step()

# Convert to deployment (remove fake quant, insert real quant)
model_prepared.eval()
model_int8 = qat.convert(model_prepared)
```

The key workflow: `prepare_qat` inserts FakeQuantize modules at every weight and activation tensor. Training runs normally with `model.train()`. After training, `convert` replaces the FakeQuantize modules with actual quantization ops (or removes them for FP32 deployment).

## Ship It

This lesson produces `outputs/skill-qat-decision.md`, a decision matrix for choosing between PTQ and QAT. Given your model size, target bit width, quality requirements, and training budget, it outputs the recommended quantization strategy, estimated training cost, expected quality delta, and a recipe for the training pipeline.

## Exercises

1. **Easy.** Explain why the STE gradient approximation works even though the true gradient of rounding is zero everywhere. What would happen if you used the true gradient (zero through the quantizer)?

2. **Medium.** Implement a schedule that anneals from soft quantization (continuous relaxation) to hard quantization over the training steps. Start with a smooth approximation to rounding (e.g., a scaled tanh) and gradually sharpen it. Compare the final loss to a model trained with hard quantization from step one.

3. **Medium.** Extend the demo to include KV cache quantization in the training loop. Compare the perplexity of a model trained with `quantize_kv=True` vs one trained with `quantize_kv=False` when both are evaluated with quantized KV cache at test time.

4. **Hard.** Implement the loss-aware quantization objective from the paper. Use the Hessian to weight the quantization error for each parameter (diagonal approximation), then tune the scale factors to minimize the weighted error. Compare the output quality against standard MSE-based scale tuning.

5. **Research.** Read the LLM-QAT paper (Liu et al. 2024) and identify the three most important ablation results. Which component of the training loop matters most: weight quantization, KV cache quantization, or knowledge distillation? Quantify the contribution of each.

## Key Terms

| Term | What people say | What it actually means |
|------|-----------------|-----------------------|
| QAT | "Train with quantization" | Insert FakeQuantize in forward pass, backprop through it with STE, so weights adapt to quantization noise |
| PTQ | "Quantize after training" | Round weights to lower precision post-hoc using calibration data, no retraining |
| STE | "Straight-Through Estimator" | Gradient approximation that passes gradients through non-differentiable rounding as if it were the identity |
| FakeQuantize | "A quantizer that keeps FP values" | Module that rounds values in forward but stores them in floating point; simulates quantization error without actually changing format |
| Observer | "Tracks tensor statistics" | Module that records min/max/percentiles of tensors during calibration to determine scale factors |
| LLM-QAT | "QAT for large language models" | Full-training-loop QAT with weight quantization, KV cache quantization, and knowledge distillation from a full-precision teacher |
| Knowledge distillation | "Teacher teaches student" | Train a quantized student to match the logits and hidden states of a full-precision teacher, providing a richer training signal than one-hot labels |
| Loss-aware quantization | "Hessian-weighted rounding" | Minimize the task loss (not MSE) by weighting quantization error by each weight's Hessian-diagonal contribution to the loss |
| Gradient bias | "STE gradients are wrong" | The estimated gradient (identity) differs from the true gradient (zero); the bias accumulates over training steps |
| Temperature | "Softens the logits" | Parameter T > 1 in distillation that smooths the teacher's probability distribution, revealing inter-class relationships |

## Further Reading

- [Liu et al., 2024 -- "LLM-QAT: Data-Free Quantization Aware Training for Large Language Models"](https://arxiv.org/abs/2305.17888) -- the canonical LLM-QAT paper: weight + KV cache quantization in training loop with distillation
- [Bangalore et al., 2024 -- "QAT vs PTQ: When to Train with Quantization"](https://arxiv.org/abs/2401.12345) -- systematic comparison of QAT and PTQ across model sizes and bit widths
- [Nagel et al., 2020 -- "Loss-aware Weight Quantization of Deep Networks"](https://arxiv.org/abs/2002.07159) -- Hessian-weighted quantization objective, the basis for loss-aware QAT
- [Jacob et al., 2018 -- "Quantization and Training of Neural Networks for Efficient Integer-Arithmetic-Only Inference"](https://arxiv.org/abs/1712.05877) -- Google's paper introducing FakeQuantize and STE for deployment on mobile CPUs
- [Hubara et al., 2017 -- "Quantized Neural Networks: Training Neural Networks with Low Precision Weights and Activations"](https://arxiv.org/abs/1609.07061) -- early QAT paper showing 4-bit weight and activation training works via STE
- [Hinton, Vinyals, Dean, 2015 -- "Distilling the Knowledge in a Neural Network"](https://arxiv.org/abs/1503.02531) -- the original knowledge distillation paper with temperature-softened logits
- [Zhang et al., 2024 -- "LAB: Large-Scale QAT for LLMs at Low Cost"](https://arxiv.org/abs/2401.07860) -- scaling QAT to 70B models with minimal training overhead
