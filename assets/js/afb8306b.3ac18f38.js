"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[4961],{

/***/ 97065
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_engineering_mathematics_04_differential_equations_md_afb_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-engineering-mathematics-04-differential-equations-md-afb.json
const site_docs_courses_engineering_mathematics_04_differential_equations_md_afb_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/engineering-mathematics/04-differential-equations","title":"Chapter 4: Differential Equations","description":"Previous Multivariable Calculus | Next Complex Analysis","source":"@site/docs/courses/engineering-mathematics/04-differential-equations.md","sourceDirName":"courses/engineering-mathematics","slug":"/engineering-mathematics/04-differential-equations","permalink":"/ai-engineering-journey/engineering-mathematics/04-differential-equations","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"04-differential-equations","slug":"/engineering-mathematics/04-differential-equations","title":"Chapter 4: Differential Equations","sidebar_label":"Chapter 4: Differential Equations","sidebar_position":4},"sidebar":"coursesSidebar","previous":{"title":"Chapter 3: Multivariable Calculus","permalink":"/ai-engineering-journey/engineering-mathematics/03-calculus-ii"},"next":{"title":"Chapter 5: Complex Analysis","permalink":"/ai-engineering-journey/engineering-mathematics/05-complex-analysis"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/engineering-mathematics/04-differential-equations.md


const frontMatter = {
	id: '04-differential-equations',
	slug: '/engineering-mathematics/04-differential-equations',
	title: 'Chapter 4: Differential Equations',
	sidebar_label: 'Chapter 4: Differential Equations',
	sidebar_position: 4
};
const contentTitle = 'Chapter 4: Differential Equations';

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
  "value": "4.1 Classification of Differential Equations",
  "id": "41-classification-of-differential-equations",
  "level": 3
}, {
  "value": "4.2 First-Order ODEs",
  "id": "42-first-order-odes",
  "level": 3
}, {
  "value": "4.2.1 Separable Equations",
  "id": "421-separable-equations",
  "level": 4
}, {
  "value": "4.2.2 Linear First-Order ODEs",
  "id": "422-linear-first-order-odes",
  "level": 4
}, {
  "value": "4.2.3 Exact Equations",
  "id": "423-exact-equations",
  "level": 4
}, {
  "value": "4.2.4 Bernoulli Equation",
  "id": "424-bernoulli-equation",
  "level": 4
}, {
  "value": "4.2.5 Homogeneous First-Order ODEs",
  "id": "425-homogeneous-first-order-odes",
  "level": 4
}, {
  "value": "4.3 Applications of First-Order ODEs",
  "id": "43-applications-of-first-order-odes",
  "level": 3
}, {
  "value": "4.4 Higher-Order Linear ODEs",
  "id": "44-higher-order-linear-odes",
  "level": 3
}, {
  "value": "4.4.1 Homogeneous with Constant Coefficients",
  "id": "441-homogeneous-with-constant-coefficients",
  "level": 4
}, {
  "value": "4.4.2 Euler-Cauchy Equation",
  "id": "442-euler-cauchy-equation",
  "level": 4
}, {
  "value": "4.4.3 Nonhomogeneous Equations",
  "id": "443-nonhomogeneous-equations",
  "level": 4
}, {
  "value": "4.5 Applications of Second-Order ODEs",
  "id": "45-applications-of-second-order-odes",
  "level": 3
}, {
  "value": "4.6 Systems of ODEs",
  "id": "46-systems-of-odes",
  "level": 3
}, {
  "value": "4.7 Laplace Transforms",
  "id": "47-laplace-transforms",
  "level": 3
}, {
  "value": "4.8 Series Solutions",
  "id": "48-series-solutions",
  "level": 3
}, {
  "value": "4.9 Introduction to PDEs",
  "id": "49-introduction-to-pdes",
  "level": 3
}, {
  "value": "4.9.1 Heat Equation (Parabolic)",
  "id": "491-heat-equation-parabolic",
  "level": 4
}, {
  "value": "4.9.2 Wave Equation (Hyperbolic)",
  "id": "492-wave-equation-hyperbolic",
  "level": 4
}, {
  "value": "4.9.3 Laplace&#39;s Equation (Elliptic)",
  "id": "493-laplaces-equation-elliptic",
  "level": 4
}, {
  "value": "4.10 Differential Equations in Machine Learning",
  "id": "410-differential-equations-in-machine-learning",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Separable ODE",
  "id": "example-1-separable-ode",
  "level": 3
}, {
  "value": "Example 2: Linear First-Order ODE",
  "id": "example-2-linear-first-order-ode",
  "level": 3
}, {
  "value": "Example 3: Second-Order ODE (Spring-Mass)",
  "id": "example-3-second-order-ode-spring-mass",
  "level": 3
}, {
  "value": "Example 4: Systems of ODEs",
  "id": "example-4-systems-of-odes",
  "level": 3
}, {
  "value": "Example 5: Laplace Transform IVP",
  "id": "example-5-laplace-transform-ivp",
  "level": 3
}, {
  "value": "Example 6: Phase Plane Analysis",
  "id": "example-6-phase-plane-analysis",
  "level": 3
}, {
  "value": "Example 7: Solving a PDE with Separation of Variables",
  "id": "example-7-solving-a-pde-with-separation-of-variables",
  "level": 3
}, {
  "value": "TypeScript Examples",
  "id": "typescript-examples",
  "level": 2
}, {
  "value": "Euler&#39;s Method for First-Order ODEs",
  "id": "eulers-method-for-first-order-odes",
  "level": 3
}, {
  "value": "System of ODEs: Lotka-Volterra (Predator-Prey)",
  "id": "system-of-odes-lotka-volterra-predator-prey",
  "level": 3
}, {
  "value": "Real-World Application: Epidemic Modeling (SIR Model)",
  "id": "real-world-application-epidemic-modeling-sir-model",
  "level": 2
}, {
  "value": "TypeScript Implementation: Runge-Kutta 4 System Solver",
  "id": "typescript-implementation-runge-kutta-4-system-solver",
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
  "value": "Notation Reference",
  "id": "notation-reference",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
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
    void: "void",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "chapter-4-differential-equations",
        children: "Chapter 4: Differential Equations"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/engineering-mathematics/03-calculus-ii",
          children: "Chapter 3: Multivariable Calculus"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/engineering-mathematics/05-complex-analysis",
          children: "Chapter 5: Complex Analysis"
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
        href: "../../assets/images/lessons/engineering-mathematics/04-differential-equations/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/engineering-mathematics/04-differential-equations/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/engineering-mathematics/04-differential-equations/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/engineering-mathematics/04-differential-equations/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/engineering-mathematics/04-differential-equations/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/engineering-mathematics/04-differential-equations/visual-explanation.png",
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
        children: "Classify differential equations by order, linearity, and homogeneity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve first-order ODEs using separation, integrating factors, and exact methods"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve higher-order linear ODEs with constant coefficients"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Model physical systems using ODEs (springs, circuits, mixing)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve systems of ODEs using eigenvalue methods"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply Laplace transforms to solve IVPs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve basic PDEs using separation of variables"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply differential equations to machine learning dynamics and neural ODEs"
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
            children: "First-Order ODEs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$dy/dx = f(x,y)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Population models, decay, circuits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Second-Order ODEs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$y'' + py' + qy = 0$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Springs, RLC circuits, vibrations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Systems of ODEs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\mathbf{x}' = A\\mathbf{x}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coupled oscillators, epidemic models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Laplace Transform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$Y(s) = \\mathcal{L}{y(t)}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transforms DEs to algebraic equations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PDEs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\frac{\\partial u}{\\partial t} = \\alpha \\frac{\\partial^2 u}{\\partial x^2}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heat, wave, and Laplace equations"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[First-Order ODEs] --> B[Applications]\n    B --> C[Higher-Order ODEs]\n    C --> D[Systems of ODEs]\n    D --> E[Laplace Transforms]\n    E --> F[Series Solutions]\n    F --> G[Introduction to PDEs]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-classification-of-differential-equations",
      children: "4.1 Classification of Differential Equations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ordinary differential equation (ODE)"
      }), " involves derivatives of a function of one variable. A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "partial differential equation (PDE)"
      }), " involves partial derivatives of a function of multiple variables."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Order:"
      }), " The highest derivative present. $y' + y = 0$ is first-order; $y'' + 3y' + 2y = 0$ is second-order."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Linear vs. Nonlinear:"
      }), " An ODE is linear if it can be written as $a_n(x)y^{(n)} + \\cdots + a_1(x)y' + a_0(x)y = g(x)$. If any term involves products/powers of $y$ or its derivatives, it's nonlinear."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Homogeneous:"
      }), " If $g(x) = 0$ in the linear form above, the equation is homogeneous; otherwise, nonhomogeneous."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial Value Problem (IVP):"
      }), " ODE plus initial conditions at one point.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Boundary Value Problem (BVP):"
      }), " ODE plus conditions at two or more points."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-first-order-odes",
      children: "4.2 First-Order ODEs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "General Form:"
      }), " $\\frac{dy}{dx} = f(x, y)$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "421-separable-equations",
      children: "4.2.1 Separable Equations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Form: $\\frac{dy}{dx} = g(x)h(y)$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Separate: $\\frac{dy}{h(y)} = g(x),dx$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Integrate: $\\int \\frac{dy}{h(y)} = \\int g(x),dx + C$"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "422-linear-first-order-odes",
      children: "4.2.2 Linear First-Order ODEs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Form: $\\frac{dy}{dx} + P(x)y = Q(x)$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Integrating Factor:"
      }), " $\\mu(x) = e^{\\int P(x),dx}$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multiply both sides by $\\mu$:\n$$\\mu \\frac{dy}{dx} + \\mu P y = \\mu Q$$\n$$\\frac{d}{dx}(\\mu y) = \\mu Q$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " $y = \\frac{1}{\\mu(x)} \\int \\mu(x) Q(x),dx$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "423-exact-equations",
      children: "4.2.3 Exact Equations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Form: $M(x,y),dx + N(x,y),dy = 0$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The equation is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "exact"
      }), " if $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " There exists $F(x,y)$ such that $\\frac{\\partial F}{\\partial x} = M$ and $\\frac{\\partial F}{\\partial y} = N$. The solution is $F(x,y) = C$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To find $F$:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$F = \\int M,dx + g(y)$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Differentiate wrt $y$ and match with $N$ to find $g'(y)$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrate to get $g(y)$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "424-bernoulli-equation",
      children: "4.2.4 Bernoulli Equation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Form: $\\frac{dy}{dx} + P(x)y = Q(x)y^n$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Substitute $v = y^{1-n}$ to reduce to a linear equation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "425-homogeneous-first-order-odes",
      children: "4.2.5 Homogeneous First-Order ODEs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Form: $\\frac{dy}{dx} = F\\left(\\frac{y}{x}\\right)$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Substitute $v = y/x$, giving $y = vx$, $dy/dx = v + x,dv/dx$."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-applications-of-first-order-odes",
      children: "4.3 Applications of First-Order ODEs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Population Growth (Malthusian):"
      }), " $\\frac{dP}{dt} = kP \\implies P(t) = P_0 e^{kt}$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Logistic Growth:"
      }), " $\\frac{dP}{dt} = kP\\left(1 - \\frac{P}{K}\\right)$ where $K$ is carrying capacity."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Newton's Law of Cooling:"
      }), " $\\frac{dT}{dt} = -k(T - T_{\\text{env}})$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Radioactive Decay:"
      }), " $\\frac{dN}{dt} = -\\lambda N \\implies N(t) = N_0 e^{-\\lambda t}$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mixing Problems:"
      }), " Rate of change of amount = rate in - rate out."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RC Circuit:"
      }), " $R\\frac{dQ}{dt} + \\frac{Q}{C} = E(t)$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-higher-order-linear-odes",
      children: "4.4 Higher-Order Linear ODEs"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "441-homogeneous-with-constant-coefficients",
      children: "4.4.1 Homogeneous with Constant Coefficients"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Form: $a_n y^{(n)} + a_{n-1} y^{(n-1)} + \\cdots + a_1 y' + a_0 y = 0$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Assume $y = e^{rt}$, leading to characteristic equation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$a_n r^n + a_{n-1} r^{n-1} + \\cdots + a_1 r + a_0 = 0$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Case 1: Distinct Real Roots $r_1, r_2, \\ldots, r_n$"
      }), "\n$$y = c_1 e^{r_1 x} + c_2 e^{r_2 x} + \\cdots + c_n e^{r_n x}$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Case 2: Repeated Real Roots (multiplicity $m$)"
      }), "\n$$y = (c_1 + c_2 x + \\cdots + c_m x^{m-1}) e^{rx}$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Case 3: Complex Roots $r = \\alpha \\pm \\beta i$"
      }), "\n$$y = e^{\\alpha x}(c_1 \\cos\\beta x + c_2 \\sin\\beta x)$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Case 4: Repeated Complex Roots"
      }), " apply both repeated and complex formulas."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "442-euler-cauchy-equation",
      children: "4.4.2 Euler-Cauchy Equation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Form: $ax^2 y'' + bxy' + cy = 0$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Assume $y = x^r$, giving $ar(r-1) + br + c = 0$."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "443-nonhomogeneous-equations",
      children: "4.4.3 Nonhomogeneous Equations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Form: $a_n y^{(n)} + \\cdots + a_0 y = g(x)$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "General Solution:"
      }), " $y = y_h + y_p$, where $y_h$ is the homogeneous solution and $y_p$ is a particular solution."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Method of Undetermined Coefficients:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For $g(x)$ of specific forms (polynomials, exponentials, sines, cosines), guess $y_p$ with unknown coefficients:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "$g(x)$"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Guess $y_p$"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$P_m(x)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$A_0 + A_1 x + \\cdots + A_m x^m$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$A e^{kx}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$C e^{kx}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$A \\sin kx$ or $A \\cos kx$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$C \\cos kx + D \\sin kx$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$e^{kx} P_m(x)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$e^{kx} (A_0 + \\cdots + A_m x^m)$"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Modification Rule:"
      }), " If the guess matches a homogeneous solution term, multiply by $x$ (or $x^2$, etc.)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Method of Variation of Parameters:"
      }), " Works for any $g(x)$. For $y'' + p(x)y' + q(x)y = g(x)$:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$y_p = -y_1 \\int \\frac{y_2 g}{W},dx + y_2 \\int \\frac{y_1 g}{W},dx$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where $y_1, y_2$ are linearly independent homogeneous solutions and $W = y_1 y_2' - y_2 y_1'$ is the Wronskian."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "45-applications-of-second-order-odes",
      children: "4.5 Applications of Second-Order ODEs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Spring-Mass System (Undamped):"
      }), " $m\\frac{d^2 x}{dt^2} + kx = 0$\n$$x(t) = A\\cos(\\omega_0 t) + B\\sin(\\omega_0 t), \\quad \\omega_0 = \\sqrt{k/m}$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Damped Spring:"
      }), " $m\\frac{d^2 x}{dt^2} + c\\frac{dx}{dt} + kx = 0$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Three cases: overdamped ($c^2 > 4mk$), critically damped ($c^2 = 4mk$), underdamped ($c^2 < 4mk$)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Forced Oscillations:"
      }), " $m x'' + c x' + kx = F_0 \\cos(\\omega t)$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RLC Circuit:"
      }), " $L\\frac{d^2 q}{dt^2} + R\\frac{dq}{dt} + \\frac{q}{C} = E(t)$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "46-systems-of-odes",
      children: "4.6 Systems of ODEs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "General Form (First-Order Linear System):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\begin{aligned}\nx_1' &= a_{11}x_1 + a_{12}x_2 + \\cdots + a_{1n}x_n + f_1(t) \\\nx_2' &= a_{21}x_1 + a_{22}x_2 + \\cdots + a_{2n}x_n + f_2(t) \\\n&\\vdots \\\nx_n' &= a_{n1}x_1 + a_{n2}x_2 + \\cdots + a_{nn}x_n + f_n(t)\n\\end{aligned}$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Matrix Form:"
      }), " $\\mathbf{x}' = A\\mathbf{x} + \\mathbf{f}(t)$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Homogeneous Solution ($\\mathbf{x}' = A\\mathbf{x}$):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Assume $\\mathbf{x} = \\mathbf{v} e^{\\lambda t}$, giving $A\\mathbf{v} = \\lambda\\mathbf{v}$ ? eigenvalues and eigenvectors!"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real distinct eigenvalues:"
        }), " $\\mathbf{x} = c_1 \\mathbf{v}_1 e^{\\lambda_1 t} + \\cdots + c_n \\mathbf{v}_n e^{\\lambda_n t}$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complex eigenvalues"
        }), " $\\lambda = \\alpha \\pm \\beta i$ with $\\mathbf{v} = \\mathbf{a} \\pm \\mathbf{b} i$: solution involves $e^{\\alpha t}(\\cos\\beta t, \\sin\\beta t)$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repeated eigenvalues"
        }), " require generalized eigenvectors"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase Plane Analysis:"
      }), " For 2D systems, classify equilibrium points:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Node (real eigenvalues, same sign)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Saddle (real eigenvalues, opposite signs)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Spiral (complex eigenvalues, nonzero real part)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Center (purely imaginary eigenvalues)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fundamental Matrix:"
      }), " $\\Phi(t) = [\\mathbf{x}_1(t), \\mathbf{x}_2(t), \\ldots, \\mathbf{x}_n(t)]$ where each $\\mathbf{x}_i$ is a solution. Then $\\Phi'(t) = A\\Phi(t)$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "47-laplace-transforms",
      children: "4.7 Laplace Transforms"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " $\\mathcal{L}{f(t)} = F(s) = \\int_0^\\infty e^{-st} f(t),dt$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Transforms:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "$f(t)$"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "$F(s) = \\mathcal{L}{f}$"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$1$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\frac{1}{s}$, $s > 0$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$t^n$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\frac{n!}{s^{n+1}}$, $s > 0$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$e^{at}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\frac{1}{s-a}$, $s > a$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\sin at$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\frac{a}{s^2 + a^2}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\cos at$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\frac{s}{s^2 + a^2}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\sinh at$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\frac{a}{s^2 - a^2}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\cosh at$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\frac{s}{s^2 - a^2}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$e^{at}f(t)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$F(s-a)$ (First shift)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$t^n f(t)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$(-1)^n F^{(n)}(s)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$f'(t)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$sF(s) - f(0)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$f''(t)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$s^2 F(s) - sf(0) - f'(0)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\int_0^t f(\\tau),d\\tau$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\frac{F(s)}{s}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$f(t-a)u(t-a)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$e^{-as}F(s)$ (Second shift)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$(f * g)(t)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$F(s)G(s)$ (Convolution)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where $u(t-a)$ is the unit step function:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$u(t-a) = \\begin{cases} 0 & t < a \\ 1 & t \\geq a \\end{cases}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solving IVPs with Laplace Transforms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Take Laplace transform of both sides of the DE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use linearity and derivative property to get algebraic equation in $Y(s)$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve for $Y(s)$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply inverse Laplace transform to get $y(t)$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Partial Fractions for Inverse Transform:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\frac{N(s)}{(s-a)(s-b)} = \\frac{A}{s-a} + \\frac{B}{s-b}$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Convolution Theorem:"
      }), " $\\mathcal{L}^{-1}{F(s)G(s)} = \\int_0^t f(\\tau)g(t-\\tau),d\\tau = (f * g)(t)$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "48-series-solutions",
      children: "4.8 Series Solutions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For ODEs with variable coefficients, assume a power series solution:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$y(x) = \\sum_{n=0}^\\infty a_n (x - x_0)^n$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Ordinary Point:"
      }), " $x_0$ where $P(x) \\neq 0$ (coefficient of $y''$). Series converges in some interval."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Regular Singular Point:"
      }), " $x_0$ where $P(x_0) = 0$ but $(x-x_0)\\frac{Q}{P}$ and $(x-x_0)^2\\frac{R}{P}$ are analytic."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Method of Frobenius:"
      }), " For regular singular points, assume:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$y(x) = \\sum_{n=0}^\\infty a_n (x - x_0)^{n+r}$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["where $r$ satisfies the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "indicial equation"
      }), " (from the lowest power of $x$)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Legendre's Equation:"
      }), " $(1-x^2)y'' - 2xy' + n(n+1)y = 0$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Solutions are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Legendre polynomials"
      }), " $P_n(x)$, orthogonal on $[-1,1]$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bessel's Equation:"
      }), " $x^2 y'' + xy' + (x^2 - \\nu^2)y = 0$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Solutions are Bessel functions $J_\\nu(x)$ and $Y_\\nu(x)$."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "49-introduction-to-pdes",
      children: "4.9 Introduction to PDEs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Classification of Second-Order Linear PDEs:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$A u_{xx} + B u_{xy} + C u_{yy} + D u_x + E u_y + F u = G$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Elliptic"
        }), " ($B^2 - 4AC < 0$): Laplace's equation $u_{xx} + u_{yy} = 0$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Parabolic"
        }), " ($B^2 - 4AC = 0$): Heat equation $u_t = \\alpha u_{xx}$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hyperbolic"
        }), " ($B^2 - 4AC > 0$): Wave equation $u_{tt} = c^2 u_{xx}$"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "491-heat-equation-parabolic",
      children: "4.9.1 Heat Equation (Parabolic)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\frac{\\partial u}{\\partial t} = \\alpha \\frac{\\partial^2 u}{\\partial x^2}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where $u(x,t)$ is temperature and $\\alpha$ is thermal diffusivity."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Separation of Variables:"
      }), " Assume $u(x,t) = X(x)T(t)$:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$X T' = \\alpha X'' T \\implies \\frac{T'}{\\alpha T} = \\frac{X''}{X} = -\\lambda$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This gives two ODEs:\n$$X'' + \\lambda X = 0, \\quad T' + \\alpha \\lambda T = 0$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution (with boundary conditions $u(0,t) = u(L,t) = 0$):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$u(x,t) = \\sum_{n=1}^\\infty b_n \\sin\\left(\\frac{n\\pi x}{L}\\right) e^{-\\alpha\\left(\\frac{n\\pi}{L}\\right)^2 t}$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Steady State:"
      }), " As $t \\to \\infty$, $u(x,t) \\to 0$ (all modes decay, higher modes decay faster)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "492-wave-equation-hyperbolic",
      children: "4.9.2 Wave Equation (Hyperbolic)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\frac{\\partial^2 u}{\\partial t^2} = c^2 \\frac{\\partial^2 u}{\\partial x^2}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where $u(x,t)$ is displacement and $c$ is wave speed."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "d'Alembert's Solution:"
      }), " $u(x,t) = f(x + ct) + g(x - ct)$ ? waves traveling left and right."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Separation of Variables:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$u(x,t) = \\sum_{n=1}^\\infty \\sin\\left(\\frac{n\\pi x}{L}\\right) \\left[A_n \\cos\\left(\\frac{n\\pi c t}{L}\\right) + B_n \\sin\\left(\\frac{n\\pi c t}{L}\\right)\\right]$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "493-laplaces-equation-elliptic",
      children: "4.9.3 Laplace's Equation (Elliptic)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\frac{\\partial^2 u}{\\partial x^2} + \\frac{\\partial^2 u}{\\partial y^2} = 0$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Describes steady-state temperature, electrostatic potential, and incompressible fluid flow."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mean Value Property:"
        }), " Value at a point equals average over any circle centered at that point"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maximum Principle:"
        }), " Maximum occurs on boundary, never interior"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Harmonic functions"
        }), " are smooth (infinitely differentiable)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "410-differential-equations-in-machine-learning",
      children: "4.10 Differential Equations in Machine Learning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Neural ODEs (Chen et al., 2018):"
      }), " The hidden state evolution in a residual network can be modeled as an ODE:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\frac{dh}{dt} = f_\\theta(h(t), t)$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The forward pass solves an IVP, and backpropagation uses the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "adjoint method"
      }), " (another ODE solved backward in time)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Gradient Flow:"
      }), " The gradient descent update can be viewed as a discretization of:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\frac{dw}{dt} = -\\nabla L(w(t))$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Continuous Normalizing Flows:"
      }), " Normalizing flows use ODE-based transformations for density estimation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lotka-Volterra Equations in ML:"
      }), " Predator-prey dynamics model adversarial training dynamics."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hamiltonian Neural Networks:"
      }), " Learn Hamiltonian dynamics from data (conservation of energy)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SDEs in ML:"
      }), " Stochastic differential equations model optimization noise and diffusion models."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-separable-ode",
      children: "Example 1: Separable ODE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Solve $\\frac{dy}{dx} = xy$ with $y(0) = 2$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Separate: $\\frac{dy}{y} = x,dx$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Integrate: $\\int \\frac{dy}{y} = \\int x,dx \\implies \\ln|y| = \\frac{x^2}{2} + C$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Solve for $y$: $y = \\pm e^{C} e^{x^2/2} = A e^{x^2/2}$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Apply $y(0) = 2$: $2 = A e^0 = A \\implies A = 2$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " $y = 2 e^{x^2/2}$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-linear-first-order-ode",
      children: "Example 2: Linear First-Order ODE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Solve $\\frac{dy}{dx} + 2y = e^{-x}$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$P(x) = 2$, $Q(x) = e^{-x}$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Integrating factor: $\\mu = e^{\\int 2,dx} = e^{2x}$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multiply: $e^{2x} y' + 2e^{2x} y = e^{x}$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Recognize left side as derivative: $\\frac{d}{dx}(e^{2x} y) = e^{x}$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Integrate: $e^{2x} y = e^{x} + C$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " $y = e^{-x} + Ce^{-2x}$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-second-order-ode-spring-mass",
      children: "Example 3: Second-Order ODE (Spring-Mass)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Solve $y'' + 4y' + 5y = 0$ with $y(0) = 1$, $y'(0) = 0$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Characteristic equation: $r^2 + 4r + 5 = 0$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$r = \\frac{-4 \\pm \\sqrt{16 - 20}}{2} = \\frac{-4 \\pm 2i}{2} = -2 \\pm i$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "General solution: $y = e^{-2x}(c_1 \\cos x + c_2 \\sin x)$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Apply $y(0) = 1$: $c_1 = 1$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$y'(x) = -2e^{-2x}(\\cos x + c_2\\sin x) + e^{-2x}(-\\sin x + c_2\\cos x)$\n$y'(0) = -2(1) + c_2 = 0 \\implies c_2 = 2$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " $y = e^{-2x}(\\cos x + 2\\sin x)$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This represents an underdamped oscillator ? oscillates with decaying amplitude."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-systems-of-odes",
      children: "Example 4: Systems of ODEs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Solve $\\mathbf{x}' = A\\mathbf{x}$ where $A = \\begin{pmatrix} 1 & 2 \\ 3 & 2 \\end{pmatrix}$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Eigenvalues: $\\det(A - \\lambda I) = \\begin{vmatrix} 1-\\lambda & 2 \\ 3 & 2-\\lambda \\end{vmatrix} = (1-\\lambda)(2-\\lambda) - 6 = \\lambda^2 - 3\\lambda - 4 = (\\lambda - 4)(\\lambda + 1)$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$\\lambda_1 = 4$, $\\lambda_2 = -1$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Eigenvector for $\\lambda_1 = 4$:\n$$(A-4I)\\mathbf{v} = \\begin{pmatrix} -3 & 2 \\ 3 & -2 \\end{pmatrix} \\mathbf{v} = 0 \\implies -3v_1 + 2v_2 = 0 \\implies \\mathbf{v}_1 = \\begin{pmatrix} 2 \\ 3 \\end{pmatrix}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Eigenvector for $\\lambda_2 = -1$:\n$$(A+I)\\mathbf{v} = \\begin{pmatrix} 2 & 2 \\ 3 & 3 \\end{pmatrix} \\mathbf{v} = 0 \\implies \\mathbf{v}_2 = \\begin{pmatrix} 1 \\ -1 \\end{pmatrix}$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "General Solution:"
      }), " $\\mathbf{x}(t) = c_1 \\begin{pmatrix} 2 \\ 3 \\end{pmatrix} e^{4t} + c_2 \\begin{pmatrix} 1 \\ -1 \\end{pmatrix} e^{-t}$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-5-laplace-transform-ivp",
      children: "Example 5: Laplace Transform IVP"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Solve $y'' + y = \\sin t$, $y(0) = 1$, $y'(0) = 0$ using Laplace transforms."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Take Laplace transform:\n$$(s^2 Y - s\\cdot 1 - 0) + Y = \\frac{1}{s^2 + 1}$$\n$$(s^2 + 1)Y - s = \\frac{1}{s^2 + 1}$$\n$$Y = \\frac{s}{s^2 + 1} + \\frac{1}{(s^2 + 1)^2}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Inverse transform:\n$$\\mathcal{L}^{-1}\\left{\\frac{s}{s^2 + 1}\\right} = \\cos t$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For the second term, use convolution:\n$$\\mathcal{L}^{-1}\\left{\\frac{1}{(s^2 + 1)^2}\\right} = \\frac{\\sin t - t\\cos t}{2}$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " $y(t) = \\cos t + \\frac{\\sin t - t\\cos t}{2}$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-6-phase-plane-analysis",
      children: "Example 6: Phase Plane Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Analyze the system $\\mathbf{x}' = \\begin{pmatrix} 1 & 2 \\ -2 & 1 \\end{pmatrix} \\mathbf{x}$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nEigenvalues: $\\det(A - \\lambda I) = (1-\\lambda)^2 + 4 = 0 \\implies \\lambda = 1 \\pm 2i$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Since eigenvalues are complex with positive real part, the equilibrium at $(0,0)$ is an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "unstable spiral"
      }), ". Trajectories spiral outward as $t \\to \\infty$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For $\\lambda = 1 + 2i$:\n$$(A - (1+2i)I)\\mathbf{v} = \\begin{pmatrix} -2i & 2 \\ -2 & -2i \\end{pmatrix} \\begin{pmatrix} v_1 \\ v_2 \\end{pmatrix} = 0 \\implies \\mathbf{v} = \\begin{pmatrix} 1 \\ i \\end{pmatrix}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "General solution:\n$$\\mathbf{x}(t) = e^t \\begin{pmatrix} \\cos 2t & -\\sin 2t \\ \\sin 2t & \\cos 2t \\end{pmatrix} \\begin{pmatrix} c_1 \\ c_2 \\end{pmatrix}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The $e^t$ factor causes exponential growth, while the rotation matrix causes oscillation at frequency 2."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-7-solving-a-pde-with-separation-of-variables",
      children: "Example 7: Solving a PDE with Separation of Variables"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Solve the wave equation $u_{tt} = c^2 u_{xx}$ for $0 < x < L$, $t > 0$, with $u(0,t) = u(L,t) = 0$, $u(x,0) = f(x)$, $u_t(x,0) = 0$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nAssume $u(x,t) = X(x)T(t)$. Substitute: $X T'' = c^2 X'' T$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Divide by $c^2 X T$: $\\frac{T''}{c^2 T} = \\frac{X''}{X} = -\\lambda$ (separation constant)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Solve for $X$: $X'' + \\lambda X = 0$, $X(0) = X(L) = 0$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$\\lambda_n = \\left(\\frac{n\\pi}{L}\\right)^2$, $X_n(x) = \\sin\\left(\\frac{n\\pi x}{L}\\right)$, $n = 1, 2, 3, \\ldots$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Solve for $T$: $T'' + c^2\\lambda_n T = 0$, $T(0) = A_n$, $T'(0) = 0$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$T_n(t) = A_n \\cos\\left(\\frac{n\\pi c t}{L}\\right)$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The complete solution is a superposition of normal modes:\n$$u(x,t) = \\sum_{n=1}^\\infty A_n \\sin\\left(\\frac{n\\pi x}{L}\\right) \\cos\\left(\\frac{n\\pi c t}{L}\\right)$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where $A_n = \\frac{2}{L} \\int_0^L f(x) \\sin\\left(\\frac{n\\pi x}{L}\\right) dx$."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-examples",
      children: "TypeScript Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "eulers-method-for-first-order-odes",
      children: "Euler's Method for First-Order ODEs"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type ODE = (t: number, y: number) => number;\n\nfunction eulerMethod(\n  f: ODE,\n  t0: number,\n  y0: number,\n  h: number,\n  n: number\n): { t: number[]; y: number[] } {\n  const t: number[] = [t0];\n  const y: number[] = [y0];\n  for (let i = 0; i < n; i++) {\n    y.push(y[i] + h * f(t[i], y[i]));\n    t.push(t[i] + h);\n  }\n  return { t, y };\n}\n\n// y' = -2xy, y(0) = 1 ? exact: y = exp(-x?)\nconst f = (x: number, y: number) => -2 * x * y;\nconst { t: tv, y: yv } = eulerMethod(f, 0, 1, 0.1, 10);\nfor (let i = 0; i <= 10; i += 2) {\n  const exact = Math.exp(-tv[i] * tv[i]);\n  console.log(\n    `x=${tv[i].toFixed(1)}: Euler=${yv[i].toFixed(6)}, exact=${exact.toFixed(6)}`\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "system-of-odes-lotka-volterra-predator-prey",
      children: "System of ODEs: Lotka-Volterra (Predator-Prey)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type ODESystem = (t: number, y: number[]) => number[];\n\nfunction rk4System(\n  f: ODESystem,\n  t0: number,\n  y0: number[],\n  h: number,\n  n: number\n): { t: number[]; y: number[][] } {\n  const t: number[] = [t0];\n  const y: number[][] = [y0];\n  const m = y0.length;\n  for (let step = 0; step < n; step++) {\n    const ti = t[step], yi = y[step];\n    const k1 = f(ti, yi);\n    const k2 = f(ti + h / 2, yi.map((v, i) => v + (h / 2) * k1[i]));\n    const k3 = f(ti + h / 2, yi.map((v, i) => v + (h / 2) * k2[i]));\n    const k4 = f(ti + h, yi.map((v, i) => v + h * k3[i]));\n    const next: number[] = [];\n    for (let i = 0; i < m; i++)\n      next.push(yi[i] + (h / 6) * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i]));\n    t.push(ti + h);\n    y.push(next);\n  }\n  return { t, y };\n}\n\n// Lotka-Volterra: dx/dt = ax - ?xy, dy/dt = dxy - ?y\nconst a = 1.5, ? = 1.0, d = 1.0, ? = 3.0;\nconst lotkaVolterra: ODESystem = (_, y) => [\n  a * y[0] - ? * y[0] * y[1],  // prey\n  d * y[0] * y[1] - ? * y[1],  // predator\n];\n\nconst { t: lt, y: ly } = rk4System(lotkaVolterra, 0, [10, 5], 0.01, 500);\n// Print every 100 steps\nfor (let i = 0; i <= 500; i += 100) {\n  console.log(\n    `t=${lt[i].toFixed(1)}: prey=${ly[i][0].toFixed(1)}, predator=${ly[i][1].toFixed(1)}`\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-world-application-epidemic-modeling-sir-model",
      children: "Real-World Application: Epidemic Modeling (SIR Model)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The SIR model describes the spread of infectious diseases through a population:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\frac{dS}{dt} = -\\beta S I, \\quad \\frac{dI}{dt} = \\beta S I - \\gamma I, \\quad \\frac{dR}{dt} = \\gamma I$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where $S$ = susceptible, $I$ = infected, $R$ = recovered, $\\beta$ = transmission rate, $\\gamma$ = recovery rate."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Epidemiological Parameters:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Basic reproduction number:"
        }), " $R_0 = \\beta S_0 / \\gamma$ ? average number of secondary infections"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Herd immunity threshold:"
        }), " $1 - 1/R_0$ ? fraction of population that must be immune"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Peak infection:"
        }), " Occurs when $S = \\gamma/\\beta$ (where $dI/dt = 0$)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const sir: ODESystem = (_, y) => {\n  const S = y[0], I = y[1], R = y[2];\n  const beta = 0.3, gamma = 0.1;  // R0 = 3.0\n  return [-beta * S * I, beta * S * I - gamma * I, gamma * I];\n};\n\nconst { t: st, y: sy } = rk4System(sir, 0, [0.99, 0.01, 0], 0.1, 200);\nconsole.log(`Day 50: S=${sy[50][0].toFixed(3)}, I=${sy[50][1].toFixed(3)}, R=${sy[50][2].toFixed(3)}`);\nconsole.log(`Day 100: S=${sy[100][0].toFixed(3)}, I=${sy[100][1].toFixed(3)}, R=${sy[100][2].toFixed(3)}`);\n// At R0=3, ~90% of population gets infected before epidemic ends\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-runge-kutta-4-system-solver",
      children: "TypeScript Implementation: Runge-Kutta 4 System Solver"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type ODESystem = (t: number, y: number[]) => number[];\n\nfunction rk4Step(f: ODESystem, t: number, y: number[], h: number): number[] {\n  const n = y.length;\n  const k1 = f(t, y);\n  const y2 = y.map((yi, i) => yi + 0.5 * h * k1[i]); const k2 = f(t + 0.5 * h, y2);\n  const y3 = y.map((yi, i) => yi + 0.5 * h * k2[i]); const k3 = f(t + 0.5 * h, y3);\n  const y4 = y.map((yi, i) => yi + h * k3[i]);       const k4 = f(t + h, y4);\n  return y.map((yi, i) => yi + (h / 6) * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i]));\n}\n\nfunction solveODE(f: ODESystem, t0: number, y0: number[], h: number, steps: number) {\n  const t = [t0], y = [y0];\n  for (let i = 0; i < steps; i++) { y.push(rk4Step(f, t[i], y[i], h)); t.push(t[i] + h); }\n  return { t, y };\n}\n\n// Predator-Prey (Lotka-Volterra): dR/dt = aR - ?RF, dF/dt = dRF - ?F\nconst lotkaVolterra = (a: number, ?: number, d: number, ?: number) =>\n  (_t: number, y: number[]): number[] => [a * y[0] - ? * y[0] * y[1], d * y[0] * y[1] - ? * y[1]];\n\nconst { t: lvT, y: pop } = solveODE(lotkaVolterra(0.1, 0.02, 0.01, 0.1), 0, [40, 9], 0.5, 200);\nconsole.log(\"Predator-Prey (Lotka-Volterra):\");\nconsole.log(`  t=0:   R=${pop[0][0].toFixed(1)} F=${pop[0][1].toFixed(1)}`);\nconsole.log(`  t=25:  R=${pop[50][0].toFixed(1)} F=${pop[50][1].toFixed(1)}`);\nconsole.log(`  t=50:  R=${pop[100][0].toFixed(1)} F=${pop[100][1].toFixed(1)}`);\nconsole.log(`  t=100: R=${pop[200][0].toFixed(1)} F=${pop[200][1].toFixed(1)}`);\n// Equilibrium: R* = ?/d = 10, F* = a/? = 5\nconsole.log(`  Equilibrium: R*=10, F*=5 (pure imaginary eigenvalues ? persistent oscillations)`);\n\n// Simple harmonic oscillator: y'' + ??y = 0 ? system: y0' = y1, y1' = -??y0\nconst harmonic = (?: number) => (_t: number, y: number[]): number[] => [y[1], -? * ? * y[0]];\nconst { t: hT, y: hY } = solveODE(harmonic(2), 0, [1, 0], 0.01, 630);  // ?=2 ? period = p ? 3.14\nconst period = hT[630];  // Full cycle ? p\nconsole.log(`Harmonic oscillator: period ? ${period.toFixed(4)} (expected: ${Math.PI.toFixed(4)})`);\nconsole.log(`  Amplitude after one period: ${hY[630][0].toFixed(4)} (expected: 1.0)`);\n\n// Damped spring: y'' + 2?? y' + ??y = 0 ? system\n// ? = 0.1 (underdamped), ? = 2\nconst damped = (?: number, ?: number) => (_t: number, y: number[]): number[] => [y[1], -2 * ? * ? * y[1] - ? * ? * y[0]];\nconst { y: dY } = solveODE(damped(0.1, 2), 0, [1, 0], 0.01, 500);\nconsole.log(`Damped spring at t=5: y=${dY[500][0].toFixed(4)} (amplitude decaying over time)`);\n\n### TypeScript: Euler's Method for First-Order ODEs\n\n```typescript\nfunction eulerMethod(f: (t: number, y: number) => number, t0: number, y0: number, h: number, steps: number) {\n  const t = [t0], y = [y0];\n  for (let i = 0; i &lt; steps; i++) {\n    y.push(y[i] + h * f(t[i], y[i]));\n    t.push(t[i] + h);\n  }\n  return { t, y };\n}\n\n// RC circuit: dV/dt = (V_in - V) / (RC) with step input V_in = 1, RC = 1\n// Analytic: V(t) = 1 - e^{-t}\nconst rcCircuit = (_t: number, V: number) => (1 - V);  // RC = 1, V_in = 1\nconst { y: vOut } = eulerMethod(rcCircuit, 0, 0, 0.05, 100);\nconsole.log(\"RC Circuit (Euler, h=0.05):\");\nconsole.log(`  t=0.5: V=${vOut[10].toFixed(4)} (exact: ${(1 - Math.exp(-0.5)).toFixed(4)})`);\nconsole.log(`  t=1.0: V=${vOut[20].toFixed(4)} (exact: ${(1 - Math.exp(-1)).toFixed(4)})`);\nconsole.log(`  t=5.0: V=${vOut[100].toFixed(4)} (exact: ${(1 - Math.exp(-5)).toFixed(4)})`);\n\n// Logistic growth: dP/dt = rP(1 - P/K), r=0.5, K=100\n// Analytic solution: P(t) = K / (1 + (K/P0 - 1)e^{-rt})\nconst logistic = (_t: number, P: number) => 0.5 * P * (1 - P / 100);\nconst { y: popLog } = eulerMethod(logistic, 0, 10, 0.1, 100);\nconsole.log(\"Logistic Growth (Euler):\");\nconsole.log(`  t=0: P=${popLog[0].toFixed(1)}`);\nconsole.log(`  t=5: P=${popLog[50].toFixed(1)} (analytic: ${(100 / (1 + (100 / 10 - 1) * Math.exp(-0.5 * 5))).toFixed(1)})`);\nconsole.log(`  t=10: P=${popLog[100].toFixed(1)} (approaching K=100)`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// --- Runge-Kutta 4th Order (general system) ---\nfunction rk4(\n  f: (t: number, y: number[]) => number[],\n  t0: number,\n  y0: number[],\n  h: number,\n  steps: number\n): { t: number[]; y: number[][] } {\n  const t = [t0];\n  const y = [y0];\n  for (let i = 0; i &lt; steps; i++) {\n    const ti = t[i], yi = y[i];\n    const k1 = f(ti, yi).map(v => v);\n    const k2 = f(ti + h / 2, yi.map((v, j) => v + (h / 2) * k1[j]));\n    const k3 = f(ti + h / 2, yi.map((v, j) => v + (h / 2) * k2[j]));\n    const k4 = f(ti + h, yi.map((v, j) => v + h * k3[j]));\n    const next = yi.map((v, j) => v + (h / 6) * (k1[j] + 2 * k2[j] + 2 * k3[j] + k4[j]));\n    t.push(ti + h);\n    y.push(next);\n  }\n  return { t, y };\n}\n// Simple harmonic oscillator: y'' = -y ? y' = v, v' = -y\nconst sho = (t: number, y: number[]) => [y[1], -y[0]];\nconst shoSol = rk4(sho, 0, [1, 0], 0.1, 100);\nconsole.log('SHO y(0)=1, y\\'(0)=0: y(2p) =', shoSol.y[shoSol.t.findIndex(t => t >= 2 * Math.PI)][0].toFixed(4));\n\n// --- Predator-Prey (Lotka-Volterra) ---\nconst lotkaVolterra = (a: number, ?: number, d: number, ?: number) =>\n  (t: number, y: number[]) => [a * y[0] - ? * y[0] * y[1], d * y[0] * y[1] - ? * y[1]];\nconst lv = rk4(lotkaVolterra(0.1, 0.02, 0.01, 0.1), 0, [40, 9], 0.5, 200);\nconst lastLv = lv.y[lv.y.length - 1];\nconsole.log('\\nLotka-Volterra (t=100): prey=', lastLv[0].toFixed(1), 'predator=', lastLv[1].toFixed(1));\n\n// --- Characteristic Equation Solver ---\nfunction solveCharacteristic(coeffs: number[]): { roots: number[]; type: string } {\n  // For quadratic: a*r? + b*r + c = 0\n  const [a, b, c] = coeffs;\n  const disc = b * b - 4 * a * c;\n  if (disc > 0) {\n    const r1 = (-b + Math.sqrt(disc)) / (2 * a);\n    const r2 = (-b - Math.sqrt(disc)) / (2 * a);\n    return { roots: [r1, r2], type: 'real and distinct' };\n  } else if (Math.abs(disc) &lt; 1e-10) {\n    return { roots: [-b / (2 * a)], type: 'repeated real' };\n  } else {\n    return { roots: [-b / (2 * a)], type: 'complex' };\n  }\n}\nconst charEq = solveCharacteristic([1, -5, 6]); // r? - 5r + 6 = 0 ? r=2, r=3\nconsole.log('\\nCharacteristic r?-5r+6:', charEq.type, 'roots:', charEq.roots.join(', '));\n\n// --- Phase Portrait Direction Field ---\nfunction directionField(\n  f: (t: number, y: number) => number,\n  tRange: [number, number],\n  yRange: [number, number],\n  gridSize: number\n): { t: number; y: number; slope: number }[] {\n  const dt = (tRange[1] - tRange[0]) / gridSize;\n  const dy = (yRange[1] - yRange[0]) / gridSize;\n  const fields: { t: number; y: number; slope: number }[] = [];\n  for (let i = 0; i &lt;= gridSize; i++)\n    for (let j = 0; j &lt;= gridSize; j++) {\n      const t = tRange[0] + i * dt, y = yRange[0] + j * dy;\n      fields.push({ t: +t.toFixed(2), y: +y.toFixed(2), slope: +f(t, y).toFixed(2) });\n    }\n  return fields;\n}\nconst df = directionField((t, y) => y - t * t, [-2, 2], [-2, 2], 5);\nconsole.log('\\nDirection field y\\'=y-t? (sample):', df.slice(0, 5).map(p => `(t=${p.t},y=${p.y},s=${p.slope})`).join(', '));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// differential equations\n// linear-algebra-calculus implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise", (0,jsx_runtime.jsxs)(_components.void, {
        children: [" {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise", (0,jsx_runtime.jsxs)(_components.void, {
          children: [" {\nconst running: Promise", (0,jsx_runtime.jsxs)(_components.void, {
            children: ["[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise", (0,jsx_runtime.jsx)(_components.void, {
              children: " {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'differential equations', data: { topic: 'linear-algebra-calculus' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// differential equations - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise", (0,jsx_runtime.jsx)(_components.void, {
        children: " {\nconst cache = new Cache(5000)\ncache.set('key1', 'engineering-math demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'engineering-mathematics', chapter: 'differential equations' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('engineering-math'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "First-order ODEs are classified into separable, linear, exact, Bernoulli, and homogeneous types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Second-order linear ODEs with constant coefficients solve via characteristic equation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The method of undetermined coefficients finds particular solutions for specific forcing functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Systems of ODEs connect directly to linear algebra: eigenvalues and eigenvectors determine dynamics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Laplace transforms convert differential equations to algebraic equations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The equilibrium type (node, saddle, spiral, center) is determined by eigenvalues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PDEs (heat, wave, Laplace) model physical fields; solve via separation of variables"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Neural ODEs and gradient flow connect DE theory to modern machine learning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why the integrating factor method works for linear first-order ODEs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does the characteristic equation arise for constant-coefficient ODEs?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the relationship between eigenvalues of $A$ and stability of $\\mathbf{x}' = A\\mathbf{x}$?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is the Laplace transform well-suited for IVPs with discontinuous forcing?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain how separation of variables reduces a PDE to ODEs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Logistic Growth:"
          }), " Solve $\\frac{dP}{dt} = 0.1P(1 - P/1000)$ with $P(0) = 100$."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "RLC Circuit:"
          }), " For $L = 1H$, $R = 2\\Omega$, $C = 0.25F$, $E(t) = 10\\sin t$, find $q(t)$ with $q(0) = 0$, $i(0) = 0$."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Predator-Prey:"
          }), " Write the Lotka-Volterra equations and find their equilibrium points."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Heat Equation:"
          }), " Solve $u_t = u_{xx}$ for $0 < x < 1$, $t > 0$, with $u(0,t) = u(1,t) = 0$, $u(x,0) = \\sin(2\\pi x)$."]
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
            children: "Bernoulli Equation:"
          }), " Solve $y' + \\frac{y}{x} = x^2 y^2$ by reducing to a linear ODE using the substitution $v = y^{1-n}$."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Phase Portrait:"
          }), " For $\\mathbf{x}' = \\begin{pmatrix} 0 & 1 \\ -4 & 0 \\end{pmatrix} \\mathbf{x}$, find the eigenvalues and classify the equilibrium."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Method of Undetermined Coefficients:"
          }), " Solve $y'' - 4y' + 3y = e^{2x}$ with $y(0) = 0$, $y'(0) = 0$."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Neural ODE:"
      }), " Given $dh/dt = f_\\theta(h, t) = -\\alpha h$ with $h(0) = h_0$, solve analytically. Then show that backpropagation through this ODE (solving the adjoint ODE backward) gives the same gradient as direct differentiation of the closed-form solution."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notation-reference",
      children: "Notation Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "$y'$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$dy/dx$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$y''$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$d^2 y/dx^2$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$y^{(n)}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$d^n y/dx^n$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\mathcal{L}{f}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Laplace transform of $f$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\mathcal{L}^{-1}{F}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "inverse Laplace transform"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\mu(x)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "integrating factor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$W(y_1, y_2)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wronskian"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\Phi(t)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fundamental matrix"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$u(t-a)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "unit step function"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$(f * g)(t)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "convolution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\partial u/\\partial t$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "partial derivative of $u$ wrt $t$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\alpha$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "thermal diffusivity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\lambda$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "separation constant"
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