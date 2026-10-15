"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[6296],{

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
const site_docs_courses_ai_engineering_placement_31_mobile_ai_01_onnx_runtime_mobile_md_175_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/mobile-ai/01-onnx-runtime-mobile","title":"ONNX Runtime for Mobile","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/31-mobile-ai/01-onnx-runtime-mobile.md","sourceDirName":"courses/ai-engineering-placement/31-mobile-ai","slug":"/ai-engineering-placement/31-mobile-ai/01-onnx-runtime-mobile","permalink":"/ai-engineering-journey/ai-engineering-placement/31-mobile-ai/01-onnx-runtime-mobile","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":351,"frontMatter":{"id":"01-onnx-runtime-mobile","slug":"/ai-engineering-placement/31-mobile-ai/01-onnx-runtime-mobile","title":"ONNX Runtime for Mobile","sidebar_label":"ONNX Runtime for Mobile","sidebar_position":351},"sidebar":"placementSidebar","previous":{"title":"31 — Mobile AI & Edge Deployment","permalink":"/ai-engineering-journey/ai-engineering-placement/31-mobile-ai"},"next":{"title":"02 — TensorFlow Lite & CoreML","permalink":"/ai-engineering-journey/ai-engineering-placement/31-mobile-ai/02-tflite-coreml"}}');
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
	sidebar_position: 351
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
        children: "flowchart LR\r\n    subgraph Build[\"Model Development\"]\r\n        A[PyTorch Model] --> B[torch.onnx.export]\r\n        C[TensorFlow Model] --> D[tf2onnx.convert]\r\n    end\r\n    B --> E[ONNX Model<br/>ModelProto]\r\n    D --> E\r\n    E --> F[Validation<br/>onnx.checker]\r\n    F --> G[Optimization<br/>onnxoptimizer]\r\n    G --> H[Quantization<br/>INT8 / UINT8]\r\n    H --> I[Operator Fusion]\r\n    I --> J[NPU Delegate<br/>SNPE / ANE / NNAPI]\r\n    J --> K[ONNX Runtime Mobile<br/>Cross-Platform Inference]\r\n    K --> L[Mobile App<br/>Android / iOS / Windows]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\r\n    subgraph ONNX_Structure[\"ONNX Model Structure\"]\r\n        M[ModelProto] --> MP[ModelProto.<br/>ir_version]\r\n        M --> O[ModelProto.<br/>opset_import]\r\n        M --> GP[GraphProto]\r\n        GP --> N[NodeProto<br/>Operator Nodes]\r\n        GP --> I[ValueInfoProto<br/>Input Tensors]\r\n        GP --> OV[ValueInfoProto<br/>Output Tensors]\r\n        GP --> T[TensorProto<br/>Initializers / Weights]\r\n    end\r\n    N --> Attr[AttributeProto<br/>Attributes]\n"
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
        children: "classDiagram\r\n    class ModelProto {\r\n        int64 ir_version\r\n        repeated OperatorSetIdProto opset_import\r\n        string producer_name\r\n        string producer_version\r\n        string domain\r\n        int64 model_version\r\n        string doc_string\r\n        GraphProto graph\r\n        repeated StringStringEntryProto metadata_props\r\n    }\r\n    class GraphProto {\r\n        repeated NodeProto node\r\n        string name\r\n        repeated ValueInfoProto input\r\n        repeated ValueInfoProto output\r\n        repeated TensorProto initializer\r\n        repeated ValueInfoProto value_info\r\n        string doc_string\r\n        repeated TensorProto sparse_initializer\r\n    }\r\n    class NodeProto {\r\n        repeated string input\r\n        repeated string output\r\n        string name\r\n        string op_type\r\n        string domain\r\n        repeated AttributeProto attribute\r\n    }\r\n    class TensorProto {\r\n        repeated int64 dims\r\n        int32 data_type\r\n        bytes raw_data\r\n        repeated int64 int64_data\r\n        repeated float float_data\r\n        string name\r\n        string doc_string\r\n    }\r\n    class ValueInfoProto {\r\n        string name\r\n        TypeProto type\r\n        string doc_string\r\n    }\r\n    ModelProto -- GraphProto : contains\r\n    GraphProto -- NodeProto : contains\r\n    GraphProto -- TensorProto : initializers\r\n    GraphProto -- ValueInfoProto : input/output\r\n    NodeProto -- AttributeProto : has\n"
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
        children: "import onnx\r\nfrom onnx import helper, TensorProto\r\n\r\n# Create a simple graph: Y = W * X + B (Gemm op)\r\n# Input shape: [batch, 4], Output shape: [batch, 3]\r\nX = helper.make_tensor_value_info(\"X\", TensorProto.FLOAT, [\"batch\", 4])\r\nW = helper.make_tensor_value_info(\"W\", TensorProto.FLOAT, [3, 4])\r\nB = helper.make_tensor_value_info(\"B\", TensorProto.FLOAT, [3])\r\nY = helper.make_tensor_value_info(\"Y\", TensorProto.FLOAT, [\"batch\", 3])\r\n\r\n# Create Gemm node (Y = alpha * W * X + beta * B)\r\ngemm = helper.make_node(\r\n    \"Gemm\",              # op_type\r\n    [\"W\", \"X\", \"B\"],     # inputs\r\n    [\"Y\"],               # outputs\r\n    alpha=1.0,           # attributes\r\n    beta=1.0,\r\n    transA=0,\r\n    transB=0,\r\n)\r\n\r\n# Create weight tensors\r\nW_data = helper.make_tensor(\"W\", TensorProto.FLOAT, [3, 4],\r\n                            [0.1]*12)  # 12 float values\r\nB_data = helper.make_tensor(\"B\", TensorProto.FLOAT, [3],\r\n                            [0.0]*3)   # 3 float values\r\n\r\n# Build graph\r\ngraph = helper.make_graph(\r\n    [gemm],              # nodes\r\n    \"simple_linear\",     # graph name\r\n    [X],                 # inputs\r\n    [Y],                 # outputs\r\n    [W_data, B_data],    # initializers\r\n)\r\n\r\n# Build model\r\nmodel = helper.make_model(graph, producer_name=\"onnx-example\")\r\nmodel.opset_import[0].version = 21  # use opset 21\r\n\r\n# Serialize to file\r\nonnx.save(model, \"simple_linear.onnx\")\r\nprint(f\"Model IR version: {model.ir_version}\")\r\nprint(f\"Opset version: {model.opset_import[0].version}\")\r\nprint(f\"Graph inputs: {[i.name for i in model.graph.input]}\")\r\nprint(f\"Graph outputs: {[o.name for o in model.graph.output]}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Model IR version: 9\r\nOpset version: 21\r\nGraph inputs: ['X']\r\nGraph outputs: ['Y']\n"
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
        children: "timeline\r\n    title ONNX Opset Versions (Selected)\r\n    2017 : Opset 1 (initial) : 127 operators\r\n    2018 : Opset 7 : RNN/LSTM/GRU, Loop, If\r\n    2019 : Opset 10 : QuantizeLinear, DequantizeLinear\r\n    2020 : Opset 13 : FusedMatMul, Softmax signed axis\r\n    2021 : Opset 15 : INT4 support, BFloat16\r\n    2022 : Opset 18 : Resize with antialiasing\r\n    2023 : Opset 20 : FP8 (E4M3, E5M2), BlockSparse\r\n    2024 : Opset 21 : GroupNorm, RoPE, GQA, SparseAttention\n"
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
        children: "# Checking op coverage for a model\r\nimport onnx\r\n\r\nmodel = onnx.load(\"model.onnx\")\r\nnodes = model.graph.node\r\nop_types = set(n.op_type for n in nodes)\r\nsupported = {\"Conv\", \"Relu\", \"MaxPool\", \"Add\", \"Mul\", \"Gemm\", \"Softmax\",\r\n             \"BatchNorm\", \"Reshape\", \"Transpose\", \"Concat\", \"Squeeze\"}\r\nunsupported = op_types - supported\r\n\r\nif unsupported:\r\n    print(f\"WARNING: Unsupported ops: {unsupported}\")\r\nelse:\r\n    print(f\"All ops supported: {op_types}\")\n"
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
        children: "import torch\r\nimport torch.nn as nn\r\nimport torch.onnx\r\n\r\nclass SimpleClassifier(nn.Module):\r\n    \"\"\"A simple 3-layer classifier for mobile deployment.\"\"\"\r\n    def __init__(self, input_dim=128, hidden_dim=64, num_classes=10):\r\n        super().__init__()\r\n        self.fc1 = nn.Linear(input_dim, hidden_dim)\r\n        self.relu = nn.ReLU()\r\n        self.fc2 = nn.Linear(hidden_dim, hidden_dim)\r\n        self.relu2 = nn.ReLU()\r\n        self.fc3 = nn.Linear(hidden_dim, num_classes)\r\n\r\n    def forward(self, x):\r\n        x = self.relu(self.fc1(x))\r\n        x = self.relu2(self.fc2(x))\r\n        x = self.fc3(x)\r\n        return x\r\n\r\n# Instantiate and train (simulate trained weights)\r\nmodel = SimpleClassifier()\r\nmodel.eval()  # IMPORTANT: switch to eval mode\r\n\r\n# Create dummy input (batch=1, input_dim=128)\r\ndummy_input = torch.randn(1, 128)\r\n\r\n# Export to ONNX\r\ntorch.onnx.export(\r\n    model,                              # model\r\n    dummy_input,                        # example input\r\n    \"classifier.onnx\",                  # output file\r\n    export_params=True,                 # store trained weights\r\n    opset_version=21,                   # opset version\r\n    do_constant_folding=True,           # fold constants\r\n    input_names=[\"input\"],              # input tensor name\r\n    output_names=[\"output\"],            # output tensor name\r\n    dynamic_axes={                      # dynamic batch dimension\r\n        \"input\": {0: \"batch_size\"},\r\n        \"output\": {0: \"batch_size\"},\r\n    },\r\n)\r\n\r\nprint(\"Exported classifier.onnx successfully\")\n"
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
        children: "# Dynamic axes for a transformer model\r\ndynamic_axes = {\r\n    \"input_ids\": {0: \"batch_size\", 1: \"seq_length\"},\r\n    \"attention_mask\": {0: \"batch_size\", 1: \"seq_length\"},\r\n    \"logits\": {0: \"batch_size\", 1: \"seq_length\"},\r\n}\r\n\r\n# For a vision model with fixed image size but variable batch\r\ndynamic_axes_vision = {\r\n    \"image\": {0: \"batch_size\"},\r\n    \"boxes\": {0: \"num_detections\"},\r\n    \"scores\": {0: \"num_detections\"},\r\n}\n"
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
        children: "# Export with detailed I/O specs for mobile\r\ntorch.onnx.export(\r\n    model,\r\n    dummy_input,\r\n    \"mobile_model.onnx\",\r\n    export_params=True,\r\n    opset_version=21,\r\n    do_constant_folding=True,\r\n    input_names=[\"input\"],\r\n    output_names=[\"output\", \"embedding\"],  # multiple outputs\r\n    dynamic_axes={\r\n        \"input\": {0: \"batch_size\"},\r\n        \"output\": {0: \"batch_size\"},\r\n        \"embedding\": {0: \"batch_size\"},\r\n    },\r\n    verbose=True,           # print exported nodes\r\n)\r\n\r\n# Verify exported model\r\nimport onnx\r\nonnx_model = onnx.load(\"mobile_model.onnx\")\r\nonnx.checker.check_model(onnx_model)\r\nprint(\"Model validated successfully\")\r\n\r\n# Print input/output details\r\nfor inp in onnx_model.graph.input:\r\n    print(f\"Input: {inp.name} shape={inp.type.tensor_type.shape}\")\r\nfor out in onnx_model.graph.output:\r\n    print(f\"Output: {out.name} shape={out.type.tensor_type.shape}\")\n"
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
        children: "from transformers import AutoModelForSequenceClassification, AutoTokenizer\r\nimport torch\r\n\r\nmodel_name = \"microsoft/xtremedistil-l6-h256-uncased\"  # small mobile-friendly model\r\ntokenizer = AutoTokenizer.from_pretrained(model_name)\r\nmodel = AutoModelForSequenceClassification.from_pretrained(model_name)\r\nmodel.eval()\r\n\r\n# Create dummy input\r\ntext = \"ONNX Runtime Mobile is fast\"\r\ninputs = tokenizer(text, return_tensors=\"pt\")\r\n\r\n# Export with dynamic sequence length\r\ntorch.onnx.export(\r\n    model,\r\n    (inputs[\"input_ids\"], inputs[\"attention_mask\"]),\r\n    \"mobile_bert.onnx\",\r\n    input_names=[\"input_ids\", \"attention_mask\"],\r\n    output_names=[\"logits\"],\r\n    dynamic_axes={\r\n        \"input_ids\": {0: \"batch_size\", 1: \"sequence_length\"},\r\n        \"attention_mask\": {0: \"batch_size\", 1: \"sequence_length\"},\r\n        \"logits\": {0: \"batch_size\"},\r\n    },\r\n    opset_version=21,\r\n    do_constant_folding=True,\r\n)\r\n\r\n# Check size\r\nimport os\r\nsize_mb = os.path.getsize(\"mobile_bert.onnx\") / 1e6\r\nprint(f\"Model size: {size_mb:.2f} MB\")\n"
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
        children: "import tensorflow as tf\r\nimport tf2onnx\r\n\r\n# Build a simple Keras model\r\nmodel = tf.keras.Sequential([\r\n    tf.keras.layers.Conv2D(32, (3, 3), activation=\"relu\", input_shape=(224, 224, 3)),\r\n    tf.keras.layers.MaxPooling2D((2, 2)),\r\n    tf.keras.layers.Conv2D(64, (3, 3), activation=\"relu\"),\r\n    tf.keras.layers.MaxPooling2D((2, 2)),\r\n    tf.keras.layers.Conv2D(128, (3, 3), activation=\"relu\"),\r\n    tf.keras.layers.GlobalAveragePooling2D(),\r\n    tf.keras.layers.Dense(10, activation=\"softmax\"),\r\n])\r\nmodel.compile(optimizer=\"adam\", loss=\"categorical_crossentropy\")\r\nmodel.summary()\r\n\r\n# Convert to ONNX\r\nspec = (tf.TensorSpec((None, 224, 224, 3), tf.float32, name=\"input\"),)\r\noutput_path = \"mobilenet_style.onnx\"\r\n\r\nmodel_proto, _ = tf2onnx.convert.from_keras(\r\n    model,\r\n    input_signature=spec,\r\n    opset=21,\r\n    output_path=output_path,\r\n)\r\n\r\nprint(f\"Exported {output_path}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exporting a SavedModel:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Export from a TF SavedModel directory\r\nimport tf2onnx\r\n\r\nsaved_model_dir = \"path/to/saved_model\"\r\noutput_path = \"converted_model.onnx\"\r\n\r\nmodel_proto, _ = tf2onnx.convert.from_saved_model(\r\n    saved_model_dir,\r\n    input_signature=[tf.TensorSpec([None, 224, 224, 3], tf.float32, name=\"input\")],\r\n    opset=21,\r\n    output_path=output_path,\r\n)\r\n\r\nprint(f\"Converted SavedModel to ONNX: {output_path}\")\n"
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
        children: "import onnx\r\nimport onnxruntime as ort\r\nimport numpy as np\r\n\r\ndef validate_onnx_model(model_path: str):\r\n    \"\"\"Full validation pipeline for an ONNX model.\"\"\"\r\n    print(f\"Validating: {model_path}\")\r\n\r\n    # Step 1: Structural check\r\n    model = onnx.load(model_path)\r\n    try:\r\n        onnx.checker.check_model(model)\r\n        print(\"[PASS] Structural check passed\")\r\n    except onnx.checker.ValidationError as e:\r\n        print(f\"[FAIL] Structural check: {e}\")\r\n        return False\r\n\r\n    # Step 2: Shape inference\r\n    try:\r\n        inferred = onnx.shape_inference.infer_shapes(model)\r\n        print(\"[PASS] Shape inference passed\")\r\n    except Exception as e:\r\n        print(f\"[WARN] Shape inference failed: {e}\")\r\n\r\n    # Step 3: Version check\r\n    ir_version = model.ir_version\r\n    opset_version = model.opset_import[0].version\r\n    print(f\"  IR version: {ir_version}\")\r\n    print(f\"  Opset version: {opset_version}\")\r\n\r\n    # Step 4: Runtime inference test\r\n    try:\r\n        session = ort.InferenceSession(model_path)\r\n        input_name = session.get_inputs()[0].name\r\n        input_shape = session.get_inputs()[0].shape\r\n        input_type = session.get_inputs()[0].type\r\n\r\n        # Create dummy input matching expected shape\r\n        batch_dim = input_shape[0] if input_shape[0] else 1\r\n        dummy_shape = [\r\n            batch_dim if d == \"batch_size\" or d is None else (\r\n                1 if isinstance(d, str) else d\r\n            )\r\n            for d in input_shape\r\n        ]\r\n\r\n        dummy_input = np.random.randn(*dummy_shape).astype(np.float32)\r\n        outputs = session.run(None, {input_name: dummy_input})\r\n        print(f\"[PASS] Runtime inference passed\")\r\n        print(f\"  Input shape: {input_shape}\")\r\n        print(f\"  Output shape: {outputs[0].shape}\")\r\n\r\n    except Exception as e:\r\n        print(f\"[FAIL] Runtime inference: {e}\")\r\n        return False\r\n\r\n    # Step 5: Check model size\r\n    import os\r\n    size_kb = os.path.getsize(model_path) / 1024\r\n    print(f\"  Model file size: {size_kb:.1f} KB\")\r\n    if size_kb > 50000:\r\n        print(\"  [WARN] Model > 50 MB — consider quantization for mobile\")\r\n\r\n    return True\r\n\r\n# Run validation\r\nvalidate_onnx_model(\"classifier.onnx\")\r\nvalidate_onnx_model(\"mobile_bert.onnx\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Validating: classifier.onnx\r\n[PASS] Structural check passed\r\n[PASS] Shape inference passed\r\n  IR version: 9\r\n  Opset version: 21\r\n[PASS] Runtime inference passed\r\n  Input shape: ['batch_size', 128]\r\n  Output shape: ['batch_size', 10]\r\n  Model file size: 44.5 KB\r\n\r\nValidating: mobile_bert.onnx\r\n[PASS] Structural check passed\r\n[PASS] Shape inference passed\r\n  IR version: 9\r\n  Opset version: 21\r\n[PASS] Runtime inference passed\r\n  Input shape: ['batch_size', 'sequence_length']\r\n  Output shape: ['batch_size', 10]\r\n  Model file size: 6240.2 KB\n"
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
        children: "import onnx\r\nfrom onnxruntime.quantization import quantize_dynamic, QuantType\r\nfrom onnxruntime.quantization import quantize_static, QuantizationMode\r\nfrom onnxruntime.quantization import CalibrationMethod\r\n\r\n# Dynamic quantization (weights only, activations remain FP32)\r\n# Good for small accuracy loss and easy setup\r\nquantize_dynamic(\r\n    model_input=\"mobile_bert.onnx\",\r\n    model_output=\"mobile_bert_int8.onnx\",\r\n    weight_type=QuantType.QInt8,     # QInt8 or QUInt8\r\n)\r\n\r\n# Static quantization (weights + activations, requires calibration data)\r\n# Better compression and speed, but needs representative data\r\n\r\ndef create_calibration_data(num_samples=100, seq_len=128):\r\n    \"\"\"Generate dummy calibration data for static quantization.\"\"\"\r\n    return {\r\n        \"input_ids\": np.random.randint(0, 30522, (num_samples, seq_len)).astype(np.int64),\r\n        \"attention_mask\": np.ones((num_samples, seq_len), dtype=np.int64),\r\n    }\r\n\r\nfrom onnxruntime.quantization import calibrate\r\ncalib_data = create_calibration_data()\r\n\r\nquantize_static(\r\n    model_input=\"mobile_bert.onnx\",\r\n    model_output=\"mobile_bert_int8_static.onnx\",\r\n    calibration_data_reader=calibrate.CalibrationDataReader,\r\n    quant_format=QuantMode.QDQ,       # Quantize-Dequantize nodes\r\n    per_channel=True,                  # Per-channel quantization for Conv\r\n    activation_type=QuantType.QInt8,\r\n    weight_type=QuantType.QInt8,\r\n    calibrate_method=CalibrationMethod.MinMax,\r\n)\r\n\r\nprint(\"Static quantization complete\")\n"
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
        children: "import torch\r\nimport torch.quantization as quant\r\n\r\nclass QATClassifier(nn.Module):\r\n    \"\"\"A QAT-ready classifier with fake quantization nodes.\"\"\"\r\n    def __init__(self, input_dim=128, hidden_dim=64, num_classes=10):\r\n        super().__init__()\r\n        self.quant = quant.QuantStub()\r\n        self.fc1 = nn.Linear(input_dim, hidden_dim)\r\n        self.relu = nn.ReLU()\r\n        self.fc2 = nn.Linear(hidden_dim, hidden_dim)\r\n        self.relu2 = nn.ReLU()\r\n        self.fc3 = nn.Linear(hidden_dim, num_classes)\r\n        self.dequant = quant.DeQuantStub()\r\n\r\n    def forward(self, x):\r\n        x = self.quant(x)\r\n        x = self.relu(self.fc1(x))\r\n        x = self.relu2(self.fc2(x))\r\n        x = self.fc3(x)\r\n        x = self.dequant(x)\r\n        return x\r\n\r\n# Setup QAT\r\nmodel = QATClassifier()\r\nmodel.qconfig = quant.get_default_qat_qconfig(\"fbgemm\")\r\nmodel = quant.prepare_qat(model, inplace=True)\r\n\r\n# Train with fake quantization\r\n# ... (standard training loop) ...\r\n\r\n# Convert to quantized model\r\nmodel.eval()\r\nmodel = quant.convert(model, inplace=True)\r\n\r\n# Export to ONNX\r\ndummy_input = torch.randn(1, 128)\r\ntorch.onnx.export(\r\n    model,\r\n    dummy_input,\r\n    \"classifier_qat.onnx\",\r\n    opset_version=21,\r\n)\n"
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
        children: "from onnxruntime.transformers import optimizer as opt\r\n\r\n# Apply ONNX Runtime transformer optimization\r\noptimized_model = opt.optimize_model(\r\n    \"mobile_bert.onnx\",\r\n    model_type=\"bert\",         # or 'bert', 'gpt2', 'vit', None for generic\r\n    num_heads=12,\r\n    hidden_size=256,\r\n    optimization_level=opt.OptimizationLevel.ALL,  # Enable all optimizations\r\n)\r\n\r\n# Save optimized model\r\noptimized_model.save_model_to_file(\"mobile_bert_optimized.onnx\")\r\nprint(\"Graph optimizations applied\")\n"
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
        children: "flowchart LR\r\n    subgraph Before[\"Before Fusion\"]\r\n        A[Conv] --> B[BatchNorm] --> C[Relu] --> D[Add]\r\n    end\r\n    subgraph After[\"After Fusion\"]\r\n        E[Conv_BatchNorm_Relu_Add]\r\n    end\r\n    Before --> After\n"
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
        children: "flowchart TB\r\n    subgraph App[\"Mobile App\"]\r\n        A[ONNX Runtime Mobile]\r\n    end\r\n    subgraph Delegates[\"Hardware Delegates\"]\r\n        B[XNNPACK<br/>ARM CPU]\r\n        C[NNAPI<br/>Android NPU/DSP/GPU]\r\n        D[CoreML<br/>Apple ANE]\r\n        E[SNPE<br/>Qualcomm DSP]\r\n    end\r\n    A --> B\r\n    A --> C\r\n    A --> D\r\n    A --> E\r\n    C --> F[Hexagon DSP]\r\n    C --> G[Adreno GPU]\r\n    D --> H[Apple Neural Engine]\r\n    E --> I[Qualcomm Hexagon]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "171-android-nnapi",
      children: "1.7.1 Android NNAPI"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Android Neural Networks API (NNAPI) provides a unified interface to NPU, DSP, and GPU on Android devices. ONNX Runtime Mobile includes a built-in NNAPI execution provider."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Test NNAPI delegate availability in Python (Android only)\r\nimport onnxruntime as ort\r\n\r\n# Check available providers\r\nprint(\"Available providers:\")\r\nfor p in ort.get_available_providers():\r\n    print(f\"  - {p}\")\r\n\r\n# Create session with NNAPI (on Android device or emulator)\r\nnnapi_options = ort.SessionOptions()\r\nnnapi_options.graph_optimization_level = ort.GraphOptimizationLevel.ORT_ENABLE_ALL\r\n\r\n# NNAPI provider with options\r\nprovider_options = [\r\n    {\r\n        \"use_uint8_as_uint8\": \"1\",          # Use UINT8 natively\r\n        \"cpu_only\": \"0\",                     # Use NPU if available\r\n    }\r\n]\r\n\r\nsession = ort.InferenceSession(\r\n    \"mobile_bert_optimized.onnx\",\r\n    sess_options=nnapi_options,\r\n    providers=[\"NnapiExecutionProvider\", \"CPUExecutionProvider\"],\r\n    provider_options=[provider_options, {}],\r\n)\r\n\r\nprint(f\"Using providers: {session.get_providers()}\")\n"
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
        children: "# CoreML delegate for Apple Neural Engine (on macOS/iOS)\r\nimport onnxruntime as ort\r\n\r\ncoreml_options = ort.SessionOptions()\r\ncoreml_options.enable_cpu_mem_arena = False  # Reduce memory\r\n\r\n# CoreML provider with ANE preference\r\nprovider_options = [\r\n    {\r\n        \"ComputeUnits\": \"ALL\",    # ALL, CPU_ONLY, CPU_AND_NE, CPU_AND_GPU\r\n    }\r\n]\r\n\r\nsession = ort.InferenceSession(\r\n    \"mobile_bert_optimized.onnx\",\r\n    sess_options=coreml_options,\r\n    providers=[\"CoreMLExecutionProvider\", \"CPUExecutionProvider\"],\r\n    provider_options=[provider_options, {}],\r\n)\r\n\r\n# CoreML compute units options:\r\n# \"ALL\"           - Uses Neural Engine + GPU + CPU\r\n# \"CPU_AND_NE\"    - Neural Engine + CPU (best for inference)\r\n# \"CPU_AND_GPU\"   - GPU + CPU (best for training)\r\n# \"CPU_ONLY\"      - CPU only (fallback)\n"
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
        children: "# SNPE delegate (on Qualcomm devices)\r\nimport onnxruntime as ort\r\n\r\nsnpe_options = ort.SessionOptions()\r\n\r\n# SNPE provider with Hexagon DSP targeting\r\nprovider_options = [\r\n    {\r\n        \"runtime\": \"DSP\",           # DSP, GPU, CPU, AIP_FIXED8\r\n        \"isUint8Rpc\": \"1\",          # Use UINT8 RPC to DSP\r\n        \"enableInitCache\": \"1\",     # Cache initialization\r\n    }\r\n]\r\n\r\nsession = ort.InferenceSession(\r\n    \"model_int8.onnx\",\r\n    sess_options=snpe_options,\r\n    providers=[\"SnpeExecutionProvider\", \"CPUExecutionProvider\"],\r\n    provider_options=[provider_options, {}],\r\n)\n"
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
        children: "// ONNX Runtime Mobile C++ inference example\r\n// File: onnx_mobile_inference.cpp\r\n\r\n#include <ortmobile/onnxruntime_cxx_api.h>\r\n#include <vector>\r\n#include <iostream>\r\n\r\nclass MobileInferenceEngine {\r\nprivate:\r\n    Ort::Env env;\r\n    Ort::SessionOptions session_options;\r\n    std::unique_ptr<Ort::Session> session;\r\n    Ort::MemoryInfo memory_info;\r\n\r\npublic:\r\n    MobileInferenceEngine(const std::string& model_path)\r\n        : env(ORT_LOGGING_LEVEL_WARNING, \"mobile-inference\"),\r\n          memory_info(\r\n              Ort::MemoryInfo::CreateCpu(\r\n                  OrtArenaAllocator, OrtMemTypeDefault\r\n              )\r\n          ) {\r\n\r\n        // Configure session for mobile\r\n        session_options.SetGraphOptimizationLevel(\r\n            GraphOptimizationLevel::ORT_ENABLE_ALL\r\n        );\r\n        session_options.SetIntraOpNumThreads(4);  // 4 threads\r\n        session_options.SetExecutionMode(\r\n            ExecutionMode::ORT_SEQUENTIAL\r\n        );\r\n\r\n        // Enable memory optimization\r\n        session_options.EnableCpuMemArena();\r\n\r\n        // Load model from bundled asset\r\n        session = std::make_unique<Ort::Session>(\r\n            env, model_path.c_str(), session_options\r\n        );\r\n    }\r\n\r\n    std::vector<float> run_inference(\r\n        const std::vector<float>& input_data,\r\n        const std::vector<int64_t>& input_shape\r\n    ) {\r\n        // Get input/output names\r\n        Ort::AllocatorWithDefaultOptions allocator;\r\n        auto input_name = session->GetInputNameAllocated(0, allocator);\r\n        auto output_name = session->GetOutputNameAllocated(0, allocator);\r\n        const char* input_names[] = {input_name.get()};\r\n        const char* output_names[] = {output_name.get()};\r\n\r\n        // Create input tensor\r\n        auto input_tensor = Ort::Value::CreateTensor<float>(\r\n            memory_info,\r\n            const_cast<float*>(input_data.data()),\r\n            input_data.size(),\r\n            input_shape.data(),\r\n            input_shape.size()\r\n        );\r\n\r\n        // Run inference\r\n        auto output_tensors = session->Run(\r\n            Ort::RunOptions{},\r\n            input_names,\r\n            &input_tensor,\r\n            1,\r\n            output_names,\r\n            1\r\n        );\r\n\r\n        // Extract output\r\n        auto* output_data = output_tensors[0].GetTensorMutableData<float>();\r\n        auto output_shape = output_tensors[0].GetTensorTypeAndShapeInfo().GetShape();\r\n        size_t output_size = 1;\r\n        for (auto dim : output_shape) output_size *= dim;\r\n\r\n        return std::vector<float>(output_data, output_data + output_size);\r\n    }\r\n\r\n    ~MobileInferenceEngine() = default;\r\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "182-javakotlin-api-for-android",
      children: "1.8.2 Java/Kotlin API for Android"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// ONNX Runtime Mobile on Android (Kotlin)\r\n// File: OnnxMobileHelper.kt\r\n\r\nimport ai.onnxruntime.*\r\n\r\nclass OnnxMobileHelper(private val context: Context) {\r\n    private lateinit var ortEnvironment: OrtEnvironment\r\n    private lateinit var ortSession: OrtSession\r\n\r\n    fun loadModel(modelAssetName: String) {\r\n        ortEnvironment = OrtEnvironment.getEnvironment()\r\n\r\n        val sessionOptions = OrtSession.SessionOptions()\r\n        sessionOptions.setIntraOpNumThreads(4)\r\n        sessionOptions.setGraphOptimizationLevel(\r\n            OrtSession.SessionOptions.OptLevel.ALL_OPT\r\n        )\r\n        sessionOptions.addXnnpack()  // Enable XNNPACK for ARM CPU\r\n\r\n        // Load model from assets\r\n        val modelBytes = context.assets.open(modelAssetName).use { it.readBytes() }\r\n        ortSession = ortEnvironment.createSession(modelBytes, sessionOptions)\r\n\r\n        Log.d(\"ONNX\", \"Model loaded: ${ortSession.inputNames.joinToString()}\")\r\n    }\r\n\r\n    fun runInference(inputData: FloatArray): FloatArray {\r\n        val inputTensor = OnnxTensor.createTensor(\r\n            ortEnvironment,\r\n            inputData,\r\n            longArrayOf(1, 128)  // [batch, sequence_length]\r\n        )\r\n\r\n        val result = ortSession.run(mapOf(\"input\" to inputTensor))\r\n        val output = result.get(\"output\") as OnnxTensor\r\n        return output.floatBuffer.array()\r\n    }\r\n\r\n    fun close() {\r\n        ortSession.close()\r\n        ortEnvironment.close()\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "183-performance-benchmarks",
      children: "1.8.3 Performance Benchmarks"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Mobile inference benchmark\r\nimport onnxruntime as ort\r\nimport numpy as np\r\nimport time\r\n\r\ndef benchmark_model(model_path: str, input_shape, num_runs=100, warmup=10):\r\n    \"\"\"Benchmark ONNX inference latency on mobile/desktop.\"\"\"\r\n    session = ort.InferenceSession(\r\n        model_path,\r\n        providers=[\"CPUExecutionProvider\"],\r\n    )\r\n\r\n    input_name = session.get_inputs()[0].name\r\n    input_data = np.random.randn(*input_shape).astype(np.float32)\r\n\r\n    # Warmup\r\n    for _ in range(warmup):\r\n        session.run(None, {input_name: input_data})\r\n\r\n    # Benchmark\r\n    latencies = []\r\n    for _ in range(num_runs):\r\n        start = time.perf_counter()\r\n        session.run(None, {input_name: input_data})\r\n        end = time.perf_counter()\r\n        latencies.append((end - start) * 1000)  # ms\r\n\r\n    # Statistics\r\n    latencies = np.array(latencies)\r\n    return {\r\n        \"model\": model_path,\r\n        \"mean_ms\": np.mean(latencies),\r\n        \"median_ms\": np.median(latencies),\r\n        \"p90_ms\": np.percentile(latencies, 90),\r\n        \"p99_ms\": np.percentile(latencies, 99),\r\n        \"min_ms\": np.min(latencies),\r\n        \"max_ms\": np.max(latencies),\r\n        \"fps\": 1000 / np.mean(latencies),\r\n        \"throughput\": f\"{1000 / np.mean(latencies):.1f} FPS\",\r\n    }\r\n\r\n# Run benchmarks for different model variants\r\nmodels = {\r\n    \"FP32\": (\"mobile_bert.onnx\", (1, 128)),\r\n    \"INT8 Dynamic\": (\"mobile_bert_int8.onnx\", (1, 128)),\r\n    \"INT8 Static\": (\"mobile_bert_int8_static.onnx\", (1, 128)),\r\n    \"Optimized\": (\"mobile_bert_optimized.onnx\", (1, 128)),\r\n}\r\n\r\nprint(f\"{'Model Variant':<20} {'Mean (ms)':<12} {'P90 (ms)':<12} {'FPS':<10}\")\r\nprint(\"-\" * 56)\r\nfor name, (path, shape) in models.items():\r\n    stats = benchmark_model(path, shape, num_runs=100)\r\n    print(f\"{name:<20} {stats['mean_ms']:<12.2f} {stats['p90_ms']:<12.2f} \"\r\n          f\"{stats['fps']:<10.1f}\")\n"
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
        children: "import onnxruntime as ort\r\nimport psutil  # Mobile: use android.os.Debug\r\n\r\ndef profile_memory(model_path: str):\r\n    \"\"\"Profile memory usage during inference.\"\"\"\r\n    # Before loading\r\n    mem_before = psutil.Process().memory_info().rss / 1e6\r\n\r\n    # Load model with memory optimization\r\n    options = ort.SessionOptions()\r\n    options.enable_cpu_mem_arena = False         # Disable memory arena\r\n    options.enable_mem_pattern = True            # Enable memory pattern\r\n    options.execution_mode = ort.ExecutionMode.ORT_SEQUENTIAL\r\n\r\n    session = ort.InferenceSession(model_path, sess_options=options)\r\n\r\n    mem_after_load = psutil.Process().memory_info().rss / 1e6\r\n\r\n    # Run inference\r\n    input_data = np.random.randn(1, 128).astype(np.float32)\r\n    session.run(None, {session.get_inputs()[0].name: input_data})\r\n\r\n    mem_after_infer = psutil.Process().memory_info().rss / 1e6\r\n\r\n    print(f\"Memory before:     {mem_before:.1f} MB\")\r\n    print(f\"Memory after load: {mem_after_load:.1f} MB (model: {mem_after_load - mem_before:.1f} MB)\")\r\n    print(f\"Memory after run:  {mem_after_infer:.1f} MB\")\r\n\r\n# Memory optimization strategies:\r\n# 1. Use INT8 weights (4x smaller than FP32)\r\n# 2. Enable memory pattern reuse\r\n# 3. Disable memory arena for low-latency apps\r\n# 4. Use sequential execution (lower peak memory)\r\n# 5. Free intermediate tensors eagerly\r\n# 6. Share model across inference instances\n"
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
        children: "def estimate_mobile_memory(model_path: str):\r\n    \"\"\"Estimate total memory needed for mobile inference.\"\"\"\r\n    model = onnx.load(model_path)\r\n    total_weight_size = sum(\r\n        np.prod([d for d in init.dims]) * 4  # FP32 = 4 bytes\r\n        for init in model.graph.initializer\r\n    )\r\n\r\n    # INT8 quantized: divide by 4\r\n    quantized_weight_size = total_weight_size / 4\r\n\r\n    # Activation memory: depends on max intermediate tensor\r\n    # Rule of thumb: 2x the largest intermediate activation\r\n    max_activation_mb = 10  # varies by model architecture\r\n    activation_memory = max_activation_mb * 1e6\r\n\r\n    # Overhead: runtime + I/O buffers\r\n    runtime_overhead = 50 * 1e6  # 50 MB\r\n\r\n    total_fp32 = (total_weight_size + activation_memory + runtime_overhead) / 1e6\r\n    total_int8 = (quantized_weight_size + activation_memory + runtime_overhead) / 1e6\r\n\r\n    print(f\"Estimated memory (FP32): {total_fp32:.1f} MB\")\r\n    print(f\"Estimated memory (INT8): {total_int8:.1f} MB\")\r\n    print(f\"Savings with INT8: {(1 - total_int8/total_fp32)*100:.0f}%\")\r\n\r\n    return total_int8\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "complete-mobile-deployment-pipeline",
      children: "Complete Mobile Deployment Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "#!/usr/bin/env python3\r\n\"\"\"\r\nComplete pipeline: export -> validate -> quantize -> optimize -> benchmark\r\nSimulates a production mobile deployment workflow.\r\n\"\"\"\r\n\r\nimport torch\r\nimport torch.nn as nn\r\nimport onnx\r\nimport onnxruntime as ort\r\nimport numpy as np\r\nimport time\r\nimport os\r\n\r\n# --- Step 1: Define and train a small model ---\r\nclass MobileClassifier(nn.Module):\r\n    \"\"\"Small model suitable for on-device deployment.\"\"\"\r\n    def __init__(self, num_classes=10):\r\n        super().__init__()\r\n        self.features = nn.Sequential(\r\n            nn.Conv2d(3, 16, kernel_size=3, stride=2, padding=1),\r\n            nn.ReLU(),\r\n            nn.Conv2d(16, 32, kernel_size=3, stride=2, padding=1),\r\n            nn.ReLU(),\r\n            nn.AdaptiveAvgPool2d((1, 1)),\r\n        )\r\n        self.classifier = nn.Linear(32, num_classes)\r\n\r\n    def forward(self, x):\r\n        x = self.features(x)\r\n        x = x.view(x.size(0), -1)\r\n        x = self.classifier(x)\r\n        return x\r\n\r\n# --- Step 2: Export to ONNX ---\r\nmodel = MobileClassifier()\r\nmodel.eval()\r\n\r\ndummy_input = torch.randn(1, 3, 224, 224)\r\n\r\ntorch.onnx.export(\r\n    model,\r\n    dummy_input,\r\n    \"mobile_classifier.onnx\",\r\n    export_params=True,\r\n    opset_version=21,\r\n    do_constant_folding=True,\r\n    input_names=[\"input\"],\r\n    output_names=[\"output\"],\r\n    dynamic_axes={\r\n        \"input\": {0: \"batch_size\"},\r\n        \"output\": {0: \"batch_size\"},\r\n    },\r\n)\r\nprint(\"[OK] Exported to ONNX\")\r\n\r\n# --- Step 3: Validate ---\r\nonnx_model = onnx.load(\"mobile_classifier.onnx\")\r\nonnx.checker.check_model(onnx_model)\r\nprint(\"[OK] Model validated\")\r\n\r\n# --- Step 4: Quantize ---\r\nfrom onnxruntime.quantization import quantize_dynamic, QuantType\r\n\r\nquantize_dynamic(\r\n    \"mobile_classifier.onnx\",\r\n    \"mobile_classifier_int8.onnx\",\r\n    weight_type=QuantType.QInt8,\r\n)\r\nprint(\"[OK] Quantized to INT8\")\r\n\r\n# --- Step 5: Optimize ---\r\nfrom onnxruntime.transformers import optimizer as opt\r\n\r\noptimized_model = opt.optimize_model(\r\n    \"mobile_classifier_int8.onnx\",\r\n    model_type=None,  # generic optimization\r\n    optimization_level=opt.OptimizationLevel.ALL,\r\n)\r\noptimized_model.save_model_to_file(\"mobile_classifier_opt.onnx\")\r\nprint(\"[OK] Graph optimized\")\r\n\r\n# --- Step 6: Benchmark ---\r\nfor name in [\"mobile_classifier.onnx\", \"mobile_classifier_int8.onnx\",\r\n             \"mobile_classifier_opt.onnx\"]:\r\n    size_kb = os.path.getsize(name) / 1024\r\n    print(f\"  {name}: {size_kb:.1f} KB\")\r\n\r\n    session = ort.InferenceSession(name)\r\n    input_data = np.random.randn(1, 3, 224, 224).astype(np.float32)\r\n\r\n    # Warmup\r\n    for _ in range(10):\r\n        session.run(None, {\"input\": input_data})\r\n\r\n    # Benchmark\r\n    times = []\r\n    for _ in range(50):\r\n        t0 = time.perf_counter()\r\n        session.run(None, {\"input\": input_data})\r\n        times.append((time.perf_counter() - t0) * 1000)\r\n\r\n    print(f\"    Mean: {np.mean(times):.1f} ms, P90: {np.percentile(times, 90):.1f} ms\")\r\n\r\nprint(\"[OK] Benchmark complete\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[OK] Exported to ONNX\r\n[OK] Model validated\r\n[OK] Quantized to INT8\r\n[OK] Graph optimized\r\n  mobile_classifier.onnx: 448.2 KB\r\n    Mean: 34.2 ms, P90: 35.1 ms\r\n  mobile_classifier_int8.onnx: 117.6 KB\r\n    Mean: 18.7 ms, P90: 19.3 ms\r\n  mobile_classifier_opt.onnx: 110.1 KB\r\n    Mean: 14.2 ms, P90: 14.9 ms\r\n[OK] Benchmark complete\n"
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
            children: "How does ONNX Runtime for Mobile behave differently at scale — memory, throughput, or precision-wise?"
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
        children: "Name the technique explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using ONNX Runtime for Mobile\")."
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
        children: "Review complexity and edge cases for the classic problem in this chapter."
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
        }), " You should memorize this chapter's content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "The time complexity of the standard approach to 01 Onnx Runtime Mobile is ___. — Answer: O(n) typical, O(1) best case"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 01 Onnx Runtime Mobile is ___. — Answer: empty input, boundary values, invalid types"
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
          }), " Your implementation of this technique is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
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
        children: "Official documentation for the primary library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The original research paper introducing this concept (search Google Scholar)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Towards Data Science articles on this topic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The relevant chapter in 'Designing Data-Intensive Applications' by Kleppmann"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub repositories of production implementations Runtime for Mobile"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 31 — builds the foundation for 01 Onnx Runtime Mobile"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 01 Onnx Runtime Mobile with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 01 Onnx Runtime Mobile fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 01 Onnx Runtime Mobile"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 01 Onnx Runtime Mobile"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 01 Onnx Runtime Mobile?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 01 Onnx Runtime Mobile?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 01 Onnx Runtime Mobile asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 01 Onnx Runtime Mobile?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
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
            children: "01 Onnx Runtime Mobile is like a GPS navigation system"
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
          }), " — this chapter contributes the ONNX Runtime for Mobile skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
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
          children: "Review the Theory section and write a one-sentence definition that includes: what it is, how it works, and why it matters for production AI engineering."
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
          children: "The most common mistake is skipping edge cases. Always handle empty input, null values, and boundary conditions before implementing the happy path."
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
          children: "Time complexity depends on the algorithm chosen. Space complexity depends on whether you store intermediate results. Always state both for interview answers."
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
          children: "This technique is not the right choice when simpler alternatives suffice, when the overhead exceeds the benefit, or when the team lacks the expertise to maintain it."
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
          children: "Production stack: use the libraries shown in the code examples, add monitoring with Prometheus/Grafana, test with pytest, and lint with ruff."
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
        children: "The primary library used in the code examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pytest for unit and integration testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ruff + black for linting and formatting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mypy for static type checking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cProfile / py-spy for performance profiling Runtime for Mobile"
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
        }), ": Add structured logging at each stage of the 01 Onnx Runtime Mobile pipeline to identify exactly where the failure occurs."]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_01_onnx_runtime_mobile(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 01 Onnx Runtime Mobile.\r\n\r\n    Key concepts: core concepts, data structures, algorithms, patterns\r\n    Complexity: O(n) typical, O(1) best case\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 01 Onnx Runtime Mobile here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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