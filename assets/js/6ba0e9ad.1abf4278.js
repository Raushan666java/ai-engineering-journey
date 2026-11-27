"use strict";
(self["webpackChunksite"] = self["webpackChunksite"] || []).push([["19622"], {
6284(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_15_ai_evaluation_observability_visual_notes_md_6ba_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-15-ai-evaluation-observability-visual-notes-md-6ba.json
var site_docs_courses_ai_engineering_placement_15_ai_evaluation_observability_visual_notes_md_6ba_namespaceObject = JSON.parse('{"id":"courses/ai-engineering-placement/ai-evaluation-observability/visual-notes","title":"Visual Notes — Evaluation and Observability in One View","description":"One-line answer for interviews: \'Offline metrics validate before launch; online metrics, tracing and cost watch it in production.\'","source":"@site/docs/courses/ai-engineering-placement/15-ai-evaluation-observability/visual-notes.md","sourceDirName":"courses/ai-engineering-placement/15-ai-evaluation-observability","slug":"/ai-engineering-placement/15-ai-evaluation-observability/visual-notes","permalink":"/ai-engineering-journey/ai-engineering-placement/15-ai-evaluation-observability/visual-notes","draft":false,"unlisted":false,"editUrl":"https://github.com/Raushan666java/ai-engineering-journey/tree/main/site/docs/docs/courses/ai-engineering-placement/15-ai-evaluation-observability/visual-notes.md","tags":[],"version":"current","lastUpdatedAt":1795167173000,"sidebarPosition":205,"frontMatter":{"id":"visual-notes","slug":"/ai-engineering-placement/15-ai-evaluation-observability/visual-notes","title":"Visual Notes — Evaluation and Observability in One View","sidebar_label":"Visual Notes","sidebar_position":205,"description":"One-line answer for interviews: \'Offline metrics validate before launch; online metrics, tracing and cost watch it in production.\'"},"sidebar":"placementSidebar","previous":{"title":"Alerting & Incident Response","permalink":"/ai-engineering-journey/ai-engineering-placement/15-ai-evaluation-observability/06-alerting-and-incident-response"},"next":{"title":"16 — MLOps & Production AI","permalink":"/ai-engineering-journey/ai-engineering-placement/16-mlops-production"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/courses/ai-engineering-placement/15-ai-evaluation-observability/visual-notes.md


const frontMatter = {
	id: 'visual-notes',
	slug: '/ai-engineering-placement/15-ai-evaluation-observability/visual-notes',
	title: 'Visual Notes — Evaluation and Observability in One View',
	sidebar_label: 'Visual Notes',
	sidebar_position: 205,
	description: 'One-line answer for interviews: \'Offline metrics validate before launch; online metrics, tracing and cost watch it in production.\''
};
const contentTitle = 'Visual Notes — Evaluation and Observability in One View';

const assets = {

};



const toc = [{
  "value": "What the diagram shows",
  "id": "what-the-diagram-shows",
  "level": 2
}, {
  "value": "Why this matters for placement",
  "id": "why-this-matters-for-placement",
  "level": 2
}, {
  "value": "Quick revision",
  "id": "quick-revision",
  "level": 2
}, {
  "value": "Related chapters",
  "id": "related-chapters",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    em: "em",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
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
        src: (__webpack_require__(83238)/* ["default"] */.A) + "",
        width: "1000",
        height: "560"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-this-matters-for-placement",
      children: "Why this matters for placement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"How do you measure an LLM app?\" — having offline + online + cost answers it completely."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The ability to build eval harnesses is a differentiator recruiters actively screen for."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



},
83238(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwMCA1NjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsbGVkYnk9IjE1X2FpX2V2di10aXRsZSAxNV9haV9ldnYtZGVzYyI+Cjx0aXRsZSBpZD0iMTVfYWlfZXZ2LXRpdGxlIj5FdmFsdWF0aW9uICZhbXA7IG9ic2VydmFiaWxpdHkg4oCUIHRoZSBBSSBzY29yZWJvYXJkPC90aXRsZT4KPGRlc2MgaWQ9IjE1X2FpX2V2di1kZXNjIj5PZmZsaW5lIG1ldHJpY3MsIG9ubGluZSBtZXRyaWNzLCB0cmFjaW5nIGFuZCBjb3N0IHRyYWNraW5nIGluIG9uZSBkYXNoYm9hcmQgdmlldy48L2Rlc2M+CjxyZWN0IHdpZHRoPSIxMDAwIiBoZWlnaHQ9IjU2MCIgZmlsbD0iI2ZmZmZmZiIvPgo8cmVjdCB4PSIxMjAiIHk9IjEwOCIgd2lkdGg9IjQ4MCIgaGVpZ2h0PSI1NiIgcng9IjYiIGZpbGw9InJnYmEoNDYsMTMzLDg1LDAuMDgpIiBzdHJva2U9IiMyZTg1NTUiIHN0cm9rZS13aWR0aD0iMSIvPgo8dGV4dCB4PSIxNDAiIHk9IjEzMiIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiI+UXVhbGl0eSBtZXRyaWNzPC90ZXh0Pgo8dGV4dCB4PSIxNDAiIHk9IjE0OCIgZmlsbD0iIzJlODU1NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiPmFjY3VyYWN5IMK3IHJvdWdlIMK3IGJsZXU8L3RleHQ+CjxyZWN0IHg9IjY0MCIgeT0iMTA4IiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjU2IiByeD0iNiIgZmlsbD0iI2Y1ZjZmOCIgc3Ryb2tlPSJyZ2JhKDI2LDI3LDM1LDAuMTIpIiBzdHJva2Utd2lkdGg9IjEiLz4KPHRleHQgeD0iNzYwIiB5PSIxMzgiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBsZXR0ZXItc3BhY2luZz0iMC4wNmVtIj53aGF0IHRvIG1lYXN1cmU8L3RleHQ+CjxyZWN0IHg9IjEyMCIgeT0iMTY0IiB3aWR0aD0iNDgwIiBoZWlnaHQ9IjU2IiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4KPHRleHQgeD0iMTQwIiB5PSIxODgiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiPkxhdGVuY3kgJmFtcDsgY29zdDwvdGV4dD4KPHRleHQgeD0iMTQwIiB5PSIyMDQiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIj5wNTAgwrcgcDk1IMK3ICQgcGVyIHJlcXVlc3Q8L3RleHQ+CjxyZWN0IHg9IjY0MCIgeT0iMTY0IiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjU2IiByeD0iNiIgZmlsbD0iI2Y1ZjZmOCIgc3Ryb2tlPSJyZ2JhKDI2LDI3LDM1LDAuMTIpIiBzdHJva2Utd2lkdGg9IjEiLz4KPHRleHQgeD0iNzYwIiB5PSIxOTQiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBsZXR0ZXItc3BhY2luZz0iMC4wNmVtIj50aGUgYnVkZ2V0PC90ZXh0Pgo8cmVjdCB4PSIxMjAiIHk9IjIyMCIgd2lkdGg9IjQ4MCIgaGVpZ2h0PSI1NiIgcng9IjYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjx0ZXh0IHg9IjE0MCIgeT0iMjQ0IiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIj5EcmlmdCAmYW1wOyB0cmFjaW5nPC90ZXh0Pgo8dGV4dCB4PSIxNDAiIHk9IjI2MCIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiPmlucHV0IGRyaWZ0IMK3IHRyYWNlczwvdGV4dD4KPHJlY3QgeD0iNjQwIiB5PSIyMjAiIHdpZHRoPSIyNDAiIGhlaWdodD0iNTYiIHJ4PSI2IiBmaWxsPSIjZjVmNmY4IiBzdHJva2U9InJnYmEoMjYsMjcsMzUsMC4xMikiIHN0cm9rZS13aWR0aD0iMSIvPgo8dGV4dCB4PSI3NjAiIHk9IjI1MCIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSIwLjA2ZW0iPmNhdGNoIGRlZ3JhZGF0aW9uPC90ZXh0Pgo8cmVjdCB4PSIxMjAiIHk9IjI3NiIgd2lkdGg9IjQ4MCIgaGVpZ2h0PSI1NiIgcng9IjYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjx0ZXh0IHg9IjE0MCIgeT0iMzAwIiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIj5HdWFyZHJhaWwgY2hlY2tzPC90ZXh0Pgo8dGV4dCB4PSIxNDAiIHk9IjMxNiIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiPnRveGljaXR5IMK3IFBJSSDCtyBwb2xpY3k8L3RleHQ+CjxyZWN0IHg9IjY0MCIgeT0iMjc2IiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjU2IiByeD0iNiIgZmlsbD0iI2Y1ZjZmOCIgc3Ryb2tlPSJyZ2JhKDI2LDI3LDM1LDAuMTIpIiBzdHJva2Utd2lkdGg9IjEiLz4KPHRleHQgeD0iNzYwIiB5PSIzMDYiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBsZXR0ZXItc3BhY2luZz0iMC4wNmVtIj5zYWZldHkgbGF5ZXI8L3RleHQ+Cjx0ZXh0IHg9IjEyMCIgeT0iNDQ0IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMThlbSI+SU5URVJWSUVXIEFOR0xFPC90ZXh0Pjx0ZXh0IHg9IjIxMiIgeT0iNDQ0IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc3R5bGU9Iml0YWxpYyI+IkhvdyBkbyB5b3Uga25vdyB5b3VyIG1vZGVsIGlzIGdvb2Q/IiDigJQgdGhpcyBpcyB0aGUgZGFzaGJvYXJkIHlvdSBwb2ludCBhdC48L3RleHQ+CjxsaW5lIHgxPSIxMjAiIHkxPSI1MDAiIHgyPSI4ODAiIHkyPSI1MDAiIHN0cm9rZT0icmdiYSgyNiwyNywzNSwwLjEwKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHRleHQgeD0iMTIwIiB5PSI1MTYiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4xNGVtIj5MRUdFTkQ8L3RleHQ+PHJlY3QgeD0iMjAwIiB5PSI1MDYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9InJnYmEoNDYsMTMzLDg1LDAuMDgpIiBzdHJva2U9IiMyZTg1NTUiIHN0cm9rZS13aWR0aD0iMSIvPjx0ZXh0IHg9IjIyNCIgeT0iNTE2IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMDZlbSI+QUNDRU5UID0gRk9DQUw8L3RleHQ+PHJlY3QgeD0iMzYwIiB5PSI1MDYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+PHRleHQgeD0iMzg0IiB5PSI1MTYiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4wNmVtIj5QQVBFUiA9IFNURVA8L3RleHQ+Cjwvc3ZnPg==");

},
28453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);
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

const MDXContext = react__rspack_import_0.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__rspack_import_0.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__rspack_import_0.useMemo(
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

  return react__rspack_import_0.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


},

}]);