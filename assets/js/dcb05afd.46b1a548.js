"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[32794],{

/***/ 24506
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_23_trending_aiml_platforms_visual_notes_md_dcb_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-23-trending-aiml-platforms-visual-notes-md-dcb.json
const site_docs_courses_ai_engineering_placement_23_trending_aiml_platforms_visual_notes_md_dcb_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/trending-aiml-platforms/visual-notes","title":"Visual Notes — Choosing Your AI Stack","description":"One diagram, the full picture. This page is meant to be glanced at before reading the chapters, and again before interviews.","source":"@site/docs/courses/ai-engineering-placement/23-trending-aiml-platforms/visual-notes.md","sourceDirName":"courses/ai-engineering-placement/23-trending-aiml-platforms","slug":"/ai-engineering-placement/23-trending-aiml-platforms/visual-notes","permalink":"/ai-engineering-journey/ai-engineering-placement/23-trending-aiml-platforms/visual-notes","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":298,"frontMatter":{"id":"visual-notes","slug":"/ai-engineering-placement/23-trending-aiml-platforms/visual-notes","title":"Visual Notes — Choosing Your AI Stack","sidebar_label":"Visual Notes","sidebar_position":298},"sidebar":"placementSidebar","previous":{"title":"08 — Deployment Stack Comparison: vLLM vs SGLang vs Ollama vs TGI","permalink":"/ai-engineering-journey/ai-engineering-placement/23-trending-aiml-platforms/08-deployment-stack-comparison"},"next":{"title":"Statistics & Mathematics for AI Engineers","permalink":"/ai-engineering-journey/ai-engineering-placement/24-statistics-mathematics"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/23-trending-aiml-platforms/visual-notes.md


const frontMatter = {
	id: 'visual-notes',
	slug: '/ai-engineering-placement/23-trending-aiml-platforms/visual-notes',
	title: 'Visual Notes — Choosing Your AI Stack',
	sidebar_label: 'Visual Notes',
	sidebar_position: 298
};
const contentTitle = 'Visual Notes — Choosing Your AI Stack';

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
        id: "visual-notes--choosing-your-ai-stack",
        children: "Visual Notes — Choosing Your AI Stack"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "One diagram, the full picture. This page is meant to be glanced at before reading the chapters, and again before interviews."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Choosing Your AI Stack",
        src: (__webpack_require__(47166)/* ["default"] */ .A) + "",
        width: "1000",
        height: "560"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "what-the-diagram-shows",
      children: "What the diagram shows"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Providers"
        }), " — Frontier LLM APIs (DeepSeek, Gemini, Mistral, Together/Groq) expose models you call by token."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frameworks"
        }), " — Agent harnesses (CrewAI, AutoGen, LangGraph) and dev toolkits (Claude Code, Codex CLI, Vercel AI SDK) shape how you build."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ecosystem"
        }), " — Open-source deployment (Ollama, vLLM, Unsloth) and orchestration (Dify, n8n) complete the stack."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "why-this-matters-for-placement",
      children: "Why this matters for placement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Which platform would you use and why?\" needs one crisp answer per slot, not a menu."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tasteful stack choice (API vs framework vs self-host) signals real judgment."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "quick-revision",
      children: "Quick revision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "API vs self-host: cost control and data control vs convenience; vLLM for throughput, Ollama for local."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Frameworks standardise multi-step agents; pick one and know it deeply."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Model selection: benchmark + cost + latency + data residency + license."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fine-tune with Unsloth/Ollama for private/bespoke behaviour."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No single tool does all — draw the boundary between provider, framework and infra."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "related-chapters",
      children: "Related chapters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/23-trending-aiml-platforms/01-frontier-llm-apis-providers",
          children: "Frontier LLM APIs"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/23-trending-aiml-platforms/02-agent-platforms-harness-orchestration",
          children: "Agent platforms"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/23-trending-aiml-platforms/03-ai-developer-toolkits-workflows",
          children: "AI developer toolkits"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/23-trending-aiml-platforms/08-deployment-stack-comparison",
          children: "Deployment stack"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-line answer for interviews:"
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"Providers grant API access, frameworks orchestrate agents, and ecosystems of tools surround each model.\""
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

/***/ 47166
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwMCA1NjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsbGVkYnk9IjIzX3RyZW5kdi10aXRsZSAyM190cmVuZHYtZGVzYyI+DQo8dGl0bGUgaWQ9IjIzX3RyZW5kdi10aXRsZSI+QUkgcGxhdGZvcm0gbGFuZHNjYXBlIOKAlCBwaWNrIHlvdXIgc3RhY2s8L3RpdGxlPg0KPGRlc2MgaWQ9IjIzX3RyZW5kdi1kZXNjIj5Qcm92aWRlcnMsIGFnZW50IGZyYW1ld29ya3MsIGRldiB0b29sa2l0cyBhbmQgbW9kZWwgZWNvc3lzdGVtcyBjb21wYXJlZCBieSByb2xlLjwvZGVzYz4NCjxyZWN0IHdpZHRoPSIxMDAwIiBoZWlnaHQ9IjU2MCIgZmlsbD0iI2ZmZmZmZiIvPg0KPHJlY3QgeD0iMTIwIiB5PSIxMDgiIHdpZHRoPSI0ODAiIGhlaWdodD0iNTYiIHJ4PSI2IiBmaWxsPSJyZ2JhKDQ2LDEzMyw4NSwwLjA4KSIgc3Ryb2tlPSIjMmU4NTU1IiBzdHJva2Utd2lkdGg9IjEiLz4NCjx0ZXh0IHg9IjE0MCIgeT0iMTMyIiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIj5Nb2RlbCBwcm92aWRlcnM8L3RleHQ+DQo8dGV4dCB4PSIxNDAiIHk9IjE0OCIgZmlsbD0iIzJlODU1NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiPm9wZW5haSDCtyBhbnRocm9waWMgwrcgZGVlcHNlZWs8L3RleHQ+DQo8cmVjdCB4PSI2NDAiIHk9IjEwOCIgd2lkdGg9IjI0MCIgaGVpZ2h0PSI1NiIgcng9IjYiIGZpbGw9IiNmNWY2ZjgiIHN0cm9rZT0icmdiYSgyNiwyNywzNSwwLjEyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+DQo8dGV4dCB4PSI3NjAiIHk9IjEzOCIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSIwLjA2ZW0iPnBpY2sgYnkgY29zdCArIHF1YWxpdHk8L3RleHQ+DQo8cmVjdCB4PSIxMjAiIHk9IjE2NCIgd2lkdGg9IjQ4MCIgaGVpZ2h0PSI1NiIgcng9IjYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+DQo8dGV4dCB4PSIxNDAiIHk9IjE4OCIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiI+QWdlbnQgZnJhbWV3b3JrczwvdGV4dD4NCjx0ZXh0IHg9IjE0MCIgeT0iMjA0IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSI+bGFuZ2dyYXBoIMK3IGNyZXdhaSDCtyBhdXRvZ2VuPC90ZXh0Pg0KPHJlY3QgeD0iNjQwIiB5PSIxNjQiIHdpZHRoPSIyNDAiIGhlaWdodD0iNTYiIHJ4PSI2IiBmaWxsPSIjZjVmNmY4IiBzdHJva2U9InJnYmEoMjYsMjcsMzUsMC4xMikiIHN0cm9rZS13aWR0aD0iMSIvPg0KPHRleHQgeD0iNzYwIiB5PSIxOTQiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBsZXR0ZXItc3BhY2luZz0iMC4wNmVtIj5waWNrIGJ5IG9yY2hlc3RyYXRpb248L3RleHQ+DQo8cmVjdCB4PSIxMjAiIHk9IjIyMCIgd2lkdGg9IjQ4MCIgaGVpZ2h0PSI1NiIgcng9IjYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+DQo8dGV4dCB4PSIxNDAiIHk9IjI0NCIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiI+RGV2IHRvb2xraXRzPC90ZXh0Pg0KPHRleHQgeD0iMTQwIiB5PSIyNjAiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIj5jbGF1ZGUgY29kZSDCtyBjb2RleCDCtyB2ZXJjZWwgYWk8L3RleHQ+DQo8cmVjdCB4PSI2NDAiIHk9IjIyMCIgd2lkdGg9IjI0MCIgaGVpZ2h0PSI1NiIgcng9IjYiIGZpbGw9IiNmNWY2ZjgiIHN0cm9rZT0icmdiYSgyNiwyNywzNSwwLjEyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+DQo8dGV4dCB4PSI3NjAiIHk9IjI1MCIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSIwLjA2ZW0iPnBpY2sgYnkgd29ya2Zsb3c8L3RleHQ+DQo8cmVjdCB4PSIxMjAiIHk9IjI3NiIgd2lkdGg9IjQ4MCIgaGVpZ2h0PSI1NiIgcng9IjYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+DQo8dGV4dCB4PSIxNDAiIHk9IjMwMCIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiI+TW9kZWwgZWNvc3lzdGVtPC90ZXh0Pg0KPHRleHQgeD0iMTQwIiB5PSIzMTYiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIj5odWdnaW5nIGZhY2Ugwrcgb2xsYW1hIMK3IHZsbG08L3RleHQ+DQo8cmVjdCB4PSI2NDAiIHk9IjI3NiIgd2lkdGg9IjI0MCIgaGVpZ2h0PSI1NiIgcng9IjYiIGZpbGw9IiNmNWY2ZjgiIHN0cm9rZT0icmdiYSgyNiwyNywzNSwwLjEyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+DQo8dGV4dCB4PSI3NjAiIHk9IjMwNiIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSIwLjA2ZW0iPnBpY2sgYnkgZGVwbG95bWVudDwvdGV4dD4NCjx0ZXh0IHg9IjEyMCIgeT0iNDQ0IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMThlbSI+SU5URVJWSUVXIEFOR0xFPC90ZXh0Pjx0ZXh0IHg9IjIxMiIgeT0iNDQ0IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc3R5bGU9Iml0YWxpYyI+IldoaWNoIHBsYXRmb3JtIHdvdWxkIHlvdSB1c2UgYW5kIHdoeT8iIOKAlCBoYXZlIG9uZSBjbGVhciBhbnN3ZXIgcGVyIHNsb3QuPC90ZXh0Pg0KPGxpbmUgeDE9IjEyMCIgeTE9IjUwMCIgeDI9Ijg4MCIgeTI9IjUwMCIgc3Ryb2tlPSJyZ2JhKDI2LDI3LDM1LDAuMTApIiBzdHJva2Utd2lkdGg9IjEiLz48dGV4dCB4PSIxMjAiIHk9IjUxNiIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjE0ZW0iPkxFR0VORDwvdGV4dD48cmVjdCB4PSIyMDAiIHk9IjUwNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0icmdiYSg0NiwxMzMsODUsMC4wOCkiIHN0cm9rZT0iIzJlODU1NSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHRleHQgeD0iMjI0IiB5PSI1MTYiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4wNmVtIj5BQ0NFTlQgPSBGT0NBTDwvdGV4dD48cmVjdCB4PSIzNjAiIHk9IjUwNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz48dGV4dCB4PSIzODQiIHk9IjUxNiIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjA2ZW0iPlBBUEVSID0gU1RFUDwvdGV4dD4NCjwvc3ZnPg==");
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