---
id: index
slug: /ai-engineering-placement
title: "14 — Fine-Tuning & PEFT"
sidebar_label: "14 — Fine-Tuning & PEFT"
sidebar_position: 181
---
# 14 — Fine-Tuning & PEFT

## Overview

Master parameter-efficient fine-tuning techniques including LoRA, QLoRA, and instruction tuning. Covers when to fine-tune, DPO for preference alignment, and evaluating fine-tuned models.

## Sub-Chapters

| # | Sub-Chapter | Topics | Q&A |
|---|-------------|--------|-----|
| 01 | [When to Fine-Tune](01-when-to-fine-tune.md) | FT vs RAG vs prompting, cost-benefit, data requirements | 10 |
| 02 | [Full Fine-Tuning](02-full-fine-tuning.md) | supervised FT, training loop, loss curves, overfitting | 10 |
| 03 | [LoRA Theory](03-lora-theory.md) | low-rank adaptation, rank selection, weight matrices | 10 |
| 04 | [LoRA Implementation](04-lora-implementation.md) | PEFT library, target modules, alpha, scaling | 10 |
| 05 | [QLoRA & Quantization](05-qlora-and-quantization.md) | 4-bit NF4, double quantization, bitsandbytes | 10 |
| 06 | [Instruction Tuning](06-instruction-tuning.md) | dataset formats, chat templates, multi-turn, system prompts | 10 |
| 07 | [DPO & Preference Tuning](07-dpo-and-preference-tuning.md) | RLHF, DPO loss, preference datasets, reward models | 10 |
| 08 | [Evaluating Fine-Tuned Models](08-evaluating-fine-tuned-models.md) | benchmarks, perplexity, human eval, task accuracy | 10 |

## Learning Path

1. Read sub-chapters in order
2. For each: read theory → run code → review Q&A → take quiz → do exercises
3. Mark complete when all sub-chapters done

## Prerequisites

[AI Agents & LangGraph](../13-ai-agents-langgraph/index.md). Experience training deep learning models is strongly recommended.

> **Start**: [01 — When to Fine-Tune →](01-when-to-fine-tune.md)
