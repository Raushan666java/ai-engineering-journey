"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[2929],{

/***/ 13158
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_13_ai_agents_langgraph_visual_notes_md_3fa_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-13-ai-agents-langgraph-visual-notes-md-3fa.json
const site_docs_courses_ai_engineering_placement_13_ai_agents_langgraph_visual_notes_md_3fa_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/ai-agents-langgraph/visual-notes","title":"Visual Notes — The Agent Loop","description":"One diagram, the full picture. This page is meant to be glanced at before reading the chapters, and again before interviews.","source":"@site/docs/courses/ai-engineering-placement/13-ai-agents-langgraph/visual-notes.md","sourceDirName":"courses/ai-engineering-placement/13-ai-agents-langgraph","slug":"/ai-engineering-placement/13-ai-agents-langgraph/visual-notes","permalink":"/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph/visual-notes","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":187,"frontMatter":{"id":"visual-notes","slug":"/ai-engineering-placement/13-ai-agents-langgraph/visual-notes","title":"Visual Notes — The Agent Loop","sidebar_label":"Visual Notes","sidebar_position":187},"sidebar":"placementSidebar","previous":{"title":"Advanced Agent Patterns","permalink":"/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph/10-advanced-agent-patterns"},"next":{"title":"14 — Fine-Tuning & PEFT","permalink":"/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/13-ai-agents-langgraph/visual-notes.md


const frontMatter = {
	id: 'visual-notes',
	slug: '/ai-engineering-placement/13-ai-agents-langgraph/visual-notes',
	title: 'Visual Notes — The Agent Loop',
	sidebar_label: 'Visual Notes',
	sidebar_position: 187
};
const contentTitle = 'Visual Notes — The Agent Loop';

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
        id: "visual-notes--the-agent-loop",
        children: "Visual Notes — The Agent Loop"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "One diagram, the full picture. This page is meant to be glanced at before reading the chapters, and again before interviews."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "The Agent Loop",
        src: (__webpack_require__(79894)/* ["default"] */ .A) + "",
        width: "1000",
        height: "760"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "what-the-diagram-shows",
      children: "What the diagram shows"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Decision"
        }), " — The LLM picks the next action from its tool set based on the current goal and state."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Execution"
        }), " — A registered tool (search, code, API) runs and returns structured results."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Loop"
        }), " — The model observes the outcome, updates state/memory, and decides again — until a terminal condition."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "why-this-matters-for-placement",
      children: "Why this matters for placement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agents are the industry top hiring signal for 2026 — the loop is the mental model every question hangs on."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Knowing when NOT to use an agent (deterministic tasks) shows product judgement."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "quick-revision",
      children: "Quick revision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ReAct: interleave reasoning and acting to solve multi-step tasks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Function calling gives the LLM safe, structured access to tools."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Memory/state: short-term context vs long-term user memory."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-agent: an orchestrator delegates to specialists; share state explicitly."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Guardrails: allowlists, budgets, and human-in-the-loop gate risky actions."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "related-chapters",
      children: "Related chapters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph/01-introduction-to-ai-agents",
          children: "Introduction to AI agents"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph/02-agent-architectures",
          children: "Agent architectures"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph/04-tool-use-and-function-calling",
          children: "Tool use"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph/05-memory-and-state",
          children: "Memory and state"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-line answer for interviews:"
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"LLM decides → a tool executes → the result is observed → the loop repeats until the task is done.\""
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

/***/ 79894
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwMCA3NjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsbGVkYnk9IjEzX2FpX2Fndi10aXRsZSAxM19haV9hZ3YtZGVzYyI+DQo8dGl0bGUgaWQ9IjEzX2FpX2Fndi10aXRsZSI+QWdlbnQgbG9vcCDigJQgdGhpbmssIGFjdCwgb2JzZXJ2ZSwgcmVwZWF0PC90aXRsZT4NCjxkZXNjIGlkPSIxM19haV9hZ3YtZGVzYyI+VGhlIGFnZW50IGxvb3A6IExMTSBkZWNpZGVzLCB0b29sIGV4ZWN1dGVzLCByZXN1bHQgb2JzZXJ2ZWQsIGxvb3AgdW50aWwgdGhlIHRhc2sgaXMgZG9uZS48L2Rlc2M+DQo8cmVjdCB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI3NjAiIGZpbGw9IiNmZmZmZmYiLz4NCjxwYXRoIGQ9Ik0gNDQwIDE0NCBMIDQ0MCAxNjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzRmNWQ3NSIgc3Ryb2tlLXdpZHRoPSIxIiBtYXJrZXItZW5kPSJ1cmwoI2Fycm93KSIvPg0KPHBhdGggZD0iTSA0NDAgMjE2IEwgNDQwIDI0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGY1ZDc1IiBzdHJva2Utd2lkdGg9IjEiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+DQo8cGF0aCBkPSJNIDQ0MCAyODggTCA0NDAgMzEyIiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4NCjxwYXRoIGQ9Ik0gNDQwIDM2MCBMIDQ0MCAzODQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzRmNWQ3NSIgc3Ryb2tlLXdpZHRoPSIxIiBtYXJrZXItZW5kPSJ1cmwoI2Fycm93KSIvPg0KPHBhdGggZD0iTSA0NDAgNDMyIEwgNDQwIDQ1NiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGY1ZDc1IiBzdHJva2Utd2lkdGg9IjEiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+DQo8cmVjdCB4PSIzMjAiIHk9IjkyIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjUyIiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4NCjx0ZXh0IHg9IjQ0MCIgeT0iMTE5IiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Hb2FsPC90ZXh0Pg0KPHRleHQgeD0iNDQwIiB5PSIxMzMiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj51c2VyIHRhc2s8L3RleHQ+DQo8cmVjdCB4PSIzMjAiIHk9IjE2NCIgd2lkdGg9IjI0MCIgaGVpZ2h0PSI1MiIgcng9IjYiIGZpbGw9InJnYmEoNDYsMTMzLDg1LDAuMDgpIiBzdHJva2U9IiMyZTg1NTUiIHN0cm9rZS13aWR0aD0iMSIvPg0KPHRleHQgeD0iNDQwIiB5PSIxOTEiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkxMTSBkZWNpZGVzPC90ZXh0Pg0KPHRleHQgeD0iNDQwIiB5PSIyMDUiIGZpbGw9IiMyZTg1NTUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5wbGFuIMK3IG5leHQgYWN0aW9uPC90ZXh0Pg0KPHJlY3QgeD0iMzIwIiB5PSIyMzYiIHdpZHRoPSIyNDAiIGhlaWdodD0iNTIiIHJ4PSI2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTFiMjMiIHN0cm9rZS13aWR0aD0iMSIvPg0KPHRleHQgeD0iNDQwIiB5PSIyNjMiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNhbGwgYSB0b29sPC90ZXh0Pg0KPHRleHQgeD0iNDQwIiB5PSIyNzciIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5zZWFyY2ggwrcgY29kZSDCtyBhcGk8L3RleHQ+DQo8cmVjdCB4PSIzMjAiIHk9IjMwOCIgd2lkdGg9IjI0MCIgaGVpZ2h0PSI1MiIgcng9IjYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+DQo8dGV4dCB4PSI0NDAiIHk9IjMzNSIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+T2JzZXJ2ZSByZXN1bHQ8L3RleHQ+DQo8dGV4dCB4PSI0NDAiIHk9IjM0OSIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnRvb2wgb3V0cHV0PC90ZXh0Pg0KPHJlY3QgeD0iMzIwIiB5PSIzODAiIHdpZHRoPSIyNDAiIGhlaWdodD0iNTIiIHJ4PSI2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTFiMjMiIHN0cm9rZS13aWR0aD0iMSIvPg0KPHRleHQgeD0iNDQwIiB5PSI0MDciIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkV2YWx1YXRlPC90ZXh0Pg0KPHRleHQgeD0iNDQwIiB5PSI0MjEiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5kb25lPyBtb3JlIHN0ZXBzPzwvdGV4dD4NCjxyZWN0IHg9IjMyMCIgeT0iNDUyIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjUyIiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4NCjx0ZXh0IHg9IjQ0MCIgeT0iNDc5IiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BbnN3ZXI8L3RleHQ+DQo8dGV4dCB4PSI0NDAiIHk9IjQ5MyIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmZpbmFsIHJlc3BvbnNlPC90ZXh0Pg0KPHJlY3QgeD0iNzIwIiB5PSIxNDAiIHdpZHRoPSIyMTYiIGhlaWdodD0iNjQiIHJ4PSI2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTFiMjMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNCwzIi8+DQo8dGV4dCB4PSI4MjgiIHk9IjE3MyIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U3RhdGU8L3RleHQ+DQo8dGV4dCB4PSI4MjgiIHk9IjE4NyIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnNoYXJlZCBncmFwaCBtZW1vcnk8L3RleHQ+DQo8cGF0aCBkPSJNIDU2MCAxNzIgSCA3MTYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzRmNWQ3NSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSI0LDMiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+DQo8dGV4dCB4PSIxMjAiIHk9IjY0NCIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjE4ZW0iPklOVEVSVklFVyBBTkdMRTwvdGV4dD48dGV4dCB4PSIyMTIiIHk9IjY0NCIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXN0eWxlPSJpdGFsaWMiPkxhbmdHcmFwaCBpbnRlcnZpZXdzIGFyZSB0aGUgbG9vcDogbm9kZXMsIGVkZ2VzLCBzdGF0ZSwgYW5kIHRoZSB0b29scyB0aGUgYWdlbnQgY2FuIGNhbGwuPC90ZXh0Pg0KPGxpbmUgeDE9IjEyMCIgeTE9IjcwMCIgeDI9Ijg4MCIgeTI9IjcwMCIgc3Ryb2tlPSJyZ2JhKDI2LDI3LDM1LDAuMTApIiBzdHJva2Utd2lkdGg9IjEiLz48dGV4dCB4PSIxMjAiIHk9IjcxNiIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjE0ZW0iPkxFR0VORDwvdGV4dD48cmVjdCB4PSIyMDAiIHk9IjcwNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0icmdiYSg0NiwxMzMsODUsMC4wOCkiIHN0cm9rZT0iIzJlODU1NSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHRleHQgeD0iMjI0IiB5PSI3MTYiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4wNmVtIj5BQ0NFTlQgPSBGT0NBTDwvdGV4dD48cmVjdCB4PSIzNjAiIHk9IjcwNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz48dGV4dCB4PSIzODQiIHk9IjcxNiIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjA2ZW0iPlBBUEVSID0gU1RFUDwvdGV4dD4NCjwvc3ZnPg==");
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