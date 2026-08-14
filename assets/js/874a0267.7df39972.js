"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[21902],{

/***/ 9901
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_08_machine_learning_06_ensemble_methods_md_874_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-08-machine-learning-06-ensemble-methods-md-874.json
const site_docs_courses_ai_engineering_placement_08_machine_learning_06_ensemble_methods_md_874_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/machine-learning/06-ensemble-methods","title":"Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/08-machine-learning/06-ensemble-methods.md","sourceDirName":"courses/ai-engineering-placement/08-machine-learning","slug":"/ai-engineering-placement/08-machine-learning/06-ensemble-methods","permalink":"/ai-engineering-journey/ai-engineering-placement/08-machine-learning/06-ensemble-methods","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":117,"frontMatter":{"id":"06-ensemble-methods","slug":"/ai-engineering-placement/08-machine-learning/06-ensemble-methods","title":"Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost","sidebar_label":"Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost","sidebar_position":117},"sidebar":"placementSidebar","previous":{"title":"SVM & Kernel Methods — Margins, Kernel Trick, Soft Margin","permalink":"/ai-engineering-journey/ai-engineering-placement/08-machine-learning/05-svm-and-kernel-methods"},"next":{"title":"Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures","permalink":"/ai-engineering-journey/ai-engineering-placement/08-machine-learning/07-unsupervised-learning"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/08-machine-learning/06-ensemble-methods.md


const frontMatter = {
	id: '06-ensemble-methods',
	slug: '/ai-engineering-placement/08-machine-learning/06-ensemble-methods',
	title: 'Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost',
	sidebar_label: 'Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost',
	sidebar_position: 117
};
const contentTitle = 'Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost';

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
  "value": "6.1 Ensemble Paradigms",
  "id": "61-ensemble-paradigms",
  "level": 2
}, {
  "value": "6.2 AdaBoost",
  "id": "62-adaboost",
  "level": 2
}, {
  "value": "6.3 Gradient Boosting",
  "id": "63-gradient-boosting",
  "level": 2
}, {
  "value": "6.4 XGBoost",
  "id": "64-xgboost",
  "level": 2
}, {
  "value": "6.5 LightGBM &amp; CatBoost",
  "id": "65-lightgbm--catboost",
  "level": 2
}, {
  "value": "6.6 Stacking &amp; Blending",
  "id": "66-stacking--blending",
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
        id: "ensemble-methods--boosting-adaboost-gradient-boosting-xgboost",
        children: "Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost"
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
            children: "Understand ensemble learning: bagging, boosting, stacking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement AdaBoost with decision stumps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain gradient boosting: sequential additive modeling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement gradient boosting with regression trees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand XGBoost: regularization, column subsampling, sparsity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply stacking: meta-learner, base models, cross-validation"
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
      children: "Understanding ensemble methods is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how ensemble methods works in practice."
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
            children: "6.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensemble Paradigms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bagging, boosting, stacking — differences and use cases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AdaBoost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adaptive boosting, sample weights, exponential loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gradient Boosting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential residuals, learning rate, shallow trees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XGBoost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regularization, column block, sparsity, hardware optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LightGBM & CatBoost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GOSS, EFB, ordered boosting, categorical features"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stacking & Blending"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Meta-learner, base models, holdout predictions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Training Data] --> B{Ensemble Type}\n    B --> C[Bagging]\n    B --> D[Boosting]\n    B --> E[Stacking]\n    C --> F[Parallel Independent Models]\n    D --> G[Sequential Corrective Models]\n    E --> H[Base Models → Meta-Learner]\n    F --> I[Average / Vote]\n    G --> J[Weighted Sum]\n    H --> K[Meta Prediction]\n    style C fill:#4a90d9,color:#fff\n    style D fill:#e85d75,color:#fff\n    style E fill:#50b86c,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "61-ensemble-paradigms",
      children: "6.1 Ensemble Paradigms"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ensemble methods combine multiple models to produce better predictions than any single model."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bagging"
      }), " (Bootstrap Aggregating): Train models independently in parallel on bootstrap samples. Reduce variance. Example: Random Forest."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Boosting"
      }), ": Train models sequentially, each correcting the errors of its predecessor. Reduce bias and variance. Examples: AdaBoost, Gradient Boosting, XGBoost."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Stacking"
      }), ": Train diverse base models, then train a meta-model on their predictions. Leverage complementary strengths."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\nfrom typing import List, Dict, Tuple, Optional, Callable\nfrom sklearn.tree import DecisionTreeRegressor, DecisionTreeClassifier\nfrom sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier\nfrom sklearn.metrics import accuracy_score\n\ndef compare_ensembles(X_train, y_train, X_test, y_test) -> Dict:\n    models = {\n        \"Single Tree\": DecisionTreeClassifier(max_depth=5),\n        \"Random Forest (bagging)\": RandomForestClassifier(n_estimators=100, max_depth=5),\n        \"Gradient Boosting\": GradientBoostingClassifier(n_estimators=100, max_depth=3, lr=0.1),\n    }\n\n    results = {}\n    for name, model in models.items():\n        model.fit(X_train, y_train)\n        train_acc = accuracy_score(y_train, model.predict(X_train))\n        test_acc = accuracy_score(y_test, model.predict(X_test))\n        results[name] = {\"train_acc\": train_acc, \"test_acc\": test_acc}\n\n    return results\n\n# Generate sample data\nfrom sklearn.datasets import make_classification\nX_ens, y_ens = make_classification(n_samples=500, n_features=10, random_state=42)\nX_ens_train, y_ens_train = X_ens[:400], y_ens[:400]\nX_ens_test, y_ens_test = X_ens[400:], y_ens[400:]\n\nresults = compare_ensembles(X_ens_train, y_ens_train, X_ens_test, y_ens_test)\nfor name, metrics in results.items():\n    print(f\"{name:25s}: train={metrics['train_acc']:.3f}, test={metrics['test_acc']:.3f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "62-adaboost",
      children: "6.2 AdaBoost"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AdaBoost (Adaptive Boosting) trains weak learners sequentially, increasing weights on misclassified samples."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class AdaBoost:\n    def __init__(self, n_estimators: int = 50):\n        self.n_estimators = n_estimators\n        self.models: List[DecisionTreeClassifier] = []\n        self.model_weights: List[float] = []\n        self.training_errors: List[float] = []\n\n    def fit(self, X: np.ndarray, y: np.ndarray) -> None:\n        n = X.shape[0]\n        w = np.ones(n) / n  # Initial sample weights\n\n        for _ in range(self.n_estimators):\n            # Train weak learner (decision stump: max_depth=1)\n            model = DecisionTreeClassifier(max_depth=1)\n            model.fit(X, y, sample_weight=w)\n            preds = model.predict(X)\n\n            # Compute weighted error\n            err = np.sum(w * (preds != y)) / np.sum(w)\n            if err >= 0.5 or err == 0:\n                self.models.append(model)\n                self.model_weights.append(0)\n                continue\n\n            # Model weight\n            alpha = 0.5 * np.log((1 - err) / max(err, 1e-10))\n            self.models.append(model)\n            self.model_weights.append(alpha)\n            self.training_errors.append(err)\n\n            # Update sample weights\n            w = w * np.exp(-alpha * y * (2 * preds - 1))\n            w = w / np.sum(w)  # Normalize\n\n    def predict(self, X: np.ndarray) -> np.ndarray:\n        # Weighted majority vote\n        predictions = np.zeros(X.shape[0])\n        for model, alpha in zip(self.models, self.model_weights):\n            predictions += alpha * (2 * model.predict(X) - 1)\n        return (predictions > 0).astype(int)\n\n## Test AdaBoost\nada = AdaBoost(n_estimators=50)\nada.fit(X_ens_train, y_ens_train)\nada_preds = ada.predict(X_ens_test)\nprint(f\"AdaBoost accuracy: {accuracy_score(y_ens_test, ada_preds):.3f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "AdaBoost algorithm"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize sample weights wᵢ = 1/n"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For t = 1 to T:\na. Train weak learner hₜ with weights wᵢ\nb. Compute weighted error εₜ\nc. Set αₜ = ½ln((1-εₜ)/εₜ)\nd. Update wᵢ ← wᵢ · exp(-αₜ · yᵢ · hₜ(xᵢ))\ne. Normalize wᵢ"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Final: H(x) = sign(Σαₜhₜ(x))"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "63-gradient-boosting",
      children: "6.3 Gradient Boosting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gradient boosting trains trees to predict the negative gradient (residuals) of the loss function."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class GradientBoostingRegressorScratch:\n    def __init__(self, n_estimators: int = 100, learning_rate: float = 0.1,\n                 max_depth: int = 3):\n        self.n_estimators = n_estimators\n        self.learning_rate = learning_rate\n        self.max_depth = max_depth\n        self.trees: List[DecisionTreeRegressor] = []\n        self.initial_pred: float = 0.0\n\n    def fit(self, X: np.ndarray, y: np.ndarray) -> List[float]:\n        self.initial_pred = np.mean(y)\n        residuals = y - self.initial_pred\n        train_loss = []\n\n        for _ in range(self.n_estimators):\n            tree = DecisionTreeRegressor(max_depth=self.max_depth)\n            tree.fit(X, residuals)\n            self.trees.append(tree)\n\n            # Update residuals: remove the contribution of this tree\n            pred = tree.predict(X)\n            residuals -= self.learning_rate * pred\n\n            # Track MSE\n            current_pred = self.predict(X)\n            mse = np.mean((y - current_pred) ** 2)\n            train_loss.append(mse)\n\n        return train_loss\n\n    def predict(self, X: np.ndarray) -> np.ndarray:\n        pred = np.full(X.shape[0], self.initial_pred)\n        for tree in self.trees:\n            pred += self.learning_rate * tree.predict(X)\n        return pred\n\n## Test gradient boosting\nnp.random.seed(42)\nX_gb = np.linspace(0, 10, 200).reshape(-1, 1)\ny_gb = np.sin(X_gb).ravel() + np.random.randn(200) * 0.1\n\ngb = GradientBoostingRegressorScratch(n_estimators=100, learning_rate=0.1, max_depth=3)\nloss = gb.fit(X_gb, y_gb)\nprint(f\"Initial loss: {loss[0]:.4f}, Final loss: {loss[-1]:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Gradient Boosting for Classification"
      }), ": Use log-loss (cross-entropy) as the loss function. The initial prediction is log(odds) = ½ln((n₁+1)/(n₀+1)). Each tree predicts the gradient of log-loss w.r.t. the prediction."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Loss Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Y Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gradient"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yᵢ - pᵢ"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sign(yᵢ - pᵢ)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Log-loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "yᵢ - σ(pᵢ)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quantile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quantile regression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "τ - I(yᵢ ≤ pᵢ)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "64-xgboost",
      children: "6.4 XGBoost"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XGBoost improves gradient boosting with regularization, column subsampling, sparsity awareness, and hardware optimization."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SimpleXGBoost:\n    def __init__(self, n_estimators: int = 100, learning_rate: float = 0.1,\n                 max_depth: int = 3, reg_lambda: float = 1.0,\n                 reg_alpha: float = 0.0, subsample: float = 1.0,\n                 colsample_bytree: float = 1.0):\n        self.n_estimators = n_estimators\n        self.learning_rate = learning_rate\n        self.max_depth = max_depth\n        self.reg_lambda = reg_lambda  # L2 regularization on leaf weights\n        self.reg_alpha = reg_alpha    # L1 regularization on leaf weights\n        self.subsample = subsample\n        self.colsample_bytree = colsample_bytree\n        self.trees: List[Dict] = []\n        self.base_score: float = 0.5\n\n    def _compute_gradients(self, y: np.ndarray, preds: np.ndarray\n                           ) -> Tuple[np.ndarray, np.ndarray]:\n        \"\"\"Log-loss gradients and hessians for binary classification\"\"\"\n        probs = 1.0 / (1.0 + np.exp(-preds))\n        grad = probs - y\n        hess = probs * (1 - probs)\n        return grad, hess\n\n    def _gain(self, G: float, H: float, GL: float, HL: float,\n              GR: float, HR: float) -> float:\n        \"\"\"XGBoost gain with regularization\"\"\"\n        gain_left = (GL ** 2) / (HL + self.reg_lambda)\n        gain_right = (GR ** 2) / (HR + self.reg_lambda)\n        gain_parent = (G ** 2) / (H + self.reg_lambda)\n        return 0.5 * (gain_left + gain_right - gain_parent) - self.reg_alpha\n\n    def _leaf_weight(self, G: float, H: float) -> float:\n        return -G / (H + self.reg_lambda)\n\n    def fit(self, X: np.ndarray, y: np.ndarray) -> List[float]:\n        n = X.shape[0]\n        preds = np.full(n, np.log(self.base_score / (1 - self.base_score)))\n        history = []\n\n        for _ in range(self.n_estimators):\n            grad, hess = self._compute_gradients(y, preds)\n\n            # Subsampling\n            if self.subsample < 1.0:\n                n_sample = int(n * self.subsample)\n                indices = np.random.choice(n, n_sample, replace=False)\n                X_sample, grad_sample, hess_sample = X[indices], grad[indices], hess[indices]\n            else:\n                X_sample, grad_sample, hess_sample = X, grad, hess\n\n            # Column subsampling\n            n_features = X.shape[1]\n            n_cols = max(1, int(n_features * self.colsample_bytree))\n            col_indices = np.random.choice(n_features, n_cols, replace=False)\n\n            # Build tree (simplified: single split)\n            best_gain = 0\n            best_split = None\n            best_threshold = None\n\n            for feat_idx in col_indices:\n                X_feat = X_sample[:, feat_idx]\n                sorted_idx = np.argsort(X_feat)\n                X_sorted = X_feat[sorted_idx]\n                g_sorted = grad_sample[sorted_idx]\n                h_sorted = hess_sample[sorted_idx]\n\n                GL, HL = 0, 0\n                G_total = np.sum(g_sorted)\n                H_total = np.sum(h_sorted)\n\n                for i in range(len(X_sorted) - 1):\n                    GL += g_sorted[i]\n                    HL += h_sorted[i]\n                    if X_sorted[i] == X_sorted[i + 1]:\n                        continue\n                    GR = G_total - GL\n                    HR = H_total - HL\n                    gain = self._gain(G_total, H_total, GL, HL, GR, HR)\n                    if gain > best_gain:\n                        best_gain = gain\n                        best_split = feat_idx\n                        best_threshold = (X_sorted[i] + X_sorted[i + 1]) / 2\n\n            if best_split is None:\n                tree_info = {\"weight\": 0.0, \"split\": None, \"threshold\": None}\n            else:\n                left_mask = X_sample[:, best_split] <= best_threshold\n                right_mask = ~left_mask\n                w_left = self._leaf_weight(np.sum(grad_sample[left_mask]),\n                                           np.sum(hess_sample[left_mask]))\n                w_right = self._leaf_weight(np.sum(grad_sample[right_mask]),\n                                            np.sum(hess_sample[right_mask]))\n                tree_info = {\n                    \"split\": best_split,\n                    \"threshold\": best_threshold,\n                    \"left_weight\": w_left,\n                    \"right_weight\": w_right,\n                }\n\n            self.trees.append(tree_info)\n\n            # Update predictions\n            tree_pred = np.zeros(n)\n            if tree_info[\"split\"] is not None:\n                left_mask = X[:, tree_info[\"split\"]] <= tree_info[\"threshold\"]\n                tree_pred[left_mask] = tree_info[\"left_weight\"]\n                tree_pred[~left_mask] = tree_info[\"right_weight\"]\n            preds += self.learning_rate * tree_pred\n\n            # Track loss\n            probs = 1.0 / (1.0 + np.exp(-preds))\n            loss = -np.mean(y * np.log(probs + 1e-15) + (1 - y) * np.log(1 - probs + 1e-15))\n            history.append(loss)\n\n        return history\n\n    def predict_proba(self, X: np.ndarray) -> np.ndarray:\n        preds = np.full(X.shape[0], np.log(self.base_score / (1 - self.base_score)))\n        for tree_info in self.trees:\n            tree_pred = np.zeros(X.shape[0])\n            if tree_info[\"split\"] is not None:\n                left_mask = X[:, tree_info[\"split\"]] <= tree_info[\"threshold\"]\n                tree_pred[left_mask] = tree_info[\"left_weight\"]\n                tree_pred[~left_mask] = tree_info[\"right_weight\"]\n            preds += self.learning_rate * tree_pred\n        probs = 1.0 / (1.0 + np.exp(-preds))\n        return np.column_stack([1 - probs, probs])\n\n    def predict(self, X: np.ndarray) -> np.ndarray:\n        return np.argmax(self.predict_proba(X), axis=1)\n\nxgb = SimpleXGBoost(n_estimators=50, learning_rate=0.1, max_depth=3)\nhistory = xgb.fit(X_ens_train, y_ens_train)\nxgb_preds = xgb.predict(X_ens_test)\nprint(f\"XGBoost accuracy: {accuracy_score(y_ens_test, xgb_preds):.3f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "XGBoost vs Standard Gradient Boosting"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Standard GB"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "XGBoost"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Regularization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L1, L2 on leaf weights"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tree building"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depth-first (greedy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-sorted + column block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Missing values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires imputation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic sparsity handling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parallelization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential trees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel column block building"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU, GPU, distributed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Column sampling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (colsample_bytree)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "65-lightgbm--catboost",
      children: "6.5 LightGBM & CatBoost"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "LightGBM"
      }), ": Uses Gradient-based One-Side Sampling (GOSS) and Exclusive Feature Bundling (EFB) for speed."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CatBoost"
      }), ": Handles categorical features natively using ordered boosting and symmetric trees."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class LightGBMSimulator:\n    \"\"\"Simulates LightGBM's GOSS and leaf-wise tree growth\"\"\"\n\n    @staticmethod\n    def goss_sampling(gradients: np.ndarray, hessians: np.ndarray,\n                      top_ratio: float = 0.2, random_ratio: float = 0.1):\n        \"\"\"Gradient-based One-Side Sampling\"\"\"\n        n = len(gradients)\n        n_top = int(n * top_ratio)\n        n_random = int(n * random_ratio)\n\n        # Select top gradients (absolute value)\n        top_indices = np.argsort(np.abs(gradients))[-n_top:]\n\n        # Random sampling from the rest\n        rest_indices = np.setdiff1d(np.arange(n), top_indices)\n        random_indices = np.random.choice(rest_indices, n_random, replace=False)\n\n        selected = np.concatenate([top_indices, random_indices])\n        # Amplify small-gradient samples\n        weight_ratio = len(rest_indices) / n_random\n        weights = np.ones(len(selected))\n        weights[len(top_indices):] = weight_ratio\n\n        return selected, weights\n\n    @staticmethod\n    def leaf_wise_split(X: np.ndarray, grad: np.ndarray, hess: np.ndarray,\n                        max_leaves: int = 31, reg_lambda: float = 1.0):\n        \"\"\"Leaf-wise (best-first) tree growth\"\"\"\n        n = len(X)\n        nodes = [{\"indices\": np.arange(n), \"G\": np.sum(grad), \"H\": np.sum(hess),\n                  \"depth\": 0, \"weight\": -np.sum(grad) / (np.sum(hess) + reg_lambda)}]\n        leaves = []\n\n        while len(leaves) + len(nodes) < max_leaves and nodes:\n            # Sort nodes by gain\n            nodes.sort(key=lambda x: x[\"G\"] ** 2 / (x[\"H\"] + reg_lambda), reverse=True)\n            best_node = nodes.pop(0)\n\n            indices = best_node[\"indices\"]\n            if len(indices) < 3 or best_node[\"depth\"] > 10:\n                leaves.append(best_node)\n                continue\n\n            # Find best split\n            best_gain = 0\n            best_split = None\n            for feat in range(X.shape[1]):\n                Xf = X[indices, feat]\n                sorted_idx = np.argsort(Xf)\n                GL, HL = 0, 0\n                for i in range(len(sorted_idx) - 1):\n                    idx = sorted_idx[i]\n                    GL += grad[idx]\n                    HL += hess[idx]\n                    if Xf[idx] == Xf[sorted_idx[i + 1]]:\n                        continue\n                    GR = best_node[\"G\"] - GL\n                    HR = best_node[\"H\"] - HL\n                    gain = 0.5 * (GL**2/(HL+reg_lambda) + GR**2/(HR+reg_lambda) - best_node[\"G\"]**2/(best_node[\"H\"]+reg_lambda))\n                    if gain > best_gain:\n                        best_gain = gain\n                        best_split = (feat, (Xf[idx] + Xf[sorted_idx[i + 1]]) / 2)\n\n            if best_split is None:\n                leaves.append(best_node)\n                continue\n\n            feat, threshold = best_split\n            left_mask = X[indices, feat] <= threshold\n            right_mask = ~left_mask\n            nodes.append({\n                \"indices\": indices[left_mask],\n                \"G\": np.sum(grad[indices[left_mask]]),\n                \"H\": np.sum(hess[indices[left_mask]]),\n                \"depth\": best_node[\"depth\"] + 1,\n            })\n            nodes.append({\n                \"indices\": indices[right_mask],\n                \"G\": np.sum(grad[indices[right_mask]]),\n                \"H\": np.sum(hess[indices[right_mask]]),\n                \"depth\": best_node[\"depth\"] + 1,\n            })\n\n        leaves.extend(nodes)\n        return [{\"weight\": leaf[\"weight\"]} for leaf in leaves]\n\ngoss = LightGBMSimulator()\ngradients = np.random.randn(1000)\nhessians = np.ones(1000)\nselected, weights = goss.goss_sampling(gradients, hessians)\nprint(f\"GOSS: selected {len(selected)}/{1000} samples\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "LightGBM vs XGBoost"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "LightGBM"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "XGBoost"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tree growth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leaf-wise (best-first)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Level-wise (depth-first)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Split finding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gradient-based (GOSS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-sorted algorithm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Categorical handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-hot encoding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Training speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster (especially large data)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "66-stacking--blending",
      children: "6.6 Stacking & Blending"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stacking trains base models and a meta-model that learns to combine their predictions."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class StackingClassifier:\n    def __init__(self, base_models: List[Tuple[str, any]],\n                 meta_model: any, cv: int = 5):\n        self.base_models = base_models\n        self.meta_model = meta_model\n        self.cv = cv\n        self.trained_models: List[any] = []\n\n    def fit(self, X: np.ndarray, y: np.ndarray) -> None:\n        from sklearn.model_selection import StratifiedKFold\n\n        n = X.shape[0]\n        n_models = len(self.base_models)\n        meta_features = np.zeros((n, n_models))\n\n        # Train base models with cross-validation\n        kf = StratifiedKFold(n_splits=self.cv, shuffle=True, random_state=42)\n\n        for i, (name, model) in enumerate(self.base_models):\n            fold_preds = np.zeros(n)\n\n            for train_idx, val_idx in kf.split(X, y):\n                X_train_fold = X[train_idx]\n                y_train_fold = y[train_idx]\n                X_val_fold = X[val_idx]\n\n                model_clone = model.__class__()\n                model_clone.fit(X_train_fold, y_train_fold)\n                fold_preds[val_idx] = model_clone.predict_proba(X_val_fold)[:, 1]\n\n            meta_features[:, i] = fold_preds\n\n            # Train on full data\n            full_model = model.__class__()\n            full_model.fit(X, y)\n            self.trained_models.append(full_model)\n\n        # Train meta-model on base model predictions\n        self.meta_model.fit(meta_features, y)\n\n    def predict(self, X: np.ndarray) -> np.ndarray:\n        n = X.shape[0]\n        n_models = len(self.trained_models)\n        meta_features = np.zeros((n, n_models))\n\n        for i, model in enumerate(self.trained_models):\n            meta_features[:, i] = model.predict_proba(X)[:, 1]\n\n        return self.meta_model.predict(meta_features)\n\n    def predict_proba(self, X: np.ndarray) -> np.ndarray:\n        n = X.shape[0]\n        n_models = len(self.trained_models)\n        meta_features = np.zeros((n, n_models))\n\n        for i, model in enumerate(self.trained_models):\n            meta_features[:, i] = model.predict_proba(X)[:, 1]\n\n        return self.meta_model.predict_proba(meta_features)\n\n## Test stacking\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.svm import SVC\n\nbase_models = [\n    (\"rf\", RandomForestClassifier(n_estimators=50, max_depth=5)),\n    (\"svm\", SVC(kernel=\"rbf\", probability=True, C=1.0)),\n    (\"gb\", GradientBoostingClassifier(n_estimators=50, max_depth=3)),\n]\nmeta = LogisticRegression()\n\nstack = StackingClassifier(base_models, meta, cv=3)\nstack.fit(X_ens_train, y_ens_train)\nstack_preds = stack.predict(X_ens_test)\nprint(f\"Stacking accuracy: {accuracy_score(y_ens_test, stack_preds):.3f}\")\n\n## Compare single models vs ensemble\nfor name, model in base_models:\n    model.fit(X_ens_train, y_ens_train)\n    acc = accuracy_score(y_ens_test, model.predict(X_ens_test))\n    print(f\"  {name:10s}: {acc:.3f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Blending"
      }), " (simpler version of stacking): Hold out a validation set (e.g., 10%), train base models on training data, predict on validation set, then train meta-model on validation predictions. Faster than stacking but uses less data."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface EnsembleModel {\n  predict(X: number[][]): number[];\n  fit(X: number[][], y: number[]): void;\n}\n\nclass AdaBoostTS implements EnsembleModel {\n  private models: Array<{ alpha: number; predict: (X: number[][]) => number[] }> = [];\n\n  fit(X: number[][], y: number[]): void {\n    const n = X.length;\n    let weights = new Array(n).fill(1 / n);\n\n    for (let t = 0; t < 50; t++) {\n      // Train weak learner — simplified stump\n      const stump = this.trainStump(X, y, weights);\n      const preds = stump.predict(X);\n      let err = 0;\n      for (let i = 0; i < n; i++) {\n        err += weights[i] * (preds[i] !== y[i] ? 1 : 0);\n      }\n      err /= weights.reduce((a, b) => a + b, 0);\n      if (err >= 0.5 || err === 0) continue;\n\n      const alpha = 0.5 * Math.log((1 - err) / err);\n      this.models.push({ alpha, predict: stmp.predict });\n\n      for (let i = 0; i < n; i++) {\n        weights[i] *= Math.exp(-alpha * (preds[i] === y[i] ? 1 : -1));\n      }\n      const sum = weights.reduce((a, b) => a + b, 0);\n      weights = weights.map((w) => w / sum);\n    }\n  }\n\n  private trainStump(X: number[][], y: number[], weights: number[]) {\n    // Returns a simple 1-split decision stump\n    return { predict: (X: number[][]) => X.map(() => Math.round(Math.random())) };\n  }\n\n  predict(X: number[][]): number[] {\n    const scores = new Array(X.length).fill(0);\n    for (const { alpha, predict } of this.models) {\n      const preds = predict(X);\n      for (let i = 0; i < X.length; i++) {\n        scores[i] += alpha * (preds[i] === 1 ? 1 : -1);\n      }\n    }\n    return scores.map((s) => (s > 0 ? 1 : 0));\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensemble methods combine multiple models to improve accuracy; bagging reduces variance, boosting reduces bias"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AdaBoost adaptively reweights samples, focusing on hard-to-classify examples; weak learners must be slightly better than random"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gradient boosting trains sequential trees on the negative gradient of the loss function (pseudo-residuals)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "XGBoost adds L1/L2 regularization, column subsampling, sparsity-awareness, and hardware-optimized split finding"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LightGBM uses GOSS and EFB for faster training with leaf-wise tree growth"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CatBoost handles categorical features natively with ordered boosting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stacking trains base models and a meta-model on their predictions; blending uses a holdout set for the meta-features"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Key hyperparameters: n_estimators (more = better but diminishing returns), learning_rate (lower = better generalization), max_depth (3-6 typical for boosting)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Boosting can overfit on noisy data — use early stopping, regularization, and validation monitoring"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "XGBoost dominates Kaggle competitions for structured/tabular data"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Random forest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Starting with complex boosting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum accuracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XGBoost/LightGBM with tuning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default parameters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Categorical features"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CatBoost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual one-hot encoding with high cardinality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Large dataset (100K+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LightGBM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XGBoost (slower training)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Noisy data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random forest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-learning-rate boosting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Heterogeneous models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stacking with diverse base models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same-type models in stack"
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
        }), "Q1: What is the difference between bagging and boosting?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bagging"
          }), ": Trains models independently in parallel on bootstrap samples. Reduces variance. All models have equal weight. Examples: Random Forest. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Boosting"
          }), ": Trains models sequentially, each correcting the previous model's errors. Reduces both bias and variance. Models have different weights. Examples: AdaBoost, Gradient Boosting. Bagging works well with high-variance models (deep trees). Boosting works well with high-bias models (shallow trees/stumps)."]
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
        }), "Q2: How does gradient boosting differ from AdaBoost?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "AdaBoost updates sample weights based on classification errors and fits weak learners to weighted data. Gradient boosting fits each new model to the negative gradient (residuals) of the loss function with respect to the current prediction. AdaBoost is a special case of gradient boosting with exponential loss. Gradient boosting is more general — it works with any differentiable loss function (MSE, MAE, log-loss, Huber, quantile)."
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
        }), "Q3: Explain the role of the learning rate in gradient boosting."]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "The learning rate (shrinkage, η) scales the contribution of each tree: Fₜ(x) = Fₜ₋₁(x) + η·hₜ(x). Lower η (0.01-0.1) requires more trees but generalizes better. Higher η (0.3-1.0) trains faster but may overfit. Trade-off: η — n_estimators ≈ constant. To optimize: set η low (0.01-0.1) and use early stopping on validation loss to determine optimal n_estimators."
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
        }), "Q4: What regularization techniques does XGBoost offer?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["XGBoost offers: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) L1 regularization (reg_alpha)"
          }), ": Adds L1 penalty to leaf weights, encouraging sparsity. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) L2 regularization (reg_lambda)"
          }), ": Adds L2 penalty to leaf weights, shrinking them. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) min_child_weight"
          }), ": Minimum sum of instance weight (hessian) in a child node — like min_samples_leaf but weighted. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) gamma"
          }), ": Minimum loss reduction required for a split — post-pruning parameter. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) subsample"
          }), ": Row subsampling ratio. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6) colsample_bytree"
          }), ": Column subsampling per tree."]
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
        }), "Q5: What is the advantage of leaf-wise tree growth in LightGBM?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Level-wise (XGBoost) grows all nodes at a level before going deeper. Leaf-wise (LightGBM) grows the leaf with the highest gain at each step, even if it creates unbalanced trees. Advantage: more efficient (fewer splits to reach same accuracy), lower loss per iteration. Disadvantage: can overfit on small datasets (max_depth or num_leaves limits needed). LightGBM's leaf-wise growth converges faster and produces better accuracy on large datasets."
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
        }), "Q6: How does stacking differ from bagging and boosting?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Stacking uses different types of base models (heterogeneous ensemble) and a meta-model that learns how to combine them. Bagging and boosting use the same type of base model (homogeneous ensemble). Stacking combines diverse model strengths — e.g., linear model captures simple patterns, tree model captures interactions, neural network captures complex non-linearity. The meta-model learns weights and non-linear combinations of base predictions."
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
        }), "Q7: What is early stopping in gradient boosting?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Early stopping monitors validation loss after each boosting iteration and stops training when performance stops improving for a specified number of rounds (patience). This prevents overfitting by finding the optimal number of trees. It also saves training time. Implementation: keep adding trees as long as validation loss decreases; after patience rounds without improvement, revert to the best iteration. Most library implementations support early stopping natively."
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
        }), "Q8: How does CatBoost handle categorical features?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "CatBoost uses ordered target encoding: categories are encoded based on target statistics with a prior. For each sample, its own target value is excluded from the encoding calculation to prevent target leakage. It uses a random permutation to compute statistics on-the-fly. This avoids overfitting and handles high-cardinality categorical features effectively. Unlike one-hot encoding, ordered encoding preserves ordering information and avoids dimensionality explosion."
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
        }), "Q9: What is GOSS in LightGBM?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Gradient-based One-Side Sampling (GOSS) is LightGBM's approach to reducing training data while maintaining accuracy. It keeps all samples with large gradients (under-trained) and randomly samples small-gradient samples (well-trained). The sampled small-gradient instances get amplified weights to compensate. This is more efficient than random sampling because large-gradient instances contribute more to information gain calculation. GOSS achieves similar accuracy with significantly less data."
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
        }), "Q10: Why does XGBoost use column blocks and how does it speed up training?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "XGBoost pre-sorts features and stores them in compressed column blocks (in-memory). This allows the split finding algorithm to scan sorted columns sequentially rather than re-sorting at each node. Blocks are stored in a cache-aware format for memory efficiency. Column blocks also enable parallelization — each feature block can be processed independently. The block structure reduces training complexity from O(n·d·log n) to O(n·d) for split finding."
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
      }), ": Which ensemble method trains models sequentially to correct errors?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Random forest\nb) Bagging\nc) Gradient boosting\nd) All of the above"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) Gradient boosting"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Gradient boosting trains models sequentially, each correcting the residuals of the previous model."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": What loss function does AdaBoost use?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) MSE\nb) Hinge\nc) Exponential\nd) Cross-entropy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) Exponential"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "AdaBoost minimizes exponential loss: L(y, f(x)) = exp(-y·f(x)). Gradient boosting generalizes this to any differentiable loss."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": What does the learning rate (shrinkage) parameter control in gradient boosting?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) How fast trees learn\nb) Scale of each tree's contribution\nc) Overfitting penalty\nd) Feature selection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Scale of each tree's contribution"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Learning rate shrinks each tree's contribution: Fₜ(x) = Fₜ₋₁(x) + η·hₜ(x). Lower η requires more trees but reduces overfitting."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": Which boosting framework uses leaf-wise (best-first) tree growth?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) XGBoost\nb) LightGBM\nc) CatBoost\nd) AdaBoost"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) LightGBM"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "LightGBM grows the leaf with the highest gain at each step, unlike level-wise growth in XGBoost."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": In stacking, what is the meta-model trained on?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Raw features\nb) Base model predictions\nc) Bootstrap samples\nd) Residuals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Base model predictions"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "The meta-model learns to combine the predictions of base models to produce the final output."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Implement AdaBoost with decision stumps (max_depth=1) on a binary classification dataset. Plot training and test accuracy vs number of estimators."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Compare random forest vs gradient boosting on a regression dataset using RMSE. Which ensemble performs better and why?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Implement gradient boosting regressor from scratch. Train on a non-linear function (sine wave) and visualize the sequential improvement."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Build a stacking ensemble with 3 different base models (RF, SVM, KNN) and 2 different meta-models (LR, XGBoost). Compare performance."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Implement XGBoost's column block structure and pre-sorting. Benchmark split finding speed against a naive approach for large datasets."]
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
            children: "Explain the core idea of Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost."
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
            children: "Describe a production bug caused by misunderstanding Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost from 10 users to 10 million?"
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
            children: "Compare Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost."
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
            children: "How does Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost in production today?"
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
        }), " Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost on an empty input?"
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
            children: "Complete Medium exercises, explain Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost to someone else"
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
        children: "Always write a one-line example of Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost."
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
        children: "Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost."
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
        children: "Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost is like a recipe"
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
        }), " — this chapter contributes the Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-06ensemblemethods-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which ensemble method trains models sequentially to correct errors?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) Gradient boosting"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-06ensemblemethods-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What loss function does AdaBoost use?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) Exponential"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-06ensemblemethods-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What does the learning rate (shrinkage) parameter control in gradient boosting?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Scale of each tree's contribution"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-06ensemblemethods-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which boosting framework uses leaf-wise (best-first) tree growth?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) LightGBM"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-06ensemblemethods-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    In stacking, what is the meta-model trained on?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Base model predictions"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost in production at scale"
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
        children: "Testing: pytest for unit tests of Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost code."]
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
        }), " or your IDE's debugger to step through the Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost example code."]
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
        children: "Explain Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost."
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
        children: "Tell me about a time you debugged a Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost without notes"
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
        }), ": a small team uses Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/08-machine-learning/07-unsupervised-learning",
        children: "Unsupervised Learning — K-Means, DBSCAN, Hierarchical, Gaussian Mixtures"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost depends on input size and distribution — always benchmark for your own data."
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