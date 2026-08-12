"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[78892],{

/***/ 87870
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_15_ai_evaluation_observability_index_md_28c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-15-ai-evaluation-observability-index-md-28c.json
const site_docs_courses_ai_engineering_placement_15_ai_evaluation_observability_index_md_28c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/ai-evaluation-observability/index","title":"15 — AI Evaluation & Observability","description":"Overview","source":"@site/docs/courses/ai-engineering-placement/15-ai-evaluation-observability/index.md","sourceDirName":"courses/ai-engineering-placement/15-ai-evaluation-observability","slug":"/ai-engineering-placement/15-ai-evaluation-observability","permalink":"/ai-engineering-journey/ai-engineering-placement/15-ai-evaluation-observability","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":189,"frontMatter":{"id":"index","slug":"/ai-engineering-placement/15-ai-evaluation-observability","title":"15 — AI Evaluation & Observability","sidebar_label":"15 — AI Evaluation & Observability","sidebar_position":189},"sidebar":"coursesSidebar","previous":{"title":"Evaluating Fine-Tuned Models","permalink":"/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/08-evaluating-fine-tuned-models"},"next":{"title":"Evaluation Metrics","permalink":"/ai-engineering-journey/ai-engineering-placement/15-ai-evaluation-observability/01-evaluation-metrics"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/15-ai-evaluation-observability/index.md


const frontMatter = {
	id: 'index',
	slug: '/ai-engineering-placement/15-ai-evaluation-observability',
	title: '15 — AI Evaluation & Observability',
	sidebar_label: '15 — AI Evaluation & Observability',
	sidebar_position: 189
};
const contentTitle = '15 — AI Evaluation & Observability';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Sub-Chapters",
  "id": "sub-chapters",
  "level": 2
}, {
  "value": "Learning Path",
  "id": "learning-path",
  "level": 2
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    h1: "h1",
    h2: "h2",
    header: "header",
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
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "15--ai-evaluation--observability",
        children: "15 — AI Evaluation & Observability"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Learn systematic approaches to evaluating AI systems and maintaining observability in production. Covers metrics, LLM-as-judge, evaluation datasets, tracing, monitoring, and incident response."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sub-chapters",
      children: "Sub-Chapters"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sub-Chapter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Topics"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Q&A"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/ai-engineering-placement/15-ai-evaluation-observability/01-evaluation-metrics",
              children: "Evaluation Metrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "accuracy, precision, recall, F1, RMSE, MAE, ROUGE, BLEU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/ai-engineering-placement/15-ai-evaluation-observability/02-llm-as-judge",
              children: "LLM-as-Judge"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bias, calibration, rubric scoring, pairwise comparison"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "03"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/ai-engineering-placement/15-ai-evaluation-observability/03-evaluation-datasets",
              children: "Evaluation Datasets"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "golden datasets, synthetic data, human annotation, versioning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "04"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/ai-engineering-placement/15-ai-evaluation-observability/04-observability-tools",
              children: "Observability Tools"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LangSmith, W&B, MLflow, Arize, whyLabs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "05"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/ai-engineering-placement/15-ai-evaluation-observability/05-tracing-and-monitoring",
              children: "Tracing & Monitoring"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "spans, traces, latency, throughput, cost tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "06"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/ai-engineering-placement/15-ai-evaluation-observability/06-alerting-and-incident-response",
              children: "Alerting & Incident Response"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "thresholds, drift alerts, runbooks, rollback, postmortem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-path",
      children: "Learning Path"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read sub-chapters in order"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each: read theory → run code → review Q&A → take quiz → do exercises"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mark complete when all sub-chapters done"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft",
        children: "Fine-Tuning & PEFT"
      }), ". Background in ML evaluation and production monitoring is helpful."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Start"
        }), ": ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/15-ai-evaluation-observability/01-evaluation-metrics",
          children: "01 — Evaluation Metrics →"
        })]
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