# Neural Networks Basics — Perceptron, Activation Functions, Backpropagation


## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand the perceptron model and its limitations |
| LO2 | Implement common activation functions: sigmoid, tanh, ReLU, Leaky ReLU |
| LO3 | Derive backpropagation using the chain rule |
| LO4 | Build a multi-layer perceptron from scratch in PyTorch |
| LO5 | Implement forward pass, loss computation, and backward pass |
| LO6 | Understand gradient vanishing/exploding and weight initialization |


## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 1.1 | Perceptron | Linear threshold unit, decision boundary, XOR limitation |
| 1.2 | Activation Functions | Sigmoid, tanh, ReLU, Leaky ReLU, Swish, GELU |
| 1.3 | Multi-Layer Perceptron | Hidden layers, universal approximation theorem |
| 1.4 | Backpropagation | Chain rule, gradient computation, computational graph |
| 1.5 | Weight Initialization | Xavier/Glorot, He, zero-center, vanishing gradients |
| 1.6 | Loss Functions | MSE, cross-entropy, hinge, custom losses |


## Chapter Roadmap

```mermaid
flowchart LR
    A[Input X] --> B[Linear: z = Wx + b]
    B --> C[Activation: a = f(z)]
    C --> D{More Layers?}
    D -->|Yes| B
    D -->|No| E[Output Layer]
    E --> F[Loss: L(y, y_hat)]
    F --> G[Backward: dL/dW]
    G --> H[Update: W -= lr * dL/dW]
    H --> I{Converged?}
    I -->|No| A
    I -->|Yes| J[Trained Model]
```text


## Introduction

Neural networks are the engine behind every modern AI system — from GPT-4's language generation to self-driving car vision. This chapter builds your understanding from the ground up: starting with the single perceptron, progressing through activation functions and backpropagation, and culminating in a multi-layer perceptron implemented in PyTorch. These fundamentals directly explain why transformers work and how to debug training failures in production.


## Prerequisites

- Python with NumPy basics (array operations, broadcasting)
- Module 08 (ML Fundamentals) — supervised learning, loss functions, gradient descent
- Basic calculus concept of derivatives (helpful but not strictly required)


## Theory


### 1.1 Perceptron

The perceptron is the simplest neural network: a linear classifier that maps inputs to binary outputs.



## Examples

```python
import numpy as np
import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader, TensorDataset
from typing import List, Tuple, Callable


class Perceptron:
    def __init__(self, n_features: int, lr: float = 0.01):
        self.weights = np.zeros(n_features)
        self.bias = 0.0
        self.lr = lr

    def predict(self, X: np.ndarray) -> np.ndarray:
        linear = X @ self.weights + self.bias
        return np.where(linear >= 0, 1, 0)

    def fit(self, X: np.ndarray, y: np.ndarray, epochs: int = 10):
        for epoch in range(epochs):
            errors = 0
            for xi, yi in zip(X, y):
                pred = self.predict(xi.reshape(1, -1))[0]
                if pred != yi:
                    self.weights += self.lr * (yi - pred) * xi
                    self.bias += self.lr * (yi - pred)
                    errors += 1
            if errors == 0:
                break
        return epoch



## XOR problem — perceptron cannot solve this
X_xor = np.array([[0, 0], [0, 1], [1, 0], [1, 1]], dtype=np.float32)
y_xor = np.array([0, 1, 1, 0], dtype=np.float32)

p = Perceptron(2)
p.fit(X_xor, y_xor, epochs=20)
print(f"Perceptron XOR predictions: {p.predict(X_xor)}")
print("Perceptron cannot learn XOR (linear separability limitation)")
```text

**Perceptron convergence theorem**: If the data is linearly separable, the perceptron converges in finite steps. XOR is not linearly separable, requiring a multi-layer network.

---



## Overview

### 1.2 Activation Functions

Activation functions introduce non-linearity, enabling neural networks to learn complex patterns.

```python
class ActivationFunctions:
    @staticmethod
    def sigmoid(x: np.ndarray) -> np.ndarray:
        return 1 / (1 + np.exp(-np.clip(x, -100, 100)))

    @staticmethod
    def sigmoid_derivative(x: np.ndarray) -> np.ndarray:
        s = ActivationFunctions.sigmoid(x)
        return s * (1 - s)

    @staticmethod
    def tanh(x: np.ndarray) -> np.ndarray:
        return np.tanh(x)

    @staticmethod
    def tanh_derivative(x: np.ndarray) -> np.ndarray:
        return 1 - np.tanh(x) ** 2

    @staticmethod
    def relu(x: np.ndarray) -> np.ndarray:
        return np.maximum(0, x)

    @staticmethod
    def relu_derivative(x: np.ndarray) -> np.ndarray:
        return (x > 0).astype(float)

    @staticmethod
    def leaky_relu(x: np.ndarray, alpha: float = 0.01) -> np.ndarray:
        return np.where(x > 0, x, alpha * x)

    @staticmethod
    def leaky_relu_derivative(x: np.ndarray, alpha: float = 0.01) -> np.ndarray:
        return np.where(x > 0, 1.0, alpha)

    def plot_activations(self):
        x = np.linspace(-5, 5, 100)
        activations = {
            "Sigmoid": self.sigmoid(x),
            "Tanh": self.tanh(x),
            "ReLU": self.relu(x),
            "Leaky ReLU": self.leaky_relu(x),
        }
        for name, values in activations.items():
            print(f"{name:15s}: range=[{values.min():.2f}, {values.max():.2f}]")


af = ActivationFunctions()
af.plot_activations()
```text

**PyTorch activations**:
```python

## PyTorch has built-in activation functions
x_t = torch.randn(5)
print(f"Sigmoid: {torch.sigmoid(x_t)}")
print(f"ReLU: {torch.relu(x_t)}")
print(f"Tanh: {torch.tanh(x_t)}")
print(f"LeakyReLU: {nn.LeakyReLU(0.01)(x_t)}")
```text

| Activation | Range | Derivative | Use Case |
|------------|-------|------------|----------|
| Sigmoid | (0, 1) | σ(1-σ) | Binary classification output |
| Tanh | (-1, 1) | 1-tanh² | Hidden layers (older) |
| ReLU | [0, ∞) | 0 or 1 | Default hidden layer |
| Leaky ReLU | (-∞, ∞) | 1 or α | Dead ReLU prevention |
| GELU | (-∞, ∞) | Complex | Transformer models |

---



## Overview

### 1.3 Multi-Layer Perceptron

An MLP has one or more hidden layers between input and output. The universal approximation theorem states that a single hidden layer with enough neurons can approximate any continuous function.

```python
class MLPScratch:
    def __init__(self, layer_sizes: List[int], activation: str = "relu"):
        self.layer_sizes = layer_sizes
        self.activation = activation
        self.params = self._init_params()

    def _init_params(self) -> dict:
        np.random.seed(42)
        params = {}
        for i in range(len(self.layer_sizes) - 1):
            # He initialization for ReLU
            std = np.sqrt(2.0 / self.layer_sizes[i])
            params[f"W{i+1}"] = np.random.randn(self.layer_sizes[i], self.layer_sizes[i+1]) * std
            params[f"b{i+1}"] = np.zeros((1, self.layer_sizes[i+1]))
        return params

    def _activate(self, z: np.ndarray) -> np.ndarray:
        if self.activation == "relu":
            return np.maximum(0, z)
        elif self.activation == "sigmoid":
            return 1 / (1 + np.exp(-np.clip(z, -100, 100)))
        elif self.activation == "tanh":
            return np.tanh(z)
        return z

    def _activate_derivative(self, z: np.ndarray) -> np.ndarray:
        if self.activation == "relu":
            return (z > 0).astype(float)
        elif self.activation == "sigmoid":
            s = 1 / (1 + np.exp(-np.clip(z, -100, 100)))
            return s * (1 - s)
        elif self.activation == "tanh":
            return 1 - np.tanh(z) ** 2
        return np.ones_like(z)

    def forward(self, X: np.ndarray) -> Tuple[dict, dict]:
        caches = {"A0": X}
        A = X

        for i in range(1, len(self.layer_sizes)):
            Z = A @ self.params[f"W{i}"] + self.params[f"b{i}"]
            if i == len(self.layer_sizes) - 1:
                A = Z  # Linear output for regression
            else:
                A = self._activate(Z)
            caches[f"Z{i}"] = Z
            caches[f"A{i}"] = A

        return A, caches

    def backward(self, y: np.ndarray, output: np.ndarray,
                 caches: dict) -> dict:
        grads = {}
        m = y.shape[0]

        # Output layer gradient (MSE)
        dA = 2 * (output - y) / m

        for i in range(len(self.layer_sizes) - 1, 0, -1):
            A_prev = caches[f"A{i-1}"]
            Z = caches[f"Z{i}"]

            if i == len(self.layer_sizes) - 1:
                dZ = dA  # Linear output
            else:
                dA_act = self._activate_derivative(Z)
                dZ = dA * dA_act

            grads[f"W{i}"] = A_prev.T @ dZ
            grads[f"b{i}"] = np.sum(dZ, axis=0, keepdims=True)

            if i > 1:
                dA = dZ @ self.params[f"W{i}"].T

        return grads

    def compute_loss(self, y: np.ndarray, output: np.ndarray) -> float:
        return np.mean((output - y) ** 2)



## Test MLP on regression
np.random.seed(42)
X_mlp = np.random.randn(100, 3)
y_mlp = X_mlp[:, 0] ** 2 + np.sin(X_mlp[:, 1]) + 0.1 * np.random.randn(100)

mlp = MLPScratch([3, 16, 8, 1], activation="relu")
lr = 0.01
for epoch in range(500):
    output, caches = mlp.forward(X_mlp)
    loss = mlp.compute_loss(y_mlp.reshape(-1, 1), output)
    grads = mlp.backward(y_mlp.reshape(-1, 1), output, caches)

    for key in mlp.params:
        mlp.params[key] -= lr * grads[key]

    if epoch % 100 == 0:
        print(f"Epoch {epoch}: loss = {loss:.6f}")
```text

---



## Overview

### 1.4 Backpropagation

Backpropagation computes gradients of the loss with respect to all parameters using the chain rule.

```python
class ComputationalGraph:
    """Demonstrates the chain rule on a simple computation graph"""
    def __init__(self):
        self.graph = []

    def add_operation(self, name: str, forward_fn: Callable,
                      backward_fn: Callable, inputs: List[str]):
        self.graph.append({
            "name": name, "forward": forward_fn,
            "backward": backward_fn, "inputs": inputs,
            "output": None, "grad": None,
        })

    def forward(self, values: dict) -> float:
        for op in self.graph:
            input_vals = [values[v] if v in values else None for v in op["inputs"]]
            op["output"] = op["forward"](*input_vals)
            values[op["name"]] = op["output"]
        return values[self.graph[-1]["name"]]

    def backward(self, grad_output: float = 1.0) -> dict:
        for op in reversed(self.graph):
            op["grad"] = grad_output
            if op["name"] != "input":
                input_grads = op["backward"](grad_output, *[g.get("output") for g in self.graph])
                grad_output = input_grads[0] if input_grads else grad_output
        return {op["name"]: op["grad"] for op in self.graph}



## PyTorch autograd demonstration
x = torch.tensor(2.0, requires_grad=True)
w = torch.tensor(3.0, requires_grad=True)
b = torch.tensor(1.0, requires_grad=True)
y = torch.tensor(10.0)

z = w * x + b
loss = (z - y) ** 2
loss.backward()

print(f"dL/dw = {w.grad.item():.2f} (manual: {2 * (z.item() - y.item()) * x.item():.2f})")
print(f"dL/db = {b.grad.item():.2f} (manual: {2 * (z.item() - y.item()):.2f})")
print(f"dL/dx = {x.grad.item():.2f}")
```text

**Backpropagation steps**:
1. Forward pass: compute all activations
2. Compute loss
3. Backward pass: for each layer, compute dL/dW, dL/db, dL/dA_prev
4. Update parameters: W = W - lr * dL/dW

---



## Overview

### 1.5 Weight Initialization

Good initialization prevents vanishing/exploding gradients and speeds convergence.

```python
class WeightInitializer:
    @staticmethod
    def xavier_uniform(fan_in: int, fan_out: int) -> np.ndarray:
        limit = np.sqrt(6.0 / (fan_in + fan_out))
        return np.random.uniform(-limit, limit, (fan_in, fan_out))

    @staticmethod
    def xavier_normal(fan_in: int, fan_out: int) -> np.ndarray:
        std = np.sqrt(2.0 / (fan_in + fan_out))
        return np.random.randn(fan_in, fan_out) * std

    @staticmethod
    def he_uniform(fan_in: int, fan_out: int) -> np.ndarray:
        limit = np.sqrt(6.0 / fan_in)
        return np.random.uniform(-limit, limit, (fan_in, fan_out))

    @staticmethod
    def he_normal(fan_in: int, fan_out: int) -> np.ndarray:
        std = np.sqrt(2.0 / fan_in)
        return np.random.randn(fan_in, fan_out) * std

    @staticmethod
    def zero_init(fan_in: int, fan_out: int) -> np.ndarray:
        return np.zeros((fan_in, fan_out))

    def test_initialization(self, d_in: int = 100, d_out: int = 100):
        x = np.random.randn(1000, d_in)
        methods = {
            "Xavier Uniform": self.xavier_uniform(d_in, d_out),
            "He Normal": self.he_normal(d_in, d_out),
            "Zero": self.zero_init(d_in, d_out),
        }
        for name, W in methods.items():
            output = x @ W
            if np.any(output):
                print(f"{name:20s}: mean={output.mean():.4f}, std={output.std():.4f}")
            else:
                print(f"{name:20s}: all zeros (dead network)")


init = WeightInitializer()
init.test_initialization(100, 100)
```text

**PyTorch initialization**:
```python
layer = nn.Linear(100, 100)
nn.init.kaiming_normal_(layer.weight, mode="fan_in", nonlinearity="relu")
nn.init.xavier_normal_(layer.weight)
print(f"PyTorch init: mean={layer.weight.mean().item():.4f}, std={layer.weight.std().item():.4f}")
```text

| Initialization | Distribution | Scale | Best For |
|----------------|-------------|-------|----------|
| Xavier/Glorot | Uniform/Normal | √(2/(fan_in+fan_out)) | Tanh, Sigmoid |
| He/Kaiming | Uniform/Normal | √(2/fan_in) | ReLU, Leaky ReLU |
| Orthogonal | Orthogonal matrix | 1 | RNNs, deep networks |
| Zero | Constant 0 | 0 | Biases only |

---


### 1.6 Loss Functions

```python
class LossFunctions:
    @staticmethod
    def mse(y_true: np.ndarray, y_pred: np.ndarray) -> float:
        return np.mean((y_true - y_pred) ** 2)

    @staticmethod
    def cross_entropy(y_true: np.ndarray, y_pred: np.ndarray) -> float:
        eps = 1e-15
        y_pred = np.clip(y_pred, eps, 1 - eps)
        return -np.mean(y_true * np.log(y_pred))

    @staticmethod
    def binary_cross_entropy(y_true: np.ndarray, y_pred: np.ndarray) -> float:
        eps = 1e-15
        y_pred = np.clip(y_pred, eps, 1 - eps)
        return -np.mean(y_true * np.log(y_pred) + (1 - y_true) * np.log(1 - y_pred))

    @staticmethod
    def huber_loss(y_true: np.ndarray, y_pred: np.ndarray, delta: float = 1.0) -> float:
        error = y_true - y_pred
        is_small = np.abs(error) <= delta
        squared_loss = 0.5 * error ** 2
        linear_loss = delta * (np.abs(error) - 0.5 * delta)
        return np.mean(np.where(is_small, squared_loss, linear_loss))


lf = LossFunctions()
y_t = np.array([0, 1, 0, 1])
y_p = np.array([0.1, 0.9, 0.3, 0.7])
print(f"MSE: {lf.mse(y_t, y_p):.4f}")
print(f"Binary CE: {lf.binary_cross_entropy(y_t, y_p):.4f}")
print(f"Huber: {lf.huber_loss(y_t, y_p):.4f}")
```text

---


## Visual Analogy

Think of a neural network like an **assembly line in a factory**:

- **Input layer** = Raw materials arriving at the factory — images, text, numbers. Each neuron receives one piece of the input.
- **Hidden layers** = Workers on the assembly line — each worker (neuron) takes the partially processed product, does one specific task (applies weights and activation), and passes it to the next worker. No single worker builds the whole car; each adds their piece.
- **Output layer** = The quality inspector at the end — takes the finished product and makes the final decision: "This is a cat" or "This is a dog."
- **Weights** = How skilled each worker is — some workers are critical (high weight) and some are less important (low weight). Training is like improving each worker's skill.
- **Activation function** = The decision gate at each station — "Is this good enough to pass on?" If yes, it moves forward; if no, it gets sent back or discarded.
- **Backpropagation** = Feedback from the quality inspector flowing backward — if a defect is found, the inspector tells the last worker who made a mistake, who tells the previous worker, and so on. Everyone adjusts their technique.

This helps because neural networks are fundamentally **collaborative** — no single neuron understands the whole problem, but together they learn to recognize patterns through repeated practice and feedback, just like workers on an assembly line.


## TypeScript Parallel

```typescript
interface Layer {
  weights: number[][];
  biases: number[];
  activation: "relu" | "sigmoid" | "tanh" | "linear";
}

class NeuralNetworkTS {
  private layers: Layer[] = [];

  addLayer(inputSize: number, outputSize: number, activation: Layer["activation"]): void {
    const std = Math.sqrt(2 / inputSize);
    const weights = Array.from({ length: outputSize }, () =>
      Array.from({ length: inputSize }, () => (Math.random() * 2 - 1) * std)
    );
    this.layers.push({ weights, biases: new Array(outputSize).fill(0), activation });
  }

  forward(input: number[]): number[] {
    let current = input;
    for (const layer of this.layers) {
      current = layer.weights.map((w, i) => {
        const z = w.reduce((s, wi, j) => s + wi * current[j], layer.biases[i]);
        if (layer.activation === "relu") return Math.max(0, z);
        if (layer.activation === "sigmoid") return 1 / (1 + Math.exp(-z));
        return z;
      });
    }
    return current;
  }

  train(X: number[][], y: number[][], lr = 0.01, epochs = 100): void {
    for (let ep = 0; ep < epochs; ep++) {
      let totalLoss = 0;
      for (let i = 0; i < X.length; i++) {
        const pred = this.forward(X[i]);
        totalLoss += pred.reduce((s, p, j) => s + (p - y[i][j]) ** 2, 0);
      }
      if (ep % 20 === 0) console.log(`Epoch ${ep}: loss = ${(totalLoss / X.length).toFixed(4)}`);
    }
  }
}

const nnTS = new NeuralNetworkTS();
nnTS.addLayer(3, 8, "relu");
nnTS.addLayer(8, 1, "sigmoid");
```text


## Summary

- Perceptron is a linear binary classifier; cannot solve XOR (not linearly separable)
- Activation functions introduce non-linearity; ReLU is the default for hidden layers
- Multi-layer perceptrons with enough capacity can approximate any continuous function
- Backpropagation uses the chain rule to compute gradients efficiently through the computational graph
- PyTorch's autograd automatically computes gradients when `.backward()` is called
- Weight initialization is critical: He init for ReLU, Xavier init for tanh/sigmoid
- Vanishing gradients (sigmoid/tanh in deep networks) are mitigated by ReLU and batch normalization
- Exploding gradients are handled by gradient clipping and proper initialization
- Cross-entropy loss is preferred for classification; MSE is preferred for regression
- PyTorch's nn.Module provides a clean abstraction for building neural networks


## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Binary classification | Sigmoid output + BCE loss | MSE loss (poor gradients) |
| Multi-class | Softmax output + CE loss | Sigmoid (doesn't sum to 1) |
| Hidden layers | ReLU activation | Sigmoid/tanh (vanishing gradients) |
| Deep network | He initialization + batch norm | Random small init |
| Gradient issues | Gradient clipping + proper lr | Ignoring gradient norms |


## Interview Q&A

<details class="tp-qa-card" data-qid="dl09-q1"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q1: Why can't a single perceptron solve XOR?</summary><div class="tp-qa-answer"><p>A single perceptron creates a linear decision boundary (hyperplane). XOR is not linearly separable — you cannot separate the four points of XOR with a single line. This was demonstrated by Minsky and Papert (1969) and contributed to the first AI winter. XOR requires at least one hidden layer (multi-layer perceptron) to create a non-linear decision boundary.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q2"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q2: What is the vanishing gradient problem and how do you address it?</summary><div class="tp-qa-answer"><p>Vanishing gradients occur when gradients become very small in early layers, preventing learning. This happens with sigmoid/tanh activations (derivatives < 1, multiplied by chain rule). Solutions: <strong>1) ReLU</strong>: derivative = 1 for positive inputs. <strong>2) Batch normalization</strong>: normalizes layer outputs. <strong>3) ResNet skip connections</strong>: allows gradients to flow directly. <strong>4) Proper initialization</strong>: He/Xavier init. <strong>5) LSTM gates</strong>: designed to control gradient flow.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q3"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q3: Explain the chain rule in backpropagation.</summary><div class="tp-qa-answer"><p>The chain rule computes the gradient of the loss with respect to a parameter by multiplying gradients along the path. For a simple network: L = f(g(h(x))). dL/dx = dL/df * df/dg * dg/dh * dh/dx. In practice: forward pass computes activations; backward pass computes dL/dZ, dL/dW, dL/db for each layer. The gradient for layer i depends on the gradient from layer i+1, which is why we propagate "backward".</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q4"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q4: What is the universal approximation theorem?</summary><div class="tp-qa-answer"><p>The theorem states that a feedforward network with a single hidden layer containing enough neurons can approximate any continuous function to any desired accuracy, given sufficient non-linear activation. However, the theorem doesn't guarantee learnability — finding the right weights may be intractable. Deep networks (many layers) are more parameter-efficient than wide networks (one large layer) for approximating complex functions.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q5"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q5: What is the difference between He and Xavier initialization?</summary><div class="tp-qa-answer"><p>Xavier (Glorot) init: weights sampled from distribution with variance = 2/(fan_in + fan_out). Designed for tanh/sigmoid activations. He (Kaiming) init: variance = 2/fan_in. Designed for ReLU activations. ReLU kills negative values, halving the effective variance. He init compensates by doubling the variance. Using wrong init can cause vanishing/exploding gradients in deep networks.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q6"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q6: Why is ReLU preferred over sigmoid for hidden layers?</summary><div class="tp-qa-answer"><p>ReLU advantages: <strong>1) No vanishing gradient</strong>: derivative = 1 for positive inputs. <strong>2) Sparsity</strong>: zero for negative inputs (biological plausibility). <strong>3) Computationally cheap</strong>: max(0, x). <strong>4) Faster convergence</strong>: about 6x faster than tanh empirically. Disadvantages: dead ReLU (neurons can become permanently zero). Solutions: Leaky ReLU (0.01x for negative), PReLU (learned slope), ELU, or Swish.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q7"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q7: How does PyTorch's autograd work?</summary><div class="tp-qa-answer"><p>PyTorch builds a dynamic computational graph (DAG) during the forward pass. Each tensor operation creates a node in the graph recording the operation and its inputs. When `.backward()` is called: <strong>1)</strong> Computes gradients from the loss node. <strong>2)</strong> Traverses the graph backward using the chain rule. <strong>3)</strong> Accumulates gradients in `.grad` attributes of tensors with `requires_grad=True`. The graph is discarded after backward (dynamic — rebuilt each iteration).</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q8"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q8: What is the difference between batch gradient descent and stochastic gradient descent?</summary><div class="tp-qa-answer"><p>Batch GD: computes gradient using the entire dataset. Accurate but slow; memory-intensive. SGD: computes gradient using one random sample. Fast but noisy; oscillates around minimum. Mini-batch GD (most common): uses a small batch (32-256). Balances accuracy and speed. The batch size is a hyperparameter: small batches generalize better but are noisy; large batches give stable gradients but may converge to sharp minima.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q9"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q9: How do you choose the number of hidden layers and neurons?</summary><div class="tp-qa-answer"><p>Guidelines: <strong>1)</strong> Start with 1-2 hidden layers. <strong>2)</strong> Use more neurons in wider layers (e.g., 128-1024). <strong>3)</strong> Increase layers/neurons until validation performance plateaus. <strong>4)</strong> Smaller layers for simpler problems. <strong>5)</strong> Use cross-validation to compare architectures. Overfitting sign: training loss << validation loss → reduce capacity. Underfitting: both losses high → increase capacity. Modern practice: use enough capacity with strong regularization.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q10"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q10: What is the dying ReLU problem and how do you fix it?</summary><div class="tp-qa-answer"><p>Dead ReLU: when a neuron's weights push all inputs to the negative region, ReLU outputs 0 and the gradient is 0. The neuron can never recover because the gradient is zero. Causes: large learning rate, biased initialization, or unfortunate parameter updates. Fixes: use Leaky ReLU (0.01 slope), PReLU (learnable slope), ELU (exponential for negatives), or Swish (x * sigmoid(x)), and reduce learning rate.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>


## Chapter Quiz

**Q1**: Which activation function is most commonly used in hidden layers?

a) Sigmoid
b) Tanh
c) ReLU
d) Linear

<details class="tp-qa-card" data-qid="dl09-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) ReLU</strong></p><p>ReLU avoids vanishing gradients and is computationally efficient.</p></div></details>

**Q2**: What problem can a single perceptron NOT solve?

a) AND
b) OR
c) XOR
d) NOT

<details class="tp-qa-card" data-qid="dl09-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) XOR</strong></p><p>XOR is not linearly separable; requires at least one hidden layer.</p></div></details>

**Q3**: How does PyTorch compute gradients automatically?

a) Numerical differentiation
b) Symbolic differentiation
c) Automatic differentiation (autograd)
d) Manual gradient computation

<details class="tp-qa-card" data-qid="dl09-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Automatic differentiation (autograd)</strong></p><p>PyTorch builds a dynamic computational graph and traverses it backward.</p></div></details>

**Q4**: Which initialization is best for ReLU networks?

a) Xavier uniform
b) He normal
c) Zero initialization
d) Random uniform [0, 1]

<details class="tp-qa-card" data-qid="dl09-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) He normal</strong></p><p>He init uses variance = 2/fan_in, compensating for ReLU's zeroing of negative values.</p></div></details>

**Q5**: What loss function is appropriate for binary classification?

a) MSE
b) Binary cross-entropy
c) MAE
d) Huber

<details class="tp-qa-card" data-qid="dl09-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Binary cross-entropy</strong></p><p>BCE is derived from the Bernoulli likelihood and provides proper gradients for probability outputs.</p></div></details>


### True/False

**T/F 1**: This topic is fundamental to AI engineering.
**Answer**: True — Understanding deep learning pytorch is essential for building production AI systems.

**T/F 2**: The concepts in this chapter are only used in interviews.
**Answer**: False — These concepts are used daily in real-world AI engineering work.

**T/F 3**: Time/space complexity analysis applies to deep learning pytorch.
**Answer**: True — Every algorithm and system has performance characteristics to analyze.

**T/F 4**: deep learning pytorch concepts are independent of each other.
**Answer**: False — Most concepts build on each other and are interconnected.

**T/F 5**: Real-world applications often combine multiple concepts from this chapter.
**Answer**: True — Production systems use combinations of these fundamental concepts.

### Fill in the Blank

**FIB 1**: The key concept in this chapter is ________.
**Answer**: [Review the chapter's Learning Objectives for the specific answer]

**FIB 2**: In deep learning pytorch, the time complexity of the basic operation is ________.
**Answer**: [Depends on the specific operation — check the Theory section]

### Scenario Questions

**Scenario 1**: How would you apply the concepts from this chapter in a real AI engineering project?

**Answer**: [Think about how the specific topic applies to: data processing pipelines, model training infrastructure, production systems, or interview scenarios]

### Output Questions

**Output 1**: What is the time complexity of the main algorithm discussed in this chapter?
**Answer**: [Check the Theory section for the specific complexity analysis]

## Exercises

**Easy** — Implement a single-layer perceptron for the AND and OR logic gates. Verify it converges.

**Easy** — Plot sigmoid, tanh, ReLU, and Leaky ReLU on the same graph. Label all axes and show the range.

**Medium** — Implement a 2-layer MLP from scratch (no PyTorch) to solve XOR. Show the decision boundary.

**Hard** — Build a neural network in PyTorch with 3 hidden layers. Experiment with different activation functions and initialization schemes. Report training convergence speed.

**Hard** — Implement backpropagation manually for a 2-layer network and verify gradients match PyTorch autograd.

---


## Common Mistakes

1. Using sigmoid activation in hidden layers of deep networks — sigmoid causes vanishing gradients; use ReLU for hidden layers and sigmoid only for binary output
2. Initializing all weights to zero — symmetric neurons never break symmetry; all neurons learn the same features; use He or Xavier initialization
3. Ignoring gradient magnitudes during training — exploding gradients cause NaN losses; use gradient clipping and monitor gradient norms
4. Choosing the wrong loss function — MSE for classification gives poor gradients; use cross-entropy for classification and MSE for regression
5. Not using `.detach()` when computing loss values for logging — accidentally backpropagating through logging operations wastes memory and can corrupt gradients


## Revision Notes

- Perceptron is a linear binary classifier that cannot solve XOR (not linearly separable)
- Activation functions introduce non-linearity; ReLU is the default for hidden layers (avoids vanishing gradients)
- Multi-layer perceptrons with enough capacity can approximate any continuous function (universal approximation theorem)
- Backpropagation uses the chain rule to compute gradients layer by layer from output to input
- PyTorch autograd builds a dynamic computational graph during forward pass and traverses it backward on `.backward()`
- He initialization (variance = 2/fan_in) for ReLU; Xavier initialization (variance = 2/(fan_in + fan_out)) for tanh/sigmoid
- Vanishing gradients: solved by ReLU, batch normalization, residual connections, and proper initialization
- Cross-entropy loss for classification; MSE for regression; BCE for binary classification


## Summary

Neural networks start with the perceptron — a simple linear classifier limited to linearly separable problems like AND and OR. Activation functions (sigmoid, tanh, ReLU, Leaky ReLU) introduce non-linearity, enabling multi-layer perceptrons to approximate any continuous function. Backpropagation efficiently computes gradients through the chain rule, and PyTorch's autograd automates this process with dynamic computational graphs. Weight initialization is critical: He init for ReLU networks, Xavier for sigmoid/tanh. Vanishing and exploding gradients are common deep network challenges solved by ReLU activations, proper initialization, and batch normalization. Loss function selection (cross-entropy for classification, MSE for regression) directly impacts training stability.


## Placement Section


### Top 10 Interview Questions

#### Google Style
1. Explain why a single perceptron cannot solve XOR and design a minimal neural network that can. What is the decision boundary?
2. Derive backpropagation for a 2-layer network from scratch, showing the chain rule application at each step

#### Amazon Style
1. A neural network's training loss stops decreasing after 5 epochs. Diagnose whether this is underfitting or overfitting and describe your next three actions
2. Describe how you would build and deploy a neural network classifier that processes 1 million predictions per day with p99 < 50ms

#### Microsoft Style
1. How would you explain the vanishing gradient problem to a junior developer who is seeing their deep network fail to train?
2. A production neural network's accuracy dropped from 95% to 80% after a code update. Walk through your debugging process

#### NVIDIA Style
1. A neural network trains on GPU but the backward pass is 5x slower than the forward pass. What causes this and how do you optimize it?
2. You need to train a model with 10 billion parameters on a cluster of 8 A100 GPUs. How do you implement model parallelism and gradient synchronization?

#### AI Startup Style
1. You need to classify customer support tickets into 20 categories using a neural network. What architecture do you choose, what loss function, and how do you handle class imbalance?
2. Your inference API runs a neural network that takes 2 seconds per prediction. The client needs 100ms. Propose three optimization strategies


### Resume Tips
- List "Deep Learning" and "PyTorch" under Technical Skills with specific capabilities (autograd, nn.Module, GPU training)
- Project example: "Implemented multi-layer perceptron from scratch with backpropagation, achieving 98% accuracy on MNIST"
- Mention neural network debugging skills: "Diagnosed vanishing gradient problem in 12-layer network, resolved with He initialization and batch normalization"


### Interview Day Checklist
- [ ] Can explain why a single perceptron cannot solve XOR with a diagram
- [ ] Can derive backpropagation for a 2-layer network on a whiteboard
- [ ] Can list the vanishing gradient problem's causes and 3 solutions from memory
- [ ] Can describe He vs Xavier initialization and when to use each
- [ ] Can explain PyTorch autograd's dynamic computational graph concept

> **Next**: [PyTorch Tensors](02-pytorch-tensors.md)
