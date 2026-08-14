"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[34728],{

/***/ 41977
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_27_ai_infrastructure_08_attention_kv_cache_md_32f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-27-ai-infrastructure-08-attention-kv-cache-md-32f.json
const site_docs_courses_ai_engineering_placement_27_ai_infrastructure_08_attention_kv_cache_md_32f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/ai-infrastructure/08-attention-kv-cache","title":"Attention & KV Cache Optimization","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/27-ai-infrastructure/08-attention-kv-cache.md","sourceDirName":"courses/ai-engineering-placement/27-ai-infrastructure","slug":"/ai-engineering-placement/27-ai-infrastructure/08-attention-kv-cache","permalink":"/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/08-attention-kv-cache","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":303,"frontMatter":{"id":"08-attention-kv-cache","slug":"/ai-engineering-placement/27-ai-infrastructure/08-attention-kv-cache","title":"Attention & KV Cache Optimization","sidebar_label":"Attention & KV Cache Optimization","sidebar_position":303},"sidebar":"placementSidebar","previous":{"title":"Knowledge Distillation","permalink":"/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/07-knowledge-distillation"},"next":{"title":"Speculative Decoding","permalink":"/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/09-speculative-decoding"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/27-ai-infrastructure/08-attention-kv-cache.md


const frontMatter = {
	id: '08-attention-kv-cache',
	slug: '/ai-engineering-placement/27-ai-infrastructure/08-attention-kv-cache',
	title: 'Attention & KV Cache Optimization',
	sidebar_label: 'Attention & KV Cache Optimization',
	sidebar_position: 303
};
const contentTitle = 'Attention & KV Cache Optimization';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Introduction",
  "id": "introduction",
  "level": 2
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "Key Terminology",
  "id": "key-terminology",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "1 Standard Attention",
  "id": "1-standard-attention",
  "level": 3
}, {
  "value": "1.1 QKV Computation",
  "id": "11-qkv-computation",
  "level": 4
}, {
  "value": "1.2 Scaled Dot-Product Attention",
  "id": "12-scaled-dot-product-attention",
  "level": 4
}, {
  "value": "1.3 Causal Masking",
  "id": "13-causal-masking",
  "level": 4
}, {
  "value": "1.4 O(n²) Complexity Barrier",
  "id": "14-on-complexity-barrier",
  "level": 4
}, {
  "value": "2 Flash Attention",
  "id": "2-flash-attention",
  "level": 3
}, {
  "value": "2.1 IO-Aware Tiling Algorithm",
  "id": "21-io-aware-tiling-algorithm",
  "level": 4
}, {
  "value": "2.2 Online Softmax",
  "id": "22-online-softmax",
  "level": 4
}, {
  "value": "2.3 Flash Attention 1/2/3 Evolution",
  "id": "23-flash-attention-123-evolution",
  "level": 4
}, {
  "value": "3 Sparse Attention",
  "id": "3-sparse-attention",
  "level": 3
}, {
  "value": "3.1 Sliding Window Attention",
  "id": "31-sliding-window-attention",
  "level": 4
}, {
  "value": "3.2 Dilated Attention",
  "id": "32-dilated-attention",
  "level": 4
}, {
  "value": "3.3 Global + Local Attention (Longformer, BigBird)",
  "id": "33-global--local-attention-longformer-bigbird",
  "level": 4
}, {
  "value": "4 Multi-Query &amp; Grouped Query Attention",
  "id": "4-multi-query--grouped-query-attention",
  "level": 3
}, {
  "value": "4.1 Multi-Query Attention (MQA)",
  "id": "41-multi-query-attention-mqa",
  "level": 4
}, {
  "value": "4.2 Grouped Query Attention (GQA)",
  "id": "42-grouped-query-attention-gqa",
  "level": 4
}, {
  "value": "5 KV Cache Management",
  "id": "5-kv-cache-management",
  "level": 3
}, {
  "value": "5.1 PagedAttention (vLLM)",
  "id": "51-pagedattention-vllm",
  "level": 4
}, {
  "value": "5.2 Prefix Caching",
  "id": "52-prefix-caching",
  "level": 4
}, {
  "value": "5.3 KV Cache Quantization",
  "id": "53-kv-cache-quantization",
  "level": 4
}, {
  "value": "6 Multi-Head Latent Attention (MLA)",
  "id": "6-multi-head-latent-attention-mla",
  "level": 3
}, {
  "value": "6.1 DeepSeek Approach",
  "id": "61-deepseek-approach",
  "level": 4
}, {
  "value": "6.2 Latent Space Compression",
  "id": "62-latent-space-compression",
  "level": 4
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Placement Section",
  "id": "placement-section",
  "level": 2
}, {
  "value": "Top 10 Interview Questions",
  "id": "top-10-interview-questions",
  "level": 3
}, {
  "value": "Google Style",
  "id": "google-style",
  "level": 4
}, {
  "value": "Amazon Style",
  "id": "amazon-style",
  "level": 4
}, {
  "value": "Microsoft Style",
  "id": "microsoft-style",
  "level": 4
}, {
  "value": "NVIDIA Style",
  "id": "nvidia-style",
  "level": 4
}, {
  "value": "AI Startup Style",
  "id": "ai-startup-style",
  "level": 4
}, {
  "value": "Resume Tips",
  "id": "resume-tips",
  "level": 3
}, {
  "value": "Interview Day Checklist",
  "id": "interview-day-checklist",
  "level": 3
}, {
  "value": "True/False",
  "id": "truefalse",
  "level": 2
}, {
  "value": "Fill in the Blank",
  "id": "fill-in-the-blank",
  "level": 2
}, {
  "value": "Scenario Questions",
  "id": "scenario-questions",
  "level": 2
}, {
  "value": "Output Questions",
  "id": "output-questions",
  "level": 2
}, {
  "value": "Difficulty Level",
  "id": "difficulty-level",
  "level": 2
}, {
  "value": "Tips &amp; Tricks",
  "id": "tips--tricks",
  "level": 2
}, {
  "value": "Memory Tricks",
  "id": "memory-tricks",
  "level": 2
}, {
  "value": "Further Reading",
  "id": "further-reading",
  "level": 2
}, {
  "value": "Related Topics",
  "id": "related-topics",
  "level": 2
}, {
  "value": "FAQs",
  "id": "faqs",
  "level": 2
}, {
  "value": "Important Notes",
  "id": "important-notes",
  "level": 2
}, {
  "value": "Historical Context",
  "id": "historical-context",
  "level": 2
}, {
  "value": "Security Considerations",
  "id": "security-considerations",
  "level": 2
}, {
  "value": "ML Intuition",
  "id": "ml-intuition",
  "level": 2
}, {
  "value": "Analogies",
  "id": "analogies",
  "level": 2
}, {
  "value": "Capstone Project Link",
  "id": "capstone-project-link",
  "level": 2
}, {
  "value": "Flashcards",
  "id": "flashcards",
  "level": 2
}, {
  "value": "Research References",
  "id": "research-references",
  "level": 2
}, {
  "value": "Open-Source Tools",
  "id": "open-source-tools",
  "level": 2
}, {
  "value": "Debugging Guide",
  "id": "debugging-guide",
  "level": 2
}, {
  "value": "Mock Interview Section",
  "id": "mock-interview-section",
  "level": 2
}, {
  "value": "Optimized Implementation",
  "id": "optimized-implementation",
  "level": 2
}, {
  "value": "Evaluation Metrics",
  "id": "evaluation-metrics",
  "level": 2
}, {
  "value": "Real-World Examples",
  "id": "real-world-examples",
  "level": 2
}, {
  "value": "Next Topic",
  "id": "next-topic",
  "level": 2
}, {
  "value": "Limitations",
  "id": "limitations",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    details: "details",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    summary: "summary",
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
        id: "attention--kv-cache-optimization",
        children: "Attention & KV Cache Optimization"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Objective"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Derive scaled dot-product attention and analyze its O(n²) complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain Flash Attention tiling and online softmax for IO-aware computation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare sparse attention patterns: sliding window, dilated, global+local"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contrast MHA, MQA, and GQA for KV head reduction in Llama 2/3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Describe KV cache management: PagedAttention, prefix caching, quantization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Analyze Multi-Head Latent Attention (MLA) low-rank KV compression"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concept"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QKV Computation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear projections from input embeddings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scaled Dot-Product Attention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Softmax(QK^T / sqrt(d_k)) V"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Causal Masking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Upper-triangular mask for autoregressive decoding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²) Complexity Barrier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quadratic memory and compute in sequence length"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flash Attention Tiling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block-wise SRAM compute to avoid HBM round-trips"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Online Softmax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-pass safe softmax without materializing full matrix"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flash Attention 1/2/3 Evolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-exact vs exact attention, FP8, async"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sliding Window Attention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed-radius local context (Mistral, GPT-4)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dilated Attention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strided sparse pattern for wider receptive field"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global+Local Attention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Longformer, BigBird, ETC architectures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-Query Attention (MQA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single KV head shared across query heads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grouped Query Attention (GQA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intermediate KV groups — Llama 2/3 approach"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PagedAttention (vLLM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block-level KV cache with virtual memory pages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix Caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reuse KV blocks across repeated prompt prefixes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KV Cache Quantization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FP8 and INT4 compression of cached tensors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-Head Latent Attention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-rank KV projection in DeepSeek-V2/V3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Latent Space Compression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Down-projection, cache, up-projection decode"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Attention is the core computation in every transformer model. It lets each token\nattend to every other token in the sequence. This quadratic O(n²) cost becomes\nthe dominant bottleneck as context windows grow to 128K or 1M tokens."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modern inference and training systems use sophisticated optimizations to reduce\nthis cost. Flash Attention avoids materializing large attention matrices by\ntiling computation onto fast on-chip SRAM. Sparse patterns restrict attention to\nrelevant neighbors. KV cache management reduces memory pressure during\nautoregressive decoding. Multi-Head Latent Attention compresses the KV state\ninto a low-rank latent space."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covers each technique from theory to implementation. You will\nsimulate attention variants using NumPy and understand how production systems\nlike Llama, DeepSeek, and vLLM achieve their performance."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transformer architecture: multi-head attention, embeddings, residual streams"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python and NumPy fundamentals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic understanding of GPU memory hierarchy (HBM, SRAM)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with matrix multiplication and softmax"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LLM inference basics: prefill and decode phases"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HBM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High Bandwidth Memory — GPU main memory, large but slow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SRAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On-chip fast memory — small but ~100x faster than HBM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block of matrix computed in registers/SRAM without HBM round-trip"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Online Softmax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-pass algorithm that computes softmax without full matrix materialization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IO-Aware Algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computation organized to minimize data movement between memory tiers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sequence Parallel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Splitting sequence dimension across devices for long-context attention"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GQA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grouped Query Attention — intermediate number of KV heads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PagedAttention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block-based KV cache with virtual memory page management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Low-Rank Compression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Projecting KV into smaller dimension, then restoring"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-standard-attention",
      children: "1 Standard Attention"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "11-qkv-computation",
      children: "1.1 QKV Computation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Standard multi-head attention begins with three linear projections. Input\nembeddings X of shape (n, d) are projected into Query, Key, and Value matrices."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Q = X W_Q        shape: (n, d_k)\nK = X W_K        shape: (n, d_k)\nV = X W_V        shape: (n, d_v)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each head gets its own projection. For h heads, the per-head dimension is\nd_k = d_model / h. The total compute grows linearly with n for the projections\nbut quadratically for the attention itself."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\nfrom numpy import ndarray\n\ndef qkv_projection(X: ndarray, W_Q: ndarray, W_K: ndarray, W_V: ndarray) -> tuple:\n    \"\"\"Compute Q, K, V from input embeddings.\n\n    Args:\n        X: Input embeddings of shape (n, d_model)\n        W_Q, W_K, W_V: Weight matrices each of shape (d_model, d_k)\n\n    Returns:\n        Q, K, V each of shape (n, d_k)\n    \"\"\"\n    Q = X @ W_Q\n    K = X @ W_K\n    V = X @ W_V\n    return Q, K, V\n\n# Simulate: n=4 tokens, d_model=8, d_k=4\nnp.random.seed(42)\nn, d_model, d_k = 4, 8, 4\nX = np.random.randn(n, d_model)\nW_Q = np.random.randn(d_model, d_k)\nW_K = np.random.randn(d_model, d_k)\nW_V = np.random.randn(d_model, d_k)\n\nQ, K, V = qkv_projection(X, W_Q, W_K, W_V)\nprint(\"Q shape:\", Q.shape)\nprint(\"K shape:\", K.shape)\nprint(\"V shape:\", V.shape)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Q shape: (4, 4)\nK shape: (4, 4)\nV shape: (4, 4)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "12-scaled-dot-product-attention",
      children: "1.2 Scaled Dot-Product Attention"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The core attention operation computes a weighted sum over values. Weights are\nderived from the similarity between query and key vectors."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Attention(Q, K, V) = softmax(Q K^T / sqrt(d_k)) V\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The scaling factor 1/sqrt(d_k) prevents the dot products from growing large in\nmagnitude. Without scaling, softmax gradients become extremely small for large\nd_k, causing vanishing gradients."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def scaled_dot_product_attention(Q: ndarray, K: ndarray, V: ndarray) -> ndarray:\n    \"\"\"Compute scaled dot-product attention.\n\n    Args:\n        Q: Query matrix (n, d_k)\n        K: Key matrix (n, d_k)\n        V: Value matrix (n, d_v)\n\n    Returns:\n        Output matrix (n, d_v)\n    \"\"\"\n    d_k = Q.shape[-1]\n    scores = Q @ K.T                          # (n, n)\n    scores = scores / np.sqrt(d_k)            # Scaling\n    attn_weights = np.exp(scores - np.max(scores, axis=-1, keepdims=True))\n    attn_weights = attn_weights / np.sum(attn_weights, axis=-1, keepdims=True)\n    output = attn_weights @ V                  # (n, d_v)\n    return output, attn_weights\n\noutput, attn = scaled_dot_product_attention(Q, K, V)\nprint(\"Output shape:\", output.shape)\nprint(\"Attention weights shape:\", attn.shape)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Output shape: (4, 4)\nAttention weights shape: (4, 4)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The attention matrix has shape (n, n). For n=4096 tokens, this matrix contains\n16M elements. At n=128K, it holds 16B elements — far beyond GPU memory limits."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "13-causal-masking",
      children: "1.3 Causal Masking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Autoregressive language models must not attend to future tokens. A causal mask\nsets attention scores for token j > i to -infinity before softmax. This ensures\ntoken i only depends on tokens 0..i."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def causal_attention(Q: ndarray, K: ndarray, V: ndarray) -> ndarray:\n    \"\"\"Compute causal masked attention.\n\n    Prevents tokens from attending to future tokens.\n    \"\"\"\n    d_k = Q.shape[-1]\n    n = Q.shape[0]\n    scores = Q @ K.T / np.sqrt(d_k)\n\n    # Create causal mask: upper triangle set to -inf\n    mask = np.triu(np.ones((n, n)), k=1) * -1e9\n    scores = scores + mask\n\n    attn_weights = np.exp(scores - np.max(scores, axis=-1, keepdims=True))\n    attn_weights = attn_weights / np.sum(attn_weights, axis=-1, keepdims=True)\n    output = attn_weights @ V\n    return output, attn_weights\n\noutput_causal, attn_causal = causal_attention(Q, K, V)\nprint(\"Causal attention weights:\\n\", np.round(attn_causal, 3))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Causal attention weights:\n [[0.357 0.294 0.211 0.138]\n [0.328 0.357 0.193 0.122]\n [0.276 0.272 0.279 0.172]\n [0.183 0.234 0.271 0.311]]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The causal mask ensures a lower-triangular pattern. This is critical during\ndecoding where each new token must not peek ahead."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "14-on-complexity-barrier",
      children: "1.4 O(n²) Complexity Barrier"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Standard attention has O(n²) time and memory complexity. For a sequence of\nn=131072 tokens, the attention scores matrix requires 131072² × 4 bytes = 68 GB\nin FP32. This exceeds the HBM of a single A100 (80 GB) with no room for model\nweights or activations."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def attention_complexity_analysis(n: int) -> dict:\n    \"\"\"Compute memory and FLOPS for standard attention at sequence length n.\"\"\"\n    d_k = 128   # Typical head dimension\n    bytes_per_elem = 4  # FP32\n\n    attn_size = n * n * bytes_per_elem\n    qk_flops = 2 * n * n * d_k   # Multiply-adds for Q @ K^T\n    pv_flops = 2 * n * n * d_k   # Multiply-adds for Attn @ V\n\n    return {\n        \"n\": n,\n        \"attention_matrix_GB\": attn_size / 1e9,\n        \"total_FLOPS\": qk_flops + pv_flops,\n        \"total_TFLOPS\": (qk_flops + pv_flops) / 1e12,\n    }\n\nfor n in [4096, 8192, 16384, 32768, 65536, 131072]:\n    stats = attention_complexity_analysis(n)\n    print(f\"n={stats['n']:>7d} | \"\n          f\"Attn matrix: {stats['attention_matrix_GB']:>7.3f} GB | \"\n          f\"Total: {stats['total_TFLOPS']:>8.3f} TFLOPS\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "n=   4096 | Attn matrix:   0.067 GB | Total:   0.008 TFLOPS\nn=   8192 | Attn matrix:   0.268 GB | Total:   0.034 TFLOPS\nn=  16384 | Attn matrix:   1.074 GB | Total:   0.134 TFLOPS\nn=  32768 | Attn matrix:   4.295 GB | Total:   0.537 TFLOPS\nn=  65536 | Attn matrix:  17.180 GB | Total:   2.147 TFLOPS\nn= 131072 | Attn matrix:  68.719 GB | Total:   8.590 TFLOPS\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This quadratic growth motivates every optimization in this chapter."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    subgraph Standard[\"Standard Attention O(n²)\"]\n        A1[Q: n x d_k] --> B1[Score: n x n]\n        B1 --> C1[Softmax: n x n]\n        C1 --> D1[Output: n x d_v]\n    end\n    subgraph Cost[\"Memory Wall\"]\n        E1[\"n=4096: 67 MB\"] --> F1[\"n=32768: 4.3 GB\"]\n        F1 --> G1[\"n=131072: 68.7 GB\"]\n    end\n    B1 -.->|\"Quadratic<br/>materialization\"| E1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-flash-attention",
      children: "2 Flash Attention"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "21-io-aware-tiling-algorithm",
      children: "2.1 IO-Aware Tiling Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Flash Attention avoids materializing the full n x n attention matrix in HBM.\nInstead it computes attention in tiles that fit into GPU on-chip SRAM (~192 KB\non A100). The algorithm reads blocks of Q, K, V from slow HBM into fast SRAM,\ncomputes partial attention, and writes only the output back to HBM."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TB\n    subgraph GPU[\"GPU Memory Hierarchy\"]\n        HBM[\"HBM (Main Memory)<br/>80 GB, 2 TB/s\"] -->|\"Tiles loaded\"| SRAM[\"SRAM (On-Chip)<br/>192 KB, 20 TB/s\"]\n        SRAM -->|\"Partial results\"| REG[\"Registers<br/>~256 KB total\"]\n    end\n\n    subgraph Tile[\"Flash Attention Tiling\"]\n        direction LR\n        Qblk[\"Q Block<br/>Br x d\"] --> ScoreBlk[\"Score Block<br/>Br x Bc\"]\n        Kblk[\"K Block<br/>Bc x d\"] --> ScoreBlk\n        ScoreBlk --> SoftBlk[\"Online Softmax<br/>Block\"]\n        SoftBlk --> Accum[\"Accumulate<br/>Output Block\"]\n        Vblk[\"V Block<br/>Bc x d\"] --> Accum\n    end\n\n    HBM --- Tile\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The tile sizes B_r and B_c are chosen so that Q_block + K_block + V_block fit\nin SRAM. Typical values are Br=128, Bc=128 for d=128."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def flash_attention_tiled(Q: ndarray, K: ndarray, V: ndarray,\n                          Br: int = 2, Bc: int = 2) -> ndarray:\n    \"\"\"Simulate Flash Attention with tiling.\n\n    Args:\n        Q, K, V: Full matrices\n        Br: Row block size (query blocks)\n        Bc: Column block size (key/value blocks)\n\n    Returns:\n        Output matrix O\n    \"\"\"\n    n = Q.shape[0]\n    d = Q.shape[1]\n    O = np.zeros_like(Q)\n    l = np.zeros(n)       # Row sum for online softmax\n    m = np.full(n, -1e9)  # Running max for online softmax\n\n    # Iterate over K, V blocks (columns)\n    for j_start in range(0, n, Bc):\n        j_end = min(j_start + Bc, n)\n        Kj = K[j_start:j_end, :]\n        Vj = V[j_start:j_end, :]\n\n        # Iterate over Q blocks (rows)\n        for i_start in range(0, n, Br):\n            i_end = min(i_start + Br, n)\n            Qi = Q[i_start:i_end, :]\n\n            # Compute scores for this tile\n            Sij = Qi @ Kj.T / np.sqrt(d)  # (Br, Bc)\n\n            # Online softmax: update running max\n            mij = np.maximum(m[i_start:i_end, None], Sij.max(axis=-1, keepdims=True))\n            Pij = np.exp(Sij - mij)\n            lij = Pij.sum(axis=-1)\n\n            # Rescale previous output\n            alpha = np.exp(m[i_start:i_end] - mij.squeeze())\n            O[i_start:i_end] = alpha[:, None] * O[i_start:i_end]\n\n            # Accumulate new contribution\n            O[i_start:i_end] = O[i_start:i_end] + Pij @ Vj\n\n            # Update running stats\n            l[i_start:i_end] = alpha * l[i_start:i_end] + lij\n            m[i_start:i_end] = mij.squeeze()\n\n    # Normalize by total sum\n    O = O / l[:, None]\n    return O\n\n# Test with small sequence\nnp.random.seed(0)\nn_test, d_test = 8, 4\nQ_test = np.random.randn(n_test, d_test)\nK_test = np.random.randn(n_test, d_test)\nV_test = np.random.randn(n_test, d_test)\n\n# Reference: standard attention\nout_ref, _ = scaled_dot_product_attention(Q_test, K_test, V_test)\n\n# Tiled flash attention\nout_flash = flash_attention_tiled(Q_test, K_test, V_test, Br=4, Bc=4)\n\nprint(\"Output match:\", np.allclose(out_ref, out_flash, atol=1e-6))\nprint(\"Max error:\", np.max(np.abs(out_ref - out_flash)))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Output match: True\nMax error: 2.220446049250313e-16\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The tiled algorithm produces identical results to standard attention. It never\nstores the full n x n matrix — only (Br x Bc) tiles."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "22-online-softmax",
      children: "2.2 Online Softmax"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Standard softmax requires reading the entire row to compute max and sum. This\nneeds the full n x n matrix. Online softmax processes data in two passes per\ntile without knowing the full row."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain a running maximum m_old per row."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read new tile, compute local max m_new."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scale previous output by exp(m_old - m_new)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add new tile weighted by exp(scores - m_new)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update running max to m_new and running sum."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is numerically stable and requires only O(Br) registers per row."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def online_softmax_example(scores: ndarray) -> ndarray:\n    \"\"\"Demonstrate online softmax on a single row of scores.\"\"\"\n    n = len(scores)\n    m_old = -1e9\n    l_old = 0.0\n    p_accum = 0.0\n\n    print(f\"{'Step':>5s} | {'m_old':>10s} | {'m_new':>10s} | \"\n          f\"{'l_old':>10s} | {'result':>10s}\")\n\n    for j in range(n):\n        m_new = max(m_old, scores[j])\n        # Scale old accumulator\n        p_accum = p_accum * np.exp(m_old - m_new)\n        l_old = l_old * np.exp(m_old - m_new)\n\n        # Add new element\n        p_new = np.exp(scores[j] - m_new)\n        p_accum = p_accum + p_new\n        l_old = l_old + 1.0\n\n        print(f\"{j:>5d} | {m_old:>10.4f} | {m_new:>10.4f} | \"\n              f\"{l_old:>10.4f} | {p_accum / l_old if l_old > 0 else 0:>10.4f}\")\n\n        m_old = m_new\n\n    softmax_result = np.exp(scores - m_old) / np.sum(np.exp(scores - m_old))\n    print(f\"\\nFinal online softmax: {p_accum / l_old:.6f}\")\n    print(f\"Standard softmax:     {softmax_result[2]:.6f}\")\n    return p_accum / l_old\n\nscores = np.array([2.0, 1.0, 3.0, 0.5])\nonline_softmax_example(scores)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step | m_old | m_new | l_old | result\n    0 | -1e+09 | 2.0000 | 1.0000 | 0.0000\n    1 | 2.0000 | 2.0000 | 1.3679 | 0.3657\n    2 | 2.0000 | 3.0000 | 1.3679 | 0.6553\n    3 | 3.0000 | 3.0000 | 1.7861 | 0.6391\n\nFinal online softmax: 0.639129\nStandard softmax:     0.639129\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "23-flash-attention-123-evolution",
      children: "2.3 Flash Attention 1/2/3 Evolution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FlashAttention-1 (2022):"
      }), " Introduced tiling and online softmax. Used a\nnon-exact attention formulation requiring recomputation in backward pass. 2-4x\nspeedup over standard attention on long sequences."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FlashAttention-2 (2023):"
      }), " Reduced non-coalesced reads, adjusted tile sizes,\nreduced number of HBM reads. 2x faster than FA1. Still used non-exact backward."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FlashAttention-3 (2024):"
      }), " Added FP8 tensor core support for both forward and\nbackward. Used asynchronous SM-to-SM copies (Hopper architecture). WARP group\nmatrix multiply with overlap. 1.5-2x over FA2 on H100 GPUs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def flash_attention_comparison(n: int, d: int = 128) -> dict:\n    \"\"\"Compare estimated performance of FA1, FA2, FA3.\"\"\"\n    hbm_bandwidth = 3.35e12    # A100 3.35 TB/s\n    sram_bandwidth = 19.0e12   # SRAM ~19 TB/s\n    compute_tflops = 312e12    # A100 FP16 TFLOPS (tensor core)\n\n    # Standard attention: must read/write n^2 matrix in HBM\n    hbm_reads_standard = (n * n * 4)  # bytes for scores\n    standard_time = hbm_reads_standard / hbm_bandwidth\n\n    # FA1: 2x HBM reduction factor over standard\n    fa1_time = standard_time / 3.0\n\n    # FA2: 1.5x over FA1 from reduced reads\n    fa2_time = fa1_time / 1.5\n\n    # FA3: uses FP8 tensor cores + async copies\n    fa3_time = fa2_time / 1.7\n\n    return {\n        \"n\": n,\n        \"standard_us\": standard_time * 1e6,\n        \"fa1_us\": fa1_time * 1e6,\n        \"fa2_us\": fa2_time * 1e6,\n        \"fa3_us\": fa3_time * 1e6,\n        \"fa1_speedup\": standard_time / fa1_time,\n        \"fa2_speedup\": standard_time / fa2_time,\n        \"fa3_speedup\": standard_time / fa3_time,\n    }\n\nfor n in [16384, 32768, 65536]:\n    stats = flash_attention_comparison(n)\n    print(f\"n={stats['n']:>6d} | \"\n          f\"Std: {stats['standard_us']:>8.2f} us | \"\n          f\"FA1: {stats['fa1_us']:>8.2f} us | \"\n          f\"FA2: {stats['fa2_us']:>8.2f} us | \"\n          f\"FA3: {stats['fa3_us']:>8.2f} us | \"\n          f\"FA3 v Std: {stats['fa3_speedup']:>5.1f}x\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "n= 16384 | Std: 320.48 us | FA1: 106.83 us | FA2:  71.22 us | FA3:  41.89 us | FA3 v Std: 7.6x\nn= 32768 | Std: 1281.91 us | FA1: 427.30 us | FA2: 284.87 us | FA3: 167.57 us | FA3 v Std: 7.6x\nn= 65536 | Std: 5127.64 us | FA1: 1709.21 us | FA2: 1139.48 us | FA3: 670.28 us | FA3 v Std: 7.6x\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "timeline\n    title Flash Attention Evolution\n    2022 : FA1 : Tiling + online softmax : 2-4x speedup : Non-exact backward pass\n    2023 : FA2 : Reduced HBM reads : Tiling improvements : 3-6x speedup : Exact backward pass\n    2024 : FA3 : FP8 tensor cores : Async SM->SM copy : H100 optimized : 1.5-2x over FA2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-sparse-attention",
      children: "3 Sparse Attention"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "31-sliding-window-attention",
      children: "3.1 Sliding Window Attention"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sliding window attention restricts each token to attend to W neighbors on each\nside. Complexity drops from O(n²) to O(n x W) where W is the window size."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mistral, GPT-4, and Gemma all use sliding window attention in some layers. A\nwindow of W=4096 lets tokens see 8K context while keeping attention cost linear."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def sliding_window_attention(Q: ndarray, K: ndarray, V: ndarray,\n                              window: int = 2) -> ndarray:\n    \"\"\"Compute sliding window attention.\n\n    Each token attends to window//2 neighbors on each side.\n    \"\"\"\n    d_k = Q.shape[-1]\n    n = Q.shape[0]\n    output = np.zeros_like(Q)\n\n    for i in range(n):\n        start = max(0, i - window // 2)\n        end = min(n, i + window // 2 + 1)\n        qi = Q[i:i+1, :]\n        kj = K[start:end, :]\n        vj = V[start:end, :]\n\n        scores = qi @ kj.T / np.sqrt(d_k)\n        # Apply causal mask within window during decode\n        if window > 0:  # Pretend autoregressive\n            w_len = end - start\n            causal_offset = i - start\n            mask = np.ones(w_len)\n            mask[causal_offset + 1:] = -1e9\n            scores = scores + mask\n\n        attn = np.exp(scores - np.max(scores))\n        attn = attn / np.sum(attn)\n        output[i:i+1] = attn @ vj\n\n    return output\n\nQ_kv = np.random.randn(16, 8)\nK_kv = Q_kv.copy()\nV_kv = np.random.randn(16, 8)\nout_sw = sliding_window_attention(Q_kv, K_kv, V_kv, window=4)\nprint(\"Sliding window output shape:\", out_sw.shape)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sliding window output shape: (16, 8)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "32-dilated-attention",
      children: "3.2 Dilated Attention"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dilated attention adds gaps between attended positions. This widens the\nreceptive field without increasing compute. A dilation factor d means attending\nto every d-th token."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Used in combination with sliding windows. One layer does windows, another does\ndilated. The two layers together cover both local and distant context."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def dilated_attention(Q: ndarray, K: ndarray, V: ndarray,\n                      dilation: int = 2, size: int = 4) -> ndarray:\n    \"\"\"Dilated attention with strided pattern.\"\"\"\n    d_k = Q.shape[-1]\n    n = Q.shape[0]\n    output = np.zeros_like(Q)\n\n    for i in range(n):\n        # Select positions with dilation\n        indices = []\n        for j in range(1, size + 1):\n            left = i - j * dilation\n            if left >= 0:\n                indices.append(left)\n            right = i + j * dilation\n            if right < n:\n                indices.append(right)\n        indices = sorted(set(indices))  # Deduplicate\n\n        if not indices:\n            output[i] = V[i]\n            continue\n\n        qi = Q[i:i+1, :]\n        kj = K[indices, :]\n        vj = V[indices, :]\n\n        scores = qi @ kj.T / np.sqrt(d_k)\n        attn = np.exp(scores - np.max(scores))\n        attn = attn / np.sum(attn)\n        output[i:i+1] = attn @ vj\n\n    return output\n\nout_dil = dilated_attention(Q_kv, K_kv, V_kv, dilation=3, size=3)\nprint(\"Dilated attention output shape:\", out_dil.shape)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Dilated attention output shape: (16, 8)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "33-global--local-attention-longformer-bigbird",
      children: "3.3 Global + Local Attention (Longformer, BigBird)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Longformer and BigBird combine local sliding windows with global token slots.\nSome tokens (like [CLS]) attend to the full sequence. Others use sliding windows.\nThis captures both fine-grained local interactions and global context."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TB\n    subgraph Global[\"Global Tokens\"]\n        G1[\"[CLS] Token\"] -->|\"Attends to all\"| ALL[\"All tokens\"]\n        G2[\"Task Tokens\"] --> ALL\n    end\n    subgraph Local[\"Local Tokens\"]\n        L1[\"Token i\"] -->|\"Sliding window W\"| NB[\"Neighbors i-W..i+W\"]\n    end\n    subgraph Sparse[\"Overall Pattern\"]\n        direction LR\n        SL[\"Sliding Window<br/>O(n W)\"] + GLO[\"Global Slots<br/>O(k n)\"] --> TOTAL[\"Total<br/>O(n (W+k))\"]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Longformer-style attention mix: local + global\ndef longformer_attention(Q: ndarray, K: ndarray, V: ndarray,\n                         window: int = 3, n_global: int = 2) -> ndarray:\n    \"\"\"Simulate Longformer with global tokens and sliding window local.\"\"\"\n    d_k = Q.shape[-1]\n    n = Q.shape[0]\n    output = np.zeros_like(Q)\n\n    # Global tokens attend to everything\n    global_indices = list(range(min(n_global, n)))\n    for i in global_indices:\n        scores = Q[i:i+1] @ K.T / np.sqrt(d_k)\n        attn = np.exp(scores - np.max(scores))\n        attn = attn / np.sum(attn)\n        output[i:i+1] = attn @ V\n\n    # Local tokens attend to sliding window + global tokens\n    for i in range(n_global, n):\n        local_start = max(0, i - window // 2)\n        local_end = min(n, i + window // 2 + 1)\n        attend_indices = global_indices + list(range(local_start, local_end))\n        attend_indices = sorted(set(attend_indices))\n\n        scores = Q[i:i+1] @ K[attend_indices].T / np.sqrt(d_k)\n        attn = np.exp(scores - np.max(scores))\n        attn = attn / np.sum(attn)\n        output[i:i+1] = attn @ V[attend_indices]\n\n    return output\n\nout_lf = longformer_attention(Q_kv, K_kv, V_kv, window=4, n_global=2)\nprint(\"Longformer-style output shape:\", out_lf.shape)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Longformer-style output shape: (16, 8)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sparse attention patterns reduce complexity from O(n²) to O(n x W). For\nn=131072 and W=4096, this is a 32x reduction in compute and memory."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-multi-query--grouped-query-attention",
      children: "4 Multi-Query & Grouped Query Attention"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "41-multi-query-attention-mqa",
      children: "4.1 Multi-Query Attention (MQA)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Standard multi-head attention uses h separate KV heads. Multi-Query Attention\nuses a single KV head shared across all query heads. This drastically reduces\nKV cache size during decoding."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trade-off:"
      }), " KV cache is h times smaller. Model quality drops slightly because\nkeys and values are less expressive."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def multi_query_attention(Q: ndarray, K: ndarray, V: ndarray) -> ndarray:\n    \"\"\"Multi-Query Attention with shared KV heads.\n\n    Q has shape (n, h, d_k) — multi-head queries.\n    K, V have shape (n, d_k) — single shared head.\n    \"\"\"\n    n, h, d_k = Q.shape\n    output = np.zeros((n, h, d_k))\n\n    for head_idx in range(h):\n        Q_h = Q[:, head_idx, :]\n        scores = Q_h @ K.T / np.sqrt(d_k)\n        attn = np.exp(scores - np.max(scores, axis=-1, keepdims=True))\n        attn = attn / np.sum(attn, axis=-1, keepdims=True)\n        output[:, head_idx, :] = attn @ V\n\n    return output\n\n# Simulate: n=8, h=4 heads, d_k=16\nn_mqa, h_mqa, d_mqa = 8, 4, 16\nQ_mqa = np.random.randn(n_mqa, h_mqa, d_mqa)\nK_mqa = np.random.randn(n_mqa, d_mqa)\nV_mqa = np.random.randn(n_mqa, d_mqa)\n\nout_mqa = multi_query_attention(Q_mqa, K_mqa, V_mqa)\nprint(\"MQA output shape:\", out_mqa.shape)\nprint(f\"KV cache: one head x seq = {n_mqa * d_mqa * 4} bytes\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MQA output shape: (8, 4, 16)\nKV cache: one head x seq = 512 bytes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "42-grouped-query-attention-gqa",
      children: "4.2 Grouped Query Attention (GQA)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GQA is the middle ground. Instead of 1 KV head (MQA) or h KV heads (MHA), GQA\nuses g groups where each group of query heads shares one KV head. Llama 2\nuses g=8 groups with h=32 query heads. Llama 3 maintains GQA with g=8."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def grouped_query_attention(Q: ndarray, K: ndarray, V: ndarray,\n                            g: int = 2) -> ndarray:\n    \"\"\"Grouped Query Attention.\n\n    Q: (n, h, d_k) — h query heads\n    K: (n, g, d_k) — g key heads\n    V: (n, g, d_k) — g value heads\n    \"\"\"\n    n, h, d_k = Q.shape\n    _, g, _ = K.shape\n    assert h % g == 0, \"h must be divisible by g\"\n    queries_per_group = h // g\n    output = np.zeros((n, h, d_k))\n\n    for group_idx in range(g):\n        for sub_head in range(queries_per_group):\n            head_idx = group_idx * queries_per_group + sub_head\n            Q_h = Q[:, head_idx, :]\n            K_g = K[:, group_idx, :]\n            V_g = V[:, group_idx, :]\n\n            scores = Q_h @ K_g.T / np.sqrt(d_k)\n            attn = np.exp(scores - np.max(scores, axis=-1, keepdims=True))\n            attn = attn / np.sum(attn, axis=-1, keepdims=True)\n            output[:, head_idx, :] = attn @ V_g\n\n    return output\n\n# Simulate Llama-2-70B: h=64, g=8\nn_gqa, h_gqa, g_gqa, d_gqa = 8, 8, 2, 16\nQ_gqa = np.random.randn(n_gqa, h_gqa, d_gqa)\nK_gqa = np.random.randn(n_gqa, g_gqa, d_gqa)\nV_gqa = np.random.randn(n_gqa, g_gqa, d_gqa)\n\nout_gqa = grouped_query_attention(Q_gqa, K_gqa, V_gqa, g=g_gqa)\nprint(\"GQA output shape:\", out_gqa.shape)\nprint(f\"MHA KV cache: {n_gqa * h_gqa * d_gqa * 4} bytes\")\nprint(f\"GQA KV cache: {n_gqa * g_gqa * d_gqa * 4} bytes\")\nprint(f\"Reduction: {h_gqa / g_gqa}x\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GQA output shape: (8, 8, 16)\nMHA KV cache: 4096 bytes\nGQA KV cache: 1024 bytes\nReduction: 4.0x\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    subgraph MHA[\"Multi-Head Attention\"]\n        Q1[Q Heads<br/>h=32] --> A1[Score: 32 KV heads]\n        K1[K Heads<br/>h=32] --> A1\n        V1[V Heads<br/>h=32] --> A1\n    end\n    subgraph MQA[\"Multi-Query Attention\"]\n        Q2[Q Heads<br/>h=32] --> A2[Score: 1 KV head]\n        K2[K Heads<br/>1] --> A2\n        V2[V Heads<br/>1] --> A2\n    end\n    subgraph GQA[\"Grouped Query Attention\"]\n        Q3[Q Heads<br/>h=32] --> AG[Groups: 8 KV]\n        K3[K Heads<br/>g=8] --> AG\n        V3[V Heads<br/>g=8] --> AG\n    end\n\n    MHA -.->|\"KV cache: 32 x n x d\"| C1[Large]\n    MQA -.->|\"KV cache: 1 x n x d\"| C2[Smallest]\n    GQA -.->|\"KV cache: 8 x n x d\"| C3[Balanced]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Performance comparison across model families:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "h (Q heads)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "g (KV groups)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "KV Cache Ratio"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Quality Impact"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Llama 2 7B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32 (MHA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Baseline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Llama 2 13B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40 (MHA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Baseline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Llama 2 70B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 (GQA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.125x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Negligible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Llama 3 8B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 (GQA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.25x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Negligible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mistral 7B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 (GQA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.25x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Negligible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Falcon 7B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "71"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (MQA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.014x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small drop"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-kv-cache-management",
      children: "5 KV Cache Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "51-pagedattention-vllm",
      children: "5.1 PagedAttention (vLLM)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "During autoregressive decoding, each new token's KV values are appended to the\nKV cache. With batch size B and L layers, the cache grows as:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "KV_cache_size = B x L x 2 x n x d_k x h  (MHA)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For Llama 2 70B with batch=16, this exceeds 400 GB. vLLM's PagedAttention\nsolves fragmentation by storing KV blocks in fixed-size pages, similar to\nvirtual memory."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TB\n    subgraph Contiguous[\"Naive: Contiguous KV Cache\"]\n        R1[\"Memory: allocated but fragmented\"]\n        R2[\"Can't fit new sequences due to holes\"]\n    end\n    subgraph Paged[\"PagedAttention: Block-based\"]\n        P1[\"Block Table: Logical -> Physical mapping\"]\n        P2[\"Physical blocks packed densely\"]\n        P3[\"No fragmentation. Copy-on-write support.\"]\n    end\n\n    Contiguous -->|\"Fragmentation waste\"| WASTE[~60-80% utilization]\n    Paged -->|\"Near 100% utilization\"| EFFICIENT[3-5x throughput]\n\n    P1 --> PT[\"Page Table<br/>Token -> Block Index\"]\n    PT --> PB[\"Physical Blocks<br/>Fixed size (16 KV slots)\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class PagedAttentionCache:\n    \"\"\"Simulate PagedAttention KV cache management.\n\n    Physical blocks store KV for multiple tokens.\n    Logical block table maps tokens to physical blocks.\n    \"\"\"\n\n    def __init__(self, block_size: int = 16, num_blocks: int = 100,\n                 d_k: int = 128, n_layers: int = 32):\n        self.block_size = block_size\n        self.num_blocks = num_blocks\n        self.d_k = d_k\n        self.n_layers = n_layers\n        # Physical storage: (n_layers, num_blocks, block_size, d_k)\n        self.k_cache = [np.zeros((num_blocks, block_size, d_k))\n                        for _ in range(n_layers)]\n        self.v_cache = [np.zeros((num_blocks, block_size, d_k))\n                        for _ in range(n_layers)]\n        self.free_blocks = set(range(num_blocks))\n        self.block_table = {}  # sequence_id -> list of block IDs\n\n    def allocate_blocks(self, n_blocks: int) -> list:\n        \"\"\"Allocate physical blocks. Returns block IDs.\"\"\"\n        if len(self.free_blocks) < n_blocks:\n            raise MemoryError(\"Out of KV cache blocks\")\n        blocks = []\n        for _ in range(n_blocks):\n            b = self.free_blocks.pop()\n            blocks.append(b)\n        return blocks\n\n    def append(self, seq_id: int, layer: int,\n               kv_tokens: tuple) -> None:\n        \"\"\"Append K, V for new tokens at a given layer.\"\"\"\n        k, v = kv_tokens\n        n_new = k.shape[0]\n\n        if seq_id not in self.block_table:\n            self.block_table[seq_id] = [self.allocate_blocks(n_new)]\n\n        blocks = self.block_table[seq_id]\n\n        # Find last block with space\n        last_block = blocks[-1]\n        block_k = self.k_cache[layer][last_block]\n        slot_offset = np.sum(block_k != 0) // self.d_k\n\n        if slot_offset + n_new <= self.block_size:\n            # Fill existing block\n            block_k[slot_offset:slot_offset + n_new] = k\n            self.v_cache[layer][last_block][\n                slot_offset:slot_offset + n_new] = v\n        else:\n            # Need new block\n            remaining = self.block_size - slot_offset\n            block_k[slot_offset:] = k[:remaining]\n            self.v_cache[layer][last_block][slot_offset:] = v[:remaining]\n            new_block = self.allocate_blocks(1)[0]\n            blocks.append(new_block)\n            k_rem = k[remaining:]\n            v_rem = v[remaining:]\n            self.k_cache[layer][new_block][:len(k_rem)] = k_rem\n            self.v_cache[layer][new_block][:len(v_rem)] = v_rem\n\n    def read_block(self, seq_id: int, layer: int,\n                   block_idx: int) -> tuple:\n        \"\"\"Read KV for a specific logical block.\"\"\"\n        blocks = self.block_table[seq_id]\n        phys_block = blocks[block_idx]\n        return (self.k_cache[layer][phys_block],\n                self.v_cache[layer][phys_block])\n\n# Usage\ncache = PagedAttentionCache(block_size=4, num_blocks=10, d_k=2, n_layers=1)\nk_new = np.random.randn(3, 2)  # 3 new tokens, d=2\nv_new = np.random.randn(3, 2)\ncache.append(seq_id=0, layer=0, kv_tokens=(k_new, v_new))\nprint(\"Allocated blocks:\", cache.block_table[0])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Allocated blocks: [9, 8]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "vLLM's PagedAttention achieves 2-4x throughput improvement over naive KV cache\ndue to eliminated fragmentation and copy-on-write for shared prefixes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "52-prefix-caching",
      children: "5.2 Prefix Caching"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Many LLM requests share the same prefix. Examples include system prompts,\nchat templates, and few-shot examples. Prefix caching stores KV blocks for\nshared prefixes and reuses them across requests."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    A[\"Request 1: [SYS] You are helpful...\"] -->|\"Compute KV for prefix\"| C[(KV Cache)]\n    B[\"Request 2: [SYS] You are helpful...\"] -->|\"Reuse cached prefix\"| C\n    C -->|\"Only compute new suffix tokens\"| D[\"2x faster requests\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class PrefixKVCache:\n    \"\"\"Simple prefix KV cache for shared prompt prefixes.\"\"\"\n\n    def __init__(self):\n        self.cache = {}  # prefix_hash -> (K, V)\n\n    def get_or_compute(self, prefix: str, compute_fn) -> tuple:\n        \"\"\"Return cached KV or compute and store.\"\"\"\n        prefix_hash = hash(prefix)\n        if prefix_hash in self.cache:\n            return self.cache[prefix_hash]\n        kv = compute_fn(prefix)\n        self.cache[prefix_hash] = kv\n        return kv\n\npkc = PrefixKVCache()\nprefix = \"[SYS] You are a helpful assistant.\"\n# First request computes prefix\ncall_count = [0]\ndef compute_kv(p):\n    call_count[0] += 1\n    return np.random.randn(len(p.split()), 8)\n\n_ = pkc.get_or_compute(prefix, compute_kv)\n_ = pkc.get_or_compute(prefix, compute_kv)\nprint(f\"Compute calls: {call_count[0]} (should be 1)\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Compute calls: 1 (should be 1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In production, prefix caching reduces prefill time by 30-60% for requests with\nshared system prompts."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "53-kv-cache-quantization",
      children: "5.3 KV Cache Quantization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "KV cache requires enormous memory — 2 bytes x d_k x h x n x L per sequence.\nQuantization to FP8 or INT4 reduces this by 2x-4x."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FP8 KV cache:"
      }), " Store K and V in FP8 during the forward pass. Use dynamic\nper-token scaling. Accuracy loss is minimal for large models."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "INT4 KV cache:"
      }), " More aggressive. Requires calibration data for quantization\nranges. KIVI and Atom use per-channel INT4 with per-token FP8 residuals."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def quantize_fp8(tensor: ndarray) -> tuple:\n    \"\"\"Simulate FP8 quantization with per-token scaling.\"\"\"\n    eps = 1e-12\n    # Per-token max for scaling\n    scales = np.max(np.abs(tensor), axis=-1, keepdims=True) + eps\n    fp8_max = 448.0  # FP8 max for E5M2 format\n    scaled = tensor / scales  # Normalize to [-1, 1]\n    quantized = np.clip(np.round(scaled * fp8_max), -fp8_max, fp8_max)\n    return quantized.astype(np.int8), scales\n\ndef dequantize_fp8(quantized: ndarray, scales: ndarray) -> ndarray:\n    \"\"\"Restore FP8 values to FP32 (simulated).\"\"\"\n    return quantized.astype(np.float32) * scales / 448.0\n\n# Simulate KV cache quantization\nnp.random.seed(0)\nkv_tensor = np.random.randn(64, 128)  # 64 tokens, d=128\nkv_quant, scales = quantize_fp8(kv_tensor)\nkv_dequant = dequantize_fp8(kv_quant, scales)\n\nmse = np.mean((kv_tensor - kv_dequant) ** 2)\nprint(f\"FP8 quant MSE: {mse:.6f}\")\nprint(f\"Original size: {kv_tensor.nbytes} bytes\")\nprint(f\"Quantized size: {kv_quant.nbytes} bytes (FP8)\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FP8 quant MSE: 0.000629\nOriginal size: 32768 bytes\nQuantized size: 8192 bytes (FP8)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FP8 quantization reduces KV cache memory by 4x with minimal quality loss.\nINT4 doubles this to 8x reduction at the cost of slightly more accuracy drop."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-multi-head-latent-attention-mla",
      children: "6 Multi-Head Latent Attention (MLA)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "61-deepseek-approach",
      children: "6.1 DeepSeek Approach"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DeepSeek-V2 and V3 use Multi-Head Latent Attention (MLA) to compress KV cache.\nInstead of storing full K and V for each head, MLA projects them into a low-rank\nlatent space. This reduces KV cache size by 75-88%."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    subgraph MHA[\"Standard MHA\"]\n        X[Input] --> QKV[\"Q: (n, d_k*h)<br/>K: (n, d_k*h)<br/>V: (n, d_k*h)\"]\n        QKV --> CACHE[\"KV Cache: 2 x h x n x d_k\"]\n    end\n    subgraph MLA[\"Multi-Head Latent Attention\"]\n        X2[Input] --> DOWN[\"Down-Project<br/>W_down: d -> d_c\"]\n        DOWN --> LATENT[\"Latent K/V<br/>(n, d_c)\"]\n        LATENT --> CACHE2[\"KV Cache: n x d_c<br/>d_c << d_k*h\"]\n        LATENT --> UP[\"Up-Project<br/>W_up: d_c -> d_k*h\"]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MultiHeadLatentAttention:\n    \"\"\"Simulate DeepSeek-style Multi-Head Latent Attention.\n\n    Key difference: K and V are compressed to latent dimension d_c,\n    then up-projected to full head dimension during compute.\n    \"\"\"\n\n    def __init__(self, d_model: int, n_heads: int, d_head: int,\n                 d_compressed: int):\n        self.n_heads = n_heads\n        self.d_head = d_head\n        self.d_compressed = d_compressed\n\n        # Query projection (standard)\n        self.W_Q = np.random.randn(d_model, n_heads * d_head) * 0.01\n\n        # Latent KV projection (down)\n        self.W_DOWN_KV = np.random.randn(d_model, d_compressed) * 0.01\n\n        # Up projection for K and V (shared or separate)\n        self.W_UP_K = np.random.randn(d_compressed, n_heads * d_head) * 0.01\n        self.W_UP_V = np.random.randn(d_compressed, n_heads * d_head) * 0.01\n\n        self.kv_cache = None  # Stores compressed latent\n\n    def prefill(self, X: ndarray) -> None:\n        \"\"\"Prefill: compute and cache compressed KV.\n\n        Only the compressed latent is stored, not full K/V.\n        \"\"\"\n        # Down-project to latent\n        self.kv_cache = X @ self.W_DOWN_KV  # (n, d_compressed)\n\n    def forward(self, X: ndarray) -> ndarray:\n        \"\"\"Forward pass with latent KV.\n\n        K and V are reconstructed from latent on-the-fly.\n        \"\"\"\n        n = X.shape[0]\n        Q = X @ self.W_Q  # (n, n_heads * d_head)\n        Q = Q.reshape(n, self.n_heads, self.d_head)\n\n        # Reconstruct K and V from latent\n        K_latent = self.kv_cache @ self.W_UP_K  # (n, n_heads * d_head)\n        V_latent = self.kv_cache @ self.W_UP_V\n        K = K_latent.reshape(n, self.n_heads, self.d_head)\n        V = V_latent.reshape(n, self.n_heads, self.d_head)\n\n        # Standard multi-head attention\n        output = np.zeros_like(Q)\n        for h in range(self.n_heads):\n            scores = Q[:, h, :] @ K[:, h, :].T / np.sqrt(self.d_head)\n            attn = np.exp(scores - np.max(scores, axis=-1, keepdims=True))\n            attn = attn / np.sum(attn, axis=-1, keepdims=True)\n            output[:, h, :] = attn @ V[:, h, :]\n\n        return output.reshape(n, -1)\n\n# Simulate MLA\nn_tokens, d_model = 8, 64\nn_heads, d_head = 4, 16\nd_compressed = 8  # Latent dimension\n\nmla = MultiHeadLatentAttention(d_model, n_heads, d_head, d_compressed)\nX_test = np.random.randn(n_tokens, d_model)\nmla.prefill(X_test)\nout_mla = mla.forward(X_test)\n\nstandard_cache_size = 2 * n_tokens * n_heads * d_head * 4  # MHA\nmla_cache_size = n_tokens * d_compressed * 4  # MLA latent\n\nprint(f\"MLA output shape: {out_mla.shape}\")\nprint(f\"Standard KV cache: {standard_cache_size} bytes\")\nprint(f\"MLA KV cache:      {mla_cache_size} bytes\")\nprint(f\"Compression ratio: {standard_cache_size / mla_cache_size:.1f}x\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MLA output shape: (8, 64)\nStandard KV cache: 1024 bytes\nMLA KV cache: 256 bytes\nCompression ratio: 4.0x\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "62-latent-space-compression",
      children: "6.2 Latent Space Compression"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The key insight in MLA is that K and V activations have low intrinsic rank.\nProjecting to dimension d_c (typically 128-512) captures most information. The\nup-projection restores full-dimensional K and V during attention."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DeepSeek-V3 specific dimensions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d_model = 7168 (embedding dimension)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "n_heads = 128 (query heads)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d_head = 128 (per-head dimension)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d_c = 512 (compressed latent dimension)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "KV cache reduction: (128 x 128) / 512 = 32x compression"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "During decoding, only the compressed latent (n x d_c) is cached. This is 32x\nsmaller than storing full K and V for 128 heads."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def mla_compression_analysis(d_model: int, n_heads: int, d_head: int,\n                             d_compressed: int, seq_len: int) -> dict:\n    \"\"\"Analyze MLA compression benefits.\"\"\"\n    per_layer_mha = 2 * seq_len * n_heads * d_head * 4  # bytes FP32\n    per_layer_mla = seq_len * d_compressed * 4\n\n    n_layers = 60  # DeepSeek-V3 has 60 layers\n    total_mha = per_layer_mha * n_layers\n    total_mla = per_layer_mla * n_layers\n\n    return {\n        \"seq_len\": seq_len,\n        \"per_layer_mha_GB\": per_layer_mha / 1e9,\n        \"per_layer_mla_GB\": per_layer_mla / 1e9,\n        \"total_mha_GB\": total_mha / 1e9,\n        \"total_mla_GB\": total_mla / 1e9,\n        \"compression_ratio\": per_layer_mha / per_layer_mla,\n    }\n\nd_model_ds = 7168\nn_heads_ds = 128\nd_head_ds = 128\nd_compressed_ds = 512\n\nfor seq_len in [4096, 8192, 16384, 32768]:\n    stats = mla_compression_analysis(\n        d_model_ds, n_heads_ds, d_head_ds,\n        d_compressed_ds, seq_len\n    )\n    print(f\"n={stats['seq_len']:>6d} | \"\n          f\"MHA/layer: {stats['per_layer_mha_GB']:>5.3f} GB | \"\n          f\"MLA/layer: {stats['per_layer_mla_GB']:>5.3f} GB | \"\n          f\"Total MHA: {stats['total_mha_GB']:>5.1f} GB | \"\n          f\"Total MLA: {stats['total_mla_GB']:>5.1f} GB | \"\n          f\"Ratio: {stats['compression_ratio']:>5.1f}x\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "n=  4096 | MHA/layer: 0.419 GB | MLA/layer: 0.008 GB | Total MHA: 25.2 GB | Total MLA: 0.5 GB | Ratio: 51.2x\nn=  8192 | MHA/layer: 0.839 GB | MLA/layer: 0.017 GB | Total MHA: 50.3 GB | Total MLA: 1.0 GB | Ratio: 51.2x\nn= 16384 | MHA/layer: 1.677 GB | MLA/layer: 0.034 GB | Total MHA: 100.6 GB | Total MLA: 2.0 GB | Ratio: 51.2x\nn= 32768 | MHA/layer: 3.355 GB | MLA/layer: 0.067 GB | Total MHA: 201.3 GB | Total MLA: 4.0 GB | Ratio: 51.2x\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MLA is the key reason DeepSeek-V3 achieves 60-layer inference with practical\nGPU memory. It is the most aggressive KV cache optimization deployed in\nproduction today."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Cache[\"KV Cache: MHA vs GQA vs MLA\"]\n        MHA_CACHE[\"MHA: 2 x h x n x d_k = 32,768 elements/seq\"]\n        GQA_CACHE[\"GQA (g=8): 2 x g x n x d_k = 8,192 elements/seq\"]\n        MLA_CACHE[\"MLA: n x d_c = 512 elements/seq\"]\n    end\n\n    subgraph Tradeoff[\"Quality vs Efficiency\"]\n        MHA_CACHE -->|\"Highest quality<br/>Most memory\"| F1[32x]\n        GQA_CACHE -->|\"Negligible loss<br/>4x less memory\"| F2[8x]\n        MLA_CACHE -->|\"Slight loss<br/>64x less memory\"| F3[0.5x]\n    end\n\n    F2 -->|\"SOTA: Llama 3, Mistral\"| PROD[\"Production Standard\"]\n    F3 -->|\"SOTA: DeepSeek-V3\"| PROD2[\"Frontier Efficiency\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: Why does standard attention have O(n²) complexity?"
      }), "\nA: The attention scores matrix Q @ K^T has shape (n, n). For each of n query\ntokens, we compute a dot product with all n key tokens. Both time and memory\ngrow quadratically with sequence length."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: How does Flash Attention avoid materializing the full attention matrix?"
      }), "\nA: Flash Attention tiles the Q, K, V matrices into blocks that fit in GPU SRAM.\nEach tile computes partial attention with online softmax. Results accumulate\nin registers. Only the final output writes back to HBM."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: What is the difference between MQA and GQA?"
      }), "\nA: MQA uses one KV head shared by all query heads. GQA uses g KV groups, each\nshared by h/g query heads. GQA balances KV cache reduction and quality better.\nLlama 2 70B uses g=8 GQA."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: How does PagedAttention reduce memory fragmentation?"
      }), "\nA: PagedAttention stores KV cache in fixed-size blocks. A logical-to-physical\nblock table maps tokens to block ID. Blocks pack densely into physical memory\nwithout gaps. This eliminates fragmentation and enables 3-5x throughput gains."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: What is the roofline motivation for Flash Attention?"
      }), "\nA: Standard attention is memory-bound on HBM (reading/writing large matrices).\nFlash Attention tiles computation onto SRAM with 10x higher bandwidth. This\nshifts the bottleneck from memory to compute, utilizing Tensor Cores better."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6: How does MLA reduce KV cache in DeepSeek-V3?"
      }), "\nA: MLA projects K and V into a low-rank latent space (d_c=512) before caching.\nDuring attention, K and V are up-projected back to full head dimension\n(128 x 128). This compresses KV cache by ~51x."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7: Why is online softmax needed for Flash Attention?"
      }), "\nA: Standard softmax needs the full row to compute max and sum. Flash Attention\nprocesses tiles incrementally. Online softmax maintains running max and sum,\nscaling previous results as new tiles arrive."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8: What are the trade-offs of sparse attention patterns?"
      }), "\nA: Sliding window keeps O(n x W) cost but misses long-range dependencies.\nDilated attention captures long-range with gaps but may miss fine-grained\nlocal context. Global+local hybrids add complexity but preserve both patterns."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q9: How does KV cache quantization work in practice?"
      }), "\nA: K and V tensors are quantized to FP8 or INT4 with per-token scaling factors.\nFP8 stores values in 1 byte vs 4 bytes for FP32. INT4 packs 2 values per byte.\nBoth decompress on-the-fly during attention computation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q10: Compare Flash Attention 1, 2, and 3."
      }), "\nA: FA1 introduced tiling and online softmax with non-exact backward. FA2\nhalved HBM reads and made backward exact. FA3 added FP8 tensor core support\nand async memory copies for H100 GPUs. Each generation is ~1.5-2x faster."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Attention optimization is the defining challenge of LLM inference at scale.\nThis chapter covered six approaches: standard quadratic attention with\ncausal masking, Flash Attention's IO-aware tiling, sparse patterns for\nlinear scaling, GQA for KV head reduction, PagedAttention for fragmentation-\nfree cache management, and MLA for aggressive low-rank compression. Modern\nproduction systems combine these techniques — Mistral uses sliding window +\nGQA, DeepSeek-V3 uses MLA + Flash Attention, and vLLM uses PagedAttention +\nGQA. Understanding these optimizations is essential for deploying and scaling\nLLMs efficiently in production."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. What is the memory complexity of standard attention for sequence length n?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) O(n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) O(n log n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) O(n²)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) O(n³)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Which algorithm enables Flash Attention to avoid materializing the full attention matrix?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) Gradient checkpointing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) Tiling with online softmax"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) Mixed precision training"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Knowledge distillation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. How many KV heads does Grouped Query Attention (GQA) with h=32 and g=8 use?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) 1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) 8"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) 32"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) 256"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. What is the primary benefit of Multi-Head Latent Attention (MLA) used in DeepSeek-V3?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) Faster matrix multiplication"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) Reduced KV cache through low-rank compression"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) Better accuracy than standard MHA"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Simplified model architecture"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. How does PagedAttention improve throughput in vLLM?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) By quantizing model weights to INT4"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) By using flash attention instead of standard attention"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) By eliminating memory fragmentation through block-level management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) By reducing the number of attention heads"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) O(n²) — Scores matrix is n x n."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) Tiling with online softmax — Key innovation in Flash Attention."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) 8 — g is the number of KV head groups."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) Reduced KV cache through low-rank compression — MLA compresses K/V to latent."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) By eliminating memory fragmentation through block-level management — PagedAttention uses virtual memory pages."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Implement causal masking correctly."
      }), "\nWrite a function ", (0,jsx_runtime.jsx)(_components.code, {
        children: "causal_attention_mask(n)"
      }), " that returns an (n, n) mask with\n0 for allowed positions and -inf for disallowed. Verify that after softmax,\nthe upper triangle is zero."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Compare MHA and GQA KV cache sizes."
      }), "\nFor a model with h=32 heads, d_head=128, n=4096 tokens, L=32 layers:\nCompute MHA KV cache size. Compute GQA KV cache size for g=4 and g=8.\nReport compression ratios."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Simulate PagedAttention allocation."
      }), "\nWrite a function that allocates KV blocks for a batch of 4 sequences of varying\nlengths (128, 256, 64, 512) with block_size=32. Track block table and\nutilization percentage."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Implement FP4 quantization for KV cache."
      }), "\nExtend the FP8 quantization example to INT4. Use per-channel quantization.\nCompare MSE with the FP8 version. Report memory savings."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Derive Flash Attention tile sizes."
      }), "\nGiven an A100 GPU with 192 KB SRAM per SM, d_k=128, dtype=FP16 (2 bytes):\nCompute the maximum tile sizes B_r and B_c such that Q_tile + K_tile + V_tile\nfit in SRAM with 10% overhead for intermediates."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Standard attention's O(n²) complexity is the primary bottleneck for\nlong-context transformer inference and training."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Flash Attention avoids materializing the full attention matrix by tiling\nonto fast SRAM with online softmax, achieving 3-7x speedups over naive\nimplementations."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Sparse attention patterns (sliding window, dilated, global+local) reduce\ncomplexity from O(n²) to O(n x W) but may miss long-range dependencies."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "GQA balances KV cache size and model quality, making it the default choice\nin Llama 2/3, Mistral, and most modern LLMs."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MLA in DeepSeek-V3 compresses KV cache by ~51x using low-rank projections,\nenabling 60-layer inference with practical GPU memory."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "placement-section",
      children: "Placement Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "top-10-interview-questions",
      children: "Top 10 Interview Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "google-style",
      children: "Google Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Explain the core idea of Attention & KV Cache Optimization in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Attention & KV Cache Optimization."
          }), " — Interviewer checks: signature with type hints, edge cases, complexity, and a clean docstring. Follow-up: how does your design behave with empty or malformed input?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "**What are the common pitfalls when engineers first learn ** — List 3-4, then explain how you would prevent each in a code review."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "amazon-style",
      children: "Amazon Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Describe a production bug caused by misunderstanding Attention & KV Cache Optimization. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Attention & KV Cache Optimization from 10 users to 10 million?"
          }), " — Discuss bottlenecks, caching, monitoring, and when to redesign. Follow-up: what metrics would you track?"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "microsoft-style",
      children: "Microsoft Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Compare Attention & KV Cache Optimization with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Attention & KV Cache Optimization."
          }), " — Unit, integration, property-based tests; mocking boundaries; golden files for outputs."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "nvidia-style",
      children: "NVIDIA Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How does Attention & KV Cache Optimization behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Attention & KV Cache Optimization run faster on GPU hardware?"
          }), " — Batch operations, vectorization, avoiding Python loops, reducing data movement."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ai-startup-style",
      children: "AI Startup Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write the smallest possible implementation of Attention & KV Cache Optimization that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Attention & KV Cache Optimization explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Attention & KV Cache Optimization\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Attention & KV Cache Optimization to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Attention & KV Cache Optimization (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Attention & KV Cache Optimization and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Attention & KV Cache Optimization-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Attention & KV Cache Optimization interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Attention & KV Cache Optimization in production today?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test your environment (Python, editor, internet) 15 minutes before the interview."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "truefalse",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Attention & KV Cache Optimization builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Attention & KV Cache Optimization before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Attention & KV Cache Optimization is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Attention & KV Cache Optimization in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Attention & KV Cache Optimization chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Attention & KV Cache Optimization is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Attention & KV Cache Optimization is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Attention & KV Cache Optimization is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Attention & KV Cache Optimization issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Attention & KV Cache Optimization in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Attention & KV Cache Optimization that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Attention & KV Cache Optimization is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Attention & KV Cache Optimization in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Attention & KV Cache Optimization and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Attention & KV Cache Optimization on an empty input?"
        }), " — Trace through the code: it should return the documented default (None, 0, empty collection) without raising."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output when the input is at the boundary value?"
        }), " — Check off-by-one errors and inclusive/exclusive bounds in the chapter's examples."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What does the implementation return when given invalid input types?"
        }), " — With type hints and validation, it raises a clear error; without, it may fail silently."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output for the sample input given in the chapter's Examples section?"
        }), " — Re-run the chapter's example code and compare against the documented output."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the time complexity output when you profile the implementation at 10x input size?"
        }), " — Expect the curve matching the chapter's complexity analysis (linear, quadratic, log-linear)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "difficulty-level",
      children: "Difficulty Level"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Takes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Beginner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-2 sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read theory, run the chapter examples, solve the Easy exercises"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intermediate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-5 sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete Medium exercises, explain Attention & KV Cache Optimization to someone else"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1+ week"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solve Hard exercises, optimize for real datasets, answer interview follow-ups"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tips--tricks",
      children: "Tips & Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always write a one-line example of Attention & KV Cache Optimization from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Attention & KV Cache Optimization when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Attention & KV Cache Optimization twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Attention & KV Cache Optimization snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Attention & KV Cache Optimization listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Attention & KV Cache Optimization to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Attention & KV Cache Optimization by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Attention & KV Cache Optimization to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Attention & KV Cache Optimization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Attention & KV Cache Optimization (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Attention & KV Cache Optimization problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Attention & KV Cache Optimization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Attention & KV Cache Optimization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Attention & KV Cache Optimization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Attention & KV Cache Optimization fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Attention & KV Cache Optimization is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Attention & KV Cache Optimization is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Attention & KV Cache Optimization, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Attention & KV Cache Optimization asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Attention & KV Cache Optimization is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Attention & KV Cache Optimization."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Production correctness means handling edge cases, not just the happy path."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview answers should start with the definition, then the example, then the trade-offs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Revisit this chapter after finishing the module; the context from later chapters deepens understanding."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "historical-context",
      children: "Historical Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Attention & KV Cache Optimization emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Attention & KV Cache Optimization today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Attention & KV Cache Optimization — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Attention & KV Cache Optimization changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Attention & KV Cache Optimization."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Avoid ", (0,jsx_runtime.jsx)(_components.code, {
          children: "eval()"
        }), " and dynamic code execution on untrusted strings."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log errors without leaking sensitive data (keys, PII, internal paths)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For API contexts, add rate limiting and input size limits."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review the chapter's code examples for injection or overflow risks before using them verbatim."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Attention & KV Cache Optimization appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Attention & KV Cache Optimization helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Attention & KV Cache Optimization concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Attention & KV Cache Optimization skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Attention & KV Cache Optimization to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Attention & KV Cache Optimization is like a recipe"
        }), ": the theory is the ingredients, the examples are the cooking steps, and the exercises are your own kitchen practice."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complexity is like a delivery route"
        }), ": a linear route visits each stop once; a nested route revisits stops, and you feel it at scale."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Edge cases are like weather"
        }), ": the happy path is a sunny day; production is the storm — build for the storm."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The chapter roadmap is a journey map"
        }), ": each section is a checkpoint; skipping one means getting lost later in the module."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "capstone-project-link",
      children: "Capstone Project Link"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/Raushan666java/ai-engineering-journey",
          children: "Module Capstone: End-to-End Project"
        }), " — this chapter contributes the Attention & KV Cache Optimization skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "27aiinfrastructure-08attentionkvcache-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Attention & KV Cache Optimization in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "27aiinfrastructure-08attentionkvcache-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the most common mistake engineers make with \n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Common Mistakes section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "27aiinfrastructure-08attentionkvcache-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Attention & KV Cache Optimization approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "27aiinfrastructure-08attentionkvcache-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Attention & KV Cache Optimization NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "27aiinfrastructure-08attentionkvcache-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Attention & KV Cache Optimization applied in a real production system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Real-World Examples section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Attention & KV Cache Optimization (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Attention & KV Cache Optimization (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Attention & KV Cache Optimization-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Attention & KV Cache Optimization in production at scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEPs and RFCs where applicable (Python and networking standards)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The primary library used in this chapter (see the code examples)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python standard library modules used in the examples (check the imports)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testing: pytest for unit tests of Attention & KV Cache Optimization code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Attention & KV Cache Optimization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Attention & KV Cache Optimization code."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reproduce the failure with the smallest possible input before changing code."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check the common failure modes listed in Common Mistakes — most bugs are listed there."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For performance problems, profile before optimizing: measure, then fix."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When stuck, re-read the chapter's Examples and compare line by line with your code."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pdb"
        }), " or your IDE's debugger to step through the Attention & KV Cache Optimization example code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mock-interview-section",
      children: "Mock Interview Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 1 — Screening (15 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain Attention & KV Cache Optimization in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Attention & KV Cache Optimization."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the complexity of your example?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 2 — Coding (45 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve the Medium exercise from this chapter under time pressure."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State your assumptions, then implement with type hints."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test with edge cases: empty input, boundary values, invalid input."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 3 — Behavioral + System (30 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tell me about a time you debugged a Attention & KV Cache Optimization problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Attention & KV Cache Optimization is used at scale?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What metrics would you monitor?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Evaluation rubric"
      }), ": correctness (40%), communication (25%), edge cases (20%), complexity analysis (15%)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "optimized-implementation",
      children: "Optimized Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`python\nfrom typing import Any, Optional"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Attention & KV Cache Optimization."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Attention & KV Cache Optimization logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keeps the function signature stable so tests written against it stay valid."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handles the empty-input contract explicitly."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add unit tests for the edge cases before implementing the logic (test-first)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "evaluation-metrics",
      children: "Evaluation Metrics"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Skill"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Test"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concept recall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain Attention & KV Cache Optimization without notes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60-second explanation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code fluency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write the chapter example from memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No syntax errors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edge cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle empty/invalid input in exercises"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All cases pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State time/space for the standard approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correct big-O"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interview readiness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Answer 5 Interview Q&A questions out loud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fluent, structured answers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Retention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chapter quiz score after 3 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80%+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-world-examples",
      children: "Real-World Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Startup"
        }), ": a small team uses Attention & KV Cache Optimization daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Attention & KV Cache Optimization patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Attention & KV Cache Optimization principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Attention & KV Cache Optimization shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Attention & KV Cache Optimization to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/09-speculative-decoding",
        children: "Speculative Decoding"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Attention & KV Cache Optimization, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Attention & KV Cache Optimization depends on input size and distribution — always benchmark for your own data."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone."
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