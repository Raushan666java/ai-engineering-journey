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
    annotation: "annotation",
    blockquote: "blockquote",
    code: "code",
    details: "details",
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
    pre: "pre",
    semantics: "semantics",
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Log-odds is linear: ", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "log"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⁡"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "p"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "/"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "1"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "p"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsxs)(_components.msup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          mathvariant: "bold",
                          children: "w"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "T"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "bold",
                        children: "x"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\log(p/(1-p)) = \\mathbf{w}^T\\mathbf{x}"
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
                    className: "mord mathnormal",
                    children: "p"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "/"
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
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "p"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: "))"
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
                      height: "0.8413em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathbf",
                      style: {
                        marginRight: "0.016em"
                      },
                      children: "w"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-t",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8413em"
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
                                  className: "mord mathnormal mtight",
                                  style: {
                                    marginRight: "0.1389em"
                                  },
                                  children: "T"
                                })
                              })]
                            })
                          })
                        })
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathbf",
                    children: "x"
                  })]
                })]
              })]
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The model is linear in the log-odds space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Decision Boundary"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Threshold at ", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "h"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "w"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "x"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "0.5"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "h_w(x) = 0.5"
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
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      children: "h"
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
                                  style: {
                                    marginRight: "0.0269em"
                                  },
                                  children: "w"
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
                    children: "0.5"
                  })]
                })]
              })]
            }), " separates classes"]
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
        }), ": Predictions can fall outside ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "["
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "]"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "[0, 1]"
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
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "["
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
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "1"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: "]"
              })]
            })
          })]
        }), ", making them uninterpretable as probabilities"]
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The sigmoid (logistic) function maps any real-valued number to the ", (0,jsx_runtime.jsxs)(_components.span, {
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
                }), (0,jsx_runtime.jsx)(_components.mn, {
                  children: "0"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsx)(_components.mn, {
                  children: "1"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "(0, 1)"
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
                height: "1em",
                verticalAlign: "-0.25em"
              }
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
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "1"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            })]
          })
        })]
      }), " interval:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "σ"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "z"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                  children: [(0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "+"
                    }), (0,jsx_runtime.jsxs)(_components.msup, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "e"
                      }), (0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsx)(_components.mo, {
                          children: "−"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "z"
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\sigma(z) = \\frac{1}{1 + e^{-z}}"
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
                marginRight: "0.0359em"
              },
              children: "σ"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.044em"
              },
              children: "z"
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
                height: "1.2484em",
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
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            className: "mord mtight",
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: "1"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mbin mtight",
                              children: "+"
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
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
                                        height: "0.7027em"
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
                                          children: (0,jsx_runtime.jsxs)(_components.span, {
                                            className: "mord mtight",
                                            children: [(0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mtight",
                                              children: "−"
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mathnormal mtight",
                                              style: {
                                                marginRight: "0.044em"
                                              },
                                              children: "z"
                                            })]
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Where ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "z"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "bold",
                    children: "w"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "bold",
                  children: "x"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "w"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "+"
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "w"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "x"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "+"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "⋯"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "+"
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "w"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "x"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "z = \\mathbf{w}^T\\mathbf{x} = w_0 + w_1x_1 + \\dots + w_dx_d"
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
              style: {
                marginRight: "0.044em"
              },
              children: "z"
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
                height: "0.8413em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathbf",
                style: {
                  marginRight: "0.016em"
                },
                children: "w"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8413em"
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
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.1389em"
                            },
                            children: "T"
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathbf",
              children: "x"
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
                height: "0.7333em",
                verticalAlign: "-0.15em"
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
                        height: "0.3011em"
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
                            children: "0"
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
                height: "0.7333em",
                verticalAlign: "-0.15em"
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
                        height: "0.3011em"
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
                            children: "1"
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
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "x"
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
                            children: "1"
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
                height: "0.6667em",
                verticalAlign: "-0.0833em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "minner",
              children: "⋯"
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
                height: "0.5806em",
                verticalAlign: "-0.15em"
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
                        height: "0.3361em"
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
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "x"
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
          })]
        })]
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "σ"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.5"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\sigma(0) = 0.5"
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
                  marginRight: "0.0359em"
                },
                children: "σ"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "0"
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
                children: "0.5"
              })]
            })]
          })]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "σ"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "z"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "→"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\sigma(z) \\to 1"
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
                  marginRight: "0.0359em"
                },
                children: "σ"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.044em"
                },
                children: "z"
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
                children: "→"
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
                children: "1"
              })]
            })]
          })]
        }), " as ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "z"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "→"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "+"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "∞"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "z \\to +\\infty"
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
                style: {
                  marginRight: "0.044em"
                },
                children: "z"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "→"
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
                  height: "0.6667em",
                  verticalAlign: "-0.0833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "+"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "∞"
              })]
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "σ"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "z"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "→"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\sigma(z) \\to 0"
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
                  marginRight: "0.0359em"
                },
                children: "σ"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.044em"
                },
                children: "z"
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
                children: "→"
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
                children: "0"
              })]
            })]
          })]
        }), " as ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "z"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "→"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "∞"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "z \\to -\\infty"
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
                style: {
                  marginRight: "0.044em"
                },
                children: "z"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "→"
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
                  height: "0.6667em",
                  verticalAlign: "-0.0833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "−"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "∞"
              })]
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Derivative: ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "σ"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      mathvariant: "normal",
                      lspace: "0em",
                      rspace: "0em",
                      children: "′"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "z"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "σ"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "z"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "σ"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "z"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\sigma'(z) = \\sigma(z)(1 - \\sigma(z))"
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
                  height: "1.0019em",
                  verticalAlign: "-0.25em"
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
                          height: "0.7519em"
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
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mtight",
                                children: "′"
                              })
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.044em"
                },
                children: "z"
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
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0359em"
                },
                children: "σ"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.044em"
                },
                children: "z"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
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
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0359em"
                },
                children: "σ"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.044em"
                },
                children: "z"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: "))"
              })]
            })]
          })]
        }), " ? this simplifies gradient computation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The hypothesis outputs the probability of the positive class:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "h"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "w"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "x"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "P"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "y"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.mn, {
                  children: "1"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "normal",
                  children: "∣"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "x"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ";"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "w"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "σ"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "bold",
                    children: "w"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "bold",
                  children: "x"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "h_w(x) = P(y=1 | x; w) = \\sigma(\\mathbf{w}^T\\mathbf{x})"
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
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "h"
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
                            style: {
                              marginRight: "0.0269em"
                            },
                            children: "w"
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
                marginRight: "0.1389em"
              },
              children: "P"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
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
              className: "mord",
              children: "1∣"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "x"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mpunct",
              children: ";"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0269em"
              },
              children: "w"
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
                height: "1.0913em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0359em"
              },
              children: "σ"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathbf",
                style: {
                  marginRight: "0.016em"
                },
                children: "w"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8413em"
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
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.1389em"
                            },
                            children: "T"
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathbf",
              children: "x"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "odds-and-log-odds",
      children: "Odds and Log-Odds"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Odds"
      }), " are the ratio of the probability of an event happening to the probability of it not happening:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mtext, {
                  children: "Odds"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "p"
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "−"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "p"
                    })]
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\text{Odds} = \\frac{p}{1-p}"
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
                height: "0.6944em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord text",
              children: (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "Odds"
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
                height: "1.2286em",
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
                        height: "0.7475em"
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
                              children: "1"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mbin mtight",
                              children: "−"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "p"
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
                          top: "-3.4461em"
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
                              children: "p"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For logistic regression:\n", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsxs)(_components.mfrac, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "p"
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "−"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "p"
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                  children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "σ"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: "("
                    }), (0,jsx_runtime.jsxs)(_components.msup, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "bold",
                        children: "w"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "T"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      mathvariant: "bold",
                      children: "x"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: ")"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "−"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "σ"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: "("
                    }), (0,jsx_runtime.jsxs)(_components.msup, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "bold",
                        children: "w"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "T"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      mathvariant: "bold",
                      children: "x"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: ")"
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsxs)(_components.msup, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "bold",
                        children: "w"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "T"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      mathvariant: "bold",
                      children: "x"
                    })]
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\frac{p}{1-p} = \\frac{\\sigma(\\mathbf{w}^T\\mathbf{x})}{1 - \\sigma(\\mathbf{w}^T\\mathbf{x})} = e^{\\mathbf{w}^T\\mathbf{x}}"
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
                height: "1.2286em",
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
                        height: "0.7475em"
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
                              children: "1"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mbin mtight",
                              children: "−"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "p"
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
                          top: "-3.4461em"
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
                              children: "p"
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
                        height: "0.4811em"
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
                height: "1.6552em",
                verticalAlign: "-0.5269em"
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
                        height: "1.1284em"
                      },
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.6481em"
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
                              children: "1"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mbin mtight",
                              children: "−"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.0359em"
                              },
                              children: "σ"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mopen mtight",
                              children: "("
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathbf mtight",
                                style: {
                                  marginRight: "0.016em"
                                },
                                children: "w"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "msupsub",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-t",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-r",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.7741em"
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
                                            className: "mord mathnormal mtight",
                                            style: {
                                              marginRight: "0.1389em"
                                            },
                                            children: "T"
                                          })
                                        })]
                                      })
                                    })
                                  })
                                })
                              })]
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathbf mtight",
                              children: "x"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mclose mtight",
                              children: ")"
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
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.0359em"
                              },
                              children: "σ"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mopen mtight",
                              children: "("
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathbf mtight",
                                style: {
                                  marginRight: "0.016em"
                                },
                                children: "w"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "msupsub",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-t",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-r",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.9191em"
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
                                            className: "mord mathnormal mtight",
                                            style: {
                                              marginRight: "0.1389em"
                                            },
                                            children: "T"
                                          })
                                        })]
                                      })
                                    })
                                  })
                                })
                              })]
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathbf mtight",
                              children: "x"
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
                        height: "0.5269em"
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
                height: "1.0064em"
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
                        height: "1.0064em"
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
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathbf mtight",
                                style: {
                                  marginRight: "0.016em"
                                },
                                children: "w"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "msupsub",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "vlist-t",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-r",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist",
                                      style: {
                                        height: "0.9191em"
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
                                            className: "mord mathnormal mtight",
                                            style: {
                                              marginRight: "0.1389em"
                                            },
                                            children: "T"
                                          })
                                        })]
                                      })
                                    })
                                  })
                                })
                              })]
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathbf mtight",
                              children: "x"
                            })]
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
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Taking the natural log gives the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "log-odds"
      }), " (logit function):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "log"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "⁡"
                }), (0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    fence: "true",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "p"
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mn, {
                        children: "1"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "p"
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    fence: "true",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "bold",
                    children: "w"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "bold",
                  children: "x"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\log\\left(\\frac{p}{1-p}\\right) = \\mathbf{w}^T\\mathbf{x}"
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
                height: "1.8em",
                verticalAlign: "-0.65em"
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
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "minner",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mopen delimcenter",
                style: {
                  top: "0em"
                },
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "delimsizing size2",
                  children: "("
                })
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
                          height: "0.7475em"
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
                                children: "1"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mbin mtight",
                                children: "−"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "p"
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
                            top: "-3.4461em"
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
                                children: "p"
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
                          height: "0.4811em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mclose nulldelimiter"
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose delimcenter",
                style: {
                  top: "0em"
                },
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "delimsizing size2",
                  children: ")"
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
                height: "0.8413em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathbf",
                style: {
                  marginRight: "0.016em"
                },
                children: "w"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8413em"
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
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.1389em"
                            },
                            children: "T"
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathbf",
              children: "x"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This reveals that logistic regression is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "linear in the log-odds space"
      }), " ? each unit increase in ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "x"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "j"
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "x_j"
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
                children: "x"
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
      }), " multiplies the odds by ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "w"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "j"
                    })]
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "e^{w_j}"
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
                height: "0.6644em"
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
                        height: "0.6644em"
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
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
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
                                        height: "0.3281em"
                                      },
                                      children: (0,jsx_runtime.jsxs)(_components.span, {
                                        style: {
                                          top: "-2.357em",
                                          marginLeft: "-0.0269em",
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
                            })
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
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "decision-boundary",
      children: "Decision Boundary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The model predicts a class by comparing the probability to a threshold, typically 0.5:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.span, {
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
                    children: "y"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "^"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    fence: "true",
                    children: "{"
                  }), (0,jsx_runtime.jsxs)(_components.mtable, {
                    rowspacing: "0.36em",
                    columnalign: "left left",
                    columnspacing: "1em",
                    children: [(0,jsx_runtime.jsxs)(_components.mtr, {
                      children: [(0,jsx_runtime.jsx)(_components.mtd, {
                        children: (0,jsx_runtime.jsx)(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: (0,jsx_runtime.jsx)(_components.mn, {
                            children: "1"
                          })
                        })
                      }), (0,jsx_runtime.jsx)(_components.mtd, {
                        children: (0,jsx_runtime.jsx)(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: (0,jsx_runtime.jsxs)(_components.mrow, {
                            children: [(0,jsx_runtime.jsx)(_components.mtext, {
                              children: "if "
                            }), (0,jsx_runtime.jsxs)(_components.msub, {
                              children: [(0,jsx_runtime.jsx)(_components.mi, {
                                children: "h"
                              }), (0,jsx_runtime.jsx)(_components.mi, {
                                children: "w"
                              })]
                            }), (0,jsx_runtime.jsx)(_components.mo, {
                              stretchy: "false",
                              children: "("
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "x"
                            }), (0,jsx_runtime.jsx)(_components.mo, {
                              stretchy: "false",
                              children: ")"
                            }), (0,jsx_runtime.jsx)(_components.mo, {
                              children: "≥"
                            }), (0,jsx_runtime.jsx)(_components.mn, {
                              children: "0.5"
                            })]
                          })
                        })
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.mtr, {
                      children: [(0,jsx_runtime.jsx)(_components.mtd, {
                        children: (0,jsx_runtime.jsx)(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: (0,jsx_runtime.jsx)(_components.mn, {
                            children: "0"
                          })
                        })
                      }), (0,jsx_runtime.jsx)(_components.mtd, {
                        children: (0,jsx_runtime.jsx)(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: (0,jsx_runtime.jsxs)(_components.mrow, {
                            children: [(0,jsx_runtime.jsx)(_components.mtext, {
                              children: "if "
                            }), (0,jsx_runtime.jsxs)(_components.msub, {
                              children: [(0,jsx_runtime.jsx)(_components.mi, {
                                children: "h"
                              }), (0,jsx_runtime.jsx)(_components.mi, {
                                children: "w"
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
                          })
                        })
                      }), (0,jsx_runtime.jsx)(_components.mtd, {
                        children: (0,jsx_runtime.jsx)(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: (0,jsx_runtime.jsxs)(_components.mrow, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "l"
                            }), (0,jsx_runtime.jsx)(_components.mi, {
                              children: "t"
                            }), (0,jsx_runtime.jsx)(_components.mo, {
                              separator: "true",
                              children: ";"
                            }), (0,jsx_runtime.jsx)(_components.mn, {
                              children: "0.5"
                            })]
                          })
                        })
                      })]
                    })]
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\hat{y} = \\begin{cases} 1 & \\text{if } h_w(x) \\geq 0.5 \\\\ 0 & \\text{if } h_w(x) &lt; 0.5 \\end{cases}"
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
                height: "3em",
                verticalAlign: "-1.25em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "minner",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mopen delimcenter",
                style: {
                  top: "0em"
                },
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "delimsizing size4",
                  children: "{"
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "mtable",
                  children: [(0,jsx_runtime.jsx)(_components.span, {
                    className: "col-align-l",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-r",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "1.69em"
                          },
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-3.69em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3.008em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord",
                                children: "1"
                              })
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-2.25em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3.008em"
                              }
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord",
                                children: "0"
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
                            height: "1.19em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {})
                        })
                      })]
                    })
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "arraycolsep",
                    style: {
                      width: "1em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "col-align-l",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-r",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "1.69em"
                          },
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-3.69em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3.008em"
                              }
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord text",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord",
                                  children: "if "
                                })
                              }), (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal",
                                  children: "h"
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
                                              style: {
                                                marginRight: "0.0269em"
                                              },
                                              children: "w"
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
                                  marginRight: "0.2778em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mrel",
                                children: "≥"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mspace",
                                style: {
                                  marginRight: "0.2778em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord",
                                children: "0.5"
                              })]
                            })]
                          }), (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-2.25em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3.008em"
                              }
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord text",
                                children: (0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord",
                                  children: "if "
                                })
                              }), (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal",
                                  children: "h"
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
                                              style: {
                                                marginRight: "0.0269em"
                                              },
                                              children: "w"
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
                                className: "mopen",
                                children: "("
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal",
                                children: "x"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mclose",
                                children: ")"
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
                            height: "1.19em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {})
                        })
                      })]
                    })
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "arraycolsep",
                    style: {
                      width: "0.5em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "col-align-c",
                    children: (0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-t vlist-t2",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-r",
                        children: [(0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist",
                          style: {
                            height: "0.25em"
                          },
                          children: (0,jsx_runtime.jsxs)(_components.span, {
                            style: {
                              top: "-2.25em"
                            },
                            children: [(0,jsx_runtime.jsx)(_components.span, {
                              className: "pstrut",
                              style: {
                                height: "3.008em"
                              }
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal",
                                style: {
                                  marginRight: "0.0197em"
                                },
                                children: "l"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal",
                                children: "t"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mpunct",
                                children: ";"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mspace",
                                style: {
                                  marginRight: "0.1667em"
                                }
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord",
                                children: "0.5"
                              })]
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
                            height: "1.19em"
                          },
                          children: (0,jsx_runtime.jsx)(_components.span, {})
                        })
                      })]
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
      children: ["Since ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "h"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "w"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "x"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "≥"
                }), (0,jsx_runtime.jsx)(_components.mn, {
                  children: "0.5"
                }), (0,jsx_runtime.jsx)(_components.mtext, {
                  children: "  "
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "⟺"
                }), (0,jsx_runtime.jsx)(_components.mtext, {
                  children: "  "
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "bold",
                    children: "w"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "bold",
                  children: "x"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "≥"
                }), (0,jsx_runtime.jsx)(_components.mn, {
                  children: "0"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "h_w(x) \\geq 0.5 \\iff \\mathbf{w}^T\\mathbf{x} \\geq 0"
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
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "h"
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
                            style: {
                              marginRight: "0.0269em"
                            },
                            children: "w"
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
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "≥"
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
                height: "0.6684em",
                verticalAlign: "-0.024em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "0.5"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "⟺"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
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
                height: "0.9773em",
                verticalAlign: "-0.136em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathbf",
                style: {
                  marginRight: "0.016em"
                },
                children: "w"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8413em"
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
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.1389em"
                            },
                            children: "T"
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathbf",
              children: "x"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "≥"
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
              children: "0"
            })]
          })]
        })]
      }), ", the decision boundary is ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "bold",
                    children: "w"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "bold",
                  children: "x"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.mn, {
                  children: "0"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\mathbf{w}^T\\mathbf{x} = 0"
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
                height: "0.8413em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathbf",
                style: {
                  marginRight: "0.016em"
                },
                children: "w"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8413em"
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
                            className: "mord mathnormal mtight",
                            style: {
                              marginRight: "0.1389em"
                            },
                            children: "T"
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathbf",
              children: "x"
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
              children: "0"
            })]
          })]
        })]
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For a 2D problem with ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "z"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "w"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "+"
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "w"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "x"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "+"
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "w"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "x"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "z = w_0 + w_1x_1 + w_2x_2"
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
              style: {
                marginRight: "0.044em"
              },
              children: "z"
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
                height: "0.7333em",
                verticalAlign: "-0.15em"
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
                        height: "0.3011em"
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
                            children: "0"
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
                height: "0.7333em",
                verticalAlign: "-0.15em"
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
                        height: "0.3011em"
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
                            children: "1"
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
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "x"
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
                            children: "1"
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
                height: "0.5806em",
                verticalAlign: "-0.15em"
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
                        height: "0.3011em"
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
                            children: "2"
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
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "x"
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
                            children: "2"
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
      }), ", the boundary is the line:\n", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "x"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "−"
                }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                  children: [(0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "w"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "0"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "w"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "−"
                }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                  children: [(0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "w"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "w"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  })]
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "x"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "x_2 = -\\frac{w_0}{w_2} - \\frac{w_1}{w_2}x_1"
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
                height: "0.5806em",
                verticalAlign: "-0.15em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "x"
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
                            children: "2"
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
                height: "1.1566em",
                verticalAlign: "-0.4451em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "−"
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
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
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
                                        height: "0.3173em"
                                      },
                                      children: (0,jsx_runtime.jsxs)(_components.span, {
                                        style: {
                                          top: "-2.357em",
                                          marginLeft: "-0.0269em",
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
                                        height: "0.3173em"
                                      },
                                      children: (0,jsx_runtime.jsxs)(_components.span, {
                                        style: {
                                          top: "-2.357em",
                                          marginLeft: "-0.0269em",
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
                                            children: "0"
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
                        height: "0.4451em"
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
                height: "1.1566em",
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
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
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
                                        height: "0.3173em"
                                      },
                                      children: (0,jsx_runtime.jsxs)(_components.span, {
                                        style: {
                                          top: "-2.357em",
                                          marginLeft: "-0.0269em",
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
                                        height: "0.3173em"
                                      },
                                      children: (0,jsx_runtime.jsxs)(_components.span, {
                                        style: {
                                          top: "-2.357em",
                                          marginLeft: "-0.0269em",
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
                                            children: "1"
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
                        height: "0.4451em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose nulldelimiter"
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "x"
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
                            children: "1"
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
      children: (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "J"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "w"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "−"
                }), (0,jsx_runtime.jsxs)(_components.mfrac, {
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
                }), (0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    fence: "true",
                    children: "["
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "y"
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "log"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "⁡"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "h"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "w"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "x"
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "+"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "y"
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
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
                    children: "−"
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "h"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "w"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "x"
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    fence: "true",
                    children: "]"
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "J(w) = -\\frac{1}{n} \\sum_{i=1}^{n} \\left[ y^{(i)} \\log(h_w(x^{(i)})) + (1 - y^{(i)}) \\log(1 - h_w(x^{(i)})) \\right]"
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
                marginRight: "0.0962em"
              },
              children: "J"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0269em"
              },
              children: "w"
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
                height: "1.238em",
                verticalAlign: "-0.35em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "−"
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
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "minner",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mopen delimcenter",
                style: {
                  top: "0em"
                },
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "delimsizing size1",
                  children: "["
                })
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
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.888em"
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
                                className: "mopen mtight",
                                children: "("
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "i"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mclose mtight",
                                children: ")"
                              })]
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
                  marginRight: "0.1667em"
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
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "h"
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
                              style: {
                                marginRight: "0.0269em"
                              },
                              children: "w"
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
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "x"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.888em"
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
                                className: "mopen mtight",
                                children: "("
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "i"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mclose mtight",
                                children: ")"
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
                children: "))"
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
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.888em"
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
                                className: "mopen mtight",
                                children: "("
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "i"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mclose mtight",
                                children: ")"
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
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
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
                children: "−"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "h"
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
                              style: {
                                marginRight: "0.0269em"
                              },
                              children: "w"
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
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "x"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.888em"
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
                                className: "mopen mtight",
                                children: "("
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "i"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mclose mtight",
                                children: ")"
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
                children: "))"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose delimcenter",
                style: {
                  top: "0em"
                },
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "delimsizing size1",
                  children: "]"
                })
              })]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intuition"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When ", (0,jsx_runtime.jsxs)(_components.span, {
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
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "y=1"
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
                  height: "0.6444em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "1"
              })]
            })]
          })]
        }), ": ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "J"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "log"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "⁡"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "h"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "w"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "x"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "J = -\\log(h_w(x))"
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
                  marginRight: "0.0962em"
                },
                children: "J"
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
                className: "mord",
                children: "−"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
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
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "h"
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
                              style: {
                                marginRight: "0.0269em"
                              },
                              children: "w"
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
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "x"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: "))"
              })]
            })]
          })]
        }), ". If ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "h"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "w"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "x"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "→"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "h_w(x) \\to 0"
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
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "h"
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
                              style: {
                                marginRight: "0.0269em"
                              },
                              children: "w"
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
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "→"
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
                children: "0"
              })]
            })]
          })]
        }), ", the loss ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    children: "→"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "∞"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\to \\infty"
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
                  height: "0.3669em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "→"
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
                  height: "0.4306em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "∞"
              })]
            })]
          })]
        }), " (very bad). If ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "h"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "w"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "x"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "→"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "h_w(x) \\to 1"
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
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "h"
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
                              style: {
                                marginRight: "0.0269em"
                              },
                              children: "w"
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
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "→"
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
                children: "1"
              })]
            })]
          })]
        }), ", the loss ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    children: "→"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\to 0"
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
                  height: "0.3669em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "→"
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
                children: "0"
              })]
            })]
          })]
        }), " (perfect)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When ", (0,jsx_runtime.jsxs)(_components.span, {
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
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "y=0"
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
                  height: "0.6444em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "0"
              })]
            })]
          })]
        }), ": ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "J"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
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
                    children: "−"
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "h"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "w"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "x"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "J = -\\log(1 - h_w(x))"
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
                  marginRight: "0.0962em"
                },
                children: "J"
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
                className: "mord",
                children: "−"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
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
                  className: "mord mathnormal",
                  children: "h"
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
                              style: {
                                marginRight: "0.0269em"
                              },
                              children: "w"
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
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "x"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: "))"
              })]
            })]
          })]
        }), ". If ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "h"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "w"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "x"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "→"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "h_w(x) \\to 1"
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
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "h"
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
                              style: {
                                marginRight: "0.0269em"
                              },
                              children: "w"
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
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "→"
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
                children: "1"
              })]
            })]
          })]
        }), ", the loss ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    children: "→"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "∞"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\to \\infty"
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
                  height: "0.3669em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "→"
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
                  height: "0.4306em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "∞"
              })]
            })]
          })]
        }), ". If ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "h"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "w"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "x"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "→"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "h_w(x) \\to 0"
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
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "h"
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
                              style: {
                                marginRight: "0.0269em"
                              },
                              children: "w"
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
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "→"
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
                children: "0"
              })]
            })]
          })]
        }), ", the loss ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    children: "→"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\to 0"
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
                  height: "0.3669em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "→"
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
                children: "0"
              })]
            })]
          })]
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The gradient of cross-entropy with respect to weights has a surprisingly simple form:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsxs)(_components.mfrac, {
                  children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      mathvariant: "normal",
                      children: "∂"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "J"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      mathvariant: "normal",
                      children: "∂"
                    }), (0,jsx_runtime.jsxs)(_components.msub, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "w"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "j"
                      })]
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsxs)(_components.mfrac, {
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
                    children: "h"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "w"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "x"
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: "("
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: ")"
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "−"
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "y"
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: "("
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: ")"
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsxs)(_components.msubsup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "x"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "j"
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: "("
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: ")"
                    })]
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\frac{\\partial J}{\\partial w_j} = \\frac{1}{n} \\sum_{i=1}^{n} (h_w(x^{(i)}) - y^{(i)}) x_j^{(i)}"
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
                height: "1.4224em",
                verticalAlign: "-0.5423em"
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
                              className: "mord mtight",
                              style: {
                                marginRight: "0.0556em"
                              },
                              children: "∂"
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
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
                                        height: "0.3281em"
                                      },
                                      children: (0,jsx_runtime.jsxs)(_components.span, {
                                        style: {
                                          top: "-2.357em",
                                          marginLeft: "-0.0269em",
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
                              className: "mord mtight",
                              style: {
                                marginRight: "0.0556em"
                              },
                              children: "∂"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.0962em"
                              },
                              children: "J"
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
                        height: "0.5423em"
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
                height: "1.233em",
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
                children: "h"
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
                            style: {
                              marginRight: "0.0269em"
                            },
                            children: "w"
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
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "x"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.888em"
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
                              className: "mopen mtight",
                              children: "("
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mclose mtight",
                              children: ")"
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
                height: "1.4578em",
                verticalAlign: "-0.413em"
              }
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
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.888em"
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
                              className: "mopen mtight",
                              children: "("
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mclose mtight",
                              children: ")"
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
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "x"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "1.0448em"
                      },
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.4231em",
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
                            style: {
                              marginRight: "0.0572em"
                            },
                            children: "j"
                          })
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.2198em",
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
                              className: "mopen mtight",
                              children: "("
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
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
                        height: "0.413em"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is identical to the gradient of MSE for linear regression! The difference lies in ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "h"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "w"
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
                children: "h_w(x)"
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
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "h"
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
                            style: {
                              marginRight: "0.0269em"
                            },
                            children: "w"
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
      }), " being the sigmoid-transformed value instead of the linear value."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gradient-descent-for-logistic-regression",
      children: "Gradient Descent for Logistic Regression"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The update rule:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "w"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "j"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: ":"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "w"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "j"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "−"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "α"
                }), (0,jsx_runtime.jsxs)(_components.mfrac, {
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
                    children: "h"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "w"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "x"
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: "("
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: ")"
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "−"
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "y"
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: "("
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: ")"
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsxs)(_components.msubsup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "x"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "j"
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: "("
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: ")"
                    })]
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "w_j := w_j - \\alpha \\frac{1}{n} \\sum_{i=1}^{n} (h_w(x^{(i)}) - y^{(i)}) x_j^{(i)}"
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
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: ":="
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
                height: "0.8694em",
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
                height: "1.233em",
                verticalAlign: "-0.345em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0037em"
              },
              children: "α"
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
                children: "h"
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
                            style: {
                              marginRight: "0.0269em"
                            },
                            children: "w"
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
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "x"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.888em"
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
                              className: "mopen mtight",
                              children: "("
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mclose mtight",
                              children: ")"
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
                height: "1.4578em",
                verticalAlign: "-0.413em"
              }
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
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.888em"
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
                              className: "mopen mtight",
                              children: "("
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mclose mtight",
                              children: ")"
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
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "x"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsxs)(_components.span, {
                  className: "vlist-t vlist-t2",
                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-r",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "1.0448em"
                      },
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.4231em",
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
                            style: {
                              marginRight: "0.0572em"
                            },
                            children: "j"
                          })
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.2198em",
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
                              className: "mopen mtight",
                              children: "("
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
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
                        height: "0.413em"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With L2 regularization (Ridge), the cost function becomes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "J"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "w"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "−"
                }), (0,jsx_runtime.jsxs)(_components.mfrac, {
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
                }), (0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    fence: "true",
                    children: "["
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "y"
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "log"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "⁡"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "h"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "w"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "x"
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "+"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "y"
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
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
                    children: "−"
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "h"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "w"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "x"
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    fence: "true",
                    children: "]"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "+"
                }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "λ"
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "n"
                    })]
                  })]
                }), (0,jsx_runtime.jsxs)(_components.msubsup, {
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
                    children: "d"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.msubsup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "w"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "j"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "J(w) = -\\frac{1}{n} \\sum_{i=1}^{n} \\left[ y^{(i)} \\log(h_w(x^{(i)})) + (1 - y^{(i)}) \\log(1 - h_w(x^{(i)})) \\right] + \\frac{\\lambda}{2n} \\sum_{j=1}^{d} w_j^2"
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
                marginRight: "0.0962em"
              },
              children: "J"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0269em"
              },
              children: "w"
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
                height: "1.238em",
                verticalAlign: "-0.35em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "−"
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
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "minner",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mopen delimcenter",
                style: {
                  top: "0em"
                },
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "delimsizing size1",
                  children: "["
                })
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
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.888em"
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
                                className: "mopen mtight",
                                children: "("
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "i"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mclose mtight",
                                children: ")"
                              })]
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
                  marginRight: "0.1667em"
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
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "h"
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
                              style: {
                                marginRight: "0.0269em"
                              },
                              children: "w"
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
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "x"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.888em"
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
                                className: "mopen mtight",
                                children: "("
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "i"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mclose mtight",
                                children: ")"
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
                children: "))"
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
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.888em"
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
                                className: "mopen mtight",
                                children: "("
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "i"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mclose mtight",
                                children: ")"
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
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
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
                children: "−"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "h"
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
                              style: {
                                marginRight: "0.0269em"
                              },
                              children: "w"
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
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "x"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.888em"
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
                                className: "mopen mtight",
                                children: "("
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "i"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mclose mtight",
                                children: ")"
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
                children: "))"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose delimcenter",
                style: {
                  top: "0em"
                },
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "delimsizing size1",
                  children: "]"
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
                height: "1.4248em",
                verticalAlign: "-0.4358em"
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
                              className: "mord mtight",
                              children: "2"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "n"
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
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "mord mtight",
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "λ"
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
                        height: "0.989em"
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
                              children: "d"
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
                        height: "0.4358em"
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
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.8141em"
                      },
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.4413em",
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
                            style: {
                              marginRight: "0.0572em"
                            },
                            children: "j"
                          })
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.span, {
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
                        height: "0.3948em"
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
      }), ": ", (0,jsx_runtime.jsxs)(_components.span, {
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
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Precision"
      }), " (Positive Predictive Value): ", (0,jsx_runtime.jsxs)(_components.span, {
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
      }), " ? \"How many predicted positives are actually positive?\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recall"
      }), " (Sensitivity, True Positive Rate): ", (0,jsx_runtime.jsxs)(_components.span, {
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
      }), " ? \"How many actual positives did we catch?\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Specificity"
      }), " (True Negative Rate): ", (0,jsx_runtime.jsxs)(_components.span, {
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
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "F1-Score"
      }), ": ", (0,jsx_runtime.jsxs)(_components.span, {
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
                  children: "×"
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
                      children: "×"
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
                children: "2 \\times \\frac{Precision \\times Recall}{Precision + Recall}"
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
              children: "2"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mbin",
              children: "×"
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
                              children: "×"
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
      }), " ? harmonic mean of precision and recall"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "F-beta Score"
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
                }), (0,jsx_runtime.jsx)(_components.mn, {
                  children: "1"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "+"
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "β"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
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
                      children: "×"
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
                    children: [(0,jsx_runtime.jsxs)(_components.msup, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "β"
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "2"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "×"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
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
                children: "(1 + \\beta^2) \\frac{Precision \\times Recall}{\\beta^2 \\times Precision + Recall}"
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
                height: "1.3612em",
                verticalAlign: "-0.4811em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0528em"
                },
                children: "β"
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
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                style: {
                                  marginRight: "0.0528em"
                                },
                                children: "β"
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
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mbin mtight",
                              children: "×"
                            }), (0,jsx_runtime.jsx)(_components.span, {
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
                              children: "×"
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
      }), " ? weights recall by ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  children: "β"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\beta"
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
                height: "0.8889em",
                verticalAlign: "-0.1944em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0528em"
              },
              children: "β"
            })]
          })
        })]
      }), " times more than precision"]
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
      }), ": Train ", (0,jsx_runtime.jsxs)(_components.span, {
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
      }), " binary classifiers (one per class vs. all others). Predict the class with the highest confidence score. Used by sklearn's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LogisticRegression(multi_class='ovr')"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Softmax Regression (Multinomial Logistic Regression)"
      }), ": Generalizes the sigmoid to ", (0,jsx_runtime.jsxs)(_components.span, {
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
      }), " classes:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "P"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "y"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "k"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "normal",
                  children: "∣"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "x"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ";"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "W"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                  children: [(0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "e"
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsxs)(_components.msubsup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          mathvariant: "bold",
                          children: "w"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "k"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "T"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "bold",
                        children: "x"
                      })]
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
                        children: "K"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.msup, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "e"
                      }), (0,jsx_runtime.jsxs)(_components.mrow, {
                        children: [(0,jsx_runtime.jsxs)(_components.msubsup, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            mathvariant: "bold",
                            children: "w"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "j"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "T"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          mathvariant: "bold",
                          children: "x"
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "P(y = k | x; W) = \\frac{e^{\\mathbf{w}_k^T \\mathbf{x}}}{\\sum_{j=1}^{K} e^{\\mathbf{w}_j^T \\mathbf{x}}}"
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
              children: "P"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
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
                marginRight: "0.0315em"
              },
              children: "k"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "∣"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "x"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mpunct",
              children: ";"
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
              children: "W"
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
                height: "2.3306em",
                verticalAlign: "-1.0743em"
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
                        height: "1.2563em"
                      },
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-2.2479em"
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
                                        height: "1.3458em"
                                      },
                                      children: (0,jsx_runtime.jsxs)(_components.span, {
                                        style: {
                                          top: "-3.3458em",
                                          marginRight: "0.0714em"
                                        },
                                        children: [(0,jsx_runtime.jsx)(_components.span, {
                                          className: "pstrut",
                                          style: {
                                            height: "2.7344em"
                                          }
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "sizing reset-size3 size1 mtight",
                                          children: (0,jsx_runtime.jsxs)(_components.span, {
                                            className: "mord mtight",
                                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                                              className: "mord mtight",
                                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                                className: "mord mathbf mtight",
                                                style: {
                                                  marginRight: "0.016em"
                                                },
                                                children: "w"
                                              }), (0,jsx_runtime.jsx)(_components.span, {
                                                className: "msupsub",
                                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                                  className: "vlist-t vlist-t2",
                                                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                                                    className: "vlist-r",
                                                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                                                      className: "vlist",
                                                      style: {
                                                        height: "1.0281em"
                                                      },
                                                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                                                        style: {
                                                          top: "-2.1726em",
                                                          marginLeft: "-0.016em",
                                                          marginRight: "0.1em"
                                                        },
                                                        children: [(0,jsx_runtime.jsx)(_components.span, {
                                                          className: "pstrut",
                                                          style: {
                                                            height: "2.6833em"
                                                          }
                                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                                          className: "mord mathnormal mtight",
                                                          style: {
                                                            marginRight: "0.0572em"
                                                          },
                                                          children: "j"
                                                        })]
                                                      }), (0,jsx_runtime.jsxs)(_components.span, {
                                                        style: {
                                                          top: "-3.0281em",
                                                          marginRight: "0.1em"
                                                        },
                                                        children: [(0,jsx_runtime.jsx)(_components.span, {
                                                          className: "pstrut",
                                                          style: {
                                                            height: "2.6833em"
                                                          }
                                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                                          className: "mord mathnormal mtight",
                                                          style: {
                                                            marginRight: "0.1389em"
                                                          },
                                                          children: "T"
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
                                                        height: "0.7052em"
                                                      },
                                                      children: (0,jsx_runtime.jsx)(_components.span, {})
                                                    })
                                                  })]
                                                })
                                              })]
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mathbf mtight",
                                              children: "x"
                                            })]
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
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
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
                                        height: "1.2319em"
                                      },
                                      children: (0,jsx_runtime.jsxs)(_components.span, {
                                        style: {
                                          top: "-3.2319em",
                                          marginRight: "0.0714em"
                                        },
                                        children: [(0,jsx_runtime.jsx)(_components.span, {
                                          className: "pstrut",
                                          style: {
                                            height: "2.7767em"
                                          }
                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                          className: "sizing reset-size3 size1 mtight",
                                          children: (0,jsx_runtime.jsxs)(_components.span, {
                                            className: "mord mtight",
                                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                                              className: "mord mtight",
                                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                                className: "mord mathbf mtight",
                                                style: {
                                                  marginRight: "0.016em"
                                                },
                                                children: "w"
                                              }), (0,jsx_runtime.jsx)(_components.span, {
                                                className: "msupsub",
                                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                                  className: "vlist-t vlist-t2",
                                                  children: [(0,jsx_runtime.jsxs)(_components.span, {
                                                    className: "vlist-r",
                                                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                                                      className: "vlist",
                                                      style: {
                                                        height: "1.0873em"
                                                      },
                                                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                                                        style: {
                                                          top: "-2.208em",
                                                          marginLeft: "-0.016em",
                                                          marginRight: "0.1em"
                                                        },
                                                        children: [(0,jsx_runtime.jsx)(_components.span, {
                                                          className: "pstrut",
                                                          style: {
                                                            height: "2.6944em"
                                                          }
                                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                                          className: "mord mathnormal mtight",
                                                          style: {
                                                            marginRight: "0.0315em"
                                                          },
                                                          children: "k"
                                                        })]
                                                      }), (0,jsx_runtime.jsxs)(_components.span, {
                                                        style: {
                                                          top: "-3.0984em",
                                                          marginRight: "0.1em"
                                                        },
                                                        children: [(0,jsx_runtime.jsx)(_components.span, {
                                                          className: "pstrut",
                                                          style: {
                                                            height: "2.6944em"
                                                          }
                                                        }), (0,jsx_runtime.jsx)(_components.span, {
                                                          className: "mord mathnormal mtight",
                                                          style: {
                                                            marginRight: "0.1389em"
                                                          },
                                                          children: "T"
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
                                                        height: "0.4864em"
                                                      },
                                                      children: (0,jsx_runtime.jsx)(_components.span, {})
                                                    })
                                                  })]
                                                })
                                              })]
                                            }), (0,jsx_runtime.jsx)(_components.span, {
                                              className: "mord mathbf mtight",
                                              children: "x"
                                            })]
                                          })
                                        })]
                                      })
                                    })
                                  })
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
                        height: "1.0743em"
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
      children: ["The softmax function produces a valid probability distribution (", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mo, {
                  children: "∑"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "P"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "y"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "k"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.mn, {
                  children: "1"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\sum P(y=k) = 1"
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
              className: "mop op-symbol small-op",
              style: {
                position: "relative",
                top: "0em"
              },
              children: "∑"
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
              children: "P"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
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
                marginRight: "0.0315em"
              },
              children: "k"
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
              children: "1"
            })]
          })]
        })]
      }), ", each probability ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mo, {
                  children: "∈"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "["
                }), (0,jsx_runtime.jsx)(_components.mn, {
                  children: "0"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ","
                }), (0,jsx_runtime.jsx)(_components.mn, {
                  children: "1"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "]"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\in [0, 1]"
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
                height: "0.5782em",
                verticalAlign: "-0.0391em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: "∈"
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
              className: "mopen",
              children: "["
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
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "1"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: "]"
            })]
          })]
        })]
      }), ")."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The loss function for softmax regression is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Categorical Cross-Entropy"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "J"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "W"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "−"
                }), (0,jsx_runtime.jsxs)(_components.mfrac, {
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
                }), (0,jsx_runtime.jsxs)(_components.msubsup, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    children: "∑"
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "k"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "="
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "K"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mn, {
                  mathvariant: "bold",
                  children: "1"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "{"
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "y"
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: "("
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: ")"
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "k"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "}"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "log"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "⁡"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "P"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "y"
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: "("
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: ")"
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "k"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "normal",
                  children: "∣"
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "x"
                  }), (0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: "("
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      stretchy: "false",
                      children: ")"
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  separator: "true",
                  children: ";"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "W"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "J(W) = -\\frac{1}{n} \\sum_{i=1}^{n} \\sum_{k=1}^{K} \\mathbf{1}\\{y^{(i)} = k\\} \\log P(y^{(i)} = k | x^{(i)}; W)"
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
                marginRight: "0.0962em"
              },
              children: "J"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.1389em"
              },
              children: "W"
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
                height: "1.3262em",
                verticalAlign: "-0.345em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "−"
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
                              style: {
                                marginRight: "0.0315em"
                              },
                              children: "k"
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
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathbf",
              children: "1"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "{"
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
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.888em"
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
                              className: "mopen mtight",
                              children: "("
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mclose mtight",
                              children: ")"
                            })]
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
                height: "1.138em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0315em"
              },
              children: "k"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: "}"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.1667em"
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
              className: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.1389em"
              },
              children: "P"
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
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.888em"
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
                              className: "mopen mtight",
                              children: "("
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mclose mtight",
                              children: ")"
                            })]
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
                height: "1.138em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0315em"
              },
              children: "k"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "∣"
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "x"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "msupsub",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "vlist-t",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-r",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist",
                      style: {
                        height: "0.888em"
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
                              className: "mopen mtight",
                              children: "("
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mathnormal mtight",
                              children: "i"
                            }), (0,jsx_runtime.jsx)(_components.span, {
                              className: "mclose mtight",
                              children: ")"
                            })]
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mpunct",
              children: ";"
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
              children: "W"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "regularization-for-logistic-regression",
      children: "Regularization for Logistic Regression"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Same principles as linear regression:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "L2 (Ridge)"
        }), ": Adds ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.mfrac, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "λ"
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mn, {
                        children: "2"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "∑"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "∥"
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "w"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "j"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      mathvariant: "normal",
                      children: "∥"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\frac{\\lambda}{2n} \\sum \\|w_j\\|^2"
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
                  height: "1.2251em",
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
                                className: "mord mtight",
                                children: "2"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "n"
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
                            children: (0,jsx_runtime.jsx)(_components.span, {
                              className: "mord mtight",
                              children: (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "λ"
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
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mop op-symbol small-op",
                style: {
                  position: "relative",
                  top: "0em"
                },
                children: "∑"
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
                          height: "0.2861em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord",
                  children: "∥"
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
        }), " ? prevents any single feature from dominating"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "L1 (Lasso)"
        }), ": Adds ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.mfrac, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "λ"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "n"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "∑"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "∥"
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "w"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "j"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "∥"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\frac{\\lambda}{n} \\sum \\|w_j\\|"
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
                  height: "1.2251em",
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
                                className: "mord mathnormal mtight",
                                children: "λ"
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
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mop op-symbol small-op",
                style: {
                  position: "relative",
                  top: "0em"
                },
                children: "∑"
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
                          height: "0.2861em"
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
            })
          })]
        }), " ? drives irrelevant feature weights to zero"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  children: "C"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "C"
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
              children: "C"
            })]
          })
        })]
      }), " parameter in sklearn's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LogisticRegression"
      }), " is the inverse of regularization strength: ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "C"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsx)(_components.mn, {
                  children: "1"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "normal",
                  children: "/"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "λ"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "C = 1/\\lambda"
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
                marginRight: "0.0715em"
              },
              children: "C"
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
              className: "mord",
              children: "1/"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "λ"
            })]
          })]
        })]
      }), ". Smaller ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  children: "C"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "C"
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
              children: "C"
            })]
          })
        })]
      }), " = stronger regularization."]
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
        }), " The decision boundary is defined by ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      mathvariant: "bold",
                      children: "w"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "T"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "bold",
                    children: "x"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\mathbf{w}^T\\mathbf{x} = 0"
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
                  height: "0.8413em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathbf",
                  style: {
                    marginRight: "0.016em"
                  },
                  children: "w"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8413em"
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
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.1389em"
                              },
                              children: "T"
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathbf",
                children: "x"
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
                children: "0"
              })]
            })]
          })]
        }), "; changing the classification threshold (e.g., from 0.5 to 0.3) alters precision and recall without retraining the model."]
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
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Regularize when ", (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex",
            children: [(0,jsx_runtime.jsx)(_components.span, {
              className: "katex-mathml",
              children: (0,jsx_runtime.jsx)(_components.math, {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                children: (0,jsx_runtime.jsxs)(_components.semantics, {
                  children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "d"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      children: "≫"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "n"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.annotation, {
                    encoding: "application/x-tex",
                    children: "d \\gg n"
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
                    height: "0.7335em",
                    verticalAlign: "-0.0391em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mspace",
                  style: {
                    marginRight: "0.2778em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mrel",
                  children: "≫"
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
                    height: "0.4306em"
                  }
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "n"
                })]
              })]
            })]
          })]
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
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "σ"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "z"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "1"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "/"
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
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "z"
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\sigma(z) = 1/(1 + e^{-z})"
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
                      marginRight: "0.0359em"
                    },
                    children: "σ"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.044em"
                    },
                    children: "z"
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
                      height: "1em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "1/"
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
                      height: "1.0213em",
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
                              height: "0.7713em"
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
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    style: {
                                      marginRight: "0.044em"
                                    },
                                    children: "z"
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
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S-shaped squashing function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probability mapping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Softmax Function"
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
                        children: "P"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "k"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsxs)(_components.msup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "e"
                        }), (0,jsx_runtime.jsxs)(_components.msub, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "z"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "k"
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "/"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "∑"
                      }), (0,jsx_runtime.jsxs)(_components.msup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "e"
                        }), (0,jsx_runtime.jsxs)(_components.msub, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "z"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "j"
                          })]
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "P(k) = e^{z_k} / \\sum e^{z_j}"
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
                    children: "P"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0315em"
                    },
                    children: "k"
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
                      height: "1em",
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
                              height: "0.6644em"
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
                                  children: (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
                                      style: {
                                        marginRight: "0.044em"
                                      },
                                      children: "z"
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
                                                marginLeft: "-0.044em",
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
                                                    marginRight: "0.0315em"
                                                  },
                                                  children: "k"
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
                            })
                          })
                        })
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "/"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mop op-symbol small-op",
                    style: {
                      position: "relative",
                      top: "0em"
                    },
                    children: "∑"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
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
                              height: "0.6644em"
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
                                  children: (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
                                      style: {
                                        marginRight: "0.044em"
                                      },
                                      children: "z"
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
                                                marginLeft: "-0.044em",
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
                                  })
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sum of outputs = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Digit recognition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-Entropy Loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "∑"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "y"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "log"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⁡"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsxs)(_components.mover, {
                        accent: "true",
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "y"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "^"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "-\\sum y\\log(\\hat{y})"
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
                      height: "1em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mop op-symbol small-op",
                    style: {
                      position: "relative",
                      top: "0em"
                    },
                    children: "∑"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
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
                      marginRight: "0.1667em"
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
                    className: "mclose",
                    children: ")"
                  })]
                })
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convex for classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary classification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hinge Loss"
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
                        children: "max"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⁡"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "0"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        separator: "true",
                        children: ","
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "1"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "y"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⋅"
                      }), (0,jsx_runtime.jsxs)(_components.mover, {
                        accent: "true",
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "y"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "^"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\max(0, 1 - y \\cdot \\hat{y})"
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
                    className: "mop",
                    children: "max"
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
                      height: "0.6389em",
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
                  }), (0,jsx_runtime.jsx)(_components.span, {
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
                    className: "mclose",
                    children: ")"
                  })]
                })]
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Used by SVM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max-margin classification"
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
                      children: "TP/(TP + FP)"
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
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low FP cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spam detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recall"
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
                      children: "TP/(TP + FN)"
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
            })
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
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "σ"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "z"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                        children: [(0,jsx_runtime.jsx)(_components.mn, {
                          children: "1"
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mn, {
                            children: "1"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "+"
                          }), (0,jsx_runtime.jsxs)(_components.msup, {
                            children: [(0,jsx_runtime.jsx)(_components.mi, {
                              children: "e"
                            }), (0,jsx_runtime.jsxs)(_components.mrow, {
                              children: [(0,jsx_runtime.jsx)(_components.mo, {
                                children: "−"
                              }), (0,jsx_runtime.jsx)(_components.mi, {
                                children: "z"
                              })]
                            })]
                          })]
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\sigma(z) = \\frac{1}{1 + e^{-z}}"
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
                      marginRight: "0.0359em"
                    },
                    children: "σ"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.044em"
                    },
                    children: "z"
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
                      height: "1.2484em",
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
                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                  className: "mord mtight",
                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mtight",
                                    children: "1"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mbin mtight",
                                    children: "+"
                                  }), (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
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
                                              height: "0.7027em"
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
                                                children: (0,jsx_runtime.jsxs)(_components.span, {
                                                  className: "mord mtight",
                                                  children: [(0,jsx_runtime.jsx)(_components.span, {
                                                    className: "mord mtight",
                                                    children: "−"
                                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                                    className: "mord mathnormal mtight",
                                                    style: {
                                                      marginRight: "0.044em"
                                                    },
                                                    children: "z"
                                                  })]
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
            children: "Hypothesis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "h"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "w"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "x"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "σ"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsxs)(_components.msup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          mathvariant: "bold",
                          children: "w"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "T"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "bold",
                        children: "x"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "h_w(x) = \\sigma(\\mathbf{w}^T\\mathbf{x})"
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
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      children: "h"
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
                                  style: {
                                    marginRight: "0.0269em"
                                  },
                                  children: "w"
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
                      height: "1.0913em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0359em"
                    },
                    children: "σ"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathbf",
                      style: {
                        marginRight: "0.016em"
                      },
                      children: "w"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-t",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8413em"
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
                                  className: "mord mathnormal mtight",
                                  style: {
                                    marginRight: "0.1389em"
                                  },
                                  children: "T"
                                })
                              })]
                            })
                          })
                        })
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathbf",
                    children: "x"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: ")"
                  })]
                })]
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Log-Odds"
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
                        children: "log"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⁡"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "p"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "/"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "1"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "p"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsxs)(_components.msup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          mathvariant: "bold",
                          children: "w"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "T"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "bold",
                        children: "x"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\log(p/(1-p)) = \\mathbf{w}^T\\mathbf{x}"
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
                    className: "mord mathnormal",
                    children: "p"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "/"
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
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "p"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: "))"
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
                      height: "0.8413em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathbf",
                      style: {
                        marginRight: "0.016em"
                      },
                      children: "w"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-t",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8413em"
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
                                  className: "mord mathnormal mtight",
                                  style: {
                                    marginRight: "0.1389em"
                                  },
                                  children: "T"
                                })
                              })]
                            })
                          })
                        })
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathbf",
                    children: "x"
                  })]
                })]
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Decision Boundary"
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
                          mathvariant: "bold",
                          children: "w"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "T"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "bold",
                        children: "x"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "0"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\mathbf{w}^T\\mathbf{x} = 0"
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
                      height: "0.8413em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathbf",
                      style: {
                        marginRight: "0.016em"
                      },
                      children: "w"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-t",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.8413em"
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
                                  className: "mord mathnormal mtight",
                                  style: {
                                    marginRight: "0.1389em"
                                  },
                                  children: "T"
                                })
                              })]
                            })
                          })
                        })
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathbf",
                    children: "x"
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
                    children: "0"
                  })]
                })]
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-Entropy Loss"
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
                        children: "J"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "w"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                        children: [(0,jsx_runtime.jsx)(_components.mn, {
                          children: "1"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "n"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "∑"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "["
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "y"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "log"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⁡"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsxs)(_components.mover, {
                        accent: "true",
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "y"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "^"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "+"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "1"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "y"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
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
                        children: "−"
                      }), (0,jsx_runtime.jsxs)(_components.mover, {
                        accent: "true",
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "y"
                        }), (0,jsx_runtime.jsx)(_components.mo, {
                          children: "^"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "]"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "J(w) = -\\frac{1}{n}\\sum[y\\log(\\hat{y}) + (1-y)\\log(1-\\hat{y})]"
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
                      marginRight: "0.0962em"
                    },
                    children: "J"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0269em"
                    },
                    children: "w"
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
                      height: "1.1901em",
                      verticalAlign: "-0.345em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "−"
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
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mop op-symbol small-op",
                    style: {
                      position: "relative",
                      top: "0em"
                    },
                    children: "∑"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "["
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0359em"
                    },
                    children: "y"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
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
                      height: "1em",
                      verticalAlign: "-0.25em"
                    }
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
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0359em"
                    },
                    children: "y"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
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
                  }), (0,jsx_runtime.jsx)(_components.span, {
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
                    className: "mclose",
                    children: ")]"
                  })]
                })]
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gradient Update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "w"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "j"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: ":"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "w"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "j"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "α"
                      }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                        children: [(0,jsx_runtime.jsx)(_components.mn, {
                          children: "1"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "n"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "∑"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "h"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "w"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsxs)(_components.msup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "x"
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: "("
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "i"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: ")"
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      }), (0,jsx_runtime.jsxs)(_components.msup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "y"
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: "("
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "i"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: ")"
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      }), (0,jsx_runtime.jsxs)(_components.msubsup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "x"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "j"
                        }), (0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: "("
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "i"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            stretchy: "false",
                            children: ")"
                          })]
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "w_j := w_j - \\alpha \\frac{1}{n}\\sum(h_w(x^{(i)}) - y^{(i)})x_j^{(i)}"
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
                      marginRight: "0.2778em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mrel",
                    children: ":="
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
                      height: "0.8694em",
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
                      height: "1.233em",
                      verticalAlign: "-0.345em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0037em"
                    },
                    children: "α"
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
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mop op-symbol small-op",
                    style: {
                      position: "relative",
                      top: "0em"
                    },
                    children: "∑"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      children: "h"
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
                                  style: {
                                    marginRight: "0.0269em"
                                  },
                                  children: "w"
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
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      children: "x"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-t",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.888em"
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
                                    className: "mopen mtight",
                                    children: "("
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "i"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mclose mtight",
                                    children: ")"
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
                      height: "1.4578em",
                      verticalAlign: "-0.413em"
                    }
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
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist-t",
                        children: (0,jsx_runtime.jsx)(_components.span, {
                          className: "vlist-r",
                          children: (0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.888em"
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
                                    className: "mopen mtight",
                                    children: "("
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "i"
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mclose mtight",
                                    children: ")"
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
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      children: "x"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "1.0448em"
                            },
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.4231em",
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
                                  style: {
                                    marginRight: "0.0572em"
                                  },
                                  children: "j"
                                })
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.2198em",
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
                                    className: "mopen mtight",
                                    children: "("
                                  }), (0,jsx_runtime.jsx)(_components.span, {
                                    className: "mord mathnormal mtight",
                                    children: "i"
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
                              height: "0.413em"
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
            children: "Softmax (Multi-class)"
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
                        children: "P"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "y"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "k"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsxs)(_components.msup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "e"
                        }), (0,jsx_runtime.jsxs)(_components.msub, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "z"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "k"
                          })]
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "/"
                      }), (0,jsx_runtime.jsxs)(_components.msubsup, {
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
                          children: "K"
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.msup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "e"
                        }), (0,jsx_runtime.jsxs)(_components.msub, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "z"
                          }), (0,jsx_runtime.jsx)(_components.mi, {
                            children: "j"
                          })]
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "P(y=k) = e^{z_k} / \\sum_{j=1}^{K} e^{z_j}"
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
                    children: "P"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
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
                      marginRight: "0.0315em"
                    },
                    children: "k"
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
                      height: "1.417em",
                      verticalAlign: "-0.4358em"
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
                              height: "0.6644em"
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
                                  children: (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
                                      style: {
                                        marginRight: "0.044em"
                                      },
                                      children: "z"
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
                                                marginLeft: "-0.044em",
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
                                                    marginRight: "0.0315em"
                                                  },
                                                  children: "k"
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
                            })
                          })
                        })
                      })
                    })]
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "/"
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
                              height: "0.4358em"
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
                              height: "0.6644em"
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
                                  children: (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "mord mtight",
                                    children: [(0,jsx_runtime.jsx)(_components.span, {
                                      className: "mord mathnormal mtight",
                                      style: {
                                        marginRight: "0.044em"
                                      },
                                      children: "z"
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
                                                marginLeft: "-0.044em",
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
                                  })
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
            children: "Accuracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.span, {
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
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "T"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "o"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "t"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "a"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "l"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "(TP + TN) / Total"
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
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.1389em"
                    },
                    children: "T"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "o"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "t"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "a"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0197em"
                    },
                    children: "l"
                  })]
                })]
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
                      children: "TP / (TP + FP)"
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
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recall"
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
                      children: "TP / (TP + FN)"
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
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "P"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⋅"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "R"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "/"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "P"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "+"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "R"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "2 \\cdot P \\cdot R / (P + R)"
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
                      height: "0.6833em"
                    }
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
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0077em"
                    },
                    children: "R"
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
                      marginRight: "0.0077em"
                    },
                    children: "R"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: ")"
                  })]
                })]
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUC"
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
                          children: "∫"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "0"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "1"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "T"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "P"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "R"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "F"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "P"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "R"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      }), (0,jsx_runtime.jsx)(_components.mtext, {
                        children: " "
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "d"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "F"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "P"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "R"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\int_0^1 TPR(FPR) \\, d(FPR)"
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
                      height: "1.3648em",
                      verticalAlign: "-0.3558em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mop",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mop op-symbol small-op",
                      style: {
                        marginRight: "0.1945em",
                        position: "relative",
                        top: "-0.0006em"
                      },
                      children: "∫"
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsxs)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "1.009em"
                            },
                            children: [(0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.3442em",
                                marginLeft: "-0.1945em",
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
                                  children: "0"
                                })
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-3.2579em",
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
                                  children: "1"
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
                              height: "0.3558em"
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
                    children: "T"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.1389em"
                    },
                    children: "P"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0077em"
                    },
                    children: "R"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
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
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0077em"
                    },
                    children: "R"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "d"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
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
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0077em"
                    },
                    children: "R"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: ")"
                  })]
                })
              })]
            })
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
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The sigmoid function ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "σ"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "z"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\sigma(z)"
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
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0359em"
                },
                children: "σ"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.044em"
                },
                children: "z"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })
          })]
        }), " outputs a value of 0.5 when:\nA) ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "z"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "z = 0"
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
                style: {
                  marginRight: "0.044em"
                },
                children: "z"
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
                children: "0"
              })]
            })]
          })]
        }), "\nB) ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "z"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "z = 1"
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
                style: {
                  marginRight: "0.044em"
                },
                children: "z"
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
                children: "1"
              })]
            })]
          })]
        }), "\nC) ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "z"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "∞"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "z = \\infty"
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
                style: {
                  marginRight: "0.044em"
                },
                children: "z"
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
                  height: "0.4306em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "∞"
              })]
            })]
          })]
        }), "\nD) ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "z"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "∞"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "z = -\\infty"
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
                style: {
                  marginRight: "0.044em"
                },
                children: "z"
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
                  height: "0.6667em",
                  verticalAlign: "-0.0833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "−"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "∞"
              })]
            })]
          })]
        })]
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
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between the model's output ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "h"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "w"
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
                  children: "h_w(x)"
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
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "h"
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
                              style: {
                                marginRight: "0.0269em"
                              },
                              children: "w"
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
        }), " and the final prediction?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "h"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "w"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "x"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.5"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "h_w(x) = 0.5"
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
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "h"
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
                              style: {
                                marginRight: "0.0269em"
                              },
                              children: "w"
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
                children: "0.5"
              })]
            })]
          })]
        }), " for a specific input, what can you say about that point in relation to the decision boundary?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does the cross-entropy loss function behave when the predicted probability is 0.99 for a sample where ", (0,jsx_runtime.jsxs)(_components.span, {
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
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "y=1"
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
                  height: "0.6444em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "1"
              })]
            })]
          })]
        }), "?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the difference between precision and recall. Give a scenario where each is the more important metric."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Calculate the sigmoid value for ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "z"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2.2"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "z = -2.2"
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
                style: {
                  marginRight: "0.044em"
                },
                children: "z"
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
                  height: "0.7278em",
                  verticalAlign: "-0.0833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "−"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "2.2"
              })]
            })]
          })]
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Given ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "w"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "0"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "3"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "w_0 = -3"
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
                  height: "0.5806em",
                  verticalAlign: "-0.15em"
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
                          height: "0.3011em"
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
                              children: "0"
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
                  height: "0.7278em",
                  verticalAlign: "-0.0833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "−"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "3"
              })]
            })]
          })]
        }), " and ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "w"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1.5"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "w_1 = 1.5"
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
                  height: "0.5806em",
                  verticalAlign: "-0.15em"
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
                          height: "0.3011em"
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
                              children: "1"
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
                  height: "0.6444em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "1.5"
              })]
            })]
          })]
        }), ", find the value of ", (0,jsx_runtime.jsxs)(_components.span, {
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
        }), " that defines the decision boundary."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compute the cross-entropy loss for a single training example where ", (0,jsx_runtime.jsxs)(_components.span, {
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
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "y=1"
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
                  height: "0.6444em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "1"
              })]
            })]
          })]
        }), " and ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "h"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "w"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "x"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.8"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "h_w(x) = 0.8"
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
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "h"
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
                              style: {
                                marginRight: "0.0269em"
                              },
                              children: "w"
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
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A classifier produces TP=80, FP=20, FN=10, TN=90. Calculate precision, recall, F1-score, and accuracy."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Given precision = 0.9 and recall = 0.6, calculate the F1-score and the F2-score (", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "β"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\beta=2"
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
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0528em"
                },
                children: "β"
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
                children: "2"
              })]
            })]
          })]
        }), ", weighting recall double)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Show that the derivative of the sigmoid function ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "σ"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "z"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\sigma(z)"
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
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0359em"
                },
                children: "σ"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.044em"
                },
                children: "z"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })
          })]
        }), " can be expressed as ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "σ"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "z"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "σ"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "z"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\sigma(z)(1 - \\sigma(z))"
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
                  marginRight: "0.0359em"
                },
                children: "σ"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.044em"
                },
                children: "z"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
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
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0359em"
                },
                children: "σ"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.044em"
                },
                children: "z"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: "))"
              })]
            })]
          })]
        }), ". How does this property simplify the gradient calculation in backpropagation? Then, prove that the gradient of the binary cross-entropy loss with respect to ", (0,jsx_runtime.jsxs)(_components.span, {
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
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "j"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "w_j"
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
        }), " is ", (0,jsx_runtime.jsxs)(_components.span, {
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
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "∑"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsxs)(_components.mover, {
                      accent: "true",
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "y"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "^"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "y"
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsxs)(_components.msubsup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "x"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "j"
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\frac{1}{n}\\sum(\\hat{y}^{(i)} - y^{(i)})x_j^{(i)}"
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
                  height: "1.233em",
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
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mop op-symbol small-op",
                style: {
                  position: "relative",
                  top: "0em"
                },
                children: "∑"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
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
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.888em"
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
                                className: "mopen mtight",
                                children: "("
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "i"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mclose mtight",
                                children: ")"
                              })]
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
                  height: "1.4578em",
                  verticalAlign: "-0.413em"
                }
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
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.888em"
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
                                className: "mopen mtight",
                                children: "("
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "i"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mclose mtight",
                                children: ")"
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
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "x"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "1.0448em"
                        },
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.4231em",
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
                              style: {
                                marginRight: "0.0572em"
                              },
                              children: "j"
                            })
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-3.2198em",
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
                                className: "mopen mtight",
                                children: "("
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "i"
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
                          height: "0.413em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
              })]
            })]
          })]
        }), ", showing each step of the chain rule."]
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