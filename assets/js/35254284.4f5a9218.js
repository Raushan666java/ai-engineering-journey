"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[36690],{

/***/ 55951
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_agent_engineer_agentic_ai_book_01_what_is_agentic_ai_md_352_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-agent-engineer-agentic-ai-book-01-what-is-agentic-ai-md-352.json
const site_docs_courses_ai_agent_engineer_agentic_ai_book_01_what_is_agentic_ai_md_352_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-agent-engineer/agentic-ai-book/01-what-is-agentic-ai","title":"Part I — Foundations","description":"Chapter 1: What Is Agentic AI, Really","source":"@site/docs/courses/ai-agent-engineer/agentic-ai-book/01-what-is-agentic-ai.md","sourceDirName":"courses/ai-agent-engineer/agentic-ai-book","slug":"/ai-agent-engineer/agentic-ai-book/01-what-is-agentic-ai","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/01-what-is-agentic-ai","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"01-what-is-agentic-ai","slug":"/ai-agent-engineer/agentic-ai-book/01-what-is-agentic-ai","title":"Part I — Foundations","sidebar_label":"Part I — Foundations","sidebar_position":2},"sidebar":"coursesSidebar","previous":{"title":"Agentic AI — The Complete Book","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book"},"next":{"title":"02-how-llms-actually-work","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/02-how-llms-actually-work"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-agent-engineer/agentic-ai-book/01-what-is-agentic-ai.md


const frontMatter = {
	id: '01-what-is-agentic-ai',
	slug: '/ai-agent-engineer/agentic-ai-book/01-what-is-agentic-ai',
	title: 'Part I — Foundations',
	sidebar_label: 'Part I — Foundations',
	sidebar_position: 2
};
const contentTitle = 'Part I — Foundations';

const assets = {

};



const toc = [{
  "value": "Chapter 1: What Is Agentic AI, Really",
  "id": "chapter-1-what-is-agentic-ai-really",
  "level": 2
}, {
  "value": "1.1 The One-Sentence Definition",
  "id": "11-the-one-sentence-definition",
  "level": 3
}, {
  "value": "1.2 Why This Matters Now",
  "id": "12-why-this-matters-now",
  "level": 3
}, {
  "value": "1.3 The Four Components",
  "id": "13-the-four-components",
  "level": 3
}, {
  "value": "1.4 A Spectrum, Not a Binary",
  "id": "14-a-spectrum-not-a-binary",
  "level": 3
}, {
  "value": "1.5 Your Existing Work, Reframed",
  "id": "15-your-existing-work-reframed",
  "level": 3
}, {
  "value": "1.6 Common Failure Modes (Know These Before You Build)",
  "id": "16-common-failure-modes-know-these-before-you-build",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "part-i--foundations",
        children: "Part I — Foundations"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-1-what-is-agentic-ai-really",
      children: "Chapter 1: What Is Agentic AI, Really"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-the-one-sentence-definition",
      children: "1.1 The One-Sentence Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "agent"
      }), " is a system where a language model doesn't just produce text — it decides what to ", (0,jsx_runtime.jsx)(_components.em, {
        children: "do"
      }), ", does it using tools, looks at what happened, and decides what to do next, in a loop, until a goal is reached or it gives up."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "That's the whole concept. Everything else in this book — LangGraph, MCP, multi-agent orchestration — is infrastructure built around that one loop."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-why-this-matters-now",
      children: "1.2 Why This Matters Now"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For years, \"using an LLM\" meant: send a prompt, get text back, done. That's a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "function"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "f(prompt) -> text"
      }), ". It's stateless, single-shot, and the model has no way to affect the world beyond the words it outputs."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An agent turns the LLM into the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "decision-making core of a program that can act"
      }), ". The model doesn't write code that gets run later — it decides, turn by turn, \"call this function with these arguments,\" and your program executes that call immediately and feeds the result back."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is the shift from \"LLM as autocomplete\" to \"LLM as the reasoning engine of a piece of software.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-the-four-components",
      children: "1.3 The Four Components"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every agentic system, no matter how fancy the framework, is built from four pieces:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1. The Model (the brain)"
      }), "\nDoes the reasoning: \"given what I know and what I can do, what's the next best action?\" This is Claude, GPT-4, Llama, etc. — whatever LLM you're calling."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Tools (the hands)"
      }), "\nFunctions the model can invoke: search the web, query a database, call an API, run code, send an email. The model doesn't execute these itself — it ", (0,jsx_runtime.jsx)(_components.em, {
        children: "requests"
      }), " them, and your code runs them."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Memory (the context)"
      }), "\nWhat the agent remembers:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Working memory"
        }), " — the current conversation/task history, held in the context window"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Long-term memory"
        }), " — persisted knowledge across sessions (a vector DB like your ChromaDB setup, or a plain database)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Control Flow / Orchestration (the loop)"
      }), "\nThe logic that decides: after the model responds, do we call a tool? Do we ask the model again? Do we stop? This is what frameworks like LangGraph formalize as a \"graph,\" but at its core it's just a loop with an if-statement."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-a-spectrum-not-a-binary",
      children: "1.4 A Spectrum, Not a Binary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\"Agentic\" isn't on/off — it's a spectrum of autonomy:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Fixed pipeline          Tool-augmented        ReAct loop           Planning agent        Multi-agent system\n(your n8n flows,        single-turn            (multi-turn           (writes its own       (agents delegate\n hardcoded steps)       (one tool call,        reasoning + tool      multi-step plan       to other agents,\n                        then answer)           calls, several        before acting)        each with its own\n                                                rounds)                                     tools/context)\n\n  Low autonomy  ────────────────────────────────────────────────────────────────►  High autonomy\n  High predictability                                                              Low predictability\n  Low cost per task                                                                High cost per task\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The engineering decision you make on every project: how far right on this spectrum do you actually need to go?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A huge number of \"agent\" projects fail not because the model is bad, but because someone built a 5-agent multi-agent system for a task that a single well-designed tool-augmented call would have handled better, cheaper, and more predictably. Default to the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "least"
      }), " autonomous design that solves the problem. Add autonomy only when the task genuinely has unpredictable branching that a fixed pipeline can't handle."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-your-existing-work-reframed",
      children: "1.5 Your Existing Work, Reframed"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You already have the ingredients:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Piece you have"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Agentic AI equivalent"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "n8n workflows"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Fixed pipeline — the ", (0,jsx_runtime.jsx)(_components.em, {
              children: "lowest"
            }), " autonomy rung"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FastAPI + ChromaDB RAG server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long-term memory + one retrieval \"tool\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MCP exploration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The protocol for exposing tools to agents"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Laravel APIs (ApexERP, etc.)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The actual \"world\" an agent could act on"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["What you're missing is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "loop"
      }), " — the part where the model itself decides, dynamically, which tool to call and when, rather than you hardcoding the sequence in n8n. That's what the rest of this book builds, step by step."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-common-failure-modes-know-these-before-you-build",
      children: "1.6 Common Failure Modes (Know These Before You Build)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Infinite loops"
        }), " — the agent keeps calling tools without ever deciding it's done. Always cap iterations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hallucinated tool calls"
        }), " — the model invents a tool that doesn't exist, or passes malformed arguments. Validate everything before executing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Context bloat"
        }), " — every tool result gets appended to history; a long-running agent's context window fills up with old data, degrading reasoning quality and burning tokens."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cost explosion"
        }), " — each loop iteration is a full LLM call. A 10-step agent task can cost 10x a single chat response."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Silent wrong actions"
        }), " — an agent confidently takes the wrong action (e.g., emails the wrong customer) because nothing forced a check. This is why guardrails (Chapter 12) aren't optional for anything touching real systems."]
      }), "\n"]
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