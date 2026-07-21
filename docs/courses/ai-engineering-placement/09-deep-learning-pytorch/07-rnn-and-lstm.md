# RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand the recurrent computation and hidden state in RNNs |
| LO2 | Identify the vanishing gradient problem in RNNs and how LSTM/GRU fix it |
| LO3 | Implement LSTM and GRU cells in PyTorch |
| LO4 | Build bidirectional RNNs for sequence classification |
| LO5 | Implement seq2seq models with encoder-decoder architecture |
| LO6 | Apply teacher forcing, packed sequences, and gradient clipping for training |

## Introduction

09-deep-learning-pytorch is a fundamental concept in AI engineering. This chapter covers the core principles, practical implementations, and interview preparation for mastering this topic.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures
## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 7.1 | Vanilla RNN | Recurrent computation, hidden state, backprop through time |
| 7.2 | Vanishing Gradient | Gradient decay in long sequences, tanh saturation |
| 7.3 | LSTM | Forget gate, input gate, output gate, cell state |
| 7.4 | GRU | Update gate, reset gate, fewer parameters than LSTM |
| 7.5 | Bidirectional RNNs | Forward and backward passes, context fusion |
| 7.6 | Seq2Seq and Teacher Forcing | Encoder-decoder, scheduled sampling, attention |

## Chapter Roadmap

```mermaid
flowchart LR
    subgraph RNN_Cell[RNN Cell]
        A[Input x_t] --> B[Hidden h_t]
        C[Previous h_{t-1}] --> B
    end
    B --> D[BPTT]
    D --> E{Vanishing Gradient?}
    E -->|Yes| F[LSTM / GRU]
    E -->|No| G[Bidirectional?]
    G -->|Yes| H[BiRNN]
    G -->|No| I[Seq2Seq]
    H --> I
    I --> J[Encoder]
    J --> K[Decoder]
    K --> L[Teacher Forcing]
    L --> M[Output Sequence]
```

## 7.1 Vanilla RNN

A vanilla RNN processes sequences by maintaining a hidden state that is updated at each time step.

```python
import torch
import torch.nn as nn
import torch.optim as optim
from torch.nn.utils.rnn import pack_padded_sequence, pad_packed_sequence
from typing import Optional, Tuple


class VanillaRNN(nn.Module):
    def __init__(self, input_size: int, hidden_size: int, num_layers: int = 1):
        super().__init__()
        self.hidden_size = hidden_size
        self.num_layers = num_layers
        self.i2h = nn.Linear(input_size + hidden_size, hidden_size)
        self.i2o = nn.Linear(input_size + hidden_size, hidden_size)
        self.tanh = nn.Tanh()

    def forward(self, x: torch.Tensor, hidden: Optional[torch.Tensor] = None
                ) -> Tuple[torch.Tensor, torch.Tensor]:
        batch_size, seq_len, _ = x.shape
        if hidden is None:
            hidden = torch.zeros(self.num_layers, batch_size, self.hidden_size)
        outputs = []
        for t in range(seq_len):
            combined = torch.cat((x[:, t, :], hidden[-1]), dim=1)
            hidden_state = self.tanh(self.i2h(combined))
            output = self.i2o(combined)
            outputs.append(output.unsqueeze(1))
            hidden = hidden_state.unsqueeze(0)
        return torch.cat(outputs, dim=1), hidden


class PyTorchRNN(nn.Module):
    def __init__(self, input_size: int, hidden_size: int, num_layers: int = 1,
                 batch_first: bool = True, bidirectional: bool = False):
        super().__init__()
        self.rnn = nn.RNN(input_size, hidden_size, num_layers,
                          batch_first=batch_first,
                          bidirectional=bidirectional,
                          nonlinearity="tanh")

    def forward(self, x: torch.Tensor, hidden: Optional[torch.Tensor] = None
                ) -> Tuple[torch.Tensor, torch.Tensor]:
        return self.rnn(x, hidden)


rnn = PyTorchRNN(input_size=10, hidden_size=20, num_layers=2)
x = torch.randn(4, 15, 10)  # batch=4, seq_len=15, features=10
output, hidden = rnn(x)
print(f"RNN output shape: {output.shape}")  # (4, 15, 20)
print(f"RNN hidden shape: {hidden.shape}")  # (2, 4, 20)
```

**Backpropagation Through Time (BPTT)** unrolls the RNN across all time steps and computes gradients by backpropagating through the unrolled graph.

```python
class BPTTDemo:
    @staticmethod
    def compute_gradients(rnn_model: nn.Module, x: torch.Tensor, y: torch.Tensor,
                          loss_fn: nn.Module):
        output, _ = rnn_model(x)
        loss = loss_fn(output, y)
        loss.backward()
        total_norm = 0
        for p in rnn_model.parameters():
            if p.grad is not None:
                param_norm = p.grad.data.norm(2)
                total_norm += param_norm.item() ** 2
        return loss.item(), total_norm ** 0.5
```

---

## 7.2 Vanishing Gradient in RNNs

The vanishing gradient problem is severe in vanilla RNNs because repeated multiplication by the recurrent weight matrix (through the chain rule) causes gradients to exponentially decay to zero.

```python
class VanishingGradientAnalysis:
    def __init__(self, input_size: int = 10, hidden_size: int = 10):
        self.rnn = nn.RNN(input_size, hidden_size, batch_first=True)
        self.hidden_size = hidden_size

    def compute_gradient_norms(self, seq_len: int = 50, batch_size: int = 8):
        x = torch.randn(batch_size, seq_len, self.hidden_size)
        y = torch.randn(batch_size, self.hidden_size)
        output, _ = self.rnn(x)
        loss = nn.functional.mse_loss(output[:, -1, :], y)
        loss.backward()
        norms = []
        for name, param in self.rnn.named_parameters():
            if param.grad is not None:
                norms.append((name, param.grad.norm().item()))
        return norms

    def analyze_gradient_flow(self, seq_lengths: list):
        results = {}
        for seq_len in seq_lengths:
            x = torch.randn(4, seq_len, self.hidden_size)
            y = torch.randn(4, self.hidden_size)
            self.rnn.zero_grad()
            output, _ = self.rnn(x)
            loss = nn.functional.mse_loss(output[:, -1, :], y)
            loss.backward()
            grad_norm = self.rnn.weight_hh_l0.grad.norm().item()
            results[seq_len] = grad_norm
        return results


analyzer = VanishingGradientAnalysis(10, 10)
norms = analyzer.compute_gradient_norms(seq_len=30)
for name, norm in norms:
    print(f"{name}: grad norm = {norm:.6f}")

flow = analyzer.analyze_gradient_flow([5, 10, 20, 50])
for seq_len, norm in flow.items():
    print(f"Seq Len {seq_len}: hidden weight grad norm = {norm:.6f}")
```

**Why gradients vanish**: In BPTT, the gradient of the loss w.r.t. the hidden state at time t involves the product of Jacobians across all time steps. If the eigenvalues of the recurrent weight matrix are less than 1, this product decays exponentially. Tanh activation (derivative ≤ 1) compounds this effect.

```python
class GradientClipping:
    def __init__(self, model: nn.Module, max_norm: float = 1.0):
        self.model = model
        self.max_norm = max_norm

    def train_step(self, x: torch.Tensor, y: torch.Tensor,
                   optimizer: optim.Optimizer, criterion: nn.Module) -> float:
        optimizer.zero_grad()
        output, _ = self.model(x)
        loss = criterion(output, y)
        loss.backward()
        nn.utils.clip_grad_norm_(self.model.parameters(), self.max_norm)
        optimizer.step()
        return loss.item()
```

---

## 7.3 LSTM

LSTM (Long Short-Term Memory) introduces a cell state and three gates to control information flow, solving the vanishing gradient problem.

```python
class LSTMCell(nn.Module):
    def __init__(self, input_size: int, hidden_size: int):
        super().__init__()
        self.hidden_size = hidden_size
        self.forget_gate = nn.Linear(input_size + hidden_size, hidden_size)
        self.input_gate = nn.Linear(input_size + hidden_size, hidden_size)
        self.cell_update = nn.Linear(input_size + hidden_size, hidden_size)
        self.output_gate = nn.Linear(input_size + hidden_size, hidden_size)
        self.sigmoid = nn.Sigmoid()
        self.tanh = nn.Tanh()

    def forward(self, x: torch.Tensor, h_prev: torch.Tensor, c_prev: torch.Tensor
                ) -> Tuple[torch.Tensor, torch.Tensor]:
        combined = torch.cat((x, h_prev), dim=1)
        f = self.sigmoid(self.forget_gate(combined))
        i = self.sigmoid(self.input_gate(combined))
        c_tilde = self.tanh(self.cell_update(combined))
        o = self.sigmoid(self.output_gate(combined))
        c = f * c_prev + i * c_tilde
        h = o * self.tanh(c)
        return h, c


class LSTMStack(nn.Module):
    def __init__(self, input_size: int, hidden_size: int, num_layers: int = 1,
                 bidirectional: bool = False):
        super().__init__()
        self.lstm = nn.LSTM(input_size, hidden_size, num_layers,
                            batch_first=True, bidirectional=bidirectional)

    def forward(self, x: torch.Tensor, hidden: Optional[Tuple[torch.Tensor, torch.Tensor]] = None
                ) -> Tuple[torch.Tensor, Tuple[torch.Tensor, torch.Tensor]]:
        return self.lstm(x, hidden)


lstm = LSTMStack(input_size=10, hidden_size=32, num_layers=2)
x = torch.randn(4, 20, 10)
output, (h_n, c_n) = lstm(x)
print(f"LSTM output: {output.shape}")     # (4, 20, 32)
print(f"LSTM h_n: {h_n.shape}")           # (2, 4, 32)
print(f"LSTM c_n: {c_n.shape}")           # (2, 4, 32)
```

**Custom LSTM with peephole connections**:
```python
class LSTMPeephole(nn.Module):
    def __init__(self, input_size: int, hidden_size: int):
        super().__init__()
        self.hidden_size = hidden_size
        self.w_f = nn.Linear(input_size + hidden_size, hidden_size)
        self.w_i = nn.Linear(input_size + hidden_size, hidden_size)
        self.w_c = nn.Linear(input_size + hidden_size, hidden_size)
        self.w_o = nn.Linear(input_size + hidden_size, hidden_size)
        # Peephole connections
        self.peep_f = nn.Parameter(torch.randn(hidden_size))
        self.peep_i = nn.Parameter(torch.randn(hidden_size))
        self.peep_o = nn.Parameter(torch.randn(hidden_size))

    def forward(self, x: torch.Tensor, h: torch.Tensor, c: torch.Tensor
                ) -> Tuple[torch.Tensor, torch.Tensor]:
        combined = torch.cat((x, h), dim=1)
        f = torch.sigmoid(self.w_f(combined) + self.peep_f * c)
        i = torch.sigmoid(self.w_i(combined) + self.peep_i * c)
        c_tilde = torch.tanh(self.w_c(combined))
        c_new = f * c + i * c_tilde
        o = torch.sigmoid(self.w_o(combined) + self.peep_o * c_new)
        h_new = o * torch.tanh(c_new)
        return h_new, c_new
```

---

## 7.4 GRU

GRU (Gated Recurrent Unit) simplifies LSTM by combining the forget and input gates into a single update gate and removing the cell state.

```python
class GRUCell(nn.Module):
    def __init__(self, input_size: int, hidden_size: int):
        super().__init__()
        self.hidden_size = hidden_size
        self.update_gate = nn.Linear(input_size + hidden_size, hidden_size)
        self.reset_gate = nn.Linear(input_size + hidden_size, hidden_size)
        self.candidate = nn.Linear(input_size + hidden_size, hidden_size)

    def forward(self, x: torch.Tensor, h_prev: torch.Tensor) -> torch.Tensor:
        combined = torch.cat((x, h_prev), dim=1)
        z = torch.sigmoid(self.update_gate(combined))
        r = torch.sigmoid(self.reset_gate(combined))
        combined_reset = torch.cat((x, r * h_prev), dim=1)
        h_tilde = torch.tanh(self.candidate(combined_reset))
        h = (1 - z) * h_prev + z * h_tilde
        return h


class GRUModel(nn.Module):
    def __init__(self, input_size: int, hidden_size: int, num_layers: int = 1,
                 bidirectional: bool = False):
        super().__init__()
        self.gru = nn.GRU(input_size, hidden_size, num_layers,
                          batch_first=True, bidirectional=bidirectional,
                          dropout=0.2 if num_layers > 1 else 0)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        output, h_n = self.gru(x)
        return output, h_n


gru = GRUModel(input_size=10, hidden_size=32, num_layers=2)
x = torch.randn(4, 20, 10)
output, h_n = gru(x)
print(f"GRU output: {output.shape}")  # (4, 20, 32)
print(f"GRU h_n: {h_n.shape}")        # (2, 4, 32)
```

**LSTM vs GRU comparison**:
```python
def compare_gru_lstm(input_size: int = 10, hidden_size: int = 32,
                     seq_len: int = 20, batch_size: int = 4):
    lstm_model = nn.LSTM(input_size, hidden_size, batch_first=True)
    gru_model = nn.GRU(input_size, hidden_size, batch_first=True)

    lstm_params = sum(p.numel() for p in lstm_model.parameters())
    gru_params = sum(p.numel() for p in gru_model.parameters())

    x = torch.randn(batch_size, seq_len, input_size)
    lstm_out, (h_lstm, c_lstm) = lstm_model(x)
    gru_out, h_gru = gru_model(x)

    return {
        "lstm_params": lstm_params,
        "gru_params": gru_params,
        "lstm_output_shape": lstm_out.shape,
        "gru_output_shape": gru_out.shape,
        "param_reduction_pct": (1 - gru_params / lstm_params) * 100,
    }


stats = compare_gru_lstm()
print(f"LSTM parameters: {stats['lstm_params']}")
print(f"GRU parameters: {stats['gru_params']}")
print(f"GRU has {stats['param_reduction_pct']:.1f}% fewer parameters")
```

---

## 7.5 Bidirectional RNNs

Bidirectional RNNs process the sequence both forward and backward, capturing context from past and future tokens.

```python
class BidirectionalLSTM(nn.Module):
    def __init__(self, input_size: int, hidden_size: int, num_layers: int = 1):
        super().__init__()
        self.lstm = nn.LSTM(input_size, hidden_size, num_layers,
                            batch_first=True, bidirectional=True)
        self.fc = nn.Linear(hidden_size * 2, 1)  # *2 for both directions

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        output, (h_n, c_n) = self.lstm(x)
        # Concatenate last forward and backward hidden states
        h_forward = h_n[-2, :, :]   # Last forward layer
        h_backward = h_n[-1, :, :]  # Last backward layer
        combined = torch.cat((h_forward, h_backward), dim=1)
        return self.fc(combined)


class BiRNNClassifier(nn.Module):
    def __init__(self, vocab_size: int, embedding_dim: int = 100,
                 hidden_size: int = 128, num_layers: int = 2, num_classes: int = 2):
        super().__init__()
        self.embedding = nn.Embedding(vocab_size, embedding_dim, padding_idx=0)
        self.lstm = nn.LSTM(embedding_dim, hidden_size, num_layers,
                            batch_first=True, bidirectional=True, dropout=0.3)
        self.classifier = nn.Sequential(
            nn.Linear(hidden_size * 2, 64),
            nn.ReLU(),
            nn.Dropout(0.3),
            nn.Linear(64, num_classes),
        )

    def forward(self, x: torch.Tensor, lengths: torch.Tensor) -> torch.Tensor:
        embedded = self.embedding(x)
        packed = pack_padded_sequence(embedded, lengths.cpu(),
                                      batch_first=True, enforce_sorted=False)
        packed_output, (h_n, c_n) = self.lstm(packed)
        h_forward = h_n[-2, :, :]
        h_backward = h_n[-1, :, :]
        combined = torch.cat((h_forward, h_backward), dim=1)
        return self.classifier(combined)


birnn = BidirectionalLSTM(input_size=10, hidden_size=32, num_layers=2)
x = torch.randn(4, 20, 10)
out = birnn(x)
print(f"BiLSTM output shape: {out.shape}")  # (4, 1)
```

**Visualizing bidirectional context**:
```python
class BidirectionalContextDemo:
    def __init__(self, hidden_size: int = 16):
        self.fwd_rnn = nn.RNN(10, hidden_size, batch_first=True)
        self.bwd_rnn = nn.RNN(10, hidden_size, batch_first=True)

    def process(self, x: torch.Tensor):
        x_flipped = torch.flip(x, dims=[1])
        fwd_out, _ = self.fwd_rnn(x)
        bwd_out, _ = self.bwd_rnn(x_flipped)
        bwd_out = torch.flip(bwd_out, dims=[1])
        combined = torch.cat((fwd_out, bwd_out), dim=2)
        return combined, fwd_out, bwd_out


demo = BidirectionalContextDemo(16)
x = torch.randn(2, 10, 10)
combined, fwd, bwd = demo.process(x)
print(f"Forward: {fwd.shape}, Backward: {bwd.shape}, Combined: {combined.shape}")
```

---

## 7.6 Seq2Seq and Teacher Forcing

Seq2Seq models use an encoder to compress the source sequence into a context vector, and a decoder to generate the target sequence.

```python
class Encoder(nn.Module):
    def __init__(self, vocab_size: int, embedding_dim: int, hidden_size: int,
                 num_layers: int = 1):
        super().__init__()
        self.embedding = nn.Embedding(vocab_size, embedding_dim)
        self.lstm = nn.LSTM(embedding_dim, hidden_size, num_layers,
                            batch_first=True)

    def forward(self, x: torch.Tensor) -> Tuple[torch.Tensor, torch.Tensor]:
        embedded = self.embedding(x)
        output, (h_n, c_n) = self.lstm(embedded)
        return h_n, c_n


class Decoder(nn.Module):
    def __init__(self, vocab_size: int, embedding_dim: int, hidden_size: int,
                 num_layers: int = 1):
        super().__init__()
        self.embedding = nn.Embedding(vocab_size, embedding_dim)
        self.lstm = nn.LSTM(embedding_dim, hidden_size, num_layers,
                            batch_first=True)
        self.fc = nn.Linear(hidden_size, vocab_size)

    def forward(self, x: torch.Tensor, h: torch.Tensor, c: torch.Tensor
                ) -> Tuple[torch.Tensor, torch.Tensor, torch.Tensor]:
        embedded = self.embedding(x)
        output, (h_n, c_n) = self.lstm(embedded, (h, c))
        prediction = self.fc(output)
        return prediction, h_n, c_n


class Seq2Seq(nn.Module):
    def __init__(self, encoder: Encoder, decoder: Decoder, device: str = "cpu"):
        super().__init__()
        self.encoder = encoder
        self.decoder = decoder
        self.device = device

    def forward(self, src: torch.Tensor, tgt: torch.Tensor,
                teacher_forcing_ratio: float = 0.5) -> torch.Tensor:
        batch_size, tgt_len = tgt.shape
        tgt_vocab_size = self.decoder.fc.out_features
        outputs = torch.zeros(batch_size, tgt_len, tgt_vocab_size).to(self.device)
        h, c = self.encoder(src)
        decoder_input = tgt[:, 0:1]
        for t in range(1, tgt_len):
            output, h, c = self.decoder(decoder_input, h, c)
            outputs[:, t:t+1, :] = output
            use_teacher_forcing = torch.rand(1).item() < teacher_forcing_ratio
            top1 = output.argmax(dim=2)
            decoder_input = tgt[:, t:t+1] if use_teacher_forcing else top1
        return outputs


class ScheduledSampling:
    def __init__(self, total_steps: int, schedule: str = "linear"):
        self.total_steps = total_steps
        self.schedule = schedule

    def get_teacher_forcing_ratio(self, step: int) -> float:
        if self.schedule == "linear":
            return max(0, 1 - step / self.total_steps)
        elif self.schedule == "exponential":
            return 0.5 ** (step / (self.total_steps / 5))
        elif self.schedule == "inverse_sigmoid":
            return 1 / (1 + np.exp(step / self.total_steps - 5))
        return 0.5


# Seq2Seq training with teacher forcing
encoder = Encoder(vocab_size=100, embedding_dim=16, hidden_size=32)
decoder = Decoder(vocab_size=100, embedding_dim=16, hidden_size=32)
seq2seq = Seq2Seq(encoder, decoder)

src = torch.randint(1, 100, (4, 10))
tgt = torch.randint(1, 100, (4, 12))
output = seq2seq(src, tgt, teacher_forcing_ratio=0.7)
print(f"Seq2Seq output shape: {output.shape}")  # (4, 12, 100)
```

**Packed sequences** handle variable-length sequences efficiently:
```python
class PackedSequenceDemo:
    def __init__(self, input_size: int = 10, hidden_size: int = 20):
        self.rnn = nn.LSTM(input_size, hidden_size, batch_first=True)

    def forward_with_packing(self, x: torch.Tensor, lengths: torch.Tensor
                             ) -> torch.Tensor:
        packed = pack_padded_sequence(x, lengths.cpu(),
                                      batch_first=True, enforce_sorted=False)
        packed_output, (h_n, c_n) = self.rnn(packed)
        output, _ = pad_packed_sequence(packed_output, batch_first=True)
        return output

    def forward_without_packing(self, x: torch.Tensor) -> torch.Tensor:
        output, (h_n, c_n) = self.rnn(x)
        return output


packed_demo = PackedSequenceDemo(10, 20)
x = torch.randn(3, 10, 10)  # batch=3, max_len=10
lengths = torch.tensor([10, 7, 5])
output_packed = packed_demo.forward_with_packing(x, lengths)
print(f"Packed output shape: {output_packed.shape}")  # (3, 10, 20)
print("Zeros in padded positions:", (output_packed[2, 7:, :] == 0).all().item())
```

**Attention mechanism for Seq2Seq**:
```python
class AttentionDecoder(nn.Module):
    def __init__(self, vocab_size: int, embedding_dim: int, hidden_size: int):
        super().__init__()
        self.embedding = nn.Embedding(vocab_size, embedding_dim)
        self.attention = nn.Linear(hidden_size * 2, hidden_size)
        self.v = nn.Linear(hidden_size, 1)
        self.lstm = nn.LSTMCell(embedding_dim + hidden_size, hidden_size)
        self.fc = nn.Linear(hidden_size, vocab_size)

    def forward(self, x: torch.Tensor, h: torch.Tensor, c: torch.Tensor,
                encoder_outputs: torch.Tensor) -> Tuple[torch.Tensor, ...]:
        embedded = self.embedding(x)
        # Attention scores
        h_expanded = h.unsqueeze(1).expand(-1, encoder_outputs.size(1), -1)
        attention_input = torch.cat((h_expanded, encoder_outputs), dim=2)
        energy = self.v(torch.tanh(self.attention(attention_input))).squeeze(2)
        attn_weights = torch.softmax(energy, dim=1)
        context = (attn_weights.unsqueeze(2) * encoder_outputs).sum(dim=1)
        lstm_input = torch.cat((embedded, context), dim=1)
        h_new, c_new = self.lstm(lstm_input, (h, c))
        prediction = self.fc(h_new)
        return prediction, h_new, c_new, attn_weights
```

---

## Summary

Recurrent neural networks process sequential data by maintaining a hidden state that captures information from previous time steps. The vanilla RNN suffers from vanishing gradients, making it difficult to learn long-range dependencies. LSTMs address this with a gating mechanism (input, forget, output gates) and a cell state that preserves information across long sequences. GRUs simplify the LSTM with update and reset gates, offering comparable performance with fewer parameters. Bidirectional RNNs process sequences in both directions, capturing context from past and future tokens. The encoder-decoder architecture with teacher forcing enables sequence-to-sequence tasks like machine translation and summarization.

## Practical Takeaways

| Scenario | Recommended Model | Why |
|----------|------------------|-----|
| Short sequences (< 20 steps) | Vanilla RNN or GRU | Simpler, faster, less prone to vanishing gradients |
| Long sequences (> 50 steps) | LSTM | Cell state preserves long-term dependencies |
| Memory-constrained deployment | GRU | Fewer parameters, similar performance |
| Text classification (full document) | BiLSTM | Context from both directions improves accuracy |
| Machine translation | Seq2Seq + Attention | Attention handles alignment and long sequences |
| Variable-length sequences | PackedSequence + LSTM | Avoids wasted computation on padding |
| Unstable training | Gradient clipping + teacher forcing | Prevents exploding gradients and accelerates convergence |

## Interview Q&A

<details class="tp-qa-card" data-qid="dl11-q1"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q1: Why do vanilla RNNs suffer from vanishing gradients and how does LSTM fix it?</summary><div class="tp-qa-answer"><p>In vanilla RNNs, BPTT multiplies the same weight matrix at each time step. If the largest singular value of W_hh is < 1, gradients vanish. The chain rule compounds this: dL/dh_t = dL/dh_T * product_{k=t}^{T-1} (diag(f'(h_k)) * W_hh). Tanh's derivative (≤ 1) makes this worse. LSTM fixes this with the cell state c_t = f_t * c_{t-1} + i_t * c_tilde_t. The cell state has a linear self-loop (controlled by the forget gate), allowing gradients to flow unchanged through time. This is called the constant error carousel — the cell state gradient is not multiplied by a weight matrix at each step, only by the forget gate activation (which can be close to 1).</p></div><button class="tp-qa-mark-btn">✅ Mark Reviewed</button><button class="tp-qa-bookmark-btn">🔖 Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl11-q2"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q2: Explain LSTM gates: forget, input, and output.</summary><div class="tp-qa-answer"><p>Forget gate f_t = sigmoid(W_f * [h_{t-1}, x_t] + b_f): decides what to discard from the cell state (0 = forget, 1 = keep). Input gate i_t = sigmoid(W_i * [h_{t-1}, x_t] + b_i): decides which values to update. Candidate values c_tilde_t = tanh(W_c * [h_{t-1}, x_t] + b_c): new candidate values. Cell state update: c_t = f_t * c_{t-1} + i_t * c_tilde_t. Output gate o_t = sigmoid(W_o * [h_{t-1}, x_t] + b_o): controls what parts of the cell state to output. Hidden state: h_t = o_t * tanh(c_t). The forget gate is the most critical — setting it to near 1 allows long-term memory, near 0 causes rapid forgetting.</p></div><button class="tp-qa-mark-btn">✅ Mark Reviewed</button><button class="tp-qa-bookmark-btn">🔖 Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl11-q3"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q3: What is the difference between LSTM and GRU?</summary><div class="tp-qa-answer"><p>GRU has two gates (update and reset) instead of three (forget, input, output) and removes the separate cell state. Key differences: <strong>1)</strong> GRU combines forget and input gates into the update gate z_t. <strong>2)</strong> GRU uses a reset gate r_t to control how much past hidden state affects the candidate. <strong>3)</strong> GRU has no cell state — the hidden state carries all information. <strong>4)</strong> GRU has ~25% fewer parameters (3 weight matrices vs 4). Performance: GRU often matches LSTM on smaller datasets and converges faster, but LSTM may generalize better on larger, longer sequences. GRU is more computationally efficient and less prone to overfitting on small data.</p></div><button class="tp-qa-mark-btn">✅ Mark Reviewed</button><button class="tp-qa-bookmark-btn">🔖 Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl11-q4"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q4: How does teacher forcing work and what are its limitations?</summary><div class="tp-qa-answer"><p>Teacher forcing feeds the ground truth token from the previous time step as input to the decoder, instead of the model's own prediction. This speeds up training by providing correct context. Limitations: <strong>1) Exposure bias</strong>: during inference, the model sees its own (potentially wrong) predictions, creating a mismatch from training. <strong>2)</strong> The model never learns to recover from its own errors. Solutions: <strong>Scheduled sampling</strong>: gradually reduce the teacher forcing ratio from 1.0 to 0.0 over training. <strong>Curriculum learning</strong>: start with teacher forcing, then switch to model's own outputs. <strong>Professor forcing</strong>: use an adversarial discriminator to force the model's free-running outputs to match teacher-forced distributions.</p></div><button class="tp-qa-mark-btn">✅ Mark Reviewed</button><button class="tp-qa-bookmark-btn">🔖 Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl11-q5"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q5: What is the purpose of packed sequences in PyTorch RNNs?</summary><div class="tp-qa-answer"><p>Packed sequences (pack_padded_sequence / pad_packed_sequence) handle variable-length sequences efficiently in batch processing. Without packing: all sequences must be padded to the same length, and the RNN computes hidden states for padding tokens (wasting computation and corrupting final states). Packing: <strong>1)</strong> Sorts sequences by length. <strong>2)</strong> Stores only the actual tokens per time step in a compact format. <strong>3)</strong> The RNN processes only real tokens, skipping padding. <strong>4)</strong> Properly propagates final hidden states only from the last real token. This is essential for NLP tasks where sequence lengths vary (e.g., sentences of different lengths in the same batch). Without packing, padding causes the RNN to attend to meaningless tokens.</p></div><button class="tp-qa-mark-btn">✅ Mark Reviewed</button><button class="tp-qa-bookmark-btn">🔖 Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl11-q6"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q6: When would you use a bidirectional RNN vs unidirectional?</summary><div class="tp-qa-answer"><p>Bidirectional RNNs process the sequence in both forward and backward directions, concatenating or summing the hidden states. Use bidirectional when: <strong>1)</strong> The entire sequence is available at inference time (e.g., text classification over a full document, sentiment analysis). <strong>2)</strong> Context from future tokens is useful (e.g., named entity recognition, POS tagging). <strong>3)</strong> The task requires understanding the full context (e.g., translation). Use unidirectional when: <strong>1)</strong> Real-time/streaming inference is needed (e.g., speech recognition, live captioning). <strong>2)</strong> Future information should not influence predictions (e.g., time series forecasting). <strong>3)</strong> Model size must be minimized (bidirectional doubles parameters).</p></div><button class="tp-qa-mark-btn">✅ Mark Reviewed</button><button class="tp-qa-bookmark-btn">🔖 Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl11-q7"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q7: Explain the seq2seq encoder-decoder architecture.</summary><div class="tp-qa-answer"><p>Seq2Seq maps a variable-length input sequence to a variable-length output sequence. <strong>Encoder</strong>: reads the source sequence token by token and compresses it into a context vector (the final hidden state). In PyTorch, this is typically an LSTM/GRU processing the full input. <strong>Decoder</strong>: generates the target sequence token by token, starting from the context vector and a start token. At each step, it takes the previous token (or its own prediction during inference) and the previous hidden state to predict the next token. <strong>Attention mechanism</strong>: instead of compressing the entire source into one vector, attention allows the decoder to attend to different source positions at each step, which significantly improves long-sequence translation quality. The attention score is typically dot-product or additive between decoder hidden state and each encoder output.</p></div><button class="tp-qa-mark-btn">✅ Mark Reviewed</button><button class="tp-qa-bookmark-btn">🔖 Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl11-q8"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q8: How does gradient clipping help RNN training?</summary><div class="tp-qa-answer"><p>Gradient clipping prevents exploding gradients (the opposite of vanishing — common when the recurrent weight matrix's eigenvalues exceed 1). Two approaches: <strong>1) Value clipping</strong>: clamp each gradient element to [-clip_value, clip_value]. <strong>2) Norm clipping</strong>: if the total gradient norm exceeds max_norm, scale all gradients: g = g * max_norm / ||g||. In PyTorch: torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0). Norm clipping preserves direction while limiting magnitude, which is preferred. Typical max_norm values: 0.25-5.0 for RNNs. Clipping is applied AFTER backward() and BEFORE optimizer.step(). It doesn't fix vanishing gradients (use LSTM/GRU for that), but is essential for stable RNN training.</p></div><button class="tp-qa-mark-btn">✅ Mark Reviewed</button><button class="tp-qa-bookmark-btn">🔖 Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl11-q9"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q9: What is the difference between many-to-one and many-to-many RNN architectures?</summary><div class="tp-qa-answer"><p><strong>Many-to-one</strong>: reads a full sequence and produces a single output. Example: sentiment classification (read a sentence, output a class). Implementation: use only the final hidden state after processing all tokens. In PyTorch: output[:, -1, :] or h_n[-1, :, :]. <strong>Many-to-many</strong>: produces an output at each time step. Example: video frame labeling, character-level generation. Two variants: <strong>1) Synchronous</strong>: output at each input step (e.g., POS tagging). <strong>2) Asynchronous (seq2seq)</strong>: encoder processes all inputs, then decoder generates outputs. Many-to-many with variable input/output lengths typically uses seq2seq + attention. Many-to-one is simpler and faster, while many-to-many is needed for generative tasks.</p></div><button class="tp-qa-mark-btn">✅ Mark Reviewed</button><button class="tp-qa-bookmark-btn">🔖 Bookmark</button></details>

<details class="tp-qa-card" data-qid="dl11-q10"><summary class="tp-qa-question"><span class="tp-qa-status"></span>Q10: How do you initialize LSTM weights and why does it matter?</summary><div class="tp-qa-answer"><p>LSTM initialization is critical. Recommendations: <strong>1) Forget gate bias</strong>: initialize to 1 or 2 (not 0). This biases the forget gate open (near 1), allowing gradients to flow freely through the cell state early in training, preventing early vanishing. PyTorch's default forget gate bias is 0, so you must explicitly set it: for names in lstm._all_weights: if 'bias' in name: nn.init.constant_(param[hidden_size:2*hidden_size], 1.0). <strong>2) Hidden-to-hidden weights</strong>: use orthogonal initialization for better gradient flow (nn.init.orthogonal_). <strong>3) Input-to-hidden weights</strong>: use Xavier uniform. <strong>4) Hidden states</strong>: initialize to zeros (default). Poor initialization can cause the LSTM to forget everything immediately (forget gate = 0 from the start), effectively losing the long-term memory advantage.</p></div><button class="tp-qa-mark-btn">✅ Mark Reviewed</button><button class="tp-qa-bookmark-btn">🔖 Bookmark</button></details>

## Chapter Quiz

**Q1**: Which component in LSTM is responsible for the constant error carousel?

a) Hidden state
b) Cell state
c) Output gate
d) Input gate

<details class="tp-qa-card" data-qid="dl11-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Cell state</strong></p><p>The cell state has a linear self-loop controlled by the forget gate, allowing gradients to propagate unchanged through many time steps.</p></div></details>

**Q2**: How many gates does a GRU have?

a) 1
b) 2
c) 3
d) 4

<details class="tp-qa-card" data-qid="dl11-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) 2</strong></p><p>GRU has an update gate and a reset gate, combining the functions of LSTM's forget and input gates.</p></div></details>

**Q3**: What problem does teacher forcing solve during seq2seq training?

a) Vanishing gradients
b) Slow convergence due to error accumulation
c) Overfitting
d) Memory exhaustion

<details class="tp-qa-card" data-qid="dl11-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Slow convergence due to error accumulation</strong></p><p>Teacher forcing provides the correct previous token instead of the model's prediction, preventing error accumulation during training and speeding convergence.</p></div></details>

**Q4**: Which of the following is NOT a benefit of bidirectional RNNs?

a) Access to future context
b) Higher accuracy on classification tasks
c) Suitable for real-time streaming
d) Better feature representation

<details class="tp-qa-card" data-qid="dl11-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Suitable for real-time streaming</strong></p><p>Bidirectional RNNs require the full sequence before producing output, making them unsuitable for streaming or real-time applications.</p></div></details>

**Q5**: What initial value should the forget gate bias have?

a) 0
b) -1
c) 1 or 2
d) Random

<details class="tp-qa-card" data-qid="dl11-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) 1 or 2</strong></p><p>Initializing forget gate bias to 1 or 2 keeps the forget gate open at the start, preventing early vanishing of long-term information.</p></div></details>

## Exercises


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition**Easy** — Build a character-level RNN that generates text. Train on a small corpus (e.g., Shakespeare sonnet) and sample from the model.

**Easy** — Implement a simple LSTM for MNIST digit classification (treat each row as a time step). Compare accuracy with a feedforward network.

**Medium** — Implement a sentiment classifier using a bidirectional LSTM on the IMDB dataset. Compare with a unidirectional LSTM.

**Medium** — Build a seq2seq model with attention for date format conversion (e.g., "March 15, 2024" to "2024-03-15").

**Hard** — Implement a GRU-based language model with scheduled sampling. Train on the WikiText-2 dataset and report perplexity with and without scheduled sampling.

---

> **Previous**: [06-transfer-learning.md](06-transfer-learning.md) | **Next**: [08-training-pipelines.md](08-training-pipe
## Revision Notes

- Key concept 1: Core principle of 09-deep-learning-pytorch
- Key concept 2: Common implementation pattern
- Key concept 3: Time/space complexity to remember
- Key concept 4: When to apply this technique
- Key concept 5: Common interview pattern
- Key concept 6: Edge cases to handle
- Key concept 7: Related concepts for deeper understanding
## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of 09-deep-learning-pytorch. When would you choose one approach over another?
2. Design a system that efficiently handles 09-deep-learning-pytorch at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 09-deep-learning-pytorch. What was your approach and what was the result?
2. How would you explain 09-deep-learning-pytorch to a non-technical stakeholder?

#### Microsoft Style
1. How does 09-deep-learning-pytorch integrate with enterprise systems and cloud architectures?
2. What are the security implications of 09-deep-learning-pytorch?

#### NVIDIA Style
1. How would you optimize 09-deep-learning-pytorch for GPU-accelerated computing?
2. What parallel processing patterns apply to 09-deep-learning-pytorch?

#### AI Startup Style
1. How would you implement 09-deep-learning-pytorch in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 09-deep-learning-pytorch?

### Resume Tips
- **Technical Skills**: List 09-deep-learning-pytorch under relevant technical skills
- **Project Description**: "Implemented 09-deep-learning-pytorch to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 09-deep-learning-pytorch in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 09-deep-learning-pytorch
- [ ] Practice 3-5 problems related to 09-deep-learning-pytorch
- [ ] Prepare 2 real-world examples of using 09-deep-learning-pytorch
- [ ] Know the time/space complexity of common 09-deep-learning-pytorch operations
- [ ] Have questions ready about how the company uses 09-deep-learning-pytorchlines.md)
