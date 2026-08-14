"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[80237],{

/***/ 63154
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_27_ai_infrastructure_visual_notes_md_314_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-27-ai-infrastructure-visual-notes-md-314.json
const site_docs_courses_ai_engineering_placement_27_ai_infrastructure_visual_notes_md_314_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/ai-infrastructure/visual-notes","title":"Visual Notes — Keeping Inference Fast and Cheap","description":"One diagram, the full picture. This page is meant to be glanced at before reading the chapters, and again before interviews.","source":"@site/docs/courses/ai-engineering-placement/27-ai-infrastructure/visual-notes.md","sourceDirName":"courses/ai-engineering-placement/27-ai-infrastructure","slug":"/ai-engineering-placement/27-ai-infrastructure/visual-notes","permalink":"/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/visual-notes","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":333,"frontMatter":{"id":"visual-notes","slug":"/ai-engineering-placement/27-ai-infrastructure/visual-notes","title":"Visual Notes — Keeping Inference Fast and Cheap","sidebar_label":"Visual Notes","sidebar_position":333},"sidebar":"placementSidebar","previous":{"title":"Speculative Decoding","permalink":"/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/09-speculative-decoding"},"next":{"title":"28 — AI Certifications Guide","permalink":"/ai-engineering-journey/ai-engineering-placement/28-certifications"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/27-ai-infrastructure/visual-notes.md


const frontMatter = {
	id: 'visual-notes',
	slug: '/ai-engineering-placement/27-ai-infrastructure/visual-notes',
	title: 'Visual Notes — Keeping Inference Fast and Cheap',
	sidebar_label: 'Visual Notes',
	sidebar_position: 333
};
const contentTitle = 'Visual Notes — Keeping Inference Fast and Cheap';

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
        src: (__webpack_require__(60498)/* ["default"] */ .A) + "",
        width: "1000",
        height: "760"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "why-this-matters-for-placement",
      children: "Why this matters for placement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inference efficiency is real money at scale — infrastructure questions reward this depth."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Naming one optimisation with its trade-off (e.g. KV-cache memory vs latency) is a strong signal."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
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

/***/ 60498
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwMCA3NjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsbGVkYnk9IjI3X2FpX2ludi10aXRsZSAyN19haV9pbnYtZGVzYyI+DQo8dGl0bGUgaWQ9IjI3X2FpX2ludi10aXRsZSI+QUkgaW5mcmFzdHJ1Y3R1cmUg4oCUIGZyb20gR1BVIHRvIGZhc3QgaW5mZXJlbmNlPC90aXRsZT4NCjxkZXNjIGlkPSIyN19haV9pbnYtZGVzYyI+SGFyZHdhcmUsIHNjaGVkdWxpbmcsIHNlcnZpbmcsIGFuZCBvcHRpbWl6YXRpb24gd29ya2luZyB0b2dldGhlciB0byBrZWVwIGluZmVyZW5jZSBmYXN0IGFuZCBjaGVhcC48L2Rlc2M+DQo8cmVjdCB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI3NjAiIGZpbGw9IiNmZmZmZmYiLz4NCjxwYXRoIGQ9Ik0gNDQwIDE0NCBMIDQ0MCAxNjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzRmNWQ3NSIgc3Ryb2tlLXdpZHRoPSIxIiBtYXJrZXItZW5kPSJ1cmwoI2Fycm93KSIvPg0KPHBhdGggZD0iTSA0NDAgMjE2IEwgNDQwIDI0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGY1ZDc1IiBzdHJva2Utd2lkdGg9IjEiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+DQo8cGF0aCBkPSJNIDQ0MCAyODggTCA0NDAgMzEyIiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4NCjxwYXRoIGQ9Ik0gNDQwIDM2MCBMIDQ0MCAzODQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzRmNWQ3NSIgc3Ryb2tlLXdpZHRoPSIxIiBtYXJrZXItZW5kPSJ1cmwoI2Fycm93KSIvPg0KPHBhdGggZD0iTSA0NDAgNDMyIEwgNDQwIDQ1NiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGY1ZDc1IiBzdHJva2Utd2lkdGg9IjEiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+DQo8cmVjdCB4PSIzMjAiIHk9IjkyIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjUyIiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4NCjx0ZXh0IHg9IjQ0MCIgeT0iMTE5IiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5HUFUgJmFtcDsgaGFyZHdhcmU8L3RleHQ+DQo8dGV4dCB4PSI0NDAiIHk9IjEzMyIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmgxMDAgwrcgYTEwMCDCtyB0cHU8L3RleHQ+DQo8cmVjdCB4PSIzMjAiIHk9IjE2NCIgd2lkdGg9IjI0MCIgaGVpZ2h0PSI1MiIgcng9IjYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+DQo8dGV4dCB4PSI0NDAiIHk9IjE5MSIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q2x1c3RlciAmYW1wOyBzY2hlZHVsaW5nPC90ZXh0Pg0KPHRleHQgeD0iNDQwIiB5PSIyMDUiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5rOHMgwrcgc3BvdCDCtyBxdW90YTwvdGV4dD4NCjxyZWN0IHg9IjMyMCIgeT0iMjM2IiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjUyIiByeD0iNiIgZmlsbD0icmdiYSg0NiwxMzMsODUsMC4wOCkiIHN0cm9rZT0iIzJlODU1NSIgc3Ryb2tlLXdpZHRoPSIxIi8+DQo8dGV4dCB4PSI0NDAiIHk9IjI2MyIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TW9kZWwgc2VydmluZzwvdGV4dD4NCjx0ZXh0IHg9IjQ0MCIgeT0iMjc3IiBmaWxsPSIjMmU4NTU1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+dmxsbSDCtyB0cml0b24gwrcgcXVhbnRpemVkPC90ZXh0Pg0KPHJlY3QgeD0iMzIwIiB5PSIzMDgiIHdpZHRoPSIyNDAiIGhlaWdodD0iNTIiIHJ4PSI2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTFiMjMiIHN0cm9rZS13aWR0aD0iMSIvPg0KPHRleHQgeD0iNDQwIiB5PSIzMzUiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk9wdGltaXphdGlvbjwvdGV4dD4NCjx0ZXh0IHg9IjQ0MCIgeT0iMzQ5IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+cXVhbnRpemUgwrcgZGlzdGlsbCDCtyBjYWNoZTwvdGV4dD4NCjxyZWN0IHg9IjMyMCIgeT0iMzgwIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjUyIiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4NCjx0ZXh0IHg9IjQ0MCIgeT0iNDA3IiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5PYnNlcnZhYmlsaXR5PC90ZXh0Pg0KPHRleHQgeD0iNDQwIiB5PSI0MjEiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5sYXRlbmN5IMK3IHRva2Vucy9zIMK3ICQ8L3RleHQ+DQo8cmVjdCB4PSIzMjAiIHk9IjQ1MiIgd2lkdGg9IjI0MCIgaGVpZ2h0PSI1MiIgcng9IjYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+DQo8dGV4dCB4PSI0NDAiIHk9IjQ3OSIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QXV0b3NjYWxlPC90ZXh0Pg0KPHRleHQgeD0iNDQwIiB5PSI0OTMiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj50cmFmZmljIMK3IHF1ZXVlIGRlcHRoPC90ZXh0Pg0KPHJlY3QgeD0iNzIwIiB5PSIxNDAiIHdpZHRoPSIyMTYiIGhlaWdodD0iNjQiIHJ4PSI2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTFiMjMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNCwzIi8+DQo8dGV4dCB4PSI4MjgiIHk9IjE3MyIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QmF0Y2hpbmc8L3RleHQ+DQo8dGV4dCB4PSI4MjgiIHk9IjE4NyIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnRocm91Z2hwdXQgdnMgbGF0ZW5jeTwvdGV4dD4NCjxwYXRoIGQ9Ik0gNTYwIDE3MiBIIDcxNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGY1ZDc1IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjQsMyIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4NCjx0ZXh0IHg9IjEyMCIgeT0iNjQ0IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMThlbSI+SU5URVJWSUVXIEFOR0xFPC90ZXh0Pjx0ZXh0IHg9IjIxMiIgeT0iNjQ0IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc3R5bGU9Iml0YWxpYyI+TGF0ZW5jeSwgdGhyb3VnaHB1dCBhbmQgY29zdDogdGhlIHRocmVlIG51bWJlcnMgb2YgZXZlcnkgQUkgaW5mcmEgcXVlc3Rpb24uPC90ZXh0Pg0KPGxpbmUgeDE9IjEyMCIgeTE9IjcwMCIgeDI9Ijg4MCIgeTI9IjcwMCIgc3Ryb2tlPSJyZ2JhKDI2LDI3LDM1LDAuMTApIiBzdHJva2Utd2lkdGg9IjEiLz48dGV4dCB4PSIxMjAiIHk9IjcxNiIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjE0ZW0iPkxFR0VORDwvdGV4dD48cmVjdCB4PSIyMDAiIHk9IjcwNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0icmdiYSg0NiwxMzMsODUsMC4wOCkiIHN0cm9rZT0iIzJlODU1NSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHRleHQgeD0iMjI0IiB5PSI3MTYiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4wNmVtIj5BQ0NFTlQgPSBGT0NBTDwvdGV4dD48cmVjdCB4PSIzNjAiIHk9IjcwNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz48dGV4dCB4PSIzODQiIHk9IjcxNiIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjA2ZW0iPlBBUEVSID0gU1RFUDwvdGV4dD4NCjwvc3ZnPg==");
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