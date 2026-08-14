"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[32930],{

/***/ 1282
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_agent_engineer_agentic_ai_book_05_the_agent_loop_react_md_161_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-agent-engineer-agentic-ai-book-05-the-agent-loop-react-md-161.json
const site_docs_courses_ai_agent_engineer_agentic_ai_book_05_the_agent_loop_react_md_161_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-agent-engineer/agentic-ai-book/05-the-agent-loop-react","title":"05-the-agent-loop-react","description":"Chapter 5: The Agent Loop (ReAct) — Hand-Built","source":"@site/docs/courses/ai-agent-engineer/agentic-ai-book/05-the-agent-loop-react.md","sourceDirName":"courses/ai-agent-engineer/agentic-ai-book","slug":"/ai-agent-engineer/agentic-ai-book/05-the-agent-loop-react","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/05-the-agent-loop-react","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"05-the-agent-loop-react","slug":"/ai-agent-engineer/agentic-ai-book/05-the-agent-loop-react","title":"05-the-agent-loop-react","sidebar_label":"05-the-agent-loop-react","sidebar_position":6},"sidebar":"course-ai-agent-engineer","previous":{"title":"Part II — Building Blocks","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/04-tool-calling"},"next":{"title":"06-memory","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/06-memory"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-agent-engineer/agentic-ai-book/05-the-agent-loop-react.md


const frontMatter = {
	id: '05-the-agent-loop-react',
	slug: '/ai-agent-engineer/agentic-ai-book/05-the-agent-loop-react',
	title: '05-the-agent-loop-react',
	sidebar_label: '05-the-agent-loop-react',
	sidebar_position: 6
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Chapter 5: The Agent Loop (ReAct) — Hand-Built",
  "id": "chapter-5-the-agent-loop-react--hand-built",
  "level": 2
}, {
  "value": "5.1 Why &quot;ReAct&quot;",
  "id": "51-why-react",
  "level": 3
}, {
  "value": "5.2 The Loop, In Full",
  "id": "52-the-loop-in-full",
  "level": 3
}, {
  "value": "5.3 Multi-Tool Reasoning Chains",
  "id": "53-multi-tool-reasoning-chains",
  "level": 3
}, {
  "value": "5.4 Error Handling in the Loop",
  "id": "54-error-handling-in-the-loop",
  "level": 3
}, {
  "value": "5.5 Milestone Project for This Chapter",
  "id": "55-milestone-project-for-this-chapter",
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
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-5-the-agent-loop-react--hand-built",
      children: "Chapter 5: The Agent Loop (ReAct) — Hand-Built"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-why-react",
      children: "5.1 Why \"ReAct\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ReAct (Reason + Act) is the foundational pattern: the model alternates between ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "reasoning"
      }), " (thinking about what to do) and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "acting"
      }), " (calling a tool), observing the result, and reasoning again — until it decides it has enough to answer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-the-loop-in-full",
      children: "5.2 The Loop, In Full"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import anthropic\n\nclient = anthropic.Anthropic()\n\ndef run_agent(user_message, tools, tool_executor, max_iterations=10):\n    messages = [{\"role\": \"user\", \"content\": user_message}]\n\n    for iteration in range(max_iterations):\n        response = client.messages.create(\n            model=\"claude-sonnet-4-6\",\n            max_tokens=1024,\n            tools=tools,\n            messages=messages\n        )\n\n        messages.append({\"role\": \"assistant\", \"content\": response.content})\n\n        # Stopping condition: no tool call means the model is done reasoning\n        if response.stop_reason != \"tool_use\":\n            final_text = \"\".join(b.text for b in response.content if b.type == \"text\")\n            return final_text\n\n        # Otherwise, execute every tool call the model requested this turn\n        tool_results = []\n        for block in response.content:\n            if block.type == \"tool_use\":\n                try:\n                    result = tool_executor(block.name, block.input)\n                except Exception as e:\n                    result = {\"error\": str(e)}\n\n                tool_results.append({\n                    \"type\": \"tool_result\",\n                    \"tool_use_id\": block.id,\n                    \"content\": str(result)\n                })\n\n        messages.append({\"role\": \"user\", \"content\": tool_results})\n\n    return \"Max iterations reached without a final answer.\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Walk through what this does, line by line, until it's fully intuitive:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start with the user's message."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Call the model."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the model didn't ask for a tool → it's done, return its text."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If it did ask for a tool → run it, append the result, loop back to step 2."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Hard-cap at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "max_iterations"
        }), " so a confused agent can't run forever."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This ~30-line function ", (0,jsx_runtime.jsx)(_components.em, {
        children: "is"
      }), " an agent. Everything LangGraph gives you later is convenience on top of this exact shape."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-multi-tool-reasoning-chains",
      children: "5.3 Multi-Tool Reasoning Chains"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With 3-4 tools available, the model will naturally chain calls across iterations of this loop: e.g., \"check order status\" → sees it's overdue → \"get customer contact\" → \"send notification.\" You don't program this sequence — it emerges from the model reasoning about the goal at each iteration, given what it's learned from previous tool results."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-error-handling-in-the-loop",
      children: "5.4 Error Handling in the Loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two categories of failure, handled differently:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tool execution errors"
        }), " (API down, invalid input) — feed the error back as a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tool_result"
        }), " so the model can adapt (retry with different params, try a different tool, or give up gracefully)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Loop-level errors"
        }), " (max iterations hit, model stuck repeating the same failing call) — these need a hard circuit breaker in your orchestration code, not something you can prompt your way out of. Track repeated identical tool calls and break the loop if the same call fails 2-3 times in a row."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def run_agent_with_repeat_guard(user_message, tools, tool_executor, max_iterations=10):\n    messages = [{\"role\": \"user\", \"content\": user_message}]\n    recent_calls = []\n\n    for iteration in range(max_iterations):\n        response = client.messages.create(\n            model=\"claude-sonnet-4-6\", max_tokens=1024, tools=tools, messages=messages\n        )\n        messages.append({\"role\": \"assistant\", \"content\": response.content})\n\n        if response.stop_reason != \"tool_use\":\n            return \"\".join(b.text for b in response.content if b.type == \"text\")\n\n        tool_results = []\n        for block in response.content:\n            if block.type == \"tool_use\":\n                call_signature = (block.name, str(block.input))\n                recent_calls.append(call_signature)\n                if recent_calls[-3:].count(call_signature) >= 3:\n                    return \"Agent stuck repeating the same call — stopping to avoid a loop.\"\n\n                try:\n                    result = tool_executor(block.name, block.input)\n                except Exception as e:\n                    result = {\"error\": str(e)}\n                tool_results.append({\"type\": \"tool_result\", \"tool_use_id\": block.id, \"content\": str(result)})\n\n        messages.append({\"role\": \"user\", \"content\": tool_results})\n\n    return \"Max iterations reached.\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "55-milestone-project-for-this-chapter",
      children: "5.5 Milestone Project for This Chapter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build the ApexERP-style agent: 3-4 tools (", (0,jsx_runtime.jsx)(_components.code, {
        children: "query_order"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "calculate_days_overdue"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "send_notification"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "search_docs"
      }), "), and give it the task: ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"Check if order #4521 is overdue and notify the customer if so.\""
      }), " Watch it autonomously chain 2-3 tool calls to complete the task, entirely in your own ~150-line loop, no framework."]
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