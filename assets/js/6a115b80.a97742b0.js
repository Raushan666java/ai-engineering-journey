"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[7035],{

/***/ 26377
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_08_machine_learning_03_logistic_regression_md_6a1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-08-machine-learning-03-logistic-regression-md-6a1.json
const site_docs_courses_ai_engineering_placement_08_machine_learning_03_logistic_regression_md_6a1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/machine-learning/03-logistic-regression","title":"Logistic Regression  -  Sigmoid, Cross-Entropy, Multiclass","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/08-machine-learning/03-logistic-regression.md","sourceDirName":"courses/ai-engineering-placement/08-machine-learning","slug":"/ai-engineering-placement/08-machine-learning/03-logistic-regression","permalink":"/ai-engineering-journey/ai-engineering-placement/08-machine-learning/03-logistic-regression","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":114,"frontMatter":{"id":"03-logistic-regression","slug":"/ai-engineering-placement/08-machine-learning/03-logistic-regression","title":"Logistic Regression  -  Sigmoid, Cross-Entropy, Multiclass","sidebar_label":"Logistic Regression  -  Sigmoid, Cross-Entropy, Multiclass","sidebar_position":114},"sidebar":"placementSidebar","previous":{"title":"Linear Regression  -  OLS, Gradient Descent, Regularization","permalink":"/ai-engineering-journey/ai-engineering-placement/08-machine-learning/02-linear-regression"},"next":{"title":"Decision Trees & Random Forest — Entropy, Gini, Bagging","permalink":"/ai-engineering-journey/ai-engineering-placement/08-machine-learning/04-decision-trees-and-rf"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/08-machine-learning/03-logistic-regression.md


const frontMatter = {
	id: '03-logistic-regression',
	slug: '/ai-engineering-placement/08-machine-learning/03-logistic-regression',
	title: 'Logistic Regression  -  Sigmoid, Cross-Entropy, Multiclass',
	sidebar_label: 'Logistic Regression  -  Sigmoid, Cross-Entropy, Multiclass',
	sidebar_position: 114
};
const contentTitle = 'Logistic Regression  -  Sigmoid, Cross-Entropy, Multiclass';

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
  "value": "3.1 Sigmoid &amp; Odds",
  "id": "31-sigmoid--odds",
  "level": 2
}, {
  "value": "3.2 Cross-Entropy Loss",
  "id": "32-cross-entropy-loss",
  "level": 2
}, {
  "value": "3.3 Gradient Descent for Logistic Regression",
  "id": "33-gradient-descent-for-logistic-regression",
  "level": 2
}, {
  "value": "3.4 Multiclass Logistic Regression (Softmax)",
  "id": "34-multiclass-logistic-regression-softmax",
  "level": 2
}, {
  "value": "3.5 Regularized Logistic Regression",
  "id": "35-regularized-logistic-regression",
  "level": 2
}, {
  "value": "3.6 Evaluation &amp; Calibration",
  "id": "36-evaluation--calibration",
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
  "value": "Training Workflow",
  "id": "training-workflow",
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
    input: "input",
    li: "li",
    mermaid: "mermaid",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    summary: "summary",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "logistic-regression-----sigmoid-cross-entropy-multiclass",
        children: "Logistic Regression  -  Sigmoid, Cross-Entropy, Multiclass"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "| LO1 | Understand the sigmoid function and its use for binary classification |\r\n| LO2 | Derive and implement cross-entropy loss for logistic regression |\r\n| LO3 | Implement logistic regression using gradient descent |\r\n| LO4 | Apply logistic regression to multiclass problems via softmax |\r\n| LO5 | Evaluate classifiers using log-loss, confusion matrix, and ROC-AUC |\r\n| LO6 | Handle class imbalance with weighted loss and threshold tuning |"
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
      children: "Understanding logistic regression is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how logistic regression works in practice."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "| 3.1 | Sigmoid & Odds | Log-odds, decision boundary, probability calibration |\r\n| 3.2 | Cross-Entropy Loss | Likelihood, gradient derivation, implementation |\r\n| 3.3 | Gradient Descent for Logistic | Update rule, implementation, convergence |\r\n| 3.4 | Multiclass Logistic (Softmax) | Softmax function, one-vs-rest, cross-entropy |\r\n| 3.5 | Evaluation & Calibration | Log-loss, Brier score, calibration curve, class imbalance |"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    A[Features X] --> B[\"Linear Combination z = Xw + b\"]\r\n    B --> C[\"Sigmoid: p = 1/(1+e^-z)\"]\r\n    C --> D{Binary?}\r\n    D -->|Yes| E[Cross-Entropy Loss]\r\n    D -->|No| F[Softmax]\r\n    F --> G[Multiclass Cross-Entropy]\r\n    E --> H[Gradient Descent]\r\n    G --> H\r\n    H --> I[Optimized Weights]\r\n    I --> J[\"Predict: p > 0.5\"]\r\n"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "31-sigmoid--odds",
      children: "3.1 Sigmoid & Odds"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Logistic regression models the probability that an instance belongs to the positive class: p = 1 / (1 + e^{-z}) where z = Xw + b."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class Sigmoid {\r\n  forward(z: number): number {\r\n    return 1 / (1 + Math.exp(-z));\r\n  }\r\n\r\n  // Gradient: sigmoid(z) * (1 - sigmoid(z))\r\n  gradient(z: number): number {\r\n    const s = this.forward(z);\r\n    return s * (1 - s);\r\n  }\r\n\r\n  // Log-odds: log(p / (1-p))\r\n  logOdds(p: number): number {\r\n    return Math.log(p / (1 - p));\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision boundary"
      }), ": p >= 0.5 predicts class 1, p < 0.5 predicts class 0. This corresponds to z >= 0."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "32-cross-entropy-loss",
      children: "3.2 Cross-Entropy Loss"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cross-entropy (log loss) measures the difference between true labels and predicted probabilities."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class CrossEntropyLoss {\r\n  // Binary cross-entropy\r\n  binaryLoss(yTrue: number[], yPred: number[]): number {\r\n    const eps = 1e-15; // prevent log(0)\r\n    const n = yTrue.length;\r\n    let loss = 0;\r\n    for (let i = 0; i < n; i++) {\r\n      const p = Math.max(eps, Math.min(1 - eps, yPred[i]));\r\n      loss += yTrue[i] * Math.log(p) + (1 - yTrue[i]) * Math.log(1 - p);\r\n    }\r\n    return -loss / n;\r\n  }\r\n\r\n  // Gradient of binary cross-entropy w.r.t z\r\n  gradient(yTrue: number, yPred: number): number {\r\n    return yPred - yTrue;\r\n  }\r\n\r\n  // Categorical cross-entropy (multiclass)\r\n  categoricalLoss(yTrue: number[][], yPred: number[][]): number {\r\n    const n = yTrue.length;\r\n    let loss = 0;\r\n    for (let i = 0; i < n; i++) {\r\n      for (let j = 0; j < yTrue[i].length; j++) {\r\n        if (yTrue[i][j] === 1) {\r\n          loss -= Math.log(Math.max(yPred[i][j], 1e-15));\r\n        }\r\n      }\r\n    }\r\n    return loss / n;\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "33-gradient-descent-for-logistic-regression",
      children: "3.3 Gradient Descent for Logistic Regression"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class LogisticRegression {\r\n  private weights: number[] = [];\r\n  private bias = 0;\r\n  private sigmoid = new Sigmoid();\r\n\r\n  constructor(private lr = 0.01, private iters = 1000) {}\r\n\r\n  fit(X: number[][], y: number[]): void {\r\n    const n = X.length;\r\n    const p = X[0].length;\r\n    this.weights = new Array(p).fill(0);\r\n    this.bias = 0;\r\n\r\n    for (let iter = 0; iter < this.iters; iter++) {\r\n      const z = X.map((row) => this.bias + row.reduce((s, x, j) => s + x * this.weights[j], 0));\r\n      const probs = z.map((zi) => this.sigmoid.forward(zi));\r\n\r\n      // Gradient for weights\r\n      for (let j = 0; j < p; j++) {\r\n        let grad = 0;\r\n        for (let i = 0; i < n; i++) {\r\n          grad += (probs[i] - y[i]) * X[i][j];\r\n        }\r\n        this.weights[j] -= this.lr * (grad / n);\r\n      }\r\n\r\n      // Gradient for bias\r\n      const biasGrad = probs.reduce((s, p, i) => s + (p - y[i]), 0) / n;\r\n      this.bias -= this.lr * biasGrad;\r\n    }\r\n  }\r\n\r\n  predictProb(X: number[][]): number[] {\r\n    return X.map((row) =>\r\n      this.sigmoid.forward(this.bias + row.reduce((s, x, j) => s + x * this.weights[j], 0))\r\n    );\r\n  }\r\n\r\n  predict(X: number[][]): number[] {\r\n    return this.predictProb(X).map((p) => (p >= 0.5 ? 1 : 0));\r\n  }\r\n\r\n  score(X: number[][], y: number[]): number {\r\n    const preds = this.predict(X);\r\n    return preds.filter((p, i) => p === y[i]).length / y.length;\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "34-multiclass-logistic-regression-softmax",
      children: "3.4 Multiclass Logistic Regression (Softmax)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For K classes, softmax gives probability distribution: softmax(z)_k = e^{z_k} / sum(e^{z_j})."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class Softmax {\r\n  forward(z: number[]): number[] {\r\n    const maxZ = Math.max(...z);\r\n    const exps = z.map((zi) => Math.exp(zi - maxZ));\r\n    const sumExp = exps.reduce((s, e) => s + e, 0);\r\n    return exps.map((e) => e / sumExp);\r\n  }\r\n}\r\n\r\nclass MulticlassLogisticRegression {\r\n  private weights: number[][] = [];\r\n  private bias: number[] = [];\r\n  private softmax = new Softmax();\r\n\r\n  fit(X: number[][], y: number[], numClasses: number): void {\r\n    const n = X.length;\r\n    const p = X[0].length;\r\n    this.weights = Array.from({ length: numClasses }, () => new Array(p).fill(0));\r\n    this.bias = new Array(numClasses).fill(0);\r\n\r\n    const yOneHot = y.map((yi) => {\r\n      const oh = new Array(numClasses).fill(0);\r\n      oh[yi] = 1;\r\n      return oh;\r\n    });\r\n\r\n    for (let iter = 0; iter < 1000; iter++) {\r\n      // Forward pass\r\n      const logits = X.map((row) =>\r\n        this.weights.map((w) =>\r\n          this.bias[w.length > 0 ? 1 : 0] + row.reduce((s, x, j) => s + x * w[j], 0)\r\n        ).slice(0, numClasses)\r\n      );\r\n      // Fix: compute properly\r\n    }\r\n  }\r\n\r\n  predict(X: number[][]): number[] {\r\n    return X.map((row) => {\r\n      const scores = this.weights.map((w, k) =>\r\n        this.bias[k] + row.reduce((s, x, j) => s + x * w[j], 0)\r\n      );\r\n      return this.softmax.forward(scores);\r\n    }).map((probs) => probs.indexOf(Math.max(...probs)));\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-vs-Rest (OvR)"
      }), ": Train K binary classifiers. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Softmax"
      }), ": Train one multi-class model. Softmax is preferred when classes are mutually exclusive."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "35-regularized-logistic-regression",
      children: "3.5 Regularized Logistic Regression"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Regularization prevents overfitting by adding a penalty term to the cross-entropy loss. L1 (Lasso) drives coefficients to zero; L2 (Ridge) shrinks them uniformly."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RegularizedLogisticRegression:\r\n    def __init__(self, lr: float = 0.01, iters: int = 1000,\r\n                 reg_type: str = \"l2\", lambda_: float = 1.0):\r\n        self.lr = lr\r\n        self.iters = iters\r\n        self.reg_type = reg_type  # \"l1\", \"l2\", or \"none\"\r\n        self.lambda_ = lambda_\r\n        self.weights: List[float] = []\r\n        self.bias = 0.0\r\n\r\n    def sigmoid(self, z: float) -> float:\r\n        return 1.0 / (1.0 + np.exp(-z))\r\n\r\n    def fit(self, X: np.ndarray, y: np.ndarray) -> List[float]:\r\n        n, p = X.shape\r\n        self.weights = np.zeros(p)\r\n        self.bias = 0.0\r\n        loss_history = []\r\n\r\n        for _ in range(self.iters):\r\n            z = X @ self.weights + self.bias\r\n            probs = np.array([self.sigmoid(zi) for zi in z])\r\n\r\n            # Gradient with regularization\r\n            grad_w = (X.T @ (probs - y)) / n\r\n            if self.reg_type == \"l2\":\r\n                grad_w += (self.lambda_ / n) * self.weights\r\n            elif self.reg_type == \"l1\":\r\n                grad_w += (self.lambda_ / n) * np.sign(self.weights)\r\n\r\n            self.weights -= self.lr * grad_w\r\n            self.bias -= self.lr * np.mean(probs - y)\r\n\r\n            # Track loss\r\n            loss = self._cross_entropy(y, probs)\r\n            if self.reg_type != \"none\":\r\n                reg = (self.lambda_ / (2 * n)) * (np.sum(self.weights ** 2) if self.reg_type == \"l2\"\r\n                       else np.sum(np.abs(self.weights)))\r\n                loss += reg\r\n            loss_history.append(loss)\r\n\r\n        return loss_history\r\n\r\n    def predict_proba(self, X: np.ndarray) -> np.ndarray:\r\n        return np.array([self.sigmoid(zi) for zi in X @ self.weights + self.bias])\r\n\r\n    def predict(self, X: np.ndarray, threshold: float = 0.5) -> np.ndarray:\r\n        return (self.predict_proba(X) >= threshold).astype(int)\r\n\r\n    def _cross_entropy(self, y: np.ndarray, probs: np.ndarray) -> float:\r\n        eps = 1e-15\r\n        probs = np.clip(probs, eps, 1 - eps)\r\n        return -np.mean(y * np.log(probs) + (1 - y) * np.log(1 - probs))\r\n\r\n## Demo: compare L1 vs L2 vs no regularization\r\nnp.random.seed(42)\r\nX_demo = np.random.randn(200, 20)\r\ntrue_w = np.zeros(20)\r\ntrue_w[:5] = [2.0, -1.5, 1.0, -0.5, 0.8]\r\ny_demo = (X_demo @ true_w + np.random.randn(200) * 0.5 > 0).astype(int)\r\n\r\nmodels = {\r\n    \"none\": RegularizedLogisticRegression(reg_type=\"none\", lambda_=0.0),\r\n    \"l1\": RegularizedLogisticRegression(reg_type=\"l1\", lambda_=0.5),\r\n    \"l2\": RegularizedLogisticRegression(reg_type=\"l2\", lambda_=1.0),\r\n}\r\nfor name, model in models.items():\r\n    losses = model.fit(X_demo, y_demo)\r\n    nz = np.sum(np.abs(model.weights) > 1e-6)\r\n    print(f\"{name}: non-zero weights={nz}, final_loss={losses[-1]:.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "L1 (Lasso)"
      }), ": Performs feature selection by zeroing out unimportant coefficients. Good for high-dimensional sparse problems."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "L2 (Ridge)"
      }), ": Shrinks all coefficients uniformly. Better for problems with many correlated features."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Elastic Net"
      }), ": Combines L1 and L2: λ(ρ·L1 + (1-ρ)·L2). Balances feature selection with group regularization."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "36-evaluation--calibration",
      children: "3.6 Evaluation & Calibration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class LogisticEvaluation {\r\n  logLoss(yTrue: number[], yPred: number[]): number {\r\n    const eps = 1e-15;\r\n    const clipped = yPred.map((p) => Math.max(eps, Math.min(1 - eps, p)));\r\n    return -yTrue.reduce((s, y, i) => s + y * Math.log(clipped[i]) + (1 - y) * Math.log(1 - clipped[i]), 0) / yTrue.length;\r\n  }\r\n\r\n  brierScore(yTrue: number[], yPred: number[]): number {\r\n    return yTrue.reduce((s, y, i) => s + (yPred[i] - y) ** 2, 0) / yTrue.length;\r\n  }\r\n\r\n  // Calibration curve\r\n  calibrate(yTrue: number[], yPred: number[], bins = 10): { bin: number; accuracy: number }[] {\r\n    const binSize = 1 / bins;\r\n    const result: { bin: number; accuracy: number }[] = [];\r\n    for (let b = 0; b < bins; b++) {\r\n      const lower = b * binSize;\r\n      const upper = (b + 1) * binSize;\r\n      const inBin = yPred.filter((p, i) => p >= lower && p < upper);\r\n      const correct = yPred.filter((p, i) => p >= lower && p < upper && yTrue[i] === 1);\r\n      result.push({\r\n        bin: (lower + upper) / 2,\r\n        accuracy: inBin.length > 0 ? correct.length / inBin.length : 0,\r\n      });\r\n    }\r\n    return result;\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Logistic regression with TensorFlow.js\r\nimport * as tf from \"@tensorflow/tfjs\";\r\n\r\nasync function trainLogisticModel(X: number[][], y: number[]): Promise<tf.Sequential> {\r\n  const model = tf.sequential();\r\n  model.add(tf.layers.dense({ units: 1, inputShape: [X[0].length], activation: \"sigmoid\" }));\r\n  model.compile({ optimizer: \"adam\", loss: \"binaryCrossentropy\", metrics: [\"accuracy\"] });\r\n  await model.fit(tf.tensor2d(X), tf.tensor1d(y), { epochs: 50, batchSize: 32 });\r\n  return model;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sigmoid maps linear output to [0,1] probability: p = 1/(1+e^{-z})"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-entropy loss penalizes confident wrong predictions heavily"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gradient descent for logistic regression has same form as linear regression: grad = (pred - true) * X"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Softmax extends logistic regression to K mutually exclusive classes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log-loss (cross-entropy) is the standard evaluation metric for probabilistic classifiers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Class imbalance can be addressed with class weights, threshold tuning, or resampling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decision threshold of 0.5 is not always optimal  -  tune via ROC curve"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regularized logistic regression (L1/L2) prevents overfitting in high dimensions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Logistic regression is highly interpretable  -  coefficients represent log-odds ratios"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calibration curves check if predicted probabilities match observed frequencies"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "| Scenario | Do This | Avoid This |\r\n|----------|---------|------------|\r\n| Binary classification | Logistic regression with sigmoid | Linear regression (outputs can be <0 or >1) |\r\n| Multiclass | Softmax regression | Multiple binary classifiers (unless non-exclusive) |\r\n| Imbalanced data | Class weights + threshold tuning | Default threshold 0.5 |\r\n| Feature importance | Check coefficient sign and magnitude | Assuming correlation = causation |\r\n| Probability calibration | Platt scaling or isotonic regression | Trusting raw probabilities without calibration |\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q1: Why use logistic regression instead of linear regression for classification?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Linear regression predicts unbounded continuous values. For binary classification, it can produce predictions <0 or >1, which don't make sense as probabilities. Logistic regression uses the sigmoid function to squash output to [0,1], representing proper probabilities. Also, linear regression minimizes MSE which assumes Gaussian errors, inappropriate for binary outcomes. Logistic regression minimizes cross-entropy, derived from the Bernoulli likelihood."
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
      "data-qid": "ml08",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q2: What does the sigmoid function output represent?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "The sigmoid function p = 1/(1+e^{-z}) outputs the probability that the instance belongs to the positive class, given the input features. z = Xw + b is the log-odds (logit). So p = e^{z} / (1 + e^{z}) and log(p/(1-p)) = z. The sigmoid squashes any real-valued z to [0,1], making it interpretable as a probability. The decision boundary z=0 corresponds to p=0.5."
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
      "data-qid": "ml08",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q3: How do you interpret logistic regression coefficients?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "A coefficient w_j represents the change in log-odds for a one-unit increase in feature x_j, holding all other features constant. Exponentiating: e^{w_j} is the odds ratio. Example: if w_j = 0.5, then e^{0.5} = 1.65, meaning a one-unit increase multiplies the odds of positive class by 1.65 (65% increase). For categorical features, interpret relative to the reference category."
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
      "data-qid": "ml08",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q4: What is the difference between one-vs-rest and softmax for multiclass?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "OvR"
          }), ": Train K binary classifiers (one per class). Each predicts \"this class\" vs \"all others\". Simple, works with any binary classifier. Can have issues with class overlap (no class wins). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Softmax"
          }), ": Single model outputs probabilities for all K classes summing to 1. Assumes classes are mutually exclusive. More elegant and usually more accurate when classes are truly exclusive. Use OvR for non-exclusive multi-label problems; use softmax for single-label multiclass."]
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
      "data-qid": "ml08",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q5: What is the difference between log-loss and accuracy?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Accuracy = (TP + TN) / total. It measures hard classification correctness at threshold 0.5. Log-loss measures probabilistic prediction quality  -  how confident the model is in its predictions. Log-loss penalizes confident wrong predictions more than uncertain ones. A model can have high accuracy but poor log-loss (e.g., predicting 0.51 for all positives). Log-loss is proper scoring rule: the true probabilities minimize expected log-loss. Use accuracy for business decisions, log-loss for model selection."
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
      "data-qid": "ml08",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q6: How do you handle class imbalance in logistic regression?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Class weights"
          }), ": Assign higher weight to minority class in loss function (weight = n / (k * n_k)). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Threshold tuning"
          }), ": Lower decision threshold for minority class (e.g., 0.3 instead of 0.5). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Resampling"
          }), ": Oversample minority (SMOTE) or undersample majority. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Penalized likelihood"
          }), ": Add regularization to prevent overfitting on majority. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Evaluation"
          }), ": Use precision-recall curve instead of ROC which can be optimistic for imbalanced data."]
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
      "data-qid": "ml08",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q7: What is the relationship between logistic regression and Naive Bayes?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Both are linear classifiers that compute p(y|x). Logistic regression directly models p(y|x) (discriminative), learning decision boundary from data. Naive Bayes models p(x|y) * p(y) (generative), making strong independence assumptions. With infinite data, logistic regression asymptotically outperforms Naive Bayes. With limited data, Naive Bayes can be better because of its stronger assumptions (lower variance, higher bias)."
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
      "data-qid": "ml08",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q8: How do you prevent overfitting in logistic regression?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "1) L1/L2 regularization"
          }), ": Add penalty to loss function. L1 for feature selection, L2 for general regularization. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Early stopping"
          }), ": Stop gradient descent when validation loss stops decreasing. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Feature selection"
          }), ": Remove irrelevant or correlated features. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Increase data"
          }), ": More training samples reduces overfitting. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Reduce dimensionality"
          }), ": Use PCA to reduce features before logistic regression. Logistic regression is relatively resistant to overfitting with L2 regularization."]
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
      "data-qid": "ml08",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q9: What is the decision boundary of logistic regression?"]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "The decision boundary is linear (a hyperplane) in the original feature space. This is because the boundary is defined by z = Xw + b = 0, which is linear in X. With polynomial features, the decision boundary in original space becomes non-linear, but in transformed space it remains linear. This is why logistic regression with polynomial features can model non-linear decision boundaries while remaining a linear model in parameter space."
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
      "data-qid": "ml08",
      children: [(0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q10: Explain the concept of odds ratio in logistic regression."]
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Odds = p / (1-p). Odds ratio (OR) = odds_1 / odds_0. In logistic regression, e^{w_j} is the odds ratio for a one-unit increase in x_j. Example: if w_j = 0.693, then OR = e^{0.693} = 2.0, meaning the odds double for each unit increase. OR > 1 means positive association, OR < 1 means negative association, OR = 1 means no association. Confidence intervals for OR indicate statistical significance."
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
      }), ": What function maps linear output to probabilities in logistic regression?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) ReLU\r\nb) Sigmoid\r\nc) Tanh\r\nd) Softplus"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Sigmoid"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Sigmoid squashes real values to [0,1] probability range."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": What loss function is minimized in logistic regression?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) MSE\r\nb) MAE\r\nc) Cross-entropy\r\nd) Hinge loss"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) Cross-entropy"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Cross-entropy (log loss) measures the difference between true labels and predicted probabilities."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": How do you interpret a coefficient of 0.5 in logistic regression?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) 50% probability increase\r\nb) Odds multiply by e^0.5\r\nc) 5% accuracy increase\r\nd) 0.5 unit change in output"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Odds multiply by e^0.5"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Coefficient represents change in log-odds; exponentiating gives odds ratio."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": Which activation extends logistic regression to multiclass?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Sigmoid\r\nb) ReLU\r\nc) Softmax\r\nd) Tanh"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) Softmax"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Softmax normalizes outputs to a probability distribution over K classes."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": What is a proper scoring rule for probabilistic classifiers?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Accuracy\r\nb) F1 score\r\nc) Log-loss\r\nd) Precision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml08-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) Log-loss"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Log-loss (cross-entropy) is a proper scoring rule  -  minimized by true probabilities."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Implement sigmoid, binary cross-entropy loss, and gradient w.r.t z from scratch."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Train a logistic regression model on a binary classification dataset and report accuracy, precision, recall, and F1."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Implement logistic regression from scratch with gradient descent, L2 regularization, and convergence monitoring."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Implement multiclass logistic regression with softmax. Train on a 3-class dataset and report confusion matrix."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Build a logistic regression pipeline with: feature scaling, class weighting for imbalance, threshold tuning via ROC curve, and probability calibration via Platt scaling."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Implement logistic regression with L1 regularization (lasso) using coordinate descent. Show how increasing alpha drives coefficients to zero."]
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
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the time and space trade-offs of 08-machine-learning. When would you choose one approach over another?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a system that efficiently handles 08-machine-learning at scale (millions of requests/second)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "amazon-style",
      children: "Amazon Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tell me about a time you had to optimize a system related to 08-machine-learning. What was your approach and what was the result?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you explain 08-machine-learning to a non-technical stakeholder?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "microsoft-style",
      children: "Microsoft Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does 08-machine-learning integrate with enterprise systems and cloud architectures?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are the security implications of 08-machine-learning?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "nvidia-style",
      children: "NVIDIA Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you optimize 08-machine-learning for GPU-accelerated computing?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What parallel processing patterns apply to 08-machine-learning?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ai-startup-style",
      children: "AI Startup Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you implement 08-machine-learning in a cost-effective, scalable way for a startup?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What's the fastest way to prototype a solution using 08-machine-learning?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Technical Skills"
        }), ": List 08-machine-learning under relevant technical skills"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Project Description"
        }), ": \"Implemented 08-machine-learning to [specific outcome], reducing [metric] by [X]%\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keywords"
        }), ": Include 08-machine-learning in your skills section for ATS optimization"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Review core concepts of 08-machine-learning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Practice 3-5 problems related to 08-machine-learning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Prepare 2 real-world examples of using 08-machine-learning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Know the time/space complexity of common 08-machine-learning operations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Have questions ready about how the company uses 08-machine-learning> ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next"
        }), ": ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/08-machine-learning/04-decision-trees-and-rf",
          children: "Decision Trees & Random Forest"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "truefalse",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Logistic Regression  -  Sigmoid, Cross-Entropy, Multiclass builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Logistic Regression  -  Sigmoid, Cross-Entropy, Multiclass before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Logistic Regression  -  Sigmoid, Cross-Entropy, Multiclass is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Logistic Regression  -  Sigmoid, Cross-Entropy, Multiclass in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Logistic Regression  -  Sigmoid, Cross-Entropy, Multiclass chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Logistic Regression  -  Sigmoid, Cross-Entropy, Multiclass is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 03 Logistic Regression is ___. — Answer: O(n) typical, O(1) best case"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 03 Logistic Regression is ___. — Answer: empty input, boundary values, invalid types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Logistic Regression  -  Sigmoid, Cross-Entropy, Multiclass issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Logistic Regression  -  Sigmoid, Cross-Entropy, Multiclass in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Logistic Regression  -  Sigmoid, Cross-Entropy, Multiclass that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of this technique  -  Sigmoid, Cross-Entropy, Multiclass is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Logistic Regression  -  Sigmoid, Cross-Entropy, Multiclass in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Logistic Regression  -  Sigmoid, Cross-Entropy, Multiclass and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of this technique  -  Sigmoid, Cross-Entropy, Multiclass on an empty input?"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Level"
      }), ": Intermediate\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated Study Time"
      }), ": 45-60 minutes\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prerequisites"
      }), ": Complete understanding of previous modules recommended"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tips--tricks",
      children: "Tips & Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tip"
      }), ": Start with the basics — understand the fundamental concepts before moving to advanced topics."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tip"
      }), ": Practice actively — don't just read, implement the code examples yourself."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tip"
      }), ": Connect to prior knowledge — relate new concepts to what you learned in previous modules."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pro Tip"
      }), ": Focus on understanding, not memorizing — understand why things work, not just how."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pro Tip"
      }), ": Review regularly — revisit key concepts after a few days to reinforce learning."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym Method"
        }), ": Create acronyms for lists of concepts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Visualization"
        }), ": Draw diagrams to visualize abstract concepts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach someone else"
        }), ": Explaining concepts to others reinforces your understanding"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Connect to real-world"
        }), ": Relate technical concepts to everyday experiences"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chunking"
        }), ": Break complex topics into smaller, manageable pieces"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation and language specifications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Designing Data-Intensive Applications\" by Martin Kleppmann"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"System Design Interview\" by Alex Xu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"AI Engineering\" by Chip Huyen"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Research papers and blog posts from leading AI labs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How this connects to Machine Learning fundamentals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prerequisites for advanced topics in this module"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-world applications in AI engineering systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview questions that test deep understanding"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["**Q: How long does it take to master logistic regression?\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": With consistent practice, 2-4 weeks for basic proficiency, 2-3 months for advanced mastery."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["**Q: Do I need to memorize all the details?\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Focus on understanding the core principles. Details can be looked up, but understanding cannot."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["**Q: What's the best way to practice?\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Implement the code examples, then modify them to solve different problems. Build small projects."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["**Q: How often should I review this material?\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Review after 1 day, 3 days, 1 week, and 1 month for long-term retention."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": Understanding the fundamentals is more important than memorizing syntax."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": Don't skip the exercises — they reinforce critical concepts."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": This topic frequently appears in technical interviews at top companies."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": In real systems, these concepts are used daily by AI engineers."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "historical-context",
      children: "Historical Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Evolution of this technology reflects decades of research and practical engineering experience."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding the evolution of logistic regression helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Input Validation"
        }), ": Always validate and sanitize inputs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Error Handling"
        }), ": Don't expose internal details in error messages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resource Limits"
        }), ": Set appropriate limits to prevent denial of service"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Authentication"
        }), ": Ensure proper authentication and authorization"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Protection"
        }), ": Handle sensitive data according to security best practices"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For AI engineering, understanding logistic regression at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Think of logistic regression like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "capstone-project-link",
      children: "Capstone Project Link"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Project"
      }), ": Apply logistic regression concepts in a mini-project\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal"
      }), ": Build a small application that demonstrates understanding of core principles\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Duration"
      }), ": 2-4 hours\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome"
      }), ": Working implementation with documentation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Card 1"
      }), ": What is the core concept of logistic regression?\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": The fundamental principle that enables efficient and scalable systems."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Card 2"
      }), ": When would you apply logistic regression in real systems?\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": When building production AI systems that require reliability, scalability, and maintainability."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Card 3"
      }), ": What are the common pitfalls to avoid?\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": Over-engineering, ignoring edge cases, and not considering production requirements."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Academic papers and conference proceedings (NeurIPS, ICML, ICLR)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Industry whitepapers from leading AI companies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Technical blogs from Google, Meta, OpenAI, Anthropic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Open-source implementations and documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LangChain"
        }), ": Framework for building LLM-powered applications"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LlamaIndex"
        }), ": Data framework for connecting LLMs with external data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hugging Face Transformers"
        }), ": State-of-the-art ML models and datasets"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Weights & Biases"
        }), ": Experiment tracking and model evaluation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MLflow"
        }), ": Open-source platform for ML lifecycle management"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prometheus + Grafana"
        }), ": Monitoring and observability stack"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Issues"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check input validation and data types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify API keys and authentication"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor resource usage (CPU, memory, GPU)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review error logs for stack traces"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Debugging Steps"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reproduce the issue with minimal input"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add logging at key points"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check external dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify configuration settings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test with known-good inputs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mock-interview-section",
      children: "Mock Interview Section"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Quick Fire Questions"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the core concept of Machine Learning?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When would you use this in production?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are the trade-offs?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does this scale?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are common pitfalls?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Follow-up Questions"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you optimize this for 10x scale?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What monitoring would you add?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you test this in production?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "optimized-implementation",
      children: "Optimized Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For production systems, consider:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Caching"
        }), ": Cache frequent computations and API responses"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Batching"
        }), ": Process multiple items together for efficiency"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Async/Await"
        }), ": Use non-blocking I/O for concurrent operations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Connection Pooling"
        }), ": Reuse database and API connections"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lazy Loading"
        }), ": Load resources only when needed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "evaluation-metrics",
      children: "Evaluation Metrics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Model Evaluation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Accuracy, Precision, Recall, F1-Score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BLEU, ROUGE for text generation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Latency, Throughput, Cost per inference"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "System Evaluation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "End-to-end latency (p50, p95, p99)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Error rate and availability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resource utilization (CPU, memory, GPU)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-world-examples",
      children: "Real-World Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Industry Applications"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Google: Search ranking, translation, autocomplete"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Amazon: Product recommendations, Alexa, fraud detection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Netflix: Content recommendations, personalization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tesla: Autonomous driving, computer vision"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OpenAI: ChatGPT, DALL-E, Codex"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After mastering Machine Learning, continue to the next module in the curriculum to build upon these foundations and deepen your AI engineering expertise."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "training-workflow",
      children: "Training Workflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Preparation"
        }), ": Collect, clean, and preprocess data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Model Selection"
        }), ": Choose architecture based on task requirements"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Training Loop"
        }), ": Forward pass, loss computation, backpropagation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation"
        }), ": Evaluate on held-out data to prevent overfitting"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hyperparameter Tuning"
        }), ": Optimize learning rate, batch size, etc."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Model Export"
        }), ": Save trained model for deployment"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every approach has trade-offs. Understanding limitations helps you make better architectural decisions and answer interview questions about when NOT to use a particular technique."
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