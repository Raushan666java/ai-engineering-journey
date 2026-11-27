"use strict";
(self["webpackChunksite"] = self["webpackChunksite"] || []).push([["30458"], {
37754(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_10_nlp_transformers_visual_notes_md_73e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-10-nlp-transformers-visual-notes-md-73e.json
var site_docs_courses_ai_engineering_placement_10_nlp_transformers_visual_notes_md_73e_namespaceObject = JSON.parse('{"id":"courses/ai-engineering-placement/nlp-transformers/visual-notes","title":"Visual Notes — Transformer Anatomy","description":"Visual Notes — Transformer Anatomy: One diagram, the full picture. This page is meant to be glanced at before reading the chapters, and again before","source":"@site/docs/courses/ai-engineering-placement/10-nlp-transformers/visual-notes.md","sourceDirName":"courses/ai-engineering-placement/10-nlp-transformers","slug":"/ai-engineering-placement/10-nlp-transformers/visual-notes","permalink":"/ai-engineering-journey/ai-engineering-placement/10-nlp-transformers/visual-notes","draft":false,"unlisted":false,"editUrl":"https://github.com/Raushan666java/ai-engineering-journey/tree/main/site/docs/docs/courses/ai-engineering-placement/10-nlp-transformers/visual-notes.md","tags":[],"version":"current","lastUpdatedAt":1795167173000,"sidebarPosition":147,"frontMatter":{"id":"visual-notes","slug":"/ai-engineering-placement/10-nlp-transformers/visual-notes","title":"Visual Notes — Transformer Anatomy","sidebar_label":"Visual Notes","sidebar_position":147,"description":"Visual Notes — Transformer Anatomy: One diagram, the full picture. This page is meant to be glanced at before reading the chapters, and again before"},"sidebar":"placementSidebar","previous":{"title":"NLP Applications — Text Classification, NER, QA, Summarization, Translation","permalink":"/ai-engineering-journey/ai-engineering-placement/10-nlp-transformers/08-nlp-applications"},"next":{"title":"11 — LLMs & Prompt Engineering","permalink":"/ai-engineering-journey/ai-engineering-placement/11-llms-prompt-engineering"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/courses/ai-engineering-placement/10-nlp-transformers/visual-notes.md


const frontMatter = {
	id: 'visual-notes',
	slug: '/ai-engineering-placement/10-nlp-transformers/visual-notes',
	title: 'Visual Notes — Transformer Anatomy',
	sidebar_label: 'Visual Notes',
	sidebar_position: 147,
	description: 'Visual Notes — Transformer Anatomy: One diagram, the full picture. This page is meant to be glanced at before reading the chapters, and again before'
};
const contentTitle = 'Visual Notes — Transformer Anatomy';

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
        src: (__webpack_require__(2693)/* ["default"] */.A) + "",
        width: "1000",
        height: "640"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-this-matters-for-placement",
      children: "Why this matters for placement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The transformer is the single most asked architecture of the decade — know the flow, not just the name."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explaining how attention differs from RNN recurrence is a guaranteed warm-up question."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
2693(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwMCA2NDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsbGVkYnk9IjEwX25scF90di10aXRsZSAxMF9ubHBfdHYtZGVzYyI+Cjx0aXRsZSBpZD0iMTBfbmxwX3R2LXRpdGxlIj5UcmFuc2Zvcm1lciDigJQgdGhlIHN0YWNrIHRoYXQgY2hhbmdlZCBOTFA8L3RpdGxlPgo8ZGVzYyBpZD0iMTBfbmxwX3R2LWRlc2MiPlRva2VuIGVtYmVkZGluZ3MsIHBvc2l0aW9uYWwgZW5jb2RpbmcsIHNlbGYtYXR0ZW50aW9uLCBmZWVkLWZvcndhcmQgbGF5ZXJzLCBhbmQgdGhlIG91dHB1dCBoZWFkLjwvZGVzYz4KPHJlY3Qgd2lkdGg9IjEwMDAiIGhlaWdodD0iNjQwIiBmaWxsPSIjZmZmZmZmIi8+CjxyZWN0IHg9IjEyMCIgeT0iODQiIHdpZHRoPSI3NjAiIGhlaWdodD0iNjQiIGZpbGw9IiNmNWY2ZjgiLz4KPGxpbmUgeDE9IjEyMCIgeTE9IjE0OCIgeDI9Ijg4MCIgeTI9IjE0OCIgc3Ryb2tlPSJyZ2JhKDI2LDI3LDM1LDAuMTApIiBzdHJva2Utd2lkdGg9IjEiLz4KPHRleHQgeD0iMTQwIiB5PSIxMTIiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4xNGVtIiBmb250LXdlaWdodD0iNDAwIj5MNTwvdGV4dD4KPHRleHQgeD0iMjYwIiB5PSIxMTQiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiPk91dHB1dCBoZWFkPC90ZXh0Pgo8dGV4dCB4PSI4NjAiIHk9IjExNCIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJlbmQiIGxldHRlci1zcGFjaW5nPSIwLjA4ZW0iPmxvZ2l0cyDCtyBzb2Z0bWF4PC90ZXh0Pgo8cmVjdCB4PSIxMjAiIHk9IjE0OCIgd2lkdGg9Ijc2MCIgaGVpZ2h0PSI2NCIgZmlsbD0iI2Y1ZjZmOCIvPgo8bGluZSB4MT0iMTIwIiB5MT0iMjEyIiB4Mj0iODgwIiB5Mj0iMjEyIiBzdHJva2U9InJnYmEoMjYsMjcsMzUsMC4xMCkiIHN0cm9rZS13aWR0aD0iMSIvPgo8dGV4dCB4PSIxNDAiIHk9IjE3NiIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjE0ZW0iIGZvbnQtd2VpZ2h0PSI0MDAiPkw0PC90ZXh0Pgo8dGV4dCB4PSIyNjAiIHk9IjE3OCIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiI+RmVlZC1mb3J3YXJkIG5ldHdvcms8L3RleHQ+Cjx0ZXh0IHg9Ijg2MCIgeT0iMTc4IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9ImVuZCIgbGV0dGVyLXNwYWNpbmc9IjAuMDhlbSI+cmVsdSDCtyBsYXllcm5vcm08L3RleHQ+CjxyZWN0IHg9IjEyMCIgeT0iMjEyIiB3aWR0aD0iNzYwIiBoZWlnaHQ9IjY0IiBmaWxsPSJyZ2JhKDQ2LDEzMyw4NSwwLjA4KSIvPgo8bGluZSB4MT0iMTIwIiB5MT0iMjc2IiB4Mj0iODgwIiB5Mj0iMjc2IiBzdHJva2U9InJnYmEoMjYsMjcsMzUsMC4xMCkiIHN0cm9rZS13aWR0aD0iMSIvPgo8dGV4dCB4PSIxNDAiIHk9IjI0MCIgZmlsbD0iIzJlODU1NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjE0ZW0iIGZvbnQtd2VpZ2h0PSI2MDAiPkwzPC90ZXh0Pgo8dGV4dCB4PSIyNjAiIHk9IjI0MiIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiI+U2VsZi1hdHRlbnRpb248L3RleHQ+Cjx0ZXh0IHg9Ijg2MCIgeT0iMjQyIiBmaWxsPSIjMmU4NTU1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9ImVuZCIgbGV0dGVyLXNwYWNpbmc9IjAuMDhlbSI+USDCtyBLIMK3IFYgwrcgaGVhZHM8L3RleHQ+CjxyZWN0IHg9IjEyMCIgeT0iMjc2IiB3aWR0aD0iNzYwIiBoZWlnaHQ9IjY0IiBmaWxsPSIjZjVmNmY4Ii8+CjxsaW5lIHgxPSIxMjAiIHkxPSIzNDAiIHgyPSI4ODAiIHkyPSIzNDAiIHN0cm9rZT0icmdiYSgyNiwyNywzNSwwLjEwKSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjx0ZXh0IHg9IjE0MCIgeT0iMzA0IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMTRlbSIgZm9udC13ZWlnaHQ9IjQwMCI+TDI8L3RleHQ+Cjx0ZXh0IHg9IjI2MCIgeT0iMzA2IiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIj5FbWJlZGRpbmdzICsgcG9zaXRpb248L3RleHQ+Cjx0ZXh0IHg9Ijg2MCIgeT0iMzA2IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9ImVuZCIgbGV0dGVyLXNwYWNpbmc9IjAuMDhlbSI+dG9rZW4gaWRzIOKGkiB2ZWN0b3JzPC90ZXh0Pgo8cmVjdCB4PSIxMjAiIHk9IjM0MCIgd2lkdGg9Ijc2MCIgaGVpZ2h0PSI2NCIgZmlsbD0iI2Y1ZjZmOCIvPgo8bGluZSB4MT0iMTIwIiB5MT0iNDA0IiB4Mj0iODgwIiB5Mj0iNDA0IiBzdHJva2U9InJnYmEoMjYsMjcsMzUsMC4xMCkiIHN0cm9rZS13aWR0aD0iMSIvPgo8dGV4dCB4PSIxNDAiIHk9IjM2OCIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjE0ZW0iIGZvbnQtd2VpZ2h0PSI0MDAiPkwxPC90ZXh0Pgo8dGV4dCB4PSIyNjAiIHk9IjM3MCIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiI+SW5wdXQgdG9rZW5zPC90ZXh0Pgo8dGV4dCB4PSI4NjAiIHk9IjM3MCIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJlbmQiIGxldHRlci1zcGFjaW5nPSIwLjA4ZW0iPnRva2VuaXplciDCtyBicGU8L3RleHQ+Cjx0ZXh0IHg9IjEyMCIgeT0iNTI0IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMThlbSI+SU5URVJWSUVXIEFOR0xFPC90ZXh0Pjx0ZXh0IHg9IjIxMiIgeT0iNTI0IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc3R5bGU9Iml0YWxpYyI+SWYgeW91IGNhbiBkcmF3IHRoaXMgc3RhY2sgZnJvbSBtZW1vcnksIHlvdSBjYW4gYW5zd2VyIGhhbGYgb2YgdGhlIG1vZGVybiBMTE0gaW50ZXJ2aWV3LjwvdGV4dD4KPGxpbmUgeDE9IjEyMCIgeTE9IjU4MCIgeDI9Ijg4MCIgeTI9IjU4MCIgc3Ryb2tlPSJyZ2JhKDI2LDI3LDM1LDAuMTApIiBzdHJva2Utd2lkdGg9IjEiLz48dGV4dCB4PSIxMjAiIHk9IjU5NiIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjE0ZW0iPkxFR0VORDwvdGV4dD48cmVjdCB4PSIyMDAiIHk9IjU4NiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0icmdiYSg0NiwxMzMsODUsMC4wOCkiIHN0cm9rZT0iIzJlODU1NSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHRleHQgeD0iMjI0IiB5PSI1OTYiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4wNmVtIj5BQ0NFTlQgPSBGT0NBTDwvdGV4dD48cmVjdCB4PSIzNjAiIHk9IjU4NiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz48dGV4dCB4PSIzODQiIHk9IjU5NiIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjA2ZW0iPlBBUEVSID0gU1RFUDwvdGV4dD4KPC9zdmc+");

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