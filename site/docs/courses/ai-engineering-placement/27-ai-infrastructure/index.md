---
id: index
slug: /ai-engineering-placement
title: "27 — AI Infrastructure & Optimization"
sidebar_label: "27 — AI Infrastructure & Optimization"
sidebar_position: 304
---
# 27 — AI Infrastructure & Optimization

## Overview

Master the hardware and software stack that powers modern AI. Covers GPU architecture, CUDA programming, model compilation (TensorRT, ONNX), inference serving (vLLM, SGLang), model optimization (pruning, distillation, Flash Attention, KV Cache), speculative decoding, and distributed inference.

## Sub-Chapters

| # | Sub-Chapter | Topics | Q&A |
|---|-------------|--------|-----|
| 01 | [GPU Architecture](01-gpu-architecture.md) | NVIDIA GPU gen, CUDA cores, Tensor Cores, memory hierarchy, HBM, NVLink, PCIe | 10 |
| 02 | [CUDA Programming](02-cuda-programming.md) | kernel launch, memory mgmt, grid/block/thread, CUDA streams, libraries (cuBLAS, cuDNN) | 10 |
| 03 | [Model Compilation](03-model-compilation.md) | TensorRT, ONNX, torch.compile, graph optimization, precision (FP8/FP16/INT4) | 10 |
| 04 | [AI Inference Serving](04-inference-serving.md) | vLLM, SGLang, TGI, Triton, continuous batching, PagedAttention, prefix caching | 10 |
| 05 | [Distributed Inference](05-distributed-inference.md) | tensor parallelism, pipeline parallelism, FSDP, DeepSpeed, NCCL, multi-node | 10 |
| 06 | [Model Pruning](06-model-pruning.md) | unstructured vs structured, magnitude pruning, SparseGPT, Wanda, pruning at init | 10 |
| 07 | [Knowledge Distillation](07-knowledge-distillation.md) | logit distillation, feature distillation, on-policy, off-policy, sequence-level, TinyLLM | 10 |
| 08 | [Attention & KV Cache Optimization](08-attention-kv-cache.md) | Flash Attention 1/2/3, sparse attention, GQA, MQA, PagedAttention, KV cache quantization | 10 |
| 09 | [Speculative Decoding](09-speculative-decoding.md) | draft models, Medusa, self-speculation, Eagle, parallel decoding, acceptance rate | 10 |

## Learning Path

1. Read sub-chapters in order
2. For each: read theory → run code → review Q&A → take quiz → do exercises
3. Mark complete when all sub-chapters done

## Prerequisites

[Deep Learning](../09-deep-learning-pytorch/index.md). Understanding of transformer architecture and model training is required.

> **Start**: [01 — GPU Architecture →](01-gpu-architecture.md)
