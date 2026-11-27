"use strict";
(self["webpackChunksite"] = self["webpackChunksite"] || []).push([["13896"], {
56265(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_12_rag_vector_databases_visual_notes_md_897_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-12-rag-vector-databases-visual-notes-md-897.json
var site_docs_courses_ai_engineering_placement_12_rag_vector_databases_visual_notes_md_897_namespaceObject = JSON.parse('{"id":"courses/ai-engineering-placement/rag-vector-databases/visual-notes","title":"Visual Notes — Retrieval-Augmented Generation","description":"One-line answer for interviews: \'Query → embed → retrieve from vector store → rerank → generate grounded in retrieved context.\'","source":"@site/docs/courses/ai-engineering-placement/12-rag-vector-databases/visual-notes.md","sourceDirName":"courses/ai-engineering-placement/12-rag-vector-databases","slug":"/ai-engineering-placement/12-rag-vector-databases/visual-notes","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/visual-notes","draft":false,"unlisted":false,"editUrl":"https://github.com/Raushan666java/ai-engineering-journey/tree/main/site/docs/docs/courses/ai-engineering-placement/12-rag-vector-databases/visual-notes.md","tags":[],"version":"current","lastUpdatedAt":1795167173000,"sidebarPosition":175,"frontMatter":{"id":"visual-notes","slug":"/ai-engineering-placement/12-rag-vector-databases/visual-notes","title":"Visual Notes — Retrieval-Augmented Generation","sidebar_label":"Visual Notes","sidebar_position":175,"description":"One-line answer for interviews: \'Query → embed → retrieve from vector store → rerank → generate grounded in retrieved context.\'"},"sidebar":"placementSidebar","previous":{"title":"Hybrid Search Architecture","permalink":"/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/16-hybrid-search-architecture"},"next":{"title":"13 — AI Agents & LangGraph","permalink":"/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/courses/ai-engineering-placement/12-rag-vector-databases/visual-notes.md


const frontMatter = {
	id: 'visual-notes',
	slug: '/ai-engineering-placement/12-rag-vector-databases/visual-notes',
	title: 'Visual Notes — Retrieval-Augmented Generation',
	sidebar_label: 'Visual Notes',
	sidebar_position: 175,
	description: 'One-line answer for interviews: \'Query → embed → retrieve from vector store → rerank → generate grounded in retrieved context.\''
};
const contentTitle = 'Visual Notes — Retrieval-Augmented Generation';

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
        id: "visual-notes--retrieval-augmented-generation",
        children: "Visual Notes — Retrieval-Augmented Generation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "One diagram, the full picture. This page is meant to be glanced at before reading the chapters, and again before interviews."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Retrieval-Augmented Generation",
        src: (__webpack_require__(5815)/* ["default"] */.A) + "",
        width: "1000",
        height: "760"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-the-diagram-shows",
      children: "What the diagram shows"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Query"
        }), " — The user question is embedded into the same vector space as the corpus."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Retrieve"
        }), " — A vector database returns top-k candidates by similarity; reranking tightens precision."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generate"
        }), " — The LLM composes an answer using the retrieved passages, reducing hallucination and grounding the response."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-this-matters-for-placement",
      children: "Why this matters for placement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RAG is the default production pattern for grounded answers — be ready to draw it at whiteboard speed."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Know when vector search alone fails: out-of-vocabulary, synonyms, hybrid search fixes."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-revision",
      children: "Quick revision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Index once (offline), query many (online): the classic asymmetry."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Similarity: cosine on normalised embeddings; distance metrics matter at scale."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chunking strategy shapes recall: overlap, semantic boundaries, parent-child."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hybrid search (BM25 + vector) beats pure vector for lexical precision."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rerankers are cross-encoders: exact but slower — a two-stage pipeline is the norm."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-chapters",
      children: "Related chapters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/01-introduction-to-rag",
          children: "Introduction to RAG"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/02-embedding-models",
          children: "Embedding models"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/04-chunking-strategies",
          children: "Chunking strategies"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/12-rag-vector-databases/16-hybrid-search-architecture",
          children: "Hybrid search"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-line answer for interviews:"
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"Query → embed → retrieve from vector store → rerank → generate grounded in retrieved context.\""
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
5815(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwMCA3NjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsbGVkYnk9IjEyX3JhZ192di10aXRsZSAxMl9yYWdfdnYtZGVzYyI+Cjx0aXRsZSBpZD0iMTJfcmFnX3Z2LXRpdGxlIj5SQUcgcGlwZWxpbmUg4oCUIGdyb3VuZCB0aGUgbW9kZWwgaW4geW91ciBkYXRhPC90aXRsZT4KPGRlc2MgaWQ9IjEyX3JhZ192di1kZXNjIj5RdWVyeSwgZW1iZWQsIHJldHJpZXZlIGZyb20gdmVjdG9yIGRhdGFiYXNlLCByZXJhbmssIGFuZCBnZW5lcmF0ZSBhbiBhbnN3ZXIgZ3JvdW5kZWQgaW4gcmV0cmlldmVkIGNvbnRleHQuPC9kZXNjPgo8cmVjdCB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI3NjAiIGZpbGw9IiNmZmZmZmYiLz4KPHBhdGggZD0iTSA0NDAgMTQ0IEwgNDQwIDE2OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGY1ZDc1IiBzdHJva2Utd2lkdGg9IjEiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+CjxwYXRoIGQ9Ik0gNDQwIDIxNiBMIDQ0MCAyNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzRmNWQ3NSIgc3Ryb2tlLXdpZHRoPSIxIiBtYXJrZXItZW5kPSJ1cmwoI2Fycm93KSIvPgo8cGF0aCBkPSJNIDQ0MCAyODggTCA0NDAgMzEyIiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4KPHBhdGggZD0iTSA0NDAgMzYwIEwgNDQwIDM4NCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGY1ZDc1IiBzdHJva2Utd2lkdGg9IjEiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+CjxwYXRoIGQ9Ik0gNDQwIDQzMiBMIDQ0MCA0NTYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzRmNWQ3NSIgc3Ryb2tlLXdpZHRoPSIxIiBtYXJrZXItZW5kPSJ1cmwoI2Fycm93KSIvPgo8cmVjdCB4PSIzMjAiIHk9IjkyIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjUyIiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4KPHRleHQgeD0iNDQwIiB5PSIxMTkiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlF1ZXJ5PC90ZXh0Pgo8dGV4dCB4PSI0NDAiIHk9IjEzMyIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnVzZXIgcXVlc3Rpb248L3RleHQ+CjxyZWN0IHg9IjMyMCIgeT0iMTY0IiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjUyIiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4KPHRleHQgeD0iNDQwIiB5PSIxOTEiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkVtYmVkZGluZzwvdGV4dD4KPHRleHQgeD0iNDQwIiB5PSIyMDUiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj50ZXh0IOKGkiB2ZWN0b3I8L3RleHQ+CjxyZWN0IHg9IjMyMCIgeT0iMjM2IiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjUyIiByeD0iNiIgZmlsbD0icmdiYSg0NiwxMzMsODUsMC4wOCkiIHN0cm9rZT0iIzJlODU1NSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjx0ZXh0IHg9IjQ0MCIgeT0iMjYzIiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5WZWN0b3IgcmV0cmlldmFsPC90ZXh0Pgo8dGV4dCB4PSI0NDAiIHk9IjI3NyIgZmlsbD0iIzJlODU1NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmNvc2luZSDCtyB0b3AtazwvdGV4dD4KPHJlY3QgeD0iMzIwIiB5PSIzMDgiIHdpZHRoPSIyNDAiIGhlaWdodD0iNTIiIHJ4PSI2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTFiMjMiIHN0cm9rZS13aWR0aD0iMSIvPgo8dGV4dCB4PSI0NDAiIHk9IjMzNSIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UmVyYW5rICZhbXA7IGZpbHRlcjwvdGV4dD4KPHRleHQgeD0iNDQwIiB5PSIzNDkiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5wcmVjaXNpb248L3RleHQ+CjxyZWN0IHg9IjMyMCIgeT0iMzgwIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjUyIiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4KPHRleHQgeD0iNDQwIiB5PSI0MDciIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNvbnRleHQgYXNzZW1ibHk8L3RleHQ+Cjx0ZXh0IHg9IjQ0MCIgeT0iNDIxIiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+cHJvbXB0ICsgY2h1bmtzPC90ZXh0Pgo8cmVjdCB4PSIzMjAiIHk9IjQ1MiIgd2lkdGg9IjI0MCIgaGVpZ2h0PSI1MiIgcng9IjYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjx0ZXh0IHg9IjQ0MCIgeT0iNDc5IiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5HZW5lcmF0aW9uPC90ZXh0Pgo8dGV4dCB4PSI0NDAiIHk9IjQ5MyIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmdyb3VuZGVkIGFuc3dlcjwvdGV4dD4KPHJlY3QgeD0iNzIwIiB5PSIxNDAiIHdpZHRoPSIyMTYiIGhlaWdodD0iNjQiIHJ4PSI2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTFiMjMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNCwzIi8+Cjx0ZXh0IHg9IjgyOCIgeT0iMTczIiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbmRleGluZyBzaWRlPC90ZXh0Pgo8dGV4dCB4PSI4MjgiIHk9IjE4NyIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmNodW5rIMK3IGVtYmVkIMK3IHN0b3JlPC90ZXh0Pgo8cGF0aCBkPSJNIDU2MCAxNzIgSCA3MTYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzRmNWQ3NSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSI0LDMiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+Cjx0ZXh0IHg9IjEyMCIgeT0iNjQ0IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMThlbSI+SU5URVJWSUVXIEFOR0xFPC90ZXh0Pjx0ZXh0IHg9IjIxMiIgeT0iNjQ0IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc3R5bGU9Iml0YWxpYyI+UkFHIGludGVydmlld3MgdGVzdCB0aGUgcGlwZWxpbmU6IHdoZXJlIGVtYmVkZGluZ3MgbGl2ZSwgaG93IHJldHJpZXZhbCB3b3JrcywgYW5kIGhvdyBjb250ZXh0IGlzIGZlZC48L3RleHQ+CjxsaW5lIHgxPSIxMjAiIHkxPSI3MDAiIHgyPSI4ODAiIHkyPSI3MDAiIHN0cm9rZT0icmdiYSgyNiwyNywzNSwwLjEwKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHRleHQgeD0iMTIwIiB5PSI3MTYiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4xNGVtIj5MRUdFTkQ8L3RleHQ+PHJlY3QgeD0iMjAwIiB5PSI3MDYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9InJnYmEoNDYsMTMzLDg1LDAuMDgpIiBzdHJva2U9IiMyZTg1NTUiIHN0cm9rZS13aWR0aD0iMSIvPjx0ZXh0IHg9IjIyNCIgeT0iNzE2IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMDZlbSI+QUNDRU5UID0gRk9DQUw8L3RleHQ+PHJlY3QgeD0iMzYwIiB5PSI3MDYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+PHRleHQgeD0iMzg0IiB5PSI3MTYiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4wNmVtIj5QQVBFUiA9IFNURVA8L3RleHQ+Cjwvc3ZnPg==");

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