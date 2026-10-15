"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[6859],{

/***/ 54742
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_08_machine_learning_visual_notes_md_ab8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-08-machine-learning-visual-notes-md-ab8.json
const site_docs_courses_ai_engineering_placement_08_machine_learning_visual_notes_md_ab8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/machine-learning/visual-notes","title":"Visual Notes — The ML Lifecycle","description":"One diagram, the full picture. This page is meant to be glanced at before reading the chapters, and again before interviews.","source":"@site/docs/courses/ai-engineering-placement/08-machine-learning/visual-notes.md","sourceDirName":"courses/ai-engineering-placement/08-machine-learning","slug":"/ai-engineering-placement/08-machine-learning/visual-notes","permalink":"/ai-engineering-journey/ai-engineering-placement/08-machine-learning/visual-notes","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":125,"frontMatter":{"id":"visual-notes","slug":"/ai-engineering-placement/08-machine-learning/visual-notes","title":"Visual Notes — The ML Lifecycle","sidebar_label":"Visual Notes","sidebar_position":125},"sidebar":"placementSidebar","previous":{"title":"Feature Engineering — Imputation, Encoding, Scaling, Feature Construction, Feature Selection","permalink":"/ai-engineering-journey/ai-engineering-placement/08-machine-learning/12-feature-engineering"},"next":{"title":"09 — Deep Learning with PyTorch","permalink":"/ai-engineering-journey/ai-engineering-placement/09-deep-learning-pytorch"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/08-machine-learning/visual-notes.md


const frontMatter = {
	id: 'visual-notes',
	slug: '/ai-engineering-placement/08-machine-learning/visual-notes',
	title: 'Visual Notes — The ML Lifecycle',
	sidebar_label: 'Visual Notes',
	sidebar_position: 125
};
const contentTitle = 'Visual Notes — The ML Lifecycle';

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
        id: "visual-notes--the-ml-lifecycle",
        children: "Visual Notes — The ML Lifecycle"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "One diagram, the full picture. This page is meant to be glanced at before reading the chapters, and again before interviews."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "The ML Lifecycle",
        src: (__webpack_require__(42244)/* ["default"] */ .A) + "",
        width: "1000",
        height: "760"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "what-the-diagram-shows",
      children: "What the diagram shows"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data trunk"
        }), " — Collection and cleaning are 80% of real effort; garbage in beats even the best model."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Modelling branch"
        }), " — Feature engineering, then training a model, then honest evaluation — splitting train/val/test from the start."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Operations branch"
        }), " — Deploy, serve and monitor; drift or bad metrics loop you straight back to data."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "why-this-matters-for-placement",
      children: "Why this matters for placement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers weigh \"how do you evaluate\" and \"how do you know it works\" as much as the model itself."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explaining the loop shows you understand production ML, not just sklearn notebooks."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "quick-revision",
      children: "Quick revision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bias–variance: underfit = high bias; overfit = high variance; regularise instead of more data."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Precision vs recall: precision = what you returned is right; recall = you returned what was right."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-validation beats a single holdout for small data."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Feature engineering: scaling, encoding, handling missing values, leakage detection."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Metrics must match the business: ROC AUC is not accuracy in a class-imbalanced world."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "related-chapters",
      children: "Related chapters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/08-machine-learning/01-ml-fundamentals",
          children: "ML fundamentals"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/08-machine-learning/09-model-evaluation",
          children: "Model evaluation"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/08-machine-learning/12-feature-engineering",
          children: "Feature engineering"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/08-machine-learning/07-unsupervised-learning",
          children: "Unsupervised learning"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-line answer for interviews:"
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"ML is a loop: collect → clean → engineer → train → evaluate → ship → monitor, and feedback restarts it.\""
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

/***/ 42244
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwMCA3NjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsbGVkYnk9IjA4X21hY2hpdi10aXRsZSAwOF9tYWNoaXYtZGVzYyI+DQo8dGl0bGUgaWQ9IjA4X21hY2hpdi10aXRsZSI+VGhlIE1MIGxpZmVjeWNsZSDigJQgZnJvbSBkYXRhIHRvIGRlcGxveWVkIG1vZGVsPC90aXRsZT4NCjxkZXNjIGlkPSIwOF9tYWNoaXYtZGVzYyI+RGF0YSBjb2xsZWN0aW9uLCBjbGVhbmluZywgZmVhdHVyZSBlbmdpbmVlcmluZywgdHJhaW5pbmcsIGV2YWx1YXRpb24gYW5kIGRlcGxveW1lbnQgYXMgYSBsb29wIHdpdGggbW9uaXRvcmluZy48L2Rlc2M+DQo8cmVjdCB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI3NjAiIGZpbGw9IiNmZmZmZmYiLz4NCjxwYXRoIGQ9Ik0gNDQwIDE0NCBMIDQ0MCAxNjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzRmNWQ3NSIgc3Ryb2tlLXdpZHRoPSIxIiBtYXJrZXItZW5kPSJ1cmwoI2Fycm93KSIvPg0KPHBhdGggZD0iTSA0NDAgMjE2IEwgNDQwIDI0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGY1ZDc1IiBzdHJva2Utd2lkdGg9IjEiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+DQo8cGF0aCBkPSJNIDQ0MCAyODggTCA0NDAgMzEyIiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4NCjxwYXRoIGQ9Ik0gNDQwIDM2MCBMIDQ0MCAzODQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzRmNWQ3NSIgc3Ryb2tlLXdpZHRoPSIxIiBtYXJrZXItZW5kPSJ1cmwoI2Fycm93KSIvPg0KPHBhdGggZD0iTSA0NDAgNDMyIEwgNDQwIDQ1NiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGY1ZDc1IiBzdHJva2Utd2lkdGg9IjEiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+DQo8cmVjdCB4PSIzMjAiIHk9IjkyIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjUyIiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4NCjx0ZXh0IHg9IjQ0MCIgeT0iMTE5IiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EYXRhIGNvbGxlY3Rpb248L3RleHQ+DQo8dGV4dCB4PSI0NDAiIHk9IjEzMyIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnNvdXJjZXMgwrcgbGFiZWxzPC90ZXh0Pg0KPHJlY3QgeD0iMzIwIiB5PSIxNjQiIHdpZHRoPSIyNDAiIGhlaWdodD0iNTIiIHJ4PSI2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTFiMjMiIHN0cm9rZS13aWR0aD0iMSIvPg0KPHRleHQgeD0iNDQwIiB5PSIxOTEiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNsZWFuaW5nICZhbXA7IGZlYXR1cmVzPC90ZXh0Pg0KPHRleHQgeD0iNDQwIiB5PSIyMDUiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5taXNzaW5nIMK3IG91dGxpZXJzIMK3IGVuY29kaW5nPC90ZXh0Pg0KPHJlY3QgeD0iMzIwIiB5PSIyMzYiIHdpZHRoPSIyNDAiIGhlaWdodD0iNTIiIHJ4PSI2IiBmaWxsPSJyZ2JhKDQ2LDEzMyw4NSwwLjA4KSIgc3Ryb2tlPSIjMmU4NTU1IiBzdHJva2Utd2lkdGg9IjEiLz4NCjx0ZXh0IHg9IjQ0MCIgeT0iMjYzIiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Nb2RlbCB0cmFpbmluZzwvdGV4dD4NCjx0ZXh0IHg9IjQ0MCIgeT0iMjc3IiBmaWxsPSIjMmU4NTU1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+c3BsaXQgwrcgZml0IMK3IHZhbGlkYXRlPC90ZXh0Pg0KPHJlY3QgeD0iMzIwIiB5PSIzMDgiIHdpZHRoPSIyNDAiIGhlaWdodD0iNTIiIHJ4PSI2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTFiMjMiIHN0cm9rZS13aWR0aD0iMSIvPg0KPHRleHQgeD0iNDQwIiB5PSIzMzUiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkV2YWx1YXRpb248L3RleHQ+DQo8dGV4dCB4PSI0NDAiIHk9IjM0OSIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPm1ldHJpY3MgwrcgYmlhcyBjaGVjazwvdGV4dD4NCjxyZWN0IHg9IjMyMCIgeT0iMzgwIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjUyIiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4NCjx0ZXh0IHg9IjQ0MCIgeT0iNDA3IiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EZXBsb3ltZW50PC90ZXh0Pg0KPHRleHQgeD0iNDQwIiB5PSI0MjEiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5zZXJ2aW5nIMK3IHJvbGxiYWNrPC90ZXh0Pg0KPHJlY3QgeD0iMzIwIiB5PSI0NTIiIHdpZHRoPSIyNDAiIGhlaWdodD0iNTIiIHJ4PSI2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTFiMjMiIHN0cm9rZS13aWR0aD0iMSIvPg0KPHRleHQgeD0iNDQwIiB5PSI0NzkiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1vbml0b3Jpbmc8L3RleHQ+DQo8dGV4dCB4PSI0NDAiIHk9IjQ5MyIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmRyaWZ0IMK3IHJldHJhaW4gbG9vcDwvdGV4dD4NCjxyZWN0IHg9IjcyMCIgeT0iMTQwIiB3aWR0aD0iMjE2IiBoZWlnaHQ9IjY0IiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjQsMyIvPg0KPHRleHQgeD0iODI4IiB5PSIxNzMiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkZlYXR1cmUgc3RvcmU8L3RleHQ+DQo8dGV4dCB4PSI4MjgiIHk9IjE4NyIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnRyYWluIHZzIHNlcnZlIHBhcml0eTwvdGV4dD4NCjxwYXRoIGQ9Ik0gNTYwIDE3MiBIIDcxNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGY1ZDc1IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjQsMyIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4NCjx0ZXh0IHg9IjEyMCIgeT0iNjQ0IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMThlbSI+SU5URVJWSUVXIEFOR0xFPC90ZXh0Pjx0ZXh0IHg9IjIxMiIgeT0iNjQ0IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc3R5bGU9Iml0YWxpYyI+RXZlcnkgTUxPcHMgaW50ZXJ2aWV3IHN0YXJ0cyB3aXRoICJ3YWxrIG1lIHRocm91Z2ggdGhlIGxpZmVjeWNsZSIg4oCUIHRoaXMgZGlhZ3JhbSBpcyB0aGF0IHdhbGsuPC90ZXh0Pg0KPGxpbmUgeDE9IjEyMCIgeTE9IjcwMCIgeDI9Ijg4MCIgeTI9IjcwMCIgc3Ryb2tlPSJyZ2JhKDI2LDI3LDM1LDAuMTApIiBzdHJva2Utd2lkdGg9IjEiLz48dGV4dCB4PSIxMjAiIHk9IjcxNiIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjE0ZW0iPkxFR0VORDwvdGV4dD48cmVjdCB4PSIyMDAiIHk9IjcwNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0icmdiYSg0NiwxMzMsODUsMC4wOCkiIHN0cm9rZT0iIzJlODU1NSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHRleHQgeD0iMjI0IiB5PSI3MTYiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4wNmVtIj5BQ0NFTlQgPSBGT0NBTDwvdGV4dD48cmVjdCB4PSIzNjAiIHk9IjcwNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz48dGV4dCB4PSIzODQiIHk9IjcxNiIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjA2ZW0iPlBBUEVSID0gU1RFUDwvdGV4dD4NCjwvc3ZnPg==");
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