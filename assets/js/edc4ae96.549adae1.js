"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[60670],{

/***/ 33183
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_27_ai_infrastructure_05_distributed_inference_md_edc_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-27-ai-infrastructure-05-distributed-inference-md-edc.json
const site_docs_courses_ai_engineering_placement_27_ai_infrastructure_05_distributed_inference_md_edc_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/ai-infrastructure/05-distributed-inference","title":"Distributed Inference","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/27-ai-infrastructure/05-distributed-inference.md","sourceDirName":"courses/ai-engineering-placement/27-ai-infrastructure","slug":"/ai-engineering-placement/27-ai-infrastructure/05-distributed-inference","permalink":"/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/05-distributed-inference","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":306,"frontMatter":{"id":"05-distributed-inference","slug":"/ai-engineering-placement/27-ai-infrastructure/05-distributed-inference","title":"Distributed Inference","sidebar_label":"Distributed Inference","sidebar_position":306},"sidebar":"placementSidebar","previous":{"title":"AI Inference Serving","permalink":"/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/04-inference-serving"},"next":{"title":"Model Pruning","permalink":"/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/06-model-pruning"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/27-ai-infrastructure/05-distributed-inference.md


const frontMatter = {
	id: '05-distributed-inference',
	slug: '/ai-engineering-placement/27-ai-infrastructure/05-distributed-inference',
	title: 'Distributed Inference',
	sidebar_label: 'Distributed Inference',
	sidebar_position: 306
};
const contentTitle = 'Distributed Inference';

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
  "value": "1.0 Tensor Parallelism",
  "id": "10-tensor-parallelism",
  "level": 3
}, {
  "value": "1.1 Megatron-LM Column Parallelism",
  "id": "11-megatron-lm-column-parallelism",
  "level": 4
}, {
  "value": "1.2 FFN Layer Sharding",
  "id": "12-ffn-layer-sharding",
  "level": 4
}, {
  "value": "2.0 Pipeline Parallelism",
  "id": "20-pipeline-parallelism",
  "level": 3
}, {
  "value": "2.1 GPipe — Naive Pipeline",
  "id": "21-gpipe--naive-pipeline",
  "level": 4
}, {
  "value": "2.2 Interleaved 1F1B Scheduling",
  "id": "22-interleaved-1f1b-scheduling",
  "level": 4
}, {
  "value": "3.0 Sequence Parallelism",
  "id": "30-sequence-parallelism",
  "level": 3
}, {
  "value": "3.1 Ring Attention",
  "id": "31-ring-attention",
  "level": 4
}, {
  "value": "3.2 Context Parallelism",
  "id": "32-context-parallelism",
  "level": 4
}, {
  "value": "4.0 FSDP (Fully Sharded Data Parallel)",
  "id": "40-fsdp-fully-sharded-data-parallel",
  "level": 3
}, {
  "value": "4.1 FSDP Sharding Strategies",
  "id": "41-fsdp-sharding-strategies",
  "level": 4
}, {
  "value": "5.0 DeepSpeed ZeRO",
  "id": "50-deepspeed-zero",
  "level": 3
}, {
  "value": "5.1 ZeRO Stages",
  "id": "51-zero-stages",
  "level": 4
}, {
  "value": "5.2 ZeRO-Inference",
  "id": "52-zero-inference",
  "level": 4
}, {
  "value": "5.3 ZeRO-Inference Implementation Sketch",
  "id": "53-zero-inference-implementation-sketch",
  "level": 4
}, {
  "value": "6.0 Multi-Node Inference",
  "id": "60-multi-node-inference",
  "level": 3
}, {
  "value": "6.1 NCCL and Network Topology",
  "id": "61-nccl-and-network-topology",
  "level": 4
}, {
  "value": "6.2 All-to-All Communication",
  "id": "62-all-to-all-communication",
  "level": 4
}, {
  "value": "6.3 RDMA and Network Considerations",
  "id": "63-rdma-and-network-considerations",
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
    hr: "hr",
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
        id: "distributed-inference",
        children: "Distributed Inference"
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
            children: "Explain tensor parallelism and how Megatron-LM splits attention heads and FFN layers across GPUs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement pipeline parallelism with GPipe, microbatching, and interleaved scheduling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply sequence parallelism using Ring Attention for long-context inference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configure FSDP sharding strategies (HSD, full shard) for distributed inference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy models with DeepSpeed ZeRO-Inference and offloading to CPU/NVMe"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design multi-node inference clusters with NCCL and optimal network topology"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "1.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tensor Parallelism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Megatron-LM style TP: column/row parallelism, all-reduce, ffn sharding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pipeline Parallelism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPipe, interleaved 1F1B scheduling, microbatch bubble overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequence Parallelism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ring Attention, context parallelism, sequence-dimension sharding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FSDP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fully sharded data parallel, unshard/re-shard, hybrid sharding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DeepSpeed ZeRO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ZeRO stages 1/2/3, ZeRO-Inference, CPU/NVMe offloading"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-Node Inference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NCCL, RDM, network topology, all-to-all communication"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modern LLMs are too large for a single GPU. Llama 3 405B requires 810 GB in FP16. No single GPU has that much memory. Distributed inference splits the model across many GPUs, letting them work together."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Distributed inference differs from distributed training. Inference has no backward pass, no gradient sync, and no optimizer states. The goal is low latency and high throughput, not convergence."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Six parallelism strategies exist: tensor, pipeline, sequence, FSDP, DeepSpeed ZeRO, and multi-node. Each strategy handles the model and data differently. Production systems combine multiple strategies."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Module 09 (Deep Learning) — transformer architecture, attention mechanism, multi-head attention"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Module 27, Chapter 01 — GPU architecture, memory hierarchy, NVLink, PCIe"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Module 27, Chapter 04 — inference serving, batching, KV cache"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of collective communication — all-reduce, all-gather, reduce-scatter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic distributed computing concepts — rank, world size, communication primitives"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Tensor Parallelism (TP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Splitting individual weight tensors across GPUs within a node"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pipeline Parallelism (PP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Splitting model layers across GPUs, each GPU handles sequential stages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sequence Parallelism (SP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sharding the sequence dimension across GPUs for long-context attention"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FSDP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fully Sharded Data Parallel — shards parameters, gradients, optimizer states"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ZeRO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ZeRO Redundancy Optimizer — eliminates memory redundancy across GPUs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All-Reduce"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collective that sums tensors across all ranks and broadcasts the result"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce-Scatter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collective that sums tensors and scatters chunks to each rank"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All-Gather"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collective that gathers full tensor from all ranks to every rank"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Microbatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A small slice of a batch, used in pipeline parallelism"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bubble Overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Idle time in pipeline parallelism due to sequential stage dependencies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ring Attention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed attention that shards the sequence across GPUs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NCCL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NVIDIA Collective Communication Library — GPU-to-GPU comm primitives"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NVLink"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NVIDIA high-bandwidth GPU interconnect (900 GB/s H100)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote Direct Memory access — direct GPU memory access over network"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1F1B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-Forward-One-Backward scheduling for pipeline parallelism"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10-tensor-parallelism",
      children: "1.0 Tensor Parallelism"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tensor parallelism splits each layer's weight tensors across GPUs. All GPUs in a TP group hold different parts of the same layer. They work together on each forward pass."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Megatron-LM pioneered the tensor parallelism approach used by most frameworks. The key idea is to split the matrix multiplications that dominate transformer computation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "11-megatron-lm-column-parallelism",
      children: "1.1 Megatron-LM Column Parallelism"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In the attention layer, the Q, K, V projections are independent matrix multiplies. Each can be split along the column dimension."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given input X of shape [B, S, H] and weight W_Q of shape [H, 3H], column parallelism splits W_Q into W_Q0 and W_Q1, each of shape [H, 3H/2]. GPU 0 computes X @ W_Q0. GPU 1 computes X @ W_Q1."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Input[\"Input X [B, S, H]\"]\n        X0[\"X\"]\n    end\n    subgraph TP_Group[\"Tensor Parallel Group (2 GPUs)\"]\n        subgraph GPU0[\"GPU 0\"]\n            WQ0[\"W_Q shard 0<br/>[H, H/2]\"]\n            WK0[\"W_K shard 0<br/>[H, H/2]\"]\n            WV0[\"W_V shard 0<br/>[H, H/2]\"]\n            Q0[\"Q0 = X @ W_Q0\"]\n            K0[\"K0 = X @ W_K0\"]\n            V0[\"V0 = X @ W_V0\"]\n            WQ0 --> Q0\n            WK0 --> K0\n            WV0 --> V0\n        end\n        subgraph GPU1[\"GPU 1\"]\n            WQ1[\"W_Q shard 1<br/>[H, H/2]\"]\n            WK1[\"W_K shard 1<br/>[H, H/2]\"]\n            WV1[\"W_V shard 1<br/>[H, H/2]\"]\n            Q1[\"Q1 = X @ W_Q1\"]\n            K1[\"K1 = X @ W_K1\"]\n            V1[\"V1 = X @ W_V1\"]\n            WQ1 --> Q1\n            WK1 --> K1\n            WV1 --> V1\n        end\n    end\n    X0 --> GPU0\n    X0 --> GPU1\n    Q0 --> ALLREDUCE[\"All-Reduce<br/>Q = concat(Q0, Q1)\"]\n    Q1 --> ALLREDUCE\n    K0 --> ALLREDUCE2[\"All-Reduce<br/>K = concat(K0, K1)\"]\n    K1 --> ALLREDUCE2\n    V0 --> ALLREDUCE3[\"All-Reduce<br/>V = concat(V0, V1)\"]\n    V1 --> ALLREDUCE3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import torch\nimport torch.nn as nn\nimport torch.distributed as dist\nfrom typing import Tuple, Optional\n\nclass ColumnParallelLinear(nn.Module):\n    \"\"\"\n    Megatron-LM style column-parallel linear layer.\n    Splits weight along the output dimension (columns).\n    Each GPU holds a slice of the output features.\n    \"\"\"\n    def __init__(\n        self,\n        in_features: int,\n        out_features: int,\n        world_size: int = 1,\n        rank: int = 0,\n        bias: bool = True,\n    ):\n        super().__init__()\n        self.world_size = world_size\n        self.rank = rank\n        self.out_features_per_rank = out_features // world_size\n\n        # Each GPU holds only its shard of the weight\n        self.weight = nn.Parameter(\n            torch.randn(self.out_features_per_rank, in_features)\n        )\n        if bias:\n            self.bias = nn.Parameter(\n                torch.randn(self.out_features_per_rank)\n            )\n        else:\n            self.bias = None\n\n    def forward(self, x: torch.Tensor) -> torch.Tensor:\n        \"\"\"\n        Forward: local matmul, then all-gather to combine outputs.\n        shape: x[B, S, H] -> local[B, S, H/world_size] -> combined[B, S, H]\n        \"\"\"\n        # Local computation on shard\n        local_output = torch.matmul(x, self.weight.t())\n        if self.bias is not None:\n            local_output = local_output + self.bias\n\n        # All-gather: combine outputs from all GPUs\n        outputs = [torch.zeros_like(local_output) for _ in range(self.world_size)]\n        dist.all_gather(outputs, local_output)\n        return torch.cat(outputs, dim=-1)\n\nclass RowParallelLinear(nn.Module):\n    \"\"\"\n    Megatron-LM style row-parallel linear layer.\n    Splits weight along the input dimension (rows).\n    Each GPU holds a slice of the input features.\n    Output requires all-reduce across GPUs.\n    \"\"\"\n    def __init__(\n        self,\n        in_features: int,\n        out_features: int,\n        world_size: int = 1,\n        rank: int = 0,\n        bias: bool = True,\n    ):\n        super().__init__()\n        self.world_size = world_size\n        self.rank = rank\n        self.in_features_per_rank = in_features // world_size\n\n        self.weight = nn.Parameter(\n            torch.randn(out_features, self.in_features_per_rank)\n        )\n        if bias:\n            self.bias = nn.Parameter(torch.randn(out_features))\n        else:\n            self.bias = None\n\n    def forward(self, x: torch.Tensor) -> torch.Tensor:\n        \"\"\"\n        Forward: local matmul on input shard, then all-reduce.\n        x[B, S, H/world_size] -> local[B, S, H] -> all-reduce[B, S, H]\n        \"\"\"\n        local_output = torch.matmul(x, self.weight.t())\n        if self.bias is not None:\n            local_output = local_output + self.bias\n\n        # All-reduce: sum partial results across GPUs\n        dist.all_reduce(local_output)\n        return local_output\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "12-ffn-layer-sharding",
      children: "1.2 FFN Layer Sharding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The feed-forward network (FFN) in a transformer has two linear layers with a GeLU activation. Megatron-LM splits the first FFN layer with column parallelism and the second with row parallelism."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class TensorParallelFFN(nn.Module):\n    \"\"\"\n    Megatron-LM tensor-parallel feed-forward network.\n    First linear: column parallel (split output dims).\n    Activation: GeLU applied locally on each GPU.\n    Second linear: row parallel (split input dims, all-reduce output).\n    \"\"\"\n    def __init__(\n        self,\n        hidden_size: int,\n        intermediate_size: int,\n        world_size: int = 1,\n        rank: int = 0,\n    ):\n        super().__init__()\n        self.rank = rank\n        self.world_size = world_size\n\n        # Column parallel: splits intermediate dimension\n        self.gate_proj = ColumnParallelLinear(\n            hidden_size, intermediate_size, world_size, rank\n        )\n        self.up_proj = ColumnParallelLinear(\n            hidden_size, intermediate_size, world_size, rank\n        )\n        # Row parallel: splits input (intermediate) dimension\n        self.down_proj = RowParallelLinear(\n            intermediate_size, hidden_size, world_size, rank\n        )\n\n    def forward(self, x: torch.Tensor) -> torch.Tensor:\n        \"\"\"\n        FFN = down_proj(GeLU(gate_proj(x)) * up_proj(x))\n        Each projection is distributed across GPUs.\n        \"\"\"\n        gate = self.gate_proj(x)\n        up = self.up_proj(x)\n        # SiLU activation (common in Llama architectures)\n        hidden = torch.nn.functional.silu(gate) * up\n        return self.down_proj(hidden)\n\nclass TensorParallelAttention(nn.Module):\n    \"\"\"\n    Multi-head attention with tensor parallelism.\n    QKV projections: column parallel (split heads across GPUs).\n    Output projection: row parallel (all-reduce partial outputs).\n    Each GPU holds num_heads / world_size heads.\n    \"\"\"\n    def __init__(\n        self,\n        hidden_size: int,\n        num_heads: int,\n        world_size: int = 1,\n        rank: int = 0,\n    ):\n        super().__init__()\n        self.rank = rank\n        self.world_size = world_size\n        self.num_heads = num_heads\n        self.head_dim = hidden_size // num_heads\n        self.num_heads_per_rank = num_heads // world_size\n\n        # Column parallel QKV projection\n        self.qkv_proj = ColumnParallelLinear(\n            hidden_size, 3 * hidden_size, world_size, rank\n        )\n        # Row parallel output projection\n        self.output_proj = RowParallelLinear(\n            hidden_size, hidden_size, world_size, rank\n        )\n\n    def forward(\n        self,\n        x: torch.Tensor,\n        attention_mask: Optional[torch.Tensor] = None,\n    ) -> torch.Tensor:\n        B, S, H = x.shape\n\n        # Compute Q, K, V on local GPU shard\n        qkv = self.qkv_proj(x)  # [B, S, 3 * H]\n        qkv = qkv.reshape(B, S, 3, self.num_heads_per_rank, self.head_dim)\n        q, k, v = qkv.unbind(dim=2)  # Each: [B, S, H_per_rank, D]\n\n        # Local attention on sharded heads\n        scale = self.head_dim ** -0.5\n        attn_weights = torch.matmul(q, k.transpose(-2, -1)) * scale\n        if attention_mask is not None:\n            attn_weights = attn_weights + attention_mask\n        attn_weights = torch.nn.functional.softmax(attn_weights, dim=-1)\n        attn_output = torch.matmul(attn_weights, v)  # [B, S, H_per_rank, D]\n\n        # Reshape and project output (row parallel with all-reduce)\n        attn_output = attn_output.reshape(B, S, -1)\n        return self.output_proj(attn_output)\n\n# Communication cost model for tensor parallelism\ndef tp_communication_cost(\n    hidden_size: int,\n    sequence_length: int,\n    batch_size: int,\n    world_size: int,\n    bandwidth: float = 900.0,  # NVLink bandwidth in GB/s\n) -> float:\n    \"\"\"\n    Estimate all-reduce communication time per transformer layer.\n    Each all-reduce transfers 2 * (B * S * H) bytes (send + receive).\n    \"\"\"\n    bytes_per_element = 2  # FP16\n    # All-reduce on output projection: each rank sends/receives full output\n    message_size = batch_size * sequence_length * hidden_size * bytes_per_element\n    # All-reduce bandwidth = bandwidth * (world_size - 1) / world_size\n    effective_bw = bandwidth * (world_size - 1) / world_size\n    # Time in microseconds\n    time_us = (2 * message_size / effective_bw) * 1e6\n    return time_us\n\n# Example: Llama 3 70B, sequence length 4096, batch 1, 8 GPUs\nlatency = tp_communication_cost(\n    hidden_size=8192,\n    sequence_length=4096,\n    batch_size=1,\n    world_size=8,\n    bandwidth=900.0,  # NVLink H100\n)\nprint(f\"TP all-reduce latency per layer: {latency:.1f} us\")\nprint(f\"80 layers total: {latency * 80 / 1000:.1f} ms\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "20-pipeline-parallelism",
      children: "2.0 Pipeline Parallelism"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pipeline parallelism splits the model's layers into stages. Each GPU holds a contiguous block of layers. The input passes through stages sequentially."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Simple pipelining leaves most GPUs idle — the pipeline bubble. GPipe and interleaved 1F1B scheduling reduce this bubble."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "21-gpipe--naive-pipeline",
      children: "2.1 GPipe — Naive Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GPipe divides the batch into microbatches. Each microbatch flows through the pipeline. After all microbatches complete, gradients accumulate (for training) or outputs combine (for inference)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Stage0[\"Stage 0: GPU 0 (Layers 1-8)\"]\n        S0_L1[\"Layer 1\"]\n        S0_L2[\"Layer 2\"]\n        S0_L3[\"... Layer 8\"]\n    end\n    subgraph Stage1[\"Stage 1: GPU 1 (Layers 9-16)\"]\n        S1_L9[\"Layer 9\"]\n        S1_L10[\"... Layer 16\"]\n    end\n    subgraph Stage2[\"Stage 2: GPU 2 (Layers 17-24)\"]\n        S2_L17[\"Layer 17\"]\n        S2_L18[\"... Layer 24\"]\n    end\n    subgraph Stage3[\"Stage 3: GPU 3 (Layers 25-32)\"]\n        S3_L25[\"Layer 25\"]\n        S3_L26[\"... Layer 32\"]\n    end\n\n    Input[\"Microbatch 1\"] --> Stage0\n    Stage0 --> Stage1\n    Stage1 --> Stage2\n    Stage2 --> Stage3\n    Stage3 --> Output1[\"Output 1\"]\n\n    Input2[\"Microbatch 2\"] -.-> Stage0\n    Input3[\"Microbatch 3\"] -.-> Stage0\n    Input4[\"Microbatch 4\"] -.-> Stage0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bubble overhead calculation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With P pipeline stages and M microbatches, the bubble fraction is:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Bubble fraction = (P - 1) / (M + P - 1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For P=4 stages and M=8 microbatches:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bubble fraction = 3 / (8 + 3) = 3/11 = 27.3%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPU utilization = 72.7%"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def gpipe_bubble_overhead(\n    num_stages: int,\n    num_microbatches: int,\n) -> dict:\n    \"\"\"\n    Calculate GPipe pipeline bubble overhead.\n    The bubble is idle time when GPUs wait for the pipeline to fill/drain.\n\n    Formula:\n    bubble_fraction = (P - 1) / (M + P - 1)\n\n    where P = num_stages, M = num_microbatches\n    \"\"\"\n    bubble_fraction = (num_stages - 1) / (num_microbatches + num_stages - 1)\n    gpu_utilization = 1.0 - bubble_fraction\n\n    return {\n        \"num_stages\": num_stages,\n        \"num_microbatches\": num_microbatches,\n        \"bubble_fraction\": bubble_fraction * 100,\n        \"gpu_utilization\": gpu_utilization * 100,\n        \"ideal_speedup\": num_stages * gpu_utilization,\n    }\n\n# Analyze bubble overhead for different configurations\nconfigs = [\n    (4, 8),    # 4 stages, 8 microbatches\n    (4, 32),   # 4 stages, 32 microbatches\n    (8, 16),   # 8 stages, 16 microbatches\n    (8, 64),   # 8 stages, 64 microbatches\n    (16, 32),  # 16 stages, 32 microbatches\n]\n\nprint(f\"{'Stages':<10} {'Microbatches':<15} {'Bubble %':<12} {'Utilization %':<15} {'Effective Speedup':<18}\")\nprint(\"=\"*70)\nfor stages, mbs in configs:\n    result = gpipe_bubble_overhead(stages, mbs)\n    print(f\"{stages:<10} {mbs:<15} {result['bubble_fraction']:<12.1f} \"\n          f\"{result['gpu_utilization']:<15.1f} {result['ideal_speedup']:<18.2f}\")\n\n# Key insight: more microbatches reduces bubble overhead\n# But more stages increases it — the warmup/cooldown phases dominate\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "22-interleaved-1f1b-scheduling",
      children: "2.2 Interleaved 1F1B Scheduling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Interleaved 1F1B (One-Forward-One-Backward) scheduling reduces the bubble by overlapping computation. Each GPU alternates between forward and backward passes."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For inference (no backward pass), 1F1B still helps by overlapping communication with computation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant GPU0 as GPU 0 (L1-8)\n    participant GPU1 as GPU 1 (L9-16)\n    participant GPU2 as GPU 2 (L17-24)\n    participant GPU3 as GPU 3 (L25-32)\n\n    Note over GPU0,GPU3: Warmup Phase\n    GPU0->>GPU1: F(mb0)\n    GPU1->>GPU2: F(mb0)\n    GPU2->>GPU3: F(mb0)\n\n    Note over GPU0,GPU3: Steady State (1F1B)\n    GPU0->>GPU1: F(mb1)\n    GPU1->>GPU2: F(mb1)\n    GPU2->>GPU3: F(mb1)\n    GPU3-->>GPU2: Output 0\n\n    GPU0->>GPU1: F(mb2)\n    GPU1->>GPU2: F(mb2)\n    GPU2->>GPU3: F(mb2)\n    GPU3-->>GPU2: Output 1\n\n    Note over GPU0,GPU3: Cooldown Phase\n    GPU3-->>GPU2: Output 2\n    GPU2-->>GPU1: Output 3\n    GPU1-->>GPU0: Output 4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class PipelineInferenceEngine:\n    \"\"\"\n    Simulate pipeline parallelism for inference.\n    Each GPU holds a contiguous block of layers.\n    Microbatches flow through stages sequentially.\n    \"\"\"\n    def __init__(self, num_stages: int, num_layers_per_stage: int):\n        self.num_stages = num_stages\n        self.num_layers_per_stage = num_layers_per_stage\n        self.total_layers = num_stages * num_layers_per_stage\n\n    def simulate_inference(\n        self,\n        num_microbatches: int,\n        layer_time_us: float = 100.0,  # Time per layer in microseconds\n    ) -> dict:\n        \"\"\"\n        Simulate pipeline-parallel inference timing.\n        Returns latency and throughput metrics.\n        \"\"\"\n        stage_time = self.num_layers_per_stage * layer_time_us\n\n        # Warmup: first microbatch flows through all stages\n        warmup_time = self.num_stages * stage_time\n\n        # Steady state: remaining microbatches flow with overlap\n        steady_time = (num_microbatches - 1) * stage_time\n\n        # Cooldown: last microbatch drains through stages\n        cooldown_time = (self.num_stages - 1) * stage_time\n\n        total_time = warmup_time + steady_time + cooldown_time\n\n        # Ideal time (no pipeline): all layers on one GPU\n        ideal_time = num_microbatches * self.total_layers * layer_time_us\n\n        # Bubble: idle GPU time\n        bubble_per_stage = (\n            (self.num_stages - 1) * stage_time  # warmup wait\n            + (self.num_stages - 1) * stage_time  # cooldown wait\n        )\n        total_bubble = bubble_per_stage * self.num_stages\n\n        return {\n            \"warmup_us\": warmup_time,\n            \"steady_state_us\": steady_time,\n            \"cooldown_us\": cooldown_time,\n            \"total_us\": total_time,\n            \"ideal_us\": ideal_time,\n            \"bubble_us\": total_bubble,\n            \"throughput\": num_microbatches / total_time * 1e6,  # microbatches/sec\n            \"efficiency\": ideal_time / total_time * 100,\n        }\n\n    def interleaved_schedule(\n        self,\n        num_microbatches: int,\n        layer_time_us: float = 100.0,\n    ) -> dict:\n        \"\"\"\n        Interleaved 1F1B scheduling for inference.\n        Each GPU gets multiple layer chunks for better load balancing.\n        Interleaving factor = how many chunks per GPU.\n        \"\"\"\n        interleave_factor = 2\n        chunk_time = (\n            self.num_layers_per_stage // interleave_factor * layer_time_us\n        )\n\n        # In interleaved mode, warmup is shorter because chunks are smaller\n        warmup = self.num_stages * chunk_time\n        steady = (num_microbatches - 1) * chunk_time\n        cooldown = (self.num_stages - 1) * chunk_time\n        total = warmup + steady + cooldown\n\n        ideal = num_microbatches * self.total_layers * layer_time_us\n\n        return {\n            \"type\": \"interleaved\",\n            \"interleave_factor\": interleave_factor,\n            \"total_us\": total,\n            \"ideal_us\": ideal,\n            \"efficiency\": ideal / total * 100,\n            \"throughput\": num_microbatches / total * 1e6,\n        }\n\n# Compare GPipe vs interleaved\nengine = PipelineInferenceEngine(num_stages=8, num_layers_per_stage=4)\n\nprint(\"Pipeline Parallelism Comparison (8 stages, 32 microbatches)\")\nprint(\"=\"*60)\n\ngpipe_result = engine.simulate_inference(num_microbatches=32)\nprint(f\"\\nGPipe:\")\nprint(f\"  Total time:  {gpipe_result['total_us']:.0f} us\")\nprint(f\"  Efficiency:  {gpipe_result['efficiency']:.1f}%\")\nprint(f\"  Throughput:  {gpipe_result['throughput']:.0f} microbatches/sec\")\n\ninterleaved_result = engine.interleaved_schedule(num_microbatches=32)\nprint(f\"\\nInterleaved 1F1B:\")\nprint(f\"  Total time:  {interleaved_result['total_us']:.0f} us\")\nprint(f\"  Efficiency:  {interleaved_result['efficiency']:.1f}%\")\nprint(f\"  Throughput:  {interleaved_result['throughput']:.0f} microbatches/sec\")\n\n# Key insight: interleaved scheduling reduces bubble by\n# making each stage's work chunk smaller, filling the pipeline faster\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "30-sequence-parallelism",
      children: "3.0 Sequence Parallelism"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sequence parallelism shards the sequence dimension across GPUs. This is critical for long-context inference (128K+ tokens)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Standard attention computes O = softmax(Q @ K^T / sqrt(d)) @ V. The Q@K^T matrix has shape [S, S]. For S=128K, this is 128K^2 = 16B entries — too large for one GPU's memory."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "31-ring-attention",
      children: "3.1 Ring Attention"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ring Attention distributes the sequence across GPUs in a ring. Each GPU holds a contiguous block of the sequence. GPUs rotate their K and V blocks around the ring."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Ring[\"Ring Attention — Sequence Parallelism\"]\n        direction LR\n        GPU0[\"GPU 0<br/>Seq [0, S/4)<br/>Q0, K0, V0\"] --> GPU1\n        GPU1[\"GPU 1<br/>Seq [S/4, S/2)<br/>Q1, K1, V1\"] --> GPU2\n        GPU2[\"GPU 2<br/>Seq [S/2, 3S/4)<br/>Q2, K2, V2\"] --> GPU3\n        GPU3[\"GPU 3<br/>Seq [3S/4, S)<br/>Q3, K3, V3\"] --> GPU0\n\n        KV0[\"K0, V0 rotates --> GPU1\"]\n        KV1[\"K1, V1 rotates --> GPU2\"]\n        KV2[\"K2, V2 rotates --> GPU3\"]\n        KV3[\"K3, V3 rotates --> GPU0\"]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RingAttentionBlock:\n    \"\"\"\n    Simulate ring attention for long-context inference.\n    Each GPU holds a contiguous block of the sequence.\n    K/V blocks rotate around the ring for full attention.\n    \"\"\"\n    def __init__(\n        self,\n        rank: int,\n        world_size: int,\n        hidden_size: int,\n        num_heads: int,\n    ):\n        self.rank = rank\n        self.world_size = world_size\n        self.hidden_size = hidden_size\n        self.num_heads = num_heads\n        self.head_dim = hidden_size // num_heads\n\n    def ring_attention_forward(\n        self,\n        q_local: torch.Tensor,\n        k_local: torch.Tensor,\n        v_local: torch.Tensor,\n        num_ring_steps: Optional[int] = None,\n    ) -> torch.Tensor:\n        \"\"\"\n        Ring attention forward pass.\n        Each step: receive KV from predecessor, send KV to successor.\n        Accumulate attention scores across all sequence blocks.\n\n        Args:\n            q_local: [B, S_local, H] — local query block\n            k_local: [B, S_local, H] — local key block\n            v_local: [B, S_local, H] — local value block\n            num_ring_steps: number of rotation steps (default: world_size)\n\n        Returns:\n            output: [B, S_local, H] — attention output for local block\n        \"\"\"\n        if num_ring_steps is None:\n            num_ring_steps = self.world_size\n\n        B, S_local, H = q_local.shape\n        scale = self.head_dim ** -0.5\n\n        # Reshape for multi-head attention\n        q = q_local.reshape(B, S_local, self.num_heads, self.head_dim)\n        k = k_local.reshape(B, S_local, self.num_heads, self.head_dim)\n        v = v_local.reshape(B, S_local, self.num_heads, self.head_dim)\n\n        # Initialize output and softmax statistics\n        output_local = torch.zeros_like(q)\n        attn_sum = torch.zeros(B, self.num_heads, S_local, 1)\n        max_score = torch.full(\n            (B, self.num_heads, S_local, 1), float('-inf')\n        )\n\n        # Current KV block — starts with local\n        k_curr = k\n        v_curr = v\n\n        for step in range(num_ring_steps):\n            # Compute local attention scores for current KV block\n            # Q from this GPU, K/V from current block\n            attn = torch.matmul(q, k_curr.transpose(-2, -1)) * scale\n            # attn shape: [B, num_heads, S_local, S_local]\n\n            # Safe softmax with online rescaling (stabilized)\n            block_max = attn.max(dim=-1, keepdim=True).values\n            max_score = torch.maximum(max_score, block_max)\n\n            exp_attn = torch.exp(attn - max_score)\n            attn_sum = attn_sum + exp_attn.sum(dim=-1, keepdim=True)\n\n            # Weighted sum of values\n            exp_weights = torch.exp(attn - block_max)\n            weighted = torch.matmul(exp_weights, v_curr)\n            output_local = output_local + weighted\n\n            # Rotate KV: send to next rank, receive from previous\n            if step < num_ring_steps - 1:\n                # In a real system: P2P send/recv of KV blocks\n                # k_curr = recv(from_prev)\n                # v_curr = recv(from_prev)\n                # send(k_curr, to_next)\n                # send(v_curr, to_next)\n                pass  # Communication happens here\n\n        # Normalize output by accumulated softmax sum\n        output_local = output_local / attn_sum\n\n        return output_local.reshape(B, S_local, H)\n\n    def communication_cost(\n        self,\n        sequence_length: int,\n        batch_size: int,\n        bandwidth: float = 900.0,  # NVLink GB/s\n    ) -> dict:\n        \"\"\"\n        Calculate ring attention communication cost per step.\n        Each step: send (K, V) of size S_local * H * 2 bytes each.\n        \"\"\"\n        bytes_per_element = 2  # FP16\n        S_local = sequence_length // self.world_size\n        kv_size = batch_size * S_local * self.hidden_size * bytes_per_element\n\n        # Each ring step sends K and V\n        transfer_per_step = 2 * kv_size\n        total_transfer = transfer_per_step * (self.world_size - 1)\n\n        time_per_step_us = (transfer_per_step / bandwidth) * 1e6\n        total_time_us = (total_transfer / bandwidth) * 1e6\n\n        return {\n            \"kv_per_step_mb\": transfer_per_step / 1e6,\n            \"total_transfer_mb\": total_transfer / 1e6,\n            \"time_per_step_us\": time_per_step_us,\n            \"total_time_us\": total_time_us,\n            \"ring_steps\": self.world_size,\n        }\n\n# Example: Llama 3 70B, 128K sequence, 8 GPUs\nseq_parallel = RingAttentionBlock(\n    rank=0, world_size=8,\n    hidden_size=8192, num_heads=64,\n)\n\ncost = seq_parallel.communication_cost(\n    sequence_length=131072,\n    batch_size=1,\n    bandwidth=900.0,\n)\nprint(\"Ring Attention Communication Cost (128K sequence, 8 GPUs)\")\nprint(f\"  KV transfer per step: {cost['kv_per_step_mb']:.1f} MB\")\nprint(f\"  Total transfer:       {cost['total_transfer_mb']:.1f} MB\")\nprint(f\"  Time per step:        {cost['time_per_step_us']:.1f} us\")\nprint(f\"  Total time:           {cost['total_time_us']:.1f} us\")\n\n# Without sequence parallelism: O(S^2) attention memory\n# With sequence parallelism: O(S^2 / world_size) memory per GPU\nmemory_without_sp = (131072 ** 2) * 2  # FP16 attention scores in bytes\nmemory_with_sp = memory_without_sp / 8\nprint(f\"\\n  Attention memory (no SP): {memory_without_sp / 1e9:.1f} GB\")\nprint(f\"  Attention memory (with SP): {memory_with_sp / 1e9:.1f} GB\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "32-context-parallelism",
      children: "3.2 Context Parallelism"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Context parallelism is an alternative approach. It shards the sequence across GPUs but uses all-gather for Q and reduce-scatter for the attention output. This is the approach used by frameworks like DeepSpeed-Ulysses."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ContextParallelAttention:\n    \"\"\"\n    Context parallelism via all-gather / reduce-scatter.\n    Q is all-gathered so each GPU sees all query tokens.\n    K, V remain local. Output is reduce-scattered back.\n    \"\"\"\n    def __init__(\n        self,\n        rank: int,\n        world_size: int,\n        hidden_size: int,\n        num_heads: int,\n    ):\n        self.rank = rank\n        self.world_size = world_size\n        self.hidden_size = hidden_size\n        self.num_heads = num_heads\n        self.head_dim = hidden_size // num_heads\n\n    def forward(\n        self,\n        q_local: torch.Tensor,\n        k_local: torch.Tensor,\n        v_local: torch.Tensor,\n    ) -> torch.Tensor:\n        \"\"\"\n        Context-parallel attention.\n\n        Step 1: All-gather Q across all GPUs.\n                 Now each GPU has full Q [B, S, H].\n        Step 2: Compute local attention with local K, V.\n        Step 3: Reduce-scatter output back to each GPU.\n\n        This doubles the communication vs ring attention\n        but allows simpler load balancing.\n        \"\"\"\n        B, S_local, H = q_local.shape\n        S = S_local * self.world_size\n        scale = self.head_dim ** -0.5\n\n        # Step 1: All-gather Q (each GPU gets full sequence Q)\n        q_full_shape = (B, S, H)\n        q_full = torch.zeros(q_full_shape)\n        # dist.all_gather(q_full, q_local)  # Actual call\n        # Simulated: just reshape\n        q_full = q_local  # placeholder for illustration\n\n        # Step 2: Local attention with local K, V\n        q = q_full.reshape(B, S, self.num_heads, self.head_dim)\n        k = k_local.reshape(B, S_local, self.num_heads, self.head_dim)\n        v = v_local.reshape(B, S_local, self.num_heads, self.head_dim)\n\n        # Local attention scores\n        attn = torch.matmul(q, k.transpose(-2, -1)) * scale\n        attn = torch.nn.functional.softmax(attn, dim=-1)\n        local_output = torch.matmul(attn, v)  # [B, S, H_per_rank, D]\n\n        # Step 3: Reduce-scatter output\n        # dist.reduce_scatter(output_local, local_output)\n        return local_output.reshape(B, S, -1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "40-fsdp-fully-sharded-data-parallel",
      children: "4.0 FSDP (Fully Sharded Data Parallel)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FSDP shards model parameters, gradients, and optimizer states across GPUs. During forward pass, FSDP unshards the parameters for the current layer. After the layer, it reshards them."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For inference, FSDP only shards parameters (no gradients or optimizer states). This reduces memory per GPU from O(model) to O(model / world_size)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "41-fsdp-sharding-strategies",
      children: "4.1 FSDP Sharding Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph NoShard[\"No Sharding (DDP)\"]\n        NS1[\"GPU 0: Full params (14 GB)\"]\n        NS2[\"GPU 1: Full params (14 GB)\"]\n        NS3[\"GPU 2: Full params (14 GB)\"]\n        NS4[\"GPU 3: Full params (14 GB)\"]\n    end\n    subgraph FullShard[\"Full Sharding (FSDP)\"]\n        FS1[\"GPU 0: Params shard 0 (3.5 GB)\"]\n        FS2[\"GPU 1: Params shard 1 (3.5 GB)\"]\n        FS3[\"GPU 2: Params shard 2 (3.5 GB)\"]\n        FS4[\"GPU 3: Params shard 3 (3.5 GB)\"]\n    end\n    subgraph Hybrid[\"Hybrid Shard (HSD)\"]\n        HS1[\"Node 0 GPU 0: Shard 0\"]\n        HS2[\"Node 0 GPU 1: Shard 0 replica\"]\n        HS3[\"Node 1 GPU 2: Shard 1\"]\n        HS4[\"Node 1 GPU 3: Shard 1 replica\"]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import math\nfrom enum import Enum\nfrom typing import List, Optional\n\nclass ShardingStrategy(Enum):\n    \"\"\"FSDP sharding strategies.\"\"\"\n    NO_SHARD = \"no_shard\"       # DDP — full params on each GPU\n    FULL_SHARD = \"full_shard\"   # FSDP — params sharded across all GPUs\n    HYBRID_SHARD = \"hybrid\"     # HSD — shard across nodes, replicate within\n\nclass FSDPConfig:\n    \"\"\"\n    Configuration for FSDP distributed inference.\n    Controls how model parameters are sharded across GPUs.\n    \"\"\"\n    def __init__(\n        self,\n        model_size_bytes: int,\n        num_gpus: int,\n        num_nodes: int = 1,\n        strategy: ShardingStrategy = ShardingStrategy.FULL_SHARD,\n    ):\n        self.model_size = model_size_bytes\n        self.num_gpus = num_gpus\n        self.num_nodes = num_nodes\n        self.strategy = strategy\n\n    def per_gpu_memory(self) -> dict:\n        \"\"\"\n        Calculate memory usage per GPU for each sharding strategy.\n        Returns memory for parameters and overhead.\n        \"\"\"\n        gpus_per_node = self.num_gpus // self.num_nodes\n\n        if self.strategy == ShardingStrategy.NO_SHARD:\n            param_memory = self.model_size\n        elif self.strategy == ShardingStrategy.FULL_SHARD:\n            param_memory = self.model_size / self.num_gpus\n        elif self.strategy == ShardingStrategy.HYBRID_SHARD:\n            # Shard across nodes, replicate within node\n            param_memory = self.model_size / self.num_nodes\n        else:\n            param_memory = self.model_size\n\n        # Unshard overhead: peak memory during forward pass\n        # FSDP unshards one layer at a time\n        # Peak = sharded_params + one unsharded layer\n        total_layers = 80  # Llama 3 70B\n        layer_size = self.model_size / total_layers\n        peak_memory = param_memory + layer_size\n\n        return {\n            \"strategy\": self.strategy.value,\n            \"param_memory_gb\": param_memory / 1e9,\n            \"layer_size_gb\": layer_size / 1e9,\n            \"peak_memory_gb\": peak_memory / 1e9,\n            \"savings_vs_ddp\": (1 - param_memory / self.model_size) * 100,\n        }\n\n    def unshard_overhead(self) -> dict:\n        \"\"\"\n        Calculate communication overhead of unshard/re-shard.\n        Each layer requires an all-gather (unshard) and\n        a reduce-scatter (reshard) during forward pass.\n        \"\"\"\n        params_per_layer = self.model_size / 80  # 80 layers\n        bytes_per_element = 2  # FP16\n\n        if self.strategy == ShardingStrategy.FULL_SHARD:\n            # Each GPU holds 1/world_size of params\n            shard_per_layer = params_per_layer / self.num_gpus\n            # All-gather: gather full layer from all GPUs\n            transfer_per_layer = params_per_layer * (self.num_gpus - 1) / self.num_gpus\n        elif self.strategy == ShardingStrategy.HYBRID_SHARD:\n            gpus_per_node = self.num_gpus // self.num_nodes\n            shard_per_layer = params_per_layer / self.num_nodes\n            transfer_per_layer = params_per_layer * (self.num_nodes - 1) / self.num_nodes\n        else:\n            transfer_per_layer = 0  # No sharding\n\n        total_transfer = transfer_per_layer * 80  # All layers\n\n        return {\n            \"transfer_per_layer_mb\": transfer_per_layer / 1e6,\n            \"total_transfer_gb\": total_transfer / 1e9,\n        }\n\n# Compare FSDP strategies for Llama 3 70B on 8 GPUs\nmodel_bytes = 70 * 1e9 * 2  # 70B params * 2 bytes (FP16)\n\nprint(\"FSDP Memory Analysis — Llama 3 70B\")\nprint(\"=\"*65)\n\nfor strategy in ShardingStrategy:\n    config = FSDPConfig(\n        model_size_bytes=model_bytes,\n        num_gpus=8,\n        num_nodes=2,\n        strategy=strategy,\n    )\n    mem = config.per_gpu_memory()\n    overhead = config.unshard_overhead()\n    print(f\"\\n{strategy.value.upper()}:\")\n    print(f\"  Param memory/GPU:  {mem['param_memory_gb']:.2f} GB\")\n    print(f\"  Peak memory/GPU:   {mem['peak_memory_gb']:.2f} GB\")\n    print(f\"  Savings vs DDP:    {mem['savings_vs_ddp']:.1f}%\")\n    print(f\"  Transfer/layer:    {overhead['transfer_per_layer_mb']:.1f} MB\")\n\nclass FSDPWrappedLayer(nn.Module):\n    \"\"\"\n    Simulate an FSDP-wrapped transformer layer.\n    Shows the unshard → forward → reshard pattern.\n    \"\"\"\n    def __init__(\n        self,\n        layer: nn.Module,\n        rank: int,\n        world_size: int,\n    ):\n        super().__init__()\n        self.layer = layer\n        self.rank = rank\n        self.world_size = world_size\n        self.sharded_params = {}  # Local shard of parameters\n\n    def unshard(self):\n        \"\"\"\n        All-gather full parameters from all GPUs.\n        Before forward: reconstruct full layer weights.\n        \"\"\"\n        for name, param in self.layer.named_parameters():\n            # All-gather: combine shards from all GPUs\n            full_param = torch.zeros_like(param)\n            # dist.all_gather_into_tensor(full_param, param)\n            # In real FSDP: this populates the full parameter\n            param.data = full_param\n        print(f\"  [Rank {self.rank}] Unsharded layer — full params ready\")\n\n    def reshard(self):\n        \"\"\"\n        Freeze and discard full parameters, keep only local shard.\n        After forward: reclaim memory by dropping full params.\n        \"\"\"\n        for name, param in self.layer.named_parameters():\n            # Keep only the local shard\n            # param.data = self.sharded_params[name]\n            pass\n        import torch.cuda\n        torch.cuda.empty_cache()\n        print(f\"  [Rank {self.rank}] Resharded — memory freed\")\n\n    def forward(self, x: torch.Tensor) -> torch.Tensor:\n        \"\"\"\n        FSDP forward pass: unshard → compute → reshard.\n        \"\"\"\n        # Step 1: Unshard parameters (all-gather)\n        self.unshard()\n\n        # Step 2: Forward through the layer\n        output = self.layer(x)\n\n        # Step 3: Reshard (free full parameters)\n        self.reshard()\n\n        return output\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "50-deepspeed-zero",
      children: "5.0 DeepSpeed ZeRO"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DeepSpeed ZeRO (Zero Redundancy Optimizer) removes memory redundancy across GPUs. ZeRO has three stages, each eliminating more redundancy."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For inference, ZeRO-Inference applies stage 3 partitioning to parameters. It can also offload parameters to CPU or NVMe when GPU memory is insufficient."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "51-zero-stages",
      children: "5.1 ZeRO Stages"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph ZeRO1[\"ZeRO Stage 1 — Optimizer States\"]\n        Z1[\"Optimizer states<br/>partitioned across GPUs<br/>Gradients + params: replicated\"]\n    end\n    subgraph ZeRO2[\"ZeRO Stage 2 — Gradients\"]\n        Z2[\"Gradients<br/>partitioned across GPUs<br/>Optimizer states: partitioned<br/>Params: replicated\"]\n    end\n    subgraph ZeRO3[\"ZeRO Stage 3 — Parameters\"]\n        Z3[\"Parameters<br/>partitioned across GPUs<br/>Gradients: partitioned<br/>Optimizer states: partitioned\"]\n    end\n    subgraph ZeROInf[\"ZeRO-Inference\"]\n        ZI[\"Parameters: partitioned<br/>Offload to CPU/NVMe<br/>On-demand unshard\"]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ZeROConfig:\n    \"\"\"\n    DeepSpeed ZeRO memory analysis for inference.\n    Calculates memory per GPU for each ZeRO stage.\n    \"\"\"\n    def __init__(\n        self,\n        num_params: int = 70e9,       # 70B model\n        bytes_per_param: int = 2,     # FP16\n        num_gpus: int = 8,\n        optimizer_states_per_param: int = 0,  # No optimizer for inference\n    ):\n        self.num_params = num_params\n        self.bytes_per_param = bytes_per_param\n        self.num_gpus = num_gpus\n\n    def memory_per_gpu(self, stage: int) -> dict:\n        \"\"\"\n        Calculate memory per GPU for a given ZeRO stage.\n\n        Stage 1: Optimizer states partitioned (N/A for inference).\n                 Parameters and gradients replicated.\n        Stage 2: Gradients partitioned.\n                 Parameters replicated (N/A for inference).\n        Stage 3: Parameters partitioned.\n                 This is the main inference stage.\n        \"\"\"\n        param_bytes = self.num_params * self.bytes_per_param\n        grad_bytes = self.num_params * self.bytes_per_param  # Same size as params\n        opt_bytes = 0  # No optimizer states for inference\n\n        if stage == 0:\n            # DDP: full params + grads + opt on each GPU\n            total = param_bytes + grad_bytes + opt_bytes\n        elif stage == 1:\n            # ZeRO-1: optimizer states partitioned\n            total = param_bytes + grad_bytes + (opt_bytes / self.num_gpus)\n        elif stage == 2:\n            # ZeRO-2: gradients partitioned, optimizer partitioned\n            total = param_bytes + (grad_bytes / self.num_gpus) + (opt_bytes / self.num_gpus)\n        elif stage == 3:\n            # ZeRO-3: parameters, gradients, optimizer all partitioned\n            total = (param_bytes + grad_bytes + opt_bytes) / self.num_gpus\n        else:\n            raise ValueError(f\"Unknown ZeRO stage: {stage}\")\n\n        return {\n            \"stage\": stage,\n            \"params_gb\": param_bytes / 1e9,\n            \"grads_gb\": grad_bytes / 1e9,\n            \"optimizer_gb\": opt_bytes / 1e9,\n            \"total_per_gpu_gb\": total / 1e9,\n            \"memory_reduction\": (1 - total / param_bytes) * 100 if param_bytes > 0 else 0,\n        }\n\n# Compare ZeRO stages\nmodel = ZeROConfig(num_params=70e9, bytes_per_param=2, num_gpus=8)\nprint(\"DeepSpeed ZeRO — Memory per GPU (Llama 3 70B, FP16)\")\nprint(\"=\"*65)\nfor stage in [0, 1, 2, 3]:\n    mem = model.memory_per_gpu(stage)\n    print(f\"ZeRO-{stage}:  {mem['total_per_gpu_gb']:>8.1f} GB/GPU  \"\n          f\"(reduction: {mem['memory_reduction']:.1f}%)\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "52-zero-inference",
      children: "5.2 ZeRO-Inference"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ZeRO-Inference extends ZeRO-3 for inference workloads. It partitions model parameters across GPUs and offloads unused parameters to CPU or NVMe."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ZeROInferenceEngine:\n    \"\"\"\n    Simulate ZeRO-Inference: parameter offloading to CPU/NVMe.\n    During inference, only active layers are on GPU.\n    Inactive layers stay on CPU or NVMe storage.\n    \"\"\"\n    def __init__(\n        self,\n        model_size_gb: float,\n        gpu_memory_gb: float = 80.0,   # H100\n        cpu_memory_gb: float = 256.0,   # Host RAM\n        nvme_speed_gbps: float = 7.0,   # PCIe 4.0 NVMe\n        cpu_speed_gbps: float = 50.0,   # CPU-GPU bandwidth\n    ):\n        self.model_size = model_size_gb * 1e9\n        self.gpu_mem = gpu_memory_gb * 1e9\n        self.cpu_mem = cpu_memory_gb * 1e9\n        self.nvme_speed = nvme_speed_gbps * 1e9  # bytes/sec\n        self.cpu_speed = cpu_speed_gbps * 1e9\n\n    def can_fit_on_gpu(self) -> bool:\n        \"\"\"Check if the full model fits on a single GPU.\"\"\"\n        return self.model_size <= self.gpu_mem\n\n    def offload_strategy(self, num_layers: int = 80) -> dict:\n        \"\"\"\n        Determine the optimal offloading strategy.\n        Returns latency, memory savings, and recommendations.\n        \"\"\"\n        layer_size = self.model_size / num_layers\n        layers_on_gpu = int(self.gpu_mem / layer_size)\n        layers_offloaded = num_layers - layers_on_gpu\n\n        # Latency per layer\n        gpu_compute_us = 100.0  # 100 us per layer compute\n        cpu_transfer_us = (layer_size / self.cpu_speed) * 1e6\n        nvme_transfer_us = (layer_size / self.nvme_speed) * 1e6\n\n        strategies = {}\n\n        # Strategy 1: All on GPU (if fits)\n        if self.can_fit_on_gpu():\n            strategies[\"full_gpu\"] = {\n                \"description\": \"Full model on GPU\",\n                \"latency_per_layer_us\": gpu_compute_us,\n                \"peak_memory_gb\": self.model_size / 1e9,\n                \"feasible\": True,\n            }\n\n        # Strategy 2: ZeRO-Inference with CPU offload\n        strategies[\"cpu_offload\"] = {\n            \"description\": f\"CPU offload: {layers_on_gpu} GPU + {layers_offloaded} CPU\",\n            \"latency_per_layer_us\": gpu_compute_us + cpu_transfer_us,\n            \"peak_memory_gb\": self.gpu_mem / 1e9,\n            \"offload_transfer_us\": cpu_transfer_us,\n            \"feasible\": layers_on_gpu >= 1,\n        }\n\n        # Strategy 3: ZeRO-Inference with NVMe offload\n        strategies[\"nvme_offload\"] = {\n            \"description\": f\"NVMe offload: {layers_on_gpu} GPU + {layers_offloaded} NVMe\",\n            \"latency_per_layer_us\": gpu_compute_us + nvme_transfer_us * 2,\n            \"peak_memory_gb\": self.gpu_mem / 1e9,\n            \"offload_transfer_us\": nvme_transfer_us,\n            \"feasible\": layers_on_gpu >= 1,\n        }\n\n        # Strategy 4: Hybrid — prefetch next layer while computing\n        prefetch_hide = min(nvme_transfer_us, gpu_compute_us)\n        strategies[\"prefetch\"] = {\n            \"description\": \"Prefetch overlapping: compute + NVMe transfer\",\n            \"latency_per_layer_us\": max(gpu_compute_us, nvme_transfer_us),\n            \"peak_memory_gb\": (layers_on_gpu + 1) * layer_size / 1e9,\n            \"offload_transfer_us\": nvme_transfer_us,\n            \"feasible\": layers_on_gpu >= 1,\n        }\n\n        return strategies\n\n    def recommend(self) -> str:\n        \"\"\"Recommend the best strategy.\"\"\"\n        strategies = self.offload_strategy()\n        feasible = {k: v for k, v in strategies.items() if v.get(\"feasible\", False)}\n\n        if not feasible:\n            return \"Model too large for available memory — add more GPUs\"\n\n        best = min(feasible.items(), key=lambda x: x[1][\"latency_per_layer_us\"])\n        return (\n            f\"Recommended: {best[0]} — {best[1]['description']}\\n\"\n            f\"  Latency per layer: {best[1]['latency_per_layer_us']:.1f} us\\n\"\n            f\"  Peak GPU memory: {best[1]['peak_memory_gb']:.1f} GB\"\n        )\n\n# Analyze ZeRO-Inference options for Llama 3 405B on H100\nprint(\"\\nZeRO-Inference Offloading Strategy — Llama 3 405B\")\nprint(\"=\"*65)\n\nengine = ZeROInferenceEngine(\n    model_size_gb=405 * 2,  # 405B params * 2 bytes = 810 GB\n    gpu_memory_gb=80,       # H100\n    cpu_memory_gb=512,      # Host RAM\n)\n\nprint(f\"Model size: {810:.0f} GB (FP16)\")\nprint(f\"GPU memory: 80 GB\")\nprint(f\"Requires:   {810/80:.1f} GPUs without offload\\n\")\n\nstrategies = engine.offload_strategy()\nfor name, info in strategies.items():\n    if info.get(\"feasible\"):\n        print(f\"{name.upper()}:\")\n        print(f\"  {info['description']}\")\n        print(f\"  Latency/layer: {info['latency_per_layer_us']:.0f} us\")\n        print(f\"  Peak GPU:      {info['peak_memory_gb']:.0f} GB\")\n        if \"offload_transfer_us\" in info:\n            print(f\"  Transfer time: {info['offload_transfer_us']:.0f} us\")\n        print()\n\nprint(engine.recommend())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "53-zero-inference-implementation-sketch",
      children: "5.3 ZeRO-Inference Implementation Sketch"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ZeROInferenceLayer:\n    \"\"\"\n    A single transformer layer with ZeRO-Inference support.\n    Parameters are partitioned across GPUs and can be offloaded.\n    \"\"\"\n    def __init__(\n        self,\n        layer_id: int,\n        hidden_size: int,\n        num_heads: int,\n        rank: int,\n        world_size: int,\n        offload_to_cpu: bool = False,\n    ):\n        self.layer_id = layer_id\n        self.rank = rank\n        self.world_size = world_size\n        self.offload_to_cpu = offload_to_cpu\n\n        # Each GPU holds 1/world_size of the parameters\n        self.hidden_per_rank = hidden_size // world_size\n\n        # Local parameter shards\n        self.q_weight = nn.Parameter(\n            torch.randn(self.hidden_per_rank, hidden_size)\n        )\n        self.k_weight = nn.Parameter(\n            torch.randn(self.hidden_per_rank, hidden_size)\n        )\n        self.v_weight = nn.Parameter(\n            torch.randn(self.hidden_per_rank, hidden_size)\n        )\n        self.o_weight = nn.Parameter(\n            torch.randn(hidden_size, self.hidden_per_rank)\n        )\n\n        # CPU copy for offloading\n        self.cpu_copy = None\n        if offload_to_cpu:\n            self._offload_to_cpu()\n\n    def _offload_to_cpu(self):\n        \"\"\"Move parameter shards to CPU, keep only on demand.\"\"\"\n        import copy\n        self.cpu_copy = {\n            \"q\": copy.deepcopy(self.q_weight.data).cpu(),\n            \"k\": copy.deepcopy(self.k_weight.data).cpu(),\n            \"v\": copy.deepcopy(self.v_weight.data).cpu(),\n            \"o\": copy.deepcopy(self.o_weight.data).cpu(),\n        }\n        # Free GPU memory for these parameters\n        self.q_weight.data = torch.empty(0)\n        self.k_weight.data = torch.empty(0)\n        self.v_weight.data = torch.empty(0)\n        self.o_weight.data = torch.empty(0)\n        print(f\"Layer {self.layer_id}: offloaded to CPU \"\n              f\"(~{self.hidden_per_rank * 4 * 2 / 1e6:.1f} MB)\")\n\n    def _load_to_gpu(self):\n        \"\"\"Load parameters from CPU back to GPU.\"\"\"\n        if self.cpu_copy is not None:\n            self.q_weight.data = self.cpu_copy[\"q\"].cuda()\n            self.k_weight.data = self.cpu_copy[\"k\"].cuda()\n            self.v_weight.data = self.cpu_copy[\"v\"].cuda()\n            self.o_weight.data = self.cpu_copy[\"o\"].cuda()\n\n    def forward(self, x: torch.Tensor) -> torch.Tensor:\n        \"\"\"Forward pass with optional on-demand loading.\"\"\"\n        self._load_to_gpu()\n\n        # Local computation (tensor parallel)\n        q = torch.matmul(x, self.q_weight.t())\n        k = torch.matmul(x, self.k_weight.t())\n        v = torch.matmul(x, self.v_weight.t())\n\n        # All-gather for full Q, K, V\n        # (simplified — real implementation uses fused kernels)\n        output = torch.matmul(q, v.transpose(-2, -1))\n\n        if self.offload_to_cpu:\n            self._offload_to_cpu()\n\n        return output\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "60-multi-node-inference",
      children: "6.0 Multi-Node Inference"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a model exceeds a single node's GPUs, inference must span multiple nodes. Multi-node inference introduces network communication between nodes, which is slower than NVLink within a node."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "61-nccl-and-network-topology",
      children: "6.1 NCCL and Network Topology"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NCCL (NVIDIA Collective Communication Library) is the standard for GPU communication. It optimizes collectives for the hardware topology."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Node0[\"Node 0 — 8x H100\"]\n        N0_G1[\"GPU 0\"] --- N0_G2[\"GPU 1\"]\n        N0_G2 --- N0_G3[\"GPU 2\"]\n        N0_G3 --- N0_G4[\"GPU 3\"]\n        N0_G4 --- N0_G5[\"GPU 4\"]\n        N0_G5 --- N0_G6[\"GPU 5\"]\n        N0_G6 --- N0_G7[\"GPU 6\"]\n        N0_G7 --- N0_G8[\"GPU 7\"]\n        N0_NV[\"NVSwitch (900 GB/s)\"]\n        N0_G1 --- N0_NV\n        N0_G2 --- N0_NV\n        N0_G3 --- N0_NV\n        N0_G4 --- N0_NV\n        N0_G8 --- N0_NV\n    end\n    subgraph Node1[\"Node 1 — 8x H100\"]\n        N1_G1[\"GPU 0\"] --- N1_NV[\"NVSwitch (900 GB/s)\"]\n        N1_G2[\"GPU 1\"] --- N1_NV\n        N1_G3[\"GPU 2\"] --- N1_NV\n        N1_G4[\"GPU 3\"] --- N1_NV\n    end\n    subgraph Network[\"Interconnect\"]\n        IB[\"InfiniBand NDR 400<br/>400 Gb/s per link<br/>4x links = 200 GB/s\"]\n    end\n    N0_NV <--> IB\n    N1_NV <--> IB\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bandwidth hierarchy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Within GPU: ~2-4 TB/s (HBM3/HBM3e)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Within node (NVLink): ~900 GB/s (H100)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Across nodes (InfiniBand): ~200 GB/s (NDR 400 x 4)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Across nodes (Ethernet): ~25-100 GB/s"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MultiNodeTopology:\n    \"\"\"\n    Model multi-node GPU topology and communication costs.\n    Calculates bandwidth between any two GPUs in the cluster.\n    \"\"\"\n    def __init__(\n        self,\n        gpus_per_node: int = 8,\n        num_nodes: int = 4,\n        nvlink_bw: float = 900.0,     # GB/s\n        ib_bw: float = 200.0,          # GB/s (4x NDR 400)\n        pcie_bw: float = 128.0,        # GB/s (PCIe 5.0 x16)\n    ):\n        self.gpus_per_node = gpus_per_node\n        self.num_nodes = num_nodes\n        self.total_gpus = gpus_per_node * num_nodes\n        self.nvlink_bw = nvlink_bw\n        self.ib_bw = ib_bw\n        self.pcie_bw = pcie_bw\n\n    def bandwidth_between(self, gpu_a: int, gpu_b: int) -> float:\n        \"\"\"\n        Get bandwidth (GB/s) between two GPUs.\n        Based on their node and GPU topology.\n        \"\"\"\n        node_a = gpu_a // self.gpus_per_node\n        node_b = gpu_b // self.gpus_per_node\n\n        if node_a == node_b:\n            # Same node: NVLink or PCIe\n            # Simplified: assumes NVSwitch connects all GPUs\n            return self.nvlink_bw\n        else:\n            # Different nodes: InfiniBand\n            return self.ib_bw\n\n    def all_reduce_cost(\n        self,\n        message_size_bytes: int,\n        tensor_parallel_size: int = 8,\n    ) -> dict:\n        \"\"\"\n        Calculate all-reduce cost for multi-node tensor parallelism.\n        TP groups may span nodes, requiring cross-node all-reduce.\n\n        Ring all-reduce cost = 2 * (N-1) * message_size / bandwidth\n        where N = number of GPUs in TP group.\n        \"\"\"\n        # TP group: the GPUs involved in tensor parallelism\n        tp_group_cost = 0\n        bw_bottleneck = float('inf')\n\n        for i in range(tensor_parallel_size):\n            for j in range(i + 1, tensor_parallel_size):\n                bw = self.bandwidth_between(i, j)\n                bw_bottleneck = min(bw_bottleneck, bw)\n\n        # Ring all-reduce: 2 * (N-1) transfers of size message/N\n        ring_steps = 2 * (tensor_parallel_size - 1)\n        transfer_size = message_size_bytes / tensor_parallel_size\n        cost_seconds = ring_steps * transfer_size / (bw_bottleneck * 1e9)\n\n        return {\n            \"message_size_mb\": message_size_bytes / 1e6,\n            \"tp_size\": tensor_parallel_size,\n            \"bottleneck_bw_gbs\": bw_bottleneck,\n            \"ring_steps\": ring_steps,\n            \"cost_seconds\": cost_seconds,\n            \"cost_milliseconds\": cost_seconds * 1000,\n        }\n\n    def print_topology(self):\n        \"\"\"Print cluster bandwidth matrix.\"\"\"\n        print(\"Multi-Node Bandwidth Matrix (GB/s)\")\n        print(f\"{'GPU':<8}\", end=\"\")\n        for j in range(self.total_gpus):\n            print(f\"GPU{j:<5}\", end=\"\")\n        print()\n\n        for i in range(self.total_gpus):\n            print(f\"GPU{i:<5}\", end=\"\")\n            for j in range(self.total_gpus):\n                bw = self.bandwidth_between(i, j)\n                if i == j:\n                    print(f\"{'---':<8}\", end=\"\")\n                else:\n                    print(f\"{bw:<8.0f}\", end=\"\")\n            print()\n\n# Multi-node topology for 4 nodes x 8 GPUs = 32 GPUs\ntopo = MultiNodeTopology(gpus_per_node=8, num_nodes=4)\ntopo.print_topology()\n\n# All-reduce cost for LLM inference\n# Tensor parallelism across 16 GPUs (2 nodes)\nprint(\"\\nMulti-Node All-Reduce Cost\")\nprint(\"=\"*55)\n\nfor tp_size in [8, 16, 32]:\n    cost = topo.all_reduce_cost(\n        message_size_bytes=4096 * 8192 * 2,  # S=4096, H=8192, FP16\n        tensor_parallel_size=tp_size,\n    )\n    print(f\"TP-{tp_size:<3}: {cost['cost_milliseconds']:.2f} ms \"\n          f\"(bottleneck: {cost['bottleneck_bw_gbs']} GB/s)\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "62-all-to-all-communication",
      children: "6.2 All-to-All Communication"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When tensor parallelism spans nodes, the TP communication group includes GPUs from multiple nodes. All-reduce across nodes is slower than within a node."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MultiNodeCollectives:\n    \"\"\"\n    Simulate multi-node collective communication for distributed inference.\n    Shows how NCCL handles cross-node all-reduce and all-gather.\n    \"\"\"\n    def __init__(\n        self,\n        num_nodes: int = 2,\n        gpus_per_node: int = 8,\n        intra_node_bw: float = 900.0,   # NVLink GB/s\n        inter_node_bw: float = 200.0,   # InfiniBand GB/s\n    ):\n        self.num_nodes = num_nodes\n        self.gpus_per_node = gpus_per_node\n        self.total_gpus = num_nodes * gpus_per_node\n        self.intra_bw = intra_node_bw\n        self.inter_bw = inter_node_bw\n\n    def hierarchical_all_reduce(\n        self,\n        tensor: torch.Tensor,\n        tp_group: List[int],\n    ) -> float:\n        \"\"\"\n        Simulate hierarchical all-reduce for multi-node TP.\n        Strategy:\n        1. Within each node: NVLink all-reduce (fast)\n        2. Across nodes: InfiniBand all-reduce (slow)\n        3. Within each node: broadcast result\n\n        Returns estimated time in microseconds.\n        \"\"\"\n        size_bytes = tensor.numel() * tensor.element_size()\n        bytes_per_element = tensor.element_size()\n\n        # Group GPUs by node\n        node_groups = {}\n        for rank in tp_group:\n            node_id = rank // self.gpus_per_node\n            if node_id not in node_groups:\n                node_groups[node_id] = []\n            node_groups[node_id].append(rank)\n\n        # Step 1: Intra-node all-reduce\n        # Ring: 2 * (N-1) / N * message_size / BW\n        intra_size = len(node_groups[0])\n        intra_transfer = 2 * (intra_size - 1) / intra_size * size_bytes\n        intra_time = intra_transfer / (self.intra_bw * 1e9)\n\n        # Step 2: Inter-node all-reduce (node representatives)\n        inter_nodes = len(node_groups)\n        reduced_size = size_bytes / intra_size  # After intra-node reduce\n        inter_transfer = 2 * (inter_nodes - 1) / inter_nodes * reduced_size\n        inter_time = inter_transfer / (self.inter_bw * 1e9)\n\n        # Step 3: Intra-node broadcast\n        broadcast_time = (intra_size - 1) / intra_size * reduced_size / (self.intra_bw * 1e9)\n\n        total_time = (intra_time + inter_time + broadcast_time) * 1e6  # Convert to us\n\n        return {\n            \"size_bytes\": size_bytes,\n            \"intra_node_time_us\": intra_time * 1e6,\n            \"inter_node_time_us\": inter_time * 1e6,\n            \"broadcast_time_us\": broadcast_time * 1e6,\n            \"total_time_us\": total_time,\n            \"naive_all_reduce_us\": 2 * (self.total_gpus - 1) / self.total_gpus * size_bytes / (self.inter_bw * 1e9) * 1e6,\n        }\n\n    def nccl_algorithm_selection(\n        self,\n        message_size: int,\n    ) -> str:\n        \"\"\"\n        Simulate NCCL's algorithm selection logic.\n        NCCL chooses between:\n        - Ring: good for large messages, scales with N GPUs\n        - Tree: good for small messages, O(log N) steps\n        - NVLink/NVSwitch: direct P2P when available\n        \"\"\"\n        bytes_per_element = 2\n        num_elements = message_size // bytes_per_element\n\n        # Heuristic thresholds (simplified)\n        if message_size < 128 * 1024:  # < 128KB\n            return \"Tree — small message, log(N) steps\"\n        elif self.num_nodes == 1:\n            return \"Ring — single node, optimal NVLink utilization\"\n        elif message_size < 10 * 1024 * 1024:  # < 10MB\n            return \"Tree — moderate size, minimize cross-node hops\"\n        else:\n            return \"Ring (hierarchical) — large message, intra-node ring + inter-node ring\"\n\n# Compare hierarchical vs naive all-reduce\nnccl = MultiNodeCollectives(num_nodes=2, gpus_per_node=8)\n\n# Llama 3 70B attention output: [B=1, S=4096, H=8192] in FP16\nmessage = torch.randn(1, 4096, 8192, dtype=torch.float16)\ntp_group = list(range(16))  # 16 GPUs across 2 nodes\n\nresult = nccl.hierarchical_all_reduce(message, tp_group)\nprint(\"\\nMulti-Node All-Reduce Comparison (16 GPUs, 2 nodes)\")\nprint(\"=\"*55)\nprint(f\"Message size:       {result['size_bytes'] / 1e6:.1f} MB\")\nprint(f\"Intra-node time:    {result['intra_node_time_us']:.1f} us\")\nprint(f\"Inter-node time:    {result['inter_node_time_us']:.1f} us\")\nprint(f\"Broadcast time:     {result['broadcast_time_us']:.1f} us\")\nprint(f\"Hierarchical total: {result['total_time_us']:.1f} us\")\nprint(f\"Naive cross-node:   {result['naive_all_reduce_us']:.1f} us\")\nprint(f\"Speedup:            {result['naive_all_reduce_us'] / result['total_time_us']:.1f}x\")\n\n# Algorithm selection for different message sizes\nprint(\"\\nNCCL Algorithm Selection:\")\nfor size_name, size_bytes in [\n    (\"1 KB\", 1024),\n    (\"1 MB\", 1024 * 1024),\n    (\"64 MB\", 64 * 1024 * 1024),\n]:\n    algo = nccl.nccl_algorithm_selection(size_bytes)\n    print(f\"  {size_name:<8} -> {algo}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "63-rdma-and-network-considerations",
      children: "6.3 RDMA and Network Considerations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RDMA (Remote Direct Memory Access) lets GPUs read/write memory on remote GPUs without CPU involvement. This is critical for low-latency multi-node inference."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RDMAConfig:\n    \"\"\"\n    RDMA configuration for multi-node GPU communication.\n    Analyzes latency and bandwidth trade-offs.\n    \"\"\"\n    def __init__(\n        self,\n        interconnect_type: str = \"infiniBand\",\n        link_speed_gbps: float = 400.0,  # NDR 400\n        num_links: int = 4,\n        mtu_bytes: int = 4096,\n    ):\n        self.interconnect = interconnect_type\n        self.link_speed = link_speed_gbps * 1e9 / 8  # Convert to bytes/s\n        self.num_links = num_links\n        self.total_bw = self.link_speed * num_links\n        self.mtu = mtu_bytes\n\n    def rdma_read_latency(self, message_size: int) -> dict:\n        \"\"\"\n        Calculate RDMA read latency for a given message.\n        RDMA reads bypass CPU and go direct GPU-to-GPU.\n\n        Latency = (message_size / bandwidth) + 2 * RTT\n        where RTT includes PCIe + NIC + switch latency.\n        \"\"\"\n        base_rtt_us = 2.0  # 2 us base RTT for InfiniBand within a rack\n\n        bw_time_us = (message_size / self.total_bw) * 1e6\n        total_latency = bw_time_us + base_rtt_us\n\n        # Pipelining benefit: RDMA can pipeline small messages\n        num_segments = max(1, message_size // (self.mtu * 512))\n        pipeline_latency = (\n            (message_size / self.total_bw) * 1e6\n            + base_rtt_us\n            + (num_segments - 1) * (self.mtu / self.link_speed) * 1e6\n        )\n\n        return {\n            \"message_size_mb\": message_size / 1e6,\n            \"bandwidth_time_us\": bw_time_us,\n            \"base_rtt_us\": base_rtt_us,\n            \"total_latency_us\": total_latency,\n            \"pipeline_latency_us\": pipeline_latency,\n        }\n\n    def bandwidth_utilization(\n        self,\n        message_size: int,\n        num_gpus: int,\n    ) -> dict:\n        \"\"\"\n        Calculate effective bandwidth for collective operations.\n        Larger messages achieve higher utilization of the link.\n        \"\"\"\n        # Bandwidth utilization factor (0 to 1)\n        # Small messages: dominated by latency, low utilization\n        # Large messages: approach full bandwidth\n        bw_latency_product = self.total_bw * 1e-6  # GB/us\n        utilization = 1 - (2 * self.mtu / max(message_size, self.mtu))\n\n        effective_bw = self.total_bw * utilization\n\n        # Per-GPU bandwidth in collective operations\n        if num_gpus > 1:\n            per_gpu_bw = effective_bw / num_gpus\n        else:\n            per_gpu_bw = effective_bw\n\n        return {\n            \"link_bw_gbs\": self.total_bw / 1e9,\n            \"message_size_mb\": message_size / 1e6,\n            \"utilization\": utilization * 100,\n            \"effective_bw_gbs\": effective_bw / 1e9,\n            \"per_gpu_bw_gbs\": per_gpu_bw / 1e9,\n        }\n\n# RDMA analysis\nrdma = RDMAConfig(interconnect_type=\"infiniBand\", link_speed_gbps=400, num_links=4)\n\nprint(\"\\nRDMA Latency Analysis (4x NDR 400 InfiniBand)\")\nprint(\"=\"*55)\nfor size_name, size_bytes in [\n    (\"1 KB   \", 1024),\n    (\"1 MB   \", 1024 * 1024),\n    (\"64 MB  \", 64 * 1024 * 1024),\n    (\"256 MB \", 256 * 1024 * 1024),\n]:\n    lat = rdma.rdma_read_latency(size_bytes)\n    util = rdma.bandwidth_utilization(size_bytes, num_gpus=16)\n    print(f\"{size_name}: {lat['total_latency_us']:>8.1f} us total, \"\n          f\"{lat['bandwidth_time_us']:>6.1f} us BW, \"\n          f\"{util['utilization']:>5.1f}% util\")\n\n# Key insight: multi-node inference is bandwidth-bound\n# For Llama 3 405B, TP-32 across 4 nodes, each token requires\n# all-reduce of ~64 MB per layer -> ~200 us per layer -> 16 ms per token\n# This is the floor latency for distributed inference\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: What is the difference between tensor parallelism and pipeline parallelism?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tensor parallelism splits individual weight matrices across GPUs. Each GPU holds part of every layer. GPUs communicate every forward step via all-reduce. Pipeline parallelism splits model layers into stages. Each GPU holds full layers but only a subset of total layers. GPUs communicate at stage boundaries. TP gives lower latency but requires high-bandwidth intra-node interconnects. PP works better across nodes with lower bandwidth."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: How does Megatron-LM implement tensor parallelism for transformers?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Megatron-LM uses column parallelism for QKV projections (split output dimension) and row parallelism for the output projection (split input dimension, all-reduce output). For FFN, the first linear layer uses column parallelism and the second uses row parallelism. The GeLU activation is applied locally without communication. This minimizes communication to one all-reduce per transformer sub-layer."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: What is the pipeline bubble and how does interleaved 1F1B scheduling reduce it?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The pipeline bubble is idle GPU time during pipeline warmup and cooldown. With P stages and M microbatches, the bubble fraction is (P-1)/(M+P-1). Interleaved 1F1B scheduling assigns multiple layer chunks to each GPU. This makes each chunk smaller, reducing the time to fill and drain the pipeline. The bubble shrinks because the pipeline fills and drains faster with smaller chunks."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: Explain how Ring Attention enables long-context inference beyond a single GPU's memory."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ring Attention shards the sequence dimension across GPUs. Each GPU holds a contiguous block of the sequence. GPUs form a ring and rotate K/V blocks. At each step, every GPU attends its Q block against the current K/V block. After N steps (N = world size), each GPU has computed full attention over the entire sequence. Memory per GPU is O(S^2 / N) instead of O(S^2)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: What is the difference between FSDP and tensor parallelism for inference?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FSDP shards parameters across GPUs and unshards them on demand per layer. It adds all-gather communication before each layer and a free/reshard after. FSDP works well across nodes because communication is per-layer. Tensor parallelism shards each weight matrix and communicates every forward computation step. TP requires more total bandwidth (every matmul needs all-reduce) but has lower latency per step."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6: How does ZeRO-Inference differ from ZeRO-3 training?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ZeRO-Inference only shards parameters — no gradients or optimizer states are needed. It can offload parameters to CPU or NVMe since forward-only computation allows prefetching. ZeRO-3 shards parameters, gradients, and optimizer states. ZeRO-Inference can overlap offload transfers with computation (prefetch next layer while computing current layer). This hides offload latency."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7: What NCCL algorithms are used for multi-node all-reduce?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NCCL selects algorithms based on message size and topology. Ring all-reduce works well for large messages across any topology. Tree all-reduce works better for small messages with O(log N) steps. For multi-node, NCCL uses hierarchical all-reduce: intra-node ring over NVLink, then inter-node ring over InfiniBand, then intra-node broadcast. This minimizes cross-node bandwidth usage."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8: What happens when tensor parallelism spans multiple nodes?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TP across nodes uses the slow inter-node interconnect for all-reduce. Each transformer layer requires 4 all-reduce operations (Q, K, V, O projections). With InfiniBand at 200 GB/s vs NVLink at 900 GB/s, cross-node TP is 4.5x slower. The solution is to limit TP to one node and use pipeline or sequence parallelism across nodes. This minimizes cross-node communication."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q9: How do you choose between different parallelism strategies for a given model and cluster?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The choice depends on model size, GPU memory, and interconnect bandwidth. TP fits within one node (8 GPUs) where NVLink is available. PP works across nodes when bandwidth is limited. SP is essential for long sequences (>32K tokens). FSDP/ZeRO works when model fits in aggregate GPU memory but not on one GPU. In practice, combine 2-3 strategies: TP within node + PP across nodes + SP for long context."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q10: What is the communication-to-computation ratio in distributed inference and why does it matter?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The communication-to-computation ratio is the ratio of data transferred to computation performed. For TP, each token requires all-reduce of ~64 MB per layer while computation is ~100 us. A high ratio means the system is communication-bound. Ratio matters because it determines scaling efficiency. If communication dominates, adding more GPUs gives diminishing returns. The ideal strategy keeps communication under 30% of total time."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Distributed inference is the practice of running large language models across multiple GPUs and nodes. Six key strategies exist: tensor parallelism splits weight matrices across GPUs within a node; pipeline parallelism splits layers into stages across nodes; sequence parallelism shards the sequence dimension for long contexts; FSDP and ZeRO shard parameters across all available devices; and multi-node inference extends these strategies across a cluster. Production deployments typically combine two or three strategies. The choice depends on model size, sequence length, GPU count, and interconnect bandwidth. Understanding the communication-to-computation ratio for each strategy is the key to building efficient distributed inference systems."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: What is the bubble fraction for a pipeline with 8 stages and 32 microbatches?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) 12.8%\nB) 18.0%\nC) 21.1%\nD) 25.0%"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: B) 18.0%"
      }), "\nExplanation: Bubble fraction = (P-1)/(M+P-1) = 7/(32+7) = 7/39 = 17.95%."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: Which parallelism strategy shards the sequence dimension across GPUs?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Tensor parallelism\nB) Pipeline parallelism\nC) Sequence parallelism\nD) Data parallelism"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: C) Sequence parallelism"
      }), "\nExplanation: Sequence parallelism (Ring Attention, context parallelism) shards the sequence (S) dimension across GPUs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: In Megatron-LM's tensor parallelism, what collective operation is used for the row-parallel linear layer?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) All-gather\nB) Reduce-scatter\nC) All-reduce\nD) Broadcast"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: C) All-reduce"
      }), "\nExplanation: Row-parallel linear requires all-reduce to sum partial results from each GPU's shard."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: What is the main advantage of ZeRO-Inference over standard ZeRO-3 for inference workloads?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) It partitions gradients\nB) It supports CPU/NVMe offloading with compute overlap\nC) It uses FP32 precision\nD) It requires no communication"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: B) It supports CPU/NVMe offloading with compute overlap"
      }), "\nExplanation: ZeRO-Inference can prefetch the next layer's parameters while computing the current layer, hiding offload latency."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: What is the bandwidth hierarchy (fastest to slowest) in a multi-node GPU cluster?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) NVLink > InfiniBand > PCIe > HBM\nB) HBM > NVLink > InfiniBand > PCIe\nC) PCIe > HBM > NVLink > InfiniBand\nD) InfiniBand > NVLink > HBM > PCIe"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: B) HBM > NVLink > InfiniBand > PCIe"
      }), "\nExplanation: HBM3 offers 2-4 TB/s, NVLink 900 GB/s, InfiniBand 200 GB/s, PCIe 128 GB/s."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 1: Tensor Parallelism Communication Model"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a Python function that calculates the total communication time for a tensor-parallel transformer forward pass. Given hidden_size=8192, sequence_length=4096, batch_size=1, num_layers=80, and world_size=8, estimate the all-reduce time using NVLink (900 GB/s). Each layer requires 4 all-reduce operations. Calculate total inference latency from communication alone."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 2: Pipeline Stage Assignment"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given a 96-layer transformer model and 8 GPUs, propose two stage assignments: one for pipeline parallelism and one for hybrid TP+PP. Calculate the bubble overhead for each configuration with 16 microbatches. Explain which configuration gives higher throughput."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 3: Ring Attention Memory Analysis"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement a function that calculates peak memory for standard attention and Ring Attention. Parameters: sequence_length=131072, hidden_size=8192, num_heads=64, world_size=8. Show the memory savings from Ring Attention for attention scores and the KV cache."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 4: FSDP vs TP Trade-off"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For a 70B parameter model on 8 H100 GPUs (80 GB each), compare FSDP (full shard) vs tensor parallelism (TP=8). Calculate: per-GPU parameter memory, peak memory during forward, and communication volume per layer. Which strategy allows longer sequences and why?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 5: Multi-Node Inference Design"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design a distributed inference deployment for Llama 3 405B across 4 nodes (8x H100 per node). Choose the parallelism strategy (TP, PP, SP) placement. Calculate the communication volume per token and the expected latency. Assume NVLink 900 GB/s intra-node and InfiniBand 200 GB/s inter-node."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Distributed inference uses tensor, pipeline, sequence, and sharded parallelism to fit large models across GPUs. The right mix depends on model size and hardware topology."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tensor parallelism delivers lowest latency but requires high-bandwidth intra-node interconnects (NVLink). Megatron-LM's column/row split pattern minimizes communication."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Pipeline parallelism sacrifices some latency (bubble overhead) for better cross-node scaling. Interleaved 1F1B scheduling reduces the bubble."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Sequence parallelism (Ring Attention) is essential for long-context inference. It reduces per-GPU memory from O(S^2) to O(S^2 / world_size)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ZeRO-Inference and FSDP reduce memory by sharding parameters across GPUs. Offloading to CPU/NVMe enables inference of models larger than aggregate GPU memory."
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
            children: "Explain the core idea of Distributed Inference in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Distributed Inference."
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
            children: "Describe a production bug caused by misunderstanding Distributed Inference. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Distributed Inference from 10 users to 10 million?"
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
            children: "Compare Distributed Inference with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Distributed Inference."
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
            children: "How does Distributed Inference behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Distributed Inference run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Distributed Inference that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Distributed Inference explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Distributed Inference\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Distributed Inference to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Distributed Inference (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Distributed Inference and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Distributed Inference-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Distributed Inference interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Distributed Inference in production today?"
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
        }), " Distributed Inference builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Distributed Inference before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Distributed Inference is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Distributed Inference in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Distributed Inference chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Distributed Inference is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Distributed Inference is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Distributed Inference is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Distributed Inference issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Distributed Inference in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Distributed Inference that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Distributed Inference is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Distributed Inference in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Distributed Inference and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Distributed Inference on an empty input?"
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
            children: "Complete Medium exercises, explain Distributed Inference to someone else"
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
        children: "Always write a one-line example of Distributed Inference from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Distributed Inference when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Distributed Inference twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Distributed Inference snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Distributed Inference listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Distributed Inference to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Distributed Inference by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Distributed Inference to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Distributed Inference"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Distributed Inference (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Distributed Inference problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Distributed Inference"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Distributed Inference"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Distributed Inference"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Distributed Inference fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Distributed Inference is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Distributed Inference is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Distributed Inference, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Distributed Inference asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distributed Inference is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Distributed Inference."
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
        children: "Distributed Inference emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Distributed Inference today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Distributed Inference — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Distributed Inference changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Distributed Inference."
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
        children: "Distributed Inference appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Distributed Inference helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Distributed Inference concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Distributed Inference skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Distributed Inference to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Distributed Inference is like a recipe"
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
        }), " — this chapter contributes the Distributed Inference skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "27aiinfrastructure-05distributedinference-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Distributed Inference in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "27aiinfrastructure-05distributedinference-flash2",
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
      "data-qid": "27aiinfrastructure-05distributedinference-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Distributed Inference approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "27aiinfrastructure-05distributedinference-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Distributed Inference NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "27aiinfrastructure-05distributedinference-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Distributed Inference applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for Distributed Inference (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Distributed Inference (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Distributed Inference-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Distributed Inference in production at scale"
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
        children: "Testing: pytest for unit tests of Distributed Inference code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Distributed Inference"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Distributed Inference code."]
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
        }), " or your IDE's debugger to step through the Distributed Inference example code."]
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
        children: "Explain Distributed Inference in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Distributed Inference."
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
        children: "Tell me about a time you debugged a Distributed Inference problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Distributed Inference is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Distributed Inference."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Distributed Inference logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Distributed Inference without notes"
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
        }), ": a small team uses Distributed Inference daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Distributed Inference patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Distributed Inference principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Distributed Inference shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Distributed Inference to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/06-model-pruning",
        children: "Model Pruning"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distributed Inference, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Distributed Inference depends on input size and distribution — always benchmark for your own data."
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