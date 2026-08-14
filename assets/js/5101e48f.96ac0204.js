"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[52957],{

/***/ 54042
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_agent_engineer_agentic_ai_book_02_how_llms_actually_work_md_510_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-agent-engineer-agentic-ai-book-02-how-llms-actually-work-md-510.json
const site_docs_courses_ai_agent_engineer_agentic_ai_book_02_how_llms_actually_work_md_510_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-agent-engineer/agentic-ai-book/02-how-llms-actually-work","title":"02-how-llms-actually-work","description":"Chapter 2: How LLMs Actually Work (Just Enough to Build Agents)","source":"@site/docs/courses/ai-agent-engineer/agentic-ai-book/02-how-llms-actually-work.md","sourceDirName":"courses/ai-agent-engineer/agentic-ai-book","slug":"/ai-agent-engineer/agentic-ai-book/02-how-llms-actually-work","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/02-how-llms-actually-work","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"02-how-llms-actually-work","slug":"/ai-agent-engineer/agentic-ai-book/02-how-llms-actually-work","title":"02-how-llms-actually-work","sidebar_label":"02-how-llms-actually-work","sidebar_position":3},"sidebar":"course-ai-agent-engineer","previous":{"title":"Part I — Foundations","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/01-what-is-agentic-ai"},"next":{"title":"03-prompting-for-agents","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/03-prompting-for-agents"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-agent-engineer/agentic-ai-book/02-how-llms-actually-work.md


const frontMatter = {
	id: '02-how-llms-actually-work',
	slug: '/ai-agent-engineer/agentic-ai-book/02-how-llms-actually-work',
	title: '02-how-llms-actually-work',
	sidebar_label: '02-how-llms-actually-work',
	sidebar_position: 3
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Chapter 2: How LLMs Actually Work (Just Enough to Build Agents)",
  "id": "chapter-2-how-llms-actually-work-just-enough-to-build-agents",
  "level": 2
}, {
  "value": "2.1 The Model Only Sees Text (Structured Text)",
  "id": "21-the-model-only-sees-text-structured-text",
  "level": 3
}, {
  "value": "2.2 The Context Window Is the Entire World",
  "id": "22-the-context-window-is-the-entire-world",
  "level": 3
}, {
  "value": "2.3 Determinism vs. Non-Determinism",
  "id": "23-determinism-vs-non-determinism",
  "level": 3
}, {
  "value": "2.4 What &quot;Reasoning&quot; Actually Means Here",
  "id": "24-what-reasoning-actually-means-here",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-2-how-llms-actually-work-just-enough-to-build-agents",
      children: "Chapter 2: How LLMs Actually Work (Just Enough to Build Agents)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You don't need to understand transformer internals to build agents, but you need to understand these specific mechanics or you'll fight the framework instead of using it."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-the-model-only-sees-text-structured-text",
      children: "2.1 The Model Only Sees Text (Structured Text)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every LLM API call — including tool calls — is fundamentally text in, text out. \"Tool calling\" is not a special mode where the model directly executes code. It's a convention: the API asks the model to produce output in a very specific structured format (JSON describing a function name + arguments), and ", (0,jsx_runtime.jsx)(_components.em, {
        children: "your code"
      }), " is what actually runs it."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This matters because it demystifies the whole system: the model has been trained to recognize \"here's a list of tools I could use\" in the system prompt, and to output a structured ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tool_use"
      }), " block instead of prose when it decides a tool is the right next step. Nothing more mystical than that."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-the-context-window-is-the-entire-world",
      children: "2.2 The Context Window Is the Entire World"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["At any point in an agent loop, the model knows ", (0,jsx_runtime.jsx)(_components.em, {
        children: "only"
      }), " what's in its context window: the system prompt, the conversation so far, and all tool results fed back in. It has no memory outside this — every single loop iteration, you're re-sending the entire history."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This has two big engineering implications:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cost scales with history length"
        }), " — a 20-turn agent loop resends the first 19 turns every single time (that's how the chat/completion API works — it's stateless per call). This is the primary cost driver in production agents."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Long agent runs need context management"
        }), " — summarizing or pruning old tool results, or the context window fills up and quality degrades."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-determinism-vs-non-determinism",
      children: "2.3 Determinism vs. Non-Determinism"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LLMs are (mostly) non-deterministic — same input can give different outputs across calls, especially at higher \"temperature\" settings. For agents, this means:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The exact same task might take a different path (different tool call order) on different runs."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["You cannot rely on 100% reproducible behavior — this is ", (0,jsx_runtime.jsx)(_components.em, {
          children: "why"
        }), " evaluation (Chapter 13) and guardrails (Chapter 12) matter so much more for agents than for traditional software."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For anything requiring strict determinism (e.g., financial calculations), don't ask the model to compute — give it a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "calculator"
        }), " tool and let deterministic code do the math."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-what-reasoning-actually-means-here",
      children: "2.4 What \"Reasoning\" Actually Means Here"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When people say an agent \"reasons,\" they mean: the model generates intermediate text (sometimes hidden, sometimes shown) that walks through its thinking before committing to an action. This is why prompting agents well (Chapter 3) matters so much — you're not just asking for an answer, you're shaping ", (0,jsx_runtime.jsx)(_components.em, {
        children: "how the model thinks through the decision"
      }), "."]
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