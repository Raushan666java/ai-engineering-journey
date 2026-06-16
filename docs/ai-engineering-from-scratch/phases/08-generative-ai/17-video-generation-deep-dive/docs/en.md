# Video Generation Deep Dive -- Sora, Genie, Streaming Transformers

> Video generation is image generation with a temporal axe to grind. Every frame must cohere with every other frame, the compute budget explodes by the frame count, and the world has to obey physics for at least a few seconds. The architectures that survive this pressure look nothing like their image-only cousins.

**Type:** Learn
**Languages:** Python
**Prerequisites:** Phase 2 (ML Fundamentals), Phase 8.01 (Generative Models Taxonomy), Phase 8.02 (Diffusion Models), Phase 7.14 (Transformers)
**Time:** ~60 minutes

## Learning Objectives

- Explain how spacetime latent patches unify spatial and temporal compression into a single token sequence
- Trace the evolution from VDM through Imagen Video to modern diffusion transformer video backbones
- Distinguish world models (Genie, GameNGen) from generative video models by their loss objective and architecture
- Implement a streaming video generation loop with causal temporal attention and KV-cache
- Identify the three architectural differences that separate video diffusion from image diffusion
- Compare the trade-offs between patch-based and latent-diffusion approaches to video

## The Problem

Video is a sequence of images, but treating it as independent frames ignores the temporal structure that makes video useful. The joint distribution `p(x_1, x_2, ..., x_T)` over T frames has roughly `T x H x W x C` dimensions, and the conditional dependencies between adjacent frames are what separate a slide show from motion. The naive approach -- run an image model on each frame independently -- produces flickering, temporally incoherent garbage because the model has no mechanism to enforce consistency across time.

The core challenge is threefold. First, the data volume: a 10-second 1080p video at 30 FPS contains 300 frames, or roughly 1.8 billion pixels. Training on this scale demands compression before modeling. Second, temporal coherence: a small pixel change between frames can create visible jitter, but the model must also allow for legitimate scene changes (cuts, transitions, fast motion). Third, physical plausibility: the generated motion must obey approximate physics -- objects should not teleport, deform arbitrarily, or phase through surfaces. The winning architectures solve these by factorising the problem into a compression stage that produces a compact spatiotemporal representation and a generative stage that models the dynamics in that compressed space.

## The Concept

**Spacetime Latent Patches (Sora).** Sora's key insight is that video does not need a specialised temporal architecture. By compressing the raw video into spacetime patches -- 3D blocks spanning `(t x h x w)` -- and treating the resulting sequence with a standard diffusion transformer (DiT), the model learns both spatial appearance and temporal dynamics through the same attention mechanism. A VAE encoder maps the video cube into a latent grid of shape `(T' x H' x W' x C')`, then a patchify layer flattens this into a 1-D token sequence. The transformer's causal or bidirectional attention over these tokens lets the model decide which spacetime relationships matter. A 720p 10-second video produces roughly 160k patches at a typical compression ratio, compared to the ~16k patches of a single image at the same resolution -- a 10x increase that explains the compute gap.

**Video Diffusion Models (VDM, Imagen Video).** VDM (Ho et al. 2022) extends the DDPM framework by adding a factorised 3D U-Net: each block operates on a 5-D tensor `(batch, frames, channels, height, width)` with 3D convolutions and temporal attention layers inserted between the spatial blocks. The noise schedule is applied per-frame but the denoising U-Net sees all frames simultaneously, allowing cross-frame information flow. Imagen Video stacks a cascade of these models: a base video diffusion model at 16 FPS / 64x64, followed by spatial and temporal super-resolution models that upsample to 24 FPS / 1280x768. Each stage is a separate diffusion model trained with its own noise schedule, which makes the pipeline expensive but produces the first photorealistic long-form video.

**World Models (Genie, GameNGen).** World models shift the objective from "generate plausible video" to "simulate the consequences of actions." Genie (Google DeepMind, 2024) is a 2.5B-parameter model trained entirely on unlabelled internet videos that learns a latent action space, a video tokeniser (VQ-VAE over spacetime patches), and a dynamics transformer that predicts the next latent frame given the current frame and a latent action. The loss is a next-token prediction objective over the discrete latent codes, identical in spirit to language modelling. GameNGen (Valevski et al. 2024) pushes this further by simulating DOOM at 20+ FPS using a diffusion model that takes the previous frame and the player's action as conditioning, generating the next frame autoregressively. The architecture is a conditional diffusion model with noise conditioning augmentation to handle error accumulation during the autoregressive loop. Both sacrifice pixel-perfect fidelity for interactive rates.

**Streaming Video Generation (causal attention, temporal consistency).** For infinite or arbitrarily long video, the model cannot attend to all previous frames. Streaming architectures use a causal temporal window: at generation step `t`, the model sees frames `[t-K, t-1]` as context and produces frame `t`. The temporal attention is masked to prevent looking ahead. A KV-cache stores the keys and values of the context window, updated with a sliding window eviction policy. The critical engineering challenge is error accumulation: small prediction errors compound over hundreds of frames, causing the video to drift into unrealistic states. Solutions include noise augmentation (adding a small amount of noise to the context frames during training, as in GameNGen), classifier-free guidance on temporal consistency, and periodic refresher frames generated with a higher guidance scale.

**Architectural differences from image generation.** Three changes dominate. First, the U-Net or transformer backbone must factorise the temporal dimension: 3D convolutions replace 2D, or temporal attention layers are inserted between spatial blocks. Second, the compression stage must handle a 3D spacetime cube rather than a 2D grid -- a 3D VAE or a factorised spatial-then-temporal autoencoder. Third, the training data pipeline must sample video clips of variable length, pad or crop to a fixed number of frames, and apply temporal augmentation (frame dropping, speed changes) that has no analogue in image training. Every other architectural choice -- flow matching vs. DDPM, CFG, guidance rescale, v-prediction -- transfers directly from the image domain.

## Build It

The code for this lesson implements a minimal streaming video generator using a causal transformer with temporal KV-cache. Given a context window of 4 frames, it predicts frame 5, then slides the window and continues.

```python
import math
import torch
import torch.nn as nn
import torch.nn.functional as F

class CausalTemporalAttention(nn.Module):
    """Multi-head causal attention over a sliding temporal window.

    Each frame attends to itself and up to K-1 previous frames.
    Future frames are masked out.
    """
    def __init__(self, d_model: int, n_heads: int, max_window: int):
        super().__init__()
        assert d_model % n_heads == 0
        self.d_head = d_model // n_heads
        self.n_heads = n_heads
        self.window = max_window

        self.qkv = nn.Linear(d_model, 3 * d_model)
        self.out = nn.Linear(d_model, d_model)

    def forward(self, x: torch.Tensor, layer_kv_cache=None):
        # x: (B, T, C), T <= max_window
        B, T, C = x.shape
        qkv = self.qkv(x).reshape(B, T, 3, self.n_heads, self.d_head)
        q, k, v = qkv[:, :, 0], qkv[:, :, 1], qkv[:, :, 2]  # (B, T, H, Dh)

        if layer_kv_cache is not None:
            k_prev, v_prev = layer_kv_cache
            k = torch.cat([k_prev, k], dim=1)
            v = torch.cat([v_prev, v], dim=1)
            # Trim to window size (keep the most recent K frames)
            if k.shape[1] > self.window:
                k = k[:, -self.window:]
                v = v[:, -self.window:]

        # Build causal mask: each position attends to itself + previous
        L = k.shape[1]
        mask = torch.triu(torch.full((T, L), float('-inf')), diagonal=L - T + 1)
        mask = mask.unsqueeze(0).unsqueeze(0)  # (1, 1, T, L)

        attn = F.scaled_dot_product_attention(
            q.transpose(1, 2), k.transpose(1, 2), v.transpose(1, 2),
            attn_mask=mask
        )
        out = attn.transpose(1, 2).reshape(B, T, C)
        return self.out(out), (k.detach(), v.detach())


class StreamingFramePredictor(nn.Module):
    """Minimal autoregressive frame predictor with causal attention."""

    def __init__(self, patch_dim: int, d_model: int,
                 n_heads: int, n_layers: int, max_window: int):
        super().__init__()
        self.proj_in = nn.Linear(patch_dim, d_model)
        self.layers = nn.ModuleList([
            nn.ModuleDict({
                'attn': CausalTemporalAttention(d_model, n_heads, max_window),
                'ff': nn.Sequential(
                    nn.Linear(d_model, d_model * 4),
                    nn.GELU(),
                    nn.Linear(d_model * 4, d_model),
                ),
                'ln1': nn.LayerNorm(d_model),
                'ln2': nn.LayerNorm(d_model),
            })
            for _ in range(n_layers)
        ])
        self.proj_out = nn.Linear(d_model, patch_dim)

    def forward(self, patches: torch.Tensor, kv_caches=None):
        # patches: (B, T, patch_dim)
        x = self.proj_in(patches)
        new_kv = [] if kv_caches is None else None
        for i, layer in enumerate(self.layers):
            cache = kv_caches[i] if kv_caches is not None else None
            attn_out, kv = layer['attn'](layer['ln1'](x), cache)
            x = x + attn_out
            x = x + layer['ff'](layer['ln2'](x))
            if kv_caches is None:
                new_kv.append(kv)
        return self.proj_out(x), new_kv


if __name__ == "__main__":
    torch.manual_seed(42)
    B, T, P, D, H, L, W = 2, 4, 64, 256, 4, 4, 6
    model = StreamingFramePredictor(P, D, H, L, W)

    # Inference with sliding window and KV-cache
    context = torch.randn(B, 4, P)
    pred, kv_cache = model(context)

    for step in range(4):
        next_frame = pred[:, -1:, :]          # take last predicted frame
        context = torch.cat([context[:, 1:, :], next_frame], dim=1)
        pred, kv_cache = model(context, kv_cache)

    print(f"Generated {4 + 4} frames total")
    print(f"KV-cache keys per layer: {kv_cache[0][0].shape}")
    print(f"Output variance across frames: {pred.var().item():.4f}")
```

Run `code/main.py`. It builds the streaming predictor, generates a 4-frame context, then autoregressively extends it by 4 more frames using a sliding window KV-cache. The output prints the generated frame count and the variance across the predicted frames as a rough check that the model produces non-degenerate output.

## Use It

Which video generation approach for which scenario in 2026?

| Scenario | Best approach | Why |
|----------|---------------|-----|
| Short social clips (3-10 s) | Sora-style DiT with flow matching | Best quality-per-frame; fast enough for short clips. |
| Interactive game simulation | World model with latent dynamics (Genie-style) | Sub-100ms per frame; action-conditional. |
| Long-form video (>30 s) | Streaming window + KV-cache with periodic refresher | Avoids O(n^2) attention cost of full temporal attention. |
| Professional video production | Cascade of base diffusion + super-resolution (Imagen Video style) | Control over per-stage resolution; easy to add stylisation. |
| Real-time rendering assist | Lightweight diffusion with noise augmentation (GameNGen-style) | 20+ FPS on consumer hardware. |
| Scientific simulation | Deterministic dynamics transformer trained on physics video | World model with explicit state representation. |

## Ship It

Save as `outputs/skill-video-model-chooser.md`.

The skill takes a target scenario (short clip, game, film, real-time) and outputs a ranked architecture recommendation with: (1) the backbone family (DiT, VDM, world model, streaming), (2) the expected compression ratio and patch count, (3) the frame rate and latency budget, (4) the three most likely failure modes (temporal drift, flicker, mode collapse), and (5) the minimum GPU-hours to train a proof-of-concept.

## Exercises

1. **Easy.** Draw the computational graph for generating a 5-second 720p video using a full spatiotemporal DiT vs. a causal streaming architecture. Count the FLOPs for the attention layers in each case. Where does the streaming architecture save compute?
2. **Medium.** The Sora technical report describes training a spacetime patch VAE. Derive the loss function for a 3D VAE, including the temporal KL divergence term. How does the latent grid shape `(T' x H' x W')` relate to the input video shape?
3. **Hard.** Implement a minimal world model in PyTorch: a VQ-VAE that compresses 4-frame video clips to discrete codes, and an autoregressive transformer that predicts the next code given the previous code and a learned action embedding. Train on 100 clips of a bouncing ball and measure the MSE drift over 20 rollout steps.

## Key Terms

| Term | What it means |
|------|---------------|
| Spacetime patch | A 3D block `(t x h x w)` extracted from the video latent grid; the fundamental token of Sora-style architectures. |
| Temporal attention | An attention layer whose keys and values come from different frames of the same video. |
| World model | A generative model that learns a latent dynamics function `p(z_{t+1} | z_t, a_t)` for action-conditioned simulation. |
| Causal window | The K most recent frames used as context for generating the next frame; older frames are discarded. |
| Noise augmentation | Adding Gaussian noise to conditioning frames during training to improve robustness against autoregressive error accumulation. |
| 3D VAE | A variational autoencoder with 3D convolutions that compresses a video cube into a lower-resolution latent grid. |
| Factorised U-Net | A U-Net where spatial and temporal operations are separate stages rather than a single 5D convolution. |
| Temporal drift | The gradual divergence of generated frames from realistic video over long rollouts due to compounding prediction errors. |

## Further Reading

- [Ho et al. (2022). Video Diffusion Models](https://arxiv.org/abs/2204.03458) -- the VDM paper that extends DDPM to video with factorised 3D U-Nets.
- [Ho et al. (2022). Imagen Video: High Definition Video Generation with Diffusion Models](https://arxiv.org/abs/2210.02303) -- the cascade video diffusion system.
- [Brooks et al. (2024). Video Generation Models as World Simulators](https://openai.com/research/video-generation-models-as-world-simulators) -- Sora technical report.
- [Bruce et al. (2024). Genie: Generative Interactive Environments](https://arxiv.org/abs/2402.15391) -- the 2.5B-parameter world model.
- [Valevski et al. (2024). GameNGen: Diffusion Models as Game Engines](https://arxiv.org/abs/2405.00760) -- DOOM simulation with diffusion.
- [Peebles & Xie (2023). Scalable Diffusion Models with Transformers](https://arxiv.org/abs/2212.09748) -- the DiT backbone that Sora adopted.
- [Blattmann et al. (2023). Align Your Latents: High-Resolution Video Synthesis with Latent Diffusion Models](https://arxiv.org/abs/2304.08818) -- Stable Video Diffusion.
