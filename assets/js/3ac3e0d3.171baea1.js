"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[11929],{

/***/ 438
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_agent_engineer_agentic_ai_book_11_observability_debugging_md_3ac_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-agent-engineer-agentic-ai-book-11-observability-debugging-md-3ac.json
const site_docs_courses_ai_agent_engineer_agentic_ai_book_11_observability_debugging_md_3ac_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-agent-engineer/agentic-ai-book/11-observability-debugging","title":"Part IV — Production","description":"Chapter 11: Observability & Debugging Agents","source":"@site/docs/courses/ai-agent-engineer/agentic-ai-book/11-observability-debugging.md","sourceDirName":"courses/ai-agent-engineer/agentic-ai-book","slug":"/ai-agent-engineer/agentic-ai-book/11-observability-debugging","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/11-observability-debugging","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"id":"11-observability-debugging","slug":"/ai-agent-engineer/agentic-ai-book/11-observability-debugging","title":"Part IV — Production","sidebar_label":"Part IV — Production","sidebar_position":12},"sidebar":"course-ai-agent-engineer","previous":{"title":"10-model-context-protocol","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/10-model-context-protocol"},"next":{"title":"12-guardrails-safety-cost","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/12-guardrails-safety-cost"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-agent-engineer/agentic-ai-book/11-observability-debugging.md


const frontMatter = {
	id: '11-observability-debugging',
	slug: '/ai-agent-engineer/agentic-ai-book/11-observability-debugging',
	title: 'Part IV — Production',
	sidebar_label: 'Part IV — Production',
	sidebar_position: 12
};
const contentTitle = 'Part IV — Production';

const assets = {

};



const toc = [{
  "value": "Chapter 11: Observability &amp; Debugging Agents",
  "id": "chapter-11-observability--debugging-agents",
  "level": 2
}, {
  "value": "11.1 Why This Is Harder Than Debugging Normal Code",
  "id": "111-why-this-is-harder-than-debugging-normal-code",
  "level": 3
}, {
  "value": "11.2 What to Log, At Minimum",
  "id": "112-what-to-log-at-minimum",
  "level": 3
}, {
  "value": "11.3 Tools for This",
  "id": "113-tools-for-this",
  "level": 3
}, {
  "value": "11.4 The Debugging Workflow in Practice",
  "id": "114-the-debugging-workflow-in-practice",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "part-iv--production",
        children: "Part IV — Production"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-11-observability--debugging-agents",
      children: "Chapter 11: Observability & Debugging Agents"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-why-this-is-harder-than-debugging-normal-code",
      children: "11.1 Why This Is Harder Than Debugging Normal Code"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A traditional bug: you can step through deterministic code and know exactly why line 47 produced the wrong output. An agent bug: the model made a ", (0,jsx_runtime.jsx)(_components.em, {
        children: "reasoning decision"
      }), " that led to a wrong tool call — the \"why\" lives inside a non-deterministic model's output, not in code you wrote. You can't set a breakpoint inside an LLM's reasoning."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The fix isn't debugging harder — it's ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "logging everything so you can reconstruct what happened after the fact."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-what-to-log-at-minimum",
      children: "11.2 What to Log, At Minimum"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For every agent run, persist:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The full input (user query, initial state)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Every LLM call: exact prompt sent, exact response received, token counts, latency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Every tool call: tool name, arguments, result, success/failure, latency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The final output"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A run ID / trace ID tying it all together"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import json, time, uuid\n\ndef logged_tool_executor(name, input_data, trace_id):\n    start = time.time()\n    try:\n        result = execute_tool(name, input_data)\n        status = \"success\"\n    except Exception as e:\n        result = {\"error\": str(e)}\n        status = \"error\"\n\n    log_entry = {\n        \"trace_id\": trace_id,\n        \"type\": \"tool_call\",\n        \"tool\": name,\n        \"input\": input_data,\n        \"output\": result,\n        \"status\": status,\n        \"latency_ms\": (time.time() - start) * 1000,\n        \"timestamp\": time.time()\n    }\n    persist_log(log_entry)  # write to Postgres, or even just a JSONL file initially\n    return result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "113-tools-for-this",
      children: "11.3 Tools for This"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LangSmith"
        }), " (LangChain's tracing product) — plugs directly into LangGraph, gives you a visual trace of every node, tool call, and LLM call per run with minimal setup. Good starting point."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Roll-your-own"
        }), " — a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "agent_logs"
        }), " table in Postgres (you already run this kind of infra) is entirely sufficient for a single-team production system, and gives you full control to build custom dashboards (e.g., \"which tool fails most often,\" \"average iterations per task type\")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "114-the-debugging-workflow-in-practice",
      children: "11.4 The Debugging Workflow in Practice"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When an agent produces a wrong result: pull the full trace by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "trace_id"
      }), ", read through the sequence of LLM reasoning + tool calls in order, and find the exact turn where it went wrong — usually one of: (a) a bad tool description caused a wrong tool choice, (b) a tool returned malformed/misleading data the model reasonably-but-wrongly trusted, or (c) the system prompt didn't cover this edge case. The fix is almost always a prompt or tool-description change, not a \"logic bug\" in the traditional sense."]
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