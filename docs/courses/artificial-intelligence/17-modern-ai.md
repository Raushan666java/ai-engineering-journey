# Chapter 17: Modern Artificial Intelligence

## Learning Objectives

By the conclusion of this chapter, the student will be able to: (1) describe the transformer architecture and its significance; (2) explain foundation models and their emergent abilities; (3) implement in-context learning; (4) understand multimodal model architectures; (5) describe AI agent architectures.

## 17.1 Foundation Models

![Modern Artificial Intelligence](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/artificial-intelligence/ch17-modern-ai.png)

A **foundation model** (Bommasani et al., 2021) is a large-scale neural network trained on broad data that can be adapted to a wide range of downstream tasks. Key characteristics:

- **Scale:** Models with billions to trillions of parameters trained on terabytes of text, images, and other modalities.
- **Self-supervision:** Training objectives that do not require human annotation (language modeling, masked prediction, contrastive learning).
- **Emergence:** Capabilities not explicitly trained that appear at sufficient scale.

## 17.2 The Transformer Architecture

The transformer (Vaswani et al., 2017) replaced recurrent neural networks as the dominant architecture for sequence processing. Its core innovation is the **self-attention mechanism**:

$$\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^\top}{\sqrt{d_k}}\right) V$$

where $Q, K, V$ are query, key, and value matrices derived from the input, and $d_k$ is the key dimension.

Multi-head attention runs $h$ attention operations in parallel:

$$\text{MultiHead}(Q, K, V) = \text{Concat}(\text{head}_1, \ldots, \text{head}_h) W^O$$

**Key properties:** Transformers process all tokens in parallel (unlike RNNs), enabling efficient training. Self-attention captures long-range dependencies without the vanishing gradient problems of recurrent architectures.

## 17.3 Large Language Models (LLMs)

### 17.3.1 Autoregressive Models (GPT Family)

GPT (Generative Pre-trained Transformer) models predict the next token given previous tokens:

$$P(x_t \mid x_{1:t-1}) = \text{Transformer}_{\theta}(x_{1:t-1})_t$$

Training objective: maximize $\sum_t \log P(x_t \mid x_{1:t-1})$ over a large text corpus.

**Scaling laws** (Kaplan et al., 2020) demonstrate that performance follows a power law with model size, data size, and compute. The Chinchilla scaling law (Hoffmann et al., 2022) showed that most models were undertrained and that quadrupling data for a given model size yields better performance.

### 17.3.2 Encoder-Only Models (BERT Family)

BERT (Bidirectional Encoder Representations from Transformers) uses **masked language modeling**: randomly mask tokens in the input and predict them from bidirectional context.

BERT's bidirectional context captures richer representations than autoregressive models but prevents generative use.

### 17.3.3 Encoder-Decoder Models (T5)

T5 (Text-to-Text Transfer Transformer) frames all NLP tasks as text generation: input text to output text, enabling a unified training approach.

## 17.4 Emergent Abilities

As language models scale, they exhibit **emergent abilities** not present in smaller models (Wei et al., 2022):

- **In-context learning:** Performing tasks from examples in the prompt without gradient updates.
- **Instruction following:** Executing novel tasks described in natural language.
- **Step-by-step reasoning:** Breaking complex problems into intermediate steps.
- **World knowledge:** Answering factual questions across diverse domains.

**Emergence** is the sharp transition where a capability appears at a specific model scale, suggesting that qualitative changes in behavior arise from quantitative increases in parameters and data.

## 17.5 In-Context Learning

In-context learning (ICL) uses a prompt containing input-output examples to specify a task:

```
Prompt:
Translate English to French:
English: hello
French: bonjour
English: world
French: monde
English: artificial intelligence
French:
```

The model completes the last example without weight updates. ICL exploits the model's ability to recognize and continue patterns from its training distribution.

**Few-shot prompting:** Provide 2--5 examples.
**Zero-shot prompting:** Provide only a task description.

## 17.6 Chain-of-Thought Reasoning

Chain-of-thought (CoT) prompting (Wei et al., 2022) elicits step-by-step reasoning:

```
Q: Roger has 5 tennis balls. He buys 2 more cans of tennis balls.
Each can has 3 balls. How many tennis balls does he have now?
A: Roger starts with 5 balls. 2 cans × 3 balls each = 6 balls.
5 + 6 = 11. The answer is 11.
```

CoT improves performance on arithmetic, commonsense, and symbolic reasoning tasks, with larger gains for larger models.

## 17.7 Multimodal Models

**CLIP (Contrastive Language-Image Pre-training):** Learns joint text-image embeddings by contrasting matched text-image pairs against mismatched pairs. Enables zero-shot image classification and cross-modal retrieval.

**DALL-E:** Text-conditioned image generation using a transformer trained on text-image pairs. DALL-E 2 uses CLIP embeddings as image priors; DALL-E 3 integrates more tightly with language models.

**Sora:** Video generation model capable of generating photorealistic videos up to 60 seconds from text descriptions.

**Flamingo, LLaVA, GPT-4V:** Models that process both images and text, enabling visual question answering, image captioning, and document understanding.

## 17.8 AI Agents

AI agents extend language models with the ability to perceive, reason, and act in dynamic environments.

**ReAct (Reason + Act):** Interleaves reasoning traces with actions. The model thinks about how to proceed, takes an action (e.g., search, calculator), observes the result, and continues reasoning.

```
Thought: I need to find the current population of Tokyo.
Action: Search[population of Tokyo 2026]
Observation: Tokyo population is approximately 14 million.
Thought: Now I can answer the question.
Answer: The current population of Tokyo is about 14 million.
```

**AutoGPT and BabyAGI:** Autonomous agents that decompose goals into sub-tasks, execute them, and iterate. While promising, they face challenges with reliability and error recovery.

**Function calling:** Modern LLMs can invoke external tools via structured API calls. The model outputs function arguments in JSON format, enabling integration with databases, APIs, and code execution environments.

## 17.9 AI in Industry

Modern AI is deployed across industries:
- **Search:** Semantic search, retrieval-augmented generation (RAG).
- **Code generation:** GitHub Copilot, Codex, Cursor.
- **Content creation:** Text generation, image generation, video production.
- **Scientific research:** Protein folding (AlphaFold), materials discovery, drug design.

## 17.10 Summary

Foundation models, particularly large language models based on the transformer architecture, represent a paradigm shift in AI. Emergent abilities, in-context learning, and multimodal processing open new frontiers. AI agents extend these capabilities to interactive task completion.

## Exercises

### Review Questions

1. Explain how self-attention enables parallel token processing in transformers.
2. Distinguish emergent abilities from capabilities explicitly trained. Provide three examples.
3. Compare in-context learning with fine-tuning. What are the trade-offs?

### Application Problems

4. Implement a simplified single-head self-attention mechanism in Python. Demonstrate how attention weights depend on input similarity.
5. Design a ReAct prompt for a scientific question-answering agent. Include at least three tool-use examples.

### Challenge Problem

6. Construct a few-shot chain-of-thought prompt for a multi-step reasoning task (e.g., calculating compound interest, solving a logic puzzle, or planning a trip with constraints). Analyze the model's reasoning path and identify any errors.
