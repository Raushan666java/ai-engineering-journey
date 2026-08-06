"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[47935],{

/***/ 49182
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_machine_learning_01_introduction_md_c2f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-machine-learning-01-introduction-md-c2f.json
const site_docs_courses_machine_learning_01_introduction_md_c2f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/machine-learning/01-introduction","title":"Chapter 1: Introduction to Machine Learning","description":"Previous Linear Regression","source":"@site/docs/courses/machine-learning/01-introduction.md","sourceDirName":"courses/machine-learning","slug":"/machine-learning/01-introduction","permalink":"/ai-engineering-journey/machine-learning/01-introduction","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"01-introduction","slug":"/machine-learning/01-introduction","title":"Chapter 1: Introduction to Machine Learning","sidebar_label":"Chapter 1: Introduction to Machine Learning","sidebar_position":1},"sidebar":"coursesSidebar","previous":{"title":"Machine Learning — Complete University Textbook","permalink":"/ai-engineering-journey/machine-learning/index"},"next":{"title":"Chapter 2: Linear Regression","permalink":"/ai-engineering-journey/machine-learning/02-linear-regression"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/machine-learning/01-introduction.md


const frontMatter = {
	id: '01-introduction',
	slug: '/machine-learning/01-introduction',
	title: 'Chapter 1: Introduction to Machine Learning',
	sidebar_label: 'Chapter 1: Introduction to Machine Learning',
	sidebar_position: 1
};
const contentTitle = 'Chapter 1: Introduction to Machine Learning';

const assets = {

};

/*End Image Gallery*/


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
  "value": "What is Machine Learning?",
  "id": "what-is-machine-learning",
  "level": 3
}, {
  "value": "Formal Problem Definition",
  "id": "formal-problem-definition",
  "level": 3
}, {
  "value": "Hypothesis Space and Inductive Bias",
  "id": "hypothesis-space-and-inductive-bias",
  "level": 3
}, {
  "value": "Types of Machine Learning",
  "id": "types-of-machine-learning",
  "level": 3
}, {
  "value": "Types of Supervised Learning Problems",
  "id": "types-of-supervised-learning-problems",
  "level": 3
}, {
  "value": "The Inductive Learning Hypothesis",
  "id": "the-inductive-learning-hypothesis",
  "level": 3
}, {
  "value": "No Free Lunch Theorem",
  "id": "no-free-lunch-theorem",
  "level": 3
}, {
  "value": "The Machine Learning Pipeline",
  "id": "the-machine-learning-pipeline",
  "level": 3
}, {
  "value": "TypeScript: ML Pipeline",
  "id": "typescript-ml-pipeline",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Email Spam Filter (Supervised Learning)",
  "id": "example-1-email-spam-filter-supervised-learning",
  "level": 3
}, {
  "value": "Example 2: Customer Segmentation (Unsupervised Learning)",
  "id": "example-2-customer-segmentation-unsupervised-learning",
  "level": 3
}, {
  "value": "Example 3: ML Problem Setup Runner (TypeScript)",
  "id": "example-3-ml-problem-setup-runner-typescript",
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
  "value": "TypeScript: Model Evaluation Metrics",
  "id": "typescript-model-evaluation-metrics",
  "level": 3
}, {
  "value": "TypeScript Implementation: Linear Regression from Scratch",
  "id": "typescript-implementation-linear-regression-from-scratch",
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
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
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
        id: "chapter-1-introduction-to-machine-learning",
        children: "Chapter 1: Introduction to Machine Learning"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " None | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/machine-learning/02-linear-regression",
          children: "Linear Regression"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define machine learning formally and distinguish it from traditional programming paradigms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Categorize machine learning problems into supervised, unsupervised, reinforcement, and hybrid variants"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the formal components of a learning problem: task T, experience E, performance measure P"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the hypothesis space and the role of inductive bias in generalization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the No Free Lunch theorem and its implications for algorithm selection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Walk through the complete ML pipeline from data collection to production deployment"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "lesson-visuals",
      "aria-label": "Visual learning resources",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.header, {
        children: [(0,jsx_runtime.jsx)(_components.span, {
          children: "VISUAL LEARNING"
        }), (0,jsx_runtime.jsx)(_components.h2, {
          children: "See it. Review it. Remember it."
        })]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/machine-learning/01-introduction/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/machine-learning/01-introduction/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/machine-learning/01-introduction/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/machine-learning/01-introduction/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/machine-learning/01-introduction/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/machine-learning/01-introduction/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Definition of ML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ML learns patterns from data without explicit rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start with data, not rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supervised Learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Learns mapping from labeled inputs to outputs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use when you have labeled historical data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unsupervised Learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discovers hidden patterns in unlabeled data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Great for exploration and segmentation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reinforcement Learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent learns via trial-and-error rewards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best for sequential decision-making"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hypothesis Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The set of all possible models the algorithm can represent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Larger spaces require more data or stronger inductive bias"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inductive Bias"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assumptions the learner makes to generalize beyond training data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Without bias, learning from finite data is impossible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No Free Lunch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No single algorithm dominates all problem distributions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Match algorithm to problem structure, not fashion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ML Pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structured workflow from data to deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Follow the pipeline to avoid costly mistakes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Problem Definition] --> B[Data Collection]\n    B --> C[Data Preparation]\n    C --> D[Model Selection]\n    D --> E[Training]\n    E --> F[Evaluation]\n    F --> G[Deployment]\n    G --> H[Monitor & Maintain]\n    H -.-> A\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    Q{Problem Type?} --> Q1[Prediction?]\n    Q --> Q2[Structure Discovery?]\n    Q --> Q3[Sequential Decisions?]\n    Q1 -->|Labels available| S1[Supervised]\n    Q1 -->|No labels| S2[Unsupervised]\n    S1 -->|Continuous target| REG[Regression]\n    S1 -->|Discrete target| CLF[Classification]\n    S2 -->|Groups| CLUST[Clustering]\n    S2 -->|Simplify| DR[Dimensionality Reduction]\n    Q3 --> RL[Reinforcement Learning]\n    REG --> D1[Linear Regression, RF, XGBoost]\n    CLF --> D2[Logistic Regression, SVM, Neural Nets]\n    CLUST --> D3[K-Means, DBSCAN, Hierarchical]\n    DR --> D4[PCA, t-SNE, Autoencoders]\n    RL --> D5[Q-Learning, Policy Gradients]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-machine-learning",
      children: "What is Machine Learning?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Machine learning is a subset of artificial intelligence that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. In traditional programming, a developer writes explicit if-then-else logic to process data. In machine learning, an algorithm uses data and statistical techniques to infer the underlying rules."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Arthur Samuel"
      }), " (1959): \"The field of study that gives computers the ability to learn without being explicitly programmed.\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tom Mitchell"
      }), " (1997) ? a more precise, formal definition: \"A computer program is said to learn from experience $E$ with respect to some class of tasks $T$ and performance measure $P$, if its performance at tasks in $T$, as measured by $P$, improves with experience $E$.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "formal-problem-definition",
      children: "Formal Problem Definition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every machine learning problem consists of three components:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task $T$"
        }), ": What the system should do (e.g., classify emails as spam/ham, predict housing prices)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Experience $E$"
        }), ": The data the system sees (e.g., 10,000 labeled emails, 5,000 housing records)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Performance Measure $P$"
        }), ": How we evaluate success (e.g., accuracy, MSE, F1-score)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A learning algorithm takes experience $E$ as input and outputs a hypothesis $h \\in \\mathcal{H}$ (the hypothesis space) that performs task $T$. The goal is to find $h$ that maximizes $P$ on unseen data, not just the training set."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hypothesis-space-and-inductive-bias",
      children: "Hypothesis Space and Inductive Bias"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "hypothesis space"
      }), " $\\mathcal{H}$ is the set of all functions the learning algorithm can possibly produce. For linear regression, $\\mathcal{H}$ contains all linear functions. For neural networks, it contains an enormous family of non-linear functions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A larger $\\mathcal{H}$ means the algorithm can represent more complex patterns, but it also increases the risk of overfitting (memorizing noise)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Inductive Bias"
      }), " is the set of assumptions a learner uses to select one hypothesis over another when multiple hypotheses fit the training data equally well. There are two main types:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sebe's Bias (Preference Bias)"
        }), ": The learner prefers simpler hypotheses (e.g., Occam's razor ? shorter decision trees, smaller weights)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mitchell's Bias (Language Bias)"
        }), ": The hypothesis space itself restricts what concepts can be learned (e.g., a linear classifier cannot represent XOR)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without inductive bias, learning from finite data is impossible ? an unbiased learner would treat all hypotheses consistent with the data as equally valid, resulting in no basis for choosing one over another on unseen examples."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Input\n        D[Training Data]\n    end\n    subgraph Learning\n        A[Learning Algorithm] --> H[Hypothesis Space H]\n        D --> A\n        B[Inductive Bias] --> A\n    end\n    subgraph Output\n        H --> h[Selected Hypothesis h*]\n    end\n    h --> P[Prediction on New Data]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "types-of-machine-learning",
      children: "Types of Machine Learning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Machine learning algorithms fall into three primary categories based on the nature of the learning signal available:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Signal"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Goal"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Algorithms"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supervised Learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Labeled pairs $(x, y)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Learn mapping $f: X \\to Y$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear regression, logistic regression, SVM, neural nets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unsupervised Learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlabeled inputs $x$ alone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discover hidden structure $p(x)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K-means, PCA, DBSCAN, autoencoders"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reinforcement Learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reward signal $r$ from environment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Learn policy $\\pi(s) \\to a$ that maximizes cumulative reward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q-learning, Policy gradients, DQN"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hybrid paradigms"
      }), " also exist:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Semi-Supervised Learning"
        }), ": Combines a small set of labeled data with a large set of unlabeled data. Common when labeling is expensive (medical imaging, web page classification)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Self-Supervised Learning"
        }), ": The model generates its own labels from the data structure (e.g., predicting masked words in a sentence, predicting the next frame in a video). This powers modern LLMs like GPT and BERT."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-Task Learning"
        }), ": A single model is trained on multiple related tasks simultaneously, sharing representations across tasks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Active Learning"
        }), ": The algorithm selectively queries a human annotator for labels on the most informative examples."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "types-of-supervised-learning-problems",
      children: "Types of Supervised Learning Problems"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target $y$"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loss Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evaluation Metric"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Regression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous ($\\mathbb{R}$)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MSE, MAE, Huber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$R^2$, RMSE, MAE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binary Classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "${0, 1}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary cross-entropy, hinge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accuracy, precision, recall, F1, AUC-ROC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-class Classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "${1, 2, \\dots, K}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Categorical cross-entropy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accuracy, macro-F1, confusion matrix"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-label Classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "${0, 1}^K$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary cross-entropy per label"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precision@K, label-ranking average precision"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ordinal Regression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered categories"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cumulative logit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quadratic-weighted kappa, MAE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ranking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered lists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pairwise ranking hinge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NDCG, MAP, MRR"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-inductive-learning-hypothesis",
      children: "The Inductive Learning Hypothesis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A fundamental assumption in machine learning:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Any hypothesis found to approximate the target function well over a sufficiently large set of training examples will also approximate the target function well over other unobserved examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This assumption is what makes generalization possible ? but it only holds when:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The training data is representative (drawn i.i.d. from the same distribution as the test data)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The hypothesis space is appropriately sized (not too large, not too small)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The inductive bias is aligned with the true underlying function"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "no-free-lunch-theorem",
      children: "No Free Lunch Theorem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The No Free Lunch (NFL) theorem (Wolpert, 1996) states:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Averaged over all possible data distributions, no learning algorithm performs better than any other."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In other words, if an algorithm performs exceptionally well on one class of problems, it must perform correspondingly worse on others. There is no universal best learner."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Practical implications"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Algorithm performance is problem-dependent ? always match the algorithm to the data characteristics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Domain knowledge (feature engineering, choice of inductive bias) is what distinguishes successful ML projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensemble of diverse algorithms can hedge against NFL ? if one fails on a distribution shift, another may succeed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The theorem motivates the need for cross-validation and empirical comparison on your specific dataset"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-machine-learning-pipeline",
      children: "The Machine Learning Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A typical ML project follows a structured workflow with feedback loops:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Problem Definition"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Translate business objectives into ML tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define success metrics ($P$)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine feasibility: do we have enough data? Is the signal strong enough?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Data Collection"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify data sources: databases, APIs, logs, sensors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider quantity (how many examples needed?) and quality (noise, bias, missing values)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Legal and ethical considerations: privacy, consent, fairness"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Data Preparation (often 60-80% of project time)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cleaning: handle missing values, remove duplicates, fix data-type errors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transformation: scaling, normalization, encoding categorical variables"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Feature engineering: create new features from domain knowledge"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Splitting: training / validation / test sets"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Model Selection"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start with a simple baseline (mean predictor, linear model)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Iterate toward more complex models as needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use cross-validation to compare candidates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Training"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Feed prepared data into the learning algorithm"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optimize parameters to minimize the loss function"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor for convergence and overfitting"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "6. Evaluation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assess performance on the held-out test set"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute multiple metrics relevant to the problem"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Error analysis: where does the model fail? Are failures systematic?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "7. Deployment"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrate model into production system"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set up API endpoints, batch prediction jobs, or edge deployment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build monitoring for data drift, concept drift, and performance degradation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "8. Monitor & Maintain"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track prediction distributions vs. training distributions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Retrain on fresh data periodically"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Roll back if metrics degrade"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-ml-pipeline",
      children: "TypeScript: ML Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Dataset<T, U> { features: T[]; labels: U[]; }\n\nabstract class MLModel<T, U> {\n  abstract train(data: Dataset<T, U>): void;\n  abstract predict(input: T): U;\n  evaluate(test: Dataset<T, U>): { accuracy: number } {\n    let correct = 0;\n    for (let i = 0; i < test.features.length; i++)\n      if (this.predict(test.features[i]) === test.labels[i]) correct++;\n    return { accuracy: correct / test.features.length };\n  }\n}\n\nclass KNN extends MLModel<number[], number> {\n  private data: Dataset<number[], number> = { features: [], labels: [] };\n  constructor(private k = 3) { super(); }\n  train(data: Dataset<number[], number>): void { this.data = data; }\n  predict(input: number[]): number {\n    const dists = this.data.features\n      .map((f, i) => ({ d: Math.sqrt(f.reduce((s, v, j) => s + (v - input[j]) ** 2, 0)), l: this.data.labels[i] }))\n      .sort((a, b) => a.d - b.d);\n    const votes = new Map<number, number>();\n    for (let i = 0; i < this.k; i++) votes.set(dists[i].l, (votes.get(dists[i].l) ?? 0) + 1);\n    return [...votes.entries()].sort((a, b) => b[1] - a[1])[0][0];\n  }\n}\n\nfunction trainTestSplit<T, U>(data: Dataset<T, U>, ratio = 0.2): { train: Dataset<T, U>; test: Dataset<T, U> } {\n  const idx = Array.from({ length: data.features.length }, (_, i) => i);\n  for (let i = idx.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; }\n  const split = Math.floor(idx.length * (1 - ratio));\n  return {\n    train: { features: idx.slice(0, split).map(i => data.features[i]), labels: idx.slice(0, split).map(i => data.labels[i]) },\n    test: { features: idx.slice(split).map(i => data.features[i]), labels: idx.slice(split).map(i => data.labels[i]) },\n  };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"Phase 1: Problem\"\n        A[Business Understanding] --> B[ML Problem Formulation]\n        B --> C[Feasibility Check]\n    end\n    subgraph \"Phase 2: Data\"\n        D[Data Collection] --> E[Data Cleaning]\n        E --> F[Feature Engineering]\n        F --> G[Train/Val/Test Split]\n    end\n    subgraph \"Phase 3: Modeling\"\n        G --> H[Baseline Model]\n        H --> I[Algorithm Selection]\n        I --> J[Hyperparameter Tuning]\n        J --> K[Ensemble / Refine]\n    end\n    subgraph \"Phase 4: Production\"\n        K --> L[Final Evaluation]\n        L --> M[Deployment]\n        M --> N[Monitoring]\n        N -.->|Data Drift Detected| D\n        N -.->|Model Degradation| I\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Machine learning systems improve through experience by identifying patterns in data, following a structured pipeline from problem definition to deployment."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " The ML pipeline is iterative, not linear ? you will often loop back to data preparation after evaluating your first model."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-email-spam-filter-supervised-learning",
      children: "Example 1: Email Spam Filter (Supervised Learning)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This example demonstrates a classic binary classification problem."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task $T$"
        }), ": Classify an incoming email as \"Spam\" or \"Not Spam\" (Ham)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Experience $E$"
        }), ": A collection of 50,000 emails, each labeled by a human reader."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Performance $P$"
        }), ": F1-score on a held-out test set of 10,000 emails."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Approach"
        }), ": The model learns that certain words (\"free,\" \"winner,\" \"urgent\") occur more frequently in spam. The decision boundary separates spam from ham in the feature space of word frequencies."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Walkthrough"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Collect historical emails with labels"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extract features: bag-of-words or TF-IDF vectors from email body and subject"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Train a classifier (logistic regression, Naive Bayes, or Random Forest)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate on held-out set: precision, recall, false positive rate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy as an email server plugin that moves suspected spam to a separate folder"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-customer-segmentation-unsupervised-learning",
      children: "Example 2: Customer Segmentation (Unsupervised Learning)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This example shows how to group data without predefined labels."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task $T$"
        }), ": Group customers into distinct segments for targeted marketing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Experience $E$"
        }), ": Purchase history, time spent on site, demographics for 100,000 users."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Performance $P$"
        }), ": Silhouette score; business validation via A/B testing of marketing campaigns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Approach"
        }), ": A clustering algorithm (K-means) identifies groups with similar behavior."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Walkthrough"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Preprocess: normalize features (income and age have different scales)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run K-means with $K=4$ clusters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interpret segments: \"High-spenders,\" \"Bargain hunters,\" \"Window shoppers,\" \"Loyalists\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate by designing targeted campaigns and measuring lift in conversion rate"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-ml-problem-setup-runner-typescript",
      children: "Example 3: ML Problem Setup Runner (TypeScript)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * Formal ML problem definition and hypothesis space exploration\n */\ninterface MLProblem {\n    name: string;\n    taskType: 'regression' | 'binary_classification' | 'multiclass' | 'clustering';\n    features: number;\n    samples: number;\n    task: string;\n    experience: string;\n    performance: string;\n}\n\nclass HypothesisSpace {\n    private capacity: number;\n    private bias: string;\n\n    constructor(capacity: number, bias: string) {\n        this.capacity = capacity;\n        this.bias = bias;\n    }\n\n    fitsProblem(problem: MLProblem): boolean {\n        return this.capacity >= problem.features;\n    }\n\n    describe(): string {\n        return `Hypothesis space: capacity=${this.capacity}, inductive bias=\"${this.bias}\"`;\n    }\n}\n\nfunction evaluateLearning(problem: MLProblem, hypothesis: HypothesisSpace): string {\n    const dataRatio = problem.samples / problem.features;\n    let verdict: string;\n\n    if (dataRatio < 10) {\n        verdict = `HIGH RISK: Only ${dataRatio.toFixed(1)} samples per feature. Strong inductive bias required.`;\n    } else if (dataRatio < 50) {\n        verdict = `MODERATE: ${dataRatio.toFixed(1)} samples per feature. Moderate regularization recommended.`;\n    } else {\n        verdict = `LOW RISK: ${dataRatio.toFixed(1)} samples per feature. Sufficient data for complex hypothesis spaces.`;\n    }\n\n    return `Problem: ${problem.name} (${problem.taskType})\\n` +\n           `Samples: ${problem.samples}, Features: ${problem.features}\\n` +\n           `Task: ${problem.task}\\n` +\n           `Performance measure: ${problem.performance}\\n` +\n           hypothesis.describe() + '\\n' +\n           `Veridct: ${verdict}`;\n}\n\nconst spamFilter: MLProblem = {\n    name: 'Email Spam Detection',\n    taskType: 'binary_classification',\n    features: 50000,\n    samples: 50000,\n    task: 'Classify email as spam or ham',\n    experience: '50,000 labeled emails with word frequency features',\n    performance: 'F1-score on held-out test set'\n};\n\nconst housingPrice: MLProblem = {\n    name: 'House Price Prediction',\n    taskType: 'regression',\n    features: 15,\n    samples: 5000,\n    task: 'Predict median house price from features',\n    experience: '5,000 housing records with 15 features each',\n    performance: 'RMSE and R-squared on test set'\n};\n\nconst linearHypothesis = new HypothesisSpace(100, 'Linear relationships between features and target');\nconst neuralHypothesis = new HypothesisSpace(1000000, 'Complex non-linear feature interactions');\n\nconsole.log(evaluateLearning(spamFilter, linearHypothesis));\nconsole.log('---');\nconsole.log(evaluateLearning(housingPrice, neuralHypothesis));\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output"
      }), ": Shows how sample-to-feature ratio and hypothesis space capacity determine the learning strategy."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Real-world ML applications span both supervised tasks like spam filtering and unsupervised tasks like customer segmentation, with the choice of algorithm guided by problem structure and data availability."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Start with a simple model before trying complex algorithms. A baseline model gives you a benchmark to measure whether sophisticated methods actually add value."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Problem structure determines algorithm choice"
        }), " ? match the learning paradigm (supervised, unsupervised, RL) to the available signal"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hypothesis spaces interact with data quantity"
        }), " ? larger hypothesis spaces need more data or stronger inductive bias"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No Free Lunch is real"
        }), " ? test multiple algorithms on your specific data rather than relying on default choices"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pipeline discipline prevents failures"
        }), " ? skipping data preparation or evaluation leads to models that fail in production"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monitoring is not optional"
        }), " ? data distributions shift over time; production models require continuous validation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Supervised Learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Learns from labeled (x, y) pairs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires ground-truth labels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spam detection, price prediction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unsupervised Learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finds patterns in unlabeled data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No labels needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer segmentation, anomaly detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reinforcement Learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Learns via rewards from environment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential decisions with delayed feedback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Game playing, robotics, autonomous driving"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Traditional Programming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit rules coded by developer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No learning; static behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Payroll calculation, inventory management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Semi-Supervised Learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combines few labels with much unlabeled data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces labeling cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medical imaging, web page classification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Self-Supervised Learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generates labels from data structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scales to massive unlabeled corpora"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LLM pretraining (GPT, BERT)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Generalization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model performs well on new unseen data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ultimate goal of all ML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All deployment scenarios"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Feature"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Individual measurable property of a data point"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Label"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The output value (target) to be predicted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Training Set"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data used to fit the model's parameters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Validation Set"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data used for hyperparameter tuning and model selection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Test Set"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Held-out data for evaluating final performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hypothesis Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set of all possible models the algorithm can produce"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inductive Bias"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assumptions made to generalize beyond training data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Overfitting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model memorizes training data, fails on new data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Underfitting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model is too simple to capture underlying patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bias"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error from incorrect assumptions in the learning algorithm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Variance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error from sensitivity to small fluctuations in training data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hyperparameter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration set before training begins"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cross-Validation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Technique for assessing model stability across data splits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Generalization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ability to perform well on unseen data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ML Paradigm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Healthcare"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Finance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "E-Commerce"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Autonomous Systems"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supervised"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disease diagnosis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fraud detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Product recommendation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object recognition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unsupervised"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patient clustering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Market segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer profiling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anomaly in sensor data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reinforcement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Treatment policy optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trading strategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic pricing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path planning and control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Self-Supervised"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protein folding prediction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Product representation learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scene representation learning"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Which component of Tom Mitchell's formal definition refers to the training data fed to the algorithm?\nA) Task T\nB) Experience E\nC) Performance measure P\nD) Hypothesis space H"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** Experience E represents the data the system sees during learning.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the primary implication of the No Free Lunch theorem?\nA) All ML algorithms are equally computationally expensive\nB) No single algorithm is best for all problem distributions\nC) Free lunch refers to the cost of training data\nD) The theorem only applies to unsupervised learning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** Averaged over all possible problems, no learner outperforms any other ? algorithm choice must be problem-specific.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A dataset has 200 samples and 200 features. What is the primary concern?\nA) The model will underfit\nB) The ratio of samples to features is dangerously low\nC) The data is perfectly balanced\nD) Feature scaling is impossible"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** With a 1:1 sample-to-feature ratio, the model can easily memorize the data (overfit) without learning generalizable patterns.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is inductive bias necessary for machine learning?\nA) It eliminates the need for training data\nB) Without it, all hypotheses consistent with data are equally valid\nC) It guarantees the global optimum\nD) It reduces the computational cost of training"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** Inductive bias provides the assumptions needed to select one hypothesis over another, enabling generalization beyond training data.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In the ML pipeline, which step typically consumes the most time?\nA) Model Selection\nB) Training\nC) Data Preparation\nD) Deployment"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** Data preparation (cleaning, transformation, feature engineering) commonly accounts for 60-80% of project time.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-model-evaluation-metrics",
      children: "TypeScript: Model Evaluation Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * Comprehensive model evaluation metrics implementation\n */\ninterface ClassificationMetrics {\n    accuracy: number;\n    precision: number;\n    recall: number;\n    f1Score: number;\n    specificity: number;\n    mcc: number;\n}\n\nclass ConfusionMatrix {\n    constructor(\n        public tp: number,\n        public fp: number,\n        public tn: number,\n        public fn: number\n    ) {}\n\n    accuracy(): number {\n        const total = this.tp + this.tn + this.fp + this.fn;\n        return total === 0 ? 0 : (this.tp + this.tn) / total;\n    }\n\n    precision(): number {\n        return this.tp + this.fp === 0 ? 0 : this.tp / (this.tp + this.fp);\n    }\n\n    recall(): number {\n        return this.tp + this.fn === 0 ? 0 : this.tp / (this.tp + this.fn);\n    }\n\n    f1Score(): number {\n        const p = this.precision();\n        const r = this.recall();\n        return p + r === 0 ? 0 : 2 * (p * r) / (p + r);\n    }\n\n    specificity(): number {\n        return this.tn + this.fp === 0 ? 0 : this.tn / (this.tn + this.fp);\n    }\n\n    mcc(): number {\n        const num = this.tp * this.tn - this.fp * this.fn;\n        const den = Math.sqrt(\n            (this.tp + this.fp) * (this.tp + this.fn) *\n            (this.tn + this.fp) * (this.tn + this.fn)\n        );\n        return den === 0 ? 0 : num / den;\n    }\n}\n\nfunction binaryConfusionMatrix(\n    actual: number[],\n    predicted: number[]\n): ConfusionMatrix {\n    let tp = 0, fp = 0, tn = 0, fn = 0;\n    for (let i = 0; i < actual.length; i++) {\n        if (predicted[i] === 1 && actual[i] === 1) tp++;\n        else if (predicted[i] === 1 && actual[i] === 0) fp++;\n        else if (predicted[i] === 0 && actual[i] === 0) tn++;\n        else if (predicted[i] === 0 && actual[i] === 1) fn++;\n    }\n    return new ConfusionMatrix(tp, fp, tn, fn);\n}\n\nfunction multiclassReport(\n    actual: number[],\n    predicted: number[],\n    numClasses: number\n): Map<number, ClassificationMetrics> {\n    const report = new Map<number, ClassificationMetrics>();\n    for (let c = 0; c < numClasses; c++) {\n        const ba = actual.map(a => a === c ? 1 : 0);\n        const bp = predicted.map(p => p === c ? 1 : 0);\n        const cm = binaryConfusionMatrix(ba, bp);\n        report.set(c, {\n            accuracy: cm.accuracy(),\n            precision: cm.precision(),\n            recall: cm.recall(),\n            f1Score: cm.f1Score(),\n            specificity: cm.specificity(),\n            mcc: cm.mcc()\n        });\n    }\n    return report;\n}\n\nfunction kFoldCrossValidation(\n    modelFactory: new () => MLModel<number[], number>,\n    data: Dataset<number[], number>,\n    k: number = 5\n): { folds: ConfusionMatrix[]; mean: ClassificationMetrics; std: ClassificationMetrics } {\n    const indices = Array.from({ length: data.features.length }, (_, i) => i)\n        .sort(() => Math.random() - 0.5);\n    const foldSize = Math.floor(indices.length / k);\n    const folds: ConfusionMatrix[] = [];\n\n    for (let i = 0; i < k; i++) {\n        const testSet = new Set(indices.slice(i * foldSize, (i + 1) * foldSize));\n        const train: Dataset<number[], number> = { features: [], labels: [] };\n        const test: Dataset<number[], number> = { features: [], labels: [] };\n\n        for (let j = 0; j < data.features.length; j++) {\n            if (testSet.has(j)) {\n                test.features.push(data.features[j]);\n                test.labels.push(data.labels[j]);\n            } else {\n                train.features.push(data.features[j]);\n                train.labels.push(data.labels[j]);\n            }\n        }\n\n        const model = new modelFactory();\n        model.train(train);\n        const predicted = test.features.map(f => model.predict(f));\n        folds.push(binaryConfusionMatrix(test.labels, predicted));\n    }\n\n    const allMetrics = folds.map(f => ({\n        accuracy: f.accuracy(), precision: f.precision(),\n        recall: f.recall(), f1Score: f.f1Score(),\n        specificity: f.specificity(), mcc: f.mcc()\n    }));\n\n    const avg = (vals: number[]) =>\n        vals.reduce((s, v) => s + v, 0) / vals.length;\n    const stdDev = (vals: number[], m: number) =>\n        Math.sqrt(vals.reduce((s, v) => s + (v - m) ** 2, 0) / vals.length);\n\n    const mean: ClassificationMetrics = {\n        accuracy: avg(allMetrics.map(m => m.accuracy)),\n        precision: avg(allMetrics.map(m => m.precision)),\n        recall: avg(allMetrics.map(m => m.recall)),\n        f1Score: avg(allMetrics.map(m => m.f1Score)),\n        specificity: avg(allMetrics.map(m => m.specificity)),\n        mcc: avg(allMetrics.map(m => m.mcc)),\n    };\n\n    const std: ClassificationMetrics = {\n        accuracy: stdDev(allMetrics.map(m => m.accuracy), mean.accuracy),\n        precision: stdDev(allMetrics.map(m => m.precision), mean.precision),\n        recall: stdDev(allMetrics.map(m => m.recall), mean.recall),\n        f1Score: stdDev(allMetrics.map(m => m.f1Score), mean.f1Score),\n        specificity: stdDev(allMetrics.map(m => m.specificity), mean.specificity),\n        mcc: stdDev(allMetrics.map(m => m.mcc), mean.mcc),\n    };\n\n    return { folds, mean, std };\n}\n\nfunction standardize(features: number[][]): number[][] {\n    const n = features.length;\n    if (n === 0) return features;\n    const dim = features[0].length;\n    const means = new Array(dim).fill(0);\n    const stds = new Array(dim).fill(0);\n\n    for (let j = 0; j < dim; j++) {\n        for (let i = 0; i < n; i++) means[j] += features[i][j];\n        means[j] /= n;\n    }\n\n    for (let j = 0; j < dim; j++) {\n        for (let i = 0; i < n; i++) stds[j] += (features[i][j] - means[j]) ** 2;\n        stds[j] = Math.sqrt(stds[j] / n);\n    }\n\n    return features.map(row =>\n        row.map((val, j) => stds[j] === 0 ? 0 : (val - means[j]) / stds[j])\n    );\n}\n\n// Example usage\nconst sampleData: Dataset<number[], number> = {\n    features: [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10], [10, 11]],\n    labels: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]\n};\nconst scaled = standardize(sampleData.features);\nconst cvResult = kFoldCrossValidation(KNN, { features: scaled, labels: sampleData.labels }, 5);\nconsole.log(`Mean F1: ${cvResult.mean.f1Score.toFixed(3)} ? ${cvResult.std.f1Score.toFixed(3)}`);\nconsole.log(`Mean Accuracy: ${cvResult.mean.accuracy.toFixed(3)} ? ${cvResult.std.accuracy.toFixed(3)}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-linear-regression-from-scratch",
      children: "TypeScript Implementation: Linear Regression from Scratch"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Gradient Descent Linear Regression ? demonstrates core ML concepts\ntype TrainTestSplit<T> = { train: T[]; test: T[] };\n\nfunction trainTestSplit<T>(data: T[], testRatio: number = 0.2): TrainTestSplit<T> {\n    const shuffled = [...data].sort(() => Math.random() - 0.5);\n    const splitIdx = Math.floor(data.length * (1 - testRatio));\n    return { train: shuffled.slice(0, splitIdx), test: shuffled.slice(splitIdx) };\n}\n\nfunction meanSquaredError(actual: number[], predicted: number[]): number {\n    return actual.reduce((sum, a, i) => sum + (a - predicted[i]) ** 2, 0) / actual.length;\n}\n\nfunction rootMeanSquaredError(actual: number[], predicted: number[]): number {\n    return Math.sqrt(meanSquaredError(actual, predicted));\n}\n\nfunction meanAbsoluteError(actual: number[], predicted: number[]): number {\n    return actual.reduce((sum, a, i) => sum + Math.abs(a - predicted[i]), 0) / actual.length;\n}\n\nclass LinearRegressionGD {\n    private weights: number[] = [];\n    private bias: number = 0;\n    private learningRate: number;\n    private epochs: number;\n\n    constructor(learningRate: number = 0.01, epochs: number = 1000) {\n        this.learningRate = learningRate;\n        this.epochs = epochs;\n    }\n\n    fit(features: number[][], targets: number[]): void {\n        const n = features.length;\n        const d = features[0].length;\n        this.weights = new Array(d).fill(0);\n        this.bias = 0;\n\n        for (let epoch = 0; epoch < this.epochs; epoch++) {\n            let gradW = new Array(d).fill(0);\n            let gradB = 0;\n\n            for (let i = 0; i < n; i++) {\n                const pred = this.predict(features[i]);\n                const error = pred - targets[i];\n                for (let j = 0; j < d; j++) {\n                    gradW[j] += (2 / n) * error * features[i][j];\n                }\n                gradB += (2 / n) * error;\n            }\n\n            for (let j = 0; j < d; j++) {\n                this.weights[j] -= this.learningRate * gradW[j];\n            }\n            this.bias -= this.learningRate * gradB;\n        }\n    }\n\n    predict(features: number[]): number {\n        return features.reduce((sum, f, i) => sum + f * this.weights[i], this.bias);\n    }\n\n    predictBatch(samples: number[][]): number[] {\n        return samples.map(s => this.predict(s));\n    }\n\n    score(features: number[][], targets: number[]): number {\n        const preds = this.predictBatch(features);\n        const ssRes = targets.reduce((sum, t, i) => sum + (t - preds[i]) ** 2, 0);\n        const meanTarget = targets.reduce((a, b) => a + b, 0) / targets.length;\n        const ssTot = targets.reduce((sum, t) => sum + (t - meanTarget) ** 2, 0);\n        return 1 - ssRes / ssTot;\n    }\n}\n\nclass PolynomialRegression {\n    private degree: number;\n    private model: LinearRegressionGD;\n\n    constructor(degree: number = 2, lr: number = 0.01, epochs: number = 1000) {\n        this.degree = degree;\n        this.model = new LinearRegressionGD(lr, epochs);\n    }\n\n    private polynomialFeatures(x: number[]): number[][] {\n        return x.map(v => {\n            const features: number[] = [];\n            for (let d = 1; d <= this.degree; d++) {\n                features.push(v ** d);\n            }\n            return features;\n        });\n    }\n\n    fit(x: number[], y: number[]): void {\n        const features = this.polynomialFeatures(x);\n        this.model.fit(features, y);\n    }\n\n    predict(x: number[]): number[] {\n        const features = this.polynomialFeatures(x);\n        return this.model.predictBatch(features);\n    }\n}\n\n// Demo\nconst houseSizes = [600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400];\nconst housePrices = [150, 180, 210, 245, 290, 330, 370, 415, 460, 500];\nconst { train: xTrain, test: xTest } = trainTestSplit(houseSizes, 0.2);\nconst { train: yTrain, test: yTest } = trainTestSplit(housePrices, 0.2);\n\nconst lrModel = new LinearRegressionGD(0.0000001, 2000);\nlrModel.fit(xTrain.map(s => [s]), yTrain);\nconst lrPreds = lrModel.predictBatch(xTest.map(s => [s]));\nconsole.log(\"Linear Regression RMSE:\", rootMeanSquaredError(yTest, lrPreds).toFixed(2));\nconsole.log(\"Linear Regression MAE:\", meanAbsoluteError(yTest, lrPreds).toFixed(2));\n\nconst polyModel = new PolynomialRegression(2, 0.0000001, 5000);\npolyModel.fit(xTrain, yTrain);\nconst polyPreds = polyModel.predict(xTest);\nconsole.log(\"Polynomial Regression RMSE:\", rootMeanSquaredError(yTest, polyPreds).toFixed(2));\nconsole.log(\"Polynomial Regression R?:\", (1 - yTest.reduce((s, t, i) => s + (t - polyPreds[i]) ** 2, 0) / yTest.reduce((s, t) => s + (t - yTest.reduce((a, b) => a + b, 0) / yTest.length) ** 2, 0)).toFixed(4));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// introduction\n// ml-supervised-unsupervised implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'introduction', data: { topic: 'ml-supervised-unsupervised' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// introduction - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'ml-algorithms demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'machine-learning', chapter: 'introduction' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('ml-algorithms'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Machine learning enables computers to learn from data instead of following static rules, formalized by Mitchell's definition $(T, E, P)$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The three primary paradigms are supervised, unsupervised, and reinforcement learning, with hybrid variants (semi-supervised, self-supervised) bridging gaps."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hypothesis space size and inductive bias jointly determine what a learner can represent and how it generalizes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The No Free Lunch theorem reminds us that algorithm choice must be problem-specific."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The ML pipeline is an iterative process from problem definition through monitoring, with data preparation as the most time-consuming phase."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generalization ? performance on unseen data ? is the ultimate goal, achieved through careful evaluation and inductive bias alignment."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Understanding the three ML paradigms, hypothesis spaces, inductive bias, and the end-to-end pipeline is the foundation for applying machine learning effectively."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does the definition of \"experience\" in Tom Mitchell's formal definition apply to a weather prediction system?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the key difference between a classification task and a regression task?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In which scenario would you prefer unsupervised learning over supervised learning?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is data preparation often considered the most time-consuming part of the ML pipeline?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why an unbiased learner cannot generalize beyond the training data."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide two examples of inductive bias in common ML algorithms."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Categorize the following as supervised or unsupervised learning:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Predicting the price of a house based on its square footage"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Grouping news articles by topic without knowing the topics beforehand"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Identifying credit card transactions as fraudulent or legitimate"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Generating captions for images (hint: consider the supervision signal)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design a high-level ML pipeline for a system that predicts whether a student will pass a course based on their previous grades and attendance."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "For each of the following scenarios, estimate the minimum number of training samples needed if you have 50 features and plan to use:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A linear model (low capacity hypothesis space)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A deep neural network (high capacity hypothesis space)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Discuss the \"No Free Lunch\" theorem in the context of model selection. Why is it impossible to have a single machine learning algorithm that is the best for every possible problem? How does the theorem guide practical ML workflow decisions?"
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