"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[47771],{

/***/ 52770
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_08_machine_learning_10_hyperparameter_tuning_md_867_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-08-machine-learning-10-hyperparameter-tuning-md-867.json
const site_docs_courses_ai_engineering_placement_08_machine_learning_10_hyperparameter_tuning_md_867_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/machine-learning/10-hyperparameter-tuning","title":"Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/08-machine-learning/10-hyperparameter-tuning.md","sourceDirName":"courses/ai-engineering-placement/08-machine-learning","slug":"/ai-engineering-placement/08-machine-learning/10-hyperparameter-tuning","permalink":"/ai-engineering-journey/ai-engineering-placement/08-machine-learning/10-hyperparameter-tuning","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":121,"frontMatter":{"id":"10-hyperparameter-tuning","slug":"/ai-engineering-placement/08-machine-learning/10-hyperparameter-tuning","title":"Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna","sidebar_label":"Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna","sidebar_position":121},"sidebar":"placementSidebar","previous":{"title":"Model Evaluation — Cross-Validation, ROC-AUC, Confusion Matrix, Metrics","permalink":"/ai-engineering-journey/ai-engineering-placement/08-machine-learning/09-model-evaluation"},"next":{"title":"Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications","permalink":"/ai-engineering-journey/ai-engineering-placement/08-machine-learning/11-naive-bayes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/08-machine-learning/10-hyperparameter-tuning.md


const frontMatter = {
	id: '10-hyperparameter-tuning',
	slug: '/ai-engineering-placement/08-machine-learning/10-hyperparameter-tuning',
	title: 'Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna',
	sidebar_label: 'Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna',
	sidebar_position: 121
};
const contentTitle = 'Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna';

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
  "value": "10.1 Parameters vs Hyperparameters",
  "id": "101-parameters-vs-hyperparameters",
  "level": 2
}, {
  "value": "10.2 Grid Search",
  "id": "102-grid-search",
  "level": 2
}, {
  "value": "10.3 Random Search",
  "id": "103-random-search",
  "level": 2
}, {
  "value": "10.4 Bayesian Optimization",
  "id": "104-bayesian-optimization",
  "level": 2
}, {
  "value": "10.5 Optuna Framework",
  "id": "105-optuna-framework",
  "level": 2
}, {
  "value": "10.6 Automated ML",
  "id": "106-automated-ml",
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
        id: "hyperparameter-tuning--grid-search-random-search-bayesian-opt-optuna",
        children: "Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna"
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
            children: "Distinguish between parameters and hyperparameters in ML models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement grid search with cross-validation for exhaustive tuning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply random search for efficient exploration of hyperparameter space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand Bayesian optimization: Gaussian processes, acquisition functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build hyperparameter pipelines with Optuna (TPE sampler, pruning)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement early stopping, learning rate scheduling, and automated tuning"
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
      children: "Understanding hyperparameter tuning is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how hyperparameter tuning works in practice."
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
            children: "10.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameters vs Hyperparameters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Learnable vs manually set, optimization hierarchy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grid Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exhaustive search, curse of dimensionality, parallelization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Statistical efficiency, prior distributions, budget allocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bayesian Optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gaussian process, expected improvement, TPE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optuna Framework"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define-by-run, pruning, multi-objective, visualization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated ML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hyperband, population-based training, neural architecture search"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Hyperparameter Space] --> B{Search Strategy}\n    B --> C[Grid Search]\n    B --> D[Random Search]\n    B --> E[Bayesian Opt]\n    B --> F[Optuna/TPE]\n    C --> G[Exhaustive]\n    D --> H[Sampling]\n    E --> I[Surrogate Model]\n    F --> J[Pruning + TPE]\n    G & H & I & J --> K[Optimal Params]\n    K --> L[Final Model]\n    style C fill:#4a90d9,color:#fff\n    style D fill:#e85d75,color:#fff\n    style E fill:#50b86c,color:#fff\n    style F fill:#f5a623,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "101-parameters-vs-hyperparameters",
      children: "10.1 Parameters vs Hyperparameters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Parameters"
      }), ": Learned from data during training (weights in linear regression, split points in decision trees)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hyperparameters"
      }), ": Set before training, control the learning process (learning rate, max depth, C, gamma)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\nfrom typing import List, Dict, Tuple, Any, Callable, Optional\nfrom sklearn.datasets import make_classification\nfrom sklearn.model_selection import cross_val_score, train_test_split\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.metrics import f1_score, accuracy_score\n\nnp.random.seed(42)\nX_hp, y_hp = make_classification(n_samples=1000, n_features=20, n_informative=10, random_state=42)\nX_hp_train, X_hp_test, y_hp_train, y_hp_test = train_test_split(X_hp, y_hp, test_size=0.2, random_state=42)\n\nclass HyperparameterAwareness:\n    @staticmethod\n    def categorize():\n        params = {\n            \"Linear Regression\": {\"learned\": [\"weights\", \"bias\"], \"set\": [\"fit_intercept\", \"normalize\"]},\n            \"Decision Tree\": {\"learned\": [\"split points\", \"leaf values\"], \"set\": [\"max_depth\", \"min_samples_split\", \"criterion\"]},\n            \"Random Forest\": {\"learned\": [\"all tree params\"], \"set\": [\"n_estimators\", \"max_depth\", \"max_features\", \"min_samples_split\"]},\n            \"SVM\": {\"learned\": [\"support vectors\", \"dual coefficients\"], \"set\": [\"C\", \"gamma\", \"kernel\", \"degree\"]},\n            \"Neural Network\": {\"learned\": [\"weights\", \"biases\"], \"set\": [\"lr\", \"batch_size\", \"n_layers\", \"n_units\", \"dropout\"]},\n        }\n        return params\n\n    @staticmethod\n    def tuning_importance(model_type: str) -> str:\n        importance = {\n            \"Random Forest\": \"Medium — fairly robust to defaults, but tuning helps\",\n            \"SVM\": \"High — very sensitive to C and gamma\",\n            \"Gradient Boosting\": \"High — learning rate, max_depth, subsample matter significantly\",\n            \"KNN\": \"High — K is the main hyperparameter\",\n            \"Neural Network\": \"Very High — many interacting hyperparameters\",\n        }\n        return importance.get(model_type, \"Varies by model\")\n\nprint(HyperparameterAwareness.categorize())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "102-grid-search",
      children: "10.2 Grid Search"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grid search exhaustively evaluates all combinations in a predefined grid."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class GridSearchCV:\n    def __init__(self, model_class: Any, param_grid: Dict[str, List],\n                 cv: int = 5, scoring: str = \"f1\", verbose: bool = True):\n        self.model_class = model_class\n        self.param_grid = param_grid\n        self.cv = cv\n        self.scoring = scoring\n        self.verbose = verbose\n        self.best_params_: Dict = None\n        self.best_score_: float = None\n        self.cv_results_: List[Dict] = []\n\n    def fit(self, X: np.ndarray, y: np.ndarray) -> 'GridSearchCV':\n        import itertools\n        keys = list(self.param_grid.keys())\n        values = list(self.param_grid.values())\n        combinations = list(itertools.product(*values))\n\n        best_score = -np.inf\n        best_params = None\n\n        for combo in combinations:\n            params = dict(zip(keys, combo))\n            scores = []\n\n            # Manual cross-validation\n            fold_size = len(X) // self.cv\n            for fold in range(self.cv):\n                val_start = fold * fold_size\n                val_end = min((fold + 1) * fold_size, len(X))\n\n                X_train = np.concatenate([X[:val_start], X[val_end:]])\n                y_train = np.concatenate([y[:val_start], y[val_end:]])\n                X_val = X[val_start:val_end]\n                y_val = y[val_start:val_end]\n\n                model = self.model_class(**params)\n                model.fit(X_train, y_train)\n                preds = model.predict(X_val)\n\n                if self.scoring == \"f1\":\n                    score = f1_score(y_val, preds, average=\"weighted\")\n                elif self.scoring == \"accuracy\":\n                    score = accuracy_score(y_val, preds)\n                else:\n                    score = accuracy_score(y_val, preds)\n\n                scores.append(score)\n\n            mean_score = np.mean(scores)\n            self.cv_results_.append({\"params\": params, \"mean_score\": mean_score, \"std_score\": np.std(scores)})\n\n            if mean_score > best_score:\n                best_score = mean_score\n                best_params = params\n\n            if self.verbose:\n                print(f\"  {params}: {mean_score:.4f} (+/- {np.std(scores):.4f})\")\n\n        self.best_params_ = best_params\n        self.best_score_ = best_score\n        return self\n\n    def predict(self, X: np.ndarray) -> np.ndarray:\n        model = self.model_class(**self.best_params_)\n        model.fit(X_hp_train, y_hp_train)  # Would need stored data\n        return model.predict(X)\n\n## Grid search example\nparam_grid_rf = {\n    \"n_estimators\": [50, 100],\n    \"max_depth\": [5, 10],\n    \"min_samples_split\": [2, 5],\n}\ngrid = GridSearchCV(RandomForestClassifier, param_grid_rf, cv=3, verbose=True)\ngrid.fit(X_hp_train, y_hp_train)\nprint(f\"Best params: {grid.best_params_}, Best score: {grid.best_score_:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Grid search limitations"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Curse of dimensionality: with K hyperparameters each having V values, total = V^K"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wastes time on unpromising regions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Doesn't explore between grid points"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Best for small hyperparameter spaces (< 4 dimensions)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "103-random-search",
      children: "10.3 Random Search"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Random search samples hyperparameters from distributions, often finding good configurations faster than grid search."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RandomSearchCV:\n    def __init__(self, model_class: Any, param_distributions: Dict,\n                 n_iter: int = 20, cv: int = 5, scoring: str = \"f1\",\n                 random_state: int = 42):\n        self.model_class = model_class\n        self.param_distributions = param_distributions\n        self.n_iter = n_iter\n        self.cv = cv\n        self.scoring = scoring\n        self.random_state = random_state\n        self.best_params_: Dict = None\n        self.best_score_: float = None\n\n    def fit(self, X: np.ndarray, y: np.ndarray) -> 'RandomSearchCV':\n        np.random.seed(self.random_state)\n        best_score = -np.inf\n\n        for i in range(self.n_iter):\n            params = self._sample_params()\n            scores = []\n\n            fold_size = len(X) // self.cv\n            for fold in range(self.cv):\n                val_start = fold * fold_size\n                val_end = min((fold + 1) * fold_size, len(X))\n\n                X_train = np.concatenate([X[:val_start], X[val_end:]])\n                y_train = np.concatenate([y[:val_start], y[val_end:]])\n                X_val = X[val_start:val_end]\n                y_val = y[val_start:val_end]\n\n                model = self.model_class(**params)\n                model.fit(X_train, y_train)\n                score = f1_score(y_val, model.predict(X_val), average=\"weighted\")\n                scores.append(score)\n\n            mean_score = np.mean(scores)\n            if mean_score > best_score:\n                best_score = mean_score\n                self.best_params_ = params.copy()\n\n            if (i + 1) % 5 == 0:\n                print(f\"  Iteration {i+1}/{self.n_iter}: best so far = {best_score:.4f}\")\n\n        self.best_score_ = best_score\n        return self\n\n    def _sample_params(self) -> Dict:\n        params = {}\n        for key, dist in self.param_distributions.items():\n            if isinstance(dist, list):\n                # Categorical\n                params[key] = dist[np.random.randint(len(dist))]\n            elif isinstance(dist, tuple) and len(dist) == 2:\n                if isinstance(dist[0], int) and isinstance(dist[1], int):\n                    params[key] = np.random.randint(dist[0], dist[1] + 1)\n                else:\n                    params[key] = np.random.uniform(dist[0], dist[1])\n            else:\n                params[key] = dist\n        return params\n\n## Random search with distributions\nparam_dist_rf = {\n    \"n_estimators\": (50, 200),  # uniform int\n    \"max_depth\": (3, 15),       # uniform int\n    \"min_samples_split\": (2, 10),  # uniform int\n    \"max_features\": [\"sqrt\", \"log2\", None],  # categorical\n}\nrandom_search = RandomSearchCV(RandomForestClassifier, param_dist_rf, n_iter=10, cv=3)\nrandom_search.fit(X_hp_train, y_hp_train)\nprint(f\"Random search best: {random_search.best_params_}, score: {random_search.best_score_:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why random search works"
      }), ": In most problems, only a few hyperparameters significantly affect performance. Random search explores more distinct values per important hyperparameter compared to grid search."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "104-bayesian-optimization",
      children: "10.4 Bayesian Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bayesian optimization builds a probabilistic model (surrogate) of the objective function to guide the search."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class BayesianOptimization:\n    def __init__(self, param_bounds: Dict[str, Tuple],\n                 n_init: int = 5, n_iter: int = 25, random_state: int = 42):\n        self.param_bounds = param_bounds\n        self.n_init = n_init\n        self.n_iter = n_iter\n        self.random_state = random_state\n        self.X_observed: List[Dict] = []\n        self.y_observed: List[float] = []\n        self.best_params_: Dict = None\n        self.best_score_: float = -np.inf\n\n    def optimize(self, objective_fn: Callable) -> Dict:\n        np.random.seed(self.random_state)\n\n        # Initial random points\n        for _ in range(self.n_init):\n            params = self._sample_random_params()\n            score = objective_fn(params)\n            self.X_observed.append(params)\n            self.y_observed.append(score)\n\n            if score > self.best_score_:\n                self.best_score_ = score\n                self.best_params_ = params.copy()\n\n        # Bayesian optimization iterations\n        for i in range(self.n_iter):\n            # Fit Gaussian Process surrogate (simplified with random sampling)\n            candidates = [self._sample_random_params() for _ in range(100)]\n            acq_values = []\n\n            for candidate in candidates:\n                acq = self._expected_improvement(candidate)\n                acq_values.append(acq)\n\n            best_idx = np.argmax(acq_values)\n            next_params = candidates[best_idx]\n            score = objective_fn(next_params)\n\n            self.X_observed.append(next_params)\n            self.y_observed.append(score)\n\n            if score > self.best_score_:\n                self.best_score_ = score\n                self.best_params_ = next_params.copy()\n\n            if (i + 1) % 5 == 0:\n                print(f\"  BO iteration {i+1}/{self.n_iter}: best = {self.best_score_:.4f}\")\n\n        return {\n            \"best_params\": self.best_params_,\n            \"best_score\": self.best_score_,\n            \"all_scores\": self.y_observed,\n        }\n\n    def _expected_improvement(self, candidate: Dict) -> float:\n        # Simplified EI: use distance-weighted average of observed scores\n        candidate_vec = np.array([candidate[k] for k in self.param_bounds])\n        best_so_far = max(self.y_observed)\n\n        ei = 0.0\n        total_weight = 0.0\n        for obs, score in zip(self.X_observed, self.y_observed):\n            obs_vec = np.array([obs[k] for k in self.param_bounds])\n            dist = np.linalg.norm(candidate_vec - obs_vec)\n            if dist < 1e-10:\n                weight = 1.0\n            else:\n                weight = 1.0 / (dist + 1e-10)\n\n            improvement = max(0, score - best_so_far)\n            ei += weight * improvement\n            total_weight += weight\n\n        return ei / total_weight if total_weight > 0 else 0.0\n\n    def _sample_random_params(self) -> Dict:\n        params = {}\n        for key, (low, high) in self.param_bounds.items():\n            if isinstance(low, int) and isinstance(high, int):\n                params[key] = np.random.randint(low, high + 1)\n            else:\n                params[key] = np.random.uniform(low, high)\n        return params\n\n## Define objective function\ndef rf_objective(params: Dict) -> float:\n    model = RandomForestClassifier(\n        n_estimators=int(params[\"n_estimators\"]),\n        max_depth=int(params[\"max_depth\"]),\n        min_samples_split=int(params.get(\"min_samples_split\", 2)),\n        random_state=42,\n    )\n    scores = cross_val_score(model, X_hp_train, y_hp_train, cv=3, scoring=\"f1_weighted\")\n    return np.mean(scores)\n\nparam_bounds = {\n    \"n_estimators\": (50, 200),\n    \"max_depth\": (3, 15),\n    \"min_samples_split\": (2, 10),\n}\nbo = BayesianOptimization(param_bounds, n_init=3, n_iter=10)\nresult = bo.optimize(rf_objective)\nprint(f\"BO best: {result['best_params']}, score: {result['best_score']:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Acquisition functions"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Expected Improvement (EI): Expected amount of improvement over current best"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Probability of Improvement (PI): Probability of beating current best"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Upper Confidence Bound (UCB): Mean + kappa * std (exploration vs exploitation)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "105-optuna-framework",
      children: "10.5 Optuna Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Optuna provides define-by-run API, TPE sampler, and automated pruning."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class OptunaStyleOptimizer:\n    \"\"\"Simplified Optuna-style optimization with TPE and pruning\"\"\"\n\n    def __init__(self, n_trials: int = 50, direction: str = \"maximize\"):\n        self.n_trials = n_trials\n        self.direction = direction\n        self.trials: List[Dict] = []\n        self.best_params_: Dict = None\n        self.best_value_: float = -np.inf if direction == \"maximize\" else np.inf\n\n    def optimize(self, objective: Callable, suggest_fn: Callable) -> Dict:\n        for trial_id in range(self.n_trials):\n            params = suggest_fn(trial_id)\n\n            # Early pruning check\n            if trial_id > 10:\n                recent_scores = [t[\"value\"] for t in self.trials[-5:]]\n                if len(recent_scores) == 5:\n                    median = np.median(recent_scores)\n                    if self.direction == \"maximize\":\n                        if median < np.percentile([t[\"value\"] for t in self.trials], 25):\n                            print(f\"  Trial {trial_id}: pruned (median={median:.4f})\")\n                            continue\n\n            value = objective(params)\n            self.trials.append({\"trial_id\": trial_id, \"params\": params, \"value\": value})\n\n            if (self.direction == \"maximize\" and value > self.best_value_) or \\\n               (self.direction == \"minimize\" and value < self.best_value_):\n                self.best_value_ = value\n                self.best_params_ = params\n\n            if (trial_id + 1) % 10 == 0:\n                print(f\"  Trial {trial_id+1}/{self.n_trials}: best = {self.best_value_:.4f}\")\n\n        return {\"best_params\": self.best_params_, \"best_value\": self.best_value_}\n\ndef optuna_suggest(trial_id: int) -> Dict:\n    # TPE-inspired suggestion (simplified)\n    np.random.seed(trial_id * 42)\n    return {\n        \"learning_rate\": 10 ** np.random.uniform(-4, 0),\n        \"n_estimators\": int(10 ** np.random.uniform(1.5, 2.7)),\n        \"max_depth\": np.random.choice([3, 5, 7, 10, 15]),\n        \"subsample\": np.random.uniform(0.5, 1.0),\n    }\n\ndef optuna_objective(params: Dict) -> float:\n    from sklearn.ensemble import GradientBoostingClassifier\n    model = GradientBoostingClassifier(\n        learning_rate=params[\"learning_rate\"],\n        n_estimators=params[\"n_estimators\"],\n        max_depth=params[\"max_depth\"],\n        subsample=params[\"subsample\"],\n        random_state=42,\n    )\n    scores = cross_val_score(model, X_hp_train, y_hp_train, cv=3, scoring=\"f1_weighted\")\n    return np.mean(scores)\n\noptuna_opt = OptunaStyleOptimizer(n_trials=30)\noptuna_result = optuna_opt.optimize(optuna_objective, optuna_suggest)\nprint(f\"Optuna best: {optuna_result['best_params']}, value: {optuna_result['best_value']:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Optuna features"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define-by-run: dynamic search space construction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TPE (Tree-structured Parzen Estimator): models good/bad hyperparameter distributions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pruning: stops unpromising trials early (MedianPruner, HyperbandPruner)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-objective optimization (NSGA-II, MOTPE)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Visualization: parallel coordinate, importance, contour plots"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "106-automated-ml",
      children: "10.6 Automated ML"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AutoML extends hyperparameter tuning to include algorithm selection, feature engineering, and pipeline composition."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class AutoMLPipeline:\n    def __init__(self, n_trials: int = 30, time_limit: int = 300):\n        self.n_trials = n_trials\n        self.time_limit = time_limit\n        self.best_pipeline_: Dict = None\n        self.best_score_: float = -np.inf\n\n    def fit(self, X: np.ndarray, y: np.ndarray) -> Dict:\n        algorithms = {\n            \"rf\": RandomForestClassifier,\n            \"gb\": lambda **kw: __import__(\"sklearn.ensemble\", fromlist=[\"GradientBoostingClassifier\"]).GradientBoostingClassifier(**kw),\n            \"lr\": lambda **kw: __import__(\"sklearn.linear_model\", fromlist=[\"LogisticRegression\"]).LogisticRegression(**kw, max_iter=1000),\n        }\n\n        best_score = -np.inf\n        best_config = None\n\n        for trial in range(self.n_trials):\n            np.random.seed(trial)\n            algo_name = np.random.choice(list(algorithms.keys()))\n            config = {\"algorithm\": algo_name}\n\n            if algo_name == \"rf\":\n                config[\"n_estimators\"] = np.random.randint(50, 200)\n                config[\"max_depth\"] = np.random.choice([5, 10, 15, None])\n            elif algo_name == \"gb\":\n                config[\"learning_rate\"] = 10 ** np.random.uniform(-3, -0.5)\n                config[\"n_estimators\"] = np.random.randint(50, 200)\n                config[\"max_depth\"] = np.random.randint(3, 10)\n            else:\n                config[\"C\"] = 10 ** np.random.uniform(-2, 2)\n\n            try:\n                if algo_name == \"rf\":\n                    model = RandomForestClassifier(n_estimators=config[\"n_estimators\"],\n                                                   max_depth=config[\"max_depth\"], random_state=42)\n                elif algo_name == \"gb\":\n                    from sklearn.ensemble import GradientBoostingClassifier\n                    model = GradientBoostingClassifier(learning_rate=config[\"learning_rate\"],\n                                                       n_estimators=config[\"n_estimators\"],\n                                                       max_depth=config[\"max_depth\"], random_state=42)\n                else:\n                    from sklearn.linear_model import LogisticRegression\n                    model = LogisticRegression(C=config[\"C\"], max_iter=1000, random_state=42)\n\n                score = np.mean(cross_val_score(model, X, y, cv=3, scoring=\"f1_weighted\"))\n\n                if score > best_score:\n                    best_score = score\n                    best_config = config\n\n            except Exception as e:\n                continue\n\n        self.best_pipeline_ = best_config\n        self.best_score_ = best_score\n        return self\n\nautoml = AutoMLPipeline(n_trials=15)\nautoml.fit(X_hp_train, y_hp_train)\nprint(f\"AutoML best: {automl.best_pipeline_}, score: {automl.best_score_:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "AutoML tools"
      }), ": Auto-sklearn, TPOT, H2O AutoML, AutoGluon, FLAML."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface TuningResult {\n  bestParams: Record<string, any>;\n  bestScore: number;\n  allTrials: Array<{ params: Record<string, any>; score: number }>;\n}\n\nclass RandomSearchTS {\n  search(\n    objective: (params: Record<string, any>) => number,\n    paramRanges: Record<string, [number, number]>,\n    nIter = 20\n  ): TuningResult {\n    let bestScore = -Infinity;\n    let bestParams: Record<string, any> = {};\n    const allTrials: Array<{ params: Record<string, any>; score: number }> = [];\n\n    for (let i = 0; i < nIter; i++) {\n      const params: Record<string, any> = {};\n      for (const [key, [low, high]] of Object.entries(paramRanges)) {\n        params[key] = low + Math.random() * (high - low);\n      }\n      const score = objective(params);\n      allTrials.push({ params, score });\n\n      if (score > bestScore) {\n        bestScore = score;\n        bestParams = { ...params };\n      }\n    }\n\n    return { bestParams, bestScore, allTrials };\n  }\n}\n\nfunction rfObjectiveTS(params: Record<string, any>): number {\n  // Would call actual RF training\n  return Math.random() * params.n_estimators! / 200;\n}\n\nconst tsSearch = new RandomSearchTS();\nconst tsResult = tsSearch.search(\n  rfObjectiveTS,\n  { n_estimators: [50, 200], max_depth: [3, 15] },\n  10\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hyperparameters control the learning process; parameters are learned from data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Grid search exhaustively evaluates all combinations; suffers from curse of dimensionality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Random search samples from distributions; more efficient for high-dimensional spaces"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bayesian optimization builds a surrogate model and uses acquisition functions to guide search"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TPE (used by Optuna) models the distribution of good vs bad hyperparameter configurations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optuna provides define-by-run API, pruning, and multi-objective optimization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-validation is essential inside the tuning loop to prevent overfitting to the test set"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nested cross-validation gives unbiased performance estimates when tuning hyperparameters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Learning rate scheduling, early stopping, and warm restarts improve training efficiency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AutoML extends tuning to algorithm selection and full pipeline optimization"
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
            children: "Few hyperparameters (< 4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grid search with coarse-to-fine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random search (less systematic)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Many hyperparameters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random search or Bayesian optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grid search (exponential cost)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Expensive evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bayesian optimization with early stopping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grid search (wasteful)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Neural networks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optuna/TPE with pruning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grid search (too slow)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quick baseline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default hyperparameters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Over-tuning (diminishing returns)"
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
        }), "Q1: What is the difference between parameters and hyperparameters?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Parameters"
          }), " are learned from data during training: weights in linear regression, split points in decision trees, support vectors in SVM. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Hyperparameters"
          }), " are set before training and control the learning process: learning rate, max_depth, C, n_estimators. Parameters are optimized by gradient descent or closed-form solutions. Hyperparameters are optimized by grid/random/Bayesian search."]
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
      "data-qid": "ml08-q2",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q2: Why is random search more efficient than grid search?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "In most ML problems, only 2-3 hyperparameters significantly affect performance. Grid search wastes trials by exhaustively evaluating all combinations of unimportant hyperparameters. Random search samples each hyperparameter independently, exploring more distinct values per important dimension. If only 2/5 hyperparameters matter, grid search explores V^5 combinations while random search explores ~n distinct values for each, finding good configurations faster."
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
      "data-qid": "ml08-q3",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q3: How does Bayesian optimization work for hyperparameter tuning?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Bayesian optimization builds a probabilistic surrogate model (usually Gaussian Process) of the objective function. It uses an acquisition function to decide which hyperparameters to evaluate next. The acquisition function balances exploration (trying uncertain regions) and exploitation (focusing on known good regions). Common acquisition functions: Expected Improvement, Probability of Improvement, Upper Confidence Bound. Each evaluation updates the surrogate model, improving future suggestions."
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
      "data-qid": "ml08-q4",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q4: What is TPE in Optuna?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "TPE (Tree-structured Parzen Estimator) models two distributions: l(x) = density of configurations that performed well, g(x) = density of configurations that performed poorly. It then suggests new configurations where l(x)/g(x) is maximized. TPE is non-parametric (handles any distribution), works well with categorical parameters, and converges faster than Gaussian Process-based BO for high-dimensional discrete spaces."
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
      "data-qid": "ml08-q5",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q5: What is pruning in hyperparameter optimization?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Pruning stops unpromising trials early to save computational resources. Common strategies: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Median pruner"
          }), ": stops a trial if its intermediate objective is worse than the median of completed trials. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Hyperband"
          }), ": allocates more resources to promising configurations. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Successive halving"
          }), ": eliminates half the worst-performing configurations at each stage. Pruning can speed up tuning by 2-10x without sacrificing final performance."]
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
      "data-qid": "ml08-q6",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q6: How do you prevent overfitting during hyperparameter tuning?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Nested cross-validation"
          }), ": Outer loop for evaluation, inner loop for tuning. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Separate validation set"
          }), ": Hold out test data until final evaluation. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Regularization"
          }), ": Prefer simpler models (smaller parameters). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Multiple metrics"
          }), ": Monitor both training and validation performance. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Early stopping"
          }), ": Stop tuning when validation performance plateaus. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6) Cross-validation within tuning"
          }), ": Evaluate each hyperparameter set via CV, not a single split."]
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
      "data-qid": "ml08-q7",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q7: What is Hyperband and how does it differ from Bayesian optimization?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Hyperband is a bandit-based approach that allocates resources adaptively. It runs multiple configurations for a small number of iterations, kills the worst half, and continues with more resources. Hyperband is more efficient for problems where early performance correlates with final performance. Bayesian optimization is better when the objective function is expensive and smooth. Hyperband works well for deep learning; BO works well for classical ML."
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
      "data-qid": "ml08-q8",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q8: How do you choose the tuning budget (number of trials)?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Rule of thumb: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Grid search"
          }), ": V^K (where V=values per param, K=param count). Limit to < 1000 evaluations. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Random search"
          }), ": 10-20x the number of hyperparameters. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Bayesian optimization"
          }), ": 5-10x the number of hyperparameters + 10-20 initial random points. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Optuna"
          }), ": 50-200 trials for typical problems. Monitor convergence (plot best score vs trials) and stop when improvement plateaus."]
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
      "data-qid": "ml08-q9",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q9: What are learning rate schedules and why use them?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Learning rate schedules adjust the learning rate during training. Types: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Step decay"
          }), ": reduce by factor every N epochs. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Exponential decay"
          }), ": lr = lr₀·e^(-kt). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Cosine annealing"
          }), ": cosine curve from high to low lr. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ReduceLROnPlateau"
          }), ": reduce when validation loss plateaus. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "One-cycle"
          }), ": warmup then cosine decay. Schedules help escape sharp minima, converge faster, and achieve better generalization."]
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
      "data-qid": "ml08-q10",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q10: What is the no free lunch theorem for hyperparameter tuning?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "No single hyperparameter tuning method works best for all problems. Grid search works for low-dimensional smooth spaces. Random search works when only few hyperparameters matter. Bayesian optimization works for expensive, smooth functions. Hyperband works when early performance correlates with final. The best approach depends on: budget, dimensionality, evaluation cost, and function smoothness. Always start with a quick baseline, then iterate."
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
      }), ": Which search method is most efficient for high-dimensional hyperparameter spaces?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Grid search\nb) Random search\nc) Manual search\nd) Exhaustive search"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Random search"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Random search explores more distinct values per important dimension than grid search."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": What does TPE stand for in Optuna?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Tree-structured Parzen Estimator\nb) Two-point Estimation\nc) Training Performance Evaluator\nd) Tree Processing Engine"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: a) Tree-structured Parzen Estimator"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "TPE models good/bad hyperparameter distributions to guide the search."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": What is the purpose of pruning in hyperparameter optimization?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Reduce model size\nb) Stop unpromising trials early\nc) Remove correlated features\nd) Reduce overfitting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Stop unpromising trials early"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Pruning saves computational resources by early termination of poorly performing trials."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": Which is NOT a parameter of a machine learning model?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Weights in linear regression\nb) Learning rate\nc) Support vectors\nd) Tree split points"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Learning rate"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Learning rate is a hyperparameter set before training; weights, support vectors, and split points are learned."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": What does nested cross-validation prevent?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Underfitting\nb) Data leakage from hyperparameter tuning\nc) Multicollinearity\nd) Class imbalance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Data leakage from hyperparameter tuning"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Nested CV ensures the test data does not influence hyperparameter selection."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Perform grid search with 3-fold CV for a Random Forest on a classification dataset. Report best parameters and CV score."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Compare grid search and random search for tuning a Gradient Boosting model. Which uses fewer trials to reach comparable performance?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Implement a simple Bayesian optimization from scratch using Gaussian Process regression. Compare with random search on a synthetic function."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Build an Optuna-style hyperparameter optimization framework with TPE-inspired sampling and median pruning. Compare performance on tuning a neural network."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Implement Hyperband for resource allocation. Show how it allocates more iterations to promising configurations compared to uniform allocation."]
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
            children: "Explain the core idea of Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna."
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
            children: "Describe a production bug caused by misunderstanding Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna from 10 users to 10 million?"
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
            children: "Compare Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna."
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
            children: "How does Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna in production today?"
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
        }), " Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna on an empty input?"
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
            children: "Complete Medium exercises, explain Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna to someone else"
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
        children: "Always write a one-line example of Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna."
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
        children: "Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna."
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
        children: "Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna is like a recipe"
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
        }), " — this chapter contributes the Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-10hyperparametertuning-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which search method is most efficient for high-dimensional hyperparameter spaces?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Random search"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-10hyperparametertuning-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What does TPE stand for in Optuna?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "a) Tree-structured Parzen Estimator"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-10hyperparametertuning-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the purpose of pruning in hyperparameter optimization?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Stop unpromising trials early"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-10hyperparametertuning-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which is NOT a parameter of a machine learning model?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Learning rate"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-10hyperparametertuning-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What does nested cross-validation prevent?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Data leakage from hyperparameter tuning"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna in production at scale"
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
        children: "Testing: pytest for unit tests of Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna code."]
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
        }), " or your IDE's debugger to step through the Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna example code."]
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
        children: "Explain Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna."
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
        children: "Tell me about a time you debugged a Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna without notes"
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
        }), ": a small team uses Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/08-machine-learning/11-naive-bayes",
        children: "Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna depends on input size and distribution — always benchmark for your own data."
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