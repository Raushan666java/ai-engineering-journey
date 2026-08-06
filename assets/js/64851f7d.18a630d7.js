"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[62084],{

/***/ 12077
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_08_machine_learning_05_svm_and_kernel_methods_md_648_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-08-machine-learning-05-svm-and-kernel-methods-md-648.json
const site_docs_courses_ai_engineering_placement_08_machine_learning_05_svm_and_kernel_methods_md_648_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/machine-learning/05-svm-and-kernel-methods","title":"SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/08-machine-learning/05-svm-and-kernel-methods.md","sourceDirName":"courses/ai-engineering-placement/08-machine-learning","slug":"/ai-engineering-placement/08-machine-learning/05-svm-and-kernel-methods","permalink":"/ai-engineering-journey/ai-engineering-placement/08-machine-learning/05-svm-and-kernel-methods","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":107,"frontMatter":{"id":"05-svm-and-kernel-methods","slug":"/ai-engineering-placement/08-machine-learning/05-svm-and-kernel-methods","title":"SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin","sidebar_label":"SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin","sidebar_position":107},"sidebar":"coursesSidebar","previous":{"title":"Decision Trees & Random Forest — Entropy, Gini, Bagging","permalink":"/ai-engineering-journey/ai-engineering-placement/08-machine-learning/04-decision-trees-and-rf"},"next":{"title":"Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost","permalink":"/ai-engineering-journey/ai-engineering-placement/08-machine-learning/06-ensemble-methods"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/08-machine-learning/05-svm-and-kernel-methods.md


const frontMatter = {
	id: '05-svm-and-kernel-methods',
	slug: '/ai-engineering-placement/08-machine-learning/05-svm-and-kernel-methods',
	title: 'SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin',
	sidebar_label: 'SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin',
	sidebar_position: 107
};
const contentTitle = 'SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin';

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
  "value": "5.1 Maximum Margin Classifier",
  "id": "51-maximum-margin-classifier",
  "level": 2
}, {
  "value": "5.2 Primal &amp; Dual Formulation",
  "id": "52-primal--dual-formulation",
  "level": 2
}, {
  "value": "5.3 Kernel Trick",
  "id": "53-kernel-trick",
  "level": 2
}, {
  "value": "5.4 Soft Margin SVM",
  "id": "54-soft-margin-svm",
  "level": 2
}, {
  "value": "5.5 SMO Algorithm",
  "id": "55-smo-algorithm",
  "level": 2
}, {
  "value": "5.6 SVM in Practice",
  "id": "56-svm-in-practice",
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
        id: "svm--kernel-methods--margins-kernel-trick-soft-margin",
        children: "SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin"
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
            children: "Understand the maximum margin classifier and support vectors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Derive the SVM optimization objective: primal and dual forms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement the kernel trick: linear, polynomial, RBF, sigmoid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply soft margin SVM with C parameter for non-separable data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement SVM from scratch using quadratic programming"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tune SVM hyperparameters: C, gamma, kernel choice"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Machine learning is the core of AI engineering. From linear regression to ensemble methods, understanding these algorithms lets you build, debug, and improve models. This module covers the math and code behind ML."
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
      children: "Understanding svm and kernel methods is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how svm and kernel methods works in practice."
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
            children: "5.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum Margin Classifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hyperplane, margin, support vectors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primal & Dual Formulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lagrangian, KKT conditions, convex optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel Trick"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature maps, RBF, polynomial kernels, Mercer's theorem"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Soft Margin SVM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slack variables, C parameter, hinge loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMO Algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential minimal optimization, implementation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SVM in Practice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scaling, multiclass strategies, hyperparameter tuning"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Training Data] --> B{Linearly Separable?}\n    B -->|Yes| C[Hard Margin SVM]\n    B -->|No| D[Soft Margin SVM]\n    D --> E[Choose Kernel]\n    E --> F[Linear / Poly / RBF / Sigmoid]\n    C & F --> G[Dual Optimization]\n    G --> H[Support Vectors]\n    H --> I[Decision Boundary]\n    I --> J[Predict]\n    style C fill:#4a90d9,color:#fff\n    style D fill:#4a90d9,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "51-maximum-margin-classifier",
      children: "5.1 Maximum Margin Classifier"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SVM finds the hyperplane that maximally separates classes. The margin is the distance from the hyperplane to the nearest data points (support vectors)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hyperplane equation"
      }), ": w·x + b = 0"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Margin"
      }), ": 2 / ||w||"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Objective"
      }), ": Maximize margin = minimize ||w|| subject to yᵢ(w·xᵢ + b) ≥ 1"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\nfrom typing import List, Tuple, Dict, Optional, Callable\nfrom dataclasses import dataclass\n\n@dataclass\nclass SVMConfig:\n    C: float = 1.0\n    kernel: str = \"linear\"\n    degree: int = 3\n    gamma: float = 1.0\n    coef0: float = 0.0\n    tol: float = 1e-3\n    max_iter: int = 100\n\nclass SVMMargin:\n    def compute_margin(self, w: np.ndarray) -> float:\n        return 2.0 / np.linalg.norm(w)\n\n    def decision_function(self, X: np.ndarray, w: np.ndarray, b: float) -> np.ndarray:\n        return X @ w + b\n\n    def hinge_loss(self, X: np.ndarray, y: np.ndarray,\n                   w: np.ndarray, b: float) -> float:\n        scores = self.decision_function(X, w, b)\n        losses = np.maximum(0, 1 - y * scores)\n        return np.mean(losses) + 0.5 * np.dot(w, w)\n\ndef generate_toy_data(n_samples: int = 100, sep: float = 1.0):\n    np.random.seed(42)\n    X = np.random.randn(n_samples, 2)\n    y = np.sign(X[:, 0] * sep + X[:, 1] + np.random.randn(n_samples) * 0.1)\n    return X, y\n\nX_toy, y_toy = generate_toy_data()\nprint(f\"Data shape: {X_toy.shape}, classes: {np.unique(y_toy)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Support vectors"
      }), " are the data points that lie on the margin boundary. Only support vectors influence the decision boundary — other points can be moved without changing the boundary."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "52-primal--dual-formulation",
      children: "5.2 Primal & Dual Formulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The primal problem: minimize ½||w||² subject to yᵢ(w·xᵢ + b) ≥ 1."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Using Lagrange multipliers αᵢ ≥ 0, the dual problem becomes:\nmaximize Σαᵢ - ½ΣΣαᵢαⱼyᵢyⱼ(xᵢ·xⱼ) subject to Σαᵢyᵢ = 0, αᵢ ≥ 0."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SVMPrimalDual:\n    def __init__(self, config: SVMConfig = SVMConfig()):\n        self.config = config\n        self.alpha: Optional[np.ndarray] = None\n        self.w: Optional[np.ndarray] = None\n        self.b: float = 0.0\n        self.support_vectors: np.ndarray = None\n        self.support_labels: np.ndarray = None\n\n    def _primal_objective(self, w: np.ndarray, b: float,\n                          X: np.ndarray, y: np.ndarray) -> float:\n        regularization = 0.5 * np.dot(w, w)\n        hinge = np.sum(np.maximum(0, 1 - y * (X @ w + b)))\n        return regularization + self.config.C * hinge\n\n    def _dual_objective(self, alpha: np.ndarray,\n                        K: np.ndarray, y: np.ndarray) -> float:\n        return np.sum(alpha) - 0.5 * np.sum(\n            (alpha[:, None] * y[:, None]) * (alpha[None, :] * y[None, :]) * K\n        )\n\n    def fit_simple(self, X: np.ndarray, y: np.ndarray) -> Dict:\n        \"\"\"Simple gradient-based SVM for linear case\"\"\"\n        n, p = X.shape\n        w = np.zeros(p)\n        b = 0.0\n        lr = 0.01\n\n        for _ in range(self.config.max_iter):\n            scores = X @ w + b\n            margins = y * scores\n            # Sub-gradient of hinge loss\n            misclassified = margins < 1\n            grad_w = w - self.config.C * (X[misclassified] * y[misclassified, None]).sum(axis=0)\n            grad_b = -self.config.C * y[misclassified].sum()\n\n            w -= lr * grad_w / n\n            b -= lr * grad_b / n\n\n        self.w = w\n        self.b = b\n        return {\"w\": w, \"b\": b, \"objective\": self._primal_objective(w, b, X, y)}\n\nsvm_linear = SVMPrimalDual()\nresult = svm_linear.fit_simple(X_toy, y_toy)\nprint(f\"Primal objective: {result['objective']:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "KKT conditions"
      }), ": αᵢ = 0 for correctly classified points far from boundary; 0 < αᵢ < C for support vectors on margin; αᵢ = C for points inside margin (slack)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "53-kernel-trick",
      children: "5.3 Kernel Trick"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The kernel trick computes dot products in a high-dimensional feature space without explicitly transforming the data:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "K(xᵢ, xⱼ) = φ(xᵢ)·φ(xⱼ)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class KernelFunctions:\n    @staticmethod\n    def linear() -> Callable:\n        return lambda x, y: np.dot(x, y)\n\n    @staticmethod\n    def polynomial(degree: int = 3, coef0: float = 1.0) -> Callable:\n        return lambda x, y: (np.dot(x, y) + coef0) ** degree\n\n    @staticmethod\n    def rbf(gamma: float = 1.0) -> Callable:\n        return lambda x, y: np.exp(-gamma * np.linalg.norm(x - y) ** 2)\n\n    @staticmethod\n    def sigmoid(gamma: float = 1.0, coef0: float = 0.0) -> Callable:\n        return lambda x, y: np.tanh(gamma * np.dot(x, y) + coef0)\n\n    def compute_kernel_matrix(self, X: np.ndarray,\n                              kernel: str = \"rbf\", **params) -> np.ndarray:\n        if kernel == \"linear\":\n            K = X @ X.T\n        elif kernel == \"rbf\":\n            gamma = params.get(\"gamma\", 1.0)\n            sq_dists = np.sum(X ** 2, axis=1)[:, None] + np.sum(X ** 2, axis=1)[None, :] - 2 * X @ X.T\n            K = np.exp(-gamma * np.clip(sq_dists, 0, None))\n        elif kernel == \"poly\":\n            degree = params.get(\"degree\", 3)\n            coef0 = params.get(\"coef0\", 1.0)\n            K = (X @ X.T + coef0) ** degree\n        else:\n            raise ValueError(f\"Unknown kernel: {kernel}\")\n        return K\n\n    def visualize_kernel_mapping(self, X: np.ndarray) -> Dict:\n        \"\"\"Show kernel matrix statistics for different kernels\"\"\"\n        results = {}\n        for kernel in [\"linear\", \"rbf\", \"poly\"]:\n            K = self.compute_kernel_matrix(X, kernel=kernel, gamma=0.5, degree=3)\n            results[kernel] = {\n                \"min\": float(np.min(K)),\n                \"max\": float(np.max(K)),\n                \"mean\": float(np.mean(K)),\n                \"rank\": int(np.linalg.matrix_rank(K, tol=1e-5)),\n            }\n        return results\n\nkf = KernelFunctions()\nresults = kf.visualize_kernel_mapping(X_toy)\nfor kernel, stats in results.items():\n    print(f\"{kernel}: {stats}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mercer's theorem"
      }), ": A kernel function is valid if its kernel matrix is positive semi-definite for any set of inputs."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Formula"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hyperparameters"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x·y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linearly separable data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Polynomial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(x·y + c)^d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "d, c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mild non-linearity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RBF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "exp(-γ"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "x-y"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sigmoid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tanh(γx·y + c)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "γ, c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Neural network-like"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "54-soft-margin-svm",
      children: "5.4 Soft Margin SVM"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Real-world data is rarely perfectly separable. Soft margin SVM introduces slack variables ξᵢ to allow misclassifications:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "minimize ½||w||² + CΣξᵢ\nsubject to yᵢ(w·xᵢ + b) ≥ 1 - ξᵢ, ξᵢ ≥ 0"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SoftMarginSVM:\n    def __init__(self, config: SVMConfig = SVMConfig()):\n        self.config = config\n        self.alpha: np.ndarray = None\n        self.b: float = 0.0\n        self.support_vectors: np.ndarray = None\n        self.support_labels: np.ndarray = None\n        self.support_alphas: np.ndarray = None\n\n    def _compute_kernel(self, X1: np.ndarray, X2: np.ndarray) -> np.ndarray:\n        if self.config.kernel == \"linear\":\n            return X1 @ X2.T\n        elif self.config.kernel == \"rbf\":\n            sq_dists = np.sum(X1 ** 2, axis=1)[:, None] + np.sum(X2 ** 2, axis=1)[None, :] - 2 * X1 @ X2.T\n            return np.exp(-self.config.gamma * np.clip(sq_dists, 0, None))\n        elif self.config.kernel == \"poly\":\n            return (X1 @ X2.T + self.config.coef0) ** self.config.degree\n        else:\n            raise ValueError(f\"Unknown kernel: {self.config.kernel}\")\n\n    def fit(self, X: np.ndarray, y: np.ndarray) -> Dict:\n        n = X.shape[0]\n        K = self._compute_kernel(X, X)\n\n        # Simple SMO-like implementation\n        alpha = np.zeros(n)\n        b = 0.0\n\n        for _ in range(self.config.max_iter):\n            num_changed = 0\n            for i in range(n):\n                Ei = np.sum(alpha * y * K[:, i]) + b - y[i]\n                if ((y[i] * Ei < -self.config.tol and alpha[i] < self.config.C)\n                        or (y[i] * Ei > self.config.tol and alpha[i] > 0)):\n                    # Pick random j\n                    j = np.random.choice([x for x in range(n) if x != i])\n                    Ej = np.sum(alpha * y * K[:, j]) + b - y[j]\n\n                    alpha_i_old, alpha_j_old = alpha[i], alpha[j]\n\n                    # Compute bounds\n                    if y[i] != y[j]:\n                        L = max(0, alpha[j] - alpha[i])\n                        H = min(self.config.C, self.config.C + alpha[j] - alpha[i])\n                    else:\n                        L = max(0, alpha[i] + alpha[j] - self.config.C)\n                        H = min(self.config.C, alpha[i] + alpha[j])\n\n                    if L == H:\n                        continue\n\n                    eta = 2 * K[i, j] - K[i, i] - K[j, j]\n                    if eta >= 0:\n                        continue\n\n                    alpha[j] -= y[j] * (Ei - Ej) / eta\n                    alpha[j] = np.clip(alpha[j], L, H)\n\n                    if abs(alpha[j] - alpha_j_old) < 1e-5:\n                        continue\n\n                    alpha[i] += y[i] * y[j] * (alpha_j_old - alpha[j])\n\n                    # Update bias\n                    b1 = b - Ei - y[i] * (alpha[i] - alpha_i_old) * K[i, i] - y[j] * (alpha[j] - alpha_j_old) * K[i, j]\n                    b2 = b - Ej - y[i] * (alpha[i] - alpha_i_old) * K[i, j] - y[j] * (alpha[j] - alpha_j_old) * K[j, j]\n\n                    if 0 < alpha[i] < self.config.C:\n                        b = b1\n                    elif 0 < alpha[j] < self.config.C:\n                        b = b2\n                    else:\n                        b = (b1 + b2) / 2\n\n                    num_changed += 1\n\n            if num_changed == 0:\n                break\n\n        self.alpha = alpha\n        self.b = b\n        sv_mask = alpha > 1e-5\n        self.support_vectors = X[sv_mask]\n        self.support_labels = y[sv_mask]\n        self.support_alphas = alpha[sv_mask]\n\n        return {\"n_support_vectors\": np.sum(sv_mask), \"iterations\": _, \"b\": b}\n\n    def decision_function(self, X: np.ndarray) -> np.ndarray:\n        K = self._compute_kernel(X, self.support_vectors)\n        return (self.support_alphas * self.support_labels) @ K.T + self.b\n\n    def predict(self, X: np.ndarray) -> np.ndarray:\n        return np.sign(self.decision_function(X))\n\n## Test with toy data\nsvm = SoftMarginSVM(SVMConfig(C=1.0, kernel=\"rbf\", gamma=0.5))\nresult = svm.fit(X_toy, y_toy)\npreds = svm.predict(X_toy)\nprint(f\"Support vectors: {result['n_support_vectors']}, \"\n      f\"Accuracy: {np.mean(preds == y_toy):.3f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "C parameter"
      }), ": Small C = large margin, allows more misclassifications (high bias, low variance). Large C = narrow margin, fewer misclassifications (low bias, high variance)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "55-smo-algorithm",
      children: "5.5 SMO Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sequential Minimal Optimization (SMO) breaks the large QP problem into a series of smallest possible sub-problems (2 alphas at a time)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SMO:\n    def __init__(self, config: SVMConfig = SVMConfig()):\n        self.config = config\n        self.alpha: np.ndarray = None\n        self.b: float = 0.0\n\n    def fit(self, X: np.ndarray, y: np.ndarray) -> Dict:\n        n = X.shape[0]\n        K = self._kernel_matrix(X)\n        alpha = np.zeros(n)\n        b = 0.0\n        passes_without_change = 0\n\n        while passes_without_change < self.config.max_iter:\n            num_changed = 0\n            for i in range(n):\n                Ei = np.sum(alpha * y * K[:, i]) + b - y[i]\n                if self._violates_kkt(alpha[i], y[i], Ei):\n                    j = self._select_second(i, n)\n                    Ej = np.sum(alpha * y * K[:, j]) + b - y[j]\n\n                    alpha_i_old, alpha_j_old = alpha[i], alpha[j]\n                    L, H = self._compute_bounds(alpha[i], alpha[j], y[i], y[j])\n\n                    if L == H:\n                        continue\n\n                    eta = 2 * K[i, j] - K[i, i] - K[j, j]\n                    if eta >= 0:\n                        continue\n\n                    alpha[j] -= y[j] * (Ei - Ej) / eta\n                    alpha[j] = np.clip(alpha[j], L, H)\n\n                    if abs(alpha[j] - alpha_j_old) < 1e-5:\n                        continue\n\n                    alpha[i] += y[i] * y[j] * (alpha_j_old - alpha[j])\n                    b = self._update_bias(b, Ei, Ej, alpha[i], alpha_j_old,\n                                          alpha_j_old, K[i, i], K[i, j], K[j, j], y[i], y[j])\n                    num_changed += 1\n\n            passes_without_change = passes_without_change + 1 if num_changed == 0 else 0\n\n        self.alpha = alpha\n        return {\"n_support_vectors\": np.sum(alpha > 1e-5), \"b\": b}\n\n    def _kernel_matrix(self, X: np.ndarray) -> np.ndarray:\n        if self.config.kernel == \"linear\":\n            return X @ X.T\n        sq_dists = np.sum(X ** 2, axis=1)[:, None] + np.sum(X ** 2, axis=1)[None, :] - 2 * X @ X.T\n        return np.exp(-self.config.gamma * np.clip(sq_dists, 0, None))\n\n    def _violates_kkt(self, alpha_i: float, yi: float, Ei: float) -> bool:\n        return ((yi * Ei < -self.config.tol and alpha_i < self.config.C)\n                or (yi * Ei > self.config.tol and alpha_i > 0))\n\n    def _select_second(self, i: int, n: int) -> int:\n        j = np.random.randint(n)\n        while j == i:\n            j = np.random.randint(n)\n        return j\n\n    def _compute_bounds(self, alpha_i: float, alpha_j: float,\n                        yi: float, yj: float) -> Tuple[float, float]:\n        C = self.config.C\n        if yi != yj:\n            return max(0, alpha_j - alpha_i), min(C, C + alpha_j - alpha_i)\n        return max(0, alpha_i + alpha_j - C), min(C, alpha_i + alpha_j)\n\n    def _update_bias(self, b: float, Ei: float, Ej: float,\n                     alpha_i: float, alpha_j: float,\n                     alpha_j_old: float, Kii: float, Kij: float,\n                     Kjj: float, yi: float, yj: float) -> float:\n        b1 = b - Ei - yi * (alpha_i - alpha_i) * Kii - yj * (alpha_j - alpha_j_old) * Kij\n        b2 = b - Ej - yi * (alpha_i - alpha_i) * Kij - yj * (alpha_j - alpha_j_old) * Kjj\n        if 0 < alpha_i < self.config.C:\n            return b1\n        if 0 < alpha_j < self.config.C:\n            return b2\n        return (b1 + b2) / 2\n\nsmo = SMO(SVMConfig(C=1.0, kernel=\"rbf\", gamma=0.5))\nsmo_result = smo.fit(X_toy, y_toy)\nprint(f\"SMO support vectors: {smo_result['n_support_vectors']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "56-svm-in-practice",
      children: "5.6 SVM in Practice"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Feature scaling"
      }), ": SVM is highly sensitive to feature scales. Always standardize features before training."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Multiclass strategies"
      }), ": One-vs-One (OvO) trains K(K-1)/2 classifiers; One-vs-Rest (OvR) trains K classifiers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MulticlassSVM:\n    def __init__(self, config: SVMConfig = SVMConfig()):\n        self.config = config\n        self.models: Dict[int, SoftMarginSVM] = {}\n\n    def fit_ovo(self, X: np.ndarray, y: np.ndarray) -> None:\n        classes = np.unique(y)\n        for i, c1 in enumerate(classes):\n            for c2 in classes[i + 1:]:\n                mask = (y == c1) | (y == c2)\n                X_pair = X[mask]\n                y_pair = np.where(y[mask] == c1, 1, -1)\n                model = SoftMarginSVM(self.config)\n                model.fit(X_pair, y_pair)\n                self.models[(c1, c2)] = model\n\n    def predict_ovo(self, X: np.ndarray) -> np.ndarray:\n        votes = np.zeros((X.shape[0], len(set(k[0] for k in self.models))))\n        for (c1, c2), model in self.models.items():\n            preds = model.predict(X)\n            for i, p in enumerate(preds):\n                votes[i, c1 if p == 1 else c2] += 1\n        return np.argmax(votes, axis=1)\n\n## Hyperparameter tuning guide\ndef tune_svm(X_train: np.ndarray, y_train: np.ndarray,\n             X_val: np.ndarray, y_val: np.ndarray) -> Dict:\n    best_score = 0\n    best_params = {}\n\n    for C in [0.1, 1.0, 10.0]:\n        for gamma in [0.01, 0.1, 1.0]:\n            for kernel in [\"linear\", \"rbf\"]:\n                config = SVMConfig(C=C, kernel=kernel, gamma=gamma)\n                model = SoftMarginSVM(config)\n                model.fit(X_train, y_train)\n                score = np.mean(model.predict(X_val) == y_val)\n                if score > best_score:\n                    best_score = score\n                    best_params = {\"C\": C, \"gamma\": gamma, \"kernel\": kernel}\n\n    return {\"best_params\": best_params, \"best_score\": best_score}\n\n## Standardization is essential for SVM\ndef standardize(X_train: np.ndarray, X_test: np.ndarray) -> Tuple[np.ndarray, np.ndarray]:\n    mean = np.mean(X_train, axis=0)\n    std = np.std(X_train, axis=0)\n    return (X_train - mean) / std, (X_test - mean) / std\n\n## Generate and scale data\nX_scaled, _ = standardize(X_toy, X_toy)\nsvm_tuned = SoftMarginSVM(SVMConfig(C=10.0, kernel=\"rbf\", gamma=0.5))\nsvm_tuned.fit(X_scaled, y_toy)\nprint(f\"Tuned SVM accuracy: {np.mean(svm_tuned.predict(X_scaled) == y_toy):.3f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SVM vs other algorithms"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SVM"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Random Forest"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Neural Network"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interpretability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (support vectors)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (feature importance)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (black box)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²) to O(n³)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n) per tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) per epoch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Feature scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Non-linearity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel trick"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Activation functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High-dim data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface SVMConfig {\n  C: number;\n  kernel: \"linear\" | \"rbf\" | \"poly\";\n  gamma: number;\n  degree: number;\n}\n\nclass Kernel {\n  static linear(a: number[], b: number[]): number {\n    return a.reduce((s, ai, i) => s + ai * b[i], 0);\n  }\n  static rbf(a: number[], b: number[], gamma: number): number {\n    const dist = Math.sqrt(a.reduce((s, ai, i) => s + (ai - b[i]) ** 2, 0));\n    return Math.exp(-gamma * dist * dist);\n  }\n  static poly(a: number[], b: number[], degree: number): number {\n    return Math.pow(Kernel.linear(a, b) + 1, degree);\n  }\n}\n\nclass SVM {\n  private alpha: number[] = [];\n  private b = 0;\n  private sv: number[][] = [];\n  private svLabels: number[] = [];\n  private svAlpha: number[] = [];\n\n  fit(X: number[][], y: number[], config: SVMConfig): void {\n    const n = X.length;\n    const K = this.kernelMatrix(X, config);\n    let alpha = new Array(n).fill(0);\n    let b = 0;\n    // Simplified SMO training (omitted for brevity)\n    this.alpha = alpha;\n    this.b = b;\n    this.sv = X.filter((_, i) => alpha[i] > 1e-5);\n    this.svLabels = y.filter((_, i) => alpha[i] > 1e-5);\n    this.svAlpha = alpha.filter((a) => a > 1e-5);\n  }\n\n  private kernelMatrix(X: number[][], config: SVMConfig): number[][] {\n    return X.map((row) =>\n      X.map((row2) => {\n        if (config.kernel === \"linear\") return Kernel.linear(row, row2);\n        if (config.kernel === \"rbf\") return Kernel.rbf(row, row2, config.gamma);\n        return Kernel.poly(row, row2, config.degree);\n      })\n    );\n  }\n\n  predict(X: number[][]): number[] {\n    return X.map((x) => {\n      let score = this.b;\n      for (let i = 0; i < this.sv.length; i++) {\n        const k = Kernel.rbf(x, this.sv[i], 1.0);\n        score += this.svAlpha[i] * this.svLabels[i] * k;\n      }\n      return Math.sign(score);\n    });\n  }\n}\n\nconst svm = new SVM();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SVM finds the hyperplane with maximum margin between classes; only support vectors determine the boundary"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The dual formulation expresses SVM in terms of dot products, enabling the kernel trick"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kernel functions (RBF, polynomial, linear) map data to high-dimensional feature spaces without explicit transformation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Soft margin SVM uses slack variables and the C parameter to handle non-separable data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C controls the trade-off: small C = larger margin (higher bias), large C = fewer errors (higher variance)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SVM requires feature scaling — always standardize before training"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SMO efficiently solves the SVM quadratic programming problem by optimizing two alphas at a time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiclass SVM uses OvO or OvR strategies; OvO is more common (doesn't need well-calibrated probabilities)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RBF kernel is the default choice; tune gamma and C via cross-validation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SVM excels in high-dimensional spaces and when classes are clearly separated"
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
            children: "Feature scales differ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standardize features"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Using raw unscaled data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Non-linear boundary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RBF kernel with tuned gamma"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear kernel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Large dataset (n > 100K)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear SVM or switch to random forest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RBF kernel (O(n²) memory)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High-dimensional features"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear SVM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RBF kernel (overfitting)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Imbalanced data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class weights or balanced C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default C=1 for all classes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-q1",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q1: What is the kernel trick and why is it important for SVM?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "The kernel trick computes dot products in a high-dimensional feature space without explicitly transforming the data. K(xᵢ, xⱼ) = φ(xᵢ)·φ(xⱼ). This is important because SVM's optimization only depends on dot products. The kernel trick lets SVM learn non-linear decision boundaries with no additional computational cost — the complexity depends on the number of support vectors, not the feature space dimension."
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
      "data-qid": "ml08-q2",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q2: Explain the C parameter in soft margin SVM."]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "C controls the trade-off between maximizing the margin and minimizing training errors. Large C: penalizes misclassifications heavily, narrow margin, low bias, may overfit. Small C: allows more misclassifications, wide margin, high bias, more regularization. C is inversely related to the regularization strength — analogous to 1/λ in ridge regression. In practice, tune C via cross-validation over logarithmic scale (0.01, 0.1, 1, 10, 100)."
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
      "data-qid": "ml08-q3",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q3: What are support vectors and why are they important?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Support vectors are the training points that lie on the margin boundary or inside the margin. They are the only points that determine the decision boundary — removing any non-support vector doesn't change the model. This makes SVM memory-efficient (only support vectors need to be stored for prediction). The number of support vectors typically grows with dataset complexity and with the C parameter."
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
      "data-qid": "ml08-q4",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q4: How does the RBF kernel gamma parameter affect SVM?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Gamma (γ) controls the influence radius of each support vector. Small gamma (e.g., 0.01): wide influence, smoother decision boundary, higher bias (may underfit). Large gamma (e.g., 10): narrow influence, complex boundary, higher variance (may overfit). Gamma determines the RBF width: K(x, y) = exp(-γ||x-y||²). Rule of thumb: gamma = 1 / (n_features * X.var()) or tune via cross-validation over [0.001, 0.01, 0.1, 1, 10]."
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
      "data-qid": "ml08-q5",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q5: What is the difference between hard margin and soft margin SVM?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Hard margin SVM assumes perfectly separable data and requires yᵢ(w·xᵢ + b) ≥ 1 for all points. It has no tolerance for misclassifications. Soft margin SVM introduces slack variables ξᵢ and the C parameter, allowing yᵢ(w·xᵢ + b) ≥ 1 - ξᵢ. This handles non-separable data and outliers. Hard margin is rarely used in practice because real data is never perfectly separable. Soft margin with C=infinity is equivalent to hard margin."
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
      "data-qid": "ml08-q6",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q6: Why does SVM need feature scaling?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "SVM is sensitive to feature scales because the margin is computed using Euclidean distance. If one feature has large values and another has small values, the large-scale feature will dominate the margin calculation. For RBF kernel, the exponential distance ||x-y||² is affected by scale. For linear kernel, regularization affects large-scale features more. Always standardize (z-score) or normalize (min-max) features before SVM training."
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
      "data-qid": "ml08-q7",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q7: How does SVM handle multiclass classification?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["SVM is inherently binary. Two common strategies: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "One-vs-One (OvO)"
          }), ": Train K(K-1)/2 binary classifiers (one for each pair), vote for prediction. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "One-vs-Rest (OvR)"
          }), ": Train K binary classifiers (one vs all others), pick the class with highest confidence. OvO is more common for SVM because: 1) SVM training is super-linear, so smaller datasets train faster. 2) OvO usually produces better accuracy. 3) LibSVM (popular SVM library) uses OvO by default."]
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
      "data-qid": "ml08-q8",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q8: What is the hinge loss function?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Hinge loss: max(0, 1 - y·f(x)) where f(x) = w·x + b. It penalizes points that are misclassified or within the margin. If y·f(x) ≥ 1 (correctly classified with enough margin), loss = 0. If 0 < y·f(x) < 1 (correct but inside margin), loss decreases linearly. If y·f(x) < 0 (misclassified), loss increases linearly. The total SVM objective = ½||w||² + C·Σhinge(yᵢ·f(xᵢ))."
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
      "data-qid": "ml08-q9",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q9: What are the KKT conditions for SVM?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["KKT (Karush-Kuhn-Tucker) conditions for SVM: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Primal feasibility"
          }), ": yᵢ(w·xᵢ + b) ≥ 1 - ξᵢ, ξᵢ ≥ 0. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Dual feasibility"
          }), ": αᵢ ≥ 0, βᵢ ≥ 0 (where βᵢ are Lagrange multipliers for ξᵢ ≥ 0). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Complementary slackness"
          }), ": αᵢ(yᵢ(w·xᵢ + b) - 1 + ξᵢ) = 0 and βᵢξᵢ = 0. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Stationarity"
          }), ": w = Σαᵢyᵢxᵢ, 0 = Σαᵢyᵢ. These conditions define which points become support vectors."]
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
      "data-qid": "ml08-q10",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q10: When would you choose SVM over neural networks?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Choose SVM when: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1)"
          }), " Dataset is small to medium (n < 10,000). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2)"
          }), " Features are high-dimensional (text, genomics). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3)"
          }), " Interpretability matters (support vectors reveal key examples). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4)"
          }), " Need strong theoretical guarantees (convex optimization, global optimum). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5)"
          }), " Training resources are limited (SVM can converge faster than deep learning). Choose neural networks for large datasets, images, audio, text, and when you need state-of-the-art accuracy."]
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
      }), ": What is the decision boundary of a linear SVM?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) A curve determined by support vectors\nb) A hyperplane maximizing the margin\nc) A probabilistic threshold\nd) A tree-based partition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) A hyperplane maximizing the margin"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "SVM finds the hyperplane that maximizes the distance to the nearest points of each class."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": What does the C parameter in SVM control?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Kernel width\nb) Margin vs error trade-off\nc) Learning rate\nd) Number of support vectors"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Margin vs error trade-off"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Large C = narrow margin (fewer errors), small C = wide margin (more errors tolerated)."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": Which kernel function is defined as K(x,y) = exp(-γ||x-y||²)?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Linear\nb) Polynomial\nc) RBF\nd) Sigmoid"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) RBF"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "The Radial Basis Function kernel uses the Gaussian exponential of the squared distance."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": How many binary classifiers does OvO train for K classes?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) K\nb) K-1\nc) K(K-1)/2\nd) 2^K"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) K(K-1)/2"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "OvO trains one classifier for every pair of classes: K choose 2 = K(K-1)/2."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": What does a large gamma value in RBF kernel cause?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Simpler decision boundary\nb) More complex, potentially overfit boundary\nc) No effect\nd) Linear decision boundary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) More complex, potentially overfit boundary"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Large gamma means each support vector has narrow influence, creating a complex boundary that may overfit."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Implement a linear SVM using gradient descent on the hinge loss. Train on a simple 2D dataset and visualize the decision boundary."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Compute the RBF kernel matrix for 10 random points with gamma=0.5. Verify the matrix is positive semi-definite."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Implement OvO multiclass SVM for 3 classes. Train on the Iris dataset and report accuracy."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Build a grid search for SVM hyperparameters (C, gamma, kernel) with 5-fold cross-validation. Report the best parameters and test accuracy."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Implement SMO from scratch. Compare convergence speed with full QP optimization on datasets of increasing size (n=100, 500, 1000)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not practicing enough problems to build pattern recognition"
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
            children: "Explain the core idea of SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin."
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
            children: "Describe a production bug caused by misunderstanding SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin from 10 users to 10 million?"
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
            children: "Compare SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin."
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
            children: "How does SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin in production today?"
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
        }), " SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin on an empty input?"
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
            children: "Complete Medium exercises, explain SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin to someone else"
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
        children: "Always write a one-line example of SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin."
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
        children: "SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin."
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
        children: "SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin is like a recipe"
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
        }), " — this chapter contributes the SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-05svmandkernelmethods-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the decision boundary of a linear SVM?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) A hyperplane maximizing the margin"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-05svmandkernelmethods-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What does the C parameter in SVM control?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Margin vs error trade-off"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-05svmandkernelmethods-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which kernel function is defined as K(x,y) = exp(-γ||x-y||²)?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) RBF"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-05svmandkernelmethods-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How many binary classifiers does OvO train for K classes?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) K(K-1)/2"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-05svmandkernelmethods-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What does a large gamma value in RBF kernel cause?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) More complex, potentially overfit boundary"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin in production at scale"
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
        children: "Testing: pytest for unit tests of SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin code."]
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
        }), " or your IDE's debugger to step through the SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin example code."]
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
        children: "Explain SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin."
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
        children: "Tell me about a time you debugged a SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin without notes"
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
        }), ": a small team uses SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/08-machine-learning/06-ensemble-methods",
        children: "Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin depends on input size and distribution — always benchmark for your own data."
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