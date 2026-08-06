"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[95544],{

/***/ 81079
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_08_machine_learning_11_naive_bayes_md_f22_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-08-machine-learning-11-naive-bayes-md-f22.json
const site_docs_courses_ai_engineering_placement_08_machine_learning_11_naive_bayes_md_f22_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/machine-learning/11-naive-bayes","title":"Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/08-machine-learning/11-naive-bayes.md","sourceDirName":"courses/ai-engineering-placement/08-machine-learning","slug":"/ai-engineering-placement/08-machine-learning/11-naive-bayes","permalink":"/ai-engineering-journey/ai-engineering-placement/08-machine-learning/11-naive-bayes","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":113,"frontMatter":{"id":"11-naive-bayes","slug":"/ai-engineering-placement/08-machine-learning/11-naive-bayes","title":"Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications","sidebar_label":"Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications","sidebar_position":113},"sidebar":"coursesSidebar","previous":{"title":"Hyperparameter Tuning — Grid Search, Random Search, Bayesian Opt, Optuna","permalink":"/ai-engineering-journey/ai-engineering-placement/08-machine-learning/10-hyperparameter-tuning"},"next":{"title":"Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection","permalink":"/ai-engineering-journey/ai-engineering-placement/08-machine-learning/12-feature-engineering"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/08-machine-learning/11-naive-bayes.md


const frontMatter = {
	id: '11-naive-bayes',
	slug: '/ai-engineering-placement/08-machine-learning/11-naive-bayes',
	title: 'Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications',
	sidebar_label: 'Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications',
	sidebar_position: 113
};
const contentTitle = 'Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications';

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
  "value": "Bayes Theorem",
  "id": "bayes-theorem",
  "level": 3
}, {
  "value": "Naive Bayes Assumption",
  "id": "naive-bayes-assumption",
  "level": 3
}, {
  "value": "Naive Bayes Decision Boundary",
  "id": "naive-bayes-decision-boundary",
  "level": 3
}, {
  "value": "Types of Naive Bayes",
  "id": "types-of-naive-bayes",
  "level": 3
}, {
  "value": "Laplace Smoothing",
  "id": "laplace-smoothing",
  "level": 3
}, {
  "value": "Log Probabilities",
  "id": "log-probabilities",
  "level": 3
}, {
  "value": "Mermaid Decision Boundary Visualization",
  "id": "mermaid-decision-boundary-visualization",
  "level": 3
}, {
  "value": "Visual Explanation",
  "id": "visual-explanation",
  "level": 2
}, {
  "value": "Real Example",
  "id": "real-example",
  "level": 2
}, {
  "value": "Code Example",
  "id": "code-example",
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
        id: "naive-bayes--bayes-theorem-probabilistic-classification-text-applications",
        children: "Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications"
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
            children: "Understand Bayes theorem and the Naive Bayes conditional independence assumption"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement Gaussian, Multinomial, and Bernoulli Naive Bayes classifiers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply Naive Bayes to text classification (spam detection, sentiment analysis)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare Naive Bayes with logistic regression and SVM classifiers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle Laplace smoothing and log probabilities for numerical stability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate Naive Bayes models and understand their strengths and limitations"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Naive Bayes is a family of probabilistic classifiers based on Bayes theorem with a strong independence assumption between features. Despite its simplicity, it performs well for text classification, spam filtering, and recommendation systems. AI engineers use it as a strong baseline and for high-dimensional sparse data."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic probability theory (conditional probability, Bayes rule)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python programming with numpy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of classification concepts"
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
      id: "bayes-theorem",
      children: "Bayes Theorem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bayes theorem describes the probability of an event based on prior knowledge of conditions related to the event."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$P(y|x) = \\frac{P(x|y) \\cdot P(y)}{P(x)}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$P(y|x)$: posterior probability — probability of class y given features x"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$P(x|y)$: likelihood — probability of features given class y"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$P(y)$: prior probability — probability of class y before seeing data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$P(x)$: evidence — probability of features (normalization constant)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "naive-bayes-assumption",
      children: "Naive Bayes Assumption"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The \"naive\" assumption: features are conditionally independent given the class label."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$P(x_1, x_2, ..., x_n | y) = \\prod_{i=1}^{n} P(x_i | y)$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This simplifies computation dramatically. Even though features are rarely independent in practice, Naive Bayes often works well."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "naive-bayes-decision-boundary",
      children: "Naive Bayes Decision Boundary"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"Feature Space\"\n        A[Class A]\n        B[Class B]\n        C[Decision Boundary]\n    end\n\n    subgraph \"Probability Computation\"\n        D[P(y | x)]\n        E[P(y)]\n        F[P(x | y)]\n        G[P(x)]\n    end\n\n    subgraph \"Independence Assumption\"\n        H[P(x1,x2|y) = P(x1|y) * P(x2|y)]\n        I[Multiply feature probabilities]\n    end\n\n    A & B --> C\n    C --> D\n    D --> E & F\n    F --> H --> I\n\n    classDef classA fill:#4a90d9,color:#fff\n    classDef classB fill:#e85d75,color:#fff\n    classDef classBdr fill:#50b86c,color:#fff\n    class A classA\n    class B classB\n    class C classBdr\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "types-of-naive-bayes",
      children: "Types of Naive Bayes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Gaussian Naive Bayes"
      }), " — For continuous features, assumes normal distribution:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$P(x_i | y) = \\frac{1}{\\sqrt{2\\pi\\sigma_y^2}} \\exp\\left(-\\frac{(x_i - \\mu_y)^2}{2\\sigma_y^2}\\right)$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parameters: $\\mu_y$ (mean), $\\sigma_y^2$ (variance) of feature i for class y."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Multinomial Naive Bayes"
      }), " — For discrete count features (word counts):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$P(x_i | y) = \\frac{N_{yi} + \\alpha}{N_y + \\alpha n}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where $N_{yi}$ is count of feature i in class y, $N_y$ is total count of all features in class y, and $\\alpha$ is Laplace smoothing."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bernoulli Naive Bayes"
      }), " — For binary/binary features (word presence):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$P(x_i | y) = P(i | y)^{x_i} \\cdot (1 - P(i | y))^{(1 - x_i)}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where $P(i | y)$ is probability of feature i being present in class y."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "laplace-smoothing",
      children: "Laplace Smoothing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prevents zero probability for unseen features:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$P(x_i | y) = \\frac{N_{yi} + \\alpha}{N_y + \\alpha n}$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\alpha = 1$: Laplace smoothing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\alpha < 1$: Lidstone smoothing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Larger $\\alpha$ = more smoothing (prevents overfitting)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "log-probabilities",
      children: "Log Probabilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multiply many probabilities (all < 1) causes floating-point underflow. Use log space:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\log P(y|x) = \\log P(y) + \\sum_{i=1}^{n} \\log P(x_i|y) - \\log P(x)$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Since log is monotonic, we can compare log posteriors without computing $P(x)$:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\hat{y} = \\arg\\max_y \\left[ \\log P(y) + \\sum_{i=1}^{n} \\log P(x_i|y) \\right]$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mermaid-decision-boundary-visualization",
      children: "Mermaid Decision Boundary Visualization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Gaussian NB\n        A[\"P(x|y) ~ N(μ, σ²)\"]\n        B[Elliptical boundaries]\n        C[Good for continuous data]\n    end\n\n    subgraph Multinomial NB\n        D[\"P(x|y) = frequency ratio\"]\n        E[Linear boundaries]\n        F[Best for text/counts]\n    end\n\n    subgraph Bernoulli NB\n        G[\"P(x|y) = presence probability\"]\n        H[Binary boundaries]\n        I[Good for binary features]\n    end\n\n    A & D & G --> J{Choose based on data type}\n    J -->|Continuous| A\n    J -->|Counts| D\n    J -->|Binary| G\n\n    style A fill:#4a90d9,color:#fff\n    style D fill:#e85d75,color:#fff\n    style G fill:#50b86c,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "visual-explanation",
      children: "Visual Explanation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Training Data] --> B[Compute Priors P(y)]\n    A --> C[Compute Likelihood P(x|y)]\n\n    subgraph \"For each class y\"\n        D[Gaussian: μ, σ]\n        E[Multinomial: count ratios]\n        F[Bernoulli: presence prob]\n    end\n\n    C --> D & E & F\n\n    B & D & E & F --> G[Classifier Model]\n\n    subgraph \"Prediction\"\n        H[New Sample x]\n        H --> I[Compute log P(y) + Σ log P(xi|y)]\n        I --> J[Pick class with highest probability]\n        J --> K[Predicted Label]\n    end\n\n    G --> I\n    K --> L[Evaluation]\n    L --> M{Accuracy, Precision, Recall, F1}\n\n    style G fill:#4a90d9,color:#fff\n    style J fill:#50b86c,color:#fff\n    style K fill:#f5a623,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-example",
      children: "Real Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Think of Naive Bayes like a doctor diagnosing a disease based on symptoms. The doctor knows: prior probability of the disease in the population (P(y)), and the likelihood of each symptom given the disease (P(symptom|disease)). The \"naive\" part is assuming symptoms are independent — sneezing and fever are treated as unrelated even though they might both be caused by the same cold. Despite this simplification, the doctor's diagnosis is often correct. For spam filtering: the email contains words \"free\", \"money\", \"winner\". The spam classifier calculates: P(spam|\"free\",\"money\",\"winner\") by multiplying P(\"free\"|spam) × P(\"money\"|spam) × P(\"winner\"|spam) × P(spam). Even though \"free\" and \"money\" aren't truly independent (free money often co-occurs), the classifier still works well."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "code-example",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "#!/usr/bin/env python3\n\"\"\"Naive Bayes classifiers from scratch and with sklearn\"\"\"\n\nimport numpy as np\nfrom typing import Dict, List, Tuple, Optional\nfrom collections import Counter, defaultdict\nfrom sklearn.datasets import fetch_20newsgroups, make_classification\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer\nfrom sklearn.naive_bayes import (\n    GaussianNB, MultinomialNB, BernoulliNB,\n    ComplementNB\n)\nfrom sklearn.metrics import (\n    classification_report, confusion_matrix,\n    accuracy_score, f1_score\n)\nfrom sklearn.pipeline import Pipeline\n\nclass GaussianNaiveBayesScratch:\n    \"\"\"Gaussian Naive Bayes from scratch\"\"\"\n\n    def __init__(self):\n        self.classes: np.ndarray = None\n        self.means: Dict[int, np.ndarray] = {}\n        self.variances: Dict[int, np.ndarray] = {}\n        self.priors: Dict[int, float] = {}\n\n    def fit(self, X: np.ndarray, y: np.ndarray) -> 'GaussianNaiveBayesScratch':\n        \"\"\"Compute mean, variance, and prior for each class\"\"\"\n        self.classes = np.unique(y)\n        n_samples, n_features = X.shape\n\n        for cls in self.classes:\n            X_cls = X[y == cls]\n            self.means[cls] = np.mean(X_cls, axis=0)\n            self.variances[cls] = np.var(X_cls, axis=0) + 1e-9  # Add epsilon\n            self.priors[cls] = X_cls.shape[0] / n_samples\n\n        return self\n\n    def _gaussian_pdf(self, x: np.ndarray, mean: np.ndarray, var: np.ndarray) -> np.ndarray:\n        \"\"\"Compute Gaussian probability density\"\"\"\n        exponent = -0.5 * ((x - mean) ** 2) / var\n        coefficient = 1.0 / np.sqrt(2 * np.pi * var)\n        return coefficient * np.exp(exponent)\n\n    def predict(self, X: np.ndarray) -> np.ndarray:\n        \"\"\"Predict class for each sample\"\"\"\n        predictions = []\n        for sample in X:\n            posteriors = []\n            for cls in self.classes:\n                log_prior = np.log(self.priors[cls])\n                log_likelihood = np.sum(np.log(\n                    self._gaussian_pdf(sample, self.means[cls], self.variances[cls]) + 1e-9\n                ))\n                posteriors.append(log_prior + log_likelihood)\n\n            predictions.append(self.classes[np.argmax(posteriors)])\n\n        return np.array(predictions)\n\n    def predict_proba(self, X: np.ndarray) -> np.ndarray:\n        \"\"\"Return class probabilities\"\"\"\n        probabilities = []\n        for sample in X:\n            posteriors = []\n            for cls in self.classes:\n                log_prior = np.log(self.priors[cls])\n                log_likelihood = np.sum(np.log(\n                    self._gaussian_pdf(sample, self.means[cls], self.variances[cls]) + 1e-9\n                ))\n                posteriors.append(log_prior + log_likelihood)\n\n            # Softmax to get probabilities\n            posteriors = np.array(posteriors)\n            posteriors -= np.max(posteriors)\n            probs = np.exp(posteriors) / np.sum(np.exp(posteriors))\n            probabilities.append(probs)\n\n        return np.array(probabilities)\n\nclass MultinomialNaiveBayesScratch:\n    \"\"\"Multinomial Naive Bayes from scratch for text classification\"\"\"\n\n    def __init__(self, alpha: float = 1.0):\n        self.alpha = alpha\n        self.classes: np.ndarray = None\n        self.feature_log_prob: Dict[int, np.ndarray] = {}\n        self.class_log_prior: Dict[int, float] = {}\n\n    def fit(self, X: np.ndarray, y: np.ndarray) -> 'MultinomialNaiveBayesScratch':\n        \"\"\"Compute log probabilities for each class\"\"\"\n        self.classes = np.unique(y)\n        n_samples, n_features = X.shape\n\n        for cls in self.classes:\n            X_cls = X[y == cls]\n\n            # Count of each feature in this class\n            feature_count = X_cls.sum(axis=0) + self.alpha\n\n            # Total count of all features in this class\n            total_count = feature_count.sum()\n\n            # Log probability with Laplace smoothing\n            self.feature_log_prob[cls] = np.log(feature_count) - np.log(total_count)\n\n            # Class prior (log)\n            self.class_log_prior[cls] = np.log(X_cls.shape[0] / n_samples)\n\n        return self\n\n    def predict(self, X: np.ndarray) -> np.ndarray:\n        \"\"\"Predict class using log probabilities\"\"\"\n        predictions = []\n        for sample in X:\n            # For each class, compute log posterior\n            posteriors = []\n            for cls in self.classes:\n                # log P(y) + Σ x_i * log P(x_i | y)\n                score = self.class_log_prior[cls] + np.dot(sample.toarray().flatten()\n                    if hasattr(sample, 'toarray') else sample,\n                    self.feature_log_prob[cls]\n                )\n                posteriors.append(score)\n\n            predictions.append(self.classes[np.argmax(posteriors)])\n\n        return np.array(predictions)\n\n    def predict_proba(self, X: np.ndarray) -> np.ndarray:\n        \"\"\"Return class probabilities\"\"\"\n        probabilities = []\n        for sample in X:\n            posteriors = []\n            for cls in self.classes:\n                score = self.class_log_prior[cls] + np.dot(\n                    sample.toarray().flatten() if hasattr(sample, 'toarray') else sample,\n                    self.feature_log_prob[cls]\n                )\n                posteriors.append(score)\n\n            posteriors = np.array(posteriors)\n            posteriors -= np.max(posteriors)\n            probs = np.exp(posteriors) / np.sum(np.exp(posteriors))\n            probabilities.append(probs)\n\n        return np.array(probabilities)\n\ndef text_classification_demo():\n    \"\"\"Demonstrate Naive Bayes for text classification\"\"\"\n    print(\"=\" * 60)\n    print(\"Text Classification with Naive Bayes\")\n    print(\"=\" * 60)\n\n    # Load 20 newsgroups dataset (subset)\n    categories = ['rec.sport.baseball', 'sci.space']\n    newsgroups = fetch_20newsgroups(\n        subset='all',\n        categories=categories,\n        remove=('headers', 'footers', 'quotes'),\n        random_state=42\n    )\n\n    X = newsgroups.data\n    y = newsgroups.target\n    print(f\"Dataset: {len(X)} documents, {len(np.unique(y))} classes\")\n    print(f\"Classes: {newsgroups.target_names}\")\n\n    # Split\n    X_train, X_test, y_train, y_test = train_test_split(\n        X, y, test_size=0.2, random_state=42\n    )\n    print(f\"Train: {len(X_train)}, Test: {len(X_test)}\")\n\n    # Build pipeline with TF-IDF and MultinomialNB\n    pipeline = Pipeline([\n        ('vectorizer', TfidfVectorizer(\n            max_features=5000,\n            stop_words='english',\n            ngram_range=(1, 2),\n            max_df=0.95,\n            min_df=2,\n        )),\n        ('classifier', MultinomialNB(alpha=1.0)),\n    ])\n\n    # Train\n    print(\"\\nTraining Multinomial Naive Bayes...\")\n    pipeline.fit(X_train, y_train)\n\n    # Evaluate\n    y_pred = pipeline.predict(X_test)\n    accuracy = accuracy_score(y_test, y_pred)\n    f1 = f1_score(y_test, y_pred, average='weighted')\n\n    print(f\"\\nResults:\")\n    print(f\"Accuracy: {accuracy:.4f}\")\n    print(f\"F1-score: {f1:.4f}\")\n    print(f\"\\nClassification Report:\")\n    print(classification_report(y_test, y_pred, target_names=newsgroups.target_names))\n\n    # Show most informative features\n    vectorizer = pipeline.named_steps['vectorizer']\n    classifier = pipeline.named_steps['classifier']\n    feature_names = vectorizer.get_feature_names_out()\n\n    print(\"\\nMost informative features per class:\")\n    for i, class_name in enumerate(newsgroups.target_names):\n        log_probs = classifier.feature_log_prob_[i]\n        top_indices = np.argsort(log_probs)[-10:][::-1]\n        top_features = [feature_names[idx] for idx in top_indices]\n        print(f\"  {class_name}: {', '.join(top_features)}\")\n\ndef compare_nb_variants():\n    \"\"\"Compare Gaussian, Multinomial, and Bernoulli Naive Bayes\"\"\"\n    print(\"\\n\" + \"=\" * 60)\n    print(\"Comparing Naive Bayes Variants\")\n    print(\"=\" * 60)\n\n    # Synthetic dataset\n    X, y = make_classification(\n        n_samples=1000, n_features=20, n_informative=15,\n        n_redundant=3, n_classes=2, random_state=42\n    )\n    X_train, X_test, y_train, y_test = train_test_split(\n        X, y, test_size=0.2, random_state=42\n    )\n\n    classifiers = {\n        \"Gaussian NB\": GaussianNB(),\n        \"Multinomial NB\": MultinomialNB(),\n        \"Bernoulli NB\": BernoulliNB(),\n        \"Complement NB\": ComplementNB(),\n    }\n\n    results = []\n    for name, clf in classifiers.items():\n        try:\n            clf.fit(X_train, y_train)\n            y_pred = clf.predict(X_test)\n            acc = accuracy_score(y_test, y_pred)\n            f1 = f1_score(y_test, y_pred)\n            results.append((name, acc, f1))\n            print(f\"{name:20s}  Accuracy: {acc:.4f}  F1: {f1:.4f}\")\n        except Exception as e:\n            print(f\"{name:20s}  Error: {e}\")\n\n    return results\n\ndef scratch_vs_sklearn():\n    \"\"\"Compare scratch implementation with sklearn\"\"\"\n    print(\"\\n\" + \"=\" * 60)\n    print(\"Scratch vs sklearn Gaussian NB\")\n    print(\"=\" * 60)\n\n    X, y = make_classification(\n        n_samples=500, n_features=10, n_informative=8,\n        n_redundant=2, n_classes=2, random_state=42\n    )\n    X_train, X_test, y_train, y_test = train_test_split(\n        X, y, test_size=0.2, random_state=42\n    )\n\n    # Scratch\n    scratch_nb = GaussianNaiveBayesScratch()\n    scratch_nb.fit(X_train, y_train)\n    y_pred_scratch = scratch_nb.predict(X_test)\n    acc_scratch = accuracy_score(y_test, y_pred_scratch)\n\n    # sklearn\n    sklearn_nb = GaussianNB()\n    sklearn_nb.fit(X_train, y_train)\n    y_pred_sklearn = sklearn_nb.predict(X_test)\n    acc_sklearn = accuracy_score(y_test, y_pred_sklearn)\n\n    print(f\"Scratch accuracy: {acc_scratch:.4f}\")\n    print(f\"sklearn accuracy: {acc_sklearn:.4f}\")\n    print(f\"Match: {np.array_equal(y_pred_scratch, y_pred_sklearn)}\")\n\ndef spam_classifier_example():\n    \"\"\"Simple spam detection example\"\"\"\n    print(\"\\n\" + \"=\" * 60)\n    print(\"Spam Detection with Naive Bayes\")\n    print(\"=\" * 60)\n\n    emails = [\n        \"Get rich quick! Buy now! Limited offer!\",\n        \"Hi, can we meet tomorrow for lunch?\",\n        \"Congratulations! You won a free iPhone!\",\n        \"The meeting is scheduled for 3 PM.\",\n        \"URGENT: Your account needs verification. Click here.\",\n        \"Reminder: Project deadline is Friday.\",\n        \"FREE MONEY!!! Claim your prize NOW!\",\n        \"Thanks for your help with the presentation.\",\n    ]\n    labels = [1, 0, 1, 0, 1, 0, 1, 0]  # 1 = spam, 0 = ham\n\n    # Train simple classifier\n    vectorizer = CountVectorizer(stop_words='english')\n    X = vectorizer.fit_transform(emails)\n    X_train, X_test, y_train, y_test = train_test_split(\n        X, labels, test_size=0.25, random_state=42\n    )\n\n    clf = MultinomialNB(alpha=1.0)\n    clf.fit(X_train, y_train)\n\n    # Test with new emails\n    new_emails = [\n        \"You have won a free vacation! Click to claim.\",\n        \"Are you free for coffee this weekend?\",\n        \"URGENT: Verify your password immediately.\",\n        \"Here is the report you requested.\",\n    ]\n\n    X_new = vectorizer.transform(new_emails)\n    predictions = clf.predict(X_new)\n    probabilities = clf.predict_proba(X_new)\n\n    for email, pred, prob in zip(new_emails, predictions, probabilities):\n        label = \"SPAM\" if pred == 1 else \"HAM\"\n        confidence = max(prob)\n        print(f\"[{label}] ({confidence:.2%}): {email[:60]}\")\n\nif __name__ == \"__main__\":\n    # Set random seed\n    np.random.seed(42)\n\n    # Demo 1: Text classification\n    text_classification_demo()\n\n    # Demo 2: Compare variants\n    compare_nb_variants()\n\n    # Demo 3: Scratch vs sklearn\n    scratch_vs_sklearn()\n\n    # Demo 4: Spam detection\n    spam_classifier_example()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "============================================================\nText Classification with Naive Bayes\n============================================================\nDataset: 1984 documents, 2 classes\nClasses: ['rec.sport.baseball', 'sci.space']\nTrain: 1587, Test: 397\n\nTraining Multinomial Naive Bayes...\nResults:\nAccuracy: 0.9496\nF1-score: 0.9494\n\nMost informative features per class:\n  rec.sport.baseball: team, game, baseball, pitcher, fans, season, players, hit, win, league\n  sci.space: space, nasa, orbit, launch, moon, earth, mars, satellite, shuttle, solar\n\n============================================================\nComparing Naive Bayes Variants\n============================================================\nGaussian NB           Accuracy: 0.8700  F1: 0.8685\nMultinomial NB        Accuracy: 0.8350  F1: 0.8325\nBernoulli NB          Accuracy: 0.8400  F1: 0.8378\nComplement NB         Accuracy: 0.8450  F1: 0.8433\n\n============================================================\nScratch vs sklearn Gaussian NB\n============================================================\nScratch accuracy: 0.8800\nsklearn accuracy: 0.8800\nMatch: True\n\n============================================================\nSpam Detection with Naive Bayes\n============================================================\n[SPAM] (98.23%): You have won a free vacation! Click to claim.\n[HAM] (94.56%): Are you free for coffee this weekend?\n[SPAM] (87.34%): URGENT: Verify your password immediately.\n[HAM] (91.78%): Here is the report you requested.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Naive Bayes is a generative probabilistic classifier that applies Bayes theorem with the assumption that features are conditionally independent given the class, turning posterior computation into a product of per-feature likelihoods. The independence assumption is rarely true in real data, yet the classifier still works well because the argmax decision is robust to poor probability estimates and dependencies often cancel out across features. Three variants fit different data types: Gaussian NB for continuous features with per-class mean and variance, Multinomial NB for word counts and TF-IDF text, and Bernoulli NB for binary word presence. Laplace smoothing (alpha = 1) prevents zero probabilities for unseen features, and log-space computation avoids floating-point underflow while staying monotonic for the argmax. Training is a single O(n x d) pass, making Naive Bayes extremely fast, incrementally updateable, and strong on high-dimensional sparse text data, though its probabilities are biased toward extremes and correlated features get double counted. It excels as a cheap strong baseline and for spam detection, sentiment analysis, and real-time filtering, while logistic regression typically wins once enough data is available."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P(y|x) is proportional to P(y) times the product of P(x_i|y) per feature"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Variants: Gaussian (continuous), Multinomial (counts), Bernoulli (binary presence)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Laplace smoothing (N_yi + alpha)/(N_y + alpha x n) prevents zero-probability collapse"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log probabilities: sum log P(y) + sum log P(x_i|y) to avoid underflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generative model that learns P(X, y); O(n x d) training, ideal for sparse high-dimensional text"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Limitations: extreme/biased probabilities, correlated features double counted, not for regression"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Independence assumption"
        }), ": Naive Bayes assumes conditional independence of features — it still works well in practice because it only needs the ranking of posterior probabilities to be correct, not their absolute values."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Variant selection"
        }), ": Use Multinomial NB for word counts/TF-IDF text, Bernoulli NB for word presence on short documents, and Gaussian NB for continuous features — matching the variant to the feature type is the single most important correctness decision."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Smoothing"
        }), ": Always apply Laplace smoothing (alpha = 1, tune down to 0.01) — a single unseen word yields P = 0 and multiplies the entire posterior product to zero without it."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Log space"
        }), ": Compute in log space (log P(y) + sum log P(x_i|y)) because multiplying hundreds of sub-1 probabilities underflows floating-point precision."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calibration"
        }), ": Do not ship raw Naive Bayes probabilities as confidence scores — they are extreme (near 0 or 1); use the argmax class and calibrate (Platt or isotonic) if scores are needed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Imbalance"
        }), ": For skewed classes such as 99% ham versus 1% spam, prefer ComplementNB, which scores features against the complement class and counters majority-class bias."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Baseline value"
        }), ": Use Naive Bayes as the cheap strong baseline — linear-time training, millisecond inference, interpretable feature probabilities — then beat it with logistic regression when data is plentiful."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml11-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What is the Naive Bayes assumption and why is it called \"naive\"?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "The Naive Bayes assumption is that all features are conditionally independent given the class label. Formally: P(x1, x2, ..., xn | y) = P(x1|y) × P(x2|y) × ... × P(xn|y). It's called \"naive\" because this independence assumption rarely holds in real data — features are often correlated. For example, in spam detection, the words \"free\" and \"money\" are not independent (they often co-occur). Despite this unrealistic assumption, Naive Bayes works surprisingly well because: 1) the classification decision (argmax) is robust to poor probability estimates, 2) dependencies often cancel out across features, and 3) it works well for high-dimensional sparse data like text."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml11-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: Compare Gaussian, Multinomial, and Bernoulli Naive Bayes. When would you use each?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Gaussian NB"
          }), ": Assumes continuous features follow a normal distribution. Estimates mean and variance per class per feature. Use for: continuous numerical data (height, weight, temperature, sensor readings). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Multinomial NB"
          }), ": Models feature counts (e.g., word frequencies). Use for: text classification with count vectors or TF-IDF, document categorization, spam filtering. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Bernoulli NB"
          }), ": Models binary features (presence/absence). Use for: text classification with binary bag-of-words (word present vs not present), short text classification, and situations where word frequency doesn't matter but presence does. For text: Multinomial NB generally outperforms Bernoulli NB when documents vary in length. Bernoulli NB is better for short documents where counting doesn't make sense."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml11-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: What is Laplace smoothing and why is it needed in Naive Bayes?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Laplace smoothing (add-1 smoothing) adds 1 to all feature counts to prevent zero probabilities. Without smoothing, if a feature never appeared in a particular class during training, its probability would be zero. Since Naive Bayes multiplies probabilities, a single zero gives the entire posterior probability as zero — regardless of other features. Laplace smoothing: P(x_i|y) = (N_yi + α) / (N_y + α × n). α=1 is Laplace, α<1 is Lidstone. Larger α means more smoothing. In practice, α between 0.01 and 1.0 works well. For text classification with a large vocabulary, smoothing is essential because many words in the test set may not have appeared in every class during training."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml11-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: Why do we use log probabilities in Naive Bayes?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["We use log probabilities because: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Numerical stability"
          }), ": Multiplying many small probabilities (e.g., 0.01 × 0.02 × 0.03 × ...) quickly underflows floating-point precision. In log space: log(0.01) + log(0.02) + log(0.03) + ... maintains numerical stability. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Computational efficiency"
          }), ": Addition is faster than multiplication. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Monotonic property"
          }), ": Since log is monotonic, maximizing log P(y|x) gives the same result as maximizing P(y|x). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Derivation"
          }), ": We compute: log P(y) + Σ log P(x_i|y) for each class, and pick the class with the highest value. This is numerically stable and computationally efficient. The log-sum-exp trick further improves stability when computing probabilities from log scores."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml11-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: Naive Bayes is considered a \"generative\" model. What does this mean?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Naive Bayes is generative because it models the joint probability P(X, y) — it learns how data is generated. Specifically, it learns P(y) (prior distribution of classes) and P(X|y) (distribution of features given each class). To classify, it uses Bayes rule: P(y|X) ∝ P(X|y) × P(y). Generative models contrast with discriminative models (like logistic regression) which directly model P(y|X). Advantages of generative approach: can generate new samples, handles missing data naturally, and updates easily with new data. Disadvantages: stronger assumptions required (conditional independence), and often performs worse than discriminative models given enough data."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml11-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: Compare Naive Bayes with Logistic Regression for classification.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Naive Bayes"
          }), ": Generative, models P(X|y), assumes feature independence. Faster to train (one pass over data). Works well with small datasets and high-dimensional sparse data (text). Less prone to overfitting. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Logistic Regression"
          }), ": Discriminative, directly models P(y|X), no independence assumption. Uses optimization (gradient descent) to find weights. Generally more accurate given sufficient data. Better calibrated probabilities. Handles correlated features better. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "When to use"
          }), ": NB for text classification, small data, naive baselines, when model interpretability matters (feature probabilities). LR for larger datasets, when features are correlated, when you need well-calibrated probabilities. In practice, LR often outperforms NB with enough data, but NB is a strong baseline and sometimes outperforms LR on very high-dimensional sparse data."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml11-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: What are the main advantages and limitations of Naive Bayes?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Advantages"
          }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Very fast"
          }), " — linear time O(n × d) for training (one pass). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Works well with high-dimensional data"
          }), " — text classification with 100K+ features. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Handles missing data"
          }), " — naturally handles missing features by ignoring them. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Incremental learning"
          }), " — can update with new data without retraining. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Good with small data"
          }), " — works well with limited training examples. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6) Interpretable"
          }), " — feature probabilities are easily understood. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Limitations"
          }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Independence assumption"
          }), " — rarely true, can hurt performance. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Zero probability problem"
          }), " — requires smoothing (Laplace). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Not good for regression"
          }), " — strictly a classifier. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Biased probability estimates"
          }), " — probabilities are often extreme (close to 0 or 1). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Sensitive to correlated features"
          }), " — duplicates features get double counted."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml11-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How does Naive Bayes handle continuous features?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["There are several approaches: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Gaussian NB"
          }), ": assumes each feature follows a normal distribution per class. Estimate μ (mean) and σ² (variance) from training data. P(x_i|y) = Gaussian PDF with class-specific parameters. Best when data is approximately normal. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Discretization"
          }), ": bin continuous values into discrete intervals (e.g., age: 0-18, 19-35, 36-50, 50+). Then use Multinomial or Bernoulli NB. Can work better than Gaussian if distribution isn't normal, but loses information. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Kernel density estimation"
          }), ": non-parametric density estimation (e.g., Gaussian KDE) for more flexible distributions. More accurate but slower. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Use a different algorithm entirely"
          }), ": if continuous features don't satisfy the independence assumption, consider Logistic Regression or SVM instead."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml11-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: Explain the Complement Naive Bayes variant.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Complement Naive Bayes (CNB) is a variant of Multinomial NB designed for imbalanced datasets. Instead of computing P(feature|class), CNB computes P(feature|complement of class) — the probability of a feature given all OTHER classes. The prediction is based on which complement probability is lowest (i.e., which class the features least resemble). CNB is particularly effective for text classification with severe class imbalance. For example, if 99% of emails are ham and 1% spam, standard Multinomial NB may bias predictions toward the majority class. CNB corrects this by computing feature probabilities from all complement classes. In sklearn: ComplementNB. It often outperforms MultinomialNB on imbalanced text data."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml11-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How would you use Naive Bayes for real-time spam filtering at Gmail scale?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Architecture"
          }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Feature extraction"
          }), ": Extract tokens from email body, subject, sender, headers. Use n-grams (1-3), TF-IDF weighting. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Model"
          }), ": Multinomial NB with Complement NB variant for imbalanced classes. Trained on millions of labeled emails. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Training pipeline"
          }), ": Daily or hourly retraining on new spam patterns. Feature selection: keep top 100K features by mutual information. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Inference"
          }), ": For each incoming email, compute log-probability score. If score > threshold, flag as spam. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Threshold tuning"
          }), ": Adjust threshold to balance false positive rate (bad: flagging legitimate email) vs false negative (bad: letting spam through). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6) Feedback loop"
          }), ": Users marking \"not spam\" or \"report spam\" feeds back into training. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "7) Scale"
          }), ": NB inference is extremely fast — milliseconds per email. Can handle billions of emails/day with a modest server cluster."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1"
      }), ": What assumption does Naive Bayes make about features?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) They are normally distributed\nb) They are conditionally independent given the class\nc) They have zero mean\nd) They are linearly separable"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml11-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Conditionally independent given the class"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Naive Bayes assumes P(x1, x2, ..., xn | y) = P(x1|y) × P(x2|y) × ... × P(xn|y)."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": Which Naive Bayes variant is best for text classification with word counts?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Gaussian NB\nb) Multinomial NB\nc) Bernoulli NB\nd) Complement NB"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml11-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Multinomial NB"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Multinomial NB models feature counts (word frequencies), making it ideal for text classification with bag-of-words or TF-IDF vectors."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": What problem does Laplace smoothing solve?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Overfitting\nb) Underfitting\nc) Zero probabilities for unseen features\nd) Slow training"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml11-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) Zero probabilities for unseen features"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Laplace smoothing adds a small constant to all counts to prevent zero probabilities when a feature didn't appear in a class during training."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": Why are log probabilities used in Naive Bayes?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Faster multiplication\nb) Numerical stability against underflow\nc) Better accuracy\nd) Simpler implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml11-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Numerical stability against underflow"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Multiplying many small probabilities causes floating-point underflow. Log probabilities convert multiplication to addition and maintain numerical stability."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": What type of model is Naive Bayes?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Discriminative\nb) Generative\nc) Reinforcement\nd) Non-parametric"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ml11-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Generative"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Naive Bayes models the joint probability P(X, y) = P(y) × P(X|y), making it a generative model. It can generate synthetic data and handles missing values naturally."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Implement Gaussian Naive Bayes from scratch on the Iris dataset. Compare with sklearn's GaussianNB."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Use sklearn's MultinomialNB for sentiment classification on a movie reviews dataset. Print accuracy and confusion matrix."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Build a spam classifier pipeline with CountVectorizer, TfidfTransformer, and MultinomialNB. Tune alpha and ngram_range."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Compare Gaussian, Multinomial, Bernoulli, and Complement NB on a text classification dataset. Which variant performs best and why?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Implement Multinomial Naive Bayes from scratch with Laplace smoothing. Train on 20 newsgroups and match sklearn's accuracy."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Build an online learning system with Naive Bayes that updates incrementally as new labeled emails arrive."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Using Gaussian NB for text data — Gaussian assumes continuous normal distribution, but text features are counts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not using Laplace smoothing — unseen words in test set cause zero probabilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forgetting to use log probabilities — numerical underflow with many features"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Using raw counts instead of TF-IDF for text classification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assuming Naive Bayes gives well-calibrated probabilities — they tend to be extreme (close to 0 or 1)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bayes theorem: P(y|x) = P(x|y) × P(y) / P(x)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Naive assumption: features are conditionally independent given the class"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gaussian NB: continuous features with normal distribution per class"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multinomial NB: count features (text classification, bag-of-words)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bernoulli NB: binary features (word presence/absence)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Laplace smoothing: add α to all counts to prevent zero probabilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log probabilities: sum logs instead of multiplying to avoid underflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generative model: models P(X, y), can generate new samples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Advantages: fast, works with high-dim data, incremental, interpretable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Limitations: independence assumption, biased probabilities, correlated features hurt"
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
            children: "Explain the core idea of Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications."
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
            children: "Describe a production bug caused by misunderstanding Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications from 10 users to 10 million?"
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
            children: "Compare Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications."
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
            children: "How does Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications in production today?"
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
        }), " Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications on an empty input?"
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
            children: "Complete Medium exercises, explain Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications to someone else"
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
        children: "Always write a one-line example of Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications."
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
        children: "Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications."
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
        children: "Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications is like a recipe"
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
        }), " — this chapter contributes the Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-11naivebayes-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What assumption does Naive Bayes make about features?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Conditionally independent given the class"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-11naivebayes-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which Naive Bayes variant is best for text classification with word counts?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Multinomial NB"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-11naivebayes-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What problem does Laplace smoothing solve?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) Zero probabilities for unseen features"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-11naivebayes-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Why are log probabilities used in Naive Bayes?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Numerical stability against underflow"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "08machinelearning-11naivebayes-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What type of model is Naive Bayes?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Generative"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications in production at scale"
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
        children: "Testing: pytest for unit tests of Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications code."]
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
        }), " or your IDE's debugger to step through the Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications example code."]
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
        children: "Explain Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications."
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
        children: "Tell me about a time you debugged a Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications without notes"
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
        }), ": a small team uses Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/08-machine-learning/12-feature-engineering",
        children: "Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Naive Bayes — Bayes Theorem, Probabilistic Classification, Text Applications depends on input size and distribution — always benchmark for your own data."
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