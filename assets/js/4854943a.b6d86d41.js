"use strict";
(self["webpackChunksite"] = self["webpackChunksite"] || []).push([["50904"], {
63125(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_31_mobile_ai_visual_notes_md_485_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-31-mobile-ai-visual-notes-md-485.json
var site_docs_courses_ai_engineering_placement_31_mobile_ai_visual_notes_md_485_namespaceObject = JSON.parse('{"id":"courses/ai-engineering-placement/mobile-ai/visual-notes","title":"Visual Notes — AI on Constrained Devices","description":"Visual Notes — AI on Constrained Devices: One diagram, the full picture. This page is meant to be glanced at before reading the chapters, and again before","source":"@site/docs/courses/ai-engineering-placement/31-mobile-ai/visual-notes.md","sourceDirName":"courses/ai-engineering-placement/31-mobile-ai","slug":"/ai-engineering-placement/31-mobile-ai/visual-notes","permalink":"/ai-engineering-journey/ai-engineering-placement/31-mobile-ai/visual-notes","draft":false,"unlisted":false,"editUrl":"https://github.com/Raushan666java/ai-engineering-journey/tree/main/site/docs/docs/courses/ai-engineering-placement/31-mobile-ai/visual-notes.md","tags":[],"version":"current","lastUpdatedAt":1795167173000,"sidebarPosition":356,"frontMatter":{"id":"visual-notes","slug":"/ai-engineering-placement/31-mobile-ai/visual-notes","title":"Visual Notes — AI on Constrained Devices","sidebar_label":"Visual Notes","sidebar_position":356,"description":"Visual Notes — AI on Constrained Devices: One diagram, the full picture. This page is meant to be glanced at before reading the chapters, and again before"},"sidebar":"placementSidebar","previous":{"title":"Edge Deployment Patterns","permalink":"/ai-engineering-journey/ai-engineering-placement/31-mobile-ai/04-edge-deployment-patterns"},"next":{"title":"32 — Competitive Programming","permalink":"/ai-engineering-journey/ai-engineering-placement/32-competitive-programming"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/courses/ai-engineering-placement/31-mobile-ai/visual-notes.md


const frontMatter = {
	id: 'visual-notes',
	slug: '/ai-engineering-placement/31-mobile-ai/visual-notes',
	title: 'Visual Notes — AI on Constrained Devices',
	sidebar_label: 'Visual Notes',
	sidebar_position: 356,
	description: 'Visual Notes — AI on Constrained Devices: One diagram, the full picture. This page is meant to be glanced at before reading the chapters, and again before'
};
const contentTitle = 'Visual Notes — AI on Constrained Devices';

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
        id: "visual-notes--ai-on-constrained-devices",
        children: "Visual Notes — AI on Constrained Devices"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "One diagram, the full picture. This page is meant to be glanced at before reading the chapters, and again before interviews."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "AI on Constrained Devices",
        src: (__webpack_require__(80908)/* ["default"] */.A) + "",
        width: "1000",
        height: "760"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-the-diagram-shows",
      children: "What the diagram shows"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optimise"
        }), " — Quantisation (ONNX, TFLite, CoreML) shrinks models to fit device memory and power."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Run"
        }), " — On-device inference keeps privacy and cuts latency on the phone/edge."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fallback"
        }), " — Cloud handles the heavy, rare, or latency-tolerant cases; edge handles the steady state."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-this-matters-for-placement",
      children: "Why this matters for placement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "On-device AI is a fast-growing niche; edge-vs-cloud split is a favourite architecture question."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Naming trade-offs (privacy vs memory vs latency) marks real mobile-AI depth."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-revision",
      children: "Quick revision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quantisation (INT8) cuts size/latency at a small accuracy cost — the #1 edge trick."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ONNX Runtime is the portability layer; TFLite/CoreML bake to the platform."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Split the work: steady-state on device, hard cases over the network."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Watch inference latency, model load time, and on-device memory."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Offline capability is the UX win: no network, still intelligent."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-chapters",
      children: "Related chapters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/31-mobile-ai/01-onnx-runtime-mobile",
          children: "ONNX Runtime mobile"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/31-mobile-ai/02-tflite-coreml",
          children: "TFLite CoreML"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/31-mobile-ai/03-edge-ai-frameworks",
          children: "Edge AI frameworks"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/31-mobile-ai/04-edge-deployment-patterns",
          children: "Edge deployment patterns"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-line answer for interviews:"
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"Quantize → on-device inference → edge adaptation → cloud fallback on constrained devices.\""
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
80908(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwMCA3NjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsbGVkYnk9IjMxX21vYmlsdi10aXRsZSAzMV9tb2JpbHYtZGVzYyI+Cjx0aXRsZSBpZD0iMzFfbW9iaWx2LXRpdGxlIj5Nb2JpbGUgJmFtcDsgZWRnZSBBSSDigJQgaW5mZXJlbmNlIG9uIHRoZSBkZXZpY2U8L3RpdGxlPgo8ZGVzYyBpZD0iMzFfbW9iaWx2LWRlc2MiPk1vZGVsIHF1YW50aXphdGlvbiwgb24tZGV2aWNlIGluZmVyZW5jZSwgZWRnZS1hZGFwdGF0aW9uIGFuZCBjbG91ZCBmYWxsYmFjayBmb3IgY29uc3RyYWluZWQgZGV2aWNlcy48L2Rlc2M+CjxyZWN0IHdpZHRoPSIxMDAwIiBoZWlnaHQ9Ijc2MCIgZmlsbD0iI2ZmZmZmZiIvPgo8cGF0aCBkPSJNIDQ0MCAxNDQgTCA0NDAgMTY4IiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4KPHBhdGggZD0iTSA0NDAgMjE2IEwgNDQwIDI0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGY1ZDc1IiBzdHJva2Utd2lkdGg9IjEiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+CjxwYXRoIGQ9Ik0gNDQwIDI4OCBMIDQ0MCAzMTIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzRmNWQ3NSIgc3Ryb2tlLXdpZHRoPSIxIiBtYXJrZXItZW5kPSJ1cmwoI2Fycm93KSIvPgo8cGF0aCBkPSJNIDQ0MCAzNjAgTCA0NDAgMzg0IiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4KPHBhdGggZD0iTSA0NDAgNDMyIEwgNDQwIDQ1NiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGY1ZDc1IiBzdHJva2Utd2lkdGg9IjEiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+CjxyZWN0IHg9IjMyMCIgeT0iOTIiIHdpZHRoPSIyNDAiIGhlaWdodD0iNTIiIHJ4PSI2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTFiMjMiIHN0cm9rZS13aWR0aD0iMSIvPgo8dGV4dCB4PSI0NDAiIHk9IjExOSIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TW9kZWwgc291cmNlPC90ZXh0Pgo8dGV4dCB4PSI0NDAiIHk9IjEzMyIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnRyYWluZWQgbW9kZWw8L3RleHQ+CjxyZWN0IHg9IjMyMCIgeT0iMTY0IiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjUyIiByeD0iNiIgZmlsbD0icmdiYSg0NiwxMzMsODUsMC4wOCkiIHN0cm9rZT0iIzJlODU1NSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjx0ZXh0IHg9IjQ0MCIgeT0iMTkxIiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5RdWFudGl6ZSAmYW1wOyBwcnVuZTwvdGV4dD4KPHRleHQgeD0iNDQwIiB5PSIyMDUiIGZpbGw9IiMyZTg1NTUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5pbnQ4IMK3IHRmbGl0ZSDCtyBjb3JlbWw8L3RleHQ+CjxyZWN0IHg9IjMyMCIgeT0iMjM2IiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjUyIiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4KPHRleHQgeD0iNDQwIiB5PSIyNjMiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk9uLWRldmljZSBlbmdpbmU8L3RleHQ+Cjx0ZXh0IHg9IjQ0MCIgeT0iMjc3IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+bnAgwrcgZ3B1IMK3IGRlbGVnYXRlczwvdGV4dD4KPHJlY3QgeD0iMzIwIiB5PSIzMDgiIHdpZHRoPSIyNDAiIGhlaWdodD0iNTIiIHJ4PSI2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTFiMjMiIHN0cm9rZS13aWR0aD0iMSIvPgo8dGV4dCB4PSI0NDAiIHk9IjMzNSIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RWRnZSBhZGFwdGF0aW9uPC90ZXh0Pgo8dGV4dCB4PSI0NDAiIHk9IjM0OSIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmRhdGEgc3RheXMgbG9jYWw8L3RleHQ+CjxyZWN0IHg9IjMyMCIgeT0iMzgwIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjUyIiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4KPHRleHQgeD0iNDQwIiB5PSI0MDciIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNsb3VkIGZhbGxiYWNrPC90ZXh0Pgo8dGV4dCB4PSI0NDAiIHk9IjQyMSIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnN5bmMgwrcgaGVhdnkgdGFza3M8L3RleHQ+CjxyZWN0IHg9IjMyMCIgeT0iNDUyIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjUyIiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4KPHRleHQgeD0iNDQwIiB5PSI0NzkiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk9UQSB1cGRhdGVzPC90ZXh0Pgo8dGV4dCB4PSI0NDAiIHk9IjQ5MyIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPm1vZGVsIHZlcnNpb25pbmc8L3RleHQ+CjxyZWN0IHg9IjcyMCIgeT0iMTQwIiB3aWR0aD0iMjE2IiBoZWlnaHQ9IjY0IiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjQsMyIvPgo8dGV4dCB4PSI4MjgiIHk9IjE3MyIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QmF0dGVyeSAmYW1wOyBtZW1vcnk8L3RleHQ+Cjx0ZXh0IHg9IjgyOCIgeT0iMTg3IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+dGhlIHJlYWwgbGltaXRzPC90ZXh0Pgo8cGF0aCBkPSJNIDU2MCAxNzIgSCA3MTYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzRmNWQ3NSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSI0LDMiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+Cjx0ZXh0IHg9IjEyMCIgeT0iNjQ0IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMThlbSI+SU5URVJWSUVXIEFOR0xFPC90ZXh0Pjx0ZXh0IHg9IjIxMiIgeT0iNjQ0IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc3R5bGU9Iml0YWxpYyI+RWRnZSBBSSBpbnRlcnZpZXdzOiBzaXplLCBzcGVlZCwgYmF0dGVyeSBhbmQgb2ZmbGluZSBiZWhhdmlvdXIuPC90ZXh0Pgo8bGluZSB4MT0iMTIwIiB5MT0iNzAwIiB4Mj0iODgwIiB5Mj0iNzAwIiBzdHJva2U9InJnYmEoMjYsMjcsMzUsMC4xMCkiIHN0cm9rZS13aWR0aD0iMSIvPjx0ZXh0IHg9IjEyMCIgeT0iNzE2IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMTRlbSI+TEVHRU5EPC90ZXh0PjxyZWN0IHg9IjIwMCIgeT0iNzA2IiB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHJ4PSIyIiBmaWxsPSJyZ2JhKDQ2LDEzMyw4NSwwLjA4KSIgc3Ryb2tlPSIjMmU4NTU1IiBzdHJva2Utd2lkdGg9IjEiLz48dGV4dCB4PSIyMjQiIHk9IjcxNiIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjA2ZW0iPkFDQ0VOVCA9IEZPQ0FMPC90ZXh0PjxyZWN0IHg9IjM2MCIgeT0iNzA2IiB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHJ4PSIyIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTFiMjMiIHN0cm9rZS13aWR0aD0iMSIvPjx0ZXh0IHg9IjM4NCIgeT0iNzE2IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMDZlbSI+UEFQRVIgPSBTVEVQPC90ZXh0Pgo8L3N2Zz4=");

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