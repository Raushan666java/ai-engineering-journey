"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[13182],{

/***/ 587
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_14_fine_tuning_peft_02_full_fine_tuning_md_2da_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-14-fine-tuning-peft-02-full-fine-tuning-md-2da.json
const site_docs_courses_ai_engineering_placement_14_fine_tuning_peft_02_full_fine_tuning_md_2da_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/fine-tuning-peft/02-full-fine-tuning","title":"Full Fine-Tuning","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/14-fine-tuning-peft/02-full-fine-tuning.md","sourceDirName":"courses/ai-engineering-placement/14-fine-tuning-peft","slug":"/ai-engineering-placement/14-fine-tuning-peft/02-full-fine-tuning","permalink":"/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/02-full-fine-tuning","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":181,"frontMatter":{"id":"02-full-fine-tuning","slug":"/ai-engineering-placement/14-fine-tuning-peft/02-full-fine-tuning","title":"Full Fine-Tuning","sidebar_label":"Full Fine-Tuning","sidebar_position":181},"sidebar":"placementSidebar","previous":{"title":"When to Fine-Tune","permalink":"/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/01-when-to-fine-tune"},"next":{"title":"LoRA Theory","permalink":"/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/03-lora-theory"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/14-fine-tuning-peft/02-full-fine-tuning.md


const frontMatter = {
	id: '02-full-fine-tuning',
	slug: '/ai-engineering-placement/14-fine-tuning-peft/02-full-fine-tuning',
	title: 'Full Fine-Tuning',
	sidebar_label: 'Full Fine-Tuning',
	sidebar_position: 181
};
const contentTitle = 'Full Fine-Tuning';

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
  "value": "Prerequisites",
  "id": "prerequisites",
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
  "value": "2.1 Supervised Fine-Tuning Basics",
  "id": "21-supervised-fine-tuning-basics",
  "level": 2
}, {
  "value": "2.1.1 Causal Language Modeling Loss",
  "id": "211-causal-language-modeling-loss",
  "level": 3
}, {
  "value": "2.1.2 Supervised Fine-Tuning Simulator",
  "id": "212-supervised-fine-tuning-simulator",
  "level": 3
}, {
  "value": "2.2 Training Loop",
  "id": "22-training-loop",
  "level": 2
}, {
  "value": "2.2.1 Full Fine-Tuning Loop",
  "id": "221-full-fine-tuning-loop",
  "level": 3
}, {
  "value": "2.2.2 Gradient Accumulation",
  "id": "222-gradient-accumulation",
  "level": 3
}, {
  "value": "2.3 Loss Curves",
  "id": "23-loss-curves",
  "level": 2
}, {
  "value": "2.3.1 Loss Curve Analyzer",
  "id": "231-loss-curve-analyzer",
  "level": 3
}, {
  "value": "2.3.2 Learning Rate Scheduling",
  "id": "232-learning-rate-scheduling",
  "level": 3
}, {
  "value": "2.4 Overfitting",
  "id": "24-overfitting",
  "level": 2
}, {
  "value": "2.4.1 Overfitting Detector",
  "id": "241-overfitting-detector",
  "level": 3
}, {
  "value": "2.4.2 Regularization Techniques",
  "id": "242-regularization-techniques",
  "level": 3
}, {
  "value": "2.5 Hyperparameters",
  "id": "25-hyperparameters",
  "level": 2
}, {
  "value": "2.5.1 Hyperparameter Configurator",
  "id": "251-hyperparameter-configurator",
  "level": 3
}, {
  "value": "2.5.2 Hyperparameter Search",
  "id": "252-hyperparameter-search",
  "level": 3
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
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    li: "li",
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
        id: "full-fine-tuning",
        children: "Full Fine-Tuning"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Understand the supervised fine-tuning training loop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement full fine-tuning with loss tracking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detect and mitigate overfitting during fine-tuning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate loss curves and model convergence"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fine-tuning adapts foundation models to your specific domain. LoRA, QLoRA, and DPO make this affordable. This module covers when to fine-tune, how to do it, and how to evaluate the results."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic programming knowledge"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of data structures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Terms"
      }), ": Core vocabulary and concepts for this topic."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition"
      }), ": Essential terms you must know for interviews and production work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding full fine tuning is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how full fine tuning works in practice."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "2.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SFT Basics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supervised fine-tuning, causal LM loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Training Loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batches, backprop, weight updates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loss Curves"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Training/validation loss, convergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overfitting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detection, mitigation, early stopping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hyperparameters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LR, batch size, epochs, warmup"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    D[Dataset] --> T[Tokenizer]\n    T --> B[Batching]\n    B --> M[Base Model]\n    M --> F[Forward Pass]\n    F --> L[Loss Computation]\n    L --> BP[Backpropagation]\n    BP --> U[Weight Update]\n    U -->|Next batch| B\n    U -->|Epoch end| E[Eval on Validation]\n    E -->|Loss OK| S[Save Checkpoint]\n    E -->|Overfitting| ES[Early Stop]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "21-supervised-fine-tuning-basics",
      children: "2.1 Supervised Fine-Tuning Basics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "211-causal-language-modeling-loss",
      children: "2.1.1 Causal Language Modeling Loss"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\nfrom typing import List, Dict\n\nclass CausalLMLoss:\n    def compute(self, logits: np.ndarray, labels: np.ndarray,\n                ignore_index: int = -100) -> float:\n        \"\"\"\n        logits: (batch_size, seq_len, vocab_size)\n        labels: (batch_size, seq_len) with -100 for padding\n        \"\"\"\n        batch_size, seq_len, vocab_size = logits.shape\n        loss = 0.0\n        count = 0\n\n        for b in range(batch_size):\n            for t in range(seq_len - 1):  # predict next token\n                if labels[b, t + 1] != ignore_index:\n                    true_token = labels[b, t + 1]\n                    logit = logits[b, t, true_token]\n                    logsumexp = self._logsumexp(logits[b, t])\n                    loss += logsumexp - logit\n                    count += 1\n\n        return loss / max(count, 1)\n\n    def _logsumexp(self, x: np.ndarray) -> float:\n        max_x = np.max(x)\n        return max_x + np.log(np.sum(np.exp(x - max_x)))\n\ndef test_causal_loss():\n    np.random.seed(42)\n    batch_size, seq_len, vocab_size = 2, 5, 10\n    logits = np.random.randn(batch_size, seq_len, vocab_size)\n    labels = np.random.randint(0, vocab_size, (batch_size, seq_len))\n    labels[:, -1] = -100  # ignore last position - no next token\n\n    loss_fn = CausalLMLoss()\n    loss = loss_fn.compute(logits, labels)\n    print(f\"Causal LM loss: {loss:.4f}\")\n\ntest_causal_loss()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "212-supervised-fine-tuning-simulator",
      children: "2.1.2 Supervised Fine-Tuning Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@dataclass\nclass SFTExample:\n    input_text: str\n    output_text: str\n\nclass SFTSimulator:\n    def __init__(self, base_model_params: int = 7_000_000_000):\n        self.base_params = base_model_params\n        self.trainable_params = base_model_params\n\n    def format_example(self, ex: SFTExample, template: str = None) -> str:\n        if template is None:\n            template = \"### Instruction\\n{input}\\n### Response\\n{output}\"\n        return template.format(input=ex.input_text, output=ex.output_text)\n\n    def estimate_tokens(self, examples: List[SFTExample]) -> int:\n        total = 0\n        for ex in examples:\n            formatted = self.format_example(ex)\n            total += len(formatted.split()) * 1.3  # rough token estimate\n        return int(total)\n\n    def estimate_memory(self, batch_size: int, seq_len: int) -> Dict:\n        precision_bytes = 4\n        activations = batch_size * seq_len * self.base_params / 1e6\n        gradients = activations\n        optimizer_states = activations * 2  # Adam\n        total_mb = (activations + gradients + optimizer_states) * precision_bytes\n\n        return {\n            \"activations_mb\": round(activations, 1),\n            \"gradients_mb\": round(gradients, 1),\n            \"optimizer_mb\": round(optimizer_states, 1),\n            \"total_mb\": round(total_mb, 1),\n            \"gpu_needed_gb\": round(total_mb / 1024, 1),\n        }\n\nsim = SFTSimulator(base_model_params=7_000_000_000)\nex = SFTExample(\"What is attention?\", \"Attention is a mechanism...\")\nformatted = sim.format_example(ex)\nprint(f\"Formatted: {formatted}\")\nprint(f\"Memory estimate: {sim.estimate_memory(batch_size=4, seq_len=2048)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "22-training-loop",
      children: "2.2 Training Loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "221-full-fine-tuning-loop",
      children: "2.2.1 Full Fine-Tuning Loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class FineTuningLoop:\n    def __init__(self, model: Any, learning_rate: float = 2e-5, weight_decay: float = 0.01):\n        self.model = model\n        self.lr = learning_rate\n        self.weight_decay = weight_decay\n        self.loss_history: List[float] = []\n        self.val_loss_history: List[float] = []\n        self.current_step = 0\n\n    def train_epoch(self, dataset: List[Dict], batch_size: int) -> float:\n        epoch_loss = 0.0\n        num_batches = max(len(dataset) // batch_size, 1)\n\n        for batch_idx in range(num_batches):\n            start = batch_idx * batch_size\n            end = min(start + batch_size, len(dataset))\n            batch = dataset[start:end]\n\n            loss = self._train_step(batch)\n            epoch_loss += loss\n            self.loss_history.append(loss)\n            self.current_step += 1\n\n            if batch_idx % 10 == 0:\n                print(f\"  Step {self.current_step}: loss = {loss:.4f}\")\n\n        return epoch_loss / num_batches\n\n    def _train_step(self, batch: List[Dict]) -> float:\n        step_loss = 0.0\n        for example in batch:\n            pred = self._forward(example[\"input\"])\n            loss = self._compute_loss(pred, example[\"target\"])\n            step_loss += loss\n        return step_loss / len(batch)\n\n    def _forward(self, input_text: str) -> Any:\n        return f\"pred_{input_text[:20]}\"\n\n    def _compute_loss(self, pred: Any, target: str) -> float:\n        return float(np.random.exponential(0.5))\n\n    def evaluate(self, dataset: List[Dict]) -> float:\n        val_loss = 0.0\n        for example in dataset:\n            pred = self._forward(example[\"input\"])\n            loss = self._compute_loss(pred, example[\"target\"])\n            val_loss += loss\n        avg_loss = val_loss / len(dataset)\n        self.val_loss_history.append(avg_loss)\n        return avg_loss\n\nloop = FineTuningLoop(model=None, learning_rate=2e-5)\ntrain_data = [{\"input\": f\"input-{i}\", \"target\": f\"target-{i}\"} for i in range(100)]\nval_data = [{\"input\": f\"val-{i}\", \"target\": f\"val-target-{i}\"} for i in range(20)]\n\nfor epoch in range(3):\n    train_loss = loop.train_epoch(train_data, batch_size=8)\n    val_loss = loop.evaluate(val_data)\n    print(f\"Epoch {epoch+1}: train={train_loss:.4f}, val={val_loss:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "222-gradient-accumulation",
      children: "2.2.2 Gradient Accumulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class GradientAccumulator:\n    def __init__(self, accumulation_steps: int = 4):\n        self.steps = accumulation_steps\n        self.accumulated_gradients: Dict[str, np.ndarray] = {}\n        self.step_count = 0\n\n    def accumulate(self, gradients: Dict[str, np.ndarray]) -> bool:\n        for name, grad in gradients.items():\n            if name not in self.accumulated_gradients:\n                self.accumulated_gradients[name] = np.zeros_like(grad)\n            self.accumulated_gradients[name] += grad\n\n        self.step_count += 1\n        if self.step_count >= self.steps:\n            for name in self.accumulated_gradients:\n                self.accumulated_gradients[name] /= self.steps\n            return True\n        return False\n\n    def reset(self):\n        self.accumulated_gradients = {}\n        self.step_count = 0\n\naccum = GradientAccumulator(accumulation_steps=4)\nfor i in range(8):\n    grads = {f\"layer_{j}\": np.random.randn(10, 10) for j in range(3)}\n    should_step = accum.accumulate(grads)\n    if should_step:\n        print(f\"Step performed (accumulated {accum.steps} mini-batches)\")\n        accum.reset()\nprint(\"Gradient accumulation complete\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "23-loss-curves",
      children: "2.3 Loss Curves"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "231-loss-curve-analyzer",
      children: "2.3.1 Loss Curve Analyzer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class LossCurveAnalyzer:\n    def __init__(self, train_losses: List[float], val_losses: List[float]):\n        self.train = train_losses\n        self.val = val_losses\n\n    def convergence_status(self) -> Dict:\n        if len(self.train) < 3:\n            return {\"status\": \"too_early\", \"message\": \"Need more training steps\"}\n\n        recent_train = self.train[-5:]\n        recent_val = self.val[-5:] if len(self.val) >= 5 else self.val\n\n        train_trend = recent_train[-1] - recent_train[0]\n        val_trend = recent_val[-1] - recent_val[0]\n\n        if abs(train_trend) < 0.01 and abs(val_trend) < 0.01:\n            return {\"status\": \"converged\", \"train_trend\": round(train_trend, 4), \"val_trend\": round(val_trend, 4)}\n        elif train_trend < -0.01 and val_trend < -0.01:\n            return {\"status\": \"still_improving\", \"train_trend\": round(train_trend, 4), \"val_trend\": round(val_trend, 4)}\n        elif train_trend < -0.01 and val_trend > 0.01:\n            return {\"status\": \"overfitting\", \"train_trend\": round(train_trend, 4), \"val_trend\": round(val_trend, 4)}\n        else:\n            return {\"status\": \"unstable\", \"train_trend\": round(train_trend, 4), \"val_trend\": round(val_trend, 4)}\n\n    def recommend_action(self) -> str:\n        status = self.convergence_status()\n        actions = {\n            \"converged\": \"Stop training or reduce learning rate\",\n            \"still_improving\": \"Continue training\",\n            \"overfitting\": \"Early stop, increase regularization, or reduce epochs\",\n            \"unstable\": \"Reduce learning rate or increase batch size\",\n            \"too_early\": \"Train for more steps\",\n        }\n        return actions.get(status[\"status\"], \"Monitor and adjust\")\n\ntrain_losses = [2.5, 2.1, 1.8, 1.6, 1.5, 1.4, 1.35, 1.32, 1.30, 1.28]\nval_losses = [2.6, 2.3, 2.1, 2.0, 2.05, 2.1, 2.2, 2.3, 2.4, 2.5]  # diverging\n\nanalyzer = LossCurveAnalyzer(train_losses, val_losses)\nprint(f\"Status: {analyzer.convergence_status()}\")\nprint(f\"Recommendation: {analyzer.recommend_action()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "232-learning-rate-scheduling",
      children: "2.3.2 Learning Rate Scheduling"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class LRScheduler:\n    def __init__(self, base_lr: float, warmup_steps: int = 100, total_steps: int = 1000):\n        self.base = base_lr\n        self.warmup = warmup_steps\n        self.total = total_steps\n\n    def get_lr(self, step: int) -> float:\n        if step < self.warmup:\n            return self.base * (step + 1) / self.warmup\n        progress = (step - self.warmup) / (self.total - self.warmup)\n        return self.base * 0.5 * (1 + np.cos(np.pi * progress))\n\n    def schedule(self, steps: int) -> List[float]:\n        return [self.get_lr(s) for s in range(steps)]\n\nscheduler = LRScheduler(base_lr=2e-5, warmup_steps=100, total_steps=500)\nlrs = scheduler.schedule(500)\nprint(f\"LR: start={lrs[0]:.8f}, peak={max(lrs):.8f}, end={lrs[-1]:.8f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "24-overfitting",
      children: "2.4 Overfitting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "241-overfitting-detector",
      children: "2.4.1 Overfitting Detector"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class OverfittingDetector:\n    def __init__(self, patience: int = 3, min_delta: float = 0.01):\n        self.patience = patience\n        self.min_delta = min_delta\n        self.best_val_loss = float(\"inf\")\n        self.patience_counter = 0\n        self.early_stopped = False\n\n    def check(self, val_loss: float) -> bool:\n        if val_loss < self.best_val_loss - self.min_delta:\n            self.best_val_loss = val_loss\n            self.patience_counter = 0\n            return False\n\n        self.patience_counter += 1\n        if self.patience_counter >= self.patience:\n            self.early_stopped = True\n            return True\n\n        return False\n\n    def should_stop(self) -> bool:\n        return self.early_stopped\n\n    def diagnostics(self) -> Dict:\n        return {\n            \"best_val_loss\": round(self.best_val_loss, 4),\n            \"patience_counter\": self.patience_counter,\n            \"patience\": self.patience,\n            \"early_stopped\": self.early_stopped,\n        }\n\ndetector = OverfittingDetector(patience=3, min_delta=0.01)\nval_losses = [2.5, 2.3, 2.2, 2.25, 2.3, 2.35, 2.4]\nfor i, vl in enumerate(val_losses):\n    stop = detector.check(vl)\n    print(f\"Epoch {i+1}: val_loss={vl}, stop={stop}, counter={detector.patience_counter}\")\nprint(f\"Early stopped: {detector.should_stop()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "242-regularization-techniques",
      children: "2.4.2 Regularization Techniques"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RegularizationConfig:\n    def __init__(self):\n        self.dropout: float = 0.1\n        self.weight_decay: float = 0.01\n        self.label_smoothing: float = 0.1\n        self.gradient_clip_norm: float = 1.0\n\n    def apply_dropout(self, x: np.ndarray, training: bool = True) -> np.ndarray:\n        if not training:\n            return x\n        mask = np.random.binomial(1, 1 - self.dropout, x.shape) / (1 - self.dropout)\n        return x * mask\n\n    def l2_penalty(self, weights: np.ndarray) -> float:\n        return 0.5 * self.weight_decay * np.sum(weights ** 2)\n\n    def smooth_labels(self, labels: np.ndarray, num_classes: int) -> np.ndarray:\n        smooth_labels = np.full_like(labels, self.label_smoothing / (num_classes - 1))\n        smooth_labels[labels == 1] = 1 - self.label_smoothing\n        return smooth_labels\n\nreg = RegularizationConfig()\nx = np.random.randn(3, 4)\ndropped = reg.apply_dropout(x)\nprint(f\"Before dropout: mean={x.mean():.3f}, After: mean={dropped.mean():.3f}\")\nweight = np.random.randn(100, 100)\nprint(f\"L2 penalty: {reg.l2_penalty(weight):.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "25-hyperparameters",
      children: "2.5 Hyperparameters"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "251-hyperparameter-configurator",
      children: "2.5.1 Hyperparameter Configurator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@dataclass\nclass HyperparamConfig:\n    learning_rate: float = 2e-5\n    batch_size: int = 8\n    num_epochs: int = 3\n    warmup_ratio: float = 0.1\n    weight_decay: float = 0.01\n    max_seq_length: int = 2048\n    gradient_accumulation_steps: int = 4\n    logging_steps: int = 10\n    save_steps: int = 500\n    eval_steps: int = 200\n\n    def validate(self) -> List[str]:\n        warnings = []\n        if self.learning_rate > 1e-4:\n            warnings.append(f\"High LR ({self.learning_rate}) may cause instability\")\n        if self.batch_size < 1:\n            warnings.append(\"Batch size must be >= 1\")\n        if self.num_epochs > 10:\n            warnings.append(f\"Many epochs ({self.num_epochs}) may overfit\")\n        return warnings\n\n    def effective_batch_size(self) -> int:\n        return self.batch_size * self.gradient_accumulation_steps\n\n    def total_training_steps(self, num_examples: int) -> int:\n        steps_per_epoch = num_examples // self.effective_batch_size()\n        return steps_per_epoch * self.num_epochs\n\nconfig = HyperparamConfig(learning_rate=3e-4, num_epochs=20)\nwarnings = config.validate()\nfor w in warnings:\n    print(f\"Warning: {w}\")\nprint(f\"Effective batch size: {config.effective_batch_size()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "252-hyperparameter-search",
      children: "2.5.2 Hyperparameter Search"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class HyperparamSearch:\n    def __init__(self):\n        self.lr_range = [1e-5, 3e-5, 5e-5, 1e-4]\n        self.batch_range = [4, 8, 16]\n\n    def grid_search(self, dataset_size: int) -> List[Dict]:\n        trials = []\n        for lr in self.lr_range:\n            for bs in self.batch_range:\n                config = HyperparamConfig(learning_rate=lr, batch_size=bs)\n                trial = {\n                    \"lr\": lr,\n                    \"batch_size\": bs,\n                    \"effective_bs\": bs * 4,\n                    \"steps_per_epoch\": dataset_size // (bs * 4),\n                    \"memory_gb\": round(bs * 2048 * 7 / 1e6 * 4 / 1024, 1),\n                }\n                trials.append(trial)\n        return sorted(trials, key=lambda t: t[\"mem_gb\"])\n\nsearch = HyperparamSearch()\ntrials = search.grid_search(dataset_size=10000)\nfor t in trials[:3]:\n    print(f\"LR={t['lr']:.0e}, BS={t['batch_size']}, Mem={t['memory_gb']}GB\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Full fine-tuning updates all parameters of a pre-trained model using supervised learning on task-specific data. The training loop processes batches, computes causal LM loss (next-token prediction),.\nbackpropagates gradients, and updates weights. Key considerations include: monitoring loss curves for convergence (train and validation loss should decrease together), detecting overfitting (val loss increases while train loss decreases),.\nusing gradient accumulation to simulate larger batch sizes, and tuning hyperparameters (LR ~2e-5 for 7B models, warmup ratio of 0.1, weight decay of 0.01). Early stopping based on validation loss prevents overfitting. Full FT requires significant GPU memory — a 7B model needs ~56GB at FP16 with batch size 1,.\nor ~112GB at FP32."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Takeaway"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Monitor both train and val loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Training loss decreasing alone can mask overfitting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use gradient accumulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simulates larger batches on limited GPU memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Start with standard LR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1e-5 to 5e-5 works for most 7B models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Early stopping is critical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents wasted compute and model degradation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Log every step"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loss curves are essential for debugging convergence"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ft02-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What is the supervised fine-tuning training loop?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The supervised fine-tuning (SFT) training loop iteratively updates model weights to minimize the loss between the model's predictions and the target outputs. The loop processes data in batches: (1) load a batch of (input,.\ntarget) pairs from the training dataset; (2) tokenize inputs and targets, creating attention masks; (3) forward pass — the model generates predictions for.\neach token position; (4) compute loss — typically cross-entropy loss comparing predicted token probabilities against the target tokens, but only on the output tokens (not the input prompt tokens);.\n(5) backward pass — compute gradients of the loss with respect to all trainable parameters using backpropagation; (6) optimizer step — update parameters using the optimizer (AdamW is standard) with learning rate scheduling (cosine,.\nlinear, or constant); (7) repeat for all batches in the dataset — one epoch. The training loop runs for multiple epochs (typically 1-5,.\nmonitored by validation loss to prevent overfitting). Loss curves show training loss and validation loss over time — decreasing training loss with diverging validation loss indicates overfitting."
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
      "data-qid": "ft02-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How do you compute loss during fine-tuning?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["During supervised fine-tuning, loss is computed only on the output tokens (not the input prompt). This is called \"label masking\" or.\n\"causal LM loss.\" Implementation: (1) the input sequence is ", (0,jsx_runtime.jsx)(_components.code, {
            children: "input_ids = [prompt_tokens, target_tokens]"
          }), "; (2) the model generates logits for every token position;.\n(3) shift logits and labels so that the prediction at position i is compared against the token at position i+1 (next-token prediction);.\n(4) create a loss mask — an array of 1s for target token positions and 0s for prompt token positions; (5) compute cross-entropy loss per-token;.\n(6) sum only masked positions and divide by the number of target tokens. This ensures the model only learns to predict the target completion,.\nnot the prompt. The loss function is standard cross-entropy: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "L = -Σ log p(y_i | x, y_<i)"
          }), " where y_i are target tokens and.\nx is the prompt. Monitoring training loss helps detect issues: loss should decrease steadily. If loss is NaN, check learning rate and.\ngradient clipping. Loss = -ln(1/vocab_size) at initialization (~7-8 for a 50K vocab) and should drop significantly during training."]
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
      "data-qid": "ft02-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: How do you detect and mitigate overfitting during fine-tuning?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Overfitting occurs when the model memorizes the training data but fails to generalize to new examples. Detection: (1) monitor the gap between training loss and.\nvalidation loss — if training loss keeps decreasing while validation loss plateaus or increases, overfitting is occurring; (2) check if the model performs well on training data but.\npoorly on held-out test data; (3) inspect generated outputs — overfitted models produce outputs that copy training examples verbatim rather than following the task. Mitigation strategies: (1) early stopping — stop training when validation loss stops improving,.\nusing a patience parameter (e.g., stop after 3 epochs with no validation loss decrease); (2) regularization — weight decay (AdamW's default,.\ntypically 0.01), dropout (if not already in the base model), and label smoothing; (3) data augmentation — increase effective dataset size;.\n(4) reduce model capacity — use LoRA with lower rank to limit the number of trainable parameters; (5) increase dataset size or.\nquality — remove duplicates and add diversity. The simplest effective approach is early stopping combined with LoRA — the small parameter count of LoRA naturally limits overfitting."
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
      "data-qid": "ft02-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How do you evaluate loss curves and model convergence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Loss curves are plots of training loss and validation loss over training steps (or epochs). Convergence analysis: (1) rapid initial drop — loss should decrease quickly in the first few steps as the model adapts to the new task;.\n(2) plateau — after the initial drop, loss should plateau at a lower value; (3) divergence sign — if training loss increases or.\noscillates wildly, the learning rate may be too high or the data contains errors; (4) overfitting sign — when validation loss starts increasing while training loss continues decreasing,.\nstop training. Tools: TensorBoard or WandB for real-time plotting. Custom loss tracker in training scripts logs loss per step/batch. Key metrics from loss curves: final loss value (lower is better),.\nconvergence speed (steps to plateau), loss gap (difference between train and validation). Expected final loss depends on task difficulty: simple classification tasks may reach loss < 0.1,.\nwhile open-ended generation may plateau at 0.5-1.5. Compare loss curves across runs with different hyperparameters (learning rate, batch size, LoRA rank) to select the best configuration."
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
      "data-qid": "ft02-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: What is the role of learning rate scheduling in fine-tuning?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Learning rate scheduling adjusts the learning rate during training to improve convergence. Common schedules: (1) cosine — learning rate follows a cosine curve from the initial value down to near zero,.\nproviding smooth annealing and good convergence; (2) linear — linearly decreases from initial value to zero; (3) constant — fixed learning rate throughout training (simple but.\nless optimal); (4) warmup + decay — start from a small value, linearly increase to the target over the first N steps (warmup),.\nthen decay. Warmup is critical for large models because high initial LR can cause training instability (loss explosion). Fine-tuning typically uses lower learning rates than pre-training: 1e-5 to 5e-5 for.\nfull fine-tuning, 1e-4 to 5e-4 for LoRA adapters. The optimal LR depends on model size, dataset size, and LoRA rank. Learning rate finder runs short training loops at different LRs to identify the optimal range — the ideal LR is.\nthe one that produces the fastest loss decrease without instability. Each optimizer step in the training script applies the scheduler to update the learning rate."
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
      "data-qid": "ft02-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How do you implement data collation during training?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Data collation transforms raw dataset items into properly padded, batched tensors for the training loop. The collator: (1) takes a list of dataset items,.\neach containing input_ids, attention_mask, and labels; (2) pads all sequences to the same length (max length in the batch) using the padding token ID;.\n(3) ensures sequences don't exceed the model's maximum context length — truncate or filter longer sequences; (4) creates the attention mask (1 for.\nreal tokens, 0 for padding tokens) so the model ignores padding during attention computation; (5) creates label tensors, using -100 (ignored by cross-entropy loss) for.\npadding token positions and prompt token positions. HuggingFace's ", (0,jsx_runtime.jsx)(_components.code, {
            children: "DataCollatorForSeq2Seq"
          }), " or ", (0,jsx_runtime.jsx)(_components.code, {
            children: "DataCollatorWithPadding"
          }), " handles this automatically. Custom collators add token type IDs, position ids,.\nor apply chat template formatting. Efficient batching sorts similar-length sequences together (sort + bucket batching) to minimize padding waste — this can speed up training by 2-3x by reducing the number of padding tokens processed."]
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
      "data-qid": "ft02-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: What are the key hyperparameters for full fine-tuning?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Key hyperparameters for full fine-tuning: (1) learning rate — 1e-5 to 5e-5, with warmup (typically 10% of total steps). Lower LRs are safer for.\nfine-tuning; (2) batch size — as large as GPU memory allows. Use gradient accumulation to simulate larger batch sizes (e.g., batch_size=4,.\ngradient_accumulation_steps=8 = effective_batch_size=32); (3) epochs — 1-5 for full fine-tuning. Monitor validation loss to determine optimal epoch count; (4) weight decay — 0.01-0.1 (AdamW default 0.01) for.\nregularization; (5) gradient clipping — max_grad_norm = 1.0 to prevent gradient explosion; (6) optimizer — AdamW with β1=0.9, β2=0.999, ε=1e-8; (7) scheduler — cosine with linear warmup. Memory optimization: use gradient checkpointing (trades compute for.\nmemory, reduces GPU memory by ~30%), mixed precision training (fp16 or bf16), and optimizer offloading. Start with recommended values and tune the learning rate first — it has the biggest impact on convergence quality. Log all hyperparameters in configuration files for.\nreproducibility."
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
      "data-qid": "ft02-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How do you use gradient accumulation in training?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Gradient accumulation simulates a larger batch size by accumulating gradients over multiple forward/backward passes before performing one optimizer step. Implementation: (1) set a micro-batch size that fits in GPU memory (e.g.,.\n4) and accumulation steps (e.g., 8); (2) for each accumulation step, do a forward and backward pass WITHOUT updating weights, accumulating gradients in the model's parameter.grad buffers;.\n(3) after N accumulation steps, call optimizer.step() to update weights using the accumulated gradients; (4) zero gradients and repeat. This enables effective batch sizes of 32 (4—8) using only memory for.\nbatch size 4. The effective batch size = micro_batch_size — gradient_accumulation_steps. Key considerations: (1) batch normalization layers need special handling (use group norm instead);.\n(2) loss scaling — divide the loss by accumulation_steps to keep loss magnitudes consistent; (3) larger effective batch sizes improve gradient estimate quality and.\ntraining stability. In practice, use the largest micro-batch that fits in GPU memory, then scale up with accumulation to reach the target effective batch size (typically 32-128)."
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
      "data-qid": "ft02-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: What is mixed precision training and why use it?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Mixed precision training uses both fp16 (half precision) and fp32 (full precision) during training to reduce memory usage and accelerate computation. The technique: (1) store model weights in fp16 (half the memory of fp32);.\n(2) compute forward and backward passes in fp16 (2-4x faster on modern GPUs with Tensor Cores); (3) maintain a master copy of weights in fp32 for.\nthe optimizer step (precision-critical); (4) use loss scaling to prevent underflow in fp16 gradients (very small gradients can underflow to zero). Implementation: PyTorch's ", (0,jsx_runtime.jsx)(_components.code, {
            children: "torch.cuda.amp"
          }), " (automatic mixed precision) with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "GradScaler"
          }), " handles all the complexity — wrap the forward pass in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "autocast()"
          }), " for.\nautomatic op-level precision selection, and use the scaler for loss scaling. Benefits: ~40-50% less GPU memory, ~2x training speed on modern GPUs with minimal quality loss (<0.1% accuracy difference). bf16 (bfloat16) is preferred on Ampere+ GPUs as it has the same exponent range as fp32,.\neliminating the need for loss scaling. Most fine-tuning libraries (HuggingFace Trainer) enable mixed precision with a single flag (", (0,jsx_runtime.jsx)(_components.code, {
            children: "fp16=True"
          }), " or ", (0,jsx_runtime.jsx)(_components.code, {
            children: "bf16=True"
          }), ")."]
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
      "data-qid": "ft02-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How do you implement a full fine-tuning pipeline in code?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A full fine-tuning pipeline in code follows these steps: (1) load the base model and tokenizer from HuggingFace (", (0,jsx_runtime.jsx)(_components.code, {
            children: "AutoModelForCausalLM.from_pretrained"
          }), ") — set ", (0,jsx_runtime.jsx)(_components.code, {
            children: "torch_dtype=torch.bfloat16"
          }), " and.\nuse ", (0,jsx_runtime.jsx)(_components.code, {
            children: "device_map=\"auto\""
          }), " for multi-GPU; (2) load and prepare the dataset — tokenize with padding/truncation, split into train/val/test, create data collator; (3) configure training arguments (", (0,jsx_runtime.jsx)(_components.code, {
            children: "TrainingArguments"
          }), ") — output directory,.\nlearning rate (2e-5), batch size, epochs (3), warmup ratio (0.1), weight decay (0.01), logging/evaluation steps, fp16=True, gradient_checkpointing=True, save_strategy=\"epoch\", evaluation_strategy=\"epoch\", load_best_model_at_end=True, metric_for_best_model=\"eval_loss\";.\n(4) initialize the Trainer with model, args, train/val datasets, data collator, and tokenizer; (5) call ", (0,jsx_runtime.jsx)(_components.code, {
            children: "trainer.train()"
          }), " — the Trainer handles the training loop,.\nevaluation, checkpointing, and logging; (6) save the fine-tuned model with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "trainer.save_model()"
          }), " and push to Hub if needed. The HuggingFace Trainer is the standard approach — it abstracts away the training loop details while providing full control via callbacks and.\ncustom metrics."]
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "ft-s2-quiz1",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        }), " What does causal LM loss predict?"]
      }), "\nA. The previous token\nB. The next token\nC. The full sequence\nD. The masked tokens\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "ft-s2-quiz2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        }), " What does it mean when validation loss increases while training loss decreases?"]
      }), "\nA. Model is converging\nB. Model is overfitting\nC. Learning rate is too low\nD. Batch size is too large\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "ft-s2-quiz3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3."
        }), " What is the purpose of gradient accumulation?"]
      }), "\nA. To increase learning rate\nB. To simulate larger batch sizes with limited memory\nC. To reduce overfitting\nD. To speed up training\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "ft-s2-quiz4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4."
        }), " What is a typical learning rate for full fine-tuning a 7B model?"]
      }), "\nA. 1e-7\nB. 2e-5\nC. 0.1\nD. 1.0\nAnswer: B\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      "data-qid": "ft-s2-quiz5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5."
        }), " When should early stopping trigger?"]
      }), "\nA. After the first epoch\nB. When validation loss stops improving for N consecutive checks\nC. When training loss reaches zero\nD. When GPU memory is full\nAnswer: B\n"]
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
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Not practicing enough problems to build pattern recognition1. Implement a full training loop with gradient accumulation. Train for 5 epochs with batch_size=2 and accumulation_steps=8 (effective batch=16). Track loss every step."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build an overfitting detector that monitors validation loss with patience=3 and min_delta=0.05. Test with increasing, stable, and diverging validation losses."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create a learning rate scheduler with linear warmup (100 steps) and cosine decay (1000 steps). Plot the LR curve."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a hyperparameter grid search over LR [1e-5, 2e-5, 5e-5] and batch_size [4, 8, 16]. Report the best combination based on final validation loss."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build a memory estimator for full FT. Given model_size_b (7, 13, 70), batch_size, and seq_len, estimate GPU memory and recommend a GPU type (T4, A10"
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
            children: "Explain the core idea of Full Fine-Tuning in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Full Fine-Tuning."
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
            children: "Describe a production bug caused by misunderstanding Full Fine-Tuning. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Full Fine-Tuning from 10 users to 10 million?"
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
            children: "Compare Full Fine-Tuning with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Full Fine-Tuning."
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
            children: "How does Full Fine-Tuning behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Full Fine-Tuning run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Full Fine-Tuning that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Full Fine-Tuning explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Full Fine-Tuning\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Full Fine-Tuning to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Full Fine-Tuning (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Full Fine-Tuning and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Full Fine-Tuning-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Full Fine-Tuning interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Full Fine-Tuning in production today?"
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
        }), " Full Fine-Tuning builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Full Fine-Tuning before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Full Fine-Tuning is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Full Fine-Tuning in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Full Fine-Tuning chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Full Fine-Tuning is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Full Fine-Tuning is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Full Fine-Tuning is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Full Fine-Tuning issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Full Fine-Tuning in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Full Fine-Tuning that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Full Fine-Tuning is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Full Fine-Tuning in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Full Fine-Tuning and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Full Fine-Tuning on an empty input?"
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
            children: "Complete Medium exercises, explain Full Fine-Tuning to someone else"
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
        children: "Always write a one-line example of Full Fine-Tuning from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Full Fine-Tuning when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Full Fine-Tuning twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Full Fine-Tuning snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Full Fine-Tuning listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Full Fine-Tuning to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Full Fine-Tuning by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Full Fine-Tuning to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Full Fine-Tuning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Full Fine-Tuning (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Full Fine-Tuning problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Full Fine-Tuning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Full Fine-Tuning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Full Fine-Tuning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Full Fine-Tuning fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Full Fine-Tuning is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Full Fine-Tuning is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Full Fine-Tuning, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Full Fine-Tuning asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full Fine-Tuning is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Full Fine-Tuning."
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
        children: "Full Fine-Tuning emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Full Fine-Tuning today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Full Fine-Tuning — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Full Fine-Tuning changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Full Fine-Tuning."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Avoid ", (0,jsx_runtime.jsx)(_components.code, {
          children: "eval()"
        }), " and dynamic code execution on untrusted strings."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log errors without leaking sensitive data (keys, PII, internal paths)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For API contexts, add rate limiting and input size limits."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review the chapter's code examples for injection or overflow risks before using them verbatim."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full Fine-Tuning appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Full Fine-Tuning helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Full Fine-Tuning concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Full Fine-Tuning skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Full Fine-Tuning to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Full Fine-Tuning is like a recipe"
        }), ": the theory is the ingredients, the examples are the cooking steps, and the exercises are your own kitchen practice."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complexity is like a delivery route"
        }), ": a linear route visits each stop once; a nested route revisits stops, and you feel it at scale."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Edge cases are like weather"
        }), ": the happy path is a sunny day; production is the storm — build for the storm."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The chapter roadmap is a journey map"
        }), ": each section is a checkpoint; skipping one means getting lost later in the module."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "capstone-project-link",
      children: "Capstone Project Link"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/Raushan666java/ai-engineering-journey",
          children: "Module Capstone: End-to-End Project"
        }), " — this chapter contributes the Full Fine-Tuning skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "14finetuningpeft-02fullfinetuning-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Full Fine-Tuning in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "14finetuningpeft-02fullfinetuning-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the most common mistake engineers make with \n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Common Mistakes section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "14finetuningpeft-02fullfinetuning-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Full Fine-Tuning approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "14finetuningpeft-02fullfinetuning-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Full Fine-Tuning NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "14finetuningpeft-02fullfinetuning-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Full Fine-Tuning applied in a real production system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Real-World Examples section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Full Fine-Tuning (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Full Fine-Tuning (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Full Fine-Tuning-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Full Fine-Tuning in production at scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEPs and RFCs where applicable (Python and networking standards)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The primary library used in this chapter (see the code examples)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python standard library modules used in the examples (check the imports)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testing: pytest for unit tests of Full Fine-Tuning code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Full Fine-Tuning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Full Fine-Tuning code."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reproduce the failure with the smallest possible input before changing code."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check the common failure modes listed in Common Mistakes — most bugs are listed there."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For performance problems, profile before optimizing: measure, then fix."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When stuck, re-read the chapter's Examples and compare line by line with your code."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pdb"
        }), " or your IDE's debugger to step through the Full Fine-Tuning example code."]
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
        children: "Explain Full Fine-Tuning in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Full Fine-Tuning."
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
        children: "Tell me about a time you debugged a Full Fine-Tuning problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Full Fine-Tuning is used at scale?"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`python\nfrom typing import Any, Optional"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Full Fine-Tuning."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Full Fine-Tuning logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`"
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
            children: "Explain Full Fine-Tuning without notes"
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
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Startup"
        }), ": a small team uses Full Fine-Tuning daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Full Fine-Tuning patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Full Fine-Tuning principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Full Fine-Tuning shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Full Fine-Tuning to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/03-lora-theory",
        children: "LoRA Theory"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full Fine-Tuning, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Full Fine-Tuning depends on input size and distribution — always benchmark for your own data."
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