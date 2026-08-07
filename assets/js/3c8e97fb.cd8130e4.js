"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[31496],{

/***/ 26854
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_agent_engineer_agentic_ai_book_16_case_studies_failure_patterns_md_3c8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-agent-engineer-agentic-ai-book-16-case-studies-failure-patterns-md-3c8.json
const site_docs_courses_ai_agent_engineer_agentic_ai_book_16_case_studies_failure_patterns_md_3c8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-agent-engineer/agentic-ai-book/16-case-studies-failure-patterns","title":"16-case-studies-failure-patterns","description":"Chapter 16: Case Studies & Failure Patterns","source":"@site/docs/courses/ai-agent-engineer/agentic-ai-book/16-case-studies-failure-patterns.md","sourceDirName":"courses/ai-agent-engineer/agentic-ai-book","slug":"/ai-agent-engineer/agentic-ai-book/16-case-studies-failure-patterns","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/16-case-studies-failure-patterns","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":17,"frontMatter":{"id":"16-case-studies-failure-patterns","slug":"/ai-agent-engineer/agentic-ai-book/16-case-studies-failure-patterns","title":"16-case-studies-failure-patterns","sidebar_label":"16-case-studies-failure-patterns","sidebar_position":17},"sidebar":"coursesSidebar","previous":{"title":"Part V — Applied","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/15-capstone-support-agent"},"next":{"title":"17-glossary-reference","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/17-glossary-reference"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-agent-engineer/agentic-ai-book/16-case-studies-failure-patterns.md


const frontMatter = {
	id: '16-case-studies-failure-patterns',
	slug: '/ai-agent-engineer/agentic-ai-book/16-case-studies-failure-patterns',
	title: '16-case-studies-failure-patterns',
	sidebar_label: '16-case-studies-failure-patterns',
	sidebar_position: 17
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Chapter 16: Case Studies &amp; Failure Patterns",
  "id": "chapter-16-case-studies--failure-patterns",
  "level": 2
}, {
  "value": "16.1 &quot;The Agent Keeps Calling the Same Tool&quot;",
  "id": "161-the-agent-keeps-calling-the-same-tool",
  "level": 3
}, {
  "value": "16.2 &quot;The Agent Called the Wrong Tool&quot;",
  "id": "162-the-agent-called-the-wrong-tool",
  "level": 3
}, {
  "value": "16.3 &quot;Works in Testing, Breaks in Production&quot;",
  "id": "163-works-in-testing-breaks-in-production",
  "level": 3
}, {
  "value": "16.4 &quot;Costs Are Way Higher Than Expected&quot;",
  "id": "164-costs-are-way-higher-than-expected",
  "level": 3
}, {
  "value": "16.5 &quot;The Multi-Agent System Is Slower and Worse Than a Single Agent Was&quot;",
  "id": "165-the-multi-agent-system-is-slower-and-worse-than-a-single-agent-was",
  "level": 3
}, {
  "value": "16.6 &quot;Agent Did Something It Shouldn&#39;t Have&quot;",
  "id": "166-agent-did-something-it-shouldnt-have",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-16-case-studies--failure-patterns",
      children: "Chapter 16: Case Studies & Failure Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Real patterns you will hit — recognizing them quickly saves days of confused debugging."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "161-the-agent-keeps-calling-the-same-tool",
      children: "16.1 \"The Agent Keeps Calling the Same Tool\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptom:"
      }), " Loop calls ", (0,jsx_runtime.jsx)(_components.code, {
        children: "search_product_docs"
      }), " five times with slightly different queries, never converging on an answer.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Usual cause:"
      }), " The tool's results are genuinely not answering the question (a real knowledge gap), but nothing tells the agent it's okay to give up.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix:"
      }), " Explicit instruction: \"If after 3 search attempts you still don't have enough information, tell the user you don't have an answer rather than continuing to search.\" Add the repeat-call guard from Chapter 5.4 as a hard backstop."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "162-the-agent-called-the-wrong-tool",
      children: "16.2 \"The Agent Called the Wrong Tool\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptom:"
      }), " User asks about a refund; agent calls ", (0,jsx_runtime.jsx)(_components.code, {
        children: "get_order_status"
      }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "get_payment_history"
      }), ".\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Usual cause:"
      }), " Overlapping/vague tool descriptions.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix:"
      }), " Tighten descriptions with explicit disambiguation (\"use X for Y, NOT for Z — use W for Z instead\"), per Chapter 3.2. Add a few-shot example showing the correct choice for an ambiguous-sounding query."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "163-works-in-testing-breaks-in-production",
      children: "16.3 \"Works in Testing, Breaks in Production\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Usual cause:"
      }), " Your test queries were cleaner/more well-formed than real user input. Real customers type vague, typo-ridden, multi-intent messages your test set never covered.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix:"
      }), " Once live, continuously sample real production transcripts into your evaluation test set (Chapter 13) — this is not a one-time build step, it's an ongoing process."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "164-costs-are-way-higher-than-expected",
      children: "16.4 \"Costs Are Way Higher Than Expected\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Usual cause:"
      }), " No iteration cap was hit in testing (short/easy test queries), but real queries trigger much longer chains, or context isn't being trimmed and grows unboundedly across a long conversation.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix:"
      }), " Log token usage per run (Chapter 11.2) from day one so cost anomalies are visible immediately, not discovered on a monthly bill."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "165-the-multi-agent-system-is-slower-and-worse-than-a-single-agent-was",
      children: "16.5 \"The Multi-Agent System Is Slower and Worse Than a Single Agent Was\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Usual cause:"
      }), " Task didn't actually need multi-agent — the overhead of routing + handoffs added latency and cost without adding correctness, because a single agent with well-scoped tools could have handled the branching just fine via its own reasoning.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix:"
      }), " Revisit Chapter 9.1 — this is the single most common over-engineering mistake in agentic systems. Default back to one agent unless you have a concrete reason (genuinely conflicting personas/contexts) that a single system prompt can't express."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "166-agent-did-something-it-shouldnt-have",
      children: "16.6 \"Agent Did Something It Shouldn't Have\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Usual cause:"
      }), " Missing guardrail — no validation layer, no human-approval gate on an irreversible action, or a prompt-injection vector via untrusted retrieved content.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix:"
      }), " This is a Chapter 12 gap. Treat this category of failure as a stop-ship issue, not a \"we'll fix it later\" — the entire point of guardrails is to catch exactly this before it reaches production."]
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