# Transformer Architecture — Encoder-Decoder, Positional Encoding, Layer Norm

## Learning Objectives

| LO# | Description |
|-----|-------------|
| LO1 | Explain the full transformer encoder-decoder architecture with all sub-components |
| LO2 | Implement sinusoidal and learned positional encodings |
| LO3 | Apply layer normalization with learnable affine parameters |
| LO4 | Build the feed-forward network with ReLU/GELU activation and expansion factor |
| LO5 | Implement residual connections with pre-norm and post-norm variants |
| LO6 | Distinguish encoder-only, decoder-only, and encoder-decoder transformer variants |

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 5.1 | Architecture Overview | Encoder stack, decoder stack, N=6 layers |
| 5.2 | Positional Encoding | Sinusoidal PE, learned PE, relative position biases |
| 5.3 | Layer Normalization | Mean/variance normalization, affine parameters, pre/post-norm |
| 5.4 | Feed-Forward Network | Two-layer MLP with ReLU/GELU, expansion factor 4 |
| 5.5 | Residual Connections | Skip connections with pre-norm and post-norm |
| 5.6 | Transformer Variants | BERT (encoder-only), GPT (decoder-only), T5 (encoder-decoder) |

## Chapter Roadmap

```mermaid
flowchart TB
    subgraph Encoder
        A[Input Tokens] --> B[Token Embeddings]
        B --> C[+ Positional Encoding]
        C --> D[Multi-Head Self-Attention]
        D --> E[+ Residual & LayerNorm]
        E --> F[Feed-Forward Network]
        F --> G[+ Residual & LayerNorm]
        G --> H[— N layers]
    end
    subgraph Decoder
        I[Target Tokens] --> J[Token Embeddings]
        J --> K[+ Positional Encoding]
        K --> L[Masked Multi-Head Self-Attention]
        L --> M[+ Residual & LayerNorm]
        M --> N[Cross-Attention over Encoder Output]
        N --> O[+ Residual & LayerNorm]
        O --> P[Feed-Forward Network]
        P --> Q[+ Residual & LayerNorm]
        Q --> R[— N layers]
    end
    H --> N
    R --> S[Linear + Softmax]
```

## 5.1 Architecture Overview

The Transformer (Vaswani et al., 2017) eschews recurrence entirely, using attention as the sole operation. The encoder has N=6 identical layers; the decoder has N=6 identical layers.

```typescript
interface TransformerConfig {
  vocabSize: number;
  dModel: number;     // 512 in base, 768 in BERT-base
  numHeads: number;   // 8 in base, 12 in BERT-base
  dff: number;        // 2048 in base (4 * dModel)
  numLayers: number;  // 6 in base, 12 in BERT-base
  maxSeqLen: number;  // 512
  dropout: number;    // 0.1
}

class TransformerBlock {
  private selfAttention: MultiHeadAttention;
  private crossAttention: MultiHeadAttention;
  private ffn: FeedForwardNetwork;
  private norm1: LayerNorm;
  private norm2: LayerNorm;
  private norm3: LayerNorm;
  private dropout: number;
  private dModel: number;

  constructor(config: TransformerConfig) {
    this.dModel = config.dModel;
    this.dropout = config.dropout;
    this.selfAttention = new MultiHeadAttention(config.dModel, config.numHeads);
    this.crossAttention = new MultiHeadAttention(config.dModel, config.numHeads);
    this.ffn = new FeedForwardNetwork(config.dModel, config.dff);
    this.norm1 = new LayerNorm(config.dModel);
    this.norm2 = new LayerNorm(config.dModel);
    this.norm3 = new LayerNorm(config.dModel);
  }

  // Post-norm variant (original Transformer)
  encoderForward(x: number[][]): number[][] {
    // Self-attention with residual
    const attnOut = this.selfAttention.forward(x).output;
    const x1 = this.applyResidual(x, attnOut);
    const x1Norm = this.norm1.forward(x1);

    // FFN with residual
    const ffnOut = this.ffn.forward(x1Norm);
    const x2 = this.applyResidual(x1, ffnOut);
    return this.norm2.forward(x2);
  }

  decoderForward(x: number[][], encoderOutput: number[][]): number[][] {
    // Masked self-attention
    const selfOut = this.selfAttention.forward(x).output;
    const x1 = this.applyResidual(x, selfOut);
    const x1Norm = this.norm1.forward(x1);

    // Cross-attention over encoder output
    const crossOut = this.crossAttention.forward(x1Norm, encoderOutput).output;
    const x2 = this.applyResidual(x1Norm, crossOut);
    const x2Norm = this.norm2.forward(x2);

    // FFN
    const ffnOut = this.ffn.forward(x2Norm);
    const x3 = this.applyResidual(x2Norm, ffnOut);
    return this.norm3.forward(x3);
  }

  private applyResidual(input: number[][], sublayer: number[][]): number[][] {
    return input.map((row, i) => {
      const dropped = sublayer[i].map(
        (v) => (Math.random() < this.dropout ? 0 : v / (1 - this.dropout))
      );
      return row.map((v, j) => v + dropped[j]);
    });
  }
}
```

The encoder processes the input sequence; the decoder generates output autoregressively. Cross-attention in the decoder queries the encoder's final output using the decoder's self-attention output as the query.

---

## 5.2 Positional Encoding

Since self-attention is permutation-invariant (no notion of order), positional encoding injects sequence position information.

```typescript
class SinusoidalPositionalEncoding {
  private dModel: number;
  private maxLen: number;
  private encoding: number[][];

  constructor(dModel: number, maxLen: number = 512) {
    this.dModel = dModel;
    this.maxLen = maxLen;
    this.encoding = this.computeEncoding();
  }

  private computeEncoding(): number[][] {
    const encoding: number[][] = [];
    for (let pos = 0; pos < this.maxLen; pos++) {
      const pe = new Array(this.dModel).fill(0);
      for (let i = 0; i < this.dModel; i += 2) {
        const divTerm = Math.pow(10000, (2 * i) / this.dModel);
        pe[i] = Math.sin(pos / divTerm);
        if (i + 1 < this.dModel) {
          pe[i + 1] = Math.cos(pos / divTerm);
        }
      }
      encoding.push(pe);
    }
    return encoding;
  }

  addPositionalInfo(embeddings: number[][]): number[][] {
    return embeddings.map((emb, pos) =>
      emb.map((v, i) => v + (pos < this.maxLen ? this.encoding[pos][i] : 0))
    );
  }

  getEncoding(pos: number): number[] {
    return [...this.encoding[pos]];
  }
}
```

**Properties of sinusoidal PE**:
- Each dimension corresponds to a sinusoid with frequency 1/10000^(2i/d_model)
- Lower dimensions (small i) encode high-frequency position information
- Higher dimensions encode low-frequency patterns
- The encoding for position pos+k can be represented as a linear function of the encoding for position pos, allowing the model to learn relative positions

```typescript
class LearnedPositionalEncoding {
  private dModel: number;
  private maxLen: number;
  private embeddings: number[][];

  constructor(dModel: number, maxLen: number = 512) {
    this.dModel = dModel;
    this.maxLen = maxLen;
    const scale = Math.sqrt(2 / dModel);
    this.embeddings = Array.from({ length: maxLen }, () =>
      Array.from({ length: dModel }, () => (Math.random() * 2 - 1) * scale)
    );
  }

  addPositionalInfo(tokenEmbeddings: number[][]): number[][] {
    return tokenEmbeddings.map((emb, pos) =>
      emb.map((v, i) => v + this.embeddings[pos][i])
    );
  }

  getEmbedding(pos: number): number[] {
    return [...this.embeddings[pos]];
  }
}
```

**Relative position encoding** (used in Transformer-XL, T5) encodes the offset between positions rather than absolute positions. This generalizes better to sequence lengths unseen during training.

---

## 5.3 Layer Normalization

Layer normalization normalizes activations across the feature dimension, stabilizing training and reducing sensitivity to hyperparameters.

```typescript
class LayerNorm {
  private dModel: number;
  private gamma: number[]; // scale
  private beta: number[];  // shift
  private eps: number;

  constructor(dModel: number, eps: number = 1e-6) {
    this.dModel = dModel;
    this.eps = eps;
    this.gamma = new Array(dModel).fill(1);
    this.beta = new Array(dModel).fill(0);
  }

  forward(x: number[][]): number[][] {
    return x.map((row) => {
      // Compute mean and variance
      const mean = row.reduce((s, v) => s + v, 0) / this.dModel;
      const variance =
        row.reduce((s, v) => s + (v - mean) ** 2, 0) / this.dModel;

      // Normalize, scale, shift
      return row.map(
        (v, i) => this.gamma[i] * ((v - mean) / Math.sqrt(variance + this.eps)) + this.beta[i]
      );
    });
  }

  // Compute gradients for backprop
  backward(
    x: number[][],
    dout: number[][]
  ): {
    dx: number[][];
    dgamma: number[];
    dbeta: number[];
  } {
    const dgamma = new Array(this.dModel).fill(0);
    const dbeta = new Array(this.dModel).fill(0);
    const dx: number[][] = [];

    for (let b = 0; b < x.length; b++) {
      const row = x[b];
      const drow = dout[b];
      const mean = row.reduce((s, v) => s + v, 0) / this.dModel;
      const variance =
        row.reduce((s, v) => s + (v - mean) ** 2, 0) / this.dModel;
      const stdInv = 1 / Math.sqrt(variance + this.eps);

      const xhat = row.map((v) => (v - mean) * stdInv);

      // Gradient for gamma and beta
      for (let i = 0; i < this.dModel; i++) {
        dgamma[i] += drow[i] * xhat[i];
        dbeta[i] += drow[i];
      }

      // Gradient for input
      const dxhat = drow.map((d, i) => d * this.gamma[i]);
      const dxhatSum = dxhat.reduce((s, v) => s + v, 0);
      const dxhatXhatSum = dxhat.reduce((s, v, i) => s + v * xhat[i], 0);

      const dxRow = new Array(this.dModel).fill(0);
      for (let i = 0; i < this.dModel; i++) {
        dxRow[i] =
          (1 / x.length) *
          stdInv *
          (dxhatSum - dxhat[i] - xhat[i] * dxhatXhatSum);
      }
      dx.push(dxRow);
    }

    return { dx, dgamma, dbeta };
  }
}
```

**Pre-norm vs post-norm**: In the original Transformer (post-norm), residual connections flow around the sublayer, followed by layer norm: output = LayerNorm(x + Sublayer(x)). GPT and modern implementations use pre-norm: output = x + Sublayer(LayerNorm(x)). Pre-norm stabilizes training at higher learning rates and is more common in modern architectures.

---

## 5.4 Feed-Forward Network

The FFN applies two linear transformations with a ReLU (or GELU) activation in between. The inner dimension d_ff is typically 4x d_model.

```typescript
class FeedForwardNetwork {
  private dModel: number;
  private dff: number;

  // W1: (dff x dModel), W2: (dModel x dff)
  private W1: number[][];
  private b1: number[];
  private W2: number[][];
  private b2: number[];

  constructor(dModel: number, dff: number) {
    this.dModel = dModel;
    this.dff = dff;

    const scale1 = Math.sqrt(2 / (dModel + dff));
    const scale2 = Math.sqrt(2 / (dff + dModel));

    this.W1 = Array.from({ length: dff }, () =>
      Array.from({ length: dModel }, () => (Math.random() * 2 - 1) * scale1)
    );
    this.b1 = new Array(dff).fill(0);
    this.W2 = Array.from({ length: dModel }, () =>
      Array.from({ length: dff }, () => (Math.random() * 2 - 1) * scale2)
    );
    this.b2 = new Array(dModel).fill(0);
  }

  private relu(x: number): number {
    return Math.max(0, x);
  }

  // GELU approximation: 0.5 * x * (1 + tanh(sqrt(2/pi) * (x + 0.044715 * x^3)))
  private gelu(x: number): number {
    const sqrt2pi = Math.sqrt(2 / Math.PI);
    return 0.5 * x * (1 + Math.tanh(sqrt2pi * (x + 0.044715 * Math.pow(x, 3))));
  }

  forward(x: number[][]): number[][] {
    return x.map((row) => {
      // First linear: dModel -> dff
      const hidden = this.W1.map((wRow, i) => {
        let sum = 0;
        for (let j = 0; j < this.dModel; j++) sum += wRow[j] * row[j];
        return this.gelu(sum + this.b1[i]);
      });

      // Second linear: dff -> dModel
      const output = this.W2.map((wRow) => {
        let sum = 0;
        for (let j = 0; j < this.dff; j++) sum += wRow[j] * hidden[j];
        return sum;
      });

      return output.map((v, i) => v + this.b2[i]);
    });
  }
}
```

The FFN operates independently on each position (same weights, different inputs). It captures non-linear feature interactions that self-attention misses. The expansion factor of 4 means the FFN contains ~2/3 of the model's parameters.

---

## 5.5 Residual Connections

Residual connections (skip connections) add the input of a sublayer to its output. This creates a direct gradient highway, allowing training of very deep networks.

```typescript
class ResidualConnection {
  private dModel: number;
  private dropout: number;

  constructor(dModel: number, dropout: number = 0.1) {
    this.dModel = dModel;
    this.dropout = dropout;
  }

  // Post-norm: LayerNorm(x + Sublayer(x))
  postNorm(
    x: number[][],
    sublayerOutput: number[][],
    norm: LayerNorm
  ): number[][] {
    const residual = x.map((row, i) =>
      row.map((v, j) => v + this.dropoutForward(sublayerOutput[i][j]))
    );
    return norm.forward(residual);
  }

  // Pre-norm: x + Sublayer(LayerNorm(x))
  preNorm(
    x: number[][],
    norm: LayerNorm,
    sublayer: (input: number[][]) => number[][]
  ): number[][] {
    const normalized = norm.forward(x);
    const sublayerOut = sublayer(normalized);
    return x.map((row, i) =>
      row.map((v, j) => v + this.dropoutForward(sublayerOut[i][j]))
    );
  }

  private dropoutForward(v: number): number {
    if (Math.random() < this.dropout) return 0;
    return v / (1 - this.dropout);
  }
}
```

**Why residuals matter**: In a 12-layer transformer encoder, without residual connections, the gradient at layer 1 would be ∏_{l=2}^{12} (I + d(Sublayer_l)/dx). Each sublayer's Jacobian is close to zero initially, so the product vanishes. With residuals, the Jacobian is I + d(Sublayer_l)/dx, and the product asymptotically approaches I (identity), preserving gradient flow.

---

## 5.6 Transformer Variants

Three main architectural families exist. Each removes components suited to its task.

```typescript
// Encoder-only (BERT, RoBERTa, ALBERT): bidirectional context
class EncoderOnlyTransformer {
  private layers: TransformerBlock[];
  private embedding: TokenEmbedding;
  private posEncoding: LearnedPositionalEncoding;
  private finalNorm: LayerNorm;

  constructor(config: TransformerConfig) {
    this.embedding = new TokenEmbedding(config.vocabSize, config.dModel);
    this.posEncoding = new LearnedPositionalEncoding(config.dModel, config.maxSeqLen);
    this.layers = Array.from(
      { length: config.numLayers },
      () => new TransformerBlock(config)
    );
    this.finalNorm = new LayerNorm(config.dModel);
  }

  forward(inputIds: number[][]): number[][] {
    let x = inputIds.map((seq) => this.embedding.forward(seq));
    x = this.posEncoding.addPositionalInfo(x);
    for (const layer of this.layers) {
      x = layer.encoderForward(x);
    }
    return this.finalNorm.forward(x);
  }
}

// Decoder-only (GPT, LLaMA, Mistral): left-to-right autoregressive
class DecoderOnlyTransformer {
  private layers: TransformerBlock[];
  private embedding: TokenEmbedding;
  private posEncoding: SinusoidalPositionalEncoding;
  private finalNorm: LayerNorm;
  private lmHead: number[][]; // projection to vocab

  constructor(config: TransformerConfig) {
    this.embedding = new TokenEmbedding(config.vocabSize, config.dModel);
    this.posEncoding = new SinusoidalPositionalEncoding(config.dModel, config.maxSeqLen);
    this.layers = Array.from(
      { length: config.numLayers },
      () => new TransformerBlock(config)
    );
    this.finalNorm = new LayerNorm(config.dModel);
    this.lmHead = Array.from({ length: config.vocabSize }, () =>
      Array.from({ length: config.dModel }, () => (Math.random() - 0.5) * 0.1)
    );
  }

  forward(inputIds: number[][]): number[][] {
    let x = inputIds.map((seq) => this.embedding.forward(seq));
    x = this.posEncoding.addPositionalInfo(x);
    for (const layer of this.layers) {
      x = layer.decoderForward(x, []); // No encoder output
    }
    x = this.finalNorm.forward(x);

    // Project to vocabulary
    return x.map((seq) =>
      this.lmHead.map((row) =>
        row.reduce((s, w, i) => s + w * seq[i], 0)
      )
    );
  }
}

// Encoder-Decoder (T5, BART): full seq2seq
class EncoderDecoderTransformer {
  private encoder: EncoderOnlyTransformer;
  private decoder: DecoderOnlyTransformer;

  constructor(config: TransformerConfig) {
    this.encoder = new EncoderOnlyTransformer(config);
    this.decoder = new DecoderOnlyTransformer(config);
  }

  forward(sourceIds: number[][], targetIds: number[][]): number[][] {
    const encoderOutput = this.encoder.forward(sourceIds);
    // Decoder uses encoder output for cross-attention
    return this.decoder.forward(targetIds, encoderOutput);
  }
}

class TokenEmbedding {
  private vocabSize: number;
  private dModel: number;
  private embeddings: number[][];

  constructor(vocabSize: number, dModel: number) {
    this.vocabSize = vocabSize;
    this.dModel = dModel;
    const scale = Math.sqrt(2 / dModel);
    this.embeddings = Array.from({ length: vocabSize }, () =>
      Array.from({ length: dModel }, () => (Math.random() * 2 - 1) * scale)
    );
  }

  forward(tokenIds: number[]): number[][] {
    return tokenIds.map((id) => [...this.embeddings[id]]);
  }
}
```

**Model comparison**:
- BERT (encoder-only): 340M params, 12/24 layers, bidirectional
- GPT-3 (decoder-only): 175B params, 96 layers, autoregressive
- T5 (encoder-decoder): 11B params, 24+24 layers, text-to-text

---

## Summary

The Transformer architecture replaced recurrent networks with parallelizable self-attention for sequence processing. The encoder stacks identical layers with multi-head self-attention and feed-forward networks, while the decoder adds cross-attention to encoder outputs. Positional encoding injects sequence order information using sinusoidal functions or learned embeddings. Layer normalization stabilizes training by normalizing across feature dimensions. The feed-forward network applies two linear transformations with a ReLU activation, expanding and contracting the representation dimensionality. Residual connections with pre-normalization improve gradient flow in deep stacks. Transformer variants include encoder-only (BERT), decoder-only (GPT), and encoder-decoder (T5) architectures for different task families.

## Practical Takeaways

- The transformer replaces recurrence entirely with attention, enabling parallel computation and direct long-range connections
- Positional encoding (sinusoidal or learned) is essential because self-attention is permutation-invariant
- Layer normalization stabilizes training; pre-norm (GPT style) is more stable than post-norm (original Transformer)
- The FFN expansion factor 4— means ~2/3 of parameters are in FFN layers, not attention layers
- Residual connections with dropout (0.1) are critical for training deep (12-96 layer) transformers
- Encoder-only models (BERT) excel at understanding tasks; decoder-only models (GPT) excel at generation
- The O(n^2) self-attention complexity limits context length; efficient attention variants are active research
- Pre-trained transformers with fine-tuning dominate nearly every NLP benchmark

## Interview Q&A

<details class="tp-qa-card" data-qid="nlp05-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: Why does the transformer use sinusoidal positional encoding instead of a learned embedding?
  </summary>
  <div class="tp-qa-answer">
    <p>The sinusoidal encoding has several advantages: (1) It can extrapolate to sequence lengths not seen during training — for any position pos+k, the encoding is a linear function of position pos, allowing the model to learn relative position patterns that generalize. (2) It doesn't require learning parameters, reducing model size. (3) The varying frequencies across dimensions (low dimensions encode high-frequency patterns, high dimensions encode low-frequency patterns) give the model both fine-grained and coarse positional information. However, many modern models (BERT, GPT-2) use learned positional embeddings because they perform slightly better when max sequence length is fixed and known in advance (typically 512).</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="nlp05-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: Explain the difference between pre-norm and post-norm in transformer layers.
  </summary>
  <div class="tp-qa-answer">
    <p>Post-norm (original Transformer): output = LayerNorm(x + Sublayer(x)). Layer norm is applied after the residual addition. Pre-norm (GPT, modern transformers): output = x + Sublayer(LayerNorm(x)). Layer norm is applied before each sublayer. Pre-norm has several benefits: (1) More stable training at higher learning rates (LR can be 2-4x higher). (2) Warmup steps can be reduced or eliminated. (3) The final layer output doesn't go through a norm, preserving scale. (4) Gradient flow through the residual path is closer to identity. Post-norm can achieve slightly better final performance with optimal hyperparameters but is harder to tune. Most modern implementations (GPT, LLaMA, Mistral) use pre-norm.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="nlp05-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: What is the role of the feed-forward network in transformer layers?
  </summary>
  <div class="tp-qa-answer">
    <p>The FFN applies two linear transformations with a ReLU/GELU activation: FFN(x) = W2 * GELU(W1 * x + b1) + b2. The inner dimension d_ff = 4*d_model (2048 for d_model=512). The FFN (1) introduces non-linear transformations that self-attention lacks (attention is purely linear in the value dimension). (2) Allows each position to independently process information aggregated by attention. (3) Contains ~2/3 of all model parameters. Without FFN, the transformer would be a purely linear model in the token embedding space, seriously limiting representational power. Different FFN neurons seem to specialize: some activate for specific syntactic patterns, others for semantic features.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="nlp05-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: Why is the transformer more parallelizable than RNNs?
  </summary>
  <div class="tp-qa-answer">
    <p>RNNs process sequences one token at a time — the computation of h_t depends on h_{t-1}, creating a sequential dependency that prevents parallelization across timesteps. Training a 100-token sequence requires 100 sequential operations. Transformers compute attention between all pairs of positions simultaneously using matrix multiplications: Q, K, V are computed in parallel via X * W_q, X * W_k, X * W_v (all tokens at once), and attention scores = softmax(Q * K^T / sqrt(d_k)) are a single matrix operation. This reduces the sequential operation path to O(1) (a fixed number of matrix multiplies per layer), regardless of sequence length. This parallelism is why transformers can be trained efficiently on GPU hardware despite their O(n^2) per-layer complexity.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="nlp05-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: What is the difference between encoder-only, decoder-only, and encoder-decoder transformers?
  </summary>
  <div class="tp-qa-answer">
    <p>Encoder-only (BERT, RoBERTa): Uses the encoder stack with bidirectional self-attention (no masking). Outputs contextualized token representations. Best for understanding tasks: classification, NER, QA, sentence similarity. Decoder-only (GPT, LLaMA): Uses the decoder stack with causal masking (each token can only attend to itself and previous tokens). Generates text autoregressively. Best for generation tasks: language modeling, story generation, code completion. Encoder-decoder (T5, BART): Full stack with encoder (bidirectional) and decoder (causal with cross-attention). Best for seq2seq tasks: translation, summarization, text-to-text problems. The choice depends on whether the task requires understanding (encoder-only), generation (decoder-only), or both with input-output transformation (encoder-decoder).</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="nlp05-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: How many parameters are in each component of a transformer layer?
  </summary>
  <div class="tp-qa-answer">
    <p>For a layer with d_model=512, h=8 heads (d_k=64), d_ff=2048: Multi-head attention: 4 * d_model^2 = 4 * 512^2 = 1,048,576 parameters (W_q, W_k, W_v, W_O each 512x512 = 262,144). Layer norm: 2 * d_model = 1,024 (gamma + beta). FFN: 2 * d_model * d_ff = 2 * 512 * 2048 = 2,097,152 (W1: 2048x512, W2: 512x2048). Plus biases: 2048 + 512 = 2,560. Total per layer: ~3.15M. Attention has ~33% of parameters, FFN has ~67%. For a 6-layer base Transformer: ~19M parameters. For BERT-base (12 layers, d_model=768, d_ff=3072): ~110M parameters. GPT-3 (96 layers, d_model=12288, d_ff=49152): ~175B parameters.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="nlp05-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: What is label smoothing and why is it used in transformer training?
  </summary>
  <div class="tp-qa-answer">
    <p>Label smoothing replaces hard targets (0 or 1) with softened targets: y_smooth = (1 - epsilon) * y_hard + epsilon / V where V is vocabulary size and epsilon=0.1 typically. For example, the correct word "chat" would have target 0.9 instead of 1.0, and all other V-1 words get 0.1/V instead of 0. This prevents the model from becoming over-confident, which improves generalization and calibration. In transformer training, label smoothing of 0.1 consistently improves BLEU scores by 0.5-1.0 points and is standard in the Transformer paper. Without it, the model's softmax outputs become too sharp (near one-hot), and the model doesn't learn to assign nonzero probability to plausible alternatives.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="nlp05-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: How does the transformer handle variable-length sequences?
  </summary>
  <div class="tp-qa-answer">
    <p>Transformers handle variable-length sequences through: (1) Padding — sequences shorter than max_len are padded with a special <pad> token. (2) Attention masking — padding positions are masked out (set to -Infinity before softmax) so they don't contribute to attention. (3) Bucketing — sequences of similar lengths are grouped into batches to minimize padding waste. (4) The learned positional encoding (if used) must be sized for the maximum expected sequence length. Sinusoidal encoding (T5) can extrapolate beyond training lengths. In production, sequences are typically clipped or truncated to a maximum length (512 for BERT, 2048 for GPT-3, 4096 for GPT-4). Packing multiple sequences into one training example is also common for efficiency.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="nlp05-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: What is cross-attention in the transformer decoder?
  </summary>
  <div class="tp-qa-answer">
    <p>Cross-attention allows the decoder to attend to the encoder's output. In the decoder's cross-attention sublayer: Query comes from the decoder's previous self-attention output, while Key and Value come from the encoder's final output. This lets each decoder position attend to all input positions and selectively retrieve information. For example, in machine translation, when generating the French word "maison", the decoder queries the English sentence and attends most to "house". Cross-attention is the key difference between encoder and decoder layers: encoder layers use only self-attention, decoder layers use masked self-attention followed by cross-attention. Cross-attention has no causal mask — the decoder can attend to any encoder position regardless of decoding step.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="nlp05-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: What is the "Attention is All You Need" paper's main contribution?
  </summary>
  <div class="tp-qa-answer">
    <p>The paper (Vaswani et al., 2017) proposed the Transformer, the first sequence transduction model relying entirely on attention, with no recurrence or convolution. Key contributions: (1) Scaled dot-product attention with softmax normalization. (2) Multi-head attention allowing the model to attend to information from different representation subspaces. (3) Positional encoding for sequence order. (4) The complete encoder-decoder architecture with residual connections and layer normalization. (5) Demonstrating that the Transformer trains significantly faster (3.5 days on 8 GPUs) while achieving 28.4 BLEU on WMT 2014 English-to-German translation, and 41.8 on English-to-French — the best results at the time. This paper is the foundation of virtually all modern NLP systems (BERT, GPT, T5, XLNet, etc.).</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

Q1: What is the typical expansion factor of the FFN inner dimension in transformers?
a) 2—
b) 3—
c) 4—
d) 8—
<details class="tp-qa-card" data-qid="nlp05-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) 4—</strong></p><p>The FFN inner dimension d_ff is typically 4— d_model. For d_model=512, d_ff=2048. For d_model=768, d_ff=3072.</p></div></details>

Q2: How many layers does BERT-base have?
a) 6
b) 8
c) 12
d) 24
<details class="tp-qa-card" data-qid="nlp05-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) 12</strong></p><p>BERT-base has 12 transformer layers (encoder blocks), with d_model=768 and 12 attention heads. BERT-large has 24 layers.</p></div></details>

Q3: Which normalization does GPT use?
a) Batch norm
b) Layer norm (post-norm)
c) Layer norm (pre-norm)
d) Group norm
<details class="tp-qa-card" data-qid="nlp05-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Layer norm (pre-norm)</strong></p><p>GPT and most modern decoder-only transformers (GPT-2, GPT-3, LLaMA) use pre-norm: layer normalization before each sublayer.</p></div></details>

Q4: What is the time complexity of one transformer encoder layer?
a) O(n)
b) O(n^2)
c) O(n^2 * d)
d) O(n * d^2)
<details class="tp-qa-card" data-qid="nlp05-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) O(n^2 * d) or more precisely O(n^2 * d)</strong></p><p>Self-attention is O(n^2 * d_k) and FFN is O(n * d_model * d_ff). For n > d_k (typical), attention dominates with O(n^2 * d_k). More precisely the total is O(n^2 * d_k + n * d_model * d_ff).</p></div></details>

Q5: What property of self-attention necessitates positional encoding?
a) Non-linearity
b) Permutation invariance
c) Quadratic complexity
d) Layer-dependent scale
<details class="tp-qa-card" data-qid="nlp05-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Permutation invariance</strong></p><p>Self-attention computes weighted sums over all positions; shuffling the input tokens produces the same output per token (just permuted), so positional encoding is needed to inject order information.</p></div></details>

## Exercises

**Easy** — Implement sinusoidal positional encoding. Verify that the dot product of PE(pos) and PE(pos+k) depends primarily on k, not pos (relative position property).

**Easy** — Compute the parameter count of one transformer layer with d_model=512, h=8, d_ff=2048. Confirm attention has 33% of parameters.

**Medium** — Build a single encoder layer from scratch (self-attention + FFN + residual + layer norm). Test it on a random sequence of 10 tokens, d_model=64.

**Medium** — Implement both pre-norm and post-norm variants. Train each on a small language modeling task and compare training loss curves.

**Hard** — Implement a decoder-only transformer (like GPT-2 small) with 6 layers, d_model=512, 8 heads. Train it on a text corpus (e.g., Shakespeare). Implement temperature sampling and top-k sampling for generation.

---

> **Previous**: [Attention Mechanism](04-attention-mechanism.md) | **Next**: [BERT & Fine-Tuning](06-bert-and-fine-tuning.md)
