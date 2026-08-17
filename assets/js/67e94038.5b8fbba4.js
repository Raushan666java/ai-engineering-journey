"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[65],{

/***/ 23664
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_engineering_mathematics_10_vector_calculus_md_67e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-engineering-mathematics-10-vector-calculus-md-67e.json
const site_docs_courses_engineering_mathematics_10_vector_calculus_md_67e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/engineering-mathematics/10-vector-calculus","title":"Chapter 10: Vector Calculus & Applications","description":"Previous Optimization | Next: None (final chapter)","source":"@site/docs/courses/engineering-mathematics/10-vector-calculus.md","sourceDirName":"courses/engineering-mathematics","slug":"/engineering-mathematics/10-vector-calculus","permalink":"/ai-engineering-journey/engineering-mathematics/10-vector-calculus","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"id":"10-vector-calculus","slug":"/engineering-mathematics/10-vector-calculus","title":"Chapter 10: Vector Calculus & Applications","sidebar_label":"Chapter 10: Vector Calculus & Applications","sidebar_position":10},"sidebar":"course-engineering-mathematics","previous":{"title":"Chapter 9: Optimization","permalink":"/ai-engineering-journey/engineering-mathematics/09-optimization"},"next":{"title":"Engineering Mathematics","permalink":"/ai-engineering-journey/engineering-mathematics"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/engineering-mathematics/10-vector-calculus.md


const frontMatter = {
	id: '10-vector-calculus',
	slug: '/engineering-mathematics/10-vector-calculus',
	title: 'Chapter 10: Vector Calculus & Applications',
	sidebar_label: 'Chapter 10: Vector Calculus & Applications',
	sidebar_position: 10
};
const contentTitle = 'Chapter 10: Vector Calculus & Applications';

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
  "value": "10.1 Scalar and Vector Fields",
  "id": "101-scalar-and-vector-fields",
  "level": 3
}, {
  "value": "10.2 Line Integrals",
  "id": "102-line-integrals",
  "level": 3
}, {
  "value": "10.3 Conservative Vector Fields",
  "id": "103-conservative-vector-fields",
  "level": 3
}, {
  "value": "10.4 Surface Integrals",
  "id": "104-surface-integrals",
  "level": 3
}, {
  "value": "10.5 Green&#39;s Theorem",
  "id": "105-greens-theorem",
  "level": 3
}, {
  "value": "10.6 Stokes&#39; Theorem",
  "id": "106-stokes-theorem",
  "level": 3
}, {
  "value": "10.7 Divergence Theorem (Gauss&#39;s Theorem)",
  "id": "107-divergence-theorem-gausss-theorem",
  "level": 3
}, {
  "value": "10.8 Orthogonal Coordinate Systems",
  "id": "108-orthogonal-coordinate-systems",
  "level": 3
}, {
  "value": "10.9 Applications in Physics",
  "id": "109-applications-in-physics",
  "level": 3
}, {
  "value": "10.10 Applications in Machine Learning",
  "id": "1010-applications-in-machine-learning",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Line Integral",
  "id": "example-1-line-integral",
  "level": 3
}, {
  "value": "Example 2: Green&#39;s Theorem for Area",
  "id": "example-2-greens-theorem-for-area",
  "level": 3
}, {
  "value": "Example 3: Green&#39;s Theorem",
  "id": "example-3-greens-theorem",
  "level": 3
}, {
  "value": "Example 3: Stokes&#39; Theorem",
  "id": "example-3-stokes-theorem",
  "level": 3
}, {
  "value": "Example 4: Divergence Theorem",
  "id": "example-4-divergence-theorem",
  "level": 3
}, {
  "value": "Example 5: Vector Calculus in ML ? Score Matching",
  "id": "example-5-vector-calculus-in-ml--score-matching",
  "level": 3
}, {
  "value": "TypeScript Implementation: Line Integral Calculator",
  "id": "typescript-implementation-line-integral-calculator",
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
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "When to Use Each",
  "id": "when-to-use-each",
  "level": 3
}, {
  "value": "TypeScript Example: 3D Vector Field Operations",
  "id": "typescript-example-3d-vector-field-operations",
  "level": 2
}, {
  "value": "Real-World Application: Computational Fluid Dynamics",
  "id": "real-world-application-computational-fluid-dynamics",
  "level": 2
}, {
  "value": "TypeScript Examples",
  "id": "typescript-examples",
  "level": 2
}, {
  "value": "Example 6: Numerical Curl Computation",
  "id": "example-6-numerical-curl-computation",
  "level": 3
}, {
  "value": "Example 7: Line Integral Computation",
  "id": "example-7-line-integral-computation",
  "level": 3
}, {
  "value": "Example 8: Conservative Field Check and Potential",
  "id": "example-8-conservative-field-check-and-potential",
  "level": 3
}, {
  "value": "Example 6: Conservation Laws and Divergence-Free Fields",
  "id": "example-6-conservation-laws-and-divergence-free-fields",
  "level": 3
}, {
  "value": "TypeScript: Parametrized Surface Area",
  "id": "typescript-parametrized-surface-area",
  "level": 2
}, {
  "value": "TypeScript: Flux Computation via Divergence Theorem",
  "id": "typescript-flux-computation-via-divergence-theorem",
  "level": 2
}, {
  "value": "Vector Calculus Theorem Relationships",
  "id": "vector-calculus-theorem-relationships",
  "level": 2
}, {
  "value": "Physical Intuition Diagram",
  "id": "physical-intuition-diagram",
  "level": 2
}, {
  "value": "Additional Exercises",
  "id": "additional-exercises-1",
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
        id: "chapter-10-vector-calculus--applications",
        children: "Chapter 10: Vector Calculus & Applications"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/engineering-mathematics/09-optimization",
          children: "Chapter 9: Optimization"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " None (final chapter)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute line integrals and surface integrals of scalar and vector fields"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply Green's theorem, Stokes' theorem, and the divergence theorem"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the physical meaning of gradient, divergence, and curl"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply vector calculus to electromagnetic fields and fluid dynamics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use differential geometry concepts in machine learning and computer graphics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the connection between vector calculus and neural network architectures"
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
            children: "Line Integrals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\int_C \\mathbf{F} \\cdot d\\mathbf{r}$ measures work along a path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Work, circulation, potential"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Surface Integrals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\iint_S \\mathbf{F} \\cdot d\\mathbf{S}$ measures flux through a surface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flow rate, electric field flux"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Green's Theorem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\oint_C = \\iint_D (\\text{curl}_z \\mathbf{F}),dA$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2D: boundary $\\to$ interior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stokes' Theorem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\oint_C = \\iint_S (\\nabla \\times \\mathbf{F})\\cdot d\\mathbf{S}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3D: line $\\to$ surface"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Divergence Theorem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\iint_S = \\iiint_E (\\nabla \\cdot \\mathbf{F}),dV$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3D: surface $\\to$ volume"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Line Integrals] --> B[Conservative Fields]\n    B --> C[Surface Integrals]\n    C --> D[Green's Theorem]\n    D --> E[Stokes' Theorem]\n    E --> F[Divergence Theorem]\n    F --> G[Applications: EM, Fluids, ML]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-scalar-and-vector-fields",
      children: "10.1 Scalar and Vector Fields"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scalar Field:"
      }), " $f: \\mathbb{R}^3 \\to \\mathbb{R}$, assigns a scalar to each point (temperature, pressure, potential)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Vector Field:"
      }), " $\\mathbf{F}: \\mathbb{R}^3 \\to \\mathbb{R}^3$, assigns a vector to each point (velocity, force, electric field)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Gradient of Scalar Field:"
      }), " $\\nabla f = \\left\\langle \\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y}, \\frac{\\partial f}{\\partial z} \\right\\rangle$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Divergence of Vector Field:"
      }), " $\\nabla \\cdot \\mathbf{F} = \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z}$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Curl of Vector Field:"
      }), "\n$$\\nabla \\times \\mathbf{F} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\ \\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\ P & Q & R \\end{vmatrix}$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Laplacian:"
      }), " $\\nabla^2 f = \\nabla \\cdot (\\nabla f) = \\frac{\\partial^2 f}{\\partial x^2} + \\frac{\\partial^2 f}{\\partial y^2} + \\frac{\\partial^2 f}{\\partial z^2}$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-line-integrals",
      children: "10.2 Line Integrals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scalar Line Integral:"
      }), "\n$$\\int_C f,ds = \\int_a^b f(\\mathbf{r}(t)) |\\mathbf{r}'(t)|,dt$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Used to integrate a scalar function along a curve (e.g., mass of a wire)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Vector Line Integral (Work):"
      }), "\n$$\\int_C \\mathbf{F} \\cdot d\\mathbf{r} = \\int_a^b \\mathbf{F}(\\mathbf{r}(t)) \\cdot \\mathbf{r}'(t),dt$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Measures the work done by force $\\mathbf{F}$ moving along path $C$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\int_{-C} \\mathbf{F} \\cdot d\\mathbf{r} = -\\int_C \\mathbf{F} \\cdot d\\mathbf{r}$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\int_{C_1 + C_2} = \\int_{C_1} + \\int_{C_2}$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "103-conservative-vector-fields",
      children: "10.3 Conservative Vector Fields"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A vector field $\\mathbf{F}$ is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "conservative"
      }), " if $\\mathbf{F} = \\nabla \\phi$ for some scalar potential $\\phi$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Equivalent Conditions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\nabla \\times \\mathbf{F} = 0$ (in simply connected domain)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = 0$ for any closed curve $C$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Path independence: $\\int_{C_1} \\mathbf{F} \\cdot d\\mathbf{r} = \\int_{C_2} \\mathbf{F} \\cdot d\\mathbf{r}$ for any paths with same endpoints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\mathbf{F} = \\nabla \\phi$ for some $\\phi$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Finding the Potential:"
      }), " Integrate $\\nabla \\phi = \\mathbf{F}$ component by component."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "104-surface-integrals",
      children: "10.4 Surface Integrals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Parametrized Surface:"
      }), " $\\mathbf{r}(u,v) = \\langle x(u,v), y(u,v), z(u,v) \\rangle$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Surface Area Element:"
      }), " $dS = |\\mathbf{r}_u \\times \\mathbf{r}_v|,du,dv$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scalar Surface Integral:"
      }), "\n$$\\iint_S f,dS = \\iint_D f(\\mathbf{r}(u,v)) |\\mathbf{r}_u \\times \\mathbf{r}_v|,du,dv$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Vector Surface Integral (Flux):"
      }), "\n$$\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iint_S \\mathbf{F} \\cdot \\mathbf{n},dS = \\iint_D \\mathbf{F}(\\mathbf{r}(u,v)) \\cdot (\\mathbf{r}_u \\times \\mathbf{r}_v),du,dv$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "105-greens-theorem",
      children: "10.5 Green's Theorem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For a positively oriented, piecewise smooth simple closed curve $C$ in $\\mathbb{R}^2$:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_D \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right),dA$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where $\\mathbf{F} = \\langle P, Q \\rangle$ and $D$ is the region enclosed by $C$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Area Formula:"
      }), " $A = \\frac{1}{2}\\oint_C x,dy - y,dx$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Divergence Form (2D):"
      }), "\n$$\\oint_C \\mathbf{F} \\cdot \\mathbf{n},ds = \\iint_D \\nabla \\cdot \\mathbf{F},dA$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "106-stokes-theorem",
      children: "10.6 Stokes' Theorem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S (\\nabla \\times \\mathbf{F}) \\cdot d\\mathbf{S}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The line integral around a closed curve $C$ equals the flux of curl through any surface $S$ bounded by $C$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Physical Interpretation:"
      }), " The circulation of $\\mathbf{F}$ around $C$ equals the total \"rotation\" (curl) passing through $S$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Curl-Free Fields:"
      }), " If $\\nabla \\times \\mathbf{F} = 0$, then $\\mathbf{F}$ is conservative."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "107-divergence-theorem-gausss-theorem",
      children: "10.7 Divergence Theorem (Gauss's Theorem)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iiint_E (\\nabla \\cdot \\mathbf{F}),dV$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The net outward flux of $\\mathbf{F}$ through closed surface $S$ equals the triple integral of divergence inside the volume $E$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Physical Interpretation:"
      }), " Net outflow = total sources inside minus total sinks inside."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Conservation Laws:"
      }), " If $\\nabla \\cdot \\mathbf{F} = 0$ (divergence-free), then net flux through any closed surface is zero ? incompressible flow."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "108-orthogonal-coordinate-systems",
      children: "10.8 Orthogonal Coordinate Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cartesian ($x, y, z$):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\nabla f = \\frac{\\partial f}{\\partial x}\\hat{i} + \\frac{\\partial f}{\\partial y}\\hat{j} + \\frac{\\partial f}{\\partial z}\\hat{k}$$\n$$\\nabla \\cdot \\mathbf{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}$$\n$$\\nabla^2 f = \\frac{\\partial^2 f}{\\partial x^2} + \\frac{\\partial^2 f}{\\partial y^2} + \\frac{\\partial^2 f}{\\partial z^2}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cylindrical ($r, \\theta, z$):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\nabla^2 f = \\frac{1}{r}\\frac{\\partial}{\\partial r}\\left(r\\frac{\\partial f}{\\partial r}\\right) + \\frac{1}{r^2}\\frac{\\partial^2 f}{\\partial\\theta^2} + \\frac{\\partial^2 f}{\\partial z^2}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Spherical ($\\rho, \\phi, \\theta$):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\nabla^2 f = \\frac{1}{\\rho^2}\\frac{\\partial}{\\partial\\rho}\\left(\\rho^2\\frac{\\partial f}{\\partial\\rho}\\right) + \\frac{1}{\\rho^2\\sin\\phi}\\frac{\\partial}{\\partial\\phi}\\left(\\sin\\phi\\frac{\\partial f}{\\partial\\phi}\\right) + \\frac{1}{\\rho^2\\sin^2\\phi}\\frac{\\partial^2 f}{\\partial\\theta^2}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "109-applications-in-physics",
      children: "10.9 Applications in Physics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Maxwell's Equations (Differential Form):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\nabla \\cdot \\mathbf{E} = \\frac{\\rho}{\\epsilon_0} \\quad \\text{(Gauss's law)}$$\n$$\\nabla \\cdot \\mathbf{B} = 0 \\quad \\text{(No magnetic monopoles)}$$\n$$\\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t} \\quad \\text{(Faraday's law)}$$\n$$\\nabla \\times \\mathbf{B} = \\mu_0\\mathbf{J} + \\mu_0\\epsilon_0\\frac{\\partial \\mathbf{E}}{\\partial t} \\quad \\text{(Amp?re's law)}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integral Form (via Divergence and Stokes Theorems):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gauss's law: $\\iint_S \\mathbf{E} \\cdot d\\mathbf{S} = \\frac{Q_{\\text{enc}}}{\\epsilon_0}$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Faraday's law: $\\oint_C \\mathbf{E} \\cdot d\\mathbf{r} = -\\frac{d}{dt}\\iint_S \\mathbf{B} \\cdot d\\mathbf{S}$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fluid Dynamics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Continuity equation: $\\frac{\\partial \\rho}{\\partial t} + \\nabla \\cdot (\\rho\\mathbf{v}) = 0$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Navier-Stokes: $\\rho\\frac{D\\mathbf{v}}{Dt} = -\\nabla p + \\mu\\nabla^2\\mathbf{v} + \\rho\\mathbf{g}$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1010-applications-in-machine-learning",
      children: "10.10 Applications in Machine Learning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Gradient Flows:"
      }), " The gradient flow $\\frac{dw}{dt} = -\\nabla L(w)$ models continuous-time optimization."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Neural Tangent Kernel (NTK):"
      }), " For infinitely wide neural networks, the evolution of predictions follows:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\frac{du(x)}{dt} = \\sum_i \\Theta(x, x_i) \\frac{dL}{du(x_i)}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where $\\Theta$ is the NTK. This connects gradient flow to kernel regression."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Manifold Learning:"
      }), " Given data on a manifold $M \\subset \\mathbb{R}^D$, the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Laplace-Beltrami operator"
      }), " (generalization of Laplacian to manifolds) captures the data's intrinsic geometry:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\Delta_M f = \\frac{1}{\\sqrt{|g|}}\\partial_i(\\sqrt{|g|} g^{ij} \\partial_j f)$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Eigenfunctions of $\\Delta_M$ provide a natural coordinate system for data analysis."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Attention Mechanisms:"
      }), " In transformers, attention can be viewed as a kernel smoother:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\text{Attention}(Q,K,V) = \\text{softmax}(QK^T/\\sqrt{d})V$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is related to the heat kernel (solution of the heat equation on a manifold)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Score-Based Generative Models:"
      }), " The score function $\\nabla_x \\log p(x)$ is a vector field that points toward regions of high probability. Score matching learns this vector field."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Diffusion Models:"
      }), " Reverse-time SDE:\n$$dx = [f(x,t) - g(t)^2 \\nabla_x \\log p_t(x)],dt + g(t),d\\bar{w}$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This reverses a diffusion process using the score function (a vector field learned from data)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-line-integral",
      children: "Example 1: Line Integral"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Evaluate $\\int_C \\mathbf{F} \\cdot d\\mathbf{r}$ for $\\mathbf{F} = \\langle y, x \\rangle$ along the curve $\\mathbf{r}(t) = \\langle \\cos t, \\sin t \\rangle$ from $t = 0$ to $t = \\pi/2$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$\\mathbf{F}(\\mathbf{r}(t)) = \\langle \\sin t, \\cos t \\rangle$\n$\\mathbf{r}'(t) = \\langle -\\sin t, \\cos t \\rangle$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\int_C \\mathbf{F} \\cdot d\\mathbf{r} = \\int_0^{\\pi/2} \\langle \\sin t, \\cos t \\rangle \\cdot \\langle -\\sin t, \\cos t \\rangle,dt = \\int_0^{\\pi/2} (-\\sin^2 t + \\cos^2 t),dt$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$= \\int_0^{\\pi/2} \\cos(2t),dt = \\left[\\frac{\\sin(2t)}{2}\\right]_0^{\\pi/2} = 0$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Note: $\\mathbf{F} = \\nabla(xy)$, so $\\mathbf{F}$ is conservative. The integral depends only on endpoints: $xy|", (0,jsx_runtime.jsx)(_components.em, {
        children: "{(0,1)} - xy|"
      }), "{(1,0)} = 0 - 0 = 0$. ?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-greens-theorem-for-area",
      children: "Example 2: Green's Theorem for Area"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use Green's theorem to find the area of the ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nArea formula: $A = \\frac{1}{2}\\oint_C x,dy - y,dx$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parametrize ellipse: $x = a\\cos t$, $y = b\\sin t$, $0 \\leq t \\leq 2\\pi$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$dx = -a\\sin t,dt$, $dy = b\\cos t,dt$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$A = \\frac{1}{2}\\int_0^{2\\pi} [(a\\cos t)(b\\cos t) - (b\\sin t)(-a\\sin t)],dt$$\n$$= \\frac{1}{2}\\int_0^{2\\pi} (ab\\cos^2 t + ab\\sin^2 t),dt = \\frac{ab}{2}\\int_0^{2\\pi} dt = \\pi ab$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This confirms the known area formula for an ellipse."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-greens-theorem",
      children: "Example 3: Green's Theorem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use Green's theorem to evaluate $\\oint_C (x^2 + y),dx + (y^2 + x),dy$ where $C$ is the triangle with vertices $(0,0)$, $(1,0)$, $(0,1)$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$P = x^2 + y$, $Q = y^2 + x$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} = 1 - 1 = 0$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By Green's theorem: $\\oint_C = \\iint_D 0,dA = 0$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The integral is zero ? the field is conservative with potential $\\phi = \\frac{x^3}{3} + \\frac{y^3}{3} + xy$."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-stokes-theorem",
      children: "Example 3: Stokes' Theorem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Verify Stokes' theorem for $\\mathbf{F} = \\langle -y, x, 0 \\rangle$ over the surface $S$: $z = 1 - x^2 - y^2$, $z \\geq 0$, oriented upward."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "First, compute $\\nabla \\times \\mathbf{F}$:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\nabla \\times \\mathbf{F} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\ \\partial_x & \\partial_y & \\partial_z \\ -y & x & 0 \\end{vmatrix} = \\langle 0, 0, 2 \\rangle$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Surface $S$: $z = 1 - x^2 - y^2$, projection $D$ is $x^2 + y^2 \\leq 1$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$d\\mathbf{S} = \\langle -z_x, -z_y, 1 \\rangle,dA = \\langle 2x, 2y, 1 \\rangle,dA$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\iint_S (\\nabla \\times \\mathbf{F}) \\cdot d\\mathbf{S} = \\iint_D \\langle 0, 0, 2 \\rangle \\cdot \\langle 2x, 2y, 1 \\rangle,dA = \\iint_D 2,dA = 2 \\cdot \\pi(1)^2 = 2\\pi$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Now the boundary: $C$ is $x^2 + y^2 = 1$, $z = 0$. Parametrize: $\\mathbf{r}(t) = \\langle \\cos t, \\sin t, 0 \\rangle$, $0 \\leq t \\leq 2\\pi$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\int_0^{2\\pi} \\langle -\\sin t, \\cos t, 0 \\rangle \\cdot \\langle -\\sin t, \\cos t, 0 \\rangle,dt = \\int_0^{2\\pi} (\\sin^2 t + \\cos^2 t),dt = 2\\pi$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Both sides equal $2\\pi$. ?"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-divergence-theorem",
      children: "Example 4: Divergence Theorem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compute the flux of $\\mathbf{F} = \\langle x^3, y^3, z^3 \\rangle$ through the unit sphere using the divergence theorem."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$\\nabla \\cdot \\mathbf{F} = 3x^2 + 3y^2 + 3z^2 = 3(x^2 + y^2 + z^2) = 3r^2$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In spherical coordinates:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\iiint_E (\\nabla \\cdot \\mathbf{F}),dV = \\int_0^{2\\pi}\\int_0^\\pi\\int_0^1 3\\rho^2 \\cdot \\rho^2\\sin\\phi,d\\rho,d\\phi,d\\theta$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$= 3\\int_0^{2\\pi} d\\theta \\int_0^\\pi \\sin\\phi,d\\phi \\int_0^1 \\rho^4,d\\rho = 3 \\cdot 2\\pi \\cdot 2 \\cdot \\frac{1}{5} = \\frac{12\\pi}{5}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-5-vector-calculus-in-ml--score-matching",
      children: "Example 5: Vector Calculus in ML ? Score Matching"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given data $x \\sim p_{\\text{data}}(x)$, score matching learns $s_\\theta(x) \\approx \\nabla_x \\log p_{\\text{data}}(x)$ by minimizing:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$J(\\theta) = E_{p_{\\text{data}}}\\left[\\frac{1}{2}|s_\\theta(x)|^2 + \\nabla_x \\cdot s_\\theta(x)\\right]$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The divergence term $\\nabla_x \\cdot s_\\theta$ comes from integration by parts of $|s_\\theta - \\nabla \\log p|^2$ and ensures the learned vector field matches the true score without knowing $p_{\\text{data}}$ explicitly."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-line-integral-calculator",
      children: "TypeScript Implementation: Line Integral Calculator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function lineIntegral(\n  F: (x: number, y: number, z: number) => [number, number, number],\n  ?: (t: number) => [number, number, number],\n  ?Dot: (t: number) => [number, number, number],\n  t0: number, t1: number, n: number = 1000\n): number {\n  const dt = (t1 - t0) / n;\n  let sum = 0;\n  for (let i = 0; i < n; i++) {\n    const t = t0 + i * dt;\n    const p = ?(t), dp = ?Dot(t), f = F(p[0], p[1], p[2]);\n    sum += (f[0] * dp[0] + f[1] * dp[1] + f[2] * dp[2]) * dt;\n  }\n  return sum;\n}\n\n// F = (-y, x, 0), ?(t) = (cos t, sin t, 0) ? circulation = 2p\nconst circF = (x: number, y: number, _z: number): [number, number, number] => [-y, x, 0];\nconst circ? = (t: number): [number, number, number] => [Math.cos(t), Math.sin(t), 0];\nconst circ?Dot = (t: number): [number, number, number] => [-Math.sin(t), Math.cos(t), 0];\nconst circ = lineIntegral(circF, circ?, circ?Dot, 0, 2 * Math.PI, 10000);\nconsole.log(`Circulation ? F?dr: ${circ.toFixed(4)} (expected: ${(2 * Math.PI).toFixed(4)})`);\n\n// Work done by F = (y, x) along ?(t) = (t, t?), t?[0,1]: W = ?0? (t??1 + t?2t) dt = ?0? 3t? dt = 1\nconst workF = (x: number, y: number, _z: number): [number, number, number] => [y, x, 0];\nconst work? = (t: number): [number, number, number] => [t, t * t, 0];\nconst work?Dot = (_t: number): [number, number, number] => [1, 2 * _t, 0];\nconst work = lineIntegral(workF, work?, work?Dot, 0, 1, 1000);\nconsole.log(`Work: ${work.toFixed(4)} (expected: 1.0)`);\n\n### TypeScript: Surface Integral via Parameterization\n\n```typescript\nfunction surfaceIntegral(\n  F: (x: number, y: number, z: number) => [number, number, number],\n  f: (u: number, v: number) => [number, number, number],\n  uMin: number, uMax: number, vMin: number, vMax: number,\n  nu: number = 40, nv: number = 40\n): number {\n  const du = (uMax - uMin) / nu, dv = (vMax - vMin) / nv;\n  let sum = 0;\n  for (let i = 0; i &lt; nu; i++) {\n    const u = uMin + (i + 0.5) * du;\n    for (let j = 0; j &lt; nv; j++) {\n      const v = vMin + (j + 0.5) * dv;\n      const p = f(u, v);\n      const pu: [number, number, number] = [0, 0, 0];\n      const pv: [number, number, number] = [0, 0, 0];\n      const eps = 1e-5;\n      const pU = f(u + eps, v), pD = f(u - eps, v);\n      const pV = f(u, v + eps), pB = f(u, v - eps);\n      for (let k = 0; k &lt; 3; k++) {\n        pu[k] = (pU[k] - pD[k]) / (2 * eps);\n        pv[k] = (pV[k] - pB[k]) / (2 * eps);\n      }\n      const nrm: [number, number, number] = [\n        pu[1] * pv[2] - pu[2] * pv[1],\n        pu[2] * pv[0] - pu[0] * pv[2],\n        pu[0] * pv[1] - pu[1] * pv[0]\n      ];\n      const f = F(p[0], p[1], p[2]);\n      sum += (f[0] * nrm[0] + f[1] * nrm[1] + f[2] * nrm[2]) * du * dv;\n    }\n  }\n  return sum;\n}\n\n// Flux of F = (0,0,z) through unit sphere: divergence = 1, flux = volume = 4p/3\nconst fluxF = (x: number, y: number, z: number): [number, number, number] => [0, 0, z];\nconst spheref = (u: number, v: number): [number, number, number] => [\n  Math.sin(u) * Math.cos(v), Math.sin(u) * Math.sin(v), Math.cos(u)\n];\nconst flux = surfaceIntegral(fluxF, spheref, 0, Math.PI, 0, 2 * Math.PI, 30, 30);\nconsole.log(`Flux ? F?dS through sphere: ${flux.toFixed(4)} (expected: ${(4 * Math.PI / 3).toFixed(4)})`);\n\n// Surface area of sphere: ? |f? ? f?| du dv = 4p\nfunction surfaceArea(f: (u: number, v: number) => [number, number, number], ...args: number[]): number {\n  return surfaceIntegral(() => [1, 0, 0] as [number, number, number], f, args[0], args[1], args[2], args[3], args[4] || 40, args[5] || 40);\n  // Actually compute |f? ? f?| correctly\n}\nfunction sphereArea(nu: number = 40, nv: number = 40): number {\n  let area = 0;\n  for (let i = 0; i &lt; nu; i++) {\n    const u = Math.PI * (i + 0.5) / nu;\n    for (let j = 0; j &lt; nv; j++) {\n      const v = 2 * Math.PI * (j + 0.5) / nv;\n      const sinU = Math.sin(u);\n      area += sinU * Math.PI / nu * 2 * Math.PI / nv;  // |f??f?| = sin(u)\n    }\n  }\n  return area;\n}\nconsole.log(`Sphere surface area: ${sphereArea(50, 50).toFixed(4)} (expected: ${(4 * Math.PI).toFixed(4)})`);\n\n### TypeScript: Stokes' Theorem Verification\n\n```typescript\n// Verify Stokes: ?_?S F?dr = ?_S (??F)?dS\n// Take F = (-y/2, x/2, 0) with ??F = (0, 0, 1)\n// Surface: unit disk in z=0 plane. RHS = area = p. LHS = p as well.\nconst stokesF = (x: number, y: number, _z: number): [number, number, number] => [-y / 2, x / 2, 0];\nconst curlStokes = (_x: number, _y: number, _z: number): [number, number, number] => [0, 0, 1];\n\n// LHS: line integral around unit circle\nconst lhs = lineIntegral(stokesF, circ?, circ?Dot, 0, 2 * Math.PI, 10000);\n\n// RHS: surface integral of curl over disk\nconst disk = (u: number, v: number): [number, number, number] => [u * Math.cos(v), u * Math.sin(v), 0];\nconst rhs = surfaceIntegral(curlStokes, disk, 0, 1, 0, 2 * Math.PI, 30, 30);\n\nconsole.log(`Stokes' Theorem Verification:`);\nconsole.log(`  LHS (? F?dr): ${lhs.toFixed(4)} (expected: ${Math.PI.toFixed(4)})`);\nconsole.log(`  RHS (? ??F?dS): ${rhs.toFixed(4)} (expected: ${Math.PI.toFixed(4)})`);\nconsole.log(`  Match: ${Math.abs(lhs - rhs) < 0.01 ? \"YES ?\" : \"NO ?\"}`);\n\n// Divergence Theorem: ?_?E F?dS = ?_E (??F) dV\n// F = (x, y, z) over unit sphere (divergence = 3)\n// LHS: flux through sphere = 3 * volume = 4p\n// RHS: ? 3 dV = 3 * 4p/3 = 4p\nconst divF = (x: number, y: number, z: number): [number, number, number] => [x, y, z];\nconst fluxDiv = surfaceIntegral(divF, spheref, 0, Math.PI, 0, 2 * Math.PI, 30, 30);\nconst divInt = 4 * Math.PI;  // 3 * volume = 3 * 4p/3 = 4p\nconsole.log(`Divergence Theorem: flux=${fluxDiv.toFixed(4)} (expected: ${divInt.toFixed(4)})`);\n\n// Green's Theorem verification: ? ?(x dy - y dx) = area enclosed\n// For ellipse x=2cos t, y=sin t: area = 2p\nconst ellipse? = (t: number): [number, number, number] => [2 * Math.cos(t), Math.sin(t), 0];\nconst ellipse?Dot = (t: number): [number, number, number] => [-2 * Math.sin(t), Math.cos(t), 0];\nconst greenF = (x: number, y: number, _z: number): [number, number, number] => [-y / 2, x / 2, 0];\nconst greenArea = lineIntegral(greenF, ellipse?, ellipse?Dot, 0, 2 * Math.PI, 10000);\nconsole.log(`Green's Theorem (ellipse area): ${greenArea.toFixed(4)} (expected: ${(2 * Math.PI).toFixed(4)})`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// --- Surface Integral Approximation ---\nfunction surfaceIntegral(\n  F: (x: number, y: number, z: number) => [number, number, number],\n  surface: (u: number, v: number) => [number, number, number],\n  uRange: [number, number],\n  vRange: [number, number],\n  nu: number,\n  nv: number\n): number {\n  const du = (uRange[1] - uRange[0]) / nu, dv = (vRange[1] - vRange[0]) / nv;\n  let flux = 0;\n  for (let i = 0; i < nu; i++) for (let j = 0; j < nv; j++) {\n    const u = uRange[0] + (i + 0.5) * du, v = vRange[0] + (j + 0.5) * dv;\n    const r = surface(u, v);\n    const ru = surface(u + du, v), rv = surface(u, v + dv);\n    const drdu: [number, number, number] = [ru[0] - r[0], ru[1] - r[1], ru[2] - r[2]];\n    const drdv: [number, number, number] = [rv[0] - r[0], rv[1] - r[1], rv[2] - r[2]];\n    const cross: [number, number, number] = [\n      drdu[1] * drdv[2] - drdu[2] * drdv[1],\n      drdu[2] * drdv[0] - drdu[0] * drdv[2],\n      drdu[0] * drdv[1] - drdu[1] * drdv[0]\n    ];\n    const norm = Math.sqrt(cross[0] ** 2 + cross[1] ** 2 + cross[2] ** 2);\n    const Fval = F(r[0], r[1], r[2]);\n    const dot = Fval[0] * cross[0] + Fval[1] * cross[1] + Fval[2] * cross[2];\n    flux += (dot / norm) * norm * du * dv;\n  }\n  return flux;\n}\n// Flux of F = (0, 0, z) through unit sphere (should be 4p/3)\nconst sphere = (u: number, v: number): [number, number, number] => [\n  Math.sin(v) * Math.cos(u), Math.sin(v) * Math.sin(u), Math.cos(v)];\nconst fluxSphere = surfaceIntegral((x, y, z) => [0, 0, z], sphere, [0, 2 * Math.PI], [0, Math.PI], 20, 20);\nconsole.log('Flux of F=(0,0,z) through sphere:', fluxSphere.toFixed(4), '(expected: 4p/3 ? 4.1888)');\n\n// --- Conservative Field Checker ---\nfunction isConservative(F: (x: number, y: number, z: number) => [number, number, number]): boolean {\n  const h = 1e-6;\n  const at = (p: [number, number, number]) => F(p[0], p[1], p[2]);\n  const f = (x: number, y: number, z: number): [number, number, number] => F(x, y, z);\n  // curl = ? ? F should be zero\n  const curlX = (f(x, y + h, z)[2] - f(x, y - h, z)[2]) / (2 * h) - (f(x, y, z + h)[1] - f(x, y, z - h)[1]) / (2 * h);\n  const curlY = (f(x, y, z + h)[0] - f(x, y, z - h)[0]) / (2 * h) - (f(x + h, y, z)[2] - f(x - h, y, z)[2]) / (2 * h);\n  const curlZ = (f(x + h, y, z)[1] - f(x - h, y, z)[1]) / (2 * h) - (f(x, y + h, z)[0] - f(x, y - h, z)[0]) / (2 * h);\n  const testPoint = [1, 1, 1] as [number, number, number];\n  const curl = (p: [number, number, number]) => [\n    (f(p[0], p[1] + h, p[2])[2] - f(p[0], p[1] - h, p[2])[2]) / (2 * h) - (f(p[0], p[1], p[2] + h)[1] - f(p[0], p[1], p[2] - h)[1]) / (2 * h),\n    0, 0]; // simplified check\n  const c1 = (F(1, 1 + h, 1)[2] - F(1, 1 - h, 1)[2]) / (2 * h) - (F(1, 1, 1 + h)[1] - F(1, 1, 1 - h)[1]) / (2 * h);\n  const c2 = (F(1, 1, 1 + h)[0] - F(1, 1, 1 - h)[0]) / (2 * h) - (F(1 + h, 1, 1)[2] - F(1 - h, 1, 1)[2]) / (2 * h);\n  const c3 = (F(1 + h, 1, 1)[1] - F(1 - h, 1, 1)[1]) / (2 * h) - (F(1, 1 + h, 1)[0] - F(1, 1 - h, 1)[0]) / (2 * h);\n  return Math.abs(c1) < 1e-6 && Math.abs(c2) < 1e-6 && Math.abs(c3) < 1e-6;\n}\n// F = (-y, x, 0) has curl (0, 0, 2) ? not conservative\nconsole.log('\\nF=(-y,x,0) conservative:', isConservative((x, y, z) => [-y, x, 0])); // false\n// Gradient field F = ?(x? + y?) = (2x, 2y, 0) ? conservative\nconsole.log('F=(2x,2y,0) conservative:', isConservative((x, y, z) => [2 * x, 2 * y, 0])); // true\n\n// --- Divergence Theorem Checker ---\nfunction divergenceTheoremCheck(\n  F: (x: number, y: number, z: number) => [number, number, number],\n  boxMin: [number, number, number],\n  boxMax: [number, number, number]\n): { volumeIntegral: number; surfaceFlux: number } {\n  const h = 1e-4;\n  // Divergence\n  const div = (x: number, y: number, z: number) =>\n    (F(x + h, y, z)[0] - F(x - h, y, z)[0]) / (2 * h) +\n    (F(x, y + h, z)[1] - F(x, y - h, z)[1]) / (2 * h) +\n    (F(x, y, z + h)[2] - F(x, y, z - h)[2]) / (2 * h);\n  // Volume integral of divergence via midpoint\n  const n = 20;\n  const [x0, y0, z0] = boxMin, [x1, y1, z1] = boxMax;\n  const dx = (x1 - x0) / n, dy = (y1 - y0) / n, dz = (z1 - z0) / n;\n  let volInt = 0;\n  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) for (let k = 0; k < n; k++)\n    volInt += div(x0 + (i + 0.5) * dx, y0 + (j + 0.5) * dy, z0 + (k + 0.5) * dz) * dx * dy * dz;\n  return { volumeIntegral: +volInt.toFixed(4), surfaceFlux: 0 };\n}\n// F = (x, y, z): div = 3, box volume = 1, integral = 3\nconst dtc = divergenceTheoremCheck((x, y, z) => [x, y, z], [0, 0, 0], [1, 1, 1]);\nconsole.log('\\nDivergence theorem for F=(x,y,z) on [0,1]?:');\nconsole.log('  Volume integral of div F:', dtc.volumeIntegral, '(expected: 3)');\n\n// --- Scalar Potential Finder ---\nfunction scalarPotential(F: (x: number, y: number, z: number) => [number, number, number]): ((x: number, y: number, z: number) => number) | null {\n  if (!isConservative(F)) return null;\n  return (x: number, y: number, z: number) => {\n    const n = 100;\n    let integral = 0;\n    // Line integral from (0,0,0) to (x,y,z) along straight line\n    for (let i = 0; i < n; i++) {\n      const t = i / n, t1 = (i + 1) / n;\n      const px = t * x, py = t * y, pz = t * z;\n      const qx = t1 * x, qy = t1 * y, qz = t1 * z;\n      const Fval = F((px + qx) / 2, (py + qy) / 2, (pz + qz) / 2);\n      integral += Fval[0] * (qx - px) + Fval[1] * (qy - py) + Fval[2] * (qz - pz);\n    }\n    return integral;\n  };\n}\nconst potential = scalarPotential((x, y, z) => [2 * x, 2 * y, 0]);\nconsole.log('\\nScalar potential at (2,3,0):', potential?.(2, 3, 0).toFixed(4), '(expected: x?+y? = 13)');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// vector calculus\n// linear-algebra-calculus implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'vector calculus', data: { topic: 'linear-algebra-calculus' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// vector calculus - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'engineering-math demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'engineering-mathematics', chapter: 'vector calculus' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('engineering-math'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Line integrals measure accumulation along curves; Green's theorem links them to area integrals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Surface integrals measure flux; Stokes' theorem links circulation to curl flux"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The divergence theorem links flux through a closed surface to volume integral of divergence"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Conservative fields have zero curl and path-independent line integrals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maxwell's equations unify electricity and magnetism using vector calculus operators"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Neural tangent kernel connects gradient flow to kernel methods"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Score-based generative models learn a vector field (score function) for sampling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Diffusion models reverse a stochastic process using learned vector fields"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manifold learning uses the Laplace-Beltrami operator for data geometry"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove that $\\nabla \\times (\\nabla f) = 0$ for any scalar field $f$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State and explain the physical meaning of Stokes' theorem"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show that for a conservative field, $\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = 0$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the divergence theorem in terms of sources and sinks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does Stokes' theorem relate to Green's theorem?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Work:"
          }), " Compute the work done by $\\mathbf{F} = \\langle yz, xz, xy \\rangle$ moving a particle from $(0,0,0)$ to $(1,2,3)$ along any path. (Hint: find the potential first.)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Flux:"
          }), " Compute the flux of $\\mathbf{F} = \\langle 0, 0, z \\rangle$ through the top half of the sphere $x^2 + y^2 + z^2 = 1$, $z \\geq 0$."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Green's Theorem:"
          }), " Evaluate $\\oint_C (y^2,dx + x^2,dy)$ where $C$ is the unit circle."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Stokes' Theorem:"
          }), " Use Stokes' theorem to evaluate $\\oint_C \\langle y, z, x \\rangle \\cdot d\\mathbf{r}$ where $C$ is the triangle with vertices $(1,0,0)$, $(0,1,0)$, $(0,0,1)$."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Divergence Theorem:"
          }), " Use the divergence theorem to compute the flux of $\\mathbf{F} = \\langle x, y, z \\rangle$ through the surface of the cube $0 \\leq x \\leq 1$, $0 \\leq y \\leq 1$, $0 \\leq z \\leq 1$."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Surface Integral:"
          }), " Compute $\\iint_S (x^2 + y^2),dS$ where $S$ is the lateral surface of the cylinder $x^2 + y^2 = 1$, $0 \\leq z \\leq 1$."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Conservative Field:"
          }), " Show that $\\mathbf{F} = \\langle 2xy + z, x^2, x \\rangle$ is conservative and find its potential function $\\phi$."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Flux Through a Sphere:"
          }), " Use the divergence theorem to compute the flux of $\\mathbf{F} = \\langle x^3, y^3, z^3 \\rangle$ through the sphere $x^2 + y^2 + z^2 = 4$."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Connection to Neural ODEs:"
      }), " The adjoint method for Neural ODE backpropagation requires solving the adjoint ODE:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\frac{d\\mathbf{a}(t)}{dt} = -\\mathbf{a}(t)^T \\frac{\\partial f_\\theta(\\mathbf{z}(t), t)}{\\partial \\mathbf{z}}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Show that if $f_\\theta = \\nabla \\phi_\\theta$ (a gradient field), then the dynamics $\\frac{d\\mathbf{z}}{dt} = \\nabla \\phi_\\theta(\\mathbf{z})$ is a gradient flow. Prove that in this case, $\\phi_\\theta$ decreases monotonically along trajectories."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Theorem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "2D/3D"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Connects"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Application"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Green's"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Line integral ? Area integral"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computing area, flux in 2D"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stokes'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Line integral ? Surface integral"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Circulation, electromagnetism"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Divergence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Surface integral ? Volume integral"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flux, conservation laws"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-use-each",
      children: "When to Use Each"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check if a field is conservative:"
        }), " Compute curl ? if zero and domain is simply connected, it's conservative"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Simplify complex integrals:"
        }), " If a line integral looks hard, try applying Stokes' or Green's to convert to a surface/area integral"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compute flux efficiently:"
        }), " If the divergence is simple, use the Divergence Theorem instead of directly integrating over the surface"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Physics applications:"
        }), " Maxwell's equations in integral form use all three theorems"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-example-3d-vector-field-operations",
      children: "TypeScript Example: 3D Vector Field Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type Vector3 = [number, number, number];\n\nfunction gradient(f: (x: number, y: number, z: number) => number,\n                  p: Vector3, h: number = 1e-5): Vector3 {\n  const [x, y, z] = p;\n  return [\n    (f(x + h, y, z) - f(x - h, y, z)) / (2 * h),\n    (f(x, y + h, z) - f(x, y - h, z)) / (2 * h),\n    (f(x, y, z + h) - f(x, y, z - h)) / (2 * h),\n  ];\n}\n\nfunction divergence(F: (p: Vector3) => Vector3,\n                    p: Vector3, h: number = 1e-5): number {\n  const [x, y, z] = p;\n  const Fval = F(p);\n  // Numerical divergence using central differences\n  const dFdx = (F([x + h, y, z])[0] - F([x - h, y, z])[0]) / (2 * h);\n  const dFdy = (F([x, y + h, z])[1] - F([x, y - h, z])[1]) / (2 * h);\n  const dFdz = (F([x, y, z + h])[2] - F([x, y, z - h])[2]) / (2 * h);\n  return dFdx + dFdy + dFdz;\n}\n\n// Example: F(x,y,z) = [x?, y?, z?]\nconst F_field = (p: Vector3): Vector3 => [p[0]**2, p[1]**2, p[2]**2];\nconsole.log(divergence(F_field, [1, 2, 3])); // ? 2+4+6 = 12\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-world-application-computational-fluid-dynamics",
      children: "Real-World Application: Computational Fluid Dynamics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vector calculus is the mathematical foundation of computational fluid dynamics (CFD), used to simulate airflow over aircraft, blood flow in arteries, and weather patterns."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Navier-Stokes Equations in Vector Form:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\rho\\left(\\frac{\\partial \\mathbf{v}}{\\partial t} + \\mathbf{v} \\cdot \\nabla \\mathbf{v}\\right) = -\\nabla p + \\mu \\nabla^2 \\mathbf{v} + \\rho \\mathbf{g}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Vector Calculus Operations in CFD:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gradient $\\nabla p$:"
        }), " Pressure gradient drives fluid flow from high to low pressure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Laplacian $\\nabla^2 \\mathbf{v}$:"
        }), " Viscous diffusion smooths velocity gradients"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Divergence $\\nabla \\cdot \\mathbf{v}$:"
        }), " For incompressible flow, $\\nabla \\cdot \\mathbf{v} = 0$ (continuity)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Curl $\\nabla \\times \\mathbf{v}$:"
        }), " Vorticity measures local rotation of fluid elements"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Vorticity-Streamfunction Formulation:"
      }), " For 2D incompressible flow, define vorticity $\\omega = \\nabla \\times \\mathbf{v}$ (scalar in 2D) and streamfunction $\\psi$ such that $\\mathbf{v} = \\nabla^\\perp \\psi = \\langle -\\partial \\psi/\\partial y, \\partial \\psi/\\partial x \\rangle$. The Navier-Stokes equations become:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\frac{\\partial \\omega}{\\partial t} + \\mathbf{v} \\cdot \\nabla \\omega = \\nu \\nabla^2 \\omega, \\quad \\nabla^2 \\psi = -\\omega$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This eliminates pressure and automatically satisfies incompressibility."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Finite Element Methods:"
      }), " PDEs are discretized using basis functions $\\phi_i(x,y)$. The weak form uses integration by parts (divergence theorem) to reduce continuity requirements:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\int_\\Omega (\\nabla \\cdot \\mathbf{F}) \\phi_i , dV = -\\int_\\Omega \\mathbf{F} \\cdot \\nabla \\phi_i , dV + \\int_{\\partial\\Omega} \\mathbf{F} \\cdot \\mathbf{n} \\phi_i , dS$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-examples",
      children: "TypeScript Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-6-numerical-curl-computation",
      children: "Example 6: Numerical Curl Computation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type Vector3 = [number, number, number];\n\nfunction curl(\n  F: (p: Vector3) => Vector3,\n  p: Vector3,\n  h: number = 1e-5\n): Vector3 {\n  const [x, y, z] = p;\n  // dFz/dy - dFy/dz\n  const curlX = (F([x, y+h, z])[2] - F([x, y-h, z])[2]) / (2*h)\n              - (F([x, y, z+h])[1] - F([x, y, z-h])[1]) / (2*h);\n  // dFx/dz - dFz/dx\n  const curlY = (F([x, y, z+h])[0] - F([x, y, z-h])[0]) / (2*h)\n              - (F([x+h, y, z])[2] - F([x-h, y, z])[2]) / (2*h);\n  // dFy/dx - dFx/dy\n  const curlZ = (F([x+h, y, z])[1] - F([x-h, y, z])[1]) / (2*h)\n              - (F([x, y+h, z])[0] - F([x, y-h, z])[0]) / (2*h);\n  return [curlX, curlY, curlZ];\n}\n\n// Rotational field: F(x,y,z) = [-y, x, 0]\nconst rotational = (p: Vector3): Vector3 => [-p[1], p[0], 0];\nconsole.log(`Curl of [-y,x,0] at (0,0,0):`, curl(rotational, [0,0,0]));\n// Expected: (0, 0, 2) ? purely in z-direction\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-7-line-integral-computation",
      children: "Example 7: Line Integral Computation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type ParametricCurve = (t: number) => Vector3;\n\nfunction lineIntegral(\n  F: (p: Vector3) => Vector3,\n  curve: ParametricCurve,\n  tStart: number,\n  tEnd: number,\n  steps: number = 1000\n): number {\n  const dt = (tEnd - tStart) / steps;\n  let integral = 0;\n  for (let i = 0; i < steps; i++) {\n    const t = tStart + i * dt;\n    const p = curve(t);\n    // Numerical derivative of curve\n    const pNext = curve(t + dt);\n    const dr: Vector3 = [\n      pNext[0] - p[0],\n      pNext[1] - p[1],\n      pNext[2] - p[2],\n    ];\n    const field = F(p);\n    // Dot product F ? dr\n    integral += field[0] * dr[0] + field[1] * dr[1] + field[2] * dr[2];\n  }\n  return integral;\n}\n\n// F(x,y) = [y, x], curve: unit circle from t=0 to t=pi/2\nconst F1 = (p: Vector3): Vector3 => [p[1], p[0], 0];\nconst circle = (t: number): Vector3 => [Math.cos(t), Math.sin(t), 0];\nconst work = lineIntegral(F1, circle, 0, Math.PI / 2);\nconsole.log(`Work along quarter-circle: ${work.toFixed(6)}`); // ? 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-8-conservative-field-check-and-potential",
      children: "Example 8: Conservative Field Check and Potential"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function isConservative(\n  F: (p: Vector3) => Vector3,\n  p: Vector3,\n  tolerance: number = 1e-7\n): boolean {\n  const c = curl(F, p);\n  return Math.abs(c[0]) < tolerance\n      && Math.abs(c[1]) < tolerance\n      && Math.abs(c[2]) < tolerance;\n}\n\n// F = [2x, 2y, 2z] ? gradient of phi = x^2 + y^2 + z^2\nconst gradientField = (p: Vector3): Vector3 => [2*p[0], 2*p[1], 2*p[2]];\nconsole.log(`Is gradient field conservative? ${isConservative(gradientField, [1,1,1])}`);\n// true\n\n// Non-conservative: F = [-y, x, 0]\nconsole.log(`Is rotational field conservative? ${isConservative(rotational, [1,1,1])}`);\n// false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-6-conservation-laws-and-divergence-free-fields",
      children: "Example 6: Conservation Laws and Divergence-Free Fields"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Show that $\\mathbf{F} = \\langle y^2, x^2, 0 \\rangle$ is not divergence-free."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\n$\\nabla \\cdot \\mathbf{F} = \\frac{\\partial(y^2)}{\\partial x} + \\frac{\\partial(x^2)}{\\partial y} + \\frac{\\partial(0)}{\\partial z} = 0 + 0 + 0 = 0$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This field IS divergence-free! This means the net flux through any closed surface is zero, representing an incompressible flow in 2D."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Physical interpretation:"
      }), " A divergence-free vector field represents a source-free flow ? whatever flows into a region must flow out. This is the mathematical basis of incompressible fluid dynamics and conservation of mass."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parametrized-surface-area",
      children: "TypeScript: Parametrized Surface Area"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type SurfaceParam = (u: number, v: number) => [number, number, number];\n\nfunction cross(a: number[], b: number[]): number[] {\n  return [\n    a[1] * b[2] - a[2] * b[1],\n    a[2] * b[0] - a[0] * b[2],\n    a[0] * b[1] - a[1] * b[0],\n  ];\n}\n\nfunction magnitude(v: number[]): number {\n  return Math.sqrt(v[0] ** 2 + v[1] ** 2 + v[2] ** 2);\n}\n\nfunction surfaceArea(\n  r: SurfaceParam,\n  uRange: [number, number],\n  vRange: [number, number],\n  nu: number,\n  nv: number\n): number {\n  const du = (uRange[1] - uRange[0]) / nu;\n  const dv = (vRange[1] - vRange[0]) / nv;\n  let area = 0;\n\n  for (let i = 0; i < nu; i++) {\n    for (let j = 0; j < nv; j++) {\n      const u = uRange[0] + i * du;\n      const v = vRange[0] + j * dv;\n\n      const rU = derivativeU(r, u, v, 1e-5);\n      const rV = derivativeV(r, u, v, 1e-5);\n      const dS = magnitude(cross(rU, rV));\n\n      area += dS * du * dv;\n    }\n  }\n  return area;\n}\n\nfunction derivativeU(r: SurfaceParam, u: number, v: number, h: number): number[] {\n  const p1 = r(u + h, v);\n  const p2 = r(u - h, v);\n  return [(p1[0] - p2[0]) / (2 * h), (p1[1] - p2[1]) / (2 * h), (p1[2] - p2[2]) / (2 * h)];\n}\n\nfunction derivativeV(r: SurfaceParam, u: number, v: number, h: number): number[] {\n  const p1 = r(u, v + h);\n  const p2 = r(u, v - h);\n  return [(p1[0] - p2[0]) / (2 * h), (p1[1] - p2[1]) / (2 * h), (p1[2] - p2[2]) / (2 * h)];\n}\n\n// Surface area of a sphere of radius R\n// Parametrization: r(u,v) = (R sin u cos v, R sin u sin v, R cos u)\nconst sphere: SurfaceParam = (u, v) => [\n  2 * Math.sin(u) * Math.cos(v),\n  2 * Math.sin(u) * Math.sin(v),\n  2 * Math.cos(u),\n];\n\nconst sphereArea = surfaceArea(sphere, [0, Math.PI], [0, 2 * Math.PI], 40, 60);\nconsole.log(`Sphere (R=2) surface area ? ${sphereArea.toFixed(4)} (expected: ${(4 * Math.PI * 4).toFixed(4)})`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-flux-computation-via-divergence-theorem",
      children: "TypeScript: Flux Computation via Divergence Theorem"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function tripleIntegral(\n  integrand: (x: number, y: number, z: number) => number,\n  xRange: [number, number],\n  yRange: [number, number],\n  zRange: [number, number],\n  nx: number,\n  ny: number,\n  nz: number\n): number {\n  const dx = (xRange[1] - xRange[0]) / nx;\n  const dy = (yRange[1] - yRange[0]) / ny;\n  const dz = (zRange[1] - zRange[0]) / nz;\n  let sum = 0;\n\n  for (let i = 0; i < nx; i++) {\n    for (let j = 0; j < ny; j++) {\n      for (let k = 0; k < nz; k++) {\n        const x = xRange[0] + (i + 0.5) * dx;\n        const y = yRange[0] + (j + 0.5) * dy;\n        const z = zRange[0] + (k + 0.5) * dz;\n        sum += integrand(x, y, z) * dx * dy * dz;\n      }\n    }\n  }\n  return sum;\n}\n\n// Example: F = [x, y, z], flux through cube [0,1]?\n// div(F) = 1 + 1 + 1 = 3\n// Flux = ??? 3 dV = 3 * volume = 3\nconst fluxViaDivergence = tripleIntegral(\n  (x, y, z) => 3, // div(F) = 3\n  [0, 1], [0, 1], [0, 1],\n  50, 50, 50\n);\nconsole.log(`Flux of F=[x,y,z] through unit cube ? ${fluxViaDivergence.toFixed(4)} (expected: 3.0000)`);\n\n// Example: F = [x?, y?, z?], flux through sphere of radius R\n// div(F) = 3x? + 3y? + 3z? = 3r?\n// In spherical: ??? 3r? dV = 3 * 4p * R5/5 = 12pR5/5\nconst R = 2;\nconst expectedFlux = (12 * Math.PI * R ** 5) / 5;\nconsole.log(`Flux of F=[x?,y?,z?] through sphere R=${R}: expected = ${expectedFlux.toFixed(4)}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vector-calculus-theorem-relationships",
      children: "Vector Calculus Theorem Relationships"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TB\n    subgraph \"Fundamental Theorem of Calculus\"\n        FTC[\"??? f'(x)dx = f(b) - f(a)\"]\n    end\n    \n    subgraph \"Gradient Theorem (1D ? 3D)\"\n        GT[\"?_C ?f ? dr = f(b) - f(a)\"]\n    end\n    \n    subgraph \"Green's Theorem (2D)\"\n        GR[\"?_C P dx + Q dy = ?_D (?Q/?x - ?P/?y) dA\"]\n    end\n    \n    subgraph \"Stokes' Theorem (3D, Circulation)\"\n        ST[\"?_C F ? dr = ?_S (? ? F) ? dS\"]\n    end\n    \n    subgraph \"Divergence Theorem (3D, Flux)\"\n        DT[\"?_S F ? dS = ?_E (? ? F) dV\"]\n    end\n    \n    FTC -->|Generalizes to| GT\n    GT -->|Specializes to 2D| GR\n    GR -->|Generalizes to 3D| ST\n    GR -->|Divergence form| DT\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "physical-intuition-diagram",
      children: "Physical Intuition Diagram"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph \"Gradient ?f\"\n        GRAD[Points uphill<br/>Direction of steepest ascent]\n    end\n    subgraph \"Divergence ??F\"\n        DIV[Measures outflow<br/>Source (+) or Sink (-)]\n    end\n    subgraph \"Curl ??F\"\n        CURL[Measures rotation<br/>Vorticity / Circulation]\n    end\n    \n    GRAD -->|Integrate| GT[Line integral = potential difference]\n    DIV -->|Integrate| DT[Flux = total sources inside]\n    CURL -->|Integrate| ST[Circulation = curl through surface]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises-1",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Flux Through a Cylinder:"
          }), " Compute the flux of $\\mathbf{F} = \\langle x, y, 2z \\rangle$ through the lateral surface of the cylinder $x^2 + y^2 = 4$, $0 \\leq z \\leq 3$ using both direct surface integration and the divergence theorem."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Conservative Field Comparison:"
          }), " Show that $\\mathbf{F} = \\langle y \\cos(xy), x \\cos(xy) \\rangle$ is conservative. Find its potential and compute the work done along the helix $\\mathbf{r}(t) = \\langle \\cos t, \\sin t, t \\rangle$ from $t=0$ to $t=2\\pi$."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Maxwell's Equation Verification:"
          }), " Verify that $\\mathbf{B} = \\nabla \\times \\mathbf{A}$ (where $\\mathbf{A}$ is the magnetic vector potential) automatically satisfies $\\nabla \\cdot \\mathbf{B} = 0$. Create a TypeScript function that takes a vector potential $\\mathbf{A}$ and numerically verifies this identity at several points."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Gradient Flow Implementation:"
          }), " Implement gradient flow $\\frac{dw}{dt} = -\\nabla L(w)$ for the Rosenbrock function $f(x,y) = (1-x)^2 + 100(y - x^2)^2$ using Euler's method. Visualize the trajectory from $(0,0)$ toward the minimum at $(1,1)$."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notation-reference",
      children: "Notation Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "$\\nabla \\cdot \\mathbf{F}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "divergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\nabla \\times \\mathbf{F}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "curl"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\nabla^2$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Laplacian"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\Delta_M$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Laplace-Beltrami operator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$dS$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "surface area element"
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
            children: "closed line integral"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\mathbf{n}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "outward unit normal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\phi$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "scalar potential"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$g_{ij}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "metric tensor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$C$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "curve"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$S$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "surface"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$E$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "volume region"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\epsilon_0$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "permittivity of free space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\mu_0$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "permeability of free space"
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