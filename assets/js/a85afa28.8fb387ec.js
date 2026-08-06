"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[47851],{

/***/ 58642
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_engineering_mathematics_09_optimization_md_a85_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-engineering-mathematics-09-optimization-md-a85.json
const site_docs_courses_engineering_mathematics_09_optimization_md_a85_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/engineering-mathematics/09-optimization","title":"Chapter 9: Optimization","description":"Previous Integral Transforms | Next Vector Calculus & Applications","source":"@site/docs/courses/engineering-mathematics/09-optimization.md","sourceDirName":"courses/engineering-mathematics","slug":"/engineering-mathematics/09-optimization","permalink":"/ai-engineering-journey/engineering-mathematics/09-optimization","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"id":"09-optimization","slug":"/engineering-mathematics/09-optimization","title":"Chapter 9: Optimization","sidebar_label":"Chapter 9: Optimization","sidebar_position":9},"sidebar":"coursesSidebar","previous":{"title":"Chapter 8: Integral Transforms","permalink":"/ai-engineering-journey/engineering-mathematics/08-integral-transforms"},"next":{"title":"Chapter 10: Vector Calculus & Applications","permalink":"/ai-engineering-journey/engineering-mathematics/10-vector-calculus"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/engineering-mathematics/09-optimization.md


const frontMatter = {
	id: '09-optimization',
	slug: '/engineering-mathematics/09-optimization',
	title: 'Chapter 9: Optimization',
	sidebar_label: 'Chapter 9: Optimization',
	sidebar_position: 9
};
const contentTitle = 'Chapter 9: Optimization';

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
  "value": "9.1 Classification of Optimization Problems",
  "id": "91-classification-of-optimization-problems",
  "level": 3
}, {
  "value": "9.2 Unconstrained Optimization",
  "id": "92-unconstrained-optimization",
  "level": 3
}, {
  "value": "9.2.1 Gradient Descent",
  "id": "921-gradient-descent",
  "level": 4
}, {
  "value": "9.2.2 Conjugate Gradient",
  "id": "922-conjugate-gradient",
  "level": 4
}, {
  "value": "9.2.3 Newton&#39;s Method",
  "id": "923-newtons-method",
  "level": 4
}, {
  "value": "9.2.4 Quasi-Newton Methods",
  "id": "924-quasi-newton-methods",
  "level": 4
}, {
  "value": "9.3 Constrained Optimization",
  "id": "93-constrained-optimization",
  "level": 3
}, {
  "value": "9.3.1 Equality Constraints",
  "id": "931-equality-constraints",
  "level": 4
}, {
  "value": "9.3.2 Inequality Constraints",
  "id": "932-inequality-constraints",
  "level": 4
}, {
  "value": "9.3.3 Sensitivity Analysis",
  "id": "933-sensitivity-analysis",
  "level": 4
}, {
  "value": "9.4 Linear Programming",
  "id": "94-linear-programming",
  "level": 3
}, {
  "value": "9.5 Convex Optimization",
  "id": "95-convex-optimization",
  "level": 3
}, {
  "value": "9.6 Stochastic Optimization",
  "id": "96-stochastic-optimization",
  "level": 3
}, {
  "value": "9.7 Duality and Augmented Lagrangian",
  "id": "97-duality-and-augmented-lagrangian",
  "level": 3
}, {
  "value": "9.8 Applications",
  "id": "98-applications",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Gradient Descent",
  "id": "example-1-gradient-descent",
  "level": 3
}, {
  "value": "Example 2: Linear Programming ? Simplex",
  "id": "example-2-linear-programming--simplex",
  "level": 3
}, {
  "value": "Example 4: KKT Conditions",
  "id": "example-4-kkt-conditions",
  "level": 3
}, {
  "value": "TypeScript Implementation: Particle Swarm Optimization",
  "id": "typescript-implementation-particle-swarm-optimization",
  "level": 3
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
  "value": "Additional Exercises",
  "id": "additional-exercises",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Optimization Checklist",
  "id": "optimization-checklist",
  "level": 3
}, {
  "value": "TypeScript Example: Gradient Descent",
  "id": "typescript-example-gradient-descent",
  "level": 2
}, {
  "value": "Real-World Application: Training Neural Networks",
  "id": "real-world-application-training-neural-networks",
  "level": 3
}, {
  "value": "TypeScript Examples",
  "id": "typescript-examples",
  "level": 2
}, {
  "value": "Example 6: Adam Optimizer Implementation",
  "id": "example-6-adam-optimizer-implementation",
  "level": 3
}, {
  "value": "Example 7: Simplex Method for Linear Programming",
  "id": "example-7-simplex-method-for-linear-programming",
  "level": 3
}, {
  "value": "Example 8: Conjugate Gradient Method",
  "id": "example-8-conjugate-gradient-method",
  "level": 3
}, {
  "value": "Example 5: ADMM for Lasso Regression",
  "id": "example-5-admm-for-lasso-regression",
  "level": 3
}, {
  "value": "Mermaid: Optimization Algorithm Classification",
  "id": "mermaid-optimization-algorithm-classification",
  "level": 3
}, {
  "value": "Notation Reference",
  "id": "notation-reference",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    span: "span",
    strong: "strong",
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
        id: "chapter-9-optimization",
        children: "Chapter 9: Optimization"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/engineering-mathematics/08-integral-transforms",
          children: "Chapter 8: Integral Transforms"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/engineering-mathematics/10-vector-calculus",
          children: "Chapter 10: Vector Calculus & Applications"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, you will be able to:"
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
        href: "../../assets/images/lessons/engineering-mathematics/09-optimization/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/engineering-mathematics/09-optimization/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/engineering-mathematics/09-optimization/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/engineering-mathematics/09-optimization/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/engineering-mathematics/09-optimization/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/engineering-mathematics/09-optimization/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Classify optimization problems by convexity, constraints, and smoothness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve unconstrained optimization using gradient descent and Newton's method"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply Lagrange multipliers and KKT conditions for constrained optimization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Formulate and solve linear programming problems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand convex optimization and its special structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply optimization to machine learning training, resource allocation, and engineering design"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Convexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local minimum = global minimum for convex problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Why convex optimization is \"easy\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gradient Descent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$x_{k+1} = x_k - \\alpha \\nabla f(x_k)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The workhorse of ML training"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KKT Conditions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\nabla f = \\sum \\lambda_i \\nabla g_i + \\sum \\mu_j \\nabla h_j$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Necessary conditions for constrained optimum"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linear Programming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimize $c^T x$ subject to $Ax \\leq b$, $x \\geq 0$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource allocation, scheduling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Duality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primal $\\leftrightarrow$ Dual provides bounds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensitivity analysis, distributed optimization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Convexity & Classification] --> B[Unconstrained Optimization]\n    B --> C[Gradient Methods]\n    C --> D[Newton & Quasi-Newton]\n    D --> E[Constrained Optimization]\n    E --> F[KKT Conditions]\n    F --> G[Linear Programming]\n    G --> H[Duality & Applications]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-classification-of-optimization-problems",
      children: "9.1 Classification of Optimization Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "General Form:"
      }), "\n$$\\min_{x \\in \\mathbb{R}^n} f(x) \\quad \\text{subject to} \\quad g_i(x) \\leq 0, ; h_j(x) = 0$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Categories:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Objective"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Constraints"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linear Program"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource allocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quadratic Program"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quadratic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Support vector machines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Convex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convex set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most ML problems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nonconvex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nonconvex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Neural network training"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Discrete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traveling salesman"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Convex Set:"
      }), " $S$ is convex if for any $x, y \\in S$ and $\\lambda \\in [0,1]$, $\\lambda x + (1-\\lambda)y \\in S$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Convex Function:"
      }), " $f$ is convex if for any $x, y$ and $\\lambda \\in [0,1]$:\n$$f(\\lambda x + (1-\\lambda)y) \\leq \\lambda f(x) + (1-\\lambda)f(y)$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "First-Order Condition (for differentiable $f$):"
      }), " $f$ is convex iff:\n$$f(y) \\geq f(x) + \\nabla f(x)^T (y - x)$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Second-Order Condition (for twice differentiable $f$):"
      }), " $f$ is convex iff $\\nabla^2 f(x) \\succeq 0$ (Hessian is positive semidefinite)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-unconstrained-optimization",
      children: "9.2 Unconstrained Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Optimality Conditions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "First-order necessary:"
        }), " $\\nabla f(x^*) = 0$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Second-order necessary:"
        }), " $\\nabla^2 f(x^*) \\succeq 0$ (for minimum)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Second-order sufficient:"
        }), " $\\nabla f(x^", (0,jsx_runtime.jsx)(_components.em, {
          children: ") = 0$ and $\\nabla^2 f(x^"
        }), ") \\succ 0$"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithms:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "921-gradient-descent",
      children: "9.2.1 Gradient Descent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$x_{k+1} = x_k - \\alpha_k \\nabla f(x_k)$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Convergence:"
      }), " Linear rate for strongly convex functions, sublinear for general convex."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Choosing Step Size $\\alpha_k$:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fixed:"
        }), " Simple but may diverge if too large"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exact line search:"
        }), " $\\alpha_k = \\arg\\min_\\alpha f(x_k - \\alpha \\nabla f(x_k))$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backtracking (Armijo):"
        }), " Reduce $\\alpha$ until $f(x_k - \\alpha \\nabla f) \\leq f(x_k) - c\\alpha |\\nabla f|^2$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Diminishing:"
        }), " $\\alpha_k \\to 0$ with $\\sum \\alpha_k = \\infty$ (e.g., $\\alpha_k = 1/k$)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "922-conjugate-gradient",
      children: "9.2.2 Conjugate Gradient"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$d_{k+1} = -\\nabla f(x_{k+1}) + \\beta_k d_k$$\n$$x_{k+1} = x_k + \\alpha_k d_k$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where $\\beta_k = \\frac{\\nabla f(x_{k+1})^T \\nabla f(x_{k+1})}{\\nabla f(x_k)^T \\nabla f(x_k)}$ (Fletcher-Reeves)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Converges in $n$ steps for quadratic functions, faster than gradient descent in practice."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "923-newtons-method",
      children: "9.2.3 Newton's Method"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$x_{k+1} = x_k - [\\nabla^2 f(x_k)]^{-1} \\nabla f(x_k)$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Convergence:"
      }), " Quadratic near optimum. Requires Hessian computation and inversion ($O(n^3)$)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "924-quasi-newton-methods",
      children: "9.2.4 Quasi-Newton Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Approximate Hessian without computing second derivatives."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BFGS Update:"
      }), "\n$$B_{k+1} = B_k + \\frac{y_k y_k^T}{y_k^T s_k} - \\frac{B_k s_k s_k^T B_k}{s_k^T B_k s_k}$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where $s_k = x_{k+1} - x_k$ and $y_k = \\nabla f(x_{k+1}) - \\nabla f(x_k)$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "L-BFGS:"
      }), " Limited-memory version ? stores only recent $s_k, y_k$ pairs instead of full matrix."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-constrained-optimization",
      children: "9.3 Constrained Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "931-equality-constraints",
      children: "9.3.1 Equality Constraints"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\min_{x} f(x) \\quad \\text{s.t.} \\quad h(x) = 0$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lagrange Multiplier Method:"
      }), " Define Lagrangian $L(x, \\lambda) = f(x) + \\lambda^T h(x)$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Necessary Conditions:"
      }), " $\\nabla L(x^", (0,jsx_runtime.jsx)(_components.em, {
        children: ", \\lambda^"
      }), ") = 0$, which gives:\n$$\\nabla f(x^", (0,jsx_runtime.jsx)(_components.em, {
        children: ") + \\sum_j \\lambda_j^"
      }), " \\nabla h_j(x^", (0,jsx_runtime.jsx)(_components.em, {
        children: ") = 0$$\n$$h_j(x^"
      }), ") = 0$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "932-inequality-constraints",
      children: "9.3.2 Inequality Constraints"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\min_{x} f(x) \\quad \\text{s.t.} \\quad g(x) \\leq 0$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "KKT (Karush-Kuhn-Tucker) Conditions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For $x^*$ to be optimal (under constraint qualification):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stationarity:"
        }), " $0 \\in \\partial f(x^", (0,jsx_runtime.jsx)(_components.em, {
          children: ") + \\sum \\mu_i \\partial g_i(x^"
        }), ")$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Primal Feasibility:"
        }), " $g_i(x^*) \\leq 0$ for all $i$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dual Feasibility:"
        }), " $\\mu_i \\geq 0$ for all $i$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complementary Slackness:"
        }), " $\\mu_i g_i(x^*) = 0$ for all $i$"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Interpretation:"
      }), " $\\mu_i = 0$ if constraint is inactive ($g_i(x^", (0,jsx_runtime.jsx)(_components.em, {
        children: ") < 0$); $\\mu_i > 0$ if constraint is active ($g_i(x^"
      }), ") = 0$)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "933-sensitivity-analysis",
      children: "9.3.3 Sensitivity Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Lagrange multipliers $\\lambda_i, \\mu_i$ represent the rate of change of the optimal objective with respect to constraint relaxation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\frac{\\partial f^*}{\\partial b_i} = -\\lambda_i$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where $b_i$ is the right-hand side of constraint $i$."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "94-linear-programming",
      children: "9.4 Linear Programming"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Standard Form:"
      }), "\n$$\\min_{x \\in \\mathbb{R}^n} c^T x \\quad \\text{s.t.} \\quad Ax \\leq b, ; x \\geq 0$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dual Linear Program:"
      }), "\n$$\\max_{y \\in \\mathbb{R}^m} b^T y \\quad \\text{s.t.} \\quad A^T y \\geq c, ; y \\geq 0$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Duality Theorems:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Weak Duality:"
        }), " $c^T x \\geq b^T y$ for any feasible primal $x$ and dual $y$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Strong Duality:"
        }), " If primal has optimal $x^", (0,jsx_runtime.jsx)(_components.em, {
          children: "$, dual has optimal $y^"
        }), "$ with $c^T x^* = b^T y^*$"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fundamental Theorem of Linear Programming:"
      }), " The optimal solution occurs at a vertex (extreme point) of the feasible region."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Simplex Method:"
      }), " Moves from vertex to vertex along edges of the feasible polytope, improving the objective at each step."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Interior Point Methods:"
      }), " Follow the central path through the interior of the feasible region. Polynomial-time ($O(n^{3.5}L)$). Often faster than simplex for large problems."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "95-convex-optimization",
      children: "9.5 Convex Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Every local minimum is a global minimum"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The feasible set is convex"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The objective function is convex"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can be solved efficiently (polynomial time)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cone Programming Hierarchy:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear objective + linear constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource allocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quadratic convex objective + linear constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SVMs, portfolio"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SOCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear objective + second-order cone constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Robust optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SDP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear objective + positive semidefinite cone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max-cut relaxation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CVX Modeling:"
      }), " Tools like CVX, CVXPY, and YALMIP allow specifying convex problems in natural mathematical notation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "96-stochastic-optimization",
      children: "9.6 Stochastic Optimization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Stochastic Gradient Descent (SGD):"
      }), " Uses a random subset of data (mini-batch) to estimate the gradient:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$x_{k+1} = x_k - \\alpha_k \\cdot \\frac{1}{|B|} \\sum_{i \\in B} \\nabla f_i(x_k)$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Convergence:"
      }), " Sublinear for convex, can escape saddle points in nonconvex settings."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Variants:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Momentum:"
        }), " $v_{k+1} = \\beta v_k + (1-\\beta)\\nabla f(x_k)$, $x_{k+1} = x_k - \\alpha v_{k+1}$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Adam:"
        }), " Adaptive moment estimation with per-parameter learning rates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AdaGrad:"
        }), " Adaptive gradient with decreasing learning rates for frequent parameters"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RMSProp:"
        }), " RMS of recent gradients for normalization"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "97-duality-and-augmented-lagrangian",
      children: "9.7 Duality and Augmented Lagrangian"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lagrangian Dual:"
      }), " $g(\\lambda, \\mu) = \\min_x L(x, \\lambda, \\mu)$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Weak Duality:"
      }), " $g(\\lambda, \\mu) \\leq f(x^*)$ for any feasible $\\lambda \\geq 0, \\mu$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Strong Duality (Slater's Condition):"
      }), " If a convex problem has a strictly feasible point, then $\\max g = f^*$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Augmented Lagrangian:"
      }), "\n$$L_\\rho(x, \\lambda) = f(x) + \\lambda^T h(x) + \\frac{\\rho}{2}|h(x)|^2$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ADMM (Alternating Direction Method of Multipliers):"
      }), " Splits variables for separable problems:\n$$x^{k+1} = \\arg\\min_x L_\\rho(x, z^k, \\lambda^k)$$\n$$z^{k+1} = \\arg\\min_z L_\\rho(x^{k+1}, z, \\lambda^k)$$\n$$\\lambda^{k+1} = \\lambda^k + \\rho(h(x^{k+1}) + g(z^{k+1}) - b)$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "98-applications",
      children: "9.8 Applications"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Machine Learning ? Empirical Risk Minimization:"
      }), "\n$$\\min_w \\frac{1}{n} \\sum_{i=1}^n L(y_i, f(x_i, w)) + \\lambda |w|^2$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The first term is data fit; the second is regularization (convex if $L$ is convex in $w$)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Support Vector Machine (Primal):"
      }), "\n$$\\min_{w,b} \\frac{1}{2}|w|^2 + C \\sum_{i=1}^n \\xi_i$$\n$$\\text{s.t.} \\quad y_i(w^T x_i + b) \\geq 1 - \\xi_i, ; \\xi_i \\geq 0$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Portfolio Optimization (Markowitz):"
      }), "\n$$\\min_w w^T \\Sigma w \\quad \\text{s.t.} \\quad \\mu^T w \\geq R, ; \\sum w_i = 1$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Optimal Transport:"
      }), " Minimize the cost of moving mass between distributions:\n$$\\min_P \\langle C, P \\rangle \\quad \\text{s.t.} \\quad P\\mathbf{1} = r, ; P^T\\mathbf{1} = c$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-gradient-descent",
      children: "Example 1: Gradient Descent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Minimize $f(x) = x^2 + 2y^2$ starting from $(1,1)$ with $\\alpha = 0.1$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$\\nabla f = \\langle 2x, 4y \\rangle$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Iterations:\n$(x_0, y_0) = (1, 1)$, $f = 3$\n$(x_1, y_1) = (1, 1) - 0.1\\langle 2, 4 \\rangle = (0.8, 0.6)$, $f = 0.64 + 0.72 = 1.36$\n$(x_2, y_2) = (0.8, 0.6) - 0.1\\langle 1.6, 2.4 \\rangle = (0.64, 0.36)$, $f = 0.41 + 0.26 = 0.67$\n$(x_3, y_3) = (0.64, 0.36) - 0.1\\langle 1.28, 1.44 \\rangle = (0.512, 0.216)$, $f = 0.262 + 0.093 = 0.355$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After 10 iterations: $(0.107, 0.007)$, $f \\approx 0.012$. Converging to $(0,0)$."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-linear-programming--simplex",
      children: "Example 2: Linear Programming ? Simplex"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Maximize $z = 3x + 2y$ subject to $x + y \\leq 4$, $2x + y \\leq 6$, $x, y \\geq 0$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nVertices of the feasible region:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$(0,0)$: $z = 0$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$(3,0)$: $z = 9$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$(2,2)$: intersection of $x+y=4$ and $2x+y=6$, giving $(2,2)$. $z = 3(2) + 2(2) = 10$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$(0,4)$: $z = 8$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Optimal: $(2,2)$ with $z = 10$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dual Problem:"
      }), " Minimize $w = 4u + 6v$ subject to $u + 2v \\geq 3$, $u + v \\geq 2$, $u, v \\geq 0$.\nBy strong duality, $w^* = z^* = 10$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-kkt-conditions",
      children: "Example 4: KKT Conditions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Minimize $f(x,y) = (x-1)^2 + (y-2)^2$ subject to $x + y \\leq 2$, $x \\geq 0$, $y \\geq 0$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Set up Lagrangian: $L = (x-1)^2 + (y-2)^2 + \\mu_1(x+y-2) + \\mu_2(-x) + \\mu_3(-y)$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "KKT conditions:\n$\\partial L/\\partial x = 2(x-1) + \\mu_1 - \\mu_2 = 0$\n$\\partial L/\\partial y = 2(y-2) + \\mu_1 - \\mu_3 = 0$\n$\\mu_1(x+y-2) = 0$, $\\mu_2 x = 0$, $\\mu_3 y = 0$\n$\\mu_1, \\mu_2, \\mu_3 \\geq 0$\n$x + y \\leq 2$, $x \\geq 0$, $y \\geq 0$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Try active constraint $x + y = 2$ with $\\mu_1 > 0$, $x > 0$, $y > 0$ ($\\mu_2 = \\mu_3 = 0$):"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$2(x-1) + \\mu_1 = 0 \\implies 2x - 2 + \\mu_1 = 0$\n$2(y-2) + \\mu_1 = 0 \\implies 2y - 4 + \\mu_1 = 0$\n$x + y = 2$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "From first two: $2x - 2 = 2y - 4 \\implies x - y = -1 \\implies x = y - 1$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With $x + y = 2$: $(y-1) + y = 2 \\implies 2y = 3 \\implies y = 1.5$, $x = 0.5$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$\\mu_1 = 2 - 2x = 2 - 1 = 1 \\geq 0$ ?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "KKT satisfied. The optimal point is $(0.5, 1.5)$ with $f = 0.25 + 0.25 = 0.5$."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-particle-swarm-optimization",
      children: "TypeScript Implementation: Particle Swarm Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type Vec = number[];\n\nfunction particleSwarm(\n  f: (x: Vec) => number, dim: number, bounds: [number, number],\n  popSize: number = 30, maxIter: number = 200\n): { x: Vec; fx: number; history: Vec[] } {\n  const particles = Array.from({ length: popSize }, () => {\n    const pos = Vec.from({ length: dim }, () => bounds[0] + Math.random() * (bounds[1] - bounds[0]));\n    const vel = Vec.from({ length: dim }, () => (Math.random() - 0.5) * (bounds[1] - bounds[0]) * 0.1);\n    return { pos, vel, best: [...pos], bestVal: f(pos) };\n  });\n  let globalBest = [...particles[0].best], globalBestVal = particles[0].bestVal;\n  const history: Vec[] = [globalBest];\n  const w = 0.7, c1 = 1.5, c2 = 1.5;  // inertia, cognitive, social\n\n  for (let iter = 0; iter < maxIter; iter++) {\n    for (const p of particles) {\n      for (let d = 0; d < dim; d++) {\n        p.vel[d] = w * p.vel[d] + c1 * Math.random() * (p.best[d] - p.pos[d]) + c2 * Math.random() * (globalBest[d] - p.pos[d]);\n        p.pos[d] = Math.max(bounds[0], Math.min(bounds[1], p.pos[d] + p.vel[d]));\n      }\n      const val = f(p.pos);\n      if (val < p.bestVal) { p.best = [...p.pos]; p.bestVal = val; }\n      if (val < globalBestVal) { globalBest = [...p.pos]; globalBestVal = val; }\n    }\n    if (iter % 20 === 0) history.push([...globalBest]);\n  }\n  return { x: globalBest, fx: globalBestVal, history };\n}\n\n// Test: minimize f(x,y) = (x-2)? + (y+3)? ? min at (2,-3), f=0\nconst quad = (x: Vec) => (x[0] - 2) ** 2 + (x[1] + 3) ** 2;\nconst pso = particleSwarm(quad, 2, [-10, 10], 30, 100);\nconsole.log(`PSO quadratic: min at (${pso.x[0].toFixed(4)}, ${pso.x[1].toFixed(4)}), f=${pso.fx.toExponential(4)}`);\n\n// Test: Rastrigin function ? many local minima, global min at (0,...,0), f=0\nconst rastrigin = (x: Vec) => x.reduce((s, xi) => s + xi ** 2 - 10 * Math.cos(2 * Math.PI * xi) + 10, 0);\nconst psoRast = particleSwarm(rastrigin, 2, [-5.12, 5.12], 40, 200);\nconsole.log(`PSO Rastrigin: min at (${psoRast.x[0].toFixed(4)}, ${psoRast.x[1].toFixed(4)}), f=${psoRast.fx.toFixed(4)}`);\n\n### TypeScript Implementation: Simulated Annealing\n\n```typescript\nfunction simulatedAnnealing(\n  f: (x: Vec) => number, dim: number, bounds: [number, number],\n  maxIter: number = 10000, t0: number = 100, a: number = 0.99\n): { x: Vec; fx: number } {\n  let curr = Vec.from({ length: dim }, () => bounds[0] + Math.random() * (bounds[1] - bounds[0]));\n  let currVal = f(curr);\n  let best = [...curr], bestVal = currVal;\n  let T = t0;\n\n  for (let iter = 0; iter &lt; maxIter && T &gt; 1e-4; iter++) {\n    const step = (bounds[1] - bounds[0]) * 0.1 * (T / t0);\n    const cand = curr.map(xi => Math.max(bounds[0], Math.min(bounds[1], xi + (Math.random() - 0.5) * step)));\n    const candVal = f(cand);\n    if (candVal &lt; currVal || Math.random() < Math.exp(-(candVal - currVal) / T)) {\n      curr = cand; currVal = candVal;\n      if (candVal &lt; bestVal) { best = [...cand]; bestVal = candVal; }\n    }\n    T *= a;\n  }\n  return { x: best, fx: bestVal };\n}\n\nconst saQuad = simulatedAnnealing(quad, 2, [-10, 10], 5000, 50, 0.98);\nconsole.log(`SA quadratic: min at (${saQuad.x[0].toFixed(4)}, ${saQuad.x[1].toFixed(4)}), f=${saQuad.fx.toExponential(4)}`);\n\nconst saRast = simulatedAnnealing(rastrigin, 2, [-5.12, 5.12], 20000, 100, 0.995);\nconsole.log(`SA Rastrigin: min at (${saRast.x[0].toFixed(4)}, ${saRast.x[1].toFixed(4)}), f=${saRast.fx.toFixed(4)}`);\n\n### TypeScript: Constrained Optimization via Penalty Method\n\n```typescript\nfunction penaltyMethod(\n  f: (x: Vec) => number,\n  constraints: Array<(x: Vec) => number>,  // g?(x) = 0\n  dim: number, bounds: [number, number],\n  ?0: number = 1, ?Factor: number = 10, outerIter: number = 10\n): { x: Vec; fx: number } {\n  let ? = ?0;\n  let x = Vec.from({ length: dim }, () => bounds[0] + Math.random() * (bounds[1] - bounds[0]));\n\n  for (let outer = 0; outer < outerIter; outer++) {\n    // Augmented objective: f(x) + ? * S max(0, g?(x))?\n    const augF = (p: Vec) => {\n      let penalty = 0;\n      for (const g of constraints) penalty += Math.max(0, g(p)) ** 2;\n      return f(p) + ? * penalty;\n    };\n    const inner = particleSwarm(augF, dim, bounds, 20, 50);\n    x = inner.x;\n    ? *= ?Factor;\n  }\n  return { x, fx: f(x) };\n}\n\n// Minimize f(x,y) = (x-1)? + (y-2)? subject to x + y = 2, x = 0, y = 0\n// True constrained optimum at (0.5, 1.5), f=0.5\nconst constrF = (x: Vec) => (x[0] - 1) ** 2 + (x[1] - 2) ** 2;\nconst constr: Array<(x: Vec) => number> = [\n  (x) => x[0] + x[1] - 2,  // x + y = 2\n  (x) => -x[0],            // x = 0\n  (x) => -x[1]             // y = 0\n];\nconst pen = penaltyMethod(constrF, constr, 2, [0, 2], 1, 10, 5);\nconsole.log(`Penalty method: min at (${pen.x[0].toFixed(4)}, ${pen.x[1].toFixed(4)}), f=${pen.fx.toFixed(4)}`);\nconsole.log(`  Expected: (0.5, 1.5), f=0.5, constraint violation: ${Math.max(0, pen.x[0] + pen.x[1] - 2).toExponential(2)}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// --- Subgradient Descent ---\nfunction subgradientDescent(\n  f: (x: number[]) => number,\n  subgrad: (x: number[]) => number[],\n  x0: number[],\n  learningRate: number,\n  iterations: number\n): { x: number[]; f: number } {\n  let x = [...x0];\n  for (let i = 0; i < iterations; i++) {\n    const g = subgrad(x);\n    const lr = learningRate / Math.sqrt(i + 1); // diminishing step\n    x = x.map((v, j) => v - lr * g[j]);\n  }\n  return { x, f: f(x) };\n}\n// f(x) = |x| ? subgradient: sign(x)\nconst sg = subgradientDescent(\n  (x: number[]) => Math.abs(x[0]),\n  (x: number[]) => [x[0] > 0 ? 1 : x[0] < 0 ? -1 : 0],\n  [10], 0.5, 1000);\nconsole.log('Subgradient descent min |x|:', sg.x[0].toFixed(4), 'f=', sg.f.toFixed(4));\n\n// --- BFGS Quasi-Newton (simplified 1D) ---\nfunction bfgs1D(f: (x: number) => number, x0: number, maxIter: number = 50, tol: number = 1e-8): number {\n  let x = x0, B = 1, h = 1e-6;\n  for (let iter = 0; iter < maxIter; iter++) {\n    const grad = (f(x + h) - f(x - h)) / (2 * h);\n    if (Math.abs(grad) < tol) break;\n    const dir = -B * grad;\n    let a = 1;\n    // Line search (simple backtracking)\n    while (f(x + a * dir) > f(x) + 0.0001 * a * grad * dir) a *= 0.5;\n    const s = a * dir;\n    const xNew = x + s;\n    const gradNew = (f(xNew + h) - f(xNew - h)) / (2 * h);\n    const ? = gradNew - grad;\n    // BFGS update\n    B = B + (s * s) / (s * ?) * (1 + B * ? * ? / (s * ?)) - (s * ? * B + B * ? * s) / (s * ?);\n    x = xNew;\n  }\n  return x;\n}\n// Minimize f(x) = x4 - 3x? + 2 (multiple minima)\nconst minx = bfgs1D(x => x * x * x * x - 3 * x * x * x + 2, 2);\nconsole.log('\\nBFGS min x4-3x?+2:', minx.toFixed(6), 'f=', (minx ** 4 - 3 * minx ** 3 + 2).toFixed(6));\n\n// --- Interior Point Method (penalty) ---\nfunction interiorPoint(\n  f: (x: number[]) => number,\n  constraints: Array<(x: number[]) => number>,\n  x0: number[],\n  t0: number = 1,\n  mu: number = 10,\n  maxOuter: number = 20\n): { x: number[]; f: number } {\n  let x = [...x0], t = t0;\n  for (let outer = 0; outer < maxOuter; outer++) {\n    // Logarithmic barrier\n    const barrierFn = (y: number[]) => {\n      let val = f(y);\n      for (const g of constraints) val -= (1 / t) * Math.log(-g(y));\n      return val;\n    };\n    // Gradient descent step on barrier\n    const h = 1e-6;\n    for (let inner = 0; inner < 50; inner++) {\n      const grad = x.map((_, i) => {\n        const plus = [...x], minus = [...x]; plus[i] += h; minus[i] -= h;\n        return (barrierFn(plus) - barrierFn(minus)) / (2 * h);\n      });\n      x = x.map((v, i) => v - 0.01 * grad[i]);\n    }\n    t *= mu;\n  }\n  return { x: x.map(v => +v.toFixed(4)), f: +f(x).toFixed(4) };\n}\n// Minimize x? + y? subject to x + y = 1\nconst ip = interiorPoint(\n  (x: number[]) => x[0] * x[0] + x[1] * x[1],\n  [(x: number[]) => x[0] + x[1] - 1],\n  [0.5, 0.5]);\nconsole.log('\\nInterior point min x?+y? s.t. x+y=1:', `x=${ip.x[0]}, y=${ip.x[1]}, f=${ip.f}`);\n\n// --- Particle Swarm Optimization ---\nfunction particleSwarm(\n  f: (x: number[]) => number,\n  dim: number,\n  bounds: [number, number],\n  particles: number = 30,\n  iterations: number = 100\n): { x: number[]; f: number } {\n  let swarm = Array.from({ length: particles }, () => ({\n    x: Array.from({ length: dim }, () => bounds[0] + Math.random() * (bounds[1] - bounds[0])),\n    v: Array.from({ length: dim }, () => (Math.random() - 0.5) * 0.1),\n    pBest: Infinity, pBestX: new Array(dim).fill(0)\n  }));\n  let gBest = Infinity, gBestX = new Array(dim).fill(0);\n  for (let iter = 0; iter < iterations; iter++) {\n    for (const p of swarm) {\n      const val = f(p.x);\n      if (val < p.pBest) { p.pBest = val; p.pBestX = [...p.x]; }\n      if (val < gBest) { gBest = val; gBestX = [...p.x]; }\n      const w = 0.7, c1 = 1.5, c2 = 1.5;\n      p.v = p.v.map((v, i) => w * v + c1 * Math.random() * (p.pBestX[i] - p.x[i]) + c2 * Math.random() * (gBestX[i] - p.x[i]));\n      p.x = p.x.map((v, i) => Math.max(bounds[0], Math.min(bounds[1], v + p.v[i])));\n    }\n  }\n  return { x: gBestX.map(v => +v.toFixed(4)), f: +gBest.toFixed(4) };\n}\nconst ps = particleSwarm(x => x[0] * x[0] + x[1] * x[1] + 2 * x[0] * x[1] - 3 * x[0] + 4 * x[1], 2, [-5, 5]);\nconsole.log('\\nPSO min f(x,y):', `x=${ps.x[0]}, y=${ps.x[1]}, f=${ps.f}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// optimization\n// linear-algebra-calculus implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'optimization', data: { topic: 'linear-algebra-calculus' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// optimization - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'engineering-math demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'engineering-mathematics', chapter: 'optimization' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('engineering-math'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convexity guarantees global optimality and efficient solution methods"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gradient descent is the foundational algorithm for unconstrained optimization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Newton's method converges quadratically but requires Hessian computation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "KKT conditions are necessary for constrained optimality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linear programming optimizes linear objectives over polyhedral feasible regions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Duality provides bounds, certificates, and distributed algorithms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SGD and its variants power modern machine learning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ADMM handles separable problems with linear constraints"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove that a convex function's local minimum is a global minimum"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why Newton's method converges faster than gradient descent"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State the KKT conditions and explain complementary slackness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the dual of a linear program? Why is it useful?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare momentum-based SGD with plain SGD"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Linear Programming:"
          }), " A factory makes two products. Product A requires 2 hours machine time and 1 hour labor; product B requires 1 hour machine and 3 hours labor. Daily machine limit: 8 hours; labor: 12 hours. Profit per unit: A = $40, B = $30. Maximize profit."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SVM Dual:"
          }), " Derive the dual of the SVM problem above."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Portfolio Optimization:"
          }), " With assets having returns $\\mu = [0.1, 0.15, 0.08]$ and covariance matrix $\\Sigma$, find the minimum-variance portfolio."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "KKT:"
          }), " Minimize $f(x) = x_1^2 + x_2^2$ subject to $x_1 + x_2 \\geq 4$, $x_1, x_2 \\geq 0$."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Duality Gap in Nonconvex Optimization:"
      }), " Construct a simple nonconvex optimization problem where strong duality fails ($p^* \\neq d^*$). Prove the gap and explain why convexity is required for strong duality."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Gradient Descent with Momentum:"
          }), " Implement gradient descent with momentum ($v_{t+1} = \\beta v_t + \\nabla f(x_t)$, $x_{t+1} = x_t - \\alpha v_{t+1}$) for $f(x) = x^4 - 3x^2 + 2x$. Compare convergence speed with plain gradient descent."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Portfolio Optimization with Constraints:"
          }), " Three assets have expected returns $\\mu = [0.12, 0.08, 0.15]$ and covariance matrix $\\Sigma = \\begin{pmatrix} 0.1 & 0.02 & 0.04 \\ 0.02 & 0.08 & 0.01 \\ 0.04 & 0.01 & 0.15 \\end{pmatrix}$. Find the optimal portfolio that minimizes variance subject to achieving at least 10% expected return, with no short selling ($w_i \\geq 0$) and $\\sum w_i = 1$."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dual SVM Derivation:"
          }), " Derive the dual of the soft-margin SVM optimization problem. Show that the dual is a quadratic program with box constraints and that the weight vector can be expressed as $w = \\sum \\alpha_i y_i x_i$."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Convergence"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pros"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cons"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gradient Descent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, memory-efficient"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow near optimum, tuning needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Newton's Method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quadratic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very fast near optimum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(n^3)$ Hessian inversion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BFGS (Quasi-Newton)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Superlinear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No Hessian needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory $O(n^2)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "L-BFGS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Superlinear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory $O(mn)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Approximate curvature"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SGD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sublinear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scales to big data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Noisy, needs learning rate schedule"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "optimization-checklist",
      children: "Optimization Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is the problem convex?"
        }), " If yes, any local minimum is global ? use gradient descent or Newton"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is it large-scale ($n > 10^5$)?"
        }), " Use SGD or L-BFGS (avoid full Hessian)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Are there constraints?"
        }), " Use KKT conditions or transform to dual"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is it linear?"
        }), " Use simplex or interior-point methods"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is the objective expensive?"
        }), " Use Bayesian optimization or surrogate models"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-example-gradient-descent",
      children: "TypeScript Example: Gradient Descent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function gradientDescent(\n  gradient: (x: number[]) => number[],\n  initial: number[],\n  learningRate: number = 0.1,\n  iterations: number = 100\n): number[] {\n  let x = [...initial];\n  for (let i = 0; i < iterations; i++) {\n    const grad = gradient(x);\n    x = x.map((xi, idx) => xi - learningRate * grad[idx]);\n  }\n  return x;\n}\n\n// Minimize f(x,y) = x^2 + 2y^2\n// Gradient: [2x, 4y]\nconst result = gradientDescent(\n  (x) => [2 * x[0], 4 * x[1]],\n  [1, 1],\n  0.1,\n  100\n);\nconsole.log(`Minimum at (${result[0].toFixed(4)}, ${result[1].toFixed(4)})`);\n// Output: Minimum at (0.0000, 0.0000)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-application-training-neural-networks",
      children: "Real-World Application: Training Neural Networks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Optimization is the computational engine behind all deep learning. Training a neural network involves minimizing a non-convex loss function $L(w)$ over millions of parameters $w$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Challenges in Deep Learning Optimization:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-convexity:"
        }), " The loss landscape has many local minima and saddle points"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ill-conditioning:"
        }), " The Hessian may have a large condition number, causing gradient descent to zigzag"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vanishing/exploding gradients:"
        }), " Gradients become very small or very large in deep networks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generalization gap:"
        }), " Optimizing to zero loss can sometimes hurt test performance"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Learning Rate Schedules:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Schedule"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Formula"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effect"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Step decay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\eta_t = \\eta_0 \\cdot \\gamma^{\\lfloor t/s \\rfloor}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces LR at specific epochs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\eta_t = \\eta_0 \\cdot e^{-kt}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smooth decay"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cosine annealing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\eta_t = \\eta_{min} + \\frac{1}{2}(\\eta_{max} - \\eta_{min})(1 + \\cos(t\\pi/T))$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cyclic restart behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Warmup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\eta_t = \\eta_0 \\cdot \\min(1, t/T_{warm})$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gradual increase to prevent early divergence"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Second-Order Methods in ML:"
      }), " While full Newton is too expensive for deep learning ($O(n^3)$ with $n > 10^7$), approximations like KFAC (Kronecker-Factored Approximate Curvature) use block-diagonal Fisher information matrix approximations to achieve faster convergence than SGD."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Batch Size and Generalization:"
      }), " There is evidence that very large batch sizes lead to sharp minima that generalize poorly. Small-batch training tends to find flatter minima with better generalization. This is related to the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "empirical Fisher information matrix"
      }), " and the spectrum of the Hessian."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-examples",
      children: "TypeScript Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-6-adam-optimizer-implementation",
      children: "Example 6: Adam Optimizer Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function adam(\n  gradient: (w: number[]) => number[],\n  initial: number[],\n  learningRate: number = 0.001,\n  beta1: number = 0.9,\n  beta2: number = 0.999,\n  epsilon: number = 1e-8,\n  iterations: number = 1000\n): number[] {\n  let w = [...initial];\n  const m = new Array(w.length).fill(0);\n  const v = new Array(w.length).fill(0);\n  let t = 0;\n\n  for (let iter = 0; iter < iterations; iter++) {\n    t++;\n    const grad = gradient(w);\n    for (let i = 0; i < w.length; i++) {\n      m[i] = beta1 * m[i] + (1 - beta1) * grad[i];\n      v[i] = beta2 * v[i] + (1 - beta2) * grad[i] * grad[i];\n      const mHat = m[i] / (1 - Math.pow(beta1, t));\n      const vHat = v[i] / (1 - Math.pow(beta2, t));\n      w[i] -= learningRate * mHat / (Math.sqrt(vHat) + epsilon);\n    }\n  }\n  return w;\n}\n\n// Minimize f(w1,w2) = w1^2 + 10*w2^2 (poorly conditioned)\nconst result = adam(\n  (w) => [2 * w[0], 20 * w[1]],\n  [5, 5],\n  0.1\n);\nconsole.log(`Adam result: (${result[0].toFixed(4)}, ${result[1].toFixed(4)})`);\n// Adam handles the ill-conditioning better than plain gradient descent\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-7-simplex-method-for-linear-programming",
      children: "Example 7: Simplex Method for Linear Programming"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type SimplexTableau = number[][];\n\nfunction simplexStep(tableau: SimplexTableau): SimplexTableau {\n  const [m, n] = [tableau.length, tableau[0].length];\n\n  // Find pivot column (most negative in bottom row)\n  let pivotCol = -1;\n  let minVal = 0;\n  for (let j = 0; j < n - 1; j++) {\n    if (tableau[m - 1][j] < minVal) {\n      minVal = tableau[m - 1][j];\n      pivotCol = j;\n    }\n  }\n  if (pivotCol === -1) return tableau; // optimal\n\n  // Find pivot row (minimum ratio test)\n  let pivotRow = -1;\n  let minRatio = Infinity;\n  for (let i = 0; i < m - 1; i++) {\n    if (tableau[i][pivotCol] > 0) {\n      const ratio = tableau[i][n - 1] / tableau[i][pivotCol];\n      if (ratio < minRatio) {\n        minRatio = ratio;\n        pivotRow = i;\n      }\n    }\n  }\n  if (pivotRow === -1) throw new Error(\"Unbounded solution\");\n\n  // Pivot\n  const pivotVal = tableau[pivotRow][pivotCol];\n  const newTableau = tableau.map(row => [...row]);\n\n  // Scale pivot row\n  for (let j = 0; j < n; j++) {\n    newTableau[pivotRow][j] /= pivotVal;\n  }\n\n  // Eliminate pivot column in other rows\n  for (let i = 0; i < m; i++) {\n    if (i === pivotRow) continue;\n    const factor = tableau[i][pivotCol];\n    for (let j = 0; j < n; j++) {\n      newTableau[i][j] -= factor * newTableau[pivotRow][j];\n    }\n  }\n  return newTableau;\n}\n\n// Maximize z = 3x + 2y subject to x + y = 4, 2x + y = 6, x,y = 0\n// Tableau: [x, y, s1, s2, RHS]\nlet tableau: SimplexTableau = [\n  [1, 1, 1, 0, 4],    // x + y + s1 = 4\n  [2, 1, 0, 1, 6],    // 2x + y + s2 = 6\n  [-3, -2, 0, 0, 0],  // -z = -3x - 2y (negated objective)\n];\nfor (let iter = 0; iter < 10; iter++) {\n  const prev = tableau[m - 1][n - 1];\n  tableau = simplexStep(tableau);\n  // Check if optimal (no negative entries in bottom row except RHS)\n  // ... (simplified for brevity)\n}\nconsole.log(\"Simplex completed\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-8-conjugate-gradient-method",
      children: "Example 8: Conjugate Gradient Method"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function conjugateGradient(\n  A: number[][],\n  b: number[],\n  x0: number[],\n  maxIter: number = 100,\n  tolerance: number = 1e-10\n): number[] {\n  const n = b.length;\n  let x = [...x0];\n\n  // r = b - A*x\n  const r = b.map((bi, i) => {\n    let sum = 0;\n    for (let j = 0; j < n; j++) sum += A[i][j] * x[j];\n    return bi - sum;\n  });\n\n  let p = [...r];\n  let rsold = r.reduce((sum, ri) => sum + ri * ri, 0);\n\n  for (let k = 0; k < maxIter; k++) {\n    // Ap = A * p\n    const Ap = new Array(n).fill(0);\n    for (let i = 0; i < n; i++)\n      for (let j = 0; j < n; j++)\n        Ap[i] += A[i][j] * p[j];\n\n    const pAp = p.reduce((sum, pi, i) => sum + pi * Ap[i], 0);\n    const alpha = rsold / pAp;\n\n    x = x.map((xi, i) => xi + alpha * p[i]);\n    const rNew = r.map((ri, i) => ri - alpha * Ap[i]);\n\n    const rsnew = rNew.reduce((sum, ri) => sum + ri * ri, 0);\n    if (Math.sqrt(rsnew) < tolerance) break;\n\n    p = rNew.map((ri, i) => ri + (rsnew / rsold) * p[i]);\n    r.splice(0, r.length, ...rNew);\n    rsold = rsnew;\n  }\n  return x;\n}\n\n// Solve: [4, 1; 1, 3] * x = [1, 2]\nconst A = [[4, 1], [1, 3]];\nconst b = [1, 2];\nconst sol = conjugateGradient(A, b, [0, 0]);\nconsole.log(`CG solution: (${sol[0].toFixed(4)}, ${sol[1].toFixed(4)})`);\n// Exact: (0.0909, 0.6364)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-5-admm-for-lasso-regression",
      children: "Example 5: ADMM for Lasso Regression"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Lasso problem $\\min_x \\frac{1}{2}|Ax - b|^2 + \\lambda|x|_1$ can be solved with ADMM:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$x^{k+1} = (A^T A + \\rho I)^{-1}(A^T b + \\rho(z^k - u^k))$$\n$$z^{k+1} = S_{\\lambda/\\rho}(x^{k+1} + u^k)$$\n$$u^{k+1} = u^k + x^{k+1} - z^{k+1}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where $S_\\kappa(\\cdot)$ is the soft-thresholding operator. ADMM decomposes the non-smooth $\\ell_1$ penalty from the smooth least-squares term."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mermaid-optimization-algorithm-classification",
      children: "Mermaid: Optimization Algorithm Classification"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Optimization] --> B[Unconstrained]\n    A --> C[Constrained]\n    B --> D[Gradient-based]\n    B --> E[Derivative-free]\n    D --> F[Gradient Descent]\n    D --> G[Newton Method]\n    D --> H[Conjugate Gradient]\n    E --> I[Simulated Annealing]\n    E --> J[Genetic Algorithms]\n    C --> K[Linear Programming]\n    C --> L[NLP]\n    K --> M[Simplex Method]\n    K --> N[Interior Point]\n    L --> O[KKT Conditions]\n    L --> P[Penalty Methods]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notation-reference",
      children: "Notation Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Symbol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\nabla f$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "gradient"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\nabla^2 f$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hessian"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$L(x, \\lambda)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lagrangian"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$g(\\lambda, \\mu)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dual function"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$p^*$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "primal optimal value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$d^*$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dual optimal value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\mu_i$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "inequality multiplier"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\lambda_j$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "equality multiplier"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\alpha_k$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "step size at iteration $k$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$B_k$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hessian approximation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$c^T x$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "linear objective"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$A$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "constraint matrix"
          })]
        })]
      })]
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