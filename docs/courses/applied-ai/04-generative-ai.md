# Chapter 4: Generative AI

> **Prerequisite:** [03 - OpenCV & Computer Vision](./03-opencv.md)  
> **Next Chapter:** Course Complete

## Learning Objectives

After completing this chapter, you will be able to:
- Explain the architecture of GANs, VAEs, and diffusion models
- Generate images with GANs and Stable Diffusion
- Build a text-to-image pipeline with HuggingFace diffusers
- Apply style transfer and image-to-image generation
- Understand prompt engineering principles for generative models
- Implement fine-tuning with LoRA and DreamBooth
- Build RAG pipelines for knowledge-grounded generation
- Evaluate and deploy generative models responsibly

---

## Why Generative AI Matters

> **Real-World Analogy:** Imagine a master artist who has studied 100,000 paintings — landscapes, portraits, abstracts. After years of training, she can paint a brand-new artwork in any style on any subject you describe. She can even take your rough sketch and turn it into a finished oil painting, or fill in missing parts of a damaged fresco. She doesn't just memorize and copy; she *understands* the patterns of light, color, composition, and texture, and composes something original from them. This is exactly what generative AI does — it learns the hidden distribution of data (images, text, music, code) and samples novel outputs that feel authentic.

Generative AI has moved from research curiosity to production infrastructure in just a few years. It powers tools used by millions daily — DALL·E, ChatGPT, Midjourney, GitHub Copilot, Stable Diffusion. Understanding how these models work under the hood (not just how to call an API) is essential for any AI engineer building modern applications.

| What Traditional AI Does | What Generative AI Does |
|--------------------------|------------------------|
| Classifies or predicts a label | Creates new data from scratch |
| Answers "Is this a cat or dog?" | Answers "Draw me a cat playing chess" |
| Maps input → decision | Maps noise/condition → novel sample |
| Discriminative boundaries | Full probability distribution |

---

### Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|--------------------|
| Overview of Generative Models | GANs, VAEs, and diffusion models use different strategies to learn data distributions | Choose diffusion for quality, VAE for interpolation, GAN for speed |
| GANs | Generator vs discriminator adversarial training produces sharp images | Use BCELoss and alternating training steps for stable GAN training |
| VAEs | Encoder-decoder with probabilistic latent space enables smooth interpolation | KL divergence + reconstruction loss balances fidelity and regularization |
| Diffusion Models | Iterative denoising from random noise produces state-of-the-art results | Use DPMSolverMultistepScheduler to reduce inference steps from 50 to 25 |
| Transformers for Generation | Autoregressive next-token prediction scales to billions of parameters | Prefix tuning and KV-cache optimization are critical for production |
| Prompt Engineering | Prompt structure (subject + context + style + quality) determines output quality | Always include a negative prompt to suppress common artifacts |
| Fine-Tuning | Parameter-efficient methods (LoRA) adapt large models without full retraining | LoRA rank 8-64 balances quality and storage cost |
| RAG | Retrieval-Augmented Generation grounds outputs in external knowledge | Chunk size 256-512 tokens with overlap is the industry standard |
| Responsible GenAI | Watermarking, safety filters, and bias auditing are production essentials | Log every generation request with prompt, user, and timestamp for audit trails |

### Chapter Roadmap

```mermaid
flowchart LR
    A[Why Gen AI Matters] --> B[Overview of Gen Models]
    B --> C[GANs]
    C --> D[VAEs]
    D --> E[Diffusion Models]
    E --> F[Transformers for Generation]
    F --> G[Prompt Engineering]
    G --> H[Fine-Tuning]
    H --> I[RAG]
    I --> J[GAN vs VAE vs Diffusion]
    J --> K[Interview Corner]
    K --> L[Real-World Applications]
    L --> M[Responsible GenAI]
```

---

## 4.1 Overview of Generative Models

Generative models learn the probability distribution $$P(X)$$ of training data and sample new data from it. Unlike discriminative models that learn $$P(Y|X)$$ (decision boundaries), generative models can produce entirely new data points that resemble the training distribution.

### The Generative Family Tree

| Model | Core Idea | Training Signal | Sampling Speed | Output Quality |
|-------|-----------|----------------|----------------|----------------|
| **GAN** | Adversarial game between generator and discriminator | Discriminator loss | Fast (1 forward pass) | Sharp, high-freq detail |
| **VAE** | Variational inference with encoder-decoder | ELBO (recon + KL) | Fast (1 forward pass) | Smooth, slightly blurry |
| **Diffusion** | Iterative denoising of Gaussian noise | Noise prediction MSE | Slow (10-100 steps) | State-of-the-art |
| **Autoregressive (GPT)** | Next-token prediction | Cross-entropy | Sequential per token | Excellent text, variable image |

### Mathematical Intuition

```
Maximum Likelihood:  argmax_θ  E_{x~P_data}[log P_θ(x)]
GAN:                min_G max_D  E[log D(x)] + E[log(1 - D(G(z)))]
VAE:                max  E[log P(x|z)] - KL(Q(z|x) || P(z))
Diffusion:          min E[ || ε - ε_θ(x_t, t) ||² ]
Autoregressive:     max  Σ log P(x_i | x_<i)
```

> **Real-World Analogy:** Think of these four families as four different artists. GAN is like a forger who gets better by arguing with a detective. VAE is like a sketch artist who draws a blurry outline then fills details. Diffusion is like a sculptor who starts with a block of noise and chips away until the image appears. GPT is like a writer who predicts the next word one at a time — everything builds on what came before.

> **One-Sentence Takeaway:** Four generative model families — GAN, VAE, Diffusion, Autoregressive — each trade off quality, speed, stability, and control differently.

---

## 4.2 Generative Adversarial Networks (GANs)

> **Real-World Analogy:** A forger (Generator) tries to create fake paintings that look real, while an art detective (Discriminator) tries to spot the fakes. Each time the detective catches a fake, the forger improves. Each time a fake slips through, the detective gets sharper. After thousands of rounds, the forger becomes so good that even an expert cannot distinguish the fakes from real paintings.

### Architecture

A GAN consists of two neural networks competing in a zero-sum game:
- **Generator (G):** Takes random noise $$z$$ and produces a fake sample $$G(z)$$
- **Discriminator (D):** Takes a sample $$x$$ and outputs probability $$D(x)$$ that it is real

```
Random Noise (z) ──→ Generator ──→ Fake Image (G(z))
                                        │
                   Real Image (x) ──→ Discriminator ──→ Real/Fake?
                                        ↑
                                   Fake Image ─────────┘
```

### How GANs Work (Step by Step)

1. **Sample noise:** Draw a random latent vector $$z$$ from a simple distribution (e.g., uniform or normal)
2. **Generate fake:** Pass $$z$$ through the Generator to produce a fake image $$G(z)$$
3. **Sample real:** Draw a batch of real images from the training dataset
4. **Discriminate real:** Pass real images through D, compute loss $$-\log D(x)$$
5. **Discriminate fake:** Pass fake images through D, compute loss $$-\log(1 - D(G(z)))$$
6. **Update D:** Backpropagate combined D loss to improve discriminator
7. **Generate new fakes:** Pass fresh noise through G (detached from D)
8. **Fool D:** Compute G loss $$-\log D(G(z))$$ (the generator wants D to be wrong)
9. **Update G:** Backpropagate G loss to improve generator
10. **Repeat:** Alternate steps 2-9 until equilibrium (D cannot distinguish)

### Pseudocode

```
FUNCTION train_gan(G, D, dataset, epochs, batch_size, z_dim):
    FOR epoch = 1 TO epochs:
        FOR batch IN dataset:
            // ── Train Discriminator ──
            real_images = batch
            real_labels = ONES(batch_size, 1)
            fake_labels = ZEROS(batch_size, 1)

            D_real_loss = BCELoss(D(real_images), real_labels)

            z = sample_noise(batch_size, z_dim)
            fake_images = G(z)
            D_fake_loss = BCELoss(D(fake_images), fake_labels)

            D_loss = D_real_loss + D_fake_loss
            D_loss.backward()
            D_optimizer.step()

            // ── Train Generator ──
            z = sample_noise(batch_size, z_dim)
            fake_images = G(z)
            G_loss = BCELoss(D(fake_images), real_labels)  // Fool D!

            G_loss.backward()
            G_optimizer.step()

        PRINT("Epoch", epoch, "D loss:", D_loss, "G loss:", G_loss)
    RETURN G, D
```

### Step-by-Step Dry Run (Trace Table)

**Setup:** z_dim=2, image=4 pixels, batch_size=2, epochs=1

| Step | Operation | Input | Output | Loss | Layer Activations (G) |
|------|-----------|-------|--------|------|----------------------|
| 1 | Sample z | — | z₁=[0.2,-0.7], z₂=[-0.5,0.3] | — | — |
| 2 | G(z) forward | z₁,z₂ | fake₁=[0.3,0.8,-0.2,0.1], fake₂=[-0.1,0.5,0.7,-0.3] | — | z→Linear→ReLU→Linear→Tanh |
| 3 | Sample real | — | real₁=[0.9,0.7,-0.4,0.2], real₂=[-0.8,0.1,0.6,0.4] | — | — |
| 4 | D(real) | real₁,real₂ | D(real₁)=0.85, D(real₂)=0.92 | — | Linear→LReLU→Linear→Sigmoid |
| 5 | D_real_loss | D(real), [1,1] | -(log0.85+log0.92)=0.25 | 0.25 | — |
| 6 | D(fake) | fake₁,fake₂ | D(fake₁)=0.12, D(fake₂)=0.32 | — | — |
| 7 | D_fake_loss | D(fake), [0,0] | -(log0.88+log0.68)=0.38 | 0.38 | — |
| 8 | Total D loss | — | 0.25+0.38=0.63 | 0.63 | — |
| 9 | D backprop | — | — | — | Gradients flow through D |
| 10 | Sample fresh z | — | z₃=[0.9,0.1], z₄=[-0.3,-0.6] | — | — |
| 11 | G(z) forward | z₃,z₄ | fake₃=[0.4,0.6,-0.1,0.3], fake₄=[-0.2,0.3,0.5,-0.1] | — | Same layers |
| 12 | D(fake) | fake₃,fake₄ | D(fake₃)=0.45, D(fake₄)=0.28 | — | Discriminator output |
| 13 | G_loss | D(fake), [1,1] | -(log0.45+log0.28)=1.35 | 1.35 | — |
| 14 | G backprop | — | — | — | Gradients flow through G |
| 15 | G update | Adam(lr=0.0002) | Updated G weights | — | — |
| 16 | D update | Adam(lr=0.0002) | Updated D weights | — | — |

After many epochs: D(G(z)) ≈ 0.5 (D cannot tell real from fake → Nash equilibrium)

### Python Implementation (PyTorch)

```python
import torch
import torch.nn as nn
import torch.optim as optim
from torchvision import datasets, transforms
from torch.utils.data import DataLoader
import numpy as np
import matplotlib.pyplot as plt

# ── Hyperparameters ──
Z_DIM = 100
BATCH_SIZE = 64
EPOCHS = 50
LR = 0.0002
IMG_DIM = 784  # 28×28

# ── Generator ──
class Generator(nn.Module):
    def __init__(self, z_dim=Z_DIM, img_dim=IMG_DIM):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(z_dim, 256),
            nn.BatchNorm1d(256),
            nn.ReLU(),
            nn.Linear(256, 512),
            nn.BatchNorm1d(512),
            nn.ReLU(),
            nn.Linear(512, img_dim),
            nn.Tanh(),
        )

    def forward(self, z):
        return self.net(z)

# ── Discriminator ──
class Discriminator(nn.Module):
    def __init__(self, img_dim=IMG_DIM):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(img_dim, 512),
            nn.LeakyReLU(0.2),
            nn.Dropout(0.3),
            nn.Linear(512, 256),
            nn.LeakyReLU(0.2),
            nn.Dropout(0.3),
            nn.Linear(256, 1),
            nn.Sigmoid(),
        )

    def forward(self, x):
        return self.net(x)

# ── Initialize ──
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
G = Generator().to(device)
D = Discriminator().to(device)
g_opt = optim.Adam(G.parameters(), lr=LR, betas=(0.5, 0.999))
d_opt = optim.Adam(D.parameters(), lr=LR, betas=(0.5, 0.999))
criterion = nn.BCELoss()

# ── Data ──
transform = transforms.Compose([
    transforms.ToTensor(),
    transforms.Normalize((0.5,), (0.5,)),
])
dataset = datasets.MNIST(root="data", transform=transform, download=True)
loader = DataLoader(dataset, batch_size=BATCH_SIZE, shuffle=True, drop_last=True)

# ── Training ──
def train_step(real_images):
    batch = real_images.view(real_images.size(0), -1)
    batch_size = batch.size(0)
    real_labels = torch.ones(batch_size, 1, device=device)
    fake_labels = torch.zeros(batch_size, 1, device=device)

    # Train Discriminator
    d_opt.zero_grad()
    d_real = D(batch)
    d_real_loss = criterion(d_real, real_labels)

    z = torch.randn(batch_size, Z_DIM, device=device)
    fake_images = G(z)
    d_fake = D(fake_images.detach())
    d_fake_loss = criterion(d_fake, fake_labels)

    d_loss = d_real_loss + d_fake_loss
    d_loss.backward()
    d_opt.step()

    # Train Generator
    g_opt.zero_grad()
    z = torch.randn(batch_size, Z_DIM, device=device)
    fake_images = G(z)
    d_fake = D(fake_images)
    g_loss = criterion(d_fake, real_labels)

    g_loss.backward()
    g_opt.step()

    return d_loss.item(), g_loss.item()

for epoch in range(EPOCHS):
    for batch_idx, (real_images, _) in enumerate(loader):
        d_loss, g_loss = train_step(real_images.to(device))
        if batch_idx % 200 == 0:
            print(f"Epoch {epoch:3d} [{batch_idx:4d}/{len(loader)}] "
                  f"D: {d_loss:.4f} G: {g_loss:.4f}")
```

### Generating Samples

```python
def generate_samples(generator, n_samples=16):
    z = torch.randn(n_samples, Z_DIM, device=device)
    with torch.no_grad():
        samples = generator(z).cpu().view(-1, 1, 28, 28)
    return samples

samples = generate_samples(G, 16)
print(f"Generated {samples.shape[0]} images of shape {samples.shape[1:]}")

# Visualize
fig, axes = plt.subplots(4, 4, figsize=(8, 8))
for i, ax in enumerate(axes.flat):
    ax.imshow(samples[i].squeeze(), cmap="gray")
    ax.axis("off")
plt.savefig("output/gan_samples.png")
```

### Complexity Analysis

| Phase | Time Complexity | Space Complexity | Reason |
|-------|----------------|------------------|--------|
| **Training (per step)** | $$O((G_{params} + D_{params}) \cdot B)$$ | $$O((G_{params} + D_{params}) \cdot 2)$$ | Both networks forward+backward every step |
| **Inference (per sample)** | $$O(G_{params})$$ | $$O(G_{params})$$ | Only generator forward pass needed |
| **Convergence** | $$O(N_{epochs} \cdot N_{batches})$$ | — | Training is notoriously slow to converge |

**Why?** GAN training requires alternating updates of two networks, doubling compute per step. The generator alone is small compared to diffusion models, making inference fast. However, the adversarial training often needs 10-100K iterations to converge.

### Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| Fast inference (single forward pass) | Unstable training (oscillating loss) |
| Sharp, high-frequency detail in images | Mode collapse (generator produces limited variety) |
| No Markov chain — direct sampling | No tractable likelihood or latent space inference |
| Can generate in any resolution (conditional) | Extremely sensitive to hyperparameters |
| Adversarial framework is general (text, audio) | Evaluation is difficult (no inherent metric) |
| State-of-the-art in super-resolution | Training requires careful balancing of G/D |

### Edge Cases

1. **Mode Collapse:** The generator finds a few "tricks" that fool the discriminator and produces nearly identical outputs regardless of input noise. Mitigation: minibatch discrimination, unrolled GANs, or spectral normalization.

2. **Non-Convergence:** The discriminator reaches zero loss (perfect discrimination), stopping the generator from learning. Mitigation: label smoothing (use 0.9/0.1 instead of 1.0/0.0), reduce discriminator capacity.

3. **Vanishing Gradients:** When the discriminator is too strong, generator gradients vanish. Mitigation: use Wasserstein loss (WGAN) instead of BCE, add gradient penalty.

4. **Memory Imbalance:** GANs trained on datasets with class imbalance generate fewer samples of rare classes. Mitigation: class-conditional GANs with weighted sampling.

5. **Latent Space Discontinuity:** Nearby points in $$z$$-space can produce very different outputs. Mitigation: use VAEs for smoother latent spaces instead.

> **⚠️ Warning:** GAN training is notoriously unstable. Monitor the D/G loss ratio: if D loss drops to 0, the discriminator is too strong. If G loss dominates and outputs are repetitive, mode collapse is likely. Use label smoothing (0.9/0.1) and gradient penalties for stability.

> **One-Sentence Takeaway:** GANs pit a generator against a discriminator in a zero-sum game, producing sharp images through adversarial training that is powerful but fragile.

---

## 4.3 Variational Autoencoders (VAEs)

> **Real-World Analogy:** Imagine an architect who designs buildings. She encodes the essence of each building she sees into a compact blueprint (latent space). She doesn't memorize exact dimensions — she captures the *style*, *proportions*, and *features* as a probability distribution. When she wants to design something new, she picks a point in this blueprint-space and decodes it into a full design. Two nearby blueprint points produce similar buildings — allowing her to smoothly morph a Gothic cathedral into a modernist skyscraper.

### Architecture

VAEs learn a probabilistic latent representation using an encoder-decoder structure with variational inference.

```
Input Image (x) ──→ Encoder ──→ μ, log(σ²) ──→ Sample z ~ N(μ, σ²) ──→ Decoder ──→ Reconstructed (x')
                    (q_φ(z|x))                     (reparameterize)                  (p_θ(x|z))
```

### How VAEs Work (Step by Step)

1. **Encode:** Pass input $$x$$ through encoder to produce latent distribution parameters $$\mu$$ and $$\log\sigma^2$$
2. **Reparameterize:** Sample $$\epsilon \sim N(0, I)$$ and compute $$z = \mu + \sigma \cdot \epsilon$$ (this trick keeps gradients flowing)
3. **Decode:** Pass $$z$$ through decoder to produce reconstruction $$\hat{x}$$
4. **Compute reconstruction loss:** Measure how well $$\hat{x}$$ matches $$x$$ (MSE or BCE)
5. **Compute KL loss:** Measure how far $$N(\mu, \sigma^2)$$ is from $$N(0, I)$$ — this regularizes the latent space
6. **Combine:** Total loss = reconstruction loss + $$\beta \cdot$$ KL loss ($$\beta$$ controls the tradeoff)
7. **Backpropagate:** Update encoder and decoder jointly
8. **Generate:** To create new samples, skip the encoder — just sample $$z \sim N(0, I)$$ and decode

### Pseudocode

```
FUNCTION train_vae(encoder, decoder, dataset, epochs, latent_dim):
    FOR epoch = 1 TO epochs:
        FOR batch IN dataset:
            // ── Encode ──
            h = encoder(batch)
            mu = linear_mu(h)
            logvar = linear_logvar(h)

            // ── Reparameterize ──
            std = exp(0.5 * logvar)
            eps = randn_like(std)
            z = mu + eps * std

            // ── Decode ──
            recon = decoder(z)

            // ── Loss ──
            recon_loss = MSE(recon, batch)           // or BCE
            kl_loss = -0.5 * sum(1 + logvar - mu² - exp(logvar))
            total_loss = recon_loss + beta * kl_loss

            // ── Update ──
            total_loss.backward()
            optimizer.step()
    RETURN encoder, decoder
```

### Step-by-Step Dry Run (Trace Table)

**Setup:** input_dim=4, latent_dim=2, batch_size=1

| Step | Operation | Input | Output | Values |
|------|-----------|-------|--------|--------|
| 1 | Input x | — | x = [0.9, 0.1, 0.7, 0.3] | — |
| 2 | Encoder forward | x | h = [0.5, 0.8, -0.2, 0.6] | h = ReLU(W_e · x + b_e) |
| 3 | Compute μ | h | μ = [0.4, -0.3] | μ = W_μ · h + b_μ |
| 4 | Compute log(σ²) | h | logvar = [-1.2, -0.8] | logvar = W_logvar · h + b_logvar |
| 5 | Reparameterize | μ, logvar | σ = [0.55, 0.67], ε = [0.3, -0.9] | σ = exp(0.5·logvar) |
| 6 | Sample z | μ, σ, ε | z = [0.4+0.55·0.3, -0.3+0.67·(-0.9)] = [0.565, -0.903] | z = μ + σ·ε |
| 7 | Decoder forward | z | ĥ = [0.7, -0.4, 0.2, 0.9] | ĥ = ReLU(W_d · z + b_d) |
| 8 | Output reconstruction | ĥ | x̂ = [0.85, 0.15, 0.68, 0.28] | x̂ = Sigmoid(W_out · ĥ + b_out) |
| 9 | Recon loss | x̂, x | MSE = (0.05² + 0.05² + 0.02² + 0.02²)/4 = 0.00145 | MSE loss |
| 10 | KL loss | μ, logvar | KL = -0.5·(1+(-1.2)-0.4²-exp(-1.2) + 1+(-0.8)-(-0.3)²-exp(-0.8)) | KL divergence |
| 11 | KL loss calculation | — | KL = -0.5·[(-0.2-0.16-0.301) + (0.2-0.09-0.449)] = -0.5·[-1.0] = 0.5 | Full KL |
| 12 | Total loss | — | β=1: total = 0.00145 + 0.5 = 0.501 | Combined |
| 13 | Backprop | total loss | Gradients flow through decoder → z → encoder | — |
| 14 | Update weights | Adam | Encoder and decoder weights updated | — |

After training: the latent space becomes smooth and continuous. Interpolating between any two points produces meaningful intermediate samples.

### Python Implementation (PyTorch)

```python
import torch
import torch.nn as nn
import torch.optim as optim
from torchvision import datasets, transforms
from torch.utils.data import DataLoader

# ── Hyperparameters ──
INPUT_DIM = 784
LATENT_DIM = 20
HIDDEN_DIM = 400
EPOCHS = 30
BATCH_SIZE = 128
LR = 1e-3
BETA = 1.0  # Weight for KL divergence

# ── VAE Model ──
class VAE(nn.Module):
    def __init__(self, input_dim=INPUT_DIM, latent_dim=LATENT_DIM):
        super().__init__()
        self.encoder = nn.Sequential(
            nn.Linear(input_dim, HIDDEN_DIM),
            nn.ReLU(),
        )
        self.mu_layer = nn.Linear(HIDDEN_DIM, latent_dim)
        self.logvar_layer = nn.Linear(HIDDEN_DIM, latent_dim)
        self.decoder = nn.Sequential(
            nn.Linear(latent_dim, HIDDEN_DIM),
            nn.ReLU(),
            nn.Linear(HIDDEN_DIM, input_dim),
            nn.Sigmoid(),
        )

    def encode(self, x):
        h = self.encoder(x)
        return self.mu_layer(h), self.logvar_layer(h)

    def reparameterize(self, mu, logvar):
        std = torch.exp(0.5 * logvar)
        eps = torch.randn_like(std)
        return mu + eps * std

    def decode(self, z):
        return self.decoder(z)

    def forward(self, x):
        mu, logvar = self.encode(x)
        z = self.reparameterize(mu, logvar)
        recon = self.decode(z)
        return recon, mu, logvar

# ── Loss ──
def vae_loss(recon_x, x, mu, logvar):
    recon_loss = nn.functional.binary_cross_entropy(
        recon_x, x, reduction="sum"
    ) / x.size(0)  # Average over batch
    kl_loss = -0.5 * torch.sum(1 + logvar - mu.pow(2) - logvar.exp()) / x.size(0)
    return recon_loss + BETA * kl_loss

# ── Data ──
transform = transforms.Compose([
    transforms.ToTensor(),
    transforms.Lambda(lambda x: x.view(-1)),
])
dataset = datasets.MNIST(root="data", train=True, transform=transform, download=True)
loader = DataLoader(dataset, batch_size=BATCH_SIZE, shuffle=True)

# ── Training ──
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
vae = VAE().to(device)
optimizer = optim.Adam(vae.parameters(), lr=LR)

for epoch in range(EPOCHS):
    total_loss = 0
    for batch_idx, (x, _) in enumerate(loader):
        x = x.to(device)
        optimizer.zero_grad()
        recon_x, mu, logvar = vae(x)
        loss = vae_loss(recon_x, x, mu, logvar)
        loss.backward()
        optimizer.step()
        total_loss += loss.item()
    avg_loss = total_loss / len(loader)
    print(f"Epoch {epoch:3d} | Avg Loss: {avg_loss:.4f}")
```

### Latent Space Interpolation

```python
vae.eval()
with torch.no_grad():
    # Encode two images
    x1 = dataset[0][0].unsqueeze(0).to(device)
    x2 = dataset[15][0].unsqueeze(0).to(device)
    mu1, _ = vae.encode(x1)
    mu2, _ = vae.encode(x2)

    # Interpolate
    alphas = torch.linspace(0, 1, 10)
    interpolated = []
    for alpha in alphas:
        z = (1 - alpha) * mu1 + alpha * mu2
        recon = vae.decode(z)
        interpolated.append(recon.cpu().view(28, 28))

print(f"Generated {len(interpolated)} interpolated frames")
# Visualize in a row
import matplotlib.pyplot as plt
fig, axes = plt.subplots(1, 10, figsize=(15, 3))
for i, ax in enumerate(axes.flat):
    ax.imshow(interpolated[i], cmap="gray")
    ax.axis("off")
plt.savefig("output/vae_interpolation.png")
```

### Complexity Analysis

| Phase | Time Complexity | Space Complexity | Reason |
|-------|----------------|------------------|--------|
| **Training (per step)** | $$O((E_{params} + D_{params}) \cdot B)$$ | $$O((E_{params} + D_{params}) \cdot 2)$$ | Single forward + backward through encoder and decoder |
| **Inference (per sample)** | $$O(D_{params})$$ | $$O(D_{params})$$ | Only decoder — sample z directly from N(0, I) |
| **Encode (per sample)** | $$O(E_{params})$$ | $$O(E_{params})$$ | Encoder forward pass only |

**Why?** VAE training is a single objective (ELBO) unlike GAN's two-player game, making it more stable. Inference is extremely fast — just a decoder pass. The latent dimension is user-controlled, typically 20-200.

### Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| Stable training (single objective) | Blurry samples compared to GANs |
| Smooth, structured latent space | Pixel-level detail is often lost |
| Can compute likelihood estimates | KL term can overpower reconstruction (posterior collapse) |
| Enables interpolation and morphing | Fixed latent prior (N(0,I)) may not match data |
| Works well for anomaly detection | Generated images lack high-frequency detail |
| Easy to train (no adversarial dynamics) | Struggles with complex, high-dimensional data |

### Edge Cases

1. **Posterior Collapse:** The KL term dominates and the latent variable becomes independent of the input (z carries no information). Mitigation: KL annealing (gradually increase β from 0 to 1), use free bits.

2. **Blurry Outputs:** The decoder averages over multiple plausible outputs, producing blurry results. Mitigation: use perceptual losses, VQ-VAE (discrete latent space), or adversarial training (VAE-GAN hybrids).

3. **Latent Space Gaps:** If KL weight is too low, the latent space has holes where decoding produces garbage. Mitigation: increase β, use more expressive priors (VampPrior).

4. **Reconstruction Fidelity vs Generation Quality Tradeoff:** A low β gives good reconstructions but poor interpolation; high β gives smooth sampling but poor reconstructions. Mitigation: β-VAE (tune β for the task).

> **Pro Tip:** The latent dimension size is a critical hyperparameter. Too small (< 10) loses detail; too large (> 100) defeats regularization. Start with 20-50 and monitor reconstruction quality vs generated sample diversity.

> **One-Sentence Takeaway:** VAEs learn a smooth, continuous latent space where interpolating between points produces meaningful intermediate samples — ideal for morphing and anomaly detection.

---

## 4.4 Diffusion Models

> **Real-World Analogy:** Imagine a sculptor starting with a rough block of marble (pure noise). They don't carve the final statue in one go. Instead, they have step-by-step instructions: "At step 50, you see a vague human shape. At step 40, the head is distinguishable. At step 30, facial features emerge. At step 10, details like eye color appear." Each step removes a small amount of randomness, gradually revealing the final image. This is the diffusion process — reverse a gradual noising process one tiny step at a time.

### Architecture

Diffusion models define a **forward process** that gradually adds Gaussian noise to data over $$T$$ timesteps, and learn a **reverse process** that denoises from pure noise back to data.

```
Forward (q):  x₀ → x₁ → x₂ → ... → x_T (pure noise)
                   ↓      ↓      ↓
              Learn:  ε_θ(x_t, t)  →  predict noise to remove

Reverse (p):  x_T → x_{T-1} → ... → x₁ → x₀ (generated sample)
              p_θ(x_{t-1}|x_t)
```

### How Diffusion Models Work (Step by Step)

#### Forward Process (Fixed, No Learning)

1. **Start:** Take a real image $$x_0$$
2. **Add noise:** For each timestep $$t=1$$ to $$T$$, compute $$x_t = \sqrt{1-\beta_t} \cdot x_{t-1} + \sqrt{\beta_t} \cdot \epsilon_{t}$$ where $$\epsilon_t \sim N(0, I)$$
3. **Closed form:** Directly compute $$x_t = \sqrt{\bar{\alpha}_t} \cdot x_0 + \sqrt{1-\bar{\alpha}_t} \cdot \epsilon$$ where $$\bar{\alpha}_t = \prod_{s=1}^{t}(1-\beta_s)$$
4. **Repeat:** After $$T$$ steps (typically 1000), $$x_T \approx N(0, I)$$ (pure noise)

#### Reverse Process (Learned)

5. **Start noise:** Sample $$x_T \sim N(0, I)$$ at inference time
6. **Predict noise:** At step $$t$$, feed $$x_t$$ and timestep $$t$$ to a U-Net $$\epsilon_\theta(x_t, t)$$ to predict the noise
7. **Denoise:** Compute $$x_{t-1} = \frac{1}{\sqrt{\alpha_t}}(x_t - \frac{\beta_t}{\sqrt{1-\bar{\alpha}_t}}\epsilon_\theta) + \sigma_t \cdot z$$
8. **Repeat:** Step 6-7 from $$t=T$$ down to $$t=1$$
9. **Final:** $$x_0$$ is the generated image
10. **Text conditioning:** For text-to-image, the U-Net also receives text embeddings via cross-attention layers

### Pseudocode

```
FUNCTION train_diffusion(unet, dataset, T=1000):
    FOR epoch = 1 TO epochs:
        FOR batch IN dataset:
            x_0 = batch_images
            t = randint(1, T)                     // Random timestep
            noise = randn_like(x_0)                // Sample noise
            alpha_bar_t = cumprod(1 - beta)[t]    // Precomputed schedule

            // Forward: noised image at step t
            x_t = sqrt(alpha_bar_t) * x_0 + sqrt(1 - alpha_bar_t) * noise

            // Predict noise
            noise_pred = unet(x_t, t, conditioning)  // U-Net with cross-attention

            // Loss: MSE between actual and predicted noise
            loss = MSE(noise, noise_pred)

            loss.backward()
            optimizer.step()
    RETURN unet

FUNCTION sample_diffusion(unet, prompt_embeds, T=1000, scheduler):
    x_T = randn(3, H, W)                         // Pure noise

    FOR t = T DOWN TO 1:
        noise_pred = unet(x_t, t, prompt_embeds) // Predict noise
        x_{t-1} = scheduler.step(noise_pred, t, x_t)  // Denoise one step

    RETURN x_0                                   // Generated image
```

### Step-by-Step Dry Run (Trace Table)

**Setup:** 4-pixel image, T=4 timesteps (simplified — real models use T=1000), β schedule = [0.1, 0.2, 0.3, 0.4]

**Forward Process — Training:**

| t | α_t=1-β_t | ᾱ_t = ∏α_i | x_t = √ᾱ_t·x₀ + √(1-ᾱ_t)·ε | Noise |
|---|-----------|------------|-----------------------------|-------|
| 0 | — | 1.0 | x₀ = [0.8, 0.3, 0.6, 0.1] | — |
| 1 | 0.9 | 0.9 | x₁ = √0.9·x₀ + √0.1·ε = [0.76, 0.35, 0.57, 0.13] + [0.06, -0.03, 0.02, -0.09] = [0.82, 0.32, 0.59, 0.04] | ε=[0.2,-0.1,0.07,-0.3] |
| 2 | 0.8 | 0.72 | x₂ = √0.72·x₀ + √0.28·ε | ε=[-0.4,0.5,0.1,-0.2] |
| 3 | 0.7 | 0.504 | x₃ = √0.504·x₀ + √0.496·ε | ε=[0.3,0.2,-0.5,0.6] |
| 4 | 0.6 | 0.302 | x₄ = √0.302·x₀ + √0.698·ε | ε=[-0.1,-0.4,0.3,-0.2] |

**Reverse Process (Inference — Denoising):**

| Step t | x_t | Predicted ε_θ(x_t, t) | x_{t-1} after denoise |
|--------|-----|----------------------|----------------------|
| 4 | x₄≈N(0,I) | ε_pred₄ = U-Net(x₄, 4, "cat") | x₃ = x₄ denoised with ε_pred₄ |
| 3 | x₃ from above | ε_pred₃ = U-Net(x₃, 3, "cat") | x₂ = x₃ denoised with ε_pred₃ |
| 2 | x₂ from above | ε_pred₂ = U-Net(x₂, 2, "cat") | x₁ = x₂ denoised with ε_pred₂ |
| 1 | x₁ from above | ε_pred₁ = U-Net(x₁, 1, "cat") | x₀ = FINAL IMAGE! |

After training, the U-Net learns to predict the noise at each step. Starting from random noise and iteratively denoising produces a coherent image matching the prompt.

### Python Implementation (Stable Diffusion with Diffusers)

```python
from diffusers import StableDiffusionPipeline, DPMSolverMultistepScheduler
import torch
from PIL import Image

# ── Load Pipeline ──
model_id = "runwayml/stable-diffusion-v1-5"

pipe = StableDiffusionPipeline.from_pretrained(
    model_id,
    torch_dtype=torch.float16,
    safety_checker=None,          # Disable in dev; enable in production
    requires_safety_checker=False,
)
pipe.scheduler = DPMSolverMultistepScheduler.from_config(
    pipe.scheduler.config,
    use_karras_sigmas=True,
)
pipe = pipe.to("cuda")
```

### Text-to-Image Generation

```python
prompt = (
    "A serene mountain lake at sunset, "
    "digital art, highly detailed, volumetric lighting"
)
negative_prompt = "blurry, low quality, distorted, ugly, extra limbs"

image = pipe(
    prompt=prompt,
    negative_prompt=negative_prompt,
    num_inference_steps=25,
    guidance_scale=7.5,
    width=512,
    height=512,
    generator=torch.Generator(device="cuda").manual_seed(42),
).images[0]

image.save("output/mountain_lake.png")
```

### Image-to-Image (Img2Img)

```python
from diffusers import StableDiffusionImg2ImgPipeline

pipe = StableDiffusionImg2ImgPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5",
    torch_dtype=torch.float16,
).to("cuda")

init_image = Image.open("input/sketch.png").resize((512, 512))

result = pipe(
    prompt="A professional photograph of this sketch, realistic textures, 4K quality",
    image=init_image,
    strength=0.75,          # 0 = no change, 1 = completely new
    num_inference_steps=30,
    guidance_scale=7.5,
).images[0]

result.save("output/sketch_to_photo.png")
```

### Inpainting

```python
from diffusers import StableDiffusionInpaintPipeline
import numpy as np

pipe = StableDiffusionInpaintPipeline.from_pretrained(
    "runwayml/stable-diffusion-inpainting",
    torch_dtype=torch.float16,
).to("cuda")

img = Image.open("input/photo_with_object.png").resize((512, 512))
mask = Image.open("input/mask.png").resize((512, 512))  # White = area to fill

result = pipe(
    prompt="Seamless texture matching the surrounding area",
    image=img,
    mask_image=mask,
    num_inference_steps=20,
    guidance_scale=7.5,
).images[0]

result.save("output/inpainted.png")
```

### Complexity Analysis

| Phase | Time Complexity | Space Complexity | Reason |
|-------|----------------|------------------|--------|
| **Training (per step)** | $$O(UNet_{params} \cdot B)$$ | $$O(UNet_{params} \cdot 2)$$ | Single U-Net forward+backward, but trained on random timesteps |
| **Inference (T steps)** | $$O(UNet_{params} \cdot T)$$ | $$O(UNet_{params} \cdot 2)$$ | T successive forward passes (T=25-1000) |
| **Scheduler overhead** | $$O(T)$$ | $$O(1)$$ | Per-step scheduler math is negligible |

**Why training is relatively cheap per step:** The U-Net is trained on random timesteps — you don't run all T steps per training step. **Why inference is expensive:** You must run T sequential denoising steps. Modern schedulers (DDIM, DPM++) reduce T from 1000 to 25-50 with minimal quality loss.

### Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| State-of-the-art image quality | Slow inference (25-100 sequential steps) |
| No mode collapse (stable training) | High VRAM requirement (4-12GB for inference) |
| Flexible conditioning (text, image, mask) | Not suitable for real-time applications |
| Strong theoretical foundations | Cannot interpolate in latent space like VAEs |
| Excellent diversity in outputs | Training from scratch is extremely expensive |
| Easy to control (guidance scale, negative prompts) | Complex scheduler and sampling ecosystem |

### Edge Cases

1. **Hallucination:** The model generates objects or details not implied by the prompt, especially with high guidance scales. Mitigation: reduce guidance_scale (5-7.5 range), use more inference steps.

2. **Catastrophic Neglect:** Important prompt elements are ignored, especially when the prompt is long. Mitigation: use attention weighting `(important:1.3)`, keep prompts focused (under 77 tokens).

3. **Exposure Bias:** At inference time, the model sees its own predictions as input (accumulating errors), but during training it always sees clean ground-truth noised images. Mitigation: use sampling noise tricks, DDIM inversion.

4. **Prompt Adherence Failure:** The image ignores the text prompt entirely (especially with high CFG or wrong guidance_scale). Mitigation: set guidance_scale between 7-12, use classifier-free guidance.

5. **Background Bleeding:** The subject blends into the background. Mitigation: use strong negative prompts, ControlNet for structure preservation.

> **⚠️ Warning:** Diffusion models are computationally expensive. On a consumer GPU (8GB VRAM), use `torch.float16` and a memory-efficient scheduler (DPMSolverMultistepScheduler). For CPU inference, expect 2-5 minutes per image.

> **One-Sentence Takeaway:** Diffusion models reverse a gradual noising process to generate high-quality images from text prompts, with img2img and inpainting as powerful variants.

---

## 4.5 Transformers for Generation

> **Real-World Analogy:** Imagine an extremely well-read author who has memorized billions of sentences. When you give them a starting phrase ("Once upon a time..."), they predict the next most natural word, one at a time. Each new word becomes part of the context for predicting the next. Unlike our GAN/VAE artist who paints the whole image at once, this author writes sequentially — and the result can be novels, code, poems, or even musical scores depending on the training data.

### Architecture

Transformers for generation use the decoder-only architecture: a stack of self-attention + feed-forward layers that predict the next token given all previous tokens.

```
Input:  "The cat sat on the"
          │      │      │      │
          ▼      ▼      ▼      ▼
     [Token] [Token] [Token] [Token]
          │      │      │      │
          ▼      ▼      ▼      ▼
     ┌─────────────────────────────────┐
     │      Masked Self-Attention      │
     │   (each token attends only to   │
     │    previous tokens + itself)    │
     └─────────────────────────────────┘
                     │
                     ▼
     ┌─────────────────────────────────┐
     │      Feed-Forward Network       │
     └─────────────────────────────────┘
                     │
                     ▼
              Output:  "mat"
              (next token prediction)
```

### How Autoregressive Generation Works (Step by Step)

1. **Tokenize:** Convert input text to token IDs using a vocabulary (e.g., GPT-2 has ~50K tokens)
2. **Embed:** Map each token ID to a dense vector + add positional encoding
3. **Self-attention:** Each token attends to itself and all previous tokens (masked attention prevents "cheating")
4. **Feed-forward:** Apply MLP to each position independently
5. **Output projection:** Produce a probability distribution over the vocabulary for the next token
6. **Sample:** Draw the next token from this distribution (or take the argmax for greedy decoding)
7. **Append:** Add the new token to the input sequence
8. **Repeat:** Steps 2-7 until an end token is produced or a length limit is reached
9. **Detokenize:** Convert the output token sequence back to text

### Pseudocode

```
FUNCTION generate(model, prompt, max_tokens, temperature):
    tokens = tokenize(prompt)

    FOR step = 1 TO max_tokens:
        // Forward pass through all decoder layers
        logits = model(tokens)

        // Get next-token distribution (last position only)
        next_token_logits = logits[-1, :]

        // Apply temperature scaling
        scaled_logits = next_token_logits / temperature

        // Convert to probabilities
        probs = softmax(scaled_logits)

        // Sample from distribution (or top-k / top-p filtering)
        if temperature == 0:
            next_token = argmax(probs)   // Greedy
        else:
            next_token = sample(probs)   // Stochastic

        tokens.append(next_token)

        IF next_token == EOS_TOKEN:
            BREAK

    RETURN detokenize(tokens)
```

### Step-by-Step Dry Run (Trace Table)

**Setup:** Tiny transformer, vocab={the(0), cat(1), sat(2), on(3), mat(4), .(5)}, prompt="The cat"

| Step | Input Tokens | Attn Weights (last token) | Logits (vocab) | Sampled | Output |
|------|-------------|---------------------------|-----------------|---------|--------|
| 1 | [the(0), cat(1)] | cat→the:0.3, cat→cat:0.7 | [0.1, 0.2, 0.8, 0.3, 0.1, 0.05] | sat(2) | "sat" |
| 2 | [the, cat, sat] | sat→the:0.2, sat→cat:0.5, sat→sat:0.3 | [0.05, 0.1, 0.1, 0.7, 0.3, 0.05] | on(3) | "on" |
| 3 | [the, cat, sat, on] | on→the:0.1, on→cat:0.2, on→sat:0.3, on→on:0.4 | [0.05, 0.05, 0.05, 0.1, 0.8, 0.1] | mat(4) | "mat" |
| 4 | [the, cat, sat, on, mat] | mat→the:0.1, mat→cat:0.1, mat→sat:0.2, mat→on:0.2, mat→mat:0.4 | [0.02, 0.02, 0.02, 0.02, 0.02, 0.9] | .(5) | "." |
| 5 | [the, cat, sat, on, mat, .] | .→all: even | [0.1, 0.1, 0.1, 0.1, 0.1, 0.1] | EOS | STOP |

The attention weights show how the model learns that "cat" is the subject, "sat" is the action, "on" introduces the location, etc.

### Python Implementation (HuggingFace Transformers)

```python
from transformers import AutoModelForCausalLM, AutoTokenizer

# ── Load Model ──
model_name = "gpt2"  # 124M parameters — good for learning
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name)

# ── Text Generation ──
prompt = "Once upon a time"

inputs = tokenizer(prompt, return_tensors="pt")
outputs = model.generate(
    **inputs,
    max_new_tokens=50,
    temperature=0.7,
    top_p=0.9,
    do_sample=True,
    pad_token_id=tokenizer.eos_token_id,
)

generated_text = tokenizer.decode(outputs[0], skip_special_tokens=True)
print(generated_text)
```

### KV-Cache Optimization (Production Critical)

```python
# Without KV cache: re-compute all keys/values for every new token
# With KV cache: cache keys and values from previous steps
# This changes inference from O(n²) to O(n) per step

class CausalLMWithCache:
    def __init__(self, model):
        self.model = model
        self.past_key_values = None

    def generate(self, input_ids, max_new_tokens=100):
        for _ in range(max_new_tokens):
            outputs = self.model(
                input_ids=input_ids,
                past_key_values=self.past_key_values,
                use_cache=True,
            )
            self.past_key_values = outputs.past_key_values
            next_token = outputs.logits[:, -1, :].argmax(dim=-1)
            input_ids = next_token.unsqueeze(0)
            yield next_token.item()
```

### Complexity Analysis

| Phase | Time Complexity | Space Complexity | Reason |
|-------|----------------|------------------|--------|
| **Training (per token)** | $$O(L^2 \cdot d)$$ per layer | $$O(L^2 + L \cdot d)$$ | Self-attention is quadratic in sequence length L |
| **Inference (per token, no cache)** | $$O(L^2 \cdot d)$$ per layer | $$O(L^2 + L \cdot d)$$ | Must recompute all previous attention |
| **Inference (per token, KV cache)** | $$O(L \cdot d)$$ per layer | $$O(L \cdot d \cdot n_{layers})$$ | Linear in current sequence length |
| **KV cache memory** | — | $$O(2 \cdot n_{layers} \cdot n_{heads} \cdot L \cdot d_{head})$$ | Stored key/value projections |

**Why generation is slow for long sequences:** Each new token must attend to all previous tokens. The KV cache helps by storing computed keys/values, but memory grows linearly with sequence length.

### Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| Single architecture for text, code, audio | Quadratic attention cost limits context length |
| Excellent at capturing long-range dependencies | Sequential generation is inherently slow |
| Massive scaling works (compute → quality) | Training requires enormous datasets and compute |
| Flexible prompting and in-context learning | Hallucination (confidently wrong answers) |
| Rich ecosystem (HuggingFace, vLLM, TGI) | Autoregressive error accumulation |
| KV-cache and speculative decoding optimizations | No built-in source attribution |

### Edge Cases

1. **Repetition:** The model gets stuck in repetitive loops ("I like apples. I like apples. I like apples..."). Mitigation: repetition_penalty (1.1-1.2), top-k sampling with k=40.

2. **Hallucination:** The model generates plausible-sounding but false information. Mitigation: RAG (ground in external knowledge), lower temperature (0.1-0.3) for factual tasks.

3. **Context Length Overflow:** The input exceeds the model's maximum context (e.g., 2048 tokens for GPT-2). Mitigation: truncate middle context, use sliding window attention, or chunk-summarize.

4. **Exposure Bias:** During training, the model always sees ground-truth tokens; during inference, it sees its own potentially incorrect predictions. Mitigation: scheduled sampling, beam search with diverse penalty.

5. **Toxicity and Bias:** Pre-trained models reflect biases in their training data. Mitigation: RLHF, content filtering, prompt engineering with guardrails.

> **One-Sentence Takeaway:** Autoregressive transformers generate text one token at a time by attending to all prior context, achieving remarkable quality at the cost of sequential inference and quadratic attention.

---

## 4.6 Prompt Engineering

> **Real-World Analogy:** Giving a prompt to a generative model is like giving instructions to a very literal, hyper-competent chef. If you say "make food," you get something edible but random. If you say "pan-seared salmon with lemon-dill sauce, crispy skin, served on a bed of wild rice, plated on a white ceramic dish, photographed with a 50mm lens," you get exactly what you envisioned. The model has the skill — it just needs precise direction.

### Prompt Structure (SCEQ Framework)

The standard prompt formula for text-to-image:

```
[Subject] + [Context/Action] + [Environment] + [Style/Medium] + [Quality]
```

```
Bad:     "a dog"
Good:    "A golden retriever puppy running through a field of wildflowers, "
         "golden hour lighting, photorealistic, 8K, shallow depth of field"

Negative: "blurry, low quality, distorted, ugly, extra limbs, bad anatomy"
```

### How Prompt Engineering Works (Step by Step)

1. **Define subject:** Start with the main object, person, or scene
2. **Add context:** What is the subject doing? What's the situation?
3. **Set environment:** Where does the scene take place? What's the lighting?
4. **Choose style:** Photography, oil painting, 3D render, anime, sketch?
5. **Specify quality:** Resolution tags (4K, 8K), technical quality (sharp focus, detailed)
6. **Craft negative prompt:** List everything you DON'T want (blurry, distorted, extra limbs)
7. **Add weights:** Use `(keyword:weight)` syntax to emphasize or de-emphasize elements
8. **Test and iterate:** Generate, evaluate, refine — repeat

### Pseudocode

```
FUNCTION build_prompt(subject, context, environment, style, quality):
    positive = f"{subject}, {context}, {environment}, {style}, {quality}"
    negative = "blurry, lowres, bad anatomy, extra limbs, ugly, deformed"

    IF any_weights:
        FOR each keyword, weight:
            keyword = f"({keyword}:{weight})"

    RETURN positive, negative

FUNCTION generate_with_prompt(pipe, positive, negative, steps, guidance):
    image = pipe(
        prompt=positive,
        negative_prompt=negative,
        num_inference_steps=steps,
        guidance_scale=guidance,
    )
    RETURN image
```

### Step-by-Step Dry Run (Trace Table)

| Attempt | Prompt | Result | Issue | Fix |
|---------|--------|--------|-------|-----|
| 1 | "a cat" | Blurry shape, no detail | Too vague, no context | Add specifics |
| 2 | "a gray cat sitting on a chair, digital art" | Cat shape but 3 legs, weird face | Missing quality tags + no negative prompt | Add quality + negative |
| 3 | "gray cat sitting on a chair, digital art, sharp focus, detailed" | Better but still some artifacts | Poor prompt structure | Use SCEQ framework |
| 4 | "gray tabby cat sitting on a wooden chair, cozy living room, digital art, sharp focus, 4K" + negative | Clean image, one good result | Good! Now test variations | Iterate style |
| 5 | "gray tabby cat sitting on a wooden chair, cozy living room, (oil painting:1.2), (impasto:1.1), sharp focus" + negative | Oil painting style achieved | Excellent | Use this formula |

### Python Implementation

```python
def generate_with_prompt(
    pipe,
    subject,
    context="",
    environment="",
    style="photorealistic",
    quality="8K, highly detailed, sharp focus",
    negative="blurry, low quality, distorted, ugly, bad anatomy, "
             "extra limbs, watermark, text, signature",
    weights=None,
    num_steps=25,
    guidance=7.5,
):
    # Build positive prompt
    parts = [subject]
    if context:
        parts.append(context)
    if environment:
        parts.append(environment)
    parts.append(style)
    parts.append(quality)
    positive = ", ".join(parts)

    # Apply weights
    if weights:
        for keyword, weight in weights.items():
            if keyword in positive:
                positive = positive.replace(
                    keyword, f"({keyword}:{weight})"
                )

    # Generate
    image = pipe(
        prompt=positive,
        negative_prompt=negative,
        num_inference_steps=num_steps,
        guidance_scale=guidance,
    ).images[0]

    return image, positive, negative

# Usage
image, pos, neg = generate_with_prompt(
    pipe,
    subject="a golden retriever puppy",
    context="running joyfully, tongue out",
    environment="sunny meadow, wildflowers, golden hour",
    style="photorealistic",
    quality="8K, shallow depth of field, detailed fur texture",
    weights={"golden retriever": 1.2, "wildflowers": 1.1},
)
```

### Complexity Analysis

| Aspect | Time Complexity | Space Complexity | Reason |
|--------|----------------|------------------|--------|
| **Prompt parsing** | $$O(L)$$ | $$O(L)$$ | Linear in prompt length |
| **Inference cost** | Same as base model | Same as base model | Prompt engineering adds no model cost |
| **Iteration cost** | $$O(N_{attempts} \cdot inference\_cost)$$ | — | Each generation attempt costs full inference |

**Why prompt engineering is free computationally:** The prompt just changes the conditioning input — same model, same architecture, no training needed.

### Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| No training required — works with any model | Results are inconsistent across seeds |
| Instant results — iterate in minutes | Requires trial and error to get right |
| Full creative control over output | Knowledge cutoff — limited to model's training data |
| Negative prompts remove artifacts | Long prompts get truncated (77 token limit in SD) |
| Weighted prompts focus generation | Cannot teach the model new concepts |

### Edge Cases

1. **Token Limit Exceeded:** Stable Diffusion clips prompts beyond 77 tokens. Mitigation: use the most important words first, compress phrases.

2. **Concept Bleed:** "Red apple and green apple" may produce a single apple that is both red and green. Mitigation: use AND operator in advanced prompts, generate separately and composite.

3. **Negative Prompt Overreach:** Too many negative tags can degrade quality or suppress the subject. Mitigation: keep negative prompts focused on 5-8 common artifacts.

4. **Style Interference:** Specifying multiple conflicting styles produces muddy results. Mitigation: pick one dominant style, weight it higher.

> **Pro Tip:** Always include a negative prompt. Common artifacts (blurry, distorted hands, extra limbs) can be dramatically reduced with a well-crafted negative prompt, often more effectively than tweaking the positive prompt.

> **One-Sentence Takeaway:** Effective prompt engineering follows a five-part formula — subject, context, environment, style, quality — and pairs positive prompts with explicit negative prompts to remove artifacts.

---

## 4.7 Fine-Tuning (LoRA, DreamBooth)

> **Real-World Analogy:** Imagine you have a chef who can cook any cuisine, but you want them to specialize in your grandmother's secret pasta recipe. Instead of sending them to culinary school for 3 years (full retraining), you give them a small notebook with just the key adjustments: "use San Marzano tomatoes, cook exactly 11 minutes, add basil at the end." This notebook is LoRA — a tiny set of task-specific modifications that adapts a large general model without retraining everything.

### Overview

| Method | What It Does | Storage Overhead | Training Time | Data Required |
|--------|-------------|------------------|---------------|---------------|
| **Full Fine-Tune** | Updates all model weights | Full model (2-7GB per variant) | Days | 10K+ images |
| **LoRA** | Adds small rank-decomposition matrices | 2-50MB per adapter | Hours | 10-200 images |
| **DreamBooth** | Binds a new concept to a unique token | 50-200MB (usually combined with LoRA) | Hours | 3-20 images |
| **Textual Inversion** | Learns new embedding tokens only | ~100KB per concept | Minutes | 3-5 images |
| **Adapter** | Adds small bottleneck layers | 5-20MB per adapter | Hours | 100-1000 images |

### How LoRA Works (Step by Step)

1. **Freeze base model:** All original weights are frozen — no gradients computed
2. **Inject adapters:** For each weight matrix $$W \in \mathbb{R}^{d \times k}$$, add a low-rank decomposition $$W' = W + BA$$ where $$B \in \mathbb{R}^{d \times r}$$, $$A \in \mathbb{R}^{r \times k}$$, and $$r \ll \min(d, k)$$
3. **Train only adapters:** Only $$A$$ and $$B$$ are updated during training (typically rank $$r = 8$$ to $$64$$)
4. **Merge or keep separate:** At inference, either merge $$BA$$ into $$W$$ (no speed cost) or keep separate (swap adapters)
5. **Apply:** Use the adapted model for generation in the target domain

```
Original:         y = Wx
With LoRA:        y = Wx + BAx
                   └── only BA is trained ──┘
                   └── W is frozen ──────────┘
```

### Pseudocode

```
FUNCTION train_lora(base_model, dataset, rank=8, epochs=100, lr=1e-4):
    // Freeze base model
    FOR param IN base_model.parameters():
        param.requires_grad = False

    // Inject LoRA layers into attention projections
    FOR name, module IN base_model.attention_modules():
        module.q_proj.lora = LoRALayer(module.q_proj.in_features,
                                        module.q_proj.out_features, rank)
        module.v_proj.lora = LoRALayer(module.v_proj.in_features,
                                        module.v_proj.out_features, rank)
        // Only LoRA params are trainable

    optimizer = Adam(lora_params, lr=lr)

    FOR epoch = 1 TO epochs:
        FOR batch IN dataset:
            prompt = batch["prompt"]
            target_image = batch["image"]

            noise = add_noise(target_image)
            noise_pred = base_model(noise, prompt)  // Uses LoRA adapters
            loss = MSE(noise, noise_pred)

            loss.backward()
            optimizer.step()

    // Save only LoRA weights (~5MB)
    save_lora_weights("my_style_lora.safetensors")
    RETURN base_model  // Now adapted
```

### Step-by-Step Dry Run (Trace Table)

**Setup:** Fine-tuning Stable Diffusion to generate in "Van Gogh style", rank=4, 20 training images

| Step | Operation | Weight Update | Memory | Model State |
|------|-----------|--------------|--------|-------------|
| 1 | Freeze base model | — | Full model (1.7GB) | All params frozen |
| 2 | Add LoRA to q_proj (dim=1024, r=4) | 2 × 1024×4 = 8192 params | +32KB | Unfrozen A, B |
| 3 | Add LoRA to v_proj (dim=1024, r=4) | 2 × 1024×4 = 8192 params | +32KB | Unfrozen A, B |
| 4 | Forward pass with LoRA | — | Full model + LoRA | W' = W + BA |
| 5 | Compute loss | — | — | MSE |
| 6 | Backward pass | — | Gradients for A, B only | Frozen W unchanged |
| 7 | Adam step | A: += 1e-4 * grad_A | — | LoRA weights update |
| 8 | Repeat for 100 epochs | — | — | LoRA converges to "Van Gogh" distribution |
| 9 | Inference: merge or keep | BA merged into W | Same as base | No speed change |
| 10 | Generate | — | — | "A cat in Van Gogh style" works |

**Why LoRA saves so much memory:** Instead of updating 1.7 billion parameters, you update only ~100K parameters. One adapter file is ~5MB instead of ~7GB.

### Python Implementation (LoRA with Diffusers)

```python
from diffusers import StableDiffusionPipeline, UNet2DConditionModel
from diffusers.loaders import AttnProcsLayers
from diffusers.models.attention_processor import LoRAAttnProcessor
import torch

# ── Load base model ──
pipe = StableDiffusionPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5",
    torch_dtype=torch.float16,
).to("cuda")

# ── Inject LoRA ──
unet = pipe.unet
lora_attn_procs = {}
for name in unet.attn_processors.keys():
    if "attn1" in name:  # Self-attention
        lora_attn_procs[name] = LoRAAttnProcessor(
            hidden_size=unet.config.cross_attention_dim,
            rank=4,
        )
    elif "attn2" in name:  # Cross-attention (text → image)
        lora_attn_procs[name] = LoRAAttnProcessor(
            hidden_size=unet.config.cross_attention_dim,
            rank=4,
        )
unet.set_attn_processor(lora_attn_procs)

# ── Only LoRA params require gradients ──
lora_layers = AttnProcsLayers(unet.attn_processors)
optimizer = torch.optim.AdamW(lora_layers.parameters(), lr=1e-4)

# ── Training loop (simplified) ──
for step, batch in enumerate(train_dataloader):
    latents = batch["latents"].to("cuda")
    noise = torch.randn_like(latents)
    timesteps = torch.randint(0, 1000, (latents.shape[0],), device="cuda")

    noisy_latents = noise_scheduler.add_noise(latents, noise, timesteps)
    noise_pred = unet(noisy_latents, timesteps, batch["embeds"]).sample
    loss = torch.nn.functional.mse_loss(noise_pred, noise)

    loss.backward()
    optimizer.step()
    optimizer.zero_grad()

# ── Save LoRA weights ──
torch.save(lora_layers.state_dict(), "my_style_lora.safetensors")
print(f"LoRA weights saved (~5MB) — {lora_layers.num_parameters():,} params trainable")
```

### Complexity Analysis

| Method | Trainable Params | Storage | Training Time | Inference Cost |
|--------|-----------------|---------|---------------|----------------|
| Full fine-tune | 1.7B (100%) | 7GB | Days | Same as base |
| LoRA (r=4) | ~0.2M (0.01%) | 2-5MB | Hours | Same as base (merged) |
| LoRA (r=64) | ~3M (0.18%) | 30-50MB | Hours | Same as base (merged) |
| DreamBooth | Same as LoRA | Same as LoRA | Hours | Slightly higher (prior preservation) |
| Textual Inversion | ~0.0005M | 100KB | 30-60 min | Same as base |

### Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| Drastically reduces storage (GB → MB per variant) | Low rank may not capture complex concepts |
| Fast training (hours vs days) | Cannot fundamentally change model behavior |
| No inference latency increase (when merged) | Requires careful hyperparameter tuning |
| Multiple adapters can be composed | Overfitting risk with very small datasets (< 5 images) |
| Works across modalities (image, text, audio) | LoRA on all layers increases adapter size |

### Edge Cases

1. **Overfitting:** With too few images (3-5), the model memorizes rather than learns the concept. Mitigation: use regularization (prior preservation loss in DreamBooth), data augmentation.

2. **Catastrophic Forgetting:** Full fine-tuning can cause the model to forget how to generate general concepts. Mitigation: use LoRA instead of full fine-tune, mix domain data with general data.

3. **Concept Entanglement:** With multiple LoRA adapters stacked, concepts can blend in unintended ways. Mitigation: use separate adapter files and only load one at a time, or use weight blending.

4. **Resolution Mismatch:** Fine-tuning on low-resolution images degrades high-resolution generation. Mitigation: resize all training images to the model's native resolution (typically 512×512).

5. **Trigger Token Conflict:** The chosen trigger word (e.g., "sks") may already have meaning in the model. Mitigation: use rare token combinations, verify the trigger is not already strongly associated.

> **One-Sentence Takeaway:** LoRA adapts large generative models to new domains by training tiny rank-decomposition matrices while freezing the base model — enabling custom variants that are 1000× smaller than full copies.

---

## 4.8 Retrieval-Augmented Generation (RAG)

> **Real-World Analogy:** Imagine a brilliant but extremely forgetful professor. He knows a vast amount of general knowledge, but he can't remember specific details from his own recent lectures or private documents. If you ask him a question, he may confidently make up an incorrect answer (hallucination). The solution: give him an open-book exam. Whenever you ask a question, he first looks up relevant passages in his personal notebook (retrieval), reads them, and then answers based on what he found. Now his answers are always grounded in facts. This is RAG.

### Architecture

RAG combines a retrieval system (search over a knowledge base) with a generative model (LLM) to produce grounded, up-to-date answers.

```
User Query
    │
    ▼
┌─────────────────────┐    ┌───────────────────┐
│   Embedding Model   │───→│  Vector Database   │
│   (e.g., text-      │    │  (e.g., Pinecone,  │
│    embedding-ada)   │    │   Chroma, FAISS)   │
└─────────────────────┘    └───────────────────┘
                                   │
                           Retrieved Chunks
                                   │
                                   ▼
┌─────────────────────────────────────────┐
│           Prompt Constructor            │
│  "Answer based on: [chunks]...[query]"  │
└─────────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────┐
│         LLM (GPT-4, Claude, etc.)       │
│  Generates answer grounded in chunks    │
└─────────────────────────────────────────┘
                   │
                   ▼
            Grounded Answer + Citations
```

### How RAG Works (Step by Step)

#### Indexing Phase (One-Time Setup)

1. **Chunk documents:** Split knowledge base documents into chunks (typically 256-1024 tokens each with overlap)
2. **Generate embeddings:** Pass each chunk through an embedding model to get a dense vector representation
3. **Store vectors:** Insert all embeddings into a vector database with the chunk text as metadata
4. **Build index:** Create an approximate nearest neighbor (ANN) index for fast retrieval at query time

#### Query Phase (At Runtime)

5. **Embed query:** Convert the user's question into an embedding using the same embedding model
6. **Retrieve:** Query the vector database for the top-K most similar chunks (K = 3-10 typically)
7. **Construct prompt:** Build a prompt that includes the retrieved chunks as context + the user's question
8. **Generate:** Pass the augmented prompt to the LLM
9. **Return:** Return the LLM's response, optionally with citations to retrieved documents

### Pseudocode

```
// ── INDEXING ──
FUNCTION index_documents(documents, embed_model, vector_db):
    FOR doc IN documents:
        chunks = split_into_chunks(doc, chunk_size=512, overlap=64)
        FOR chunk IN chunks:
            embedding = embed_model.encode(chunk)
            vector_db.insert(embedding, metadata={"text": chunk, "source": doc.name})
    RETURN vector_db

// ── QUERY ──
FUNCTION rag_query(query, embed_model, vector_db, llm, top_k=5):
    // Retrieve
    query_embedding = embed_model.encode(query)
    results = vector_db.search(query_embedding, top_k)

    // Augment
    context = ""
    FOR result IN results:
        context += f"[Source {result.id}]\n{result.text}\n\n"

    prompt = f"""You are a helpful assistant. Answer the question based ONLY on the
    provided context. If the context does not contain enough information, say so.

    CONTEXT:
    {context}

    QUESTION: {query}

    ANSWER:"""

    // Generate
    answer = llm.generate(prompt)

    RETURN answer, [r.source for r in results]
```

### Step-by-Step Dry Run (Trace Table)

**Setup:** Vector DB with 3 chunks about AI, embedding dim=4 (simplified), query="What is a transformer?"

| Step | Operation | Detail | Result |
|------|-----------|--------|--------|
| 1 | Chunk document | Doc: "Transformers use attention. CNNs use convolution." | Chunk 1: "Transformers use attention" |
| 2 | Chunk document | — | Chunk 2: "CNNs use convolution for vision" |
| 3 | Chunk document | — | Chunk 3: "Attention mechanisms weigh input importance" |
| 4 | Embed chunks | embed("Transformers use attention") | [0.2, 0.8, 0.3, 0.1] |
| 5 | Embed chunks | embed("CNNs use convolution for vision") | [0.9, 0.1, 0.7, 0.5] |
| 6 | Embed chunks | embed("Attention mechanisms weigh...") | [0.3, 0.7, 0.2, 0.2] |
| 7 | Store in DB | Vectors + text stored | Index created |
| 8 | Embed query | embed("What is a transformer?") | [0.25, 0.75, 0.28, 0.15] |
| 9 | Cosine sim | Chunk 1: 0.99, Chunk 2: 0.45, Chunk 3: 0.92 | Top-2: Chunk 1, Chunk 3 |
| 10 | Construct prompt | "Answer: [Chunk1][Chunk3] Q: What is a transformer?" | Augmented prompt ready |
| 11 | LLM generate | "A transformer is an architecture that uses attention..." | Grounded answer |
| 12 | Return | Response + citations [Chunk1, Chunk3] | Final output |

### Python Implementation (RAG with LangChain + Chroma)

```python
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.vectorstores import Chroma
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.llms import HuggingFacePipeline
from langchain.chains import RetrievalQA
from langchain.document_loaders import TextLoader
import torch

# ── 1. Load and Chunk Documents ──
loader = TextLoader("knowledge_base.txt")
documents = loader.load()

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=512,
    chunk_overlap=64,
    separators=["\n\n", "\n", ".", " ", ""],
)
chunks = text_splitter.split_documents(documents)
print(f"Created {len(chunks)} chunks")

# ── 2. Create Embeddings and Vector Store ──
embedding_model = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-MiniLM-L6-v2",
)
vectorstore = Chroma.from_documents(
    documents=chunks,
    embedding=embedding_model,
    persist_directory="./chroma_db",
)

# ── 3. Create RAG Chain ──
llm = HuggingFacePipeline.from_model_id(
    model_id="microsoft/phi-2",
    task="text-generation",
    pipeline_kwargs={
        "max_new_tokens": 256,
        "temperature": 0.3,
        "do_sample": False,
    },
)

qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",  # "stuff", "map_reduce", "refine", "map_rerank"
    retriever=vectorstore.as_retriever(search_kwargs={"k": 4}),
    return_source_documents=True,
)

# ── 4. Query ──
query = "What is the transformer architecture?"
result = qa_chain({"query": query})

print(f"Answer: {result['result']}")
print(f"Sources: {[d.metadata['source'] for d in result['source_documents']]}")
```

### Advanced: Hybrid Search (Dense + Sparse)

```python
# BM25 (lexical) + Dense (semantic) hybrid retrieval
from langchain.retrievers import EnsembleRetriever
from langchain.retrievers import BM25Retriever

bm25_retriever = BM25Retriever.from_documents(chunks)
bm25_retriever.k = 4

dense_retriever = vectorstore.as_retriever(
    search_kwargs={"k": 4}
)

hybrid_retriever = EnsembleRetriever(
    retrievers=[bm25_retriever, dense_retriever],
    weights=[0.3, 0.7],  # Weighted combination
)

results = hybrid_retriever.get_relevant_documents(query)
```

### Complexity Analysis

| Phase | Time Complexity | Space Complexity | Reason |
|-------|----------------|------------------|--------|
| **Indexing** | $$O(N \cdot d \cdot L)$$ per doc | $$O(N \cdot d)$$ for vectors + $$O(N \cdot L)$$ for text | Embed each chunk through transformer |
| **Retrieval (ANN)** | $$O(d \cdot \log N)$$ | $$O(N \cdot d)$$ | Approximate Nearest Neighbor: logarithmic in corpus size |
| **Generation** | $$O(L^2)$$ per token | $$O(L^2)$$ for attention | Same as base LLM cost |
| **Hybrid search** | $$O(d \cdot \log N + N_{terms} \cdot \log N)$$ | $$O(N \cdot d + N \cdot vocab)$$ | Both indexes maintained |

**Why RAG is efficient:** Retrieval scales logarithmically with corpus size (ANN indexing), and only the top-K chunks are fed to the LLM, so generation cost is constant regardless of total knowledge base size.

### Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| Knowledge is always up-to-date (update index) | Retrieval quality depends on chunking strategy |
| Grounded answers with citations | Additional infrastructure (vector DB, embed model) |
| No retraining needed for new knowledge | Requires careful prompt construction |
| Works with proprietary/private documents | Failure cascade: bad retrieval → bad answer |
| Reduces hallucination significantly | Embedding dimension mismatch between models |
| Scalable to millions of documents | Longer context = higher cost + latency |

### Edge Cases

1. **Lost in the Middle:** When many chunks are retrieved, the LLM focuses on the first and last chunks, ignoring the middle. Mitigation: re-rank retrieved chunks, use fewer (3-5) but higher-quality chunks.

2. **Irrelevant Retrieval:** The embedding model retrieves chunks that are semantically similar but not actually helpful. Mitigation: use hybrid search (BM25 + dense), add metadata filtering.

3. **Stale Index:** Documents are updated but the vector index is not rebuilt. Mitigation: incremental indexing, timestamp-based invalidation.

4. **Context Window Overflow:** Retrieved chunks + query exceed the LLM's context limit. Mitigation: smaller chunk sizes, more aggressive chunk selection, dynamic truncation.

5. **Chunk Boundary Cutoff:** Important information is split across chunks. Mitigation: use overlapping chunks (overlap = 10-20% of chunk size), sliding window chunking.

> **One-Sentence Takeaway:** RAG grounds LLM outputs in retrieved external knowledge, dramatically reducing hallucination while keeping knowledge fresh without model retraining.

---

## 4.9 GAN vs VAE vs Diffusion — Comparison Table

| Aspect | GAN | VAE | Diffusion |
|--------|-----|-----|-----------|
| **Core Idea** | Adversarial game (G vs D) | Variational inference (ELBO) | Iterative denoising |
| **Training Stability** | Low — oscillating loss, mode collapse | High — single objective | Very High — simple MSE loss |
| **Output Quality** | Sharp, realistic | Blurry, smooth | State-of-the-art |
| **Output Diversity** | Low (mode collapse risk) | High (smooth latent) | Very High |
| **Inference Speed** | Fast (1 forward pass) | Fast (1 forward pass) | Slow (25-1000 steps) |
| **Latent Space** | Discontinuous, hard to interpret | Smooth, well-structured | No compact latent space |
| **Interpolation** | Poor — mode hopping | Excellent — smooth morphing | Poor — no meaningful interpolation |
| **Training Cost** | Moderate | Low | High (large U-Net) |
| **Likelihood Estimates** | No | Yes (ELBO bound) | Approximate |
| **Text Conditioning** | Complex (needs auxiliary) | Possible (CVAE) | Natural (cross-attention) |
| **Best Use Case** | Super-resolution, real-time | Anomaly detection, morphing | Text-to-image, inpainting |
| **Common Failure** | Mode collapse, non-convergence | Blurry outputs, posterior collapse | Slow sampling, hallucination |
| **Parameter Efficiency** | High (small models) | High | Low (large U-Net) |
| **Maturity** | Mature (2014) | Mature (2013) | Recent (2020-2022) |

### When to Choose What

| Your Goal | Best Choice | Why |
|-----------|-------------|-----|
| Photorealistic text-to-image | Diffusion | Best quality, best text conditioning |
| Real-time generation on edge | GAN | Fastest inference by far |
| Smooth morphing between images | VAE | Best latent space structure |
| Anomaly detection on images | VAE | Reconstruction loss as anomaly score |
| Super-resolution | GAN | Sharp upscaling (ESRGAN) |
| Diverse creative exploration | Diffusion | Highest diversity per prompt |
| Interpreting latent factors | VAE | Disentangled representations (β-VAE) |
| Limited GPU budget | VAE or GAN | Smaller models, lower compute |

---

## 4.10 Interview Corner

### Prompt Engineering Tips

| Question | Answer |
|----------|--------|
| **How do you write effective prompts for text-to-image models?** | Use the SCEQ framework: Subject + Context + Environment + Style + Quality. Always pair with a negative prompt removing common artifacts (blurry, distorted, extra limbs). Use weight syntax `(keyword:1.2)` to emphasize critical elements. Iterate — rarely does the first prompt give the perfect result. |
| **What is a negative prompt and why is it important?** | A negative prompt tells the model what NOT to generate. Without it, common artifacts like distorted hands, bad anatomy, and blurry regions appear frequently. A well-crafted negative prompt is often more effective than tweaking the positive prompt. |
| **How do you handle the 77-token limit in Stable Diffusion prompts?** | Prioritize the most critical information first. Use compressed phrases ("golden hour lighting" instead of "lighting that occurs during the golden hour"). For complex scenes, use regional prompting or generate multiple images and composite. |
| **What is classifier-free guidance (CFG)?** | CFG controls how strongly the model adheres to the prompt. Scale 1.0 = no conditioning (ignores prompt), 7-12 = standard, >15 = overly saturated, unnatural results. Lower CFG gives more creative freedom; higher CFG gives stricter adherence. |
| **How does temperature affect LLM text generation?** | Temperature controls randomness. Low temperature (0.0-0.3) = deterministic, factual, repetitive. Medium (0.5-0.7) = balanced creativity. High (0.8-1.5) = creative, diverse, sometimes incoherent. For factual tasks, use low temperature. For creative writing, use higher temperature. |

### Fine-Tuning vs RAG

| Aspect | Fine-Tuning | RAG | Hybrid |
|--------|-------------|-----|--------|
| **What it modifies** | Model weights (permanent) | Model input (dynamic) | Both |
| **Knowledge freshness** | Stale after training | Always current | Always current |
| **Data requirement** | 100-10K examples | Just documents | Documents + examples |
| **Infrastructure cost** | Training GPU + storage | Vector DB + embed model | Both |
| **Best for** | Style/tone adaptation | Factual knowledge retrieval | Complex production systems |
| **Hallucination** | Still possible | Significantly reduced | Minimized |
| **Change behavior** | Yes (rhythm, tone, style) | No (model stays the same) | Both |
| **Update cost** | Retrain entire model | Re-index documents | Re-index only |
| **Latency overhead** | None (merged weights) | +50-200ms (retrieval) | +50-200ms |

**Interview Answer Framework:**
"When should you use fine-tuning vs RAG? Fine-tuning is best for adapting behavior, style, or output format — for example, making a model speak like Shakespeare or generate code in your company's style. RAG is best for grounding answers in factual knowledge that changes frequently — like a customer support bot that needs to reference the latest product documentation. In production, the best systems often combine both: fine-tune for tone and style, RAG for knowledge."

### Safety and Responsibility

| Question | Answer |
|----------|--------|
| **What safety measures do generative models need in production?** | (1) NSFW content filtering on all outputs, (2) Rate limiting to prevent abuse, (3) Usage logging with prompt, user, timestamp for audit trails, (4) Watermarking generated content, (5) Bias auditing across demographic groups, (6) Prompt injection protections for LLMs. |
| **What is model bias in generative AI?** | Models reflect biases in their training data. If a model is trained mostly on Western faces, it will generate poorer results for non-Western features. Mitigation: curate diverse training data, test prompts across demographics, use debiasing techniques. |
| **How do you detect AI-generated content?** | Statistical detectors (GPTZero, Originality.ai), watermarking (latent watermarks in diffusion outputs), metadata analysis, and human review. No method is perfect — detection is an arms race. |
| **What is prompt injection and how do you prevent it?** | Prompt injection is when a user tricks an LLM into ignoring its system prompt or performing unauthorized actions. Prevention: input sanitization, delimiter-based separation of user input, least-privilege system prompts, output filtering. |
| **How do you handle copyright concerns with generative AI?** | Use licensed training data, implement style blockers (prevent mimicking living artists), add invisible watermarks, have a takedown process, and follow platform terms of service. The legal landscape is still evolving. |

### Common Interview Questions

**Q: Explain the difference between GANs, VAEs, and diffusion models in one sentence each.**
A: GANs pit two networks against each other for sharp outputs; VAEs learn smooth latent spaces via probabilistic encoding; diffusion models iteratively denoise random noise for state-of-the-art quality.

**Q: What is mode collapse and how do you fix it?**
A: Mode collapse is when a GAN generator produces limited varieties of outputs (only one "mode" of the data distribution). Fixes: mini-batch discrimination, spectral normalization, unrolled GANs, or Wasserstein loss.

**Q: Why are diffusion models slow at inference and how do you speed them up?**
A: They require 25-1000 sequential denoising passes. Speed-ups: use DPM++ or DDIM schedulers to reduce steps from 1000 to 25-50, use LCM-LoRA for 1-4 step generation, or distill into a student model.

**Q: What is the reparameterization trick and why is it needed?**
A: In VAEs, we sample $$z \sim N(\mu, \sigma^2)$$ which is non-differentiable. The reparameterization trick rewrites this as $$z = \mu + \sigma \cdot \epsilon$$ where $$\epsilon \sim N(0, I)$$ — now gradients can flow through $$\mu$$ and $$\sigma$$ because the randomness is isolated in $$\epsilon$$.

**Q: How would you build a production text-to-image service?**
A: (1) Load base diffusion model with fp16, (2) Add LoRA adapters for custom styles, (3) Use DPMSolver scheduler for faster inference, (4) Queue requests with a task broker (Redis), (5) Run multiple GPU workers, (6) Apply NSFW filter before returning, (7) Cache common prompts, (8) Log everything for audit and improvement.

---

## 4.11 Applications in Real Systems

### DALL·E 3 (OpenAI)

- **Under the hood:** Diffusion model (unconfirmed details — likely a latent diffusion model with transformer text encoder)
- **Key innovation:** Tight text-image alignment via image captioning during training
- **API access:** Via OpenAI API (`dalle-3` model), integrates into ChatGPT Plus
- **Unique features:** Precise text rendering, strong prompt adherence, automatic prompt refinement
- **Use cases:** Marketing materials, concept art, product design, education

### ChatGPT / GPT-4 (OpenAI)

- **Under the hood:** Decoder-only transformer with RLHF (Reinforcement Learning from Human Feedback)
- **Key innovation:** Instruction-following, multi-turn conversation, tool use (code interpreter, browsing, DALL·E)
- **API access:** Via OpenAI API, Azure OpenAI Service
- **Unique features:** Massive world knowledge, code generation and execution, multimodal (GPT-4V)
- **Use cases:** Programming assistance, writing, analysis, customer support, tutoring

### Midjourney

- **Under the hood:** Modified diffusion model with proprietary architecture
- **Key innovation:** Aesthetic quality optimization — outputs are consistently more "artistic" than competitors
- **API access:** Discord-based, standalone web app (alpha)
- **Unique features:** Style consistency across generations, strong community, upscaling, variations, inpainting
- **Use cases:** Concept art, game design, architectural visualization, branding

### GitHub Copilot

- **Under the hood:** Codex model (GPT architecture fine-tuned on public code repositories)
- **Key innovation:** Fill-in-the-middle (FIM) training — predicts code in the middle of a file given surrounding context
- **API access:** IDE extensions (VS Code, JetBrains, Neovim) and Copilot Chat
- **Unique features:** Real-time code completion, multi-line suggestions, context-aware, supports 100+ languages
- **Use cases:** Software development, code generation, test writing, documentation

### Stable Diffusion (Stability AI)

- **Under the hood:** Latent Diffusion Model (LDM) — diffusion in a compressed latent space
- **Key innovation:** Open-source, runs on consumer GPUs, highly extensible (LoRA, ControlNet, DreamBooth)
- **API access:** HuggingFace Diffusers, Replicate, Stability AI API, local inference
- **Unique features:** Full model access, fine-tuning, community ecosystem (CivitAI, automatic1111 webui)
- **Use cases:** Custom image generation, research, creative tools, game assets

### Comparison Table

| System | Base Architecture | Strengths | Weaknesses | Open Source | API Cost |
|--------|-------------------|-----------|------------|-------------|----------|
| DALL·E 3 | Diffusion | Best prompt following | Less creative freedom | No | $$$ |
| ChatGPT/GPT-4 | Transformer (decoder) | Multimodal, tool use, coding | Prone to hallucination | No | $$-$$$ |
| Midjourney | Diffusion | Artistic quality, style | Less controllable | No | $$ |
| GitHub Copilot | Transformer (FIM) | Code-specific, IDE integration | Limited to code | No | $ |
| Stable Diffusion | Latent Diffusion | Fully customizable, open | Requires setup, lower default quality | Yes | Free (self-host) |

---

## 4.12 Evaluation of Generative Models

### 4.12.1 FID Score (Fréchet Inception Distance)

FID measures the distance between real and generated image distributions using Inception features. Lower is better.

```python
# Conceptual FID calculation
import numpy as np
from scipy import linalg

def calculate_fid(real_features: np.ndarray, gen_features: np.ndarray) -> float:
    mu1, sigma1 = real_features.mean(axis=0), np.cov(real_features, rowvar=False)
    mu2, sigma2 = gen_features.mean(axis=0), np.cov(gen_features, rowvar=False)

    diff = mu1 - mu2
    covmean, _ = linalg.sqrtm(sigma1.dot(sigma2), disp=False)
    if np.iscomplexobj(covmean):
        covmean = covmean.real

    return diff.dot(diff) + np.trace(sigma1 + sigma2 - 2 * covmean)
```

### Other Metrics

| Metric | What It Measures | Range | Used For |
|--------|-----------------|-------|----------|
| **FID** | Distribution similarity | 0-∞ (lower = better) | Image quality and diversity |
| **IS (Inception Score)** | Classifiability + diversity | 1-∞ (higher = better) | GAN evaluation |
| **CLIP Score** | Text-image alignment | 0-100 (higher = better) | Text-to-image faithfulness |
| **Perplexity** | Model confidence | 1-∞ (lower = better) | LLM quality |
| **BLEU / ROUGE** | N-gram overlap with reference | 0-1 (higher = better) | Translation, summarization |
| **Human Evaluation** | Subjective quality rating | 1-5 Likert scale | Gold standard |

> **⚠️ Warning:** FID requires a large sample size (5,000-50,000 images) for stable results. Small sample sizes produce noisy, unreliable scores. Always report the sample size alongside the FID value.

> **One-Sentence Takeaway:** FID score quantifies the similarity between real and generated image distributions, with lower values indicating higher quality generations.

---

## 4.13 Responsible Generative AI

```python
guidelines = {
    "Watermarking": "Add invisible watermarks to all generated images",
    "Content safety": "Apply NSFW filters before returning results",
    "Bias auditing": "Test prompts across demographics to check for bias",
    "Usage logging": "Log all generation requests (prompt, user, timestamp)",
    "Rate limiting": "Prevent abuse with per-user rate limits",
    "Prompt injection protection": "Sanitize user inputs for LLM applications",
    "Copyright compliance": "Implement style blockers and takedown processes",
    "Human oversight": "Review flagged content before public release",
    "Transparency": "Clearly label AI-generated content for end users",
}

for rule, desc in guidelines.items():
    print(f"{rule}: {desc}")
```

> **⚠️ Warning:** Generative models can amplify societal biases present in training data. Always audit outputs across demographic groups and apply content safety filters before returning results to users.

> **One-Sentence Takeaway:** Responsible generative AI requires watermarking, NSFW filtering, bias auditing, usage logging, and rate limiting as fundamental production safeguards.

---

### Concept Comparison Table

| Concept | Definition | Key Distinction | Use Case |
|---------|------------|----------------|----------|
| **GAN** | Adversarial training with generator and discriminator | Sharp outputs, unstable training, mode collapse risk | Real-time image synthesis, super-resolution |
| **VAE** | Probabilistic encoder-decoder with KL regularization | Smooth latent space, blurry outputs | Anomaly detection, latent space exploration |
| **Diffusion** | Iterative denoising from random noise | Highest quality, slow inference | Text-to-image, inpainting, image editing |
| **Transformer** | Autoregressive next-token prediction | Sequential generation, quadratic attention | Text, code, music generation |
| **Prompt Engineering** | Crafting inputs for generative models | Structure determines output quality | Controlling composition, style, and details |
| **LoRA** | Low-rank adaptation for fine-tuning | Tiny adapter files (MB vs GB) | Customizing models without full retrain |
| **RAG** | Retrieval-Augmented Generation | Knowledge-grounded outputs | Question answering, customer support |
| **FID Score** | Distribution distance between real and generated images | Quantitative quality metric | Model comparison, training monitoring |
| **Img2Img** | Generating images from an initial image + prompt | Strength parameter controls deviation from input | Style transfer, sketch-to-photo |

### Quick Reference

| Category | Key Tool / Technique |
|----------|---------------------|
| GAN Training | `torch.nn.BCELoss`, alternating D/G updates, Adam (lr=0.0002), label smoothing |
| VAE | Encoder → mu/logvar → reparameterize → decoder + KL loss + MSE |
| Text-to-Image | `StableDiffusionPipeline.from_pretrained` with DPMSolver |
| Image-to-Image | `StableDiffusionImg2ImgPipeline` with strength parameter |
| Inpainting | `StableDiffusionInpaintPipeline` with mask image |
| LoRA Training | Freeze base → inject rank-4 matrices → train adapters only |
| RAG Pipeline | Chunk → Embed → Store → Retrieve → Augment → Generate |
| Prompt Structure | Subject + Context + Environment + Style + Quality |
| Evaluation | FID score, CLIP score, human evaluation |
| Safety | NSFW filter, watermarking, rate limiting, audit logging |

### Cross-Application Matrix

| Technique | AI Engineering | Data Science | Web Dev | Research |
|-----------|---------------|-------------|---------|----------|
| GANs | Data augmentation | Synthetic data generation | Dynamic content creation | Generative modeling research |
| VAEs | Anomaly detection | Dimensionality reduction | Image compression | Representation learning |
| Diffusion Models | Text-to-image pipelines | Scientific image generation | Marketing content creation | Medical imaging |
| Transformers for Gen | Code generation (Copilot) | Text analytics | Chatbots, writing tools | LLM architecture research |
| Prompt Engineering | API integration | Experiment design | User-facing generators | Controlled generation studies |
| LoRA Fine-Tuning | Custom model deployment | Domain adaptation | Style customization | Efficient transfer learning |
| RAG | Knowledge-grounded AI | Document Q&A | Customer support bots | Grounded generation research |
| Img2Img | Style transfer services | Data enrichment | Photo editing apps | Art restoration |
| Inpainting | Content removal tools | Data cleaning | Image repair features | Archaeological reconstruction |
| FID Evaluation | Model selection | Quality benchmarking | A/B testing pipelines | Paper comparisons |

---

## Summary

- **GANs** use adversarial training (generator vs discriminator) for sharp image synthesis but are hard to train with mode collapse risks.
- **VAEs** provide stable training and smooth latent spaces suitable for interpolation and anomaly detection, though outputs are blurrier.
- **Diffusion models** (Stable Diffusion) produce state-of-the-art results with flexible text conditioning but require 25-1000 sequential denoising steps at inference.
- **Transformers** (GPT, Codex) generate text and code auto-regressively — one token at a time — enabling flexible generation across domains.
- **Prompt engineering** is critical: structure prompts as subject + context + environment + style + quality, and always include a negative prompt.
- **LoRA** adapts large models efficiently by training tiny rank-decomposition matrices (MB vs GB per variant).
- **RAG** reduces hallucination by grounding LLM outputs in retrieved external knowledge.
- Evaluate generative models with FID, CLIP score, and human evaluation; always apply safety filters in production.
- The ecosystem (HuggingFace Diffusers, LoRA, ControlNet, DreamBooth, LangChain) enables building production systems with custom domains.

---

## Chapter Quiz

**Q1:** What is the main advantage of diffusion models over GANs?

- A. Diffusion models train faster
- B. Diffusion models produce higher-quality, more diverse images with better text conditioning
- C. Diffusion models do not require GPUs
- D. Diffusion models always produce the same output for a given prompt

<details>
<summary>Answer&lt;/summary&gt;

**B.** Diffusion models produce state-of-the-art quality with greater diversity and flexible text conditioning, though they are slower at inference time than GANs.
</details>

**Q2:** In the VAE loss function, what does the KL divergence term do?

- A. Measures how well the decoder reconstructs the input
- B. Regularizes the latent distribution toward a standard normal, enabling smooth interpolation
- C. Penalizes the discriminator for incorrect classifications
- D. Measures image sharpness

<details>
<summary>Answer&lt;/summary&gt;

**B.** The KL divergence term encourages the encoded latent distribution to be close to a standard normal, which regularizes the latent space and enables meaningful interpolation.
</details>

**Q3:** Which of the following is NOT one of the five prompt components recommended for effective text-to-image prompts?

- A. Subject
- B. Environment
- C. Price
- D. Quality

<details>
<summary>Answer&lt;/summary&gt;

**C.** The five recommended components are Subject, Action/Context, Environment, Style/Medium, and Quality — "price" is not a prompt component.
</details>

**Q4:** What does the reparameterization trick enable in VAEs?

- A. Faster training through batch normalization
- B. Gradient flow through the random sampling operation
- C. Adversarial training without mode collapse
- D. Text conditioning for image generation

<details>
<summary>Answer&lt;/summary&gt;

**B.** The reparameterization trick rewrites z = μ + σ·ε so that gradients can flow through μ and σ while the randomness is isolated in ε ∼ N(0, I).
</details>

**Q5:** What is the primary benefit of using LoRA over full fine-tuning?

- A. Higher quality results
- B. Storage is 1000× smaller (MB vs GB) and training is faster
- C. LoRA models do not need GPUs
- D. LoRA works without any training data

<details>
<summary>Answer&lt;/summary&gt;

**B.** LoRA trains only tiny rank-decomposition matrices (∼0.01% of total parameters), reducing storage from GB to MB and training from days to hours.
</details>

**Q6:** In a RAG pipeline, what is the main reason for chunking documents?

- A. To compress the documents for storage efficiency
- B. To fit relevant context within the LLM's context window limit
- C. To encrypt the documents for security
- D. To improve the embedding model's accuracy

<details>
<summary>Answer&lt;/summary&gt;

**B.** Chunking splits documents into segments small enough to fit within the LLM's context window (along with the query) while ensuring retrieval granularity is appropriate.
</details>

---

## Exercises

1. **Trains a DCGAN on CIFAR-10** (32×32 color images) for 100 epochs. Generate and save 16 sample images per epoch to visualize training progress. Monitor the D/G loss ratio and note when mode collapse occurs.

2. **Build a VAE for anomaly detection:** Train on normal MNIST digits, encode/decode test images, and flag those with high reconstruction loss (>95th percentile). Compare performance with a simple autoencoder.

3. **Use Stable Diffusion with a LoRA adapter** to generate images in a specific artistic style (e.g., Van Gogh, anime, cyberpunk). Train the LoRA on 20-30 images and compare quality vs. prompt-only style specification.

4. **Build a RAG pipeline:** Create a knowledge base from 10 technical documents. Implement chunking (256, 512, 1024 token chunks) and compare retrieval quality. Measure answer accuracy with and without RAG for 20 factual questions.

5. **Deploy a text-to-image service** with FastAPI + Stable Diffusion + NSFW filter. Support both sync (wait for result) and async (return task ID, poll for result) endpoints. Add rate limiting and usage logging.

6. **Compare prompt strategies:** Generate the same subject with 5 different prompt structures (no prompt, subject-only, full SCEQ, SCEQ+negative, SCEQ+negative+weights). Rate quality and document findings.

7. **Implement the KV cache** optimization for a small transformer model. Compare generation speed with and without caching for sequences of length 50, 100, 200, and 500 tokens. Plot the speedup curve.

8. **Fine-tune vs RAG comparison:** For a customer support dataset, implement both approaches:
   - Fine-tune a small LLM (Phi-2) on Q&A pairs
   - Build a RAG pipeline over the same data
   - Compare response quality, latency, training cost, and maintenance overhead
