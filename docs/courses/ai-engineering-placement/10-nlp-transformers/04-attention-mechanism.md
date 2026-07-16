# Attention Mechanism — Bahdanau, Luong, Self-Attention, Multi-Head Attention

## Learning Objectives

| LO# | Description |
|-----|-------------|
| LO1 | Explain the motivation for attention in seq2seq models: overcoming the fixed-context-vector bottleneck |
| LO2 | Implement Bahdanau (additive) and Luong (multiplicative) attention mechanisms |
| LO3 | Derive scaled dot-product attention from query, key, value matrices |
| LO4 | Build multi-head attention with parallel heads and concatenation |
| LO5 | Apply causal (autoregressive) masking for decoder self-attention |
| LO6 | Visualize attention weights and interpret model focus |

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../assets/images/lessons/ai-engineering-placement/10-nlp-transformers/04-attention-mechanism/handwritten-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/ai-engineering-placement/10-nlp-transformers/04-attention-mechanism/handwritten-notes.png" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/ai-engineering-placement/10-nlp-transformers/04-attention-mechanism/sticky-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/ai-engineering-placement/10-nlp-transformers/04-attention-mechanism/sticky-notes.png" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/ai-engineering-placement/10-nlp-transformers/04-attention-mechanism/visual-explanation.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/ai-engineering-placement/10-nlp-transformers/04-attention-mechanism/visual-explanation.png" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 4.1 | Seq2Seq Bottleneck | Fixed context vector fails for long sequences |
| 4.2 | Bahdanau Attention | Additive attention with alignment score computation |
| 4.3 | Luong Attention | Multiplicative (dot, general, concat) score variants |
| 4.4 | Self-Attention | Q, K, V from same sequence, pairwise interactions |
| 4.5 | Multi-Head Attention | Parallel attention heads, concatenation, projection |
| 4.6 | Causality & Visualization | Autoregressive masking, attention weight heatmaps |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Encoder States] --> B[Attention Mechanism]
    C[Decoder State] --> B
    B --> D{Attention Type}
    D -->|Bahdanau| E[Additive Score]
    D -->|Luong| F[Multiplicative Score]
    D -->|Self-Attention| G[Q, K, V from same source]
    E --> H[Alignment Vector]
    F --> H
    G --> H
    H --> I[Context Vector]
    I --> J[Concatenate with Decoder State]
    J --> K[Output Projection]
```

## 4.1 The Seq2Seq Bottleneck

In the plain encoder-decoder, the encoder compresses the entire input sequence into a fixed-size context vector (the final hidden state). For long sequences, this vector becomes an information bottleneck — it cannot capture all details.

```typescript
interface EncoderState {
  hidden: number[];
  cell: number[];
}

class AttentionContext {
  private encoderStates: EncoderState[] = [];

  storeEncoderState(state: EncoderState): void {
    this.encoderStates.push(state);
  }

  getEncoderStates(): EncoderState[] {
    return this.encoderStates;
  }

  clear(): void {
    this.encoderStates = [];
  }
}
```

Attention solves this by allowing the decoder to look at all encoder hidden states, weighted by relevance. At each decoding step, attention computes a context vector as a weighted sum of encoder states, where weights indicate which input tokens are most relevant for generating the next output token.

---

## 4.2 Bahdanau Attention

Bahdanau et al. (2014) introduced additive attention, also called "concat" attention. The alignment score uses a feed-forward layer with tanh activation.

```typescript
class BahdanauAttention {
  private decoderHiddenSize: number;
  private encoderHiddenSize: number;
  private attentionDim: number;

  // Weight matrices
  private W1: number[][]; // encoder projection
  private W2: number[][]; // decoder projection
  private v: number[];   // score vector

  constructor(decoderHiddenSize: number, encoderHiddenSize: number, attentionDim = 128) {
    this.decoderHiddenSize = decoderHiddenSize;
    this.encoderHiddenSize = encoderHiddenSize;
    this.attentionDim = attentionDim;

    this.W1 = this.initMatrix(attentionDim, encoderHiddenSize);
    this.W2 = this.initMatrix(attentionDim, decoderHiddenSize);
    this.v = Array.from({ length: attentionDim }, () => (Math.random() - 0.5) * 0.1);
  }

  private initMatrix(rows: number, cols: number): number[][] {
    const scale = Math.sqrt(2 / (rows + cols));
    return Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => (Math.random() * 2 - 1) * scale)
    );
  }

  // Score function: e_{tj} = v^T * tanh(W1 * h_j + W2 * s_{t-1})
  private score(encoderHidden: number[], decoderPrevHidden: number[]): number {
    const combined = new Array(this.attentionDim).fill(0);
    // W1 * h_j
    for (let i = 0; i < this.attentionDim; i++) {
      for (let j = 0; j < this.encoderHiddenSize; j++) {
        combined[i] += this.W1[i][j] * encoderHidden[j];
      }
    }
    // + W2 * s_{t-1}
    for (let i = 0; i < this.attentionDim; i++) {
      for (let j = 0; j < this.decoderHiddenSize; j++) {
        combined[i] += this.W2[i][j] * decoderPrevHidden[j];
      }
    }
    // tanh
    const tanh = combined.map((v) => Math.tanh(v));
    // v^T *
    return tanh.reduce((s, v, i) => s + v * this.v[i], 0);
  }

  compute(
    encoderStates: number[][],
    decoderPrevHidden: number[]
  ): { context: number[]; attentionWeights: number[] } {
    const T = encoderStates.length;

    // Compute alignment scores
    const scores = encoderStates.map((h) =>
      this.score(h, decoderPrevHidden)
    );

    // Softmax to get attention weights
    const maxScore = Math.max(...scores);
    const expScores = scores.map((s) => Math.exp(s - maxScore));
    const sumExp = expScores.reduce((a, b) => a + b, 0);
    const attentionWeights = expScores.map((s) => s / sumExp);

    // Context vector: weighted sum of encoder states
    const hiddenSize = encoderStates[0].length;
    const context = new Array(hiddenSize).fill(0);
    for (let t = 0; t < T; t++) {
      for (let j = 0; j < hiddenSize; j++) {
        context[j] += attentionWeights[t] * encoderStates[t][j];
      }
    }

    return { context, attentionWeights };
  }
}
```

Bahdanau attention is "additive" because it computes the score as a learned function with addition followed by tanh. It was the first attention mechanism applied to neural machine translation (English→French).

---

## 4.3 Luong Attention

Luong et al. (2015) proposed simpler score functions and two attention styles: global (all encoder states) and local (a window around the current position).

```typescript
type LuongScoreFunction = "dot" | "general" | "concat";

class LuongAttention {
  private decoderHiddenSize: number;
  private encoderHiddenSize: number;
  private scoreFn: LuongScoreFunction;
  private Wa?: number[][]; // for "general" score

  constructor(
    decoderHiddenSize: number,
    encoderHiddenSize: number,
    scoreFn: LuongScoreFunction = "general"
  ) {
    this.decoderHiddenSize = decoderHiddenSize;
    this.encoderHiddenSize = encoderHiddenSize;
    this.scoreFn = scoreFn;

    if (scoreFn === "general") {
      this.Wa = Array.from({ length: encoderHiddenSize }, () =>
        Array.from({ length: decoderHiddenSize }, () =>
          (Math.random() - 0.5) * 0.1
        )
      );
    }
  }

  private score(decoderHidden: number[], encoderHidden: number[]): number {
    switch (this.scoreFn) {
      case "dot": {
        // s_t^T * h_j
        let dot = 0;
        const minDim = Math.min(this.decoderHiddenSize, this.encoderHiddenSize);
        for (let i = 0; i < minDim; i++) {
          dot += decoderHidden[i] * encoderHidden[i];
        }
        return dot;
      }
      case "general": {
        // s_t^T * Wa * h_j
        const Wa_h = new Array(this.decoderHiddenSize).fill(0);
        for (let i = 0; i < this.decoderHiddenSize; i++) {
          for (let j = 0; j < this.encoderHiddenSize; j++) {
            if (this.Wa) Wa_h[i] += this.Wa[j][i] * encoderHidden[j];
          }
        }
        let dot = 0;
        for (let i = 0; i < this.decoderHiddenSize; i++) {
          dot += decoderHidden[i] * Wa_h[i];
        }
        return dot;
      }
      case "concat": {
        // v_a^T * tanh(Wa * [s_t; h_j])
        let concatVal = 0;
        for (let i = 0; i < Math.min(this.decoderHiddenSize, this.encoderHiddenSize); i++) {
          concatVal += Math.tanh(decoderHidden[i] + encoderHidden[i]);
        }
        return concatVal;
      }
    }
  }

  compute(
    decoderHidden: number[],
    encoderStates: number[][]
  ): { context: number[]; attentionWeights: number[] } {
    const scores = encoderStates.map((h) => this.score(decoderHidden, h));
    const maxScore = Math.max(...scores);
    const expScores = scores.map((s) => Math.exp(s - maxScore));
    const sumExp = expScores.reduce((a, b) => a + b, 0);
    const attentionWeights = expScores.map((s) => s / sumExp);

    const context = new Array(this.encoderHiddenSize).fill(0);
    for (let t = 0; t < encoderStates.length; t++) {
      for (let j = 0; j < this.encoderHiddenSize; j++) {
        context[j] += attentionWeights[t] * encoderStates[t][j];
      }
    }

    return { context, attentionWeights };
  }
}
```

Luong's global attention computes the context vector and then combines it with the decoder hidden state via: h~_t = tanh(W_c * [s_t; c_t]), where [;] denotes concatenation. This is simpler than Bahdanau's approach of using attention to compute the decoder state directly.

**Local attention** predicts an aligned position p_t for each output word, then computes attention only within a window [p_t - D, p_t + D]. This reduces computation from O(T) to O(2D) where D is a fixed window size (typically 10).

---

## 4.4 Self-Attention

Self-attention (also called intra-attention) computes attention within a single sequence: each token attends to every other token. Queries (Q), Keys (K), and Values (V) are all derived from the same input.

```typescript
class SelfAttention {
  private inputDim: number;
  private dk: number;

  private Wq: number[][];
  private Wk: number[][];
  private Wv: number[][];

  constructor(inputDim: number, dk: number = 64) {
    this.inputDim = inputDim;
    this.dk = dk;

    this.Wq = this.initMatrix(dk, inputDim);
    this.Wk = this.initMatrix(dk, inputDim);
    this.Wv = this.initMatrix(dk, inputDim);
  }

  private initMatrix(rows: number, cols: number): number[][] {
    const scale = Math.sqrt(2 / (rows + cols));
    return Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => (Math.random() * 2 - 1) * scale)
    );
  }

  forward(input: number[][]): { output: number[][]; attentionMatrix: number[][] } {
    const n = input.length; // sequence length

    // Project to Q, K, V
    const Q = input.map((x) => this.matVecMul(this.Wq, x));
    const K = input.map((x) => this.matVecMul(this.Wk, x));
    const V = input.map((x) => this.matVecMul(this.Wv, x));

    // Compute attention scores: Q * K^T / sqrt(dk)
    const scores: number[][] = [];
    for (let i = 0; i < n; i++) {
      scores[i] = [];
      for (let j = 0; j < n; j++) {
        let dot = 0;
        for (let k = 0; k < this.dk; k++) {
          dot += Q[i][k] * K[j][k];
        }
        scores[i][j] = dot / Math.sqrt(this.dk);
      }
    }

    // Softmax along rows
    const attentionMatrix = scores.map((row) => {
      const max = Math.max(...row);
      const exp = row.map((s) => Math.exp(s - max));
      const sum = exp.reduce((a, b) => a + b, 0);
      return exp.map((e) => e / sum);
    });

    // Weighted sum of values
    const output = attentionMatrix.map((row) => {
      const out = new Array(this.dk).fill(0);
      for (let j = 0; j < n; j++) {
        for (let k = 0; k < this.dk; k++) {
          out[k] += row[j] * V[j][k];
        }
      }
      return out;
    });

    return { output, attentionMatrix };
  }

  private matVecMul(W: number[][], v: number[]): number[] {
    return W.map((row) => row.reduce((s, w, j) => s + w * v[j], 0));
  }
}
```

**Scaled dot-product attention**: Dividing by sqrt(d_k) prevents the dot products from growing large in magnitude (which pushes softmax into regions of extremely small gradients). Without scaling, for d_k=512, the variance of dot products is 512, making softmax saturate.

---

## 4.5 Multi-Head Attention

Multi-head attention runs h parallel attention heads, each learning different relationship types. The outputs are concatenated and projected.

```typescript
class MultiHeadAttention {
  private numHeads: number;
  private dk: number;
  private dv: number;
  private dModel: number;
  private heads: SelfAttention[] = [];
  private Wo: number[][]; // output projection

  constructor(dModel: number, numHeads: number = 8) {
    this.dModel = dModel;
    this.numHeads = numHeads;
    this.dk = dModel / numHeads;
    this.dv = dModel / numHeads;

    for (let i = 0; i < numHeads; i++) {
      this.heads.push(new SelfAttention(dModel, this.dk));
    }

    // Output projection: W_O (d_model x d_model)
    this.Wo = Array.from({ length: dModel }, () =>
      Array.from({ length: dModel }, () => (Math.random() - 0.5) * 0.1)
    );
  }

  forward(input: number[][]): { output: number[][]; attentionMatrices: number[][][] } {
    const n = input.length;
    const headOutputs: number[][][] = [];
    const attentionMatrices: number[][][] = [];

    // Run each head
    for (let headIdx = 0; headIdx < this.numHeads; headIdx++) {
      const { output, attentionMatrix } = this.heads[headIdx].forward(input);
      headOutputs.push(output);
      attentionMatrices.push(attentionMatrix);
    }

    // Concatenate heads: (n, d_model)
    const concatOutput: number[][] = [];
    for (let i = 0; i < n; i++) {
      const concatRow: number[] = [];
      for (let h = 0; h < this.numHeads; h++) {
        concatRow.push(...headOutputs[h][i]);
      }
      concatOutput.push(concatRow);
    }

    // Project with W_O
    const output = concatOutput.map((row) =>
      this.Wo.map((wRow) =>
        wRow.reduce((s, w, j) => s + w * row[j], 0)
      )
    );

    return { output, attentionMatrices };
  }
}
```

Each head learns different relationship patterns: one head might learn syntactic dependencies (subject-verb agreement), another learns positional relationships (adjacent words), and another learns semantic associations.

---

## 4.6 Causal Masking & Visualization

**Causal (autoregressive) masking** prevents decoder positions from attending to future tokens. This is implemented by adding -infinity to the upper triangle of the attention matrix before softmax.

```typescript
class CausalSelfAttention extends SelfAttention {
  forward(input: number[][]): { output: number[][]; attentionMatrix: number[][] } {
    const n = input.length;
    const Q = input.map((x) => this.matVecMul(this.Wq, x));
    const K = input.map((x) => this.matVecMul(this.Wk, x));
    const V = input.map((x) => this.matVecMul(this.Wv, x));

    // Compute scores
    const scores: number[][] = [];
    for (let i = 0; i < n; i++) {
      scores[i] = [];
      for (let j = 0; j < n; j++) {
        let dot = 0;
        for (let k = 0; k < this.dk; k++) {
          dot += Q[i][k] * K[j][k];
        }
        scores[i][j] = dot / Math.sqrt(this.dk);
      }
    }

    // Apply causal mask: set scores[i][j] = -Infinity for j > i
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        scores[i][j] = -Infinity;
      }
    }

    // Softmax
    const attentionMatrix = scores.map((row) => {
      const max = Math.max(...row);
      const validExp = row.map((s) => (s === -Infinity ? 0 : Math.exp(s - max)));
      const sum = validExp.reduce((a, b) => a + b, 0);
      return validExp.map((e) => (sum === 0 ? 0 : e / sum));
    });

    // Weighted sum
    const output = attentionMatrix.map((row) => {
      const out = new Array(this.dk).fill(0);
      for (let j = 0; j < n; j++) {
        for (let k = 0; k < this.dk; k++) {
          out[k] += row[j] * V[j][k];
        }
      }
      return out;
    });

    return { output, attentionMatrix };
  }
}
```

**Attention visualization** helps interpret what the model focuses on. A heatmap where rows are target positions and columns are source positions reveals alignment patterns.

```typescript
class AttentionVisualizer {
  static createHeatmap(
    attentionMatrix: number[][],
    sourceTokens: string[],
    targetTokens: string[]
  ): void {
    const numRows = attentionMatrix.length;
    const numCols = attentionMatrix[0].length;

    console.log("Attention Heatmap:\n");
    // Print header
    process.stdout.write("        ");
    for (const token of sourceTokens) {
      process.stdout.write(token.padStart(10));
    }
    console.log();

    for (let i = 0; i < numRows; i++) {
      process.stdout.write(targetTokens[i]?.padStart(8) ?? "");
      for (let j = 0; j < numCols; j++) {
        const weight = attentionMatrix[i][j];
        const bar = weight > 0.5 ? "█" : weight > 0.3 ? "▓" : weight > 0.1 ? "▒" : "░";
        process.stdout.write(`     ${bar}   `);
      }
      console.log(`  (pos ${i})`);
    }
  }

  static getTopAttention(
    attentionMatrix: number[][],
    sourceTokens: string[],
    targetIdx: number,
    k = 3
  ): Array<{ token: string; weight: number }> {
    const weights = attentionMatrix[targetIdx].map((w, j) => ({
      token: sourceTokens[j],
      weight: w,
    }));
    weights.sort((a, b) => b.weight - a.weight);
    return weights.slice(0, k);
  }
}
```

In machine translation attention heatmaps, the alignment is typically near-diagonal for monotonic language pairs (English→French). For non-monotonic pairs (English→German with verb-final structure), attention shows long-range alignments (verbs attending to early positions).

---

## Summary

Attention mechanisms allow models to focus on relevant parts of the input when producing each output element. Bahdanau attention computes alignment scores using a feed-forward network, enabling the decoder to attend to different encoder hidden states at each step. Luong attention uses simpler score functions (dot, general, concat) and can be applied globally or locally. Self-attention computes attention within a single sequence, allowing each token to attend to every other token. Scaled dot-product attention divides by the square root of the dimension to prevent softmax saturation. Multi-head attention runs multiple attention heads in parallel, capturing different relationship types. Causal masking prevents positions from attending to future tokens in autoregressive decoding.

## Practical Takeaways

- Bahdanau attention computes scores using a learned tanh layer; Luong attention uses simpler dot/general/concat scores
- Self-attention (Q, K, V from same source) is the foundation of transformer models
- Scaling by sqrt(d_k) prevents softmax saturation in dot-product attention
- Multi-head attention (8-16 heads) allows the model to attend to different relationship types simultaneously
- Causal masking (upper triangle set to -inf) is essential for autoregressive decoding
- Attention visualization reveals model interpretability: high weights on relevant source tokens are a good sign
- Local attention (Luong) reduces computation by restricting to a window, useful for very long sequences
- Multi-head attention with 8 heads and d_k = d_model / num_heads keeps the parameter count manageable

## Interview Q&A

<details class="tp-qa-card" data-qid="nlp04-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: What problem does attention solve in seq2seq models?
  </summary>
  <div class="tp-qa-answer">
    <p>Plain seq2seq models compress the entire input sequence into a single fixed-size context vector (the encoder's final hidden state). For long sequences, this creates an information bottleneck — the decoder cannot access details about earlier input tokens. Attention solves this by giving the decoder access to all encoder hidden states, weighted by relevance. The decoder computes a context vector at each step as a weighted sum of encoder states, where weights indicate which input tokens are most important for generating the next output token. This allows the model to effectively "look back" at any part of the input, dramatically improving performance on long sequences.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="nlp04-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: Explain the difference between Bahdanau and Luong attention.
  </summary>
  <div class="tp-qa-answer">
    <p>Bahdanau attention (2014) uses additive scoring: e_{tj} = v^T tanh(W1*h_j + W2*s_{t-1}). It has more parameters and is computed as a learned alignment model. The context vector is used when computing the current decoder hidden state. Luong attention (2015) offers three simpler scoring variants: dot (s_t^T * h_j), general (s_t^T * Wa * h_j), and concat (v^T tanh(Wa*[s_t; h_j])). Luong's context vector is computed after the decoder hidden state and combined as h~_t = tanh(W_c[s_t; c_t]). Luong also introduced local attention (window around predicted position). Bahdanau is more expressive but slower; Luong is simpler and faster, making it more practical for production.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="nlp04-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: Why is the dot product scaled by sqrt(d_k) in transformer attention?
  </summary>
  <div class="tp-qa-answer">
    <p>For queries and keys of dimension d_k, the dot product has mean 0 and variance d_k. When d_k is large (e.g., 512), the dot products can be very large in magnitude. Large values push the softmax function into regions where gradients are extremely small (near 0 or 1), making training difficult. Dividing by sqrt(d_k) normalizes the variance to 1, keeping softmax in regions with meaningful gradients. For d_k=512, sqrt(d_k)≈22.6. Without scaling, the variance is 512 and softmax becomes near-one-hot, losing gradient signal for all but the largest score. This scaling is the key difference from simple dot-product attention.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="nlp04-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: How does multi-head attention work?
  </summary>
  <div class="tp-qa-answer">
    <p>Multi-head attention runs h parallel attention heads (typically h=8-16). Each head projects the input using learned weight matrices W_q, W_k, W_v and computes scaled dot-product attention independently. The per-head dimension is d_k = d_model / h (e.g., d_model=512, h=8 → d_k=64). After computing each head's output (size n x d_k), they are concatenated along the feature dimension to form an n x d_model matrix, then projected through W_O (d_model x d_model). Each head can learn different attention patterns: position-based, syntactic, semantic. Multi-head attention with h=8 gives the model 8x the representational capacity of single-head attention with the same parameter cost.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="nlp04-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: What is causal masking and why is it needed?
  </summary>
  <div class="tp-qa-answer">
    <p>Causal masking (also called autoregressive masking or look-ahead masking) prevents each position from attending to future positions in the sequence. This is implemented by adding -Infinity to the upper triangle of the attention score matrix before softmax. After masking, each position can only attend to itself and preceding positions. This is essential for decoder self-attention in autoregressive generation: when predicting token t, the model must not be able to see token t+1 (which would be cheating). Without causal masking, the model could simply copy the answer from future positions. The effect is a lower-triangular attention matrix.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="nlp04-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: What are queries, keys, and values in self-attention?
  </summary>
  <div class="tp-qa-answer">
    <p>In self-attention, each input token is projected into three vectors: Query (Q), Key (K), and Value (V). The analogy comes from information retrieval: Query is what you are looking for, Key is what each item is labeled with, and Value is the actual content of each item. Attention computes how well each Query matches each Key (via dot product), then weights the Values by these match scores. For a sequence of n tokens, Q, K, V are each n x d_k matrices. The attention output for position i is a weighted sum of all V vectors, where the weight on V_j is proportional to exp(Q_i · K_j / sqrt(d_k)). This allows each position to aggregate information from all other positions.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="nlp04-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: What is local attention and when would you use it?
  </summary>
  <div class="tp-qa-answer">
    <p>Local attention (Luong et al., 2015) restricts attention to a window around a predicted alignment position p_t, rather than attending to all encoder states. For each decoder timestep t, the model predicts an aligned position p_t = S * sigmoid(v_p^T tanh(W_p * s_t)), where S is the source length. Attention is computed only within window [p_t - D, p_t + D] (D=10 is typical), with Gaussian weighting to favor positions near p_t. This reduces computation from O(T) to O(2D) where T is the full sequence length. Use local attention for very long sequences (documents, audio) where global attention is computationally prohibitive. The trade-off is potentially missing long-range dependencies beyond the window.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="nlp04-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: How do you visualize attention and what can you learn?
  </summary>
  <div class="tp-qa-answer">
    <p>Attention is visualized as a heatmap: rows = target positions, columns = source positions, cell intensity = attention weight (0-1). For machine translation, an ideal alignment looks near-diagonal (monotonic language pairs). You can learn: (1) Is the model attending to relevant source words? (e.g., when translating the French word "maison", does it attend to "house"?). (2) Is there attention to NULL or irrelevant words? (attention noise). (3) What relationships do different heads capture? (BERT's heads show syntactic, positional, and semantic patterns). (4) For long sequences, does attention spread out or concentrate? Concentrated attention on a few tokens suggests the model is using precise alignment. Tools like BertViz and Tensor2Tensor provide interactive visualization.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="nlp04-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: What is the time and memory complexity of self-attention?
  </summary>
  <div class="tp-qa-answer">
    <p>The time complexity of standard self-attention is O(n^2 * d_k) where n is the sequence length and d_k is the key dimension. The quadratic term n^2 comes from computing all pairwise dot products (n queries × n keys). Memory complexity is also O(n^2) for the attention matrix. For n=512 (standard BERT), this is manageable (262K entries). For n=8192 (long document), it becomes 67M entries — prohibitive. Sparsity approaches exist: (1) Sparse attention (fixed patterns) reduces to O(n * sqrt(n)). (2) Linformer projects keys/values to O(n*k) with k << n. (3) Reformer uses locality-sensitive hashing for O(n log n). (4) Longformer uses sliding window attention. Transformers with 512-1024 token limits use full self-attention; longer sequences require sparse variants.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="nlp04-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: How does attention help with long-range dependencies in sequences?
  </summary>
  <div class="tp-qa-answer">
    <p>RNNs process sequences left-to-right, with information flowing through a chain of hidden states. For dependencies 50+ tokens apart, the signal degrades due to gradient issues. Attention creates a direct connection between any two positions regardless of distance. The attention weight between position i and j is computed directly from their representations, with O(1) path length. This means the model can learn "The man who lived next door... he" — the pronoun "he" can directly attend to "man" even if they are 100 tokens apart. In RNNs, this requires the hidden state to carry information through 100 steps. Empirical results show attention-based models significantly outperform RNNs on tasks requiring long-range dependencies like coreference resolution and document-level sentiment.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

Q1: Which attention mechanism was introduced first for neural machine translation?
a) Self-attention
b) Bahdanau attention
c) Luong attention
d) Multi-head attention
<details class="tp-qa-card" data-qid="nlp04-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Bahdanau attention</strong></p><p>Bahdanau et al. (2014) introduced additive attention for neural machine translation. Luong et al. (2015) and self-attention (Vaswani et al. 2017) came later.</p></div></details>

Q2: What is the purpose of scaling by sqrt(d_k) in scaled dot-product attention?
a) Increase model capacity
b) Prevent softmax saturation
c) Reduce computation
d) Add non-linearity
<details class="tp-qa-card" data-qid="nlp04-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Prevent softmax saturation</strong></p><p>Scaling by sqrt(d_k) normalizes the variance of dot products to 1, preventing large values that would cause softmax to saturate with near-zero gradients.</p></div></details>

Q3: How many attention heads does BERT-base use?
a) 4
b) 8
c) 12
d) 16
<details class="tp-qa-card" data-qid="nlp04-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) 12</strong></p><p>BERT-base has 12 attention heads with d_model=768 (d_k=64 per head). BERT-large has 16 heads with d_model=1024 (d_k=64).</p></div></details>

Q4: What does the upper triangle of a causal attention mask contain?
a) Zeros
b) Ones
c) -Infinity
d) NaN
<details class="tp-qa-card" data-qid="nlp04-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) -Infinity</strong></p><p>The upper triangle is set to -Infinity so that after softmax those positions have zero attention weight, preventing tokens from attending to future tokens.</p></div></details>

Q5: What is the time complexity of standard self-attention?
a) O(n)
b) O(n log n)
c) O(n^2)
d) O(n^3)
<details class="tp-qa-card" data-qid="nlp04-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) O(n^2)</strong></p><p>Self-attention computes pairwise dot products for all n query-key pairs, resulting in O(n^2 * d_k) time and O(n^2) memory.</p></div></details>

## Exercises

**Easy** — Implement Bahdanau attention on a toy seq2seq model for reversing sequences (input: [1,2,3], target: [3,2,1]). Visualize the attention weights.

**Easy** — Implement scaled dot-product attention from scratch. Compare the softmax output with and without sqrt(d_k) scaling for d_k=512.

**Medium** — Build a multi-head attention module with h=4 heads. On a synthetic sequence of 10 tokens, analyze what attention patterns each head learns.

**Medium** — Implement causal masking for decoder self-attention. Verify that position i has zero attention weight for all positions j > i.

**Hard** — Implement local attention (Luong style) with Gaussian windowing. Compare translation BLEU score and inference speed against global attention on the IWSLT dataset.

---

> **Previous**: [Sequence Models](03-sequence-models.md) | **Next**: [Transformer Architecture](05-transformer-architecture.md)
