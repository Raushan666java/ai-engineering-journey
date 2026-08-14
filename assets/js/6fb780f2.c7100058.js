"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[51874],{

/***/ 56768
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_agent_engineer_agentic_ai_book_15_capstone_support_agent_md_6fb_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-agent-engineer-agentic-ai-book-15-capstone-support-agent-md-6fb.json
const site_docs_courses_ai_agent_engineer_agentic_ai_book_15_capstone_support_agent_md_6fb_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-agent-engineer/agentic-ai-book/15-capstone-support-agent","title":"Part V — Applied","description":"Chapter 15: Capstone — Building a Production Support Agent","source":"@site/docs/courses/ai-agent-engineer/agentic-ai-book/15-capstone-support-agent.md","sourceDirName":"courses/ai-agent-engineer/agentic-ai-book","slug":"/ai-agent-engineer/agentic-ai-book/15-capstone-support-agent","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/15-capstone-support-agent","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"id":"15-capstone-support-agent","slug":"/ai-agent-engineer/agentic-ai-book/15-capstone-support-agent","title":"Part V — Applied","sidebar_label":"Part V — Applied","sidebar_position":16},"sidebar":"course-ai-agent-engineer","previous":{"title":"14-deployment-architecture","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/14-deployment-architecture"},"next":{"title":"16-case-studies-failure-patterns","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/16-case-studies-failure-patterns"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-agent-engineer/agentic-ai-book/15-capstone-support-agent.md


const frontMatter = {
	id: '15-capstone-support-agent',
	slug: '/ai-agent-engineer/agentic-ai-book/15-capstone-support-agent',
	title: 'Part V — Applied',
	sidebar_label: 'Part V — Applied',
	sidebar_position: 16
};
const contentTitle = 'Part V — Applied';

const assets = {

};



const toc = [{
  "value": "Chapter 15: Capstone — Building a Production Support Agent",
  "id": "chapter-15-capstone--building-a-production-support-agent",
  "level": 2
}, {
  "value": "15.1 The Spec",
  "id": "151-the-spec",
  "level": 3
}, {
  "value": "15.2 Architecture",
  "id": "152-architecture",
  "level": 3
}, {
  "value": "15.3 Tools Needed",
  "id": "153-tools-needed",
  "level": 3
}, {
  "value": "15.4 Build Order (Map to Chapters)",
  "id": "154-build-order-map-to-chapters",
  "level": 3
}, {
  "value": "15.5 What &quot;Done&quot; Looks Like",
  "id": "155-what-done-looks-like",
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
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "part-v--applied",
        children: "Part V — Applied"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-15-capstone--building-a-production-support-agent",
      children: "Chapter 15: Capstone — Building a Production Support Agent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This chapter walks through building the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ApexERP Support Agent"
      }), " end to end, combining every concept from the book into one real system. Treat this as your reference build."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "151-the-spec",
      children: "15.1 The Spec"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal:"
      }), " An agent that handles incoming customer support queries for an ApexERP client — triaging the query, answering from docs/knowledge base when possible, checking real order/billing data when needed, and drafting (never auto-sending) any customer-facing message for human approval."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Explicitly out of scope (know your boundaries):"
      }), " the agent never directly modifies payment records, never sends a customer communication without approval, and hands off to a human immediately for anything involving anger/escalation keywords or amounts above a threshold."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "152-architecture",
      children: "15.2 Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Customer query\n      │\n      ▼\n┌─────────────┐\n│  Supervisor  │ ── classifies: BILLING / TECHNICAL / SALES / ESCALATE\n└──────┬──────┘\n       │\n   ┌───┴────┬─────────────┬──────────────┐\n   ▼         ▼             ▼              ▼\nBilling   Technical      Sales        Human handoff\nAgent     Agent          Agent        (escalation queue)\n   │         │             │\n   │         │ (agentic RAG over docs)\n   │         │\n   └─────────┴─────────────┘\n             │\n             ▼\n     Draft response\n             │\n             ▼\n   Human approval gate (interrupt_before)\n             │\n             ▼\n      Send via Laravel API\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "153-tools-needed",
      children: "15.3 Tools Needed"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Backing system"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Used by"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "get_order_status"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Laravel API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Billing agent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "get_payment_history"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Laravel API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Billing agent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "search_product_docs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ChromaDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Technical agent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "search_past_tickets"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ChromaDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Technical agent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "get_pricing_info"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Laravel API / static docs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sales agent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "draft_customer_message"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LLM call, no external effect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All agents"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "escalate_to_human"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Writes to a queue/DB table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supervisor"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "154-build-order-map-to-chapters",
      children: "15.4 Build Order (Map to Chapters)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chapter 4-5"
        }), ": Build each specialist as a standalone hand-rolled ReAct loop first, test independently."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chapter 7"
        }), ": Port each specialist to a LangGraph subgraph with checkpointing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chapter 8"
        }), ": Add agentic RAG (grading + retry) to the Technical agent specifically — this is the one most prone to weak retrieval on vague customer phrasing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chapter 9"
        }), ": Build the supervisor graph wiring all specialists together."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chapter 10"
        }), ": Expose ", (0,jsx_runtime.jsx)(_components.code, {
          children: "get_order_status"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "get_payment_history"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "get_pricing_info"
        }), " as an MCP server against your actual ApexERP Laravel backend — this makes the tools reusable beyond just this one agent (e.g., also usable from Claude Desktop for your own internal debugging)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chapter 12"
        }), ": Add input validation on every tool, the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "interrupt_before"
        }), " human-approval gate on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "send_customer_message"
        }), ", and escalation keyword detection."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chapter 11"
        }), ": Wire up Postgres logging for every run."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chapter 13"
        }), ": Build a 20-case test set covering all three categories + escalation triggers, run it before every deploy."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chapter 14"
        }), ": Deploy on your Hetzner VPS behind FastAPI, expose to n8n as an HTTP node for triggering from existing workflows (e.g., new-ticket-created webhook)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "155-what-done-looks-like",
      children: "15.5 What \"Done\" Looks Like"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A working system where: a real (or realistic test) support query comes in, gets correctly routed to the right specialist, retrieves accurate information (with self-correction if the first retrieval attempt is weak), drafts a response, and stops for human approval before anything reaches the customer — all logged, all testable, all deployed and callable from your existing n8n infrastructure."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "This is your portfolio piece."
      }), " Document it with an architecture diagram, a short case-study write-up (you've done this before for other projects), and be ready to walk through the design decisions — especially ", (0,jsx_runtime.jsx)(_components.em, {
        children: "why"
      }), " you chose supervisor-pattern multi-agent over a single monolithic agent, and ", (0,jsx_runtime.jsx)(_components.em, {
        children: "why"
      }), " the human-approval gate exists — in an interview. Interviewers for AI Automation Engineer roles care far more about ", (0,jsx_runtime.jsx)(_components.em, {
        children: "why you made these tradeoffs"
      }), " than about which framework you used."]
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