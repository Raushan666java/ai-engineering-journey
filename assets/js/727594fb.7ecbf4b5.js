"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[65759],{

/***/ 7264
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_07_system_design_visual_notes_md_727_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-07-system-design-visual-notes-md-727.json
const site_docs_courses_ai_engineering_placement_07_system_design_visual_notes_md_727_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/system-design/visual-notes","title":"Visual Notes — One Request, the Full Ride","description":"One diagram, the full picture. This page is meant to be glanced at before reading the chapters, and again before interviews.","source":"@site/docs/courses/ai-engineering-placement/07-system-design/visual-notes.md","sourceDirName":"courses/ai-engineering-placement/07-system-design","slug":"/ai-engineering-placement/07-system-design/visual-notes","permalink":"/ai-engineering-journey/ai-engineering-placement/07-system-design/visual-notes","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":111,"frontMatter":{"id":"visual-notes","slug":"/ai-engineering-placement/07-system-design/visual-notes","title":"Visual Notes — One Request, the Full Ride","sidebar_label":"Visual Notes","sidebar_position":111},"sidebar":"placementSidebar","previous":{"title":"Design File Upload System — Direct Upload, Presigned URLs, CDN","permalink":"/ai-engineering-journey/ai-engineering-placement/07-system-design/14-design-file-upload-system"},"next":{"title":"08 — Machine Learning","permalink":"/ai-engineering-journey/ai-engineering-placement/08-machine-learning"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/07-system-design/visual-notes.md


const frontMatter = {
	id: 'visual-notes',
	slug: '/ai-engineering-placement/07-system-design/visual-notes',
	title: 'Visual Notes — One Request, the Full Ride',
	sidebar_label: 'Visual Notes',
	sidebar_position: 111
};
const contentTitle = 'Visual Notes — One Request, the Full Ride';

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
        id: "visual-notes--one-request-the-full-ride",
        children: "Visual Notes — One Request, the Full Ride"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "One diagram, the full picture. This page is meant to be glanced at before reading the chapters, and again before interviews."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "One Request, the Full Ride",
        src: (__webpack_require__(68210)/* ["default"] */ .A) + "",
        width: "1000",
        height: "760"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "what-the-diagram-shows",
      children: "What the diagram shows"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Edge"
        }), " — A load balancer terminates TLS and spreads traffic; an API gateway enforces auth, rate limits and routing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fast path"
        }), " — A cache (Redis) serves hot data before the slow source is ever touched, cooling tail latency."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Core"
        }), " — Services own one bounded domain; the database stores truth; a message queue and workers decouple bursts from the hot path."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "why-this-matters-for-placement",
      children: "Why this matters for placement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Every system-design round rewards a disciplined skeleton: edge -> cache -> service -> data -> async tail."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Naming one company-specific insertion (search, payments, analytics) on this skeleton reads as senior level."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "quick-revision",
      children: "Quick revision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CAP: choose consistency or availability during partitions; usually eventual consistency + retries."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cache strategies: cache-aside, write-through, write-back — know trade-offs cold."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Queue: broker guarantees at-least-once; make consumers idempotent."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Database scaling: read replicas -> sharding -> partitioning; indexes come first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Idempotency keys on POST + retry with backoff is the \"production instinct\" signal."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "related-chapters",
      children: "Related chapters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/07-system-design/01-scalability-fundamentals",
          children: "Scalability fundamentals"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/07-system-design/03-message-queues",
          children: "Message queues"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/07-system-design/04-caching-strategies",
          children: "Caching strategies"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/07-system-design/10-design-url-shortener",
          children: "Design URL shortener"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-line answer for interviews:"
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"Clients hit a load balancer → gateway → cache → services → data, then a queue absorbs spikes and workers drain it.\""
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

/***/ 68210
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwMCA3NjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsbGVkYnk9IjA3X3N5c3Rldi10aXRsZSAwN19zeXN0ZXYtZGVzYyI+DQo8dGl0bGUgaWQ9IjA3X3N5c3Rldi10aXRsZSI+U3lzdGVtIGRlc2lnbiDigJQgb25lIHJlcXVlc3QsIHRoZSBmdWxsIHJpZGU8L3RpdGxlPg0KPGRlc2MgaWQ9IjA3X3N5c3Rldi1kZXNjIj5BIGNsaWVudCByZXF1ZXN0IGZsb3dzIHRocm91Z2ggbG9hZCBiYWxhbmNlciwgQVBJIGdhdGV3YXksIGNhY2hlLCBzZXJ2aWNlcywgZGF0YWJhc2UsIHF1ZXVlIGFuZCB3b3JrZXJzLjwvZGVzYz4NCjxyZWN0IHdpZHRoPSIxMDAwIiBoZWlnaHQ9Ijc2MCIgZmlsbD0iI2ZmZmZmZiIvPg0KPHBhdGggZD0iTSA0NDAgMTQ0IEwgNDQwIDE2OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGY1ZDc1IiBzdHJva2Utd2lkdGg9IjEiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+DQo8cGF0aCBkPSJNIDQ0MCAyMTYgTCA0NDAgMjQwIiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4NCjxwYXRoIGQ9Ik0gNDQwIDI4OCBMIDQ0MCAzMTIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzRmNWQ3NSIgc3Ryb2tlLXdpZHRoPSIxIiBtYXJrZXItZW5kPSJ1cmwoI2Fycm93KSIvPg0KPHBhdGggZD0iTSA0NDAgMzYwIEwgNDQwIDM4NCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGY1ZDc1IiBzdHJva2Utd2lkdGg9IjEiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+DQo8cGF0aCBkPSJNIDQ0MCA0MzIgTCA0NDAgNDU2IiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4NCjxyZWN0IHg9IjMyMCIgeT0iOTIiIHdpZHRoPSIyNDAiIGhlaWdodD0iNTIiIHJ4PSI2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTFiMjMiIHN0cm9rZS13aWR0aD0iMSIvPg0KPHRleHQgeD0iNDQwIiB5PSIxMTkiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNsaWVudDwvdGV4dD4NCjx0ZXh0IHg9IjQ0MCIgeT0iMTMzIiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+YnJvd3NlciDCtyBtb2JpbGU8L3RleHQ+DQo8cmVjdCB4PSIzMjAiIHk9IjE2NCIgd2lkdGg9IjI0MCIgaGVpZ2h0PSI1MiIgcng9IjYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+DQo8dGV4dCB4PSI0NDAiIHk9IjE5MSIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TG9hZCBiYWxhbmNlcjwvdGV4dD4NCjx0ZXh0IHg9IjQ0MCIgeT0iMjA1IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+cm91bmQtcm9iaW4gwrcgc3RpY2t5PC90ZXh0Pg0KPHJlY3QgeD0iMzIwIiB5PSIyMzYiIHdpZHRoPSIyNDAiIGhlaWdodD0iNTIiIHJ4PSI2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTFiMjMiIHN0cm9rZS13aWR0aD0iMSIvPg0KPHRleHQgeD0iNDQwIiB5PSIyNjMiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFQSSBnYXRld2F5PC90ZXh0Pg0KPHRleHQgeD0iNDQwIiB5PSIyNzciIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5hdXRoIMK3IHJhdGUtbGltaXQ8L3RleHQ+DQo8cmVjdCB4PSIzMjAiIHk9IjMwOCIgd2lkdGg9IjI0MCIgaGVpZ2h0PSI1MiIgcng9IjYiIGZpbGw9InJnYmEoNDYsMTMzLDg1LDAuMDgpIiBzdHJva2U9IiMyZTg1NTUiIHN0cm9rZS13aWR0aD0iMSIvPg0KPHRleHQgeD0iNDQwIiB5PSIzMzUiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFwcGxpY2F0aW9uIHNlcnZpY2VzPC90ZXh0Pg0KPHRleHQgeD0iNDQwIiB5PSIzNDkiIGZpbGw9IiMyZTg1NTUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5zdGF0ZWxlc3MgbG9naWM8L3RleHQ+DQo8cmVjdCB4PSIzMjAiIHk9IjM4MCIgd2lkdGg9IjI0MCIgaGVpZ2h0PSI1MiIgcng9IjYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+DQo8dGV4dCB4PSI0NDAiIHk9IjQwNyIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q2FjaGUgwrcgREIgwrcgUXVldWU8L3RleHQ+DQo8dGV4dCB4PSI0NDAiIHk9IjQyMSIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnJlZGlzIMK3IHBvc3RncmVzIMK3IGthZmthPC90ZXh0Pg0KPHJlY3QgeD0iMzIwIiB5PSI0NTIiIHdpZHRoPSIyNDAiIGhlaWdodD0iNTIiIHJ4PSI2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTFiMjMiIHN0cm9rZS13aWR0aD0iMSIvPg0KPHRleHQgeD0iNDQwIiB5PSI0NzkiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJhY2tncm91bmQgd29ya2VyczwvdGV4dD4NCjx0ZXh0IHg9IjQ0MCIgeT0iNDkzIiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+YXN5bmMgam9iczwvdGV4dD4NCjxyZWN0IHg9IjcyMCIgeT0iMTQwIiB3aWR0aD0iMjE2IiBoZWlnaHQ9IjY0IiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjQsMyIvPg0KPHRleHQgeD0iODI4IiB5PSIxNzMiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkhvcml6b250YWwgc2NhbGluZzwvdGV4dD4NCjx0ZXh0IHg9IjgyOCIgeT0iMTg3IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+c3RhdGVsZXNzID0gYWRkIG5vZGVzPC90ZXh0Pg0KPHBhdGggZD0iTSA1NjAgMTcyIEggNzE2IiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNCwzIiBtYXJrZXItZW5kPSJ1cmwoI2Fycm93KSIvPg0KPHRleHQgeD0iMTIwIiB5PSI2NDQiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4xOGVtIj5JTlRFUlZJRVcgQU5HTEU8L3RleHQ+PHRleHQgeD0iMjEyIiB5PSI2NDQiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zdHlsZT0iaXRhbGljIj5EcmF3IHRoaXMgc2tlbGV0b24gZmlyc3QsIHRoZW4gYWRkIHRoZSBjb21wYW55IGZsYXZvdXI6IGF1dGgsIHNlYXJjaCwgcGF5bWVudHMsIGFuYWx5dGljcy48L3RleHQ+DQo8bGluZSB4MT0iMTIwIiB5MT0iNzAwIiB4Mj0iODgwIiB5Mj0iNzAwIiBzdHJva2U9InJnYmEoMjYsMjcsMzUsMC4xMCkiIHN0cm9rZS13aWR0aD0iMSIvPjx0ZXh0IHg9IjEyMCIgeT0iNzE2IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMTRlbSI+TEVHRU5EPC90ZXh0PjxyZWN0IHg9IjIwMCIgeT0iNzA2IiB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHJ4PSIyIiBmaWxsPSJyZ2JhKDQ2LDEzMyw4NSwwLjA4KSIgc3Ryb2tlPSIjMmU4NTU1IiBzdHJva2Utd2lkdGg9IjEiLz48dGV4dCB4PSIyMjQiIHk9IjcxNiIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjA2ZW0iPkFDQ0VOVCA9IEZPQ0FMPC90ZXh0PjxyZWN0IHg9IjM2MCIgeT0iNzA2IiB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHJ4PSIyIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTFiMjMiIHN0cm9rZS13aWR0aD0iMSIvPjx0ZXh0IHg9IjM4NCIgeT0iNzE2IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMDZlbSI+UEFQRVIgPSBTVEVQPC90ZXh0Pg0KPC9zdmc+");
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