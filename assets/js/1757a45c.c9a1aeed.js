"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[26296],{

/***/ 99933
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_31_mobile_ai_01_onnx_runtime_mobile_md_175_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-31-mobile-ai-01-onnx-runtime-mobile-md-175.json
const site_docs_courses_ai_engineering_placement_31_mobile_ai_01_onnx_runtime_mobile_md_175_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/mobile-ai/01-onnx-runtime-mobile","title":"ONNX Runtime for Mobile","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/31-mobile-ai/01-onnx-runtime-mobile.md","sourceDirName":"courses/ai-engineering-placement/31-mobile-ai","slug":"/ai-engineering-placement/31-mobile-ai/01-onnx-runtime-mobile","permalink":"/ai-engineering-journey/ai-engineering-placement/31-mobile-ai/01-onnx-runtime-mobile","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":320,"frontMatter":{"id":"01-onnx-runtime-mobile","slug":"/ai-engineering-placement/31-mobile-ai/01-onnx-runtime-mobile","title":"ONNX Runtime for Mobile","sidebar_label":"ONNX Runtime for Mobile","sidebar_position":320},"sidebar":"placementSidebar","previous":{"title":"31 — Mobile AI & Edge Deployment","permalink":"/ai-engineering-journey/ai-engineering-placement/31-mobile-ai"},"next":{"title":"02 — TensorFlow Lite & CoreML","permalink":"/ai-engineering-journey/ai-engineering-placement/31-mobile-ai/02-tflite-coreml"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/31-mobile-ai/01-onnx-runtime-mobile.md


const frontMatter = {
	id: '01-onnx-runtime-mobile',
	slug: '/ai-engineering-placement/31-mobile-ai/01-onnx-runtime-mobile',
	title: 'ONNX Runtime for Mobile',
	sidebar_label: 'ONNX Runtime for Mobile',
	sidebar_position: 320
};
const contentTitle = 'ONNX Runtime for Mobile';

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
  "value": "1.1 ONNX Format &amp; Model Serialization",
  "id": "11-onnx-format--model-serialization",
  "level": 3
}, {
  "value": "1.2 Opset Versions &amp; Operator Support",
  "id": "12-opset-versions--operator-support",
  "level": 3
}, {
  "value": "1.3 Model Export — PyTorch to ONNX",
  "id": "13-model-export--pytorch-to-onnx",
  "level": 3
}, {
  "value": "1.4 Model Export — TensorFlow to ONNX",
  "id": "14-model-export--tensorflow-to-onnx",
  "level": 3
}, {
  "value": "1.5 Model Validation",
  "id": "15-model-validation",
  "level": 3
}, {
  "value": "1.6 Mobile Optimizations",
  "id": "16-mobile-optimizations",
  "level": 3
}, {
  "value": "1.6.1 Quantization (INT8, UINT8)",
  "id": "161-quantization-int8-uint8",
  "level": 4
}, {
  "value": "1.6.2 Graph Optimizations",
  "id": "162-graph-optimizations",
  "level": 4
}, {
  "value": "1.6.3 Operator Fusion",
  "id": "163-operator-fusion",
  "level": 4
}, {
  "value": "1.7 NPU Acceleration",
  "id": "17-npu-acceleration",
  "level": 3
}, {
  "value": "1.7.1 Android NNAPI",
  "id": "171-android-nnapi",
  "level": 4
}, {
  "value": "1.7.2 Apple Neural Engine",
  "id": "172-apple-neural-engine",
  "level": 4
}, {
  "value": "1.7.3 Qualcomm SNPE",
  "id": "173-qualcomm-snpe",
  "level": 4
}, {
  "value": "1.8 ONNX Runtime Mobile",
  "id": "18-onnx-runtime-mobile",
  "level": 3
}, {
  "value": "1.8.1 Cross-Platform C++ API",
  "id": "181-cross-platform-c-api",
  "level": 4
}, {
  "value": "1.8.2 Java/Kotlin API for Android",
  "id": "182-javakotlin-api-for-android",
  "level": 4
}, {
  "value": "1.8.3 Performance Benchmarks",
  "id": "183-performance-benchmarks",
  "level": 4
}, {
  "value": "1.8.4 Memory Optimization",
  "id": "184-memory-optimization",
  "level": 4
}, {
  "value": "Complete Mobile Deployment Pipeline",
  "id": "complete-mobile-deployment-pipeline",
  "level": 2
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "Question 1 (General)",
  "id": "question-1-general",
  "level": 3
}, {
  "value": "Question 2 (PyTorch Export)",
  "id": "question-2-pytorch-export",
  "level": 3
}, {
  "value": "Question 3 (Quantization)",
  "id": "question-3-quantization",
  "level": 3
}, {
  "value": "Question 4 (NNAPI)",
  "id": "question-4-nnapi",
  "level": 3
}, {
  "value": "Question 5 (Apple Neural Engine)",
  "id": "question-5-apple-neural-engine",
  "level": 3
}, {
  "value": "Question 6 (Op Fusion)",
  "id": "question-6-op-fusion",
  "level": 3
}, {
  "value": "Question 7 (Model Size)",
  "id": "question-7-model-size",
  "level": 3
}, {
  "value": "Question 8 (Cross-Platform)",
  "id": "question-8-cross-platform",
  "level": 3
}, {
  "value": "Question 9 (Op Coverage)",
  "id": "question-9-op-coverage",
  "level": 3
}, {
  "value": "Question 10 (Performance)",
  "id": "question-10-performance",
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
        id: "onnx-runtime-for-mobile",
        children: "ONNX Runtime for Mobile"
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
            children: "Explain the ONNX format: model serialization, opset versions, operator coverage, validation pipeline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Export trained models from PyTorch and TensorFlow to ONNX with dynamic axes and correct I/O specs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply mobile optimizations including INT8/UINT8 quantization, graph optimizations, and operator fusion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Describe NPU acceleration on Qualcomm SNPE, Apple Neural Engine, and Android NNAPI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy ONNX Runtime Mobile for cross-platform inference with benchmarks and memory profiling"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "ONNX Format & Serialization"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Protobuf model representation, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ModelProto"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "GraphProto"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "NodeProto"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Opset Versions & Operator Support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Version evolution, IR version, operator domain, custom ops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model Export — PyTorch"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "torch.onnx.export"
            }), ", dynamic axes, I/O specs"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model Export — TensorFlow"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tf2onnx.convert"
            }), ", frozen graph, TF ops mapping"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model Validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ONNX checker, shape inference, onnxruntime validation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile Optimizations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INT8/UINT8 quantization, QAT, graph optimizations, operator fusion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NPU Acceleration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SNPE, Apple Neural Engine, NNAPI, delegate pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ONNX Runtime Mobile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-platform C++ API, benchmarks, memory optimization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Build[\"Model Development\"]\n        A[PyTorch Model] --> B[torch.onnx.export]\n        C[TensorFlow Model] --> D[tf2onnx.convert]\n    end\n    B --> E[ONNX Model<br/>ModelProto]\n    D --> E\n    E --> F[Validation<br/>onnx.checker]\n    F --> G[Optimization<br/>onnxoptimizer]\n    G --> H[Quantization<br/>INT8 / UINT8]\n    H --> I[Operator Fusion]\n    I --> J[NPU Delegate<br/>SNPE / ANE / NNAPI]\n    J --> K[ONNX Runtime Mobile<br/>Cross-Platform Inference]\n    K --> L[Mobile App<br/>Android / iOS / Windows]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph ONNX_Structure[\"ONNX Model Structure\"]\n        M[ModelProto] --> MP[ModelProto.<br/>ir_version]\n        M --> O[ModelProto.<br/>opset_import]\n        M --> GP[GraphProto]\n        GP --> N[NodeProto<br/>Operator Nodes]\n        GP --> I[ValueInfoProto<br/>Input Tensors]\n        GP --> OV[ValueInfoProto<br/>Output Tensors]\n        GP --> T[TensorProto<br/>Initializers / Weights]\n    end\n    N --> Attr[AttributeProto<br/>Attributes]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ONNX (Open Neural Network Exchange) is an open standard for representing machine learning models. It enables interoperability between frameworks (PyTorch, TensorFlow, JAX) and runtimes (ONNX Runtime, TensorRT, CoreML). ONNX Runtime Mobile extends this to smartphones, tablets, and edge devices with limited memory, battery, and compute."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Mobile AI deployment faces three constraints: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "model size"
      }), " (storage), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "inference latency"
      }), " (real-time UX), and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "power consumption"
      }), " (battery life). ONNX Runtime Mobile addresses these through quantization, graph optimizations, operator fusion, and NPU delegation. An AI engineer must master the full pipeline — from export to mobile deployment — to ship on-device AI features."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covers the ONNX format structure, model export from PyTorch and TensorFlow, mobile-specific optimizations, NPU acceleration, and the ONNX Runtime Mobile cross-platform SDK. By the end, you will be able to convert any model to ONNX, optimize it for mobile, and deploy it with NPU acceleration."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Module 09 (Deep Learning with PyTorch) — model definition, training loop, inference"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Module 27 (AI Infrastructure) — model quantization, graph compilation concepts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python 3.8+ with PyTorch 2.x, TensorFlow 2.x, onnx, onnxruntime"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic mobile development concepts: Android NDK, iOS frameworks, AOT compilation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with protobuf serialization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Open Neural Network Exchange — an open format for representing ML models as a protobuf graph"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ModelProto"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Top-level ONNX protobuf message containing ir_version, opset_import, and GraphProto"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GraphProto"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protobuf message containing nodes (ops), initializers (weights), inputs, and outputs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NodeProto"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A single operator node in the ONNX graph with name, op_type, inputs, outputs, and attributes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Opset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A numbered version of operator definitions; opset 21 (Dec 2024) is the latest stable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IR Version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ONNX intermediate representation version, currently IR v9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic Axes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input dimensions that vary at runtime (batch size, sequence length)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quantization-Aware Training — simulate quantization during training for higher accuracy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Operator Fusion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combining multiple ops into one kernel to reduce memory traffic and launch overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delegate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A hardware-specific backend that accelerates certain ops on NPU/GPU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NNAPI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Android Neural Networks API — Android's hardware acceleration layer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ANE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apple Neural Engine — Apple's on-chip NPU in A12+ and M1+ SoCs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SNPE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Qualcomm Snapdragon Neural Processing Engine — NPU SDK for Snapdragon SoCs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XNNPACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A library of high-efficiency floating-point neural network operators for ARM/AVX2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-onnx-format--model-serialization",
      children: "1.1 ONNX Format & Model Serialization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ONNX uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Protocol Buffers"
      }), " (protobuf) as its serialization format. A trained model is serialized into a ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".onnx"
      }), " file — a binary protobuf that contains the model architecture, trained weights, and metadata. The protobuf schema is defined in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onnx/onnx.proto"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Core Protobuf Messages:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "classDiagram\n    class ModelProto {\n        int64 ir_version\n        repeated OperatorSetIdProto opset_import\n        string producer_name\n        string producer_version\n        string domain\n        int64 model_version\n        string doc_string\n        GraphProto graph\n        repeated StringStringEntryProto metadata_props\n    }\n    class GraphProto {\n        repeated NodeProto node\n        string name\n        repeated ValueInfoProto input\n        repeated ValueInfoProto output\n        repeated TensorProto initializer\n        repeated ValueInfoProto value_info\n        string doc_string\n        repeated TensorProto sparse_initializer\n    }\n    class NodeProto {\n        repeated string input\n        repeated string output\n        string name\n        string op_type\n        string domain\n        repeated AttributeProto attribute\n    }\n    class TensorProto {\n        repeated int64 dims\n        int32 data_type\n        bytes raw_data\n        repeated int64 int64_data\n        repeated float float_data\n        string name\n        string doc_string\n    }\n    class ValueInfoProto {\n        string name\n        TypeProto type\n        string doc_string\n    }\n    ModelProto -- GraphProto : contains\n    GraphProto -- NodeProto : contains\n    GraphProto -- TensorProto : initializers\n    GraphProto -- ValueInfoProto : input/output\n    NodeProto -- AttributeProto : has\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ModelProto Fields:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ir_version"
        }), ": The ONNX IR version (latest v9). Determines which features the model uses."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "opset_import"
        }), ": List of operator domains and their versions. Standard domain is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai.onnx"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "graph"
        }), ": The computation graph — nodes, edges, initializers, inputs, outputs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "producer_name"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "producer_version"
        }), ": Tracks which framework exported the model."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "GraphProto Structure:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The graph is a directed acyclic graph (DAG) of operator nodes. Each ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NodeProto"
      }), " has:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "input[]"
        }), ": Names of tensors consumed by this op (reference edges)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "output[]"
        }), ": Names of tensors produced by this op"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "op_type"
        }), ": The operator name (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Conv"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Gemm"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Relu"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "domain"
        }), ": Operator domain — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai.onnx"
        }), " for standard ops, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai.onnx.preview.training"
        }), " for training ops"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "attribute[]"
        }), ": Key-value pairs for op parameters (kernel_shape, strides, pads, groups)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Initializers (weights) are stored in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TensorProto"
      }), " messages. They contain the raw weight data, data type, and shape. Large weights use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "raw_data"
      }), " (byte array) for efficient serialization."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Serialization Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import onnx\nfrom onnx import helper, TensorProto\n\n# Create a simple graph: Y = W * X + B (Gemm op)\n# Input shape: [batch, 4], Output shape: [batch, 3]\nX = helper.make_tensor_value_info(\"X\", TensorProto.FLOAT, [\"batch\", 4])\nW = helper.make_tensor_value_info(\"W\", TensorProto.FLOAT, [3, 4])\nB = helper.make_tensor_value_info(\"B\", TensorProto.FLOAT, [3])\nY = helper.make_tensor_value_info(\"Y\", TensorProto.FLOAT, [\"batch\", 3])\n\n# Create Gemm node (Y = alpha * W * X + beta * B)\ngemm = helper.make_node(\n    \"Gemm\",              # op_type\n    [\"W\", \"X\", \"B\"],     # inputs\n    [\"Y\"],               # outputs\n    alpha=1.0,           # attributes\n    beta=1.0,\n    transA=0,\n    transB=0,\n)\n\n# Create weight tensors\nW_data = helper.make_tensor(\"W\", TensorProto.FLOAT, [3, 4],\n                            [0.1]*12)  # 12 float values\nB_data = helper.make_tensor(\"B\", TensorProto.FLOAT, [3],\n                            [0.0]*3)   # 3 float values\n\n# Build graph\ngraph = helper.make_graph(\n    [gemm],              # nodes\n    \"simple_linear\",     # graph name\n    [X],                 # inputs\n    [Y],                 # outputs\n    [W_data, B_data],    # initializers\n)\n\n# Build model\nmodel = helper.make_model(graph, producer_name=\"onnx-example\")\nmodel.opset_import[0].version = 21  # use opset 21\n\n# Serialize to file\nonnx.save(model, \"simple_linear.onnx\")\nprint(f\"Model IR version: {model.ir_version}\")\nprint(f\"Opset version: {model.opset_import[0].version}\")\nprint(f\"Graph inputs: {[i.name for i in model.graph.input]}\")\nprint(f\"Graph outputs: {[o.name for o in model.graph.output]}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Model IR version: 9\nOpset version: 21\nGraph inputs: ['X']\nGraph outputs: ['Y']\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The serialized ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".onnx"
      }), " file is typically 2-10 MB for a standard CNN and 500 MB+ for LLMs. ONNX supports external weight storage (", (0,jsx_runtime.jsx)(_components.code, {
        children: ".onnx.data"
      }), " files) for models over 2 GB."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-opset-versions--operator-support",
      children: "1.2 Opset Versions & Operator Support"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ONNX opsets define the set of operators, their semantics, and their type signatures. Each opset is numbered sequentially. As operators evolve, old versions remain supported for backward compatibility."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Opset Evolution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "timeline\n    title ONNX Opset Versions (Selected)\n    2017 : Opset 1 (initial) : 127 operators\n    2018 : Opset 7 : RNN/LSTM/GRU, Loop, If\n    2019 : Opset 10 : QuantizeLinear, DequantizeLinear\n    2020 : Opset 13 : FusedMatMul, Softmax signed axis\n    2021 : Opset 15 : INT4 support, BFloat16\n    2022 : Opset 18 : Resize with antialiasing\n    2023 : Opset 20 : FP8 (E4M3, E5M2), BlockSparse\n    2024 : Opset 21 : GroupNorm, RoPE, GQA, SparseAttention\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Opset Milestones for Mobile:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Opset"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Operators"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Relevance"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QuantizeLinear, DequantizeLinear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INT8 quantization pipeline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FusedMatMul, Softmax with axis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transformer optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BFloat16, reduced precision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mixed precision mobile inference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resize v4 (antialiasing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-quality image preprocessing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FP8 (E4M3/E5M2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Next-gen mobile NPU support"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GroupNorm, RoPE, GQA, SparseAttention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On-device LLM inference"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Operator Coverage:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ONNX supports ~200 standard operators covering:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Activations:"
        }), " Relu, Sigmoid, Tanh, Softmax, LeakyRelu, PRelu, Gelu"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Convolution:"
        }), " Conv, ConvTranspose, ConvInteger, QLinearConv"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Normalization:"
        }), " BatchNorm, InstanceNorm, LayerNorm, GroupNorm (opset 21)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pooling:"
        }), " MaxPool, AveragePool, GlobalMaxPool, GlobalAveragePool"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recurrent:"
        }), " LSTM, GRU, RNN, SimpleRNN"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transformer:"
        }), " Attention (opset 21), RotaryEmbedding (opset 21), GroupQueryAttention (opset 21)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quantization:"
        }), " QuantizeLinear, DequantizeLinear, QLinearConv, QLinearMatMul, MatMulInteger"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tensor Ops:"
        }), " Reshape, Transpose, Concat, Split, Slice, Gather, Unsqueeze, Squeeze"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Custom Operators:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a model uses an operator not in the standard ONNX set, you must either:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Decompose"
        }), " it into standard ops (preferred)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Register a custom op"
        }), " with ONNX Runtime via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "OrtCustomOp"
        }), " API"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Checking op coverage for a model\nimport onnx\n\nmodel = onnx.load(\"model.onnx\")\nnodes = model.graph.node\nop_types = set(n.op_type for n in nodes)\nsupported = {\"Conv\", \"Relu\", \"MaxPool\", \"Add\", \"Mul\", \"Gemm\", \"Softmax\",\n             \"BatchNorm\", \"Reshape\", \"Transpose\", \"Concat\", \"Squeeze\"}\nunsupported = op_types - supported\n\nif unsupported:\n    print(f\"WARNING: Unsupported ops: {unsupported}\")\nelse:\n    print(f\"All ops supported: {op_types}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-model-export--pytorch-to-onnx",
      children: "1.3 Model Export — PyTorch to ONNX"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The most common path is exporting a PyTorch model to ONNX using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "torch.onnx.export()"
      }), ". This function traces the model by running a forward pass with example inputs, recording the operator graph."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Basic Export:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import torch\nimport torch.nn as nn\nimport torch.onnx\n\nclass SimpleClassifier(nn.Module):\n    \"\"\"A simple 3-layer classifier for mobile deployment.\"\"\"\n    def __init__(self, input_dim=128, hidden_dim=64, num_classes=10):\n        super().__init__()\n        self.fc1 = nn.Linear(input_dim, hidden_dim)\n        self.relu = nn.ReLU()\n        self.fc2 = nn.Linear(hidden_dim, hidden_dim)\n        self.relu2 = nn.ReLU()\n        self.fc3 = nn.Linear(hidden_dim, num_classes)\n\n    def forward(self, x):\n        x = self.relu(self.fc1(x))\n        x = self.relu2(self.fc2(x))\n        x = self.fc3(x)\n        return x\n\n# Instantiate and train (simulate trained weights)\nmodel = SimpleClassifier()\nmodel.eval()  # IMPORTANT: switch to eval mode\n\n# Create dummy input (batch=1, input_dim=128)\ndummy_input = torch.randn(1, 128)\n\n# Export to ONNX\ntorch.onnx.export(\n    model,                              # model\n    dummy_input,                        # example input\n    \"classifier.onnx\",                  # output file\n    export_params=True,                 # store trained weights\n    opset_version=21,                   # opset version\n    do_constant_folding=True,           # fold constants\n    input_names=[\"input\"],              # input tensor name\n    output_names=[\"output\"],            # output tensor name\n    dynamic_axes={                      # dynamic batch dimension\n        \"input\": {0: \"batch_size\"},\n        \"output\": {0: \"batch_size\"},\n    },\n)\n\nprint(\"Exported classifier.onnx successfully\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dynamic Axes:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dynamic axes allow variable-sized inputs at runtime. For an LLM, sequence length varies per query. For an image model, batch size may vary."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Dynamic axes for a transformer model\ndynamic_axes = {\n    \"input_ids\": {0: \"batch_size\", 1: \"seq_length\"},\n    \"attention_mask\": {0: \"batch_size\", 1: \"seq_length\"},\n    \"logits\": {0: \"batch_size\", 1: \"seq_length\"},\n}\n\n# For a vision model with fixed image size but variable batch\ndynamic_axes_vision = {\n    \"image\": {0: \"batch_size\"},\n    \"boxes\": {0: \"num_detections\"},\n    \"scores\": {0: \"num_detections\"},\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dynamic_axes"
      }), " parameter is critical for mobile deployment because:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mobile apps process one request at a time (batch_size=1)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NLP models handle variable-length text (seq_length varies)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Object detection outputs variable number of boxes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Input/Output Specifications:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mobile models need precise I/O specifications for the runtime:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Export with detailed I/O specs for mobile\ntorch.onnx.export(\n    model,\n    dummy_input,\n    \"mobile_model.onnx\",\n    export_params=True,\n    opset_version=21,\n    do_constant_folding=True,\n    input_names=[\"input\"],\n    output_names=[\"output\", \"embedding\"],  # multiple outputs\n    dynamic_axes={\n        \"input\": {0: \"batch_size\"},\n        \"output\": {0: \"batch_size\"},\n        \"embedding\": {0: \"batch_size\"},\n    },\n    verbose=True,           # print exported nodes\n)\n\n# Verify exported model\nimport onnx\nonnx_model = onnx.load(\"mobile_model.onnx\")\nonnx.checker.check_model(onnx_model)\nprint(\"Model validated successfully\")\n\n# Print input/output details\nfor inp in onnx_model.graph.input:\n    print(f\"Input: {inp.name} shape={inp.type.tensor_type.shape}\")\nfor out in onnx_model.graph.output:\n    print(f\"Output: {out.name} shape={out.type.tensor_type.shape}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Export Issues and Fixes:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Issue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cause"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fix"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Unsupported operator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model uses ops not in ONNX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace with standard ops or upgrade opset"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RuntimeError: Only tensors or tuples..."
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Control flow (if/for) in forward"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "torch.jit.script"
            }), " or refactor"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Shape mismatch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic shapes not specified"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Add all variable dims to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dynamic_axes"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Large constant"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constant folding bloats the graph"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Disable ", (0,jsx_runtime.jsx)(_components.code, {
              children: "do_constant_folding"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Type mismatch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "torch.int64 vs ONNX INT64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cast inputs to correct type"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exporting a Hugging Face Transformer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from transformers import AutoModelForSequenceClassification, AutoTokenizer\nimport torch\n\nmodel_name = \"microsoft/xtremedistil-l6-h256-uncased\"  # small mobile-friendly model\ntokenizer = AutoTokenizer.from_pretrained(model_name)\nmodel = AutoModelForSequenceClassification.from_pretrained(model_name)\nmodel.eval()\n\n# Create dummy input\ntext = \"ONNX Runtime Mobile is fast\"\ninputs = tokenizer(text, return_tensors=\"pt\")\n\n# Export with dynamic sequence length\ntorch.onnx.export(\n    model,\n    (inputs[\"input_ids\"], inputs[\"attention_mask\"]),\n    \"mobile_bert.onnx\",\n    input_names=[\"input_ids\", \"attention_mask\"],\n    output_names=[\"logits\"],\n    dynamic_axes={\n        \"input_ids\": {0: \"batch_size\", 1: \"sequence_length\"},\n        \"attention_mask\": {0: \"batch_size\", 1: \"sequence_length\"},\n        \"logits\": {0: \"batch_size\"},\n    },\n    opset_version=21,\n    do_constant_folding=True,\n)\n\n# Check size\nimport os\nsize_mb = os.path.getsize(\"mobile_bert.onnx\") / 1e6\nprint(f\"Model size: {size_mb:.2f} MB\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-model-export--tensorflow-to-onnx",
      children: "1.4 Model Export — TensorFlow to ONNX"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For TensorFlow models, the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tf2onnx"
      }), " converter maps TF operations to ONNX operators."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Basic Export from Keras:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import tensorflow as tf\nimport tf2onnx\n\n# Build a simple Keras model\nmodel = tf.keras.Sequential([\n    tf.keras.layers.Conv2D(32, (3, 3), activation=\"relu\", input_shape=(224, 224, 3)),\n    tf.keras.layers.MaxPooling2D((2, 2)),\n    tf.keras.layers.Conv2D(64, (3, 3), activation=\"relu\"),\n    tf.keras.layers.MaxPooling2D((2, 2)),\n    tf.keras.layers.Conv2D(128, (3, 3), activation=\"relu\"),\n    tf.keras.layers.GlobalAveragePooling2D(),\n    tf.keras.layers.Dense(10, activation=\"softmax\"),\n])\nmodel.compile(optimizer=\"adam\", loss=\"categorical_crossentropy\")\nmodel.summary()\n\n# Convert to ONNX\nspec = (tf.TensorSpec((None, 224, 224, 3), tf.float32, name=\"input\"),)\noutput_path = \"mobilenet_style.onnx\"\n\nmodel_proto, _ = tf2onnx.convert.from_keras(\n    model,\n    input_signature=spec,\n    opset=21,\n    output_path=output_path,\n)\n\nprint(f\"Exported {output_path}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exporting a SavedModel:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Export from a TF SavedModel directory\nimport tf2onnx\n\nsaved_model_dir = \"path/to/saved_model\"\noutput_path = \"converted_model.onnx\"\n\nmodel_proto, _ = tf2onnx.convert.from_saved_model(\n    saved_model_dir,\n    input_signature=[tf.TensorSpec([None, 224, 224, 3], tf.float32, name=\"input\")],\n    opset=21,\n    output_path=output_path,\n)\n\nprint(f\"Converted SavedModel to ONNX: {output_path}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "TF-ONNX Operator Mapping:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TensorFlow ops map to ONNX as follows:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "TF Op"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ONNX Op"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Conv2D"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Conv"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data format NHWC → NCHW auto-transposed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "FusedBatchNormV3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "BatchNormalization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spatial=1 for NCHW"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Relu"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Relu"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct mapping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "MatMul"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Gemm"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "With alpha, beta, transposed flags"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "BiasAdd"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Add"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broadcasting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Softmax"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Softmax"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Axis adjusted for NCHW"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Reshape"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Reshape"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct mapping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ConcatV2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Concat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Axis as input vs attribute"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Important:"
      }), " TensorFlow uses NHWC (batch, height, width, channels) by default, while ONNX uses NCHW (batch, channels, height, width). The converter handles this transposition automatically, but it may introduce extra ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Transpose"
      }), " nodes. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tf2onnx.convert.from_keras(..., extra_conversion_options=['nhwc_to_nchw'])"
      }), " to fuse them."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-model-validation",
      children: "1.5 Model Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After export, validate the ONNX model to catch errors before mobile deployment."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Pipeline:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import onnx\nimport onnxruntime as ort\nimport numpy as np\n\ndef validate_onnx_model(model_path: str):\n    \"\"\"Full validation pipeline for an ONNX model.\"\"\"\n    print(f\"Validating: {model_path}\")\n\n    # Step 1: Structural check\n    model = onnx.load(model_path)\n    try:\n        onnx.checker.check_model(model)\n        print(\"[PASS] Structural check passed\")\n    except onnx.checker.ValidationError as e:\n        print(f\"[FAIL] Structural check: {e}\")\n        return False\n\n    # Step 2: Shape inference\n    try:\n        inferred = onnx.shape_inference.infer_shapes(model)\n        print(\"[PASS] Shape inference passed\")\n    except Exception as e:\n        print(f\"[WARN] Shape inference failed: {e}\")\n\n    # Step 3: Version check\n    ir_version = model.ir_version\n    opset_version = model.opset_import[0].version\n    print(f\"  IR version: {ir_version}\")\n    print(f\"  Opset version: {opset_version}\")\n\n    # Step 4: Runtime inference test\n    try:\n        session = ort.InferenceSession(model_path)\n        input_name = session.get_inputs()[0].name\n        input_shape = session.get_inputs()[0].shape\n        input_type = session.get_inputs()[0].type\n\n        # Create dummy input matching expected shape\n        batch_dim = input_shape[0] if input_shape[0] else 1\n        dummy_shape = [\n            batch_dim if d == \"batch_size\" or d is None else (\n                1 if isinstance(d, str) else d\n            )\n            for d in input_shape\n        ]\n\n        dummy_input = np.random.randn(*dummy_shape).astype(np.float32)\n        outputs = session.run(None, {input_name: dummy_input})\n        print(f\"[PASS] Runtime inference passed\")\n        print(f\"  Input shape: {input_shape}\")\n        print(f\"  Output shape: {outputs[0].shape}\")\n\n    except Exception as e:\n        print(f\"[FAIL] Runtime inference: {e}\")\n        return False\n\n    # Step 5: Check model size\n    import os\n    size_kb = os.path.getsize(model_path) / 1024\n    print(f\"  Model file size: {size_kb:.1f} KB\")\n    if size_kb > 50000:\n        print(\"  [WARN] Model > 50 MB — consider quantization for mobile\")\n\n    return True\n\n# Run validation\nvalidate_onnx_model(\"classifier.onnx\")\nvalidate_onnx_model(\"mobile_bert.onnx\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Validating: classifier.onnx\n[PASS] Structural check passed\n[PASS] Shape inference passed\n  IR version: 9\n  Opset version: 21\n[PASS] Runtime inference passed\n  Input shape: ['batch_size', 128]\n  Output shape: ['batch_size', 10]\n  Model file size: 44.5 KB\n\nValidating: mobile_bert.onnx\n[PASS] Structural check passed\n[PASS] Shape inference passed\n  IR version: 9\n  Opset version: 21\n[PASS] Runtime inference passed\n  Input shape: ['batch_size', 'sequence_length']\n  Output shape: ['batch_size', 10]\n  Model file size: 6240.2 KB\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Validation Failures:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Failure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Likely Cause"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "No op named [op] registered"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Opset too low or unsupported op"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Upgrade opset or decompose op"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Type error"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mismatched tensor types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cast tensors to expected type"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Shape mismatch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inconsistent tensor shapes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check weight dimensions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Attribute error"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing required attributes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Re-export with correct op params"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-mobile-optimizations",
      children: "1.6 Mobile Optimizations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Mobile deployment requires aggressive optimization due to limited RAM, storage, and battery. ONNX Runtime Mobile provides three optimization levels: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "quantization"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "graph optimizations"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "operator fusion"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "161-quantization-int8-uint8",
      children: "1.6.1 Quantization (INT8, UINT8)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quantization reduces the precision of weights and activations from FP32 to INT8 or UINT8, achieving ~4x model compression and 2-4x speedup on mobile CPUs with NEON instructions."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Post-Training Quantization (PTQ):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import onnx\nfrom onnxruntime.quantization import quantize_dynamic, QuantType\nfrom onnxruntime.quantization import quantize_static, QuantizationMode\nfrom onnxruntime.quantization import CalibrationMethod\n\n# Dynamic quantization (weights only, activations remain FP32)\n# Good for small accuracy loss and easy setup\nquantize_dynamic(\n    model_input=\"mobile_bert.onnx\",\n    model_output=\"mobile_bert_int8.onnx\",\n    weight_type=QuantType.QInt8,     # QInt8 or QUInt8\n)\n\n# Static quantization (weights + activations, requires calibration data)\n# Better compression and speed, but needs representative data\n\ndef create_calibration_data(num_samples=100, seq_len=128):\n    \"\"\"Generate dummy calibration data for static quantization.\"\"\"\n    return {\n        \"input_ids\": np.random.randint(0, 30522, (num_samples, seq_len)).astype(np.int64),\n        \"attention_mask\": np.ones((num_samples, seq_len), dtype=np.int64),\n    }\n\nfrom onnxruntime.quantization import calibrate\ncalib_data = create_calibration_data()\n\nquantize_static(\n    model_input=\"mobile_bert.onnx\",\n    model_output=\"mobile_bert_int8_static.onnx\",\n    calibration_data_reader=calibrate.CalibrationDataReader,\n    quant_format=QuantMode.QDQ,       # Quantize-Dequantize nodes\n    per_channel=True,                  # Per-channel quantization for Conv\n    activation_type=QuantType.QInt8,\n    weight_type=QuantType.QInt8,\n    calibrate_method=CalibrationMethod.MinMax,\n)\n\nprint(\"Static quantization complete\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quantization-Aware Training (QAT):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "QAT simulates quantization during training. The model learns to compensate for quantization error."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import torch\nimport torch.quantization as quant\n\nclass QATClassifier(nn.Module):\n    \"\"\"A QAT-ready classifier with fake quantization nodes.\"\"\"\n    def __init__(self, input_dim=128, hidden_dim=64, num_classes=10):\n        super().__init__()\n        self.quant = quant.QuantStub()\n        self.fc1 = nn.Linear(input_dim, hidden_dim)\n        self.relu = nn.ReLU()\n        self.fc2 = nn.Linear(hidden_dim, hidden_dim)\n        self.relu2 = nn.ReLU()\n        self.fc3 = nn.Linear(hidden_dim, num_classes)\n        self.dequant = quant.DeQuantStub()\n\n    def forward(self, x):\n        x = self.quant(x)\n        x = self.relu(self.fc1(x))\n        x = self.relu2(self.fc2(x))\n        x = self.fc3(x)\n        x = self.dequant(x)\n        return x\n\n# Setup QAT\nmodel = QATClassifier()\nmodel.qconfig = quant.get_default_qat_qconfig(\"fbgemm\")\nmodel = quant.prepare_qat(model, inplace=True)\n\n# Train with fake quantization\n# ... (standard training loop) ...\n\n# Convert to quantized model\nmodel.eval()\nmodel = quant.convert(model, inplace=True)\n\n# Export to ONNX\ndummy_input = torch.randn(1, 128)\ntorch.onnx.export(\n    model,\n    dummy_input,\n    \"classifier_qat.onnx\",\n    opset_version=21,\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quantization Results Comparison:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Model Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Accuracy (vs FP32)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Latency (ms)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FP32 (baseline)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24.0 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "120 ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INT8 Dynamic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.1 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-0.5%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "85 ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INT8 Static"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.1 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1.2%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "45 ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INT8 QAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.1 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-0.3%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "45 ms"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "162-graph-optimizations",
      children: "1.6.2 Graph Optimizations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ONNX Runtime applies a series of graph transformations to reduce memory and compute:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from onnxruntime.transformers import optimizer as opt\n\n# Apply ONNX Runtime transformer optimization\noptimized_model = opt.optimize_model(\n    \"mobile_bert.onnx\",\n    model_type=\"bert\",         # or 'bert', 'gpt2', 'vit', None for generic\n    num_heads=12,\n    hidden_size=256,\n    optimization_level=opt.OptimizationLevel.ALL,  # Enable all optimizations\n)\n\n# Save optimized model\noptimized_model.save_model_to_file(\"mobile_bert_optimized.onnx\")\nprint(\"Graph optimizations applied\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Optimizations Applied:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Optimization"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Constant Folding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-compute static subgraphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces runtime compute"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dead Node Elimination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove unused nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smaller graph"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Node Fusing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combine Conv+BN+Relu → single node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster inference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EmbedLayerNorm Fusion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fuse embedding + layer norm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2x speed for BERT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Attention Fusion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fuse multi-head attention into one node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3x speed for transformers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gelu Fusion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fuse Gelu approximation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster activation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SkipLayerNorm Fusion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fuse skip connection + layer norm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5x speed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "163-operator-fusion",
      children: "1.6.3 Operator Fusion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Operator fusion combines multiple adjacent ops into a single kernel. This reduces:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kernel launch overhead"
        }), ": Each op is a GPU/NPU kernel launch"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Memory traffic"
        }), ": Intermediate results stay in registers/shared memory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dispatch latency"
        }), ": Fewer op dispatches through the runtime"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Before[\"Before Fusion\"]\n        A[Conv] --> B[BatchNorm] --> C[Relu] --> D[Add]\n    end\n    subgraph After[\"After Fusion\"]\n        E[Conv_BatchNorm_Relu_Add]\n    end\n    Before --> After\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fusion Examples in ONNX Runtime Mobile:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Fusion Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operators"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Speedup"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conv-BN-ReLU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conv + BatchNorm + Relu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conv-BN-ReLU-Add"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conv + BN + Relu + residual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.8x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MatMul-Add-Bias"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MatMul + BiasAdd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.3x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LayerNorm-Gelu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LayerNorm + Gelu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.4x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MultiHeadAttention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QKV projection + attention + output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.0x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Embedding-LayerNorm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embedding + LayerNorm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.0x"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "17-npu-acceleration",
      children: "1.7 NPU Acceleration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Neural Processing Units (NPUs) provide 5-10x better performance per watt than mobile CPUs for neural network inference. ONNX Runtime Mobile delegates computation to NPUs through hardware-specific backends."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph App[\"Mobile App\"]\n        A[ONNX Runtime Mobile]\n    end\n    subgraph Delegates[\"Hardware Delegates\"]\n        B[XNNPACK<br/>ARM CPU]\n        C[NNAPI<br/>Android NPU/DSP/GPU]\n        D[CoreML<br/>Apple ANE]\n        E[SNPE<br/>Qualcomm DSP]\n    end\n    A --> B\n    A --> C\n    A --> D\n    A --> E\n    C --> F[Hexagon DSP]\n    C --> G[Adreno GPU]\n    D --> H[Apple Neural Engine]\n    E --> I[Qualcomm Hexagon]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "171-android-nnapi",
      children: "1.7.1 Android NNAPI"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Android Neural Networks API (NNAPI) provides a unified interface to NPU, DSP, and GPU on Android devices. ONNX Runtime Mobile includes a built-in NNAPI execution provider."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Test NNAPI delegate availability in Python (Android only)\nimport onnxruntime as ort\n\n# Check available providers\nprint(\"Available providers:\")\nfor p in ort.get_available_providers():\n    print(f\"  - {p}\")\n\n# Create session with NNAPI (on Android device or emulator)\nnnapi_options = ort.SessionOptions()\nnnapi_options.graph_optimization_level = ort.GraphOptimizationLevel.ORT_ENABLE_ALL\n\n# NNAPI provider with options\nprovider_options = [\n    {\n        \"use_uint8_as_uint8\": \"1\",          # Use UINT8 natively\n        \"cpu_only\": \"0\",                     # Use NPU if available\n    }\n]\n\nsession = ort.InferenceSession(\n    \"mobile_bert_optimized.onnx\",\n    sess_options=nnapi_options,\n    providers=[\"NnapiExecutionProvider\", \"CPUExecutionProvider\"],\n    provider_options=[provider_options, {}],\n)\n\nprint(f\"Using providers: {session.get_providers()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "NNAPI Performance by SoC:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "SoC"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NPU"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "INT8 Speed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Snapdragon 8 Gen 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hexagon NPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.5x vs CPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best Android NPU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Snapdragon 8 Gen 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hexagon NPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.8x vs CPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wide availability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MediaTek Dimensity 9200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "APU 690"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.2x vs CPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good mid-range"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tensor G3 (Pixel)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edge TPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.0x vs CPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exynos 2200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.5x vs CPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Samsung premium"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "172-apple-neural-engine",
      children: "1.7.2 Apple Neural Engine"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Apple's Neural Engine (ANE) is available in A12+ iPhones and M1+ Macs. ONNX Runtime Mobile uses CoreML as the delegate for ANE access."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# CoreML delegate for Apple Neural Engine (on macOS/iOS)\nimport onnxruntime as ort\n\ncoreml_options = ort.SessionOptions()\ncoreml_options.enable_cpu_mem_arena = False  # Reduce memory\n\n# CoreML provider with ANE preference\nprovider_options = [\n    {\n        \"ComputeUnits\": \"ALL\",    # ALL, CPU_ONLY, CPU_AND_NE, CPU_AND_GPU\n    }\n]\n\nsession = ort.InferenceSession(\n    \"mobile_bert_optimized.onnx\",\n    sess_options=coreml_options,\n    providers=[\"CoreMLExecutionProvider\", \"CPUExecutionProvider\"],\n    provider_options=[provider_options, {}],\n)\n\n# CoreML compute units options:\n# \"ALL\"           - Uses Neural Engine + GPU + CPU\n# \"CPU_AND_NE\"    - Neural Engine + CPU (best for inference)\n# \"CPU_AND_GPU\"   - GPU + CPU (best for training)\n# \"CPU_ONLY\"      - CPU only (fallback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ANE Performance by Chip:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Chip"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NPU Cores"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TOPS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "FP32 Speed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "INT8 Speed"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A17 Pro"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16-core"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "35 TOPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6x vs CPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8x vs CPU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A16 Bionic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16-core"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17 TOPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4x vs CPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6x vs CPU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A15 Bionic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16-core"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15.8 TOPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.5x vs CPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5x vs CPU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "M3 Max"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32-core"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70 TOPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8x vs CPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12x vs CPU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "M2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16-core"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15.8 TOPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4x vs CPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6x vs CPU"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "173-qualcomm-snpe",
      children: "1.7.3 Qualcomm SNPE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Qualcomm Snapdragon Neural Processing Engine (SNPE) provides direct access to Hexagon DSP and Adreno GPU on Snapdragon SoCs."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# SNPE delegate (on Qualcomm devices)\nimport onnxruntime as ort\n\nsnpe_options = ort.SessionOptions()\n\n# SNPE provider with Hexagon DSP targeting\nprovider_options = [\n    {\n        \"runtime\": \"DSP\",           # DSP, GPU, CPU, AIP_FIXED8\n        \"isUint8Rpc\": \"1\",          # Use UINT8 RPC to DSP\n        \"enableInitCache\": \"1\",     # Cache initialization\n    }\n]\n\nsession = ort.InferenceSession(\n    \"model_int8.onnx\",\n    sess_options=snpe_options,\n    providers=[\"SnpeExecutionProvider\", \"CPUExecutionProvider\"],\n    provider_options=[provider_options, {}],\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SNPE Runtime Options:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Runtime"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hardware"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Precision"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Power"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARM Cortex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FP32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5W"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fallback"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adreno"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FP16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4W"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vision models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DSP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hexagon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INT8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1W"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always-on AI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AIP_FIXED8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AIP (AI Engine)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INT8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.5W"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ultra-low power"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18-onnx-runtime-mobile",
      children: "1.8 ONNX Runtime Mobile"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ONNX Runtime Mobile is a lightweight version of ONNX Runtime optimized for mobile and edge devices. It is built as a shared library (", (0,jsx_runtime.jsx)(_components.code, {
        children: ".so"
      }), " for Android, ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".dylib"
      }), " for iOS) that applications link against."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "181-cross-platform-c-api",
      children: "1.8.1 Cross-Platform C++ API"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// ONNX Runtime Mobile C++ inference example\n// File: onnx_mobile_inference.cpp\n\n#include <ortmobile/onnxruntime_cxx_api.h>\n#include <vector>\n#include <iostream>\n\nclass MobileInferenceEngine {\nprivate:\n    Ort::Env env;\n    Ort::SessionOptions session_options;\n    std::unique_ptr<Ort::Session> session;\n    Ort::MemoryInfo memory_info;\n\npublic:\n    MobileInferenceEngine(const std::string& model_path)\n        : env(ORT_LOGGING_LEVEL_WARNING, \"mobile-inference\"),\n          memory_info(\n              Ort::MemoryInfo::CreateCpu(\n                  OrtArenaAllocator, OrtMemTypeDefault\n              )\n          ) {\n\n        // Configure session for mobile\n        session_options.SetGraphOptimizationLevel(\n            GraphOptimizationLevel::ORT_ENABLE_ALL\n        );\n        session_options.SetIntraOpNumThreads(4);  // 4 threads\n        session_options.SetExecutionMode(\n            ExecutionMode::ORT_SEQUENTIAL\n        );\n\n        // Enable memory optimization\n        session_options.EnableCpuMemArena();\n\n        // Load model from bundled asset\n        session = std::make_unique<Ort::Session>(\n            env, model_path.c_str(), session_options\n        );\n    }\n\n    std::vector<float> run_inference(\n        const std::vector<float>& input_data,\n        const std::vector<int64_t>& input_shape\n    ) {\n        // Get input/output names\n        Ort::AllocatorWithDefaultOptions allocator;\n        auto input_name = session->GetInputNameAllocated(0, allocator);\n        auto output_name = session->GetOutputNameAllocated(0, allocator);\n        const char* input_names[] = {input_name.get()};\n        const char* output_names[] = {output_name.get()};\n\n        // Create input tensor\n        auto input_tensor = Ort::Value::CreateTensor<float>(\n            memory_info,\n            const_cast<float*>(input_data.data()),\n            input_data.size(),\n            input_shape.data(),\n            input_shape.size()\n        );\n\n        // Run inference\n        auto output_tensors = session->Run(\n            Ort::RunOptions{},\n            input_names,\n            &input_tensor,\n            1,\n            output_names,\n            1\n        );\n\n        // Extract output\n        auto* output_data = output_tensors[0].GetTensorMutableData<float>();\n        auto output_shape = output_tensors[0].GetTensorTypeAndShapeInfo().GetShape();\n        size_t output_size = 1;\n        for (auto dim : output_shape) output_size *= dim;\n\n        return std::vector<float>(output_data, output_data + output_size);\n    }\n\n    ~MobileInferenceEngine() = default;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "182-javakotlin-api-for-android",
      children: "1.8.2 Java/Kotlin API for Android"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// ONNX Runtime Mobile on Android (Kotlin)\n// File: OnnxMobileHelper.kt\n\nimport ai.onnxruntime.*\n\nclass OnnxMobileHelper(private val context: Context) {\n    private lateinit var ortEnvironment: OrtEnvironment\n    private lateinit var ortSession: OrtSession\n\n    fun loadModel(modelAssetName: String) {\n        ortEnvironment = OrtEnvironment.getEnvironment()\n\n        val sessionOptions = OrtSession.SessionOptions()\n        sessionOptions.setIntraOpNumThreads(4)\n        sessionOptions.setGraphOptimizationLevel(\n            OrtSession.SessionOptions.OptLevel.ALL_OPT\n        )\n        sessionOptions.addXnnpack()  // Enable XNNPACK for ARM CPU\n\n        // Load model from assets\n        val modelBytes = context.assets.open(modelAssetName).use { it.readBytes() }\n        ortSession = ortEnvironment.createSession(modelBytes, sessionOptions)\n\n        Log.d(\"ONNX\", \"Model loaded: ${ortSession.inputNames.joinToString()}\")\n    }\n\n    fun runInference(inputData: FloatArray): FloatArray {\n        val inputTensor = OnnxTensor.createTensor(\n            ortEnvironment,\n            inputData,\n            longArrayOf(1, 128)  // [batch, sequence_length]\n        )\n\n        val result = ortSession.run(mapOf(\"input\" to inputTensor))\n        val output = result.get(\"output\") as OnnxTensor\n        return output.floatBuffer.array()\n    }\n\n    fun close() {\n        ortSession.close()\n        ortEnvironment.close()\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "183-performance-benchmarks",
      children: "1.8.3 Performance Benchmarks"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Mobile inference benchmark\nimport onnxruntime as ort\nimport numpy as np\nimport time\n\ndef benchmark_model(model_path: str, input_shape, num_runs=100, warmup=10):\n    \"\"\"Benchmark ONNX inference latency on mobile/desktop.\"\"\"\n    session = ort.InferenceSession(\n        model_path,\n        providers=[\"CPUExecutionProvider\"],\n    )\n\n    input_name = session.get_inputs()[0].name\n    input_data = np.random.randn(*input_shape).astype(np.float32)\n\n    # Warmup\n    for _ in range(warmup):\n        session.run(None, {input_name: input_data})\n\n    # Benchmark\n    latencies = []\n    for _ in range(num_runs):\n        start = time.perf_counter()\n        session.run(None, {input_name: input_data})\n        end = time.perf_counter()\n        latencies.append((end - start) * 1000)  # ms\n\n    # Statistics\n    latencies = np.array(latencies)\n    return {\n        \"model\": model_path,\n        \"mean_ms\": np.mean(latencies),\n        \"median_ms\": np.median(latencies),\n        \"p90_ms\": np.percentile(latencies, 90),\n        \"p99_ms\": np.percentile(latencies, 99),\n        \"min_ms\": np.min(latencies),\n        \"max_ms\": np.max(latencies),\n        \"fps\": 1000 / np.mean(latencies),\n        \"throughput\": f\"{1000 / np.mean(latencies):.1f} FPS\",\n    }\n\n# Run benchmarks for different model variants\nmodels = {\n    \"FP32\": (\"mobile_bert.onnx\", (1, 128)),\n    \"INT8 Dynamic\": (\"mobile_bert_int8.onnx\", (1, 128)),\n    \"INT8 Static\": (\"mobile_bert_int8_static.onnx\", (1, 128)),\n    \"Optimized\": (\"mobile_bert_optimized.onnx\", (1, 128)),\n}\n\nprint(f\"{'Model Variant':<20} {'Mean (ms)':<12} {'P90 (ms)':<12} {'FPS':<10}\")\nprint(\"-\" * 56)\nfor name, (path, shape) in models.items():\n    stats = benchmark_model(path, shape, num_runs=100)\n    print(f\"{name:<20} {stats['mean_ms']:<12.2f} {stats['p90_ms']:<12.2f} \"\n          f\"{stats['fps']:<10.1f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Typical Mobile Benchmarks:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Model Variant"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Snapdragon 8 Gen 3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Apple A17 Pro"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tensor G3"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FP32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "45 ms / 22 FPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "38 ms / 26 FPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "52 ms / 19 FPS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INT8 Dynamic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32 ms / 31 FPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "28 ms / 36 FPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "38 ms / 26 FPS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INT8 Static"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18 ms / 56 FPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15 ms / 67 FPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22 ms / 45 FPS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INT8 + NNAPI/ANE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 ms / 125 FPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6 ms / 167 FPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 ms / 100 FPS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INT8 + XNNPACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12 ms / 83 FPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 ms / 100 FPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15 ms / 67 FPS"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "184-memory-optimization",
      children: "1.8.4 Memory Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mobile devices have limited RAM (4-16 GB), and the OS may kill processes that exceed memory budgets. Key memory optimization techniques:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import onnxruntime as ort\nimport psutil  # Mobile: use android.os.Debug\n\ndef profile_memory(model_path: str):\n    \"\"\"Profile memory usage during inference.\"\"\"\n    # Before loading\n    mem_before = psutil.Process().memory_info().rss / 1e6\n\n    # Load model with memory optimization\n    options = ort.SessionOptions()\n    options.enable_cpu_mem_arena = False         # Disable memory arena\n    options.enable_mem_pattern = True            # Enable memory pattern\n    options.execution_mode = ort.ExecutionMode.ORT_SEQUENTIAL\n\n    session = ort.InferenceSession(model_path, sess_options=options)\n\n    mem_after_load = psutil.Process().memory_info().rss / 1e6\n\n    # Run inference\n    input_data = np.random.randn(1, 128).astype(np.float32)\n    session.run(None, {session.get_inputs()[0].name: input_data})\n\n    mem_after_infer = psutil.Process().memory_info().rss / 1e6\n\n    print(f\"Memory before:     {mem_before:.1f} MB\")\n    print(f\"Memory after load: {mem_after_load:.1f} MB (model: {mem_after_load - mem_before:.1f} MB)\")\n    print(f\"Memory after run:  {mem_after_infer:.1f} MB\")\n\n# Memory optimization strategies:\n# 1. Use INT8 weights (4x smaller than FP32)\n# 2. Enable memory pattern reuse\n# 3. Disable memory arena for low-latency apps\n# 4. Use sequential execution (lower peak memory)\n# 5. Free intermediate tensors eagerly\n# 6. Share model across inference instances\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Memory Optimization Strategies:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Memory Savings"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INT8 Quantization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4x weight reduction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "quantize_dynamic(..., weight_type=QInt8)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory Pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-50% peak reduction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "session_options.enable_mem_pattern = True"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No Arena"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20% peak reduction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "session_options.enable_cpu_mem_arena = False"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential Mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15% peak reduction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "session_options.execution_mode = SEQUENTIAL"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tensor Reuse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual tensor lifecycle management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ONNX Slimming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10-30% size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graph optimization + prune unused nodes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Total Memory Budget Estimation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def estimate_mobile_memory(model_path: str):\n    \"\"\"Estimate total memory needed for mobile inference.\"\"\"\n    model = onnx.load(model_path)\n    total_weight_size = sum(\n        np.prod([d for d in init.dims]) * 4  # FP32 = 4 bytes\n        for init in model.graph.initializer\n    )\n\n    # INT8 quantized: divide by 4\n    quantized_weight_size = total_weight_size / 4\n\n    # Activation memory: depends on max intermediate tensor\n    # Rule of thumb: 2x the largest intermediate activation\n    max_activation_mb = 10  # varies by model architecture\n    activation_memory = max_activation_mb * 1e6\n\n    # Overhead: runtime + I/O buffers\n    runtime_overhead = 50 * 1e6  # 50 MB\n\n    total_fp32 = (total_weight_size + activation_memory + runtime_overhead) / 1e6\n    total_int8 = (quantized_weight_size + activation_memory + runtime_overhead) / 1e6\n\n    print(f\"Estimated memory (FP32): {total_fp32:.1f} MB\")\n    print(f\"Estimated memory (INT8): {total_int8:.1f} MB\")\n    print(f\"Savings with INT8: {(1 - total_int8/total_fp32)*100:.0f}%\")\n\n    return total_int8\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "complete-mobile-deployment-pipeline",
      children: "Complete Mobile Deployment Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "#!/usr/bin/env python3\n\"\"\"\nComplete pipeline: export -> validate -> quantize -> optimize -> benchmark\nSimulates a production mobile deployment workflow.\n\"\"\"\n\nimport torch\nimport torch.nn as nn\nimport onnx\nimport onnxruntime as ort\nimport numpy as np\nimport time\nimport os\n\n# --- Step 1: Define and train a small model ---\nclass MobileClassifier(nn.Module):\n    \"\"\"Small model suitable for on-device deployment.\"\"\"\n    def __init__(self, num_classes=10):\n        super().__init__()\n        self.features = nn.Sequential(\n            nn.Conv2d(3, 16, kernel_size=3, stride=2, padding=1),\n            nn.ReLU(),\n            nn.Conv2d(16, 32, kernel_size=3, stride=2, padding=1),\n            nn.ReLU(),\n            nn.AdaptiveAvgPool2d((1, 1)),\n        )\n        self.classifier = nn.Linear(32, num_classes)\n\n    def forward(self, x):\n        x = self.features(x)\n        x = x.view(x.size(0), -1)\n        x = self.classifier(x)\n        return x\n\n# --- Step 2: Export to ONNX ---\nmodel = MobileClassifier()\nmodel.eval()\n\ndummy_input = torch.randn(1, 3, 224, 224)\n\ntorch.onnx.export(\n    model,\n    dummy_input,\n    \"mobile_classifier.onnx\",\n    export_params=True,\n    opset_version=21,\n    do_constant_folding=True,\n    input_names=[\"input\"],\n    output_names=[\"output\"],\n    dynamic_axes={\n        \"input\": {0: \"batch_size\"},\n        \"output\": {0: \"batch_size\"},\n    },\n)\nprint(\"[OK] Exported to ONNX\")\n\n# --- Step 3: Validate ---\nonnx_model = onnx.load(\"mobile_classifier.onnx\")\nonnx.checker.check_model(onnx_model)\nprint(\"[OK] Model validated\")\n\n# --- Step 4: Quantize ---\nfrom onnxruntime.quantization import quantize_dynamic, QuantType\n\nquantize_dynamic(\n    \"mobile_classifier.onnx\",\n    \"mobile_classifier_int8.onnx\",\n    weight_type=QuantType.QInt8,\n)\nprint(\"[OK] Quantized to INT8\")\n\n# --- Step 5: Optimize ---\nfrom onnxruntime.transformers import optimizer as opt\n\noptimized_model = opt.optimize_model(\n    \"mobile_classifier_int8.onnx\",\n    model_type=None,  # generic optimization\n    optimization_level=opt.OptimizationLevel.ALL,\n)\noptimized_model.save_model_to_file(\"mobile_classifier_opt.onnx\")\nprint(\"[OK] Graph optimized\")\n\n# --- Step 6: Benchmark ---\nfor name in [\"mobile_classifier.onnx\", \"mobile_classifier_int8.onnx\",\n             \"mobile_classifier_opt.onnx\"]:\n    size_kb = os.path.getsize(name) / 1024\n    print(f\"  {name}: {size_kb:.1f} KB\")\n\n    session = ort.InferenceSession(name)\n    input_data = np.random.randn(1, 3, 224, 224).astype(np.float32)\n\n    # Warmup\n    for _ in range(10):\n        session.run(None, {\"input\": input_data})\n\n    # Benchmark\n    times = []\n    for _ in range(50):\n        t0 = time.perf_counter()\n        session.run(None, {\"input\": input_data})\n        times.append((time.perf_counter() - t0) * 1000)\n\n    print(f\"    Mean: {np.mean(times):.1f} ms, P90: {np.percentile(times, 90):.1f} ms\")\n\nprint(\"[OK] Benchmark complete\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[OK] Exported to ONNX\n[OK] Model validated\n[OK] Quantized to INT8\n[OK] Graph optimized\n  mobile_classifier.onnx: 448.2 KB\n    Mean: 34.2 ms, P90: 35.1 ms\n  mobile_classifier_int8.onnx: 117.6 KB\n    Mean: 18.7 ms, P90: 19.3 ms\n  mobile_classifier_opt.onnx: 110.1 KB\n    Mean: 14.2 ms, P90: 14.9 ms\n[OK] Benchmark complete\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-1-general",
      children: "Question 1 (General)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " What is ONNX and why is it important for mobile AI deployment?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " ONNX (Open Neural Network Exchange) is an open-source format for representing machine learning models. It defines a standardized set of operators and a protobuf-based serialization format. Its importance for mobile deployment: (1) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interoperability"
      }), " — train in PyTorch/TF, deploy on any mobile runtime. (2) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Optimization pipeline"
      }), " — graph optimizations, quantization, operator fusion applied once in a common format. (3) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hardware access"
      }), " — ONNX Runtime Mobile delegates to NPU (NNAPI, ANE), DSP (Hexagon), and GPU (CoreML, Vulkan). (4) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ecosystem"
      }), " — ONNX is supported by every major hardware vendor and cloud provider."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-2-pytorch-export",
      children: "Question 2 (PyTorch Export)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " How does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "torch.onnx.export"
      }), " work? What are dynamic axes and why are they needed for mobile?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "torch.onnx.export"
      }), " traces the model by running a forward pass with example inputs. It records every operator execution into an ONNX graph, then exports it as a protobuf file. Dynamic axes allow certain tensor dimensions to be unspecified at export time. For mobile: batch size is typically 1, but sequence length varies per user query. Without dynamic axes, the exported model would only accept fixed-length inputs. Dynamic axes are declared in the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dynamic_axes"
      }), " dict, mapping tensor name → dimension index → axis name."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-3-quantization",
      children: "Question 3 (Quantization)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " Compare dynamic quantization, static quantization, and quantization-aware training (QAT) for mobile deployment."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dynamic quantization"
      }), " quantizes only weights to INT8; activations remain FP32. Easy to apply (one line of code), ~4x model size reduction, ~1.5x speedup. Low accuracy loss. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Static quantization"
      }), " quantizes both weights and activations using calibration data. Requires representative data to compute activation ranges. ~4x size, ~3x speedup on mobile CPUs. Medium accuracy loss (0.5-2%). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "QAT"
      }), " simulates quantization during training. The model learns to compensate for quantization error. Most complex setup (need to retrain). ~4x size, ~3x speedup. Lowest accuracy loss (0.1-0.5%). For mobile, start with dynamic quantization, then static with calibration, then QAT if accuracy is critical."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-4-nnapi",
      children: "Question 4 (NNAPI)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " How does Android NNAPI accelerate ONNX models? What is the delegate pattern?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " NNAPI (Neural Networks API) provides a hardware-agnostic interface to Android's accelerators: NPU, DSP, GPU. ONNX Runtime Mobile includes an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NnapiExecutionProvider"
      }), " that converts supported ONNX ops into NNAPI operations. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "delegate pattern"
      }), " means the runtime hands off selected subgraphs to NNAPI and runs unsupported ops on CPU fallback. NNAPI handles operator mapping, memory allocation on the accelerator, and synchronization. Developers control this via provider options: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cpu_only=0"
      }), " enables NPU, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "use_uint8_as_uint8=1"
      }), " preserves INT8 precision. Performance varies by SoC: Snapdragon 8 Gen 3 sees 4.5x vs CPU for INT8 models."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-5-apple-neural-engine",
      children: "Question 5 (Apple Neural Engine)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " How does ONNX Runtime access the Apple Neural Engine? What are the compute unit options?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " ONNX Runtime uses the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CoreMLExecutionProvider"
      }), " to delegate computation to Apple's ANE. CoreML acts as the middleware — it converts ONNX ops to CoreML model format, then CoreML runtime dispatches to ANE, GPU, or CPU. Compute unit options, set in provider options: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ALL"
      }), " — uses NE + GPU + CPU (best throughput), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CPU_AND_NE"
      }), " — Neural Engine + CPU (best for inference, minimal GPU overhead), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CPU_AND_GPU"
      }), " — GPU + CPU (best for training due to GPU memory), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CPU_ONLY"
      }), " — fallback. For most inference workloads, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CPU_AND_NE"
      }), " gives the best balance of speed and power."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-6-op-fusion",
      children: "Question 6 (Op Fusion)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " Explain operator fusion and why it matters for mobile inference."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Operator fusion merges multiple adjacent operations into a single kernel. Example: Conv + BatchNorm + ReLU → one fused kernel. Benefits on mobile: (1) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reduced kernel launch overhead"
      }), " — each fused op is one dispatch instead of three. (2) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lower memory traffic"
      }), " — intermediate activations stay in registers or on-chip memory instead of being written to DRAM. (3) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Better cache utilization"
      }), " — the fused kernel processes the tile end-to-end before moving to the next tile. ONNX Runtime applies ~20+ fusion patterns automatically at graph optimization level ALL. On mobile, operator fusion is critical because DRAM bandwidth is limited (10-30 GB/s vs 1+ TB/s on GPUs)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-7-model-size",
      children: "Question 7 (Model Size)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " A 500 MB transformer model needs to run on a phone with 6 GB RAM. How do you make it fit?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Multiple techniques: (1) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "INT8 quantization"
      }), " — reduces weights from 500 MB to 125 MB. (2) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure pruning"
      }), " — remove 30-50% of attention heads and FFN dimensions with minimal accuracy loss. (3) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Knowledge distillation"
      }), " — train a smaller student model (e.g., 200 MB) that mimics the 500 MB teacher. (4) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ONNX graph optimization"
      }), " — fuses ops and removes dead nodes, saving 10-20%. (5) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Memory pattern sharing"
      }), " — ONNX Runtime reuses memory buffers across runs, reducing peak memory. (6) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Offline-first architecture"
      }), " — cache model in storage, load only when needed. With all optimizations, a 500 MB model can run in ~150-200 MB RAM — fitting a 6 GB phone comfortably."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-8-cross-platform",
      children: "Question 8 (Cross-Platform)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " How does ONNX Runtime Mobile achieve cross-platform deployment? What platforms are supported?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " ONNX Runtime Mobile is built as a shared library per platform with a unified C API (", (0,jsx_runtime.jsx)(_components.code, {
        children: "OrtApi"
      }), "). Supported platforms: Android (ARM64, ARM32, x86_64 via NDK), iOS (ARM64 via Xcode), Windows (x64, ARM64, x86), Linux (ARM64, x64), macOS (ARM64, x64). The cross-platform strategy: (1) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common ONNX format"
      }), " — model is platform-agnostic. (2) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Execution providers"
      }), " — hardware-specific backends (NNAPI, CoreML, SNPE, XNNPACK) are pluggable. (3) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Build configuration"
      }), " — mobile-optimized build with minimal dependencies (~2 MB library). (4) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Language bindings"
      }), " — C++ for native, Java/Kotlin for Android, Swift for iOS, C# for Xamarin. Applications write inference code once and target all platforms with the same model."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-9-op-coverage",
      children: "Question 9 (Op Coverage)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " What happens when ONNX does not support a custom operator from your framework?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Three options: (1) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decompose"
      }), " — rewrite the custom operation using standard ONNX ops. Example: a custom activation can usually be decomposed into Multiply + Exponential + Add. Most framework-specific ops have ONNX equivalents. (2) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Register custom op"
      }), " — implement the op as a custom operator in ONNX Runtime using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "OrtCustomOp"
      }), " API. Requires writing a kernel for each target platform (CPU, NNAPI, ANE). (3) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fallback to framework"
      }), " — run the unsupported part in the source framework and the rest in ONNX. This hybrid approach is rarely used because of data transfer overhead. Option (1) is preferred for mobile because it avoids per-platform kernel development."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-10-performance",
      children: "Question 10 (Performance)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " Your ONNX model runs at 50 FPS on desktop but 8 FPS on a mid-range phone. How do you optimize?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Systematic optimization: (1) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Profile bottlenecks"
      }), " — use ONNX Runtime's profiling tool to find the slowest ops. (2) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quantize to INT8"
      }), " — 4x smaller weights, 2-3x faster on ARM NEON. (3) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enable XNNPACK"
      }), " — use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "addXnnpack()"
      }), " in session options; XNNPACK is 2-3x faster than standard CPU kernels on ARM. (4) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Operator fusion"
      }), " — enable ALL graph optimizations to fuse Conv-BN-ReLU, MatMul-Add, etc. (5) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reduce precision"
      }), " — if the model can tolerate it, switch to FP16 on GPU delegate. (6) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NNAPI delegate"
      }), " — on Android, enable NNAPI if the SoC supports the ops. (7) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Model redesign"
      }), " — replace heavy ops (e.g., large FC layer with multiple small FC layers, reduce attention heads). (8) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Thread tuning"
      }), " — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "setIntraOpNumThreads(4)"
      }), " — 4 threads usually optimal on mobile. These steps often yield 5-10x improvement, reaching 40+ FPS on mid-range devices."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ONNX Runtime for Mobile bridges the gap between framework training and on-device deployment. The ONNX format uses protobuf serialization to represent the model graph, weights, and metadata in a hardware-agnostic way. Models are exported from PyTorch (via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "torch.onnx.export"
      }), ") or TensorFlow (via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tf2onnx"
      }), "), with dynamic axes enabling variable-length inputs critical for mobile UX. After export, models undergo three optimization phases: quantization (INT8/UINT8 weights and activations), graph optimizations (constant folding, dead node elimination), and operator fusion (combining adjacent ops into single kernels). For maximum performance, ONNX Runtime delegates computation to NPUs through Android NNAPI, Apple Neural Engine (via CoreML), and Qualcomm SNPE — achieving 5-10x speedup over CPU. The ONNX Runtime Mobile SDK provides cross-platform C++/Java/Swift APIs with memory optimization strategies (memory pattern reuse, sequential execution, arena control). Mastering this pipeline enables an AI engineer to ship real-time, battery-efficient AI features on billions of mobile devices worldwide."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " Which ONNX protobuf message contains the list of operator nodes in the computation graph?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) ModelProto"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) GraphProto"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) NodeProto"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) TensorProto"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A1:"
      }), " b) GraphProto — The GraphProto contains all node, initializer, input, and output definitions. ModelProto wraps the GraphProto with metadata. NodeProto represents a single operator."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2:"
      }), " What is the purpose of the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dynamic_axes"
      }), " parameter in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "torch.onnx.export"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) Enables dynamic memory allocation during inference"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) Specifies which tensor dimensions can vary at runtime"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) Dynamically selects the opset version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Enables dynamic quantization of weights"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A2:"
      }), " b) Specifies which tensor dimensions can vary at runtime — e.g., batch size or sequence length. Without dynamic axes, ONNX exports with fixed shapes, making the model incompatible with variable-length inputs on mobile."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3:"
      }), " Which optimization technique provides the largest model size reduction for mobile deployment?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) Operator fusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) Constant folding"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) INT8 quantization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) Dead node elimination"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A3:"
      }), " c) INT8 quantization — Reduces weight size by 4x (FP32 → INT8). Operator fusion and dead node elimination reduce runtime compute but have minimal impact on model file size. Constant folding removes compute but not weights."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4:"
      }), " Which Android API provides unified access to NPU, DSP, and GPU for neural network inference?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) OpenCL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) Vulkan"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) NNAPI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) SNPE"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A4:"
      }), " c) NNAPI (Neural Networks API) — Android's standard hardware acceleration API. OpenCL and Vulkan are GPU compute APIs. SNPE is Qualcomm-specific."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5:"
      }), " What is the typical FPS improvement when switching from CPU-only to Apple Neural Engine for INT8 models on A17 Pro?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a) 1.5x"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "b) 2x"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "c) 4x"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d) 8x"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A5:"
      }), " d) 8x — A17 Pro's 16-core Neural Engine achieves ~8x vs CPU for INT8 inference. This is due to the ANE's dedicated matrix multiply units operating at 35 TOPS with low power."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 1:"
      }), " Export a ResNet-18 model from PyTorch to ONNX with dynamic batch dimension. Validate using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onnx.checker.check_model"
      }), " and run inference with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onnxruntime"
      }), ". Measure the latency difference between batch_size=1 and batch_size=8."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 2:"
      }), " Take the exported model from Exercise 1 and apply dynamic INT8 quantization. Compare the model file size, inference latency, and output accuracy (check ", (0,jsx_runtime.jsx)(_components.code, {
        children: "np.allclose"
      }), " between FP32 and INT8 outputs). Report the differences as percentages."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 3:"
      }), " Write a Python function that automates the full deployment pipeline: (a) load a PyTorch model, (b) export to ONNX, (c) validate, (d) quantize to INT8, (e) optimize graph, (f) benchmark. The function should accept a model class and return a dictionary of metrics (size, latency, FPS)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 4:"
      }), " Profile memory usage for a BERT-tiny model (HuggingFace ", (0,jsx_runtime.jsx)(_components.code, {
        children: "prajjwal1/bert-tiny"
      }), ") exported to ONNX. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "psutil"
      }), " or Android memory profiling. Compare FP32 vs INT8 memory. Report peak memory and model load memory."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 5:"
      }), " Simulate NNAPI delegation by writing a script that compares ONNX Runtime performance with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CPUExecutionProvider"
      }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NnapiExecutionProvider"
      }), ". Use a Qualcomm Snapdragon device or Android emulator. If no device is available, write the C++/Kotlin code structure showing how to configure both providers with fallback."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ONNX is the interoperability layer"
        }), " — train in any framework (PyTorch, TF, JAX), export to the common ONNX format, then deploy anywhere."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Model export requires care"
        }), " — dynamic axes, correct I/O specs, opset version, and validation are essential to avoid runtime failures on mobile."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "INT8 quantization is the single most impactful optimization"
        }), " — 4x smaller models, 2-4x faster inference, minimal accuracy loss on most architectures."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Operator fusion reduces memory traffic"
        }), " — combining Conv+BN+ReLU or MatMul+Add into single kernels eliminates DRAM round-trips and kernel launch overhead."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NPU delegation gives 5-10x speedup"
        }), " — using NNAPI (Android), CoreML/ANE (Apple), or SNPE (Qualcomm) moves compute to dedicated low-power accelerators."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ONNX Runtime Mobile is the production SDK"
        }), " — cross-platform C/C++/Java/Swift APIs, memory optimizations, and execution providers make it the standard for mobile AI deployment."]
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
            children: "Explain the core idea of ONNX Runtime for Mobile in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates ONNX Runtime for Mobile."
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
            children: "Describe a production bug caused by misunderstanding ONNX Runtime for Mobile. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on ONNX Runtime for Mobile from 10 users to 10 million?"
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
            children: "Compare ONNX Runtime for Mobile with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on ONNX Runtime for Mobile."
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
            children: "How does ONNX Runtime for Mobile behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of ONNX Runtime for Mobile run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of ONNX Runtime for Mobile that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name ONNX Runtime for Mobile explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using ONNX Runtime for Mobile\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies ONNX Runtime for Mobile to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside ONNX Runtime for Mobile (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of ONNX Runtime for Mobile and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a ONNX Runtime for Mobile-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic ONNX Runtime for Mobile interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply ONNX Runtime for Mobile in production today?"
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
        }), " ONNX Runtime for Mobile builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for ONNX Runtime for Mobile before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for ONNX Runtime for Mobile is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for ONNX Runtime for Mobile in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the ONNX Runtime for Mobile chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers ONNX Runtime for Mobile is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to ONNX Runtime for Mobile is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing ONNX Runtime for Mobile is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug ONNX Runtime for Mobile issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to ONNX Runtime for Mobile in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving ONNX Runtime for Mobile that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of ONNX Runtime for Mobile is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain ONNX Runtime for Mobile in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for ONNX Runtime for Mobile and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of ONNX Runtime for Mobile on an empty input?"
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
            children: "Complete Medium exercises, explain ONNX Runtime for Mobile to someone else"
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
        children: "Always write a one-line example of ONNX Runtime for Mobile from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered ONNX Runtime for Mobile when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining ONNX Runtime for Mobile twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own ONNX Runtime for Mobile snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of ONNX Runtime for Mobile listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link ONNX Runtime for Mobile to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of ONNX Runtime for Mobile by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain ONNX Runtime for Mobile to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of ONNX Runtime for Mobile"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on ONNX Runtime for Mobile (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real ONNX Runtime for Mobile problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements ONNX Runtime for Mobile"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for ONNX Runtime for Mobile"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on ONNX Runtime for Mobile"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how ONNX Runtime for Mobile fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how ONNX Runtime for Mobile is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where ONNX Runtime for Mobile is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of ONNX Runtime for Mobile, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is ONNX Runtime for Mobile asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ONNX Runtime for Mobile is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with ONNX Runtime for Mobile."
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
        children: "ONNX Runtime for Mobile emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for ONNX Runtime for Mobile today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about ONNX Runtime for Mobile — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around ONNX Runtime for Mobile changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing ONNX Runtime for Mobile."
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
        children: "ONNX Runtime for Mobile appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding ONNX Runtime for Mobile helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the ONNX Runtime for Mobile concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, ONNX Runtime for Mobile skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply ONNX Runtime for Mobile to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ONNX Runtime for Mobile is like a recipe"
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
        }), " — this chapter contributes the ONNX Runtime for Mobile skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "31mobileai-01onnxruntimemobile-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of ONNX Runtime for Mobile in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "31mobileai-01onnxruntimemobile-flash2",
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
      "data-qid": "31mobileai-01onnxruntimemobile-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard ONNX Runtime for Mobile approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "31mobileai-01onnxruntimemobile-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is ONNX Runtime for Mobile NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "31mobileai-01onnxruntimemobile-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is ONNX Runtime for Mobile applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for ONNX Runtime for Mobile (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing ONNX Runtime for Mobile (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for ONNX Runtime for Mobile-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running ONNX Runtime for Mobile in production at scale"
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
        children: "Testing: pytest for unit tests of ONNX Runtime for Mobile code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on ONNX Runtime for Mobile"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in ONNX Runtime for Mobile code."]
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
        }), " or your IDE's debugger to step through the ONNX Runtime for Mobile example code."]
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
        children: "Explain ONNX Runtime for Mobile in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of ONNX Runtime for Mobile."
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
        children: "Tell me about a time you debugged a ONNX Runtime for Mobile problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where ONNX Runtime for Mobile is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for ONNX Runtime for Mobile."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core ONNX Runtime for Mobile logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain ONNX Runtime for Mobile without notes"
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
        }), ": a small team uses ONNX Runtime for Mobile daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": ONNX Runtime for Mobile patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": ONNX Runtime for Mobile principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": ONNX Runtime for Mobile shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect ONNX Runtime for Mobile to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/31-mobile-ai/02-tflite-coreml",
        children: "02 — TensorFlow Lite & CoreML"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ONNX Runtime for Mobile, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of ONNX Runtime for Mobile depends on input size and distribution — always benchmark for your own data."
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