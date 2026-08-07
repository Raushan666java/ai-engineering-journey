"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[90606],{

/***/ 376
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_agent_engineer_agentic_ai_book_14_deployment_architecture_md_8f0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-agent-engineer-agentic-ai-book-14-deployment-architecture-md-8f0.json
const site_docs_courses_ai_agent_engineer_agentic_ai_book_14_deployment_architecture_md_8f0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-agent-engineer/agentic-ai-book/14-deployment-architecture","title":"14-deployment-architecture","description":"Chapter 14: Deployment Architecture","source":"@site/docs/courses/ai-agent-engineer/agentic-ai-book/14-deployment-architecture.md","sourceDirName":"courses/ai-agent-engineer/agentic-ai-book","slug":"/ai-agent-engineer/agentic-ai-book/14-deployment-architecture","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/14-deployment-architecture","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"id":"14-deployment-architecture","slug":"/ai-agent-engineer/agentic-ai-book/14-deployment-architecture","title":"14-deployment-architecture","sidebar_label":"14-deployment-architecture","sidebar_position":15},"sidebar":"coursesSidebar","previous":{"title":"13-evaluation","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/13-evaluation"},"next":{"title":"Part V — Applied","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/15-capstone-support-agent"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-agent-engineer/agentic-ai-book/14-deployment-architecture.md


const frontMatter = {
	id: '14-deployment-architecture',
	slug: '/ai-agent-engineer/agentic-ai-book/14-deployment-architecture',
	title: '14-deployment-architecture',
	sidebar_label: '14-deployment-architecture',
	sidebar_position: 15
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Chapter 14: Deployment Architecture",
  "id": "chapter-14-deployment-architecture",
  "level": 2
}, {
  "value": "14.1 Wrapping the Agent in an API",
  "id": "141-wrapping-the-agent-in-an-api",
  "level": 3
}, {
  "value": "14.2 Where State Lives",
  "id": "142-where-state-lives",
  "level": 3
}, {
  "value": "14.3 Deployment on Your Existing Infra",
  "id": "143-deployment-on-your-existing-infra",
  "level": 3
}, {
  "value": "14.4 Triggering Agents From n8n",
  "id": "144-triggering-agents-from-n8n",
  "level": 3
}, {
  "value": "14.5 Streaming Responses",
  "id": "145-streaming-responses",
  "level": 3
}, {
  "value": "14.6 Milestone Project for This Chapter",
  "id": "146-milestone-project-for-this-chapter",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-14-deployment-architecture",
      children: "Chapter 14: Deployment Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "141-wrapping-the-agent-in-an-api",
      children: "14.1 Wrapping the Agent in an API"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You already know this half — FastAPI. The agent (whether a hand-rolled loop or a compiled LangGraph graph) sits behind a standard endpoint:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from fastapi import FastAPI\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\nclass AgentRequest(BaseModel):\n    message: str\n    thread_id: str\n\n@app.post(\"/agent/chat\")\nasync def chat(req: AgentRequest):\n    config = {\"configurable\": {\"thread_id\": req.thread_id}}\n    result = graph_app.invoke({\"messages\": [{\"role\": \"user\", \"content\": req.message}]}, config=config)\n    return {\"response\": result[\"messages\"][-1].content}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "142-where-state-lives",
      children: "14.2 Where State Lives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For anything beyond a toy demo, move the LangGraph checkpointer from SQLite to Postgres (", (0,jsx_runtime.jsx)(_components.code, {
        children: "langgraph-checkpoint-postgres"
      }), ") so multiple API workers/processes share consistent state — SQLite doesn't handle concurrent access well under real load."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "143-deployment-on-your-existing-infra",
      children: "14.3 Deployment on Your Existing Infra"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Your Hetzner VPS + Cloudflare Tunnel setup (already running your ChromaDB memory server) is a perfectly good home for this:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Cloudflare Tunnel ──► FastAPI (agent endpoint) ──► LangGraph app\n                                                  ├──► Postgres (checkpoints + logs)\n                                                  ├──► ChromaDB (RAG/long-term memory)\n                                                  └──► Laravel APIs (real actions)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "144-triggering-agents-from-n8n",
      children: "14.4 Triggering Agents From n8n"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Rather than replacing your n8n workflows, treat the deployed agent as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "one more node type"
      }), ": an HTTP Request node in n8n calling your ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/agent/chat"
      }), " endpoint. This lets you keep n8n for what it's good at (scheduled, fixed-sequence automation) while delegating the genuinely unpredictable/branching decision-making sub-tasks to the agent — a hybrid architecture that's honestly often ", (0,jsx_runtime.jsx)(_components.em, {
        children: "better"
      }), " than making everything \"agentic,\" since it keeps cost and unpredictability contained to only the parts of the workflow that truly need it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "145-streaming-responses",
      children: "14.5 Streaming Responses"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For anything user-facing, stream tokens/tool-call progress rather than waiting for the full multi-step loop to finish silently — LangGraph supports streaming intermediate node outputs, which you can forward over Server-Sent Events or WebSockets so the frontend can show \"checking order status... calculating... sending notification...\" as it happens, rather than a long silent wait."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "146-milestone-project-for-this-chapter",
      children: "14.6 Milestone Project for This Chapter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Deploy your Chapter 9 supervisor agent behind a FastAPI endpoint on your VPS, with Postgres-backed checkpointing, and wire it up as an HTTP node inside one real n8n workflow — confirming the hybrid fixed-pipeline + agent architecture actually works end to end."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "(Continued in Part V — Applied)"
      })
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