"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[5566],{

/***/ 21378
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_machine_learning_03_logistic_regression_md_7ff_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-machine-learning-03-logistic-regression-md-7ff.json
const site_docs_courses_machine_learning_03_logistic_regression_md_7ff_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/machine-learning/03-logistic-regression","title":"Chapter 3: Logistic Regression","description":"Previous Decision Trees","source":"@site/docs/courses/machine-learning/03-logistic-regression.md","sourceDirName":"courses/machine-learning","slug":"/machine-learning/03-logistic-regression","permalink":"/ai-engineering-journey/machine-learning/03-logistic-regression","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"03-logistic-regression","slug":"/machine-learning/03-logistic-regression","title":"Chapter 3: Logistic Regression","sidebar_label":"Chapter 3: Logistic Regression","sidebar_position":3},"sidebar":"course-machine-learning","previous":{"title":"Chapter 2: Linear Regression","permalink":"/ai-engineering-journey/machine-learning/02-linear-regression"},"next":{"title":"Chapter 4: Decision Trees","permalink":"/ai-engineering-journey/machine-learning/04-decision-trees"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/machine-learning/03-logistic-regression.md


const frontMatter = {
	id: '03-logistic-regression',
	slug: '/machine-learning/03-logistic-regression',
	title: 'Chapter 3: Logistic Regression',
	sidebar_label: 'Chapter 3: Logistic Regression',
	sidebar_position: 3
};
const contentTitle = 'Chapter 3: Logistic Regression';

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
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "Classification vs. Regression",
  "id": "classification-vs-regression",
  "level": 3
}, {
  "value": "The Sigmoid Function",
  "id": "the-sigmoid-function",
  "level": 3
}, {
  "value": "Odds and Log-Odds",
  "id": "odds-and-log-odds",
  "level": 3
}, {
  "value": "Decision Boundary",
  "id": "decision-boundary",
  "level": 3
}, {
  "value": "Cross-Entropy Loss (Log Loss)",
  "id": "cross-entropy-loss-log-loss",
  "level": 3
}, {
  "value": "Gradient Descent for Logistic Regression",
  "id": "gradient-descent-for-logistic-regression",
  "level": 3
}, {
  "value": "Confusion Matrix and Derived Metrics",
  "id": "confusion-matrix-and-derived-metrics",
  "level": 3
}, {
  "value": "ROC Curves and AUC",
  "id": "roc-curves-and-auc",
  "level": 3
}, {
  "value": "Multi-Class Classification",
  "id": "multi-class-classification",
  "level": 3
}, {
  "value": "Regularization for Logistic Regression",
  "id": "regularization-for-logistic-regression",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: LogisticRegression Class in TypeScript",
  "id": "example-1-logisticregression-class-in-typescript",
  "level": 3
}, {
  "value": "Example 2: Multi-Class with Softmax",
  "id": "example-2-multi-class-with-softmax",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "TypeScript Implementation: Logistic Regression, Confusion Matrix, and Classification Metrics",
  "id": "typescript-implementation-logistic-regression-confusion-matrix-and-classification-metrics",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Review Questions",
  "id": "review-questions",
  "level": 3
}, {
  "value": "Application Problems",
  "id": "application-problems",
  "level": 3
}, {
  "value": "Challenge Problem",
  "id": "challenge-problem",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    details: "details",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "chapter-3-logistic-regression",
        children: "Chapter 3: Logistic Regression"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/machine-learning/02-linear-regression",
          children: "Linear Regression"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/machine-learning/04-decision-trees",
          children: "Decision Trees"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand why linear regression fails for classification and how logistic regression solves the problem"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Derive the sigmoid function and interpret its output as class probabilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define and differentiate between odds, log-odds, and decision boundaries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement binary cross-entropy loss and gradient descent for logistic regression"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate classifiers using confusion matrices, precision, recall, F1-score, and ROC-AUC"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extend logistic regression to multi-class classification via softmax"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply L1 and L2 regularization to logistic regression"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Practical Takeaway"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Classification vs. Regression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LR outputs discrete probabilities not continuous values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use logistic (not linear) regression for yes/no problems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sigmoid Function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maps any real number to a value between 0 and 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output is interpretable as class probability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Odds and Log-Odds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log-odds is linear: $\\log(p/(1-p)) = \\mathbf{w}^T\\mathbf{x}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The model is linear in the log-odds space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Decision Boundary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threshold at $h_w(x) = 0.5$ separates classes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjust threshold to trade off precision and recall"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-Entropy Loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Penalizes confident wrong predictions heavily"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convex loss ensures reliable gradient descent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Confusion Matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TP, TN, FP, FN enable all classification metrics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always inspect the full matrix, not just accuracy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ROC-AUC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measures separability across all thresholds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threshold-independent evaluation metric"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-Class Extension"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Softmax generalizes sigmoid to K classes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use when predicting among three or more categories"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Regularization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents overfitting by penalizing large weights"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add L1 or L2 regularization to improve generalization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Binary Classification Problem] --> B[Sigmoid Function]\n    B --> C[Odds & Log-Odds]\n    C --> D[Decision Boundary]\n    D --> E[Cross-Entropy Loss]\n    E --> F[Gradient Descent Optimization]\n    F --> G[Probability Output]\n    G --> H[Decision Threshold]\n    H --> I[Class Prediction]\n    I --> J[Confusion Matrix]\n    J --> K[Precision / Recall / F1 / AUC]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "classification-vs-regression",
      children: "Classification vs. Regression"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Linear regression is designed for continuous outputs. Using it for classification has fundamental problems:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Output range"
        }), ": Predictions can fall outside $[0, 1]$, making them uninterpretable as probabilities"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sensitivity to outliers"
        }), ": Adding more positive examples far from the decision boundary shifts the line"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-convex loss"
        }), ": MSE with threshold-based classification creates a non-convex optimization landscape"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Logistic Regression solves these problems by passing the linear output through a non-linear squashing function (sigmoid) and using a convex loss (cross-entropy) designed for classification."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-sigmoid-function",
      children: "The Sigmoid Function"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The sigmoid (logistic) function maps any real-valued number to the $(0, 1)$ interval:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\sigma(z) = \\frac{1}{1 + e^{-z}}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where $z = \\mathbf{w}^T\\mathbf{x} = w_0 + w_1x_1 + \\dots + w_dx_d$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\sigma(0) = 0.5$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\sigma(z) \\to 1$ as $z \\to +\\infty$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\sigma(z) \\to 0$ as $z \\to -\\infty$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Derivative: $\\sigma'(z) = \\sigma(z)(1 - \\sigma(z))$ ? this simplifies gradient computation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The hypothesis outputs the probability of the positive class:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$h_w(x) = P(y=1 | x; w) = \\sigma(\\mathbf{w}^T\\mathbf{x})$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "odds-and-log-odds",
      children: "Odds and Log-Odds"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Odds"
      }), " are the ratio of the probability of an event happening to the probability of it not happening:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\text{Odds} = \\frac{p}{1-p}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For logistic regression:\n$$\\frac{p}{1-p} = \\frac{\\sigma(\\mathbf{w}^T\\mathbf{x})}{1 - \\sigma(\\mathbf{w}^T\\mathbf{x})} = e^{\\mathbf{w}^T\\mathbf{x}}$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Taking the natural log gives the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "log-odds"
      }), " (logit function):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\log\\left(\\frac{p}{1-p}\\right) = \\mathbf{w}^T\\mathbf{x}$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This reveals that logistic regression is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "linear in the log-odds space"
      }), " ? each unit increase in $x_j$ multiplies the odds by $e^{w_j}$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "decision-boundary",
      children: "Decision Boundary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The model predicts a class by comparing the probability to a threshold, typically 0.5:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\hat{y} = \\begin{cases} 1 & \\text{if } h_w(x) \\geq 0.5 \\ 0 & \\text{if } h_w(x) < 0.5 \\end{cases}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Since $h_w(x) \\geq 0.5 \\iff \\mathbf{w}^T\\mathbf{x} \\geq 0$, the decision boundary is $\\mathbf{w}^T\\mathbf{x} = 0$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For a 2D problem with $z = w_0 + w_1x_1 + w_2x_2$, the boundary is the line:\n$$x_2 = -\\frac{w_0}{w_2} - \\frac{w_1}{w_2}x_1$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Threshold tuning"
      }), ": Changing the threshold from 0.5 to a lower value increases recall but decreases precision. In medical screening (detect disease), a low threshold (0.3) minimizes false negatives. In spam detection (avoid false alarms), a high threshold (0.7) minimizes false positives."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"Decision Threshold Effects\"\n        A[Threshold = 0.5] --> B[Balanced P and R]\n        C[Threshold = 0.3] --> D[High Recall, Low Precision]\n        E[Threshold = 0.7] --> F[High Precision, Low Recall]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-entropy-loss-log-loss",
      children: "Cross-Entropy Loss (Log Loss)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Mean Squared Error is unsuitable for logistic regression because it creates a non-convex loss surface (due to the sigmoid non-linearity). Instead, we use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Binary Cross-Entropy"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$J(w) = -\\frac{1}{n} \\sum_{i=1}^{n} \\left[ y^{(i)} \\log(h_w(x^{(i)})) + (1 - y^{(i)}) \\log(1 - h_w(x^{(i)})) \\right]$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intuition"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When $y=1$: $J = -\\log(h_w(x))$. If $h_w(x) \\to 0$, the loss $\\to \\infty$ (very bad). If $h_w(x) \\to 1$, the loss $\\to 0$ (perfect)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When $y=0$: $J = -\\log(1 - h_w(x))$. If $h_w(x) \\to 1$, the loss $\\to \\infty$. If $h_w(x) \\to 0$, the loss $\\to 0$."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The gradient of cross-entropy with respect to weights has a surprisingly simple form:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\frac{\\partial J}{\\partial w_j} = \\frac{1}{n} \\sum_{i=1}^{n} (h_w(x^{(i)}) - y^{(i)}) x_j^{(i)}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is identical to the gradient of MSE for linear regression! The difference lies in $h_w(x)$ being the sigmoid-transformed value instead of the linear value."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gradient-descent-for-logistic-regression",
      children: "Gradient Descent for Logistic Regression"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The update rule:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$w_j := w_j - \\alpha \\frac{1}{n} \\sum_{i=1}^{n} (h_w(x^{(i)}) - y^{(i)}) x_j^{(i)}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With L2 regularization (Ridge), the cost function becomes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$J(w) = -\\frac{1}{n} \\sum_{i=1}^{n} \\left[ y^{(i)} \\log(h_w(x^{(i)})) + (1 - y^{(i)}) \\log(1 - h_w(x^{(i)})) \\right] + \\frac{\\lambda}{2n} \\sum_{j=1}^{d} w_j^2$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "confusion-matrix-and-derived-metrics",
      children: "Confusion Matrix and Derived Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The confusion matrix summarizes classification results:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "Predicted Positive"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Predicted Negative"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Actual Positive"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "True Positive (TP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "False Negative (FN)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Actual Negative"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "False Positive (FP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "True Negative (TN)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Accuracy"
      }), ": $\\frac{TP + TN}{TP + TN + FP + FN}$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Precision"
      }), " (Positive Predictive Value): $\\frac{TP}{TP + FP}$ ? \"How many predicted positives are actually positive?\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recall"
      }), " (Sensitivity, True Positive Rate): $\\frac{TP}{TP + FN}$ ? \"How many actual positives did we catch?\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Specificity"
      }), " (True Negative Rate): $\\frac{TN}{TN + FP}$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "F1-Score"
      }), ": $2 \\times \\frac{Precision \\times Recall}{Precision + Recall}$ ? harmonic mean of precision and recall"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "F-beta Score"
      }), ": $(1 + \\beta^2) \\frac{Precision \\times Recall}{\\beta^2 \\times Precision + Recall}$ ? weights recall by $\\beta$ times more than precision"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Confusion Matrix] --> B[Accuracy]\n    A --> C[Precision = TP / TP+FP]\n    A --> D[Recall = TP / TP+FN]\n    C --> E[F1 = 2 * P*R / P+R]\n    D --> E\n    B --> F[Problem: Misleading on imbalanced data]\n    E --> G[Preferred for imbalanced classification]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "roc-curves-and-auc",
      children: "ROC Curves and AUC"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Receiver Operating Characteristic (ROC)"
      }), " curve plots the True Positive Rate (Recall) against the False Positive Rate (1 - Specificity) across all classification thresholds."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A perfect classifier has TPR = 1, FPR = 0 (top-left corner)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A random classifier follows the diagonal (TPR = FPR)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The closer the curve is to the top-left, the better"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Area Under the ROC Curve (AUC)"
      }), " summarizes the curve as a single number:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AUC = 0.5: Random guessing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AUC = 0.7-0.8: Acceptable discrimination"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AUC = 0.8-0.9: Excellent discrimination"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AUC = 1.0: Perfect separation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "AUC interpretation"
      }), ": The probability that a randomly chosen positive example receives a higher model score than a randomly chosen negative example."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph \"ROC Curve Space\"\n        A[TPR = Recall] -- y-axis --> B\n        C[FPR = 1 - Specificity] -- x-axis --> B\n        B[ROC Curve] --> D[AUC = Area Under Curve]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multi-class-classification",
      children: "Multi-Class Classification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-vs-Rest (OvR)"
      }), ": Train $K$ binary classifiers (one per class vs. all others). Predict the class with the highest confidence score. Used by sklearn's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LogisticRegression(multi_class='ovr')"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Softmax Regression (Multinomial Logistic Regression)"
      }), ": Generalizes the sigmoid to $K$ classes:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["$$P(y = k | x; W) = \\frac{e^{\\mathbf{w}", (0,jsx_runtime.jsx)(_components.em, {
        children: "k^T \\mathbf{x}}}{\\sum"
      }), "{j=1}^{K} e^{\\mathbf{w}_j^T \\mathbf{x}}}$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The softmax function produces a valid probability distribution ($\\sum P(y=k) = 1$, each probability $\\in [0, 1]$)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The loss function for softmax regression is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Categorical Cross-Entropy"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$J(W) = -\\frac{1}{n} \\sum_{i=1}^{n} \\sum_{k=1}^{K} \\mathbf{1}{y^{(i)} = k} \\log P(y^{(i)} = k | x^{(i)}; W)$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "regularization-for-logistic-regression",
      children: "Regularization for Logistic Regression"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Same principles as linear regression:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "L2 (Ridge)"
        }), ": Adds $\\frac{\\lambda}{2n} \\sum |w_j|^2$ ? prevents any single feature from dominating"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "L1 (Lasso)"
        }), ": Adds $\\frac{\\lambda}{n} \\sum |w_j|$ ? drives irrelevant feature weights to zero"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The $C$ parameter in sklearn's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LogisticRegression"
      }), " is the inverse of regularization strength: $C = 1/\\lambda$. Smaller $C$ = stronger regularization."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Logistic regression uses the sigmoid function to convert linear outputs into probabilities and cross-entropy loss to optimize classification decisions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " The decision boundary is defined by $\\mathbf{w}^T\\mathbf{x} = 0$; changing the classification threshold (e.g., from 0.5 to 0.3) alters precision and recall without retraining the model."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-logisticregression-class-in-typescript",
      children: "Example 1: LogisticRegression Class in TypeScript"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * Binary Logistic Regression with:\n * - Sigmoid activation\n * - Binary cross-entropy loss\n * - Gradient descent optimization\n * - L2 regularization\n * - Confusion matrix and derived metrics\n */\nclass LogisticRegression {\n    private weights: number[] = [];\n    private bias: number = 0;\n\n    constructor(\n        private learningRate: number = 0.01,\n        private epochs: number = 1000,\n        private lambda: number = 0.0\n    ) {}\n\n    private sigmoid(z: number): number {\n        return 1 / (1 + Math.exp(-z));\n    }\n\n    private sigmoidVector(z: number[]): number[] {\n        return z.map(v => this.sigmoid(v));\n    }\n\n    fit(X: number[][], y: number[]): number[] {\n        const n = X.length;\n        const d = X[0].length;\n        this.weights = Array(d).fill(0);\n        let losses: number[] = [];\n\n        for (let epoch = 0; epoch < this.epochs; epoch++) {\n            const logits = X.map(row =>\n                this.bias + row.reduce((sum, xi, j) => sum + xi * this.weights[j], 0)\n            );\n            const probs = this.sigmoidVector(logits);\n\n            // Cross-entropy loss\n            let loss = 0;\n            for (let i = 0; i < n; i++) {\n                loss -= y[i] * Math.log(probs[i] + 1e-15) + (1 - y[i]) * Math.log(1 - probs[i] + 1e-15);\n            }\n            loss = loss / n;\n            // Add L2 regularization term\n            const regTerm = (this.lambda / (2 * n)) * this.weights.reduce((s, w) => s + w * w, 0);\n            loss += regTerm;\n            losses.push(loss);\n\n            // Gradient descent\n            const gradBias = (1 / n) * probs.reduce((sum, p, i) => sum + (p - y[i]), 0);\n            const gradWeights = Array(d).fill(0);\n            for (let j = 0; j < d; j++) {\n                for (let i = 0; i < n; i++) {\n                    gradWeights[j] += (probs[i] - y[i]) * X[i][j];\n                }\n                gradWeights[j] = gradWeights[j] / n + (this.lambda / n) * this.weights[j];\n            }\n\n            this.bias -= this.learningRate * gradBias;\n            for (let j = 0; j < d; j++) {\n                this.weights[j] -= this.learningRate * gradWeights[j];\n            }\n\n            if (epoch % 200 === 0) {\n                console.log(`Epoch ${epoch}, Loss: ${loss.toFixed(4)}`);\n            }\n        }\n        return losses;\n    }\n\n    predictProbability(X: number[][]): number[] {\n        return X.map(row =>\n            this.sigmoid(this.bias + row.reduce((sum, xi, j) => sum + xi * this.weights[j], 0))\n        );\n    }\n\n    predict(X: number[][], threshold: number = 0.5): number[] {\n        return this.predictProbability(X).map(p => (p >= threshold ? 1 : 0));\n    }\n\n    confusionMatrix(yTrue: number[], yPred: number[]): {\n        tp: number; tn: number; fp: number; fn: number;\n        accuracy: number; precision: number; recall: number;\n        f1: number; specificity: number;\n    } {\n        let tp = 0, tn = 0, fp = 0, fn = 0;\n        for (let i = 0; i < yTrue.length; i++) {\n            if (yTrue[i] === 1 && yPred[i] === 1) tp++;\n            else if (yTrue[i] === 0 && yPred[i] === 0) tn++;\n            else if (yTrue[i] === 0 && yPred[i] === 1) fp++;\n            else if (yTrue[i] === 1 && yPred[i] === 0) fn++;\n        }\n        const accuracy = (tp + tn) / (tp + tn + fp + fn);\n        const precision = tp / (tp + fp + 1e-15);\n        const recall = tp / (tp + fn + 1e-15);\n        const f1 = 2 * (precision * recall) / (precision + recall + 1e-15);\n        const specificity = tn / (tn + fp + 1e-15);\n        return { tp, tn, fp, fn, accuracy, precision, recall, f1, specificity };\n    }\n\n    rocAUC(yTrue: number[], yScore: number[]): number {\n        const pairs = yTrue.map((y, i) => ({ y, score: yScore[i] }));\n        pairs.sort((a, b) => b.score - a.score);\n        let tpr = 0, fpr = 0;\n        const posCount = yTrue.filter(y => y === 1).length;\n        const negCount = yTrue.filter(y => y === 0).length;\n        let auc = 0, prevFpr = 0, prevTpr = 0;\n        for (const p of pairs) {\n            if (p.y === 1) tpr += 1 / posCount;\n            else {\n                fpr += 1 / negCount;\n                auc += (tpr + prevTpr) * (fpr - prevFpr) / 2;\n                prevFpr = fpr;\n                prevTpr = tpr;\n            }\n        }\n        return auc;\n    }\n}\n\n// Usage: Predict exam pass/fail based on hours studied\nconst X = [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]];\nconst y = [0, 0, 0, 0, 1, 0, 1, 1, 1, 1];\n\nconsole.log('=== Logistic Regression Training ===');\nconst model = new LogisticRegression(0.1, 2000, 0.01);\nmodel.fit(X, y);\n\nconsole.log('\\n=== Predictions ===');\nconst probs = model.predictProbability(X);\nconst preds = model.predict(X);\nX.forEach((x, i) => {\n    console.log(`Hours=${x[0]}, True=${y[i]}, Prob=${probs[i].toFixed(4)}, Pred=${preds[i]}`);\n});\n\nconsole.log('\\n=== Confusion Matrix ===');\nconst cm = model.confusionMatrix(y, preds);\nconsole.log(`TP=${cm.tp}, TN=${cm.tn}, FP=${cm.fp}, FN=${cm.fn}`);\nconsole.log(`Accuracy: ${cm.accuracy.toFixed(4)}`);\nconsole.log(`Precision: ${cm.precision.toFixed(4)}`);\nconsole.log(`Recall: ${cm.recall.toFixed(4)}`);\nconsole.log(`F1-Score: ${cm.f1.toFixed(4)}`);\n\nconsole.log(`\\nROC-AUC: ${model.rocAUC(y, probs).toFixed(4)}`);\n\nconsole.log('\\n=== Threshold Variation ===');\n[0.3, 0.5, 0.7].forEach(t => {\n    const p = model.predict(X, t);\n    const cm2 = model.confusionMatrix(y, p);\n    console.log(`Threshold=${t}: Accuracy=${cm2.accuracy.toFixed(4)}, Precision=${cm2.precision.toFixed(4)}, Recall=${cm2.recall.toFixed(4)}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output"
      }), ": Shows training convergence, probability predictions, confusion matrix metrics, and the effect of threshold tuning on precision-recall tradeoff."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-multi-class-with-softmax",
      children: "Example 2: Multi-Class with Softmax"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class SoftmaxRegression {\n    private weights: number[][] = [];\n    private biases: number[] = [];\n\n    constructor(\n        private learningRate: number = 0.01,\n        private epochs: number = 1000\n    ) {}\n\n    private softmax(logits: number[]): number[] {\n        const max = Math.max(...logits);\n        const exps = logits.map(l => Math.exp(l - max));\n        const sum = exps.reduce((a, b) => a + b, 0);\n        return exps.map(e => e / sum);\n    }\n\n    fit(X: number[][], y: number[], numClasses: number): void {\n        const n = X.length, d = X[0].length;\n        this.weights = Array.from({ length: numClasses }, () => Array(d).fill(0));\n        this.biases = Array(numClasses).fill(0);\n\n        for (let epoch = 0; epoch < this.epochs; epoch++) {\n            let totalLoss = 0;\n            const gradW = this.weights.map(row => row.map(() => 0));\n            const gradB = Array(numClasses).fill(0);\n\n            for (let i = 0; i < n; i++) {\n                const logits = this.weights.map((w, k) =>\n                    this.biases[k] + X[i].reduce((sum, xi, j) => sum + xi * w[j], 0)\n                );\n                const probs = this.softmax(logits);\n                totalLoss -= Math.log(probs[y[i]] + 1e-15);\n\n                for (let k = 0; k < numClasses; k++) {\n                    const indicator = k === y[i] ? 1 : 0;\n                    const delta = probs[k] - indicator;\n                    gradB[k] += delta;\n                    for (let j = 0; j < d; j++) {\n                        gradW[k][j] += delta * X[i][j];\n                    }\n                }\n            }\n\n            for (let k = 0; k < numClasses; k++) {\n                this.biases[k] -= this.learningRate * gradB[k] / n;\n                for (let j = 0; j < d; j++) {\n                    this.weights[k][j] -= this.learningRate * gradW[k][j] / n;\n                }\n            }\n\n            if (epoch % 200 === 0) {\n                console.log(`Epoch ${epoch}, Loss: ${(totalLoss / n).toFixed(4)}`);\n            }\n        }\n    }\n\n    predict(X: number[][]): number[] {\n        return X.map(row => {\n            const logits = this.weights.map((w, k) =>\n                this.biases[k] + row.reduce((sum, xi, j) => sum + xi * w[j], 0)\n            );\n            const probs = this.softmax(logits);\n            return probs.indexOf(Math.max(...probs));\n        });\n    }\n}\n\n// Iris-like dataset (3 classes, 4 features)\nconst X_iris = [\n    [5.1, 3.5, 1.4, 0.2], [4.9, 3.0, 1.4, 0.2], [4.7, 3.2, 1.3, 0.2],\n    [7.0, 3.2, 4.7, 1.4], [6.4, 3.2, 4.5, 1.5], [6.9, 3.1, 4.9, 1.5],\n    [6.3, 3.3, 6.0, 2.5], [5.8, 2.7, 5.1, 1.9], [7.1, 3.0, 5.9, 2.1]\n];\nconst y_iris = [0, 0, 0, 1, 1, 1, 2, 2, 2];\n\nconst softmax = new SoftmaxRegression(0.01, 2000);\nsoftmax.fit(X_iris, y_iris, 3);\nconst preds = softmax.predict(X_iris);\nconst acc = preds.filter((p, i) => p === y_iris[i]).length / y_iris.length;\nconsole.log(`Softmax Accuracy: ${(acc * 100).toFixed(2)}%`);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Logistic regression outputs interpretable probabilities, making it ideal for risk scoring and medical diagnosis where confidence matters as much as the class label."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Logistic Regression assumes a linear decision boundary ? if classes are separated by a non-linear curve, consider kernel methods or non-linear classifiers."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cross-entropy loss is convex"
        }), " ? gradient descent is guaranteed to find the global optimum for logistic regression"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Threshold is a business decision"
        }), " ? never use 0.5 blindly; tune it based on the relative cost of false positives vs. false negatives"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AUC is threshold-independent"
        }), " ? use it for model comparison; use precision-recall curves for imbalanced problems"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Softmax for multi-class"
        }), " ? prefer softmax over OvR when classes are mutually exclusive"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Regularize when $d \\gg n$"
        }), " ? L2 for many medium-effect features; L1 for sparse feature selection"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calibrate probabilities"
        }), " ? logistic regression produces well-calibrated probabilities by design, but Platt scaling or isotonic regression can further improve calibration"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Distinction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linear Regression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predicts continuous values via linear equation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unbounded output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Price prediction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logistic Regression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predicts class probabilities via sigmoid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output in [0, 1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spam detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sigmoid Function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\sigma(z) = 1/(1 + e^{-z})$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S-shaped squashing function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probability mapping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Softmax Function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$P(k) = e^{z_k} / \\sum e^{z_j}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sum of outputs = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Digit recognition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-Entropy Loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$-\\sum y\\log(\\hat{y})$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convex for classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary classification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hinge Loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\max(0, 1 - y \\cdot \\hat{y})$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Used by SVM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max-margin classification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Precision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$TP/(TP + FP)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low FP cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spam detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$TP/(TP + FN)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low FN cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disease screening"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Formula / Definition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sigmoid Function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\sigma(z) = \\frac{1}{1 + e^{-z}}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hypothesis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$h_w(x) = \\sigma(\\mathbf{w}^T\\mathbf{x})$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Log-Odds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\log(p/(1-p)) = \\mathbf{w}^T\\mathbf{x}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Decision Boundary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\mathbf{w}^T\\mathbf{x} = 0$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-Entropy Loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$J(w) = -\\frac{1}{n}\\sum[y\\log(\\hat{y}) + (1-y)\\log(1-\\hat{y})]$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gradient Update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$w_j := w_j - \\alpha \\frac{1}{n}\\sum(h_w(x^{(i)}) - y^{(i)})x_j^{(i)}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Softmax (Multi-class)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$P(y=k) = e^{z_k} / \\sum_{j=1}^{K} e^{z_j}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Accuracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$(TP + TN) / Total$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Precision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$TP / (TP + FP)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$TP / (TP + FN)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F1-Score"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$2 \\cdot P \\cdot R / (P + R)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\int_0^1 TPR(FPR) , d(FPR)$"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Positive Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Challenge"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Healthcare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disease diagnosis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disease present"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class imbalance (rare diseases)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Finance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fraud detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fraudulent transaction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extreme class imbalance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Marketing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer churn prediction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Will churn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defining churn window"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intrusion detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malicious activity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High cost of false negatives"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NLP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sentiment analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Positive sentiment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subjective labels"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Autonomous"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pedestrian detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pedestrian present"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time latency requirement"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why can't we use Mean Squared Error as the loss function for logistic regression?\nA) MSE is too computationally expensive\nB) MSE would produce a non-convex cost function\nC) MSE only works for regression problems\nD) MSE requires normally distributed errors"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** Using MSE with sigmoid results in a non-convex cost function with many local minima, making gradient descent unreliable.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The sigmoid function $\\sigma(z)$ outputs a value of 0.5 when:\nA) $z = 0$\nB) $z = 1$\nC) $z = \\infty$\nD) $z = -\\infty$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**A)** $\\sigma(0) = 1/(1 + e^0) = 1/2 = 0.5$.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Which metric is most appropriate for evaluating a classifier on an imbalanced dataset?\nA) Accuracy\nB) F1-Score\nC) Mean Squared Error\nD) R-squared"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** F1-Score balances precision and recall, making it suitable for imbalanced classification where accuracy is misleading.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In logistic regression, changing the classification threshold from 0.5 to 0.7 will:\nA) Increase recall, decrease precision\nB) Increase precision, decrease recall\nC) Increase both precision and recall\nD) Have no effect on precision or recall"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** A higher threshold means fewer positive predictions, so false positives decrease (higher precision) but true positives may also decrease (lower recall).\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What does an AUC of 0.5 indicate?\nA) The model is perfectly calibrated\nB) The model is no better than random guessing\nC) The model has perfect discrimination\nD) The model has high precision"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** AUC = 0.5 means the classifier's performance is equivalent to random guessing (the ROC curve follows the diagonal).\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-logistic-regression-confusion-matrix-and-classification-metrics",
      children: "TypeScript Implementation: Logistic Regression, Confusion Matrix, and Classification Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Sigmoid activation and logistic regression from scratch\nfunction sigmoid(z: number): number {\n    return 1 / (1 + Math.exp(-z));\n}\n\nclass LogisticRegression {\n    private weights: number[] = [];\n    private bias: number = 0;\n    private lr: number;\n    private epochs: number;\n\n    constructor(lr: number = 0.01, epochs: number = 1000) {\n        this.lr = lr;\n        this.epochs = epochs;\n    }\n\n    fit(features: number[][], targets: number[]): void {\n        const n = features.length;\n        const d = features[0].length;\n        this.weights = new Array(d).fill(0);\n        this.bias = 0;\n\n        for (let ep = 0; ep < this.epochs; ep++) {\n            for (let i = 0; i < n; i++) {\n                const z = features[i].reduce((s, f, j) => s + f * this.weights[j], this.bias);\n                const pred = sigmoid(z);\n                const error = pred - targets[i];\n                for (let j = 0; j < d; j++) {\n                    this.weights[j] -= this.lr * error * features[i][j];\n                }\n                this.bias -= this.lr * error;\n            }\n        }\n    }\n\n    predictProb(features: number[]): number {\n        const z = features.reduce((s, f, j) => s + f * this.weights[j], this.bias);\n        return sigmoid(z);\n    }\n\n    predict(features: number[], threshold: number = 0.5): number {\n        return this.predictProb(features) >= threshold ? 1 : 0;\n    }\n\n    decisionBoundary(x1: number, x2: number): number {\n        return -(this.bias + this.weights[0] * x1) / this.weights[1];\n    }\n}\n\nclass ConfusionMatrix {\n    tp: number = 0; fp: number = 0; tn: number = 0; fn: number = 0;\n\n    constructor(actual: number[], predicted: number[]) {\n        for (let i = 0; i < actual.length; i++) {\n            if (actual[i] === 1 && predicted[i] === 1) this.tp++;\n            else if (actual[i] === 0 && predicted[i] === 1) this.fp++;\n            else if (actual[i] === 0 && predicted[i] === 0) this.tn++;\n            else this.fn++;\n        }\n    }\n\n    get accuracy(): number {\n        return (this.tp + this.tn) / (this.tp + this.tn + this.fp + this.fn);\n    }\n\n    get precision(): number {\n        return this.tp / (this.tp + this.fp) || 0;\n    }\n\n    get recall(): number {\n        return this.tp / (this.tp + this.fn) || 0;\n    }\n\n    get f1Score(): number {\n        const p = this.precision;\n        const r = this.recall;\n        return p + r === 0 ? 0 : 2 * (p * r) / (p + r);\n    }\n\n    get specificity(): number {\n        return this.tn / (this.tn + this.fp) || 0;\n    }\n\n    get negativePredictiveValue(): number {\n        return this.tn / (this.tn + this.fn) || 0;\n    }\n}\n\nfunction binaryCrossEntropy(actual: number[], probabilities: number[]): number {\n    const eps = 1e-15;\n    return -actual.reduce((sum, a, i) => {\n        const p = Math.max(eps, Math.min(1 - eps, probabilities[i]));\n        return sum + a * Math.log(p) + (1 - a) * Math.log(1 - p);\n    }, 0) / actual.length;\n}\n\nclass DecisionBoundaryPlotter {\n    static grid(features: number[][], model: LogisticRegression, resolution: number = 20): string[][] {\n        const x1s = features.map(f => f[0]);\n        const x2s = features.map(f => f[1]);\n        const x1Min = Math.min(...x1s); const x1Max = Math.max(...x1s);\n        const x2Min = Math.min(...x2s); const x2Max = Math.max(...x2s);\n        const grid: string[][] = [];\n        for (let i = 0; i < resolution; i++) {\n            grid[i] = [];\n            const x1 = x1Min + (x1Max - x1Min) * i / resolution;\n            for (let j = 0; j < resolution; j++) {\n                const x2 = x2Min + (x2Max - x2Min) * j / resolution;\n                grid[i][j] = model.predict([x1, x2]) === 1 ? \"?\" : \"?\";\n            }\n        }\n        return grid;\n    }\n}\n\n// Demo\nconst X = [[2, 3], [1, 2], [3, 4], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10], [3, 2], [2, 1]];\nconst y = [0, 0, 0, 1, 1, 1, 1, 1, 0, 0];\n\nconst lr = new LogisticRegression(0.05, 2000);\nlr.fit(X, y);\nconst preds = X.map(x => lr.predict(x));\nconst cm = new ConfusionMatrix(y, preds);\nconsole.log(\"Accuracy:\", cm.accuracy.toFixed(4));\nconsole.log(\"Precision:\", cm.precision.toFixed(4));\nconsole.log(\"Recall:\", cm.recall.toFixed(4));\nconsole.log(\"F1 Score:\", cm.f1Score.toFixed(4));\nconsole.log(\"Specificity:\", cm.specificity.toFixed(4));\n\nconst probs = X.map(x => lr.predictProb(x));\nconsole.log(\"Binary Cross-Entropy:\", binaryCrossEntropy(y, probs).toFixed(4));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// logistic regression\n// ml-supervised-unsupervised implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'logistic regression', data: { topic: 'ml-supervised-unsupervised' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// logistic regression - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'ml-algorithms demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'machine-learning', chapter: 'logistic regression' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('ml-algorithms'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Logistic Regression is a fundamental algorithm for binary classification, using the sigmoid function to map linear outputs to probabilities between 0 and 1."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The model is linear in the log-odds space; each feature weight corresponds to a multiplicative change in odds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Binary Cross-Entropy is the standard loss function for classification, ensuring a convex optimization surface."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The confusion matrix and its derived metrics (precision, recall, F1-score) provide a nuanced evaluation beyond accuracy alone."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The ROC curve and AUC provide threshold-independent measures of classifier quality."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The model extends to multi-class classification via softmax (categorical cross-entropy)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regularization prevents overfitting, especially when the number of features is large relative to samples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Logistic regression bridges linear models and classification by converting real-valued scores into well-calibrated probabilities, with a rich suite of evaluation metrics for real-world decision-making."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is the sigmoid function useful for classification tasks?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between the model's output $h_w(x)$ and the final prediction?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If $h_w(x) = 0.5$ for a specific input, what can you say about that point in relation to the decision boundary?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does the cross-entropy loss function behave when the predicted probability is 0.99 for a sample where $y=1$?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the difference between precision and recall. Give a scenario where each is the more important metric."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate the sigmoid value for $z = -2.2$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given $w_0 = -3$ and $w_1 = 1.5$, find the value of $x$ that defines the decision boundary."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute the cross-entropy loss for a single training example where $y=1$ and $h_w(x) = 0.8$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A classifier produces TP=80, FP=20, FN=10, TN=90. Calculate precision, recall, F1-score, and accuracy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given precision = 0.9 and recall = 0.6, calculate the F1-score and the F2-score ($\\beta=2$, weighting recall double)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show that the derivative of the sigmoid function $\\sigma(z)$ can be expressed as $\\sigma(z)(1 - \\sigma(z))$. How does this property simplify the gradient calculation in backpropagation? Then, prove that the gradient of the binary cross-entropy loss with respect to $w_j$ is $\\frac{1}{n}\\sum(\\hat{y}^{(i)} - y^{(i)})x_j^{(i)}$, showing each step of the chain rule."
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