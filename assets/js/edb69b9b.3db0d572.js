"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[8336],{

/***/ 9704
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_loop_engineering_index_md_edb_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-loop-engineering-index-md-edb.json
const site_docs_courses_loop_engineering_index_md_edb_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/loop-engineering/index","title":"Loop Engineering — Build Production-Grade AI Agent Loops","description":"Course Overview","source":"@site/docs/courses/loop-engineering/index.md","sourceDirName":"courses/loop-engineering","slug":"/loop-engineering","permalink":"/ai-engineering-journey/loop-engineering","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"id":"index","slug":"/loop-engineering","title":"Loop Engineering — Build Production-Grade AI Agent Loops","sidebar_label":"Loop Engineering — Build Production-Grade AI Agent Loops","sidebar_position":11},"sidebar":"coursesSidebar","previous":{"title":"Chapter 10: Vector Calculus & Applications","permalink":"/ai-engineering-journey/engineering-mathematics/10-vector-calculus"},"next":{"title":"Chapter 1: Loop Foundations","permalink":"/ai-engineering-journey/loop-engineering/ch01-loop-foundations"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/loop-engineering/index.md


const frontMatter = {
	id: 'index',
	slug: '/loop-engineering',
	title: 'Loop Engineering — Build Production-Grade AI Agent Loops',
	sidebar_label: 'Loop Engineering — Build Production-Grade AI Agent Loops',
	sidebar_position: 11
};
const contentTitle = 'Loop Engineering — Build Production-Grade AI Agent Loops';

const assets = {

};



const toc = [{
  "value": "Course Overview",
  "id": "course-overview",
  "level": 2
}, {
  "value": "Prerequisites &amp; Requirements",
  "id": "prerequisites--requirements",
  "level": 2
}, {
  "value": "Syllabus",
  "id": "syllabus",
  "level": 2
}, {
  "value": "Study Path",
  "id": "study-path",
  "level": 2
}, {
  "value": "Learning Outcomes",
  "id": "learning-outcomes",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
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
        id: "loop-engineering--build-production-grade-ai-agent-loops",
        children: "Loop Engineering — Build Production-Grade AI Agent Loops"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "course-overview",
      children: "Course Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AI agents are rapidly evolving from single-shot chatbots to autonomous systems that plan, act, observe, and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "loop"
      }), ". The loop is the fundamental abstraction of agentic AI — the feedback mechanism that turns a single LLM call into a reasoning, self-correcting, production-grade system."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This 10-chapter course teaches you to design, build, and debug the loops that power modern AI agents. You will learn loop theory from first principles, implement production architectures (ReAct, Reflexion, supervisor orchestrators), add safety and cost controls, and build a complete coding agent as your capstone project."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end, you will think in loops — you will see every agent system as a set of interacting feedback cycles, each with its own stability, safety, and convergence properties."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites--requirements",
      children: "Prerequisites & Requirements"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TypeScript/JavaScript proficiency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All code examples are in TypeScript (runs on Bun)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Familiarity with LLM APIs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "You understand system prompts, tool calls, and streaming"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Basic async/await patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent loops are fundamentally async"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Docker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional — used in the capstone for sandbox execution"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "syllabus",
      children: "Syllabus"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Chapter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop Foundations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open vs closed loops, feedback types, stability, convergence metrics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent Loop Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ReAct, ReWoo, Reflexion, Tree-of-Thoughts — implement each pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human-in-the-Loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Propose-then-commit, approval gates, escalation policies, trust calibration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feedback Loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eval-driven loops, AI↔human review cycles, test-driven agent loops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-Improvement Loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constitutional AI, RLHF, DPO, STaR — self-critique and self-correction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production Loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy→monitor→detect drift→retrain, shadow/canary, cost governors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop Safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runaway loops, kill switches, circuit breakers, reward hacking prevention"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-Agent Loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supervisor orchestration, debate, negotiation, consensus, swarm patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop Tooling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Durable execution, checkpoint/restore, rate limiting, observability, chaos testing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capstone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build a production-grade terminal-native coding agent with full loop control"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "study-path",
      children: "Study Path"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended pace:"
      }), " One chapter per week. Each chapter includes:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Learning Objectives"
        }), " — what you will know after studying"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Theory"
        }), " — conceptual foundations with notation and diagrams"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Examples"
        }), " — compilable TypeScript implementations you can run"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Summary"
        }), " — key takeaways"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exercises"
        }), " — review questions, application problems, and one challenge"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "All code"
      }), " runs on ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://bun.sh",
        children: "Bun"
      }), ". Install it once and use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bun run <file>"
      }), " for every example."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-outcomes",
      children: "Learning Outcomes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this course you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design agent architectures using loop theory, not guesswork"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement ReAct, Reflexion, supervisor, and debate patterns in TypeScript"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add human approval gates, cost budgets, and kill switches to any agent"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build eval-driven improvement loops that make agents learn from mistakes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Debug runaway loops, reward hacking, and oscillation failures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy loop-safe agents to production with observability and cost controls"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build a complete coding agent with durable execution and multi-step recovery"
      }), "\n"]
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