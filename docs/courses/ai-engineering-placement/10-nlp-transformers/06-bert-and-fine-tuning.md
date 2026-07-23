<!-- Clear Language: Keep sentences under 50 words -->
﻿# BERT & Fine-Tuning — Masked LM, NSP, GLUE, Model Variants

## Learning Objectives

| LO# | Description |
|-----|-------------|
| LO1 | Explain BERT's pre-training objectives: masked language modeling (MLM) and next sentence prediction (NSP) |
| LO2 | Implement the MLM training loop with random masking strategy |
| LO3 | Fine-tune BERT for text classification, named entity recognition, and question answering |
| LO4 | Evaluate models using the GLUE benchmark and understand each task |
| LO5 | Compare BERT variants: RoBERTa, ALBERT, DistilBERT, SpanBERT |
| LO6 | Apply knowledge distillation to compress transformer models |

## Introduction

Natural language processing is how machines understand human text. Transformers revolutionized NLP and enabled modern LLMs. This module covers tokenization, attention, BERT, and the Hugging Face ecosystem.




## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

## Theory

Understanding bert and fine tuning is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how bert and fine tuning works in practice.



## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 6.1 | Pre-Training Overview | Large-scale unsupervised pre-training on BookCorpus + Wikipedia |
| 6.2 | Masked Language Modeling | 15% masking, 80/10/10 strategy, bidirectional context |
| 6.3 | Next Sentence Prediction | 50/50 positive/negative pairs, relationship understanding |
| 6.4 | Fine-Tuning Tasks | Classification, NER, QA with task-specific heads |
| 6.5 | GLUE Benchmark | Multi-task evaluation (9 tasks), leaderboard, metrics |
| 6.6 | BERT Variants | RoBERTa, ALBERT, DistilBERT, SpanBERT |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Pre-training Corpus] --> B[MLM + NSP]
    B --> C[Pre-trained BERT]
    C --> D{Fine-tuning Task}
    D -->|Classification| E[CLS Token + Classifier]
    D -->|NER| F[Token-level Classifier]
    D -->|QA| G[Span Prediction Head]
    D -->|GLUE| H[Task-Specific Head]
    E --> I[Trained Model]
    F --> I
    G --> I
    H --> I
```text

## 6.1 Pre-Training Overview

BERT (Bidirectional Encoder Representations from Transformers) is pre-trained on 3.3 billion words (BooksCorpus 800M + English Wikipedia 2.5B). Two objectives are optimized jointly: MLM and NSP.

```typescript
class BERTPreTrainingConfig {
  dModel = 768;
  numLayers = 12;
  numHeads = 12;
  dff = 3072;
  vocabSize = 30522;
  maxSeqLen = 512;
  dropout = 0.1;
  maskProb = 0.15;
  maxPredictions = 20; // max masked tokens per sequence
}

class BERTPretrainingInput {
  inputIds: number[];
  attentionMask: number[];
  tokenTypeIds: number[];
  maskedLmPositions: number[];   // positions of masked tokens
  maskedLmIds: number[];         // original token IDs at masked positions
  nextSentenceLabel: number;     // 0 = not next, 1 = is next
}
```text

Pre-training requires enormous compute: BERT-base took 4 days on 16 TPUs. The masked language model allows BERT to learn bidirectional representations, unlike GPT's left-to-right approach.

---

## 6.2 Masked Language Modeling

MLM randomly masks 15% of tokens in each sequence. The model predicts the original token at each masked position using the final hidden states of the masked positions.

```typescript
class MLMHead {
  private dModel: number;
  private vocabSize: number;
  private dense: number[][];  // (dModel x dModel)
  private layerNorm: LayerNorm;
  private outputWeights: number[][]; // (vocabSize x dModel)
  private outputBias: number[];

  constructor(dModel: number, vocabSize: number) {
    this.dModel = dModel;
    this.vocabSize = vocabSize;
    this.dense = Array.from({ length: dModel }, () =>
      Array.from({ length: dModel }, () => (Math.random() - 0.5) * 0.1)
    );
    this.layerNorm = new LayerNorm(dModel);
    const scale = Math.sqrt(2 / (dModel + vocabSize));
    this.outputWeights = Array.from({ length: vocabSize }, () =>
      Array.from({ length: dModel }, () => (Math.random() * 2 - 1) * scale)
    );
    this.outputBias = new Array(vocabSize).fill(0);
  }

  forward(hiddenStates: number[][], maskedPositions: number[]): number[][] {
    const maskedHiddens = maskedPositions.map((pos) => hiddenStates[pos]);

    // Dense + GELU
    const denseOut = maskedHiddens.map((h) => {
      const out = this.dense.map((row) =>
        row.reduce((s, w, j) => s + w * h[j], 0)
      );
      return out.map((v) => this.gelu(v));
    });

    // Layer norm
    const normOut = this.layerNorm.forward(denseOut);

    // Project to vocabulary (using tied embeddings or separate weights)
    const logits = normOut.map((h) =>
      this.outputWeights.map((row) => {
        let dot = 0;
        for (let j = 0; j < this.dModel; j++) dot += row[j] * h[j];
        return dot;
      }).map((v, i) => v + this.outputBias[i])
    );

    return logits;
  }

  private gelu(x: number): number {
    return 0.5 * x * (1 + Math.tanh(Math.sqrt(2 / Math.PI) * (x + 0.044715 * Math.pow(x, 3))));
  }
}

class MaskingGenerator {
  private maskProb: number;
  private maxPredictions: number;
  private maskTokenId: number;
  private vocabSize: number;
  private specialTokenIds: Set<number>;

  constructor(
    maskProb: number,
    maxPredictions: number,
    maskTokenId: number,
    vocabSize: number,
    specialTokenIds: Set<number>
  ) {
    this.maskProb = maskProb;
    this.maxPredictions = maxPredictions;
    this.maskTokenId = maskTokenId;
    this.vocabSize = vocabSize;
    this.specialTokenIds = specialTokenIds;
  }

  maskTokens(
    inputIds: number[]
  ): { inputIds: number[]; lmLabels: number[]; maskedPositions: number[] } {
    const maskedInput = [...inputIds];
    const lmLabels = new Array(inputIds.length).fill(-100); // -100 = ignore in loss
    const maskedPositions: number[] = [];

    // Select tokens to mask (excluding special tokens)
    const candidates = inputIds
      .map((id, idx) => ({ id, idx }))
      .filter(({ id, idx }) => !this.specialTokenIds.has(id) && idx > 0 && idx < inputIds.length - 1);

    // Shuffle and select up to maxPredictions
    const shuffled = candidates.sort(() => Math.random() - 0.5);
    const numMasks = Math.min(
      Math.max(1, Math.floor(inputIds.length * this.maskProb)),
      this.maxPredictions,
      candidates.length
    );

    const selected = shuffled.slice(0, numMasks);

    for (const { id, idx } of selected) {
      lmLabels[idx] = id; // store original token
      maskedPositions.push(idx);
      const rand = Math.random();
      if (rand < 0.8) {
        // 80%: replace with [MASK]
        maskedInput[idx] = this.maskTokenId;
      } else if (rand < 0.9) {
        // 10%: replace with random token
        maskedInput[idx] = Math.floor(Math.random() * this.vocabSize);
      }
      // 10%: keep unchanged (helps model handle no-mask at fine-tuning)
    }

    return { inputIds: maskedInput, lmLabels, maskedPositions };
  }
}
```text

The 80/10/10 strategy (80% mask, 10% random, 10% unchanged) prevents a mismatch between pre-training (where [MASK] tokens appear) and fine-tuning (where they never appear). Without this, BERT would not learn to handle unmasked input during fine-tuning.

---

## 6.3 Next Sentence Prediction

NSP trains BERT to understand sentence relationships. For each training example, two sentences A and B are chosen: 50% of the time B follows A (IsNext label=1), 50% of the time B is random (NotNext label=0).

```typescript
class NSPHead {
  private dModel: number;
  private dense: number[][];
  private bias: number[];

  constructor(dModel: number) {
    this.dModel = dModel;
    this.dense = Array.from({ length: 2 }, () =>
      Array.from({ length: dModel }, () => (Math.random() - 0.5) * 0.1)
    );
    this.bias = new Array(2).fill(0);
  }

  forward(clsTokenHidden: number[]): number[] {
    const logits = this.dense.map((row, i) => {
      let sum = this.bias[i];
      for (let j = 0; j < this.dModel; j++) sum += row[j] * clsTokenHidden[j];
      return sum;
    });
    // Softmax
    const max = Math.max(...logits);
    const exp = logits.map((l) => Math.exp(l - max));
    const sum = exp.reduce((a, b) => a + b, 0);
    return exp.map((e) => e / sum);
  }
}

class NSPDataGenerator {
  generatePair(
    sentences: string[],
    tokenizer: { encode: (s: string) => number[] }
  ): { inputIds: number[]; tokenTypeIds: number[]; label: number } {
    const idx = Math.floor(Math.random() * sentences.length);
    const sentenceA = sentences[idx];

    // 50% next, 50% random
    let sentenceB: string;
    let label: number;
    if (Math.random() < 0.5 && idx < sentences.length - 1) {
      sentenceB = sentences[idx + 1];
      label = 1; // IsNext
    } else {
      const randomIdx = Math.floor(Math.random() * sentences.length);
      sentenceB = sentences[randomIdx];
      label = 0; // NotNext
    }

    const tokensA = tokenizer.encode(sentenceA);
    const tokensB = tokenizer.encode(sentenceB);

    // [CLS] tokensA [SEP] tokensB [SEP]
    const inputIds = [101, ...tokensA, 102, ...tokensB, 102]; // 101=[CLS], 102=[SEP]
    const tokenTypeIds = [
      0, ...tokensA.map(() => 0), 0,
      1, ...tokensB.map(() => 1), 1,
    ];

    return { inputIds, tokenTypeIds, label };
  }
}
```text

Later research (RoBERTa) showed that NSP is not essential: removing NSP and using longer training with larger batches and more data improved performance. However, NSP remains useful for tasks requiring sentence pair understanding (NLI, QA).

---

## 6.4 Fine-Tuning Tasks

Fine-tuning adds a small task-specific head on top of the pre-trained BERT and updates all parameters end-to-end.

```typescript
class BERTForClassification {
  private bert: EncoderOnlyTransformer; // pre-trained BERT
  private classifier: number[][];  // (numClasses x dModel)
  private bias: number[];

  constructor(
    bert: EncoderOnlyTransformer,
    numClasses: number
  ) {
    this.bert = bert;
    this.classifier = Array.from({ length: numClasses }, () =>
      Array.from({ length: bert['dModel'] }, () => (Math.random() - 0.5) * 0.01)
    );
    this.bias = new Array(numClasses).fill(0);
  }

  forward(inputIds: number[][]): number[][] {
    const hiddenStates = this.bert.forward(inputIds);
    const clsToken = hiddenStates.map((seq) => seq[0]); // [CLS] token

    return clsToken.map((h) => {
      const logits = this.classifier.map((row, i) => {
        let sum = this.bias[i];
        for (let j = 0; j < row.length; j++) sum += row[j] * h[j];
        return sum;
      });
      const max = Math.max(...logits);
      const exp = logits.map((l) => Math.exp(l - max));
      const sum = exp.reduce((a, b) => a + b, 0);
      return exp.map((e) => e / sum);
    });
  }
}

class BERTForTokenClassification {
  private bert: EncoderOnlyTransformer;
  private classifier: number[][];  // (numLabels x dModel)
  private bias: number[];

  constructor(bert: EncoderOnlyTransformer, numLabels: number) {
    this.bert = bert;
    this.classifier = Array.from({ length: numLabels }, () =>
      Array.from({ length: bert['dModel'] }, () => (Math.random() - 0.5) * 0.01)
    );
    this.bias = new Array(numLabels).fill(0);
  }

  forward(inputIds: number[][]): number[][][] {
    const hiddenStates = this.bert.forward(inputIds);
    // Apply classifier to each token
    return hiddenStates.map((seq) =>
      seq.map((h) => {
        const logits = this.classifier.map((row, i) => {
          let sum = this.bias[i];
          for (let j = 0; j < row.length; j++) sum += row[j] * h[j];
          return sum;
        });
        const max = Math.max(...logits);
        const exp = logits.map((l) => Math.exp(l - max));
        const sum = exp.reduce((a, b) => a + b, 0);
        return exp.map((e) => e / sum);
      })
    );
  }
}

class BERTForQuestionAnswering {
  private bert: EncoderOnlyTransformer;
  private startProjection: number[];  // (dModel)
  private endProjection: number[];    // (dModel)

  constructor(bert: EncoderOnlyTransformer) {
    this.bert = bert;
    this.startProjection = Array.from({ length: bert['dModel'] }, () =>
      (Math.random() - 0.5) * 0.01
    );
    this.endProjection = Array.from({ length: bert['dModel'] }, () =>
      (Math.random() - 0.5) * 0.01
    );
  }

  forward(inputIds: number[][]): {
    startLogits: number[][];
    endLogits: number[][];
  } {
    const hiddenStates = this.bert.forward(inputIds);

    const startLogits = hiddenStates.map((seq) =>
      seq.map((h) => h.reduce((s, v, i) => s + v * this.startProjection[i], 0))
    );

    const endLogits = hiddenStates.map((seq) =>
      seq.map((h) => h.reduce((s, v, i) => s + v * this.endProjection[i], 0))
    );

    return { startLogits, endLogits };
  }

  predict(
    inputIds: number[][],
    maxAnswerLen = 30
  ): Array<{ start: number; end: number; score: number }> {
    const { startLogits, endLogits } = this.forward(inputIds);
    const results: Array<{ start: number; end: number; score: number }> = [];

    for (let b = 0; b < startLogits.length; b++) {
      let bestScore = -Infinity;
      let bestStart = 0;
      let bestEnd = 0;

      for (let i = 0; i < startLogits[b].length; i++) {
        for (let j = i; j < Math.min(i + maxAnswerLen, endLogits[b].length); j++) {
          const score = startLogits[b][i] + endLogits[b][j];
          if (score > bestScore) {
            bestScore = score;
            bestStart = i;
            bestEnd = j;
          }
        }
      }
      results.push({ start: bestStart, end: bestEnd, score: bestScore });
    }
    return results;
  }
}
```text

**Fine-tuning learning rates**: 2e-5 to 5e-5 with linear warmup (first 10% of steps) and linear decay. BERT fine-tuning typically requires 2-10 epochs. The learning rate is much smaller than pre-training (5e-4) because pre-trained weights are already near-optimal.

---

## 6.5 GLUE Benchmark

The General Language Understanding Evaluation (GLUE) benchmark consists of 9 tasks covering diverse NLP phenomena.

```typescript
interface GLUETask {
  name: string;
  type: "classification" | "regression" | "similarity";
  numLabels: number;
  metric: string;
  description: string;
}

const GLUE_TASKS: GLUETask[] = [
  { name: "CoLA", type: "classification", numLabels: 2, metric: "MCC",
    description: "Acceptability: is this sentence grammatically correct?" },
  { name: "SST-2", type: "classification", numLabels: 2, metric: "Accuracy",
    description: "Sentiment: positive or negative movie review?" },
  { name: "MRPC", type: "classification", numLabels: 2, metric: "F1/Accuracy",
    description: "Paraphrase: are these two sentences semantically equivalent?" },
  { name: "STS-B", type: "regression", numLabels: 1, metric: "Pearson/Spearman",
    description: "Similarity: rate similarity from 0 to 5." },
  { name: "QQP", type: "classification", numLabels: 2, metric: "F1/Accuracy",
    description: "Quora Question Pairs: are questions duplicates?" },
  { name: "MNLI", type: "classification", numLabels: 3, metric: "Accuracy",
    description: "NLI: entailment, contradiction, or neutral?" },
  { name: "QNLI", type: "classification", numLabels: 2, metric: "Accuracy",
    description: "QA/NLI: does the sentence contain the answer?" },
  { name: "RTE", type: "classification", numLabels: 2, metric: "Accuracy",
    description: "Recognizing Textual Entailment." },
  { name: "WNLI", type: "classification", numLabels: 2, metric: "Accuracy",
    description: "Winograd NLI: pronoun resolution." },
];

class GLUEEvaluator {
  evaluate(
    model: BERTForClassification,
    taskName: string,
    inputs: number[][],
    labels: number[]
  ): number {
    const predictions = model.forward(inputs);
    const predLabels = predictions.map(
      (probs) => probs.indexOf(Math.max(...probs))
    );

    switch (taskName) {
      case "CoLA": {
        // Matthews Correlation Coefficient
        const tp = predLabels.filter((p, i) => p === 1 && labels[i] === 1).length;
        const tn = predLabels.filter((p, i) => p === 0 && labels[i] === 0).length;
        const fp = predLabels.filter((p, i) => p === 1 && labels[i] === 0).length;
        const fn = predLabels.filter((p, i) => p === 0 && labels[i] === 1).length;
        const denom = Math.sqrt((tp + fp) * (tp + fn) * (tn + fp) * (tn + fn));
        return denom === 0 ? 0 : (tp * tn - fp * fn) / denom;
      }
      case "SST-2":
      case "QNLI":
      case "RTE": {
        return predLabels.filter((p, i) => p === labels[i]).length / labels.length;
      }
      case "MRPC":
      case "QQP": {
        const correct = predLabels.filter((p, i) => p === labels[i]).length;
        return correct / labels.length;
      }
      default:
        return 0;
    }
  }
}
```text

GLUE scores improved dramatically with BERT: BERT-base achieved 80.5 average (compared to 72.8 for ELMo + BiLSTM). SuperGLUE (more difficult tasks) replaced GLUE as the standard benchmark.

---

## 6.6 BERT Variants

Several important variants improve upon BERT in different ways.

```typescript
// RoBERTa: Robustly Optimized BERT
// Key changes vs BERT:
// - Removed NSP loss
// - Dynamic masking (mask differently each epoch)
// - Larger batch sizes (8K vs 256)
// - More data (160GB vs 16GB)
// - Longer training (500K vs 100K steps)
// Result: matches or exceeds BERT on all GLUE tasks
class RoBERTaConfig extends BERTPreTrainingConfig {
  dynamicMasking = true;
  removeNSP = true;
  batchSize = 8000;
  trainingSteps = 500000;
}

// ALBERT: A Lite BERT
// Key changes:
// - Factorized embedding: embedding parameters = V * E + E * H (instead of V * H)
//   where E=128, H=768. For BERT vocab 30K: 30K*128 + 128*768 = 3.9M + 98K ≈ 4M
//   vs 30K*768 = 23M. Saves ~18M parameters.
// - Cross-layer parameter sharing: all 12 layers share same attention + FFN weights
//   This saves ~90% of layer parameters.
// - Inter-sentence coherence loss (SOP) instead of NSP
// ALBERT-xxlarge has 12M parameters but 24 layers (shared), matching BERT-large performance
class ALBERTConfig extends BERTPreTrainingConfig {
  embeddingSize = 128; // factorized embedding
  sharedParameters = true; // cross-layer sharing
  lossType: "SOP" = "SOP"; // sentence order prediction
}

// DistilBERT: Distilled BERT
// Uses knowledge distillation to train a smaller (40% smaller, 60% faster) model
// - Student: 6 layers (vs BERT-base 12)
// - Loss: distillation loss (soft targets) + MLM loss + cosine embedding loss
// Retains 97% of BERT performance on GLUE
class DistillationTrainer {
  private teacher: EncoderOnlyTransformer; // BERT-base
  private student: EncoderOnlyTransformer; // DistilBERT (6 layers)
  private temperature: number;
  private alpha: number; // distillation weight

  constructor(
    teacher: EncoderOnlyTransformer,
    student: EncoderOnlyTransformer,
    temperature = 2.0,
    alpha = 0.5
  ) {
    this.teacher = teacher;
    this.student = student;
    this.temperature = temperature;
    this.alpha = alpha;
  }

  trainStep(
    inputIds: number[][],
    attentionMask: number[][]
  ): number {
    // Teacher forward (no gradients)
    const teacherOut = this.teacher.forward(inputIds);
    const teacherLogits = teacherOut.map((seq) =>
      seq.map((h) => h.map((v) => v / this.temperature))
    );

    // Student forward
    const studentOut = this.student.forward(inputIds);
    const studentLogits = studentOut.map((seq) =>
      seq.map((h) => h.map((v) => v / this.temperature))
    );

    // Distillation loss: KL divergence between softened probabilities
    let distillLoss = 0;
    for (let b = 0; b < inputIds.length; b++) {
      for (let t = 0; t < inputIds[b].length; t++) {
        const tSoftmax = this.softmax(teacherLogits[b][t]);
        const sSoftmax = this.softmax(studentLogits[b][t]);
        for (let v = 0; v < tSoftmax.length; v++) {
          distillLoss += tSoftmax[v] * Math.log((tSoftmax[v] + 1e-8) / (sSoftmax[v] + 1e-8));
        }
      }
    }

    // Combined loss
    const mlmLoss = 0; // computed separately from MLM head
    return this.alpha * distillLoss + (1 - this.alpha) * mlmLoss;
  }

  private softmax(logits: number[]): number[] {
    const max = Math.max(...logits);
    const exp = logits.map((l) => Math.exp(l - max));
    const sum = exp.reduce((a, b) => a + b, 0);
    return exp.map((e) => e / sum);
  }
}
```text

**Other notable variants**: SpanBERT (masks contiguous spans for span prediction tasks), ELECTRA (replaces tokens with generator/discriminator), BART (denoising autoencoder), DeBERTa (disentangled attention, relative position).

---

## Summary

BERT introduced bidirectional pre-training using masked language modeling and next-sentence prediction. The masked LM objective randomly masks tokens and trains the model to predict them from full bidirectional context. Next-sentence prediction learns relationships between sentence pairs for.
downstream tasks like question answering and natural language inference. Fine-tuning adapts the pre-trained BERT model to specific tasks by adding task-specific heads and.
training on labeled data. Variants like RoBERTa optimize pre-training with dynamic masking and larger batches, ALBERT reduces parameters through factorized embeddings and.
cross-layer sharing, and DistilBERT uses knowledge distillation for 40% smaller but 95% effective models. The GLUE benchmark provides a standardized evaluation across diverse NLU tasks.

## Practical Takeaways

- BERT pre-training uses MLM (15% masking, 80/10/10 strategy) + NSP (removed in RoBERTa)
- Fine-tuning adds a lightweight task head and updates all parameters with a low learning rate (2e-5)
- GLUE benchmark evaluates 9 tasks; BERT-base scores 80.5 average
- RoBERTa optimizes BERT's training (dynamic masking, larger batches, more data, no NSP)
- ALBERT reduces parameters 18— via factorized embeddings and cross-layer sharing
- DistilBERT is 40% smaller and 60% faster while retaining 97% of performance
- Knowledge distillation transfers knowledge from a large teacher model to a smaller student model
- Always use the `[CLS]` token for classification, token-level heads for NER, and span prediction for QA

## Interview Q&A

<details class="tp-qa-card" data-qid="nlp06-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: How does BERT's masked language model work?
  </summary>
  <div class="tp-qa-answer">
<p>BERT masks 15% of tokens in each input sequence. Of these masked tokens: 80% are replaced with the [MASK] token, 10% are replaced with a random token,.
and 10% are left unchanged. The model must predict the original token at each masked position using the final hidden state at that position. A feed-forward classifier (dense + GELU + LayerNorm + projection to vocab) is applied to the.
hidden state of each masked position. The loss is cross-entropy between predicted and.
original tokens. The 80/10/10 strategy prevents mismatch between pre-training (where [MASK] appears) and fine-tuning (where it never appears). If all masked tokens were [MASK],.
the model would not learn to handle unmasked text during fine-tuning.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="nlp06-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: What is Next Sentence Prediction and why was it removed in RoBERTa?
  </summary>
  <div class="tp-qa-answer">
<p>NSP is a binary classification task: given two sentences A and B, predict whether B is the actual next sentence after A (50% of pairs) or.
a random sentence (50% of pairs). The [CLS] token's hidden state is fed to a binary classifier. NSP was designed to help BERT understand.
sentence relationships for tasks like QA and NLI. RoBERTa found that NSP is not essential: (1) Training without NSP matched or.
exceeded BERT on all GLUE tasks. (2) The single-sentence approach (always one contiguous document) performed better. (3) NSP's random negatives are too easy — the model learns topic mismatch rather than discourse coherence. ALBERT replaced NSP with SOP (Sentence Order Prediction),.
which requires actual discourse understanding.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="nlp06-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: How do you fine-tune BERT for text classification?
  </summary>
  <div class="tp-qa-answer">
<p>Steps: (1) Add a classification head: a linear layer that takes the [CLS] token's final hidden state and projects to num_classes. (2) Format input as [CLS] text [SEP] with padding to max_seq_len. (3) Use token_type_ids = 0 for.
single sentence, 0/1 for sentence pairs. (4) Initialize BERT with pre-trained weights and the classification head randomly. (5) Fine-tune all parameters end-to-end with learning rate 2e-5 to 5e-5 (AdamW). (6) Use linear warmup (10% of steps) followed by linear decay. (7) Train for.
2-10 epochs with early stopping based on validation loss. (8) Batch size: 16-32 for BERT-base on a single GPU. The classification head is tiny (num_classes — 768 parameters) compared to BERT's 110M,.
so fine-tuning is fast (1-2 hours on a single GPU).</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="nlp06-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: How does BERT handle question answering (SQuAD)?
  </summary>
  <div class="tp-qa-answer">
<p>For extractive QA (SQuAD), BERT predicts a span in the context that answers the question. The input is [CLS] question [SEP] context [SEP]. Two additional vectors (start and.
end projection) are learned on top of the hidden states. For each token position i, the start score = S^T * h_i and.
end score = E^T * h_i, where S and E are learned vectors of size d_model. The answer span is the pair (i,.
j) with i ≤ j and maximum S^T·h_i + E^T·h_j. Constraints: i must be in the context (not question), and j - i + 1 ≤ max_answer_length (typically 30). BERT-base achieves F1=88.5 on SQuAD 1.1 (EM=81.0). For.
SQuAD 2.0 with unanswerable questions, a no-answer class is added.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="nlp06-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: What is the GLUE benchmark and what tasks does it include?
  </summary>
  <div class="tp-qa-answer">
<p>GLUE (General Language Understanding Evaluation) is a collection of 9 NLP tasks for evaluating general-purpose language understanding models. Tasks: CoLA (grammatical acceptability),.
SST-2 (sentiment), MRPC (paraphrase detection), STS-B (text similarity regression), QQP (duplicate question detection), MNLI (natural language inference, 3-way), QNLI (question-answering NLI),.
RTE (textual entailment), WNLI (Winograd schema). The overall score is the average of all task metrics. BERT-base achieved 80.5, RoBERTa 88.5,.
and human baseline is 87.1. SuperGLUE (2019) replaced GLUE with 8 harder tasks after BERT saturated GLUE scores.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="nlp06-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: How does ALBERT reduce parameters while maintaining performance?
  </summary>
  <div class="tp-qa-answer">
<p>ALBERT uses two parameter reduction techniques: (1) Factorized embedding parameterization: decomposes the vocabulary embedding matrix into two smaller matrices (V — E) and.
(E — H) instead of (V — H). With V=30K, E=128, H=768, embedding parameters go from 23M to 3.9M. (2) Cross-layer parameter sharing: all 12 or.
24 layers share the same attention parameters and FFN parameters. This reduces layer parameters by ~90% (from 12—14M=168M to 14M total). ALBERT-xxlarge has 223M parameters vs BERT-large's 340M,.
but achieves comparable or better GLUE scores. ALBERT also uses SOP (Sentence Order Prediction) instead of NSP, which requires true discourse understanding.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="nlp06-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: What is knowledge distillation and how is it applied to BERT?
  </summary>
  <div class="tp-qa-answer">
<p>Knowledge distillation trains a smaller student model to mimic a larger teacher model. For DistilBERT: (1) Architecture: student has 6 layers (half of BERT-base's 12),.
initialized from every other layer of the teacher. (2) Loss = α * distillation_loss + β * MLM_loss + γ * cosine_embedding_loss. Distillation loss uses the teacher's softened probabilities (temperature T=2.0) as soft targets. (3) Training uses the same data.
as BERT (Wikipedia + BookCorpus). DistilBERT is 40% smaller (66M vs 110M),.
60% faster, and retains 97% of BERT's GLUE performance. TinyBERT and MobileBERT push this further, achieving 96% performance with 7.5— smaller models.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="nlp06-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: What is the difference between BERT and RoBERTa?
  </summary>
  <div class="tp-qa-answer">
<p>RoBERTa (Robustly Optimized BERT Approach) makes several training optimizations: (1) Removes NSP loss — trains on single contiguous documents. (2) Dynamic masking — masks tokens differently each epoch (BERT uses static masking once). (3) Larger batch sizes — 8K vs.
BERT's 256. (4) More training data — 160GB (BookCorpus+Wikipedia+CommonCrawl+News) vs BERT's 16GB. (5) Longer training — 500K steps vs BERT's 100K. (6) Larger learning rate with different warmup schedule. RoBERTa outperforms BERT on all GLUE tasks (88.5 vs 80.5 average)..
The key insight: BERT was significantly undertrained;.
most improvements come from longer training with more data, not architectural changes.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="nlp06-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: How do you handle long sequences (>512 tokens) with BERT?
  </summary>
  <div class="tp-qa-answer">
<p>BERT's maximum sequence length is 512 tokens (limited by O(n^2) self-attention). Strategies for longer texts: (1) Truncation: keep the first 512 tokens (most important for.
classification). (2) Hierarchical: split into 512-token chunks, encode each separately, aggregate with pooling or an additional transformer layer. (3) Longformer/BigBird: replace full attention with sparse attention patterns (sliding window + global tokens). Longformer handles 4096 tokens. (4) Reformer: uses locality-sensitive hashing for.
O(n log n) attention. (5) Sliding window: use overlapping windows and a secondary model to combine predictions. For most classification tasks,.
truncating to 512 tokens loses <1% accuracy because important information is typically at the start.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="nlp06-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: What learning rate schedule is recommended for BERT fine-tuning?
  </summary>
  <div class="tp-qa-answer">
<p>Recommended: AdamW optimizer (ε=1e-8, β1=0.9, β2=0.999) with learning rate 2e-5 to 5e-5. Use a linear warmup for the first 10% of training steps (increasing LR from 0 to the max),.
then linear decay to 0. Weight decay: 0.01 (applied to all non-bias and non-norm parameters). The learning rate for fine-tuning is 10-25— lower than pre-training (5e-4) because the pre-trained weights are already near-optimal. Higher LR during fine-tuning can cause catastrophic forgetting. For.
batch size: 16 or 32 works well. For epochs: 2-10 depending on dataset size (small datasets need more epochs, large datasets need fewer). Use the dev set for.
early stopping.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

Q1: What percentage of tokens are masked in BERT pre-training?
a) 5%
b) 10%
c) 15%
d) 20%
<details class="tp-qa-card" data-qid="nlp06-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) 15%</strong></p><p>BERT masks 15% of tokens. Of these, 80% are replaced with [MASK], 10% with random tokens, and 10% are left unchanged.</p></div></details>

Q2: What is the typical learning rate for BERT fine-tuning?
a) 1e-3
b) 2e-5
c) 5e-4
d) 1e-2
<details class="tp-qa-card" data-qid="nlp06-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) 2e-5</strong></p><p>Fine-tuning BERT uses a much lower learning rate (2e-5 to 5e-5) vs pre-training (5e-4) to avoid catastrophic forgetting of pre-trained knowledge.</p></div></details>

Q3: Which BERT variant uses factorized embedding parameterization?
a) RoBERTa
b) ALBERT
c) DistilBERT
d) SpanBERT
<details class="tp-qa-card" data-qid="nlp06-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) ALBERT</strong></p><p>ALBERT decomposes the embedding matrix into V—E and E—H (with E << H), reducing embedding parameters from 23M to 4M.</p></div></details>

Q4: What does DistilBERT use as its training loss?
a) MLM only
b) Distillation loss only
c) Distillation + MLM + cosine embedding loss
d) NSP + MLM
<details class="tp-qa-card" data-qid="nlp06-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Distillation + MLM + cosine embedding loss</strong></p><p>DistilBERT combines distillation loss (soft targets from teacher), masked language modeling loss, and cosine embedding loss (for hidden state alignment).</p></div></details>

Q5: How many transformer layers does DistilBERT have?
a) 3
b) 6
c) 8
d) 12
<details class="tp-qa-card" data-qid="nlp06-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) 6</strong></p><p>DistilBERT has 6 layers (half of BERT-base's 12), initialized from every other layer of the teacher.</p></div></details>

## Exercises


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition**Easy** — Write a script to prepare data for BERT pre-training: tokenize text, create masked LM instances using the 80/10/10 strategy, and create NSP pairs.

**Easy** — Fine-tune BERT-base on SST-2 for sentiment classification. Report validation accuracy after 3 epochs using learning rates 2e-5, 3e-5, and 5e-5.

**Medium** — Implement span extraction for SQuAD-style QA on top of BERT. Evaluate using Exact Match (EM) and F1 scores on the SQuAD 2.0 dev set.

**Medium** — Compare the GLUE scores of BERT-base, DistilBERT, and ALBERT-base. Create a table showing performance vs inference time and model size.

**Hard** — Implement knowledge distillation: train a 3-layer student BERT to mimic a 12-layer teacher. Vary the temperature (1.0, 2.0, 5.0) and alpha (0.3, 0.5, 0.7). Report which configuration best preserves teacher performance.

---

> **Previous**: [Transformer Architecture](05-transformer-architecture.md) | **Next**: [Hugging Face Ecosystem](07-hugging-face-ecos

## Revision Notes

- - Core principle: Understand the fundamental concepts thoroughly
- - Implementation pattern: Practice with real code examples
- - Complexity: Know the time and space complexity
- - Application: Know when to use this in production systems
- - Interview: Frequently asked in technical interviews
- - Edge cases: Consider common failure scenarios
- - Related concepts: Connect to broader system design

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of 10-nlp-transformers. When would you choose one approach over another?
2. Design a system that efficiently handles 10-nlp-transformers at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 10-nlp-transformers. What was your approach and what was the result?
2. How would you explain 10-nlp-transformers to a non-technical stakeholder?

#### Microsoft Style
1. How does 10-nlp-transformers integrate with enterprise systems and cloud architectures?
2. What are the security implications of 10-nlp-transformers?

#### NVIDIA Style
1. How would you optimize 10-nlp-transformers for GPU-accelerated computing?
2. What parallel processing patterns apply to 10-nlp-transformers?

#### AI Startup Style
1. How would you implement 10-nlp-transformers in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 10-nlp-transformers?

### Resume Tips
- **Technical Skills**: List 10-nlp-transformers under relevant technical skills
- **Project Description**: "Implemented 10-nlp-transformers to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 10-nlp-transformers in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 10-nlp-transformers
- [ ] Practice 3-5 problems related to 10-nlp-transformers
- [ ] Prepare 2 real-world examples of using 10-nlp-transformers
- [ ] Know the time/space complexity of common 10-nlp-transformers operations
- [ ] Have questions ready about how the company uses 10-nlp-transformersystem.md)


## Difficulty Level

**Level**: Advanced
**Estimated Study Time**: 60-90 minutes
**Prerequisites**: Complete understanding of previous modules recommended

## Tips & Tricks

**Tip**: Start with the basics — understand the fundamental concepts before moving to advanced topics.

**Tip**: Practice actively — don't just read, implement the code examples yourself.

**Tip**: Connect to prior knowledge — relate new concepts to what you learned in previous modules.

**Pro Tip**: Focus on understanding, not memorizing — understand why things work, not just how.

**Pro Tip**: Review regularly — revisit key concepts after a few days to reinforce learning.

## Memory Tricks

- **Acronym Method**: Create acronyms for lists of concepts
- **Visualization**: Draw diagrams to visualize abstract concepts
- **Teach someone else**: Explaining concepts to others reinforces your understanding
- **Connect to real-world**: Relate technical concepts to everyday experiences
- **Chunking**: Break complex topics into smaller, manageable pieces

## Further Reading

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers and blog posts from leading AI labs

## Related Topics

- How this connects to NLP & Transformers fundamentals
- Prerequisites for advanced topics in this module
- Real-world applications in AI engineering systems
- Interview questions that test deep understanding

## FAQs

**Q: How long does it take to master bert and fine tuning?
**A**: With consistent practice, 2-4 weeks for basic proficiency, 2-3 months for advanced mastery.

**Q: Do I need to memorize all the details?
**A**: Focus on understanding the core principles. Details can be looked up, but understanding cannot.

**Q: What's the best way to practice?
**A**: Implement the code examples, then modify them to solve different problems. Build small projects.

**Q: How often should I review this material?
**A**: Review after 1 day, 3 days, 1 week, and 1 month for long-term retention.

## Important Notes

> **Note**: Understanding the fundamentals is more important than memorizing syntax.

> **Note**: Don't skip the exercises — they reinforce critical concepts.

> **Note**: This topic frequently appears in technical interviews at top companies.

> **Note**: In real systems, these concepts are used daily by AI engineers.

## Historical Context

The Evolution of this technology reflects decades of research and practical engineering experience.

Understanding the evolution of bert and fine tuning helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

## Coding Standards

- Follow consistent naming conventions (camelCase for variables, PascalCase for types)
- Add clear comments explaining complex logic
- Keep functions focused on a single responsibility
- Write self-documenting code with meaningful names
- Handle errors gracefully and provide informative messages

**Best Practice**: Follow language-specific style guides (PEP 8 for Python, ESLint for TypeScript).

## Security Considerations

- **Input Validation**: Always validate and sanitize inputs
- **Error Handling**: Don't expose internal details in error messages
- **Resource Limits**: Set appropriate limits to prevent denial of service
- **Authentication**: Ensure proper authentication and authorization
- **Data Protection**: Handle sensitive data according to security best practices

## ML Intuition

For AI engineering, understanding bert and fine tuning at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of bert and fine tuning like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply bert and fine tuning concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of bert and fine tuning?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply bert and fine tuning in real systems?
**Answer**: When building production AI systems that require reliability, scalability, and maintainability.

**Card 3**: What are the common pitfalls to avoid?
**Answer**: Over-engineering, ignoring edge cases, and not considering production requirements.

## Study Plan

**Day 1**: Read theory and review examples (24 minutes)
**Day 2**: Complete exercises and practice (24 minutes)
**Day 3**: Review flashcards and take quiz (12 minutes)

## Research References

- Academic papers and conference proceedings (NeurIPS, ICML, ICLR)
- Industry whitepapers from leading AI companies
- Technical blogs from Google, Meta, OpenAI, Anthropic
- Open-source implementations and documentation

## Fine-Tuning Notes

When applying this topic to production, consider:
- Fine-tuning with LoRA or Adapters for domain adaptation
- Adapting general principles to your specific use cases
- Performance optimization for target hardware
- Cost considerations for deployment


## Open-Source Tools

- **LangChain**: Framework for building LLM-powered applications
- **LlamaIndex**: Data framework for connecting LLMs with external data
- **Hugging Face Transformers**: State-of-the-art ML models and datasets
- **Weights & Biases**: Experiment tracking and model evaluation
- **MLflow**: Open-source platform for ML lifecycle management
- **Prometheus + Grafana**: Monitoring and observability stack

## Debugging Guide

**Common Issues**:
- Check input validation and data types
- Verify API keys and authentication
- Monitor resource usage (CPU, memory, GPU)
- Review error logs for stack traces

**Debugging Steps**:
1. Reproduce the issue with minimal input
2. Add logging at key points
3. Check external dependencies
4. Verify configuration settings
5. Test with known-good inputs

## Mock Interview Section

**Quick Fire Questions**:
1. What is the core concept of NLP & Transformers?
2. When would you use this in production?
3. What are the trade-offs?
4. How does this scale?
5. What are common pitfalls?

**Follow-up Questions**:
- How would you optimize this for 10x scale?
- What monitoring would you add?
- How would you test this in production?

## Optimized Implementation

For production systems, consider:
- **Caching**: Cache frequent computations and API responses
- **Batching**: Process multiple items together for efficiency
- **Async/Await**: Use non-blocking I/O for concurrent operations
- **Connection Pooling**: Reuse database and API connections
- **Lazy Loading**: Load resources only when needed

## References

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers from NeurIPS, ICML, ICLR
- Industry blogs from Google, Meta, OpenAI, Anthropic

## Evaluation Metrics

**Model Evaluation**:
- Accuracy, Precision, Recall, F1-Score
- BLEU, ROUGE for text generation
- Latency, Throughput, Cost per inference

**System Evaluation**:
- End-to-end latency (p50, p95, p99)
- Error rate and availability
- Resource utilization (CPU, memory, GPU)

## Real-World Examples

**Industry Applications**:
- Google: Search ranking, translation, autocomplete
- Amazon: Product recommendations, Alexa, fraud detection
- Netflix: Content recommendations, personalization
- Tesla: Autonomous driving, computer vision
- OpenAI: ChatGPT, DALL-E, Codex

## Next Topic

After mastering NLP & Transformers, continue to the next module in the curriculum to build upon these foundations and deepen your AI engineering expertise.

## Training Workflow

1. **Data Preparation**: Collect, clean, and preprocess data
2. **Model Selection**: Choose architecture based on task requirements
3. **Training Loop**: Forward pass, loss computation, backpropagation
4. **Validation**: Evaluate on held-out data to prevent overfitting
5. **Hyperparameter Tuning**: Optimize learning rate, batch size, etc.
6. **Model Export**: Save trained model for deployment

## Limitations

Every approach has trade-offs. Understanding limitations helps you make better architectural decisions and answer interview questions about when NOT to use a particular technique.
