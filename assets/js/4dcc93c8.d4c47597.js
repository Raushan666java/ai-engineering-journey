"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[33476],{

/***/ 44844
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_27_ai_infrastructure_03_model_compilation_md_4dc_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-27-ai-infrastructure-03-model-compilation-md-4dc.json
const site_docs_courses_ai_engineering_placement_27_ai_infrastructure_03_model_compilation_md_4dc_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/ai-infrastructure/03-model-compilation","title":"03 — Model Compilation & Optimization","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/27-ai-infrastructure/03-model-compilation.md","sourceDirName":"courses/ai-engineering-placement/27-ai-infrastructure","slug":"/ai-engineering-placement/27-ai-infrastructure/03-model-compilation","permalink":"/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/03-model-compilation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":325,"frontMatter":{"id":"03-model-compilation","slug":"/ai-engineering-placement/27-ai-infrastructure/03-model-compilation","title":"03 — Model Compilation & Optimization","sidebar_label":"03 — Model Compilation & Optimization","sidebar_position":325},"sidebar":"placementSidebar","previous":{"title":"CUDA Programming for AI","permalink":"/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/02-cuda-programming"},"next":{"title":"AI Inference Serving","permalink":"/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/04-inference-serving"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/27-ai-infrastructure/03-model-compilation.md


const frontMatter = {
	id: '03-model-compilation',
	slug: '/ai-engineering-placement/27-ai-infrastructure/03-model-compilation',
	title: '03 — Model Compilation & Optimization',
	sidebar_label: '03 — Model Compilation & Optimization',
	sidebar_position: 325
};
const contentTitle = '03 — Model Compilation & Optimization';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
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
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Optimization Pipeline Overview",
  "id": "optimization-pipeline-overview",
  "level": 2
}, {
  "value": "1.1 ONNX — Format &amp; Export",
  "id": "11-onnx--format--export",
  "level": 2
}, {
  "value": "ONNX Graph Structure",
  "id": "onnx-graph-structure",
  "level": 3
}, {
  "value": "Exporting PyTorch to ONNX",
  "id": "exporting-pytorch-to-onnx",
  "level": 3
}, {
  "value": "Opset Versions",
  "id": "opset-versions",
  "level": 3
}, {
  "value": "Exporting TensorFlow to ONNX",
  "id": "exporting-tensorflow-to-onnx",
  "level": 3
}, {
  "value": "1.2 ONNX Runtime",
  "id": "12-onnx-runtime",
  "level": 2
}, {
  "value": "2.1 TensorRT Engine Building",
  "id": "21-tensorrt-engine-building",
  "level": 2
}, {
  "value": "Optimization Pipeline",
  "id": "optimization-pipeline",
  "level": 3
}, {
  "value": "Building a TensorRT Engine from ONNX",
  "id": "building-a-tensorrt-engine-from-onnx",
  "level": 3
}, {
  "value": "Layer Fusion in TensorRT",
  "id": "layer-fusion-in-tensorrt",
  "level": 3
}, {
  "value": "2.2 INT8/FP8 Quantization with TensorRT",
  "id": "22-int8fp8-quantization-with-tensorrt",
  "level": 2
}, {
  "value": "INT8 Calibration",
  "id": "int8-calibration",
  "level": 3
}, {
  "value": "FP8 Quantization (Hopper GPUs)",
  "id": "fp8-quantization-hopper-gpus",
  "level": 3
}, {
  "value": "3.1 torch.compile",
  "id": "31-torchcompile",
  "level": 2
}, {
  "value": "Basic Usage",
  "id": "basic-usage",
  "level": 3
}, {
  "value": "Understanding the Compilation Process",
  "id": "understanding-the-compilation-process",
  "level": 3
}, {
  "value": "3.2 Graph Breaks",
  "id": "32-graph-breaks",
  "level": 2
}, {
  "value": "Fixing Graph Breaks",
  "id": "fixing-graph-breaks",
  "level": 3
}, {
  "value": "4.0 Precision Formats",
  "id": "40-precision-formats",
  "level": 2
}, {
  "value": "Format Comparison",
  "id": "format-comparison",
  "level": 3
}, {
  "value": "Mixed Precision Training",
  "id": "mixed-precision-training",
  "level": 3
}, {
  "value": "FP8 (E4M3 / E5M2)",
  "id": "fp8-e4m3--e5m2",
  "level": 3
}, {
  "value": "5.0 Graph Optimization",
  "id": "50-graph-optimization",
  "level": 2
}, {
  "value": "Operator Fusion",
  "id": "operator-fusion",
  "level": 3
}, {
  "value": "Constant Folding",
  "id": "constant-folding",
  "level": 3
}, {
  "value": "Dead Code Elimination (DCE)",
  "id": "dead-code-elimination-dce",
  "level": 3
}, {
  "value": "Memory Planning",
  "id": "memory-planning",
  "level": 3
}, {
  "value": "6.0 Benchmarking",
  "id": "60-benchmarking",
  "level": 2
}, {
  "value": "Comprehensive Benchmark Suite",
  "id": "comprehensive-benchmark-suite",
  "level": 3
}, {
  "value": "Visualizing Benchmark Results",
  "id": "visualizing-benchmark-results",
  "level": 3
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "Q1: What is ONNX and why was it created?",
  "id": "q1-what-is-onnx-and-why-was-it-created",
  "level": 3
}, {
  "value": "Q2: Explain the role of opset versions in ONNX export.",
  "id": "q2-explain-the-role-of-opset-versions-in-onnx-export",
  "level": 3
}, {
  "value": "Q3: How does TensorRT achieve 5-10x speedup over naive PyTorch inference?",
  "id": "q3-how-does-tensorrt-achieve-5-10x-speedup-over-naive-pytorch-inference",
  "level": 3
}, {
  "value": "Q4: What is the difference between torch.compile and TensorRT?",
  "id": "q4-what-is-the-difference-between-torchcompile-and-tensorrt",
  "level": 3
}, {
  "value": "Q5: What causes graph breaks in torch.compile and how do you fix them?",
  "id": "q5-what-causes-graph-breaks-in-torchcompile-and-how-do-you-fix-them",
  "level": 3
}, {
  "value": "Q6: Compare FP16, BF16, and FP8 for inference. When would you use each?",
  "id": "q6-compare-fp16-bf16-and-fp8-for-inference-when-would-you-use-each",
  "level": 3
}, {
  "value": "Q7: Explain the process of INT8 calibration in TensorRT.",
  "id": "q7-explain-the-process-of-int8-calibration-in-tensorrt",
  "level": 3
}, {
  "value": "Q8: How do you benchmark a model optimization correctly?",
  "id": "q8-how-do-you-benchmark-a-model-optimization-correctly",
  "level": 3
}, {
  "value": "Q9: What is operator fusion and why does it matter?",
  "id": "q9-what-is-operator-fusion-and-why-does-it-matter",
  "level": 3
}, {
  "value": "Q10: Design an optimization pipeline for deploying a 7B-parameter LLM to production.",
  "id": "q10-design-an-optimization-pipeline-for-deploying-a-7b-parameter-llm-to-production",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Chapter Quiz (5 MCQ)",
  "id": "chapter-quiz-5-mcq",
  "level": 2
}, {
  "value": "Questions",
  "id": "questions",
  "level": 3
}, {
  "value": "Answers",
  "id": "answers",
  "level": 3
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Exercise 1: Export and Compare ONNX vs PyTorch Speed",
  "id": "exercise-1-export-and-compare-onnx-vs-pytorch-speed",
  "level": 3
}, {
  "value": "Exercise 2: Build TensorRT Engine with Different Precisions",
  "id": "exercise-2-build-tensorrt-engine-with-different-precisions",
  "level": 3
}, {
  "value": "Exercise 3: Identify and Fix Graph Breaks",
  "id": "exercise-3-identify-and-fix-graph-breaks",
  "level": 3
}, {
  "value": "Exercise 4: Implement a Custom Benchmark",
  "id": "exercise-4-implement-a-custom-benchmark",
  "level": 3
}, {
  "value": "Exercise 5: Quantization Error Analysis",
  "id": "exercise-5-quantization-error-analysis",
  "level": 3
}, {
  "value": "Revision Notes",
  "id": "revision-notes",
  "level": 2
}, {
  "value": "Key Takeaways",
  "id": "key-takeaways",
  "level": 2
}, {
  "value": "Interview Q&amp;A (Additional)",
  "id": "interview-qa-additional",
  "level": 2
}, {
  "value": "Q1: How do you handle dynamic shapes in TensorRT?",
  "id": "q1-how-do-you-handle-dynamic-shapes-in-tensorrt",
  "level": 3
}, {
  "value": "Q2: What is the trade-off between kernel auto-tuning time and inference speed?",
  "id": "q2-what-is-the-trade-off-between-kernel-auto-tuning-time-and-inference-speed",
  "level": 3
}, {
  "value": "Q3: How does mixed precision training work with torch.amp?",
  "id": "q3-how-does-mixed-precision-training-work-with-torchamp",
  "level": 3
}, {
  "value": "Q4: Compare TensorRT with Apache TVM.",
  "id": "q4-compare-tensorrt-with-apache-tvm",
  "level": 3
}, {
  "value": "Q5: What is the role of AOTAutograd in torch.compile?",
  "id": "q5-what-is-the-role-of-aotautograd-in-torchcompile",
  "level": 3
}, {
  "value": "Exercises (Advanced)",
  "id": "exercises-advanced",
  "level": 2
}, {
  "value": "Exercise 6: Full Pipeline",
  "id": "exercise-6-full-pipeline",
  "level": 3
}, {
  "value": "Exercise 7: Graph Break Detection Tool",
  "id": "exercise-7-graph-break-detection-tool",
  "level": 3
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
  "value": "References",
  "id": "references",
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
        id: "03--model-compilation--optimization",
        children: "03 — Model Compilation & Optimization"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain what model compilation is and why it improves latency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the difference between eager execution and graph compilation (torch.compile, TensorRT, ONNX)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Export PyTorch and TensorFlow models to ONNX with the correct opset version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build TensorRT engines with fused kernels, INT8/FP8 quantization, and dynamic shapes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Benchmark latency percentiles and throughput to validate optimization gains"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Model compilation converts trained neural networks into optimized executables for specific hardware. Instead of interpreting a model graph at runtime, compilation bakes fused kernels, memory plans, and precision choices into a single deployable artifact."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI engineers must understand compilation because inference speed and cost depend on it. A model compiled with TensorRT can run 5-10x faster than the same model in pure PyTorch. This chapter covers ONNX interchange, TensorRT engine building, torch.compile, precision formats, graph optimizations, and benchmarking methodology."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PyTorch basics: tensors, modules, forward pass"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of GPU architecture and CUDA"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with floating-point formats (FP32, FP16)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic Python and command-line usage"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "ONNX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open Neural Network Exchange — intermediate graph format for model interchange"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Opset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Versioned set of operators supported in an ONNX export"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TensorRT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NVIDIA's model optimization engine for GPU inference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Engine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TensorRT's compiled, hardware-specific model artifact"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "torch.compile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PyTorch 2.0 JIT compiler using TorchDynamo and Inductor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Graph Break"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Point where torch.compile cannot trace through a Python operation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Operator Fusion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combining adjacent ops into a single kernel to reduce memory traffic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Constant Folding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-computing subgraphs with static inputs at compile time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INT8 Quantization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Representing weights/activations with 8-bit integers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FP8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8-bit floating point (E4M3 or E5M2 format)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mixed Precision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Using FP16/BF16 for compute, FP32 for master weights"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inferences per second (higher is better)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time per single inference (lower is better)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "ONNX Format & Export"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intermediate representation for cross-framework deployment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ONNX Runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-platform inference engine for ONNX models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TensorRT Engine Building"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graph optimization and kernel auto-tuning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TensorRT Quantization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INT8/FP8 calibration and dynamic shapes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "torch.compile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TorchDynamo, AOTAutograd, and Inductor backend"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graph Breaks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identifying and fixing tracing failures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precision Formats"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FP32, FP16/BF16, INT8, INT4, FP8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graph Optimizations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fusion, folding, DCE, memory planning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Benchmarking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measuring and comparing optimization gains"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "optimization-pipeline-overview",
      children: "Optimization Pipeline Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Source[Trained Model]\n        PT[PyTorch]\n        TF[TensorFlow]\n        JAX[JAX Model]\n    end\n    subgraph Interchange[Interchange Format]\n        ONNX[ONNX Graph]\n    end\n    subgraph Compiler[Compiler/Optimizer]\n        TRT[TensorRT]\n        TC[torch.compile]\n        TVM[Apache TVM]\n    end\n    subgraph Engine[Optimized Engine]\n        EN[.engine / .so]\n        FP16[FP16 Kernel]\n        INT8[INT8 Kernel]\n        FUSED[Fused Ops]\n    end\n    subgraph Deploy[Deployment]\n        API[Inference API]\n        BENCH[Benchmark]\n    end\n    PT --> ONNX\n    TF --> ONNX\n    JAX --> ONNX\n    ONNX --> TRT\n    PT --> TC\n    PT --> TVM\n    ONNX --> TVM\n    TRT --> EN\n    TC --> EN\n    TVM --> EN\n    EN --> FP16\n    EN --> INT8\n    EN --> FUSED\n    FUSED --> API\n    FP16 --> API\n    INT8 --> API\n    API --> BENCH\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-onnx--format--export",
      children: "1.1 ONNX — Format & Export"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ONNX (Open Neural Network Exchange) is an open-source graph format co-developed by Microsoft and Facebook in 2017. It defines a standard set of operators, data types, and graph structure that any framework can export to and any runtime can import from."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onnx-graph-structure",
      children: "ONNX Graph Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An ONNX model is a protobuf file containing:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Graph"
        }), " — list of nodes (operations), tensors (named values), initializers (constant weights)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Opset"
        }), " — version number that defines which operator signatures are valid"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metadata"
        }), " — model name, producer framework, documentation strings"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph ONNX[ONNX Model]\n        IR[ModelProto]\n        GRAPH[GraphProto]\n        NODES[NodeProto x N]\n        TENSORS[TensorProto x M]\n        INIT[Initializer x K]\n    end\n    IR --> GRAPH\n    GRAPH --> NODES\n    GRAPH --> TENSORS\n    GRAPH --> INIT\n    NODES --> N1[Conv]\n    NODES --> N2[Relu]\n    NODES --> N3[MatMul]\n    NODES --> N4[Softmax]\n    TENSORS --> T1[input: float32]\n    TENSORS --> T2[output: float32]\n    INIT --> W1[conv_weight]\n    INIT --> W2[fc_weight]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exporting-pytorch-to-onnx",
      children: "Exporting PyTorch to ONNX"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import torch\nimport torch.nn as nn\nimport torch.onnx\n\nclass SimpleCNN(nn.Module):\n    \"\"\"A small CNN for demonstration — 2 conv layers + 2 linear layers.\"\"\"\n\n    def __init__(self, num_classes: int = 10):\n        super().__init__()\n        self.conv1 = nn.Conv2d(3, 16, kernel_size=3, padding=1)\n        self.relu1 = nn.ReLU()\n        self.pool1 = nn.MaxPool2d(2)\n        self.conv2 = nn.Conv2d(16, 32, kernel_size=3, padding=1)\n        self.relu2 = nn.ReLU()\n        self.pool2 = nn.MaxPool2d(2)\n        self.fc1 = nn.Linear(32 * 8 * 8, 128)\n        self.relu3 = nn.ReLU()\n        self.fc2 = nn.Linear(128, num_classes)\n\n    def forward(self, x: torch.Tensor) -> torch.Tensor:\n        x = self.pool1(self.relu1(self.conv1(x)))\n        x = self.pool2(self.relu2(self.conv2(x)))\n        x = x.view(x.size(0), -1)\n        x = self.relu3(self.fc1(x))\n        x = self.fc2(x)\n        return x\n\n# Create model and dummy input\nmodel = SimpleCNN(num_classes=10)\nmodel.eval()\ndummy_input = torch.randn(1, 3, 32, 32)\n\n# Export to ONNX with dynamic batch size\ntorch.onnx.export(\n    model,\n    dummy_input,\n    \"simple_cnn.onnx\",\n    input_names=[\"input\"],\n    output_names=[\"output\"],\n    dynamic_axes={\n        \"input\": {0: \"batch_size\"},\n        \"output\": {0: \"batch_size\"},\n    },\n    opset_version=18,\n    do_constant_folding=True,\n)\n\nprint(\"ONNX export complete: simple_cnn.onnx\")\n\n# Verify the exported model\nimport onnx\n\nonnx_model = onnx.load(\"simple_cnn.onnx\")\nonnx.checker.check_model(onnx_model)\nprint(f\"ONNX IR version: {onnx_model.ir_version}\")\nprint(f\"Opset version: {onnx_model.opset_import[0].version}\")\nprint(f\"Number of nodes: {len(onnx_model.graph.node)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "opset-versions",
      children: "Opset Versions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ONNX evolves its operator definitions through opset versions. Newer opsets add operators, fix bugs, or change semantics. Exporting with an older opset ensures broader compatibility but may miss newer optimizations."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Common opset versions and their significance\nopset_info = {\n    11: \"Stable, widely supported. Recommended for broad compatibility.\",\n    13: \"Added SequenceEmpty, SequenceInsert, ConcatFromSequence.\",\n    15: \"Added Shape inference improvements, Bernoulli.\",\n    18: \"Added GroupNorm, GridSample updates, Pad v18.\",\n    20: \"Latest stable opset as of 2025. Full support for modern architectures.\",\n}\n\nfor version, description in opset_info.items():\n    print(f\"  Opset {version:2d}: {description}\")\n\n# Export with explicit opset version\ntorch.onnx.export(\n    model,\n    dummy_input,\n    \"simple_cnn_opset13.onnx\",\n    opset_version=13,\n    input_names=[\"input\"],\n    output_names=[\"output\"],\n)\nprint(\"\\nExported with opset 13: simple_cnn_opset13.onnx\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exporting-tensorflow-to-onnx",
      children: "Exporting TensorFlow to ONNX"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# tf2onnx converts TensorFlow SavedModel or Keras models to ONNX\n# Installation: pip install tf2onnx\n\nimport tensorflow as tf\nimport tf2onnx\n\ndef export_keras_to_onnx():\n    \"\"\"Convert a Keras model to ONNX format.\"\"\"\n    model = tf.keras.Sequential([\n        tf.keras.layers.Conv2D(16, 3, activation=\"relu\", input_shape=(32, 32, 3)),\n        tf.keras.layers.MaxPooling2D(2),\n        tf.keras.layers.Flatten(),\n        tf.keras.layers.Dense(10),\n    ])\n    model.compile(optimizer=\"adam\", loss=\"sparse_categorical_crossentropy\")\n\n    # Convert to ONNX\n    spec = (tf.TensorSpec((None, 32, 32, 3), tf.float32, name=\"input\"),)\n    output_path = \"keras_model.onnx\"\n    model_proto, _ = tf2onnx.convert.from_keras(model, input_signature=spec, output_path=output_path)\n    print(f\"TF model exported to ONNX: {output_path}\")\n    print(f\"Opset: {model_proto.opset_import[0].version}\")\n\nexport_keras_to_onnx()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-onnx-runtime",
      children: "1.2 ONNX Runtime"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ONNX Runtime (ORT) is a cross-platform inference engine that loads ONNX models and runs them on CPU, GPU, CUDA, TensorRT, DirectML, and other backends."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import onnxruntime as ort\nimport numpy as np\n\nclass ONNXInferenceEngine:\n    \"\"\"Run inference using ONNX Runtime with configurable providers.\"\"\"\n\n    def __init__(self, model_path: str, providers: list = None):\n        if providers is None:\n            providers = [\n                \"TensorrtExecutionProvider\",\n                \"CUDAExecutionProvider\",\n                \"CPUExecutionProvider\",\n            ]\n        self.session = ort.InferenceSession(model_path, providers=providers)\n        self.input_name = self.session.get_inputs()[0].name\n        self.output_name = self.session.get_outputs()[0].name\n        print(f\"Loaded model: {model_path}\")\n        print(f\"Providers: {self.session.get_providers()}\")\n        print(f\"Input: {self.input_name} {self.session.get_inputs()[0].shape}\")\n        print(f\"Output: {self.output_name} {self.session.get_outputs()[0].shape}\")\n\n    def predict(self, input_array: np.ndarray) -> np.ndarray:\n        \"\"\"Run a single inference pass.\"\"\"\n        ort_inputs = {self.input_name: input_array.astype(np.float32)}\n        outputs = self.session.run([self.output_name], ort_inputs)\n        return outputs[0]\n\n    def benchmark(self, input_shape: tuple, num_runs: int = 100) -> dict:\n        \"\"\"Benchmark inference throughput and latency.\"\"\"\n        import time\n        dummy = np.random.randn(*input_shape).astype(np.float32)\n\n        # Warmup\n        for _ in range(10):\n            _ = self.predict(dummy)\n\n        # Timed runs\n        latencies = []\n        for _ in range(num_runs):\n            start = time.perf_counter()\n            _ = self.predict(dummy)\n            latencies.append((time.perf_counter() - start) * 1000)  # ms\n\n        latencies = np.array(latencies)\n        return {\n            \"mean_latency_ms\": float(np.mean(latencies)),\n            \"p50_latency_ms\": float(np.median(latencies)),\n            \"p95_latency_ms\": float(np.percentile(latencies, 95)),\n            \"p99_latency_ms\": float(np.percentile(latencies, 99)),\n            \"throughput_ips\": 1000.0 / float(np.mean(latencies)),\n        }\n\n# Example usage\nengine = ONNXInferenceEngine(\"simple_cnn.onnx\")\nresult = engine.benchmark((1, 3, 32, 32), num_runs=50)\nprint(f\"ONNX Runtime Benchmark:\")\nfor k, v in result.items():\n    print(f\"  {k}: {v:.2f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "21-tensorrt-engine-building",
      children: "2.1 TensorRT Engine Building"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TensorRT is NVIDIA's optimization SDK for deep learning inference. It takes a trained model (via ONNX or directly) and produces a hardware-specific engine with fused kernels, auto-tuned layers, and optimized memory access."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "optimization-pipeline",
      children: "Optimization Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Input[Input Model]\n        ONNX[ONNX Model]\n    end\n    subgraph Build[Engine Build Phase]\n        P1[Parse Graph]\n        P2[Apply Optimizations<br/>- Layer Fusion<br/>- Constant Folding<br/>- Dead Code Elimination]\n        P3[Precision Calibration<br/>- FP32/FP16/INT8]\n        P4[Kernel Auto-Tuning]\n        P5[Memory Planning]\n    end\n    subgraph Output[Engine Artifact]\n        ENGINE[TensorRT Engine<br/>.plan / .engine]\n    end\n    subgraph Deploy[Runtime]\n        INF[Inference Execution]\n    end\n    ONNX --> P1\n    P1 --> P2\n    P2 --> P3\n    P3 --> P4\n    P4 --> P5\n    P5 --> ENGINE\n    ENGINE --> INF\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "building-a-tensorrt-engine-from-onnx",
      children: "Building a TensorRT Engine from ONNX"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import tensorrt as trt\nimport numpy as np\n\nclass TensorRTEngineBuilder:\n    \"\"\"Build a TensorRT engine from an ONNX model.\"\"\"\n\n    def __init__(self, onnx_path: str, precision: str = \"fp16\"):\n        self.onnx_path = onnx_path\n        self.precision = precision\n        self.logger = trt.Logger(trt.Logger.INFO)\n        self.builder = trt.Builder(self.logger)\n        self.network = self.builder.create_network(\n            1 << int(trt.NetworkDefinitionCreationFlag.EXPLICIT_BATCH)\n        )\n        self.parser = trt.OnnxParser(self.network, self.logger)\n        self.config = self.builder.create_builder_config()\n\n        # Set precision\n        if precision == \"fp16\":\n            self.config.set_flag(trt.BuilderFlag.FP16)\n        elif precision == \"int8\":\n            self.config.set_flag(trt.BuilderFlag.FP16)\n            self.config.set_flag(trt.BuilderFlag.INT8)\n\n        # Set memory pool limits (2GB workspace)\n        self.config.set_memory_pool_limit(trt.MemoryPoolType.WORKSPACE, 2 * 1024 * 1024 * 1024)\n\n    def parse_onnx(self):\n        \"\"\"Parse the ONNX model into TensorRT network.\"\"\"\n        with open(self.onnx_path, \"rb\") as f:\n            onnx_bytes = f.read()\n        success = self.parser.parse(onnx_bytes)\n        if not success:\n            for idx in range(self.parser.num_errors):\n                print(f\"Parse error {idx}: {self.parser.get_error(idx)}\")\n            raise RuntimeError(\"Failed to parse ONNX model\")\n        print(f\"Network parsed: {self.network.num_layers} layers\")\n\n    def set_dynamic_shapes(self, input_name: str, min_shape: tuple, opt_shape: tuple, max_shape: tuple):\n        \"\"\"Configure dynamic input shapes for the engine.\"\"\"\n        profile = self.builder.create_optimization_profile()\n        profile.set_shape(input_name, min_shape, opt_shape, max_shape)\n        self.config.add_optimization_profile(profile)\n        print(f\"Dynamic shape set: min={min_shape}, opt={opt_shape}, max={max_shape}\")\n\n    def build_engine(self, output_path: str):\n        \"\"\"Build and serialize the engine.\"\"\"\n        self.parse_onnx()\n        serialized = self.builder.build_serialized_network(self.network, self.config)\n        if serialized is None:\n            raise RuntimeError(\"Engine build failed\")\n        with open(output_path, \"wb\") as f:\n            f.write(serialized)\n        engine_size = len(serialized) / (1024 * 1024)\n        print(f\"Engine built: {output_path} ({engine_size:.2f} MB)\")\n\n# Build an FP16 engine\nbuilder = TensorRTEngineBuilder(\"simple_cnn.onnx\", precision=\"fp16\")\nbuilder.set_dynamic_shapes(\n    \"input\",\n    min_shape=(1, 3, 32, 32),\n    opt_shape=(8, 3, 32, 32),\n    max_shape=(32, 3, 32, 32),\n)\nbuilder.build_engine(\"simple_cnn_fp16.engine\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "layer-fusion-in-tensorrt",
      children: "Layer Fusion in TensorRT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TensorRT fuses adjacent operations into single kernels. Common fusion patterns:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conv + Bias + ReLU"
        }), " → single CBR kernel"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conv + BatchNorm + ReLU"
        }), " → single fused kernel"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GELU"
        }), " approximation fused with MatMul"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LayerNorm"
        }), " fused with preceding MatMul"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Demonstrating the impact of fusion: compare layer count before/after\nclass FusionAnalyzer:\n    \"\"\"Analyze how TensorRT fuses layers.\"\"\"\n\n    def __init__(self, onnx_path: str):\n        self.onnx_path = onnx_path\n        self.logger = trt.Logger(trt.Logger.WARNING)\n\n    def count_onnx_layers(self):\n        \"\"\"Count layers in the ONNX graph.\"\"\"\n        import onnx\n        model = onnx.load(self.onnx_path)\n        return len(model.graph.node)\n\n    def count_trt_layers(self):\n        \"\"\"Count layers after TensorRT optimization.\"\"\"\n        builder = trt.Builder(self.logger)\n        network = builder.create_network(\n            1 << int(trt.NetworkDefinitionCreationFlag.EXPLICIT_BATCH)\n        )\n        parser = trt.OnnxParser(network, self.logger)\n        with open(self.onnx_path, \"rb\") as f:\n            parser.parse(f.read())\n        # After parsing, inspect the optimized network\n        return network.num_layers  # Layers before fusion\n\n    def analyze(self):\n        onnx_layers = self.count_onnx_layers()\n        trt_layers = self.count_trt_layers()\n        print(f\"ONNX graph nodes:     {onnx_layers}\")\n        print(f\"TensorRT layers:      {trt_layers}\")\n        print(f\"Fusion ratio:         {onnx_layers / trt_layers:.1f}x\")\n\nanalyzer = FusionAnalyzer(\"simple_cnn.onnx\")\nanalyzer.analyze()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "22-int8fp8-quantization-with-tensorrt",
      children: "2.2 INT8/FP8 Quantization with TensorRT"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "int8-calibration",
      children: "INT8 Calibration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "INT8 quantization requires a calibration step to determine optimal scaling factors for activations."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import tensorrt as trt\nimport numpy as np\n\nclass INT8Calibrator(trt.IInt8Calibrator):\n    \"\"\"Calibrator for INT8 quantization using representative data.\"\"\"\n\n    def __init__(self, calibration_data: np.ndarray, batch_size: int = 8):\n        trt.IInt8Calibrator.__init__(self)\n        self.calibration_data = calibration_data\n        self.batch_size = batch_size\n        self.current_index = 0\n        self.num_batches = len(calibration_data) // batch_size\n        self.device_input = None\n\n    def get_batch_size(self):\n        return self.batch_size\n\n    def get_batch(self, names):\n        if self.current_index >= self.num_batches:\n            return None\n        batch = self.calibration_data[\n            self.current_index * self.batch_size :\n            (self.current_index + 1) * self.batch_size\n        ]\n        self.current_index += 1\n        # Convert to numpy array (or ctypes pointer for GPU)\n        return np.ascontiguousarray(batch, dtype=np.float32)\n\n    def read_calibration_cache(self):\n        return None\n\n    def write_calibration_cache(self, cache):\n        with open(\"calibration.cache\", \"wb\") as f:\n            f.write(cache)\n\ndef build_int8_engine(onnx_path: str, calibration_data: np.ndarray, output_path: str):\n    \"\"\"Build INT8 quantized engine with calibration.\"\"\"\n    logger = trt.Logger(trt.Logger.INFO)\n    builder = trt.Builder(logger)\n    network = builder.create_network(\n        1 << int(trt.NetworkDefinitionCreationFlag.EXPLICIT_BATCH)\n    )\n    parser = trt.OnnxParser(network, logger)\n\n    with open(onnx_path, \"rb\") as f:\n        if not parser.parse(f.read()):\n            for i in range(parser.num_errors):\n                print(parser.get_error(i))\n            raise RuntimeError(\"ONNX parse failed\")\n\n    config = builder.create_builder_config()\n    config.set_flag(trt.BuilderFlag.FP16)\n    config.set_flag(trt.BuilderFlag.INT8)\n\n    calibrator = INT8Calibrator(calibration_data, batch_size=8)\n    config.int8_calibrator = calibrator\n    config.set_memory_pool_limit(trt.MemoryPoolType.WORKSPACE, 2 * 1024 * 1024 * 1024)\n\n    serialized = builder.build_serialized_network(network, config)\n    with open(output_path, \"wb\") as f:\n        f.write(serialized)\n    print(f\"INT8 engine built: {output_path}\")\n\n# Generate calibration data (1000 random images)\ncalib_data = np.random.randn(1000, 3, 32, 32).astype(np.float32)\nbuild_int8_engine(\"simple_cnn.onnx\", calib_data, \"simple_cnn_int8.engine\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fp8-quantization-hopper-gpus",
      children: "FP8 Quantization (Hopper GPUs)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FP8 on NVIDIA Hopper (H100/H200) uses the Transformer Engine for 8-bit floating point with E4M3 (weights) and E5M2 (gradients) formats."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# FP8 is supported on SM90 (Hopper) and newer architectures\n# TensorRT supports FP8 via the FP8 flag\n\ndef build_fp8_engine(onnx_path: str, output_path: str):\n    \"\"\"Build FP8 engine (requires H100 or newer GPU).\"\"\"\n    logger = trt.Logger(trt.Logger.INFO)\n    builder = trt.Builder(logger)\n    network = builder.create_network(\n        1 << int(trt.NetworkDefinitionCreationFlag.EXPLICIT_BATCH)\n    )\n    parser = trt.OnnxParser(network, logger)\n\n    with open(onnx_path, \"rb\") as f:\n        if not parser.parse(f.read()):\n            for i in range(parser.num_errors):\n                print(parser.get_error(i))\n            raise RuntimeError(\"ONNX parse failed\")\n\n    config = builder.create_builder_config()\n    # FP8 requires FP8 flag (TensorRT 10.0+)\n    if hasattr(trt.BuilderFlag, \"FP8\"):\n        config.set_flag(trt.BuilderFlag.FP8)\n        print(\"FP8 flag set — requires H100/H200 GPU\")\n    else:\n        print(\"FP8 not supported in this TensorRT version\")\n\n    config.set_memory_pool_limit(trt.MemoryPoolType.WORKSPACE, 2 * 1024 * 1024 * 1024)\n    serialized = builder.build_serialized_network(network, config)\n\n    with open(output_path, \"wb\") as f:\n        f.write(serialized)\n    print(f\"FP8 engine built: {output_path}\")\n\n# build_fp8_engine(\"simple_cnn.onnx\", \"simple_cnn_fp8.engine\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "31-torchcompile",
      children: "3.1 torch.compile"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["PyTorch 2.0 introduced ", (0,jsx_runtime.jsx)(_components.code, {
        children: "torch.compile"
      }), " — a JIT compiler that traces Python code and generates optimized GPU kernels. It has three components:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TorchDynamo"
        }), " — captures PyTorch graphs safely using frame evaluation hooks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AOTAutograd"
        }), " — traces backward graph for training"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inductor"
        }), " — generates optimized Triton/CUDA kernels"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph User[User Code]\n        MODEL[PyTorch Module]\n    end\n    subgraph TorchDynamo[TorchDynamo]\n        CAPTURE[Capture Graph]\n        GRAPH[FX Graph]\n        GUARDS[Guard System]\n    end\n    subgraph AOTAutograd[AOTAutograd]\n        FW[Forward Graph]\n        BW[Backward Graph]\n    end\n    subgraph Inductor[Inductor Backend]\n        TRITON[Triton Kernels]\n        CUDA[CUDA Kernels]\n        FUSED[Fused Ops]\n    end\n    MODEL --> CAPTURE\n    CAPTURE --> GRAPH\n    GRAPH --> GUARDS\n    GRAPH --> AOTAutograd\n    AOTAutograd --> FW\n    AOTAutograd --> BW\n    FW --> Inductor\n    BW --> Inductor\n    Inductor --> TRITON\n    Inductor --> CUDA\n    Inductor --> FUSED\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic-usage",
      children: "Basic Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import torch\nimport torch.nn as nn\nimport time\n\nclass TransformerBlock(nn.Module):\n    \"\"\"A single transformer block for demonstration.\"\"\"\n\n    def __init__(self, d_model: int = 512, nhead: int = 8):\n        super().__init__()\n        self.attention = nn.MultiheadAttention(d_model, nhead, batch_first=True)\n        self.norm1 = nn.LayerNorm(d_model)\n        self.norm2 = nn.LayerNorm(d_model)\n        self.ffn = nn.Sequential(\n            nn.Linear(d_model, d_model * 4),\n            nn.GELU(),\n            nn.Linear(d_model * 4, d_model),\n        )\n\n    def forward(self, x: torch.Tensor) -> torch.Tensor:\n        attn_out, _ = self.attention(x, x, x)\n        x = self.norm1(x + attn_out)\n        ffn_out = self.ffn(x)\n        x = self.norm2(x + ffn_out)\n        return x\n\n# Create model and inputs\nmodel = TransformerBlock(d_model=512, nhead=8).cuda().half()\ndummy = torch.randn(32, 128, 512).cuda().half()\n\n# 1. Eager mode (baseline)\ndef measure_time(fn, inputs, runs: int = 50):\n    \"\"\"Measure average execution time.\"\"\"\n    # Warmup\n    for _ in range(10):\n        fn(*inputs)\n    torch.cuda.synchronize()\n\n    start = time.perf_counter()\n    for _ in range(runs):\n        fn(*inputs)\n    torch.cuda.synchronize()\n    avg_ms = (time.perf_counter() - start) / runs * 1000\n    return avg_ms\n\neager_time = measure_time(model.forward, [dummy])\nprint(f\"Eager mode:   {eager_time:.2f} ms\")\n\n# 2. torch.compile with default backend\ncompiled_model = torch.compile(model, mode=\"default\")\ncompiled_time = measure_time(compiled_model.forward, [dummy])\nprint(f\"Compiled:     {compiled_time:.2f} ms\")\nprint(f\"Speedup:      {eager_time / compiled_time:.2f}x\")\n\n# 3. Different modes\nfor mode in [\"reduce-overhead\", \"max-autotune\", \"max-autotune-no-cudagraphs\"]:\n    compiled = torch.compile(model, mode=mode)\n    t = measure_time(compiled.forward, [dummy])\n    print(f\"  mode={mode:30s}: {t:.2f} ms\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "understanding-the-compilation-process",
      children: "Understanding the Compilation Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# torch.compile with verbose tracing\nimport torch._dynamo as dynamo\n\ndef trace_compilation():\n    \"\"\"Demonstrate what happens during compilation.\"\"\"\n    model = TransformerBlock(d_model=128, nhead=4).cuda()\n\n    # Enable logging to see compilation steps\n    torch._logging.set_logs(dynamo=3, inductor=3)\n\n    compiled = torch.compile(model, mode=\"default\")\n    dummy = torch.randn(8, 32, 128).cuda()\n\n    # First call triggers compilation\n    out = compiled(dummy)\n    print(\"First call (compilation happened here)\")\n\n    # Second call uses cached kernels\n    out = compiled(dummy)\n    print(\"Second call (cached, no recompilation)\")\n\n    # New shape causes recompilation\n    dummy_new = torch.randn(16, 32, 128).cuda()\n    out = compiled(dummy_new)\n    print(\"Third call (different batch size — recompilation)\")\n\n# trace_compilation()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "32-graph-breaks",
      children: "3.2 Graph Breaks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["torch.compile cannot trace through arbitrary Python code. When it hits unsupported operations, it creates a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "graph break"
      }), " — splitting the computation into multiple traced subgraphs with a Python boundary between them."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def demonstrate_graph_breaks():\n    \"\"\"Show operations that cause graph breaks.\"\"\"\n\n    def clean_forward(x: torch.Tensor, w: torch.Tensor) -> torch.Tensor:\n        \"\"\"Fully traceable — no graph breaks.\"\"\"\n        return torch.matmul(x, w)\n\n    def broken_forward(x: torch.Tensor, w: torch.Tensor) -> torch.Tensor:\n        \"\"\"Contains graph break due to Python control flow.\"\"\"\n        result = torch.matmul(x, w)\n        if result.sum() > 0:  # Python conditional — graph break!\n            result = result * 2\n        return result\n\n    def broken_forward2(x: torch.Tensor, w: torch.Tensor) -> torch.Tensor:\n        \"\"\"Graph break due to in-place mutation of input.\"\"\"\n        x.add_(1)  # In-place mutation of input — graph break!\n        return torch.matmul(x, w)\n\n    # Compile and check number of graphs\n    x = torch.randn(4, 64).cuda()\n    w = torch.randn(64, 32).cuda()\n\n    for name, fn in [\n        (\"Clean\", clean_forward),\n        (\"Broken (control flow)\", broken_forward),\n        (\"Broken (in-place)\", broken_forward2),\n    ]:\n        compiled = torch.compile(fn, mode=\"default\", fullgraph=False)\n        try:\n            out = compiled(x, w)\n            # Check number of compiled graphs using dynamo counters\n            import torch._dynamo.utils as dynamo_utils\n            print(f\"{name}: OK\")\n        except Exception as e:\n            print(f\"{name}: Error — {e}\")\n\ndemonstrate_graph_breaks()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fixing-graph-breaks",
      children: "Fixing Graph Breaks"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def fix_graph_breaks():\n    \"\"\"Patterns to avoid graph breaks.\"\"\"\n\n    # Bad: Python control flow\n    def bad_activation(x: torch.Tensor) -> torch.Tensor:\n        if x.dim() == 2:\n            return torch.relu(x)\n        return x\n\n    # Good: torch.where instead of if\n    def good_activation(x: torch.Tensor) -> torch.Tensor:\n        return torch.where(x.dim() == 2, torch.relu(x), x)\n\n    # Bad: In-place modification of input\n    def bad_dropout(x: torch.Tensor, p: float = 0.1) -> torch.Tensor:\n        mask = torch.rand_like(x) > p\n        x *= mask  # mutates input — graph break\n        return x\n\n    # Good: Return new tensor\n    def good_dropout(x: torch.Tensor, p: float = 0.1) -> torch.Tensor:\n        mask = torch.rand_like(x) > p\n        return x * mask  # new tensor — traceable\n\n    # Bad: List iteration\n    def bad_sum_list(tensors: list) -> torch.Tensor:\n        total = 0\n        for t in tensors:  # Python list iteration — graph break\n            total += t\n        return total\n\n    # Good: torch.stack + sum\n    def good_sum_list(tensors: list) -> torch.Tensor:\n        return torch.stack(tensors).sum(dim=0)\n\n    # Test them\n    x = torch.randn(4, 64).cuda()\n    for name, fn in [\n        (\"bad_activation\", bad_activation),\n        (\"good_activation\", good_activation),\n        (\"good_dropout\", good_dropout),\n    ]:\n        try:\n            compiled = torch.compile(fn, mode=\"default\", fullgraph=True)\n            compiled(x)\n            print(f\"{name}: Full graph compiled OK\")\n        except Exception as e:\n            print(f\"{name}: Graph break — {e}\")\n\nfix_graph_breaks()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "40-precision-formats",
      children: "4.0 Precision Formats"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "format-comparison",
      children: "Format Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Formats[Precision Formats]\n        FP32[FP32 — 32-bit<br/>8 exponent / 23 mantissa<br/>Range: ±3.4e38<br/>Precision: ~7 decimal digits]\n        FP16[FP16 — 16-bit<br/>5 exponent / 10 mantissa<br/>Range: ±65504<br/>Precision: ~3 decimal digits]\n        BF16[BF16 — 16-bit<br/>8 exponent / 7 mantissa<br/>Range: ±3.4e38<br/>Precision: ~2 decimal digits]\n        FP8_E4[FP8 E4M3 — 8-bit<br/>4 exponent / 3 mantissa<br/>Range: ±448<br/>Precision: ~1 decimal digit]\n        FP8_E5[FP8 E5M2 — 8-bit<br/>5 exponent / 2 mantissa<br/>Range: ±57344<br/>Precision: ~0.5 decimal digit]\n        INT8[INT8 — 8-bit integer<br/>Range: -128 to 127<br/>Uniform quantization]\n        INT4[INT4 — 4-bit integer<br/>Range: -8 to 7<br/>Group quantization]\n    end\n    FP32 --> FP16\n    FP32 --> BF16\n    FP16 --> FP8_E4\n    FP16 --> FP8_E5\n    FP8_E4 --> INT8\n    INT8 --> INT4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mixed-precision-training",
      children: "Mixed Precision Training"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MixedPrecisionDemo:\n    \"\"\"Demonstrate mixed precision training with torch.amp.\"\"\"\n\n    def __init__(self, model: nn.Module, dtype: torch.dtype = torch.float16):\n        self.model = model.cuda()\n        self.dtype = dtype\n        self.scaler = torch.amp.GradScaler(\"cuda\") if dtype == torch.float16 else None\n\n    def train_step(self, x: torch.Tensor, y: torch.Tensor, optimizer: torch.optim.Optimizer) -> float:\n        \"\"\"Single training step with mixed precision.\"\"\"\n        optimizer.zero_grad()\n\n        # Automatic mixed precision context\n        with torch.amp.autocast(\"cuda\", dtype=self.dtype):\n            output = self.model(x)\n            loss = nn.functional.cross_entropy(output, y)\n\n        if self.dtype == torch.float16:\n            # Scale loss to prevent underflow in gradients\n            self.scaler.scale(loss).backward()\n            self.scaler.step(optimizer)\n            self.scaler.update()\n        else:\n            loss.backward()\n            optimizer.step()\n\n        return loss.item()\n\n# Compare memory usage of different precision formats\ndef compare_precision_memory():\n    \"\"\"Measure memory footprint of a model in different formats.\"\"\"\n    import torch.cuda as cuda\n\n    model = TransformerBlock(d_model=1024, nhead=16).cuda()\n    input_tensor = torch.randn(8, 128, 1024).cuda()\n\n    formats = [\n        (torch.float32, \"FP32\"),\n        (torch.float16, \"FP16\"),\n        (torch.bfloat16, \"BF16\"),\n    ]\n\n    base_memory = cuda.memory_allocated()\n\n    for dtype, name in formats:\n        model_dtype = model.to(dtype)\n        inp = input_tensor.to(dtype)\n\n        # Force allocation\n        with torch.amp.autocast(\"cuda\", dtype=dtype):\n            out = model_dtype(inp)\n\n        current_memory = cuda.memory_allocated()\n        memory_mb = (current_memory - base_memory) / (1024 * 1024)\n        print(f\"{name:6s} | Memory: {memory_mb:.1f} MB | Params in {name}: {sum(p.numel() for p in model_dtype.parameters())}\")\n\n        del out\n        cuda.empty_cache()\n\ncompare_precision_memory()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fp8-e4m3--e5m2",
      children: "FP8 (E4M3 / E5M2)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class FP8FormatExplainer:\n    \"\"\"Explain FP8 formats used in Hopper GPUs.\"\"\"\n\n    @staticmethod\n    def simulate_fp8_quantize(tensor: torch.Tensor, format_type: str = \"e4m3\") -> torch.Tensor:\n        \"\"\"Simulate FP8 quantization effect (not actual hardware).\"\"\"\n        if format_type == \"e4m3\":\n            max_val = 448.0  # E4M3 max representable\n            min_val = 2**-9  # E4M3 min normal\n        elif format_type == \"e5m2\":\n            max_val = 57344.0  # E5M2 max representable\n            min_val = 2**-14  # E5M2 min normal\n        else:\n            raise ValueError(f\"Unknown FP8 format: {format_type}\")\n\n        # Clip and quantize\n        clipped = torch.clamp(tensor, -max_val, max_val)\n        # Simulate rounding to FP8 precision\n        scale = 256.0 if format_type == \"e4m3\" else 1024.0\n        quantized = torch.round(clipped * scale) / scale\n        return quantized\n\n    @staticmethod\n    def print_format_specs():\n        specs = {\n            \"E4M3\":  {\"exponent\": 4, \"mantissa\": 3, \"max\": 448.0, \"min_normal\": 2**-9},\n            \"E5M2\":  {\"exponent\": 5, \"mantissa\": 2, \"max\": 57344.0, \"min_normal\": 2**-14},\n            \"FP16\":  {\"exponent\": 5, \"mantissa\": 10, \"max\": 65504.0, \"min_normal\": 2**-14},\n            \"BF16\":  {\"exponent\": 8, \"mantissa\": 7, \"max\": 3.4e38, \"min_normal\": 2**-126},\n        }\n        for name, spec in specs.items():\n            print(f\"{name:6s} | exp={spec['exponent']} mant={spec['mantissa']:2d} | \"\n                  f\"max={spec['max']:10.2f} | min_normal={spec['min_normal']:.2e}\")\n\n    @staticmethod\n    def demonstrate_quantization_error():\n        \"\"\"Show how FP8 loses precision for small values.\"\"\"\n        values = torch.tensor([0.5, 0.1, 0.01, 0.001, 0.0001], dtype=torch.float32)\n        for fmt in [\"e4m3\", \"e5m2\"]:\n            quantized = FP8FormatExplainer.simulate_fp8_quantize(values, fmt)\n            error = torch.abs(values - quantized)\n            print(f\"\\n{fmt.upper()} quantization error:\")\n            for v, q, e in zip(values.tolist(), quantized.tolist(), error.tolist()):\n                rel_error = (e / abs(v)) * 100 if v != 0 else 0\n                print(f\"  {v:.6f} -> {q:.6f}  (error: {e:.6f}, {rel_error:.1f}%)\")\n\nFP8FormatExplainer.print_format_specs()\nFP8FormatExplainer.demonstrate_quantization_error()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "50-graph-optimization",
      children: "5.0 Graph Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Graph-level optimizations transform the computation graph to reduce memory, increase speed, or enable other optimizations."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "operator-fusion",
      children: "Operator Fusion"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Before[Before Fusion]\n        A1[Conv] --> A2[Bias] --> A3[ReLU] --> A4[Conv] --> A5[Bias] --> A6[ReLU]\n    end\n    subgraph After[After Fusion]\n        B1[Conv+Bias+ReLU] --> B2[Conv+Bias+ReLU]\n    end\n    A1 -.-> |3 kernel launches<br/>3 memory round-trips| B1\n    A4 -.-> |vs 1 kernel launch<br/>1 memory round-trip| B2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constant-folding",
      children: "Constant Folding"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def demonstrate_constant_folding():\n    \"\"\"Show how constant folding pre-computes static subgraphs.\"\"\"\n\n    import torch.fx as fx\n\n    class StaticSubgraphModel(nn.Module):\n        \"\"\"Model with a branch that depends only on constants.\"\"\"\n        def __init__(self):\n            super().__init__()\n            self.weight = nn.Parameter(torch.randn(64, 256))\n            self.bias = nn.Parameter(torch.zeros(64))\n\n        def forward(self, x: torch.Tensor) -> torch.Tensor:\n            # This subgraph is constant and can be folded\n            constant_part = torch.ones(256, 128) * 0.5  # always the same\n            folded = torch.mm(self.weight, constant_part)  # can be pre-computed\n            return torch.mm(x, folded.T) + self.bias\n\n    model = StaticSubgraphModel()\n    x = torch.randn(32, 256)\n\n    # Trace with FX\n    traced = fx.symbolic_trace(model)\n    print(f\"Number of nodes before folding: {len(traced.graph.nodes)}\")\n\n    # Apply constant folding\n    from torch.fx.passes.shape_prop import ShapeProp\n    from torch.fx.experimental.optimization import fuse\n\n    # In practice, constant folding is done by the compiler\n    print(\"Constant folding would pre-compute: weight @ ones(256,128) * 0.5\")\n    print(\"This removes 2-3 nodes from the runtime graph.\")\n\ndemonstrate_constant_folding()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dead-code-elimination-dce",
      children: "Dead Code Elimination (DCE)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def demonstrate_dce():\n    \"\"\"Show how dead code elimination removes unused operations.\"\"\"\n\n    import torch.fx as fx\n\n    class ModelWithDeadCode(nn.Module):\n        \"\"\"Model containing operations whose outputs are never used.\"\"\"\n        def __init__(self):\n            super().__init__()\n            self.linear = nn.Linear(64, 10)\n\n        def forward(self, x: torch.Tensor) -> torch.Tensor:\n            # Live path\n            out = self.linear(x)\n\n            # Dead code — output never used\n            dead1 = torch.mm(x, x.T)  # computed but discarded\n            dead2 = torch.sin(dead1)   # also discarded\n            dead3 = dead2.sum()        # also discarded\n\n            return out  # only this matters\n\n    model = ModelWithDeadCode()\n    traced = fx.symbolic_trace(model)\n\n    print(f\"Before DCE — {len(traced.graph.nodes)} nodes:\")\n    for node in traced.graph.nodes:\n        print(f\"  {node.op}: {node.name}\")\n\n    # Remove dead code\n    traced.graph.eliminate_dead_code()\n    traced.recompile()\n\n    print(f\"\\nAfter DCE — {len(traced.graph.nodes)} nodes:\")\n    for node in traced.graph.nodes:\n        print(f\"  {node.op}: {node.name}\")\n\ndemonstrate_dce()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "memory-planning",
      children: "Memory Planning"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def demonstrate_memory_planning():\n    \"\"\"Illustrate how TensorRT plans memory to minimize fragmentation.\"\"\"\n\n    # TensorRT's memory planning strategy\n    class MemoryPlanner:\n        \"\"\"Simulate TensorRT's memory planning (simplified).\"\"\"\n\n        def __init__(self, total_memory: int = 1024):\n            self.total = total_memory\n            self.blocks = {}  # name -> (offset, size)\n            self.free_list = [(0, total_memory)]\n\n        def allocate(self, name: str, size: int):\n            \"\"\"First-fit allocation.\"\"\"\n            for i, (offset, free_size) in enumerate(self.free_list):\n                if free_size >= size:\n                    self.blocks[name] = (offset, size)\n                    remaining = free_size - size\n                    if remaining > 0:\n                        self.free_list[i] = (offset + size, remaining)\n                    else:\n                        self.free_list.pop(i)\n                    print(f\"Allocated {name}: {size} units @ offset {offset}\")\n                    return\n            print(f\"FAILED: Cannot allocate {name} ({size} units)\")\n\n        def free(self, name: str):\n            \"\"\"Free allocated block.\"\"\"\n            if name in self.blocks:\n                offset, size = self.blocks.pop(name)\n                self.free_list.append((offset, size))\n                self.free_list.sort()  # Keep sorted for coalescing\n                # Coalesce adjacent free blocks\n                i = 0\n                while i < len(self.free_list) - 1:\n                    curr_end = self.free_list[i][0] + self.free_list[i][1]\n                    next_start = self.free_list[i + 1][0]\n                    if curr_end == next_start:\n                        merged = (self.free_list[i][0], self.free_list[i][1] + self.free_list[i + 1][1])\n                        self.free_list.pop(i + 1)\n                        self.free_list[i] = merged\n                    else:\n                        i += 1\n                print(f\"Freed {name} ({size} units)\")\n\n        def print_state(self):\n            print(f\"Free blocks: {self.free_list}\")\n            print(f\"Allocated: {list(self.blocks.keys())}\")\n\n    planner = MemoryPlanner(total_memory=1024)\n    planner.allocate(\"conv1_input\", 128)\n    planner.allocate(\"conv1_output\", 256)\n    planner.allocate(\"fc1_weights\", 512)\n    planner.allocate(\"fc1_output\", 64)\n    planner.print_state()\n\n    # Notice how TensorRT reuses memory when possible\n    planner.free(\"conv1_output\")\n    planner.allocate(\"conv2_output\", 256)  # Reuses conv1_output's spot\n    planner.print_state()\n\ndemonstrate_memory_planning()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "60-benchmarking",
      children: "6.0 Benchmarking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Systematic benchmarking is essential to validate that optimizations actually improve performance. Measure throughput, latency, and memory under realistic conditions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comprehensive-benchmark-suite",
      children: "Comprehensive Benchmark Suite"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\nimport torch\nimport numpy as np\nfrom dataclasses import dataclass, field\nfrom typing import Dict, List, Callable\n\n@dataclass\nclass BenchmarkResult:\n    model_name: str\n    precision: str\n    mean_latency_ms: float\n    p50_latency_ms: float\n    p95_latency_ms: float\n    p99_latency_ms: float\n    throughput_ips: float\n    memory_mb: float\n    speedup_vs_baseline: float = 1.0\n\nclass ModelBenchmark:\n    \"\"\"Benchmark different model configurations systematically.\"\"\"\n\n    def __init__(self, model_fn: Callable, input_fn: Callable, name: str = \"model\"):\n        self.model_fn = model_fn\n        self.input_fn = input_fn\n        self.name = name\n        self.results: List[BenchmarkResult] = []\n\n    def benchmark_config(self, precision: str, compile_mode: str = None) -> BenchmarkResult:\n        \"\"\"Benchmark a single configuration.\"\"\"\n        import torch.cuda as cuda\n\n        # Create model and inputs\n        model = self.model_fn().cuda()\n        inputs = self.input_fn()\n\n        # Apply precision\n        if precision in (\"fp16\", \"float16\"):\n            model = model.half()\n            inputs = [x.half() if isinstance(x, torch.Tensor) else x for x in inputs]\n        elif precision in (\"bf16\", \"bfloat16\"):\n            model = model.to(torch.bfloat16)\n            inputs = [x.to(torch.bfloat16) if isinstance(x, torch.Tensor) else x for x in inputs]\n\n        # Apply compilation\n        if compile_mode:\n            model = torch.compile(model, mode=compile_mode)\n\n        # Warmup\n        for _ in range(20):\n            with torch.no_grad():\n                model(*inputs)\n        cuda.synchronize()\n\n        # Measure memory\n        torch.cuda.reset_peak_memory_stats()\n        memory_before = cuda.memory_allocated()\n\n        # Timed runs\n        latencies = []\n        num_runs = 100\n        for _ in range(num_runs):\n            start = time.perf_counter()\n            with torch.no_grad():\n                model(*inputs)\n            cuda.synchronize()\n            latencies.append((time.perf_counter() - start) * 1000)\n\n        memory_after = cuda.memory_allocated()\n        memory_mb = (memory_after - memory_before) / (1024 * 1024)\n\n        latencies = np.array(latencies)\n        result = BenchmarkResult(\n            model_name=f\"{self.name}_{precision}\",\n            precision=precision,\n            mean_latency_ms=float(np.mean(latencies)),\n            p50_latency_ms=float(np.median(latencies)),\n            p95_latency_ms=float(np.percentile(latencies, 95)),\n            p99_latency_ms=float(np.percentile(latencies, 99)),\n            throughput_ips=1000.0 / float(np.mean(latencies)),\n            memory_mb=memory_mb,\n        )\n        self.results.append(result)\n        return result\n\n    def compare_all(self, configs: List[Dict]) -> None:\n        \"\"\"Run multiple configurations and compare.\"\"\"\n        baseline = None\n        for cfg in configs:\n            result = self.benchmark_config(**cfg)\n            if baseline is None:\n                baseline = result.mean_latency_ms\n            result.speedup_vs_baseline = baseline / result.mean_latency_ms\n            print(f\"\\n{result.model_name}:\")\n            print(f\"  Latency:    {result.mean_latency_ms:.3f} ms (p50: {result.p50_latency_ms:.3f}, \"\n                  f\"p95: {result.p95_latency_ms:.3f}, p99: {result.p99_latency_ms:.3f})\")\n            print(f\"  Throughput: {result.throughput_ips:.1f} ips\")\n            print(f\"  Memory:     {result.memory_mb:.1f} MB\")\n            print(f\"  Speedup:    {result.speedup_vs_baseline:.2f}x vs baseline\")\n\n# Run benchmark on a realistic model\ndef create_resnet_block():\n    \"\"\"Create a ResNet-style block for benchmarking.\"\"\"\n    class ResBlock(nn.Module):\n        def __init__(self, channels: int = 256):\n            super().__init__()\n            self.conv1 = nn.Conv2d(channels, channels, 3, padding=1)\n            self.bn1 = nn.BatchNorm2d(channels)\n            self.conv2 = nn.Conv2d(channels, channels, 3, padding=1)\n            self.bn2 = nn.BatchNorm2d(channels)\n            self.relu = nn.ReLU()\n\n        def forward(self, x):\n            identity = x\n            x = self.relu(self.bn1(self.conv1(x)))\n            x = self.bn2(self.conv2(x))\n            x = self.relu(x + identity)\n            return x\n    return ResBlock(256)\n\nbench = ModelBenchmark(\n    model_fn=create_resnet_block,\n    input_fn=lambda: [torch.randn(16, 256, 32, 32)],\n    name=\"ResBlock\",\n)\n\nconfigs = [\n    {\"precision\": \"fp32\", \"compile_mode\": None},\n    {\"precision\": \"fp16\", \"compile_mode\": None},\n    {\"precision\": \"bf16\", \"compile_mode\": None},\n    {\"precision\": \"fp32\", \"compile_mode\": \"default\"},\n    {\"precision\": \"fp16\", \"compile_mode\": \"default\"},\n    {\"precision\": \"fp16\", \"compile_mode\": \"max-autotune\"},\n]\nbench.compare_all(configs)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "visualizing-benchmark-results",
      children: "Visualizing Benchmark Results"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def plot_benchmark_results(results: List[BenchmarkResult]):\n    \"\"\"Create ASCII chart of benchmark results for quick analysis.\"\"\"\n    print(\"\\n\" + \"=\" * 80)\n    print(f\"{'Configuration':40s} {'Latency(ms)':>12s} {'Throughput':>12s} {'Speedup':>8s}\")\n    print(\"=\" * 80)\n\n    for r in sorted(results, key=lambda x: x.speedup_vs_baseline, reverse=True):\n        bar = \"█\" * int(r.speedup_vs_baseline * 10)\n        print(f\"{r.model_name:40s} {r.mean_latency_ms:>10.2f}ms  {r.throughput_ips:>10.1f}  \"\n              f\"{r.speedup_vs_baseline:>5.2f}x {bar}\")\n\n    print(\"=\" * 80)\n    print(f\"Memory range: {min(r.memory_mb for r in results):.1f} MB — \"\n          f\"{max(r.memory_mb for r in results):.1f} MB\")\n    print(f\"Best latency:  {min(r.mean_latency_ms for r in results):.2f} ms \"\n          f\"({min(r.p99_latency_ms for r in results):.2f} ms p99)\")\n    print(f\"Best throughput: {max(r.throughput_ips for r in results):.1f} ips\")\n\n# plot_benchmark_results(bench.results)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-is-onnx-and-why-was-it-created",
      children: "Q1: What is ONNX and why was it created?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": ONNX (Open Neural Network Exchange) is an open-source graph format for model interchange. It was created to solve framework lock-in — allowing models trained in PyTorch to run in TensorRT, CoreML, or other runtimes without rewriting. It defines standard operators, data types, and a protobuf-serialized graph."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-explain-the-role-of-opset-versions-in-onnx-export",
      children: "Q2: Explain the role of opset versions in ONNX export."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Each opset version defines the set of supported operators and their semantics. Exporting with a higher opset gives access to newer operators (e.g., GroupNorm in opset 18) but may not be supported by older runtimes. Lower opsets ensure broader compatibility. The optimal opset is the highest one your target runtime supports."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-how-does-tensorrt-achieve-5-10x-speedup-over-naive-pytorch-inference",
      children: "Q3: How does TensorRT achieve 5-10x speedup over naive PyTorch inference?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": TensorRT applies: (1) layer fusion — combining Conv+Bias+ReLU into single kernels, reducing memory traffic; (2) kernel auto-tuning — selecting the best CUDA kernel for each layer given the hardware and tensor shapes; (3) precision calibration — using FP16/INT8 when accuracy permits; (4) memory planning — reusing buffers to minimize allocation overhead."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-what-is-the-difference-between-torchcompile-and-tensorrt",
      children: "Q4: What is the difference between torch.compile and TensorRT?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": torch.compile is a JIT compiler for PyTorch that traces Python code and generates Triton/CUDA kernels. It works directly with PyTorch modules, is easier to use, and is training-aware (AOTAutograd traces backward). TensorRT is a dedicated inference optimizer that works from ONNX or TF, applies deeper graph optimizations, and targets NVIDIA GPUs specifically. TensorRT generally produces faster inference engines; torch.compile is better for rapid iteration and training acceleration."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-causes-graph-breaks-in-torchcompile-and-how-do-you-fix-them",
      children: "Q5: What causes graph breaks in torch.compile and how do you fix them?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Graph breaks occur when TorchDynamo encounters Python code it cannot trace: control flow (if/for), in-place mutations of inputs, list operations, dynamic data structures, or calls to unsupported libraries. Fixes include: replacing if with torch.where, avoiding in-place ops on inputs, using torch.stack instead of Python lists, and structuring models to minimize Python-level branching."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-compare-fp16-bf16-and-fp8-for-inference-when-would-you-use-each",
      children: "Q6: Compare FP16, BF16, and FP8 for inference. When would you use each?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": FP16 (5 exponent, 10 mantissa) offers good precision with 2x memory reduction vs FP32. BF16 (8 exponent, 7 mantissa) maintains FP32's dynamic range, making it safer for training. FP8 E4M3 (weights, range ±448) and E5M2 (gradients, range ±57344) are used on Hopper GPUs for 4x memory reduction. Use FP16/BF16 for general inference, INT8 for latency-critical apps, and FP8 on H100 when INT8 accuracy is insufficient."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-explain-the-process-of-int8-calibration-in-tensorrt",
      children: "Q7: Explain the process of INT8 calibration in TensorRT."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": INT8 calibration determines scaling factors (S) for each tensor to map FP32 values to INT8 range [-128, 127]. The calibrator runs a representative dataset through the model, collects activation histograms, and chooses S to minimize KL divergence between the original FP32 distribution and the quantized distribution. TensorRT supports calibration strategies: Entropy (default), MinMax, Percentile, and Entropy 2."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-how-do-you-benchmark-a-model-optimization-correctly",
      children: "Q8: How do you benchmark a model optimization correctly?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": (1) Warmup — run 10-20 inferences to eliminate CUDA initialization overhead. (2) Synchronize — call torch.cuda.synchronize() before timing. (3) Measure latency — time 100+ runs, report p50/p95/p99, not just mean. (4) Measure throughput — batch multiple requests or stream inferences. (5) Control variables — same GPU, same power state, same input size. (6) Report memory — use torch.cuda.max_memory_allocated(). (7) Validate accuracy — optimized output must match baseline within tolerance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-what-is-operator-fusion-and-why-does-it-matter",
      children: "Q9: What is operator fusion and why does it matter?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Operator fusion combines adjacent operations (e.g., Conv + ReLU, LayerNorm + MatMul) into a single CUDA kernel. This eliminates intermediate memory reads/writes, reduces kernel launch overhead, and improves cache locality. A typical CNN goes from 50+ kernels to under 20 fused kernels. Fusion is the single most impactful optimization in TensorRT and torch.compile's Inductor backend."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-design-an-optimization-pipeline-for-deploying-a-7b-parameter-llm-to-production",
      children: "Q10: Design an optimization pipeline for deploying a 7B-parameter LLM to production."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Step 1: Export to ONNX with opset 18 (dynamic batch, sequence length). Step 2: Convert to TensorRT with FP16 precision (or INT8 for lower latency). Step 3: Enable Flash Attention fusion in TensorRT for transformer blocks. Step 4: Build with dynamic shapes (batch=1-32, seq=1-4096). Step 5: Benchmark latency (p50/p99) and memory. Step 6: If latency > target, apply KV cache quantization (FP8) and INT4 weight-only quantization. Step 7: Deploy with Triton Inference Server for multi-model serving and dynamic batching."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Model compilation is the bridge between training flexibility and deployment efficiency. ONNX provides framework-agnostic model interchange. TensorRT produces hardware-specific engines with fused kernels and optimized precision. torch.compile brings JIT compilation to PyTorch with minimal code changes. Precision formats (FP16, BF16, INT8, FP8) offer different trade-offs between speed, memory, and accuracy. Graph optimizations like fusion, constant folding, and dead code elimination are applied automatically by compilers. Always benchmark with realistic inputs, warmup runs, and latency percentiles to validate that an optimization actually helps."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start with ONNX export for any model that needs cross-runtime deployment — it decouples training from inference infrastructure."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use TensorRT for production GPU inference; the INT8 + FP16 combination typically gives the best latency/accuracy trade-off."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply torch.compile as a first step for PyTorch optimization — it often gives 2-3x speedup with zero code changes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profile before optimizing. Use PyTorch profiler or NVIDIA Nsight to identify the actual bottlenecks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate numerical accuracy after every optimization. A 5x faster model is useless if predictions change."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz-5-mcq",
      children: "Chapter Quiz (5 MCQ)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "questions",
      children: "Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which component of torch.compile is responsible for generating Triton kernels?\na) TorchDynamo\nb) AOTAutograd\nc) Inductor\nd) TorchScript"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the primary benefit of operator fusion in model compilation?\na) Reduces model file size on disk\nb) Eliminates intermediate memory reads/writes by combining kernels\nc) Increases numerical precision of computations\nd) Enables dynamic shape support"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In TensorRT INT8 quantization, what is the purpose of calibration?\na) To train the model for 8-bit accuracy\nb) To determine scaling factors for activations using representative data\nc) To convert all weights from FP32 to INT8 format\nd) To test the model on a validation dataset"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which precision format has the same exponent range as FP32 but reduced mantissa?\na) FP16\nb) BF16\nc) FP8 E4M3\nd) INT8"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What happens when torch.compile encounters a graph break?\na) The compilation fails with an error\nb) The model falls back to eager mode for the untraceable portion\nc) The model is automatically converted to TensorRT\nd) The broken graph is skipped entirely"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "answers",
      children: "Answers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "c"
        }), " — Inductor is the backend that generates optimized Triton and CUDA kernels from the traced graph."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "b"
        }), " — Operator fusion combines multiple ops into a single kernel, avoiding intermediate memory round-trips and reducing kernel launch overhead."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "b"
        }), " — Calibration runs representative data through the model to determine per-tensor scaling factors that minimize accuracy loss from INT8 quantization."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "b"
        }), " — BF16 has 8 exponent bits (same as FP32) giving it the same dynamic range, but only 7 mantissa bits (FP32 has 23)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "b"
        }), " — TorchDynamo splits the graph at the break point; the untraceable portion runs in eager Python, with compiled subgraphs on either side."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-export-and-compare-onnx-vs-pytorch-speed",
      children: "Exercise 1: Export and Compare ONNX vs PyTorch Speed"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Take a pre-trained ResNet-18 from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "torchvision.models"
      }), ". Export it to ONNX with opset 18. Measure inference latency of the original PyTorch model vs ONNX Runtime (CPU provider). Report speedup."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-build-tensorrt-engine-with-different-precisions",
      children: "Exercise 2: Build TensorRT Engine with Different Precisions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Using the ONNX model from Exercise 1, build TensorRT engines in FP32, FP16, and INT8 precision. Benchmark each and report latency, throughput, and memory. Check that output accuracy (cosine similarity) stays above 0.99 for all precisions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-identify-and-fix-graph-breaks",
      children: "Exercise 3: Identify and Fix Graph Breaks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a PyTorch module that intentionally causes at least 3 graph breaks (control flow, in-place mutation, list iteration). Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "torch.compile"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fullgraph=True"
      }), " to detect them. Fix each break and verify the module compiles to a single graph."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-implement-a-custom-benchmark",
      children: "Exercise 4: Implement a Custom Benchmark"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create a benchmark script that tests a model at batch sizes [1, 4, 16, 32] and sequence lengths [128, 256, 512]. Report a heatmap-style table showing latency for each (batch, seq_len) combination. Identify the operating region where latency is optimal."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-quantization-error-analysis",
      children: "Exercise 5: Quantization Error Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Take a small model (e.g., a 3-layer MLP). Quantize its weights to INT8 using PyTorch's quantization API and simulate INT4 with group-size 32. Compute the mean squared error between the original FP32 model output and the quantized outputs for 1000 random inputs. Plot the error distribution."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ONNX"
        }), ": protobuf graph format, opset versions (11-20), export with dynamic_axes for flexible batch/sequence"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TensorRT"
        }), ": parser → builder → engine; FP16/INT8 flags; calibration for INT8; kernel auto-tuning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "torch.compile"
        }), ": TorchDynamo (graph capture) → AOTAutograd (backward trace) → Inductor (kernel gen)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Graph breaks"
        }), ": Python control flow, in-place ops, list iteration; fix with torch.where, avoid in-place"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Precision"
        }), ": FP32 (baseline), FP16 (2x mem, ~same perf), BF16 (same range as FP32), INT8 (4x mem, calibration needed), FP8 (Hopper, E4M3/E5M2)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Graph optimizations"
        }), ": operator fusion (critical), constant folding (static subgraphs), DCE (remove dead ops), memory planning (buffer reuse)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Benchmarking"
        }), ": warmup >10 runs, synchronize, 100+ timed runs, report p50/p95/p99, measure memory, validate accuracy"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-takeaways",
      children: "Key Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Model compilation"
        }), " transforms a trained graph into hardware-specific optimized engines, yielding 2-10x speedups through fusion, precision reduction, and kernel auto-tuning."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ONNX"
        }), " serves as the universal interchange format — learn to export PyTorch and TensorFlow models with appropriate opset versions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TensorRT"
        }), " is the gold standard for NVIDIA GPU inference with INT8/FP16/FP8 quantization and deep graph optimization."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "torch.compile"
        }), " (TorchDynamo + Inductor) provides easy access to JIT compilation in PyTorch; understand graph breaks to maximize its effectiveness."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Systematic benchmarking"
        }), " with warmup, synchronization, and percentile reporting is essential — never deploy an optimization without measuring its actual impact."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa-additional",
      children: "Interview Q&A (Additional)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-how-do-you-handle-dynamic-shapes-in-tensorrt",
      children: "Q1: How do you handle dynamic shapes in TensorRT?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Use optimization profiles — specify min, opt, and max dimensions for each dynamic input. TensorRT builds engines with multiple kernel variants optimized for common (opt) shapes. At runtime, shapes within the min-max range use the closest optimized kernel."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-what-is-the-trade-off-between-kernel-auto-tuning-time-and-inference-speed",
      children: "Q2: What is the trade-off between kernel auto-tuning time and inference speed?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": TensorRT auto-tuning tries hundreds of kernel configurations for each layer. More tuning finds faster kernels but increases build time. For production, use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "max-autotune"
      }), " mode during building. For development, use default. Build caching (reusing pre-built engines) mitigates this."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-how-does-mixed-precision-training-work-with-torchamp",
      children: "Q3: How does mixed precision training work with torch.amp?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "torch.amp.autocast"
      }), " automatically casts ops to FP16/BF16 where safe. The GradScaler multiplies the loss by a scale factor to prevent gradient underflow in FP16, then unscales before the optimizer step. This enables FP16 training without accuracy loss."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-compare-tensorrt-with-apache-tvm",
      children: "Q4: Compare TensorRT with Apache TVM."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": TensorRT is NVIDIA-specific, deep fusion, and easier to use. TVM is hardware-agnostic (supports CPU, GPU, NPU), offers more flexible optimization, but has a steeper learning curve. TensorRT typically outperforms TVM on NVIDIA GPUs; TVM wins on edge devices or non-NVIDIA hardware."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-is-the-role-of-aotautograd-in-torchcompile",
      children: "Q5: What is the role of AOTAutograd in torch.compile?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": AOTAutograd traces the backward graph ahead of time (before runtime). This allows Inductor to generate fused forward+backward kernels, which is essential for training acceleration. Without AOTAutograd, only the forward pass would be optimized."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises-advanced",
      children: "Exercises (Advanced)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-6-full-pipeline",
      children: "Exercise 6: Full Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build a complete optimization pipeline: PyTorch model → ONNX export → TensorRT engine build (INT8) → deploy with ONNX Runtime → benchmark. Write a script that does all steps and produces a report. Test with at least two different model architectures."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-7-graph-break-detection-tool",
      children: "Exercise 7: Graph Break Detection Tool"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a utility that takes any PyTorch module and torch.compile's it with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fullgraph=True"
      }), ". Catch the exception and print exactly which line of code caused the graph break, along with a suggested fix."]
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
            children: "Explain the core idea of 03 — Model Compilation & Optimization in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates 03 — Model Compilation & Optimization."
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
            children: "Describe a production bug caused by misunderstanding 03 — Model Compilation & Optimization. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on 03 — Model Compilation & Optimization from 10 users to 10 million?"
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
            children: "Compare 03 — Model Compilation & Optimization with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on 03 — Model Compilation & Optimization."
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
            children: "How does 03 — Model Compilation & Optimization behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of 03 — Model Compilation & Optimization run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of 03 — Model Compilation & Optimization that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name 03 — Model Compilation & Optimization explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using 03 — Model Compilation & Optimization\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies 03 — Model Compilation & Optimization to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside 03 — Model Compilation & Optimization (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of 03 — Model Compilation & Optimization and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a 03 — Model Compilation & Optimization-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic 03 — Model Compilation & Optimization interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply 03 — Model Compilation & Optimization in production today?"
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
        }), " 03 — Model Compilation & Optimization builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for 03 — Model Compilation & Optimization before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for 03 — Model Compilation & Optimization is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for 03 — Model Compilation & Optimization in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the 03 — Model Compilation & Optimization chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers 03 — Model Compilation & Optimization is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 03 — Model Compilation & Optimization is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 03 — Model Compilation & Optimization is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug 03 — Model Compilation & Optimization issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to 03 — Model Compilation & Optimization in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving 03 — Model Compilation & Optimization that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of 03 — Model Compilation & Optimization is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain 03 — Model Compilation & Optimization in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for 03 — Model Compilation & Optimization and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of 03 — Model Compilation & Optimization on an empty input?"
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
            children: "Complete Medium exercises, explain 03 — Model Compilation & Optimization to someone else"
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
        children: "Always write a one-line example of 03 — Model Compilation & Optimization from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered 03 — Model Compilation & Optimization when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining 03 — Model Compilation & Optimization twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own 03 — Model Compilation & Optimization snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of 03 — Model Compilation & Optimization listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link 03 — Model Compilation & Optimization to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of 03 — Model Compilation & Optimization by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain 03 — Model Compilation & Optimization to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of 03 — Model Compilation & Optimization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on 03 — Model Compilation & Optimization (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real 03 — Model Compilation & Optimization problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements 03 — Model Compilation & Optimization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for 03 — Model Compilation & Optimization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on 03 — Model Compilation & Optimization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how 03 — Model Compilation & Optimization fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how 03 — Model Compilation & Optimization is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where 03 — Model Compilation & Optimization is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 03 — Model Compilation & Optimization, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 03 — Model Compilation & Optimization asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "03 — Model Compilation & Optimization is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with 03 — Model Compilation & Optimization."
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
        children: "03 — Model Compilation & Optimization emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for 03 — Model Compilation & Optimization today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about 03 — Model Compilation & Optimization — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around 03 — Model Compilation & Optimization changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing 03 — Model Compilation & Optimization."
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
        children: "03 — Model Compilation & Optimization appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding 03 — Model Compilation & Optimization helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the 03 — Model Compilation & Optimization concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, 03 — Model Compilation & Optimization skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply 03 — Model Compilation & Optimization to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "03 — Model Compilation & Optimization is like a recipe"
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
        }), " — this chapter contributes the 03 — Model Compilation & Optimization skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "27aiinfrastructure-03modelcompilation-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of 03 — Model Compilation & Optimization in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "27aiinfrastructure-03modelcompilation-flash2",
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
      "data-qid": "27aiinfrastructure-03modelcompilation-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard 03 — Model Compilation & Optimization approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "27aiinfrastructure-03modelcompilation-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is 03 — Model Compilation & Optimization NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "27aiinfrastructure-03modelcompilation-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is 03 — Model Compilation & Optimization applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for 03 — Model Compilation & Optimization (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing 03 — Model Compilation & Optimization (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for 03 — Model Compilation & Optimization-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running 03 — Model Compilation & Optimization in production at scale"
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
        children: "Testing: pytest for unit tests of 03 — Model Compilation & Optimization code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on 03 — Model Compilation & Optimization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in 03 — Model Compilation & Optimization code."]
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
        }), " or your IDE's debugger to step through the 03 — Model Compilation & Optimization example code."]
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
        children: "Explain 03 — Model Compilation & Optimization in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of 03 — Model Compilation & Optimization."
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
        children: "Tell me about a time you debugged a 03 — Model Compilation & Optimization problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where 03 — Model Compilation & Optimization is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for 03 — Model Compilation & Optimization."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core 03 — Model Compilation & Optimization logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ONNX specification: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://onnx.ai/",
          children: "https://onnx.ai/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["TensorRT documentation: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.nvidia.com/deeplearning/tensorrt/",
          children: "https://docs.nvidia.com/deeplearning/tensorrt/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["PyTorch 2.0 torch.compile: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://pytorch.org/docs/stable/generated/torch.compile.html",
          children: "https://pytorch.org/docs/stable/generated/torch.compile.html"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["NVIDIA FP8 whitepaper: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.nvidia.com/blog/nvidia-hopper-architecture-in-depth/",
          children: "https://developer.nvidia.com/blog/nvidia-hopper-architecture-in-depth/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ONNX Runtime: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://onnxruntime.ai/",
          children: "https://onnxruntime.ai/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["torch._dynamo docs: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://pytorch.org/docs/stable/torch.compiler.html",
          children: "https://pytorch.org/docs/stable/torch.compiler.html"
        })]
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
            children: "Explain 03 — Model Compilation & Optimization without notes"
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
        }), ": a small team uses 03 — Model Compilation & Optimization daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": 03 — Model Compilation & Optimization patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": 03 — Model Compilation & Optimization principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": 03 — Model Compilation & Optimization shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect 03 — Model Compilation & Optimization to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/27-ai-infrastructure/04-inference-serving",
        children: "AI Inference Serving"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "03 — Model Compilation & Optimization, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of 03 — Model Compilation & Optimization depends on input size and distribution — always benchmark for your own data."
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