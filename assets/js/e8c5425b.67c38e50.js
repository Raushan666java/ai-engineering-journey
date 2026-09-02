"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[46795],{

/***/ 60340
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_machine_learning_10_model_evaluation_md_e8c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-machine-learning-10-model-evaluation-md-e8c.json
const site_docs_courses_machine_learning_10_model_evaluation_md_e8c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/machine-learning/10-model-evaluation","title":"Chapter 10: Model Selection and Evaluation","description":"Previous None (Last Chapter)","source":"@site/docs/courses/machine-learning/10-model-evaluation.md","sourceDirName":"courses/machine-learning","slug":"/machine-learning/10-model-evaluation","permalink":"/ai-engineering-journey/machine-learning/10-model-evaluation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"id":"10-model-evaluation","slug":"/machine-learning/10-model-evaluation","title":"Chapter 10: Model Selection and Evaluation","sidebar_label":"Chapter 10: Model Selection and Evaluation","sidebar_position":10},"sidebar":"course-machine-learning","previous":{"title":"Chapter 9: Dimensionality Reduction","permalink":"/ai-engineering-journey/machine-learning/09-dimensionality-reduction"},"next":{"title":"Machine Learning — Complete University Textbook","permalink":"/ai-engineering-journey/machine-learning"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/machine-learning/10-model-evaluation.md


const frontMatter = {
	id: '10-model-evaluation',
	slug: '/machine-learning/10-model-evaluation',
	title: 'Chapter 10: Model Selection and Evaluation',
	sidebar_label: 'Chapter 10: Model Selection and Evaluation',
	sidebar_position: 10
};
const contentTitle = 'Chapter 10: Model Selection and Evaluation';

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
  "value": "The Bias-Variance Tradeoff",
  "id": "the-bias-variance-tradeoff",
  "level": 3
}, {
  "value": "Bias-Variance Decomposition",
  "id": "bias-variance-decomposition",
  "level": 3
}, {
  "value": "Cross-Validation",
  "id": "cross-validation",
  "level": 3
}, {
  "value": "Stratified Cross-Validation",
  "id": "stratified-cross-validation",
  "level": 3
}, {
  "value": "Performance Metrics for Classification",
  "id": "performance-metrics-for-classification",
  "level": 3
}, {
  "value": "Multi-Class Classification Metrics",
  "id": "multi-class-classification-metrics",
  "level": 3
}, {
  "value": "Regression Metrics",
  "id": "regression-metrics",
  "level": 3
}, {
  "value": "Learning Curves",
  "id": "learning-curves",
  "level": 3
}, {
  "value": "Validation Curves",
  "id": "validation-curves",
  "level": 3
}, {
  "value": "Hyperparameter Tuning",
  "id": "hyperparameter-tuning",
  "level": 3
}, {
  "value": "Imbalanced Classification",
  "id": "imbalanced-classification",
  "level": 3
}, {
  "value": "Statistical Comparison of Models",
  "id": "statistical-comparison-of-models",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Confusion Matrix Interpretation",
  "id": "example-1-confusion-matrix-interpretation",
  "level": 3
}, {
  "value": "Example 2: K-fold Cross-Validation in TypeScript",
  "id": "example-2-k-fold-cross-validation-in-typescript",
  "level": 3
}, {
  "value": "Example 3: CrossValidator Class",
  "id": "example-3-crossvalidator-class",
  "level": 3
}, {
  "value": "Example 4: Grid Search with Cross-Validation",
  "id": "example-4-grid-search-with-cross-validation",
  "level": 3
}, {
  "value": "Example 5: Full Model Evaluation Pipeline",
  "id": "example-5-full-model-evaluation-pipeline",
  "level": 3
}, {
  "value": "Example 6: Learning Curve Analysis",
  "id": "example-6-learning-curve-analysis",
  "level": 3
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
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "TypeScript Implementation: Cross-Validator, ROC/AUC, Learning Curves, Grid Search",
  "id": "typescript-implementation-cross-validator-rocauc-learning-curves-grid-search",
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
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    annotation: "annotation",
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
    math: "math",
    mfrac: "mfrac",
    mi: "mi",
    mn: "mn",
    mo: "mo",
    mover: "mover",
    mrow: "mrow",
    mspace: "mspace",
    msqrt: "msqrt",
    mstyle: "mstyle",
    msub: "msub",
    msubsup: "msubsup",
    msup: "msup",
    mtable: "mtable",
    mtd: "mtd",
    mtext: "mtext",
    mtr: "mtr",
    ol: "ol",
    p: "p",
    path: "path",
    pre: "pre",
    semantics: "semantics",
    span: "span",
    strong: "strong",
    summary: "summary",
    svg: "svg",
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
        id: "chapter-10-model-selection-and-evaluation",
        children: "Chapter 10: Model Selection and Evaluation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/machine-learning/09-dimensionality-reduction",
          children: "Dimensionality Reduction"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " None (Last Chapter)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define and differentiate between Bias and Variance (The Bias-Variance Tradeoff)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Derive the bias-variance decomposition from first principles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply Cross-Validation techniques (K-fold, Leave-one-out, Stratified) for robust evaluation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interpret various performance metrics: Accuracy, Precision, Recall, F1-Score, and ROC-AUC"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute regression metrics: MSE, RMSE, MAE, R?, Adjusted R?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose macro, micro, and weighted averaging for multi-class classification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement Hyperparameter Tuning using Grid Search and Random Search"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare models statistically using McNemar's test and paired t-tests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Diagnose bias vs variance using learning curves and validation curves"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Bias-Variance Tradeoff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Total error = bias? + variance + irreducible error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple models underfit (high bias); complex models overfit (high variance)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "K-fold Cross-Validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partition data into K folds; train on K-1, validate on 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use K=5 or K=10 as a default; higher K reduces bias but increases variance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stratified Cross-Validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintain class proportions across folds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Essential for imbalanced datasets to avoid degenerate folds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Confusion Matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TP, TN, FP, FN form the foundation of all classification metrics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always inspect the full confusion matrix, not just accuracy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Precision & Recall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precision = TP/(TP+FP); Recall = TP/(TP+FN)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precision matters when false positives are costly; Recall when false negatives are costly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F1-Score"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Harmonic mean of Precision and Recall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use when you need a single metric for imbalanced classification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ROC-AUC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measures separability across all classification thresholds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUC of 0.5 = random guessing; 0.8+ = good; 1.0 = perfect"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Learning Curves"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plot training/validation error vs training set size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Converging curves = high bias; diverging curves = high variance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Validation Curves"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plot training/validation error vs hyperparameter value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find the sweet spot where validation error is minimal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Grid Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exhaustive search over a predefined hyperparameter grid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Systematic but expensive; use for small parameter spaces"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Random Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Randomly samples hyperparameter combinations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More efficient than Grid Search when some hyperparameters don't affect performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Regression Metrics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MSE, RMSE, MAE, R?, Adjusted R?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R? alone is insufficient ? always inspect residuals and RMSE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Statistical Comparison"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "McNemar's test, paired t-test for model comparison"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never declare one model \"better\" without statistical significance"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Training Data] --> B[Split into K Folds]\n    B --> C[Train on K-1 Folds]\n    C --> D[Validate on Held-Out Fold]\n    D --> E{All K Folds Done?}\n    E -- No --> C\n    E -- Yes --> F[Average Performance Across Folds]\n    F --> G[Select Best Hyperparameters]\n    G --> H[Train Final Model on Full Data]\n    H --> I[Evaluate on Held-Out Test Set]\n    I --> J[Report Metrics & Deploy]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-bias-variance-tradeoff",
      children: "The Bias-Variance Tradeoff"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The performance of a machine learning model is governed by two sources of error:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bias"
        }), ": Error due to overly simplistic assumptions in the learning algorithm. High bias can cause the model to miss relevant relations between features and target (Underfitting)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Variance"
        }), ": Error due to excessive sensitivity to small fluctuations in the training set. High variance can cause the model to model the random noise in the training data (Overfitting)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The goal of model selection is to find the \"sweet spot\" that minimizes the total error."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bias-variance-decomposition",
      children: "Bias-Variance Decomposition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Let ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "y"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "f"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "x"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "+"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "ϵ"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "y = f(x) + \\epsilon"
              })]
            })
          })
        }), (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [(0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.625em",
                verticalAlign: "-0.1944em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0359em"
              },
              children: "y"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "="
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.1076em"
              },
              children: "f"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "x"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mbin",
              children: "+"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.4306em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "ϵ"
            })]
          })]
        })]
      }), " where ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "ϵ"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "∼"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "script",
                  children: "N"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mn, {
                  children: "0"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "σ"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\epsilon \\sim \\mathcal{N}(0, \\sigma^2)"
              })]
            })
          })
        }), (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: [(0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.4306em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "ϵ"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "∼"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1.0641em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathcal",
              style: {
                marginRight: "0.1474em"
              },
              children: "N"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "0"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mpunct",
              children: ","
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0359em"
                },
                children: "σ"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8141em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.063em",
                          marginRight: "0.05em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "sizing reset-size6 size3 mtight",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: "2"
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            })]
          })]
        })]
      }), " is irreducible noise. Let ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsxs)(_components.mover, {
                  accent: "true",
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "f"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "^"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "x"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\hat{f}(x)"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "1.2079em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord accent",
              children: (0,jsx_runtime.jsxs)(_components.span, {
                className: "vlist-t vlist-t2",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-r",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist",
                    style: {
                      height: "0.9579em"
                    },
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      style: {
                        top: "-3em"
                      },
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "pstrut",
                        style: {
                          height: "3em"
                        }
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "mord mathnormal",
                        style: {
                          marginRight: "0.1076em"
                        },
                        children: "f"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.span, {
                      style: {
                        top: "-3.2634em"
                      },
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "pstrut",
                        style: {
                          height: "3em"
                        }
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "accent-body",
                        style: {
                          left: "-0.0833em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "mord",
                          children: "^"
                        })
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-s",
                    children: "​"
                  })]
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-r",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist",
                    style: {
                      height: "0.1944em"
                    },
                    children: (0,jsx_runtime.jsx)(_components.span, {})
                  })
                })]
              })
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "x"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            })]
          })
        })]
      }), " be our model's prediction at a fixed point ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  children: "x"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "x"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.4306em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "x"
            })]
          })
        })]
      }), ". The expected squared error at ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  children: "x"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "x"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "0.4306em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "x"
            })]
          })
        })]
      }), " decomposes as:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.span, {
      className: "katex-display",
      children: (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            display: "block",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mtable, {
                rowspacing: "0.25em",
                columnalign: "right left",
                columnspacing: "0em",
                children: [(0,jsx_runtime.jsxs)(_components.mtr, {
                  children: [(0,jsx_runtime.jsx)(_components.mtd, {
                    children: (0,jsx_runtime.jsx)(_components.mstyle, {
                      scriptlevel: "0",
                      displaystyle: "true",
                      children: (0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "E"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: "["
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: "("
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "y"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "−"
                        }), (0,jsx_runtime.jsxs)(_components.mover, {
                          accent: "true",
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "f"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "^"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.msup, {
                          children: [(0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: ")"
                          }), (0,jsx_runtime.jsx)(_components.mn, {
                            children: "2"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: "]"
                        })]
                      })
                    })
                  }), (0,jsx_runtime.jsx)(_components.mtd, {
                    children: (0,jsx_runtime.jsx)(_components.mstyle, {
                      scriptlevel: "0",
                      displaystyle: "true",
                      children: (0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsx)(_components.mrow, {}), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "="
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "E"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: "["
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: "("
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "f"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "+"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "ϵ"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "−"
                        }), (0,jsx_runtime.jsxs)(_components.mover, {
                          accent: "true",
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "f"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "^"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.msup, {
                          children: [(0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: ")"
                          }), (0,jsx_runtime.jsx)(_components.mn, {
                            children: "2"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: "]"
                        })]
                      })
                    })
                  })]
                }), (0,jsx_runtime.jsxs)(_components.mtr, {
                  children: [(0,jsx_runtime.jsx)(_components.mtd, {
                    children: (0,jsx_runtime.jsx)(_components.mstyle, {
                      scriptlevel: "0",
                      displaystyle: "true",
                      children: (0,jsx_runtime.jsx)(_components.mrow, {})
                    })
                  }), (0,jsx_runtime.jsx)(_components.mtd, {
                    children: (0,jsx_runtime.jsx)(_components.mstyle, {
                      scriptlevel: "0",
                      displaystyle: "true",
                      children: (0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsx)(_components.mrow, {}), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "="
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "E"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: "["
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: "("
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "f"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "−"
                        }), (0,jsx_runtime.jsxs)(_components.mover, {
                          accent: "true",
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "f"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "^"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.msup, {
                          children: [(0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: ")"
                          }), (0,jsx_runtime.jsx)(_components.mn, {
                            children: "2"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: "]"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "+"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "2"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "E"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: "["
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: "("
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "f"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "−"
                        }), (0,jsx_runtime.jsxs)(_components.mover, {
                          accent: "true",
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "f"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "^"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: ")"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "ϵ"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: "]"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "+"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "E"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: "["
                        }), (0,jsx_runtime.jsxs)(_components.msup, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "ϵ"
                          }), (0,jsx_runtime.jsx)(_components.mn, {
                            children: "2"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: "]"
                        })]
                      })
                    })
                  })]
                }), (0,jsx_runtime.jsxs)(_components.mtr, {
                  children: [(0,jsx_runtime.jsx)(_components.mtd, {
                    children: (0,jsx_runtime.jsx)(_components.mstyle, {
                      scriptlevel: "0",
                      displaystyle: "true",
                      children: (0,jsx_runtime.jsx)(_components.mrow, {})
                    })
                  }), (0,jsx_runtime.jsx)(_components.mtd, {
                    children: (0,jsx_runtime.jsx)(_components.mstyle, {
                      scriptlevel: "0",
                      displaystyle: "true",
                      children: (0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsx)(_components.mrow, {}), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "="
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "E"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: "["
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: "("
                        }), (0,jsx_runtime.jsxs)(_components.mover, {
                          accent: "true",
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "f"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "^"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "−"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "E"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: "["
                        }), (0,jsx_runtime.jsxs)(_components.mover, {
                          accent: "true",
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "f"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "^"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: "]"
                        }), (0,jsx_runtime.jsxs)(_components.msup, {
                          children: [(0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: ")"
                          }), (0,jsx_runtime.jsx)(_components.mn, {
                            children: "2"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: "]"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "+"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: "("
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "E"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: "["
                        }), (0,jsx_runtime.jsxs)(_components.mover, {
                          accent: "true",
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "f"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "^"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: "]"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "−"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "f"
                        }), (0,jsx_runtime.jsxs)(_components.msup, {
                          children: [(0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: ")"
                          }), (0,jsx_runtime.jsx)(_components.mn, {
                            children: "2"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "+"
                        }), (0,jsx_runtime.jsxs)(_components.msup, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "σ"
                          }), (0,jsx_runtime.jsx)(_components.mn, {
                            children: "2"
                          })]
                        })]
                      })
                    })
                  })]
                }), (0,jsx_runtime.jsxs)(_components.mtr, {
                  children: [(0,jsx_runtime.jsx)(_components.mtd, {
                    children: (0,jsx_runtime.jsx)(_components.mstyle, {
                      scriptlevel: "0",
                      displaystyle: "true",
                      children: (0,jsx_runtime.jsx)(_components.mrow, {})
                    })
                  }), (0,jsx_runtime.jsx)(_components.mtd, {
                    children: (0,jsx_runtime.jsx)(_components.mstyle, {
                      scriptlevel: "0",
                      displaystyle: "true",
                      children: (0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsx)(_components.mrow, {}), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "="
                        }), (0,jsx_runtime.jsx)(_components.mtext, {
                          children: "Var"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: "("
                        }), (0,jsx_runtime.jsxs)(_components.mover, {
                          accent: "true",
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "f"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "^"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: ")"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "+"
                        }), (0,jsx_runtime.jsx)(_components.mtext, {
                          children: "Bias"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: "("
                        }), (0,jsx_runtime.jsxs)(_components.mover, {
                          accent: "true",
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "f"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "^"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.msup, {
                          children: [(0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: ")"
                          }), (0,jsx_runtime.jsx)(_components.mn, {
                            children: "2"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "+"
                        }), (0,jsx_runtime.jsx)(_components.mtext, {
                          children: "Irreducible Error"
                        })]
                      })
                    })
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\begin{aligned}\nE[(y - \\hat{f})^2] &= E[(f + \\epsilon - \\hat{f})^2] \\\\\n&= E[(f - \\hat{f})^2] + 2E[(f - \\hat{f})\\epsilon] + E[\\epsilon^2] \\\\\n&= E[(\\hat{f} - E[\\hat{f}])^2] + (E[\\hat{f}] - f)^2 + \\sigma^2 \\\\\n&= \\text{Var}(\\hat{f}) + \\text{Bias}(\\hat{f})^2 + \\text{Irreducible Error}\n\\end{aligned}"
              })]
            })
          })
        }), (0,jsx_runtime.jsx)(_components.span, {
          className: "katex-html",
          "aria-hidden": "true",
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "base",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "strut",
              style: {
                height: "6.1715em",
                verticalAlign: "-2.8358em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: (0,jsx_runtime.jsxs)(_components.span, {
                className: "mtable",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "col-align-r",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "3.3358em"
                        },
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-5.3779em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              style: {
                                marginRight: "0.0576em"
                              },
                              children: "E"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mopen",
                              children: "[("
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              style: {
                                marginRight: "0.0359em"
                              },
                              children: "y"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mbin",
                              children: "−"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord accent",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "vlist-t vlist-t2",
                                children: [(0,jsx_runtime.jsxs)(_components.span, {
                                  className: "vlist-r",
                                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.9579em"
                                    },
                                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-3em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "3em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "mord mathnormal",
                                        style: {
                                          marginRight: "0.1076em"
                                        },
                                        children: "f"
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-3.2634em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "3em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "accent-body",
                                        style: {
                                          left: "-0.0833em"
                                        },
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord",
                                          children: "^"
                                        })
                                      })]
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-s",
                                    children: "​"
                                  })]
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.1944em"
                                    },
                                    children: (0,jsx_runtime.jsx)(_components.span, {})
                                  })
                                })]
                              })
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mclose",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mclose",
                                children: ")"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "msupsub",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-t",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-r",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.8641em"
                                      },
                                      children: (0,jsx_runtime.jsxs)(_components.span, {
                                        style: {
                                          top: "-3.113em",
                                          marginRight: "0.05em"
                                        },
                                        children: [(0,jsx_runtime.jsx)(_components.span, {
                                          className: "pstrut",
                                          style: {
                                            height: "2.7em"
                                          }
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "sizing reset-size6 size3 mtight",
                                          children: (0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mtight",
                                            children: "2"
                                          })
                                        })]
                                      })
                                    })
                                  })
                                })
                              })]
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mclose",
                              children: "]"
                            })]
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.76em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.1421em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-0.5242em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord"
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "2.8358em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "col-align-l",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "3.3358em"
                        },
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-5.3779em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2778em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mrel",
                              children: "="
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2778em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              style: {
                                marginRight: "0.0576em"
                              },
                              children: "E"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mopen",
                              children: "[("
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              style: {
                                marginRight: "0.1076em"
                              },
                              children: "f"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mbin",
                              children: "+"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "ϵ"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mbin",
                              children: "−"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord accent",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "vlist-t vlist-t2",
                                children: [(0,jsx_runtime.jsxs)(_components.span, {
                                  className: "vlist-r",
                                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.9579em"
                                    },
                                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-3em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "3em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "mord mathnormal",
                                        style: {
                                          marginRight: "0.1076em"
                                        },
                                        children: "f"
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-3.2634em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "3em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "accent-body",
                                        style: {
                                          left: "-0.0833em"
                                        },
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord",
                                          children: "^"
                                        })
                                      })]
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-s",
                                    children: "​"
                                  })]
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.1944em"
                                    },
                                    children: (0,jsx_runtime.jsx)(_components.span, {})
                                  })
                                })]
                              })
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mclose",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mclose",
                                children: ")"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "msupsub",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-t",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-r",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.8641em"
                                      },
                                      children: (0,jsx_runtime.jsxs)(_components.span, {
                                        style: {
                                          top: "-3.113em",
                                          marginRight: "0.05em"
                                        },
                                        children: [(0,jsx_runtime.jsx)(_components.span, {
                                          className: "pstrut",
                                          style: {
                                            height: "2.7em"
                                          }
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "sizing reset-size6 size3 mtight",
                                          children: (0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mtight",
                                            children: "2"
                                          })
                                        })]
                                      })
                                    })
                                  })
                                })
                              })]
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mclose",
                              children: "]"
                            })]
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.76em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2778em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mrel",
                              children: "="
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2778em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              style: {
                                marginRight: "0.0576em"
                              },
                              children: "E"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mopen",
                              children: "[("
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              style: {
                                marginRight: "0.1076em"
                              },
                              children: "f"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mbin",
                              children: "−"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord accent",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "vlist-t vlist-t2",
                                children: [(0,jsx_runtime.jsxs)(_components.span, {
                                  className: "vlist-r",
                                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.9579em"
                                    },
                                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-3em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "3em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "mord mathnormal",
                                        style: {
                                          marginRight: "0.1076em"
                                        },
                                        children: "f"
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-3.2634em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "3em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "accent-body",
                                        style: {
                                          left: "-0.0833em"
                                        },
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord",
                                          children: "^"
                                        })
                                      })]
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-s",
                                    children: "​"
                                  })]
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.1944em"
                                    },
                                    children: (0,jsx_runtime.jsx)(_components.span, {})
                                  })
                                })]
                              })
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mclose",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mclose",
                                children: ")"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "msupsub",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-t",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-r",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.8641em"
                                      },
                                      children: (0,jsx_runtime.jsxs)(_components.span, {
                                        style: {
                                          top: "-3.113em",
                                          marginRight: "0.05em"
                                        },
                                        children: [(0,jsx_runtime.jsx)(_components.span, {
                                          className: "pstrut",
                                          style: {
                                            height: "2.7em"
                                          }
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "sizing reset-size6 size3 mtight",
                                          children: (0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mtight",
                                            children: "2"
                                          })
                                        })]
                                      })
                                    })
                                  })
                                })
                              })]
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mclose",
                              children: "]"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mbin",
                              children: "+"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord",
                              children: "2"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              style: {
                                marginRight: "0.0576em"
                              },
                              children: "E"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mopen",
                              children: "[("
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              style: {
                                marginRight: "0.1076em"
                              },
                              children: "f"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mbin",
                              children: "−"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord accent",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "vlist-t vlist-t2",
                                children: [(0,jsx_runtime.jsxs)(_components.span, {
                                  className: "vlist-r",
                                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.9579em"
                                    },
                                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-3em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "3em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "mord mathnormal",
                                        style: {
                                          marginRight: "0.1076em"
                                        },
                                        children: "f"
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-3.2634em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "3em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "accent-body",
                                        style: {
                                          left: "-0.0833em"
                                        },
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord",
                                          children: "^"
                                        })
                                      })]
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-s",
                                    children: "​"
                                  })]
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.1944em"
                                    },
                                    children: (0,jsx_runtime.jsx)(_components.span, {})
                                  })
                                })]
                              })
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mclose",
                              children: ")"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              children: "ϵ"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mclose",
                              children: "]"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mbin",
                              children: "+"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              style: {
                                marginRight: "0.0576em"
                              },
                              children: "E"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mopen",
                              children: "["
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal",
                                children: "ϵ"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "msupsub",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-t",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-r",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.8641em"
                                      },
                                      children: (0,jsx_runtime.jsxs)(_components.span, {
                                        style: {
                                          top: "-3.113em",
                                          marginRight: "0.05em"
                                        },
                                        children: [(0,jsx_runtime.jsx)(_components.span, {
                                          className: "pstrut",
                                          style: {
                                            height: "2.7em"
                                          }
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "sizing reset-size6 size3 mtight",
                                          children: (0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mtight",
                                            children: "2"
                                          })
                                        })]
                                      })
                                    })
                                  })
                                })
                              })]
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mclose",
                              children: "]"
                            })]
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.1421em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2778em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mrel",
                              children: "="
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2778em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              style: {
                                marginRight: "0.0576em"
                              },
                              children: "E"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mopen",
                              children: "[("
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord accent",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "vlist-t vlist-t2",
                                children: [(0,jsx_runtime.jsxs)(_components.span, {
                                  className: "vlist-r",
                                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.9579em"
                                    },
                                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-3em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "3em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "mord mathnormal",
                                        style: {
                                          marginRight: "0.1076em"
                                        },
                                        children: "f"
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-3.2634em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "3em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "accent-body",
                                        style: {
                                          left: "-0.0833em"
                                        },
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord",
                                          children: "^"
                                        })
                                      })]
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-s",
                                    children: "​"
                                  })]
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.1944em"
                                    },
                                    children: (0,jsx_runtime.jsx)(_components.span, {})
                                  })
                                })]
                              })
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mbin",
                              children: "−"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              style: {
                                marginRight: "0.0576em"
                              },
                              children: "E"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mopen",
                              children: "["
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord accent",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "vlist-t vlist-t2",
                                children: [(0,jsx_runtime.jsxs)(_components.span, {
                                  className: "vlist-r",
                                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.9579em"
                                    },
                                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-3em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "3em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "mord mathnormal",
                                        style: {
                                          marginRight: "0.1076em"
                                        },
                                        children: "f"
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-3.2634em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "3em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "accent-body",
                                        style: {
                                          left: "-0.0833em"
                                        },
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord",
                                          children: "^"
                                        })
                                      })]
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-s",
                                    children: "​"
                                  })]
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.1944em"
                                    },
                                    children: (0,jsx_runtime.jsx)(_components.span, {})
                                  })
                                })]
                              })
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mclose",
                              children: "]"
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mclose",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mclose",
                                children: ")"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "msupsub",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-t",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-r",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.8641em"
                                      },
                                      children: (0,jsx_runtime.jsxs)(_components.span, {
                                        style: {
                                          top: "-3.113em",
                                          marginRight: "0.05em"
                                        },
                                        children: [(0,jsx_runtime.jsx)(_components.span, {
                                          className: "pstrut",
                                          style: {
                                            height: "2.7em"
                                          }
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "sizing reset-size6 size3 mtight",
                                          children: (0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mtight",
                                            children: "2"
                                          })
                                        })]
                                      })
                                    })
                                  })
                                })
                              })]
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mclose",
                              children: "]"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mbin",
                              children: "+"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mopen",
                              children: "("
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              style: {
                                marginRight: "0.0576em"
                              },
                              children: "E"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mopen",
                              children: "["
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord accent",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "vlist-t vlist-t2",
                                children: [(0,jsx_runtime.jsxs)(_components.span, {
                                  className: "vlist-r",
                                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.9579em"
                                    },
                                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-3em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "3em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "mord mathnormal",
                                        style: {
                                          marginRight: "0.1076em"
                                        },
                                        children: "f"
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-3.2634em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "3em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "accent-body",
                                        style: {
                                          left: "-0.0833em"
                                        },
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord",
                                          children: "^"
                                        })
                                      })]
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-s",
                                    children: "​"
                                  })]
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.1944em"
                                    },
                                    children: (0,jsx_runtime.jsx)(_components.span, {})
                                  })
                                })]
                              })
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mclose",
                              children: "]"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mbin",
                              children: "−"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              style: {
                                marginRight: "0.1076em"
                              },
                              children: "f"
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mclose",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mclose",
                                children: ")"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "msupsub",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-t",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-r",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.8641em"
                                      },
                                      children: (0,jsx_runtime.jsxs)(_components.span, {
                                        style: {
                                          top: "-3.113em",
                                          marginRight: "0.05em"
                                        },
                                        children: [(0,jsx_runtime.jsx)(_components.span, {
                                          className: "pstrut",
                                          style: {
                                            height: "2.7em"
                                          }
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "sizing reset-size6 size3 mtight",
                                          children: (0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mtight",
                                            children: "2"
                                          })
                                        })]
                                      })
                                    })
                                  })
                                })
                              })]
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mbin",
                              children: "+"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal",
                                style: {
                                  marginRight: "0.0359em"
                                },
                                children: "σ"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "msupsub",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-t",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-r",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.8641em"
                                      },
                                      children: (0,jsx_runtime.jsxs)(_components.span, {
                                        style: {
                                          top: "-3.113em",
                                          marginRight: "0.05em"
                                        },
                                        children: [(0,jsx_runtime.jsx)(_components.span, {
                                          className: "pstrut",
                                          style: {
                                            height: "2.7em"
                                          }
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "sizing reset-size6 size3 mtight",
                                          children: (0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mtight",
                                            children: "2"
                                          })
                                        })]
                                      })
                                    })
                                  })
                                })
                              })]
                            })]
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-0.5242em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2778em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mrel",
                              children: "="
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2778em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord text",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord",
                                children: "Var"
                              })
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mopen",
                              children: "("
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord accent",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "vlist-t vlist-t2",
                                children: [(0,jsx_runtime.jsxs)(_components.span, {
                                  className: "vlist-r",
                                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.9579em"
                                    },
                                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-3em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "3em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "mord mathnormal",
                                        style: {
                                          marginRight: "0.1076em"
                                        },
                                        children: "f"
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-3.2634em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "3em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "accent-body",
                                        style: {
                                          left: "-0.0833em"
                                        },
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord",
                                          children: "^"
                                        })
                                      })]
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-s",
                                    children: "​"
                                  })]
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.1944em"
                                    },
                                    children: (0,jsx_runtime.jsx)(_components.span, {})
                                  })
                                })]
                              })
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mclose",
                              children: ")"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mbin",
                              children: "+"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord text",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord",
                                children: "Bias"
                              })
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mopen",
                              children: "("
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord accent",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "vlist-t vlist-t2",
                                children: [(0,jsx_runtime.jsxs)(_components.span, {
                                  className: "vlist-r",
                                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.9579em"
                                    },
                                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-3em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "3em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "mord mathnormal",
                                        style: {
                                          marginRight: "0.1076em"
                                        },
                                        children: "f"
                                      })]
                                    }), (0,jsx_runtime.jsxs)(_components.span, {
                                      style: {
                                        top: "-3.2634em"
                                      },
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "pstrut",
                                        style: {
                                          height: "3em"
                                        }
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "accent-body",
                                        style: {
                                          left: "-0.0833em"
                                        },
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord",
                                          children: "^"
                                        })
                                      })]
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-s",
                                    children: "​"
                                  })]
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-r",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist",
                                    style: {
                                      height: "0.1944em"
                                    },
                                    children: (0,jsx_runtime.jsx)(_components.span, {})
                                  })
                                })]
                              })
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mclose",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mclose",
                                children: ")"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "msupsub",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-t",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-r",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.8641em"
                                      },
                                      children: (0,jsx_runtime.jsxs)(_components.span, {
                                        style: {
                                          top: "-3.113em",
                                          marginRight: "0.05em"
                                        },
                                        children: [(0,jsx_runtime.jsx)(_components.span, {
                                          className: "pstrut",
                                          style: {
                                            height: "2.7em"
                                          }
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "sizing reset-size6 size3 mtight",
                                          children: (0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mtight",
                                            children: "2"
                                          })
                                        })]
                                      })
                                    })
                                  })
                                })
                              })]
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mbin",
                              children: "+"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mspace",
                              style: {
                                marginRight: "0.2222em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord text",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord",
                                children: "Irreducible Error"
                              })
                            })]
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "2.8358em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              })
            })]
          })
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bias?"
        }), ": ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "E"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "["
                  }), (0,jsx_runtime.jsxs)(_components.mover, {
                    accent: "true",
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "f"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "^"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "]"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "f"
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: ")"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "(E[\\hat{f}] - f)^2"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.2079em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0576em"
                },
                children: "E"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "["
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord accent",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.9579em"
                      },
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "mord mathnormal",
                          style: {
                            marginRight: "0.1076em"
                          },
                          children: "f"
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.2634em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "accent-body",
                          style: {
                            left: "-0.0833em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: "^"
                          })
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.1944em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: "]"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mbin",
                children: "−"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.0641em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1076em"
                },
                children: "f"
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mclose",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mclose",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8141em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "2"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              })]
            })]
          })]
        }), " ? how far the average prediction deviates from the true value."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Variance"
        }), ": ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "E"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "["
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.mover, {
                    accent: "true",
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "f"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "^"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "E"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "["
                  }), (0,jsx_runtime.jsxs)(_components.mover, {
                    accent: "true",
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "f"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "^"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "]"
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: ")"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "]"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "E[(\\hat{f} - E[\\hat{f}])^2]"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.2079em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0576em"
                },
                children: "E"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "[("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord accent",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.9579em"
                      },
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "mord mathnormal",
                          style: {
                            marginRight: "0.1076em"
                          },
                          children: "f"
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.2634em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "accent-body",
                          style: {
                            left: "-0.0833em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: "^"
                          })
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.1944em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mbin",
                children: "−"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.2079em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0576em"
                },
                children: "E"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "["
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord accent",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.9579em"
                      },
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "mord mathnormal",
                          style: {
                            marginRight: "0.1076em"
                          },
                          children: "f"
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.2634em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "accent-body",
                          style: {
                            left: "-0.0833em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord",
                            children: "^"
                          })
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.1944em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: "]"
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mclose",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mclose",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8141em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "2"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: "]"
              })]
            })]
          })]
        }), " ? how much predictions fluctuate across different training sets."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Irreducible Error"
        }), ": ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "σ"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\sigma^2"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8141em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0359em"
                  },
                  children: "σ"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8141em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "2"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              })]
            })
          })]
        }), " ? noise inherent in the data that no model can remove."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "---\ntitle: Bias-Variance Tradeoff\n---\n%%{init: {'theme': 'base', 'themeVariables': { 'xyChart': {'titleColor': '#333'}}}}%%\nxychart-beta\n    title \"Model Complexity vs Error\"\n    x-axis [\"Low Complexity (High Bias)\", \"Optimal Complexity\", \"High Complexity (High Variance)\"]\n    y-axis \"Error\" 0 --> 1\n    line \"Total Error\" [0.9, 0.5, 0.3, 0.25, 0.35, 0.6, 0.9]\n    line \"Bias?\" [0.8, 0.6, 0.4, 0.2, 0.1, 0.05, 0.01]\n    line \"Variance\" [0.01, 0.02, 0.05, 0.1, 0.25, 0.55, 0.89]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " The total error is U-shaped. At low complexity, bias dominates. At high complexity, variance dominates. The minimum total error sits at the crossing point."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-validation",
      children: "Cross-Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Evaluating a model on the same data it was trained on gives a biased estimate of performance. Cross-validation solves this by partitioning the data into multiple sets."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K-fold Cross-Validation"
        }), ": The data is split into ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "K"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "K"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0715em"
                },
                children: "K"
              })]
            })
          })]
        }), " equal-sized folds. The model is trained ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "K"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "K"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0715em"
                },
                children: "K"
              })]
            })
          })]
        }), " times, each time using ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "K"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "K-1"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.7667em",
                  verticalAlign: "-0.0833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0715em"
                },
                children: "K"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mbin",
                children: "−"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6444em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "1"
              })]
            })]
          })]
        }), " folds for training and the remaining fold for testing. The final performance is the average of all ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "K"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "K"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0715em"
                },
                children: "K"
              })]
            })
          })]
        }), " trials."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "---\ntitle: K-Fold Cross-Validation (K=5)\n---\nflowchart TD\n    subgraph Data[\"Full Dataset\"]\n        A1[Fold 1] --- A2[Fold 2] --- A3[Fold 3] --- A4[Fold 4] --- A5[Fold 5]\n    end\n\n    subgraph Iteration1[\"Iteration 1\"]\n        B1[\"Train ?\"] --- B2[\"Train ?\"] --- B3[\"Train ?\"] --- B4[\"Train ?\"] --- B5[\"Test ?\"]\n    end\n\n    subgraph Iteration2[\"Iteration 2\"]\n        C1[\"Train ?\"] --- C2[\"Train ?\"] --- C3[\"Train ?\"] --- C4[\"Test ?\"] --- C5[\"Train ?\"]\n    end\n\n    subgraph Iteration3[\"Iteration 3\"]\n        D1[\"Train ?\"] --- D2[\"Train ?\"] --- D3[\"Test ?\"] --- D4[\"Train ?\"] --- D5[\"Train ?\"]\n    end\n\n    subgraph Iteration4[\"Iteration 4\"]\n        E1[\"Train ?\"] --- E2[\"Test ?\"] --- E3[\"Train ?\"] --- E4[\"Train ?\"] --- E5[\"Train ?\"]\n    end\n\n    subgraph Iteration5[\"Iteration 5\"]\n        F1[\"Test ?\"] --- F2[\"Train ?\"] --- F3[\"Train ?\"] --- F4[\"Train ?\"] --- F5[\"Train ?\"]\n    end\n\n    Data --> Iteration1 --> Iteration2 --> Iteration3 --> Iteration4 --> Iteration5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stratified-cross-validation",
      children: "Stratified Cross-Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In standard K-fold cross-validation, each fold is created by random sampling without regard to class distribution. For imbalanced datasets, a fold might end up with zero samples from the minority class, making evaluation meaningless."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Stratified K-fold"
      }), " ensures each fold maintains the same class proportions as the original dataset. This is the default choice for classification tasks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "performance-metrics-for-classification",
      children: "Performance Metrics for Classification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Accuracy"
        }), ": ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "P"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "+"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "N"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "/"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "P"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "+"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "N"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "+"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "F"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "P"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "+"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "F"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "N"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "(TP+TN) / (TP+TN+FP+FN)"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "T"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "P"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mbin",
                children: "+"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "T"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.109em"
                },
                children: "N"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "/"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "T"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "P"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mbin",
                children: "+"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.7667em",
                  verticalAlign: "-0.0833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "T"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.109em"
                },
                children: "N"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mbin",
                children: "+"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.7667em",
                  verticalAlign: "-0.0833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "F"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "P"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mbin",
                children: "+"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "F"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.109em"
                },
                children: "N"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })]
          })]
        }), ". Simple but misleading for imbalanced datasets."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Precision"
        }), ": ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "P"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "/"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "P"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "+"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "F"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "P"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "TP / (TP+FP)"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "T"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "P"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "/"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "T"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "P"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mbin",
                children: "+"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "F"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "P"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })]
          })]
        }), ". \"Of all predicted positives, how many were actually positive?\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recall (Sensitivity)"
        }), ": ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "P"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "/"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "P"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "+"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "F"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "N"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "TP / (TP+FN)"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "T"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "P"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "/"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "T"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "P"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mbin",
                children: "+"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "F"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.109em"
                },
                children: "N"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })]
          })]
        }), ". \"Of all actual positives, how many were correctly predicted?\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F1-Score"
        }), ": Harmonic mean of Precision and Recall. ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "⋅"
                  }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "P"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "r"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "e"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "c"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "s"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "o"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⋅"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "R"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "e"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "c"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "a"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "l"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "l"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "P"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "r"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "e"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "c"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "s"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "o"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "+"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "R"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "e"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "c"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "a"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "l"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "l"
                      })]
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "2 \\cdot \\frac{Precision \\cdot Recall}{Precision + Recall}"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6444em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "2"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mbin",
                children: "⋅"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.2834em",
                  verticalAlign: "-0.4033em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mopen nulldelimiter"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mfrac",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8801em"
                        },
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.655em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                style: {
                                  marginRight: "0.1389em"
                                },
                                children: "P"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                style: {
                                  marginRight: "0.0278em"
                                },
                                children: "r"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "ec"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "i"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "s"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "i"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "o"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "n"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mbin mtight",
                                children: "+"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                style: {
                                  marginRight: "0.0077em"
                                },
                                children: "R"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "ec"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "a"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                style: {
                                  marginRight: "0.0197em"
                                },
                                children: "l"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                style: {
                                  marginRight: "0.0197em"
                                },
                                children: "l"
                              })]
                            })
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.23em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "frac-line",
                            style: {
                              borderBottomWidth: "0.04em"
                            }
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.394em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                style: {
                                  marginRight: "0.1389em"
                                },
                                children: "P"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                style: {
                                  marginRight: "0.0278em"
                                },
                                children: "r"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "ec"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "i"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "s"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "i"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "o"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "n"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mbin mtight",
                                children: "⋅"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                style: {
                                  marginRight: "0.0077em"
                                },
                                children: "R"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "ec"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "a"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                style: {
                                  marginRight: "0.0197em"
                                },
                                children: "l"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                style: {
                                  marginRight: "0.0197em"
                                },
                                children: "l"
                              })]
                            })
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.4033em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mclose nulldelimiter"
                })]
              })]
            })]
          })]
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ROC-AUC"
        }), ": The Area Under the Receiver Operating Characteristic Curve. It measures the model's ability to distinguish between classes across all possible thresholds."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multi-class-classification-metrics",
      children: "Multi-Class Classification Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For problems with more than two classes, metrics are averaged across classes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Macro Averaging"
          }), ": Compute the metric for each class independently and take the unweighted average. Treats all classes equally regardless of size.\n", (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "katex-mathml",
              children: (0,jsx_runtime.jsx)(_components.math, {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                children: (0,jsx_runtime.jsxs)(_components.semantics, {
                  children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mtext, {
                      children: "Macro-F1"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "="
                    }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                      children: [(0,jsx_runtime.jsx)(_components.mn, {
                        children: "1"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "C"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.msubsup, {
                      children: [(0,jsx_runtime.jsx)(_components.mo, {
                        children: "∑"
                      }), (0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "="
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "1"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "C"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "F"
                    }), (0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mn, {
                        children: "1"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.annotation, {
                    encoding: "application/x-tex",
                    children: "\\text{Macro-F1} = \\frac{1}{C}\\sum_{i=1}^{C} F1_i"
                  })]
                })
              })
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex-html",
              "aria-hidden": "true",
              children: [(0,jsx_runtime.jsxs)(_components.span, {
                className: "base",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "strut",
                  style: {
                    height: "0.6833em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord text",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "Macro-F1"
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.2778em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.2778em"
                  }
                })]
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "base",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "strut",
                  style: {
                    height: "1.3262em",
                    verticalAlign: "-0.345em"
                  }
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "mord",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen nulldelimiter"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mfrac",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-r",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.8451em"
                          },
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-2.655em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "sizing reset-size6 size3 mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  style: {
                                    marginRight: "0.0715em"
                                  },
                                  children: "C"
                                })
                              })
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-3.23em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "frac-line",
                              style: {
                                borderBottomWidth: "0.04em"
                              }
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-3.394em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "sizing reset-size6 size3 mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: "1"
                                })
                              })
                            })]
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-s",
                          children: "​"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-r",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.345em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {})
                        })
                      })]
                    })
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose nulldelimiter"
                  })]
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.1667em"
                  }
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "mop",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "mop op-symbol small-op",
                    style: {
                      position: "relative",
                      top: "0em"
                    },
                    children: "∑"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "msupsub",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-r",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.9812em"
                          },
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-2.4003em",
                              marginLeft: "0em",
                              marginRight: "0.05em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "2.7em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "sizing reset-size6 size3 mtight",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord mtight",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  children: "i"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mrel mtight",
                                  children: "="
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: "1"
                                })]
                              })
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-3.2029em",
                              marginRight: "0.05em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "2.7em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "sizing reset-size6 size3 mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  style: {
                                    marginRight: "0.0715em"
                                  },
                                  children: "C"
                                })
                              })
                            })]
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-s",
                          children: "​"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-r",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.2997em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {})
                        })
                      })]
                    })
                  })]
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.1667em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.1389em"
                  },
                  children: "F"
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "mord",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "1"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "msupsub",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-r",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.3117em"
                          },
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-2.55em",
                              marginLeft: "0em",
                              marginRight: "0.05em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "2.7em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "sizing reset-size6 size3 mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "i"
                              })
                            })]
                          })
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-s",
                          children: "​"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-r",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.15em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {})
                        })
                      })]
                    })
                  })]
                })]
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Micro Averaging"
          }), ": Aggregate TP, FP, FN across all classes and compute the metric globally. Favors the majority class.\n", (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "katex-mathml",
              children: (0,jsx_runtime.jsx)(_components.math, {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                children: (0,jsx_runtime.jsxs)(_components.semantics, {
                  children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mtext, {
                      children: "Micro-F1"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "="
                    }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                      children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsx)(_components.mn, {
                          children: "2"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "⋅"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "T"
                        }), (0,jsx_runtime.jsxs)(_components.msub, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "P"
                          }), (0,jsx_runtime.jsx)(_components.mtext, {
                            children: "global"
                          })]
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsx)(_components.mn, {
                          children: "2"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "⋅"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "T"
                        }), (0,jsx_runtime.jsxs)(_components.msub, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "P"
                          }), (0,jsx_runtime.jsx)(_components.mtext, {
                            children: "global"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "+"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "F"
                        }), (0,jsx_runtime.jsxs)(_components.msub, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "P"
                          }), (0,jsx_runtime.jsx)(_components.mtext, {
                            children: "global"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "+"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "F"
                        }), (0,jsx_runtime.jsxs)(_components.msub, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "N"
                          }), (0,jsx_runtime.jsx)(_components.mtext, {
                            children: "global"
                          })]
                        })]
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.annotation, {
                    encoding: "application/x-tex",
                    children: "\\text{Micro-F1} = \\frac{2 \\cdot TP_{\\text{global}}}{2 \\cdot TP_{\\text{global}} + FP_{\\text{global}} + FN_{\\text{global}}}"
                  })]
                })
              })
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex-html",
              "aria-hidden": "true",
              children: [(0,jsx_runtime.jsxs)(_components.span, {
                className: "base",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "strut",
                  style: {
                    height: "0.6833em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord text",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "Micro-F1"
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.2778em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.2778em"
                  }
                })]
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "base",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "strut",
                  style: {
                    height: "1.5395em",
                    verticalAlign: "-0.5481em"
                  }
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "mord",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen nulldelimiter"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mfrac",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-r",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.9914em"
                          },
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-2.655em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "sizing reset-size6 size3 mtight",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord mtight",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: "2"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mbin mtight",
                                  children: "⋅"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  style: {
                                    marginRight: "0.1389em"
                                  },
                                  children: "T"
                                }), (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.1389em"
                                    },
                                    children: "P"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "msupsub",
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-t vlist-t2",
                                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist-r",
                                        children: [(0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.3448em"
                                          },
                                          children: (0,jsx_runtime.jsxs)(_components.span, {
                                            style: {
                                              top: "-2.3488em",
                                              marginLeft: "-0.1389em",
                                              marginRight: "0.0714em"
                                            },
                                            children: [(0,jsx_runtime.jsx)(_components.span, {
                                              className: "pstrut",
                                              style: {
                                                height: "2.5em"
                                              }
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "sizing reset-size3 size1 mtight",
                                              children: (0,jsx_runtime.jsx)(_components.span, {
                                                className: "mord mtight",
                                                children: (0,jsx_runtime.jsx)(_components.span, {
                                                  className: "mord text mtight",
                                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                                    className: "mord mtight",
                                                    children: "global"
                                                  })
                                                })
                                              })
                                            })]
                                          })
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist-s",
                                          children: "​"
                                        })]
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-r",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.2901em"
                                          },
                                          children: (0,jsx_runtime.jsx)(_components.span, {})
                                        })
                                      })]
                                    })
                                  })]
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mbin mtight",
                                  children: "+"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  style: {
                                    marginRight: "0.1389em"
                                  },
                                  children: "F"
                                }), (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.1389em"
                                    },
                                    children: "P"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "msupsub",
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-t vlist-t2",
                                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist-r",
                                        children: [(0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.3448em"
                                          },
                                          children: (0,jsx_runtime.jsxs)(_components.span, {
                                            style: {
                                              top: "-2.3488em",
                                              marginLeft: "-0.1389em",
                                              marginRight: "0.0714em"
                                            },
                                            children: [(0,jsx_runtime.jsx)(_components.span, {
                                              className: "pstrut",
                                              style: {
                                                height: "2.5em"
                                              }
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "sizing reset-size3 size1 mtight",
                                              children: (0,jsx_runtime.jsx)(_components.span, {
                                                className: "mord mtight",
                                                children: (0,jsx_runtime.jsx)(_components.span, {
                                                  className: "mord text mtight",
                                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                                    className: "mord mtight",
                                                    children: "global"
                                                  })
                                                })
                                              })
                                            })]
                                          })
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist-s",
                                          children: "​"
                                        })]
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-r",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.2901em"
                                          },
                                          children: (0,jsx_runtime.jsx)(_components.span, {})
                                        })
                                      })]
                                    })
                                  })]
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mbin mtight",
                                  children: "+"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  style: {
                                    marginRight: "0.1389em"
                                  },
                                  children: "F"
                                }), (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.109em"
                                    },
                                    children: "N"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "msupsub",
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-t vlist-t2",
                                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist-r",
                                        children: [(0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.3448em"
                                          },
                                          children: (0,jsx_runtime.jsxs)(_components.span, {
                                            style: {
                                              top: "-2.3488em",
                                              marginLeft: "-0.109em",
                                              marginRight: "0.0714em"
                                            },
                                            children: [(0,jsx_runtime.jsx)(_components.span, {
                                              className: "pstrut",
                                              style: {
                                                height: "2.5em"
                                              }
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "sizing reset-size3 size1 mtight",
                                              children: (0,jsx_runtime.jsx)(_components.span, {
                                                className: "mord mtight",
                                                children: (0,jsx_runtime.jsx)(_components.span, {
                                                  className: "mord text mtight",
                                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                                    className: "mord mtight",
                                                    children: "global"
                                                  })
                                                })
                                              })
                                            })]
                                          })
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist-s",
                                          children: "​"
                                        })]
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-r",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.2901em"
                                          },
                                          children: (0,jsx_runtime.jsx)(_components.span, {})
                                        })
                                      })]
                                    })
                                  })]
                                })]
                              })
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-3.23em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "frac-line",
                              style: {
                                borderBottomWidth: "0.04em"
                              }
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-3.5131em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "sizing reset-size6 size3 mtight",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord mtight",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: "2"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mbin mtight",
                                  children: "⋅"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  style: {
                                    marginRight: "0.1389em"
                                  },
                                  children: "T"
                                }), (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.1389em"
                                    },
                                    children: "P"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "msupsub",
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-t vlist-t2",
                                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist-r",
                                        children: [(0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.3448em"
                                          },
                                          children: (0,jsx_runtime.jsxs)(_components.span, {
                                            style: {
                                              top: "-2.3488em",
                                              marginLeft: "-0.1389em",
                                              marginRight: "0.0714em"
                                            },
                                            children: [(0,jsx_runtime.jsx)(_components.span, {
                                              className: "pstrut",
                                              style: {
                                                height: "2.5em"
                                              }
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "sizing reset-size3 size1 mtight",
                                              children: (0,jsx_runtime.jsx)(_components.span, {
                                                className: "mord mtight",
                                                children: (0,jsx_runtime.jsx)(_components.span, {
                                                  className: "mord text mtight",
                                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                                    className: "mord mtight",
                                                    children: "global"
                                                  })
                                                })
                                              })
                                            })]
                                          })
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist-s",
                                          children: "​"
                                        })]
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-r",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.2901em"
                                          },
                                          children: (0,jsx_runtime.jsx)(_components.span, {})
                                        })
                                      })]
                                    })
                                  })]
                                })]
                              })
                            })]
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-s",
                          children: "​"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-r",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.5481em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {})
                        })
                      })]
                    })
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose nulldelimiter"
                  })]
                })]
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Weighted Averaging"
          }), ": Compute the metric per class and average weighted by the number of true instances per class. Balances macro and micro behavior.\n", (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "katex-mathml",
              children: (0,jsx_runtime.jsx)(_components.math, {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                children: (0,jsx_runtime.jsxs)(_components.semantics, {
                  children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mtext, {
                      children: "Weighted-F1"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "="
                    }), (0,jsx_runtime.jsxs)(_components.msubsup, {
                      children: [(0,jsx_runtime.jsx)(_components.mo, {
                        children: "∑"
                      }), (0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "="
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "1"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "C"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "w"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "⋅"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "F"
                    }), (0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mn, {
                        children: "1"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mspace, {
                      width: "1em"
                    }), (0,jsx_runtime.jsx)(_components.mtext, {
                      children: "where"
                    }), (0,jsx_runtime.jsx)(_components.mspace, {
                      width: "1em"
                    }), (0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "w"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "="
                    }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                      children: [(0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "n"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsxs)(_components.msubsup, {
                          children: [(0,jsx_runtime.jsx)(_components.mo, {
                            children: "∑"
                          }), (0,jsx_runtime.jsxs)(_components.mrow, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "j"
                            }), (0,jsx_runtime.jsx)(_components.mo, {
                              children: "="
                            }), (0,jsx_runtime.jsx)(_components.mn, {
                              children: "1"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "C"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.msub, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "n"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "j"
                          })]
                        })]
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.annotation, {
                    encoding: "application/x-tex",
                    children: "\\text{Weighted-F1} = \\sum_{i=1}^{C} w_i \\cdot F1_i \\quad \\text{where} \\quad w_i = \\frac{n_i}{\\sum_{j=1}^{C} n_j}"
                  })]
                })
              })
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex-html",
              "aria-hidden": "true",
              children: [(0,jsx_runtime.jsxs)(_components.span, {
                className: "base",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "strut",
                  style: {
                    height: "0.8889em",
                    verticalAlign: "-0.1944em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord text",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "Weighted-F1"
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.2778em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.2778em"
                  }
                })]
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "base",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "strut",
                  style: {
                    height: "1.2809em",
                    verticalAlign: "-0.2997em"
                  }
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "mop",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "mop op-symbol small-op",
                    style: {
                      position: "relative",
                      top: "0em"
                    },
                    children: "∑"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "msupsub",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-r",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.9812em"
                          },
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-2.4003em",
                              marginLeft: "0em",
                              marginRight: "0.05em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "2.7em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "sizing reset-size6 size3 mtight",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord mtight",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  children: "i"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mrel mtight",
                                  children: "="
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: "1"
                                })]
                              })
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-3.2029em",
                              marginRight: "0.05em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "2.7em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "sizing reset-size6 size3 mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  style: {
                                    marginRight: "0.0715em"
                                  },
                                  children: "C"
                                })
                              })
                            })]
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-s",
                          children: "​"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-r",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.2997em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {})
                        })
                      })]
                    })
                  })]
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.1667em"
                  }
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "mord",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0269em"
                    },
                    children: "w"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "msupsub",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-r",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.3117em"
                          },
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-2.55em",
                              marginLeft: "-0.0269em",
                              marginRight: "0.05em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "2.7em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "sizing reset-size6 size3 mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "i"
                              })
                            })]
                          })
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-s",
                          children: "​"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-r",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.15em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {})
                        })
                      })]
                    })
                  })]
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.2222em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mbin",
                  children: "⋅"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.2222em"
                  }
                })]
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "base",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "strut",
                  style: {
                    height: "0.8444em",
                    verticalAlign: "-0.15em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.1389em"
                  },
                  children: "F"
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "mord",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "1"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "msupsub",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-r",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.3117em"
                          },
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-2.55em",
                              marginLeft: "0em",
                              marginRight: "0.05em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "2.7em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "sizing reset-size6 size3 mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "i"
                              })
                            })]
                          })
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-s",
                          children: "​"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-r",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.15em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {})
                        })
                      })]
                    })
                  })]
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "1em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord text",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "where"
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "1em"
                  }
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "mord",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0269em"
                    },
                    children: "w"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "msupsub",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-r",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.3117em"
                          },
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-2.55em",
                              marginLeft: "-0.0269em",
                              marginRight: "0.05em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "2.7em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "sizing reset-size6 size3 mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "i"
                              })
                            })]
                          })
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-s",
                          children: "​"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-r",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.15em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {})
                        })
                      })]
                    })
                  })]
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.2778em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.2778em"
                  }
                })]
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "base",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "strut",
                  style: {
                    height: "1.4634em",
                    verticalAlign: "-0.7519em"
                  }
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "mord",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen nulldelimiter"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mfrac",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-r",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.7115em"
                          },
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-2.5703em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "sizing reset-size6 size3 mtight",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord mtight",
                                children: [(0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mop mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mop op-symbol small-op mtight",
                                    style: {
                                      position: "relative",
                                      top: "0em"
                                    },
                                    children: "∑"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "msupsub",
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-t vlist-t2",
                                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist-r",
                                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.8852em"
                                          },
                                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                                            style: {
                                              top: "-2.1786em",
                                              marginLeft: "0em",
                                              marginRight: "0.0714em"
                                            },
                                            children: [(0,jsx_runtime.jsx)(_components.span, {
                                              className: "pstrut",
                                              style: {
                                                height: "2.5em"
                                              }
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "sizing reset-size3 size1 mtight",
                                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                                className: "mord mtight",
                                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                                  className: "mord mathnormal mtight",
                                                  style: {
                                                    marginRight: "0.0572em"
                                                  },
                                                  children: "j"
                                                }), (0,jsx_runtime.jsx)(_components.span, {
                                                  className: "mrel mtight",
                                                  children: "="
                                                }), (0,jsx_runtime.jsx)(_components.span, {
                                                  className: "mord mtight",
                                                  children: "1"
                                                })]
                                              })
                                            })]
                                          }), (0,jsx_runtime.jsxs)(_components.span, {
                                            style: {
                                              top: "-2.8971em",
                                              marginRight: "0.0714em"
                                            },
                                            children: [(0,jsx_runtime.jsx)(_components.span, {
                                              className: "pstrut",
                                              style: {
                                                height: "2.5em"
                                              }
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "sizing reset-size3 size1 mtight",
                                              children: (0,jsx_runtime.jsx)(_components.span, {
                                                className: "mord mtight",
                                                children: (0,jsx_runtime.jsx)(_components.span, {
                                                  className: "mord mathnormal mtight",
                                                  style: {
                                                    marginRight: "0.0715em"
                                                  },
                                                  children: "C"
                                                })
                                              })
                                            })]
                                          })]
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist-s",
                                          children: "​"
                                        })]
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-r",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.4603em"
                                          },
                                          children: (0,jsx_runtime.jsx)(_components.span, {})
                                        })
                                      })]
                                    })
                                  })]
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mspace mtight",
                                  style: {
                                    marginRight: "0.1952em"
                                  }
                                }), (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "n"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "msupsub",
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-t vlist-t2",
                                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist-r",
                                        children: [(0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.3281em"
                                          },
                                          children: (0,jsx_runtime.jsxs)(_components.span, {
                                            style: {
                                              top: "-2.357em",
                                              marginLeft: "0em",
                                              marginRight: "0.0714em"
                                            },
                                            children: [(0,jsx_runtime.jsx)(_components.span, {
                                              className: "pstrut",
                                              style: {
                                                height: "2.5em"
                                              }
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "sizing reset-size3 size1 mtight",
                                              children: (0,jsx_runtime.jsx)(_components.span, {
                                                className: "mord mathnormal mtight",
                                                style: {
                                                  marginRight: "0.0572em"
                                                },
                                                children: "j"
                                              })
                                            })]
                                          })
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist-s",
                                          children: "​"
                                        })]
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-r",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.2819em"
                                          },
                                          children: (0,jsx_runtime.jsx)(_components.span, {})
                                        })
                                      })]
                                    })
                                  })]
                                })]
                              })
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-3.23em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "frac-line",
                              style: {
                                borderBottomWidth: "0.04em"
                              }
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-3.4101em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "sizing reset-size6 size3 mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "n"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "msupsub",
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-t vlist-t2",
                                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist-r",
                                        children: [(0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.3281em"
                                          },
                                          children: (0,jsx_runtime.jsxs)(_components.span, {
                                            style: {
                                              top: "-2.357em",
                                              marginLeft: "0em",
                                              marginRight: "0.0714em"
                                            },
                                            children: [(0,jsx_runtime.jsx)(_components.span, {
                                              className: "pstrut",
                                              style: {
                                                height: "2.5em"
                                              }
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "sizing reset-size3 size1 mtight",
                                              children: (0,jsx_runtime.jsx)(_components.span, {
                                                className: "mord mathnormal mtight",
                                                children: "i"
                                              })
                                            })]
                                          })
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist-s",
                                          children: "​"
                                        })]
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-r",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.143em"
                                          },
                                          children: (0,jsx_runtime.jsx)(_components.span, {})
                                        })
                                      })]
                                    })
                                  })]
                                })
                              })
                            })]
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-s",
                          children: "​"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-r",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.7519em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {})
                        })
                      })]
                    })
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose nulldelimiter"
                  })]
                })]
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Macro"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All classes are equally important (e.g., rare disease types)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Micro"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global performance matters more than per-class (e.g., document classification)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class imbalance exists but you want a balanced single number (default in most libraries)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "regression-metrics",
      children: "Regression Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Regression problems require different evaluation metrics because there are no \"positive\" or \"negative\" predictions."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mean Squared Error (MSE)"
        }), ": ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.mfrac, {
                    children: [(0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "n"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.msubsup, {
                    children: [(0,jsx_runtime.jsx)(_components.mo, {
                      children: "∑"
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "1"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "n"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "y"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsxs)(_components.mover, {
                      accent: "true",
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "y"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "^"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: ")"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\frac{1}{n}\\sum_{i=1}^{n} (y_i - \\hat{y}_i)^2"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.1901em",
                  verticalAlign: "-0.345em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mopen nulldelimiter"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mfrac",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8451em"
                        },
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.655em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "n"
                              })
                            })
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.23em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "frac-line",
                            style: {
                              borderBottomWidth: "0.04em"
                            }
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.394em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mtight",
                                children: "1"
                              })
                            })
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.345em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mclose nulldelimiter"
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mop",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mop op-symbol small-op",
                  style: {
                    position: "relative",
                    top: "0em"
                  },
                  children: "∑"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8043em"
                        },
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.4003em",
                            marginLeft: "0em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "i"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mrel mtight",
                                children: "="
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mtight",
                                children: "1"
                              })]
                            })
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.2029em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "n"
                              })
                            })
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.2997em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0359em"
                  },
                  children: "y"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0359em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mbin",
                children: "−"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.0641em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord accent",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.6944em"
                        },
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal",
                            style: {
                              marginRight: "0.0359em"
                            },
                            children: "y"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "accent-body",
                            style: {
                              left: "-0.1944em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord",
                              children: "^"
                            })
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.1944em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0359em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mclose",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mclose",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8141em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "2"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              })]
            })]
          })]
        }), ". Penalizes large errors heavily."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root Mean Squared Error (RMSE)"
        }), ": ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.msqrt, {
                    children: (0,jsx_runtime.jsx)(_components.mtext, {
                      children: "MSE"
                    })
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\sqrt{\\text{MSE}}"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.04em",
                  verticalAlign: "-0.1133em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord sqrt",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.9267em"
                      },
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "svg-align",
                        style: {
                          top: "-3em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "mord",
                          style: {
                            paddingLeft: "0.833em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord text",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord",
                              children: "MSE"
                            })
                          })
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.8867em"
                        },
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "hide-tail",
                          style: {
                            minWidth: "0.853em",
                            height: "1.08em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.svg, {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "400em",
                            height: "1.08em",
                            viewBox: "0 0 400000 1080",
                            preserveAspectRatio: "xMinYMin slice",
                            children: (0,jsx_runtime.jsx)(_components.path, {
                              d: "M95,702\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl0 -0\nc5.3,-9.3,12,-14,20,-14\nH400000v40H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM834 80h400000v40h-400000z"
                            })
                          })
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-s",
                      children: "​"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.1133em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            })
          })]
        }), ". Interpretable in the same units as ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "y"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "y"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.625em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0359em"
                },
                children: "y"
              })]
            })
          })]
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mean Absolute Error (MAE)"
        }), ": ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.mfrac, {
                    children: [(0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "n"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.msubsup, {
                    children: [(0,jsx_runtime.jsx)(_components.mo, {
                      children: "∑"
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "1"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "n"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "∣"
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "y"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsxs)(_components.mover, {
                      accent: "true",
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "y"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "^"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "∣"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\frac{1}{n}\\sum_{i=1}^{n} |y_i - \\hat{y}_i|"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.1901em",
                  verticalAlign: "-0.345em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mopen nulldelimiter"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mfrac",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8451em"
                        },
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.655em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "n"
                              })
                            })
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.23em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "frac-line",
                            style: {
                              borderBottomWidth: "0.04em"
                            }
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.394em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mtight",
                                children: "1"
                              })
                            })
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.345em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mclose nulldelimiter"
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mop",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mop op-symbol small-op",
                  style: {
                    position: "relative",
                    top: "0em"
                  },
                  children: "∑"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8043em"
                        },
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.4003em",
                            marginLeft: "0em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "i"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mrel mtight",
                                children: "="
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mtight",
                                children: "1"
                              })]
                            })
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.2029em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "n"
                              })
                            })
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.2997em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "∣"
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0359em"
                  },
                  children: "y"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0359em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mbin",
                children: "−"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord accent",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.6944em"
                        },
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal",
                            style: {
                              marginRight: "0.0359em"
                            },
                            children: "y"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "accent-body",
                            style: {
                              left: "-0.1944em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord",
                              children: "^"
                            })
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.1944em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3117em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.55em",
                            marginLeft: "-0.0359em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            })
                          })]
                        })
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.15em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "∣"
              })]
            })]
          })]
        }), ". Robust to outliers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "R? (Coefficient of Determination)"
        }), ": ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mo, {
                        children: "∑"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "y"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsxs)(_components.mover, {
                          accent: "true",
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "y"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "^"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.msup, {
                        children: [(0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: ")"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "2"
                        })]
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mo, {
                        children: "∑"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "y"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      }), (0,jsx_runtime.jsxs)(_components.mover, {
                        accent: "true",
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "y"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "ˉ"
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.msup, {
                        children: [(0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: ")"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "2"
                        })]
                      })]
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "1 - \\frac{\\sum (y_i - \\hat{y}_i)^2}{\\sum (y_i - \\bar{y})^2}"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.7278em",
                  verticalAlign: "-0.0833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "1"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mbin",
                children: "−"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.6289em",
                  verticalAlign: "-0.52em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mopen nulldelimiter"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mfrac",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "1.1089em"
                        },
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.655em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mop op-symbol small-op mtight",
                                style: {
                                  position: "relative",
                                  top: "0em"
                                },
                                children: "∑"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mopen mtight",
                                children: "("
                              }), (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord mtight",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  style: {
                                    marginRight: "0.0359em"
                                  },
                                  children: "y"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "msupsub",
                                  children: (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "vlist-t vlist-t2",
                                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-r",
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.3281em"
                                        },
                                        children: (0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-2.357em",
                                            marginLeft: "-0.0359em",
                                            marginRight: "0.0714em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "2.5em"
                                            }
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "sizing reset-size3 size1 mtight",
                                            children: (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mathnormal mtight",
                                              children: "i"
                                            })
                                          })]
                                        })
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-s",
                                        children: "​"
                                      })]
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist-r",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.143em"
                                        },
                                        children: (0,jsx_runtime.jsx)(_components.span, {})
                                      })
                                    })]
                                  })
                                })]
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mbin mtight",
                                children: "−"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord accent mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "vlist-t vlist-t2",
                                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                                    className: "vlist-r",
                                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.5678em"
                                      },
                                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                                        style: {
                                          top: "-2.7em"
                                        },
                                        children: [(0,jsx_runtime.jsx)(_components.span, {
                                          className: "pstrut",
                                          style: {
                                            height: "2.7em"
                                          }
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "mord mathnormal mtight",
                                          style: {
                                            marginRight: "0.0359em"
                                          },
                                          children: "y"
                                        })]
                                      }), (0,jsx_runtime.jsxs)(_components.span, {
                                        style: {
                                          top: "-2.7em"
                                        },
                                        children: [(0,jsx_runtime.jsx)(_components.span, {
                                          className: "pstrut",
                                          style: {
                                            height: "2.7em"
                                          }
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "accent-body",
                                          style: {
                                            left: "-0.1944em"
                                          },
                                          children: (0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mtight",
                                            children: "ˉ"
                                          })
                                        })]
                                      })]
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist-s",
                                      children: "​"
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-r",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.1944em"
                                      },
                                      children: (0,jsx_runtime.jsx)(_components.span, {})
                                    })
                                  })]
                                })
                              }), (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mclose mtight",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mclose mtight",
                                  children: ")"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "msupsub",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-t",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist-r",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.7463em"
                                        },
                                        children: (0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-2.786em",
                                            marginRight: "0.0714em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "2.5em"
                                            }
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "sizing reset-size3 size1 mtight",
                                            children: (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mtight",
                                              children: "2"
                                            })
                                          })]
                                        })
                                      })
                                    })
                                  })
                                })]
                              })]
                            })
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.23em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "frac-line",
                            style: {
                              borderBottomWidth: "0.04em"
                            }
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.485em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mop op-symbol small-op mtight",
                                style: {
                                  position: "relative",
                                  top: "0em"
                                },
                                children: "∑"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mopen mtight",
                                children: "("
                              }), (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord mtight",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  style: {
                                    marginRight: "0.0359em"
                                  },
                                  children: "y"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "msupsub",
                                  children: (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "vlist-t vlist-t2",
                                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-r",
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.3281em"
                                        },
                                        children: (0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-2.357em",
                                            marginLeft: "-0.0359em",
                                            marginRight: "0.0714em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "2.5em"
                                            }
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "sizing reset-size3 size1 mtight",
                                            children: (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mathnormal mtight",
                                              children: "i"
                                            })
                                          })]
                                        })
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-s",
                                        children: "​"
                                      })]
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist-r",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.143em"
                                        },
                                        children: (0,jsx_runtime.jsx)(_components.span, {})
                                      })
                                    })]
                                  })
                                })]
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mbin mtight",
                                children: "−"
                              }), (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord mtight",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord accent mtight",
                                  children: (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "vlist-t vlist-t2",
                                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-r",
                                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.6944em"
                                        },
                                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-2.7em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "2.7em"
                                            }
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mathnormal mtight",
                                            style: {
                                              marginRight: "0.0359em"
                                            },
                                            children: "y"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-2.7em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "2.7em"
                                            }
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "accent-body",
                                            style: {
                                              left: "-0.1944em"
                                            },
                                            children: (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mtight",
                                              children: "^"
                                            })
                                          })]
                                        })]
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-s",
                                        children: "​"
                                      })]
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist-r",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.1944em"
                                        },
                                        children: (0,jsx_runtime.jsx)(_components.span, {})
                                      })
                                    })]
                                  })
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "msupsub",
                                  children: (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "vlist-t vlist-t2",
                                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-r",
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.3281em"
                                        },
                                        children: (0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-2.357em",
                                            marginLeft: "-0.0359em",
                                            marginRight: "0.0714em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "2.5em"
                                            }
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "sizing reset-size3 size1 mtight",
                                            children: (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mathnormal mtight",
                                              children: "i"
                                            })
                                          })]
                                        })
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-s",
                                        children: "​"
                                      })]
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist-r",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.143em"
                                        },
                                        children: (0,jsx_runtime.jsx)(_components.span, {})
                                      })
                                    })]
                                  })
                                })]
                              }), (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mclose mtight",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mclose mtight",
                                  children: ")"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "msupsub",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-t",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist-r",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.8913em"
                                        },
                                        children: (0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-2.931em",
                                            marginRight: "0.0714em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "2.5em"
                                            }
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "sizing reset-size3 size1 mtight",
                                            children: (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mtight",
                                              children: "2"
                                            })
                                          })]
                                        })
                                      })
                                    })
                                  })
                                })]
                              })]
                            })
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.52em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mclose nulldelimiter"
                })]
              })]
            })]
          })]
        }), ". Proportion of variance explained. Can be negative for poor models."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Adjusted R?"
        }), ": ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "1"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      }), (0,jsx_runtime.jsxs)(_components.msup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "R"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "2"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "1"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "p"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "1"
                      })]
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "1 - \\frac{(1 - R^2)(n - 1)}{n - p - 1}"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.7278em",
                  verticalAlign: "-0.0833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "1"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mbin",
                children: "−"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1.59em",
                  verticalAlign: "-0.4811em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mopen nulldelimiter"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mfrac",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "1.1089em"
                        },
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.655em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "n"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mbin mtight",
                                children: "−"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "p"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mbin mtight",
                                children: "−"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mtight",
                                children: "1"
                              })]
                            })
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.23em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "frac-line",
                            style: {
                              borderBottomWidth: "0.04em"
                            }
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.485em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mopen mtight",
                                children: "("
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mtight",
                                children: "1"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mbin mtight",
                                children: "−"
                              }), (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord mtight",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  style: {
                                    marginRight: "0.0077em"
                                  },
                                  children: "R"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "msupsub",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-t",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist-r",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.8913em"
                                        },
                                        children: (0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-2.931em",
                                            marginRight: "0.0714em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "2.5em"
                                            }
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "sizing reset-size3 size1 mtight",
                                            children: (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mtight",
                                              children: "2"
                                            })
                                          })]
                                        })
                                      })
                                    })
                                  })
                                })]
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mclose mtight",
                                children: ")"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mopen mtight",
                                children: "("
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "n"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mbin mtight",
                                children: "−"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mtight",
                                children: "1"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mclose mtight",
                                children: ")"
                              })]
                            })
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-s",
                        children: "​"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.4811em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mclose nulldelimiter"
                })]
              })]
            })]
          })]
        }), ". Penalizes adding irrelevant features, where ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "p"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "p"
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.625em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "p"
              })]
            })
          })]
        }), " is the number of predictors."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "---\ntitle: Regression Metric Properties\n---\nflowchart TD\n    MSE[MSE<br/>Sensitive to outliers] --> RMSE[RMSE<br/>Same units as target]\n    MAE[MAE<br/>Robust to outliers]\n    R2[R?<br/>Proportion of variance explained] --> ADJR2[Adjusted R?<br/>Penalizes extra features]\n    RMSE --> COMPARE[Compare models]\n    MAE --> COMPARE\n    R2 --> COMPARE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "learning-curves",
      children: "Learning Curves"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A learning curve plots training and validation error as a function of training set size. It is a powerful diagnostic tool:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "---\ntitle: Learning Curves\n---\n%%{init: {'theme': 'base'}}%%\nxychart-beta\n    title \"Learning Curve Diagnosis\"\n    x-axis \"Training Set Size\" 0 --> 100\n    y-axis \"Error\" 0 --> 1\n    line \"Training Error (High Bias)\" [0.5, 0.48, 0.47, 0.46, 0.45, 0.45, 0.44]\n    line \"Validation Error (High Bias)\" [0.55, 0.52, 0.50, 0.48, 0.47, 0.46, 0.46]\n    line \"Training Error (High Variance)\" [0.01, 0.02, 0.03, 0.05, 0.08, 0.10, 0.12]\n    line \"Validation Error (High Variance)\" [0.6, 0.5, 0.42, 0.38, 0.35, 0.33, 0.32]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Diagnosis rules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "High Bias (Underfitting)"
        }), ": Both curves converge at a high error value. Adding more data will not help."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "High Variance (Overfitting)"
        }), ": Training error is much lower than validation error, and the gap persists as data increases. Adding more data may help."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Good Fit"
        }), ": Both curves converge at a low error value."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "validation-curves",
      children: "Validation Curves"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A validation curve plots training and validation error as a function of a single hyperparameter. It helps identify the optimal hyperparameter value and detect overfitting regions."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "---\ntitle: Validation Curve for Tree Depth\n---\n%%{init: {'theme': 'base'}}%%\nxychart-beta\n    title \"Validation Curve ? Max Tree Depth\"\n    x-axis \"Max Depth\" 1 --> 20\n    y-axis \"Error\" 0 --> 1\n    line \"Training Error\" [0.4, 0.3, 0.2, 0.12, 0.08, 0.05, 0.03, 0.02, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01]\n    line \"Validation Error\" [0.42, 0.33, 0.25, 0.18, 0.15, 0.13, 0.14, 0.16, 0.19, 0.23, 0.28, 0.33, 0.38, 0.42, 0.45, 0.47, 0.48, 0.48, 0.49, 0.49]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The optimal depth is where validation error is lowest (around 5-6 in this example). After that, training error continues to drop but validation error rises ? classic overfitting."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hyperparameter-tuning",
      children: "Hyperparameter Tuning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hyperparameters are parameters set before training (e.g., learning rate, max depth)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Grid Search"
        }), ": Exhaustive search over a specified subset of the hyperparameter space."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Random Search"
        }), ": Randomly samples the hyperparameter space, often reaching a good solution much faster than Grid Search."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "---\ntitle: Hyperparameter Tuning Workflow\n---\nflowchart TD\n    A[Define Hyperparameter Space] --> B[Select Search Strategy]\n    B --> C{Grid or Random?}\n    C -->|Grid| D[Generate Cartesian Product]\n    C -->|Random| E[Sample N Random Combinations]\n    D --> F[For Each Combination]\n    E --> F\n    F --> G[Run K-Fold Cross-Validation]\n    G --> H[Record Mean Validation Score]\n    H --> I{All Combinations Done?}\n    I -->|No| F\n    I -->|Yes| J[Select Best Hyperparameters]\n    J --> K[Retrain on Full Training Set]\n    K --> L[Evaluate on Held-Out Test Set]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "imbalanced-classification",
      children: "Imbalanced Classification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When one class significantly outnumbers another, standard metrics and training procedures break down."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Techniques:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Class Weights"
          }), ": Assign higher misclassification costs to minority class samples. Many algorithms accept a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "classWeight"
          }), " parameter."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SMOTE (Synthetic Minority Over-sampling Technique)"
          }), ": Creates synthetic minority samples by interpolating between existing minority instances and their k-nearest neighbors."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Cost-Sensitive Learning"
          }), ": Modify the loss function to penalize minority-class misclassifications more heavily. For example, in logistic regression:\n", (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "katex-mathml",
              children: (0,jsx_runtime.jsx)(_components.math, {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                children: (0,jsx_runtime.jsxs)(_components.semantics, {
                  children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mtext, {
                      children: "Cost"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "="
                    }), (0,jsx_runtime.jsxs)(_components.msubsup, {
                      children: [(0,jsx_runtime.jsx)(_components.mo, {
                        children: "∑"
                      }), (0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "="
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "1"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "w"
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "y"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "⋅"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "log"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "⁡"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: "("
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "+"
                    }), (0,jsx_runtime.jsxs)(_components.msup, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "e"
                      }), (0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsx)(_components.mo, {
                          children: "−"
                        }), (0,jsx_runtime.jsxs)(_components.msub, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "y"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "i"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "⋅"
                        }), (0,jsx_runtime.jsxs)(_components.msub, {
                          children: [(0,jsx_runtime.jsxs)(_components.mover, {
                            accent: "true",
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "y"
                            }), (0,jsx_runtime.jsx)(_components.mo, {
                              children: "^"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "i"
                          })]
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: ")"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.annotation, {
                    encoding: "application/x-tex",
                    children: "\\text{Cost} = \\sum_{i=1}^{n} w_{y_i} \\cdot \\log(1 + e^{-y_i \\cdot \\hat{y}_i})"
                  })]
                })
              })
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex-html",
              "aria-hidden": "true",
              children: [(0,jsx_runtime.jsxs)(_components.span, {
                className: "base",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "strut",
                  style: {
                    height: "0.6833em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord text",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "Cost"
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.2778em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.2778em"
                  }
                })]
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "base",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "strut",
                  style: {
                    height: "1.104em",
                    verticalAlign: "-0.2997em"
                  }
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "mop",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "mop op-symbol small-op",
                    style: {
                      position: "relative",
                      top: "0em"
                    },
                    children: "∑"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "msupsub",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-r",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.8043em"
                          },
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-2.4003em",
                              marginLeft: "0em",
                              marginRight: "0.05em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "2.7em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "sizing reset-size6 size3 mtight",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord mtight",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  children: "i"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mrel mtight",
                                  children: "="
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: "1"
                                })]
                              })
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-3.2029em",
                              marginRight: "0.05em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "2.7em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "sizing reset-size6 size3 mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  children: "n"
                                })
                              })
                            })]
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-s",
                          children: "​"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-r",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.2997em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {})
                        })
                      })]
                    })
                  })]
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.1667em"
                  }
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "mord",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0269em"
                    },
                    children: "w"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "msupsub",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-r",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.1514em"
                          },
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-2.55em",
                              marginLeft: "-0.0269em",
                              marginRight: "0.05em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "2.7em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "sizing reset-size6 size3 mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.0359em"
                                    },
                                    children: "y"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "msupsub",
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-t vlist-t2",
                                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist-r",
                                        children: [(0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.3281em"
                                          },
                                          children: (0,jsx_runtime.jsxs)(_components.span, {
                                            style: {
                                              top: "-2.357em",
                                              marginLeft: "-0.0359em",
                                              marginRight: "0.0714em"
                                            },
                                            children: [(0,jsx_runtime.jsx)(_components.span, {
                                              className: "pstrut",
                                              style: {
                                                height: "2.5em"
                                              }
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "sizing reset-size3 size1 mtight",
                                              children: (0,jsx_runtime.jsx)(_components.span, {
                                                className: "mord mathnormal mtight",
                                                children: "i"
                                              })
                                            })]
                                          })
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist-s",
                                          children: "​"
                                        })]
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-r",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.143em"
                                          },
                                          children: (0,jsx_runtime.jsx)(_components.span, {})
                                        })
                                      })]
                                    })
                                  })]
                                })
                              })
                            })]
                          })
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-s",
                          children: "​"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-r",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.2861em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {})
                        })
                      })]
                    })
                  })]
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.2222em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mbin",
                  children: "⋅"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.2222em"
                  }
                })]
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "base",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "strut",
                  style: {
                    height: "1em",
                    verticalAlign: "-0.25em"
                  }
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "mop",
                  children: ["lo", (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      marginRight: "0.0139em"
                    },
                    children: "g"
                  })]
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mopen",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord",
                  children: "1"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.2222em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mbin",
                  children: "+"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.2222em"
                  }
                })]
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "base",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "strut",
                  style: {
                    height: "1.0991em",
                    verticalAlign: "-0.25em"
                  }
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "mord",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "msupsub",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-t",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-r",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.8491em"
                          },
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-3.063em",
                              marginRight: "0.05em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "2.7em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "sizing reset-size6 size3 mtight",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord mtight",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: "−"
                                }), (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.0359em"
                                    },
                                    children: "y"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "msupsub",
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-t vlist-t2",
                                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist-r",
                                        children: [(0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.3281em"
                                          },
                                          children: (0,jsx_runtime.jsxs)(_components.span, {
                                            style: {
                                              top: "-2.357em",
                                              marginLeft: "-0.0359em",
                                              marginRight: "0.0714em"
                                            },
                                            children: [(0,jsx_runtime.jsx)(_components.span, {
                                              className: "pstrut",
                                              style: {
                                                height: "2.5em"
                                              }
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "sizing reset-size3 size1 mtight",
                                              children: (0,jsx_runtime.jsx)(_components.span, {
                                                className: "mord mathnormal mtight",
                                                children: "i"
                                              })
                                            })]
                                          })
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist-s",
                                          children: "​"
                                        })]
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-r",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.143em"
                                          },
                                          children: (0,jsx_runtime.jsx)(_components.span, {})
                                        })
                                      })]
                                    })
                                  })]
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mbin mtight",
                                  children: "⋅"
                                }), (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord accent mtight",
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-t vlist-t2",
                                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist-r",
                                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.6944em"
                                          },
                                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                                            style: {
                                              top: "-2.7em"
                                            },
                                            children: [(0,jsx_runtime.jsx)(_components.span, {
                                              className: "pstrut",
                                              style: {
                                                height: "2.7em"
                                              }
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mathnormal mtight",
                                              style: {
                                                marginRight: "0.0359em"
                                              },
                                              children: "y"
                                            })]
                                          }), (0,jsx_runtime.jsxs)(_components.span, {
                                            style: {
                                              top: "-2.7em"
                                            },
                                            children: [(0,jsx_runtime.jsx)(_components.span, {
                                              className: "pstrut",
                                              style: {
                                                height: "2.7em"
                                              }
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "accent-body",
                                              style: {
                                                left: "-0.1944em"
                                              },
                                              children: (0,jsx_runtime.jsx)(_components.span, {
                                                className: "mord mtight",
                                                children: "^"
                                              })
                                            })]
                                          })]
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist-s",
                                          children: "​"
                                        })]
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-r",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.1944em"
                                          },
                                          children: (0,jsx_runtime.jsx)(_components.span, {})
                                        })
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "msupsub",
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-t vlist-t2",
                                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist-r",
                                        children: [(0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.3281em"
                                          },
                                          children: (0,jsx_runtime.jsxs)(_components.span, {
                                            style: {
                                              top: "-2.357em",
                                              marginLeft: "-0.0359em",
                                              marginRight: "0.0714em"
                                            },
                                            children: [(0,jsx_runtime.jsx)(_components.span, {
                                              className: "pstrut",
                                              style: {
                                                height: "2.5em"
                                              }
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "sizing reset-size3 size1 mtight",
                                              children: (0,jsx_runtime.jsx)(_components.span, {
                                                className: "mord mathnormal mtight",
                                                children: "i"
                                              })
                                            })]
                                          })
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist-s",
                                          children: "​"
                                        })]
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-r",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.143em"
                                          },
                                          children: (0,jsx_runtime.jsx)(_components.span, {})
                                        })
                                      })]
                                    })
                                  })]
                                })]
                              })
                            })]
                          })
                        })
                      })
                    })
                  })]
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mclose",
                  children: ")"
                })]
              })]
            })]
          }), "\nwhere ", (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "katex-mathml",
              children: (0,jsx_runtime.jsx)(_components.math, {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                children: (0,jsx_runtime.jsxs)(_components.semantics, {
                  children: [(0,jsx_runtime.jsx)(_components.mrow, {
                    children: (0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "w"
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "y"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        })]
                      })]
                    })
                  }), (0,jsx_runtime.jsx)(_components.annotation, {
                    encoding: "application/x-tex",
                    children: "w_{y_i}"
                  })]
                })
              })
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "katex-html",
              "aria-hidden": "true",
              children: (0,jsx_runtime.jsxs)(_components.span, {
                className: "base",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "strut",
                  style: {
                    height: "0.7167em",
                    verticalAlign: "-0.2861em"
                  }
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "mord",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0269em"
                    },
                    children: "w"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "msupsub",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-r",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.1514em"
                          },
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-2.55em",
                              marginLeft: "-0.0269em",
                              marginRight: "0.05em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "2.7em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "sizing reset-size6 size3 mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.0359em"
                                    },
                                    children: "y"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "msupsub",
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-t vlist-t2",
                                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist-r",
                                        children: [(0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.3281em"
                                          },
                                          children: (0,jsx_runtime.jsxs)(_components.span, {
                                            style: {
                                              top: "-2.357em",
                                              marginLeft: "-0.0359em",
                                              marginRight: "0.0714em"
                                            },
                                            children: [(0,jsx_runtime.jsx)(_components.span, {
                                              className: "pstrut",
                                              style: {
                                                height: "2.5em"
                                              }
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "sizing reset-size3 size1 mtight",
                                              children: (0,jsx_runtime.jsx)(_components.span, {
                                                className: "mord mathnormal mtight",
                                                children: "i"
                                              })
                                            })]
                                          })
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist-s",
                                          children: "​"
                                        })]
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-r",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.143em"
                                          },
                                          children: (0,jsx_runtime.jsx)(_components.span, {})
                                        })
                                      })]
                                    })
                                  })]
                                })
                              })
                            })]
                          })
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-s",
                          children: "​"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-r",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.2861em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {})
                        })
                      })]
                    })
                  })]
                })]
              })
            })]
          }), " is inversely proportional to class frequency."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Threshold Moving"
          }), ": After training, adjust the decision threshold (default 0.5) to favor the minority class based on Precision-Recall curves."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "statistical-comparison-of-models",
      children: "Statistical Comparison of Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Running a single cross-validation and picking the model with the higher mean score is not sufficient ? we need to test whether the difference is statistically significant."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "McNemar's Test"
          }), ": A non-parametric test for paired nominal data. It tests whether two models make errors on the same samples."]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
                children: "Model B Correct"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "Model B Wrong"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Model A Correct"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "katex",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "katex-mathml",
                    children: (0,jsx_runtime.jsx)(_components.math, {
                      xmlns: "http://www.w3.org/1998/Math/MathML",
                      children: (0,jsx_runtime.jsxs)(_components.semantics, {
                        children: [(0,jsx_runtime.jsx)(_components.mrow, {
                          children: (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "n"
                            }), (0,jsx_runtime.jsx)(_components.mn, {
                              children: "00"
                            })]
                          })
                        }), (0,jsx_runtime.jsx)(_components.annotation, {
                          encoding: "application/x-tex",
                          children: "n_{00}"
                        })]
                      })
                    })
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "katex-html",
                    "aria-hidden": "true",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "base",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "strut",
                        style: {
                          height: "0.5806em",
                          verticalAlign: "-0.15em"
                        }
                      }), (0,jsx_runtime.jsxs)(_components.span, {
                        className: "mord",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "mord mathnormal",
                          children: "n"
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "msupsub",
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist-t vlist-t2",
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              className: "vlist-r",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "vlist",
                                style: {
                                  height: "0.3011em"
                                },
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  style: {
                                    top: "-2.55em",
                                    marginLeft: "0em",
                                    marginRight: "0.05em"
                                  },
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "pstrut",
                                    style: {
                                      height: "2.7em"
                                    }
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "sizing reset-size6 size3 mtight",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mtight",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "mord mtight",
                                        children: "00"
                                      })
                                    })
                                  })]
                                })
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "vlist-s",
                                children: "​"
                              })]
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "vlist-r",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "vlist",
                                style: {
                                  height: "0.15em"
                                },
                                children: (0,jsx_runtime.jsx)(_components.span, {})
                              })
                            })]
                          })
                        })]
                      })]
                    })
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "katex",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "katex-mathml",
                    children: (0,jsx_runtime.jsx)(_components.math, {
                      xmlns: "http://www.w3.org/1998/Math/MathML",
                      children: (0,jsx_runtime.jsxs)(_components.semantics, {
                        children: [(0,jsx_runtime.jsx)(_components.mrow, {
                          children: (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "n"
                            }), (0,jsx_runtime.jsx)(_components.mn, {
                              children: "01"
                            })]
                          })
                        }), (0,jsx_runtime.jsx)(_components.annotation, {
                          encoding: "application/x-tex",
                          children: "n_{01}"
                        })]
                      })
                    })
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "katex-html",
                    "aria-hidden": "true",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "base",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "strut",
                        style: {
                          height: "0.5806em",
                          verticalAlign: "-0.15em"
                        }
                      }), (0,jsx_runtime.jsxs)(_components.span, {
                        className: "mord",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "mord mathnormal",
                          children: "n"
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "msupsub",
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist-t vlist-t2",
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              className: "vlist-r",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "vlist",
                                style: {
                                  height: "0.3011em"
                                },
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  style: {
                                    top: "-2.55em",
                                    marginLeft: "0em",
                                    marginRight: "0.05em"
                                  },
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "pstrut",
                                    style: {
                                      height: "2.7em"
                                    }
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "sizing reset-size6 size3 mtight",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mtight",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "mord mtight",
                                        children: "01"
                                      })
                                    })
                                  })]
                                })
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "vlist-s",
                                children: "​"
                              })]
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "vlist-r",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "vlist",
                                style: {
                                  height: "0.15em"
                                },
                                children: (0,jsx_runtime.jsx)(_components.span, {})
                              })
                            })]
                          })
                        })]
                      })]
                    })
                  })]
                })
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Model A Wrong"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "katex",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "katex-mathml",
                    children: (0,jsx_runtime.jsx)(_components.math, {
                      xmlns: "http://www.w3.org/1998/Math/MathML",
                      children: (0,jsx_runtime.jsxs)(_components.semantics, {
                        children: [(0,jsx_runtime.jsx)(_components.mrow, {
                          children: (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "n"
                            }), (0,jsx_runtime.jsx)(_components.mn, {
                              children: "10"
                            })]
                          })
                        }), (0,jsx_runtime.jsx)(_components.annotation, {
                          encoding: "application/x-tex",
                          children: "n_{10}"
                        })]
                      })
                    })
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "katex-html",
                    "aria-hidden": "true",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "base",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "strut",
                        style: {
                          height: "0.5806em",
                          verticalAlign: "-0.15em"
                        }
                      }), (0,jsx_runtime.jsxs)(_components.span, {
                        className: "mord",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "mord mathnormal",
                          children: "n"
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "msupsub",
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist-t vlist-t2",
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              className: "vlist-r",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "vlist",
                                style: {
                                  height: "0.3011em"
                                },
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  style: {
                                    top: "-2.55em",
                                    marginLeft: "0em",
                                    marginRight: "0.05em"
                                  },
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "pstrut",
                                    style: {
                                      height: "2.7em"
                                    }
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "sizing reset-size6 size3 mtight",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mtight",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "mord mtight",
                                        children: "10"
                                      })
                                    })
                                  })]
                                })
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "vlist-s",
                                children: "​"
                              })]
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "vlist-r",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "vlist",
                                style: {
                                  height: "0.15em"
                                },
                                children: (0,jsx_runtime.jsx)(_components.span, {})
                              })
                            })]
                          })
                        })]
                      })]
                    })
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "katex",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "katex-mathml",
                    children: (0,jsx_runtime.jsx)(_components.math, {
                      xmlns: "http://www.w3.org/1998/Math/MathML",
                      children: (0,jsx_runtime.jsxs)(_components.semantics, {
                        children: [(0,jsx_runtime.jsx)(_components.mrow, {
                          children: (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "n"
                            }), (0,jsx_runtime.jsx)(_components.mn, {
                              children: "11"
                            })]
                          })
                        }), (0,jsx_runtime.jsx)(_components.annotation, {
                          encoding: "application/x-tex",
                          children: "n_{11}"
                        })]
                      })
                    })
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "katex-html",
                    "aria-hidden": "true",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "base",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "strut",
                        style: {
                          height: "0.5806em",
                          verticalAlign: "-0.15em"
                        }
                      }), (0,jsx_runtime.jsxs)(_components.span, {
                        className: "mord",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "mord mathnormal",
                          children: "n"
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "msupsub",
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist-t vlist-t2",
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              className: "vlist-r",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "vlist",
                                style: {
                                  height: "0.3011em"
                                },
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  style: {
                                    top: "-2.55em",
                                    marginLeft: "0em",
                                    marginRight: "0.05em"
                                  },
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "pstrut",
                                    style: {
                                      height: "2.7em"
                                    }
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "sizing reset-size6 size3 mtight",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mtight",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "mord mtight",
                                        children: "11"
                                      })
                                    })
                                  })]
                                })
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "vlist-s",
                                children: "​"
                              })]
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "vlist-r",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "vlist",
                                style: {
                                  height: "0.15em"
                                },
                                children: (0,jsx_runtime.jsx)(_components.span, {})
                              })
                            })]
                          })
                        })]
                      })]
                    })
                  })]
                })
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "katex-mathml",
              children: (0,jsx_runtime.jsx)(_components.math, {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                children: (0,jsx_runtime.jsxs)(_components.semantics, {
                  children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsxs)(_components.msup, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "χ"
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "2"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "="
                    }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                      children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: "("
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          mathvariant: "normal",
                          children: "∣"
                        }), (0,jsx_runtime.jsxs)(_components.msub, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "n"
                          }), (0,jsx_runtime.jsx)(_components.mn, {
                            children: "01"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "−"
                        }), (0,jsx_runtime.jsxs)(_components.msub, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "n"
                          }), (0,jsx_runtime.jsx)(_components.mn, {
                            children: "10"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          mathvariant: "normal",
                          children: "∣"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "−"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "1"
                        }), (0,jsx_runtime.jsxs)(_components.msup, {
                          children: [(0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: ")"
                          }), (0,jsx_runtime.jsx)(_components.mn, {
                            children: "2"
                          })]
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsxs)(_components.msub, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "n"
                          }), (0,jsx_runtime.jsx)(_components.mn, {
                            children: "01"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "+"
                        }), (0,jsx_runtime.jsxs)(_components.msub, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "n"
                          }), (0,jsx_runtime.jsx)(_components.mn, {
                            children: "10"
                          })]
                        })]
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.annotation, {
                    encoding: "application/x-tex",
                    children: "\\chi^2 = \\frac{(|n_{01} - n_{10}| - 1)^2}{n_{01} + n_{10}}"
                  })]
                })
              })
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex-html",
              "aria-hidden": "true",
              children: [(0,jsx_runtime.jsxs)(_components.span, {
                className: "base",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "strut",
                  style: {
                    height: "1.0085em",
                    verticalAlign: "-0.1944em"
                  }
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "mord",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "χ"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "msupsub",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-t",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-r",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.8141em"
                          },
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-3.063em",
                              marginRight: "0.05em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "2.7em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "sizing reset-size6 size3 mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mtight",
                                children: "2"
                              })
                            })]
                          })
                        })
                      })
                    })
                  })]
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.2778em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.2778em"
                  }
                })]
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "base",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "strut",
                  style: {
                    height: "1.554em",
                    verticalAlign: "-0.4451em"
                  }
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "mord",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen nulldelimiter"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mfrac",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-r",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "1.1089em"
                          },
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-2.655em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "sizing reset-size6 size3 mtight",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord mtight",
                                children: [(0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "n"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "msupsub",
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-t vlist-t2",
                                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist-r",
                                        children: [(0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.3173em"
                                          },
                                          children: (0,jsx_runtime.jsxs)(_components.span, {
                                            style: {
                                              top: "-2.357em",
                                              marginLeft: "0em",
                                              marginRight: "0.0714em"
                                            },
                                            children: [(0,jsx_runtime.jsx)(_components.span, {
                                              className: "pstrut",
                                              style: {
                                                height: "2.5em"
                                              }
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "sizing reset-size3 size1 mtight",
                                              children: (0,jsx_runtime.jsx)(_components.span, {
                                                className: "mord mtight",
                                                children: (0,jsx_runtime.jsx)(_components.span, {
                                                  className: "mord mtight",
                                                  children: "01"
                                                })
                                              })
                                            })]
                                          })
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist-s",
                                          children: "​"
                                        })]
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-r",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.143em"
                                          },
                                          children: (0,jsx_runtime.jsx)(_components.span, {})
                                        })
                                      })]
                                    })
                                  })]
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mbin mtight",
                                  children: "+"
                                }), (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "n"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "msupsub",
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-t vlist-t2",
                                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist-r",
                                        children: [(0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.3173em"
                                          },
                                          children: (0,jsx_runtime.jsxs)(_components.span, {
                                            style: {
                                              top: "-2.357em",
                                              marginLeft: "0em",
                                              marginRight: "0.0714em"
                                            },
                                            children: [(0,jsx_runtime.jsx)(_components.span, {
                                              className: "pstrut",
                                              style: {
                                                height: "2.5em"
                                              }
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "sizing reset-size3 size1 mtight",
                                              children: (0,jsx_runtime.jsx)(_components.span, {
                                                className: "mord mtight",
                                                children: (0,jsx_runtime.jsx)(_components.span, {
                                                  className: "mord mtight",
                                                  children: "10"
                                                })
                                              })
                                            })]
                                          })
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist-s",
                                          children: "​"
                                        })]
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-r",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.143em"
                                          },
                                          children: (0,jsx_runtime.jsx)(_components.span, {})
                                        })
                                      })]
                                    })
                                  })]
                                })]
                              })
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-3.23em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "frac-line",
                              style: {
                                borderBottomWidth: "0.04em"
                              }
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-3.485em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "sizing reset-size6 size3 mtight",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord mtight",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mopen mtight",
                                  children: "("
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: "∣"
                                }), (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "n"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "msupsub",
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-t vlist-t2",
                                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist-r",
                                        children: [(0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.3173em"
                                          },
                                          children: (0,jsx_runtime.jsxs)(_components.span, {
                                            style: {
                                              top: "-2.357em",
                                              marginLeft: "0em",
                                              marginRight: "0.0714em"
                                            },
                                            children: [(0,jsx_runtime.jsx)(_components.span, {
                                              className: "pstrut",
                                              style: {
                                                height: "2.5em"
                                              }
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "sizing reset-size3 size1 mtight",
                                              children: (0,jsx_runtime.jsx)(_components.span, {
                                                className: "mord mtight",
                                                children: (0,jsx_runtime.jsx)(_components.span, {
                                                  className: "mord mtight",
                                                  children: "01"
                                                })
                                              })
                                            })]
                                          })
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist-s",
                                          children: "​"
                                        })]
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-r",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.143em"
                                          },
                                          children: (0,jsx_runtime.jsx)(_components.span, {})
                                        })
                                      })]
                                    })
                                  })]
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mbin mtight",
                                  children: "−"
                                }), (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "n"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "msupsub",
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-t vlist-t2",
                                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist-r",
                                        children: [(0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.3173em"
                                          },
                                          children: (0,jsx_runtime.jsxs)(_components.span, {
                                            style: {
                                              top: "-2.357em",
                                              marginLeft: "0em",
                                              marginRight: "0.0714em"
                                            },
                                            children: [(0,jsx_runtime.jsx)(_components.span, {
                                              className: "pstrut",
                                              style: {
                                                height: "2.5em"
                                              }
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "sizing reset-size3 size1 mtight",
                                              children: (0,jsx_runtime.jsx)(_components.span, {
                                                className: "mord mtight",
                                                children: (0,jsx_runtime.jsx)(_components.span, {
                                                  className: "mord mtight",
                                                  children: "10"
                                                })
                                              })
                                            })]
                                          })
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist-s",
                                          children: "​"
                                        })]
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-r",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.143em"
                                          },
                                          children: (0,jsx_runtime.jsx)(_components.span, {})
                                        })
                                      })]
                                    })
                                  })]
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: "∣"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mbin mtight",
                                  children: "−"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: "1"
                                }), (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mclose mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mclose mtight",
                                    children: ")"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "msupsub",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist-t",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-r",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.8913em"
                                          },
                                          children: (0,jsx_runtime.jsxs)(_components.span, {
                                            style: {
                                              top: "-2.931em",
                                              marginRight: "0.0714em"
                                            },
                                            children: [(0,jsx_runtime.jsx)(_components.span, {
                                              className: "pstrut",
                                              style: {
                                                height: "2.5em"
                                              }
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "sizing reset-size3 size1 mtight",
                                              children: (0,jsx_runtime.jsx)(_components.span, {
                                                className: "mord mtight",
                                                children: "2"
                                              })
                                            })]
                                          })
                                        })
                                      })
                                    })
                                  })]
                                })]
                              })
                            })]
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-s",
                          children: "​"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-r",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.4451em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {})
                        })
                      })]
                    })
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose nulldelimiter"
                  })]
                })]
              })]
            })]
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Under the null hypothesis, this follows a ", (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "katex-mathml",
              children: (0,jsx_runtime.jsx)(_components.math, {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                children: (0,jsx_runtime.jsxs)(_components.semantics, {
                  children: [(0,jsx_runtime.jsx)(_components.mrow, {
                    children: (0,jsx_runtime.jsxs)(_components.msup, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "χ"
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "2"
                      })]
                    })
                  }), (0,jsx_runtime.jsx)(_components.annotation, {
                    encoding: "application/x-tex",
                    children: "\\chi^2"
                  })]
                })
              })
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "katex-html",
              "aria-hidden": "true",
              children: (0,jsx_runtime.jsxs)(_components.span, {
                className: "base",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "strut",
                  style: {
                    height: "1.0085em",
                    verticalAlign: "-0.1944em"
                  }
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "mord",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "χ"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "msupsub",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-t",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-r",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.8141em"
                          },
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-3.063em",
                              marginRight: "0.05em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "2.7em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "sizing reset-size6 size3 mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mtight",
                                children: "2"
                              })
                            })]
                          })
                        })
                      })
                    })
                  })]
                })]
              })
            })]
          }), " distribution with 1 degree of freedom. A significant result means the models have different error distributions."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Paired t-Test on K-Fold Results"
          }), ": If we have ", (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "katex-mathml",
              children: (0,jsx_runtime.jsx)(_components.math, {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                children: (0,jsx_runtime.jsxs)(_components.semantics, {
                  children: [(0,jsx_runtime.jsx)(_components.mrow, {
                    children: (0,jsx_runtime.jsx)(_components.mi, {
                      children: "K"
                    })
                  }), (0,jsx_runtime.jsx)(_components.annotation, {
                    encoding: "application/x-tex",
                    children: "K"
                  })]
                })
              })
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "katex-html",
              "aria-hidden": "true",
              children: (0,jsx_runtime.jsxs)(_components.span, {
                className: "base",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "strut",
                  style: {
                    height: "0.6833em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0715em"
                  },
                  children: "K"
                })]
              })
            })]
          }), " paired scores from cross-validation:\n", (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "katex-mathml",
              children: (0,jsx_runtime.jsx)(_components.math, {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                children: (0,jsx_runtime.jsxs)(_components.semantics, {
                  children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "t"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "="
                    }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                      children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsxs)(_components.mover, {
                          accent: "true",
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "d"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "ˉ"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "⋅"
                        }), (0,jsx_runtime.jsx)(_components.msqrt, {
                          children: (0,jsx_runtime.jsx)(_components.mi, {
                            children: "K"
                          })
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "σ"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "d"
                        })]
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.annotation, {
                    encoding: "application/x-tex",
                    children: "t = \\frac{\\bar{d} \\cdot \\sqrt{K}}{\\sigma_d}"
                  })]
                })
              })
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex-html",
              "aria-hidden": "true",
              children: [(0,jsx_runtime.jsxs)(_components.span, {
                className: "base",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "strut",
                  style: {
                    height: "0.6151em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.2778em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.2778em"
                  }
                })]
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "base",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "strut",
                  style: {
                    height: "1.4975em",
                    verticalAlign: "-0.4509em"
                  }
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "mord",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen nulldelimiter"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mfrac",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-r",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "1.0466em"
                          },
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-2.655em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "sizing reset-size6 size3 mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.0359em"
                                    },
                                    children: "σ"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "msupsub",
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-t vlist-t2",
                                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist-r",
                                        children: [(0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.3448em"
                                          },
                                          children: (0,jsx_runtime.jsxs)(_components.span, {
                                            style: {
                                              top: "-2.3488em",
                                              marginLeft: "-0.0359em",
                                              marginRight: "0.0714em"
                                            },
                                            children: [(0,jsx_runtime.jsx)(_components.span, {
                                              className: "pstrut",
                                              style: {
                                                height: "2.5em"
                                              }
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "sizing reset-size3 size1 mtight",
                                              children: (0,jsx_runtime.jsx)(_components.span, {
                                                className: "mord mathnormal mtight",
                                                children: "d"
                                              })
                                            })]
                                          })
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist-s",
                                          children: "​"
                                        })]
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-r",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.1512em"
                                          },
                                          children: (0,jsx_runtime.jsx)(_components.span, {})
                                        })
                                      })]
                                    })
                                  })]
                                })
                              })
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-3.23em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "frac-line",
                              style: {
                                borderBottomWidth: "0.04em"
                              }
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-3.394em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "sizing reset-size6 size3 mtight",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord mtight",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord accent mtight",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-t",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist-r",
                                      children: (0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.8312em"
                                        },
                                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-2.7em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "2.7em"
                                            }
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mathnormal mtight",
                                            children: "d"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-2.9634em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "2.7em"
                                            }
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "accent-body",
                                            style: {
                                              left: "-0.0833em"
                                            },
                                            children: (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mtight",
                                              children: "ˉ"
                                            })
                                          })]
                                        })]
                                      })
                                    })
                                  })
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mbin mtight",
                                  children: "⋅"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord sqrt mtight",
                                  children: (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "vlist-t vlist-t2",
                                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-r",
                                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.9323em"
                                        },
                                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                                          className: "svg-align",
                                          style: {
                                            top: "-3em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "3em"
                                            }
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mtight",
                                            style: {
                                              paddingLeft: "0.833em"
                                            },
                                            children: (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mathnormal mtight",
                                              style: {
                                                marginRight: "0.0715em"
                                              },
                                              children: "K"
                                            })
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-2.8923em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "3em"
                                            }
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "hide-tail mtight",
                                            style: {
                                              minWidth: "0.853em",
                                              height: "1.08em"
                                            },
                                            children: (0,jsx_runtime.jsx)(_components.svg, {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              width: "400em",
                                              height: "1.08em",
                                              viewBox: "0 0 400000 1080",
                                              preserveAspectRatio: "xMinYMin slice",
                                              children: (0,jsx_runtime.jsx)(_components.path, {
                                                d: "M95,702\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl0 -0\nc5.3,-9.3,12,-14,20,-14\nH400000v40H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM834 80h400000v40h-400000z"
                                              })
                                            })
                                          })]
                                        })]
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-s",
                                        children: "​"
                                      })]
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist-r",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.1077em"
                                        },
                                        children: (0,jsx_runtime.jsx)(_components.span, {})
                                      })
                                    })]
                                  })
                                })]
                              })
                            })]
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-s",
                          children: "​"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-r",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.4509em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {})
                        })
                      })]
                    })
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose nulldelimiter"
                  })]
                })]
              })]
            })]
          }), "\nwhere ", (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "katex-mathml",
              children: (0,jsx_runtime.jsx)(_components.math, {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                children: (0,jsx_runtime.jsxs)(_components.semantics, {
                  children: [(0,jsx_runtime.jsx)(_components.mrow, {
                    children: (0,jsx_runtime.jsxs)(_components.mover, {
                      accent: "true",
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "d"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "ˉ"
                      })]
                    })
                  }), (0,jsx_runtime.jsx)(_components.annotation, {
                    encoding: "application/x-tex",
                    children: "\\bar{d}"
                  })]
                })
              })
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "katex-html",
              "aria-hidden": "true",
              children: (0,jsx_runtime.jsxs)(_components.span, {
                className: "base",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "strut",
                  style: {
                    height: "0.8312em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord accent",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8312em"
                        },
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mathnormal",
                            children: "d"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.2634em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "3em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "accent-body",
                            style: {
                              left: "-0.0833em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord",
                              children: "ˉ"
                            })
                          })]
                        })]
                      })
                    })
                  })
                })]
              })
            })]
          }), " is the mean difference between model scores per fold and ", (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "katex-mathml",
              children: (0,jsx_runtime.jsx)(_components.math, {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                children: (0,jsx_runtime.jsxs)(_components.semantics, {
                  children: [(0,jsx_runtime.jsx)(_components.mrow, {
                    children: (0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "σ"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "d"
                      })]
                    })
                  }), (0,jsx_runtime.jsx)(_components.annotation, {
                    encoding: "application/x-tex",
                    children: "\\sigma_d"
                  })]
                })
              })
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "katex-html",
              "aria-hidden": "true",
              children: (0,jsx_runtime.jsxs)(_components.span, {
                className: "base",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "strut",
                  style: {
                    height: "0.5806em",
                    verticalAlign: "-0.15em"
                  }
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "mord",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0359em"
                    },
                    children: "σ"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "msupsub",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-r",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.3361em"
                          },
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-2.55em",
                              marginLeft: "-0.0359em",
                              marginRight: "0.05em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "2.7em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "sizing reset-size6 size3 mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "d"
                              })
                            })]
                          })
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-s",
                          children: "​"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-r",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.15em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {})
                        })
                      })]
                    })
                  })]
                })]
              })
            })]
          }), " is the standard deviation. Reject the null hypothesis if ", (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "katex-mathml",
              children: (0,jsx_runtime.jsx)(_components.math, {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                children: (0,jsx_runtime.jsxs)(_components.semantics, {
                  children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      mathvariant: "normal",
                      children: "∣"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "t"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      mathvariant: "normal",
                      children: "∣"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: ">"
                    }), (0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "t"
                      }), (0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "α"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          mathvariant: "normal",
                          children: "/"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "2"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          separator: "true",
                          children: ","
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "K"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "−"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "1"
                        })]
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.annotation, {
                    encoding: "application/x-tex",
                    children: "|t| > t_{\\alpha/2, K-1}"
                  })]
                })
              })
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex-html",
              "aria-hidden": "true",
              children: [(0,jsx_runtime.jsxs)(_components.span, {
                className: "base",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "strut",
                  style: {
                    height: "1em",
                    verticalAlign: "-0.25em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord",
                  children: "∣"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "t"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord",
                  children: "∣"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.2778em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: ">"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.2778em"
                  }
                })]
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "base",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "strut",
                  style: {
                    height: "0.9703em",
                    verticalAlign: "-0.3552em"
                  }
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "mord",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "t"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "msupsub",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-r",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.3448em"
                          },
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-2.5198em",
                              marginLeft: "0em",
                              marginRight: "0.05em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "2.7em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "sizing reset-size6 size3 mtight",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord mtight",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  style: {
                                    marginRight: "0.0037em"
                                  },
                                  children: "α"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: "/2"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mpunct mtight",
                                  children: ","
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  style: {
                                    marginRight: "0.0715em"
                                  },
                                  children: "K"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mbin mtight",
                                  children: "−"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: "1"
                                })]
                              })
                            })]
                          })
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-s",
                          children: "​"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-r",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.3552em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {})
                        })
                      })]
                    })
                  })]
                })]
              })]
            })]
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning"
        }), ": The t-test on K-fold results has inflated Type I error because the folds overlap. Use McNemar's test on a held-out test set for a more reliable comparison."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-confusion-matrix-interpretation",
      children: "Example 1: Confusion Matrix Interpretation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A medical test for a disease."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data"
        }), ": 100 people tested. 10 have the disease."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Predictions"
        }), ": Model identifies 8 correctly (TP), misses 2 (FN), and incorrectly identifies 5 healthy people as having the disease (FP)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recall"
        }), ": ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mn, {
                    children: "8"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "/"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "10"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.8"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "8/10 = 0.8"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "8/10"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6444em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "0.8"
              })]
            })]
          })]
        }), ". (Good, we caught 80% of cases)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Precision"
        }), ": ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mn, {
                    children: "8"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "/"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "8"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "+"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "5"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.61"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "8/(8+5) = 0.61"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "8/"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "8"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mbin",
                children: "+"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "5"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6444em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "0.61"
              })]
            })]
          })]
        }), ". (Moderate, many false alarms)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Summary"
        }), ": In medicine, high Recall is often prioritized over Precision."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-k-fold-cross-validation-in-typescript",
      children: "Example 2: K-fold Cross-Validation in TypeScript"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type Metrics = {\n    accuracy: number;\n    precision: number;\n    recall: number;\n    f1Score: number;\n};\n\nfunction confusionMatrix(\n    actual: number[],\n    predicted: number[]\n): { tp: number; tn: number; fp: number; fn: number } {\n    let tp = 0, tn = 0, fp = 0, fn = 0;\n    for (let i = 0; i < actual.length; i++) {\n        if (actual[i] === 1 && predicted[i] === 1) tp++;\n        else if (actual[i] === 0 && predicted[i] === 0) tn++;\n        else if (actual[i] === 0 && predicted[i] === 1) fp++;\n        else fn++;\n    }\n    return { tp, tn, fp, fn };\n}\n\nfunction calculateMetrics(actual: number[], predicted: number[]): Metrics {\n    const { tp, tn, fp, fn } = confusionMatrix(actual, predicted);\n    const accuracy = (tp + tn) / (tp + tn + fp + fn);\n    const precision = tp / (tp + fp) || 0;\n    const recall = tp / (tp + fn) || 0;\n    const f1Score = precision + recall === 0\n        ? 0\n        : 2 * (precision * recall) / (precision + recall);\n    return { accuracy, precision, recall, f1Score };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-crossvalidator-class",
      children: "Example 3: CrossValidator Class"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class CrossValidator<T> {\n    constructor(\n        private k: number,\n        private stratified: boolean = false\n    ) {}\n\n    split(\n        features: T[][],\n        labels: number[]\n    ): Array<{ trainFeat: T[][]; trainLab: number[]; testFeat: T[][]; testLab: number[] }> {\n        if (this.stratified) return this.stratifiedSplit(features, labels);\n\n        const indices = features.map((_, i) => i);\n        const foldSize = Math.floor(features.length / this.k);\n        const folds: Array<{ trainFeat: T[][]; trainLab: number[]; testFeat: T[][]; testLab: number[] }> = [];\n\n        for (let i = 0; i < this.k; i++) {\n            const testStart = i * foldSize;\n            const testEnd = i === this.k - 1 ? features.length : (i + 1) * foldSize;\n            const testIdx = new Set(indices.slice(testStart, testEnd));\n            const trainIdx = indices.filter(idx => !testIdx.has(idx));\n\n            folds.push({\n                trainFeat: trainIdx.map(idx => features[idx]),\n                trainLab: trainIdx.map(idx => labels[idx]),\n                testFeat: testIdx.map(idx => features[idx]),\n                testLab: testIdx.map(idx => labels[idx]),\n            });\n        }\n        return folds;\n    }\n\n    private stratifiedSplit(\n        features: T[][],\n        labels: number[]\n    ): Array<{ trainFeat: T[][]; trainLab: number[]; testFeat: T[][]; testLab: number[] }> {\n        // Group indices by class\n        const classIndices = new Map<number, number[]>();\n        for (let i = 0; i < labels.length; i++) {\n            const cls = labels[i];\n            if (!classIndices.has(cls)) classIndices.set(cls, []);\n            classIndices.get(cls)!.push(i);\n        }\n\n        // Shuffle each class and distribute across folds\n        const foldIndices: Set<number>[] = Array.from({ length: this.k }, () => new Set<number>());\n        for (const [, indices] of classIndices) {\n            const shuffled = indices.sort(() => Math.random() - 0.5);\n            for (let i = 0; i < shuffled.length; i++) {\n                foldIndices[i % this.k].add(shuffled[i]);\n            }\n        }\n\n        const folds: Array<{ trainFeat: T[][]; trainLab: number[]; testFeat: T[][]; testLab: number[] }> = [];\n        for (let i = 0; i < this.k; i++) {\n            const allIndices = new Set(labels.map((_, i) => i));\n            const testIdx = foldIndices[i];\n            const trainIdx = [...allIndices].filter(idx => !testIdx.has(idx));\n\n            folds.push({\n                trainFeat: trainIdx.map(idx => features[idx]),\n                trainLab: trainIdx.map(idx => labels[idx]),\n                testFeat: [...testIdx].map(idx => features[idx]),\n                testLab: [...testIdx].map(idx => labels[idx]),\n            });\n        }\n        return folds;\n    }\n\n    evaluate(\n        features: T[][],\n        labels: number[],\n        trainFn: (feat: T[][], lab: number[]) => (x: T[]) => number\n    ): { foldMetrics: Metrics[]; meanMetrics: Metrics; stdMetrics: Metrics } {\n        const folds = this.split(features, labels);\n        const allMetrics: Metrics[] = [];\n\n        for (const fold of folds) {\n            const model = trainFn(fold.trainFeat, fold.trainLab);\n            const predictions = fold.testFeat.map(x => model(x));\n            allMetrics.push(calculateMetrics(fold.testLab, predictions));\n        }\n\n        const meanMetrics: Metrics = {\n            accuracy: allMetrics.reduce((s, m) => s + m.accuracy, 0) / this.k,\n            precision: allMetrics.reduce((s, m) => s + m.precision, 0) / this.k,\n            recall: allMetrics.reduce((s, m) => s + m.recall, 0) / this.k,\n            f1Score: allMetrics.reduce((s, m) => s + m.f1Score, 0) / this.k,\n        };\n\n        const stdMetrics: Metrics = {\n            accuracy: Math.sqrt(allMetrics.reduce((s, m) => s + (m.accuracy - meanMetrics.accuracy) ** 2, 0) / this.k),\n            precision: Math.sqrt(allMetrics.reduce((s, m) => s + (m.precision - meanMetrics.precision) ** 2, 0) / this.k),\n            recall: Math.sqrt(allMetrics.reduce((s, m) => s + (m.recall - meanMetrics.recall) ** 2, 0) / this.k),\n            f1Score: Math.sqrt(allMetrics.reduce((s, m) => s + (m.f1Score - meanMetrics.f1Score) ** 2, 0) / this.k),\n        };\n\n        return { foldMetrics: allMetrics, meanMetrics, stdMetrics };\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-grid-search-with-cross-validation",
      children: "Example 4: Grid Search with Cross-Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type GridSearchResult = {\n    bestParams: Record<string, number | string>;\n    bestScore: number;\n    allResults: Array<{ params: Record<string, number | string>; meanScore: number; stdScore: number }>;\n};\n\nclass GridSearch {\n    constructor(\n        private paramGrid: Record<string, (number | string)[]>\n    ) {}\n\n    search<T>(\n        features: T[][],\n        labels: number[],\n        trainFn: (feat: T[][], lab: number[], params: Record<string, number | string>) => (x: T[]) => number,\n        cv: CrossValidator<T>\n    ): GridSearchResult {\n        const keys = Object.keys(this.paramGrid);\n        const combinations = this.cartesianProduct(keys.map(k => this.paramGrid[k]));\n        const allResults: GridSearchResult['allResults'] = [];\n\n        for (const combo of combinations) {\n            const params: Record<string, number | string> = {};\n            keys.forEach((k, i) => { params[k] = combo[i]; });\n\n            const result = cv.evaluate(features, labels, (feat, lab) => trainFn(feat, lab, params));\n\n            allResults.push({\n                params,\n                meanScore: result.meanMetrics.f1Score,\n                stdScore: result.stdMetrics.f1Score,\n            });\n        }\n\n        allResults.sort((a, b) => b.meanScore - a.meanScore);\n        return {\n            bestParams: allResults[0].params,\n            bestScore: allResults[0].meanScore,\n            allResults,\n        };\n    }\n\n    private cartesianProduct(arrays: (number | string)[][]): (number | string)[][] {\n        return arrays.reduce<(number | string)[][]>(\n            (acc, curr) => acc.flatMap(a => curr.map(c => [...a, c])),\n            [[]]\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-5-full-model-evaluation-pipeline",
      children: "Example 5: Full Model Evaluation Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Step 1: Split into train/test\nconst allFeatures: number[][] = [/* ... */];\nconst allLabels: number[] = [/* ... */];\nconst testSize = Math.floor(allFeatures.length * 0.2);\n\n// Simple train-test split\nconst testFeatures = allFeatures.slice(0, testSize);\nconst testLabels = allLabels.slice(0, testSize);\nconst trainFeatures = allFeatures.slice(testSize);\nconst trainLabels = allLabels.slice(testSize);\n\n// Step 2: Configure cross-validation with stratification\nconst cv = new CrossValidator(5, true);\n\n// Step 3: Define a training function (example: k-NN)\nfunction knnTrain(\n    feat: number[][],\n    lab: number[],\n    params: Record<string, number | string>\n): (x: number[]) => number {\n    const k = params.k as number;\n    return (x: number[]) => {\n        const distances = feat.map((point, i) => ({\n            dist: Math.sqrt(point.reduce((s, v, j) => s + (v - x[j]) ** 2, 0)),\n            label: lab[i],\n        }));\n        distances.sort((a, b) => a.dist - b.dist);\n        const neighbors = distances.slice(0, k);\n        const votes = neighbors.reduce((acc, n) => {\n            acc[n.label] = (acc[n.label] || 0) + 1;\n            return acc;\n        }, {} as Record<number, number>);\n        return +Object.entries(votes).sort((a, b) => b[1] - a[1])[0][0];\n    };\n}\n\n// Step 4: Grid search for best k\nconst grid = new GridSearch({ k: [1, 3, 5, 7, 9] });\nconst result = grid.search(trainFeatures, trainLabels, knnTrain, cv);\n\nconsole.log(`Best k: ${result.bestParams.k}`);\nconsole.log(`Best CV F1: ${result.bestScore.toFixed(4)}`);\n\n// Step 5: Final evaluation on held-out test set\nconst bestModel = knnTrain(trainFeatures, trainLabels, result.bestParams);\nconst testPredictions = testFeatures.map(x => bestModel(x));\nconst testMetrics = calculateMetrics(testLabels, testPredictions);\nconsole.log(`Test Accuracy: ${testMetrics.accuracy.toFixed(4)}`);\nconsole.log(`Test F1:      ${testMetrics.f1Score.toFixed(4)}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome"
      }), ": The pipeline ensures that hyperparameters are tuned using cross-validation on the training set only, and the held-out test set provides an unbiased estimate of final performance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-6-learning-curve-analysis",
      children: "Example 6: Learning Curve Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function generateLearningCurve<T>(\n    features: T[][],\n    labels: number[],\n    trainFn: (feat: T[][], lab: number[]) => (x: T[]) => number,\n    trainSizes: number[] = [0.1, 0.2, 0.4, 0.6, 0.8, 1.0]\n): Array<{ trainSize: number; trainError: number; valError: number }> {\n    // Shuffle and split into train/validation\n    const indices = features.map((_, i) => i).sort(() => Math.random() - 0.5);\n    const split = Math.floor(features.length * 0.8);\n    const trainIdx = indices.slice(0, split);\n    const valIdx = indices.slice(split);\n\n    const curve: Array<{ trainSize: number; trainError: number; valError: number }> = [];\n\n    for (const size of trainSizes) {\n        const subsetSize = Math.floor(trainIdx.length * size);\n        const subsetIdx = trainIdx.slice(0, subsetSize);\n\n        const trainFeat = subsetIdx.map(i => features[i]);\n        const trainLab = subsetIdx.map(i => labels[i]);\n        const valFeat = valIdx.map(i => features[i]);\n        const valLab = valIdx.map(i => labels[i]);\n\n        const model = trainFn(trainFeat, trainLab);\n\n        const trainPred = trainFeat.map(x => model(x));\n        const valPred = valFeat.map(x => model(x));\n\n        const trainMet = calculateMetrics(trainLab, trainPred);\n        const valMet = calculateMetrics(valLab, valPred);\n\n        curve.push({\n            trainSize: subsetSize,\n            trainError: 1 - trainMet.f1Score,\n            valError: 1 - valMet.f1Score,\n        });\n    }\n\n    return curve;\n}\n\n// Usage example\nconst curve = generateLearningCurve(trainFeatures, trainLabels, knnTrain);\nfor (const point of curve) {\n    console.log(\n        `Train size: ${point.trainSize} | ` +\n        `Train err: ${point.trainError.toFixed(3)} | ` +\n        `Val err: ${point.valError.toFixed(3)}`\n    );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interpreting the curve output:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If both errors converge at a high value ? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "high bias"
        }), " (underfitting)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If training error is low but validation error stays high ? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "high variance"
        }), " (overfitting)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If both converge at a low value with a small gap ? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "good fit"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Bias"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error from overly simplistic model assumptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High bias ? underfitting; model misses patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple linear models, high regularization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error from sensitivity to training data fluctuations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High variance ? overfitting; model memorizes noise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deep trees, high-degree polynomials, low regularization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "K-fold CV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Split data into K folds, train on K-1, validate on 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Balances bias and variance of the performance estimate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General-purpose model evaluation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stratified K-fold"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintain class proportions per fold"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents degenerate folds in imbalanced data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classification with skewed classes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Leave-One-Out CV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K = N, each fold is a single sample"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low bias but high variance and computational cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very small datasets (N < 50)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Accuracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(TP + TN) / Total"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple but misleading for imbalanced data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Balanced classes only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Precision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TP / (TP + FP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimizes false positives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spam detection, fraud alerts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TP / (TP + FN)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimizes false negatives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medical screening, threat detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F1-Score"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 ? (P ? R) / (P + R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Harmonic mean balances P and R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Imbalanced classification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ROC-AUC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Area under TPR vs. FPR curve"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threshold-independent measure of separability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model comparison, threshold selection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Macro F1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unweighted per-class average"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Considers all classes equally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-class with class imbalance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Micro F1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global TP/FP/FN aggregation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Favors majority class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document classification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted F1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-class average weighted by support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Balanced single metric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default for most libraries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mean squared error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Penalizes large errors heavily"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regression baseline metric"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RMSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root of MSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same units as target"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regression interpretation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mean absolute error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Robust to outliers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regression with noisy targets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coefficient of Determination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proportion of variance explained"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regression goodness-of-fit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adjusted R?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R? penalized by feature count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents overfitting with many features"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature selection in regression"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Grid Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exhaustive scan of parameter grid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guarantees finding best within grid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small parameter spaces (< 100 combinations)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Random Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random sampling of parameter space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More efficient for high-dimensional spaces"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large parameter spaces, expensive models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "McNemar's Test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chi-square test on paired prediction errors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tests if models differ significantly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model comparison on held-out set"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Formula / Detail"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Accuracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsx)(_components.mrow, {
                      children: (0,jsx_runtime.jsxs)(_components.mfrac, {
                        children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "T"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "P"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "+"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "T"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "N"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "T"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "P"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "+"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "T"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "N"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "+"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "F"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "P"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "+"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "F"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "N"
                          })]
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\frac{TP + TN}{TP + TN + FP + FN}"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1.2757em",
                      verticalAlign: "-0.4033em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mopen nulldelimiter"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mfrac",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8723em"
                            },
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.655em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.1389em"
                                    },
                                    children: "T"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.1389em"
                                    },
                                    children: "P"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "+"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.1389em"
                                    },
                                    children: "T"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.109em"
                                    },
                                    children: "N"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "+"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.1389em"
                                    },
                                    children: "F"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.1389em"
                                    },
                                    children: "P"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "+"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.1389em"
                                    },
                                    children: "F"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.109em"
                                    },
                                    children: "N"
                                  })]
                                })
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.23em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "frac-line",
                                style: {
                                  borderBottomWidth: "0.04em"
                                }
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.394em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.1389em"
                                    },
                                    children: "T"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.1389em"
                                    },
                                    children: "P"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "+"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.1389em"
                                    },
                                    children: "T"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.109em"
                                    },
                                    children: "N"
                                  })]
                                })
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.4033em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mclose nulldelimiter"
                    })]
                  })]
                })
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Precision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsx)(_components.mrow, {
                      children: (0,jsx_runtime.jsxs)(_components.mfrac, {
                        children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "T"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "P"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "T"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "P"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "+"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "F"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "P"
                          })]
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\frac{TP}{TP + FP}"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1.2757em",
                      verticalAlign: "-0.4033em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mopen nulldelimiter"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mfrac",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8723em"
                            },
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.655em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.1389em"
                                    },
                                    children: "T"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.1389em"
                                    },
                                    children: "P"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "+"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.1389em"
                                    },
                                    children: "F"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.1389em"
                                    },
                                    children: "P"
                                  })]
                                })
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.23em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "frac-line",
                                style: {
                                  borderBottomWidth: "0.04em"
                                }
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.394em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.1389em"
                                    },
                                    children: "T"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.1389em"
                                    },
                                    children: "P"
                                  })]
                                })
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.4033em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mclose nulldelimiter"
                    })]
                  })]
                })
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recall (Sensitivity)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsx)(_components.mrow, {
                      children: (0,jsx_runtime.jsxs)(_components.mfrac, {
                        children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "T"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "P"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "T"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "P"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "+"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "F"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "N"
                          })]
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\frac{TP}{TP + FN}"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1.2757em",
                      verticalAlign: "-0.4033em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mopen nulldelimiter"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mfrac",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8723em"
                            },
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.655em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.1389em"
                                    },
                                    children: "T"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.1389em"
                                    },
                                    children: "P"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "+"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.1389em"
                                    },
                                    children: "F"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.109em"
                                    },
                                    children: "N"
                                  })]
                                })
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.23em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "frac-line",
                                style: {
                                  borderBottomWidth: "0.04em"
                                }
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.394em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.1389em"
                                    },
                                    children: "T"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.1389em"
                                    },
                                    children: "P"
                                  })]
                                })
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.4033em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mclose nulldelimiter"
                    })]
                  })]
                })
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Specificity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsx)(_components.mrow, {
                      children: (0,jsx_runtime.jsxs)(_components.mfrac, {
                        children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "T"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "N"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "T"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "N"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "+"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "F"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "P"
                          })]
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\frac{TN}{TN + FP}"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1.2757em",
                      verticalAlign: "-0.4033em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mopen nulldelimiter"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mfrac",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8723em"
                            },
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.655em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.1389em"
                                    },
                                    children: "T"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.109em"
                                    },
                                    children: "N"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "+"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.1389em"
                                    },
                                    children: "F"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.1389em"
                                    },
                                    children: "P"
                                  })]
                                })
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.23em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "frac-line",
                                style: {
                                  borderBottomWidth: "0.04em"
                                }
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.394em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.1389em"
                                    },
                                    children: "T"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.109em"
                                    },
                                    children: "N"
                                  })]
                                })
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.4033em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mclose nulldelimiter"
                    })]
                  })]
                })
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F1-Score"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mn, {
                        children: "2"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⋅"
                      }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                        children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "P"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "⋅"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "R"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "P"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "+"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "R"
                          })]
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "2 \\cdot \\frac{P \\cdot R}{P + R}"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.6444em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "2"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mbin",
                    children: "⋅"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1.2757em",
                      verticalAlign: "-0.4033em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mopen nulldelimiter"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mfrac",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8723em"
                            },
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.655em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.1389em"
                                    },
                                    children: "P"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "+"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.0077em"
                                    },
                                    children: "R"
                                  })]
                                })
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.23em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "frac-line",
                                style: {
                                  borderBottomWidth: "0.04em"
                                }
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.394em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.1389em"
                                    },
                                    children: "P"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "⋅"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.0077em"
                                    },
                                    children: "R"
                                  })]
                                })
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.4033em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mclose nulldelimiter"
                    })]
                  })]
                })]
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Macro F1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsxs)(_components.mfrac, {
                        children: [(0,jsx_runtime.jsx)(_components.mn, {
                          children: "1"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "C"
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.msubsup, {
                        children: [(0,jsx_runtime.jsx)(_components.mo, {
                          children: "∑"
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "i"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "="
                          }), (0,jsx_runtime.jsx)(_components.mn, {
                            children: "1"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "C"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "F"
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mn, {
                          children: "1"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\frac{1}{C}\\sum_{i=1}^{C} F1_i"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1.3262em",
                      verticalAlign: "-0.345em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mopen nulldelimiter"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mfrac",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8451em"
                            },
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.655em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.0715em"
                                    },
                                    children: "C"
                                  })
                                })
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.23em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "frac-line",
                                style: {
                                  borderBottomWidth: "0.04em"
                                }
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.394em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mtight",
                                    children: "1"
                                  })
                                })
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.345em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mclose nulldelimiter"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mop",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mop op-symbol small-op",
                      style: {
                        position: "relative",
                        top: "0em"
                      },
                      children: "∑"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.9812em"
                            },
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.4003em",
                                marginLeft: "0em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "i"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mrel mtight",
                                    children: "="
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mtight",
                                    children: "1"
                                  })]
                                })
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.2029em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.0715em"
                                    },
                                    children: "C"
                                  })
                                })
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.2997em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.1389em"
                    },
                    children: "F"
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord",
                      children: "1"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.3117em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "0em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  children: "i"
                                })
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.15em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  })]
                })
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted F1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsxs)(_components.msubsup, {
                        children: [(0,jsx_runtime.jsx)(_components.mo, {
                          children: "∑"
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "i"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "="
                          }), (0,jsx_runtime.jsx)(_components.mn, {
                            children: "1"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "C"
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                        children: [(0,jsx_runtime.jsxs)(_components.msub, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "n"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "i"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "N"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⋅"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "F"
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mn, {
                          children: "1"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\sum_{i=1}^{C} \\frac{n_i}{N} \\cdot F1_i"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1.3262em",
                      verticalAlign: "-0.345em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mop",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mop op-symbol small-op",
                      style: {
                        position: "relative",
                        top: "0em"
                      },
                      children: "∑"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.9812em"
                            },
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.4003em",
                                marginLeft: "0em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "i"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mrel mtight",
                                    children: "="
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mtight",
                                    children: "1"
                                  })]
                                })
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.2029em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.0715em"
                                    },
                                    children: "C"
                                  })
                                })
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.2997em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mopen nulldelimiter"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mfrac",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.7115em"
                            },
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.655em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.109em"
                                    },
                                    children: "N"
                                  })
                                })
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.23em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "frac-line",
                                style: {
                                  borderBottomWidth: "0.04em"
                                }
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.4101em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
                                      children: "n"
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "msupsub",
                                      children: (0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist-t vlist-t2",
                                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                                          className: "vlist-r",
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist",
                                            style: {
                                              height: "0.3281em"
                                            },
                                            children: (0,jsx_runtime.jsxs)(_components.span, {
                                              style: {
                                                top: "-2.357em",
                                                marginLeft: "0em",
                                                marginRight: "0.0714em"
                                              },
                                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                                className: "pstrut",
                                                style: {
                                                  height: "2.5em"
                                                }
                                              }), (0,jsx_runtime.jsx)(_components.span, {
                                                className: "sizing reset-size3 size1 mtight",
                                                children: (0,jsx_runtime.jsx)(_components.span, {
                                                  className: "mord mathnormal mtight",
                                                  children: "i"
                                                })
                                              })]
                                            })
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist-s",
                                            children: "​"
                                          })]
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist-r",
                                          children: (0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist",
                                            style: {
                                              height: "0.143em"
                                            },
                                            children: (0,jsx_runtime.jsx)(_components.span, {})
                                          })
                                        })]
                                      })
                                    })]
                                  })
                                })
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.345em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mclose nulldelimiter"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mbin",
                    children: "⋅"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.8333em",
                      verticalAlign: "-0.15em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.1389em"
                    },
                    children: "F"
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord",
                      children: "1"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.3117em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "0em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  children: "i"
                                })
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.15em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  })]
                })]
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bias-Variance Decomposition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "E"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "["
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "y"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      }), (0,jsx_runtime.jsxs)(_components.mover, {
                        accent: "true",
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "f"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "^"
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.msup, {
                        children: [(0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: ")"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "2"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "]"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsx)(_components.mtext, {
                        children: "Bias"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "["
                      }), (0,jsx_runtime.jsxs)(_components.mover, {
                        accent: "true",
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "f"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "^"
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.msup, {
                        children: [(0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: "]"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "2"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "+"
                      }), (0,jsx_runtime.jsx)(_components.mtext, {
                        children: "Var"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "["
                      }), (0,jsx_runtime.jsxs)(_components.mover, {
                        accent: "true",
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "f"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "^"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "]"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "+"
                      }), (0,jsx_runtime.jsxs)(_components.msup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "σ"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "2"
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "E[(y - \\hat{f})^2] = \\text{Bias}[\\hat{f}]^2 + \\text{Var}[\\hat{f}] + \\sigma^2"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0576em"
                    },
                    children: "E"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "[("
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0359em"
                    },
                    children: "y"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mbin",
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1.2079em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord accent",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-r",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.9579em"
                          },
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-3em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              style: {
                                marginRight: "0.1076em"
                              },
                              children: "f"
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-3.2634em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "accent-body",
                              style: {
                                left: "-0.0833em"
                              },
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord",
                                children: "^"
                              })
                            })]
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-s",
                          children: "​"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-r",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.1944em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {})
                        })
                      })]
                    })
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mclose",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mclose",
                      children: ")"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-t",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8141em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.063em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: "2"
                                })
                              })]
                            })
                          })
                        })
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: "]"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mrel",
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1.2079em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord text",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "mord",
                      children: "Bias"
                    })
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "["
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord accent",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-r",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.9579em"
                          },
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-3em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              style: {
                                marginRight: "0.1076em"
                              },
                              children: "f"
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-3.2634em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "accent-body",
                              style: {
                                left: "-0.0833em"
                              },
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord",
                                children: "^"
                              })
                            })]
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-s",
                          children: "​"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-r",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.1944em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {})
                        })
                      })]
                    })
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mclose",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mclose",
                      children: "]"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-t",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8141em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.063em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: "2"
                                })
                              })]
                            })
                          })
                        })
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mbin",
                    children: "+"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1.2079em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord text",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "mord",
                      children: "Var"
                    })
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "["
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord accent",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-r",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.9579em"
                          },
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-3em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal",
                              style: {
                                marginRight: "0.1076em"
                              },
                              children: "f"
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-3.2634em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "accent-body",
                              style: {
                                left: "-0.0833em"
                              },
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord",
                                children: "^"
                              })
                            })]
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-s",
                          children: "​"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-r",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.1944em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {})
                        })
                      })]
                    })
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: "]"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mbin",
                    children: "+"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.8141em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.0359em"
                      },
                      children: "σ"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-t",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8141em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.063em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: "2"
                                })
                              })]
                            })
                          })
                        })
                      })
                    })]
                  })]
                })]
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsxs)(_components.mfrac, {
                        children: [(0,jsx_runtime.jsx)(_components.mn, {
                          children: "1"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "n"
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.msubsup, {
                        children: [(0,jsx_runtime.jsx)(_components.mo, {
                          children: "∑"
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "i"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "="
                          }), (0,jsx_runtime.jsx)(_components.mn, {
                            children: "1"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "n"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "y"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsxs)(_components.mover, {
                          accent: "true",
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "y"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "^"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.msup, {
                        children: [(0,jsx_runtime.jsx)(_components.mo, {
                          stretchy: "false",
                          children: ")"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "2"
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\frac{1}{n}\\sum_{i=1}^{n} (y_i - \\hat{y}_i)^2"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1.1901em",
                      verticalAlign: "-0.345em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mopen nulldelimiter"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mfrac",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8451em"
                            },
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.655em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "n"
                                  })
                                })
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.23em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "frac-line",
                                style: {
                                  borderBottomWidth: "0.04em"
                                }
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.394em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mtight",
                                    children: "1"
                                  })
                                })
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.345em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mclose nulldelimiter"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mop",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mop op-symbol small-op",
                      style: {
                        position: "relative",
                        top: "0em"
                      },
                      children: "∑"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8043em"
                            },
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.4003em",
                                marginLeft: "0em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "i"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mrel mtight",
                                    children: "="
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mtight",
                                    children: "1"
                                  })]
                                })
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.2029em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "n"
                                  })
                                })
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.2997em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.0359em"
                      },
                      children: "y"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.3117em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "-0.0359em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  children: "i"
                                })
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.15em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mbin",
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1.0641em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord accent",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.6944em"
                            },
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal",
                                style: {
                                  marginRight: "0.0359em"
                                },
                                children: "y"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "accent-body",
                                style: {
                                  left: "-0.1944em"
                                },
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord",
                                  children: "^"
                                })
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.1944em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.3117em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "-0.0359em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  children: "i"
                                })
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.15em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mclose",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mclose",
                      children: ")"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-t",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8141em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.063em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: "2"
                                })
                              })]
                            })
                          })
                        })
                      })
                    })]
                  })]
                })]
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RMSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsx)(_components.mrow, {
                      children: (0,jsx_runtime.jsx)(_components.msqrt, {
                        children: (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsxs)(_components.mfrac, {
                            children: [(0,jsx_runtime.jsx)(_components.mn, {
                              children: "1"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "n"
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.msubsup, {
                            children: [(0,jsx_runtime.jsx)(_components.mo, {
                              children: "∑"
                            }), (0,jsx_runtime.jsxs)(_components.mrow, {
                              children: [(0,jsx_runtime.jsx)(_components.mi, {
                                children: "i"
                              }), (0,jsx_runtime.jsx)(_components.mo, {
                                children: "="
                              }), (0,jsx_runtime.jsx)(_components.mn, {
                                children: "1"
                              })]
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "n"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: "("
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "y"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "i"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "−"
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsxs)(_components.mover, {
                              accent: "true",
                              children: [(0,jsx_runtime.jsx)(_components.mi, {
                                children: "y"
                              }), (0,jsx_runtime.jsx)(_components.mo, {
                                children: "^"
                              })]
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "i"
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.msup, {
                            children: [(0,jsx_runtime.jsx)(_components.mo, {
                              stretchy: "false",
                              children: ")"
                            }), (0,jsx_runtime.jsx)(_components.mn, {
                              children: "2"
                            })]
                          })]
                        })
                      })
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\sqrt{\\frac{1}{n}\\sum_{i=1}^{n} (y_i - \\hat{y}_i)^2}"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1.84em",
                      verticalAlign: "-0.6049em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord sqrt",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-r",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "1.2351em"
                          },
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "svg-align",
                            style: {
                              top: "-3.8em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3.8em"
                              }
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord",
                              style: {
                                paddingLeft: "1em"
                              },
                              children: [(0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mopen nulldelimiter"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mfrac",
                                  children: (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "vlist-t vlist-t2",
                                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-r",
                                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.8451em"
                                        },
                                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-2.655em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "3em"
                                            }
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "sizing reset-size6 size3 mtight",
                                            children: (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mtight",
                                              children: (0,jsx_runtime.jsx)(_components.span, {
                                                className: "mord mathnormal mtight",
                                                children: "n"
                                              })
                                            })
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-3.23em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "3em"
                                            }
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "frac-line",
                                            style: {
                                              borderBottomWidth: "0.04em"
                                            }
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-3.394em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "3em"
                                            }
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "sizing reset-size6 size3 mtight",
                                            children: (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mtight",
                                              children: (0,jsx_runtime.jsx)(_components.span, {
                                                className: "mord mtight",
                                                children: "1"
                                              })
                                            })
                                          })]
                                        })]
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-s",
                                        children: "​"
                                      })]
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist-r",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.345em"
                                        },
                                        children: (0,jsx_runtime.jsx)(_components.span, {})
                                      })
                                    })]
                                  })
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mclose nulldelimiter"
                                })]
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mspace",
                                style: {
                                  marginRight: "0.1667em"
                                }
                              }), (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mop",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mop op-symbol small-op",
                                  style: {
                                    position: "relative",
                                    top: "0em"
                                  },
                                  children: "∑"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "msupsub",
                                  children: (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "vlist-t vlist-t2",
                                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-r",
                                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.8043em"
                                        },
                                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-2.4003em",
                                            marginLeft: "0em",
                                            marginRight: "0.05em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "2.7em"
                                            }
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "sizing reset-size6 size3 mtight",
                                            children: (0,jsx_runtime.jsxs)(_components.span, {
                                              className: "mord mtight",
                                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                                className: "mord mathnormal mtight",
                                                children: "i"
                                              }), (0,jsx_runtime.jsx)(_components.span, {
                                                className: "mrel mtight",
                                                children: "="
                                              }), (0,jsx_runtime.jsx)(_components.span, {
                                                className: "mord mtight",
                                                children: "1"
                                              })]
                                            })
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-3.2029em",
                                            marginRight: "0.05em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "2.7em"
                                            }
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "sizing reset-size6 size3 mtight",
                                            children: (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mtight",
                                              children: (0,jsx_runtime.jsx)(_components.span, {
                                                className: "mord mathnormal mtight",
                                                children: "n"
                                              })
                                            })
                                          })]
                                        })]
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-s",
                                        children: "​"
                                      })]
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist-r",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.2997em"
                                        },
                                        children: (0,jsx_runtime.jsx)(_components.span, {})
                                      })
                                    })]
                                  })
                                })]
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mopen",
                                children: "("
                              }), (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal",
                                  style: {
                                    marginRight: "0.0359em"
                                  },
                                  children: "y"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "msupsub",
                                  children: (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "vlist-t vlist-t2",
                                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-r",
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.3117em"
                                        },
                                        children: (0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-2.55em",
                                            marginLeft: "-0.0359em",
                                            marginRight: "0.05em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "2.7em"
                                            }
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "sizing reset-size6 size3 mtight",
                                            children: (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mathnormal mtight",
                                              children: "i"
                                            })
                                          })]
                                        })
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-s",
                                        children: "​"
                                      })]
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist-r",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.15em"
                                        },
                                        children: (0,jsx_runtime.jsx)(_components.span, {})
                                      })
                                    })]
                                  })
                                })]
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mspace",
                                style: {
                                  marginRight: "0.2222em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mbin",
                                children: "−"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mspace",
                                style: {
                                  marginRight: "0.2222em"
                                }
                              }), (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord accent",
                                  children: (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "vlist-t vlist-t2",
                                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-r",
                                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.6944em"
                                        },
                                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-3em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "3em"
                                            }
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "mord mathnormal",
                                            style: {
                                              marginRight: "0.0359em"
                                            },
                                            children: "y"
                                          })]
                                        }), (0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-3em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "3em"
                                            }
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "accent-body",
                                            style: {
                                              left: "-0.1944em"
                                            },
                                            children: (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord",
                                              children: "^"
                                            })
                                          })]
                                        })]
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-s",
                                        children: "​"
                                      })]
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist-r",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.1944em"
                                        },
                                        children: (0,jsx_runtime.jsx)(_components.span, {})
                                      })
                                    })]
                                  })
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "msupsub",
                                  children: (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "vlist-t vlist-t2",
                                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-r",
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.3117em"
                                        },
                                        children: (0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-2.55em",
                                            marginLeft: "-0.0359em",
                                            marginRight: "0.05em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "2.7em"
                                            }
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "sizing reset-size6 size3 mtight",
                                            children: (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mathnormal mtight",
                                              children: "i"
                                            })
                                          })]
                                        })
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-s",
                                        children: "​"
                                      })]
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist-r",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.15em"
                                        },
                                        children: (0,jsx_runtime.jsx)(_components.span, {})
                                      })
                                    })]
                                  })
                                })]
                              }), (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mclose",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mclose",
                                  children: ")"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "msupsub",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-t",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist-r",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.7401em"
                                        },
                                        children: (0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-2.989em",
                                            marginRight: "0.05em"
                                          },
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "pstrut",
                                            style: {
                                              height: "2.7em"
                                            }
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "sizing reset-size6 size3 mtight",
                                            children: (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mtight",
                                              children: "2"
                                            })
                                          })]
                                        })
                                      })
                                    })
                                  })
                                })]
                              })]
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-3.1951em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3.8em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "hide-tail",
                              style: {
                                minWidth: "1.02em",
                                height: "1.88em"
                              },
                              children: (0,jsx_runtime.jsx)(_components.svg, {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "400em",
                                height: "1.88em",
                                viewBox: "0 0 400000 1944",
                                preserveAspectRatio: "xMinYMin slice",
                                children: (0,jsx_runtime.jsx)(_components.path, {
                                  d: "M983 90\nl0 -0\nc4,-6.7,10,-10,18,-10 H400000v40\nH1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7\ns-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744\nc-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30\nc26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722\nc56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5\nc53.7,-170.3,84.5,-266.8,92.5,-289.5z\nM1001 80h400000v40h-400000z"
                                })
                              })
                            })]
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-s",
                          children: "​"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-r",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.6049em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {})
                        })
                      })]
                    })
                  })]
                })
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsxs)(_components.mfrac, {
                        children: [(0,jsx_runtime.jsx)(_components.mn, {
                          children: "1"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "n"
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.msubsup, {
                        children: [(0,jsx_runtime.jsx)(_components.mo, {
                          children: "∑"
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "i"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "="
                          }), (0,jsx_runtime.jsx)(_components.mn, {
                            children: "1"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "n"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "∥"
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "y"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsxs)(_components.mover, {
                          accent: "true",
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "y"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "^"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "∥"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\frac{1}{n}\\sum_{i=1}^{n} \\|y_i - \\hat{y}_i\\|"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1.1901em",
                      verticalAlign: "-0.345em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mopen nulldelimiter"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mfrac",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8451em"
                            },
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.655em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "n"
                                  })
                                })
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.23em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "frac-line",
                                style: {
                                  borderBottomWidth: "0.04em"
                                }
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.394em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mtight",
                                    children: "1"
                                  })
                                })
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.345em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mclose nulldelimiter"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mop",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mop op-symbol small-op",
                      style: {
                        position: "relative",
                        top: "0em"
                      },
                      children: "∑"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8043em"
                            },
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.4003em",
                                marginLeft: "0em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "i"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mrel mtight",
                                    children: "="
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mtight",
                                    children: "1"
                                  })]
                                })
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.2029em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "n"
                                  })
                                })
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.2997em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "∥"
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      style: {
                        marginRight: "0.0359em"
                      },
                      children: "y"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.3117em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "-0.0359em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  children: "i"
                                })
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.15em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mbin",
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord accent",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.6944em"
                            },
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal",
                                style: {
                                  marginRight: "0.0359em"
                                },
                                children: "y"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "accent-body",
                                style: {
                                  left: "-0.1944em"
                                },
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord",
                                  children: "^"
                                })
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.1944em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.3117em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "-0.0359em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  children: "i"
                                })
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.15em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "∥"
                  })]
                })]
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mn, {
                        children: "1"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                        children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mo, {
                            children: "∑"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: "("
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "y"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "i"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "−"
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsxs)(_components.mover, {
                              accent: "true",
                              children: [(0,jsx_runtime.jsx)(_components.mi, {
                                children: "y"
                              }), (0,jsx_runtime.jsx)(_components.mo, {
                                children: "^"
                              })]
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "i"
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.msup, {
                            children: [(0,jsx_runtime.jsx)(_components.mo, {
                              stretchy: "false",
                              children: ")"
                            }), (0,jsx_runtime.jsx)(_components.mn, {
                              children: "2"
                            })]
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mo, {
                            children: "∑"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: "("
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "y"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "i"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "−"
                          }), (0,jsx_runtime.jsxs)(_components.mover, {
                            accent: "true",
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "y"
                            }), (0,jsx_runtime.jsx)(_components.mo, {
                              children: "ˉ"
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.msup, {
                            children: [(0,jsx_runtime.jsx)(_components.mo, {
                              stretchy: "false",
                              children: ")"
                            }), (0,jsx_runtime.jsx)(_components.mn, {
                              children: "2"
                            })]
                          })]
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "1 - \\frac{\\sum (y_i - \\hat{y}_i)^2}{\\sum (y_i - \\bar{y})^2}"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.7278em",
                      verticalAlign: "-0.0833em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "1"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mbin",
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1.6289em",
                      verticalAlign: "-0.52em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mopen nulldelimiter"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mfrac",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "1.1089em"
                            },
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.655em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mop op-symbol small-op mtight",
                                    style: {
                                      position: "relative",
                                      top: "0em"
                                    },
                                    children: "∑"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mopen mtight",
                                    children: "("
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
                                      style: {
                                        marginRight: "0.0359em"
                                      },
                                      children: "y"
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "msupsub",
                                      children: (0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist-t vlist-t2",
                                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                                          className: "vlist-r",
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist",
                                            style: {
                                              height: "0.3281em"
                                            },
                                            children: (0,jsx_runtime.jsxs)(_components.span, {
                                              style: {
                                                top: "-2.357em",
                                                marginLeft: "-0.0359em",
                                                marginRight: "0.0714em"
                                              },
                                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                                className: "pstrut",
                                                style: {
                                                  height: "2.5em"
                                                }
                                              }), (0,jsx_runtime.jsx)(_components.span, {
                                                className: "sizing reset-size3 size1 mtight",
                                                children: (0,jsx_runtime.jsx)(_components.span, {
                                                  className: "mord mathnormal mtight",
                                                  children: "i"
                                                })
                                              })]
                                            })
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist-s",
                                            children: "​"
                                          })]
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist-r",
                                          children: (0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist",
                                            style: {
                                              height: "0.143em"
                                            },
                                            children: (0,jsx_runtime.jsx)(_components.span, {})
                                          })
                                        })]
                                      })
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "−"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord accent mtight",
                                    children: (0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-t vlist-t2",
                                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist-r",
                                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.5678em"
                                          },
                                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                                            style: {
                                              top: "-2.7em"
                                            },
                                            children: [(0,jsx_runtime.jsx)(_components.span, {
                                              className: "pstrut",
                                              style: {
                                                height: "2.7em"
                                              }
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mathnormal mtight",
                                              style: {
                                                marginRight: "0.0359em"
                                              },
                                              children: "y"
                                            })]
                                          }), (0,jsx_runtime.jsxs)(_components.span, {
                                            style: {
                                              top: "-2.7em"
                                            },
                                            children: [(0,jsx_runtime.jsx)(_components.span, {
                                              className: "pstrut",
                                              style: {
                                                height: "2.7em"
                                              }
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "accent-body",
                                              style: {
                                                left: "-0.1944em"
                                              },
                                              children: (0,jsx_runtime.jsx)(_components.span, {
                                                className: "mord mtight",
                                                children: "ˉ"
                                              })
                                            })]
                                          })]
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist-s",
                                          children: "​"
                                        })]
                                      }), (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-r",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist",
                                          style: {
                                            height: "0.1944em"
                                          },
                                          children: (0,jsx_runtime.jsx)(_components.span, {})
                                        })
                                      })]
                                    })
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mclose mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mclose mtight",
                                      children: ")"
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "msupsub",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-t",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist-r",
                                          children: (0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist",
                                            style: {
                                              height: "0.7463em"
                                            },
                                            children: (0,jsx_runtime.jsxs)(_components.span, {
                                              style: {
                                                top: "-2.786em",
                                                marginRight: "0.0714em"
                                              },
                                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                                className: "pstrut",
                                                style: {
                                                  height: "2.5em"
                                                }
                                              }), (0,jsx_runtime.jsx)(_components.span, {
                                                className: "sizing reset-size3 size1 mtight",
                                                children: (0,jsx_runtime.jsx)(_components.span, {
                                                  className: "mord mtight",
                                                  children: "2"
                                                })
                                              })]
                                            })
                                          })
                                        })
                                      })
                                    })]
                                  })]
                                })
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.23em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "frac-line",
                                style: {
                                  borderBottomWidth: "0.04em"
                                }
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.485em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mop op-symbol small-op mtight",
                                    style: {
                                      position: "relative",
                                      top: "0em"
                                    },
                                    children: "∑"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mopen mtight",
                                    children: "("
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
                                      style: {
                                        marginRight: "0.0359em"
                                      },
                                      children: "y"
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "msupsub",
                                      children: (0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist-t vlist-t2",
                                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                                          className: "vlist-r",
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist",
                                            style: {
                                              height: "0.3281em"
                                            },
                                            children: (0,jsx_runtime.jsxs)(_components.span, {
                                              style: {
                                                top: "-2.357em",
                                                marginLeft: "-0.0359em",
                                                marginRight: "0.0714em"
                                              },
                                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                                className: "pstrut",
                                                style: {
                                                  height: "2.5em"
                                                }
                                              }), (0,jsx_runtime.jsx)(_components.span, {
                                                className: "sizing reset-size3 size1 mtight",
                                                children: (0,jsx_runtime.jsx)(_components.span, {
                                                  className: "mord mathnormal mtight",
                                                  children: "i"
                                                })
                                              })]
                                            })
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist-s",
                                            children: "​"
                                          })]
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist-r",
                                          children: (0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist",
                                            style: {
                                              height: "0.143em"
                                            },
                                            children: (0,jsx_runtime.jsx)(_components.span, {})
                                          })
                                        })]
                                      })
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "−"
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord accent mtight",
                                      children: (0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist-t vlist-t2",
                                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                                          className: "vlist-r",
                                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                                            className: "vlist",
                                            style: {
                                              height: "0.6944em"
                                            },
                                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                                              style: {
                                                top: "-2.7em"
                                              },
                                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                                className: "pstrut",
                                                style: {
                                                  height: "2.7em"
                                                }
                                              }), (0,jsx_runtime.jsx)(_components.span, {
                                                className: "mord mathnormal mtight",
                                                style: {
                                                  marginRight: "0.0359em"
                                                },
                                                children: "y"
                                              })]
                                            }), (0,jsx_runtime.jsxs)(_components.span, {
                                              style: {
                                                top: "-2.7em"
                                              },
                                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                                className: "pstrut",
                                                style: {
                                                  height: "2.7em"
                                                }
                                              }), (0,jsx_runtime.jsx)(_components.span, {
                                                className: "accent-body",
                                                style: {
                                                  left: "-0.1944em"
                                                },
                                                children: (0,jsx_runtime.jsx)(_components.span, {
                                                  className: "mord mtight",
                                                  children: "^"
                                                })
                                              })]
                                            })]
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist-s",
                                            children: "​"
                                          })]
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist-r",
                                          children: (0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist",
                                            style: {
                                              height: "0.1944em"
                                            },
                                            children: (0,jsx_runtime.jsx)(_components.span, {})
                                          })
                                        })]
                                      })
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "msupsub",
                                      children: (0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist-t vlist-t2",
                                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                                          className: "vlist-r",
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist",
                                            style: {
                                              height: "0.3281em"
                                            },
                                            children: (0,jsx_runtime.jsxs)(_components.span, {
                                              style: {
                                                top: "-2.357em",
                                                marginLeft: "-0.0359em",
                                                marginRight: "0.0714em"
                                              },
                                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                                className: "pstrut",
                                                style: {
                                                  height: "2.5em"
                                                }
                                              }), (0,jsx_runtime.jsx)(_components.span, {
                                                className: "sizing reset-size3 size1 mtight",
                                                children: (0,jsx_runtime.jsx)(_components.span, {
                                                  className: "mord mathnormal mtight",
                                                  children: "i"
                                                })
                                              })]
                                            })
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist-s",
                                            children: "​"
                                          })]
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist-r",
                                          children: (0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist",
                                            style: {
                                              height: "0.143em"
                                            },
                                            children: (0,jsx_runtime.jsx)(_components.span, {})
                                          })
                                        })]
                                      })
                                    })]
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mclose mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mclose mtight",
                                      children: ")"
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "msupsub",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-t",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist-r",
                                          children: (0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist",
                                            style: {
                                              height: "0.8913em"
                                            },
                                            children: (0,jsx_runtime.jsxs)(_components.span, {
                                              style: {
                                                top: "-2.931em",
                                                marginRight: "0.0714em"
                                              },
                                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                                className: "pstrut",
                                                style: {
                                                  height: "2.5em"
                                                }
                                              }), (0,jsx_runtime.jsx)(_components.span, {
                                                className: "sizing reset-size3 size1 mtight",
                                                children: (0,jsx_runtime.jsx)(_components.span, {
                                                  className: "mord mtight",
                                                  children: "2"
                                                })
                                              })]
                                            })
                                          })
                                        })
                                      })
                                    })]
                                  })]
                                })
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.52em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mclose nulldelimiter"
                    })]
                  })]
                })]
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adjusted R?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mn, {
                        children: "1"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                        children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: "("
                          }), (0,jsx_runtime.jsx)(_components.mn, {
                            children: "1"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "−"
                          }), (0,jsx_runtime.jsxs)(_components.msup, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "R"
                            }), (0,jsx_runtime.jsx)(_components.mn, {
                              children: "2"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: ")"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: "("
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "n"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "−"
                          }), (0,jsx_runtime.jsx)(_components.mn, {
                            children: "1"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: ")"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "n"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "−"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "p"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "−"
                          }), (0,jsx_runtime.jsx)(_components.mn, {
                            children: "1"
                          })]
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "1 - \\frac{(1 - R^2)(n - 1)}{n - p - 1}"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.7278em",
                      verticalAlign: "-0.0833em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "1"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mbin",
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1.59em",
                      verticalAlign: "-0.4811em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mopen nulldelimiter"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mfrac",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "1.1089em"
                            },
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.655em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "n"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "−"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "p"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "−"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mtight",
                                    children: "1"
                                  })]
                                })
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.23em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "frac-line",
                                style: {
                                  borderBottomWidth: "0.04em"
                                }
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.485em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mopen mtight",
                                    children: "("
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mtight",
                                    children: "1"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "−"
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
                                      style: {
                                        marginRight: "0.0077em"
                                      },
                                      children: "R"
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "msupsub",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-t",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist-r",
                                          children: (0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist",
                                            style: {
                                              height: "0.8913em"
                                            },
                                            children: (0,jsx_runtime.jsxs)(_components.span, {
                                              style: {
                                                top: "-2.931em",
                                                marginRight: "0.0714em"
                                              },
                                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                                className: "pstrut",
                                                style: {
                                                  height: "2.5em"
                                                }
                                              }), (0,jsx_runtime.jsx)(_components.span, {
                                                className: "sizing reset-size3 size1 mtight",
                                                children: (0,jsx_runtime.jsx)(_components.span, {
                                                  className: "mord mtight",
                                                  children: "2"
                                                })
                                              })]
                                            })
                                          })
                                        })
                                      })
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mclose mtight",
                                    children: ")"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mopen mtight",
                                    children: "("
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "n"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "−"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mtight",
                                    children: "1"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mclose mtight",
                                    children: ")"
                                  })]
                                })
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.4811em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mclose nulldelimiter"
                    })]
                  })]
                })]
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "K-fold CV Estimate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsxs)(_components.mfrac, {
                        children: [(0,jsx_runtime.jsx)(_components.mn, {
                          children: "1"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "K"
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.msubsup, {
                        children: [(0,jsx_runtime.jsx)(_components.mo, {
                          children: "∑"
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "i"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "="
                          }), (0,jsx_runtime.jsx)(_components.mn, {
                            children: "1"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "K"
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mtext, {
                          children: "Score"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\frac{1}{K} \\sum_{i=1}^{K} \\text{Score}_i"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1.3262em",
                      verticalAlign: "-0.345em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mopen nulldelimiter"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mfrac",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8451em"
                            },
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.655em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.0715em"
                                    },
                                    children: "K"
                                  })
                                })
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.23em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "frac-line",
                                style: {
                                  borderBottomWidth: "0.04em"
                                }
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.394em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mtight",
                                    children: "1"
                                  })
                                })
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.345em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mclose nulldelimiter"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mop",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mop op-symbol small-op",
                      style: {
                        position: "relative",
                        top: "0em"
                      },
                      children: "∑"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.9812em"
                            },
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.4003em",
                                marginLeft: "0em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "i"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mrel mtight",
                                    children: "="
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mtight",
                                    children: "1"
                                  })]
                                })
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.2029em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.0715em"
                                    },
                                    children: "K"
                                  })
                                })
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.2997em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord text",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "mord",
                        children: "Score"
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.3117em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  children: "i"
                                })
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.15em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  })]
                })
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ROC Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x-axis: FPR (1 - Specificity); y-axis: TPR (Recall)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Grid Search Complexity"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "O"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsxs)(_components.msubsup, {
                        children: [(0,jsx_runtime.jsx)(_components.mo, {
                          children: "∏"
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "i"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "="
                          }), (0,jsx_runtime.jsx)(_components.mn, {
                            children: "1"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "m"
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "n"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "O(\\prod_{i=1}^{m} n_i)"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1.104em",
                      verticalAlign: "-0.2997em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0278em"
                    },
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mop",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mop op-symbol small-op",
                      style: {
                        position: "relative",
                        top: "0em"
                      },
                      children: "∏"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8043em"
                            },
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.4003em",
                                marginLeft: "0em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "i"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mrel mtight",
                                    children: "="
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mtight",
                                    children: "1"
                                  })]
                                })
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.2029em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "m"
                                  })
                                })
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.2997em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      children: "n"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.3117em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "0em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  children: "i"
                                })
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.15em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: ")"
                  })]
                })
              })]
            }), " where ", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsx)(_components.mrow, {
                      children: (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "n"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "n_i"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "0.5806em",
                      verticalAlign: "-0.15em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      children: "n"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.3117em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.55em",
                                marginLeft: "0em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  children: "i"
                                })
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.15em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    })]
                  })]
                })
              })]
            }), " = values per hyperparameter"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Random Search Efficiency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Covers the space uniformly; finds near-optimum in ~60 random trials"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "McNemar's Test Statistic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsxs)(_components.msup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "χ"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "2"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                        children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: "("
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            mathvariant: "normal",
                            children: "∥"
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "n"
                            }), (0,jsx_runtime.jsx)(_components.mn, {
                              children: "01"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "−"
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "n"
                            }), (0,jsx_runtime.jsx)(_components.mn, {
                              children: "10"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            mathvariant: "normal",
                            children: "∥"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "−"
                          }), (0,jsx_runtime.jsx)(_components.mn, {
                            children: "1"
                          }), (0,jsx_runtime.jsxs)(_components.msup, {
                            children: [(0,jsx_runtime.jsx)(_components.mo, {
                              stretchy: "false",
                              children: ")"
                            }), (0,jsx_runtime.jsx)(_components.mn, {
                              children: "2"
                            })]
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "n"
                            }), (0,jsx_runtime.jsx)(_components.mn, {
                              children: "01"
                            })]
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "+"
                          }), (0,jsx_runtime.jsxs)(_components.msub, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "n"
                            }), (0,jsx_runtime.jsx)(_components.mn, {
                              children: "10"
                            })]
                          })]
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\chi^2 = \\frac{(\\|n_{01} - n_{10}\\| - 1)^2}{n_{01} + n_{10}}"
                    })]
                  })
                })
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "katex-html",
                "aria-hidden": "true",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1.0085em",
                      verticalAlign: "-0.1944em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      children: "χ"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-t",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8141em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.063em",
                                marginRight: "0.05em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mtight",
                                  children: "2"
                                })
                              })]
                            })
                          })
                        })
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mrel",
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), (0,jsx_runtime.jsxs)(_components.span, {
                  className: "base",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "strut",
                    style: {
                      height: "1.554em",
                      verticalAlign: "-0.4451em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mopen nulldelimiter"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mfrac",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "1.1089em"
                            },
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.655em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
                                      children: "n"
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "msupsub",
                                      children: (0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist-t vlist-t2",
                                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                                          className: "vlist-r",
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist",
                                            style: {
                                              height: "0.3173em"
                                            },
                                            children: (0,jsx_runtime.jsxs)(_components.span, {
                                              style: {
                                                top: "-2.357em",
                                                marginLeft: "0em",
                                                marginRight: "0.0714em"
                                              },
                                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                                className: "pstrut",
                                                style: {
                                                  height: "2.5em"
                                                }
                                              }), (0,jsx_runtime.jsx)(_components.span, {
                                                className: "sizing reset-size3 size1 mtight",
                                                children: (0,jsx_runtime.jsx)(_components.span, {
                                                  className: "mord mtight",
                                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                                    className: "mord mtight",
                                                    children: "01"
                                                  })
                                                })
                                              })]
                                            })
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist-s",
                                            children: "​"
                                          })]
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist-r",
                                          children: (0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist",
                                            style: {
                                              height: "0.143em"
                                            },
                                            children: (0,jsx_runtime.jsx)(_components.span, {})
                                          })
                                        })]
                                      })
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "+"
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
                                      children: "n"
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "msupsub",
                                      children: (0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist-t vlist-t2",
                                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                                          className: "vlist-r",
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist",
                                            style: {
                                              height: "0.3173em"
                                            },
                                            children: (0,jsx_runtime.jsxs)(_components.span, {
                                              style: {
                                                top: "-2.357em",
                                                marginLeft: "0em",
                                                marginRight: "0.0714em"
                                              },
                                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                                className: "pstrut",
                                                style: {
                                                  height: "2.5em"
                                                }
                                              }), (0,jsx_runtime.jsx)(_components.span, {
                                                className: "sizing reset-size3 size1 mtight",
                                                children: (0,jsx_runtime.jsx)(_components.span, {
                                                  className: "mord mtight",
                                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                                    className: "mord mtight",
                                                    children: "10"
                                                  })
                                                })
                                              })]
                                            })
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist-s",
                                            children: "​"
                                          })]
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist-r",
                                          children: (0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist",
                                            style: {
                                              height: "0.143em"
                                            },
                                            children: (0,jsx_runtime.jsx)(_components.span, {})
                                          })
                                        })]
                                      })
                                    })]
                                  })]
                                })
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.23em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "frac-line",
                                style: {
                                  borderBottomWidth: "0.04em"
                                }
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.485em"
                              },
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "pstrut",
                                style: {
                                  height: "3em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "sizing reset-size6 size3 mtight",
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mopen mtight",
                                    children: "("
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mtight",
                                    children: "∥"
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
                                      children: "n"
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "msupsub",
                                      children: (0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist-t vlist-t2",
                                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                                          className: "vlist-r",
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist",
                                            style: {
                                              height: "0.3173em"
                                            },
                                            children: (0,jsx_runtime.jsxs)(_components.span, {
                                              style: {
                                                top: "-2.357em",
                                                marginLeft: "0em",
                                                marginRight: "0.0714em"
                                              },
                                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                                className: "pstrut",
                                                style: {
                                                  height: "2.5em"
                                                }
                                              }), (0,jsx_runtime.jsx)(_components.span, {
                                                className: "sizing reset-size3 size1 mtight",
                                                children: (0,jsx_runtime.jsx)(_components.span, {
                                                  className: "mord mtight",
                                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                                    className: "mord mtight",
                                                    children: "01"
                                                  })
                                                })
                                              })]
                                            })
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist-s",
                                            children: "​"
                                          })]
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist-r",
                                          children: (0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist",
                                            style: {
                                              height: "0.143em"
                                            },
                                            children: (0,jsx_runtime.jsx)(_components.span, {})
                                          })
                                        })]
                                      })
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "−"
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
                                      children: "n"
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "msupsub",
                                      children: (0,jsx_runtime.jsxs)(_components.span, {
                                        className: "vlist-t vlist-t2",
                                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                                          className: "vlist-r",
                                          children: [(0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist",
                                            style: {
                                              height: "0.3173em"
                                            },
                                            children: (0,jsx_runtime.jsxs)(_components.span, {
                                              style: {
                                                top: "-2.357em",
                                                marginLeft: "0em",
                                                marginRight: "0.0714em"
                                              },
                                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                                className: "pstrut",
                                                style: {
                                                  height: "2.5em"
                                                }
                                              }), (0,jsx_runtime.jsx)(_components.span, {
                                                className: "sizing reset-size3 size1 mtight",
                                                children: (0,jsx_runtime.jsx)(_components.span, {
                                                  className: "mord mtight",
                                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                                    className: "mord mtight",
                                                    children: "10"
                                                  })
                                                })
                                              })]
                                            })
                                          }), (0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist-s",
                                            children: "​"
                                          })]
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist-r",
                                          children: (0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist",
                                            style: {
                                              height: "0.143em"
                                            },
                                            children: (0,jsx_runtime.jsx)(_components.span, {})
                                          })
                                        })]
                                      })
                                    })]
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mtight",
                                    children: "∥"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "−"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mtight",
                                    children: "1"
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mclose mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mclose mtight",
                                      children: ")"
                                    }), (0,jsx_runtime.jsx)(_components.span, {
                                      className: "msupsub",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist-t",
                                        children: (0,jsx_runtime.jsx)(_components.span, {
                                          className: "vlist-r",
                                          children: (0,jsx_runtime.jsx)(_components.span, {
                                            className: "vlist",
                                            style: {
                                              height: "0.8913em"
                                            },
                                            children: (0,jsx_runtime.jsxs)(_components.span, {
                                              style: {
                                                top: "-2.931em",
                                                marginRight: "0.0714em"
                                              },
                                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                                className: "pstrut",
                                                style: {
                                                  height: "2.5em"
                                                }
                                              }), (0,jsx_runtime.jsx)(_components.span, {
                                                className: "sizing reset-size3 size1 mtight",
                                                children: (0,jsx_runtime.jsx)(_components.span, {
                                                  className: "mord mtight",
                                                  children: "2"
                                                })
                                              })]
                                            })
                                          })
                                        })
                                      })
                                    })]
                                  })]
                                })
                              })]
                            })]
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist-s",
                            children: "​"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.4451em"
                            },
                            children: (0,jsx_runtime.jsx)(_components.span, {})
                          })
                        })]
                      })
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "mclose nulldelimiter"
                    })]
                  })]
                })]
              })]
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How Model Evaluation Is Applied"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Healthcare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disease diagnosis model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recall prioritized to minimize missed diagnoses; ROC-AUC for overall quality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Finance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Credit card fraud detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precision prioritized to minimize false positives; cost-sensitive evaluation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E-commerce"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Product recommendation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accuracy measured offline; A/B testing for online evaluation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Autonomous Vehicles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pedestrian detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extremely high Recall required; F1-score with heavy FN penalty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Natural Language Processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sentiment analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F1-score standard for imbalanced sentiment classes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cybersecurity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intrusion detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precision-Recall curve over ROC due to extreme class imbalance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Manufacturing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predictive maintenance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-validation with time-based splits (not random) to respect temporal order"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Retail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Customer churn prediction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMOTE + stratified CV due to severe class imbalance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Energy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load forecasting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RMSE as primary metric because large errors are costly; time-series cross-validation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Never tune hyperparameters on your test set."
          }), " Use cross-validation within the training set to select hyperparameters and hold back the test set for a single final evaluation."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Always stratify folds for classification."
          }), " Use stratified K-fold as the default to ensure each fold represents the true class distribution."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Inspect the full confusion matrix."
          }), " Accuracy hides class imbalance problems. Always compute Precision, Recall, and F1 for each class."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Use learning curves to diagnose model behavior."
          }), " If your model has high bias, collecting more data rarely helps ? you need a more complex model or better features."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Adjust the decision threshold for imbalanced problems."
          }), " The default 0.5 threshold is rarely optimal for skewed classes. Optimize it using Precision-Recall curves."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Report uncertainty alongside performance."
          }), " When reporting cross-validation scores, always include the standard deviation: ", (0,jsx_runtime.jsx)(_components.em, {
            children: "F1 = 0.87 ? 0.03"
          }), " tells you more than a single number."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Compare models statistically."
          }), " A 0.01 difference in accuracy across a single CV run is not meaningful. Use McNemar's test or a paired t-test (on a held-out set) to establish statistical significance."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Select regression metrics carefully."
          }), " Use RMSE when large errors are disproportionately costly (e.g., energy forecasting). Use MAE when outliers should not dominate evaluation. Use Adjusted R? when comparing models with different numbers of features."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-cross-validator-rocauc-learning-curves-grid-search",
      children: "TypeScript Implementation: Cross-Validator, ROC/AUC, Learning Curves, Grid Search"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class KFoldCrossValidator {\n    static split<T>(data: T[], k: number): { train: T[]; test: T[] }[] {\n        const shuffled = [...data].sort(() => Math.random() - 0.5);\n        const folds: T[][] = [];\n        const foldSize = Math.floor(data.length / k);\n        for (let i = 0; i < k; i++) {\n            folds.push(shuffled.slice(i * foldSize, (i + 1) * foldSize));\n        }\n        if (shuffled.length % k !== 0) folds[k - 1].push(...shuffled.slice(k * foldSize));\n        return folds.map((testFold, i) => ({\n            test: testFold,\n            train: folds.filter((_, j) => j !== i).flat()\n        }));\n    }\n\n    static stratified<T>(data: T[], labels: number[], k: number): { train: T[]; test: T[] }[] {\n        const pos = data.filter((_, i) => labels[i] === 1);\n        const neg = data.filter((_, i) => labels[i] === 0);\n        const posFolds = this.split(pos, k);\n        const negFolds = this.split(neg, k);\n        return Array.from({ length: k }, (_, i) => ({\n            train: [...posFolds.filter((_, j) => j !== i).flat(), ...negFolds.filter((_, j) => j !== i).flat()],\n            test: [...posFolds[i], ...negFolds[i]]\n        }));\n    }\n}\n\nclass ROCCurve {\n    static compute(scores: number[], labels: number[], thresholds: number = 100): { fpr: number[]; tpr: number[]; auc: number } {\n        const steps = Array.from({ length: thresholds }, (_, i) => i / (thresholds - 1));\n        const fpr: number[] = []; const tpr: number[] = [];\n        const pos = labels.filter(l => l === 1).length;\n        const neg = labels.filter(l => l === 0).length;\n        for (const t of steps) {\n            let tp = 0; let fp = 0;\n            for (let i = 0; i < scores.length; i++) {\n                if (scores[i] >= t) { if (labels[i] === 1) tp++; else fp++; }\n            }\n            fpr.push(fp / (neg || 1));\n            tpr.push(tp / (pos || 1));\n        }\n        let auc = 0;\n        for (let i = 1; i < fpr.length; i++) {\n            auc += (fpr[i] - fpr[i - 1]) * (tpr[i] + tpr[i - 1]) / 2;\n        }\n        return { fpr, tpr, auc };\n    }\n}\n\nclass LearningCurveGenerator {\n    static generate(\n        modelFactory: () => { fit: (x: number[][], y: number[]) => void; predict: (x: number[]) => number },\n        features: number[][], labels: number[], trainSizes: number[] = [0.1, 0.2, 0.4, 0.6, 0.8, 1.0]\n    ): { trainSize: number; trainScore: number; valScore: number }[] {\n        return trainSizes.map(frac => {\n            const n = Math.floor(features.length * frac);\n            const idx = features.slice(0, n).map((_, i) => i);\n            const model = modelFactory();\n            model.fit(idx.map(i => features[i]), idx.map(i => labels[i]));\n            const trainPreds = idx.map(i => model.predict(features[i]));\n            const trainAcc = trainPreds.filter((p, i) => p === labels[idx[i]]).length / idx.length;\n            const testIdx = features.slice(n).map((_, i) => i + n);\n            const testPreds = testIdx.map(i => model.predict(features[i]));\n            const testAcc = testPreds.filter((p, i) => p === labels[testIdx[i]]).length / testIdx.length;\n            return { trainSize: n, trainScore: trainAcc, valScore: testAcc };\n        });\n    }\n}\n\nclass GridSearch {\n    static search(\n        modelFactory: (params: Record<string, any>) => { fit: (x: number[][], y: number[]) => void; predict: (x: number[]) => number },\n        paramGrid: Record<string, any[]>,\n        features: number[][], labels: number[], k: number = 3\n    ): { bestParams: Record<string, any>; bestScore: number; results: { params: Record<string, any>; score: number }[] } {\n        const keys = Object.keys(paramGrid);\n        const combinations = this.cartesian(keys.map(k => paramGrid[k]));\n        const results: { params: Record<string, any>; score: number }[] = [];\n\n        for (const combo of combinations) {\n            const params: Record<string, any> = {};\n            keys.forEach((k, i) => params[k] = combo[i]);\n            const folds = KFoldCrossValidator.split(features, k);\n            let scores = 0;\n            for (const fold of folds) {\n                const model = modelFactory(params);\n                model.fit(fold.train, fold.train.map((_, i) => labels[i]));\n                const preds = fold.test.map(x => model.predict(x));\n                const acc = preds.filter((p, i) => p === labels[fold.train.length + i]).length / fold.test.length;\n                scores += acc;\n            }\n            results.push({ params, score: scores / k });\n        }\n\n        results.sort((a, b) => b.score - a.score);\n        return { bestParams: results[0].params, bestScore: results[0].score, results };\n    }\n\n    private static cartesian(arrays: any[][]): any[][] {\n        if (arrays.length === 0) return [[]];\n        return arrays[0].flatMap(v => this.cartesian(arrays.slice(1)).map(arr => [v, ...arr]));\n    }\n}\n\n// Demo: KNN-style classifier for evaluation\nfunction simpleKNN(params: Record<string, any>) {\n    const k = params.k as number;\n    let X: number[][] = []; let y: number[] = [];\n    return {\n        fit: (features: number[][], labels: number[]) => { X = features; y = labels; },\n        predict: (point: number[]) => {\n            const dists = X.map((x, i) => ({ d: Math.sqrt(x.reduce((s, v, j) => s + (v - point[j]) ** 2, 0)), label: y[i] }))\n                .sort((a, b) => a.d - b.d).slice(0, k);\n            const ones = dists.filter(d => d.label === 1).length;\n            return ones > k / 2 ? 1 : 0;\n        }\n    };\n}\n\nconst X = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 1], [6, 2], [7, 3], [8, 4], [9, 5], [10, 6]];\nconst yLabels = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1];\nconst scores = [0.1, 0.2, 0.3, 0.4, 0.35, 0.6, 0.7, 0.8, 0.9, 0.85];\nconst roc = ROCCurve.compute(scores, yLabels);\nconsole.log(\"AUC:\", roc.auc.toFixed(4));\n\nconst learning = LearningCurveGenerator.generate(() => simpleKNN({ k: 3 }), X, yLabels);\nconsole.log(\"Learning curve:\", learning.map(l => `n=${l.trainSize} train=${l.trainScore.toFixed(2)} val=${l.valScore.toFixed(2)}`).join(\" | \"));\n\nconst grid = GridSearch.search(\n    (p) => simpleKNN(p),\n    { k: [1, 3, 5, 7] },\n    X, yLabels, 3\n);\nconsole.log(\"Best params:\", JSON.stringify(grid.bestParams), \"score:\", grid.bestScore.toFixed(4));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// model evaluation\n// ml-supervised-unsupervised implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'model evaluation', data: { topic: 'ml-supervised-unsupervised' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// model evaluation - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'ml-algorithms demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'machine-learning', chapter: 'model evaluation' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('ml-algorithms'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The bias-variance tradeoff is a central challenge in machine learning."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Overfitting occurs when a model is too complex (high variance); underfitting occurs when it is too simple (high bias)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "K-fold cross-validation is the industry standard for estimating model generalization performance."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Accuracy is often an insufficient metric; Precision, Recall, and F1-score provide a more nuanced view, especially in imbalanced cases."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Learning curves and validation curves help diagnose whether a model suffers from bias or variance."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Systematic hyperparameter tuning is necessary to maximize the performance of a chosen algorithm."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Imbalanced classification requires special handling: class weights, SMOTE, cost-sensitive learning, or threshold moving."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regression models require distinct metrics (MSE, RMSE, MAE, R?) appropriate to the problem domain."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-class problems need careful averaging strategy selection (macro, micro, weighted)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Statistical significance tests prevent false conclusions from noisy cross-validation estimates."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Draw a graph showing the training error and validation error as model complexity increases. Mark the regions of underfitting and overfitting."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is the harmonic mean used in the F1-score instead of the arithmetic mean?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between a \"validation set\" and a \"test set\"?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In what scenario would you prioritize Precision over Recall? Provide a real-world example."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the difference between macro, micro, and weighted F1 averaging in multi-class classification."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When would you use Adjusted R? instead of R??"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A model has ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "P"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "40"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "F"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "P"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "10"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "F"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "N"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "20"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "N"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "30"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "TP=40, FP=10, FN=20, TN=30"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "T"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "P"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8778em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "40"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "F"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "P"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8778em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "10"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "F"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.109em"
                },
                children: "N"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8778em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "20"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "T"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.109em"
                },
                children: "N"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6444em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "30"
              })]
            })]
          })]
        }), ". Calculate Precision, Recall, and F1-score."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You are performing 5-fold cross-validation on a dataset of 1,000 samples. How many samples are in the training set and validation set for each fold?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If your training error is 2% and your validation error is 15%, is your model suffering from high bias or high variance?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You perform 5-fold CV and compare Model A (mean F1=0.88, std=0.04) and Model B (mean F1=0.86, std=0.04). How many standard deviations apart are they? Is this difference likely significant?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A regression model has ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "R"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.92"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "R^2 = 0.92"
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.8141em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0077em"
                  },
                  children: "R"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8141em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.063em",
                            marginRight: "0.05em"
                          },
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "pstrut",
                            style: {
                              height: "2.7em"
                            }
                          }), (0,jsx_runtime.jsx)(_components.span, {
                            className: "sizing reset-size6 size3 mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "2"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "="
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6444em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "0.92"
              })]
            })]
          })]
        }), " with 5 features on a dataset of 50 samples. Compute the Adjusted R?. What happens to Adjusted R? if you add 20 more irrelevant features?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the \"Receiver Operating Characteristic\" (ROC) curve. What do the axes represent, and what does a 45-degree diagonal line represent in terms of model performance?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a complete model evaluation pipeline for a binary classification problem where the minority class is 5% of the data. Your answer should address: splitting strategy, cross-validation method, choice of evaluation metrics, hyperparameter tuning approach, and how you would determine the optimal decision threshold."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test your understanding of Model Selection and Evaluation."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1."
      }), " A model achieves 99% accuracy on a dataset where 99% of samples belong to Class A and 1% to Class B. What is the most likely issue?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "**Answer**"
      }), "\n**C)** The model likely predicts Class A for every sample, achieving 99% accuracy by exploiting the class imbalance. This is why accuracy is misleading ? you must check precision, recall, and the confusion matrix.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) The model is overfitting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) The model has high bias"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Accuracy is misleading due to class imbalance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Cross-validation was not used"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2."
      }), " In K-fold cross-validation, what is the main tradeoff when choosing the value of K?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "**Answer**"
      }), "\n**B)** A larger K means more training data per fold (lower bias in the estimate) but the training folds overlap more (higher variance and correlation between runs). K=5 or K=10 are commonly chosen as a balance.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Larger K reduces computation time but increases bias"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Larger K reduces bias but increases variance of the estimate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Larger K eliminates the need for a test set"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Larger K always produces better models"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3."
      }), " If a spam detection model produces very few false positives but misses many spam emails, which metric is the model optimizing?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "**Answer**"
      }), "\n**B)** Few false positives means high Precision. However, missing many actual spam emails means low Recall. The model is optimized for Precision ? avoiding false alarms at the cost of letting spam through.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Recall"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Precision"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) ROC-AUC"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Accuracy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4."
      }), " A learning curve shows training error and validation error both converging at 0.45 (high error). What does this indicate?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "**Answer**"
      }), "\n**B)** Both curves converging at a high error value indicates high bias (underfitting). The model is too simple to capture the underlying patterns. Adding more training data will not help ? you need a more complex model or better features.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) High variance (overfitting)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) High bias (underfitting)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Optimal model complexity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) The test set is too small"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "5."
      }), " You are comparing Model A and Model B on a held-out test set. Model A has 85% accuracy and Model B has 84% accuracy. Which statement is most correct?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "**Answer**"
      }), "\n**D)** A 1% accuracy difference may not be statistically significant. You should run a statistical test (e.g., McNemar's test) to determine whether the observed difference is likely to be real or due to random chance in the test set selection.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Model A is clearly the better model"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Model B is definitely worse because 84% < 85%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) The difference is meaningless because accuracy is a bad metric"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Run a statistical significance test before concluding Model A is better"
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