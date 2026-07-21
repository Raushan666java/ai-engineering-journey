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

Understanding pytorch tensors is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering pytorch tensors.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures


## Theory

Understanding pytorch tensors is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how pytorch tensors works in practice.

### Key Concepts

- **Core Principle**: The foundational idea behind pytorch tensors
- **How It Works**: The mechanism and process involved
- **Why It Matters**: Relevance to AI engineering and real-world applications
- **Trade-offs**: Advantages and limitations to consider

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
```text

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
```text

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
```text

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
```text

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
```text

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
```text

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
```text

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
```text

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

- Key concept 1: Core principle of 09-deep-learning-pytorch
- Key concept 2: Common implementation pattern
- Key concept 3: Time/space complexity to remember
- Key concept 4: When to apply this technique
- Key concept 5: Common interview pattern
- Key concept 6: Edge cases to handle
- Key concept 7: Related concepts for deeper understanding

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of 09-deep-learning-pytorch. When would you choose one approach over another?
2. Design a system that efficiently handles 09-deep-learning-pytorch at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 09-deep-learning-pytorch. What was your approach and what was the result?
2. How would you explain 09-deep-learning-pytorch to a non-technical stakeholder?

#### Microsoft Style
1. How does 09-deep-learning-pytorch integrate with enterprise systems and cloud architectures?
2. What are the security implications of 09-deep-learning-pytorch?

#### NVIDIA Style
1. How would you optimize 09-deep-learning-pytorch for GPU-accelerated computing?
2. What parallel processing patterns apply to 09-deep-learning-pytorch?

#### AI Startup Style
1. How would you implement 09-deep-learning-pytorch in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 09-deep-learning-pytorch?

### Resume Tips
- **Technical Skills**: List 09-deep-learning-pytorch under relevant technical skills
- **Project Description**: "Implemented 09-deep-learning-pytorch to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 09-deep-learning-pytorch in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 09-deep-learning-pytorch
- [ ] Practice 3-5 problems related to 09-deep-learning-pytorch
- [ ] Prepare 2 real-world examples of using 09-deep-learning-pytorch
- [ ] Know the time/space complexity of common 09-deep-learning-pytorch operations
- [ ] Have questions ready about how the company uses 09-deep-learning-pytorch> **Next**: [PyTorch nn.Module](03-pytorch-nn-module.md)
