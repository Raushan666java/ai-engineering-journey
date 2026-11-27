"use strict";
(self["webpackChunksite"] = self["webpackChunksite"] || []).push([["70886"], {
24372(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_courses_ai_agent_engineer_agentic_ai_book_13_evaluation_md_703_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-agent-engineer-agentic-ai-book-13-evaluation-md-703.json
var site_docs_courses_ai_agent_engineer_agentic_ai_book_13_evaluation_md_703_namespaceObject = JSON.parse('{"id":"courses/ai-agent-engineer/agentic-ai-book/13-evaluation","title":"Evaluation — How to Know Your Agent Actually Works","description":"Non-determinism (Chapter 2.3) means an agent that worked correctly on your test run might behave differently on the next one, or after you tweak a prompt","source":"@site/docs/courses/ai-agent-engineer/agentic-ai-book/13-evaluation.md","sourceDirName":"courses/ai-agent-engineer/agentic-ai-book","slug":"/ai-agent-engineer/agentic-ai-book/13-evaluation","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/13-evaluation","draft":false,"unlisted":false,"editUrl":"https://github.com/Raushan666java/ai-engineering-journey/tree/main/site/docs/docs/courses/ai-agent-engineer/agentic-ai-book/13-evaluation.md","tags":[],"version":"current","lastUpdatedAt":1795166609000,"sidebarPosition":14,"frontMatter":{"id":"13-evaluation","slug":"/ai-agent-engineer/agentic-ai-book/13-evaluation","title":"Evaluation — How to Know Your Agent Actually Works","sidebar_label":"Evaluation — How to Know Your Agent Actually Works","sidebar_position":14,"description":"Non-determinism (Chapter 2.3) means an agent that worked correctly on your test run might behave differently on the next one, or after you tweak a prompt"},"sidebar":"course-ai-agent-engineer","previous":{"title":"Guardrails, Safety, and Cost Control","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/12-guardrails-safety-cost"},"next":{"title":"Deployment Architecture","permalink":"/ai-engineering-journey/ai-agent-engineer/agentic-ai-book/14-deployment-architecture"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/courses/ai-agent-engineer/agentic-ai-book/13-evaluation.md


const frontMatter = {
	id: '13-evaluation',
	slug: '/ai-agent-engineer/agentic-ai-book/13-evaluation',
	title: 'Evaluation — How to Know Your Agent Actually Works',
	sidebar_label: 'Evaluation — How to Know Your Agent Actually Works',
	sidebar_position: 14,
	description: 'Non-determinism (Chapter 2.3) means an agent that worked correctly on your test run might behave differently on the next one, or after you tweak a prompt'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "13.1 Why &quot;It Worked When I Tried It&quot; Isn&#39;t Enough",
  "id": "131-why-it-worked-when-i-tried-it-isnt-enough",
  "level": 2
}, {
  "value": "13.2 Build a Task Test Set",
  "id": "132-build-a-task-test-set",
  "level": 2
}, {
  "value": "13.3 Two Levels of Evaluation",
  "id": "133-two-levels-of-evaluation",
  "level": 2
}, {
  "value": "13.4 Run the Test Set on Every Meaningful Change",
  "id": "134-run-the-test-set-on-every-meaningful-change",
  "level": 2
}, {
  "value": "13.5 Milestone Project for This Chapter",
  "id": "135-milestone-project-for-this-chapter",
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
      id: "131-why-it-worked-when-i-tried-it-isnt-enough",
      children: "13.1 Why \"It Worked When I Tried It\" Isn't Enough"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Non-determinism (Chapter 2.3) means an agent that worked correctly on your test run might behave differently on the next one, or after you tweak a prompt. Without systematic evaluation, every prompt change is a guess about whether you made things better or worse."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "132-build-a-task-test-set",
      children: "13.2 Build a Task Test Set"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Collect (or write) 20-50 realistic tasks the agent should handle, each with a way to check success:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "test_cases = [\n    {\n        \"input\": \"Check if order 4521 is overdue and notify the customer if so\",\n        \"expected_tool_calls\": [\"get_order_status\", \"calculate_days_overdue\"],\n        \"success_criteria\": lambda output: \"overdue\" in output.lower() or \"on time\" in output.lower()\n    },\n    {\n        \"input\": \"What's your refund policy?\",\n        \"expected_tool_calls\": [\"search_product_docs\"],\n        \"success_criteria\": lambda output: len(output) > 20  # or an LLM-judge check\n    },\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "133-two-levels-of-evaluation",
      children: "13.3 Two Levels of Evaluation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trajectory evaluation"
        }), " — did the agent take the ", (0,jsx_runtime.jsx)(_components.em, {
          children: "right sequence of actions"
        }), " (called the correct tools, in a sensible order)? This catches \"right answer, wrong/wasteful process\" bugs (e.g., an agent that gets the correct final answer but only after 8 unnecessary tool calls, silently burning cost every time it runs in production)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Outcome evaluation"
        }), " — was the ", (0,jsx_runtime.jsx)(_components.em, {
          children: "final answer"
        }), " correct/acceptable? Simple checks (string matching, structured output validation) where possible; for open-ended text, use an ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "LLM-as-judge"
        }), " — a separate model call that scores the output against criteria."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def llm_judge(output, criteria):\n    judge_response = client.messages.create(\n        model=\"claude-sonnet-4-6\", max_tokens=10,\n        messages=[{\"role\": \"user\", \"content\":\n            f\"Output: {output}\\n\\nCriteria: {criteria}\\n\\nDoes the output satisfy the criteria? Answer YES or NO only.\"}]\n    )\n    return \"YES\" in judge_response.content[0].text\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "134-run-the-test-set-on-every-meaningful-change",
      children: "13.4 Run the Test Set on Every Meaningful Change"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Any time you change the system prompt, a tool description, or swap frameworks, rerun the full test set and compare pass rates before/after. This is the agentic equivalent of a unit test suite — treat it with the same seriousness, even though the underlying checks are fuzzier than traditional assertions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "135-milestone-project-for-this-chapter",
      children: "13.5 Milestone Project for This Chapter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a 15-20 case test set for your ApexERP support agent (mix of billing, technical, sales queries), with trajectory checks (right tools called) and an LLM-judge outcome check. Run it, note the pass rate, then deliberately worsen one tool description and rerun — confirm the test set catches the regression."
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