"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[55742],{

/***/ 90121
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_agent_engineer_agentic_ai_book_17_glossary_reference_md_315_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-agent-engineer-agentic-ai-book-17-glossary-reference-md-315.json
const site_docs_courses_ai_agent_engineer_agentic_ai_book_17_glossary_reference_md_315_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-agent-engineer/agentic-ai-book/17-glossary-reference","title":"17-glossary-reference","description":"Chapter 17: Glossary & Reference","source":"@site/docs/courses/ai-agent-engineer/agentic-ai-book/17-glossary-reference.md","sourceDirName":"courses/ai-agent-engineer/agentic-ai-book","slug":"/ai-agent-engineer/agentic-ai-book/17-glossary-reference","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/17-glossary-reference","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"id":"17-glossary-reference","slug":"/ai-agent-engineer/agentic-ai-book/17-glossary-reference","title":"17-glossary-reference","sidebar_label":"17-glossary-reference","sidebar_position":18},"sidebar":"course-ai-agent-engineer","previous":{"title":"16-case-studies-failure-patterns","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/16-case-studies-failure-patterns"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-agent-engineer/agentic-ai-book/17-glossary-reference.md


const frontMatter = {
	id: '17-glossary-reference',
	slug: '/ai-agent-engineer/agentic-ai-book/17-glossary-reference',
	title: '17-glossary-reference',
	sidebar_label: '17-glossary-reference',
	sidebar_position: 18
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Chapter 17: Glossary &amp; Reference",
  "id": "chapter-17-glossary--reference",
  "level": 2
}, {
  "value": "Closing Note",
  "id": "closing-note",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    hr: "hr",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-17-glossary--reference",
      children: "Chapter 17: Glossary & Reference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent"
      }), " — A system where an LLM decides actions (tool calls) in a loop based on observed results, rather than producing a single one-shot response."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Agentic RAG"
      }), " — Retrieval-augmented generation where the decision to retrieve, what to retrieve, and whether retrieval was sufficient are all dynamic decisions made by the model, not a fixed pipeline step."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Checkpointing"
      }), " — Persisting an agent's state (usually via LangGraph) so a run can be paused and resumed, surviving restarts."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Context window"
      }), " — The total text (system prompt + conversation + tool results) the model sees on a given call; the entire \"world\" the model knows about at that moment."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Conditional edge"
      }), " (LangGraph) — A branch in the state graph, deciding which node runs next based on the current state."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Guardrail"
      }), " — Any validation, rate limit, or approval gate that prevents an agent from taking an unsafe or incorrect action, independent of what the model \"decided.\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Human-in-the-loop"
      }), " — A deliberate pause point where a human must approve an agent's proposed action before it executes, typically for irreversible actions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "LLM-as-judge"
      }), " — Using a separate LLM call to score/evaluate another LLM's (or agent's) output against defined criteria, used in evaluation pipelines."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "MCP (Model Context Protocol)"
      }), " — A standard protocol for exposing tools/resources (\"MCP servers\") so any compatible AI client can discover and use them without custom per-client integration."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Multi-agent system"
      }), " — An architecture where multiple distinct agents (each with their own tools/context/prompt) collaborate, typically via a supervisor/router or fixed pipeline pattern."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Prompt injection"
      }), " — An attack where instructions hidden in untrusted content (a webpage, document, email) the agent reads are crafted to hijack its behavior."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ReAct (Reason + Act)"
      }), " — The foundational agent pattern: alternating between reasoning about what to do and acting via tool calls, observing results, repeating until done."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "State graph"
      }), " (LangGraph) — A graph of nodes (functions) and edges (control flow) that a shared state object flows through, replacing a hand-rolled loop with an explicit, composable structure."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Subgraph"
      }), " — A compiled LangGraph graph used as a single node inside a larger parent graph; the mechanism for building multi-agent systems in LangGraph."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tool"
      }), " — A function the model can request be called (via a structured ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tool_use"
      }), " output); the model never executes it directly — your code does, then feeds the result back."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tool calling / function calling"
      }), " — The API mechanism by which a model, instead of (or alongside) producing text, outputs a structured request to invoke a named function with specific arguments."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trajectory evaluation"
      }), " — Checking whether an agent took the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "correct sequence of actions"
      }), " to reach an answer, as distinct from checking only the final answer's correctness."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Working memory"
      }), " — The current task's in-progress context (messages + tool results) held in the context window for the duration of a single run."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "closing-note",
      children: "Closing Note"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Everything in this book collapses to one idea, restated once more so it never gets lost under framework names: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "an agent is an LLM making decisions in a loop, using tools, checked by guardrails, and measured by evaluation."
      }), " LangGraph, MCP, multi-agent patterns — all of it is infrastructure in service of that one loop, built more carefully as the stakes go up. Build the hand-rolled loop first (Chapter 5) before trusting any framework's abstraction of it — everything else in this book will make more sense once that loop is intuition, not theory."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Good luck with the ApexERP capstone — it's a genuinely strong, differentiated portfolio piece for where you're positioning yourself in the market."
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