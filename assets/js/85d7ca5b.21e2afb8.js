"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[77104],{

/***/ 46973
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_machine_learning_06_support_vector_machines_md_85d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-machine-learning-06-support-vector-machines-md-85d.json
const site_docs_courses_machine_learning_06_support_vector_machines_md_85d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/machine-learning/06-support-vector-machines","title":"Chapter 6: Support Vector Machines","description":"Previous Neural Networks","source":"@site/docs/courses/machine-learning/06-support-vector-machines.md","sourceDirName":"courses/machine-learning","slug":"/machine-learning/06-support-vector-machines","permalink":"/ai-engineering-journey/machine-learning/06-support-vector-machines","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"06-support-vector-machines","slug":"/machine-learning/06-support-vector-machines","title":"Chapter 6: Support Vector Machines","sidebar_label":"Chapter 6: Support Vector Machines","sidebar_position":6},"sidebar":"course-machine-learning","previous":{"title":"Chapter 5: Ensemble Methods","permalink":"/ai-engineering-journey/machine-learning/05-ensemble-methods"},"next":{"title":"Chapter 7: Neural Networks","permalink":"/ai-engineering-journey/machine-learning/07-neural-networks"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/machine-learning/06-support-vector-machines.md


const frontMatter = {
	id: '06-support-vector-machines',
	slug: '/machine-learning/06-support-vector-machines',
	title: 'Chapter 6: Support Vector Machines',
	sidebar_label: 'Chapter 6: Support Vector Machines',
	sidebar_position: 6
};
const contentTitle = 'Chapter 6: Support Vector Machines';

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
  "value": "The Maximum Margin Hyperplane",
  "id": "the-maximum-margin-hyperplane",
  "level": 3
}, {
  "value": "Functional Margin and Geometric Margin",
  "id": "functional-margin-and-geometric-margin",
  "level": 3
}, {
  "value": "Hard-Margin SVM (Primal Form)",
  "id": "hard-margin-svm-primal-form",
  "level": 3
}, {
  "value": "Lagrange Duality",
  "id": "lagrange-duality",
  "level": 3
}, {
  "value": "Support Vectors",
  "id": "support-vectors",
  "level": 3
}, {
  "value": "Soft-Margin SVM",
  "id": "soft-margin-svm",
  "level": 3
}, {
  "value": "The Kernel Trick",
  "id": "the-kernel-trick",
  "level": 3
}, {
  "value": "Common Kernel Functions",
  "id": "common-kernel-functions",
  "level": 3
}, {
  "value": "Multi-Class SVM",
  "id": "multi-class-svm",
  "level": 3
}, {
  "value": "SMO Algorithm (High-Level)",
  "id": "smo-algorithm-high-level",
  "level": 3
}, {
  "value": "Hinge Loss Interpretation",
  "id": "hinge-loss-interpretation",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: SVM with Hinge Loss + Gradient Descent",
  "id": "example-1-svm-with-hinge-loss--gradient-descent",
  "level": 3
}, {
  "value": "Example 2: Kernel Function Implementations",
  "id": "example-2-kernel-function-implementations",
  "level": 3
}, {
  "value": "Example 3: C Parameter Effect Visualization",
  "id": "example-3-c-parameter-effect-visualization",
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
  "value": "TypeScript Implementation: SVM Hinge Loss, Kernel Functions, and Dual Coefficients",
  "id": "typescript-implementation-svm-hinge-loss-kernel-functions-and-dual-coefficients",
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
        id: "chapter-6-support-vector-machines",
        children: "Chapter 6: Support Vector Machines"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/machine-learning/05-ensemble-methods",
          children: "Ensemble Methods"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/machine-learning/07-neural-networks",
          children: "Neural Networks"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Derive the maximum margin hyperplane and understand why margin maximization improves generalization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define functional margin, geometric margin, and their relationship"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Formulate the SVM optimization problem in primal and dual forms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the role of support vectors as the critical training examples that define the decision boundary"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Differentiate between hard-margin and soft-margin SVMs using the C parameter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the kernel trick and implement common kernel functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extend SVM to multi-class classification (one-vs-one, one-vs-rest)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Train an SVM using gradient descent with hinge loss"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "Maximum Margin Hyperplane"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SVM finds the hyperplane maximizing distance between classes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prioritize margin maximization for better generalization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Support Vectors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only closest points define the decision boundary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SVM is memory-efficient ? minority of points determine the model"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hard vs. Soft Margin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Soft margin introduces slack variables and C parameter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tune C via cross-validation to balance margin vs. misclassification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel Trick"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maps data implicitly to higher dimensions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RBF kernel is a strong default for non-linear problems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C Parameter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controls tradeoff between wide margin and training error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small C for high-dimensional sparse data; large C when clean separation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gamma ($\\gamma$)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defines radius of influence of a single training example"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High gamma causes overfitting; low gamma causes underfitting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dual Formulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expresses SVM in terms of dot products ? enables kernels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The kernel trick emerges naturally from the dual form"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lagrange Duality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Converts constrained optimization to unconstrained dual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Support vectors correspond to non-zero Lagrange multipliers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Training Data] --> B{Linearly Separable?}\n    B -->|Yes| C[Hard-Margin SVM]\n    B -->|No| D[Soft-Margin SVM]\n    D --> E[Choose Kernel]\n    E --> F[Linear]\n    E --> G[RBF]\n    E --> H[Polynomial]\n    E --> I[Sigmoid]\n    C & D --> J[Formulate Dual Problem]\n    J --> K[Solve with SMO / QP Solver]\n    K --> L[Find Support Vectors]\n    L --> M[Define Decision Function]\n    M --> N[Predict New Data]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-maximum-margin-hyperplane",
      children: "The Maximum Margin Hyperplane"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A Support Vector Machine (SVM) is a discriminative classifier that finds an optimal hyperplane to separate classes. While many hyperplanes can separate the data, SVM seeks the one with the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "maximum margin"
      }), " ? the largest distance between the hyperplane and the closest points from either class."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why maximum margin?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Larger margins correlate with better generalization (lower VC dimension)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The maximum margin hyperplane is unique (unlike perceptron solutions)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Margin maximization reduces the hypothesis space, acting as a form of regularization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "functional-margin-and-geometric-margin",
      children: "Functional Margin and Geometric Margin"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given a hyperplane $\\mathbf{w}^T\\mathbf{x} + b = 0$:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Functional margin"
      }), " of a training example $(\\mathbf{x}^{(i)}, y^{(i)})$:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\hat{\\gamma}^{(i)} = y^{(i)}(\\mathbf{w}^T\\mathbf{x}^{(i)} + b)$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The functional margin is positive if the point is correctly classified. Its magnitude is a confidence measure ? larger values indicate the point is farther from the boundary."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Geometric margin"
      }), " is the actual Euclidean distance from the point to the hyperplane:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\gamma^{(i)} = \\frac{y^{(i)}(\\mathbf{w}^T\\mathbf{x}^{(i)} + b)}{|\\mathbf{w}|} = \\frac{\\hat{\\gamma}^{(i)}}{|\\mathbf{w}|}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The margin of the hyperplane is the minimum geometric margin over all training examples."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hard-margin-svm-primal-form",
      children: "Hard-Margin SVM (Primal Form)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Assume the data is linearly separable. We want to maximize the margin $\\frac{2}{|\\mathbf{w}|}$, which is equivalent to minimizing $|\\mathbf{w}|^2$:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\min_{\\mathbf{w}, b} \\frac{1}{2}|\\mathbf{w}|^2$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Subject to:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$y^{(i)}(\\mathbf{w}^T\\mathbf{x}^{(i)} + b) \\geq 1, \\quad i = 1, \\dots, n$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The constraints ensure all points are on the correct side of the margin boundary with functional margin at least 1."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lagrange-duality",
      children: "Lagrange Duality"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To solve the constrained optimization problem, we use the Lagrangian:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\mathcal{L}(\\mathbf{w}, b, \\alpha) = \\frac{1}{2}|\\mathbf{w}|^2 - \\sum_{i=1}^{n} \\alpha_i \\left[y^{(i)}(\\mathbf{w}^T\\mathbf{x}^{(i)} + b) - 1\\right]$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where $\\alpha_i \\geq 0$ are the Lagrange multipliers."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Setting partial derivatives to zero:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\frac{\\partial \\mathcal{L}}{\\partial \\mathbf{w}} = 0 \\implies \\mathbf{w} = \\sum_{i=1}^{n} \\alpha_i y^{(i)} \\mathbf{x}^{(i)}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\frac{\\partial \\mathcal{L}}{\\partial b} = 0 \\implies \\sum_{i=1}^{n} \\alpha_i y^{(i)} = 0$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Substituting back gives the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dual form"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\max_{\\alpha} \\sum_{i=1}^{n} \\alpha_i - \\frac{1}{2} \\sum_{i=1}^{n} \\sum_{j=1}^{n} \\alpha_i \\alpha_j y^{(i)} y^{(j)} \\langle \\mathbf{x}^{(i)}, \\mathbf{x}^{(j)} \\rangle$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Subject to $\\alpha_i \\geq 0$ and $\\sum \\alpha_i y^{(i)} = 0$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight"
      }), ": The dual formulation depends only on the dot products between training examples. This is the foundation for the kernel trick."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "support-vectors",
      children: "Support Vectors"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Karush-Kuhn-Tucker (KKT)"
      }), " conditions for the SVM optimization state that for each training example:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\alpha_i \\left[ y^{(i)}(\\mathbf{w}^T\\mathbf{x}^{(i)} + b) - 1 \\right] = 0$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This means:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If $\\alpha_i = 0$, the constraint is inactive ? the point does not affect the model"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If $\\alpha_i > 0$ (support vector), the point lies exactly on the margin boundary: $y^{(i)}(\\mathbf{w}^T\\mathbf{x}^{(i)} + b) = 1$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Only the support vectors determine the decision boundary. Removing any non-support vector leaves the model unchanged."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "soft-margin-svm",
      children: "Soft-Margin SVM"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Real-world data is rarely perfectly separable. Soft-margin SVM introduces ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "slack variables"
      }), " $\\xi_i \\geq 0$ that allow points to violate the margin:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\min_{\\mathbf{w}, b, \\xi} \\frac{1}{2}|\\mathbf{w}|^2 + C \\sum_{i=1}^{n} \\xi_i$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Subject to:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$y^{(i)}(\\mathbf{w}^T\\mathbf{x}^{(i)} + b) \\geq 1 - \\xi_i, \\quad \\xi_i \\geq 0$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The C parameter"
      }), " controls the penalty:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Large C"
        }), ": High penalty for violations ? narrow margin, few support vectors, may overfit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Small C"
        }), ": Low penalty for violations ? wide margin, many support vectors, may underfit"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The dual form with soft margin becomes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\max_{\\alpha} \\sum_{i=1}^{n} \\alpha_i - \\frac{1}{2} \\sum_{i=1}^{n} \\sum_{j=1}^{n} \\alpha_i \\alpha_j y^{(i)} y^{(j)} \\langle \\mathbf{x}^{(i)}, \\mathbf{x}^{(j)} \\rangle$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Subject to $0 \\leq \\alpha_i \\leq C$ and $\\sum \\alpha_i y^{(i)} = 0$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The only difference from hard-margin is the upper bound $C$ on $\\alpha_i$."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-kernel-trick",
      children: "The Kernel Trick"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When data is not linearly separable in the original space, we can map it to a higher-dimensional feature space where linear separation is possible:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\phi: \\mathbb{R}^d \\to \\mathbb{R}^D \\quad (D > d)$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The key insight: we never need to compute $\\phi(x)$ explicitly. Instead, we use a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "kernel function"
      }), " that computes the dot product in the transformed space:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$K(\\mathbf{x}^{(i)}, \\mathbf{x}^{(j)}) = \\langle \\phi(\\mathbf{x}^{(i)}), \\phi(\\mathbf{x}^{(j)}) \\rangle$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The dual formulation only requires kernel evaluations:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$f(\\mathbf{x}) = \\sum_{i=1}^{n} \\alpha_i y^{(i)} K(\\mathbf{x}^{(i)}, \\mathbf{x}) + b$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-kernel-functions",
      children: "Common Kernel Functions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Linear Kernel"
      }), ":\n$$K(\\mathbf{x}_i, \\mathbf{x}_j) = \\mathbf{x}_i \\cdot \\mathbf{x}_j$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Equivalent to the original linear SVM. No extra mapping. Best for high-dimensional sparse data (text classification)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Polynomial Kernel"
      }), ":\n$$K(\\mathbf{x}_i, \\mathbf{x}_j) = (\\gamma \\mathbf{x}_i \\cdot \\mathbf{x}_j + r)^d$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Creates polynomial decision boundaries of degree $d$. With $d=2$, it captures all pairwise feature interactions. Sensitive to scaling."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Radial Basis Function (RBF) Kernel"
      }), ":\n$$K(\\mathbf{x}_i, \\mathbf{x}_j) = \\exp(-\\gamma |\\mathbf{x}_i - \\mathbf{x}_j|^2)$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Maps to an infinite-dimensional space. Most popular default kernel. The $\\gamma$ parameter controls the influence radius:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Small $\\gamma$: Each point influences a large region ? smoother boundary (high bias)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Large $\\gamma$: Each point influences only nearby points ? wiggly boundary (high variance)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sigmoid Kernel"
      }), ":\n$$K(\\mathbf{x}_i, \\mathbf{x}_j) = \\tanh(\\gamma \\mathbf{x}_i \\cdot \\mathbf{x}_j + r)$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Behaves like a two-layer neural network. Less commonly used."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"Kernel Function Comparison\"\n        A[Linear] --> B[Original space, no mapping]\n        C[Polynomial] --> D[Feature interactions of degree d]\n        E[RBF] --> F[Infinite-dimensional, local influence]\n        G[Sigmoid] --> H[Neural network-like behavior]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multi-class-svm",
      children: "Multi-Class SVM"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SVMs are inherently binary classifiers. For multi-class problems:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-vs-Rest (OvR)"
      }), ": Train $K$ binary SVMs, each separating one class from the rest. Predict the class with the highest decision function value. Most commonly used."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-vs-One (OvO)"
      }), ": Train $K(K-1)/2$ binary SVMs for all pairs of classes. Predict via voting. Required by some kernel implementations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "smo-algorithm-high-level",
      children: "SMO Algorithm (High-Level)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Sequential Minimal Optimization (SMO) algorithm solves the SVM dual problem efficiently:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose two Lagrange multipliers $\\alpha_i, \\alpha_j$ that violate KKT conditions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optimize $\\alpha_i, \\alpha_j$ analytically while keeping others fixed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update the bias term $b$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat until convergence"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SMO avoids general-purpose QP solvers and can scale to hundreds of thousands of examples."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hinge-loss-interpretation",
      children: "Hinge Loss Interpretation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["SVM can be interpreted as minimizing the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "hinge loss"
      }), " with L2 regularization:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\min_{\\mathbf{w}} \\sum_{i=1}^{n} \\max(0, 1 - y^{(i)}(\\mathbf{w}^T\\mathbf{x}^{(i)} + b)) + \\frac{\\lambda}{2}|\\mathbf{w}|^2$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where $\\lambda = 1/C$. This formulation allows SGD training for SVMs, making them scalable to large datasets."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The max margin hyperplane balances generalization against classification error, and the kernel trick extends SVM to non-linear problems without explicit feature mapping."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Always scale your features before applying SVM. Since SVM relies on distance calculations, features with larger numeric ranges will dominate the decision boundary unfairly."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-svm-with-hinge-loss--gradient-descent",
      children: "Example 1: SVM with Hinge Loss + Gradient Descent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * SVM classifier implemented via gradient descent on hinge loss.\n * Supports linear and RBF kernels.\n */\nclass SVM {\n    private weights: number[] = [];\n    private bias: number = 0;\n    private supportVectors: number[][] = [];\n    private supportVectorLabels: number[] = [];\n    private Xtrain: number[][] = [];\n    private ytrain: number[] = [];\n\n    constructor(\n        private kernel: 'linear' | 'rbf' = 'rbf',\n        private C: number = 1.0,\n        private gamma: number = 1.0,\n        private learningRate: number = 0.001,\n        private epochs: number = 1000\n    ) {}\n\n    private kernelFn(a: number[], b: number[]): number {\n        if (this.kernel === 'linear') {\n            return a.reduce((sum, ai, i) => sum + ai * b[i], 0);\n        } else {\n            // RBF: exp(-gamma * ||a - b||^2)\n            const dist2 = a.reduce((sum, ai, i) => sum + (ai - b[i]) ** 2, 0);\n            return Math.exp(-this.gamma * dist2);\n        }\n    }\n\n    private decisionFunction(x: number[]): number {\n        let s = this.bias;\n        // In primal form, we use weights directly for linear\n        if (this.kernel === 'linear' && this.weights.length > 0) {\n            s = this.bias + x.reduce((sum, xi, j) => sum + xi * this.weights[j], 0);\n        }\n        return s;\n    }\n\n    fit(X: number[][], y: number[]): void {\n        const n = X.length, d = X[0].length;\n        this.Xtrain = X;\n        this.ytrain = y;\n\n        if (this.kernel === 'linear') {\n            // Primal SGD with hinge loss\n            this.weights = Array(d).fill(0);\n            this.bias = 0;\n\n            for (let epoch = 0; epoch < this.epochs; epoch++) {\n                let totalLoss = 0;\n                for (let i = 0; i < n; i++) {\n                    const margin = y[i] * (this.decisionFunction(X[i]));\n                    if (margin < 1) {\n                        // Misclassified or within margin ? update with gradient\n                        for (let j = 0; j < d; j++) {\n                            this.weights[j] -= this.learningRate * (-this.C * y[i] * X[i][j] + this.weights[j] / n);\n                        }\n                        this.bias -= this.learningRate * (-this.C * y[i]);\n                        totalLoss += (1 - margin);\n                    } else {\n                        // Correct with sufficient margin ? just do regularization\n                        for (let j = 0; j < d; j++) {\n                            this.weights[j] -= this.learningRate * (this.weights[j] / n);\n                        }\n                    }\n                }\n                if (epoch % 200 === 0) {\n                    console.log(`Epoch ${epoch}, Hinge Loss: ${(totalLoss / n).toFixed(4)}`);\n                }\n            }\n        } else {\n            // For RBF kernel, store support vectors from a simplified approach\n            // (A full SMO implementation would go here)\n            this.weights = [];\n        }\n\n        // Store support vectors (points with non-zero alpha / points near margin)\n        const preds = X.map(x => this.decisionFunction(x));\n        for (let i = 0; i < n; i++) {\n            // Simplified: points with margin < 1.5 are considered support vectors\n            const margin = y[i] * preds[i];\n            if (margin < 1.5) {\n                this.supportVectors.push(X[i]);\n                this.supportVectorLabels.push(y[i]);\n            }\n        }\n    }\n\n    predict(X: number[][]): number[] {\n        if (this.kernel === 'linear' && this.weights.length > 0) {\n            return X.map(x => this.decisionFunction(x) >= 0 ? 1 : 0);\n        }\n        // Fallback to kernel prediction using stored support vectors\n        return X.map(x => {\n            let score = this.bias;\n            for (let i = 0; i < this.supportVectors.length; i++) {\n                score += this.supportVectorLabels[i] * this.kernelFn(this.supportVectors[i], x);\n            }\n            return score >= 0 ? 1 : 0;\n        });\n    }\n\n    score(X: number[][], y: number[]): number {\n        const preds = this.predict(X);\n        return preds.filter((p, i) => p === y[i]).length / y.length;\n    }\n\n    getSupportVectors(): { count: number; fraction: number } {\n        return {\n            count: this.supportVectors.length,\n            fraction: this.supportVectors.length / this.Xtrain.length\n        };\n    }\n}\n\n// Usage: Shuttle dataset classification\nconst X_shuttle = [\n    [1.0, 2.0], [2.0, 1.0], [2.0, 3.0], [3.0, 2.0],\n    [6.0, 5.0], [7.0, 6.0], [6.0, 7.0], [5.0, 6.0],\n    [1.5, 1.5], [2.5, 2.5]\n];\nconst y_shuttle = [0, 0, 0, 0, 1, 1, 1, 1, 0, 1];\n\nconsole.log('=== Linear SVM Training ===');\nconst svmLinear = new SVM('linear', 1.0, 0, 0.01, 1000);\nsvmLinear.fit(X_shuttle, y_shuttle);\nconsole.log(`Linear SVM Accuracy: ${(svmLinear.score(X_shuttle, y_shuttle) * 100).toFixed(2)}%`);\nconsole.log(`Support Vectors: ${JSON.stringify(svmLinear.getSupportVectors())}`);\n\nconsole.log('\\n=== RBF Kernel SVM ===');\nconst svmRbf = new SVM('rbf', 1.0, 0.5, 0.01, 500);\nsvmRbf.fit(X_shuttle, y_shuttle);\nconsole.log(`RBF SVM Accuracy: ${(svmRbf.score(X_shuttle, y_shuttle) * 100).toFixed(2)}%`);\n\nconsole.log('\\n=== Effect of C Parameter ===');\n[0.1, 1.0, 10.0].forEach(C => {\n    const svm = new SVM('linear', C, 0, 0.01, 500);\n    svm.fit(X_shuttle, y_shuttle);\n    console.log(`C=${C}: Accuracy=${(svm.score(X_shuttle, y_shuttle) * 100).toFixed(2)}%, Support vectors=${svm.getSupportVectors().count}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-kernel-function-implementations",
      children: "Example 2: Kernel Function Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * Standalone kernel function implementations\n */\ninterface KernelFunction {\n    name: string;\n    compute(a: number[], b: number[]): number;\n}\n\nconst linearKernel: KernelFunction = {\n    name: 'Linear',\n    compute: (a, b) => a.reduce((s, ai, i) => s + ai * b[i], 0)\n};\n\nconst polynomialKernel = (degree: number, coef0: number = 1): KernelFunction => ({\n    name: `Polynomial (d=${degree})`,\n    compute: (a, b) => {\n        const dot = a.reduce((s, ai, i) => s + ai * b[i], 0);\n        return Math.pow(dot + coef0, degree);\n    }\n});\n\nconst rbfKernel = (gamma: number): KernelFunction => ({\n    name: `RBF (gamma=${gamma})`,\n    compute: (a, b) => {\n        const dist2 = a.reduce((s, ai, i) => s + (ai - b[i]) ** 2, 0);\n        return Math.exp(-gamma * dist2);\n    }\n});\n\nconst sigmoidKernel = (gamma: number, coef0: number = 0): KernelFunction => ({\n    name: `Sigmoid (gamma=${gamma})`,\n    compute: (a, b) => {\n        const dot = a.reduce((s, ai, i) => s + ai * b[i], 0);\n        return Math.tanh(gamma * dot + coef0);\n    }\n});\n\n// Test kernels\nconst x1 = [1, 2, 3];\nconst x2 = [4, 5, 6];\n\nconst kernels = [\n    linearKernel,\n    polynomialKernel(2),\n    polynomialKernel(3),\n    rbfKernel(0.1),\n    rbfKernel(1.0),\n    sigmoidKernel(0.01)\n];\n\nconsole.log('=== Kernel Function Comparison ===');\nkernels.forEach(k => {\n    console.log(`${k.name}: K(x1, x2) = ${k.compute(x1, x2).toFixed(4)}`);\n});\n\n// Mercer's theorem check: matrix must be positive semi-definite\nfunction checkKernelPSD(kernel: KernelFunction, points: number[][]): boolean {\n    const n = points.length;\n    const K: number[][] = Array.from({ length: n }, () => Array(n).fill(0));\n    for (let i = 0; i < n; i++)\n        for (let j = 0; j < n; j++)\n            K[i][j] = kernel.compute(points[i], points[j]);\n\n    // Check eigenvalues are non-negative (simplified)\n    // For a valid kernel, the Gram matrix must be PSD\n    let diagDominated = true;\n    for (let i = 0; i < n; i++) {\n        let rowSum = 0;\n        for (let j = 0; j < n; j++) if (j !== i) rowSum += Math.abs(K[i][j]);\n        if (K[i][i] < rowSum) diagDominated = false;\n    }\n    return diagDominated;\n}\n\nconst testPoints = [[0, 0], [1, 0], [0, 1], [1, 1]];\nconsole.log('\\n=== Kernel Validity Check (PSD) ===');\nkernels.forEach(k => {\n    console.log(`${k.name}: Valid kernel = ${checkKernelPSD(k, testPoints)}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-c-parameter-effect-visualization",
      children: "Example 3: C Parameter Effect Visualization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * Demonstrates the effect of C on the decision boundary.\n * Small C = wide margin, more support vectors, more misclassifications tolerated.\n * Large C = narrow margin, fewer support vectors, hard to misclassify.\n */\nfunction simulateCBoundary(Cvalues: number[]): void {\n    // Small 2D dataset\n    const X = [[1, 1], [2, 2], [1, 3], [3, 1], [5, 5], [6, 6], [5, 7], [7, 5]];\n    const y = [0, 0, 0, 0, 1, 1, 1, 1];\n\n    Cvalues.forEach(C => {\n        const svm = new SVM('linear', C, 0, 0.01, 1000);\n        svm.fit(X, y);\n        const sv = svm.getSupportVectors();\n        const acc = svm.score(X, y);\n        console.log(`C=${C.toFixed(1)}: Accuracy=${(acc * 100).toFixed(1)}%, SVs=${sv.count}/${X.length}`);\n    });\n}\n\nconsole.log('\\n=== C Parameter Effect ===');\nsimulateCBoundary([0.01, 0.1, 1.0, 10.0, 100.0]);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " SVM's hinge loss + kernel trick enables non-linear classification in high-dimensional spaces, with support vector sparsity providing computational efficiency."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always scale features"
        }), " ? SVM is distance-based; features with larger ranges dominate unfairly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RBF kernel is the safe default"
        }), " ? set $\\gamma = 1/d$, then tune around it"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tune C via cross-validation"
        }), " ? small C for wide margin (simpler model), large C for tight fit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SVMs work well when $d > n$"
        }), " ? text classification with TF-IDF is a classic sweet spot"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SVMs provide no probability estimates natively"
        }), " ? Platt scaling adds calibration but is expensive"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For large datasets ($n > 100{,}000$), prefer linear SVM"
        }), " ? train with SGD on hinge loss; avoid kernels"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Support vectors are training data"
        }), " ? the model size grows with the number of SVs, not with $d$"]
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
            children: "Hard Margin SVM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Perfect separation with zero tolerance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assumes linearly separable data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clean synthetic data or theory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Soft Margin SVM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allows misclassifications via slack $\\xi$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handles overlapping classes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most real-world classification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linear Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$K(x_i, x_j) = x_i \\cdot x_j$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No feature mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text classification, high-dim sparse"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RBF Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\exp(-\\gamma|x_i - x_j|^2)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-linear, infinite-dim mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default choice for most problems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Polynomial Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$(x_i \\cdot x_j + r)^d$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polynomial interactions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data with known polynomial relationships"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SVM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max margin classifier via support vectors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decision from critical points only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary and multi-class classification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logistic Regression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probabilistic linear classifier using MLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Outputs calibrated probabilities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When calibrated probabilities are essential"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hinge Loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\max(0, 1 - y \\cdot \\hat{y})$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convex surrogate for 0-1 loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables SGD training for SVMs"
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
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Formula / Detail"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hyperplane Equation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\mathbf{w}^T\\mathbf{x} + b = 0$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Geometric Margin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\frac{2}{|\\mathbf{w}|}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hard Margin Objective"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\min \\frac{1}{2}|\\mathbf{w}|^2 \\quad \\text{s.t.} \\quad y_i(\\mathbf{w}^T\\mathbf{x}_i + b) \\geq 1$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Soft Margin Objective"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\min \\frac{1}{2}|\\mathbf{w}|^2 + C\\sum\\xi_i$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dual Objective"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\max \\sum \\alpha_i - \\frac{1}{2}\\sum\\sum \\alpha_i\\alpha_j y_i y_j \\langle x_i, x_j\\rangle$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Decision Function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$f(x) = \\sum \\alpha_i y_i K(x_i, x) + b$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linear Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$K(x_i, x_j) = x_i \\cdot x_j$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RBF Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$K(x_i, x_j) = \\exp(-\\gamma|x_i - x_j|^2)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Polynomial Kernel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$K(x_i, x_j) = (\\gamma x_i \\cdot x_j + r)^d$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hinge Loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\max(0, 1 - y f(x))$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C Parameter Range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$10^{-3}$ to $10^{3}$ (typical search range)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gamma Default"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\gamma = 1 / n_{\\text{features}}$"
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
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How SVM Is Used"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bioinformatics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protein fold classification, gene expression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear kernel on gene vectors ($d \\gg n$)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Image Recognition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handwritten digit recognition, face detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RBF kernel on pixel intensity features"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Text Classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spam detection, sentiment analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear kernel on TF-IDF vectors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Finance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Credit scoring, stock market prediction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Soft margin with tuned C for noisy data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Healthcare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disease diagnosis from medical records"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RBF kernel for non-linear symptom-disease relationships"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cybersecurity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malware classification, intrusion detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-class SVM for anomaly detection"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What happens to the SVM decision boundary as the regularization parameter C approaches infinity?\nA) The margin becomes wider\nB) The margin becomes narrower\nC) The kernel type automatically changes\nD) Support vectors are ignored"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** As C ? 8, the model severely penalizes misclassifications, forcing a narrower margin to correctly classify all training points ? approaching the hard-margin solution.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Which of the following is NOT a standard SVM kernel?\nA) Linear\nB) RBF\nC) Polynomial\nD) Ensemble"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**D)** Ensemble is not a kernel. SVM kernels include Linear, Polynomial, RBF, and Sigmoid.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In SVM, support vectors are best described as:\nA) All training points used during model fitting\nB) Points that lie on the margin boundary\nC) The centroid of each class\nD) The first K points selected during training"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** Support vectors are the data points that lie on the margin boundaries. Only these points influence the separating hyperplane.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the primary advantage of the RBF kernel over the linear kernel?\nA) It requires less training data\nB) It can model non-linear decision boundaries\nC) It is faster to compute\nD) It produces more support vectors"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** The RBF kernel maps data to an infinite-dimensional space, enabling non-linear decision boundaries without explicit feature engineering.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does the dual formulation of SVM enable the kernel trick?\nA) It reduces the number of support vectors\nB) It expresses the objective solely in terms of dot products between training examples\nC) It eliminates the bias term b\nD) It converts the problem to an unconstrained optimization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** The dual formulation depends only on $\\langle x_i, x_j\\rangle$, which can be replaced by $K(x_i, x_j)$ without ever computing $\\phi(x)$ explicitly.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-svm-hinge-loss-kernel-functions-and-dual-coefficients",
      children: "TypeScript Implementation: SVM Hinge Loss, Kernel Functions, and Dual Coefficients"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type KernelFunction = (x1: number[], x2: number[]) => number;\n\nclass Kernel {\n    static linear(): KernelFunction {\n        return (x1, x2) => x1.reduce((s, v, i) => s + v * x2[i], 0);\n    }\n\n    static polynomial(degree: number = 3, coef0: number = 1): KernelFunction {\n        return (x1, x2) => Math.pow(x1.reduce((s, v, i) => s + v * x2[i], 0) + coef0, degree);\n    }\n\n    static rbf(gamma: number = 0.1): KernelFunction {\n        return (x1, x2) => Math.exp(-gamma * x1.reduce((s, v, i) => s + (v - x2[i]) ** 2, 0));\n    }\n}\n\nclass SVM {\n    private weights: number[] = [];\n    private bias: number = 0;\n    private C: number;\n    private lr: number;\n    private epochs: number;\n\n    constructor(C: number = 1.0, lr: number = 0.001, epochs: number = 1000) {\n        this.C = C; this.lr = lr; this.epochs = epochs;\n    }\n\n    hingeLoss(features: number[][], labels: number[]): number {\n        let loss = 0;\n        const n = features.length;\n        for (let i = 0; i < n; i++) {\n            const score = features[i].reduce((s, f, j) => s + f * this.weights[j], this.bias);\n            loss += Math.max(0, 1 - labels[i] * score);\n        }\n        const reg = this.weights.reduce((s, w) => s + w * w, 0) / 2;\n        return reg + this.C * loss / n;\n    }\n\n    fit(features: number[][], labels: number[]): void {\n        const n = features.length;\n        const d = features[0].length;\n        const y = labels.map(l => l === 0 ? -1 : 1);\n        this.weights = new Array(d).fill(0);\n        this.bias = 0;\n\n        for (let ep = 0; ep < this.epochs; ep++) {\n            for (let i = 0; i < n; i++) {\n                const score = features[i].reduce((s, f, j) => s + f * this.weights[j], this.bias);\n                const condition = y[i] * score < 1;\n                for (let j = 0; j < d; j++) {\n                    const gradW = this.weights[j] - this.C * (condition ? y[i] * features[i][j] : 0);\n                    this.weights[j] -= this.lr * gradW;\n                }\n                if (condition) this.bias -= this.lr * (-this.C * y[i]);\n            }\n        }\n    }\n\n    predict(features: number[]): number {\n        const score = features.reduce((s, f, j) => s + f * this.weights[j], this.bias);\n        return score >= 0 ? 1 : 0;\n    }\n}\n\nclass DualSVM {\n    private alphas: number[] = [];\n    private bias: number = 0;\n    private kernel: KernelFunction;\n    private C: number;\n    private X: number[][] = [];\n    private y: number[] = [];\n\n    constructor(C: number = 1.0, kernel: KernelFunction = Kernel.rbf(0.1)) {\n        this.C = C; this.kernel = kernel;\n    }\n\n    fit(features: number[][], labels: number[]): void {\n        this.X = features; this.y = labels.map(l => l === 0 ? -1 : 1);\n        const n = features.length;\n        this.alphas = new Array(n).fill(0);\n\n        for (let epoch = 0; epoch < 100; epoch++) {\n            for (let i = 0; i < n; i++) {\n                let sum = 0;\n                for (let j = 0; j < n; j++) {\n                    sum += this.alphas[j] * this.y[j] * this.kernel(features[i], features[j]);\n                }\n                const Ei = sum - this.y[i];\n                const eta = 2 * this.kernel(features[i], features[i]);\n                if (Math.abs(eta) < 1e-12) continue;\n                const newAlpha = this.alphas[i] + this.y[i] * Ei / eta;\n                this.alphas[i] = Math.max(0, Math.min(this.C, newAlpha));\n            }\n        }\n\n        let biasSum = 0; let count = 0;\n        for (let i = 0; i < n; i++) {\n            if (this.alphas[i] > 0 && this.alphas[i] < this.C) {\n                let sum = 0;\n                for (let j = 0; j < n; j++) sum += this.alphas[j] * this.y[j] * this.kernel(features[i], features[j]);\n                biasSum += this.y[i] - sum; count++;\n            }\n        }\n        this.bias = count > 0 ? biasSum / count : 0;\n    }\n\n    predict(features: number[]): number {\n        let sum = 0;\n        for (let i = 0; i < this.X.length; i++) {\n            if (this.alphas[i] > 1e-6) {\n                sum += this.alphas[i] * this.y[i] * this.kernel(features, this.X[i]);\n            }\n        }\n        return sum + this.bias >= 0 ? 1 : 0;\n    }\n\n    getSupportVectors(): number {\n        return this.alphas.filter(a => a > 1e-6).length;\n    }\n}\n\n// Demo\nconst X = [[1, 2], [2, 1], [2, 3], [3, 2], [5, 6], [6, 5], [6, 7], [7, 6], [8, 9], [9, 8]];\nconst y = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1];\n\nconst svm = new SVM(0.5, 0.001, 2000);\nsvm.fit(X, y);\nconsole.log(\"SVM hinge loss:\", svm.hingeLoss(X, y).toFixed(4));\nconsole.log(\"SVM predict [4,4]:\", svm.predict([4, 4]));\n\nconst dual = new DualSVM(0.5, Kernel.rbf(0.2));\ndual.fit(X, y);\nconsole.log(\"Dual SVM predict [4,4]:\", dual.predict([4, 4]));\nconsole.log(\"Support vectors:\", dual.getSupportVectors());\nconsole.log(\"Linear kernel test:\", Kernel.linear()([1, 2], [3, 4]));\nconsole.log(\"Poly kernel test:\", Kernel.polynomial(2)([1, 2], [3, 4]));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// support vector machines\n// ml-supervised-unsupervised implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'support vector machines', data: { topic: 'ml-supervised-unsupervised' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// support vector machines - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'ml-algorithms demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'machine-learning', chapter: 'support vector machines' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('ml-algorithms'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SVMs find the maximum margin hyperplane, which provides better generalization than any other separating hyperplane."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The functional and geometric margins formalize the distance from a point to the decision boundary."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The primal optimization problem minimizes $|\\mathbf{w}|^2$ subject to correct classification constraints."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lagrange duality converts the constrained primal to an unconstrained dual, expressed entirely in dot products."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support vectors are the only training points that define the model ? KKT conditions ensure non-support vectors have zero Lagrange multiplier."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The soft-margin C parameter controls the tradeoff between margin width and training error."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The kernel trick enables non-linear classification without explicit feature mapping."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Common kernels include linear, polynomial, RBF, and sigmoid ? RBF is the default."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-class SVM is handled via one-vs-rest or one-vs-one."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " SVMs combine max-margin theory with the kernel trick to create powerful, sparse classifiers that excel in high-dimensional spaces."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is a \"larger margin\" generally better for generalization on unseen data?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What happens to the SVM decision boundary as the parameter $C$ increases toward infinity?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In your own words, explain how the Kernel Trick avoids the \"curse of dimensionality.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between a primal and a dual optimization problem in the context of SVMs?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does the RBF kernel have an infinite-dimensional feature space?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You have a dataset with points $(1, 1), (2, 2)$ in Class A and $(5, 5), (6, 6)$ in Class B. Identify the maximum margin hyperplane and the support vectors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If you use a Polynomial kernel with $d=2$ on 2D data, how many effective dimensions are in the feature space?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For a soft-margin SVM with $C=0.1$, would you expect more or fewer support vectors than with $C=100$? Explain."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute the RBF kernel value for $\\mathbf{x}_1 = [1, 2]$, $\\mathbf{x}_2 = [4, 6]$ with $\\gamma = 0.1$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show that the linear kernel is a special case of the polynomial kernel."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare SVM and Logistic Regression. In what situations would you prefer one over the other? Consider factors like dataset size, number of features, the presence of outliers, and whether calibrated probabilities are needed. Mathematically compare the hinge loss and log loss functions."
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