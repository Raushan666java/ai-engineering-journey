"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[87365],{

/***/ 90374
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_22_advanced_ai_agents_visual_notes_md_64f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-22-advanced-ai-agents-visual-notes-md-64f.json
const site_docs_courses_ai_engineering_placement_22_advanced_ai_agents_visual_notes_md_64f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/advanced-ai-agents/visual-notes","title":"Visual Notes — Multi-Agent Orchestration","description":"One diagram, the full picture. This page is meant to be glanced at before reading the chapters, and again before interviews.","source":"@site/docs/courses/ai-engineering-placement/22-advanced-ai-agents/visual-notes.md","sourceDirName":"courses/ai-engineering-placement/22-advanced-ai-agents","slug":"/ai-engineering-placement/22-advanced-ai-agents/visual-notes","permalink":"/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/visual-notes","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":288,"frontMatter":{"id":"visual-notes","slug":"/ai-engineering-placement/22-advanced-ai-agents/visual-notes","title":"Visual Notes — Multi-Agent Orchestration","sidebar_label":"Visual Notes","sidebar_position":288},"sidebar":"placementSidebar","previous":{"title":"Agent-to-Agent (A2A) Protocol","permalink":"/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/15-a2a-protocol"},"next":{"title":"23 — Trending AI/ML Platforms & Tools (2026)","permalink":"/ai-engineering-journey/ai-engineering-placement/23-trending-aiml-platforms"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/22-advanced-ai-agents/visual-notes.md


const frontMatter = {
	id: 'visual-notes',
	slug: '/ai-engineering-placement/22-advanced-ai-agents/visual-notes',
	title: 'Visual Notes — Multi-Agent Orchestration',
	sidebar_label: 'Visual Notes',
	sidebar_position: 288
};
const contentTitle = 'Visual Notes — Multi-Agent Orchestration';

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
        id: "visual-notes--multi-agent-orchestration",
        children: "Visual Notes — Multi-Agent Orchestration"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "One diagram, the full picture. This page is meant to be glanced at before reading the chapters, and again before interviews."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Multi-Agent Orchestration",
        src: (__webpack_require__(19176)/* ["default"] */ .A) + "",
        width: "1000",
        height: "560"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "what-the-diagram-shows",
      children: "What the diagram shows"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Orchestrator"
        }), " — A planner decomposes the task and assigns subtasks to specialists."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Specialists"
        }), " — Researcher, coder and reviewer agents each own one capability, using tools and shared memory."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Governance"
        }), " — A tool registry, shared memory and guardrails keep the swarm safe and consistent."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "why-this-matters-for-placement",
      children: "Why this matters for placement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent orchestration is the cutting edge of hiring for 2026 — leading edge questions land here."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Being fluent across harness vs framework (MCP, CrewAI, AutoGen, OpenAI Agents SDK) shows depth."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "quick-revision",
      children: "Quick revision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prefer a single agent with tools over orchestration unless tasks truly parallelise."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MCP standardises how agents reach external tools/data."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Share state explicitly; hidden coupling between agents is the #1 failure mode."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Guardrails: budgets, allowlists and human-in-the-loop gates scale to teams."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate the whole loop (task completion), not just single LLM outputs."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "related-chapters",
      children: "Related chapters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/02-context-engineering",
          children: "Context engineering"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/04-mcp-protocol-tools",
          children: "MCP protocol tools"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/11-crewai-multi-agent",
          children: "CrewAI multi-agent"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/22-advanced-ai-agents/15-a2a-protocol",
          children: "A2A protocol"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-line answer for interviews:"
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"A planner delegates to specialist agents, each with tools, memory and guardrails.\""
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

/***/ 19176
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwMCA1NjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsbGVkYnk9IjIyX2FkdmFudi10aXRsZSAyMl9hZHZhbnYtZGVzYyI+DQo8dGl0bGUgaWQ9IjIyX2FkdmFudi10aXRsZSI+QWR2YW5jZWQgYWdlbnRzIOKAlCBvcmNoZXN0cmF0aW9uIGF0IHNjYWxlPC90aXRsZT4NCjxkZXNjIGlkPSIyMl9hZHZhbnYtZGVzYyI+QSBwbGFubmVyIG9yY2hlc3RyYXRvciBkZWxlZ2F0ZXMgdG8gc3BlY2lhbGlzdCBhZ2VudHMsIGVhY2ggd2l0aCB0b29scywgbWVtb3J5IGFuZCBndWFyZHJhaWxzLjwvZGVzYz4NCjxyZWN0IHdpZHRoPSIxMDAwIiBoZWlnaHQ9IjU2MCIgZmlsbD0iI2ZmZmZmZiIvPg0KPHBhdGggZD0iTSAyODAgMTc0IEggMzIwIiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4NCjxwYXRoIGQ9Ik0gNTYwIDE3NCBIIDYwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGY1ZDc1IiBzdHJva2Utd2lkdGg9IjEiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+DQo8cmVjdCB4PSI0MCIgeT0iOTYiIHdpZHRoPSIyNDAiIGhlaWdodD0iMzI4IiByeD0iOCIgZmlsbD0icmdiYSgyNiwyNywzNSwwLjAyKSIgc3Ryb2tlPSJyZ2JhKDI2LDI3LDM1LDAuMTApIiBzdHJva2Utd2lkdGg9IjAuOCIgc3Ryb2tlLWRhc2hhcnJheT0iNCA0Ii8+DQo8dGV4dCB4PSI1MiIgeT0iMTE2IiBmaWxsPSIjN2E4Mzk5IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMTRlbSI+T1JDSEVTVFJBVE9SPC90ZXh0Pg0KPHJlY3QgeD0iNTYiIHk9IjE0OCIgd2lkdGg9IjIwOCIgaGVpZ2h0PSI1MiIgcng9IjYiIGZpbGw9InJnYmEoNDYsMTMzLDg1LDAuMDgpIiBzdHJva2U9IiMyZTg1NTUiIHN0cm9rZS13aWR0aD0iMSIvPg0KPHRleHQgeD0iMTYwIiB5PSIxNzUiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlBsYW5uZXIgYWdlbnQ8L3RleHQ+DQo8dGV4dCB4PSIxNjAiIHk9IjE4OSIgZmlsbD0iIzJlODU1NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmRlY29tcG9zZSDCtyBhc3NpZ248L3RleHQ+DQo8cmVjdCB4PSI1NiIgeT0iMjE2IiB3aWR0aD0iMjA4IiBoZWlnaHQ9IjUyIiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4NCjx0ZXh0IHg9IjE2MCIgeT0iMjQzIiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Sb3V0ZXI8L3RleHQ+DQo8dGV4dCB4PSIxNjAiIHk9IjI1NyIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnNwZWNpYWxpc3QgY2hvaWNlPC90ZXh0Pg0KPHJlY3QgeD0iMzIwIiB5PSI5NiIgd2lkdGg9IjI0MCIgaGVpZ2h0PSIzMjgiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI2LDI3LDM1LDAuMDIpIiBzdHJva2U9InJnYmEoMjYsMjcsMzUsMC4xMCkiIHN0cm9rZS13aWR0aD0iMC44IiBzdHJva2UtZGFzaGFycmF5PSI0IDQiLz4NCjx0ZXh0IHg9IjMzMiIgeT0iMTE2IiBmaWxsPSIjN2E4Mzk5IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMTRlbSI+U1BFQ0lBTElTVFM8L3RleHQ+DQo8cmVjdCB4PSIzMzYiIHk9IjE0OCIgd2lkdGg9IjIwOCIgaGVpZ2h0PSI1MiIgcng9IjYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+DQo8dGV4dCB4PSI0NDAiIHk9IjE3NSIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UmVzZWFyY2hlciBhZ2VudDwvdGV4dD4NCjx0ZXh0IHg9IjQ0MCIgeT0iMTg5IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+c2VhcmNoIMK3IHJlYWQ8L3RleHQ+DQo8cmVjdCB4PSIzMzYiIHk9IjIxNiIgd2lkdGg9IjIwOCIgaGVpZ2h0PSI1MiIgcng9IjYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+DQo8dGV4dCB4PSI0NDAiIHk9IjI0MyIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q29kZXIgYWdlbnQ8L3RleHQ+DQo8dGV4dCB4PSI0NDAiIHk9IjI1NyIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPndyaXRlIMK3IHJ1bjwvdGV4dD4NCjxyZWN0IHg9IjMzNiIgeT0iMjg0IiB3aWR0aD0iMjA4IiBoZWlnaHQ9IjUyIiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4NCjx0ZXh0IHg9IjQ0MCIgeT0iMzExIiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5SZXZpZXdlciBhZ2VudDwvdGV4dD4NCjx0ZXh0IHg9IjQ0MCIgeT0iMzI1IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Y3JpdGlxdWUgwrcgZ2F0ZTwvdGV4dD4NCjxyZWN0IHg9IjYwMCIgeT0iOTYiIHdpZHRoPSIzNjAiIGhlaWdodD0iMzI4IiByeD0iOCIgZmlsbD0icmdiYSgyNiwyNywzNSwwLjAyKSIgc3Ryb2tlPSJyZ2JhKDI2LDI3LDM1LDAuMTApIiBzdHJva2Utd2lkdGg9IjAuOCIgc3Ryb2tlLWRhc2hhcnJheT0iNCA0Ii8+DQo8dGV4dCB4PSI2MTIiIHk9IjExNiIgZmlsbD0iIzdhODM5OSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjE0ZW0iPlRPT0xTICZhbXA7IE1FTU9SWTwvdGV4dD4NCjxyZWN0IHg9IjYxNiIgeT0iMTQ4IiB3aWR0aD0iMzI4IiBoZWlnaHQ9IjUyIiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4NCjx0ZXh0IHg9Ijc4MCIgeT0iMTc1IiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Ub29sIHJlZ2lzdHJ5PC90ZXh0Pg0KPHRleHQgeD0iNzgwIiB5PSIxODkiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5mdW5jdGlvbiBjYWxsaW5nPC90ZXh0Pg0KPHJlY3QgeD0iNjE2IiB5PSIyMTYiIHdpZHRoPSIzMjgiIGhlaWdodD0iNTIiIHJ4PSI2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTFiMjMiIHN0cm9rZS13aWR0aD0iMSIvPg0KPHRleHQgeD0iNzgwIiB5PSIyNDMiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlNoYXJlZCBtZW1vcnk8L3RleHQ+DQo8dGV4dCB4PSI3ODAiIHk9IjI1NyIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPm1lc3NhZ2VzIMK3IHN0YXRlPC90ZXh0Pg0KPHJlY3QgeD0iNjE2IiB5PSIyODQiIHdpZHRoPSIzMjgiIGhlaWdodD0iNTIiIHJ4PSI2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTFiMjMiIHN0cm9rZS13aWR0aD0iMSIvPg0KPHRleHQgeD0iNzgwIiB5PSIzMTEiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkd1YXJkcmFpbHM8L3RleHQ+DQo8dGV4dCB4PSI3ODAiIHk9IjMyNSIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmFsbG93bGlzdCDCtyBidWRnZXQ8L3RleHQ+DQo8cmVjdCB4PSIyNjAiIHk9IjE1MCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjE0IiBmaWxsPSIjZmZmZmZmIi8+DQo8dGV4dCB4PSIzMDAiIHk9IjE2MiIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmRlbGVnYXRlPC90ZXh0Pg0KPHJlY3QgeD0iNTQwIiB5PSIxNTAiIHdpZHRoPSI4MCIgaGVpZ2h0PSIxNCIgZmlsbD0iI2ZmZmZmZiIvPg0KPHRleHQgeD0iNTgwIiB5PSIxNjIiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj51c2U8L3RleHQ+DQo8dGV4dCB4PSIxMjAiIHk9IjQ0NCIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjE4ZW0iPklOVEVSVklFVyBBTkdMRTwvdGV4dD48dGV4dCB4PSIyMTIiIHk9IjQ0NCIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXN0eWxlPSJpdGFsaWMiPk11bHRpLWFnZW50IGludGVydmlld3M6IHdobyBkZWNpZGVzLCB3aG8gYWN0cywgYW5kIGhvdyBzdGF0ZSBpcyBzaGFyZWQuPC90ZXh0Pg0KPGxpbmUgeDE9IjEyMCIgeTE9IjUwMCIgeDI9Ijg4MCIgeTI9IjUwMCIgc3Ryb2tlPSJyZ2JhKDI2LDI3LDM1LDAuMTApIiBzdHJva2Utd2lkdGg9IjEiLz48dGV4dCB4PSIxMjAiIHk9IjUxNiIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjE0ZW0iPkxFR0VORDwvdGV4dD48cmVjdCB4PSIyMDAiIHk9IjUwNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0icmdiYSg0NiwxMzMsODUsMC4wOCkiIHN0cm9rZT0iIzJlODU1NSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHRleHQgeD0iMjI0IiB5PSI1MTYiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4wNmVtIj5BQ0NFTlQgPSBGT0NBTDwvdGV4dD48cmVjdCB4PSIzNjAiIHk9IjUwNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz48dGV4dCB4PSIzODQiIHk9IjUxNiIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjA2ZW0iPlBBUEVSID0gU1RFUDwvdGV4dD4NCjwvc3ZnPg==");
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