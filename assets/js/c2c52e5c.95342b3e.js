"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[33787],{

/***/ 15136
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_agent_engineer_agentic_ai_book_06_memory_md_c2c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-agent-engineer-agentic-ai-book-06-memory-md-c2c.json
const site_docs_courses_ai_agent_engineer_agentic_ai_book_06_memory_md_c2c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-agent-engineer/agentic-ai-book/06-memory","title":"06-memory","description":"Chapter 6: Memory — Short-Term, Long-Term, and Working Memory","source":"@site/docs/courses/ai-agent-engineer/agentic-ai-book/06-memory.md","sourceDirName":"courses/ai-agent-engineer/agentic-ai-book","slug":"/ai-agent-engineer/agentic-ai-book/06-memory","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/06-memory","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"id":"06-memory","slug":"/ai-agent-engineer/agentic-ai-book/06-memory","title":"06-memory","sidebar_label":"06-memory","sidebar_position":7},"sidebar":"coursesSidebar","previous":{"title":"05-the-agent-loop-react","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/05-the-agent-loop-react"},"next":{"title":"Part III — Frameworks","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/07-langgraph-deep-dive"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-agent-engineer/agentic-ai-book/06-memory.md


const frontMatter = {
	id: '06-memory',
	slug: '/ai-agent-engineer/agentic-ai-book/06-memory',
	title: '06-memory',
	sidebar_label: '06-memory',
	sidebar_position: 7
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Chapter 6: Memory — Short-Term, Long-Term, and Working Memory",
  "id": "chapter-6-memory--short-term-long-term-and-working-memory",
  "level": 2
}, {
  "value": "6.1 Three Kinds of Memory, Three Different Jobs",
  "id": "61-three-kinds-of-memory-three-different-jobs",
  "level": 3
}, {
  "value": "6.2 Working Memory Management — The Real Production Problem",
  "id": "62-working-memory-management--the-real-production-problem",
  "level": 3
}, {
  "value": "6.3 Long-Term Memory — Where Your ChromaDB Work Plugs In",
  "id": "63-long-term-memory--where-your-chromadb-work-plugs-in",
  "level": 3
}, {
  "value": "6.4 Memory as a Tool",
  "id": "64-memory-as-a-tool",
  "level": 3
}, {
  "value": "6.5 Milestone Project for This Chapter",
  "id": "65-milestone-project-for-this-chapter",
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
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-6-memory--short-term-long-term-and-working-memory",
      children: "Chapter 6: Memory — Short-Term, Long-Term, and Working Memory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-three-kinds-of-memory-three-different-jobs",
      children: "6.1 Three Kinds of Memory, Three Different Jobs"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What it is"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Where it lives"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Working memory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current task's context — messages + tool results in this run"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "messages"
            }), " list in RAM, sent every API call"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The loop from Chapter 5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Short-term / session memory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conversation history across multiple user turns in one session"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DB row keyed by session ID, reloaded each request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A chat session that remembers earlier in the conversation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Long-term memory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Knowledge that persists across sessions, potentially across users"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vector DB (your ChromaDB), relational DB, or a summary store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Remembers\" facts, documents, past resolutions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-working-memory-management--the-real-production-problem",
      children: "6.2 Working Memory Management — The Real Production Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "messages"
      }), " list in the loop from Chapter 5 grows every iteration. For a long-running agent (many tool calls, or a long conversation), this causes two problems: cost (you resend the whole history every call) and quality degradation (too much irrelevant old context confuses the model)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mitigations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Summarization"
        }), " — periodically replace older messages with an LLM-generated summary."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sliding window"
        }), " — keep only the last N turns in full, drop or summarize the rest."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Selective retention"
        }), " — keep tool ", (0,jsx_runtime.jsx)(_components.em, {
          children: "results"
        }), " that are still relevant to the current goal, drop ones that are resolved (e.g., once an order status has been checked and acted on, you don't need to keep re-sending the raw JSON in every future turn)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def trim_history(messages, max_messages=20):\n    if len(messages) <= max_messages:\n        return messages\n    # Keep the original user request + the most recent N turns\n    return [messages[0]] + messages[-(max_messages - 1):]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-long-term-memory--where-your-chromadb-work-plugs-in",
      children: "6.3 Long-Term Memory — Where Your ChromaDB Work Plugs In"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Long-term memory is usually implemented as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "retrieval"
      }), ": instead of stuffing everything into the context window, you store knowledge externally (vector DB for semantic search, relational DB for structured facts) and ", (0,jsx_runtime.jsx)(_components.em, {
        children: "retrieve"
      }), " only what's relevant to the current task, injecting it into working memory just for this turn."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is exactly your existing FastAPI + ChromaDB memory server — it already ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "is"
      }), " a long-term memory system. What Chapter 8 (Agentic RAG) adds is making the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "retrieval itself"
      }), " a decision the agent makes dynamically, rather than a step that always runs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-memory-as-a-tool",
      children: "6.4 Memory as a Tool"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The cleanest way to give an agent long-term memory is to expose it as tools, same as any other capability:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "tools = [\n    {\"name\": \"remember\", \"description\": \"Store a fact for later recall across sessions.\", \"input_schema\": {...}},\n    {\"name\": \"recall\", \"description\": \"Search stored memories relevant to the current topic.\", \"input_schema\": {...}},\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This lets the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "model"
      }), " decide when something is worth remembering and when it needs to look something up — rather than you hardcoding \"always retrieve\" or \"always save,\" which is often wasteful or wrong."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "65-milestone-project-for-this-chapter",
      children: "6.5 Milestone Project for This Chapter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
        children: "remember"
      }), " / ", (0,jsx_runtime.jsx)(_components.code, {
        children: "recall"
      }), " tools to your Chapter 5 agent, backed by your existing ChromaDB server. Give it a multi-session task (e.g., across two separate runs of the script) and confirm it can recall a fact stored in a previous run — this is your first working long-term-memory agent."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "(Continued in Part III — Frameworks)"
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