"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[54858],{

/***/ 27745
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_engineering_mathematics_08_integral_transforms_md_26d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-engineering-mathematics-08-integral-transforms-md-26d.json
const site_docs_courses_engineering_mathematics_08_integral_transforms_md_26d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/engineering-mathematics/08-integral-transforms","title":"Chapter 8: Integral Transforms","description":"Previous Numerical Methods | Next Optimization","source":"@site/docs/courses/engineering-mathematics/08-integral-transforms.md","sourceDirName":"courses/engineering-mathematics","slug":"/engineering-mathematics/08-integral-transforms","permalink":"/ai-engineering-journey/engineering-mathematics/08-integral-transforms","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"id":"08-integral-transforms","slug":"/engineering-mathematics/08-integral-transforms","title":"Chapter 8: Integral Transforms","sidebar_label":"Chapter 8: Integral Transforms","sidebar_position":8},"sidebar":"coursesSidebar","previous":{"title":"Chapter 7: Numerical Methods","permalink":"/ai-engineering-journey/engineering-mathematics/07-numerical-methods"},"next":{"title":"Chapter 9: Optimization","permalink":"/ai-engineering-journey/engineering-mathematics/09-optimization"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/engineering-mathematics/08-integral-transforms.md


const frontMatter = {
	id: '08-integral-transforms',
	slug: '/engineering-mathematics/08-integral-transforms',
	title: 'Chapter 8: Integral Transforms',
	sidebar_label: 'Chapter 8: Integral Transforms',
	sidebar_position: 8
};
const contentTitle = 'Chapter 8: Integral Transforms';

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
  "value": "8.1 Fourier Series",
  "id": "81-fourier-series",
  "level": 3
}, {
  "value": "8.2 Fourier Transform",
  "id": "82-fourier-transform",
  "level": 3
}, {
  "value": "8.3 Laplace Transform",
  "id": "83-laplace-transform",
  "level": 3
}, {
  "value": "8.4 Z-Transform",
  "id": "84-z-transform",
  "level": 3
}, {
  "value": "8.5 Convolution and Correlation",
  "id": "85-convolution-and-correlation",
  "level": 3
}, {
  "value": "8.6 Sampling Theorem",
  "id": "86-sampling-theorem",
  "level": 3
}, {
  "value": "8.7 Discrete Fourier Transform (DFT)",
  "id": "87-discrete-fourier-transform-dft",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Fourier Series",
  "id": "example-1-fourier-series",
  "level": 3
}, {
  "value": "Example 2: Fourier Transform",
  "id": "example-2-fourier-transform",
  "level": 3
}, {
  "value": "Example 3: Laplace Transform IVP",
  "id": "example-3-laplace-transform-ivp",
  "level": 3
}, {
  "value": "Example 4: Z-Transform",
  "id": "example-4-z-transform",
  "level": 3
}, {
  "value": "TypeScript Implementation: FFT via Cooley-Tukey",
  "id": "typescript-implementation-fft-via-cooley-tukey",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Example 5: Convolution Theorem",
  "id": "example-5-convolution-theorem",
  "level": 3
}, {
  "value": "Example 6: Sampling and Aliasing Demonstration",
  "id": "example-6-sampling-and-aliasing-demonstration",
  "level": 3
}, {
  "value": "Example 7: System Transfer Function and Stability",
  "id": "example-7-system-transfer-function-and-stability",
  "level": 3
}, {
  "value": "TypeScript: Signal Reconstruction from Fourier Series",
  "id": "typescript-signal-reconstruction-from-fourier-series",
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
  "value": "TypeScript Example: DFT Implementation",
  "id": "typescript-example-dft-implementation",
  "level": 2
}, {
  "value": "Additional Exercises",
  "id": "additional-exercises",
  "level": 3
}, {
  "value": "Transform Domain Relationships",
  "id": "transform-domain-relationships",
  "level": 2
}, {
  "value": "TypeScript Implementation: Cooley-Tukey FFT",
  "id": "typescript-implementation-cooley-tukey-fft",
  "level": 2
}, {
  "value": "TypeScript: Laplace Transform Solver for ODEs",
  "id": "typescript-laplace-transform-solver-for-odes",
  "level": 2
}, {
  "value": "TypeScript: Z-Transform and Frequency Response",
  "id": "typescript-z-transform-and-frequency-response",
  "level": 2
}, {
  "value": "Additional Exercises",
  "id": "additional-exercises-1",
  "level": 3
}, {
  "value": "Real-World Application: JPEG Image Compression",
  "id": "real-world-application-jpeg-image-compression",
  "level": 2
}, {
  "value": "Laplace Transform in Circuit Analysis",
  "id": "laplace-transform-in-circuit-analysis",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Transform Selection Guide",
  "id": "transform-selection-guide",
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
        id: "chapter-8-integral-transforms",
        children: "Chapter 8: Integral Transforms"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/engineering-mathematics/07-numerical-methods",
          children: "Chapter 7: Numerical Methods"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/engineering-mathematics/09-optimization",
          children: "Chapter 9: Optimization"
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
        href: "../../assets/images/lessons/engineering-mathematics/08-integral-transforms/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/engineering-mathematics/08-integral-transforms/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/engineering-mathematics/08-integral-transforms/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/engineering-mathematics/08-integral-transforms/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/engineering-mathematics/08-integral-transforms/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/engineering-mathematics/08-integral-transforms/visual-explanation.png",
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
        children: "Compute Fourier series expansions of periodic functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the Fourier transform to signals and systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the Laplace transform for solving ODEs and analyzing systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the Z-transform to discrete-time signals and systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the relationship between time, frequency, and transform domains"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply transforms to signal processing, control, and data analysis"
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
            children: "Fourier Series"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any periodic function is a sum of sines and cosines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequency decomposition of periodic signals"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fourier Transform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$F(\\omega) = \\int_{-\\infty}^\\infty f(t)e^{-i\\omega t}dt$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time $\\to$ frequency domain conversion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Laplace Transform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$F(s) = \\int_0^\\infty f(t)e^{-st}dt$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solving DEs, analyzing control systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Z-Transform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$X(z) = \\sum x_n z^{-n}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discrete-time signal and system analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Convolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$(f * g)(t) \\leftrightarrow F(\\omega)G(\\omega)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiplication in transform domain"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Fourier Series] --> B[Fourier Transform]\n    B --> C[Properties]\n    C --> D[Laplace Transform]\n    D --> E[Applications: Control, Circuits]\n    E --> F[Z-Transform]\n    F --> G[Discrete-Time Systems]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-fourier-series",
      children: "8.1 Fourier Series"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Any periodic function $f(t)$ with period $T$ can be expressed as:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$f(t) = a_0 + \\sum_{n=1}^\\infty \\left[a_n \\cos\\left(\\frac{2\\pi nt}{T}\\right) + b_n \\sin\\left(\\frac{2\\pi nt}{T}\\right)\\right]$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where:\n$$a_0 = \\frac{1}{T} \\int_0^T f(t),dt$$\n$$a_n = \\frac{2}{T} \\int_0^T f(t) \\cos\\left(\\frac{2\\pi nt}{T}\\right) dt$$\n$$b_n = \\frac{2}{T} \\int_0^T f(t) \\sin\\left(\\frac{2\\pi nt}{T}\\right) dt$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complex Exponential Form:"
      }), "\n$$f(t) = \\sum_{n=-\\infty}^\\infty c_n e^{i 2\\pi nt/T}$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where $c_n = \\frac{1}{T} \\int_0^T f(t) e^{-i 2\\pi nt/T} dt$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Parseval's Identity:"
      }), "\n$$\\frac{1}{T} \\int_0^T |f(t)|^2 dt = a_0^2 + \\frac{1}{2}\\sum_{n=1}^\\infty (a_n^2 + b_n^2) = \\sum_{n=-\\infty}^\\infty |c_n|^2$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Gibbs Phenomenon:"
      }), " At discontinuities, the Fourier series overshoots by about 9% regardless of the number of terms."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-fourier-transform",
      children: "8.2 Fourier Transform"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), "\n$$F(\\omega) = \\mathcal{F}{f(t)} = \\int_{-\\infty}^\\infty f(t) e^{-i\\omega t},dt$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Inverse Transform:"
      }), "\n$$f(t) = \\mathcal{F}^{-1}{F(\\omega)} = \\frac{1}{2\\pi} \\int_{-\\infty}^\\infty F(\\omega) e^{i\\omega t},d\\omega$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Properties:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frequency Domain"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linearity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$af(t) + bg(t)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$aF(\\omega) + bG(\\omega)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time Shift"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$f(t - t_0)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$e^{-i\\omega t_0} F(\\omega)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Frequency Shift"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$e^{i\\omega_0 t} f(t)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$F(\\omega - \\omega_0)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$f(at)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\frac{1}{"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time Derivative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$f'(t)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$i\\omega F(\\omega)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Frequency Derivative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$t f(t)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$i F'(\\omega)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Convolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$(f * g)(t)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$F(\\omega)G(\\omega)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiplication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$f(t)g(t)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\frac{1}{2\\pi}(F * G)(\\omega)$"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Important Transform Pairs:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "$f(t)$"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "$F(\\omega)$"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\delta(t)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$1$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$1$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$2\\pi \\delta(\\omega)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$e^{-at}u(t)$, $a > 0$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\frac{1}{a + i\\omega}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$e^{-a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\text{rect}(t/T)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$T \\text{sinc}(\\omega T/2)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\text{sinc}(at)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\frac{\\pi}{a} \\text{rect}(\\omega/(2a))$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\cos(\\omega_0 t)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\pi[\\delta(\\omega-\\omega_0) + \\delta(\\omega+\\omega_0)]$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\sin(\\omega_0 t)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$i\\pi[\\delta(\\omega+\\omega_0) - \\delta(\\omega-\\omega_0)]$"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-laplace-transform",
      children: "8.3 Laplace Transform"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), "\n$$F(s) = \\mathcal{L}{f(t)} = \\int_0^\\infty f(t) e^{-st},dt, \\quad s = \\sigma + i\\omega$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Region of Convergence (ROC):"
      }), " Values of $s$ for which the integral converges."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Laplace Domain"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linearity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$af(t) + bg(t)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$aF(s) + bG(s)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time Shift"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$f(t-a)u(t-a)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$e^{-as}F(s)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Frequency Shift"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$e^{at}f(t)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$F(s-a)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$f(at)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\frac{1}{a}F(s/a)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Derivative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$f'(t)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$sF(s) - f(0)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Second Derivative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$f''(t)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$s^2F(s) - sf(0) - f'(0)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Integral"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\int_0^t f(\\tau)d\\tau$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\frac{F(s)}{s}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Convolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$(f * g)(t)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$F(s)G(s)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Initial Value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\lim_{t\\to 0^+} f(t)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\lim_{s\\to\\infty} sF(s)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Final Value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\lim_{t\\to\\infty} f(t)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\lim_{s\\to 0} sF(s)$"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Transfer Function:"
      }), " For a linear system with input $x(t)$ and output $y(t)$:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$H(s) = \\frac{Y(s)}{X(s)} = \\frac{\\text{output Laplace}}{\\text{input Laplace}}$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Poles and Zeros:"
      }), " Roots of denominator (poles) and numerator (zeros) of $H(s)$. Pole locations determine system stability: all poles must have $\\text{Re}(s) < 0$ for stability."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Partial Fraction Expansion:"
      }), "\n$$\\frac{N(s)}{(s-p_1)(s-p_2)\\cdots(s-p_n)} = \\frac{r_1}{s-p_1} + \\frac{r_2}{s-p_2} + \\cdots + \\frac{r_n}{s-p_n}$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For repeated roots: $\\frac{r_{1}}{s-p} + \\frac{r_{2}}{(s-p)^2} + \\cdots$"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-z-transform",
      children: "8.4 Z-Transform"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), "\n$$X(z) = \\mathcal{Z}{x[n]} = \\sum_{n=-\\infty}^\\infty x[n] z^{-n}, \\quad z \\in \\mathbb{C}$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sided Z-Transform:"
      }), " $\\mathcal{Z}{x[n]} = \\sum_{n=0}^\\infty x[n] z^{-n}$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Z-Domain"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linearity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$ax[n] + by[n]$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$aX(z) + bY(z)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time Shift"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$x[n-k]$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$z^{-k}X(z)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time Advance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$x[n+k]$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$z^k X(z) - \\sum_{m=0}^{k-1} x[m] z^{k-m}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$a^n x[n]$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$X(z/a)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiplication by $n$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$n x[n]$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$-z \\frac{dX(z)}{dz}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Convolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$(x * y)[n]$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$X(z) Y(z)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Initial Value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$x[0]$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\lim_{z\\to\\infty} X(z)$"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Inverse Z-Transform:"
      }), "\n$$x[n] = \\frac{1}{2\\pi i} \\oint_C X(z) z^{n-1},dz$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Commonly computed via partial fraction expansion."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Transfer Function (Discrete):"
      }), " $H(z) = \\frac{Y(z)}{X(z)}$. Stability: all poles inside $|z| = 1$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "85-convolution-and-correlation",
      children: "8.5 Convolution and Correlation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Continuous Convolution:"
      }), "\n$$(f * g)(t) = \\int_{-\\infty}^\\infty f(\\tau) g(t - \\tau),d\\tau$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Discrete Convolution:"
      }), "\n$$(x * y)[n] = \\sum_{k=-\\infty}^\\infty x[k] y[n - k]$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cross-Correlation:"
      }), "\n$$R_{fg}(\\tau) = \\int_{-\\infty}^\\infty f(t) g(t + \\tau),dt$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Auto-Correlation:"
      }), "\n$$R_{ff}(\\tau) = \\int_{-\\infty}^\\infty f(t) f(t + \\tau),dt$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "86-sampling-theorem",
      children: "8.6 Sampling Theorem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Nyquist-Shannon Sampling Theorem:"
      }), " A signal $f(t)$ with bandwidth $B$ can be perfectly reconstructed from samples taken at rate $f_s > 2B$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The critical rate $f_s = 2B$ is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Nyquist rate"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Aliasing:"
      }), " When $f_s < 2B$, high-frequency components appear as low-frequency artifacts."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Ideal Reconstruction:"
      }), "\n$$f(t) = \\sum_{n=-\\infty}^\\infty f(nT_s) \\text{sinc}\\left(\\frac{t - nT_s}{T_s}\\right)$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "87-discrete-fourier-transform-dft",
      children: "8.7 Discrete Fourier Transform (DFT)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), "\n$$X[k] = \\sum_{n=0}^{N-1} x[n] e^{-i 2\\pi kn/N}, \\quad k = 0, 1, \\ldots, N-1$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Inverse DFT:"
      }), "\n$$x[n] = \\frac{1}{N} \\sum_{k=0}^{N-1} X[k] e^{i 2\\pi kn/N}$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fast Fourier Transform (FFT):"
      }), " Computes the DFT in $O(N\\log N)$ operations (versus $O(N^2)$ for direct computation)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-fourier-series",
      children: "Example 1: Fourier Series"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Find the Fourier series for the square wave:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$f(t) = \\begin{cases} 1 & 0 < t < \\pi \\ -1 & \\pi < t < 2\\pi \\end{cases}$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Period $T = 2\\pi$, $\\omega_0 = 1$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$a_0 = \\frac{1}{2\\pi} \\int_0^{2\\pi} f(t),dt = 0$ (odd function)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$a_n = \\frac{1}{\\pi} \\int_0^{2\\pi} f(t)\\cos(nt),dt = 0$ (odd $\\times$ even = odd)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$b_n = \\frac{1}{\\pi} \\left[\\int_0^\\pi 1\\cdot\\sin(nt),dt + \\int_\\pi^{2\\pi} (-1)\\cdot\\sin(nt),dt\\right]$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["$= \\frac{1}{\\pi}\\left[\\frac{-\\cos(nt)}{n}\\bigg|", (0,jsx_runtime.jsx)(_components.em, {
        children: "0^\\pi - \\frac{-\\cos(nt)}{n}\\bigg|"
      }), "\\pi^{2\\pi}\\right]$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$= \\frac{1}{\\pi}\\left[\\frac{-\\cos(n\\pi) + 1}{n} + \\frac{\\cos(2n\\pi) - \\cos(n\\pi)}{n}\\right]$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$= \\frac{1}{n\\pi}[1 - \\cos(n\\pi) + \\cos(2n\\pi) - \\cos(n\\pi)] = \\frac{2}{n\\pi}[1 - (-1)^n]$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "So $b_n = \\frac{4}{n\\pi}$ for odd $n$, $b_n = 0$ for even $n$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$f(t) = \\frac{4}{\\pi}\\sum_{k=0}^\\infty \\frac{\\sin((2k+1)t)}{2k+1} = \\frac{4}{\\pi}\\left(\\sin t + \\frac{1}{3}\\sin 3t + \\frac{1}{5}\\sin 5t + \\cdots\\right)$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The approximation improves as we add more terms. With just the first term, we get a sine wave; with 10 terms, the square wave becomes quite sharp."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-fourier-transform",
      children: "Example 2: Fourier Transform"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Find the Fourier transform of the Gaussian $f(t) = e^{-at^2}$, $a > 0$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$F(\\omega) = \\int_{-\\infty}^\\infty e^{-at^2} e^{-i\\omega t},dt = \\int_{-\\infty}^\\infty e^{-(at^2 + i\\omega t)},dt$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Complete the square: $at^2 + i\\omega t = a(t + i\\omega/(2a))^2 + \\omega^2/(4a)$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$F(\\omega) = e^{-\\omega^2/(4a)} \\int_{-\\infty}^\\infty e^{-a(t + i\\omega/(2a))^2},dt = e^{-\\omega^2/(4a)} \\cdot \\sqrt{\\frac{\\pi}{a}}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "So $\\mathcal{F}{e^{-at^2}} = \\sqrt{\\frac{\\pi}{a}}, e^{-\\omega^2/(4a)}$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Fourier transform of a Gaussian is another Gaussian! This is the key property used in the Heisenberg uncertainty principle."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-laplace-transform-ivp",
      children: "Example 3: Laplace Transform IVP"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Solve $y'' + 3y' + 2y = 0$, $y(0) = 1$, $y'(0) = 2$ using Laplace."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Taking Laplace transform:\n$$(s^2Y - s\\cdot1 - 2) + 3(sY - 1) + 2Y = 0$$\n$$(s^2 + 3s + 2)Y - s - 2 - 3 = 0$$\n$$(s^2 + 3s + 2)Y = s + 5$$\n$$Y = \\frac{s + 5}{(s+1)(s+2)}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Partial fractions:\n$$\\frac{s + 5}{(s+1)(s+2)} = \\frac{A}{s+1} + \\frac{B}{s+2}$$\n$$s + 5 = A(s+2) + B(s+1)$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$s = -1$: $4 = A(1) \\implies A = 4$\n$s = -2$: $3 = B(-1) \\implies B = -3$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$Y = \\frac{4}{s+1} - \\frac{3}{s+2}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Inverse Laplace:\n$$y(t) = 4e^{-t} - 3e^{-2t}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-z-transform",
      children: "Example 4: Z-Transform"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Find the Z-transform of $x[n] = a^n u[n]$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$X(z) = \\sum_{n=0}^\\infty a^n z^{-n} = \\sum_{n=0}^\\infty (a z^{-1})^n = \\frac{1}{1 - az^{-1}} = \\frac{z}{z - a}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ROC: $|z| > |a|$."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-fft-via-cooley-tukey",
      children: "TypeScript Implementation: FFT via Cooley-Tukey"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class Complex {\n  constructor(public re: number, public im: number) {}\n  add(z: Complex): Complex { return new Complex(this.re + z.re, this.im + z.im); }\n  sub(z: Complex): Complex { return new Complex(this.re - z.re, this.im - z.im); }\n  mul(z: Complex): Complex { return new Complex(this.re * z.re - this.im * z.im, this.re * z.im + this.im * z.re); }\n  conj(): Complex { return new Complex(this.re, -this.im); }\n  mag(): number { return Math.sqrt(this.re * this.re + this.im * this.im); }\n}\n\n// Cooley-Tukey FFT (radix-2, decimation-in-time)\nfunction fft(x: Complex[]): Complex[] {\n  const n = x.length;\n  if (n <= 1) return x;\n  const even = fft(x.filter((_, i) => i % 2 === 0));\n  const odd = fft(x.filter((_, i) => i % 2 === 1));\n  const result = new Array(n);\n  for (let k = 0; k < n / 2; k++) {\n    const angle = -2 * Math.PI * k / n;\n    const twiddle = new Complex(Math.cos(angle), Math.sin(angle)).mul(odd[k]);\n    result[k] = even[k].add(twiddle);\n    result[k + n / 2] = even[k].sub(twiddle);\n  }\n  return result;\n}\n\nfunction ifft(x: Complex[]): Complex[] {\n  const conj = x.map(z => z.conj());\n  const f = fft(conj);\n  return f.map(z => new Complex(z.re / x.length, z.im / x.length).conj());\n}\n\n// Test: FFT of pure sine at frequency 1, N=16\nconst N = 16;\nconst signal = Array.from({ length: N }, (_, i) =>\n  new Complex(Math.sin(2 * Math.PI * 1 * i / N), 0));\nconst spectrum = fft(signal);\nconsole.log(\"FFT of sin(2pt), N=16:\");\nconst peaks = spectrum.map((z, i) => ({ k: i, mag: z.mag() })).filter(s => s.mag > 0.1);\npeaks.forEach(p => console.log(`  k=${p.k}: magnitude=${p.mag.toFixed(4)}`));\nconsole.log(`  (Peaks at k=1 and k=${N - 1} correspond to +1 Hz and -1 Hz)`);\n\n// Verify IFFT reconstruction\nconst reconstructed = ifft(spectrum);\nconst maxErr = Math.max(...reconstructed.map((z, i) => Math.abs(z.re - signal[i].re)));\nconsole.log(`IFFT reconstruction max error: ${maxErr.toExponential(2)}`);\n\n// FFT of rectangular pulse\nconst rect = Array.from({ length: N }, (_, i) =>\n  new Complex(i < N / 4 || i >= 3 * N / 4 ? 0 : 1, 0));\nconst rectFFT = fft(rect);\nconsole.log(\"Rectangular pulse FFT (sinc-like):\");\nrectFFT.forEach((z, i) => console.log(`  k=${i}: |F|=${z.mag().toFixed(4)}`));\n\n### TypeScript: Numerical Laplace Transform\n\n```typescript\n// F(s) = ?0^8 f(t)e^{-st} dt (numerical approximation)\nfunction laplaceNum(f: (t: number) => number, s: number, tMax: number = 50, steps: number = 10000): number {\n  const dt = tMax / steps;\n  let sum = 0;\n  for (let i = 0; i &lt; steps; i++) sum += f((i + 0.5) * dt) * Math.exp(-s * (i + 0.5) * dt) * dt;\n  return sum;\n}\n\n// Test known transforms\nconsole.log(`L{1}(2) = ${laplaceNum(t => 1, 2).toFixed(4)} (expected: 1/2 = 0.5)`);\nconsole.log(`L{t}(3) = ${laplaceNum(t => t, 3).toFixed(4)} (expected: 1/9 = ${(1 / 9).toFixed(4)})`);\nconsole.log(`L{e^{-t}}(4) = ${laplaceNum(t => Math.exp(-t), 4).toFixed(4)} (expected: 1/5 = 0.2)`);\nconsole.log(`L{sin(t)}(2) = ${laplaceNum(t => Math.sin(t), 2).toFixed(4)} (expected: 1/(2?+1) = 0.2)`);\nconsole.log(`L{cos(t)}(2) = ${laplaceNum(t => Math.cos(t), 2).toFixed(4)} (expected: 2/(2?+1) = ${(2 / 5).toFixed(4)})`);\n\n// Convolution via FFT: (f*g)(t) = ?0? f(t)g(t-t)dt\nfunction convolve(f: number[], g: number[]): number[] {\n  const n = f.length + g.length - 1;\n  const padF = [...f, ...new Array(n - f.length).fill(0)].map(x => new Complex(x, 0));\n  const padG = [...g, ...new Array(n - g.length).fill(0)].map(x => new Complex(x, 0));\n  const fF = fft(padF), fG = fft(padG);\n  const product = fF.map((z, i) => z.mul(fG[i]));\n  return ifft(product).map(z => z.re);\n}\n\n// Example: convolution of [1,2,3] and [4,5,6] = [4,13,28,27,18]\nconst conv = convolve([1, 2, 3], [4, 5, 6]);\nconsole.log(`Convolution [1,2,3] * [4,5,6]: [${conv.map(v => v.toFixed(0)).join(\", \")}] (expected: [4, 13, 28, 27, 18])`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// --- DFT Implementation ---\nfunction dft(signal: number[]): { re: number[]; im: number[] } {\n  const n = signal.length;\n  const re = new Array(n).fill(0), im = new Array(n).fill(0);\n  for (let k = 0; k &lt; n; k++) {\n    for (let t = 0; t &lt; n; t++) {\n      const angle = (2 * Math.PI * k * t) / n;\n      re[k] += signal[t] * Math.cos(angle);\n      im[k] -= signal[t] * Math.sin(angle);\n    }\n    re[k] /= n; im[k] /= n;\n  }\n  return { re, im };\n}\nfunction dftMagnitude(signal: number[]): number[] {\n  const { re, im } = dft(signal);\n  return re.map((r, i) => Math.sqrt(r * r + im[i] * im[i]));\n}\n// Pure sine wave at frequency 2\nconst sineWave = Array.from({ length: 64 }, (_, t) => Math.sin(2 * Math.PI * 2 * t / 64));\nconst mag = dftMagnitude(sineWave);\nconsole.log('DFT of sin(2?2pt/64):');\nconsole.log('  Peak at k=2:', mag[2].toFixed(4), '(expected: 0.5)');\nconsole.log('  DC component k=0:', mag[0].toFixed(4), '(expected: ~0)');\n\n// --- Laplace Transform Table Lookup ---\ntype LaplaceEntry = { f_t: string; F_s: string; conditions: string };\nconst laplaceTable: LaplaceEntry[] = [\n  { f_t: '1', F_s: '1/s', conditions: 's > 0' },\n  { f_t: 't^n', F_s: 'n!/s^(n+1)', conditions: 's > 0' },\n  { f_t: 'e^(at)', F_s: '1/(s - a)', conditions: 's > a' },\n  { f_t: 'sin(?t)', F_s: '?/(s? + ??)', conditions: 's > 0' },\n  { f_t: 'cos(?t)', F_s: 's/(s? + ??)', conditions: 's > 0' },\n  { f_t: 't?sin(?t)', F_s: '2?s/(s? + ??)?', conditions: 's > 0' },\n  { f_t: 'e^(at)?sin(?t)', F_s: '?/((s - a)? + ??)', conditions: 's > a' },\n  { f_t: 'd(t)', F_s: '1', conditions: 'all s' },\n  { f_t: 'u(t)', F_s: '1/s', conditions: 's > 0' },\n];\nconsole.log('\\nLaplace table lookup:');\nlaplaceTable.slice(0, 5).forEach(e => console.log(`  ?{${e.f_t}} = ${e.F_s}`));\n\n// --- Convolution via DFT (overlap-save) ---\nfunction convolveDFT(a: number[], b: number[]): number[] {\n  const n = a.length + b.length - 1;\n  const paddedA = [...a, ...new Array(n - a.length).fill(0)];\n  const paddedB = [...b, ...new Array(n - b.length).fill(0)];\n  const dftA = dft(paddedA);\n  const dftB = dft(paddedB);\n  const prodRe = dftA.re.map((_, i) => dftA.re[i] * dftB.re[i] - dftA.im[i] * dftB.im[i]);\n  const prodIm = dftA.re.map((_, i) => dftA.re[i] * dftB.im[i] + dftA.im[i] * dftB.re[i]);\n  // Inverse DFT\n  const result: number[] = [];\n  for (let t = 0; t &lt; n; t++) {\n    let sum = 0;\n    for (let k = 0; k &lt; n; k++) sum += prodRe[k] * Math.cos(2 * Math.PI * k * t / n) - prodIm[k] * Math.sin(2 * Math.PI * k * t / n);\n    result.push(sum / n);\n  }\n  return result;\n}\nconst convDFT = convolveDFT([1, 2, 3], [4, 5, 6]);\nconsole.log('\\nConvolution (DFT):', convDFT.map(v => v.toFixed(0)).join(', '), '(expected: 4, 13, 28, 27, 18)');\n\n// --- Z-Transform Pole-Zero Check ---\nfunction zTransformPoles(coeffs: number[]): number[] {\n  // Find roots of denominator polynomial for a transfer function\n  // For H(z) = 1 / (1 + a1z?? + a2z??) ? poles are roots of z? + a1z + a2 = 0\n  if (coeffs.length > 3) return []; // simplified for quadratic\n  const [a0, a1, a2] = coeffs.length === 3 ? coeffs : [1, coeffs[0], coeffs[1] ?? 0];\n  const disc = a1 * a1 - 4 * a0 * a2;\n  if (disc >= 0) return [(-a1 + Math.sqrt(disc)) / (2 * a0), (-a1 - Math.sqrt(disc)) / (2 * a0)];\n  return []; // complex\n}\nconst poles = zTransformPoles([1, -0.5, 0.25]);\nconsole.log('\\nZ-transform poles of H(z)=1/(1-0.5z??+0.25z??):', poles.map(p => p.toFixed(4)).join(', '));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// integral transforms\n// linear-algebra-calculus implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise", (0,jsx_runtime.jsxs)(_components.void, {
        children: [" {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise", (0,jsx_runtime.jsxs)(_components.void, {
          children: [" {\nconst running: Promise", (0,jsx_runtime.jsxs)(_components.void, {
            children: ["[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise", (0,jsx_runtime.jsx)(_components.void, {
              children: " {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'integral transforms', data: { topic: 'linear-algebra-calculus' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// integral transforms - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise", (0,jsx_runtime.jsx)(_components.void, {
        children: " {\nconst cache = new Cache(5000)\ncache.set('key1', 'engineering-math demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'engineering-mathematics', chapter: 'integral transforms' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('engineering-math'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fourier series decompose periodic functions into sine/cosine harmonics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The Fourier transform converts between time and frequency domains"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convolution in time = multiplication in frequency (fundamental for filtering)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Laplace transform solves ODEs and characterizes system stability via poles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Z-transform analyzes discrete-time systems similarly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The sampling theorem dictates minimum sampling rate for digital processing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The FFT computes discrete Fourier transforms in $O(N\\log N)$ time"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-5-convolution-theorem",
      children: "Example 5: Convolution Theorem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compute $(f * g)(t)$ where $f(t) = e^{-t}u(t)$ and $g(t) = e^{-2t}u(t)$ using the Laplace transform."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\mathcal{L}{f(t)} = \\frac{1}{s+1}, \\quad \\mathcal{L}{g(t)} = \\frac{1}{s+2}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\mathcal{L}{(f*g)(t)} = \\frac{1}{s+1} \\cdot \\frac{1}{s+2} = \\frac{1}{(s+1)(s+2)}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Partial fractions: $\\frac{1}{(s+1)(s+2)} = \\frac{1}{s+1} - \\frac{1}{s+2}$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Inverse: $(f*g)(t) = e^{-t} - e^{-2t}$"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-6-sampling-and-aliasing-demonstration",
      children: "Example 6: Sampling and Aliasing Demonstration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A signal $f(t) = \\cos(2\\pi \\cdot 100t) + \\cos(2\\pi \\cdot 300t)$ contains frequencies 100 Hz and 300 Hz."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " If sampled at $f_s = 250$ Hz, which frequencies appear?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nNyquist rate $= 2 \\times 300 = 600$ Hz. Sampling at 250 Hz < 600 Hz ? aliasing occurs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The 300 Hz component aliases to $|300 - 250| = 50$ Hz (folded back into baseband).\nThe 100 Hz component is below Nyquist (125 Hz) and appears correctly.\nThe reconstructed signal would appear as $\\cos(2\\pi \\cdot 100t) + \\cos(2\\pi \\cdot 50t)$ ? the 300 Hz tone is misinterpreted as a 50 Hz tone."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-7-system-transfer-function-and-stability",
      children: "Example 7: System Transfer Function and Stability"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A system has transfer function $H(s) = \\frac{s+2}{s^2 + 2s + 5}$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " Determine the impulse response and stability."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), "\nPoles: $s^2 + 2s + 5 = 0 \\implies s = -1 \\pm 2i$. Both have $\\text{Re}(s) = -1 < 0$ ? stable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Partial fractions: $\\frac{s+2}{s^2 + 2s + 5} = \\frac{s+2}{(s+1)^2 + 4} = \\frac{s+1}{(s+1)^2 + 4} + \\frac{1}{(s+1)^2 + 4}$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Inverse Laplace: $h(t) = e^{-t}\\cos(2t) + \\frac{1}{2}e^{-t}\\sin(2t)$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The impulse response decays exponentially (due to $e^{-t}$), confirming stability."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-signal-reconstruction-from-fourier-series",
      children: "TypeScript: Signal Reconstruction from Fourier Series"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function reconstructFromFourier(\n  coefficients: { a0: number; an: number[]; bn: number[] },\n  t: number,\n  T: number\n): number {\n  const omega0 = (2 * Math.PI) / T;\n  let sum = coefficients.a0;\n  for (let n = 1; n &lt;= coefficients.an.length; n++) {\n    sum += coefficients.an[n - 1] * Math.cos(n * omega0 * t);\n    sum += coefficients.bn[n - 1] * Math.sin(n * omega0 * t);\n  }\n  return sum;\n}\n\n// Reconstruct square wave at t=0.1, period=2*pi, with 10 harmonics\nconst squareWave = {\n  a0: 0,\n  an: [] as number[],\n  bn: Array.from({ length: 10 }, (_, i) =>\n    (4 / Math.PI) * (1 / (2 * i + 1))\n  ),\n};\nconst val = reconstructFromFourier(squareWave, 0.1, 2 * Math.PI);\nconsole.log(`Reconstructed value: ${val.toFixed(4)}`); // ? 1.0 (square wave at t=0.1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What conditions guarantee that a Fourier series converges to the function at every point?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain Parseval's theorem in terms of signal energy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How do poles of a system's transfer function determine stability?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare the Laplace and Fourier transforms ? when would you use each?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What happens when a signal is sampled below the Nyquist rate?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Fourier Series:"
          }), " Find the Fourier series of the triangular wave $f(t) = |t|$ on $[-\\pi, \\pi]$, periodic with $T = 2\\pi$."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Laplace Transform:"
          }), " Solve $y'' + 4y = \\sin(2t)$, $y(0) = 0$, $y'(0) = 0$ using Laplace."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "System Response:"
          }), " For a system with $H(s) = \\frac{s+1}{s^2+2s+5}$, find the impulse response and determine stability."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Z-Transform:"
          }), " Find the Z-transform of $x[n] = n a^n u[n]$."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "FFT Application:"
          }), " Explain how the FFT can be used for efficient polynomial multiplication."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-example-dft-implementation",
      children: "TypeScript Example: DFT Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function dft(signal: number[]): { real: number[]; imag: number[] } {\n  const N = signal.length;\n  const real: number[] = new Array(N).fill(0);\n  const imag: number[] = new Array(N).fill(0);\n  for (let k = 0; k &lt; N; k++) {\n    for (let n = 0; n &lt; N; n++) {\n      const angle = (2 * Math.PI * k * n) / N;\n      real[k] += signal[n] * Math.cos(angle);\n      imag[k] -= signal[n] * Math.sin(angle);\n    }\n  }\n  return { real, imag };\n}\n\n// Square wave approximation via Fourier series\nfunction squareWave(t: number, harmonics: number): number {\n  let sum = 0;\n  for (let k = 0; k &lt; harmonics; k++) {\n    const n = 2 * k + 1; // odd harmonics only\n    sum += Math.sin(n * t) / n;\n  }\n  return (4 / Math.PI) * sum;\n}\n// Example: squareWave(Math.PI/2, 10) ? 0.998\nconsole.log(squareWave(Math.PI / 2, 10));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Convolution Theorem:"
          }), " Use the convolution theorem to find $\\mathcal{L}^{-1}\\left{\\frac{1}{(s^2+1)(s^2+4)}\\right}$."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Duality in Fourier Transforms:"
          }), " Using the duality property $\\mathcal{F}{F(t)} = 2\\pi f(-\\omega)$, find the Fourier transform of $\\text{sinc}(t) = \\sin(t)/t$."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sampling Theorem:"
          }), " A signal $x(t)$ has bandwidth $B = 5\\text{ kHz}$. What is the minimum sampling rate to avoid aliasing? If sampled at $8\\text{ kHz}$, what frequencies would an $8\\text{ kHz}$ component alias to?"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "transform-domain-relationships",
      children: "Transform Domain Relationships"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TB\n    subgraph \"Continuous Domain\"\n        FS[Fourier Series<br/>Periodic ? Discrete Spectrum]\n        FT[Fourier Transform<br/>Non-periodic ? Continuous Spectrum]\n        LT[Laplace Transform<br/>s = s + i?<br/>Includes transient response]\n    end\n    \n    subgraph \"Discrete Domain\"\n        DFT[Discrete Fourier Transform<br/>Sampled ? Sampled Spectrum]\n        FFT[Fast Fourier Transform<br/>O(N log N) implementation]\n        ZT[Z-Transform<br/>z = e^(sT)<br/>Discrete-time systems]\n    end\n    \n    subgraph \"Relationships\"\n        R1[FT is LT evaluated on<br/>imaginary axis s = i?]\n        R2[ZT is sampled LT:<br/>z = e^(sT)]\n        R3[DFT is sampled FT:<br/>frequency discretization]\n        R4[FS ? FT as period T ? 8]\n    end\n    \n    FS -->|Period T ? 8| FT\n    FT -->|s = i?| LT\n    FT -->|Sample at f_s| DFT\n    DFT -->|Cooley-Tukey| FFT\n    LT -->|z = e^(sT)| ZT\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-cooley-tukey-fft",
      children: "TypeScript Implementation: Cooley-Tukey FFT"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type Complex = [number, number]; // [real, imag]\n\nfunction fft(x: Complex[]): Complex[] {\n  const N = x.length;\n  if (N &lt;= 1) return x;\n\n  const even = fft(x.filter((_, i) => i % 2 === 0));\n  const odd = fft(x.filter((_, i) => i % 2 === 1));\n\n  const result: Complex[] = new Array(N);\n  for (let k = 0; k &lt; N / 2; k++) {\n    const angle = (-2 * Math.PI * k) / N;\n    const t: Complex = [\n      Math.cos(angle) * odd[k][0] - Math.sin(angle) * odd[k][1],\n      Math.cos(angle) * odd[k][1] + Math.sin(angle) * odd[k][0],\n    ];\n    result[k] = [even[k][0] + t[0], even[k][1] + t[1]];\n    result[k + N / 2] = [even[k][0] - t[0], even[k][1] - t[1]];\n  }\n  return result;\n}\n\n// Test: FFT of a pure cosine at frequency f = 2\nconst N = 16;\nconst signal: Complex[] = Array.from({ length: N }, (_, n) =>\n  [Math.cos((2 * Math.PI * 2 * n) / N), 0]\n);\n\nconst spectrum = fft(signal);\nconst magnitude = spectrum.map(([r, i]) => Math.sqrt(r * r + i * i) / N);\n\nconsole.log(\"FFT magnitude spectrum (N=16, cos at f=2):\");\nfor (let k = 0; k &lt; N / 2; k++) {\n  if (magnitude[k] > 0.01) {\n    console.log(`  f=${k}/${N}: magnitude=${magnitude[k].toFixed(4)}`);\n  }\n}\n// Output: f=2/16: magnitude ? 0.5000, f=14/16: magnitude ? 0.5000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-laplace-transform-solver-for-odes",
      children: "TypeScript: Laplace Transform Solver for ODEs"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface LaplaceSolution {\n  expression: string;\n  poles: string[];\n  stability: \"stable\" | \"unstable\" | \"marginally stable\";\n  impulseResponse: string;\n}\n\nfunction analyzeSystemFromTransferFunction(\n  numerator: number[],\n  denominator: number[]\n): LaplaceSolution {\n  const polyStr = (coeffs: number[], variable: string): string => {\n    const terms: string[] = [];\n    const deg = coeffs.length - 1;\n    for (let i = 0; i &lt;= deg; i++) {\n      if (coeffs[i] === 0) continue;\n      const exp = deg - i;\n      const sign = coeffs[i] &lt; 0 ? \" - \" : (terms.length ? \" + \" : \"\");\n      const absVal = Math.abs(coeffs[i]);\n      const coeff = exp === 0 ? `${absVal}` : absVal === 1 ? \"\" : `${absVal}`;\n      const varPart = exp === 0 ? \"\" : exp === 1 ? `${variable}` : `${variable}^${exp}`;\n      terms.push(`${sign}${coeff}${varPart}`);\n    }\n    return terms.join(\"\").trim();\n  };\n\n  // Find poles via quadratic formula (for 2nd order denominator)\n  const poles: string[] = [];\n  let stable = true;\n  if (denominator.length === 3) {\n    const [a2, a1, a0] = denominator;\n    const discriminant = a1 * a1 - 4 * a2 * a0;\n    if (discriminant >= 0) {\n      const p1 = (-a1 + Math.sqrt(discriminant)) / (2 * a2);\n      const p2 = (-a1 - Math.sqrt(discriminant)) / (2 * a2);\n      poles.push(p1.toFixed(3), p2.toFixed(3));\n      stable = p1 &lt; 0 && p2 < 0;\n    } else {\n      const real = -a1 / (2 * a2);\n      const imag = Math.sqrt(-discriminant) / (2 * a2);\n      poles.push(`${real.toFixed(3)} ? ${imag.toFixed(3)}i`);\n      stable = real &lt; 0;\n    }\n  } else if (denominator.length === 2) {\n    const p = -denominator[1] / denominator[0];\n    poles.push(p.toFixed(3));\n    stable = p &lt; 0;\n  }\n\n  return {\n    expression: `H(s) = (${polyStr(numerator, \"s\")}) / (${polyStr(denominator, \"s\")})`,\n    poles,\n    stability: stable ? \"stable\" : \"unstable\",\n    impulseResponse: poles.length > 0\n      ? `h(t) = ${poles.map(p => `e^(${p}t)`).join(\" + \")}`\n      : \"Unable to compute\",\n  };\n}\n\n// H(s) = (s + 2) / (s? + 2s + 5)\nconst result = analyzeSystemFromTransferFunction([1, 2], [1, 2, 5]);\nconsole.log(\"Transfer Function:\", result.expression);\nconsole.log(\"Poles:\", result.poles.join(\", \"));\nconsole.log(\"Stability:\", result.stability);\nconsole.log(\"Impulse Response:\", result.impulseResponse);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-z-transform-and-frequency-response",
      children: "TypeScript: Z-Transform and Frequency Response"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function zTransformFIR(\n  coefficients: number[],\n  z: number\n): number {\n  // X(z) = S h[n] z^(-n)\n  const re = coefficients.reduce(\n    (sum, h, n) => sum + h * Math.cos(-n * Math.atan2(0, z)), 0\n  );\n  const im = coefficients.reduce(\n    (sum, h, n) => sum + h * Math.sin(-n * Math.atan2(0, z)), 0\n  );\n  return Math.sqrt(re * re + im * im);\n}\n\nfunction frequencyResponse(\n  b: number[],\n  numPoints: number = 100\n): { omega: number[]; magnitude: number[] } {\n  const omega: number[] = [];\n  const magnitude: number[] = [];\n  for (let i = 0; i &lt; numPoints; i++) {\n    const w = (Math.PI * i) / (numPoints - 1);\n    omega.push(w);\n    // Evaluate H(e^(j?)) = S b[n] e^(-j?n)\n    let re = 0, im = 0;\n    for (let n = 0; n &lt; b.length; n++) {\n      re += b[n] * Math.cos(-w * n);\n      im += b[n] * Math.sin(-w * n);\n    }\n    magnitude.push(Math.sqrt(re * re + im * im));\n  }\n  return { omega, magnitude };\n}\n\n// Moving average filter: y[n] = (x[n] + x[n-1] + x[n-2]) / 3\nconst maFilter = [1 / 3, 1 / 3, 1 / 3];\nconst response = frequencyResponse(maFilter);\n\nconsole.log(\"Moving Average Filter Frequency Response:\");\nconsole.log(\"  DC (?=0):\", response.magnitude[0].toFixed(4));  // 1.0\nconsole.log(\"  Nyquist (?=p):\", response.magnitude[response.magnitude.length - 1].toFixed(4));  // 0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises-1",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "FFT Convolution:"
          }), " Implement convolution of two signals using FFT-based multiplication in the frequency domain. Verify it produces the same result as direct convolution for two length-8 signals."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Laplace Circuit Analysis:"
          }), " Using the Laplace transform, derive the transfer function $V_{out}(s)/V_{in}(s)$ for an RLC low-pass filter with $R = 1k\\Omega$, $L = 10mH$, $C = 1\\mu F$. Find the cutoff frequency and verify stability."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Digital Filter Design:"
          }), " Design a simple low-pass IIR filter using the Z-transform. The filter should have a cutoff at $\\omega_c = 0.2\\pi$ and be implementable as $H(z) = \\frac{b_0}{1 - a_1 z^{-1}}$. Determine the coefficients and verify the frequency response."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Image Compression Analysis:"
          }), " Apply the DCT to $8 \\times 8$ blocks of a synthetic test image (a 2D cosine pattern). Quantize the coefficients by zeroing all but the top-left 10% and reconstruct the image. Compute the peak signal-to-noise ratio (PSNR)."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-world-application-jpeg-image-compression",
      children: "Real-World Application: JPEG Image Compression"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JPEG compression uses the Discrete Cosine Transform (DCT), a variant of the Fourier transform that uses only cosine basis functions with real coefficients."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The DCT-II formula:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$X[k] = \\sum_{n=0}^{N-1} x[n] \\cos\\left(\\frac{\\pi}{N}\\left(n+\\frac{1}{2}\\right)k\\right)$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Unlike the DFT, the DCT has excellent energy compaction properties ? most of the signal energy concentrates in the low-frequency coefficients."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "JPEG Compression Pipeline:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color space conversion:"
        }), " RGB ? YCbCr (separates luminance from chrominance)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Block splitting:"
        }), " Image divided into $8 \\times 8$ pixel blocks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DCT:"
        }), " Each block transformed to frequency domain"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quantization:"
        }), " High-frequency coefficients divided by larger quantization values (lossy step)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zigzag scanning:"
        }), " Coefficients ordered by frequency (low to high)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Run-length + Huffman encoding:"
        }), " Lossless compression of the quantized coefficients"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Energy Compaction Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function dct1D(signal: number[]): number[] {\n  const N = signal.length;\n  const result: number[] = new Array(N).fill(0);\n  for (let k = 0; k &lt; N; k++) {\n    let sum = 0;\n    for (let n = 0; n &lt; N; n++)\n      sum += signal[n] * Math.cos((Math.PI / N) * (n + 0.5) * k);\n    result[k] = k === 0\n      ? sum / Math.sqrt(N)\n      : sum * Math.sqrt(2 / N);\n  }\n  return result;\n}\n\n// DC signal: all same value ? DCT concentrates all energy in first coefficient\nconst dcSignal = Array.from({ length: 8 }, () => 100);\nconst dctCoeffs = dct1D(dcSignal);\nconsole.log(`DC signal DCT: [${dctCoeffs.map(c => c.toFixed(1)).join(', ')}]`);\n// Only first coefficient is non-zero\n\n// Smooth ramp: energy concentrated in first few coefficients\nconst ramp = [0, 10, 20, 30, 40, 50, 60, 70];\nconst dctRamp = dct1D(ramp);\nconsole.log(`Ramp DCT: [${dctRamp.map(c => c.toFixed(1)).join(', ')}]`);\n// Large low coefficients, small high coefficients\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Quantization and Compression:"
      }), " After quantization, a typical $8 \\times 8$ block of 64 coefficients may be reduced to only 5-15 non-zero values, achieving 70-80% compression with minimal visual loss."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "laplace-transform-in-circuit-analysis",
      children: "Laplace Transform in Circuit Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Laplace transform converts integro-differential equations from circuit analysis into algebraic equations:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Laplace (s-domain)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resistor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$v(t) = Ri(t)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$V(s) = RI(s)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Capacitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$i(t) = C\\frac{dv}{dt}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$I(s) = sCV(s) - Cv(0^-)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inductor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$v(t) = L\\frac{di}{dt}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$V(s) = sLI(s) - Li(0^-)$"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " An $RLC$ circuit with $R = 2\\Omega$, $L = 1\\text{H}$, $C = 0.5\\text{F}$, initial conditions $i(0) = 1\\text{A}$, $v_C(0) = 0\\text{V}$:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The transfer function from input voltage to output across the capacitor:\n$$H(s) = \\frac{V_C(s)}{V_{in}(s)} = \\frac{1}{LC s^2 + RC s + 1} = \\frac{1}{0.5s^2 + s + 1}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Transform"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Property"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fourier Series"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Periodic continuous signals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Harmonic decomposition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fourier Transform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-periodic signals, spectrum analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time ? frequency duality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Laplace Transform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ODEs, control systems, circuits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Converts DEs to algebraic equations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Z-Transform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discrete-time systems, digital filters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maps time domain to frequency domain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DFT/FFT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Digital signal processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(N \\log N)$ computation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transform-selection-guide",
      children: "Transform Selection Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Control systems:"
        }), " Laplace transform for continuous, Z-transform for digital"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Signal filtering:"
        }), " Fourier transform for frequency-domain design"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data compression:"
        }), " FFT for spectral analysis, DCT for JPEG/image compression"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Audio processing:"
        }), " Short-Time Fourier Transform (STFT) for spectrograms"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solving ODEs:"
        }), " Laplace transform for linear constant-coefficient ODEs"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notation-reference",
      children: "Notation Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "$T$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "period"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\omega_0$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fundamental frequency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$c_n$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "complex Fourier coefficient"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$F(\\omega)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fourier transform"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\mathcal{F}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fourier transform operator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$F(s)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Laplace transform"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\mathcal{L}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Laplace transform operator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$H(s)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "transfer function"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$X(z)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Z-transform"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$ROC$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "region of convergence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$f_s$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sampling frequency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$B$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bandwidth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$X[k]$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFT coefficient"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "convolution operator"
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