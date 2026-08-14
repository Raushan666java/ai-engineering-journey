"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[17019],{

/***/ 8536
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_27_ai_infrastructure_02_cuda_programming_md_5aa_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-27-ai-infrastructure-02-cuda-programming-md-5aa.json
const site_docs_courses_ai_engineering_placement_27_ai_infrastructure_02_cuda_programming_md_5aa_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/ai-infrastructure/02-cuda-programming","title":"CUDA Programming for AI","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/27-ai-infrastructure/02-cuda-programming.md","sourceDirName":"courses/ai-engineering-placement/27-ai-infrastructure","slug":"/ai-engineering-placement/27-ai-infrastructure/02-cuda-programming","permalink":"/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/02-cuda-programming","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":297,"frontMatter":{"id":"02-cuda-programming","slug":"/ai-engineering-placement/27-ai-infrastructure/02-cuda-programming","title":"CUDA Programming for AI","sidebar_label":"CUDA Programming for AI","sidebar_position":297},"sidebar":"placementSidebar","previous":{"title":"GPU Architecture for AI","permalink":"/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/01-gpu-architecture"},"next":{"title":"03 — Model Compilation & Optimization","permalink":"/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/03-model-compilation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/27-ai-infrastructure/02-cuda-programming.md


const frontMatter = {
	id: '02-cuda-programming',
	slug: '/ai-engineering-placement/27-ai-infrastructure/02-cuda-programming',
	title: 'CUDA Programming for AI',
	sidebar_label: 'CUDA Programming for AI',
	sidebar_position: 297
};
const contentTitle = 'CUDA Programming for AI';

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
  "value": "2.1 CUDA Programming Model",
  "id": "21-cuda-programming-model",
  "level": 3
}, {
  "value": "2.2 Memory Management",
  "id": "22-memory-management",
  "level": 3
}, {
  "value": "2.3 CUDA Libraries for AI",
  "id": "23-cuda-libraries-for-ai",
  "level": 3
}, {
  "value": "2.4 Performance Optimization",
  "id": "24-performance-optimization",
  "level": 3
}, {
  "value": "2.5 Profiling &amp; Debugging",
  "id": "25-profiling--debugging",
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
  "value": "Question 2 (NVIDIA)",
  "id": "question-2-nvidia",
  "level": 3
}, {
  "value": "Question 3 (Microsoft)",
  "id": "question-3-microsoft",
  "level": 3
}, {
  "value": "Question 4 (Amazon)",
  "id": "question-4-amazon",
  "level": 3
}, {
  "value": "Question 5 (NVIDIA)",
  "id": "question-5-nvidia",
  "level": 3
}, {
  "value": "Question 6 (Google/TPU comparison)",
  "id": "question-6-googletpu-comparison",
  "level": 3
}, {
  "value": "Question 7 (NVIDIA — cuBLAS focus)",
  "id": "question-7-nvidia--cublas-focus",
  "level": 3
}, {
  "value": "Question 8 (Startup)",
  "id": "question-8-startup",
  "level": 3
}, {
  "value": "Question 9 (Amazon — system design)",
  "id": "question-9-amazon--system-design",
  "level": 3
}, {
  "value": "Question 10 (NVIDIA — optimization)",
  "id": "question-10-nvidia--optimization",
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
        id: "cuda-programming-for-ai",
        children: "CUDA Programming for AI"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Write and launch CUDA kernels using grid/block/thread hierarchy and understand warp execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manage GPU memory — allocate, transfer, and optimize using coalescing and shared memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use CUDA libraries (cuBLAS, cuDNN, cuSPARSE, TensorRT) for AI acceleration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply performance optimization techniques — occupancy, latency hiding, memory vs compute bound"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Profile and debug CUDA kernels using Nsight Compute, nsys, and occupancy calculator"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "2.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CUDA Programming Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel launch, grid/block/thread, warp execution, SIMT model"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cudaMalloc, cudaMemcpy, unified memory, coalescing, bank conflicts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CUDA Libraries for AI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cuBLAS GEMM, cuDNN convolution, cuSPARSE, TensorRT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance Optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Occupancy, memory throughput, instruction throughput, latency hiding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Profiling & Debugging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nsight Compute, nsys profiling, occupancy calculator, kernel timing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CUDA (Compute Unified Device Architecture) is NVIDIA's parallel computing platform that enables direct GPU programming. Every AI framework — PyTorch, TensorFlow, JAX — is built on CUDA under the hood. When you call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "torch.matmul()"
      }), ", CUDA dispatches a kernel to Tensor Cores. When you run a transformer, cuDNN executes fused attention kernels. This chapter teaches CUDA programming from the ground up with an AI focus. You will write kernels using Python (Numba), understand the memory model, use CUDA libraries, optimize performance, and profile your code. Mastery of CUDA separates AI users from AI engineers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Module 27-01 (GPU Architecture) — SMs, Tensor Cores, memory hierarchy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Module 09 (Deep Learning) — matrix multiply, convolution, transformers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python programming — NumPy arrays, basic NumPy operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic parallel computing concepts — threads, race conditions, synchronization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Terms:"
      }), " Core CUDA vocabulary every AI engineer must know."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Kernel"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A function that runs on the GPU, launched with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<<<grid, block>>>"
            }), " syntax"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Thread"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The smallest unit of execution in CUDA. Each thread runs one kernel instance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A group of threads that cooperate via shared memory and synchronization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Grid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A collection of thread blocks that execute the same kernel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Warp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A group of 32 threads that execute instructions simultaneously (SIMT)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SIMT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single Instruction, Multiple Threads — each thread in a warp runs the same instruction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Streaming Multiprocessor — the hardware unit that executes warps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Occupancy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ratio of active warps to maximum warps per SM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shared Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On-chip SRAM accessible by all threads in a block (~48-228 KB per SM)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Coalescing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory access pattern where consecutive threads access consecutive addresses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bank Conflict"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contention when multiple threads access the same shared memory bank"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A sequence of operations (kernels, copies) executed in order on the GPU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CUDA Context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A virtual address space and resource container on a GPU device"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unified Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single pointer accessible by CPU and GPU with automatic migration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cuBLAS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CUDA implementation of BLAS (Basic Linear Algebra Subprograms) for GPUs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cuDNN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CUDA Deep Neural Network library — optimized primitives for deep learning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TensorRT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NVIDIA's inference optimization SDK — graph optimization, quantization, kernel fusion"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-cuda-programming-model",
      children: "2.1 CUDA Programming Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The CUDA programming model extends C/C++ with a small set of keywords. Kernels are functions called with execution configuration that specifies the grid and block dimensions. Every thread in the grid executes the same kernel code but operates on different data based on its thread ID."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kernel launch syntax:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// CUDA C++ (conceptual — runs on GPU)\n__global__ void saxpy(float a, float* x, float* y, int n) {\n    int i = blockIdx.x * blockDim.x + threadIdx.x;\n    if (i < n) y[i] = a * x[i] + y[i];\n}\n\n// Host code — launch with 256 threads per block, enough blocks to cover N\nsaxpy<<<(n + 255) / 256, 256>>>(a, d_x, d_y, n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__global__"
      }), " qualifier declares a kernel. The triple-angle ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<<<grid, block>>>"
      }), " sets the execution configuration. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "blockIdx"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "blockDim"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "threadIdx"
      }), " are built-in variables that identify each thread's position."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Grid/Block/Thread Hierarchy:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Grid[\"Grid (all threads)\"]\n        direction TB\n        B0[Block 0] --> T00[Thread 0]\n        B0 --> T01[Thread 1]\n        B0 --> T0N[Thread N-1]\n        B1[Block 1] --> T10[Thread 0]\n        B1 --> T11[Thread 1]\n        B1 --> T1N[Thread N-1]\n        B2[Block 2] --> T20[Thread 0]\n        B2 --> T21[Thread 1]\n        B2 --> T2N[Thread N-1]\n        BM[Block M-1] --> TM0[Thread 0]\n        BM --> TM1[Thread 1]\n        BM --> TMN[Thread N-1]\n    end\n    subgraph Dims[\"Dimensions\"]\n        G[gridDim.x / .y / .z] --> B[blockDim.x / .y / .z]\n        B --> T[threadIdx.x / .y / .z]\n    end\n    subgraph Compute[\"Computation\"]\n        ID[\"Global ID = blockIdx * blockDim + threadIdx\"] --> OP[Operate on array element]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Thread indexing formulas:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "1D Grid"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "2D Grid"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "3D Grid"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Global ID (x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "blockIdx.x * blockDim.x + threadIdx.x"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "blockIdx.x * blockDim.x + threadIdx.x"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Global ID (y)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "blockIdx.y * blockDim.y + threadIdx.y"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Global ID (z)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "blockIdx.z * blockDim.z + threadIdx.z"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stride"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "gridDim.x * blockDim.x"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "gridDim.x * blockDim.x"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "gridDim.x * blockDim.x"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Warp execution and the SIMT model:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A warp is a group of 32 threads. The SM schedules and executes warps. All threads in a warp execute the same instruction on different data — this is the SIMT model. If threads within a warp diverge (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if (threadIdx.x % 2 == 0)"
      }), "), both branches execute sequentially, and threads not in the current branch are masked out. This reduces throughput by up to 2x per divergent branch."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Numba CUDA — Python implementation of vector addition\n# This is real CUDA using Numba's @cuda.jit decorator\nfrom numba import cuda\nimport numpy as np\nimport math\n\n@cuda.jit\ndef vector_add(a, b, c):\n    \"\"\"CUDA kernel — element-wise vector addition.\"\"\"\n    # Compute global thread ID\n    tid = cuda.blockIdx.x * cuda.blockDim.x + cuda.threadIdx.x\n    stride = cuda.gridDim.x * cuda.blockDim.x\n\n    # Grid-stride loop — handles arbitrary vector sizes\n    for i in range(tid, a.shape[0], stride):\n        c[i] = a[i] + b[i]\n\n# Host-side setup\nn = 1_000_000\na = np.random.randn(n).astype(np.float32)\nb = np.random.randn(n).astype(np.float32)\nc = np.zeros(n, dtype=np.float32)\n\n# Transfer to GPU device memory\nd_a = cuda.to_device(a)\nd_b = cuda.to_device(b)\nd_c = cuda.to_device(c)\n\n# Configure execution\nthreads_per_block = 256\nblocks_per_grid = (n + threads_per_block - 1) // threads_per_block\n\n# Launch kernel\nvector_add[blocks_per_grid, threads_per_block](d_a, d_b, d_c)\n\n# Copy result back to host\nd_c.copy_to_host(c)\n\n# Verify\nassert np.allclose(c, a + b), \"CUDA vector add failed!\"\nprint(f\"Vector add verified: {n:,} elements, \"\n      f\"{blocks_per_grid} blocks x {threads_per_block} threads\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Grid-stride loop pattern:"
      }), " The kernel above uses a grid-stride loop. Instead of one element per thread, each thread processes multiple elements by striding by the total grid size. This pattern handles arbitrary array sizes and improves occupancy when the grid is too small."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2D kernel example (image processing / matrix ops):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@cuda.jit\ndef matrix_add(a, b, c):\n    \"\"\"2D kernel — element-wise matrix addition.\"\"\"\n    row = cuda.blockIdx.y * cuda.blockDim.y + cuda.threadIdx.y\n    col = cuda.blockIdx.x * cuda.blockDim.x + cuda.threadIdx.x\n\n    if row < a.shape[0] and col < a.shape[1]:\n        c[row, col] = a[row, col] + b[row, col]\n\n# 2D launch configuration\nblock_dim = (16, 16)  # 256 threads per block\ngrid_dim = (math.ceil(n / 16), math.ceil(n / 16))\nmatrix_add[grid_dim, block_dim](d_a_2d, d_b_2d, d_c_2d)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Warp-level primitives (shuffle instructions):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Threads within a warp can exchange data directly using shuffle instructions — no shared memory needed. This is critical for warp-level reductions and prefix sums."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@cuda.jit\ndef warp_reduce_sum(data):\n    \"\"\"Warp-level reduction using shuffle down.\"\"\"\n    tid = cuda.threadIdx.x\n    val = data[tid] if tid < data.size else 0\n\n    # Shuffle down by powers of 2 — all threads in warp participate\n    for offset in [16, 8, 4, 2, 1]:\n        # __shfl_down_sync — get value from thread (tid + offset)\n        val += cuda.shfl_down_sync(0xFFFFFFFF, val, offset)\n\n    # Thread 0 has the sum of all warp elements\n    if tid == 0:\n        data[0] = val\n\n# This is how all-reduce works inside each warp\n# Across warps, use shared memory to combine warp results\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-memory-management",
      children: "2.2 Memory Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CUDA exposes a rich memory hierarchy. Managing data movement across this hierarchy determines kernel performance."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "cudaMalloc and cudaMemcpy patterns:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from numba import cuda\nimport numpy as np\n\n# Device memory allocation and transfer\nn = 1_000_000\nhost_array = np.random.randn(n).astype(np.float32)\n\n# Pattern 1: Explicit copy\ndev_array = cuda.to_device(host_array)          # Host → Device (cudaMemcpyHostToDevice)\nresult_host = dev_array.copy_to_host()          # Device → Host (cudaMemcpyDeviceToHost)\n\n# Pattern 2: Device-side allocation with zeros\ndev_zeros = cuda.device_array(n, dtype=np.float32)  # cudaMalloc + memset(0)\n\n# Pattern 3: Pinned (page-locked) memory for faster transfers\n# Numba uses pinned memory by default for cuda.to_device\n# In PyTorch: torch.Tensor.pin_memory() before .to('cuda')\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Memory hierarchy in CUDA:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph HostMem[\"Host Memory\"]\n        CPU_RAM[DDR5 RAM<br/>Pinned / Pageable]\n    end\n    subgraph DeviceMem[\"Device Memory\"]\n        direction TB\n        GMEM[Global Memory<br/>HBM3/HBM3e<br/>80-192 GB<br/>~800 cycles]\n        L2[L2 Cache<br/>40-60 MB<br/>~200 cycles]\n        subgraph SM[\"Streaming Multiprocessor\"]\n            SMEM[Shared Memory<br/>48-228 KB per SM<br/>~20 cycles<br/>Programmable]\n            L1[L1 Cache<br/>128-256 KB<br/>~30 cycles]\n            REG[Registers<br/>64K per SM<br/>~0.5 cycle]\n            TEX[Texture Memory<br/>Read-only cached]\n            CONST[Constant Memory<br/>64 KB<br/>Broadcast]\n        end\n    end\n    CPU_RAM <-->|PCIe Gen5<br/>128 GB/s| GMEM\n    GMEM --> L2 --> SM\n    SMEM <-->|Load/Store| GMEM\n    REG <--> SMEM\n    L1 <--> SMEM\n    TEX --> L1\n    CONST --> L1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Unified Memory (CUDA 6+):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Unified Memory provides a single pointer accessible by both CPU and GPU. The driver automatically migrates pages on demand. This simplifies programming but can hurt performance due to page faults."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Unified Memory in CUDA C++ (conceptual)\n# cudaMallocManaged(&ptr, size);\n# Access ptr on CPU — page fault migrates to CPU\n# Launch kernel with ptr — page fault migrates to GPU\n\n# Numba equivalent — use managed array\nfrom numba import cuda\nimport numpy as np\n\n# Managed memory — no explicit transfers needed\nmanaged = cuda.managed_array(1_000_000, dtype=np.float32)\n\n# Fill on CPU\nmanaged[:] = np.random.randn(1_000_000)\n\n@cuda.jit\ndef double_it(arr):\n    i = cuda.grid(1)\n    if i < arr.size:\n        arr[i] *= 2.0\n\ndouble_it[blocks_per_grid, threads_per_block](managed)\n\n# Result is already on CPU — no copy needed\nprint(f\"First 5: {managed[:5]}\")\n\n# When to use:\n# - Prototyping and correctness debugging\n# - Irregular access patterns with small data\n# - Not recommended for: performance-critical kernels,\n#   large data (>1 GB), or streaming workloads\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Memory coalescing:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When threads in a warp access consecutive global addresses, the hardware combines accesses into a single 128-byte transaction. Non-coalesced access requires multiple transactions, dropping effective bandwidth by up to 10x."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Good (coalesced) vs Bad (non-coalesced) access patterns\n\nimport numpy as np\nfrom numba import cuda\n\nn = 1024 * 1024\ndata = np.random.randn(n).astype(np.float32)\ndev_data = cuda.to_device(data)\n\n@cuda.jit\ndef coalesced_read(output, input):\n    \"\"\"Each thread reads from its own index — consecutive threads = consecutive addresses.\"\"\"\n    i = cuda.grid(1)\n    if i < input.size:\n        output[i] = input[i] * 2.0  # Coalesced: thread 0 reads addr 0, thread 1 reads addr 1, ...\n\n@cuda.jit\ndef non_coalesced_read(output, input):\n    \"\"\"Each thread reads with a stride — poor coalescing.\"\"\"\n    i = cuda.grid(1)\n    if i < output.size:\n        # Each thread reads a strided pattern — consecutive threads access\n        # addresses 0, stride, 2*stride, ... — not consecutive\n        output[i] = input[i * 8] * 2.0  # Non-coalesced for stride > 1\n\n@cuda.jit\ndef transpose_read(output, input):\n    \"\"\"Column-major access in row-major array — worst case for coalescing.\"\"\"\n    row = cuda.blockIdx.y * cuda.blockDim.y + cuda.threadIdx.y\n    col = cuda.blockIdx.x * cuda.blockDim.x + cuda.threadIdx.x\n    if row < input.shape[0] and col < input.shape[1]:\n        # Thread (tx, ty) reads input[ty][tx] — row-major\n        # Threads in a warp have consecutive tx — coalesced for row access\n        output[row, col] = input[row, col]  # Good: consecutive tx = consecutive addresses\n\n@cuda.jit\ndef bad_transpose_read(output, input):\n    \"\"\"Row-major access in column iteration — non-coalesced.\"\"\"\n    row = cuda.blockIdx.y * cuda.blockDim.y + cuda.threadIdx.y\n    col = cuda.blockIdx.x * cuda.blockDim.x + cuda.threadIdx.x\n    if row < input.shape[0] and col < input.shape[1]:\n        output[row, col] = input[col, row]  # Bad: input[col][row] — threads access columns, not rows\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Coalescing rules:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Transaction size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effective BW"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Aligned consecutive (stride 1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 x 128B (32 FP32 values)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ideal — vector add, element-wise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Misaligned consecutive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 x 128B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start at odd address"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stride 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 x 128B (64 threads)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accessing every other element"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32 x 128B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~3%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gather/scatter, sparse access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Broadcast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 x 32B (32 threads read same)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All threads read same address"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Shared memory and bank conflicts:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Shared memory is organized into 32 banks (32-bit wide). Successive 4-byte words map to successive banks. When threads in a warp access different addresses in the same bank, a bank conflict occurs and accesses are serialized."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Demonstrating shared memory bank conflicts\nfrom numba import cuda\n\n@cuda.jit\ndef shared_histogram(data, bins):\n    \"\"\"Compute histogram using shared memory — bank conflicts if stride == 32.\"\"\"\n    tid = cuda.threadIdx.x\n    # Shared memory — 256 ints, one per thread\n    shared = cuda.shared.array(256, dtype=cuda.int32)\n\n    # Initialize shared memory\n    if tid < 256:\n        shared[tid] = 0\n    cuda.syncthreads()\n\n    # Each thread adds to shared[tid] — no conflict (stride 1)\n    if tid < data.size:\n        bin_idx = int(data[tid] * 127) % 256  # Map value to bin\n        cuda.atomic.add(shared, bin_idx, 1)\n    cuda.syncthreads()\n\n    # Write back to global\n    if tid < 256:\n        bins[tid] = shared[tid]\n\n# Bank conflict scenarios:\n# stride 1:  thread 0 → bank 0, thread 1 → bank 1 ...  NO conflict\n# stride 2:  thread 0 → bank 0, thread 1 → bank 2 ...  NO conflict (different banks)\n# stride 32: thread 0 → bank 0, thread 32 → bank 0 ... CONFLICT!\n# stride 33: thread 0 → bank 0, thread 33 → bank 1 ... NO conflict (non-power-of-2 stride)\n\n# Fix: pad shared arrays by 1 element to break conflicts\n# shared[256] → shared[257] shifts alignment so consecutive threads map to different banks\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "cudaMemcpyAsync and streams — overlapping transfers and compute:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# CUDA Streams — overlap data transfer with kernel execution\nfrom numba import cuda\n\n# Create two streams\nstream0 = cuda.stream()\nstream1 = cuda.stream()\n\n# Partition data\nn = 1_000_000\nhalf = n // 2\n\na = np.random.randn(n).astype(np.float32)\nb = np.random.randn(n).astype(np.float32)\nc = np.zeros(n, dtype=np.float32)\n\nd_a = cuda.to_device(a)\nd_b = cuda.to_device(b)\nd_c = cuda.device_array_like(c)\n\n@cuda.jit\ndef vec_add_kernel(a, b, c, n):\n    i = cuda.grid(1)\n    if i < n:\n        c[i] = a[i] + b[i]\n\nthreads = 256\nblocks_half = (half + threads - 1) // threads\n\n# Stream 0: process first half\nvec_add_kernel[blocks_half, threads, stream0](d_a[:half], d_b[:half], d_c[:half], half)\n\n# Stream 1: process second half (concurrent with stream 0)\nvec_add_kernel[blocks_half, threads, stream1](d_a[half:], d_b[half:], d_c[half:], half)\n\n# Both streams execute concurrently on the same GPU\n# Benefits: better utilization when kernel is memory-bound\n# The GPU can overlap memory loads from one block with compute from another\n\n# Wait for completion\ncuda.synchronize()\n\nd_c.copy_to_host(c, stream=stream0)\nprint(\"Streamed execution complete\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-cuda-libraries-for-ai",
      children: "2.3 CUDA Libraries for AI"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Writing custom CUDA kernels for matrix multiply or convolution is rarely necessary. NVIDIA provides optimized libraries that deliver near-peak hardware utilization. AI engineers must understand when to use each library and how to integrate them."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "cuBLAS — GEMM (General Matrix Multiply):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["cuBLAS provides BLAS-level operations on the GPU. The workhorse is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cublasGemmEx"
      }), " — the fused matrix multiply used by every linear layer and attention projection in transformers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# PyTorch's torch.matmul calls cuBLAS under the hood\n# Understanding the cuBLAS call helps interpret performance\n\nimport torch\nimport numpy as np\n\n# This PyTorch call:\nC = torch.matmul(A, B)\n\n# Translates to cuBLAS (conceptual C++):\n# cublasHandle_t handle;\n# cublasCreate(&handle);\n# float alpha = 1.0f, beta = 0.0f;\n# cublasGemmEx(handle,\n#     CUBLAS_OP_N, CUBLAS_OP_N,  # No transpose\n#     N, M, K,                    # Dimensions: C(MxN) = A(MxK) * B(KxN)\n#     &alpha,                     # Scaling factor for A*B\n#     d_A, CUDA_R_16F, K,        # A in FP16, leading dimension K\n#     d_B, CUDA_R_16F, N,        # B in FP16, leading dimension N\n#     &beta,                      # Scaling factor for C\n#     d_C, CUDA_R_16F, N,        # C in FP16, leading dimension N\n#     CUDA_R_32F,                 # Compute type FP32 (accumulate in higher precision)\n#     CUBLAS_GEMM_DEFAULT_TENSOR_OP  # Use Tensor Cores\n# );\n\n# Key cuBLAS features for AI:\n# 1. Tensor Core acceleration (CUBLAS_GEMM_DEFAULT_TENSOR_OP)\n# 2. Mixed precision (FP16 input, FP32 accumulate)\n# 3. Batched GEMM (cublasGemmBatchedEx) for multi-head attention\n# 4. Strided batched GEMM (cublasGemmStridedBatchedEx) — most efficient for attention\n\n# Simulate batched GEMM for multi-head attention\ndef multi_head_attention_gemm(batch: int, heads: int, seq_len: int, d_head: int):\n    \"\"\"\n    Multi-head attention uses strided batched GEMM.\n    Q, K, V projections: each head is one GEMM in the batch.\n    QK^T softmax: batched GEMM of (batch*heads) matrices.\n    \"\"\"\n    # Q * K^T for all heads simultaneously (strided batched)\n    batch_count = batch * heads\n    m = seq_len      # Q rows\n    n = seq_len      # K^T columns\n    k = d_head       # inner dimension\n\n    total_flops = 2.0 * batch_count * m * n * k\n    print(f\"MHA GEMM: {batch} x {heads} heads, seq={seq_len}, d_head={d_head}\")\n    print(f\"  Batched GEMM count: {batch_count}\")\n    print(f\"  Total FLOPs: {total_flops / 1e12:.2f} TFLOPS\")\n\n    # cuBLAS achieves ~80% of peak Tensor Core throughput on large batched GEMMs\n    h100_peak_fp16 = 2000  # TFLOPS\n    estimated_time = total_flops / (h100_peak_fp16 * 1e12 * 0.8)\n    print(f\"  Estimated time on H100: {estimated_time * 1000:.3f} ms\")\n\nmulti_head_attention_gemm(batch=1, heads=32, seq_len=4096, d_head=128)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "cuDNN — convolution and fused kernels:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cuDNN provides optimized implementations for convolutions, pooling, normalization, activation functions, and RNN operations. For transformers, cuDNN's fused attention (Flash Attention) and layer norm are critical."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# cuDNN operations commonly called through PyTorch\n\nimport torch\nimport torch.nn.functional as F\n\n# Layer normalization (cuDNN fused kernel)\nx = torch.randn(4, 4096, 4096).cuda()\n# cuDNN's fused layer norm:\ny = F.layer_norm(x, [4096])\n# This calls: cudnnBatchNormForwardTraining or cudnnLayerNormFwd\n\n# Convolution (cuDNN is the reference implementation)\nconv = torch.nn.Conv2d(256, 256, kernel_size=3, padding=1).cuda()\nx = torch.randn(4, 256, 64, 64).cuda()\ny = conv(x)\n# This calls: cudnnConvolutionForward with CUDNN_CONVOLUTION_FWD_ALGO_IMPLICIT_PRECOMP_GEMM\n# cuDNN internally converts convolution to matrix multiply (im2col + GEMM)\n# or uses Winograd algorithm for small kernels (3x3)\n\n# Flash Attention (cuDNN 9+)\n# torch.nn.functional.scaled_dot_product_attention uses cuDNN's fused attention\nquery = torch.randn(4, 32, 4096, 128).cuda()\nkey = torch.randn(4, 32, 4096, 128).cuda()\nvalue = torch.randn(4, 32, 4096, 128).cuda()\n\noutput = F.scaled_dot_product_attention(query, key, value)\n# This calls cudnnFlashAttention with:\n# - Tiled QK^T compute on Tensor Cores\n# - On-chip softmax (no HBM round-trip)\n# - Causal masking fused into the kernel\nprint(f\"Flash Attention output shape: {output.shape}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "cuSPARSE — sparse matrix operations:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sparse matrices appear in pruned models, graph neural networks, and scientific computing. cuSPARSE provides routines for sparse matrix-vector multiply (SpMV) and sparse matrix-matrix multiply (SpMM)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Simulate cuSPARSE SpMM for pruned neural network weights\nimport numpy as np\n\nclass SimulatedSparseLinear:\n    \"\"\"Simulate a pruned linear layer using sparse matrix multiply.\"\"\"\n\n    def __init__(self, in_features: int, out_features: int, sparsity: float = 0.9):\n        self.in_features = in_features\n        self.out_features = out_features\n        # Dense weight for reference\n        self.weight = np.random.randn(out_features, in_features).astype(np.float32)\n\n        # Apply pruning mask\n        mask = np.random.rand(*self.weight.shape) > sparsity\n        self.sparse_weight = self.weight * mask\n\n        # Count non-zero elements\n        self.nnz = np.sum(mask)\n        self.density = 1.0 - sparsity\n\n        print(f\"SparseLinear: {out_features}x{in_features}, \"\n              f\"sparsity={sparsity:.0%}, nnz={self.nnz:,}\")\n\n    def dense_forward(self, x: np.ndarray) -> np.ndarray:\n        \"\"\"Dense matmul — O(out * in * batch) operations.\"\"\"\n        return x @ self.weight.T\n\n    def sparse_forward_csr(self, x: np.ndarray) -> np.ndarray:\n        \"\"\"\n        Simulate CSR-based SpMM (cuSPARSE csrmm).\n        Only computes on non-zero elements.\n        O(nnz * batch) operations — savings = 1 / density.\n        \"\"\"\n        batch = x.shape[0]\n        output = np.zeros((batch, self.out_features), dtype=np.float32)\n\n        # For each non-zero in the sparse weight matrix\n        for i in range(self.out_features):\n            for j in range(self.in_features):\n                if self.sparse_weight[i, j] != 0:\n                    output[:, i] += x[:, j] * self.sparse_weight[i, j]\n\n        return output\n\n    def speedup_estimate(self, batch: int = 1) -> float:\n        \"\"\"Estimate SpMM speedup over dense GEMM.\"\"\"\n        dense_ops = 2 * batch * self.out_features * self.in_features\n        sparse_ops = 2 * batch * self.nnz\n        return dense_ops / sparse_ops\n\nsp = SimulatedSparseLinear(4096, 4096, sparsity=0.95)\nprint(f\"Estimated speedup vs dense: {sp.speedup_estimate():.1f}x\")\n# cuSPARSE achieves near-memory-bandwidth performance for SpMM\n# On H100 with 95% sparsity: ~15x faster than dense GEMM\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "TensorRT integration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TensorRT optimizes trained models for inference. It performs kernel fusion, precision calibration (FP16/INT8/FP4), and graph optimization. Understanding the TensorRT pipeline helps deploy models efficiently."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# TensorRT optimization pipeline (conceptual — runs with TensorRT Python API)\n\n# Step 1: Export model to ONNX\n# torch.onnx.export(model, dummy_input, \"model.onnx\")\n\n# Step 2: Build TensorRT engine (conceptual Python)\n# import tensorrt as trt\n#\n# logger = trt.Logger(trt.Logger.INFO)\n# builder = trt.Builder(logger)\n# network = builder.create_network(1 << int(trt.NetworkDefinitionCreationFlag.EXPLICIT_BATCH))\n# parser = trt.OnnxParser(network, logger)\n# parser.parse_from_file(\"model.onnx\")\n#\n# config = builder.create_builder_config()\n# config.set_memory_pool_limit(trt.MemoryPoolType.WORKSPACE, 6 * (1 << 30))  # 6 GB\n# config.set_flag(trt.BuilderFlag.FP16)  # Enable FP16 inference\n#\n# # Step 3: Build optimized engine\n# serialized_engine = builder.build_serialized_network(network, config)\n\n# What TensorRT does internally:\n# 1. Graph optimization: fuse Conv + Bias + ReLU into one kernel (CBR fusion)\n# 2. Kernel auto-tuning: select fastest kernel for each layer\n# 3. Precision calibration: FP16/INT8/FP4 with minimal accuracy loss\n# 4. Memory optimization: reuse buffers, minimize allocations\n# 5. Stream management: overlap copies with compute\n\n# Performance gains from TensorRT:\nprint(\"TensorRT typical optimizations:\")\nprint(f\"  FP32 → FP16:      2x throughput, ~0% accuracy loss\")\nprint(f\"  FP32 → INT8:      4x throughput, <1% accuracy loss\")\nprint(f\"  Kernel fusion:    1.2-1.5x (fewer kernel launches)\")\nprint(f\"  Memory optimization: 1.1-1.3x (less allocation overhead)\")\nprint(f\"  Total speedup:    2-6x vs raw PyTorch eager mode\")\nprint(f\"  Total speedup:    1.2-2x vs torch.compile\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-performance-optimization",
      children: "2.4 Performance Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CUDA performance optimization is a systematic process. The key metrics are occupancy, memory throughput, and instruction throughput. Understanding these helps classify and fix bottlenecks."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Occupancy:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Occupancy is the ratio of active warps per SM to the maximum possible warps. Higher occupancy hides latency — when one warp stalls on a memory access, the SM switches to another warp."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Occupancy calculation\ndef compute_occupancy(\n    threads_per_block: int,\n    shared_mem_per_block: int,   # bytes\n    registers_per_thread: int,\n    sm_properties: dict\n) -> dict:\n    \"\"\"\n    Compute theoretical occupancy for a kernel on a given SM.\n    H100 SM properties: max warps = 64, max blocks = 32,\n    max registers = 65536, max shared mem = 228 KB\n    \"\"\"\n    max_warps_per_sm = sm_properties[\"max_warps\"]       # 64\n    max_blocks_per_sm = sm_properties[\"max_blocks\"]      # 32\n    max_registers = sm_properties[\"max_registers\"]       # 65536\n    max_shared_mem = sm_properties[\"max_shared_mem\"]     # 233472\n\n    warps_per_block = (threads_per_block + 31) // 32\n\n    # Limits from each resource\n    limit_warps = max_warps_per_sm\n    limit_blocks = max_blocks_per_sm\n    limit_registers = max_registers // (registers_per_thread * threads_per_block)\n    limit_shared = max_shared_mem // shared_mem_per_block if shared_mem_per_block > 0 else max_blocks_per_sm\n\n    # Block count limited by the tightest resource\n    max_blocks = min(limit_blocks, limit_registers, limit_shared)\n    max_warps = min(max_blocks * warps_per_block, limit_warps)\n\n    occupancy = max_warps / max_warps_per_sm\n\n    print(f\"Kernel Config: {threads_per_block} threads/block, \"\n          f\"{shared_mem_per_block/1024:.1f} KB shared, \"\n          f\"{registers_per_thread} regs/thread\")\n    print(f\"  Warps per block: {warps_per_block}\")\n    print(f\"  Limit by blocks: {limit_blocks}\")\n    print(f\"  Limit by registers: {limit_registers}\")\n    print(f\"  Limit by shared mem: {limit_shared}\")\n    print(f\"  Max blocks per SM: {max_blocks}\")\n    print(f\"  Max warps per SM: {max_warps}\")\n    print(f\"  Occupancy: {occupancy:.1%}\")\n\n    return {\n        \"max_blocks\": max_blocks,\n        \"max_warps\": max_warps,\n        \"occupancy\": occupancy\n    }\n\n# H100 SM specs\nh100_sm = {\n    \"max_warps\": 64,\n    \"max_blocks\": 32,\n    \"max_registers\": 65536,\n    \"max_shared_mem\": 233472  # 228 KB in bytes\n}\n\nprint(\"=== Occupancy Analysis ===\")\n# Kernel A: high registers → low occupancy\ncompute_occupancy(256, 0, 64, h100_sm)\nprint()\n\n# Kernel B: low registers → high occupancy\ncompute_occupancy(256, 0, 16, h100_sm)\nprint()\n\n# Kernel C: heavy shared memory → block-limited\ncompute_occupancy(128, 49152, 32, h100_sm)  # 48 KB shared\nprint()\n\n# Kernel D: Tensor Core matmul (optimal config)\ncompute_occupancy(128, 8192, 32, h100_sm)\n# Typical optimal occupancy: 50-75% for compute-bound kernels\n# 100% occupancy is not always optimal — too many warps can thrash L1 cache\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Memory throughput optimization:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Bandwidth measurement and optimization simulation\n\nimport numpy as np\nimport time\n\ndef measure_effective_bandwidth(n_bytes: int, time_seconds: float) -> float:\n    \"\"\"Compute effective bandwidth in GB/s.\"\"\"\n    return n_bytes / time_seconds / 1e9\n\ndef simulate_coalescing_benefit(access_pattern: str, n: int = 1024 * 1024):\n    \"\"\"\n    Simulate the throughput difference between coalesced and non-coalesced access.\n    Coalesced:    1 transaction per warp (128 bytes for 32 FP32 values)\n    Non-coalesced: 32 transactions per warp (worst case: stride > cache line)\n    \"\"\"\n    bytes_per_elem = 4  # FP32\n    warps = n // 32\n\n    if access_pattern == \"coalesced\":\n        # All 32 threads in a warp access consecutive addresses\n        transactions = warps  # 1 x 128B per warp\n        label = \"Coalesced (stride 1)\"\n    elif access_pattern == \"stride_2\":\n        # Stride 2: cache line has only 16 useful values\n        transactions = warps * 2\n        label = \"Stride 2\"\n    elif access_pattern == \"stride_4\":\n        transactions = warps * 4\n        label = \"Stride 4\"\n    elif access_pattern == \"random\":\n        # Worst case: every thread generates its own transaction\n        transactions = warps * 32\n        label = \"Random (worst)\"\n    else:\n        transactions = warps\n        label = access_pattern\n\n    total_data = n * bytes_per_elem\n    effective_data = total_data / transactions * warps\n\n    bw_ratio = n / (transactions * 32) * 100  # Percent of peak\n    print(f\"{label:<25} transactions={transactions:<10} \"\n          f\"effective BW={bw_ratio:<6.1f}% of peak\")\n\nfor pattern in [\"coalesced\", \"stride_2\", \"stride_4\", \"random\"]:\n    simulate_coalescing_benefit(pattern)\n\n# Key result: Random access achieves ~3% of peak bandwidth\n# This is why data layout optimization (e.g., AoS → SoA) is critical\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Latency hiding through warp scheduling:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph SM_Pipeline[\"SM Warp Scheduler\"]\n        direction TB\n        W[Warp Pool<br/>64 warps] --> S1[Scheduler picks<br/>ready warp]\n        S1 --> EX[Execute 1 instruction]\n        EX -->|Warp stalls<br/>on memory| W\n        EX -->|Instruction<br/>completed| W\n    end\n    subgraph Latency[\"Latency Hiding\"]\n        MEM[MEM: 800 cycles<br/>HBM latency] -->|While warp 0 waits...| SWITCH[Switch to warp 1]\n        SWITCH -->|Execute warp 1<br/>for free| HIDE[Memory latency hidden]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Occupancy and latency hiding relationship:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Memory latency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Warps needed to hide"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Occupancy needed (H100)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "200 cycles (L2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 warps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12.5%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "400 cycles (HBM, ideal)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 warps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "800 cycles (HBM, random)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32 warps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1200 cycles (cross-PCIe)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "48 warps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "75%"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Higher latency requires more warps to hide. This is why HBM bandwidth is critical — lower latency means fewer warps needed for hiding, freeing resources for compute."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instruction throughput optimization:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Instruction throughput comparison\n# Use fast math operations where possible\n\nimport math\nimport time\n\ndef benchmark_ops(size: int = 10_000_000):\n    \"\"\"Benchmark different math operations on CPU (simulating GPU trends).\"\"\"\n    x = np.random.randn(size).astype(np.float32)\n    y = np.zeros_like(x)\n\n    # Standard math\n    start = time.perf_counter()\n    y = np.sin(x)\n    t_sin = time.perf_counter() - start\n\n    start = time.perf_counter()\n    y = np.exp(x)\n    t_exp = time.perf_counter() - start\n\n    start = time.perf_counter()\n    y = x * 2.0 + 1.0  # FMA (fused multiply-add) — single instruction\n    t_fma = time.perf_counter() - start\n\n    print(\"Instruction throughput (relative to FMA):\")\n    print(f\"  FMA (mul+add):    {t_fma:.4f}s  (1.0x baseline)\")\n    print(f\"  sin(x):          {t_sin:.4f}s  ({t_sin/t_fma:.1f}x slower)\")\n    print(f\"  exp(x):          {t_exp:.4f}s  ({t_exp/t_fma:.1f}x slower)\")\n\n    # On GPU:\n    # - FMA: 1 instruction, 4 cycles latency, throughput = 1/cycle (Tensor Core: 64/cycle)\n    # - sin/cos: ~20 instructions, ~32 cycles latency\n    # - exp/log: ~15 instructions, ~24 cycles latency\n    # - sqrt: ~8 instructions, ~16 cycles latency\n    # - division: ~4 instructions, ~12 cycles latency\n    #\n    # Optimization: replace exp/sin with polynomial approximations where accuracy allows\n    # __expf(x) uses less accurate but faster approximation (~8 instructions vs ~15)\n\nbenchmark_ops()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-profiling--debugging",
      children: "2.5 Profiling & Debugging"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Profiling is the only way to understand actual GPU performance. Assumptions about bottlenecks are often wrong. NVIDIA provides several tools."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Nsight Compute (ncu) — kernel-level profiling:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Nsight Compute profiling workflow (conceptual)\n\n# Command line:\n# ncu --set full -o profile_output python train.py\n\n# Key metrics Nsight Compute reports:\nmetrics = {\n    \"Memory Throughput\": \"Percentage of peak HBM bandwidth utilized\",\n    \"Compute Throughput\": \"Percentage of peak FLOP/s utilized\",\n    \"Occupancy\": \"Active warps / max warps per SM\",\n    \"Sectors/Request\": \"Memory coalescing efficiency (1.0 = perfect)\",\n    \"L1 Hit Rate\": \"Fraction of L1 cache hits\",\n    \"L2 Hit Rate\": \"Fraction of L2 cache hits\",\n    \"Achieved FLOPS\": \"Actual FLOP/s delivered\",\n    \"Duration\": \"Kernel execution time in microseconds\",\n    \"Registers Per Thread\": \"Register usage — higher = lower occupancy\",\n    \"Shared Memory Per Block\": \"Shared memory usage per block (bytes)\",\n}\n\n# How to interpret:\n# 1. If Memory Throughput > 80% and Compute Throughput < 50% → memory bound\n# 2. If Memory Throughput < 50% and Compute Throughput < 50% → latency bound\n# 3. If Compute Throughput > 80% and Memory Throughput < 50% → compute bound\n# 4. If L2 Hit Rate > 80% → working set fits in L2 (good for small models)\n# 5. If Sectors/Request > 2 → poor coalescing (redesign data layout)\n\nprint(\"Nsight Compute — metric interpretation guide:\")\nfor metric, desc in metrics.items():\n    print(f\"  {metric:<30} → {desc}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Nsys (nsys) — system-level profiling:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Nsys profiling (conceptual)\n\n# Command:\n# nsys profile -o timeline_output python train.py\n\n# Nsys shows:\n# - CPU timeline: PyTorch ops, data loading, Python execution\n# - GPU timeline: kernel launches, memory copies, stream sync\n# - CUDA API calls: cudaMalloc, cudaMemcpy, cudaLaunchKernel\n# - Data transfer: H2D/D2H bandwidth utilization\n\n# Key patterns to look for:\n# 1. Gaps between GPU kernels → CPU launch overhead (fix: kernel fusion)\n# 2. Large H2D transfers alternating with small kernels → data pipeline bottleneck\n# 3. Frequent cudaMalloc → memory pool thrashing (fix: cache allocations)\n# 4. Synchronization stalls (cudaDeviceSynchronize) → remove syncs, use streams\n\nprint(\"\\nNsys profiling — common bottlenecks:\")\nbottlenecks = [\n    (\"Large H2D transfers\", \"Data pipeline bottleneck — use pinned memory + async prefetch\"),\n    (\"Gap between kernels\", \"Kernel launch overhead — fuse kernels or use CUDA graphs\"),\n    (\"Frequent cudaMalloc\", \"Use memory pool (cudaMallocAsync) or pre-allocate\"),\n    (\"cudaMemcpy inside loop\", \"Move copies outside loop, use double buffering\"),\n    (\"Synchronization calls\", \"Replace sync with stream dependencies (events)\"),\n]\nfor pattern, fix in bottlenecks:\n    print(f\"  {pattern:<30} → {fix}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Occupancy calculator:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Practical occupancy analysis for AI kernels\n\ndef analyze_kernel_occupancy(\n    kernel_name: str,\n    threads_per_block: int,\n    regs_per_thread: int,\n    shared_mem_bytes: int,\n    sm_max_warps: int = 64,\n    sm_max_blocks: int = 32,\n    sm_max_regs: int = 65536,\n    sm_max_shared: int = 233472\n):\n    \"\"\"Analyze and suggest improvements for kernel occupancy.\"\"\"\n\n    warps_per_block = (threads_per_block + 31) // 32\n\n    # Block limit by each resource\n    blocks_by_warps = sm_max_warps // warps_per_block\n    blocks_by_regs = sm_max_regs // (regs_per_thread * threads_per_block)\n\n    shared_per_block = shared_mem_bytes\n    blocks_by_shared = sm_max_shared // shared_per_block if shared_per_block > 0 else sm_max_blocks\n\n    max_blocks = min(sm_max_blocks, blocks_by_warps, blocks_by_regs, blocks_by_shared)\n    active_warps = max_blocks * warps_per_block\n    occupancy = active_warps / sm_max_warps\n\n    # Identify bottleneck\n    bottlenecks = []\n    if blocks_by_warps == max_blocks:\n        bottlenecks.append((\"warps\", \"Increase threads per block or reduce warps\"))\n    if blocks_by_regs == max_blocks:\n        bottlenecks.append((\"registers\", \"Reduce register usage (split kernel, use -maxrregcount)\"))\n    if blocks_by_shared == max_blocks:\n        bottlenecks.append((\"shared mem\", \"Reduce shared memory per block\"))\n\n    print(f\"Kernel: {kernel_name}\")\n    print(f\"  Config: {threads_per_block} th/blk, {regs_per_thread} regs, \"\n          f\"{shared_mem_bytes/1024:.1f} KB shared\")\n    print(f\"  Active warps/SM: {active_warps}/{sm_max_warps}\")\n    print(f\"  Occupancy: {occupancy:.1%}\")\n    if bottlenecks:\n        primary = bottlenecks[0]\n        print(f\"  Bottleneck: {primary[0]} (suggestion: {primary[1]})\")\n    else:\n        print(f\"  No bottleneck — good occupancy\")\n    print()\n\n# Analyze common AI kernels\nkernels = [\n    (\"Element-wise (ReLU)\", 256, 8, 0),\n    (\"Vector add\", 256, 12, 0),\n    (\"Matmul tile 32x32\", 256, 32, 8192),\n    (\"Flash Attention tile\", 128, 48, 49152),\n    (\"Layer Norm\", 256, 20, 0),\n    (\"Softmax large\", 1024, 24, 4096),\n]\n\nfor name, tpb, regs, smem in kernels:\n    analyze_kernel_occupancy(name, tpb, regs, smem)\n\n# Typical occupancy targets:\n# - Memory-bound kernels: 50-100% occupancy (more warps = better hiding)\n# - Compute-bound kernels: 25-50% occupancy (fewer warps = more registers per thread)\n# - Tensor Core matmul: 25-33% optimal (register-pressure limited by design)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kernel timing with CUDA events:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Accurate kernel timing using CUDA events (conceptual)\n\nimport time\nfrom numba import cuda\n\ndef time_kernel(kernel_fn, grid, block, *args, iters: int = 100):\n    \"\"\"\n    Time a CUDA kernel using CPU timing (approximate).\n    For microsecond accuracy, use CUDA events.\n    \"\"\"\n    # Warmup\n    kernel_fn[grid, block](*args)\n    cuda.synchronize()\n\n    # Benchmark\n    times = []\n    for _ in range(iters):\n        start = time.perf_counter()\n        kernel_fn[grid, block](*args)\n        cuda.synchronize()\n        times.append(time.perf_counter() - start)\n\n    avg_time = np.median(times) * 1000  # ms\n    print(f\"Kernel: {kernel_fn.__name__}\")\n    print(f\"  Grid: {grid}, Block: {block}\")\n    print(f\"  Median time: {avg_time:.4f} ms\")\n    print(f\"  Min: {min(times)*1000:.4f} ms, Max: {max(times)*1000:.4f} ms\")\n    return avg_time\n\n# For microsecond-level profiling, use CUDA events:\n# cudaEvent_t start, stop;\n# cudaEventCreate(&start);\n# cudaEventCreate(&stop);\n# cudaEventRecord(start, stream);\n# kernel<<<grid, block, 0, stream>>>(args);\n# cudaEventRecord(stop, stream);\n# cudaEventSynchronize(stop);\n# float milliseconds = 0;\n# cudaEventElapsedTime(&milliseconds, start, stop);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Profiling workflow — practical steps:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def cuda_profiling_workflow():\n    \"\"\"The systematic approach to CUDA optimization.\"\"\"\n    print(\"=== CUDA Profiling Workflow ===\")\n    steps = [\n        (\"1. Measure baseline\", \"Run nsys profile to get system-level view\"),\n        (\"2. Identify slow kernels\", \"Sort by duration in Nsight Compute\"),\n        (\"3. Analyze bottleneck\", \"Check memory vs compute throughput\"),\n        (\"4. Check occupancy\", \"Use occupancy calculator\"),\n        (\"5. Examine coalescing\", \"Check sectors/request in ncu\"),\n        (\"6. Try optimizations\", \"Tiling → shared memory → coalescing → occupancy\"),\n        (\"7. Apply single change\", \"Only one change at a time\"),\n        (\"8. Remeasure\", \"Compare before/after metrics\"),\n        (\"9. Repeat\", \"Until bottleneck shifts to another resource\"),\n        (\"10. Document\", \"Record optimal config for each kernel type\"),\n    ]\n    for step, desc in steps:\n        print(f\"  {step:<30} {desc}\")\n    print()\n    print(\"Key rule: Only optimize the bottleneck. Optimizing non-bottlenecks\")\n    print(\"wastes time and may make the kernel slower (resource trade-offs).\")\n\ncuda_profiling_workflow()\n"
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
      }), " Explain the CUDA thread hierarchy. How does a thread know which element to process?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " CUDA organizes threads in a three-level hierarchy: grid → block → thread. A grid contains multiple blocks, and each block contains multiple threads. The kernel launch ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<<<gridDim, blockDim>>>"
      }), " specifies this. Inside the kernel, built-in variables identify each thread: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "blockIdx"
      }), " (block index within grid), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "blockDim"
      }), " (threads per block), and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "threadIdx"
      }), " (thread index within its block). The global index is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "blockIdx.x * blockDim.x + threadIdx.x"
      }), ". For multi-dimensional grids, use component-wise formulas. This indexing maps each thread to one or more data elements. In a vector add, thread i computes element i. In practice, the grid-stride loop pattern allows one thread to process multiple elements by incrementing by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "gridDim.x * blockDim.x"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-2-nvidia",
      children: "Question 2 (NVIDIA)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " What is a warp and how does the SIMT model work in CUDA?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " A warp is a group of 32 threads that execute instructions simultaneously on an SM. The SIMT (Single Instruction, Multiple Threads) model means all threads in a warp run the same instruction but on different data. The SM schedules warps — when one warp stalls (e.g., waiting for memory), the scheduler switches to another ready warp, hiding latency. Warp divergence occurs when threads in a warp take different branches (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if (tid % 2 == 0)"
      }), "). Both branches serialize — threads not in the active branch are masked out. This reduces throughput proportionally. For maximum SIMT efficiency, avoid data-dependent branching within warps."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-3-microsoft",
      children: "Question 3 (Microsoft)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " Compare global memory, shared memory, and registers in CUDA. When would you use each?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Registers are fastest (~0.5 cycle, 64K per SM), per-thread, and store local variables. Shared memory is on-chip SRAM (~20 cycles, 48-228 KB per SM), shared by all threads in a block — used for cooperative data reuse (tiling). Global memory is HBM3 (~800 cycles, 80-192 GB), accessible by all threads and the host, but slow. Rule: store per-thread variables in registers, share data within a block using shared memory, and use global memory for persistent data and host communication. Shared memory is the key optimization lever — it reduces global memory traffic by 10-100x for tiled algorithms."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-4-amazon",
      children: "Question 4 (Amazon)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " What is memory coalescing? How does it affect GPU performance?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Memory coalescing is the hardware mechanism that combines memory requests from threads in a warp into a single transaction. When threads access consecutive addresses (stride 1), the memory controller issues one 128-byte transaction for 32 consecutive FP32 values. When addresses are scattered, it issues up to 32 separate transactions. Coalesced access achieves 100% of peak HBM bandwidth. Random access achieves ~3%. To maximize coalescing: ensure consecutive threads access consecutive memory addresses (row-major order), align data structures to 128 bytes, and use Structure of Arrays (SoA) instead of Array of Structures (AoS)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-5-nvidia",
      children: "Question 5 (NVIDIA)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " How does shared memory bank conflict affect performance? How do you avoid it?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Shared memory is divided into 32 banks (4 bytes wide). Successive 4-byte words map to successive banks (word i maps to bank i % 32). A bank conflict occurs when threads in the same warp access different addresses in the same bank — accesses serialize, reducing throughput. No conflict when all threads access the same address (broadcast) or different banks. Stride-32 access causes maximum conflicts (all threads hit bank 0). Fixes: pad shared arrays by 1 element (", (0,jsx_runtime.jsx)(_components.code, {
        children: "float s[32][33]"
      }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[32][32]"
      }), "), use non-power-of-2 strides, or restructure access patterns."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-6-googletpu-comparison",
      children: "Question 6 (Google/TPU comparison)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " Compare CUDA programming to TPU programming (JAX). What are the tradeoffs?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " CUDA gives explicit control: thread hierarchy, memory placement, synchronization. This enables maximum performance but requires deep expertise. JAX/XLA on TPU uses a higher-level approach: you write NumPy-like code, XLA compiles to TPU instructions. TPUs have simpler hardware (systolic arrays without complex warp scheduling), so XLA achieves high utilization automatically. CUDA is more flexible (handles dynamic shapes, control flow, irregular ops) but harder to optimize. For regular matmul-heavy workloads, both achieve ~70-80% of peak. For irregular ops (gather, padding), CUDA wins. For fast prototyping, JAX/TPU wins."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-7-nvidia--cublas-focus",
      children: "Question 7 (NVIDIA — cuBLAS focus)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " How does cuBLAS achieve near-peak Tensor Core performance on GEMM?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " cuBLAS uses three key techniques: (1) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tiling"
      }), " — divides the matrix into tiles that fit in shared memory. Each tile is loaded from HBM once (coalesced), then reused from shared memory for all tile-size dot products. This reduces HBM traffic by tile_size (typically 128x). (2) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Double buffering"
      }), " — loads the next tile while computing the current one, overlapping data movement with computation. (3) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Auto-tuning"
      }), " — cuBLAS has thousands of kernel variants for different matrix sizes, tile sizes, and precision combinations. At library load time, it benchmarks a subset to select the fastest. The result: >80% of peak Tensor Core FLOP/s for large matrices."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-8-startup",
      children: "Question 8 (Startup)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " Your team deployed a model at fp16 inference but it's slow. How would you profile and optimize it?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Systematic approach: (1) Profile with nsys — check for large H2D transfers, kernel launch overhead, or cudaMalloc calls. (2) Profile individual kernels with Nsight Compute — identify the bottleneck (memory-bound, compute-bound, or latency-bound). (3) Check occupancy — low occupancy (<25%) means latency hiding is poor. (4) Check memory coalescing — high sectors/request (>2) means poor data layout. (5) Apply optimizations: use TensorRT for kernel fusion and INT8 quantization, fuse element-wise ops into preceding matmul kernels (e.g., GeLU + matmul fusion), use CUDA graphs to reduce launch overhead, and switch to Flash Attention for transformer layers. Each optimization targets a specific bottleneck."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-9-amazon--system-design",
      children: "Question 9 (Amazon — system design)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " How would you overlap data transfer and computation in a CUDA streaming pipeline?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Use CUDA streams and asynchronous operations. Partition data into chunks. For each chunk on a separate stream: (1) async H2D copy of input, (2) launch kernel, (3) async D2H copy of output. Streams execute concurrently — while stream 0's kernel runs, stream 1's H2D copy proceeds. This overlaps PCIe transfer with GPU compute, hiding data movement latency. Key: use pinned (page-locked) host memory for async transfers, which can be transferred without CPU involvement. The number of streams should match the depth of the pipeline (typically 2-4 streams for double/triple buffering)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-10-nvidia--optimization",
      children: "Question 10 (NVIDIA — optimization)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " Explain the occupancy vs performance tradeoff. Why is 100% occupancy not always optimal?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Occupancy is active warps divided by maximum warps per SM. Higher occupancy hides memory latency better (more warps to switch to when one stalls). However, 100% occupancy is not always best. Reasons: (1) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Register pressure"
      }), " — more warps means fewer registers per thread, forcing register spilling to L1 cache. (2) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cache thrashing"
      }), " — too many active threads evict useful data from L1/L2. (3) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Compute-bound kernels"
      }), " — latency is already hidden by Tensor Core throughput, so extra warps add no benefit. Optimal occupancy is typically 25-50% for compute-bound and 50-75% for memory-bound kernels. Always measure — the optimal point varies by kernel and GPU generation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CUDA is the programming model that powers all GPU-accelerated AI frameworks. Kernels execute in a grid of thread blocks, with warps of 32 threads following the SIMT model. The memory hierarchy — registers, shared memory, L1/L2 cache, and HBM — requires explicit management for peak performance. NVIDIA's CUDA libraries (cuBLAS, cuDNN, cuSPARSE, TensorRT) provide optimized implementations of the primitives AI engineers need, delivering near-peak hardware utilization. Performance optimization is systematic: measure occupancy, classify as memory-bound vs compute-bound, then apply targeted optimizations. Profiling with Nsight Compute and nsys reveals actual bottlenecks. Mastery of CUDA enables AI engineers to train and deploy models that fully utilize the hardware, cutting costs and latency."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " Which CUDA built-in variable gives a thread its unique index across all blocks in a 1D grid?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["a) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "threadIdx.x"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["b) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "blockIdx.x * blockDim.x + threadIdx.x"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["c) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "blockDim.x * gridDim.x"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["d) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "warpIdx.x * warpSize + laneIdx.x"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A1:"
      }), " b) The global thread ID is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "blockIdx.x * blockDim.x + threadIdx.x"
      }), ". ", (0,jsx_runtime.jsx)(_components.code, {
        children: "threadIdx.x"
      }), " alone gives only the index within the block."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2:"
      }), " How many threads are in one CUDA warp?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) 16"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) 32"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) 64"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) 128"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A2:"
      }), " b) A warp is always 32 threads. This is fixed in all NVIDIA GPU generations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3:"
      }), " What is the primary performance benefit of using shared memory in a tiled matrix multiply?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) Higher clock frequency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) Reduced HBM traffic by reusing data within a block"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) Automatic vectorization of loops"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Elimination of all global memory accesses"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A3:"
      }), " b) Shared memory enables tile-wide data reuse. Each tile is loaded once from HBM (coalesced), then all threads in the block read from shared memory. This reduces HBM traffic by ~tile_size x."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4:"
      }), " Which CUDA library provides optimized matrix multiply (GEMM) operations?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) cuDNN"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) cuSPARSE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) cuBLAS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) TensorRT"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A4:"
      }), " c) cuBLAS provides GEMM via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cublasGemmEx"
      }), ". cuDNN provides convolutions and fused attention. cuSPARSE handles sparse matrices. TensorRT optimizes inference graphs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5:"
      }), " A kernel has 80% compute throughput and 20% memory throughput in Nsight Compute. What is its primary bottleneck?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) Memory-bound — optimize data access patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) Compute-bound — increase Tensor Core usage or reduce precision"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) Latency-bound — increase occupancy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Instruction-bound — reduce expensive math operations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A5:"
      }), " b) High compute throughput (80%) and low memory throughput (20%) means the kernel is compute-bound. The GPU's compute units are the bottleneck. Optimizations: use Tensor Cores (FP16 → FP8), fuse ops to increase arithmetic intensity, or reduce FLOPs through pruning."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 1:"
      }), " Write a Numba CUDA kernel that performs element-wise multiplication of two arrays (Hadamard product). Use grid-stride loops to handle arrays of arbitrary size. Measure execution time for N=10^6, 10^7, 10^8 elements and compute effective bandwidth."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 2:"
      }), " Implement a 2D matrix transpose kernel in Numba CUDA. Compare coalesced (row-major read, column-major write) vs non-coalesced versions. Measure the bandwidth difference for a 4096x4096 FP32 matrix."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 3:"
      }), " Use the occupancy calculator function from section 2.4. For a kernel with 256 threads/block, 32 registers/thread, and 16 KB shared memory, find the maximum occupancy on an H100 SM. Then reduce registers to 24 and recompute. Explain the tradeoff."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 4:"
      }), " Simulate a cuBLAS-style tiled matrix multiply using the memory traffic estimator from section 2.2. For a 4096x4096 FP16 matmul, compute HBM traffic with tile sizes of 16, 32, 64, and 128. Plot the traffic reduction factor vs tile size. Which tile size would you choose for an H100 with 228 KB shared memory per SM?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 5:"
      }), " Profile the vector add kernel from section 2.1 using Nsight Compute concepts. Given that H100 achieves 3.35 TB/s peak HBM bandwidth and the kernel reaches 2.5 TB/s effective bandwidth, calculate: (a) memory throughput utilization, (b) sectors/request if it's 1.0 (perfect coalescing), (c) how the performance would change if you switched to a strided access pattern with sectors/request = 4."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["CUDA kernel launch uses ", (0,jsx_runtime.jsx)(_components.code, {
            children: "<<<grid, block>>>"
          }), ":"]
        }), " The global thread ID is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "blockIdx * blockDim + threadIdx"
        }), ". The grid-stride loop pattern handles arbitrary data sizes and improves occupancy."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Memory management is the #1 performance lever:"
        }), " Coalesced global access (consecutive addresses per warp) achieves 100% bandwidth; random access drops to 3%. Shared memory reduces HBM traffic by 10-100x through tiling."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CUDA libraries deliver near-peak hardware utilization:"
        }), " cuBLAS for GEMM, cuDNN for convolutions/attention, cuSPARSE for sparse ops, TensorRT for inference optimization. Write custom kernels only when libraries don't cover your operation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Occupancy hides latency but is not free:"
        }), " 100% occupancy can hurt by increasing register pressure and cache thrashing. Optimal occupancy: 25-50% for compute-bound, 50-75% for memory-bound kernels. Always measure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Profile before optimizing — and after:"
        }), " Use Nsight Compute for kernel-level metrics (throughput, occupancy, coalescing) and nsys for system-level timeline (transfers, launches, syncs). Only change one parameter at a time and re-measure."]
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
            children: "Explain the core idea of CUDA Programming for AI in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates CUDA Programming for AI."
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
            children: "Describe a production bug caused by misunderstanding CUDA Programming for AI. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on CUDA Programming for AI from 10 users to 10 million?"
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
            children: "Compare CUDA Programming for AI with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on CUDA Programming for AI."
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
            children: "How does CUDA Programming for AI behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of CUDA Programming for AI run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of CUDA Programming for AI that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name CUDA Programming for AI explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using CUDA Programming for AI\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies CUDA Programming for AI to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside CUDA Programming for AI (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of CUDA Programming for AI and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a CUDA Programming for AI-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic CUDA Programming for AI interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply CUDA Programming for AI in production today?"
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
        }), " CUDA Programming for AI builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for CUDA Programming for AI before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for CUDA Programming for AI is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for CUDA Programming for AI in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the CUDA Programming for AI chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers CUDA Programming for AI is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to CUDA Programming for AI is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing CUDA Programming for AI is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug CUDA Programming for AI issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to CUDA Programming for AI in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving CUDA Programming for AI that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of CUDA Programming for AI is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain CUDA Programming for AI in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for CUDA Programming for AI and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of CUDA Programming for AI on an empty input?"
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
            children: "Complete Medium exercises, explain CUDA Programming for AI to someone else"
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
        children: "Always write a one-line example of CUDA Programming for AI from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered CUDA Programming for AI when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining CUDA Programming for AI twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own CUDA Programming for AI snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of CUDA Programming for AI listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link CUDA Programming for AI to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of CUDA Programming for AI by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain CUDA Programming for AI to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of CUDA Programming for AI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on CUDA Programming for AI (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real CUDA Programming for AI problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements CUDA Programming for AI"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for CUDA Programming for AI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on CUDA Programming for AI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how CUDA Programming for AI fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how CUDA Programming for AI is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where CUDA Programming for AI is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of CUDA Programming for AI, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is CUDA Programming for AI asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CUDA Programming for AI is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with CUDA Programming for AI."
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
        children: "CUDA Programming for AI emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for CUDA Programming for AI today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about CUDA Programming for AI — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around CUDA Programming for AI changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing CUDA Programming for AI."
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
        children: "CUDA Programming for AI appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding CUDA Programming for AI helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the CUDA Programming for AI concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, CUDA Programming for AI skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply CUDA Programming for AI to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CUDA Programming for AI is like a recipe"
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
        }), " — this chapter contributes the CUDA Programming for AI skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "27aiinfrastructure-02cudaprogramming-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of CUDA Programming for AI in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "27aiinfrastructure-02cudaprogramming-flash2",
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
      "data-qid": "27aiinfrastructure-02cudaprogramming-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard CUDA Programming for AI approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "27aiinfrastructure-02cudaprogramming-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is CUDA Programming for AI NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "27aiinfrastructure-02cudaprogramming-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is CUDA Programming for AI applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for CUDA Programming for AI (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing CUDA Programming for AI (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for CUDA Programming for AI-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running CUDA Programming for AI in production at scale"
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
        children: "Testing: pytest for unit tests of CUDA Programming for AI code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on CUDA Programming for AI"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in CUDA Programming for AI code."]
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
        }), " or your IDE's debugger to step through the CUDA Programming for AI example code."]
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
        children: "Explain CUDA Programming for AI in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of CUDA Programming for AI."
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
        children: "Tell me about a time you debugged a CUDA Programming for AI problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where CUDA Programming for AI is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for CUDA Programming for AI."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core CUDA Programming for AI logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain CUDA Programming for AI without notes"
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
        }), ": a small team uses CUDA Programming for AI daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": CUDA Programming for AI patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": CUDA Programming for AI principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": CUDA Programming for AI shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect CUDA Programming for AI to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/03-model-compilation",
        children: "03 — Model Compilation & Optimization"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CUDA Programming for AI, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of CUDA Programming for AI depends on input size and distribution — always benchmark for your own data."
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