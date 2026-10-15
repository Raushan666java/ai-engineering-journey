"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[5844],{

/***/ 45095
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_27_ai_infrastructure_01_gpu_architecture_md_9ee_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-27-ai-infrastructure-01-gpu-architecture-md-9ee.json
const site_docs_courses_ai_engineering_placement_27_ai_infrastructure_01_gpu_architecture_md_9ee_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/ai-infrastructure/01-gpu-architecture","title":"GPU Architecture for AI","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/27-ai-infrastructure/01-gpu-architecture.md","sourceDirName":"courses/ai-engineering-placement/27-ai-infrastructure","slug":"/ai-engineering-placement/27-ai-infrastructure/01-gpu-architecture","permalink":"/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/01-gpu-architecture","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":323,"frontMatter":{"id":"01-gpu-architecture","slug":"/ai-engineering-placement/27-ai-infrastructure/01-gpu-architecture","title":"GPU Architecture for AI","sidebar_label":"GPU Architecture for AI","sidebar_position":323},"sidebar":"placementSidebar","previous":{"title":"27 — AI Infrastructure & Optimization","permalink":"/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure"},"next":{"title":"CUDA Programming for AI","permalink":"/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/02-cuda-programming"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/27-ai-infrastructure/01-gpu-architecture.md


const frontMatter = {
	id: '01-gpu-architecture',
	slug: '/ai-engineering-placement/27-ai-infrastructure/01-gpu-architecture',
	title: 'GPU Architecture for AI',
	sidebar_label: 'GPU Architecture for AI',
	sidebar_position: 323
};
const contentTitle = 'GPU Architecture for AI';

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
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
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
  "value": "1.1 GPU Generations — NVIDIA Architecture Timeline",
  "id": "11-gpu-generations--nvidia-architecture-timeline",
  "level": 3
}, {
  "value": "1.2 CUDA Cores vs Tensor Cores",
  "id": "12-cuda-cores-vs-tensor-cores",
  "level": 3
}, {
  "value": "1.3 Memory Hierarchy",
  "id": "13-memory-hierarchy",
  "level": 3
}, {
  "value": "1.4 Interconnects — Multi-GPU Topologies",
  "id": "14-interconnects--multi-gpu-topologies",
  "level": 3
}, {
  "value": "1.5 Roofline Model",
  "id": "15-roofline-model",
  "level": 3
}, {
  "value": "1.6 CPU vs GPU vs TPU vs NPU",
  "id": "16-cpu-vs-gpu-vs-tpu-vs-npu",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Matrix Multiply with Memory-Bound vs Compute-Bound Profiles",
  "id": "example-1-matrix-multiply-with-memory-bound-vs-compute-bound-profiles",
  "level": 3
}, {
  "value": "Example 2: Data Movement Optimization",
  "id": "example-2-data-movement-optimization",
  "level": 3
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "Question 1 (NVIDIA)",
  "id": "question-1-nvidia",
  "level": 3
}, {
  "value": "Question 2 (Amazon)",
  "id": "question-2-amazon",
  "level": 3
}, {
  "value": "Question 3 (Microsoft)",
  "id": "question-3-microsoft",
  "level": 3
}, {
  "value": "Question 4 (NVIDIA)",
  "id": "question-4-nvidia",
  "level": 3
}, {
  "value": "Question 5 (Amazon)",
  "id": "question-5-amazon",
  "level": 3
}, {
  "value": "Question 6 (Microsoft)",
  "id": "question-6-microsoft",
  "level": 3
}, {
  "value": "Question 7 (NVIDIA)",
  "id": "question-7-nvidia",
  "level": 3
}, {
  "value": "Question 8 (Google/TPU focus)",
  "id": "question-8-googletpu-focus",
  "level": 3
}, {
  "value": "Question 9 (Infrastructure)",
  "id": "question-9-infrastructure",
  "level": 3
}, {
  "value": "Question 10 (Architecture)",
  "id": "question-10-architecture",
  "level": 3
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
    em: "em",
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
        id: "gpu-architecture-for-ai",
        children: "GPU Architecture for AI"
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
            children: "Trace NVIDIA GPU generations from Tesla to Blackwell with key specs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distinguish CUDA cores from Tensor Cores and their roles in AI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain GPU memory hierarchy: register, shared memory, cache, HBM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Describe interconnects: PCIe, NVLink, NVSwitch, InfiniBand topologies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply the roofline model to classify compute-bound vs memory-bound ops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare CPU vs GPU vs TPU vs NPU for AI workloads and cost trade-offs"
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
            children: "1.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NVIDIA GPU Generations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tesla to Blackwell — CUDA cores, memory, process node"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CUDA Cores vs Tensor Cores"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Purpose, matrix math, mixed precision, throughput"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory Hierarchy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Register → Shared → L1/L2 → HBM bandwidth pyramid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interconnects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCIe, NVLink, NVSwitch, InfiniBand for multi-GPU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Roofline Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute-bound vs memory-bound, arithmetic intensity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU vs GPU vs TPU vs NPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture, use cases, cost, efficiency"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\r\n    subgraph GPU[\"GPU Architecture Overview\"]\r\n        A[SM<br/>Streaming Multiprocessor] --> B[CUDA Cores<br/>FP32/INT32]\r\n        A --> C[Tensor Cores<br/>FP16/BF16/INT8/FP8]\r\n        A --> D[Shared Memory<br/>~48-228 KB per SM]\r\n        B --> E[L1 Cache]\r\n        C --> E\r\n        D --> E\r\n        E --> F[L2 Cache<br/>~40-60 MB]\r\n        F --> G[HBM3/HBM3e<br/>~80 GB, 3.35 TB/s]\r\n    end\r\n    subgraph Host[\"Host System\"]\r\n        H[CPU] --> I[System RAM<br/>DDR5]\r\n    end\r\n    G --> J[PCIe Gen5<br/>128 GB/s]\r\n    J --> I\r\n    G <--> K[NVLink<br/>900 GB/s]\r\n    K --> L[Other GPUs]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GPU architecture determines how fast AI models train and infer. Understanding compute units, memory hierarchy, and interconnects helps you optimize model performance. This chapter covers NVIDIA GPU generations, core types, memory systems, interconnects, and the roofline model used to analyze bottlenecks."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic computer architecture: CPU, RAM, cache concepts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Module 09 (Deep Learning) — matrix multiplication, transformer basics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with floating-point formats: FP32, FP16, BF16, INT8"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Terms"
      }), ": Core vocabulary and concepts for this topic."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "SM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Streaming Multiprocessor — the fundamental compute unit on an NVIDIA GPU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CUDA Core"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A scalar ALU that executes one FP32 or INT32 operation per cycle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tensor Core"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A specialized unit that performs fused matrix multiply-accumulate on 4x4 tiles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HBM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High Bandwidth Memory — 3D-stacked DRAM with wide buses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NVLink"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NVIDIA's high-bandwidth GPU-to-GPU interconnect"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NVSwitch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A fabric switch connecting up to 576 GPUs in a DGX SuperPOD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Arithmetic Intensity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FLOPs per byte fetched from memory (FLOP:Byte ratio)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Roofline Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A performance model plotting FLOP/s vs arithmetic intensity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mixed Precision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Using FP16/BF16 for compute with FP32 master weights"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TDP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thermal Design Power — maximum heat a chip dissipates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SMX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enhanced SM with more cores per unit area (Kepler onward)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graphics Processing Cluster — groups multiple TPCs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-gpu-generations--nvidia-architecture-timeline",
      children: "1.1 GPU Generations — NVIDIA Architecture Timeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NVIDIA GPU generations form the backbone of modern AI hardware. Each generation brought higher core counts, faster memory, and new precision formats."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "timeline\r\n    title NVIDIA GPU Generations for AI\r\n    2010 : Tesla (Fermi) : 512 CUDA cores : First GPGPU\r\n    2012 : Kepler : 1536 CUDA cores : SMX, Grids\r\n    2014 : Maxwell : 2048 CUDA cores : Shared mem perf\r\n    2016 : Pascal : 3584 CUDA : NVLink, FP16\r\n    2017 : Volta : 5120 CUDA + 640 Tensor : Tensor Cores\r\n    2018 : Turing : 4608 CUDA + 576 Tensor : INT8, RT Cores\r\n    2020 : Ampere : 6912 CUDA + 432 Tensor : BF16, Sparsity\r\n    2022 : Hopper : 18432 CUDA + 576 Tensor : FP8, Transformer Engine\r\n    2024 : Blackwell : 20896 CUDA + 800 Tensor : FP4, 4.8 TB/s HBM3e\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tesla (Fermi, 2010):"
      }), " The first GPU designed for general-purpose computing. 512 CUDA cores, 1.5 GB GDDR5, 192 GB/s bandwidth. Launched CUDA 2.0 with ECC memory."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Kepler (2012):"
      }), " Introduced SMX — a more efficient SM design. 1536 CUDA cores per SM, 6 GB GDDR5, 288 GB/s. Added dynamic parallelism and Hyper-Q for multi-queue kernel launch."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Maxwell (2014):"
      }), " Focused on power efficiency. 2048 CUDA cores, 4 GB GDDR5, 224 GB/s. Shared memory and L1 cache merged into a unified 96 KB block. Became popular for early deep learning."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pascal (2016):"
      }), " The first GPU with NVLink interconnect. 3584 CUDA cores, 16 GB HBM2, 720 GB/s. Added FP16 support for mixed precision. Used in DGX-1 (8x P100)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Volta (2017):"
      }), " Introduced Tensor Cores — 640 per GPU. 5120 CUDA cores, 32 GB HBM2, 900 GB/s. V100 became the gold standard for AI training. Added independent thread scheduling."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Turing (2018):"
      }), " Added RT Cores for ray tracing and INT8 Tensor Cores. 4608 CUDA cores, 576 Tensor Cores, 16 GB GDDR6, 616 GB/s. Focused on inference with INT4 support."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Ampere (2020):"
      }), " Added BF16 and structural sparsity. 6912 CUDA cores, 432 Tensor Cores (3rd gen), 40/80 GB HBM2e, 2 TB/s. A100 introduced Multi-Instance GPU (MIG) for partitioning."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hopper (2022):"
      }), " Introduced Transformer Engine with FP8. 18432 CUDA cores, 576 Tensor Cores (4th gen), 80 GB HBM3, 3.35 TB/s. Added DPX instructions for dynamic programming. H100 has 132 SMs in full config."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Blackwell (2024):"
      }), " Two dies fused into one package. 20896 CUDA cores, ~800 Tensor Cores (5th gen), 192 GB HBM3e, 4.8 TB/s. Supports FP4, FP6, and second-gen Transformer Engine. B200 delivers 4x training and 30x inference over H100."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Simulate GPU generation compute growth\r\n# Demonstrates how TFLOPS scale across generations\r\n\r\ngpu_generations = {\r\n    \"K80 (Kepler)\":   {\"cuda_cores\": 2496, \"tflops_fp32\": 4.1,  \"hbm_gb\": 24,  \"year\": 2014},\r\n    \"P100 (Pascal)\":  {\"cuda_cores\": 3584, \"tflops_fp32\": 9.3,  \"hbm_gb\": 16,  \"year\": 2016},\r\n    \"V100 (Volta)\":   {\"cuda_cores\": 5120, \"tflops_fp32\": 14.0, \"hbm_gb\": 32,  \"year\": 2017},\r\n    \"A100 (Ampere)\":  {\"cuda_cores\": 6912, \"tflops_fp32\": 19.5, \"hbm_gb\": 80,  \"year\": 2020},\r\n    \"H100 (Hopper)\":  {\"cuda_cores\": 18432,\"tflops_fp32\": 60.0, \"hbm_gb\": 80,  \"year\": 2022},\r\n    \"B200 (Blackwell)\":{\"cuda_cores\": 20896,\"tflops_fp32\": 90.0, \"hbm_gb\": 192, \"year\": 2024},\r\n}\r\n\r\nprint(f\"{'GPU':<20} {'Year':<6} {'Cores':<8} {'FP32 TFLOPS':<12} {'HBM GB':<8} {'TFLOPS/GB':<10}\")\r\nprint(\"=\"*68)\r\nfor name, spec in gpu_generations.items():\r\n    efficiency = spec[\"tflops_fp32\"] / spec[\"hbm_gb\"]\r\n    print(f\"{name:<20} {spec['year']:<6} {spec['cuda_cores']:<8} \"\r\n          f\"{spec['tflops_fp32']:<12.1f} {spec['hbm_gb']:<8} {efficiency:<10.2f}\")\r\n\r\n# Output:\r\n# TFLOPS per GB (compute/memory ratio) from K80 = 0.17 to B200 = 0.47\r\n# Shows compute is growing faster than memory capacity\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-cuda-cores-vs-tensor-cores",
      children: "1.2 CUDA Cores vs Tensor Cores"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CUDA cores and Tensor Cores serve different purposes in AI workloads. Understanding their difference is essential for optimization."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CUDA Cores:"
      }), " General-purpose scalar processors. Each CUDA core executes one floating-point or integer operation per clock cycle on a single data element (SPMD model). CUDA cores handle element-wise operations, activations, and control flow."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tensor Cores:"
      }), " Specialized matrix multiply-accumulate units. Each Tensor Core performs a 4x4 x 4x4 matrix multiply and accumulate in one cycle: D = A x B + C. Tensor Cores operate on tiles of 16x16, 8x8, or 4x4 elements depending on precision."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    subgraph CUDA[\"CUDA Core Pipeline\"]\r\n        A1[Fetch] --> A2[Decode]\r\n        A2 --> A3[ALU: a + b]\r\n        A3 --> A4[Write Back]\r\n    end\r\n    subgraph Tensor[\"Tensor Core Pipeline\"]\r\n        B1[\"Load 4x4 Tile A\"] --> B2[\"Load 4x4 Tile B\"]\r\n        B2 --> B3[\"Warp-level MMA\"]\r\n        B3 --> B4[\"Accumulate 4x4 Tile C\"]\r\n        B4 --> B5[\"Write 4x4 Result\"]\r\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key differences:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CUDA Cores"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tensor Cores"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scalar (one element)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tiled matrix (4x4 block)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Precision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FP32, INT32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FP16, BF16, INT8, FP8, FP4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 FMA/cycle/core"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64 FMA/cycle/core (FP16)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~4 cycles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~8 cycles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Activations, norms, control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GEMM, convolutions, attention"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Introduced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "G80 (2006)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Volta V100 (2017)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mixed Precision Training:"
      }), " Uses Tensor Cores for forward/backward passes (FP16/BF16) and keeps master weights in FP32. This gives 2-8x speedup over pure FP32 with no accuracy loss."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Simulate CUDA Core vs Tensor Core throughput for matrix multiply\r\nimport numpy as np\r\nimport time\r\n\r\ndef simulate_cuda_gemm(M: int, N: int, K: int, cores: int = 6912, clock_ghz: float = 1.4):\r\n    \"\"\"Simulate GEMM on CUDA cores (scalar FP32).\"\"\"\r\n    # Each core does 1 FMA per cycle = 2 FLOPs per cycle\r\n    # Total FLOPs = 2 * M * N * K (multiply + accumulate)\r\n    total_flops = 2.0 * M * N * K\r\n    peak_flops = cores * clock_ghz * 1e9  # FLOPs per second\r\n    time_seconds = total_flops / peak_flops\r\n    return time_seconds, total_flops\r\n\r\ndef simulate_tensor_gemm(M: int, N: int, K: int, tensor_cores: int = 432, clock_ghz: float = 1.4):\r\n    \"\"\"Simulate GEMM on Tensor Cores (tiled FP16).\"\"\"\r\n    # Each Tensor Core does 64 FMA/cycle = 128 FLOPs/cycle (FP16)\r\n    total_flops = 2.0 * M * N * K\r\n    # Tensor Core throughput: 128 * tensor_cores * clock\r\n    peak_flops = tensor_cores * 128 * clock_ghz * 1e9\r\n    time_seconds = total_flops / peak_flops\r\n    return time_seconds, total_flops\r\n\r\n# Matrix dimensions: 4096 x 4096 x 4096 (common in transformers)\r\nM, N, K = 4096, 4096, 4096\r\n\r\ncuda_time, cuda_flops = simulate_cuda_gemm(M, N, K)\r\ntensor_time, tensor_flops = simulate_tensor_gemm(M, N, K)\r\n\r\nprint(f\"Matrix: {M}x{N}x{K}\")\r\nprint(f\"Total FLOPs: {cuda_flops:.2e}\")\r\nprint(f\"CUDA Core time (FP32):  {cuda_time:.6f}s  ({cuda_flops/cuda_time/1e12:.2f} TFLOPS)\")\r\nprint(f\"Tensor Core time (FP16): {tensor_time:.6f}s  ({tensor_flops/tensor_time/1e12:.2f} TFLOPS)\")\r\nprint(f\"Speedup: {cuda_time/tensor_time:.1f}x\")\r\n\r\n# In practice, H100 achieves ~2000 TFLOPS on FP16 Tensor Core GEMM\r\n# vs ~60 TFLOPS on FP32 CUDA core GEMM — a 33x advantage for matmul-heavy workloads\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use each:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CUDA Cores:"
        }), " Element-wise ops (ReLU, layer norm, softmax), control flow, data loading"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tensor Cores:"
        }), " Matrix multiply (linear layers, attention projections, convolutions)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hybrid:"
        }), " Flash Attention uses both — Tensor Cores for the QK^T matmul, CUDA cores for softmax scaling"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-memory-hierarchy",
      children: "1.3 Memory Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GPU memory is a pyramid. Each level has different size, bandwidth, and latency. Optimizing data movement across levels is the key to GPU performance."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\r\n    subgraph Hierarchy[\"GPU Memory Hierarchy\"]\r\n        R[Registers<br/>64K per SM<br/>~0.5 cycle] --> SMEM[Shared Memory<br/>48-228 KB per SM<br/>~20 cycles]\r\n        SMEM --> L1[L1 Cache<br/>128-256 KB per SM<br/>~30 cycles]\r\n        L1 --> L2[L2 Cache<br/>40-60 MB<br/>~200 cycles]\r\n        L2 --> HBM[HBM3/HBM3e<br/>80-192 GB<br/>~800 cycles<br/>3.35-4.8 TB/s]\r\n    end\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bandwidth"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scope"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Register"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64K per SM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0.5 cycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~20 PB/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per thread"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shared Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "48-228 KB per SM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~20 cycles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~30 TB/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per thread block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "L1 Cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128-256 KB per SM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~30 cycles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~15 TB/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per SM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "L2 Cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40-60 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~200 cycles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~4 TB/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All SMs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HBM3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80-192 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~800 cycles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.35 TB/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All SMs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Registers:"
      }), " Fastest but per-thread. A thread can access ~255 registers (max). Using more causes register spilling to L1 — a major performance killer."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Shared Memory:"
      }), " Programmable cache shared by all threads in a block. Used for cooperative data reuse (e.g., tiled matrix multiply). Accessible in ~20 cycles vs ~800 cycles for HBM."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "L1 Cache:"
      }), " Automatically caches global memory accesses. On Hopper, L1 is 256 KB per SM. Can be partitioned: part as shared memory, part as L1 cache."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "L2 Cache:"
      }), " Shared by all SMs. H100 has 60 MB L2 — up from 40 MB on A100. Larger L2 reduces HBM pressure for workloads with reuse."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "HBM (High Bandwidth Memory):"
      }), " 3D-stacked DRAM with wide interfaces. HBM3e on Blackwell achieves 4.8 TB/s. HBM is the main bottleneck for memory-bound kernels."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Simulate latency impact of memory hierarchy on matrix multiply\r\nimport numpy as np\r\n\r\ndef simulate_memory_traffic(M: int, N: int, K: int,\r\n                            tile_size: int = 32,\r\n                            use_shared: bool = True):\r\n    \"\"\"\r\n    Estimate HBM traffic for a GEMM kernel.\r\n    Without shared memory: each A and B element is read N and M times.\r\n    With shared memory (tiling): each element is read once from HBM,\r\n    then re-used from shared memory tile_size times.\r\n    \"\"\"\r\n    total_elements_A = M * K\r\n    total_elements_B = K * N\r\n    bytes_per_elem = 2  # FP16\r\n\r\n    if use_shared:\r\n        # Tiled: each tile loaded once from HBM\r\n        # Number of tiles along K: K / tile_size\r\n        # Each tile of A (M x tile_size) and B (tile_size x N)\r\n        # loaded once\r\n        hbm_traffic = (total_elements_A + total_elements_B) * bytes_per_elem\r\n        shared_traffic = (total_elements_A + total_elements_B) * bytes_per_elem\r\n        label = \"With shared memory (tiled)\"\r\n    else:\r\n        # Naive: each thread loads A row M times, B column N times\r\n        hbm_traffic = (total_elements_A * N + total_elements_B * M) * bytes_per_elem\r\n        shared_traffic = 0\r\n        label = \"Without shared memory\"\r\n\r\n    print(f\"{label}:\")\r\n    print(f\"  HBM traffic:  {hbm_traffic / 1e9:.2f} GB\")\r\n    print(f\"  Shared traffic: {shared_traffic / 1e6:.2f} MB\")\r\n    print(f\"  Ratio (wasted bandwidth): {(total_elements_A * N + total_elements_B * M) / (total_elements_A + total_elements_B):.1f}x\")\r\n\r\n    hbm_bandwidth = 3.35e12  # 3.35 TB/s\r\n    time_with_tiling = hbm_traffic / hbm_bandwidth\r\n    time_without_tiling = (total_elements_A * N + total_elements_B * M) * bytes_per_elem / hbm_bandwidth\r\n\r\n    print(f\"  HBM time (w/ tiling):  {time_with_tiling*1000:.3f} ms\")\r\n    print(f\"  HBM time (w/o tiling): {time_without_tiling*1000:.3f} ms\")\r\n    print(f\"  Speedup: {time_without_tiling / time_with_tiling:.1f}x\")\r\n    print()\r\n\r\nsimulate_memory_traffic(4096, 4096, 4096, tile_size=32, use_shared=True)\r\nsimulate_memory_traffic(4096, 4096, 4096, tile_size=32, use_shared=False)\r\n\r\n# Key insight: tiling reduces HBM traffic by ~tile_size x\r\n# 4096/32 = 128x less traffic\r\n# This is why shared memory is critical for performance\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Memory coalescing:"
      }), " When threads in a warp access consecutive addresses, the memory controller fetches in one 128-byte transaction. Misaligned or strided access causes multiple transactions — reducing effective bandwidth by up to 10x."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-interconnects--multi-gpu-topologies",
      children: "1.4 Interconnects — Multi-GPU Topologies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI models larger than a single GPU's memory (e.g., Llama 3 405B, GPT-4) require multiple GPUs. Interconnects define how fast GPUs communicate."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\r\n    subgraph DGX[\"DGX H100 Topology\"]\r\n        GPU0[GPU 0] ---|NVLink4 900 GB/s| GPU1[GPU 1]\r\n        GPU2[GPU 2] ---|NVLink4 900 GB/s| GPU3[GPU 3]\r\n        GPU1 ---|NVLink4| GPU2\r\n        GPU0 ---|NVLink4| GPU3\r\n        GPU0 ---|NVSwitch| GPU4[GPU 4]\r\n        GPU4 --- GPU5[GPU 5]\r\n        GPU6[GPU 6] --- GPU7[GPU 7]\r\n    end\r\n    subgraph HostConnect[\"Host Connection\"]\r\n        CPU[CPU] ---|PCIe Gen5<br/>128 GB/s| GPU0\r\n        CPU ---|PCIe Gen5| GPU4\r\n    end\r\n    subgraph NodeConnect[\"Multi-Node\"]\r\n        DGX ---|InfiniBand NDR400<br/>50 GB/s per link| DGX2[Another DGX H100]\r\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PCI Express (PCIe):"
      }), " Standard CPU-to-GPU link. Each GPU connects through the PCIe root complex."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "PCIe Gen"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Lanes"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bandwidth (x16, each direction)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Total Duplex"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gen3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 GB/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32 GB/s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gen4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32 GB/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64 GB/s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gen5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64 GB/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128 GB/s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gen6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128 GB/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256 GB/s"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NVLink:"
      }), " High-bandwidth GPU-to-GPU interconnect. Direct connection without CPU involvement."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Version"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Links"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bandwidth (full duplex, per GPU)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Introduced"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NVLink 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "160 GB/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P100"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NVLink 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "300 GB/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V100"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NVLink 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "600 GB/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A100"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NVLink 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "900 GB/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "H100"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NVLink 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1800 GB/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B200"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NVSwitch:"
      }), " A fabric switch that connects all GPUs in a DGX system in a full all-to-all topology. DGX H100 has 4 NVSwitches providing 900 GB/s per GPU. Combined with SHARP (Scalable Hierarchical Aggregation and Reduction Protocol), it offloads gradient reduction to the network."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "InfiniBand:"
      }), " Node-to-node interconnect for multi-node training."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Generation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data Rate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bandwidth per link"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Connector"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HDR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25 GB/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QSFP56"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NDR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "400 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 GB/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QSFP112"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XDR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "800 Gbps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 GB/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QSFP224"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topology comparison:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topology"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "All-reduce time (8 GPUs)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scalability"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PCIe ring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~200 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NVLink ring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~20 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NVSwitch + NVLink"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~5 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "InfiniBand (multi-node)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~2 ms per hop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Estimate all-reduce time for different interconnects\r\nimport math\r\n\r\ndef estimate_allreduce_time(\r\n    model_size_gb: float,\r\n    num_gpus: int,\r\n    interconect_bw_gbs: float,\r\n    topology: str = \"ring\"\r\n):\r\n    \"\"\"\r\n    Estimate all-reduce communication time.\r\n    Ring: 2 * (num_gpus - 1) / num_gpus * model_size / bw\r\n    Tree: 2 * log2(num_gpus) * model_size / bw\r\n    \"\"\"\r\n    if topology == \"ring\":\r\n        # Ring all-reduce: scatter-reduce + all-gather\r\n        # Each step: (num_gpus - 1) / num_gpus * model_size\r\n        factor = 2.0 * (num_gpus - 1) / num_gpus\r\n    elif topology == \"tree\":\r\n        # Tree all-reduce: log2(num_gpus) levels\r\n        factor = 2.0 * math.log2(num_gpus)\r\n    elif topology == \"all2all\":\r\n        # NVSwitch: ~1x model size (single hop)\r\n        factor = 2.0\r\n    else:\r\n        raise ValueError(f\"Unknown topology: {topology}\")\r\n\r\n    # Time in milliseconds\r\n    time_ms = factor * model_size_gb / interconect_bw_gbs * 1000\r\n    effective_bw = model_size_gb / (time_ms / 1000)\r\n    return time_ms, effective_bw\r\n\r\nmodel_gb = 80.0  # Llama 3 405B in FP16 ~ 80 GB\r\nnum_gpus = 8\r\n\r\nconfigs = [\r\n    (\"PCIe Gen5 (ring)\", 128 / 8, \"ring\"),  # 128 GB/s shared among 8 GPUs\r\n    (\"NVLink3 (ring)\", 600 / 8, \"ring\"),\r\n    (\"NVLink4 (ring)\", 900 / 8, \"ring\"),\r\n    (\"NVLink4 + NVSwitch\", 900, \"all2all\"),\r\n    (\"InifiniBand NDR (tree)\", 50, \"tree\"),\r\n]\r\n\r\nprint(f\"Model: {model_gb} GB on {num_gpus} GPUs\")\r\nprint(f\"{'Interconnect':<30} {'Time (ms)':<12} {'Effective BW (GB/s)':<20}\")\r\nprint(\"=\"*62)\r\n\r\nfor name, bw, topo in configs:\r\n    time_ms, eff_bw = estimate_allreduce_time(model_gb, num_gpus, bw, topo)\r\n    print(f\"{name:<30} {time_ms:<12.1f} {eff_bw:<20.1f}\")\r\n\r\n# NVSwitch reduces all-reduce time from ~444ms (PCIe ring) to ~6ms\r\n# This directly impacts training efficiency for large models\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-roofline-model",
      children: "1.5 Roofline Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The roofline model is a visual performance model that helps identify bottlenecks. It plots achievable FLOP/s versus arithmetic intensity (FLOPs per byte)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Arithmetic intensity:"
      }), " I = total FLOPs / total bytes moved from HBM."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compute-bound:"
        }), " Ops limited by compute throughput (high I). The kernel hits the compute ceiling."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Memory-bound:"
        }), " Ops limited by memory bandwidth (low I). The kernel hits the memory ceiling."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    subgraph RL[\"Roofline Model\"]\r\n        direction TB\r\n        MB[Memory Bound<br/>I < Ridge Point] -->|Low Arithmetic Intensity| CP[Compute Peak]\r\n        CB[Compute Bound<br/>I > Ridge Point] --> CP\r\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    subgraph Roofline[\"Roofline Chart\"]\r\n        A[Log(FLOP/s)] --> B[Log(Arithmetic Intensity)]\r\n        C[Memory BW ceiling<br/>slope = 1] --> D[Ridge Point]\r\n        E[Compute ceiling<br/>horizontal line] --> D\r\n        F[Memory-bound ops<br/>e.g., softmax, norms] --> C\r\n        G[Compute-bound ops<br/>e.g., large matmul] --> E\r\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Visualize the roofline model with NumPy\r\nimport numpy as np\r\n\r\ndef roofline_analysis(\r\n    total_flops: float,\r\n    total_bytes: float,\r\n    peak_compute_tflops: float,   # TFLOPS/s\r\n    peak_bandwidth_tbs: float     # TB/s\r\n):\r\n    \"\"\"\r\n    Apply roofline model to determine if a kernel is compute-bound or memory-bound.\r\n    \"\"\"\r\n    arithmetic_intensity = total_flops / total_bytes  # FLOPs/byte\r\n    ridge_point = peak_compute_tflops / peak_bandwidth_tbs  # FLOPs/byte\r\n\r\n    # Maximum achievable performance\r\n    # Limited by bandwidth (memory-bound) or compute (compute-bound)\r\n    bw_bound_flops = total_bytes * peak_bandwidth_tbs * 1e12  # FLOPs/s limited by BW\r\n    compute_bound_flops = peak_compute_tflops * 1e12  # FLOPs/s limited by compute\r\n\r\n    achievable_flops = min(bw_bound_flops, compute_bound_flops)\r\n    achieved_tflops = achievable_flops / 1e12\r\n\r\n    is_compute_bound = arithmetic_intensity >= ridge_point\r\n    achieved_efficiency = achieved_tflops / peak_compute_tflops * 100\r\n\r\n    print(f\"Arithmetic Intensity: {arithmetic_intensity:.2f} FLOPs/byte\")\r\n    print(f\"Ridge Point:         {ridge_point:.2f} FLOPs/byte\")\r\n    print(f\"Type:                {'COMPUTE BOUND' if is_compute_bound else 'MEMORY BOUND'}\")\r\n    print(f\"Achievable:          {achieved_tflops:.1f} TFLOPS/s\")\r\n    print(f\"Efficiency:          {achieved_efficiency:.1f}%\")\r\n\r\n    return {\r\n        \"arithmetic_intensity\": arithmetic_intensity,\r\n        \"ridge_point\": ridge_point,\r\n        \"is_compute_bound\": is_compute_bound,\r\n        \"achieved_tflops\": achieved_tflops,\r\n        \"efficiency\": achieved_efficiency\r\n    }\r\n\r\n# H100 specs\r\nPEAK_COMPUTE = 2000  # TFLOPS (FP16 Tensor Core)\r\nPEAK_BW = 3.35       # TB/s HBM3\r\n\r\n# Common AI kernel profiles\r\nkernels = [\r\n    (\"Matmul 4096x4096x4096\", 2*4096*4096*4096, 3*4096*4096*2),   # 2*M*N*K FLOPs, A+B+C in FP16\r\n    (\"Layer Norm 4096\", 4*4096, 2*4096*2),                         # 4N FLOPs, read+write FP16\r\n    (\"Softmax 4096\", 5*4096, 2*4096*2),                            # exp+sum+div = 5N\r\n    (\"Attention QK^T (4096x4096)\", 2*4096*4096, 2*4096*4096*2),   # matmul\r\n    (\"GeLU Activation 4096\", 3*4096, 2*4096*2),                    # ~3 ops per element\r\n    (\"Flash Attention (4096, 128, 64)\", 2*4096*4096*64, 4096*4096*2*2),  # tiled with reuse\r\n    (\"Convolution 3x3 256ch\", 2*3*3*256*256*64*64, 3*3*256*2 + 256*2), # small tile\r\n]\r\n\r\nprint(f\"{'Kernel':<35} {'Intensity':<12} {'Status':<18} {'TFLOPS':<10} {'Efficiency':<10}\")\r\nprint(\"=\"*85)\r\n\r\nfor name, flops, bytes_moved in kernels:\r\n    result = roofline_analysis(flops, bytes_moved, PEAK_COMPUTE, PEAK_BW)\r\n    print(f\"{name:<35} {result['arithmetic_intensity']:<12.2f} \"\r\n          f\"{'COMPUTE' if result['is_compute_bound'] else 'MEMORY':<18} \"\r\n          f\"{result['achieved_tflops']:<10.1f} {result['efficiency']:<10.1f}%\")\r\n    print(\"-\"*85)\r\n\r\n# Key insight:\r\n# Large matmuls are compute-bound (high arithmetic intensity)\r\n# Activations and norms are memory-bound (low arithmetic intensity)\r\n# Flash Attention tiles the matmul to balance both\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Ridge point:"
      }), " The arithmetic intensity where the two ceilings meet. On H100 with FP16 Tensor Cores: ridge = 2000 TFLOPS / 3.35 TB/s ≈ 597 FLOPs/byte. Ops above 597 FLOP/byte are compute-bound. Ops below are memory-bound."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Optimization strategies:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Bottleneck"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fix"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory-bound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel fusion, tiling, reduce HBM reads, use shared memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compute-bound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Tensor Cores, mixed precision, increase batch size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency-bound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increase occupancy, hide latency with more warps"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-cpu-vs-gpu-vs-tpu-vs-npu",
      children: "1.6 CPU vs GPU vs TPU vs NPU"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each processor is designed for a different workload. Choosing the right one affects cost, speed, and energy."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\r\n    subgraph CPUs[\"CPU (x86/ARM)\"]\r\n        CPUCore1[Core 1] --> Cache1[L1/L2 Cache]\r\n        CPUCore2[Core 2] --> Cache2[L1/L2 Cache]\r\n        CPUCoreN[Core N] --> CacheN[L1/L2 Cache]\r\n        Cache1 --> L3[L3 Cache Shared]\r\n        Cache2 --> L3\r\n        CacheN --> L3\r\n        L3 --> RAM_DDR[DDR5 RAM]\r\n    end\r\n    subgraph GPUs[\"GPU (NVIDIA/AMD)\"]\r\n        SM1[SM 1] --> SMEM1[Shared Mem]\r\n        SM2[SM 2] --> SMEM2[Shared Mem]\r\n        SMN[SM N] --> SMEMN[Shared Mem]\r\n        SMEM1 --> L2[L2 Cache]\r\n        SMEM2 --> L2\r\n        SMEMN --> L2\r\n        L2 --> HBM[HBM3]\r\n    end\r\n    subgraph TPUs[\"TPU (Google)\"]\r\n        MXU[MXU<br/>Matrix Multiply Unit<br/>128x128 systolic array] --> VB[Vector Unit]\r\n        VB --> HBM_TPU[HBM2e]\r\n        SC[Scalar Unit] --> HBM_TPU\r\n    end\r\n    subgraph NPUs[\"NPU (Apple/Qualcomm)\"]\r\n        Neural[Neural Engine<br/>16+ cores] --> DM[Dedicated Memory]\r\n        DM --> SystemRAM[Shared System RAM]\r\n    end\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CPU"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "GPU"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TPU"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NPU"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cores"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8-128 (big cores)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10000+ (small cores)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 MXU + Vector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16-32 AI cores"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex OoO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple in-order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed-function"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large (32 MB L3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small (60 MB L2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DDR5 (100 GB/s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HBM3 (3.35 TB/s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HBM2e (1.2 TB/s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared w/ CPU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Precision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FP64/FP32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FP32/FP16/INT8/FP4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BF16/INT8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INT8/INT16"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Peak TFLOPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~2 (FP32)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~2000 (FP16)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~275 (BF16)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~30 (INT8)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TDP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "150-350W"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "350-700W"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200-450W"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-15W"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$500-$5000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$10K-$40K"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$50K+ (pod)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$50-$200"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use each:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CPU:"
      }), " Sequential code, data preprocessing, orchestration, control logic. Use CPU for data loading, augmentation, and pipeline coordination. CPUs are latency-optimized: they handle branching and random access well."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU:"
      }), " Parallel compute — matrix multiply, convolutions, attention. GPU is the workhorse for training and batch inference. Required for backprop and large-scale transformer training. NVIDIA GPUs dominate with CUDA ecosystem."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "TPU:"
      }), " Google's custom ASIC for tensor operations. TPUs use systolic arrays for matrix multiply (MXU). Best for very large models on Google Cloud (Gemini, PaLM). Requires JAX or TensorFlow. TPU v5e delivers ~400 TFLOPS/BF16 per chip."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NPU:"
      }), " Low-power AI accelerators in mobile and edge devices. Apple Neural Engine (17 TOPS in M4), Qualcomm Hexagon (45 TOPS in Snapdragon 8 Gen 3). NPUs handle on-device inference, camera processing, and always-on AI."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cost comparison for training a 7B parameter model:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Estimate cost to train a 7B parameter model on different hardware\r\ndef estimate_training_cost(\r\n    params_b: float = 7.0,\r\n    tokens_b: float = 2000.0,  # 2T tokens (Llama 2 scale)\r\n    tflops_per_gpu: float = 312.0,  # FP8 Tensor Core TFLOPS on H100\r\n    num_gpus: int = 256,\r\n    gpu_cost_per_hour: float = 3.0,\r\n    model_flops_per_token: float = None\r\n):\r\n    \"\"\"\r\n    Estimate training cost using the formula:\r\n    Total FLOPs ≈ 6 * params * tokens (forward + backward)\r\n    Time = Total FLOPs / (num_gpus * tflops_per_gpu * 1e12 * MFU)\r\n    \"\"\"\r\n    mfu = 0.45  # Model FLOPs Utilization (typical for large-scale training)\r\n\r\n    if model_flops_per_token is None:\r\n        # Standard formula: 6 * params per token (forward+backward)\r\n        model_flops_per_token = 6.0 * params_b * 1e9\r\n\r\n    total_flops = model_flops_per_token * tokens_b * 1e9\r\n    flops_per_second = num_gpus * tflops_per_gpu * 1e12 * mfu\r\n    time_seconds = total_flops / flops_per_second\r\n    time_hours = time_seconds / 3600\r\n\r\n    total_cost = time_hours * num_gpus * gpu_cost_per_hour\r\n\r\n    print(f\"Training {params_b}B param model on {tokens_b}B tokens\")\r\n    print(f\"Hardware: {num_gpus} GPUs at {tflops_per_gpu} TFLOPS each\")\r\n    print(f\"MFU: {mfu:.0%}\")\r\n    print(f\"Estimated time: {time_hours:.1f} hours ({time_hours/24:.1f} days)\")\r\n    print(f\"Estimated cost: ${total_cost:,.0f}\")\r\n    print(f\"Cost per GPU-hour: ${gpu_cost_per_hour}\")\r\n\r\n    return time_hours, total_cost\r\n\r\nconfigs = [\r\n    (\"8x A100 (80GB)\", 19.5, 8, 2.50, 0.45),\r\n    (\"8x H100 (80GB)\", 66.9, 8, 4.00, 0.50),\r\n    (\"256x H100 (DGX SuperPOD)\", 66.9, 256, 3.50, 0.55),\r\n    (\"TPU v5e (8 chip)\", 196.0, 8, 8.00, 0.50),\r\n    (\"4x B200 (Blackwell)\", 180.0, 4, 6.00, 0.55),\r\n]\r\n\r\nfor name, tflops, gpus, cost, mfu in configs:\r\n    print(\"=\"*60)\r\n    estimate_training_cost(\r\n        params_b=7.0,\r\n        tokens_b=2000,\r\n        tflops_per_gpu=tflops,\r\n        num_gpus=gpus,\r\n        gpu_cost_per_hour=cost\r\n    )\r\n    print()\r\n\r\n# H100 clusters dominate price-performance for training\r\n# TPUs are competitive at very large scale (1000+ chips)\r\n# Blackwell offers 2-3x cost reduction per token\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Summary of architectural differences:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CPU"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "GPU"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TPU"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NPU"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Out-of-order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIMT warp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIMD systolic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed pipeline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache coherent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit + cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "H2D explicit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Programming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CUDA, OpenCL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JAX, TF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CoreML, NNAPI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Paradigm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MIMD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIMT (SPMD)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIMD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dataflow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ML training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not feasible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best (Ampere+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Competitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ML inference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent (edge)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flexibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lowest"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-matrix-multiply-with-memory-bound-vs-compute-bound-profiles",
      children: "Example 1: Matrix Multiply with Memory-Bound vs Compute-Bound Profiles"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\r\nimport time\r\n\r\ndef benchmark_gemm(M: int, N: int, K: int, dtype=np.float16, iters: int = 10):\r\n    \"\"\"Benchmark a GEMM operation and classify as compute or memory bound.\"\"\"\r\n    A = np.random.randn(M, K).astype(dtype)\r\n    B = np.random.randn(K, N).astype(dtype)\r\n\r\n    # Warmup\r\n    C = A @ B\r\n\r\n    # Benchmark\r\n    times = []\r\n    for _ in range(iters):\r\n        start = time.perf_counter()\r\n        C = A @ B\r\n        times.append(time.perf_counter() - start)\r\n\r\n    avg_time = np.median(times)  # Use median to filter outliers\r\n    total_flops = 2.0 * M * N * K\r\n    total_bytes = (M*K + K*N + M*N) * np.dtype(dtype).itemsize\r\n\r\n    tflops = total_flops / avg_time / 1e12\r\n    bw = total_bytes / avg_time / 1e9  # GB/s\r\n    intensity = total_flops / total_bytes\r\n\r\n    print(f\"GEMM {M}x{N}x{K} ({dtype.__name__})\")\r\n    print(f\"  Time: {avg_time*1000:.3f} ms\")\r\n    print(f\"  TFLOPS: {tflops:.2f}\")\r\n    print(f\"  Effective BW: {bw:.1f} GB/s\")\r\n    print(f\"  Arithmetic Intensity: {intensity:.1f} FLOPs/byte\")\r\n\r\n    # Classify (assume H100: 2000 TFLOPS, 3350 GB/s)\r\n    ridge_point = 2000 / 3.35  # ~597 FLOPs/byte\r\n    if intensity > ridge_point:\r\n        print(f\"  Status: COMPUTE BOUND (intensity {intensity:.0f} > ridge {ridge_point:.0f})\")\r\n    else:\r\n        print(f\"  Status: MEMORY BOUND (intensity {intensity:.0f} < ridge {ridge_point:.0f})\")\r\n    print()\r\n\r\nbenchmark_gemm(128, 128, 128)      # Small: memory bound\r\nbenchmark_gemm(1024, 1024, 1024)   # Medium: transitional\r\nbenchmark_gemm(4096, 4096, 4096)   # Large: compute bound\r\n\r\n# Real GPUs achieve 50-80% of peak FLOPs on large matmuls\r\n# This NumPy simulation shows the intensity trend\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-data-movement-optimization",
      children: "Example 2: Data Movement Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Estimate how many float16 elements fit in each memory level\r\nfrom math import log2\r\n\r\ndef memory_profile():\r\n    sizes = {\r\n        \"Register (per thread)\":   (255, \"elements\", 0.5),\r\n        \"Shared Mem (per block)\":  (49152, \"elements\", 20),     # 48 KB default\r\n        \"L1 Cache (per SM)\":       (131072, \"elements\", 30),    # 256 KB\r\n        \"L2 Cache (total)\":        (31457280, \"elements\", 200), # 60 MB\r\n        \"HBM3 (total)\":            (42949672960, \"elements\", 800), # 80 GB\r\n    }\r\n\r\n    print(f\"{'Memory Level':<30} {'Size (elems)':<18} {'Latency':<12}\")\r\n    print(\"=\"*60)\r\n    for level, (size, unit, latency) in sizes.items():\r\n        print(f\"{level:<30} {size:<18,} {latency:<12}\")\r\n\r\n    # Bandwidth pyramid (GB/s)\r\n    print(\"\\nBandwidth Pyramid:\")\r\n    bws = {\r\n        \"Register (per SM)\": 20_000,   # 20 PB/s (aggregate)\r\n        \"Shared Memory\":     30_000,   # 30 TB/s\r\n        \"L1 Cache\":          15_000,   # 15 TB/s\r\n        \"L2 Cache\":          4_000,    # 4 TB/s\r\n        \"HBM3\":              3_350,    # 3.35 TB/s\r\n    }\r\n    for level, bw in bws.items():\r\n        bar = \"#\" * (bw // 500)\r\n        print(f\"{level:<25} {bw:>8,} GB/s |{bar}\")\r\n\r\nmemory_profile()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-1-nvidia",
      children: "Question 1 (NVIDIA)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " Explain the difference between CUDA Cores and Tensor Cores on an H100 GPU. When would you use each?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " CUDA Cores are scalar ALUs that execute one FP32/INT32 operation per cycle per core. H100 has 18432 CUDA Cores providing ~60 TFLOPS FP32. Tensor Cores are specialized matrix multiply units that operate on 4x4 tiles. Each Tensor Core performs D = A x B + C in one cycle, giving ~2000 TFLOPS FP16 and ~4000 TFLOPS FP8. Use CUDA Cores for element-wise ops (activations, normalization, control flow) and Tensor Cores for matrix multiply (linear layers, attention, convolutions). In practice, Flash Attention uses Tensor Cores for matmuls and CUDA Cores for softmax scaling."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-2-amazon",
      children: "Question 2 (Amazon)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " How does NVLink differ from PCIe in multi-GPU training? Why does this matter for large models?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " NVLink is a direct GPU-to-GPU interconnect, while PCIe connects GPUs through the CPU root complex. NVLink4 provides 900 GB/s bidirectional bandwidth per GPU vs PCIe Gen5 at 128 GB/s. For large model training (e.g., Llama 3 405B), gradient all-reduce is a bottleneck. With NVLink + NVSwitch, all-reduce completes in ~6ms. With PCIe ring, it takes ~444ms. This directly impacts scaling efficiency. A model using PCIe might achieve 60% scaling efficiency across 8 GPUs, while NVLink achieves 90%+."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-3-microsoft",
      children: "Question 3 (Microsoft)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " Explain the GPU memory hierarchy from fastest to slowest. How does shared memory improve matmul performance?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Hierarchy: Register (~0.5 cycle) → Shared Memory (~20 cycles) → L1 Cache (~30 cycles) → L2 Cache (~200 cycles) → HBM3 (~800 cycles). Shared memory is on-chip SRAM programmable by the developer. For matmul, threads cooperatively load tiles of A and B into shared memory, then all threads in the block reuse the same tile. This reduces HBM reads from O(M", (0,jsx_runtime.jsx)(_components.em, {
        children: "N"
      }), "K) to O(M", (0,jsx_runtime.jsx)(_components.em, {
        children: "K + K"
      }), "N) — a tile_size improvement. For a 32x32 tile on a 4096x4096 matmul, shared memory reduces HBM traffic by 128x."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-4-nvidia",
      children: "Question 4 (NVIDIA)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " What is the roofline model? How do you use it to optimize a kernel?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " The roofline model plots achievable FLOP/s vs arithmetic intensity (FLOPs per byte fetched from memory). It has two ceilings: the memory bandwidth ceiling (diagonal line, slope = peak bandwidth) and the compute ceiling (horizontal line at peak FLOP/s). The ridge point is where they intersect. If a kernel's arithmetic intensity is below the ridge point, it is memory-bound — optimize by fusing ops, using shared memory, or reducing precision. If above, it is compute-bound — optimize by using Tensor Cores, increasing tile size, or improving occupancy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-5-amazon",
      children: "Question 5 (Amazon)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " Compare HBM3 to GDDR6X. Why does HBM dominate in H100 while GDDR6X is used in RTX 4090?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " HBM3 uses 3D-stacked DRAM with a wide interface (1024-bit per stack), achieving 3.35 TB/s bandwidth at 80 GB capacity. GDDR6X uses a narrower 384-bit bus at higher clock speeds, achieving 1 TB/s at 24 GB. HBM is expensive (~5x per GB) but provides 3x more bandwidth and 10x more capacity — necessary for large model training. GDDR6X is cheaper and sufficient for gaming and small models. HBM is also more power-efficient per bit transferred, critical for datacenter GPUs at 700W TDP."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-6-microsoft",
      children: "Question 6 (Microsoft)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " What is arithmetic intensity and why is it important for GPU kernel design?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Arithmetic intensity = total FLOPs / total bytes transferred to/from HBM. A high intensity kernel (e.g., matmul 4096x4096: ~682 FLOPs/byte) is compute-bound, meaning the GPU's Tensor Cores are the bottleneck. A low intensity kernel (e.g., ReLU: ~0.75 FLOPs/byte) is memory-bound, meaning HBM bandwidth is the bottleneck. Kernel fusion increases arithmetic intensity by combining multiple ops into one kernel, keeping intermediate results in registers/shared memory instead of writing to HBM."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-7-nvidia",
      children: "Question 7 (NVIDIA)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " Explain how NVSwitch enables scaling to 256+ GPUs. What is SHARP?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " NVSwitch is a fully-connected crossbar that connects all GPUs in a DGX system. DGX H100 has 4 NVSwitches providing 900 GB/s per GPU total bandwidth (450 GB/s bidirectional). This creates a single all-to-all topology: any GPU talks to any other GPU at full NVLink speed without traversing hops. SHARP (Scalable Hierarchical Aggregation and Reduction Protocol) offloads gradient reduction (all-reduce) to the NVSwitch fabric itself. The switch computes partial sums while data moves through it — reducing traffic by ~2x and eliminating the GPU overhead for reduction."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-8-googletpu-focus",
      children: "Question 8 (Google/TPU focus)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " How does a Google TPU differ from an NVIDIA GPU for training transformer models?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " TPUs use systolic arrays (MXU — Matrix Multiply Unit) that perform 128x128 matrix multiply in a single instruction. GPUs use Tensor Cores operating on 4x4 tiles. TPUs are simpler (no complex cache hierarchy, no warp scheduling) so they achieve higher utilization for regular matmul-heavy workloads (up to 70% MFU vs 50% for GPUs). However, TPUs are less flexible: they struggle with irregular ops (gather, dynamic shapes, control flow). GPUs handle these better due to CUDA Cores and advanced scheduling. TPUs require JAX/TensorFlow, while GPUs support PyTorch natively. For cost, TPUs are competitive only at very large scale (1000+ chips)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-9-infrastructure",
      children: "Question 9 (Infrastructure)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " What happens when a model exceeds single GPU memory? Describe the options."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Three options: (1) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Model parallelism"
      }), " — split layers across GPUs, each GPU holds part of the model. Requires high-bandwidth interconnect (NVLink). (2) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pipeline parallelism"
      }), " — split the model depth-wise, each GPU processes a stage. Lower communication but has idle bubble. (3) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tensor parallelism"
      }), " — split each layer's weights across GPUs. Requires all-reduce per layer — only feasible with NVLink/NVSwitch. (4) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Offloading"
      }), " — swap activations/optimizer states to CPU RAM. Slow (PCIe bottleneck) but works for single GPU fine-tuning. In practice, large training uses 3D parallelism: data + tensor + pipeline parallelism combined."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-10-architecture",
      children: "Question 10 (Architecture)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " Why is shared memory important for GPU performance? Give a concrete example."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Shared memory is on-chip SRAM (48-228 KB per SM) that is ~40x faster than HBM and programmable. It enables cooperative data reuse across threads in a block. Concrete example: tiled matrix multiply. Without shared memory, each thread block loading a 32x32 tile of A and B reads from HBM every time. With shared memory, the tile is loaded once from HBM (coalesced), then 32x32 threads read from shared memory in 32 parallel iterations. This reduces HBM traffic by 32x. In practice, cuBLAS uses this technique, achieving >80% of peak Tensor Core performance on large matrices."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GPU architecture for AI is defined by three pillars: compute units (CUDA Cores and Tensor Cores), memory hierarchy (register → shared → L1/L2 → HBM), and interconnects (PCIe, NVLink, NVSwitch, InfiniBand). Each NVIDIA generation from Volta to Blackwell has added specialized hardware for matrix math, lower precision, and faster memory. The roofline model helps engineers classify kernels as compute-bound or memory-bound and optimize accordingly. Choosing between CPU, GPU, TPU, and NPU depends on workload: GPU for training, CPU for preprocessing, TPU for large-scale JAX workflows, and NPU for edge inference. Mastery of GPU architecture is essential for any AI engineer deploying or optimizing large models."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " Which NVIDIA GPU generation first introduced Tensor Cores?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) Pascal (P100)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) Volta (V100)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) Turing (T200)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Ampere (A100)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A1:"
      }), " b) Volta (V100) — Tensor Cores debuted in 2017 with the V100 GPU."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2:"
      }), " What is the arithmetic intensity ridge point of H100 with FP16 Tensor Cores?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) ~100 FLOPs/byte"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) ~300 FLOPs/byte"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) ~600 FLOPs/byte"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) ~1000 FLOPs/byte"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A2:"
      }), " c) ~600 FLOPs/byte (2000 TFLOPS / 3.35 TB/s ≈ 597 FLOPs/byte)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3:"
      }), " Which interconnect provides the highest bandwidth for GPU-to-GPU communication in a DGX H100?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) PCIe Gen5"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) NVLink 4"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) InfiniBand NDR"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Ethernet 400G"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A3:"
      }), " b) NVLink 4 provides 900 GB/s full-duplex per GPU. PCIe Gen5 gives 128 GB/s, InfiniBand NDR gives 50 GB/s per link."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4:"
      }), " In the GPU memory hierarchy, which level is the fastest?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) HBM3"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) L1 Cache"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) Shared Memory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Registers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A4:"
      }), " d) Registers — ~0.5 cycle latency. Shared memory is ~20 cycles, L1 ~30 cycles, HBM ~800 cycles."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5:"
      }), " Which processor type is best suited for low-power on-device AI inference?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) CPU"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) GPU"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) TPU"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) NPU"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A5:"
      }), " d) NPU — Neural Processing Units (Apple Neural Engine, Qualcomm Hexagon) are designed for 5-15W power budget. GPUs consume 350-700W. CPUs are inefficient. TPUs are cloud-only."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 1:"
      }), " Modify the roofline analysis code to include FP8 Tensor Cores (4000 TFLOPS) and recompute the ridge point. Which kernels become compute-bound that were memory-bound before?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 2:"
      }), " Write a function that given a model size (GB) and number of GPUs, recommends the minimum interconnect bandwidth for 90% scaling efficiency. Use the all-reduce estimator."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 3:"
      }), " For a 70B parameter model (140 GB in FP16), design the memory allocation across 8 H100 GPUs. Account for: parameters, gradients, optimizer states (Adam: 2x for momentum + variance), and activations."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 4:"
      }), " Using the memory hierarchy simulator, compare HBM traffic for a 2x2 tiled convolution vs a naive convolution. Show the bandwidth savings in GB and percentage."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 5:"
      }), " Plot the roofline model (log-log scale) for the H100 with labeled ceilings and 5 kernel types. Include: matmul 512, matmul 4096, layer norm, softmax, and Flash Attention. Use matplotlib or any plotting library."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GPU generations matter:"
        }), " Each NVIDIA generation (Volta → Ampere → Hopper → Blackwell) doubles compute and adds new precision formats (FP16, BF16, INT8, FP8, FP4)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tensor Cores are 10-30x faster than CUDA Cores"
        }), " for matrix multiply — use them with mixed precision for all linear and attention layers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Memory hierarchy determines performance:"
        }), " Registers and shared memory are 40-800x faster than HBM. Kernel fusion and tiling reduce HBM traffic by 10-100x."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-GPU scaling requires fast interconnects:"
        }), " NVLink + NVSwitch gives 900 GB/s per GPU — essential for tensor parallelism. InfiniBand connects nodes in SuperPODs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The roofline model identifies bottlenecks:"
        }), " Use arithmetic intensity to classify kernels as compute-bound or memory-bound, then apply targeted optimizations."]
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
            children: "Explain this topic in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function in this chapter."
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
            children: "Describe a production bug caused by misunderstanding this technique. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system using this technique from 10 users to 10 million?"
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
            children: "Compare this approach with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component built on this."
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
            children: "How does GPU Architecture for AI behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of this technique run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of this technique that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name the technique explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using GPU Architecture for AI\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies GPU Architecture for AI to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside GPU Architecture for AI (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of GPU Architecture for AI and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a GPU Architecture for AI-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic problem in this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply GPU Architecture for AI in production today?"
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
        }), " GPU Architecture for AI builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for GPU Architecture for AI before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for GPU Architecture for AI is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for GPU Architecture for AI in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize this chapter's content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers GPU Architecture for AI is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 01 Gpu Architecture is ___. — Answer: O(n) typical, O(1) best case"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 01 Gpu Architecture is ___. — Answer: empty input, boundary values, invalid types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug GPU Architecture for AI issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to GPU Architecture for AI in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving GPU Architecture for AI that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of this technique is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain GPU Architecture for AI in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for GPU Architecture for AI and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of this technique on an empty input?"
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
            children: "Complete Medium exercises, explain GPU Architecture for AI to someone else"
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
        children: "Always write a one-line example of GPU Architecture for AI from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered GPU Architecture for AI when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining GPU Architecture for AI twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own GPU Architecture for AI snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of GPU Architecture for AI listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link GPU Architecture for AI to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of GPU Architecture for AI by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain GPU Architecture for AI to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The original research paper introducing this concept (search Google Scholar)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Towards Data Science articles on this topic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The relevant chapter in 'Designing Data-Intensive Applications' by Kleppmann"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub repositories of production implementations Architecture for AI"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 27 — builds the foundation for 01 Gpu Architecture"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 01 Gpu Architecture with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 01 Gpu Architecture fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 01 Gpu Architecture"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 01 Gpu Architecture"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 01 Gpu Architecture?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 01 Gpu Architecture?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 01 Gpu Architecture asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 01 Gpu Architecture?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPU Architecture for AI is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with GPU Architecture for AI."
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
        children: "GPU Architecture for AI emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for GPU Architecture for AI today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about GPU Architecture for AI — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around GPU Architecture for AI changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate all external inputs before processing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never log sensitive data (API keys, PII, passwords)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use environment variables for configuration secrets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement rate limiting for public-facing endpoints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow the principle of least privilege for all system components"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This concept appears in ML pipelines at the data processing, training, or serving layer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding it helps debug model misbehavior — most ML bugs are infrastructure bugs, not model bugs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply vectorization and batching to scale this concept to large datasets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor for drift and degradation in production — set up alerts for key metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connect to the broader ML lifecycle: data → features → training → evaluation → deployment → monitoring"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "01 Gpu Architecture is like a GPS navigation system"
          }), ": you define the destination (goal), the system plans the route (algorithm), and recalculates when you take a wrong turn (error handling)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Complexity is like a restaurant kitchen"
          }), ": a single chef (O(n)) handles small orders fine, but 1000 simultaneous orders need parallel chefs (O(log n) with proper indexing)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Edge cases are like stress tests"
          }), ": the happy path is a calm day, but production is Black Friday — design for the worst case."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The chapter roadmap is a subway map"
          }), ": each section is a station, and skipping one means you miss the connection to the next destination.## Capstone Project Link"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/Raushan666java/ai-engineering-journey",
            children: "Module Capstone: End-to-End Project"
          }), " — this chapter contributes the GPU Architecture for AI skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "27aiinfrastructure-01gpuarchitecture-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of GPU Architecture for AI in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the Theory section and write a one-sentence definition that includes: what it is, how it works, and why it matters for production AI engineering."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "27aiinfrastructure-01gpuarchitecture-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the most common mistake engineers make with \n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "The most common mistake is skipping edge cases. Always handle empty input, null values, and boundary conditions before implementing the happy path."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "27aiinfrastructure-01gpuarchitecture-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard GPU Architecture for AI approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Time complexity depends on the algorithm chosen. Space complexity depends on whether you store intermediate results. Always state both for interview answers."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "27aiinfrastructure-01gpuarchitecture-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is GPU Architecture for AI NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "This technique is not the right choice when simpler alternatives suffice, when the overhead exceeds the benefit, or when the team lacks the expertise to maintain it."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "27aiinfrastructure-01gpuarchitecture-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is GPU Architecture for AI applied in a real production system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Production stack: use the libraries shown in the code examples, add monitoring with Prometheus/Grafana, test with pytest, and lint with ruff."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for GPU Architecture for AI (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing GPU Architecture for AI (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for GPU Architecture for AI-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running GPU Architecture for AI in production at scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEPs and RFCs where applicable (Python and networking standards)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The primary library used in the code examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pytest for unit and integration testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ruff + black for linting and formatting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mypy for static type checking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cProfile / py-spy for performance profiling Architecture for AI"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 1"
        }), ": Reproduce the failure with the smallest possible input — isolate the bug before changing any code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 2"
        }), ": Add structured logging at each stage of the 01 Gpu Architecture pipeline to identify exactly where the failure occurs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 3"
        }), ": Check the Common Mistakes section — 80% of bugs match one of those patterns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 4"
        }), ": Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pdb.set_trace()"
        }), " or your IDE debugger to inspect intermediate values at the failure point."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 5"
        }), ": For performance issues, profile with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cProfile"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "py-spy"
        }), " before optimizing — never guess at bottlenecks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 6"
        }), ": Write a regression test that reproduces the bug before fixing it — this prevents recurrence."]
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
        children: "Explain the core idea in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of GPU Architecture for AI."
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
        children: "Tell me about a time you debugged a GPU Architecture for AI problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where GPU Architecture for AI is used at scale?"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_01_gpu_architecture(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 01 Gpu Architecture.\r\n\r\n    Key concepts: core concepts, data structures, algorithms, patterns\r\n    Complexity: O(n) typical, O(1) best case\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 01 Gpu Architecture here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
      })
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
            children: "Explain GPU Architecture for AI without notes"
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
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Applied in production at companies like Google, Meta, Amazon, and Microsoft"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Used in data pipelines, model serving, and API backends"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables scalable, maintainable systems when applied correctly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview insight: connect the concept to a business outcome — cost reduction, latency improvement, or reliability increase"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/02-cuda-programming",
        children: "CUDA Programming for AI"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPU Architecture for AI, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of GPU Architecture for AI depends on input size and distribution — always benchmark for your own data."
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