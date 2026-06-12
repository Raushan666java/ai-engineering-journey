# Chapter 4: Generative AI

## Learning Objectives

After completing this chapter, you will be able to:
- Explain the architecture of GANs, VAEs, and diffusion models
- Generate images with GANs and Stable Diffusion
- Build a text-to-image pipeline with HuggingFace diffusers
- Apply style transfer and image-to-image generation
- Understand prompt engineering principles for generative models
- Evaluate and deploy generative models responsibly

## 4.1 Overview of Generative Models

Generative models learn the probability distribution of training data and sample new data from it. Three major families:

| Model | Strength | Weakness | Best For |
|-------|----------|----------|----------|
| **GAN** | Sharp, realistic images | Mode collapse, unstable training | High-quality image synthesis |
| **VAE** | Stable training, latent space interpolation | Blurry samples | Dimensionality reduction, anomaly detection |
| **Diffusion** | State-of-the-art quality, diverse | Slow sampling (many steps) | Text-to-image, inpainting |
| **Autoregressive (GPT)** | Flexible, multimodal | Sequential generation is slow | Text, code, music |

## 4.2 Generative Adversarial Networks (GANs)

A GAN consists of two networks competing: a Generator creates fake images, a Discriminator tries to distinguish real from fake.

### 4.2.1 GAN Architecture

```python
import torch
import torch.nn as nn

class Generator(nn.Module):
    """Takes random noise (z) and generates an image."""
    def __init__(self, z_dim=100, img_dim=784):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(z_dim, 256),
            nn.ReLU(),
            nn.Linear(256, 512),
            nn.ReLU(),
            nn.Linear(512, img_dim),
            nn.Tanh(),  # Output in [-1, 1]
        )

    def forward(self, z):
        return self.net(z)

class Discriminator(nn.Module):
    """Takes an image and outputs real/fake probability."""
    def __init__(self, img_dim=784):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(img_dim, 512),
            nn.LeakyReLU(0.2),
            nn.Linear(512, 256),
            nn.LeakyReLU(0.2),
            nn.Linear(256, 1),
            nn.Sigmoid(),
        )

    def forward(self, x):
        return self.net(x)
```

### 4.2.2 Training Loop

```python
import torch.optim as optim
from torchvision import datasets, transforms
from torch.utils.data import DataLoader

z_dim = 100
batch_size = 64
epochs = 50

generator = Generator(z_dim)
discriminator = Discriminator()
g_opt = optim.Adam(generator.parameters(), lr=0.0002, betas=(0.5, 0.999))
d_opt = optim.Adam(discriminator.parameters(), lr=0.0002, betas=(0.5, 0.999))
criterion = nn.BCELoss()

transform = transforms.Compose([
    transforms.ToTensor(),
    transforms.Normalize((0.5,), (0.5,)),
])
dataset = datasets.MNIST(root="data", transform=transform, download=True)
loader = DataLoader(dataset, batch_size=batch_size, shuffle=True)

def train_step(real_images):
    batch = real_images.view(real_images.size(0), -1)
    real_labels = torch.ones(batch.size(0), 1)
    fake_labels = torch.zeros(batch.size(0), 1)

    # Train Discriminator: maximize log D(x) + log(1 - D(G(z)))
    d_opt.zero_grad()
    d_real = discriminator(batch)
    d_real_loss = criterion(d_real, real_labels)

    z = torch.randn(batch.size(0), z_dim)
    fake_images = generator(z)
    d_fake = discriminator(fake_images.detach())
    d_fake_loss = criterion(d_fake, fake_labels)

    d_loss = d_real_loss + d_fake_loss
    d_loss.backward()
    d_opt.step()

    # Train Generator: maximize log D(G(z))
    g_opt.zero_grad()
    z = torch.randn(batch.size(0), z_dim)
    fake_images = generator(z)
    d_fake = discriminator(fake_images)
    g_loss = criterion(d_fake, real_labels)

    g_loss.backward()
    g_opt.step()

    return d_loss.item(), g_loss.item()

for epoch in range(epochs):
    for batch_idx, (real_images, _) in enumerate(loader):
        d_loss, g_loss = train_step(real_images)
        if batch_idx % 200 == 0:
            print(f"Epoch {epoch} [{batch_idx}/{len(loader)}] "
                  f"D: {d_loss:.4f} G: {g_loss:.4f}")
```

### 4.2.3 Generating Samples

```python
def generate_samples(generator, n_samples=16):
    z = torch.randn(n_samples, z_dim)
    with torch.no_grad():
        samples = generator(z).view(-1, 1, 28, 28)
    return samples

samples = generate_samples(generator)
print(f"Generated {samples.shape[0]} images of shape {samples.shape[1:]}")
```

## 4.3 Variational Autoencoders (VAEs)

VAEs learn a latent representation of data by encoding inputs to a distribution (mean + variance) and decoding samples from it.

### 4.3.1 VAE Architecture

```python
class VAE(nn.Module):
    def __init__(self, input_dim=784, latent_dim=20):
        super().__init__()
        # Encoder
        self.encoder = nn.Sequential(
            nn.Linear(input_dim, 400),
            nn.ReLU(),
        )
        self.mu_layer = nn.Linear(400, latent_dim)
        self.logvar_layer = nn.Linear(400, latent_dim)

        # Decoder
        self.decoder = nn.Sequential(
            nn.Linear(latent_dim, 400),
            nn.ReLU(),
            nn.Linear(400, input_dim),
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
```

### 4.3.2 VAE Loss

```python
def vae_loss(recon_x, x, mu, logvar):
    # Reconstruction loss (binary cross-entropy)
    recon_loss = nn.functional.binary_cross_entropy(
        recon_x, x, reduction="sum"
    )
    # KL divergence (regularization)
    kl_loss = -0.5 * torch.sum(1 + logvar - mu.pow(2) - logvar.exp())
    return recon_loss + kl_loss
```

### 4.3.3 Latent Space Interpolation

```python
vae = VAE()
vae.load_state_dict(torch.load("vae_mnist.pth"))
vae.eval()

# Encode two real images
img1 = dataset[0][0].view(1, -1)
img2 = dataset[1][0].view(1, -1)

mu1, _ = vae.encode(img1)
mu2, _ = vae.encode(img2)

# Interpolate in latent space
alphas = torch.linspace(0, 1, 10)
interpolated = []
for alpha in alphas:
    z = (1 - alpha) * mu1 + alpha * mu2
    recon = vae.decode(z)
    interpolated.append(recon.view(28, 28))

print("Generated 10 interpolated images between two digits")
```

## 4.4 Diffusion Models

Diffusion models work by gradually adding noise to data (forward process) and learning to reverse it (reverse process).

### 4.4.1 Stable Diffusion with Diffusers

```python
from diffusers import StableDiffusionPipeline, DPMSolverMultistepScheduler
import torch

pipe = StableDiffusionPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5",
    torch_dtype=torch.float16,
)
pipe.scheduler = DPMSolverMultistepScheduler.from_config(pipe.scheduler.config)
pipe = pipe.to("cuda")
```

### 4.4.2 Text-to-Image Generation

```python
prompt = "A serene mountain lake at sunset, digital art, highly detailed"
negative_prompt = "blurry, low quality, distorted, ugly"

image = pipe(
    prompt=prompt,
    negative_prompt=negative_prompt,
    num_inference_steps=25,
    guidance_scale=7.5,
    width=512,
    height=512,
    seed=42,
).images[0]

image.save("output/mountain_lake.png")
```

### 4.4.3 Image-to-Image (Img2Img)

```python
from diffusers import StableDiffusionImg2ImgPipeline
from PIL import Image

pipe = StableDiffusionImg2ImgPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5",
    torch_dtype=torch.float16,
)
pipe = pipe.to("cuda")

init_image = Image.open("input/sketch.png").resize((512, 512))

result = pipe(
    prompt="A professional photograph of this sketch, realistic textures, 4K",
    image=init_image,
    strength=0.75,  # 0 = no change, 1 = completely new
    num_inference_steps=30,
).images[0]

result.save("output/sketch_to_photo.png")
```

### 4.4.4 Inpainting

```python
from diffusers import StableDiffusionInpaintPipeline
from PIL import Image
import numpy as np

pipe = StableDiffusionInpaintPipeline.from_pretrained(
    "runwayml/stable-diffusion-inpainting",
    torch_dtype=torch.float16,
)
pipe = pipe.to("cuda")

img = Image.open("input/photo_with_watermark.png")
mask = Image.open("input/watermark_mask.png")  # White where to inpaint

result = pipe(
    prompt="Seamless texture matching the surrounding area",
    image=img,
    mask_image=mask,
    height=512,
    width=512,
    num_inference_steps=20,
).images[0]

result.save("output/inpainted.png")
```

## 4.5 Prompt Engineering

### 4.5.1 Prompt Structure for Text-to-Image

```python
# Effective prompt formula:
# [Subject] + [Action/Context] + [Environment] + [Style/Medium] + [Quality]

bad_prompt = "a cat"
good_prompt = "A fluffy orange tabby cat sleeping on a windowsill, warm sunlight, "
"photorealistic, 8K, Nikon Z9, f/1.8, shallow depth of field"

# Negative prompt removes unwanted artifacts
negative = "blurry, lowres, bad anatomy, extra limbs, cartoon, text, watermark"
```

### 4.5.2 Weighting and Blending

```python
# Weighted prompts (using Compel or similar)
prompt = "A (castle:1.3) in a (magical forest:1.1), (sunset:0.8) lighting"
# Higher weight = more emphasis on that concept
# Lower weight = less emphasis
```

## 4.6 Evaluation of Generative Models

### 4.6.1 FID Score (Fréchet Inception Distance)

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

## 4.7 Responsible Generative AI

```python
guidelines = {
    "Watermarking": "Add invisible watermarks to all generated images",
    "Content safety": "Apply NSFW filters before returning results",
    "Bias auditing": "Test prompts across demographics to check for bias",
    "Usage logging": "Log all generation requests (prompt, user, timestamp)",
    "Rate limiting": "Prevent abuse with per-user rate limits",
}

for rule, desc in guidelines.items():
    print(f"{rule}: {desc}")
```

## Summary

- GANs use adversarial training (generator vs discriminator) for sharp image synthesis but are hard to train.
- VAEs provide stable training and smooth latent spaces suitable for interpolation and anomaly detection.
- Diffusion models (Stable Diffusion) produce state-of-the-art results with flexible text conditioning.
- Prompt engineering is critical: structure prompts as subject + context + environment + style + quality.
- Evaluate generative models with FID score and always apply safety filters in production.
- The ecosystem (HuggingFace diffusers, LoRA, ControlNet, DreamBooth) enables fine-tuning for custom domains.

## Exercises

1. Train a DCGAN on CIFAR-10 (32×32 color images) for 100 epochs. Generate and save 16 sample images per epoch to visualize training progress.
2. Build a VAE for anomaly detection: train on normal images, encode/decode test images, and flag those with high reconstruction loss.
3. Use Stable Diffusion with a LoRA adapter to generate images in a specific artistic style (e.g., Van Gogh, anime, cyberpunk).
4. Create a prompt generator: given a simple subject (e.g., "robot"), generate 5 effective Stable Diffusion prompts with different styles and environments.
5. Deploy a text-to-image service with FastAPI + Stable Diffusion + NSFW filter. Support both sync (wait for result) and async (return task ID, poll for result) endpoints.
