"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[8429],{

/***/ 74312
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_31_mobile_ai_04_edge_deployment_patterns_md_0f7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-31-mobile-ai-04-edge-deployment-patterns-md-0f7.json
const site_docs_courses_ai_engineering_placement_31_mobile_ai_04_edge_deployment_patterns_md_0f7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/mobile-ai/04-edge-deployment-patterns","title":"Edge Deployment Patterns","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/31-mobile-ai/04-edge-deployment-patterns.md","sourceDirName":"courses/ai-engineering-placement/31-mobile-ai","slug":"/ai-engineering-placement/31-mobile-ai/04-edge-deployment-patterns","permalink":"/ai-engineering-journey/ai-engineering-placement/31-mobile-ai/04-edge-deployment-patterns","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":354,"frontMatter":{"id":"04-edge-deployment-patterns","slug":"/ai-engineering-placement/31-mobile-ai/04-edge-deployment-patterns","title":"Edge Deployment Patterns","sidebar_label":"Edge Deployment Patterns","sidebar_position":354},"sidebar":"placementSidebar","previous":{"title":"03 — Edge AI Frameworks","permalink":"/ai-engineering-journey/ai-engineering-placement/31-mobile-ai/03-edge-ai-frameworks"},"next":{"title":"Visual Notes","permalink":"/ai-engineering-journey/ai-engineering-placement/31-mobile-ai/visual-notes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/31-mobile-ai/04-edge-deployment-patterns.md


const frontMatter = {
	id: '04-edge-deployment-patterns',
	slug: '/ai-engineering-placement/31-mobile-ai/04-edge-deployment-patterns',
	title: 'Edge Deployment Patterns',
	sidebar_label: 'Edge Deployment Patterns',
	sidebar_position: 354
};
const contentTitle = 'Edge Deployment Patterns';

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
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "1.1 Model Compression Pipeline",
  "id": "11-model-compression-pipeline",
  "level": 2
}, {
  "value": "1.1.1 Pruning",
  "id": "111-pruning",
  "level": 3
}, {
  "value": "1.1.2 Quantization",
  "id": "112-quantization",
  "level": 3
}, {
  "value": "1.1.3 Knowledge Distillation",
  "id": "113-knowledge-distillation",
  "level": 3
}, {
  "value": "1.1.4 Size vs Accuracy Trade-offs",
  "id": "114-size-vs-accuracy-trade-offs",
  "level": 3
}, {
  "value": "1.2 Federated Learning",
  "id": "12-federated-learning",
  "level": 2
}, {
  "value": "1.2.1 Federated Learning Architecture",
  "id": "121-federated-learning-architecture",
  "level": 3
}, {
  "value": "1.2.2 Privacy Preservation Mechanisms",
  "id": "122-privacy-preservation-mechanisms",
  "level": 3
}, {
  "value": "1.2.3 TensorFlow Federated Integration Note",
  "id": "123-tensorflow-federated-integration-note",
  "level": 3
}, {
  "value": "1.3 On-Device Training",
  "id": "13-on-device-training",
  "level": 2
}, {
  "value": "1.3.1 Transfer Learning on Device",
  "id": "131-transfer-learning-on-device",
  "level": 3
}, {
  "value": "1.3.2 Few-Shot Adaptation",
  "id": "132-few-shot-adaptation",
  "level": 3
}, {
  "value": "1.3.3 Personalization Strategies",
  "id": "133-personalization-strategies",
  "level": 3
}, {
  "value": "1.4 Offline-First Architecture",
  "id": "14-offline-first-architecture",
  "level": 2
}, {
  "value": "1.4.1 Local Inference Engine",
  "id": "141-local-inference-engine",
  "level": 3
}, {
  "value": "1.4.2 Bandwidth Optimization",
  "id": "142-bandwidth-optimization",
  "level": 3
}, {
  "value": "1.5 Production Patterns",
  "id": "15-production-patterns",
  "level": 2
}, {
  "value": "1.5.1 Model Update Strategy",
  "id": "151-model-update-strategy",
  "level": 3
}, {
  "value": "1.5.2 A/B Testing on Edge",
  "id": "152-ab-testing-on-edge",
  "level": 3
}, {
  "value": "1.5.3 Monitoring and Crash Analytics",
  "id": "153-monitoring-and-crash-analytics",
  "level": 3
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "Easy",
  "id": "easy",
  "level": 3
}, {
  "value": "Medium",
  "id": "medium",
  "level": 3
}, {
  "value": "Hard",
  "id": "hard",
  "level": 3
}, {
  "value": "Chapter Quiz (5 MCQ)",
  "id": "chapter-quiz-5-mcq",
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
  "value": "Exercises",
  "id": "exercises",
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
  "value": "Limitations",
  "id": "limitations",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
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
        id: "edge-deployment-patterns",
        children: "Edge Deployment Patterns"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "LO"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand the model compression pipeline: pruning, quantization, and distillation combined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain federated learning architecture, on-device training, and privacy preservation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement on-device transfer learning and few-shot adaptation for edge devices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design offline-first architectures with local inference, sync, and cache management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply production patterns: model update strategy, A/B testing on edge, monitoring, crash analytics"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Edge deployment is the practice of running AI models directly on mobile phones, IoT devices, embedded systems, and browsers instead of sending data to cloud servers. Edge deployment reduces latency, preserves user privacy, enables offline operation, and cuts server costs. But edge devices have limited memory, battery, and compute. A model that runs comfortably on an A100 GPU will crash on a smartphone."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covers five essential patterns for production-grade edge deployment. You will learn how to compress models to fit within device constraints, train models collaboratively without centralising user data, adapt pre-trained models on the device itself, build apps that work fully offline and sync when connectivity returns, and operate edge models in production with updates, A/B testing, and monitoring. Each pattern includes Python implementations you can adapt for real projects."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic understanding of neural networks and model training"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with PyTorch or TensorFlow (code examples use PyTorch-like APIs)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Knowledge of client-server architecture patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prior exposure to mobile app development (helpful but not required)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Model Compression"
      }), ": Techniques to reduce model size and inference cost while maintaining acceptable accuracy."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pruning"
      }), ": Removing redundant weights or neurons from a trained network."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Quantization"
      }), ": Reducing the numerical precision of model weights (e.g., FP32 to INT8)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Knowledge Distillation"
      }), ": Training a small \"student\" model to mimic a larger \"teacher\" model."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Federated Learning"
      }), ": A distributed training paradigm where models are trained on decentralised data without raw data leaving devices."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Federated Averaging (FedAvg)"
      }), ": The standard aggregation algorithm that averages model updates from multiple devices."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "On-Device Training"
      }), ": Fine-tuning or adapting a model locally on an edge device using local data."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Offline-First Architecture"
      }), ": An architectural pattern where the app functions fully without network connectivity and syncs data when online."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Model Update Strategy"
      }), ": The mechanism for pushing new model versions to edge devices without breaking the user experience."]
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
            children: "1.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model Compression Pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pruning + quantization + distillation in sequence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Federated Learning Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On-device training, privacy, aggregation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On-Device Training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transfer learning, few-shot adaptation, personalization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Offline-First Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local inference, sync, cache, bandwidth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Updates, A/B testing, monitoring, crash analytics"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph COMPRESS[Model Compression]\n        PRUNE[Pruning]\n        QUANT[Quantization]\n        DISTIL[Distillation]\n    end\n    subgraph FED[Federated Learning]\n        TRAIN[On-Device Training]\n        AGG[Aggregation Server]\n        PRIV[Privacy Preservation]\n    end\n    subgraph ONDEV[On-Device Training]\n        TL[Transfer Learning]\n        FEW[Few-Shot Adaptation]\n        PERS[Personalization]\n    end\n    subgraph OFFLINE[Offline-First]\n        LOCAL[Local Inference]\n        SYNC[Sync Engine]\n        CACHE[Cache Mgmt]\n    end\n    subgraph PROD[Production Patterns]\n        UPDATE[Model Updates]\n        AB[A/B Testing]\n        MON[Monitoring]\n        CRASH[Crash Analytics]\n    end\n    COMPRESS --> FED\n    FED --> ONDEV\n    ONDEV --> OFFLINE\n    OFFLINE --> PROD\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-model-compression-pipeline",
      children: "1.1 Model Compression Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Edge devices impose hard constraints on model size and latency. A production-ready edge model must balance three dimensions: accuracy, size, and inference speed. Model compression attacks all three. The industry-standard pipeline combines three techniques in sequence: pruning removes dead weights, quantization reduces numerical precision, and distillation transfers knowledge from a larger teacher."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-pruning",
      children: "1.1.1 Pruning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pruning removes weights or neurons that contribute minimally to the output. There are two main strategies:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Unstructured pruning"
      }), " zeros out individual weights below a threshold. The model becomes sparse but retains the same architecture. Compression is modest without specialised hardware or software libraries."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Structured pruning"
      }), " removes entire channels, filters, or layers. The model becomes physically smaller. Inference speed improves on any hardware because the reduced dimensions translate directly to fewer matrix multiplications."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The typical workflow is: train a dense model → apply pruning mask → fine-tune to recover accuracy → repeat iteratively."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nmodel_pruning.py — Structured channel pruning for edge deployment.\nDemonstrates magnitude-based pruning of convolutional layers.\n\"\"\"\n\nimport copy\nfrom dataclasses import dataclass\nfrom typing import Any\n\n@dataclass\nclass ConvLayer:\n    \"\"\"Simulates a convolutional layer with weights.\"\"\"\n    in_channels: int\n    out_channels: int\n    kernel_size: int\n    weights: list[list[float]]  # flattened per output channel\n\n    def __post_init__(self):\n        if not self.weights:\n            self.weights = [\n                [0.5 for _ in range(self.in_channels * self.kernel_size ** 2)]\n                for _ in range(self.out_channels)\n            ]\n\n    def channel_importance(self) -> list[float]:\n        \"\"\"L2 norm of each output channel's weights as importance score.\"\"\"\n        import math\n        scores = []\n        for ch in self.weights:\n            norm = math.sqrt(sum(w ** 2 for w in ch))\n            scores.append(norm)\n        return scores\n\n    def prune_channels(self, keep_ratio: float) -> \"ConvLayer\":\n        \"\"\"Remove least important output channels.\"\"\"\n        scores = self.channel_importance()\n        n_keep = max(1, int(self.out_channels * keep_ratio))\n        sorted_indices = sorted(\n            range(len(scores)), key=lambda i: scores[i], reverse=True\n        )\n        keep_indices = set(sorted_indices[:n_keep])\n        pruned_weights = [\n            w for i, w in enumerate(self.weights) if i in keep_indices\n        ]\n        return ConvLayer(\n            in_channels=self.in_channels,\n            out_channels=n_keep,\n            kernel_size=self.kernel_size,\n            weights=pruned_weights,\n        )\n\nclass CompressedModel:\n    \"\"\"A simple feedforward model supporting pruning.\"\"\"\n\n    def __init__(self, layers: list[ConvLayer]):\n        self.layers = layers\n\n    def prune(self, keep_ratio: float) -> \"CompressedModel\":\n        \"\"\"Return a new model with each layer pruned to keep_ratio.\"\"\"\n        pruned_layers = [layer.prune_channels(keep_ratio) for layer in self.layers]\n        return CompressedModel(pruned_layers)\n\n    def parameter_count(self) -> int:\n        total = 0\n        for layer in self.layers:\n            for ch in layer.weights:\n                total += len(ch)\n        return total\n\n    def summary(self) -> str:\n        lines = [f\"Model with {len(self.layers)} layers\"]\n        for i, layer in enumerate(self.layers):\n            lines.append(\n                f\"  Layer {i}: {layer.in_channels}→{layer.out_channels} \"\n                f\"channels, {len(layer.weights[0])} weights/channel\"\n            )\n        lines.append(f\"  Total parameters: {self.parameter_count():,}\")\n        return \"\\n\".join(lines)\n\ndef iterative_pruning(\n    model: CompressedModel,\n    target_ratio: float,\n    steps: int = 3,\n) -> CompressedModel:\n    \"\"\"Iteratively prune and simulate fine-tuning recovery.\"\"\"\n    current = copy.deepcopy(model)\n    print(f\"Starting parameters: {current.parameter_count():,}\")\n    for step in range(steps):\n        ratio = target_ratio ** ((step + 1) / steps)\n        current = current.prune(keep_ratio=ratio)\n        # Simulated fine-tune recovery (no-op here)\n        print(\n            f\"  Step {step + 1}: pruned to {ratio:.0%} kept → \"\n            f\"{current.parameter_count():,} params\"\n        )\n    return current\n\n# === Demonstration ===\nif __name__ == \"__main__\":\n    model = CompressedModel([\n        ConvLayer(3, 64, 3),\n        ConvLayer(64, 128, 3),\n        ConvLayer(128, 256, 3),\n    ])\n    print(\"Before pruning:\")\n    print(model.summary())\n    print()\n\n    pruned = iterative_pruning(model, target_ratio=0.3, steps=3)\n    print(f\"\\nFinal compression ratio: {model.parameter_count() / pruned.parameter_count():.1f}x\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-quantization",
      children: "1.1.2 Quantization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quantization reduces the bit-width of weights and activations. Full-precision models use 32-bit floating point (FP32). Edge models commonly use:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Precision"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bits/Weight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Size vs FP32"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Accuracy Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hardware Support"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FP32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1x (baseline)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All devices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FP16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.5x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Negligible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modern GPUs/NPUs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INT8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.25x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.5–2% drop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most mobile CPUs/NPUs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INT4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.125x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1–5% drop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited (Qualcomm, Apple)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Post-training quantization (PTQ)"
      }), " converts a trained FP32 model to lower precision without re-training. It is fast but may lose accuracy on outlier weights."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Quantization-aware training (QAT)"
      }), " simulates quantization during training. The model learns to tolerate lower precision. QAT consistently outperforms PTQ by 1–3% accuracy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nmodel_quantization.py — Simulate quantization effects on model accuracy.\n\"\"\"\n\nimport math\nimport random\nfrom dataclasses import dataclass\nfrom typing import Callable\n\n@dataclass\nclass QuantizedLayer:\n    \"\"\"A layer with configurable weight precision.\"\"\"\n    weights_fp32: list[float]\n    bits: int = 32\n\n    def quantize(self) -> list[int]:\n        \"\"\"Quantize FP32 weights to signed integer of given bit-width.\"\"\"\n        if self.bits >= 32:\n            return [int(w * (2 ** 31)) for w in self.weights_fp32]\n\n        max_val = 2 ** (self.bits - 1) - 1\n        min_val = -2 ** (self.bits - 1)\n\n        scale = max(abs(w) for w in self.weights_fp32)\n        if scale == 0:\n            scale = 1.0\n\n        quantized = []\n        for w in self.weights_fp32:\n            q = int(round(w / scale * max_val))\n            q = max(min_val, min(max_val, q))\n            quantized.append(q)\n        return quantized\n\n    def dequantize(self, quantized: list[int]) -> list[float]:\n        \"\"\"Convert quantized integers back to approximate FP32.\"\"\"\n        max_val = 2 ** (self.bits - 1) - 1\n        scale = max(abs(w) for w in self.weights_fp32)\n        if scale == 0:\n            scale = 1.0\n        return [q * scale / max_val for q in quantized]\n\n    def quantization_error(self) -> float:\n        \"\"\"Mean absolute error introduced by quantization.\"\"\"\n        q = self.quantize()\n        dq = self.dequantize(q)\n        errors = [abs(a - b) for a, b in zip(self.weights_fp32, dq)]\n        return sum(errors) / len(errors)\n\ndef simulate_qat_accuracy(base_accuracy: float, bits: int) -> float:\n    \"\"\"Simulate accuracy after quantization-aware training.\"\"\"\n    if bits >= 32:\n        return base_accuracy\n    # QAT recovers ~60% of the accuracy drop vs PTQ\n    ptq_drop = {16: 0.003, 8: 0.015, 4: 0.04}.get(bits, 0.1)\n    qat_recovery = ptq_drop * 0.6\n    return base_accuracy - ptq_drop + qat_recovery\n\ndef quantization_sweep(\n    weights: list[float],\n    base_accuracy: float,\n) -> None:\n    \"\"\"Evaluate and report quantization at multiple bit-widths.\"\"\"\n    precisions = [32, 16, 8, 4]\n    print(f\"{'Bits':<6} {'Error':<12} {'PTQ Acc':<12} {'QAT Acc':<12}\")\n    print(\"-\" * 42)\n    for bits in precisions:\n        layer = QuantizedLayer(weights, bits=bits)\n        err = layer.quantization_error()\n        ptq_acc = base_accuracy - err * 10  # simulated mapping\n        qat_acc = simulate_qat_accuracy(base_accuracy, bits)\n        print(\n            f\"{bits:<6} {err:<12.6f} {ptq_acc:<12.4f} {qat_acc:<12.4f}\"\n        )\n\n# === Demonstration ===\nif __name__ == \"__main__\":\n    random.seed(42)\n    sample_weights = [random.gauss(0, 0.5) for _ in range(1000)]\n    print(\"Quantization Sweep on 1000 sample weights:\\n\")\n    quantization_sweep(sample_weights, base_accuracy=0.952)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "113-knowledge-distillation",
      children: "1.1.3 Knowledge Distillation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Knowledge distillation trains a small student model to replicate the behaviour of a large teacher model. The student learns from the teacher's soft predictions (logits) rather than hard ground-truth labels. The soft predictions contain richer information — class similarities, relative confidences, and decision boundaries."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The loss function combines two terms:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "L = α * L_hard(y_student, y_true) + (1 - α) * L_soft(y_student, y_teacher / T)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Where ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T"
      }), " is the temperature that softens the teacher's probability distribution, and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "α"
      }), " balances hard-label vs soft-label learning."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nknowledge_distillation.py — Simulate student-teacher distillation for edge models.\n\"\"\"\n\nimport math\nfrom dataclasses import dataclass, field\n\n@dataclass\nclass DistilledModel:\n    \"\"\"Tracks teacher, student, and distillation metrics.\"\"\"\n\n    teacher_params: int\n    student_params: int\n    teacher_accuracy: float\n    student_accuracy_before: float\n    temperature: float = 4.0\n    alpha: float = 0.3  # weight of hard-label loss\n    distilled_accuracy: float = 0.0\n\n    def compression_ratio(self) -> float:\n        return self.teacher_params / self.student_params\n\n    def simulate_distillation(self) -> float:\n        \"\"\"Simulate accuracy after knowledge distillation.\n\n        The student typically recovers 60–90% of the accuracy gap.\n        Higher temperature helps for complex tasks.\n        \"\"\"\n        gap = self.teacher_accuracy - self.student_accuracy_before\n        recovery = gap * min(0.9, 0.5 + self.temperature * 0.08)\n        self.distilled_accuracy = self.student_accuracy_before + recovery\n        return self.distilled_accuracy\n\n    def report(self) -> str:\n        self.simulate_distillation()\n        recovered_pct = (\n            (self.distilled_accuracy - self.student_accuracy_before)\n            / (self.teacher_accuracy - self.student_accuracy_before)\n            * 100\n        )\n        return (\n            f\"Teacher: {self.teacher_params:,} params @ {self.teacher_accuracy:.1%}\\n\"\n            f\"Student before: {self.student_params:,} params @ {self.student_accuracy_before:.1%}\\n\"\n            f\"Compression: {self.compression_ratio():.1f}x\\n\"\n            f\"Distilled accuracy: {self.distilled_accuracy:.1%}\\n\"\n            f\"Gap recovered: {recovered_pct:.0f}%\\n\"\n            f\"Temperature: {self.temperature}, alpha: {self.alpha}\"\n        )\n\n@dataclass\nclass CompressionPipeline:\n    \"\"\"Combined pruning → quantization → distillation pipeline.\"\"\"\n\n    initial_params: int\n    initial_accuracy: float\n    prune_keep_ratio: float = 0.3\n    quant_bits: int = 8\n    temperature: float = 4.0\n\n    def run(self) -> dict:\n        \"\"\"Simulate the full compression pipeline step by step.\"\"\"\n        results = {}\n\n        # Step 1: Pruning\n        pruned_params = int(self.initial_params * self.prune_keep_ratio)\n        # Pruning typically causes 1–3% accuracy drop before fine-tune\n        prune_drop = 0.02 * (1 - self.prune_keep_ratio)\n        after_prune = self.initial_accuracy - prune_drop\n\n        results[\"pruning\"] = {\n            \"params_before\": self.initial_params,\n            \"params_after\": pruned_params,\n            \"accuracy_after\": after_prune,\n        }\n\n        # Step 2: Quantization\n        quant_multiplier = {32: 1.0, 16: 0.5, 8: 0.25, 4: 0.125}\n        quantized_params = int(pruned_params * quant_multiplier.get(self.quant_bits, 0.25))\n        # Quantization drop simulates PTQ + fine-tune\n        quant_drop = 0.015 if self.quant_bits >= 8 else 0.04\n        after_quant = after_prune - quant_drop\n\n        results[\"quantization\"] = {\n            \"params_before\": pruned_params,\n            \"params_after\": quantized_params,\n            \"bits\": self.quant_bits,\n            \"accuracy_after\": after_quant,\n        }\n\n        # Step 3: Distillation uses the original model as teacher\n        # The quantized model is the student\n        student_before = after_quant\n        gap = self.initial_accuracy - student_before\n        recovery = gap * min(0.9, 0.5 + self.temperature * 0.08)\n        after_distill = student_before + recovery\n\n        results[\"distillation\"] = {\n            \"params\": quantized_params,\n            \"accuracy_before\": student_before,\n            \"accuracy_after\": after_distill,\n            \"temperature\": self.temperature,\n        }\n\n        results[\"final\"] = {\n            \"params\": quantized_params,\n            \"accuracy\": after_distill,\n            \"compression_ratio\": self.initial_params / quantized_params,\n            \"accuracy_drop\": self.initial_accuracy - after_distill,\n        }\n\n        return results\n\n    def print_report(self, results: dict) -> None:\n        print(\"=\" * 60)\n        print(\"COMPRESSION PIPELINE REPORT\")\n        print(\"=\" * 60)\n        print(f\"\\nInitial model: {self.initial_params:,} params @ {self.initial_accuracy:.1%}\")\n        print()\n\n        print(\"Step 1 — Pruning\")\n        p = results[\"pruning\"]\n        print(f\"  {p['params_before']:,} → {p['params_after']:,} params\")\n        print(f\"  Accuracy: {p['accuracy_after']:.1%}\")\n\n        print(\"\\nStep 2 — Quantization\")\n        q = results[\"quantization\"]\n        print(f\"  {q['params_before']:,} → {q['params_after']:,} params ({q['bits']}-bit)\")\n        print(f\"  Accuracy: {q['accuracy_after']:.1%}\")\n\n        print(\"\\nStep 3 — Knowledge Distillation\")\n        d = results[\"distillation\"]\n        print(f\"  Student before: {d['accuracy_before']:.1%}\")\n        print(f\"  Student after:  {d['accuracy_after']:.1%} (T={d['temperature']})\")\n\n        print(\"\\n\" + \"=\" * 60)\n        f = results[\"final\"]\n        print(f\"FINAL: {f['params']:,} params ({f['compression_ratio']:.1f}x compression)\")\n        print(f\"Accuracy: {f['accuracy']:.1%} (drop of {f['accuracy_drop']:.1%})\")\n        print(\"=\" * 60)\n\n# === Demonstration ===\nif __name__ == \"__main__\":\n    pipeline = CompressionPipeline(\n        initial_params=50_000_000,\n        initial_accuracy=0.968,\n        prune_keep_ratio=0.3,\n        quant_bits=8,\n        temperature=4.0,\n    )\n    results = pipeline.run()\n    pipeline.print_report(results)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "114-size-vs-accuracy-trade-offs",
      children: "1.1.4 Size vs Accuracy Trade-offs"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    START[FP32 Model<br/>100% size, 100% acc] --> PRUNE[Pruning<br/>30% size, 98% acc]\n    PRUNE --> QUANT[Quantization INT8<br/>7.5% size, 96.5% acc]\n    QUANT --> DISTILL[Distillation<br/>7.5% size, 97.5% acc]\n    DISTILL --> EDGE[Edge-Ready Model]\n    EDGE --> DEPLOY{Deploy to Device}\n    DEPLOY -->|Size OK| PROD[Production]\n    DEPLOY -->|Still too large| MORE[More Aggressive Compression]\n    MORE --> REPEAT[Repeat with higher prune ratio]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The combined pipeline can achieve 10–20× compression with less than 2% accuracy loss. The exact trade-off depends on model architecture, task difficulty, and hardware target. Image classification models compress better than object detection. Transformer-based models are harder to quantize than CNNs."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-federated-learning",
      children: "1.2 Federated Learning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Federated learning (FL) trains a shared model across many devices without centralising raw data. Each device trains locally, sends only model updates (gradients or weights) to a central server, and the server aggregates the updates. FL is the standard approach for privacy-preserving on-device AI."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "121-federated-learning-architecture",
      children: "1.2.1 Federated Learning Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The standard FL protocol has four steps per round:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Selection"
        }), ": Server selects a subset of available devices (typically 10–100 per round)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Broadcast"
        }), ": Server sends the current global model weights to selected devices."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Local training"
        }), ": Each device trains the model on its local data for E epochs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Aggregation"
        }), ": Devices send updated weights back. Server computes the weighted average (FedAvg)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant S as Aggregation Server\n    participant D1 as Device 1\n    participant D2 as Device 2\n    participant DN as Device N\n\n    Note over S: Round starts\n    S->>D1: Send global model W_t\n    S->>D2: Send global model W_t\n    S->>DN: Send global model W_t\n\n    Note over D1: Train on local data\n    Note over D2: Train on local data\n    Note over DN: Train on local data\n\n    D1-->>S: Return update ΔW_1\n    D2-->>S: Return update ΔW_2\n    DN-->>S: Return update ΔW_N\n\n    Note over S: FedAvg: W_{t+1} = Σ(n_k / N) * ΔW_k\n    S->>S: Updated global model W_{t+1}\n    Note over S: Round complete\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "122-privacy-preservation-mechanisms",
      children: "1.2.2 Privacy Preservation Mechanisms"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FL alone reduces data exposure but still leaks information through model updates. Three additional mechanisms strengthen privacy:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Differential Privacy (DP)"
      }), ": Add calibrated noise to model updates before sending. The noise magnitude (ε) controls the privacy-utility trade-off. Lower ε means stronger privacy but lower accuracy."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Secure Aggregation"
      }), ": Use cryptographic protocols (secret sharing, homomorphic encryption) so the server never sees individual updates — only the aggregate."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Local DP"
      }), ": Apply differential privacy at the device level before training. Each device adds noise to its local data or gradients."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nfederated_learning.py — Simulate federated learning with FedAvg aggregation.\n\"\"\"\n\nimport copy\nimport math\nimport random\nfrom dataclasses import dataclass, field\n\n@dataclass\nclass FLDevice:\n    \"\"\"Simulates a single device with local data.\"\"\"\n\n    device_id: int\n    data_size: int\n    local_accuracy: float = 0.5\n    noise_scale: float = 0.0  # for differential privacy\n\n    def train_local(self, global_weights: list[float], epochs: int) -> list[float]:\n        \"\"\"Simulate local training. Returns updated weights.\"\"\"\n        # Simulate improvement proportional to local data size\n        improvement = 0.001 * self.data_size * epochs\n        self.local_accuracy = min(0.99, self.local_accuracy + improvement)\n\n        noisy_weights = []\n        for w in global_weights:\n            noise = random.gauss(0, self.noise_scale) if self.noise_scale > 0 else 0\n            noisy_weights.append(w + 0.01 * self.data_size + noise)\n\n        return noisy_weights\n\n@dataclass\nclass FederatedServer:\n    \"\"\"Central server orchestrating federated learning.\"\"\"\n\n    global_weights: list[float]\n    devices: list[FLDevice] = field(default_factory=list)\n    round_history: list[float] = field(default_factory=list)\n\n    def add_device(self, device: FLDevice) -> None:\n        self.devices.append(device)\n\n    def fed_avg(\n        self,\n        updates: list[tuple[int, list[float]]],\n    ) -> list[float]:\n        \"\"\"Weighted average of model updates by data size.\"\"\"\n        total_samples = sum(n for n, _ in updates)\n        if total_samples == 0:\n            return self.global_weights\n\n        n_layers = len(self.global_weights)\n        aggregated = [0.0 for _ in range(n_layers)]\n\n        for n_samples, weights in updates:\n            weight = n_samples / total_samples\n            for i in range(n_layers):\n                aggregated[i] += weight * weights[i]\n\n        return aggregated\n\n    def round(\n        self,\n        fraction_selected: float = 0.3,\n        local_epochs: int = 5,\n    ) -> float:\n        \"\"\"Execute one federated learning round.\"\"\"\n        n_selected = max(1, int(len(self.devices) * fraction_selected))\n        selected = random.sample(self.devices, n_selected)\n\n        updates: list[tuple[int, list[float]]] = []\n        for device in selected:\n            local_weights = device.train_local(self.global_weights, local_epochs)\n            updates.append((device.data_size, local_weights))\n\n        self.global_weights = self.fed_avg(updates)\n\n        # Global accuracy: weighted average of selected devices' accuracy\n        total_samples = sum(n for n, _ in updates)\n        global_acc = sum(\n            device.local_accuracy * device.data_size / total_samples\n            for device in selected\n        )\n        self.round_history.append(global_acc)\n        return global_acc\n\n    def train(\n        self,\n        rounds: int = 50,\n        fraction_selected: float = 0.3,\n        local_epochs: int = 5,\n    ) -> list[float]:\n        \"\"\"Run multiple federated rounds.\"\"\"\n        print(f\"Training {rounds} rounds with {len(self.devices)} devices...\")\n        for r in range(rounds):\n            acc = self.round(fraction_selected, local_epochs)\n            if r % 10 == 0 or r == rounds - 1:\n                print(f\"  Round {r + 1:>3}: global accuracy = {acc:.4f}\")\n        return self.round_history\n\ndef create_non_iid_devices(\n    n_devices: int = 100,\n    min_data: int = 100,\n    max_data: int = 5000,\n    dp_noise: float = 0.0,\n) -> list[FLDevice]:\n    \"\"\"Create devices with heterogeneous data distributions.\"\"\"\n    devices = []\n    for i in range(n_devices):\n        data_size = random.randint(min_data, max_data)\n        devices.append(FLDevice(\n            device_id=i,\n            data_size=data_size,\n            noise_scale=dp_noise,\n        ))\n    return devices\n\n# === Demonstration ===\nif __name__ == \"__main__\":\n    random.seed(42)\n\n    # Create 100 devices with non-IID data sizes\n    devices = create_non_iid_devices(100, dp_noise=0.01)\n    print(f\"Created {len(devices)} devices\")\n    print(f\"Total samples: {sum(d.data_size for d in devices):,}\")\n\n    # Initialise server with random weights (5-layer model)\n    server = FederatedServer(\n        global_weights=[random.random() for _ in range(5)],\n        devices=devices,\n    )\n\n    # Train for 50 rounds\n    history = server.train(rounds=50, fraction_selected=0.2, local_epochs=3)\n\n    print(f\"\\nFinal global accuracy: {history[-1]:.4f}\")\n    print(f\"Improvement: {history[-1] - history[0]:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "123-tensorflow-federated-integration-note",
      children: "1.2.3 TensorFlow Federated Integration Note"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TensorFlow Federated (TFF) is the primary open-source framework for FL. A production TFF pipeline follows this structure:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\ntff_stub.py — Conceptual structure of a TensorFlow Federated pipeline.\n(Not executable — shows TFF API shape for reference.)\n\"\"\"\n\n# import tensorflow_federated as tff\n# import tensorflow as tf\n#\n# # 1. Define model function\n# def create_keras_model():\n#     return tf.keras.Sequential([\n#         tf.keras.layers.Dense(64, activation=\"relu\", input_shape=(784,)),\n#         tf.keras.layers.Dense(10, activation=\"softmax\"),\n#     ])\n#\n# # 2. Wrap for TFF\n# def model_fn():\n#     keras_model = create_keras_model()\n#     return tff.learning.from_keras_model(\n#         keras_model,\n#         input_spec=(tf.TensorSpec(shape=(None, 784), dtype=tf.float32),),\n#         loss=tf.keras.losses.SparseCategoricalCrossentropy(),\n#     )\n#\n# # 3. Build FedAvg process\n# iterative_process = tff.learning.algorithms.build_weighted_fed_avg(\n#     model_fn,\n#     client_optimizer_fn=lambda: tf.keras.optimizers.SGD(0.01),\n#     server_optimizer_fn=lambda: tf.keras.optimizers.SGD(0.1),\n# )\n#\n# # 4. Initialize and run rounds\n# state = iterative_process.initialize()\n# for round in range(50):\n#     state, metrics = iterative_process.next(state, federated_train_data)\n#     print(f\"Round {round}: loss = {metrics['loss']:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-on-device-training",
      children: "1.3 On-Device Training"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "On-device training enables models to adapt to individual users without sending data to servers. This pattern powers keyboard predictions that learn your typing style, camera apps that recognise your frequently photographed subjects, and health apps that calibrate to your physiology."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "131-transfer-learning-on-device",
      children: "1.3.1 Transfer Learning on Device"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Transfer learning adapts a pre-trained backbone to a new task using minimal data. On device, this means freezing the feature extractor and training only a small classification head. The backbone runs in inference mode; only the last few layers require gradient computation and weight updates."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\non_device_transfer.py — Simulate on-device transfer learning.\n\"\"\"\n\nimport math\nfrom dataclasses import dataclass, field\nfrom typing import Optional\n\n@dataclass\nclass DeviceTransferModel:\n    \"\"\"Simulates a model fine-tuned on-device with frozen backbone.\"\"\"\n\n    backbone_params: int = 5_000_000\n    head_params: int = 50_000\n    backbone_frozen: bool = True\n    base_accuracy: float = 0.85\n    adaptation_samples: int = 0\n    adapted_accuracy: Optional[float] = None\n\n    def adapt(self, n_samples: int, learning_rate: float = 0.001) -> float:\n        \"\"\"Simulate on-device adaptation with limited samples.\"\"\"\n        if n_samples == 0:\n            self.adapted_accuracy = self.base_accuracy\n            return self.adapted_accuracy\n\n        # Few-shot learning: accuracy improves logarithmically with samples\n        improvement = 0.12 * (1 - math.exp(-n_samples / 200))\n        # Higher LR helps initially but saturates\n        lr_factor = min(1.0, learning_rate * 100)\n        self.adapted_accuracy = min(\n            0.99,\n            self.base_accuracy + improvement * lr_factor,\n        )\n        self.adaptation_samples = n_samples\n        return self.adapted_accuracy\n\n    def compute_cost(self) -> dict:\n        \"\"\"Estimate memory and compute cost for on-device training.\"\"\"\n        if not self.backbone_frozen:\n            return {\n                \"trainable_params\": self.backbone_params + self.head_params,\n                \"memory_mb\": round((self.backbone_params + self.head_params) * 4 / 1e6, 1),\n                \"recommendation\": \"⚠️ Training backbone on device is risky\",\n            }\n\n        return {\n            \"trainable_params\": self.head_params,\n            \"memory_mb\": round(self.head_params * 4 / 1e6, 2),\n            \"recommendation\": \"✅ Safe for on-device training\",\n        }\n\ndef simulate_personalization(\n    users: int = 1000,\n    samples_per_user: tuple[int, int] = (5, 200),\n) -> dict:\n    \"\"\"Simulate personalization across many users.\"\"\"\n    import random\n    base_acc = 0.82\n    before_accs = []\n    after_accs = []\n    low_data_users = 0\n\n    for _ in range(users):\n        n = random.randint(*samples_per_user)\n        model = DeviceTransferModel(base_accuracy=base_acc)\n        before_accs.append(base_acc)\n        after = model.adapt(n)\n        after_accs.append(after)\n        if n < 20:\n            low_data_users += 1\n\n    avg_before = sum(before_accs) / len(before_accs)\n    avg_after = sum(after_accs) / len(after_accs)\n    lift = avg_after - avg_before\n\n    return {\n        \"users\": users,\n        \"avg_before\": avg_before,\n        \"avg_after\": avg_after,\n        \"avg_lift\": lift,\n        \"low_data_users_pct\": low_data_users / users * 100,\n    }\n\n# === Demonstration ===\nif __name__ == \"__main__\":\n    # Single device adaptation\n    print(\"--- Single Device Adaptation ---\")\n    model = DeviceTransferModel(\n        backbone_params=5_000_000,\n        head_params=50_000,\n        base_accuracy=0.82,\n    )\n\n    for samples in [10, 50, 100, 500]:\n        acc = model.adapt(samples)\n        print(f\"  {samples:>4} samples → accuracy = {acc:.3f}\")\n\n    cost = model.compute_cost()\n    print(f\"\\n  Cost: {cost['trainable_params']:,} trainable params\")\n    print(f\"  Memory: {cost['memory_mb']} MB\")\n    print(f\"  {cost['recommendation']}\")\n\n    # Population simulation\n    print(\"\\n--- Population Personalization ---\")\n    results = simulate_personalization(users=5000, samples_per_user=(5, 300))\n    print(f\"  Users: {results['users']:,}\")\n    print(f\"  Accuracy before: {results['avg_before']:.3f}\")\n    print(f\"  Accuracy after:  {results['avg_after']:.3f}\")\n    print(f\"  Average lift:    {results['avg_lift']:.3f}\")\n    print(f\"  Low-data users (<20 samples): {results['low_data_users_pct']:.1f}%\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "132-few-shot-adaptation",
      children: "1.3.2 Few-Shot Adaptation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Few-shot learning adapts a model with only 1–10 labelled examples per class. On edge devices, few-shot is critical because users rarely provide explicit labels. The adaptation must happen in seconds, not hours."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common few-shot techniques for edge:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Prototypical Networks"
      }), ": Compute a prototype (mean embedding) for each class from the few labelled examples. Classify new inputs by nearest-prototype distance. No gradient update needed at inference time."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Model-Agnostic Meta-Learning (MAML)"
      }), ": Train a meta-initialisation that can adapt to new tasks in a few gradient steps. MAML requires a meta-training phase (done in cloud) and a fast adaptation phase (done on device)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Linear Probe"
      }), ": Freeze the feature extractor. Train a logistic regression or SVM on the extracted features. This is the simplest and most common approach for mobile."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph CLOUD[Cloud — Meta Training]\n        DATA[Large Dataset] --> META[Meta-Learning]\n        META --> INIT[Initial Weights θ]\n    end\n    subgraph DEVICE[Edge Device — Adaptation]\n        INIT --> FROZEN[Freeze Backbone]\n        FROZEN --> PROBE[Train Linear Probe]\n        PROBE --> FEW[1-10 User Samples]\n        FEW --> ADAPTED[Adapted Model]\n    end\n    CLOUD -->|Download θ| DEVICE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "133-personalization-strategies",
      children: "1.3.3 Personalization Strategies"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data Needed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Update Frequency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Privacy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Accuracy Lift"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Global model only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Baseline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Clustered model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User cluster ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per cluster"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+2–5%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fine-tuned head"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10–100 samples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weekly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+5–15%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full fine-tune"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100+ samples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monthly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weak (gradients)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+10–20%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Personalised embedding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implicit feedback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+3–8%"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14-offline-first-architecture",
      children: "1.4 Offline-First Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Offline-first means the app delivers full functionality without a network connection. For edge AI, this translates to running inference locally, storing results in a local cache, and syncing with the cloud when connectivity is available."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "141-local-inference-engine",
      children: "1.4.1 Local Inference Engine"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The core of an offline-first architecture is a local inference engine that loads a compressed model and executes predictions without any network call. The engine must handle model loading, input preprocessing, inference, and output postprocessing within the device's memory budget."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nlocal_inference.py — Offline-first local inference engine with cache.\n\"\"\"\n\nimport json\nimport time\nfrom dataclasses import dataclass, field\nfrom datetime import datetime, timedelta\nfrom typing import Any, Optional\n\n@dataclass\nclass InferenceResult:\n    \"\"\"Result of a single local inference.\"\"\"\n    input_hash: str\n    prediction: Any\n    confidence: float\n    timestamp: datetime\n    latency_ms: float\n\n@dataclass\nclass LocalInferenceEngine:\n    \"\"\"Runs model inference entirely on-device with caching.\"\"\"\n\n    model_name: str\n    model_version: str\n    avg_latency_ms: float = 15.0  # simulated\n    cache: dict[str, InferenceResult] = field(default_factory=dict)\n    cache_ttl_hours: int = 24\n    total_inferences: int = 0\n    cache_hits: int = 0\n\n    def predict(self, input_data: dict, input_hash: str) -> InferenceResult:\n        \"\"\"Run local inference with cache check.\"\"\"\n\n        # Cache check\n        cached = self.cache.get(input_hash)\n        if cached:\n            age = datetime.utcnow() - cached.timestamp\n            if age < timedelta(hours=self.cache_ttl_hours):\n                self.cache_hits += 1\n                return cached\n\n        # Simulate inference\n        start = time.perf_counter()\n        result = self._infer(input_data)\n        latency = (time.perf_counter() - start) * 1000\n        # Use simulated latency if real inference too fast\n        if latency < 1:\n            latency = self.avg_latency_ms * (0.8 + 0.4 * (id(input_hash) % 100) / 100)\n\n        inference = InferenceResult(\n            input_hash=input_hash,\n            prediction=result[\"prediction\"],\n            confidence=result[\"confidence\"],\n            timestamp=datetime.utcnow(),\n            latency_ms=round(latency, 2),\n        )\n\n        self.cache[input_hash] = inference\n        self.total_inferences += 1\n        return inference\n\n    def _infer(self, input_data: dict) -> dict:\n        \"\"\"Simulated forward pass.\"\"\"\n        vals = [v for v in input_data.values() if isinstance(v, (int, float))]\n        mean_val = sum(vals) / len(vals) if vals else 0.5\n        return {\n            \"prediction\": 1 if mean_val > 0.5 else 0,\n            \"confidence\": min(0.95, 0.5 + abs(mean_val - 0.5)),\n        }\n\n    def cache_stats(self) -> dict:\n        \"\"\"Return cache performance metrics.\"\"\"\n        hit_rate = (\n            self.cache_hits / (self.total_inferences + self.cache_hits)\n            if (self.total_inferences + self.cache_hits) > 0\n            else 0.0\n        )\n        return {\n            \"cache_size\": len(self.cache),\n            \"total_inferences\": self.total_inferences,\n            \"cache_hits\": self.cache_hits,\n            \"hit_rate\": round(hit_rate, 3),\n            \"estimated_saved_latency_ms\": round(\n                self.cache_hits * self.avg_latency_ms, 1\n            ),\n        }\n\n    def clear_expired_cache(self) -> int:\n        \"\"\"Remove entries older than TTL.\"\"\"\n        now = datetime.utcnow()\n        expired_keys = [\n            k for k, v in self.cache.items()\n            if now - v.timestamp > timedelta(hours=self.cache_ttl_hours)\n        ]\n        for k in expired_keys:\n            del self.cache[k]\n        return len(expired_keys)\n\n@dataclass\nclass OfflineSyncEngine:\n    \"\"\"Manages sync between local storage and cloud.\"\"\"\n\n    pending_sync: list[dict] = field(default_factory=list)\n    last_sync: Optional[datetime] = None\n    is_online: bool = True\n    bandwidth_kbps: float = 1000.0  # simulated\n\n    def record_inference(self, inference: InferenceResult) -> None:\n        \"\"\"Queue inference result for eventual sync.\"\"\"\n        self.pending_sync.append({\n            \"prediction\": inference.prediction,\n            \"confidence\": inference.confidence,\n            \"timestamp\": inference.timestamp.isoformat(),\n            \"latency_ms\": inference.latency_ms,\n        })\n\n    def sync(self) -> dict:\n        \"\"\"Upload pending data when online.\"\"\"\n        if not self.is_online:\n            return {\"status\": \"offline\", \"synced\": 0, \"pending\": len(self.pending_sync)}\n\n        if not self.pending_sync:\n            self.last_sync = datetime.utcnow()\n            return {\"status\": \"no_data\", \"synced\": 0}\n\n        # Estimate sync time\n        data_size_bytes = len(json.dumps(self.pending_sync).encode(\"utf-8\"))\n        estimated_time_s = (data_size_bytes * 8) / (self.bandwidth_kbps * 1024)\n\n        synced = len(self.pending_sync)\n        self.pending_sync.clear()\n        self.last_sync = datetime.utcnow()\n\n        return {\n            \"status\": \"synced\",\n            \"synced\": synced,\n            \"estimated_time_ms\": round(estimated_time_s * 1000, 1),\n            \"data_size_bytes\": data_size_bytes,\n        }\n\n    def set_connectivity(self, online: bool) -> None:\n        \"\"\"Simulate connectivity changes.\"\"\"\n        self.is_online = online\n        print(f\"  Connectivity changed: {'online' if online else 'offline'}\")\n\n# === Demonstration ===\nif __name__ == \"__main__\":\n    engine = LocalInferenceEngine(\n        model_name=\"edge_classifier_v2\",\n        model_version=\"2.1.0\",\n        avg_latency_ms=12.0,\n    )\n    sync = OfflineSyncEngine(bandwidth_kbps=500)\n\n    print(\"--- Offline-First Inference Simulation ---\")\n    # Generate sample inputs\n    test_inputs = [\n        ({\"feature_1\": 0.8, \"feature_2\": 0.3}, \"hash_a\"),\n        ({\"feature_1\": 0.2, \"feature_2\": 0.7}, \"hash_b\"),\n        ({\"feature_1\": 0.8, \"feature_2\": 0.3}, \"hash_a\"),  # duplicate\n        ({\"feature_1\": 0.9, \"feature_2\": 0.1}, \"hash_c\"),\n        ({\"feature_1\": 0.8, \"feature_2\": 0.3}, \"hash_a\"),  # another duplicate\n    ]\n\n    for inputs, h in test_inputs:\n        result = engine.predict(inputs, h)\n        sync.record_inference(result)\n        print(\n            f\"  Input {h}: pred={result.prediction}, \"\n            f\"conf={result.confidence:.2f}, \"\n            f\"latency={result.latency_ms:.1f}ms\"\n        )\n\n    print(f\"\\nCache stats: {engine.cache_stats()}\")\n\n    # Simulate offline sync\n    print(\"\\n--- Sync Simulation ---\")\n    sync.set_connectivity(False)\n    result = sync.sync()\n    print(f\"  Sync while offline: {result}\")\n\n    sync.set_connectivity(True)\n    result = sync.sync()\n    print(f\"  Sync after online: {result}\")\n    print(f\"  Last sync: {sync.last_sync}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "142-bandwidth-optimization",
      children: "1.4.2 Bandwidth Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Offline-first architectures must minimize data transfer when connectivity is intermittent or expensive. Key strategies:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Delta updates"
      }), ": Send only changed model weights, not the full model binary. Typical delta is 5–15% of full model size."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Compressed payloads"
      }), ": Use gzip, Brotli, or Zstandard compression for model downloads. Reduces transfer size by 3–5×."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Opportunistic sync"
      }), ": Only sync when on unmetered Wi-Fi and charging. Avoid syncing on cellular data or low battery."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Batched uploads"
      }), ": Buffer multiple inference results and upload in a single batch. Reduces connection overhead and battery drain."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nbandwidth_optimizer.py — Estimate bandwidth savings from edge optimization strategies.\n\"\"\"\n\nfrom dataclasses import dataclass\nfrom typing import Optional\n\n@dataclass\nclass BandwidthSimulation:\n    \"\"\"Simulate bandwidth usage with and without optimization.\"\"\"\n\n    model_size_mb: float = 50.0\n    daily_inferences: int = 1000\n    inference_result_bytes: int = 256\n    model_update_frequency_days: int = 14\n    delta_update_ratio: float = 0.1  # delta is 10% of full model\n    compression_ratio: float = 0.3  # compressed to 30% of original\n    opportunistic_ratio: float = 0.6  # 60% of syncs happen on Wi-Fi\n\n    def no_optimization(self) -> dict:\n        \"\"\"Bandwidth without any optimization.\"\"\"\n        daily_inference_data = self.daily_inferences * self.inference_result_bytes\n        monthly_inference = daily_inference_data * 30 / 1024 / 1024  # MB\n\n        model_updates_mb = (\n            self.model_size_mb * (30 / self.model_update_frequency_days)\n        )\n\n        return {\n            \"daily_inference_bytes\": daily_inference_data,\n            \"monthly_inference_mb\": round(monthly_inference, 1),\n            \"monthly_model_update_mb\": round(model_updates_mb, 1),\n            \"total_monthly_mb\": round(monthly_inference + model_updates_mb, 1),\n        }\n\n    def with_optimization(self) -> dict:\n        \"\"\"Bandwidth with delta updates, compression, and opportunistic sync.\"\"\"\n        daily_inference_data = self.daily_inferences * self.inference_result_bytes\n        monthly_inference = daily_inference_data * 30 / 1024 / 1024\n\n        # Compressed model updates with delta\n        full_update_mb = self.model_size_mb * self.compression_ratio\n        delta_update_mb = full_update_mb * self.delta_update_ratio\n\n        # Only full updates on Wi-Fi, delta on cellular\n        updates_per_month = 30 / self.model_update_frequency_days\n        full_updates = updates_per_month * self.opportunistic_ratio\n        delta_updates = updates_per_month * (1 - self.opportunistic_ratio)\n\n        monthly_model_mb = (full_updates * full_update_mb) + (delta_updates * delta_update_mb)\n\n        # Compress inference results\n        compressed_inference_mb = monthly_inference * self.compression_ratio\n\n        return {\n            \"daily_inference_bytes\": daily_inference_data,\n            \"monthly_inference_mb\": round(compressed_inference_mb, 1),\n            \"monthly_model_update_mb\": round(monthly_model_mb, 1),\n            \"total_monthly_mb\": round(compressed_inference_mb + monthly_model_mb, 1),\n            \"full_updates_per_month\": round(full_updates, 1),\n            \"delta_updates_per_month\": round(delta_updates, 1),\n        }\n\n    def compare(self) -> str:\n        no_opt = self.no_optimization()\n        with_opt = self.with_optimization()\n        savings = (\n            (no_opt[\"total_monthly_mb\"] - with_opt[\"total_monthly_mb\"])\n            / no_opt[\"total_monthly_mb\"]\n            * 100\n        )\n\n        return (\n            f\"Bandwidth Comparison (30 days)\\n\"\n            f\"{'':>30} {'Unoptimized':>14} {'Optimized':>14}\\n\"\n            f\"{'Monthly inference (MB)':>30} {no_opt['monthly_inference_mb']:>14.1f} \"\n            f\"{with_opt['monthly_inference_mb']:>14.1f}\\n\"\n            f\"{'Monthly model updates (MB)':>30} {no_opt['monthly_model_update_mb']:>14.1f} \"\n            f\"{with_opt['monthly_model_update_mb']:>14.1f}\\n\"\n            f\"{'Total monthly (MB)':>30} {no_opt['total_monthly_mb']:>14.1f} \"\n            f\"{with_opt['total_monthly_mb']:>14.1f}\\n\"\n            f\"{'Savings':>30} {'—':>14} {savings:>13.1f}%\"\n        )\n\n# === Demonstration ===\nif __name__ == \"__main__\":\n    sim = BandwidthSimulation(\n        model_size_mb=50,\n        daily_inferences=2000,\n        delta_update_ratio=0.12,\n        compression_ratio=0.25,\n        opportunistic_ratio=0.7,\n    )\n    print(sim.compare())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "15-production-patterns",
      children: "1.5 Production Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Deploying edge models to millions of devices requires operational discipline. These production patterns ensure that edge models stay fresh, performant, and reliable."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "151-model-update-strategy",
      children: "1.5.1 Model Update Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Edge models need updates to fix bugs, improve accuracy, and adapt to data drift. The update strategy must balance freshness against the cost of downloading new model binaries."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phased rollout"
      }), ": Release a new model to 1% of devices → monitor for 24h → expand to 5% → 20% → 100%. Each phase has a rollback trigger if metrics degrade."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sticky buckets"
      }), ": Assign devices to a model version based on a hash of the device ID. This ensures a device consistently gets the same version during an experiment."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fallback chain"
      }), ": If the new model crashes, the device falls back to the previous version, then to a hardcoded emergency model embedded in the app binary."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nmodel_update_manager.py — Phased rollout of edge model updates.\n\"\"\"\n\nimport random\nfrom dataclasses import dataclass, field\nfrom datetime import datetime\nfrom typing import Optional\n\n@dataclass\nclass ModelVersion:\n    \"\"\"Metadata for a model version.\"\"\"\n    version_id: str\n    size_mb: float\n    accuracy: float\n    crash_rate: float  # simulated\n    rollout_phases: list[float] = field(default_factory=lambda: [0.01, 0.05, 0.2, 1.0])\n\n@dataclass\nclass EdgeDevice:\n    \"\"\"Represents a single edge device.\"\"\"\n    device_id: int\n    current_version: str\n    is_active: bool = True\n    last_crash: Optional[datetime] = None\n\n    def in_rollout(self, version: ModelVersion, phase: int) -> bool:\n        \"\"\"Check if device is selected for a given rollout phase.\"\"\"\n        hash_space = 10000\n        device_hash = (self.device_id * 2654435761) % hash_space\n        threshold = int(version.rollout_phases[phase] * hash_space)\n        return device_hash < threshold\n\n@dataclass\nclass ModelUpdateManager:\n    \"\"\"Manages phased rollout of model updates.\"\"\"\n\n    devices: list[EdgeDevice]\n    versions: dict[str, ModelVersion] = field(default_factory=dict)\n\n    def register_version(self, version: ModelVersion) -> None:\n        self.versions[version.version_id] = version\n\n    def rollout_phase(\n        self,\n        target_version: str,\n        phase: int,\n    ) -> dict:\n        \"\"\"Execute one rollout phase.\"\"\"\n        model = self.versions.get(target_version)\n        if not model:\n            return {\"error\": f\"Unknown version {target_version}\"}\n\n        updated = 0\n        crashed = 0\n        phase_pct = model.rollout_phases[phase] * 100\n\n        for device in self.devices:\n            if not device.in_rollout(model, phase):\n                continue\n            if device.current_version == target_version:\n                continue\n\n            # Simulate update\n            device.current_version = target_version\n\n            # Simulate crash\n            if random.random() < model.crash_rate:\n                crashed += 1\n                device.last_crash = datetime.utcnow()\n                if crashed > updated * 0.05:  # 5% crash threshold\n                    return {\n                        \"status\": \"rolled_back\",\n                        \"reason\": \"Crash rate exceeded threshold\",\n                        \"updated\": updated,\n                        \"crashed\": crashed,\n                        \"phase_pct\": phase_pct,\n                    }\n\n            updated += 1\n\n        return {\n            \"status\": \"phase_complete\",\n            \"updated\": updated,\n            \"crashed\": crashed,\n            \"phase_pct\": phase_pct,\n        }\n\n    def full_rollout(\n        self,\n        target_version: str,\n    ) -> list[dict]:\n        \"\"\"Run all rollout phases sequentially.\"\"\"\n        results = []\n        print(f\"Starting rollout of {target_version}...\")\n        for phase in range(4):\n            result = self.rollout_phase(target_version, phase)\n            results.append(result)\n            print(\n                f\"  Phase {phase + 1} ({result['phase_pct']:.0f}%): \"\n                f\"{result['status']} — updated {result['updated']}, \"\n                f\"crashed {result['crashed']}\"\n            )\n            if result[\"status\"] == \"rolled_back\":\n                print(f\"  Rollout HALTED at phase {phase + 1}\")\n                break\n        return results\n\n# === Demonstration ===\nif __name__ == \"__main__\":\n    random.seed(42)\n\n    devices = [EdgeDevice(device_id=i, current_version=\"v1.0\") for i in range(10000)]\n\n    manager = ModelUpdateManager(devices)\n    manager.register_version(ModelVersion(\n        version_id=\"v2.0\",\n        size_mb=12.5,\n        accuracy=0.967,\n        crash_rate=0.002,  # 0.2% crash rate\n    ))\n\n    results = manager.full_rollout(\"v2.0\")\n\n    updated_count = sum(1 for d in devices if d.current_version == \"v2.0\")\n    print(f\"\\nFinal: {updated_count}/10000 devices on v2.0\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "152-ab-testing-on-edge",
      children: "1.5.2 A/B Testing on Edge"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A/B testing on edge devices follows the same principles as server-side A/B testing but adds constraints: devices may be offline when metrics are collected, model versions must be sticky (device always sees the same version), and crash metrics are the primary success/failure signal."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph EXPERIMENT[Edge A/B Test]\n        ASSIGN[Hashed Device Assignment]\n        ASSIGN --> A[Control Group<br/>Current Model]\n        ASSIGN --> B[Treatment Group<br/>Candidate Model]\n    end\n    subgraph METRICS[Edge Metrics]\n        A --> LAT_A[Latency p50/p95]\n        A --> CRASH_A[Crash Rate]\n        A --> QUAL_A[Quality Score]\n        B --> LAT_B[Latency p50/p95]\n        B --> CRASH_B[Crash Rate]\n        B --> QUAL_B[Quality Score]\n    end\n    subgraph DECISION[Compare & Decide]\n        LAT_A --> COMPARE{Metric Delta}\n        LAT_B --> COMPARE\n        CRASH_A --> COMPARE\n        CRASH_B --> COMPARE\n        COMPARE -->|Significant| ROLLOUT[Roll out winner]\n        COMPARE -->|No difference| STALE[Run longer or discard]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key metrics for edge A/B tests:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Collection Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Success Criterion"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Crash rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Crashlytics / Sentry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 0.1% increase"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inference latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On-device timer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p95 < 50ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App binary size delta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 10 MB increase"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "User engagement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local event logging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No statistically significant drop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Accuracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Federated evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Within 1% of baseline"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "153-monitoring-and-crash-analytics",
      children: "1.5.3 Monitoring and Crash Analytics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Edge monitoring requires a lightweight telemetry layer that does not impact app performance. The golden rule: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "never send telemetry synchronously during inference"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"\nedge_monitoring.py — Lightweight telemetry and crash analytics for edge models.\n\"\"\"\n\nimport json\nimport random\nfrom collections import defaultdict\nfrom dataclasses import dataclass, field\nfrom datetime import datetime\nfrom typing import Any\n\n@dataclass\nclass TelemetryEvent:\n    \"\"\"Single telemetry event recorded on device.\"\"\"\n    event_type: str  # inference, crash, model_load, sync\n    model_version: str\n    latency_ms: float = 0.0\n    error: str = \"\"\n    memory_mb: float = 0.0\n    timestamp: datetime = field(default_factory=datetime.utcnow)\n\n@dataclass\nclass EdgeTelemetryCollector:\n    \"\"\"Collects and batches telemetry on device for async upload.\"\"\"\n\n    device_id: str\n    model_version: str\n    buffer: list[TelemetryEvent] = field(default_factory=list)\n    max_buffer_size: int = 100\n    crash_count: int = 0\n    inference_count: int = 0\n    latency_bucket: defaultdict = field(default_factory=lambda: defaultdict(int))\n\n    def record_inference(self, latency_ms: float) -> None:\n        \"\"\"Record an inference event with latency.\"\"\"\n        self.inference_count += 1\n        bucket = int(latency_ms / 10) * 10  # bucket by 10ms\n        self.latency_bucket[bucket] += 1\n\n        if self.inference_count % 10 == 0:\n            self._buffer_event(TelemetryEvent(\n                event_type=\"inference\",\n                model_version=self.model_version,\n                latency_ms=latency_ms,\n            ))\n\n    def record_crash(self, error: str) -> None:\n        \"\"\"Record a crash event.\"\"\"\n        self.crash_count += 1\n        self._buffer_event(TelemetryEvent(\n            event_type=\"crash\",\n            model_version=self.model_version,\n            error=error,\n        ))\n\n    def record_model_load(self, memory_mb: float) -> None:\n        \"\"\"Record model loading telemetry.\"\"\"\n        self._buffer_event(TelemetryEvent(\n            event_type=\"model_load\",\n            model_version=self.model_version,\n            memory_mb=memory_mb,\n        ))\n\n    def _buffer_event(self, event: TelemetryEvent) -> None:\n        self.buffer.append(event)\n        if len(self.buffer) >= self.max_buffer_size:\n            self.flush()\n\n    def flush(self) -> list[dict]:\n        \"\"\"Serialize and clear the telemetry buffer.\"\"\"\n        if not self.buffer:\n            return []\n\n        payload = []\n        for event in self.buffer:\n            payload.append({\n                \"device_id\": self.device_id,\n                \"event_type\": event.event_type,\n                \"model_version\": event.model_version,\n                \"latency_ms\": event.latency_ms,\n                \"error\": event.error,\n                \"memory_mb\": event.memory_mb,\n                \"timestamp\": event.timestamp.isoformat(),\n            })\n\n        self.buffer.clear()\n        return payload\n\n    def summary(self) -> str:\n        \"\"\"Generate a summary of collected telemetry.\"\"\"\n        total_latency = sum(\n            bucket * count for bucket, count in self.latency_bucket.items()\n        )\n        avg_latency = total_latency / self.inference_count if self.inference_count else 0\n        p95_bucket = sorted(self.latency_bucket.keys())[\n            max(0, int(len(self.latency_bucket) * 0.95) - 1)\n        ] if self.latency_bucket else 0\n\n        return (\n            f\"Telemetry Summary (device: {self.device_id})\\n\"\n            f\"  Model: {self.model_version}\\n\"\n            f\"  Inferences: {self.inference_count}\\n\"\n            f\"  Avg latency: {avg_latency:.1f}ms\\n\"\n            f\"  p95 latency bucket: {p95_bucket}ms\\n\"\n            f\"  Crashes: {self.crash_count}\\n\"\n            f\"  Crash rate: {(self.crash_count / max(1, self.inference_count)) * 100:.2f}%\\n\"\n            f\"  Buffer size: {len(self.buffer)}\"\n        )\n\ndef simulate_production_day(devices: int = 5) -> None:\n    \"\"\"Simulate a day of production edge monitoring.\"\"\"\n    collectors = [\n        EdgeTelemetryCollector(\n            device_id=f\"device_{i:04d}\",\n            model_version=\"v2.1.0\",\n        )\n        for i in range(devices)\n    ]\n\n    for collector in collectors:\n        # Simulate 200–500 inferences per device\n        n_inferences = random.randint(200, 500)\n        for _ in range(n_inferences):\n            latency = random.gauss(25, 8)  # mean 25ms, std 8ms\n            collector.record_inference(max(5, latency))\n\n        # Simulate occasional crashes (0.5% rate)\n        if random.random() < 0.005:\n            collector.record_crash(\"OOM during forward pass\")\n\n        print(collector.summary())\n        print()\n\n        # Flush at end of day\n        payload = collector.flush()\n        print(f\"  Flushed {len(payload)} events\")\n\n# === Demonstration ===\nif __name__ == \"__main__\":\n    random.seed(42)\n    print(\"=== Production Day Simulation ===\\n\")\n    simulate_production_day(devices=3)\n\n    # Aggregate crash analytics\n    print(\"\\n=== Aggregate Crash Analytics ===\")\n    all_events = []\n    for d in range(10):\n        collector = EdgeTelemetryCollector(\n            device_id=f\"aggr_{d:04d}\",\n            model_version=\"v2.1.0\",\n        )\n        for _ in range(random.randint(100, 300)):\n            collector.record_inference(random.gauss(22, 6))\n        if random.random() < 0.008:\n            collector.record_crash(\"segfault in TFLite delegate\")\n        all_events.extend(collector.flush())\n\n    crashes = [e for e in all_events if e[\"event_type\"] == \"crash\"]\n    inferences = [e for e in all_events if e[\"event_type\"] == \"inference\"]\n    avg_lat = sum(e[\"latency_ms\"] for e in inferences) / len(inferences) if inferences else 0\n\n    print(f\"Total events: {len(all_events)}\")\n    print(f\"Crashes: {len(crashes)}\")\n    print(f\"Crash rate: {len(crashes) / len(all_events) * 100:.2f}%\")\n    print(f\"Avg inference latency: {avg_lat:.1f}ms\")\n\n    if crashes:\n        print(f\"\\nTop crash errors:\")\n        error_counts = defaultdict(int)\n        for c in crashes:\n            error_counts[c[\"error\"]] += 1\n        for error, count in sorted(error_counts.items(), key=lambda x: -x[1])[:3]:\n            print(f\"  {error}: {count} occurrences\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "easy",
      children: "Easy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is model quantization and why is it used for edge deployment?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Quantization reduces the numerical precision of model weights from FP32 to lower bit-widths (INT8, FP16). It reduces model size by up to 4× and accelerates inference on edge hardware with minimal accuracy loss (0.5–2%)."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the difference between post-training quantization and quantization-aware training?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "PTQ applies quantization after training — fast but may lose accuracy with outlier weights. QAT simulates quantization during training so the model learns to compensate, yielding 1–3% better accuracy than PTQ."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Why is federated learning considered privacy-preserving?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Raw data never leaves the device. Only model updates (gradients or weights) are sent to the server. The server never sees individual user data, only aggregated model parameters."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "medium",
      children: "Medium"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Explain how knowledge distillation helps edge deployment."
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Distillation trains a small student model to mimic a large teacher model's soft predictions. The student learns class relationships and decision boundaries, not just hard labels. This yields a compact model (5–20× smaller) that retains 90–95% of the teacher's accuracy."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What are the main challenges of on-device training compared to cloud training?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Limited memory (cannot store full gradients for large models), limited compute (battery-constrained), small data per user (few-shot regime), and risk of catastrophic forgetting when adapting to a narrow distribution."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Describe the trade-offs between full model download and delta updates for edge model distribution."
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Full downloads are simple and reliable but consume bandwidth (50–500 MB). Delta updates transfer only changed weights (5–15% of full size), saving bandwidth, but require a diff algorithm and a rollback plan if the delta is corrupted."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hard",
      children: "Hard"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a federated learning system for a keyboard prediction model that must respect user privacy and work offline."
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use FedAvg with differential privacy (ε = 4–8) to bound information leakage. Apply secure aggregation so the server only sees the aggregate update. Use on-device fine-tuning (last layer only) to personalise predictions. Upload only encrypted, noise-calibrated weight deltas on unmetered Wi-Fi. Use local DP to sanitise training data before any computation. Run all inference locally with zero cloud calls."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "You deploy an edge model to 1 million devices. The crash rate jumps from 0.1% to 2% after a model update. Walk through your incident response."
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Immediately pause the rollout and roll back to the previous model version via the fallback chain. Check crash logs to identify the error (e.g., OOM, delegate failure, model format mismatch). Compare the crashing device profile (RAM, OS version, chipset) against the successful devices. Reproduce the crash on a simulator. Fix the issue — likely caused by an unsupported operation in the quantized model. Test on the affected device profile. Resume rollout with a smaller phase (0.1%) and a 48-h monitoring window."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Compare three personalization strategies for an on-device image classifier: fine-tuned head, prototypical network, and full fine-tune. When would you use each?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Fine-tuned head (10–100 samples, weekly update): best for most apps — balances accuracy (+5–15%) with low compute and memory cost. Prototypical network (1–5 samples, instant): use when users provide almost no labels; requires a good feature extractor. Full fine-tune (100+ samples, monthly): highest accuracy (+10–20%) but expensive; use only for premium features on high-end devices with explicit user consent."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz-5-mcq",
      children: "Chapter Quiz (5 MCQ)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which combination of compression techniques typically achieves the best accuracy-to-size ratio for edge deployment?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Quantization only"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Pruning only"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Pruning → Quantization → Distillation in sequence"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Distillation → Pruning → Training from scratch"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "In federated learning, what does the FedAvg algorithm do?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Averages the training data across all devices"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Computes a weighted average of model updates by data size"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Selects the best-performing device's model"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Trains a model on the server using aggregated features"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the primary advantage of structured pruning over unstructured pruning for edge deployment?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Higher compression ratio"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Better accuracy retention"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Faster inference on any hardware without special libraries"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Easier to implement"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the purpose of a fallback chain in edge model updates?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) To reduce download size"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) To ensure the device always has a working model even if the new one crashes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) To A/B test multiple model versions simultaneously"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) To compress the model further"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Why should telemetry never be sent synchronously during on-device inference?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Telemetry data is too large"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) It would increase inference latency and degrade user experience"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The network may not be available"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Telemetry is not needed for edge models"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Edge deployment patterns are the bridge between powerful cloud-trained models and the constrained reality of mobile and IoT devices. This chapter covered five essential patterns for production-grade edge AI."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Model compression — pruning, quantization, and distillation — forms the foundation. The combined pipeline routinely achieves 10–20× compression with minimal accuracy loss. Federated learning enables collaborative model improvement without centralising sensitive user data. On-device transfer learning personalises models for individual users using just tens of labelled samples. Offline-first architecture ensures the app delivers full functionality without network connectivity, using local inference, intelligent caching, and opportunistic sync. Production patterns — phased rollouts, A/B testing, and lightweight monitoring — keep edge models reliable across millions of diverse devices."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Python implementations in this chapter give you a working foundation for each pattern. Adapt them to your specific model architectures, device constraints, and deployment targets. Edge AI is not about compromising on quality — it is about engineering excellence under hard constraints."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next"
        }), ": Apply these patterns to your own edge deployment project. Start by compressing a model with the combined pipeline, then build an offline-first prototype that runs fully on device."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Combine pruning, quantization, and distillation in sequence for 10–20× compression with under 2% accuracy loss."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Federated learning with differential privacy (ε = 4–8) provides strong privacy guarantees while retaining model utility."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "On-device transfer learning (freeze backbone, train head) is the most practical personalization strategy for mobile."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Offline-first architectures must cache aggressively, sync opportunistically, and compress payloads."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Production edge deployments need phased rollouts, sticky A/B buckets, and a fallback chain for crash recovery."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never send telemetry synchronously during inference. Buffer and batch uploads on unmetered connections."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor crash rate as the primary health metric for edge models. Set automated rollback triggers at 0.5–1% crash rate increase."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Compression Pipeline"
          }), ": Take a model with 25M parameters at 94.2% accuracy. Apply iterative pruning (keep ratio 0.4), INT8 quantization, and distillation (T=3.0, α=0.3). Calculate final parameter count, compression ratio, and estimated accuracy. Use the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CompressionPipeline"
          }), " class as a template."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Federated Simulation"
          }), ": Create a federated learning simulation with 500 devices where 80% have <100 samples and 20% have 500–2000 samples. Train for 30 rounds with FedAvg. Plot the accuracy curve. Does the non-IID distribution slow convergence?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "On-Device Adaptation"
          }), ": Design a personalization pipeline for a smart keyboard that predicts the next word. The cloud model has 88% accuracy. With on-device adaptation (last-layer fine-tune on user's typing history), the model reaches 93% after 50 samples per user. Write a simulation that shows accuracy vs samples for 1000 users."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Offline-First Sync Strategy"
          }), ": Build a sync decision engine that chooses between immediate sync, batched sync, and deferred sync based on: connectivity (Wi-Fi/cellular/offline), battery level (>30%/>15%/<15%), and pending data size. Use the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "OfflineSyncEngine"
          }), " class as a reference."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Production Monitoring Dashboard"
          }), ": Using the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "EdgeTelemetryCollector"
          }), " class, simulate 7 days of data from 50 devices. Generate a report showing: daily active devices, average latency trend, crash rate by model version, and top-3 crash reasons. Implement a rollback trigger if the crash rate exceeds 1% in a 24-h window."]
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
            children: "Explain the core idea of Edge Deployment Patterns in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Edge Deployment Patterns."
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
            children: "Describe a production bug caused by misunderstanding Edge Deployment Patterns. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Edge Deployment Patterns from 10 users to 10 million?"
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
            children: "Compare Edge Deployment Patterns with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Edge Deployment Patterns."
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
            children: "How does Edge Deployment Patterns behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Edge Deployment Patterns run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Edge Deployment Patterns that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Edge Deployment Patterns explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Edge Deployment Patterns\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Edge Deployment Patterns to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Edge Deployment Patterns (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Edge Deployment Patterns and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Edge Deployment Patterns-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Edge Deployment Patterns interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Edge Deployment Patterns in production today?"
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
        }), " Edge Deployment Patterns builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Edge Deployment Patterns before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Edge Deployment Patterns is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Edge Deployment Patterns in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Edge Deployment Patterns chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Edge Deployment Patterns is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Edge Deployment Patterns is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Edge Deployment Patterns is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Edge Deployment Patterns issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Edge Deployment Patterns in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Edge Deployment Patterns that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Edge Deployment Patterns is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Edge Deployment Patterns in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Edge Deployment Patterns and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Edge Deployment Patterns on an empty input?"
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
            children: "Complete Medium exercises, explain Edge Deployment Patterns to someone else"
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
        children: "Always write a one-line example of Edge Deployment Patterns from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Edge Deployment Patterns when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Edge Deployment Patterns twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Edge Deployment Patterns snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Edge Deployment Patterns listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Edge Deployment Patterns to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Edge Deployment Patterns by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Edge Deployment Patterns to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Edge Deployment Patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Edge Deployment Patterns (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Edge Deployment Patterns problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Edge Deployment Patterns"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Edge Deployment Patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Edge Deployment Patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Edge Deployment Patterns fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Edge Deployment Patterns is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Edge Deployment Patterns is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Edge Deployment Patterns, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Edge Deployment Patterns asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Edge Deployment Patterns is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Edge Deployment Patterns."
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
        children: "Edge Deployment Patterns emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Edge Deployment Patterns today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Edge Deployment Patterns — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Edge Deployment Patterns changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Edge Deployment Patterns."
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
        children: "Edge Deployment Patterns appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Edge Deployment Patterns helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Edge Deployment Patterns concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Edge Deployment Patterns skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Edge Deployment Patterns to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Edge Deployment Patterns is like a recipe"
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
        }), " — this chapter contributes the Edge Deployment Patterns skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "31mobileai-04edgedeploymentpatterns-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Edge Deployment Patterns in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "31mobileai-04edgedeploymentpatterns-flash2",
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
      "data-qid": "31mobileai-04edgedeploymentpatterns-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Edge Deployment Patterns approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "31mobileai-04edgedeploymentpatterns-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Edge Deployment Patterns NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "31mobileai-04edgedeploymentpatterns-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Edge Deployment Patterns applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Edge Deployment Patterns (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Edge Deployment Patterns (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Edge Deployment Patterns-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Edge Deployment Patterns in production at scale"
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
        children: "Testing: pytest for unit tests of Edge Deployment Patterns code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Edge Deployment Patterns"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Edge Deployment Patterns code."]
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
        }), " or your IDE's debugger to step through the Edge Deployment Patterns example code."]
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
        children: "Explain Edge Deployment Patterns in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Edge Deployment Patterns."
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
        children: "Tell me about a time you debugged a Edge Deployment Patterns problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Edge Deployment Patterns is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Edge Deployment Patterns."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Edge Deployment Patterns logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Edge Deployment Patterns without notes"
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
        }), ": a small team uses Edge Deployment Patterns daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Edge Deployment Patterns patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Edge Deployment Patterns principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Edge Deployment Patterns shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Edge Deployment Patterns to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Edge Deployment Patterns, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Edge Deployment Patterns depends on input size and distribution — always benchmark for your own data."
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