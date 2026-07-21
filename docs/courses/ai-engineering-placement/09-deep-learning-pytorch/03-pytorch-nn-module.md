# PyTorch nn.Module — nn.Module, nn.Sequential, Custom Layers, Weight Init

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Build neural networks using nn.Module and nn.Sequential |
| LO2 | Implement custom layers by subclassing nn.Module |
| LO3 | Apply weight initialization strategies for different activations |
| LO4 | Understand parameter management, hooks, and module registration |
| LO5 | Use nn.ModuleList and nn.ModuleDict for dynamic architectures |
| LO6 | Implement forward hooks and backward hooks for debugging |

## Introduction

09-deep-learning-pytorch is a fundamental concept in AI engineering. This chapter covers the core principles, practical implementations, and interview preparation for mastering this topic.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures
## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 3.1 | nn.Module Basics | Subclass, __init__, forward, parameters, train/eval |
| 3.2 | nn.Sequential | Sequential containers, dict vs list, add_module |
| 3.3 | Custom Layers | Parameter registration, weight init, forward logic |
| 3.4 | Weight Initialization | apply(), reset_parameters(), custom init |
| 3.5 | Parameter Management | named_parameters(), buffers, modules(), state_dict |
| 3.6 | Hooks | forward hooks, backward hooks, feature extraction |

## Chapter Roadmap

```mermaid
flowchart LR
    A[nn.Module] --> B[__init__: Define Layers]
    B --> C[forward: Define Computation]
    C --> D[nn.Sequential]
    C --> E[Custom forward Logic]
    D --> F[Automatic fprop]
    E --> F
    F --> G[Output]
```

## 3.1 nn.Module Basics

All neural network components in PyTorch inherit from nn.Module.

```python
import torch
import torch.nn as nn
import torch.nn.functional as F

class SimpleMLP(nn.Module):
    def __init__(self, input_dim: int, hidden_dim: int, output_dim: int):
        super().__init__()
        self.fc1 = nn.Linear(input_dim, hidden_dim)
        self.fc2 = nn.Linear(hidden_dim, hidden_dim)
        self.fc3 = nn.Linear(hidden_dim, output_dim)
        self.dropout = nn.Dropout(0.2)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        x = F.relu(self.fc1(x))
        x = self.dropout(x)
        x = F.relu(self.fc2(x))
        x = self.fc3(x)
        return x

model = SimpleMLP(10, 64, 2)
print(f"Parameters: {sum(p.numel() for p in model.parameters()):,}")
x = torch.randn(5, 10)
output = model(x)
print(f"Output shape: {output.shape}")
model.train()
print(f"Training mode: {model.training}")
model.eval()
print(f"Evaluation mode: {model.training}")
```

**nn.Module provides**: Automatic parameter tracking, train()/eval() mode, to(device), state_dict(), register_buffer().

---

## 3.2 nn.Sequential

Sequential is a container for layers called in order.

```python
model = nn.Sequential(
    nn.Linear(10, 64), nn.ReLU(), nn.Dropout(0.2),
    nn.Linear(64, 32), nn.ReLU(), nn.Linear(32, 2),
)
x = torch.randn(5, 10)
print(f"Sequential output: {model(x).shape}")

# Named sequential
model2 = nn.Sequential(OrderedDict([
    ("fc1", nn.Linear(10, 64)),
    ("relu", nn.ReLU()),
    ("fc2", nn.Linear(64, 2)),
]))
model2.add_module("dropout", nn.Dropout(0.1))
```

**When to use Sequential**: Simple feed-forward without branching or skip connections.

---

## 3.3 Custom Layers

```python
class CustomLinear(nn.Module):
    def __init__(self, in_features: int, out_features: int, bias: bool = True):
        super().__init__()
        self.weight = nn.Parameter(torch.randn(out_features, in_features) * 0.01)
        if bias:
            self.bias = nn.Parameter(torch.zeros(out_features))
        else:
            self.register_parameter("bias", None)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        output = x @ self.weight.T
        if self.bias is not None:
            output += self.bias
        return output

class ResidualBlock(nn.Module):
    def __init__(self, dim: int):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(dim, dim), nn.BatchNorm1d(dim), nn.ReLU(),
            nn.Linear(dim, dim), nn.BatchNorm1d(dim),
        )

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        return F.relu(self.net(x) + x)

custom = CustomLinear(10, 20)
block = ResidualBlock(64)
x = torch.randn(5, 64)
print(f"Residual output: {block(x).shape}")
```

---

## 3.4 Weight Initialization

```python
def init_weights(m: nn.Module):
    if isinstance(m, nn.Linear):
        nn.init.kaiming_normal_(m.weight, mode="fan_in", nonlinearity="relu")
        nn.init.zeros_(m.bias)

model = nn.Sequential(nn.Linear(100, 200), nn.ReLU(), nn.Linear(200, 10))
model.apply(init_weights)

# Various init schemes
layer = nn.Linear(100, 100)
nn.init.xavier_uniform_(layer.weight)
nn.init.kaiming_normal_(layer.weight, mode="fan_out")
nn.init.orthogonal_(layer.weight)
nn.init.sparse_(layer.weight, sparsity=0.9, std=0.01)
print(f"Init schemes tested on Linear(100,100)")
```

---

## 3.5 Parameter Management

```python
model = SimpleMLP(10, 64, 2)
for name, param in model.named_parameters():
    print(f"{name}: {param.shape}, grad={param.requires_grad}")
for name, module in model.named_modules():
    print(f"Module: {name} -> {type(module).__name__}")

total = sum(p.numel() for p in model.parameters())
trainable = sum(p.numel() for p in model.parameters() if p.requires_grad)
print(f"Total: {total:,}, Trainable: {trainable:,}")

# Freeze layers
for param in model.fc1.parameters():
    param.requires_grad = False

# Buffers (non-trainable)
bn = nn.BatchNorm1d(10)
print(f"Buffers: {[n for n, _ in bn.named_buffers()]}")
```

---

## 3.6 Hooks

```python
model = SimpleMLP(10, 64, 2)
activations = {}

def get_activation(name):
    def hook(module, input, output):
        activations[name] = output.detach()
    return hook

model.fc1.register_forward_hook(get_activation("fc1"))
model.fc2.register_forward_hook(get_activation("fc2"))

x = torch.randn(5, 10)
output = model(x)
for name, act in activations.items():
    print(f"{name}: shape={act.shape}, mean={act.mean():.4f}")

# Backward hook
gradients = {}
def get_grad(name):
    def hook(module, grad_input, grad_output):
        gradients[name] = grad_output[0].detach()
    return hook
model.fc3.register_backward_hook(get_grad("fc3"))
y = torch.randn(5, 2)
F.mse_loss(model(x), y).backward()
```

---

## 3.7 Model Surgery and Dynamic Architectures

Sometimes we need to modify an existing model by swapping layers, adding branches, or composing sub-networks dynamically.

```python
# Replace last layer for transfer learning
model = SimpleMLP(10, 64, 2)
model.fc3 = nn.Linear(64, 10)  # Replace last layer
print(f"New output: {model(torch.randn(5, 10)).shape}")

# Add a new branch
class DualOutputMLP(nn.Module):
    def __init__(self, base: SimpleMLP, extra_dim: int):
        super().__init__()
        self.base = base
        self.extra_head = nn.Linear(64, extra_dim)

    def forward(self, x: torch.Tensor):
        x = F.relu(self.base.fc1(x))
        x = F.relu(self.base.fc2(x))
        main = self.base.fc3(x)
        extra = self.extra_head(x)
        return main, extra

base = SimpleMLP(10, 64, 2)
dual = DualOutputMLP(base, 5)
m, e = dual(torch.randn(5, 10))
print(f"Main: {m.shape}, Extra: {e.shape}")
```

**Use cases**: Multi-task learning, auxiliary loss computation, feature pyramid networks.

---

## TypeScript Parallel

```typescript
abstract class ModuleTS {
  protected params: Map<string, number[][]> = new Map();
  training = true;
  abstract forward(x: number[][]): number[][];
  train() { this.training = true; }
  eval() { this.training = false; }
}

class LinearTS extends ModuleTS {
  private w: number[][]; private b: number[];
  constructor(inF: number, outF: number) {
    super();
    const std = Math.sqrt(2 / inF);
    this.w = Array.from({length: outF}, () => Array.from({length: inF}, () => (Math.random()*2-1)*std));
    this.b = new Array(outF).fill(0);
  }
  forward(x: number[][]): number[][] {
    return x.map(row => this.w.map(w => w.reduce((s, wi, i) => s + wi*row[i], 0)));
  }
}

const seq = new LinearTS(10, 64);
const out = seq.forward(Array.from({length: 5}, () => Array.from({length: 10}, () => Math.random())));
console.log(`Output shape: [${out.length}, ${out[0].length}]`);
```

## Summary

- nn.Module is the base class for all PyTorch neural network components, providing parameter tracking, device management, and serialization
- nn.Sequential provides simple layer-by-layer composition for feed-forward architectures without branching
- Custom layers require subclassing nn.Module and registering parameters with nn.Parameter or nn.ParameterList for dynamic parameters
- He (Kaiming) initialization is best for ReLU activations; Xavier for tanh/sigmoid; Orthogonal for RNNs; LeCun for SELU
- model.apply() applies functions recursively to all submodules and is the standard way to initialize weights across a model
- named_parameters() and state_dict() provide complete access to all model parameters for saving, loading, and inspection
- Buffers (register_buffer) store non-trainable tensors like BatchNorm running mean/variance and are included in state_dict
- Freeze parameters by setting requires_grad = False; unfrozen layers are ignored by the optimizer when using filter()
- Forward hooks extract intermediate activations without modifying model code; backward hooks capture gradients
- Hooks are useful for debugging, feature extraction, gradient penalization, and visualization
- Model surgery (swapping branches, adding heads) enables transfer learning and multi-task architectures
- DistributedDataParallel wraps nn.Module for multi-GPU training with minimal code changes

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Simple linear stack | nn.Sequential | Custom Module (overkill) |
| Complex forward logic | Custom nn.Module | nn.Sequential with workarounds |
| Extract features | Forward hooks | Modifying model forward pass |
| Load pretrained weights | model.load_state_dict(torch.load(path)) | Direct weight assignment |
| Freeze backbone | Set requires_grad=False on backbone | Removing backbone parameters |
| Dynamic number of layers | nn.ModuleList | Python list (parameters not tracked) |
| Multi-GPU training | DistributedDataParallel | DataParallel (slower, GIL issues) |
| Weight initialization | model.apply(init_fn) | Manual per-layer loops |
| Scripting for production | torch.jit.script | Relying on full Python runtime |
| Deploy cross-platform | torch.onnx.export | Framework-specific format |

## Interview Q&A

<details class="tp-qa-card" data-qid="dl09-q1"><summary>Q1: What is the difference between nn.Module and nn.Sequential?</summary><div class="tp-qa-answer"><p>nn.Module is the base class for all neural network components. You subclass it to define custom architectures with arbitrary forward logic. nn.Sequential is a container that calls layers in order, suitable for simple feed-forward networks. Module gives full control (skip connections, multiple inputs/outputs); Sequential trades flexibility for conciseness.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q2"><summary>Q2: How do you register a parameter in a custom nn.Module?</summary><div class="tp-qa-answer"><p>Assign a nn.Parameter to self as an attribute: self.weight = nn.Parameter(torch.randn(...)). PyTorch automatically detects nn.Parameter attributes and registers them. For non-trainable tensors, use self.register_buffer("name", tensor). For parameter groups not directly assignable, use self.register_parameter("name", param). All registered parameters appear in model.parameters() and model.named_parameters().</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q3"><summary>Q3: What is the purpose of model.apply()?</summary><div class="tp-qa-answer"><p>model.apply(fn) applies the function fn recursively to every submodule in the model. It's commonly used for weight initialization: model.apply(init_weights) where init_weights checks isinstance(m, nn.Linear) and applies the desired initialization. Also useful for: setting dropout rates, enabling/disabling batch norm tracking, or any module-level configuration that needs to be applied recursively.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q4"><summary>Q4: How do you freeze specific layers in a pretrained model?</summary><div class="tp-qa-answer"><p>Iterate over the layer's parameters and set requires_grad = False: for param in model.layer.parameters(): param.requires_grad = False. Then pass only trainable parameters to the optimizer: optimizer = optim.SGD(filter(lambda p: p.requires_grad, model.parameters()), lr=0.001). Common use case: freeze a pretrained backbone and only train the classification head (transfer learning).</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q5"><summary>Q5: What are forward hooks and when would you use them?</summary><div class="tp-qa-answer"><p>Forward hooks are functions called during the forward pass of a module. They receive the module, input, and output. Uses: extracting intermediate features for visualization, debugging activation statistics, implementing custom regularization (e.g., activation penalization), feature extraction from pretrained models, and model surgery without modifying the original code. Register with module.register_forward_hook(hook_fn).</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q6"><summary>Q6: What is nn.ModuleList and how is it different from a Python list?</summary><div class="tp-qa-answer"><p>nn.ModuleList is a container that registers its contents as submodules. A plain Python list doesn't register modules, so their parameters won't be discovered by model.parameters(). Use ModuleList when you have a variable number of layers: self.layers = nn.ModuleList([nn.Linear(10,10) for _ in range(n)]). Access elements by index like a list. Similarly, nn.ModuleDict stores modules by name.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q7"><summary>Q7: How do you save and load a PyTorch model?</summary><div class="tp-qa-answer"><p>Best practice: save only the state_dict (parameters and buffers): torch.save(model.state_dict(), "model.pth"). Load: model.load_state_dict(torch.load("model.pth"), strict=True). Save the full model (architecture + weights) with torch.save(model, "full.pth"). Load with model = torch.load("full.pth") but this requires the model class to be importable. Always use .pt or .pth extension.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q8"><summary>Q8: What is the difference between model.eval() and torch.no_grad()?</summary><div class="tp-qa-answer"><p>model.eval() sets the model to evaluation mode: affects BatchNorm (uses running stats) and Dropout (disables). torch.no_grad() disables gradient computation globally. Use both for inference: model.eval() + torch.no_grad(). Use model.train() to re-enable training behavior. You can use no_grad without eval (e.g., for gradient computation in validation) and eval without no_grad (e.g., for computing gradients of eval metrics).</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q9"><summary>Q9: How do you handle multiple GPUs with nn.Module?</summary><div class="tp-qa-answer"><p>Use nn.DataParallel for simple multi-GPU: model = nn.DataParallel(model). This splits the batch across GPUs, runs the same model on each, and gathers outputs. For better performance, use DistributedDataParallel (DDP): model = DDP(model, device_ids=[local_rank]). DDP is faster (avoids GIL) and recommended for large-scale training. Use torch.nn.parallel.DistributedDataParallel with torch.distributed.launch.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q10"><summary>Q10: What is torch.jit.script and torch.onnx.export used for?</summary><div class="tp-qa-answer"><p>torch.jit.script (TorchScript) compiles a PyTorch model into a serializable, optimizable representation that can run without Python dependency. torch.onnx.export exports to ONNX format for interoperability with other frameworks (TensorFlow, ONNX Runtime). Both are used for production deployment where you need: faster inference, mobile deployment, or integration with non-Python environments.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

## Chapter Quiz

**Q1**: What is the base class for all PyTorch neural network components?

a) nn.Sequential
b) nn.Module
c) nn.Layer
d) nn.Network

<details class="tp-qa-card" data-qid="dl09-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) nn.Module</strong></p><p>All neural network components inherit from nn.Module.</p></div></details>

**Q2**: Which method applies a function recursively to all submodules?

a) model.forward()
b) model.apply()
c) model.run()
d) model.call()

<details class="tp-qa-card" data-qid="dl09-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) model.apply()</strong></p><p>model.apply(fn) applies fn to every submodule recursively.</p></div></details>

**Q3**: How do you register a non-trainable tensor in a module?

a) self.tensor = torch.zeros(10)
b) self.register_buffer("tensor", torch.zeros(10))
c) self.register_parameter("tensor", torch.zeros(10))
d) self.buffer = torch.zeros(10)

<details class="tp-qa-card" data-qid="dl09-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) self.register_buffer("tensor", torch.zeros(10))</strong></p><p>Buffers are non-trainable tensors tracked by the module.</p></div></details>

**Q4**: What happens when you use a plain Python list for layers instead of nn.ModuleList?

a) Same behavior
b) Layer parameters won't be registered
c) Error
d) Only first layer works

<details class="tp-qa-card" data-qid="dl09-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Layer parameters won't be registered</strong></p><p>Python lists don't register submodules; ModuleList does.</p></div></details>

**Q5**: How do you freeze a layer's parameters?

a) layer.freeze()
b) param.requires_grad = False
c) del param
d) layer.trainable = False

<details class="tp-qa-card" data-qid="dl09-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) param.requires_grad = False</strong></p><p>Setting requires_grad=False prevents gradient computation and parameter updates.</p></div></details>


### Advanced: Custom Autograd Function

Sometimes you need a custom operation not covered by standard nn.Modules. Define a custom autograd Function:

```python
class ClampFunction(torch.autograd.Function):
    @staticmethod
    def forward(ctx, x, lo, hi):
        ctx.save_for_backward(x, torch.tensor([lo, hi]))
        return torch.clamp(x, lo, hi)

    @staticmethod
    def backward(ctx, grad_output):
        x, bounds = ctx.saved_tensors
        lo, hi = bounds[0].item(), bounds[1].item()
        grad_input = grad_output.clone()
        grad_input[x < lo] = 0
        grad_input[x > hi] = 0
        return grad_input, None, None
```

Use it: `output = ClampFunction.apply(x, -1.0, 1.0)`


## Exercises

**Easy** — Create a 3-layer MLP using nn.Sequential. Count the number of parameters.

**Easy** — Implement a custom Linear layer without using nn.Linear. Verify it produces the same output.

**Medium** — Build a ResidualBlock with skip connection. Test that the gradient flows through both paths.

**Hard** — Implement a FeatureExtractor using hooks that extracts activations from specified layers during forward pass.

**Hard** — Build a model with dynamic number of layers using nn.ModuleList. Experiment with different depths.

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
- [ ] Have questions ready about how the company uses 09-deep-learning-pytorch> **Next**: [CNN Fundamentals](04-cnn-fundamentals.md)
