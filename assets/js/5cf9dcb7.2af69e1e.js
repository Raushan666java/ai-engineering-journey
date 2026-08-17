"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[75758],{

/***/ 34848
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_engineering_mathematics_03_calculus_ii_md_5cf_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-engineering-mathematics-03-calculus-ii-md-5cf.json
const site_docs_courses_engineering_mathematics_03_calculus_ii_md_5cf_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/engineering-mathematics/03-calculus-ii","title":"Chapter 3: Multivariable Calculus","description":"Previous Single Variable Calculus | Next Differential Equations","source":"@site/docs/courses/engineering-mathematics/03-calculus-ii.md","sourceDirName":"courses/engineering-mathematics","slug":"/engineering-mathematics/03-calculus-ii","permalink":"/ai-engineering-journey/engineering-mathematics/03-calculus-ii","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"03-calculus-ii","slug":"/engineering-mathematics/03-calculus-ii","title":"Chapter 3: Multivariable Calculus","sidebar_label":"Chapter 3: Multivariable Calculus","sidebar_position":3},"sidebar":"course-engineering-mathematics","previous":{"title":"Chapter 2: Single Variable Calculus","permalink":"/ai-engineering-journey/engineering-mathematics/02-calculus-i"},"next":{"title":"Chapter 4: Differential Equations","permalink":"/ai-engineering-journey/engineering-mathematics/04-differential-equations"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/engineering-mathematics/03-calculus-ii.md


const frontMatter = {
	id: '03-calculus-ii',
	slug: '/engineering-mathematics/03-calculus-ii',
	title: 'Chapter 3: Multivariable Calculus',
	sidebar_label: 'Chapter 3: Multivariable Calculus',
	sidebar_position: 3
};
const contentTitle = 'Chapter 3: Multivariable Calculus';

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
  "value": "3.1 Functions of Several Variables",
  "id": "31-functions-of-several-variables",
  "level": 3
}, {
  "value": "3.2 Partial Derivatives",
  "id": "32-partial-derivatives",
  "level": 3
}, {
  "value": "3.3 Gradient and Directional Derivatives",
  "id": "33-gradient-and-directional-derivatives",
  "level": 3
}, {
  "value": "3.4 Chain Rule for Multivariable Functions",
  "id": "34-chain-rule-for-multivariable-functions",
  "level": 3
}, {
  "value": "3.5 Tangent Planes and Linear Approximation",
  "id": "35-tangent-planes-and-linear-approximation",
  "level": 3
}, {
  "value": "3.6 Multivariable Optimization",
  "id": "36-multivariable-optimization",
  "level": 3
}, {
  "value": "3.7 Double Integrals",
  "id": "37-double-integrals",
  "level": 3
}, {
  "value": "3.8 Triple Integrals",
  "id": "38-triple-integrals",
  "level": 3
}, {
  "value": "3.9 Change of Variables (Coordinate Transformations)",
  "id": "39-change-of-variables-coordinate-transformations",
  "level": 3
}, {
  "value": "3.10 Vector Fields",
  "id": "310-vector-fields",
  "level": 3
}, {
  "value": "3.11 Line Integrals",
  "id": "311-line-integrals",
  "level": 3
}, {
  "value": "3.12 Surface Integrals",
  "id": "312-surface-integrals",
  "level": 3
}, {
  "value": "3.13 Fundamental Theorems of Vector Calculus",
  "id": "313-fundamental-theorems-of-vector-calculus",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Partial Derivatives",
  "id": "example-1-partial-derivatives",
  "level": 3
}, {
  "value": "Example 2: Gradient and Directional Derivative",
  "id": "example-2-gradient-and-directional-derivative",
  "level": 3
}, {
  "value": "Example 3: Double Integral",
  "id": "example-3-double-integral",
  "level": 3
}, {
  "value": "Example 4: Change of Variables (Polar)",
  "id": "example-4-change-of-variables-polar",
  "level": 3
}, {
  "value": "Example 5: Lagrange Multipliers",
  "id": "example-5-lagrange-multipliers",
  "level": 3
}, {
  "value": "Example 6: Divergence Theorem",
  "id": "example-6-divergence-theorem",
  "level": 3
}, {
  "value": "Example 7: Application ? Gradient Descent in 2D",
  "id": "example-7-application--gradient-descent-in-2d",
  "level": 3
}, {
  "value": "Example 8: Triple Integral in Spherical Coordinates",
  "id": "example-8-triple-integral-in-spherical-coordinates",
  "level": 3
}, {
  "value": "Example 9: Jacobian for Change of Variables",
  "id": "example-9-jacobian-for-change-of-variables",
  "level": 3
}, {
  "value": "TypeScript Examples",
  "id": "typescript-examples",
  "level": 2
}, {
  "value": "Numerical Gradient and Hessian Computation",
  "id": "numerical-gradient-and-hessian-computation",
  "level": 3
}, {
  "value": "Numerical Double Integration",
  "id": "numerical-double-integration",
  "level": 3
}, {
  "value": "Real-World Application: Backpropagation as the Chain Rule",
  "id": "real-world-application-backpropagation-as-the-chain-rule",
  "level": 2
}, {
  "value": "TypeScript Implementation: Gradient Descent Optimizer",
  "id": "typescript-implementation-gradient-descent-optimizer",
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
  "value": "Additional Exercises",
  "id": "additional-exercises",
  "level": 3
}, {
  "value": "Challenge Problem",
  "id": "challenge-problem",
  "level": 3
}, {
  "value": "TypeScript: Multivariable Calculus Operations",
  "id": "typescript-multivariable-calculus-operations",
  "level": 3
}, {
  "value": "Notation Reference",
  "id": "notation-reference",
  "level": 2
}, {
  "value": "Mermaid: Optimization with Gradient Descent",
  "id": "mermaid-optimization-with-gradient-descent",
  "level": 3
}, {
  "value": "Mermaid: Double Integral Over a Region",
  "id": "mermaid-double-integral-over-a-region",
  "level": 3
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
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "chapter-3-multivariable-calculus",
        children: "Chapter 3: Multivariable Calculus"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/engineering-mathematics/02-calculus-i",
          children: "Chapter 2: Single Variable Calculus"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/engineering-mathematics/04-differential-equations",
          children: "Chapter 4: Differential Equations"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute partial derivatives and interpret them geometrically"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Find gradients, directional derivatives, and use them for optimization in multiple dimensions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate multiple integrals in Cartesian, polar, cylindrical, and spherical coordinates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply change of variables (Jacobian) for coordinate transformations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand and compute divergence and curl of vector fields"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply multivariable calculus to machine learning optimization and physics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Partial Derivatives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Derivative with respect to one variable, holding others constant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computing gradients in ML"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gradient"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\nabla f$ points in the direction of steepest ascent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gradient descent for optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple Integrals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\iint f(x,y),dx,dy$ accumulates over 2D regions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computing areas, volumes, averages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Change of Variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$dx,dy ="
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "J"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vector Fields"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Functions that assign vectors to each point in space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Representing forces, flow, gradients"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Divergence & Curl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\nabla \\cdot F$ measures source/sink; $\\nabla \\times F$ measures rotation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fundamental theorems of vector calculus"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Partial Derivatives] --> B[Gradient & Directional Derivatives]\n    B --> C[Optimization in R^n]\n    C --> D[Multiple Integrals]\n    D --> E[Change of Variables]\n    E --> F[Vector Fields]\n    F --> G[Line & Surface Integrals]\n    G --> H[Fundamental Theorems]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-functions-of-several-variables",
      children: "3.1 Functions of Several Variables"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A function $f: \\mathbb{R}^n \\to \\mathbb{R}$ assigns a real number to each point $(x_1, x_2, \\ldots, x_n)$. For $n = 2$, we write $z = f(x, y)$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Domain:"
      }), " The set of input values where $f$ is defined. For $f(x,y) = \\ln(x + y)$, the domain is $x + y > 0$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Level Curves (Contours):"
      }), " Curves in $\\mathbb{R}^2$ where $f(x,y) = c$ (constant). These are the 2D analogue of topographic map elevations."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Level Surfaces:"
      }), " For $f(x,y,z)$, surfaces where $f(x,y,z) = c$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Limits:"
      }), " $\\lim_{(x,y) \\to (a,b)} f(x,y) = L$ means $f(x,y)$ approaches $L$ as $(x,y)$ approaches $(a,b)$ along any path."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Continuity:"
      }), " $f$ is continuous at $(a,b)$ if $\\lim_{(x,y) \\to (a,b)} f(x,y) = f(a,b)$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-partial-derivatives",
      children: "3.2 Partial Derivatives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " The partial derivative of $f$ with respect to $x$ at $(a,b)$ is:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\frac{\\partial f}{\\partial x}(a,b) = \\lim_{h \\to 0} \\frac{f(a+h, b) - f(a,b)}{h}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Similarly for $\\frac{\\partial f}{\\partial y}$ ? differentiate with respect to $y$, treating $x$ as constant."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Geometric Interpretation:"
      }), " $\\frac{\\partial f}{\\partial x}(a,b)$ is the slope of the tangent line to the curve obtained by intersecting $z = f(x,y)$ with the plane $y = b$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Higher-Order Partial Derivatives:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\frac{\\partial^2 f}{\\partial x^2} = \\frac{\\partial}{\\partial x}\\left(\\frac{\\partial f}{\\partial x}\\right), \\quad \\frac{\\partial^2 f}{\\partial x \\partial y} = \\frac{\\partial}{\\partial x}\\left(\\frac{\\partial f}{\\partial y}\\right)$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Clairaut's Theorem (Equality of Mixed Partials):"
      }), " If $f_{xy}$ and $f_{yx}$ are continuous at a point, then:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\frac{\\partial^2 f}{\\partial x \\partial y} = \\frac{\\partial^2 f}{\\partial y \\partial x}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-gradient-and-directional-derivatives",
      children: "3.3 Gradient and Directional Derivatives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Gradient:"
      }), " The vector of all partial derivatives:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\nabla f = \\left\\langle \\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y}, \\frac{\\partial f}{\\partial z} \\right\\rangle$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties of the Gradient:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\nabla f$ points in the direction of steepest increase of $f$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$|\\nabla f|$ is the rate of increase in that direction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\nabla f$ is perpendicular to level curves/surfaces ($\\nabla f \\cdot T = 0$ along a level curve)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$-\\nabla f$ points in the direction of steepest decrease (used in gradient descent)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Directional Derivative:"
      }), " The rate of change of $f$ in the direction of a unit vector $\\mathbf{u}$:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$D_{\\mathbf{u}} f(\\mathbf{x}) = \\nabla f(\\mathbf{x}) \\cdot \\mathbf{u}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is maximized when $\\mathbf{u}$ is parallel to $\\nabla f$, giving $D_{\\mathbf{u}} f = |\\nabla f|$."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-chain-rule-for-multivariable-functions",
      children: "3.4 Chain Rule for Multivariable Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Case 1: If $z = f(x,y)$ with $x = g(t), y = h(t)$, then:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\frac{dz}{dt} = \\frac{\\partial f}{\\partial x} \\frac{dx}{dt} + \\frac{\\partial f}{\\partial y} \\frac{dy}{dt}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Case 2: If $z = f(x,y)$ with $x = g(s,t), y = h(s,t)$, then:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\frac{\\partial z}{\\partial s} = \\frac{\\partial f}{\\partial x} \\frac{\\partial x}{\\partial s} + \\frac{\\partial f}{\\partial y} \\frac{\\partial y}{\\partial s}$$\n$$\\frac{\\partial z}{\\partial t} = \\frac{\\partial f}{\\partial x} \\frac{\\partial x}{\\partial t} + \\frac{\\partial f}{\\partial y} \\frac{\\partial y}{\\partial t}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "35-tangent-planes-and-linear-approximation",
      children: "3.5 Tangent Planes and Linear Approximation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For $z = f(x,y)$, the tangent plane at $(a,b)$ is:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$z - f(a,b) = f_x(a,b)(x - a) + f_y(a,b)(y - b)$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Linear Approximation:"
      }), " $f(x,y) \\approx f(a,b) + f_x(a,b)(x - a) + f_y(a,b)(y - b)$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Total Differential:"
      }), " $dz = f_x,dx + f_y,dy$ approximates the change in $f$ for small changes $dx$ and $dy$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "36-multivariable-optimization",
      children: "3.6 Multivariable Optimization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical Points:"
      }), " $(a,b)$ is a critical point if $\\nabla f(a,b) = 0$ (or does not exist)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Second Derivative Test (for $f: \\mathbb{R}^2 \\to \\mathbb{R}$):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Define the discriminant $D = f_{xx} f_{yy} - (f_{xy})^2$:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If $D > 0$ and $f_{xx} > 0$: local minimum"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If $D > 0$ and $f_{xx} < 0$: local maximum"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If $D < 0$: saddle point"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If $D = 0$: test is inconclusive"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hessian Matrix:"
      }), " $H = \\begin{pmatrix} f_{xx} & f_{xy} \\ f_{yx} & f_{yy} \\end{pmatrix}$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Positive definite $H$ at critical point = local minimum"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Negative definite $H$ = local maximum"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Indefinite $H$ = saddle point"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lagrange Multipliers (Constrained Optimization):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To optimize $f(x,y)$ subject to $g(x,y) = 0$, solve:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\nabla f = \\lambda \\nabla g \\quad \\text{and} \\quad g(x,y) = 0$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where $\\lambda$ is the Lagrange multiplier. This gives a system of 3 equations in 3 unknowns."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Meaning of $\\lambda$:"
      }), " $\\frac{df}{dg} = \\lambda$ ? the Lagrange multiplier represents the rate of change of the optimal value as the constraint changes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "37-double-integrals",
      children: "3.7 Double Integrals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " $\\iint_R f(x,y),dA = \\lim_{\\Delta x, \\Delta y \\to 0} \\sum_{i} \\sum_{j} f(x_i^", (0,jsx_runtime.jsx)(_components.em, {
        children: ", y_j^"
      }), ") \\Delta x \\Delta y$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Iterated Integrals (Fubini's Theorem):"
      }), " If $f$ is continuous on $R = [a,b] \\times [c,d]$:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\iint_R f(x,y),dA = \\int_a^b \\int_c^d f(x,y),dy,dx = \\int_c^d \\int_a^b f(x,y),dx,dy$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Over General Regions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Type I: $R = {(x,y): a \\leq x \\leq b, g_1(x) \\leq y \\leq g_2(x)}$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Type II: $R = {(x,y): c \\leq y \\leq d, h_1(y) \\leq x \\leq h_2(y)}$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "38-triple-integrals",
      children: "3.8 Triple Integrals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " $\\iiint_E f(x,y,z),dV$ extends double integrals to 3D."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Volume:"
      }), " $V = \\iiint_E 1,dV$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Applications:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mass: $m = \\iiint_E \\rho(x,y,z),dV$ where $\\rho$ is density"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Center of mass: $\\bar{x} = \\frac{1}{m} \\iiint_E x\\rho,dV$, etc."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Moment of inertia: $I = \\iiint_E r^2 \\rho,dV$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "39-change-of-variables-coordinate-transformations",
      children: "3.9 Change of Variables (Coordinate Transformations)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Polar Coordinates ($\\mathbb{R}^2$):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$x = r\\cos\\theta, \\quad y = r\\sin\\theta$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$dA = dx,dy = r,dr,d\\theta$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cylindrical Coordinates ($\\mathbb{R}^3$):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$x = r\\cos\\theta, \\quad y = r\\sin\\theta, \\quad z = z$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$dV = r,dr,d\\theta,dz$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Spherical Coordinates ($\\mathbb{R}^3$):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$x = \\rho\\sin\\phi\\cos\\theta, \\quad y = \\rho\\sin\\phi\\sin\\theta, \\quad z = \\rho\\cos\\phi$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$dV = \\rho^2 \\sin\\phi,d\\rho,d\\phi,d\\theta$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where $\\rho \\geq 0$, $0 \\leq \\phi \\leq \\pi$, $0 \\leq \\theta \\leq 2\\pi$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Jacobian:"
      }), " For transformation $(u,v) \\to (x,y)$:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$J = \\begin{vmatrix} \\frac{\\partial x}{\\partial u} & \\frac{\\partial x}{\\partial v} \\ \\frac{\\partial y}{\\partial u} & \\frac{\\partial y}{\\partial v} \\end{vmatrix}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$dx,dy = |J|,du,dv$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Jacobian determinant gives the factor by which area/volume scales under the transformation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "310-vector-fields",
      children: "3.10 Vector Fields"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "vector field"
      }), " assigns a vector to each point in space. In $\\mathbb{R}^3$:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\mathbf{F}(x,y,z) = P(x,y,z),\\mathbf{i} + Q(x,y,z),\\mathbf{j} + R(x,y,z),\\mathbf{k}$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Gradient Field:"
      }), " $\\mathbf{F} = \\nabla f$ (conservative field). Then $\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = 0$ around any closed curve."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Divergence:"
      }), " A scalar measuring outflow per unit volume:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\nabla \\cdot \\mathbf{F} = \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z}$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\nabla \\cdot \\mathbf{F} > 0$: source (fluid expanding)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\nabla \\cdot \\mathbf{F} < 0$: sink (fluid contracting)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\nabla \\cdot \\mathbf{F} = 0$: incompressible"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Curl:"
      }), " A vector measuring rotation at a point:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\nabla \\times \\mathbf{F} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\ \\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\ P & Q & R \\end{vmatrix}$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\nabla \\times \\mathbf{F} = 0$ for conservative fields ($\\mathbf{F} = \\nabla f$)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Important Identities:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\nabla \\times (\\nabla f) = 0$ (curl of gradient is zero)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\nabla \\cdot (\\nabla \\times \\mathbf{F}) = 0$ (divergence of curl is zero)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\nabla \\cdot (f\\mathbf{F}) = \\nabla f \\cdot \\mathbf{F} + f(\\nabla \\cdot \\mathbf{F})$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\nabla \\times (f\\mathbf{F}) = \\nabla f \\times \\mathbf{F} + f(\\nabla \\times \\mathbf{F})$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "311-line-integrals",
      children: "3.11 Line Integrals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " $\\int_C \\mathbf{F} \\cdot d\\mathbf{r} = \\int_a^b \\mathbf{F}(\\mathbf{r}(t)) \\cdot \\mathbf{r}'(t),dt$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where $\\mathbf{r}(t)$ parametrizes curve $C$ from $t = a$ to $t = b$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scalar Line Integral:"
      }), " $\\int_C f,ds = \\int_a^b f(\\mathbf{r}(t)) |\\mathbf{r}'(t)|,dt$ ? integrates scalar function along curve."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fundamental Theorem for Line Integrals:"
      }), " If $\\mathbf{F} = \\nabla f$:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\int_C \\mathbf{F} \\cdot d\\mathbf{r} = f(\\mathbf{r}(b)) - f(\\mathbf{r}(a))$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The integral depends only on endpoints, not the path."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Conservative Fields:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\mathbf{F} = \\nabla f$ for some potential $f$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\nabla \\times \\mathbf{F} = 0$ (in simply connected domain)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = 0$ for any closed curve $C$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Path independence: $\\int_{C_1} \\mathbf{F} \\cdot d\\mathbf{r} = \\int_{C_2} \\mathbf{F} \\cdot d\\mathbf{r}$ for curves with same endpoints"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "312-surface-integrals",
      children: "3.12 Surface Integrals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Parametrized Surface:"
      }), " $\\mathbf{r}(u,v) = x(u,v)\\mathbf{i} + y(u,v)\\mathbf{j} + z(u,v)\\mathbf{k}$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Surface Area Element:"
      }), " $dS = |\\mathbf{r}_u \\times \\mathbf{r}_v|,du,dv$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scalar Surface Integral:"
      }), " $\\iint_S f,dS = \\iint_D f(\\mathbf{r}(u,v)) |\\mathbf{r}_u \\times \\mathbf{r}_v|,du,dv$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Vector Surface Integral (Flux):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iint_S \\mathbf{F} \\cdot \\mathbf{n},dS$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where $\\mathbf{n}$ is the unit normal vector."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "313-fundamental-theorems-of-vector-calculus",
      children: "3.13 Fundamental Theorems of Vector Calculus"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Green's Theorem (2D):"
      }), " Relates line integral around a closed curve to double integral over enclosed region:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_D \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right),dA$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Divergence Theorem (3D) / Gauss's Theorem:"
      }), " Relates flux through closed surface to triple integral of divergence:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iiint_E (\\nabla \\cdot \\mathbf{F}),dV$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Stokes' Theorem (3D):"
      }), " Relates line integral around closed curve to surface integral of curl:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S (\\nabla \\times \\mathbf{F}) \\cdot d\\mathbf{S}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Unified View ? Generalized Stokes' Theorem:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\int_{\\partial M} \\omega = \\int_M d\\omega$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The integral of a form $\\omega$ over the boundary of a manifold $M$ equals the integral of the exterior derivative $d\\omega$ over $M$ itself."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-partial-derivatives",
      children: "Example 1: Partial Derivatives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For $f(x,y) = x^2 \\cos y + y e^x$, find $\\frac{\\partial f}{\\partial x}$ and $\\frac{\\partial f}{\\partial y}$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\frac{\\partial f}{\\partial x} = 2x \\cos y + y e^x$$\n$$\\frac{\\partial f}{\\partial y} = -x^2 \\sin y + e^x$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-gradient-and-directional-derivative",
      children: "Example 2: Gradient and Directional Derivative"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For $f(x,y) = x^2 + 2y^2$, find the gradient at $(1,1)$ and the directional derivative in direction $\\mathbf{v} = \\langle 3, 4 \\rangle$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$\\nabla f = \\langle 2x, 4y \\rangle$\n$\\nabla f(1,1) = \\langle 2, 4 \\rangle$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Unit vector in direction of $\\mathbf{v}$: $\\mathbf{u} = \\frac{\\langle 3, 4 \\rangle}{5} = \\langle 0.6, 0.8 \\rangle$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Directional derivative: $D_{\\mathbf{u}} f(1,1) = \\langle 2, 4 \\rangle \\cdot \\langle 0.6, 0.8 \\rangle = 1.2 + 3.2 = 4.4$"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-double-integral",
      children: "Example 3: Double Integral"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Evaluate $\\iint_R (x + 2y),dA$ where $R$ is bounded by $y = x^2$ and $y = 2x$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Find intersection points: $x^2 = 2x \\implies x^2 - 2x = 0 \\implies x(x-2) = 0 \\implies x = 0, 2$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Region: Type I with $0 \\leq x \\leq 2$, $x^2 \\leq y \\leq 2x$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\iint_R (x + 2y),dA = \\int_0^2 \\int_{x^2}^{2x} (x + 2y),dy,dx$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Inner integral:\n$$\\int_{x^2}^{2x} (x + 2y),dy = \\left[xy + y^2\\right]_{y=x^2}^{y=2x} = (2x^2 + 4x^2) - (x^3 + x^4) = 6x^2 - x^3 - x^4$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Outer integral:\n$$\\int_0^2 (6x^2 - x^3 - x^4),dx = \\left[2x^3 - \\frac{x^4}{4} - \\frac{x^5}{5}\\right]_0^2 = (16 - 4 - 6.4) = 5.6$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-change-of-variables-polar",
      children: "Example 4: Change of Variables (Polar)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Evaluate $\\iint_R e^{-(x^2 + y^2)},dA$ where $R$ is the disk $x^2 + y^2 \\leq 4$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Convert to polar: $x = r\\cos\\theta$, $y = r\\sin\\theta$, $dA = r,dr,d\\theta$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Region: $0 \\leq r \\leq 2$, $0 \\leq \\theta \\leq 2\\pi$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\iint_R e^{-(x^2 + y^2)},dA = \\int_0^{2\\pi} \\int_0^2 e^{-r^2} r,dr,d\\theta$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Inner: $\\int e^{-r^2} r,dr = -\\frac{1}{2}e^{-r^2}$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Inner definite: $\\left[-\\frac{1}{2}e^{-r^2}\\right]_0^2 = -\\frac{1}{2}(e^{-4} - 1) = \\frac{1}{2}(1 - e^{-4})$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Outer: $\\int_0^{2\\pi} \\frac{1}{2}(1 - e^{-4}),d\\theta = \\pi(1 - e^{-4})$"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-5-lagrange-multipliers",
      children: "Example 5: Lagrange Multipliers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Find the point on the plane $x + 2y + z = 4$ closest to the origin."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Minimize $f(x,y,z) = x^2 + y^2 + z^2$ (distance squared) subject to $g(x,y,z) = x + 2y + z - 4 = 0$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Set $\\nabla f = \\lambda \\nabla g$:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\langle 2x, 2y, 2z \\rangle = \\lambda \\langle 1, 2, 1 \\rangle$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "So $2x = \\lambda$, $2y = 2\\lambda$, $2z = \\lambda$, giving $x = z = \\frac{\\lambda}{2}$, $y = \\lambda$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Substitute into constraint: $\\frac{\\lambda}{2} + 2\\lambda + \\frac{\\lambda}{2} = 4 \\implies 3\\lambda = 4 \\implies \\lambda = \\frac{4}{3}$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Point: $(\\frac{2}{3}, \\frac{4}{3}, \\frac{2}{3})$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Minimum distance: $\\sqrt{(\\frac{2}{3})^2 + (\\frac{4}{3})^2 + (\\frac{2}{3})^2} = \\sqrt{\\frac{24}{9}} = \\frac{2\\sqrt{6}}{3}$"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-6-divergence-theorem",
      children: "Example 6: Divergence Theorem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Verify the divergence theorem for $\\mathbf{F} = \\langle x, y, z \\rangle$ over the unit sphere."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " $\\nabla \\cdot \\mathbf{F} = 1 + 1 + 1 = 3$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Volume of unit sphere: $V = \\frac{4\\pi}{3}$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\iiint_E (\\nabla \\cdot \\mathbf{F}),dV = 3 \\cdot \\frac{4\\pi}{3} = 4\\pi$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Now compute the flux directly. On the sphere, $\\mathbf{n} = \\langle x, y, z \\rangle$ (outward normal, unit length)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iint_S \\langle x,y,z \\rangle \\cdot \\langle x,y,z \\rangle,dS = \\iint_S (x^2 + y^2 + z^2),dS = \\iint_S 1,dS = 4\\pi$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Both equal $4\\pi$. Verified ?"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-7-application--gradient-descent-in-2d",
      children: "Example 7: Application ? Gradient Descent in 2D"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For $f(x,y) = x^2 + 2y^2$, starting at $(1,1)$, compute one step of gradient descent with $\\eta = 0.1$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$\\nabla f = \\langle 2x, 4y \\rangle$\n$\\nabla f(1,1) = \\langle 2, 4 \\rangle$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Update:\n$$(x_{new}, y_{new}) = (1,1) - 0.1 \\cdot \\langle 2, 4 \\rangle = (0.8, 0.6)$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$f(1,1) = 1 + 2 = 3$, $f(0.8, 0.6) = 0.64 + 0.72 = 1.36$. The function value decreased."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-8-triple-integral-in-spherical-coordinates",
      children: "Example 8: Triple Integral in Spherical Coordinates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Find the volume of the region bounded by the cone $z = \\sqrt{x^2 + y^2}$ and the sphere $x^2 + y^2 + z^2 = 1$ (an ice cream cone)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " In spherical coordinates, the cone $\\phi = \\pi/4$ and the sphere is $\\rho = 1$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$V = \\iiint_E 1,dV = \\int_0^{2\\pi} \\int_0^{\\pi/4} \\int_0^1 \\rho^2 \\sin\\phi , d\\rho , d\\phi , d\\theta$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$= \\int_0^{2\\pi} d\\theta \\int_0^{\\pi/4} \\sin\\phi , d\\phi \\int_0^1 \\rho^2 , d\\rho = 2\\pi \\cdot [-\\cos\\phi]_0^{\\pi/4} \\cdot \\left[\\frac{\\rho^3}{3}\\right]_0^1$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$= 2\\pi \\cdot \\left(-\\frac{\\sqrt{2}}{2} + 1\\right) \\cdot \\frac{1}{3} = \\frac{2\\pi}{3}\\left(1 - \\frac{\\sqrt{2}}{2}\\right)$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-9-jacobian-for-change-of-variables",
      children: "Example 9: Jacobian for Change of Variables"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Evaluate $\\iint_R (x - y)^2 \\sin^2(x + y),dA$ where $R$ is the square with vertices $(0,0), (\\pi/2, -\\pi/2), (\\pi, 0), (\\pi/2, \\pi/2)$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " The region suggests the transformation: $u = x - y$, $v = x + y$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Solving for $x$ and $y$: $x = (u+v)/2$, $y = (v-u)/2$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Jacobian: $$J = \\begin{vmatrix} \\partial x/\\partial u & \\partial x/\\partial v \\ \\partial y/\\partial u & \\partial y/\\partial v \\end{vmatrix} = \\begin{vmatrix} 1/2 & 1/2 \\ -1/2 & 1/2 \\end{vmatrix} = \\frac{1}{2}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The region $R$ transforms to $0 \\leq u \\leq \\pi$, $0 \\leq v \\leq \\pi$ in the $uv$-plane."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\iint_R (x-y)^2 \\sin^2(x+y),dA = \\int_0^\\pi \\int_0^\\pi u^2 \\sin^2 v \\cdot \\frac{1}{2} , du , dv$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$= \\frac{1}{2} \\int_0^\\pi u^2 , du \\int_0^\\pi \\sin^2 v , dv = \\frac{1}{2} \\cdot \\left[\\frac{u^3}{3}\\right]_0^\\pi \\cdot \\left[\\frac{v}{2} - \\frac{\\sin 2v}{4}\\right]_0^\\pi = \\frac{1}{2} \\cdot \\frac{\\pi^3}{3} \\cdot \\frac{\\pi}{2} = \\frac{\\pi^4}{12}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-examples",
      children: "TypeScript Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numerical-gradient-and-hessian-computation",
      children: "Numerical Gradient and Hessian Computation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type Vec2 = [number, number];\ntype ScalarFn2 = (x: Vec2) => number;\n\nfunction numericalGradient(f: ScalarFn2, x: Vec2, h: number = 1e-5): Vec2 {\n  return [\n    (f([x[0] + h, x[1]]) - f([x[0] - h, x[1]])) / (2 * h),\n    (f([x[0], x[1] + h]) - f([x[0], x[1] - h])) / (2 * h),\n  ];\n}\n\nfunction numericalHessian(f: ScalarFn2, x: Vec2, h: number = 1e-5): number[][] {\n  const fxx = (f([x[0] + h, x[1]]) - 2 * f(x) + f([x[0] - h, x[1]])) / (h * h);\n  const fyy = (f([x[0], x[1] + h]) - 2 * f(x) + f([x[0], x[1] - h])) / (h * h);\n  const fxy = (f([x[0] + h, x[1] + h]) - f([x[0] + h, x[1] - h])\n            - f([x[0] - h, x[1] + h]) + f([x[0] - h, x[1] - h])) / (4 * h * h);\n  return [[fxx, fxy], [fxy, fyy]];\n}\n\n// Test: f(x,y) = x^2 + 3xy + y^2\nconst f = (p: Vec2): number => p[0]**2 + 3 * p[0] * p[1] + p[1]**2;\nconst grad = numericalGradient(f, [1, 2]);\nconsole.log(`Gradient at (1,2): (${grad[0].toFixed(4)}, ${grad[1].toFixed(4)})`);\n// Analytical: (2x+3y, 3x+2y) = (8, 7)\n\nconst hess = numericalHessian(f, [1, 2]);\nconsole.log(`Hessian at (1,2): [[${hess[0][0]}, ${hess[0][1]}], [${hess[1][0]}, ${hess[1][1]}]]`);\n// Analytical: [[2, 3], [3, 2]]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numerical-double-integration",
      children: "Numerical Double Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function doubleIntegral(\n  f: (x: number, y: number) => number,\n  xMin: number, xMax: number,\n  yMin: (x: number) => number,\n  yMax: (x: number) => number,\n  nx: number = 100,\n  ny: number = 100\n): number {\n  const dx = (xMax - xMin) / nx;\n  let total = 0;\n  for (let i = 0; i < nx; i++) {\n    const x = xMin + (i + 0.5) * dx;  // midpoint\n    const yLo = yMin(x), yHi = yMax(x);\n    const dy = (yHi - yLo) / ny;\n    for (let j = 0; j < ny; j++) {\n      const y = yLo + (j + 0.5) * dy;\n      total += f(x, y) * dx * dy;\n    }\n  }\n  return total;\n}\n\n// Integrate f(x,y) = x + 2y over region: 0 = x = 2, x? = y = 2x\nconst result = doubleIntegral(\n  (x, y) => x + 2 * y,\n  0, 2,\n  (x) => x * x,\n  (x) => 2 * x,\n  200, 200\n);\nconsole.log(`Double integral ? ${result.toFixed(4)} (expected 5.6)`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-world-application-backpropagation-as-the-chain-rule",
      children: "Real-World Application: Backpropagation as the Chain Rule"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Backpropagation, the algorithm that trains neural networks, is fundamentally the multivariable chain rule applied to millions of nested function compositions."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Forward Pass:"
      }), " A neural network computes $L = f_L(f_{L-1}(\\cdots f_1(x; w_1)\\cdots; w_{L-1}); w_L)$ where each layer $f_l$ applies a linear transformation followed by a nonlinear activation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Backward Pass (Backpropagation):"
      }), " For each weight $w_{ij}^{(l)}$, the gradient is computed by:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\frac{\\partial L}{\\partial w_{ij}^{(l)}} = \\frac{\\partial L}{\\partial z_i^{(l)}} \\cdot \\frac{\\partial z_i^{(l)}}{\\partial w_{ij}^{(l)}}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where $z^{(l)}$ is the pre-activation at layer $l$. The \"error signal\" $\\delta_i^{(l)} = \\partial L / \\partial z_i^{(l)}$ is propagated backward using:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\delta_i^{(l)} = \\sum_k \\delta_k^{(l+1)} \\cdot w_{ki}^{(l+1)} \\cdot \\sigma'(z_i^{(l)})$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is the chain rule: the gradient at layer $l$ depends on gradients at layer $l+1$, chained through the weight matrix and activation derivative."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Connection to Jacobians:"
      }), " The entire backpropagation algorithm can be understood as efficient computation of the Jacobian-vector product $\\nabla_w L = (J_{f_L} \\cdot J_{f_{L-1}} \\cdots J_{f_1})^T \\cdot 1$, where each $J_{f_l}$ is the Jacobian of layer $l$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-gradient-descent-optimizer",
      children: "TypeScript Implementation: Gradient Descent Optimizer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type Vec = number[];\n\nfunction gradientDescent(\n  f: (x: Vec) => number, grad: (x: Vec) => Vec,\n  initial: Vec, lr: number = 0.01, maxIter: number = 1000, tol: number = 1e-6\n): { x: Vec; fx: number; iterations: number } {\n  let x = [...initial];\n  for (let iter = 0; iter < maxIter; iter++) {\n    const g = grad(x);\n    const xNext = x.map((xi, i) => xi - lr * g[i]);\n    const step = Math.sqrt(xNext.reduce((s, xi, i) => s + (xi - x[i]) ** 2, 0));\n    x = xNext;\n    if (step < tol) return { x, fx: f(x), iterations: iter };\n  }\n  return { x, fx: f(x), iterations: maxIter };\n}\n\n// Minimize f(x,y) = x? + 2y?: gradient = [2x, 4y], min at (0,0)\nconst quad = (x: Vec) => x[0] ** 2 + 2 * x[1] ** 2;\nconst gradQuad = (x: Vec): Vec => [2 * x[0], 4 * x[1]];\nconst { x: minPt, fx: minVal, iterations: iters } = gradientDescent(quad, gradQuad, [5, 3], 0.1, 500);\nconsole.log(`GD: min at (${minPt[0].toFixed(4)}, ${minPt[1].toFixed(4)}), f=${minVal.toFixed(6)}, iters=${iters}`);\n\n// Minimize Rosenbrock f(x,y) = (1-x)? + 100(y-x?)?, known as banana function\nconst rosenbrock = (x: Vec) => (1 - x[0]) ** 2 + 100 * (x[1] - x[0] ** 2) ** 2;\nconst gradRosen = (x: Vec): Vec => [\n  -2 * (1 - x[0]) - 400 * x[0] * (x[1] - x[0] ** 2),\n  200 * (x[1] - x[0] ** 2)\n];\nconst rosenResult = gradientDescent(rosenbrock, gradRosen, [0, 0], 0.001, 10000);\nconsole.log(`Rosenbrock: min at (${rosenResult.x[0].toFixed(4)}, ${rosenResult.x[1].toFixed(4)}), f=${rosenResult.fx.toExponential(3)}`);\n\n### TypeScript: Double and Triple Integrals via Riemann Sums\n\n```typescript\nfunction doubleIntegral(\n  f: (x: number, y: number) => number,\n  xMin: number, xMax: number,\n  yMin: (x: number) => number, yMax: (x: number) => number,\n  nx: number = 100, ny: number = 100\n): number {\n  const dx = (xMax - xMin) / nx;\n  let total = 0;\n  for (let i = 0; i &lt; nx; i++) {\n    const x = xMin + (i + 0.5) * dx;\n    const yLow = yMin(x), yHigh = yMax(x);\n    const dy = (yHigh - yLow) / ny;\n    for (let j = 0; j &lt; ny; j++) total += f(x, yLow + (j + 0.5) * dy) * dx * dy;\n  }\n  return total;\n}\n\n// ?0??0? (x? + y?) dy dx = 2/3 ? 0.6667\nconst f2d = (x: number, y: number) => x * x + y * y;\nconst r1 = doubleIntegral(f2d, 0, 1, () => 0, () => 1, 200, 200);\nconsole.log(`?(x?+y?) over [0,1]?: ${r1.toFixed(4)} (expected: 0.6667)`);\n\n// ?_D 1 dA over triangle: 0=x=1, 0=y=x ? area = 1/2\nconst triArea = doubleIntegral(() => 1, 0, 1, x => 0, x => x, 200, 200);\nconsole.log(`Triangle area: ${triArea.toFixed(4)} (expected: 0.5)`);\n\nfunction tripleIntegral(\n  f: (x: number, y: number, z: number) => number,\n  xMin: number, xMax: number,\n  yMin: (x: number) => number, yMax: (x: number) => number,\n  zMin: (x: number, y: number) => number, zMax: (x: number, y: number) => number,\n  nx = 40, ny = 40, nz = 40\n): number {\n  const dx = (xMax - xMin) / nx;\n  let total = 0;\n  for (let i = 0; i &lt; nx; i++) {\n    const x = xMin + (i + 0.5) * dx;\n    const yl = yMin(x), yh = yMax(x); const dy = (yh - yl) / ny;\n    for (let j = 0; j &lt; ny; j++) {\n      const y = yl + (j + 0.5) * dy;\n      const zl = zMin(x, y), zh = zMax(x, y); const dz = (zh - zl) / nz;\n      for (let k = 0; k &lt; nz; k++) total += f(x, y, zl + (k + 0.5) * dz) * dx * dy * dz;\n    }\n  }\n  return total;\n}\n\n// Unit sphere volume: ? 1 dV = 4p/3 ? 4.18879\nconst sphereVol = tripleIntegral(\n  () => 1, -1, 1,\n  x => -Math.sqrt(Math.max(0, 1 - x * x)), x => Math.sqrt(Math.max(0, 1 - x * x)),\n  (x, y) => -Math.sqrt(Math.max(0, 1 - x * x - y * y)), (x, y) => Math.sqrt(Math.max(0, 1 - x * x - y * y)),\n  30, 30, 30\n);\nconsole.log(`Sphere volume: ${sphereVol.toFixed(4)} (expected: ${(4 * Math.PI / 3).toFixed(4)})`);\n\n### TypeScript: Divergence and Curl of a Vector Field\n\n```typescript\nfunction divergence(F: (x: number, y: number, z: number) => [number, number, number], h: number = 1e-6) {\n  return (x: number, y: number, z: number): number => {\n    const [Fx, Fy, Fz] = F(x, y, z);\n    const [Fxx] = F(x + h, y, z); const [Fxy] = F(x - h, y, z);\n    const [, Fyy] = F(x, y + h, z); const [, Fys] = F(x, y - h, z);\n    const [, , Fzz] = F(x, y, z + h); const [, , Fzs] = F(x, y, z - h);\n    return (Fxx - Fxy + Fyy - Fys + Fzz - Fzs) / (2 * h);\n  };\n}\n\nfunction curl(F: (x: number, y: number, z: number) => [number, number, number], h: number = 1e-6) {\n  return (x: number, y: number, z: number): [number, number, number] => {\n    const [, Fy, Fz] = F(x, y, z);\n    const [, Fyp] = F(x, y + h, z); const [, Fym] = F(x, y - h, z);\n    const [, , Fzp] = F(x, y, z + h); const [, , Fzm] = F(x, y, z - h);\n    const [Fx, , Fzz] = F(x, y, z); const [Fxp] = F(x + h, y, z)[0]; const [Fxm] = F(x - h, y, z)[0];\n    const [Fxx] = F(x, y, z);\n    const curlX = (Fzp - Fzm - (Fyp - Fym)) / (2 * h);\n    const curlY = (Fxp - Fxm - (Fzz - Fzm)) / (2 * h);\n    const curlZ = (Fyp - Fym - (Fxp - Fxm)) / (2 * h);\n    return [curlX, curlY, curlZ];\n  };\n}\n\n// F = (-y, x, 0): divergence = 0, curl = (0, 0, 2)\nconst F = (x: number, y: number, z: number): [number, number, number] => [-y, x, 0];\nconsole.log(`div F at (1,1,0): ${divergence(F)(1, 1, 0).toFixed(2)} (expected: 0)`);\nconst c = curl(F)(1, 1, 0);\nconsole.log(`curl F at (1,1,0): (${c.map(v => v.toFixed(2)).join(\", \")}) (expected: (0, 0, 2))`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// --- Double Integral via Riemann Sum ---\nfunction doubleIntegral(\n  f: (x: number, y: number) => number,\n  xRange: [number, number],\n  yRange: [number, number],\n  nx: number,\n  ny: number\n): number {\n  const dx = (xRange[1] - xRange[0]) / nx;\n  const dy = (yRange[1] - yRange[0]) / ny;\n  let sum = 0;\n  for (let i = 0; i < nx; i++)\n    for (let j = 0; j < ny; j++)\n      sum += f(xRange[0] + (i + 0.5) * dx, yRange[0] + (j + 0.5) * dy) * dx * dy;\n  return sum;\n}\nconst vol = doubleIntegral((x, y) => x * x + y * y, [0, 1], [0, 1], 100, 100);\nconsole.log('?(x?+y?) dA over [0,1]?:', vol.toFixed(4), '(expected: 2/3 ? 0.6667)');\n\n// --- Jacobian Determinant ---\nfunction jacobianDet(\n  transform: (u: number, v: number) => [number, number],\n  u: number,\n  v: number\n): number {\n  const h = 1e-6;\n  const [x0, y0] = transform(u, v);\n  const [xu, yu] = transform(u + h, v);\n  const [xv, yv] = transform(u, v + h);\n  return ((xu - x0) / h) * ((yv - y0) / h) - ((xv - x0) / h) * ((yu - y0) / h);\n}\n// Polar: x = r cos ?, y = r sin ? ? Jacobian = r\nconst polarJ = jacobianDet((r, ?) => [r * Math.cos(?), r * Math.sin(?)], 2, Math.PI / 4);\nconsole.log('\\nPolar Jacobian at (2, p/4):', polarJ.toFixed(4), '(expected: 2)');\n\n// --- Lagrange Multipliers (2D numeric) ---\nfunction lagrangeMultiplier(\n  f: (x: number, y: number) => number,\n  g: (x: number, y: number) => number,\n  gTarget: number,\n  guess: [number, number],\n  learningRate: number = 0.01,\n  iterations: number = 1000\n): { x: number; y: number; ?: number } {\n  let x = guess[0], y = guess[1], ? = 0;\n  const h = 1e-6;\n  for (let i = 0; i < iterations; i++) {\n    const fx = (f(x + h, y) - f(x - h, y)) / (2 * h);\n    const fy = (f(x, y + h) - f(x, y - h)) / (2 * h);\n    const gx = (g(x + h, y) - g(x - h, y)) / (2 * h);\n    const gy = (g(x, y + h) - g(x, y - h)) / (2 * h);\n    x -= learningRate * (fx - ? * gx);\n    y -= learningRate * (fy - ? * gy);\n    ? += learningRate * (g(x, y) - gTarget);\n  }\n  return { x: +x.toFixed(4), y: +y.toFixed(4), ?: +?.toFixed(4) };\n}\n// Maximize f(x,y)=xy subject to x+y=1\nconst lm = lagrangeMultiplier((x, y) => x * y, (x, y) => x + y, 1, [0.3, 0.7]);\nconsole.log('\\nLagrange: max xy s.t. x+y=1:', `x=${lm.x}, y=${lm.y}, f=${(+lm.x * +lm.y).toFixed(4)}`);\n\n// --- Triple Integral in Spherical Coordinates ---\nfunction sphericalVolume(?Fn: (?: number, f: number) => number): number {\n  const n = 50;\n  let vol = 0;\n  const d? = 2 * Math.PI / n, df = Math.PI / n;\n  for (let i = 0; i < n; i++)\n    for (let j = 0; j < n; j++) {\n      const ? = (i + 0.5) * d?, f = (j + 0.5) * df;\n      const ? = ?Fn(?, f);\n      vol += (? ** 3 / 3) * Math.sin(f) * d? * df;\n    }\n  return vol;\n}\nconst sphereVol = sphericalVolume((?, f) => 1); // unit sphere\nconsole.log('\\nUnit sphere volume (spherical):', sphereVol.toFixed(4), '(expected: 4p/3 ? 4.1888)');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// calculus ii\n// linear-algebra-calculus implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'calculus ii', data: { topic: 'linear-algebra-calculus' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// calculus ii - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'engineering-math demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'engineering-mathematics', chapter: 'calculus ii' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('engineering-math'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Partial derivatives compute rates of change with respect to one variable at a time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The gradient points uphill; $-\\nabla f$ guides gradient descent optimization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Double/triple integrals extend accumulation to 2D/3D regions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Coordinate transformations (polar, cylindrical, spherical) simplify many integrals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The Jacobian determinant gives the area/volume scaling factor of a transformation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lagrange multipliers handle optimization with equality constraints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vector fields, divergence, and curl describe flow and rotation in space"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Green's, Stokes', and Divergence theorems connect integrals of different dimensions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stokes' theorem unifies all: boundary integral = integral of derivative over interior"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the geometric meaning of the gradient vector"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does the second derivative test use $f_{xx} f_{yy} - (f_{xy})^2$?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When would you use spherical coordinates instead of cylindrical?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What does a zero divergence tell you about a vector field?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why conservative fields satisfy $\\nabla \\times \\mathbf{F} = 0$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Least Squares:"
          }), " Show that for data $(x_i, y_i)$, minimizing $\\sum (y_i - mx - b)^2$ gives a system of two linear equations in $m$ and $b$."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Volume of Sphere:"
          }), " Use triple integration in spherical coordinates to derive $V = \\frac{4}{3}\\pi R^3$."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ML Loss Surface:"
          }), " For $L(w_1,w_2) = (w_1^2 - 1)^2 + (w_2^2 - 2)^2$, find all critical points and classify them."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Flux through Surface:"
          }), " Compute the flux of $\\mathbf{F} = \\langle 0, 0, z \\rangle$ through the surface of the box $0 \\leq x \\leq 1$, $0 \\leq y \\leq 1$, $0 \\leq z \\leq 1$ using the divergence theorem."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Directional Derivative:"
          }), " For $f(x,y,z) = x^2 y + yz^3$, find the directional derivative at $(1,2,-1)$ in the direction toward $(3,4,-3)$."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Triple Integral:"
          }), " Compute $\\iiint_E z,dV$ where $E$ is the tetrahedron bounded by $x=0$, $y=0$, $z=0$, and $x+y+z=1$."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Lagrange Multipliers:"
          }), " Find the maximum volume of a rectangular box with surface area $S = 24$ (no top)."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Gaussian Integral:"
      }), " Evaluate $I = \\int_{-\\infty}^\\infty e^{-x^2},dx = \\sqrt{\\pi}$ by squaring $I^2$ and converting to polar coordinates. This is the normalization constant for the normal distribution."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-multivariable-calculus-operations",
      children: "TypeScript: Multivariable Calculus Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type Vec2 = [number, number];\ntype Vec3 = [number, number, number];\n\nclass MultivariableCalculus {\n  gradient(f: (v: Vec2) => number, x: number, y: number, h = 1e-6): Vec2 {\n    return [\n      (f([x + h, y]) - f([x - h, y])) / (2 * h),\n      (f([x, y + h]) - f([x, y - h])) / (2 * h),\n    ];\n  }\n\n  jacobian(f: (v: Vec2) => Vec2, x: number, y: number): Matrix {\n    const h = 1e-6;\n    const fxy = f([x, y]);\n    return [\n      [(f([x + h, y])[0] - f([x - h, y])[0]) / (2 * h), (f([x, y + h])[0] - f([x, y - h])[0]) / (2 * h)],\n      [(f([x + h, y])[1] - f([x - h, y])[1]) / (2 * h), (f([x, y + h])[1] - f([x, y - h])[1]) / (2 * h)],\n    ];\n  }\n\n  laplacian(f: (v: Vec2) => number, x: number, y: number): number {\n    const h = 1e-5;\n    return (f([x + h, y]) + f([x - h, y]) + f([x, y + h]) + f([x, y - h]) - 4 * f([x, y])) / (h * h);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notation-reference",
      children: "Notation Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "$\\partial f / \\partial x$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "partial derivative of $f$ wrt $x$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\nabla f$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "gradient of $f$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\nabla \\cdot \\mathbf{F}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "divergence of $\\mathbf{F}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\nabla \\times \\mathbf{F}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "curl of $\\mathbf{F}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$D_{\\mathbf{u}} f$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "directional derivative in direction $\\mathbf{u}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\iint_R f,dA$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "double integral over region $R$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\iiint_E f,dV$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "triple integral over region $E$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$d\\mathbf{S}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "oriented surface element"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\oint_C$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "line integral around closed curve"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\partial M$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boundary of manifold $M$"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mermaid-optimization-with-gradient-descent",
      children: "Mermaid: Optimization with Gradient Descent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Start ?0] --> B[Compute ?f(?)]\n    B --> C{??f(?)? < e?}\n    C -->|Yes| D[Converged]\n    C -->|No| E[? ? ? - a?f(?)]\n    E --> B\n    D --> F[Return ?*]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mermaid-double-integral-over-a-region",
      children: "Mermaid: Double Integral Over a Region"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Region R] --> B[Type I: x-simple]\n    A --> C[Type II: y-simple]\n    B --> D[??? ?_{g1(x)}^{g2(x)} f dy dx]\n    C --> E[??? ?_{h1(y)}^{h2(y)} f dx dy]\n    D --> F[Evaluate inner integral]\n    F --> G[Evaluate outer integral]\n    E --> H[Evaluate inner integral]\n    H --> I[Evaluate outer integral]\n"
      })
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