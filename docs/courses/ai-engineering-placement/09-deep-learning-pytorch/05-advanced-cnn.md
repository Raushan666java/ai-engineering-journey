# Advanced CNN Architectures

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand AlexNet and VGG architectures |
| LO2 | Implement ResNet with skip connections |
| LO3 | Design Inception modules with parallel convolutions |
| LO4 | Build DenseNet with dense connectivity |
| LO5 | Analyze modern architectures: EfficientNet, ConvNeXt |

## Chapter at a Glance

| Section | Topic |
|---------|-------|
| 5.1 | AlexNet and VGG |
| 5.2 | ResNet and Skip Connections |
| 5.3 | Inception Networks |
| 5.4 | DenseNet |
| 5.5 | EfficientNet and ConvNeXt |

## Chapter Roadmap

```mermaid
flowchart LR
    A[AlexNet] --> B[VGG]
    B --> C[ResNet]
    C --> D[Inception]
    D --> E[DenseNet]
    E --> F[EfficientNet]
```

## 5.1 AlexNet and VGG

AlexNet (2012) pioneered deep CNNs with 8 layers; VGG (2014) used uniform 3x3 convolutions with 16-19 layers.

```python
import torch
import torch.nn as nn

class AlexNetBlock(nn.Module):
    def __init__(self, in_c, out_c, kernel_size, stride=1, padding=0):
        super().__init__()
        self.conv = nn.Conv2d(in_c, out_c, kernel_size, stride, padding)
        self.relu = nn.ReLU(inplace=True)
        self.lrn = nn.LocalResponseNorm(size=5, alpha=1e-4, beta=0.75)
        self.pool = nn.MaxPool2d(kernel_size=3, stride=2)

    def forward(self, x):
        x = self.conv(x)
        x = self.relu(x)
        x = self.lrn(x)
        x = self.pool(x)
        return x

class VGGBlock(nn.Module):
    def __init__(self, in_c, out_c, num_convs):
        super().__init__()
        layers = []
        for i in range(num_convs):
            layers.append(nn.Conv2d(in_c if i == 0 else out_c, out_c, 3, padding=1))
            layers.append(nn.ReLU(inplace=True))
            in_c = out_c
        layers.append(nn.MaxPool2d(2))
        self.block = nn.Sequential(*layers)

    def forward(self, x):
        return self.block(x)
```

**VGG design insight**: Stacking 3x3 convs achieves same receptive field as larger kernels with fewer parameters.

---

## 5.2 ResNet and Skip Connections

ResNet (2015) introduced residual learning via skip connections to train very deep networks (50-152 layers).

```python
import torch.nn.functional as F

class ResidualBlock(nn.Module):
    expansion = 1
    def __init__(self, in_c, out_c, stride=1, downsample=None):
        super().__init__()
        self.conv1 = nn.Conv2d(in_c, out_c, 3, stride, 1, bias=False)
        self.bn1 = nn.BatchNorm2d(out_c)
        self.conv2 = nn.Conv2d(out_c, out_c, 3, 1, 1, bias=False)
        self.bn2 = nn.BatchNorm2d(out_c)
        self.downsample = downsample
        self.relu = nn.ReLU(inplace=True)

    def forward(self, x):
        identity = x
        if self.downsample is not None:
            identity = self.downsample(x)
        out = self.conv1(x); out = self.bn1(out); out = self.relu(out)
        out = self.conv2(out); out = self.bn2(out)
        out += identity
        out = self.relu(out)
        return out

class Bottleneck(nn.Module):
    expansion = 4
    def __init__(self, in_c, out_c, stride=1, downsample=None):
        super().__init__()
        width = out_c
        self.conv1 = nn.Conv2d(in_c, width, 1, bias=False)
        self.bn1 = nn.BatchNorm2d(width)
        self.conv2 = nn.Conv2d(width, width, 3, stride, 1, bias=False)
        self.bn2 = nn.BatchNorm2d(width)
        self.conv3 = nn.Conv2d(width, out_c * self.expansion, 1, bias=False)
        self.bn3 = nn.BatchNorm2d(out_c * self.expansion)
        self.relu = nn.ReLU(inplace=True)
        self.downsample = downsample

    def forward(self, x):
        identity = x
        if self.downsample is not None:
            identity = self.downsample(x)
        out = self.conv1(x); out = self.bn1(out); out = self.relu(out)
        out = self.conv2(out); out = self.bn2(out); out = self.relu(out)
        out = self.conv3(out); out = self.bn3(out)
        out += identity
        out = self.relu(out)
        return out
```

**Why skip connections work**: They alleviate the vanishing gradient problem by providing a direct gradient highway to earlier layers.

---

## 5.3 Inception Networks

Inception (GoogLeNet, 2014) uses parallel convolutions of different kernel sizes to capture multi-scale features.

```python
class InceptionBlock(nn.Module):
    def __init__(self, in_c, c1, c2_1, c2_2, c3_1, c3_2, c4):
        super().__init__()
        # 1x1 branch
        self.b1 = nn.Sequential(
            nn.Conv2d(in_c, c1, 1), nn.BatchNorm2d(c1), nn.ReLU())
        # 3x3 branch
        self.b2 = nn.Sequential(
            nn.Conv2d(in_c, c2_1, 1), nn.BatchNorm2d(c2_1), nn.ReLU(),
            nn.Conv2d(c2_1, c2_2, 3, padding=1), nn.BatchNorm2d(c2_2), nn.ReLU())
        # 5x5 branch
        self.b3 = nn.Sequential(
            nn.Conv2d(in_c, c3_1, 1), nn.BatchNorm2d(c3_1), nn.ReLU(),
            nn.Conv2d(c3_1, c3_2, 5, padding=2), nn.BatchNorm2d(c3_2), nn.ReLU())
        # pooling branch
        self.b4 = nn.Sequential(
            nn.MaxPool2d(3, stride=1, padding=1),
            nn.Conv2d(in_c, c4, 1), nn.BatchNorm2d(c4), nn.ReLU())

    def forward(self, x):
        return torch.cat([self.b1(x), self.b2(x), self.b3(x), self.b4(x)], dim=1)

# Test
x = torch.randn(4, 192, 28, 28)
block = InceptionBlock(192, 64, 96, 128, 16, 32, 32)
y = block(x)
print(f"Inception output: {y.shape}")  # 4 x 256 x 28 x 28
```

**Key insight**: 1x1 convolutions before expensive 3x3/5x5 convs drastically reduce computation (bottleneck design).

---

## 5.4 DenseNet

DenseNet (2017) connects each layer to all subsequent layers, maximizing information flow.

```python
class DenseLayer(nn.Module):
    def __init__(self, in_c, growth_rate, bn_size=4):
        super().__init__()
        self.norm1 = nn.BatchNorm2d(in_c)
        self.relu1 = nn.ReLU(inplace=True)
        self.conv1 = nn.Conv2d(in_c, bn_size * growth_rate, 1, bias=False)
        self.norm2 = nn.BatchNorm2d(bn_size * growth_rate)
        self.relu2 = nn.ReLU(inplace=True)
        self.conv2 = nn.Conv2d(bn_size * growth_rate, growth_rate, 3, padding=1, bias=False)

    def forward(self, x):
        out = self.conv1(self.relu1(self.norm1(x)))
        out = self.conv2(self.relu2(self.norm2(out)))
        return torch.cat([x, out], dim=1)

class DenseBlock(nn.Module):
    def __init__(self, num_layers, in_c, growth_rate):
        super().__init__()
        self.layers = nn.ModuleList()
        for i in range(num_layers):
            self.layers.append(DenseLayer(in_c + i * growth_rate, growth_rate))

    def forward(self, x):
        for layer in self.layers:
            x = layer(x)
        return x

# Test
x = torch.randn(4, 64, 32, 32)
db = DenseBlock(4, 64, 32)
y = db(x)
print(f"DenseBlock output: {y.shape}")  # channels = 64 + 4*32 = 192
```

**Advantage**: Dense connectivity alleviates vanishing gradients, encourages feature reuse, and requires fewer parameters than traditional CNNs.

---

## 5.5 EfficientNet and ConvNeXt

EfficientNet (2019) uses compound scaling to balance depth, width, and resolution. ConvNeXt (2022) modernizes ResNet with Transformer-inspired design.

```python
import math

class ConvNeXtBlock(nn.Module):
    def __init__(self, dim, drop_path=0., layer_scale_init=1e-6):
        super().__init__()
        self.dwconv = nn.Conv2d(dim, dim, 7, padding=3, groups=dim)
        self.norm = nn.LayerNorm(dim, eps=1e-6)
        self.pwconv1 = nn.Linear(dim, 4 * dim)
        self.act = nn.GELU()
        self.pwconv2 = nn.Linear(4 * dim, dim)
        self.gamma = nn.Parameter(layer_scale_init * torch.ones(dim), requires_grad=True)

    def forward(self, x):
        shortcut = x
        x = self.dwconv(x)
        x = x.permute(0, 2, 3, 1)  # NCHW -> NHWC
        x = self.norm(x)
        x = self.pwconv1(x)
        x = self.act(x)
        x = self.pwconv2(x)
        x = self.gamma * x
        x = x.permute(0, 3, 1, 2)  # NHWC -> NCHW
        x += shortcut
        return x

block = ConvNeXtBlock(dim=96)
x = torch.randn(4, 96, 56, 56)
y = block(x)
print(f"ConvNeXt output: {y.shape}")
```

**Compound scaling** scales depth (L), width (C), and resolution (H,W) jointly using a coefficient phi:
- depth = alpha^phi, width = beta^phi, resolution = gamma^phi
- where alpha*beta^2*gamma^2 ≈ 2 (flops constraint)

---

## TypeScript Parallel

```typescript
interface ConvParams {
  inChannels: number; outChannels: number;
  kernelSize: number; stride: number; padding: number;
}

function conv2dForward(input: number[][][], params: ConvParams, weights: number[][][][]): number[][][] {
  const [C, H, W] = [input.length, input[0].length, input[0][0].length];
  const outH = Math.floor((H + 2 * params.padding - params.kernelSize) / params.stride + 1);
  const outW = Math.floor((W + 2 * params.padding - params.kernelSize) / params.stride + 1);
  const output: number[][][] = Array.from({length: params.outChannels}, () =>
    Array.from({length: outH}, () => new Array(outW).fill(0)));
  for (let o = 0; o < params.outChannels; o++)
    for (let oh = 0; oh < outH; oh++)
      for (let ow = 0; ow < outW; ow++) {
        let sum = 0;
        for (let c = 0; c < C; c++)
          for (let kh = 0; kh < params.kernelSize; kh++)
            for (let kw = 0; kw < params.kernelSize; kw++) {
              const ih = oh * params.stride + kh - params.padding;
              const iw = ow * params.stride + kw - params.padding;
              if (ih >= 0 && ih < H && iw >= 0 && iw < W)
                sum += input[c][ih][iw] * weights[o][c][kh][kw];
            }
        output[o][oh][ow] = sum;
      }
  return output;
}
```

## Summary

- AlexNet popularized deep CNNs with 8 layers and large kernel sizes (11x11, 5x5)
- VGG introduced uniformity with stacks of 3x3 convolutions (16-19 layers)
- ResNet uses skip connections to enable very deep networks (50-152+ layers)
- Inception modules capture multi-scale features with parallel convolutions
- DenseNet connects each layer to all subsequent layers for maximum feature reuse
- EfficientNet applies compound scaling for optimal depth/width/resolution tradeoff
- ConvNeXt modernizes CNNs with large kernel depthwise convs and LayerNorm
- Bottleneck designs (1x1 -> 3x3 -> 1x1) reduce computation in deep networks
- Pre-activation ResNet moves BN/ReLU before convolution for improved training
- All modern architectures can be implemented modularly in PyTorch with nn.Module
- Transfer learning from ImageNet-pretrained models dramatically reduces training time
- Model FLOPs vs accuracy tradeoff is a key design consideration for production deployments
- Weight standardization and group normalization improve training stability across batch sizes
- Stochastic depth (dropping layers during training) regularizes deep ResNets effectively
- Squeeze-and-Excitation blocks provide channel attention at minimal parameter cost

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Train very deep network | ResNet with skip connections | Plain VGG without residual |
| Mobile deployment | Depthwise separable + EfficientNet | Heavy Inception modules |
| Multi-scale features | Inception with 1x1 bottlenecks | Large kernels on high channels |
| Maximum feature reuse | DenseNet dense connectivity | Independently learned layers |
| Modernize legacy network | ConvNeXt upgrades (GN, GELU) | Complete architecture rewrite |
| Balance acc/efficiency | EfficientNet compound scaling | Manual depth/width tuning |
| ImageNet classification | ResNet-50 or ConvNeXt-T | Overly large models on small data |
| Feature extraction backbone | ResNet with FPN | Single-scale features only |

## Interview Q&A

<details class="tp-qa-card" data-qid="dl09-q1"><summary>Q1: What problem do skip connections solve?</summary><div class="tp-qa-answer"><p>Skip connections mitigate vanishing gradients by creating a direct gradient highway from later layers back to earlier ones. This allows training of very deep networks (50+ layers) that would otherwise suffer from degraded accuracy as depth increases.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q2"><summary>Q2: How does Inception reduce computation?</summary><div class="tp-qa-answer"><p>Inception uses 1x1 bottleneck convolutions before expensive 3x3 and 5x5 convolutions. A 1x1 conv reduces the channel dimension (e.g., from 192 to 16), then the 3x3 conv operates on fewer channels. This reduces computation by ~10x compared to applying 3x3 convs directly on high-dimensional input.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q3"><summary>Q3: What is compound scaling in EfficientNet?</summary><div class="tp-qa-answer"><p>Compound scaling jointly scales network depth, width, and input resolution using a single coefficient phi. The scaling factors satisfy: depth = alpha^phi, width = beta^phi, resolution = gamma^phi, where alpha*beta^2*gamma^2 ≈ 2 to maintain flops budget. This is more effective than scaling any single dimension independently.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q4"><summary>Q4: Why does DenseNet need fewer parameters than ResNet?</summary><div class="tp-qa-answer"><p>DenseNet reuses features across layers via dense connectivity, so each layer only needs to learn a small number of new feature maps (growth rate, typically 32). ResNet must learn all features at each layer. The cumulative feature concatenation means earlier features are directly accessible to later layers, reducing redundancy.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q5"><summary>Q5: What innovations did ConvNeXt bring to CNNs?</summary><div class="tp-qa-answer"><p>ConvNeXt modernized ResNet with: 7x7 depthwise convolutions (like ViT patches), LayerNorm instead of BatchNorm, GELU activation, inverted bottleneck (4x expansion ratio), and fewer normalization/activation layers. These changes, inspired by Vision Transformers, boosted ResNet accuracy while maintaining CNN efficiency.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q6"><summary>Q6: What is the difference between BasicBlock and Bottleneck in ResNet?</summary><div class="tp-qa-answer"><p>BasicBlock uses two 3x3 conv layers (used in ResNet-18/34). Bottleneck uses a 1x1->3x3->1x1 sandwich (used in ResNet-50/101/152). Bottleneck is more parameter-efficient per layer: the 1x1 convs reduce then expand channel dimensions, making the 3x3 conv operate on fewer channels. Bottleneck also has expansion=4, outputting 4x the input channels.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q7"><summary>Q7: How does VGG achieve large receptive field with small kernels?</summary><div class="tp-qa-answer"><p>Stacking two 3x3 convs gives a 5x5 effective receptive field; three 3x3 convs give 7x7. This requires fewer parameters: 3 * (3*3*C*C) = 27C^2 vs one 7x7: 49C^2. Extra ReLU layers increase non-linearity. This design principle is central to modern CNN architectures.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q8"><summary>Q8: What is the role of 1x1 convolutions?</summary><div class="tp-qa-answer"><p>1x1 convolutions: (1) change channel dimensionality (bottleneck), (2) add non-linearity when followed by activation, (3) mix cross-channel information without spatial correlation. They are extremely parameter-efficient and are used in Inception, ResNet bottleneck, MobileNet, and most modern architectures for channel projection.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q9"><summary>Q9: What is Group Normalization and when to use it?</summary><div class="tp-qa-answer"><p>Group Normalization (GN) divides channels into groups and normalizes within each group. Unlike BatchNorm, GN does not depend on batch size, making it suitable for small batch sizes (1-16), video models, 3D medical images, and when batch statistics are unreliable. GN is used in ConvNeXt and Mask R-CNN.</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl09-q10"><summary>Q10: How do you implement a ResNet-50 in PyTorch?</summary><div class="tp-qa-answer"><p>ResNet-50 uses Bottleneck blocks with [3,4,6,3] layers per stage. Each stage starts with stride=2 conv for downsampling (except first). The expansion=4 means output channels are 4x the input. A stem (7x7 conv + maxpool) processes the input. torchvision provides a ready implementation: resnet50(pretrained=True).</p></div><button class="tp-qa-mark-btn">Mark Reviewed</button><button class="tp-qa-bookmark-btn">Bookmark</button></details>

## Practical Takeaways

- Use ResNet with pre-activation blocks for stable gradient flow in very deep networks (>100 layers)
- Depthwise separable convolutions reduce parameters by a factor of ~9 compared to standard conv with 3x3 kernels
- Squeeze-and-excitation blocks provide significant gains at minimal computational cost (0.2-0.5% FLOPs increase)
- EfficientNet's compound scaling is the most principled approach for balanced scaling
- Modern ConvNeXt designs can match Transformer performance on vision tasks
- Inception modules capture multi-scale features in a single layer

## Chapter Quiz

**Q1**: Which architecture introduced skip connections?

a) AlexNet
b) VGG
c) ResNet
d) Inception

<details class="tp-qa-card" data-qid="dl09-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) ResNet</strong></p><p>ResNet (2015) introduced residual learning with skip connections to enable very deep networks.</p></div></details>

**Q2**: What is the purpose of 1x1 convolutions in Inception modules?

a) Spatial downsampling
b) Channel bottleneck to reduce computation
c) Activation normalization
d) Weight regularization

<details class="tp-qa-card" data-qid="dl09-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Channel bottleneck to reduce computation</strong></p><p>1x1 convs reduce channel dimension before expensive spatial convolutions, drastically lowering FLOPs.</p></div></details>

**Q3**: DenseNet concatenates features instead of adding them. True/False?

<details class="tp-qa-card" data-qid="dl09-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: True</strong></p><p>DenseNet concatenates all previous feature maps along the channel dimension, unlike ResNet which adds them element-wise.</p></div></details>

**Q4**: Which of the following is NOT a ConvNeXt innovation?

a) Depthwise 7x7 conv
b) LayerNorm instead of BatchNorm
c) Global average pooling before classifier
d) GELU activation

<details class="tp-qa-card" data-qid="dl09-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Global average pooling before classifier</strong></p><p>Global average pooling was already standard in ResNet. ConvNeXt innovations include large kernel depthwise convs, LayerNorm, GELU, and inverted bottleneck.</p></div></details>

**Q5**: EfficientNet's compound scaling uses which constraint?

a) Memory <= 4GB
b) alpha*beta^2*gamma^2 ≈ 2
c) alpha+beta+gamma = 3
d) Parameters <= 100M

<details class="tp-qa-card" data-qid="dl09-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) alpha*beta^2*gamma^2 ≈ 2</strong></p><p>This constraint ensures the total flops scale roughly by 2^phi when jointly scaling all dimensions.</p></div></details>

## Exercises

**Easy** — Implement a VGG-16 block using nn.Sequential with 13 conv layers and 3 FC layers.

**Easy** — Compare the parameter count of BasicBlock vs Bottleneck for 256 input channels.

**Medium** — Build a mini Inception network with 3 inception modules for CIFAR-10 classification.

**Hard** — Implement a pre-activation ResNet block (BN -> ReLU -> Conv) and compare training with the original.

**Hard** — Implement a DenseNet-121 with 4 dense blocks and transition layers between them.

---

> **Previous**: [04-cnn-fundamentals.md](04-cnn-fundamentals.md) | **Next**: [06-transfer-learning.md](06-transfer-learning.md)
