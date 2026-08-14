"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[92399],{

/***/ 85753
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_14_fine_tuning_peft_index_md_018_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-14-fine-tuning-peft-index-md-018.json
const site_docs_courses_ai_engineering_placement_14_fine_tuning_peft_index_md_018_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/fine-tuning-peft/index","title":"14 — Fine-Tuning & PEFT","description":"Overview","source":"@site/docs/courses/ai-engineering-placement/14-fine-tuning-peft/index.md","sourceDirName":"courses/ai-engineering-placement/14-fine-tuning-peft","slug":"/ai-engineering-placement/14-fine-tuning-peft","permalink":"/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":182,"frontMatter":{"id":"index","slug":"/ai-engineering-placement/14-fine-tuning-peft","title":"14 — Fine-Tuning & PEFT","sidebar_label":"14 — Fine-Tuning & PEFT","sidebar_position":182},"sidebar":"placementSidebar","previous":{"title":"Advanced Agent Patterns","permalink":"/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph/10-advanced-agent-patterns"},"next":{"title":"When to Fine-Tune","permalink":"/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/01-when-to-fine-tune"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/14-fine-tuning-peft/index.md


const frontMatter = {
	id: 'index',
	slug: '/ai-engineering-placement/14-fine-tuning-peft',
	title: '14 — Fine-Tuning & PEFT',
	sidebar_label: '14 — Fine-Tuning & PEFT',
	sidebar_position: 182
};
const contentTitle = '14 — Fine-Tuning & PEFT';

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
        id: "14--fine-tuning--peft",
        children: "14 — Fine-Tuning & PEFT"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Master parameter-efficient fine-tuning techniques including LoRA, QLoRA, and instruction tuning. Covers when to fine-tune, DPO for preference alignment, and evaluating fine-tuned models."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sub-chapters",
      children: "Sub-Chapters"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/01-when-to-fine-tune",
              children: "When to Fine-Tune"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FT vs RAG vs prompting, cost-benefit, data requirements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/02-full-fine-tuning",
              children: "Full Fine-Tuning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "supervised FT, training loop, loss curves, overfitting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "03"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/03-lora-theory",
              children: "LoRA Theory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "low-rank adaptation, rank selection, weight matrices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "04"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/04-lora-implementation",
              children: "LoRA Implementation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PEFT library, target modules, alpha, scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "05"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/05-qlora-and-quantization",
              children: "QLoRA & Quantization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4-bit NF4, double quantization, bitsandbytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "06"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/06-instruction-tuning",
              children: "Instruction Tuning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dataset formats, chat templates, multi-turn, system prompts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "07"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/07-dpo-and-preference-tuning",
              children: "DPO & Preference Tuning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RLHF, DPO loss, preference datasets, reward models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "08"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/08-evaluating-fine-tuned-models",
              children: "Evaluating Fine-Tuned Models"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "benchmarks, perplexity, human eval, task accuracy"
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
        href: "/ai-engineering-journey/ai-engineering-placement/13-ai-agents-langgraph",
        children: "AI Agents & LangGraph"
      }), ". Experience training deep learning models is strongly recommended."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Start"
        }), ": ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/14-fine-tuning-peft/01-when-to-fine-tune",
          children: "01 — When to Fine-Tune →"
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