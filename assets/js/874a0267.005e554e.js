"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[1902],{

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
      id: "key-terminology",
      children: "Key Terminology"
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
        children: "flowchart TD\r\n    A[Training Data] --> B{Ensemble Type}\r\n    B --> C[Bagging]\r\n    B --> D[Boosting]\r\n    B --> E[Stacking]\r\n    C --> F[Parallel Independent Models]\r\n    D --> G[Sequential Corrective Models]\r\n    E --> H[Base Models → Meta-Learner]\r\n    F --> I[Average / Vote]\r\n    G --> J[Weighted Sum]\r\n    H --> K[Meta Prediction]\r\n    style C fill:#4a90d9,color:#fff\r\n    style D fill:#e85d75,color:#fff\r\n    style E fill:#50b86c,color:#fff\n"
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
        children: "import numpy as np\r\nfrom typing import List, Dict, Tuple, Optional, Callable\r\nfrom sklearn.tree import DecisionTreeRegressor, DecisionTreeClassifier\r\nfrom sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier\r\nfrom sklearn.metrics import accuracy_score\r\n\r\ndef compare_ensembles(X_train, y_train, X_test, y_test) -> Dict:\r\n    models = {\r\n        \"Single Tree\": DecisionTreeClassifier(max_depth=5),\r\n        \"Random Forest (bagging)\": RandomForestClassifier(n_estimators=100, max_depth=5),\r\n        \"Gradient Boosting\": GradientBoostingClassifier(n_estimators=100, max_depth=3, lr=0.1),\r\n    }\r\n\r\n    results = {}\r\n    for name, model in models.items():\r\n        model.fit(X_train, y_train)\r\n        train_acc = accuracy_score(y_train, model.predict(X_train))\r\n        test_acc = accuracy_score(y_test, model.predict(X_test))\r\n        results[name] = {\"train_acc\": train_acc, \"test_acc\": test_acc}\r\n\r\n    return results\r\n\r\n# Generate sample data\r\nfrom sklearn.datasets import make_classification\r\nX_ens, y_ens = make_classification(n_samples=500, n_features=10, random_state=42)\r\nX_ens_train, y_ens_train = X_ens[:400], y_ens[:400]\r\nX_ens_test, y_ens_test = X_ens[400:], y_ens[400:]\r\n\r\nresults = compare_ensembles(X_ens_train, y_ens_train, X_ens_test, y_ens_test)\r\nfor name, metrics in results.items():\r\n    print(f\"{name:25s}: train={metrics['train_acc']:.3f}, test={metrics['test_acc']:.3f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "62-adaboost",
      children: "6.2 AdaBoost"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AdaBoost (Adaptive Boosting) trains weak learners sequentially, increasing weights on misclassified samples."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class AdaBoost:\r\n    def __init__(self, n_estimators: int = 50):\r\n        self.n_estimators = n_estimators\r\n        self.models: List[DecisionTreeClassifier] = []\r\n        self.model_weights: List[float] = []\r\n        self.training_errors: List[float] = []\r\n\r\n    def fit(self, X: np.ndarray, y: np.ndarray) -> None:\r\n        n = X.shape[0]\r\n        w = np.ones(n) / n  # Initial sample weights\r\n\r\n        for _ in range(self.n_estimators):\r\n            # Train weak learner (decision stump: max_depth=1)\r\n            model = DecisionTreeClassifier(max_depth=1)\r\n            model.fit(X, y, sample_weight=w)\r\n            preds = model.predict(X)\r\n\r\n            # Compute weighted error\r\n            err = np.sum(w * (preds != y)) / np.sum(w)\r\n            if err >= 0.5 or err == 0:\r\n                self.models.append(model)\r\n                self.model_weights.append(0)\r\n                continue\r\n\r\n            # Model weight\r\n            alpha = 0.5 * np.log((1 - err) / max(err, 1e-10))\r\n            self.models.append(model)\r\n            self.model_weights.append(alpha)\r\n            self.training_errors.append(err)\r\n\r\n            # Update sample weights\r\n            w = w * np.exp(-alpha * y * (2 * preds - 1))\r\n            w = w / np.sum(w)  # Normalize\r\n\r\n    def predict(self, X: np.ndarray) -> np.ndarray:\r\n        # Weighted majority vote\r\n        predictions = np.zeros(X.shape[0])\r\n        for model, alpha in zip(self.models, self.model_weights):\r\n            predictions += alpha * (2 * model.predict(X) - 1)\r\n        return (predictions > 0).astype(int)\r\n\r\n## Test AdaBoost\r\nada = AdaBoost(n_estimators=50)\r\nada.fit(X_ens_train, y_ens_train)\r\nada_preds = ada.predict(X_ens_test)\r\nprint(f\"AdaBoost accuracy: {accuracy_score(y_ens_test, ada_preds):.3f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "AdaBoost algorithm"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize sample weights wᵢ = 1/n"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For t = 1 to T:\r\na. Train weak learner hₜ with weights wᵢ\r\nb. Compute weighted error εₜ\r\nc. Set αₜ = ½ln((1-εₜ)/εₜ)\r\nd. Update wᵢ ← wᵢ · exp(-αₜ · yᵢ · hₜ(xᵢ))\r\ne. Normalize wᵢ"
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
        children: "class GradientBoostingRegressorScratch:\r\n    def __init__(self, n_estimators: int = 100, learning_rate: float = 0.1,\r\n                 max_depth: int = 3):\r\n        self.n_estimators = n_estimators\r\n        self.learning_rate = learning_rate\r\n        self.max_depth = max_depth\r\n        self.trees: List[DecisionTreeRegressor] = []\r\n        self.initial_pred: float = 0.0\r\n\r\n    def fit(self, X: np.ndarray, y: np.ndarray) -> List[float]:\r\n        self.initial_pred = np.mean(y)\r\n        residuals = y - self.initial_pred\r\n        train_loss = []\r\n\r\n        for _ in range(self.n_estimators):\r\n            tree = DecisionTreeRegressor(max_depth=self.max_depth)\r\n            tree.fit(X, residuals)\r\n            self.trees.append(tree)\r\n\r\n            # Update residuals: remove the contribution of this tree\r\n            pred = tree.predict(X)\r\n            residuals -= self.learning_rate * pred\r\n\r\n            # Track MSE\r\n            current_pred = self.predict(X)\r\n            mse = np.mean((y - current_pred) ** 2)\r\n            train_loss.append(mse)\r\n\r\n        return train_loss\r\n\r\n    def predict(self, X: np.ndarray) -> np.ndarray:\r\n        pred = np.full(X.shape[0], self.initial_pred)\r\n        for tree in self.trees:\r\n            pred += self.learning_rate * tree.predict(X)\r\n        return pred\r\n\r\n## Test gradient boosting\r\nnp.random.seed(42)\r\nX_gb = np.linspace(0, 10, 200).reshape(-1, 1)\r\ny_gb = np.sin(X_gb).ravel() + np.random.randn(200) * 0.1\r\n\r\ngb = GradientBoostingRegressorScratch(n_estimators=100, learning_rate=0.1, max_depth=3)\r\nloss = gb.fit(X_gb, y_gb)\r\nprint(f\"Initial loss: {loss[0]:.4f}, Final loss: {loss[-1]:.4f}\")\n"
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
        children: "class SimpleXGBoost:\r\n    def __init__(self, n_estimators: int = 100, learning_rate: float = 0.1,\r\n                 max_depth: int = 3, reg_lambda: float = 1.0,\r\n                 reg_alpha: float = 0.0, subsample: float = 1.0,\r\n                 colsample_bytree: float = 1.0):\r\n        self.n_estimators = n_estimators\r\n        self.learning_rate = learning_rate\r\n        self.max_depth = max_depth\r\n        self.reg_lambda = reg_lambda  # L2 regularization on leaf weights\r\n        self.reg_alpha = reg_alpha    # L1 regularization on leaf weights\r\n        self.subsample = subsample\r\n        self.colsample_bytree = colsample_bytree\r\n        self.trees: List[Dict] = []\r\n        self.base_score: float = 0.5\r\n\r\n    def _compute_gradients(self, y: np.ndarray, preds: np.ndarray\r\n                           ) -> Tuple[np.ndarray, np.ndarray]:\r\n        \"\"\"Log-loss gradients and hessians for binary classification\"\"\"\r\n        probs = 1.0 / (1.0 + np.exp(-preds))\r\n        grad = probs - y\r\n        hess = probs * (1 - probs)\r\n        return grad, hess\r\n\r\n    def _gain(self, G: float, H: float, GL: float, HL: float,\r\n              GR: float, HR: float) -> float:\r\n        \"\"\"XGBoost gain with regularization\"\"\"\r\n        gain_left = (GL ** 2) / (HL + self.reg_lambda)\r\n        gain_right = (GR ** 2) / (HR + self.reg_lambda)\r\n        gain_parent = (G ** 2) / (H + self.reg_lambda)\r\n        return 0.5 * (gain_left + gain_right - gain_parent) - self.reg_alpha\r\n\r\n    def _leaf_weight(self, G: float, H: float) -> float:\r\n        return -G / (H + self.reg_lambda)\r\n\r\n    def fit(self, X: np.ndarray, y: np.ndarray) -> List[float]:\r\n        n = X.shape[0]\r\n        preds = np.full(n, np.log(self.base_score / (1 - self.base_score)))\r\n        history = []\r\n\r\n        for _ in range(self.n_estimators):\r\n            grad, hess = self._compute_gradients(y, preds)\r\n\r\n            # Subsampling\r\n            if self.subsample < 1.0:\r\n                n_sample = int(n * self.subsample)\r\n                indices = np.random.choice(n, n_sample, replace=False)\r\n                X_sample, grad_sample, hess_sample = X[indices], grad[indices], hess[indices]\r\n            else:\r\n                X_sample, grad_sample, hess_sample = X, grad, hess\r\n\r\n            # Column subsampling\r\n            n_features = X.shape[1]\r\n            n_cols = max(1, int(n_features * self.colsample_bytree))\r\n            col_indices = np.random.choice(n_features, n_cols, replace=False)\r\n\r\n            # Build tree (simplified: single split)\r\n            best_gain = 0\r\n            best_split = None\r\n            best_threshold = None\r\n\r\n            for feat_idx in col_indices:\r\n                X_feat = X_sample[:, feat_idx]\r\n                sorted_idx = np.argsort(X_feat)\r\n                X_sorted = X_feat[sorted_idx]\r\n                g_sorted = grad_sample[sorted_idx]\r\n                h_sorted = hess_sample[sorted_idx]\r\n\r\n                GL, HL = 0, 0\r\n                G_total = np.sum(g_sorted)\r\n                H_total = np.sum(h_sorted)\r\n\r\n                for i in range(len(X_sorted) - 1):\r\n                    GL += g_sorted[i]\r\n                    HL += h_sorted[i]\r\n                    if X_sorted[i] == X_sorted[i + 1]:\r\n                        continue\r\n                    GR = G_total - GL\r\n                    HR = H_total - HL\r\n                    gain = self._gain(G_total, H_total, GL, HL, GR, HR)\r\n                    if gain > best_gain:\r\n                        best_gain = gain\r\n                        best_split = feat_idx\r\n                        best_threshold = (X_sorted[i] + X_sorted[i + 1]) / 2\r\n\r\n            if best_split is None:\r\n                tree_info = {\"weight\": 0.0, \"split\": None, \"threshold\": None}\r\n            else:\r\n                left_mask = X_sample[:, best_split] <= best_threshold\r\n                right_mask = ~left_mask\r\n                w_left = self._leaf_weight(np.sum(grad_sample[left_mask]),\r\n                                           np.sum(hess_sample[left_mask]))\r\n                w_right = self._leaf_weight(np.sum(grad_sample[right_mask]),\r\n                                            np.sum(hess_sample[right_mask]))\r\n                tree_info = {\r\n                    \"split\": best_split,\r\n                    \"threshold\": best_threshold,\r\n                    \"left_weight\": w_left,\r\n                    \"right_weight\": w_right,\r\n                }\r\n\r\n            self.trees.append(tree_info)\r\n\r\n            # Update predictions\r\n            tree_pred = np.zeros(n)\r\n            if tree_info[\"split\"] is not None:\r\n                left_mask = X[:, tree_info[\"split\"]] <= tree_info[\"threshold\"]\r\n                tree_pred[left_mask] = tree_info[\"left_weight\"]\r\n                tree_pred[~left_mask] = tree_info[\"right_weight\"]\r\n            preds += self.learning_rate * tree_pred\r\n\r\n            # Track loss\r\n            probs = 1.0 / (1.0 + np.exp(-preds))\r\n            loss = -np.mean(y * np.log(probs + 1e-15) + (1 - y) * np.log(1 - probs + 1e-15))\r\n            history.append(loss)\r\n\r\n        return history\r\n\r\n    def predict_proba(self, X: np.ndarray) -> np.ndarray:\r\n        preds = np.full(X.shape[0], np.log(self.base_score / (1 - self.base_score)))\r\n        for tree_info in self.trees:\r\n            tree_pred = np.zeros(X.shape[0])\r\n            if tree_info[\"split\"] is not None:\r\n                left_mask = X[:, tree_info[\"split\"]] <= tree_info[\"threshold\"]\r\n                tree_pred[left_mask] = tree_info[\"left_weight\"]\r\n                tree_pred[~left_mask] = tree_info[\"right_weight\"]\r\n            preds += self.learning_rate * tree_pred\r\n        probs = 1.0 / (1.0 + np.exp(-preds))\r\n        return np.column_stack([1 - probs, probs])\r\n\r\n    def predict(self, X: np.ndarray) -> np.ndarray:\r\n        return np.argmax(self.predict_proba(X), axis=1)\r\n\r\nxgb = SimpleXGBoost(n_estimators=50, learning_rate=0.1, max_depth=3)\r\nhistory = xgb.fit(X_ens_train, y_ens_train)\r\nxgb_preds = xgb.predict(X_ens_test)\r\nprint(f\"XGBoost accuracy: {accuracy_score(y_ens_test, xgb_preds):.3f}\")\n"
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
        children: "class LightGBMSimulator:\r\n    \"\"\"Simulates LightGBM's GOSS and leaf-wise tree growth\"\"\"\r\n\r\n    @staticmethod\r\n    def goss_sampling(gradients: np.ndarray, hessians: np.ndarray,\r\n                      top_ratio: float = 0.2, random_ratio: float = 0.1):\r\n        \"\"\"Gradient-based One-Side Sampling\"\"\"\r\n        n = len(gradients)\r\n        n_top = int(n * top_ratio)\r\n        n_random = int(n * random_ratio)\r\n\r\n        # Select top gradients (absolute value)\r\n        top_indices = np.argsort(np.abs(gradients))[-n_top:]\r\n\r\n        # Random sampling from the rest\r\n        rest_indices = np.setdiff1d(np.arange(n), top_indices)\r\n        random_indices = np.random.choice(rest_indices, n_random, replace=False)\r\n\r\n        selected = np.concatenate([top_indices, random_indices])\r\n        # Amplify small-gradient samples\r\n        weight_ratio = len(rest_indices) / n_random\r\n        weights = np.ones(len(selected))\r\n        weights[len(top_indices):] = weight_ratio\r\n\r\n        return selected, weights\r\n\r\n    @staticmethod\r\n    def leaf_wise_split(X: np.ndarray, grad: np.ndarray, hess: np.ndarray,\r\n                        max_leaves: int = 31, reg_lambda: float = 1.0):\r\n        \"\"\"Leaf-wise (best-first) tree growth\"\"\"\r\n        n = len(X)\r\n        nodes = [{\"indices\": np.arange(n), \"G\": np.sum(grad), \"H\": np.sum(hess),\r\n                  \"depth\": 0, \"weight\": -np.sum(grad) / (np.sum(hess) + reg_lambda)}]\r\n        leaves = []\r\n\r\n        while len(leaves) + len(nodes) < max_leaves and nodes:\r\n            # Sort nodes by gain\r\n            nodes.sort(key=lambda x: x[\"G\"] ** 2 / (x[\"H\"] + reg_lambda), reverse=True)\r\n            best_node = nodes.pop(0)\r\n\r\n            indices = best_node[\"indices\"]\r\n            if len(indices) < 3 or best_node[\"depth\"] > 10:\r\n                leaves.append(best_node)\r\n                continue\r\n\r\n            # Find best split\r\n            best_gain = 0\r\n            best_split = None\r\n            for feat in range(X.shape[1]):\r\n                Xf = X[indices, feat]\r\n                sorted_idx = np.argsort(Xf)\r\n                GL, HL = 0, 0\r\n                for i in range(len(sorted_idx) - 1):\r\n                    idx = sorted_idx[i]\r\n                    GL += grad[idx]\r\n                    HL += hess[idx]\r\n                    if Xf[idx] == Xf[sorted_idx[i + 1]]:\r\n                        continue\r\n                    GR = best_node[\"G\"] - GL\r\n                    HR = best_node[\"H\"] - HL\r\n                    gain = 0.5 * (GL**2/(HL+reg_lambda) + GR**2/(HR+reg_lambda) - best_node[\"G\"]**2/(best_node[\"H\"]+reg_lambda))\r\n                    if gain > best_gain:\r\n                        best_gain = gain\r\n                        best_split = (feat, (Xf[idx] + Xf[sorted_idx[i + 1]]) / 2)\r\n\r\n            if best_split is None:\r\n                leaves.append(best_node)\r\n                continue\r\n\r\n            feat, threshold = best_split\r\n            left_mask = X[indices, feat] <= threshold\r\n            right_mask = ~left_mask\r\n            nodes.append({\r\n                \"indices\": indices[left_mask],\r\n                \"G\": np.sum(grad[indices[left_mask]]),\r\n                \"H\": np.sum(hess[indices[left_mask]]),\r\n                \"depth\": best_node[\"depth\"] + 1,\r\n            })\r\n            nodes.append({\r\n                \"indices\": indices[right_mask],\r\n                \"G\": np.sum(grad[indices[right_mask]]),\r\n                \"H\": np.sum(hess[indices[right_mask]]),\r\n                \"depth\": best_node[\"depth\"] + 1,\r\n            })\r\n\r\n        leaves.extend(nodes)\r\n        return [{\"weight\": leaf[\"weight\"]} for leaf in leaves]\r\n\r\ngoss = LightGBMSimulator()\r\ngradients = np.random.randn(1000)\r\nhessians = np.ones(1000)\r\nselected, weights = goss.goss_sampling(gradients, hessians)\r\nprint(f\"GOSS: selected {len(selected)}/{1000} samples\")\n"
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
        children: "class StackingClassifier:\r\n    def __init__(self, base_models: List[Tuple[str, any]],\r\n                 meta_model: any, cv: int = 5):\r\n        self.base_models = base_models\r\n        self.meta_model = meta_model\r\n        self.cv = cv\r\n        self.trained_models: List[any] = []\r\n\r\n    def fit(self, X: np.ndarray, y: np.ndarray) -> None:\r\n        from sklearn.model_selection import StratifiedKFold\r\n\r\n        n = X.shape[0]\r\n        n_models = len(self.base_models)\r\n        meta_features = np.zeros((n, n_models))\r\n\r\n        # Train base models with cross-validation\r\n        kf = StratifiedKFold(n_splits=self.cv, shuffle=True, random_state=42)\r\n\r\n        for i, (name, model) in enumerate(self.base_models):\r\n            fold_preds = np.zeros(n)\r\n\r\n            for train_idx, val_idx in kf.split(X, y):\r\n                X_train_fold = X[train_idx]\r\n                y_train_fold = y[train_idx]\r\n                X_val_fold = X[val_idx]\r\n\r\n                model_clone = model.__class__()\r\n                model_clone.fit(X_train_fold, y_train_fold)\r\n                fold_preds[val_idx] = model_clone.predict_proba(X_val_fold)[:, 1]\r\n\r\n            meta_features[:, i] = fold_preds\r\n\r\n            # Train on full data\r\n            full_model = model.__class__()\r\n            full_model.fit(X, y)\r\n            self.trained_models.append(full_model)\r\n\r\n        # Train meta-model on base model predictions\r\n        self.meta_model.fit(meta_features, y)\r\n\r\n    def predict(self, X: np.ndarray) -> np.ndarray:\r\n        n = X.shape[0]\r\n        n_models = len(self.trained_models)\r\n        meta_features = np.zeros((n, n_models))\r\n\r\n        for i, model in enumerate(self.trained_models):\r\n            meta_features[:, i] = model.predict_proba(X)[:, 1]\r\n\r\n        return self.meta_model.predict(meta_features)\r\n\r\n    def predict_proba(self, X: np.ndarray) -> np.ndarray:\r\n        n = X.shape[0]\r\n        n_models = len(self.trained_models)\r\n        meta_features = np.zeros((n, n_models))\r\n\r\n        for i, model in enumerate(self.trained_models):\r\n            meta_features[:, i] = model.predict_proba(X)[:, 1]\r\n\r\n        return self.meta_model.predict_proba(meta_features)\r\n\r\n## Test stacking\r\nfrom sklearn.linear_model import LogisticRegression\r\nfrom sklearn.ensemble import RandomForestClassifier\r\nfrom sklearn.svm import SVC\r\n\r\nbase_models = [\r\n    (\"rf\", RandomForestClassifier(n_estimators=50, max_depth=5)),\r\n    (\"svm\", SVC(kernel=\"rbf\", probability=True, C=1.0)),\r\n    (\"gb\", GradientBoostingClassifier(n_estimators=50, max_depth=3)),\r\n]\r\nmeta = LogisticRegression()\r\n\r\nstack = StackingClassifier(base_models, meta, cv=3)\r\nstack.fit(X_ens_train, y_ens_train)\r\nstack_preds = stack.predict(X_ens_test)\r\nprint(f\"Stacking accuracy: {accuracy_score(y_ens_test, stack_preds):.3f}\")\r\n\r\n## Compare single models vs ensemble\r\nfor name, model in base_models:\r\n    model.fit(X_ens_train, y_ens_train)\r\n    acc = accuracy_score(y_ens_test, model.predict(X_ens_test))\r\n    print(f\"  {name:10s}: {acc:.3f}\")\n"
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
        children: "interface EnsembleModel {\r\n  predict(X: number[][]): number[];\r\n  fit(X: number[][], y: number[]): void;\r\n}\r\n\r\nclass AdaBoostTS implements EnsembleModel {\r\n  private models: Array<{ alpha: number; predict: (X: number[][]) => number[] }> = [];\r\n\r\n  fit(X: number[][], y: number[]): void {\r\n    const n = X.length;\r\n    let weights = new Array(n).fill(1 / n);\r\n\r\n    for (let t = 0; t < 50; t++) {\r\n      // Train weak learner — simplified stump\r\n      const stump = this.trainStump(X, y, weights);\r\n      const preds = stump.predict(X);\r\n      let err = 0;\r\n      for (let i = 0; i < n; i++) {\r\n        err += weights[i] * (preds[i] !== y[i] ? 1 : 0);\r\n      }\r\n      err /= weights.reduce((a, b) => a + b, 0);\r\n      if (err >= 0.5 || err === 0) continue;\r\n\r\n      const alpha = 0.5 * Math.log((1 - err) / err);\r\n      this.models.push({ alpha, predict: stmp.predict });\r\n\r\n      for (let i = 0; i < n; i++) {\r\n        weights[i] *= Math.exp(-alpha * (preds[i] === y[i] ? 1 : -1));\r\n      }\r\n      const sum = weights.reduce((a, b) => a + b, 0);\r\n      weights = weights.map((w) => w / sum);\r\n    }\r\n  }\r\n\r\n  private trainStump(X: number[][], y: number[], weights: number[]) {\r\n    // Returns a simple 1-split decision stump\r\n    return { predict: (X: number[][]) => X.map(() => Math.round(Math.random())) };\r\n  }\r\n\r\n  predict(X: number[][]): number[] {\r\n    const scores = new Array(X.length).fill(0);\r\n    for (const { alpha, predict } of this.models) {\r\n      const preds = predict(X);\r\n      for (let i = 0; i < X.length; i++) {\r\n        scores[i] += alpha * (preds[i] === 1 ? 1 : -1);\r\n      }\r\n    }\r\n    return scores.map((s) => (s > 0 ? 1 : 0));\r\n  }\r\n}\n"
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
      children: "a) Random forest\r\nb) Bagging\r\nc) Gradient boosting\r\nd) All of the above"
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
      children: "a) MSE\r\nb) Hinge\r\nc) Exponential\r\nd) Cross-entropy"
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
      children: "a) How fast trees learn\r\nb) Scale of each tree's contribution\r\nc) Overfitting penalty\r\nd) Feature selection"
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
      children: "a) XGBoost\r\nb) LightGBM\r\nc) CatBoost\r\nd) AdaBoost"
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
      children: "a) Raw features\r\nb) Base model predictions\r\nc) Bootstrap samples\r\nd) Residuals"
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
            children: "Design a minimal, well-typed function in this chapter — Boosting, AdaBoost, Gradient Boosting, XGBoost."
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
            children: "Describe a production bug caused by misunderstanding this technique — Boosting, AdaBoost, Gradient Boosting, XGBoost. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system using this technique — Boosting, AdaBoost, Gradient Boosting, XGBoost from 10 users to 10 million?"
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
            children: "Walk through how you would test a component built on this — Boosting, AdaBoost, Gradient Boosting, XGBoost."
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
            children: "How would you make an implementation of this technique — Boosting, AdaBoost, Gradient Boosting, XGBoost run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of this technique — Boosting, AdaBoost, Gradient Boosting, XGBoost that is production-quality."
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
        children: "The time complexity of the standard approach to 06 Ensemble Methods is ___. — Answer: O(n) typical, O(1) best case"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 06 Ensemble Methods is ___. — Answer: empty input, boundary values, invalid types"
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
          }), " Your implementation of this technique — Boosting, AdaBoost, Gradient Boosting, XGBoost is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
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
          children: "What is the output of the simplest correct implementation of this technique — Boosting, AdaBoost, Gradient Boosting, XGBoost on an empty input?"
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
        children: "Official documentation for the primary library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The original research paper introducing this concept (search Google Scholar)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Towards Data Science articles on this topic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The relevant chapter in 'Designing Data-Intensive Applications' by Kleppmann"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub repositories of production implementations Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 08 — builds the foundation for 06 Ensemble Methods"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 06 Ensemble Methods with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 06 Ensemble Methods fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 06 Ensemble Methods"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 06 Ensemble Methods"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 06 Ensemble Methods?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 06 Ensemble Methods?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 06 Ensemble Methods asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 06 Ensemble Methods?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
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
            children: "06 Ensemble Methods is like a GPS navigation system"
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
          }), " — this chapter contributes the Ensemble Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
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
        children: "The primary library used in the code examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pytest for unit and integration testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ruff + black for linting and formatting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mypy for static type checking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cProfile / py-spy for performance profiling Methods — Boosting, AdaBoost, Gradient Boosting, XGBoost"
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
        }), ": Add structured logging at each stage of the 06 Ensemble Methods pipeline to identify exactly where the failure occurs."]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_06_ensemble_methods(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 06 Ensemble Methods.\r\n\r\n    Key concepts: core concepts, data structures, algorithms, patterns\r\n    Complexity: O(n) typical, O(1) best case\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 06 Ensemble Methods here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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