---
slug: /18-multimodal/speech-to-text
title: "Speech To Text"
sidebar_label: "Speech To Text"
sidebar_position: 5
---

﻿# Speech-to-Text

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand automatic speech recognition (ASR) fundamentals |
| LO2 | Implement acoustic, language, and pronunciation models |
| LO3 | Build CTC-based and attention-based ASR systems |
| LO4 | Deploy Whisper and Wav2Vec for production ASR |
| LO5 | Handle speaker diarization and noise robustness |
| LO6 | Evaluate ASR with WER and real-time factor |

## Introduction

AI is moving beyond text. Computer vision, speech recognition, and multimodal models process images, audio, and video. This module covers the tools and techniques for building multimodal AI applications.




## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

## Theory

Understanding speech to text is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how speech to text works in practice.



## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 5.1 | ASR Fundamentals | Audio preprocessing, MFCC, spectrograms, framing |
| 5.2 | Acoustic Modeling | CTC, sequence-to-sequence, transducer models |
| 5.3 | Language Modeling | N-gram, neural LM integration, beam search |
| 5.4 | Wav2Vec | Self-supervised speech representation learning |
| 5.5 | Whisper | End-to-end encoder-decoder transformer ASR |
| 5.6 | Speaker Diarization | Who spoke when, clustering embeddings |
| 5.7 | Noise Robustness | Augmentation, enhancement, multi-channel ASR |
| 5.8 | Evaluation & Deployment | WER, RTF, streaming vs. batch inference |

## Chapter Roadmap

```mermaid
flowchart TB
    subgraph Frontend
        A[Audio] --> B[Feature Extraction]
        B --> C[MFCC / Spectrogram]
    end
    subgraph ASR
        C --> D[Acoustic Model]
        C --> E[End-to-End Model]
        D --> F[Decoder]
        E --> F
    end
    subgraph Post-Processing
        F --> G[Language Model]
        G --> H[Text Output]
        F --> I[Diarization]
        I --> J[Speaker Labels]
    end
```text

## 5.1 ASR Fundamentals

ASR converts speech audio into text. The audio signal must be preprocessed into features, typically MFCCs or log-mel spectrograms, that capture the spectral content relevant to human speech.

```python
import numpy as np
import torch
import torch.nn as nn
import torch.nn.functional as F
from typing import List, Tuple, Optional, Dict, Any
import librosa

class AudioPreprocessor:
    """Convert raw audio to features for ASR."""

    def __init__(self, sample_rate: int = 16000, n_mels: int = 80,
                 n_fft: int = 400, hop_length: int = 160,
                 win_length: int = 400):
        self.sample_rate = sample_rate
        self.n_mels = n_mels
        self.n_fft = n_fft
        self.hop_length = hop_length
        self.win_length = win_length

    def load_audio(self, path: str) -> Tuple[np.ndarray, int]:
        """Load audio file and resample to target rate."""
        audio, sr = librosa.load(path, sr=self.sample_rate, mono=True)
        return audio, sr

    def extract_mel_spectrogram(self, audio: np.ndarray) -> np.ndarray:
        """Extract log-mel spectrogram features."""
        mel = librosa.feature.melspectrogram(
            y=audio,
            sr=self.sample_rate,
            n_fft=self.n_fft,
            hop_length=self.hop_length,
            win_length=self.win_length,
            n_mels=self.n_mels,
        )
        log_mel = librosa.power_to_db(mel, ref=np.max)
        return log_mel.astype(np.float32)

    def extract_mfcc(self, audio: np.ndarray, n_mfcc: int = 13) -> np.ndarray:
        """Extract MFCC features with deltas."""
        mfcc = librosa.feature.mfcc(
            y=audio,
            sr=self.sample_rate,
            n_mfcc=n_mfcc,
            n_fft=self.n_fft,
            hop_length=self.hop_length,
        )
        delta = librosa.feature.delta(mfcc)
        delta2 = librosa.feature.delta(mfcc, order=2)
        return np.concatenate([mfcc, delta, delta2], axis=0).astype(np.float32)

    def normalize(self, features: np.ndarray) -> np.ndarray:
        """Mean-variance normalize features per channel."""
        mean = features.mean(axis=-1, keepdims=True)
        std = features.std(axis=-1, keepdims=True) + 1e-10
        return (features - mean) / std

    def vad_segment(self, audio: np.ndarray,
                    threshold: float = 0.01,
                    min_silence_duration: float = 0.5) -> List[Tuple[int, int]]:
        """Voice Activity Detection to find speech segments."""
        energy = np.abs(audio)
        is_speech = energy > threshold * energy.max()
        segments = []
        in_speech = False
        start = 0
        for i, speech in enumerate(is_speech):
            if speech and not in_speech:
                start = i
                in_speech = True
            elif not speech and in_speech:
                if (i - start) / self.sample_rate > min_silence_duration:
                    segments.append((start, i))
                    in_speech = False
        if in_speech:
            segments.append((start, len(audio)))
        return segments


class AudioAugmenter:
    """Data augmentation for robust ASR."""

    def __init__(self, sample_rate: int = 16000):
        self.sample_rate = sample_rate

    def add_noise(self, audio: np.ndarray,
                  noise: np.ndarray, snr_db: float = 15.0) -> np.ndarray:
        """Add background noise at given SNR."""
        audio_power = np.mean(audio ** 2)
        noise_power = np.mean(noise ** 2)
        scale = np.sqrt(audio_power / (noise_power * 10 ** (snr_db / 10)))
        return audio + scale * noise[:len(audio)]

    def time_stretch(self, audio: np.ndarray, rate: float = 1.1) -> np.ndarray:
        """Apply time-stretching without changing pitch."""
        return librosa.effects.time_stretch(audio, rate=rate)

    def pitch_shift(self, audio: np.ndarray, n_steps: int = 2) -> np.ndarray:
        """Shift pitch up or down."""
        return librosa.effects.pitch_shift(audio, sr=self.sample_rate, n_steps=n_steps)

    def add_reverb(self, audio: np.ndarray,
                   reverb_length: int = 100, decay: float = 0.5) -> np.ndarray:
        """Simulate room reverberation with an FIR filter."""
        ir = np.exp(-decay * np.arange(reverb_length))
        ir /= ir.sum()
        return np.convolve(audio, ir, mode='same')

    def spec_augment(self, mel_spec: np.ndarray,
                     time_mask_param: int = 10,
                     freq_mask_param: int = 5) -> np.ndarray:
        """Apply SpecAugment-style masking."""
        aug = mel_spec.copy()
        t = np.random.randint(0, time_mask_param)
        t_start = np.random.randint(0, aug.shape[1] - t)
        aug[:, t_start:t_start + t] = 0
        f = np.random.randint(0, freq_mask_param)
        f_start = np.random.randint(0, aug.shape[0] - f)
        aug[f_start:f_start + f, :] = 0
        return aug
```text

## 5.2 Acoustic Modeling

Acoustic models map audio features to phonetic units. CTC-based models are trained with frame-level alignments, while sequence-to-sequence and transducer models directly output text.

```python
class CTCAcousticModel(nn.Module):
    """Deep CNN + BiLSTM acoustic model with CTC output."""

    def __init__(self, input_dim: int = 80, hidden_dim: int = 512,
                 num_classes: int = 30, num_layers: int = 4):
        super().__init__()
        self.cnn = nn.Sequential(
            nn.Conv1d(input_dim, 128, 3, padding=1),
            nn.BatchNorm1d(128),
            nn.ReLU(),
            nn.Conv1d(128, 256, 3, padding=1, stride=2),
            nn.BatchNorm1d(256),
            nn.ReLU(),
            nn.Conv1d(256, 256, 3, padding=1),
            nn.BatchNorm1d(256),
            nn.ReLU(),
            nn.Conv1d(256, hidden_dim, 3, padding=1, stride=2),
            nn.BatchNorm1d(hidden_dim),
            nn.ReLU(),
        )

        self.rnn = nn.LSTM(hidden_dim, hidden_dim // 2,
                           num_layers=num_layers,
                           bidirectional=True, batch_first=True,
                           dropout=0.3 if num_layers > 1 else 0)
        self.fc = nn.Linear(hidden_dim, num_classes)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        if x.dim() == 3:
            x = x.squeeze(1)
        if x.dim() == 2:
            x = x.unsqueeze(0)
        x = x.transpose(1, 2)
        x = self.cnn(x)
        x = x.transpose(1, 2)
        x, _ = self.rnn(x)
        logits = self.fc(x)
        return logits

    def compute_ctc_loss(self, logits: torch.Tensor, targets: torch.Tensor,
                         input_lengths: torch.Tensor, target_lengths: torch.Tensor,
                         blank: int = 0) -> torch.Tensor:
        """Compute CTC loss."""
        log_probs = F.log_softmax(logits, dim=-1)
        log_probs = log_probs.transpose(0, 1)
        return F.ctc_loss(log_probs, targets, input_lengths,
                          target_lengths, blank=blank, zero_infinity=True)


class TransducerModel(nn.Module):
    """RNN-Transducer for streaming ASR."""

    def __init__(self, input_dim: int = 80, hidden_dim: int = 512,
                 vocab_size: int = 30):
        super().__init__()
        self.encoder = nn.LSTM(input_dim, hidden_dim, bidirectional=True,
                                batch_first=True)
        self.prediction_net = nn.LSTM(vocab_size + 1, hidden_dim,
                                       batch_first=True)
        self.joint = nn.Sequential(
            nn.Linear(hidden_dim * 3, hidden_dim),
            nn.Tanh(),
            nn.Linear(hidden_dim, vocab_size + 1),
        )
        self.blank = 0

    def forward(self, audio_features: torch.Tensor,
                text_tokens: Optional[torch.Tensor] = None) -> torch.Tensor:
        encoded, _ = self.encoder(audio_features)
        if text_tokens is not None:
            predicted, _ = self.prediction_net(text_tokens)
            enc_expanded = encoded.unsqueeze(2).expand(-1, -1, predicted.shape[1], -1)
            pred_expanded = predicted.unsqueeze(1).expand(-1, encoded.shape[1], -1, -1)
            joint_input = torch.cat([enc_expanded, pred_expanded], dim=-1)
        else:
            predicted, _ = self.prediction_net(
                torch.zeros(audio_features.size(0), 1, audio_features.size(2))
            )
            enc_expanded = encoded.unsqueeze(2)
            pred_expanded = predicted.unsqueeze(1)
            joint_input = torch.cat([enc_expanded.expand(-1, -1, 1, -1),
                                     pred_expanded.expand(-1, encoded.shape[1], -1, -1)], dim=-1)
        return self.joint(joint_input)


class LASModel(nn.Module):
    """Listen, Attend, and Spell — attention-based ASR."""

    def __init__(self, input_dim: int = 80, hidden_dim: int = 512,
                 vocab_size: int = 30):
        super().__init__()
        self.listener = nn.LSTM(input_dim, hidden_dim, bidirectional=True,
                                 batch_first=True)
        self.attention = nn.MultiheadAttention(hidden_dim * 2, 8,
                                                batch_first=True)
        self.speller = nn.LSTM(hidden_dim * 2, hidden_dim, batch_first=True)
        self.fc = nn.Linear(hidden_dim, vocab_size)

    def forward(self, audio: torch.Tensor,
                target_tokens: Optional[torch.Tensor] = None) -> torch.Tensor:
        audio_encoded, _ = self.listener(audio)
        if target_tokens is not None:
            attn_out, _ = self.attention(target_tokens, audio_encoded, audio_encoded)
            speller_out, _ = self.speller(attn_out)
            logits = self.fc(speller_out)
        else:
            batch_size = audio.size(0)
            token = torch.zeros(batch_size, 1, dtype=torch.long)
            outputs = []
            for i in range(50):
                embed = self.fc.weight[token[:, -1]].unsqueeze(1)
                attn_out, _ = self.attention(embed, audio_encoded, audio_encoded)
                speller_out, _ = self.speller(attn_out)
                logits = self.fc(speller_out)
                token = logits.argmax(dim=-1)
                outputs.append(logits)
            logits = torch.cat(outputs, dim=1)
        return logits
```text

## 5.3 Language Modeling

Language models improve ASR by scoring word sequences, helping the decoder choose linguistically plausible hypotheses.

```python
class NGramLanguageModel:
    """Simple N-gram language model with Laplace smoothing."""

    def __init__(self, n: int = 3):
        self.n = n
        self.ngram_counts: Dict[Tuple[str, ...], Dict[str, int]] = {}
        self.total_ngrams: Dict[Tuple[str, ...], int] = {}
        self.vocab_size = 0

    def fit(self, corpus: List[str]):
        """Train N-gram model on text corpus."""
        for text in corpus:
            tokens = ['<s>'] * (self.n - 1) + text.split() + ['</s>']
            for i in range(len(tokens) - self.n + 1):
                context = tuple(tokens[i:i + self.n - 1])
                word = tokens[i + self.n - 1]
                if context not in self.ngram_counts:
                    self.ngram_counts[context] = {}
                    self.total_ngrams[context] = 0
                self.ngram_counts[context][word] = self.ngram_counts[context].get(word, 0) + 1
                self.total_ngrams[context] += 1

        vocab = set()
        for context in self.ngram_counts:
            vocab.update(self.ngram_counts[context].keys())
        self.vocab_size = len(vocab)

    def probability(self, word: str, context: Tuple[str, ...],
                    smoothing: float = 1.0) -> float:
        """Get smoothed probability of word given context."""
        if context not in self.ngram_counts:
            return 1.0 / (self.vocab_size + smoothing * self.vocab_size) if self.vocab_size else 0
        count = self.ngram_counts[context].get(word, 0)
        total = self.total_ngrams[context]
        return (count + smoothing) / (total + smoothing * self.vocab_size)

    def score(self, words: List[str]) -> float:
        """Compute log probability of word sequence."""
        log_prob = 0.0
        context = ['<s>'] * (self.n - 1)
        for word in words:
            prob = self.probability(word, tuple(context))
            log_prob += np.log(prob + 1e-10)
            context = context[1:] + [word]
        return log_prob


class BeamSearchDecoder:
    """Beam search decoder with language model integration."""

    def __init__(self, acoustic_model: nn.Module, language_model: NGramLanguageModel,
                 blank_id: int = 0, beam_width: int = 10):
        self.acoustic_model = acoustic_model
        self.lm = language_model
        self.blank_id = blank_id
        self.beam_width = beam_width
        self.lm_weight = 0.3

    @torch.no_grad()
    def decode(self, features: torch.Tensor) -> Tuple[str, float]:
        """Decode audio features with beam search + LM."""
        logits = self.acoustic_model(features)
        log_probs = F.log_softmax(logits, dim=-1).squeeze(0).cpu().numpy()

        beams = [([], 0.0, None)]  # (tokens, acoustic_score, last_non_blank)
        blank_decay = 0.01

        for t in range(log_probs.shape[0]):
            probs = log_probs[t]
            new_beams = []

            for tokens, score, last_nb in beams:
                for c in range(probs.shape[-1]):
                    new_tokens = list(tokens)
                    new_score = score + probs[c]
                    new_last = last_nb

                    if c == self.blank_id:
                        pass
                    elif c == last_nb:
                        pass
                    else:
                        new_tokens.append(c)
                        new_last = c

                    if self.lm and new_tokens:
                        lm_score = self.lm.score(new_tokens)
                        new_score += self.lm_weight * lm_score / len(new_tokens)

                    new_beams.append((new_tokens, new_score, new_last))

            beams = sorted(new_beams, key=lambda x: x[1], reverse=True)[:self.beam_width]

        best_tokens = max(beams, key=lambda x: x[1])[0]
        text = self._tokens_to_text(best_tokens)
        return text, float(max(beams, key=lambda x: x[1])[1])

    def _tokens_to_text(self, tokens: List[int]) -> str:
        char_map = " abcdefghijklmnopqrstuvwxyz'"
        return ''.join(char_map[t] if t < len(char_map) else '' for t in tokens)
```text

## 5.4 Wav2Vec

Wav2Vec 2.0 learns speech representations through self-supervised contrastive learning on raw audio, then fine-tunes on transcribed data.

```python
class Wav2VecFeatures(nn.Module):
    """Feature encoder for Wav2Vec-style models."""

    def __init__(self, in_channels: int = 1, hidden_channels: int = 512,
                 num_blocks: int = 7):
        super().__init__()
        blocks = []
        ch = in_channels
        for i in range(num_blocks):
            stride = 1 if i < 2 else 2
            blocks.extend([
                nn.Conv1d(ch, hidden_channels, kernel_size=10 if i == 0 else 3,
                          stride=stride, padding=5 if i == 0 else 1),
                nn.GELU(),
                nn.GroupNorm(1, hidden_channels),
            ])
            ch = hidden_channels
        self.feature_encoder = nn.Sequential(*blocks)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        if x.dim() == 2:
            x = x.unsqueeze(1)
        return self.feature_encoder(x)


class Wav2VecTransformer(nn.Module):
    """Context network using Transformer for Wav2Vec."""

    def __init__(self, hidden_dim: int = 512, num_layers: int = 12,
                 num_heads: int = 8):
        super().__init__()
        self.feature_projection = nn.Linear(hidden_dim, hidden_dim)
        self.pos_conv = nn.Sequential(
            nn.Conv1d(hidden_dim, hidden_dim, kernel_size=128, groups=16,
                      padding=64),
            nn.GELU(),
        )
        encoder_layer = nn.TransformerEncoderLayer(
            hidden_dim, num_heads, hidden_dim * 4, dropout=0.1,
            activation='gelu', batch_first=True
        )
        self.transformer = nn.TransformerEncoder(encoder_layer, num_layers)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        x = self.feature_projection(x)
        pos = self.pos_conv(x.transpose(1, 2)).transpose(1, 2)
        x = x + pos
        x = self.transformer(x)
        return x


class Wav2Vec2(nn.Module):
    """Wav2Vec 2.0 for speech recognition."""

    def __init__(self, hidden_dim: int = 512, num_classes: int = 30):
        super().__init__()
        self.feature_encoder = Wav2VecFeatures()
        self.transformer = Wav2VecTransformer(hidden_dim)
        self.fc = nn.Linear(hidden_dim, num_classes)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        features = self.feature_encoder(x)
        features = features.transpose(1, 2)
        context = self.transformer(features)
        logits = self.fc(context)
        return logits


class Wav2Vec2FineTuner:
    """Fine-tune Wav2Vec 2.0 on transcribed speech data."""

    def __init__(self, model: Wav2Vec2, learning_rate: float = 2e-5):
        self.model = model
        self.optimizer = torch.optim.AdamW(
            model.parameters(), lr=learning_rate
        )

    def train_step(self, audio: torch.Tensor, text: torch.Tensor,
                   audio_len: torch.Tensor, text_len: torch.Tensor) -> float:
        """Single training step with CTC loss."""
        self.model.train()
        self.optimizer.zero_grad()
        logits = self.model(audio)

        log_probs = F.log_softmax(logits, dim=-1).transpose(0, 1)
        loss = F.ctc_loss(log_probs, text, audio_len, text_len,
                          blank=0, zero_infinity=True)
        loss.backward()
        torch.nn.utils.clip_grad_norm_(self.model.parameters(), 10.0)
        self.optimizer.step()
        return loss.item()


class ContrastivePretraining:
    """Contrastive learning objective for Wav2Vec 2.0."""

    def __init__(self, model: Wav2Vec2, temperature: float = 0.1):
        self.model = model
        self.temperature = temperature

    def contrastive_loss(self, features: torch.Tensor,
                         quantized: torch.Tensor,
                         mask: torch.Tensor) -> torch.Tensor:
        """Compute contrastive loss over masked time steps."""
        features = F.normalize(features, dim=-1)
        quantized = F.normalize(quantized, dim=-1)

        logits = torch.matmul(features, quantized.transpose(-2, -1)) / self.temperature

        batch_size, seq_len, _ = logits.shape
        labels = torch.arange(seq_len, device=logits.device).unsqueeze(0).expand(batch_size, -1)

        loss = F.cross_entropy(
            logits[mask].view(-1, seq_len),
            labels[mask].view(-1),
            reduction='sum'
        ) / mask.sum().clamp(min=1)

        return loss
```text

## 5.5 Whisper

Whisper is an end-to-end encoder-decoder transformer trained on 680k hours of multilingual data, handling transcription, translation, language identification, and timestamp prediction.

```python
class WhisperInference:
    """Inference wrapper for OpenAI Whisper (simulated)."""

    def __init__(self, model_size: str = "small", device: str = "cpu"):
        self.model_size = model_size
        self.device = device

    @torch.no_grad()
    def transcribe(self, audio_path: str,
                   language: Optional[str] = None,
                   task: str = "transcribe") -> Dict[str, Any]:
        """Transcribe audio file."""
        audio = self._load_audio(audio_path)
        mel = self._log_mel_spectrogram(audio)
        mel = mel.to(self.device)

        if language:
            language_token = f"<|{language}|>"
        else:
            language_token = "<|en|>"

        tokens = [50258, 50259]  # <|startoftranscript|>, <|en|>
        for i in range(448):
            token_tensor = torch.tensor([tokens], device=self.device)
            logits = self._call_model(mel, token_tensor)

            next_token = logits[0, -1].argmax().item()

            if next_token == 50257:  # <|endoftext|>
                break

            tokens.append(next_token)

        text = self._decode_tokens(tokens)
        return {"text": text, "language": "en", "segments": []}

    def _load_audio(self, path: str) -> np.ndarray:
        audio, _ = librosa.load(path, sr=16000)
        return audio

    def _log_mel_spectrogram(self, audio: np.ndarray) -> torch.Tensor:
        mel = librosa.feature.melspectrogram(
            y=audio, sr=16000, n_mels=80, n_fft=400, hop_length=160
        )
        log_mel = (np.log(mel + 1e-10) - 4.0) / 2.0
        return torch.from_numpy(log_mel).float().unsqueeze(0)

    def _call_model(self, mel: torch.Tensor,
                    tokens: torch.Tensor) -> torch.Tensor:
        return torch.randn(1, tokens.shape[1], 51866)

    def _decode_tokens(self, tokens: List[int]) -> str:
        return "transcribed text from audio"


class WhisperSegmenter:
    """Timestamp-aware segmenter for Whisper outputs."""

    def __init__(self):
        self.segments: List[Dict[str, Any]] = []

    def add_segment(self, text: str, start: float, end: float,
                    confidence: float = 1.0):
        """Add a transcribed segment with timing information."""
        self.segments.append({
            "text": text,
            "start": start,
            "end": end,
            "confidence": confidence,
        })

    def to_srt(self) -> str:
        """Export segments as SRT subtitle format."""
        lines = []
        for i, seg in enumerate(self.segments, 1):
            start = self._format_timestamp(seg["start"])
            end = self._format_timestamp(seg["end"])
            lines.append(str(i))
            lines.append(f"{start} --> {end}")
            lines.append(seg["text"])
            lines.append("")
        return "\n".join(lines)

    def to_vtt(self) -> str:
        """Export segments as WebVTT format."""
        lines = ["WEBVTT", ""]
        for seg in self.segments:
            start = self._format_timestamp_vtt(seg["start"])
            end = self._format_timestamp_vtt(seg["end"])
            lines.append(f"{start} --> {end}")
            lines.append(seg["text"])
            lines.append("")
        return "\n".join(lines)

    @staticmethod
    def _format_timestamp(seconds: float) -> str:
        h = int(seconds // 3600)
        m = int((seconds % 3600) // 60)
        s = seconds % 60
        return f"{h:02d}:{m:02d}:{s:06.3f}".replace('.', ',')

    @staticmethod
    def _format_timestamp_vtt(seconds: float) -> str:
        h = int(seconds // 3600)
        m = int((seconds % 3600) // 60)
        s = seconds % 60
        return f"{h:02d}:{m:02d}:{s:06.3f}"
```text

## 5.6 Speaker Diarization

Diarization answers "who spoke when" by segmenting audio by speaker identity, using embedding extraction and clustering.

```python
class SpeakerEmbeddingExtractor(nn.Module):
    """Extract speaker embeddings from audio segments."""

    def __init__(self, embed_dim: int = 256):
        super().__init__()
        self.convs = nn.Sequential(
            nn.Conv1d(80, 64, 5, stride=2, padding=2),
            nn.ReLU(),
            nn.BatchNorm1d(64),
            nn.Conv1d(64, 128, 3, stride=2, padding=1),
            nn.ReLU(),
            nn.BatchNorm1d(128),
            nn.Conv1d(128, 256, 3, stride=2, padding=1),
            nn.ReLU(),
            nn.BatchNorm1d(256),
        )
        self.fc = nn.Sequential(
            nn.AdaptiveAvgPool1d(1),
            nn.Flatten(),
            nn.Linear(256, embed_dim),
        )

    def forward(self, mel: torch.Tensor) -> torch.Tensor:
        x = self.convs(mel)
        embedding = self.fc(x)
        return F.normalize(embedding, dim=-1)


class DiarizationPipeline:
    """Speaker diarization: segment audio by speaker."""

    def __init__(self, sample_rate: int = 16000):
        self.sample_rate = sample_rate
        self.embedding_model = SpeakerEmbeddingExtractor()

    def diarize(self, audio: np.ndarray, num_speakers: Optional[int] = None,
                window_size: float = 1.5, step_size: float = 0.5) -> List[Dict[str, Any]]:
        """Run diarization on audio."""
        preprocessor = AudioPreprocessor(self.sample_rate)
        mel = preprocessor.extract_mel_spectrogram(audio)

        embeddings = []
        timestamps = []
        sample_rate_mel = mel.shape[1] / (len(audio) / self.sample_rate)

        window_frames = int(window_size * sample_rate_mel)
        step_frames = int(step_size * sample_rate_mel)

        for start in range(0, mel.shape[1] - window_frames, step_frames):
            segment = mel[:, start:start + window_frames]
            seg_tensor = torch.from_numpy(segment).float().unsqueeze(0)
            embedding = self.embedding_model(seg_tensor)
            embeddings.append(embedding.squeeze(0).numpy())
            timestamps.append(start / sample_rate_mel)

        embeddings = np.array(embeddings)
        labels = self._cluster_speakers(embeddings, num_speakers)

        segments = []
        current_label = labels[0]
        seg_start = timestamps[0]
        for i, label in enumerate(labels):
            if label != current_label:
                segments.append({
                    "speaker": f"SPEAKER_{current_label:02d}",
                    "start": seg_start,
                    "end": timestamps[i],
                })
                current_label = label
                seg_start = timestamps[i]
        segments.append({
            "speaker": f"SPEAKER_{current_label:02d}",
            "start": seg_start,
            "end": timestamps[-1] + window_size,
        })

        return segments

    def _cluster_speakers(self, embeddings: np.ndarray,
                          num_speakers: Optional[int] = None) -> np.ndarray:
        from sklearn.cluster import AgglomerativeClustering, SpectralClustering
        if num_speakers is None:
            num_speakers = max(1, len(embeddings) // 10)
        clustering = AgglomerativeClustering(
            n_clusters=min(num_speakers, len(embeddings)),
            metric='cosine',
            linkage='average'
        )
        return clustering.fit_predict(embeddings)
```text

## 5.7 Noise Robustness

Robust ASR must handle real-world noise, reverberation, and varying recording conditions.

```python
class NoiseReduction:
    """Speech enhancement for noise-robust ASR."""

    @staticmethod
    def spectral_subtraction(audio: np.ndarray, sample_rate: int,
                             noise_window: float = 0.3,
                             alpha: float = 2.0) -> np.ndarray:
        """Spectral subtraction noise reduction."""
        n_fft = int(sample_rate * 0.025)
        hop_length = n_fft // 4

        D = librosa.stft(audio, n_fft=n_fft, hop_length=hop_length)
        magnitude = np.abs(D)
        phase = np.angle(D)

        noise_frames = int(noise_window * sample_rate / hop_length)
        noise_profile = np.mean(magnitude[:, :noise_frames] ** 2, axis=1, keepdims=True)

        magnitude_clean = np.maximum(magnitude ** 2 - alpha * noise_profile, 0)
        magnitude_clean = np.sqrt(magnitude_clean)

        D_clean = magnitude_clean * np.exp(1j * phase)
        return librosa.istft(D_clean, hop_length=hop_length)


class MultiChannelASR:
    """Multi-microphone ASR with beamforming."""

    def __init__(self, sample_rate: int = 16000):
        self.sample_rate = sample_rate

    def delay_and_sum_beamform(self, channels: List[np.ndarray],
                                angle_deg: float = 0,
                                mic_spacing: float = 0.04) -> np.ndarray:
        """Delay-and-sum beamforming with linear microphone array."""
        speed_of_sound = 343.0
        angle_rad = np.radians(angle_deg)
        n_channels = len(channels)
        min_len = min(len(ch) for ch in channels)
        beamformed = np.zeros(min_len)

        for i, ch in enumerate(channels):
            delay = (i * mic_spacing * np.sin(angle_rad)) / speed_of_sound
            delay_samples = int(delay * self.sample_rate)
            if delay_samples >= 0:
                beamformed += ch[delay_samples:delay_samples + min_len]
            else:
                beamformed += ch[:min_len + delay_samples]

        return beamformed / n_channels

    def mvdr_beamform(self, channels: List[np.ndarray]) -> np.ndarray:
        """Minimum Variance Distortionless Response beamforming."""
        n_fft = 512
        n_channels = len(channels)
        channel_stfts = [
            librosa.stft(ch, n_fft=n_fft) for ch in channels
        ]
        stacked = np.stack([np.abs(s) for s in channel_stfts], axis=0)
        cov = np.einsum('cft,dft->fcd', stacked, stacked.conj())

        steering = stacked.mean(axis=1, keepdims=True)
        cov_inv = np.linalg.pinv(cov)
        weights = cov_inv @ steering
        weights = weights / (np.conj(steering).transpose(0, 2, 1) @ weights + 1e-10)

        enhanced = np.einsum('fct,cft->ft', weights.squeeze(-1),
                             np.array(channel_stfts))
        return librosa.istft(enhanced)
```text

## 5.8 Evaluation & Deployment

ASR evaluation uses Word Error Rate (WER) and Real-Time Factor (RTF). Production deployment requires streaming support and efficient batching.

```python
class ASREvaluator:
    """Evaluate ASR system performance."""

    @staticmethod
    def word_error_rate(reference: str, hypothesis: str) -> Dict[str, float]:
        """Compute WER and related metrics."""
        ref_words = reference.split()
        hyp_words = hypothesis.split()

        d = np.zeros((len(ref_words) + 1, len(hyp_words) + 1))
        for i in range(len(ref_words) + 1):
            d[i, 0] = i
        for j in range(len(hyp_words) + 1):
            d[0, j] = j
        for i in range(1, len(ref_words) + 1):
            for j in range(1, len(hyp_words) + 1):
                cost = 0 if ref_words[i - 1] == hyp_words[j - 1] else 1
                d[i, j] = min(d[i - 1, j] + 1,
                              d[i, j - 1] + 1,
                              d[i - 1, j - 1] + cost)

        substitutions = 0
        insertions = 0
        deletions = 0
        i, j = len(ref_words), len(hyp_words)
        while i > 0 or j > 0:
            if i > 0 and j > 0 and ref_words[i - 1] == hyp_words[j - 1]:
                i -= 1
                j -= 1
            elif i > 0 and j > 0 and d[i - 1, j - 1] <= d[i - 1, j] and d[i - 1, j - 1] <= d[i, j - 1]:
                substitutions += 1
                i -= 1
                j -= 1
            elif i > 0 and d[i - 1, j] <= d[i, j - 1]:
                deletions += 1
                i -= 1
            else:
                insertions += 1
                j -= 1

        total = len(ref_words)
        wer = (substitutions + insertions + deletions) / total
        return {
            "wer": wer * 100,
            "substitutions": substitutions,
            "insertions": insertions,
            "deletions": deletions,
            "total_words": total,
        }

    @staticmethod
    def character_error_rate(reference: str, hypothesis: str) -> float:
        """Compute Character Error Rate."""
        d = np.zeros((len(reference) + 1, len(hypothesis) + 1))
        for i in range(len(reference) + 1):
            d[i, 0] = i
        for j in range(len(hypothesis) + 1):
            d[0, j] = j
        for i in range(1, len(reference) + 1):
            for j in range(1, len(hypothesis) + 1):
                cost = 0 if reference[i - 1] == hypothesis[j - 1] else 1
                d[i, j] = min(d[i - 1, j] + 1,
                              d[i, j - 1] + 1,
                              d[i - 1, j - 1] + cost)
        return d[-1, -1] / max(len(reference), 1) * 100


class RealtimeFactor:
    """Compute Real-Time Factor for ASR latency measurement."""

    def __init__(self):
        self.total_audio_duration = 0.0
        self.total_processing_time = 0.0

    def measure(self, audio_duration: float, processing_time: float):
        self.total_audio_duration += audio_duration
        self.total_processing_time += processing_time

    @property
    def rtf(self) -> float:
        return self.total_processing_time / self.total_audio_duration if self.total_audio_duration > 0 else 0

    @property
    def is_realtime(self) -> bool:
        return self.rtf < 1.0


class StreamingASR:
    """Streaming ASR with incremental decoding."""

    def __init__(self, model: nn.Module):
        self.model = model
        self.buffer = np.array([], dtype=np.float32)
        self.prev_tokens: List[int] = []

    def process_chunk(self, audio_chunk: np.ndarray) -> str:
        """Process an audio chunk and return partial transcription."""
        self.buffer = np.concatenate([self.buffer, audio_chunk])
        features = self._extract_features(self.buffer)
        logits = self.model(features.unsqueeze(0))
        tokens = logits.argmax(dim=-1).squeeze(0).tolist()

        new_tokens = [t for t in tokens if t not in self.prev_tokens]
        self.prev_tokens = tokens

        return self._decode_tokens(new_tokens)

    def reset(self):
        self.buffer = np.array([], dtype=np.float32)
        self.prev_tokens = []

    def _extract_features(self, audio: np.ndarray) -> torch.Tensor:
        preprocessor = AudioPreprocessor()
        mel = preprocessor.extract_mel_spectrogram(audio)
        mel = preprocessor.normalize(mel)
        return torch.from_numpy(mel).float()

    def _decode_tokens(self, tokens: List[int]) -> str:
        char_map = " abcdefghijklmnopqrstuvwxyz'"
        return ''.join(char_map[t] if t < len(char_map) else '' for t in tokens)


class ASRServer:
    """FastAPI-style ASR server (abstracted)."""

    def __init__(self, model: nn.Module, device: str = "cpu"):
        self.model = model.to(device).eval()
        self.device = device

    @torch.no_grad()
    def transcribe_batch(self, audio_batch: List[np.ndarray]) -> List[str]:
        """Transcribe a batch of audio files."""
        features = []
        lengths = []
        for audio in audio_batch:
            mel = AudioPreprocessor().extract_mel_spectrogram(audio)
            mel = AudioPreprocessor().normalize(mel)
            features.append(torch.from_numpy(mel).float())
            lengths.append(mel.shape[1])

        features_padded = torch.nn.utils.rnn.pad_sequence(
            features, batch_first=True
        ).to(self.device)

        logits = self.model(features_padded)
        predictions = logits.argmax(dim=-1).cpu().numpy()

        texts = []
        for i, pred in enumerate(predictions):
            text = self._decode(pred, lengths[i])
            texts.append(text)
        return texts

    def _decode(self, tokens: np.ndarray, length: int) -> str:
        char_map = " abcdefghijklmnopqrstuvwxyz'"
        text = []
        prev = -1
        for t in tokens[:length]:
            if t != prev and t != 0:
                text.append(char_map[t] if t < len(char_map) else '')
            prev = t
        return ''.join(text)
```text

## Summary

Speech-to-text technology has evolved from traditional GMM-HMM systems to end-to-end deep learning. Wav2Vec 2.0 leverages self-supervised learning on unlabeled audio, achieving strong results with minimal transcribed data. Whisper demonstrates the power of large-scale supervised training across 100+ languages and.
diverse conditions. Modern ASR systems combine acoustic models with language models during beam search decoding. Speaker diarization extends ASR to multi-speaker scenarios. For.
production, key considerations include noise robustness, streaming support, real-time factor, and deployment on edge devices with quantized models.

## Practical Takeaways

| Takeaway | Implementation |
|----------|---------------|
| Start with Whisper for any ASR task (supports 100+ languages) | Use `openai-whisper` package or HuggingFace `transformers` |
| Use SpecAugment for training robust acoustic models | Apply frequency and time masking to mel spectrograms |
| Integrate a language model for production ASR | Beam search with N-gram LM reduces WER by 10-30% |
| Measure RTF (Real-Time Factor), not just WER | Ensure processing time < audio duration for real-time use |
| Always add VAD preprocessing before ASR | Reduces WER by focusing on speech regions only |
| Use speaker diarization for multi-speaker audio | Combine with ASR for speaker-attributed transcription |

## Interview Q&A

<details class="tp-qa-card" data-qid="mm05-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: How does Wav2Vec 2.0 achieve strong ASR performance with minimal labeled data?
  </summary>
  <div class="tp-qa-answer">
<p>Wav2Vec 2.0 uses self-supervised learning on unlabeled audio data. The architecture: (1) A CNN feature encoder processes raw waveform into latent speech representations. (2) A transformer context network captures contextualized representations. (3) During pre-training,.
a proportion of feature encoder outputs are masked, and the model must predict the masked representations from context using a contrastive loss (identifying the correct quantized target among distractors). This pre-training uses 960 hours of unlabeled LibriSpeech. After pre-training,.
the model is fine-tuned with just 1 hour of transcribed data to achieve a WER of 4.8/9.3 on LibriSpeech test-clean/test-other. With 10 hours of labeled data,.
WER drops to 3.3/5.5, competitive with models trained on 1000+ hours. This dramatically reduces the labeling cost for new languages or.
domains.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mm05-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: How does Whisper differ from Wav2Vec 2.0 in architecture and training approach?
  </summary>
  <div class="tp-qa-answer">
<p>Whisper is an encoder-decoder transformer trained on 680,000 hours of weakly supervised multilingual audio data. Unlike Wav2Vec 2.0's self-supervised approach (pre-train on unlabeled data,.
fine-tune on labeled), Whisper is trained end-to-end on (audio, transcript) pairs with a simple cross-entropy loss. The encoder processes 80-channel log-mel spectrograms,.
and the decoder autoregressively generates text tokens. Key features: (1) Trained on 100+ languages simultaneously. (2) Supports multiple tasks — transcription,.
translation to English, language identification, and timestamps. (3) Uses special tokens to specify language and task: `<|en|>`, `<|transcribe|>`, `<|translate|>`. (4) Robust to diverse audio conditions because training data covers wide variety of noise,.
accents, and recording qualities. Whisper large-v2 achieves 2.7% WER on LibriSpeech test-clean, approaching human-level accuracy.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mm05-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: What is Word Error Rate (WER) and how is it computed?
  </summary>
  <div class="tp-qa-answer">
<p>WER measures the edit distance between the recognized text (hypothesis) and the reference transcript at the word level: WER = (S + I + D) / N,.
where S = substitutions, I = insertions, D = deletions, and N = number of words in the reference. For example,.
reference: "I have a cat", hypothesis: "I has a car" gives S=2 (have→has, cat→car), I=0, D=0, N=4, WER = 2/4 = 50%. WER can exceed 100% when there are many insertions. The alignment between hypothesis and.
reference is computed using the Levenshtein distance algorithm (dynamic programming). Character Error Rate (CER) is the same at the character level. WER is the standard ASR metric because it captures both substitution errors (wrong word) and.
insertion/deletion errors (extra or missing words). A good production ASR achieves WER < 5% on clean speech and < 15% on noisy speech.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mm05-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: What is Real-Time Factor (RTF) and why is it important for ASR deployment?
  </summary>
  <div class="tp-qa-answer">
<p>RTF = processing time / audio duration. An RTF of 1.0 means processing takes as long as the audio. RTF < 1.0 means the system is faster than real-time (e.g.,.
RTF = 0.5 means 10 seconds of audio is processed in 5 seconds). For real-time applications (live captioning, voice assistants), RTF must be < 1.0,.
with a typical target of < 0.3 to account for network latency and other overhead. For batch processing (offline transcription), higher RTF is acceptable but.
increases cost. Factors affecting RTF: model size (Whisper large = 1.5B params, tiny = 39M params), hardware (GPU vs. CPU), quantization (FP16 vs. FP32),.
and batch size. Whisper tiny achieves RTF ~0.02 on modern GPUs, making it suitable for real-time use.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mm05-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: How does speaker diarization work and how is it combined with ASR?
  </summary>
  <div class="tp-qa-answer">
<p>Speaker diarization answers "who spoke when?" The pipeline: (1) Voice Activity Detection (VAD) — identify speech segments. (2) Speaker embedding — extract d-vectors or.
x-vectors from short windows (1.5s) using a pre-trained speaker recognition model. (3) Clustering — use agglomerative hierarchical clustering (AHC) or spectral clustering to group segments by speaker identity. (4) Resegmentation — refine boundaries at speaker change points. For.
combined ASR + diarization (called "speaker-attributed transcription"), run ASR on each speaker segment and assign the transcript to the identified speaker. The WDER (Word Diarization Error.
Rate) combines transcription errors and speaker assignment errors. Modern end-to-end neural diarization (EEND) uses transformers to directly predict speaker activity for.
each frame, handling overlapping speech better than clustering-based methods.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mm05-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: How do you make an ASR system robust to noisy environments?
  </summary>
  <div class="tp-qa-answer">
<p>Multi-strategy approach: (1) Training data augmentation — mix clean speech with noise (babble, traffic, wind) at various SNRs (0-20dB), convolve with room impulse responses (RIR) to simulate reverberation,.
apply SpecAugment (frequency/time masking). (2) Front-end processing — use spectral subtraction, Wiener filtering, or neural noise suppression (e.g., DCCRN, Demucs) before ASR. (3) Multi-channel processing — if multiple microphones available,.
apply beamforming (delay-and-sum, MVDR) to enhance the target speaker. (4) Model adaptation — fine-tune on domain-specific noisy data. (5) Confidence-based fallback — if ASR confidence is low,.
prompt the user to repeat or switch to a different modality. The CHiME challenge benchmarks speech recognition in noisy environments, with the best systems now achieving <10% WER at 0dB SNR using multi-channel front-ends.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mm05-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: What is the difference between streaming and non-streaming ASR, and how do you implement each?
  </summary>
  <div class="tp-qa-answer">
<p>Non-streaming (batch) ASR processes the full audio utterance before outputting text. It achieves higher accuracy because the model has access to full context (both past and.
future frames). Streaming ASR outputs text incrementally as audio arrives, with low latency (200-500ms from speech onset to text). Streaming models use unidirectional architectures that cannot see future frames: (1) Unidirectional RNNs or.
LSTMs. (2) Causal convolutions (masked to prevent future information). (3) Transducer models (RNN-T) which naturally support streaming by processing audio frames sequentially. The accuracy gap has narrowed: RNN-Transducer models achieve near-batch accuracy while streaming. For.
production, use RNN-T or causal attention for streaming, and standard transformers for batch processing where latency is not critical.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mm05-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: How does language model integration improve ASR accuracy?
  </summary>
  <div class="tp-qa-answer">
<p>Language model (LM) integration corrects acoustic model errors using linguistic context. Approaches: (1) Shallow fusion — during beam search decoding, score each hypothesis with both the acoustic model (AM) score and.
the LM score: total_score = log(P_AM) + λ * log(P_LM). The LM weight λ (typically 0.1-0.5) controls influence. (2) Deep fusion — LM features are injected into the acoustic model's hidden layers during training. (3) Cold fusion — LM is pre-trained separately and.
its embeddings are fused with AM features. (4) N-gram LMs — fast and compact, useful for domain adaptation (e.g., adding medical terminology). (5) Neural LMs — more accurate but.
slower. A well-tuned language model can reduce WER by 10-30%, especially for rare words, proper nouns, and domain-specific terminology.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mm05-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: How do you compare CTC, Transducer, and attention-based ASR architectures?
  </summary>
  <div class="tp-qa-answer">
<p>CTC (Connectionist Temporal Classification): simple, assumes conditionally independent outputs (each frame's prediction is independent given the encoder), can stream with unidirectional encoder. Best for.
light-weight, real-time applications. Transducer (RNN-T): adds a prediction network that models output dependencies, enabling streaming while capturing linguistic context. Currently the standard for.
production streaming ASR (used by Google, Apple). Attention-based (LAS, Whisper): encoder-decoder with cross-attention, captures full context but requires entire utterance for.
decoding (non-streaming). Highest accuracy for batch processing. Tradeoffs: CTC < Transducer < Attention in accuracy; CTC > Transducer > Attention in speed. For.
a voice assistant, use Transducer (streaming + good accuracy). For offline transcription, use Whisper (highest accuracy, multilingual support).</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="mm05-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: How do you implement SpecAugment for ASR training?
  </summary>
  <div class="tp-qa-answer">
    <pre><code>function specAugment(melSpec: number[][], freqMaskParam: number = 27,
  timeMaskParam: number = 100, numFreqMasks: number = 2, numTimeMasks: number = 2) {
  let augmented = melSpec.map(row => [...row]);
  const numFreqBins = augmented.length, numTimeSteps = augmented[0].length;
  // Frequency masking: mask contiguous frequency bands
  for (let i = 0; i < numFreqMasks; i++) {
    const f = Math.floor(Math.random() * freqMaskParam);
    const f0 = Math.floor(Math.random() * (numFreqBins - f));
    for (let j = f0; j < f0 + f; j++)
      if (j < numFreqBins) augmented[j].fill(0);
  }
  // Time masking: mask contiguous time steps
  for (let i = 0; i < numTimeMasks; i++) {
    const t = Math.floor(Math.random() * timeMaskParam);
    const t0 = Math.floor(Math.random() * (numTimeSteps - t));
    for (let j = 0; j < numFreqBins; j++)
      for (let k = t0; k < t0 + t; k++)
        if (k < numTimeSteps) augmented[j][k] = 0;
  }
  return augmented;
}</pre></cale></pre></code>
<p>SpecAugment is a simple but effective augmentation that masks contiguous bands in the mel-spectrogram domain. Frequency masking zeros out a random range of frequency bins (e.g.,.
27 consecutive bins). Time masking zeros out a random range of time steps (e.g., 100 consecutive steps). This forces the model to learn from partial spectrograms,.
improving robustness to missing frequency bands (different microphone characteristics) and missing time segments (short audio dropouts). SpecAugment is applied online during training with random masks per sample. It consistently reduces WER by 5-15% across various ASR architectures and.
requires no additional data collection.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

**Question 1 (mmai-s05-quiz1):** What does WER measure in ASR evaluation?

<details class="tp-qa-card" data-qid="mmai-s05-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) (Substitutions + Insertions + Deletions) / Reference Words</strong></p><p>WER measures the edit distance between the hypothesis and reference at the word level.</p></div></details>

**Question 2 (mmai-s05-quiz2):** How does CTC loss handle alignment between audio and text?

<details class="tp-qa-card" data-qid="mmai-s05-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) By introducing a blank label to handle variable-length alignment</strong></p><p>CTC sums over all valid alignments using a blank token, enabling training without pre-segmented audio.</p></div></details>

**Question 3 (mmai-s05-quiz3):** What is the key contribution of Wav2Vec 2.0?

<details class="tp-qa-card" data-qid="mmai-s05-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Self-supervised speech representation learning from raw audio</strong></p><p>Wav2Vec 2.0 uses contrastive learning on masked audio features, then fine-tunes with just 1 hour of labeled data.</p></div></details>

**Question 4 (mmai-s05-quiz4):** What does Real-Time Factor (RTF) < 1.0 indicate?

<details class="tp-qa-card" data-qid="mmai-s05-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Processing is faster than real-time</strong></p><p>RTF = processing time / audio duration. RTF < 1 means the system processes audio faster than it plays.</p></div></details>

**Question 5 (mmai-s05-quiz5):** How does speaker diarization work?

<details class="tp-qa-card" data-qid="mmai-s05-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Segmenting audio by speaker identity using embeddings and clustering</strong></p><p>Diarization extracts speaker embeddings from short windows and clusters them to assign speaker labels.</p></div></details>

## Q&A

<details class="tp-qa-card" data-qid="mmai-s05-q1">
<summary class="tp-qa-question">What features are commonly used for ASR input?</summary>
<div class="tp-qa-context"><p>Audio representation for neural networks.</p></div>
<div class="tp-qa-answer">
<p>Common ASR features: <strong>Log-mel spectrograms</strong> — most widely used, 80 filter banks covering 0-8kHz. <strong>MFCCs</strong> — traditional, with deltas and delta-deltas (39 dimensions). <strong>Raw waveform</strong> — used by Wav2Vec and other end-to-end models. <strong>Filter bank (FBANK)</strong> — similar to mel but with energy normalization. Log-mel spectrograms (80-dim) are the standard for modern DNN-based ASR, balancing information content with computational efficiency.</p>
</div>
<div class="tp-qa-actions">
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</div>
</details>

<details class="tp-qa-card" data-qid="mmai-s05-q2">
<summary class="tp-qa-question">How do you handle out-of-vocabulary words in ASR?</summary>
<div class="tp-qa-context"><p>Dealing with unseen words at inference time.</p></div>
<div class="tp-qa-answer">
<p>Strategies include: (1) <strong>Subword tokenization</strong> — BPE or unigram LM splits words into subword units, enabling infinite vocabulary. (2) <strong>Hybrid approaches</strong> — use a character-based backup model when word-level LM fails. (3) <strong>Hotword injection</strong> — bias the decoder toward specific phrases (names, domain terms). (4) <strong>Contextual biasing</strong> — dynamically adjust the LM scores for known entities using a shallow fusion approach.</p>
</div>
<div class="tp-qa-actions">
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</div>
</details>

<details class="tp-qa-card" data-qid="mmai-s05-q3">
<summary class="tp-qa-question">What is the difference between streaming and batch ASR?</summary>
<div class="tp-qa-context"><p>Deployment modes for speech recognition.</p></div>
<div class="tp-qa-answer">
<p><strong>Batch ASR</strong> processes the full audio before returning text. It achieves higher accuracy because the model has full context. <strong>Streaming ASR</strong> outputs text incrementally as audio arrives, with low latency (200-500ms). Streaming models use unidirectional RNNs or causal convolutions (no future context). The accuracy gap between streaming and batch ASR has narrowed with transducer models and chunk-wise processing.</p>
</div>
<div class="tp-qa-actions">
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</div>
</details>

<details class="tp-qa-card" data-qid="mmai-s05-q4">
<summary class="tp-qa-question">How do you diarize a meeting with overlapping speech?</summary>
<div class="tp-qa-context"><p>Handling multi-speaker conversations.</p></div>
<div class="tp-qa-answer">
<p>Overlapping speech diarization: (1) <strong>End-to-end neural diarization (EEND)</strong> — directly predicts per-speaker activity for each time frame using a transformer with permutation-invariant loss. (2) <strong>Target speaker extraction</strong> — extract each speaker's speech using a pre-enrolled speaker embedding. (3) <strong>SO-Net</strong> — overlap-aware clustering with attractor networks. EEND-based approaches handle overlapping speech better than traditional clustering methods.</p>
</div>
<div class="tp-qa-actions">
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</div>
</details>

<details class="tp-qa-card" data-qid="mmai-s05-q5">
<summary class="tp-qa-question">What augmentation strategies improve ASR noise robustness?</summary>
<div class="tp-qa-context"><p>Training data diversification for noisy conditions.</p></div>
<div class="tp-qa-answer">
<p>Key augmentations: <strong>Noise injection</strong> — mix clean speech with background noise at various SNRs (0-20dB). <strong>RIR convolution</strong> — simulate room acoustics using impulse responses. <strong>Speed perturbation</strong> — stretch audio 0.9-1.1—. <strong>SpecAugment</strong> — mask time and frequency bands in mel space. <strong>VoxPopuli-style mixing</strong> — mix multiple speakers at random ratios. <strong>Bandpass filtering</strong> — simulate telephone bandwidth. Combine 3-5 augmentations for each training sample.</p>
</div>
<div class="tp-qa-actions">
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</div>
</details>

<details class="tp-qa-card" data-qid="mmai-s05-q6">
<summary class="tp-qa-question">How does Whisper support multilingual transcription?</summary>
<div class="tp-qa-context"><p>Language handling in large-scale ASR.</p></div>
<div class="tp-qa-answer">
<p>Whisper uses special tokens to indicate language and task: `<|en|>` for English, `<|transcribe|>` for transcription, or `<|translate|>` for translation to English. It was trained on 680k hours of multilingual data covering 100+ languages. The model first predicts the language ID from the audio using a language identification head at the start of decoding. Multilingual training enables cross-lingual transfer and zero-shot generalization to low-resource languages.</p>
</div>
<div class="tp-qa-actions">
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</div>
</details>

<details class="tp-qa-card" data-qid="mmai-s05-q7">
<summary class="tp-qa-question">What is the beam search decoder in ASR?</summary>
<div class="tp-qa-context"><p>Decoding strategy for ASR output.</p></div>
<div class="tp-qa-answer">
<p>Beam search maintains the top-K hypotheses at each decoding step, expanding each with possible next tokens and keeping the best overall sequences. In ASR, the decoder combines: acoustic model scores (from CTC or transducer), language model scores (from N-gram or neural LM), and coverage/blank penalties. The beam width (typically 5-20) trades speed for accuracy. Shallow fusion combines an external LM with the acoustic model during beam search.</p>
</div>
<div class="tp-qa-actions">
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</div>
</details>

<details class="tp-qa-card" data-qid="mmai-s05-q8">
<summary class="tp-qa-question">How do you deploy ASR on edge devices?</summary>
<div class="tp-qa-context"><p>On-device speech recognition.</p></div>
<div class="tp-qa-answer">
<p>Edge ASR requires: (1) <strong>Model quantization</strong> — INT8 quantization reduces size 4— with minimal WER increase. (2) <strong>Streaming architecture</strong> — transducer models with chunk-wise processing for low latency. (3) <strong>Keyword spotting first</strong> — wake-word detector activates the main ASR only when needed. (4) <strong>Hardware acceleration</strong> — use NPU/GPU for neural inference, DSP for feature extraction. (5) <strong>Model pruning</strong> — remove less important weights (30-50% sparsity). Whisper tiny (39M params) runs at real-time on modern smartphones.</p>
</div>
<div class="tp-qa-actions">
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</div>
</details>

<details class="tp-qa-card" data-qid="mmai-s05-q9">
<summary class="tp-qa-question">What is the role of self-supervised learning in ASR?</summary>
<div class="tp-qa-context"><p>Pre-training without transcriptions.</p></div>
<div class="tp-qa-answer">
<p>Self-supervised learning (SSL) for ASR pre-trains on unlabeled audio: (1) <strong>Contrastive objectives</strong> — Wav2Vec 2.0 contrasts masked representations against quantized targets. (2) <strong>Masked prediction</strong> — HuBERT predicts cluster assignments for masked frames. (3) <strong>Autoregressive prediction</strong> — WavLM predicts future frames. SSL reduces the required labeled data from 1000+ hours to as little as 1 hour while maintaining competitive WER. The pre-trained representations capture phonetic, speaker, and prosodic information.</p>
</div>
<div class="tp-qa-actions">
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</div>
</details>

<details class="tp-qa-card" data-qid="mmai-s05-q10">
<summary class="tp-qa-question">What are the tradeoffs between CTC, Transducer, and attention-based ASR?</summary>
<div class="tp-qa-context"><p>Comparing ASR architectures.</p></div>
<div class="tp-qa-answer">
<p><strong>CTC</strong> — simple, fast, streaming-capable with unidirectional encoder, but assumes conditional independence of outputs. <strong>Transducer</strong> — streams naturally, models output dependencies, achieves better accuracy than CTC, but more complex training. <strong>Attention-based (LAS/Whisper)</strong> — highest accuracy, captures global context, but requires full utterance for decoding (non-streaming). The choice depends on streaming requirements: Transducer for real-time, Whisper for batch/high-accuracy applications.</p>
</div>
<div class="tp-qa-actions">
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</div>
</details>

## Exercises


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition1. **Feature Extraction**: Load an audio file, extract 80-dim log-mel spectrogram with hop_length=160. Visualize the spectrogram. Compute and visualize MFCCs (13 coefficients with deltas). Compare the two representations.

2. **CTC Acoustic Model**: Implement CTC loss training on 100 synthetic (audio, text) pairs. Monitor the loss and gradients. What happens if you remove batch normalization?

3. **Language Model Integration**: Train a 3-gram language model on a 1M word corpus. Integrate it with beam search decoder. Measure WER reduction compared to greedy decoding. Vary the LM weight (0.1, 0.3, 0.5, 1.0). What is the optimal weight?

4. **Wav2Vec Feature Extraction**: Use a pre-trained Wav2Vec 2.0 model to extract features from 5 audio samples. Visualize the self-attention patterns. Which layers focus on phonetic vs. speaker information?

5. **Whisper Transcription**: Transcribe a 60-second audio clip with Whisper small. Extract segments with timestamps. Export to SRT format. Compare the transcription with ground truth and compute WER.

6. **Speaker Diarization**: Given a 2-speaker conversation audio, implement diarization with embedding extraction and agglomerative clustering. Assign speaker labels (SPEAKER_00, SPEAKER_01). Overlay speaker labels on the transcript. Use `sklearn.metrics.adjusted_rand_score` to evaluate against ground truth.

7. **Noise Robustness**: Take a clean speech recording. Add babble noise at 0dB, 10dB, and 20dB SNR. Transcribe each with Whisper. Report WER at each SNR level. Apply spectral subtraction and re-transcribe. How much does WER improve?

8. **Streaming ASR**: Implement a streaming ASR decoder using a unidirectional LSTM. Process audio in 320ms chunks with 160ms overlap. Measure the latency between speech onset and text output. Compare accuracy with full-utterance decoding.

9. **Multi-Channel Processing**: Create a simulated linear array of 4 microphones. Generate delays for a sound source at 30° azimuth. Apply delay-and-sum beamforming to enhance the source. Compare the enhanced signal's ASR WER with a single-channel baseline.

10. **ASR Server with Batching**: Build a batch ASR inference server. Process 1, 8, 32, and 64 audio files concurrently. Measure throughput (audio-seconds/second) and RTF. At what batch size does throughput satur

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
1. Explain the time and space trade-offs of 18-multimodal-ai-voice. When would you choose one approach over another?
2. Design a system that efficiently handles 18-multimodal-ai-voice at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 18-multimodal-ai-voice. What was your approach and what was the result?
2. How would you explain 18-multimodal-ai-voice to a non-technical stakeholder?

#### Microsoft Style
1. How does 18-multimodal-ai-voice integrate with enterprise systems and cloud architectures?
2. What are the security implications of 18-multimodal-ai-voice?

#### NVIDIA Style
1. How would you optimize 18-multimodal-ai-voice for GPU-accelerated computing?
2. What parallel processing patterns apply to 18-multimodal-ai-voice?

#### AI Startup Style
1. How would you implement 18-multimodal-ai-voice in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 18-multimodal-ai-voice?

### Resume Tips
- **Technical Skills**: List 18-multimodal-ai-voice under relevant technical skills
- **Project Description**: "Implemented 18-multimodal-ai-voice to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 18-multimodal-ai-voice in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 18-multimodal-ai-voice
- [ ] Practice 3-5 problems related to 18-multimodal-ai-voice
- [ ] Prepare 2 real-world examples of using 18-multimodal-ai-voice
- [ ] Know the time/space complexity of common 18-multimodal-ai-voice operations
- [ ] Have questions ready about how the company uses 18-multimodal-ai-voiceate? Why?


## Difficulty Level

**Level**: Advanced
**Estimated Study Time**: 45-60 minutes
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

- How this connects to Multimodal AI & Voice fundamentals
- Prerequisites for advanced topics in this module
- Real-world applications in AI engineering systems
- Interview questions that test deep understanding

## FAQs

**Q: How long does it take to master speech to text?
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

Understanding the evolution of speech to text helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

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

For AI engineering, understanding speech to text at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of speech to text like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply speech to text concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of speech to text?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply speech to text in real systems?
**Answer**: When building production AI systems that require reliability, scalability, and maintainability.

**Card 3**: What are the common pitfalls to avoid?
**Answer**: Over-engineering, ignoring edge cases, and not considering production requirements.

## Study Plan

**Day 1**: Read theory and review examples (18 minutes)
**Day 2**: Complete exercises and practice (18 minutes)
**Day 3**: Review flashcards and take quiz (9 minutes)

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
1. What is the core concept of Multimodal AI & Voice?
2. When would you use this in production?
3. What are the trade-offs?
4. How does this scale?
5. What are common pitfalls?

**Follow-up Questions**:
- How would you optimize this for 10x scale?
- What monitoring would you add?
- How would you test this in production?

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

After mastering Multimodal AI & Voice, continue to the next module in the curriculum to build upon these foundations and deepen your AI engineering expertise.

## Limitations

Every approach has trade-offs. Understanding limitations helps you make better architectural decisions and answer interview questions about when NOT to use a particular technique.
