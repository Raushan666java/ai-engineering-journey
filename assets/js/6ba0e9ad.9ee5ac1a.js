"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[73605],{

/***/ 1579
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_15_ai_evaluation_observability_visual_notes_md_6ba_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-15-ai-evaluation-observability-visual-notes-md-6ba.json
const site_docs_courses_ai_engineering_placement_15_ai_evaluation_observability_visual_notes_md_6ba_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/ai-evaluation-observability/visual-notes","title":"Visual Notes — Evaluation and Observability in One View","description":"One diagram, the full picture. This page is meant to be glanced at before reading the chapters, and again before interviews.","source":"@site/docs/courses/ai-engineering-placement/15-ai-evaluation-observability/visual-notes.md","sourceDirName":"courses/ai-engineering-placement/15-ai-evaluation-observability","slug":"/ai-engineering-placement/15-ai-evaluation-observability/visual-notes","permalink":"/ai-engineering-journey/ai-engineering-placement/15-ai-evaluation-observability/visual-notes","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":205,"frontMatter":{"id":"visual-notes","slug":"/ai-engineering-placement/15-ai-evaluation-observability/visual-notes","title":"Visual Notes — Evaluation and Observability in One View","sidebar_label":"Visual Notes","sidebar_position":205},"sidebar":"placementSidebar","previous":{"title":"Alerting & Incident Response","permalink":"/ai-engineering-journey/ai-engineering-placement/15-ai-evaluation-observability/06-alerting-and-incident-response"},"next":{"title":"16 — MLOps & Production AI","permalink":"/ai-engineering-journey/ai-engineering-placement/16-mlops-production"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/15-ai-evaluation-observability/visual-notes.md


const frontMatter = {
	id: 'visual-notes',
	slug: '/ai-engineering-placement/15-ai-evaluation-observability/visual-notes',
	title: 'Visual Notes — Evaluation and Observability in One View',
	sidebar_label: 'Visual Notes',
	sidebar_position: 205
};
const contentTitle = 'Visual Notes — Evaluation and Observability in One View';

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
        id: "visual-notes--evaluation-and-observability-in-one-view",
        children: "Visual Notes — Evaluation and Observability in One View"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "One diagram, the full picture. This page is meant to be glanced at before reading the chapters, and again before interviews."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Evaluation and Observability in One View",
        src: (__webpack_require__(52146)/* ["default"] */ .A) + "",
        width: "1000",
        height: "560"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "what-the-diagram-shows",
      children: "What the diagram shows"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Offline"
        }), " — Golden datasets and LLM-as-judge score quality before anything ships."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Online"
        }), " — Latency, error rate, drift and user feedback track live behaviour."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trace & cost"
        }), " — Every request is traced across steps; token and dollar costs are accounted per feature."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "why-this-matters-for-placement",
      children: "Why this matters for placement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"How do you measure an LLM app?\" — having offline + online + cost answers it completely."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The ability to build eval harnesses is a differentiator recruiters actively screen for."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "quick-revision",
      children: "Quick revision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Offline first: regression suites catch silent quality drops before users do."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LLM-as-judge: prompt a strong model to score outputs; validate the judge against humans."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tracing (OpenTelemetry-style) links one request across retrieval -> generation -> post-processing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor drift, latency percentiles, error budgets — not just averages."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cost per request is an evaluation axis, not an afterthought."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "related-chapters",
      children: "Related chapters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/15-ai-evaluation-observability/01-evaluation-metrics",
          children: "Evaluation metrics"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/15-ai-evaluation-observability/02-llm-as-judge",
          children: "LLM as judge"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/15-ai-evaluation-observability/05-tracing-and-monitoring",
          children: "Tracing and monitoring"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/15-ai-evaluation-observability/06-alerting-and-incident-response",
          children: "Alerting"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-line answer for interviews:"
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"Offline metrics validate before launch; online metrics, tracing and cost watch it in production.\""
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

/***/ 52146
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwMCA1NjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsbGVkYnk9IjE1X2FpX2V2di10aXRsZSAxNV9haV9ldnYtZGVzYyI+DQo8dGl0bGUgaWQ9IjE1X2FpX2V2di10aXRsZSI+RXZhbHVhdGlvbiAmYW1wOyBvYnNlcnZhYmlsaXR5IOKAlCB0aGUgQUkgc2NvcmVib2FyZDwvdGl0bGU+DQo8ZGVzYyBpZD0iMTVfYWlfZXZ2LWRlc2MiPk9mZmxpbmUgbWV0cmljcywgb25saW5lIG1ldHJpY3MsIHRyYWNpbmcgYW5kIGNvc3QgdHJhY2tpbmcgaW4gb25lIGRhc2hib2FyZCB2aWV3LjwvZGVzYz4NCjxyZWN0IHdpZHRoPSIxMDAwIiBoZWlnaHQ9IjU2MCIgZmlsbD0iI2ZmZmZmZiIvPg0KPHJlY3QgeD0iMTIwIiB5PSIxMDgiIHdpZHRoPSI0ODAiIGhlaWdodD0iNTYiIHJ4PSI2IiBmaWxsPSJyZ2JhKDQ2LDEzMyw4NSwwLjA4KSIgc3Ryb2tlPSIjMmU4NTU1IiBzdHJva2Utd2lkdGg9IjEiLz4NCjx0ZXh0IHg9IjE0MCIgeT0iMTMyIiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIj5RdWFsaXR5IG1ldHJpY3M8L3RleHQ+DQo8dGV4dCB4PSIxNDAiIHk9IjE0OCIgZmlsbD0iIzJlODU1NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiPmFjY3VyYWN5IMK3IHJvdWdlIMK3IGJsZXU8L3RleHQ+DQo8cmVjdCB4PSI2NDAiIHk9IjEwOCIgd2lkdGg9IjI0MCIgaGVpZ2h0PSI1NiIgcng9IjYiIGZpbGw9IiNmNWY2ZjgiIHN0cm9rZT0icmdiYSgyNiwyNywzNSwwLjEyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+DQo8dGV4dCB4PSI3NjAiIHk9IjEzOCIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSIwLjA2ZW0iPndoYXQgdG8gbWVhc3VyZTwvdGV4dD4NCjxyZWN0IHg9IjEyMCIgeT0iMTY0IiB3aWR0aD0iNDgwIiBoZWlnaHQ9IjU2IiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4NCjx0ZXh0IHg9IjE0MCIgeT0iMTg4IiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIj5MYXRlbmN5ICZhbXA7IGNvc3Q8L3RleHQ+DQo8dGV4dCB4PSIxNDAiIHk9IjIwNCIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiPnA1MCDCtyBwOTUgwrcgJCBwZXIgcmVxdWVzdDwvdGV4dD4NCjxyZWN0IHg9IjY0MCIgeT0iMTY0IiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjU2IiByeD0iNiIgZmlsbD0iI2Y1ZjZmOCIgc3Ryb2tlPSJyZ2JhKDI2LDI3LDM1LDAuMTIpIiBzdHJva2Utd2lkdGg9IjEiLz4NCjx0ZXh0IHg9Ijc2MCIgeT0iMTk0IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgbGV0dGVyLXNwYWNpbmc9IjAuMDZlbSI+dGhlIGJ1ZGdldDwvdGV4dD4NCjxyZWN0IHg9IjEyMCIgeT0iMjIwIiB3aWR0aD0iNDgwIiBoZWlnaHQ9IjU2IiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4NCjx0ZXh0IHg9IjE0MCIgeT0iMjQ0IiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIj5EcmlmdCAmYW1wOyB0cmFjaW5nPC90ZXh0Pg0KPHRleHQgeD0iMTQwIiB5PSIyNjAiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIj5pbnB1dCBkcmlmdCDCtyB0cmFjZXM8L3RleHQ+DQo8cmVjdCB4PSI2NDAiIHk9IjIyMCIgd2lkdGg9IjI0MCIgaGVpZ2h0PSI1NiIgcng9IjYiIGZpbGw9IiNmNWY2ZjgiIHN0cm9rZT0icmdiYSgyNiwyNywzNSwwLjEyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+DQo8dGV4dCB4PSI3NjAiIHk9IjI1MCIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSIwLjA2ZW0iPmNhdGNoIGRlZ3JhZGF0aW9uPC90ZXh0Pg0KPHJlY3QgeD0iMTIwIiB5PSIyNzYiIHdpZHRoPSI0ODAiIGhlaWdodD0iNTYiIHJ4PSI2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTFiMjMiIHN0cm9rZS13aWR0aD0iMSIvPg0KPHRleHQgeD0iMTQwIiB5PSIzMDAiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiPkd1YXJkcmFpbCBjaGVja3M8L3RleHQ+DQo8dGV4dCB4PSIxNDAiIHk9IjMxNiIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiPnRveGljaXR5IMK3IFBJSSDCtyBwb2xpY3k8L3RleHQ+DQo8cmVjdCB4PSI2NDAiIHk9IjI3NiIgd2lkdGg9IjI0MCIgaGVpZ2h0PSI1NiIgcng9IjYiIGZpbGw9IiNmNWY2ZjgiIHN0cm9rZT0icmdiYSgyNiwyNywzNSwwLjEyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+DQo8dGV4dCB4PSI3NjAiIHk9IjMwNiIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSIwLjA2ZW0iPnNhZmV0eSBsYXllcjwvdGV4dD4NCjx0ZXh0IHg9IjEyMCIgeT0iNDQ0IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMThlbSI+SU5URVJWSUVXIEFOR0xFPC90ZXh0Pjx0ZXh0IHg9IjIxMiIgeT0iNDQ0IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc3R5bGU9Iml0YWxpYyI+IkhvdyBkbyB5b3Uga25vdyB5b3VyIG1vZGVsIGlzIGdvb2Q/IiDigJQgdGhpcyBpcyB0aGUgZGFzaGJvYXJkIHlvdSBwb2ludCBhdC48L3RleHQ+DQo8bGluZSB4MT0iMTIwIiB5MT0iNTAwIiB4Mj0iODgwIiB5Mj0iNTAwIiBzdHJva2U9InJnYmEoMjYsMjcsMzUsMC4xMCkiIHN0cm9rZS13aWR0aD0iMSIvPjx0ZXh0IHg9IjEyMCIgeT0iNTE2IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMTRlbSI+TEVHRU5EPC90ZXh0PjxyZWN0IHg9IjIwMCIgeT0iNTA2IiB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHJ4PSIyIiBmaWxsPSJyZ2JhKDQ2LDEzMyw4NSwwLjA4KSIgc3Ryb2tlPSIjMmU4NTU1IiBzdHJva2Utd2lkdGg9IjEiLz48dGV4dCB4PSIyMjQiIHk9IjUxNiIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjA2ZW0iPkFDQ0VOVCA9IEZPQ0FMPC90ZXh0PjxyZWN0IHg9IjM2MCIgeT0iNTA2IiB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHJ4PSIyIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTFiMjMiIHN0cm9rZS13aWR0aD0iMSIvPjx0ZXh0IHg9IjM4NCIgeT0iNTE2IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMDZlbSI+UEFQRVIgPSBTVEVQPC90ZXh0Pg0KPC9zdmc+");
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