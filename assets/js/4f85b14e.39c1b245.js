"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[20390],{

/***/ 15045
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_agent_engineer_agentic_ai_book_04_tool_calling_md_4f8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-agent-engineer-agentic-ai-book-04-tool-calling-md-4f8.json
const site_docs_courses_ai_agent_engineer_agentic_ai_book_04_tool_calling_md_4f8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-agent-engineer/agentic-ai-book/04-tool-calling","title":"Part II — Building Blocks","description":"Chapter 4: Tool Calling From First Principles","source":"@site/docs/courses/ai-agent-engineer/agentic-ai-book/04-tool-calling.md","sourceDirName":"courses/ai-agent-engineer/agentic-ai-book","slug":"/ai-agent-engineer/agentic-ai-book/04-tool-calling","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/04-tool-calling","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"04-tool-calling","slug":"/ai-agent-engineer/agentic-ai-book/04-tool-calling","title":"Part II — Building Blocks","sidebar_label":"Part II — Building Blocks","sidebar_position":5},"sidebar":"course-ai-agent-engineer","previous":{"title":"03-prompting-for-agents","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/03-prompting-for-agents"},"next":{"title":"05-the-agent-loop-react","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/05-the-agent-loop-react"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-agent-engineer/agentic-ai-book/04-tool-calling.md


const frontMatter = {
	id: '04-tool-calling',
	slug: '/ai-agent-engineer/agentic-ai-book/04-tool-calling',
	title: 'Part II — Building Blocks',
	sidebar_label: 'Part II — Building Blocks',
	sidebar_position: 5
};
const contentTitle = 'Part II — Building Blocks';

const assets = {

};



const toc = [{
  "value": "Chapter 4: Tool Calling From First Principles",
  "id": "chapter-4-tool-calling-from-first-principles",
  "level": 2
}, {
  "value": "4.1 The Anatomy of a Tool Call",
  "id": "41-the-anatomy-of-a-tool-call",
  "level": 3
}, {
  "value": "4.2 Multiple Tools, Model Chooses",
  "id": "42-multiple-tools-model-chooses",
  "level": 3
}, {
  "value": "4.3 Parameter Validation — Don&#39;t Trust the Model Blindly",
  "id": "43-parameter-validation--dont-trust-the-model-blindly",
  "level": 3
}, {
  "value": "4.4 Milestone Project for This Chapter",
  "id": "44-milestone-project-for-this-chapter",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "part-ii--building-blocks",
        children: "Part II — Building Blocks"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-4-tool-calling-from-first-principles",
      children: "Chapter 4: Tool Calling From First Principles"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-the-anatomy-of-a-tool-call",
      children: "4.1 The Anatomy of a Tool Call"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every tool-calling API (Anthropic, OpenAI, etc.) follows the same basic shape:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1 — You define tools as JSON schemas"
      }), " and pass them alongside the messages:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "tools = [\n    {\n        \"name\": \"get_weather\",\n        \"description\": \"Get current weather for a city. Use this when the user asks about weather, temperature, or whether to carry an umbrella.\",\n        \"input_schema\": {\n            \"type\": \"object\",\n            \"properties\": {\n                \"city\": {\"type\": \"string\", \"description\": \"City name, e.g. 'Patna'\"}\n            },\n            \"required\": [\"city\"]\n        }\n    }\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2 — You send a message and get back either text OR a tool_use block:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import anthropic\n\nclient = anthropic.Anthropic()\n\nresponse = client.messages.create(\n    model=\"claude-sonnet-4-6\",\n    max_tokens=1024,\n    tools=tools,\n    messages=[{\"role\": \"user\", \"content\": \"Should I carry an umbrella in Patna today?\"}]\n)\n\n# response.content is a list of blocks. Could be text, could be tool_use, could be both.\nfor block in response.content:\n    print(block.type)  # \"text\" or \"tool_use\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3 — If it's a tool_use block, YOU execute the function:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "if response.stop_reason == \"tool_use\":\n    tool_call = next(b for b in response.content if b.type == \"tool_use\")\n    tool_name = tool_call.name          # \"get_weather\"\n    tool_input = tool_call.input        # {\"city\": \"Patna\"}\n    tool_id = tool_call.id\n\n    # This is YOUR code. The API never runs this — you decide what happens.\n    if tool_name == \"get_weather\":\n        result = actually_call_weather_api(tool_input[\"city\"])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4 — You send the result back to the model in a follow-up message:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "follow_up = client.messages.create(\n    model=\"claude-sonnet-4-6\",\n    max_tokens=1024,\n    tools=tools,\n    messages=[\n        {\"role\": \"user\", \"content\": \"Should I carry an umbrella in Patna today?\"},\n        {\"role\": \"assistant\", \"content\": response.content},  # the tool_use block\n        {\"role\": \"user\", \"content\": [\n            {\n                \"type\": \"tool_result\",\n                \"tool_use_id\": tool_id,\n                \"content\": str(result)\n            }\n        ]}\n    ]\n)\n\nprint(follow_up.content[0].text)  # the model's final natural-language answer\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "That's it. That's the entire mechanism. Every framework — LangChain, LangGraph, CrewAI — is a wrapper around exactly this four-step exchange, repeated in a loop."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-multiple-tools-model-chooses",
      children: "4.2 Multiple Tools, Model Chooses"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add more tools to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tools"
      }), " list, and the model picks which one(s) to call based on the descriptions. It can even request multiple tool calls in a single turn if the task needs it (e.g., \"check the weather AND check my calendar\")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "tools = [\n    {\"name\": \"get_weather\", \"description\": \"...\", \"input_schema\": {...}},\n    {\"name\": \"get_calendar_events\", \"description\": \"Get the user's events for a given date.\", \"input_schema\": {...}},\n    {\"name\": \"calculate\", \"description\": \"Evaluate a math expression. Use for any arithmetic instead of computing yourself.\", \"input_schema\": {...}},\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-parameter-validation--dont-trust-the-model-blindly",
      children: "4.3 Parameter Validation — Don't Trust the Model Blindly"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The model can and will occasionally produce malformed or nonsensical tool inputs (wrong types, missing required fields, out-of-range values). Always validate before executing:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def execute_tool(name, input_data):\n    if name == \"get_order_status\":\n        order_id = input_data.get(\"order_id\")\n        if not order_id or not str(order_id).isdigit():\n            return {\"error\": \"Invalid order_id — must be a numeric string.\"}\n        return query_order_status(order_id)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Feeding a clear error back (rather than crashing) lets the model self-correct on the next turn — this is a core agentic reliability pattern, not an edge case."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-milestone-project-for-this-chapter",
      children: "4.4 Milestone Project for This Chapter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build a single-tool weather+advice agent exactly as shown above, but print out every raw API response so you can literally watch the tool_use block appear, get executed, and get fed back. Do this before moving to Chapter 5 — seeing the raw JSON exchange is what makes the loop concept concrete instead of abstract."
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