"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[7614],{

/***/ 3941
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_24_statistics_mathematics_visual_notes_md_09e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-24-statistics-mathematics-visual-notes-md-09e.json
const site_docs_courses_ai_engineering_placement_24_statistics_mathematics_visual_notes_md_09e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/statistics-mathematics/visual-notes","title":"Visual Notes — The Math Under Every Model","description":"One diagram, the full picture. This page is meant to be glanced at before reading the chapters, and again before interviews.","source":"@site/docs/courses/ai-engineering-placement/24-statistics-mathematics/visual-notes.md","sourceDirName":"courses/ai-engineering-placement/24-statistics-mathematics","slug":"/ai-engineering-placement/24-statistics-mathematics/visual-notes","permalink":"/ai-engineering-journey/ai-engineering-placement/24-statistics-mathematics/visual-notes","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":308,"frontMatter":{"id":"visual-notes","slug":"/ai-engineering-placement/24-statistics-mathematics/visual-notes","title":"Visual Notes — The Math Under Every Model","sidebar_label":"Visual Notes","sidebar_position":308},"sidebar":"placementSidebar","previous":{"title":"Chapter 08: Statistics for ML — Practical","permalink":"/ai-engineering-journey/ai-engineering-placement/24-statistics-mathematics/08-statistics-for-ml-practical"},"next":{"title":"25 — Data Engineering for AI Engineers","permalink":"/ai-engineering-journey/ai-engineering-placement/25-data-engineering"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/24-statistics-mathematics/visual-notes.md


const frontMatter = {
	id: 'visual-notes',
	slug: '/ai-engineering-placement/24-statistics-mathematics/visual-notes',
	title: 'Visual Notes — The Math Under Every Model',
	sidebar_label: 'Visual Notes',
	sidebar_position: 308
};
const contentTitle = 'Visual Notes — The Math Under Every Model';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    em: "em",
    h1: "h1",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "visual-notes--the-math-under-every-model",
        children: "Visual Notes — The Math Under Every Model"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "One diagram, the full picture. This page is meant to be glanced at before reading the chapters, and again before interviews."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "The Math Under Every Model",
        src: (__webpack_require__(5852)/* ["default"] */ .A) + "",
        width: "1000",
        height: "480"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "what-the-diagram-shows",
      children: "What the diagram shows"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Linear algebra"
        }), " — Tensors, matrices, dot products — the substrate of every neural network."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculus"
        }), " — Gradients and the chain rule drive optimisation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Probability & stats"
        }), " — Distributions, hypothesis tests and A/B testing measure certainty and effect."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "why-this-matters-for-placement",
      children: "Why this matters for placement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Even applied roles probe math basics: variance, Bayes, and \"what does a p-value mean?\"."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Relating each math area to concrete ML use beats rote formula recall."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "quick-revision",
      children: "Quick revision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linear algebra: matrix multiply as feature transform; eigenvectors in PCA/SVD."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculus: ∂loss/∂weight = chain rule; gradient descent walks toward the minimum."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Probability: Bayes rule, likelihood vs prior, conditional independence."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stats: p-value (prob of observing data under H0), confidence intervals, type I/II error."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A/B testing: sample size, significance, effect size, guardrail metrics."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "related-chapters",
      children: "Related chapters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/24-statistics-mathematics/01-descriptive-statistics",
          children: "Descriptive statistics"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/24-statistics-mathematics/02-probability-basics",
          children: "Probability basics"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/24-statistics-mathematics/05-linear-algebra-essentials",
          children: "Linear algebra essentials"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/24-statistics-mathematics/06-calculus-for-ml",
          children: "Calculus for ML"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-line answer for interviews:"
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"Linear algebra, calculus, probability and statistics support everything you build — one model at a time.\""
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

/***/ 5852
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwMCA0ODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsbGVkYnk9IjI0X3N0YXRpdi10aXRsZSAyNF9zdGF0aXYtZGVzYyI+DQo8dGl0bGUgaWQ9IjI0X3N0YXRpdi10aXRsZSI+TWF0aCBmb3IgQUkg4oCUIHRoZSBmb3VyIHJvb3RzPC90aXRsZT4NCjxkZXNjIGlkPSIyNF9zdGF0aXYtZGVzYyI+TGluZWFyIGFsZ2VicmEsIGNhbGN1bHVzLCBwcm9iYWJpbGl0eSBhbmQgc3RhdGlzdGljcyBzdXBwb3J0aW5nIGV2ZXJ5IG1vZGVsIHlvdSBidWlsZC48L2Rlc2M+DQo8cmVjdCB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI0ODAiIGZpbGw9IiNmZmZmZmYiLz4NCjxsaW5lIHgxPSI1MDAiIHkxPSIxNDAiIHgyPSI1MDAiIHkyPSIxNzYiIHN0cm9rZT0iIzRmNWQ3NSIgc3Ryb2tlLXdpZHRoPSIxIi8+DQo8bGluZSB4MT0iMTYwIiB5MT0iMTc2IiB4Mj0iNjg4IiB5Mj0iMTc2IiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIvPg0KPGxpbmUgeDE9IjE2MCIgeTE9IjE3NiIgeDI9IjE2MCIgeTI9IjIyNCIgc3Ryb2tlPSIjNGY1ZDc1IiBzdHJva2Utd2lkdGg9IjEiLz4NCjxsaW5lIHgxPSIzMzYiIHkxPSIxNzYiIHgyPSIzMzYiIHkyPSIyMjQiIHN0cm9rZT0iIzRmNWQ3NSIgc3Ryb2tlLXdpZHRoPSIxIi8+DQo8bGluZSB4MT0iNTEyIiB5MT0iMTc2IiB4Mj0iNTEyIiB5Mj0iMjI0IiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIvPg0KPGxpbmUgeDE9IjY4OCIgeTE9IjE3NiIgeDI9IjY4OCIgeTI9IjIyNCIgc3Ryb2tlPSIjNGY1ZDc1IiBzdHJva2Utd2lkdGg9IjEiLz4NCjxyZWN0IHg9IjM4MCIgeT0iODgiIHdpZHRoPSIyNDAiIGhlaWdodD0iNTIiIHJ4PSI2IiBmaWxsPSJyZ2JhKDQ2LDEzMyw4NSwwLjA4KSIgc3Ryb2tlPSIjMmU4NTU1IiBzdHJva2Utd2lkdGg9IjEiLz4NCjx0ZXh0IHg9IjUwMCIgeT0iMTE1IiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5NYXRoIGZvciBBSTwvdGV4dD4NCjx0ZXh0IHg9IjUwMCIgeT0iMTI5IiBmaWxsPSIjMmU4NTU1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+dGhlIHJlYXNvbmluZyBlbmdpbmU8L3RleHQ+DQo8cmVjdCB4PSI4NiIgeT0iMjI0IiB3aWR0aD0iMTQ4IiBoZWlnaHQ9IjU2IiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4NCjx0ZXh0IHg9IjE2MCIgeT0iMjUzIiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5MaW5lYXIgYWxnZWJyYTwvdGV4dD4NCjx0ZXh0IHg9IjE2MCIgeT0iMjY3IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+dmVjdG9ycyDCtyBtYXRyaWNlczwvdGV4dD4NCjxyZWN0IHg9IjI2MiIgeT0iMjI0IiB3aWR0aD0iMTQ4IiBoZWlnaHQ9IjU2IiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4NCjx0ZXh0IHg9IjMzNiIgeT0iMjUzIiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DYWxjdWx1czwvdGV4dD4NCjx0ZXh0IHg9IjMzNiIgeT0iMjY3IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Z3JhZGllbnRzIMK3IGNoYWluIHJ1bGU8L3RleHQ+DQo8cmVjdCB4PSI0MzgiIHk9IjIyNCIgd2lkdGg9IjE0OCIgaGVpZ2h0PSI1NiIgcng9IjYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+DQo8dGV4dCB4PSI1MTIiIHk9IjI1MyIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UHJvYmFiaWxpdHk8L3RleHQ+DQo8dGV4dCB4PSI1MTIiIHk9IjI2NyIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmRpc3RyaWJ1dGlvbnMgwrcgYmF5ZXM8L3RleHQ+DQo8cmVjdCB4PSI2MTQiIHk9IjIyNCIgd2lkdGg9IjE0OCIgaGVpZ2h0PSI1NiIgcng9IjYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+DQo8dGV4dCB4PSI2ODgiIHk9IjI1MyIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U3RhdGlzdGljczwvdGV4dD4NCjx0ZXh0IHg9IjY4OCIgeT0iMjY3IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+aW5mZXJlbmNlIMK3IHRlc3RzPC90ZXh0Pg0KPHRleHQgeD0iMTIwIiB5PSIzNjQiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4xOGVtIj5JTlRFUlZJRVcgQU5HTEU8L3RleHQ+PHRleHQgeD0iMjEyIiB5PSIzNjQiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zdHlsZT0iaXRhbGljIj5JbnRlcnZpZXdzIHByb2JlIHVuZGVyc3RhbmRpbmcsIG5vdCBmb3JtdWxhczoga25vdyB3aHkgZWFjaCByb290IG1hdHRlcnMuPC90ZXh0Pg0KPGxpbmUgeDE9IjEyMCIgeTE9IjQyMCIgeDI9Ijg4MCIgeTI9IjQyMCIgc3Ryb2tlPSJyZ2JhKDI2LDI3LDM1LDAuMTApIiBzdHJva2Utd2lkdGg9IjEiLz48dGV4dCB4PSIxMjAiIHk9IjQzNiIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjE0ZW0iPkxFR0VORDwvdGV4dD48cmVjdCB4PSIyMDAiIHk9IjQyNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0icmdiYSg0NiwxMzMsODUsMC4wOCkiIHN0cm9rZT0iIzJlODU1NSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHRleHQgeD0iMjI0IiB5PSI0MzYiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4wNmVtIj5BQ0NFTlQgPSBGT0NBTDwvdGV4dD48cmVjdCB4PSIzNjAiIHk9IjQyNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz48dGV4dCB4PSIzODQiIHk9IjQzNiIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjA2ZW0iPlBBUEVSID0gU1RFUDwvdGV4dD4NCjwvc3ZnPg==");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


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