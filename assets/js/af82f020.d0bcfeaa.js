"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[94172],{

/***/ 55685
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_agent_engineer_agentic_ai_book_10_model_context_protocol_md_af8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-agent-engineer-agentic-ai-book-10-model-context-protocol-md-af8.json
const site_docs_courses_ai_agent_engineer_agentic_ai_book_10_model_context_protocol_md_af8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-agent-engineer/agentic-ai-book/10-model-context-protocol","title":"10-model-context-protocol","description":"Chapter 10: Model Context Protocol (MCP)","source":"@site/docs/courses/ai-agent-engineer/agentic-ai-book/10-model-context-protocol.md","sourceDirName":"courses/ai-agent-engineer/agentic-ai-book","slug":"/ai-agent-engineer/agentic-ai-book/10-model-context-protocol","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/10-model-context-protocol","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"id":"10-model-context-protocol","slug":"/ai-agent-engineer/agentic-ai-book/10-model-context-protocol","title":"10-model-context-protocol","sidebar_label":"10-model-context-protocol","sidebar_position":11},"sidebar":"course-ai-agent-engineer","previous":{"title":"09-multi-agent-systems","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/09-multi-agent-systems"},"next":{"title":"Part IV — Production","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/11-observability-debugging"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-agent-engineer/agentic-ai-book/10-model-context-protocol.md


const frontMatter = {
	id: '10-model-context-protocol',
	slug: '/ai-agent-engineer/agentic-ai-book/10-model-context-protocol',
	title: '10-model-context-protocol',
	sidebar_label: '10-model-context-protocol',
	sidebar_position: 11
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Chapter 10: Model Context Protocol (MCP)",
  "id": "chapter-10-model-context-protocol-mcp",
  "level": 2
}, {
  "value": "10.1 The Problem MCP Solves",
  "id": "101-the-problem-mcp-solves",
  "level": 3
}, {
  "value": "10.2 Client vs. Server",
  "id": "102-client-vs-server",
  "level": 3
}, {
  "value": "10.3 Building a Minimal MCP Server",
  "id": "103-building-a-minimal-mcp-server",
  "level": 3
}, {
  "value": "10.4 Connecting a Client",
  "id": "104-connecting-a-client",
  "level": 3
}, {
  "value": "10.5 Why This Matters for Your Career Positioning",
  "id": "105-why-this-matters-for-your-career-positioning",
  "level": 3
}, {
  "value": "10.6 Milestone Project for This Chapter",
  "id": "106-milestone-project-for-this-chapter",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-10-model-context-protocol-mcp",
      children: "Chapter 10: Model Context Protocol (MCP)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-the-problem-mcp-solves",
      children: "10.1 The Problem MCP Solves"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before MCP: every agent framework had its own bespoke way of defining and wiring up tools. If you built a tool for LangChain, it didn't work with AutoGen without rewriting. Every new AI client that wanted to talk to, say, your ApexERP database needed custom integration code written specifically for that client."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "MCP standardizes this."
      }), " You build one MCP ", (0,jsx_runtime.jsx)(_components.em, {
        children: "server"
      }), " that exposes your tools/data (\"resources\") once, using a standard protocol — and any MCP-compatible ", (0,jsx_runtime.jsx)(_components.em, {
        children: "client"
      }), " (Claude Desktop, this chat interface, your own LangGraph agent, another company's agent) can discover and use those tools without you writing custom glue code for each one."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-client-vs-server",
      children: "10.2 Client vs. Server"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MCP Server"
        }), " — exposes capabilities: tools (functions the agent can call), resources (data the agent can read), and prompts (reusable prompt templates). You build this once per system you want to make agent-accessible."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MCP Client"
        }), " — the agent-side piece that discovers what a server offers and calls it. Claude Desktop is a client. This very chat interface uses MCP-style tools under the hood. Your own LangGraph agent can also act as a client via an MCP client library."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "103-building-a-minimal-mcp-server",
      children: "10.3 Building a Minimal MCP Server"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from mcp.server.fastmcp import FastMCP\n\nmcp = FastMCP(\"ApexERP Tools\")\n\n@mcp.tool()\ndef get_order_status(order_id: str) -> dict:\n    \"\"\"Look up order status and expected delivery date by order ID.\"\"\"\n    return query_laravel_api(f\"/api/orders/{order_id}\")\n\n@mcp.tool()\ndef search_product_docs(query: str) -> list:\n    \"\"\"Semantic search over ApexERP product documentation.\"\"\"\n    return chroma_collection.query(query_texts=[query], n_results=5)[\"documents\"][0]\n\nif __name__ == \"__main__\":\n    mcp.run(transport=\"stdio\")  # or \"sse\" for network-accessible\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "That's your entire ApexERP order-lookup and docs-search capability now exposed as a standard MCP server — connectable from Claude Desktop, your own LangGraph agent, or any future MCP client, with zero per-client integration code."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "104-connecting-a-client",
      children: "10.4 Connecting a Client"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["From your own LangGraph agent, you'd use an MCP client library to discover the server's tools at runtime and fold them directly into your ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tools"
      }), " list, rather than hardcoding each tool definition by hand — meaning if you add a new tool to the MCP server later, your agent picks it up automatically without a code change on the agent side."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "105-why-this-matters-for-your-career-positioning",
      children: "10.5 Why This Matters for Your Career Positioning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\"I built an MCP server exposing our production ERP to AI agents\" is a directly resume-relevant, non-generic claim — it demonstrates exactly the skill AI Automation Engineer job listings describe (making internal systems agent-accessible), and it's still novel enough that most candidates won't have hands-on MCP experience yet."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "106-milestone-project-for-this-chapter",
      children: "10.6 Milestone Project for This Chapter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build an MCP server exposing 2-3 real tools from one of your Laravel systems (order lookup, ticket search, etc.), connect it to Claude Desktop, and verify you can ask Claude Desktop a question that requires it to discover and call your tool with zero custom integration code beyond the server itself."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "(Continued in Part IV — Production)"
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