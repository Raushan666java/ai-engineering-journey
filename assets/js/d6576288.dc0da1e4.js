"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[27365],{

/***/ 13917
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_27_ai_infrastructure_index_md_d65_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-27-ai-infrastructure-index-md-d65.json
const site_docs_courses_ai_engineering_placement_27_ai_infrastructure_index_md_d65_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/ai-infrastructure/index","title":"27 — AI Infrastructure & Optimization","description":"Overview","source":"@site/docs/courses/ai-engineering-placement/27-ai-infrastructure/index.md","sourceDirName":"courses/ai-engineering-placement/27-ai-infrastructure","slug":"/ai-engineering-placement/27-ai-infrastructure","permalink":"/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":305,"frontMatter":{"id":"index","slug":"/ai-engineering-placement/27-ai-infrastructure","title":"27 — AI Infrastructure & Optimization","sidebar_label":"27 — AI Infrastructure & Optimization","sidebar_position":305},"sidebar":"coursesSidebar","previous":{"title":"Building AI Roadmaps","permalink":"/ai-engineering-journey/ai-engineering-placement/26-ai-product-thinking/05-ai-roadmaps"},"next":{"title":"GPU Architecture for AI","permalink":"/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/01-gpu-architecture"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/27-ai-infrastructure/index.md


const frontMatter = {
	id: 'index',
	slug: '/ai-engineering-placement/27-ai-infrastructure',
	title: '27 — AI Infrastructure & Optimization',
	sidebar_label: '27 — AI Infrastructure & Optimization',
	sidebar_position: 305
};
const contentTitle = '27 — AI Infrastructure & Optimization';

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
        id: "27--ai-infrastructure--optimization",
        children: "27 — AI Infrastructure & Optimization"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Master the hardware and software stack that powers modern AI. Covers GPU architecture, CUDA programming, model compilation (TensorRT, ONNX), inference serving (vLLM, SGLang), model optimization (pruning, distillation, Flash Attention, KV Cache), speculative decoding, and distributed inference."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sub-chapters",
      children: "Sub-Chapters"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/01-gpu-architecture",
              children: "GPU Architecture"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NVIDIA GPU gen, CUDA cores, Tensor Cores, memory hierarchy, HBM, NVLink, PCIe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/02-cuda-programming",
              children: "CUDA Programming"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kernel launch, memory mgmt, grid/block/thread, CUDA streams, libraries (cuBLAS, cuDNN)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "03"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/03-model-compilation",
              children: "Model Compilation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TensorRT, ONNX, torch.compile, graph optimization, precision (FP8/FP16/INT4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "04"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/04-inference-serving",
              children: "AI Inference Serving"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vLLM, SGLang, TGI, Triton, continuous batching, PagedAttention, prefix caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "05"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/05-distributed-inference",
              children: "Distributed Inference"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tensor parallelism, pipeline parallelism, FSDP, DeepSpeed, NCCL, multi-node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "06"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/06-model-pruning",
              children: "Model Pruning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "unstructured vs structured, magnitude pruning, SparseGPT, Wanda, pruning at init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "07"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/07-knowledge-distillation",
              children: "Knowledge Distillation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "logit distillation, feature distillation, on-policy, off-policy, sequence-level, TinyLLM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "08"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/08-attention-kv-cache",
              children: "Attention & KV Cache Optimization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flash Attention 1/2/3, sparse attention, GQA, MQA, PagedAttention, KV cache quantization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "09"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/09-speculative-decoding",
              children: "Speculative Decoding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "draft models, Medusa, self-speculation, Eagle, parallel decoding, acceptance rate"
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
        href: "/ai-engineering-journey/ai-engineering-placement/09-deep-learning-pytorch",
        children: "Deep Learning"
      }), ". Understanding of transformer architecture and model training is required."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Start"
        }), ": ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/01-gpu-architecture",
          children: "01 — GPU Architecture →"
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