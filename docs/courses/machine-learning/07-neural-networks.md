# Chapter 7: Neural Networks

---

## Learning Objectives

- Explain the structure of an Artificial Neuron (Perceptron)
- Describe the architecture of a Multi-Layer Perceptron (MLP)
- Understand the role of Activation Functions (ReLU, Sigmoid, Tanh)
- Derivation and implementation of the Backpropagation algorithm

---

## Theory

### The Artificial Neuron
An artificial neuron is the fundamental building block of a neural network. It takes several inputs, applies a weight to each, sums them with a bias, and passes the result through an **activation function**.
$$y = f(\sum_{i=1}^{n} w_ix_i + b)$$
Where:
- $x_i$ are the inputs.
- $w_i$ are the weights.
- $b$ is the bias.
- $f$ is the activation function.

### Multi-Layer Perceptron (MLP)
An MLP is a feedforward neural network consisting of at least three layers of nodes: an **input layer**, one or more **hidden layers**, and an **output layer**. Except for the input nodes, each node is a neuron that uses a nonlinear activation function. The hidden layers allow the network to learn complex, non-linear representations of the data.

### Activation Functions
Activation functions introduce non-linearity into the network, which is essential for learning complex patterns.
- **Sigmoid**: $\sigma(x) = \frac{1}{1+e^{-x}}$. Output range $(0, 1)$. Used in binary classification.
- **ReLU (Rectified Linear Unit)**: $f(x) = \max(0, x)$. Output range $[0, \infty)$. The most common choice for hidden layers because it avoids the vanishing gradient problem.
- **Softmax**: Used in the output layer for multi-class classification to produce a probability distribution over classes.

### Training: Forward and Backward Passes
1. **Forward Pass**: Data flows from the input layer through the hidden layers to the output layer to produce a prediction.
2. **Loss Calculation**: The difference between the prediction and the actual target is calculated using a loss function (e.g., MSE or Cross-Entropy).
3. **Backward Pass (Backpropagation)**: The gradient of the loss with respect to each weight is calculated using the **Chain Rule** of calculus.
4. **Update**: Weights are updated using an optimization algorithm like Stochastic Gradient Descent (SGD):
$$w := w - \alpha \frac{\partial \mathcal{L}}{\partial w}$$

---

## Examples

### Example 1: The XOR Problem
A single-layer perceptron cannot solve the XOR problem because the data is not linearly separable.
- **Data**: $(0,0) \to 0, (0,1) \to 1, (1,0) \to 1, (1,1) \to 0$.
- **Solution**: A neural network with one hidden layer of at least two neurons can represent the XOR logic by combining different linear boundaries.

### Example 2: Training a Simple MLP with PyTorch
```python
import torch
import torch.nn as nn
import torch.optim as optim

# Define a simple network
class SimpleNet(nn.Module):
    def __init__(self):
        super(SimpleNet, self).__init__()
        self.hidden = nn.Linear(10, 5)
        self.output = nn.Linear(5, 1)
        self.relu = nn.ReLU()
        self.sigmoid = nn.Sigmoid()

    def forward(self, x):
        x = self.relu(self.hidden(x))
        x = self.sigmoid(self.output(x))
        return x

model = SimpleNet()
optimizer = optim.SGD(model.parameters(), lr=0.01)
criterion = nn.BCELoss()
```
**Process**: Demonstrates the initialization of layers, activation functions, and the optimization setup.

---

## Summary

- Neural networks are inspired by the biological structure of the brain.
- A single neuron is a linear model followed by a non-linear activation function.
- Multi-layer networks can approximate any continuous function (Universal Approximation Theorem).
- Backpropagation is the core algorithm for training neural networks, utilizing the chain rule to compute gradients.
- Choosing the right activation function and architecture is crucial for model performance and convergence.

---

## Exercises

### Review Questions
1. Why is a non-linear activation function necessary in a multi-layer neural network?
2. Explain the "Vanishing Gradient" problem and how ReLU helps mitigate it.
3. What is the difference between a hidden layer and an output layer?
4. How does the "Chain Rule" apply to the backpropagation algorithm?

### Application Problems
1. Calculate the output of a single neuron with inputs $[0.5, 0.8]$, weights $[0.4, -0.5]$, bias $0.1$, and a ReLU activation.
2. If a neural network has an input layer of 10 nodes, a hidden layer of 20 nodes, and an output layer of 2 nodes, how many total trainable weights and biases does it have?
3. Draw the computation graph for the function $z = (w_1x_1 + w_2x_2)^2$.

### Challenge Problem
1. Mathematically derive the update rule for a weight $w_{ij}$ in a simple 3-layer MLP using the MSE loss function. Show each step of the chain rule application.
