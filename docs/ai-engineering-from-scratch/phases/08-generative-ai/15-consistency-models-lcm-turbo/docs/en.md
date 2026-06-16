# Consistency Models -- LCM, SDXL Turbo, Rectified Flow

> The dominant cost of diffusion is not the model size -- it is the number of sequential forward passes. Consistency models collapse 50 steps into 1-4 by learning a direct mapping from noise to data along the probability flow ODE. Every fast image generator shipping in 2026 uses one of three recipes: consistency distillation, adversarial distillation, or rectified flow straightening.

**Type:** Learn
**Languages:** Python
**Prerequisites:** Phase 7 (Transformers), Phase 8 Lessons 1-5 (diffusion foundations), Lesson 6 (sampling schedulers)
**Time:** ~50 minutes

## The Problem

Standard diffusion models require 20-1000 sequential denoising steps at inference. Each step is a full forward pass through a U-Net or DiT. At 50 steps with a 3B-parameter model, generation latency is measured in seconds on consumer GPUs and milliseconds become seconds on edge devices. Two problems follow:

1. **Latency kills UX.** A user waiting 4 seconds for one image bounces. Real-time applications (live video, interactive editing, on-device generation) cannot tolerate multi-step sampling.
2. **Energy cost scales linearly with steps.** At inference-as-a-service scale, step count directly drives GPU-hours and cost-per-image.

The naive fix -- "use fewer steps with a better scheduler" (DDIM, DPM-Solver) -- bottoms out at roughly 10 steps before quality collapses. The forward diffusion process does not produce a path that is easy to reverse in one jump. The vector field is curved, so a straight-line shortcut lands off the data manifold.

## The Concept

All three approaches below share the same goal: approximate the same output as 50-step DDIM but in 1-4 steps. They differ in how they find the shortcut.

### 1. Consistency Models (Song et al., 2023)

A consistency model learns a function `f(x_t, t)` that maps any noisy point at timestep `t` directly to the clean data point `x_0`, subject to the **self-consistency property**:

```
f(x_t, t) = f(x_{t'}, t')  for all t, t' in [0, T]
```

If the function is truly consistent, the output does not depend on which noise level you start from. In practice, the model is trained to make adjacent timesteps map to the same clean output.

**Consistency distillation (CD).** Start with a pretrained diffusion model (the "teacher"). For each training step:
1. Sample `x_t` from the teacher's forward process.
2. Run one DDIM step with the teacher to get `x_{t-1}`.
3. Push both `x_t` and `x_{t-1}` through the consistency model.
4. Minimize the difference: `|| f(x_t, t) - f(x_{t-1}, t-1) ||_2^2`.

**Consistency training (CT).** No teacher needed. The model learns consistency directly from the score-matching loss with a skip connection that lets it always predict clean data.

At inference, the model runs in **1 step** (one forward pass) or a few steps (typically 2-4 for improved quality). Sampling is a single Euler step on the learned ODE.

### 2. LCM -- Latent Consistency Models (Luo et al., 2023)

LCM applies consistency distillation to **latent diffusion models** (Stable Diffusion). The key insight is that consistency works in latent space, not pixel space, which keeps the model architecture unchanged.

**LCM-LoRA** makes LCM practical. Instead of fine-tuning the full U-Net (which is expensive and produces a large checkpoint), LCM-LoRA trains a low-rank adapter that can be plugged into any SD 1.5, SDXL, or SD3 checkpoint at inference time. The LoRA weights are ~50 MB, and you load them on top of your base model with:

```python
from diffusers import DiffusionPipeline
import torch

pipe = DiffusionPipeline.from_pretrained(
    "stabilityai/stable-diffusion-xl-base-1.0",
    torch_dtype=torch.float16
)
pipe.load_lora_weights("latent-consistency/lcm-lora-sdxl")
pipe.fuse_lora()
pipe.to("cuda")

prompt = "a mountain lake at dawn, cinematic lighting"
image = pipe(
    prompt=prompt,
    num_inference_steps=4,
    guidance_scale=1.0
).images[0]
```

The `guidance_scale=1.0` (no CFG) is critical. LCM collapses with high CFG because consistency and classifier-free-guidance pull in opposite directions.

### 3. SDXL Turbo -- Adversarial Diffusion Distillation (Sauer et al., 2023)

Instead of enforcing self-consistency with an L2 loss, SDXL Turbo trains a student that must fool a discriminator. The setup is:

1. A teacher diffusion model generates multi-step samples.
2. A student model (same architecture) generates 1-step or 4-step samples.
3. A discriminator tries to tell teacher outputs from student outputs.
4. The student is trained to produce outputs the discriminator cannot distinguish from the teacher.

This is a GAN loss combined with a distillation loss. The discriminator enforces perceptual quality that L2 consistency loss misses -- notably high-frequency detail.

SDXL Turbo also uses **score distillation sampling** (SDS, from DreamFusion): the teacher provides gradient directions for the student's output, not just target pixels.

```python
from diffusers import StableDiffusionXLPipeline

pipe = StableDiffusionXLPipeline.from_pretrained(
    "stabilityai/sdxl-turbo",
    torch_dtype=torch.float16
)
pipe.to("cuda")

image = pipe(
    prompt="a bustling cyberpunk street market at night",
    num_inference_steps=1,
    guidance_scale=0.0
).images[0]
```

SDXL Turbo produces reasonable images in **one step** and very good images in **four steps**. The trade-off is that it is a fixed, full-weight model -- you cannot swap LoRAs or ControlNets as freely as with the base SDXL.

### 4. Rectified Flow (Liu et al., 2022)

Rectified flow does not distill an existing model. Instead, it changes the **training objective** so the learned ODE trajectory is naturally straight.

Standard diffusion adds noise via a curved path (VP SDE). A curved path means the reverse ODE must curve back, which forces many steps. Rectified flow redefines the forward process as a simple linear interpolation:

```
x_t = (1 - t) * x_0 + t * epsilon    for t in [0, 1]
```

This is the probability flow ODE with a **straight path**. The model learns a vector field `v(x_t, t)` that points directly toward `x_0`. Since the path is straight, a single Euler step lands close to the target.

**Rectification** is a reflow procedure:
1. Train `v_theta` on linear interpolation pairs.
2. Generate synthetic trajectories from `v_theta`.
3. Re-pair `(x_0, x_1)` along the generated trajectories.
4. Train a new `v_theta` on those straighter pairs.
5. Repeat. Each rectification round straightens the path further.

Stable Diffusion 3 and Flux.1 both use rectified flow backbones. They are not distilled -- they achieve 4-step quality from the training procedure itself. SD3 Turbo adds distillation on top of the rectified flow backbone for 1-step generation.

```python
from diffusers import StableDiffusion3Pipeline

pipe = StableDiffusion3Pipeline.from_pretrained(
    "stabilityai/stable-diffusion-3.5-medium",
    torch_dtype=torch.float16
)
pipe.to("cuda")

image = pipe(
    prompt="a watercolor painting of a koi pond",
    num_inference_steps=4,
    guidance_scale=3.5
).images[0]
```

### Comparison

| Method | Steps needed | Training cost | LoRA-friendly | Base architecture |
|--------|-------------|---------------|---------------|-------------------|
| DDIM | 20-50 | None (scheduler) | Yes | Any diffusion model |
| LCM | 1-4 | Distill (1 GPU-day) | Yes (LCM-LoRA) | LDM (SD 1.5, SDXL, SD3) |
| SDXL Turbo | 1-4 | Distill + adversarial | No (full weights) | SDXL |
| Rectified flow | 4-10 | Reflow (moderate) | Yes | Any (SD3, Flux) |
| SD3 Turbo | 1-4 | Reflow + distill | No | Rectified flow DiT |

## The Build

The code below compares four sampling strategies on the same SDXL backbone. Run `code/main.py` to see the latency and quality difference.

```python
import torch
from diffusers import StableDiffusionXLPipeline, DPMSolverMultistepScheduler
from PIL import Image

prompt = "a gothic cathedral interior, volumetric fog, dramatic light beams"

# --- 1. Standard 30-step SDXL with DPM++ scheduler ---
pipe = StableDiffusionXLPipeline.from_pretrained(
    "stabilityai/stable-diffusion-xl-base-1.0",
    torch_dtype=torch.float16
)
pipe.scheduler = DPMSolverMultistepScheduler.from_config(
    pipe.scheduler.config, use_karras_sigmas=True
)
pipe.to("cuda")

image = pipe(prompt, num_inference_steps=30, guidance_scale=7.5).images[0]
image.save("outputs/sdxl_30step.png")

# --- 2. LCM-LoRA on the same base, 4 steps ---
pipe.load_lora_weights("latent-consistency/lcm-lora-sdxl")
pipe.fuse_lora()

image = pipe(prompt, num_inference_steps=4, guidance_scale=1.0).images[0]
image.save("outputs/sdxl_lcm_4step.png")

# --- 3. SDXL Turbo, 4 steps ---
turbo = StableDiffusionXLPipeline.from_pretrained(
    "stabilityai/sdxl-turbo",
    torch_dtype=torch.float16
)
turbo.to("cuda")

image = turbo(prompt, num_inference_steps=4, guidance_scale=0.0).images[0]
image.save("outputs/sdxl_turbo_4step.png")

# --- 4. SDXL Turbo, 1 step ---
image = turbo(prompt, num_inference_steps=1, guidance_scale=0.0).images[0]
image.save("outputs/sdxl_turbo_1step.png")
```

The observations from running this comparison:

- **30-step DPM++** produces the highest detail with the richest lighting, but takes ~6 seconds on an RTX 4090.
- **LCM-LoRA (4-step)** is ~7x faster and produces a coherent image, but textures are softer and fine detail is reduced.
- **SDXL Turbo (4-step)** matches LCM quality with a different style -- sharper edges, slightly noisier background.
- **SDXL Turbo (1-step)** produces a recognizable but blurry image. Useful only for previews or real-time feedback loops.

## Exercises

1. **Easy.** Load the SDXL base model and apply LCM-LoRA without setting `guidance_scale=1.0`. Try CFG values 2, 5, and 7.5. Describe what happens to the output.
2. **Medium.** Replace the LCM-LoRA adapter with a custom LoRA (e.g., a style LoRA from CivitAI). Does the LCM adapter compose correctly? Test with `num_inference_steps=4` and `guidance_scale=1.0`.
3. **Hard.** Implement a minimal consistency training loop on a toy 2D dataset (mixture of Gaussians). Fit a small MLP `f(x_t, t)` with the L2 self-consistency loss and visualize the learned trajectories against ground-truth DDIM paths.
4. **Explore.** Time the four generation methods above across batch sizes 1, 2, 4, and 8. Plot throughput (images/second) vs. quality (subjective ranking or CLIP score). Where does LCM-LoRA win on throughput, and where does SDXL Turbo pull ahead?

## Key Terms

| Term | Meaning |
|------|---------|
| Consistency model | A model that maps any noisy point directly to the clean data distribution. |
| Self-consistency | The property that `f(x_t, t)` returns the same output for all timesteps `t`. |
| LCM-LoRA | A low-rank adapter that turns any SD checkpoint into a 4-step consistency model. |
| Adversarial distillation | Training a student to fool a discriminator that compares against teacher outputs. |
| Rectified flow | A training procedure that learns a straight ODE path by linear interpolation and iterative reflow. |
| Reflow | Re-pairing (noise, data) pairs along generated trajectories to straighten the flow. |
| Guidance scale | The CFG weight; consistency models require `guidance_scale=1.0` (no CFG). |
| Score distillation (SDS) | Using a teacher diffusion model to provide gradient directions to a student generator. |

## Further Reading

- [Song et al. (2023). Consistency Models](https://arxiv.org/abs/2303.01469) -- the original consistency model paper.
- [Luo et al. (2023). Latent Consistency Models](https://arxiv.org/abs/2310.04378) -- LCM applied to latent diffusion.
- [Sauer et al. (2023). Adversarial Diffusion Distillation](https://arxiv.org/abs/2311.17042) -- SDXL Turbo.
- [Liu et al. (2022). Flow Straight and Fast: Rectified Flow](https://arxiv.org/abs/2202.00279) -- rectified flow foundation.
- [Esser et al. (2024). Scaling Rectified Flow Transformers for High-Resolution Image Synthesis](https://arxiv.org/abs/2403.03206) -- SD3.
- [Meng et al. (2024). LCM-LoRA: A Universal Stable-Diffusion Acceleration Module](https://arxiv.org/abs/2311.05556) -- LCM-LoRA details.
