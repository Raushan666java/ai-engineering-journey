"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[91170],{

/***/ 11983
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_machine_learning_05_ensemble_methods_md_c18_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-machine-learning-05-ensemble-methods-md-c18.json
const site_docs_courses_machine_learning_05_ensemble_methods_md_c18_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/machine-learning/05-ensemble-methods","title":"Chapter 5: Ensemble Methods","description":"Previous Support Vector Machines","source":"@site/docs/courses/machine-learning/05-ensemble-methods.md","sourceDirName":"courses/machine-learning","slug":"/machine-learning/05-ensemble-methods","permalink":"/ai-engineering-journey/machine-learning/05-ensemble-methods","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"05-ensemble-methods","slug":"/machine-learning/05-ensemble-methods","title":"Chapter 5: Ensemble Methods","sidebar_label":"Chapter 5: Ensemble Methods","sidebar_position":5},"sidebar":"course-machine-learning","previous":{"title":"Chapter 4: Decision Trees","permalink":"/ai-engineering-journey/machine-learning/04-decision-trees"},"next":{"title":"Chapter 6: Support Vector Machines","permalink":"/ai-engineering-journey/machine-learning/06-support-vector-machines"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/machine-learning/05-ensemble-methods.md


const frontMatter = {
	id: '05-ensemble-methods',
	slug: '/machine-learning/05-ensemble-methods',
	title: 'Chapter 5: Ensemble Methods',
	sidebar_label: 'Chapter 5: Ensemble Methods',
	sidebar_position: 5
};
const contentTitle = 'Chapter 5: Ensemble Methods';

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
  "value": "What is Ensemble Learning?",
  "id": "what-is-ensemble-learning",
  "level": 3
}, {
  "value": "Bias-Variance Decomposition of Ensembles",
  "id": "bias-variance-decomposition-of-ensembles",
  "level": 3
}, {
  "value": "Bagging: Bootstrap Aggregating",
  "id": "bagging-bootstrap-aggregating",
  "level": 3
}, {
  "value": "Random Forest",
  "id": "random-forest",
  "level": 3
}, {
  "value": "Boosting: Sequential Error Correction",
  "id": "boosting-sequential-error-correction",
  "level": 3
}, {
  "value": "AdaBoost (Adaptive Boosting)",
  "id": "adaboost-adaptive-boosting",
  "level": 4
}, {
  "value": "Gradient Boosting",
  "id": "gradient-boosting",
  "level": 4
}, {
  "value": "Stacking (Stacked Generalization)",
  "id": "stacking-stacked-generalization",
  "level": 3
}, {
  "value": "Voting Ensembles",
  "id": "voting-ensembles",
  "level": 3
}, {
  "value": "Out-of-Bag (OOB) Evaluation",
  "id": "out-of-bag-oob-evaluation",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Random Forest Implementation (Simplified)",
  "id": "example-1-random-forest-implementation-simplified",
  "level": 3
}, {
  "value": "Example 2: AdaBoost Implementation",
  "id": "example-2-adaboost-implementation",
  "level": 3
}, {
  "value": "Example 3: OOB Error and Ensemble Comparison",
  "id": "example-3-oob-error-and-ensemble-comparison",
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
  "value": "TypeScript Implementation: AdaBoost, Gradient Boosting, and XGBoost-Style Pruning",
  "id": "typescript-implementation-adaboost-gradient-boosting-and-xgboost-style-pruning",
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
    h4: "h4",
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
        id: "chapter-5-ensemble-methods",
        children: "Chapter 5: Ensemble Methods"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/machine-learning/04-decision-trees",
          children: "Decision Trees"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/machine-learning/06-support-vector-machines",
          children: "Support Vector Machines"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define ensemble learning and the \"wisdom of the crowd\" principle with mathematical justification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decompose generalization error into bias, variance, and irreducible error"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement and analyze Bagging (Bootstrap Aggregating) with decision tree base learners"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand Random Forest architecture and the role of feature subsampling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Derive and implement the AdaBoost algorithm"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain Gradient Boosting conceptually (GBM, XGBoost, LightGBM)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare and contrast stacking, voting, and blending ensembles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use out-of-bag (OOB) evaluation for unbiased performance estimation"
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
        href: "../../assets/images/lessons/machine-learning/05-ensemble-methods/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/machine-learning/05-ensemble-methods/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/machine-learning/05-ensemble-methods/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/machine-learning/05-ensemble-methods/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/machine-learning/05-ensemble-methods/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/machine-learning/05-ensemble-methods/visual-explanation.png",
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
            children: "Wisdom of the Crowd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combining multiple models beats a single model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensembles are default choice for competitive ML"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bias-Variance Decomposition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$Error = Bias^2 + Variance + \\sigma^2$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensembles can reduce either bias or variance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bagging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel training on bootstrapped subsets reduces variance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use when individual models overfit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Random Forest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bagging + random feature selection decorrelates trees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most popular bagging method; robust out-of-box"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AdaBoost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential training increases weight on errors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works well with shallow decision stumps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gradient Boosting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential training on residual errors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State-of-the-art for tabular data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Out-of-Bag Evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unused bootstrap samples form natural validation set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free validation without hold-out set"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stacking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Meta-learner combines diverse base models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Competition-winning technique"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Voting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple averaging or majority rule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast, robust baseline ensemble"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"Ensemble Methods\"\n        A[Training Data] --> B{Ensemble Type}\n        B --> C[Bagging]\n        B --> D[Boosting]\n        B --> E[Stacking]\n    end\n    subgraph \"Bagging\"\n        C --> F[Bootstrap 1] --> G[Tree 1]\n        C --> H[Bootstrap 2] --> I[Tree 2]\n        C --> J[Bootstrap N] --> K[Tree N]\n        G & I & K --> L[Aggregate: Vote / Average]\n    end\n    subgraph \"Boosting\"\n        D --> M[Weighted Data 1] --> N[Tree 1]\n        N --> O[Update Weights / Compute Residuals]\n        O --> P[Weighted Data 2] --> Q[Tree 2]\n        Q --> R[Continue...]\n        R --> S[Tree M]\n        N & Q & S --> T[Weighted Sum]\n    end\n    subgraph \"Stacking\"\n        E --> U[Base Model 1]\n        E --> V[Base Model 2]\n        E --> W[Base Model 3]\n        U & V & W --> X[Meta-Learner]\n        X --> Y[Final Prediction]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-ensemble-learning",
      children: "What is Ensemble Learning?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ensemble methods combine multiple machine learning models (base learners) to produce a single, stronger model. The fundamental insight is that the collective decision of many weak models is more robust and accurate than any single model."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The Lemonade Stand Principle"
      }), ": If each person predicts the day's lemonade sales with ~60% accuracy, the average of 100 independent predictions can exceed 90% accuracy, provided the errors are uncorrelated."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bias-variance-decomposition-of-ensembles",
      children: "Bias-Variance Decomposition of Ensembles"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The generalization error of a model can be decomposed:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["$$\\mathbb{E}[(y - \\hat{f})^2] = \\underbrace{\\text{Bias}[\\hat{f}]^2}", (0,jsx_runtime.jsx)(_components.em, {
        children: "{\\text{Error from assumptions}} + \\underbrace{\\text{Var}[\\hat{f}]}"
      }), "{\\text{Error from sensitivity}} + \\underbrace{\\sigma^2}_{\\text{Irreducible noise}}$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "For Bagging"
      }), " (averaging $M$ i.i.d. models with variance $\\sigma^2$):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\text{Var}\\left(\\frac{1}{M}\\sum_{i=1}^{M} \\hat{f}_i\\right) = \\frac{1}{M}\\sigma^2$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If models were independent, variance reduces by a factor of $M$. In practice, models trained on bootstrapped data are correlated (correlation $\\rho$):"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\text{Var}(\\text{ensemble}) = \\rho\\sigma^2 + \\frac{1-\\rho}{M}\\sigma^2$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["As $M \\to \\infty$, variance approaches $\\rho\\sigma^2$. This is why ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "decorrelation is critical"
      }), " ? Random Forest forces feature subsampling to reduce $\\rho$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "For Boosting"
      }), ": Each new model fits the residual errors of the ensemble, reducing bias. If the base learners are weak (slightly better than chance), boosting can convert them into a strong learner with arbitrarily low bias."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bagging-bootstrap-aggregating",
      children: "Bagging: Bootstrap Aggregating"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bagging involves training multiple versions of a model on different subsets created via ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bootstrapping"
      }), " ? sampling with replacement from the training set."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "For m = 1 to M:\n    1. Create bootstrap sample S_m by sampling n points with replacement from training set\n    2. Train model f_m on S_m\n\nFor prediction:\n    - Regression: f(x) = (1/M) S f_m(x)\n    - Classification: f(x) = mode{ f_1(x), ..., f_M(x) }  (majority vote)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each bootstrap sample contains ~63.2% of unique training points ($1 - 1/e$)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The remaining ~36.8% are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "out-of-bag (OOB)"
        }), " samples ? used for free validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Bagging primarily reduces ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "variance"
        }), " without increasing bias"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Works best with high-variance base learners (deep decision trees)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph \"Bootstrap Sampling\"\n        A[Original: n samples] --> B[S1: n with replacement]\n        A --> C[S2: n with replacement]\n        A --> D[SM: n with replacement]\n    end\n    subgraph \"OOB Samples\"\n        B --> E[OOB1: unused ~37%]\n        C --> F[OOB2: unused ~37%]\n        D --> G[OOBM: unused ~37%]\n    end\n    E & F & G --> H[OOB Error Estimate]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "random-forest",
      children: "Random Forest"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Random Forest (Breiman, 2001) is Bagging applied to decision trees with one crucial addition: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "feature subsampling"
      }), ". At each split, only a random subset of $m$ features is considered (rather than all $d$ features)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Typical values for $m$"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Classification: $m = \\sqrt{d}$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regression: $m = d/3$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why feature subsampling helps"
      }), ": Without it, trees in Bagging are highly correlated ? the strongest feature tends to be chosen at the top of every tree. Forcing random feature subsets decorrelates the trees, which reduces the $\\rho\\sigma^2$ term in the variance decomposition."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extremely robust ? works well with default hyperparameters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Built-in OOB error estimation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Built-in feature importance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parallelizable across trees"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cannot extrapolate beyond training range (inherited from trees)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "boosting-sequential-error-correction",
      children: "Boosting: Sequential Error Correction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Boosting trains models sequentially, where each new model focuses on the mistakes of the previous ones."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "adaboost-adaptive-boosting",
      children: "AdaBoost (Adaptive Boosting)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AdaBoost (Freund & Schapire, 1997) assigns weights to training samples and adjusts them after each iteration:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Initialize weights w_i = 1/n for all i\nFor m = 1 to M:\n    1. Train classifier f_m on weighted data\n    2. Compute weighted error: e_m = (S w_i * I(y_i ? f_m(x_i))) / S w_i\n    3. Compute classifier weight: a_m = 0.5 * ln((1 - e_m) / e_m)\n    4. Update sample weights: w_i = w_i * exp(a_m * I(y_i ? f_m(x_i)))\n    5. Normalize weights to sum to 1\n\nFinal prediction: H(x) = sign(S a_m * f_m(x))\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intuition"
      }), ": Samples that are misclassified get higher weight, forcing the next classifier to focus on them. The weight $\\alpha_m$ measures how much say the classifier gets ? better classifiers have higher $\\alpha$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "gradient-boosting",
      children: "Gradient Boosting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Gradient Boosting generalizes boosting to arbitrary differentiable loss functions. Instead of re-weighting samples, it trains each new model on the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "negative gradient"
      }), " (pseudo-residuals) of the loss with respect to the current prediction."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm"
      }), " (for regression with MSE loss):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Initialize: F_0(x) = mean(y)\nFor m = 1 to M:\n    1. Compute pseudo-residuals: r_im = y_i - F_{m-1}(x_i)\n    2. Train tree f_m to predict r_im from x_i\n    3. Update: F_m(x) = F_{m-1}(x) + ? * f_m(x)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where $\\nu$ (learning rate) shrinks each tree's contribution, typically 0.01 - 0.3."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key hyperparameters"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "n_estimators"
        }), ": Number of boosting rounds"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "learning_rate"
        }), ": Shrinkage factor $\\nu$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "max_depth"
        }), ": Typically shallow (3-6) for boosted trees"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "subsample"
        }), ": Fraction of data used per iteration (stochastic GBM)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "min_samples_leaf"
        }), ": Prevents overfitting on residual noise"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Modern implementations"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Library"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Innovation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GBM (sklearn)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Original gradient boosting interface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small-medium datasets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XGBoost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regularized boosting, column block, cache-aware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General purpose, competitions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LightGBM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gradient-based one-side sampling (GOSS), exclusive feature bundling (EFB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large datasets, high-dimensional"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CatBoost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered boosting, categorical feature handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Categorical-heavy data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Initial Model F0] --> B[Compute Residuals]\n    B --> C[Train shallow tree on residuals]\n    C --> D[Update: F = F + ? * tree]\n    D --> E{Stopping criteria?}\n    E -->|No| B\n    E -->|Yes| F[Final ensemble]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stacking-stacked-generalization",
      children: "Stacking (Stacked Generalization)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Stacking trains different types of base models (e.g., SVM, Random Forest, KNN) and combines them using a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "meta-learner"
      }), " (often logistic regression or a simple linear model)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Process"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Split training data into $K$ folds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each base model, perform $K$-fold cross-validation and collect out-of-fold predictions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "These out-of-fold predictions become the training features for the meta-learner"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Train base models on the full training set"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For test data, get predictions from each base model and pass to the meta-learner"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stacking often wins Kaggle competitions because diverse models capture different aspects of the data."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "voting-ensembles",
      children: "Voting Ensembles"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The simplest ensemble: train multiple models and combine their predictions."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard Voting"
      }), ": Each model gets one vote; the majority class wins.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Soft Voting"
      }), ": Each model outputs probabilities; the average probability determines the class."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Soft voting generally outperforms hard voting because confident models have more influence."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "out-of-bag-oob-evaluation",
      children: "Out-of-Bag (OOB) Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In Bagging, each bootstrap sample leaves out ~37% of training points. For each training point, we can compute the prediction using only trees that did NOT see that point during training. The OOB error estimate is:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Computationally free (no separate validation set needed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nearly unbiased estimate of test error"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Typically slightly pessimistic compared to test error"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eliminates the need for cross-validation when using bagged models"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Ensemble methods combine multiple weak models ? either in parallel (bagging) to reduce variance or sequentially (boosting) to reduce bias ? producing a stronger final predictor."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Random Forests work well out-of-the-box with minimal tuning, while Gradient Boosting requires careful adjustment of learning rate and tree count to avoid overfitting."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-random-forest-implementation-simplified",
      children: "Example 1: Random Forest Implementation (Simplified)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * Simplified Random Forest for classification.\n * Trains multiple decision trees on bootstrapped data\n * with random feature subsampling.\n */\nclass DecisionStump {\n    threshold: number = 0;\n    feature: number = 0;\n    leftPred: number = 0;\n    rightPred: number = 0;\n    trained: boolean = false;\n\n    fit(X: number[][], y: number[], sampleWeight: number[]): void {\n        const n = X.length;\n        const d = X[0].length;\n        let bestGain = -1;\n\n        for (let f = 0; f < d; f++) {\n            const values = X.map((row, i) => ({ val: row[f], idx: i }));\n            values.sort((a, b) => a.val - b.val);\n            for (let i = 0; i < n - 1; i++) {\n                if (values[i].val === values[i + 1].val) continue;\n                const thresh = (values[i].val + values[i + 1].val) / 2;\n                const leftIdx = values.filter(v => v.val <= thresh).map(v => v.idx);\n                const rightIdx = values.filter(v => v.val > thresh).map(v => v.idx);\n                const leftW = leftIdx.reduce((s, idx) => s + sampleWeight[idx], 0);\n                const rightW = rightIdx.reduce((s, idx) => s + sampleWeight[idx], 0);\n\n                const totalW = leftW + rightW;\n                if (totalW === 0) continue;\n\n                const leftPred = leftIdx.reduce((s, idx) => s + y[idx] * sampleWeight[idx], 0) / (leftW || 1);\n                const rightPred = rightIdx.reduce((s, idx) => s + y[idx] * sampleWeight[idx], 0) / (rightW || 1);\n\n                // Weighted MSE reduction as gain\n                let gain = 0;\n                for (let j = 0; j < n; j++) {\n                    const pred = leftIdx.includes(j) ? leftPred : rightPred;\n                    gain -= sampleWeight[j] * (y[j] - pred) ** 2;\n                }\n\n                if (gain > bestGain) {\n                    bestGain = gain;\n                    this.feature = f;\n                    this.threshold = thresh;\n                    this.leftPred = Math.round(leftPred);\n                    this.rightPred = Math.round(rightPred);\n                }\n            }\n        }\n        this.trained = true;\n    }\n\n    predict(x: number[]): number {\n        return x[this.feature] <= this.threshold ? this.leftPred : this.rightPred;\n    }\n}\n\nclass RandomForest {\n    private trees: DecisionStump[] = [];\n\n    constructor(\n        private nTrees: number = 10,\n        private maxFeatures: number = 0\n    ) {}\n\n    fit(X: number[][], y: number[]): void {\n        const n = X.length;\n        const d = X[0].length;\n        const mFeatures = this.maxFeatures || Math.max(1, Math.floor(Math.sqrt(d)));\n\n        for (let t = 0; t < this.nTrees; t++) {\n            // Bootstrap sample\n            const indices: number[] = [];\n            for (let i = 0; i < n; i++) {\n                indices.push(Math.floor(Math.random() * n));\n            }\n\n            const sampleWeight = Array(n).fill(0);\n            indices.forEach(idx => sampleWeight[idx]++);\n\n            // Random feature subsampling would go here\n            const tree = new DecisionStump();\n            tree.fit(X, y, sampleWeight);\n            this.trees.push(tree);\n        }\n    }\n\n    predict(X: number[][]): number[] {\n        return X.map(x => {\n            const votes = this.trees.map(t => t.predict(x));\n            const sum = votes.reduce((a, b) => a + b, 0);\n            return sum >= this.trees.length / 2 ? 1 : 0;\n        });\n    }\n\n    predictProbability(X: number[][]): number[] {\n        return X.map(x => {\n            const votes = this.trees.map(t => t.predict(x));\n            return votes.reduce((a, b) => a + b, 0) / this.trees.length;\n        });\n    }\n\n    score(X: number[][], y: number[]): number {\n        const preds = this.predict(X);\n        return preds.filter((p, i) => p === y[i]).length / y.length;\n    }\n}\n\n// Usage\nconst X = [\n    [2.5, 1.2], [3.0, 1.5], [1.5, 0.8], [4.0, 2.0],\n    [5.0, 2.5], [6.0, 3.0], [1.0, 0.5], [3.5, 1.8]\n];\nconst y = [0, 0, 0, 0, 1, 1, 0, 1];\n\nconst rf = new RandomForest(20, 1);\nrf.fit(X, y);\nconsole.log(`Random Forest Accuracy: ${(rf.score(X, y) * 100).toFixed(2)}%`);\nconsole.log('Predictions:', rf.predict(X));\nconsole.log('Probabilities:', rf.predictProbability(X).map(p => p.toFixed(4)));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-adaboost-implementation",
      children: "Example 2: AdaBoost Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * AdaBoost binary classifier using decision stumps as base learners.\n */\nclass AdaBoost {\n    private models: { stump: DecisionStump; alpha: number }[] = [];\n\n    constructor(private nEstimators: number = 50) {}\n\n    fit(X: number[][], y: number[]): void {\n        const n = X.length;\n        let weights: number[] = Array(n).fill(1 / n);\n\n        for (let m = 0; m < this.nEstimators; m++) {\n            const stump = new DecisionStump();\n            stump.fit(X, y, weights);\n\n            // Compute weighted error\n            let error = 0;\n            for (let i = 0; i < n; i++) {\n                const pred = stump.predict(X[i]);\n                if (pred !== y[i]) error += weights[i];\n            }\n            error = Math.max(error, 1e-15); // Avoid division by zero\n\n            // Classifier weight\n            const alpha = 0.5 * Math.log((1 - error) / error);\n\n            // Update sample weights\n            let weightSum = 0;\n            for (let i = 0; i < n; i++) {\n                const pred = stump.predict(X[i]);\n                weights[i] *= Math.exp(alpha * (pred !== y[i] ? 1 : 0));\n                weightSum += weights[i];\n            }\n            weights = weights.map(w => w / weightSum);\n\n            this.models.push({ stump, alpha });\n        }\n    }\n\n    predict(X: number[][]): number[] {\n        return X.map(x => {\n            let score = 0;\n            for (const { stump, alpha } of this.models) {\n                score += alpha * (stump.predict(x) === 1 ? 1 : -1);\n            }\n            return score >= 0 ? 1 : 0;\n        });\n    }\n\n    score(X: number[][], y: number[]): number {\n        const preds = this.predict(X);\n        return preds.filter((p, i) => p === y[i]).length / y.length;\n    }\n}\n\n// Example: Circle classification data\nconst X_circle: number[][] = [];\nconst y_circle: number[] = [];\nfor (let i = 0; i < 100; i++) {\n    const angle = Math.random() * 2 * Math.PI;\n    const radius = Math.random() * 3;\n    const x1 = radius * Math.cos(angle);\n    const x2 = radius * Math.sin(angle);\n    X_circle.push([x1, x2]);\n    y_circle.push(radius > 1.5 ? 1 : 0);\n}\n\nconsole.log('\\n=== AdaBoost Training ===');\nconst ada = new AdaBoost(20);\nada.fit(X_circle, y_circle);\nconsole.log(`AdaBoost Accuracy: ${(ada.score(X_circle, y_circle) * 100).toFixed(2)}%`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-oob-error-and-ensemble-comparison",
      children: "Example 3: OOB Error and Ensemble Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * OOB error estimation for Random Forest.\n */\nfunction oobErrorEstimate(X: number[][], y: number[], nTrees: number = 100): number {\n    const n = X.length;\n    const oobPredictions: { sum: number; count: number }[] =\n        Array.from({ length: n }, () => ({ sum: 0, count: 0 }));\n\n    for (let t = 0; t < nTrees; t++) {\n        const inBag = new Set<number>();\n        for (let i = 0; i < n; i++) inBag.add(Math.floor(Math.random() * n));\n\n        // Train decision stump on in-bag samples\n        const weights = Array(n).fill(0);\n        inBag.forEach(idx => weights[idx]++);\n\n        const stump = new DecisionStump();\n        stump.fit(X, y, weights);\n\n        // Score on OOB samples\n        for (let i = 0; i < n; i++) {\n            if (!inBag.has(i)) {\n                oobPredictions[i].sum += stump.predict(X[i]);\n                oobPredictions[i].count++;\n            }\n        }\n    }\n\n    // OOB predictions and error\n    let errors = 0;\n    let total = 0;\n    for (let i = 0; i < n; i++) {\n        if (oobPredictions[i].count > 0) {\n            const oobPred = oobPredictions[i].sum / oobPredictions[i].count >= 0.5 ? 1 : 0;\n            if (oobPred !== y[i]) errors++;\n            total++;\n        }\n    }\n    return errors / total;\n}\n\nconsole.log('\\n=== OOB Error ===');\nconst oobErr = oobErrorEstimate(X, y, 50);\nconsole.log(`OOB Error Rate: ${(oobErr * 100).toFixed(2)}%`);\n\n// Voting ensemble comparison\nconsole.log('\\n=== Ensemble Model Comparison ===');\nconst models = [\n    { name: 'Single Stump', score: new DecisionStump().fit(X, y, Array(X.length).fill(1)) || 0 },\n    { name: 'Random Forest (10)', score: new RandomForest(10).score(X, y) },\n    { name: 'Random Forest (50)', score: new RandomForest(50).score(X, y) },\n    { name: 'AdaBoost (20)', score: new AdaBoost(20).score(X, y) }\n];\n\n// Compute single stump score\nconst stump = new DecisionStump();\nstump.fit(X, y, Array(X.length).fill(1));\nconst stumpScore = X.filter((x, i) => stump.predict(x) === y[i]).length / X.length;\nconsole.log(`Single Stump: ${(stumpScore * 100).toFixed(2)}%`);\nconsole.log(`Random Forest (10): ${(new RandomForest(10).score(X, y) * 100).toFixed(2)}%`);\nconsole.log(`Random Forest (50): ${(new RandomForest(50).score(X, y) * 100).toFixed(2)}%`);\nconsole.log(`AdaBoost (20): ${(new AdaBoost(20).score(X, y) * 100).toFixed(2)}%`);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Bagging smooths out noisy models through averaging, while boosting systematically corrects errors to build highly accurate predictors from weak learners."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " XGBoost and LightGBM are the most popular gradient boosting implementations for tabular data ? they offer built-in regularization, missing value handling, and GPU acceleration."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bagging for high-variance models"
        }), " ? if your base model overfits, bagging will almost always help"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Random Forest is the default"
        }), " ? works with minimal tuning, handles mixed data, provides feature importance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gradient Boosting for maximum accuracy"
        }), " ? tune learning rate and tree depth carefully; use early stopping"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stacking for competitions"
        }), " ? combine diverse model families (tree-based, linear, neural) with a simple meta-learner"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OOB error replaces CV in bagged models"
        }), " ? saves computation while providing an unbiased performance estimate"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "More trees is rarely harmful"
        }), " ? Random Forest accuracy plateaus as M increases; OOB error stabilizes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Shallow trees for boosting"
        }), " ? depth 3-6 is usually optimal for boosted trees; deeper = overfit"]
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
            children: "Bagging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel models on bootstrapped data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces variance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random Forest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Boosting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential models correcting errors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces bias"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gradient Boosting, XGBoost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Random Forest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bagged decision trees + random feature subset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extra randomness decorrelates trees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classification regression default"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AdaBoost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted boosting focusing on misclassified samples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adaptive sample weighting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary classification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gradient Boosting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trains on residuals of previous model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loss-function agnostic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regression, ranking, classification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stacking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Meta-learner combines diverse base models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Different model types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Competition-winning ensembles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Voting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Majority rule or average"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simplicity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Baseline ensemble"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OOB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unused bootstrap samples for validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free validation set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random Forest evaluation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Bootstrapping"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sampling with replacement to create training subsets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Base Learner"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Individual model in an ensemble (often a decision tree)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "n_estimators"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number of models in the ensemble"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "learning_rate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shrinkage factor for each boosting step"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "max_features"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fraction of features considered at each split (Random Forest)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Subsampling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fraction of data used per boosting iteration (stochastic GBM)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Out-of-Bag (OOB)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unused bootstrap samples for internal validation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Feature Importance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Score measuring how often a feature is used for splits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Variance (ensemble)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\rho\\sigma^2 + (1-\\rho)\\sigma^2/M$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AdaBoost weight"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\alpha_m = \\frac{1}{2}\\ln((1-\\epsilon_m)/\\epsilon_m)$"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ensemble Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reason"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Finance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Credit risk scoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gradient Boosting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handles non-linear relationships well"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Healthcare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cancer detection from biopsies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random Forest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Robust to noisy medical data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E-Commerce"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Product recommendation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gradient Boosting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Captures complex feature interactions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insurance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Claim fraud prediction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random Forest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class imbalance handled by bagging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Click-through rate prediction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LightGBM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast training on large sparse data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NLP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stacking (RF + Linear + NB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diverse feature types benefit from diverse models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Biology"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protein structure prediction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XGBoost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State-of-the-art on structured tabular data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the primary difference between Bagging and Boosting?\nA) Bagging uses deep trees; Boosting uses shallow trees\nB) Bagging trains models in parallel; Boosting trains them sequentially\nC) Bagging is for classification; Boosting is for regression\nD) Bagging reduces bias; Boosting reduces variance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** Bagging trains models independently in parallel, while Boosting trains them sequentially where each model corrects the previous one's errors.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does a Random Forest add extra randomness beyond standard Bagging?\nA) It shuffles the labels before training\nB) It considers only a random subset of features at each split\nC) It uses random learning rates\nD) It randomly prunes trees after training"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** Random Forest considers a random subset of features at each split, decorrelating the trees beyond what bootstrapping alone achieves.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In Gradient Boosting, what does each new model learn to predict?\nA) The original target values\nB) The mean of all previous predictions\nC) The residual errors of the previous model\nD) Random noise in the training data"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** Each new model in Gradient Boosting is trained on the residuals (errors) of the previous model to progressively reduce the overall error.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does the variance of a bagged ensemble approach $\\rho\\sigma^2$ as $M \\to \\infty$?\nA) Bootstrap samples become identical\nB) The models become perfectly correlated\nC) The irreducible error dominates\nD) The averaging effect saturates at the correlation floor"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**D)** The variance formula $\\rho\\sigma^2 + (1-\\rho)\\sigma^2/M$ shows that $M$ only affects the second term, which vanishes as $M \\to \\infty$, leaving the correlation floor $\\rho\\sigma^2$.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the Out-of-Bag (OOB) error estimate?\nA) The error on a separately held-out validation set\nB) The error computed from samples not included in each bootstrap sample\nC) The error on the training set after removing outliers\nD) The average error across all cross-validation folds"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** OOB error uses the ~37% of samples not selected in each bootstrap sample, providing a free, nearly unbiased validation estimate.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-adaboost-gradient-boosting-and-xgboost-style-pruning",
      children: "TypeScript Implementation: AdaBoost, Gradient Boosting, and XGBoost-Style Pruning"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class DecisionStump {\n    feature: number = 0;\n    threshold: number = 0;\n    polarity: number = 1;\n    alpha: number = 0;\n\n    predict(features: number[]): number {\n        const val = features[this.feature] <= this.threshold ? 1 : -1;\n        return val * this.polarity;\n    }\n}\n\nclass AdaBoost {\n    private stumps: DecisionStump[] = [];\n\n    fit(features: number[][], labels: number[], nEstimators: number = 10): void {\n        const n = features.length;\n        const y = labels.map(l => l === 0 ? -1 : 1);\n        let weights = new Array(n).fill(1 / n);\n\n        for (let t = 0; t < nEstimators; t++) {\n            const stump = new DecisionStump();\n            let minError = Infinity;\n            for (let f = 0; f < features[0].length; f++) {\n                const values = [...new Set(features.map(r => r[f]))].sort((a, b) => a - b);\n                for (let i = 0; i < values.length - 1; i++) {\n                    const thresh = (values[i] + values[i + 1]) / 2;\n                    for (const pol of [1, -1]) {\n                        stump.feature = f; stump.threshold = thresh; stump.polarity = pol;\n                        let error = 0;\n                        for (let j = 0; j < n; j++) {\n                            if (stump.predict(features[j]) !== y[j]) error += weights[j];\n                        }\n                        if (error < minError) { minError = error; this.stumps[t] = new DecisionStump(); Object.assign(this.stumps[t], stump); }\n                    }\n                }\n            }\n            const best = this.stumps[t];\n            best.alpha = 0.5 * Math.log((1 - minError) / Math.max(minError, 1e-10));\n\n            let sumW = 0;\n            for (let j = 0; j < n; j++) {\n                weights[j] *= Math.exp(-best.alpha * y[j] * best.predict(features[j]));\n                sumW += weights[j];\n            }\n            for (let j = 0; j < n; j++) weights[j] /= sumW;\n        }\n    }\n\n    predict(features: number[]): number {\n        let sum = 0;\n        for (const stump of this.stumps) sum += stump.alpha * stump.predict(features);\n        return sum >= 0 ? 1 : 0;\n    }\n}\n\nclass GradientBoostingRegressor {\n    private trees: DecisionTreeClassifier[] = [];\n    private lr: number;\n    private nEstimators: number;\n\n    constructor(lr: number = 0.1, nEstimators: number = 100) { this.lr = lr; this.nEstimators = nEstimators; }\n\n    fit(features: number[][], targets: number[]): void {\n        let preds = new Array(targets.length).fill(targets.reduce((a, b) => a + b, 0) / targets.length);\n        for (let t = 0; t < this.nEstimators; t++) {\n            const residuals = targets.map((y, i) => y - preds[i]);\n            const labels = residuals.map(r => r > 0 ? 1 : 0);\n            const tree = new DecisionTreeClassifier(3);\n            tree.fit(features, labels);\n            this.trees.push(tree);\n            for (let i = 0; i < features.length; i++) {\n                preds[i] += this.lr * (tree.predict(features[i]) === 1 ? 1 : -1) * Math.abs(residuals[i]);\n            }\n        }\n    }\n\n    predict(features: number[]): number {\n        let pred = 0;\n        for (const tree of this.trees) pred += this.lr * (tree.predict(features) === 1 ? 1 : -1);\n        return pred;\n    }\n}\n\nclass XGBoostStylePruner {\n    static shouldPrune(gain: number, gamma: number, leftSamples: number, rightSamples: number, minChildWeight: number): boolean {\n        if (leftSamples < minChildWeight || rightSamples < minChildWeight) return true;\n        if (gain < gamma) return true;\n        return false;\n    }\n\n    static similarity( residuals: number[], lambda: number = 1 ): number {\n        const sum = residuals.reduce((a, b) => a + b, 0);\n        return (sum ** 2) / (residuals.length + lambda);\n    }\n\n    static gain( leftSimilarity: number, rightSimilarity: number, parentSimilarity: number, gamma: number ): number {\n        return leftSimilarity + rightSimilarity - parentSimilarity - gamma;\n    }\n}\n\n// Demo\nconst X = [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]];\nconst yClass = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1];\nconst ada = new AdaBoost();\nada.fit(X, yClass, 5);\nconsole.log(\"AdaBoost predict [4]:\", ada.predict([4]));\nconsole.log(\"AdaBoost predict [8]:\", ada.predict([8]));\n\nconst yReg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\nconst gb = new GradientBoostingRegressor(0.1, 50);\ngb.fit(X, yReg);\nconsole.log(\"GBM predict [5]:\", gb.predict([5]).toFixed(2));\nconsole.log(\"XGBoost gain test:\", XGBoostStylePruner.gain(10, 8, 5, 3, 0.5));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// ensemble methods\n// ml-supervised-unsupervised implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'ensemble methods', data: { topic: 'ml-supervised-unsupervised' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// ensemble methods - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'ml-algorithms demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'machine-learning', chapter: 'ensemble methods' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('ml-algorithms'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensemble methods improve performance by combining multiple weak learners into a single strong learner, leveraging the wisdom of the crowd principle."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The bias-variance decomposition shows that Bagging reduces variance (by averaging uncorrelated models) while Boosting reduces bias (by sequentially correcting errors)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Random Forests extend Bagging with random feature subsampling, decorrelating the trees for additional variance reduction."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AdaBoost sequentially increases weights on misclassified samples; Gradient Boosting trains on residuals and generalizes to arbitrary loss functions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Modern boosting libraries (XGBoost, LightGBM, CatBoost) dominate structured/tabular data competitions with built-in regularization and efficient implementations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stacking combines diverse model families through a meta-learner, often winning competitions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OOB evaluation provides a free validation estimate in bagged models."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Ensemble methods consistently outperform individual models ? use Random Forests for robustness and Gradient Boosting for maximum accuracy on tabular data."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why \"Sampling with Replacement\" is critical for the Bagging process."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the main advantage of Random Forest over a single Decision Tree?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does Boosting handle samples that are difficult to classify?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the role of the \"Learning Rate\" in Gradient Boosting?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the mathematical reason why Random Forest uses $\\sqrt{d}$ features for classification vs. $d/3$ for regression."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If you have 100 independent classifiers, each with 70% accuracy, what is the theoretical probability that a majority vote of these classifiers is correct? (Hint: Use the Binomial Distribution)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A Random Forest has 50 trees. How many trees must agree for a sample to be classified as the positive class if the threshold is 0.5?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In a boosting scenario, if the first model predicts a value of 10 for a target of 15, what value should the second model attempt to predict?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Derive the AdaBoost weight formula $\\alpha_m = \\frac{1}{2}\\ln((1-\\epsilon_m)/\\epsilon_m)$ by minimizing the exponential loss."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If a bagged ensemble has $\\rho = 0.3$ and $\\sigma^2 = 1.0$, compute the ensemble variance for $M=1, 10, 100, \\infty$."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare Bagging and Boosting in terms of their sensitivity to noise and outliers. Which technique is more likely to overfit if the dataset is extremely noisy? Explain your reasoning, then describe how each technique handles mislabeled training examples differently."
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