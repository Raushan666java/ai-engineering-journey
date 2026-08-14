"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[1047],{

/***/ 44732
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_agent_engineer_agentic_ai_book_03_prompting_for_agents_md_0ed_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-agent-engineer-agentic-ai-book-03-prompting-for-agents-md-0ed.json
const site_docs_courses_ai_agent_engineer_agentic_ai_book_03_prompting_for_agents_md_0ed_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-agent-engineer/agentic-ai-book/03-prompting-for-agents","title":"03-prompting-for-agents","description":"Chapter 3: Prompting for Agents vs. Prompting for Chat","source":"@site/docs/courses/ai-agent-engineer/agentic-ai-book/03-prompting-for-agents.md","sourceDirName":"courses/ai-agent-engineer/agentic-ai-book","slug":"/ai-agent-engineer/agentic-ai-book/03-prompting-for-agents","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/03-prompting-for-agents","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"03-prompting-for-agents","slug":"/ai-agent-engineer/agentic-ai-book/03-prompting-for-agents","title":"03-prompting-for-agents","sidebar_label":"03-prompting-for-agents","sidebar_position":4},"sidebar":"course-ai-agent-engineer","previous":{"title":"02-how-llms-actually-work","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/02-how-llms-actually-work"},"next":{"title":"Part II — Building Blocks","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/04-tool-calling"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-agent-engineer/agentic-ai-book/03-prompting-for-agents.md


const frontMatter = {
	id: '03-prompting-for-agents',
	slug: '/ai-agent-engineer/agentic-ai-book/03-prompting-for-agents',
	title: '03-prompting-for-agents',
	sidebar_label: '03-prompting-for-agents',
	sidebar_position: 4
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Chapter 3: Prompting for Agents vs. Prompting for Chat",
  "id": "chapter-3-prompting-for-agents-vs-prompting-for-chat",
  "level": 2
}, {
  "value": "3.1 The System Prompt Is Now an Operating Manual",
  "id": "31-the-system-prompt-is-now-an-operating-manual",
  "level": 3
}, {
  "value": "3.2 Describing Tools Well Is Half the Battle",
  "id": "32-describing-tools-well-is-half-the-battle",
  "level": 3
}, {
  "value": "3.3 Few-Shot Examples for Agent Behavior",
  "id": "33-few-shot-examples-for-agent-behavior",
  "level": 3
}, {
  "value": "3.4 Prompting for Self-Correction",
  "id": "34-prompting-for-self-correction",
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
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-3-prompting-for-agents-vs-prompting-for-chat",
      children: "Chapter 3: Prompting for Agents vs. Prompting for Chat"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-the-system-prompt-is-now-an-operating-manual",
      children: "3.1 The System Prompt Is Now an Operating Manual"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In a chat app, your system prompt sets tone and persona. In an agent, the system prompt is closer to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "onboarding documentation for a new employee"
      }), ": what tools exist, when to use each one, what NOT to do, how to handle errors, and when to ask for human help instead of guessing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A weak agent system prompt:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "You are a helpful assistant with access to tools. Use them when needed.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A production-grade agent system prompt has:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Role and scope"
        }), " — what this agent is for, and explicitly what it is ", (0,jsx_runtime.jsx)(_components.em, {
          children: "not"
        }), " for"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tool usage rules"
        }), " — \"Always check order status before offering a refund. Never call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "send_email"
        }), " more than once per conversation without explicit confirmation.\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Failure handling"
        }), " — \"If a tool call fails twice, stop and report the error instead of retrying indefinitely.\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Escalation criteria"
        }), " — \"If the customer is angry or the issue involves more than ₹5000, hand off to a human.\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Output format constraints"
        }), " — especially important when the agent's final answer feeds into another system (JSON schema, etc.)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-describing-tools-well-is-half-the-battle",
      children: "3.2 Describing Tools Well Is Half the Battle"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The model decides ", (0,jsx_runtime.jsx)(_components.em, {
        children: "when"
      }), " to call a tool almost entirely based on the tool's name and description. Vague tool descriptions cause two failure modes: the model never calls a tool it should, or it calls the wrong tool."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bad:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\"name\": \"get_data\", \"description\": \"Gets data\"}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Good:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"name\": \"get_order_status\",\n  \"description\": \"Look up the current status (pending, shipped, delivered, cancelled) and expected delivery date for a customer order, given the order ID. Use this whenever a customer asks 'where is my order' or asks about delivery timing. Do not use this for payment or refund questions — use get_payment_status instead.\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Notice: the description tells the model ", (0,jsx_runtime.jsx)(_components.em, {
        children: "when"
      }), " to use it and ", (0,jsx_runtime.jsx)(_components.em, {
        children: "when not to"
      }), " (disambiguating from a similar tool). This single habit fixes the majority of \"wrong tool called\" bugs in practice."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-few-shot-examples-for-agent-behavior",
      children: "3.3 Few-Shot Examples for Agent Behavior"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Just like chat prompting, showing 1-2 examples of a full tool-call sequence (user message → tool call → tool result → next tool call → final answer) dramatically improves reliability, especially for multi-step tasks. This is more important for agents than for plain chat because the \"shape\" of correct multi-step behavior is harder to specify in prose alone."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-prompting-for-self-correction",
      children: "3.4 Prompting for Self-Correction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A key agentic pattern: instead of assuming the first tool result is correct/sufficient, explicitly instruct the model to evaluate it:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "After retrieving search results, check whether they actually answer the\nuser's question. If not, rewrite your search query and try again\n(maximum 3 attempts) before telling the user you couldn't find an answer.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This single instruction is the seed of \"agentic RAG\" (Chapter 8) — the difference between naive retrieve-then-generate and a system that notices bad retrieval and fixes it."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "(Continued in Part II — Building Blocks)"
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