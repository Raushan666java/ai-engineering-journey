"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[43565],{

/***/ 23564
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_14_fine_tuning_peft_visual_notes_md_1a1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-14-fine-tuning-peft-visual-notes-md-1a1.json
const site_docs_courses_ai_engineering_placement_14_fine_tuning_peft_visual_notes_md_1a1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/fine-tuning-peft/visual-notes","title":"Visual Notes — Choosing How to Adapt a Model","description":"One diagram, the full picture. This page is meant to be glanced at before reading the chapters, and again before interviews.","source":"@site/docs/courses/ai-engineering-placement/14-fine-tuning-peft/visual-notes.md","sourceDirName":"courses/ai-engineering-placement/14-fine-tuning-peft","slug":"/ai-engineering-placement/14-fine-tuning-peft/visual-notes","permalink":"/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/visual-notes","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":197,"frontMatter":{"id":"visual-notes","slug":"/ai-engineering-placement/14-fine-tuning-peft/visual-notes","title":"Visual Notes — Choosing How to Adapt a Model","sidebar_label":"Visual Notes","sidebar_position":197},"sidebar":"placementSidebar","previous":{"title":"Evaluating Fine-Tuned Models","permalink":"/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/08-evaluating-fine-tuned-models"},"next":{"title":"15 — AI Evaluation & Observability","permalink":"/ai-engineering-journey/ai-engineering-placement/15-ai-evaluation-observability"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/14-fine-tuning-peft/visual-notes.md


const frontMatter = {
	id: 'visual-notes',
	slug: '/ai-engineering-placement/14-fine-tuning-peft/visual-notes',
	title: 'Visual Notes — Choosing How to Adapt a Model',
	sidebar_label: 'Visual Notes',
	sidebar_position: 197
};
const contentTitle = 'Visual Notes — Choosing How to Adapt a Model';

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
        id: "visual-notes--choosing-how-to-adapt-a-model",
        children: "Visual Notes — Choosing How to Adapt a Model"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "One diagram, the full picture. This page is meant to be glanced at before reading the chapters, and again before interviews."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Choosing How to Adapt a Model",
        src: (__webpack_require__(24314)/* ["default"] */ .A) + "",
        width: "1000",
        height: "560"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "what-the-diagram-shows",
      children: "What the diagram shows"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Full fine-tuning"
        }), " — All weights update. Maximum quality, expensive, needs the most data and GPU memory."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LoRA"
        }), " — Low-rank adapters freeze the base and train a small delta — cheap, modular, ~full-fine-tune quality."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "QLoRA"
        }), " — Quantises the base weights so you can fine-tune huge models on one GPU; adapters still train in precision."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "why-this-matters-for-placement",
      children: "Why this matters for placement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The \"when to fine-tune vs prompt vs RAG\" decision is a flagship LLM engineering question."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quoting parameter counts (LoRA ~0.1–1% of base) and VRAM wins you instant credit."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "quick-revision",
      children: "Quick revision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fine-tune only when behaviour must change; RAG/prompt for facts and recent info."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full FT = all weights; LoRA = low-rank ∆; QLoRA = quantised base + LoRA."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Instruction tuning teaches task following; DPO tunes preference without a reward model."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data quality beats data quantity; dedupe and de-contaminate eval sets."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always hold out a test set the base model must not memorise."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "related-chapters",
      children: "Related chapters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/01-when-to-fine-tune",
          children: "When to fine-tune"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/03-lora-theory",
          children: "LoRA theory"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/05-qlora-and-quantization",
          children: "QLoRA and quantization"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/07-dpo-and-preference-tuning",
          children: "DPO and preference tuning"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-line answer for interviews:"
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"Full fine-tuning changes every weight; LoRA/QLoRA nudges low-rank adapters — pick by data, cost and quality needs.\""
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

/***/ 24314
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwMCA1NjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsbGVkYnk9IjE0X2ZpbmVfdi10aXRsZSAxNF9maW5lX3YtZGVzYyI+DQo8dGl0bGUgaWQ9IjE0X2ZpbmVfdi10aXRsZSI+RmluZS10dW5pbmcgdnMgUEVGVCDigJQgZm91ciBwYXRocyB0byBhIGN1c3RvbSBtb2RlbDwvdGl0bGU+DQo8ZGVzYyBpZD0iMTRfZmluZV92LWRlc2MiPkZ1bGwgZmluZS10dW5pbmcsIExvUkEsIFFMb1JBIGFuZCBhZGFwdGVycyBjb21wYXJlZCBvbiBjb3N0LCBkYXRhLCBxdWFsaXR5IGFuZCB1c2UgY2FzZS48L2Rlc2M+DQo8cmVjdCB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI1NjAiIGZpbGw9IiNmZmZmZmYiLz4NCjxyZWN0IHg9IjEyMCIgeT0iMTA4IiB3aWR0aD0iNDgwIiBoZWlnaHQ9IjU2IiByeD0iNiIgZmlsbD0icmdiYSg0NiwxMzMsODUsMC4wOCkiIHN0cm9rZT0iIzJlODU1NSIgc3Ryb2tlLXdpZHRoPSIxIi8+DQo8dGV4dCB4PSIxNDAiIHk9IjEzMiIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiI+RnVsbCBmaW5lLXR1bmluZzwvdGV4dD4NCjx0ZXh0IHg9IjE0MCIgeT0iMTQ4IiBmaWxsPSIjMmU4NTU1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSI+YWxsIHdlaWdodHMgwrcgYmlnIEdQVTwvdGV4dD4NCjxyZWN0IHg9IjY0MCIgeT0iMTA4IiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjU2IiByeD0iNiIgZmlsbD0iI2Y1ZjZmOCIgc3Ryb2tlPSJyZ2JhKDI2LDI3LDM1LDAuMTIpIiBzdHJva2Utd2lkdGg9IjEiLz4NCjx0ZXh0IHg9Ijc2MCIgeT0iMTM4IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgbGV0dGVyLXNwYWNpbmc9IjAuMDZlbSI+SElHSCBjb3N0IMK3IGJlc3QgY2VpbGluZzwvdGV4dD4NCjxyZWN0IHg9IjEyMCIgeT0iMTY0IiB3aWR0aD0iNDgwIiBoZWlnaHQ9IjU2IiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4NCjx0ZXh0IHg9IjE0MCIgeT0iMTg4IiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIj5Mb1JBPC90ZXh0Pg0KPHRleHQgeD0iMTQwIiB5PSIyMDQiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIj5sb3ctcmFuayBhZGFwdGVyczwvdGV4dD4NCjxyZWN0IHg9IjY0MCIgeT0iMTY0IiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjU2IiByeD0iNiIgZmlsbD0iI2Y1ZjZmOCIgc3Ryb2tlPSJyZ2JhKDI2LDI3LDM1LDAuMTIpIiBzdHJva2Utd2lkdGg9IjEiLz4NCjx0ZXh0IHg9Ijc2MCIgeT0iMTk0IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgbGV0dGVyLXNwYWNpbmc9IjAuMDZlbSI+TE9XIGNvc3QgwrcgbmVhci1mdWxsIHF1YWxpdHk8L3RleHQ+DQo8cmVjdCB4PSIxMjAiIHk9IjIyMCIgd2lkdGg9IjQ4MCIgaGVpZ2h0PSI1NiIgcng9IjYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+DQo8dGV4dCB4PSIxNDAiIHk9IjI0NCIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiI+UUxvUkE8L3RleHQ+DQo8dGV4dCB4PSIxNDAiIHk9IjI2MCIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiPnF1YW50aXplZCBiYXNlICsgTG9SQTwvdGV4dD4NCjxyZWN0IHg9IjY0MCIgeT0iMjIwIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjU2IiByeD0iNiIgZmlsbD0iI2Y1ZjZmOCIgc3Ryb2tlPSJyZ2JhKDI2LDI3LDM1LDAuMTIpIiBzdHJva2Utd2lkdGg9IjEiLz4NCjx0ZXh0IHg9Ijc2MCIgeT0iMjUwIiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgbGV0dGVyLXNwYWNpbmc9IjAuMDZlbSI+TE9XRVNUIGNvc3Qgwrcgb24gb25lIEdQVTwvdGV4dD4NCjxyZWN0IHg9IjEyMCIgeT0iMjc2IiB3aWR0aD0iNDgwIiBoZWlnaHQ9IjU2IiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4NCjx0ZXh0IHg9IjE0MCIgeT0iMzAwIiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIj5BZGFwdGVyczwvdGV4dD4NCjx0ZXh0IHg9IjE0MCIgeT0iMzE2IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSI+dGFzayBoZWFkczwvdGV4dD4NCjxyZWN0IHg9IjY0MCIgeT0iMjc2IiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjU2IiByeD0iNiIgZmlsbD0iI2Y1ZjZmOCIgc3Ryb2tlPSJyZ2JhKDI2LDI3LDM1LDAuMTIpIiBzdHJva2Utd2lkdGg9IjEiLz4NCjx0ZXh0IHg9Ijc2MCIgeT0iMzA2IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgbGV0dGVyLXNwYWNpbmc9IjAuMDZlbSI+bW9kdWxhciDCtyBtdWx0aS10YXNrPC90ZXh0Pg0KPHRleHQgeD0iMTIwIiB5PSI0NDQiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4xOGVtIj5JTlRFUlZJRVcgQU5HTEU8L3RleHQ+PHRleHQgeD0iMjEyIiB5PSI0NDQiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zdHlsZT0iaXRhbGljIj5QaWNrIHRoZSBhcHByb2FjaCBieSBjb25zdHJhaW50OiBoYXJkd2FyZSwgZGF0YSBhbmQgcXVhbGl0eSBjZWlsaW5nLjwvdGV4dD4NCjxsaW5lIHgxPSIxMjAiIHkxPSI1MDAiIHgyPSI4ODAiIHkyPSI1MDAiIHN0cm9rZT0icmdiYSgyNiwyNywzNSwwLjEwKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHRleHQgeD0iMTIwIiB5PSI1MTYiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4xNGVtIj5MRUdFTkQ8L3RleHQ+PHJlY3QgeD0iMjAwIiB5PSI1MDYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9InJnYmEoNDYsMTMzLDg1LDAuMDgpIiBzdHJva2U9IiMyZTg1NTUiIHN0cm9rZS13aWR0aD0iMSIvPjx0ZXh0IHg9IjIyNCIgeT0iNTE2IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMDZlbSI+QUNDRU5UID0gRk9DQUw8L3RleHQ+PHJlY3QgeD0iMzYwIiB5PSI1MDYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+PHRleHQgeD0iMzg0IiB5PSI1MTYiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4wNmVtIj5QQVBFUiA9IFNURVA8L3RleHQ+DQo8L3N2Zz4=");
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