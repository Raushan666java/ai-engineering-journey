# AI Glossary

[Home](index.md) · [About](about.md) · [Catalog](catalog.md) · [Roadmap](roadmap.md) · [Contact](contact.md)

---

What people *say* vs what things actually *mean*.

For the interactive version, visit [aiengineeringfromscratch.com/glossary.html](https://aiengineeringfromscratch.com/glossary.html).

---

## A

**Agent** — A program that uses an LLM to decide what to do next (call a tool, produce text, wait for input) in a loop. Not a chatbot. Not a workflow. A loop.

**Agentic** — Marketing term. Usually means "we put an LLM in a while loop and called it a day."

**Attention** — A weighted sum over values, where the weights come from a compatibility score between a query and a set of keys. That's it. Everything else is a variant of this.

**Autoregressive** — Predicting the next token given all previous tokens. The core generation mechanism behind every LLM.

## B

**Backpropagation** — Computing gradients through a neural network by applying the chain rule from the output back to the input. The reverse pass of training.

**BatchNorm** — Normalizing layer inputs across a batch. Stabilizes training. Controversial in transformers.

**BPE (Byte Pair Encoding)** — A tokenization algorithm that iteratively merges the most frequent pair of consecutive bytes or characters. Used by GPT models.

**Build / Use split** — The pedagogical spine of this curriculum: first implement the algorithm from scratch, then run the same thing through the production library.

## C

**Chain-of-Thought (CoT)** — Asking the model to produce intermediate reasoning steps before the final answer. Improves performance on multi-step problems.

**CLIP** — Contrastive Language-Image Pre-training. Learns joint embeddings of text and images by matching captions to images in a shared space.

**Context Window** — The maximum number of tokens an LLM can process in a single forward pass. Larger is not always better.

## D

**Diffusion** — Adding noise to data then learning to reverse the process. The basis of modern image and video generation.

**DPO (Direct Preference Optimization)** — Aligns an LLM directly from preference pairs without training a separate reward model. Simpler than RLHF.

**Dropout** — Randomly zeroing out neurons during training. A regularization technique.

## E

**Embedding** — A dense vector representation of a token, word, or image in a high-dimensional space where semantic similarity corresponds to vector distance.

**Encoder-Decoder** — Architecture with two transformer stacks: one processes the input, the other generates the output. T5 and BART use this.

## F

**Fine-Tuning** — Taking a pre-trained model and training it further on a specific dataset to adapt it for a particular task.

**Flash Attention** — An IO-aware algorithm for attention that is faster and more memory-efficient than standard attention. Not a new kind of attention.

**FSDP (Fully Sharded Data Parallel)** — A distributed training strategy that shards model parameters, gradients, and optimizer states across GPUs.

## G

**GAN (Generative Adversarial Network)** — Two networks (generator and discriminator) trained adversarially. The generator tries to fool the discriminator.

**Gradient Descent** — Iteratively moving parameters in the direction that reduces the loss. The fundamental optimization algorithm in deep learning.

## H

**Hallucination** — When an LLM generates factually incorrect information with high confidence. Not a bug — a feature of next-token prediction.

**Hugging Face** — Platform hosting models, datasets, and the Transformers library. The GitHub of ML.

## I

**In-Context Learning** — The ability of LLMs to perform tasks based on examples provided in the prompt, without weight updates.

**Instruction Tuning** — Fine-tuning an LLM on instruction-response pairs to make it follow directions more reliably.

## K

**KV Cache** — Caching the Key and Value tensors from previous tokens to avoid recomputing them at each generation step. Essential for efficient inference.

## L

**LLM (Large Language Model)** — A transformer-based model trained on large text corpora to predict the next token. GPT, Claude, LLaMA are LLMs.

**LoRA (Low-Rank Adaptation)** — A parameter-efficient fine-tuning method that trains low-rank matrices instead of full weight updates.

**Loss Function** — A function that measures how far the model's prediction is from the target. Lower is better.

## M

**MCP (Model Context Protocol)** — An open protocol that standardizes how AI applications provide context and tools to LLMs. Think "USB-C for AI."

**MDP (Markov Decision Process)** — The formal framework for sequential decision-making in reinforcement learning: states, actions, transitions, rewards.

**MoE (Mixture of Experts)** — An architecture where different "expert" sub-networks handle different inputs, routed by a gating network.

**Multimodal** — Processing multiple types of data (text, images, audio, video) in a single model.

## N

**NeRF (Neural Radiance Field)** — A neural representation of a 3D scene that can render novel views from arbitrary camera positions.

**NER (Named Entity Recognition)** — Identifying and classifying named entities (people, organizations, locations) in text.

## P

**PPO (Proximal Policy Optimization)** — A reinforcement learning algorithm that clips policy updates to stay within a trust region. Used in RLHF.

**Pre-Training** — The initial training phase where an LLM learns from a large, diverse corpus. Produces a base model.

**Prompt Injection** — When crafted input causes an LLM to ignore its system instructions. The primary security concern for LLM applications.

## Q

**Quantization** — Reducing the precision of model weights (e.g., from 32-bit to 8-bit) to reduce memory and compute requirements.

## R

**RAG (Retrieval-Augmented Generation)** — Adding retrieved context to an LLM prompt before generation. Grounds the model in external knowledge.

**RLHF (Reinforcement Learning from Human Feedback)** — Three-stage alignment process: SFT → reward model training → RL optimization with PPO.

**RoPE (Rotary Position Embedding)** — A position encoding method that rotates query and key vectors based on position. Used in most modern LLMs.

## S

**Self-Attention** — Attention where the query, key, and value all come from the same sequence. Every token attends to every other token.

**SFT (Supervised Fine-Tuning)** — Fine-tuning an LLM on labeled input-output pairs.

**Speculative Decoding** — Using a smaller draft model to propose tokens that a larger target model then verifies in parallel. Faster generation without quality loss.

## T

**Tokenizer** — Converts text into a sequence of integer tokens. The first and last component an LLM touches.

**Transformer** — An architecture based entirely on attention. No recurrence, no convolution. The foundation of modern AI.

## V

**VAE (Variational Autoencoder)** — A generative model that learns a latent distribution and samples from it to generate new data.

**Vision Transformer (ViT)** — A transformer applied directly to image patches. Outperforms CNNs at scale.

## W

**Word2Vec** — A shallow neural network for learning word embeddings from context. Two variants: CBOW and Skip-gram.

## Z

**Zero-Shot** — Performing a task without any task-specific examples in the prompt. The model uses its pre-trained knowledge.
