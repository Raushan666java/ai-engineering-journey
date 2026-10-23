"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[918],{

/***/ 23312
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_18_multimodal_ai_voice_05_speech_to_text_md_bbf_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-18-multimodal-ai-voice-05-speech-to-text-md-bbf.json
const site_docs_courses_ai_engineering_placement_18_multimodal_ai_voice_05_speech_to_text_md_bbf_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/multimodal-ai-voice/05-speech-to-text","title":"Speech-to-Text","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/18-multimodal-ai-voice/05-speech-to-text.md","sourceDirName":"courses/ai-engineering-placement/18-multimodal-ai-voice","slug":"/ai-engineering-placement/18-multimodal-ai-voice/05-speech-to-text","permalink":"/ai-engineering-journey/ai-engineering-placement/18-multimodal-ai-voice/05-speech-to-text","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":232,"frontMatter":{"id":"05-speech-to-text","slug":"/ai-engineering-placement/18-multimodal-ai-voice/05-speech-to-text","title":"Speech-to-Text","sidebar_label":"Speech-to-Text","sidebar_position":232},"sidebar":"placementSidebar","previous":{"title":"OCR & Document AI","permalink":"/ai-engineering-journey/ai-engineering-placement/18-multimodal-ai-voice/04-ocr-and-document-ai"},"next":{"title":"Voice Agents","permalink":"/ai-engineering-journey/ai-engineering-placement/18-multimodal-ai-voice/06-voice-agents"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/18-multimodal-ai-voice/05-speech-to-text.md


const frontMatter = {
	id: '05-speech-to-text',
	slug: '/ai-engineering-placement/18-multimodal-ai-voice/05-speech-to-text',
	title: 'Speech-to-Text',
	sidebar_label: 'Speech-to-Text',
	sidebar_position: 232
};
const contentTitle = 'Speech-to-Text';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Introduction",
  "id": "introduction",
  "level": 2
}, {
  "value": "Key Terminology",
  "id": "key-terminology",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "5.1 ASR Fundamentals",
  "id": "51-asr-fundamentals",
  "level": 2
}, {
  "value": "5.2 Acoustic Modeling",
  "id": "52-acoustic-modeling",
  "level": 2
}, {
  "value": "5.3 Language Modeling",
  "id": "53-language-modeling",
  "level": 2
}, {
  "value": "5.4 Wav2Vec",
  "id": "54-wav2vec",
  "level": 2
}, {
  "value": "5.5 Whisper",
  "id": "55-whisper",
  "level": 2
}, {
  "value": "5.6 Speaker Diarization",
  "id": "56-speaker-diarization",
  "level": 2
}, {
  "value": "5.7 Noise Robustness",
  "id": "57-noise-robustness",
  "level": 2
}, {
  "value": "5.8 Evaluation &amp; Deployment",
  "id": "58-evaluation--deployment",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Q&amp;A",
  "id": "qa",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Common Mistakes",
  "id": "common-mistakes",
  "level": 2
}, {
  "value": "Revision Notes",
  "id": "revision-notes",
  "level": 2
}, {
  "value": "Placement Section",
  "id": "placement-section",
  "level": 2
}, {
  "value": "Top 10 Interview Questions",
  "id": "top-10-interview-questions",
  "level": 3
}, {
  "value": "Google Style",
  "id": "google-style",
  "level": 4
}, {
  "value": "Amazon Style",
  "id": "amazon-style",
  "level": 4
}, {
  "value": "Microsoft Style",
  "id": "microsoft-style",
  "level": 4
}, {
  "value": "NVIDIA Style",
  "id": "nvidia-style",
  "level": 4
}, {
  "value": "AI Startup Style",
  "id": "ai-startup-style",
  "level": 4
}, {
  "value": "Resume Tips",
  "id": "resume-tips",
  "level": 3
}, {
  "value": "Interview Day Checklist",
  "id": "interview-day-checklist",
  "level": 3
}, {
  "value": "True/False",
  "id": "truefalse",
  "level": 2
}, {
  "value": "Fill in the Blank",
  "id": "fill-in-the-blank",
  "level": 2
}, {
  "value": "Scenario Questions",
  "id": "scenario-questions",
  "level": 2
}, {
  "value": "Output Questions",
  "id": "output-questions",
  "level": 2
}, {
  "value": "Difficulty Level",
  "id": "difficulty-level",
  "level": 2
}, {
  "value": "Tips &amp; Tricks",
  "id": "tips--tricks",
  "level": 2
}, {
  "value": "Memory Tricks",
  "id": "memory-tricks",
  "level": 2
}, {
  "value": "Further Reading",
  "id": "further-reading",
  "level": 2
}, {
  "value": "Related Topics",
  "id": "related-topics",
  "level": 2
}, {
  "value": "FAQs",
  "id": "faqs",
  "level": 2
}, {
  "value": "Important Notes",
  "id": "important-notes",
  "level": 2
}, {
  "value": "Historical Context",
  "id": "historical-context",
  "level": 2
}, {
  "value": "Security Considerations",
  "id": "security-considerations",
  "level": 2
}, {
  "value": "ML Intuition",
  "id": "ml-intuition",
  "level": 2
}, {
  "value": "Analogies",
  "id": "analogies",
  "level": 2
}, {
  "value": "Capstone Project Link",
  "id": "capstone-project-link",
  "level": 2
}, {
  "value": "Flashcards",
  "id": "flashcards",
  "level": 2
}, {
  "value": "Research References",
  "id": "research-references",
  "level": 2
}, {
  "value": "Open-Source Tools",
  "id": "open-source-tools",
  "level": 2
}, {
  "value": "Debugging Guide",
  "id": "debugging-guide",
  "level": 2
}, {
  "value": "Mock Interview Section",
  "id": "mock-interview-section",
  "level": 2
}, {
  "value": "Optimized Implementation",
  "id": "optimized-implementation",
  "level": 2
}, {
  "value": "Evaluation Metrics",
  "id": "evaluation-metrics",
  "level": 2
}, {
  "value": "Real-World Examples",
  "id": "real-world-examples",
  "level": 2
}, {
  "value": "Next Topic",
  "id": "next-topic",
  "level": 2
}, {
  "value": "Limitations",
  "id": "limitations",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    button: "button",
    code: "code",
    details: "details",
    div: "div",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    li: "li",
    mermaid: "mermaid",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    summary: "summary",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "speech-to-text",
        children: "Speech-to-Text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Objective"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand automatic speech recognition (ASR) fundamentals"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement acoustic, language, and pronunciation models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build CTC-based and attention-based ASR systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy Whisper and Wav2Vec for production ASR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle speaker diarization and noise robustness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate ASR with WER and real-time factor"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI is moving beyond text. Computer vision, speech recognition, and multimodal models process images, audio, and video. This module covers the tools and techniques for building multimodal AI applications."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding speech to text is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how speech to text works in practice."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concept"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ASR Fundamentals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audio preprocessing, MFCC, spectrograms, framing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Acoustic Modeling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CTC, sequence-to-sequence, transducer models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Language Modeling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N-gram, neural LM integration, beam search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wav2Vec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-supervised speech representation learning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whisper"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End-to-end encoder-decoder transformer ASR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Speaker Diarization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Who spoke when, clustering embeddings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Noise Robustness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Augmentation, enhancement, multi-channel ASR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluation & Deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WER, RTF, streaming vs. batch inference"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TB\r\n    subgraph Frontend\r\n        A[Audio] --> B[Feature Extraction]\r\n        B --> C[MFCC / Spectrogram]\r\n    end\r\n    subgraph ASR\r\n        C --> D[Acoustic Model]\r\n        C --> E[End-to-End Model]\r\n        D --> F[Decoder]\r\n        E --> F\r\n    end\r\n    subgraph Post-Processing\r\n        F --> G[Language Model]\r\n        G --> H[Text Output]\r\n        F --> I[Diarization]\r\n        I --> J[Speaker Labels]\r\n    end"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "51-asr-fundamentals",
      children: "5.1 ASR Fundamentals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ASR converts speech audio into text. The audio signal must be preprocessed into features, typically MFCCs or log-mel spectrograms, that capture the spectral content relevant to human speech."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\r\nimport torch\r\nimport torch.nn as nn\r\nimport torch.nn.functional as F\r\nfrom typing import List, Tuple, Optional, Dict, Any\r\nimport librosa\r\n\r\nclass AudioPreprocessor:\r\n    \"\"\"Convert raw audio to features for ASR.\"\"\"\r\n\r\n    def __init__(self, sample_rate: int = 16000, n_mels: int = 80,\r\n                 n_fft: int = 400, hop_length: int = 160,\r\n                 win_length: int = 400):\r\n        self.sample_rate = sample_rate\r\n        self.n_mels = n_mels\r\n        self.n_fft = n_fft\r\n        self.hop_length = hop_length\r\n        self.win_length = win_length\r\n\r\n    def load_audio(self, path: str) -> Tuple[np.ndarray, int]:\r\n        \"\"\"Load audio file and resample to target rate.\"\"\"\r\n        audio, sr = librosa.load(path, sr=self.sample_rate, mono=True)\r\n        return audio, sr\r\n\r\n    def extract_mel_spectrogram(self, audio: np.ndarray) -> np.ndarray:\r\n        \"\"\"Extract log-mel spectrogram features.\"\"\"\r\n        mel = librosa.feature.melspectrogram(\r\n            y=audio,\r\n            sr=self.sample_rate,\r\n            n_fft=self.n_fft,\r\n            hop_length=self.hop_length,\r\n            win_length=self.win_length,\r\n            n_mels=self.n_mels,\r\n        )\r\n        log_mel = librosa.power_to_db(mel, ref=np.max)\r\n        return log_mel.astype(np.float32)\r\n\r\n    def extract_mfcc(self, audio: np.ndarray, n_mfcc: int = 13) -> np.ndarray:\r\n        \"\"\"Extract MFCC features with deltas.\"\"\"\r\n        mfcc = librosa.feature.mfcc(\r\n            y=audio,\r\n            sr=self.sample_rate,\r\n            n_mfcc=n_mfcc,\r\n            n_fft=self.n_fft,\r\n            hop_length=self.hop_length,\r\n        )\r\n        delta = librosa.feature.delta(mfcc)\r\n        delta2 = librosa.feature.delta(mfcc, order=2)\r\n        return np.concatenate([mfcc, delta, delta2], axis=0).astype(np.float32)\r\n\r\n    def normalize(self, features: np.ndarray) -> np.ndarray:\r\n        \"\"\"Mean-variance normalize features per channel.\"\"\"\r\n        mean = features.mean(axis=-1, keepdims=True)\r\n        std = features.std(axis=-1, keepdims=True) + 1e-10\r\n        return (features - mean) / std\r\n\r\n    def vad_segment(self, audio: np.ndarray,\r\n                    threshold: float = 0.01,\r\n                    min_silence_duration: float = 0.5) -> List[Tuple[int, int]]:\r\n        \"\"\"Voice Activity Detection to find speech segments.\"\"\"\r\n        energy = np.abs(audio)\r\n        is_speech = energy > threshold * energy.max()\r\n        segments = []\r\n        in_speech = False\r\n        start = 0\r\n        for i, speech in enumerate(is_speech):\r\n            if speech and not in_speech:\r\n                start = i\r\n                in_speech = True\r\n            elif not speech and in_speech:\r\n                if (i - start) / self.sample_rate > min_silence_duration:\r\n                    segments.append((start, i))\r\n                    in_speech = False\r\n        if in_speech:\r\n            segments.append((start, len(audio)))\r\n        return segments\r\n\r\nclass AudioAugmenter:\r\n    \"\"\"Data augmentation for robust ASR.\"\"\"\r\n\r\n    def __init__(self, sample_rate: int = 16000):\r\n        self.sample_rate = sample_rate\r\n\r\n    def add_noise(self, audio: np.ndarray,\r\n                  noise: np.ndarray, snr_db: float = 15.0) -> np.ndarray:\r\n        \"\"\"Add background noise at given SNR.\"\"\"\r\n        audio_power = np.mean(audio ** 2)\r\n        noise_power = np.mean(noise ** 2)\r\n        scale = np.sqrt(audio_power / (noise_power * 10 ** (snr_db / 10)))\r\n        return audio + scale * noise[:len(audio)]\r\n\r\n    def time_stretch(self, audio: np.ndarray, rate: float = 1.1) -> np.ndarray:\r\n        \"\"\"Apply time-stretching without changing pitch.\"\"\"\r\n        return librosa.effects.time_stretch(audio, rate=rate)\r\n\r\n    def pitch_shift(self, audio: np.ndarray, n_steps: int = 2) -> np.ndarray:\r\n        \"\"\"Shift pitch up or down.\"\"\"\r\n        return librosa.effects.pitch_shift(audio, sr=self.sample_rate, n_steps=n_steps)\r\n\r\n    def add_reverb(self, audio: np.ndarray,\r\n                   reverb_length: int = 100, decay: float = 0.5) -> np.ndarray:\r\n        \"\"\"Simulate room reverberation with an FIR filter.\"\"\"\r\n        ir = np.exp(-decay * np.arange(reverb_length))\r\n        ir /= ir.sum()\r\n        return np.convolve(audio, ir, mode='same')\r\n\r\n    def spec_augment(self, mel_spec: np.ndarray,\r\n                     time_mask_param: int = 10,\r\n                     freq_mask_param: int = 5) -> np.ndarray:\r\n        \"\"\"Apply SpecAugment-style masking.\"\"\"\r\n        aug = mel_spec.copy()\r\n        t = np.random.randint(0, time_mask_param)\r\n        t_start = np.random.randint(0, aug.shape[1] - t)\r\n        aug[:, t_start:t_start + t] = 0\r\n        f = np.random.randint(0, freq_mask_param)\r\n        f_start = np.random.randint(0, aug.shape[0] - f)\r\n        aug[f_start:f_start + f, :] = 0\r\n        return aug\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "52-acoustic-modeling",
      children: "5.2 Acoustic Modeling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Acoustic models map audio features to phonetic units. CTC-based models are trained with frame-level alignments, while sequence-to-sequence and transducer models directly output text."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class CTCAcousticModel(nn.Module):\r\n    \"\"\"Deep CNN + BiLSTM acoustic model with CTC output.\"\"\"\r\n\r\n    def __init__(self, input_dim: int = 80, hidden_dim: int = 512,\r\n                 num_classes: int = 30, num_layers: int = 4):\r\n        super().__init__()\r\n        self.cnn = nn.Sequential(\r\n            nn.Conv1d(input_dim, 128, 3, padding=1),\r\n            nn.BatchNorm1d(128),\r\n            nn.ReLU(),\r\n            nn.Conv1d(128, 256, 3, padding=1, stride=2),\r\n            nn.BatchNorm1d(256),\r\n            nn.ReLU(),\r\n            nn.Conv1d(256, 256, 3, padding=1),\r\n            nn.BatchNorm1d(256),\r\n            nn.ReLU(),\r\n            nn.Conv1d(256, hidden_dim, 3, padding=1, stride=2),\r\n            nn.BatchNorm1d(hidden_dim),\r\n            nn.ReLU(),\r\n        )\r\n\r\n        self.rnn = nn.LSTM(hidden_dim, hidden_dim // 2,\r\n                           num_layers=num_layers,\r\n                           bidirectional=True, batch_first=True,\r\n                           dropout=0.3 if num_layers > 1 else 0)\r\n        self.fc = nn.Linear(hidden_dim, num_classes)\r\n\r\n    def forward(self, x: torch.Tensor) -> torch.Tensor:\r\n        if x.dim() == 3:\r\n            x = x.squeeze(1)\r\n        if x.dim() == 2:\r\n            x = x.unsqueeze(0)\r\n        x = x.transpose(1, 2)\r\n        x = self.cnn(x)\r\n        x = x.transpose(1, 2)\r\n        x, _ = self.rnn(x)\r\n        logits = self.fc(x)\r\n        return logits\r\n\r\n    def compute_ctc_loss(self, logits: torch.Tensor, targets: torch.Tensor,\r\n                         input_lengths: torch.Tensor, target_lengths: torch.Tensor,\r\n                         blank: int = 0) -> torch.Tensor:\r\n        \"\"\"Compute CTC loss.\"\"\"\r\n        log_probs = F.log_softmax(logits, dim=-1)\r\n        log_probs = log_probs.transpose(0, 1)\r\n        return F.ctc_loss(log_probs, targets, input_lengths,\r\n                          target_lengths, blank=blank, zero_infinity=True)\r\n\r\nclass TransducerModel(nn.Module):\r\n    \"\"\"RNN-Transducer for streaming ASR.\"\"\"\r\n\r\n    def __init__(self, input_dim: int = 80, hidden_dim: int = 512,\r\n                 vocab_size: int = 30):\r\n        super().__init__()\r\n        self.encoder = nn.LSTM(input_dim, hidden_dim, bidirectional=True,\r\n                                batch_first=True)\r\n        self.prediction_net = nn.LSTM(vocab_size + 1, hidden_dim,\r\n                                       batch_first=True)\r\n        self.joint = nn.Sequential(\r\n            nn.Linear(hidden_dim * 3, hidden_dim),\r\n            nn.Tanh(),\r\n            nn.Linear(hidden_dim, vocab_size + 1),\r\n        )\r\n        self.blank = 0\r\n\r\n    def forward(self, audio_features: torch.Tensor,\r\n                text_tokens: Optional[torch.Tensor] = None) -> torch.Tensor:\r\n        encoded, _ = self.encoder(audio_features)\r\n        if text_tokens is not None:\r\n            predicted, _ = self.prediction_net(text_tokens)\r\n            enc_expanded = encoded.unsqueeze(2).expand(-1, -1, predicted.shape[1], -1)\r\n            pred_expanded = predicted.unsqueeze(1).expand(-1, encoded.shape[1], -1, -1)\r\n            joint_input = torch.cat([enc_expanded, pred_expanded], dim=-1)\r\n        else:\r\n            predicted, _ = self.prediction_net(\r\n                torch.zeros(audio_features.size(0), 1, audio_features.size(2))\r\n            )\r\n            enc_expanded = encoded.unsqueeze(2)\r\n            pred_expanded = predicted.unsqueeze(1)\r\n            joint_input = torch.cat([enc_expanded.expand(-1, -1, 1, -1),\r\n                                     pred_expanded.expand(-1, encoded.shape[1], -1, -1)], dim=-1)\r\n        return self.joint(joint_input)\r\n\r\nclass LASModel(nn.Module):\r\n    \"\"\"Listen, Attend, and Spell — attention-based ASR.\"\"\"\r\n\r\n    def __init__(self, input_dim: int = 80, hidden_dim: int = 512,\r\n                 vocab_size: int = 30):\r\n        super().__init__()\r\n        self.listener = nn.LSTM(input_dim, hidden_dim, bidirectional=True,\r\n                                 batch_first=True)\r\n        self.attention = nn.MultiheadAttention(hidden_dim * 2, 8,\r\n                                                batch_first=True)\r\n        self.speller = nn.LSTM(hidden_dim * 2, hidden_dim, batch_first=True)\r\n        self.fc = nn.Linear(hidden_dim, vocab_size)\r\n\r\n    def forward(self, audio: torch.Tensor,\r\n                target_tokens: Optional[torch.Tensor] = None) -> torch.Tensor:\r\n        audio_encoded, _ = self.listener(audio)\r\n        if target_tokens is not None:\r\n            attn_out, _ = self.attention(target_tokens, audio_encoded, audio_encoded)\r\n            speller_out, _ = self.speller(attn_out)\r\n            logits = self.fc(speller_out)\r\n        else:\r\n            batch_size = audio.size(0)\r\n            token = torch.zeros(batch_size, 1, dtype=torch.long)\r\n            outputs = []\r\n            for i in range(50):\r\n                embed = self.fc.weight[token[:, -1]].unsqueeze(1)\r\n                attn_out, _ = self.attention(embed, audio_encoded, audio_encoded)\r\n                speller_out, _ = self.speller(attn_out)\r\n                logits = self.fc(speller_out)\r\n                token = logits.argmax(dim=-1)\r\n                outputs.append(logits)\r\n            logits = torch.cat(outputs, dim=1)\r\n        return logits\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "53-language-modeling",
      children: "5.3 Language Modeling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Language models improve ASR by scoring word sequences, helping the decoder choose linguistically plausible hypotheses."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class NGramLanguageModel:\r\n    \"\"\"Simple N-gram language model with Laplace smoothing.\"\"\"\r\n\r\n    def __init__(self, n: int = 3):\r\n        self.n = n\r\n        self.ngram_counts: Dict[Tuple[str, ...], Dict[str, int]] = {}\r\n        self.total_ngrams: Dict[Tuple[str, ...], int] = {}\r\n        self.vocab_size = 0\r\n\r\n    def fit(self, corpus: List[str]):\r\n        \"\"\"Train N-gram model on text corpus.\"\"\"\r\n        for text in corpus:\r\n            tokens = ['<s>'] * (self.n - 1) + text.split() + ['</s>']\r\n            for i in range(len(tokens) - self.n + 1):\r\n                context = tuple(tokens[i:i + self.n - 1])\r\n                word = tokens[i + self.n - 1]\r\n                if context not in self.ngram_counts:\r\n                    self.ngram_counts[context] = {}\r\n                    self.total_ngrams[context] = 0\r\n                self.ngram_counts[context][word] = self.ngram_counts[context].get(word, 0) + 1\r\n                self.total_ngrams[context] += 1\r\n\r\n        vocab = set()\r\n        for context in self.ngram_counts:\r\n            vocab.update(self.ngram_counts[context].keys())\r\n        self.vocab_size = len(vocab)\r\n\r\n    def probability(self, word: str, context: Tuple[str, ...],\r\n                    smoothing: float = 1.0) -> float:\r\n        \"\"\"Get smoothed probability of word given context.\"\"\"\r\n        if context not in self.ngram_counts:\r\n            return 1.0 / (self.vocab_size + smoothing * self.vocab_size) if self.vocab_size else 0\r\n        count = self.ngram_counts[context].get(word, 0)\r\n        total = self.total_ngrams[context]\r\n        return (count + smoothing) / (total + smoothing * self.vocab_size)\r\n\r\n    def score(self, words: List[str]) -> float:\r\n        \"\"\"Compute log probability of word sequence.\"\"\"\r\n        log_prob = 0.0\r\n        context = ['<s>'] * (self.n - 1)\r\n        for word in words:\r\n            prob = self.probability(word, tuple(context))\r\n            log_prob += np.log(prob + 1e-10)\r\n            context = context[1:] + [word]\r\n        return log_prob\r\n\r\nclass BeamSearchDecoder:\r\n    \"\"\"Beam search decoder with language model integration.\"\"\"\r\n\r\n    def __init__(self, acoustic_model: nn.Module, language_model: NGramLanguageModel,\r\n                 blank_id: int = 0, beam_width: int = 10):\r\n        self.acoustic_model = acoustic_model\r\n        self.lm = language_model\r\n        self.blank_id = blank_id\r\n        self.beam_width = beam_width\r\n        self.lm_weight = 0.3\r\n\r\n    @torch.no_grad()\r\n    def decode(self, features: torch.Tensor) -> Tuple[str, float]:\r\n        \"\"\"Decode audio features with beam search + LM.\"\"\"\r\n        logits = self.acoustic_model(features)\r\n        log_probs = F.log_softmax(logits, dim=-1).squeeze(0).cpu().numpy()\r\n\r\n        beams = [([], 0.0, None)]  # (tokens, acoustic_score, last_non_blank)\r\n        blank_decay = 0.01\r\n\r\n        for t in range(log_probs.shape[0]):\r\n            probs = log_probs[t]\r\n            new_beams = []\r\n\r\n            for tokens, score, last_nb in beams:\r\n                for c in range(probs.shape[-1]):\r\n                    new_tokens = list(tokens)\r\n                    new_score = score + probs[c]\r\n                    new_last = last_nb\r\n\r\n                    if c == self.blank_id:\r\n                        pass\r\n                    elif c == last_nb:\r\n                        pass\r\n                    else:\r\n                        new_tokens.append(c)\r\n                        new_last = c\r\n\r\n                    if self.lm and new_tokens:\r\n                        lm_score = self.lm.score(new_tokens)\r\n                        new_score += self.lm_weight * lm_score / len(new_tokens)\r\n\r\n                    new_beams.append((new_tokens, new_score, new_last))\r\n\r\n            beams = sorted(new_beams, key=lambda x: x[1], reverse=True)[:self.beam_width]\r\n\r\n        best_tokens = max(beams, key=lambda x: x[1])[0]\r\n        text = self._tokens_to_text(best_tokens)\r\n        return text, float(max(beams, key=lambda x: x[1])[1])\r\n\r\n    def _tokens_to_text(self, tokens: List[int]) -> str:\r\n        char_map = \" abcdefghijklmnopqrstuvwxyz'\"\r\n        return ''.join(char_map[t] if t < len(char_map) else '' for t in tokens)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "54-wav2vec",
      children: "5.4 Wav2Vec"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Wav2Vec 2.0 learns speech representations through self-supervised contrastive learning on raw audio, then fine-tunes on transcribed data."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Wav2VecFeatures(nn.Module):\r\n    \"\"\"Feature encoder for Wav2Vec-style models.\"\"\"\r\n\r\n    def __init__(self, in_channels: int = 1, hidden_channels: int = 512,\r\n                 num_blocks: int = 7):\r\n        super().__init__()\r\n        blocks = []\r\n        ch = in_channels\r\n        for i in range(num_blocks):\r\n            stride = 1 if i < 2 else 2\r\n            blocks.extend([\r\n                nn.Conv1d(ch, hidden_channels, kernel_size=10 if i == 0 else 3,\r\n                          stride=stride, padding=5 if i == 0 else 1),\r\n                nn.GELU(),\r\n                nn.GroupNorm(1, hidden_channels),\r\n            ])\r\n            ch = hidden_channels\r\n        self.feature_encoder = nn.Sequential(*blocks)\r\n\r\n    def forward(self, x: torch.Tensor) -> torch.Tensor:\r\n        if x.dim() == 2:\r\n            x = x.unsqueeze(1)\r\n        return self.feature_encoder(x)\r\n\r\nclass Wav2VecTransformer(nn.Module):\r\n    \"\"\"Context network using Transformer for Wav2Vec.\"\"\"\r\n\r\n    def __init__(self, hidden_dim: int = 512, num_layers: int = 12,\r\n                 num_heads: int = 8):\r\n        super().__init__()\r\n        self.feature_projection = nn.Linear(hidden_dim, hidden_dim)\r\n        self.pos_conv = nn.Sequential(\r\n            nn.Conv1d(hidden_dim, hidden_dim, kernel_size=128, groups=16,\r\n                      padding=64),\r\n            nn.GELU(),\r\n        )\r\n        encoder_layer = nn.TransformerEncoderLayer(\r\n            hidden_dim, num_heads, hidden_dim * 4, dropout=0.1,\r\n            activation='gelu', batch_first=True\r\n        )\r\n        self.transformer = nn.TransformerEncoder(encoder_layer, num_layers)\r\n\r\n    def forward(self, x: torch.Tensor) -> torch.Tensor:\r\n        x = self.feature_projection(x)\r\n        pos = self.pos_conv(x.transpose(1, 2)).transpose(1, 2)\r\n        x = x + pos\r\n        x = self.transformer(x)\r\n        return x\r\n\r\nclass Wav2Vec2(nn.Module):\r\n    \"\"\"Wav2Vec 2.0 for speech recognition.\"\"\"\r\n\r\n    def __init__(self, hidden_dim: int = 512, num_classes: int = 30):\r\n        super().__init__()\r\n        self.feature_encoder = Wav2VecFeatures()\r\n        self.transformer = Wav2VecTransformer(hidden_dim)\r\n        self.fc = nn.Linear(hidden_dim, num_classes)\r\n\r\n    def forward(self, x: torch.Tensor) -> torch.Tensor:\r\n        features = self.feature_encoder(x)\r\n        features = features.transpose(1, 2)\r\n        context = self.transformer(features)\r\n        logits = self.fc(context)\r\n        return logits\r\n\r\nclass Wav2Vec2FineTuner:\r\n    \"\"\"Fine-tune Wav2Vec 2.0 on transcribed speech data.\"\"\"\r\n\r\n    def __init__(self, model: Wav2Vec2, learning_rate: float = 2e-5):\r\n        self.model = model\r\n        self.optimizer = torch.optim.AdamW(\r\n            model.parameters(), lr=learning_rate\r\n        )\r\n\r\n    def train_step(self, audio: torch.Tensor, text: torch.Tensor,\r\n                   audio_len: torch.Tensor, text_len: torch.Tensor) -> float:\r\n        \"\"\"Single training step with CTC loss.\"\"\"\r\n        self.model.train()\r\n        self.optimizer.zero_grad()\r\n        logits = self.model(audio)\r\n\r\n        log_probs = F.log_softmax(logits, dim=-1).transpose(0, 1)\r\n        loss = F.ctc_loss(log_probs, text, audio_len, text_len,\r\n                          blank=0, zero_infinity=True)\r\n        loss.backward()\r\n        torch.nn.utils.clip_grad_norm_(self.model.parameters(), 10.0)\r\n        self.optimizer.step()\r\n        return loss.item()\r\n\r\nclass ContrastivePretraining:\r\n    \"\"\"Contrastive learning objective for Wav2Vec 2.0.\"\"\"\r\n\r\n    def __init__(self, model: Wav2Vec2, temperature: float = 0.1):\r\n        self.model = model\r\n        self.temperature = temperature\r\n\r\n    def contrastive_loss(self, features: torch.Tensor,\r\n                         quantized: torch.Tensor,\r\n                         mask: torch.Tensor) -> torch.Tensor:\r\n        \"\"\"Compute contrastive loss over masked time steps.\"\"\"\r\n        features = F.normalize(features, dim=-1)\r\n        quantized = F.normalize(quantized, dim=-1)\r\n\r\n        logits = torch.matmul(features, quantized.transpose(-2, -1)) / self.temperature\r\n\r\n        batch_size, seq_len, _ = logits.shape\r\n        labels = torch.arange(seq_len, device=logits.device).unsqueeze(0).expand(batch_size, -1)\r\n\r\n        loss = F.cross_entropy(\r\n            logits[mask].view(-1, seq_len),\r\n            labels[mask].view(-1),\r\n            reduction='sum'\r\n        ) / mask.sum().clamp(min=1)\r\n\r\n        return loss\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "55-whisper",
      children: "5.5 Whisper"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Whisper is an end-to-end encoder-decoder transformer trained on 680k hours of multilingual data, handling transcription, translation, language identification, and timestamp prediction."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class WhisperInference:\r\n    \"\"\"Inference wrapper for OpenAI Whisper (simulated).\"\"\"\r\n\r\n    def __init__(self, model_size: str = \"small\", device: str = \"cpu\"):\r\n        self.model_size = model_size\r\n        self.device = device\r\n\r\n    @torch.no_grad()\r\n    def transcribe(self, audio_path: str,\r\n                   language: Optional[str] = None,\r\n                   task: str = \"transcribe\") -> Dict[str, Any]:\r\n        \"\"\"Transcribe audio file.\"\"\"\r\n        audio = self._load_audio(audio_path)\r\n        mel = self._log_mel_spectrogram(audio)\r\n        mel = mel.to(self.device)\r\n\r\n        if language:\r\n            language_token = f\"<|{language}|>\"\r\n        else:\r\n            language_token = \"<|en|>\"\r\n\r\n        tokens = [50258, 50259]  # <|startoftranscript|>, <|en|>\r\n        for i in range(448):\r\n            token_tensor = torch.tensor([tokens], device=self.device)\r\n            logits = self._call_model(mel, token_tensor)\r\n\r\n            next_token = logits[0, -1].argmax().item()\r\n\r\n            if next_token == 50257:  # <|endoftext|>\r\n                break\r\n\r\n            tokens.append(next_token)\r\n\r\n        text = self._decode_tokens(tokens)\r\n        return {\"text\": text, \"language\": \"en\", \"segments\": []}\r\n\r\n    def _load_audio(self, path: str) -> np.ndarray:\r\n        audio, _ = librosa.load(path, sr=16000)\r\n        return audio\r\n\r\n    def _log_mel_spectrogram(self, audio: np.ndarray) -> torch.Tensor:\r\n        mel = librosa.feature.melspectrogram(\r\n            y=audio, sr=16000, n_mels=80, n_fft=400, hop_length=160\r\n        )\r\n        log_mel = (np.log(mel + 1e-10) - 4.0) / 2.0\r\n        return torch.from_numpy(log_mel).float().unsqueeze(0)\r\n\r\n    def _call_model(self, mel: torch.Tensor,\r\n                    tokens: torch.Tensor) -> torch.Tensor:\r\n        return torch.randn(1, tokens.shape[1], 51866)\r\n\r\n    def _decode_tokens(self, tokens: List[int]) -> str:\r\n        return \"transcribed text from audio\"\r\n\r\nclass WhisperSegmenter:\r\n    \"\"\"Timestamp-aware segmenter for Whisper outputs.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.segments: List[Dict[str, Any]] = []\r\n\r\n    def add_segment(self, text: str, start: float, end: float,\r\n                    confidence: float = 1.0):\r\n        \"\"\"Add a transcribed segment with timing information.\"\"\"\r\n        self.segments.append({\r\n            \"text\": text,\r\n            \"start\": start,\r\n            \"end\": end,\r\n            \"confidence\": confidence,\r\n        })\r\n\r\n    def to_srt(self) -> str:\r\n        \"\"\"Export segments as SRT subtitle format.\"\"\"\r\n        lines = []\r\n        for i, seg in enumerate(self.segments, 1):\r\n            start = self._format_timestamp(seg[\"start\"])\r\n            end = self._format_timestamp(seg[\"end\"])\r\n            lines.append(str(i))\r\n            lines.append(f\"{start} --> {end}\")\r\n            lines.append(seg[\"text\"])\r\n            lines.append(\"\")\r\n        return \"\\n\".join(lines)\r\n\r\n    def to_vtt(self) -> str:\r\n        \"\"\"Export segments as WebVTT format.\"\"\"\r\n        lines = [\"WEBVTT\", \"\"]\r\n        for seg in self.segments:\r\n            start = self._format_timestamp_vtt(seg[\"start\"])\r\n            end = self._format_timestamp_vtt(seg[\"end\"])\r\n            lines.append(f\"{start} --> {end}\")\r\n            lines.append(seg[\"text\"])\r\n            lines.append(\"\")\r\n        return \"\\n\".join(lines)\r\n\r\n    @staticmethod\r\n    def _format_timestamp(seconds: float) -> str:\r\n        h = int(seconds // 3600)\r\n        m = int((seconds % 3600) // 60)\r\n        s = seconds % 60\r\n        return f\"{h:02d}:{m:02d}:{s:06.3f}\".replace('.', ',')\r\n\r\n    @staticmethod\r\n    def _format_timestamp_vtt(seconds: float) -> str:\r\n        h = int(seconds // 3600)\r\n        m = int((seconds % 3600) // 60)\r\n        s = seconds % 60\r\n        return f\"{h:02d}:{m:02d}:{s:06.3f}\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "56-speaker-diarization",
      children: "5.6 Speaker Diarization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Diarization answers \"who spoke when\" by segmenting audio by speaker identity, using embedding extraction and clustering."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SpeakerEmbeddingExtractor(nn.Module):\r\n    \"\"\"Extract speaker embeddings from audio segments.\"\"\"\r\n\r\n    def __init__(self, embed_dim: int = 256):\r\n        super().__init__()\r\n        self.convs = nn.Sequential(\r\n            nn.Conv1d(80, 64, 5, stride=2, padding=2),\r\n            nn.ReLU(),\r\n            nn.BatchNorm1d(64),\r\n            nn.Conv1d(64, 128, 3, stride=2, padding=1),\r\n            nn.ReLU(),\r\n            nn.BatchNorm1d(128),\r\n            nn.Conv1d(128, 256, 3, stride=2, padding=1),\r\n            nn.ReLU(),\r\n            nn.BatchNorm1d(256),\r\n        )\r\n        self.fc = nn.Sequential(\r\n            nn.AdaptiveAvgPool1d(1),\r\n            nn.Flatten(),\r\n            nn.Linear(256, embed_dim),\r\n        )\r\n\r\n    def forward(self, mel: torch.Tensor) -> torch.Tensor:\r\n        x = self.convs(mel)\r\n        embedding = self.fc(x)\r\n        return F.normalize(embedding, dim=-1)\r\n\r\nclass DiarizationPipeline:\r\n    \"\"\"Speaker diarization: segment audio by speaker.\"\"\"\r\n\r\n    def __init__(self, sample_rate: int = 16000):\r\n        self.sample_rate = sample_rate\r\n        self.embedding_model = SpeakerEmbeddingExtractor()\r\n\r\n    def diarize(self, audio: np.ndarray, num_speakers: Optional[int] = None,\r\n                window_size: float = 1.5, step_size: float = 0.5) -> List[Dict[str, Any]]:\r\n        \"\"\"Run diarization on audio.\"\"\"\r\n        preprocessor = AudioPreprocessor(self.sample_rate)\r\n        mel = preprocessor.extract_mel_spectrogram(audio)\r\n\r\n        embeddings = []\r\n        timestamps = []\r\n        sample_rate_mel = mel.shape[1] / (len(audio) / self.sample_rate)\r\n\r\n        window_frames = int(window_size * sample_rate_mel)\r\n        step_frames = int(step_size * sample_rate_mel)\r\n\r\n        for start in range(0, mel.shape[1] - window_frames, step_frames):\r\n            segment = mel[:, start:start + window_frames]\r\n            seg_tensor = torch.from_numpy(segment).float().unsqueeze(0)\r\n            embedding = self.embedding_model(seg_tensor)\r\n            embeddings.append(embedding.squeeze(0).numpy())\r\n            timestamps.append(start / sample_rate_mel)\r\n\r\n        embeddings = np.array(embeddings)\r\n        labels = self._cluster_speakers(embeddings, num_speakers)\r\n\r\n        segments = []\r\n        current_label = labels[0]\r\n        seg_start = timestamps[0]\r\n        for i, label in enumerate(labels):\r\n            if label != current_label:\r\n                segments.append({\r\n                    \"speaker\": f\"SPEAKER_{current_label:02d}\",\r\n                    \"start\": seg_start,\r\n                    \"end\": timestamps[i],\r\n                })\r\n                current_label = label\r\n                seg_start = timestamps[i]\r\n        segments.append({\r\n            \"speaker\": f\"SPEAKER_{current_label:02d}\",\r\n            \"start\": seg_start,\r\n            \"end\": timestamps[-1] + window_size,\r\n        })\r\n\r\n        return segments\r\n\r\n    def _cluster_speakers(self, embeddings: np.ndarray,\r\n                          num_speakers: Optional[int] = None) -> np.ndarray:\r\n        from sklearn.cluster import AgglomerativeClustering, SpectralClustering\r\n        if num_speakers is None:\r\n            num_speakers = max(1, len(embeddings) // 10)\r\n        clustering = AgglomerativeClustering(\r\n            n_clusters=min(num_speakers, len(embeddings)),\r\n            metric='cosine',\r\n            linkage='average'\r\n        )\r\n        return clustering.fit_predict(embeddings)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "57-noise-robustness",
      children: "5.7 Noise Robustness"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robust ASR must handle real-world noise, reverberation, and varying recording conditions."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class NoiseReduction:\r\n    \"\"\"Speech enhancement for noise-robust ASR.\"\"\"\r\n\r\n    @staticmethod\r\n    def spectral_subtraction(audio: np.ndarray, sample_rate: int,\r\n                             noise_window: float = 0.3,\r\n                             alpha: float = 2.0) -> np.ndarray:\r\n        \"\"\"Spectral subtraction noise reduction.\"\"\"\r\n        n_fft = int(sample_rate * 0.025)\r\n        hop_length = n_fft // 4\r\n\r\n        D = librosa.stft(audio, n_fft=n_fft, hop_length=hop_length)\r\n        magnitude = np.abs(D)\r\n        phase = np.angle(D)\r\n\r\n        noise_frames = int(noise_window * sample_rate / hop_length)\r\n        noise_profile = np.mean(magnitude[:, :noise_frames] ** 2, axis=1, keepdims=True)\r\n\r\n        magnitude_clean = np.maximum(magnitude ** 2 - alpha * noise_profile, 0)\r\n        magnitude_clean = np.sqrt(magnitude_clean)\r\n\r\n        D_clean = magnitude_clean * np.exp(1j * phase)\r\n        return librosa.istft(D_clean, hop_length=hop_length)\r\n\r\nclass MultiChannelASR:\r\n    \"\"\"Multi-microphone ASR with beamforming.\"\"\"\r\n\r\n    def __init__(self, sample_rate: int = 16000):\r\n        self.sample_rate = sample_rate\r\n\r\n    def delay_and_sum_beamform(self, channels: List[np.ndarray],\r\n                                angle_deg: float = 0,\r\n                                mic_spacing: float = 0.04) -> np.ndarray:\r\n        \"\"\"Delay-and-sum beamforming with linear microphone array.\"\"\"\r\n        speed_of_sound = 343.0\r\n        angle_rad = np.radians(angle_deg)\r\n        n_channels = len(channels)\r\n        min_len = min(len(ch) for ch in channels)\r\n        beamformed = np.zeros(min_len)\r\n\r\n        for i, ch in enumerate(channels):\r\n            delay = (i * mic_spacing * np.sin(angle_rad)) / speed_of_sound\r\n            delay_samples = int(delay * self.sample_rate)\r\n            if delay_samples >= 0:\r\n                beamformed += ch[delay_samples:delay_samples + min_len]\r\n            else:\r\n                beamformed += ch[:min_len + delay_samples]\r\n\r\n        return beamformed / n_channels\r\n\r\n    def mvdr_beamform(self, channels: List[np.ndarray]) -> np.ndarray:\r\n        \"\"\"Minimum Variance Distortionless Response beamforming.\"\"\"\r\n        n_fft = 512\r\n        n_channels = len(channels)\r\n        channel_stfts = [\r\n            librosa.stft(ch, n_fft=n_fft) for ch in channels\r\n        ]\r\n        stacked = np.stack([np.abs(s) for s in channel_stfts], axis=0)\r\n        cov = np.einsum('cft,dft->fcd', stacked, stacked.conj())\r\n\r\n        steering = stacked.mean(axis=1, keepdims=True)\r\n        cov_inv = np.linalg.pinv(cov)\r\n        weights = cov_inv @ steering\r\n        weights = weights / (np.conj(steering).transpose(0, 2, 1) @ weights + 1e-10)\r\n\r\n        enhanced = np.einsum('fct,cft->ft', weights.squeeze(-1),\r\n                             np.array(channel_stfts))\r\n        return librosa.istft(enhanced)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "58-evaluation--deployment",
      children: "5.8 Evaluation & Deployment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ASR evaluation uses Word Error Rate (WER) and Real-Time Factor (RTF). Production deployment requires streaming support and efficient batching."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ASREvaluator:\r\n    \"\"\"Evaluate ASR system performance.\"\"\"\r\n\r\n    @staticmethod\r\n    def word_error_rate(reference: str, hypothesis: str) -> Dict[str, float]:\r\n        \"\"\"Compute WER and related metrics.\"\"\"\r\n        ref_words = reference.split()\r\n        hyp_words = hypothesis.split()\r\n\r\n        d = np.zeros((len(ref_words) + 1, len(hyp_words) + 1))\r\n        for i in range(len(ref_words) + 1):\r\n            d[i, 0] = i\r\n        for j in range(len(hyp_words) + 1):\r\n            d[0, j] = j\r\n        for i in range(1, len(ref_words) + 1):\r\n            for j in range(1, len(hyp_words) + 1):\r\n                cost = 0 if ref_words[i - 1] == hyp_words[j - 1] else 1\r\n                d[i, j] = min(d[i - 1, j] + 1,\r\n                              d[i, j - 1] + 1,\r\n                              d[i - 1, j - 1] + cost)\r\n\r\n        substitutions = 0\r\n        insertions = 0\r\n        deletions = 0\r\n        i, j = len(ref_words), len(hyp_words)\r\n        while i > 0 or j > 0:\r\n            if i > 0 and j > 0 and ref_words[i - 1] == hyp_words[j - 1]:\r\n                i -= 1\r\n                j -= 1\r\n            elif i > 0 and j > 0 and d[i - 1, j - 1] <= d[i - 1, j] and d[i - 1, j - 1] <= d[i, j - 1]:\r\n                substitutions += 1\r\n                i -= 1\r\n                j -= 1\r\n            elif i > 0 and d[i - 1, j] <= d[i, j - 1]:\r\n                deletions += 1\r\n                i -= 1\r\n            else:\r\n                insertions += 1\r\n                j -= 1\r\n\r\n        total = len(ref_words)\r\n        wer = (substitutions + insertions + deletions) / total\r\n        return {\r\n            \"wer\": wer * 100,\r\n            \"substitutions\": substitutions,\r\n            \"insertions\": insertions,\r\n            \"deletions\": deletions,\r\n            \"total_words\": total,\r\n        }\r\n\r\n    @staticmethod\r\n    def character_error_rate(reference: str, hypothesis: str) -> float:\r\n        \"\"\"Compute Character Error Rate.\"\"\"\r\n        d = np.zeros((len(reference) + 1, len(hypothesis) + 1))\r\n        for i in range(len(reference) + 1):\r\n            d[i, 0] = i\r\n        for j in range(len(hypothesis) + 1):\r\n            d[0, j] = j\r\n        for i in range(1, len(reference) + 1):\r\n            for j in range(1, len(hypothesis) + 1):\r\n                cost = 0 if reference[i - 1] == hypothesis[j - 1] else 1\r\n                d[i, j] = min(d[i - 1, j] + 1,\r\n                              d[i, j - 1] + 1,\r\n                              d[i - 1, j - 1] + cost)\r\n        return d[-1, -1] / max(len(reference), 1) * 100\r\n\r\nclass RealtimeFactor:\r\n    \"\"\"Compute Real-Time Factor for ASR latency measurement.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.total_audio_duration = 0.0\r\n        self.total_processing_time = 0.0\r\n\r\n    def measure(self, audio_duration: float, processing_time: float):\r\n        self.total_audio_duration += audio_duration\r\n        self.total_processing_time += processing_time\r\n\r\n    @property\r\n    def rtf(self) -> float:\r\n        return self.total_processing_time / self.total_audio_duration if self.total_audio_duration > 0 else 0\r\n\r\n    @property\r\n    def is_realtime(self) -> bool:\r\n        return self.rtf < 1.0\r\n\r\nclass StreamingASR:\r\n    \"\"\"Streaming ASR with incremental decoding.\"\"\"\r\n\r\n    def __init__(self, model: nn.Module):\r\n        self.model = model\r\n        self.buffer = np.array([], dtype=np.float32)\r\n        self.prev_tokens: List[int] = []\r\n\r\n    def process_chunk(self, audio_chunk: np.ndarray) -> str:\r\n        \"\"\"Process an audio chunk and return partial transcription.\"\"\"\r\n        self.buffer = np.concatenate([self.buffer, audio_chunk])\r\n        features = self._extract_features(self.buffer)\r\n        logits = self.model(features.unsqueeze(0))\r\n        tokens = logits.argmax(dim=-1).squeeze(0).tolist()\r\n\r\n        new_tokens = [t for t in tokens if t not in self.prev_tokens]\r\n        self.prev_tokens = tokens\r\n\r\n        return self._decode_tokens(new_tokens)\r\n\r\n    def reset(self):\r\n        self.buffer = np.array([], dtype=np.float32)\r\n        self.prev_tokens = []\r\n\r\n    def _extract_features(self, audio: np.ndarray) -> torch.Tensor:\r\n        preprocessor = AudioPreprocessor()\r\n        mel = preprocessor.extract_mel_spectrogram(audio)\r\n        mel = preprocessor.normalize(mel)\r\n        return torch.from_numpy(mel).float()\r\n\r\n    def _decode_tokens(self, tokens: List[int]) -> str:\r\n        char_map = \" abcdefghijklmnopqrstuvwxyz'\"\r\n        return ''.join(char_map[t] if t < len(char_map) else '' for t in tokens)\r\n\r\nclass ASRServer:\r\n    \"\"\"FastAPI-style ASR server (abstracted).\"\"\"\r\n\r\n    def __init__(self, model: nn.Module, device: str = \"cpu\"):\r\n        self.model = model.to(device).eval()\r\n        self.device = device\r\n\r\n    @torch.no_grad()\r\n    def transcribe_batch(self, audio_batch: List[np.ndarray]) -> List[str]:\r\n        \"\"\"Transcribe a batch of audio files.\"\"\"\r\n        features = []\r\n        lengths = []\r\n        for audio in audio_batch:\r\n            mel = AudioPreprocessor().extract_mel_spectrogram(audio)\r\n            mel = AudioPreprocessor().normalize(mel)\r\n            features.append(torch.from_numpy(mel).float())\r\n            lengths.append(mel.shape[1])\r\n\r\n        features_padded = torch.nn.utils.rnn.pad_sequence(\r\n            features, batch_first=True\r\n        ).to(self.device)\r\n\r\n        logits = self.model(features_padded)\r\n        predictions = logits.argmax(dim=-1).cpu().numpy()\r\n\r\n        texts = []\r\n        for i, pred in enumerate(predictions):\r\n            text = self._decode(pred, lengths[i])\r\n            texts.append(text)\r\n        return texts\r\n\r\n    def _decode(self, tokens: np.ndarray, length: int) -> str:\r\n        char_map = \" abcdefghijklmnopqrstuvwxyz'\"\r\n        text = []\r\n        prev = -1\r\n        for t in tokens[:length]:\r\n            if t != prev and t != 0:\r\n                text.append(char_map[t] if t < len(char_map) else '')\r\n            prev = t\r\n        return ''.join(text)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Speech-to-text technology has evolved from traditional GMM-HMM systems to end-to-end deep learning. Wav2Vec 2.0 leverages self-supervised learning on unlabeled audio, achieving strong results with minimal transcribed data. Whisper demonstrates the power of large-scale supervised training across 100+ languages and.\r\ndiverse conditions. Modern ASR systems combine acoustic models with language models during beam search decoding. Speaker diarization extends ASR to multi-speaker scenarios. For.\r\nproduction, key considerations include noise robustness, streaming support, real-time factor, and deployment on edge devices with quantized models."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Takeaway"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Start with Whisper for any ASR task (supports 100+ languages)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "openai-whisper"
            }), " package or HuggingFace ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transformers"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use SpecAugment for training robust acoustic models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply frequency and time masking to mel spectrograms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Integrate a language model for production ASR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Beam search with N-gram LM reduces WER by 10-30%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Measure RTF (Real-Time Factor), not just WER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensure processing time < audio duration for real-time use"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Always add VAD preprocessing before ASR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces WER by focusing on speech regions only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use speaker diarization for multi-speaker audio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combine with ASR for speaker-attributed transcription"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mm05-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: How does Wav2Vec 2.0 achieve strong ASR performance with minimal labeled data?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Wav2Vec 2.0 uses self-supervised learning on unlabeled audio data. The architecture: (1) A CNN feature encoder processes raw waveform into latent speech representations. (2) A transformer context network captures contextualized representations. (3) During pre-training,.\na proportion of feature encoder outputs are masked, and the model must predict the masked representations from context using a contrastive loss (identifying the correct quantized target among distractors). This pre-training uses 960 hours of unlabeled LibriSpeech. After pre-training,.\nthe model is fine-tuned with just 1 hour of transcribed data to achieve a WER of 4.8/9.3 on LibriSpeech test-clean/test-other. With 10 hours of labeled data,.\nWER drops to 3.3/5.5, competitive with models trained on 1000+ hours. This dramatically reduces the labeling cost for new languages or.\ndomains."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mm05-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How does Whisper differ from Wav2Vec 2.0 in architecture and training approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Whisper is an encoder-decoder transformer trained on 680,000 hours of weakly supervised multilingual audio data. Unlike Wav2Vec 2.0's self-supervised approach (pre-train on unlabeled data,.\nfine-tune on labeled), Whisper is trained end-to-end on (audio, transcript) pairs with a simple cross-entropy loss. The encoder processes 80-channel log-mel spectrograms,.\nand the decoder autoregressively generates text tokens. Key features: (1) Trained on 100+ languages simultaneously. (2) Supports multiple tasks — transcription,.\ntranslation to English, language identification, and timestamps. (3) Uses special tokens to specify language and task: `<|en|>`, `<|transcribe|>`, `<|translate|>`. (4) Robust to diverse audio conditions because training data covers wide variety of noise,.\naccents, and recording qualities. Whisper large-v2 achieves 2.7% WER on LibriSpeech test-clean, approaching human-level accuracy."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mm05-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: What is Word Error Rate (WER) and how is it computed?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "WER measures the edit distance between the recognized text (hypothesis) and the reference transcript at the word level: WER = (S + I + D) / N,.\nwhere S = substitutions, I = insertions, D = deletions, and N = number of words in the reference. For example,.\nreference: \"I have a cat\", hypothesis: \"I has a car\" gives S=2 (have→has, cat→car), I=0, D=0, N=4, WER = 2/4 = 50%. WER can exceed 100% when there are many insertions. The alignment between hypothesis and.\nreference is computed using the Levenshtein distance algorithm (dynamic programming). Character Error Rate (CER) is the same at the character level. WER is the standard ASR metric because it captures both substitution errors (wrong word) and.\ninsertion/deletion errors (extra or missing words). A good production ASR achieves WER < 5% on clean speech and < 15% on noisy speech."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mm05-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: What is Real-Time Factor (RTF) and why is it important for ASR deployment?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "RTF = processing time / audio duration. An RTF of 1.0 means processing takes as long as the audio. RTF < 1.0 means the system is faster than real-time (e.g.,.\nRTF = 0.5 means 10 seconds of audio is processed in 5 seconds). For real-time applications (live captioning, voice assistants), RTF must be < 1.0,.\nwith a typical target of < 0.3 to account for network latency and other overhead. For batch processing (offline transcription), higher RTF is acceptable but.\nincreases cost. Factors affecting RTF: model size (Whisper large = 1.5B params, tiny = 39M params), hardware (GPU vs. CPU), quantization (FP16 vs. FP32),.\nand batch size. Whisper tiny achieves RTF ~0.02 on modern GPUs, making it suitable for real-time use."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mm05-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: How does speaker diarization work and how is it combined with ASR?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Speaker diarization answers \"who spoke when?\" The pipeline: (1) Voice Activity Detection (VAD) — identify speech segments. (2) Speaker embedding — extract d-vectors or.\nx-vectors from short windows (1.5s) using a pre-trained speaker recognition model. (3) Clustering — use agglomerative hierarchical clustering (AHC) or spectral clustering to group segments by speaker identity. (4) Resegmentation — refine boundaries at speaker change points. For.\ncombined ASR + diarization (called \"speaker-attributed transcription\"), run ASR on each speaker segment and assign the transcript to the identified speaker. The WDER (Word Diarization Error.\nRate) combines transcription errors and speaker assignment errors. Modern end-to-end neural diarization (EEND) uses transformers to directly predict speaker activity for.\neach frame, handling overlapping speech better than clustering-based methods."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mm05-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How do you make an ASR system robust to noisy environments?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Multi-strategy approach: (1) Training data augmentation — mix clean speech with noise (babble, traffic, wind) at various SNRs (0-20dB), convolve with room impulse responses (RIR) to simulate reverberation,.\napply SpecAugment (frequency/time masking). (2) Front-end processing — use spectral subtraction, Wiener filtering, or neural noise suppression (e.g., DCCRN, Demucs) before ASR. (3) Multi-channel processing — if multiple microphones available,.\napply beamforming (delay-and-sum, MVDR) to enhance the target speaker. (4) Model adaptation — fine-tune on domain-specific noisy data. (5) Confidence-based fallback — if ASR confidence is low,.\nprompt the user to repeat or switch to a different modality. The CHiME challenge benchmarks speech recognition in noisy environments, with the best systems now achieving <10% WER at 0dB SNR using multi-channel front-ends."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mm05-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: What is the difference between streaming and non-streaming ASR, and how do you implement each?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Non-streaming (batch) ASR processes the full audio utterance before outputting text. It achieves higher accuracy because the model has access to full context (both past and.\nfuture frames). Streaming ASR outputs text incrementally as audio arrives, with low latency (200-500ms from speech onset to text). Streaming models use unidirectional architectures that cannot see future frames: (1) Unidirectional RNNs or.\nLSTMs. (2) Causal convolutions (masked to prevent future information). (3) Transducer models (RNN-T) which naturally support streaming by processing audio frames sequentially. The accuracy gap has narrowed: RNN-Transducer models achieve near-batch accuracy while streaming. For.\nproduction, use RNN-T or causal attention for streaming, and standard transformers for batch processing where latency is not critical."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mm05-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How does language model integration improve ASR accuracy?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Language model (LM) integration corrects acoustic model errors using linguistic context. Approaches: (1) Shallow fusion — during beam search decoding, score each hypothesis with both the acoustic model (AM) score and.\nthe LM score: total_score = log(P_AM) + λ * log(P_LM). The LM weight λ (typically 0.1-0.5) controls influence. (2) Deep fusion — LM features are injected into the acoustic model's hidden layers during training. (3) Cold fusion — LM is pre-trained separately and.\nits embeddings are fused with AM features. (4) N-gram LMs — fast and compact, useful for domain adaptation (e.g., adding medical terminology). (5) Neural LMs — more accurate but.\nslower. A well-tuned language model can reduce WER by 10-30%, especially for rare words, proper nouns, and domain-specific terminology."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mm05-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: How do you compare CTC, Transducer, and attention-based ASR architectures?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CTC (Connectionist Temporal Classification): simple, assumes conditionally independent outputs (each frame's prediction is independent given the encoder), can stream with unidirectional encoder. Best for.\nlight-weight, real-time applications. Transducer (RNN-T): adds a prediction network that models output dependencies, enabling streaming while capturing linguistic context. Currently the standard for.\nproduction streaming ASR (used by Google, Apple). Attention-based (LAS, Whisper): encoder-decoder with cross-attention, captures full context but requires entire utterance for.\ndecoding (non-streaming). Highest accuracy for batch processing. Tradeoffs: CTC < Transducer < Attention in accuracy; CTC > Transducer > Attention in speed. For.\na voice assistant, use Transducer (streaming + good accuracy). For offline transcription, use Whisper (highest accuracy, multilingual support)."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mm05-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How do you implement SpecAugment for ASR training?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function specAugment(melSpec: number[][], freqMaskParam: number = 27,\n  timeMaskParam: number = 100, numFreqMasks: number = 2, numTimeMasks: number = 2) {\n  let augmented = melSpec.map(row => [...row]);\n  const numFreqBins = augmented.length, numTimeSteps = augmented[0].length;\n  // Frequency masking: mask contiguous frequency bands\n  for (let i = 0; i < numFreqMasks; i++) {\n    const f = Math.floor(Math.random() * freqMaskParam);\n    const f0 = Math.floor(Math.random() * (numFreqBins - f));\n    for (let j = f0; j < f0 + f; j++)\n      if (j < numFreqBins) augmented[j].fill(0);\n  }\n  // Time masking: mask contiguous time steps\n  for (let i = 0; i < numTimeMasks; i++) {\n    const t = Math.floor(Math.random() * timeMaskParam);\n    const t0 = Math.floor(Math.random() * (numTimeSteps - t));\n    for (let j = 0; j < numFreqBins; j++)\n      for (let k = t0; k < t0 + t; k++)\n        if (k < numTimeSteps) augmented[j][k] = 0;\n  }\n  return augmented;\n}</pre></cale>"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "SpecAugment is a simple but effective augmentation that masks contiguous bands in the mel-spectrogram domain. Frequency masking zeros out a random range of frequency bins (e.g.,.\n27 consecutive bins). Time masking zeros out a random range of time steps (e.g., 100 consecutive steps). This forces the model to learn from partial spectrograms,.\nimproving robustness to missing frequency bands (different microphone characteristics) and missing time segments (short audio dropouts). SpecAugment is applied online during training with random masks per sample. It consistently reduces WER by 5-15% across various ASR architectures and.\nrequires no additional data collection."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 1 (mmai-s05-quiz1):"
      }), " What does WER measure in ASR evaluation?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mmai-s05-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) (Substitutions + Insertions + Deletions) / Reference Words"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "WER measures the edit distance between the hypothesis and reference at the word level."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 2 (mmai-s05-quiz2):"
      }), " How does CTC loss handle alignment between audio and text?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mmai-s05-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) By introducing a blank label to handle variable-length alignment"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "CTC sums over all valid alignments using a blank token, enabling training without pre-segmented audio."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 3 (mmai-s05-quiz3):"
      }), " What is the key contribution of Wav2Vec 2.0?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mmai-s05-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Self-supervised speech representation learning from raw audio"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Wav2Vec 2.0 uses contrastive learning on masked audio features, then fine-tunes with just 1 hour of labeled data."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 4 (mmai-s05-quiz4):"
      }), " What does Real-Time Factor (RTF) < 1.0 indicate?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mmai-s05-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Processing is faster than real-time"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "RTF = processing time / audio duration. RTF < 1 means the system processes audio faster than it plays."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question 5 (mmai-s05-quiz5):"
      }), " How does speaker diarization work?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mmai-s05-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Segmenting audio by speaker identity using embeddings and clustering"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Diarization extracts speaker embeddings from short windows and clusters them to assign speaker labels."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "qa",
      children: "Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mmai-s05-q1",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "What features are commonly used for ASR input?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Audio representation for neural networks."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Common ASR features: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Log-mel spectrograms"
          }), " — most widely used, 80 filter banks covering 0-8kHz. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "MFCCs"
          }), " — traditional, with deltas and delta-deltas (39 dimensions). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Raw waveform"
          }), " — used by Wav2Vec and other end-to-end models. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Filter bank (FBANK)"
          }), " — similar to mel but with energy normalization. Log-mel spectrograms (80-dim) are the standard for modern DNN-based ASR, balancing information content with computational efficiency."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-actions",
        children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-mark-btn",
          children: "✅ Mark Reviewed"
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-bookmark-btn",
          children: "🔖 Bookmark"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mmai-s05-q2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "How do you handle out-of-vocabulary words in ASR?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Dealing with unseen words at inference time."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Strategies include: (1) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Subword tokenization"
          }), " — BPE or unigram LM splits words into subword units, enabling infinite vocabulary. (2) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Hybrid approaches"
          }), " — use a character-based backup model when word-level LM fails. (3) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Hotword injection"
          }), " — bias the decoder toward specific phrases (names, domain terms). (4) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Contextual biasing"
          }), " — dynamically adjust the LM scores for known entities using a shallow fusion approach."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-actions",
        children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-mark-btn",
          children: "✅ Mark Reviewed"
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-bookmark-btn",
          children: "🔖 Bookmark"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mmai-s05-q3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "What is the difference between streaming and batch ASR?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Deployment modes for speech recognition."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Batch ASR"
          }), " processes the full audio before returning text. It achieves higher accuracy because the model has full context. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Streaming ASR"
          }), " outputs text incrementally as audio arrives, with low latency (200-500ms). Streaming models use unidirectional RNNs or causal convolutions (no future context). The accuracy gap between streaming and batch ASR has narrowed with transducer models and chunk-wise processing."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-actions",
        children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-mark-btn",
          children: "✅ Mark Reviewed"
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-bookmark-btn",
          children: "🔖 Bookmark"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mmai-s05-q4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "How do you diarize a meeting with overlapping speech?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Handling multi-speaker conversations."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Overlapping speech diarization: (1) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "End-to-end neural diarization (EEND)"
          }), " — directly predicts per-speaker activity for each time frame using a transformer with permutation-invariant loss. (2) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Target speaker extraction"
          }), " — extract each speaker's speech using a pre-enrolled speaker embedding. (3) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SO-Net"
          }), " — overlap-aware clustering with attractor networks. EEND-based approaches handle overlapping speech better than traditional clustering methods."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-actions",
        children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-mark-btn",
          children: "✅ Mark Reviewed"
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-bookmark-btn",
          children: "🔖 Bookmark"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mmai-s05-q5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "What augmentation strategies improve ASR noise robustness?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Training data diversification for noisy conditions."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Key augmentations: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Noise injection"
          }), " — mix clean speech with background noise at various SNRs (0-20dB). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "RIR convolution"
          }), " — simulate room acoustics using impulse responses. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Speed perturbation"
          }), " — stretch audio 0.9-1.1—. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SpecAugment"
          }), " — mask time and frequency bands in mel space. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "VoxPopuli-style mixing"
          }), " — mix multiple speakers at random ratios. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Bandpass filtering"
          }), " — simulate telephone bandwidth. Combine 3-5 augmentations for each training sample."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-actions",
        children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-mark-btn",
          children: "✅ Mark Reviewed"
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-bookmark-btn",
          children: "🔖 Bookmark"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mmai-s05-q6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "How does Whisper support multilingual transcription?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Language handling in large-scale ASR."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Whisper uses special tokens to indicate language and task: `<|en|>` for English, `<|transcribe|>` for transcription, or `<|translate|>` for translation to English. It was trained on 680k hours of multilingual data covering 100+ languages. The model first predicts the language ID from the audio using a language identification head at the start of decoding. Multilingual training enables cross-lingual transfer and zero-shot generalization to low-resource languages."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-actions",
        children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-mark-btn",
          children: "✅ Mark Reviewed"
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-bookmark-btn",
          children: "🔖 Bookmark"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mmai-s05-q7",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "What is the beam search decoder in ASR?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Decoding strategy for ASR output."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Beam search maintains the top-K hypotheses at each decoding step, expanding each with possible next tokens and keeping the best overall sequences. In ASR, the decoder combines: acoustic model scores (from CTC or transducer), language model scores (from N-gram or neural LM), and coverage/blank penalties. The beam width (typically 5-20) trades speed for accuracy. Shallow fusion combines an external LM with the acoustic model during beam search."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-actions",
        children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-mark-btn",
          children: "✅ Mark Reviewed"
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-bookmark-btn",
          children: "🔖 Bookmark"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mmai-s05-q8",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "How do you deploy ASR on edge devices?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "On-device speech recognition."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Edge ASR requires: (1) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Model quantization"
          }), " — INT8 quantization reduces size 4— with minimal WER increase. (2) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Streaming architecture"
          }), " — transducer models with chunk-wise processing for low latency. (3) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Keyword spotting first"
          }), " — wake-word detector activates the main ASR only when needed. (4) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Hardware acceleration"
          }), " — use NPU/GPU for neural inference, DSP for feature extraction. (5) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Model pruning"
          }), " — remove less important weights (30-50% sparsity). Whisper tiny (39M params) runs at real-time on modern smartphones."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-actions",
        children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-mark-btn",
          children: "✅ Mark Reviewed"
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-bookmark-btn",
          children: "🔖 Bookmark"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mmai-s05-q9",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "What is the role of self-supervised learning in ASR?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Pre-training without transcriptions."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Self-supervised learning (SSL) for ASR pre-trains on unlabeled audio: (1) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Contrastive objectives"
          }), " — Wav2Vec 2.0 contrasts masked representations against quantized targets. (2) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Masked prediction"
          }), " — HuBERT predicts cluster assignments for masked frames. (3) ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Autoregressive prediction"
          }), " — WavLM predicts future frames. SSL reduces the required labeled data from 1000+ hours to as little as 1 hour while maintaining competitive WER. The pre-trained representations capture phonetic, speaker, and prosodic information."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-actions",
        children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-mark-btn",
          children: "✅ Mark Reviewed"
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-bookmark-btn",
          children: "🔖 Bookmark"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "mmai-s05-q10",
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        className: "tp-qa-question",
        children: "What are the tradeoffs between CTC, Transducer, and attention-based ASR?"
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-context",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Comparing ASR architectures."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CTC"
          }), " — simple, fast, streaming-capable with unidirectional encoder, but assumes conditional independence of outputs. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Transducer"
          }), " — streams naturally, models output dependencies, achieves better accuracy than CTC, but more complex training. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Attention-based (LAS/Whisper)"
          }), " — highest accuracy, captures global context, but requires full utterance for decoding (non-streaming). The choice depends on streaming requirements: Transducer for real-time, Whisper for batch/high-accuracy applications."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-actions",
        children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-mark-btn",
          children: "✅ Mark Reviewed"
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-bookmark-btn",
          children: "🔖 Bookmark"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Not understanding the fundamental concepts before applying them"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Skipping edge cases in implementation"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Not analyzing time/space complexity"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Forgetting to handle null/empty inputs"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Not practicing enough problems to build pattern recognition1. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Feature Extraction"
          }), ": Load an audio file, extract 80-dim log-mel spectrogram with hop_length=160. Visualize the spectrogram. Compute and visualize MFCCs (13 coefficients with deltas). Compare the two representations."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CTC Acoustic Model"
          }), ": Implement CTC loss training on 100 synthetic (audio, text) pairs. Monitor the loss and gradients. What happens if you remove batch normalization?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Language Model Integration"
          }), ": Train a 3-gram language model on a 1M word corpus. Integrate it with beam search decoder. Measure WER reduction compared to greedy decoding. Vary the LM weight (0.1, 0.3, 0.5, 1.0). What is the optimal weight?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Wav2Vec Feature Extraction"
          }), ": Use a pre-trained Wav2Vec 2.0 model to extract features from 5 audio samples. Visualize the self-attention patterns. Which layers focus on phonetic vs. speaker information?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Whisper Transcription"
          }), ": Transcribe a 60-second audio clip with Whisper small. Extract segments with timestamps. Export to SRT format. Compare the transcription with ground truth and compute WER."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Speaker Diarization"
          }), ": Given a 2-speaker conversation audio, implement diarization with embedding extraction and agglomerative clustering. Assign speaker labels (SPEAKER_00, SPEAKER_01). Overlay speaker labels on the transcript. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sklearn.metrics.adjusted_rand_score"
          }), " to evaluate against ground truth."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Noise Robustness"
          }), ": Take a clean speech recording. Add babble noise at 0dB, 10dB, and 20dB SNR. Transcribe each with Whisper. Report WER at each SNR level. Apply spectral subtraction and re-transcribe. How much does WER improve?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Streaming ASR"
          }), ": Implement a streaming ASR decoder using a unidirectional LSTM. Process audio in 320ms chunks with 160ms overlap. Measure the latency between speech onset and text output. Compare accuracy with full-utterance decoding."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Multi-Channel Processing"
          }), ": Create a simulated linear array of 4 microphones. Generate delays for a sound source at 30° azimuth. Apply delay-and-sum beamforming to enhance the source. Compare the enhanced signal's ASR WER with a single-channel baseline."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ASR Server with Batching"
          }), ": Build a batch ASR inference server. Process 1, 8, 32, and 64 audio files concurrently. Measure throughput (audio-seconds/second) and RTF. At what batch size does throughput satur"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Core principle: Understand the fundamental concepts thoroughly"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implementation pattern: Practice with real code examples"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Complexity: Know the time and space complexity"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Application: Know when to use this in production systems"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Interview: Frequently asked in technical interviews"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Edge cases: Consider common failure scenarios"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Related concepts: Connect to broader system design"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "placement-section",
      children: "Placement Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "top-10-interview-questions",
      children: "Top 10 Interview Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "google-style",
      children: "Google Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Explain the core idea of Speech-to-Text in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Speech-to-Text."
          }), " — Interviewer checks: signature with type hints, edge cases, complexity, and a clean docstring. Follow-up: how does your design behave with empty or malformed input?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "**What are the common pitfalls when engineers first learn ** — List 3-4, then explain how you would prevent each in a code review."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "amazon-style",
      children: "Amazon Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Describe a production bug caused by misunderstanding Speech-to-Text. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Speech-to-Text from 10 users to 10 million?"
          }), " — Discuss bottlenecks, caching, monitoring, and when to redesign. Follow-up: what metrics would you track?"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "microsoft-style",
      children: "Microsoft Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Compare Speech-to-Text with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Speech-to-Text."
          }), " — Unit, integration, property-based tests; mocking boundaries; golden files for outputs."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "nvidia-style",
      children: "NVIDIA Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How does Speech-to-Text behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Speech-to-Text run faster on GPU hardware?"
          }), " — Batch operations, vectorization, avoiding Python loops, reducing data movement."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ai-startup-style",
      children: "AI Startup Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write the smallest possible implementation of Speech-to-Text that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Speech-to-Text explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Speech-to-Text\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Speech-to-Text to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Speech-to-Text (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Speech-to-Text and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Speech-to-Text-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Speech-to-Text interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Speech-to-Text in production today?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test your environment (Python, editor, internet) 15 minutes before the interview."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "truefalse",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Speech-to-Text builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Speech-to-Text before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Speech-to-Text is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Speech-to-Text in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Speech-to-Text chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Speech-to-Text is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 05 Speech To Text is ___. — Answer: O(n) typical, O(1) best case"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 05 Speech To Text is ___. — Answer: empty input, boundary values, invalid types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Speech-to-Text issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Speech-to-Text in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Speech-to-Text that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Speech-to-Text is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Speech-to-Text in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Speech-to-Text and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Speech-to-Text on an empty input?"
        }), " — Trace through the code: it should return the documented default (None, 0, empty collection) without raising."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output when the input is at the boundary value?"
        }), " — Check off-by-one errors and inclusive/exclusive bounds in the chapter's examples."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What does the implementation return when given invalid input types?"
        }), " — With type hints and validation, it raises a clear error; without, it may fail silently."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output for the sample input given in the chapter's Examples section?"
        }), " — Re-run the chapter's example code and compare against the documented output."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the time complexity output when you profile the implementation at 10x input size?"
        }), " — Expect the curve matching the chapter's complexity analysis (linear, quadratic, log-linear)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "difficulty-level",
      children: "Difficulty Level"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Takes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Beginner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-2 sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read theory, run the chapter examples, solve the Easy exercises"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intermediate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-5 sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete Medium exercises, explain Speech-to-Text to someone else"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1+ week"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solve Hard exercises, optimize for real datasets, answer interview follow-ups"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tips--tricks",
      children: "Tips & Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always write a one-line example of Speech-to-Text from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Speech-to-Text when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Speech-to-Text twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Speech-to-Text snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Speech-to-Text listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Speech-to-Text to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Speech-to-Text by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Speech-to-Text to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The original research paper introducing this concept (search Google Scholar)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Towards Data Science articles on this topic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The relevant chapter in 'Designing Data-Intensive Applications' by Kleppmann"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub repositories of production implementations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 18 — builds the foundation for 05 Speech To Text"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 05 Speech To Text with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 05 Speech To Text fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 05 Speech To Text"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 05 Speech To Text"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 05 Speech To Text?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 05 Speech To Text?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 05 Speech To Text asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 05 Speech To Text?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Speech-to-Text is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Speech-to-Text."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Production correctness means handling edge cases, not just the happy path."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview answers should start with the definition, then the example, then the trade-offs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Revisit this chapter after finishing the module; the context from later chapters deepens understanding."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "historical-context",
      children: "Historical Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["05 Speech To Text evolved from academic research into production engineering practice over the last decade — knowing this history helps you explain ", (0,jsx_runtime.jsx)(_components.em, {
          children: "why"
        }), " it works in interviews."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used today (transformers, vector databases, containerization) replaced earlier approaches that failed at scale — understanding the failures makes the solutions intuitive."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The field moves fast: what was cutting-edge in 2022 is now table stakes in 2025 — focus on fundamentals that remain stable across tool generations."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Interviewers value historical context because it shows you understand ", (0,jsx_runtime.jsx)(_components.em, {
          children: "why"
        }), " a technique exists, not just ", (0,jsx_runtime.jsx)(_components.em, {
          children: "how"
        }), " to use it."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate all external inputs before processing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never log sensitive data (API keys, PII, passwords)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use environment variables for configuration secrets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement rate limiting for public-facing endpoints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow the principle of least privilege for all system components"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This concept appears in ML pipelines at the data processing, training, or serving layer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding it helps debug model misbehavior — most ML bugs are infrastructure bugs, not model bugs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply vectorization and batching to scale this concept to large datasets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor for drift and degradation in production — set up alerts for key metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connect to the broader ML lifecycle: data → features → training → evaluation → deployment → monitoring"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "05 Speech To Text is like a GPS navigation system"
        }), ": you define the destination (goal), the system plans the route (algorithm), and recalculates when you take a wrong turn (error handling)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complexity is like a restaurant kitchen"
        }), ": a single chef (O(n)) handles small orders fine, but 1000 simultaneous orders need parallel chefs (O(log n) with proper indexing)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Edge cases are like stress tests"
        }), ": the happy path is a calm day, but production is Black Friday — design for the worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The chapter roadmap is a subway map"
        }), ": each section is a station, and skipping one means you miss the connection to the next destination."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "capstone-project-link",
      children: "Capstone Project Link"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/Raushan666java/ai-engineering-journey",
          children: "Module Capstone: End-to-End Project"
        }), " — this chapter contributes the Speech-to-Text skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "18multimodalaivoice-05speechtotext-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Speech-to-Text in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the Theory section and write a one-sentence definition that includes: what it is, how it works, and why it matters for production AI engineering."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "18multimodalaivoice-05speechtotext-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the most common mistake engineers make with \n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "The most common mistake is skipping edge cases. Always handle empty input, null values, and boundary conditions before implementing the happy path."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "18multimodalaivoice-05speechtotext-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Speech-to-Text approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Time complexity depends on the algorithm chosen. Space complexity depends on whether you store intermediate results. Always state both for interview answers."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "18multimodalaivoice-05speechtotext-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Speech-to-Text NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "This technique is not the right choice when simpler alternatives suffice, when the overhead exceeds the benefit, or when the team lacks the expertise to maintain it."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "18multimodalaivoice-05speechtotext-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Speech-to-Text applied in a real production system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Production stack: use the libraries shown in the code examples, add monitoring with Prometheus/Grafana, test with pytest, and lint with ruff."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Speech-to-Text (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Speech-to-Text (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Speech-to-Text-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Speech-to-Text in production at scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEPs and RFCs where applicable (Python and networking standards)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The primary library used in the code examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pytest for unit and integration testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ruff + black for linting and formatting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mypy for static type checking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cProfile / py-spy for performance profiling"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 1"
        }), ": Reproduce the failure with the smallest possible input — isolate the bug before changing any code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 2"
        }), ": Add structured logging at each stage of the 05 Speech To Text pipeline to identify exactly where the failure occurs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 3"
        }), ": Check the Common Mistakes section — 80% of bugs match one of those patterns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 4"
        }), ": Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pdb.set_trace()"
        }), " or your IDE debugger to inspect intermediate values at the failure point."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 5"
        }), ": For performance issues, profile with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cProfile"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "py-spy"
        }), " before optimizing — never guess at bottlenecks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 6"
        }), ": Write a regression test that reproduces the bug before fixing it — this prevents recurrence."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mock-interview-section",
      children: "Mock Interview Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 1 — Screening (15 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain Speech-to-Text in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Speech-to-Text."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the complexity of your example?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 2 — Coding (45 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve the Medium exercise from this chapter under time pressure."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State your assumptions, then implement with type hints."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test with edge cases: empty input, boundary values, invalid input."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 3 — Behavioral + System (30 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tell me about a time you debugged a Speech-to-Text problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Speech-to-Text is used at scale?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What metrics would you monitor?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Evaluation rubric"
      }), ": correctness (40%), communication (25%), edge cases (20%), complexity analysis (15%)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "optimized-implementation",
      children: "Optimized Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_05_speech_to_text(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 05 Speech To Text.\r\n\r\n    Key concepts: core concepts, data structures, algorithms, patterns\r\n    Complexity: O(n) typical, O(1) best case\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 05 Speech To Text here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keeps the function signature stable so tests written against it stay valid."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handles the empty-input contract explicitly."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add unit tests for the edge cases before implementing the logic (test-first)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "evaluation-metrics",
      children: "Evaluation Metrics"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Skill"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Test"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concept recall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain Speech-to-Text without notes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60-second explanation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code fluency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write the chapter example from memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No syntax errors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edge cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle empty/invalid input in exercises"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All cases pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State time/space for the standard approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correct big-O"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interview readiness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Answer 5 Interview Q&A questions out loud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fluent, structured answers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Retention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chapter quiz score after 3 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80%+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-world-examples",
      children: "Real-World Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Applied in production at companies like Google, Meta, Amazon, and Microsoft"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Used in data pipelines, model serving, and API backends"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables scalable, maintainable systems when applied correctly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview insight: connect the concept to a business outcome — cost reduction, latency improvement, or reliability increase"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/18-multimodal-ai-voice/06-voice-agents",
        children: "Voice Agents"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Speech-to-Text, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Speech-to-Text depends on input size and distribution — always benchmark for your own data."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone."
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ },

/***/ 28453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }

}]);