"use strict";
(self["webpackChunksite"] = self["webpackChunksite"] || []).push([["84077"], {
12183(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_courses_ai_agent_engineer_agentic_ai_book_10_model_context_protocol_md_af8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-agent-engineer-agentic-ai-book-10-model-context-protocol-md-af8.json
var site_docs_courses_ai_agent_engineer_agentic_ai_book_10_model_context_protocol_md_af8_namespaceObject = JSON.parse('{"id":"courses/ai-agent-engineer/agentic-ai-book/10-model-context-protocol","title":"Model Context Protocol (MCP)","description":"Before MCP: every agent framework had its own bespoke way of defining and wiring up tools. If you built a tool for LangChain, it didn\'t work with AutoGen","source":"@site/docs/courses/ai-agent-engineer/agentic-ai-book/10-model-context-protocol.md","sourceDirName":"courses/ai-agent-engineer/agentic-ai-book","slug":"/ai-agent-engineer/agentic-ai-book/10-model-context-protocol","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/10-model-context-protocol","draft":false,"unlisted":false,"editUrl":"https://github.com/Raushan666java/ai-engineering-journey/tree/main/site/docs/docs/courses/ai-agent-engineer/agentic-ai-book/10-model-context-protocol.md","tags":[],"version":"current","lastUpdatedAt":1795166609000,"sidebarPosition":11,"frontMatter":{"id":"10-model-context-protocol","slug":"/ai-agent-engineer/agentic-ai-book/10-model-context-protocol","title":"Model Context Protocol (MCP)","sidebar_label":"Model Context Protocol (MCP)","sidebar_position":11,"description":"Before MCP: every agent framework had its own bespoke way of defining and wiring up tools. If you built a tool for LangChain, it didn\'t work with AutoGen"},"sidebar":"course-ai-agent-engineer","previous":{"title":"Multi-Agent Systems","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/09-multi-agent-systems"},"next":{"title":"Observability & Debugging Agents","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/11-observability-debugging"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/courses/ai-agent-engineer/agentic-ai-book/10-model-context-protocol.md


const frontMatter = {
	id: '10-model-context-protocol',
	slug: '/ai-agent-engineer/agentic-ai-book/10-model-context-protocol',
	title: 'Model Context Protocol (MCP)',
	sidebar_label: 'Model Context Protocol (MCP)',
	sidebar_position: 11,
	description: 'Before MCP: every agent framework had its own bespoke way of defining and wiring up tools. If you built a tool for LangChain, it didn\'t work with AutoGen'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "10.1 The Problem MCP Solves",
  "id": "101-the-problem-mcp-solves",
  "level": 2
}, {
  "value": "10.2 Client vs. Server",
  "id": "102-client-vs-server",
  "level": 2
}, {
  "value": "10.3 Building a Minimal MCP Server",
  "id": "103-building-a-minimal-mcp-server",
  "level": 2
}, {
  "value": "10.4 Connecting a Client",
  "id": "104-connecting-a-client",
  "level": 2
}, {
  "value": "10.5 Why This Matters for Your Career Positioning",
  "id": "105-why-this-matters-for-your-career-positioning",
  "level": 2
}, {
  "value": "10.6 Milestone Project for This Chapter",
  "id": "106-milestone-project-for-this-chapter",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "103-building-a-minimal-mcp-server",
      children: "10.3 Building a Minimal MCP Server"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from mcp.server.fastmcp import FastMCP\n\nmcp = FastMCP(\"ApexERP Tools\")\n\n@mcp.tool()\ndef get_order_status(order_id: str) -> dict:\n    \"\"\"Look up order status and expected delivery date by order ID.\"\"\"\n    return query_laravel_api(f\"/api/orders/{order_id}\")\n\n@mcp.tool()\ndef search_product_docs(query: str) -> list:\n    \"\"\"Semantic search over ApexERP product documentation.\"\"\"\n    return chroma_collection.query(query_texts=[query], n_results=5)[\"documents\"][0]\n\nif __name__ == \"__main__\":\n    mcp.run(transport=\"stdio\")  # or \"sse\" for network-accessible\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "That's your entire ApexERP order-lookup and docs-search capability now exposed as a standard MCP server — connectable from Claude Desktop, your own LangGraph agent, or any future MCP client, with zero per-client integration code."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "104-connecting-a-client",
      children: "10.4 Connecting a Client"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["From your own LangGraph agent, you'd use an MCP client library to discover the server's tools at runtime and fold them directly into your ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tools"
      }), " list, rather than hardcoding each tool definition by hand — meaning if you add a new tool to the MCP server later, your agent picks it up automatically without a code change on the agent side."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "105-why-this-matters-for-your-career-positioning",
      children: "10.5 Why This Matters for Your Career Positioning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\"I built an MCP server exposing our production ERP to AI agents\" is a directly resume-relevant, non-generic claim — it demonstrates exactly the skill AI Automation Engineer job listings describe (making internal systems agent-accessible), and it's still novel enough that most candidates won't have hands-on MCP experience yet."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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