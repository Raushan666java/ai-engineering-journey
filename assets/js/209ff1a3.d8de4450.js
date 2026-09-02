"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[66303],{

/***/ 68752
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_artificial_intelligence_09_machine_learning_md_209_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-artificial-intelligence-09-machine-learning-md-209.json
const site_docs_courses_artificial_intelligence_09_machine_learning_md_209_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/artificial-intelligence/09-machine-learning","title":"Chapter 9: Machine Learning: Learning from Examples","description":"Previous Reasoning Under Uncertainty | Next Probabilistic Reasoning","source":"@site/docs/courses/artificial-intelligence/09-machine-learning.md","sourceDirName":"courses/artificial-intelligence","slug":"/artificial-intelligence/09-machine-learning","permalink":"/ai-engineering-journey/artificial-intelligence/09-machine-learning","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"id":"09-machine-learning","slug":"/artificial-intelligence/09-machine-learning","title":"Chapter 9: Machine Learning: Learning from Examples","sidebar_label":"Chapter 9: Machine Learning: Learning from Examples","sidebar_position":16},"sidebar":"course-artificial-intelligence","previous":{"title":"Chapter 8: Uncertainty and Probabilistic Reasoning","permalink":"/ai-engineering-journey/artificial-intelligence/08-uncertainty"},"next":{"title":"Chapter 9: Reasoning Under Uncertainty","permalink":"/ai-engineering-journey/artificial-intelligence/09-uncertainty"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/artificial-intelligence/09-machine-learning.md


const frontMatter = {
	id: '09-machine-learning',
	slug: '/artificial-intelligence/09-machine-learning',
	title: 'Chapter 9: Machine Learning: Learning from Examples',
	sidebar_label: 'Chapter 9: Machine Learning: Learning from Examples',
	sidebar_position: 16
};
const contentTitle = 'Chapter 9: Machine Learning: Learning from Examples';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Machine Learning Matters",
  "id": "why-machine-learning-matters",
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
  "value": "Types of Machine Learning — Deep Dive",
  "id": "types-of-machine-learning--deep-dive",
  "level": 2
}, {
  "value": "1. Supervised Learning",
  "id": "1-supervised-learning",
  "level": 3
}, {
  "value": "2. Unsupervised Learning",
  "id": "2-unsupervised-learning",
  "level": 3
}, {
  "value": "3. Reinforcement Learning",
  "id": "3-reinforcement-learning",
  "level": 3
}, {
  "value": "Inductive Learning",
  "id": "inductive-learning",
  "level": 3
}, {
  "value": "Decision Trees",
  "id": "decision-trees",
  "level": 3
}, {
  "value": "Generalization, Overfitting, and Underfitting",
  "id": "generalization-overfitting-and-underfitting",
  "level": 3
}, {
  "value": "Supervised vs Unsupervised vs Reinforcement Learning",
  "id": "supervised-vs-unsupervised-vs-reinforcement-learning",
  "level": 2
}, {
  "value": "Bias-Variance Tradeoff",
  "id": "bias-variance-tradeoff",
  "level": 2
}, {
  "value": "Cross-Validation",
  "id": "cross-validation",
  "level": 2
}, {
  "value": "k-Fold Cross-Validation",
  "id": "k-fold-cross-validation",
  "level": 3
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "Model Selection",
  "id": "model-selection",
  "level": 3
}, {
  "value": "Regularization",
  "id": "regularization",
  "level": 3
}, {
  "value": "Feature Engineering",
  "id": "feature-engineering",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "1. Recommendation Systems (Netflix)",
  "id": "1-recommendation-systems-netflix",
  "level": 3
}, {
  "value": "2. Fraud Detection (Banking)",
  "id": "2-fraud-detection-banking",
  "level": 3
}, {
  "value": "3. Image Classification (Healthcare / Autonomous Vehicles)",
  "id": "3-image-classification-healthcare--autonomous-vehicles",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Decision Tree for &quot;Should I Play Tennis?&quot;",
  "id": "example-1-decision-tree-for-should-i-play-tennis",
  "level": 3
}, {
  "value": "Example 2: Linear Regression for Housing Prices",
  "id": "example-2-linear-regression-for-housing-prices",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
}, {
  "value": "Quick Reference — Key ML Concepts",
  "id": "quick-reference--key-ml-concepts",
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
    img: "img",
    li: "li",
    math: "math",
    mfrac: "mfrac",
    mi: "mi",
    mn: "mn",
    mo: "mo",
    mover: "mover",
    mrow: "mrow",
    msub: "msub",
    msubsup: "msubsup",
    msup: "msup",
    mtext: "mtext",
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
        id: "chapter-9-machine-learning-learning-from-examples",
        children: "Chapter 9: Machine Learning: Learning from Examples"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Previous:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/09-uncertainty",
        children: "Chapter 9: Reasoning Under Uncertainty"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/10-probabilistic-reasoning",
        children: "Chapter 10: Probabilistic Reasoning"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the core goals of Machine Learning and the different types of learning (Supervised, Unsupervised, Reinforcement)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the concept of \"induction\" and the importance of inductive bias."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the Decision Tree learning algorithm and the use of Information Gain."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Discuss the \"Bias-Variance Tradeoff\" and its impact on model generalization."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the methodology for evaluating models using training, validation, and test sets."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-machine-learning-matters",
      children: "Why Machine Learning Matters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A child learning to recognize animals does not need an explicit rulebook. Instead, the child is shown examples — \"this furry animal that barks is a dog,\" \"this feathered animal that quacks is a duck.\" Over time, the child's brain identifies patterns (four legs, fur, bark → dog) and uses them to classify never-before-seen animals correctly. Machine learning algorithms follow the exact same principle: instead of hard-coding rules, we feed data and let the algorithm discover the underlying patterns."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why this shifts everything:"
      }), " Traditional programming requires a human to write every rule. Machine Learning replaces manual rule-writing with automated pattern discovery — enabling systems that improve with experience, adapt to new data, and solve problems too complex for explicit rules (face recognition, speech transcription, game playing at superhuman level)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Topics"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Terms"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "What is ML?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supervised, unsupervised, reinforcement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P (performance), T (task), E (experience)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Types of Learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classification, regression, clustering, RL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Label, feature, target, reward"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inductive Learning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hypothesis, inductive bias"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Occam's Razor, hypothesis space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Decision Trees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entropy, information gain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ID3, splitting criterion, pruning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model Evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-validation, train/val/test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overfitting, underfitting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bias-Variance Tradeoff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Underfitting, overfitting, generalization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bias, variance, irreducible error"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-World Applications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recommendation, fraud, vision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deployment pipeline"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[ML Definition] --> B[Supervised Learning]\n    A --> C[Unsupervised Learning]\n    A --> D[Reinforcement Learning]\n    B --> E[Decision Trees]\n    E --> F[Entropy]\n    E --> G[Information Gain]\n    B --> H[Regression]\n    B --> I[Evaluation]\n    I --> J[Cross-Validation]\n    I --> K[Bias-Variance Tradeoff]\n    K --> L[Underfitting vs Overfitting]\n    B --> M[Real-World Apps]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/artificial-intelligence/ch09-machine-learning.png",
        alt: "Machine Learning"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Machine learning algorithms improve performance on a task with experience — the key challenge is generalizing from finite training data to unseen examples."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Decision trees with information gain naturally handle mixed data types and produce interpretable models. However, they can overfit badly — use pruning (min_samples_split, max_depth) or switch to ensemble methods (Random Forest) for better generalization."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-machine-learning",
      children: "What is Machine Learning?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Machine Learning (ML) is the study of algorithms that improve their performance ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "P"
      }), " at some task ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "T"
      }), " with experience ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "E"
      }), " (Tom Mitchell, 1997)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Supervised Learning"
        }), ": The agent learns a function from input-output pairs (labels provided)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unsupervised Learning"
        }), ": The agent learns patterns in the data without explicit labels (e.g., clustering)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reinforcement Learning"
        }), ": The agent learns by interacting with an environment and receiving rewards or penalties."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "types-of-machine-learning--deep-dive",
      children: "Types of Machine Learning — Deep Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-supervised-learning",
      children: "1. Supervised Learning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A tutor showing a student labeled flashcards — \"this is a cat\" (image + label). After enough examples, the student can identify cats in new photos."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " The algorithm learns a mapping function ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "f"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: ":"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "X"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "→"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "Y"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "f: X \\to Y"
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
                marginRight: "0.1076em"
              },
              children: "f"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mrel",
              children: ":"
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
                height: "0.6833em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0785em"
              },
              children: "X"
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
                height: "0.6833em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.2222em"
              },
              children: "Y"
            })]
          })]
        })]
      }), " from input features ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  children: "X"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "X"
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
                marginRight: "0.0785em"
              },
              children: "X"
            })]
          })
        })]
      }), " to output labels ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  children: "Y"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "Y"
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
                marginRight: "0.2222em"
              },
              children: "Y"
            })]
          })
        })]
      }), " using a labeled training dataset."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps (Generic Supervised Learning):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Collect labeled dataset ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "{"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "x"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "y"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "x"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "y"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "."
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "."
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "."
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "x"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "n"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "y"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "n"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "}"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\{(x_1, y_1), (x_2, y_2), ..., (x_n, y_n)\\}"
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
                children: "{("
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
                          height: "0.3011em"
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
                className: "mclose",
                children: ")"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
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
                          height: "0.3011em"
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
                className: "mclose",
                children: ")"
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
                children: "..."
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
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
                              children: "n"
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
                          height: "0.1514em"
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
                              children: "n"
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
                children: ")}"
              })]
            })
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Split data into training, validation, and test sets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose a model family (e.g., linear regression, decision tree, SVM)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Define a loss function ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "L"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "y"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
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
                  children: "L(y, \\hat{y})"
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
                children: "L"
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
                className: "mpunct",
                children: ","
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
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
            })
          })]
        }), " that measures prediction error"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Train the model by minimizing the loss on training data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tune hyperparameters using validation set performance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate final model on the held-out test set"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION SupervisedLearning(Dataset D)\n    Split D into D_train, D_val, D_test\n    Initialize model with hyperparameters θ\n    FOR epoch = 1 to max_epochs:\n        FOR each batch (X_batch, y_batch) in D_train:\n            y_pred = model.predict(X_batch)\n            loss = loss_function(y_batch, y_pred)\n            gradients = compute_gradients(loss)\n            θ = θ - learning_rate * gradients\n        val_loss = evaluate(model, D_val)\n        IF val_loss not improved for patience epochs:\n            BREAK\n    test_loss = evaluate(model, D_test)\n    RETURN model\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Subtypes:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loss Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Algorithm"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discrete class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-entropy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decision Tree, Logistic Regression"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Regression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mean Squared Error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear Regression, SVR"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation — k-Nearest Neighbors:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from sklearn.neighbors import KNeighborsClassifier\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import accuracy_score\nimport numpy as np\n\n# Sample dataset: [height, weight] → species\nX = np.array([[150, 50], [160, 55], [170, 65],\n              [140, 45], [180, 75], [155, 52]])\ny = np.array(['dog', 'dog', 'cat', 'dog', 'cat', 'cat'])\n\n# Split 80/20\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42\n)\n\n# Train k-NN (k=3)\nmodel = KNeighborsClassifier(n_neighbors=3)\nmodel.fit(X_train, y_train)\n\n# Predict\ny_pred = model.predict(X_test)\nprint(f\"Accuracy: {accuracy_score(y_test, y_pred):.2f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Training (k-NN)"
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
                        children: "O"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "1"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "O(1)"
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
                      marginRight: "0.0278em"
                    },
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "1"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: ")"
                  })]
                })
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "k-NN is lazy — no actual training, just stores data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prediction (k-NN)"
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
                        children: "O"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⋅"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "d"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "O(n \\cdot d)"
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
                      marginRight: "0.0278em"
                    },
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "n"
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
                    children: "d"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: ")"
                  })]
                })]
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Must compute distance to all ", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsx)(_components.mrow, {
                      children: (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      })
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "n"
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
                    children: "n"
                  })]
                })
              })]
            }), " training points across ", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsx)(_components.mrow, {
                      children: (0,jsx_runtime.jsx)(_components.mi, {
                        children: "d"
                      })
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "d"
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
                      height: "0.6944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "d"
                  })]
                })
              })]
            }), " features"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Training (Decision Tree)"
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
                        children: "O"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⋅"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "d"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⋅"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "log"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⁡"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "O(n \\cdot d \\cdot \\log n)"
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
                      marginRight: "0.0278em"
                    },
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "n"
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
                      height: "0.6944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "d"
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
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: ")"
                  })]
                })]
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Each split sorts features, tree height is ", (0,jsx_runtime.jsxs)(_components.span, {
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
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "log"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⁡"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "O(\\log n)"
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
                      marginRight: "0.0278em"
                    },
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
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
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: ")"
                  })]
                })
              })]
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prediction (Decision Tree)"
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
                        children: "O"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "log"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⁡"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "O(\\log n)"
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
                      marginRight: "0.0278em"
                    },
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
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
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: ")"
                  })]
                })
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Traverses tree from root to leaf, tree depth is ", (0,jsx_runtime.jsxs)(_components.span, {
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
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "log"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⁡"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "O(\\log n)"
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
                      marginRight: "0.0278em"
                    },
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
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
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: ")"
                  })]
                })
              })]
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Produces interpretable models (trees, linear)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires large labeled datasets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Well-understood theory and evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can overfit without careful regularization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Broad algorithm choice for different problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensitive to irrelevant features"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Direct performance metrics (accuracy, MSE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class imbalance can bias results"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Missing values"
        }), ": Many algorithms cannot handle NaN — must impute (mean, median, KNN imputer) or drop"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Class imbalance"
        }), ": 99% class A / 1% class B → model achieves 99% accuracy by always predicting A. Fix with class weights, oversampling (SMOTE), or undersampling"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Outliers"
        }), ": Single extreme value can skew linear regression coefficients. Use robust scalers or tree-based models"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Categorical features"
        }), ": Must one-hot encode or label-encode; tree models handle categorical splits natively"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-unsupervised-learning",
      children: "2. Unsupervised Learning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A librarian asked to organize a pile of books into groups without any labels. The librarian notices that some books have red covers, some have math equations, some are fiction — and groups them by similarity. The groups emerge naturally from the data."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " The algorithm finds hidden patterns, groupings, or structure in unlabeled data. No ground-truth labels exist."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps (k-Means Clustering):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Choose the number of clusters ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "k"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "k"
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
                  height: "0.6944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0315em"
                },
                children: "k"
              })]
            })
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Initialize ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "k"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "k"
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
                  height: "0.6944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0315em"
                },
                children: "k"
              })]
            })
          })]
        }), " centroids randomly (or using k-means++)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each data point, assign it to the nearest centroid"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recompute each centroid as the mean of all points assigned to it"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat steps 3-4 until centroids stop changing (convergence)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate clustering quality using inertia or silhouette score"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION KMeans(Dataset D, int k)\n    centroids = randomly select k points from D\n    REPEAT:\n        clusters = empty list of k lists\n        FOR each point p in D:\n            distances = [distance(p, c) for c in centroids]\n            nearest = argmin(distances)\n            clusters[nearest].append(p)\n        new_centroids = []\n        FOR i = 1 to k:\n            new_centroids[i] = mean(clusters[i])\n        IF centroids == new_centroids:\n            BREAK\n        centroids = new_centroids\n    RETURN centroids, clusters\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — k-Means on 6 points with k=2:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Iteration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Centroid 1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Centroid 2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cluster Assignments"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Converged?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2,3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(8,5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2.0, 3.0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(8.0, 5.0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A(1,2),B(2,4),C(3,3)→C1; D(7,5),E(8,6),F(9,4)→C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2.0, 3.0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(8.0, 5.0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as iteration 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation — k-Means:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from sklearn.cluster import KMeans\nfrom sklearn.datasets import make_blobs\nimport matplotlib.pyplot as plt\n\n# Generate synthetic data: 300 points, 4 centers\nX, _ = make_blobs(n_samples=300, centers=4,\n                  n_features=2, random_state=42)\n\n# Apply k-Means\nkmeans = KMeans(n_clusters=4, init='k-means++',\n                max_iter=300, random_state=42)\nkmeans.fit(X)\n\nprint(f\"Cluster centers:\\n{kmeans.cluster_centers_}\")\nprint(f\"Inertia (within-cluster variance): {kmeans.inertia_:.2f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "k-Means (one iteration)"
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
                        children: "O"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "k"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⋅"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⋅"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "d"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "O(k \\cdot n \\cdot d)"
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
                      marginRight: "0.0278em"
                    },
                    children: "O"
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
                      height: "0.4445em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "n"
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
                    children: "d"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: ")"
                  })]
                })]
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Each of ", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsx)(_components.mrow, {
                      children: (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      })
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "n"
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
                    children: "n"
                  })]
                })
              })]
            }), " points computes distance to ", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsx)(_components.mrow, {
                      children: (0,jsx_runtime.jsx)(_components.mi, {
                        children: "k"
                      })
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "k"
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
                      height: "0.6944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0315em"
                    },
                    children: "k"
                  })]
                })
              })]
            }), " centroids across ", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsx)(_components.mrow, {
                      children: (0,jsx_runtime.jsx)(_components.mi, {
                        children: "d"
                      })
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "d"
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
                      height: "0.6944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "d"
                  })]
                })
              })]
            }), " dimensions"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "k-Means (total)"
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
                        children: "O"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "k"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⋅"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⋅"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "d"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⋅"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "O(k \\cdot n \\cdot d \\cdot i)"
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
                      marginRight: "0.0278em"
                    },
                    children: "O"
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
                      height: "0.4445em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "n"
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
                      height: "0.6944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "d"
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
                    children: "i"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: ")"
                  })]
                })]
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsx)(_components.mrow, {
                      children: (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      })
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "i"
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
                      height: "0.6595em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "i"
                  })]
                })
              })]
            }), " iterations until convergence"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DBSCAN"
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
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⋅"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "d"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "O(n \\cdot d)"
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
                      marginRight: "0.0278em"
                    },
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "n"
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
                    children: "d"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: ")"
                  })]
                })]
              })]
            }), " with spatial index"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Neighborhood queries are constant-time with kd-tree"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical Clustering"
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
                        children: "O"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsxs)(_components.msup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "n"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "2"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "log"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⁡"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "O(n^2 \\log n)"
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
                      height: "1.0641em",
                      verticalAlign: "-0.25em"
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
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      children: "n"
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
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: ")"
                  })]
                })
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Must compute ", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "×"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "n \\times n"
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
                      height: "0.6667em",
                      verticalAlign: "-0.0833em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "n"
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
                      height: "0.4306em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "n"
                  })]
                })]
              })]
            }), " distance matrix, then merge"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No labels needed — works on raw data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Results are subjective — no ground truth to validate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Discovers hidden patterns"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Must choose ", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsx)(_components.mrow, {
                      children: (0,jsx_runtime.jsx)(_components.mi, {
                        children: "k"
                      })
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "k"
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
                      height: "0.6944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0315em"
                    },
                    children: "k"
                  })]
                })
              })]
            }), " (number of clusters) in advance"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalable to large datasets (mini-batch k-Means)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensitive to initialization and scaling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Useful for preprocessing and anomaly detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Curse of dimensionality — distances become meaningless in high dimensions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-spherical clusters"
        }), ": k-Means fails on crescent-shaped or nested clusters — use DBSCAN or Spectral Clustering instead"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Varying density"
        }), ": DBSCAN with fixed epsilon struggles — use OPTICS"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "High dimensions"
        }), ": Distance concentration (all points appear equally far) — use PCA first"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deterministic initialization"
        }), ": k-Means++ mitigates random initialization issues but does not guarantee global optimum"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-reinforcement-learning",
      children: "3. Reinforcement Learning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A puppy learning to fetch a ball. When the puppy brings the ball back, it gets a treat (reward). When it runs away, it gets nothing (no reward). The puppy learns which actions lead to treats through trial and error — not from being told the correct action."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " An agent learns to make decisions by interacting with an environment. The agent receives a reward signal and learns a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "policy"
      }), " ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "π"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "a"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "normal",
                  children: "∣"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "s"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\pi(a|s)"
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
              children: "π"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "a"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "∣"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "s"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            })]
          })
        })]
      }), " that maps states to actions to maximize cumulative reward."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps (Q-Learning):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize Q-table with zeros for all state-action pairs"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Observe current state ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "s"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "s"
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
                children: "s"
              })]
            })
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Choose action ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "a"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "a"
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
                children: "a"
              })]
            })
          })]
        }), " using ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "ϵ"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\epsilon"
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
                children: "ϵ"
              })]
            })
          })]
        }), "-greedy policy (explore with probability ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "ϵ"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\epsilon"
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
                children: "ϵ"
              })]
            })
          })]
        }), ", exploit otherwise)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Execute action ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "a"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "a"
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
                children: "a"
              })]
            })
          })]
        }), ", observe reward ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "r"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "r"
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
                style: {
                  marginRight: "0.0278em"
                },
                children: "r"
              })]
            })
          })]
        }), " and next state ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "s"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      mathvariant: "normal",
                      lspace: "0em",
                      rspace: "0em",
                      children: "′"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "s'"
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
                  height: "0.7519em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "s"
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
              })]
            })
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update Q-value: ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "Q"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "s"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "a"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "←"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "Q"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "s"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "a"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "+"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "α"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "["
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "r"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "+"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "γ"
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "max"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⁡"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.msup, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "a"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        mathvariant: "normal",
                        lspace: "0em",
                        rspace: "0em",
                        children: "′"
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "Q"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "s"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      mathvariant: "normal",
                      lspace: "0em",
                      rspace: "0em",
                      children: "′"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "a"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      mathvariant: "normal",
                      lspace: "0em",
                      rspace: "0em",
                      children: "′"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "Q"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "s"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "a"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "]"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "Q(s, a) \\leftarrow Q(s, a) + \\alpha[r + \\gamma \\max_{a'} Q(s', a') - Q(s, a)]"
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
                children: "Q"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "s"
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
                children: "a"
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
                children: "←"
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
                children: "Q"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "s"
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
                children: "a"
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
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0037em"
                },
                children: "α"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "["
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "r"
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
                  height: "1.0019em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0556em"
                },
                children: "γ"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mop",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mop",
                  children: "max"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.328em"
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
                              className: "mord mtight",
                              children: (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord mtight",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  children: "a"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "msupsub",
                                  children: (0,jsx_runtime.jsx)(_components.span, {
                                    className: "vlist-t",
                                    children: (0,jsx_runtime.jsx)(_components.span, {
                                      className: "vlist-r",
                                      children: (0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.6828em"
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
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "Q"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "s"
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
                  children: "a"
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
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "Q"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "s"
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
                children: "a"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")]"
              })]
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Set ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "s"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "←"
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "s"
                    }), (0,jsx_runtime.jsx)(_components.mo, {
                      mathvariant: "normal",
                      lspace: "0em",
                      rspace: "0em",
                      children: "′"
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "s \\leftarrow s'"
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
                children: "s"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "←"
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
                  height: "0.7519em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "s"
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
              })]
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat steps 2-6 until convergence (Q-values stabilize)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION QLearning(Environment env, float alpha, float gamma, float epsilon)\n    Q = zero-initialized table [states × actions]\n    FOR episode = 1 to max_episodes:\n        s = env.reset()\n        WHILE s is not terminal:\n            IF random() < epsilon:\n                a = random_action()\n            ELSE:\n                a = argmax(Q[s, :])\n            s', r = env.step(a)\n            Q[s, a] = Q[s, a] + alpha * (r + gamma * max(Q[s', :]) - Q[s, a])\n            s = s'\n    RETURN Q\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Dry Run — Q-Learning on 4-state Grid World (", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "α"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.1"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "γ"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.9"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "ϵ"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.2"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\alpha=0.1, \\gamma=0.9, \\epsilon=0.2"
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
                  marginRight: "0.0037em"
                },
                children: "α"
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
                  height: "0.8389em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "0.1"
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
                  marginRight: "0.0556em"
                },
                children: "γ"
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
                  height: "0.8389em",
                  verticalAlign: "-0.1944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "0.9"
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
                children: "ϵ"
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
                children: "0.2"
              })]
            })]
          })]
        }), "):"]
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Episode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Reward"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Q(s,a) Before"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "TD Target"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Q(s,a) After"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "S0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0 + 0.9·0 = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "S0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0 + 0.9·1 = 0.9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.09"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "S1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0 + 0.9·0 = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "S0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.09"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0 + 0.9·0.09 = 0.081"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.081"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "S2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "+10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "10 + 0.9·0 = 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1.0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "S0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.05"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0 + 0.9·0.5 = 0.45"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.09"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation — Q-Learning:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\n\n# Simple 4-state, 2-action environment\nn_states, n_actions = 4, 2\nQ = np.zeros((n_states, n_actions))\nalpha, gamma, epsilon = 0.1, 0.9, 0.2\nepisodes = 1000\n\n# Reward structure: state 3 gives +10 on action 0\nrewards = np.array([[0, 0], [0, 0], [0, 0], [10, 0]])\n\nfor _ in range(episodes):\n    s = 0  # start state\n    while s != 3:  # terminal state\n        a = np.random.randint(n_actions) if np.random.random() < epsilon \\\n            else np.argmax(Q[s])\n        s_next = min(s + 1, 3)  # simplified transition\n        r = rewards[s, a]\n        Q[s, a] += alpha * (r + gamma * np.max(Q[s_next]) - Q[s, a])\n        s = s_next\n\nprint(\"Learned Q-table:\")\nprint(Q)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q-Learning update"
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
                        children: "O"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "1"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "O(1)"
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
                      marginRight: "0.0278em"
                    },
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord",
                    children: "1"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: ")"
                  })]
                })
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single table lookup and update — constant time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q-Learning (training)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O("
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deep Q-Network (forward)"
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
                        children: "O"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "L"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "O(L)"
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
                      marginRight: "0.0278em"
                    },
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "L"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: ")"
                  })]
                })
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsx)(_components.mrow, {
                      children: (0,jsx_runtime.jsx)(_components.mi, {
                        children: "L"
                      })
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "L"
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
                    children: "L"
                  })]
                })
              })]
            }), " layers in neural network — architecture-dependent"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Policy Gradient"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O("
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Learns optimal behavior without explicit supervision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Training can be unstable and sample-inefficient"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handles delayed rewards (credit assignment)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hyperparameter-sensitive (alpha, gamma, epsilon)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Applicable to sequential decision problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large state spaces require function approximation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Achieved superhuman performance (Go, Atari, robotics)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reward engineering is often non-trivial"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sparse rewards"
        }), ": Agent explores for thousands of steps without feedback — use reward shaping, curiosity-driven exploration, or HER"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-stationary environments"
        }), ": Transition probabilities change over time — use continual learning approaches"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Catastrophic forgetting"
        }), ": Neural network agents forget earlier skills when learning new ones — use experience replay or periodic consolidation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exploration vs exploitation deadlock"
        }), ": Purely greedy policy may miss better solutions — ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "ϵ"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\epsilon"
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
                children: "ϵ"
              })]
            })
          })]
        }), "-decay schedules are critical"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inductive-learning",
      children: "Inductive Learning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The goal of inductive learning is to find a hypothesis ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  children: "h"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "h"
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
                height: "0.6944em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "h"
            })]
          })
        })]
      }), " that approximates the true function ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  children: "f"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "f"
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
                marginRight: "0.1076em"
              },
              children: "f"
            })]
          })
        })]
      }), " using only a finite set of examples. Because many hypotheses can fit the data, the agent must have an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "inductive bias"
      }), " — a preference for one type of hypothesis over another (e.g., Occam's Razor prefers simpler hypotheses)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hypothesis Space:"
      }), " The set of all possible functions the learning algorithm can produce. A larger hypothesis space increases expressiveness but makes finding the right hypothesis harder."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "decision-trees",
      children: "Decision Trees"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A doctor diagnosing a patient uses a series of yes/no questions — \"Do you have a fever?\" (yes → \"Is it above 102°F?\" / no → \"Do you have a cough?\"). Each question narrows down the possibilities until a diagnosis is reached. This is exactly how a decision tree works."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Decision Tree is a flowchart-like structure where each internal node represents a \"test\" on an attribute, each branch represents the outcome of the test, and each leaf node represents a class label."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Entropy"
        }), ": A measure of impurity or randomness in a set of examples.\n", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "H"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "S"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
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
                      children: "c"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "p"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "log"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⁡"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "p"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "H(S) = -\\sum_{i=1}^{c} p_i \\log_2 p_i"
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
                  marginRight: "0.0813em"
                },
                children: "H"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0576em"
                },
                children: "S"
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
                  height: "1.104em",
                  verticalAlign: "-0.2997em"
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
                                children: "c"
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
                  children: "p"
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
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mop",
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "mop",
                  children: ["lo", (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      marginRight: "0.0139em"
                    },
                    children: "g"
                  })]
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.207em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.4559em",
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
                          height: "0.2441em"
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
                  children: "p"
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
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Information Gain"
        }), ": The reduction in entropy achieved by partitioning the data based on a specific attribute.\n", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "I"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "G"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "S"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "A"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "H"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "S"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mo, {
                      children: "∑"
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "v"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "∈"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "V"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "a"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "l"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "u"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "e"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "s"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "A"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.mfrac, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "∣"
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "S"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "v"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "∣"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "∣"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "S"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        mathvariant: "normal",
                        children: "∣"
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "H"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "S"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "v"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "IG(S, A) = H(S) - \\sum_{v \\in Values(A)} \\frac{|S_v|}{|S|} H(S_v)"
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
                  marginRight: "0.0785em"
                },
                children: "I"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "G"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0576em"
                },
                children: "S"
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
                children: "A"
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
                  marginRight: "0.0813em"
                },
                children: "H"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0576em"
                },
                children: "S"
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
                  height: "1.53em",
                  verticalAlign: "-0.52em"
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
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.2253em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
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
                                  marginRight: "0.0359em"
                                },
                                children: "v"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mrel mtight",
                                children: "∈"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                style: {
                                  marginRight: "0.2222em"
                                },
                                children: "V"
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
                                children: "u"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "es"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mopen mtight",
                                children: "("
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "A"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mclose mtight",
                                children: ")"
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
                          height: "0.4747em"
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
                          height: "1.01em"
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
                                children: "∣"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                style: {
                                  marginRight: "0.0576em"
                                },
                                children: "S"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mtight",
                                children: "∣"
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
                                className: "mord mtight",
                                children: "∣"
                              }), (0,jsx_runtime.jsxs)(_components.span, {
                                className: "mord mtight",
                                children: [(0,jsx_runtime.jsx)(_components.span, {
                                  className: "mord mathnormal mtight",
                                  style: {
                                    marginRight: "0.0576em"
                                  },
                                  children: "S"
                                }), (0,jsx_runtime.jsx)(_components.span, {
                                  className: "msupsub",
                                  children: (0,jsx_runtime.jsxs)(_components.span, {
                                    className: "vlist-t vlist-t2",
                                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                                      className: "vlist-r",
                                      children: [(0,jsx_runtime.jsx)(_components.span, {
                                        className: "vlist",
                                        style: {
                                          height: "0.1645em"
                                        },
                                        children: (0,jsx_runtime.jsxs)(_components.span, {
                                          style: {
                                            top: "-2.357em",
                                            marginLeft: "-0.0576em",
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
                                                marginRight: "0.0359em"
                                              },
                                              children: "v"
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
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0813em"
                },
                children: "H"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0576em"
                  },
                  children: "S"
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
                            marginLeft: "-0.0576em",
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
                                marginRight: "0.0359em"
                              },
                              children: "v"
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
            })]
          })]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps (ID3 Decision Tree):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Calculate entropy ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "H"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "S"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "H(S)"
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
                  marginRight: "0.0813em"
                },
                children: "H"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0576em"
                },
                children: "S"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })
          })]
        }), " of the current dataset"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each attribute ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "A"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "A"
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
                children: "A"
              })]
            })
          })]
        }), ", calculate Information Gain ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "I"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "G"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "S"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "A"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "IG(S, A)"
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
                  marginRight: "0.0785em"
                },
                children: "I"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "G"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0576em"
                },
                children: "S"
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
                children: "A"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Select the attribute with the highest Information Gain as the splitting attribute"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create a child node for each value of the selected attribute"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each child node:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If all examples belong to the same class → make it a leaf node"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If no attributes remaining → make it a leaf node with majority class"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Otherwise → recurse (go to step 1)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply pruning (post-pruning or pre-pruning) to reduce overfitting"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION ID3(Dataset S, AttributeSet A)\n    IF all examples in S have same class label c:\n        RETURN Leaf(c)\n    IF A is empty:\n        RETURN Leaf(majority_class(S))\n    best_attr = argmax_a IG(S, a) for a in A\n    tree = Node(best_attr)\n    FOR each value v of best_attr:\n        S_v = subset of S where best_attr = v\n        IF S_v is empty:\n            tree.add_branch(v, Leaf(majority_class(S)))\n        ELSE:\n            tree.add_branch(v, ID3(S_v, A \\ {best_attr}))\n    RETURN tree\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Tennis Dataset:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dataset (14 examples, 4 features: Outlook, Temperature, Humidity, Wind):"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Day"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Outlook"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Temp"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Humidity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Wind"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Play?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Sunny"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Hot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Weak"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Sunny"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Hot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Overcast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Hot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Weak"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Rain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Mild"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Weak"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Rain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Cool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Normal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Weak"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Rain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Cool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Normal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Overcast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Cool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Normal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Sunny"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Mild"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Weak"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Sunny"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Cool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Normal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Weak"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Rain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Mild"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Normal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Weak"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Sunny"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Mild"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Normal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Overcast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Mild"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Overcast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Hot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Normal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Weak"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Rain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Mild"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1 — Compute Entropy of the whole set:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "9 Yes, 5 No"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "p"
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "y"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "e"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "s"
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "9"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "/"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "14"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "p_{yes} = 9/14"
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
                  children: "p"
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
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                style: {
                                  marginRight: "0.0359em"
                                },
                                children: "y"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "es"
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
                children: "9/14"
              })]
            })]
          })]
        }), ", ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "p"
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "o"
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "5"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "/"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "14"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "p_{no} = 5/14"
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
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  children: "p"
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
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              className: "mord mtight",
                              children: [(0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "n"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "o"
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
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "5/14"
              })]
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "H"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "S"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "9"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "/"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "14"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "log"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⁡"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "9"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "/"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "14"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "5"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "/"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "14"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "log"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⁡"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "5"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "/"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "14"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "H(S) = -(9/14)\\log_2(9/14) - (5/14)\\log_2(5/14)"
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
                  marginRight: "0.0813em"
                },
                children: "H"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0576em"
                },
                children: "S"
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
                children: "−"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "9/14"
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
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "mop",
                  children: ["lo", (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      marginRight: "0.0139em"
                    },
                    children: "g"
                  })]
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.207em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.4559em",
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
                          height: "0.2441em"
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
                className: "mord",
                children: "9/14"
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
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "5/14"
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
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "mop",
                  children: ["lo", (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      marginRight: "0.0139em"
                    },
                    children: "g"
                  })]
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.207em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.4559em",
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
                          height: "0.2441em"
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
                className: "mord",
                children: "5/14"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })]
          })]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "H"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "S"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.643"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.637"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.357"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1.485"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "H(S) = -(0.643)(-0.637) - (0.357)(-1.485)"
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
                  marginRight: "0.0813em"
                },
                children: "H"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0576em"
                },
                children: "S"
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
                children: "−"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "0.643"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "−"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "0.637"
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
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "0.357"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "−"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "1.485"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })]
          })]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "H"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "S"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.409"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "+"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.530"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.940"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "H(S) = 0.409 + 0.530 = 0.940"
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
                  marginRight: "0.0813em"
                },
                children: "H"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0576em"
                },
                children: "S"
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
                  height: "0.7278em",
                  verticalAlign: "-0.0833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "0.409"
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
                  height: "0.6444em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "0.530"
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
                children: "0.940"
              })]
            })]
          })]
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2 — Information Gain for each attribute:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Outlook:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Sunny: 2 Yes, 3 No → ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "H"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.971"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "H = 0.971"
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
                  marginRight: "0.0813em"
                },
                children: "H"
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
                children: "0.971"
              })]
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Overcast: 4 Yes, 0 No → ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "H"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.000"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "H = 0.000"
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
                  marginRight: "0.0813em"
                },
                children: "H"
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
                children: "0.000"
              })]
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Rain: 3 Yes, 2 No → ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "H"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.971"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "H = 0.971"
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
                  marginRight: "0.0813em"
                },
                children: "H"
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
                children: "0.971"
              })]
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "I"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "G"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "S"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "u"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "t"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "l"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "o"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "o"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "k"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.940"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "5"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "/"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "14"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.971"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "4"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "/"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "14"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.000"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "5"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "/"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "14"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.971"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "IG(S, Outlook) = 0.940 - (5/14)(0.971) - (4/14)(0.000) - (5/14)(0.971)"
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
                  marginRight: "0.0785em"
                },
                children: "I"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "G"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0576em"
                },
                children: "S"
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
                  marginRight: "0.0278em"
                },
                children: "O"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "u"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0197em"
                },
                children: "tl"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "oo"
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
                  height: "0.7278em",
                  verticalAlign: "-0.0833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "0.940"
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
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "5/14"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "0.971"
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
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "4/14"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "0.000"
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
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "5/14"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "0.971"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })]
          })]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.940"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.347"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.000"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.347"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.246"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "= 0.940 - 0.347 - 0.000 - 0.347 = 0.246"
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
                children: "0.940"
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
                  height: "0.7278em",
                  verticalAlign: "-0.0833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "0.347"
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
                  height: "0.7278em",
                  verticalAlign: "-0.0833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "0.000"
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
                children: "0.347"
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
                children: "0.246"
              })]
            })]
          })]
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Temperature:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Hot: 2 Yes, 2 No → ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "H"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1.000"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "H = 1.000"
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
                  marginRight: "0.0813em"
                },
                children: "H"
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
                children: "1.000"
              })]
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Mild: 4 Yes, 2 No → ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "H"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.918"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "H = 0.918"
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
                  marginRight: "0.0813em"
                },
                children: "H"
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
                children: "0.918"
              })]
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Cool: 3 Yes, 1 No → ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "H"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.811"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "H = 0.811"
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
                  marginRight: "0.0813em"
                },
                children: "H"
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
                children: "0.811"
              })]
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "I"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "G"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "S"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "T"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "m"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "p"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.940"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "4"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "/"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "14"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1.000"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "6"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "/"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "14"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.918"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "4"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "/"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "14"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.811"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "IG(S, Temp) = 0.940 - (4/14)(1.000) - (6/14)(0.918) - (4/14)(0.811)"
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
                  marginRight: "0.0785em"
                },
                children: "I"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "G"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0576em"
                },
                children: "S"
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
                children: "e"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "m"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "p"
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
                  height: "0.7278em",
                  verticalAlign: "-0.0833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "0.940"
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
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "4/14"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "1.000"
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
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "6/14"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "0.918"
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
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "4/14"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "0.811"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })]
          })]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.940"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.286"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.393"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.232"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.029"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "= 0.940 - 0.286 - 0.393 - 0.232 = 0.029"
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
                children: "0.940"
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
                  height: "0.7278em",
                  verticalAlign: "-0.0833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "0.286"
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
                  height: "0.7278em",
                  verticalAlign: "-0.0833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "0.393"
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
                children: "0.232"
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
                children: "0.029"
              })]
            })]
          })]
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Humidity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["High: 3 Yes, 4 No → ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "H"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.985"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "H = 0.985"
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
                  marginRight: "0.0813em"
                },
                children: "H"
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
                children: "0.985"
              })]
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Normal: 6 Yes, 1 No → ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "H"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.592"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "H = 0.592"
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
                  marginRight: "0.0813em"
                },
                children: "H"
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
                children: "0.592"
              })]
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "I"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "G"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "S"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "H"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "u"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "m"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "t"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "y"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.940"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "7"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "/"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "14"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.985"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "7"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "/"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "14"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.592"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "IG(S, Humidity) = 0.940 - (7/14)(0.985) - (7/14)(0.592)"
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
                  marginRight: "0.0785em"
                },
                children: "I"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "G"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0576em"
                },
                children: "S"
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
                  marginRight: "0.0813em"
                },
                children: "H"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "u"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "mi"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "d"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "i"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "t"
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
                children: "0.940"
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
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "7/14"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "0.985"
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
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "7/14"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "0.592"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })]
          })]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.940"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.493"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.296"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.151"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "= 0.940 - 0.493 - 0.296 = 0.151"
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
                children: "0.940"
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
                  height: "0.7278em",
                  verticalAlign: "-0.0833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "0.493"
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
                children: "0.296"
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
                children: "0.151"
              })]
            })]
          })]
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Wind:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Weak: 6 Yes, 2 No → ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "H"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.811"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "H = 0.811"
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
                  marginRight: "0.0813em"
                },
                children: "H"
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
                children: "0.811"
              })]
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Strong: 3 Yes, 3 No → ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "H"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1.000"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "H = 1.000"
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
                  marginRight: "0.0813em"
                },
                children: "H"
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
                children: "1.000"
              })]
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "I"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "G"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "S"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    separator: "true",
                    children: ","
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "W"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.940"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "8"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "/"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "14"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.811"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "6"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "/"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "14"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1.000"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "IG(S, Wind) = 0.940 - (8/14)(0.811) - (6/14)(1.000)"
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
                  marginRight: "0.0785em"
                },
                children: "I"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "G"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0576em"
                },
                children: "S"
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
                children: "W"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "in"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "d"
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
                  height: "0.7278em",
                  verticalAlign: "-0.0833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "0.940"
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
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "8/14"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "0.811"
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
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "6/14"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "1.000"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mclose",
                children: ")"
              })]
            })]
          })]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.940"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.463"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.429"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.048"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "= 0.940 - 0.463 - 0.429 = 0.048"
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
                children: "0.940"
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
                  height: "0.7278em",
                  verticalAlign: "-0.0833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "0.463"
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
                children: "0.429"
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
                children: "0.048"
              })]
            })]
          })]
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3 — Split on Outlook (highest IG = 0.246):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "          [Outlook]\n        /    |     \\\n    Sunny  Overcast  Rain\n  (2Y,3N)  (4Y,0N)  (3Y,2N)\n             |\n          Leaf: Yes\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4 — Recurse on Sunny branch:"
      }), "\nSubset (Sunny): Days 1, 2, 8, 9, 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Day"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Temp"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Humidity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Wind"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Play?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Hot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Weak"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Hot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Mild"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Weak"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Cool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Normal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Weak"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Mild"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Normal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        })]
      })]
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
                    children: "H"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "S"
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "s"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "u"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "y"
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "/"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "5"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "log"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⁡"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "/"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "5"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "3"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "/"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "5"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "log"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⁡"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "3"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "/"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "5"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.971"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "H(S_{sunny}) = -(2/5)\\log_2(2/5) - (3/5)\\log_2(3/5) = 0.971"
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
                  height: "1.0361em",
                  verticalAlign: "-0.2861em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0813em"
                },
                children: "H"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0576em"
                  },
                  children: "S"
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
                            marginLeft: "-0.0576em",
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
                                children: "s"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "u"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "nn"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                style: {
                                  marginRight: "0.0359em"
                                },
                                children: "y"
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
                          height: "0.2861em"
                        },
                        children: (0,jsx_runtime.jsx)(_components.span, {})
                      })
                    })]
                  })
                })]
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
                children: "−"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "2/5"
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
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "mop",
                  children: ["lo", (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      marginRight: "0.0139em"
                    },
                    children: "g"
                  })]
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.207em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.4559em",
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
                          height: "0.2441em"
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
                className: "mord",
                children: "2/5"
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
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "3/5"
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
                children: [(0,jsx_runtime.jsxs)(_components.span, {
                  className: "mop",
                  children: ["lo", (0,jsx_runtime.jsx)(_components.span, {
                    style: {
                      marginRight: "0.0139em"
                    },
                    children: "g"
                  })]
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.207em"
                        },
                        children: (0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.4559em",
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
                          height: "0.2441em"
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
                className: "mord",
                children: "3/5"
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
                children: "0.971"
              })]
            })]
          })]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IG(Temp) = 0.571, IG(Humidity) = 0.971, IG(Wind) = 0.020"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Split on Humidity"
        }), " (IG = 0.971):\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["High → 0Y, 3N → Leaf: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "No"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Normal → 2Y, 0N → Leaf: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5 — Recurse on Rain branch:"
      }), "\nSubset (Rain): Days 4, 5, 6, 10, 14"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Day"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Temp"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Humidity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Wind"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Play?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Mild"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Weak"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Cool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Normal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Weak"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Cool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Normal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Mild"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Normal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Weak"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Mild"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          })]
        })]
      })]
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
                    children: "H"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "S"
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "r"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "a"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.971"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "H(S_{rain}) = 0.971"
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
                  marginRight: "0.0813em"
                },
                children: "H"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mopen",
                children: "("
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.0576em"
                  },
                  children: "S"
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
                            marginLeft: "-0.0576em",
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
                                  marginRight: "0.0278em"
                                },
                                children: "r"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "ain"
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
                children: "0.971"
              })]
            })]
          })]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IG(Temp) = 0.020, IG(Humidity) = 0.020, IG(Wind) = 0.971"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Split on Wind"
        }), " (IG = 0.971):\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Weak → 3Y, 0N → Leaf: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Strong → 0Y, 2N → Leaf: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "No"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Final Decision Tree:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "               Outlook\n           /      |     \\\n      Sunny  Overcast   Rain\n        |      (Yes)      |\n     Humidity              Wind\n     /     \\              /   \\\n  High    Normal      Weak   Strong\n   (No)    (Yes)      (Yes)   (No)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from sklearn.tree import DecisionTreeClassifier, plot_tree\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# Encoded: Outlook(Sun=0,Ovc=1,Rain=2), Temp(Hot=0,Mild=1,Cool=2),\n# Humidity(High=0,Normal=1), Wind(Weak=0,Strong=1)\nX = np.array([\n    [0,0,0,0], [0,0,0,1], [1,0,0,0], [2,1,0,0],\n    [2,2,1,0], [2,2,1,1], [1,2,1,1], [0,1,0,0],\n    [0,2,1,0], [2,1,1,0], [0,1,1,1], [1,1,0,1],\n    [1,0,1,0], [2,1,0,1]\n])\ny = np.array([0,0,1,1,1,0,1,0,1,1,1,1,1,0])\n\nclf = DecisionTreeClassifier(criterion='entropy', max_depth=3,\n                             min_samples_split=2)\nclf.fit(X, y)\n\n# Predict a new example: Sunny, Hot, High, Weak\nnew = np.array([[0, 0, 0, 0]])\npred = clf.predict(new)\nprint(f\"Prediction: {'Play' if pred[0] == 1 else 'No Play'}\")\n\n# Visualise\nplt.figure(figsize=(12, 8))\nplot_tree(clf, feature_names=['Outlook', 'Temp', 'Humidity', 'Wind'],\n          class_names=['No', 'Yes'], filled=True)\nplt.show()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Entropy calculation"
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
                        children: "O"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "O(n)"
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
                      marginRight: "0.0278em"
                    },
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: ")"
                  })]
                })
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Single pass over ", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsx)(_components.mrow, {
                      children: (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      })
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "n"
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
                    children: "n"
                  })]
                })
              })]
            }), " examples to compute class frequencies"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IG for one attribute"
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
                        children: "O"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⋅"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "v"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "O(n \\cdot v)"
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
                      marginRight: "0.0278em"
                    },
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "n"
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
                      marginRight: "0.0359em"
                    },
                    children: "v"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: ")"
                  })]
                })]
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Entropy per value ", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsx)(_components.mrow, {
                      children: (0,jsx_runtime.jsx)(_components.mi, {
                        children: "v"
                      })
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "v"
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
                    style: {
                      marginRight: "0.0359em"
                    },
                    children: "v"
                  })]
                })
              })]
            }), " times number of examples ", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsx)(_components.mrow, {
                      children: (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      })
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "n"
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
                    children: "n"
                  })]
                })
              })]
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ID3 one split level"
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
                        children: "O"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⋅"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "d"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⋅"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "v"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "O(n \\cdot d \\cdot v)"
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
                      marginRight: "0.0278em"
                    },
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "n"
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
                      height: "0.6944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "d"
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
                      marginRight: "0.0359em"
                    },
                    children: "v"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: ")"
                  })]
                })]
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Compute IG for all ", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsx)(_components.mrow, {
                      children: (0,jsx_runtime.jsx)(_components.mi, {
                        children: "d"
                      })
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "d"
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
                      height: "0.6944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "d"
                  })]
                })
              })]
            }), " attributes, each with ", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsx)(_components.mrow, {
                      children: (0,jsx_runtime.jsx)(_components.mi, {
                        children: "v"
                      })
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "v"
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
                    style: {
                      marginRight: "0.0359em"
                    },
                    children: "v"
                  })]
                })
              })]
            }), " values"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ID3 full tree"
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
                        children: "O"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⋅"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "d"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⋅"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "v"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⋅"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "log"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⁡"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "O(n \\cdot d \\cdot v \\cdot \\log n)"
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
                      marginRight: "0.0278em"
                    },
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "n"
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
                      height: "0.6944em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "d"
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
                      height: "0.4445em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0359em"
                    },
                    children: "v"
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
                    className: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: ")"
                  })]
                })]
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Tree height is ", (0,jsx_runtime.jsxs)(_components.span, {
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
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "log"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⁡"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "O(\\log n)"
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
                      marginRight: "0.0278em"
                    },
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
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
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: ")"
                  })]
                })
              })]
            }), ", each level runs all attributes"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prediction"
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
                        children: "O"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "log"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⁡"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "n"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "O(\\log n)"
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
                      marginRight: "0.0278em"
                    },
                    children: "O"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
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
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mclose",
                    children: ")"
                  })]
                })
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traverse tree from root to leaf — depth is logarithmic"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why complexity matters:"
      }), " For large datasets with millions of examples, ", (0,jsx_runtime.jsxs)(_components.span, {
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
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "⋅"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "d"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "O(n \\cdot d)"
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
                marginRight: "0.0278em"
              },
              children: "O"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mopen",
              children: "("
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "n"
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
              children: "d"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mclose",
              children: ")"
            })]
          })]
        })]
      }), " per level becomes expensive. This is why random forests sample both data and features — reducing effective ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  children: "n"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "n"
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
              children: "n"
            })]
          })
        })]
      }), " and ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  children: "d"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "d"
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
                height: "0.6944em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "d"
            })]
          })
        })]
      }), " per tree."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "generalization-overfitting-and-underfitting",
      children: "Generalization, Overfitting, and Underfitting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Preparing for an exam:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Underfitting"
          }), " (High Bias): Studying only the chapter titles — too simple to answer detailed questions."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Overfitting"
          }), " (High Variance): Memorizing the exact wording of three sample exams. You ace those exact questions but fail any question phrased differently."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Good Generalization"
          }), ": Understanding the core concepts — you can answer any question on the topic, even ones you have never seen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Underfitting"
          }), ": The model is too simple to capture the underlying structure (High Bias)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Overfitting"
          }), ": The model is too complex and captures the noise in the training data rather than the true pattern (High Variance)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Generalization"
          }), ": The ability of a model to perform well on unseen data."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How to detect these:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Training accuracy high, validation accuracy low → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Overfitting"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Training accuracy low, validation accuracy low → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Underfitting"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Both high and close → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Good Generalization"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "supervised-vs-unsupervised-vs-reinforcement-learning",
      children: "Supervised vs Unsupervised vs Reinforcement Learning"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Supervised"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Unsupervised"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Reinforcement"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Training Data"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Labeled (X, y)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Unlabeled (X only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No dataset — environment interaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Feedback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Direct (target label)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Delayed (reward signal)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Goal"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Map inputs to outputs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Discover hidden structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Maximize cumulative reward"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance Metric"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Accuracy, F1, MSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Inertia, silhouette score"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Cumulative reward, episode return"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Common Algorithms"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "DT, SVM, LR, k-NN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "k-Means, DBSCAN, PCA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Q-Learning, DQN, PPO"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Typical Use Case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Spam detection, medical diagnosis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Customer segmentation, anomaly detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Game playing, robotics, autonomous driving"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Human Supervision"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High (labeling cost)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Medium (reward design)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interpretability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High to Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Medium to Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scalability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Medium (sample-inefficient)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bias-variance-tradeoff",
      children: "Bias-Variance Tradeoff"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " An archer shooting arrows at a target:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "High Bias (Underfitting)"
        }), ": All arrows cluster in the same wrong area — consistently off-target (systematic error)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "High Variance (Overfitting)"
        }), ": Arrows are scattered everywhere — some hit the bullseye, most miss wildly (inconsistent)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optimal"
        }), ": Arrows cluster tightly around the bullseye — low systematic error AND low inconsistency."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mathematical Decomposition:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The expected generalization error of a model can be decomposed into three components:"
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
                  children: "Error"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "="
                }), (0,jsx_runtime.jsxs)(_components.msup, {
                  children: [(0,jsx_runtime.jsx)(_components.mtext, {
                    children: "Bias"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  })]
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "+"
                }), (0,jsx_runtime.jsx)(_components.mtext, {
                  children: "Variance"
                }), (0,jsx_runtime.jsx)(_components.mo, {
                  children: "+"
                }), (0,jsx_runtime.jsx)(_components.mtext, {
                  children: "Irreducible Error"
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\text{Error} = \\text{Bias}^2 + \\text{Variance} + \\text{Irreducible Error}"
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
                children: "Error"
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
                height: "0.9707em",
                verticalAlign: "-0.0833em"
              }
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord text",
                children: (0,jsx_runtime.jsx)(_components.span, {
                  className: "mord",
                  children: "Bias"
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
                        height: "0.8873em"
                      },
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        style: {
                          top: "-3.1362em",
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
                height: "0.7667em",
                verticalAlign: "-0.0833em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord text",
              children: (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "Variance"
              })
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
                height: "0.6944em"
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
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bias"
        }), ": Error from approximating a complex real-world problem with a simplified model. High bias → model misses relevant patterns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Variance"
        }), ": Error from sensitivity to small fluctuations in the training set. High variance → model learns noise instead of signal."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Irreducible Error"
        }), ": Noise inherent in the problem itself — no model can reduce it."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Tradeoff:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                   \n                   Total Error\n                       |\n          +------------+------------+\n          |                         |\n       Bias²                   Variance\n          |                         |\n    (increases as model       (increases as model\n     becomes simpler)          becomes complex)\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Model Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Bias"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Variance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Total Error"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Very Simple (linear)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High (underfitting)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Moderate (pruned tree)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lowest (optimal)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Very Complex (deep tree)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High (overfitting)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How to Diagnose:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Symptom"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Bias"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Variance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fix"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Train error = 25%, Test error = 28%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increase model complexity, add features"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Train error = 0.1%, Test error = 18%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regularize, reduce features, get more data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5-fold CV: [72%, 73%, 72%, 74%, 73%]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model too simple — upgrade algorithm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5-fold CV: [98%, 72%, 97%, 71%, 96%]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model unstable — reduce complexity"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python — Visualising Bias-Variance:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\nimport matplotlib.pyplot as plt\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.preprocessing import PolynomialFeatures\nfrom sklearn.pipeline import make_pipeline\n\n# Generate noisy sine data\nnp.random.seed(42)\nX = np.linspace(0, 1, 20)\ny = np.sin(2 * np.pi * X) + 0.2 * np.random.randn(20)\nX = X.reshape(-1, 1)\n\n# Fit polynomials of varying degrees\ndegrees = [1, 4, 15]\nplt.figure(figsize=(15, 4))\n\nfor i, deg in enumerate(degrees):\n    ax = plt.subplot(1, 3, i + 1)\n    model = make_pipeline(PolynomialFeatures(deg), LinearRegression())\n    model.fit(X, y)\n    X_test = np.linspace(0, 1, 200).reshape(-1, 1)\n    y_pred = model.predict(X_test)\n    plt.scatter(X, y, color='blue', alpha=0.6, label='Training data')\n    plt.plot(X_test, y_pred, 'r-', linewidth=2, label=f'Degree {deg}')\n    plt.ylim(-2, 2)\n    plt.legend()\n    plt.title(f'Degree {deg}: {\"Underfit\" if deg==1 else \"Overfit\" if deg==15 else \"Good\"}')\n\nplt.tight_layout()\nplt.show()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-validation",
      children: "Cross-Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Before a final exam, a student takes 5 different practice tests, each covering a different subset of the material. If the student scores well on all 5, they are likely well-prepared (good generalization). If they ace one but fail four, the one they aced was probably memorized (overfitting)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " Cross-validation assesses how a model generalizes to an independent dataset by partitioning data into complementary subsets, training on some and validating on others."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "k-fold-cross-validation",
      children: "k-Fold Cross-Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shuffle the dataset randomly"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Split into ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "k"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "k"
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
                  height: "0.6944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0315em"
                },
                children: "k"
              })]
            })
          })]
        }), " equal-sized folds"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each fold ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "i = 1"
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
                  height: "0.6595em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "i"
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
        }), " to ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "k"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "k"
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
                  height: "0.6944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0315em"
                },
                children: "k"
              })]
            })
          })]
        }), ":\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Train model on all folds except fold ", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsx)(_components.mrow, {
                      children: (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      })
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "i"
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
                      height: "0.6595em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "i"
                  })]
                })
              })]
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Evaluate model on fold ", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsx)(_components.mrow, {
                      children: (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      })
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "i"
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
                      height: "0.6595em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    children: "i"
                  })]
                })
              })]
            }), " (held-out set)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Report the average performance across all ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "k"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "k"
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
                  height: "0.6944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0315em"
                },
                children: "k"
              })]
            })
          })]
        }), " folds"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION CrossValidate(Dataset D, Model M, int k)\n    Shuffle D\n    Split D into k folds: F[1], F[2], ..., F[k]\n    scores = []\n    FOR i = 1 to k:\n        train = D \\ F[i]    // all except fold i\n        val = F[i]           // fold i as validation\n        M.fit(train)\n        score = M.evaluate(val)\n        scores.append(score)\n    RETURN mean(scores), std(scores)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from sklearn.model_selection import cross_val_score, KFold\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.datasets import load_iris\n\niris = load_iris()\nX, y = iris.data, iris.target\n\nmodel = DecisionTreeClassifier(max_depth=3, random_state=42)\n\n# 5-fold cross-validation\ncv = KFold(n_splits=5, shuffle=True, random_state=42)\nscores = cross_val_score(model, X, y, cv=cv, scoring='accuracy')\n\nprint(f\"Fold scores: {scores}\")\nprint(f\"Mean accuracy: {scores.mean():.3f} (+/- {scores.std() * 2:.3f})\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison of Validation Strategies:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Data Usage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Variance of Estimate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Computation Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hold-out (70/30)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large datasets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "k-Fold CV (k=5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default choice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "k-Fold CV (k=10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small datasets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Leave-One-Out"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Maximum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Lowest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Very High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very small datasets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stratified k-Fold"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Imbalanced classes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time series"
        }), ": Standard k-Fold leaks future information — use TimeSeriesSplit instead"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Grouped data"
        }), ": Multiple rows from same patient — use GroupKFold to keep groups together"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severe class imbalance"
        }), ": Stratified k-Fold preserves class proportions in each fold"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "model-selection",
      children: "Model Selection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: When would you choose Logistic Regression over a Decision Tree?"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " When interpretability is crucial, features are roughly linear in their effects, and the dataset is small-to-medium. Logistic regression gives coefficient weights that directly show feature importance. Decision trees win when there are non-linear interactions, mixed data types, and you need robustness to outliers."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: How do you decide between Random Forest and Gradient Boosting?"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Random Forest is simpler to train (fewer hyperparameters), parallelizable, and less prone to overfitting. XGBoost/LightGBM typically achieves higher accuracy but requires careful tuning (learning rate, tree depth, subsampling). Rule: Start with Random Forest as baseline, switch to Boosting if higher accuracy is needed and you have time for hyperparameter tuning."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: What does the \"no free lunch\" theorem mean in ML?"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " No single algorithm is universally best across all problems. The algorithm that works well for image classification (CNNs) may perform poorly on tabular data (where gradient-boosted trees dominate). Always evaluate multiple algorithms for your specific task."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "regularization",
      children: "Regularization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: Explain L1 vs L2 regularization. When would you use each?"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " L1 (Lasso) adds ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "λ"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "normal",
                  children: "∥"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "w"
                }), (0,jsx_runtime.jsxs)(_components.msub, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "∥"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\lambda\\|w\\|_1"
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
              children: "λ"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "∥"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0269em"
              },
              children: "w"
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "∥"
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
          })
        })]
      }), " to the loss — it drives some weights to exactly zero, performing automatic feature selection. L2 (Ridge) adds ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                children: [(0,jsx_runtime.jsx)(_components.mi, {
                  children: "λ"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  mathvariant: "normal",
                  children: "∥"
                }), (0,jsx_runtime.jsx)(_components.mi, {
                  children: "w"
                }), (0,jsx_runtime.jsxs)(_components.msubsup, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "∥"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "2"
                  })]
                })]
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\lambda\\|w\\|_2^2"
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
                height: "1.0641em",
                verticalAlign: "-0.25em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "λ"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord",
              children: "∥"
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              style: {
                marginRight: "0.0269em"
              },
              children: "w"
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "mord",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "∥"
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
                          top: "-2.4519em",
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
                        height: "0.2481em"
                      },
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })
        })]
      }), " — it shrinks weights but never to zero, keeping all features. Use L1 when you suspect many features are irrelevant. Use L2 when all features contribute somewhat. ElasticNet combines both."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: How does regularization help the bias-variance tradeoff?"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Regularization constrains model complexity (penalizes large weights), which increases bias slightly but reduces variance significantly. The net effect is lower total error. The ", (0,jsx_runtime.jsxs)(_components.span, {
        className: "katex",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "katex-mathml",
          children: (0,jsx_runtime.jsx)(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: (0,jsx_runtime.jsxs)(_components.semantics, {
              children: [(0,jsx_runtime.jsx)(_components.mrow, {
                children: (0,jsx_runtime.jsx)(_components.mi, {
                  children: "λ"
                })
              }), (0,jsx_runtime.jsx)(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\lambda"
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
                height: "0.6944em"
              }
            }), (0,jsx_runtime.jsx)(_components.span, {
              className: "mord mathnormal",
              children: "λ"
            })]
          })
        })]
      }), " hyperparameter controls this balance — too high → underfitting, too low → overfitting."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: What is dropout and why does it work?"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Dropout randomly deactivates a fraction of neurons during each training iteration. This prevents co-adaptation (neurons relying too heavily on specific other neurons), effectively training an ensemble of thinned networks at each step. It forces each neuron to learn robust features that work independently."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "feature-engineering",
      children: "Feature Engineering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: How do you handle categorical features with high cardinality (1000+ unique values)?"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Options include: (1) Target encoding — replace category with mean target value (risks overfitting, use smoothing); (2) Count encoding — replace with frequency; (3) Embedding — learn a dense vector representation; (4) Feature hashing — hash categories into a fixed number of buckets. One-hot encoding is impractical at this cardinality."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: What is feature scaling and which algorithms require it?"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Standardization (z-score) or normalization (min-max) ensures all features contribute equally. Required for: SVM, k-NN (distance-based), PCA, neural networks, logistic regression. NOT required for: Decision trees, Random Forest (tree models split on thresholds insensitive to scale)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: What techniques handle missing data?"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " (1) Delete rows/columns (if missing proportion is small or large); (2) Mean/median imputation (simple but ignores correlations); (3) KNN imputation (uses similar rows); (4) MICE (Multiple Imputation by Chained Equations — iterative, state-of-the-art); (5) Model-based: set missing indicator + impute value, let the model learn the pattern."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-recommendation-systems-netflix",
      children: "1. Recommendation Systems (Netflix)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Predict which movies a user will enjoy based on their viewing history and the behaviour of similar users."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collaborative Filtering"
        }), " (Matrix Factorisation): Decompose the user-movie rating matrix ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "R"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "≈"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "U"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "⋅"
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "V"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "T"
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "R \\approx U \\cdot V^T"
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
                  marginRight: "0.0077em"
                },
                children: "R"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "≈"
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
                  height: "0.6833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.109em"
                },
                children: "U"
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
                  height: "0.8413em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.2222em"
                  },
                  children: "V"
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
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "U"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "U"
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
                  marginRight: "0.109em"
                },
                children: "U"
              })]
            })
          })]
        }), " captures user preferences and ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "V"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "V"
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
                  marginRight: "0.2222em"
                },
                children: "V"
              })]
            })
          })]
        }), " captures movie characteristics."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Content-Based Filtering"
        }), ": Recommend movies similar to ones the user has liked based on genre, actors, director."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hybrid"
        }), ": Netflix uses a hybrid approach combining both."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm (Alternating Least Squares — ALS):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Initialize user matrix ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "U"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "U"
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
                  marginRight: "0.109em"
                },
                children: "U"
              })]
            })
          })]
        }), " and item matrix ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "V"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "V"
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
                  marginRight: "0.2222em"
                },
                children: "V"
              })]
            })
          })]
        }), " randomly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Fix ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "U"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "U"
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
                  marginRight: "0.109em"
                },
                children: "U"
              })]
            })
          })]
        }), ", solve for ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "V"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "V"
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
                  marginRight: "0.2222em"
                },
                children: "V"
              })]
            })
          })]
        }), " that minimizes error: ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "min"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⁡"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "V"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "∥"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "R"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "−"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "U"
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "V"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "T"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.msup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      mathvariant: "normal",
                      children: "∥"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "2"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "+"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "λ"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "∥"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "V"
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
                  children: "\\min_V \\|R - UV^T\\|^2 + \\lambda\\|V\\|^2"
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
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mop",
                  children: "min"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsx)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.3283em"
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
                              style: {
                                marginRight: "0.2222em"
                              },
                              children: "V"
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
                  marginRight: "0.1667em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "∥"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0077em"
                },
                children: "R"
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
                  height: "1.0913em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.109em"
                },
                children: "U"
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.2222em"
                  },
                  children: "V"
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
                  height: "1.0641em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "λ"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "∥"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.2222em"
                },
                children: "V"
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
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Fix ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "V"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "V"
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
                  marginRight: "0.2222em"
                },
                children: "V"
              })]
            })
          })]
        }), ", solve for ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "U"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "U"
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
                  marginRight: "0.109em"
                },
                children: "U"
              })]
            })
          })]
        }), " analogously"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat until convergence"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Predict rating: ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsxs)(_components.mover, {
                      accent: "true",
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "r"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "^"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "u"
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "i"
                      })]
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "U"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "u"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "⋅"
                  }), (0,jsx_runtime.jsxs)(_components.msubsup, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "V"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "i"
                    }), (0,jsx_runtime.jsx)(_components.mi, {
                      children: "T"
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\hat{r}_{ui} = U_u \\cdot V_i^T"
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
                  height: "0.8444em",
                  verticalAlign: "-0.15em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord accent",
                  children: (0,jsx_runtime.jsx)(_components.span, {
                    className: "vlist-t",
                    children: (0,jsx_runtime.jsx)(_components.span, {
                      className: "vlist-r",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
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
                              marginRight: "0.0278em"
                            },
                            children: "r"
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
                      })
                    })
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
                            marginLeft: "-0.0278em",
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
                                children: "u"
                              }), (0,jsx_runtime.jsx)(_components.span, {
                                className: "mord mathnormal mtight",
                                children: "i"
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
                  height: "0.8333em",
                  verticalAlign: "-0.15em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.109em"
                  },
                  children: "U"
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
                            marginLeft: "-0.109em",
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
                              children: "u"
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
                  height: "1.1em",
                  verticalAlign: "-0.2587em"
                }
              }), (0,jsx_runtime.jsxs)(_components.span, {
                className: "mord",
                children: [(0,jsx_runtime.jsx)(_components.span, {
                  className: "mord mathnormal",
                  style: {
                    marginRight: "0.2222em"
                  },
                  children: "V"
                }), (0,jsx_runtime.jsx)(_components.span, {
                  className: "msupsub",
                  children: (0,jsx_runtime.jsxs)(_components.span, {
                    className: "vlist-t vlist-t2",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "vlist-r",
                      children: [(0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist",
                        style: {
                          height: "0.8413em"
                        },
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          style: {
                            top: "-2.4413em",
                            marginLeft: "-0.2222em",
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
                              className: "mord mathnormal mtight",
                              style: {
                                marginRight: "0.1389em"
                              },
                              children: "T"
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
                          height: "0.2587em"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " Netflix reported that 80% of watched content comes from recommendations, saving over $1B annually in customer retention."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-fraud-detection-banking",
      children: "2. Fraud Detection (Banking)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Identify fraudulent credit card transactions from millions of legitimate ones in real-time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Anomaly Detection"
        }), " (Isolation Forest): Isolates outliers by randomly splitting features — frauds are few and different, so they are isolated in few splits."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Supervised Classification"
        }), " (XGBoost): Trained on historical flagged transactions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Challenges:"
        }), " Extreme class imbalance (typically <0.1% are fraudulent)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python — Fraud Detection Pipeline:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from sklearn.ensemble import IsolationForest\nfrom sklearn.metrics import precision_recall_curve\nimport numpy as np\n\n# Sample: 10,000 transactions, 99.9% legitimate\nX_train = np.random.randn(10000, 30)  # 30 features\n# Inject 10 anomalies\nX_train[:10] += 10 * np.random.randn(10, 30)\n\nmodel = IsolationForest(contamination=0.01, random_state=42)\npreds = model.fit_predict(X_train)\n# -1 = anomaly, 1 = normal\nfraud_scores = model.decision_function(X_train)\nprint(f\"Anomalies detected: {sum(preds == -1)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world deployment:"
      }), " Models process thousands of transactions per second with sub-100ms latency. False positives are routed to manual review, not blocked outright."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-image-classification-healthcare--autonomous-vehicles",
      children: "3. Image Classification (Healthcare / Autonomous Vehicles)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Classify medical images (X-rays, MRIs) for disease diagnosis or identify objects (pedestrians, traffic signs) for self-driving cars."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach (Convolutional Neural Networks — CNNs):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Convolution layers"
        }), ": Learn spatial features (edges, textures, shapes)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pooling layers"
        }), ": Reduce spatial dimensions while preserving important features"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fully connected layers"
        }), ": Map extracted features to class probabilities"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Training"
        }), ": Backpropagation with millions of labeled images"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from sklearn.svm import SVC\nfrom sklearn.decomposition import PCA\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.datasets import load_digits\nfrom sklearn.model_selection import train_test_split\n\n# Handwritten digit classification (simplified)\ndigits = load_digits()\nX_train, X_test, y_train, y_test = train_test_split(\n    digits.data, digits.target, test_size=0.2, random_state=42\n)\n\n# PCA + SVM pipeline\npipeline = make_pipeline(\n    PCA(n_components=30, whiten=True),\n    SVC(kernel='rbf', C=10, gamma='scale')\n)\npipeline.fit(X_train, y_train)\nprint(f\"Test accuracy: {pipeline.score(X_test, y_test):.3f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world Impact:"
      }), " Deep learning-based medical imaging systems now match or exceed radiologist accuracy for specific tasks (retinal disease screening, mammography). Self-driving perception systems detect objects at 30+ FPS with >95% accuracy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-decision-tree-for-should-i-play-tennis",
      children: "Example 1: Decision Tree for \"Should I Play Tennis?\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The dataset contains attributes like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Outlook"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Humidity"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Wind"
      }), ", with a label ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Play"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step-by-step"
        }), ":\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Calculate the entropy of the entire dataset (", (0,jsx_runtime.jsxs)(_components.span, {
              className: "katex",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "katex-mathml",
                children: (0,jsx_runtime.jsx)(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: (0,jsx_runtime.jsxs)(_components.semantics, {
                    children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                      children: [(0,jsx_runtime.jsx)(_components.mi, {
                        children: "H"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "S"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsx)(_components.mn, {
                        children: "0.940"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "H(S) = 0.940"
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
                      marginRight: "0.0813em"
                    },
                    children: "H"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0576em"
                    },
                    children: "S"
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
                    children: "0.940"
                  })]
                })]
              })]
            }), ")."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "For each attribute, calculate the Information Gain."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Outlook"
            }), " has the highest gain (0.246) — make it the root node."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Repeat for each branch until pure or no attributes remain."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code snippet (Python with Scikit-Learn)"
        }), ":"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from sklearn.tree import DecisionTreeClassifier\nimport numpy as np\n\n# X = [Outlook, Humidity, Wind] (Encoded)\nX = np.array([[0, 0, 0], [0, 1, 1], [1, 0, 0], [1, 1, 0]])\ny = np.array([0, 1, 1, 1])  # Play?\n\nclf = DecisionTreeClassifier(criterion='entropy')\nclf.fit(X, y)\nprint(f\"Prediction for [0, 1, 0]: {clf.predict([[0, 1, 0]])}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What it demonstrates"
        }), ": How a classifier is trained on historical data to make predictions on new data."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-linear-regression-for-housing-prices",
      children: "Example 2: Linear Regression for Housing Prices"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Predict the price of a house based on its square footage."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hypothesis"
        }), ": ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mi, {
                    children: "P"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "r"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "c"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "="
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "w"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "1"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "×"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "A"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "r"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "a"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "+"
                  }), (0,jsx_runtime.jsxs)(_components.msub, {
                    children: [(0,jsx_runtime.jsx)(_components.mi, {
                      children: "w"
                    }), (0,jsx_runtime.jsx)(_components.mn, {
                      children: "0"
                    })]
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "Price = w_1 \\times Area + w_0"
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
                children: "P"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "r"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "i"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "ce"
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
                  height: "0.7667em",
                  verticalAlign: "-0.0833em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "A"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "r"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "e"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "a"
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
              })]
            })]
          })]
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Learning"
        }), ": Use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Gradient Descent"
        }), " to minimize the Mean Squared Error (MSE) between the predicted price and the actual price in the training set."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What it demonstrates"
        }), ": A simple form of supervised learning for continuous values (regression)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Learning Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Labels?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Feedback"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Goal"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supervised"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Direct (target)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Map inputs to outputs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classification, regression"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unsupervised"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discover hidden structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clustering, dimensionality reduction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reinforcement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Delayed (reward)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximize cumulative reward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Game playing, robot control"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference--key-ml-concepts",
      children: "Quick Reference — Key ML Concepts"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Formula / Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Entropy"
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
                        children: "H"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "S"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "="
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "−"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "∑"
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "p"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                          children: [(0,jsx_runtime.jsx)(_components.mi, {
                            children: "log"
                          }), (0,jsx_runtime.jsx)(_components.mo, {
                            children: "⁡"
                          })]
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "2"
                        })]
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "p"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "H(S) = -\\sum p_i \\log_2 p_i"
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
                      marginRight: "0.0813em"
                    },
                    children: "H"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mord mathnormal",
                    style: {
                      marginRight: "0.0576em"
                    },
                    children: "S"
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
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      children: "p"
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
                      marginRight: "0.1667em"
                    }
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mop",
                    children: [(0,jsx_runtime.jsxs)(_components.span, {
                      className: "mop",
                      children: ["lo", (0,jsx_runtime.jsx)(_components.span, {
                        style: {
                          marginRight: "0.0139em"
                        },
                        children: "g"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.span, {
                      className: "msupsub",
                      children: (0,jsx_runtime.jsxs)(_components.span, {
                        className: "vlist-t vlist-t2",
                        children: [(0,jsx_runtime.jsxs)(_components.span, {
                          className: "vlist-r",
                          children: [(0,jsx_runtime.jsx)(_components.span, {
                            className: "vlist",
                            style: {
                              height: "0.207em"
                            },
                            children: (0,jsx_runtime.jsxs)(_components.span, {
                              style: {
                                top: "-2.4559em",
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
                              height: "0.2441em"
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
                      children: "p"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measure impurity in a dataset"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Information Gain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$IG(S, A) = H(S) - \\sum ("
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S_v"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Majority Error"
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
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "max"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⁡"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "p"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "1 - \\max(p_i)"
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
                      height: "1em",
                      verticalAlign: "-0.25em"
                    }
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mop",
                    children: "max"
                  }), (0,jsx_runtime.jsx)(_components.span, {
                    className: "mopen",
                    children: "("
                  }), (0,jsx_runtime.jsxs)(_components.span, {
                    className: "mord",
                    children: [(0,jsx_runtime.jsx)(_components.span, {
                      className: "mord mathnormal",
                      children: "p"
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
                })]
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simpler impurity measure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gini Index"
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
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "∑"
                      }), (0,jsx_runtime.jsxs)(_components.msubsup, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "p"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        }), (0,jsx_runtime.jsx)(_components.mn, {
                          children: "2"
                        })]
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "1 - \\sum p_i^2"
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
                      height: "1.0728em",
                      verticalAlign: "-0.2587em"
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
                      children: "p"
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
                              height: "0.2587em"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alternative to entropy (faster)"
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
                      }), (0,jsx_runtime.jsx)(_components.mo, {
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
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\frac{1}{n}\\sum(y_i - \\hat{y}_i)^2"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regression loss function"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-Entropy"
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
                      }), (0,jsx_runtime.jsxs)(_components.msub, {
                        children: [(0,jsx_runtime.jsx)(_components.mi, {
                          children: "y"
                        }), (0,jsx_runtime.jsx)(_components.mi, {
                          children: "i"
                        })]
                      }), (0,jsx_runtime.jsx)(_components.mi, {
                        children: "log"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        children: "⁡"
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: "("
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
                      }), (0,jsx_runtime.jsx)(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), (0,jsx_runtime.jsx)(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "-\\sum y_i \\log(\\hat{y}_i)"
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
                    className: "mclose",
                    children: ")"
                  })]
                })
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classification loss function"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bias²"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Systematic error from simplifying assumptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error component (underfitting)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensitivity to training data fluctuations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error component (overfitting)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "ML"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "CV"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "NLP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Research"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Decision Trees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Partial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linear Regression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Partial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Partial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bias-Variance Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "k-Fold Cross-Validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Feature Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Partial"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Principal Component Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " What does a decision tree's information gain measure?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) How much information is gained by reading the data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) The reduction in entropy after splitting on an attribute"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) The accuracy of the tree on training data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) The depth of the resulting tree"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) Information gain measures the expected reduction in entropy from partitioning the data on a given attribute."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2:"
      }), " A model with high bias and low variance is likely suffering from what?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Overfitting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Underfitting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Data leakage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) The curse of dimensionality"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) High bias + low variance = underfitting (the model is too simple to capture the underlying patterns)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3:"
      }), " Why should you never evaluate model performance on the training set?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) It takes too long to compute"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) The model may have memorized (overfit) the training data, making performance appear unrealistically good"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Training data is typically too small"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) The test set is more important"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) Training set accuracy overestimates generalization because the model may have memorized noise (overfitting)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4:"
      }), " What is the key difference between supervised and unsupervised learning?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Supervised learning is faster"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Supervised learning uses labeled data; unsupervised does not"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Unsupervised learning requires a GPU"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Supervised learning cannot handle images"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) Supervised learning trains on input-output pairs (labeled data), while unsupervised learning finds patterns in unlabeled data."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5:"
      }), " In k-fold cross-validation, what does k=5 mean?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) The model is trained 5 times with different algorithms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) The data is split into 5 parts; each part is used as validation once"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) The model has 5 layers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) The training runs for 5 epochs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>B) The data is split into 5 equal folds. The model is trained on 4 folds and validated on the remaining fold, repeated 5 times."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Machine Learning shifts the focus from manual rule-writing to automated pattern discovery."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supervised learning is the most common paradigm for classification and regression."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decision trees are intuitive models that use information theory to split data effectively."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Overfitting is a primary challenge; it occurs when a model is \"memorizing\" rather than \"learning.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The bias-variance tradeoff governs model generalization — optimal complexity lies in the middle."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "k-Fold cross-validation provides a robust estimate of model performance."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Effective ML requires careful data preprocessing, feature engineering, and rigorous evaluation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The choice of hypothesis space and inductive bias determines the success of a learning agent."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Differentiate between Classification and Regression."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is \"Ockham's Razor\" and how does it relate to machine learning?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define \"Entropy\" in the context of information theory."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why should you never evaluate a model's performance using the training set?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain what the bias-variance tradeoff is in your own words."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does k-fold cross-validation differ from a simple train-test split?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculate the entropy of a set with 4 \"Yes\" and 6 \"No\" examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given a dataset, why might you choose a simple linear model over a complex high-degree polynomial, even if the polynomial has zero training error?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List three examples of real-world applications for Unsupervised Learning."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute the Information Gain for splitting the Tennis dataset on the \"Temperature\" attribute (use the table from the Decision Tree section)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The Curse of Dimensionality"
        }), ": Explain how adding more features can actually degrade the performance of a machine learning model. How does the amount of data required to maintain density change as the number of dimensions increases?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bias-Variance Analysis"
        }), ": You train three models on the same dataset: a linear regression (degree 1), a polynomial regression (degree 10), and a regularized polynomial regression (degree 10, ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsx)(_components.mrow, {
                  children: (0,jsx_runtime.jsx)(_components.mi, {
                    children: "λ"
                  })
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\lambda"
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
                  height: "0.6944em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "λ"
              })]
            })
          })]
        }), "=0.5). Their errors are: (a) Train=0.32, Test=0.35; (b) Train=0.01, Test=0.42; (c) Train=0.12, Test=0.18. Match each model to its error pair and explain your reasoning."]
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