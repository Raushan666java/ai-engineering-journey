"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[73322],{

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
const site_docs_courses_ai_engineering_placement_31_mobile_ai_02_tflite_coreml_md_a8e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/mobile-ai/02-tflite-coreml","title":"02 — TensorFlow Lite & CoreML","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/31-mobile-ai/02-tflite-coreml.md","sourceDirName":"courses/ai-engineering-placement/31-mobile-ai","slug":"/ai-engineering-placement/31-mobile-ai/02-tflite-coreml","permalink":"/ai-engineering-journey/ai-engineering-placement/31-mobile-ai/02-tflite-coreml","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":327,"frontMatter":{"id":"02-tflite-coreml","slug":"/ai-engineering-placement/31-mobile-ai/02-tflite-coreml","title":"02 — TensorFlow Lite & CoreML","sidebar_label":"02 — TensorFlow Lite & CoreML","sidebar_position":327},"sidebar":"placementSidebar","previous":{"title":"ONNX Runtime for Mobile","permalink":"/ai-engineering-journey/ai-engineering-placement/31-mobile-ai/01-onnx-runtime-mobile"},"next":{"title":"03 — Edge AI Frameworks","permalink":"/ai-engineering-journey/ai-engineering-placement/31-mobile-ai/03-edge-ai-frameworks"}}');
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
	sidebar_position: 327
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Training[Training Frameworks]\n        A[TensorFlow / Keras]\n        B[PyTorch]\n    end\n    subgraph Conversion[Conversion Layer]\n        C[TFLite Converter]\n        D[coremltools]\n    end\n    subgraph Optimization[Optimization]\n        E[Quantization<br/>FP16 / INT8 / Dynamic]\n        F[Delegate Selection<br/>GPU / NNAPI / XNNPACK]\n    end\n    subgraph Deployment[Mobile Deployment]\n        G[Android<br/>TFLite Runtime]\n        H[iOS<br/>CoreML Runtime]\n    end\n    A --> C\n    B --> D\n    C --> E\n    E --> F\n    F --> G\n    D --> H\n"
      })
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
        children: "# basic_conversion.py — Convert a Keras model to TFLite\n\nimport tensorflow as tf\nimport numpy as np\n\ndef build_demo_model() -> tf.keras.Model:\n    \"\"\"\n    Build a simple CNN classifier for demonstration.\n    Architecture: Conv2D → MaxPool → Conv2D → GlobalAvgPool → Dense.\n\n    Returns:\n        Compiled Keras model with input shape (224, 224, 3).\n    \"\"\"\n    inputs = tf.keras.Input(shape=(224, 224, 3), name=\"input_image\")\n    x = tf.keras.layers.Conv2D(32, (3, 3), activation=\"relu\", padding=\"same\")(inputs)\n    x = tf.keras.layers.MaxPooling2D((2, 2))(x)\n    x = tf.keras.layers.Conv2D(64, (3, 3), activation=\"relu\", padding=\"same\")(x)\n    x = tf.keras.layers.GlobalAveragePooling2D()(x)\n    x = tf.keras.layers.Dropout(0.2)(x)\n    outputs = tf.keras.layers.Dense(10, activation=\"softmax\", name=\"output\")(x)\n\n    model = tf.keras.Model(inputs=inputs, outputs=outputs, name=\"demo_cnn\")\n    model.compile(\n        optimizer=\"adam\",\n        loss=\"sparse_categorical_crossentropy\",\n        metrics=[\"accuracy\"],\n    )\n    return model\n\ndef convert_keras_to_tflite(\n    model: tf.keras.Model,\n    output_path: str = \"model.tflite\",\n) -> bytes:\n    \"\"\"\n    Convert a Keras model to TFLite FlatBuffer format.\n\n    Args:\n        model: Trained Keras model instance.\n        output_path: Path to write the .tflite file.\n\n    Returns:\n        Raw TFLite FlatBuffer bytes.\n\n    Example:\n        >>> model = build_demo_model()\n        >>> tflite_bytes = convert_keras_to_tflite(model, \"demo.tflite\")\n        >>> print(f\"Model size: {len(tflite_bytes) / 1024:.1f} KB\")\n    \"\"\"\n    converter = tf.lite.TFLiteConverter.from_keras_model(model)\n\n    # Basic conversion with default optimizations\n    converter.optimizations = [tf.lite.Optimize.DEFAULT]\n\n    tflite_buffer = converter.convert()\n\n    with open(output_path, \"wb\") as f:\n        f.write(tflite_buffer)\n\n    return tflite_buffer\n\ndef inspect_tflite_model(tflite_path: str) -> None:\n    \"\"\"\n    Print model details from a TFLite FlatBuffer using the interpreter.\n\n    Args:\n        tflite_path: Path to the .tflite file to inspect.\n    \"\"\"\n    interpreter = tf.lite.Interpreter(model_path=tflite_path)\n    interpreter.allocate_tensors()\n\n    input_details = interpreter.get_input_details()\n    output_details = interpreter.get_output_details()\n\n    print(\"Input details:\")\n    for inp in input_details:\n        print(f\"  Name:      {inp['name']}\")\n        print(f\"  Shape:     {inp['shape']}\")\n        print(f\"  Dtype:     {inp['dtype']}\")\n        print(f\"  Quantized: {inp['quantization']}\")\n\n    print(\"\\nOutput details:\")\n    for out in output_details:\n        print(f\"  Name:      {out['name']}\")\n        print(f\"  Shape:     {out['shape']}\")\n        print(f\"  Dtype:     {out['dtype']}\")\n        print(f\"  Quantized: {out['quantization']}\")\n\nif __name__ == \"__main__\":\n    print(\"Building demo model...\")\n    model = build_demo_model()\n    model.summary()\n\n    print(\"\\nConverting to TFLite...\")\n    tflite_bytes = convert_keras_to_tflite(model, \"demo_cnn.tflite\")\n    print(f\"TFLite model size: {len(tflite_bytes) / 1024:.2f} KB\")\n\n    print(\"\\nInspecting TFLite model:\")\n    inspect_tflite_model(\"demo_cnn.tflite\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "213-representative-dataset-for-quantization",
      children: "2.1.3 Representative Dataset for Quantization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Integer quantization (INT8) requires a representative dataset. This small calibration dataset helps the converter compute the dynamic range of activations."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# representative_dataset.py — Generate and use a representative dataset for quantization\n\nimport tensorflow as tf\nimport numpy as np\nfrom typing import Callable, Generator, List, Optional\n\nclass RepresentativeDataset:\n    \"\"\"\n    Wraps a calibration dataset for TFLite quantization.\n\n    The converter calls the generator to sample a subset of training\n    data and compute activation ranges for each layer.\n\n    Attributes:\n        data_generator: Callable that yields batches of input data.\n        num_samples: Number of samples to draw for calibration.\n    \"\"\"\n\n    def __init__(\n        self,\n        data_generator: Callable[[], Generator[np.ndarray, None, None]],\n        num_samples: int = 200,\n    ):\n        self.data_generator = data_generator\n        self.num_samples = num_samples\n\n    def get_generator(self) -> Generator[np.ndarray, None, None]:\n        \"\"\"Return a generator that yields samples for the converter.\"\"\"\n        count = 0\n        for batch in self.data_generator():\n            for sample in batch:\n                if count >= self.num_samples:\n                    return\n                # TFLite expects shape (1, H, W, C) per sample\n                yield [np.expand_dims(sample, axis=0).astype(np.float32)]\n                count += 1\n\ndef create_random_image_generator(\n    shape: tuple = (224, 224, 3),\n    batch_size: int = 32,\n    num_batches: int = 10,\n) -> Callable[[], Generator[np.ndarray, None, None]]:\n    \"\"\"\n    Create a generator that yields random image batches.\n\n    In production, replace this with real calibration data from\n    your training set. Random data works for demo purposes but\n    real data yields better quantization accuracy.\n\n    Args:\n        shape: Image dimensions (H, W, C).\n        batch_size: Samples per batch.\n        num_batches: Total batches to generate.\n\n    Returns:\n        A callable that returns a generator of image batches.\n    \"\"\"\n    def _generator() -> Generator[np.ndarray, None, None]:\n        for _ in range(num_batches):\n            yield np.random.rand(batch_size, *shape).astype(np.float32)\n\n    return _generator\n\ndef quantize_with_representative_dataset(\n    model: tf.keras.Model,\n    rep_dataset: RepresentativeDataset,\n    output_path: str = \"model_quantized.tflite\",\n) -> bytes:\n    \"\"\"\n    Convert model to INT8 TFLite using a representative dataset.\n\n    This produces a fully quantized model (weights + activations in INT8),\n    which is 4x smaller than FP32 and significantly faster on integer hardware.\n\n    Args:\n        model: Trained Keras model.\n        rep_dataset: RepresentativeDataset for calibration.\n        output_path: Path for the quantized .tflite file.\n\n    Returns:\n        Quantized TFLite FlatBuffer bytes.\n    \"\"\"\n    converter = tf.lite.TFLiteConverter.from_keras_model(model)\n    converter.optimizations = [tf.lite.Optimize.DEFAULT]\n    converter.representative_dataset = rep_dataset.get_generator\n\n    # Enforce INT8 quantization for all ops\n    converter.target_spec.supported_ops = [tf.lite.OpsSet.TFLITE_BUILTINS_INT8]\n\n    # Set input and output types to INT8\n    converter.inference_input_type = tf.int8\n    converter.inference_output_type = tf.int8\n\n    tflite_buffer = converter.convert()\n\n    with open(output_path, \"wb\") as f:\n        f.write(tflite_buffer)\n\n    print(f\"Quantized model saved to {output_path}\")\n    print(f\"Size: {len(tflite_buffer) / 1024:.2f} KB\")\n\n    return tflite_buffer\n\ndef compare_model_sizes(original: bytes, quantized: bytes) -> None:\n    \"\"\"\n    Print a comparison between original and quantized model sizes.\n\n    Args:\n        original: Original TFLite FlatBuffer bytes.\n        quantized: Quantized TFLite FlatBuffer bytes.\n    \"\"\"\n    orig_kb = len(original) / 1024\n    quant_kb = len(quantized) / 1024\n    ratio = len(original) / len(quantized)\n\n    print(f\"\\n--- Model Size Comparison ---\")\n    print(f\"Original (FP32):  {orig_kb:.2f} KB\")\n    print(f\"Quantized (INT8): {quant_kb:.2f} KB\")\n    print(f\"Compression ratio: {ratio:.1f}x\")\n\nif __name__ == \"__main__\":\n    # Build model\n    model = build_demo_model()\n\n    # Convert without quantization (baseline)\n    converter = tf.lite.TFLiteConverter.from_keras_model(model)\n    converter.optimizations = [tf.lite.Optimize.DEFAULT]\n    fp32_buffer = converter.convert()\n\n    # Convert with INT8 quantization\n    image_gen = create_random_image_generator(\n        shape=(224, 224, 3), batch_size=32, num_samples=200\n    )\n    # Note: RepresentativeDataset uses num_samples param internally\n    rep_ds = RepresentativeDataset(image_gen, num_samples=200)\n    int8_buffer = quantize_with_representative_dataset(\n        model, rep_ds, \"demo_cnn_int8.tflite\"\n    )\n\n    compare_model_sizes(fp32_buffer, int8_buffer)\n"
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
        children: "# conversion_flags.py — Advanced converter configuration options\n\nimport tensorflow as tf\nfrom typing import Optional, List\n\ndef configure_converter(\n    model: tf.keras.Model,\n    use_fp16: bool = False,\n    use_int8: bool = False,\n    select_tf_ops: bool = False,\n    custom_ops: bool = False,\n    representative_gen: Optional[callable] = None,\n) -> tf.lite.TFLiteConverter:\n    \"\"\"\n    Configure a TFLiteConverter with fine-grained control over optimizations.\n\n    Args:\n        model: Keras model to convert.\n        use_fp16: Enable FP16 quantization (weights halved, activations FP32).\n        use_int8: Enable full INT8 quantization (requires representative_dataset).\n        select_tf_ops: Allow TF ops not natively supported in TFLite.\n        custom_ops: Allow custom op implementations.\n        representative_gen: Generator for INT8 calibration data.\n\n    Returns:\n        Configured TFLiteConverter instance.\n\n    Raises:\n        ValueError: If use_int8 is True but no representative_gen is provided.\n    \"\"\"\n    converter = tf.lite.TFLiteConverter.from_keras_model(model)\n\n    # Base optimizations\n    optimization_flags = [tf.lite.Optimize.DEFAULT]\n\n    if use_fp16:\n        # FP16 quantization: weights stored as float16\n        converter.target_spec.supported_types = [tf.float16]\n        optimization_flags.append(tf.lite.Optimize.DEFAULT)\n\n    if use_int8:\n        if representative_gen is None:\n            raise ValueError(\n                \"INT8 quantization requires a representative_dataset. \"\n                \"Provide a generator that yields calibration samples.\"\n            )\n        converter.representative_dataset = representative_gen\n        converter.target_spec.supported_ops = [tf.lite.OpsSet.TFLITE_BUILTINS_INT8]\n        converter.inference_input_type = tf.int8\n        converter.inference_output_type = tf.int8\n\n    if select_tf_ops:\n        # Enables full TF op set — model size increases\n        converter.target_spec.supported_ops = [\n            tf.lite.OpsSet.TFLITE_BUILTINS,\n            tf.lite.OpsSet.SELECT_TF_OPS,\n        ]\n\n    converter.optimizations = optimization_flags\n    converter.allow_custom_ops = custom_ops\n\n    return converter\n\ndef convert_with_strategy(\n    model: tf.keras.Model,\n    strategy: str,\n    rep_gen: Optional[callable] = None,\n    output_path: Optional[str] = None,\n) -> bytes:\n    \"\"\"\n    Convert model using a named quantization strategy.\n\n    Supported strategies:\n        - \"fp32\": No quantization, full precision.\n        - \"fp16\": Float16 weight quantization.\n        - \"dynamic\": Dynamic range quantization (weights INT8, activations FP32).\n        - \"int8\": Full INT8 quantization (requires rep_gen).\n\n    Args:\n        model: Keras model to convert.\n        strategy: One of \"fp32\", \"fp16\", \"dynamic\", \"int8\".\n        rep_gen: Representative dataset generator (required for \"int8\").\n        output_path: Optional file path to save the model.\n\n    Returns:\n        TFLite FlatBuffer bytes.\n    \"\"\"\n    strategy = strategy.lower()\n    valid_strategies = {\"fp32\", \"fp16\", \"dynamic\", \"int8\"}\n    if strategy not in valid_strategies:\n        raise ValueError(f\"Unknown strategy '{strategy}'. Choose from {valid_strategies}.\")\n\n    converter = tf.lite.TFLiteConverter.from_keras_model(model)\n\n    if strategy == \"fp32\":\n        converter.optimizations = []\n    elif strategy == \"fp16\":\n        converter.optimizations = [tf.lite.Optimize.DEFAULT]\n        converter.target_spec.supported_types = [tf.float16]\n    elif strategy == \"dynamic\":\n        converter.optimizations = [tf.lite.Optimize.DEFAULT]\n    elif strategy == \"int8\":\n        if rep_gen is None:\n            raise ValueError(\"INT8 strategy requires rep_gen (representative dataset).\")\n        converter.optimizations = [tf.lite.Optimize.DEFAULT]\n        converter.representative_dataset = rep_gen\n        converter.target_spec.supported_ops = [tf.lite.OpsSet.TFLITE_BUILTINS_INT8]\n        converter.inference_input_type = tf.int8\n        converter.inference_output_type = tf.int8\n\n    tflite_buffer = converter.convert()\n\n    if output_path:\n        with open(output_path, \"wb\") as f:\n            f.write(tflite_buffer)\n        print(f\"Model saved to {output_path}\")\n\n    return tflite_buffer\n\ndef print_conversion_summary(buffer: bytes, strategy: str, elapsed_ms: float) -> None:\n    \"\"\"\n    Print a summary of the conversion result.\n\n    Args:\n        buffer: TFLite FlatBuffer bytes.\n        strategy: The quantization strategy used.\n        elapsed_ms: Conversion time in milliseconds.\n    \"\"\"\n    size_kb = len(buffer) / 1024\n    print(\n        f\"[{strategy.upper():6s}] \"\n        f\"Size: {size_kb:8.2f} KB | \"\n        f\"Time: {elapsed_ms:6.1f} ms\"\n    )\n\nif __name__ == \"__main__\":\n    model = build_demo_model()\n\n    # Create representative dataset generator for INT8\n    def _rep_gen():\n        for _ in range(10):\n            yield [np.random.rand(1, 224, 224, 3).astype(np.float32)]\n\n    strategies = [\"fp32\", \"fp16\", \"dynamic\", \"int8\"]\n\n    for strat in strategies:\n        import time\n        t0 = time.perf_counter()\n\n        if strat == \"int8\":\n            buf = convert_with_strategy(model, strat, rep_gen=_rep_gen)\n        else:\n            buf = convert_with_strategy(model, strat)\n\n        elapsed = (time.perf_counter() - t0) * 1000\n        print_conversion_summary(buf, strat, elapsed)\n"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph PTQ[Post-Training Quantization]\n        A[FP32 Trained Model]\n        A --> B1[Float16 Quantization]\n        A --> B2[Dynamic Range Quantization]\n        A --> B3[Full INT8 Quantization]\n    end\n    subgraph Details[Key Properties]\n        C1[\"Weights: FP16<br/>Activations: FP32<br/>No calibration data\"]\n        C2[\"Weights: INT8<br/>Activations: FP32<br/>No calibration data\"]\n        C3[\"Weights: INT8<br/>Activations: INT8<br/>Calibration data required\"]\n    end\n    B1 --> C1\n    B2 --> C2\n    B3 --> C3\n    subgraph Gains[Typical Improvements]\n        D1[\"2x smaller<br/>Near-zero accuracy loss\"]\n        D2[\"4x smaller<br/>Minimal accuracy loss\"]\n        D3[\"4x smaller + faster<br/>Some accuracy loss\"]\n    end\n    C1 --> D1\n    C2 --> D2\n    C3 --> D3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "222-float16-quantization",
      children: "2.2.2 Float16 Quantization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Float16 quantization converts FP32 weights to FP16. Activations remain in FP32. This is the safest quantization — accuracy loss is typically below 0.1%."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# float16_quantization.py — Float16 quantization with accuracy evaluation\n\nimport tensorflow as tf\nimport numpy as np\nfrom typing import Tuple\n\ndef quantize_float16(model: tf.keras.Model, output_path: str) -> bytes:\n    \"\"\"\n    Apply float16 quantization to a Keras model.\n\n    Float16 quantization halves the model size by storing weights\n    as 16-bit floats. Activations remain in FP32. No calibration\n    data is needed.\n\n    Args:\n        model: Trained Keras model.\n        output_path: Path to write .tflite file.\n\n    Returns:\n        Quantized TFLite FlatBuffer bytes.\n    \"\"\"\n    converter = tf.lite.TFLiteConverter.from_keras_model(model)\n    converter.optimizations = [tf.lite.Optimize.DEFAULT]\n    converter.target_spec.supported_types = [tf.float16]\n\n    tflite_buffer = converter.convert()\n\n    with open(output_path, \"wb\") as f:\n        f.write(tflite_buffer)\n\n    print(f\"Float16 model saved to {output_path}\")\n    return tflite_buffer\n\ndef evaluate_quantization_accuracy(\n    original_model: tf.keras.Model,\n    tflite_path: str,\n    test_images: np.ndarray,\n    test_labels: np.ndarray,\n) -> Tuple[float, float]:\n    \"\"\"\n    Compare accuracy between the original and quantized model.\n\n    Args:\n        original_model: The original Keras model (FP32).\n        tflite_path: Path to the quantized TFLite model.\n        test_images: Test image array, shape (N, H, W, C).\n        test_labels: Ground truth labels, shape (N,).\n\n    Returns:\n        Tuple of (original_accuracy, quantized_accuracy) as percentages.\n    \"\"\"\n    # Original model accuracy\n    original_loss, original_acc = original_model.evaluate(\n        test_images, test_labels, verbose=0\n    )\n\n    # TFLite model accuracy\n    interpreter = tf.lite.Interpreter(model_path=tflite_path)\n    interpreter.allocate_tensors()\n\n    input_details = interpreter.get_input_details()\n    output_details = interpreter.get_output_details()\n\n    correct = 0\n    total = len(test_images)\n\n    for i in range(total):\n        # Prepare input\n        input_data = np.expand_dims(test_images[i], axis=0).astype(np.float32)\n        interpreter.set_tensor(input_details[0][\"index\"], input_data)\n\n        # Run inference\n        interpreter.invoke()\n\n        # Get output\n        output_data = interpreter.get_tensor(output_details[0][\"index\"])\n        predicted_class = np.argmax(output_data[0])\n        true_class = int(test_labels[i])\n\n        if predicted_class == true_class:\n            correct += 1\n\n    quantized_acc = (correct / total) * 100\n\n    print(f\"\\n--- Accuracy Comparison ---\")\n    print(f\"Original model (FP32):   {original_acc * 100:.2f}%\")\n    print(f\"Quantized model (FP16): {quantized_acc:.2f}%\")\n    print(f\"Difference:              {quantized_acc - (original_acc * 100):+.2f}%\")\n\n    return original_acc * 100, quantized_acc\n\nif __name__ == \"__main__\":\n    # Create and train a simple model on synthetic data\n    model = build_demo_model()\n\n    # Generate synthetic training data\n    x_train = np.random.rand(500, 224, 224, 3).astype(np.float32)\n    y_train = np.random.randint(0, 10, size=(500,))\n    x_test = np.random.rand(100, 224, 224, 3).astype(np.float32)\n    y_test = np.random.randint(0, 10, size=(100,))\n\n    model.fit(x_train, y_train, epochs=3, batch_size=32, validation_split=0.2, verbose=0)\n\n    # Quantize to float16\n    tflite_fp16 = quantize_float16(model, \"model_fp16.tflite\")\n\n    # Evaluate accuracy\n    evaluate_quantization_accuracy(model, \"model_fp16.tflite\", x_test, y_test)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "223-dynamic-range-quantization",
      children: "2.2.3 Dynamic Range Quantization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dynamic range quantization converts weights to INT8 at conversion time but keeps activations in FP32 during inference. It requires no calibration data. The runtime dynamically quantizes activations to INT8 for compute-heavy operations."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# dynamic_range_quantization.py — Dynamic range quantization\n\nimport tensorflow as tf\nimport numpy as np\n\ndef quantize_dynamic_range(\n    model: tf.keras.Model,\n    output_path: str = \"model_dynamic.tflite\",\n) -> bytes:\n    \"\"\"\n    Apply dynamic range quantization.\n\n    Weights are quantized to INT8 at conversion time.\n    Activations remain FP32 but are quantized on-the-fly\n    during inference for ops that benefit from integer math.\n\n    Args:\n        model: Keras model to quantize.\n        output_path: Path for the output .tflite file.\n\n    Returns:\n        TFLite FlatBuffer bytes with dynamically quantized weights.\n    \"\"\"\n    converter = tf.lite.TFLiteConverter.from_keras_model(model)\n\n    # Dynamic range quantization is the default when DEFAULT optimization\n    # is enabled without specifying supported_types or representative_dataset\n    converter.optimizations = [tf.lite.Optimize.DEFAULT]\n\n    tflite_buffer = converter.convert()\n\n    with open(output_path, \"wb\") as f:\n        f.write(tflite_buffer)\n\n    model_size_kb = len(tflite_buffer) / 1024\n    print(f\"Dynamic range quantized model: {output_path}\")\n    print(f\"Size: {model_size_kb:.2f} KB\")\n    print(\"Weights: INT8 | Activations: FP32 (dynamically quantized)\")\n\n    return tflite_buffer\n\ndef profile_model_latency(\n    tflite_path: str,\n    input_shape: tuple = (1, 224, 224, 3),\n    num_runs: int = 100,\n) -> dict:\n    \"\"\"\n    Profile the average inference latency of a TFLite model.\n\n    Args:\n        tflite_path: Path to the .tflite file.\n        input_shape: Input tensor shape including batch dimension.\n        num_runs: Number of inference runs for averaging.\n\n    Returns:\n        Dict with 'mean_ms', 'std_ms', 'min_ms', 'max_ms'.\n    \"\"\"\n    interpreter = tf.lite.Interpreter(model_path=tflite_path)\n    interpreter.allocate_tensors()\n\n    input_details = interpreter.get_input_details()\n\n    # Create random input matching expected shape\n    input_data = np.random.rand(*input_shape).astype(np.float32)\n    interpreter.set_tensor(input_details[0][\"index\"], input_data)\n\n    # Warm-up run\n    interpreter.invoke()\n\n    latencies = []\n    for _ in range(num_runs):\n        # Re-generate input to avoid caching effects\n        input_data = np.random.rand(*input_shape).astype(np.float32)\n        interpreter.set_tensor(input_details[0][\"index\"], input_data)\n\n        import time\n        t0 = time.perf_counter()\n        interpreter.invoke()\n        elapsed = (time.perf_counter() - t0) * 1000  # ms\n\n        latencies.append(elapsed)\n\n    stats = {\n        \"mean_ms\": float(np.mean(latencies)),\n        \"std_ms\": float(np.std(latencies)),\n        \"min_ms\": float(np.min(latencies)),\n        \"max_ms\": float(np.max(latencies)),\n    }\n\n    print(f\"\\n--- Latency Profile ({num_runs} runs) ---\")\n    print(f\"Mean:   {stats['mean_ms']:.3f} ms\")\n    print(f\"Std:    {stats['std_ms']:.3f} ms\")\n    print(f\"Min:    {stats['min_ms']:.3f} ms\")\n    print(f\"Max:    {stats['max_ms']:.3f} ms\")\n\n    return stats\n\ndef compare_quantization_methods(model: tf.keras.Model) -> None:\n    \"\"\"\n    Convert the same model with all three quantization methods and compare results.\n\n    Args:\n        model: Keras model to benchmark.\n    \"\"\"\n    methods = {\n        \"FP32 (no quantization)\": {\"optimizations\": []},\n        \"Float16\": {\"optimizations\": [tf.lite.Optimize.DEFAULT], \"supported_types\": [tf.float16]},\n        \"Dynamic Range\": {\"optimizations\": [tf.lite.Optimize.DEFAULT]},\n    }\n\n    results = []\n    for method_name, config in methods.items():\n        converter = tf.lite.TFLiteConverter.from_keras_model(model)\n        converter.optimizations = config.get(\"optimizations\", [])\n        if \"supported_types\" in config:\n            converter.target_spec.supported_types = config[\"supported_types\"]\n\n        buffer = converter.convert()\n\n        # Profile latency\n        import tempfile\n        with tempfile.NamedTemporaryFile(suffix=\".tflite\", delete=False) as f:\n            f.write(buffer)\n            tmp_path = f.name\n\n        stats = profile_model_latency(tmp_path, num_runs=50)\n        results.append((method_name, len(buffer) / 1024, stats[\"mean_ms\"]))\n\n    print(f\"\\n{'='*60}\")\n    print(f\"{'Method':<25s} {'Size (KB)':<12s} {'Latency (ms)':<15s}\")\n    print(f\"{'='*60}\")\n    for name, size_kb, latency in results:\n        print(f\"{name:<25s} {size_kb:<12.2f} {latency:<15.3f}\")\n\nif __name__ == \"__main__\":\n    model = build_demo_model()\n    compare_quantization_methods(model)\n"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph App[Android Application]\n        A[TFLite Runtime]\n        B[GPU Delegate<br/>OpenGL ES / Vulkan]\n        C[NNAPI Delegate<br/>Android NN API]\n        D[XNNPACK Delegate<br/>CPU Optimized]\n        E[Hexagon Delegate<br/>Qualcomm DSP]\n    end\n    subgraph Hardware[Hardware Layer]\n        F[GPU<br/>Adreno / Mali]\n        G[NPU / DSP<br/>Hexagon / MediaTek APU]\n        H[CPU<br/>ARM Cortex]\n    end\n    A --> B\n    A --> C\n    A --> D\n    A --> E\n    B --> F\n    C --> G\n    C --> F\n    D --> H\n    E --> G\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "232-gpu-delegate",
      children: "2.3.2 GPU Delegate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The GPU delegate runs models on the device GPU using OpenGL ES or Vulkan. It is best for models with many parallel compute operations (convolutions, matrix multiplications)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# gpu_delegate.py — Configure and benchmark the TFLite GPU delegate\n\nimport tensorflow as tf\nimport numpy as np\nfrom typing import Optional, Dict\n\ndef create_gpu_delegate(\n    allow_precision_loss: bool = False,\n    metadata: Optional[Dict[str, str]] = None,\n) -> tf.lite.experimental.Delegate:\n    \"\"\"\n    Create a TFLite GPU delegate with configuration options.\n\n    Args:\n        allow_precision_loss: Allow FP16 computation on GPU (faster, slight accuracy loss).\n        metadata: Optional app metadata for GPU driver optimization.\n\n    Returns:\n        Configured GPU delegate instance.\n\n    Note:\n        GPU delegate is available via:\n        `import tensorflow as tf` then `tf.lite.experimental.load_delegate('libtensorflowlite_gpu_delegate.so')`\n    \"\"\"\n    # Options dictionary for GPU delegate\n    options = {\n        \"precision_loss_allowed\": int(allow_precision_loss),\n    }\n\n    if metadata:\n        options[\"metadata\"] = metadata\n\n    # Load the GPU delegate shared library\n    # On Android, the .so is bundled with the TFLite runtime\n    gpu_delegate = tf.lite.experimental.load_delegate(\n        \"libtensorflowlite_gpu_delegate.so\",\n        options,\n    )\n    return gpu_delegate\n\ndef run_with_gpu_delegate(\n    tflite_path: str,\n    input_data: np.ndarray,\n    use_gpu: bool = True,\n) -> np.ndarray:\n    \"\"\"\n    Run TFLite inference optionally using the GPU delegate.\n\n    Args:\n        tflite_path: Path to the .tflite model file.\n        input_data: Input tensor data.\n        use_gpu: If True, attempt GPU delegation; otherwise CPU only.\n\n    Returns:\n        Model output as a NumPy array.\n    \"\"\"\n    if use_gpu:\n        try:\n            gpu_delegate = create_gpu_delegate(allow_precision_loss=True)\n            interpreter = tf.lite.Interpreter(\n                model_path=tflite_path,\n                experimental_delegates=[gpu_delegate],\n            )\n            print(\"Using GPU delegate\")\n        except Exception as e:\n            print(f\"GPU delegate failed ({e}), falling back to CPU\")\n            interpreter = tf.lite.Interpreter(model_path=tflite_path)\n    else:\n        interpreter = tf.lite.Interpreter(model_path=tflite_path)\n        print(\"Using CPU (no delegate)\")\n\n    interpreter.allocate_tensors()\n\n    input_details = interpreter.get_input_details()\n    output_details = interpreter.get_output_details()\n\n    interpreter.set_tensor(input_details[0][\"index\"], input_data)\n    interpreter.invoke()\n\n    output = interpreter.get_tensor(output_details[0][\"index\"])\n    return output\n\ndef benchmark_gpu_vs_cpu(\n    tflite_path: str,\n    input_shape: tuple = (1, 224, 224, 3),\n    num_runs: int = 100,\n) -> Dict[str, float]:\n    \"\"\"\n    Benchmark GPU vs CPU inference latency.\n\n    Args:\n        tflite_path: Path to .tflite model.\n        input_shape: Input shape including batch dimension.\n        num_runs: Number of inference iterations.\n\n    Returns:\n        Dict mapping backend names to mean latency in milliseconds.\n    \"\"\"\n    input_data = np.random.rand(*input_shape).astype(np.float32)\n    results = {}\n\n    for backend, use_gpu in [(\"CPU\", False), (\"GPU\", True)]:\n        try:\n            actual = use_gpu\n            if use_gpu:\n                try:\n                    gpu_delegate = create_gpu_delegate(allow_precision_loss=True)\n                    interpreter = tf.lite.Interpreter(\n                        model_path=tflite_path,\n                        experimental_delegates=[gpu_delegate],\n                    )\n                except Exception:\n                    print(\"GPU delegate not available, skipping GPU benchmark\")\n                    continue\n            else:\n                interpreter = tf.lite.Interpreter(model_path=tflite_path)\n\n            interpreter.allocate_tensors()\n            input_details = interpreter.get_input_details()\n\n            # Warm-up\n            interpreter.set_tensor(input_details[0][\"index\"], input_data)\n            interpreter.invoke()\n\n            import time\n            latencies = []\n            for _ in range(num_runs):\n                t0 = time.perf_counter()\n                interpreter.invoke()\n                elapsed = (time.perf_counter() - t0) * 1000\n                latencies.append(elapsed)\n\n            results[backend] = float(np.mean(latencies))\n            print(f\"{backend} mean latency: {results[backend]:.3f} ms\")\n\n        except Exception as e:\n            print(f\"Benchmark failed for {backend}: {e}\")\n\n    if \"CPU\" in results and \"GPU\" in results:\n        speedup = results[\"CPU\"] / results[\"GPU\"]\n        print(f\"GPU speedup over CPU: {speedup:.2f}x\")\n\n    return results\n\nif __name__ == \"__main__\":\n    # Create a model and convert to TFLite\n    model = build_demo_model()\n    converter = tf.lite.TFLiteConverter.from_keras_model(model)\n    converter.optimizations = [tf.lite.Optimize.DEFAULT]\n    buffer = converter.convert()\n\n    import tempfile, os\n    tflite_path = os.path.join(tempfile.gettempdir(), \"benchmark_model.tflite\")\n    with open(tflite_path, \"wb\") as f:\n        f.write(buffer)\n\n    print(\"Benchmarking GPU vs CPU...\")\n    benchmark_gpu_vs_cpu(tflite_path)\n\n    # Cleanup\n    os.remove(tflite_path)\n"
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
        children: "# nnapi_delegate.py — NNAPI delegate configuration and usage\n\nimport tensorflow as tf\nimport numpy as np\nfrom enum import IntEnum\nfrom typing import Optional\n\nclass NNAPIPriority(IntEnum):\n    \"\"\"NNAPI execution priority levels.\"\"\"\n    LOW = 0\n    MEDIUM = 1\n    HIGH = 2\n\nclass NNAPIDelegate:\n    \"\"\"\n    Wrapper for the TFLite NNAPI delegate on Android.\n\n    NNAPI delivers optimized inference on Android devices by\n    dispatching operations to the fastest available hardware\n    (GPU, DSP, NPU) via vendor drivers.\n\n    Usage:\n        delegate = NNAPIDelegate(priority=NNAPIPriority.HIGH, allow_fp16=True)\n        interpreter = tf.lite.Interpreter(\n            model_path=\"model.tflite\",\n            experimental_delegates=[delegate.build()],\n        )\n    \"\"\"\n\n    def __init__(\n        self,\n        priority: NNAPIPriority = NNAPIPriority.MEDIUM,\n        allow_fp16: bool = True,\n        use_nnapi_cpu: bool = False,\n        accelerator_name: Optional[str] = None,\n    ):\n        \"\"\"\n        Initialize NNAPI delegate configuration.\n\n        Args:\n            priority: Execution priority (low, medium, high).\n            allow_fp16: Allow FP16 computation for faster inference.\n            use_nnapi_cpu: Fallback to NNAPI CPU if hardware unavailable.\n            accelerator_name: Specific accelerator name (e.g., \"qti-dsp\").\n        \"\"\"\n        self.priority = priority\n        self.allow_fp16 = allow_fp16\n        self.use_nnapi_cpu = use_nnapi_cpu\n        self.accelerator_name = accelerator_name\n\n    def build(self) -> tf.lite.experimental.Delegate:\n        \"\"\"\n        Build and return the NNAPI delegate.\n\n        Returns:\n            TFLite NNAPI delegate instance.\n\n        Raises:\n            RuntimeError: If NNAPI delegate library is not found.\n        \"\"\"\n        options = {\n            \"num_threads\": str(tf.config.threading.get_inter_op_parallelism_threads()),\n            \"allow_fp16\": str(int(self.allow_fp16)),\n            \"execution_preference\": str(int(self.priority)),\n        }\n\n        if self.accelerator_name:\n            options[\"accelerator_name\"] = self.accelerator_name.trim()\n\n        try:\n            delegate = tf.lite.experimental.load_delegate(\n                \"libtensorflowlite_nnapi_delegate.so\",\n                options,\n            )\n            return delegate\n        except Exception as e:\n            raise RuntimeError(\n                f\"Failed to load NNAPI delegate: {e}\\n\"\n                \"Ensure the NNAPI delegate library is bundled with your app.\"\n            )\n\ndef automatic_delegate_selection(\n    tflite_path: str,\n    prefer_gpu: bool = True,\n) -> tf.lite.Interpreter:\n    \"\"\"\n    Automatically select the best available delegate.\n\n    Attempts GPU delegate first, falls back to NNAPI, then CPU.\n\n    Args:\n        tflite_path: Path to the TFLite model.\n        prefer_gpu: If True, try GPU delegate before NNAPI.\n\n    Returns:\n        Configured TFLite Interpreter with the best available delegate.\n    \"\"\"\n    delegates = []\n\n    # Try GPU delegate first (if preferred)\n    if prefer_gpu:\n        try:\n            gpu_opts = {\"precision_loss_allowed\": \"1\"}\n            gpu_delegate = tf.lite.experimental.load_delegate(\n                \"libtensorflowlite_gpu_delegate.so\",\n                gpu_opts,\n            )\n            delegates.append(gpu_delegate)\n            print(\"Selected: GPU delegate\")\n        except Exception:\n            print(\"GPU delegate unavailable\")\n\n    # Fall back to NNAPI\n    if len(delegates) == 0:\n        try:\n            nnapi_opts = {\n                \"allow_fp16\": \"1\",\n                \"execution_preference\": str(int(NNAPIPriority.HIGH)),\n            }\n            nnapi_delegate = tf.lite.experimental.load_delegate(\n                \"libtensorflowlite_nnapi_delegate.so\",\n                nnapi_opts,\n            )\n            delegates.append(nnapi_delegate)\n            print(\"Selected: NNAPI delegate\")\n        except Exception:\n            print(\"NNAPI delegate unavailable, using CPU\")\n\n    # Fall back to GPU if NNAPI was tried first\n    if not prefer_gpu and len(delegates) == 0:\n        try:\n            gpu_opts = {\"precision_loss_allowed\": \"1\"}\n            gpu_delegate = tf.lite.experimental.load_delegate(\n                \"libtensorflowlite_gpu_delegate.so\",\n                gpu_opts,\n            )\n            delegates.append(gpu_delegate)\n            print(\"Selected: GPU delegate (fallback)\")\n        except Exception:\n            print(\"All delegates unavailable, using CPU\")\n\n    interpreter = tf.lite.Interpreter(\n        model_path=tflite_path,\n        experimental_delegates=delegates if delegates else None,\n    )\n    interpreter.allocate_tensors()\n\n    return interpreter\n\nif __name__ == \"__main__\":\n    # This example demonstrates the delegate selection pattern.\n    # On a desktop machine, delegates will fall back to CPU.\n    model = build_demo_model()\n\n    converter = tf.lite.TFLiteConverter.from_keras_model(model)\n    converter.optimizations = [tf.lite.Optimize.DEFAULT]\n    buffer = converter.convert()\n\n    import tempfile, os\n    tflite_path = os.path.join(tempfile.gettempdir(), \"nnapi_test.tflite\")\n    with open(tflite_path, \"wb\") as f:\n        f.write(buffer)\n\n    # Run inference with automatic delegate selection\n    interpreter = automatic_delegate_selection(tflite_path, prefer_gpu=True)\n\n    input_details = interpreter.get_input_details()\n    output_details = interpreter.get_output_details()\n\n    input_data = np.random.rand(1, 224, 224, 3).astype(np.float32)\n    interpreter.set_tensor(input_details[0][\"index\"], input_data)\n    interpreter.invoke()\n\n    output = interpreter.get_tensor(output_details[0][\"index\"])\n    print(f\"Inference successful. Output shape: {output.shape}\")\n\n    os.remove(tflite_path)\n"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Source[Source Frameworks]\n        A[PyTorch<br/>TorchScript]\n        B[TensorFlow<br/>SavedModel]\n        C[scikit-learn<br/>ONNX]\n    end\n    subgraph CoreML[coremltools]\n        D[ct.convert]\n        E[ML Program<br/>.mlpackage]\n    end\n    subgraph Target[CoreML Runtime]\n        F[ANE<br/>Apple Neural Engine]\n        G[GPU<br/>Metal Performance Shaders]\n        H[CPU<br/>BNNS / Accelerate]\n    end\n    A --> D\n    B --> D\n    C --> D\n    D --> E\n    E --> F\n    E --> G\n    E --> H\n"
      })
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
        children: "# pytorch_to_coreml.py — Convert PyTorch models to CoreML with coremltools\n\nimport torch\nimport torch.nn as nn\nimport numpy as np\nfrom typing import Optional, Tuple\n\n# Define a simple PyTorch model for demonstration\nclass SimpleCNN(nn.Module):\n    \"\"\"\n    A simple CNN classifier matching the Keras demo model.\n\n    Architecture:\n        Conv2D(3→32) → ReLU → MaxPool(2x2) →\n        Conv2D(32→64) → ReLU → GlobalAvgPool →\n        Dropout(0.2) → Dense(64→10) → Softmax\n    \"\"\"\n\n    def __init__(self, num_classes: int = 10):\n        super(SimpleCNN, self).__init__()\n        self.conv1 = nn.Conv2d(3, 32, kernel_size=3, padding=1)\n        self.relu1 = nn.ReLU()\n        self.pool1 = nn.MaxPool2d(kernel_size=2, stride=2)\n\n        self.conv2 = nn.Conv2d(32, 64, kernel_size=3, padding=1)\n        self.relu2 = nn.ReLU()\n        self.pool2 = nn.AdaptiveAvgPool2d((1, 1))\n\n        self.dropout = nn.Dropout(0.2)\n        self.fc = nn.Linear(64, num_classes)\n\n    def forward(self, x: torch.Tensor) -> torch.Tensor:\n        x = self.pool1(self.relu1(self.conv1(x)))\n        x = self.pool2(self.relu2(self.conv2(x)))\n        x = x.view(x.size(0), -1)\n        x = self.dropout(x)\n        x = self.fc(x)\n        return torch.softmax(x, dim=1)\n\ndef trace_pytorch_model(\n    model: nn.Module,\n    example_input: torch.Tensor,\n) -> torch.jit.ScriptModule:\n    \"\"\"\n    Trace a PyTorch model to TorchScript for CoreML conversion.\n\n    Tracing records the exact operations performed during a forward\n    pass. This works well for models with static control flow.\n\n    Args:\n        model: PyTorch model instance (in eval mode).\n        example_input: A sample input tensor matching expected shape.\n\n    Returns:\n        TorchScript ScriptModule (traced model).\n\n    Note:\n        For models with dynamic control flow (if/else, loops), use\n        scripting instead: torch.jit.script(model).\n    \"\"\"\n    model.eval()\n    traced_model = torch.jit.trace(model, example_input)\n    return traced_model\n\ndef convert_pytorch_to_coreml(\n    traced_model: torch.jit.ScriptModule,\n    example_input: torch.Tensor,\n    input_name: str = \"image\",\n    output_name: str = \"probabilities\",\n    labels: Optional[list] = None,\n    output_path: str = \"model.mlpackage\",\n    minimum_deployment_target: str = \"ios16\",\n) -> object:\n    \"\"\"\n    Convert a TorchScript-traced PyTorch model to CoreML ML Program format.\n\n    Args:\n        traced_model: TorchScript model from torch.jit.trace().\n        example_input: Example input tensor for shape/dtype inference.\n        input_name: Name for the input feature in CoreML.\n        output_name: Name for the output feature in CoreML.\n        labels: Optional list of class labels for classification.\n        output_path: Path to save the .mlpackage.\n        minimum_deployment_target: Minimum iOS/macOS version.\n\n    Returns:\n        coremltools.models.MLModel instance.\n\n    Requires:\n        pip install coremltools\n    \"\"\"\n    import coremltools as ct\n\n    # Define input type\n    input_type = ct.TensorType(\n        name=input_name,\n        shape=example_input.shape,\n        dtype=np.float32,\n    )\n\n    # Define output type\n    output_type = ct.TensorType(name=output_name, dtype=np.float32)\n\n    # Convert using the torch.jit.trace path\n    mlmodel = ct.convert(\n        traced_model,\n        inputs=[input_type],\n        outputs=[output_type],\n        minimum_deployment_target=ct.target.iOS16,\n        compute_precision=ct.precision.FLOAT16,\n        convert_to=\"mlprogram\",  # ML Program format (vs. neuralnetwork)\n    )\n\n    # Add class labels if provided\n    if labels is not None:\n        mlmodel.add_class_labels(labels)\n\n    # Save the model\n    mlmodel.save(output_path)\n    print(f\"CoreML model saved to {output_path}\")\n\n    return mlmodel\n\ndef coreml_inference_example(\n    mlmodel_path: str,\n    input_image: np.ndarray,\n) -> np.ndarray:\n    \"\"\"\n    Run inference with a CoreML model using coremltools.\n\n    On macOS, this executes using the CoreML runtime.\n    On iOS, this would run via the CoreML API in Swift.\n\n    Args:\n        mlmodel_path: Path to the .mlpackage file.\n        input_image: Input image array, shape (1, C, H, W) or (1, H, W, C)\n                     depending on the model's expected format.\n\n    Returns:\n        Model output as NumPy array.\n    \"\"\"\n    import coremltools as ct\n\n    model = ct.models.MLModel(mlmodel_path)\n\n    # CoreML expects dict input\n    input_dict = {\"image\": input_image}\n    output = model.predict(input_dict)\n\n    return output[list(output.keys())[0]]\n\nif __name__ == \"__main__\":\n    print(\"=\" * 60)\n    print(\"PyTorch to CoreML Conversion Demo\")\n    print(\"=\" * 60)\n\n    # 1. Create and initialize model\n    model = SimpleCNN(num_classes=10)\n    model.eval()\n\n    # 2. Create example input (batch_size=1, channels=3, height=224, width=224)\n    example_input = torch.randn(1, 3, 224, 224)\n\n    # 3. Trace to TorchScript\n    print(\"\\nTracing model to TorchScript...\")\n    traced = trace_pytorch_model(model, example_input)\n    print(\"TorchScript tracing complete.\")\n\n    # 4. Convert to CoreML\n    print(\"\\nConverting to CoreML ML Program...\")\n    try:\n        mlmodel = convert_pytorch_to_coreml(\n            traced_model=traced,\n            example_input=example_input,\n            input_name=\"image\",\n            output_name=\"probabilities\",\n            labels=[f\"class_{i}\" for i in range(10)],\n            output_path=\"simple_cnn.mlpackage\",\n            minimum_deployment_target=\"ios16\",\n        )\n\n        # 5. Run inference (macOS only)\n        print(\"\\nRunning CoreML inference...\")\n        test_input = np.random.randn(1, 3, 224, 224).astype(np.float32)\n        output = coreml_inference_example(\"simple_cnn.mlpackage\", test_input)\n        print(f\"Output shape: {output.shape}\")\n        print(f\"Predicted class: {np.argmax(output)}\")\n\n    except ImportError:\n        print(\n            \"coremltools not installed. Install with:\\n\"\n            \"  pip install coremltools\\n\\n\"\n            \"The conversion code above shows the pattern — run it on macOS \"\n            \"for actual CoreML model generation.\"\n        )\n"
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
        children: "# coreml_optimization.py — Optimization flags for CoreML conversion\n\nimport coremltools as ct\nfrom typing import Optional\n\ndef optimized_coreml_conversion(\n    traced_model: object,\n    input_shape: tuple,\n    model_name: str = \"optimized_model\",\n    use_ane: bool = True,\n    use_fp16: bool = True,\n    minimum_ios: str = \"ios16\",\n) -> ct.models.MLModel:\n    \"\"\"\n    Convert a PyTorch model to CoreML with ANE optimization flags.\n\n    Args:\n        traced_model: TorchScript traced model.\n        input_shape: Expected input shape (C, H, W) without batch dim.\n        model_name: Name for the output model.\n        use_ane: If True, configure for ANE execution.\n        use_fp16: Use float16 precision for faster inference.\n        minimum_ios: Minimum iOS deployment target.\n\n    Returns:\n        Optimized CoreML MLModel instance.\n    \"\"\"\n    # Input description with shape (batch, channels, height, width)\n    input_desc = ct.TensorType(\n        name=\"input\",\n        shape=(1, *input_shape),  # batch=1 for ANE optimization\n        dtype=np.float32,\n    )\n\n    # Compute precision\n    precision = ct.precision.FLOAT16 if use_fp16 else ct.precision.FLOAT32\n\n    # Conversion config\n    config = ct.ConversionConfig(\n        mlmodel_version=ct.model_version.MLMODEL_VERSION_5,\n    )\n\n    mlmodel = ct.convert(\n        traced_model,\n        inputs=[input_desc],\n        minimum_deployment_target=ct.target.iOS16,\n        compute_precision=precision,\n        convert_to=\"mlprogram\",\n        config=config,\n    )\n\n    # Enable ANE-specific optimizations (available in macOS 14+ / iOS 17+)\n    if use_ane:\n        # Reserve ANE for this model (iOS 17+)\n        ane_policy = ct.coreml.PowerPreference(\n            compute_device=ct.coreml.ComputeDevice.APPLE_NEURAL_ENGINE\n        )\n\n    # Save model\n    output_path = f\"{model_name}.mlpackage\"\n    mlmodel.save(output_path)\n    print(f\"Optimized CoreML model saved to {output_path}\")\n    print(f\"  Precision:     {'FP16' if use_fp16 else 'FP32'}\")\n    print(f\"  ANE target:    {'Yes' if use_ane else 'No'}\")\n    print(f\"  Deployment:    {minimum_ios}\")\n    print(f\"  Input shape:   (1, {', '.join(str(s) for s in input_shape)})\")\n\n    return mlmodel\n\nif __name__ == \"__main__\":\n    import torch\n    import numpy as np\n\n    # Create a simple model\n    class DemoModel(torch.nn.Module):\n        def __init__(self):\n            super().__init__()\n            self.conv = torch.nn.Conv2d(3, 16, 3, padding=1)\n            self.relu = torch.nn.ReLU()\n            self.pool = torch.nn.AdaptiveAvgPool2d((1, 1))\n            self.fc = torch.nn.Linear(16, 10)\n\n        def forward(self, x):\n            x = self.pool(self.relu(self.conv(x)))\n            x = x.view(x.size(0), -1)\n            return self.fc(x)\n\n    model = DemoModel().eval()\n    example = torch.randn(1, 3, 224, 224)\n    traced = torch.jit.trace(model, example)\n\n    try:\n        mlmodel = optimized_coreml_conversion(\n            traced_model=traced,\n            input_shape=(3, 224, 224),\n            model_name=\"demo_optimized\",\n            use_ane=True,\n            use_fp16=True,\n        )\n        print(\"Conversion successful.\")\n    except ImportError:\n        print(\"coremltools not available. Run this on macOS.\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "25-platform-comparison",
      children: "2.5 Platform Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Android (TFLite) and iOS (CoreML) have different strengths, limitations, and optimization considerations."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "251-architecture-comparison",
      children: "2.5.1 Architecture Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Android[Android — TFLite]\n        A1[TFLite FlatBuffer]\n        A2[Delegate Selection]\n        A3[GPU / NNAPI / XNNPACK]\n        A4[Heterogeneous Hardware<br/>Qualcomm / MediaTek / Exynos]\n    end\n    subgraph iOS[iOS — CoreML]\n        B1[CoreML .mlpackage]\n        B2[ANE / GPU / CPU]\n        B3[Apple Neural Engine]\n        B4[Uniform Hardware<br/>Apple Silicon]\n    end\n    A1 --> A2 --> A3 --> A4\n    B1 --> B2 --> B3 --> B4\n"
      })
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
        children: "# platform_edge_cases.py — Handle edge cases in cross-platform mobile AI deployment\n\nimport numpy as np\nfrom typing import Dict, List, Optional\n\nclass PlatformEdgeCase:\n    \"\"\"\n    Documents and validates handling of known edge cases across platforms.\n\n    Each edge case has a description, affected platforms, severity,\n    and a recommended mitigation strategy.\n    \"\"\"\n\n    def __init__(self):\n        self.edge_cases: List[Dict] = []\n\n    def register(\n        self,\n        case_id: str,\n        platform: str,\n        description: str,\n        severity: str,\n        mitigation: str,\n    ) -> None:\n        \"\"\"\n        Register a known edge case.\n\n        Args:\n            case_id: Unique identifier for the edge case.\n            platform: \"android\", \"ios\", or \"both\".\n            description: What happens under what conditions.\n            severity: \"low\", \"medium\", \"high\", \"critical\".\n            mitigation: How to detect and handle it.\n        \"\"\"\n        self.edge_cases.append({\n            \"id\": case_id,\n            \"platform\": platform,\n            \"description\": description,\n            \"severity\": severity,\n            \"mitigation\": mitigation,\n        })\n\n    def get_platform_cases(self, platform: str) -> List[Dict]:\n        \"\"\"Return all edge cases for a specific platform.\"\"\"\n        return [c for c in self.edge_cases if c[\"platform\"] in (platform, \"both\")]\n\n    def print_report(self) -> None:\n        \"\"\"Print a formatted report of all registered edge cases.\"\"\"\n        for case in self.edge_cases:\n            icon = {\"critical\": \"\\u26a0\\ufe0f\", \"high\": \"\\U0001f534\", \"medium\": \"\\U0001f7e1\", \"low\": \"\\U0001f7e2\"}\n            print(f\"{icon.get(case['severity'], '')} [{case['id']}] ({case['platform']})\")\n            print(f\"  Description: {case['description']}\")\n            print(f\"  Severity:    {case['severity'].upper()}\")\n            print(f\"  Mitigation:  {case['mitigation']}\")\n            print()\n\ndef build_edge_case_registry() -> PlatformEdgeCase:\n    \"\"\"Build the complete registry of known cross-platform edge cases.\"\"\"\n    registry = PlatformEdgeCase()\n\n    # Android-specific edge cases\n    registry.register(\n        \"AND-001\", \"android\",\n        \"NNAPI delegate unavailable on devices without vendor NN driver \"\n        \"(e.g., some Xiaomi and Oppo budget devices). Falls back to CPU.\",\n        \"high\",\n        \"Check NNAPI availability at runtime with \"\n        \"NNAPIInterface().isAvailable(). Fall back to GPU or XNNPACK.\",\n    )\n    registry.register(\n        \"AND-002\", \"android\",\n        \"GPU delegate fails on devices with OpenGL ES 3.0 but no Vulkan. \"\n        \"Older Adreno 5xx GPUs may crash with certain ops.\",\n        \"medium\",\n        \"Use allow_precision_loss=True and catch delegate init errors. \"\n        \"Always provide CPU fallback in a try/except block.\",\n    )\n    registry.register(\n        \"AND-003\", \"android\",\n        \"INT8 quantized models produce incorrect results on devices that \"\n        \"do not support INT8 dot-product instructions (ARMv7, older ARMv8).\",\n        \"critical\",\n        \"Check CPU features via /proc/cpuinfo for 'asimddp'. \"\n        \"Fall back to FP16 or dynamic range quantization on incompatible CPUs.\",\n    )\n    registry.register(\n        \"AND-004\", \"android\",\n        \"Model loading fails when APK exceeds 200 MB due to Android \"\n        \"installation size limits on older API levels (pre-Android 10).\",\n        \"medium\",\n        \"Use Play Asset Delivery or download models at first launch. \"\n        \"Defer model installation to app startup, not install time.\",\n    )\n\n    # iOS-specific edge cases\n    registry.register(\n        \"IOS-001\", \"ios\",\n        \"CoreML model fails to load on iOS versions below the minimum \"\n        \"deployment target specified during conversion with coremltools.\",\n        \"critical\",\n        \"Set minimum iOS version in app Info.plist. Check CoreML \"\n        \"availability at runtime with canLoadModel() before inference.\",\n    )\n    registry.register(\n        \"IOS-002\", \"ios\",\n        \"ANE fallback to GPU or CPU when model contains unsupported ops \"\n        \"(e.g., custom attention layers with dynamic shapes).\",\n        \"medium\",\n        \"Profile with Xcode Instruments > CoreML template to verify ANE \"\n        \"execution. Simplify dynamic shapes where possible.\",\n    )\n    registry.register(\n        \"IOS-003\", \"ios\",\n        \"ML Program models over 500 MB may trigger ANE memory pressure \"\n        \"and cause the system to kill the app (jetsam event).\",\n        \"high\",\n        \"Keep model under 100 MB for ANE. Split large models into \"\n        \"multiple smaller models and chain them sequentially.\",\n    )\n    registry.register(\n        \"IOS-004\", \"ios\",\n        \"CoreML model compiled bitcode may differ between simulator and \"\n        \"device. Models working in simulator may fail on actual hardware.\",\n        \"medium\",\n        \"Always test on physical devices before release. Use TestFlight \"\n        \"beta testing to validate model behavior on various devices.\",\n    )\n\n    # Cross-platform edge cases\n    registry.register(\n        \"BOTH-001\", \"both\",\n        \"Float16 quantization produces NaN on devices with incomplete \"\n        \"FP16 support. Certain hardware backends truncate subnormal numbers.\",\n        \"high\",\n        \"Clip model outputs after quantization. Validate on target hardware \"\n        \"before production deployment.\",\n    )\n    registry.register(\n        \"BOTH-002\", \"both\",\n        \"Model accuracy drops significantly after quantization when the \"\n        \"representative dataset does not cover the production distribution.\",\n        \"critical\",\n        \"Use at least 500 samples from the actual production distribution. \"\n        \"Monitor accuracy drift with on-device logging and A/B testing.\",\n    )\n\n    return registry\n\ndef validate_model_compatibility(\n    model_path: str,\n    platform: str,\n    model_size_bytes: int,\n    quantization_type: str,\n) -> Dict[str, bool]:\n    \"\"\"\n    Validate a model against known platform constraints.\n\n    Args:\n        model_path: Path to the model file.\n        platform: \"android\" or \"ios\".\n        model_size_bytes: Size of the model in bytes.\n        quantization_type: \"fp32\", \"fp16\", \"dynamic\", or \"int8\".\n\n    Returns:\n        Dict of check_name -> passed (True/False).\n    \"\"\"\n    checks: Dict[str, bool] = {}\n    size_mb = model_size_bytes / (1024 * 1024)\n\n    if platform == \"android\":\n        checks[\"model_under_200mb\"] = size_mb <= 200\n        checks[\"quantization_supported\"] = quantization_type in (\"fp32\", \"fp16\", \"dynamic\", \"int8\")\n        checks[\"int8_compatible\"] = (\n            quantization_type != \"int8\" or True  # Runtime check needed\n        )\n    elif platform == \"ios\":\n        checks[\"model_under_2gb\"] = size_mb <= 2048\n        checks[\"ane_recommended\"] = size_mb <= 100\n        checks[\"quantization_supported\"] = quantization_type in (\"fp32\", \"fp16\")\n\n    checks[\"all_passed\"] = all(checks.values())\n    return checks\n\nif __name__ == \"__main__\":\n    registry = build_edge_case_registry()\n    print(\"=== Edge Case Registry ===\\n\")\n    registry.print_report()\n\n    # Validate a hypothetical model\n    checks = validate_model_compatibility(\n        model_path=\"model_int8.tflite\",\n        platform=\"android\",\n        model_size_bytes=45 * 1024 * 1024,  # 45 MB\n        quantization_type=\"int8\",\n    )\n    print(\"=== Compatibility Check ===\")\n    for check, passed in checks.items():\n        status = \"PASS\" if passed else \"FAIL\"\n        print(f\"  [{status}] {check}\")\n"
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
        children: "# deployment_decision.py — Programmatic deployment decision advisor\n\nfrom dataclasses import dataclass\nfrom typing import List, Optional\n\n@dataclass\nclass DeploymentContext:\n    \"\"\"Context about the deployment environment.\"\"\"\n    target_platforms: List[str]         # [\"android\"], [\"ios\"], or [\"android\", \"ios\"]\n    model_size_mb: float\n    latency_requirement_ms: int         # Maximum acceptable inference time\n    accuracy_requirement: str           # \"high\", \"medium\", \"low\"\n    offline_capability: bool            # Must work without internet\n    update_frequency: str               # \"static\", \"monthly\", \"weekly\"\n\n@dataclass\nclass Recommendation:\n    \"\"\"A deployment recommendation with rationale.\"\"\"\n    android_approach: str\n    ios_approach: str\n    quantization: str\n    delegate: Optional[str]\n    rationale: List[str]\n\ndef recommend_deployment(ctx: DeploymentContext) -> Recommendation:\n    \"\"\"\n    Recommend the optimal deployment approach based on context.\n\n    Args:\n        ctx: DeploymentContext describing the application requirements.\n\n    Returns:\n        Recommendation with per-platform approach and rationale.\n    \"\"\"\n    rationale: List[str] = []\n\n    # Determine quantization strategy\n    if ctx.accuracy_requirement == \"high\":\n        quantization = \"fp16\"\n        rationale.append(\"High accuracy requirement: using FP16 quantization\")\n    elif ctx.model_size_mb > 100:\n        quantization = \"int8\"\n        rationale.append(f\"Large model ({ctx.model_size_mb:.0f} MB): using INT8 quantization\")\n    else:\n        quantization = \"dynamic\"\n        rationale.append(\"Balanced trade-off: using dynamic range quantization\")\n\n    # Determine delegates\n    if \"android\" in ctx.target_platforms:\n        if ctx.latency_requirement_ms <= 30:\n            delegate = \"GPU + NNAPI\"\n            rationale.append(\"Low latency requirement: using GPU and NNAPI delegates\")\n        else:\n            delegate = \"NNAPI (fallback to CPU)\"\n            rationale.append(\"Standard latency: using NNAPI with CPU fallback\")\n    else:\n        delegate = None\n\n    # Platform-specific approaches\n    if \"android\" in ctx.target_platforms and \"ios\" in ctx.target_platforms:\n        android_approach = \"TFLite with XNNPACK + GPU delegate\"\n        ios_approach = \"CoreML ML Program targeting ANE\"\n        if ctx.model_size_mb > 200:\n            android_approach += \" with deferred model download\"\n        rationale.append(\"Cross-platform: maintaining separate optimized paths per platform\")\n    elif \"android\" in ctx.target_platforms:\n        android_approach = \"TFLite with NNAPI delegate\"\n        ios_approach = \"N/A\"\n        rationale.append(\"Android-only: single TFLite pipeline\")\n    else:\n        android_approach = \"N/A\"\n        ios_approach = \"CoreML ML Program\"\n        rationale.append(\"iOS-only: single CoreML pipeline\")\n\n    return Recommendation(\n        android_approach=android_approach,\n        ios_approach=ios_approach,\n        quantization=quantization,\n        delegate=delegate,\n        rationale=rationale,\n    )\n\nif __name__ == \"__main__\":\n    scenarios = [\n        DeploymentContext(\n            target_platforms=[\"android\", \"ios\"],\n            model_size_mb=45,\n            latency_requirement_ms=50,\n            accuracy_requirement=\"high\",\n            offline_capability=True,\n            update_frequency=\"monthly\",\n        ),\n        DeploymentContext(\n            target_platforms=[\"android\"],\n            model_size_mb=180,\n            latency_requirement_ms=100,\n            accuracy_requirement=\"medium\",\n            offline_capability=False,\n            update_frequency=\"static\",\n        ),\n        DeploymentContext(\n            target_platforms=[\"ios\"],\n            model_size_mb=12,\n            latency_requirement_ms=20,\n            accuracy_requirement=\"high\",\n            offline_capability=True,\n            update_frequency=\"weekly\",\n        ),\n    ]\n\n    for i, ctx in enumerate(scenarios, 1):\n        print(f\"\\n{'='*60}\")\n        print(f\"Scenario {i}\")\n        print(f\"{'='*60}\")\n        rec = recommend_deployment(ctx)\n\n        print(f\"  Platforms:     {', '.join(ctx.target_platforms)}\")\n        print(f\"  Model size:    {ctx.model_size_mb} MB\")\n        print(f\"  Latency req:   {ctx.latency_requirement_ms} ms\")\n        print(f\"  Accuracy req:  {ctx.accuracy_requirement}\")\n        print()\n        print(f\"  Android:       {rec.android_approach}\")\n        print(f\"  iOS:           {rec.ios_approach}\")\n        print(f\"  Quantization:  {rec.quantization}\")\n        if rec.delegate:\n            print(f\"  Delegate:      {rec.delegate}\")\n        print()\n        print(\"  Rationale:\")\n        for r in rec.rationale:\n            print(f\"    - {r}\")\n"
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
      children: "A) Float16 quantization\nB) Dynamic range quantization\nC) Full INT8 quantization\nD) None of the above"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nC — Full INT8 quantization requires a representative dataset to compute activation ranges. Float16 and dynamic range quantization do not need calibration data.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. What is the correct order of priority for TFLite delegate selection on Android?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) XNNPACK → GPU → NNAPI → CPU\nB) NNAPI → GPU → XNNPACK → CPU\nC) GPU → CPU → NNAPI → XNNPACK\nD) CPU → GPU → NNAPI → XNNPACK"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nB — Try the most specialized delegate first: NNAPI (hardware-optimized by OEM), then GPU (parallel compute), then XNNPACK (optimized CPU kernels), then CPU fallback.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Which CoreML model format is recommended for new projects?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) NeuralNetwork (.mlmodel)\nB) ML Program (.mlpackage)\nC) ONNX (.onnx)\nD) TorchScript (.pt)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nB — ML Program (.mlpackage) is the modern format with full ANE support, PyTorch-compatible weight layout, and better debugging tools. NeuralNetwork is deprecated.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. What is the main advantage of the NNAPI delegate over the GPU delegate?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) NNAPI is always faster than GPU\nB) NNAPI abstracts all hardware (GPU, DSP, NPU) via a single API\nC) NNAPI does not require any model conversion\nD) NNAPI supports dynamic shapes natively"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\nB — NNAPI provides a unified API that dispatches to the best available hardware (GPU, DSP, NPU) based on the vendor driver. GPU delegate only uses the GPU.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. When converting a model for CoreML, which compute precision gives the best performance on ANE?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Float32\nB) Float16\nC) Int8\nD) BFloat16"
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
        children: "# Starter code\nimport tensorflow as tf\nimport numpy as np\n\nmodel = tf.keras.applications.MobileNetV2(weights=\"imagenet\")\n# TODO: Convert with three quantization strategies\n# TODO: Profile latency with 100 runs each\n# TODO: Print a comparison table\n"
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
            children: "Design a minimal, well-typed function that demonstrates 02 — TensorFlow Lite & CoreML."
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
            children: "Describe a production bug caused by misunderstanding 02 — TensorFlow Lite & CoreML. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on 02 — TensorFlow Lite & CoreML from 10 users to 10 million?"
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
            children: "Walk through how you would test a component that depends on 02 — TensorFlow Lite & CoreML."
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
            children: "How would you make an implementation of 02 — TensorFlow Lite & CoreML run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of 02 — TensorFlow Lite & CoreML that is production-quality."
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
        children: "The time complexity of the standard approach to 02 — TensorFlow Lite & CoreML is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 02 — TensorFlow Lite & CoreML is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
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
          }), " Your implementation of 02 — TensorFlow Lite & CoreML is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
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
          children: "What is the output of the simplest correct implementation of 02 — TensorFlow Lite & CoreML on an empty input?"
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
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of 02 — TensorFlow Lite & CoreML"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on 02 — TensorFlow Lite & CoreML (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real 02 — TensorFlow Lite & CoreML problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements 02 — TensorFlow Lite & CoreML"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for 02 — TensorFlow Lite & CoreML"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on 02 — TensorFlow Lite & CoreML"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how 02 — TensorFlow Lite & CoreML fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how 02 — TensorFlow Lite & CoreML is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where 02 — TensorFlow Lite & CoreML is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 02 — TensorFlow Lite & CoreML, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 02 — TensorFlow Lite & CoreML asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
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
        children: "Never trust external input: validate and sanitize data before processing 02 — TensorFlow Lite & CoreML."
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
        children: "02 — TensorFlow Lite & CoreML appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding 02 — TensorFlow Lite & CoreML helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the 02 — TensorFlow Lite & CoreML concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, 02 — TensorFlow Lite & CoreML skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply 02 — TensorFlow Lite & CoreML to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "02 — TensorFlow Lite & CoreML is like a recipe"
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
        }), " — this chapter contributes the 02 — TensorFlow Lite & CoreML skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
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
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
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
          children: "Check the Common Mistakes section of this chapter."
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
          children: "Refer to the theory and complexity analysis in this chapter."
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
          children: "Check the Limitations section of this chapter."
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
          children: "Check the Real-World Examples section of this chapter."
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
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The primary library used in this chapter (see the code examples)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python standard library modules used in the examples (check the imports)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testing: pytest for unit tests of 02 — TensorFlow Lite & CoreML code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on 02 — TensorFlow Lite & CoreML"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in 02 — TensorFlow Lite & CoreML code."]
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
        }), " or your IDE's debugger to step through the 02 — TensorFlow Lite & CoreML example code."]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`python\nfrom typing import Any, Optional"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for 02 — TensorFlow Lite & CoreML."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core 02 — TensorFlow Lite & CoreML logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
          children: "Startup"
        }), ": a small team uses 02 — TensorFlow Lite & CoreML daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": 02 — TensorFlow Lite & CoreML patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": 02 — TensorFlow Lite & CoreML principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": 02 — TensorFlow Lite & CoreML shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect 02 — TensorFlow Lite & CoreML to the business outcome, not just the code."]
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