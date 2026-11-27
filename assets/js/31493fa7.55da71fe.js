"use strict";
(self["webpackChunksite"] = self["webpackChunksite"] || []).push([["78302"], {
11783(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_27_ai_infrastructure_visual_notes_md_314_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-27-ai-infrastructure-visual-notes-md-314.json
var site_docs_courses_ai_engineering_placement_27_ai_infrastructure_visual_notes_md_314_namespaceObject = JSON.parse('{"id":"courses/ai-engineering-placement/ai-infrastructure/visual-notes","title":"Visual Notes — Keeping Inference Fast and Cheap","description":"One-line answer for interviews: \'Hardware, scheduling, serving and optimization work together to keep inference fast and cheap.\'","source":"@site/docs/courses/ai-engineering-placement/27-ai-infrastructure/visual-notes.md","sourceDirName":"courses/ai-engineering-placement/27-ai-infrastructure","slug":"/ai-engineering-placement/27-ai-infrastructure/visual-notes","permalink":"/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/visual-notes","draft":false,"unlisted":false,"editUrl":"https://github.com/Raushan666java/ai-engineering-journey/tree/main/site/docs/docs/courses/ai-engineering-placement/27-ai-infrastructure/visual-notes.md","tags":[],"version":"current","lastUpdatedAt":1795167173000,"sidebarPosition":333,"frontMatter":{"id":"visual-notes","slug":"/ai-engineering-placement/27-ai-infrastructure/visual-notes","title":"Visual Notes — Keeping Inference Fast and Cheap","sidebar_label":"Visual Notes","sidebar_position":333,"description":"One-line answer for interviews: \'Hardware, scheduling, serving and optimization work together to keep inference fast and cheap.\'"},"sidebar":"placementSidebar","previous":{"title":"Speculative Decoding","permalink":"/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/09-speculative-decoding"},"next":{"title":"28 — AI Certifications Guide","permalink":"/ai-engineering-journey/ai-engineering-placement/28-certifications"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/courses/ai-engineering-placement/27-ai-infrastructure/visual-notes.md


const frontMatter = {
	id: 'visual-notes',
	slug: '/ai-engineering-placement/27-ai-infrastructure/visual-notes',
	title: 'Visual Notes — Keeping Inference Fast and Cheap',
	sidebar_label: 'Visual Notes',
	sidebar_position: 333,
	description: 'One-line answer for interviews: \'Hardware, scheduling, serving and optimization work together to keep inference fast and cheap.\''
};
const contentTitle = 'Visual Notes — Keeping Inference Fast and Cheap';

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
        id: "visual-notes--keeping-inference-fast-and-cheap",
        children: "Visual Notes — Keeping Inference Fast and Cheap"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "One diagram, the full picture. This page is meant to be glanced at before reading the chapters, and again before interviews."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Keeping Inference Fast and Cheap",
        src: (__webpack_require__(45426)/* ["default"] */.A) + "",
        width: "1000",
        height: "760"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-the-diagram-shows",
      children: "What the diagram shows"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hardware"
        }), " — GPUs, memory bandwidth and interconnect set the ceiling for throughput."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Serving"
        }), " — Scheduling and batching parallelise requests onto the hardware."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optimize"
        }), " — Pruning, distillation, KV-cache and speculative decoding cut cost and latency."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-this-matters-for-placement",
      children: "Why this matters for placement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inference efficiency is real money at scale — infrastructure questions reward this depth."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Naming one optimisation with its trade-off (e.g. KV-cache memory vs latency) is a strong signal."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-revision",
      children: "Quick revision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPU memory is the scarce resource: weights + KV-cache + activations compete for it."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Batching and continuous batching maximise GPU utilisation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "KV-cache avoids recomputing past token states — memory heavy, latency win."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pruning (drop weights) and distillation (small teaches big) shrink models."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Speculative decoding drafts tokens with a small model, verifies with the big one."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-chapters",
      children: "Related chapters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/01-gpu-architecture",
          children: "GPU architecture"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/04-inference-serving",
          children: "Inference serving"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/08-attention-kv-cache",
          children: "Attention KV cache"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/09-speculative-decoding",
          children: "Speculative decoding"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-line answer for interviews:"
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"Hardware, scheduling, serving and optimization work together to keep inference fast and cheap.\""
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
45426(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwMCA3NjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsbGVkYnk9IjI3X2FpX2ludi10aXRsZSAyN19haV9pbnYtZGVzYyI+Cjx0aXRsZSBpZD0iMjdfYWlfaW52LXRpdGxlIj5BSSBpbmZyYXN0cnVjdHVyZSDigJQgZnJvbSBHUFUgdG8gZmFzdCBpbmZlcmVuY2U8L3RpdGxlPgo8ZGVzYyBpZD0iMjdfYWlfaW52LWRlc2MiPkhhcmR3YXJlLCBzY2hlZHVsaW5nLCBzZXJ2aW5nLCBhbmQgb3B0aW1pemF0aW9uIHdvcmtpbmcgdG9nZXRoZXIgdG8ga2VlcCBpbmZlcmVuY2UgZmFzdCBhbmQgY2hlYXAuPC9kZXNjPgo8cmVjdCB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI3NjAiIGZpbGw9IiNmZmZmZmYiLz4KPHBhdGggZD0iTSA0NDAgMTQ0IEwgNDQwIDE2OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGY1ZDc1IiBzdHJva2Utd2lkdGg9IjEiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+CjxwYXRoIGQ9Ik0gNDQwIDIxNiBMIDQ0MCAyNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzRmNWQ3NSIgc3Ryb2tlLXdpZHRoPSIxIiBtYXJrZXItZW5kPSJ1cmwoI2Fycm93KSIvPgo8cGF0aCBkPSJNIDQ0MCAyODggTCA0NDAgMzEyIiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4KPHBhdGggZD0iTSA0NDAgMzYwIEwgNDQwIDM4NCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGY1ZDc1IiBzdHJva2Utd2lkdGg9IjEiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+CjxwYXRoIGQ9Ik0gNDQwIDQzMiBMIDQ0MCA0NTYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzRmNWQ3NSIgc3Ryb2tlLXdpZHRoPSIxIiBtYXJrZXItZW5kPSJ1cmwoI2Fycm93KSIvPgo8cmVjdCB4PSIzMjAiIHk9IjkyIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjUyIiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4KPHRleHQgeD0iNDQwIiB5PSIxMTkiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkdQVSAmYW1wOyBoYXJkd2FyZTwvdGV4dD4KPHRleHQgeD0iNDQwIiB5PSIxMzMiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5oMTAwIMK3IGExMDAgwrcgdHB1PC90ZXh0Pgo8cmVjdCB4PSIzMjAiIHk9IjE2NCIgd2lkdGg9IjI0MCIgaGVpZ2h0PSI1MiIgcng9IjYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjx0ZXh0IHg9IjQ0MCIgeT0iMTkxIiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DbHVzdGVyICZhbXA7IHNjaGVkdWxpbmc8L3RleHQ+Cjx0ZXh0IHg9IjQ0MCIgeT0iMjA1IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+azhzIMK3IHNwb3QgwrcgcXVvdGE8L3RleHQ+CjxyZWN0IHg9IjMyMCIgeT0iMjM2IiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjUyIiByeD0iNiIgZmlsbD0icmdiYSg0NiwxMzMsODUsMC4wOCkiIHN0cm9rZT0iIzJlODU1NSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjx0ZXh0IHg9IjQ0MCIgeT0iMjYzIiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Nb2RlbCBzZXJ2aW5nPC90ZXh0Pgo8dGV4dCB4PSI0NDAiIHk9IjI3NyIgZmlsbD0iIzJlODU1NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnZsbG0gwrcgdHJpdG9uIMK3IHF1YW50aXplZDwvdGV4dD4KPHJlY3QgeD0iMzIwIiB5PSIzMDgiIHdpZHRoPSIyNDAiIGhlaWdodD0iNTIiIHJ4PSI2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTFiMjMiIHN0cm9rZS13aWR0aD0iMSIvPgo8dGV4dCB4PSI0NDAiIHk9IjMzNSIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+T3B0aW1pemF0aW9uPC90ZXh0Pgo8dGV4dCB4PSI0NDAiIHk9IjM0OSIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnF1YW50aXplIMK3IGRpc3RpbGwgwrcgY2FjaGU8L3RleHQ+CjxyZWN0IHg9IjMyMCIgeT0iMzgwIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjUyIiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4KPHRleHQgeD0iNDQwIiB5PSI0MDciIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk9ic2VydmFiaWxpdHk8L3RleHQ+Cjx0ZXh0IHg9IjQ0MCIgeT0iNDIxIiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+bGF0ZW5jeSDCtyB0b2tlbnMvcyDCtyAkPC90ZXh0Pgo8cmVjdCB4PSIzMjAiIHk9IjQ1MiIgd2lkdGg9IjI0MCIgaGVpZ2h0PSI1MiIgcng9IjYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjx0ZXh0IHg9IjQ0MCIgeT0iNDc5IiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BdXRvc2NhbGU8L3RleHQ+Cjx0ZXh0IHg9IjQ0MCIgeT0iNDkzIiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+dHJhZmZpYyDCtyBxdWV1ZSBkZXB0aDwvdGV4dD4KPHJlY3QgeD0iNzIwIiB5PSIxNDAiIHdpZHRoPSIyMTYiIGhlaWdodD0iNjQiIHJ4PSI2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTFiMjMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNCwzIi8+Cjx0ZXh0IHg9IjgyOCIgeT0iMTczIiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5CYXRjaGluZzwvdGV4dD4KPHRleHQgeD0iODI4IiB5PSIxODciIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj50aHJvdWdocHV0IHZzIGxhdGVuY3k8L3RleHQ+CjxwYXRoIGQ9Ik0gNTYwIDE3MiBIIDcxNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGY1ZDc1IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjQsMyIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4KPHRleHQgeD0iMTIwIiB5PSI2NDQiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4xOGVtIj5JTlRFUlZJRVcgQU5HTEU8L3RleHQ+PHRleHQgeD0iMjEyIiB5PSI2NDQiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zdHlsZT0iaXRhbGljIj5MYXRlbmN5LCB0aHJvdWdocHV0IGFuZCBjb3N0OiB0aGUgdGhyZWUgbnVtYmVycyBvZiBldmVyeSBBSSBpbmZyYSBxdWVzdGlvbi48L3RleHQ+CjxsaW5lIHgxPSIxMjAiIHkxPSI3MDAiIHgyPSI4ODAiIHkyPSI3MDAiIHN0cm9rZT0icmdiYSgyNiwyNywzNSwwLjEwKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHRleHQgeD0iMTIwIiB5PSI3MTYiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4xNGVtIj5MRUdFTkQ8L3RleHQ+PHJlY3QgeD0iMjAwIiB5PSI3MDYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9InJnYmEoNDYsMTMzLDg1LDAuMDgpIiBzdHJva2U9IiMyZTg1NTUiIHN0cm9rZS13aWR0aD0iMSIvPjx0ZXh0IHg9IjIyNCIgeT0iNzE2IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMDZlbSI+QUNDRU5UID0gRk9DQUw8L3RleHQ+PHJlY3QgeD0iMzYwIiB5PSI3MDYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+PHRleHQgeD0iMzg0IiB5PSI3MTYiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4wNmVtIj5QQVBFUiA9IFNURVA8L3RleHQ+Cjwvc3ZnPg==");

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