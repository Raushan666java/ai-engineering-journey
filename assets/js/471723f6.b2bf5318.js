"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[48965],{

/***/ 14702
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_agent_engineer_agentic_ai_book_07_langgraph_deep_dive_md_471_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-agent-engineer-agentic-ai-book-07-langgraph-deep-dive-md-471.json
const site_docs_courses_ai_agent_engineer_agentic_ai_book_07_langgraph_deep_dive_md_471_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-agent-engineer/agentic-ai-book/07-langgraph-deep-dive","title":"Part III — Frameworks","description":"Chapter 7: LangGraph Deep Dive","source":"@site/docs/courses/ai-agent-engineer/agentic-ai-book/07-langgraph-deep-dive.md","sourceDirName":"courses/ai-agent-engineer/agentic-ai-book","slug":"/ai-agent-engineer/agentic-ai-book/07-langgraph-deep-dive","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/07-langgraph-deep-dive","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"id":"07-langgraph-deep-dive","slug":"/ai-agent-engineer/agentic-ai-book/07-langgraph-deep-dive","title":"Part III — Frameworks","sidebar_label":"Part III — Frameworks","sidebar_position":8},"sidebar":"coursesSidebar","previous":{"title":"06-memory","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/06-memory"},"next":{"title":"08-agentic-rag","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/08-agentic-rag"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-agent-engineer/agentic-ai-book/07-langgraph-deep-dive.md


const frontMatter = {
	id: '07-langgraph-deep-dive',
	slug: '/ai-agent-engineer/agentic-ai-book/07-langgraph-deep-dive',
	title: 'Part III — Frameworks',
	sidebar_label: 'Part III — Frameworks',
	sidebar_position: 8
};
const contentTitle = 'Part III — Frameworks';

const assets = {

};



const toc = [{
  "value": "Chapter 7: LangGraph Deep Dive",
  "id": "chapter-7-langgraph-deep-dive",
  "level": 2
}, {
  "value": "7.1 Why LangGraph Instead of Raw Loops",
  "id": "71-why-langgraph-instead-of-raw-loops",
  "level": 3
}, {
  "value": "7.2 Core Concepts",
  "id": "72-core-concepts",
  "level": 3
}, {
  "value": "7.3 Checkpointing — Pause and Resume",
  "id": "73-checkpointing--pause-and-resume",
  "level": 3
}, {
  "value": "7.4 Human-in-the-Loop",
  "id": "74-human-in-the-loop",
  "level": 3
}, {
  "value": "7.5 Subgraphs — The Bridge to Multi-Agent",
  "id": "75-subgraphs--the-bridge-to-multi-agent",
  "level": 3
}, {
  "value": "7.6 Milestone Project for This Chapter",
  "id": "76-milestone-project-for-this-chapter",
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
        id: "part-iii--frameworks",
        children: "Part III — Frameworks"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-7-langgraph-deep-dive",
      children: "Chapter 7: LangGraph Deep Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-why-langgraph-instead-of-raw-loops",
      children: "7.1 Why LangGraph Instead of Raw Loops"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Your Chapter 5 loop works great for linear ReAct. But real agents need:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Branching logic (different paths depending on what happened)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pausing and resuming (human approval steps, long-running tasks)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Composing multiple sub-agents together"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Persisting state to a database so a crash doesn't lose progress"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LangGraph formalizes your loop as a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "state graph"
      }), ": nodes are functions (including LLM calls), edges define what runs next, and a shared ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "state"
      }), " object flows through the whole graph — replacing your ", (0,jsx_runtime.jsx)(_components.code, {
        children: "messages"
      }), " list with something more structured and inspectable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-core-concepts",
      children: "7.2 Core Concepts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "State"
      }), " — a typed structure (usually a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TypedDict"
      }), " or Pydantic model) that flows through every node:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import TypedDict, Annotated\nfrom langgraph.graph.message import add_messages\n\nclass AgentState(TypedDict):\n    messages: Annotated[list, add_messages]  # auto-appends instead of overwriting\n    iteration_count: int\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Nodes"
      }), " — plain functions that take state, do something, return updated state:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def call_model(state: AgentState):\n    response = client.messages.create(\n        model=\"claude-sonnet-4-6\", max_tokens=1024, tools=tools,\n        messages=state[\"messages\"]\n    )\n    return {\"messages\": [response]}\n\ndef call_tools(state: AgentState):\n    last_message = state[\"messages\"][-1]\n    results = [execute_tool(b.name, b.input) for b in last_message.content if b.type == \"tool_use\"]\n    return {\"messages\": results}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Edges"
      }), " — including ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "conditional edges"
      }), ", which are the graph's version of your loop's if-statement:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def should_continue(state: AgentState):\n    last_message = state[\"messages\"][-1]\n    if last_message.stop_reason == \"tool_use\":\n        return \"tools\"\n    return \"end\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Building the graph:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from langgraph.graph import StateGraph, END\n\ngraph = StateGraph(AgentState)\ngraph.add_node(\"agent\", call_model)\ngraph.add_node(\"tools\", call_tools)\ngraph.set_entry_point(\"agent\")\ngraph.add_conditional_edges(\"agent\", should_continue, {\"tools\": \"tools\", \"end\": END})\ngraph.add_edge(\"tools\", \"agent\")  # after tools run, go back to the model\n\napp = graph.compile()\nresult = app.invoke({\"messages\": [{\"role\": \"user\", \"content\": \"Check order 4521\"}], \"iteration_count\": 0})\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Notice: this is ", (0,jsx_runtime.jsx)(_components.em, {
        children: "the exact same loop"
      }), " from Chapter 5, just expressed as a graph instead of a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "for"
      }), " loop. The value isn't different behavior — it's that the structure is now explicit, inspectable, and composable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-checkpointing--pause-and-resume",
      children: "7.3 Checkpointing — Pause and Resume"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is LangGraph's biggest practical win over a hand-rolled loop: built-in state persistence."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from langgraph.checkpoint.sqlite import SqliteSaver\n\ncheckpointer = SqliteSaver.from_conn_string(\"agent_state.db\")\napp = graph.compile(checkpointer=checkpointer)\n\nconfig = {\"configurable\": {\"thread_id\": \"customer-4521-conversation\"}}\nresult = app.invoke({\"messages\": [{\"role\": \"user\", \"content\": \"Check order 4521\"}]}, config=config)\n\n# ...later, even after a server restart...\nresult2 = app.invoke({\"messages\": [{\"role\": \"user\", \"content\": \"And notify them\"}]}, config=config)\n# The graph automatically reloads all prior state for this thread_id\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is directly relevant to anything you deploy on your Hetzner VPS: a support agent conversation can span hours, survive a server restart, and pick up exactly where it left off."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "74-human-in-the-loop",
      children: "7.4 Human-in-the-Loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For anything touching money, production data, or irreversible actions (a very real concern for ApexERP-style agents), you interrupt the graph before a risky node and wait for explicit approval:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "app = graph.compile(checkpointer=checkpointer, interrupt_before=[\"send_notification_node\"])\n\nresult = app.invoke(initial_state, config=config)\n# Graph pauses right before send_notification_node runs\n\n# ...show the pending action to a human, get approval...\n\nresult = app.invoke(None, config=config)  # resumes from where it paused\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This single pattern is what makes agentic systems safe to put in front of real customers/production data — never let an agent take an irreversible action without this kind of checkpoint, at least initially, until you've built enough evaluation confidence (Chapter 13) to trust it unsupervised for that action type."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "75-subgraphs--the-bridge-to-multi-agent",
      children: "7.5 Subgraphs — The Bridge to Multi-Agent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A compiled graph can itself be used as a node inside a bigger graph. This is how LangGraph does multi-agent systems (Chapter 9) — each \"agent\" is just a subgraph, and a parent graph routes between them."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "76-milestone-project-for-this-chapter",
      children: "7.6 Milestone Project for This Chapter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Rebuild your Chapter 5 ApexERP agent in LangGraph with: (1) SQLite checkpointing so a conversation survives a script restart, and (2) an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "interrupt_before"
      }), " on the notification-sending node, requiring manual approval (simulate this with an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "input()"
      }), " prompt for now) before the agent actually \"sends\" anything."]
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