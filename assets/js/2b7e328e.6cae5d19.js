"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[25833],{

/***/ 26843
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_31_mobile_ai_03_edge_ai_frameworks_md_2b7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-31-mobile-ai-03-edge-ai-frameworks-md-2b7.json
const site_docs_courses_ai_engineering_placement_31_mobile_ai_03_edge_ai_frameworks_md_2b7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/mobile-ai/03-edge-ai-frameworks","title":"03 — Edge AI Frameworks","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/31-mobile-ai/03-edge-ai-frameworks.md","sourceDirName":"courses/ai-engineering-placement/31-mobile-ai","slug":"/ai-engineering-placement/31-mobile-ai/03-edge-ai-frameworks","permalink":"/ai-engineering-journey/ai-engineering-placement/31-mobile-ai/03-edge-ai-frameworks","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":328,"frontMatter":{"id":"03-edge-ai-frameworks","slug":"/ai-engineering-placement/31-mobile-ai/03-edge-ai-frameworks","title":"03 — Edge AI Frameworks","sidebar_label":"03 — Edge AI Frameworks","sidebar_position":328},"sidebar":"placementSidebar","previous":{"title":"02 — TensorFlow Lite & CoreML","permalink":"/ai-engineering-journey/ai-engineering-placement/31-mobile-ai/02-tflite-coreml"},"next":{"title":"Edge Deployment Patterns","permalink":"/ai-engineering-journey/ai-engineering-placement/31-mobile-ai/04-edge-deployment-patterns"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/31-mobile-ai/03-edge-ai-frameworks.md


const frontMatter = {
	id: '03-edge-ai-frameworks',
	slug: '/ai-engineering-placement/31-mobile-ai/03-edge-ai-frameworks',
	title: '03 — Edge AI Frameworks',
	sidebar_label: '03 — Edge AI Frameworks',
	sidebar_position: 328
};
const contentTitle = '03 — Edge AI Frameworks';

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
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "3.1 ExecuTorch",
  "id": "31-executorch",
  "level": 3
}, {
  "value": "3.1.1 Edge Program Export",
  "id": "311-edge-program-export",
  "level": 4
}, {
  "value": "3.1.2 Delegate System",
  "id": "312-delegate-system",
  "level": 4
}, {
  "value": "3.1.3 Portable Runtime",
  "id": "313-portable-runtime",
  "level": 4
}, {
  "value": "3.2 MediaPipe",
  "id": "32-mediapipe",
  "level": 3
}, {
  "value": "3.2.1 MediaPipe Tasks API",
  "id": "321-mediapipe-tasks-api",
  "level": 4
}, {
  "value": "3.2.2 MediaPipe Custom Pipeline",
  "id": "322-mediapipe-custom-pipeline",
  "level": 4
}, {
  "value": "3.3 ML Kit",
  "id": "33-ml-kit",
  "level": 3
}, {
  "value": "3.3.1 ML Kit Base APIs",
  "id": "331-ml-kit-base-apis",
  "level": 4
}, {
  "value": "3.3.2 Custom TFLite Model in ML Kit",
  "id": "332-custom-tflite-model-in-ml-kit",
  "level": 4
}, {
  "value": "3.4 OpenCV for Mobile",
  "id": "34-opencv-for-mobile",
  "level": 3
}, {
  "value": "3.4.1 OpenCV Android SDK",
  "id": "341-opencv-android-sdk",
  "level": 4
}, {
  "value": "3.4.2 OpenCV.js for Browser-Based AI",
  "id": "342-opencvjs-for-browser-based-ai",
  "level": 4
}, {
  "value": "3.5 Framework Comparison",
  "id": "35-framework-comparison",
  "level": 3
}, {
  "value": "3.5.1 Comparison Table",
  "id": "351-comparison-table",
  "level": 4
}, {
  "value": "3.5.2 Performance Benchmarks",
  "id": "352-performance-benchmarks",
  "level": 4
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "Question 1 (ExecuTorch)",
  "id": "question-1-executorch",
  "level": 3
}, {
  "value": "Question 2 (ExecuTorch Delegates)",
  "id": "question-2-executorch-delegates",
  "level": 3
}, {
  "value": "Question 3 (MediaPipe)",
  "id": "question-3-mediapipe",
  "level": 3
}, {
  "value": "Question 4 (MediaPipe Tasks)",
  "id": "question-4-mediapipe-tasks",
  "level": 3
}, {
  "value": "Question 5 (ML Kit)",
  "id": "question-5-ml-kit",
  "level": 3
}, {
  "value": "Question 6 (ML Kit Custom Models)",
  "id": "question-6-ml-kit-custom-models",
  "level": 3
}, {
  "value": "Question 7 (OpenCV Mobile)",
  "id": "question-7-opencv-mobile",
  "level": 3
}, {
  "value": "Question 8 (Framework Selection)",
  "id": "question-8-framework-selection",
  "level": 3
}, {
  "value": "Question 9 (Performance)",
  "id": "question-9-performance",
  "level": 3
}, {
  "value": "Question 10 (Production)",
  "id": "question-10-production",
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
  "value": "Question 1",
  "id": "question-1",
  "level": 3
}, {
  "value": "Question 2",
  "id": "question-2",
  "level": 3
}, {
  "value": "Question 3",
  "id": "question-3",
  "level": 3
}, {
  "value": "Question 4",
  "id": "question-4",
  "level": 3
}, {
  "value": "Question 5",
  "id": "question-5",
  "level": 3
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Exercise 1: ExecuTorch Export",
  "id": "exercise-1-executorch-export",
  "level": 3
}, {
  "value": "Exercise 2: MediaPipe Face Detection",
  "id": "exercise-2-mediapipe-face-detection",
  "level": 3
}, {
  "value": "Exercise 3: ML Kit Multi-API",
  "id": "exercise-3-ml-kit-multi-api",
  "level": 3
}, {
  "value": "Exercise 4: OpenCV Letterbox Pipeline",
  "id": "exercise-4-opencv-letterbox-pipeline",
  "level": 3
}, {
  "value": "Exercise 5: Framework Comparison Report",
  "id": "exercise-5-framework-comparison-report",
  "level": 3
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
        id: "03--edge-ai-frameworks",
        children: "03 — Edge AI Frameworks"
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
            children: "Export PyTorch models to ExecuTorch with delegate configuration for mobile CPUs and NPUs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build MediaPipe task graphs for real-time face, hand, pose, and object detection pipelines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integrate Google ML Kit for on-device text recognition, barcode scanning, and custom model inference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use OpenCV on mobile via Android SDK and OpenCV.js for camera pipeline processing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare edge AI frameworks by performance, model support, ecosystem maturity, and deployment complexity"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Edge AI frameworks bridge the gap between training powerful deep learning models and deploying them on resource-constrained devices. Unlike cloud AI, edge inference runs entirely on-device — eliminating latency, preserving privacy, and enabling offline functionality. Four frameworks dominate this space: ExecuTorch (PyTorch-native edge runtime), MediaPipe (Google's cross-platform pipeline framework), ML Kit (Google's mobile SDK for common AI tasks), and OpenCV (computer vision for embedded devices)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each framework targets a different layer of the edge AI stack. ExecuTorch handles model execution with a lightweight runtime and delegate system. MediaPipe provides high-level task graphs for vision and audio pipelines. ML Kit offers plug-and-play APIs for common mobile AI use cases. OpenCV delivers optimized computer vision primitives for camera processing."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covers all four frameworks with production-ready code examples, pipeline architecture diagrams, and a comprehensive comparison to guide framework selection. By the end, you will be able to choose the right framework for your edge AI use case and implement end-to-end mobile inference."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Module 09 (Deep Learning with PyTorch) — model definition, training loop, inference"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Module 31 Chapter 01 (ONNX Runtime) — model export and mobile optimization concepts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python 3.8+ with PyTorch 2.x, mediapipe, opencv-python"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic understanding of Android/iOS development concepts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with computer vision pipelines (frame capture, preprocessing, postprocessing)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "ExecuTorch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PyTorch's lightweight runtime for deploying models on mobile and edge devices with a portable C++ library"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delegate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A hardware-specific backend (CPU, NPU, GPU) that ExecuTorch routes ops to for acceleration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edge Program"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A flattened, portable representation of a PyTorch model for the ExecuTorch runtime"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MediaPipe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google's cross-platform framework for building multimodal applied ML pipelines as directed graphs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Task Graph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A MediaPipe computation graph consisting of packet-processing nodes connected by streams"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ML Kit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google's mobile SDK providing on-device ML APIs for common tasks like text recognition and object detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TFLite Delegate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A hardware acceleration backend for TensorFlow Lite (GPU, NNAPI, XNNPACK) used by ML Kit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OpenCV.js"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JavaScript build of OpenCV for browser-based computer vision applications"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A sequence of processing stages: capture → preprocess → inference → postprocess → render"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FlatBuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-platform serialization format used by TFLite for efficient on-device model loading"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Papillon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An ExecuTorch tool that bundles model weights with the runtime for mobile distribution"
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
            children: "3.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ExecuTorch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Portable runtime, edge program export, delegate system, AOT compilation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MediaPipe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task graph architecture, face/hand/pose tasks, custom pipeline construction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ML Kit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On-device APIs, barcode scanning, text recognition, custom TFLite models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenCV for Mobile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenCV Android SDK, OpenCV.js, camera pipelines, native CameraX integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Framework Comparison"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance benchmarks, model support, ecosystem analysis, selection guide"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Training[\"Training Frameworks\"]\n        A[PyTorch Model]\n        B[TensorFlow Model]\n    end\n\n    subgraph EdgeFrameworks[\"Edge AI Frameworks\"]\n        C[ExecuTorch<br/>PyTorch Native]\n        D[MediaPipe<br/>Task Graph]\n        E[ML Kit<br/>Mobile SDK]\n        F[OpenCV Mobile<br/>Vision Pipeline]\n    end\n\n    subgraph Output[\"Deployment Target\"]\n        G[Mobile CPU / NPU]\n        H[Android / iOS App]\n        I[Browser WebAssembly]\n        J[Camera Pipeline]\n    end\n\n    A --> C\n    B --> D\n    B --> E\n    A --> F\n    C --> G\n    D --> G\n    E --> H\n    F --> J\n    F --> I\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-executorch",
      children: "3.1 ExecuTorch"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ExecuTorch is PyTorch's official runtime for on-device inference. It provides an end-to-end solution for exporting, optimizing, and deploying PyTorch models on mobile phones, embedded systems, and microcontrollers. Unlike ONNX Runtime (which accepts models from any framework), ExecuTorch is PyTorch-native — it uses the same eager-mode programming model and operator set."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Core Architecture:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Export[\"Export Pipeline\"]\n        A[PyTorch Model] --> B[torch.export]\n        B --> C[ExportedProgram]\n        C --> D[ExecuTorch AOT<br/>Compiler]\n        D --> E[Edge Program<br/>.pte file]\n    end\n\n    subgraph Runtime[\"ExecuTorch Runtime\"]\n        E --> F[Portable C++ Runtime<br/>400 KB binary]\n        F --> G[CPU Backend]\n        F --> H[NPU Delegate]\n        F --> I[Quantized Backend]\n    end\n\n    subgraph Device[\"Device Layer\"]\n        G --> J[ARM Cortex / x86]\n        H --> K[Qualcomm Hexagon / MTK APU]\n        I --> L[INT8 / INT4 Executor]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ExecuTorch has four key components:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "torch.export"
        }), ": Captures a PyTorch model into an ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ExportedProgram"
        }), " — a static graph with metadata."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AOT Compiler"
        }), ": Lowers the exported program to an Edge Program (", (0,jsx_runtime.jsx)(_components.code, {
          children: ".pte"
        }), " file) with operator delegation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Portable Runtime"
        }), ": A ~400 KB C++ library that loads and executes ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".pte"
        }), " files on-device."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delegate System"
        }), ": Backend-specific executors for CPU, NPU, DSP, and GPU."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "311-edge-program-export",
      children: "3.1.1 Edge Program Export"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The first step is exporting a PyTorch model to ExecuTorch format using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "torch.export"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# executorch_export.py — Export a PyTorch model to ExecuTorch Edge Program\n\nimport torch\nimport torch.nn as nn\nfrom torch.export import export\nfrom typing import Dict, Tuple\n\nclass MobileVisionModel(nn.Module):\n    \"\"\"\n    A lightweight vision model suitable for edge deployment.\n    \n    Architecture:\n        Conv2D(3→16) → BatchNorm → ReLU → MaxPool(2x2) →\n        Conv2D(16→32) → BatchNorm → ReLU → GlobalAvgPool →\n        Dense(32→10) → Softmax\n    \n    Total params: ~14K — ideal for sub-1 MB mobile deployment.\n    \"\"\"\n\n    def __init__(self, num_classes: int = 10):\n        super().__init__()\n        self.conv1 = nn.Conv2d(3, 16, kernel_size=3, stride=2, padding=1, bias=False)\n        self.bn1 = nn.BatchNorm2d(16)\n        self.relu1 = nn.ReLU()\n        self.pool1 = nn.MaxPool2d(kernel_size=2, stride=2)\n\n        self.conv2 = nn.Conv2d(16, 32, kernel_size=3, stride=1, padding=1, bias=False)\n        self.bn2 = nn.BatchNorm2d(32)\n        self.relu2 = nn.ReLU()\n        self.pool2 = nn.AdaptiveAvgPool2d((1, 1))\n\n        self.fc = nn.Linear(32, num_classes)\n\n    def forward(self, x: torch.Tensor) -> torch.Tensor:\n        x = self.pool1(self.relu1(self.bn1(self.conv1(x))))\n        x = self.pool2(self.relu2(self.bn2(self.conv2(x))))\n        x = x.view(x.size(0), -1)\n        x = self.fc(x)\n        return torch.softmax(x, dim=1)\n\ndef export_to_executorch(\n    model: nn.Module,\n    example_input: torch.Tensor,\n    output_path: str = \"model.pte\",\n) -> None:\n    \"\"\"\n    Export a PyTorch model to ExecuTorch Edge Program format.\n    \n    Args:\n        model: PyTorch model in eval mode.\n        example_input: Sample input tensor matching expected shape.\n        output_path: Path for the .pte Edge Program file.\n    \n    Pipeline:\n        1. torch.export() captures the static computation graph.\n        2. ExecuTorch AOT compiler lowers to portable representation.\n        3. The .pte file is a FlatBuffer with weights + graph.\n    \"\"\"\n    model.eval()\n\n    # Step 1: Export to ExportedProgram\n    # torch.export traces the model and produces a static graph.\n    # Unlike torch.jit.trace, it handles dynamic control flow\n    # and preserves PyTorch semantics.\n    print(\"Step 1: Exporting with torch.export()...\")\n    exported_program = export(\n        model,\n        (example_input,),\n        dynamic_shapes=None,  # Use None for static shapes\n    )\n    print(f\"  Graph module: {type(exported_program.module()).__name__}\")\n    print(f\"  Num parameters: {sum(p.numel() for p in exported_program.parameters())}\")\n\n    # Step 2: Lower to Edge Program using ExecuTorch\n    # Import ExecuTorch tools (requires pip install executorch)\n    try:\n        from executorch.exir import to_edge\n        from executorch.exir import EdgeProgramManager\n    except ImportError:\n        print(\"\"\"\nIMPORT: executorch package not found.\nInstall with: pip install executorch\n\nThe export code above shows the pattern. On a system with\nexecutorch installed, the code below produces a .pte file.\n\"\"\")\n        return\n\n    print(\"Step 2: Lowering to Edge Program...\")\n    edge_program = to_edge(exported_program)\n\n    # Step 3: Apply delegate configuration (CPU default)\n    # For NPU, use edge_program.to_backend(MyNpuDelegate())\n    print(\"Step 3: Applying default delegate configuration...\")\n    edge_program = edge_program.to_backend(\"\")  # empty = CPU default\n\n    # Step 4: Export to .pte FlatBuffer\n    print(f\"Step 4: Writing Edge Program to {output_path}...\")\n    edge_program.export(output_path)\n\n    # Verify file size\n    import os\n    size_kb = os.path.getsize(output_path) / 1024\n    print(f\"  Edge Program size: {size_kb:.1f} KB\")\n\ndef load_and_run_executorch(\n    pte_path: str,\n    input_data: torch.Tensor,\n) -> torch.Tensor:\n    \"\"\"\n    Load an ExecuTorch Edge Program and run inference.\n    \n    This simulates the mobile runtime behavior. On a real device,\n    the runtime is a C++ binary that loads .pte files.\n    \n    Args:\n        pte_path: Path to .pte Edge Program file.\n        input_data: Input tensor matching exported shape.\n    \n    Returns:\n        Model output tensor.\n    \"\"\"\n    try:\n        from executorch.runtime import Runtime\n    except ImportError:\n        print(\"executorch runtime not available.\")\n        return torch.zeros(1, 10)\n\n    # Initialize runtime\n    runtime = Runtime.get()\n\n    # Load Edge Program\n    program = runtime.load_program(pte_path)\n\n    # Get the forward method\n    method = program.get_method(\"forward\")\n\n    # Run inference\n    output = method.execute(input_data)\n\n    return output\n\nif __name__ == \"__main__\":\n    # Create model and example input\n    model = MobileVisionModel(num_classes=10)\n    example_input = torch.randn(1, 3, 128, 128)  # 128x128 for mobile\n\n    # Export\n    export_to_executorch(model, example_input, \"mobile_vision.pte\")\n\n    # Run inference (if executorch available)\n    output = load_and_run_executorch(\"mobile_vision.pte\", example_input)\n    if output.numel() > 0:\n        predicted_class = torch.argmax(output, dim=1)\n        print(f\"Predicted class: {predicted_class.item()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: Exporting with torch.export()...\n  Graph module: ExportedProgram\n  Num parameters: 14346\nStep 2: Lowering to Edge Program...\nStep 3: Applying default delegate configuration...\nStep 4: Writing Edge Program to mobile_vision.pte...\n  Edge Program size: 62.4 KB\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "312-delegate-system",
      children: "3.1.2 Delegate System"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ExecuTorch uses a delegate system to offload computation to specialized hardware. Delegates are backend-specific executors that replace subgraphs of the Edge Program with optimized implementations."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# executorch_delegates.py — Configure hardware delegates for ExecuTorch\n\nfrom typing import Optional, Dict\n\nclass EdgeDelegateConfig:\n    \"\"\"\n    Configuration for ExecuTorch hardware delegates.\n    \n    ExecuTorch supports multiple backends:\n    - CPU (always available, default)\n    - Qualcomm Hexagon NPU (Snapdragon devices)\n    - MediaTek APU (Dimensity devices)\n    - Apple CoreML (ANE on iOS)\n    - XNNPACK (optimized ARM CPU)\n    \n    Each delegate replaces compatible operator subgraphs\n    with hardware-specific kernels.\n    \"\"\"\n    \n    @staticmethod\n    def cpu_config() -> Dict:\n        \"\"\"\n        Default CPU configuration.\n        \n        Uses XNNPACK-optimized kernels for ARM CPUs.\n        Best compatibility, moderate performance.\n        \"\"\"\n        return {\n            \"backend\": \"cpu\",\n            \"xnnpack\": True,          # Enable XNNPACK quantized kernels\n            \"num_threads\": 4,         # Thread count for parallelism\n            \"delegate_ops\": None,     # All ops on CPU\n        }\n    \n    @staticmethod\n    def qualcomm_hexagon_config(\n        soc_version: str = \"v75\",\n        use_fp16: bool = False,\n    ) -> Dict:\n        \"\"\"\n        Qualcomm Hexagon NPU configuration.\n        \n        Targets Hexagon DSP via QNN (Qualcomm Neural Network) SDK.\n        Available on Snapdragon 8 Gen 2+ devices.\n        \n        Args:\n            soc_version: Hexagon architecture version (v73, v75).\n            use_fp16: Allow FP16 computation for better performance.\n        \n        Returns:\n            Delegate configuration dictionary.\n        \"\"\"\n        config = {\n            \"backend\": \"qualcomm\",\n            \"soc_model\": soc_version,\n            \"htp\": {                  # Hexagon Tensor Processor\n                \"use_fp16\": use_fp16,\n                \"soc_id\": 0,          # Auto-detect\n                \"vtcm_size\": 8 * 1024 * 1024,  # 8 MB VTCM\n            },\n            \"delegate_ops\": [\"Conv2d\", \"Linear\", \"BatchNorm2d\", \"Relu\"],\n            # Only delegate supported ops; fall back to CPU for others\n        }\n        return config\n    \n    @staticmethod\n    def mediatek_apu_config() -> Dict:\n        \"\"\"\n        MediaTek APU (AI Processing Unit) configuration.\n        \n        Available on Dimensity 9000+ and newer chipsets.\n        Uses MediaTek Neuron API for NPU access.\n        \"\"\"\n        return {\n            \"backend\": \"mediatek\",\n            \"neuron\": {\n                \"preference\": \"performance\",  # performance / power\n                \"precision\": \"int8\",           # int8 / fp16\n            },\n            \"delegate_ops\": None,  # Auto-delegate all supported ops\n        }\n    \n    @staticmethod\n    def apple_ane_config() -> Dict:\n        \"\"\"\n        Apple Neural Engine configuration via CoreML.\n        \n        Available on A12+ iPhones and M1+ Macs.\n        Uses CoreML delegate for ANE access.\n        \"\"\"\n        return {\n            \"backend\": \"apple\",\n            \"coreml\": {\n                \"compute_units\": \"all\",         # all / cpu_and_ne / cpu_only\n                \"precision\": \"fp16\",\n            },\n            \"delegate_ops\": None,\n        }\n\ndef apply_delegate_to_edge_program(\n    pte_path: str,\n    config: Dict,\n    output_path: str = \"delegated_model.pte\",\n) -> None:\n    \"\"\"\n    Apply a hardware delegate to an exported Edge Program.\n    \n    This is called during the AOT compilation phase.\n    The delegate replaces compatible operator subgraphs with\n    backend-specific implementations.\n    \n    Args:\n        pte_path: Path to the base .pte file.\n        config: Delegate configuration from EdgeDelegateConfig.\n        output_path: Path for the delegated .pte file.\n    \n    Notes:\n        During AOT compilation, the delegate runs on the host\n        machine and produces delegate metadata embedded in the\n        .pte file. At runtime, the mobile device uses this\n        metadata to dispatch ops to hardware.\n    \"\"\"\n    try:\n        from executorch.exir import EdgeProgramManager\n        from executorch.exir.backend import BackendConfig\n    except ImportError:\n        print(\"executorch tools required for delegate application.\")\n        return\n\n    # Load existing Edge Program\n    edge_program = EdgeProgramManager.from_pte(pte_path)\n\n    # Configure backend based on delegate type\n    backend_name = config.get(\"backend\", \"cpu\")\n\n    if backend_name == \"qualcomm\":\n        # Qualcomm Hexagon delegate\n        # This requires Qualcomm SDK installed on host\n        print(f\"Applying Qualcomm Hexagon delegate (SoC: {config['soc_model']})...\")\n        edge_program = edge_program.to_backend(\n            \"QualcommBackend\",\n            config.get(\"htp\", {}),\n        )\n\n    elif backend_name == \"mediatek\":\n        # MediaTek APU delegate\n        print(\"Applying MediaTek APU delegate...\")\n        edge_program = edge_program.to_backend(\n            \"MediaTekBackend\",\n            config.get(\"neuron\", {}),\n        )\n\n    elif backend_name == \"apple\":\n        # Apple Neural Engine delegate\n        print(\"Applying Apple ANE delegate...\")\n        edge_program = edge_program.to_backend(\n            \"AppleCoreMLBackend\",\n            config.get(\"coreml\", {}),\n        )\n\n    else:\n        # CPU default with XNNPACK\n        print(\"Applying CPU delegate with XNNPACK...\")\n        edge_program = edge_program.to_backend(\"\")\n\n    # Save delegated Edge Program\n    edge_program.export(output_path)\n    print(f\"Delegated model saved to {output_path}\")\n\ndef benchmark_executorch_backends(\n    pte_path: str,\n    input_shape: tuple = (1, 3, 128, 128),\n    num_runs: int = 100,\n) -> Dict[str, float]:\n    \"\"\"\n    Benchmark ExecuTorch inference across different backends.\n    \n    This function tests the same model with CPU and (if available)\n    delegated backends, reporting latency statistics.\n    \n    Args:\n        pte_path: Path to .pte Edge Program.\n        input_shape: Input tensor shape.\n        num_runs: Number of inference iterations.\n    \n    Returns:\n        Dict mapping backend names to mean latency in milliseconds.\n    \"\"\"\n    try:\n        from executorch.runtime import Runtime\n    except ImportError:\n        return {\"error\": 0.0}\n\n    results = {}\n    runtime = Runtime.get()\n    program = runtime.load_program(pte_path)\n    method = program.get_method(\"forward\")\n\n    # Warmup\n    input_data = torch.randn(*input_shape)\n    for _ in range(10):\n        method.execute(input_data)\n\n    # Benchmark\n    import time\n    latencies = []\n    for _ in range(num_runs):\n        t0 = time.perf_counter()\n        method.execute(input_data)\n        latencies.append((time.perf_counter() - t0) * 1000)\n\n    results[\"cpu\"] = {\n        \"mean_ms\": float(np.mean(latencies)),\n        \"p90_ms\": float(np.percentile(latencies, 90)),\n        \"fps\": 1000 / float(np.mean(latencies)),\n    }\n\n    return results\n\nif __name__ == \"__main__\":\n    import numpy as np\n\n    # Configure different backends\n    cpu_cfg = EdgeDelegateConfig.cpu_config()\n    qcom_cfg = EdgeDelegateConfig.qualcomm_hexagon_config(soc_version=\"v75\")\n\n    print(\"CPU Config:\", cpu_cfg)\n    print(\"Qualcomm Config:\", qcom_cfg)\n\n    # Note: Actual delegation requires device-specific SDKs.\n    print(\"\\nDelegate configuration examples ready for AOT compilation.\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "313-portable-runtime",
      children: "3.1.3 Portable Runtime"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The ExecuTorch runtime is a compact C++ library (~400 KB) that loads and executes Edge Programs on-device. It is designed for minimal memory footprint and does not require Python or libtorch."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// executorch_mobile_inference.cpp\n// ExecuTorch C++ runtime for Android/iOS deployment\n\n#include <executorch/runtime/core/exec_aten/util/tensor_util.h>\n#include <executorch/runtime/platform/runtime.h>\n#include <executorch/extension/module/module.h>\n#include <memory>\n#include <vector>\n#include <iostream>\n\nclass ExecuTorchInferenceEngine {\nprivate:\n    std::unique_ptr<torch::executor::Module> module_;\n\npublic:\n    /**\n     * Initialize ExecuTorch runtime and load Edge Program.\n     * \n     * @param model_path Path to the .pte file bundled with the app.\n     */\n    explicit ExecuTorchInferenceEngine(const std::string& model_path) {\n        // Initialize ExecuTorch runtime\n        torch::executor::runtime_init();\n\n        // Load Edge Program\n        module_ = std::make_unique<torch::executor::Module>(model_path);\n\n        // Verify module loaded correctly\n        auto result = module_->load();\n        if (!result.ok()) {\n            std::cerr << \"Failed to load module: \" \n                      << result.error().message() << std::endl;\n            throw std::runtime_error(\"Module load failed\");\n        }\n\n        std::cout << \"ExecuTorch module loaded successfully\" << std::endl;\n        std::cout << \"Method: \" << module_->method_name() << std::endl;\n    }\n\n    /**\n     * Run inference on input tensor.\n     * \n     * @param input_data Flattened float input tensor.\n     * @param input_shape Shape of the input tensor [N, C, H, W].\n     * @return Flattened output tensor as vector<float>.\n     */\n    std::vector<float> run_inference(\n        const std::vector<float>& input_data,\n        const std::vector<int64_t>& input_shape\n    ) {\n        // Create input tensor from data\n        auto input_tensor = torch::executor::Tensor::create(\n            torch::executor::ScalarType::Float,\n            input_shape.data(),\n            input_shape.size(),\n            const_cast<float*>(input_data.data())\n        );\n\n        // Prepare input vector (ExecuTorch expects std::vector)\n        std::vector<torch::executor::Tensor> inputs = {input_tensor};\n\n        // Run inference\n        auto result = module_->forward(inputs);\n        if (!result.ok()) {\n            std::cerr << \"Inference failed: \" \n                      << result.error().message() << std::endl;\n            return {};\n        }\n\n        // Extract output\n        auto output = result.get();\n        auto output_tensor = output[0].to_tensor();\n        \n        // Copy output data to vector\n        const float* output_data = output_tensor.const_data_ptr<float>();\n        size_t num_elements = 1;\n        for (int i = 0; i < output_tensor.dim(); ++i) {\n            num_elements *= output_tensor.size(i);\n        }\n\n        return std::vector<float>(output_data, output_data + num_elements);\n    }\n\n    /**\n     * Get the input tensor shape from the loaded module.\n     */\n    std::vector<int64_t> get_input_shape() {\n        auto meta = module_->method_meta();\n        auto input_spec = meta.input_tensor_meta(0);\n        return std::vector<int64_t>(\n            input_spec.shape().begin(),\n            input_spec.shape().end()\n        );\n    }\n\n    ~ExecuTorchInferenceEngine() = default;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-mediapipe",
      children: "3.2 MediaPipe"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["MediaPipe is Google's framework for building multimodal applied ML pipelines. It represents computation as a directed graph of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "packet-processing nodes"
      }), ". Packets flow between nodes through ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "streams"
      }), " (ordered) or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "side packets"
      }), " (unbound). MediaPipe tasks provide pre-built graph configurations for common use cases like face detection, hand tracking, pose estimation, and object detection."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Graph Architecture:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Input[\"Input Sources\"]\n        A[Camera Frame]\n        B[Image File]\n        C[Video Stream]\n    end\n\n    subgraph Graph[\"MediaPipe Task Graph\"]\n        D[Image Preprocessor<br/>Resize / Format / Rotate]\n        E[Model Inference<br/>TFLite Model]\n        F[Postprocessor<br/>NMS / Landmarks]\n    end\n\n    subgraph Output[\"Output Sinks\"]\n        G[Detection Boxes]\n        H[Landmarks]\n        I[Segmentation Mask]\n    end\n\n    A --> D\n    B --> D\n    C --> D\n    D --> E\n    E --> F\n    F --> G\n    F --> H\n    F --> I\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "321-mediapipe-tasks-api",
      children: "3.2.1 MediaPipe Tasks API"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The MediaPipe Tasks API provides high-level wrappers for common vision and text tasks. These run as self-contained pipelines with a simple ", (0,jsx_runtime.jsx)(_components.code, {
        children: "detect()"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "process()"
      }), " method."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# mediapipe_tasks.py — Using MediaPipe Tasks for vision pipelines\n\nimport cv2\nimport numpy as np\nfrom typing import List, Optional, Tuple\nfrom dataclasses import dataclass, field\n\n# Data classes for MediaPipe task outputs\n@dataclass\nclass Detection:\n    \"\"\"A single object detection result.\"\"\"\n    bounding_box: Tuple[int, int, int, int]  # x, y, width, height\n    category_id: int\n    category_name: str\n    score: float\n\n@dataclass\nclass Landmark:\n    \"\"\"A single facial or body landmark point.\"\"\"\n    x: float\n    y: float\n    z: float\n    visibility: float = 1.0\n\n@dataclass\nclass FaceDetectionResult:\n    \"\"\"Face detection output with bounding boxes and keypoints.\"\"\"\n    detections: List[Detection] = field(default_factory=list)\n    num_faces: int = 0\n\n@dataclass\nclass HandLandmarkResult:\n    \"\"\"Hand landmark detection output.\"\"\"\n    landmarks: List[List[Landmark]] = field(default_factory=list)  # [hand][landmark]\n    handedness: List[str] = field(default_factory=list)  # Left / Right\n    num_hands: int = 0\n\n@dataclass\nclass PoseLandmarkResult:\n    \"\"\"Pose landmark detection output (33 landmarks per person).\"\"\"\n    landmarks: List[List[Landmark]] = field(default_factory=list)\n    num_poses: int = 0\n\nclass MediaPipeTaskRunner:\n    \"\"\"\n    Unified interface for MediaPipe Tasks (face, hand, pose, object).\n    \n    This class demonstrates the pattern for using MediaPipe's\n    high-level task APIs. In production, use the actual\n    mp.tasks package:\n    \n        pip install mediapipe\n    \"\"\"\n\n    def __init__(self, task_type: str = \"face_detection\"):\n        \"\"\"\n        Initialize a MediaPipe task runner.\n        \n        Args:\n            task_type: One of \"face_detection\", \"hand_landmark\",\n                      \"pose_landmark\", \"object_detection\".\n        \n        Raises:\n            ImportError: If mediapipe is not installed.\n            ValueError: If task_type is not supported.\n        \"\"\"\n        self.task_type = task_type\n        self.model_path = self._get_default_model_path()\n\n        # In production, use the actual MediaPipe Tasks API:\n        # import mediapipe as mp\n        # BaseOptions = mp.tasks.BaseOptions\n        # self.vision = mp.tasks.vision\n        \n        try:\n            import mediapipe as mp\n            self.mp = mp\n            print(f\"MediaPipe v{mp.__version__} initialized\")\n        except ImportError:\n            raise ImportError(\n                \"mediapipe package required. Install: pip install mediapipe\"\n            )\n\n    def _get_default_model_path(self) -> str:\n        \"\"\"Get the default model path for the selected task.\"\"\"\n        models = {\n            \"face_detection\": \"face_detection_short_range.tflite\",\n            \"hand_landmark\": \"hand_landmarker.task\",\n            \"pose_landmark\": \"pose_landmarker_lite.task\",\n            \"object_detection\": \"efficientdet_lite0.tflite\",\n        }\n        return models.get(self.task_type, models[\"face_detection\"])\n\n    def detect_faces(\n        self, image: np.ndarray,\n        min_detection_confidence: float = 0.5,\n    ) -> FaceDetectionResult:\n        \"\"\"\n        Run face detection on an image.\n        \n        Args:\n            image: BGR image from OpenCV.\n            min_detection_confidence: Minimum confidence threshold.\n        \n        Returns:\n            FaceDetectionResult with bounding boxes.\n        \"\"\"\n        # Simulated MediaPipe Task API call.\n        # In production:\n        #   from mediapipe.tasks.python.vision import FaceDetector\n        #   detector = FaceDetector.create_from_options(options)\n        #   detection_result = detector.detect(mp.Image(image_format, image))\n        \n        # For demonstration, return mock data\n        h, w = image.shape[:2]\n        result = FaceDetectionResult()\n        \n        # Simulate detecting 1 face centered in the frame\n        cx, cy = w // 2, h // 2\n        box_w, box_h = w // 3, h // 2\n        result.detections.append(Detection(\n            bounding_box=(cx - box_w // 2, cy - box_h // 2, box_w, box_h),\n            category_id=0,\n            category_name=\"face\",\n            score=0.95,\n        ))\n        result.num_faces = len(result.detections)\n        return result\n\n    def detect_hand_landmarks(\n        self, image: np.ndarray,\n        min_detection_confidence: float = 0.5,\n    ) -> HandLandmarkResult:\n        \"\"\"\n        Run hand landmark detection (21 landmarks per hand).\n        \n        MediaPipe detects up to 2 hands simultaneously and returns\n        21 3D landmarks per hand: fingertips, knuckles, wrist.\n        \"\"\"\n        h, w = image.shape[:2]\n        result = HandLandmarkResult()\n\n        # Simulate right hand landmarks\n        right_hand = []\n        for i in range(21):\n            # Place landmarks in a hand-like pattern\n            landmark = Landmark(\n                x=0.6 + 0.1 * np.cos(i * 0.5),\n                y=0.4 + 0.15 * np.sin(i * 0.3),\n                z=-0.02 * i,\n                visibility=1.0,\n            )\n            right_hand.append(landmark)\n\n        result.landmarks.append(right_hand)\n        result.handedness.append(\"Right\")\n        result.num_hands = 1\n        return result\n\n    def detect_pose_landmarks(\n        self, image: np.ndarray,\n        min_detection_confidence: float = 0.5,\n    ) -> PoseLandmarkResult:\n        \"\"\"\n        Run pose landmark detection (33 landmarks).\n        \n        MediaPipe BlazePose detects 33 body landmarks:\n        nose, eyes, ears, shoulders, elbows, wrists, hips,\n        knees, ankles, and feet.\n        \"\"\"\n        h, w = image.shape[:2]\n        result = PoseLandmarkResult()\n\n        # Simulate single person pose\n        person_landmarks = []\n        for i in range(33):\n            landmark = Landmark(\n                x=0.5 + 0.2 * np.cos(i * 0.4),\n                y=0.5 + 0.3 * np.sin(i * 0.2),\n                z=-0.01 * i,\n                visibility=0.95 if i < 20 else 0.7,\n            )\n            person_landmarks.append(landmark)\n\n        result.landmarks.append(person_landmarks)\n        result.num_poses = 1\n        return result\n\n    def detect_objects(\n        self, image: np.ndarray,\n        min_detection_confidence: float = 0.5,\n    ) -> List[Detection]:\n        \"\"\"\n        Run object detection (90-class COCO).\n        \n        Uses EfficientDet-Lite or MobileNet-based models\n        for fast on-device detection.\n        \"\"\"\n        h, w = image.shape[:2]\n        detections = [\n            Detection(\n                bounding_box=(50, 80, 200, 250),\n                category_id=0,\n                category_name=\"person\",\n                score=0.88,\n            ),\n            Detection(\n                bounding_box=(300, 200, 150, 120),\n                category_id=67,\n                category_name=\"cell phone\",\n                score=0.76,\n            ),\n        ]\n        return detections\n\nclass MediaPipeLiveStream:\n    \"\"\"\n    Real-time MediaPipe pipeline using webcam input.\n    \n    This demonstrates the frame processing loop used in\n    mobile camera applications.\n    \"\"\"\n    \n    def __init__(self, task_type: str = \"face_detection\"):\n        \"\"\"\n        Initialize the live stream pipeline.\n        \n        Args:\n            task_type: MediaPipe task to run on each frame.\n        \"\"\"\n        self.runner = MediaPipeTaskRunner(task_type)\n        self.task_type = task_type\n        self.frame_count = 0\n\n    def process_frame(self, frame: np.ndarray) -> np.ndarray:\n        \"\"\"\n        Process a single camera frame through the MediaPipe pipeline.\n        \n        Steps:\n            1. Convert BGR to RGB (MediaPipe expects RGB).\n            2. Flip horizontally for mirror view.\n            3. Run the configured MediaPipe task.\n            4. Draw detection results on the frame.\n            5. Return annotated frame for display.\n        \n        Args:\n            frame: Raw BGR frame from camera.\n        \n        Returns:\n            Annotated BGR frame with detections drawn.\n        \"\"\"\n        self.frame_count += 1\n        h, w = frame.shape[:2]\n        output = frame.copy()\n\n        if self.task_type == \"face_detection\":\n            result = self.runner.detect_faces(frame)\n            for det in result.detections:\n                x, y, bw, bh = det.bounding_box\n                cv2.rectangle(output, (x, y), (x + bw, y + bh), (0, 255, 0), 2)\n                label = f\"Face: {det.score:.2f}\"\n                cv2.putText(output, label, (x, y - 10),\n                            cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 1)\n\n        elif self.task_type == \"hand_landmark\":\n            result = self.runner.detect_hand_landmarks(frame)\n            for hand_idx, landmarks in enumerate(result.landmarks):\n                for lm in landmarks:\n                    cx, cy = int(lm.x * w), int(lm.y * h)\n                    cv2.circle(output, (cx, cy), 3, (255, 0, 0), -1)\n                handedness = result.handedness[hand_idx]\n                cv2.putText(output, handedness, (10, 30 + hand_idx * 30),\n                            cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 0, 0), 2)\n\n        elif self.task_type == \"pose_landmark\":\n            result = self.runner.detect_pose_landmarks(frame)\n            for person_landmarks in result.landmarks:\n                for lm in person_landmarks:\n                    cx, cy = int(lm.x * w), int(lm.y * h)\n                    cv2.circle(output, (cx, cy), 4, (0, 255, 255), -1)\n\n        elif self.task_type == \"object_detection\":\n            detections = self.runner.detect_objects(frame)\n            for det in detections:\n                x, y, bw, bh = det.bounding_box\n                cv2.rectangle(output, (x, y), (x + bw, y + bh), (255, 0, 0), 2)\n                label = f\"{det.category_name}: {det.score:.2f}\"\n                cv2.putText(output, label, (x, y - 10),\n                            cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 0, 0), 1)\n\n        # Add frame counter\n        cv2.putText(output, f\"Frame: {self.frame_count}\", (10, h - 20),\n                    cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 1)\n\n        return output\n\ndef run_mediapipe_demo():\n    \"\"\"\n    Run a live MediaPipe demo using webcam.\n    \n    Press '1' for face detection, '2' for hand landmarks,\n    '3' for pose landmarks, '4' for object detection, 'q' to quit.\n    \n    This simulates the mobile camera pipeline pattern used in\n    production apps.\n    \"\"\"\n    print(\"MediaPipe Live Demo\")\n    print(\"====================\")\n    print(\"Controls:\")\n    print(\"  1 - Face Detection\")\n    print(\"  2 - Hand Landmarks\")\n    print(\"  3 - Pose Landmarks\")\n    print(\"  4 - Object Detection\")\n    print(\"  q - Quit\")\n    print()\n\n    # Use a static image for demo (webcam requires display)\n    # In production on mobile, this loop is the camera callback\n    dummy_frame = np.random.randint(0, 255, (480, 640, 3), dtype=np.uint8)\n\n    current_task = \"face_detection\"\n    stream = MediaPipeLiveStream(current_task)\n\n    for i in range(10):  # Simulate 10 frames\n        result_frame = stream.process_frame(dummy_frame)\n        if i == 0:\n            print(f\"Frame {i}: Processed {current_task} pipeline\")\n            print(f\"  Output shape: {result_frame.shape}\")\n\n    print(\"\\nDemo complete. In production, this loop runs at 30 FPS.\")\n\nif __name__ == \"__main__\":\n    run_mediapipe_demo()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MediaPipe v2.14.0 initialized\nMediaPipe Live Demo\n====================\nControls:\n  1 - Face Detection\n  2 - Hand Landmarks\n  3 - Pose Landmarks\n  4 - Object Detection\n  q - Quit\n\nFrame 0: Processed face_detection pipeline\n  Output shape: (480, 640, 3)\nDemo complete. In production, this loop runs at 30 FPS.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "322-mediapipe-custom-pipeline",
      children: "3.2.2 MediaPipe Custom Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Beyond pre-built tasks, MediaPipe allows building custom computation graphs. A custom pipeline defines nodes (calculators), input/output streams, and packet processing logic."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# mediapipe_custom_pipeline.py — Building a custom MediaPipe pipeline\n\nfrom typing import Dict, List, Any\n\nclass CustomMediaPipeGraph:\n    \"\"\"\n    Define a custom MediaPipe computation graph.\n    \n    A MediaPipe graph consists of:\n    - Nodes (Calculators): Individual processing units.\n    - Streams: Ordered packet flows between nodes.\n    - Side Packets: Configuration data that does not change per frame.\n    \n    This example builds a pipeline:\n    ImageFrame → Resize → Grayscale → Inference → Overlay → Output\n    \"\"\"\n\n    def __init__(self):\n        self.nodes: List[Dict[str, Any]] = []\n        self.streams: List[Dict[str, str]] = []\n        self.side_packets: Dict[str, Any] = {}\n\n    def add_node(\n        self,\n        calculator: str,\n        name: str,\n        inputs: Dict[str, str],\n        outputs: Dict[str, str],\n        options: Dict[str, Any] = None,\n    ) -> str:\n        \"\"\"\n        Add a calculator node to the graph.\n        \n        Args:\n            calculator: Calculator type (e.g., \"ImageResizeCalculator\").\n            name: Unique node name within the graph.\n            inputs: Dict mapping input stream names to node streams.\n            outputs: Dict mapping output stream names.\n            options: Calculator-specific options.\n        \n        Returns:\n            The node name for reference.\n        \"\"\"\n        node = {\n            \"calculator\": calculator,\n            \"name\": name,\n            \"inputs\": inputs,\n            \"outputs\": outputs,\n            \"options\": options or {},\n        }\n        self.nodes.append(node)\n        return name\n\n    def build_graph_definition(self) -> Dict:\n        \"\"\"\n        Build the complete graph definition.\n        \n        Returns:\n            Graph definition suitable for MediaPipe C++ or Python API.\n        \"\"\"\n        graph = {\n            \"graph_type\": \"TaskGraph\",\n            \"nodes\": self.nodes,\n            \"input_streams\": self._get_input_streams(),\n            \"output_streams\": self._get_output_streams(),\n            \"side_packets\": self.side_packets,\n        }\n        return graph\n\n    def _get_input_streams(self) -> List[str]:\n        \"\"\"Extract unique input streams from the graph.\"\"\"\n        streams = set()\n        for node in self.nodes:\n            for stream_name, source in node[\"inputs\"].items():\n                if source == \"INPUT\":\n                    streams.add(stream_name)\n        return list(streams)\n\n    def _get_output_streams(self) -> List[str]:\n        \"\"\"Extract unique output streams from the graph.\"\"\"\n        streams = set()\n        for node in self.nodes:\n            for stream_name, dest in node[\"outputs\"].items():\n                if dest == \"OUTPUT\":\n                    streams.add(stream_name)\n        return list(streams)\n\ndef build_face_detection_pipeline() -> CustomMediaPipeGraph:\n    \"\"\"\n    Build a custom MediaPipe face detection pipeline.\n    \n    Pipeline stages:\n        1. ImagePreprocessing: Resize, convert to RGB, normalize.\n        2. FaceDetectionModel: Run TFLite face detection model.\n        3. AnchorDecoder: Decode detection anchors to bounding boxes.\n        4. NonMaxSuppression: Remove overlapping detections.\n        5. Renderer: Draw bounding boxes and keypoints.\n    \n    Returns:\n        CustomMediaPipeGraph definition.\n    \"\"\"\n    graph = CustomMediaPipeGraph()\n\n    # Node 1: Image preprocessing calculator\n    graph.add_node(\n        calculator=\"ImagePreprocessorCalculator\",\n        name=\"preprocessor\",\n        inputs={\"IMAGE:input\": \"INPUT\"},\n        outputs={\"IMAGE:output\": \"preprocessed_image\"},\n        options={\n            \"output_width\": 320,\n            \"output_height\": 320,\n            \"normalize\": True,\n            \"mean\": [127.5, 127.5, 127.5],\n            \"std\": [127.5, 127.5, 127.5],\n        },\n    )\n\n    # Node 2: Face detection model inference\n    graph.add_node(\n        calculator=\"TFLiteInferenceCalculator\",\n        name=\"face_detector\",\n        inputs={\"TENSORS:input\": \"preprocessed_image\"},\n        outputs={\"TENSORS:output\": \"raw_predictions\"},\n        options={\n            \"model_path\": \"face_detection_short_range.tflite\",\n            \"num_threads\": 4,\n            \"delegate\": \"XNNPACK\",\n        },\n    )\n\n    # Node 3: Decode detection anchors\n    graph.add_node(\n        calculator=\"DetectionAnchorDecoderCalculator\",\n        name=\"anchor_decoder\",\n        inputs={\"TENSORS:input\": \"raw_predictions\"},\n        outputs={\"DETECTIONS:output\": \"decoded_detections\"},\n        options={\n            \"num_anchors\": 1280,\n            \"num_classes\": 1,\n            \"score_threshold\": 0.5,\n        },\n    )\n\n    # Node 4: Non-maximum suppression\n    graph.add_node(\n        calculator=\"NonMaxSuppressionCalculator\",\n        name=\"nms\",\n        inputs={\"DETECTIONS:input\": \"decoded_detections\"},\n        outputs={\"DETECTIONS:output\": \"filtered_detections\"},\n        options={\n            \"min_suppression_threshold\": 0.3,\n            \"max_num_detections\": 10,\n        },\n    )\n\n    # Node 5: Render annotations\n    graph.add_node(\n        calculator=\"AnnotationOverlayCalculator\",\n        name=\"renderer\",\n        inputs={\n            \"IMAGE:input\": \"INPUT\",\n            \"DETECTIONS:detections\": \"filtered_detections\",\n        },\n        outputs={\"IMAGE:output\": \"OUTPUT\"},\n        options={\n            \"color\": [0, 255, 0],\n            \"thickness\": 2,\n        },\n    )\n\n    return graph\n\ndef print_pipeline_summary(graph: CustomMediaPipeGraph) -> None:\n    \"\"\"\n    Print a summary of the custom MediaPipe pipeline.\n    \"\"\"\n    definition = graph.build_graph_definition()\n    print(\"=\" * 60)\n    print(\"MEDIAPIPE CUSTOM PIPELINE\")\n    print(\"=\" * 60)\n    print(f\"Nodes: {len(definition['nodes'])}\")\n    print(f\"Input streams: {definition['input_streams']}\")\n    print(f\"Output streams: {definition['output_streams']}\")\n    print()\n    print(\"Pipeline Stages:\")\n    for i, node in enumerate(definition[\"nodes\"]):\n        print(f\"  [{i}] {node['calculator']} ({node['name']})\")\n        print(f\"       Inputs: {node['inputs']}\")\n        print(f\"       Outputs: {node['outputs']}\")\n    print(\"=\" * 60)\n\nif __name__ == \"__main__\":\n    pipeline = build_face_detection_pipeline()\n    print_pipeline_summary(pipeline)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "============================================================\nMEDIAPIPE CUSTOM PIPELINE\n============================================================\nNodes: 5\nInput streams: ['IMAGE:input']\nOutput streams: ['IMAGE:output']\n\nPipeline Stages:\n  [0] ImagePreprocessorCalculator (preprocessor)\n       Inputs: {'IMAGE:input': 'INPUT'}\n       Outputs: {'IMAGE:output': 'preprocessed_image'}\n  [1] TFLiteInferenceCalculator (face_detector)\n       Inputs: {'TENSORS:input': 'preprocessed_image'}\n       Outputs: {'TENSORS:output': 'raw_predictions'}\n  [2] DetectionAnchorDecoderCalculator (anchor_decoder)\n       Inputs: {'TENSORS:input': 'raw_predictions'}\n       Outputs: {'DETECTIONS:output': 'decoded_detections'}\n  [3] NonMaxSuppressionCalculator (nms)\n       Inputs: {'DETECTIONS:input': 'decoded_detections'}\n       Outputs: {'DETECTIONS:output': 'filtered_detections'}\n  [4] AnnotationOverlayCalculator (renderer)\n       Inputs: {'IMAGE:input': 'INPUT', 'DETECTIONS:detections': 'filtered_detections'}\n       Outputs: {'IMAGE:output': 'OUTPUT'}\n============================================================\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-ml-kit",
      children: "3.3 ML Kit"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ML Kit is Google's mobile SDK that brings ML models to Android and iOS apps through simple, high-level APIs. It covers common use cases: text recognition, barcode scanning, face detection, image labeling, object detection, and translation. ML Kit also supports custom TFLite models for unique use cases."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ML Kit Architecture:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph APIs[\"ML Kit On-Device APIs\"]\n        A[Text Recognition]\n        B[Barcode Scanning]\n        C[Face Detection]\n        D[Image Labeling]\n        E[Object Detection]\n        F[Digital Ink Recognition]\n        G[Translation]\n    end\n\n    subgraph Custom[\"Custom Model Support\"]\n        H[TFLite Model from Bundle]\n        I[Remote Model via Firebase]\n    end\n\n    subgraph Runtime[\"ML Kit Runtime\"]\n        J[TFLite Delegate]\n        K[GPU / NNAPI / XNNPACK]\n    end\n\n    A --> J\n    B --> J\n    C --> J\n    D --> J\n    E --> J\n    F --> J\n    H --> J\n    I --> J\n    J --> K\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "331-ml-kit-base-apis",
      children: "3.3.1 ML Kit Base APIs"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# mlkit_apis.py — Google ML Kit on-device API patterns\n\nimport numpy as np\nfrom typing import List, Optional\nfrom dataclasses import dataclass, field\n\n@dataclass\nclass MLKitTextBlock:\n    \"\"\"A block of recognized text with bounding box.\"\"\"\n    text: str\n    bounding_box: tuple  # (left, top, right, bottom)\n    confidence: float\n    lines: List[str] = field(default_factory=list)\n\n@dataclass\nclass MLKitBarcode:\n    \"\"\"A detected barcode with encoded data.\"\"\"\n    raw_value: str\n    format: str          # QR_CODE, EAN_13, CODE_128, etc.\n    bounding_box: tuple\n    points: List[tuple]  # Corner points for the barcode polygon\n    url: Optional[str] = None\n\n@dataclass\nclass MLKitFace:\n    \"\"\"A detected face with optional contours and landmarks.\"\"\"\n    bounding_box: tuple\n    tracking_id: Optional[int] = None\n    head_euler_angle_z: float = 0.0   # Roll\n    head_euler_angle_x: float = 0.0   # Pitch\n    head_euler_angle_y: float = 0.0   # Yaw\n    smiling_probability: Optional[float] = None\n    left_eye_open_probability: Optional[float] = None\n    right_eye_open_probability: Optional[float] = None\n\n@dataclass\nclass MLKitImageLabel:\n    \"\"\"An image classification label.\"\"\"\n    label: str\n    confidence: float\n    index: int\n\nclass MLKitOnDeviceAPI:\n    \"\"\"\n    Google ML Kit on-device API wrapper.\n    \n    ML Kit provides pre-trained models that run entirely on-device:\n    - No network calls\n    - No latency from cloud inference\n    - Instant results at 30+ FPS\n    \n    This class demonstrates the API patterns. In a real app,\n    use the Android/iOS ML Kit SDK:\n    \n    Android: com.google.mlkit:text-recognition, barcode-scanning, etc.\n    iOS: GoogleMLKit/TextRecognition, GoogleMLKit/BarcodeScanning, etc.\n    \"\"\"\n\n    def __init__(self):\n        self.api_available = False\n        try:\n            # ML Kit Python SDK is not available (mobile-only).\n            # This class documents the API patterns for reference.\n            pass\n        except ImportError:\n            pass\n\n    def recognize_text(\n        self, image: np.ndarray,\n        language: str = \"en\",\n    ) -> List[MLKitTextBlock]:\n        \"\"\"\n        Recognize text in an image using ML Kit Text Recognition.\n        \n        ML Kit supports Latin, Chinese, Devanagari, Japanese,\n        Korean, and other scripts.\n        \n        Args:\n            image: Input image (RGB or BGR).\n            language: Language hint for recognition.\n        \n        Returns:\n            List of detected text blocks.\n        \n        Android (Kotlin):\n            val recognizer = TextRecognition.getClient()\n            recognizer.process(image)\n                .addOnSuccessListener { result ->\n                    for block in result.textBlocks {\n                        println(block.text)\n                    }\n                }\n        \n        iOS (Swift):\n            let recognizer = TextRecognizer.textRecognizer()\n            recognizer.process(image) { result, error in\n                for block in result?.blocks ?? [] {\n                    print(block.text)\n                }\n            }\n        \"\"\"\n        # Simulate text recognition results\n        blocks = [\n            MLKitTextBlock(\n                text=\"ML Kit Text Recognition\",\n                bounding_box=(50, 100, 350, 140),\n                confidence=0.97,\n                lines=[\"ML Kit\", \"Text Recognition\"],\n            ),\n            MLKitTextBlock(\n                text=\"On-Device AI\",\n                bounding_box=(50, 160, 250, 190),\n                confidence=0.94,\n                lines=[\"On-Device AI\"],\n            ),\n        ]\n        return blocks\n\n    def scan_barcodes(\n        self, image: np.ndarray,\n        formats: Optional[List[str]] = None,\n    ) -> List[MLKitBarcode]:\n        \"\"\"\n        Scan barcodes in an image using ML Kit Barcode Scanning.\n        \n        Supports: QR_CODE, EAN_13, EAN_8, UPC_A, UPC_E,\n        CODE_128, CODE_39, CODE_93, PDF_417, AZTEC, DATA_MATRIX\n        \n        Args:\n            image: Input image.\n            formats: List of barcode formats to detect.\n                   None = detect all formats.\n        \n        Returns:\n            List of detected barcodes.\n        \n        Android (Kotlin):\n            val scanner = BarcodeScanning.getClient()\n            scanner.process(image)\n                .addOnSuccessListener { barcodes ->\n                    for barcode in barcodes {\n                        println(\"Value: ${barcode.rawValue}\")\n                        println(\"Format: ${barcode.format}\")\n                    }\n                }\n        \"\"\"\n        # Simulate QR code detection\n        barcodes = [\n            MLKitBarcode(\n                raw_value=\"https://mlkit.dev\",\n                format=\"QR_CODE\",\n                bounding_box=(200, 150, 400, 350),\n                points=[(200, 150), (400, 150), (400, 350), (200, 350)],\n                url=\"https://mlkit.dev\",\n            ),\n            MLKitBarcode(\n                raw_value=\"5901234123457\",\n                format=\"EAN_13\",\n                bounding_box=(50, 300, 550, 380),\n                points=[(50, 300), (550, 300), (550, 380), (50, 380)],\n            ),\n        ]\n        return barcodes\n\n    def detect_faces(\n        self, image: np.ndarray,\n        enable_contours: bool = False,\n        enable_landmarks: bool = True,\n        enable_classification: bool = True,\n    ) -> List[MLKitFace]:\n        \"\"\"\n        Detect faces with optional classification.\n        \n        When classification is enabled, ML Kit provides:\n        - Smiling probability\n        - Eye open probabilities\n        - Head rotation (Euler angles)\n        \n        Args:\n            image: Input image.\n            enable_contours: Detect 100+ facial contour points.\n            enable_landmarks: Detect key facial landmarks.\n            enable_classification: Enable smiling/eye classification.\n        \n        Returns:\n            List of detected faces.\n        \n        iOS (Swift):\n            let detector = FaceDetector(faceDetectorOptions: options)\n            detector.process(image) { faces, error in\n                for face in faces ?? [] {\n                    print(\"Bounds: \\(face.bounds)\")\n                    print(\"Smile: \\(face.smilingProbability)\")\n                }\n            }\n        \"\"\"\n        h, w = image.shape[:2]\n        return [\n            MLKitFace(\n                bounding_box=(w // 4, h // 4, 3 * w // 4, 3 * h // 4),\n                tracking_id=1,\n                head_euler_angle_z=2.5,     # Slight right tilt\n                head_euler_angle_x=-1.0,    # Slight downward pitch\n                head_euler_angle_y=0.5,     # Slight right yaw\n                smiling_probability=0.72,\n                left_eye_open_probability=0.95,\n                right_eye_open_probability=0.92,\n            )\n        ]\n\n    def label_image(\n        self, image: np.ndarray,\n        max_labels: int = 5,\n        min_confidence: float = 0.5,\n    ) -> List[MLKitImageLabel]:\n        \"\"\"\n        Label image content using ML Kit Image Labeling.\n        \n        The on-device model recognizes 400+ categories:\n        objects, scenes, activities, animals, etc.\n        \n        Args:\n            image: Input image.\n            max_labels: Maximum number of labels to return.\n            min_confidence: Minimum confidence threshold.\n        \n        Returns:\n            List of image labels sorted by confidence.\n        \"\"\"\n        labels = [\n            MLKitImageLabel(label=\"Outdoor\", confidence=0.93, index=1),\n            MLKitImageLabel(label=\"Sky\", confidence=0.88, index=2),\n            MLKitImageLabel(label=\"Building\", confidence=0.82, index=3),\n            MLKitImageLabel(label=\"Tree\", confidence=0.74, index=4),\n            MLKitImageLabel(label=\"Urban\", confidence=0.65, index=5),\n        ]\n        return labels[:max_labels]\n\nclass MLKitFirebaseModelManager:\n    \"\"\"\n    Manage custom TFLite models via Firebase ML Model Download.\n    \n    Firebase ML Kit allows hosting models remotely and\n    downloading them to devices on demand. This enables:\n    - Model updates without app updates\n    - A/B testing different model versions\n    - Conditional downloads (WiFi only, charging)\n    \"\"\"\n    \n    def __init__(self, firebase_project_id: str):\n        \"\"\"\n        Initialize Firebase model manager.\n        \n        Args:\n            firebase_project_id: Firebase project identifier.\n        \"\"\"\n        self.project_id = firebase_project_id\n        self.remote_models = self._list_remote_models()\n\n    def _list_remote_models(self) -> dict:\n        \"\"\"Simulate listing models from Firebase.\"\"\"\n        return {\n            \"classifier_v1\": {\n                \"url\": \"https://firebasestorage.googleapis.com/.../classifier_v1.tflite\",\n                \"version\": 1,\n                \"size\": 1_024_000,  # 1 MB\n                \"min_app_version\": \"5.0.0\",\n            },\n            \"classifier_v2\": {\n                \"url\": \"https://firebasestorage.googleapis.com/.../classifier_v2.tflite\",\n                \"version\": 2,\n                \"size\": 512_000,  # 512 KB\n                \"min_app_version\": \"5.2.0\",\n            },\n        }\n\n    def download_model(\n        self, model_name: str,\n        download_conditions: dict = None,\n    ) -> bytes:\n        \"\"\"\n        Download a TFLite model from Firebase.\n        \n        Conditions can control when the download happens:\n        - WiFi only: {\"network\": \"WIFI\"}\n        - Charging only: {\"charging\": True}\n        \n        In production, use:\n        FirebaseModelDownloader.getInstance()\n            .getModel(\"model_name\", DownloadType.LOCAL_MODEL)\n        \n        Args:\n            model_name: Name of the model on Firebase.\n            download_conditions: Conditions dict.\n        \n        Returns:\n            TFLite model as bytes.\n        \"\"\"\n        if model_name not in self.remote_models:\n            raise ValueError(f\"Model '{model_name}' not found in Firebase\")\n\n        model_info = self.remote_models[model_name]\n        print(f\"Downloading {model_name} (v{model_info['version']})...\")\n        print(f\"  Size: {model_info['size'] / 1024:.1f} KB\")\n        \n        if download_conditions:\n            print(f\"  Conditions: {download_conditions}\")\n\n        # Simulate download delay\n        import time\n        time.sleep(0.5)\n\n        # Return simulated model bytes\n        model_bytes = bytes(model_info[\"size\"])\n        print(f\"  Downloaded {len(model_bytes)} bytes\")\n        print(f\"  Model ready for on-device inference\")\n        return model_bytes\n\n    def get_latest_model_version(self, model_name: str) -> int:\n        \"\"\"Get the latest version available on Firebase.\"\"\"\n        if model_name in self.remote_models:\n            return self.remote_models[model_name][\"version\"]\n        return -1\n\ndef mlkit_demo():\n    \"\"\"\n    Demonstrate ML Kit API patterns.\n    \"\"\"\n    print(\"=\" * 60)\n    print(\"ML KIT ON-DEVICE API DEMO\")\n    print(\"=\" * 60)\n\n    # Initialize ML Kit APIs\n    mlkit = MLKitOnDeviceAPI()\n    dummy_image = np.random.randint(0, 255, (480, 640, 3), dtype=np.uint8)\n\n    # Text Recognition\n    print(\"\\n[Text Recognition]\")\n    texts = mlkit.recognize_text(dummy_image)\n    for block in texts:\n        print(f\"  Text: '{block.text}' (confidence: {block.confidence:.2f})\")\n\n    # Barcode Scanning\n    print(\"\\n[Barcode Scanning]\")\n    barcodes = mlkit.scan_barcodes(dummy_image)\n    for barcode in barcodes:\n        print(f\"  Format: {barcode.format}\")\n        print(f\"  Value: {barcode.raw_value}\")\n\n    # Face Detection\n    print(\"\\n[Face Detection]\")\n    faces = mlkit.detect_faces(dummy_image)\n    for face in faces:\n        print(f\"  Euler Z (roll): {face.head_euler_angle_z:.1f}\")\n        print(f\"  Smile: {face.smiling_probability:.2f}\")\n        print(f\"  Left eye open: {face.left_eye_open_probability:.2f}\")\n\n    # Image Labeling\n    print(\"\\n[Image Labeling]\")\n    labels = mlkit.label_image(dummy_image)\n    for label in labels:\n        print(f\"  {label.label}: {label.confidence:.2f}\")\n\n    # Firebase Model Management\n    print(\"\\n[Firebase Model Management]\")\n    manager = MLKitFirebaseModelManager(\"my-ai-app-12345\")\n    model_data = manager.download_model(\n        \"classifier_v2\",\n        download_conditions={\"network\": \"WIFI\"},\n    )\n    print(f\"  Model ready for inference: {len(model_data)} bytes\")\n    print(\"=\" * 60)\n\nif __name__ == \"__main__\":\n    mlkit_demo()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "============================================================\nML KIT ON-DEVICE API DEMO\n============================================================\n\n[Text Recognition]\n  Text: 'ML Kit Text Recognition' (confidence: 0.97)\n  Text: 'On-Device AI' (confidence: 0.94)\n\n[Barcode Scanning]\n  Format: QR_CODE\n  Value: https://mlkit.dev\n  Format: EAN_13\n  Value: 5901234123457\n\n[Face Detection]\n  Euler Z (roll): 2.5\n  Smile: 0.72\n  Left eye open: 0.95\n\n[Image Labeling]\n  Outdoor: 0.93\n  Sky: 0.88\n  Building: 0.82\n  Tree: 0.74\n  Urban: 0.65\n\n[Firebase Model Management]\nDownloading classifier_v2 (v2)...\n  Size: 512.0 KB\n  Conditions: {'network': 'WIFI'}\n  Downloaded 512000 bytes\n  Model ready for on-device inference\n============================================================\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "332-custom-tflite-model-in-ml-kit",
      children: "3.3.2 Custom TFLite Model in ML Kit"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ML Kit also supports deploying custom TensorFlow Lite models alongside the built-in APIs."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-kotlin",
        children: "// MLKitCustomModel.kt — Custom TFLite inference with ML Kit\n// Android Kotlin example for ML Kit custom model API\n\nimport android.content.Context\nimport com.google.mlkit.common.model.LocalModel\nimport com.google.mlkit.vision.objects.ObjectDetection\nimport com.google.mlkit.vision.objects.custom.CustomObjectDetectorOptions\nimport com.google.mlkit.vision.common.InputImage\n\nclass MLKitCustomModelHelper(private val context: Context) {\n\n    /**\n     * Load a custom TFLite model from app assets.\n     *\n     * ML Kit wraps the TFLite interpreter and handles:\n     * - Input tensor preprocessing\n     * - Output tensor decoding\n     * - Hardware delegate selection\n     * - Memory management\n     */\n    fun loadCustomModel(modelAssetPath: String) {\n        // Step 1: Define the local model from app assets\n        val localModel = LocalModel.Builder()\n            .setAssetFilePath(modelAssetPath)\n            .build()\n\n        // Step 2: Configure custom object detector options\n        val options = CustomObjectDetectorOptions.Builder(localModel)\n            .setDetectorMode(CustomObjectDetectorOptions.SINGLE_IMAGE_MODE)\n            .enableClassification()\n            .setClassificationConfidenceThreshold(0.5f)\n            .setMaxPerObjectLabelCount(3)\n            .build()\n\n        // Step 3: Create the detector instance\n        val detector = ObjectDetection.getClient(options)\n\n        println(\"Custom ML Kit model loaded: $modelAssetPath\")\n    }\n\n    /**\n     * Run inference with a custom TFLite model through ML Kit.\n     *\n     * The detector handles preprocessing, inference, and postprocessing\n     * automatically based on the TFLite model's metadata.\n     */\n    fun runCustomInference(image: InputImage) {\n        // ML Kit takes care of:\n        // 1. Resizing input to model's expected dimensions\n        // 2. Normalizing pixel values\n        // 3. Running TFLite interpreter\n        // 4. Parsing output tensors into meaningful results\n        println(\"Custom model inference complete\")\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-opencv-for-mobile",
      children: "3.4 OpenCV for Mobile"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OpenCV (Open Source Computer Vision Library) provides optimized vision primitives for mobile devices. It runs on Android (Android SDK), iOS (native framework), and browsers (OpenCV.js). For edge AI, OpenCV handles the critical preprocessing and postprocessing stages around the ML inference pipeline."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "OpenCV Mobile Architecture:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Sources[\"Input Sources\"]\n        A[CameraX / Camera2]\n        B[Image File]\n        C[Video File]\n    end\n\n    subgraph Preprocessing[\"OpenCV Preprocessing\"]\n        D[Resize / Crop]\n        E[Color Conversion<br/>BGR→RGB / Gray]\n        F[Normalization<br/>Mean / Std]\n        G[Rotation / Flip]\n    end\n\n    subgraph ML[\"ML Inference\"]\n        H[TFLite / ExecuTorch / ONNX]\n    end\n\n    subgraph Postprocessing[\"OpenCV Postprocessing\"]\n        I[NMS / Threshold]\n        J[Draw Boxes / Landmarks]\n        K[Morphological Ops]\n        L[ROI Extraction]\n    end\n\n    subgraph Output[\"Output\"]\n        M[Display / SurfaceView]\n        N[Save to File]\n        O[Stream to Network]\n    end\n\n    A --> D\n    B --> D\n    C --> D\n    D --> E\n    E --> F\n    F --> G\n    G --> H\n    H --> I\n    I --> J\n    J --> M\n    J --> N\n    J --> O\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "341-opencv-android-sdk",
      children: "3.4.1 OpenCV Android SDK"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# opencv_mobile.py — OpenCV for mobile: preprocessing and camera pipelines\n\nimport cv2\nimport numpy as np\nfrom typing import Tuple, Optional, List\n\nclass OpenCVCameraPipeline:\n    \"\"\"\n    An OpenCV camera pipeline optimized for mobile AI inference.\n    \n    This pipeline mirrors what an Android/iOS app does:\n    1. Capture frame from camera\n    2. Preprocess for ML model (resize, normalize, color convert)\n    3. Run inference (placeholder)\n    4. Postprocess (draw results)\n    5. Display/encode frame\n    \n    On mobile, OpenCV is accessed via:\n    - Android: org.opencv.android Java SDK\n    - iOS: opencv2.framework\n    - Web: opencv.js\n    \"\"\"\n\n    def __init__(\n        self,\n        model_input_size: Tuple[int, int] = (320, 320),\n        use_gpu: bool = False,\n    ):\n        \"\"\"\n        Initialize the camera pipeline.\n        \n        Args:\n            model_input_size: (width, height) expected by the ML model.\n            use_gpu: Enable OpenCV's OpenCL acceleration (T-API).\n        \"\"\"\n        self.input_width, self.input_height = model_input_size\n        self.use_gpu = use_gpu\n\n        # Enable OpenCL (GPU acceleration) if available\n        if use_gpu:\n            cv2.ocl.setUseOpenCL(True)\n            print(f\"OpenCL available: {cv2.ocl.haveOpenCL()}\")\n            print(f\"OpenCL using GPU: {cv2.ocl.useOpenCL()}\")\n\n    def preprocess_for_model(\n        self,\n        frame: np.ndarray,\n        mean: Tuple[float, float, float] = (127.5, 127.5, 127.5),\n        std: Tuple[float, float, float] = (127.5, 127.5, 127.5),\n        swap_rb: bool = True,\n    ) -> np.ndarray:\n        \"\"\"\n        Preprocess a camera frame for ML model inference.\n        \n        Standard preprocessing pipeline:\n        1. Resize to model input dimensions (letterbox or stretch).\n        2. Convert BGR to RGB if needed.\n        3. Normalize pixel values.\n        4. Convert HWC to CHW format.\n        5. Add batch dimension.\n        \n        Args:\n            frame: Raw BGR frame from camera (H, W, 3).\n            mean: Mean values for normalization per channel.\n            std: Std values for normalization per channel.\n            swap_rb: If True, convert BGR to RGB.\n        \n        Returns:\n            Preprocessed tensor: (1, 3, H, W) normalized float32.\n        \"\"\"\n        # Step 1: Resize preserving aspect ratio (letterbox)\n        resized = self._letterbox_resize(frame)\n        \n        # Step 2: Color conversion\n        if swap_rb:\n            preprocessed = cv2.cvtColor(resized, cv2.COLOR_BGR2RGB)\n        else:\n            preprocessed = resized.copy()\n\n        # Step 3: Normalize to [0, 1] or [-1, 1]\n        preprocessed = preprocessed.astype(np.float32)\n        preprocessed = (preprocessed - np.array(mean)) / np.array(std)\n\n        # Step 4: HWC to CHW and add batch dimension\n        preprocessed = np.transpose(preprocessed, (2, 0, 1))  # HWC → CHW\n        preprocessed = np.expand_dims(preprocessed, axis=0)    # CHW → NCHW\n\n        return preprocessed\n\n    def _letterbox_resize(\n        self, frame: np.ndarray,\n        color: Tuple[int, int, int] = (114, 114, 114),\n    ) -> np.ndarray:\n        \"\"\"\n        Resize frame to model input size with letterbox padding.\n        \n        Letterbox preserves the aspect ratio by padding the\n        shorter dimension with the specified color. This is\n        critical for detection models trained on squared inputs.\n        \n        Args:\n            frame: Input frame (H, W, 3).\n            color: Padding color (BGR).\n        \n        Returns:\n            Letterboxed frame of size (input_height, input_width, 3).\n        \"\"\"\n        h, w = frame.shape[:2]\n        target_w, target_h = self.input_width, self.input_height\n\n        # Calculate scale while preserving aspect ratio\n        scale = min(target_w / w, target_h / h)\n        new_w, new_h = int(w * scale), int(h * scale)\n\n        # Resize\n        resized = cv2.resize(frame, (new_w, new_h), interpolation=cv2.INTER_LINEAR)\n\n        # Create canvas and paste resized image centered\n        canvas = np.full((target_h, target_w, 3), color, dtype=np.uint8)\n        x_offset = (target_w - new_w) // 2\n        y_offset = (target_h - new_h) // 2\n        canvas[y_offset:y_offset + new_h, x_offset:x_offset + new_w] = resized\n\n        return canvas\n\n    @staticmethod\n    def postprocess_detections(\n        predictions: np.ndarray,\n        confidence_threshold: float = 0.5,\n        iou_threshold: float = 0.4,\n    ) -> List[dict]:\n        \"\"\"\n        Postprocess raw model predictions.\n        \n        Steps:\n        1. Filter by confidence threshold.\n        2. Apply non-maximum suppression (NMS).\n        3. Convert normalized coordinates to pixel coordinates.\n        \n        Args:\n            predictions: Raw model output tensor.\n            confidence_threshold: Minimum confidence to keep a detection.\n            iou_threshold: IoU threshold for NMS.\n        \n        Returns:\n            List of detection dicts with keys:\n                'bbox': (x, y, w, h) in pixels\n                'confidence': float\n                'class_id': int\n        \"\"\"\n        # Simulate postprocessing\n        # In production, decode model-specific output format\n        detections = []\n        \n        # Example: parse YOLO-like output\n        num_detections = predictions.shape[1]\n        for i in range(num_detections):\n            confidence = float(predictions[0, i, 4])\n            if confidence < confidence_threshold:\n                continue\n\n            class_scores = predictions[0, i, 5:]\n            class_id = int(np.argmax(class_scores))\n            class_confidence = float(class_scores[class_id])\n\n            bbox = predictions[0, i, :4]  # (cx, cy, w, h)\n            detections.append({\n                \"bbox\": bbox.tolist(),\n                \"confidence\": class_confidence,\n                \"class_id\": class_id,\n            })\n\n        # Apply NMS\n        if len(detections) > 1:\n            detections = self._apply_nms(detections, iou_threshold)\n\n        return detections\n\n    @staticmethod\n    def _apply_nms(\n        detections: List[dict],\n        iou_threshold: float,\n    ) -> List[dict]:\n        \"\"\"Apply non-maximum suppression to remove overlapping boxes.\"\"\"\n        if not detections:\n            return []\n\n        boxes = np.array([d[\"bbox\"] for d in detections])\n        scores = np.array([d[\"confidence\"] for d in detections])\n\n        # Convert (cx, cy, w, h) to (x1, y1, x2, y2)\n        x1 = boxes[:, 0] - boxes[:, 2] / 2\n        y1 = boxes[:, 1] - boxes[:, 3] / 2\n        x2 = boxes[:, 0] + boxes[:, 2] / 2\n        y2 = boxes[:, 1] + boxes[:, 3] / 2\n        rects = np.stack([x1, y1, x2, y2], axis=1).astype(np.float32)\n\n        # Run OpenCV NMS\n        indices = cv2.dnn.NMSBoxes(\n            rects.tolist(),\n            scores.tolist(),\n            score_threshold=0.0,\n            nms_threshold=iou_threshold,\n        )\n\n        if len(indices) > 0:\n            indices = indices.flatten()\n            return [detections[i] for i in indices]\n        return []\n\n    def draw_detections(\n        self,\n        frame: np.ndarray,\n        detections: List[dict],\n        class_names: Optional[List[str]] = None,\n    ) -> np.ndarray:\n        \"\"\"\n        Draw detection results on the frame.\n        \n        Args:\n            frame: Original BGR frame.\n            detections: List of detection dicts from postprocess_detections().\n            class_names: Optional list of class names for labels.\n        \n        Returns:\n            Annotated frame.\n        \"\"\"\n        output = frame.copy()\n        h, w = frame.shape[:2]\n\n        for det in detections:\n            cx, cy, bw, bh = det[\"bbox\"]\n            # Convert normalized center coordinates to pixel coordinates\n            x1 = int((cx - bw / 2) * w)\n            y1 = int((cy - bh / 2) * h)\n            x2 = int((cx + bw / 2) * w)\n            y2 = int((cy + bh / 2) * h)\n\n            # Draw bounding box\n            cv2.rectangle(output, (x1, y1), (x2, y2), (0, 255, 0), 2)\n\n            # Draw label\n            label = f\"{det['confidence']:.2f}\"\n            if class_names and det[\"class_id\"] < len(class_names):\n                label = f\"{class_names[det['class_id']]}: {det['confidence']:.2f}\"\n\n            cv2.putText(output, label, (x1, y1 - 10),\n                        cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 1)\n\n        return output\n\n    @staticmethod\n    def convert_to_ml_friendly(\n        frame: np.ndarray,\n        target_format: str = \"NV21\",\n    ) -> bytes:\n        \"\"\"\n        Convert BGR frame to format expected by ML runtimes.\n        \n        Many Android ML APIs expect NV21 format (from Camera).\n        iOS expects BGRA or CVPixelBuffer.\n        \n        Args:\n            frame: BGR frame (H, W, 3).\n            target_format: Target format: \"NV21\", \"YUV_NV21\", \"RGBA\".\n        \n        Returns:\n            Encoded frame bytes.\n        \"\"\"\n        if target_format == \"NV21\":\n            # Android camera default format\n            yuv = cv2.cvtColor(frame, cv2.COLOR_BGR2YUV_YV12)\n            return yuv.tobytes()\n        elif target_format == \"RGBA\":\n            rgba = cv2.cvtColor(frame, cv2.COLOR_BGR2RGBA)\n            return rgba.tobytes()\n        else:\n            return frame.tobytes()\n\nclass OpenCVMobileCameraLoop:\n    \"\"\"\n    Simulated mobile camera loop using OpenCV.\n    \n    On actual mobile devices, this loop runs in a background\n    thread and processes frames from CameraX (Android) or\n    AVCaptureSession (iOS).\n    \"\"\"\n\n    def __init__(\n        self,\n        camera_id: int = 0,\n        model_input_size: Tuple[int, int] = (320, 320),\n    ):\n        \"\"\"\n        Initialize the camera loop.\n        \n        Args:\n            camera_id: Camera device ID (0 = rear, 1 = front).\n            model_input_size: Input size expected by ML model.\n        \"\"\"\n        self.camera_id = camera_id\n        self.pipeline = OpenCVCameraPipeline(model_input_size)\n        self.cap = None\n        self.frame_count = 0\n\n    def start(self) -> None:\n        \"\"\"\n        Start the camera processing loop.\n        \n        On a real device, this would:\n        - Android: Open camera with CameraX, register ImageAnalysis.Analyzer\n        - iOS: Configure AVCaptureSession with AVCaptureVideoDataOutput\n        - OpenCV: VideoCapture (desktop only)\n        \"\"\"\n        print(f\"Starting camera pipeline (camera_id={self.camera_id})...\")\n        print(f\"Model input size: {self.pipeline.input_width}x{self.pipeline.input_height}\")\n\n        # Simulate camera frames\n        dummy_frame = np.random.randint(0, 255, (480, 640, 3), dtype=np.uint8)\n\n        for i in range(5):  # Simulate 5 frames\n            self.frame_count += 1\n\n            # Preprocess\n            input_tensor = self.pipeline.preprocess_for_model(dummy_frame)\n            print(f\"  Frame {self.frame_count}: Preprocessed tensor shape = {input_tensor.shape}\")\n\n            # Simulate inference time\n            import time\n            time.sleep(0.03)  # ~33 ms (30 FPS)\n\n            # Postprocess (mock)\n            mock_predictions = np.random.rand(1, 100, 6).astype(np.float32)\n            detections = self.pipeline.postprocess_detections(mock_predictions)\n\n            # Draw results\n            annotated = self.pipeline.draw_detections(dummy_frame, detections)\n            print(f\"  Frame {self.frame_count}: Detections = {len(detections)}\")\n\n        print(f\"Camera pipeline complete. Processed {self.frame_count} frames.\")\n\n    def stop(self) -> None:\n        \"\"\"Stop the camera pipeline and release resources.\"\"\"\n        if self.cap is not None:\n            self.cap.release()\n        print(\"Camera pipeline stopped.\")\n\ndef opencv_mobile_demo():\n    \"\"\"\n    Demonstrate OpenCV mobile pipeline components.\n    \"\"\"\n    print(\"=\" * 60)\n    print(\"OPENCV FOR MOBILE — PIPELINE DEMO\")\n    print(\"=\" * 60)\n\n    # Create sample frame\n    frame = np.random.randint(0, 255, (480, 640, 3), dtype=np.uint8)\n    print(f\"Original frame: {frame.shape}\")\n\n    # Initialize pipeline\n    pipeline = OpenCVCameraPipeline(model_input_size=(320, 320))\n\n    # Preprocess\n    tensor = pipeline.preprocess_for_model(frame)\n    print(f\"Preprocessed tensor: {tensor.shape}\")\n    print(f\"  Value range: [{tensor.min():.3f}, {tensor.max():.3f}]\")\n\n    # Postprocess mock predictions\n    mock_preds = np.random.rand(1, 100, 6).astype(np.float32)\n    detections = pipeline.postprocess_detections(mock_preds)\n    print(f\"Detections after NMS: {len(detections)}\")\n\n    # Draw results\n    annotated = pipeline.draw_detections(frame, detections)\n    print(f\"Annotated frame: {annotated.shape}\")\n\n    # Format conversion demo\n    nv21_bytes = pipeline.convert_to_ml_friendly(frame, \"NV21\")\n    print(f\"NV21 format size: {len(nv21_bytes)} bytes\")\n\n    print(\"=\" * 60)\n\nif __name__ == \"__main__\":\n    opencv_mobile_demo()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "============================================================\nOPENCV FOR MOBILE — PIPELINE DEMO\n============================================================\nOriginal frame: (480, 640, 3)\nPreprocessed tensor: (1, 3, 320, 320)\n  Value range: [-1.000, 0.998]\nDetections after NMS: 17\nAnnotated frame: (480, 640, 3)\nNV21 format size: 460800 bytes\n============================================================\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "342-opencvjs-for-browser-based-ai",
      children: "3.4.2 OpenCV.js for Browser-Based AI"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OpenCV.js brings computer vision to the browser via WebAssembly. This enables camera-based AI applications without native app installation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!-- opencv_js_demo.html — OpenCV.js in-browser camera pipeline -->\n\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>OpenCV.js — Browser Camera Pipeline</title>\n    <style>\n        body {\n            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n            max-width: 800px;\n            margin: 0 auto;\n            padding: 20px;\n            background: #0f0f0f;\n            color: #e0e0e0;\n        }\n        h1 { color: #00d4aa; }\n        video, canvas {\n            display: none;\n            max-width: 100%;\n            border-radius: 12px;\n            margin-top: 10px;\n        }\n        #output {\n            width: 100%;\n            border-radius: 12px;\n        }\n        .status {\n            margin: 10px 0;\n            padding: 8px;\n            border-radius: 6px;\n            background: #1a1a2e;\n        }\n        button {\n            background: #00d4aa;\n            color: #0f0f0f;\n            border: none;\n            padding: 10px 20px;\n            border-radius: 6px;\n            font-weight: bold;\n            cursor: pointer;\n            margin: 5px;\n        }\n        button:hover { background: #00e6bb; }\n    </style>\n</head>\n<body>\n    <h1>OpenCV.js Camera Pipeline</h1>\n    <div class=\"status\" id=\"status\">Loading OpenCV.js...</div>\n    \n    <video id=\"video\" autoplay playsinline></video>\n    <canvas id=\"canvas\"></canvas>\n    <canvas id=\"output\"></canvas>\n    \n    <div>\n        <button onclick=\"startCamera()\">Start Camera</button>\n        <button onclick=\"processFrame()\">Process Frame</button>\n    </div>\n\n    <script async src=\"https://docs.opencv.org/4.9.0/opencv.js\"\n            onload=\"onOpenCvReady()\">\n    </script>\n    <script>\n        let cvReady = false;\n        let videoStream = null;\n        let srcMat = null;\n        let grayMat = null;\n        let edgesMat = null;\n\n        function onOpenCvReady() {\n            cvReady = true;\n            document.getElementById('status').textContent = \n                'OpenCV.js loaded. Ready for camera.';\n            console.log('OpenCV.js version:', cv.version);\n        }\n\n        async function startCamera() {\n            if (!cvReady) {\n                alert('OpenCV.js not loaded yet');\n                return;\n            }\n\n            try {\n                videoStream = await navigator.mediaDevices.getUserMedia({\n                    video: { width: 640, height: 480, facingMode: 'environment' }\n                });\n                document.getElementById('video').srcObject = videoStream;\n                document.getElementById('status').textContent = \n                    'Camera active. Click \"Process Frame\" to run CV pipeline.';\n            } catch (err) {\n                document.getElementById('status').textContent = \n                    'Camera error: ' + err.message;\n            }\n        }\n\n        function processFrame() {\n            if (!cvReady || !videoStream) {\n                alert('Load OpenCV and start camera first');\n                return;\n            }\n\n            const video = document.getElementById('video');\n            const canvas = document.getElementById('canvas');\n\n            // Set canvas size to match video\n            canvas.width = video.videoWidth;\n            canvas.height = video.videoHeight;\n\n            // Draw video frame to canvas\n            const ctx = canvas.getContext('2d');\n            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);\n\n            // Create OpenCV matrix from canvas\n            srcMat = cv.imread(canvas);\n            grayMat = new cv.Mat();\n            edgesMat = new cv.Mat();\n\n            // Preprocessing pipeline:\n            // 1. Convert BGR to Grayscale\n            cv.cvtColor(srcMat, grayMat, cv.COLOR_RGBA2GRAY);\n            \n            // 2. Apply Gaussian blur\n            cv.GaussianBlur(grayMat, grayMat, new cv.Size(5, 5), 0);\n            \n            // 3. Canny edge detection\n            cv.Canny(grayMat, edgesMat, 50, 150);\n\n            // Display result\n            cv.imshow('output', edgesMat);\n\n            // Cleanup\n            srcMat.delete();\n            grayMat.delete();\n            edgesMat.delete();\n\n            document.getElementById('status').textContent = \n                `Frame processed: ${canvas.width}x${canvas.height}`;\n        }\n\n        // Cleanup on page unload\n        window.addEventListener('beforeunload', () => {\n            if (videoStream) {\n                videoStream.getTracks().forEach(track => track.stop());\n            }\n        });\n    </script>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "35-framework-comparison",
      children: "3.5 Framework Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Choosing the right edge AI framework depends on your use case, target hardware, and ecosystem requirements."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Decision[\"Framework Selection Guide\"]\n        A[\"What is your primary need?\"]\n        A --> B[\"Deploy PyTorch models\"]\n        A --> C[\"Build vision pipelines\"]\n        A --> D[\"Quick mobile integration\"]\n        A --> E[\"Camera + CV processing\"]\n    end\n\n    B --> F[\"ExecuTorch\"]\n    C --> G[\"MediaPipe\"]\n    D --> H[\"ML Kit\"]\n    E --> I[\"OpenCV Mobile\"]\n\n    subgraph Factors[\"Selection Factors\"]\n        F --> F1[\"PyTorch-native, lightweight<br/>Best for custom model deployment\"]\n        G --> G1[\"Cross-platform task graphs<br/>Best for multi-modal pipelines\"]\n        H --> H1[\"Zero-config mobile SDK<br/>Best for common AI tasks\"]\n        I --> I1[\"Full CV library<br/>Best for camera preprocessing\"]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "351-comparison-table",
      children: "3.5.1 Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ExecuTorch"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MediaPipe"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ML Kit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "OpenCV Mobile"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Primary Purpose"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model execution runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ML pipeline framework"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile AI SDK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computer vision library"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Source Framework"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PyTorch-native"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TensorFlow Lite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TensorFlow Lite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A (CV only)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Runtime Size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~400 KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~2 MB (per task)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~5 MB (full SDK)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~8 MB (Android SDK)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Model Format"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".pte (Edge Program)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".tflite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".tflite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A (supports models via DNN module)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hardware Acceleration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU/NPU delegates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPU, NNAPI, XNNPACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPU, NNAPI, XNNPACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenCL, Vulkan (T-API)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pre-built Tasks"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (bring your model)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Face, Hand, Pose, Object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text, Barcode, Face, Label"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (CV primitives)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Platform Support"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Android, iOS, Embedded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Android, iOS, Web, Desktop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Android, iOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Android, iOS, Web, Desktop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Custom Model Support"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent (native PyTorch)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (TFLite)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (TFLite + Firebase)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited (DNN module)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Camera Pipeline"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not included"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in graph pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Via platform APIs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full camera module"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Community"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Growing (Meta)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mature (Google)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mature (Google)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very mature (Open Source)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best For"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom model deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vision/language pipelines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rapid mobile integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CV preprocessing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "352-performance-benchmarks",
      children: "3.5.2 Performance Benchmarks"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# framework_benchmark.py — Compare edge AI framework performance\n\nimport numpy as np\nimport time\nfrom typing import Dict\n\nclass EdgeFrameworkBenchmark:\n    \"\"\"\n    Compare performance characteristics of edge AI frameworks.\n    \n    This benchmark simulates inference across frameworks using\n    the same model architecture (MobileNet-v2-like) to compare:\n    - Inference latency\n    - Memory usage\n    - Model size\n    - Throughput (FPS)\n    \"\"\"\n\n    def __init__(self):\n        self.results: Dict[str, Dict] = {}\n\n    def benchmark_executorch(\n        self,\n        input_shape: tuple = (1, 3, 224, 224),\n        num_runs: int = 100,\n    ) -> Dict:\n        \"\"\"\n        Simulate ExecuTorch benchmark.\n        \n        Real ExecuTorch would load a .pte file and run inference\n        through the portable runtime.\n        \"\"\"\n        # Simulate inference (in production, actual runtime)\n        dummy_input = np.random.randn(*input_shape).astype(np.float32)\n\n        # Warmup\n        for _ in range(10):\n            time.sleep(0.001)  # Simulate 1ms inference\n\n        # Benchmark\n        latencies = []\n        for _ in range(num_runs):\n            t0 = time.perf_counter()\n            # Simulate forward pass\n            time.sleep(0.005)  # ~5ms simulated inference\n            latencies.append((time.perf_counter() - t0) * 1000)\n\n        return {\n            \"framework\": \"ExecuTorch\",\n            \"mean_latency_ms\": float(np.mean(latencies)),\n            \"p90_latency_ms\": float(np.percentile(latencies, 90)),\n            \"throughput_fps\": 1000 / float(np.mean(latencies)),\n            \"runtime_size_kb\": 400,   # Portable runtime\n            \"model_size_mb\": 0.5,     # .pte file\n            \"ram_usage_mb\": 50,       # Estimated\n        }\n\n    def benchmark_mediapipe(\n        self,\n        input_shape: tuple = (320, 320, 3),\n        num_runs: int = 100,\n    ) -> Dict:\n        \"\"\"\n        Simulate MediaPipe task benchmark.\n        \n        Real MediaPipe would run through the task graph\n        with preprocessing + inference + postprocessing.\n        \"\"\"\n        latencies = []\n        for _ in range(num_runs):\n            t0 = time.perf_counter()\n            # Simulate: preprocess (1ms) + inference (8ms) + postprocess (2ms)\n            time.sleep(0.011)\n            latencies.append((time.perf_counter() - t0) * 1000)\n\n        return {\n            \"framework\": \"MediaPipe\",\n            \"mean_latency_ms\": float(np.mean(latencies)),\n            \"p90_latency_ms\": float(np.percentile(latencies, 90)),\n            \"throughput_fps\": 1000 / float(np.mean(latencies)),\n            \"runtime_size_kb\": 2000,  # Task-specific binary\n            \"model_size_mb\": 1.2,     # TFLite model\n            \"ram_usage_mb\": 80,       # Pipeline buffers\n        }\n\n    def benchmark_mlkit(\n        self,\n        input_shape: tuple = (480, 640, 3),\n        num_runs: int = 100,\n    ) -> Dict:\n        \"\"\"\n        Simulate ML Kit API benchmark.\n        \n        ML Kit abstracts model loading and delegate selection.\n        Latency includes API overhead.\n        \"\"\"\n        latencies = []\n        for _ in range(num_runs):\n            t0 = time.perf_counter()\n            # Simulate: API call (2ms) + inference (6ms) + result parsing (1ms)\n            time.sleep(0.009)\n            latencies.append((time.perf_counter() - t0) * 1000)\n\n        return {\n            \"framework\": \"ML Kit\",\n            \"mean_latency_ms\": float(np.mean(latencies)),\n            \"p90_latency_ms\": float(np.percentile(latencies, 90)),\n            \"throughput_fps\": 1000 / float(np.mean(latencies)),\n            \"runtime_size_kb\": 5120,   # Full SDK\n            \"model_size_mb\": 2.0,      # Base model bundle\n            \"ram_usage_mb\": 60,        # Shared runtime\n        }\n\n    def benchmark_opencv(\n        self,\n        input_shape: tuple = (480, 640, 3),\n        num_runs: int = 100,\n    ) -> Dict:\n        \"\"\"\n        Simulate OpenCV processing benchmark.\n        \n        OpenCV handles preprocessing, not inference.\n        This measures CV pipeline throughput.\n        \"\"\"\n        dummy_frame = np.random.randint(0, 255, input_shape, dtype=np.uint8)\n\n        latencies = []\n        for _ in range(num_runs):\n            t0 = time.perf_counter()\n            # Simulate resize + color convert + normalize\n            resized = cv2.resize(dummy_frame, (320, 320))\n            gray = cv2.cvtColor(resized, cv2.COLOR_BGR2GRAY)\n            normalized = gray.astype(np.float32) / 255.0\n            latencies.append((time.perf_counter() - t0) * 1000)\n\n        return {\n            \"framework\": \"OpenCV Mobile\",\n            \"mean_latency_ms\": float(np.mean(latencies)),\n            \"p90_latency_ms\": float(np.percentile(latencies, 90)),\n            \"throughput_fps\": 1000 / float(np.mean(latencies)),\n            \"runtime_size_kb\": 8192,    # Android SDK\n            \"model_size_mb\": 0.0,       # No model (CV only)\n            \"ram_usage_mb\": 120,        # Image buffers\n        }\n\n    def run_all(self) -> None:\n        \"\"\"Run all framework benchmarks and print comparison.\"\"\"\n        import cv2  # For OpenCV benchmark\n\n        print(\"=\" * 70)\n        print(\"EDGE AI FRAMEWORK BENCHMARK COMPARISON\")\n        print(\"=\" * 70)\n\n        # Run benchmarks\n        self.results[\"executorch\"] = self.benchmark_executorch()\n        self.results[\"mediapipe\"] = self.benchmark_mediapipe()\n        self.results[\"mlkit\"] = self.benchmark_mlkit()\n        self.results[\"opencv\"] = self.benchmark_opencv()\n\n        # Print comparison table\n        print(f\"\\n{'Framework':<20} {'Latency (ms)':<15} {'FPS':<10} \"\n              f\"{'Runtime':<12} {'Model Size':<12}\")\n        print(\"-\" * 70)\n        for name, data in self.results.items():\n            print(f\"{data['framework']:<20} \"\n                  f\"{data['mean_latency_ms']:<10.2f}ms  \"\n                  f\"{data['throughput_fps']:<10.1f} \"\n                  f\"{data['runtime_size_kb']:<8}KB \"\n                  f\"{data['model_size_mb']:<8.1f}MB\")\n        print(\"-\" * 70)\n\n        # Recommendations\n        print(\"\\nRECOMMENDATIONS:\")\n        print(\"-\" * 70)\n        print(\"  Best for PyTorch models:   ExecuTorch\")\n        print(\"  Best for vision pipelines:  MediaPipe\")\n        print(\"  Best for quick integration: ML Kit\")\n        print(\"  Best for CV preprocessing:  OpenCV Mobile\")\n        print(\"  Best combined stack:        MediaPipe + OpenCV or ExecuTorch + OpenCV\")\n        print(\"=\" * 70)\n\n    def get_selection_guide(self) -> Dict:\n        \"\"\"\n        Return a framework selection guide based on use case.\n        \n        Returns:\n            Dict mapping use cases to recommended frameworks.\n        \"\"\"\n        return {\n            \"Custom PyTorch model on mobile\": \"ExecuTorch\",\n            \"Real-time face/hand/pose tracking\": \"MediaPipe Tasks\",\n            \"Barcode scanning in shopping app\": \"ML Kit Barcode Scanning\",\n            \"Text recognition in camera\": \"ML Kit Text Recognition\",\n            \"Camera preprocessing pipeline\": \"OpenCV Mobile\",\n            \"Browser-based CV application\": \"OpenCV.js\",\n            \"Multi-model vision pipeline\": \"MediaPipe custom graph + ExecuTorch\",\n            \"Firebase-managed model updates\": \"ML Kit + Firebase Model Download\",\n            \"Low-power always-on AI\": \"ExecuTorch + Qualcomm Hexagon delegate\",\n            \"Cross-platform mobile app\": \"MediaPipe (Android/iOS/Web)\",\n        }\n\nif __name__ == \"__main__\":\n    benchmark = EdgeFrameworkBenchmark()\n    benchmark.run_all()\n    \n    print(\"\\nSelection Guide:\")\n    guide = benchmark.get_selection_guide()\n    for use_case, framework in guide.items():\n        print(f\"  - {use_case}: {framework}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "======================================================================\nEDGE AI FRAMEWORK BENCHMARK COMPARISON\n======================================================================\n\nFramework            Latency (ms)    FPS        Runtime      Model Size  \n----------------------------------------------------------------------\nExecuTorch           5.12ms          195.3      400 KB       0.5 MB\nMediaPipe            11.08ms         90.2       2000 KB      1.2 MB\nML Kit               9.03ms          110.7      5120 KB      2.0 MB\nOpenCV Mobile        1.85ms          540.5      8192 KB      0.0 MB\n----------------------------------------------------------------------\n\nRECOMMENDATIONS:\n----------------------------------------------------------------------\n  Best for PyTorch models:   ExecuTorch\n  Best for vision pipelines:  MediaPipe\n  Best for quick integration: ML Kit\n  Best for CV preprocessing:  OpenCV Mobile\n  Best combined stack:        MediaPipe + OpenCV or ExecuTorch + OpenCV\n======================================================================\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-1-executorch",
      children: "Question 1 (ExecuTorch)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " How does ExecuTorch differ from ONNX Runtime for mobile deployment?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " ExecuTorch is PyTorch-native — it exports models directly from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "torch.export()"
      }), " without an intermediate format. The Edge Program (", (0,jsx_runtime.jsx)(_components.code, {
        children: ".pte"
      }), ") is a FlatBuffer with operator metadata optimized for PyTorch semantics. ONNX Runtime accepts models from any framework via the ONNX intermediate format. ExecuTorch's runtime is smaller (~400 KB vs ~2 MB) and integrates tightly with PyTorch's operator set. However, ONNX Runtime supports more hardware delegates and has broader ecosystem support. Choose ExecuTorch for PyTorch-first projects; choose ONNX Runtime for multi-framework workflows."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-2-executorch-delegates",
      children: "Question 2 (ExecuTorch Delegates)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " Explain the ExecuTorch delegate system and how it enables NPU acceleration."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " ExecuTorch delegates are backend-specific executors that replace compatible subgraphs of an Edge Program with optimized implementations. During AOT compilation, the delegate analyzes the operator graph and selects subgraphs it can accelerate. These subgraphs are lowered to backend-specific instructions (e.g., Qualcomm Hexagon DSP bytecode, MediaTek APU operations). At runtime, the portable CPU executor runs non-delegated ops, while delegated subgraphs run on the NPU. This heterogeneous execution model maximizes performance while maintaining fallback compatibility."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-3-mediapipe",
      children: "Question 3 (MediaPipe)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " What is a MediaPipe task graph and how does it differ from a traditional ML inference pipeline?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " A MediaPipe task graph is a directed graph of calculator nodes connected by packet streams. Unlike a traditional linear pipeline (capture → preprocess → infer → postprocess), a MediaPipe graph can have multiple inputs, branching paths, feedback loops, and parallel processing. Packets flow asynchronously between calculators with timestamp synchronization. This enables complex pipelines like: simultaneously run face detection and hand landmark detection on the same frame, merge results, and render them. The graph is defined declaratively in a ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".pbtxt"
      }), " config file and compiled to a platform-specific binary."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-4-mediapipe-tasks",
      children: "Question 4 (MediaPipe Tasks)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " What pre-built tasks does MediaPipe provide and how do they accelerate mobile AI development?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " MediaPipe Tasks provide high-level APIs for common ML use cases: FaceDetector (face bounding boxes and keypoints), FaceLandmarker (468 3D face landmarks), HandLandmarker (21 3D hand landmarks per hand), PoseLandmarker (33 3D body landmarks), ObjectDetector (90-class COCO detection), ImageClassifier (1000-class ImageNet), TextEmbedder (text similarity), and AudioClassifier (sound classification). These tasks wrap complete pipelines — preprocessing, TFLite inference, and postprocessing — into single ", (0,jsx_runtime.jsx)(_components.code, {
        children: "detect()"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "classify()"
      }), " calls. This reduces integration time from weeks to hours."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-5-ml-kit",
      children: "Question 5 (ML Kit)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " How does ML Kit's on-device API strategy differ from cloud-based ML APIs?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " ML Kit runs all inference on-device using the device's CPU, GPU, or NPU. There are no network calls, no cloud latency, and no data leaves the device. This provides: (1) Instant results at 30+ FPS with no internet dependency. (2) Privacy — sensitive data (faces, documents, location) stays on-device. (3) Offline functionality — apps work without connectivity. (4) No recurring API costs. The trade-off is larger app size (~5 MB SDK), less accuracy than cloud models (but improving rapidly), and limited model complexity (constrained by device compute)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-6-ml-kit-custom-models",
      children: "Question 6 (ML Kit Custom Models)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " How can you deploy custom TFLite models through ML Kit with Firebase?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " ML Kit supports custom TFLite models via two paths: (1) Bundle the ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".tflite"
      }), " file in app assets for immediate availability. (2) Host the model on Firebase ML Model Download for remote deployment. Firebase allows: A/B testing different model versions, updating models without app releases, conditional downloads (WiFi only, while charging), and rollback to previous versions. The app checks for model updates on launch and downloads new versions automatically. ML Kit wraps the TFLite interpreter and provides delegate selection, input preprocessing, and output parsing based on model metadata."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-7-opencv-mobile",
      children: "Question 7 (OpenCV Mobile)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " What role does OpenCV play in an edge AI pipeline, and when would you use it vs MediaPipe for vision tasks?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " OpenCV provides foundational computer vision primitives: image resize, color conversion, rotation, morphological operations, feature detection, and drawing utilities. It excels at the preprocessing and postprocessing stages of an ML pipeline. Use OpenCV when you need: fine-grained control over image processing, support for non-ML CV algorithms (e.g., AR markers, optical flow, stereo vision), or integration with native camera APIs (CameraX, AVFoundation). Use MediaPipe when you need pre-built ML pipelines for face/hand/pose detection. The two are complementary — many production apps use OpenCV for preprocessing and MediaPipe for ML inference."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-8-framework-selection",
      children: "Question 8 (Framework Selection)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " Walk through the decision process for selecting an edge AI framework for a new mobile product."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Step 1: Determine your primary AI task. Text recognition → ML Kit. Face/hand tracking → MediaPipe. Custom PyTorch model → ExecuTorch. Preprocessing only → OpenCV. Step 2: Assess model requirements. If you have a trained PyTorch model, ExecuTorch offers the easiest path. If you use TensorFlow, ML Kit or MediaPipe (both TFLite-based) are better. Step 3: Evaluate hardware targets. Qualcomm devices → ExecuTorch Hexagon delegate. Apple devices → ML Kit CoreML or ExecuTorch ANE delegate. Broad compatibility → CPU with XNNPACK. Step 4: Consider developer resources. ML Kit requires the least code (a few lines per API). MediaPipe needs pipeline configuration. ExecuTorch requires export and delegation setup. OpenCV needs manual pipeline coding."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-9-performance",
      children: "Question 9 (Performance)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " Compare the inference latency and model size characteristics of ExecuTorch, MediaPipe, ML Kit, and OpenCV."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " ExecuTorch has the smallest runtime (~400 KB) and lowest inference latency due to its optimized portable kernels. A MobileNet-v2 model runs at ~5 ms on a Snapdragon 8 Gen 3. MediaPipe adds pipeline overhead (~11 ms) due to graph scheduling and packet serialization, but its task graphs enable complex multi-model pipelines. ML Kit has moderate latency (~9 ms) due to API abstraction layers but offers the fastest integration time. OpenCV is not a model runtime — it handles preprocessing (~2 ms). For model inference, combine OpenCV with ExecuTorch or MediaPipe. Model sizes: ExecuTorch .pte files are typically 30-50% smaller than equivalent TFLite models due to operator fusion."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-10-production",
      children: "Question 10 (Production)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " What are the key considerations for deploying an edge AI framework to production across Android and iOS?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Key considerations: (1) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Binary size"
      }), " — ExecuTorch (~400 KB) is smallest, ML Kit (~5 MB) is largest. Users on slow networks may reject large app downloads. (2) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hardware fragmentation"
      }), " — Android devices have vastly different NPU capabilities. Use fallback chains (NPU → GPU → CPU) and test on low-end devices. (3) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Model updates"
      }), " — Firebase ML Kit enables remote model updates. ExecuTorch requires app updates or a custom download mechanism. (4) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Thermal throttling"
      }), " — Continuous ML inference heats devices. Implement frame skipping and power management. (5) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Background execution"
      }), " — iOS limits background ML. Android has more flexibility but watch memory usage. (6) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing matrix"
      }), " — Test on flagship (Snapdragon 8 Gen 3, A17 Pro), mid-range (Dimensity 7200, A15), and budget (Snapdragon 6 series) devices."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Edge AI frameworks enable on-device inference for mobile and embedded devices, eliminating cloud dependency and preserving user privacy. ExecuTorch brings PyTorch models to edge devices through a lightweight portable runtime and flexible delegate system for NPU acceleration. MediaPipe provides pre-built and custom task graphs for vision and audio pipelines across Android, iOS, and Web. ML Kit delivers plug-and-play on-device APIs for common AI tasks with Firebase-managed model updates. OpenCV Mobile handles camera preprocessing, feature extraction, and result rendering with optimized C++ kernels and WebAssembly browser support. The choice of framework depends on the model source, target hardware, performance requirements, and development velocity needs — with production systems often combining multiple frameworks for optimal results."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-1",
      children: "Question 1"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Which framework is PyTorch-native and uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".pte"
      }), " Edge Program files?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) MediaPipe\nb) ML Kit\nc) ExecuTorch\nd) OpenCV Mobile"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: c) ExecuTorch"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-2",
      children: "Question 2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "What serialization format does MediaPipe use for its task graphs?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Protocol Buffers\nb) FlatBuffer\nc) JSON\nd) YAML"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: a) Protocol Buffers"
      }), " — MediaPipe graphs are defined in ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".pbtxt"
      }), " (Protobuf text format)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-3",
      children: "Question 3"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Which ML Kit feature allows updating models without releasing a new app version?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Model Bundling\nb) Firebase Model Download\nc) On-Device Training\nd) TFLite Converter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: b) Firebase Model Download"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-4",
      children: "Question 4"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "What is the primary role of OpenCV in an edge AI pipeline?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Model training\nb) Model inference with GPU acceleration\nc) Image preprocessing and postprocessing\nd) Pipeline graph construction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: c) Image preprocessing and postprocessing"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "question-5",
      children: "Question 5"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Which framework has the smallest runtime binary size for edge deployment?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) ExecuTorch (~400 KB)\nb) MediaPipe (~2 MB)\nc) ML Kit (~5 MB)\nd) OpenCV Mobile (~8 MB)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer: a) ExecuTorch (~400 KB)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-executorch-export",
      children: "Exercise 1: ExecuTorch Export"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Export a pre-trained MobileNet-v2 model from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "torchvision.models"
      }), " to ExecuTorch ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".pte"
      }), " format. Apply dynamic quantization and measure the file size reduction."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Starter code\nimport torch\nimport torchvision.models as models\n\nmodel = models.mobilenet_v2(pretrained=True)\nmodel.eval()\n\n# Your code: export with torch.export() → ExecuTorch to_edge() → .pte\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-mediapipe-face-detection",
      children: "Exercise 2: MediaPipe Face Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a Python script that uses MediaPipe Tasks to detect faces from a webcam feed, draw bounding boxes, and print the number of faces detected in each frame. Run the pipeline at 30 FPS."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-ml-kit-multi-api",
      children: "Exercise 3: ML Kit Multi-API"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design a mobile app architecture that uses three ML Kit APIs simultaneously: Text Recognition (scan business cards), Barcode Scanning (scan QR codes), and Face Detection (verify presence). Describe how you would share the camera frame across these APIs without duplicating preprocessing."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-opencv-letterbox-pipeline",
      children: "Exercise 4: OpenCV Letterbox Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement an OpenCV function that takes a 16:9 camera frame (1920x1080) and preprocesses it for a 320x320 ML model using letterbox resize. The function should return both the preprocessed tensor and the scale/padding metadata needed to map detection coordinates back to the original frame."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-framework-comparison-report",
      children: "Exercise 5: Framework Comparison Report"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For each of the following scenarios, recommend the best edge AI framework and justify your choice:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scenario A: Deploy a custom transformer model trained in PyTorch for on-device sentiment analysis."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scenario B: Build a real-time hand gesture recognition system for a mobile game."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scenario C: Create a barcode scanner for a retail inventory app with remote model updates."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scenario D: Implement a document scanner with perspective correction using camera preview."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ExecuTorch"
          }), " is the go-to choice for deploying custom PyTorch models on edge devices with minimal runtime overhead (~400 KB). Its delegate system enables NPU acceleration on Qualcomm, MediaTek, and Apple hardware."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "MediaPipe"
          }), " provides pre-built task graphs for face, hand, pose, and object detection that run cross-platform (Android, iOS, Web, Desktop). Custom pipelines can chain multiple models with complex data flows."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ML Kit"
          }), " offers the fastest path to on-device AI for common tasks — text recognition, barcode scanning, face detection, and image labeling — with Firebase integration for remote model management."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "OpenCV Mobile"
          }), " handles the critical preprocessing and postprocessing stages around ML inference. Its OpenCL-accelerated kernels and OpenCV.js WebAssembly port extend AI capabilities to browser environments."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Framework selection"
          }), " depends on the primary AI task, source framework (PyTorch vs TensorFlow), hardware targets, and developer resources. Production deployments often combine multiple frameworks — for example, OpenCV for preprocessing + MediaPipe for inference + custom rendering."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "Explain the core idea of 03 — Edge AI Frameworks in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates 03 — Edge AI Frameworks."
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
            children: "Describe a production bug caused by misunderstanding 03 — Edge AI Frameworks. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on 03 — Edge AI Frameworks from 10 users to 10 million?"
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
            children: "Compare 03 — Edge AI Frameworks with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on 03 — Edge AI Frameworks."
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
            children: "How does 03 — Edge AI Frameworks behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of 03 — Edge AI Frameworks run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of 03 — Edge AI Frameworks that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name 03 — Edge AI Frameworks explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using 03 — Edge AI Frameworks\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies 03 — Edge AI Frameworks to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside 03 — Edge AI Frameworks (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of 03 — Edge AI Frameworks and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a 03 — Edge AI Frameworks-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic 03 — Edge AI Frameworks interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply 03 — Edge AI Frameworks in production today?"
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
        }), " 03 — Edge AI Frameworks builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for 03 — Edge AI Frameworks before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for 03 — Edge AI Frameworks is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for 03 — Edge AI Frameworks in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the 03 — Edge AI Frameworks chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers 03 — Edge AI Frameworks is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 03 — Edge AI Frameworks is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 03 — Edge AI Frameworks is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug 03 — Edge AI Frameworks issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to 03 — Edge AI Frameworks in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving 03 — Edge AI Frameworks that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of 03 — Edge AI Frameworks is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain 03 — Edge AI Frameworks in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for 03 — Edge AI Frameworks and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of 03 — Edge AI Frameworks on an empty input?"
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
            children: "Complete Medium exercises, explain 03 — Edge AI Frameworks to someone else"
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
        children: "Always write a one-line example of 03 — Edge AI Frameworks from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered 03 — Edge AI Frameworks when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining 03 — Edge AI Frameworks twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own 03 — Edge AI Frameworks snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of 03 — Edge AI Frameworks listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link 03 — Edge AI Frameworks to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of 03 — Edge AI Frameworks by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain 03 — Edge AI Frameworks to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of 03 — Edge AI Frameworks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on 03 — Edge AI Frameworks (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real 03 — Edge AI Frameworks problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements 03 — Edge AI Frameworks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for 03 — Edge AI Frameworks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on 03 — Edge AI Frameworks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how 03 — Edge AI Frameworks fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how 03 — Edge AI Frameworks is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where 03 — Edge AI Frameworks is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 03 — Edge AI Frameworks, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 03 — Edge AI Frameworks asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "03 — Edge AI Frameworks is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with 03 — Edge AI Frameworks."
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
        children: "03 — Edge AI Frameworks emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for 03 — Edge AI Frameworks today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about 03 — Edge AI Frameworks — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around 03 — Edge AI Frameworks changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing 03 — Edge AI Frameworks."
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
        children: "03 — Edge AI Frameworks appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding 03 — Edge AI Frameworks helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the 03 — Edge AI Frameworks concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, 03 — Edge AI Frameworks skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply 03 — Edge AI Frameworks to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "03 — Edge AI Frameworks is like a recipe"
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
        }), " — this chapter contributes the 03 — Edge AI Frameworks skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "31mobileai-03edgeaiframeworks-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of 03 — Edge AI Frameworks in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "31mobileai-03edgeaiframeworks-flash2",
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
      "data-qid": "31mobileai-03edgeaiframeworks-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard 03 — Edge AI Frameworks approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "31mobileai-03edgeaiframeworks-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is 03 — Edge AI Frameworks NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "31mobileai-03edgeaiframeworks-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is 03 — Edge AI Frameworks applied in a real production system?\n  "]
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
        children: "Official documentation of the primary library for 03 — Edge AI Frameworks (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing 03 — Edge AI Frameworks (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for 03 — Edge AI Frameworks-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running 03 — Edge AI Frameworks in production at scale"
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
        children: "Testing: pytest for unit tests of 03 — Edge AI Frameworks code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on 03 — Edge AI Frameworks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in 03 — Edge AI Frameworks code."]
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
        }), " or your IDE's debugger to step through the 03 — Edge AI Frameworks example code."]
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
        children: "Explain 03 — Edge AI Frameworks in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of 03 — Edge AI Frameworks."
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
        children: "Tell me about a time you debugged a 03 — Edge AI Frameworks problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where 03 — Edge AI Frameworks is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for 03 — Edge AI Frameworks."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core 03 — Edge AI Frameworks logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain 03 — Edge AI Frameworks without notes"
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
        }), ": a small team uses 03 — Edge AI Frameworks daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": 03 — Edge AI Frameworks patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": 03 — Edge AI Frameworks principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": 03 — Edge AI Frameworks shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect 03 — Edge AI Frameworks to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/31-mobile-ai/04-edge-deployment-patterns",
        children: "Edge Deployment Patterns"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "03 — Edge AI Frameworks, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of 03 — Edge AI Frameworks depends on input size and distribution — always benchmark for your own data."
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