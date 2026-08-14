"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[5953],{

/***/ 15670
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_10_nlp_transformers_visual_notes_md_73e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-10-nlp-transformers-visual-notes-md-73e.json
const site_docs_courses_ai_engineering_placement_10_nlp_transformers_visual_notes_md_73e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/nlp-transformers/visual-notes","title":"Visual Notes — Transformer Anatomy","description":"One diagram, the full picture. This page is meant to be glanced at before reading the chapters, and again before interviews.","source":"@site/docs/courses/ai-engineering-placement/10-nlp-transformers/visual-notes.md","sourceDirName":"courses/ai-engineering-placement/10-nlp-transformers","slug":"/ai-engineering-placement/10-nlp-transformers/visual-notes","permalink":"/ai-engineering-journey/ai-engineering-placement/10-nlp-transformers/visual-notes","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":147,"frontMatter":{"id":"visual-notes","slug":"/ai-engineering-placement/10-nlp-transformers/visual-notes","title":"Visual Notes — Transformer Anatomy","sidebar_label":"Visual Notes","sidebar_position":147},"sidebar":"placementSidebar","previous":{"title":"NLP Applications — Text Classification, NER, QA, Summarization, Translation","permalink":"/ai-engineering-journey/ai-engineering-placement/10-nlp-transformers/08-nlp-applications"},"next":{"title":"11 — LLMs & Prompt Engineering","permalink":"/ai-engineering-journey/ai-engineering-placement/11-llms-prompt-engineering"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/10-nlp-transformers/visual-notes.md


const frontMatter = {
	id: 'visual-notes',
	slug: '/ai-engineering-placement/10-nlp-transformers/visual-notes',
	title: 'Visual Notes — Transformer Anatomy',
	sidebar_label: 'Visual Notes',
	sidebar_position: 147
};
const contentTitle = 'Visual Notes — Transformer Anatomy';

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
        id: "visual-notes--transformer-anatomy",
        children: "Visual Notes — Transformer Anatomy"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "One diagram, the full picture. This page is meant to be glanced at before reading the chapters, and again before interviews."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Transformer Anatomy",
        src: (__webpack_require__(29624)/* ["default"] */ .A) + "",
        width: "1000",
        height: "640"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "what-the-diagram-shows",
      children: "What the diagram shows"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Input"
        }), " — Text is tokenised, embedded, and given positional information so order is preserved."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Attention"
        }), " — Self-attention lets every token attend to every token; multi-head attention learns different relationships."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Output"
        }), " — Feed-forward layers refine, then an output head maps to the next-token distribution (or a classification label)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "why-this-matters-for-placement",
      children: "Why this matters for placement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The transformer is the single most asked architecture of the decade — know the flow, not just the name."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explaining how attention differs from RNN recurrence is a guaranteed warm-up question."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "quick-revision",
      children: "Quick revision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Attention is all you need\": no recurrence, parallelised, long range captured."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Self-attention = Query × Key -> scores -> softmax -> weighted Value sum."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Positional encoding injects token order since attention has none natively."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-head attention: parallel projections each specialise in one relationship type."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transformers are architecture; BERT (encoder) vs GPT (decoder) vs T5 (encoder-decoder)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "related-chapters",
      children: "Related chapters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/10-nlp-transformers/04-attention-mechanism",
          children: "Attention mechanism"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/10-nlp-transformers/05-transformer-architecture",
          children: "Transformer architecture"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/10-nlp-transformers/06-bert-and-fine-tuning",
          children: "BERT and fine-tuning"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/10-nlp-transformers/02-word-embeddings",
          children: "Word embeddings"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-line answer for interviews:"
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"Tokens → embeddings + positional encoding → self-attention → feed-forward → output head.\""
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

/***/ 29624
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwMCA2NDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsbGVkYnk9IjEwX25scF90di10aXRsZSAxMF9ubHBfdHYtZGVzYyI+DQo8dGl0bGUgaWQ9IjEwX25scF90di10aXRsZSI+VHJhbnNmb3JtZXIg4oCUIHRoZSBzdGFjayB0aGF0IGNoYW5nZWQgTkxQPC90aXRsZT4NCjxkZXNjIGlkPSIxMF9ubHBfdHYtZGVzYyI+VG9rZW4gZW1iZWRkaW5ncywgcG9zaXRpb25hbCBlbmNvZGluZywgc2VsZi1hdHRlbnRpb24sIGZlZWQtZm9yd2FyZCBsYXllcnMsIGFuZCB0aGUgb3V0cHV0IGhlYWQuPC9kZXNjPg0KPHJlY3Qgd2lkdGg9IjEwMDAiIGhlaWdodD0iNjQwIiBmaWxsPSIjZmZmZmZmIi8+DQo8cmVjdCB4PSIxMjAiIHk9Ijg0IiB3aWR0aD0iNzYwIiBoZWlnaHQ9IjY0IiBmaWxsPSIjZjVmNmY4Ii8+DQo8bGluZSB4MT0iMTIwIiB5MT0iMTQ4IiB4Mj0iODgwIiB5Mj0iMTQ4IiBzdHJva2U9InJnYmEoMjYsMjcsMzUsMC4xMCkiIHN0cm9rZS13aWR0aD0iMSIvPg0KPHRleHQgeD0iMTQwIiB5PSIxMTIiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4xNGVtIiBmb250LXdlaWdodD0iNDAwIj5MNTwvdGV4dD4NCjx0ZXh0IHg9IjI2MCIgeT0iMTE0IiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIj5PdXRwdXQgaGVhZDwvdGV4dD4NCjx0ZXh0IHg9Ijg2MCIgeT0iMTE0IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9ImVuZCIgbGV0dGVyLXNwYWNpbmc9IjAuMDhlbSI+bG9naXRzIMK3IHNvZnRtYXg8L3RleHQ+DQo8cmVjdCB4PSIxMjAiIHk9IjE0OCIgd2lkdGg9Ijc2MCIgaGVpZ2h0PSI2NCIgZmlsbD0iI2Y1ZjZmOCIvPg0KPGxpbmUgeDE9IjEyMCIgeTE9IjIxMiIgeDI9Ijg4MCIgeTI9IjIxMiIgc3Ryb2tlPSJyZ2JhKDI2LDI3LDM1LDAuMTApIiBzdHJva2Utd2lkdGg9IjEiLz4NCjx0ZXh0IHg9IjE0MCIgeT0iMTc2IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMTRlbSIgZm9udC13ZWlnaHQ9IjQwMCI+TDQ8L3RleHQ+DQo8dGV4dCB4PSIyNjAiIHk9IjE3OCIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiI+RmVlZC1mb3J3YXJkIG5ldHdvcms8L3RleHQ+DQo8dGV4dCB4PSI4NjAiIHk9IjE3OCIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJlbmQiIGxldHRlci1zcGFjaW5nPSIwLjA4ZW0iPnJlbHUgwrcgbGF5ZXJub3JtPC90ZXh0Pg0KPHJlY3QgeD0iMTIwIiB5PSIyMTIiIHdpZHRoPSI3NjAiIGhlaWdodD0iNjQiIGZpbGw9InJnYmEoNDYsMTMzLDg1LDAuMDgpIi8+DQo8bGluZSB4MT0iMTIwIiB5MT0iMjc2IiB4Mj0iODgwIiB5Mj0iMjc2IiBzdHJva2U9InJnYmEoMjYsMjcsMzUsMC4xMCkiIHN0cm9rZS13aWR0aD0iMSIvPg0KPHRleHQgeD0iMTQwIiB5PSIyNDAiIGZpbGw9IiMyZTg1NTUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4xNGVtIiBmb250LXdlaWdodD0iNjAwIj5MMzwvdGV4dD4NCjx0ZXh0IHg9IjI2MCIgeT0iMjQyIiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIj5TZWxmLWF0dGVudGlvbjwvdGV4dD4NCjx0ZXh0IHg9Ijg2MCIgeT0iMjQyIiBmaWxsPSIjMmU4NTU1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9ImVuZCIgbGV0dGVyLXNwYWNpbmc9IjAuMDhlbSI+USDCtyBLIMK3IFYgwrcgaGVhZHM8L3RleHQ+DQo8cmVjdCB4PSIxMjAiIHk9IjI3NiIgd2lkdGg9Ijc2MCIgaGVpZ2h0PSI2NCIgZmlsbD0iI2Y1ZjZmOCIvPg0KPGxpbmUgeDE9IjEyMCIgeTE9IjM0MCIgeDI9Ijg4MCIgeTI9IjM0MCIgc3Ryb2tlPSJyZ2JhKDI2LDI3LDM1LDAuMTApIiBzdHJva2Utd2lkdGg9IjEiLz4NCjx0ZXh0IHg9IjE0MCIgeT0iMzA0IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMTRlbSIgZm9udC13ZWlnaHQ9IjQwMCI+TDI8L3RleHQ+DQo8dGV4dCB4PSIyNjAiIHk9IjMwNiIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiI+RW1iZWRkaW5ncyArIHBvc2l0aW9uPC90ZXh0Pg0KPHRleHQgeD0iODYwIiB5PSIzMDYiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0iZW5kIiBsZXR0ZXItc3BhY2luZz0iMC4wOGVtIj50b2tlbiBpZHMg4oaSIHZlY3RvcnM8L3RleHQ+DQo8cmVjdCB4PSIxMjAiIHk9IjM0MCIgd2lkdGg9Ijc2MCIgaGVpZ2h0PSI2NCIgZmlsbD0iI2Y1ZjZmOCIvPg0KPGxpbmUgeDE9IjEyMCIgeTE9IjQwNCIgeDI9Ijg4MCIgeTI9IjQwNCIgc3Ryb2tlPSJyZ2JhKDI2LDI3LDM1LDAuMTApIiBzdHJva2Utd2lkdGg9IjEiLz4NCjx0ZXh0IHg9IjE0MCIgeT0iMzY4IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMTRlbSIgZm9udC13ZWlnaHQ9IjQwMCI+TDE8L3RleHQ+DQo8dGV4dCB4PSIyNjAiIHk9IjM3MCIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiI+SW5wdXQgdG9rZW5zPC90ZXh0Pg0KPHRleHQgeD0iODYwIiB5PSIzNzAiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0iZW5kIiBsZXR0ZXItc3BhY2luZz0iMC4wOGVtIj50b2tlbml6ZXIgwrcgYnBlPC90ZXh0Pg0KPHRleHQgeD0iMTIwIiB5PSI1MjQiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4xOGVtIj5JTlRFUlZJRVcgQU5HTEU8L3RleHQ+PHRleHQgeD0iMjEyIiB5PSI1MjQiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zdHlsZT0iaXRhbGljIj5JZiB5b3UgY2FuIGRyYXcgdGhpcyBzdGFjayBmcm9tIG1lbW9yeSwgeW91IGNhbiBhbnN3ZXIgaGFsZiBvZiB0aGUgbW9kZXJuIExMTSBpbnRlcnZpZXcuPC90ZXh0Pg0KPGxpbmUgeDE9IjEyMCIgeTE9IjU4MCIgeDI9Ijg4MCIgeTI9IjU4MCIgc3Ryb2tlPSJyZ2JhKDI2LDI3LDM1LDAuMTApIiBzdHJva2Utd2lkdGg9IjEiLz48dGV4dCB4PSIxMjAiIHk9IjU5NiIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjE0ZW0iPkxFR0VORDwvdGV4dD48cmVjdCB4PSIyMDAiIHk9IjU4NiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0icmdiYSg0NiwxMzMsODUsMC4wOCkiIHN0cm9rZT0iIzJlODU1NSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHRleHQgeD0iMjI0IiB5PSI1OTYiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4wNmVtIj5BQ0NFTlQgPSBGT0NBTDwvdGV4dD48cmVjdCB4PSIzNjAiIHk9IjU4NiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz48dGV4dCB4PSIzODQiIHk9IjU5NiIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjA2ZW0iPlBBUEVSID0gU1RFUDwvdGV4dD4NCjwvc3ZnPg==");
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