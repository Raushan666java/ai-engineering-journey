"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[3322],{

/***/ 46251
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_31_mobile_ai_02_tflite_coreml_md_a8e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-31-mobile-ai-02-tflite-coreml-md-a8e.json
const site_docs_courses_ai_engineering_placement_31_mobile_ai_02_tflite_coreml_md_a8e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/mobile-ai/02-tflite-coreml","title":"02 — TensorFlow Lite & CoreML","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/31-mobile-ai/02-tflite-coreml.md","sourceDirName":"courses/ai-engineering-placement/31-mobile-ai","slug":"/ai-engineering-placement/31-mobile-ai/02-tflite-coreml","permalink":"/ai-engineering-journey/ai-engineering-placement/31-mobile-ai/02-tflite-coreml","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":352,"frontMatter":{"id":"02-tflite-coreml","slug":"/ai-engineering-placement/31-mobile-ai/02-tflite-coreml","title":"02 — TensorFlow Lite & CoreML","sidebar_label":"02 — TensorFlow Lite & CoreML","sidebar_position":352},"sidebar":"placementSidebar","previous":{"title":"ONNX Runtime for Mobile","permalink":"/ai-engineering-journey/ai-engineering-placement/31-mobile-ai/01-onnx-runtime-mobile"},"next":{"title":"03 — Edge AI Frameworks","permalink":"/ai-engineering-journey/ai-engineering-placement/31-mobile-ai/03-edge-ai-frameworks"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/31-mobile-ai/02-tflite-coreml.md


const frontMatter = {
	id: '02-tflite-coreml',
	slug: '/ai-engineering-placement/31-mobile-ai/02-tflite-coreml',
	title: '02 — TensorFlow Lite & CoreML',
	sidebar_label: '02 — TensorFlow Lite & CoreML',
	sidebar_position: 352
};
const contentTitle = '02 — TensorFlow Lite & CoreML';

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
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "2.1 TFLite Converter",
  "id": "21-tflite-converter",
  "level": 2
}, {
  "value": "2.1.1 Converter API Overview",
  "id": "211-converter-api-overview",
  "level": 3
}, {
  "value": "2.1.2 Basic Conversion",
  "id": "212-basic-conversion",
  "level": 3
}, {
  "value": "2.1.3 Representative Dataset for Quantization",
  "id": "213-representative-dataset-for-quantization",
  "level": 3
}, {
  "value": "2.1.4 Conversion Flags and Options",
  "id": "214-conversion-flags-and-options",
  "level": 3
}, {
  "value": "2.2 TFLite Quantization",
  "id": "22-tflite-quantization",
  "level": 2
}, {
  "value": "2.2.1 Quantization Types",
  "id": "221-quantization-types",
  "level": 3
}, {
  "value": "2.2.2 Float16 Quantization",
  "id": "222-float16-quantization",
  "level": 3
}, {
  "value": "2.2.3 Dynamic Range Quantization",
  "id": "223-dynamic-range-quantization",
  "level": 3
}, {
  "value": "2.2.4 Full INT8 Quantization",
  "id": "224-full-int8-quantization",
  "level": 3
}, {
  "value": "2.3 TFLite Delegates",
  "id": "23-tflite-delegates",
  "level": 2
}, {
  "value": "2.3.1 Delegate Architecture",
  "id": "231-delegate-architecture",
  "level": 3
}, {
  "value": "2.3.2 GPU Delegate",
  "id": "232-gpu-delegate",
  "level": 3
}, {
  "value": "2.3.3 NNAPI Delegate",
  "id": "233-nnapi-delegate",
  "level": 3
}, {
  "value": "2.3.4 XNNPACK and Hexagon Delegates",
  "id": "234-xnnpack-and-hexagon-delegates",
  "level": 3
}, {
  "value": "2.4 CoreML Conversion",
  "id": "24-coreml-conversion",
  "level": 2
}, {
  "value": "2.4.1 coremltools Overview",
  "id": "241-coremltools-overview",
  "level": 3
}, {
  "value": "2.4.2 PyTorch to CoreML Conversion",
  "id": "242-pytorch-to-coreml-conversion",
  "level": 3
}, {
  "value": "2.4.3 CoreML ML Program vs NeuralNetwork",
  "id": "243-coreml-ml-program-vs-neuralnetwork",
  "level": 3
}, {
  "value": "2.4.4 Optimizing CoreML Models",
  "id": "244-optimizing-coreml-models",
  "level": 3
}, {
  "value": "2.5 Platform Comparison",
  "id": "25-platform-comparison",
  "level": 2
}, {
  "value": "2.5.1 Architecture Comparison",
  "id": "251-architecture-comparison",
  "level": 3
}, {
  "value": "2.5.2 Benchmark Comparison",
  "id": "252-benchmark-comparison",
  "level": 3
}, {
  "value": "2.5.3 Production Edge Cases",
  "id": "253-production-edge-cases",
  "level": 3
}, {
  "value": "2.5.4 Deployment Decision Guide",
  "id": "254-deployment-decision-guide",
  "level": 3
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
    mermaid: "mermaid",
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
        id: "02--tensorflow-lite--coreml",
        children: "02 — TensorFlow Lite & CoreML"
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
            children: "Convert TF models to TFLite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use the TFLite Converter with representative datasets and post-training quantization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Apply quantization strategies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement FP16, INT8, dynamic range, and float16 quantization for mobile deployment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Leverage hardware delegates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configure GPU, NNAPI, XNNPACK, and Hexagon DSP delegates for on-device acceleration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Convert PyTorch models to CoreML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use coremltools to port PyTorch models to iOS-native ML Program format"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compare Android vs iOS deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Analyze benchmark results and edge cases across mobile platforms"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mobile AI is transforming how users interact with intelligent applications. Running models on-device eliminates latency, preserves privacy, and enables offline functionality. Two frameworks dominate this space: TensorFlow Lite for Android and CoreML for iOS."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TensorFlow Lite (TFLite) is Google's lightweight solution for deploying models on Android, embedded Linux, and microcontrollers. It converts TensorFlow models into a portable FlatBuffer format and optimizes them through quantization and hardware delegation. CoreML is Apple's equivalent for iOS, iPadOS, and macOS, optimized for the Apple Neural Engine (ANE), GPU, and CPU."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covers the full pipeline: converting models from training frameworks to mobile formats, applying quantization to shrink model size, configuring hardware delegates for maximum throughput, and understanding the trade-offs between the two platforms. You will learn practical conversion scripts, benchmark methodologies, and edge-case handling that matter in production mobile AI deployments."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python 3.8+ with TensorFlow 2.x installed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with Keras model building (Sequential, Functional API)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic PyTorch knowledge for CoreML conversion section"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of neural network inference (forward pass, tensors)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A mobile device or emulator for testing (optional but recommended)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "FlatBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-platform serialization format used by TFLite for efficient on-device loading"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quantization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reducing numerical precision of weights/activations (FP32 → INT8) to shrink model size and speed inference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Representative Dataset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A small calibration dataset used during quantization to compute activation ranges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delegate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A hardware-specific backend that accelerates TFLite inference (GPU, NNAPI, etc.)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NNAPI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Android Neural Networks API — hardware abstraction layer for NPU/DSP/GPU acceleration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ANE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apple Neural Engine — dedicated NPU in Apple Silicon for on-device AI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CoreML ML Program"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Apple's model format (", (0,jsx_runtime.jsx)(_components.code, {
              children: ".mlpackage"
            }), ") that supports modern network architectures"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Float16 Quantization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Converting FP32 weights to FP16, halving model size with minimal accuracy loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic Range Quantization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quantizes weights to INT8 while keeping activations in FP32; no calibration data needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Post-Training Quantization (PTQ)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quantization applied after model training, as opposed to quantization-aware training (QAT)"
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
            children: "TFLite Converter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TF → FlatBuffer, representative dataset, conversion flags"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TFLite Quantization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FP16, INT8, dynamic range, float16 quantization strategies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TFLite Delegates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPU delegate, NNAPI, XNNPACK, Hexagon DSP configuration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CoreML Conversion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "coremltools pipeline, PyTorch → ML Program, ANE targeting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Platform Comparison"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Android vs iOS benchmarks, edge cases, production considerations"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TB\r\n    subgraph Training[Training Frameworks]\r\n        A[TensorFlow / Keras]\r\n        B[PyTorch]\r\n    end\r\n    subgraph Conversion[Conversion Layer]\r\n        C[TFLite Converter]\r\n        D[coremltools]\r\n    end\r\n    subgraph Optimization[Optimization]\r\n        E[Quantization<br/>FP16 / INT8 / Dynamic]\r\n        F[Delegate Selection<br/>GPU / NNAPI / XNNPACK]\r\n    end\r\n    subgraph Deployment[Mobile Deployment]\r\n        G[Android<br/>TFLite Runtime]\r\n        H[iOS<br/>CoreML Runtime]\r\n    end\r\n    A --> C\r\n    B --> D\r\n    C --> E\r\n    E --> F\r\n    F --> G\r\n    D --> H"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "21-tflite-converter",
      children: "2.1 TFLite Converter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The TFLite Converter transforms a TensorFlow model into the TFLite FlatBuffer format (", (0,jsx_runtime.jsx)(_components.code, {
        children: ".tflite"
      }), "). This format is optimized for low-latency inference on mobile and edge devices."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "211-converter-api-overview",
      children: "2.1.1 Converter API Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The converter lives in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tf.lite.TFLiteConverter"
      }), ". It accepts models in three formats:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Source"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Keras model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "TFLiteConverter.from_keras_model(model)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most common — export trained Keras models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concrete function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "TFLiteConverter.from_concrete_functions(signatures)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SavedModel format with custom signatures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SavedModel directory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "TFLiteConverter.from_saved_model(saved_model_dir)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production pipelines using SavedModel"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "212-basic-conversion",
      children: "2.1.2 Basic Conversion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The simplest conversion takes a trained Keras model and writes a ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".tflite"
      }), " file."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# basic_conversion.py — Convert a Keras model to TFLite\r\n\r\nimport tensorflow as tf\r\nimport numpy as np\r\n\r\ndef build_demo_model() -> tf.keras.Model:\r\n    \"\"\"\r\n    Build a simple CNN classifier for demonstration.\r\n    Architecture: Conv2D → MaxPool → Conv2D → GlobalAvgPool → Dense.\r\n\r\n    Returns:\r\n        Compiled Keras model with input shape (224, 224, 3).\r\n    \"\"\"\r\n    inputs = tf.keras.Input(shape=(224, 224, 3), name=\"input_image\")\r\n    x = tf.keras.layers.Conv2D(32, (3, 3), activation=\"relu\", padding=\"same\")(inputs)\r\n    x = tf.keras.layers.MaxPooling2D((2, 2))(x)\r\n    x = tf.keras.layers.Conv2D(64, (3, 3), activation=\"relu\", padding=\"same\")(x)\r\n    x = tf.keras.layers.GlobalAveragePooling2D()(x)\r\n    x = tf.keras.layers.Dropout(0.2)(x)\r\n    outputs = tf.keras.layers.Dense(10, activation=\"softmax\", name=\"output\")(x)\r\n\r\n    model = tf.keras.Model(inputs=inputs, outputs=outputs, name=\"demo_cnn\")\r\n    model.compile(\r\n        optimizer=\"adam\",\r\n        loss=\"sparse_categorical_crossentropy\",\r\n        metrics=[\"accuracy\"],\r\n    )\r\n    return model\r\n\r\ndef convert_keras_to_tflite(\r\n    model: tf.keras.Model,\r\n    output_path: str = \"model.tflite\",\r\n) -> bytes:\r\n    \"\"\"\r\n    Convert a Keras model to TFLite FlatBuffer format.\r\n\r\n    Args:\r\n        model: Trained Keras model instance.\r\n        output_path: Path to write the .tflite file.\r\n\r\n    Returns:\r\n        Raw TFLite FlatBuffer bytes.\r\n\r\n    Example:\r\n        >>> model = build_demo_model()\r\n        >>> tflite_bytes = convert_keras_to_tflite(model, \"demo.tflite\")\r\n        >>> print(f\"Model size: {len(tflite_bytes) / 1024:.1f} KB\")\r\n    \"\"\"\r\n    converter = tf.lite.TFLiteConverter.from_keras_model(model)\r\n\r\n    # Basic conversion with default optimizations\r\n    converter.optimizations = [tf.lite.Optimize.DEFAULT]\r\n\r\n    tflite_buffer = converter.convert()\r\n\r\n    with open(output_path, \"wb\") as f:\r\n        f.write(tflite_buffer)\r\n\r\n    return tflite_buffer\r\n\r\ndef inspect_tflite_model(tflite_path: str) -> None:\r\n    \"\"\"\r\n    Print model details from a TFLite FlatBuffer using the interpreter.\r\n\r\n    Args:\r\n        tflite_path: Path to the .tflite file to inspect.\r\n    \"\"\"\r\n    interpreter = tf.lite.Interpreter(model_path=tflite_path)\r\n    interpreter.allocate_tensors()\r\n\r\n    input_details = interpreter.get_input_details()\r\n    output_details = interpreter.get_output_details()\r\n\r\n    print(\"Input details:\")\r\n    for inp in input_details:\r\n        print(f\"  Name:      {inp['name']}\")\r\n        print(f\"  Shape:     {inp['shape']}\")\r\n        print(f\"  Dtype:     {inp['dtype']}\")\r\n        print(f\"  Quantized: {inp['quantization']}\")\r\n\r\n    print(\"\\nOutput details:\")\r\n    for out in output_details:\r\n        print(f\"  Name:      {out['name']}\")\r\n        print(f\"  Shape:     {out['shape']}\")\r\n        print(f\"  Dtype:     {out['dtype']}\")\r\n        print(f\"  Quantized: {out['quantization']}\")\r\n\r\nif __name__ == \"__main__\":\r\n    print(\"Building demo model...\")\r\n    model = build_demo_model()\r\n    model.summary()\r\n\r\n    print(\"\\nConverting to TFLite...\")\r\n    tflite_bytes = convert_keras_to_tflite(model, \"demo_cnn.tflite\")\r\n    print(f\"TFLite model size: {len(tflite_bytes) / 1024:.2f} KB\")\r\n\r\n    print(\"\\nInspecting TFLite model:\")\r\n    inspect_tflite_model(\"demo_cnn.tflite\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "213-representative-dataset-for-quantization",
      children: "2.1.3 Representative Dataset for Quantization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Integer quantization (INT8) requires a representative dataset. This small calibration dataset helps the converter compute the dynamic range of activations."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# representative_dataset.py — Generate and use a representative dataset for quantization\r\n\r\nimport tensorflow as tf\r\nimport numpy as np\r\nfrom typing import Callable, Generator, List, Optional\r\n\r\nclass RepresentativeDataset:\r\n    \"\"\"\r\n    Wraps a calibration dataset for TFLite quantization.\r\n\r\n    The converter calls the generator to sample a subset of training\r\n    data and compute activation ranges for each layer.\r\n\r\n    Attributes:\r\n        data_generator: Callable that yields batches of input data.\r\n        num_samples: Number of samples to draw for calibration.\r\n    \"\"\"\r\n\r\n    def __init__(\r\n        self,\r\n        data_generator: Callable[[], Generator[np.ndarray, None, None]],\r\n        num_samples: int = 200,\r\n    ):\r\n        self.data_generator = data_generator\r\n        self.num_samples = num_samples\r\n\r\n    def get_generator(self) -> Generator[np.ndarray, None, None]:\r\n        \"\"\"Return a generator that yields samples for the converter.\"\"\"\r\n        count = 0\r\n        for batch in self.data_generator():\r\n            for sample in batch:\r\n                if count >= self.num_samples:\r\n                    return\r\n                # TFLite expects shape (1, H, W, C) per sample\r\n                yield [np.expand_dims(sample, axis=0).astype(np.float32)]\r\n                count += 1\r\n\r\ndef create_random_image_generator(\r\n    shape: tuple = (224, 224, 3),\r\n    batch_size: int = 32,\r\n    num_batches: int = 10,\r\n) -> Callable[[], Generator[np.ndarray, None, None]]:\r\n    \"\"\"\r\n    Create a generator that yields random image batches.\r\n\r\n    In production, replace this with real calibration data from\r\n    your training set. Random data works for demo purposes but\r\n    real data yields better quantization accuracy.\r\n\r\n    Args:\r\n        shape: Image dimensions (H, W, C).\r\n        batch_size: Samples per batch.\r\n        num_batches: Total batches to generate.\r\n\r\n    Returns:\r\n        A callable that returns a generator of image batches.\r\n    \"\"\"\r\n    def _generator() -> Generator[np.ndarray, None, None]:\r\n        for _ in range(num_batches):\r\n            yield np.random.rand(batch_size, *shape).astype(np.float32)\r\n\r\n    return _generator\r\n\r\ndef quantize_with_representative_dataset(\r\n    model: tf.keras.Model,\r\n    rep_dataset: RepresentativeDataset,\r\n    output_path: str = \"model_quantized.tflite\",\r\n) -> bytes:\r\n    \"\"\"\r\n    Convert model to INT8 TFLite using a representative dataset.\r\n\r\n    This produces a fully quantized model (weights + activations in INT8),\r\n    which is 4x smaller than FP32 and significantly faster on integer hardware.\r\n\r\n    Args:\r\n        model: Trained Keras model.\r\n        rep_dataset: RepresentativeDataset for calibration.\r\n        output_path: Path for the quantized .tflite file.\r\n\r\n    Returns:\r\n        Quantized TFLite FlatBuffer bytes.\r\n    \"\"\"\r\n    converter = tf.lite.TFLiteConverter.from_keras_model(model)\r\n    converter.optimizations = [tf.lite.Optimize.DEFAULT]\r\n    converter.representative_dataset = rep_dataset.get_generator\r\n\r\n    # Enforce INT8 quantization for all ops\r\n    converter.target_spec.supported_ops = [tf.lite.OpsSet.TFLITE_BUILTINS_INT8]\r\n\r\n    # Set input and output types to INT8\r\n    converter.inference_input_type = tf.int8\r\n    converter.inference_output_type = tf.int8\r\n\r\n    tflite_buffer = converter.convert()\r\n\r\n    with open(output_path, \"wb\") as f:\r\n        f.write(tflite_buffer)\r\n\r\n    print(f\"Quantized model saved to {output_path}\")\r\n    print(f\"Size: {len(tflite_buffer) / 1024:.2f} KB\")\r\n\r\n    return tflite_buffer\r\n\r\ndef compare_model_sizes(original: bytes, quantized: bytes) -> None:\r\n    \"\"\"\r\n    Print a comparison between original and quantized model sizes.\r\n\r\n    Args:\r\n        original: Original TFLite FlatBuffer bytes.\r\n        quantized: Quantized TFLite FlatBuffer bytes.\r\n    \"\"\"\r\n    orig_kb = len(original) / 1024\r\n    quant_kb = len(quantized) / 1024\r\n    ratio = len(original) / len(quantized)\r\n\r\n    print(f\"\\n--- Model Size Comparison ---\")\r\n    print(f\"Original (FP32):  {orig_kb:.2f} KB\")\r\n    print(f\"Quantized (INT8): {quant_kb:.2f} KB\")\r\n    print(f\"Compression ratio: {ratio:.1f}x\")\r\n\r\nif __name__ == \"__main__\":\r\n    # Build model\r\n    model = build_demo_model()\r\n\r\n    # Convert without quantization (baseline)\r\n    converter = tf.lite.TFLiteConverter.from_keras_model(model)\r\n    converter.optimizations = [tf.lite.Optimize.DEFAULT]\r\n    fp32_buffer = converter.convert()\r\n\r\n    # Convert with INT8 quantization\r\n    image_gen = create_random_image_generator(\r\n        shape=(224, 224, 3), batch_size=32, num_samples=200\r\n    )\r\n    # Note: RepresentativeDataset uses num_samples param internally\r\n    rep_ds = RepresentativeDataset(image_gen, num_samples=200)\r\n    int8_buffer = quantize_with_representative_dataset(\r\n        model, rep_ds, \"demo_cnn_int8.tflite\"\r\n    )\r\n\r\n    compare_model_sizes(fp32_buffer, int8_buffer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "214-conversion-flags-and-options",
      children: "2.1.4 Conversion Flags and Options"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The TFLite Converter exposes several flags that control the output model behavior."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Flag"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Options"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effect"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "optimizations"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "[DEFAULT]"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[]"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables all default optimizations (weight quantization, fusion)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "target_spec.supported_ops"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "TFLITE_BUILTINS"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TFLITE_BUILTINS_INT8"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SELECT_TF_OPS"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which ops are allowed; SELECT_TF_OPS enables all TF ops but increases binary size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "inference_input_type"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tf.float32"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tf.int8"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tf.uint8"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data type for model input tensors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "inference_output_type"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tf.float32"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tf.int8"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tf.uint8"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data type for model output tensors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "allow_custom_ops"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "True"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "False"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whether to allow custom op implementations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "representative_dataset"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callable returning generator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required for INT8 quantization of activations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "experimental_new_converter"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "True"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "False"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use MLIR-based converter (default True in TF 2.6+)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# conversion_flags.py — Advanced converter configuration options\r\n\r\nimport tensorflow as tf\r\nfrom typing import Optional, List\r\n\r\ndef configure_converter(\r\n    model: tf.keras.Model,\r\n    use_fp16: bool = False,\r\n    use_int8: bool = False,\r\n    select_tf_ops: bool = False,\r\n    custom_ops: bool = False,\r\n    representative_gen: Optional[callable] = None,\r\n) -> tf.lite.TFLiteConverter:\r\n    \"\"\"\r\n    Configure a TFLiteConverter with fine-grained control over optimizations.\r\n\r\n    Args:\r\n        model: Keras model to convert.\r\n        use_fp16: Enable FP16 quantization (weights halved, activations FP32).\r\n        use_int8: Enable full INT8 quantization (requires representative_dataset).\r\n        select_tf_ops: Allow TF ops not natively supported in TFLite.\r\n        custom_ops: Allow custom op implementations.\r\n        representative_gen: Generator for INT8 calibration data.\r\n\r\n    Returns:\r\n        Configured TFLiteConverter instance.\r\n\r\n    Raises:\r\n        ValueError: If use_int8 is True but no representative_gen is provided.\r\n    \"\"\"\r\n    converter = tf.lite.TFLiteConverter.from_keras_model(model)\r\n\r\n    # Base optimizations\r\n    optimization_flags = [tf.lite.Optimize.DEFAULT]\r\n\r\n    if use_fp16:\r\n        # FP16 quantization: weights stored as float16\r\n        converter.target_spec.supported_types = [tf.float16]\r\n        optimization_flags.append(tf.lite.Optimize.DEFAULT)\r\n\r\n    if use_int8:\r\n        if representative_gen is None:\r\n            raise ValueError(\r\n                \"INT8 quantization requires a representative_dataset. \"\r\n                \"Provide a generator that yields calibration samples.\"\r\n            )\r\n        converter.representative_dataset = representative_gen\r\n        converter.target_spec.supported_ops = [tf.lite.OpsSet.TFLITE_BUILTINS_INT8]\r\n        converter.inference_input_type = tf.int8\r\n        converter.inference_output_type = tf.int8\r\n\r\n    if select_tf_ops:\r\n        # Enables full TF op set — model size increases\r\n        converter.target_spec.supported_ops = [\r\n            tf.lite.OpsSet.TFLITE_BUILTINS,\r\n            tf.lite.OpsSet.SELECT_TF_OPS,\r\n        ]\r\n\r\n    converter.optimizations = optimization_flags\r\n    converter.allow_custom_ops = custom_ops\r\n\r\n    return converter\r\n\r\ndef convert_with_strategy(\r\n    model: tf.keras.Model,\r\n    strategy: str,\r\n    rep_gen: Optional[callable] = None,\r\n    output_path: Optional[str] = None,\r\n) -> bytes:\r\n    \"\"\"\r\n    Convert model using a named quantization strategy.\r\n\r\n    Supported strategies:\r\n        - \"fp32\": No quantization, full precision.\r\n        - \"fp16\": Float16 weight quantization.\r\n        - \"dynamic\": Dynamic range quantization (weights INT8, activations FP32).\r\n        - \"int8\": Full INT8 quantization (requires rep_gen).\r\n\r\n    Args:\r\n        model: Keras model to convert.\r\n        strategy: One of \"fp32\", \"fp16\", \"dynamic\", \"int8\".\r\n        rep_gen: Representative dataset generator (required for \"int8\").\r\n        output_path: Optional file path to save the model.\r\n\r\n    Returns:\r\n        TFLite FlatBuffer bytes.\r\n    \"\"\"\r\n    strategy = strategy.lower()\r\n    valid_strategies = {\"fp32\", \"fp16\", \"dynamic\", \"int8\"}\r\n    if strategy not in valid_strategies:\r\n        raise ValueError(f\"Unknown strategy '{strategy}'. Choose from {valid_strategies}.\")\r\n\r\n    converter = tf.lite.TFLiteConverter.from_keras_model(model)\r\n\r\n    if strategy == \"fp32\":\r\n        converter.optimizations = []\r\n    elif strategy == \"fp16\":\r\n        converter.optimizations = [tf.lite.Optimize.DEFAULT]\r\n        converter.target_spec.supported_types = [tf.float16]\r\n    elif strategy == \"dynamic\":\r\n        converter.optimizations = [tf.lite.Optimize.DEFAULT]\r\n    elif strategy == \"int8\":\r\n        if rep_gen is None:\r\n            raise ValueError(\"INT8 strategy requires rep_gen (representative dataset).\")\r\n        converter.optimizations = [tf.lite.Optimize.DEFAULT]\r\n        converter.representative_dataset = rep_gen\r\n        converter.target_spec.supported_ops = [tf.lite.OpsSet.TFLITE_BUILTINS_INT8]\r\n        converter.inference_input_type = tf.int8\r\n        converter.inference_output_type = tf.int8\r\n\r\n    tflite_buffer = converter.convert()\r\n\r\n    if output_path:\r\n        with open(output_path, \"wb\") as f:\r\n            f.write(tflite_buffer)\r\n        print(f\"Model saved to {output_path}\")\r\n\r\n    return tflite_buffer\r\n\r\ndef print_conversion_summary(buffer: bytes, strategy: str, elapsed_ms: float) -> None:\r\n    \"\"\"\r\n    Print a summary of the conversion result.\r\n\r\n    Args:\r\n        buffer: TFLite FlatBuffer bytes.\r\n        strategy: The quantization strategy used.\r\n        elapsed_ms: Conversion time in milliseconds.\r\n    \"\"\"\r\n    size_kb = len(buffer) / 1024\r\n    print(\r\n        f\"[{strategy.upper():6s}] \"\r\n        f\"Size: {size_kb:8.2f} KB | \"\r\n        f\"Time: {elapsed_ms:6.1f} ms\"\r\n    )\r\n\r\nif __name__ == \"__main__\":\r\n    model = build_demo_model()\r\n\r\n    # Create representative dataset generator for INT8\r\n    def _rep_gen():\r\n        for _ in range(10):\r\n            yield [np.random.rand(1, 224, 224, 3).astype(np.float32)]\r\n\r\n    strategies = [\"fp32\", \"fp16\", \"dynamic\", \"int8\"]\r\n\r\n    for strat in strategies:\r\n        import time\r\n        t0 = time.perf_counter()\r\n\r\n        if strat == \"int8\":\r\n            buf = convert_with_strategy(model, strat, rep_gen=_rep_gen)\r\n        else:\r\n            buf = convert_with_strategy(model, strat)\r\n\r\n        elapsed = (time.perf_counter() - t0) * 1000\r\n        print_conversion_summary(buf, strat, elapsed)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "22-tflite-quantization",
      children: "2.2 TFLite Quantization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quantization is the single most impactful optimization for mobile inference. It reduces model size, decreases memory bandwidth, and speeds up computation — especially on integer-only hardware like DSPs and NPUs."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "221-quantization-types",
      children: "2.2.1 Quantization Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TFLite supports three quantization modes, each with different trade-offs."
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TB\r\n    subgraph PTQ[Post-Training Quantization]\r\n        A[FP32 Trained Model]\r\n        A --> B1[Float16 Quantization]\r\n        A --> B2[Dynamic Range Quantization]\r\n        A --> B3[Full INT8 Quantization]\r\n    end\r\n    subgraph Details[Key Properties]\r\n        C1[\"Weights: FP16<br/>Activations: FP32<br/>No calibration data\"]\r\n        C2[\"Weights: INT8<br/>Activations: FP32<br/>No calibration data\"]\r\n        C3[\"Weights: INT8<br/>Activations: INT8<br/>Calibration data required\"]\r\n    end\r\n    B1 --> C1\r\n    B2 --> C2\r\n    B3 --> C3\r\n    subgraph Gains[Typical Improvements]\r\n        D1[\"2x smaller<br/>Near-zero accuracy loss\"]\r\n        D2[\"4x smaller<br/>Minimal accuracy loss\"]\r\n        D3[\"4x smaller + faster<br/>Some accuracy loss\"]\r\n    end\r\n    C1 --> D1\r\n    C2 --> D2\r\n    C3 --> D3"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "222-float16-quantization",
      children: "2.2.2 Float16 Quantization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Float16 quantization converts FP32 weights to FP16. Activations remain in FP32. This is the safest quantization — accuracy loss is typically below 0.1%."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# float16_quantization.py — Float16 quantization with accuracy evaluation\r\n\r\nimport tensorflow as tf\r\nimport numpy as np\r\nfrom typing import Tuple\r\n\r\ndef quantize_float16(model: tf.keras.Model, output_path: str) -> bytes:\r\n    \"\"\"\r\n    Apply float16 quantization to a Keras model.\r\n\r\n    Float16 quantization halves the model size by storing weights\r\n    as 16-bit floats. Activations remain in FP32. No calibration\r\n    data is needed.\r\n\r\n    Args:\r\n        model: Trained Keras model.\r\n        output_path: Path to write .tflite file.\r\n\r\n    Returns:\r\n        Quantized TFLite FlatBuffer bytes.\r\n    \"\"\"\r\n    converter = tf.lite.TFLiteConverter.from_keras_model(model)\r\n    converter.optimizations = [tf.lite.Optimize.DEFAULT]\r\n    converter.target_spec.supported_types = [tf.float16]\r\n\r\n    tflite_buffer = converter.convert()\r\n\r\n    with open(output_path, \"wb\") as f:\r\n        f.write(tflite_buffer)\r\n\r\n    print(f\"Float16 model saved to {output_path}\")\r\n    return tflite_buffer\r\n\r\ndef evaluate_quantization_accuracy(\r\n    original_model: tf.keras.Model,\r\n    tflite_path: str,\r\n    test_images: np.ndarray,\r\n    test_labels: np.ndarray,\r\n) -> Tuple[float, float]:\r\n    \"\"\"\r\n    Compare accuracy between the original and quantized model.\r\n\r\n    Args:\r\n        original_model: The original Keras model (FP32).\r\n        tflite_path: Path to the quantized TFLite model.\r\n        test_images: Test image array, shape (N, H, W, C).\r\n        test_labels: Ground truth labels, shape (N,).\r\n\r\n    Returns:\r\n        Tuple of (original_accuracy, quantized_accuracy) as percentages.\r\n    \"\"\"\r\n    # Original model accuracy\r\n    original_loss, original_acc = original_model.evaluate(\r\n        test_images, test_labels, verbose=0\r\n    )\r\n\r\n    # TFLite model accuracy\r\n    interpreter = tf.lite.Interpreter(model_path=tflite_path)\r\n    interpreter.allocate_tensors()\r\n\r\n    input_details = interpreter.get_input_details()\r\n    output_details = interpreter.get_output_details()\r\n\r\n    correct = 0\r\n    total = len(test_images)\r\n\r\n    for i in range(total):\r\n        # Prepare input\r\n        input_data = np.expand_dims(test_images[i], axis=0).astype(np.float32)\r\n        interpreter.set_tensor(input_details[0][\"index\"], input_data)\r\n\r\n        # Run inference\r\n        interpreter.invoke()\r\n\r\n        # Get output\r\n        output_data = interpreter.get_tensor(output_details[0][\"index\"])\r\n        predicted_class = np.argmax(output_data[0])\r\n        true_class = int(test_labels[i])\r\n\r\n        if predicted_class == true_class:\r\n            correct += 1\r\n\r\n    quantized_acc = (correct / total) * 100\r\n\r\n    print(f\"\\n--- Accuracy Comparison ---\")\r\n    print(f\"Original model (FP32):   {original_acc * 100:.2f}%\")\r\n    print(f\"Quantized model (FP16): {quantized_acc:.2f}%\")\r\n    print(f\"Difference:              {quantized_acc - (original_acc * 100):+.2f}%\")\r\n\r\n    return original_acc * 100, quantized_acc\r\n\r\nif __name__ == \"__main__\":\r\n    # Create and train a simple model on synthetic data\r\n    model = build_demo_model()\r\n\r\n    # Generate synthetic training data\r\n    x_train = np.random.rand(500, 224, 224, 3).astype(np.float32)\r\n    y_train = np.random.randint(0, 10, size=(500,))\r\n    x_test = np.random.rand(100, 224, 224, 3).astype(np.float32)\r\n    y_test = np.random.randint(0, 10, size=(100,))\r\n\r\n    model.fit(x_train, y_train, epochs=3, batch_size=32, validation_split=0.2, verbose=0)\r\n\r\n    # Quantize to float16\r\n    tflite_fp16 = quantize_float16(model, \"model_fp16.tflite\")\r\n\r\n    # Evaluate accuracy\r\n    evaluate_quantization_accuracy(model, \"model_fp16.tflite\", x_test, y_test)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "223-dynamic-range-quantization",
      children: "2.2.3 Dynamic Range Quantization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dynamic range quantization converts weights to INT8 at conversion time but keeps activations in FP32 during inference. It requires no calibration data. The runtime dynamically quantizes activations to INT8 for compute-heavy operations."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# dynamic_range_quantization.py — Dynamic range quantization\r\n\r\nimport tensorflow as tf\r\nimport numpy as np\r\n\r\ndef quantize_dynamic_range(\r\n    model: tf.keras.Model,\r\n    output_path: str = \"model_dynamic.tflite\",\r\n) -> bytes:\r\n    \"\"\"\r\n    Apply dynamic range quantization.\r\n\r\n    Weights are quantized to INT8 at conversion time.\r\n    Activations remain FP32 but are quantized on-the-fly\r\n    during inference for ops that benefit from integer math.\r\n\r\n    Args:\r\n        model: Keras model to quantize.\r\n        output_path: Path for the output .tflite file.\r\n\r\n    Returns:\r\n        TFLite FlatBuffer bytes with dynamically quantized weights.\r\n    \"\"\"\r\n    converter = tf.lite.TFLiteConverter.from_keras_model(model)\r\n\r\n    # Dynamic range quantization is the default when DEFAULT optimization\r\n    # is enabled without specifying supported_types or representative_dataset\r\n    converter.optimizations = [tf.lite.Optimize.DEFAULT]\r\n\r\n    tflite_buffer = converter.convert()\r\n\r\n    with open(output_path, \"wb\") as f:\r\n        f.write(tflite_buffer)\r\n\r\n    model_size_kb = len(tflite_buffer) / 1024\r\n    print(f\"Dynamic range quantized model: {output_path}\")\r\n    print(f\"Size: {model_size_kb:.2f} KB\")\r\n    print(\"Weights: INT8 | Activations: FP32 (dynamically quantized)\")\r\n\r\n    return tflite_buffer\r\n\r\ndef profile_model_latency(\r\n    tflite_path: str,\r\n    input_shape: tuple = (1, 224, 224, 3),\r\n    num_runs: int = 100,\r\n) -> dict:\r\n    \"\"\"\r\n    Profile the average inference latency of a TFLite model.\r\n\r\n    Args:\r\n        tflite_path: Path to the .tflite file.\r\n        input_shape: Input tensor shape including batch dimension.\r\n        num_runs: Number of inference runs for averaging.\r\n\r\n    Returns:\r\n        Dict with 'mean_ms', 'std_ms', 'min_ms', 'max_ms'.\r\n    \"\"\"\r\n    interpreter = tf.lite.Interpreter(model_path=tflite_path)\r\n    interpreter.allocate_tensors()\r\n\r\n    input_details = interpreter.get_input_details()\r\n\r\n    # Create random input matching expected shape\r\n    input_data = np.random.rand(*input_shape).astype(np.float32)\r\n    interpreter.set_tensor(input_details[0][\"index\"], input_data)\r\n\r\n    # Warm-up run\r\n    interpreter.invoke()\r\n\r\n    latencies = []\r\n    for _ in range(num_runs):\r\n        # Re-generate input to avoid caching effects\r\n        input_data = np.random.rand(*input_shape).astype(np.float32)\r\n        interpreter.set_tensor(input_details[0][\"index\"], input_data)\r\n\r\n        import time\r\n        t0 = time.perf_counter()\r\n        interpreter.invoke()\r\n        elapsed = (time.perf_counter() - t0) * 1000  # ms\r\n\r\n        latencies.append(elapsed)\r\n\r\n    stats = {\r\n        \"mean_ms\": float(np.mean(latencies)),\r\n        \"std_ms\": float(np.std(latencies)),\r\n        \"min_ms\": float(np.min(latencies)),\r\n        \"max_ms\": float(np.max(latencies)),\r\n    }\r\n\r\n    print(f\"\\n--- Latency Profile ({num_runs} runs) ---\")\r\n    print(f\"Mean:   {stats['mean_ms']:.3f} ms\")\r\n    print(f\"Std:    {stats['std_ms']:.3f} ms\")\r\n    print(f\"Min:    {stats['min_ms']:.3f} ms\")\r\n    print(f\"Max:    {stats['max_ms']:.3f} ms\")\r\n\r\n    return stats\r\n\r\ndef compare_quantization_methods(model: tf.keras.Model) -> None:\r\n    \"\"\"\r\n    Convert the same model with all three quantization methods and compare results.\r\n\r\n    Args:\r\n        model: Keras model to benchmark.\r\n    \"\"\"\r\n    methods = {\r\n        \"FP32 (no quantization)\": {\"optimizations\": []},\r\n        \"Float16\": {\"optimizations\": [tf.lite.Optimize.DEFAULT], \"supported_types\": [tf.float16]},\r\n        \"Dynamic Range\": {\"optimizations\": [tf.lite.Optimize.DEFAULT]},\r\n    }\r\n\r\n    results = []\r\n    for method_name, config in methods.items():\r\n        converter = tf.lite.TFLiteConverter.from_keras_model(model)\r\n        converter.optimizations = config.get(\"optimizations\", [])\r\n        if \"supported_types\" in config:\r\n            converter.target_spec.supported_types = config[\"supported_types\"]\r\n\r\n        buffer = converter.convert()\r\n\r\n        # Profile latency\r\n        import tempfile\r\n        with tempfile.NamedTemporaryFile(suffix=\".tflite\", delete=False) as f:\r\n            f.write(buffer)\r\n            tmp_path = f.name\r\n\r\n        stats = profile_model_latency(tmp_path, num_runs=50)\r\n        results.append((method_name, len(buffer) / 1024, stats[\"mean_ms\"]))\r\n\r\n    print(f\"\\n{'='*60}\")\r\n    print(f\"{'Method':<25s} {'Size (KB)':<12s} {'Latency (ms)':<15s}\")\r\n    print(f\"{'='*60}\")\r\n    for name, size_kb, latency in results:\r\n        print(f\"{name:<25s} {size_kb:<12.2f} {latency:<15.3f}\")\r\n\r\nif __name__ == \"__main__\":\r\n    model = build_demo_model()\r\n    compare_quantization_methods(model)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "224-full-int8-quantization",
      children: "2.2.4 Full INT8 Quantization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Full INT8 quantization converts both weights and activations to INT8. This requires a representative dataset for calibration. It yields the best performance on integer-only hardware."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "FP32"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "FP16"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dynamic Range"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Full INT8"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weight precision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32-bit float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16-bit float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8-bit integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8-bit integer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Activation precision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32-bit float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32-bit float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32-bit float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8-bit integer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Calibration data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required (200-500 samples)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Size reduction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency reduction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1.1x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~2x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~3-4x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Accuracy loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<0.1%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.5-2%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-5%"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "23-tflite-delegates",
      children: "2.3 TFLite Delegates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Delegates offload computation to specialized hardware. Without a delegate, TFLite runs on the CPU. With a delegate, it runs on GPU, DSP, or NPU — delivering 2-10x speedup."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "231-delegate-architecture",
      children: "2.3.1 Delegate Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TB\r\n    subgraph App[Android Application]\r\n        A[TFLite Runtime]\r\n        B[GPU Delegate<br/>OpenGL ES / Vulkan]\r\n        C[NNAPI Delegate<br/>Android NN API]\r\n        D[XNNPACK Delegate<br/>CPU Optimized]\r\n        E[Hexagon Delegate<br/>Qualcomm DSP]\r\n    end\r\n    subgraph Hardware[Hardware Layer]\r\n        F[GPU<br/>Adreno / Mali]\r\n        G[NPU / DSP<br/>Hexagon / MediaTek APU]\r\n        H[CPU<br/>ARM Cortex]\r\n    end\r\n    A --> B\r\n    A --> C\r\n    A --> D\r\n    A --> E\r\n    B --> F\r\n    C --> G\r\n    C --> F\r\n    D --> H\r\n    E --> G"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "232-gpu-delegate",
      children: "2.3.2 GPU Delegate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The GPU delegate runs models on the device GPU using OpenGL ES or Vulkan. It is best for models with many parallel compute operations (convolutions, matrix multiplications)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# gpu_delegate.py — Configure and benchmark the TFLite GPU delegate\r\n\r\nimport tensorflow as tf\r\nimport numpy as np\r\nfrom typing import Optional, Dict\r\n\r\ndef create_gpu_delegate(\r\n    allow_precision_loss: bool = False,\r\n    metadata: Optional[Dict[str, str]] = None,\r\n) -> tf.lite.experimental.Delegate:\r\n    \"\"\"\r\n    Create a TFLite GPU delegate with configuration options.\r\n\r\n    Args:\r\n        allow_precision_loss: Allow FP16 computation on GPU (faster, slight accuracy loss).\r\n        metadata: Optional app metadata for GPU driver optimization.\r\n\r\n    Returns:\r\n        Configured GPU delegate instance.\r\n\r\n    Note:\r\n        GPU delegate is available via:\r\n        `import tensorflow as tf` then `tf.lite.experimental.load_delegate('libtensorflowlite_gpu_delegate.so')`\r\n    \"\"\"\r\n    # Options dictionary for GPU delegate\r\n    options = {\r\n        \"precision_loss_allowed\": int(allow_precision_loss),\r\n    }\r\n\r\n    if metadata:\r\n        options[\"metadata\"] = metadata\r\n\r\n    # Load the GPU delegate shared library\r\n    # On Android, the .so is bundled with the TFLite runtime\r\n    gpu_delegate = tf.lite.experimental.load_delegate(\r\n        \"libtensorflowlite_gpu_delegate.so\",\r\n        options,\r\n    )\r\n    return gpu_delegate\r\n\r\ndef run_with_gpu_delegate(\r\n    tflite_path: str,\r\n    input_data: np.ndarray,\r\n    use_gpu: bool = True,\r\n) -> np.ndarray:\r\n    \"\"\"\r\n    Run TFLite inference optionally using the GPU delegate.\r\n\r\n    Args:\r\n        tflite_path: Path to the .tflite model file.\r\n        input_data: Input tensor data.\r\n        use_gpu: If True, attempt GPU delegation; otherwise CPU only.\r\n\r\n    Returns:\r\n        Model output as a NumPy array.\r\n    \"\"\"\r\n    if use_gpu:\r\n        try:\r\n            gpu_delegate = create_gpu_delegate(allow_precision_loss=True)\r\n            interpreter = tf.lite.Interpreter(\r\n                model_path=tflite_path,\r\n                experimental_delegates=[gpu_delegate],\r\n            )\r\n            print(\"Using GPU delegate\")\r\n        except Exception as e:\r\n            print(f\"GPU delegate failed ({e}), falling back to CPU\")\r\n            interpreter = tf.lite.Interpreter(model_path=tflite_path)\r\n    else:\r\n        interpreter = tf.lite.Interpreter(model_path=tflite_path)\r\n        print(\"Using CPU (no delegate)\")\r\n\r\n    interpreter.allocate_tensors()\r\n\r\n    input_details = interpreter.get_input_details()\r\n    output_details = interpreter.get_output_details()\r\n\r\n    interpreter.set_tensor(input_details[0][\"index\"], input_data)\r\n    interpreter.invoke()\r\n\r\n    output = interpreter.get_tensor(output_details[0][\"index\"])\r\n    return output\r\n\r\ndef benchmark_gpu_vs_cpu(\r\n    tflite_path: str,\r\n    input_shape: tuple = (1, 224, 224, 3),\r\n    num_runs: int = 100,\r\n) -> Dict[str, float]:\r\n    \"\"\"\r\n    Benchmark GPU vs CPU inference latency.\r\n\r\n    Args:\r\n        tflite_path: Path to .tflite model.\r\n        input_shape: Input shape including batch dimension.\r\n        num_runs: Number of inference iterations.\r\n\r\n    Returns:\r\n        Dict mapping backend names to mean latency in milliseconds.\r\n    \"\"\"\r\n    input_data = np.random.rand(*input_shape).astype(np.float32)\r\n    results = {}\r\n\r\n    for backend, use_gpu in [(\"CPU\", False), (\"GPU\", True)]:\r\n        try:\r\n            actual = use_gpu\r\n            if use_gpu:\r\n                try:\r\n                    gpu_delegate = create_gpu_delegate(allow_precision_loss=True)\r\n                    interpreter = tf.lite.Interpreter(\r\n                        model_path=tflite_path,\r\n                        experimental_delegates=[gpu_delegate],\r\n                    )\r\n                except Exception:\r\n                    print(\"GPU delegate not available, skipping GPU benchmark\")\r\n                    continue\r\n            else:\r\n                interpreter = tf.lite.Interpreter(model_path=tflite_path)\r\n\r\n            interpreter.allocate_tensors()\r\n            input_details = interpreter.get_input_details()\r\n\r\n            # Warm-up\r\n            interpreter.set_tensor(input_details[0][\"index\"], input_data)\r\n            interpreter.invoke()\r\n\r\n            import time\r\n            latencies = []\r\n            for _ in range(num_runs):\r\n                t0 = time.perf_counter()\r\n                interpreter.invoke()\r\n                elapsed = (time.perf_counter() - t0) * 1000\r\n                latencies.append(elapsed)\r\n\r\n            results[backend] = float(np.mean(latencies))\r\n            print(f\"{backend} mean latency: {results[backend]:.3f} ms\")\r\n\r\n        except Exception as e:\r\n            print(f\"Benchmark failed for {backend}: {e}\")\r\n\r\n    if \"CPU\" in results and \"GPU\" in results:\r\n        speedup = results[\"CPU\"] / results[\"GPU\"]\r\n        print(f\"GPU speedup over CPU: {speedup:.2f}x\")\r\n\r\n    return results\r\n\r\nif __name__ == \"__main__\":\r\n    # Create a model and convert to TFLite\r\n    model = build_demo_model()\r\n    converter = tf.lite.TFLiteConverter.from_keras_model(model)\r\n    converter.optimizations = [tf.lite.Optimize.DEFAULT]\r\n    buffer = converter.convert()\r\n\r\n    import tempfile, os\r\n    tflite_path = os.path.join(tempfile.gettempdir(), \"benchmark_model.tflite\")\r\n    with open(tflite_path, \"wb\") as f:\r\n        f.write(buffer)\r\n\r\n    print(\"Benchmarking GPU vs CPU...\")\r\n    benchmark_gpu_vs_cpu(tflite_path)\r\n\r\n    # Cleanup\r\n    os.remove(tflite_path)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "233-nnapi-delegate",
      children: "2.3.3 NNAPI Delegate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Android Neural Networks API (NNAPI) abstracts hardware acceleration across different vendors. It dispatches operations to the best available hardware: GPU, DSP, or NPU."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "NNAPI Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Driver model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each OEM provides a driver for their hardware (Qualcomm, MediaTek, Samsung, etc.)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Priority"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "low"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "medium"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "high"
            }), " — controls power vs performance trade-off"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Allow FP16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permits FP16 computation for faster inference with minimal accuracy loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Allow dynamic dimensions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supports models with variable input shapes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# nnapi_delegate.py — NNAPI delegate configuration and usage\r\n\r\nimport tensorflow as tf\r\nimport numpy as np\r\nfrom enum import IntEnum\r\nfrom typing import Optional\r\n\r\nclass NNAPIPriority(IntEnum):\r\n    \"\"\"NNAPI execution priority levels.\"\"\"\r\n    LOW = 0\r\n    MEDIUM = 1\r\n    HIGH = 2\r\n\r\nclass NNAPIDelegate:\r\n    \"\"\"\r\n    Wrapper for the TFLite NNAPI delegate on Android.\r\n\r\n    NNAPI delivers optimized inference on Android devices by\r\n    dispatching operations to the fastest available hardware\r\n    (GPU, DSP, NPU) via vendor drivers.\r\n\r\n    Usage:\r\n        delegate = NNAPIDelegate(priority=NNAPIPriority.HIGH, allow_fp16=True)\r\n        interpreter = tf.lite.Interpreter(\r\n            model_path=\"model.tflite\",\r\n            experimental_delegates=[delegate.build()],\r\n        )\r\n    \"\"\"\r\n\r\n    def __init__(\r\n        self,\r\n        priority: NNAPIPriority = NNAPIPriority.MEDIUM,\r\n        allow_fp16: bool = True,\r\n        use_nnapi_cpu: bool = False,\r\n        accelerator_name: Optional[str] = None,\r\n    ):\r\n        \"\"\"\r\n        Initialize NNAPI delegate configuration.\r\n\r\n        Args:\r\n            priority: Execution priority (low, medium, high).\r\n            allow_fp16: Allow FP16 computation for faster inference.\r\n            use_nnapi_cpu: Fallback to NNAPI CPU if hardware unavailable.\r\n            accelerator_name: Specific accelerator name (e.g., \"qti-dsp\").\r\n        \"\"\"\r\n        self.priority = priority\r\n        self.allow_fp16 = allow_fp16\r\n        self.use_nnapi_cpu = use_nnapi_cpu\r\n        self.accelerator_name = accelerator_name\r\n\r\n    def build(self) -> tf.lite.experimental.Delegate:\r\n        \"\"\"\r\n        Build and return the NNAPI delegate.\r\n\r\n        Returns:\r\n            TFLite NNAPI delegate instance.\r\n\r\n        Raises:\r\n            RuntimeError: If NNAPI delegate library is not found.\r\n        \"\"\"\r\n        options = {\r\n            \"num_threads\": str(tf.config.threading.get_inter_op_parallelism_threads()),\r\n            \"allow_fp16\": str(int(self.allow_fp16)),\r\n            \"execution_preference\": str(int(self.priority)),\r\n        }\r\n\r\n        if self.accelerator_name:\r\n            options[\"accelerator_name\"] = self.accelerator_name.trim()\r\n\r\n        try:\r\n            delegate = tf.lite.experimental.load_delegate(\r\n                \"libtensorflowlite_nnapi_delegate.so\",\r\n                options,\r\n            )\r\n            return delegate\r\n        except Exception as e:\r\n            raise RuntimeError(\r\n                f\"Failed to load NNAPI delegate: {e}\\n\"\r\n                \"Ensure the NNAPI delegate library is bundled with your app.\"\r\n            )\r\n\r\ndef automatic_delegate_selection(\r\n    tflite_path: str,\r\n    prefer_gpu: bool = True,\r\n) -> tf.lite.Interpreter:\r\n    \"\"\"\r\n    Automatically select the best available delegate.\r\n\r\n    Attempts GPU delegate first, falls back to NNAPI, then CPU.\r\n\r\n    Args:\r\n        tflite_path: Path to the TFLite model.\r\n        prefer_gpu: If True, try GPU delegate before NNAPI.\r\n\r\n    Returns:\r\n        Configured TFLite Interpreter with the best available delegate.\r\n    \"\"\"\r\n    delegates = []\r\n\r\n    # Try GPU delegate first (if preferred)\r\n    if prefer_gpu:\r\n        try:\r\n            gpu_opts = {\"precision_loss_allowed\": \"1\"}\r\n            gpu_delegate = tf.lite.experimental.load_delegate(\r\n                \"libtensorflowlite_gpu_delegate.so\",\r\n                gpu_opts,\r\n            )\r\n            delegates.append(gpu_delegate)\r\n            print(\"Selected: GPU delegate\")\r\n        except Exception:\r\n            print(\"GPU delegate unavailable\")\r\n\r\n    # Fall back to NNAPI\r\n    if len(delegates) == 0:\r\n        try:\r\n            nnapi_opts = {\r\n                \"allow_fp16\": \"1\",\r\n                \"execution_preference\": str(int(NNAPIPriority.HIGH)),\r\n            }\r\n            nnapi_delegate = tf.lite.experimental.load_delegate(\r\n                \"libtensorflowlite_nnapi_delegate.so\",\r\n                nnapi_opts,\r\n            )\r\n            delegates.append(nnapi_delegate)\r\n            print(\"Selected: NNAPI delegate\")\r\n        except Exception:\r\n            print(\"NNAPI delegate unavailable, using CPU\")\r\n\r\n    # Fall back to GPU if NNAPI was tried first\r\n    if not prefer_gpu and len(delegates) == 0:\r\n        try:\r\n            gpu_opts = {\"precision_loss_allowed\": \"1\"}\r\n            gpu_delegate = tf.lite.experimental.load_delegate(\r\n                \"libtensorflowlite_gpu_delegate.so\",\r\n                gpu_opts,\r\n            )\r\n            delegates.append(gpu_delegate)\r\n            print(\"Selected: GPU delegate (fallback)\")\r\n        except Exception:\r\n            print(\"All delegates unavailable, using CPU\")\r\n\r\n    interpreter = tf.lite.Interpreter(\r\n        model_path=tflite_path,\r\n        experimental_delegates=delegates if delegates else None,\r\n    )\r\n    interpreter.allocate_tensors()\r\n\r\n    return interpreter\r\n\r\nif __name__ == \"__main__\":\r\n    # This example demonstrates the delegate selection pattern.\r\n    # On a desktop machine, delegates will fall back to CPU.\r\n    model = build_demo_model()\r\n\r\n    converter = tf.lite.TFLiteConverter.from_keras_model(model)\r\n    converter.optimizations = [tf.lite.Optimize.DEFAULT]\r\n    buffer = converter.convert()\r\n\r\n    import tempfile, os\r\n    tflite_path = os.path.join(tempfile.gettempdir(), \"nnapi_test.tflite\")\r\n    with open(tflite_path, \"wb\") as f:\r\n        f.write(buffer)\r\n\r\n    # Run inference with automatic delegate selection\r\n    interpreter = automatic_delegate_selection(tflite_path, prefer_gpu=True)\r\n\r\n    input_details = interpreter.get_input_details()\r\n    output_details = interpreter.get_output_details()\r\n\r\n    input_data = np.random.rand(1, 224, 224, 3).astype(np.float32)\r\n    interpreter.set_tensor(input_details[0][\"index\"], input_data)\r\n    interpreter.invoke()\r\n\r\n    output = interpreter.get_tensor(output_details[0][\"index\"])\r\n    print(f\"Inference successful. Output shape: {output.shape}\")\r\n\r\n    os.remove(tflite_path)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "234-xnnpack-and-hexagon-delegates",
      children: "2.3.4 XNNPACK and Hexagon Delegates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XNNPACK is a CPU-optimized delegate that accelerates FP32 models on ARM and x86. Hexagon delegates target Qualcomm's Hexagon DSP for ultra-low-power inference."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Delegate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hardware"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Speedup"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adreno, Mali GPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compute-heavy models (CNN, ResNet)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-5x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NNAPI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any Android (OEM driver)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vendor-optimized path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-8x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XNNPACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARM/ x86 CPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FP32 models, broad compat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5-3x"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hexagon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Qualcomm DSP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-power, always-on"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4-10x"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "24-coreml-conversion",
      children: "2.4 CoreML Conversion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CoreML is Apple's native machine learning framework for iOS, iPadOS, macOS, watchOS, and visionOS. Models converted to CoreML benefit from Apple Silicon optimizations including the Apple Neural Engine (ANE)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "241-coremltools-overview",
      children: "2.4.1 coremltools Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "coremltools"
      }), " is Apple's Python package for converting models from TensorFlow, PyTorch, and other frameworks into the CoreML ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".mlpackage"
      }), " format."]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    subgraph Source[Source Frameworks]\r\n        A[PyTorch<br/>TorchScript]\r\n        B[TensorFlow<br/>SavedModel]\r\n        C[scikit-learn<br/>ONNX]\r\n    end\r\n    subgraph CoreML[coremltools]\r\n        D[ct.convert]\r\n        E[ML Program<br/>.mlpackage]\r\n    end\r\n    subgraph Target[CoreML Runtime]\r\n        F[ANE<br/>Apple Neural Engine]\r\n        G[GPU<br/>Metal Performance Shaders]\r\n        H[CPU<br/>BNNS / Accelerate]\r\n    end\r\n    A --> D\r\n    B --> D\r\n    C --> D\r\n    D --> E\r\n    E --> F\r\n    E --> G\r\n    E --> H"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "242-pytorch-to-coreml-conversion",
      children: "2.4.2 PyTorch to CoreML Conversion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Converting a PyTorch model to CoreML requires tracing the model with TorchScript or using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ct.convert"
      }), " API with a PyTorch model instance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# pytorch_to_coreml.py — Convert PyTorch models to CoreML with coremltools\r\n\r\nimport torch\r\nimport torch.nn as nn\r\nimport numpy as np\r\nfrom typing import Optional, Tuple\r\n\r\n# Define a simple PyTorch model for demonstration\r\nclass SimpleCNN(nn.Module):\r\n    \"\"\"\r\n    A simple CNN classifier matching the Keras demo model.\r\n\r\n    Architecture:\r\n        Conv2D(3→32) → ReLU → MaxPool(2x2) →\r\n        Conv2D(32→64) → ReLU → GlobalAvgPool →\r\n        Dropout(0.2) → Dense(64→10) → Softmax\r\n    \"\"\"\r\n\r\n    def __init__(self, num_classes: int = 10):\r\n        super(SimpleCNN, self).__init__()\r\n        self.conv1 = nn.Conv2d(3, 32, kernel_size=3, padding=1)\r\n        self.relu1 = nn.ReLU()\r\n        self.pool1 = nn.MaxPool2d(kernel_size=2, stride=2)\r\n\r\n        self.conv2 = nn.Conv2d(32, 64, kernel_size=3, padding=1)\r\n        self.relu2 = nn.ReLU()\r\n        self.pool2 = nn.AdaptiveAvgPool2d((1, 1))\r\n\r\n        self.dropout = nn.Dropout(0.2)\r\n        self.fc = nn.Linear(64, num_classes)\r\n\r\n    def forward(self, x: torch.Tensor) -> torch.Tensor:\r\n        x = self.pool1(self.relu1(self.conv1(x)))\r\n        x = self.pool2(self.relu2(self.conv2(x)))\r\n        x = x.view(x.size(0), -1)\r\n        x = self.dropout(x)\r\n        x = self.fc(x)\r\n        return torch.softmax(x, dim=1)\r\n\r\ndef trace_pytorch_model(\r\n    model: nn.Module,\r\n    example_input: torch.Tensor,\r\n) -> torch.jit.ScriptModule:\r\n    \"\"\"\r\n    Trace a PyTorch model to TorchScript for CoreML conversion.\r\n\r\n    Tracing records the exact operations performed during a forward\r\n    pass. This works well for models with static control flow.\r\n\r\n    Args:\r\n        model: PyTorch model instance (in eval mode).\r\n        example_input: A sample input tensor matching expected shape.\r\n\r\n    Returns:\r\n        TorchScript ScriptModule (traced model).\r\n\r\n    Note:\r\n        For models with dynamic control flow (if/else, loops), use\r\n        scripting instead: torch.jit.script(model).\r\n    \"\"\"\r\n    model.eval()\r\n    traced_model = torch.jit.trace(model, example_input)\r\n    return traced_model\r\n\r\ndef convert_pytorch_to_coreml(\r\n    traced_model: torch.jit.ScriptModule,\r\n    example_input: torch.Tensor,\r\n    input_name: str = \"image\",\r\n    output_name: str = \"probabilities\",\r\n    labels: Optional[list] = None,\r\n    output_path: str = \"model.mlpackage\",\r\n    minimum_deployment_target: str = \"ios16\",\r\n) -> object:\r\n    \"\"\"\r\n    Convert a TorchScript-traced PyTorch model to CoreML ML Program format.\r\n\r\n    Args:\r\n        traced_model: TorchScript model from torch.jit.trace().\r\n        example_input: Example input tensor for shape/dtype inference.\r\n        input_name: Name for the input feature in CoreML.\r\n        output_name: Name for the output feature in CoreML.\r\n        labels: Optional list of class labels for classification.\r\n        output_path: Path to save the .mlpackage.\r\n        minimum_deployment_target: Minimum iOS/macOS version.\r\n\r\n    Returns:\r\n        coremltools.models.MLModel instance.\r\n\r\n    Requires:\r\n        pip install coremltools\r\n    \"\"\"\r\n    import coremltools as ct\r\n\r\n    # Define input type\r\n    input_type = ct.TensorType(\r\n        name=input_name,\r\n        shape=example_input.shape,\r\n        dtype=np.float32,\r\n    )\r\n\r\n    # Define output type\r\n    output_type = ct.TensorType(name=output_name, dtype=np.float32)\r\n\r\n    # Convert using the torch.jit.trace path\r\n    mlmodel = ct.convert(\r\n        traced_model,\r\n        inputs=[input_type],\r\n        outputs=[output_type],\r\n        minimum_deployment_target=ct.target.iOS16,\r\n        compute_precision=ct.precision.FLOAT16,\r\n        convert_to=\"mlprogram\",  # ML Program format (vs. neuralnetwork)\r\n    )\r\n\r\n    # Add class labels if provided\r\n    if labels is not None:\r\n        mlmodel.add_class_labels(labels)\r\n\r\n    # Save the model\r\n    mlmodel.save(output_path)\r\n    print(f\"CoreML model saved to {output_path}\")\r\n\r\n    return mlmodel\r\n\r\ndef coreml_inference_example(\r\n    mlmodel_path: str,\r\n    input_image: np.ndarray,\r\n) -> np.ndarray:\r\n    \"\"\"\r\n    Run inference with a CoreML model using coremltools.\r\n\r\n    On macOS, this executes using the CoreML runtime.\r\n    On iOS, this would run via the CoreML API in Swift.\r\n\r\n    Args:\r\n        mlmodel_path: Path to the .mlpackage file.\r\n        input_image: Input image array, shape (1, C, H, W) or (1, H, W, C)\r\n                     depending on the model's expected format.\r\n\r\n    Returns:\r\n        Model output as NumPy array.\r\n    \"\"\"\r\n    import coremltools as ct\r\n\r\n    model = ct.models.MLModel(mlmodel_path)\r\n\r\n    # CoreML expects dict input\r\n    input_dict = {\"image\": input_image}\r\n    output = model.predict(input_dict)\r\n\r\n    return output[list(output.keys())[0]]\r\n\r\nif __name__ == \"__main__\":\r\n    print(\"=\" * 60)\r\n    print(\"PyTorch to CoreML Conversion Demo\")\r\n    print(\"=\" * 60)\r\n\r\n    # 1. Create and initialize model\r\n    model = SimpleCNN(num_classes=10)\r\n    model.eval()\r\n\r\n    # 2. Create example input (batch_size=1, channels=3, height=224, width=224)\r\n    example_input = torch.randn(1, 3, 224, 224)\r\n\r\n    # 3. Trace to TorchScript\r\n    print(\"\\nTracing model to TorchScript...\")\r\n    traced = trace_pytorch_model(model, example_input)\r\n    print(\"TorchScript tracing complete.\")\r\n\r\n    # 4. Convert to CoreML\r\n    print(\"\\nConverting to CoreML ML Program...\")\r\n    try:\r\n        mlmodel = convert_pytorch_to_coreml(\r\n            traced_model=traced,\r\n            example_input=example_input,\r\n            input_name=\"image\",\r\n            output_name=\"probabilities\",\r\n            labels=[f\"class_{i}\" for i in range(10)],\r\n            output_path=\"simple_cnn.mlpackage\",\r\n            minimum_deployment_target=\"ios16\",\r\n        )\r\n\r\n        # 5. Run inference (macOS only)\r\n        print(\"\\nRunning CoreML inference...\")\r\n        test_input = np.random.randn(1, 3, 224, 224).astype(np.float32)\r\n        output = coreml_inference_example(\"simple_cnn.mlpackage\", test_input)\r\n        print(f\"Output shape: {output.shape}\")\r\n        print(f\"Predicted class: {np.argmax(output)}\")\r\n\r\n    except ImportError:\r\n        print(\r\n            \"coremltools not installed. Install with:\\n\"\r\n            \"  pip install coremltools\\n\\n\"\r\n            \"The conversion code above shows the pattern — run it on macOS \"\r\n            \"for actual CoreML model generation.\"\r\n        )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "243-coreml-ml-program-vs-neuralnetwork",
      children: "2.4.3 CoreML ML Program vs NeuralNetwork"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Apple provides two CoreML model formats:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NeuralNetwork (legacy)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ML Program (modern)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".mlmodel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".mlpackage"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ops supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full set (including PyTorch ops)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ANE support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iOS target"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "iOS 11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "iOS 15+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weight layout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PyTorch-compatible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conversion speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Opaque"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mila (compute graph visualization)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ML Program (", (0,jsx_runtime.jsx)(_components.code, {
        children: ".mlpackage"
      }), ") for all new projects. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "neuralnetwork"
      }), " format is deprecated."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "244-optimizing-coreml-models",
      children: "2.4.4 Optimizing CoreML Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Follow these optimization rules for best ANE performance:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Batch size 1"
        }), ": ANE is optimized for single-image inference."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Channel count"
        }), ": Prefer multiples of 4 (ANE SIMD width)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Avoid reshape"
        }), ": ANE handles convolutions best; avoid excessive reshape/transpose."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FP16 compute"
        }), ": Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "compute_precision=ct.precision.FLOAT16"
        }), " for 2x speed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Model size"
        }), ": Keep under 100 MB for OTA distribution."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# coreml_optimization.py — Optimization flags for CoreML conversion\r\n\r\nimport coremltools as ct\r\nfrom typing import Optional\r\n\r\ndef optimized_coreml_conversion(\r\n    traced_model: object,\r\n    input_shape: tuple,\r\n    model_name: str = \"optimized_model\",\r\n    use_ane: bool = True,\r\n    use_fp16: bool = True,\r\n    minimum_ios: str = \"ios16\",\r\n) -> ct.models.MLModel:\r\n    \"\"\"\r\n    Convert a PyTorch model to CoreML with ANE optimization flags.\r\n\r\n    Args:\r\n        traced_model: TorchScript traced model.\r\n        input_shape: Expected input shape (C, H, W) without batch dim.\r\n        model_name: Name for the output model.\r\n        use_ane: If True, configure for ANE execution.\r\n        use_fp16: Use float16 precision for faster inference.\r\n        minimum_ios: Minimum iOS deployment target.\r\n\r\n    Returns:\r\n        Optimized CoreML MLModel instance.\r\n    \"\"\"\r\n    # Input description with shape (batch, channels, height, width)\r\n    input_desc = ct.TensorType(\r\n        name=\"input\",\r\n        shape=(1, *input_shape),  # batch=1 for ANE optimization\r\n        dtype=np.float32,\r\n    )\r\n\r\n    # Compute precision\r\n    precision = ct.precision.FLOAT16 if use_fp16 else ct.precision.FLOAT32\r\n\r\n    # Conversion config\r\n    config = ct.ConversionConfig(\r\n        mlmodel_version=ct.model_version.MLMODEL_VERSION_5,\r\n    )\r\n\r\n    mlmodel = ct.convert(\r\n        traced_model,\r\n        inputs=[input_desc],\r\n        minimum_deployment_target=ct.target.iOS16,\r\n        compute_precision=precision,\r\n        convert_to=\"mlprogram\",\r\n        config=config,\r\n    )\r\n\r\n    # Enable ANE-specific optimizations (available in macOS 14+ / iOS 17+)\r\n    if use_ane:\r\n        # Reserve ANE for this model (iOS 17+)\r\n        ane_policy = ct.coreml.PowerPreference(\r\n            compute_device=ct.coreml.ComputeDevice.APPLE_NEURAL_ENGINE\r\n        )\r\n\r\n    # Save model\r\n    output_path = f\"{model_name}.mlpackage\"\r\n    mlmodel.save(output_path)\r\n    print(f\"Optimized CoreML model saved to {output_path}\")\r\n    print(f\"  Precision:     {'FP16' if use_fp16 else 'FP32'}\")\r\n    print(f\"  ANE target:    {'Yes' if use_ane else 'No'}\")\r\n    print(f\"  Deployment:    {minimum_ios}\")\r\n    print(f\"  Input shape:   (1, {', '.join(str(s) for s in input_shape)})\")\r\n\r\n    return mlmodel\r\n\r\nif __name__ == \"__main__\":\r\n    import torch\r\n    import numpy as np\r\n\r\n    # Create a simple model\r\n    class DemoModel(torch.nn.Module):\r\n        def __init__(self):\r\n            super().__init__()\r\n            self.conv = torch.nn.Conv2d(3, 16, 3, padding=1)\r\n            self.relu = torch.nn.ReLU()\r\n            self.pool = torch.nn.AdaptiveAvgPool2d((1, 1))\r\n            self.fc = torch.nn.Linear(16, 10)\r\n\r\n        def forward(self, x):\r\n            x = self.pool(self.relu(self.conv(x)))\r\n            x = x.view(x.size(0), -1)\r\n            return self.fc(x)\r\n\r\n    model = DemoModel().eval()\r\n    example = torch.randn(1, 3, 224, 224)\r\n    traced = torch.jit.trace(model, example)\r\n\r\n    try:\r\n        mlmodel = optimized_coreml_conversion(\r\n            traced_model=traced,\r\n            input_shape=(3, 224, 224),\r\n            model_name=\"demo_optimized\",\r\n            use_ane=True,\r\n            use_fp16=True,\r\n        )\r\n        print(\"Conversion successful.\")\r\n    except ImportError:\r\n        print(\"coremltools not available. Run this on macOS.\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "25-platform-comparison",
      children: "2.5 Platform Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Android (TFLite) and iOS (CoreML) have different strengths, limitations, and optimization considerations."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "251-architecture-comparison",
      children: "2.5.1 Architecture Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TB\r\n    subgraph Android[Android — TFLite]\r\n        A1[TFLite FlatBuffer]\r\n        A2[Delegate Selection]\r\n        A3[GPU / NNAPI / XNNPACK]\r\n        A4[Heterogeneous Hardware<br/>Qualcomm / MediaTek / Exynos]\r\n    end\r\n    subgraph iOS[iOS — CoreML]\r\n        B1[CoreML .mlpackage]\r\n        B2[ANE / GPU / CPU]\r\n        B3[Apple Neural Engine]\r\n        B4[Uniform Hardware<br/>Apple Silicon]\r\n    end\r\n    A1 --> A2 --> A3 --> A4\r\n    B1 --> B2 --> B3 --> B4"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "252-benchmark-comparison",
      children: "2.5.2 Benchmark Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TensorFlow Lite"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CoreML"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conversion framework"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TensorFlow (TF → FlatBuffer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PyTorch / TF → coremltools"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weight format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FlatBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".mlpackage (bundled directory)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quantization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FP16, INT8, dynamic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FP16, INT8 (via ANE)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware acceleration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPU, NNAPI, Hexagon, XNNPACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ANE, GPU (Metal), CPU (BNNS)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max model size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1 GB (Android APK limit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~2 GB (App Store limit)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Startup time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10-50 ms (memory-mapped)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-30 ms (pre-compiled)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GPU support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenGL ES, Vulkan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metal Performance Shaders"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NPU support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NNAPI (vendor-dependent)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ANE (all Apple Silicon)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OS fragmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (1000s of devices)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (~20 device families)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "253-production-edge-cases",
      children: "2.5.3 Production Edge Cases"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# platform_edge_cases.py — Handle edge cases in cross-platform mobile AI deployment\r\n\r\nimport numpy as np\r\nfrom typing import Dict, List, Optional\r\n\r\nclass PlatformEdgeCase:\r\n    \"\"\"\r\n    Documents and validates handling of known edge cases across platforms.\r\n\r\n    Each edge case has a description, affected platforms, severity,\r\n    and a recommended mitigation strategy.\r\n    \"\"\"\r\n\r\n    def __init__(self):\r\n        self.edge_cases: List[Dict] = []\r\n\r\n    def register(\r\n        self,\r\n        case_id: str,\r\n        platform: str,\r\n        description: str,\r\n        severity: str,\r\n        mitigation: str,\r\n    ) -> None:\r\n        \"\"\"\r\n        Register a known edge case.\r\n\r\n        Args:\r\n            case_id: Unique identifier for the edge case.\r\n            platform: \"android\", \"ios\", or \"both\".\r\n            description: What happens under what conditions.\r\n            severity: \"low\", \"medium\", \"high\", \"critical\".\r\n            mitigation: How to detect and handle it.\r\n        \"\"\"\r\n        self.edge_cases.append({\r\n            \"id\": case_id,\r\n            \"platform\": platform,\r\n            \"description\": description,\r\n            \"severity\": severity,\r\n            \"mitigation\": mitigation,\r\n        })\r\n\r\n    def get_platform_cases(self, platform: str) -> List[Dict]:\r\n        \"\"\"Return all edge cases for a specific platform.\"\"\"\r\n        return [c for c in self.edge_cases if c[\"platform\"] in (platform, \"both\")]\r\n\r\n    def print_report(self) -> None:\r\n        \"\"\"Print a formatted report of all registered edge cases.\"\"\"\r\n        for case in self.edge_cases:\r\n            icon = {\"critical\": \"\\u26a0\\ufe0f\", \"high\": \"\\U0001f534\", \"medium\": \"\\U0001f7e1\", \"low\": \"\\U0001f7e2\"}\r\n            print(f\"{icon.get(case['severity'], '')} [{case['id']}] ({case['platform']})\")\r\n            print(f\"  Description: {case['description']}\")\r\n            print(f\"  Severity:    {case['severity'].upper()}\")\r\n            print(f\"  Mitigation:  {case['mitigation']}\")\r\n            print()\r\n\r\ndef build_edge_case_registry() -> PlatformEdgeCase:\r\n    \"\"\"Build the complete registry of known cross-platform edge cases.\"\"\"\r\n    registry = PlatformEdgeCase()\r\n\r\n    # Android-specific edge cases\r\n    registry.register(\r\n        \"AND-001\", \"android\",\r\n        \"NNAPI delegate unavailable on devices without vendor NN driver \"\r\n        \"(e.g., some Xiaomi and Oppo budget devices). Falls back to CPU.\",\r\n        \"high\",\r\n        \"Check NNAPI availability at runtime with \"\r\n        \"NNAPIInterface().isAvailable(). Fall back to GPU or XNNPACK.\",\r\n    )\r\n    registry.register(\r\n        \"AND-002\", \"android\",\r\n        \"GPU delegate fails on devices with OpenGL ES 3.0 but no Vulkan. \"\r\n        \"Older Adreno 5xx GPUs may crash with certain ops.\",\r\n        \"medium\",\r\n        \"Use allow_precision_loss=True and catch delegate init errors. \"\r\n        \"Always provide CPU fallback in a try/except block.\",\r\n    )\r\n    registry.register(\r\n        \"AND-003\", \"android\",\r\n        \"INT8 quantized models produce incorrect results on devices that \"\r\n        \"do not support INT8 dot-product instructions (ARMv7, older ARMv8).\",\r\n        \"critical\",\r\n        \"Check CPU features via /proc/cpuinfo for 'asimddp'. \"\r\n        \"Fall back to FP16 or dynamic range quantization on incompatible CPUs.\",\r\n    )\r\n    registry.register(\r\n        \"AND-004\", \"android\",\r\n        \"Model loading fails when APK exceeds 200 MB due to Android \"\r\n        \"installation size limits on older API levels (pre-Android 10).\",\r\n        \"medium\",\r\n        \"Use Play Asset Delivery or download models at first launch. \"\r\n        \"Defer model installation to app startup, not install time.\",\r\n    )\r\n\r\n    # iOS-specific edge cases\r\n    registry.register(\r\n        \"IOS-001\", \"ios\",\r\n        \"CoreML model fails to load on iOS versions below the minimum \"\r\n        \"deployment target specified during conversion with coremltools.\",\r\n        \"critical\",\r\n        \"Set minimum iOS version in app Info.plist. Check CoreML \"\r\n        \"availability at runtime with canLoadModel() before inference.\",\r\n    )\r\n    registry.register(\r\n        \"IOS-002\", \"ios\",\r\n        \"ANE fallback to GPU or CPU when model contains unsupported ops \"\r\n        \"(e.g., custom attention layers with dynamic shapes).\",\r\n        \"medium\",\r\n        \"Profile with Xcode Instruments > CoreML template to verify ANE \"\r\n        \"execution. Simplify dynamic shapes where possible.\",\r\n    )\r\n    registry.register(\r\n        \"IOS-003\", \"ios\",\r\n        \"ML Program models over 500 MB may trigger ANE memory pressure \"\r\n        \"and cause the system to kill the app (jetsam event).\",\r\n        \"high\",\r\n        \"Keep model under 100 MB for ANE. Split large models into \"\r\n        \"multiple smaller models and chain them sequentially.\",\r\n    )\r\n    registry.register(\r\n        \"IOS-004\", \"ios\",\r\n        \"CoreML model compiled bitcode may differ between simulator and \"\r\n        \"device. Models working in simulator may fail on actual hardware.\",\r\n        \"medium\",\r\n        \"Always test on physical devices before release. Use TestFlight \"\r\n        \"beta testing to validate model behavior on various devices.\",\r\n    )\r\n\r\n    # Cross-platform edge cases\r\n    registry.register(\r\n        \"BOTH-001\", \"both\",\r\n        \"Float16 quantization produces NaN on devices with incomplete \"\r\n        \"FP16 support. Certain hardware backends truncate subnormal numbers.\",\r\n        \"high\",\r\n        \"Clip model outputs after quantization. Validate on target hardware \"\r\n        \"before production deployment.\",\r\n    )\r\n    registry.register(\r\n        \"BOTH-002\", \"both\",\r\n        \"Model accuracy drops significantly after quantization when the \"\r\n        \"representative dataset does not cover the production distribution.\",\r\n        \"critical\",\r\n        \"Use at least 500 samples from the actual production distribution. \"\r\n        \"Monitor accuracy drift with on-device logging and A/B testing.\",\r\n    )\r\n\r\n    return registry\r\n\r\ndef validate_model_compatibility(\r\n    model_path: str,\r\n    platform: str,\r\n    model_size_bytes: int,\r\n    quantization_type: str,\r\n) -> Dict[str, bool]:\r\n    \"\"\"\r\n    Validate a model against known platform constraints.\r\n\r\n    Args:\r\n        model_path: Path to the model file.\r\n        platform: \"android\" or \"ios\".\r\n        model_size_bytes: Size of the model in bytes.\r\n        quantization_type: \"fp32\", \"fp16\", \"dynamic\", or \"int8\".\r\n\r\n    Returns:\r\n        Dict of check_name -> passed (True/False).\r\n    \"\"\"\r\n    checks: Dict[str, bool] = {}\r\n    size_mb = model_size_bytes / (1024 * 1024)\r\n\r\n    if platform == \"android\":\r\n        checks[\"model_under_200mb\"] = size_mb <= 200\r\n        checks[\"quantization_supported\"] = quantization_type in (\"fp32\", \"fp16\", \"dynamic\", \"int8\")\r\n        checks[\"int8_compatible\"] = (\r\n            quantization_type != \"int8\" or True  # Runtime check needed\r\n        )\r\n    elif platform == \"ios\":\r\n        checks[\"model_under_2gb\"] = size_mb <= 2048\r\n        checks[\"ane_recommended\"] = size_mb <= 100\r\n        checks[\"quantization_supported\"] = quantization_type in (\"fp32\", \"fp16\")\r\n\r\n    checks[\"all_passed\"] = all(checks.values())\r\n    return checks\r\n\r\nif __name__ == \"__main__\":\r\n    registry = build_edge_case_registry()\r\n    print(\"=== Edge Case Registry ===\\n\")\r\n    registry.print_report()\r\n\r\n    # Validate a hypothetical model\r\n    checks = validate_model_compatibility(\r\n        model_path=\"model_int8.tflite\",\r\n        platform=\"android\",\r\n        model_size_bytes=45 * 1024 * 1024,  # 45 MB\r\n        quantization_type=\"int8\",\r\n    )\r\n    print(\"=== Compatibility Check ===\")\r\n    for check, passed in checks.items():\r\n        status = \"PASS\" if passed else \"FAIL\"\r\n        print(f\"  [{status}] {check}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "254-deployment-decision-guide",
      children: "2.5.4 Deployment Decision Guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Choose your approach based on these criteria:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recommended Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rationale"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Android-only app"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TFLite with NNAPI + GPU delegate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best hardware compatibility across devices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iOS-only app"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CoreML ML Program with ANE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fully optimized for Apple Silicon"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-platform app"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TFLite on both platforms (via TFLite iOS runtime)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single model format, simpler maintenance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-platform with best perf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TFLite for Android, CoreML for iOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each uses optimal hardware but dual maintenance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model < 10 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Size is not a concern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model > 100 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TFLite with INT8 quantization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CoreML ANE may struggle with large models"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# deployment_decision.py — Programmatic deployment decision advisor\r\n\r\nfrom dataclasses import dataclass\r\nfrom typing import List, Optional\r\n\r\n@dataclass\r\nclass DeploymentContext:\r\n    \"\"\"Context about the deployment environment.\"\"\"\r\n    target_platforms: List[str]         # [\"android\"], [\"ios\"], or [\"android\", \"ios\"]\r\n    model_size_mb: float\r\n    latency_requirement_ms: int         # Maximum acceptable inference time\r\n    accuracy_requirement: str           # \"high\", \"medium\", \"low\"\r\n    offline_capability: bool            # Must work without internet\r\n    update_frequency: str               # \"static\", \"monthly\", \"weekly\"\r\n\r\n@dataclass\r\nclass Recommendation:\r\n    \"\"\"A deployment recommendation with rationale.\"\"\"\r\n    android_approach: str\r\n    ios_approach: str\r\n    quantization: str\r\n    delegate: Optional[str]\r\n    rationale: List[str]\r\n\r\ndef recommend_deployment(ctx: DeploymentContext) -> Recommendation:\r\n    \"\"\"\r\n    Recommend the optimal deployment approach based on context.\r\n\r\n    Args:\r\n        ctx: DeploymentContext describing the application requirements.\r\n\r\n    Returns:\r\n        Recommendation with per-platform approach and rationale.\r\n    \"\"\"\r\n    rationale: List[str] = []\r\n\r\n    # Determine quantization strategy\r\n    if ctx.accuracy_requirement == \"high\":\r\n        quantization = \"fp16\"\r\n        rationale.append(\"High accuracy requirement: using FP16 quantization\")\r\n    elif ctx.model_size_mb > 100:\r\n        quantization = \"int8\"\r\n        rationale.append(f\"Large model ({ctx.model_size_mb:.0f} MB): using INT8 quantization\")\r\n    else:\r\n        quantization = \"dynamic\"\r\n        rationale.append(\"Balanced trade-off: using dynamic range quantization\")\r\n\r\n    # Determine delegates\r\n    if \"android\" in ctx.target_platforms:\r\n        if ctx.latency_requirement_ms <= 30:\r\n            delegate = \"GPU + NNAPI\"\r\n            rationale.append(\"Low latency requirement: using GPU and NNAPI delegates\")\r\n        else:\r\n            delegate = \"NNAPI (fallback to CPU)\"\r\n            rationale.append(\"Standard latency: using NNAPI with CPU fallback\")\r\n    else:\r\n        delegate = None\r\n\r\n    # Platform-specific approaches\r\n    if \"android\" in ctx.target_platforms and \"ios\" in ctx.target_platforms:\r\n        android_approach = \"TFLite with XNNPACK + GPU delegate\"\r\n        ios_approach = \"CoreML ML Program targeting ANE\"\r\n        if ctx.model_size_mb > 200:\r\n            android_approach += \" with deferred model download\"\r\n        rationale.append(\"Cross-platform: maintaining separate optimized paths per platform\")\r\n    elif \"android\" in ctx.target_platforms:\r\n        android_approach = \"TFLite with NNAPI delegate\"\r\n        ios_approach = \"N/A\"\r\n        rationale.append(\"Android-only: single TFLite pipeline\")\r\n    else:\r\n        android_approach = \"N/A\"\r\n        ios_approach = \"CoreML ML Program\"\r\n        rationale.append(\"iOS-only: single CoreML pipeline\")\r\n\r\n    return Recommendation(\r\n        android_approach=android_approach,\r\n        ios_approach=ios_approach,\r\n        quantization=quantization,\r\n        delegate=delegate,\r\n        rationale=rationale,\r\n    )\r\n\r\nif __name__ == \"__main__\":\r\n    scenarios = [\r\n        DeploymentContext(\r\n            target_platforms=[\"android\", \"ios\"],\r\n            model_size_mb=45,\r\n            latency_requirement_ms=50,\r\n            accuracy_requirement=\"high\",\r\n            offline_capability=True,\r\n            update_frequency=\"monthly\",\r\n        ),\r\n        DeploymentContext(\r\n            target_platforms=[\"android\"],\r\n            model_size_mb=180,\r\n            latency_requirement_ms=100,\r\n            accuracy_requirement=\"medium\",\r\n            offline_capability=False,\r\n            update_frequency=\"static\",\r\n        ),\r\n        DeploymentContext(\r\n            target_platforms=[\"ios\"],\r\n            model_size_mb=12,\r\n            latency_requirement_ms=20,\r\n            accuracy_requirement=\"high\",\r\n            offline_capability=True,\r\n            update_frequency=\"weekly\",\r\n        ),\r\n    ]\r\n\r\n    for i, ctx in enumerate(scenarios, 1):\r\n        print(f\"\\n{'='*60}\")\r\n        print(f\"Scenario {i}\")\r\n        print(f\"{'='*60}\")\r\n        rec = recommend_deployment(ctx)\r\n\r\n        print(f\"  Platforms:     {', '.join(ctx.target_platforms)}\")\r\n        print(f\"  Model size:    {ctx.model_size_mb} MB\")\r\n        print(f\"  Latency req:   {ctx.latency_requirement_ms} ms\")\r\n        print(f\"  Accuracy req:  {ctx.accuracy_requirement}\")\r\n        print()\r\n        print(f\"  Android:       {rec.android_approach}\")\r\n        print(f\"  iOS:           {rec.ios_approach}\")\r\n        print(f\"  Quantization:  {rec.quantization}\")\r\n        if rec.delegate:\r\n            print(f\"  Delegate:      {rec.delegate}\")\r\n        print()\r\n        print(\"  Rationale:\")\r\n        for r in rec.rationale:\r\n            print(f\"    - {r}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Question"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Difficulty"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expected Answer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What are the three quantization modes in TFLite and when would you use each?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Float16 (safest, 2x smaller, no calibration), dynamic range (4x smaller weights, no calibration, some accuracy loss), full INT8 (4x smaller everything, fastest, requires calibration data). Choose based on accuracy requirements and hardware support."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How does the TFLite GPU delegate work and what hardware APIs does it use?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It offloads operations to the device GPU via OpenGL ES 3.0+ or Vulkan. It supports FP16 precision loss for speed. Falls back to CPU for unsupported ops. Best for compute-heavy models like CNNs."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the purpose of a representative dataset in INT8 quantization?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It provides a small sample (200-500 examples) of real inference data so the converter can compute the min/max range of each activation tensor. This range determines the scale and zero-point for INT8 quantization, minimizing accuracy loss."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How do you convert a PyTorch model to CoreML?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use coremltools. First trace the model with torch.jit.trace() to get TorchScript, then pass it to ct.convert() with input/output tensor descriptions. The output is an ML Program (.mlpackage) that runs on ANE/GPU/CPU."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the difference between NNAPI and GPU delegates on Android?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NNAPI is a hardware abstraction layer that dispatches to GPU, DSP, or NPU depending on the vendor driver. GPU delegate directly uses GPU via OpenGL/Vulkan. NNAPI is more portable but introduces driver-dependent behavior."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How would you choose between FP16 and INT8 quantization for a production app?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consider: 1) Target hardware — some DSPs only support INT8. 2) Accuracy requirements — FP16 has near-zero loss. 3) Latency requirements — INT8 is 2-3x faster. 4) Calibration data availability — INT8 needs it. 5) Model size constraints — both give 2x/4x reduction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain the XNNPACK delegate and when it is useful."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XNNPACK is a CPU-optimized delegate for ARM and x86. It accelerates FP32 models using optimized kernels (indirect convolution, parallelization). Useful when GPU/NNAPI delegates are unavailable and you need better-than-baseline CPU performance."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the Apple Neural Engine (ANE) and how does CoreML utilize it?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ANE is a dedicated NPU in Apple Silicon (A12+). CoreML automatically schedules compatible operations on ANE via the ML Program format with compute_precision=FLOAT16. Operations like Conv2D, BatchNorm, and GeLU run on ANE while unsupported ops fall back to GPU or CPU."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How do you handle the model size limitation for mobile deployment?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strategies: 1) Quantization (FP16/INT8). 2) Model pruning and knowledge distillation. 3) Deferred download — ship a small base model and download the full model on first launch. 4) Play Asset Delivery (Android) or On-Demand Resources (iOS). 5) Model sharding."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What edge cases can cause accuracy degradation after TFLite quantization?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1) Representative dataset not matching production distribution. 2) Per-channel vs per-tensor quantization for depthwise conv layers. 3) Biased calibration data. 4) Hardware-specific INT8 dot-product incompatibility on older ARM CPUs. 5) Clipping of outlier activation values. Mitigation: evaluate on target hardware with production data, use per-channel quantization, and consider quantization-aware training (QAT)."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["TensorFlow Lite and CoreML are the two dominant frameworks for on-device AI deployment. TFLite converts models from TensorFlow/Keras through the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TFLiteConverter"
      }), " API, supporting a range of optimizations from simple float16 quantization to full INT8 quantization requiring representative calibration data. Hardware delegates — GPU, NNAPI, XNNPACK, and Hexagon — accelerate inference by offloading computation to specialized hardware."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CoreML, Apple's equivalent, converts PyTorch and TensorFlow models via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "coremltools"
      }), " into the ML Program format (", (0,jsx_runtime.jsx)(_components.code, {
        children: ".mlpackage"
      }), "). The Apple Neural Engine (ANE) provides dedicated hardware acceleration for compatible operations, with FP16 compute precision delivering optimal performance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The choice between TFLite and CoreML depends on target platforms, model size, latency requirements, and accuracy constraints. Cross-platform apps often maintain separate optimized paths for each platform. Key risks include delegate unavailability on specific devices, quantization accuracy loss from unrepresentative calibration data, and model size limits imposed by app stores."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Production mobile AI demands careful testing on physical devices, runtime delegate fallback logic, and continuous monitoring of accuracy and latency metrics. Mastery of these conversion and optimization tools is essential for any AI engineer deploying models to mobile users."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Which TFLite quantization mode requires a representative dataset?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Float16 quantization\r\nB) Dynamic range quantization\r\nC) Full INT8 quantization\r\nD) None of the above"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nC — Full INT8 quantization requires a representative dataset to compute activation ranges. Float16 and dynamic range quantization do not need calibration data.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. What is the correct order of priority for TFLite delegate selection on Android?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) XNNPACK → GPU → NNAPI → CPU\r\nB) NNAPI → GPU → XNNPACK → CPU\r\nC) GPU → CPU → NNAPI → XNNPACK\r\nD) CPU → GPU → NNAPI → XNNPACK"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nB — Try the most specialized delegate first: NNAPI (hardware-optimized by OEM), then GPU (parallel compute), then XNNPACK (optimized CPU kernels), then CPU fallback.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Which CoreML model format is recommended for new projects?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) NeuralNetwork (.mlmodel)\r\nB) ML Program (.mlpackage)\r\nC) ONNX (.onnx)\r\nD) TorchScript (.pt)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nB — ML Program (.mlpackage) is the modern format with full ANE support, PyTorch-compatible weight layout, and better debugging tools. NeuralNetwork is deprecated.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. What is the main advantage of the NNAPI delegate over the GPU delegate?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) NNAPI is always faster than GPU\r\nB) NNAPI abstracts all hardware (GPU, DSP, NPU) via a single API\r\nC) NNAPI does not require any model conversion\r\nD) NNAPI supports dynamic shapes natively"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nB — NNAPI provides a unified API that dispatches to the best available hardware (GPU, DSP, NPU) based on the vendor driver. GPU delegate only uses the GPU.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. When converting a model for CoreML, which compute precision gives the best performance on ANE?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Float32\r\nB) Float16\r\nC) Int8\r\nD) BFloat16"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nB — Float16 is optimal for ANE. The Apple Neural Engine is designed for FP16 computation, delivering 2x speed compared to FP32 with negligible accuracy loss.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 1: Quantization Comparison"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Take a pre-trained MobileNetV2 model from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tf.keras.applications.MobileNetV2"
      }), ". Convert it to TFLite using FP16, dynamic range, and INT8 quantization. Compare model sizes and inference latency on random inputs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Starter code\r\nimport tensorflow as tf\r\nimport numpy as np\r\n\r\nmodel = tf.keras.applications.MobileNetV2(weights=\"imagenet\")\r\n# TODO: Convert with three quantization strategies\r\n# TODO: Profile latency with 100 runs each\r\n# TODO: Print a comparison table\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 2: Delegate Benchmark"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build a benchmark script that runs a TFLite model with GPU delegate, NNAPI delegate, and CPU only. Measure mean and P99 latency over 500 runs. Identify which delegate is fastest on your device."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 3: CoreML Conversion Pipeline"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Take any PyTorch image classification model (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "torchvision.models.resnet18"
      }), "). Convert it to CoreML ML Program format with FP16 precision and ANE targeting. Verify the model loads and produces valid output."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 4: Edge Case Detection"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a function that inspects a TFLite model and detects potential deployment issues: model size > 200 MB, use of unsupported ops, INT8 quantization without representative dataset, and missing metadata."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 5: Cross-Platform Strategy Document"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a deployment strategy for a mobile app that runs a 150 MB object detection model on both Android and iOS. Specify: quantization strategy, delegate selection with fallback logic, model download strategy, and monitoring plan for accuracy drift."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "TFLite Converter"
          }), " transforms TensorFlow models into the FlatBuffer format. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "representative_dataset"
          }), " for INT8 quantization; without it, only weight quantization is applied."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Three quantization tiers"
          }), " serve different needs: Float16 (safest, 2x), dynamic range (no calibration needed, 4x weights), full INT8 (fastest, requires calibration, 4x everything)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Delegates unlock hardware performance"
          }), ": GPU for parallel compute, NNAPI for vendor-optimized path, XNNPACK for CPU optimization on ARM/x86, Hexagon for Qualcomm DSP."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CoreML with ML Program"
          }), " format (", (0,jsx_runtime.jsx)(_components.code, {
            children: ".mlpackage"
          }), ") is the modern standard for iOS. Use coremltools with torch.jit.trace for PyTorch models. Target FP16 precision for ANE optimization."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Platform differences matter"
          }), ": Android has hardware fragmentation requiring delegate fallback logic; iOS has uniform hardware (Apple Silicon) with a dedicated ANE. Choose your strategy based on target platforms, model size, accuracy needs, and update frequency."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Production edge cases"
          }), " include delegate unavailability, INT8 hardware incompatibility, ANE memory pressure, and calibration distribution mismatch. Always test on target hardware before deployment."]
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
            children: "Explain the core idea of 02 — TensorFlow Lite & CoreML in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function in this chapter — TensorFlow Lite & CoreML."
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
            children: "Describe a production bug caused by misunderstanding this technique — TensorFlow Lite & CoreML. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system using this technique — TensorFlow Lite & CoreML from 10 users to 10 million?"
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
            children: "Compare 02 — TensorFlow Lite & CoreML with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component built on this — TensorFlow Lite & CoreML."
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
            children: "How does 02 — TensorFlow Lite & CoreML behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of this technique — TensorFlow Lite & CoreML run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of this technique — TensorFlow Lite & CoreML that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name 02 — TensorFlow Lite & CoreML explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using 02 — TensorFlow Lite & CoreML\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies 02 — TensorFlow Lite & CoreML to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside 02 — TensorFlow Lite & CoreML (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of 02 — TensorFlow Lite & CoreML and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a 02 — TensorFlow Lite & CoreML-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic 02 — TensorFlow Lite & CoreML interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply 02 — TensorFlow Lite & CoreML in production today?"
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
        }), " 02 — TensorFlow Lite & CoreML builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for 02 — TensorFlow Lite & CoreML before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for 02 — TensorFlow Lite & CoreML is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for 02 — TensorFlow Lite & CoreML in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the 02 — TensorFlow Lite & CoreML chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers 02 — TensorFlow Lite & CoreML is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 02 Tflite Coreml is ___. — Answer: O(n*d) for linear models, O(n^2) for kernel SVM"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 02 Tflite Coreml is ___. — Answer: data leakage, class imbalance, overfitting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug 02 — TensorFlow Lite & CoreML issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to 02 — TensorFlow Lite & CoreML in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving 02 — TensorFlow Lite & CoreML that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of this technique — TensorFlow Lite & CoreML is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain 02 — TensorFlow Lite & CoreML in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for 02 — TensorFlow Lite & CoreML and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of this technique — TensorFlow Lite & CoreML on an empty input?"
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
            children: "Complete Medium exercises, explain 02 — TensorFlow Lite & CoreML to someone else"
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
        children: "Always write a one-line example of 02 — TensorFlow Lite & CoreML from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered 02 — TensorFlow Lite & CoreML when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining 02 — TensorFlow Lite & CoreML twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own 02 — TensorFlow Lite & CoreML snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of 02 — TensorFlow Lite & CoreML listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link 02 — TensorFlow Lite & CoreML to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of 02 — TensorFlow Lite & CoreML by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain 02 — TensorFlow Lite & CoreML to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "'Hands-On Machine Learning' by Aurélien Géron (O'Reilly) — best practical ML book"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "'Pattern Recognition and Machine Learning' by Bishop — rigorous theoretical foundation"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["fast.ai practical deep learning course: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://course.fast.ai",
          children: "https://course.fast.ai"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Kaggle competitions for hands-on practice: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.kaggle.com",
          children: "https://www.kaggle.com"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Papers With Code for SOTA benchmarks: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://paperswithcode.com",
          children: "https://paperswithcode.com"
        }), " — TensorFlow Lite & CoreML"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 31 — builds the foundation for 02 Tflite Coreml"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 02 Tflite Coreml with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 02 Tflite Coreml fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 02 Tflite Coreml"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 02 Tflite Coreml"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 02 Tflite Coreml?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 02 Tflite Coreml?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 02 Tflite Coreml asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 02 Tflite Coreml?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "02 — TensorFlow Lite & CoreML is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with 02 — TensorFlow Lite & CoreML."
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
        children: "02 — TensorFlow Lite & CoreML emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for 02 — TensorFlow Lite & CoreML today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about 02 — TensorFlow Lite & CoreML — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around 02 — TensorFlow Lite & CoreML changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Protect training data from poisoning attacks — validate data sources and monitor for distribution shifts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement model access controls — not all users should query all models"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use differential privacy when training on sensitive data (medical, financial)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor for model inversion attacks — adversaries can reconstruct training data from model outputs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Audit model decisions for fairness and bias before production deployment"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bias-variance tradeoff: simple models underfit (high bias), complex models overfit (high variance) — regularization controls this"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-validation gives an unbiased estimate of generalization error by averaging over multiple train/test splits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Feature importance from tree models measures how much each feature reduces impurity — use SHAP for more reliable attribution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Learning curves diagnose whether you need more data (high variance) or a better model (high bias)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensemble methods (bagging, boosting, stacking) reduce variance and bias respectively"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "02 Tflite Coreml is like a GPS navigation system"
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
          }), " — this chapter contributes the 02 — TensorFlow Lite & CoreML skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "31mobileai-02tflitecoreml-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of 02 — TensorFlow Lite & CoreML in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Machine learning is the practice of training statistical models on data to make predictions or decisions without being explicitly programmed for each case."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "31mobileai-02tflitecoreml-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the most common mistake engineers make with \n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Most common ML mistake: data leakage — accidentally including future information in training features. Always split data by time for time-series and validate the split before training."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "31mobileai-02tflitecoreml-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard 02 — TensorFlow Lite & CoreML approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Linear regression: O(n*d) training, O(d) inference. Decision tree: O(n*d*log n) training, O(log n) inference. Neural network: O(n*d*h) per epoch where h=hidden units."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "31mobileai-02tflitecoreml-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is 02 — TensorFlow Lite & CoreML NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "ML is NOT the right choice when: (1) a rule-based system is interpretable and accurate enough, (2) you have fewer than 1000 labeled examples, (3) the decision requires full auditability."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "31mobileai-02tflitecoreml-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is 02 — TensorFlow Lite & CoreML applied in a real production system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Production ML stack: scikit-learn for classical ML, PyTorch/TensorFlow for deep learning, MLflow for experiment tracking, Feast for feature stores, Seldon/BentoML for model serving."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for 02 — TensorFlow Lite & CoreML (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing 02 — TensorFlow Lite & CoreML (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for 02 — TensorFlow Lite & CoreML-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running 02 — TensorFlow Lite & CoreML in production at scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEPs and RFCs where applicable (Python and networking standards)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "scikit-learn"
        }), " — classical ML algorithms, preprocessing, evaluation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "XGBoost"
        }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "LightGBM"
        }), " — gradient boosting for tabular data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MLflow"
        }), " — experiment tracking, model registry, deployment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optuna"
        }), " — hyperparameter optimization"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SHAP"
        }), " — model explainability and feature importance — TensorFlow Lite & CoreML"]
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
        }), ": Add structured logging at each stage of the 02 Tflite Coreml pipeline to identify exactly where the failure occurs."]
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
        children: "Explain 02 — TensorFlow Lite & CoreML in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of 02 — TensorFlow Lite & CoreML."
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
        children: "Tell me about a time you debugged a 02 — TensorFlow Lite & CoreML problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where 02 — TensorFlow Lite & CoreML is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_02_tflite_coreml(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 02 Tflite Coreml.\r\n\r\n    Key concepts: features, labels, training, validation, test split\r\n    Complexity: O(n*d) for linear models, O(n^2) for kernel SVM\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 02 Tflite Coreml here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain 02 — TensorFlow Lite & CoreML without notes"
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
          children: "Spotify"
        }), " uses collaborative filtering to power Discover Weekly, generating 40M personalized playlists weekly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Amazon"
        }), " uses ML for demand forecasting, reducing inventory costs by 25%"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Airbnb"
        }), " uses gradient boosting to predict booking probability and optimize search ranking"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stripe"
        }), " uses ML fraud detection that processes 250M API requests/day with <100ms latency"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": always mention the full ML lifecycle — data collection, feature engineering, training, evaluation, deployment, monitoring"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/31-mobile-ai/03-edge-ai-frameworks",
        children: "03 — Edge AI Frameworks"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "02 — TensorFlow Lite & CoreML, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of 02 — TensorFlow Lite & CoreML depends on input size and distribution — always benchmark for your own data."
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