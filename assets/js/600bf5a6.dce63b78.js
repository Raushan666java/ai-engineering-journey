"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[98181],{

/***/ 44926
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_09_deep_learning_pytorch_01_neural_networks_basics_md_600_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-09-deep-learning-pytorch-01-neural-networks-basics-md-600.json
const site_docs_courses_ai_engineering_placement_09_deep_learning_pytorch_01_neural_networks_basics_md_600_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/deep-learning-pytorch/01-neural-networks-basics","title":"Neural Networks Basics — Perceptron, Activation Functions, Backpropagation","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/09-deep-learning-pytorch/01-neural-networks-basics.md","sourceDirName":"courses/ai-engineering-placement/09-deep-learning-pytorch","slug":"/ai-engineering-placement/09-deep-learning-pytorch/01-neural-networks-basics","permalink":"/ai-engineering-journey/ai-engineering-placement/09-deep-learning-pytorch/01-neural-networks-basics","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":123,"frontMatter":{"id":"01-neural-networks-basics","slug":"/ai-engineering-placement/09-deep-learning-pytorch/01-neural-networks-basics","title":"Neural Networks Basics — Perceptron, Activation Functions, Backpropagation","sidebar_label":"Neural Networks Basics — Perceptron, Activation Functions, Backpropagation","sidebar_position":123},"sidebar":"placementSidebar","previous":{"title":"09 — Deep Learning with PyTorch","permalink":"/ai-engineering-journey/ai-engineering-placement/09-deep-learning-pytorch"},"next":{"title":"PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting","permalink":"/ai-engineering-journey/ai-engineering-placement/09-deep-learning-pytorch/02-pytorch-tensors"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/09-deep-learning-pytorch/01-neural-networks-basics.md


const frontMatter = {
	id: '01-neural-networks-basics',
	slug: '/ai-engineering-placement/09-deep-learning-pytorch/01-neural-networks-basics',
	title: 'Neural Networks Basics — Perceptron, Activation Functions, Backpropagation',
	sidebar_label: 'Neural Networks Basics — Perceptron, Activation Functions, Backpropagation',
	sidebar_position: 123
};
const contentTitle = 'Neural Networks Basics — Perceptron, Activation Functions, Backpropagation';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
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
  "value": "1.1 Perceptron",
  "id": "11-perceptron",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "1.2 Activation Functions",
  "id": "12-activation-functions",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview-1",
  "level": 2
}, {
  "value": "1.3 Multi-Layer Perceptron",
  "id": "13-multi-layer-perceptron",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview-2",
  "level": 2
}, {
  "value": "1.4 Backpropagation",
  "id": "14-backpropagation",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview-3",
  "level": 2
}, {
  "value": "1.5 Weight Initialization",
  "id": "15-weight-initialization",
  "level": 3
}, {
  "value": "1.6 Loss Functions",
  "id": "16-loss-functions",
  "level": 3
}, {
  "value": "Visual Analogy",
  "id": "visual-analogy",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel",
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
  "value": "True/False",
  "id": "truefalse",
  "level": 3
}, {
  "value": "Fill in the Blank",
  "id": "fill-in-the-blank",
  "level": 3
}, {
  "value": "Scenario Questions",
  "id": "scenario-questions",
  "level": 3
}, {
  "value": "Output Questions",
  "id": "output-questions",
  "level": 3
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
  "id": "truefalse-1",
  "level": 2
}, {
  "value": "Fill in the Blank",
  "id": "fill-in-the-blank-1",
  "level": 2
}, {
  "value": "Scenario Questions",
  "id": "scenario-questions-1",
  "level": 2
}, {
  "value": "Output Questions",
  "id": "output-questions-1",
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
    hr: "hr",
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
        id: "neural-networks-basics--perceptron-activation-functions-backpropagation",
        children: "Neural Networks Basics — Perceptron, Activation Functions, Backpropagation"
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
            children: "Understand the perceptron model and its limitations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement common activation functions: sigmoid, tanh, ReLU, Leaky ReLU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Derive backpropagation using the chain rule"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build a multi-layer perceptron from scratch in PyTorch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement forward pass, loss computation, and backward pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand gradient vanishing/exploding and weight initialization"
          })]
        })]
      })]
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
            children: "1.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Perceptron"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear threshold unit, decision boundary, XOR limitation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Activation Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sigmoid, tanh, ReLU, Leaky ReLU, Swish, GELU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-Layer Perceptron"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hidden layers, universal approximation theorem"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backpropagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chain rule, gradient computation, computational graph"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weight Initialization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Xavier/Glorot, He, zero-center, vanishing gradients"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loss Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MSE, cross-entropy, hinge, custom losses"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Input X] --> B[Linear: z = Wx + b]\n    B --> C[Activation: a = f(z)]\n    C --> D{More Layers?}\n    D -->|Yes| B\n    D -->|No| E[Output Layer]\n    E --> F[Loss: L(y, y_hat)]\n    F --> G[Backward: dL/dW]\n    G --> H[Update: W -= lr * dL/dW]\n    H --> I{Converged?}\n    I -->|No| A\n    I -->|Yes| J[Trained Model]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Neural networks are the engine behind every modern AI system — from GPT-4's language generation to self-driving car vision. This chapter builds your understanding from the ground up: starting with the single perceptron,.\nprogressing through activation functions and backpropagation, and culminating in a multi-layer perceptron implemented in PyTorch. These fundamentals directly explain why transformers work and.\nhow to debug training failures in production."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python with NumPy basics (array operations, broadcasting)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Module 08 (ML Fundamentals) — supervised learning, loss functions, gradient descent"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic calculus concept of derivatives (helpful but not strictly required)"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-perceptron",
      children: "1.1 Perceptron"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The perceptron is the simplest neural network: a linear classifier that maps inputs to binary outputs."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\nimport torch\nimport torch.nn as nn\nimport torch.optim as optim\nfrom torch.utils.data import DataLoader, TensorDataset\nfrom typing import List, Tuple, Callable\n\nclass Perceptron:\n    def __init__(self, n_features: int, lr: float = 0.01):\n        self.weights = np.zeros(n_features)\n        self.bias = 0.0\n        self.lr = lr\n\n    def predict(self, X: np.ndarray) -> np.ndarray:\n        linear = X @ self.weights + self.bias\n        return np.where(linear >= 0, 1, 0)\n\n    def fit(self, X: np.ndarray, y: np.ndarray, epochs: int = 10):\n        for epoch in range(epochs):\n            errors = 0\n            for xi, yi in zip(X, y):\n                pred = self.predict(xi.reshape(1, -1))[0]\n                if pred != yi:\n                    self.weights += self.lr * (yi - pred) * xi\n                    self.bias += self.lr * (yi - pred)\n                    errors += 1\n            if errors == 0:\n                break\n        return epoch\n\n## XOR problem — perceptron cannot solve this\nX_xor = np.array([[0, 0], [0, 1], [1, 0], [1, 1]], dtype=np.float32)\ny_xor = np.array([0, 1, 1, 0], dtype=np.float32)\n\np = Perceptron(2)\np.fit(X_xor, y_xor, epochs=20)\nprint(f\"Perceptron XOR predictions: {p.predict(X_xor)}\")\nprint(\"Perceptron cannot learn XOR (linear separability limitation)\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Perceptron convergence theorem"
      }), ": If the data is linearly separable, the perceptron converges in finite steps. XOR is not linearly separable, requiring a multi-layer network."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-activation-functions",
      children: "1.2 Activation Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Activation functions introduce non-linearity, enabling neural networks to learn complex patterns."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ActivationFunctions:\n    @staticmethod\n    def sigmoid(x: np.ndarray) -> np.ndarray:\n        return 1 / (1 + np.exp(-np.clip(x, -100, 100)))\n\n    @staticmethod\n    def sigmoid_derivative(x: np.ndarray) -> np.ndarray:\n        s = ActivationFunctions.sigmoid(x)\n        return s * (1 - s)\n\n    @staticmethod\n    def tanh(x: np.ndarray) -> np.ndarray:\n        return np.tanh(x)\n\n    @staticmethod\n    def tanh_derivative(x: np.ndarray) -> np.ndarray:\n        return 1 - np.tanh(x) ** 2\n\n    @staticmethod\n    def relu(x: np.ndarray) -> np.ndarray:\n        return np.maximum(0, x)\n\n    @staticmethod\n    def relu_derivative(x: np.ndarray) -> np.ndarray:\n        return (x > 0).astype(float)\n\n    @staticmethod\n    def leaky_relu(x: np.ndarray, alpha: float = 0.01) -> np.ndarray:\n        return np.where(x > 0, x, alpha * x)\n\n    @staticmethod\n    def leaky_relu_derivative(x: np.ndarray, alpha: float = 0.01) -> np.ndarray:\n        return np.where(x > 0, 1.0, alpha)\n\n    def plot_activations(self):\n        x = np.linspace(-5, 5, 100)\n        activations = {\n            \"Sigmoid\": self.sigmoid(x),\n            \"Tanh\": self.tanh(x),\n            \"ReLU\": self.relu(x),\n            \"Leaky ReLU\": self.leaky_relu(x),\n        }\n        for name, values in activations.items():\n            print(f\"{name:15s}: range=[{values.min():.2f}, {values.max():.2f}]\")\n\naf = ActivationFunctions()\naf.plot_activations()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PyTorch activations"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## PyTorch has built-in activation functions\nx_t = torch.randn(5)\nprint(f\"Sigmoid: {torch.sigmoid(x_t)}\")\nprint(f\"ReLU: {torch.relu(x_t)}\")\nprint(f\"Tanh: {torch.tanh(x_t)}\")\nprint(f\"LeakyReLU: {nn.LeakyReLU(0.01)(x_t)}\")\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Activation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Range"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Derivative"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sigmoid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0, 1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "σ(1-σ)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary classification output"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tanh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(-1, 1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-tanh²"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hidden layers (older)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ReLU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, ∞)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 or 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default hidden layer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Leaky ReLU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(-∞, ∞)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 or α"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dead ReLU prevention"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GELU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(-∞, ∞)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transformer models"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview-1",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-multi-layer-perceptron",
      children: "1.3 Multi-Layer Perceptron"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An MLP has one or more hidden layers between input and output. The universal approximation theorem states that a single hidden layer with enough neurons can approximate any continuous function."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MLPScratch:\n    def __init__(self, layer_sizes: List[int], activation: str = \"relu\"):\n        self.layer_sizes = layer_sizes\n        self.activation = activation\n        self.params = self._init_params()\n\n    def _init_params(self) -> dict:\n        np.random.seed(42)\n        params = {}\n        for i in range(len(self.layer_sizes) - 1):\n            # He initialization for ReLU\n            std = np.sqrt(2.0 / self.layer_sizes[i])\n            params[f\"W{i+1}\"] = np.random.randn(self.layer_sizes[i], self.layer_sizes[i+1]) * std\n            params[f\"b{i+1}\"] = np.zeros((1, self.layer_sizes[i+1]))\n        return params\n\n    def _activate(self, z: np.ndarray) -> np.ndarray:\n        if self.activation == \"relu\":\n            return np.maximum(0, z)\n        elif self.activation == \"sigmoid\":\n            return 1 / (1 + np.exp(-np.clip(z, -100, 100)))\n        elif self.activation == \"tanh\":\n            return np.tanh(z)\n        return z\n\n    def _activate_derivative(self, z: np.ndarray) -> np.ndarray:\n        if self.activation == \"relu\":\n            return (z > 0).astype(float)\n        elif self.activation == \"sigmoid\":\n            s = 1 / (1 + np.exp(-np.clip(z, -100, 100)))\n            return s * (1 - s)\n        elif self.activation == \"tanh\":\n            return 1 - np.tanh(z) ** 2\n        return np.ones_like(z)\n\n    def forward(self, X: np.ndarray) -> Tuple[dict, dict]:\n        caches = {\"A0\": X}\n        A = X\n\n        for i in range(1, len(self.layer_sizes)):\n            Z = A @ self.params[f\"W{i}\"] + self.params[f\"b{i}\"]\n            if i == len(self.layer_sizes) - 1:\n                A = Z  # Linear output for regression\n            else:\n                A = self._activate(Z)\n            caches[f\"Z{i}\"] = Z\n            caches[f\"A{i}\"] = A\n\n        return A, caches\n\n    def backward(self, y: np.ndarray, output: np.ndarray,\n                 caches: dict) -> dict:\n        grads = {}\n        m = y.shape[0]\n\n        # Output layer gradient (MSE)\n        dA = 2 * (output - y) / m\n\n        for i in range(len(self.layer_sizes) - 1, 0, -1):\n            A_prev = caches[f\"A{i-1}\"]\n            Z = caches[f\"Z{i}\"]\n\n            if i == len(self.layer_sizes) - 1:\n                dZ = dA  # Linear output\n            else:\n                dA_act = self._activate_derivative(Z)\n                dZ = dA * dA_act\n\n            grads[f\"W{i}\"] = A_prev.T @ dZ\n            grads[f\"b{i}\"] = np.sum(dZ, axis=0, keepdims=True)\n\n            if i > 1:\n                dA = dZ @ self.params[f\"W{i}\"].T\n\n        return grads\n\n    def compute_loss(self, y: np.ndarray, output: np.ndarray) -> float:\n        return np.mean((output - y) ** 2)\n\n## Test MLP on regression\nnp.random.seed(42)\nX_mlp = np.random.randn(100, 3)\ny_mlp = X_mlp[:, 0] ** 2 + np.sin(X_mlp[:, 1]) + 0.1 * np.random.randn(100)\n\nmlp = MLPScratch([3, 16, 8, 1], activation=\"relu\")\nlr = 0.01\nfor epoch in range(500):\n    output, caches = mlp.forward(X_mlp)\n    loss = mlp.compute_loss(y_mlp.reshape(-1, 1), output)\n    grads = mlp.backward(y_mlp.reshape(-1, 1), output, caches)\n\n    for key in mlp.params:\n        mlp.params[key] -= lr * grads[key]\n\n    if epoch % 100 == 0:\n        print(f\"Epoch {epoch}: loss = {loss:.6f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview-2",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-backpropagation",
      children: "1.4 Backpropagation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Backpropagation computes gradients of the loss with respect to all parameters using the chain rule."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ComputationalGraph:\n    \"\"\"Demonstrates the chain rule on a simple computation graph\"\"\"\n    def __init__(self):\n        self.graph = []\n\n    def add_operation(self, name: str, forward_fn: Callable,\n                      backward_fn: Callable, inputs: List[str]):\n        self.graph.append({\n            \"name\": name, \"forward\": forward_fn,\n            \"backward\": backward_fn, \"inputs\": inputs,\n            \"output\": None, \"grad\": None,\n        })\n\n    def forward(self, values: dict) -> float:\n        for op in self.graph:\n            input_vals = [values[v] if v in values else None for v in op[\"inputs\"]]\n            op[\"output\"] = op[\"forward\"](*input_vals)\n            values[op[\"name\"]] = op[\"output\"]\n        return values[self.graph[-1][\"name\"]]\n\n    def backward(self, grad_output: float = 1.0) -> dict:\n        for op in reversed(self.graph):\n            op[\"grad\"] = grad_output\n            if op[\"name\"] != \"input\":\n                input_grads = op[\"backward\"](grad_output, *[g.get(\"output\") for g in self.graph])\n                grad_output = input_grads[0] if input_grads else grad_output\n        return {op[\"name\"]: op[\"grad\"] for op in self.graph}\n\n## PyTorch autograd demonstration\nx = torch.tensor(2.0, requires_grad=True)\nw = torch.tensor(3.0, requires_grad=True)\nb = torch.tensor(1.0, requires_grad=True)\ny = torch.tensor(10.0)\n\nz = w * x + b\nloss = (z - y) ** 2\nloss.backward()\n\nprint(f\"dL/dw = {w.grad.item():.2f} (manual: {2 * (z.item() - y.item()) * x.item():.2f})\")\nprint(f\"dL/db = {b.grad.item():.2f} (manual: {2 * (z.item() - y.item()):.2f})\")\nprint(f\"dL/dx = {x.grad.item():.2f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Backpropagation steps"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forward pass: compute all activations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute loss"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backward pass: for each layer, compute dL/dW, dL/db, dL/dA_prev"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update parameters: W = W - lr * dL/dW"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview-3",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-weight-initialization",
      children: "1.5 Weight Initialization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Good initialization prevents vanishing/exploding gradients and speeds convergence."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class WeightInitializer:\n    @staticmethod\n    def xavier_uniform(fan_in: int, fan_out: int) -> np.ndarray:\n        limit = np.sqrt(6.0 / (fan_in + fan_out))\n        return np.random.uniform(-limit, limit, (fan_in, fan_out))\n\n    @staticmethod\n    def xavier_normal(fan_in: int, fan_out: int) -> np.ndarray:\n        std = np.sqrt(2.0 / (fan_in + fan_out))\n        return np.random.randn(fan_in, fan_out) * std\n\n    @staticmethod\n    def he_uniform(fan_in: int, fan_out: int) -> np.ndarray:\n        limit = np.sqrt(6.0 / fan_in)\n        return np.random.uniform(-limit, limit, (fan_in, fan_out))\n\n    @staticmethod\n    def he_normal(fan_in: int, fan_out: int) -> np.ndarray:\n        std = np.sqrt(2.0 / fan_in)\n        return np.random.randn(fan_in, fan_out) * std\n\n    @staticmethod\n    def zero_init(fan_in: int, fan_out: int) -> np.ndarray:\n        return np.zeros((fan_in, fan_out))\n\n    def test_initialization(self, d_in: int = 100, d_out: int = 100):\n        x = np.random.randn(1000, d_in)\n        methods = {\n            \"Xavier Uniform\": self.xavier_uniform(d_in, d_out),\n            \"He Normal\": self.he_normal(d_in, d_out),\n            \"Zero\": self.zero_init(d_in, d_out),\n        }\n        for name, W in methods.items():\n            output = x @ W\n            if np.any(output):\n                print(f\"{name:20s}: mean={output.mean():.4f}, std={output.std():.4f}\")\n            else:\n                print(f\"{name:20s}: all zeros (dead network)\")\n\ninit = WeightInitializer()\ninit.test_initialization(100, 100)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PyTorch initialization"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "layer = nn.Linear(100, 100)\nnn.init.kaiming_normal_(layer.weight, mode=\"fan_in\", nonlinearity=\"relu\")\nnn.init.xavier_normal_(layer.weight)\nprint(f\"PyTorch init: mean={layer.weight.mean().item():.4f}, std={layer.weight.std().item():.4f}\")\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Initialization"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Distribution"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scale"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Xavier/Glorot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uniform/Normal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√(2/(fan_in+fan_out))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tanh, Sigmoid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "He/Kaiming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uniform/Normal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√(2/fan_in)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ReLU, Leaky ReLU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Orthogonal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Orthogonal matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RNNs, deep networks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zero"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constant 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Biases only"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-loss-functions",
      children: "1.6 Loss Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class LossFunctions:\n    @staticmethod\n    def mse(y_true: np.ndarray, y_pred: np.ndarray) -> float:\n        return np.mean((y_true - y_pred) ** 2)\n\n    @staticmethod\n    def cross_entropy(y_true: np.ndarray, y_pred: np.ndarray) -> float:\n        eps = 1e-15\n        y_pred = np.clip(y_pred, eps, 1 - eps)\n        return -np.mean(y_true * np.log(y_pred))\n\n    @staticmethod\n    def binary_cross_entropy(y_true: np.ndarray, y_pred: np.ndarray) -> float:\n        eps = 1e-15\n        y_pred = np.clip(y_pred, eps, 1 - eps)\n        return -np.mean(y_true * np.log(y_pred) + (1 - y_true) * np.log(1 - y_pred))\n\n    @staticmethod\n    def huber_loss(y_true: np.ndarray, y_pred: np.ndarray, delta: float = 1.0) -> float:\n        error = y_true - y_pred\n        is_small = np.abs(error) <= delta\n        squared_loss = 0.5 * error ** 2\n        linear_loss = delta * (np.abs(error) - 0.5 * delta)\n        return np.mean(np.where(is_small, squared_loss, linear_loss))\n\nlf = LossFunctions()\ny_t = np.array([0, 1, 0, 1])\ny_p = np.array([0.1, 0.9, 0.3, 0.7])\nprint(f\"MSE: {lf.mse(y_t, y_p):.4f}\")\nprint(f\"Binary CE: {lf.binary_cross_entropy(y_t, y_p):.4f}\")\nprint(f\"Huber: {lf.huber_loss(y_t, y_p):.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "visual-analogy",
      children: "Visual Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Think of a neural network like an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "assembly line in a factory"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Input layer"
        }), " = Raw materials arriving at the factory — images, text, numbers. Each neuron receives one piece of the input."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hidden layers"
        }), " = Workers on the assembly line — each worker (neuron) takes the partially processed product, does one specific task (applies weights and activation), and passes it to the next worker. No single worker builds the whole car; each adds their piece."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Output layer"
        }), " = The quality inspector at the end — takes the finished product and makes the final decision: \"This is a cat\" or \"This is a dog.\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Weights"
        }), " = How skilled each worker is — some workers are critical (high weight) and some are less important (low weight). Training is like improving each worker's skill."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Activation function"
        }), " = The decision gate at each station — \"Is this good enough to pass on?\" If yes, it moves forward; if no, it gets sent back or discarded."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backpropagation"
        }), " = Feedback from the quality inspector flowing backward — if a defect is found, the inspector tells the last worker who made a mistake, who tells the previous worker, and so on. Everyone adjusts their technique."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This helps because neural networks are fundamentally ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "collaborative"
      }), " — no single neuron understands the whole problem, but together they learn to recognize patterns through repeated practice and feedback, just like workers on an assembly line."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Layer {\n  weights: number[][];\n  biases: number[];\n  activation: \"relu\" | \"sigmoid\" | \"tanh\" | \"linear\";\n}\n\nclass NeuralNetworkTS {\n  private layers: Layer[] = [];\n\n  addLayer(inputSize: number, outputSize: number, activation: Layer[\"activation\"]): void {\n    const std = Math.sqrt(2 / inputSize);\n    const weights = Array.from({ length: outputSize }, () =>\n      Array.from({ length: inputSize }, () => (Math.random() * 2 - 1) * std)\n    );\n    this.layers.push({ weights, biases: new Array(outputSize).fill(0), activation });\n  }\n\n  forward(input: number[]): number[] {\n    let current = input;\n    for (const layer of this.layers) {\n      current = layer.weights.map((w, i) => {\n        const z = w.reduce((s, wi, j) => s + wi * current[j], layer.biases[i]);\n        if (layer.activation === \"relu\") return Math.max(0, z);\n        if (layer.activation === \"sigmoid\") return 1 / (1 + Math.exp(-z));\n        return z;\n      });\n    }\n    return current;\n  }\n\n  train(X: number[][], y: number[][], lr = 0.01, epochs = 100): void {\n    for (let ep = 0; ep < epochs; ep++) {\n      let totalLoss = 0;\n      for (let i = 0; i < X.length; i++) {\n        const pred = this.forward(X[i]);\n        totalLoss += pred.reduce((s, p, j) => s + (p - y[i][j]) ** 2, 0);\n      }\n      if (ep % 20 === 0) console.log(`Epoch ${ep}: loss = ${(totalLoss / X.length).toFixed(4)}`);\n    }\n  }\n}\n\nconst nnTS = new NeuralNetworkTS();\nnnTS.addLayer(3, 8, \"relu\");\nnnTS.addLayer(8, 1, \"sigmoid\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perceptron is a linear binary classifier; cannot solve XOR (not linearly separable)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Activation functions introduce non-linearity; ReLU is the default for hidden layers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-layer perceptrons with enough capacity can approximate any continuous function"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backpropagation uses the chain rule to compute gradients efficiently through the computational graph"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["PyTorch's autograd automatically computes gradients when ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".backward()"
        }), " is called"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Weight initialization is critical: He init for ReLU, Xavier init for tanh/sigmoid"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vanishing gradients (sigmoid/tanh in deep networks) are mitigated by ReLU and batch normalization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Exploding gradients are handled by gradient clipping and proper initialization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-entropy loss is preferred for classification; MSE is preferred for regression"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PyTorch's nn.Module provides a clean abstraction for building neural networks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Do This"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Avoid This"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binary classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sigmoid output + BCE loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MSE loss (poor gradients)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Softmax output + CE loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sigmoid (doesn't sum to 1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hidden layers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ReLU activation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sigmoid/tanh (vanishing gradients)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deep network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "He initialization + batch norm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random small init"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gradient issues"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gradient clipping + proper lr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ignoring gradient norms"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl09-q1",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q1: Why can't a single perceptron solve XOR?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "A single perceptron creates a linear decision boundary (hyperplane). XOR is not linearly separable — you cannot separate the four points of XOR with a single line. This was demonstrated by Minsky and Papert (1969) and contributed to the first AI winter. XOR requires at least one hidden layer (multi-layer perceptron) to create a non-linear decision boundary."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl09-q2",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q2: What is the vanishing gradient problem and how do you address it?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Vanishing gradients occur when gradients become very small in early layers, preventing learning. This happens with sigmoid/tanh activations (derivatives < 1, multiplied by chain rule). Solutions: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) ReLU"
          }), ": derivative = 1 for positive inputs. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Batch normalization"
          }), ": normalizes layer outputs. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) ResNet skip connections"
          }), ": allows gradients to flow directly. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Proper initialization"
          }), ": He/Xavier init. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) LSTM gates"
          }), ": designed to control gradient flow."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl09-q3",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q3: Explain the chain rule in backpropagation."]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "The chain rule computes the gradient of the loss with respect to a parameter by multiplying gradients along the path. For a simple network: L = f(g(h(x))). dL/dx = dL/df * df/dg * dg/dh * dh/dx. In practice: forward pass computes activations; backward pass computes dL/dZ, dL/dW, dL/db for each layer. The gradient for layer i depends on the gradient from layer i+1, which is why we propagate \"backward\"."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl09-q4",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q4: What is the universal approximation theorem?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "The theorem states that a feedforward network with a single hidden layer containing enough neurons can approximate any continuous function to any desired accuracy, given sufficient non-linear activation. However, the theorem doesn't guarantee learnability — finding the right weights may be intractable. Deep networks (many layers) are more parameter-efficient than wide networks (one large layer) for approximating complex functions."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl09-q5",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q5: What is the difference between He and Xavier initialization?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Xavier (Glorot) init: weights sampled from distribution with variance = 2/(fan_in + fan_out). Designed for tanh/sigmoid activations. He (Kaiming) init: variance = 2/fan_in. Designed for ReLU activations. ReLU kills negative values, halving the effective variance. He init compensates by doubling the variance. Using wrong init can cause vanishing/exploding gradients in deep networks."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl09-q6",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q6: Why is ReLU preferred over sigmoid for hidden layers?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ReLU advantages: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) No vanishing gradient"
          }), ": derivative = 1 for positive inputs. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Sparsity"
          }), ": zero for negative inputs (biological plausibility). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Computationally cheap"
          }), ": max(0, x). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Faster convergence"
          }), ": about 6x faster than tanh empirically. Disadvantages: dead ReLU (neurons can become permanently zero). Solutions: Leaky ReLU (0.01x for negative), PReLU (learned slope), ELU, or Swish."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl09-q7",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q7: How does PyTorch's autograd work?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["PyTorch builds a dynamic computational graph (DAG) during the forward pass. Each tensor operation creates a node in the graph recording the operation and its inputs. When `.backward()` is called: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1)"
          }), " Computes gradients from the loss node. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2)"
          }), " Traverses the graph backward using the chain rule. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3)"
          }), " Accumulates gradients in `.grad` attributes of tensors with `requires_grad=True`. The graph is discarded after backward (dynamic — rebuilt each iteration)."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl09-q8",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q8: What is the difference between batch gradient descent and stochastic gradient descent?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Batch GD: computes gradient using the entire dataset. Accurate but slow; memory-intensive. SGD: computes gradient using one random sample. Fast but noisy; oscillates around minimum. Mini-batch GD (most common): uses a small batch (32-256). Balances accuracy and speed. The batch size is a hyperparameter: small batches generalize better but are noisy; large batches give stable gradients but may converge to sharp minima."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl09-q9",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q9: How do you choose the number of hidden layers and neurons?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Guidelines: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1)"
          }), " Start with 1-2 hidden layers. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2)"
          }), " Use more neurons in wider layers (e.g., 128-1024). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3)"
          }), " Increase layers/neurons until validation performance plateaus. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4)"
          }), " Smaller layers for simpler problems. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5)"
          }), " Use cross-validation to compare architectures. Overfitting sign: training loss << validation loss → reduce capacity. Underfitting: both losses high → increase capacity. Modern practice: use enough capacity with strong regularization."]
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl09-q10",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q10: What is the dying ReLU problem and how do you fix it?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Dead ReLU: when a neuron's weights push all inputs to the negative region, ReLU outputs 0 and the gradient is 0. The neuron can never recover because the gradient is zero. Causes: large learning rate, biased initialization, or unfortunate parameter updates. Fixes: use Leaky ReLU (0.01 slope), PReLU (learnable slope), ELU (exponential for negatives), or Swish (x * sigmoid(x)), and reduce learning rate."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1"
      }), ": Which activation function is most commonly used in hidden layers?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Sigmoid\nb) Tanh\nc) ReLU\nd) Linear"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl09-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) ReLU"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "ReLU avoids vanishing gradients and is computationally efficient."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": What problem can a single perceptron NOT solve?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) AND\nb) OR\nc) XOR\nd) NOT"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl09-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) XOR"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "XOR is not linearly separable; requires at least one hidden layer."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": How does PyTorch compute gradients automatically?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Numerical differentiation\nb) Symbolic differentiation\nc) Automatic differentiation (autograd)\nd) Manual gradient computation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl09-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) Automatic differentiation (autograd)"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "PyTorch builds a dynamic computational graph and traverses it backward."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": Which initialization is best for ReLU networks?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Xavier uniform\nb) He normal\nc) Zero initialization\nd) Random uniform [0, 1]"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl09-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) He normal"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "He init uses variance = 2/fan_in, compensating for ReLU's zeroing of negative values."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": What loss function is appropriate for binary classification?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) MSE\nb) Binary cross-entropy\nc) MAE\nd) Huber"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dl09-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Binary cross-entropy"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "BCE is derived from the Bernoulli likelihood and provides proper gradients for probability outputs."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "truefalse",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T/F 1"
      }), ": This topic is fundamental to AI engineering.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": True — Understanding deep learning pytorch is essential for building production AI systems."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T/F 2"
      }), ": The concepts in this chapter are only used in interviews.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": False — These concepts are used daily in real-world AI engineering work."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T/F 3"
      }), ": Time/space complexity analysis applies to deep learning pytorch.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": True — Every algorithm and system has performance characteristics to analyze."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T/F 4"
      }), ": deep learning pytorch concepts are independent of each other.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": False — Most concepts build on each other and are interconnected."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T/F 5"
      }), ": Real-world applications often combine multiple concepts from this chapter.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": True — Production systems use combinations of these fundamental concepts."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FIB 1"
      }), ": The key concept in this chapter is ________.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": [Review the chapter's Learning Objectives for the specific answer]"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FIB 2"
      }), ": In deep learning pytorch, the time complexity of the basic operation is ________.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": [Depends on the specific operation — check the Theory section]"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario 1"
      }), ": How would you apply the concepts from this chapter in a real AI engineering project?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": [Think about how the specific topic applies to: data processing pipelines, model training infrastructure, production systems, or interview scenarios]"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output 1"
      }), ": What is the time complexity of the main algorithm discussed in this chapter?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": [Check the Theory section for the specific complexity analysis]"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Implement a single-layer perceptron for the AND and OR logic gates. Verify it converges."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Plot sigmoid, tanh, ReLU, and Leaky ReLU on the same graph. Label all axes and show the range."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Implement a 2-layer MLP from scratch (no PyTorch) to solve XOR. Show the decision boundary."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Build a neural network in PyTorch with 3 hidden layers. Experiment with different activation functions and initialization schemes. Report training convergence speed."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Implement backpropagation manually for a 2-layer network and verify gradients match PyTorch autograd."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Using sigmoid activation in hidden layers of deep networks — sigmoid causes vanishing gradients; use ReLU for hidden layers and sigmoid only for binary output"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initializing all weights to zero — symmetric neurons never break symmetry; all neurons learn the same features; use He or Xavier initialization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ignoring gradient magnitudes during training — exploding gradients cause NaN losses; use gradient clipping and monitor gradient norms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choosing the wrong loss function — MSE for classification gives poor gradients; use cross-entropy for classification and MSE for regression"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Not using ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".detach()"
        }), " when computing loss values for logging — accidentally backpropagating through logging operations wastes memory and can corrupt gradients"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perceptron is a linear binary classifier that cannot solve XOR (not linearly separable)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Activation functions introduce non-linearity; ReLU is the default for hidden layers (avoids vanishing gradients)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-layer perceptrons with enough capacity can approximate any continuous function (universal approximation theorem)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backpropagation uses the chain rule to compute gradients layer by layer from output to input"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["PyTorch autograd builds a dynamic computational graph during forward pass and traverses it backward on ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".backward()"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "He initialization (variance = 2/fan_in) for ReLU; Xavier initialization (variance = 2/(fan_in + fan_out)) for tanh/sigmoid"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vanishing gradients: solved by ReLU, batch normalization, residual connections, and proper initialization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-entropy loss for classification; MSE for regression; BCE for binary classification"
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
            children: "Explain the core idea of Neural Networks Basics — Perceptron, Activation Functions, Backpropagation in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Neural Networks Basics — Perceptron, Activation Functions, Backpropagation."
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
            children: "Describe a production bug caused by misunderstanding Neural Networks Basics — Perceptron, Activation Functions, Backpropagation. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Neural Networks Basics — Perceptron, Activation Functions, Backpropagation from 10 users to 10 million?"
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
            children: "Compare Neural Networks Basics — Perceptron, Activation Functions, Backpropagation with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Neural Networks Basics — Perceptron, Activation Functions, Backpropagation."
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
            children: "How does Neural Networks Basics — Perceptron, Activation Functions, Backpropagation behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Neural Networks Basics — Perceptron, Activation Functions, Backpropagation run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Neural Networks Basics — Perceptron, Activation Functions, Backpropagation that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Neural Networks Basics — Perceptron, Activation Functions, Backpropagation explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Neural Networks Basics — Perceptron, Activation Functions, Backpropagation\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Neural Networks Basics — Perceptron, Activation Functions, Backpropagation to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Neural Networks Basics — Perceptron, Activation Functions, Backpropagation (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Neural Networks Basics — Perceptron, Activation Functions, Backpropagation and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Neural Networks Basics — Perceptron, Activation Functions, Backpropagation-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Neural Networks Basics — Perceptron, Activation Functions, Backpropagation interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Neural Networks Basics — Perceptron, Activation Functions, Backpropagation in production today?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test your environment (Python, editor, internet) 15 minutes before the interview."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "truefalse-1",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Neural Networks Basics — Perceptron, Activation Functions, Backpropagation builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Neural Networks Basics — Perceptron, Activation Functions, Backpropagation before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Neural Networks Basics — Perceptron, Activation Functions, Backpropagation is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Neural Networks Basics — Perceptron, Activation Functions, Backpropagation in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Neural Networks Basics — Perceptron, Activation Functions, Backpropagation chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank-1",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Neural Networks Basics — Perceptron, Activation Functions, Backpropagation is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Neural Networks Basics — Perceptron, Activation Functions, Backpropagation is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Neural Networks Basics — Perceptron, Activation Functions, Backpropagation is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Neural Networks Basics — Perceptron, Activation Functions, Backpropagation issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Neural Networks Basics — Perceptron, Activation Functions, Backpropagation in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions-1",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Neural Networks Basics — Perceptron, Activation Functions, Backpropagation that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Neural Networks Basics — Perceptron, Activation Functions, Backpropagation is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Neural Networks Basics — Perceptron, Activation Functions, Backpropagation in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Neural Networks Basics — Perceptron, Activation Functions, Backpropagation and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions-1",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Neural Networks Basics — Perceptron, Activation Functions, Backpropagation on an empty input?"
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
            children: "Complete Medium exercises, explain Neural Networks Basics — Perceptron, Activation Functions, Backpropagation to someone else"
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
        children: "Always write a one-line example of Neural Networks Basics — Perceptron, Activation Functions, Backpropagation from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Neural Networks Basics — Perceptron, Activation Functions, Backpropagation when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Neural Networks Basics — Perceptron, Activation Functions, Backpropagation twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Neural Networks Basics — Perceptron, Activation Functions, Backpropagation snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Neural Networks Basics — Perceptron, Activation Functions, Backpropagation listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Neural Networks Basics — Perceptron, Activation Functions, Backpropagation to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Neural Networks Basics — Perceptron, Activation Functions, Backpropagation by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Neural Networks Basics — Perceptron, Activation Functions, Backpropagation to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Neural Networks Basics — Perceptron, Activation Functions, Backpropagation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Neural Networks Basics — Perceptron, Activation Functions, Backpropagation (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Neural Networks Basics — Perceptron, Activation Functions, Backpropagation problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Neural Networks Basics — Perceptron, Activation Functions, Backpropagation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Neural Networks Basics — Perceptron, Activation Functions, Backpropagation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Neural Networks Basics — Perceptron, Activation Functions, Backpropagation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Neural Networks Basics — Perceptron, Activation Functions, Backpropagation fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Neural Networks Basics — Perceptron, Activation Functions, Backpropagation is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Neural Networks Basics — Perceptron, Activation Functions, Backpropagation is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Neural Networks Basics — Perceptron, Activation Functions, Backpropagation, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Neural Networks Basics — Perceptron, Activation Functions, Backpropagation asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Neural Networks Basics — Perceptron, Activation Functions, Backpropagation is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Neural Networks Basics — Perceptron, Activation Functions, Backpropagation."
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
        children: "Neural Networks Basics — Perceptron, Activation Functions, Backpropagation emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Neural Networks Basics — Perceptron, Activation Functions, Backpropagation today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Neural Networks Basics — Perceptron, Activation Functions, Backpropagation — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Neural Networks Basics — Perceptron, Activation Functions, Backpropagation changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Neural Networks Basics — Perceptron, Activation Functions, Backpropagation."
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
        children: "Neural Networks Basics — Perceptron, Activation Functions, Backpropagation appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Neural Networks Basics — Perceptron, Activation Functions, Backpropagation helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Neural Networks Basics — Perceptron, Activation Functions, Backpropagation concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Neural Networks Basics — Perceptron, Activation Functions, Backpropagation skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Neural Networks Basics — Perceptron, Activation Functions, Backpropagation to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Neural Networks Basics — Perceptron, Activation Functions, Backpropagation is like a recipe"
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
        }), " — this chapter contributes the Neural Networks Basics — Perceptron, Activation Functions, Backpropagation skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "09deeplearningpytorch-01neuralnetworksbasics-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which activation function is most commonly used in hidden layers?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) ReLU"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "09deeplearningpytorch-01neuralnetworksbasics-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What problem can a single perceptron NOT solve?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) XOR"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "09deeplearningpytorch-01neuralnetworksbasics-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How does PyTorch compute gradients automatically?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) Automatic differentiation (autograd)"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "09deeplearningpytorch-01neuralnetworksbasics-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which initialization is best for ReLU networks?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) He normal"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "09deeplearningpytorch-01neuralnetworksbasics-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What loss function is appropriate for binary classification?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Binary cross-entropy"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Neural Networks Basics — Perceptron, Activation Functions, Backpropagation (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Neural Networks Basics — Perceptron, Activation Functions, Backpropagation (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Neural Networks Basics — Perceptron, Activation Functions, Backpropagation-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Neural Networks Basics — Perceptron, Activation Functions, Backpropagation in production at scale"
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
        children: "Testing: pytest for unit tests of Neural Networks Basics — Perceptron, Activation Functions, Backpropagation code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Neural Networks Basics — Perceptron, Activation Functions, Backpropagation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Neural Networks Basics — Perceptron, Activation Functions, Backpropagation code."]
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
        }), " or your IDE's debugger to step through the Neural Networks Basics — Perceptron, Activation Functions, Backpropagation example code."]
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
        children: "Explain Neural Networks Basics — Perceptron, Activation Functions, Backpropagation in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Neural Networks Basics — Perceptron, Activation Functions, Backpropagation."
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
        children: "Tell me about a time you debugged a Neural Networks Basics — Perceptron, Activation Functions, Backpropagation problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Neural Networks Basics — Perceptron, Activation Functions, Backpropagation is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Neural Networks Basics — Perceptron, Activation Functions, Backpropagation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Neural Networks Basics — Perceptron, Activation Functions, Backpropagation logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Neural Networks Basics — Perceptron, Activation Functions, Backpropagation without notes"
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
        }), ": a small team uses Neural Networks Basics — Perceptron, Activation Functions, Backpropagation daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Neural Networks Basics — Perceptron, Activation Functions, Backpropagation patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Neural Networks Basics — Perceptron, Activation Functions, Backpropagation principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Neural Networks Basics — Perceptron, Activation Functions, Backpropagation shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Neural Networks Basics — Perceptron, Activation Functions, Backpropagation to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/09-deep-learning-pytorch/02-pytorch-tensors",
        children: "PyTorch Tensors — Tensors, Autograd, Device Management, Broadcasting"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Neural Networks Basics — Perceptron, Activation Functions, Backpropagation, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Neural Networks Basics — Perceptron, Activation Functions, Backpropagation depends on input size and distribution — always benchmark for your own data."
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