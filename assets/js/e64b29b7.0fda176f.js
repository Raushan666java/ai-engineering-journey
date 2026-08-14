"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[2138],{

/***/ 44391
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_08_machine_learning_04_decision_trees_and_rf_md_e64_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-08-machine-learning-04-decision-trees-and-rf-md-e64.json
const site_docs_courses_ai_engineering_placement_08_machine_learning_04_decision_trees_and_rf_md_e64_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/machine-learning/04-decision-trees-and-rf","title":"Decision Trees & Random Forest — Entropy, Gini, Bagging","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/08-machine-learning/04-decision-trees-and-rf.md","sourceDirName":"courses/ai-engineering-placement/08-machine-learning","slug":"/ai-engineering-placement/08-machine-learning/04-decision-trees-and-rf","permalink":"/ai-engineering-journey/ai-engineering-placement/08-machine-learning/04-decision-trees-and-rf","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":113,"frontMatter":{"id":"04-decision-trees-and-rf","slug":"/ai-engineering-placement/08-machine-learning/04-decision-trees-and-rf","title":"Decision Trees & Random Forest — Entropy, Gini, Bagging","sidebar_label":"Decision Trees & Random Forest — Entropy, Gini, Bagging","sidebar_position":113},"sidebar":"placementSidebar","previous":{"title":"Logistic Regression  -  Sigmoid, Cross-Entropy, Multiclass","permalink":"/ai-engineering-journey/ai-engineering-placement/08-machine-learning/03-logistic-regression"},"next":{"title":"SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin","permalink":"/ai-engineering-journey/ai-engineering-placement/08-machine-learning/05-svm-and-kernel-methods"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/08-machine-learning/04-decision-trees-and-rf.md


const frontMatter = {
	id: '04-decision-trees-and-rf',
	slug: '/ai-engineering-placement/08-machine-learning/04-decision-trees-and-rf',
	title: 'Decision Trees & Random Forest — Entropy, Gini, Bagging',
	sidebar_label: 'Decision Trees & Random Forest — Entropy, Gini, Bagging',
	sidebar_position: 113
};
const contentTitle = 'Decision Trees & Random Forest — Entropy, Gini, Bagging';

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
  "value": "4.1 Entropy &amp; Information Gain",
  "id": "41-entropy--information-gain",
  "level": 2
}, {
  "value": "4.2 Gini Impurity",
  "id": "42-gini-impurity",
  "level": 2
}, {
  "value": "4.3 Decision Tree Implementation",
  "id": "43-decision-tree-implementation",
  "level": 2
}, {
  "value": "4.4 Pruning &amp; Overfitting",
  "id": "44-pruning--overfitting",
  "level": 2
}, {
  "value": "4.5 Bagging (Bootstrap Aggregating)",
  "id": "45-bagging-bootstrap-aggregating",
  "level": 2
}, {
  "value": "4.6 Random Forest",
  "id": "46-random-forest",
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
        id: "decision-trees--random-forest--entropy-gini-bagging",
        children: "Decision Trees & Random Forest — Entropy, Gini, Bagging"
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
            children: "Understand how decision trees split data using entropy and Gini impurity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement a decision tree classifier from scratch with pruning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain bagging (bootstrap aggregating) and how it reduces variance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build random forest with feature subsampling and out-of-bag evaluation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Analyze feature importance from tree-based models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diagnose overfitting in trees using depth, min_samples_split, and pruning"
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
      children: "Understanding decision trees and rf is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how decision trees and rf works in practice."
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
            children: "4.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entropy & Information Gain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measuring impurity, best split selection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gini Impurity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alternative to entropy, computational efficiency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decision Tree Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive partitioning, stopping criteria"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pruning & Overfitting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-pruning vs post-pruning, cost-complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bagging (Bootstrap Aggregating)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variance reduction, out-of-bag error"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random Forest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature subsampling, ensemble prediction"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Training Data] --> B{Bootstrap Sample 1}\n    A --> C{Bootstrap Sample 2}\n    A --> D{Bootstrap Sample K}\n    B --> E[Tree 1]\n    C --> F[Tree 2]\n    D --> G[Tree K]\n    E --> H[Vote / Average]\n    F --> H\n    G --> H\n    H --> I[Ensemble Prediction]\n    style E fill:#4a90d9,color:#fff\n    style F fill:#4a90d9,color:#fff\n    style G fill:#4a90d9,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "41-entropy--information-gain",
      children: "4.1 Entropy & Information Gain"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Entropy measures the impurity or uncertainty in a set of labels. For a binary classification with proportions p₁ and p₂:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "H(S) = -p₁ log₂(p₁) - p₂ log₂(p₂)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Information gain measures the reduction in entropy after splitting on a feature:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IG(S, f) = H(S) - Σ (|Sᵥ| / |S|) — H(Sᵥ)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\nfrom typing import List, Tuple, Dict, Optional, Any\n\nclass EntropyCalculator:\n    def entropy(self, y: np.ndarray) -> float:\n        _, counts = np.unique(y, return_counts=True)\n        probs = counts / len(y)\n        return -np.sum(probs * np.log2(probs + 1e-15))\n\n    def information_gain(self, X: np.ndarray, y: np.ndarray,\n                         feature_idx: int, threshold: float) -> float:\n        parent_entropy = self.entropy(y)\n        left_mask = X[:, feature_idx] <= threshold\n        right_mask = ~left_mask\n\n        n = len(y)\n        n_left, n_right = np.sum(left_mask), np.sum(right_mask)\n        if n_left == 0 or n_right == 0:\n            return 0.0\n\n        child_entropy = (n_left / n) * self.entropy(y[left_mask]) + (n_right / n) * self.entropy(y[right_mask])\n        return parent_entropy - child_entropy\n\n    def best_split(self, X: np.ndarray, y: np.ndarray) -> Dict:\n        best_gain = -1\n        best_feature = None\n        best_threshold = None\n\n        for feature_idx in range(X.shape[1]):\n            values = np.unique(X[:, feature_idx])\n            for i in range(len(values) - 1):\n                threshold = (values[i] + values[i + 1]) / 2\n                gain = self.information_gain(X, y, feature_idx, threshold)\n                if gain > best_gain:\n                    best_gain = gain\n                    best_feature = feature_idx\n                    best_threshold = threshold\n\n        return {\"feature\": best_feature, \"threshold\": best_threshold, \"gain\": best_gain}\n\ncalc = EntropyCalculator()\ny_sample = np.array([0, 0, 1, 1, 1, 1])\nprint(f\"Entropy: {calc.entropy(y_sample):.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Entropy range"
      }), ": H=0 (all same class) to H=1 (perfectly split binary). For K classes, max is log₂(K)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "42-gini-impurity",
      children: "4.2 Gini Impurity"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gini impurity is an alternative to entropy that is computationally cheaper:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "G(S) = 1 - Σ pᵢ²"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class GiniCalculator:\n    def gini(self, y: np.ndarray) -> float:\n        _, counts = np.unique(y, return_counts=True)\n        probs = counts / len(y)\n        return 1 - np.sum(probs ** 2)\n\n    def gini_gain(self, X: np.ndarray, y: np.ndarray,\n                  feature_idx: int, threshold: float) -> float:\n        parent_gini = self.gini(y)\n        left_mask = X[:, feature_idx] <= threshold\n        right_mask = ~left_mask\n\n        n = len(y)\n        n_left, n_right = np.sum(left_mask), np.sum(right_mask)\n        if n_left == 0 or n_right == 0:\n            return 0.0\n\n        child_gini = (n_left / n) * self.gini(y[left_mask]) + (n_right / n) * self.gini(y[right_mask])\n        return parent_gini - child_gini\n\ngini_calc = GiniCalculator()\nprint(f\"Gini: {gini_calc.gini(y_sample):.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Gini vs Entropy"
      }), ": Both produce similar trees. Gini is slightly faster (no log computation). Entropy is more theoretically grounded (information theory). In practice, the difference is negligible."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Entropy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gini"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, log₂(K)]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 1 - 1/K]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Computation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Squared operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theoretic basis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Information theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tree difference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly more balanced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly more skewed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "43-decision-tree-implementation",
      children: "4.3 Decision Tree Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DecisionTreeNode:\n    def __init__(self, feature: Optional[int] = None,\n                 threshold: Optional[float] = None,\n                 left: Optional['DecisionTreeNode'] = None,\n                 right: Optional['DecisionTreeNode'] = None,\n                 value: Optional[float] = None):\n        self.feature = feature\n        self.threshold = threshold\n        self.left = left\n        self.right = right\n        self.value = value  # prediction for leaf\n\nclass DecisionTreeClassifier:\n    def __init__(self, max_depth: int = 5, min_samples_split: int = 2,\n                 criterion: str = \"gini\"):\n        self.max_depth = max_depth\n        self.min_samples_split = min_samples_split\n        self.criterion = criterion\n        self.root: Optional[DecisionTreeNode] = None\n\n    def fit(self, X: np.ndarray, y: np.ndarray) -> None:\n        self.root = self._grow_tree(X, y, depth=0)\n\n    def _grow_tree(self, X: np.ndarray, y: np.ndarray,\n                   depth: int) -> DecisionTreeNode:\n        n_samples, n_features = X.shape\n        n_classes = len(np.unique(y))\n\n        # Stopping criteria\n        if (depth >= self.max_depth or n_samples < self.min_samples_split\n                or n_classes == 1):\n            return DecisionTreeNode(value=np.mean(y))\n\n        # Find best split\n        best_split = self._best_split(X, y)\n        if best_split[\"feature\"] is None:\n            return DecisionTreeNode(value=np.mean(y))\n\n        # Split data\n        left_mask = X[:, best_split[\"feature\"]] <= best_split[\"threshold\"]\n        right_mask = ~left_mask\n\n        left_node = self._grow_tree(X[left_mask], y[left_mask], depth + 1)\n        right_node = self._grow_tree(X[right_mask], y[right_mask], depth + 1)\n\n        return DecisionTreeNode(\n            feature=best_split[\"feature\"],\n            threshold=best_split[\"threshold\"],\n            left=left_node,\n            right=right_node,\n        )\n\n    def _best_split(self, X: np.ndarray, y: np.ndarray) -> Dict:\n        best_gain = -1\n        best_feature = None\n        best_threshold = None\n\n        for feature_idx in range(X.shape[1]):\n            values = np.unique(X[:, feature_idx])\n            for i in range(len(values) - 1):\n                threshold = (values[i] + values[i + 1]) / 2\n                gain = self._gain(y, X[:, feature_idx], threshold)\n                if gain > best_gain:\n                    best_gain = gain\n                    best_feature = feature_idx\n                    best_threshold = threshold\n\n        return {\"feature\": best_feature, \"threshold\": best_threshold, \"gain\": best_gain}\n\n    def _gain(self, y: np.ndarray, feature_values: np.ndarray,\n              threshold: float) -> float:\n        parent = self._impurity(y)\n        left_mask = feature_values <= threshold\n        right_mask = ~left_mask\n        n = len(y)\n        n_left, n_right = np.sum(left_mask), np.sum(right_mask)\n        if n_left == 0 or n_right == 0:\n            return 0.0\n        child = (n_left / n) * self._impurity(y[left_mask]) + (n_right / n) * self._impurity(y[right_mask])\n        return parent - child\n\n    def _impurity(self, y: np.ndarray) -> float:\n        _, counts = np.unique(y, return_counts=True)\n        probs = counts / len(y)\n        if self.criterion == \"gini\":\n            return 1 - np.sum(probs ** 2)\n        else:\n            return -np.sum(probs * np.log2(probs + 1e-15))\n\n    def predict(self, X: np.ndarray) -> np.ndarray:\n        return np.array([self._traverse(x, self.root) for x in X])\n\n    def _traverse(self, x: np.ndarray, node: DecisionTreeNode) -> float:\n        if node.value is not None:\n            return node.value\n        if x[node.feature] <= node.threshold:\n            return self._traverse(x, node.left)\n        return self._traverse(x, node.right)\n\n# Test decision tree\nfrom sklearn.datasets import make_classification\nX, y = make_classification(n_samples=200, n_features=5, random_state=42)\ndt = DecisionTreeClassifier(max_depth=4)\ndt.fit(X, y)\npreds = dt.predict(X)\nacc = np.mean(preds == y)\nprint(f\"Decision Tree accuracy: {acc:.3f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "44-pruning--overfitting",
      children: "4.4 Pruning & Overfitting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Decision trees are prone to overfitting — they can grow deep enough to memorize the training data."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pre-pruning"
      }), " (early stopping): Limit depth, min_samples_split, min_samples_leaf, or max_features."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Post-pruning"
      }), " (cost-complexity pruning): Grow full tree, then prune subtrees that don't improve validation performance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class CostComplexityPruner:\n    def __init__(self, ccp_alpha: float = 0.01):\n        self.ccp_alpha = ccp_alpha\n\n    def prune(self, tree: DecisionTreeClassifier, X_val: np.ndarray,\n              y_val: np.ndarray) -> DecisionTreeClassifier:\n        original_acc = np.mean(tree.predict(X_val) == y_val)\n        pruned_acc = self._prune_node(tree.root, X_val, y_val, tree)\n        return tree\n\n    def _prune_node(self, node: DecisionTreeNode, X_val: np.ndarray,\n                    y_val: np.ndarray, tree: DecisionTreeClassifier) -> bool:\n        if node.value is not None:\n            return False\n\n        # Try replacing subtree with leaf\n        leaf_pred = np.mean(y_val)\n        leaf_acc = np.mean(np.full(len(y_val), leaf_pred > 0.5) == y_val)\n        current_acc = np.mean(tree.predict(X_val) == y_val)\n\n        if leaf_acc >= current_acc - self.ccp_alpha:\n            node.feature = None\n            node.threshold = None\n            node.left = None\n            node.right = None\n            node.value = leaf_pred\n            return True\n\n        return False\n\ndef evaluate_depth(X_train, y_train, X_val, y_val, max_depths: List[int]) -> Dict:\n    results = {}\n    for depth in max_depths:\n        dt = DecisionTreeClassifier(max_depth=depth)\n        dt.fit(X_train, y_train)\n        train_acc = np.mean(dt.predict(X_train) == y_train)\n        val_acc = np.mean(dt.predict(X_val) == y_val)\n        results[depth] = {\"train_acc\": train_acc, \"val_acc\": val_acc}\n    return results\n\nX_train, y_train = X[:150], y[:150]\nX_val, y_val = X[150:], y[150:]\nresults = evaluate_depth(X_train, y_train, X_val, y_val, [2, 4, 6, 8, 10])\nfor depth, metrics in results.items():\n    print(f\"depth={depth}: train={metrics['train_acc']:.3f}, val={metrics['val_acc']:.3f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Overfitting signs"
      }), ": Training accuracy >> validation accuracy. Fix: reduce depth, increase min_samples_split, use pruning, or switch to random forest."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "45-bagging-bootstrap-aggregating",
      children: "4.5 Bagging (Bootstrap Aggregating)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bagging trains multiple models on bootstrap samples (sampling with replacement) and averages their predictions. This reduces variance without increasing bias."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class BaggingClassifier:\n    def __init__(self, base_estimator: Any, n_estimators: int = 10,\n                 max_samples: float = 1.0):\n        self.base_estimator = base_estimator\n        self.n_estimators = n_estimators\n        self.max_samples = max_samples\n        self.models: List[Any] = []\n        self.oob_scores: List[float] = []\n\n    def fit(self, X: np.ndarray, y: np.ndarray) -> None:\n        n = len(X)\n        n_samples = int(n * self.max_samples)\n        self.models = []\n        oob_predictions: Dict[int, List[float]] = {i: [] for i in range(n)}\n\n        for _ in range(self.n_estimators):\n            indices = np.random.choice(n, n_samples, replace=True)\n            oob_indices = np.setdiff1d(np.arange(n), indices)\n\n            model = self.base_estimator.__class__()\n            model.fit(X[indices], y[indices])\n            self.models.append(model)\n\n            # Out-of-bag evaluation\n            if len(oob_indices) > 0:\n                oob_pred = model.predict(X[oob_indices])\n                for idx, pred in zip(oob_indices, oob_pred):\n                    oob_predictions[idx].append(pred)\n\n        # Compute OOB score\n        correct = 0\n        total = 0\n        for i in range(n):\n            if oob_predictions[i]:\n                avg_pred = np.mean(oob_predictions[i])\n                correct += (avg_pred > 0.5) == y[i]\n                total += 1\n        self.oob_score_ = correct / total if total > 0 else 0\n\n    def predict(self, X: np.ndarray) -> np.ndarray:\n        predictions = np.array([model.predict(X) for model in self.models])\n        return (np.mean(predictions, axis=0) > 0.5).astype(int)\n\n## Test bagging\nbag = BaggingClassifier(DecisionTreeClassifier(max_depth=5), n_estimators=50)\nbag.fit(X_train, y_train)\nprint(f\"Bagging OOB score: {bag.oob_score_:.3f}\")\nprint(f\"Bagging test accuracy: {np.mean(bag.predict(X_val) == y_val):.3f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Out-of-bag (OOB) error"
      }), ": Each bootstrap sample leaves out ~37% of data. These out-of-bag samples serve as a built-in validation set, eliminating the need for a separate validation split."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Single Tree"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bagging"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (averaging reduces variance)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bias"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as single tree"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overfitting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduced"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interpretability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallelizable"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "46-random-forest",
      children: "4.6 Random Forest"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Random forest extends bagging by adding feature subsampling — at each split, only a random subset of features is considered. This decorrelates the trees."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RandomForestClassifier:\n    def __init__(self, n_estimators: int = 100, max_depth: int = 5,\n                 max_features: str = \"sqrt\", min_samples_split: int = 2):\n        self.n_estimators = n_estimators\n        self.max_depth = max_depth\n        self.max_features = max_features\n        self.min_samples_split = min_samples_split\n        self.trees: List[DecisionTreeClassifier] = []\n        self.feature_importances_: np.ndarray = None\n\n    def fit(self, X: np.ndarray, y: np.ndarray) -> None:\n        n_features = X.shape[1]\n        n_samples = X.shape[0]\n\n        if self.max_features == \"sqrt\":\n            n_sub_features = int(np.sqrt(n_features))\n        elif self.max_features == \"log2\":\n            n_sub_features = int(np.log2(n_features))\n        else:\n            n_sub_features = n_features\n\n        self.trees = []\n        feature_importance_sum = np.zeros(n_features)\n\n        for _ in range(self.n_estimators):\n            # Bootstrap sample\n            indices = np.random.choice(n_samples, n_samples, replace=True)\n            X_boot, y_boot = X[indices], y[indices]\n\n            # Feature subsampling\n            sub_features = np.random.choice(n_features, n_sub_features, replace=False)\n\n            # Train tree on subset\n            tree = DecisionTreeClassifier(\n                max_depth=self.max_depth,\n                min_samples_split=self.min_samples_split,\n            )\n            tree.fit(X_boot[:, sub_features], y_boot)\n            self.trees.append((sub_features, tree))\n\n        # Compute feature importances (approximate)\n        self.feature_importances_ = feature_importance_sum / self.n_estimators\n        self.feature_importances_ /= np.sum(self.feature_importances_)\n\n    def predict(self, X: np.ndarray) -> np.ndarray:\n        predictions = np.zeros((self.n_estimators, X.shape[0]))\n        for i, (sub_features, tree) in enumerate(self.trees):\n            predictions[i] = tree.predict(X[:, sub_features])\n        return (np.mean(predictions, axis=0) > 0.5).astype(int)\n\n    def predict_proba(self, X: np.ndarray) -> np.ndarray:\n        predictions = np.zeros((self.n_estimators, X.shape[0]))\n        for i, (sub_features, tree) in enumerate(self.trees):\n            predictions[i] = tree.predict(X[:, sub_features])\n        proba_class1 = np.mean(predictions, axis=0)\n        return np.column_stack([1 - proba_class1, proba_class1])\n\n## Test random forest\nrf = RandomForestClassifier(n_estimators=50, max_depth=5)\nrf.fit(X_train, y_train)\nrf_preds = rf.predict(X_val)\nprint(f\"Random Forest accuracy: {np.mean(rf_preds == y_val):.3f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Random Forest Hyperparameters"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Range"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "n_estimators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More trees = better generalization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100-1000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "max_depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controls tree complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-20"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "max_features"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature randomness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sqrt, log2, 0.3-0.7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "min_samples_split"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents overfitting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-20"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "min_samples_leaf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smooths predictions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-10"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages"
      }), ": Handles high-dimensional data, no scaling needed, robust to outliers, built-in feature importance, parallel training, OOB validation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Disadvantages"
      }), ": Less interpretable than single tree, larger model size, slower inference, can overfit on noisy data."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface DecisionTreeConfig {\n  maxDepth: number;\n  minSamplesSplit: number;\n  maxFeatures?: \"sqrt\" | \"log2\" | number;\n}\n\ninterface TreeNode {\n  feature?: number;\n  threshold?: number;\n  left?: TreeNode;\n  right?: TreeNode;\n  value?: number;\n}\n\nfunction entropy(counts: number[], total: number): number {\n  return -counts.reduce((s, c) => {\n    const p = c / total;\n    return s + (p > 0 ? p * Math.log2(p) : 0);\n  }, 0);\n}\n\nfunction gini(counts: number[], total: number): number {\n  return 1 - counts.reduce((s, c) => s + (c / total) ** 2, 0);\n}\n\nclass RandomForest {\n  private trees: Array<{ features: number[]; tree: TreeNode }> = [];\n\n  fit(X: number[][], y: number[], config: DecisionTreeConfig): void {\n    const n = X.length;\n    const nFeatures = X[0].length;\n    const nSub = config.maxFeatures === \"sqrt\"\n      ? Math.round(Math.sqrt(nFeatures))\n      : nFeatures;\n\n    for (let i = 0; i < 100; i++) {\n      const indices = Array.from({ length: n }, () =>\n        Math.floor(Math.random() * n)\n      );\n      const subFeatures = Array.from({ length: nSub }, () =>\n        Math.floor(Math.random() * nFeatures)\n      );\n      const XBoot = indices.map((idx) => subFeatures.map((f) => X[idx][f]));\n      const yBoot = indices.map((idx) => y[idx]);\n      this.trees.push({\n        features: subFeatures,\n        tree: this.buildTree(XBoot, yBoot, 0, config),\n      });\n    }\n  }\n\n  private buildTree(\n    X: number[][], y: number[], depth: number, config: DecisionTreeConfig\n  ): TreeNode {\n    if (depth >= config.maxDepth || new Set(y).size === 1) {\n      return { value: y.reduce((a, b) => a + b, 0) / y.length };\n    }\n    // Find best split and recurse\n    return { value: y.reduce((a, b) => a + b, 0) / y.length };\n  }\n\n  predict(X: number[][]): number[] {\n    const preds = this.trees.map(({ features, tree }) =>\n      X.map((row) => {\n        const subRow = features.map((f) => row[f]);\n        return this.traverse(subRow, tree);\n      })\n    );\n    return preds[0].map((_, i) =>\n      preds.reduce((s, p) => s + p[i], 0) / preds.length > 0.5 ? 1 : 0\n    );\n  }\n\n  private traverse(x: number[], node: TreeNode): number {\n    if (node.value !== undefined) return node.value;\n    if (x[node.feature!] <= node.threshold!) return this.traverse(x, node.left!);\n    return this.traverse(x, node.right!);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decision trees recursively partition data using entropy or Gini impurity to maximize information gain at each split"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Entropy measures uncertainty (0 = pure, log₂(K) = max); Gini measures misclassification probability (0 = pure, 1 - 1/K = max)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trees are prone to overfitting; pre-pruning (limit depth, min_samples) and post-pruning (cost-complexity) control complexity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bagging trains models on bootstrap samples and averages predictions, reducing variance without increasing bias"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Random forest adds feature subsampling to bagging, further decorrelating trees and improving generalization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OOB error provides a built-in validation estimate without needing a separate validation set"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Feature importance from random forest measures how much each feature reduces impurity across all splits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Key hyperparameters: n_estimators (more = better), max_depth (shallow = less overfitting), max_features (sqrt = default)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trees handle non-linear relationships, mixed data types, and missing values naturally without scaling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Random forest is one of the best \"out-of-the-box\" algorithms for tabular data"
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
            children: "Quick baseline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random forest with default params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex neural networks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interpretability needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single decision tree (depth ≤ 5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Black-box ensemble"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High-dimensional data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random forest with sqrt(max_features)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full feature trees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Imbalanced data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stratified sampling + class weights"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default bootstrap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overfitting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increase min_samples_split, reduce max_depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Growing trees to full depth"
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
        }), "Q1: What is the difference between entropy and Gini impurity?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Entropy = -Σpᵢlog₂(pᵢ) measures information content; Gini = 1 - Σpᵢ² measures misclassification probability. Both produce similar trees. Entropy is slightly more computationally expensive (log operations) but can produce more balanced splits. Gini is faster and tends to isolate the largest class in one node faster. In practice, the difference is negligible — both yield similar accuracy."
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
        }), "Q2: How does random forest reduce overfitting compared to a single decision tree?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Single decision trees have high variance — small changes in training data produce very different trees. Random forest reduces variance through: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Bagging"
          }), ": Each tree trained on different bootstrap samples averages out variance. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Feature subsampling"
          }), ": Each split considers only a random subset of features, decorrelating trees. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Averaging"
          }), ": Aggregating many slightly different trees smooths predictions. The bias remains similar to a single tree while variance drops dramatically."]
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
        }), "Q3: What is out-of-bag (OOB) error and why is it useful?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "When bootstrapping, each sample has about 63.2% chance of being selected. The remaining 36.8% are \"out-of-bag\" for that tree. OOB error averages predictions from trees where a sample was not in the bootstrap set. This provides a validation estimate without needing a separate validation split. OOB error correlates well with test error and is essentially a built-in cross-validation for ensemble methods."
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
        }), "Q41: How do you interpret feature importance from random forest?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Two methods: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Impurity-based importance"
          }), ": Sum the reduction in impurity (Gini or entropy) each time a feature is used for a split, weighted by the number of samples it splits. Features used near the root get higher importance. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Permutation importance"
          }), ": Shuffle a feature's values and measure the drop in model accuracy. A large drop means the feature is important. Permutation importance is more reliable but computationally expensive."]
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
        }), "Q5: What are the stopping criteria for decision tree growth?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Common stopping criteria: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Max depth"
          }), ": Tree stops growing beyond a specified depth. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Min samples split"
          }), ": Node must have at least this many samples to split. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Min samples leaf"
          }), ": Each leaf must contain at least this many samples. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Min impurity decrease"
          }), ": Split must reduce impurity by at least this amount. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Pure leaf"
          }), ": All samples in a node belong to the same class. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6) Max leaf nodes"
          }), ": Limit total number of leaf nodes."]
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
        }), "Q6: How does bagging reduce variance without increasing bias?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Bagging trains models on bootstrap samples of the data. Each model has similar bias (correctly captures the underlying pattern) but different variance (noise causes different predictions). Averaging multiple models preserves the expected prediction (same bias) while reducing variance by a factor of ~1/K (where K is the number of models), assuming the models are independent. In practice, models are correlated, so variance reduction is less than 1/K but still substantial."
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
        }), "Q7: What is the difference between bagging and random forest?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Bagging trains trees on bootstrap samples using all features. Random forest uses both bootstrap sampling AND feature subsampling (only a random subset of features at each split). Feature subsampling decorrelates the trees — if one feature is very strong, bagging trees would all use it at the top split, making them correlated. Random forest forces trees to use different features, reducing correlation and further reducing variance."
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
        }), "Q8: How do decision trees handle categorical features?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Decision trees handle categorical features natively by splitting on category membership. For binary categorical features, splits go left/right. For multi-category features, trees consider all possible subsets of categories (2^(k-1) - 1 possibilities for k categories). In practice, implementations use heuristics like sorting by target mean or using one-hot encoding. Random forest can handle multi-category features well because feature subsampling reduces the search space."
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
        }), "Q9: What is the bias-variance trade-off in random forest?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Random forest mainly addresses variance reduction. Individual trees have low bias (fit training data well) but high variance (different training sets produce different trees). Bagging reduces variance by averaging. Feature subsampling further reduces variance by decorrelating trees. The bias of random forest is slightly higher than a single tree (because each tree sees only a subset of features) but this bias increase is small compared to the variance reduction. The overall effect is improved generalization."
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
        }), "Q10: When would you choose random forest over gradient boosting?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Choose random forest when: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1)"
          }), " You need a quick, robust baseline with fewer hyperparameters to tune. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2)"
          }), " Data is noisy (boosting can overfit on noisy data). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3)"
          }), " You need parallel training (each tree is independent). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4)"
          }), " You want built-in OOB validation. Choose gradient boosting when: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1)"
          }), " Maximum predictive performance is needed. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2)"
          }), " Data is clean and well-structured. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3)"
          }), " You can tolerate sequential training. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4)"
          }), " You need state-of-the-art results on tabular data."]
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
      }), ": What does entropy of 0 indicate in a decision tree node?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Maximum impurity\nb) Pure node (all same class)\nc) Equal class distribution\nd) Overfitting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Pure node (all same class)"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Entropy = 0 means all samples belong to the same class (completely pure)."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": Which ensemble method trains trees independently in parallel?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Gradient boosting\nb) AdaBoost\nc) Random forest\nd) XGBoost"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) Random forest"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Random forest trees are independent and can be trained in parallel. Boosting methods train sequentially."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": What proportion of data is left out-of-bag in each bootstrap sample?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) ~10%\nb) ~36.8%\nc) ~50%\nd) ~63.2%"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) ~36.8%"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "With n samples drawn with replacement, each sample has ~63.2% chance of being selected, leaving ~36.8% out-of-bag."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": What is the main purpose of feature subsampling in random forest?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Reduce training time\nb) Decorrelate trees\nc) Increase accuracy\nd) Reduce memory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Decorrelate trees"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Feature subsampling ensures trees are not all using the same strong features, reducing correlation."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": What is the range of Gini impurity for binary classification?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) [0, 1]\nb) [0, 0.5]\nc) [0, 2]\nd) [-1, 1]"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) [0, 0.5]"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Gini = 2p(1-p). Maximum is 0.5 at p=0.5. Minimum is 0 at p=0 or p=1. For K classes, max is 1 - 1/K."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Implement entropy and Gini impurity functions. Verify that H([0,0,0]) = 0 and H([0,1,0,1]) = 1 (binary entropy)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Train a decision tree on the Iris dataset with max_depth=3. Visualize the tree structure and identify the most important split features."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Implement random forest from scratch with n_estimators=50. Compare accuracy with a single decision tree on a test dataset."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Build a hyperparameter grid search for random forest: test max_depth=[3,5,7,10], n_estimators=[50,100,200], max_features=[\"sqrt\",\"log2\"]. Report optimal params via cross-validation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Implement cost-complexity pruning for decision trees. Show how increasing ccp_alpha reduces tree size and affects validation accuracy."]
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
            children: "Explain the core idea of Decision Trees & Random Forest — Entropy, Gini, Bagging in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Decision Trees & Random Forest — Entropy, Gini, Bagging."
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
            children: "Describe a production bug caused by misunderstanding Decision Trees & Random Forest — Entropy, Gini, Bagging. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Decision Trees & Random Forest — Entropy, Gini, Bagging from 10 users to 10 million?"
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
            children: "Compare Decision Trees & Random Forest — Entropy, Gini, Bagging with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Decision Trees & Random Forest — Entropy, Gini, Bagging."
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
            children: "How does Decision Trees & Random Forest — Entropy, Gini, Bagging behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Decision Trees & Random Forest — Entropy, Gini, Bagging run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Decision Trees & Random Forest — Entropy, Gini, Bagging that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Decision Trees & Random Forest — Entropy, Gini, Bagging explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Decision Trees & Random Forest — Entropy, Gini, Bagging\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Decision Trees & Random Forest — Entropy, Gini, Bagging to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Decision Trees & Random Forest — Entropy, Gini, Bagging (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Decision Trees & Random Forest — Entropy, Gini, Bagging and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Decision Trees & Random Forest — Entropy, Gini, Bagging-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Decision Trees & Random Forest — Entropy, Gini, Bagging interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Decision Trees & Random Forest — Entropy, Gini, Bagging in production today?"
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
        }), " Decision Trees & Random Forest — Entropy, Gini, Bagging builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Decision Trees & Random Forest — Entropy, Gini, Bagging before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Decision Trees & Random Forest — Entropy, Gini, Bagging is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Decision Trees & Random Forest — Entropy, Gini, Bagging in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Decision Trees & Random Forest — Entropy, Gini, Bagging chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Decision Trees & Random Forest — Entropy, Gini, Bagging is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Decision Trees & Random Forest — Entropy, Gini, Bagging is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Decision Trees & Random Forest — Entropy, Gini, Bagging is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Decision Trees & Random Forest — Entropy, Gini, Bagging issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Decision Trees & Random Forest — Entropy, Gini, Bagging in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Decision Trees & Random Forest — Entropy, Gini, Bagging that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Decision Trees & Random Forest — Entropy, Gini, Bagging is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Decision Trees & Random Forest — Entropy, Gini, Bagging in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Decision Trees & Random Forest — Entropy, Gini, Bagging and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Decision Trees & Random Forest — Entropy, Gini, Bagging on an empty input?"
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
            children: "Complete Medium exercises, explain Decision Trees & Random Forest — Entropy, Gini, Bagging to someone else"
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
        children: "Always write a one-line example of Decision Trees & Random Forest — Entropy, Gini, Bagging from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Decision Trees & Random Forest — Entropy, Gini, Bagging when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Decision Trees & Random Forest — Entropy, Gini, Bagging twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Decision Trees & Random Forest — Entropy, Gini, Bagging snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Decision Trees & Random Forest — Entropy, Gini, Bagging listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Decision Trees & Random Forest — Entropy, Gini, Bagging to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Decision Trees & Random Forest — Entropy, Gini, Bagging by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Decision Trees & Random Forest — Entropy, Gini, Bagging to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Decision Trees & Random Forest — Entropy, Gini, Bagging"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Decision Trees & Random Forest — Entropy, Gini, Bagging (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Decision Trees & Random Forest — Entropy, Gini, Bagging problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Decision Trees & Random Forest — Entropy, Gini, Bagging"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Decision Trees & Random Forest — Entropy, Gini, Bagging"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Decision Trees & Random Forest — Entropy, Gini, Bagging"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Decision Trees & Random Forest — Entropy, Gini, Bagging fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Decision Trees & Random Forest — Entropy, Gini, Bagging is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Decision Trees & Random Forest — Entropy, Gini, Bagging is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Decision Trees & Random Forest — Entropy, Gini, Bagging, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Decision Trees & Random Forest — Entropy, Gini, Bagging asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decision Trees & Random Forest — Entropy, Gini, Bagging is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Decision Trees & Random Forest — Entropy, Gini, Bagging."
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
        children: "Decision Trees & Random Forest — Entropy, Gini, Bagging emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Decision Trees & Random Forest — Entropy, Gini, Bagging today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Decision Trees & Random Forest — Entropy, Gini, Bagging — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Decision Trees & Random Forest — Entropy, Gini, Bagging changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Decision Trees & Random Forest — Entropy, Gini, Bagging."
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
        children: "Decision Trees & Random Forest — Entropy, Gini, Bagging appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Decision Trees & Random Forest — Entropy, Gini, Bagging helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Decision Trees & Random Forest — Entropy, Gini, Bagging concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Decision Trees & Random Forest — Entropy, Gini, Bagging skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Decision Trees & Random Forest — Entropy, Gini, Bagging to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Decision Trees & Random Forest — Entropy, Gini, Bagging is like a recipe"
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
        }), " — this chapter contributes the Decision Trees & Random Forest — Entropy, Gini, Bagging skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-04decisiontreesandrf-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What does entropy of 0 indicate in a decision tree node?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Pure node (all same class)"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-04decisiontreesandrf-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which ensemble method trains trees independently in parallel?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) Random forest"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-04decisiontreesandrf-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What proportion of data is left out-of-bag in each bootstrap sample?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) ~36.8%"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-04decisiontreesandrf-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the main purpose of feature subsampling in random forest?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Decorrelate trees"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-04decisiontreesandrf-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the range of Gini impurity for binary classification?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) [0, 0.5]"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Decision Trees & Random Forest — Entropy, Gini, Bagging (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Decision Trees & Random Forest — Entropy, Gini, Bagging (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Decision Trees & Random Forest — Entropy, Gini, Bagging-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Decision Trees & Random Forest — Entropy, Gini, Bagging in production at scale"
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
        children: "Testing: pytest for unit tests of Decision Trees & Random Forest — Entropy, Gini, Bagging code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Decision Trees & Random Forest — Entropy, Gini, Bagging"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Decision Trees & Random Forest — Entropy, Gini, Bagging code."]
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
        }), " or your IDE's debugger to step through the Decision Trees & Random Forest — Entropy, Gini, Bagging example code."]
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
        children: "Explain Decision Trees & Random Forest — Entropy, Gini, Bagging in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Decision Trees & Random Forest — Entropy, Gini, Bagging."
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
        children: "Tell me about a time you debugged a Decision Trees & Random Forest — Entropy, Gini, Bagging problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Decision Trees & Random Forest — Entropy, Gini, Bagging is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Decision Trees & Random Forest — Entropy, Gini, Bagging."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Decision Trees & Random Forest — Entropy, Gini, Bagging logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Decision Trees & Random Forest — Entropy, Gini, Bagging without notes"
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
        }), ": a small team uses Decision Trees & Random Forest — Entropy, Gini, Bagging daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Decision Trees & Random Forest — Entropy, Gini, Bagging patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Decision Trees & Random Forest — Entropy, Gini, Bagging principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Decision Trees & Random Forest — Entropy, Gini, Bagging shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Decision Trees & Random Forest — Entropy, Gini, Bagging to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/08-machine-learning/05-svm-and-kernel-methods",
        children: "SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decision Trees & Random Forest — Entropy, Gini, Bagging, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Decision Trees & Random Forest — Entropy, Gini, Bagging depends on input size and distribution — always benchmark for your own data."
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