---
id: 02-pytorch-tensors
slug: /ai-engineering-placement/09-deep-learning-pytorch/02-pytorch-tensors
title: "PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting"
sidebar_label: "PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting"
sidebar_position: 117
---
<!-- Clear Language: Keep sentences under 50 words -->
# PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Create and manipulate PyTorch tensors with various data types |
| LO2 | Understand tensor operations: indexing, slicing, reshaping, broadcasting |
| LO3 | Implement automatic differentiation using autograd |
| LO4 | Manage devices: CPU, CUDA (GPU), MPS, data transfer |
| LO5 | Apply tensor operations for neural network computations |
| LO6 | Understand in-place operations, views, and memory management |

## Introduction

Deep learning powers modern AI breakthroughs. PyTorch is the framework of choice for researchers and production engineers alike. This module covers neural networks, CNNs, RNNs, and deployment best practices.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

## Theory

Understanding pytorch tensors is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how pytorch tensors works in practice.

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 2.1 | Tensor Basics | Creation, data types, shape, device, requires_grad |
| 2.2 | Indexing & Slicing | Advanced indexing, boolean masks, gather/scatter |
| 2.3 | Reshaping & Broadcasting | view, reshape, transpose, expand, broadcasting rules |
| 2.4 | Autograd | requires_grad, backward, grad, no_grad, detach |
| 2.5 | Device Management | GPU transfer, multi-GPU, mixed precision, pinned memory |
| 2.6 | Advanced Operations | einsum, matrix multiply, convolution, FFT |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Tensor Creation] --> B[Data Type & Device]
    B --> C[Operations]
    C --> D[Reshape / Broadcast]
    D --> E[Autograd Graph]
    E --> F[.backward()]
    F --> G[.grad]
    G --> H[Optimizer Step]
    H --> I[.zero_grad()]
    I --> E
```

## 2.1 Tensor Basics

Tensors are multi-dimensional arrays, the fundamental data structure in PyTorch.

```python
import torch
import numpy as np
from typing import List, Tuple

class TensorBasics:
    @staticmethod
    def creation_methods():
        # From Python list
        a = torch.tensor([[1, 2], [3, 4]])
        print(f"From list: {a.shape}, dtype={a.dtype}")

        # From NumPy
        b = torch.from_numpy(np.array([1.0, 2.0, 3.0]))
        print(f"From numpy: {b}, dtype={b.dtype}")

        # Pre-allocated
        zeros = torch.zeros(2, 3)
        ones = torch.ones(2, 3)
        rand = torch.randn(2, 3)  # Standard normal
        eye = torch.eye(3)        # Identity
        arange = torch.arange(0, 10, 2)  # [0, 2, 4, 6, 8]
        linspace = torch.linspace(0, 1, 5)  # [0, 0.25, 0.5, 0.75, 1]

        print(f"zeros: {zeros.shape}, ones: {ones.shape}")
        print(f"arange: {arange}, linspace: {linspace}")

    @staticmethod
    def data_types():
        types = {
            "float32": torch.float32,
            "float64": torch.float64,
            "int32": torch.int32,
            "int64": torch.int64,
            "bool": torch.bool,
            "bfloat16": torch.bfloat16,
        }
        for name, dtype in types.items():
            try:
                t = torch.tensor([1, 2, 3], dtype=dtype)
                print(f"{name:12s}: {t.dtype}, element_size={t.element_size()} bytes")
            except Exception as e:
                print(f"{name:12s}: not supported on this device")

tb = TensorBasics()
tb.creation_methods()
tb.data_types()
```

**Tensor attributes**: `shape`, `dtype`, `device`, `requires_grad`, `grad`, `grad_fn`

---

## 2.2 Indexing & Slicing

PyTorch supports NumPy-style indexing with additional advanced features.

```python
class TensorIndexing:
    @staticmethod
    def basic_indexing():
        x = torch.arange(12).reshape(3, 4)
        print(f"x:\n{x}")
        print(f"x[0]: {x[0]}")           # First row
        print(f"x[:, 1]: {x[:, 1]}")     # Second column
        print(f"x[1:, :2]:\n{x[1:, :2]}")  # Submatrix

    @staticmethod
    def advanced_indexing():
        x = torch.arange(12).reshape(3, 4)
        rows = torch.tensor([0, 2])
        cols = torch.tensor([1, 3])
        print(f"x[rows, cols]: {x[rows, cols]}")  # Advanced indexing

        # Boolean masking
        mask = x > 5
        print(f"x > 5: {x[mask]}")

        # where
        result = torch.where(x > 5, x * 2, x)
        print(f"where(x > 5, x*2, x):\n{result}")

    @staticmethod
    def gather_scatter():
        # Gather: collect values at specified indices
        x = torch.arange(12).reshape(3, 4)
        indices = torch.tensor([[0, 1], [2, 3], [1, 0]])
        gathered = torch.gather(x, dim=1, index=indices)
        print(f"Gather: {gathered}")

        # Scatter: assign values to specified indices
        output = torch.zeros(3, 4)
        src = torch.tensor([[100], [200], [300]])
        indices = torch.tensor([[1], [2], [0]])
        output.scatter_(dim=1, index=indices, src=src)
        print(f"Scatter: {output}")

ti = TensorIndexing()
ti.basic_indexing()
ti.advanced_indexing()
```

---

## 2.3 Reshaping & Broadcasting

```python
class TensorReshaping:
    @staticmethod
    def reshape_methods():
        x = torch.arange(12)
        print(f"Original: {x.shape}")

        # view — must be contiguous
        v = x.view(3, 4)
        print(f"view(3,4): {v.shape}")

        # reshape — works on non-contiguous tensors
        r = x.reshape(2, 6)
        print(f"reshape(2,6): {r.shape}")

        # transpose
        t = v.transpose(0, 1)
        print(f"transpose: {t.shape}")

        # permute — general transposition
        x3d = torch.arange(24).reshape(2, 3, 4)
        p = x3d.permute(2, 0, 1)
        print(f"permute(2,0,1): {p.shape}")

        # unsqueeze / squeeze
        print(f"unsqueeze(0): {x.unsqueeze(0).shape}")
        print(f"squeeze(): {torch.randn(1, 3, 1, 4).squeeze().shape}")

        # expand / repeat
        a = torch.tensor([[1], [2], [3]])
        print(f"expand: {a.expand(3, 4).shape}")
        print(f"repeat: {a.repeat(1, 3).shape}")

    @staticmethod
    def broadcasting_rules():
        """Broadcasting: PyTorch aligns trailing dimensions, expands size-1 dims"""
        a = torch.tensor([[1, 2, 3]])      # shape (1, 3)
        b = torch.tensor([[4], [5], [6]])  # shape (3, 1)
        c = a + b                          # broadcasts to (3, 3)
        print(f"Broadcast result:\n{c}")

        # Rules:
        # 1. Align trailing dimensions
        # 2. Size-1 dimensions are stretched to match
        # 3. If dimensions don't match and neither is 1, error

        try:
            x = torch.ones(3, 2)
            y = torch.ones(2, 3)
            z = x + y  # Error: incompatible shapes
        except RuntimeError as e:
            print(f"Broadcasting error: {e}")

tr = TensorReshaping()
tr.reshape_methods()
tr.broadcasting_rules()
```

**Broadcasting rules**:
1. Align shapes from the right: (3,1,2) + (2,) → (3,1,2) + (1,1,2)
2. Stretch any dimension of size 1 to match
3. Error if dimensions differ and neither is 1

---

## 2.4 Autograd

Autograd enables automatic gradient computation for backpropagation.

```python
class AutogradDemo:
    @staticmethod
    def basic_autograd():
        x = torch.tensor(3.0, requires_grad=True)
        w = torch.tensor(2.0, requires_grad=True)
        b = torch.tensor(1.0, requires_grad=True)

        y = w * x + b
        loss = (y - 10) ** 2
        loss.backward()

        print(f"dy/dx = {x.grad.item():.2f}")
        print(f"dy/dw = {w.grad.item():.2f}")
        print(f"dy/db = {b.grad.item():.2f}")

        # Gradients accumulate — must zero
        loss.backward()
        print(f"After second backward (accumulated): w.grad = {w.grad.item():.2f}")

    @staticmethod
    def autograd_features():
        x = torch.randn(3, requires_grad=True)

        # no_grad — disable gradient tracking
        with torch.no_grad():
            y = x * 2
            print(f"no_grad: requires_grad = {y.requires_grad}")

        # detach — create a tensor that doesn't require grad
        z = x.detach()
        print(f"detach: requires_grad = {z.requires_grad}")

        # retain_graph — keep graph after backward
        a = torch.tensor(2.0, requires_grad=True)
        b = a ** 2
        b.backward(retain_graph=True)
        print(f"retain_graph: a.grad = {a.grad}")
        b.backward()  # Would error without retain_graph=True above
        print(f"second backward: a.grad = {a.grad} (accumulated)")

    @staticmethod
    def custom_autograd():
        class CustomSquare(torch.autograd.Function):
            @staticmethod
            def forward(ctx, x):
                ctx.save_for_backward(x)
                return x ** 2

            @staticmethod
            def backward(ctx, grad_output):
                x, = ctx.saved_tensors
                return grad_output * 2 * x

        x = torch.tensor(3.0, requires_grad=True)
        custom_fn = CustomSquare.apply
        y = custom_fn(x)
        y.backward()
        print(f"Custom autograd: dy/dx = {x.grad}")

ad = AutogradDemo()
ad.basic_autograd()
ad.custom_autograd()
```

**Autograd essentials**:
- `requires_grad=True` enables gradient tracking
- `backward()` computes gradients
- `grad` accumulates gradients (zero manually)
- `torch.no_grad()` disables tracking for inference
- `.detach()` creates a tensor outside the graph

---

## 2.5 Device Management

```python
class DeviceManagement:
    @staticmethod
    def device_operations():
        # Check available devices
        print(f"CUDA available: {torch.cuda.is_available()}")
        if torch.cuda.is_available():
            print(f"CUDA device count: {torch.cuda.device_count()}")
            print(f"CUDA device name: {torch.cuda.get_device_name(0)}")

        device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

        # Create tensor on device
        x = torch.randn(3, 3, device=device)
        print(f"Tensor device: {x.device}")

        # Move tensor between devices
        cpu_tensor = x.cpu()
        if torch.cuda.is_available():
            gpu_tensor = cpu_tensor.cuda()
            print(f"Moved to GPU: {gpu_tensor.device}")

        # to() method
        y = torch.randn(3, 3)
        y = y.to(device)
        print(f"to(device): {y.device}")

    @staticmethod
    def mixed_precision():
        if not torch.cuda.is_available():
            print("Mixed precision requires CUDA")
            return

        from torch.cuda.amp import autocast, GradScaler
        scaler = GradScaler()
        model = torch.nn.Linear(10, 2).cuda()
        data = torch.randn(32, 10).cuda()
        target = torch.randn(32, 2).cuda()
        optimizer = torch.optim.SGD(model.parameters(), lr=0.01)

        with autocast():
            output = model(data)
            loss = torch.nn.functional.mse_loss(output, target)

        scaler.scale(loss).backward()
        scaler.step(optimizer)
        scaler.update()
        print("Mixed precision step completed")

    @staticmethod
    def pin_memory():
        """Pinned memory for faster CPU->GPU transfer"""
        x = torch.randn(1000, 1000)
        pinned = x.pin_memory()
        print(f"Pinned memory: {pinned.is_pinned()}")

dm = DeviceManagement()
dm.device_operations()
```

---

## 2.6 Advanced Operations

```python
class AdvancedTensorOps:
    @staticmethod
    def matrix_operations():
        x = torch.randn(3, 4)
        y = torch.randn(4, 5)

        # Matrix multiplication
        mm = x @ y
        matmul = torch.mm(x, y)
        print(f"matmul shape: {mm.shape}")

        # Batched matmul
        batch = torch.randn(10, 3, 4)
        batch_y = torch.randn(10, 4, 5)
        bmm = torch.bmm(batch, batch_y)
        print(f"batched matmul: {bmm.shape}")

        # Einsum — Einstein summation
        a = torch.randn(2, 3, 4)
        b = torch.randn(2, 4, 5)
        result = torch.einsum("ijk,ikl->ijl", a, b)
        print(f"einsum shape: {result.shape}")

    @staticmethod
    def convolution_ops():
        batch, channels, height, width = 1, 3, 32, 32
        x = torch.randn(batch, channels, height, width)

        conv = torch.nn.Conv2d(in_channels=3, out_channels=16, kernel_size=3, padding=1)
        output = conv(x)
        print(f"Conv2d output shape: {output.shape}")

        # Manual convolution via unfold
        patches = torch.nn.functional.unfold(x, kernel_size=3, padding=1)
        print(f"Unfolded patches shape: {patches.shape}")

    @staticmethod
    def fft_ops():
        if not torch.cuda.is_available():
            # 1D FFT
            x = torch.randn(100)
            X = torch.fft.fft(x)
            magnitude = torch.abs(X)
            phase = torch.angle(X)
            reconstructed = torch.fft.ifft(X)
            print(f"FFT: input={x.shape}, output={X.shape}")
            print(f"Max reconstruction error: {torch.max(torch.abs(x - reconstructed.real)):.6f}")

            # 2D FFT
            img = torch.randn(32, 32)
            img_fft = torch.fft.fft2(img)
            img_shifted = torch.fft.fftshift(img_fft)
            print(f"2D FFT: {img_fft.shape}, shifted: {img_shifted.shape}")

ato = AdvancedTensorOps()
ato.matrix_operations()
ato.convolution_ops()
ato.fft_ops()
```

---

## TypeScript Parallel

```typescript
// PyTorch-like tensor operations in TypeScript (conceptual)
class TensorTS {
  data: number[][];
  shape: number[];
  requiresGrad: boolean;
  grad: number[][] | null = null;

  constructor(data: number[][], requiresGrad = false) {
    this.data = data;
    this.shape = [data.length, data[0].length];
    this.requiresGrad = requiresGrad;
  }

  static zeros(rows: number, cols: number): TensorTS {
    return new TensorTS(Array.from({ length: rows }, () => new Array(cols).fill(0)));
  }

  static randn(rows: number, cols: number): TensorTS {
    const data = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => {
        let u = 0, v = 0;
        while (u === 0) u = Math.random();
        while (v === 0) v = Math.random();
        return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
      })
    );
    return new TensorTS(data);
  }

  matmul(other: TensorTS): TensorTS {
    const result = Array.from({ length: this.data.length }, (_, i) =>
      Array.from({ length: other.data[0].length }, (_, j) =>
        this.data[i].reduce((sum, val, k) => sum + val * other.data[k][j], 0)
      )
    );
    return new TensorTS(result);
  }
}

const aTS = TensorTS.randn(3, 4);
const bTS = TensorTS.randn(4, 5);
const cTS = aTS.matmul(bTS);
console.log(`Tensor matmul shape: [${cTS.shape}]`);
```

## Summary

- Tensors are multi-dimensional arrays with shape, dtype, device, and gradient tracking
- Tensor creation: from list, numpy, or pre-allocated (zeros, ones, randn, arange)
- Indexing: basic (x[0]), advanced (x[rows, cols]), boolean (x[mask]), gather/scatter
- Reshaping: view (contiguous), reshape (any), transpose, permute, unsqueeze, squeeze
- Broadcasting aligns trailing dimensions and stretches size-1 dimensions
- Autograd builds a dynamic computation graph; backward() computes gradients
- Device management: .to(device), .cuda(), .cpu(), mixed precision (amp)
- Common operations: matmul (@), bmm, einsum, conv2d, unfold, fft
- Gradients accumulate — zero them with optimizer.zero_grad() or .grad.zero_()
- Pin memory for faster CPU->GPU transfer; use no_grad() for inference

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Create tensor from data | torch.tensor(data) | np.array → torch.from_numpy (shares memory) |
| Reshape any tensor | .reshape() over .view() | .view() on non-contiguous tensors |
| Disable gradients | torch.no_grad() | .detach() for large blocks |
| GPU memory management | .to(device) at batch level | Moving tensors repeatedly |
| Mixed precision | torch.cuda.amp | Full float32 for everything |

## Interview Q&A

<details class="tp-qa-card" data-qid="dl09-q1"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q1: What is the difference between view() and reshape() in PyTorch?</summary><div class="tp-qa-answer"><p>view() returns a new view (shares memory) but requires the tensor to be contiguous in memory. reshape() returns a view if possible, otherwise creates a copy (works on non-contiguous tensors). Always prefer reshape() over view() for safety. Use .contiguous() before view() if you need to ensure contiguous memory. Transposed tensors are typically non-contiguous.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q2"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q2: How does broadcasting work in PyTorch?</summary><div class="tp-qa-answer"><p>PyTorch broadcasting aligns shapes from the rightmost dimension. Any dimension of size 1 is stretched to match the corresponding dimension. If dimensions differ and neither is 1, an error occurs. Example: (3,1,2) + (2,) → (3,1,2) + (1,1,2) → both broadcast to (3,1,2). Broadcasting avoids explicit expansion, saving memory. Use it instead of .expand() when possible.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q3"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q3: What is the purpose of detach() and when would you use it?</summary><div class="tp-qa-answer"><p>detach() creates a new tensor that shares data with the original but doesn't require gradients and is removed from the computation graph. Use detach() when: <strong>1)</strong> You want to log/visualize intermediate values without storing the graph. <strong>2)</strong> You need a tensor's value as a NumPy array (requires detach + cpu). <strong>3)</strong> You want to stop gradient flow through a path. <strong>4)</strong> Implementing GANs (detach discriminator from generator).</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q4"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q4: How does PyTorch's autograd differ from TensorFlow's?</summary><div class="tp-qa-answer"><p>PyTorch uses <strong>dynamic</strong> computation graphs (built on-the-fly each forward pass). TensorFlow (2.x with eager mode) is similar, but TF 1.x used <strong>static</strong> graphs (build once, execute many). Dynamic graphs: more flexible for variable-length inputs, easier debugging, Pythonic control flow. Static graphs: better optimization, easier deployment, faster execution. PyTorch 2.0 adds torch.compile for graph optimization.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q5"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q5: What is the difference between torch.no_grad() and model.eval()?</summary><div class="tp-qa-answer"><p>torch.no_grad(): disables gradient tracking entirely — reduces memory usage and speeds computation. Used for inference. model.eval(): sets the model to evaluation mode — affects dropout, batch norm, etc. (disables dropout, uses running stats for BN). Use both during inference: model.eval() + torch.no_grad(). model.train(): re-enables training behavior.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q6"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q6: How do you handle GPU out-of-memory errors?</summary><div class="tp-qa-answer"><p>Strategies: <strong>1)</strong> Reduce batch size. <strong>2)</strong> Use gradient accumulation (simulate larger batches). <strong>3)</strong> Use mixed precision training (amp — cuts memory by ~2x). <strong>4)</strong> Free memory: del, torch.cuda.empty_cache(). <strong>5)</strong> Use checkpointing (trade compute for memory). <strong>6)</strong> Reduce model size (fewer layers/units). <strong>7)</strong> Use in-place operations where safe. <strong>8)</strong> Monitor with nvidia-smi.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q7"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q7: What is the difference between torch.cat and torch.stack?</summary><div class="tp-qa-answer"><p>Both concatenate tensors. torch.cat joins existing dimensions: (3,4) + (3,4) → (6,4) (dim=0) or (3,8) (dim=1). torch.stack adds a new dimension: (3,4) + (3,4) → (2,3,4). stack requires all tensors to have the same shape. cat requires same shape in all dimensions except the joining dimension.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q8"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q8: What is the memory format of PyTorch tensors (channels-first vs channels-last)?</summary><div class="tp-qa-answer"><p>PyTorch uses channels-first (NCHW) by default: batch, channels, height, width. This is optimized for GPU convolution operations. TensorFlow uses channels-last (NHWC). PyTorch supports channels-last via to(memory_format=torch.channels_last), which can improve performance for some models. The memory format affects how data is laid out in memory but not the logical shape.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q9"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q9: How do you create a custom autograd Function?</summary><div class="tp-qa-argument"><p>Subclass torch.autograd.Function and implement static forward() and backward() methods. forward(): compute output, optionally save tensors for backward via ctx.save_for_backward(). backward(): receive grad_output, compute and return gradients w.r.t. inputs. Use ctx.needs_input_grad to check which gradients are needed. Custom functions enable operations not covered by standard PyTorch ops.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q10"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q10: What is torch.einsum and when would you use it?</summary><div class="tp-qa-answer"><p>torch.einsum (Einstein summation) expresses tensor operations using index notation. Example: einsum("ij,jk->ik", A, B) = matrix multiply. einsum("bchw,co->bowh", x, w) = convolution. Advantages: concise, general (supports any tensor operation), automatically handles broadcasting. Disadvantage: slower than specialized ops (mm, bmm, conv2d). Use einsum for prototyping, switch to specialized ops for production.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

## Chapter Quiz

**Q1**: Which method is safest for reshaping non-contiguous tensors?

a) view()
b) reshape()
c) transpose()
d) flatten()

<details class="tp-qa-card" data-qid="dl09-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) reshape()</strong></p><p>reshape() works on both contiguous and non-contiguous tensors.</p></div></details>

**Q2**: What does backward() compute?

a) Forward pass values
b) Gradients of loss w.r.t. all requires_grad tensors
c) Model predictions
d) Loss value only

<details class="tp-qa-card" data-qid="dl09-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Gradients of loss w.r.t. all requires_grad tensors</strong></p><p>backward() traverses the computation graph and accumulates gradients in .grad.</p></div></details>

**Q3**: What happens when you add tensors of shapes (3,1,2) and (2,)?

a) Error
b) Result shape (3,1,2)
c) Result shape (3,2,2)
d) Result shape (3,1,1)

<details class="tp-qa-card" data-qid="dl09-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Result shape (3,1,2)</strong></p><p>(2,) broadcasts to (1,1,2) to match (3,1,2).</p></div></details>

**Q4**: Which is NOT a valid way to move a tensor to GPU?

a) tensor.cuda()
b) tensor.to("cuda")
c) tensor.gpu()
d) tensor.to(device)

<details class="tp-qa-card" data-qid="dl09-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) tensor.gpu()</strong></p><p>The correct method is .cuda(), not .gpu().</p></div></details>

**Q5**: What does torch.no_grad() do?

a) Stops training
b) Disables gradient computation temporarily
c) Removes all gradients
d) Freezes model parameters

<details class="tp-qa-card" data-qid="dl09-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Disables gradient computation temporarily</strong></p><p>Used for inference to reduce memory and speed computation.</p></div></details>

## Exercises

**Easy** — Create a 5x5 tensor of random values. Extract the middle 3x3 block using slicing.

**Easy** — Given tensors of shape (3,4) and (4,5), compute their matrix product using @, torch.mm, and torch.matmul.

**Medium** — Implement a custom autograd function for the Swish activation (x * sigmoid(x)). Verify gradients match PyTorch's autograd.

**Hard** — Build a small CNN training loop with mixed precision (amp) and measure speed/memory improvement over float32.

**Hard** — Implement batched matrix multiplication manually using einsum and broadcasting. Compare performance with torch.bmm.

---

## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition

## Revision Notes

- - Core principle: Understand the fundamental concepts thoroughly
- - Implementation pattern: Practice with real code examples
- - Complexity: Know the time and space complexity
- - Application: Know when to use this in production systems
- - Interview: Frequently asked in technical interviews
- - Edge cases: Consider common failure scenarios
- - Related concepts: Connect to broader system design

## Placement Section

### Top 10 Interview Questions

#### Google Style

1. **Explain the core idea of PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting in under 60 seconds, then give a real-world analogy.** â€” Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?

2. **Design a minimal, well-typed function that demonstrates PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting.** â€” Interviewer checks: signature with type hints, edge cases, complexity, and a clean docstring. Follow-up: how does your design behave with empty or malformed input?

3. **What are the common pitfalls when engineers first learn ** â€” List 3-4, then explain how you would prevent each in a code review.

#### Amazon Style

4. **Describe a production bug caused by misunderstanding PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting. How did you diagnose and fix it?** â€” STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added.

5. **How would you scale a system that relies on PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting from 10 users to 10 million?** â€” Discuss bottlenecks, caching, monitoring, and when to redesign. Follow-up: what metrics would you track?

#### Microsoft Style

6. **Compare PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting with the closest alternative approach. When would you choose each?** â€” Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?

7. **Walk through how you would test a component that depends on PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting.** â€” Unit, integration, property-based tests; mocking boundaries; golden files for outputs.

#### NVIDIA Style

8. **How does PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting behave differently at scale â€” memory, throughput, or precision-wise?** â€” Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?

9. **How would you make an implementation of PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting run faster on GPU hardware?** â€” Batch operations, vectorization, avoiding Python loops, reducing data movement.

#### AI Startup Style

10. **Write the smallest possible implementation of PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting that is production-quality.** â€” Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?

### Resume Tips

- Name PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting explicitly in your skills section, paired with a measurable achievement ("Reduced X by 40% using PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting").
- Add a bullet describing a project that applies PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting to real data, with numbers.
- Mention the tools and libraries you used alongside PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting (linters, test frameworks, profiling tools).
- Keep resume bullets under 15 words and start each with an action verb.

### Interview Day Checklist

- Rehearse a 60-second explanation of PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting and one real-world analogy.
- Prepare one STAR story about debugging a PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting-related production issue.
- Review complexity and edge cases for the classic PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting interview problem.
- Have questions ready: how does the team apply PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting in production today?
- Test your environment (Python, editor, internet) 15 minutes before the interview.

## True/False

1. **True or False:** PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting builds directly on the fundamentals covered in the earlier chapters of this module. â€” **True.** Every advanced topic in this module assumes the core concepts from the previous chapters.
2. **True or False:** You should write at least one code example for PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting before moving to the next chapter. â€” **True.** Active recall with hands-on code beats passive reading for retention.
3. **True or False:** The complexity analysis for PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting is the same regardless of input size. â€” **False.** Complexity grows with input size; always state best, average, and worst case.
4. **True or False:** Edge cases (empty input, invalid input, boundary values) matter for PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting in production. â€” **True.** Most production bugs come from unhandled edge cases.
5. **True or False:** You should memorize the PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting chapter content once and never review it again. â€” **False.** Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall.

## Fill in the Blank

1. The chapter that covers PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting is Chapter ___ of this module. â€” Answer: check the module's table of contents.
2. The time complexity of the standard approach to PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting is ___. â€” Answer: review the theory section and state big-O notation.
3. The main edge case to handle when implementing PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting is ___. â€” Answer: empty or invalid input handling, as discussed in the chapter.
4. The tools commonly used to debug PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting issues are ___ and ___. â€” Answer: refer to the Debugging Guide section of this chapter.
5. The related topic that connects to PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting in the next chapter is ___. â€” Answer: see the Next Topic section.

## Scenario Questions

1. **Scenario:** A teammate ships a change involving PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting that breaks production at 3 AM. â€” Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist.

2. **Scenario:** Your implementation of PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting is correct but too slow for the required latency. â€” Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes.

3. **Scenario:** A new hire asks you to explain PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting in five minutes before a customer demo. â€” Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo.

4. **Scenario:** Your team's codebase has three different patterns for PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting and you must standardize. â€” Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it.

## Output Questions

1. **What is the output of the simplest correct implementation of PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting on an empty input?** â€” Trace through the code: it should return the documented default (None, 0, empty collection) without raising.
2. **What is the output when the input is at the boundary value?** â€” Check off-by-one errors and inclusive/exclusive bounds in the chapter's examples.
3. **What does the implementation return when given invalid input types?** â€” With type hints and validation, it raises a clear error; without, it may fail silently.
4. **What is the output for the sample input given in the chapter's Examples section?** â€” Re-run the chapter's example code and compare against the documented output.
5. **What is the time complexity output when you profile the implementation at 10x input size?** â€” Expect the curve matching the chapter's complexity analysis (linear, quadratic, log-linear).

## Difficulty Level

| Level | Time | What It Takes |
|-------|------|---------------|
| Beginner | 1-2 sessions | Read theory, run the chapter examples, solve the Easy exercises |
| Intermediate | 3-5 sessions | Complete Medium exercises, explain PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting to someone else |
| Advanced | 1+ week | Solve Hard exercises, optimize for real datasets, answer interview follow-ups |

## Tips & Tricks

- Always write a one-line example of PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting from memory before opening the chapter â€” active recall first.
- Use the chapter's Revision Notes as a checklist: you have mastered PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting when you can explain each bullet.
- Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus.
- For interviews, practice explaining PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting twice: once with a technical audience, once with a non-technical audience.
- Keep a personal examples file where you collect your own PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting snippets; interviewers love original examples.

## Memory Tricks

- **Acronym**: build a mnemonic from the 5 key concepts of PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting listed in the Chapter at a Glance table.
- **Story**: link PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting to a familiar story â€” the analogy in the Visual Analogy section is designed to stick.
- **Number anchor**: remember the complexity of PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting by connecting it to a known algorithm of the same class.
- **Color code**: highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing.
- **Teach-back**: explain PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting to an imaginary junior engineer for 2 minutes â€” gaps in your explanation are gaps in memory.

## Further Reading

- Official documentation for the primary tool or library used in this chapter
- The chapter referenced in Related Topics for the next-level treatment of PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting
- The classic textbook chapter on PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting (check the Research References below)
- Two blog posts from engineers who debugged real PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting problems in production
- The repository of the open-source project that implements PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting

## Related Topics

- The previous chapter in this module (see table of contents) â€” foundational for PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting
- The next chapter (see Next Topic below) â€” builds on PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting
- The system design chapters in Module 07 â€” how PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting fits into production architectures
- The interview preparation module â€” how PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting is asked in screening rounds
- The capstone project â€” where PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting is applied end-to-end

## FAQs

1. **Do I need to memorize all of PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting, or understand the big picture?** â€” Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth.
2. **What if I get stuck on an exercise?** â€” Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day.
3. **How much time should I spend on ** â€” Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation.
4. **Is PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting asked in interviews?** â€” Yes â€” the Interview Q&A and Placement Section list the exact question styles used by top companies.
5. **What's the fastest way to master ** â€” Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days.

## Important Notes

- PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting is a core requirement for the rest of this module â€” do not skip the examples.
- Always analyze complexity (time and space) when working with PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting.
- Production correctness means handling edge cases, not just the happy path.
- Interview answers should start with the definition, then the example, then the trade-offs.
- Revisit this chapter after finishing the module; the context from later chapters deepens understanding.

## Historical Context

- PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting emerged as a standard practice because early systems failed without it â€” understanding why helps you explain it in interviews.
- The tools used for PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting today evolved from simpler versions; the chapter covers the modern, recommended approach.
- Interviewers value knowing one historical fact about PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting â€” it shows genuine interest, not just cramming.
- The library/tooling ecosystem around PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting changes quickly; focus on fundamentals that remain stable.

## Security Considerations

- Never trust external input: validate and sanitize data before processing PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting.
- Avoid `eval()` and dynamic code execution on untrusted strings.
- Log errors without leaking sensitive data (keys, PII, internal paths).
- For API contexts, add rate limiting and input size limits.
- Review the chapter's code examples for injection or overflow risks before using them verbatim.

## ML Intuition

- PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation.
- Understanding PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting helps you debug why a model misbehaves â€” most ML bugs are data bugs, not model bugs.
- In production ML, the PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting concepts from this chapter map directly to NumPy/PyTorch operations on tensors.
- When optimizing ML systems, PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting skills let you profile and fix the data path, not just the training loop.
- Interview follow-up: how would you apply PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting to a dataset of 10 million records? â€” Batching and vectorization.

## Analogies

- **PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting is like a recipe**: the theory is the ingredients, the examples are the cooking steps, and the exercises are your own kitchen practice.
- **Complexity is like a delivery route**: a linear route visits each stop once; a nested route revisits stops, and you feel it at scale.
- **Edge cases are like weather**: the happy path is a sunny day; production is the storm â€” build for the storm.
- **The chapter roadmap is a journey map**: each section is a checkpoint; skipping one means getting lost later in the module.

## Capstone Project Link

- [Module Capstone: End-to-End Project](https://github.com/Raushan666java/ai-engineering-journey) â€” this chapter contributes the PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting skills used in the module's capstone project. Complete the exercises here before starting the capstone.

## Flashcards

<details class="tp-qa-card" data-qid="09deeplearningpytorch-02pytorchtensors-flash1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Which method is safest for reshaping non-contiguous tensors?
  </summary>
  <div class="tp-qa-answer">
    <p>b) reshape()</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="09deeplearningpytorch-02pytorchtensors-flash2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    What does backward() compute?
  </summary>
  <div class="tp-qa-answer">
    <p>b) Gradients of loss w.r.t. all requires_grad tensors</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="09deeplearningpytorch-02pytorchtensors-flash3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    What happens when you add tensors of shapes (3,1,2) and (2,)?
  </summary>
  <div class="tp-qa-answer">
    <p>b) Result shape (3,1,2)</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="09deeplearningpytorch-02pytorchtensors-flash4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Which is NOT a valid way to move a tensor to GPU?
  </summary>
  <div class="tp-qa-answer">
    <p>c) tensor.gpu()</p>
  </div>
</details>

<details class="tp-qa-card" data-qid="09deeplearningpytorch-02pytorchtensors-flash5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    What does torch.no_grad() do?
  </summary>
  <div class="tp-qa-answer">
    <p>b) Disables gradient computation temporarily</p>
  </div>
</details>

## Research References

- Official documentation of the primary library for PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting (linked in Further Reading)
- The classic paper or textbook chapter introducing PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting (see References below)
- The standard library reference for PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting-related functions
- Engineering blog posts from companies running PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting in production at scale
- PEPs and RFCs where applicable (Python and networking standards)

## Open-Source Tools

- The primary library used in this chapter (see the code examples)
- Python standard library modules used in the examples (check the imports)
- Testing: pytest for unit tests of PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting code
- Linting and formatting: ruff + black
- Profiling: cProfile or py-spy for performance work on PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting

## Debugging Guide

- Start with `print()` or a debugger to inspect intermediate values in PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting code.
- Reproduce the failure with the smallest possible input before changing code.
- Check the common failure modes listed in Common Mistakes â€” most bugs are listed there.
- For performance problems, profile before optimizing: measure, then fix.
- When stuck, re-read the chapter's Examples and compare line by line with your code.
- Use `pdb` or your IDE's debugger to step through the PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting example code.

## Mock Interview Section

**Round 1 â€” Screening (15 min)**
- Explain PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting in 60 seconds.
- Write a minimal working example of PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting.
- What is the complexity of your example?

**Round 2 â€” Coding (45 min)**
- Solve the Medium exercise from this chapter under time pressure.
- State your assumptions, then implement with type hints.
- Test with edge cases: empty input, boundary values, invalid input.

**Round 3 â€” Behavioral + System (30 min)**
- Tell me about a time you debugged a PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting problem in a project.
- How would you design a system where PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting is used at scale?
- What metrics would you monitor?

**Evaluation rubric**: correctness (40%), communication (25%), edge cases (20%), complexity analysis (15%).

## Optimized Implementation

`python
from typing import Any, Optional

def demonstrate_topic(input_data: list[Any]) -> Optional[float]:
    """Runnable scaffold for PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting.

    Replace the body with the optimized implementation from the chapter,
    keeping type hints, docstring, and edge-case handling.
    """
    if not input_data:
        return None
    # Step 1: validate input types
    # Step 2: apply the core PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting logic from the Examples section
    # Step 3: return the result with the documented default
    return 0.0
`

- Keeps the function signature stable so tests written against it stay valid.
- Handles the empty-input contract explicitly.
- Add unit tests for the edge cases before implementing the logic (test-first).

## Evaluation Metrics

| Skill | Test | Target |
|-------|------|--------|
| Concept recall | Explain PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting without notes | 60-second explanation |
| Code fluency | Write the chapter example from memory | No syntax errors |
| Edge cases | Handle empty/invalid input in exercises | All cases pass |
| Complexity | State time/space for the standard approach | Correct big-O |
| Interview readiness | Answer 5 Interview Q&A questions out loud | Fluent, structured answers |
| Retention | Chapter quiz score after 3 days | 80%+ |

## Real-World Examples

- **Startup**: a small team uses PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting daily in their data pipeline â€” the chapter's examples mirror their code.
- **E-commerce**: PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting patterns appear in order processing, inventory checks, and recommendation feeds.
- **Fintech**: PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting principles apply to transaction validation and fraud detection flows.
- **ML platform**: PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting shows up in feature engineering and model-serving infrastructure.
- **Interview insight**: recruiters look for engineers who can connect PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting to the business outcome, not just the code.

## Next Topic

[PyTorch nn.Module — nn.Module, nn.Sequential, Custom Layers, Weight Init](03-pytorch-nn-module.md)

## Limitations

- PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting, like any technique, is not a silver bullet â€” it has specific cases where it fits best (covered in the theory).
- The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling.
- Performance of PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting depends on input size and distribution â€” always benchmark for your own data.
- This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone.
