"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[26601],{

/***/ 5394
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_agent_engineer_agentic_ai_book_09_multi_agent_systems_md_593_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-agent-engineer-agentic-ai-book-09-multi-agent-systems-md-593.json
const site_docs_courses_ai_agent_engineer_agentic_ai_book_09_multi_agent_systems_md_593_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-agent-engineer/agentic-ai-book/09-multi-agent-systems","title":"09-multi-agent-systems","description":"Chapter 9: Multi-Agent Systems","source":"@site/docs/courses/ai-agent-engineer/agentic-ai-book/09-multi-agent-systems.md","sourceDirName":"courses/ai-agent-engineer/agentic-ai-book","slug":"/ai-agent-engineer/agentic-ai-book/09-multi-agent-systems","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/09-multi-agent-systems","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"id":"09-multi-agent-systems","slug":"/ai-agent-engineer/agentic-ai-book/09-multi-agent-systems","title":"09-multi-agent-systems","sidebar_label":"09-multi-agent-systems","sidebar_position":10},"sidebar":"course-ai-agent-engineer","previous":{"title":"08-agentic-rag","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/08-agentic-rag"},"next":{"title":"10-model-context-protocol","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/10-model-context-protocol"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-agent-engineer/agentic-ai-book/09-multi-agent-systems.md


const frontMatter = {
	id: '09-multi-agent-systems',
	slug: '/ai-agent-engineer/agentic-ai-book/09-multi-agent-systems',
	title: '09-multi-agent-systems',
	sidebar_label: '09-multi-agent-systems',
	sidebar_position: 10
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Chapter 9: Multi-Agent Systems",
  "id": "chapter-9-multi-agent-systems",
  "level": 2
}, {
  "value": "9.1 When You Actually Need This (And When You Don&#39;t)",
  "id": "91-when-you-actually-need-this-and-when-you-dont",
  "level": 3
}, {
  "value": "9.2 Core Patterns",
  "id": "92-core-patterns",
  "level": 3
}, {
  "value": "9.3 Building a Supervisor in LangGraph",
  "id": "93-building-a-supervisor-in-langgraph",
  "level": 3
}, {
  "value": "9.4 Framework Landscape (Survey, Not Deep-Dive)",
  "id": "94-framework-landscape-survey-not-deep-dive",
  "level": 3
}, {
  "value": "9.5 Milestone Project for This Chapter",
  "id": "95-milestone-project-for-this-chapter",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
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
      id: "chapter-9-multi-agent-systems",
      children: "Chapter 9: Multi-Agent Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-when-you-actually-need-this-and-when-you-dont",
      children: "9.1 When You Actually Need This (And When You Don't)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Default assumption: you don't need multi-agent."
      }), " A single well-designed agent with good tools, clear prompting, and a solid loop handles most real tasks. Multi-agent adds complexity — more moving parts, harder debugging, higher cost (every agent-to-agent handoff is more LLM calls) — and it's only worth that cost when sub-tasks genuinely need ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "different context, different tools, or different \"personas\""
      }), " that would otherwise conflict if crammed into one system prompt."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Good signal you need multi-agent: your single agent's system prompt has ballooned into \"if the question is about billing, act like X; if it's about tech support, act like Y; if it's about sales, act like Z\" — that's a sign the task wants to be split into specialists."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-core-patterns",
      children: "9.2 Core Patterns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Supervisor / Orchestrator"
      }), " — one \"router\" agent classifies the incoming task and delegates to the right specialist sub-agent, then (optionally) a final agent formats the combined response. This is the most common and most production-friendly pattern."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                    ┌─────────────┐\n   user query  ──►  │  Supervisor  │\n                    └──────┬──────┘\n                           │ classifies & routes\n              ┌────────────┼────────────┐\n              ▼            ▼            ▼\n        ┌──────────┐ ┌───────────┐ ┌──────────┐\n        │ Billing   │ │ Technical │ │  Sales   │\n        │ Agent     │ │ Agent     │ │  Agent   │\n        └──────────┘ └───────────┘ └──────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pipeline"
      }), " — agents run in a fixed sequence, each one's output feeding the next (e.g., Researcher → Writer → Fact-Checker). Less flexible than a supervisor pattern but more predictable and cheaper — good when the workflow genuinely is always the same sequence of stages."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Debate / Critique"
      }), " — two agents check each other's work (e.g., a \"generator\" and a \"critic\" that reviews the generator's output and sends it back for revision if flawed). Useful for higher-stakes generation tasks (legal, financial) where a single pass isn't trustworthy enough."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-building-a-supervisor-in-langgraph",
      children: "9.3 Building a Supervisor in LangGraph"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Since each \"agent\" is just a compiled subgraph, a supervisor is a parent graph that routes to subgraphs:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def supervisor_router(state):\n    classification = client.messages.create(\n        model=\"claude-sonnet-4-6\", max_tokens=20,\n        messages=[{\"role\": \"user\", \"content\": f\"Classify as BILLING, TECHNICAL, or SALES: {state['query']}\"}]\n    )\n    return classification.content[0].text.strip()\n\nparent_graph = StateGraph(SupervisorState)\nparent_graph.add_node(\"billing_agent\", billing_subgraph)\nparent_graph.add_node(\"technical_agent\", technical_subgraph)\nparent_graph.add_node(\"sales_agent\", sales_subgraph)\nparent_graph.add_conditional_edges(\n    \"router\", supervisor_router,\n    {\"BILLING\": \"billing_agent\", \"TECHNICAL\": \"technical_agent\", \"SALES\": \"sales_agent\"}\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each sub-agent (", (0,jsx_runtime.jsx)(_components.code, {
        children: "billing_subgraph"
      }), ", etc.) is built exactly like the single-agent graph from Chapter 7 — own tools, own system prompt, own scope. The supervisor never sees the sub-agents' internal tool calls, only their final output, which keeps the top-level context clean."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "94-framework-landscape-survey-not-deep-dive",
      children: "9.4 Framework Landscape (Survey, Not Deep-Dive)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CrewAI"
        }), " — role-based (\"Researcher,\" \"Writer\" as named roles with backstories); fastest to prototype, less flexible for complex control flow."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AutoGen"
        }), " (Microsoft) — conversation-driven, agents literally \"chat\" with each other in a group chat abstraction; good for exploratory/research-style multi-agent tasks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LangGraph subgraphs"
        }), " — most control, same mental model as everything you've already learned in Chapter 7, generally the better choice for production systems where you need checkpointing, human-in-the-loop, and precise control flow."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For your production use cases (ApexERP, etc.), stick with LangGraph subgraphs — the consistency with what you already know outweighs CrewAI's faster prototyping for anything you intend to actually deploy."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "95-milestone-project-for-this-chapter",
      children: "9.5 Milestone Project for This Chapter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build a 3-agent supervisor system for ApexERP support: a router that classifies incoming queries into billing/technical/sales, a billing sub-agent (queries payment DB), a technical sub-agent (uses your Chapter 8 agentic RAG), and confirm queries get routed to the correct specialist with visibly different tool usage per branch."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {})]
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