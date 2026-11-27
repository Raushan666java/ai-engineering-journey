"use strict";
(self["webpackChunksite"] = self["webpackChunksite"] || []).push([["74530"], {
68338(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_courses_ai_agent_engineer_agentic_ai_book_11_observability_debugging_md_3ac_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-agent-engineer-agentic-ai-book-11-observability-debugging-md-3ac.json
var site_docs_courses_ai_agent_engineer_agentic_ai_book_11_observability_debugging_md_3ac_namespaceObject = JSON.parse('{"id":"courses/ai-agent-engineer/agentic-ai-book/11-observability-debugging","title":"Observability & Debugging Agents","description":"A traditional bug: you can step through deterministic code and know exactly why line 47 produced the wrong output. An agent bug: the model made a","source":"@site/docs/courses/ai-agent-engineer/agentic-ai-book/11-observability-debugging.md","sourceDirName":"courses/ai-agent-engineer/agentic-ai-book","slug":"/ai-agent-engineer/agentic-ai-book/11-observability-debugging","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/11-observability-debugging","draft":false,"unlisted":false,"editUrl":"https://github.com/Raushan666java/ai-engineering-journey/tree/main/site/docs/docs/courses/ai-agent-engineer/agentic-ai-book/11-observability-debugging.md","tags":[],"version":"current","lastUpdatedAt":1795166609000,"sidebarPosition":12,"frontMatter":{"id":"11-observability-debugging","slug":"/ai-agent-engineer/agentic-ai-book/11-observability-debugging","title":"Observability & Debugging Agents","sidebar_label":"Observability & Debugging Agents","sidebar_position":12,"description":"A traditional bug: you can step through deterministic code and know exactly why line 47 produced the wrong output. An agent bug: the model made a"},"sidebar":"course-ai-agent-engineer","previous":{"title":"Model Context Protocol (MCP)","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/10-model-context-protocol"},"next":{"title":"Guardrails, Safety, and Cost Control","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/12-guardrails-safety-cost"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/courses/ai-agent-engineer/agentic-ai-book/11-observability-debugging.md


const frontMatter = {
	id: '11-observability-debugging',
	slug: '/ai-agent-engineer/agentic-ai-book/11-observability-debugging',
	title: 'Observability & Debugging Agents',
	sidebar_label: 'Observability & Debugging Agents',
	sidebar_position: 12,
	description: 'A traditional bug: you can step through deterministic code and know exactly why line 47 produced the wrong output. An agent bug: the model made a'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "11.1 Why This Is Harder Than Debugging Normal Code",
  "id": "111-why-this-is-harder-than-debugging-normal-code",
  "level": 2
}, {
  "value": "11.2 What to Log, At Minimum",
  "id": "112-what-to-log-at-minimum",
  "level": 2
}, {
  "value": "11.3 Tools for This",
  "id": "113-tools-for-this",
  "level": 2
}, {
  "value": "11.4 The Debugging Workflow in Practice",
  "id": "114-the-debugging-workflow-in-practice",
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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