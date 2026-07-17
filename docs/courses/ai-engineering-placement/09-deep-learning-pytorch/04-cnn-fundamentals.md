---
title: CNN Fundamentals
---

# CNN Fundamentals

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand convolutional layer mechanics |
| LO2 | Implement CNN with nn.Conv2d |
| LO3 | Apply pooling and padding strategies |
| LO4 | Use batch normalization in CNNs |
| LO5 | Build ImageNet-style architectures |


## Chapter at a Glance

| Section | Topic |
|---------|-------|
| 1.1 | Convolution Operation |
| 2.1 | Pooling and Padding |
| 3.1 | Batch Normalization |
| 4.1 | Building a CNN Classifier |
| 5.1 | Depthwise and Grouped Convolutions |

## Chapter Roadmap

```mermaid
flowchart LR
    Start --> S1
    S1 --> S2
    S2 --> End
```

## 1.1 Convolution Operation

Convolution applies learned filters across input spatial dimensions.

```python
import torch
import torch.nn as nn

conv = nn.Conv2d(in_channels=3, out_channels=16, kernel_size=3, stride=1, padding=1)
x = torch.randn(4, 3, 32, 32)  # batch, channels, height, width
y = conv(x)
print(f'Input: {x.shape}, Output: {y.shape}')
# Parameters: (in_c * kernel_h * kernel_w + 1) * out_c
print(f'Parameters: {{sum(p.numel() for p in conv.parameters()):,}}')
```
**Key formula**: Output size = (W - K + 2P) / S + 1 where W=input, K=kernel, P=padding, S=stride.

---

## 2.1 Pooling and Padding

Pooling reduces spatial dimensions and provides translation invariance.

```python
maxpool = nn.MaxPool2d(kernel_size=2, stride=2)
avgpool = nn.AvgPool2d(kernel_size=2, stride=2)
adaptive = nn.AdaptiveAvgPool2d((1, 1))
x = torch.randn(4, 16, 32, 32)
print(f'MaxPool: {maxpool(x).shape}')
print(f'AvgPool: {avgpool(x).shape}')
print(f'Adaptive: {adaptive(x).shape}')
```
**Padding modes**: 'valid' (no padding), 'same' (output size = input size / stride), custom padding.

---

## 3.1 Batch Normalization

Normalizes activations across batch dimension for faster convergence.

```python
bn = nn.BatchNorm2d(num_features=16)
x = torch.randn(4, 16, 32, 32)
y = bn(x)
print(f'Running mean: {bn.running_mean.shape}')
print(f'Running var: {bn.running_var.shape}')
# During eval, running stats replace batch stats
bn.eval()
y_eval = bn(x)
print(f'Eval output mean: {y_eval.mean():.4f}')
```

---

## 4.1 Building a CNN Classifier

Complete CNN for image classification.

```python
class SimpleCNN(nn.Module):
    def __init__(self, num_classes):
        super().__init__()
        self.features = nn.Sequential(
            nn.Conv2d(3, 32, 3, padding=1), nn.ReLU(), nn.MaxPool2d(2),
            nn.Conv2d(32, 64, 3, padding=1), nn.ReLU(), nn.MaxPool2d(2),
            nn.Conv2d(64, 128, 3, padding=1), nn.ReLU(), nn.MaxPool2d(2),
        )
        self.classifier = nn.Sequential(
            nn.AdaptiveAvgPool2d((1, 1)),
            nn.Flatten(),
            nn.Linear(128, 256), nn.ReLU(), nn.Dropout(0.5),
            nn.Linear(256, num_classes),
        )
    def forward(self, x):
        x = self.features(x)
        x = self.classifier(x)
        return x

model = SimpleCNN(num_classes=10)
x = torch.randn(4, 3, 64, 64)
print(f'Output: {model(x).shape}')
```

---

## 5.1 Depthwise and Grouped Convolutions

Efficient convolution variants.

```python
dw = nn.Conv2d(32, 32, 3, groups=32, padding=1)  # depthwise
pw = nn.Conv2d(32, 64, 1)  # pointwise
dw_pw = nn.Sequential(dw, pw)  # depthwise separable
print(f'Depthwise params: {{sum(p.numel() for p in dw.parameters())}}')
print(f'Standard params: {{sum(p.numel() for p in nn.Conv2d(32, 64, 3).parameters())}}')

# Grouped convolution
grouped = nn.Conv2d(32, 64, 3, groups=2)
print(f'Grouped params: {{sum(p.numel() for p in grouped.parameters())}}')
```

---



## TypeScript Parallel

TypeScript implementation of convolution operation.

```typescript
function convolve2d(input: number[][], kernel: number[][]): number[][] {
  const k = kernel.length, pad = Math.floor(k/2);
  const h = input.length, w = input[0].length;
  const out: number[][] = Array.from({length: h-2*pad}, () => new Array(w-2*pad).fill(0));
  for (let i = pad; i < h-pad; i++)
    for (let j = pad; j < w-pad; j++) {
      let sum = 0;
      for (let ki = 0; ki < k; ki++)
        for (let kj = 0; kj < k; kj++)
          sum += input[i- pad+ki][j-pad+kj] * kernel[ki][kj];
      out[i-pad][j-pad] = sum;
    }
  return out;
}
```

## Summary

- Convolution applies learned filters across spatial dimensions
- Pooling reduces spatial size and provides translation invariance
- Batch normalization accelerates training and stabilizes activations
- Adaptive pooling allows variable input sizes
- Depthwise separable convolutions reduce parameter count drastically

## Practical Takeaways

| Scenario | Do This |
|----------|---------|
| Prototype | Use ready components |

## Interview Q&A

<details class="tp-qa-card" data-qid="dl09-q1"><summary>What is the output size formula for convolution?</summary><div class="tp-qa-answer"><p>Output = (W - K + 2P) / S + 1 where W=input, K=kernel, P=padding, S=stride.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q2"><summary>What is the difference between MaxPool and AvgPool?</summary><div class="tp-qa-answer"><p>MaxPool takes the maximum value in each window (preserves edges); AvgPool takes the mean (smooths).</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q3"><summary>How does BatchNorm affect training?</summary><div class="tp-qa-answer"><p>It normalizes activations, allowing higher learning rates, reducing internal covariate shift, and acting as regularizer.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q4"><summary>What are depthwise separable convolutions?</summary><div class="tp-qa-answer"><p>A depthwise conv (per-channel) followed by a pointwise conv (1x1). Used in MobileNet for efficient mobile models.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q5"><summary>What is the effect of stride > 1?</summary><div class="tp-qa-answer"><p>It downsamples the spatial dimensions, reducing computation and memory at the cost of spatial resolution.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>



## Chapter Quiz

**Q1**: What is the formula for output size after convolution?

a
)
 
(
W
 
+
 
K
 
-
 
2
P
)
 
/
 
S
,
 
b
)
 
(
W
 
-
 
K
 
+
 
2
P
)
 
/
 
S
 
+
 
1
,
 
c
)
 
(
W
 
-
 
K
)
 
/
 
S
,
 
d
)
 
W
 
*
 
K
 
/
 
S
 
+
 
P
<details class="tp-qa-card" data-qid="dl09-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>*Answer: b</strong></p><p>Explanation provided in the answer.</p></div></details>

**Q2**: Which pooling layer is best for preserving strong features?

a
)
 
A
v
g
P
o
o
l
,
 
b
)
 
M
a
x
P
o
o
l
,
 
c
)
 
M
i
n
P
o
o
l
,
 
d
)
 
A
d
a
p
t
i
v
e
<details class="tp-qa-card" data-qid="dl09-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>*Answer: b</strong></p><p>Explanation provided in the answer.</p></div></details>

**Q3**: What does BatchNorm normalize?

a
)
 
W
e
i
g
h
t
s
,
 
b
)
 
G
r
a
d
i
e
n
t
s
,
 
c
)
 
A
c
t
i
v
a
t
i
o
n
s
 
a
c
r
o
s
s
 
b
a
t
c
h
,
 
d
)
 
I
n
p
u
t
 
p
i
x
e
l
s
<details class="tp-qa-card" data-qid="dl09-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>*Answer: c</strong></p><p>Explanation provided in the answer.</p></div></details>

**Q4**: Depthwise separable conv splits into:

a
)
 
D
W
 
+
 
P
W
,
 
b
)
 
P
W
 
+
 
D
W
,
 
c
)
 
D
W
 
+
 
D
W
,
 
d
)
 
P
W
 
+
 
P
W
<details class="tp-qa-card" data-qid="dl09-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>*Answer: a</strong></p><p>Explanation provided in the answer.</p></div></details>

**Q5**: What padding gives same output spatial size as input when stride=1?

a
)
 
v
a
l
i
d
,
 
b
)
 
s
a
m
e
,
 
c
)
 
f
u
l
l
,
 
d
)
 
c
u
s
t
o
m
<details class="tp-qa-card" data-qid="dl09-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>*Answer: b</strong></p><p>Explanation provided in the answer.</p></div></details>



## Exercises

**Easy** — Implement a Conv2d from scratch using matrix multiplication (im2col).
**Easy** — Compute the number of parameters in a Conv2d(3, 64, 7).
**Medium** — Build a CNN with 4 conv layers that classifies CIFAR-10 images.
**Medium** — Implement and compare standard vs depthwise separable conv parameter counts.
**Hard** — Implement transposed convolution (ConvTranspose2d) manually.

---

> **Next**: [Advanced CNN](05-advanced-cnn.md)
