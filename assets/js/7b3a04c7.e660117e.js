"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[3142],{

/***/ 69420
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_09_deep_learning_pytorch_07_rnn_and_lstm_md_7b3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-09-deep-learning-pytorch-07-rnn-and-lstm-md-7b3.json
const site_docs_courses_ai_engineering_placement_09_deep_learning_pytorch_07_rnn_and_lstm_md_7b3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/deep-learning-pytorch/07-rnn-and-lstm","title":"RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/09-deep-learning-pytorch/07-rnn-and-lstm.md","sourceDirName":"courses/ai-engineering-placement/09-deep-learning-pytorch","slug":"/ai-engineering-placement/09-deep-learning-pytorch/07-rnn-and-lstm","permalink":"/ai-engineering-journey/ai-engineering-placement/09-deep-learning-pytorch/07-rnn-and-lstm","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":132,"frontMatter":{"id":"07-rnn-and-lstm","slug":"/ai-engineering-placement/09-deep-learning-pytorch/07-rnn-and-lstm","title":"RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing","sidebar_label":"RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing","sidebar_position":132},"sidebar":"placementSidebar","previous":{"title":"Transfer Learning — Feature Extraction, Fine-Tuning, Model Hub, Domain Adaptation","permalink":"/ai-engineering-journey/ai-engineering-placement/09-deep-learning-pytorch/06-transfer-learning"},"next":{"title":"Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing","permalink":"/ai-engineering-journey/ai-engineering-placement/09-deep-learning-pytorch/08-training-pipelines"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/09-deep-learning-pytorch/07-rnn-and-lstm.md


const frontMatter = {
	id: '07-rnn-and-lstm',
	slug: '/ai-engineering-placement/09-deep-learning-pytorch/07-rnn-and-lstm',
	title: 'RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing',
	sidebar_label: 'RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing',
	sidebar_position: 132
};
const contentTitle = 'RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing';

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
  "value": "7.1 Vanilla RNN",
  "id": "71-vanilla-rnn",
  "level": 2
}, {
  "value": "7.2 Vanishing Gradient in RNNs",
  "id": "72-vanishing-gradient-in-rnns",
  "level": 2
}, {
  "value": "7.3 LSTM",
  "id": "73-lstm",
  "level": 2
}, {
  "value": "7.4 GRU",
  "id": "74-gru",
  "level": 2
}, {
  "value": "7.5 Bidirectional RNNs",
  "id": "75-bidirectional-rnns",
  "level": 2
}, {
  "value": "7.6 Seq2Seq and Teacher Forcing",
  "id": "76-seq2seq-and-teacher-forcing",
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
    blockquote: "blockquote",
    button: "button",
    code: "code",
    details: "details",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
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
        id: "rnn-and-lstm--rnn-lstm-gru-bidirectional-rnns-seq2seq-teacher-forcing",
        children: "RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing"
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
            children: "Understand the recurrent computation and hidden state in RNNs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify the vanishing gradient problem in RNNs and how LSTM/GRU fix it"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement LSTM and GRU cells in PyTorch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build bidirectional RNNs for sequence classification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement seq2seq models with encoder-decoder architecture"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply teacher forcing, packed sequences, and gradient clipping for training"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Deep learning powers modern AI breakthroughs. PyTorch is the framework of choice for researchers and production engineers alike. This module covers neural networks, CNNs, RNNs, and deployment best practices."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding rnn and lstm is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how rnn and lstm works in practice."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "7.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vanilla RNN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recurrent computation, hidden state, backprop through time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vanishing Gradient"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gradient decay in long sequences, tanh saturation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LSTM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forget gate, input gate, output gate, cell state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GRU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update gate, reset gate, fewer parameters than LSTM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional RNNs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward and backward passes, context fusion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seq2Seq and Teacher Forcing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encoder-decoder, scheduled sampling, attention"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    subgraph RNN_Cell[RNN Cell]\r\n        A[Input x_t] --> B[Hidden h_t]\r\n        C[\"Previous h_{t-1}\"] --> B\r\n    end\r\n    B --> D[BPTT]\r\n    D --> E{Vanishing Gradient?}\r\n    E -->|Yes| F[LSTM / GRU]\r\n    E -->|No| G[Bidirectional?]\r\n    G -->|Yes| H[BiRNN]\r\n    G -->|No| I[Seq2Seq]\r\n    H --> I\r\n    I --> J[Encoder]\r\n    J --> K[Decoder]\r\n    K --> L[Teacher Forcing]\r\n    L --> M[Output Sequence]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "71-vanilla-rnn",
      children: "7.1 Vanilla RNN"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A vanilla RNN processes sequences by maintaining a hidden state that is updated at each time step."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import torch\r\nimport torch.nn as nn\r\nimport torch.optim as optim\r\nfrom torch.nn.utils.rnn import pack_padded_sequence, pad_packed_sequence\r\nfrom typing import Optional, Tuple\r\n\r\nclass VanillaRNN(nn.Module):\r\n    def __init__(self, input_size: int, hidden_size: int, num_layers: int = 1):\r\n        super().__init__()\r\n        self.hidden_size = hidden_size\r\n        self.num_layers = num_layers\r\n        self.i2h = nn.Linear(input_size + hidden_size, hidden_size)\r\n        self.i2o = nn.Linear(input_size + hidden_size, hidden_size)\r\n        self.tanh = nn.Tanh()\r\n\r\n    def forward(self, x: torch.Tensor, hidden: Optional[torch.Tensor] = None\r\n                ) -> Tuple[torch.Tensor, torch.Tensor]:\r\n        batch_size, seq_len, _ = x.shape\r\n        if hidden is None:\r\n            hidden = torch.zeros(self.num_layers, batch_size, self.hidden_size)\r\n        outputs = []\r\n        for t in range(seq_len):\r\n            combined = torch.cat((x[:, t, :], hidden[-1]), dim=1)\r\n            hidden_state = self.tanh(self.i2h(combined))\r\n            output = self.i2o(combined)\r\n            outputs.append(output.unsqueeze(1))\r\n            hidden = hidden_state.unsqueeze(0)\r\n        return torch.cat(outputs, dim=1), hidden\r\n\r\nclass PyTorchRNN(nn.Module):\r\n    def __init__(self, input_size: int, hidden_size: int, num_layers: int = 1,\r\n                 batch_first: bool = True, bidirectional: bool = False):\r\n        super().__init__()\r\n        self.rnn = nn.RNN(input_size, hidden_size, num_layers,\r\n                          batch_first=batch_first,\r\n                          bidirectional=bidirectional,\r\n                          nonlinearity=\"tanh\")\r\n\r\n    def forward(self, x: torch.Tensor, hidden: Optional[torch.Tensor] = None\r\n                ) -> Tuple[torch.Tensor, torch.Tensor]:\r\n        return self.rnn(x, hidden)\r\n\r\nrnn = PyTorchRNN(input_size=10, hidden_size=20, num_layers=2)\r\nx = torch.randn(4, 15, 10)  # batch=4, seq_len=15, features=10\r\noutput, hidden = rnn(x)\r\nprint(f\"RNN output shape: {output.shape}\")  # (4, 15, 20)\r\nprint(f\"RNN hidden shape: {hidden.shape}\")  # (2, 4, 20)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Backpropagation Through Time (BPTT)"
      }), " unrolls the RNN across all time steps and computes gradients by backpropagating through the unrolled graph."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class BPTTDemo:\r\n    @staticmethod\r\n    def compute_gradients(rnn_model: nn.Module, x: torch.Tensor, y: torch.Tensor,\r\n                          loss_fn: nn.Module):\r\n        output, _ = rnn_model(x)\r\n        loss = loss_fn(output, y)\r\n        loss.backward()\r\n        total_norm = 0\r\n        for p in rnn_model.parameters():\r\n            if p.grad is not None:\r\n                param_norm = p.grad.data.norm(2)\r\n                total_norm += param_norm.item() ** 2\r\n        return loss.item(), total_norm ** 0.5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "72-vanishing-gradient-in-rnns",
      children: "7.2 Vanishing Gradient in RNNs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The vanishing gradient problem is severe in vanilla RNNs because repeated multiplication by the recurrent weight matrix (through the chain rule) causes gradients to exponentially decay to zero."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class VanishingGradientAnalysis:\r\n    def __init__(self, input_size: int = 10, hidden_size: int = 10):\r\n        self.rnn = nn.RNN(input_size, hidden_size, batch_first=True)\r\n        self.hidden_size = hidden_size\r\n\r\n    def compute_gradient_norms(self, seq_len: int = 50, batch_size: int = 8):\r\n        x = torch.randn(batch_size, seq_len, self.hidden_size)\r\n        y = torch.randn(batch_size, self.hidden_size)\r\n        output, _ = self.rnn(x)\r\n        loss = nn.functional.mse_loss(output[:, -1, :], y)\r\n        loss.backward()\r\n        norms = []\r\n        for name, param in self.rnn.named_parameters():\r\n            if param.grad is not None:\r\n                norms.append((name, param.grad.norm().item()))\r\n        return norms\r\n\r\n    def analyze_gradient_flow(self, seq_lengths: list):\r\n        results = {}\r\n        for seq_len in seq_lengths:\r\n            x = torch.randn(4, seq_len, self.hidden_size)\r\n            y = torch.randn(4, self.hidden_size)\r\n            self.rnn.zero_grad()\r\n            output, _ = self.rnn(x)\r\n            loss = nn.functional.mse_loss(output[:, -1, :], y)\r\n            loss.backward()\r\n            grad_norm = self.rnn.weight_hh_l0.grad.norm().item()\r\n            results[seq_len] = grad_norm\r\n        return results\r\n\r\nanalyzer = VanishingGradientAnalysis(10, 10)\r\nnorms = analyzer.compute_gradient_norms(seq_len=30)\r\nfor name, norm in norms:\r\n    print(f\"{name}: grad norm = {norm:.6f}\")\r\n\r\nflow = analyzer.analyze_gradient_flow([5, 10, 20, 50])\r\nfor seq_len, norm in flow.items():\r\n    print(f\"Seq Len {seq_len}: hidden weight grad norm = {norm:.6f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why gradients vanish"
      }), ": In BPTT, the gradient of the loss w.r.t. the hidden state at time t involves the product of Jacobians across all time steps. If the eigenvalues of the recurrent weight matrix are less than 1, this product decays exponentially. Tanh activation (derivative ≤ 1) compounds this effect."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class GradientClipping:\r\n    def __init__(self, model: nn.Module, max_norm: float = 1.0):\r\n        self.model = model\r\n        self.max_norm = max_norm\r\n\r\n    def train_step(self, x: torch.Tensor, y: torch.Tensor,\r\n                   optimizer: optim.Optimizer, criterion: nn.Module) -> float:\r\n        optimizer.zero_grad()\r\n        output, _ = self.model(x)\r\n        loss = criterion(output, y)\r\n        loss.backward()\r\n        nn.utils.clip_grad_norm_(self.model.parameters(), self.max_norm)\r\n        optimizer.step()\r\n        return loss.item()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "73-lstm",
      children: "7.3 LSTM"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LSTM (Long Short-Term Memory) introduces a cell state and three gates to control information flow, solving the vanishing gradient problem."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class LSTMCell(nn.Module):\r\n    def __init__(self, input_size: int, hidden_size: int):\r\n        super().__init__()\r\n        self.hidden_size = hidden_size\r\n        self.forget_gate = nn.Linear(input_size + hidden_size, hidden_size)\r\n        self.input_gate = nn.Linear(input_size + hidden_size, hidden_size)\r\n        self.cell_update = nn.Linear(input_size + hidden_size, hidden_size)\r\n        self.output_gate = nn.Linear(input_size + hidden_size, hidden_size)\r\n        self.sigmoid = nn.Sigmoid()\r\n        self.tanh = nn.Tanh()\r\n\r\n    def forward(self, x: torch.Tensor, h_prev: torch.Tensor, c_prev: torch.Tensor\r\n                ) -> Tuple[torch.Tensor, torch.Tensor]:\r\n        combined = torch.cat((x, h_prev), dim=1)\r\n        f = self.sigmoid(self.forget_gate(combined))\r\n        i = self.sigmoid(self.input_gate(combined))\r\n        c_tilde = self.tanh(self.cell_update(combined))\r\n        o = self.sigmoid(self.output_gate(combined))\r\n        c = f * c_prev + i * c_tilde\r\n        h = o * self.tanh(c)\r\n        return h, c\r\n\r\nclass LSTMStack(nn.Module):\r\n    def __init__(self, input_size: int, hidden_size: int, num_layers: int = 1,\r\n                 bidirectional: bool = False):\r\n        super().__init__()\r\n        self.lstm = nn.LSTM(input_size, hidden_size, num_layers,\r\n                            batch_first=True, bidirectional=bidirectional)\r\n\r\n    def forward(self, x: torch.Tensor, hidden: Optional[Tuple[torch.Tensor, torch.Tensor]] = None\r\n                ) -> Tuple[torch.Tensor, Tuple[torch.Tensor, torch.Tensor]]:\r\n        return self.lstm(x, hidden)\r\n\r\nlstm = LSTMStack(input_size=10, hidden_size=32, num_layers=2)\r\nx = torch.randn(4, 20, 10)\r\noutput, (h_n, c_n) = lstm(x)\r\nprint(f\"LSTM output: {output.shape}\")     # (4, 20, 32)\r\nprint(f\"LSTM h_n: {h_n.shape}\")           # (2, 4, 32)\r\nprint(f\"LSTM c_n: {c_n.shape}\")           # (2, 4, 32)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Custom LSTM with peephole connections"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class LSTMPeephole(nn.Module):\r\n    def __init__(self, input_size: int, hidden_size: int):\r\n        super().__init__()\r\n        self.hidden_size = hidden_size\r\n        self.w_f = nn.Linear(input_size + hidden_size, hidden_size)\r\n        self.w_i = nn.Linear(input_size + hidden_size, hidden_size)\r\n        self.w_c = nn.Linear(input_size + hidden_size, hidden_size)\r\n        self.w_o = nn.Linear(input_size + hidden_size, hidden_size)\r\n        # Peephole connections\r\n        self.peep_f = nn.Parameter(torch.randn(hidden_size))\r\n        self.peep_i = nn.Parameter(torch.randn(hidden_size))\r\n        self.peep_o = nn.Parameter(torch.randn(hidden_size))\r\n\r\n    def forward(self, x: torch.Tensor, h: torch.Tensor, c: torch.Tensor\r\n                ) -> Tuple[torch.Tensor, torch.Tensor]:\r\n        combined = torch.cat((x, h), dim=1)\r\n        f = torch.sigmoid(self.w_f(combined) + self.peep_f * c)\r\n        i = torch.sigmoid(self.w_i(combined) + self.peep_i * c)\r\n        c_tilde = torch.tanh(self.w_c(combined))\r\n        c_new = f * c + i * c_tilde\r\n        o = torch.sigmoid(self.w_o(combined) + self.peep_o * c_new)\r\n        h_new = o * torch.tanh(c_new)\r\n        return h_new, c_new\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "74-gru",
      children: "7.4 GRU"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GRU (Gated Recurrent Unit) simplifies LSTM by combining the forget and input gates into a single update gate and removing the cell state."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class GRUCell(nn.Module):\r\n    def __init__(self, input_size: int, hidden_size: int):\r\n        super().__init__()\r\n        self.hidden_size = hidden_size\r\n        self.update_gate = nn.Linear(input_size + hidden_size, hidden_size)\r\n        self.reset_gate = nn.Linear(input_size + hidden_size, hidden_size)\r\n        self.candidate = nn.Linear(input_size + hidden_size, hidden_size)\r\n\r\n    def forward(self, x: torch.Tensor, h_prev: torch.Tensor) -> torch.Tensor:\r\n        combined = torch.cat((x, h_prev), dim=1)\r\n        z = torch.sigmoid(self.update_gate(combined))\r\n        r = torch.sigmoid(self.reset_gate(combined))\r\n        combined_reset = torch.cat((x, r * h_prev), dim=1)\r\n        h_tilde = torch.tanh(self.candidate(combined_reset))\r\n        h = (1 - z) * h_prev + z * h_tilde\r\n        return h\r\n\r\nclass GRUModel(nn.Module):\r\n    def __init__(self, input_size: int, hidden_size: int, num_layers: int = 1,\r\n                 bidirectional: bool = False):\r\n        super().__init__()\r\n        self.gru = nn.GRU(input_size, hidden_size, num_layers,\r\n                          batch_first=True, bidirectional=bidirectional,\r\n                          dropout=0.2 if num_layers > 1 else 0)\r\n\r\n    def forward(self, x: torch.Tensor) -> torch.Tensor:\r\n        output, h_n = self.gru(x)\r\n        return output, h_n\r\n\r\ngru = GRUModel(input_size=10, hidden_size=32, num_layers=2)\r\nx = torch.randn(4, 20, 10)\r\noutput, h_n = gru(x)\r\nprint(f\"GRU output: {output.shape}\")  # (4, 20, 32)\r\nprint(f\"GRU h_n: {h_n.shape}\")        # (2, 4, 32)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "LSTM vs GRU comparison"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def compare_gru_lstm(input_size: int = 10, hidden_size: int = 32,\r\n                     seq_len: int = 20, batch_size: int = 4):\r\n    lstm_model = nn.LSTM(input_size, hidden_size, batch_first=True)\r\n    gru_model = nn.GRU(input_size, hidden_size, batch_first=True)\r\n\r\n    lstm_params = sum(p.numel() for p in lstm_model.parameters())\r\n    gru_params = sum(p.numel() for p in gru_model.parameters())\r\n\r\n    x = torch.randn(batch_size, seq_len, input_size)\r\n    lstm_out, (h_lstm, c_lstm) = lstm_model(x)\r\n    gru_out, h_gru = gru_model(x)\r\n\r\n    return {\r\n        \"lstm_params\": lstm_params,\r\n        \"gru_params\": gru_params,\r\n        \"lstm_output_shape\": lstm_out.shape,\r\n        \"gru_output_shape\": gru_out.shape,\r\n        \"param_reduction_pct\": (1 - gru_params / lstm_params) * 100,\r\n    }\r\n\r\nstats = compare_gru_lstm()\r\nprint(f\"LSTM parameters: {stats['lstm_params']}\")\r\nprint(f\"GRU parameters: {stats['gru_params']}\")\r\nprint(f\"GRU has {stats['param_reduction_pct']:.1f}% fewer parameters\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "75-bidirectional-rnns",
      children: "7.5 Bidirectional RNNs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bidirectional RNNs process the sequence both forward and backward, capturing context from past and future tokens."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class BidirectionalLSTM(nn.Module):\r\n    def __init__(self, input_size: int, hidden_size: int, num_layers: int = 1):\r\n        super().__init__()\r\n        self.lstm = nn.LSTM(input_size, hidden_size, num_layers,\r\n                            batch_first=True, bidirectional=True)\r\n        self.fc = nn.Linear(hidden_size * 2, 1)  # *2 for both directions\r\n\r\n    def forward(self, x: torch.Tensor) -> torch.Tensor:\r\n        output, (h_n, c_n) = self.lstm(x)\r\n        # Concatenate last forward and backward hidden states\r\n        h_forward = h_n[-2, :, :]   # Last forward layer\r\n        h_backward = h_n[-1, :, :]  # Last backward layer\r\n        combined = torch.cat((h_forward, h_backward), dim=1)\r\n        return self.fc(combined)\r\n\r\nclass BiRNNClassifier(nn.Module):\r\n    def __init__(self, vocab_size: int, embedding_dim: int = 100,\r\n                 hidden_size: int = 128, num_layers: int = 2, num_classes: int = 2):\r\n        super().__init__()\r\n        self.embedding = nn.Embedding(vocab_size, embedding_dim, padding_idx=0)\r\n        self.lstm = nn.LSTM(embedding_dim, hidden_size, num_layers,\r\n                            batch_first=True, bidirectional=True, dropout=0.3)\r\n        self.classifier = nn.Sequential(\r\n            nn.Linear(hidden_size * 2, 64),\r\n            nn.ReLU(),\r\n            nn.Dropout(0.3),\r\n            nn.Linear(64, num_classes),\r\n        )\r\n\r\n    def forward(self, x: torch.Tensor, lengths: torch.Tensor) -> torch.Tensor:\r\n        embedded = self.embedding(x)\r\n        packed = pack_padded_sequence(embedded, lengths.cpu(),\r\n                                      batch_first=True, enforce_sorted=False)\r\n        packed_output, (h_n, c_n) = self.lstm(packed)\r\n        h_forward = h_n[-2, :, :]\r\n        h_backward = h_n[-1, :, :]\r\n        combined = torch.cat((h_forward, h_backward), dim=1)\r\n        return self.classifier(combined)\r\n\r\nbirnn = BidirectionalLSTM(input_size=10, hidden_size=32, num_layers=2)\r\nx = torch.randn(4, 20, 10)\r\nout = birnn(x)\r\nprint(f\"BiLSTM output shape: {out.shape}\")  # (4, 1)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Visualizing bidirectional context"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class BidirectionalContextDemo:\r\n    def __init__(self, hidden_size: int = 16):\r\n        self.fwd_rnn = nn.RNN(10, hidden_size, batch_first=True)\r\n        self.bwd_rnn = nn.RNN(10, hidden_size, batch_first=True)\r\n\r\n    def process(self, x: torch.Tensor):\r\n        x_flipped = torch.flip(x, dims=[1])\r\n        fwd_out, _ = self.fwd_rnn(x)\r\n        bwd_out, _ = self.bwd_rnn(x_flipped)\r\n        bwd_out = torch.flip(bwd_out, dims=[1])\r\n        combined = torch.cat((fwd_out, bwd_out), dim=2)\r\n        return combined, fwd_out, bwd_out\r\n\r\ndemo = BidirectionalContextDemo(16)\r\nx = torch.randn(2, 10, 10)\r\ncombined, fwd, bwd = demo.process(x)\r\nprint(f\"Forward: {fwd.shape}, Backward: {bwd.shape}, Combined: {combined.shape}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "76-seq2seq-and-teacher-forcing",
      children: "7.6 Seq2Seq and Teacher Forcing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Seq2Seq models use an encoder to compress the source sequence into a context vector, and a decoder to generate the target sequence."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Encoder(nn.Module):\r\n    def __init__(self, vocab_size: int, embedding_dim: int, hidden_size: int,\r\n                 num_layers: int = 1):\r\n        super().__init__()\r\n        self.embedding = nn.Embedding(vocab_size, embedding_dim)\r\n        self.lstm = nn.LSTM(embedding_dim, hidden_size, num_layers,\r\n                            batch_first=True)\r\n\r\n    def forward(self, x: torch.Tensor) -> Tuple[torch.Tensor, torch.Tensor]:\r\n        embedded = self.embedding(x)\r\n        output, (h_n, c_n) = self.lstm(embedded)\r\n        return h_n, c_n\r\n\r\nclass Decoder(nn.Module):\r\n    def __init__(self, vocab_size: int, embedding_dim: int, hidden_size: int,\r\n                 num_layers: int = 1):\r\n        super().__init__()\r\n        self.embedding = nn.Embedding(vocab_size, embedding_dim)\r\n        self.lstm = nn.LSTM(embedding_dim, hidden_size, num_layers,\r\n                            batch_first=True)\r\n        self.fc = nn.Linear(hidden_size, vocab_size)\r\n\r\n    def forward(self, x: torch.Tensor, h: torch.Tensor, c: torch.Tensor\r\n                ) -> Tuple[torch.Tensor, torch.Tensor, torch.Tensor]:\r\n        embedded = self.embedding(x)\r\n        output, (h_n, c_n) = self.lstm(embedded, (h, c))\r\n        prediction = self.fc(output)\r\n        return prediction, h_n, c_n\r\n\r\nclass Seq2Seq(nn.Module):\r\n    def __init__(self, encoder: Encoder, decoder: Decoder, device: str = \"cpu\"):\r\n        super().__init__()\r\n        self.encoder = encoder\r\n        self.decoder = decoder\r\n        self.device = device\r\n\r\n    def forward(self, src: torch.Tensor, tgt: torch.Tensor,\r\n                teacher_forcing_ratio: float = 0.5) -> torch.Tensor:\r\n        batch_size, tgt_len = tgt.shape\r\n        tgt_vocab_size = self.decoder.fc.out_features\r\n        outputs = torch.zeros(batch_size, tgt_len, tgt_vocab_size).to(self.device)\r\n        h, c = self.encoder(src)\r\n        decoder_input = tgt[:, 0:1]\r\n        for t in range(1, tgt_len):\r\n            output, h, c = self.decoder(decoder_input, h, c)\r\n            outputs[:, t:t+1, :] = output\r\n            use_teacher_forcing = torch.rand(1).item() < teacher_forcing_ratio\r\n            top1 = output.argmax(dim=2)\r\n            decoder_input = tgt[:, t:t+1] if use_teacher_forcing else top1\r\n        return outputs\r\n\r\nclass ScheduledSampling:\r\n    def __init__(self, total_steps: int, schedule: str = \"linear\"):\r\n        self.total_steps = total_steps\r\n        self.schedule = schedule\r\n\r\n    def get_teacher_forcing_ratio(self, step: int) -> float:\r\n        if self.schedule == \"linear\":\r\n            return max(0, 1 - step / self.total_steps)\r\n        elif self.schedule == \"exponential\":\r\n            return 0.5 ** (step / (self.total_steps / 5))\r\n        elif self.schedule == \"inverse_sigmoid\":\r\n            return 1 / (1 + np.exp(step / self.total_steps - 5))\r\n        return 0.5\r\n\r\n## Seq2Seq training with teacher forcing\r\nencoder = Encoder(vocab_size=100, embedding_dim=16, hidden_size=32)\r\ndecoder = Decoder(vocab_size=100, embedding_dim=16, hidden_size=32)\r\nseq2seq = Seq2Seq(encoder, decoder)\r\n\r\nsrc = torch.randint(1, 100, (4, 10))\r\ntgt = torch.randint(1, 100, (4, 12))\r\noutput = seq2seq(src, tgt, teacher_forcing_ratio=0.7)\r\nprint(f\"Seq2Seq output shape: {output.shape}\")  # (4, 12, 100)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Packed sequences"
      }), " handle variable-length sequences efficiently:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class PackedSequenceDemo:\r\n    def __init__(self, input_size: int = 10, hidden_size: int = 20):\r\n        self.rnn = nn.LSTM(input_size, hidden_size, batch_first=True)\r\n\r\n    def forward_with_packing(self, x: torch.Tensor, lengths: torch.Tensor\r\n                             ) -> torch.Tensor:\r\n        packed = pack_padded_sequence(x, lengths.cpu(),\r\n                                      batch_first=True, enforce_sorted=False)\r\n        packed_output, (h_n, c_n) = self.rnn(packed)\r\n        output, _ = pad_packed_sequence(packed_output, batch_first=True)\r\n        return output\r\n\r\n    def forward_without_packing(self, x: torch.Tensor) -> torch.Tensor:\r\n        output, (h_n, c_n) = self.rnn(x)\r\n        return output\r\n\r\npacked_demo = PackedSequenceDemo(10, 20)\r\nx = torch.randn(3, 10, 10)  # batch=3, max_len=10\r\nlengths = torch.tensor([10, 7, 5])\r\noutput_packed = packed_demo.forward_with_packing(x, lengths)\r\nprint(f\"Packed output shape: {output_packed.shape}\")  # (3, 10, 20)\r\nprint(\"Zeros in padded positions:\", (output_packed[2, 7:, :] == 0).all().item())\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Attention mechanism for Seq2Seq"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class AttentionDecoder(nn.Module):\r\n    def __init__(self, vocab_size: int, embedding_dim: int, hidden_size: int):\r\n        super().__init__()\r\n        self.embedding = nn.Embedding(vocab_size, embedding_dim)\r\n        self.attention = nn.Linear(hidden_size * 2, hidden_size)\r\n        self.v = nn.Linear(hidden_size, 1)\r\n        self.lstm = nn.LSTMCell(embedding_dim + hidden_size, hidden_size)\r\n        self.fc = nn.Linear(hidden_size, vocab_size)\r\n\r\n    def forward(self, x: torch.Tensor, h: torch.Tensor, c: torch.Tensor,\r\n                encoder_outputs: torch.Tensor) -> Tuple[torch.Tensor, ...]:\r\n        embedded = self.embedding(x)\r\n        # Attention scores\r\n        h_expanded = h.unsqueeze(1).expand(-1, encoder_outputs.size(1), -1)\r\n        attention_input = torch.cat((h_expanded, encoder_outputs), dim=2)\r\n        energy = self.v(torch.tanh(self.attention(attention_input))).squeeze(2)\r\n        attn_weights = torch.softmax(energy, dim=1)\r\n        context = (attn_weights.unsqueeze(2) * encoder_outputs).sum(dim=1)\r\n        lstm_input = torch.cat((embedded, context), dim=1)\r\n        h_new, c_new = self.lstm(lstm_input, (h, c))\r\n        prediction = self.fc(h_new)\r\n        return prediction, h_new, c_new, attn_weights\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Recurrent neural networks process sequential data by maintaining a hidden state that captures information from previous time steps. The vanilla RNN suffers from vanishing gradients,.\r\nmaking it difficult to learn long-range dependencies. LSTMs address this with a gating mechanism (input, forget, output gates) and a cell state that preserves information across long sequences. GRUs simplify the LSTM with update and.\r\nreset gates, offering comparable performance with fewer parameters. Bidirectional RNNs process sequences in both directions, capturing context from past and future tokens. The encoder-decoder architecture with teacher forcing enables sequence-to-sequence tasks like machine translation and.\r\nsummarization."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recommended Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Short sequences (< 20 steps)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vanilla RNN or GRU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simpler, faster, less prone to vanishing gradients"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Long sequences (> 50 steps)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LSTM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cell state preserves long-term dependencies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory-constrained deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GRU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fewer parameters, similar performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Text classification (full document)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BiLSTM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context from both directions improves accuracy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Machine translation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seq2Seq + Attention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attention handles alignment and long sequences"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variable-length sequences"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PackedSequence + LSTM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoids wasted computation on padding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unstable training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gradient clipping + teacher forcing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents exploding gradients and accelerates convergence"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl11-q1",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q1: Why do vanilla RNNs suffer from vanishing gradients and how does LSTM fix it?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "In vanilla RNNs, BPTT multiplies the same weight matrix at each time step. If the largest singular value of W_hh is < 1, gradients vanish. The chain rule compounds this: dL/dh_t = dL/dh_T * product_{k=t}^{T-1} (diag(f'(h_k)) * W_hh). Tanh's derivative (≤ 1) makes this worse. LSTM fixes this with the cell state c_t = f_t * c_{t-1} + i_t * c_tilde_t. The cell state has a linear self-loop (controlled by the forget gate), allowing gradients to flow unchanged through time. This is called the constant error carousel — the cell state gradient is not multiplied by a weight matrix at each step, only by the forget gate activation (which can be close to 1)."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl11-q2",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q2: Explain LSTM gates: forget, input, and output."]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Forget gate f_t = sigmoid(W_f * [h_{t-1}, x_t] + b_f): decides what to discard from the cell state (0 = forget, 1 = keep). Input gate i_t = sigmoid(W_i * [h_{t-1}, x_t] + b_i): decides which values to update. Candidate values c_tilde_t = tanh(W_c * [h_{t-1}, x_t] + b_c): new candidate values. Cell state update: c_t = f_t * c_{t-1} + i_t * c_tilde_t. Output gate o_t = sigmoid(W_o * [h_{t-1}, x_t] + b_o): controls what parts of the cell state to output. Hidden state: h_t = o_t * tanh(c_t). The forget gate is the most critical — setting it to near 1 allows long-term memory, near 0 causes rapid forgetting."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl11-q3",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q3: What is the difference between LSTM and GRU?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["GRU has two gates (update and reset) instead of three (forget, input, output) and removes the separate cell state. Key differences: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1)"
          }), " GRU combines forget and input gates into the update gate z_t. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2)"
          }), " GRU uses a reset gate r_t to control how much past hidden state affects the candidate. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3)"
          }), " GRU has no cell state — the hidden state carries all information. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4)"
          }), " GRU has ~25% fewer parameters (3 weight matrices vs 4). Performance: GRU often matches LSTM on smaller datasets and converges faster, but LSTM may generalize better on larger, longer sequences. GRU is more computationally efficient and less prone to overfitting on small data."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl11-q4",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q4: How does teacher forcing work and what are its limitations?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Teacher forcing feeds the ground truth token from the previous time step as input to the decoder, instead of the model's own prediction. This speeds up training by providing correct context. Limitations: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Exposure bias"
          }), ": during inference, the model sees its own (potentially wrong) predictions, creating a mismatch from training. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2)"
          }), " The model never learns to recover from its own errors. Solutions: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Scheduled sampling"
          }), ": gradually reduce the teacher forcing ratio from 1.0 to 0.0 over training. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Curriculum learning"
          }), ": start with teacher forcing, then switch to model's own outputs. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Professor forcing"
          }), ": use an adversarial discriminator to force the model's free-running outputs to match teacher-forced distributions."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl11-q5",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q5: What is the purpose of packed sequences in PyTorch RNNs?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Packed sequences (pack_padded_sequence / pad_packed_sequence) handle variable-length sequences efficiently in batch processing. Without packing: all sequences must be padded to the same length, and the RNN computes hidden states for padding tokens (wasting computation and corrupting final states). Packing: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1)"
          }), " Sorts sequences by length. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2)"
          }), " Stores only the actual tokens per time step in a compact format. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3)"
          }), " The RNN processes only real tokens, skipping padding. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4)"
          }), " Properly propagates final hidden states only from the last real token. This is essential for NLP tasks where sequence lengths vary (e.g., sentences of different lengths in the same batch). Without packing, padding causes the RNN to attend to meaningless tokens."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl11-q6",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q6: When would you use a bidirectional RNN vs unidirectional?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Bidirectional RNNs process the sequence in both forward and backward directions, concatenating or summing the hidden states. Use bidirectional when: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1)"
          }), " The entire sequence is available at inference time (e.g., text classification over a full document, sentiment analysis). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2)"
          }), " Context from future tokens is useful (e.g., named entity recognition, POS tagging). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3)"
          }), " The task requires understanding the full context (e.g., translation). Use unidirectional when: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1)"
          }), " Real-time/streaming inference is needed (e.g., speech recognition, live captioning). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2)"
          }), " Future information should not influence predictions (e.g., time series forecasting). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3)"
          }), " Model size must be minimized (bidirectional doubles parameters)."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl11-q7",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q7: Explain the seq2seq encoder-decoder architecture."]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seq2Seq maps a variable-length input sequence to a variable-length output sequence. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Encoder"
          }), ": reads the source sequence token by token and compresses it into a context vector (the final hidden state). In PyTorch, this is typically an LSTM/GRU processing the full input. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Decoder"
          }), ": generates the target sequence token by token, starting from the context vector and a start token. At each step, it takes the previous token (or its own prediction during inference) and the previous hidden state to predict the next token. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Attention mechanism"
          }), ": instead of compressing the entire source into one vector, attention allows the decoder to attend to different source positions at each step, which significantly improves long-sequence translation quality. The attention score is typically dot-product or additive between decoder hidden state and each encoder output."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl11-q8",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q8: How does gradient clipping help RNN training?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Gradient clipping prevents exploding gradients (the opposite of vanishing — common when the recurrent weight matrix's eigenvalues exceed 1). Two approaches: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Value clipping"
          }), ": clamp each gradient element to [-clip_value, clip_value]. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Norm clipping"
          }), ": if the total gradient norm exceeds max_norm, scale all gradients: g = g * max_norm / ||g||. In PyTorch: torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0). Norm clipping preserves direction while limiting magnitude, which is preferred. Typical max_norm values: 0.25-5.0 for RNNs. Clipping is applied AFTER backward() and BEFORE optimizer.step(). It doesn't fix vanishing gradients (use LSTM/GRU for that), but is essential for stable RNN training."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl11-q9",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q9: What is the difference between many-to-one and many-to-many RNN architectures?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Many-to-one"
          }), ": reads a full sequence and produces a single output. Example: sentiment classification (read a sentence, output a class). Implementation: use only the final hidden state after processing all tokens. In PyTorch: output[:, -1, :] or h_n[-1, :, :]. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Many-to-many"
          }), ": produces an output at each time step. Example: video frame labeling, character-level generation. Two variants: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Synchronous"
          }), ": output at each input step (e.g., POS tagging). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Asynchronous (seq2seq)"
          }), ": encoder processes all inputs, then decoder generates outputs. Many-to-many with variable input/output lengths typically uses seq2seq + attention. Many-to-one is simpler and faster, while many-to-many is needed for generative tasks."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl11-q10",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q10: How do you initialize LSTM weights and why does it matter?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["LSTM initialization is critical. Recommendations: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Forget gate bias"
          }), ": initialize to 1 or 2 (not 0). This biases the forget gate open (near 1), allowing gradients to flow freely through the cell state early in training, preventing early vanishing. PyTorch's default forget gate bias is 0, so you must explicitly set it: for names in lstm._all_weights: if 'bias' in name: nn.init.constant_(param[hidden_size:2*hidden_size], 1.0). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Hidden-to-hidden weights"
          }), ": use orthogonal initialization for better gradient flow (nn.init.orthogonal_). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Input-to-hidden weights"
          }), ": use Xavier uniform. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Hidden states"
          }), ": initialize to zeros (default). Poor initialization can cause the LSTM to forget everything immediately (forget gate = 0 from the start), effectively losing the long-term memory advantage."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1"
      }), ": Which component in LSTM is responsible for the constant error carousel?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Hidden state\r\nb) Cell state\r\nc) Output gate\r\nd) Input gate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl11-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Cell state"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "The cell state has a linear self-loop controlled by the forget gate, allowing gradients to propagate unchanged through many time steps."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": How many gates does a GRU have?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) 1\r\nb) 2\r\nc) 3\r\nd) 4"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl11-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) 2"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "GRU has an update gate and a reset gate, combining the functions of LSTM's forget and input gates."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": What problem does teacher forcing solve during seq2seq training?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Vanishing gradients\r\nb) Slow convergence due to error accumulation\r\nc) Overfitting\r\nd) Memory exhaustion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl11-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Slow convergence due to error accumulation"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Teacher forcing provides the correct previous token instead of the model's prediction, preventing error accumulation during training and speeding convergence."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": Which of the following is NOT a benefit of bidirectional RNNs?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Access to future context\r\nb) Higher accuracy on classification tasks\r\nc) Suitable for real-time streaming\r\nd) Better feature representation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl11-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) Suitable for real-time streaming"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Bidirectional RNNs require the full sequence before producing output, making them unsuitable for streaming or real-time applications."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": What initial value should the forget gate bias have?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) 0\r\nb) -1\r\nc) 1 or 2\r\nd) Random"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl11-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) 1 or 2"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Initializing forget gate bias to 1 or 2 keeps the forget gate open at the start, preventing early vanishing of long-term information."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not understanding the fundamental concepts before applying them"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skipping edge cases in implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not analyzing time/space complexity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forgetting to handle null/empty inputs"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Not practicing enough problems to build pattern recognition", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Easy"
        }), " — Build a character-level RNN that generates text. Train on a small corpus (e.g., Shakespeare sonnet) and sample from the model."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Implement a simple LSTM for MNIST digit classification (treat each row as a time step). Compare accuracy with a feedforward network."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Implement a sentiment classifier using a bidirectional LSTM on the IMDB dataset. Compare with a unidirectional LSTM."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Build a seq2seq model with attention for date format conversion (e.g., \"March 15, 2024\" to \"2024-03-15\")."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Implement a GRU-based language model with scheduled sampling. Train on the WikiText-2 dataset and report perplexity with and without scheduled sampling."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous"
        }), ": ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/09-deep-learning-pytorch/06-transfer-learning",
          children: "06-transfer-learning.md"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next"
        }), ": [08-training-pipelines.md](08-training-pipe"]
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
            children: "Explain the core idea of RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function in this chapter — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing."
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
            children: "Describe a production bug caused by misunderstanding this technique — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system using this technique — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing from 10 users to 10 million?"
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
            children: "Compare RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component built on this — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing."
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
            children: "How does RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of this technique — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of this technique — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing in production today?"
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
        }), " RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 07 Rnn And Lstm is ___. — Answer: O(n) typical, O(1) best case"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 07 Rnn And Lstm is ___. — Answer: empty input, boundary values, invalid types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of this technique — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of this technique — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing on an empty input?"
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
            children: "Complete Medium exercises, explain RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing to someone else"
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
        children: "Always write a one-line example of RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
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
        children: "GitHub repositories of production implementations and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 09 — builds the foundation for 07 Rnn And Lstm"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 07 Rnn And Lstm with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 07 Rnn And Lstm fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 07 Rnn And Lstm"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 07 Rnn And Lstm"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 07 Rnn And Lstm?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 07 Rnn And Lstm?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 07 Rnn And Lstm asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 07 Rnn And Lstm?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing."
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
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing changes quickly; focus on fundamentals that remain stable."
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
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "07 Rnn And Lstm is like a GPS navigation system"
          }), ": you define the destination (goal), the system plans the route (algorithm), and recalculates when you take a wrong turn (error handling)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Complexity is like a restaurant kitchen"
          }), ": a single chef (O(n)) handles small orders fine, but 1000 simultaneous orders need parallel chefs (O(log n) with proper indexing)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Edge cases are like stress tests"
          }), ": the happy path is a calm day, but production is Black Friday — design for the worst case."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The chapter roadmap is a subway map"
          }), ": each section is a station, and skipping one means you miss the connection to the next destination.## Capstone Project Link"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/Raushan666java/ai-engineering-journey",
            children: "Module Capstone: End-to-End Project"
          }), " — this chapter contributes the RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "09deeplearningpytorch-07rnnandlstm-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which component in LSTM is responsible for the constant error carousel?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Cell state"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "09deeplearningpytorch-07rnnandlstm-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How many gates does a GRU have?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) 2"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "09deeplearningpytorch-07rnnandlstm-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What problem does teacher forcing solve during seq2seq training?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Slow convergence due to error accumulation"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "09deeplearningpytorch-07rnnandlstm-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which of the following is NOT a benefit of bidirectional RNNs?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) Suitable for real-time streaming"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "09deeplearningpytorch-07rnnandlstm-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What initial value should the forget gate bias have?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) 1 or 2"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing in production at scale"
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
        children: "cProfile / py-spy for performance profiling and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing"
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
        }), ": Add structured logging at each stage of the 07 Rnn And Lstm pipeline to identify exactly where the failure occurs."]
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
        children: "Explain RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing."
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
        children: "Tell me about a time you debugged a RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_07_rnn_and_lstm(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 07 Rnn And Lstm.\r\n\r\n    Key concepts: core concepts, data structures, algorithms, patterns\r\n    Complexity: O(n) typical, O(1) best case\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 07 Rnn And Lstm here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing without notes"
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
        href: "/ai-engineering-journey/ai-engineering-placement/09-deep-learning-pytorch/08-training-pipelines",
        children: "Training Pipelines — DataLoader, Transforms, Optimizers, Schedulers, Checkpointing"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of RNN and LSTM — RNN, LSTM, GRU, Bidirectional RNNs, Seq2Seq, Teacher Forcing depends on input size and distribution — always benchmark for your own data."
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