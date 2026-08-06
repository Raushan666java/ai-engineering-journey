"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[54784],{

/***/ 3835
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_engineering_mathematics_07_numerical_methods_md_43d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-engineering-mathematics-07-numerical-methods-md-43d.json
const site_docs_courses_engineering_mathematics_07_numerical_methods_md_43d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/engineering-mathematics/07-numerical-methods","title":"Chapter 7: Numerical Methods","description":"Previous Probability & Statistics | Next Integral Transforms","source":"@site/docs/courses/engineering-mathematics/07-numerical-methods.md","sourceDirName":"courses/engineering-mathematics","slug":"/engineering-mathematics/07-numerical-methods","permalink":"/ai-engineering-journey/engineering-mathematics/07-numerical-methods","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"id":"07-numerical-methods","slug":"/engineering-mathematics/07-numerical-methods","title":"Chapter 7: Numerical Methods","sidebar_label":"Chapter 7: Numerical Methods","sidebar_position":7},"sidebar":"coursesSidebar","previous":{"title":"Chapter 6: Probability & Statistics","permalink":"/ai-engineering-journey/engineering-mathematics/06-probability-statistics"},"next":{"title":"Chapter 8: Integral Transforms","permalink":"/ai-engineering-journey/engineering-mathematics/08-integral-transforms"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/engineering-mathematics/07-numerical-methods.md


const frontMatter = {
	id: '07-numerical-methods',
	slug: '/engineering-mathematics/07-numerical-methods',
	title: 'Chapter 7: Numerical Methods',
	sidebar_label: 'Chapter 7: Numerical Methods',
	sidebar_position: 7
};
const contentTitle = 'Chapter 7: Numerical Methods';

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
  "value": "7.1 Error Analysis",
  "id": "71-error-analysis",
  "level": 3
}, {
  "value": "7.2 Root Finding",
  "id": "72-root-finding",
  "level": 3
}, {
  "value": "7.2.1 Bisection Method",
  "id": "721-bisection-method",
  "level": 4
}, {
  "value": "7.2.2 Newton-Raphson Method",
  "id": "722-newton-raphson-method",
  "level": 4
}, {
  "value": "7.2.3 Secant Method",
  "id": "723-secant-method",
  "level": 4
}, {
  "value": "7.2.4 Fixed-Point Iteration",
  "id": "724-fixed-point-iteration",
  "level": 4
}, {
  "value": "7.3 Interpolation",
  "id": "73-interpolation",
  "level": 3
}, {
  "value": "7.3.1 Lagrange Interpolation",
  "id": "731-lagrange-interpolation",
  "level": 4
}, {
  "value": "7.3.2 Newton&#39;s Divided Differences",
  "id": "732-newtons-divided-differences",
  "level": 4
}, {
  "value": "7.3.3 Spline Interpolation",
  "id": "733-spline-interpolation",
  "level": 4
}, {
  "value": "7.4 Numerical Differentiation",
  "id": "74-numerical-differentiation",
  "level": 3
}, {
  "value": "7.5 Numerical Integration (Quadrature)",
  "id": "75-numerical-integration-quadrature",
  "level": 3
}, {
  "value": "7.5.1 Newton-Cotes Formulas",
  "id": "751-newton-cotes-formulas",
  "level": 4
}, {
  "value": "7.5.2 Romberg Integration",
  "id": "752-romberg-integration",
  "level": 4
}, {
  "value": "7.5.3 Gaussian Quadrature",
  "id": "753-gaussian-quadrature",
  "level": 4
}, {
  "value": "7.6 Numerical Solution of ODEs",
  "id": "76-numerical-solution-of-odes",
  "level": 3
}, {
  "value": "7.6.1 Euler&#39;s Method",
  "id": "761-eulers-method",
  "level": 4
}, {
  "value": "7.6.2 Runge-Kutta Methods",
  "id": "762-runge-kutta-methods",
  "level": 4
}, {
  "value": "7.6.3 Multistep Methods (Adams-Bashforth)",
  "id": "763-multistep-methods-adams-bashforth",
  "level": 4
}, {
  "value": "7.6.4 Stiff ODEs and Stability",
  "id": "764-stiff-odes-and-stability",
  "level": 4
}, {
  "value": "7.7 Boundary Value Problems",
  "id": "77-boundary-value-problems",
  "level": 3
}, {
  "value": "7.8 Monte Carlo Methods",
  "id": "78-monte-carlo-methods",
  "level": 3
}, {
  "value": "7.9 Numerical Linear Algebra",
  "id": "79-numerical-linear-algebra",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Newton-Raphson",
  "id": "example-1-newton-raphson",
  "level": 3
}, {
  "value": "Example 2: Simpson&#39;s Rule",
  "id": "example-2-simpsons-rule",
  "level": 3
}, {
  "value": "Example 3: RK4 for ODE",
  "id": "example-3-rk4-for-ode",
  "level": 3
}, {
  "value": "Example 4: Monte Carlo Integration",
  "id": "example-4-monte-carlo-integration",
  "level": 3
}, {
  "value": "Example 5: Cubic Spline Interpolation",
  "id": "example-5-cubic-spline-interpolation",
  "level": 3
}, {
  "value": "Additional Exercises",
  "id": "additional-exercises",
  "level": 3
}, {
  "value": "TypeScript Implementation: Runge-Kutta 4 (RK4) ODE Solver",
  "id": "typescript-implementation-runge-kutta-4-rk4-ode-solver",
  "level": 2
}, {
  "value": "Real-World Application: Solving the Heat Equation",
  "id": "real-world-application-solving-the-heat-equation",
  "level": 2
}, {
  "value": "TypeScript Implementation: Newton-Cotes Quadrature",
  "id": "typescript-implementation-newton-cotes-quadrature",
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
  "value": "TypeScript Implementation: Newton-Raphson Root Finder",
  "id": "typescript-implementation-newton-raphson-root-finder",
  "level": 2
}, {
  "value": "TypeScript Implementation: Bisection Method",
  "id": "typescript-implementation-bisection-method",
  "level": 2
}, {
  "value": "TypeScript Implementation: Simpson&#39;s Rule",
  "id": "typescript-implementation-simpsons-rule",
  "level": 2
}, {
  "value": "TypeScript Implementation: Euler&#39;s Method for ODEs",
  "id": "typescript-implementation-eulers-method-for-odes",
  "level": 2
}, {
  "value": "Bisection Method Algorithm Flowchart",
  "id": "bisection-method-algorithm-flowchart",
  "level": 2
}, {
  "value": "Newton-Raphson Convergence Visualization",
  "id": "newton-raphson-convergence-visualization",
  "level": 2
}, {
  "value": "Additional Exercises",
  "id": "additional-exercises-1",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "When to Use Each Method",
  "id": "when-to-use-each-method",
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
        id: "chapter-7-numerical-methods",
        children: "Chapter 7: Numerical Methods"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/engineering-mathematics/06-probability-statistics",
          children: "Chapter 6: Probability & Statistics"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/engineering-mathematics/08-integral-transforms",
          children: "Chapter 8: Integral Transforms"
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
        href: "../../assets/images/lessons/engineering-mathematics/07-numerical-methods/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/engineering-mathematics/07-numerical-methods/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/engineering-mathematics/07-numerical-methods/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/engineering-mathematics/07-numerical-methods/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/engineering-mathematics/07-numerical-methods/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/engineering-mathematics/07-numerical-methods/visual-explanation.png",
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
        children: "Solve nonlinear equations using bisection, Newton-Raphson, and secant methods"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interpolate data using Lagrange, Newton, and spline methods"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform numerical differentiation and integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve ordinary differential equations numerically"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply Monte Carlo methods for simulation and integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand error analysis, stability, and convergence of numerical algorithms"
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
            children: "Root Finding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iteratively converge to $x$ where $f(x) = 0$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solving equations without closed-form solutions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interpolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fit curve through discrete data points"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reconstructing functions from samples"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Numerical Integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Approximate $\\int_a^b f(x),dx$ by weighted sums"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computing integrals without antiderivatives"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ODE Solvers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discretize derivatives to step forward in time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simulating dynamic systems on computers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Monte Carlo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random sampling estimates expectations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handling high-dimensional integrals"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Error Analysis] --> B[Root Finding]\n    B --> C[Interpolation]\n    C --> D[Numerical Differentiation]\n    D --> E[Numerical Integration]\n    E --> F[ODE Solvers]\n    F --> G[Monte Carlo Methods]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-error-analysis",
      children: "7.1 Error Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Absolute Error:"
      }), " $|x_{\\text{true}} - x_{\\text{approx}}|$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Relative Error:"
      }), " $\\frac{|x_{\\text{true}} - x_{\\text{approx}}|}{|x_{\\text{true}}|}$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Truncation Error:"
      }), " Error from approximating a mathematical procedure (e.g., Taylor series truncation)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Roundoff Error:"
      }), " Error from finite precision floating-point arithmetic."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Machine Epsilon ($\\epsilon$):"
      }), " The smallest number such that $1 + \\epsilon > 1$ in machine arithmetic. For IEEE double precision, $\\epsilon \\approx 2.22 \\times 10^{-16}$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Condition Number:"
      }), " $\\kappa = \\left|\\frac{x f'(x)}{f(x)}\\right|$ ? measures sensitivity of a function to input errors."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Stability:"
      }), " An algorithm is stable if small input errors produce small output errors."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Convergence Rate:"
      }), " An algorithm converges with order $p$ if:\n$$\\lim_{n \\to \\infty} \\frac{|e_{n+1}|}{|e_n|^p} = C$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linear: $p = 1$ (bisection)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quadratic: $p = 2$ (Newton-Raphson)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-root-finding",
      children: "7.2 Root Finding"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "721-bisection-method",
      children: "7.2.1 Bisection Method"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Find root of $f(x) = 0$ on $[a, b]$ where $f(a)f(b) < 0$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute $c = (a+b)/2$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If $f(c) = 0$, done"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If $f(a)f(c) < 0$, set $b = c$; else set $a = c$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat until $|b-a| < \\text{tolerance}$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Convergence:"
      }), " Linear, guaranteed. Error halves each iteration."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "722-newton-raphson-method",
      children: "7.2.2 Newton-Raphson Method"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Convergence:"
      }), " Quadratic near simple roots, but may diverge if starting point is poor."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Derivation:"
      }), " First-order Taylor expansion $f(x_{n+1}) \\approx f(x_n) + f'(x_n)(x_{n+1} - x_n) = 0$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "723-secant-method",
      children: "7.2.3 Secant Method"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$x_{n+1} = x_n - f(x_n)\\frac{x_n - x_{n-1}}{f(x_n) - f(x_{n-1})}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Avoids computing $f'(x)$. Convergence rate is superlinear ($p \\approx 1.618$, the golden ratio)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "724-fixed-point-iteration",
      children: "7.2.4 Fixed-Point Iteration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rewrite $f(x) = 0$ as $x = g(x)$. Iterate $x_{n+1} = g(x_n)$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Convergence:"
      }), " $|g'(x^*)| < 1$ at the fixed point guarantees local convergence."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-interpolation",
      children: "7.3 Interpolation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "731-lagrange-interpolation",
      children: "7.3.1 Lagrange Interpolation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given points $(x_0, y_0), \\ldots, (x_n, y_n)$, the Lagrange polynomial is:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$P_n(x) = \\sum_{k=0}^n y_k L_k(x)$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where $L_k(x) = \\prod_{j \\neq k} \\frac{x - x_j}{x_k - x_j}$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Error Bound:"
      }), " If $f$ is $n+1$ times differentiable:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$|f(x) - P_n(x)| \\leq \\frac{M_{n+1}}{(n+1)!} \\prod_{k=0}^n |x - x_k|$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where $M_{n+1} = \\max |f^{(n+1)}(\\xi)|$."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "732-newtons-divided-differences",
      children: "7.3.2 Newton's Divided Differences"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Recursive formula for building the interpolation polynomial:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$f[x_k] = y_k$$\n$$f[x_k, x_{k+1}] = \\frac{f[x_{k+1}] - f[x_k]}{x_{k+1} - x_k}$$\n$$f[x_k, x_{k+1}, \\ldots, x_{k+m}] = \\frac{f[x_{k+1}, \\ldots, x_{k+m}] - f[x_k, \\ldots, x_{k+m-1}]}{x_{k+m} - x_k}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The interpolating polynomial:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$P_n(x) = f[x_0] + \\sum_{k=1}^n f[x_0, \\ldots, x_k] \\prod_{j=0}^{k-1} (x - x_j)$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "733-spline-interpolation",
      children: "7.3.3 Spline Interpolation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cubic Spline:"
      }), " Piecewise cubic polynomial that is twice continuously differentiable at the knots."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Natural spline: $S''(x_0) = S''(x_n) = 0$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Clamped spline: $S'(x_0) = f'(x_0)$, $S'(x_n) = f'(x_n)$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Splines avoid the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Runge phenomenon"
      }), " (oscillation at endpoints) that plagues high-degree polynomial interpolation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "74-numerical-differentiation",
      children: "7.4 Numerical Differentiation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Forward Difference:"
      }), " $f'(x) \\approx \\frac{f(x+h) - f(x)}{h}$, error $O(h)$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Central Difference:"
      }), " $f'(x) \\approx \\frac{f(x+h) - f(x-h)}{2h}$, error $O(h^2)$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Second Derivative:"
      }), " $f''(x) \\approx \\frac{f(x+h) - 2f(x) + f(x-h)}{h^2}$, error $O(h^2)$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Richardson Extrapolation:"
      }), " Combine two approximations with step sizes $h$ and $h/2$ to get higher order accuracy:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$D = \\frac{4D(h/2) - D(h)}{3}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "75-numerical-integration-quadrature",
      children: "7.5 Numerical Integration (Quadrature)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "751-newton-cotes-formulas",
      children: "7.5.1 Newton-Cotes Formulas"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rectangle Rule:"
      }), " $\\int_a^b f(x),dx \\approx h \\sum_{i=0}^{n-1} f(x_i)$, error $O(h)$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Midpoint Rule:"
      }), " $\\int_a^b f(x),dx \\approx h \\sum_{i=0}^{n-1} f(x_i + h/2)$, error $O(h^2)$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trapezoidal Rule:"
      }), " $\\int_a^b f(x),dx \\approx \\frac{h}{2} \\left[f(a) + 2\\sum_{i=1}^{n-1} f(x_i) + f(b)\\right]$, error $O(h^2)$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Simpson's 1/3 Rule:"
      }), " $\\int_a^b f(x),dx \\approx \\frac{h}{3} \\left[f(a) + 4\\sum_{\\text{odd}} f(x_i) + 2\\sum_{\\text{even}} f(x_i) + f(b)\\right]$, error $O(h^4)$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Simpson's 3/8 Rule:"
      }), " $\\int_a^b f(x),dx \\approx \\frac{3h}{8} [f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3)]$, error $O(h^4)$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "752-romberg-integration",
      children: "7.5.2 Romberg Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Combines trapezoidal rule with Richardson extrapolation to achieve high accuracy efficiently:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$R_{k,1} = T_{2^{k-1}} \\quad \\text{(trapezoidal with } 2^{k-1}+1 \\text{ points)}$$\n$$R_{k,j} = \\frac{4^{j-1}R_{k,j-1} - R_{k-1,j-1}}{4^{j-1} - 1}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "753-gaussian-quadrature",
      children: "7.5.3 Gaussian Quadrature"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\int_{-1}^1 f(x),dx \\approx \\sum_{i=1}^n w_i f(x_i)$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where $x_i$ are roots of Legendre polynomials $P_n(x)$ and $w_i$ are chosen for exact integration of polynomials up to degree $2n-1$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For general interval $[a,b]$, transform: $x = \\frac{b-a}{2}t + \\frac{a+b}{2}$."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "76-numerical-solution-of-odes",
      children: "7.6 Numerical Solution of ODEs"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "761-eulers-method",
      children: "7.6.1 Euler's Method"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$y_{n+1} = y_n + h f(t_n, y_n)$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Error:"
      }), " Local truncation error $O(h^2)$, global error $O(h)$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "762-runge-kutta-methods",
      children: "7.6.2 Runge-Kutta Methods"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RK2 (Midpoint Method):"
      }), "\n$$k_1 = f(t_n, y_n)$$\n$$k_2 = f(t_n + h/2, y_n + h k_1/2)$$\n$$y_{n+1} = y_n + h k_2$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RK4 (Classical 4th Order):"
      }), "\n$$k_1 = f(t_n, y_n)$$\n$$k_2 = f(t_n + h/2, y_n + h k_1/2)$$\n$$k_3 = f(t_n + h/2, y_n + h k_2/2)$$\n$$k_4 = f(t_n + h, y_n + h k_3)$$\n$$y_{n+1} = y_n + \\frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Error:"
      }), " Global error $O(h^4)$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "763-multistep-methods-adams-bashforth",
      children: "7.6.3 Multistep Methods (Adams-Bashforth)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Adams-Bashforth 2-Step:"
      }), "\n$$y_{n+1} = y_n + h\\left(\\frac{3}{2}f(t_n, y_n) - \\frac{1}{2}f(t_{n-1}, y_{n-1})\\right)$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Adams-Moulton 2-Step (Implicit):"
      }), "\n$$y_{n+1} = y_n + h\\left(\\frac{1}{2}f(t_{n+1}, y_{n+1}) + \\frac{1}{2}f(t_n, y_n)\\right)$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "764-stiff-odes-and-stability",
      children: "7.6.4 Stiff ODEs and Stability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Stiff equations"
      }), " require implicit methods (like backward Euler) for stability:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$y_{n+1} = y_n + h f(t_{n+1}, y_{n+1})$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "77-boundary-value-problems",
      children: "7.7 Boundary Value Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Shooting Method:"
      }), " Convert BVP to IVP by guessing initial conditions, then use root finding to match boundary conditions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Finite Difference Method:"
      }), " Discretize the domain and replace derivatives with finite differences, resulting in a system of equations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "78-monte-carlo-methods",
      children: "7.8 Monte Carlo Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Monte Carlo Integration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\int_D f(x),dx \\approx \\frac{V(D)}{N} \\sum_{i=1}^N f(x_i)$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where $x_i$ are uniformly sampled from domain $D$, and $V(D)$ is the volume."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Error:"
      }), " $O(1/\\sqrt{N})$ ? independent of dimension! (Unlike quadrature, which scales exponentially.)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Importance Sampling:"
      }), " Sample from a distribution $g(x)$ that concentrates where $|f(x)|$ is large:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\int f(x),dx = \\int \\frac{f(x)}{g(x)} g(x),dx \\approx \\frac{1}{N} \\sum \\frac{f(x_i)}{g(x_i)}$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Markov Chain Monte Carlo (MCMC):"
      }), " Generate samples from an arbitrary distribution by constructing a Markov chain whose stationary distribution equals the target."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Metropolis-Hastings Algorithm:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start at $x_t$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Propose $x' \\sim q(x'|x_t)$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Accept with probability $\\alpha = \\min\\left(1, \\frac{p(x')q(x_t|x')}{p(x_t)q(x'|x_t)}\\right)$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If accepted, $x_{t+1} = x'$; else $x_{t+1} = x_t$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Gibbs Sampling:"
      }), " Special case of Metropolis-Hastings where each variable is sampled from its full conditional distribution."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "79-numerical-linear-algebra",
      children: "7.9 Numerical Linear Algebra"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "LU Decomposition:"
      }), " $A = LU$, where $L$ is lower triangular and $U$ is upper triangular. Solves $Ax = b$ in $O(n^2)$ after $O(n^3)$ decomposition."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cholesky Decomposition:"
      }), " For symmetric positive definite $A$: $A = LL^T$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "QR Decomposition:"
      }), " $A = QR$, where $Q$ is orthogonal and $R$ is upper triangular."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Iterative Methods:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Jacobi:"
        }), " $x^{(k+1)}", (0,jsx_runtime.jsx)(_components.em, {
          children: "i = \\frac{1}{a"
        }), "{ii}}(b_i - \\sum_{j \\neq i} a_{ij} x^{(k)}_j)$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gauss-Seidel:"
        }), " Uses updated values immediately"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conjugate Gradient:"
        }), " For SPD matrices, converges in $n$ iterations theoretically"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-newton-raphson",
      children: "Example 1: Newton-Raphson"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Find $\\sqrt{5}$ using Newton's method."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Let $f(x) = x^2 - 5$, then $f'(x) = 2x$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$x_{n+1} = x_n - \\frac{x_n^2 - 5}{2x_n}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Starting from $x_0 = 2$:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$x_1 = 2 - \\frac{4-5}{4} = 2 + \\frac{1}{4} = 2.25$\n$x_2 = 2.25 - \\frac{5.0625-5}{4.5} = 2.25 - \\frac{0.0625}{4.5} \\approx 2.2361$\n$x_3 = 2.2361 - \\frac{5.0000-5}{4.4722} \\approx 2.23607$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After 3 iterations, we have 5 decimal places. Check: $2.23607^2 \\approx 5.0000$."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-simpsons-rule",
      children: "Example 2: Simpson's Rule"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Approximate $\\int_0^1 e^{-x^2},dx$ using Simpson's 1/3 rule with $n = 4$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " $h = (1-0)/4 = 0.25$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$x_0 = 0$, $f_0 = e^0 = 1.0000$\n$x_1 = 0.25$, $f_1 = e^{-0.0625} = 0.9394$\n$x_2 = 0.5$, $f_2 = e^{-0.25} = 0.7788$\n$x_3 = 0.75$, $f_3 = e^{-0.5625} = 0.5697$\n$x_4 = 1$, $f_4 = e^{-1} = 0.3679$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\int_0^1 e^{-x^2},dx \\approx \\frac{0.25}{3}[1 + 4(0.9394 + 0.5697) + 2(0.7788) + 0.3679]$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$= \\frac{0.25}{3}[1 + 4(1.5091) + 1.5576 + 0.3679] = \\frac{0.25}{3}[1 + 6.0364 + 1.5576 + 0.3679]$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$= \\frac{0.25}{3} \\times 8.9619 \\approx 0.7468$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The true value is approximately 0.7468. Excellent agreement!"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-rk4-for-ode",
      children: "Example 3: RK4 for ODE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Solve $y' = y - t^2 + 1$ from $t = 0$ to $t = 1$ with $y(0) = 0.5$, $h = 0.5$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "First step ($t_0 = 0$, $y_0 = 0.5$):"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$k_1 = f(0, 0.5) = 0.5 - 0 + 1 = 1.5$\n$k_2 = f(0.25, 0.5 + 0.5(1.5)/2) = f(0.25, 0.875) = 0.875 - 0.0625 + 1 = 1.8125$\n$k_3 = f(0.25, 0.5 + 0.5(1.8125)/2) = f(0.25, 0.9531) = 0.9531 - 0.0625 + 1 = 1.8906$\n$k_4 = f(0.5, 0.5 + 0.5(1.8906)) = f(0.5, 1.4453) = 1.4453 - 0.25 + 1 = 2.1953$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$y_1 = 0.5 + \\frac{0.5}{6}(1.5 + 2 \\times 1.8125 + 2 \\times 1.8906 + 2.1953)$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$= 0.5 + \\frac{0.5}{6}(1.5 + 3.625 + 3.7812 + 2.1953) = 0.5 + \\frac{0.5}{6}(11.1015) \\approx 1.4251$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The exact solution at $t = 0.5$ is $y(0.5) = 1.4256$. Error is only 0.0005."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-monte-carlo-integration",
      children: "Example 4: Monte Carlo Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Estimate $\\pi$ using Monte Carlo."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Sample $N$ points uniformly from $[-1,1]^2$. Count points inside the unit circle."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$\\pi \\approx 4 \\times \\frac{\\text{points inside}}{\\text{total points}}$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With $N = 1000$, we might get 787 points inside, giving $\\pi \\approx 4 \\times 787/1000 = 3.148$. Error $\\approx 0.006$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With $N = 10^6$, error drops to $\\approx 0.001$ (but variance scales as $1/\\sqrt{N}$)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-5-cubic-spline-interpolation",
      children: "Example 5: Cubic Spline Interpolation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Construct the natural cubic spline through $(0,0)$, $(1,1)$, $(2,0)$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " For each interval $[x_i, x_{i+1}]$, $S_i(x) = a_i + b_i(x-x_i) + c_i(x-x_i)^2 + d_i(x-x_i)^3$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Interval 1 $[0,1]$: $S_0(0) = 0 \\implies a_0 = 0$, $S_0(1) = 1 \\implies a_0 + b_0 + c_0 + d_0 = 1$\nInterval 2 $[1,2]$: $S_1(1) = 1 \\implies a_1 = 1$, $S_1(2) = 0 \\implies a_1 + b_1 + c_1 + d_1 = 0$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Continuity of $S'$ at $x=1$: $b_0 + 2c_0 + 3d_0 = b_1$\nContinuity of $S''$ at $x=1$: $2c_0 + 6d_0 = 2c_1$\nNatural: $S''_0(0) = 0 \\implies c_0 = 0$, $S''_1(2) = 0 \\implies 2c_1 + 6d_1 = 0$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Solving: $a_0 = 0$, $b_0 = 1.5$, $c_0 = 0$, $d_0 = -0.5$\n$a_1 = 1$, $b_1 = 0$, $c_1 = -1.5$, $d_1 = 0.5$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$S(x) = \\begin{cases} 1.5x - 0.5x^3 & 0 \\leq x \\leq 1 \\ 1 - 1.5(x-1)^2 + 0.5(x-1)^3 & 1 \\leq x \\leq 2 \\end{cases}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Lagrange Interpolation:"
          }), " Find the polynomial $P(x)$ interpolating $(0,1), (1,3), (2,7)$ using Lagrange basis polynomials. Evaluate at $x = 1.5$."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Gaussian Quadrature:"
          }), " Use 3-point Gaussian quadrature to approximate $\\int_{-1}^1 e^x,dx$. Compare with the exact value $e - e^{-1}$."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Finite Difference:"
          }), " Use the central difference formula to approximate $f'(0.5)$ for $f(x) = \\sin(x^2)$ with $h = 0.1, 0.01, 0.001$. Show that the error scales as $O(h^2)$."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-runge-kutta-4-rk4-ode-solver",
      children: "TypeScript Implementation: Runge-Kutta 4 (RK4) ODE Solver"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type ODEFunction = (t: number, y: number) => number;\n\nfunction rk4(\n  f: ODEFunction,\n  t0: number,\n  y0: number,\n  h: number,\n  steps: number\n): { t: number[]; y: number[] } {\n  const t: number[] = [t0];\n  const y: number[] = [y0];\n  for (let i = 0; i < steps; i++) {\n    const ti = t[i], yi = y[i];\n    const k1 = f(ti, yi);\n    const k2 = f(ti + h / 2, yi + (h / 2) * k1);\n    const k3 = f(ti + h / 2, yi + (h / 2) * k2);\n    const k4 = f(ti + h, yi + h * k3);\n    t.push(ti + h);\n    y.push(yi + (h / 6) * (k1 + 2 * k2 + 2 * k3 + k4));\n  }\n  return { t, y };\n}\n\n// Solve y' = -2ty?, y(0) = 1 ? exact solution: y = 1/(1+t?)\nconst f1: ODEFunction = (t, y) => -2 * t * y * y;\nconst { t: tv, y: yv } = rk4(f1, 0, 1, 0.1, 20);\nfor (let i = 0; i <= 20; i += 5) {\n  const exact = 1 / (1 + tv[i] * tv[i]);\n  console.log(\n    `t=${tv[i].toFixed(1)}: RK4=${yv[i].toFixed(6)}, exact=${exact.toFixed(6)}`\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-world-application-solving-the-heat-equation",
      children: "Real-World Application: Solving the Heat Equation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The heat equation $\\frac{\\partial u}{\\partial t} = \\alpha \\frac{\\partial^2 u}{\\partial x^2}$ is a parabolic PDE modeling heat diffusion. Numerical solution uses finite differences to discretize both time and space."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Finite Difference Discretization:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Space: $\\frac{\\partial^2 u}{\\partial x^2} \\approx \\frac{u_{i+1} - 2u_i + u_{i-1}}{\\Delta x^2}$ (second-order central)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Time (Forward Euler): $\\frac{\\partial u}{\\partial t} \\approx \\frac{u^{n+1} - u^n}{\\Delta t}$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Combined (explicit scheme): $u_i^{n+1} = u_i^n + \\frac{\\alpha \\Delta t}{\\Delta x^2}(u_{i+1}^n - 2u_i^n + u_{i-1}^n)$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Stability Constraint (CFL condition):"
      }), " $\\frac{\\alpha \\Delta t}{\\Delta x^2} \\leq \\frac{1}{2}$ ? the time step must be small enough to avoid numerical instability."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function solveHeatEquation1D(\n  alpha: number,\n  length: number,\n  nx: number,\n  totalTime: number,\n  initialTemp: (x: number) => number\n): { x: number[]; u: number[][] } {\n  const dx = length / (nx - 1);\n  const dt = 0.4 * dx * dx / alpha;  // CFL: dt <= dx^2/(2*alpha)\n  const nt = Math.ceil(totalTime / dt);\n  const x = Array.from({ length: nx }, (_, i) => i * dx);\n  const u: number[][] = [x.map(initialTemp)];\n  const r = alpha * dt / (dx * dx);\n\n  for (let n = 0; n < nt; n++) {\n    const current = u[u.length - 1];\n    const next: number[] = [0];  // Dirichlet BC at left\n    for (let i = 1; i < nx - 1; i++)\n      next.push(current[i] + r * (current[i + 1] - 2 * current[i] + current[i - 1]));\n    next.push(0);  // Dirichlet BC at right\n    u.push(next);\n  }\n  return { x, u };\n}\n\n// Rod with initial temp: 100?C at center, 0?C at ends\nconst initial = (x: number) => x < 0.5 ? 2 * 100 * x : 2 * 100 * (1 - x);\nconst { x, u } = solveHeatEquation1D(0.01, 1, 20, 1, initial);\nconsole.log(`Temperature at center after 1s: ${u[u.length - 1][10].toFixed(2)}?C`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-newton-cotes-quadrature",
      children: "TypeScript Implementation: Newton-Cotes Quadrature"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Composite Simpson's rule (order 4)\nfunction simpson(f: (x: number) => number, a: number, b: number, n: number = 100): number {\n  if (n % 2 !== 0) n++;\n  const h = (b - a) / n;\n  let sum = f(a) + f(b);\n  for (let i = 1; i < n; i++) sum += (i % 2 === 0 ? 2 : 4) * f(a + i * h);\n  return sum * h / 3;\n}\n\n// Composite Boole's rule (order 6, n multiple of 4)\nfunction boole(f: (x: number) => number, a: number, b: number, n: number = 100): number {\n  n = Math.max(4, Math.ceil(n / 4) * 4);\n  const h = (b - a) / n;\n  let sum = 7 * (f(a) + f(b));\n  for (let i = 1; i < n; i++) {\n    const x = a + i * h;\n    if (i % 4 === 0) sum += 14 * f(x);\n    else if (i % 2 === 0) sum += 12 * f(x);\n    else sum += 32 * f(x);\n  }\n  return sum * 2 * h / 45;\n}\n\n// Gaussian quadrature (2-point rule)\nfunction gaussQuad2(f: (x: number) => number, a: number, b: number): number {\n  const x1 = -1 / Math.sqrt(3), x2 = 1 / Math.sqrt(3);\n  const t = (x: number) => (b - a) / 2 * x + (a + b) / 2;\n  return (b - a) / 2 * (f(t(x1)) + f(t(x2)));\n}\n\n// Test: ?0? e^(-x?) dx ? 0.746824\nconst gaussian = (x: number) => Math.exp(-x * x);\nconsole.log(`Simpson ?0? e^(-x?) dx: ${simpson(gaussian, 0, 1, 100).toFixed(6)} (expected: 0.746824)`);\nconsole.log(`Boole ?0? e^(-x?) dx: ${boole(gaussian, 0, 1, 100).toFixed(6)} (expected: 0.746824)`);\nconsole.log(`Gauss-2 ?0? e^(-x?) dx: ${gaussQuad2(gaussian, 0, 1).toFixed(6)} (expected: 0.746824)`);\n\n### TypeScript: Jacobi Iteration for Linear Systems\n\n```typescript\nfunction jacobi(A: number[][], b: number[], tol: number = 1e-8, maxIter: number = 1000): number[] {\n  const n = b.length;\n  let x = new Array(n).fill(0);\n  for (let iter = 0; iter &lt; maxIter; iter++) {\n    const xNew = x.map((_, i) => {\n      let sum = 0;\n      for (let j = 0; j &lt; n; j++) if (j !== i) sum += A[i][j] * x[j];\n      return (b[i] - sum) / A[i][i];\n    });\n    const error = Math.sqrt(xNew.reduce((s, xi, i) => s + (xi - x[i]) ** 2, 0));\n    x = xNew;\n    if (error &lt; tol) break;\n  }\n  return x;\n}\n\n// Solve: 4x - y + z = 7, x - 5y + 2z = -8, 2x + y + 6z = 9\nconst A = [[4, -1, 1], [1, -5, 2], [2, 1, 6]];\nconst b = [7, -8, 9];\nconst sol = jacobi(A, b);\nconsole.log(`Jacobi: x=${sol[0].toFixed(4)}, y=${sol[1].toFixed(4)}, z=${sol[2].toFixed(4)}`);\n\n// Verify: A?x ? b\nconst verify = A.map((row, i) => row.reduce((s, aij, j) => s + aij * sol[j], 0));\nconsole.log(`Verify: A?x = [${verify.map(v => v.toFixed(2)).join(\", \")}] ? [${b.join(\", \")}]`);\n\n### TypeScript: Cubic Spline Interpolation\n\n```typescript\nfunction cubicSpline(x: number[], y: number[]): (t: number) => number {\n  const n = x.length;\n  const h = x.slice(1).map((xi, i) => xi - x[i]);\n  const a = new Array(n).fill(0);\n  for (let i = 1; i < n - 1; i++)\n    a[i] = (3 / h[i]) * (y[i + 1] - y[i]) - (3 / h[i - 1]) * (y[i] - y[i - 1]);\n  const l = new Array(n).fill(1), ? = new Array(n).fill(0), z = new Array(n).fill(0);\n  for (let i = 1; i < n - 1; i++) {\n    l[i] = 2 * (x[i + 1] - x[i - 1]) - h[i - 1] * ?[i - 1];\n    ?[i] = h[i] / l[i];\n    z[i] = (a[i] - h[i - 1] * z[i - 1]) / l[i];\n  }\n  const c = new Array(n).fill(0), b = new Array(n).fill(0), d = new Array(n).fill(0);\n  for (let j = n - 2; j >= 0; j--) {\n    c[j] = z[j] - ?[j] * c[j + 1];\n    b[j] = (y[j + 1] - y[j]) / h[j] - h[j] * (c[j + 1] + 2 * c[j]) / 3;\n    d[j] = (c[j + 1] - c[j]) / (3 * h[j]);\n  }\n  const spline = (t: number): number => {\n    for (let i = 0; i < n - 1; i++)\n      if (t >= x[i] && t <= x[i + 1]) {\n        const dx = t - x[i];\n        return y[i] + b[i] * dx + c[i] * dx ** 2 + d[i] * dx ** 3;\n      }\n    return NaN;\n  };\n  return spline;\n}\n\n// Interpolate sin(x) at 5 uneven points\nconst xs = [0, 0.5, 1.2, 2.0, Math.PI];\nconst ys = xs.map(Math.sin);\nconst spline = cubicSpline(xs, ys);\nconsole.log(`Spline(0.8): ${spline(0.8).toFixed(4)} (sin(0.8)=${Math.sin(0.8).toFixed(4)})`);\nconsole.log(`Spline(1.5): ${spline(1.5).toFixed(4)} (sin(1.5)=${Math.sin(1.5).toFixed(4)})`);\nconsole.log(`Spline(2.5): ${spline(2.5).toFixed(4)} (sin(2.5)=${Math.sin(2.5).toFixed(4)})`);\n\n// Compare with Lagrange interpolation to show spline avoids Runge phenomenon\nfunction lagrangeInterp(x: number[], y: number[], t: number): number {\n  let result = 0;\n  for (let i = 0; i < x.length; i++) {\n    let term = y[i];\n    for (let j = 0; j < x.length; j++)\n      if (j !== i) term *= (t - x[j]) / (x[i] - x[j]);\n    result += term;\n  }\n  return result;\n}\nconsole.log(`Lagrange(0.8): ${lagrangeInterp(xs, ys, 0.8).toFixed(4)} (cubic spline: ${spline(0.8).toFixed(4)})`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// --- False Position (Regula Falsi) Method ---\nfunction falsePosition(f: (x: number) => number, a: number, b: number, tol: number = 1e-8, maxIter: number = 100): number {\n  let fa = f(a), fb = f(b);\n  for (let i = 0; i < maxIter; i++) {\n    const c = (a * fb - b * fa) / (fb - fa);\n    const fc = f(c);\n    if (Math.abs(fc) < tol) return c;\n    if (fa * fc < 0) { b = c; fb = fc; } else { a = c; fa = fc; }\n  }\n  return (a + b) / 2;\n}\nconst fp = falsePosition(x => x * x - 2, 1, 2);\nconsole.log('False position v2:', fp.toFixed(10));\n\n// --- Gauss-Seidel Iteration ---\nfunction gaussSeidel(A: number[][], b: number[], maxIter: number = 100, tol: number = 1e-8): number[] {\n  const n = A.length;\n  let x = new Array(n).fill(0);\n  for (let iter = 0; iter < maxIter; iter++) {\n    let maxDiff = 0;\n    for (let i = 0; i < n; i++) {\n      let sum = b[i];\n      for (let j = 0; j < n; j++) if (j !== i) sum -= A[i][j] * x[j];\n      const newX = sum / A[i][i];\n      maxDiff = Math.max(maxDiff, Math.abs(newX - x[i]));\n      x[i] = newX;\n    }\n    if (maxDiff < tol) break;\n  }\n  return x;\n}\nconst gsA = [[4, -1, 0], [-1, 4, -1], [0, -1, 4]], gsB = [15, 10, 10];\nconst gsX = gaussSeidel(gsA, gsB);\nconsole.log('\\nGauss-Seidel solution:', gsX.map(v => v.toFixed(4)).join(', '), '(expected: x=5, y=4.375, z=3.75)');\n\n// --- Richardson Extrapolation ---\nfunction richardsonExtrap(f: (h: number) => number, h: number, order: number = 2): number {\n  const f1 = f(h);\n  const f2 = f(h / 2);\n  return (Math.pow(2, order) * f2 - f1) / (Math.pow(2, order) - 1);\n}\n// Approximate f'(x) = cos(x) at x=0 using forward diff\nconst derivRich = richardsonExtrap(h => (Math.sin(h) - Math.sin(0)) / h, 0.1);\nconsole.log('\\nRichardson extrapolation f\\'(0) for sin(x):', derivRich.toFixed(6), '(expected: 1)');\n\n// --- Composite Simpson's Rule ---\nfunction simpsonComposite(f: (x: number) => number, a: number, b: number, n: number): number {\n  if (n % 2 !== 0) n++; // must be even\n  const h = (b - a) / n;\n  let sum = f(a) + f(b);\n  for (let i = 1; i < n; i++) sum += (i % 2 === 0 ? 2 : 4) * f(a + i * h);\n  return (h / 3) * sum;\n}\nconst simpsonInt = simpsonComposite(x => Math.exp(-x * x), 0, 1, 100);\nconsole.log('\\nSimpson ?0? e^(-x?) dx:', simpsonInt.toFixed(6), '(expected: ~0.746824)');\n\n// --- Power Method for Eigenvalues ---\nfunction powerMethod(A: number[][], maxIter: number = 100, tol: number = 1e-8): { eigenvalue: number; eigenvector: number[] } {\n  const n = A.length;\n  let v = new Array(n).fill(1).map((_, i) => i === 0 ? 1 : 0.1);\n  let ? = 0;\n  for (let iter = 0; iter < maxIter; iter++) {\n    const Av = A.map((r, i) => r.reduce((s, a, j) => s + a * v[j], 0));\n    const norm = Math.sqrt(Av.reduce((s, x) => s + x * x, 0));\n    const newV = Av.map(x => x / norm);\n    const new? = newV.reduce((s, x, i) => s + x * Av[i], 0);\n    if (Math.abs(new? - ?) < tol) break;\n    ? = new?; v = newV;\n  }\n  return { eigenvalue: +?.toFixed(4), eigenvector: v.map(x => +x.toFixed(4)) };\n}\nconst pm = powerMethod([[2, 1], [1, 2]]);\nconsole.log('\\nPower method: ?=', pm.eigenvalue, '(expected: 3)');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// numerical methods\n// linear-algebra-calculus implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'numerical methods', data: { topic: 'linear-algebra-calculus' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// numerical methods - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'engineering-math demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'engineering-mathematics', chapter: 'numerical methods' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('engineering-math'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Root-finding methods (bisection, Newton-Raphson, secant) solve nonlinear equations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interpolation reconstructs functions from discrete samples; splines avoid Runge oscillation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Numerical integration (Simpson, Gaussian quadrature) works when antiderivatives are unavailable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ODE solvers (Euler, RK4, multistep) discretize continuous dynamics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stiff equations demand implicit methods"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monte Carlo methods handle high-dimensional integration with $O(1/\\sqrt{N})$ convergence"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Numerical linear algebra provides efficient algorithms for matrix computations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does Newton's method converge quadratically while bisection converges linearly?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the Runge phenomenon and why splines address it"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare the accuracy and cost of trapezoidal vs Simpson's rule"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When would you choose Monte Carlo over deterministic quadrature?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What makes an ODE \"stiff\" and what methods handle stiffness?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Root Finding:"
          }), " Find the intersection of $e^{-x} = \\sin x$ on $[0, \\pi/2]$ using Newton's method."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Integration:"
          }), " Compute $\\int_0^2 \\frac{dx}{\\sqrt{1+x^3}}$ using Simpson's rule with $n = 8$."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ODE:"
          }), " Solve $y' = -2ty^2$, $y(0) = 1$ from $t = 0$ to $t = 2$ using RK4 with $h = 0.1$. Compare with the exact solution $y = 1/(1+t^2)$."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Monte Carlo:"
          }), " Write pseudocode to estimate $\\int_0^1 \\int_0^1 e^{-(x^2+y^2)},dx,dy$ using Monte Carlo."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Gradient Descent as Numerical Method:"
      }), " Show that gradient descent $x_{n+1} = x_n - \\alpha f'(x_n)$ is Euler's method applied to the ODE $dx/dt = -f'(x)$. For $f(x) = x^2$, derive the condition on $\\alpha$ for convergence, and show the convergence rate is linear (not quadratic like Newton)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-newton-raphson-root-finder",
      children: "TypeScript Implementation: Newton-Raphson Root Finder"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type ScalarFunction = (x: number) => number;\n\nfunction newtonRaphson(\n  f: ScalarFunction,\n  fPrime: ScalarFunction,\n  x0: number,\n  tolerance: number = 1e-7,\n  maxIterations: number = 100\n): { root: number; iterations: number; converged: boolean } {\n  let x = x0;\n  for (let i = 0; i < maxIterations; i++) {\n    const fx = f(x);\n    if (Math.abs(fx) < tolerance) {\n      return { root: x, iterations: i, converged: true };\n    }\n    const fpx = fPrime(x);\n    if (fpx === 0) {\n      return { root: x, iterations: i, converged: false };\n    }\n    x = x - fx / fpx;\n  }\n  return { root: x, iterations: maxIterations, converged: false };\n}\n\n// Find sqrt(5): solve x^2 - 5 = 0\nconst result = newtonRaphson(\n  (x) => x * x - 5,\n  (x) => 2 * x,\n  2.0\n);\nconsole.log(`sqrt(5) ? ${result.root}, iterations: ${result.iterations}`);\n// Output: sqrt(5) ? 2.23606797749979, iterations: 4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-bisection-method",
      children: "TypeScript Implementation: Bisection Method"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function bisection(\n  f: (x: number) => number,\n  a: number,\n  b: number,\n  tolerance: number = 1e-7,\n  maxIterations: number = 100\n): { root: number; iterations: number; converged: boolean } {\n  if (f(a) * f(b) >= 0) {\n    return { root: NaN, iterations: 0, converged: false };\n  }\n  let left = a, right = b;\n  for (let i = 0; i < maxIterations; i++) {\n    const mid = (left + right) / 2;\n    const fMid = f(mid);\n    if (Math.abs(fMid) < tolerance || (right - left) / 2 < tolerance) {\n      return { root: mid, iterations: i + 1, converged: true };\n    }\n    if (f(left) * fMid < 0) {\n      right = mid;\n    } else {\n      left = mid;\n    }\n  }\n  return { root: (left + right) / 2, iterations: maxIterations, converged: false };\n}\n\n// Solve cos(x) = x on [0, 1]\nconst bisectResult = bisection((x) => Math.cos(x) - x, 0, 1);\nconsole.log(`cos(x) = x at x ? ${bisectResult.root.toFixed(6)}, iterations: ${bisectResult.iterations}`);\n// Output: cos(x) = x at x ? 0.739085, iterations: 21\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-simpsons-rule",
      children: "TypeScript Implementation: Simpson's Rule"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function simpsonRule(\n  f: (x: number) => number,\n  a: number,\n  b: number,\n  n: number\n): number {\n  if (n % 2 !== 0) throw new Error(\"n must be even for Simpson's 1/3 rule\");\n  const h = (b - a) / n;\n  let sum = f(a) + f(b);\n  for (let i = 1; i < n; i++) {\n    const x = a + i * h;\n    sum += i % 2 === 0 ? 2 * f(x) : 4 * f(x);\n  }\n  return (h / 3) * sum;\n}\n\n// ?0? e^(-x?) dx ? 0.746824\nconst integral = simpsonRule((x) => Math.exp(-x * x), 0, 1, 100);\nconsole.log(`?0? e^(-x?) dx ? ${integral.toFixed(6)}`);\n// Output: ?0? e^(-x?) dx ? 0.746824\n\nfunction simpsonError(\n  f: (x: number) => number,\n  a: number,\n  b: number,\n  exactValue: number,\n  nValues: number[]\n): void {\n  for (const n of nValues) {\n    const approx = simpsonRule(f, a, b, n);\n    const error = Math.abs(exactValue - approx);\n    const ratio = nValues.indexOf(n) > 0\n      ? Math.abs(exactValue - simpsonRule(f, a, b, n / 2)) / error\n      : 0;\n    console.log(`n=${n}: approx=${approx.toFixed(10)}, error=${error.toExponential(3)}${ratio ? ', ratio=' + ratio.toFixed(2) : ''}`);\n  }\n}\n\n// Verify O(h4) convergence: doubling n should reduce error by ~16x\nsimpsonError((x) => Math.exp(-x * x), 0, 1, 0.746824132812427, [4, 8, 16, 32]);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-eulers-method-for-odes",
      children: "TypeScript Implementation: Euler's Method for ODEs"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function eulerMethod(\n  f: (t: number, y: number) => number,\n  t0: number,\n  y0: number,\n  h: number,\n  steps: number\n): { t: number[]; y: number[] } {\n  const t: number[] = [t0];\n  const y: number[] = [y0];\n  for (let i = 0; i < steps; i++) {\n    y.push(y[i] + h * f(t[i], y[i]));\n    t.push(t[i] + h);\n  }\n  return { t, y };\n}\n\n// y' = -2ty, y(0) = 1 (exact: y = e^(-t?))\nconst eulerResult = eulerMethod((t, y) => -2 * t * y, 0, 1, 0.1, 10);\nfor (let i = 0; i <= 10; i += 5) {\n  const exact = Math.exp(-eulerResult.t[i] ** 2);\n  console.log(`t=${eulerResult.t[i].toFixed(1)}: Euler=${eulerResult.y[i].toFixed(6)}, exact=${exact.toFixed(6)}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bisection-method-algorithm-flowchart",
      children: "Bisection Method Algorithm Flowchart"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    START([Start]) --> INPUT[Input f, a, b, tol]\n    INPUT --> CHECK{f(a) ? f(b) < 0?}\n    CHECK -->|No| ERR[Error: No sign change]\n    CHECK -->|Yes| LOOP\n    subgraph LOOP [Iteration Loop]\n        C[Compute c = (a+b)/2]\n        C --> FC[Compute f[c]]\n        FC --> CONV{|f[c]| < tol OR (b-a)/2 < tol?}\n        CONV -->|Yes| DONE[Return c]\n        CONV -->|No| SIGN{f[a] ? f[c] < 0?}\n        SIGN -->|Yes| SETB[Set b = c]\n        SIGN -->|No| SETA[Set a = c]\n        SETB --> LOOP\n        SETA --> LOOP\n    end\n    DONE --> OUTPUT[Output root, iterations]\n    OUTPUT --> END([End])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "newton-raphson-convergence-visualization",
      children: "Newton-Raphson Convergence Visualization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    START([Start x0]) --> EVAL[Compute f[x?] and f'[x?]]\n    EVAL --> CHECK{f'[x?] = 0?}\n    CHECK -->|Yes| FAIL[Fail: zero derivative]\n    CHECK -->|No| UPDATE[x??1 = x? - f[x?]/f'[x?]]\n    UPDATE --> CONV{|f[x??1]| < tol?}\n    CONV -->|Yes| DONE[Return x??1]\n    CONV -->|No| COUNT{Max iterations reached?}\n    COUNT -->|Yes| DONE2[Return best estimate]\n    COUNT -->|No| EVAL\n    DONE --> OUT[Root found]\n    DONE2 --> OUT2[Not fully converged]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises-1",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Comparison Study:"
          }), " Solve $x^3 - x - 2 = 0$ on $[1, 2]$ using bisection, Newton-Raphson, and secant methods. Compare iteration counts and accuracy for tolerance $10^{-8}$."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Adaptive Quadrature:"
          }), " Implement an adaptive Simpson's rule that subdivides intervals where the error estimate exceeds a threshold. Test on $\\int_0^1 \\sin(1/x),dx$ where naive quadrature fails due to rapid oscillations near $x = 0$."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Stiff ODE:"
          }), " Solve the stiff ODE $y' = -1000y + 1000t$, $y(0) = 0$ from $t=0$ to $t=5$ using Euler's method with $h = 0.001$ and $h = 0.1$. Explain why the larger step fails and what implicit method would fix it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to Use"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Watch Out"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bisection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root on interval with sign change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow linear convergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Newton-Raphson"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smooth function, good initial guess"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May diverge; needs derivative"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Secant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Derivative unavailable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Superlinear but no guaranteed convergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RK4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate accuracy ODE solving"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed step size may miss stiffness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Monte Carlo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-dimensional integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow convergence $O(1/\\sqrt{N})$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gaussian Quadrature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smooth functions, moderate dimension"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node/weight precomputation needed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-use-each-method",
      children: "When to Use Each Method"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root Finding:"
        }), " Start with bisection to bracket, switch to Newton for speed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interpolation:"
        }), " Use splines for smooth data; avoid high-degree Lagrange for many points"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Integration:"
        }), " Gaussian quadrature for smooth functions; Simpson for equally spaced data; Monte Carlo for high dimensions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ODEs:"
        }), " RK4 as default; implicit methods (backward Euler, BDF) for stiff equations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Linear Systems:"
        }), " Direct methods (LU) for dense $n < 10^4$; iterative (CG, GMRES) for sparse large systems"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notation-reference",
      children: "Notation Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "$\\epsilon$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "machine epsilon"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\kappa$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "condition number"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$P_n(x)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lagrange interpolating polynomial"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$L_k(x)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lagrange basis polynomial"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$f[x_0, \\ldots, x_k]$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "divided difference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$h$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "step size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$O(h^p)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "order of accuracy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$w_i$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "quadrature weights"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$k_1, k_2, k_3, k_4$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RK4 stage derivatives"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\alpha$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metropolis acceptance ratio"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$N$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number of Monte Carlo samples"
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