# Week 13: Neural Networks Fundamentals

## 📚 Learning Objectives
- Understand neural network architecture
- Implement forward & backpropagation
- Build neural networks from scratch
- Master activation functions
- Train deep learning models

---

## What are Neural Networks?

### Biological Inspiration
- Inspired by human brain neurons
- Interconnected nodes (neurons)
- Learn patterns through training
- Capable of complex pattern recognition

### Artificial Neuron (Perceptron)

```
Inputs (x₁, x₂, ..., xₙ)
    ↓
Weights (w₁, w₂, ..., wₙ)
    ↓
Weighted Sum: z = Σ(wᵢxᵢ) + b
    ↓
Activation Function: a = f(z)
    ↓
Output
```

---

## Activation Functions

### 1. Sigmoid
$$\sigma(z) = \frac{1}{1 + e^{-z}}$$

```python
import numpy as np
import matplotlib.pyplot as plt

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

def sigmoid_derivative(z):
    return sigmoid(z) * (1 - sigmoid(z))

# Visualize
z = np.linspace(-10, 10, 100)
plt.figure(figsize=(12, 4))

plt.subplot(1, 3, 1)
plt.plot(z, sigmoid(z))
plt.title('Sigmoid')
plt.grid(True)

plt.subplot(1, 3, 2)
plt.plot(z, sigmoid_derivative(z))
plt.title('Sigmoid Derivative')
plt.grid(True)
plt.show()
```

### 2. Tanh
$$tanh(z) = \frac{e^z - e^{-z}}{e^z + e^{-z}}$$

```python
def tanh(z):
    return np.tanh(z)

def tanh_derivative(z):
    return 1 - np.tanh(z)**2
```

### 3. ReLU (Rectified Linear Unit)
$$ReLU(z) = max(0, z)$$

```python
def relu(z):
    return np.maximum(0, z)

def relu_derivative(z):
    return (z > 0).astype(float)
```

### 4. Leaky ReLU
$$LeakyReLU(z) = max(0.01z, z)$$

```python
def leaky_relu(z, alpha=0.01):
    return np.where(z > 0, z, alpha * z)

def leaky_relu_derivative(z, alpha=0.01):
    return np.where(z > 0, 1, alpha)
```

### 5. Softmax (for multi-class)
$$softmax(z_i) = \frac{e^{z_i}}{\sum_{j} e^{z_j}}$$

```python
def softmax(z):
    exp_z = np.exp(z - np.max(z, axis=1, keepdims=True))
    return exp_z / np.sum(exp_z, axis=1, keepdims=True)
```

---

## Neural Network from Scratch

### Complete Implementation

```python
import numpy as np
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

class NeuralNetwork:
    """
    Feedforward Neural Network from scratch
    Supports multiple hidden layers
    """
    
    def __init__(self, layer_sizes, learning_rate=0.01, activation='relu'):
        """
        layer_sizes: list of layer sizes [input, hidden1, hidden2, ..., output]
        """
        self.layer_sizes = layer_sizes
        self.learning_rate = learning_rate
        self.activation = activation
        
        # Initialize weights and biases
        self.weights = []
        self.biases = []
        
        for i in range(len(layer_sizes) - 1):
            # He initialization for ReLU
            w = np.random.randn(layer_sizes[i], layer_sizes[i+1]) * np.sqrt(2 / layer_sizes[i])
            b = np.zeros((1, layer_sizes[i+1]))
            
            self.weights.append(w)
            self.biases.append(b)
        
        self.loss_history = []
    
    def _activate(self, z, derivative=False):
        """Apply activation function"""
        if self.activation == 'sigmoid':
            if derivative:
                return z * (1 - z)
            return 1 / (1 + np.exp(-np.clip(z, -500, 500)))
        
        elif self.activation == 'tanh':
            if derivative:
                return 1 - z**2
            return np.tanh(z)
        
        elif self.activation == 'relu':
            if derivative:
                return (z > 0).astype(float)
            return np.maximum(0, z)
        
        elif self.activation == 'leaky_relu':
            if derivative:
                return np.where(z > 0, 1, 0.01)
            return np.where(z > 0, z, 0.01 * z)
    
    def forward_propagation(self, X):
        """
        Forward pass through network
        Returns: activations for each layer
        """
        activations = [X]
        z_values = []
        
        for i in range(len(self.weights) - 1):
            # Hidden layers
            z = np.dot(activations[-1], self.weights[i]) + self.biases[i]
            z_values.append(z)
            a = self._activate(z)
            activations.append(a)
        
        # Output layer (sigmoid for binary classification)
        z = np.dot(activations[-1], self.weights[-1]) + self.biases[-1]
        z_values.append(z)
        a = 1 / (1 + np.exp(-np.clip(z, -500, 500)))  # Sigmoid
        activations.append(a)
        
        return activations, z_values
    
    def backward_propagation(self, X, y, activations, z_values):
        """
        Backward pass (gradient computation)
        """
        m = X.shape[0]
        gradients_w = [np.zeros_like(w) for w in self.weights]
        gradients_b = [np.zeros_like(b) for b in self.biases]
        
        # Output layer error
        delta = activations[-1] - y.reshape(-1, 1)
        
        # Backpropagate through layers
        for i in range(len(self.weights) - 1, -1, -1):
            # Calculate gradients
            gradients_w[i] = np.dot(activations[i].T, delta) / m
            gradients_b[i] = np.sum(delta, axis=0, keepdims=True) / m
            
            if i > 0:
                # Propagate error to previous layer
                delta = np.dot(delta, self.weights[i].T) * self._activate(activations[i], derivative=True)
        
        return gradients_w, gradients_b
    
    def update_parameters(self, gradients_w, gradients_b):
        """Update weights and biases using gradient descent"""
        for i in range(len(self.weights)):
            self.weights[i] -= self.learning_rate * gradients_w[i]
            self.biases[i] -= self.learning_rate * gradients_b[i]
    
    def compute_loss(self, y_true, y_pred):
        """Binary cross-entropy loss"""
        m = y_true.shape[0]
        epsilon = 1e-15  # Prevent log(0)
        y_pred = np.clip(y_pred, epsilon, 1 - epsilon)
        loss = -np.mean(y_true * np.log(y_pred) + (1 - y_true) * np.log(1 - y_pred))
        return loss
    
    def fit(self, X, y, epochs=1000, verbose=True):
        """Train the neural network"""
        for epoch in range(epochs):
            # Forward pass
            activations, z_values = self.forward_propagation(X)
            
            # Compute loss
            loss = self.compute_loss(y, activations[-1])
            self.loss_history.append(loss)
            
            # Backward pass
            gradients_w, gradients_b = self.backward_propagation(X, y, activations, z_values)
            
            # Update parameters
            self.update_parameters(gradients_w, gradients_b)
            
            if verbose and epoch % 100 == 0:
                print(f"Epoch {epoch}/{epochs}, Loss: {loss:.4f}")
        
        return self
    
    def predict_proba(self, X):
        """Predict probabilities"""
        activations, _ = self.forward_propagation(X)
        return activations[-1]
    
    def predict(self, X, threshold=0.5):
        """Predict class labels"""
        proba = self.predict_proba(X)
        return (proba >= threshold).astype(int)
    
    def score(self, X, y):
        """Calculate accuracy"""
        predictions = self.predict(X)
        return np.mean(predictions.flatten() == y)

# Example Usage
# Generate dataset
X, y = make_classification(n_samples=1000, n_features=20, n_classes=2, random_state=42)

# Split and scale
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# Build neural network
# Architecture: 20 -> 64 -> 32 -> 1
nn = NeuralNetwork(layer_sizes=[20, 64, 32, 1], learning_rate=0.1, activation='relu')

# Train
nn.fit(X_train, y_train, epochs=1000, verbose=True)

# Evaluate
train_acc = nn.score(X_train, y_train)
test_acc = nn.score(X_test, y_test)

print(f"\nTraining Accuracy: {train_acc:.4f}")
print(f"Test Accuracy: {test_acc:.4f}")

# Plot loss curve
plt.figure(figsize=(10, 6))
plt.plot(nn.loss_history)
plt.xlabel('Epoch')
plt.ylabel('Loss')
plt.title('Training Loss over Epochs')
plt.grid(True)
plt.show()
```

---

## Backpropagation Algorithm

### Mathematical Derivation

**Forward Pass:**
1. $z^{[l]} = W^{[l]} a^{[l-1]} + b^{[l]}$
2. $a^{[l]} = g^{[l]}(z^{[l]})$

**Backward Pass:**
1. $dz^{[L]} = a^{[L]} - y$
2. $dW^{[L]} = \frac{1}{m} dz^{[L]} (a^{[L-1]})^T$
3. $db^{[L]} = \frac{1}{m} \sum dz^{[L]}$
4. $dz^{[l]} = (W^{[l+1]})^T dz^{[l+1]} * g'^{[l]}(z^{[l]})$

**Update:**
$$W^{[l]} := W^{[l]} - \alpha \cdot dW^{[l]}$$

---

## Advanced Topics

### 1. Batch Processing

```python
def train_with_batches(self, X, y, batch_size=32, epochs=100):
    """Mini-batch gradient descent"""
    n_samples = X.shape[0]
    
    for epoch in range(epochs):
        # Shuffle data
        indices = np.random.permutation(n_samples)
        X_shuffled = X[indices]
        y_shuffled = y[indices]
        
        # Process batches
        for i in range(0, n_samples, batch_size):
            X_batch = X_shuffled[i:i+batch_size]
            y_batch = y_shuffled[i:i+batch_size]
            
            # Train on batch
            activations, z_values = self.forward_propagation(X_batch)
            gradients_w, gradients_b = self.backward_propagation(X_batch, y_batch, activations, z_values)
            self.update_parameters(gradients_w, gradients_b)
```

### 2. Dropout Regularization

```python
def forward_with_dropout(self, X, dropout_rate=0.5, training=True):
    """Forward pass with dropout"""
    activations = [X]
    masks = []
    
    for i in range(len(self.weights) - 1):
        z = np.dot(activations[-1], self.weights[i]) + self.biases[i]
        a = self._activate(z)
        
        if training:
            # Apply dropout
            mask = np.random.rand(*a.shape) > dropout_rate
            a *= mask
            a /= (1 - dropout_rate)  # Scale
            masks.append(mask)
        
        activations.append(a)
    
    # Output layer (no dropout)
    z = np.dot(activations[-1], self.weights[-1]) + self.biases[-1]
    a = 1 / (1 + np.exp(-z))
    activations.append(a)
    
    return activations, masks
```

### 3. L2 Regularization

```python
def compute_loss_with_regularization(self, y_true, y_pred, lambda_reg=0.01):
    """Loss with L2 regularization"""
    m = y_true.shape[0]
    
    # Cross-entropy loss
    ce_loss = self.compute_loss(y_true, y_pred)
    
    # L2 regularization term
    l2_term = 0
    for w in self.weights:
        l2_term += np.sum(w ** 2)
    
    total_loss = ce_loss + (lambda_reg / (2 * m)) * l2_term
    return total_loss
```

---

## Practical Projects

### Project 1: MNIST Digit Recognition

```python
from sklearn.datasets import load_digits
from sklearn.metrics import classification_report, confusion_matrix
import seaborn as sns

# Load MNIST-like dataset
digits = load_digits()
X, y = digits.data, digits.target

# Normalize
X = X / 16.0

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Multi-class neural network
class MultiClassNN(NeuralNetwork):
    def __init__(self, layer_sizes, learning_rate=0.01, activation='relu', n_classes=10):
        super().__init__(layer_sizes, learning_rate, activation)
        self.n_classes = n_classes
    
    def forward_propagation(self, X):
        activations = [X]
        z_values = []
        
        for i in range(len(self.weights) - 1):
            z = np.dot(activations[-1], self.weights[i]) + self.biases[i]
            z_values.append(z)
            a = self._activate(z)
            activations.append(a)
        
        # Softmax output
        z = np.dot(activations[-1], self.weights[-1]) + self.biases[-1]
        z_values.append(z)
        exp_z = np.exp(z - np.max(z, axis=1, keepdims=True))
        a = exp_z / np.sum(exp_z, axis=1, keepdims=True)
        activations.append(a)
        
        return activations, z_values
    
    def fit(self, X, y, epochs=1000):
        # One-hot encode labels
        y_onehot = np.zeros((y.shape[0], self.n_classes))
        y_onehot[np.arange(y.shape[0]), y] = 1
        
        return super().fit(X, y_onehot, epochs)
    
    def predict(self, X):
        proba = self.predict_proba(X)
        return np.argmax(proba, axis=1)

# Train
nn_digits = MultiClassNN([64, 128, 64, 10], learning_rate=0.1, n_classes=10)
nn_digits.fit(X_train, y_train, epochs=500)

# Evaluate
y_pred = nn_digits.predict(X_test)
print("\nClassification Report:")
print(classification_report(y_test, y_pred))

# Confusion matrix
cm = confusion_matrix(y_test, y_pred)
plt.figure(figsize=(10, 8))
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues')
plt.xlabel('Predicted')
plt.ylabel('Actual')
plt.title('Confusion Matrix')
plt.show()
```

---

## Key Takeaways

✅ Neural networks are universal function approximators  
✅ Backpropagation computes gradients efficiently  
✅ Activation functions introduce non-linearity  
✅ Regularization prevents overfitting  
✅ Batch processing improves training stability  

**Next Week:** TensorFlow & Keras! 🔥
